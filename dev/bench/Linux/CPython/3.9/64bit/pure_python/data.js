window.BENCHMARK_DATA = {
  "lastUpdate": 1636745374083,
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
        "date": 1632278577059,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 132.33493340849247,
            "unit": "iter/sec",
            "range": "stddev: 0.0005893296519267919",
            "extra": "mean: 7.556583694444402 msec\nrounds: 144"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 27.013183344202165,
            "unit": "iter/sec",
            "range": "stddev: 0.0023277058602740605",
            "extra": "mean: 37.018961714285695 msec\nrounds: 28"
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
        "date": 1632322236764,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 82.46236574821155,
            "unit": "iter/sec",
            "range": "stddev: 0.0007315567482633675",
            "extra": "mean: 12.12674401136361 msec\nrounds: 88"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.151303756011863,
            "unit": "iter/sec",
            "range": "stddev: 0.0022432575698958413",
            "extra": "mean: 49.62458072727249 msec\nrounds: 22"
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
        "date": 1632323242542,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.345884405918,
            "unit": "iter/sec",
            "range": "stddev: 0.0010965531158353217",
            "extra": "mean: 13.822486354430394 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.462537284805542,
            "unit": "iter/sec",
            "range": "stddev: 0.003508416825305018",
            "extra": "mean: 54.16373625000008 msec\nrounds: 20"
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
        "date": 1632323860355,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 98.73392705341381,
            "unit": "iter/sec",
            "range": "stddev: 0.00007787196220429068",
            "extra": "mean: 10.128230790000003 msec\nrounds: 100"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.038595577087957,
            "unit": "iter/sec",
            "range": "stddev: 0.00010611999372643268",
            "extra": "mean: 47.53168985714275 msec\nrounds: 21"
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
        "date": 1632403017695,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.33835202688726,
            "unit": "iter/sec",
            "range": "stddev: 0.0008634872939289066",
            "extra": "mean: 14.216995013157886 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.2968238574281,
            "unit": "iter/sec",
            "range": "stddev: 0.0013320362938895895",
            "extra": "mean: 54.654294526315965 msec\nrounds: 19"
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
        "date": 1632404645888,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.00059707935128,
            "unit": "iter/sec",
            "range": "stddev: 0.001228078610078367",
            "extra": "mean: 13.888773712500024 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.582060062162697,
            "unit": "iter/sec",
            "range": "stddev: 0.0013698164214193053",
            "extra": "mean: 53.81534645000032 msec\nrounds: 20"
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
        "date": 1632432982879,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 75.5403383336169,
            "unit": "iter/sec",
            "range": "stddev: 0.0011612231318625143",
            "extra": "mean: 13.237960301204804 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.238867606866208,
            "unit": "iter/sec",
            "range": "stddev: 0.004830597474655418",
            "extra": "mean: 54.82796528571433 msec\nrounds: 21"
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
        "date": 1632437958331,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 77.91046776208968,
            "unit": "iter/sec",
            "range": "stddev: 0.000681261738332748",
            "extra": "mean: 12.835245747126528 msec\nrounds: 87"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.35171617751712,
            "unit": "iter/sec",
            "range": "stddev: 0.0038343775544623835",
            "extra": "mean: 54.49081657142837 msec\nrounds: 21"
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
        "date": 1632490320042,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.05844354020498,
            "unit": "iter/sec",
            "range": "stddev: 0.001063174508694492",
            "extra": "mean: 14.07292293750001 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.236683862478465,
            "unit": "iter/sec",
            "range": "stddev: 0.002520852965786583",
            "extra": "mean: 58.01579978947353 msec\nrounds: 19"
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
        "date": 1632494421970,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 115.51938998932796,
            "unit": "iter/sec",
            "range": "stddev: 0.00007157238860841503",
            "extra": "mean: 8.656555406779615 msec\nrounds: 118"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 24.192908396872795,
            "unit": "iter/sec",
            "range": "stddev: 0.00005817276695972308",
            "extra": "mean: 41.33442675000006 msec\nrounds: 24"
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
        "date": 1632495300966,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.59403120084602,
            "unit": "iter/sec",
            "range": "stddev: 0.0005343463731611478",
            "extra": "mean: 13.9676448333333 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.182532576070034,
            "unit": "iter/sec",
            "range": "stddev: 0.003010662992688494",
            "extra": "mean: 58.19863838888869 msec\nrounds: 18"
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
        "date": 1632508081528,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 107.01374204029402,
            "unit": "iter/sec",
            "range": "stddev: 0.00018452350227456558",
            "extra": "mean: 9.344594263636429 msec\nrounds: 110"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.75472053806535,
            "unit": "iter/sec",
            "range": "stddev: 0.000052815215276293125",
            "extra": "mean: 42.09689599999996 msec\nrounds: 24"
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
        "date": 1632509459872,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 95.27672495938081,
            "unit": "iter/sec",
            "range": "stddev: 0.0002723885499481445",
            "extra": "mean: 10.495742799999984 msec\nrounds: 105"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.161636110606068,
            "unit": "iter/sec",
            "range": "stddev: 0.0006728157364130977",
            "extra": "mean: 47.255325380952314 msec\nrounds: 21"
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
        "date": 1632515058960,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 74.60073180768282,
            "unit": "iter/sec",
            "range": "stddev: 0.0003932099170036877",
            "extra": "mean: 13.404694240506286 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.797393232547538,
            "unit": "iter/sec",
            "range": "stddev: 0.001559418660395685",
            "extra": "mean: 50.51170061904758 msec\nrounds: 21"
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
        "date": 1632515358599,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 73.30647928233063,
            "unit": "iter/sec",
            "range": "stddev: 0.0008180655567998841",
            "extra": "mean: 13.641358987499952 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.34462118386365,
            "unit": "iter/sec",
            "range": "stddev: 0.002146723861026169",
            "extra": "mean: 51.693956190475916 msec\nrounds: 21"
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
        "date": 1632515786606,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.91010360448041,
            "unit": "iter/sec",
            "range": "stddev: 0.0006456663816350322",
            "extra": "mean: 14.304084080000017 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.55389831156601,
            "unit": "iter/sec",
            "range": "stddev: 0.0008018416638428567",
            "extra": "mean: 53.89702925000006 msec\nrounds: 20"
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
        "date": 1632516730299,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 65.69944766455842,
            "unit": "iter/sec",
            "range": "stddev: 0.0015717567223424288",
            "extra": "mean: 15.220828112676054 msec\nrounds: 71"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.172903459890964,
            "unit": "iter/sec",
            "range": "stddev: 0.0026472767127544783",
            "extra": "mean: 58.231271277777815 msec\nrounds: 18"
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
        "date": 1632750750456,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 109.6159812761372,
            "unit": "iter/sec",
            "range": "stddev: 0.00007290066791659701",
            "extra": "mean: 9.122757360360321 msec\nrounds: 111"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.73126072491677,
            "unit": "iter/sec",
            "range": "stddev: 0.00009180133409358603",
            "extra": "mean: 42.138511375000164 msec\nrounds: 24"
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
        "date": 1632835754775,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 55.884401104476986,
            "unit": "iter/sec",
            "range": "stddev: 0.002895626589457054",
            "extra": "mean: 17.89408099999999 msec\nrounds: 73"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 16.09901761603248,
            "unit": "iter/sec",
            "range": "stddev: 0.006703186752171662",
            "extra": "mean: 62.11559138888904 msec\nrounds: 18"
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
        "date": 1633008121506,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 78.62170712789751,
            "unit": "iter/sec",
            "range": "stddev: 0.0008517052126739997",
            "extra": "mean: 12.71913364044938 msec\nrounds: 89"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.340900200442015,
            "unit": "iter/sec",
            "range": "stddev: 0.001458114946768294",
            "extra": "mean: 46.858379478260616 msec\nrounds: 23"
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
        "date": 1633059873700,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.74078792992533,
            "unit": "iter/sec",
            "range": "stddev: 0.0005304201196939467",
            "extra": "mean: 13.74744525675674 msec\nrounds: 74"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.861690155044162,
            "unit": "iter/sec",
            "range": "stddev: 0.0030814920651768517",
            "extra": "mean: 53.01751814285695 msec\nrounds: 21"
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
        "date": 1633203583963,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.94332021197795,
            "unit": "iter/sec",
            "range": "stddev: 0.0006650092744536328",
            "extra": "mean: 13.89983110389599 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.146090262218696,
            "unit": "iter/sec",
            "range": "stddev: 0.0022466652972405834",
            "extra": "mean: 55.108289749999926 msec\nrounds: 20"
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
        "date": 1633203828857,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 73.36942995784136,
            "unit": "iter/sec",
            "range": "stddev: 0.0008250376933696119",
            "extra": "mean: 13.629654756410234 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.085982218108413,
            "unit": "iter/sec",
            "range": "stddev: 0.002267756114342501",
            "extra": "mean: 52.39447404761905 msec\nrounds: 21"
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
        "date": 1633204038663,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.7001861683038,
            "unit": "iter/sec",
            "range": "stddev: 0.0008645033637879891",
            "extra": "mean: 14.347163974358947 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.88365897427154,
            "unit": "iter/sec",
            "range": "stddev: 0.0034104657624396935",
            "extra": "mean: 55.91696875000007 msec\nrounds: 20"
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
        "date": 1633204652781,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.75599590732071,
            "unit": "iter/sec",
            "range": "stddev: 0.0006891223160093333",
            "extra": "mean: 14.335685226666694 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.106449781385052,
            "unit": "iter/sec",
            "range": "stddev: 0.0016624358724356316",
            "extra": "mean: 55.2289384210528 msec\nrounds: 19"
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
        "date": 1633204894298,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 76.80878978167111,
            "unit": "iter/sec",
            "range": "stddev: 0.0015206535963982035",
            "extra": "mean: 13.019343265822814 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.013527195789024,
            "unit": "iter/sec",
            "range": "stddev: 0.002782798085260413",
            "extra": "mean: 52.59413414999994 msec\nrounds: 20"
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
        "date": 1633355733950,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 65.06279684552538,
            "unit": "iter/sec",
            "range": "stddev: 0.0009764530298529384",
            "extra": "mean: 15.369766571428503 msec\nrounds: 70"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.610843443438217,
            "unit": "iter/sec",
            "range": "stddev: 0.002224865180007696",
            "extra": "mean: 56.78319742105248 msec\nrounds: 19"
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
        "date": 1633838525298,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 85.48537519006237,
            "unit": "iter/sec",
            "range": "stddev: 0.0009473796458907476",
            "extra": "mean: 11.697907364583335 msec\nrounds: 96"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 79.81244816165456,
            "unit": "iter/sec",
            "range": "stddev: 0.0008910701895199206",
            "extra": "mean: 12.52937383870959 msec\nrounds: 93"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.977899731985147,
            "unit": "iter/sec",
            "range": "stddev: 0.0025427915674939025",
            "extra": "mean: 52.69286981818177 msec\nrounds: 22"
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
        "date": 1634094735712,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.76143819889963,
            "unit": "iter/sec",
            "range": "stddev: 0.0011084793646252724",
            "extra": "mean: 13.55721938749993 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.14320671600925,
            "unit": "iter/sec",
            "range": "stddev: 0.0008669754191076514",
            "extra": "mean: 14.674977128205278 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.325234090549955,
            "unit": "iter/sec",
            "range": "stddev: 0.0023059776949987776",
            "extra": "mean: 57.71927783333385 msec\nrounds: 18"
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
        "date": 1634096251472,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 121.069426084176,
            "unit": "iter/sec",
            "range": "stddev: 0.00005378856433802799",
            "extra": "mean: 8.259723634146324 msec\nrounds: 123"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 108.70102325933124,
            "unit": "iter/sec",
            "range": "stddev: 0.00018568275653366533",
            "extra": "mean: 9.199545413793121 msec\nrounds: 116"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.56441943585759,
            "unit": "iter/sec",
            "range": "stddev: 0.0000829684307085705",
            "extra": "mean: 42.43686133333361 msec\nrounds: 24"
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
        "date": 1634096612426,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 79.74984760683053,
            "unit": "iter/sec",
            "range": "stddev: 0.0009507792107464938",
            "extra": "mean: 12.539208913978545 msec\nrounds: 93"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 74.76544377297787,
            "unit": "iter/sec",
            "range": "stddev: 0.0008374338176185169",
            "extra": "mean: 13.375163037036977 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.103135966251727,
            "unit": "iter/sec",
            "range": "stddev: 0.00327698235261655",
            "extra": "mean: 52.34742619047653 msec\nrounds: 21"
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
        "date": 1634098236964,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.94367950650721,
            "unit": "iter/sec",
            "range": "stddev: 0.0013200632690321386",
            "extra": "mean: 13.70920697674418 msec\nrounds: 86"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.57003914652151,
            "unit": "iter/sec",
            "range": "stddev: 0.0017900304973297828",
            "extra": "mean: 14.583628833333236 msec\nrounds: 84"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.398955191042802,
            "unit": "iter/sec",
            "range": "stddev: 0.002506593747469397",
            "extra": "mean: 54.350912300000154 msec\nrounds: 20"
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
        "date": 1634131700504,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 118.71422269735642,
            "unit": "iter/sec",
            "range": "stddev: 0.00007688687298794765",
            "extra": "mean: 8.423590512396697 msec\nrounds: 121"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 106.93126217635366,
            "unit": "iter/sec",
            "range": "stddev: 0.0001200267760854174",
            "extra": "mean: 9.351802079646038 msec\nrounds: 113"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.201094863298056,
            "unit": "iter/sec",
            "range": "stddev: 0.00008078306873227016",
            "extra": "mean: 43.10141421739134 msec\nrounds: 23"
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
        "date": 1634190576931,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.47117257724487,
            "unit": "iter/sec",
            "range": "stddev: 0.00036022735503286245",
            "extra": "mean: 13.798590038461565 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.22444142153968,
            "unit": "iter/sec",
            "range": "stddev: 0.0009218224281311347",
            "extra": "mean: 14.875541973333313 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 16.91415400425171,
            "unit": "iter/sec",
            "range": "stddev: 0.0015430703754969505",
            "extra": "mean: 59.12208200000012 msec\nrounds: 18"
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
        "date": 1634190874852,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 118.71766508597273,
            "unit": "iter/sec",
            "range": "stddev: 0.00006887883733481245",
            "extra": "mean: 8.42334625833335 msec\nrounds: 120"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 106.0624996274911,
            "unit": "iter/sec",
            "range": "stddev: 0.00012524003420471072",
            "extra": "mean: 9.428403097345093 msec\nrounds: 113"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.524820711435822,
            "unit": "iter/sec",
            "range": "stddev: 0.0001368033180738235",
            "extra": "mean: 42.50829420833302 msec\nrounds: 24"
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
        "date": 1634191184377,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.9592121687217,
            "unit": "iter/sec",
            "range": "stddev: 0.0010940835501206572",
            "extra": "mean: 13.520966093023267 msec\nrounds: 86"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 66.81055472107951,
            "unit": "iter/sec",
            "range": "stddev: 0.0011050332454593716",
            "extra": "mean: 14.96769491249993 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.02249308252369,
            "unit": "iter/sec",
            "range": "stddev: 0.0018006636449006284",
            "extra": "mean: 55.4862191052632 msec\nrounds: 19"
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
        "date": 1634237153945,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 70.03417308496911,
            "unit": "iter/sec",
            "range": "stddev: 0.002055457178929307",
            "extra": "mean: 14.27874358974365 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.74690638921231,
            "unit": "iter/sec",
            "range": "stddev: 0.0010486315141503945",
            "extra": "mean: 14.546109090909129 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.31883865990704,
            "unit": "iter/sec",
            "range": "stddev: 0.0026955034550740936",
            "extra": "mean: 54.58861331578945 msec\nrounds: 19"
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
        "date": 1634250189744,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 75.64997412014411,
            "unit": "iter/sec",
            "range": "stddev: 0.0005800785105623682",
            "extra": "mean: 13.218775176470546 msec\nrounds: 85"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.92913733201122,
            "unit": "iter/sec",
            "range": "stddev: 0.0004956427445808359",
            "extra": "mean: 13.902571851851777 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.17385820583654,
            "unit": "iter/sec",
            "range": "stddev: 0.0013137600283703703",
            "extra": "mean: 55.024089473684214 msec\nrounds: 19"
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
        "date": 1634252437082,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.00380829053513,
            "unit": "iter/sec",
            "range": "stddev: 0.0016224250285009193",
            "extra": "mean: 13.888154303797423 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 66.69233299448615,
            "unit": "iter/sec",
            "range": "stddev: 0.0011453878710117689",
            "extra": "mean: 14.994227298701276 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.709948368966412,
            "unit": "iter/sec",
            "range": "stddev: 0.0034599092487329584",
            "extra": "mean: 56.46543847368438 msec\nrounds: 19"
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
        "date": 1635032580613,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 116.82638356624554,
            "unit": "iter/sec",
            "range": "stddev: 0.00006349462364556778",
            "extra": "mean: 8.559710310924393 msec\nrounds: 119"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 106.04476592495988,
            "unit": "iter/sec",
            "range": "stddev: 0.00005158740559007894",
            "extra": "mean: 9.42997979464283 msec\nrounds: 112"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.292683902210552,
            "unit": "iter/sec",
            "range": "stddev: 0.000077771794196231",
            "extra": "mean: 42.93193537499973 msec\nrounds: 24"
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
        "date": 1635032932136,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.3060068348543,
            "unit": "iter/sec",
            "range": "stddev: 0.001185743426435118",
            "extra": "mean: 14.024063951807229 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 66.38648528449197,
            "unit": "iter/sec",
            "range": "stddev: 0.0011036341688983845",
            "extra": "mean: 15.06330687209317 msec\nrounds: 86"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.079842944947128,
            "unit": "iter/sec",
            "range": "stddev: 0.0029762972271689587",
            "extra": "mean: 58.54854773684194 msec\nrounds: 19"
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
        "date": 1635061665055,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 113.11107415672349,
            "unit": "iter/sec",
            "range": "stddev: 0.00043914452400302693",
            "extra": "mean: 8.840867328467136 msec\nrounds: 137"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 99.38866192736297,
            "unit": "iter/sec",
            "range": "stddev: 0.0004639108594548394",
            "extra": "mean: 10.061509840336095 msec\nrounds: 119"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.7803650653272,
            "unit": "iter/sec",
            "range": "stddev: 0.001804918409673411",
            "extra": "mean: 45.91291270833331 msec\nrounds: 24"
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
        "date": 1635177235695,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 74.65975723371203,
            "unit": "iter/sec",
            "range": "stddev: 0.001026813711778953",
            "extra": "mean: 13.39409659302318 msec\nrounds: 86"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.19598601713744,
            "unit": "iter/sec",
            "range": "stddev: 0.0010909444713205745",
            "extra": "mean: 14.663619641025546 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.819015138663026,
            "unit": "iter/sec",
            "range": "stddev: 0.001183929937170636",
            "extra": "mean: 56.11982436842077 msec\nrounds: 19"
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
        "date": 1635178185351,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 99.89794074352307,
            "unit": "iter/sec",
            "range": "stddev: 0.00008138606790199239",
            "extra": "mean: 10.010216352380972 msec\nrounds: 105"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 89.63334894610828,
            "unit": "iter/sec",
            "range": "stddev: 0.000266806341392158",
            "extra": "mean: 11.156561835051441 msec\nrounds: 97"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.151670066969952,
            "unit": "iter/sec",
            "range": "stddev: 0.00036593024127910253",
            "extra": "mean: 49.62367866666656 msec\nrounds: 21"
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
        "date": 1635182810875,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 79.13802776255652,
            "unit": "iter/sec",
            "range": "stddev: 0.0006254257456174308",
            "extra": "mean: 12.636150132530108 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.18976271705067,
            "unit": "iter/sec",
            "range": "stddev: 0.0006325947999757167",
            "extra": "mean: 13.852379649999978 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.070188553638854,
            "unit": "iter/sec",
            "range": "stddev: 0.0008339454200462283",
            "extra": "mean: 52.437866421052576 msec\nrounds: 19"
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
        "date": 1635202427087,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 124.25314871457259,
            "unit": "iter/sec",
            "range": "stddev: 0.00006593455654215264",
            "extra": "mean: 8.048085785714328 msec\nrounds: 126"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 110.96505464883397,
            "unit": "iter/sec",
            "range": "stddev: 0.000041715142730016516",
            "extra": "mean: 9.011846145299115 msec\nrounds: 117"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.37533002264901,
            "unit": "iter/sec",
            "range": "stddev: 0.0004890078798489938",
            "extra": "mean: 42.78014466666661 msec\nrounds: 24"
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
        "date": 1635202667882,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 76.19268594858201,
            "unit": "iter/sec",
            "range": "stddev: 0.0006907994431198114",
            "extra": "mean: 13.124619345678948 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.00555945968419,
            "unit": "iter/sec",
            "range": "stddev: 0.0004589256084992015",
            "extra": "mean: 14.284579792207708 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.684735237603086,
            "unit": "iter/sec",
            "range": "stddev: 0.0023945405541746507",
            "extra": "mean: 56.545941263157744 msec\nrounds: 19"
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
        "date": 1635202872665,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 78.59528629131233,
            "unit": "iter/sec",
            "range": "stddev: 0.0014150407939071436",
            "extra": "mean: 12.723409344086031 msec\nrounds: 93"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.65191731898756,
            "unit": "iter/sec",
            "range": "stddev: 0.0014387282989786765",
            "extra": "mean: 13.956360658823609 msec\nrounds: 85"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.963822287639424,
            "unit": "iter/sec",
            "range": "stddev: 0.002439308163228349",
            "extra": "mean: 52.73198540000017 msec\nrounds: 20"
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
        "date": 1635204824429,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 77.58240150096434,
            "unit": "iter/sec",
            "range": "stddev: 0.0007243686907790918",
            "extra": "mean: 12.889521085365862 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.07177959244163,
            "unit": "iter/sec",
            "range": "stddev: 0.0006814382155175856",
            "extra": "mean: 14.070282265822824 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.809639643866543,
            "unit": "iter/sec",
            "range": "stddev: 0.0031089913033559547",
            "extra": "mean: 56.149367421052204 msec\nrounds: 19"
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
        "date": 1635449393672,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 78.25041933948262,
            "unit": "iter/sec",
            "range": "stddev: 0.0006197913883392309",
            "extra": "mean: 12.779484230769258 msec\nrounds: 91"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.38625029929536,
            "unit": "iter/sec",
            "range": "stddev: 0.0007908775903674387",
            "extra": "mean: 14.622822506329229 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.920756618486113,
            "unit": "iter/sec",
            "range": "stddev: 0.0016012305867327374",
            "extra": "mean: 55.801215388888906 msec\nrounds: 18"
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
        "date": 1635452469079,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 97.3671177732618,
            "unit": "iter/sec",
            "range": "stddev: 0.0006274901598987022",
            "extra": "mean: 10.270407740000005 msec\nrounds: 100"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 86.64736762025348,
            "unit": "iter/sec",
            "range": "stddev: 0.0011627173923643257",
            "extra": "mean: 11.54103151041664 msec\nrounds: 96"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.78706362541511,
            "unit": "iter/sec",
            "range": "stddev: 0.005249306450254935",
            "extra": "mean: 50.53806966666693 msec\nrounds: 24"
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
        "date": 1635945641856,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 76.54601208912875,
            "unit": "iter/sec",
            "range": "stddev: 0.001095118628665942",
            "extra": "mean: 13.064037860465135 msec\nrounds: 86"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 66.90140877141795,
            "unit": "iter/sec",
            "range": "stddev: 0.0017193247066314822",
            "extra": "mean: 14.947368349397546 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 16.937908195589046,
            "unit": "iter/sec",
            "range": "stddev: 0.0022458266672910083",
            "extra": "mean: 59.03916755555559 msec\nrounds: 18"
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
        "date": 1636164997453,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 106.86754263497814,
            "unit": "iter/sec",
            "range": "stddev: 0.00012251197621296916",
            "extra": "mean: 9.357378071428549 msec\nrounds: 112"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 96.36245189389726,
            "unit": "iter/sec",
            "range": "stddev: 0.0001762601268341696",
            "extra": "mean: 10.377486047169905 msec\nrounds: 106"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.51538273633346,
            "unit": "iter/sec",
            "range": "stddev: 0.0003482365491498778",
            "extra": "mean: 48.74391147619025 msec\nrounds: 21"
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
        "date": 1636381302869,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 74.20171751747465,
            "unit": "iter/sec",
            "range": "stddev: 0.0015602215710644749",
            "extra": "mean: 13.476777000000006 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 62.18287205713356,
            "unit": "iter/sec",
            "range": "stddev: 0.0024511944440345633",
            "extra": "mean: 16.081598789473748 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 15.322368785266965,
            "unit": "iter/sec",
            "range": "stddev: 0.0053121807438269945",
            "extra": "mean: 65.26406027777752 msec\nrounds: 18"
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
        "date": 1636382296367,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 104.46753038232899,
            "unit": "iter/sec",
            "range": "stddev: 0.00007151310954253039",
            "extra": "mean: 9.572352254716966 msec\nrounds: 106"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 93.30806596938886,
            "unit": "iter/sec",
            "range": "stddev: 0.00004344940491433149",
            "extra": "mean: 10.717187089999971 msec\nrounds: 100"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.700869251209564,
            "unit": "iter/sec",
            "range": "stddev: 0.003284011242925718",
            "extra": "mean: 50.759181599999884 msec\nrounds: 20"
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
        "date": 1636467562899,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.61634800301367,
            "unit": "iter/sec",
            "range": "stddev: 0.0007516029727266102",
            "extra": "mean: 13.583939262499989 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.10689501011704,
            "unit": "iter/sec",
            "range": "stddev: 0.0006004731466395264",
            "extra": "mean: 14.901598410256351 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.248208576622286,
            "unit": "iter/sec",
            "range": "stddev: 0.0014087519666258002",
            "extra": "mean: 57.97703544444439 msec\nrounds: 18"
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
        "date": 1636640358983,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 121.03972152471924,
            "unit": "iter/sec",
            "range": "stddev: 0.00008139162104393887",
            "extra": "mean: 8.261750666666693 msec\nrounds: 123"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 109.8120645749893,
            "unit": "iter/sec",
            "range": "stddev: 0.00005437016587586043",
            "extra": "mean: 9.10646752586199 msec\nrounds: 116"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.352689622041858,
            "unit": "iter/sec",
            "range": "stddev: 0.00004726619738973086",
            "extra": "mean: 42.821619958333706 msec\nrounds: 24"
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
        "date": 1636641073216,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 121.85661752986819,
            "unit": "iter/sec",
            "range": "stddev: 0.00006331364600850184",
            "extra": "mean: 8.206365975609742 msec\nrounds: 123"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 110.72386276060068,
            "unit": "iter/sec",
            "range": "stddev: 0.00004607908299321152",
            "extra": "mean: 9.03147682051275 msec\nrounds: 117"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.424142748599934,
            "unit": "iter/sec",
            "range": "stddev: 0.00008889643755605317",
            "extra": "mean: 42.6909966666665 msec\nrounds: 24"
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
        "date": 1636744933832,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 129.14113642970273,
            "unit": "iter/sec",
            "range": "stddev: 0.0007398225493403716",
            "extra": "mean: 7.743466006622488 msec\nrounds: 151"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 112.71479512544825,
            "unit": "iter/sec",
            "range": "stddev: 0.0007466884852735873",
            "extra": "mean: 8.871949763888843 msec\nrounds: 144"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 24.252484663011522,
            "unit": "iter/sec",
            "range": "stddev: 0.002432726441536248",
            "extra": "mean: 41.23288866666687 msec\nrounds: 27"
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
        "date": 1636745373098,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 83.56819274058283,
            "unit": "iter/sec",
            "range": "stddev: 0.0007002233505190022",
            "extra": "mean: 11.96627529213486 msec\nrounds: 89"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 76.86015821896764,
            "unit": "iter/sec",
            "range": "stddev: 0.0008195335100050894",
            "extra": "mean: 13.010641965517303 msec\nrounds: 87"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.19750635565749,
            "unit": "iter/sec",
            "range": "stddev: 0.0015664674222876664",
            "extra": "mean: 49.511062523809606 msec\nrounds: 21"
          }
        ]
      }
    ]
  }
}