window.BENCHMARK_DATA = {
  "lastUpdate": 1633838773649,
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
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "id": "579c3b009cdf31b969ff038a94c39d6561e2a00b",
          "message": ":green_heart: Fix benchmark file mapping\n\nPreviously, non-deterministic ordering from `find` mapped benchmarks\nfrom non-identical directories across platforms.",
          "timestamp": "2021-10-10T03:59:04Z",
          "tree_id": "eda9c3ea3aa8215836518e6712a03af8f8c09fd6"
        },
        "date": 1633838771898,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 69.08946619050951,
            "unit": "iter/sec",
            "range": "stddev: 0.0007014094322119105",
            "extra": "mean: 14.473986486486494 msec\nrounds: 74"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.99361575734198,
            "unit": "iter/sec",
            "range": "stddev: 0.00042328166724376676",
            "extra": "mean: 14.707263157894635 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.578518760095033,
            "unit": "iter/sec",
            "range": "stddev: 0.0015332376814699421",
            "extra": "mean: 86.36683333333325 msec\nrounds: 12"
          }
        ]
      }
    ]
  }
}