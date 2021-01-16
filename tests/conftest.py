import pytest


# Silence spurious `config` fixture false-positives
# pylint: disable=unused-argument
def pytest_emoji_passed(config):
    return "✅ ", "PASSED ✅ "


def pytest_emoji_failed(config):
    return "❌ ", "FAILED ❌ "


def pytest_emoji_skipped(config):
    return "🙈 ", "SKIPPED 🙈 "


def pytest_emoji_error(config):
    return "🚫 ", "ERROR 🚫 "


def pytest_emoji_xfailed(config):
    return "❎️ ", "XFAIL ❎️ "


def pytest_emoji_xpassed(config):
    return "⛔️ ", "XPASS ⛔️ "


# pylint: enable=unused-argument
# pylint: disable=import-outside-toplevel,protected-access
@pytest.fixture(scope="function")
def patch_get_caller_name_from_frames_for_typeguard_compatibility(monkeypatch):

    import structlog_sentry_logger

    def typeguard_patch(stack_frames):
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
