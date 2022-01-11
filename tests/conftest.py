"""Pytest configuration module"""
# Silence spurious `config` fixture false-positives
# pylint: disable=unused-argument
from typing import Tuple

import pytest
from _pytest.config import Config
from _pytest.monkeypatch import MonkeyPatch


def pytest_emoji_passed(config: Config) -> Tuple[str, str]:
    """Returns the pytest_emoji symbols for passed tests"""
    return "✅ ", "PASSED ✅ "


def pytest_emoji_failed(config: Config) -> Tuple[str, str]:
    """Returns the pytest_emoji symbols for failed tests"""
    return "❌ ", "FAILED ❌ "


def pytest_emoji_skipped(config: Config) -> Tuple[str, str]:
    """Returns the pytest_emoji symbols for skipped tests"""
    return "🙈 ", "SKIPPED 🙈 "


def pytest_emoji_error(config: Config) -> Tuple[str, str]:
    """Returns the pytest_emoji symbols for tests that unexpectedly encountered errors"""
    return "🚫 ", "ERROR 🚫 "


def pytest_emoji_xfailed(config: Config) -> Tuple[str, str]:
    """Returns the pytest_emoji symbols for xfailed tests"""
    return "❎️ ", "XFAIL ❎️ "


def pytest_emoji_xpassed(config: Config) -> Tuple[str, str]:
    """Returns the pytest_emoji symbols for xfail tests that unexpectedly passed"""
    return "⛔️ ", "XPASS ⛔️ "


@pytest.fixture(scope="function", autouse=True)
def set_legacy_for_tests(monkeypatch: MonkeyPatch) -> None:
    """Maintain test suite viability until we migrate all tests to be forward-compatible"""

    import structlog_sentry_logger  # pylint: disable=import-outside-toplevel

    for env_var in [
        # pylint:disable=protected-access
        *structlog_sentry_logger._config._ENV_VARS_REQUIRED_BY_LIBRARY.values(),
        *structlog_sentry_logger._config._CLOUD_ENV_INFERENCE_ENV_VARS,
        # pylint:enable=protected-access
    ]:
        monkeypatch.delenv(env_var, raising=False)
    monkeypatch.setenv(
        "_STRUCTLOG_SENTRY_LOGGER_STDLIB_BASED_LOGGER_MODE_ON", "ANY_VALUE"
    )
