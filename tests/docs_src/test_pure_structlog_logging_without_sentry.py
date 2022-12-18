import importlib
import pathlib
import sys
from types import ModuleType
from typing import List

import pytest
from _pytest.capture import CaptureFixture
from _pytest.logging import LogCaptureFixture
from _pytest.monkeypatch import MonkeyPatch

import tests.docs_src.validate_output
import tests.utils
from docs_src import (  # pylint: disable=import-error
    pure_structlog_logging_without_sentry,
)
from tests.utils import JSONOutputType


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
def actual_output(capsys: CaptureFixture, caplog: LogCaptureFixture, monkeypatch: MonkeyPatch) -> List[JSONOutputType]:
    tests.utils.enable_sentry_integration_mode(monkeypatch)
    reload_module_non_dev_local_env(monkeypatch, pure_structlog_logging_without_sentry)
    tests.utils.redirect_captured_logs_to_stdout(caplog)
    return tests.utils.get_validated_json_output(capsys)


def test_dev_local(capsys: CaptureFixture, caplog: LogCaptureFixture, monkeypatch: MonkeyPatch) -> None:
    tests.utils.enable_sentry_integration_mode(monkeypatch)
    reload_module_dev_local_env(monkeypatch, pure_structlog_logging_without_sentry)
    tests.utils.redirect_captured_logs_to_stdout(caplog)

    if sys.platform == "win32":
        relevant_expected = (
            "o     ] Your log message               "
            "[docs_src.pure_structlog_logging_without_sentry] "
            "extra_field=extra_value "
            "funcName=<module> "
            "lineno=5 "
            "sentry=skipped [in <module>]"
        )
    else:
        relevant_expected = (
            "[0m [\x1b[32m\x1b[1minfo     \x1b[0m] "
            "\x1b[1mYour log message              \x1b[0m ["
            "\x1b[34m\x1b[1mdocs_src.pure_structlog_logging_without_sentry\x1b[0m] "
            "\x1b[36mextra_field\x1b[0m=\x1b[35mextra_value\x1b[0m "
            "\x1b[36mfuncName\x1b[0m=\x1b[35m<module>\x1b[0m "
            "\x1b[36mlineno\x1b[0m=\x1b[35m5\x1b[0m "
            "\x1b[36msentry\x1b[0m=\x1b[35mskipped\x1b[0m [in <module>]"
        )

    # Ignore timestamped portion
    example_timestamp_substr = "\x1b[2m2021-10-25T16:15:30.993152Z\x1b"
    library_log, relevant_actual = (
        log[len(example_timestamp_substr) :] for log in tests.utils.parse_logs_from_stdout(capsys)
    )

    # Note: library meta-logger log format is slightly different due to the module
    # reloads/logging re-configurations, so truncating it as in the above call actually
    # chops off more than the timestamp, but the resulting string so happens to line up
    # with the below checks.
    assert library_log.startswith("logs directory created         log_dir=")
    assert library_log.endswith(str(pathlib.Path("structlog-sentry-logger/.logs")))

    assert relevant_actual == relevant_expected


# pylint: disable=redefined-outer-name
def test_pure_structlog_logging_without_sentry(
    expected_output_truncated: List[JSONOutputType],
    actual_output: List[JSONOutputType],
) -> None:
    tests.docs_src.validate_output.validate_output(
        expected_output_truncated, actual_output, dynamic_keys_to_copy=["timestamp"]
    )


def reload_module_non_dev_local_env(monkeypatch: MonkeyPatch, module: ModuleType) -> None:
    tests.utils.reset_logging_configs()
    monkeypatch.delenv("STRUCTLOG_SENTRY_LOGGER_LOCAL_DEVELOPMENT_LOGGING_MODE_ON", raising=False)
    importlib.reload(module)


def reload_module_dev_local_env(monkeypatch: MonkeyPatch, module: ModuleType) -> None:
    tests.utils.reset_logging_configs()
    monkeypatch.setenv("STRUCTLOG_SENTRY_LOGGER_LOCAL_DEVELOPMENT_LOGGING_MODE_ON", "ANY_VALUE")
    importlib.reload(module)
