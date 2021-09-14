window.BENCHMARK_DATA = {
  "lastUpdate": 1631650673539,
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
        "date": 1631650672717,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.75001168593604,
            "unit": "iter/sec",
            "range": "stddev: 0.0023529331834561073",
            "extra": "mean: 14.760145055555556 msec\nrounds: 72"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.426160159912305,
            "unit": "iter/sec",
            "range": "stddev: 0.01082444341605785",
            "extra": "mean: 80.47538315384607 msec\nrounds: 13"
          }
        ]
      }
    ]
  }
}