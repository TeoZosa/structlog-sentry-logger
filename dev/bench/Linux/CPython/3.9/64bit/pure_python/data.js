window.BENCHMARK_DATA = {
  "lastUpdate": 1632277271880,
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
        "date": 1632258878969,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 74.31551012883615,
            "unit": "iter/sec",
            "range": "stddev: 0.002119576061521042",
            "extra": "mean: 13.456141231707386 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.21566752680029,
            "unit": "iter/sec",
            "range": "stddev: 0.002452582805019551",
            "extra": "mean: 52.04086710000002 msec\nrounds: 20"
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
        "date": 1632259119287,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 102.10453890540838,
            "unit": "iter/sec",
            "range": "stddev: 0.00008884772029601142",
            "extra": "mean: 9.793883902912674 msec\nrounds: 103"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.909827170363496,
            "unit": "iter/sec",
            "range": "stddev: 0.00011631844631397583",
            "extra": "mean: 45.64161972727279 msec\nrounds: 22"
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
        "date": 1632277270558,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 106.43463639917614,
            "unit": "iter/sec",
            "range": "stddev: 0.0003553442260983461",
            "extra": "mean: 9.395437743119313 msec\nrounds: 109"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 22.783262249048843,
            "unit": "iter/sec",
            "range": "stddev: 0.0012015126962502227",
            "extra": "mean: 43.891870666666634 msec\nrounds: 24"
          }
        ]
      }
    ]
  }
}