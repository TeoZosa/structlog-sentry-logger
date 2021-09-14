window.BENCHMARK_DATA = {
  "lastUpdate": 1631659889347,
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
        "date": 1631654773830,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.90964864033731,
            "unit": "iter/sec",
            "range": "stddev: 0.0014491710381843758",
            "extra": "mean: 14.10245318055553 msec\nrounds: 72"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.255889907053025,
            "unit": "iter/sec",
            "range": "stddev: 0.010289920852552908",
            "extra": "mean: 81.59342223076919 msec\nrounds: 13"
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
        "date": 1631656518628,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 73.84069528229881,
            "unit": "iter/sec",
            "range": "stddev: 0.0005469238925459773",
            "extra": "mean: 13.542667714285749 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.656345245354398,
            "unit": "iter/sec",
            "range": "stddev: 0.0038306580100624585",
            "extra": "mean: 79.01175107142855 msec\nrounds: 14"
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
          "id": "35049f1504e7b497e7246a9eb47c2af1e0fb4f0c",
          "message": "👷‍♀️ 📝 Add Performance Testing and Benchmarks",
          "timestamp": "2021-09-14T13:16:10Z",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/pull/258/commits/35049f1504e7b497e7246a9eb47c2af1e0fb4f0c"
        },
        "date": 1631659888522,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.457331191093,
            "unit": "iter/sec",
            "range": "stddev: 0.005850581944099133",
            "extra": "mean: 14.397328300000057 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.965605977731089,
            "unit": "iter/sec",
            "range": "stddev: 0.002733535381454418",
            "extra": "mean: 77.12713171428602 msec\nrounds: 14"
          }
        ]
      }
    ]
  }
}