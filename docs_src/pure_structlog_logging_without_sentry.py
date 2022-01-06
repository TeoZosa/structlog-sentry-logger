import structlog_sentry_logger

LOGGER = structlog_sentry_logger.get_logger()

LOGGER.info("Your log message", extra_field="extra_value")
