"""Pytest configuration module"""
# Silence spurious `config` fixture false-positives
# pylint: disable=unused-argument
from typing import Tuple

from _pytest.config import Config


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
