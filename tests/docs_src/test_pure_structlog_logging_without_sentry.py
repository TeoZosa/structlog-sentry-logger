import sys
from typing import List

import pytest
from _pytest.capture import CaptureFixture
from _pytest.logging import LogCaptureFixture
from _pytest.monkeypatch import MonkeyPatch

from docs_src import (  # pylint: disable=import-error
    pure_structlog_logging_without_sentry,
)
from tests.docs_src import utils  # pylint: disable=import-error
from tests.docs_src.utils import JSONOutputType


@pytest.fixture(scope="function")
def expected_output_truncated() -> List[JSONOutputType]:
    return [
        {
            "event": "Your log message",
            "extra_field": "extra_value",
            "funcName": "<module>",
            "level": "info",
            "lineno": 5,
            "logger": "docs_src.pure_structlog_logging_without_sentry",
            "sentry": "skipped",
        }
    ]


@pytest.fixture(scope="function")
def actual_output(
    capsys: CaptureFixture, caplog: LogCaptureFixture, monkeypatch: MonkeyPatch
) -> List[JSONOutputType]:
    utils.reload_module_non_dev_local_env(
        monkeypatch, pure_structlog_logging_without_sentry
    )
    utils.redirect_captured_logs_to_stdout(caplog)
    return utils.get_validated_json_output(capsys)


@pytest.mark.usefixtures(
    "patch_get_caller_name_from_frames_for_typeguard_compatibility"
)
def test_dev_local(
    capsys: CaptureFixture, caplog: LogCaptureFixture, monkeypatch: MonkeyPatch
) -> None:
    utils.reload_module_dev_local_env(
        monkeypatch, pure_structlog_logging_without_sentry
    )
    utils.redirect_captured_logs_to_stdout(caplog)

    if sys.platform == "win32":
        relevant_expected = (
            "o     ] Your log message               "
            "[docs_src.pure_structlog_logging_without_sentry] "
            "extra_field=extra_value "
            "funcName=<module> "
            "lineno=5 "
            "sentry=skipped [in <module>]\n"
        )
    else:
        relevant_expected = (
            "[0m [\x1b[32m\x1b[1minfo     \x1b[0m] "
            "\x1b[1mYour log message              \x1b[0m ["
            "\x1b[34m\x1b[1mdocs_src.pure_structlog_logging_without_sentry\x1b[0m] "
            "\x1b[36mextra_field\x1b[0m=\x1b[35mextra_value\x1b[0m "
            "\x1b[36mfuncName\x1b[0m=\x1b[35m<module>\x1b[0m "
            "\x1b[36mlineno\x1b[0m=\x1b[35m5\x1b[0m "
            "\x1b[36msentry\x1b[0m=\x1b[35mskipped\x1b[0m [in <module>]\n"
        )

    example_timestamp_substr = "\x1b[2m2021-10-25T16:15:30.993152Z\x1b"
    # Ignore timestamped portion
    relevant_actual = capsys.readouterr().out[len(example_timestamp_substr) :]
    assert relevant_actual == relevant_expected


@pytest.mark.usefixtures(
    "patch_get_caller_name_from_frames_for_typeguard_compatibility"
)
# pylint: disable=redefined-outer-name
def test_pure_structlog_logging_without_sentry(
    expected_output_truncated: List[JSONOutputType],
    actual_output: List[JSONOutputType],
) -> None:
    utils.validate_output(
        expected_output_truncated, actual_output, dynamic_keys_to_copy=["timestamp"]
    )
