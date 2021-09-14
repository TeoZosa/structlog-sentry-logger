window.BENCHMARK_DATA = {
  "lastUpdate": 1631654917007,
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
        "date": 1631654914283,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 59.08370770452783,
            "unit": "iter/sec",
            "range": "stddev: 0.0016344252943673778",
            "extra": "mean: 16.925139583333323 msec\nrounds: 48"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.49993332542339,
            "unit": "iter/sec",
            "range": "stddev: 0.004193553529824273",
            "extra": "mean: 95.23869999999995 msec\nrounds: 9"
          }
        ]
      }
    ]
  }
}