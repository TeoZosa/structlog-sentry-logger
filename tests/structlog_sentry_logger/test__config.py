from __future__ import annotations

import datetime
import enum
import importlib
import os
import stat
import sys
import tempfile
import uuid
from pathlib import Path
from typing import Any, Union

import dotenv
import git
import orjson
import pytest
import structlog
from _pytest.capture import CaptureFixture
from _pytest.logging import LogCaptureFixture
from _pytest.monkeypatch import MonkeyPatch
from pytest_mock import MockerFixture

import structlog_sentry_logger

# pylint: disable=redefined-outer-name
import tests.utils

JSONOutputType = tests.utils.JSONOutputType


# Note: the below methods use `pytest`'s `capsys` fixture to properly capture the
# logs.
#
# Because `cache_logger_on_first_use=True` and we want to capture specific log
# formatting specified in the underlying logger's `structlog.configure()` step,
# capturing logs via the methods from
# [Testing](https://www.structlog.org/en/stable/testing.html) requires
# complicated patching.


def serialized_repr(v: dict | list) -> JSONOutputType:
    return orjson.loads(
        structlog_sentry_logger._config.serializer(  # pylint: disable=protected-access
            v, option=orjson.OPT_NON_STR_KEYS
        )
    )


@pytest.fixture(scope="function")
def random_log_msgs(iters: int = 10) -> list[str]:
    return [str(uuid.uuid4()) for _ in range(iters)]


# Demonstrates/validates `pytest`-captured logs are functionally identical to
# `structlog.testing`-captured logs
LogType = dict[str, Union[uuid.UUID, str]]


def test_pytest_caplog_and_structlog_patching_equivalence(
    capsys: CaptureFixture,
    random_log_msgs: list[str],
) -> None:
    def get_pytest_captured_logs() -> list[JSONOutputType]:
        logger = structlog_sentry_logger.get_logger()
        for log_msg in random_log_msgs:
            logger.debug(log_msg)
        return tests.utils.get_validated_json_output(capsys)

    # List[Dict[str,Union[uuid.UUID, str]]]
    def get_structlog_captured_logs() -> list[JSONOutputType]:
        # Setup
        structlog_caplog = structlog.testing.LogCapture()
        orig_processors = structlog.get_config()["processors"]
        patched_procs = orig_processors.copy()
        patched_procs.insert(-1, structlog_caplog)
        structlog.configure(processors=patched_procs)

        # Log
        logger = structlog_sentry_logger.get_logger()
        for log_msg in random_log_msgs:
            logger.debug(log_msg)

        # Reformat logs to mirror what would have been captured by stdout
        captured_logs = structlog_caplog.entries
        assert captured_logs
        serialized_logs = []
        for captured_log in captured_logs:
            assert isinstance(captured_log, dict)
            serialized_logs.append(serialized_repr(captured_log))
        return serialized_logs

    def validate_timestamps_approx_equal(timestamp1: str, timestamp2: str) -> None:
        def convert_time(timestamp: str) -> datetime.datetime:
            # Make `structlog.processors.TimeStamper(fmt="iso")` timestamps compatible
            # with `datetime` ISO 8601-format string parser (i.e., remove trailing "Z").
            datetime_compatible_iso_format = timestamp[:-1]
            return datetime.datetime.fromisoformat(datetime_compatible_iso_format)

        time_delta = convert_time(timestamp1) - convert_time(timestamp2)
        assert pytest.approx(time_delta.total_seconds(), rel=1) == 0

    for pytest_captured_log, structlog_captured_log in zip(get_pytest_captured_logs(), get_structlog_captured_logs()):
        # Redundant information solely for better UX;
        # from `structlog.stdlib.add_log_level`
        del structlog_captured_log["log_level"]

        # Timestamps not tested for strict equality
        validate_timestamps_approx_equal(
            structlog_captured_log["timestamp"],  # type: ignore[arg-type]
            pytest_captured_log["timestamp"],
        )
        del structlog_captured_log["timestamp"]
        del pytest_captured_log["timestamp"]  # type: ignore[attr-defined]

        # Validate captured function names and line numbers which WILL differ between logs
        assert structlog_captured_log["funcName"] == "get_structlog_captured_logs"
        assert pytest_captured_log["funcName"] == "get_pytest_captured_logs"
        for log in structlog_captured_log, pytest_captured_log:
            del log["lineno"]  # type: ignore[attr-defined]
            del log["funcName"]  # type: ignore[attr-defined]

        # Validate that remaining fields are identical
        assert pytest_captured_log == structlog_captured_log


