window.BENCHMARK_DATA = {
  "lastUpdate": 1634095217845,
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
        "date": 1633838800681,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.47635847966937,
            "unit": "iter/sec",
            "range": "stddev: 0.0005483290499572319",
            "extra": "mean: 13.99063999999998 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.85355999285383,
            "unit": "iter/sec",
            "range": "stddev: 0.0007461184738500297",
            "extra": "mean: 14.737620253164573 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.311818588194285,
            "unit": "iter/sec",
            "range": "stddev: 0.0016588749779016347",
            "extra": "mean: 81.22276923076927 msec\nrounds: 13"
          }
        ]
      },
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
          "id": "d4a9777225fd53e83e0d9cf83d19c066ef6ef752",
          "message": ":arrow_up: Update `poetry.lock` lockfile",
          "timestamp": "2021-10-13T03:08:47Z",
          "tree_id": "3fa70fd16c4aea88e8acde24146228afb636d9e8"
        },
        "date": 1634095216282,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 66.96281120740274,
            "unit": "iter/sec",
            "range": "stddev: 0.0014895935023053278",
            "extra": "mean: 14.933662162162184 msec\nrounds: 74"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 66.69263233152076,
            "unit": "iter/sec",
            "range": "stddev: 0.0008762413131773995",
            "extra": "mean: 14.994160000000072 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.568878703621346,
            "unit": "iter/sec",
            "range": "stddev: 0.0063960212129151916",
            "extra": "mean: 94.6174166666666 msec\nrounds: 12"
          }
        ]
      }
    ]
  }
}