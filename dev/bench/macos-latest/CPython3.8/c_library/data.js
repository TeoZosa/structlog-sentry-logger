window.BENCHMARK_DATA = {
  "lastUpdate": 1631659731381,
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
        "date": 1631654816031,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 62.95697318989866,
            "unit": "iter/sec",
            "range": "stddev: 0.004523673052236871",
            "extra": "mean: 15.883864000000052 msec\nrounds: 51"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.32808603745452,
            "unit": "iter/sec",
            "range": "stddev: 0.012928097437420535",
            "extra": "mean: 81.1155922307692 msec\nrounds: 13"
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
        "date": 1631656470253,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 64.33256864357746,
            "unit": "iter/sec",
            "range": "stddev: 0.006636982428125921",
            "extra": "mean: 15.544226215189893 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.497524041666914,
            "unit": "iter/sec",
            "range": "stddev: 0.004081422628067313",
            "extra": "mean: 74.08766207142848 msec\nrounds: 14"
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
        "date": 1631659730422,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 56.78407002000323,
            "unit": "iter/sec",
            "range": "stddev: 0.011960990453388094",
            "extra": "mean: 17.610572818181783 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.369306967948372,
            "unit": "iter/sec",
            "range": "stddev: 0.0015096590454952252",
            "extra": "mean: 74.79819278571462 msec\nrounds: 14"
          }
        ]
      }
    ]
  }
}