window.BENCHMARK_DATA = {
  "lastUpdate": 1632259055627,
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
        "date": 1632259054102,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.89272113530163,
            "unit": "iter/sec",
            "range": "stddev: 0.0009891946316646111",
            "extra": "mean: 14.105820512820486 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 14.106680359551092,
            "unit": "iter/sec",
            "range": "stddev: 0.002655139404465127",
            "extra": "mean: 70.88839999999988 msec\nrounds: 15"
          }
        ]
      }
    ]
  }
}