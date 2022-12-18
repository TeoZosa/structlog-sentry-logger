import logging

import orjson
import structlog
from pytest_benchmark.fixture import BenchmarkFixture

from tests.benchmarks import utils
from tests.benchmarks.utils import TestCases

TEST_CASES = TestCases()


def test_gold_standard_structlog_non_str_keys(benchmark: BenchmarkFixture) -> None:
    _benchmark_runner(benchmark, test_cases=TEST_CASES.non_str_keys)


def test_gold_standard_structlog(benchmark: BenchmarkFixture) -> None:
    _benchmark_runner(benchmark, test_cases=TEST_CASES.basic)


def _benchmark_runner(benchmark: BenchmarkFixture, test_cases: dict) -> None:
    structlog.reset_defaults()
    structlog.configure(
        cache_logger_on_first_use=True,
        wrapper_class=structlog.make_filtering_bound_logger(logging.DEBUG),
        processors=[
            structlog.threadlocal.merge_threadlocal,
            structlog.processors.add_log_level,
            structlog.processors.format_exc_info,
            structlog.processors.TimeStamper(fmt="iso", utc=True),
            structlog.processors.JSONRenderer(serializer=orjson.dumps, option=orjson.OPT_NON_STR_KEYS),
        ],
        logger_factory=structlog.BytesLoggerFactory(),
    )
    logger = structlog.get_logger()
    benchmark(utils.lots_of_logging, logger=logger, test_cases=test_cases)
