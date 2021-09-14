window.BENCHMARK_DATA = {
  "lastUpdate": 1631654970258,
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
        "date": 1631654969281,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 49.92691992169377,
            "unit": "iter/sec",
            "range": "stddev: 0.01294257804940679",
            "extra": "mean: 20.029274819444442 msec\nrounds: 72"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.232984246856807,
            "unit": "iter/sec",
            "range": "stddev: 0.028441788051019715",
            "extra": "mean: 97.72320330769227 msec\nrounds: 13"
          }
        ]
      }
    ]
  }
}