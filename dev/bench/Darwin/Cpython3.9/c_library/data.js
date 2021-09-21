window.BENCHMARK_DATA = {
  "lastUpdate": 1632258877964,
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
        "date": 1632258876503,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.12504108388399,
            "unit": "iter/sec",
            "range": "stddev: 0.0008981747313865287",
            "extra": "mean: 13.864810126582313 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 14.07124270179922,
            "unit": "iter/sec",
            "range": "stddev: 0.0018319707112325581",
            "extra": "mean: 71.06692857142852 msec\nrounds: 14"
          }
        ]
      }
    ]
  }
}