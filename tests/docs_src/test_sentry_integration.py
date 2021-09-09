from pathlib import Path
from typing import List

import pytest
from _pytest.capture import CaptureFixture
from _pytest.logging import LogCaptureFixture
from _pytest.monkeypatch import MonkeyPatch

import structlog_sentry_logger
from tests.docs_src import utils
from tests.docs_src.utils import JSONOutputType

_ = structlog_sentry_logger.get_logger()


@pytest.fixture(scope="function")
def expected_output_truncated() -> List[JSONOutputType]:
    project_root_dir = Path(__file__).parents[2]
    file_under_test = str(Path(f"{project_root_dir}/docs_src/sentry_integration.py"))
    return [
        {
            "event": "A dummy error for testing purposes is about to be thrown!\n",
            "level": "warning",
            "logger": "docs_src.sentry_integration",
            "sentry": "skipped",
        },
        {
            "event": (
                "I threw an error on purpose for this example!\n"
                "Now throwing another that explicitly chains from that one!\n"
            ),
            "exception": (
                "Traceback (most recent call last):\n  "
                f'File "{file_under_test}"'
                f", line 13, in <module>\n"
                "    x = 1 / 0\nZeroDivisionError: division by zero"
            ),
            "level": "error",
            "logger": "docs_src.sentry_integration",
            "sentry": "sent",
            "sentry_id": None,  # Note: `null` in json str converted to `None` by json.loads
        },
    ]


@pytest.fixture(scope="function")
def actual_output(
    capsys: CaptureFixture, caplog: LogCaptureFixture, monkeypatch: MonkeyPatch
) -> List[JSONOutputType]:
    with pytest.raises(RuntimeError):
        with capsys.disabled():
            # must import locally to avoid `NameError: name 'sentry_integration' is not defined` will be thrown
            from docs_src import (  # pylint: disable=import-outside-toplevel
                sentry_integration,
            )
        caplog.clear()
        # caplog/capsys reset to prevent duplicate entries
        utils.reload_module_non_dev_local_env(monkeypatch, sentry_integration)
    utils.redirect_captured_logs_to_stdout(caplog)
    return utils.get_validated_json_output(capsys)


# pylint: disable=redefined-outer-name
@pytest.mark.usefixtures(
    "patch_get_caller_name_from_frames_for_typeguard_compatibility"
)
def test_sentry_integration(
    expected_output_truncated: List[JSONOutputType], actual_output: List[JSONOutputType]
) -> None:
    utils.validate_output(
        expected_output_truncated,
        actual_output,
        dynamic_keys_to_copy=["timestamp", "uuid"],
    )
