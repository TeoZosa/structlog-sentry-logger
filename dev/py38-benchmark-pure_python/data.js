window.BENCHMARK_DATA = {
  "lastUpdate": 1631571886350,
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
      },
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
        "date": 1631571884961,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_default",
            "value": 68.75124336472861,
            "unit": "iter/sec",
            "range": "stddev: 0.0012657123861548932",
            "extra": "mean: 14.545191491228058 msec\nrounds: 57"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.306104693970346,
            "unit": "iter/sec",
            "range": "stddev: 0.009988131955345926",
            "extra": "mean: 81.26048208333322 msec\nrounds: 12"
          }
        ]
      }
    ]
  }
}