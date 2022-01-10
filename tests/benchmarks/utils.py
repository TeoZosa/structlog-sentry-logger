import dataclasses
from typing import Any

from tests.structlog_sentry_logger import test__config


@dataclasses.dataclass
class TestCases:
    __test__ = False
    basic = test__config.TestBasicLogging.test_cases
    non_str_keys = {
        "dummy kwarg for dict unpacking in log function": test__config.TestBasicLoggingNonStringKeys.test_cases
    }


def lots_of_logging(logger: Any, test_cases: dict) -> None:
    for i in range(10):
        for log_level_fn in [
            logger.debug,
            logger.info,
            logger.warn,
            logger.error,
            logger.fatal,
        ]:
            log_level_fn(f"iter: {i}", **test_cases)
