import uuid
from datetime import datetime
from pathlib import Path

import git
import pytest
import structlog

import structlog_sentry_logger
from tests.structlog_sentry_logger import child_module_1, child_module_2

LOGGER = structlog_sentry_logger.get_logger()
MODULE_NAME = structlog_sentry_logger.get_namespaced_module_name(__file__)

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
def random_log_msgs(iters=10):
    return [uuid.uuid4().hex for _ in range(iters)]


# Demonstrates/validates `pytest`-captured logs are functionally identical to
# `structlog.testing`-captured logs
def test_pytest_caplog_and_structlog_patching_equivalence(caplog, random_log_msgs):
    def get_pytest_captured_logs():
        for log_msg in random_log_msgs:
            LOGGER.debug(log_msg)
        captured_logs = [record.msg for record in caplog.records]
        assert captured_logs
        return captured_logs

    def get_structlog_captured_logs():
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

    def validate_timestamps_approx_equal(timestamp1: str, timestamp2: str):
        def convert_time(timestamp: str) -> datetime:
            return datetime.strptime(
                timestamp,
                structlog_sentry_logger._config.DATETIME_FORMAT,  # pylint: disable=protected-access
            )

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
            structlog_captured_log["timestamp"], pytest_captured_log["timestamp"]
        )
        del structlog_captured_log["timestamp"]
        del pytest_captured_log["timestamp"]

        assert pytest_captured_log == structlog_captured_log


def test_basic_logging(caplog):
    req = {"response": 200, "result": "DUMMY RESULTS"}
    _uuid = uuid.uuid4()
    LOGGER.debug("Testing main Logger", uuid=_uuid, req=req)
    assert caplog.records
    for record in caplog.records:
        log = record.msg
        if isinstance(log, dict):  # structlog logger
            assert log["uuid"] == _uuid
            assert log["req"] == req
        else:
            raise NotImplementedError("Captured log message not a supported type")


# pylint: disable=protected-access
def test_namespacing_correct_for_main_module(mocker):
    mocker.patch.object(
        structlog_sentry_logger._config, "is_caller_main", lambda _: True
    )
    assert structlog_sentry_logger.get_logger().name == LOGGER.name


def test_invalid_git_repository(mocker):
    test_file_dir = Path(__file__)

    def mock_err():
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


def test_child_loggers(caplog):
    child_module_1.log_warn()
    # This line sends an error event to Sentry, with all the breadcrumbs included
    child_module_2.log_error()
    assert caplog.records
    child_logs = [record for record in caplog.records if isinstance(record.msg, dict)]

    for child_log, child_module, log_level in zip(
        child_logs, [child_module_1, child_module_2], ["warning", "error"]
    ):
        assert child_log.msg["level"] == log_level == child_log.levelname.lower()
        assert child_log.msg["event"] == child_module.MODULE_NAME
        assert (
            child_log.msg["event"]
            == child_log.msg["logger"]
            == child_log.msg["name"]
            == child_log.name
            == child_module.MODULE_NAME
        )
        assert child_log.msg["file"] == child_log.pathname
        assert child_log.msg["sleep_time"] == child_module.SLEEP_TIME


def test_structlog_logger_schema(caplog, random_log_msgs):
    for log_msg in random_log_msgs:
        LOGGER.debug(log_msg)
    assert caplog.records
    structlogged_records = [
        record for record in caplog.records if isinstance(record.msg, dict)
    ]
    for record, log_msg in zip(structlogged_records, random_log_msgs):
        log = record.msg
        assert log["level"] == "debug" == record.levelname.lower()
        assert log["logger"] == LOGGER.name == MODULE_NAME == record.name
        assert log["event"] == log_msg
        assert log["sentry"] == "skipped"
        assert "timestamp" in log


def test_nonstructlog_logger_schema(caplog, random_log_msgs):
    for log_msg in random_log_msgs:
        LOGGER.debug(log_msg)
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


def test_sentry_DSN_integration(caplog):
    TestErrorClass = ConnectionError
    with pytest.raises(TestErrorClass):
        try:
            err_msg = "DUMMY ERROR TO TEST SENTRY CONNECTION"
            raise TestErrorClass(err_msg)
        except TestErrorClass as err:
            # This line sends the above exception event to Sentry, with all the breadcrumbs included
            LOGGER.exception("Exception caught and thrown")
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
