window.BENCHMARK_DATA = {
  "lastUpdate": 1631571951160,
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
        "date": 1631571758072,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_default",
            "value": 76.48284384993126,
            "unit": "iter/sec",
            "range": "stddev: 0.00030413366733680734",
            "extra": "mean: 13.074827630130006 msec\nrounds: 73"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.471457698531577,
            "unit": "iter/sec",
            "range": "stddev: 0.0014141806366494171",
            "extra": "mean: 57.23620875000298 msec\nrounds: 12"
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
        "date": 1631571948493,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_default",
            "value": 64.02644129048892,
            "unit": "iter/sec",
            "range": "stddev: 0.001305908330379079",
            "extra": "mean: 15.618547272727296 msec\nrounds: 55"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.682240518763793,
            "unit": "iter/sec",
            "range": "stddev: 0.0032626954980335744",
            "extra": "mean: 93.61331999999992 msec\nrounds: 10"
          }
        ]
      }
    ]
  }
}