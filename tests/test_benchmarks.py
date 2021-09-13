from typing import Any

from pytest_benchmark.fixture import BenchmarkFixture

import structlog_sentry_logger
from tests.structlog_sentry_logger import test__config


def lots_of_logging(logger: Any) -> None:
    for i in range(10):
        for log_level_fn in [
            logger.debug,
            logger.info,
            logger.warn,
            logger.error,
            logger.fatal,
        ]:
            log_level_fn(f"iter: {i}", **test__config.TestBasicLogging.test_cases)


def test_logging_orjson_serializer(benchmark: BenchmarkFixture) -> None:
    logger = structlog_sentry_logger.get_logger()
    benchmark(lots_of_logging, logger=logger)
