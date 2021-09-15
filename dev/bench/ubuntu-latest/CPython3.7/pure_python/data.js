window.BENCHMARK_DATA = {
  "lastUpdate": 1631750140221,
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
        "date": 1631750139017,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 81.46128084043094,
            "unit": "iter/sec",
            "range": "stddev: 0.0006212269029183668",
            "extra": "mean: 12.275770644446817 msec\nrounds: 90"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.473752664479843,
            "unit": "iter/sec",
            "range": "stddev: 0.0019850659182335155",
            "extra": "mean: 54.130853550006464 msec\nrounds: 20"
          }
        ]
      }
    ]
  }
}