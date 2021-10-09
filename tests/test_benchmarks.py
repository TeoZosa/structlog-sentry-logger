from typing import Any, Generator

import pytest
from pytest_benchmark.fixture import BenchmarkFixture

import structlog_sentry_logger
from tests.structlog_sentry_logger import test__config


def _basic_logging_helper_method(benchmark: BenchmarkFixture) -> None:
    logger = structlog_sentry_logger.get_logger()
    benchmark(
        lots_of_logging,
        logger=logger,
        test_cases=test__config.TestBasicLogging.test_cases,
    )


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
    _basic_logging_helper_method(benchmark)


@pytest.mark.usefixtures("temporarily_set_stlib_json_as_default_serializer")
def test_logging_stdlib_json_serializer(benchmark: BenchmarkFixture) -> None:
    _basic_logging_helper_method(benchmark)


@pytest.fixture(scope="function")
def temporarily_set_stlib_json_as_default_serializer() -> Generator:
    # Setup
    structlog_sentry_logger._config._toggle_json_library(  # pylint: disable=protected-access
        use_orjson=False
    )

    # Pass control back to calling function
    yield

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
