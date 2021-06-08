"""Pytest configuration module"""
# Silence spurious `config` fixture false-positives
# pylint: disable=unused-argument
import inspect
from typing import List, Tuple

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


# pylint: enable=unused-argument
# pylint: disable=import-outside-toplevel,protected-access
@pytest.fixture(scope="function")
def patch_get_caller_name_from_frames_for_typeguard_compatibility(
    monkeypatch: MonkeyPatch,
) -> None:

    import structlog_sentry_logger

    def typeguard_patch(stack_frames: List[inspect.FrameInfo]) -> str:
        prev_stack_frame = stack_frames[1]
        caller_name = structlog_sentry_logger._config.get_caller_name(prev_stack_frame)
        if "typeguard" in caller_name:
            true_prev_stack_frame = stack_frames[2]
            caller_name = structlog_sentry_logger._config.get_caller_name(
                true_prev_stack_frame
            )
        return caller_name

    monkeypatch.setattr(
        structlog_sentry_logger._config, "get_caller_name_from_frames", typeguard_patch
    )
