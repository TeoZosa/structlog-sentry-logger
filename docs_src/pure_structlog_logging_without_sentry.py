import structlog_sentry_logger

LOGGER = structlog_sentry_logger.get_logger()

LOGGER.info(
    "Information that's useful for future me and others", extra_field="extra_value"
)
