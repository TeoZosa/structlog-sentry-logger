window.BENCHMARK_DATA = {
  "lastUpdate": 1631750619785,
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
        "date": 1631750618697,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.41109202910718,
            "unit": "iter/sec",
            "range": "stddev: 0.006385150980425783",
            "extra": "mean: 14.40691928000002 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.59930283834531,
            "unit": "iter/sec",
            "range": "stddev: 0.0008712201849610505",
            "extra": "mean: 73.53318121428602 msec\nrounds: 14"
          }
        ]
      }
    ]
  }
}