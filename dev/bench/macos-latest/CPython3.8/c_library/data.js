window.BENCHMARK_DATA = {
  "lastUpdate": 1631750759623,
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
        "date": 1631750757922,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.7923264942963,
            "unit": "iter/sec",
            "range": "stddev: 0.0012512810250290916",
            "extra": "mean: 14.750932025973983 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.515927985320664,
            "unit": "iter/sec",
            "range": "stddev: 0.0017842783769068055",
            "extra": "mean: 73.9867807142859 msec\nrounds: 14"
          }
        ]
      }
    ]
  }
}