window.BENCHMARK_DATA = {
  "lastUpdate": 1631654655129,
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
        "date": 1631654654126,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 89.14983992564149,
            "unit": "iter/sec",
            "range": "stddev: 0.0008635569617880304",
            "extra": "mean: 11.217070056817652 msec\nrounds: 88"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 22.218403907217454,
            "unit": "iter/sec",
            "range": "stddev: 0.0014328968915026633",
            "extra": "mean: 45.0077334166726 msec\nrounds: 12"
          }
        ]
      }
    ]
  }
}