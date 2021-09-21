window.BENCHMARK_DATA = {
  "lastUpdate": 1632258835160,
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
        "date": 1632258834159,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 77.72523031933615,
            "unit": "iter/sec",
            "range": "stddev: 0.0005304877727919108",
            "extra": "mean: 12.86583514634146 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.506950754360787,
            "unit": "iter/sec",
            "range": "stddev: 0.0008424243535945253",
            "extra": "mean: 54.03375268421084 msec\nrounds: 19"
          }
        ]
      }
    ]
  }
}