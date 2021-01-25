import datetime
import inspect
import logging
import logging.config
import os
from pathlib import Path
from typing import Any, List, Union

import git
import orjson
import structlog
from sentry_sdk import add_breadcrumb
from structlog_sentry import SentryJsonProcessor


def get_git_root():
    git_repo = git.Repo(Path.cwd(), search_parent_directories=True)
    git_root = git_repo.git.rev_parse("--show-toplevel")
    return Path(git_root)


def get_root_dir():
    try:
        return get_git_root()
    except git.InvalidGitRepositoryError as err:
        # the __str__() method on err returns the root descendant path, e.g., `/app`
        root_dir = Path(str(err)).resolve(strict=True)
        return root_dir


ROOT_DIR = get_root_dir()
LOG_DATA_DIR = ROOT_DIR / ".logs"
LOG_DATA_DIR.mkdir(exist_ok=True)
DATETIME_FORMAT = "%Y-%m-%d %H:%M:%S"


def get_namespaced_module_name(__file__):
    root_relative_path = Path(__file__).resolve().relative_to(ROOT_DIR)
    namespaces = root_relative_path.with_suffix("").parts
    return ".".join(namespaces)


def get_caller_name(prev_stack_frame):
    deduced_calling_module = deduce_module(prev_stack_frame)
    return (
        deduced_calling_module.__name__
        if deduced_calling_module
        and not is_caller_main(deduced_calling_module.__name__)
        else get_namespaced_module_name(prev_stack_frame.filename)
    )


def deduce_module(prev_stack_frame):
    return inspect.getmodule(prev_stack_frame[0])


def get_caller_name_from_frames(stack_frames):
    prev_stack_frame = stack_frames[1]
    return get_caller_name(prev_stack_frame)


def get_logger() -> Any:
    """
    Convenience function that returns a logger

    Returns: A proxy that creates a correctly configured logger bound to
    the __name__ of the calling module

    """
    stack_frames = inspect.stack()
    caller_name = get_caller_name_from_frames(stack_frames)
    if not structlog.is_configured():
        timestamper = structlog.processors.TimeStamper(fmt=DATETIME_FORMAT)
        set_logging_config(caller_name, timestamper)
        set_structlog_config(timestamper)
    return structlog.get_logger(caller_name)


def is_caller_main(caller_name):
    return caller_name == "__main__"


def set_logging_config(module_name, timestamper):
    def get_formatters(timestamper):
        pre_chain = [
            # Add the log level and a timestamp to the event_dict if the log
            # entry is not from structlog.
            structlog.stdlib.add_log_level,
            timestamper,
            structlog.stdlib.add_logger_name,
        ]
        return {
            "plain": {
                "()": structlog.stdlib.ProcessorFormatter,
                "processor": structlog.processors.JSONRenderer(
                    serializer=lambda *args, **kwargs: (
                        orjson.dumps(*args, **kwargs).decode()
                    ),
                    option=orjson.OPT_SORT_KEYS,
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

    def get_handlers(module_name):
        default_key = "default"
        base_handlers = {
            default_key: {
                "level": "DEBUG",
                "class": "logging.StreamHandler",
                "stream": "ext://sys.stdout",
            }
        }
        if os.environ.get("CI_ENVIRONMENT_SLUG", "").lower() == "dev-local":
            # Prettify stdout/stderr streams
            base_handlers[default_key]["formatter"] = "colored"
            # Add filename handler
            file_timestamp = datetime.datetime.utcnow().strftime("%Y-%m-%d")
            log_file_name = f"{file_timestamp}_{module_name}.json"
            log_file_path = LOG_DATA_DIR / log_file_name
            base_handlers["filename"] = {
                "level": "DEBUG",
                "class": "logging.handlers.RotatingFileHandler",
                "filename": log_file_path,
                "maxBytes": 1 << 20,  # 1 MB
                "backupCount": 3,
                "formatter": "plain",
            }
        else:
            base_handlers[default_key]["formatter"] = "plain"
        return base_handlers

    formatters = get_formatters(timestamper)
    handlers = get_handlers(module_name)
    config = {
        "version": 1,
        "disable_existing_loggers": False,
        "formatters": formatters,
        "handlers": handlers,
        "loggers": {
            "": {"handlers": handlers.keys(), "level": "DEBUG", "propagate": True}
        },
    }
    logging.config.dictConfig(config)


def set_structlog_config(timestamper):
    structlog_processors = [
        timestamper,
        structlog.processors.StackInfoRenderer(),
        structlog.processors.format_exc_info,
    ]
    stdlib_log_compatibility_processors = [
        structlog.stdlib.add_log_level,
        structlog.stdlib.add_logger_name,
        structlog.stdlib.PositionalArgumentsFormatter(),
        SentryBreadcrumbJsonProcessor(level=logging.ERROR, tag_keys="__all__"),
    ]

    # Note: MUST come last!
    format_wrapper_processer = [structlog.stdlib.ProcessorFormatter.wrap_for_formatter]
    structlog.configure(
        processors=(
            stdlib_log_compatibility_processors
            + structlog_processors
            + format_wrapper_processer
        ),
        # See [Performance](https://www.structlog.org/en/stable/performance.html)
        # for an in-depth explanation of the below settings
        context_class=dict,
        logger_factory=structlog.stdlib.LoggerFactory(),
        wrapper_class=structlog.stdlib.BoundLogger,
        cache_logger_on_first_use=True,
    )


class SentryBreadcrumbJsonProcessor(SentryJsonProcessor):

    """
    Addresses: `SentryJsonProcessor breaks logging breadcrumbs #25`_
    (source_)

    .. _`SentryJsonProcessor breaks logging breadcrumbs #25`: https://github.com/kiwicom/structlog-sentry/issues/25
    .. _`source`: https://github.com/kiwicom/structlog-sentry/issues/25#issuecomment-660292563
    """

    def __init__(  # pylint: disable=too-many-arguments
        self,
        level: int = logging.WARNING,
        breadcrumb_level: int = logging.INFO,
        active: bool = True,
        as_extra: bool = True,
        tag_keys: Union[  # pylint: disable=unsubscriptable-object
            List[str], str
        ] = None,
    ) -> None:
        self.breadcrumb_level = breadcrumb_level
        super().__init__(
            level=level,
            active=active,
            as_extra=as_extra,
            tag_keys=tag_keys,
        )

    @staticmethod
    def save_breadcrumb(logger, event_dict):
        data = event_dict.copy()
        data.pop("event")
        data.pop("logger", None)
        data.pop("level", None)
        data.pop("timestamp", None)
        breadcrumb = {
            "ty": "log",
            "level": event_dict["level"].lower(),
            "category": event_dict.get("logger") or logger.name,
            "message": event_dict["event"],
            "data": data,
        }
        add_breadcrumb(breadcrumb, hint={"event_dict": event_dict})

    def __call__(self, logger, method, event_dict) -> dict:
        do_breadcrumb = (
            getattr(logging, event_dict["level"].upper()) >= self.breadcrumb_level
        )

        if do_breadcrumb:
            self.save_breadcrumb(logger, event_dict)

        return super().__call__(logger=logger, method=method, event_dict=event_dict)
