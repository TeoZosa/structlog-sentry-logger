window.BENCHMARK_DATA = {
  "lastUpdate": 1631650797944,
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
        "date": 1631650795307,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 52.95181954671611,
            "unit": "iter/sec",
            "range": "stddev: 0.0014532493889922702",
            "extra": "mean: 18.885092307692315 msec\nrounds: 52"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 9.924351082520639,
            "unit": "iter/sec",
            "range": "stddev: 0.0026489498745309813",
            "extra": "mean: 100.76225555555565 msec\nrounds: 9"
          }
        ]
      }
    ]
  }
}