window.BENCHMARK_DATA = {
  "lastUpdate": 1631750556011,
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
      }
    ]
  }
}