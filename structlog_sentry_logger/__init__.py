import sentry_sdk
from dotenv import find_dotenv, load_dotenv

from structlog_sentry_logger._config import get_logger, get_namespaced_module_name

__all__ = [
    "get_logger",
    "get_namespaced_module_name",
]

load_dotenv(find_dotenv())
# Note: if DSN isn't defined, will silently not transmit telemetry
sentry_sdk.init()
