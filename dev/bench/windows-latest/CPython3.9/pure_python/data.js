window.BENCHMARK_DATA = {
  "lastUpdate": 1631750749427,
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
        "date": 1631750746412,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 58.26428476105039,
            "unit": "iter/sec",
            "range": "stddev: 0.0015636025583213838",
            "extra": "mean: 17.163173015872992 msec\nrounds: 63"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.774954304398328,
            "unit": "iter/sec",
            "range": "stddev: 0.002092436373139299",
            "extra": "mean: 92.80781818181825 msec\nrounds: 11"
          }
        ]
      }
    ]
  }
}