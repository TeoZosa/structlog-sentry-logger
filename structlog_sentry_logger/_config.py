from __future__ import annotations

import dataclasses
import datetime
import inspect
import json
import logging
import logging.config
import os
import pathlib
import tempfile
import warnings
from types import FrameType
from typing import Any, Callable

try:
    import git
except ImportError as exc:  # Namely, when a git executable is not found
    logging.getLogger(__name__).warning("Failed to import git", exc_info=exc)
    git = None  # type: ignore

import orjson  # type: ignore
import structlog

from structlog_sentry_logger import _feature_flags

try:
    from structlog_sentry_logger.structlog_sentry import SentryBreadcrumbJsonProcessor
except ImportError:
    SentryBreadcrumbJsonProcessor = None  # type: ignore


@dataclasses.dataclass
class Config:
    use_orjson: bool = True
    orjson_configs: int = orjson.OPT_NON_STR_KEYS
    stdlib_logging_config_already_configured: bool = False
    stdlib_logging_sort_keys: bool = False


def get_root_dir() -> pathlib.Path:
    if git is not None:
        try:
            return get_git_root()
        except git.InvalidGitRepositoryError as err:
            # the __str__() method on err returns the root descendant path, e.g., `/app`
            root_dir = pathlib.Path(str(err)).resolve(strict=True)
            return root_dir
    else:
        # If we couldn't import the git module, we have no way of automatically
        # determining the application root directory. In that case, fallback to the
        # system root directory for module namespacing
        system_root_dir = pathlib.Path(pathlib.Path.cwd().resolve().root)
        return system_root_dir


def get_git_root() -> pathlib.Path:  # Gratuitous indirection for testing
    git_repo = git.Repo(pathlib.Path.cwd(), search_parent_directories=True)

    # Note: `working_dir` should never be None, but mypy complains and there may be some
    # unknown corner case, so falling back to the system root directory for module
    # namespacing (this might be better merged with the logic in `get_root_dir`).
    git_root = git_repo.working_dir or pathlib.Path.cwd().resolve().root
    return pathlib.Path(git_root)


_LOG_LEVEL = logging.getLevelName(os.environ.get("LOG_LEVEL", "DEBUG").upper())
_SENTRY_LOG_LEVEL = logging.getLevelName(os.environ.get("STRUCTLOG_SENTRY_LOGGER_SENTRY_LOG_LEVEL", "ERROR").upper())

ROOT_DIR = get_root_dir()
_TIMESTAMPER = structlog.processors.TimeStamper(fmt="iso", utc=True)
_CONFIGS = Config(
    use_orjson=True,
    orjson_configs=orjson.OPT_NON_STR_KEYS,
    stdlib_logging_config_already_configured=False,
    stdlib_logging_sort_keys=False,
)


def _toggle_json_library(use_orjson: bool = True) -> None:
    _CONFIGS.use_orjson = use_orjson


def get_config_dict() -> dict:
    """Convenience function to get the local logging configuration dictionary,.

    e.g., to help configure loggers from other libraries.

    Returns: The logging configuration dictionary that would be used to
    configure the Python logging library component of the logger

    """
    caller_name = get_caller_name_from_frames()
    return get_logging_config(caller_name)


def get_logger(name: str | None = None) -> Any:
    """Convenience function that returns a logger.

    Returns: A proxy that creates a correctly configured logger bound to
    the __name__ of the calling module

    """
    del name
    caller_name = get_caller_name_from_frames()

    # Conditionally enable key sorting (off by default due to performance penalty)
    if _feature_flags.is_log_key_sorting_requested():
        _CONFIGS.orjson_configs |= orjson.OPT_SORT_KEYS
        _CONFIGS.stdlib_logging_sort_keys = True

    if not _CONFIGS.stdlib_logging_config_already_configured:
        set_logging_config(caller_name)
        _CONFIGS.stdlib_logging_config_already_configured = True
    if not structlog.is_configured():
        if (
            _feature_flags.is_prettified_output_formatting_requested()
            or _feature_flags.is_stdlib_based_structlog_configuration_requested()
        ):
            set_stdlib_based_structlog_config()
        else:
            set_optimized_structlog_config()
    logger = structlog.get_logger(caller_name).bind(logger=caller_name)
    if hasattr(logger, "setLevel"):  # stdlib-based logger
        logger.setLevel(_LOG_LEVEL)
    return logger


