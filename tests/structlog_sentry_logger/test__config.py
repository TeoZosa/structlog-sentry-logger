import datetime
import enum
import inspect
import os
import uuid
from pathlib import Path
from typing import Any, Dict, List, MutableMapping, Union

import dotenv
import git
import pytest
import sentry_sdk.utils
import structlog
from _pytest.logging import LogCaptureFixture
from _pytest.monkeypatch import MonkeyPatch
from pytest_mock import MockerFixture

import structlog_sentry_logger

# Note: the below methods use `pytest`'s `caplog` fixture to properly capture the
# logs.
#
# Because `cache_logger_on_first_use=True` and we want to capture specific log
# formatting specified in the underlying logger's `structlog.configure()` step,
# capturing logs via the methods from
# [Testing](https://www.structlog.org/en/stable/testing.html) requires
# complicated patching.

# pylint: disable=redefined-outer-name


@pytest.fixture(scope="function")
def random_log_msgs(iters: int = 10) -> List[uuid.UUID]:
    return [uuid.uuid4() for _ in range(iters)]


# Demonstrates/validates `pytest`-captured logs are functionally identical to
# `structlog.testing`-captured logs
LogType = Dict[str, Union[uuid.UUID, str]]


def test_pytest_caplog_and_structlog_patching_equivalence(
    caplog: LogCaptureFixture, random_log_msgs: List[uuid.UUID]
) -> None:
    def get_pytest_captured_logs() -> Union[List[str], List[LogType]]:
        logger = structlog_sentry_logger.get_logger()
        for log_msg in random_log_msgs:
            logger.debug(log_msg)
        captured_logs = [record.msg for record in caplog.records]
        assert captured_logs
        return captured_logs

    # List[Dict[str,Union[uuid.UUID, str]]]
    def get_structlog_captured_logs() -> Union[
        List[MutableMapping[str, Any]], List[LogType]
    ]:
        structlog_caplog = structlog.testing.LogCapture()
        orig_processors = structlog.get_config()["processors"]
        patched_procs = orig_processors.copy()
        patched_procs.insert(-1, structlog_caplog)
        structlog.configure(processors=patched_procs)
        for log_msg in random_log_msgs:
            structlog_sentry_logger.get_logger().debug(log_msg)
        structlog.configure(processors=orig_processors)
        captured_logs = structlog_caplog.entries
        assert captured_logs
        return captured_logs

    def validate_timestamps_approx_equal(timestamp1: str, timestamp2: str) -> None:
        def convert_time(timestamp: str) -> datetime.datetime:
            # Make `structlog.processors.TimeStamper(fmt="iso")` timestamps compatible
            # with `datetime` ISO 8601-format string parser (i.e., remove trailing "Z").
            datetime_compatible_iso_format = timestamp[:-1]
            return datetime.datetime.fromisoformat(datetime_compatible_iso_format)

        time_delta = convert_time(timestamp1) - convert_time(timestamp2)
        assert pytest.approx(time_delta.total_seconds(), 0)

    for pytest_captured_log, structlog_captured_log in zip(
        get_pytest_captured_logs(), get_structlog_captured_logs()
    ):
        # Redundant information solely for better UX;
        # from `structlog.stdlib.add_log_level`
        del structlog_captured_log["log_level"]

        # Timestamps not tested for strict equality
        validate_timestamps_approx_equal(
            structlog_captured_log["timestamp"],  # type: ignore[arg-type]
            pytest_captured_log["timestamp"],  # type: ignore[index]
        )
        del structlog_captured_log["timestamp"]
        del pytest_captured_log["timestamp"]  # type: ignore[attr-defined]

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


# pylint: enable=protected-access


def test_sentry_DSN_integration(caplog: LogCaptureFixture) -> None:
    TestErrorClass = ConnectionError
    with pytest.raises(TestErrorClass):
        try:
            err_msg = "DUMMY ERROR TO TEST SENTRY CONNECTION"
            raise TestErrorClass(err_msg)
        except TestErrorClass as err:
            logger = structlog_sentry_logger.get_logger()
            # This line sends the above exception event to Sentry, with all the breadcrumbs included
            logger.exception("Exception caught and thrown")
            assert caplog.records
            for record in caplog.records:
                log = record.msg
                if isinstance(log, dict):  # structlog logger
                    assert log["level"] == "error" == record.levelname.lower()
                    assert log["sentry"] == "sent"
                    assert err_msg in log["exception"]
                    assert "sentry_id" in log
                elif isinstance(log, str):
                    # other stdlib-based logger initialized BEFORE our structlog logger;
                    # i.e., Sentry-invoked `urllib3.connectionpool` logger
                    assert record.name == "urllib3.connectionpool"
                    assert "sentry" in record.message
                else:
                    raise NotImplementedError(
                        "Captured log message not a supported type"
                    ) from err
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

    test_data: Dict[str, Any] = {
        **test_cases,
        "all test cases simultaneously": test_cases,
    }

    @staticmethod
    @pytest.mark.parametrize(
        "test_data", [{k: v} for k, v in test_data.items()], ids=test_data.keys()
    )
    def test(caplog: LogCaptureFixture, test_data: dict) -> None:
        logger = structlog_sentry_logger.get_logger()
        logger.debug("Testing main Logger", **test_data)
        assert caplog.records
        for record in caplog.records:
            log = record.msg
            if isinstance(log, dict):  # structlog logger
                for k in test_data:
                    assert log[k] == test_data[k]
            else:
                raise NotImplementedError("Captured log message not a supported type")


