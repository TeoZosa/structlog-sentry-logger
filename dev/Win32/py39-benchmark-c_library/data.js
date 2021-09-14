window.BENCHMARK_DATA = {
  "lastUpdate": 1631650904875,
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
        "date": 1631650902157,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 57.12576335674501,
            "unit": "iter/sec",
            "range": "stddev: 0.0005952430935369126",
            "extra": "mean: 17.505236538461535 msec\nrounds: 52"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 9.965328132096392,
            "unit": "iter/sec",
            "range": "stddev: 0.0037697063901392324",
            "extra": "mean: 100.34792500000012 msec\nrounds: 8"
          }
        ]
      }
    ]
  }
}