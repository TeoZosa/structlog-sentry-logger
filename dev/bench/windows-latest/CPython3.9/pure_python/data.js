window.BENCHMARK_DATA = {
  "lastUpdate": 1631654982554,
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
          "id": "458510a21f0829dcd8e5e903e29099236d8b8a1c",
          "message": "👷‍♀️ 📝 Add Performance Testing and Benchmarks",
          "timestamp": "2021-09-14T13:16:10Z",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/pull/258/commits/458510a21f0829dcd8e5e903e29099236d8b8a1c"
        },
        "date": 1631654978981,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 53.32220328180377,
            "unit": "iter/sec",
            "range": "stddev: 0.0011379819323732278",
            "extra": "mean: 18.753913725490232 msec\nrounds: 51"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 9.518313075719165,
            "unit": "iter/sec",
            "range": "stddev: 0.004234093941644051",
            "extra": "mean: 105.06063333333297 msec\nrounds: 6"
          }
        ]
      }
    ]
  }
}