window.BENCHMARK_DATA = {
  "lastUpdate": 1631650558935,
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
        "date": 1631650558370,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 74.56630360887114,
            "unit": "iter/sec",
            "range": "stddev: 0.0014785945333179447",
            "extra": "mean: 13.410883356179 msec\nrounds: 73"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.45069254717905,
            "unit": "iter/sec",
            "range": "stddev: 0.0029263895921929173",
            "extra": "mean: 51.41205114287978 msec\nrounds: 7"
          }
        ]
      }
    ]
  }
}