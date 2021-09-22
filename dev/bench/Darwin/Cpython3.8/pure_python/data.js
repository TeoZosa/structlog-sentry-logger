window.BENCHMARK_DATA = {
  "lastUpdate": 1632278766681,
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
          "id": "a208950b450fd4bf11b08fcb9cd8671f83ca42d5",
          "message": ":construction_worker: Invoke `tox-%` target directly when benchmarking in CI",
          "timestamp": "2021-09-21T20:55:29Z",
          "tree_id": "1c37749a5fb85d6155bbe2f0ae768542dc655be8"
        },
        "date": 1632258918982,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 74.0482739895839,
            "unit": "iter/sec",
            "range": "stddev: 0.0009417948216629512",
            "extra": "mean: 13.504703703703699 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 14.388848067194047,
            "unit": "iter/sec",
            "range": "stddev: 0.0010935551763898799",
            "extra": "mean: 69.49826666666645 msec\nrounds: 15"
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
          "id": "40c233556ac261160dc3947d55e87227944d239b",
          "message": ":memo: Update performance benchmark graph link\n\nAs a consequence of TeoZosa/structlog-sentry-logger#278",
          "timestamp": "2021-09-21T21:15:08Z",
          "tree_id": "971b961ce558994aed2c69c9105a1f945b4f2f00"
        },
        "date": 1632259229182,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 77.28672085324521,
            "unit": "iter/sec",
            "range": "stddev: 0.0009083961085121087",
            "extra": "mean: 12.938833333333365 msec\nrounds: 84"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 14.179934506427509,
            "unit": "iter/sec",
            "range": "stddev: 0.003000166822445058",
            "extra": "mean: 70.52218749999994 msec\nrounds: 16"
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
          "id": "65d495f680da879973081307fd6a5770e263da0d",
          "message": ":memo: Finish pretty-logging setup instructions",
          "timestamp": "2021-09-22T02:17:44Z",
          "tree_id": "46c4b206909b80a4e28c6a02f256f62278f0fdbf"
        },
        "date": 1632277405020,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 73.89911906491697,
            "unit": "iter/sec",
            "range": "stddev: 0.00030087584611902395",
            "extra": "mean: 13.531961038961047 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.78395217152386,
            "unit": "iter/sec",
            "range": "stddev: 0.001361844645359506",
            "extra": "mean: 72.54813333333315 msec\nrounds: 15"
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
          "id": "8acbaf1c8c2fa7f4a421e26ae615da472fde0871",
          "message": ":memo: Clarify pretty-logging setup instructions context",
          "timestamp": "2021-09-22T02:40:19Z",
          "tree_id": "a4d625c5b322932c250ff081915e481c29da5158"
        },
        "date": 1632278764638,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 64.50949411467731,
            "unit": "iter/sec",
            "range": "stddev: 0.0003893730752512016",
            "extra": "mean: 15.501594202898549 msec\nrounds: 69"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.591070595861252,
            "unit": "iter/sec",
            "range": "stddev: 0.006619337786423252",
            "extra": "mean: 86.27330769230787 msec\nrounds: 13"
          }
        ]
      }
    ]
  }
}