def test_get_config_dict() -> None:
    logging_conf_dict = structlog_sentry_logger.get_config_dict()
    expected_keys = [
        "disable_existing_loggers",
        "formatters",
        "handlers",
        "loggers",
        "version",
    ]
    assert expected_keys == sorted(list(logging_conf_dict.keys()))

    assert logging_conf_dict["version"] == 1
    assert logging_conf_dict["disable_existing_loggers"] is False
    assert "default" in logging_conf_dict["handlers"]
    assert ["colored", "plain"] == sorted(list(logging_conf_dict["formatters"].keys()))
    assert [""] == list(logging_conf_dict["loggers"].keys())


# pylint: disable=protected-access
def test_invalid_git_repository(mocker: MockerFixture) -> None:
    test_file_dir = Path(__file__)

    def mock_err() -> None:
        raise git.InvalidGitRepositoryError(test_file_dir.parent)

    mocker.patch.object(structlog_sentry_logger._config, "get_git_root", mock_err)
    # Patch `ROOT_DIR` to use the patched `get_git_root()` fn
    mocker.patch.object(
        structlog_sentry_logger._config,
        "ROOT_DIR",
        structlog_sentry_logger._config.get_root_dir(),
    )
    expected = test_file_dir.with_suffix("").name
    actual = structlog_sentry_logger._config.get_namespaced_module_name(test_file_dir)
    assert actual == expected


def test_invalid_git_executable(monkeypatch: MonkeyPatch, tmp_path: Path) -> None:
    # Configure test environment
    #
    # Unload the `gitpython` package
    monkeypatch.delitem(sys.modules, "git", raising=True)
    # Unload the library module containing the top-level imports of 3rd-party
    # dependencies and reload it to trigger a new import attempt of the
    # `gitpython` package to trigger associated code paths (i.e., testing for a usable
    # `git` executable available to the library).
    monkeypatch.delitem(sys.modules, "structlog_sentry_logger._config", raising=True)
    # Reset system executable search path to a location without a `git` executable
    monkeypatch.setenv("PATH", str(tmp_path))
    importlib.reload(structlog_sentry_logger)

    # Perform the operations under test & validate correctness
    test_file_dir = Path(__file__)
    prefix_dir = test_file_dir.root
    namespaces = test_file_dir.with_suffix("").relative_to(prefix_dir).parts
    expected = ".".join(namespaces)

    actual = structlog_sentry_logger._config.get_namespaced_module_name(test_file_dir)
    assert actual == expected


def test_read_only_filesystem(mocker: MockerFixture, tmp_path: Path) -> None:
    def mock_read_only_write_err(*args: Any, **kwargs: Any) -> None:
        del args, kwargs
        err = OSError(30, "Read-only file system")
        err.filename = "/SOME_READ_ONLY_ROOT/.logs"
        raise err

    mocker.patch.object(
        Path,
        "mkdir",
        mock_read_only_write_err,
    )

    assert structlog_sentry_logger._config.mkdir_logs_dir(tmp_path) is False
    assert structlog_sentry_logger._config.get_dev_local_filename_handler("DUMMY_MODULE_NAME") is None


