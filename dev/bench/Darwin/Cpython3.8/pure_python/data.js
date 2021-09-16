window.BENCHMARK_DATA = {
  "lastUpdate": 1631820608792,
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
        "date": 1631820607644,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.79209923397453,
            "unit": "iter/sec",
            "range": "stddev: 0.0025375212799245163",
            "extra": "mean: 14.12587012987009 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 14.257240539608066,
            "unit": "iter/sec",
            "range": "stddev: 0.001886089045012166",
            "extra": "mean: 70.13979999999988 msec\nrounds: 15"
          }
        ]
      }
    ]
  }
}