window.BENCHMARK_DATA = {
  "lastUpdate": 1631750472004,
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
        "date": 1631750470914,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 73.9461491321307,
            "unit": "iter/sec",
            "range": "stddev: 0.0006940184577003289",
            "extra": "mean: 13.523354653846134 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.5284747268408,
            "unit": "iter/sec",
            "range": "stddev: 0.0009529233593310016",
            "extra": "mean: 73.91816300000009 msec\nrounds: 14"
          }
        ]
      }
    ]
  }
}