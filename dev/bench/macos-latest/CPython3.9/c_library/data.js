window.BENCHMARK_DATA = {
  "lastUpdate": 1631750958634,
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
        "date": 1631750957072,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.16892337626338,
            "unit": "iter/sec",
            "range": "stddev: 0.0012355832065442582",
            "extra": "mean: 13.856379632911409 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 14.161459509019615,
            "unit": "iter/sec",
            "range": "stddev: 0.0017800876162007216",
            "extra": "mean: 70.6141905333336 msec\nrounds: 15"
          }
        ]
      }
    ]
  }
}