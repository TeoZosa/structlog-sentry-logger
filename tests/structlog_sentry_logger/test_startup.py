from __future__ import annotations

import itertools
import sys

import pytest
from _pytest.monkeypatch import MonkeyPatch
from pytest_mock import MockerFixture


def powerset(iterable: list[str]) -> list[tuple[str, ...]]:
    return list(itertools.chain.from_iterable(itertools.combinations(iterable, x) for x in range(len(iterable) + 1)))


_ENV_VAR_FEATURE_FLAGS = [
    "STRUCTLOG_SENTRY_LOGGER_CLOUD_LOGGING_COMPATIBILITY_MODE_ON",
    "STRUCTLOG_SENTRY_LOGGER_LOCAL_DEVELOPMENT_LOGGING_MODE_ON",
    "STRUCTLOG_SENTRY_LOGGER_CLOUD_SENTRY_INTEGRATION_MODE_ON",
    "_STRUCTLOG_SENTRY_LOGGER_STDLIB_BASED_LOGGER_MODE_ON",
]

test_cases = {str(v): v for v in (powerset(_ENV_VAR_FEATURE_FLAGS))}


@pytest.mark.parametrize(
    "feature_flag_combination",
    test_cases.values(),
    ids=test_cases.keys(),
)
def test_feat_flags(
    monkeypatch: MonkeyPatch,
    mocker: MockerFixture,
    feature_flag_combination: list[str],
) -> None:
    # Ensure test isolation by pre-patching sys modules to prevent side effects from
    # library import affecting other tests
    mocker.patch.dict(sys.modules)
    for feature_flag in feature_flag_combination:
        monkeypatch.setenv(feature_flag, "ANY_VALUE")
    import structlog_sentry_logger  # pylint: disable=import-outside-toplevel

    logger = structlog_sentry_logger.get_logger()
    logger.info("Success")
