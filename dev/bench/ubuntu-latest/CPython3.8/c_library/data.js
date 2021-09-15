window.BENCHMARK_DATA = {
  "lastUpdate": 1631750168835,
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
        "date": 1631750167624,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 100.00903926363573,
            "unit": "iter/sec",
            "range": "stddev: 0.00014646313105181013",
            "extra": "mean: 9.999096155337329 msec\nrounds: 103"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.385689399659558,
            "unit": "iter/sec",
            "range": "stddev: 0.0004300791117559588",
            "extra": "mean: 46.76024145454572 msec\nrounds: 22"
          }
        ]
      }
    ]
  }
}