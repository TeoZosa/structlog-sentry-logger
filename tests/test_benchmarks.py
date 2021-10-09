from typing import Any

from pytest_benchmark.fixture import BenchmarkFixture

import structlog_sentry_logger
from tests.structlog_sentry_logger import test__config


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


def test_logging_orjson_serializer(benchmark: BenchmarkFixture) -> None:
    logger = structlog_sentry_logger.get_logger()
    benchmark(
        lots_of_logging,
        logger=logger,
        test_cases=test__config.TestBasicLogging.test_cases,
    )


def test_logging_stdlib_json_serializer(benchmark: BenchmarkFixture) -> None:
    # Setup
    structlog_sentry_logger._config._toggle_json_library(  # pylint: disable=protected-access
        use_orjson=False
    )

    logger = structlog_sentry_logger.get_logger()
    benchmark(
        lots_of_logging,
        logger=logger,
        test_cases=test__config.TestBasicLogging.test_cases,
    )
    # Teardown
    structlog_sentry_logger._config._toggle_json_library(  # pylint: disable=protected-access
        use_orjson=True
    )


def test_logging_orjson_serializer_non_str_keys(benchmark: BenchmarkFixture) -> None:
    logger = structlog_sentry_logger.get_logger()
    benchmark(
        lots_of_logging,
        logger=logger,
        test_cases={
            "dummy kwarg for dict unpacking in log function": test__config.TestBasicLoggingNonStringKeys.test_cases
        },
    )
