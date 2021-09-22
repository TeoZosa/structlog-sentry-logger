window.BENCHMARK_DATA = {
  "lastUpdate": 1632323071615,
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
        "date": 1632258857127,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 118.35824870799063,
            "unit": "iter/sec",
            "range": "stddev: 0.00010021585252166607",
            "extra": "mean: 8.44892528333336 msec\nrounds: 120"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 24.780164235018784,
            "unit": "iter/sec",
            "range": "stddev: 0.0001387516270975689",
            "extra": "mean: 40.3548576399999 msec\nrounds: 25"
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
        "date": 1632259097481,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 74.37624297422302,
            "unit": "iter/sec",
            "range": "stddev: 0.0008252335855476925",
            "extra": "mean: 13.445153452380964 msec\nrounds: 84"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.538087787439107,
            "unit": "iter/sec",
            "range": "stddev: 0.0024753792500029088",
            "extra": "mean: 53.94299625000008 msec\nrounds: 20"
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
        "date": 1632277226779,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 101.92486848822901,
            "unit": "iter/sec",
            "range": "stddev: 0.00013854702624220073",
            "extra": "mean: 9.811148298076901 msec\nrounds: 104"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.24608597481901,
            "unit": "iter/sec",
            "range": "stddev: 0.0009047778053361343",
            "extra": "mean: 47.06749286363644 msec\nrounds: 22"
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
        "date": 1632278538403,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 118.41981738771611,
            "unit": "iter/sec",
            "range": "stddev: 0.00012260543647974156",
            "extra": "mean: 8.444532528925617 msec\nrounds: 121"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 24.65024672057264,
            "unit": "iter/sec",
            "range": "stddev: 0.00003233107746367195",
            "extra": "mean: 40.56754527999992 msec\nrounds: 25"
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
        "date": 1632322124663,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 87.35749125016922,
            "unit": "iter/sec",
            "range": "stddev: 0.0007690344456699932",
            "extra": "mean: 11.447215180851051 msec\nrounds: 94"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.112817438694663,
            "unit": "iter/sec",
            "range": "stddev: 0.004106032502670751",
            "extra": "mean: 47.36459276000005 msec\nrounds: 25"
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
          "id": "da8e12159cc86b460546cc6a6634262a62fc8438",
          "message": "Merge pull request #282 from TeoZosa/dependabot/pip/sentry-sdk-1.4.1",
          "timestamp": "2021-09-22T14:08:59Z",
          "tree_id": "3ab6996b40c8024c951d13f7c8454bd52a5a3bda"
        },
        "date": 1632323070382,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 78.47508129687515,
            "unit": "iter/sec",
            "range": "stddev: 0.0008100996783352093",
            "extra": "mean: 12.74289855421685 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.92024826237988,
            "unit": "iter/sec",
            "range": "stddev: 0.0024953061884450396",
            "extra": "mean: 52.85342909523827 msec\nrounds: 21"
          }
        ]
      }
    ]
  }
}