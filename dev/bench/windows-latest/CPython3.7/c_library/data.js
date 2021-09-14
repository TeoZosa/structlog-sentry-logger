window.BENCHMARK_DATA = {
  "lastUpdate": 1631655008768,
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
        "date": 1631655004728,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 61.206915113550224,
            "unit": "iter/sec",
            "range": "stddev: 0.001348960345396156",
            "extra": "mean: 16.338023214285734 msec\nrounds: 56"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.15963736596771,
            "unit": "iter/sec",
            "range": "stddev: 0.00493721937609284",
            "extra": "mean: 98.42871000000004 msec\nrounds: 10"
          }
        ]
      }
    ]
  }
}