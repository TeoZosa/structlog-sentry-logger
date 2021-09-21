window.BENCHMARK_DATA = {
  "lastUpdate": 1632258884317,
  "repoUrl": "https://github.com/TeoZosa/structlog-sentry-logger",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "id": "a208950b450fd4bf11b08fcb9cd8671f83ca42d5",
          "message": ":construction_worker: Invoke `tox-%` target directly when benchmarking in CI",
          "timestamp": "2021-09-21T20:55:29Z",
          "tree_id": "1c37749a5fb85d6155bbe2f0ae768542dc655be8"
        },
        "date": 1632258882548,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.47670880388863,
            "unit": "iter/sec",
            "range": "stddev: 0.0007203654852440444",
            "extra": "mean: 13.990571428571371 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.076642199933817,
            "unit": "iter/sec",
            "range": "stddev: 0.0016588317251329061",
            "extra": "mean: 76.47223076923073 msec\nrounds: 13"
          }
        ]
      }
    ]
  }
}