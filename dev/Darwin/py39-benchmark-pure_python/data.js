window.BENCHMARK_DATA = {
  "lastUpdate": 1631651250340,
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
        "date": 1631651249533,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.56760620053501,
            "unit": "iter/sec",
            "range": "stddev: 0.0007761870660352746",
            "extra": "mean: 13.972802125000017 msec\nrounds: 24"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.072309663918304,
            "unit": "iter/sec",
            "range": "stddev: 0.006579556788128619",
            "extra": "mean: 76.49757584615382 msec\nrounds: 13"
          }
        ]
      }
    ]
  }
}