getLogger = get_logger
"""
CamelCase alias for `structlog_sentry_logger.get_logger`.
"""


def get_caller_name_from_frames() -> str:
    caller_frame, caller_name = _get_caller_stack_frame_and_name()
    if is_caller_main(caller_name):
        filename = inspect.getfile(caller_frame)
        caller_name = get_namespaced_module_name(filename)
    return caller_name


def _get_caller_stack_frame_and_name() -> tuple[FrameType, str]:
    return structlog._frames._find_first_app_frame_and_name(  # pylint:disable=protected-access
        additional_ignores=["structlog_sentry_logger"]
    )


def is_caller_main(caller_name: str) -> bool:  # Gratuitous indirection for testing
    return caller_name == "__main__"


def get_namespaced_module_name(__file__: pathlib.Path | str) -> str:
    fully_qualified_path = pathlib.Path(__file__).resolve()
    prefix_dir = str(ROOT_DIR) if str(ROOT_DIR) in str(fully_qualified_path) else "/"
    namespaces = fully_qualified_path.relative_to(prefix_dir).with_suffix("").parts
    return ".".join(namespaces)


def set_logging_config(module_name: str) -> None:
    config_dict = get_logging_config(module_name)
    logging.config.dictConfig(config_dict)


def get_logging_config(module_name: str) -> dict:
    handlers = get_handlers(module_name)
    return {
        "version": 1,
        "disable_existing_loggers": False,
        "formatters": (get_formatters()),
        "handlers": handlers,
        "loggers": {
            "": {
                "handlers": list(handlers.keys()),
                "level": "WARNING",
                "propagate": True,
            }
        },
    }


def get_handlers(module_name: str) -> dict:
    default_key = "default"
    base_handlers = {
        default_key: {
            "level": "DEBUG",
            "class": "logging.StreamHandler",
            "stream": "ext://sys.stdout",
        }
    }
    default_handler = base_handlers[default_key]
    if _feature_flags.is_prettified_output_formatting_requested():

        # Add logfile handler
        filename_handler = get_dev_local_filename_handler(module_name)
        if filename_handler is not None:
            base_handlers["filename"] = filename_handler
        # Prettify stdout/stderr streams
        default_handler["formatter"] = "colored"
    else:
        default_handler["formatter"] = "plain"
    return base_handlers


def get_dev_local_filename_handler(module_name: str) -> dict | None:
    """Builds logfile handler configs.

    Before building the logfile handler configurations, this function attempts to
    initialize the log directory in the (inferred) application root directory. If this
    fails (for example, if the directory is read-only), it will fall back to a
    platform-specific temp directory. If this too fails, it will exit without creating
    the logfile handler configuration.

    Args:
        module_name: the name of the calling module which will be incorporated in the
        logfile file name to provide better log provenance.

    Returns: logfile handler configurations if log directories are writeable, else None

    """
    file_timestamp = datetime.datetime.utcnow().isoformat().replace(":", "-")
    log_file_name = f"{file_timestamp}_{module_name}.jsonl"

    fallback_log_data_root_dir = pathlib.Path(tempfile.mkdtemp(prefix=ROOT_DIR.name))
    for log_data_dir in [
        ROOT_DIR / ".logs",
        fallback_log_data_root_dir / ".logs",
    ]:
        if mkdir_logs_dir(log_data_dir):
            __LOGGER.debug(
                "saving JSON logs to local log directory",
                log_dir=str(log_data_dir),
            )

            log_file_path = log_data_dir / log_file_name
            return {
                "level": "DEBUG",
                "class": "logging.handlers.RotatingFileHandler",
                "filename": str(log_file_path),
                # 1 MB
                "maxBytes": 1 << 20,  # type: ignore[dict-item]
                "backupCount": 3,  # type: ignore[dict-item]
                "formatter": "plain",
            }
    return None  #


