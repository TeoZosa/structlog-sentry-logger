window.BENCHMARK_DATA = {
  "lastUpdate": 1633838552843,
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
        "date": 1633838551292,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 70.53066701995559,
            "unit": "iter/sec",
            "range": "stddev: 0.0005013342074875696",
            "extra": "mean: 14.178229729729695 msec\nrounds: 74"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 66.92707932939085,
            "unit": "iter/sec",
            "range": "stddev: 0.000673224047754358",
            "extra": "mean: 14.941635135135096 msec\nrounds: 74"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.26383275461121,
            "unit": "iter/sec",
            "range": "stddev: 0.0014593991976779934",
            "extra": "mean: 88.77972727272767 msec\nrounds: 11"
          }
        ]
      }
    ]
  }
}