window.BENCHMARK_DATA = {
  "lastUpdate": 1631659677274,
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
        "date": 1631654978981,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 53.32220328180377,
            "unit": "iter/sec",
            "range": "stddev: 0.0011379819323732278",
            "extra": "mean: 18.753913725490232 msec\nrounds: 51"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 9.518313075719165,
            "unit": "iter/sec",
            "range": "stddev: 0.004234093941644051",
            "extra": "mean: 105.06063333333297 msec\nrounds: 6"
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
        "date": 1631656858181,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 56.41341451809365,
            "unit": "iter/sec",
            "range": "stddev: 0.0011941930544402163",
            "extra": "mean: 17.72628032786895 msec\nrounds: 61"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 8.768968374715568,
            "unit": "iter/sec",
            "range": "stddev: 0.004965749179238492",
            "extra": "mean: 114.03849999999984 msec\nrounds: 10"
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
        "date": 1631659675189,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 86.284412021106,
            "unit": "iter/sec",
            "range": "stddev: 0.000428065077089323",
            "extra": "mean: 11.58957888888888 msec\nrounds: 90"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.663022055533366,
            "unit": "iter/sec",
            "range": "stddev: 0.001013767601763132",
            "extra": "mean: 73.19024999999993 msec\nrounds: 14"
          }
        ]
      }
    ]
  }
}