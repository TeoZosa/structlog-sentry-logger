window.BENCHMARK_DATA = {
  "lastUpdate": 1632437928446,
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
        "date": 1632323174109,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.2505381265403,
            "unit": "iter/sec",
            "range": "stddev: 0.0010824046252213815",
            "extra": "mean: 14.0349817179487 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.317181369495586,
            "unit": "iter/sec",
            "range": "stddev: 0.0014956480158421692",
            "extra": "mean: 54.5935523499999 msec\nrounds: 20"
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
          "id": "4ee8a89f671b45495c1a8ac2cf6cfc4ed724c155",
          "message": "Merge pull request #281 from TeoZosa/dependabot/pip/docs/poetry-1.1.10",
          "timestamp": "2021-09-22T14:25:47Z",
          "tree_id": "0dcbdbae8540e49c647ccb9e030c273bd412fdb5"
        },
        "date": 1632323832904,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 98.24862850848488,
            "unit": "iter/sec",
            "range": "stddev: 0.0002481740492839346",
            "extra": "mean: 10.178259128712812 msec\nrounds: 101"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.569373884077706,
            "unit": "iter/sec",
            "range": "stddev: 0.0000947880891883461",
            "extra": "mean: 48.615966904762125 msec\nrounds: 21"
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
          "id": "3ee95c4916049e09e5ae4dae49f9b3297c55a527",
          "message": "Merge pull request #283 from TeoZosa/dependabot/pip/dot-github/workflows/tox-gh-actions-2.8.0",
          "timestamp": "2021-09-23T13:07:51Z",
          "tree_id": "913a0e8bbc013100885adde775b4795100542f29"
        },
        "date": 1632402922365,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 74.26331825417512,
            "unit": "iter/sec",
            "range": "stddev: 0.001223661398056026",
            "extra": "mean: 13.46559813793103 msec\nrounds: 87"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.613202933948873,
            "unit": "iter/sec",
            "range": "stddev: 0.002571733618143237",
            "extra": "mean: 53.72530475000015 msec\nrounds: 20"
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
          "id": "a441f4cc75424b5b7f521d6e300d1902d24b00d6",
          "message": "Merge pull request #284 from TeoZosa/dependabot/pip/tox-gh-actions-2.8.0",
          "timestamp": "2021-09-23T13:37:10Z",
          "tree_id": "86c3f54f9c7d125d41fdc709dd57644d45347196"
        },
        "date": 1632404634886,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 75.24622691868065,
            "unit": "iter/sec",
            "range": "stddev: 0.000812805075384316",
            "extra": "mean: 13.289702898734179 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.039409598722745,
            "unit": "iter/sec",
            "range": "stddev: 0.0021818457584044312",
            "extra": "mean: 52.52263704999995 msec\nrounds: 20"
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
          "id": "acb1ab34f25829565d1ee774a670a5ca76be55fb",
          "message": ":memo: Fix erroneous tox `c_library` testenv description",
          "timestamp": "2021-09-23T21:33:28Z",
          "tree_id": "6b95a17c32e23290ac799793ec932c69bade4627"
        },
        "date": 1632432923076,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 113.92663167569516,
            "unit": "iter/sec",
            "range": "stddev: 0.00022966483965822755",
            "extra": "mean: 8.777578914529936 msec\nrounds: 117"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.74311608044764,
            "unit": "iter/sec",
            "range": "stddev: 0.0007154208138275242",
            "extra": "mean: 42.117470875000095 msec\nrounds: 24"
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
          "id": "dff1097d17f9c422e14df0fa1a85de7646b86a2c",
          "message": ":rotating_light: Fix `pylint` error: `duplicate-code`\n\n```\npylint...............................................................................Failed\n- hook id: pylint\n- duration: 11.06s\n- exit code: 8\n\n************* Module tests.structlog_sentry_logger.child_module_2\ntests/structlog_sentry_logger/child_module_2.py:1:0: R0801: Similar lines in 2 files\n==structlog_sentry_logger._config:[242:247]\n==structlog_sentry_logger.structlog_sentry:[151:156]\n        level: int = logging.WARNING,\n        active: bool = True,\n        as_extra: bool = True,\n        tag_keys: Union[List[str], str] = None,\n    ) -> None: (duplicate-code)\n\n-----------------------------------\nYour code has been rated at 9.96/10\n```",
          "timestamp": "2021-09-23T22:55:20Z",
          "tree_id": "b91ef84a8a60ed6c6aaf5fdcc88910d0c1793774"
        },
        "date": 1632437927270,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 79.57939359766733,
            "unit": "iter/sec",
            "range": "stddev: 0.0010192105323536085",
            "extra": "mean: 12.566067103448153 msec\nrounds: 87"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.02678807968608,
            "unit": "iter/sec",
            "range": "stddev: 0.002379104485989536",
            "extra": "mean: 49.93311938095242 msec\nrounds: 21"
          }
        ]
      }
    ]
  }
}