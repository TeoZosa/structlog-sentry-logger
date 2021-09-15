window.BENCHMARK_DATA = {
  "lastUpdate": 1631750144700,
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
        "date": 1631750144051,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 114.62683544049789,
            "unit": "iter/sec",
            "range": "stddev: 0.00042990441012946305",
            "extra": "mean: 8.723960634149185 msec\nrounds: 123"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 24.370974498079942,
            "unit": "iter/sec",
            "range": "stddev: 0.0015344701501204595",
            "extra": "mean: 41.032417480014374 msec\nrounds: 25"
          }
        ]
      }
    ]
  }
}