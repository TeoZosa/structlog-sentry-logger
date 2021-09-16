window.BENCHMARK_DATA = {
  "lastUpdate": 1631750652480,
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
        "date": 1631750650339,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 76.04784339034165,
            "unit": "iter/sec",
            "range": "stddev: 0.0006832881035799468",
            "extra": "mean: 13.149616812499954 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 14.015892379295513,
            "unit": "iter/sec",
            "range": "stddev: 0.002510982628488375",
            "extra": "mean: 71.3475798000001 msec\nrounds: 15"
          }
        ]
      }
    ]
  }
}