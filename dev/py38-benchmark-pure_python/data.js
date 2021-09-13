window.BENCHMARK_DATA = {
  "lastUpdate": 1631571687930,
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
        "date": 1631571687460,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_default",
            "value": 117.00140686606244,
            "unit": "iter/sec",
            "range": "stddev: 0.00008872047100096287",
            "extra": "mean: 8.546905774772021 msec\nrounds: 111"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 24.371026159480547,
            "unit": "iter/sec",
            "range": "stddev: 0.00006393631920599801",
            "extra": "mean: 41.03233050000199 msec\nrounds: 8"
          }
        ]
      }
    ]
  }
}