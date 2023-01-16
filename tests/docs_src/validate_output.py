from __future__ import annotations

import tests.utils

JSONOutputType = tests.utils.JSONOutputType


def validate_output(
    expected_output_truncated: list[JSONOutputType],
    actual_output: list[JSONOutputType],
    dynamic_keys_to_copy: list[str],
) -> None:
    for expected_log_truncated, actual_log in zip(expected_output_truncated, actual_output):
        expected_log = {
            **expected_log_truncated,
            **{key_to_copy: actual_log[key_to_copy] for key_to_copy in dynamic_keys_to_copy},
        }
        assert actual_log == expected_log
