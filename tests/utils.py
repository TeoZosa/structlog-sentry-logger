from typing import List

import orjson
import structlog
from _pytest.capture import CaptureFixture
from _pytest.monkeypatch import MonkeyPatch

import structlog_sentry_logger


def reset_logging_configs() -> None:
    structlog.reset_defaults()
    # pylint:disable=protected-access
    structlog_sentry_logger._config._CONFIGS.stdlib_logging_config_already_configured = (
        False
    )
    # pylint:enable=protected-access


def enable_sentry_integration_mode(monkeypatch: MonkeyPatch) -> None:
    structlog.reset_defaults()
    monkeypatch.setenv(
        "STRUCTLOG_SENTRY_LOGGER_CLOUD_SENTRY_INTEGRATION_MODE_ON",
        "ANY_VALUE",
    )


def read_json_logs_from_stdout(capsys: CaptureFixture) -> List[dict]:
    return [orjson.loads(log) for log in parse_logs_from_stdout(capsys)]


def parse_logs_from_stdout(capsys: CaptureFixture) -> List[str]:
    return capsys.readouterr().out.strip().split("\n")
