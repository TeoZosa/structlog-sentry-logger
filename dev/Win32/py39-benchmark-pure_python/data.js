window.BENCHMARK_DATA = {
  "lastUpdate": 1631650807948,
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
        "date": 1631650803752,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 53.58781235281176,
            "unit": "iter/sec",
            "range": "stddev: 0.001236199774142958",
            "extra": "mean: 18.660959574468055 msec\nrounds: 47"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.081054195999407,
            "unit": "iter/sec",
            "range": "stddev: 0.002014029654165281",
            "extra": "mean: 99.19597499999978 msec\nrounds: 8"
          }
        ]
      }
    ]
  }
}