@pytest.mark.xfail(
    sys.platform == "win32",
    reason="chmod to read-only mode does not work on Windows",
)
def test_read_only_root_dir(mocker: MockerFixture, tmp_path: Path) -> None:
    tmp_path.chmod(stat.S_IREAD)  # Make temp path read-only
    with pytest.raises(PermissionError):
        (tmp_path / "impossible.file").touch()
    mocker.patch.object(
        structlog_sentry_logger._config,
        "ROOT_DIR",
        tmp_path,
    )

    filename_handler = structlog_sentry_logger._config.get_dev_local_filename_handler("DUMMY_MODULE.NAME")
    assert filename_handler is not None

    filename_path = Path(filename_handler["filename"])
    # assert `tmp_path` was NOT used (i.e., because we successfully set it to read-only)
    with pytest.raises(ValueError):
        _ = tmp_path.relative_to(filename_path)
    # assert fallback tmp directory was used
    assert filename_path.relative_to(Path(tempfile.mkdtemp()).parent)


def test_mock_read_bad_git_ownership_root_dir(monkeypatch: MonkeyPatch, tmp_path: Path) -> None:
    """Test the case where a git root directory tries to be inferred by a user who is not the owner.

    This returns the same error as if `git.Repo(dir).git.rev_parse("--show-toplevel")` was
    executed in a git directory not owned by the current user. Ideally we would like to
    replicate behavior by `chown`-ing `tmp_path` to a different user, but this is not possible
    with the default user's permissions.
    """

    def mock_err(*args: Any, **kwargs: Any) -> None:
        del args, kwargs
        redacted_command = ["git", "rev-parse", "--show-toplevel"]
        status = 128
        stderr_value = (
            b"fatal: detected dubious ownership in repository at '/src'\n"
            b"To add an exception for this directory, call:\n\n"
            b"\tgit config --global --add safe.directory /src"
        )
        stdout_value = b""
        raise git.GitCommandError(redacted_command, status, stderr_value, stdout_value)

    # Initialize and cd into a dummy Git repo
    git_repo = git.Repo.init(tmp_path, bare=False)
    os.chdir(tmp_path)

    # Patch the underlying method which executes git commands. This will make any
    # git command error out with the "dubious ownership" error
    monkeypatch.setattr(git.Git, "_call_process", mock_err)

    # Demonstrate that the "dubious ownership" error is raised with the library's
    # previous method of inferring the git repo root dir
    with pytest.raises(git.CommandError):
        _ = git_repo.git.rev_parse("--show-toplevel")

    # Validate a "dubious ownership" error is *not* raised when attempting to infer the
    # project root directory via the current library method
    assert tmp_path == structlog_sentry_logger._config.get_git_root()


def test_no_filename_handler(mocker: MockerFixture, monkeypatch: MonkeyPatch) -> None:
    mocker.patch.object(
        structlog_sentry_logger._config,
        "get_dev_local_filename_handler",
        lambda _: None,
    )
    monkeypatch.setenv("STRUCTLOG_SENTRY_LOGGER_LOCAL_DEVELOPMENT_LOGGING_MODE_ON", "ANY_VALUE")
    handlers = structlog_sentry_logger._config.get_handlers("DUMMY_MODULE_NAME")
    assert "filename" not in handlers


# pylint: enable=protected-access


def test_sentry_DSN_integration(
    capsys: CaptureFixture,
    monkeypatch: MonkeyPatch,
) -> None:
    tests.utils.enable_sentry_integration_mode(monkeypatch)
    TestErrorClass = ConnectionError
    with pytest.raises(TestErrorClass):
        try:
            err_msg = "DUMMY ERROR TO TEST SENTRY CONNECTION"
            raise TestErrorClass(err_msg)
        except TestErrorClass as err:
            logger = structlog_sentry_logger.get_logger()
            # This line sends the above exception event to Sentry, with all the breadcrumbs included
            logger.exception("Exception caught and thrown")

            captured_logs = tests.utils.get_validated_json_output(capsys)
            for log in captured_logs:
                if isinstance(log, dict):  # structlog logger
                    assert log["level"] == "error"
                    assert log["sentry"] == "sent"
                    assert "sentry_id" in log
                else:
                    raise NotImplementedError("Captured log message not a supported type") from err
            raise err


