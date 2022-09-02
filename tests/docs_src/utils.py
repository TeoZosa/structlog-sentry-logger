import importlib
import json
from types import ModuleType
from typing import Dict, List, Optional

import orjson

# Invoking tests on the command line (e.g. in CI) will capture logs directly
# so they must be redirected back to sys.out/sys.err
# Invoking test via IDE (i.e., Pycharm) sends logs directly to sys.out/sys.err
from _pytest.capture import CaptureFixture
from _pytest.logging import LogCaptureFixture
from _pytest.monkeypatch import MonkeyPatch

import tests.utils

JSONOutputType = Dict[str, Optional[str]]


def redirect_captured_logs_to_stdout(caplog: LogCaptureFixture) -> None:
    if caplog.records:
        for record in caplog.records:
            print(orjson.dumps(record.msg).decode())


def get_validated_json_output(capsys: CaptureFixture) -> List[JSONOutputType]:
    captured = capsys.readouterr()
    assert captured.out
    assert not captured.err
    out_str_loads_compatible = captured.out.strip().split("\n")
    json_lib_ver = [json.loads(jsoned) for jsoned in out_str_loads_compatible]
    orjson_lib_ver = [orjson.loads(jsoned) for jsoned in out_str_loads_compatible]
    assert orjson_lib_ver == json_lib_ver
    return orjson_lib_ver


def validate_output(
    expected_output_truncated: List[JSONOutputType],
    actual_output: List[JSONOutputType],
    dynamic_keys_to_copy: List[str],
) -> None:
    for expected_log_truncated, actual_log in zip(
        expected_output_truncated, actual_output
    ):
        expected_log = {
            **expected_log_truncated,
            **{
                key_to_copy: actual_log[key_to_copy]
                for key_to_copy in dynamic_keys_to_copy
            },
        }
        assert actual_log == expected_log


def reload_module_non_dev_local_env(
    monkeypatch: MonkeyPatch, module: ModuleType
) -> None:
    tests.utils.reset_logging_configs()
    monkeypatch.delenv(
        "STRUCTLOG_SENTRY_LOGGER_LOCAL_DEVELOPMENT_LOGGING_MODE_ON", raising=False
    )
    importlib.reload(module)


def reload_module_dev_local_env(monkeypatch: MonkeyPatch, module: ModuleType) -> None:
    tests.utils.reset_logging_configs()
    monkeypatch.setenv(
        "STRUCTLOG_SENTRY_LOGGER_LOCAL_DEVELOPMENT_LOGGING_MODE_ON", "ANY_VALUE"
    )
    importlib.reload(module)
