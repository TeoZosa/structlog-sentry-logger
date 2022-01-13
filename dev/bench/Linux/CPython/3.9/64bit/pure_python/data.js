window.BENCHMARK_DATA = {
  "lastUpdate": 1642059802909,
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
        "date": 1637159598376,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 122.53436786113592,
            "unit": "iter/sec",
            "range": "stddev: 0.00006439661882396944",
            "extra": "mean: 8.16097571199997 msec\nrounds: 125"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 110.72379192639691,
            "unit": "iter/sec",
            "range": "stddev: 0.00004617498272608702",
            "extra": "mean: 9.031482598290573 msec\nrounds: 117"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.51940741582972,
            "unit": "iter/sec",
            "range": "stddev: 0.000048160504090160496",
            "extra": "mean: 42.51807804166659 msec\nrounds: 24"
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
        "date": 1637160614657,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 123.6943680942882,
            "unit": "iter/sec",
            "range": "stddev: 0.00006289844399098722",
            "extra": "mean: 8.084442447999997 msec\nrounds: 125"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 110.92928339218551,
            "unit": "iter/sec",
            "range": "stddev: 0.00013394273746920228",
            "extra": "mean: 9.01475218644066 msec\nrounds: 118"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.549874227333813,
            "unit": "iter/sec",
            "range": "stddev: 0.00008336437913245743",
            "extra": "mean: 42.46307179166683 msec\nrounds: 24"
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
        "date": 1637161284714,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 78.91832850629052,
            "unit": "iter/sec",
            "range": "stddev: 0.0006808755830515828",
            "extra": "mean: 12.67132767415735 msec\nrounds: 89"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 73.92777914965785,
            "unit": "iter/sec",
            "range": "stddev: 0.0008739827845249869",
            "extra": "mean: 13.526715011628049 msec\nrounds: 86"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.460638690008718,
            "unit": "iter/sec",
            "range": "stddev: 0.0018413078838046062",
            "extra": "mean: 54.169306749999976 msec\nrounds: 20"
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
        "date": 1637175109152,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 124.29534211200091,
            "unit": "iter/sec",
            "range": "stddev: 0.00006069903764332706",
            "extra": "mean: 8.045353776000013 msec\nrounds: 125"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 111.51407226111651,
            "unit": "iter/sec",
            "range": "stddev: 0.0002535670288608273",
            "extra": "mean: 8.96747809243701 msec\nrounds: 119"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.616672219667898,
            "unit": "iter/sec",
            "range": "stddev: 0.0001652960061323547",
            "extra": "mean: 42.342968166666715 msec\nrounds: 24"
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
        "date": 1637529646642,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 125.15002988045563,
            "unit": "iter/sec",
            "range": "stddev: 0.0000619925554319125",
            "extra": "mean: 7.990409598425254 msec\nrounds: 127"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 112.74467395557662,
            "unit": "iter/sec",
            "range": "stddev: 0.00004448874929316787",
            "extra": "mean: 8.869598579831964 msec\nrounds: 119"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.44898796605663,
            "unit": "iter/sec",
            "range": "stddev: 0.00004569425727431906",
            "extra": "mean: 42.645763708333206 msec\nrounds: 24"
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
        "date": 1637591006481,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 121.0740398937903,
            "unit": "iter/sec",
            "range": "stddev: 0.0000705844765318431",
            "extra": "mean: 8.259408878048749 msec\nrounds: 123"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 109.68258951637601,
            "unit": "iter/sec",
            "range": "stddev: 0.00005050409818945837",
            "extra": "mean: 9.117217275862147 msec\nrounds: 116"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.32978519702982,
            "unit": "iter/sec",
            "range": "stddev: 0.0003463200466390349",
            "extra": "mean: 42.86366083333304 msec\nrounds: 24"
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
        "date": 1637591707796,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 121.57704872664999,
            "unit": "iter/sec",
            "range": "stddev: 0.0000641700863923116",
            "extra": "mean: 8.225236674796808 msec\nrounds: 123"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 109.14691103656361,
            "unit": "iter/sec",
            "range": "stddev: 0.0000460493335156792",
            "extra": "mean: 9.161963362068997 msec\nrounds: 116"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.5085288619469,
            "unit": "iter/sec",
            "range": "stddev: 0.0000976346508004939",
            "extra": "mean: 42.53775324999998 msec\nrounds: 24"
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
        "date": 1637677316466,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 122.42229201574115,
            "unit": "iter/sec",
            "range": "stddev: 0.00006259525088100754",
            "extra": "mean: 8.168446967741946 msec\nrounds: 124"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 110.18233119075244,
            "unit": "iter/sec",
            "range": "stddev: 0.00003902202535177463",
            "extra": "mean: 9.075865333333315 msec\nrounds: 117"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.480971349551933,
            "unit": "iter/sec",
            "range": "stddev: 0.00007960151469298055",
            "extra": "mean: 42.58767599999998 msec\nrounds: 24"
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
        "date": 1637936821577,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 119.68624701620692,
            "unit": "iter/sec",
            "range": "stddev: 0.00006337809000958827",
            "extra": "mean: 8.355178852459032 msec\nrounds: 122"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 108.42668645541026,
            "unit": "iter/sec",
            "range": "stddev: 0.00004674005311052553",
            "extra": "mean: 9.222821730434816 msec\nrounds: 115"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 26.338103363217314,
            "unit": "iter/sec",
            "range": "stddev: 0.0002356258769017402",
            "extra": "mean: 37.967806041666535 msec\nrounds: 24"
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
        "date": 1637937436381,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 74.94042288297373,
            "unit": "iter/sec",
            "range": "stddev: 0.0009649481136091614",
            "extra": "mean: 13.343933240963834 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.72961378624075,
            "unit": "iter/sec",
            "range": "stddev: 0.0011601239435126164",
            "extra": "mean: 13.941243333333283 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.45098584313879,
            "unit": "iter/sec",
            "range": "stddev: 0.001279436324150574",
            "extra": "mean: 54.19764605000017 msec\nrounds: 20"
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
        "date": 1638198322231,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 106.38081040713963,
            "unit": "iter/sec",
            "range": "stddev: 0.00008243679329491462",
            "extra": "mean: 9.400191596330291 msec\nrounds: 109"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 95.45067356369732,
            "unit": "iter/sec",
            "range": "stddev: 0.0002629189041366413",
            "extra": "mean: 10.476615435643497 msec\nrounds: 101"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.532938942117564,
            "unit": "iter/sec",
            "range": "stddev: 0.00017048810102684235",
            "extra": "mean: 48.702234142857186 msec\nrounds: 21"
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
        "date": 1638198663474,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 84.68245891083339,
            "unit": "iter/sec",
            "range": "stddev: 0.0008141680644326786",
            "extra": "mean: 11.80882101041672 msec\nrounds: 96"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 81.0591731257817,
            "unit": "iter/sec",
            "range": "stddev: 0.0012413302882919187",
            "extra": "mean: 12.336666677419384 msec\nrounds: 93"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.86192916383589,
            "unit": "iter/sec",
            "range": "stddev: 0.00220670237608366",
            "extra": "mean: 50.34757659999993 msec\nrounds: 20"
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
        "date": 1638200270638,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 122.09853100559367,
            "unit": "iter/sec",
            "range": "stddev: 0.000060960588453325136",
            "extra": "mean: 8.190106725806448 msec\nrounds: 124"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 109.68651847379496,
            "unit": "iter/sec",
            "range": "stddev: 0.00004314868228812803",
            "extra": "mean: 9.116890698275817 msec\nrounds: 116"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.251601335604107,
            "unit": "iter/sec",
            "range": "stddev: 0.00006524813079300744",
            "extra": "mean: 43.007790541666736 msec\nrounds: 24"
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
        "date": 1638201382343,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 103.5576854239516,
            "unit": "iter/sec",
            "range": "stddev: 0.0002730932425043748",
            "extra": "mean: 9.656453752380918 msec\nrounds: 105"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 94.55459462321593,
            "unit": "iter/sec",
            "range": "stddev: 0.000057806649379687435",
            "extra": "mean: 10.57590066336629 msec\nrounds: 101"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.359651242005008,
            "unit": "iter/sec",
            "range": "stddev: 0.0003229234307850736",
            "extra": "mean: 49.11675490476233 msec\nrounds: 21"
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
        "date": 1638203266903,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 106.9376017375217,
            "unit": "iter/sec",
            "range": "stddev: 0.000303978222899783",
            "extra": "mean: 9.351247678571468 msec\nrounds: 112"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 96.13575049990227,
            "unit": "iter/sec",
            "range": "stddev: 0.00015757817583536923",
            "extra": "mean: 10.401957594339647 msec\nrounds: 106"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.504221678154945,
            "unit": "iter/sec",
            "range": "stddev: 0.0002171477045030362",
            "extra": "mean: 48.77044423809527 msec\nrounds: 21"
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
        "date": 1638281838241,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 121.47670447756434,
            "unit": "iter/sec",
            "range": "stddev: 0.00006664602725482237",
            "extra": "mean: 8.232031024390286 msec\nrounds: 123"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 109.98863912175678,
            "unit": "iter/sec",
            "range": "stddev: 0.000049009503176854286",
            "extra": "mean: 9.091848103448266 msec\nrounds: 116"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.363269758446382,
            "unit": "iter/sec",
            "range": "stddev: 0.00006370563308421502",
            "extra": "mean: 42.802228041666815 msec\nrounds: 24"
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
        "date": 1638368658472,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 102.9559485295219,
            "unit": "iter/sec",
            "range": "stddev: 0.00007838104094607675",
            "extra": "mean: 9.71289191428562 msec\nrounds: 105"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 93.83618320811503,
            "unit": "iter/sec",
            "range": "stddev: 0.00005053289969415114",
            "extra": "mean: 10.656869938775591 msec\nrounds: 98"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.293330390584025,
            "unit": "iter/sec",
            "range": "stddev: 0.00022861700341468108",
            "extra": "mean: 49.27727389999985 msec\nrounds: 20"
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
        "date": 1638369568904,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.05496764739468,
            "unit": "iter/sec",
            "range": "stddev: 0.001544674717451908",
            "extra": "mean: 13.688323083333302 msec\nrounds: 84"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.80710500939469,
            "unit": "iter/sec",
            "range": "stddev: 0.0009507673399078555",
            "extra": "mean: 14.325189389610403 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.987306274652262,
            "unit": "iter/sec",
            "range": "stddev: 0.002301321536230744",
            "extra": "mean: 55.594761368421324 msec\nrounds: 19"
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
        "date": 1638454756053,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 75.603108961127,
            "unit": "iter/sec",
            "range": "stddev: 0.0009248125206208021",
            "extra": "mean: 13.226969283950638 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.73931698952434,
            "unit": "iter/sec",
            "range": "stddev: 0.0009826258305474077",
            "extra": "mean: 14.547715103896028 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.81247125512454,
            "unit": "iter/sec",
            "range": "stddev: 0.0008619608102286194",
            "extra": "mean: 56.14044147368412 msec\nrounds: 19"
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
        "date": 1638801137468,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 117.95550656682474,
            "unit": "iter/sec",
            "range": "stddev: 0.00026218655866474784",
            "extra": "mean: 8.477772925619838 msec\nrounds: 121"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 107.40780521057295,
            "unit": "iter/sec",
            "range": "stddev: 0.00003865992364109957",
            "extra": "mean: 9.310310345132745 msec\nrounds: 113"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.136811980585847,
            "unit": "iter/sec",
            "range": "stddev: 0.0006125247261143116",
            "extra": "mean: 43.22116637500025 msec\nrounds: 24"
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
        "date": 1638802684393,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.83370952672625,
            "unit": "iter/sec",
            "range": "stddev: 0.0013781181638358043",
            "extra": "mean: 13.72990620000003 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.18139217877052,
            "unit": "iter/sec",
            "range": "stddev: 0.0011829656809176719",
            "extra": "mean: 14.45475392307683 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 16.93087362366357,
            "unit": "iter/sec",
            "range": "stddev: 0.0029408353399069426",
            "extra": "mean: 59.063697611110996 msec\nrounds: 18"
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
        "date": 1638807279853,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 123.80081700417877,
            "unit": "iter/sec",
            "range": "stddev: 0.00007871468875935435",
            "extra": "mean: 8.077491120000008 msec\nrounds: 125"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 110.0111484341202,
            "unit": "iter/sec",
            "range": "stddev: 0.00003912338748678196",
            "extra": "mean: 9.089987826086976 msec\nrounds: 115"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.488722756893758,
            "unit": "iter/sec",
            "range": "stddev: 0.00008756229065304086",
            "extra": "mean: 42.57362183333309 msec\nrounds: 24"
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
        "date": 1638972790557,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 74.3373251608109,
            "unit": "iter/sec",
            "range": "stddev: 0.000822256918472772",
            "extra": "mean: 13.452192392405037 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.62373110481883,
            "unit": "iter/sec",
            "range": "stddev: 0.000738976268032734",
            "extra": "mean: 13.961852930232508 msec\nrounds: 86"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.831524838342283,
            "unit": "iter/sec",
            "range": "stddev: 0.0017729763643371944",
            "extra": "mean: 56.08045352631579 msec\nrounds: 19"
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
        "date": 1638973000344,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 123.43268277571754,
            "unit": "iter/sec",
            "range": "stddev: 0.00007252463816586622",
            "extra": "mean: 8.101581991999986 msec\nrounds: 125"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 109.68406231089999,
            "unit": "iter/sec",
            "range": "stddev: 0.000057937906399363305",
            "extra": "mean: 9.117094853448217 msec\nrounds: 116"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.436972896986376,
            "unit": "iter/sec",
            "range": "stddev: 0.00011288315917316745",
            "extra": "mean: 42.66762625000024 msec\nrounds: 24"
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
        "date": 1639146026492,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 76.52340331641533,
            "unit": "iter/sec",
            "range": "stddev: 0.0007755363356710126",
            "extra": "mean: 13.06789761904756 msec\nrounds: 84"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 65.77741788501856,
            "unit": "iter/sec",
            "range": "stddev: 0.0007669112826870476",
            "extra": "mean: 15.202785882353092 msec\nrounds: 85"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 16.94032506978004,
            "unit": "iter/sec",
            "range": "stddev: 0.0015115451001123249",
            "extra": "mean: 59.03074444444437 msec\nrounds: 18"
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
        "date": 1639254918442,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 123.33229773356351,
            "unit": "iter/sec",
            "range": "stddev: 0.000055112159716100144",
            "extra": "mean: 8.108176190476188 msec\nrounds: 126"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 109.31305789709559,
            "unit": "iter/sec",
            "range": "stddev: 0.0001353077173512674",
            "extra": "mean: 9.148037931034493 msec\nrounds: 116"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.298025822366874,
            "unit": "iter/sec",
            "range": "stddev: 0.00005261166110338967",
            "extra": "mean: 42.92209166666675 msec\nrounds: 24"
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
        "date": 1639406127445,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 111.09536507427315,
            "unit": "iter/sec",
            "range": "stddev: 0.0002532905311509734",
            "extra": "mean: 9.001275609756059 msec\nrounds: 123"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 100.28700152165167,
            "unit": "iter/sec",
            "range": "stddev: 0.00031409174577385555",
            "extra": "mean: 9.971381981982011 msec\nrounds: 111"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.391116833126762,
            "unit": "iter/sec",
            "range": "stddev: 0.0010577501883184822",
            "extra": "mean: 46.74837727272741 msec\nrounds: 22"
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
        "date": 1639406850301,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 125.85680956134162,
            "unit": "iter/sec",
            "range": "stddev: 0.00008240985817490095",
            "extra": "mean: 7.945537500000013 msec\nrounds: 128"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 112.48668356172536,
            "unit": "iter/sec",
            "range": "stddev: 0.000045228391060482466",
            "extra": "mean: 8.889941176470591 msec\nrounds: 119"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.110268334330407,
            "unit": "iter/sec",
            "range": "stddev: 0.00015886833288502155",
            "extra": "mean: 43.270808695652214 msec\nrounds: 23"
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
        "date": 1639411072523,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 106.78678830172775,
            "unit": "iter/sec",
            "range": "stddev: 0.0003137824897135706",
            "extra": "mean: 9.364454310344872 msec\nrounds: 116"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 98.62640913667481,
            "unit": "iter/sec",
            "range": "stddev: 0.00021186289551602104",
            "extra": "mean: 10.139272115384603 msec\nrounds: 104"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.647021338696526,
            "unit": "iter/sec",
            "range": "stddev: 0.00025233484848045186",
            "extra": "mean: 48.433136363636436 msec\nrounds: 22"
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
        "date": 1639412187878,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 124.28110531669738,
            "unit": "iter/sec",
            "range": "stddev: 0.00007178581886310798",
            "extra": "mean: 8.046275396825331 msec\nrounds: 126"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 110.72873419169933,
            "unit": "iter/sec",
            "range": "stddev: 0.00005101652460229437",
            "extra": "mean: 9.031079487179435 msec\nrounds: 117"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.257765622580294,
            "unit": "iter/sec",
            "range": "stddev: 0.0001304112789091596",
            "extra": "mean: 42.99639166666677 msec\nrounds: 24"
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
        "date": 1639418890350,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 122.27622317146243,
            "unit": "iter/sec",
            "range": "stddev: 0.00006579243890476996",
            "extra": "mean: 8.17820483870969 msec\nrounds: 124"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 109.66976259994553,
            "unit": "iter/sec",
            "range": "stddev: 0.00006750620447358329",
            "extra": "mean: 9.118283620689597 msec\nrounds: 116"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.25272710890107,
            "unit": "iter/sec",
            "range": "stddev: 0.00007640958804308488",
            "extra": "mean: 43.00570833333365 msec\nrounds: 24"
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
        "date": 1639577927703,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 139.72796235982696,
            "unit": "iter/sec",
            "range": "stddev: 0.0001211710783053066",
            "extra": "mean: 7.15676363636366 msec\nrounds: 143"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 124.28522388395461,
            "unit": "iter/sec",
            "range": "stddev: 0.00011609016302908687",
            "extra": "mean: 8.046008759124112 msec\nrounds: 137"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 26.25474846297897,
            "unit": "iter/sec",
            "range": "stddev: 0.00020491237033338767",
            "extra": "mean: 38.08834814814813 msec\nrounds: 27"
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
        "date": 1639665581323,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 78.02410625266387,
            "unit": "iter/sec",
            "range": "stddev: 0.0006323759666992943",
            "extra": "mean: 12.816551807228915 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.19559781192274,
            "unit": "iter/sec",
            "range": "stddev: 0.0006212483354510216",
            "extra": "mean: 14.245907594936813 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.162815878851358,
            "unit": "iter/sec",
            "range": "stddev: 0.0023845608466676466",
            "extra": "mean: 55.0575421052631 msec\nrounds: 19"
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
        "date": 1639668049722,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 123.55890774716295,
            "unit": "iter/sec",
            "range": "stddev: 0.00006797483797277155",
            "extra": "mean: 8.093305600000022 msec\nrounds: 125"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 110.43949633548439,
            "unit": "iter/sec",
            "range": "stddev: 0.000040658151512485707",
            "extra": "mean: 9.054731623931703 msec\nrounds: 117"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.151839312344137,
            "unit": "iter/sec",
            "range": "stddev: 0.0004096964627332218",
            "extra": "mean: 43.19311249999987 msec\nrounds: 24"
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
        "date": 1639668880628,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 124.16850217605369,
            "unit": "iter/sec",
            "range": "stddev: 0.00006328311324691156",
            "extra": "mean: 8.053572222222176 msec\nrounds: 126"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 111.3355479274316,
            "unit": "iter/sec",
            "range": "stddev: 0.000037132900450952675",
            "extra": "mean: 8.98185726495727 msec\nrounds: 117"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.429761772039644,
            "unit": "iter/sec",
            "range": "stddev: 0.0005345615960088986",
            "extra": "mean: 42.680758333333515 msec\nrounds: 24"
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
        "date": 1639751074289,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 90.09104396573053,
            "unit": "iter/sec",
            "range": "stddev: 0.0008586382309615476",
            "extra": "mean: 11.099882474226705 msec\nrounds: 97"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 81.09532048609019,
            "unit": "iter/sec",
            "range": "stddev: 0.0008071878451924451",
            "extra": "mean: 12.331167741935545 msec\nrounds: 93"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.91335981620543,
            "unit": "iter/sec",
            "range": "stddev: 0.002011968100038215",
            "extra": "mean: 50.21754285714273 msec\nrounds: 21"
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
        "date": 1640010906018,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 117.38034238196748,
            "unit": "iter/sec",
            "range": "stddev: 0.00033397307134607217",
            "extra": "mean: 8.519314049586761 msec\nrounds: 121"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 107.0895438614817,
            "unit": "iter/sec",
            "range": "stddev: 0.00005703824703431963",
            "extra": "mean: 9.337979824561408 msec\nrounds: 114"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.249904602735274,
            "unit": "iter/sec",
            "range": "stddev: 0.0005675650971889597",
            "extra": "mean: 43.010929166666486 msec\nrounds: 24"
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
        "date": 1640011397401,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 123.41760122588242,
            "unit": "iter/sec",
            "range": "stddev: 0.00009747115090153372",
            "extra": "mean: 8.102571999999995 msec\nrounds: 125"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 111.42776490379671,
            "unit": "iter/sec",
            "range": "stddev: 0.000042309275190707615",
            "extra": "mean: 8.974423931623946 msec\nrounds: 117"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.37136406089913,
            "unit": "iter/sec",
            "range": "stddev: 0.00042896781725752076",
            "extra": "mean: 42.78740416666671 msec\nrounds: 24"
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
        "date": 1640724323652,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 125.30933893008891,
            "unit": "iter/sec",
            "range": "stddev: 0.00005930540924781898",
            "extra": "mean: 7.980251181102377 msec\nrounds: 127"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 110.44760733666641,
            "unit": "iter/sec",
            "range": "stddev: 0.00022240876083577096",
            "extra": "mean: 9.054066666666666 msec\nrounds: 117"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.664349598169366,
            "unit": "iter/sec",
            "range": "stddev: 0.000055705178252146594",
            "extra": "mean: 42.25765833333354 msec\nrounds: 24"
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
        "date": 1640787695622,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 124.09603181270742,
            "unit": "iter/sec",
            "range": "stddev: 0.00005457075068061868",
            "extra": "mean: 8.05827539682538 msec\nrounds: 126"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 110.2011925276052,
            "unit": "iter/sec",
            "range": "stddev: 0.0002426160085695368",
            "extra": "mean: 9.074311965812 msec\nrounds: 117"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.384407803026146,
            "unit": "iter/sec",
            "range": "stddev: 0.0002438804087046085",
            "extra": "mean: 42.76353749999995 msec\nrounds: 24"
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
        "date": 1640792865328,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 83.04410767231138,
            "unit": "iter/sec",
            "range": "stddev: 0.0006707304488077899",
            "extra": "mean: 12.041793548387066 msec\nrounds: 93"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 75.73507198618626,
            "unit": "iter/sec",
            "range": "stddev: 0.0007566218675877661",
            "extra": "mean: 13.203922222222166 msec\nrounds: 90"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.892809441162157,
            "unit": "iter/sec",
            "range": "stddev: 0.0016515833483577956",
            "extra": "mean: 47.863357142857055 msec\nrounds: 21"
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
        "date": 1640874606896,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 85.64674198891923,
            "unit": "iter/sec",
            "range": "stddev: 0.0010549632600683379",
            "extra": "mean: 11.675867368421061 msec\nrounds: 95"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 75.76805445399624,
            "unit": "iter/sec",
            "range": "stddev: 0.001118840498272882",
            "extra": "mean: 13.198174444444335 msec\nrounds: 90"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.933185073871996,
            "unit": "iter/sec",
            "range": "stddev: 0.002567180047665463",
            "extra": "mean: 52.81731500000024 msec\nrounds: 20"
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
        "date": 1640876107122,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 88.02780037585374,
            "unit": "iter/sec",
            "range": "stddev: 0.0010713814144662638",
            "extra": "mean: 11.360047572815448 msec\nrounds: 103"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 82.13302757944888,
            "unit": "iter/sec",
            "range": "stddev: 0.0010817120873302406",
            "extra": "mean: 12.175370000000067 msec\nrounds: 90"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.22721041576308,
            "unit": "iter/sec",
            "range": "stddev: 0.0037157580743850402",
            "extra": "mean: 49.43835454545424 msec\nrounds: 22"
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
        "date": 1641219687159,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 123.96595422645682,
            "unit": "iter/sec",
            "range": "stddev: 0.00006125779292700022",
            "extra": "mean: 8.066730952380956 msec\nrounds: 126"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 109.64641000785002,
            "unit": "iter/sec",
            "range": "stddev: 0.00004426221661449722",
            "extra": "mean: 9.120225641025602 msec\nrounds: 117"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.133871085196,
            "unit": "iter/sec",
            "range": "stddev: 0.00018942958331674413",
            "extra": "mean: 43.22666086956487 msec\nrounds: 23"
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
        "date": 1641221040665,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 107.87574322709519,
            "unit": "iter/sec",
            "range": "stddev: 0.0000687873657409081",
            "extra": "mean: 9.26992454545453 msec\nrounds: 110"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 95.46667680034713,
            "unit": "iter/sec",
            "range": "stddev: 0.00014986168880649992",
            "extra": "mean: 10.474859223300877 msec\nrounds: 103"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.63925066546839,
            "unit": "iter/sec",
            "range": "stddev: 0.00006396675029122626",
            "extra": "mean: 48.45137142857148 msec\nrounds: 21"
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
        "date": 1641445484955,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 97.23951555818579,
            "unit": "iter/sec",
            "range": "stddev: 0.0013365329733421394",
            "extra": "mean: 10.283885046729013 msec\nrounds: 107"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 95.99976508292875,
            "unit": "iter/sec",
            "range": "stddev: 0.00011621035270795698",
            "extra": "mean: 10.416692156862643 msec\nrounds: 102"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.550303865600213,
            "unit": "iter/sec",
            "range": "stddev: 0.00027141933722385595",
            "extra": "mean: 48.66108095238099 msec\nrounds: 21"
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
        "date": 1641480660129,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 106.51403337183268,
            "unit": "iter/sec",
            "range": "stddev: 0.0000839489766733261",
            "extra": "mean: 9.388434259259279 msec\nrounds: 108"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 95.54985208882832,
            "unit": "iter/sec",
            "range": "stddev: 0.00007302689664569128",
            "extra": "mean: 10.465740952381022 msec\nrounds: 105"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.47043396735133,
            "unit": "iter/sec",
            "range": "stddev: 0.00028546668907480623",
            "extra": "mean: 48.85094285714305 msec\nrounds: 21"
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
        "date": 1641494702899,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 81.62298363293962,
            "unit": "iter/sec",
            "range": "stddev: 0.00036557049803661077",
            "extra": "mean: 12.25145119047623 msec\nrounds: 84"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.9692014999102,
            "unit": "iter/sec",
            "range": "stddev: 0.0005967284389205614",
            "extra": "mean: 13.894832499999987 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.255642602943325,
            "unit": "iter/sec",
            "range": "stddev: 0.00211489317362575",
            "extra": "mean: 54.77758421052632 msec\nrounds: 19"
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
        "date": 1641498060256,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 96.96752854308453,
            "unit": "iter/sec",
            "range": "stddev: 0.00007942252843054548",
            "extra": "mean: 10.312730612244913 msec\nrounds: 98"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 86.60997541688803,
            "unit": "iter/sec",
            "range": "stddev: 0.00004719075757330698",
            "extra": "mean: 11.5460141304348 msec\nrounds: 92"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.8931182542436,
            "unit": "iter/sec",
            "range": "stddev: 0.00011222790440152945",
            "extra": "mean: 50.26864 msec\nrounds: 20"
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
        "date": 1641506687411,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 113.0893143692471,
            "unit": "iter/sec",
            "range": "stddev: 0.0000515095168039837",
            "extra": "mean: 8.84256842105265 msec\nrounds: 114"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 101.93588632872098,
            "unit": "iter/sec",
            "range": "stddev: 0.00004570536633016744",
            "extra": "mean: 9.810087850467285 msec\nrounds: 107"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 22.82248669845946,
            "unit": "iter/sec",
            "range": "stddev: 0.00006475088352275644",
            "extra": "mean: 43.81643478260854 msec\nrounds: 23"
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
        "date": 1641512191076,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 101.6276529877277,
            "unit": "iter/sec",
            "range": "stddev: 0.0004294170400016842",
            "extra": "mean: 9.839841525423768 msec\nrounds: 118"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 90.76537007628569,
            "unit": "iter/sec",
            "range": "stddev: 0.00033470727447625423",
            "extra": "mean: 11.017417757009403 msec\nrounds: 107"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.860068573998888,
            "unit": "iter/sec",
            "range": "stddev: 0.0011988368694776594",
            "extra": "mean: 47.93848095238066 msec\nrounds: 21"
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
        "date": 1641519781134,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 96.01381695304693,
            "unit": "iter/sec",
            "range": "stddev: 0.0002381010569052456",
            "extra": "mean: 10.4151676470588 msec\nrounds: 102"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 86.48475433095147,
            "unit": "iter/sec",
            "range": "stddev: 0.00025493314570566774",
            "extra": "mean: 11.562731578947393 msec\nrounds: 95"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.371440295190027,
            "unit": "iter/sec",
            "range": "stddev: 0.0008516316237147504",
            "extra": "mean: 46.79141818181835 msec\nrounds: 22"
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
        "date": 1641521612026,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 92.60204178052925,
            "unit": "iter/sec",
            "range": "stddev: 0.00017675454002222932",
            "extra": "mean: 10.798897959183689 msec\nrounds: 98"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 83.57666060577942,
            "unit": "iter/sec",
            "range": "stddev: 0.00019106146552415505",
            "extra": "mean: 11.965062886597897 msec\nrounds: 97"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.823942839412783,
            "unit": "iter/sec",
            "range": "stddev: 0.0004491963625421008",
            "extra": "mean: 48.02164545454539 msec\nrounds: 22"
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
        "date": 1641524175417,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 122.63912271092507,
            "unit": "iter/sec",
            "range": "stddev: 0.000060001303312188744",
            "extra": "mean: 8.154004838709737 msec\nrounds: 124"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 110.54635056001193,
            "unit": "iter/sec",
            "range": "stddev: 0.00004828403375900006",
            "extra": "mean: 9.04597931034488 msec\nrounds: 116"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 26.807492714071117,
            "unit": "iter/sec",
            "range": "stddev: 0.00007148193145292475",
            "extra": "mean: 37.30300370370352 msec\nrounds: 27"
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
        "date": 1641566082674,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 109.1640435870188,
            "unit": "iter/sec",
            "range": "stddev: 0.00004761176987388354",
            "extra": "mean: 9.1605254545455 msec\nrounds: 110"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 98.18057103726514,
            "unit": "iter/sec",
            "range": "stddev: 0.00003652945737932024",
            "extra": "mean: 10.185314563106818 msec\nrounds: 103"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.836346793817633,
            "unit": "iter/sec",
            "range": "stddev: 0.00016557687512481063",
            "extra": "mean: 41.9527375000001 msec\nrounds: 24"
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
        "date": 1641567875365,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.94415028255582,
            "unit": "iter/sec",
            "range": "stddev: 0.0008114269379777681",
            "extra": "mean: 13.899670731707403 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 65.03626313638729,
            "unit": "iter/sec",
            "range": "stddev: 0.0016052022798542494",
            "extra": "mean: 15.37603717948714 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.956054085034463,
            "unit": "iter/sec",
            "range": "stddev: 0.0014650394021915468",
            "extra": "mean: 52.753594999999805 msec\nrounds: 20"
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
        "date": 1641679827475,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 108.70554523786238,
            "unit": "iter/sec",
            "range": "stddev: 0.000052101840744968465",
            "extra": "mean: 9.1991627272727 msec\nrounds: 110"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 97.65852776071577,
            "unit": "iter/sec",
            "range": "stddev: 0.00006997333278175891",
            "extra": "mean: 10.23976116504862 msec\nrounds: 103"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.683054419317234,
            "unit": "iter/sec",
            "range": "stddev: 0.00006332747646445151",
            "extra": "mean: 42.224283333333204 msec\nrounds: 24"
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
        "date": 1641700618648,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 82.29894983796684,
            "unit": "iter/sec",
            "range": "stddev: 0.0008900472762408985",
            "extra": "mean: 12.150823333333369 msec\nrounds: 90"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.70784204294313,
            "unit": "iter/sec",
            "range": "stddev: 0.0013976479265770645",
            "extra": "mean: 13.945476136363684 msec\nrounds: 88"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.742450072274554,
            "unit": "iter/sec",
            "range": "stddev: 0.0034643894725711554",
            "extra": "mean: 48.210312499999816 msec\nrounds: 24"
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
        "date": 1641709582251,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 90.36506997153977,
            "unit": "iter/sec",
            "range": "stddev: 0.00006387020338021134",
            "extra": "mean: 11.066222826086973 msec\nrounds: 92"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 81.36123784122573,
            "unit": "iter/sec",
            "range": "stddev: 0.00005768541821533604",
            "extra": "mean: 12.290865116278997 msec\nrounds: 86"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.88272769550628,
            "unit": "iter/sec",
            "range": "stddev: 0.00009829938640925942",
            "extra": "mean: 50.294910000000215 msec\nrounds: 20"
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
        "date": 1641827269634,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 68.28760109806471,
            "unit": "iter/sec",
            "range": "stddev: 0.0015219891437865123",
            "extra": "mean: 14.643946835443018 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 64.37832894974133,
            "unit": "iter/sec",
            "range": "stddev: 0.0009329748628713197",
            "extra": "mean: 15.533177333333345 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.288886549072622,
            "unit": "iter/sec",
            "range": "stddev: 0.004663370159153612",
            "extra": "mean: 54.67801428571425 msec\nrounds: 21"
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
        "date": 1641827442273,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 75.11441847465338,
            "unit": "iter/sec",
            "range": "stddev: 0.0012241305930596616",
            "extra": "mean: 13.313023255813933 msec\nrounds: 86"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.65364032495134,
            "unit": "iter/sec",
            "range": "stddev: 0.0013124509925895567",
            "extra": "mean: 14.565870000000015 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.23146920254967,
            "unit": "iter/sec",
            "range": "stddev: 0.0016967223089296025",
            "extra": "mean: 49.42794761904762 msec\nrounds: 21"
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
          "id": "d1d8d1e36a926a83edc1a7c5e7bec6fcb3dbfde4",
          "message": "Merge pull request #403 from TeoZosa/dependabot/pip/sentry-sdk-1.5.2",
          "timestamp": "2022-01-10T15:37:38Z",
          "tree_id": "08000fef30d0a2183e4550db43926d599bf9dda4"
        },
        "date": 1641829157612,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 123.06646583532135,
            "unit": "iter/sec",
            "range": "stddev: 0.00005375961492995859",
            "extra": "mean: 8.12569040000001 msec\nrounds: 125"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 109.74181912580417,
            "unit": "iter/sec",
            "range": "stddev: 0.00006465775844510428",
            "extra": "mean: 9.112296551724144 msec\nrounds: 116"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 26.7469550820552,
            "unit": "iter/sec",
            "range": "stddev: 0.00013863497172290074",
            "extra": "mean: 37.387433333333334 msec\nrounds: 27"
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
          "id": "817a97657d51d44c541ee151e71cccb9bb5a837b",
          "message": "Merge pull request #405 from TeoZosa/dependabot/pip/gitpython-3.1.26",
          "timestamp": "2022-01-10T16:06:45Z",
          "tree_id": "d21b281ff8e5a3b0f22fc95ef53c60b456d6fd0d"
        },
        "date": 1641830965741,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 69.76016287905394,
            "unit": "iter/sec",
            "range": "stddev: 0.002043811357371264",
            "extra": "mean: 14.334828915662671 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 64.3285713826221,
            "unit": "iter/sec",
            "range": "stddev: 0.0014442698507562627",
            "extra": "mean: 15.545192105263242 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.49491739566801,
            "unit": "iter/sec",
            "range": "stddev: 0.0029752235674455497",
            "extra": "mean: 54.06890869565202 msec\nrounds: 23"
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
          "id": "402727a64e3560c9419794a8c99f7b48641eb63c",
          "message": "Merge pull request #401 from TeoZosa/dependabot/pip/tox-gh-actions-2.9.0",
          "timestamp": "2022-01-10T16:43:57Z",
          "tree_id": "21bcf2c6053e9e6fd892df1f531d826865b9ecc1"
        },
        "date": 1641833192173,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 70.39188441908526,
            "unit": "iter/sec",
            "range": "stddev: 0.0011512094376422313",
            "extra": "mean: 14.206183116883166 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 65.17525140692656,
            "unit": "iter/sec",
            "range": "stddev: 0.0013154928577119517",
            "extra": "mean: 15.34324729729733 msec\nrounds: 74"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.248463228479757,
            "unit": "iter/sec",
            "range": "stddev: 0.003234268394011053",
            "extra": "mean: 54.799135000000106 msec\nrounds: 20"
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
          "id": "b783c6adc7660887c254d8793538cb1ca89ab4f5",
          "message": "Merge pull request #404 from TeoZosa/dependabot/pip/rich-11.0.0",
          "timestamp": "2022-01-10T20:36:27Z",
          "tree_id": "d6bed994eb145bd468709fa0c86b3cf384120024"
        },
        "date": 1641847142647,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 66.1017755818281,
            "unit": "iter/sec",
            "range": "stddev: 0.0019075903991426155",
            "extra": "mean: 15.128186666666608 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 62.685280251320265,
            "unit": "iter/sec",
            "range": "stddev: 0.0009984134413796688",
            "extra": "mean: 15.952708450704234 msec\nrounds: 71"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.799980494968807,
            "unit": "iter/sec",
            "range": "stddev: 0.0022209584212953956",
            "extra": "mean: 56.179836842105054 msec\nrounds: 19"
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
          "id": "dceca5bf914e51f092456ab946d5710daeda830d",
          "message": "Merge pull request #402 from TeoZosa/dependabot/pip/mypy-0.931",
          "timestamp": "2022-01-10T20:50:56Z",
          "tree_id": "c15f74c3f0ca2f5170e9e709a09170a8d914b642"
        },
        "date": 1641847989303,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 109.00459186798003,
            "unit": "iter/sec",
            "range": "stddev: 0.00007287268958532872",
            "extra": "mean: 9.17392545454545 msec\nrounds: 110"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 97.96231722537966,
            "unit": "iter/sec",
            "range": "stddev: 0.000043818836629417654",
            "extra": "mean: 10.20800679611654 msec\nrounds: 103"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.499180759810706,
            "unit": "iter/sec",
            "range": "stddev: 0.0006037904698828945",
            "extra": "mean: 42.554675000000096 msec\nrounds: 24"
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
          "id": "590e6dcd1d545b7bb26b12bb64eb321af832003d",
          "message": "Merge pull request #406 from TeoZosa/perf/improve-perf-for-default-json-logging\n\n⚡ Improve JSON-only logging performance",
          "timestamp": "2022-01-11T03:31:15Z",
          "tree_id": "a1c0965db83e7a864fc92fbdcd47762b969f04f4"
        },
        "date": 1641872034165,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)]",
            "value": 118.01227063531215,
            "unit": "iter/sec",
            "range": "stddev: 0.0012163790183341739",
            "extra": "mean: 8.473695104895098 msec\nrounds: 143"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)]",
            "value": 206.10402530860682,
            "unit": "iter/sec",
            "range": "stddev: 0.0005655384320700122",
            "extra": "mean: 4.851918823529355 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)]",
            "value": 113.40079519852162,
            "unit": "iter/sec",
            "range": "stddev: 0.00090958861938475",
            "extra": "mean: 8.818280314960585 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)]",
            "value": 210.1525683209664,
            "unit": "iter/sec",
            "range": "stddev: 0.0008240608480791534",
            "extra": "mean: 4.7584476744186075 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)]",
            "value": 21.671833894061777,
            "unit": "iter/sec",
            "range": "stddev: 0.00227707103208197",
            "extra": "mean: 46.14284166666701 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)]",
            "value": 167.0755143733013,
            "unit": "iter/sec",
            "range": "stddev: 0.0013321283285641092",
            "extra": "mean: 5.985317499999869 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1035.579182847603,
            "unit": "iter/sec",
            "range": "stddev: 0.0003524357973667692",
            "extra": "mean: 965.6432038834841 usec\nrounds: 1236"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 887.1249994738988,
            "unit": "iter/sec",
            "range": "stddev: 0.000288371158366984",
            "extra": "mean: 1.1272368613138404 msec\nrounds: 1096"
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
          "id": "c45dba8f9e61490723081853b07497d24835b1e1",
          "message": ":bookmark: Bump version number to `0.16.1`",
          "timestamp": "2022-01-11T08:14:18Z",
          "tree_id": "17442a7c1e60c3535f4b5cb02613662b737bb8e6"
        },
        "date": 1641889868968,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)]",
            "value": 188.1576170610234,
            "unit": "iter/sec",
            "range": "stddev: 0.00001354653377354463",
            "extra": "mean: 5.314693157894742 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)]",
            "value": 350.47619348496994,
            "unit": "iter/sec",
            "range": "stddev: 0.000008560137173912778",
            "extra": "mean: 2.8532608450704506 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)]",
            "value": 170.9513869592358,
            "unit": "iter/sec",
            "range": "stddev: 0.000024609359001715313",
            "extra": "mean: 5.849616184971081 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)]",
            "value": 332.43378334578006,
            "unit": "iter/sec",
            "range": "stddev: 0.000010815513023501592",
            "extra": "mean: 3.008117857142855 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)]",
            "value": 26.453209514024348,
            "unit": "iter/sec",
            "range": "stddev: 0.0002860230591580861",
            "extra": "mean: 37.802596296296045 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)]",
            "value": 263.8967691396454,
            "unit": "iter/sec",
            "range": "stddev: 0.000009511509517738389",
            "extra": "mean: 3.789360526315626 msec\nrounds: 266"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1465.4111440149145,
            "unit": "iter/sec",
            "range": "stddev: 0.0000053444379768762926",
            "extra": "mean: 682.4023442733026 usec\nrounds: 1493"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1219.1191197960554,
            "unit": "iter/sec",
            "range": "stddev: 0.0000057640585027288744",
            "extra": "mean: 820.2643890674839 usec\nrounds: 1244"
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
          "id": "20f3d86b28a503cbad7fb04fba8ef61810743b28",
          "message": "Merge pull request #407 from TeoZosa/feat_and_perf/make-sentry-integration-opt-in\n\n💥 ✨ ⚡ Make Sentry integration opt-in",
          "timestamp": "2022-01-11T09:13:35Z",
          "tree_id": "522dbf40e1d8e2775b1ce9487077f9d3c6442d98"
        },
        "date": 1641892561658,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 211.96943344244454,
            "unit": "iter/sec",
            "range": "stddev: 0.00012710450975477564",
            "extra": "mean: 4.717661333333361 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 272.5971485414194,
            "unit": "iter/sec",
            "range": "stddev: 0.00006458171629105704",
            "extra": "mean: 3.6684169491525562 msec\nrounds: 295"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 391.7953977901486,
            "unit": "iter/sec",
            "range": "stddev: 0.00008366960800042488",
            "extra": "mean: 2.552352594339596 msec\nrounds: 424"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 712.315371611878,
            "unit": "iter/sec",
            "range": "stddev: 0.000027198332607945034",
            "extra": "mean: 1.4038725540024901 msec\nrounds: 787"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 190.03038585869945,
            "unit": "iter/sec",
            "range": "stddev: 0.000034826200334678955",
            "extra": "mean: 5.262316315789456 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 247.47889571537885,
            "unit": "iter/sec",
            "range": "stddev: 0.000019604593562376937",
            "extra": "mean: 4.0407485943774475 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 374.3429296471792,
            "unit": "iter/sec",
            "range": "stddev: 0.00004206976900538257",
            "extra": "mean: 2.6713473684210007 msec\nrounds: 399"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 658.9390043039899,
            "unit": "iter/sec",
            "range": "stddev: 0.000036253375873890166",
            "extra": "mean: 1.517591147994432 msec\nrounds: 723"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 29.747739171822875,
            "unit": "iter/sec",
            "range": "stddev: 0.00009747219232141464",
            "extra": "mean: 33.61600000000008 msec\nrounds: 30"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 31.47783311318557,
            "unit": "iter/sec",
            "range": "stddev: 0.00007082250758399563",
            "extra": "mean: 31.768387499999662 msec\nrounds: 32"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 298.31690185112916,
            "unit": "iter/sec",
            "range": "stddev: 0.000036402761412364326",
            "extra": "mean: 3.352139935064879 msec\nrounds: 308"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 450.75276165584495,
            "unit": "iter/sec",
            "range": "stddev: 0.000018466160643783028",
            "extra": "mean: 2.2185110887096724 msec\nrounds: 496"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1622.421513623568,
            "unit": "iter/sec",
            "range": "stddev: 0.000006083980510310108",
            "extra": "mean: 616.3626354821738 usec\nrounds: 1753"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1374.914879777695,
            "unit": "iter/sec",
            "range": "stddev: 0.000006019632383009603",
            "extra": "mean: 727.317752326374 usec\nrounds: 1397"
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
          "id": "1aaa6b5ba961c55f8fe88b707c1a9bd05359de73",
          "message": "Merge pull request #408 from TeoZosa/dependabot/pip/dot-github/workflows/tox-gh-actions-2.9.1",
          "timestamp": "2022-01-11T14:11:00Z",
          "tree_id": "1dedf895825787161142ea470f987716779393dd"
        },
        "date": 1641910659597,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 186.36598035742165,
            "unit": "iter/sec",
            "range": "stddev: 0.00001551022847648423",
            "extra": "mean: 5.365786170212782 msec\nrounds: 188"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 238.8470801885935,
            "unit": "iter/sec",
            "range": "stddev: 0.00001897389832827894",
            "extra": "mean: 4.1867792531120775 msec\nrounds: 241"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 346.0211023581697,
            "unit": "iter/sec",
            "range": "stddev: 0.00001446036723010357",
            "extra": "mean: 2.88999715099714 msec\nrounds: 351"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 629.5828631074834,
            "unit": "iter/sec",
            "range": "stddev: 0.000009658100488189696",
            "extra": "mean: 1.5883532710280877 msec\nrounds: 642"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 169.65320419173366,
            "unit": "iter/sec",
            "range": "stddev: 0.000027914432910920295",
            "extra": "mean: 5.894377325581481 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 220.5064875094466,
            "unit": "iter/sec",
            "range": "stddev: 0.000010836507491859203",
            "extra": "mean: 4.535013963964029 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 331.75617500928445,
            "unit": "iter/sec",
            "range": "stddev: 0.00000993355723525314",
            "extra": "mean: 3.014261904761876 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 582.998825405584,
            "unit": "iter/sec",
            "range": "stddev: 0.00001044892133641538",
            "extra": "mean: 1.7152693220339066 msec\nrounds: 590"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.070625324002894,
            "unit": "iter/sec",
            "range": "stddev: 0.0002226133908474682",
            "extra": "mean: 38.3573461538459 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.636562619614608,
            "unit": "iter/sec",
            "range": "stddev: 0.000025478872874392343",
            "extra": "mean: 36.183949999999854 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 261.3589818874096,
            "unit": "iter/sec",
            "range": "stddev: 0.00006913389445237812",
            "extra": "mean: 3.826155094339893 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 404.39361771719183,
            "unit": "iter/sec",
            "range": "stddev: 0.000010013384596611508",
            "extra": "mean: 2.472838235294156 msec\nrounds: 408"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1450.9893189478762,
            "unit": "iter/sec",
            "range": "stddev: 0.000006496291911407966",
            "extra": "mean: 689.1849491525602 usec\nrounds: 1475"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1229.6561209155304,
            "unit": "iter/sec",
            "range": "stddev: 0.00000599263175394078",
            "extra": "mean: 813.2354916067575 usec\nrounds: 1251"
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
          "id": "f1fdacf014859d56ff1364cb7ae900ac5f555439",
          "message": "Merge pull request #409 from TeoZosa/dependabot/pip/tox-gh-actions-2.9.1",
          "timestamp": "2022-01-11T15:23:55Z",
          "tree_id": "5d47f0cafda9548c3698d048202d657e1c345529"
        },
        "date": 1641914850866,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.29198869678098,
            "unit": "iter/sec",
            "range": "stddev: 0.0008963034848534497",
            "extra": "mean: 8.985372727272724 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 133.25310890481418,
            "unit": "iter/sec",
            "range": "stddev: 0.0011690288228846618",
            "extra": "mean: 7.504515340909032 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.3153826239309,
            "unit": "iter/sec",
            "range": "stddev: 0.0010380951338956168",
            "extra": "mean: 4.992127848101337 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 375.8458460930433,
            "unit": "iter/sec",
            "range": "stddev: 0.0006988367454544192",
            "extra": "mean: 2.660665297741359 msec\nrounds: 487"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 103.09020245443018,
            "unit": "iter/sec",
            "range": "stddev: 0.001033196145593113",
            "extra": "mean: 9.700242857142882 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 128.5029515180977,
            "unit": "iter/sec",
            "range": "stddev: 0.0016260680692317063",
            "extra": "mean: 7.781922424242258 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 194.75667492082394,
            "unit": "iter/sec",
            "range": "stddev: 0.0006599207668698501",
            "extra": "mean: 5.134612204724374 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 340.32930263322885,
            "unit": "iter/sec",
            "range": "stddev: 0.0009318583450564723",
            "extra": "mean: 2.9383305882352864 msec\nrounds: 510"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.741428313393456,
            "unit": "iter/sec",
            "range": "stddev: 0.004420636650032603",
            "extra": "mean: 56.36524761904736 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.607132733894602,
            "unit": "iter/sec",
            "range": "stddev: 0.002993786064025784",
            "extra": "mean: 51.00184782608793 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 150.74321976675435,
            "unit": "iter/sec",
            "range": "stddev: 0.0009622435149809056",
            "extra": "mean: 6.63379753694597 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 239.73062438861677,
            "unit": "iter/sec",
            "range": "stddev: 0.0006290680795424012",
            "extra": "mean: 4.17134858156021 msec\nrounds: 282"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 804.3714178205361,
            "unit": "iter/sec",
            "range": "stddev: 0.0005954069675955208",
            "extra": "mean: 1.2432067796609734 msec\nrounds: 1121"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 723.1412563345199,
            "unit": "iter/sec",
            "range": "stddev: 0.0006783518204591511",
            "extra": "mean: 1.3828556886227596 msec\nrounds: 1002"
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
          "id": "d50fe8319858673f32ef03adb1309f323b3dd99f",
          "message": "Merge pull request #410 from TeoZosa/perf/make-cloud-logging-mode-a-logger-configuration-time-option\n\n⚡  Make Cloud Logging mode a logger configuration-time option",
          "timestamp": "2022-01-11T22:21:05Z",
          "tree_id": "4cf3b14fb57f6546638edb620383fd7565db1d1b"
        },
        "date": 1641939839173,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 176.96391853171295,
            "unit": "iter/sec",
            "range": "stddev: 0.0000864646994829072",
            "extra": "mean: 5.650869444444373 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 233.11526309785583,
            "unit": "iter/sec",
            "range": "stddev: 0.00001190062507817003",
            "extra": "mean: 4.289723404255282 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 356.1293963113526,
            "unit": "iter/sec",
            "range": "stddev: 0.000012085572626580409",
            "extra": "mean: 2.807968144044284 msec\nrounds: 361"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 734.9960119116466,
            "unit": "iter/sec",
            "range": "stddev: 0.000010356197752213824",
            "extra": "mean: 1.3605515999999866 msec\nrounds: 750"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 162.6438116296825,
            "unit": "iter/sec",
            "range": "stddev: 0.00002047421282924412",
            "extra": "mean: 6.148404848484871 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 212.73040367781337,
            "unit": "iter/sec",
            "range": "stddev: 0.000014075878393544577",
            "extra": "mean: 4.700785514018627 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 336.4254216860788,
            "unit": "iter/sec",
            "range": "stddev: 0.000016465569405594644",
            "extra": "mean: 2.9724269794721634 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 656.7888765921557,
            "unit": "iter/sec",
            "range": "stddev: 0.000009538501830750395",
            "extra": "mean: 1.5225592814370503 msec\nrounds: 668"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.203984975032974,
            "unit": "iter/sec",
            "range": "stddev: 0.0009156011045157959",
            "extra": "mean: 43.09604583333338 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.070541410237773,
            "unit": "iter/sec",
            "range": "stddev: 0.0024927610881305884",
            "extra": "mean: 43.345319999999674 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 232.77983765112648,
            "unit": "iter/sec",
            "range": "stddev: 0.0006586966586880345",
            "extra": "mean: 4.295904705882334 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 405.6408856511538,
            "unit": "iter/sec",
            "range": "stddev: 0.00016831024141630488",
            "extra": "mean: 2.4652347319347583 msec\nrounds: 429"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1299.590693267758,
            "unit": "iter/sec",
            "range": "stddev: 0.000006578966019354119",
            "extra": "mean: 769.4730388423668 usec\nrounds: 1313"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1080.2802708443594,
            "unit": "iter/sec",
            "range": "stddev: 0.000006576736659092768",
            "extra": "mean: 925.6857011915885 usec\nrounds: 1091"
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
          "id": "eed196312eabc3a79c04bec3ada421c6b4a7b9e5",
          "message": ":bento: Update `.mutmut-cache`",
          "timestamp": "2022-01-11T23:38:54Z",
          "tree_id": "8c11c50884ab7c6dea0427dcbbce38bbc2646540"
        },
        "date": 1641944503773,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 231.87822152179046,
            "unit": "iter/sec",
            "range": "stddev: 0.000014418491183517208",
            "extra": "mean: 4.312608547008484 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 302.20655079457015,
            "unit": "iter/sec",
            "range": "stddev: 0.00008174724801328627",
            "extra": "mean: 3.3089951140065343 msec\nrounds: 307"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 462.1633848293268,
            "unit": "iter/sec",
            "range": "stddev: 0.0000125437692366036",
            "extra": "mean: 2.163736965811976 msec\nrounds: 468"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 931.6778991044748,
            "unit": "iter/sec",
            "range": "stddev: 0.000025387000920357438",
            "extra": "mean: 1.0733323189926434 msec\nrounds: 953"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 211.87105527575548,
            "unit": "iter/sec",
            "range": "stddev: 0.00001872494967938929",
            "extra": "mean: 4.719851886792535 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 276.4304808439049,
            "unit": "iter/sec",
            "range": "stddev: 0.000011960013377651658",
            "extra": "mean: 3.617546071428647 msec\nrounds: 280"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 439.3743111892295,
            "unit": "iter/sec",
            "range": "stddev: 0.000012805297136408469",
            "extra": "mean: 2.2759637387387457 msec\nrounds: 444"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 836.8552219815182,
            "unit": "iter/sec",
            "range": "stddev: 0.000009167880470535428",
            "extra": "mean: 1.1949498237367573 msec\nrounds: 851"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 30.01875571857309,
            "unit": "iter/sec",
            "range": "stddev: 0.00023466406353027828",
            "extra": "mean: 33.31250666666653 msec\nrounds: 30"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 31.724255939797253,
            "unit": "iter/sec",
            "range": "stddev: 0.0000414422702582231",
            "extra": "mean: 31.521621874999628 msec\nrounds: 32"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 335.59093912358736,
            "unit": "iter/sec",
            "range": "stddev: 0.000015473151829981915",
            "extra": "mean: 2.9798182352942852 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 549.0993932007664,
            "unit": "iter/sec",
            "range": "stddev: 0.000011484976475851785",
            "extra": "mean: 1.8211639138241982 msec\nrounds: 557"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1648.4233923293962,
            "unit": "iter/sec",
            "range": "stddev: 0.000005708193285334826",
            "extra": "mean: 606.6402628434522 usec\nrounds: 1674"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1384.4091028698847,
            "unit": "iter/sec",
            "range": "stddev: 0.0000063482997084235445",
            "extra": "mean: 722.3298358317616 usec\nrounds: 1401"
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
          "id": "66974ac83e46d35a72c4c7efee7045bba6b5cb1f",
          "message": ":bento: Update `.mutmut-cache`",
          "timestamp": "2022-01-12T01:22:19Z",
          "tree_id": "0fc04ad99adfb211e92f89623bd4e9213057c9fb"
        },
        "date": 1641950739823,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 140.4223018699824,
            "unit": "iter/sec",
            "range": "stddev: 0.0004122298077356497",
            "extra": "mean: 7.121375925925957 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 178.64760031204972,
            "unit": "iter/sec",
            "range": "stddev: 0.0006576270647811741",
            "extra": "mean: 5.59761227272724 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 261.0309555192384,
            "unit": "iter/sec",
            "range": "stddev: 0.00045676839095182503",
            "extra": "mean: 3.8309632587859817 msec\nrounds: 313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 528.3785230197399,
            "unit": "iter/sec",
            "range": "stddev: 0.0002922954243670972",
            "extra": "mean: 1.8925826021180665 msec\nrounds: 661"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.7257162517886,
            "unit": "iter/sec",
            "range": "stddev: 0.0008162883902395225",
            "extra": "mean: 8.017592763157692 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 157.32112627871217,
            "unit": "iter/sec",
            "range": "stddev: 0.0005827178253189493",
            "extra": "mean: 6.356425380710705 msec\nrounds: 197"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 221.69549926113538,
            "unit": "iter/sec",
            "range": "stddev: 0.0005986209950598296",
            "extra": "mean: 4.510691481481539 msec\nrounds: 270"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 451.8470033451569,
            "unit": "iter/sec",
            "range": "stddev: 0.0004104181139226589",
            "extra": "mean: 2.2131385017421925 msec\nrounds: 574"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.794424108672438,
            "unit": "iter/sec",
            "range": "stddev: 0.004663060055467002",
            "extra": "mean: 50.519277272728274 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.384580593623994,
            "unit": "iter/sec",
            "range": "stddev: 0.0022433380720451243",
            "extra": "mean: 49.05668750000114 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 184.61252064439873,
            "unit": "iter/sec",
            "range": "stddev: 0.0003830925656024576",
            "extra": "mean: 5.416750697674528 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 309.6762441129279,
            "unit": "iter/sec",
            "range": "stddev: 0.000404137660817882",
            "extra": "mean: 3.229178921568603 msec\nrounds: 408"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 758.518874581512,
            "unit": "iter/sec",
            "range": "stddev: 0.00031746020607585976",
            "extra": "mean: 1.3183587561373702 msec\nrounds: 1222"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 657.004241899506,
            "unit": "iter/sec",
            "range": "stddev: 0.00040024424811840875",
            "extra": "mean: 1.522060188087732 msec\nrounds: 957"
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
          "id": "307743181ca10a177ae0922b61186eb7acf60f97",
          "message": ":bookmark: Bump version number to `0.17.0`",
          "timestamp": "2022-01-12T03:33:21Z",
          "tree_id": "5983054aa39534315fe2a94c66194c3c7091b6e2"
        },
        "date": 1641958565534,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 203.77407478866587,
            "unit": "iter/sec",
            "range": "stddev: 0.000012861564196149846",
            "extra": "mean: 4.90739560975605 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 267.1548277994181,
            "unit": "iter/sec",
            "range": "stddev: 0.00001099816031704812",
            "extra": "mean: 3.74314777777779 msec\nrounds: 270"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 403.7821187747811,
            "unit": "iter/sec",
            "range": "stddev: 0.000012879075909339236",
            "extra": "mean: 2.476583170731672 msec\nrounds: 410"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 828.9131165800486,
            "unit": "iter/sec",
            "range": "stddev: 0.000010097077862119486",
            "extra": "mean: 1.2063990543735463 msec\nrounds: 846"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 187.43931278366992,
            "unit": "iter/sec",
            "range": "stddev: 0.00001861260725031813",
            "extra": "mean: 5.335060106382986 msec\nrounds: 188"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 244.34774498320138,
            "unit": "iter/sec",
            "range": "stddev: 0.000011041124695610377",
            "extra": "mean: 4.092528048780434 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 384.3632319717081,
            "unit": "iter/sec",
            "range": "stddev: 0.00001892734288938774",
            "extra": "mean: 2.6017056701032404 msec\nrounds: 388"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 743.2946638262454,
            "unit": "iter/sec",
            "range": "stddev: 0.00000924910346482131",
            "extra": "mean: 1.3453614678898902 msec\nrounds: 763"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.974409377823108,
            "unit": "iter/sec",
            "range": "stddev: 0.00018898023826786897",
            "extra": "mean: 37.07217407407429 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.596796606565817,
            "unit": "iter/sec",
            "range": "stddev: 0.0000617219723602551",
            "extra": "mean: 34.96895172413823 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 294.86709607761486,
            "unit": "iter/sec",
            "range": "stddev: 0.000012719618721877685",
            "extra": "mean: 3.3913583892615136 msec\nrounds: 298"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 476.86727635687527,
            "unit": "iter/sec",
            "range": "stddev: 0.000012268128542602684",
            "extra": "mean: 2.0970195473249995 msec\nrounds: 486"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1441.1811001848896,
            "unit": "iter/sec",
            "range": "stddev: 0.000006159779029518515",
            "extra": "mean: 693.8753220339273 usec\nrounds: 1475"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1222.069373427454,
            "unit": "iter/sec",
            "range": "stddev: 0.000006480371563829046",
            "extra": "mean: 818.2841512469696 usec\nrounds: 1243"
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
          "id": "285367a1132fdc775a747d977d8ce5ef2b16694d",
          "message": "Merge pull request #411 from TeoZosa/fix/only-create-logdir-on-local-logfile-configuration\n\n🐛  Fix log output directory creation on library import",
          "timestamp": "2022-01-12T07:19:03Z",
          "tree_id": "2e7522ae348c7406c1ac615ee670e1faeeef17cb"
        },
        "date": 1641972131777,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 125.80080072209815,
            "unit": "iter/sec",
            "range": "stddev: 0.0008075277518245948",
            "extra": "mean: 7.949074999999903 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 161.59369084366102,
            "unit": "iter/sec",
            "range": "stddev: 0.0008335900619664892",
            "extra": "mean: 6.188360416666774 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 247.02311327275197,
            "unit": "iter/sec",
            "range": "stddev: 0.000528593842899973",
            "extra": "mean: 4.048204181184634 msec\nrounds: 287"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 515.545121929606,
            "unit": "iter/sec",
            "range": "stddev: 0.0002515646905872294",
            "extra": "mean: 1.9396944272446104 msec\nrounds: 646"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.42379550850615,
            "unit": "iter/sec",
            "range": "stddev: 0.0007966652574808765",
            "extra": "mean: 8.816492125984318 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 152.4648572885135,
            "unit": "iter/sec",
            "range": "stddev: 0.0008809324462070453",
            "extra": "mean: 6.5588885057470785 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 231.622312261875,
            "unit": "iter/sec",
            "range": "stddev: 0.0007073455783675741",
            "extra": "mean: 4.317373357664213 msec\nrounds: 274"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 474.51450721379916,
            "unit": "iter/sec",
            "range": "stddev: 0.00031509029318665683",
            "extra": "mean: 2.1074171280277336 msec\nrounds: 578"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.765520686876055,
            "unit": "iter/sec",
            "range": "stddev: 0.0014372871249765085",
            "extra": "mean: 50.59315238095304 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.659940478711224,
            "unit": "iter/sec",
            "range": "stddev: 0.002359319161629838",
            "extra": "mean: 48.4028500000006 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 173.72875481325502,
            "unit": "iter/sec",
            "range": "stddev: 0.0011827110719661905",
            "extra": "mean: 5.756099507389681 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 301.4927766372947,
            "unit": "iter/sec",
            "range": "stddev: 0.00038837192192788927",
            "extra": "mean: 3.316829050279475 msec\nrounds: 358"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 884.395998333495,
            "unit": "iter/sec",
            "range": "stddev: 0.00027221738210405163",
            "extra": "mean: 1.130715202108945 msec\nrounds: 1138"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 761.1362389661956,
            "unit": "iter/sec",
            "range": "stddev: 0.0003881233327210434",
            "extra": "mean: 1.3138252375924688 msec\nrounds: 947"
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
          "id": "3078127e2fcba3f98928c96cd696d8b15eda4c78",
          "message": "Merge pull request #412 from TeoZosa/feat/make-local-logs-directory-fallback-to-tmp-or-abort\n\n✨ Make local log file output directory fallback to temp or abort",
          "timestamp": "2022-01-13T07:34:05Z",
          "tree_id": "ec8e4052faf4ddf5af3d254cdbccc39c76f4feb2"
        },
        "date": 1642059401360,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 194.868017038342,
            "unit": "iter/sec",
            "range": "stddev: 0.0007280515872831216",
            "extra": "mean: 5.131678431372559 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 252.4051313271667,
            "unit": "iter/sec",
            "range": "stddev: 0.0005077702370269542",
            "extra": "mean: 3.9618845890411123 msec\nrounds: 292"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 381.95962999223565,
            "unit": "iter/sec",
            "range": "stddev: 0.0003079885081343603",
            "extra": "mean: 2.6180777272727163 msec\nrounds: 440"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 828.0603429827651,
            "unit": "iter/sec",
            "range": "stddev: 0.00016241146336348102",
            "extra": "mean: 1.207641458106651 msec\nrounds: 919"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 169.85674498966569,
            "unit": "iter/sec",
            "range": "stddev: 0.000663806379013526",
            "extra": "mean: 5.887314042552984 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 228.60840028037128,
            "unit": "iter/sec",
            "range": "stddev: 0.00022776724533813742",
            "extra": "mean: 4.374292452830141 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 388.61696081358406,
            "unit": "iter/sec",
            "range": "stddev: 0.00024450417305696637",
            "extra": "mean: 2.5732278846153878 msec\nrounds: 416"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 749.5505605092901,
            "unit": "iter/sec",
            "range": "stddev: 0.0001300333020977247",
            "extra": "mean: 1.334132815964462 msec\nrounds: 902"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.402830931657935,
            "unit": "iter/sec",
            "range": "stddev: 0.0017954082473800501",
            "extra": "mean: 36.49257999999993 msec\nrounds: 30"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.51748977647993,
            "unit": "iter/sec",
            "range": "stddev: 0.004313049322534818",
            "extra": "mean: 35.06619999999998 msec\nrounds: 30"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 293.47960101448666,
            "unit": "iter/sec",
            "range": "stddev: 0.0003026528911508343",
            "extra": "mean: 3.407391847826038 msec\nrounds: 368"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 498.65013472025703,
            "unit": "iter/sec",
            "range": "stddev: 0.0001995176095270435",
            "extra": "mean: 2.0054140776699088 msec\nrounds: 618"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1552.1643322416257,
            "unit": "iter/sec",
            "range": "stddev: 0.00007681504204339738",
            "extra": "mean: 644.2616797899269 usec\nrounds: 1905"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1281.7061756503724,
            "unit": "iter/sec",
            "range": "stddev: 0.00009339464268674229",
            "extra": "mean: 780.2100192679285 usec\nrounds: 1557"
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
          "id": "3120f968e80fd003cdaa66e395c540734077e026",
          "message": ":bookmark: Bump version number to `0.17.1`",
          "timestamp": "2022-01-13T07:40:22Z",
          "tree_id": "85368f943362aedf74cb7e7a68e1545a9bb57e1a"
        },
        "date": 1642059801319,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 183.6755923429023,
            "unit": "iter/sec",
            "range": "stddev: 0.00025047597791775605",
            "extra": "mean: 5.44438151658773 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 233.70927060488887,
            "unit": "iter/sec",
            "range": "stddev: 0.00008718638986626206",
            "extra": "mean: 4.278820422535183 msec\nrounds: 284"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 357.25183396280204,
            "unit": "iter/sec",
            "range": "stddev: 0.00011121948866418932",
            "extra": "mean: 2.799145882352902 msec\nrounds: 425"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 732.0875434467547,
            "unit": "iter/sec",
            "range": "stddev: 0.000058847690785595366",
            "extra": "mean: 1.3659568571429066 msec\nrounds: 1050"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 166.00718435715476,
            "unit": "iter/sec",
            "range": "stddev: 0.00023854966635190433",
            "extra": "mean: 6.023835678391837 msec\nrounds: 199"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 214.11997159002624,
            "unit": "iter/sec",
            "range": "stddev: 0.0001586608924686575",
            "extra": "mean: 4.670278968253797 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 342.4162383132609,
            "unit": "iter/sec",
            "range": "stddev: 0.0001302902598039949",
            "extra": "mean: 2.9204222466959817 msec\nrounds: 454"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 656.3951007152089,
            "unit": "iter/sec",
            "range": "stddev: 0.00005019207669379913",
            "extra": "mean: 1.5234726750860859 msec\nrounds: 871"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.952061386259107,
            "unit": "iter/sec",
            "range": "stddev: 0.0007952294506407002",
            "extra": "mean: 41.75005999999996 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.82638716483351,
            "unit": "iter/sec",
            "range": "stddev: 0.00006638929014563882",
            "extra": "mean: 40.27972307692424 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 254.83055106958727,
            "unit": "iter/sec",
            "range": "stddev: 0.00001114527036962852",
            "extra": "mean: 3.9241762645913174 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 422.30021401145694,
            "unit": "iter/sec",
            "range": "stddev: 0.00001265941768025023",
            "extra": "mean: 2.3679836448599816 msec\nrounds: 428"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1297.4964678447823,
            "unit": "iter/sec",
            "range": "stddev: 0.0000071157773862716245",
            "extra": "mean: 770.7150075414531 usec\nrounds: 1326"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1078.443587835049,
            "unit": "iter/sec",
            "range": "stddev: 0.0000071714614708661616",
            "extra": "mean: 927.2622242647642 usec\nrounds: 1088"
          }
        ]
      }
    ]
  }
}