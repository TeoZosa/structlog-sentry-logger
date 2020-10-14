import structlog_sentry_logger

LOGGER = structlog_sentry_logger.get_logger()
MODULE_NAME = structlog_sentry_logger.get_namespaced_module_name(__file__)
SLEEP_TIME = 1


def log_error():
    LOGGER.error(MODULE_NAME, file=__file__, name=__name__, sleep_time=SLEEP_TIME)