class TestBasicLogging:  # pylint: disable=too-few-public-methods
    test_cases = {
        "integer": 143,
        "float": 3.14,
        "boolean": True,
        "uuid": uuid.uuid4(),
        "list": [1, "2", float("nan")],
        "dict": {
            "request": {"response": 200, "result": "DUMMY RESULTS"},
            "extra value": False,
        },
        "russian": "русский",
        "chinese": "中文",
        "japanese": "日本語の漢字とひらがなとカタカナ",
        "emoji tree (🌳)": "emoji sloth (🦥)",
        "emoji hat (🎩)": "emoji cat (🐈)",
    }

    test_data: dict[str, Any] = {
        **test_cases,
        "all test cases simultaneously": test_cases,
    }

    @staticmethod
    @pytest.mark.parametrize("test_data", [{k: v} for k, v in test_data.items()], ids=test_data.keys())
    def test(capsys: CaptureFixture, test_data: dict) -> None:
        logger = structlog_sentry_logger.get_logger()
        logger.debug("Testing main Logger", **test_data)

        captured_logs = tests.utils.get_validated_json_output(capsys)
        assert captured_logs
        for log in captured_logs:
            if isinstance(log, dict):  # structlog logger
                for k in test_data:
                    assert log[k] == serialized_repr(test_data[k])
            else:
                raise NotImplementedError("Captured log message not a supported type")


class TestSortedLogKeys:  # pylint: disable=too-few-public-methods
    test_data: dict = TestBasicLogging.test_cases
    enable_key_sorting_env_var: str = "STRUCTLOG_SENTRY_LOGGER_KEY_SORTING_ON"

    @pytest.fixture(scope="function", autouse=True)
    def setup(self, monkeypatch: MonkeyPatch) -> None:
        structlog.reset_defaults()
        monkeypatch.delenv(self.enable_key_sorting_env_var, raising=False)

    @pytest.mark.parametrize("sort_keys", [False, True])
    def test_sort_keys(
        self,
        capsys: CaptureFixture,
        monkeypatch: MonkeyPatch,
        sort_keys: bool,
    ) -> None:
        if sort_keys:
            monkeypatch.setenv(self.enable_key_sorting_env_var, "ANY_VALUE")
        logger = structlog_sentry_logger.get_logger()
        logger.debug("Testing main Logger", **self.test_data)

        captured_logs = tests.utils.get_validated_json_output(capsys)
        assert captured_logs
        for log in captured_logs:
            log_keys = list(log.keys())
            log_keys_sorted = sorted(log_keys)
            if sort_keys:
                assert log_keys_sorted == log_keys
            else:
                assert log_keys_sorted != log_keys


class TestBasicLoggingNonStringKeys:  # pylint: disable=too-few-public-methods
    """Non-str orjson-serializable keys."""

    class DummyEnum(enum.Enum):  # noqa: D106
        DUMMY_ENUM_KEY = "DUMMY_ENUM_VALUE"

    test_cases = {
        143: "integer key",
        3.14: "float key",
        True: "boolean key",
        None: "None key",
        datetime.datetime(1985, 1, 1, 0, 0, 0): "datetime.datetime key",
        datetime.date(1985, 1, 1): "datetime.date key",
        datetime.time(0, 0, 0): "datetime.time key",
        DummyEnum.DUMMY_ENUM_KEY: repr(DummyEnum.DUMMY_ENUM_KEY),
        uuid.UUID("7202d115-7ff3-4c81-a7c1-2a1f067b1ece"): "uuid.UUID key",
    }

    test_data: dict[Any, str | dict] = {
        **test_cases,
        "all test cases simultaneously": test_cases,
    }

    @staticmethod
    @pytest.mark.parametrize(
        "test_data",
        [{k: v} for k, v in test_data.items()],
        ids=(str(k) for k in test_data.keys()),
    )
    def test(capsys: CaptureFixture, test_data: dict) -> None:
        if "all test cases simultaneously" in test_data:
            test_data = test_data["all test cases simultaneously"]

        logger = structlog_sentry_logger.get_logger()
        # nest non-str dict under a `test_data` kwarg; orjson can serialize non-str
        # keys, but these are not valid python kwarg keys
        logger.debug("Testing main Logger", test_data=test_data)

        captured_logs = tests.utils.get_validated_json_output(capsys)
        assert captured_logs
        for log in captured_logs:
            if isinstance(log, dict):  # structlog logger
                for k, serialized_k in zip(test_data, serialized_repr(test_data)):
                    assert log["test_data"][serialized_k] == test_data[k]
            else:
                raise NotImplementedError("Captured log message not a supported type")


