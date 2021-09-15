window.BENCHMARK_DATA = {
  "lastUpdate": 1631750177948,
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
        "date": 1631750176735,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 78.09357003389934,
            "unit": "iter/sec",
            "range": "stddev: 0.0007828366521077819",
            "extra": "mean: 12.80515155813614 msec\nrounds: 86"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.164387479150903,
            "unit": "iter/sec",
            "range": "stddev: 0.003575055148900625",
            "extra": "mean: 55.05277847369204 msec\nrounds: 19"
          }
        ]
      }
    ]
  }
}