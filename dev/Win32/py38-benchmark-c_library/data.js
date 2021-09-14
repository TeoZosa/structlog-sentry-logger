window.BENCHMARK_DATA = {
  "lastUpdate": 1631650877405,
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
        "date": 1631650874710,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 55.49406196888702,
            "unit": "iter/sec",
            "range": "stddev: 0.0024283475554132358",
            "extra": "mean: 18.01994600000004 msec\nrounds: 50"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 9.945030501408556,
            "unit": "iter/sec",
            "range": "stddev: 0.0041809643477911775",
            "extra": "mean: 100.55273333333324 msec\nrounds: 9"
          }
        ]
      }
    ]
  }
}