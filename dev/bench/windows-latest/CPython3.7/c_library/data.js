window.BENCHMARK_DATA = {
  "lastUpdate": 1631750662365,
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
        "date": 1631750659246,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 53.0507396220439,
            "unit": "iter/sec",
            "range": "stddev: 0.0008249225203759294",
            "extra": "mean: 18.849878571428533 msec\nrounds: 56"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 9.475471982734923,
            "unit": "iter/sec",
            "range": "stddev: 0.005360391122172355",
            "extra": "mean: 105.53564000000009 msec\nrounds: 10"
          }
        ]
      }
    ]
  }
}