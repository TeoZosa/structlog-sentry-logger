from __future__ import annotations

import json
from typing import Any

import orjson
import structlog
from _pytest.capture import CaptureFixture
from _pytest.logging import LogCaptureFixture
from _pytest.monkeypatch import MonkeyPatch

JSONOutputType = dict[str, Any]


def reset_logging_configs() -> None:
    import structlog_sentry_logger  # pylint: disable=import-outside-toplevel

    structlog.reset_defaults()
    # pylint:disable=protected-access
    structlog_sentry_logger._config._CONFIGS.stdlib_logging_config_already_configured = False
    # pylint:enable=protected-access


def enable_sentry_integration_mode(monkeypatch: MonkeyPatch) -> None:
    structlog.reset_defaults()
    monkeypatch.setenv(
        "STRUCTLOG_SENTRY_LOGGER_CLOUD_SENTRY_INTEGRATION_MODE_ON",
        "ANY_VALUE",
    )


# Invoking tests on the command line (e.g. in CI) will capture logs directly
# so they must be redirected back to sys.out/sys.err
# Invoking test via IDE (i.e., Pycharm) sends logs directly to sys.out/sys.err
def redirect_captured_logs_to_stdout(caplog: LogCaptureFixture) -> None:
    if caplog.records:
        for record in caplog.records:
            print(orjson.dumps(record.msg).decode())


def get_validated_json_output(capsys: CaptureFixture) -> list[JSONOutputType]:
    captured = capsys.readouterr()
    assert captured.out
    assert not captured.err
    out_str_loads_compatible = captured.out.strip().split("\n")
    json_lib_ver = [json.loads(jsoned) for jsoned in out_str_loads_compatible]
    orjson_lib_ver = [orjson.loads(jsoned) for jsoned in out_str_loads_compatible]
    assert orjson_lib_ver == json_lib_ver
    return orjson_lib_ver


def read_json_logs_from_stdout(capsys: CaptureFixture) -> list[dict]:
    return [orjson.loads(log) for log in parse_logs_from_stdout(capsys)]


def parse_logs_from_stdout(capsys: CaptureFixture) -> list[str]:
    return capsys.readouterr().out.strip().split("\n")
