window.BENCHMARK_DATA = {
  "lastUpdate": 1634096349441,
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
        "date": 1633838613853,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 64,
            "unit": "iter/sec",
            "range": "stddev: 0.000613807969779989",
            "extra": "mean: 15.625 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 57.14285714285715,
            "unit": "iter/sec",
            "range": "stddev: 0.0006588078458684115",
            "extra": "mean: 17.5 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 9.846153846153847,
            "unit": "iter/sec",
            "range": "stddev: 0.005208333333333333",
            "extra": "mean: 101.5625 msec\nrounds: 10"
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
        "date": 1634094911927,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 54.237288135593225,
            "unit": "iter/sec",
            "range": "stddev: 0.000988211768802618",
            "extra": "mean: 18.4375 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 54.237288135593225,
            "unit": "iter/sec",
            "range": "stddev: 0.0006588078458684115",
            "extra": "mean: 18.4375 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 9.142857142857142,
            "unit": "iter/sec",
            "range": "stddev: 0.00637887953849786",
            "extra": "mean: 109.375 msec\nrounds: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "97f8c3fcfa1a906a4b3626c34e132f4ef9b85a36",
          "message": "Merge pull request #312 from TeoZosa/fix-source-build-dependencies-installation\n\n🚑 Fix Source Build `mypyc` Compilation Errors",
          "timestamp": "2021-10-13T03:34:52Z",
          "tree_id": "4592b0c8f2af56637df3c25ea99d744a91bace06"
        },
        "date": 1634096346333,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 63.366336633663366,
            "unit": "iter/sec",
            "range": "stddev: 0.0004941058844013098",
            "extra": "mean: 15.78125 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 60.37735849056604,
            "unit": "iter/sec",
            "range": "stddev: 0.0008068715304598793",
            "extra": "mean: 16.5625 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 9.846153846153847,
            "unit": "iter/sec",
            "range": "stddev: 0.005208333333333333",
            "extra": "mean: 101.5625 msec\nrounds: 10"
          }
        ]
      }
    ]
  }
}