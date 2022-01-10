from typing import Generator

import pytest
from _pytest.monkeypatch import MonkeyPatch
from pytest_benchmark.fixture import BenchmarkFixture

import structlog_sentry_logger
import tests.utils
from tests.benchmarks import utils
from tests.benchmarks.utils import TestCases

TEST_CASES = TestCases()


@pytest.mark.parametrize(
    "is_stdlib_based_structlog_config_requested",
    [True, False],
    ids=["stdlib-based config (Legacy)", "structlog-specific config (Optimized)"],
)
class TestStructlogSentryLoggerBenchmarks:
    @staticmethod
    @pytest.fixture(scope="function", autouse=True)
    def setup(
        monkeypatch: MonkeyPatch,
        is_stdlib_based_structlog_config_requested: bool,
    ) -> None:
        # Setup
        tests.utils.reset_logging_configs()

        if is_stdlib_based_structlog_config_requested:
            monkeypatch.setenv(
                "STRUCTLOG_SENTRY_LOGGER_STDLIB_BASED_LOGGER",
                "ANY_VALUE",
            )
        else:
            monkeypatch.delenv(
                "STRUCTLOG_SENTRY_LOGGER_STDLIB_BASED_LOGGER",
                raising=False,
            )

    @staticmethod
    def test_orjson_serializer_non_str_keys(benchmark: BenchmarkFixture) -> None:
        _benchmark_runner(benchmark, test_cases=TEST_CASES.non_str_keys)

    @staticmethod
    def test_orjson_serializer(benchmark: BenchmarkFixture) -> None:
        _benchmark_runner(benchmark, test_cases=TEST_CASES.basic)

    @staticmethod
    @pytest.mark.usefixtures("temporarily_set_stlib_json_as_default_serializer")
    def test_stdlib_json_serializer(
        benchmark: BenchmarkFixture,
        is_stdlib_based_structlog_config_requested: bool,
    ) -> None:
        test_cases = TEST_CASES.basic.copy()
        if not is_stdlib_based_structlog_config_requested:
            test_cases["uuid"] = str(test_cases["uuid"])
        _benchmark_runner(benchmark, test_cases=test_cases)


def _benchmark_runner(benchmark: BenchmarkFixture, test_cases: dict) -> None:
    logger = structlog_sentry_logger.get_logger()
    benchmark(utils.lots_of_logging, logger=logger, test_cases=test_cases)


@pytest.fixture(scope="function")
def temporarily_set_stlib_json_as_default_serializer() -> Generator:
    # pylint: disable=protected-access
    # Setup
    structlog_sentry_logger._config._toggle_json_library(use_orjson=False)

    # Pass control back to calling function
    yield

    # Teardown
    structlog_sentry_logger._config._toggle_json_library(use_orjson=True)
    # pylint: enable=protected-access
