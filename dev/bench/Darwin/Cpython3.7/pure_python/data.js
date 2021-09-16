window.BENCHMARK_DATA = {
  "lastUpdate": 1631820614306,
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
        "date": 1631820612704,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 79.2934857136463,
            "unit": "iter/sec",
            "range": "stddev: 0.0003880165060452957",
            "extra": "mean: 12.611376470588192 msec\nrounds: 85"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.720445914492226,
            "unit": "iter/sec",
            "range": "stddev: 0.0012937217905825648",
            "extra": "mean: 72.88392857142854 msec\nrounds: 14"
          }
        ]
      }
    ]
  }
}