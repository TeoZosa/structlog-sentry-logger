import importlib
import json

import orjson
import structlog


# Invoking tests on the command line (e.g. in CI) will capture logs directly
# so they must be redirected back to sys.out/sys.err
# Invoking test via IDE (i.e., Pycharm) sends logs directly to sys.out/sys.err
def redirect_captured_logs_to_stdout(caplog):
    if caplog.records:
        for record in caplog.records:
            print(json.dumps(record.msg))


def get_validated_json_output(capsys):
    captured = capsys.readouterr()
    assert captured.out
    assert not captured.err
    out_str_loads_compatible = captured.out.strip().split("\n")
    json_lib_ver = [json.loads(jsoned) for jsoned in out_str_loads_compatible]
    orjson_lib_ver = [orjson.loads(jsoned) for jsoned in out_str_loads_compatible]
    assert orjson_lib_ver == json_lib_ver
    return orjson_lib_ver


def validate_output(expected_output_truncated, actual_output, dynamic_keys_to_copy):
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
        assert expected_log == actual_log


def reload_module_non_dev_local_env(monkeypatch, module):
    structlog.reset_defaults()
    monkeypatch.delenv("CI_ENVIRONMENT_SLUG", raising=False)
    importlib.reload(module)


def reload_module_dev_local_env(monkeypatch, module):
    structlog.reset_defaults()
    monkeypatch.setenv("CI_ENVIRONMENT_SLUG", "dev-local")
    importlib.reload(module)
