"""Structlog Sentry Logger"""

from typing import List

import sentry_sdk
from dotenv import find_dotenv, load_dotenv

from structlog_sentry_logger._config import (
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

load_dotenv(find_dotenv())
# Note: if DSN isn't defined, will silently not transmit telemetry
sentry_sdk.init()  # pylint: disable=abstract-class-instantiated
