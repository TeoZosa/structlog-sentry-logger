window.BENCHMARK_DATA = {
  "lastUpdate": 1631659512283,
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
        "date": 1631654623006,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 117.67408678134393,
            "unit": "iter/sec",
            "range": "stddev: 0.00010826367155887248",
            "extra": "mean: 8.498047678569622 msec\nrounds: 112"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 24.55177407325722,
            "unit": "iter/sec",
            "range": "stddev: 0.0002338422422214367",
            "extra": "mean: 40.730254238093536 msec\nrounds: 21"
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
        "date": 1631656329055,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 118.28308214752097,
            "unit": "iter/sec",
            "range": "stddev: 0.00010879887097596612",
            "extra": "mean: 8.454294408331483 msec\nrounds: 120"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 24.483037960329717,
            "unit": "iter/sec",
            "range": "stddev: 0.0005810099548001342",
            "extra": "mean: 40.84460440000612 msec\nrounds: 25"
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
        "date": 1631659511343,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 132.70965407292522,
            "unit": "iter/sec",
            "range": "stddev: 0.0004784520391863997",
            "extra": "mean: 7.535246828768694 msec\nrounds: 146"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 27.841948829499927,
            "unit": "iter/sec",
            "range": "stddev: 0.0008442237389667182",
            "extra": "mean: 35.91702600000652 msec\nrounds: 29"
          }
        ]
      }
    ]
  }
}