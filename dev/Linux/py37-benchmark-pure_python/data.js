window.BENCHMARK_DATA = {
  "lastUpdate": 1631650549349,
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
        "date": 1631650548760,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 96.29527575811863,
            "unit": "iter/sec",
            "range": "stddev: 0.0011060834663124397",
            "extra": "mean: 10.384725440860375 msec\nrounds: 93"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.817889358245782,
            "unit": "iter/sec",
            "range": "stddev: 0.0023442470615835363",
            "extra": "mean: 53.14092249999395 msec\nrounds: 14"
          }
        ]
      }
    ]
  }
}