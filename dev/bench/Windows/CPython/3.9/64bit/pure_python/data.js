window.BENCHMARK_DATA = {
  "lastUpdate": 1631820845209,
  "repoUrl": "https://github.com/TeoZosa/structlog-sentry-logger",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "869f972663228706bd822727098de0dd4cfcebeb",
          "message": ":alembic: Test setting env implicitly via `TOXENV`",
          "timestamp": "2021-09-16T12:23:08-07:00",
          "tree_id": "1678e07a73b71eae747346faf8b23adb273c6396",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/869f972663228706bd822727098de0dd4cfcebeb"
        },
        "date": 1631820840742,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 54.857142857142854,
            "unit": "iter/sec",
            "range": "stddev: 0.0008068715304598774",
            "extra": "mean: 18.229166666666668 msec\nrounds: 6"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 9.411764705882353,
            "unit": "iter/sec",
            "range": "stddev: 0.00427908248050911",
            "extra": "mean: 106.25 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}