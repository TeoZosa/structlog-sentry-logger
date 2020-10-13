import pprint

from structlog.testing import capture_logs

from structlog_sentry_logger import logger
from tests.structlog_sentry_logger import child_module_1, child_module_2

LOGGER = logger.get_logger()
MODULE_NAME = logger.get_namespaced_module_name(__file__)


def test_main_logger():
    struct_log_message = {
        "uuid": -1,
        "req": {"response": 200, "result": "DUMMY RESULTS"},
        "logger": LOGGER,
    }
    with capture_logs() as expected_logs:
        LOGGER.debug(MODULE_NAME, **struct_log_message)
    with capture_logs() as actual_logs:
        LOGGER.debug(
            MODULE_NAME,
            uuid=-1,
            req={"response": 200, "result": "DUMMY RESULTS"},
            logger=LOGGER,
        )
    assert actual_logs == expected_logs
    assert actual_logs[0]["log_level"] == "debug"
    pprint.pprint(actual_logs)


def test_child_loggers():
    with capture_logs() as c1_logs:
        child_module_1.log_warn()
        assert c1_logs[0]["log_level"] == "warn"
        pprint.pprint(c1_logs)
    with capture_logs() as c2_logs:
        child_module_2.log_error()
        assert c2_logs[0]["log_level"] == "error"
        pprint.pprint(c2_logs)


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
