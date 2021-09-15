window.BENCHMARK_DATA = {
  "lastUpdate": 1631750298857,
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
        "date": 1631750297678,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 76.37764665619898,
            "unit": "iter/sec",
            "range": "stddev: 0.0014722586385934628",
            "extra": "mean: 13.092835977276579 msec\nrounds: 88"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.07463116952218,
            "unit": "iter/sec",
            "range": "stddev: 0.0013188569029789318",
            "extra": "mean: 49.81411571427651 msec\nrounds: 21"
          }
        ]
      }
    ]
  }
}