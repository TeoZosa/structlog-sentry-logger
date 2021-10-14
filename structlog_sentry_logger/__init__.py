"""Structlog Sentry Logger"""
from typing import List

from structlog_sentry_logger._config import (
    _init_sentry,
    _load_library_specific_env_vars,
    get_config_dict,
    get_logger,
    get_namespaced_module_name,
    getLogger,
)

__all__: List[str] = [
    "get_config_dict",
    "get_logger",
    "get_namespaced_module_name",
    "getLogger",
]

_load_library_specific_env_vars()
_ = _init_sentry()
