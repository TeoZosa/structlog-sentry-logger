import uuid

import pytest

from structlog_sentry_logger import logger
from tests.structlog_sentry_logger import child_module_1, child_module_2

LOGGER = logger.get_logger()
MODULE_NAME = logger.get_namespaced_module_name(__file__)


def test_main_logger(caplog):
    req = {"response": 200, "result": "DUMMY RESULTS"}
    _uuid = uuid.uuid4()
    LOGGER.debug("Testing main Logger", uuid=_uuid, req=req)
    for record in caplog.records:
        log = record.msg
        if isinstance(log, dict):  # structlog logger
            assert log["uuid"] == _uuid
            assert log["req"] == req
        else:
            raise NotImplementedError("Captured log message not a supported type")


def test_child_loggers(caplog):
    child_module_1.log_warn()
    child_module_2.log_error()
    c1_logs, c2_logs = [
        record for record in caplog.records if isinstance(record.msg, dict)
    ]
    assert c1_logs.msg["level"] == "warning" == c1_logs.levelname.lower()
    assert (
        c1_logs.msg["event"]
        == c1_logs.msg["logger"]
        == c1_logs.msg["name"]
        == c1_logs.name
        == child_module_1.MODULE_NAME
    )
    assert c1_logs.msg["file"] == c1_logs.pathname
    assert c1_logs.msg["sleep_time"] == child_module_1.SLEEP_TIME

    assert c2_logs.msg["level"] == "error" == c2_logs.levelname.lower()
    assert c2_logs.msg["event"] == child_module_2.MODULE_NAME
    assert (
        c2_logs.msg["event"]
        == c2_logs.msg["logger"]
        == c2_logs.msg["name"]
        == c2_logs.name
        == child_module_2.MODULE_NAME
    )
    assert c2_logs.msg["file"] == c2_logs.pathname
    assert c2_logs.msg["sleep_time"] == child_module_2.SLEEP_TIME


def test_logger_schema(caplog):
    log_msg = "Generating log to inspect schema"
    LOGGER.debug(log_msg)
    for record in caplog.records:
        log = record.msg
        if isinstance(log, dict):  # structlog logger
            assert log["level"] == "debug" == record.levelname.lower()
            assert log["logger"] == LOGGER.name == MODULE_NAME == record.name
            assert log["event"] == log_msg
            assert log["sentry"] == "skipped"
            assert "timestamp" in log
        else:
            raise NotImplementedError("Captured log message not a supported type")


def test_sentry_DSN_integration(caplog):
    TestErrorClass = ConnectionError
    with pytest.raises(TestErrorClass):
        try:
            err_msg = "DUMMY ERROR TO TEST SENTRY CONNECTION"
            raise TestErrorClass(err_msg)
        except TestErrorClass as err:
            LOGGER.exception("Exception caught and thrown")
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
                    )
            raise err
