import structlog

import structlog_sentry_logger


def reset_logging_configs() -> None:
    structlog.reset_defaults()
    # pylint:disable=protected-access
    structlog_sentry_logger._config._CONFIGS.stdlib_logging_config_already_configured = (
        False
    )
    # pylint:enable=protected-access
