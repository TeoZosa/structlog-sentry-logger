window.BENCHMARK_DATA = {
  "lastUpdate": 1633529890665,
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
        "date": 1633528708611,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 73.16347716935469,
            "unit": "iter/sec",
            "range": "stddev: 0.0015754213719331724",
            "extra": "mean: 13.668021787500017 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.228555551968245,
            "unit": "iter/sec",
            "range": "stddev: 0.002227797338784422",
            "extra": "mean: 54.85898195000009 msec\nrounds: 20"
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
        "date": 1633529889226,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.38097674049926,
            "unit": "iter/sec",
            "range": "stddev: 0.0004990554704590058",
            "extra": "mean: 14.623950222222268 msec\nrounds: 72"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.430016358482476,
            "unit": "iter/sec",
            "range": "stddev: 0.00166233418732327",
            "extra": "mean: 54.2593115789475 msec\nrounds: 19"
          }
        ]
      }
    ]
  }
}