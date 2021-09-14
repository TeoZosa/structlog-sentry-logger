window.BENCHMARK_DATA = {
  "lastUpdate": 1631659767895,
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
        "date": 1631654977186,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 64.0519333075258,
            "unit": "iter/sec",
            "range": "stddev: 0.0025687857720137013",
            "extra": "mean: 15.612331249999986 msec\nrounds: 64"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.021932788988659,
            "unit": "iter/sec",
            "range": "stddev: 0.002989220763194162",
            "extra": "mean: 90.7281888888888 msec\nrounds: 9"
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
        "date": 1631656907070,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 55.70477046669619,
            "unit": "iter/sec",
            "range": "stddev: 0.0016837314287990145",
            "extra": "mean: 17.9517838709678 msec\nrounds: 62"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.15109629994386,
            "unit": "iter/sec",
            "range": "stddev: 0.0018205447273222514",
            "extra": "mean: 98.51152727272722 msec\nrounds: 11"
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
        "date": 1631659765569,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 84.85089152831752,
            "unit": "iter/sec",
            "range": "stddev: 0.001173950113998589",
            "extra": "mean: 11.785379999999968 msec\nrounds: 90"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.555334861794133,
            "unit": "iter/sec",
            "range": "stddev: 0.0042140168278411655",
            "extra": "mean: 73.77169285714302 msec\nrounds: 14"
          }
        ]
      }
    ]
  }
}