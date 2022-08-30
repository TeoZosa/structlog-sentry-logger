import importlib
from types import ModuleType
from typing import List

from _pytest.monkeypatch import MonkeyPatch

import tests.utils

JSONOutputType = tests.utils.JSONOutputType


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
