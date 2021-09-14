window.BENCHMARK_DATA = {
  "lastUpdate": 1631605345599,
  "repoUrl": "https://github.com/TeoZosa/structlog-sentry-logger",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "name": "TeoZosa",
            "username": "TeoZosa"
          },
          "committer": {
            "name": "TeoZosa",
            "username": "TeoZosa"
          },
          "id": "15f5f26f3e1f644e9cdb8d75f91379fdcecdb644",
          "message": "👷‍♀️ 📝 Add Performance Testing and Benchmarks",
          "timestamp": "2021-09-13T21:51:20Z",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/pull/258/commits/15f5f26f3e1f644e9cdb8d75f91379fdcecdb644"
        },
        "date": 1631605344662,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_default",
            "value": 86.480832477285,
            "unit": "iter/sec",
            "range": "stddev: 0.00044485760848286045",
            "extra": "mean: 11.563255941860403 msec\nrounds: 86"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.3124196548383,
            "unit": "iter/sec",
            "range": "stddev: 0.0012406171294474671",
            "extra": "mean: 46.92099800000804 msec\nrounds: 16"
          }
        ]
      }
    ]
  }
}