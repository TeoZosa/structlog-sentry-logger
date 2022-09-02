from typing import List

from tests.utils import JSONOutputType


def validate_output(
    expected_output_truncated: List[JSONOutputType],
    actual_output: List[JSONOutputType],
    dynamic_keys_to_copy: List[str],
) -> None:
    for expected_log_truncated, actual_log in zip(
        expected_output_truncated, actual_output
    ):
        expected_log = {
            **expected_log_truncated,
            **{
                key_to_copy: actual_log[key_to_copy]
                for key_to_copy in dynamic_keys_to_copy
            },
        }
        assert actual_log == expected_log
