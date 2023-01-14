"""Structlog Sentry Logger."""
from __future__ import annotations

from structlog_sentry_logger._config import (
    get_config_dict,
    get_logger,
    get_namespaced_module_name,
    getLogger,
)
from structlog_sentry_logger._feature_flags import _load_library_specific_env_vars

__all__: list[str] = [
    "get_config_dict",
    "get_logger",
    "get_namespaced_module_name",
    "getLogger",
]

_load_library_specific_env_vars()
