import pathlib

import mypyc.build


def build(setup_kwargs: dict) -> None:
    """
    This function is mandatory in order to build the extensions.
    """
    project_dir = pathlib.Path(__file__).resolve().parent
    ext_modules = [
        str(file) for file in (project_dir / "structlog_sentry_logger").rglob("*.py")
    ]
    setup_kwargs.update({"ext_modules": mypyc.build.mypycify(ext_modules)})
