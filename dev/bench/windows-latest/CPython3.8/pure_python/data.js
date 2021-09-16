window.BENCHMARK_DATA = {
  "lastUpdate": 1631750765715,
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
        "date": 1631750762143,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 58.90163834907032,
            "unit": "iter/sec",
            "range": "stddev: 0.0009727214216506784",
            "extra": "mean: 16.977456451613005 msec\nrounds: 62"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 9.54790115172511,
            "unit": "iter/sec",
            "range": "stddev: 0.0034470880590881923",
            "extra": "mean: 104.73506000000015 msec\nrounds: 10"
          }
        ]
      }
    ]
  }
}