def mkdir_logs_dir(log_data_dir: pathlib.Path) -> bool:
    try:
        log_data_dir.mkdir(exist_ok=True)
        return True
    except OSError as err:
        __LOGGER.warning(
            "logs directory creation failed",
            log_dir=str(log_data_dir),
            exc_info=err,
        )
        return False


def get_formatters() -> dict:
    pre_chain = [
        # Add the log level and a timestamp to the event_dict if the log
        # entry is not from structlog.
        structlog.stdlib.add_log_level,
        _TIMESTAMPER,
        structlog.stdlib.add_logger_name,
    ]
    return {
        "plain": {
            "()": structlog.stdlib.ProcessorFormatter,
            "processor": structlog.processors.JSONRenderer(
                serializer=serializer,
                option=_CONFIGS.orjson_configs,
            ),
            "foreign_pre_chain": pre_chain,
        },
        "colored": {
            "()": structlog.stdlib.ProcessorFormatter,
            "processor": structlog.dev.ConsoleRenderer(colors=True),
            "format": "%(message)s [in %(funcName)s]",
            "foreign_pre_chain": pre_chain,
        },
    }


def serializer(
    *args: Any,
    default: Callable[[Any], Any] | None = None,
    option: int | None = None,
) -> str:
    if _CONFIGS.use_orjson:
        return orjson.dumps(*args, default=default, option=option).decode()  # type: ignore[misc]
    return json.dumps(*args, sort_keys=_CONFIGS.stdlib_logging_sort_keys)


def set_stdlib_based_structlog_config() -> None:
    structlog_processors = [
        _TIMESTAMPER,
        structlog.processors.StackInfoRenderer(),
        add_line_number_and_func_name,
    ]

    if SentryBreadcrumbJsonProcessor is not None and _feature_flags.is_sentry_integration_mode_requested():
        structlog_processors.append(SentryBreadcrumbJsonProcessor(level=_SENTRY_LOG_LEVEL, tag_keys="__all__"))

    if (
        _feature_flags.is_cloud_logging_compatibility_mode_requested()
        or _feature_flags.is_probably_in_cloud_environment()
    ):
        structlog_processors.append(add_severity_field_from_level_if_in_cloud_environment)

    stdlib_log_compatibility_processors = [
        structlog.stdlib.filter_by_level,
        structlog.stdlib.add_log_level,
        structlog.stdlib.PositionalArgumentsFormatter(),
    ]

    # Note: MUST come last!
    format_wrapper_processer = [structlog.stdlib.ProcessorFormatter.wrap_for_formatter]
    structlog.configure(
        processors=(
            stdlib_log_compatibility_processors  # type: ignore[arg-type]
            + structlog_processors
            + format_wrapper_processer  # type: ignore[arg-type,operator]
        ),
        # See [Performance](https://www.structlog.org/en/stable/performance.html)
        # for an in-depth explanation of the below settings
        context_class=dict,
        logger_factory=structlog.stdlib.LoggerFactory(),
        wrapper_class=structlog.stdlib.BoundLogger,
        cache_logger_on_first_use=True,
    )


