from structlog_sentry_logger import logger

LOGGER = logger.get_logger()
MODULE_NAME = logger.get_namespaced_module_name(__file__)
SLEEP_TIME = 2


def log_warn():
    LOGGER.warn(MODULE_NAME, file=__file__, name=__name__, sleep_time=SLEEP_TIME)
