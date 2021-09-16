window.BENCHMARK_DATA = {
  "lastUpdate": 1631750846303,
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
        "date": 1631750843239,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 55.91935757605268,
            "unit": "iter/sec",
            "range": "stddev: 0.0025599687677798242",
            "extra": "mean: 17.882894999999916 msec\nrounds: 60"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.163820458144338,
            "unit": "iter/sec",
            "range": "stddev: 0.004751363590591491",
            "extra": "mean: 98.38820000000031 msec\nrounds: 11"
          }
        ]
      }
    ]
  }
}