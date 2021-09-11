import mypyc.build


def build(setup_kwargs: dict) -> None:
    """
    This function is mandatory in order to build the extensions.
    """
    setup_kwargs.update(
        {
            "ext_modules": mypyc.build.mypycify(
                [
                    "--disallow-untyped-defs",
                    "structlog_sentry_logger/__init__.py",
                    "structlog_sentry_logger/_config.py",
                    "structlog_sentry_logger/structlog_sentry.py",
                ]
            ),
        }
    )
