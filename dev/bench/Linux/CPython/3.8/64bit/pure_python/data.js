window.BENCHMARK_DATA = {
  "lastUpdate": 1632322251617,
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
        "date": 1632258828428,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 93.95573127234145,
            "unit": "iter/sec",
            "range": "stddev: 0.000887441983569972",
            "extra": "mean: 10.643310274509869 msec\nrounds: 102"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.65997502125277,
            "unit": "iter/sec",
            "range": "stddev: 0.0025316293799014142",
            "extra": "mean: 50.864764523809555 msec\nrounds: 21"
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
        "date": 1632259050870,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 78.52130028344153,
            "unit": "iter/sec",
            "range": "stddev: 0.001359507967881261",
            "extra": "mean: 12.73539786516855 msec\nrounds: 89"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.574065109246842,
            "unit": "iter/sec",
            "range": "stddev: 0.0019468567783558289",
            "extra": "mean: 51.08800826086949 msec\nrounds: 23"
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
        "date": 1632277198118,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 75.51162864933619,
            "unit": "iter/sec",
            "range": "stddev: 0.001478854228445854",
            "extra": "mean: 13.242993402298849 msec\nrounds: 87"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.42696611656101,
            "unit": "iter/sec",
            "range": "stddev: 0.002239464548469973",
            "extra": "mean: 54.26829320000008 msec\nrounds: 20"
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
        "date": 1632278536111,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 102.41836200189128,
            "unit": "iter/sec",
            "range": "stddev: 0.00024242937690508476",
            "extra": "mean: 9.76387417699117 msec\nrounds: 113"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.778680085537818,
            "unit": "iter/sec",
            "range": "stddev: 0.0006700081065960147",
            "extra": "mean: 45.91646491304367 msec\nrounds: 23"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "34fdef5ae571860e441c64ed54ef59c083179104",
          "message": "Merge pull request #279 from TeoZosa/dependabot/pip/dot-github/workflows/poetry-1.1.10",
          "timestamp": "2021-09-22T13:08:10Z",
          "tree_id": "c99e3009a0f9e338bcd2dde66df63bdc10027c2d"
        },
        "date": 1632322250272,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 83.5420532181767,
            "unit": "iter/sec",
            "range": "stddev: 0.0013921049562842004",
            "extra": "mean: 11.970019427083274 msec\nrounds: 96"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.464595396303757,
            "unit": "iter/sec",
            "range": "stddev: 0.003126217186220731",
            "extra": "mean: 46.58834613636378 msec\nrounds: 22"
          }
        ]
      }
    ]
  }
}