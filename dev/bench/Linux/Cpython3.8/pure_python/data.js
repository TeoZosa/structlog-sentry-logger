window.BENCHMARK_DATA = {
  "lastUpdate": 1633529856269,
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
        "date": 1633528625262,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 107.77307070618043,
            "unit": "iter/sec",
            "range": "stddev: 0.00011432275878500554",
            "extra": "mean: 9.278755754545399 msec\nrounds: 110"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.397914133864777,
            "unit": "iter/sec",
            "range": "stddev: 0.000054378562046441825",
            "extra": "mean: 42.73885245833338 msec\nrounds: 24"
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
        "date": 1633529854949,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 97.07958931480383,
            "unit": "iter/sec",
            "range": "stddev: 0.0003285770918502836",
            "extra": "mean: 10.300826435897463 msec\nrounds: 117"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.093150725872786,
            "unit": "iter/sec",
            "range": "stddev: 0.0015357370804217824",
            "extra": "mean: 47.40875429166699 msec\nrounds: 24"
          }
        ]
      }
    ]
  }
}