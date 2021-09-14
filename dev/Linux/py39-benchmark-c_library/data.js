window.BENCHMARK_DATA = {
  "lastUpdate": 1631650606570,
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
        "date": 1631650605614,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 101.97199426942333,
            "unit": "iter/sec",
            "range": "stddev: 0.00010355265066487405",
            "extra": "mean: 9.806614131306183 msec\nrounds: 99"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.70695673528,
            "unit": "iter/sec",
            "range": "stddev: 0.00030923534493276485",
            "extra": "mean: 46.06818045455053 msec\nrounds: 11"
          }
        ]
      }
    ]
  }
}