def set_optimized_structlog_config() -> None:
    processors = [
        structlog.contextvars.merge_contextvars,
        structlog.processors.add_log_level,
        add_line_number_and_func_name,
        _TIMESTAMPER,
    ]
    if SentryBreadcrumbJsonProcessor is not None and _feature_flags.is_sentry_integration_mode_requested():
        processors.append(SentryBreadcrumbJsonProcessor(level=_SENTRY_LOG_LEVEL, tag_keys="__all__"))

    if (
        _feature_flags.is_cloud_logging_compatibility_mode_requested()
        or _feature_flags.is_probably_in_cloud_environment()
    ):
        processors.append(add_severity_field_from_level_if_in_cloud_environment)

    # Note: MUST come last!
    processors.append(
        structlog.processors.JSONRenderer(
            serializer=serializer_bytes,
            option=_CONFIGS.orjson_configs,
        )
    )
    structlog.configure(
        processors=processors,  # type: ignore[arg-type]
        wrapper_class=structlog.make_filtering_bound_logger(_LOG_LEVEL),
        logger_factory=structlog.BytesLoggerFactory(),
        cache_logger_on_first_use=True,
    )


def serializer_bytes(
    *args: Any,
    default: Callable[[Any], Any] | None = None,
    option: int | None = None,
) -> bytes:
    if _CONFIGS.use_orjson:
        return orjson.dumps(*args, default=default, option=option)  # type: ignore[misc]
    # pylint: disable=no-value-for-parameter
    return json.dumps(*args, sort_keys=_CONFIGS.stdlib_logging_sort_keys).encode("utf-8")
    # pylint: enable=no-value-for-parameter


def add_line_number_and_func_name(
    logger: Any,  # pylint: disable=unused-argument
    method: str,  # pylint: disable=unused-argument
    event_dict: structlog.types.EventDict,
) -> structlog.types.EventDict:
    caller_frame, _ = _get_caller_stack_frame_and_name()
    event_dict["lineno"] = caller_frame.f_lineno
    event_dict["funcName"] = caller_frame.f_code.co_name
    return event_dict


def add_severity_field_from_level_if_in_cloud_environment(
    logger: Any,  # pylint: disable=unused-argument
    method: str,  # pylint: disable=unused-argument
    event_dict: structlog.types.EventDict,
) -> structlog.types.EventDict:
    """A custom processor for structlog for Cloud Logging compatibility.

    Since Cloud Logging infers log levels from the `severity` key, simply duplicates
    `level` to the `severity` field in the logger's event dictionary.
    """
    cloud_logging_log_level_key, python_log_level_key = "severity", "level"
    if cloud_logging_log_level_key in event_dict:
        # Warn users that they should fix their application code
        warnings.warn(
            f"Existing field "
            f"{cloud_logging_log_level_key}={event_dict[cloud_logging_log_level_key]} "
            "being overwritten by log level "
            f"({python_log_level_key}={event_dict[python_log_level_key]})",
            RuntimeWarning,
        )

        # Also, redundantly log this warning to users.
        #
        # While best practice is to only log warnings which the user isn't expected
        # to fix (https://docs.python.org/2/howto/logging.html#when-to-use-logging),
        # many users rely on automated log parsing tools for their alerting and
        # audit trails.
        __LOGGER.warning(
            "Existing log value being overwritten",
            src_key=python_log_level_key,
            dest_key=cloud_logging_log_level_key,
            old_value=event_dict[cloud_logging_log_level_key],
            new_value=event_dict[python_log_level_key],
            logger_that_used_reserved_key=event_dict["logger"],
        )
    event_dict[cloud_logging_log_level_key] = event_dict[python_log_level_key]
    return event_dict


def __get_meta_logger() -> Any:
    """Meta-logger to emit messages generated during logger configuration."""
    if _feature_flags.is_prettified_output_formatting_requested():
        # The following line is covered by unit tests but coverage doesn't get picked up
        # for some reason
        set_stdlib_based_structlog_config()  # pragma: no cover
    else:
        set_optimized_structlog_config()
    logger_name = "structlog_sentry_logger._config"
    logger = structlog.get_logger(logger_name).bind(logger=logger_name)
    structlog.reset_defaults()
    return logger


__LOGGER = __get_meta_logger()
