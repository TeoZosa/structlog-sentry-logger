window.BENCHMARK_DATA = {
  "lastUpdate": 1632508020390,
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
        "date": 1632258834159,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 77.72523031933615,
            "unit": "iter/sec",
            "range": "stddev: 0.0005304877727919108",
            "extra": "mean: 12.86583514634146 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.506950754360787,
            "unit": "iter/sec",
            "range": "stddev: 0.0008424243535945253",
            "extra": "mean: 54.03375268421084 msec\nrounds: 19"
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
        "date": 1632259021864,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 76.96716693223131,
            "unit": "iter/sec",
            "range": "stddev: 0.0009351260342682194",
            "extra": "mean: 12.992553056818219 msec\nrounds: 88"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.18938094659843,
            "unit": "iter/sec",
            "range": "stddev: 0.0032340767348756736",
            "extra": "mean: 52.11215530000009 msec\nrounds: 20"
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
        "date": 1632277180764,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 103.15723028655903,
            "unit": "iter/sec",
            "range": "stddev: 0.00016207050705502386",
            "extra": "mean: 9.693939990654208 msec\nrounds: 107"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.948539309487366,
            "unit": "iter/sec",
            "range": "stddev: 0.0006594067036227601",
            "extra": "mean: 47.73602518181833 msec\nrounds: 22"
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
        "date": 1632278517376,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 78.16580861356475,
            "unit": "iter/sec",
            "range": "stddev: 0.0003730989118045977",
            "extra": "mean: 12.793317407407486 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.21966111535804,
            "unit": "iter/sec",
            "range": "stddev: 0.002427082540856333",
            "extra": "mean: 54.885762894736956 msec\nrounds: 19"
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
        "date": 1632322122485,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.59297402391782,
            "unit": "iter/sec",
            "range": "stddev: 0.000841752380375464",
            "extra": "mean: 13.96785108641973 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 16.580095524765017,
            "unit": "iter/sec",
            "range": "stddev: 0.0021447499131468564",
            "extra": "mean: 60.313283388888834 msec\nrounds: 18"
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
        "date": 1632323010892,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 85.70439817143021,
            "unit": "iter/sec",
            "range": "stddev: 0.0003768127490228335",
            "extra": "mean: 11.668012626373622 msec\nrounds: 91"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.629818673438617,
            "unit": "iter/sec",
            "range": "stddev: 0.00221313991916073",
            "extra": "mean: 50.942905619047515 msec\nrounds: 21"
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
        "date": 1632323738475,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 117.22654154852667,
            "unit": "iter/sec",
            "range": "stddev: 0.0001392229708636338",
            "extra": "mean: 8.53049136134451 msec\nrounds: 119"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.542108970374063,
            "unit": "iter/sec",
            "range": "stddev: 0.000036658212467940675",
            "extra": "mean: 42.47707804166667 msec\nrounds: 24"
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
        "date": 1632402838135,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 75.35517731842104,
            "unit": "iter/sec",
            "range": "stddev: 0.0010574822379869225",
            "extra": "mean: 13.270488313953498 msec\nrounds: 86"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.531491643123605,
            "unit": "iter/sec",
            "range": "stddev: 0.002564789375435803",
            "extra": "mean: 57.04021200000007 msec\nrounds: 20"
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
        "date": 1632404631916,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.42402523966055,
            "unit": "iter/sec",
            "range": "stddev: 0.0004049622021264948",
            "extra": "mean: 13.80757278666671 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 15.473592772036527,
            "unit": "iter/sec",
            "range": "stddev: 0.004268732967198822",
            "extra": "mean: 64.62623223529405 msec\nrounds: 17"
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
        "date": 1632432954938,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 75.00900670648024,
            "unit": "iter/sec",
            "range": "stddev: 0.000565240293849968",
            "extra": "mean: 13.331732333333342 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.633348289258727,
            "unit": "iter/sec",
            "range": "stddev: 0.0017395202747522813",
            "extra": "mean: 56.71072694736855 msec\nrounds: 19"
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
        "date": 1632437918744,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 88.81929940528829,
            "unit": "iter/sec",
            "range": "stddev: 0.0009079301373759786",
            "extra": "mean: 11.258814319587621 msec\nrounds: 97"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.79536501821693,
            "unit": "iter/sec",
            "range": "stddev: 0.00007356801530563585",
            "extra": "mean: 50.516875999999876 msec\nrounds: 20"
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
          "id": "8e9adf6b4432acaf2fa51f667c443c33a3939a54",
          "message": "Merge pull request #286 from TeoZosa/dependabot/pip/dot-github/workflows/tox-gh-actions-2.8.1",
          "timestamp": "2021-09-24T13:07:47Z",
          "tree_id": "fbd94b5b0fc01c82fbd616b080919659f3c539b0"
        },
        "date": 1632489560777,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 113.175526926789,
            "unit": "iter/sec",
            "range": "stddev: 0.00023565037093218396",
            "extra": "mean: 8.835832508620703 msec\nrounds: 116"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 22.34304466483915,
            "unit": "iter/sec",
            "range": "stddev: 0.0005778679199171682",
            "extra": "mean: 44.75665760869565 msec\nrounds: 23"
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
          "id": "bbd2ded93d31b0c03de143dda5b7c66abe109466",
          "message": "Merge pull request #287 from TeoZosa/dependabot/pip/tox-gh-actions-2.8.1",
          "timestamp": "2021-09-24T13:19:34Z",
          "tree_id": "7d42fdd010aa5ea6e03d6388e9af2b9b6b577de3"
        },
        "date": 1632494385169,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 76.4855027315746,
            "unit": "iter/sec",
            "range": "stddev: 0.0006890307583654041",
            "extra": "mean: 13.074373107142852 msec\nrounds: 84"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.64537912296369,
            "unit": "iter/sec",
            "range": "stddev: 0.001992624899961806",
            "extra": "mean: 53.632591399999896 msec\nrounds: 20"
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
          "id": "aad6fba546a430b5d06583423c7bef24166830f7",
          "message": "Merge pull request #288 from TeoZosa/dependabot/pip/xdoctest-0.15.9",
          "timestamp": "2021-09-24T14:44:28Z",
          "tree_id": "0ed808cb50b77913b6e48da20a80c3a816122430"
        },
        "date": 1632495215377,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.94973818097415,
            "unit": "iter/sec",
            "range": "stddev: 0.0014427890318232882",
            "extra": "mean: 14.503318306666722 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 16.64821939135983,
            "unit": "iter/sec",
            "range": "stddev: 0.0032418278330991653",
            "extra": "mean: 60.06648377777774 msec\nrounds: 18"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "59bec1743c18c5ddcd86b68ff9615b19467ee85a",
          "message": "Merge pull request #285 from TeoZosa/add-cloud-logging-compatibility-support\n\n✨ Add Cloud Logging Compatibility Support",
          "timestamp": "2021-09-24T18:25:20Z",
          "tree_id": "542f07a9b21af752a2a87f10c518e7496caf8d9d"
        },
        "date": 1632508019487,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 60.324387652463415,
            "unit": "iter/sec",
            "range": "stddev: 0.0016330053467799672",
            "extra": "mean: 16.57704352941184 msec\nrounds: 68"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 15.02570254694105,
            "unit": "iter/sec",
            "range": "stddev: 0.003732838626026284",
            "extra": "mean: 66.5526285294115 msec\nrounds: 17"
          }
        ]
      }
    ]
  }
}