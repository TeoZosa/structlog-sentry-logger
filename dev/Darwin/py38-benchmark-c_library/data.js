window.BENCHMARK_DATA = {
  "lastUpdate": 1631650677214,
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
          "id": "e7d41ed7dff86373ca53f514ecd30ea9043885f8",
          "message": "👷‍♀️ 📝 Add Performance Testing and Benchmarks",
          "timestamp": "2021-09-14T13:16:10Z",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/pull/258/commits/e7d41ed7dff86373ca53f514ecd30ea9043885f8"
        },
        "date": 1631650676322,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 73.9637652948269,
            "unit": "iter/sec",
            "range": "stddev: 0.0003568941107027642",
            "extra": "mean: 13.520133757575767 msec\nrounds: 66"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.40646681985521,
            "unit": "iter/sec",
            "range": "stddev: 0.0007358063300222619",
            "extra": "mean: 74.59086823076925 msec\nrounds: 13"
          }
        ]
      }
    ]
  }
}