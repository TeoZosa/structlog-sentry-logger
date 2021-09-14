window.BENCHMARK_DATA = {
  "lastUpdate": 1631651008443,
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
        "date": 1631651005571,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 56.876711633540644,
            "unit": "iter/sec",
            "range": "stddev: 0.0019256321870659231",
            "extra": "mean: 17.581888461538483 msec\nrounds: 52"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 9.347297919468051,
            "unit": "iter/sec",
            "range": "stddev: 0.007502993258934018",
            "extra": "mean: 106.98278888888879 msec\nrounds: 9"
          }
        ]
      }
    ]
  }
}