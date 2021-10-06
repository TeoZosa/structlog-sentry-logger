window.BENCHMARK_DATA = {
  "lastUpdate": 1633529814292,
  "repoUrl": "https://github.com/TeoZosa/structlog-sentry-logger",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "6a93db071a7c88642fb7c9d235fc325f4bcf76c0",
          "message": "Merge pull request #299 from TeoZosa/dependabot/pip/emoji-1.6.0",
          "timestamp": "2021-10-06T13:26:23Z",
          "tree_id": "ae0e1fa92b395ebb6e46e6dcf64db4ff7148ab36"
        },
        "date": 1633528467618,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 106.48455714513219,
            "unit": "iter/sec",
            "range": "stddev: 0.00013321097757387459",
            "extra": "mean: 9.39103309259256 msec\nrounds: 108"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 22.229232671047352,
            "unit": "iter/sec",
            "range": "stddev: 0.00006894715097430272",
            "extra": "mean: 44.985808318181775 msec\nrounds: 22"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "4f69af02ecbbfbfae0e136f83ad479b6b386e46c",
          "message": "Merge pull request #300 from TeoZosa/dependabot/pip/xdoctest-0.15.10",
          "timestamp": "2021-10-06T13:44:55Z",
          "tree_id": "8b30ac83a96e77c23bc0dc3658e54100fd6a90fb"
        },
        "date": 1633529812840,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.56086248547639,
            "unit": "iter/sec",
            "range": "stddev: 0.0007456461423953979",
            "extra": "mean: 14.172162368421034 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.119445190827864,
            "unit": "iter/sec",
            "range": "stddev: 0.001252644871523877",
            "extra": "mean: 55.1893277894736 msec\nrounds: 19"
          }
        ]
      }
    ]
  }
}