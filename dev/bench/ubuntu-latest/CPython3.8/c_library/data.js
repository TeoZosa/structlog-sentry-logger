window.BENCHMARK_DATA = {
  "lastUpdate": 1631654623554,
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
        "date": 1631654623006,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 117.67408678134393,
            "unit": "iter/sec",
            "range": "stddev: 0.00010826367155887248",
            "extra": "mean: 8.498047678569622 msec\nrounds: 112"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 24.55177407325722,
            "unit": "iter/sec",
            "range": "stddev: 0.0002338422422214367",
            "extra": "mean: 40.730254238093536 msec\nrounds: 21"
          }
        ]
      }
    ]
  }
}