window.BENCHMARK_DATA = {
  "lastUpdate": 1631751894625,
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
        "date": 1631750659246,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 53.0507396220439,
            "unit": "iter/sec",
            "range": "stddev: 0.0008249225203759294",
            "extra": "mean: 18.849878571428533 msec\nrounds: 56"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 9.475471982734923,
            "unit": "iter/sec",
            "range": "stddev: 0.005360391122172355",
            "extra": "mean: 105.53564000000009 msec\nrounds: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "id": "d1de2c1e99203a89cc0ea8fc7370573b98579c65",
          "message": ":arrow_up: Update `poetry.lock` lockfile",
          "timestamp": "2021-09-15T23:45:24Z",
          "tree_id": "2e0959051952ebba8d8c206d6603f5236a15bc86"
        },
        "date": 1631751891999,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 86.34018381457757,
            "unit": "iter/sec",
            "range": "stddev: 0.001234484882711374",
            "extra": "mean: 11.582092553191451 msec\nrounds: 94"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 14.333281669815841,
            "unit": "iter/sec",
            "range": "stddev: 0.005127372181239906",
            "extra": "mean: 69.76769333333337 msec\nrounds: 15"
          }
        ]
      }
    ]
  }
}