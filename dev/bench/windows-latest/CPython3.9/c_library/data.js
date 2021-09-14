window.BENCHMARK_DATA = {
  "lastUpdate": 1631654979945,
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
        "date": 1631654977186,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 64.0519333075258,
            "unit": "iter/sec",
            "range": "stddev: 0.0025687857720137013",
            "extra": "mean: 15.612331249999986 msec\nrounds: 64"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.021932788988659,
            "unit": "iter/sec",
            "range": "stddev: 0.002989220763194162",
            "extra": "mean: 90.7281888888888 msec\nrounds: 9"
          }
        ]
      }
    ]
  }
}