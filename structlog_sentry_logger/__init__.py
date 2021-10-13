"""Structlog Sentry Logger"""
import os
from typing import List

import sentry_sdk
from dotenv import dotenv_values, find_dotenv

from structlog_sentry_logger._config import (
    _ENV_VARS_REQUIRED_BY_LIBRARY,
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

# Inject into the environment ONLY the env vars required by the library;
# we manually update/add to the the environment ONLY the keys in a user's `.env` for
# which the library is inspecting (i.e., the set intersection between the
# aforementioned), and only if they weren't already defined in the environment.
users_dotenv_values = dotenv_values(find_dotenv())
legal_env_vars_keys = (
    _ENV_VARS_REQUIRED_BY_LIBRARY.values() & users_dotenv_values.keys()
)

for k in legal_env_vars_keys:
    v = users_dotenv_values[k]
    # Any env-var-to-add already defined in the environment will take precedent over
    # what is defined in a user's `.env` file.
    if k not in os.environ and v is not None:
        os.environ[k] = v

# Note: if DSN isn't defined, will silently not transmit telemetry
sentry_sdk.init()  # pylint: disable=abstract-class-instantiated
