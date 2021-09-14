window.BENCHMARK_DATA = {
  "lastUpdate": 1631656511172,
  "repoUrl": "https://github.com/TeoZosa/structlog-sentry-logger",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "name": "TeoZosa",
            "username": "TeoZosa"
          },
          "committer": {
            "name": "TeoZosa",
            "username": "TeoZosa"
          },
          "id": "458510a21f0829dcd8e5e903e29099236d8b8a1c",
          "message": "👷‍♀️ 📝 Add Performance Testing and Benchmarks",
          "timestamp": "2021-09-14T13:16:10Z",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/pull/258/commits/458510a21f0829dcd8e5e903e29099236d8b8a1c"
        },
        "date": 1631654673119,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.82308293648931,
            "unit": "iter/sec",
            "range": "stddev: 0.0007554508668231396",
            "extra": "mean: 13.7319097142883 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.023903450986477,
            "unit": "iter/sec",
            "range": "stddev: 0.0017422026547160615",
            "extra": "mean: 52.565447599984815 msec\nrounds: 15"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "TeoZosa",
            "username": "TeoZosa"
          },
          "committer": {
            "name": "TeoZosa",
            "username": "TeoZosa"
          },
          "id": "c92c146be7bf8d52e3cf7e978df1dd4e73e585bb",
          "message": "👷‍♀️ 📝 Add Performance Testing and Benchmarks",
          "timestamp": "2021-09-14T13:16:10Z",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/pull/258/commits/c92c146be7bf8d52e3cf7e978df1dd4e73e585bb"
        },
        "date": 1631656510607,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 118.60747717218635,
            "unit": "iter/sec",
            "range": "stddev: 0.000060122021220579335",
            "extra": "mean: 8.431171658328651 msec\nrounds: 120"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 25.144268382880192,
            "unit": "iter/sec",
            "range": "stddev: 0.00005635707933843986",
            "extra": "mean: 39.77049500000021 msec\nrounds: 25"
          }
        ]
      }
    ]
  }
}