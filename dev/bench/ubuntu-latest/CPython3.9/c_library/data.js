window.BENCHMARK_DATA = {
  "lastUpdate": 1631656429680,
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
        "date": 1631654707013,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 76.6161445532226,
            "unit": "iter/sec",
            "range": "stddev: 0.001279934740737456",
            "extra": "mean: 13.052079373497246 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.94841090278047,
            "unit": "iter/sec",
            "range": "stddev: 0.0034658392171442315",
            "extra": "mean: 52.77487411111932 msec\nrounds: 9"
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
          "id": "c92c146be7bf8d52e3cf7e978df1dd4e73e585bb",
          "message": "👷‍♀️ 📝 Add Performance Testing and Benchmarks",
          "timestamp": "2021-09-14T13:16:10Z",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/pull/258/commits/c92c146be7bf8d52e3cf7e978df1dd4e73e585bb"
        },
        "date": 1631656429083,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 84.61212176947318,
            "unit": "iter/sec",
            "range": "stddev: 0.0010673116068983224",
            "extra": "mean: 11.818637555556318 msec\nrounds: 99"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.357971472422104,
            "unit": "iter/sec",
            "range": "stddev: 0.0030208008309854048",
            "extra": "mean: 49.120807608687755 msec\nrounds: 23"
          }
        ]
      }
    ]
  }
}