window.BENCHMARK_DATA = {
  "lastUpdate": 1631751781834,
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
        "date": 1631750553051,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 51.97410404440751,
            "unit": "iter/sec",
            "range": "stddev: 0.0007339856489848759",
            "extra": "mean: 19.24035090909088 msec\nrounds: 55"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 9.555614248261767,
            "unit": "iter/sec",
            "range": "stddev: 0.0028160302534671186",
            "extra": "mean: 104.65051999999967 msec\nrounds: 10"
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
        "date": 1631751779097,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 80.81660100787691,
            "unit": "iter/sec",
            "range": "stddev: 0.00047423563562407235",
            "extra": "mean: 12.373695348837222 msec\nrounds: 86"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.984176462377633,
            "unit": "iter/sec",
            "range": "stddev: 0.0010172071033196215",
            "extra": "mean: 77.01682142857155 msec\nrounds: 14"
          }
        ]
      }
    ]
  }
}