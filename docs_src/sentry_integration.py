import uuid

import structlog_sentry_logger

LOGGER = structlog_sentry_logger.get_logger()

curr_user_logger = LOGGER.bind(uuid=uuid.uuid4().hex)  # LOGGER instance with bound UUID
try:
    curr_user_logger.warn("A dummy error for testing purposes is about to be thrown!")
    x = 1 / 0
except ZeroDivisionError as err:
    ERR_MSG = (
        "I threw an error on purpose for this example!\n"
        "Now throwing another that explicitly chains from that one!"
    )
    curr_user_logger.exception(ERR_MSG)
    raise RuntimeError(ERR_MSG) from err
