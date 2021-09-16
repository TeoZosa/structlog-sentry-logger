window.BENCHMARK_DATA = {
  "lastUpdate": 1631820905917,
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
        "date": 1631820902137,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 63.098591549295776,
            "unit": "iter/sec",
            "range": "stddev: 0.001078227436472429",
            "extra": "mean: 15.848214285714285 msec\nrounds: 7"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.462686567164178,
            "unit": "iter/sec",
            "range": "stddev: 0.00318943976924893",
            "extra": "mean: 87.23958333333333 msec\nrounds: 6"
          }
        ]
      }
    ]
  }
}