window.BENCHMARK_DATA = {
  "lastUpdate": 1631820919749,
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
        "date": 1631820916891,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 60.54054054054054,
            "unit": "iter/sec",
            "range": "stddev: 0.0012293684257335053",
            "extra": "mean: 16.517857142857142 msec\nrounds: 7"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.816901408450704,
            "unit": "iter/sec",
            "range": "stddev: 0.00318943976924893",
            "extra": "mean: 92.44791666666667 msec\nrounds: 6"
          }
        ]
      }
    ]
  }
}