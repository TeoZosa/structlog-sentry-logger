import os
from typing import Callable

import dotenv


def is_sentry_integration_mode_requested() -> bool:
    return _is_required_env_var_set(is_sentry_integration_mode_requested)


def is_cloud_logging_compatibility_mode_requested() -> bool:
    return _is_required_env_var_set(is_cloud_logging_compatibility_mode_requested)


def is_prettified_output_formatting_requested() -> bool:
    return _is_required_env_var_set(is_prettified_output_formatting_requested)


def is_stdlib_based_structlog_configuration_requested() -> bool:
    return _is_required_env_var_set(is_stdlib_based_structlog_configuration_requested)


def _is_required_env_var_set(calling_fn: Callable) -> bool:
    return _ENV_VARS_REQUIRED_BY_LIBRARY[calling_fn] in os.environ


_ENV_VARS_REQUIRED_BY_LIBRARY = {
    is_cloud_logging_compatibility_mode_requested: "STRUCTLOG_SENTRY_LOGGER_CLOUD_LOGGING_COMPATIBILITY_MODE_ON",
    is_prettified_output_formatting_requested: "STRUCTLOG_SENTRY_LOGGER_LOCAL_DEVELOPMENT_LOGGING_MODE_ON",
    is_sentry_integration_mode_requested: "STRUCTLOG_SENTRY_LOGGER_CLOUD_SENTRY_INTEGRATION_MODE_ON",
    is_stdlib_based_structlog_configuration_requested: "_STRUCTLOG_SENTRY_LOGGER_STDLIB_BASED_LOGGER_MODE_ON",
}


def _load_library_specific_env_vars() -> None:
    # Inject into the environment ONLY the env vars required by the library;
    # we manually update/add to the the environment ONLY the keys in a user's `.env` for
    # which the library is inspecting (i.e., the set intersection between the
    # aforementioned), and only if they weren't already defined in the environment.
    users_dotenv_values = dotenv.dotenv_values(dotenv.find_dotenv())
    legal_env_vars_keys = (
        _ENV_VARS_REQUIRED_BY_LIBRARY.values() & users_dotenv_values.keys()
    )

    for k in legal_env_vars_keys:
        v = users_dotenv_values[k]
        # Any env-var-to-add already defined in the environment will take precedent over
        # what is defined in a user's `.env` file.
        if k not in os.environ and v is not None:
            os.environ[k] = v


def is_probably_in_cloud_environment() -> bool:
    """Returns True if it is *likely* (but not guaranteed) logging is occurring in the context of a Cloud Logging environment"""
    for env_var in _CLOUD_ENV_INFERENCE_ENV_VARS:
        if env_var in os.environ:
            return True
    return False


_CLOUD_ENV_INFERENCE_ENV_VARS = (
    # GKE
    # There are no GKE-specific environment variable that definitively imply we are
    # running in GKE... Falling back to detecting Kubernetes-injected environment
    # variables since those are the only ones present in GKE pods that *could* imply
    # we are running in GKE.
    # Kubernetes
    # see: https://kubernetes.io/docs/concepts/services-networking/connect-applications-service/#environment-variables
    "KUBERNETES_SERVICE_HOST",
    # Cloud Function
    # see: https://cloud.google.com/functions/docs/configuring/env-var#runtime_environment_variables_set_automatically
    "GCP_PROJECT",
    # GAE
    # see: https://cloud.google.com/functions/docs/configuring/env-var#runtime_environment_variables_set_automatically
    "GOOGLE_CLOUD_PROJECT",
)
