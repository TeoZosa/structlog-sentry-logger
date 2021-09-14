window.BENCHMARK_DATA = {
  "lastUpdate": 1631655139693,
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
        "date": 1631655138891,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.63807199308145,
            "unit": "iter/sec",
            "range": "stddev: 0.003668846637316685",
            "extra": "mean: 14.156671774647863 msec\nrounds: 71"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.202775179062563,
            "unit": "iter/sec",
            "range": "stddev: 0.005920062532466962",
            "extra": "mean: 75.74165176923077 msec\nrounds: 13"
          }
        ]
      }
    ]
  }
}