from time import sleep

from structlog_sentry_logger import logger

LOGGER = logger.get_logger()
MODULE_NAME = logger.get_namespaced_module_name(__file__)
SLEEP_TIME = 1


def main():
    while True:
        log_error()
        sleep(SLEEP_TIME)


def log_error():
    LOGGER.error(MODULE_NAME, file=__file__, name=__name__, sleep_time=SLEEP_TIME)


if __name__ == "__main__":
    main()
