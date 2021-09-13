window.BENCHMARK_DATA = {
  "lastUpdate": 1631571748267,
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
        "date": 1631571747379,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_default",
            "value": 96.68802444024786,
            "unit": "iter/sec",
            "range": "stddev: 0.000812746408926677",
            "extra": "mean: 10.342542479166994 msec\nrounds: 96"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.42007896481374,
            "unit": "iter/sec",
            "range": "stddev: 0.0025885609623966365",
            "extra": "mean: 48.97140709999803 msec\nrounds: 10"
          }
        ]
      }
    ]
  }
}