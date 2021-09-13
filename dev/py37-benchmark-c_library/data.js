window.BENCHMARK_DATA = {
  "lastUpdate": 1631571709323,
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
          "id": "f14106e96497b429b54502eb78f8a3e8a43476a5",
          "message": "👷‍♀️ 📝 Add Performance Testing and Benchmarks",
          "timestamp": "2021-09-13T21:51:20Z",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/pull/258/commits/f14106e96497b429b54502eb78f8a3e8a43476a5"
        },
        "date": 1631571708852,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_default",
            "value": 117.51453953929777,
            "unit": "iter/sec",
            "range": "stddev: 0.00013125364123018954",
            "extra": "mean: 8.509585315318299 msec\nrounds: 111"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.243761989188144,
            "unit": "iter/sec",
            "range": "stddev: 0.00006576800668681702",
            "extra": "mean: 43.022295636358294 msec\nrounds: 22"
          }
        ]
      }
    ]
  }
}