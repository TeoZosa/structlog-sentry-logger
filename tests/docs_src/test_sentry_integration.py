from typing import List

import pytest
from _pytest.capture import CaptureFixture
from _pytest.monkeypatch import MonkeyPatch

import tests.docs_src.utils
import tests.utils

JSONOutputType = tests.utils.JSONOutputType


@pytest.fixture(scope="function")
def expected_output_truncated() -> List[JSONOutputType]:
    return [
        {
            "event": "A dummy error for testing purposes is about to be thrown!\n",
            "level": "warning",
            "logger": "docs_src.sentry_integration",
            "sentry": "skipped",
            "lineno": 12,
            "funcName": "<module>",
        },
        {
            "exc_info": True,
            "event": (
                "I threw an error on purpose for this example!\n"
                "Now throwing another that explicitly chains from that one!\n"
            ),
            "level": "error",
            "logger": "docs_src.sentry_integration",
            "sentry": "sent",
            "sentry_id": None,  # Note: `null` in json str converted to `None` by json.loads
            "lineno": 19,
            "funcName": "<module>",
        },
    ]


@pytest.fixture(scope="function")
def actual_output(
    capsys: CaptureFixture, monkeypatch: MonkeyPatch
) -> List[JSONOutputType]:
    tests.utils.enable_sentry_integration_mode(monkeypatch)
    with pytest.raises(RuntimeError):
        import docs_src.sentry_integration  # pylint: disable=import-outside-toplevel,unused-import
    return tests.utils.get_validated_json_output(capsys)


# pylint: disable=redefined-outer-name
def test_sentry_integration(
    expected_output_truncated: List[JSONOutputType],
    actual_output: List[JSONOutputType],
) -> None:
    tests.docs_src.utils.validate_output(
        expected_output_truncated,
        actual_output,
        dynamic_keys_to_copy=["timestamp", "uuid"],
    )