class TestCloudLogging:  # pylint: disable=too-few-public-methods
    cloud_logging_compatibility_mode_env_vars = [
        "STRUCTLOG_SENTRY_LOGGER_CLOUD_LOGGING_COMPATIBILITY_MODE_ON",
        "KUBERNETES_SERVICE_HOST",
        "GCP_PROJECT",
        "GOOGLE_CLOUD_PROJECT",
    ]

    @staticmethod
    @pytest.fixture(scope="function", autouse=True)
    def delete_all_cloud_logging_compatibility_mode_env_vars_from_environment(
        monkeypatch: MonkeyPatch,
    ) -> None:
        for env_var in TestCloudLogging.cloud_logging_compatibility_mode_env_vars:
            monkeypatch.delenv(env_var, raising=False)

    @staticmethod
    @pytest.mark.parametrize(
        "test_data",
        [{k: v} for k, v in TestBasicLogging.test_data.items()],
        ids=TestBasicLogging.test_data.keys(),
    )
    def test_cloud_logging_log_key_not_added_in_normal_logging(
        capsys: CaptureFixture,
        test_data: dict,
    ) -> None:

        # Initialize non-Cloud Logging-compatible logger and perform logging
        logger = structlog_sentry_logger.get_logger()
        logger.debug("Testing non-Cloud Logging-compatible logger", **test_data)

        captured_logs = tests.utils.get_validated_json_output(capsys)
        assert captured_logs
        # Parse logs and validate schema
        for log in captured_logs:
            if isinstance(log, dict):  # structlog logger
                assert "severity" not in log
            else:
                raise NotImplementedError("Captured log message not a supported type")

    @staticmethod
    @pytest.mark.parametrize(
        "is_stdlib_logger_requested",
        [True, False],
        ids=["stdlib-based logger", "structlog-based logger"],
    )
    @pytest.mark.parametrize(
        "cloud_logging_compatibility_mode_env_var",
        cloud_logging_compatibility_mode_env_vars,
    )
    @pytest.mark.parametrize(
        "test_data",
        [{k: v} for k, v in TestBasicLogging.test_data.items()],
        ids=TestBasicLogging.test_data.keys(),
    )
    def test_cloud_logging_log_key_added(  # pylint: disable=too-many-arguments
        caplog: LogCaptureFixture,
        capsys: CaptureFixture,
        monkeypatch: MonkeyPatch,
        test_data: dict,
        cloud_logging_compatibility_mode_env_var: str,
        is_stdlib_logger_requested: bool,
    ) -> None:
        # Enable Cloud Logging compatibility mode
        structlog.reset_defaults()
        if is_stdlib_logger_requested:
            monkeypatch.setenv("_STRUCTLOG_SENTRY_LOGGER_STDLIB_BASED_LOGGER_MODE_ON", "ANY_VALUE")
        monkeypatch.setenv(cloud_logging_compatibility_mode_env_var, "ANY_VALUE")

        # Initialize Cloud Logging-compatible logger and perform logging
        logger = structlog_sentry_logger.get_logger()
        logger.debug("Testing Cloud Logging-compatible logger", **test_data)

        if is_stdlib_logger_requested:
            tests.utils.redirect_captured_logs_to_stdout(caplog)

        captured_logs = tests.utils.get_validated_json_output(capsys)
        assert captured_logs
        # Parse logs and validate schema
        for log in captured_logs:
            if isinstance(log, dict):  # structlog logger
                for k in test_data:
                    assert log[k] == serialized_repr(test_data[k])
                assert "severity" in log
                assert log["level"] == log["severity"]
            else:
                raise NotImplementedError("Captured log message not a supported type")

    @staticmethod
    @pytest.mark.parametrize(
        "cloud_logging_compatibility_mode_env_var",
        cloud_logging_compatibility_mode_env_vars,
    )
    @pytest.mark.parametrize(
        "test_data",
        [{k: v} for k, v in TestBasicLogging.test_data.items()],
        ids=TestBasicLogging.test_data.keys(),
    )
    def test_cloud_logging_log_key_overwritten(
        capsys: CaptureFixture,
        monkeypatch: MonkeyPatch,
        test_data: dict,
        cloud_logging_compatibility_mode_env_var: str,
    ) -> None:
        # Enable Cloud Logging compatibility mode
        tests.utils.reset_logging_configs()
        monkeypatch.setenv(cloud_logging_compatibility_mode_env_var, "ANY_VALUE")

        # Initialize Cloud Logging-compatible logger and perform logging
        logger = structlog_sentry_logger.get_logger()
        orig_cloud_logging_log_key_value = "DUMMY_VALUE_FOR_TESTING"

        with pytest.warns(RuntimeWarning):
            logger.debug(
                "Testing Cloud Logging-compatible logger",
                **test_data,
                severity=orig_cloud_logging_log_key_value,
            )

        # Parse logs
        test_log = tests.utils.read_json_logs_from_stdout(capsys)[0]
        if not isinstance(test_log, dict):
            raise NotImplementedError("Captured log message not a supported type")

        cloud_logging_log_level_key, python_log_level_key = "severity", "level"
        # Validate Cloud Logging key correctly overwritten
        assert (
            test_log[python_log_level_key] == test_log[cloud_logging_log_level_key] != orig_cloud_logging_log_key_value
        )


