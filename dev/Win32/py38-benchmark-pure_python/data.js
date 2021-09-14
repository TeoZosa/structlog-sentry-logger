window.BENCHMARK_DATA = {
  "lastUpdate": 1631650762313,
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
        "date": 1631650759036,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 59.28551378992473,
            "unit": "iter/sec",
            "range": "stddev: 0.0008373166754265067",
            "extra": "mean: 16.867526923076863 msec\nrounds: 52"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.184875866732906,
            "unit": "iter/sec",
            "range": "stddev: 0.0023488564950388427",
            "extra": "mean: 98.1848000000003 msec\nrounds: 8"
          }
        ]
      }
    ]
  }
}