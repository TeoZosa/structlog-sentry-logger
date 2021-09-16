window.BENCHMARK_DATA = {
  "lastUpdate": 1631751486764,
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
          "id": "ddefb8f473d898f1678afc2b0eb43d1ab317e4d1",
          "message": ":construction_worker: Add aggregate benchmarks plotting job",
          "timestamp": "2021-09-15T23:42:24Z",
          "tree_id": "39252aac648c11ec72f6d4b863646fc20af8dcfb"
        },
        "date": 1631750243909,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 108.11080693598475,
            "unit": "iter/sec",
            "range": "stddev: 0.0005309216015768069",
            "extra": "mean: 9.249769087304346 msec\nrounds: 126"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.470606375810956,
            "unit": "iter/sec",
            "range": "stddev: 0.0014863037538130224",
            "extra": "mean: 42.606483359995764 msec\nrounds: 25"
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
          "id": "d1de2c1e99203a89cc0ea8fc7370573b98579c65",
          "message": ":arrow_up: Update `poetry.lock` lockfile",
          "timestamp": "2021-09-15T23:45:24Z",
          "tree_id": "2e0959051952ebba8d8c206d6603f5236a15bc86"
        },
        "date": 1631751485581,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.02288873607606,
            "unit": "iter/sec",
            "range": "stddev: 0.0009130856852719774",
            "extra": "mean: 14.281044641975706 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.6665196491597,
            "unit": "iter/sec",
            "range": "stddev: 0.002090940157014598",
            "extra": "mean: 53.571850499994866 msec\nrounds: 20"
          }
        ]
      }
    ]
  }
}