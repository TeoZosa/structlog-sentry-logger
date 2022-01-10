window.BENCHMARK_DATA = {
  "lastUpdate": 1641827378681,
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
          "id": "7adcde88bf9e0b2b56d9e559aed611fee7af48cc",
          "message": ":bookmark: Bump version number to `0.10.0`",
          "timestamp": "2021-09-24T18:45:20Z",
          "tree_id": "0d020a33cb5478552797da801a637d264dba17ad"
        },
        "date": 1632509377844,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 76.92701651002383,
            "unit": "iter/sec",
            "range": "stddev: 0.0005716956924785783",
            "extra": "mean: 12.999334243902425 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.196567624756774,
            "unit": "iter/sec",
            "range": "stddev: 0.0014711528390275524",
            "extra": "mean: 54.95541909999999 msec\nrounds: 20"
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
          "id": "5cb1945063e7cbb980063c7ac36de4034f2aafaa",
          "message": "Merge pull request #289 from TeoZosa/namespace-local-dev-formatting-option-flag-user-and-simplify-workflow\n\n✨ Rename Local Development Formatting Option Flag and Simplify Workflow",
          "timestamp": "2021-09-24T20:21:39Z",
          "tree_id": "2f92d8bab16aebf909dd690e70ce414297a713a1"
        },
        "date": 1632514986928,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 106.41082926022764,
            "unit": "iter/sec",
            "range": "stddev: 0.000284637086387322",
            "extra": "mean: 9.397539770642144 msec\nrounds: 109"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 22.22612070526845,
            "unit": "iter/sec",
            "range": "stddev: 0.00021220607940503883",
            "extra": "mean: 44.99210695652171 msec\nrounds: 23"
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
          "id": "5201aca0a1a7416103a9b1582b591e90b1db1c30",
          "message": ":arrow_up: Update `poetry.lock` lockfile",
          "timestamp": "2021-09-24T20:26:16Z",
          "tree_id": "3e973833039276cd44de405cad314aca606cd5f6"
        },
        "date": 1632515313397,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 73.07455724878416,
            "unit": "iter/sec",
            "range": "stddev: 0.000790595574651406",
            "extra": "mean: 13.684653560000028 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.540420754886412,
            "unit": "iter/sec",
            "range": "stddev: 0.001824465104730495",
            "extra": "mean: 57.01117515789465 msec\nrounds: 19"
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
          "id": "7b3fbad5c0d22f9729317d03b718ea4340a5301a",
          "message": ":arrow_up: Auto-update `pre-commit` hooks",
          "timestamp": "2021-09-24T20:28:16Z",
          "tree_id": "b78ee015f6aa751a6ae98f21b91c9dffad32058b"
        },
        "date": 1632515735243,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 66.11691289359224,
            "unit": "iter/sec",
            "range": "stddev: 0.0013252015882748258",
            "extra": "mean: 15.124723103896091 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.21177456350445,
            "unit": "iter/sec",
            "range": "stddev: 0.0019081178213866633",
            "extra": "mean: 58.09976166666643 msec\nrounds: 18"
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
          "id": "17af6f79964643b674b2233ce20d675ee0597a43",
          "message": ":bookmark: Bump version number to `0.11.0`",
          "timestamp": "2021-09-24T20:48:58Z",
          "tree_id": "6c3748287fb0c32ec6e4ceb50d68a5db0f51120a"
        },
        "date": 1632516641578,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 66.37581289420912,
            "unit": "iter/sec",
            "range": "stddev: 0.0010283429546354846",
            "extra": "mean: 15.065728861111152 msec\nrounds: 72"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 16.524212178683857,
            "unit": "iter/sec",
            "range": "stddev: 0.0012466939455927169",
            "extra": "mean: 60.51725729411744 msec\nrounds: 17"
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
          "id": "c62c74f1bc14c5022f51b22420dfe4184330cabc",
          "message": "Merge pull request #290 from TeoZosa/dependabot/pip/sphinxcontrib-confluencebuilder-1.6.0",
          "timestamp": "2021-09-27T13:15:16Z",
          "tree_id": "ea8da77f2cee6148e5d12aa828bc3f1f3e32404f"
        },
        "date": 1632750344125,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 104.04660878169047,
            "unit": "iter/sec",
            "range": "stddev: 0.0002818373171158771",
            "extra": "mean: 9.61107730188679 msec\nrounds: 106"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.94833095124434,
            "unit": "iter/sec",
            "range": "stddev: 0.00004791344859236927",
            "extra": "mean: 45.561551000000115 msec\nrounds: 22"
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
          "id": "402dbfef57c995800c8181b63ed569f259ca78d7",
          "message": "Merge pull request #291 from TeoZosa/dependabot/pip/sentry-sdk-1.4.2",
          "timestamp": "2021-09-28T13:20:14Z",
          "tree_id": "0ffced2c9d0cab92a7a6b7dfbdbe2529cbebafad"
        },
        "date": 1632835584089,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 106.6220505248291,
            "unit": "iter/sec",
            "range": "stddev: 0.0001635845395439831",
            "extra": "mean: 9.378922981481487 msec\nrounds: 108"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 22.19391541631154,
            "unit": "iter/sec",
            "range": "stddev: 0.00007210827631642407",
            "extra": "mean: 45.057394391304406 msec\nrounds: 23"
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
          "id": "97214a2784db78ee1fe2ae163134c4a3835ec468",
          "message": "Merge pull request #292 from TeoZosa/dependabot/pip/sentry-sdk-1.4.3",
          "timestamp": "2021-09-30T13:13:29Z",
          "tree_id": "d37d4243c470f121d0e0522f6832b6451315c506"
        },
        "date": 1633007999264,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 73.26357321182725,
            "unit": "iter/sec",
            "range": "stddev: 0.0008517005615762214",
            "extra": "mean: 13.649347911392422 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.15223956071705,
            "unit": "iter/sec",
            "range": "stddev: 0.0025146334892776384",
            "extra": "mean: 52.21321489999995 msec\nrounds: 20"
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
          "id": "a5ec72f567f51305b8136c6f0dffe7ae454762cd",
          "message": ":coffin: Remove redundant SKIP flag\n\nExit code ignored in `pre-commit` config.",
          "timestamp": "2021-10-01T03:41:06Z",
          "tree_id": "80e658be0e3340acb740c077c9d1b7fc265e636b"
        },
        "date": 1633059830387,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.45622636302403,
            "unit": "iter/sec",
            "range": "stddev: 0.000945975309155528",
            "extra": "mean: 14.193209764705873 msec\nrounds: 85"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.73798741985029,
            "unit": "iter/sec",
            "range": "stddev: 0.0028635311780843046",
            "extra": "mean: 56.376181600000265 msec\nrounds: 20"
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
          "id": "d24810ea303a3d051ed08e88d725061bc976ceed",
          "message": ":pushpin: Add version specifiers to build dependencies",
          "timestamp": "2021-10-02T19:35:50Z",
          "tree_id": "171fb77ea956ed50022c0f9bfa9ed164bb35a660"
        },
        "date": 1633203556422,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 93.8120449412232,
            "unit": "iter/sec",
            "range": "stddev: 0.0003409219265036229",
            "extra": "mean: 10.659611999999976 msec\nrounds: 100"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.254236715409874,
            "unit": "iter/sec",
            "range": "stddev: 0.000926235610526611",
            "extra": "mean: 49.372386333333296 msec\nrounds: 21"
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
          "id": "7c4b10dff06f4e8aaebf500db238aa369d7a2b14",
          "message": ":bookmark: Bump version number to `0.11.1`",
          "timestamp": "2021-10-02T19:37:33Z",
          "tree_id": "2f6d3559830e0c960807a65cb153ec7107b3912e"
        },
        "date": 1633203792068,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 76.26272659200136,
            "unit": "iter/sec",
            "range": "stddev: 0.0005131722779800475",
            "extra": "mean: 13.11256553086423 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.31583316980951,
            "unit": "iter/sec",
            "range": "stddev: 0.0015245247783652308",
            "extra": "mean: 51.77100005000001 msec\nrounds: 20"
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
          "id": "b62effc25aee7fe1009928670e57d74f95097923",
          "message": ":arrow_up: Bump Python versions",
          "timestamp": "2021-10-02T19:39:08Z",
          "tree_id": "57d1dee3b6cdf3ce7c7115c5fd483882ddf46064"
        },
        "date": 1633203997986,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 64.30024723239656,
            "unit": "iter/sec",
            "range": "stddev: 0.0016258515383396818",
            "extra": "mean: 15.552039736111116 msec\nrounds: 72"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 15.637255871759177,
            "unit": "iter/sec",
            "range": "stddev: 0.002910500698273379",
            "extra": "mean: 63.94983929411785 msec\nrounds: 17"
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
          "id": "a5ec72f567f51305b8136c6f0dffe7ae454762cd",
          "message": ":coffin: Remove redundant SKIP flag\n\nExit code ignored in `pre-commit` config.",
          "timestamp": "2021-10-01T03:41:06Z",
          "tree_id": "80e658be0e3340acb740c077c9d1b7fc265e636b"
        },
        "date": 1633204648322,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.1070709021109,
            "unit": "iter/sec",
            "range": "stddev: 0.0004881440795873243",
            "extra": "mean: 13.868265448717949 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.86291197332599,
            "unit": "iter/sec",
            "range": "stddev: 0.002229036103667063",
            "extra": "mean: 55.981913894736884 msec\nrounds: 19"
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
          "id": "6b1c2cdc3a13812ca28104aaceebf9eb068de6bb",
          "message": ":bookmark: Bump version number to `0.11.1`",
          "timestamp": "2021-10-02T19:54:37Z",
          "tree_id": "57d1dee3b6cdf3ce7c7115c5fd483882ddf46064"
        },
        "date": 1633204866603,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 73.60762018331295,
            "unit": "iter/sec",
            "range": "stddev: 0.0008153307173404281",
            "extra": "mean: 13.585549940476175 msec\nrounds: 84"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.94931969735965,
            "unit": "iter/sec",
            "range": "stddev: 0.002000870823956986",
            "extra": "mean: 55.71241789999988 msec\nrounds: 20"
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
          "id": "8af840b26415c8a334f006437dc5f94181bbcabf",
          "message": "Merge pull request #294 from TeoZosa/dependabot/pip/orjson-3.6.4",
          "timestamp": "2021-10-04T13:34:29Z",
          "tree_id": "8a69446c910279af8c2a33750b8f4979f54f620e"
        },
        "date": 1633355643670,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 118.7091823688342,
            "unit": "iter/sec",
            "range": "stddev: 0.00011621203671284382",
            "extra": "mean: 8.42394817355375 msec\nrounds: 121"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 24.976534994949795,
            "unit": "iter/sec",
            "range": "stddev: 0.00006971677431715818",
            "extra": "mean: 40.03757928000013 msec\nrounds: 25"
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
          "id": "579c3b009cdf31b969ff038a94c39d6561e2a00b",
          "message": ":green_heart: Fix benchmark file mapping\n\nPreviously, non-deterministic ordering from `find` mapped benchmarks\nfrom non-identical directories across platforms.",
          "timestamp": "2021-10-10T03:59:04Z",
          "tree_id": "eda9c3ea3aa8215836518e6712a03af8f8c09fd6"
        },
        "date": 1633838440784,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 113.78887682442014,
            "unit": "iter/sec",
            "range": "stddev: 0.00007542570803758259",
            "extra": "mean: 8.788205208695677 msec\nrounds: 115"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 104.22445843798852,
            "unit": "iter/sec",
            "range": "stddev: 0.00007158043240987326",
            "extra": "mean: 9.594676863636382 msec\nrounds: 110"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.794803407960597,
            "unit": "iter/sec",
            "range": "stddev: 0.00008286502076591823",
            "extra": "mean: 45.88249690909108 msec\nrounds: 22"
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
          "id": "d4a9777225fd53e83e0d9cf83d19c066ef6ef752",
          "message": ":arrow_up: Update `poetry.lock` lockfile",
          "timestamp": "2021-10-13T03:08:47Z",
          "tree_id": "3fa70fd16c4aea88e8acde24146228afb636d9e8"
        },
        "date": 1634094699260,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 67.75217266174086,
            "unit": "iter/sec",
            "range": "stddev: 0.0011794457429078005",
            "extra": "mean: 14.759674276315753 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 61.70412181690735,
            "unit": "iter/sec",
            "range": "stddev: 0.0009876623128876694",
            "extra": "mean: 16.20637277631578 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 14.645128241964994,
            "unit": "iter/sec",
            "range": "stddev: 0.005516296663700219",
            "extra": "mean: 68.28209241176478 msec\nrounds: 17"
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
          "id": "97f8c3fcfa1a906a4b3626c34e132f4ef9b85a36",
          "message": "Merge pull request #312 from TeoZosa/fix-source-build-dependencies-installation\n\n🚑 Fix Source Build `mypyc` Compilation Errors",
          "timestamp": "2021-10-13T03:34:52Z",
          "tree_id": "4592b0c8f2af56637df3c25ea99d744a91bace06"
        },
        "date": 1634096188803,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.16713771255019,
            "unit": "iter/sec",
            "range": "stddev: 0.0008142222537447162",
            "extra": "mean: 13.856722487499951 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.71635647187156,
            "unit": "iter/sec",
            "range": "stddev: 0.0010569397811172828",
            "extra": "mean: 14.55257599999996 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 16.755843529439094,
            "unit": "iter/sec",
            "range": "stddev: 0.0030837641197027253",
            "extra": "mean: 59.68067189473661 msec\nrounds: 19"
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
          "id": "517775d778bf4dff722d354f4af11cd4ddbef359",
          "message": "Merge pull request #307 from TeoZosa/dependabot/pip/dot-github/workflows/pip-21.3\n\n⬆️ Bump pip from 21.2.4 to 21.3 in /.github/workflows",
          "timestamp": "2021-10-13T03:36:04Z",
          "tree_id": "d4f8eecaa51b5570a5891ed3989da8e6910af976"
        },
        "date": 1634096542891,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 65.19792263770978,
            "unit": "iter/sec",
            "range": "stddev: 0.0017380442822581598",
            "extra": "mean: 15.33791199999999 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 63.94307614472454,
            "unit": "iter/sec",
            "range": "stddev: 0.0016290393673790014",
            "extra": "mean: 15.63890979746839 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 15.793580264451615,
            "unit": "iter/sec",
            "range": "stddev: 0.0036219993346060624",
            "extra": "mean: 63.31686566666662 msec\nrounds: 18"
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
          "id": "265cecd2c68891c84bb78acf5f47cdfa83a0847a",
          "message": ":bookmark: Bump version number to `0.12.1`",
          "timestamp": "2021-10-13T03:36:33Z",
          "tree_id": "905d167fd5ebf18bf6e0ba5b949fb7ccd3571b71"
        },
        "date": 1634098157174,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 113.79338100061479,
            "unit": "iter/sec",
            "range": "stddev: 0.00015590712333325308",
            "extra": "mean: 8.787857353448329 msec\nrounds: 116"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 104.3171909105956,
            "unit": "iter/sec",
            "range": "stddev: 0.0002618640557046568",
            "extra": "mean: 9.58614770270265 msec\nrounds: 111"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.929270318332385,
            "unit": "iter/sec",
            "range": "stddev: 0.000052833305849926054",
            "extra": "mean: 45.60115250000007 msec\nrounds: 22"
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
          "id": "12d53604da3df3930da58293d0fa06bd271ede12",
          "message": "Merge pull request #313 from TeoZosa/dependabot/pip/emoji-1.6.1",
          "timestamp": "2021-10-13T13:14:51Z",
          "tree_id": "977898b0ecbd954e84587c6dd8be594bc4328938"
        },
        "date": 1634131562141,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 80.768291121354,
            "unit": "iter/sec",
            "range": "stddev: 0.0008319626754822556",
            "extra": "mean: 12.381096419354774 msec\nrounds: 93"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.57003904711613,
            "unit": "iter/sec",
            "range": "stddev: 0.0021446366146777997",
            "extra": "mean: 14.170319493976042 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.09847586971985,
            "unit": "iter/sec",
            "range": "stddev: 0.0015360109843298448",
            "extra": "mean: 52.360199149999964 msec\nrounds: 20"
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
          "id": "d5da6e730f3c9758110d5925960e5cfd204ccada",
          "message": "Merge pull request #314 from TeoZosa/fix-gratuitous-env-var-loading\n\n🐛 Fix Gratuitous Global `.env` Loading",
          "timestamp": "2021-10-14T05:46:35Z",
          "tree_id": "02e2d0f8ef540539e5676260c20731a2b3213f3b"
        },
        "date": 1634190525735,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.40961461957147,
            "unit": "iter/sec",
            "range": "stddev: 0.001644563788233019",
            "extra": "mean: 13.622193839080495 msec\nrounds: 87"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.32281212238057,
            "unit": "iter/sec",
            "range": "stddev: 0.0013237237552636393",
            "extra": "mean: 13.826895977272795 msec\nrounds: 88"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 16.764976976961506,
            "unit": "iter/sec",
            "range": "stddev: 0.003406247772032937",
            "extra": "mean: 59.648158263158 msec\nrounds: 19"
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
          "id": "e87f42e723ef448c4ef625e2e00d4ce935d85593",
          "message": ":memo: Add `json` to JSON-formatted fenced code blocks",
          "timestamp": "2021-10-14T05:51:48Z",
          "tree_id": "0e4a45d936d7ad69c605a49f513b3dbbe07dbb18"
        },
        "date": 1634190841377,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 87.05047088097885,
            "unit": "iter/sec",
            "range": "stddev: 0.001038959412192713",
            "extra": "mean: 11.487588635416643 msec\nrounds: 96"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 83.1376260489144,
            "unit": "iter/sec",
            "range": "stddev: 0.0008842268010816791",
            "extra": "mean: 12.028248189473748 msec\nrounds: 95"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.606945831145687,
            "unit": "iter/sec",
            "range": "stddev: 0.0015118056577224173",
            "extra": "mean: 51.002334000000005 msec\nrounds: 20"
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
          "id": "a3b03becb1ba35b9dfba52df72310cb647e89d9c",
          "message": ":bookmark: Bump version number to `0.12.2`",
          "timestamp": "2021-10-14T05:55:57Z",
          "tree_id": "ea139dbfc74a98f3757dc9bbc914ff629106daf0"
        },
        "date": 1634191126387,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 112.71816820217752,
            "unit": "iter/sec",
            "range": "stddev: 0.00012072008830192995",
            "extra": "mean: 8.871684271929835 msec\nrounds: 114"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 102.72489216279337,
            "unit": "iter/sec",
            "range": "stddev: 0.000665779568408825",
            "extra": "mean: 9.734738863636371 msec\nrounds: 110"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.670301702174985,
            "unit": "iter/sec",
            "range": "stddev: 0.00012175585868744805",
            "extra": "mean: 46.14610418181824 msec\nrounds: 22"
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
          "id": "c0de823f8580f5aab3807353204471dfe332a701",
          "message": "Merge pull request #315 from TeoZosa/migrate-to-github-md-footnote-syntax\n\n📝 Migrate Footnotes to GitHub Markdown Syntax",
          "timestamp": "2021-10-14T18:39:41Z",
          "tree_id": "2358815771dfe3fa4282d363aae3fbbdcb790d48"
        },
        "date": 1634237124080,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.82479787276236,
            "unit": "iter/sec",
            "range": "stddev: 0.000668962838019269",
            "extra": "mean: 13.545583988235338 msec\nrounds: 85"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 66.03091419909008,
            "unit": "iter/sec",
            "range": "stddev: 0.0013650017660069016",
            "extra": "mean: 15.144421550561848 msec\nrounds: 89"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 16.781083271988745,
            "unit": "iter/sec",
            "range": "stddev: 0.0017727134485049814",
            "extra": "mean: 59.59090863157899 msec\nrounds: 19"
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
          "id": "f7cc5406ca9c3896cccf9b4efe34187cee73156e",
          "message": "Merge pull request #316 from TeoZosa/write-local-logfiles-as-json-lines\n\n💥  Write Local Log Files as JSON Lines Format",
          "timestamp": "2021-10-14T22:20:07Z",
          "tree_id": "2f095cebc7ab2a12cd5dede5ab10d7431fa2acc0"
        },
        "date": 1634250128821,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 83.33670278103197,
            "unit": "iter/sec",
            "range": "stddev: 0.0005573902882423466",
            "extra": "mean: 11.999514819148894 msec\nrounds: 94"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.9821767159889,
            "unit": "iter/sec",
            "range": "stddev: 0.0018477104971596615",
            "extra": "mean: 13.892327873684277 msec\nrounds: 95"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.818046830222226,
            "unit": "iter/sec",
            "range": "stddev: 0.004151228578423579",
            "extra": "mean: 53.140477809523595 msec\nrounds: 21"
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
          "id": "f5a5d969b2598480158a4aa744d7a730400bf380",
          "message": ":bookmark: Bump version number to `0.13.0`",
          "timestamp": "2021-10-14T22:57:23Z",
          "tree_id": "dc42413898cb8d56b3a24cd66460fce7285b5826"
        },
        "date": 1634252388548,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.4596537965073,
            "unit": "iter/sec",
            "range": "stddev: 0.0006833916226560775",
            "extra": "mean: 13.993910505747182 msec\nrounds: 87"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.0330395969932,
            "unit": "iter/sec",
            "range": "stddev: 0.00174735037496981",
            "extra": "mean: 14.698740581395336 msec\nrounds: 86"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.291192417710583,
            "unit": "iter/sec",
            "range": "stddev: 0.003247209303515316",
            "extra": "mean: 54.67112133333322 msec\nrounds: 18"
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
          "id": "6085bf6ab82764dab475fc7c780cdb77904ba2f0",
          "message": "Merge pull request #318 from TeoZosa/set-default-global-tracked-log-level-to-warning\n\n🐛 Set Default Global Tracked Log Level to `WARNING`",
          "timestamp": "2021-10-23T23:39:09Z",
          "tree_id": "9f5567c16041af9b8b473013c02d5a686f4c525e"
        },
        "date": 1635032515783,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 111.18891370032475,
            "unit": "iter/sec",
            "range": "stddev: 0.0005036040748770963",
            "extra": "mean: 8.993702399999968 msec\nrounds: 115"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 106.11075364103571,
            "unit": "iter/sec",
            "range": "stddev: 0.00010061565253796206",
            "extra": "mean: 9.424115517857132 msec\nrounds: 112"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.65408137690791,
            "unit": "iter/sec",
            "range": "stddev: 0.00053048944654788",
            "extra": "mean: 46.180670636363644 msec\nrounds: 22"
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
          "id": "4ccc2dcccfafccf3b9f0aa60870d37d9967ad5a9",
          "message": ":bento: Update `.mutmut-cache`",
          "timestamp": "2021-10-23T23:45:42Z",
          "tree_id": "a3b506a2ff86512c3cd377d5e6abd60d690a51b0"
        },
        "date": 1635032907821,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.81981728674474,
            "unit": "iter/sec",
            "range": "stddev: 0.00102490552384915",
            "extra": "mean: 13.923733556818206 msec\nrounds: 88"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 65.97301013885246,
            "unit": "iter/sec",
            "range": "stddev: 0.0012124636568333611",
            "extra": "mean: 15.157713705882363 msec\nrounds: 85"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 16.826727129855954,
            "unit": "iter/sec",
            "range": "stddev: 0.002392042660108266",
            "extra": "mean: 59.42926347368424 msec\nrounds: 19"
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
          "id": "9c11e04c1001f2fb9be87a1eae31b9fe69b044b2",
          "message": ":bookmark: Bump version number to `0.14.0`",
          "timestamp": "2021-10-24T07:44:30Z",
          "tree_id": "ef20c06430186550b1abfa134eb85044e8f79857"
        },
        "date": 1635061611565,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.9634624327833,
            "unit": "iter/sec",
            "range": "stddev: 0.000427866816935577",
            "extra": "mean: 13.705489935064932 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.74982981662698,
            "unit": "iter/sec",
            "range": "stddev: 0.00040714206156288336",
            "extra": "mean: 14.545490551282098 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 16.328856107948212,
            "unit": "iter/sec",
            "range": "stddev: 0.0039715689578929654",
            "extra": "mean: 61.2412770000001 msec\nrounds: 18"
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
          "id": "ef1b8e434a4083dc584fa4bc5fcc485955f88425",
          "message": "Merge pull request #321 from TeoZosa/performance/elide-processing-of-logs-under-global-logging-level-thresholds\n\n⚡  Elide Log Processing for Logs Under the Global Log Level Threshold",
          "timestamp": "2021-10-25T15:49:45Z",
          "tree_id": "bcaad415753f7f47970e713bdc030718816b991b"
        },
        "date": 1635177151325,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 112.11844595470251,
            "unit": "iter/sec",
            "range": "stddev: 0.00012785563947265852",
            "extra": "mean: 8.91913896491229 msec\nrounds: 114"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 104.74140776618847,
            "unit": "iter/sec",
            "range": "stddev: 0.000067972276630303",
            "extra": "mean: 9.547322509090904 msec\nrounds: 110"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.697928512769977,
            "unit": "iter/sec",
            "range": "stddev: 0.00014277633187581256",
            "extra": "mean: 46.08734881818168 msec\nrounds: 22"
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
          "id": "d7de46eced36f14e38f711ea2bedc247662fecc0",
          "message": "Merge pull request #322 from TeoZosa/feat/improve-logfile-timestamp-precision\n\n✨  Add Seconds to Log File Timestamp Suffix",
          "timestamp": "2021-10-25T16:05:23Z",
          "tree_id": "8e9e2d75b4ec73d98d3f1525bb3e9262ee728c37"
        },
        "date": 1635178131747,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.74710270224149,
            "unit": "iter/sec",
            "range": "stddev: 0.0014343179375559492",
            "extra": "mean: 13.93784504651166 msec\nrounds: 86"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.99481048915358,
            "unit": "iter/sec",
            "range": "stddev: 0.0008960280039497849",
            "extra": "mean: 13.88989002409633 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.27302077275569,
            "unit": "iter/sec",
            "range": "stddev: 0.0018821281777181953",
            "extra": "mean: 57.89375310526318 msec\nrounds: 19"
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
          "id": "919230def3b78ffdcea00e1b726bfaba03b006b9",
          "message": "Merge pull request #323 from TeoZosa/feat/use-iso-8601-timestamps\n\n✨  Use ISO 8601 Timestamps For Logs and Filenames",
          "timestamp": "2021-10-25T17:23:55Z",
          "tree_id": "9502247c1c55e8c91c2c351bbfbc500657870fa6"
        },
        "date": 1635182778377,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 70.32531990532298,
            "unit": "iter/sec",
            "range": "stddev: 0.0013199068945107032",
            "extra": "mean: 14.219629592105262 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 64.53473613524172,
            "unit": "iter/sec",
            "range": "stddev: 0.0009483595358342794",
            "extra": "mean: 15.495530932432386 msec\nrounds: 74"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 15.835482157806018,
            "unit": "iter/sec",
            "range": "stddev: 0.002552844972791482",
            "extra": "mean: 63.14932441176445 msec\nrounds: 17"
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
          "id": "33f30e1c7acf7788b867eac6978bf5bd83bfb332",
          "message": "Merge pull request #324 from TeoZosa/refactor/unify-test-suite-across-python-and-c-extension-environments\n\n✅  Unify Test Suite Across Pure Python and C Extension Environments",
          "timestamp": "2021-10-25T22:51:14Z",
          "tree_id": "e5e9d6ea632907aecaa7aff36dbca8a59001abdd"
        },
        "date": 1635202413845,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.95556530235135,
            "unit": "iter/sec",
            "range": "stddev: 0.0020258106067349443",
            "extra": "mean: 13.521632833333314 msec\nrounds: 90"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.595814755678,
            "unit": "iter/sec",
            "range": "stddev: 0.0017184409290334703",
            "extra": "mean: 14.165145674157268 msec\nrounds: 89"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.947796085482942,
            "unit": "iter/sec",
            "range": "stddev: 0.0041659849345906065",
            "extra": "mean: 55.71714740000022 msec\nrounds: 20"
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
          "id": "31d6574baf19c95f88c29af43624f68071c141a0",
          "message": "Merge pull request #320 from TeoZosa/dependabot/github_actions/ahmadnassri/action-dependabot-auto-merge-2.6\n\n⬆️ Bump ahmadnassri/action-dependabot-auto-merge from 2.4 to 2.6",
          "timestamp": "2021-10-25T22:51:25Z",
          "tree_id": "a7ef645b4cefe7faebb60805b9442109b05dce8e"
        },
        "date": 1635202610473,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 100.41276770263242,
            "unit": "iter/sec",
            "range": "stddev: 0.00036025116423873607",
            "extra": "mean: 9.958892906542044 msec\nrounds: 107"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 93.46480723621082,
            "unit": "iter/sec",
            "range": "stddev: 0.00013088286536184652",
            "extra": "mean: 10.699214277227682 msec\nrounds: 101"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.563490804790966,
            "unit": "iter/sec",
            "range": "stddev: 0.0005042970786381989",
            "extra": "mean: 51.11562195000019 msec\nrounds: 20"
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
          "id": "444b87b2e1ba225b0a7cebd882c1760faf0e7273",
          "message": "Merge pull request #319 from TeoZosa/dependabot/pip/dot-github/workflows/pip-21.3.1\n\n⬆️ Bump pip from 21.3 to 21.3.1 in /.github/workflows",
          "timestamp": "2021-10-25T22:51:43Z",
          "tree_id": "e21841ff28fcdb31853a47e11c5d97644aa07332"
        },
        "date": 1635202832094,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 75.059697952709,
            "unit": "iter/sec",
            "range": "stddev: 0.0007742475992865061",
            "extra": "mean: 13.322728804878022 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.79297751516843,
            "unit": "iter/sec",
            "range": "stddev: 0.0009018536520669656",
            "extra": "mean: 14.536367462500166 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.09485016356702,
            "unit": "iter/sec",
            "range": "stddev: 0.0013811698615760898",
            "extra": "mean: 58.497149166666894 msec\nrounds: 18"
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
          "id": "384982ae333fa792d54e83602a1b54d166043a53",
          "message": ":bookmark: Bump version number to `0.14.1`",
          "timestamp": "2021-10-25T23:30:18Z",
          "tree_id": "bde55008b0149a864a2a23b4e379fe290bcaef6f"
        },
        "date": 1635204762517,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 75.81696967833628,
            "unit": "iter/sec",
            "range": "stddev: 0.0012683088563814082",
            "extra": "mean: 13.189659310344833 msec\nrounds: 87"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.10499402956626,
            "unit": "iter/sec",
            "range": "stddev: 0.001152695395605144",
            "extra": "mean: 14.264319023809595 msec\nrounds: 84"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.27801095759013,
            "unit": "iter/sec",
            "range": "stddev: 0.001800805480376284",
            "extra": "mean: 57.87703240000006 msec\nrounds: 20"
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
          "id": "e7283c51cf0e6d984ece818e3a810455184c6cb7",
          "message": "Merge pull request #325 from TeoZosa/feat/add-pretty-printed-dev-rendered-exceptions-via-rich\n\n✨ Add Pretty-Printed Exceptions for Local Development via `rich`",
          "timestamp": "2021-10-28T19:26:59Z",
          "tree_id": "c81f5ef4064ac8008263ac5794666c64c950c233"
        },
        "date": 1635449344779,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 114.56797270434814,
            "unit": "iter/sec",
            "range": "stddev: 0.0006904308882259775",
            "extra": "mean: 8.728442830882418 msec\nrounds: 136"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 109.0872448547948,
            "unit": "iter/sec",
            "range": "stddev: 0.000542779950506119",
            "extra": "mean: 9.166974574626872 msec\nrounds: 134"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.445669385388644,
            "unit": "iter/sec",
            "range": "stddev: 0.0009537886990861249",
            "extra": "mean: 48.91011300000004 msec\nrounds: 23"
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
          "id": "ea2643f471c7d0924fb4abe57336f64d7560c200",
          "message": ":bookmark: Bump version number to `0.15.0`",
          "timestamp": "2021-10-28T20:18:14Z",
          "tree_id": "6a012ebbe706a00bceca39c5743d6d52cd7bd26f"
        },
        "date": 1635452421724,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 118.99095928308131,
            "unit": "iter/sec",
            "range": "stddev: 0.00008963069852870335",
            "extra": "mean: 8.403999816666616 msec\nrounds: 120"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 107.47226430566108,
            "unit": "iter/sec",
            "range": "stddev: 0.0001405917777543818",
            "extra": "mean: 9.30472626086957 msec\nrounds: 115"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.7313011108226,
            "unit": "iter/sec",
            "range": "stddev: 0.00042766474075063966",
            "extra": "mean: 46.01657281818165 msec\nrounds: 22"
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
          "id": "193dde657143a4ec5dd7b94b9e7e09b7f13ab38d",
          "message": "Merge pull request #327 from TeoZosa/dependabot/github_actions/actions/checkout-2.4.0",
          "timestamp": "2021-11-03T13:12:11Z",
          "tree_id": "7d1625de75e4a969eeb8f2b878758ad9d21a9458"
        },
        "date": 1635945482138,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 84.25592793478371,
            "unit": "iter/sec",
            "range": "stddev: 0.0009372938007015982",
            "extra": "mean: 11.8686011122449 msec\nrounds: 98"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 76.29624254081381,
            "unit": "iter/sec",
            "range": "stddev: 0.0018256436135833073",
            "extra": "mean: 13.1068053510638 msec\nrounds: 94"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.155569425010032,
            "unit": "iter/sec",
            "range": "stddev: 0.002399413263345651",
            "extra": "mean: 49.61407831818188 msec\nrounds: 22"
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
          "id": "5078378966a6bc30190546533450686662cf2a93",
          "message": "Merge pull request #326 from TeoZosa/dependabot/pip/black-21.10b0\n\n⬆️ Bump black from 21.9b0 to 21.10b0",
          "timestamp": "2021-11-06T02:14:25Z",
          "tree_id": "5cbe2f3189c0ed1b6f892fd72369c7f67afab76c"
        },
        "date": 1636164986565,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 117.09269880835281,
            "unit": "iter/sec",
            "range": "stddev: 0.00017912374305336664",
            "extra": "mean: 8.540242134453775 msec\nrounds: 119"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 104.57320154276894,
            "unit": "iter/sec",
            "range": "stddev: 0.0005669416818906497",
            "extra": "mean: 9.562679398230092 msec\nrounds: 113"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.852067186683634,
            "unit": "iter/sec",
            "range": "stddev: 0.00012872585096687278",
            "extra": "mean: 45.76226090909088 msec\nrounds: 22"
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
          "id": "c601d9874a1c25e852be8afa585dee4141db1e60",
          "message": "Merge pull request #328 from TeoZosa/dependabot/pip/cruft-2.10.0",
          "timestamp": "2021-11-08T14:14:22Z",
          "tree_id": "79e255273ad2b6010e0faa848ef66ac73ae7a8e7"
        },
        "date": 1636381269366,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 99.65071129265223,
            "unit": "iter/sec",
            "range": "stddev: 0.00022163524572022761",
            "extra": "mean: 10.035051300970848 msec\nrounds: 103"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 89.2656495212688,
            "unit": "iter/sec",
            "range": "stddev: 0.0005950668125632281",
            "extra": "mean: 11.202517489795847 msec\nrounds: 98"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.87121411636903,
            "unit": "iter/sec",
            "range": "stddev: 0.00019598058204375654",
            "extra": "mean: 52.990761157894596 msec\nrounds: 19"
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
          "id": "59995fa521c2d9ed8a15c95afda674ce1bddecbc",
          "message": "Merge pull request #329 from TeoZosa/dependabot/pip/rich-10.13.0",
          "timestamp": "2021-11-08T14:35:42Z",
          "tree_id": "e680a15449820239d52246e9cbaedc2f17648590"
        },
        "date": 1636382277104,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 114.84812581022027,
            "unit": "iter/sec",
            "range": "stddev: 0.00017952436267410258",
            "extra": "mean: 8.70715123076924 msec\nrounds: 117"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 104.7355216969624,
            "unit": "iter/sec",
            "range": "stddev: 0.00014428135251370736",
            "extra": "mean: 9.547859062499926 msec\nrounds: 112"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.681348377325865,
            "unit": "iter/sec",
            "range": "stddev: 0.0003386661326019125",
            "extra": "mean: 46.12259268181817 msec\nrounds: 22"
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
          "id": "348e1a5a97b17602099fef1f40fa74c34d5e3e9d",
          "message": "Merge pull request #330 from TeoZosa/dependabot/pip/importlib-metadata-4.8.2",
          "timestamp": "2021-11-09T14:16:21Z",
          "tree_id": "79d22abb7efe5ce62c340706b8125b34a622f0b1"
        },
        "date": 1636467535930,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 118.41860943005716,
            "unit": "iter/sec",
            "range": "stddev: 0.00021489625471120608",
            "extra": "mean: 8.444618669421553 msec\nrounds: 121"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 108.71580758751287,
            "unit": "iter/sec",
            "range": "stddev: 0.00006515005031459091",
            "extra": "mean: 9.198294362069019 msec\nrounds: 116"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.777951634905325,
            "unit": "iter/sec",
            "range": "stddev: 0.00015390807829449168",
            "extra": "mean: 45.918000772727275 msec\nrounds: 22"
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
          "id": "6922d1aeea333bc3bd7cd406fce51fcca7d6fe9c",
          "message": "Merge pull request #331 from TeoZosa/dependabot/pip/python-dotenv-0.19.2",
          "timestamp": "2021-11-11T14:15:03Z",
          "tree_id": "d977c5517b84051cecda12fab365855e6ce80cd2"
        },
        "date": 1636640322901,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 83.23024712358746,
            "unit": "iter/sec",
            "range": "stddev: 0.0008429782427254507",
            "extra": "mean: 12.014862800000026 msec\nrounds: 95"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 75.05172102452333,
            "unit": "iter/sec",
            "range": "stddev: 0.0016547378734764536",
            "extra": "mean: 13.324144821052773 msec\nrounds: 95"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.28038019910792,
            "unit": "iter/sec",
            "range": "stddev: 0.00475914918516941",
            "extra": "mean: 54.70345742857141 msec\nrounds: 21"
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
          "id": "eebe5ca1a2f138f16dd0e519b94f1c20ac60c6f9",
          "message": "Merge pull request #332 from TeoZosa/dependabot/pip/sphinx-4.3.0",
          "timestamp": "2021-11-11T14:29:04Z",
          "tree_id": "b699f496b26153fffed0688ffec789ac1f968ca6"
        },
        "date": 1636641085965,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 116.46293664433398,
            "unit": "iter/sec",
            "range": "stddev: 0.00024172646123571913",
            "extra": "mean: 8.58642267500002 msec\nrounds: 120"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 104.98017983494981,
            "unit": "iter/sec",
            "range": "stddev: 0.00027869840192491286",
            "extra": "mean: 9.525607610619485 msec\nrounds: 113"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.755120727980668,
            "unit": "iter/sec",
            "range": "stddev: 0.00004162543269809938",
            "extra": "mean: 45.966189409090944 msec\nrounds: 22"
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
          "id": "99a7a5f6c217fd17e1087bb42b2cc448aa149908",
          "message": "Merge pull request #335 from TeoZosa/feat/add-direnv-compatibility\n\n📝 Document library configuration via `direnv`",
          "timestamp": "2021-11-12T19:19:52Z",
          "tree_id": "ecc24346b99da9112be21247329f826e45d02406"
        },
        "date": 1636744951063,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 80.9094718370428,
            "unit": "iter/sec",
            "range": "stddev: 0.0004997398244860389",
            "extra": "mean: 12.359492372092951 msec\nrounds: 86"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 75.22863761721266,
            "unit": "iter/sec",
            "range": "stddev: 0.000533557074072329",
            "extra": "mean: 13.292810180722926 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.322739252229976,
            "unit": "iter/sec",
            "range": "stddev: 0.001898847796761629",
            "extra": "mean: 54.57699235 msec\nrounds: 20"
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
          "id": "01dfa7a636e3f73dc2a940cecb39c8674ef637f9",
          "message": ":memo: Fix outdated documentation related to `.env` loading",
          "timestamp": "2021-11-12T19:27:43Z",
          "tree_id": "b34666d5d030cd5344a043cace9509631d45b425"
        },
        "date": 1636745379755,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 77.96011301536731,
            "unit": "iter/sec",
            "range": "stddev: 0.0007857582916840185",
            "extra": "mean: 12.827072220930237 msec\nrounds: 86"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.46233643470369,
            "unit": "iter/sec",
            "range": "stddev: 0.0007324180647127438",
            "extra": "mean: 13.800272654761924 msec\nrounds: 84"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.477891309192234,
            "unit": "iter/sec",
            "range": "stddev: 0.0021583817934108657",
            "extra": "mean: 57.215140105263444 msec\nrounds: 19"
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
          "id": "11f41937626a24d6491d723ded7a8d21e184e910",
          "message": "Merge pull request #336 from TeoZosa/dependabot/github_actions/actions/setup-python-2.3.0",
          "timestamp": "2021-11-17T14:10:25Z",
          "tree_id": "712f1cd3b91bb729cd9c31e2758af53e225aa748"
        },
        "date": 1637159495459,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 75.87889171313273,
            "unit": "iter/sec",
            "range": "stddev: 0.0003484924427622901",
            "extra": "mean: 13.178895703703658 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.8169972101927,
            "unit": "iter/sec",
            "range": "stddev: 0.0004497056128727433",
            "extra": "mean: 14.323159688311662 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 16.93511343464243,
            "unit": "iter/sec",
            "range": "stddev: 0.0007919243978572328",
            "extra": "mean: 59.04891064705844 msec\nrounds: 17"
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
          "id": "05ab448d6cef90a852d1e3b64f6cf136e1bc3e9d",
          "message": "Merge pull request #338 from TeoZosa/dependabot/pip/rich-10.14.0",
          "timestamp": "2021-11-17T14:47:54Z",
          "tree_id": "f2c21fbf78fd3f51d63bd6cf795e641f86877c7b"
        },
        "date": 1637160578922,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 117.83786200521479,
            "unit": "iter/sec",
            "range": "stddev: 0.0002210394055530763",
            "extra": "mean: 8.486236791666723 msec\nrounds: 120"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 107.18701659587612,
            "unit": "iter/sec",
            "range": "stddev: 0.0002454781403467789",
            "extra": "mean: 9.329488139130405 msec\nrounds: 115"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.690259451075118,
            "unit": "iter/sec",
            "range": "stddev: 0.00005731474351238855",
            "extra": "mean: 46.10364399999988 msec\nrounds: 22"
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
          "id": "2888467908462e7a04381b0650f5e792beec8ca1",
          "message": "Merge pull request #339 from TeoZosa/dependabot/pip/sentry-sdk-1.5.0",
          "timestamp": "2021-11-17T14:58:48Z",
          "tree_id": "4c0d611ed5d03e02d55450abb9b9903680608bfa"
        },
        "date": 1637161263441,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 118.34627343650487,
            "unit": "iter/sec",
            "range": "stddev: 0.00008456719122049309",
            "extra": "mean: 8.449780216666644 msec\nrounds: 120"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 108.25570010038136,
            "unit": "iter/sec",
            "range": "stddev: 0.00008112938327297728",
            "extra": "mean: 9.237388877192963 msec\nrounds: 114"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.742195160471677,
            "unit": "iter/sec",
            "range": "stddev: 0.00012676735106775214",
            "extra": "mean: 45.993515954545686 msec\nrounds: 22"
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
          "id": "17326e71b6de04298508a50cb6df64249330a9ab",
          "message": ":bug: Fix sample `.envrc` file syntax\n\nFixes #335",
          "timestamp": "2021-11-17T18:49:29Z",
          "tree_id": "3836b554db25a4d02c95ba5c25325cd53194d18e"
        },
        "date": 1637175151267,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.22217353912735,
            "unit": "iter/sec",
            "range": "stddev: 0.0007287340505355595",
            "extra": "mean: 13.8461631794872 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 66.32422694512275,
            "unit": "iter/sec",
            "range": "stddev: 0.001360008391581924",
            "extra": "mean: 15.077446749999948 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 15.59144324462491,
            "unit": "iter/sec",
            "range": "stddev: 0.0029790563466602356",
            "extra": "mean: 64.13774429411761 msec\nrounds: 17"
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
          "id": "dc712043261ac2681163ffb3c642ae1703269422",
          "message": "Merge pull request #340 from TeoZosa/dependabot/pip/black-21.11b1\n\n⬆️ Bump black from 21.10b0 to 21.11b1",
          "timestamp": "2021-11-21T21:19:19Z",
          "tree_id": "7cba80a27ba64c5e670eb72e6bf7e4d7f0e09c94"
        },
        "date": 1637529674573,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 132.78887499179456,
            "unit": "iter/sec",
            "range": "stddev: 0.00015571463612327937",
            "extra": "mean: 7.530751352941224 msec\nrounds: 136"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 120.71001066833225,
            "unit": "iter/sec",
            "range": "stddev: 0.0001165943139421336",
            "extra": "mean: 8.284317054263552 msec\nrounds: 129"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 24.42073653943637,
            "unit": "iter/sec",
            "range": "stddev: 0.000030793044941530804",
            "extra": "mean: 40.94880587999988 msec\nrounds: 25"
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
          "id": "66b5c02dd550bbc44f50e3af87a70790126d317a",
          "message": "Merge pull request #341 from TeoZosa/dependabot/pip/sphinxcontrib-confluencebuilder-1.7.0",
          "timestamp": "2021-11-22T14:18:12Z",
          "tree_id": "4c45e8a6e5e2c6deec46b5e523ed9613ca520df5"
        },
        "date": 1637590882379,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 78.9843412635584,
            "unit": "iter/sec",
            "range": "stddev: 0.0006170815019106172",
            "extra": "mean: 12.660737356321759 msec\nrounds: 87"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.9647159321467,
            "unit": "iter/sec",
            "range": "stddev: 0.0012176519655065247",
            "extra": "mean: 13.895698566265013 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.45771812847472,
            "unit": "iter/sec",
            "range": "stddev: 0.0016248494718249299",
            "extra": "mean: 54.17787794999969 msec\nrounds: 20"
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
          "id": "94f833151839d9a0e23af51d8878e2f6e2d9287c",
          "message": "Merge pull request #342 from TeoZosa/dependabot/pip/structlog-21.3.0",
          "timestamp": "2021-11-22T14:32:48Z",
          "tree_id": "0c1c9fb9f81fcf1b31d7fb5393cfe63822b1b896"
        },
        "date": 1637591704715,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 118.68985938844742,
            "unit": "iter/sec",
            "range": "stddev: 0.0001184853285794843",
            "extra": "mean: 8.425319611570238 msec\nrounds: 121"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 107.98771857742457,
            "unit": "iter/sec",
            "range": "stddev: 0.00011473852860651244",
            "extra": "mean: 9.26031231304349 msec\nrounds: 115"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.779855579519936,
            "unit": "iter/sec",
            "range": "stddev: 0.0007246866788327265",
            "extra": "mean: 45.913986727272956 msec\nrounds: 22"
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
          "id": "6e8819521b7086c43412d1c64ecf0db04870c1d9",
          "message": "Merge pull request #343 from TeoZosa/dependabot/pip/typeguard-2.13.2",
          "timestamp": "2021-11-23T14:19:39Z",
          "tree_id": "1998c03f445fed8ce2a9ba56fc8ee02a3c42cef1"
        },
        "date": 1637677314562,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 117.90156727290247,
            "unit": "iter/sec",
            "range": "stddev: 0.00017357378028048137",
            "extra": "mean: 8.481651458333344 msec\nrounds: 120"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 107.61710529482522,
            "unit": "iter/sec",
            "range": "stddev: 0.00006445522521192191",
            "extra": "mean: 9.292203105263093 msec\nrounds: 114"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.82566020568511,
            "unit": "iter/sec",
            "range": "stddev: 0.0006322074556344354",
            "extra": "mean: 45.817628909091226 msec\nrounds: 22"
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
          "id": "e7dd04b27da8d5d5415cf85b0f71d30aa3c93944",
          "message": "Merge pull request #344 from TeoZosa/dependabot/pip/pylint-2.12.1",
          "timestamp": "2021-11-26T14:14:23Z",
          "tree_id": "24dccfd376f51a4e59cefde610bbf2c61e524bbe"
        },
        "date": 1637936737476,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 116.89354731711505,
            "unit": "iter/sec",
            "range": "stddev: 0.0003315750818214177",
            "extra": "mean: 8.554792141666695 msec\nrounds: 120"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 107.2549764954303,
            "unit": "iter/sec",
            "range": "stddev: 0.00014221051527186647",
            "extra": "mean: 9.323576701754309 msec\nrounds: 114"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.977089411738557,
            "unit": "iter/sec",
            "range": "stddev: 0.00008147679276885792",
            "extra": "mean: 45.501930727272416 msec\nrounds: 22"
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
          "id": "db924d7b63e99e2534518507d5cb3554c9bdce28",
          "message": "Merge pull request #345 from TeoZosa/dependabot/pip/structlog-21.4.0",
          "timestamp": "2021-11-26T14:32:47Z",
          "tree_id": "89dfa2b08eeed007ff38bc2cd917fd94f1a89d2b"
        },
        "date": 1637937366790,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 117.95041190313663,
            "unit": "iter/sec",
            "range": "stddev: 0.00012009643700985262",
            "extra": "mean: 8.478139108333263 msec\nrounds: 120"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 107.68648584988433,
            "unit": "iter/sec",
            "range": "stddev: 0.0000795380393780301",
            "extra": "mean: 9.286216298245693 msec\nrounds: 114"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.78240626451864,
            "unit": "iter/sec",
            "range": "stddev: 0.00003274503481712832",
            "extra": "mean: 45.9086102727273 msec\nrounds: 22"
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
          "id": "8018973b8fdbcdd7e61898d50ca564d0ee5b1787",
          "message": "Merge pull request #347 from TeoZosa/dependabot/github_actions/actions/setup-python-2.3.1",
          "timestamp": "2021-11-29T14:09:04Z",
          "tree_id": "c5caa99dec53999850ac45a3e484dc73de0933f0"
        },
        "date": 1638198168556,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 99.77866669913838,
            "unit": "iter/sec",
            "range": "stddev: 0.0003713147474675374",
            "extra": "mean: 10.022182427184461 msec\nrounds: 103"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 91.79538910055822,
            "unit": "iter/sec",
            "range": "stddev: 0.00012747054111504998",
            "extra": "mean: 10.893793357142801 msec\nrounds: 98"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.088380672318277,
            "unit": "iter/sec",
            "range": "stddev: 0.000045708743239882844",
            "extra": "mean: 52.38789068421016 msec\nrounds: 19"
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
          "id": "15c91bbdabfd87ea54f57cdecd0b9232f6e112aa",
          "message": "Merge pull request #348 from TeoZosa/dependabot/pip/dot-github/workflows/poetry-1.1.12",
          "timestamp": "2021-11-29T14:11:55Z",
          "tree_id": "ded0970be8e232325cff9636f97d0f44c9e4d7b8"
        },
        "date": 1638198591341,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 125.74736324381858,
            "unit": "iter/sec",
            "range": "stddev: 0.00011286172659790283",
            "extra": "mean: 7.952453031250001 msec\nrounds: 128"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 120.88122034415461,
            "unit": "iter/sec",
            "range": "stddev: 0.00004509460819444024",
            "extra": "mean: 8.272583592000082 msec\nrounds: 125"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 24.696330926669663,
            "unit": "iter/sec",
            "range": "stddev: 0.0004261171014891805",
            "extra": "mean: 40.49184483999994 msec\nrounds: 25"
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
          "id": "8ae69d635bcbac40ff851a7588babca02cd8247c",
          "message": "Merge pull request #351 from TeoZosa/dependabot/pip/sphinx-4.3.1",
          "timestamp": "2021-11-29T15:35:36Z",
          "tree_id": "a9a5167da3a9b9bb00d4ee32f11f57b8bc67afd2"
        },
        "date": 1638200240218,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 115.5560658283161,
            "unit": "iter/sec",
            "range": "stddev: 0.00011629376876574446",
            "extra": "mean: 8.653807940170962 msec\nrounds: 117"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 105.53777412628764,
            "unit": "iter/sec",
            "range": "stddev: 0.00008395546319048941",
            "extra": "mean: 9.475280375000038 msec\nrounds: 112"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.71763677722974,
            "unit": "iter/sec",
            "range": "stddev: 0.0000459798737252126",
            "extra": "mean: 46.045525590909065 msec\nrounds: 22"
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
          "id": "97a34ba23d490583cf559674a8375571b8bc7191",
          "message": "Merge pull request #352 from TeoZosa/dependabot/pip/rich-10.15.0",
          "timestamp": "2021-11-29T15:53:50Z",
          "tree_id": "dabd8d728f20508e2db21e4e8d37d83d1c115d13"
        },
        "date": 1638201369195,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 85.98754152029831,
            "unit": "iter/sec",
            "range": "stddev: 0.0012162042748441054",
            "extra": "mean: 11.629591709677372 msec\nrounds: 93"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 77.76201171106972,
            "unit": "iter/sec",
            "range": "stddev: 0.0005401326862646572",
            "extra": "mean: 12.859749612903162 msec\nrounds: 93"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.464310398569772,
            "unit": "iter/sec",
            "range": "stddev: 0.0031039085950336004",
            "extra": "mean: 54.15853494736847 msec\nrounds: 19"
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
          "id": "fb8f127b075a04ce667c73fc60dd6ce5e08d8f62",
          "message": "Merge pull request #350 from TeoZosa/dependabot/pip/docs/poetry-1.1.12",
          "timestamp": "2021-11-29T16:25:18Z",
          "tree_id": "db380f56c1d84849a4caea106e3c86c1bfd92929"
        },
        "date": 1638203214630,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 118.95195724635894,
            "unit": "iter/sec",
            "range": "stddev: 0.00008910667378635363",
            "extra": "mean: 8.406755324999995 msec\nrounds: 120"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 106.420758390563,
            "unit": "iter/sec",
            "range": "stddev: 0.00006057238734610834",
            "extra": "mean: 9.396662973684244 msec\nrounds: 114"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.651866012040962,
            "unit": "iter/sec",
            "range": "stddev: 0.00003599134986067414",
            "extra": "mean: 46.185395727272805 msec\nrounds: 22"
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
          "id": "031bc2499e113999d96410ea572c6dd9090e08fb",
          "message": "Merge pull request #353 from TeoZosa/dependabot/pip/rich-10.15.1",
          "timestamp": "2021-11-30T14:15:39Z",
          "tree_id": "8fe728f390cb449cf5d14cdbdf03f6532a8be54b"
        },
        "date": 1638281851128,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 78.42203993290593,
            "unit": "iter/sec",
            "range": "stddev: 0.001092882733167515",
            "extra": "mean: 12.751517313953466 msec\nrounds: 86"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 73.75492376048518,
            "unit": "iter/sec",
            "range": "stddev: 0.0009626132166545002",
            "extra": "mean: 13.558416835294164 msec\nrounds: 85"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.112668658044683,
            "unit": "iter/sec",
            "range": "stddev: 0.003163408956186904",
            "extra": "mean: 55.20997589473671 msec\nrounds: 19"
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
          "id": "dba01235c6d46692aa2ac9afb59d9631d6abc002",
          "message": "Merge pull request #354 from TeoZosa/dependabot/pip/sphinxcontrib-confluencebuilder-1.7.1",
          "timestamp": "2021-12-01T14:14:32Z",
          "tree_id": "f5d58f6ff20f6a8f8b9511f81e352e145a37bfe5"
        },
        "date": 1638368565067,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 102.23138574641496,
            "unit": "iter/sec",
            "range": "stddev: 0.00019224780934353367",
            "extra": "mean: 9.781731830188637 msec\nrounds: 106"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 92.58839770612708,
            "unit": "iter/sec",
            "range": "stddev: 0.00022073217566346667",
            "extra": "mean: 10.800489313725585 msec\nrounds: 102"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.194242992386805,
            "unit": "iter/sec",
            "range": "stddev: 0.00036447307352104215",
            "extra": "mean: 52.09895489999994 msec\nrounds: 20"
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
          "id": "b42074f33b1f5e40accf7c3f7a1a8ed870a05d2e",
          "message": "Merge pull request #355 from TeoZosa/dependabot/pip/pre-commit-2.16.0",
          "timestamp": "2021-12-01T14:35:32Z",
          "tree_id": "c36e8a46b89ed75e2ae765f7c6c14b7aabff8313"
        },
        "date": 1638369560854,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 95.46437270201244,
            "unit": "iter/sec",
            "range": "stddev: 0.00011240590147713299",
            "extra": "mean: 10.475112041237134 msec\nrounds: 97"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 86.78937384465169,
            "unit": "iter/sec",
            "range": "stddev: 0.00014606951823119057",
            "extra": "mean: 11.522147881720477 msec\nrounds: 93"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.158537689247375,
            "unit": "iter/sec",
            "range": "stddev: 0.00007210761432030202",
            "extra": "mean: 55.07051377777808 msec\nrounds: 18"
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
          "id": "f3c69f53b61b3c5de8251340667a799ea909e33c",
          "message": "Merge pull request #356 from TeoZosa/dependabot/pip/rich-10.15.2",
          "timestamp": "2021-12-02T14:15:52Z",
          "tree_id": "567307a9f558f55ab040a852d58371bfd35fc3d9"
        },
        "date": 1638454683112,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 118.2647943075659,
            "unit": "iter/sec",
            "range": "stddev: 0.00016473363832069906",
            "extra": "mean: 8.455601735537165 msec\nrounds: 121"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 107.64509170779287,
            "unit": "iter/sec",
            "range": "stddev: 0.00010496129437956065",
            "extra": "mean: 9.289787245613965 msec\nrounds: 114"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.997223488454093,
            "unit": "iter/sec",
            "range": "stddev: 0.00004056620605630011",
            "extra": "mean: 45.460282772727204 msec\nrounds: 22"
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
          "id": "c578857c06c79f1b277bf9bcfd45457b6b3b2f54",
          "message": "Merge pull request #357 from TeoZosa/dependabot/pip/docs/orjson-3.6.5",
          "timestamp": "2021-12-06T14:11:10Z",
          "tree_id": "a9b89e231d577b1d3b8e2c03d72cc9308b35ff2f"
        },
        "date": 1638801096940,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 74.93446328666347,
            "unit": "iter/sec",
            "range": "stddev: 0.0012212413274070456",
            "extra": "mean: 13.34499449438208 msec\nrounds: 89"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.34007444057012,
            "unit": "iter/sec",
            "range": "stddev: 0.0005416955662805092",
            "extra": "mean: 14.216646882352869 msec\nrounds: 85"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 16.22554491054251,
            "unit": "iter/sec",
            "range": "stddev: 0.00268230918259243",
            "extra": "mean: 61.63121211111081 msec\nrounds: 18"
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
          "id": "fea3ef88803cb4de6c16fb7d6e26540dada7fecf",
          "message": "Merge pull request #359 from TeoZosa/dependabot/pip/pylint-2.12.2",
          "timestamp": "2021-12-06T14:55:17Z",
          "tree_id": "dab268000a4c811157ed9b28c25fe7bed988d349"
        },
        "date": 1638802618687,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 115.74712288578269,
            "unit": "iter/sec",
            "range": "stddev: 0.00022506333697561656",
            "extra": "mean: 8.639523601694906 msec\nrounds: 118"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 105.29151060271184,
            "unit": "iter/sec",
            "range": "stddev: 0.00009355487062693415",
            "extra": "mean: 9.497441857142892 msec\nrounds: 112"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.595201638073803,
            "unit": "iter/sec",
            "range": "stddev: 0.00004518668722881227",
            "extra": "mean: 46.3065831363636 msec\nrounds: 22"
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
          "id": "61c5baa03b3da2cb3d2152adc06fb25ed2e3c0dc",
          "message": "Merge pull request #358 from TeoZosa/dependabot/pip/orjson-3.6.5",
          "timestamp": "2021-12-06T16:06:31Z",
          "tree_id": "5fe437ca16acbcb8eb8b58fcc4c4fa669f1ffcf6"
        },
        "date": 1638807285154,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 59.29571415169754,
            "unit": "iter/sec",
            "range": "stddev: 0.003098774767820269",
            "extra": "mean: 16.86462528205121 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 59.61363477356469,
            "unit": "iter/sec",
            "range": "stddev: 0.0023149782995058213",
            "extra": "mean: 16.774685922077744 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 14.538076268059903,
            "unit": "iter/sec",
            "range": "stddev: 0.0051922891063948375",
            "extra": "mean: 68.78489158823551 msec\nrounds: 17"
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
          "id": "a39712f372c20926ed0ac4ceeec9d4acc324fec1",
          "message": "Merge pull request #361 from TeoZosa/dependabot/github_actions/actions/upload-artifact-2.3.0",
          "timestamp": "2021-12-08T14:08:26Z",
          "tree_id": "51a26f108519e75643ce7820550b5b6fabf16f8f"
        },
        "date": 1638972701984,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 118.27872274858017,
            "unit": "iter/sec",
            "range": "stddev: 0.00017617998025671266",
            "extra": "mean: 8.454606008264527 msec\nrounds: 121"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 106.18861441708135,
            "unit": "iter/sec",
            "range": "stddev: 0.00011097790133855573",
            "extra": "mean: 9.417205464912266 msec\nrounds: 114"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.66994897279599,
            "unit": "iter/sec",
            "range": "stddev: 0.0007502150249099421",
            "extra": "mean: 46.146855318181856 msec\nrounds: 22"
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
          "id": "98a70ab8348e5efb6c282cbd48f66cde8d08519d",
          "message": "Merge pull request #362 from TeoZosa/dependabot/github_actions/actions/download-artifact-2.1.0",
          "timestamp": "2021-12-08T14:12:45Z",
          "tree_id": "cbf9cffe39ecf6f89f00319b049c4fdaf081f175"
        },
        "date": 1638972955835,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 110.19091500312332,
            "unit": "iter/sec",
            "range": "stddev: 0.0005823263218332801",
            "extra": "mean: 9.075158328358153 msec\nrounds: 134"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 99.02535214354702,
            "unit": "iter/sec",
            "range": "stddev: 0.0005728909343570121",
            "extra": "mean: 10.098424073770534 msec\nrounds: 122"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.180543920058405,
            "unit": "iter/sec",
            "range": "stddev: 0.0018245532295407096",
            "extra": "mean: 49.55267826086949 msec\nrounds: 23"
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
          "id": "0065631d956ae0383117c29a432b7a2c0a08fb2a",
          "message": "Merge pull request #365 from TeoZosa/dependabot/pip/pytest-xdist-2.5.0",
          "timestamp": "2021-12-10T14:14:43Z",
          "tree_id": "4cbc8f6721116289fd168bb8dd043bf3709a08a8"
        },
        "date": 1639145953427,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 102.33993078377478,
            "unit": "iter/sec",
            "range": "stddev: 0.0001934714756958134",
            "extra": "mean: 9.771357009345785 msec\nrounds: 107"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 92.58941173447016,
            "unit": "iter/sec",
            "range": "stddev: 0.0002210834410947362",
            "extra": "mean: 10.800371028037425 msec\nrounds: 107"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.139701060837087,
            "unit": "iter/sec",
            "range": "stddev: 0.00038163471871176447",
            "extra": "mean: 52.247419999999956 msec\nrounds: 20"
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
          "id": "b6203d4e78b29a7f72da446f7c991226f2fb3386",
          "message": "Merge pull request #360 from TeoZosa/dependabot/pip/black-21.12b0\n\n⬆️ Bump black from 21.11b1 to 21.12b0",
          "timestamp": "2021-12-11T20:33:24Z",
          "tree_id": "322d10bfd17bcdf9910a49580f9a7ce2315e33a1"
        },
        "date": 1639254928661,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 118.81397727628676,
            "unit": "iter/sec",
            "range": "stddev: 0.0000796723801995626",
            "extra": "mean: 8.416518181818184 msec\nrounds: 121"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 106.75032365186685,
            "unit": "iter/sec",
            "range": "stddev: 0.00005666855872842015",
            "extra": "mean: 9.367653097345077 msec\nrounds: 113"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.90806063274864,
            "unit": "iter/sec",
            "range": "stddev: 0.000098224499901791",
            "extra": "mean: 45.64529999999993 msec\nrounds: 22"
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
          "id": "20b9327f3059954e011d4828b5c723ea71556145",
          "message": "Merge pull request #366 from TeoZosa/dependabot/pip/rich-10.16.0",
          "timestamp": "2021-12-13T14:16:20Z",
          "tree_id": "d276269b33de0c6a063ad733e0e5d88656c311a5"
        },
        "date": 1639405987631,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 119.4485897711921,
            "unit": "iter/sec",
            "range": "stddev: 0.00015098972838288604",
            "extra": "mean: 8.37180247933889 msec\nrounds: 121"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 106.97153989624529,
            "unit": "iter/sec",
            "range": "stddev: 0.0001297332978776008",
            "extra": "mean: 9.348280869565196 msec\nrounds: 115"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.67027591678826,
            "unit": "iter/sec",
            "range": "stddev: 0.00048170559538764557",
            "extra": "mean: 46.146159090908775 msec\nrounds: 22"
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
          "id": "39258623780e14fa587eb1f25665a381e56c8100",
          "message": "Merge pull request #367 from TeoZosa/dependabot/pip/typeguard-2.13.3",
          "timestamp": "2021-12-13T14:32:40Z",
          "tree_id": "2fdaeb668138fe17b833cc78bb6e4224e53e48dc"
        },
        "date": 1639406870896,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 101.68943211108956,
            "unit": "iter/sec",
            "range": "stddev: 0.00023391706859415053",
            "extra": "mean: 9.833863551401885 msec\nrounds: 107"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 91.79305805819111,
            "unit": "iter/sec",
            "range": "stddev: 0.00020849660002559238",
            "extra": "mean: 10.894070000000022 msec\nrounds: 100"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.294796415297025,
            "unit": "iter/sec",
            "range": "stddev: 0.0004634284586528919",
            "extra": "mean: 51.827444999999805 msec\nrounds: 20"
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
          "id": "5fb0cbbcee26ee463c924778575aef4c9529dec5",
          "message": "Merge pull request #369 from TeoZosa/dependabot/pip/sentry-sdk-1.5.1",
          "timestamp": "2021-12-13T15:55:29Z",
          "tree_id": "11192052311043f14a08a2749f5c353a89a605cf"
        },
        "date": 1639411055811,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 119.39169831040027,
            "unit": "iter/sec",
            "range": "stddev: 0.00013576547216108425",
            "extra": "mean: 8.37579173553719 msec\nrounds: 121"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 108.07658192830542,
            "unit": "iter/sec",
            "range": "stddev: 0.000047278656118041215",
            "extra": "mean: 9.252698245614098 msec\nrounds: 114"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.9284431044615,
            "unit": "iter/sec",
            "range": "stddev: 0.00006188144719122318",
            "extra": "mean: 45.602872727272775 msec\nrounds: 22"
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
          "id": "5ae6c73a2f706e1d005d1e5a0d35d7ed493f50ce",
          "message": "Merge pull request #368 from TeoZosa/dependabot/pip/myst-parser-0.16.0",
          "timestamp": "2021-12-13T16:14:12Z",
          "tree_id": "6791d6ed5bc1bce50afaa1bdb3f5a417b5a49e48"
        },
        "date": 1639412200642,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 99.5273053591249,
            "unit": "iter/sec",
            "range": "stddev: 0.000762320840966548",
            "extra": "mean: 10.047493965517251 msec\nrounds: 116"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 88.24414684596144,
            "unit": "iter/sec",
            "range": "stddev: 0.0011067662422717516",
            "extra": "mean: 11.332196363636394 msec\nrounds: 110"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.36261828283698,
            "unit": "iter/sec",
            "range": "stddev: 0.004828517074194686",
            "extra": "mean: 57.59500000000024 msec\nrounds: 20"
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
          "id": "0262b660b5ffd3b17a2c7b0ebafb54056dcc8a75",
          "message": ":construction_worker: Run CI workflow on PRs\n\ni.e., from forks to upstream (this project).",
          "timestamp": "2021-12-13T18:05:54Z",
          "tree_id": "567a923f6434029c87afcc7ff6a1e76bf521ef36"
        },
        "date": 1639418886686,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 116.79213806361815,
            "unit": "iter/sec",
            "range": "stddev: 0.00015950017723799647",
            "extra": "mean: 8.562220168067197 msec\nrounds: 119"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 104.47755012757553,
            "unit": "iter/sec",
            "range": "stddev: 0.00014282594715592234",
            "extra": "mean: 9.571434234234237 msec\nrounds: 111"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.598000731975887,
            "unit": "iter/sec",
            "range": "stddev: 0.00035181219101811556",
            "extra": "mean: 46.3005818181818 msec\nrounds: 22"
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
          "id": "c7ecf7083608f7fef6dc8f2c28dfc038dda1f921",
          "message": "Merge pull request #370 from TeoZosa/dependabot/pip/rich-10.16.1",
          "timestamp": "2021-12-15T14:17:06Z",
          "tree_id": "3db67324511a26828c7f12961e3afe17d5eb4e21"
        },
        "date": 1639577956158,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 134.87938163357475,
            "unit": "iter/sec",
            "range": "stddev: 0.0000735266559899959",
            "extra": "mean: 7.414031617647006 msec\nrounds: 136"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 120.57935294502023,
            "unit": "iter/sec",
            "range": "stddev: 0.00012188026639380878",
            "extra": "mean: 8.293293798449584 msec\nrounds: 129"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 24.773159609404562,
            "unit": "iter/sec",
            "range": "stddev: 0.00004454023200042364",
            "extra": "mean: 40.366268000000005 msec\nrounds: 25"
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
          "id": "0e037d562c48bf42fbdde76c047a9190d2e0f79b",
          "message": "Merge pull request #371 from TeoZosa/dependabot/github_actions/actions/upload-artifact-2.3.1",
          "timestamp": "2021-12-16T14:11:19Z",
          "tree_id": "b06afb97b0a06b0e11b2733c9dc0d45e5ce3cb0a"
        },
        "date": 1639665481673,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 133.32087698080764,
            "unit": "iter/sec",
            "range": "stddev: 0.00009894353458660376",
            "extra": "mean: 7.500700735294114 msec\nrounds: 136"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 104.94669927987069,
            "unit": "iter/sec",
            "range": "stddev: 0.0003113687692688291",
            "extra": "mean: 9.52864651162788 msec\nrounds: 129"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 24.52566866292533,
            "unit": "iter/sec",
            "range": "stddev: 0.00007085055821965877",
            "extra": "mean: 40.77360799999994 msec\nrounds: 25"
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
          "id": "6c490690942c126caa9aebef65c4d1fc24ee944e",
          "message": "Merge pull request #373 from TeoZosa/dependabot/pip/structlog-21.5.0",
          "timestamp": "2021-12-16T15:18:35Z",
          "tree_id": "4b303928d27aaf57fc909828e19c396401751144"
        },
        "date": 1639668014160,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 117.32505904872428,
            "unit": "iter/sec",
            "range": "stddev: 0.00028667178116243916",
            "extra": "mean: 8.523328333333351 msec\nrounds: 120"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 106.7983621628017,
            "unit": "iter/sec",
            "range": "stddev: 0.0001872550660341539",
            "extra": "mean: 9.363439473684215 msec\nrounds: 114"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.72287905954931,
            "unit": "iter/sec",
            "range": "stddev: 0.00005908595268942837",
            "extra": "mean: 46.03441363636387 msec\nrounds: 22"
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
          "id": "164ba3d0575509667a09dfe646f2ea89088a6e50",
          "message": "Merge pull request #374 from TeoZosa/dependabot/pip/myst-parser-0.16.1",
          "timestamp": "2021-12-16T15:32:28Z",
          "tree_id": "7c9f9a5f0e5e07d19121616ac8b8f9dc6c45fa63"
        },
        "date": 1639668872491,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 133.4015512246257,
            "unit": "iter/sec",
            "range": "stddev: 0.00014506682829306102",
            "extra": "mean: 7.496164705882383 msec\nrounds: 136"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 118.91687194422677,
            "unit": "iter/sec",
            "range": "stddev: 0.00019125112654832114",
            "extra": "mean: 8.409235658914827 msec\nrounds: 129"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 24.890880867365542,
            "unit": "iter/sec",
            "range": "stddev: 0.00004380747729176721",
            "extra": "mean: 40.17535600000002 msec\nrounds: 25"
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
          "id": "b3e29692f321a3d9b2f17ee3e08be70efe29d9fd",
          "message": "Merge pull request #375 from TeoZosa/dependabot/pip/importlib-metadata-4.9.0",
          "timestamp": "2021-12-17T14:21:43Z",
          "tree_id": "ef1c3b237ce911788e242f32321e62cacc56918b"
        },
        "date": 1639751109090,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 119.37050899289065,
            "unit": "iter/sec",
            "range": "stddev: 0.0001955171561980447",
            "extra": "mean: 8.377278512396702 msec\nrounds: 121"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 107.78034440787248,
            "unit": "iter/sec",
            "range": "stddev: 0.0001182550173068069",
            "extra": "mean: 9.278129565217442 msec\nrounds: 115"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.58999095870057,
            "unit": "iter/sec",
            "range": "stddev: 0.00007777538268310708",
            "extra": "mean: 46.31775909090916 msec\nrounds: 22"
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
          "id": "2c37246f9ce8e035080521cf7ef33c651eec098b",
          "message": "Merge pull request #376 from TeoZosa/dependabot/pip/sphinx-4.3.2",
          "timestamp": "2021-12-20T14:18:08Z",
          "tree_id": "e65018616978085691a75d383d5d42b1764679ef"
        },
        "date": 1640010763223,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 117.22840911296237,
            "unit": "iter/sec",
            "range": "stddev: 0.00011400911775720031",
            "extra": "mean: 8.530355462184861 msec\nrounds: 119"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 105.96732270531591,
            "unit": "iter/sec",
            "range": "stddev: 0.0001066651216908269",
            "extra": "mean: 9.43687142857139 msec\nrounds: 112"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.80873737323667,
            "unit": "iter/sec",
            "range": "stddev: 0.00005004151263692135",
            "extra": "mean: 45.8531818181819 msec\nrounds: 22"
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
          "id": "cc3320753e50ec32a162d8aaf393b1d998c7aaf6",
          "message": "Merge pull request #377 from TeoZosa/dependabot/pip/importlib-metadata-4.10.0",
          "timestamp": "2021-12-20T14:35:16Z",
          "tree_id": "7fc66f7b3a652aec942cc99240a827588f3262b5"
        },
        "date": 1640011366259,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 117.90802859348248,
            "unit": "iter/sec",
            "range": "stddev: 0.00013037683258997616",
            "extra": "mean: 8.481186666666703 msec\nrounds: 120"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 106.29328012950621,
            "unit": "iter/sec",
            "range": "stddev: 0.00012210609306596563",
            "extra": "mean: 9.407932456140355 msec\nrounds: 114"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.629208318868834,
            "unit": "iter/sec",
            "range": "stddev: 0.00016937854176748954",
            "extra": "mean: 46.233777272727195 msec\nrounds: 22"
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
          "id": "39a53638dbc917c574694d5d4d952354409ea74e",
          "message": "Merge pull request #379 from TeoZosa/dependabot/pip/mypy-0.930\n\n⬆️ Bump mypy from 0.910 to 0.930",
          "timestamp": "2021-12-28T20:43:24Z",
          "tree_id": "8dee5d8e66b1a635335a594c30b80684cd27f464"
        },
        "date": 1640724326304,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 117.27143382211793,
            "unit": "iter/sec",
            "range": "stddev: 0.00015846990462405416",
            "extra": "mean: 8.527225833333295 msec\nrounds: 120"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 106.46759550378933,
            "unit": "iter/sec",
            "range": "stddev: 0.0001519466863041452",
            "extra": "mean: 9.392529203539763 msec\nrounds: 113"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.480630573674382,
            "unit": "iter/sec",
            "range": "stddev: 0.0009656662557587165",
            "extra": "mean: 46.55356818181824 msec\nrounds: 22"
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
          "id": "2a107adba7ec83f03522e2ab99913f5528731dfa",
          "message": "Merge pull request #381 from TeoZosa/dependabot/pip/dot-github/workflows/tox-3.24.5",
          "timestamp": "2021-12-29T14:17:48Z",
          "tree_id": "bd4877d611fe03354962bc312b4bcd25959deccd"
        },
        "date": 1640787668083,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 133.53472202243898,
            "unit": "iter/sec",
            "range": "stddev: 0.00014543337569596144",
            "extra": "mean: 7.4886889705882 msec\nrounds: 136"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 120.75342530877788,
            "unit": "iter/sec",
            "range": "stddev: 0.00007434324730739703",
            "extra": "mean: 8.281338582677103 msec\nrounds: 127"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 24.560656520102654,
            "unit": "iter/sec",
            "range": "stddev: 0.0003262457423477269",
            "extra": "mean: 40.71552400000016 msec\nrounds: 25"
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
          "id": "204f35e784bcf406353c67cad1c91d8506064e68",
          "message": "Merge pull request #382 from TeoZosa/dependabot/pip/tox-3.24.5",
          "timestamp": "2021-12-29T15:45:19Z",
          "tree_id": "7363b330650e605f29a0684ada141b65e4eabf4b"
        },
        "date": 1640792853366,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 119.07006280945865,
            "unit": "iter/sec",
            "range": "stddev: 0.00007661407634815021",
            "extra": "mean: 8.39841666666663 msec\nrounds: 120"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 107.60653613427519,
            "unit": "iter/sec",
            "range": "stddev: 0.00011895336304766369",
            "extra": "mean: 9.293115789473655 msec\nrounds: 114"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.781794340654272,
            "unit": "iter/sec",
            "range": "stddev: 0.00006123592160856163",
            "extra": "mean: 45.90989999999984 msec\nrounds: 22"
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
          "id": "66c65ea53a8d10e44701c909b78ef1ba0f8d47ce",
          "message": "Merge pull request #383 from TeoZosa/dependabot/pip/pygments-2.11.0",
          "timestamp": "2021-12-30T14:24:44Z",
          "tree_id": "8849d828519b3787b9b4e621a7b7e0385bb10922"
        },
        "date": 1640874524513,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 135.34144706885894,
            "unit": "iter/sec",
            "range": "stddev: 0.00019637961773506807",
            "extra": "mean: 7.388719580419593 msec\nrounds: 143"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 122.85291940089789,
            "unit": "iter/sec",
            "range": "stddev: 0.00015197556164625782",
            "extra": "mean: 8.139814705882287 msec\nrounds: 136"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 24.726200128918645,
            "unit": "iter/sec",
            "range": "stddev: 0.00008132735219695952",
            "extra": "mean: 40.4429307692307 msec\nrounds: 26"
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
          "id": "28a4d4846f0f647c05b38bf6f5fd2af0924efa56",
          "message": "Merge pull request #384 from TeoZosa/dependabot/pip/tox-wheel-0.7.0",
          "timestamp": "2021-12-30T14:52:35Z",
          "tree_id": "686324b5e4eea7ddca25c3df554662f8a2c18214"
        },
        "date": 1640876085801,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 117.6276383434471,
            "unit": "iter/sec",
            "range": "stddev: 0.00009356566074138053",
            "extra": "mean: 8.501403361344531 msec\nrounds: 119"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 106.32525157918798,
            "unit": "iter/sec",
            "range": "stddev: 0.0000953368435462285",
            "extra": "mean: 9.405103539823077 msec\nrounds: 113"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.932275327017766,
            "unit": "iter/sec",
            "range": "stddev: 0.0001492639128947315",
            "extra": "mean: 45.59490454545441 msec\nrounds: 22"
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
          "id": "deca3932e707eacf37b93abea49a638af757122d",
          "message": "Merge pull request #385 from TeoZosa/dependabot/pip/pygments-2.11.1",
          "timestamp": "2022-01-03T14:17:10Z",
          "tree_id": "3f26ff49051fee3ea98e5b22fb7017b651e4e202"
        },
        "date": 1641219682541,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 120.47538401528628,
            "unit": "iter/sec",
            "range": "stddev: 0.00017754671053222057",
            "extra": "mean: 8.30045081967215 msec\nrounds: 122"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 108.59064358464082,
            "unit": "iter/sec",
            "range": "stddev: 0.00012448476827175924",
            "extra": "mean: 9.208896521739016 msec\nrounds: 115"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.82928191783342,
            "unit": "iter/sec",
            "range": "stddev: 0.000054950446783884155",
            "extra": "mean: 45.81002727272721 msec\nrounds: 22"
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
          "id": "8bf483f82b536caff4b5dafef92d0006067671ec",
          "message": "Merge pull request #386 from TeoZosa/dependabot/pip/rich-10.16.2",
          "timestamp": "2022-01-03T14:41:31Z",
          "tree_id": "422c7cdfc55674aea165b8cc35a0946359e2e4f4"
        },
        "date": 1641221047144,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 74.69641277013585,
            "unit": "iter/sec",
            "range": "stddev: 0.0009321530301980424",
            "extra": "mean: 13.38752375000004 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.17436530435404,
            "unit": "iter/sec",
            "range": "stddev: 0.0005170642728628516",
            "extra": "mean: 14.250217948718007 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 16.902694007713322,
            "unit": "iter/sec",
            "range": "stddev: 0.00217405971750894",
            "extra": "mean: 59.16216666666645 msec\nrounds: 18"
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
          "id": "49e12e88993ed6df75664562c09fcf5e31c0804a",
          "message": ":art: Fix test actual to expected comparison order\n\nPer the standard comparison order convention of `actual == expected`.",
          "timestamp": "2022-01-06T04:59:57Z",
          "tree_id": "ba16ee9877581f21ddbb345ce94b87e3a10cca96"
        },
        "date": 1641445349609,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 117.73200278361836,
            "unit": "iter/sec",
            "range": "stddev: 0.00012145616082178046",
            "extra": "mean: 8.493867226890865 msec\nrounds: 119"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 106.34482670873129,
            "unit": "iter/sec",
            "range": "stddev: 0.00016754992060183803",
            "extra": "mean: 9.403372321428556 msec\nrounds: 112"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.843469696157264,
            "unit": "iter/sec",
            "range": "stddev: 0.00018832635094123763",
            "extra": "mean: 45.78027272727288 msec\nrounds: 22"
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
          "id": "3152ed1406363d1ba22674da21cda87298ce7788",
          "message": "Merge pull request #388 from TeoZosa/dependabot/pip/pygments-2.11.2",
          "timestamp": "2022-01-06T14:49:17Z",
          "tree_id": "efe3b44513643664ca932877bb5cf6eb80db9b40"
        },
        "date": 1641480669893,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 102.59006671678993,
            "unit": "iter/sec",
            "range": "stddev: 0.00012664939449864713",
            "extra": "mean: 9.747532407407428 msec\nrounds: 108"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 93.42690052538578,
            "unit": "iter/sec",
            "range": "stddev: 0.00015201569883324786",
            "extra": "mean: 10.703555339805819 msec\nrounds: 103"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.048685774022534,
            "unit": "iter/sec",
            "range": "stddev: 0.00040498863323862756",
            "extra": "mean: 52.49705999999961 msec\nrounds: 20"
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
          "id": "ba4c9a5e4a597c86aeb40fa9c52adeffb8ba9ff7",
          "message": ":rotating_light: Explicitly check for `None`\n\nSee first bullet of https://google.github.io/styleguide/pyguide.html#2144-decision",
          "timestamp": "2022-01-06T18:43:06Z",
          "tree_id": "a67b452ba8718aae971ed68d3e4c91ab4ad64ea0"
        },
        "date": 1641494700659,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 97.05325968623877,
            "unit": "iter/sec",
            "range": "stddev: 0.0007551738224122976",
            "extra": "mean: 10.303620952380957 msec\nrounds: 105"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 86.17802796294157,
            "unit": "iter/sec",
            "range": "stddev: 0.0010514766225443175",
            "extra": "mean: 11.603885858585924 msec\nrounds: 99"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.58441530495067,
            "unit": "iter/sec",
            "range": "stddev: 0.00145438142018526",
            "extra": "mean: 53.80852631578953 msec\nrounds: 19"
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
          "id": "350e4853afb9bfe41d1ffdd51074eca5616d3508",
          "message": "Merge pull request #387 from TeoZosa/feat/add-line-numbers-and-function-names-to-logs\n\n✨ 💥 Add line numbers and function names to logs",
          "timestamp": "2022-01-06T19:39:25Z",
          "tree_id": "35a9f905fd02a774ab3824024228975f2262906f"
        },
        "date": 1641498065689,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 91.69820987535077,
            "unit": "iter/sec",
            "range": "stddev: 0.00013948202728963712",
            "extra": "mean: 10.905338297872358 msec\nrounds: 94"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 83.95104163905637,
            "unit": "iter/sec",
            "range": "stddev: 0.00009518742386144473",
            "extra": "mean: 11.911704494382022 msec\nrounds: 89"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.828194607030213,
            "unit": "iter/sec",
            "range": "stddev: 0.0007336886368137749",
            "extra": "mean: 53.11183684210553 msec\nrounds: 19"
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
          "id": "d52b3618b95a3b1bd92233e11c9ef0ba022db6ab",
          "message": "Merge pull request #389 from TeoZosa/refactor/leverage-structlog-stack-introspection-for-logger-namespacing-and-remove-now-obsolete-typeguard-compatiblity-in-test-suite\n\n♻️ ✅ Simplify logger name inference and test suite",
          "timestamp": "2022-01-06T22:03:19Z",
          "tree_id": "938ae6323e0ded6254f9c1cb603dbc5983c884e2"
        },
        "date": 1641506697735,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 89.84479635611734,
            "unit": "iter/sec",
            "range": "stddev: 0.0006106912532073811",
            "extra": "mean: 11.130305154639176 msec\nrounds: 97"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 78.49041098858956,
            "unit": "iter/sec",
            "range": "stddev: 0.0013818274393356984",
            "extra": "mean: 12.740409782608651 msec\nrounds: 92"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.6385591962111,
            "unit": "iter/sec",
            "range": "stddev: 0.0014718299532904368",
            "extra": "mean: 53.65221578947383 msec\nrounds: 19"
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
          "id": "5d4b6f1b73130c34941f4e3213a7dc8965039296",
          "message": "Merge pull request #392 from TeoZosa/refactor/clean-and-reorganize\n\n♻️  📝  Clean up source code and update features documentation",
          "timestamp": "2022-01-06T23:34:57Z",
          "tree_id": "dbd83ba095d35fb9bc078399665b9c03802e7426"
        },
        "date": 1641512200684,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 66.7673168931148,
            "unit": "iter/sec",
            "range": "stddev: 0.000551949249938357",
            "extra": "mean: 14.977387837837803 msec\nrounds: 74"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 63.33907548144369,
            "unit": "iter/sec",
            "range": "stddev: 0.0009983539952859465",
            "extra": "mean: 15.788042253521175 msec\nrounds: 71"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 16.391285043000625,
            "unit": "iter/sec",
            "range": "stddev: 0.0015449818230181883",
            "extra": "mean: 61.008029411764646 msec\nrounds: 17"
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
          "id": "99728b92f1dbd308a3fbbeaf428cc72fa9935911",
          "message": "Merge pull request #393 from TeoZosa/feat/remove-automatic-sentry-initialization",
          "timestamp": "2022-01-07T01:41:16Z",
          "tree_id": "be055794c6fd25fcd54a6a8643510de266c6ea4d"
        },
        "date": 1641519775148,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 91.30479983004636,
            "unit": "iter/sec",
            "range": "stddev: 0.0005080181636302259",
            "extra": "mean: 10.952326732673285 msec\nrounds: 101"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 80.68990969545725,
            "unit": "iter/sec",
            "range": "stddev: 0.0003161997889160231",
            "extra": "mean: 12.39312330097079 msec\nrounds: 103"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.272620407056852,
            "unit": "iter/sec",
            "range": "stddev: 0.0020381057102825902",
            "extra": "mean: 49.327614285714255 msec\nrounds: 21"
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
          "id": "0cfeab5d73dcc521fee687b7a4407e01fedcc8ab",
          "message": ":bookmark: Bump version number to `0.16.0`",
          "timestamp": "2022-01-07T02:11:32Z",
          "tree_id": "8e6b8cde9d7c2ca7deb812c178deb9824e924979"
        },
        "date": 1641521594463,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 102.53230137201061,
            "unit": "iter/sec",
            "range": "stddev: 0.00010834828997640339",
            "extra": "mean: 9.753024038461515 msec\nrounds: 104"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 94.53108375822715,
            "unit": "iter/sec",
            "range": "stddev: 0.00010324767094005497",
            "extra": "mean: 10.578530999999973 msec\nrounds: 100"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 22.19769489046398,
            "unit": "iter/sec",
            "range": "stddev: 0.00011015372346015916",
            "extra": "mean: 45.049722727272695 msec\nrounds: 22"
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
          "id": "0766d7ba31d69b61ed71365c5de6f160fe7d8c6f",
          "message": "Merge pull request #394 from TeoZosa/template-update/20220106\n\n🍪 Fetch Upstream Project Template Updates (2022-01-06)",
          "timestamp": "2022-01-07T02:54:38Z",
          "tree_id": "1c9662cc01e7ce4b31ae7bce52abc23357828489"
        },
        "date": 1641524184304,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 102.846596673272,
            "unit": "iter/sec",
            "range": "stddev: 0.0005565361737162906",
            "extra": "mean: 9.723219166666718 msec\nrounds: 120"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 94.62797813046114,
            "unit": "iter/sec",
            "range": "stddev: 0.0007303937298675712",
            "extra": "mean: 10.567699107142772 msec\nrounds: 112"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 22.457976914322675,
            "unit": "iter/sec",
            "range": "stddev: 0.002207955702122704",
            "extra": "mean: 44.52760833333325 msec\nrounds: 24"
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
          "id": "9b4dea542d679e78e40125800267ed30935234cc",
          "message": "Merge pull request #395 from TeoZosa/dependabot/pip/gitpython-3.1.25",
          "timestamp": "2022-01-07T14:30:38Z",
          "tree_id": "038a86112187c5d257a91937887cd45a8a3c505d"
        },
        "date": 1641565997989,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 117.02534273053432,
            "unit": "iter/sec",
            "range": "stddev: 0.00008140286477953688",
            "extra": "mean: 8.545157627118655 msec\nrounds: 118"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 106.9655796123982,
            "unit": "iter/sec",
            "range": "stddev: 0.0001054435072023439",
            "extra": "mean: 9.348801769911521 msec\nrounds: 113"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 25.097448372541024,
            "unit": "iter/sec",
            "range": "stddev: 0.00004723612071301223",
            "extra": "mean: 39.844687999999806 msec\nrounds: 25"
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
          "id": "1bede4717bb033962e0794a784e34c85d81613f1",
          "message": "Merge pull request #396 from TeoZosa/dependabot/pip/types-emoji-1.2.7",
          "timestamp": "2022-01-07T15:01:50Z",
          "tree_id": "9b87e8253c7e8a722f46a9ab04bc9d105a68cc25"
        },
        "date": 1641567844501,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 116.95962290658181,
            "unit": "iter/sec",
            "range": "stddev: 0.00009862602950930632",
            "extra": "mean: 8.549959166666618 msec\nrounds: 120"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 106.15463135429722,
            "unit": "iter/sec",
            "range": "stddev: 0.0001471715356879866",
            "extra": "mean: 9.420220175438622 msec\nrounds: 114"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 22.182265016964898,
            "unit": "iter/sec",
            "range": "stddev: 0.00003271785094671473",
            "extra": "mean: 45.081059090909086 msec\nrounds: 22"
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
          "id": "cd679fec8ac6339102e7a5e03ebedbfe3b4df298",
          "message": ":recycle: Explicitly specify UTC format\n\nSame as the default value, but now it is explicit to readers.",
          "timestamp": "2022-01-08T22:06:22Z",
          "tree_id": "80a163aca105b9357b1d0a1ac28ed2a5867b9cac"
        },
        "date": 1641679805837,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 70.88219720109818,
            "unit": "iter/sec",
            "range": "stddev: 0.0006880766848817387",
            "extra": "mean: 14.10791481481484 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 65.97334035146989,
            "unit": "iter/sec",
            "range": "stddev: 0.00120105671962422",
            "extra": "mean: 15.15763783783793 msec\nrounds: 74"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.29097310051965,
            "unit": "iter/sec",
            "range": "stddev: 0.003766353742571831",
            "extra": "mean: 57.833644999999834 msec\nrounds: 20"
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
          "id": "e303fa29243beb9caf7feb64f854497b48036c41",
          "message": "Merge pull request #397 from TeoZosa/warn-on-cloud-logging-field-overwrites\n\n🔊  Warn on cloud logging mode field overwrites",
          "timestamp": "2022-01-09T03:54:43Z",
          "tree_id": "c53a2d4fae8755c4643bc36f52945f5cc3604a8e"
        },
        "date": 1641700574139,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 76.363451670637,
            "unit": "iter/sec",
            "range": "stddev: 0.001568129989214892",
            "extra": "mean: 13.095269767441854 msec\nrounds: 86"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.3851707378675,
            "unit": "iter/sec",
            "range": "stddev: 0.0010589128977378601",
            "extra": "mean: 13.81498433734938 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.38816281801464,
            "unit": "iter/sec",
            "range": "stddev: 0.003414917015429735",
            "extra": "mean: 49.04806818181855 msec\nrounds: 22"
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
          "id": "5693da0e3056522b719d7fb731499ddee8f03eea",
          "message": "Merge pull request #398 from TeoZosa/feat/add-dynamic-log-level-configuration-from-env\n\n✨  Enable dynamic log level configuration via env var",
          "timestamp": "2022-01-09T06:22:19Z",
          "tree_id": "cce6fb32b4e06c0e95372d84a03248d19f192451"
        },
        "date": 1641709492818,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 65.09757145038101,
            "unit": "iter/sec",
            "range": "stddev: 0.0010446553728631325",
            "extra": "mean: 15.361556164383565 msec\nrounds: 73"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 60.28149761315003,
            "unit": "iter/sec",
            "range": "stddev: 0.0020906172951250385",
            "extra": "mean: 16.588838028168965 msec\nrounds: 71"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 16.724424777346727,
            "unit": "iter/sec",
            "range": "stddev: 0.00294803236730748",
            "extra": "mean: 59.79278888888917 msec\nrounds: 18"
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
          "id": "e1d0a65388fe9048bdf0f94beff3a8aaf1d1116e",
          "message": "Merge pull request #399 from TeoZosa/dependabot/github_actions/pypa/gh-action-pypi-publish-1.5.0",
          "timestamp": "2022-01-10T14:10:38Z",
          "tree_id": "d2102bd6ce0fa2f698124dff9002ed7b1c1aa5f8"
        },
        "date": 1641827203990,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 76.34308433136442,
            "unit": "iter/sec",
            "range": "stddev: 0.0006906338422616159",
            "extra": "mean: 13.098763414634071 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.58920451595706,
            "unit": "iter/sec",
            "range": "stddev: 0.0005895921891196606",
            "extra": "mean: 14.166472151898875 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.05700199968317,
            "unit": "iter/sec",
            "range": "stddev: 0.0006900604886530903",
            "extra": "mean: 49.85789999999982 msec\nrounds: 21"
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
          "id": "eae2950def2c27a58f471fac8ad19778033c2684",
          "message": "Merge pull request #400 from TeoZosa/dependabot/pip/dot-github/workflows/tox-gh-actions-2.9.0",
          "timestamp": "2022-01-10T14:28:25Z",
          "tree_id": "c28acda022f837d70e8c333cba1d89b7d4ec2959"
        },
        "date": 1641827377212,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 89.01783105413475,
            "unit": "iter/sec",
            "range": "stddev: 0.00009766801695552618",
            "extra": "mean: 11.233704395604363 msec\nrounds: 91"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 81.32346179981701,
            "unit": "iter/sec",
            "range": "stddev: 0.0002203673367415963",
            "extra": "mean: 12.296574418604623 msec\nrounds: 86"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.25789694136456,
            "unit": "iter/sec",
            "range": "stddev: 0.00003786856076946217",
            "extra": "mean: 51.92674999999989 msec\nrounds: 20"
          }
        ]
      }
    ]
  }
}