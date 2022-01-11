from typing import List

import pytest
from _pytest.capture import CaptureFixture
from _pytest.logging import LogCaptureFixture
from _pytest.monkeypatch import MonkeyPatch

import structlog_sentry_logger
import tests.docs_src.utils
import tests.utils
from tests.docs_src.utils import JSONOutputType

_ = structlog_sentry_logger.get_logger()


@pytest.fixture(scope="function")
def expected_output_truncated() -> List[JSONOutputType]:
    return [
        {
            "event": "A dummy error for testing purposes is about to be thrown!\n",
            "level": "warning",
            "logger": "docs_src.sentry_integration",
            "sentry": "skipped",
            "lineno": 12,
            "funcName": "<module>",
        },
        {
            "exc_info": True,
            "event": (
                "I threw an error on purpose for this example!\n"
                "Now throwing another that explicitly chains from that one!\n"
            ),
            "level": "error",
            "logger": "docs_src.sentry_integration",
            "sentry": "sent",
            "sentry_id": None,  # Note: `null` in json str converted to `None` by json.loads
            "lineno": 19,
            "funcName": "<module>",
        },
    ]


@pytest.fixture(scope="function")
def actual_output(
    capsys: CaptureFixture, caplog: LogCaptureFixture, monkeypatch: MonkeyPatch
) -> List[JSONOutputType]:
    tests.utils.enable_sentry_integration_mode(monkeypatch)
    with pytest.raises(RuntimeError):
        with capsys.disabled():
            # must import locally to avoid `NameError: name 'sentry_integration' is not defined` will be thrown
            from docs_src import (  # pylint: disable=import-outside-toplevel
                sentry_integration,
            )
        caplog.clear()
        # caplog/capsys reset to prevent duplicate entries
        tests.docs_src.utils.reload_module_non_dev_local_env(
            monkeypatch, sentry_integration
        )
    tests.docs_src.utils.redirect_captured_logs_to_stdout(caplog)
    return tests.docs_src.utils.get_validated_json_output(capsys)


# pylint: disable=redefined-outer-name
def test_sentry_integration(
    expected_output_truncated: List[JSONOutputType],
    actual_output: List[JSONOutputType],
) -> None:
    tests.docs_src.utils.validate_output(
        expected_output_truncated,
        actual_output,
        dynamic_keys_to_copy=["timestamp", "uuid"],
    )