class TestBasicLoggingNonStringKeys:  # pylint: disable=too-few-public-methods
    """Non-str orjson-serializable keys"""

    class DummyEnum(enum.Enum):
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

    test_data: Dict[Any, Union[str, dict]] = {
        **test_cases,
        "all test cases simultaneously": test_cases,
    }

    @staticmethod
    @pytest.mark.parametrize(
        "test_data",
        [{k: v} for k, v in test_data.items()],
        ids=(str(k) for k in test_data.keys()),
    )
    def test(caplog: LogCaptureFixture, test_data: dict) -> None:
        if "all test cases simultaneously" in test_data:
            test_data = test_data["all test cases simultaneously"]

        logger = structlog_sentry_logger.get_logger()
        # nest non-str dict under a `test_data` kwarg; orjson can serialize non-str
        # keys, but these are not valid python kwarg keys
        logger.debug("Testing main Logger", test_data=test_data)
        assert caplog.records
        for record in caplog.records:
            log = record.msg
            if isinstance(log, dict):  # structlog logger
                for k in test_data:
                    assert log["test_data"][k] == test_data[k]
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
        caplog: LogCaptureFixture,
        test_data: dict,
    ) -> None:

        # Initialize non-Cloud Logging-compatible logger and perform logging
        logger = structlog_sentry_logger.get_logger()
        logger.debug("Testing non-Cloud Logging-compatible logger", **test_data)

        assert caplog.records
        # Parse logs and validate schema
        for test_log in [record.msg for record in caplog.records]:
            if isinstance(test_log, dict):  # structlog logger
                assert "severity" not in test_log
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
    def test_cloud_logging_log_key_added(
        caplog: LogCaptureFixture,
        monkeypatch: MonkeyPatch,
        test_data: dict,
        cloud_logging_compatibility_mode_env_var: str,
    ) -> None:
        # Enable Cloud Logging compatibility mode
        monkeypatch.setenv(cloud_logging_compatibility_mode_env_var, "ANY_VALUE")

        # Initialize Cloud Logging-compatible logger and perform logging
        logger = structlog_sentry_logger.get_logger()
        logger.debug("Testing Cloud Logging-compatible logger", **test_data)

        assert caplog.records
        # Parse logs and validate schema
        for test_log in [record.msg for record in caplog.records]:
            if isinstance(test_log, dict):  # structlog logger
                for k in test_data:
                    assert test_log[k] == test_data[k]
                assert "severity" in test_log
                assert test_log["level"] == test_log["severity"]
            else:
                raise NotImplementedError("Captured log message not a supported type")

    @staticmethod
    @pytest.mark.usefixtures(
        "patch_get_caller_name_from_frames_for_typeguard_compatibility"
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
    def test_cloud_logging_log_key_overwritten(
        caplog: LogCaptureFixture,
        monkeypatch: MonkeyPatch,
        test_data: dict,
        cloud_logging_compatibility_mode_env_var: str,
    ) -> None:
        # Enable Cloud Logging compatibility mode
        monkeypatch.setenv(cloud_logging_compatibility_mode_env_var, "ANY_VALUE")

        # Initialize Cloud Logging-compatible logger and perform logging
        logger = structlog_sentry_logger.get_logger()
        orig_cloud_logging_log_key_value = "DUMMY_VALUE_FOR_TESTING"
        logger.debug(
            "Testing Cloud Logging-compatible logger",
            **test_data,
            severity=orig_cloud_logging_log_key_value,
        )

        # Parse logs
        library_log, test_log = (record.msg for record in caplog.records)
        if not (isinstance(test_log, dict) and isinstance(library_log, dict)):
            raise NotImplementedError("Captured log messages not a supported type")

        cloud_logging_log_level_key, python_log_level_key = "severity", "level"
        # Validate Cloud Logging key correctly overwritten
        assert (
            test_log[python_log_level_key]
            == test_log[cloud_logging_log_level_key]
            != orig_cloud_logging_log_key_value
        )

        # Validate debug log schema
        assert (
            library_log[python_log_level_key]
            == "warning"
            != orig_cloud_logging_log_key_value
        )
        assert library_log["src_key"] == python_log_level_key
        assert library_log["dest_key"] == cloud_logging_log_level_key
        assert library_log["old_value"] == orig_cloud_logging_log_key_value
        assert library_log["new_value"] == "debug"
        assert library_log["logger_name"] == logger.name


class TestLoggerSchema:
    @staticmethod
    @pytest.mark.usefixtures(
        "patch_get_caller_name_from_frames_for_typeguard_compatibility"
    )
    def test_structlog_logger(
        caplog: LogCaptureFixture,
        random_log_msgs: List[uuid.UUID],
    ) -> None:
        logger = structlog_sentry_logger.get_logger()
        for log_msg in random_log_msgs:
            logger.debug(log_msg)
        assert caplog.records
        structlogged_records = [
            record for record in caplog.records if isinstance(record.msg, dict)
        ]
        module_name = structlog_sentry_logger.get_namespaced_module_name(__file__)
        for record, log_msg in zip(structlogged_records, random_log_msgs):
            log = record.msg
            assert log["level"] == "debug" == record.levelname.lower()  # type: ignore[index]
            assert (
                log["logger"] == logger.name == record.name == module_name == __name__  # type: ignore[index]
            )
            assert log["event"] == log_msg  # type: ignore[index]
            assert log["sentry"] == "skipped"  # type: ignore[index]
            assert "timestamp" in log

    @staticmethod
    def test_non_structlog_logger(
        caplog: LogCaptureFixture, random_log_msgs: List[uuid.UUID]
    ) -> None:
        logger = structlog_sentry_logger.get_logger()
        for log_msg in random_log_msgs:
            logger.debug(log_msg)
        assert caplog.records
        non_structlogged_records = [
            record for record in caplog.records if not isinstance(record.msg, dict)
        ]
        for record in non_structlogged_records:
            log = record.msg
            if isinstance(log, str):
                # other stdlib-based logger initialized BEFORE our structlog logger;
                # i.e., Sentry-invoked `urllib3.connectionpool` logger
                assert record.name == "urllib3.connectionpool"
                assert "sentry" in record.message
            else:
                raise NotImplementedError("Captured log message not a supported type")


class TestCallerNameInference:
    @staticmethod
    @pytest.fixture(scope="function")
    def prev_stack_frame() -> inspect.FrameInfo:
        stack_frames = inspect.stack()
        prev_stack_frame = stack_frames[0]
        assert prev_stack_frame.filename == __file__
        return prev_stack_frame

    # pylint: disable=protected-access
    @staticmethod
    def test_get_caller_name_deducable_module(
        prev_stack_frame: inspect.FrameInfo,
    ) -> None:
        module = structlog_sentry_logger._config.deduce_module(prev_stack_frame)
        if module is None:
            raise ValueError("Module cannot be determined")

        expected = structlog_sentry_logger._config.get_namespaced_module_name(__file__)
        actual = structlog_sentry_logger._config.get_caller_name(prev_stack_frame)
        assert actual == expected == module.__name__

    @staticmethod
    def test_get_caller_name_non_deducable_module(
        monkeypatch: MonkeyPatch, prev_stack_frame: inspect.FrameInfo
    ) -> None:
        monkeypatch.setattr(inspect, "getmodule", lambda _: None)
        expected = structlog_sentry_logger._config.get_namespaced_module_name(__file__)
        actual = structlog_sentry_logger._config.get_caller_name(prev_stack_frame)
        assert actual == expected

    # pylint: enable=protected-access


class TestCorrectNamespacing:
    # pylint: disable=protected-access
    @staticmethod
    def test_unpatched_is_caller_main_and_typeguard_enabled(
        mocker: MockerFixture,
    ) -> None:
        mocker.patch.object(
            structlog_sentry_logger._config,
            "get_caller_name_from_frames",
            lambda stack_frames: structlog_sentry_logger._config.get_caller_name(
                stack_frames[1]
            ),
        )
        expected_logger = structlog_sentry_logger.get_logger()
        mocker.patch.object(
            structlog_sentry_logger._config, "is_caller_main", lambda _: True
        )
        actual_logger = structlog_sentry_logger.get_logger()

        print(repr(expected_logger))
        assert (
            expected_logger.name == "typeguard"
            and "typeguard" in actual_logger.name
            and actual_logger.name != "__main__"
        )

    @staticmethod
    @pytest.mark.usefixtures(
        "patch_get_caller_name_from_frames_for_typeguard_compatibility"
    )
    def test_main_module(mocker: MockerFixture) -> None:
        expected_logger = structlog_sentry_logger.get_logger()
        mocker.patch.object(
            structlog_sentry_logger._config, "is_caller_main", lambda _: True
        )
        actual_logger = structlog_sentry_logger.get_logger()
        assert repr(expected_logger) == repr(actual_logger)
        module_name = structlog_sentry_logger.get_namespaced_module_name(__file__)
        assert (
            expected_logger.name
            == actual_logger.name
            == module_name
            == __name__
            != "__main__"
        )

    # pylint: enable=protected-access

    @staticmethod
    @pytest.mark.usefixtures(
        "patch_get_caller_name_from_frames_for_typeguard_compatibility"
    )
    def test_child_loggers(caplog: LogCaptureFixture) -> None:
        from tests.structlog_sentry_logger import (  # pylint: disable=import-outside-toplevel
            child_module_1,
            child_module_2,
        )

        child_module_1.log_warn()
        # This line sends an error event to Sentry, with all the breadcrumbs included
        child_module_2.log_error()
        assert caplog.records
        child_logs = [
            record for record in caplog.records if isinstance(record.msg, dict)
        ]

        for child_log, child_module in zip(
            child_logs, [child_module_1, child_module_2]
        ):
            assert (
                child_log.msg["event"]  # type: ignore[index]
                == child_log.msg["logger"]  # type: ignore[index]
                == child_log.msg["name"]  # type: ignore[index]
                == child_log.name
                == child_module.MODULE_NAME  # type: ignore[attr-defined]
                == child_module.__name__
            )


# pylint: disable=protected-access,attribute-defined-outside-init
class TestLoadingDotenv:
    @pytest.fixture(scope="function", autouse=True)
    def setup(self, tmp_path: Path, monkeypatch: MonkeyPatch) -> None:
        self.dotenv_file = tmp_path / ".env"
        monkeypatch.setattr(dotenv, "find_dotenv", lambda: self.dotenv_file)

        self.good_test_env_vars = (
            structlog_sentry_logger._config._ENV_VARS_REQUIRED_BY_LIBRARY.values()
        )
        for env_var in self.good_test_env_vars:
            self._append_var_to_dotenv_file(env_var)

    def test__load_library_specific_env_vars_valid(self) -> None:
        structlog_sentry_logger._config._load_library_specific_env_vars()

        for env_var in self.good_test_env_vars:
            assert env_var in os.environ

    def test__load_library_specific_env_vars_already_set(
        self, monkeypatch: MonkeyPatch
    ) -> None:
        already_set_value = "ALREADY SET"
        for env_var in self.good_test_env_vars:
            monkeypatch.setenv(env_var, already_set_value)

        structlog_sentry_logger._config._load_library_specific_env_vars()

        for env_var in self.good_test_env_vars:
            assert os.environ[env_var] == already_set_value

    def test__load_library_specific_env_vars_bad_env_var(self) -> None:
        bad_test_env_var = "BAD_TEST_ENV_VAR"
        self._append_var_to_dotenv_file(bad_test_env_var)

        structlog_sentry_logger._config._load_library_specific_env_vars()

        assert bad_test_env_var not in os.environ

    def _append_var_to_dotenv_file(self, env_var: str, encoding: str = "utf-8") -> None:
        try:
            current_values = self.dotenv_file.read_text(encoding=encoding)
        except FileNotFoundError:
            current_values = ""

        self.dotenv_file.write_text(
            current_values + f"{env_var}=''\n", encoding=encoding
        )


# pylint: enable=attribute-defined-outside-init


class TestSentryInitialization:
    @staticmethod
    def get_dummy_dsn(scheme: str = "https") -> str:
        project_id = 1234
        path = f"/{project_id}"
        username, hostname = "USERNAME", "hostdomain.ingest.sentry.io"
        netloc = f"{username}@{hostname}"
        good_dummy_dsn = f"{scheme}://{netloc}{path}"
        return good_dummy_dsn

    def test___init_sentry_bad_dsn(self, monkeypatch: MonkeyPatch) -> None:
        unsupported_scheme = "UNSUPPORTED_SCHEME"
        unsupported_dsn = self.get_dummy_dsn(scheme=unsupported_scheme)
        monkeypatch.setenv("SENTRY_DSN", unsupported_dsn)
        with pytest.raises(sentry_sdk.utils.BadDsn) as exc_info:
            _ = structlog_sentry_logger._config._init_sentry()
        assert exc_info.value.args[0] == "Unsupported scheme ''"

    def test___init_sentry_good_dsn(self, monkeypatch: MonkeyPatch) -> None:
        monkeypatch.setenv("SENTRY_DSN", self.get_dummy_dsn())
        assert (
            structlog_sentry_logger._config._init_sentry()._client.dsn  # type: ignore[attr-defined]
            == self.get_dummy_dsn()
        )


# pylint: enable=protected-access