class TestLoggerSchema:
    @staticmethod
    @pytest.mark.parametrize(
        "is_sentry_integration_mode_requested, is_sentry_integration_installed",
        (
            [True, True],
            [True, False],
            [False, True],
            [False, False],
        ),
        ids=[
            "Sentry integration requested (installed)",
            "Sentry integration requested (not installed)",
            "Sentry integration not requested (installed)",
            "Sentry integration not requested (not installed)",
        ],
    )
    def test_structlog_logger(
        capsys: CaptureFixture,
        monkeypatch: MonkeyPatch,
        random_log_msgs: list[str],
        is_sentry_integration_mode_requested: bool,
        is_sentry_integration_installed: bool,
    ) -> None:

        # Configure test environment
        tests.utils.enable_sentry_integration_mode(monkeypatch)  # Default: Sentry integration activated
        if not is_sentry_integration_installed:
            # Mock the optional `sentry_sdk` module not being importable
            # (e.g., if it wasn't installed) by nulling it in the environment's dict
            # of imported modules.
            monkeypatch.setitem(sys.modules, "sentry_sdk", None)  # type: ignore
            # Unload the vendored `structlog_sentry` package containing the `sentry_sdk` import
            monkeypatch.delitem(sys.modules, "structlog_sentry_logger.structlog_sentry", raising=True)
            # Unload the library module containing the top-level imports of 3rd-party
            # dependencies and reload it to trigger a new import attempt of the
            # now-un-importable `sentry_sdk` package (through the vendored `structlog_sentry`
            # package) to trigger associated code paths.
            monkeypatch.delitem(sys.modules, "structlog_sentry_logger._config", raising=True)
            importlib.reload(structlog_sentry_logger)
        if not is_sentry_integration_mode_requested:
            # Switch Sentry integration mode off
            monkeypatch.delenv(
                "STRUCTLOG_SENTRY_LOGGER_CLOUD_SENTRY_INTEGRATION_MODE_ON",
                raising=False,
            )

        # Perform the operations under test
        logger = structlog_sentry_logger.get_logger()
        for log_msg in random_log_msgs:
            logger.debug(log_msg)

        # Validate correctness of captured logs
        captured_logs = tests.utils.get_validated_json_output(capsys)
        assert captured_logs
        structlogged_records = [log for log in captured_logs if isinstance(log, dict)]
        module_name = structlog_sentry_logger.get_namespaced_module_name(__file__)
        for log, payload in zip(structlogged_records, serialized_repr(random_log_msgs)):
            assert log["level"] == "debug"
            assert (
                log["logger"]
                == logger._context["logger"]  # pylint: disable=protected-access
                == module_name
                == __name__
            )
            assert log["event"] == payload
            if is_sentry_integration_mode_requested and is_sentry_integration_installed:
                assert log["sentry"] == "skipped"
            else:
                assert "sentry" not in log
            assert "timestamp" in log

    @staticmethod
    def test_non_structlog_logger(capsys: CaptureFixture, random_log_msgs: list[str]) -> None:
        logger = structlog_sentry_logger.get_logger()
        for log_msg in random_log_msgs:
            logger.debug(log_msg)

        captured_logs = tests.utils.get_validated_json_output(capsys)
        assert captured_logs
        non_structlogged_records = [log for log in captured_logs if not isinstance(log, dict)]
        assert not non_structlogged_records


