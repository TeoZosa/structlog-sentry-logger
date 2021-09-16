window.BENCHMARK_DATA = {
  "lastUpdate": 1631750912393,
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
        "date": 1631750911391,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.08611093179482,
            "unit": "iter/sec",
            "range": "stddev: 0.005215857779776318",
            "extra": "mean: 14.268162217948754 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 14.334076380955006,
            "unit": "iter/sec",
            "range": "stddev: 0.0024337859690021432",
            "extra": "mean: 69.76382526666676 msec\nrounds: 15"
          }
        ]
      }
    ]
  }
}