class TestCorrectNamespacing:
    @staticmethod
    def test_main_module(mocker: MockerFixture) -> None:
        expected_logger = structlog_sentry_logger.get_logger()
        # pylint: disable=protected-access
        mocker.patch.object(structlog_sentry_logger._config, "is_caller_main", lambda _: True)
        # pylint: enable=protected-access
        actual_logger = structlog_sentry_logger.get_logger()
        assert repr(expected_logger) == repr(actual_logger)
        module_name = structlog_sentry_logger.get_namespaced_module_name(__file__)
        assert (
            expected_logger._context["logger"]  # pylint: disable=protected-access
            == actual_logger._context["logger"]  # pylint: disable=protected-access
            == module_name
            == __name__
            != "__main__"
        )

    @staticmethod
    def test_child_loggers(capsys: CaptureFixture) -> None:
        from tests.structlog_sentry_logger import (  # pylint: disable=import-outside-toplevel
            child_module_1,
            child_module_2,
        )

        child_module_1.log_warn()
        # This line sends an error event to Sentry, with all the breadcrumbs included
        child_module_2.log_error()

        captured_logs = tests.utils.get_validated_json_output(capsys)
        assert captured_logs
        child_logs = [log for log in captured_logs if isinstance(log, dict)]

        for child_log, child_module in zip(child_logs, [child_module_1, child_module_2]):
            assert (
                child_log["event"]
                == child_log["logger"]
                == child_log["name"]
                == child_log["logger"]
                == child_module.MODULE_NAME  # type: ignore[attr-defined]
                == child_module.__name__
            )


# pylint: disable=protected-access,attribute-defined-outside-init
class TestLoadingDotenv:
    @pytest.fixture(scope="function", autouse=True)
    def setup(self, tmp_path: Path, monkeypatch: MonkeyPatch) -> None:
        self.dotenv_file = tmp_path / ".env"
        monkeypatch.setattr(dotenv, "find_dotenv", lambda: self.dotenv_file)

        self.good_test_env_vars = structlog_sentry_logger._feature_flags._ENV_VARS_REQUIRED_BY_LIBRARY.values()
        for env_var in self.good_test_env_vars:
            self._append_var_to_dotenv_file(env_var)

    def test__load_library_specific_env_vars_valid(self) -> None:
        structlog_sentry_logger._feature_flags._load_library_specific_env_vars()

        for env_var in self.good_test_env_vars:
            assert env_var in os.environ

    def test__load_library_specific_env_vars_already_set(self, monkeypatch: MonkeyPatch) -> None:
        already_set_value = "ALREADY SET"
        for env_var in self.good_test_env_vars:
            monkeypatch.setenv(env_var, already_set_value)

        structlog_sentry_logger._feature_flags._load_library_specific_env_vars()

        for env_var in self.good_test_env_vars:
            assert os.environ[env_var] == already_set_value

    def test__load_library_specific_env_vars_bad_env_var(self) -> None:
        bad_test_env_var = "BAD_TEST_ENV_VAR"
        self._append_var_to_dotenv_file(bad_test_env_var)

        structlog_sentry_logger._feature_flags._load_library_specific_env_vars()

        assert bad_test_env_var not in os.environ

    def _append_var_to_dotenv_file(self, env_var: str, encoding: str = "utf-8") -> None:
        try:
            current_values = self.dotenv_file.read_text(encoding=encoding)
        except FileNotFoundError:
            current_values = ""

        self.dotenv_file.write_text(current_values + f"{env_var}=''\n", encoding=encoding)


# pylint: enable=protected-access


class TestBasicPerfLogging:
    test_data: dict[str, Any] = TestBasicLogging.test_data
    cloud_logging_compatibility_mode_env_vars: list[str] = TestCloudLogging.cloud_logging_compatibility_mode_env_vars

    @pytest.fixture(scope="function", autouse=True)
    def setup(self, monkeypatch: MonkeyPatch) -> None:
        structlog.reset_defaults()
        monkeypatch.delenv("STRUCTLOG_SENTRY_LOGGER_LOCAL_DEVELOPMENT_LOGGING_MODE_ON", raising=False)
        monkeypatch.delenv("_STRUCTLOG_SENTRY_LOGGER_STDLIB_BASED_LOGGER_MODE_ON", raising=False)
        for env_var in self.cloud_logging_compatibility_mode_env_vars:
            monkeypatch.delenv(env_var, raising=False)

    @pytest.mark.parametrize(
        "cloud_logging_compatibility_mode_env_var",
        cloud_logging_compatibility_mode_env_vars,
    )
    @pytest.mark.parametrize("test_data", [{k: v} for k, v in test_data.items()], ids=test_data.keys())
    def test_perf_logging_cloud(
        self,
        capsys: CaptureFixture,
        monkeypatch: MonkeyPatch,
        test_data: dict,
        cloud_logging_compatibility_mode_env_var: str,
    ) -> None:
        monkeypatch.setenv(cloud_logging_compatibility_mode_env_var, "ANY_VALUE")
        self._test(capsys, test_data, is_cloud_logging_mode=True)

    @pytest.mark.parametrize("test_data", [{k: v} for k, v in test_data.items()], ids=test_data.keys())
    def test_perf_logging(
        self,
        capsys: CaptureFixture,
        test_data: dict,
    ) -> None:
        self._test(capsys, test_data, is_cloud_logging_mode=False)

    @staticmethod
    def _test(
        capsys: CaptureFixture,
        test_data: dict,
        is_cloud_logging_mode: bool,
    ) -> None:
        logger = structlog_sentry_logger.get_logger()
        logger.debug("Testing main Logger", **test_data)

        log = tests.utils.read_json_logs_from_stdout(capsys)[0]
        if isinstance(log, dict):
            for k in test_data:
                actual = serialized_repr(log[k])
                expected = serialized_repr(test_data[k])
                assert actual == expected
            if is_cloud_logging_mode:
                assert "severity" in log
                assert log["level"] == log["severity"]
            else:
                assert "severity" not in log
        else:
            raise NotImplementedError("Captured log message not a supported type")
