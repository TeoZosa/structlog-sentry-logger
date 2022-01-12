window.BENCHMARK_DATA = {
  "lastUpdate": 1641972125979,
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
        "date": 1632258881072,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 75.03119064249404,
            "unit": "iter/sec",
            "range": "stddev: 0.0009057956931253007",
            "extra": "mean: 13.32779063529412 msec\nrounds: 85"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.783141125719585,
            "unit": "iter/sec",
            "range": "stddev: 0.0030281213224347086",
            "extra": "mean: 56.23303515 msec\nrounds: 20"
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
        "date": 1632259113404,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 54.82863138837949,
            "unit": "iter/sec",
            "range": "stddev: 0.002320417854729193",
            "extra": "mean: 18.238646026315777 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.488866074120534,
            "unit": "iter/sec",
            "range": "stddev: 0.005286521206191218",
            "extra": "mean: 74.13521600000017 msec\nrounds: 17"
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
        "date": 1632277217466,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 78.87126657157768,
            "unit": "iter/sec",
            "range": "stddev: 0.0007930368823127015",
            "extra": "mean: 12.678888567010327 msec\nrounds: 97"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.72362378542587,
            "unit": "iter/sec",
            "range": "stddev: 0.0034682472157372885",
            "extra": "mean: 53.40846470000012 msec\nrounds: 20"
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
        "date": 1632278569520,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 94.7408414465271,
            "unit": "iter/sec",
            "range": "stddev: 0.00008471042200257754",
            "extra": "mean: 10.555109968749985 msec\nrounds: 96"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.6217794676477,
            "unit": "iter/sec",
            "range": "stddev: 0.0003917808179141081",
            "extra": "mean: 50.96377735000006 msec\nrounds: 20"
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
        "date": 1632322173113,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 76.91823458054276,
            "unit": "iter/sec",
            "range": "stddev: 0.0008369589901722254",
            "extra": "mean: 13.00081840740739 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.895678829989418,
            "unit": "iter/sec",
            "range": "stddev: 0.0023985580215367206",
            "extra": "mean: 55.87941142105261 msec\nrounds: 19"
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
        "date": 1632323038717,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.25752810529212,
            "unit": "iter/sec",
            "range": "stddev: 0.000708576418836864",
            "extra": "mean: 14.2333501756757 msec\nrounds: 74"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.08040773981179,
            "unit": "iter/sec",
            "range": "stddev: 0.0012942804175196175",
            "extra": "mean: 58.546611722222224 msec\nrounds: 18"
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
        "date": 1632323751141,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 74.98685356260118,
            "unit": "iter/sec",
            "range": "stddev: 0.0005426713588745817",
            "extra": "mean: 13.335670887499917 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.861504289183202,
            "unit": "iter/sec",
            "range": "stddev: 0.001556602700581673",
            "extra": "mean: 55.98632588888903 msec\nrounds: 18"
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
        "date": 1632402878824,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 99.99201859824387,
            "unit": "iter/sec",
            "range": "stddev: 0.00017008519070830868",
            "extra": "mean: 10.000798203883472 msec\nrounds: 103"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.82512479460079,
            "unit": "iter/sec",
            "range": "stddev: 0.00042728288161794837",
            "extra": "mean: 50.44104440000004 msec\nrounds: 20"
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
        "date": 1632404567420,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 103.43517629445626,
            "unit": "iter/sec",
            "range": "stddev: 0.000371037284386924",
            "extra": "mean: 9.667890903508773 msec\nrounds: 114"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.694399892301885,
            "unit": "iter/sec",
            "range": "stddev: 0.0017782893375343344",
            "extra": "mean: 48.32225168181805 msec\nrounds: 22"
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
        "date": 1632432937996,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 102.51909842499326,
            "unit": "iter/sec",
            "range": "stddev: 0.0002378121442387252",
            "extra": "mean: 9.754280084033676 msec\nrounds: 119"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.34121144287408,
            "unit": "iter/sec",
            "range": "stddev: 0.0010048699096176779",
            "extra": "mean: 49.1612804285715 msec\nrounds: 21"
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
        "date": 1632437872555,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 108.65346158157828,
            "unit": "iter/sec",
            "range": "stddev: 0.0004385200120888286",
            "extra": "mean: 9.203572398373966 msec\nrounds: 123"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.557571083684056,
            "unit": "iter/sec",
            "range": "stddev: 0.001191807121449611",
            "extra": "mean: 46.38741517391328 msec\nrounds: 23"
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
        "date": 1632489470030,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 114.83801891802871,
            "unit": "iter/sec",
            "range": "stddev: 0.00014660622891042428",
            "extra": "mean: 8.707917547008533 msec\nrounds: 117"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 22.523967060492293,
            "unit": "iter/sec",
            "range": "stddev: 0.00005141491002071327",
            "extra": "mean: 44.3971524782608 msec\nrounds: 23"
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
        "date": 1632494410912,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.83174909190295,
            "unit": "iter/sec",
            "range": "stddev: 0.0012566541848376771",
            "extra": "mean: 13.730275772151883 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.12454400099533,
            "unit": "iter/sec",
            "range": "stddev: 0.0045321509768313055",
            "extra": "mean: 58.39571552631574 msec\nrounds: 19"
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
        "date": 1632495268603,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 75.41499982733488,
            "unit": "iter/sec",
            "range": "stddev: 0.001268736504936462",
            "extra": "mean: 13.259961576470632 msec\nrounds: 85"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.56445455757339,
            "unit": "iter/sec",
            "range": "stddev: 0.00335319933554228",
            "extra": "mean: 56.93316559999997 msec\nrounds: 20"
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
        "date": 1632508049310,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.49764917799133,
            "unit": "iter/sec",
            "range": "stddev: 0.0005819929695789813",
            "extra": "mean: 13.986473842105339 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.523231958898677,
            "unit": "iter/sec",
            "range": "stddev: 0.002181325438755586",
            "extra": "mean: 53.986259105263414 msec\nrounds: 19"
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
        "date": 1632509435504,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 61.27212440274397,
            "unit": "iter/sec",
            "range": "stddev: 0.001365386971392804",
            "extra": "mean: 16.32063535820894 msec\nrounds: 67"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 15.805869616790197,
            "unit": "iter/sec",
            "range": "stddev: 0.0010808636948288254",
            "extra": "mean: 63.26763564705885 msec\nrounds: 17"
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
        "date": 1632515029015,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 73.93330969707222,
            "unit": "iter/sec",
            "range": "stddev: 0.0007040051459111337",
            "extra": "mean: 13.525703151898803 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.51874736763926,
            "unit": "iter/sec",
            "range": "stddev: 0.0013778471344094508",
            "extra": "mean: 53.999332684210515 msec\nrounds: 19"
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
        "date": 1632515320514,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 91.68349480218679,
            "unit": "iter/sec",
            "range": "stddev: 0.0000793563306370362",
            "extra": "mean: 10.90708858947367 msec\nrounds: 95"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.277852289407836,
            "unit": "iter/sec",
            "range": "stddev: 0.000050825023847419674",
            "extra": "mean: 51.87299835000019 msec\nrounds: 20"
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
        "date": 1632515775185,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 66.93235234625207,
            "unit": "iter/sec",
            "range": "stddev: 0.0005583251499131708",
            "extra": "mean: 14.940458013888943 msec\nrounds: 72"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 16.421841355909308,
            "unit": "iter/sec",
            "range": "stddev: 0.0015599741788050773",
            "extra": "mean: 60.894511055555625 msec\nrounds: 18"
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
        "date": 1632516684253,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.49474571646455,
            "unit": "iter/sec",
            "range": "stddev: 0.0007979368632322543",
            "extra": "mean: 14.815968108108033 msec\nrounds: 74"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 15.976099527890659,
            "unit": "iter/sec",
            "range": "stddev: 0.00483636370345055",
            "extra": "mean: 62.593500888888805 msec\nrounds: 18"
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
        "date": 1632750288356,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.31682495971008,
            "unit": "iter/sec",
            "range": "stddev: 0.0017506953082696822",
            "extra": "mean: 14.63768260000009 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.158538540227823,
            "unit": "iter/sec",
            "range": "stddev: 0.00189342712727365",
            "extra": "mean: 58.2800217894736 msec\nrounds: 19"
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
        "date": 1632835633973,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 105.99787342113173,
            "unit": "iter/sec",
            "range": "stddev: 0.00008680683450563537",
            "extra": "mean: 9.43415153271028 msec\nrounds: 107"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 22.034975234791133,
            "unit": "iter/sec",
            "range": "stddev: 0.00007210006188627313",
            "extra": "mean: 45.38239727272735 msec\nrounds: 22"
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
        "date": 1633008043980,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 102.93384939699102,
            "unit": "iter/sec",
            "range": "stddev: 0.00022748947332099613",
            "extra": "mean: 9.714977199999986 msec\nrounds: 105"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.75587816138619,
            "unit": "iter/sec",
            "range": "stddev: 0.00004435050969896094",
            "extra": "mean: 45.96458909090914 msec\nrounds: 22"
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
        "date": 1633059820224,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 92.3397396188564,
            "unit": "iter/sec",
            "range": "stddev: 0.0003079841923306575",
            "extra": "mean: 10.829573530612308 msec\nrounds: 98"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.184908655332947,
            "unit": "iter/sec",
            "range": "stddev: 0.003732742978717694",
            "extra": "mean: 52.12430342857138 msec\nrounds: 21"
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
        "date": 1633203497976,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 107.34368670813292,
            "unit": "iter/sec",
            "range": "stddev: 0.0006193657168449102",
            "extra": "mean: 9.315871577235802 msec\nrounds: 123"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 22.860526302123315,
            "unit": "iter/sec",
            "range": "stddev: 0.0019490159385228652",
            "extra": "mean: 43.74352483333329 msec\nrounds: 24"
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
        "date": 1633203761056,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 74.54156663643194,
            "unit": "iter/sec",
            "range": "stddev: 0.0012785966318582746",
            "extra": "mean: 13.415333821428613 msec\nrounds: 84"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.087935132776515,
            "unit": "iter/sec",
            "range": "stddev: 0.002541032701797267",
            "extra": "mean: 58.52082140000001 msec\nrounds: 20"
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
        "date": 1633203946801,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 86.2474978091553,
            "unit": "iter/sec",
            "range": "stddev: 0.00044781214431965824",
            "extra": "mean: 11.594539266666684 msec\nrounds: 90"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.09873206710974,
            "unit": "iter/sec",
            "range": "stddev: 0.003347915577877117",
            "extra": "mean: 47.39621304347828 msec\nrounds: 23"
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
        "date": 1633204617265,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.39096895613551,
            "unit": "iter/sec",
            "range": "stddev: 0.0008257522347333423",
            "extra": "mean: 14.6218136 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 16.423094683357288,
            "unit": "iter/sec",
            "range": "stddev: 0.003056140448347747",
            "extra": "mean: 60.88986389473675 msec\nrounds: 19"
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
        "date": 1633204825494,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 79.86112647020512,
            "unit": "iter/sec",
            "range": "stddev: 0.0018804834145011399",
            "extra": "mean: 12.521736722222215 msec\nrounds: 90"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.390665450882988,
            "unit": "iter/sec",
            "range": "stddev: 0.006935791543372892",
            "extra": "mean: 49.04204830434784 msec\nrounds: 23"
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
        "date": 1633355641465,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 93.85774440832093,
            "unit": "iter/sec",
            "range": "stddev: 0.00027898321436059927",
            "extra": "mean: 10.654421820000026 msec\nrounds: 100"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.847444976037618,
            "unit": "iter/sec",
            "range": "stddev: 0.0004165640681586681",
            "extra": "mean: 50.38431905000005 msec\nrounds: 20"
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
        "date": 1633838495414,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 70.054446432525,
            "unit": "iter/sec",
            "range": "stddev: 0.0012279584163097104",
            "extra": "mean: 14.27461140476186 msec\nrounds: 84"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 66.8883852407377,
            "unit": "iter/sec",
            "range": "stddev: 0.0009651263967977711",
            "extra": "mean: 14.950278682926852 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 16.629543013423067,
            "unit": "iter/sec",
            "range": "stddev: 0.0031751633436147234",
            "extra": "mean: 60.13394349999985 msec\nrounds: 18"
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
        "date": 1634094690702,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 75.20754190185123,
            "unit": "iter/sec",
            "range": "stddev: 0.0010636067944512443",
            "extra": "mean: 13.296538813953513 msec\nrounds: 86"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.18148202121623,
            "unit": "iter/sec",
            "range": "stddev: 0.0011053364214410521",
            "extra": "mean: 14.048597635294273 msec\nrounds: 85"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.020542124336487,
            "unit": "iter/sec",
            "range": "stddev: 0.0020625973616296275",
            "extra": "mean: 55.49222621052639 msec\nrounds: 19"
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
        "date": 1634096231561,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 70.90622968276632,
            "unit": "iter/sec",
            "range": "stddev: 0.0011468676969101246",
            "extra": "mean: 14.10313317283952 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 64.52111331303938,
            "unit": "iter/sec",
            "range": "stddev: 0.0010643129318444698",
            "extra": "mean: 15.498802619047574 msec\nrounds: 84"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 16.650440041992024,
            "unit": "iter/sec",
            "range": "stddev: 0.002961905582299801",
            "extra": "mean: 60.05847277777784 msec\nrounds: 18"
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
        "date": 1634096586168,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 80.00103724011514,
            "unit": "iter/sec",
            "range": "stddev: 0.0006803829303177173",
            "extra": "mean: 12.499837933333286 msec\nrounds: 90"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.88261511594877,
            "unit": "iter/sec",
            "range": "stddev: 0.0015406843344282642",
            "extra": "mean: 13.720693177777754 msec\nrounds: 90"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 16.825637066383106,
            "unit": "iter/sec",
            "range": "stddev: 0.0030364781179102276",
            "extra": "mean: 59.43311365000002 msec\nrounds: 20"
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
        "date": 1634098192921,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 74.18423365023249,
            "unit": "iter/sec",
            "range": "stddev: 0.0016376021561285055",
            "extra": "mean: 13.479953229885071 msec\nrounds: 87"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.86129983669692,
            "unit": "iter/sec",
            "range": "stddev: 0.0013807923567407522",
            "extra": "mean: 14.314076639534806 msec\nrounds: 86"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.903230167476348,
            "unit": "iter/sec",
            "range": "stddev: 0.0021335813715511673",
            "extra": "mean: 55.855842249999995 msec\nrounds: 20"
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
        "date": 1634131609226,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 126.65221247473627,
            "unit": "iter/sec",
            "range": "stddev: 0.00019942640436892766",
            "extra": "mean: 7.895637829457366 msec\nrounds: 129"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 119.2962143692531,
            "unit": "iter/sec",
            "range": "stddev: 0.0001329540701644085",
            "extra": "mean: 8.382495666666651 msec\nrounds: 126"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 24.15169632545038,
            "unit": "iter/sec",
            "range": "stddev: 0.0019436858722342936",
            "extra": "mean: 41.4049591600002 msec\nrounds: 25"
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
        "date": 1634190484738,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 76.78667913336028,
            "unit": "iter/sec",
            "range": "stddev: 0.0004459729382853539",
            "extra": "mean: 13.023092172839469 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.80899845948284,
            "unit": "iter/sec",
            "range": "stddev: 0.0015969403483941356",
            "extra": "mean: 14.747305265060346 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.444282818369487,
            "unit": "iter/sec",
            "range": "stddev: 0.00290298952014252",
            "extra": "mean: 57.325371894736904 msec\nrounds: 19"
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
        "date": 1634190804639,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 113.47432745468274,
            "unit": "iter/sec",
            "range": "stddev: 0.00015463704545976578",
            "extra": "mean: 8.812565999999968 msec\nrounds: 115"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 105.29729438886653,
            "unit": "iter/sec",
            "range": "stddev: 0.00005663475230550233",
            "extra": "mean: 9.496920180180183 msec\nrounds: 111"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.663405508477602,
            "unit": "iter/sec",
            "range": "stddev: 0.00008832159295165078",
            "extra": "mean: 46.160794045454544 msec\nrounds: 22"
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
        "date": 1634191108782,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 113.63942505103304,
            "unit": "iter/sec",
            "range": "stddev: 0.00015122254263873314",
            "extra": "mean: 8.799762930434762 msec\nrounds: 115"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 105.06072684639703,
            "unit": "iter/sec",
            "range": "stddev: 0.000129461329210564",
            "extra": "mean: 9.518304603603589 msec\nrounds: 111"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.938452330141317,
            "unit": "iter/sec",
            "range": "stddev: 0.00005356954297581825",
            "extra": "mean: 45.58206681818191 msec\nrounds: 22"
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
        "date": 1634237076622,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 112.85719632621881,
            "unit": "iter/sec",
            "range": "stddev: 0.00015768321113863328",
            "extra": "mean: 8.860755295652169 msec\nrounds: 115"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 105.1586853087694,
            "unit": "iter/sec",
            "range": "stddev: 0.00013157755260439068",
            "extra": "mean: 9.509438018017974 msec\nrounds: 111"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 22.024575439742613,
            "unit": "iter/sec",
            "range": "stddev: 0.00004671764181981041",
            "extra": "mean: 45.40382640909088 msec\nrounds: 22"
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
        "date": 1634250103286,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 75.18777826698741,
            "unit": "iter/sec",
            "range": "stddev: 0.0007994519701654567",
            "extra": "mean: 13.300033902439017 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 64.7975399706518,
            "unit": "iter/sec",
            "range": "stddev: 0.0016017494316292863",
            "extra": "mean: 15.432684642857145 msec\nrounds: 84"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 16.353529689019545,
            "unit": "iter/sec",
            "range": "stddev: 0.0014345244329235706",
            "extra": "mean: 61.14887850000006 msec\nrounds: 18"
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
        "date": 1634252351161,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 70.04413584357323,
            "unit": "iter/sec",
            "range": "stddev: 0.0011106929320180239",
            "extra": "mean: 14.276712646341444 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.95107892311192,
            "unit": "iter/sec",
            "range": "stddev: 0.0015387748764770003",
            "extra": "mean: 14.71646978749993 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 16.146192090937674,
            "unit": "iter/sec",
            "range": "stddev: 0.0021286338130314057",
            "extra": "mean: 61.93410770588237 msec\nrounds: 17"
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
        "date": 1635032516547,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 70.96335446114152,
            "unit": "iter/sec",
            "range": "stddev: 0.002079135177228545",
            "extra": "mean: 14.091780294117653 msec\nrounds: 85"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.12909063439757,
            "unit": "iter/sec",
            "range": "stddev: 0.0014021318901995135",
            "extra": "mean: 14.058945377777773 msec\nrounds: 90"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.366811107677176,
            "unit": "iter/sec",
            "range": "stddev: 0.0027817850883371997",
            "extra": "mean: 54.446032800000225 msec\nrounds: 20"
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
        "date": 1635032850054,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 85.70731562402537,
            "unit": "iter/sec",
            "range": "stddev: 0.0006071005523157127",
            "extra": "mean: 11.667615450549489 msec\nrounds: 91"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 80.82206554556377,
            "unit": "iter/sec",
            "range": "stddev: 0.0007322660312667",
            "extra": "mean: 12.372858739130415 msec\nrounds: 92"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.894865764776753,
            "unit": "iter/sec",
            "range": "stddev: 0.0009088311433341103",
            "extra": "mean: 47.85864677272715 msec\nrounds: 22"
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
        "date": 1635061569800,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 92.68430811149292,
            "unit": "iter/sec",
            "range": "stddev: 0.0005906428603377612",
            "extra": "mean: 10.789312887755154 msec\nrounds: 98"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 80.33794865760503,
            "unit": "iter/sec",
            "range": "stddev: 0.0016164077473185725",
            "extra": "mean: 12.447417648936161 msec\nrounds: 94"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.02102148742,
            "unit": "iter/sec",
            "range": "stddev: 0.0030059520565057607",
            "extra": "mean: 55.4907501052631 msec\nrounds: 19"
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
        "date": 1635177118272,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 112.60995832719445,
            "unit": "iter/sec",
            "range": "stddev: 0.00006568940601996633",
            "extra": "mean: 8.880209307017457 msec\nrounds: 114"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 104.51875670613713,
            "unit": "iter/sec",
            "range": "stddev: 0.00006671075150782911",
            "extra": "mean: 9.567660690909099 msec\nrounds: 110"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.890853800980718,
            "unit": "iter/sec",
            "range": "stddev: 0.00006341130096953775",
            "extra": "mean: 45.68117849999984 msec\nrounds: 22"
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
        "date": 1635178119710,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 68.64772626955596,
            "unit": "iter/sec",
            "range": "stddev: 0.0007367323630161713",
            "extra": "mean: 14.567124861111125 msec\nrounds: 72"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 62.63109137585926,
            "unit": "iter/sec",
            "range": "stddev: 0.0016982507893925926",
            "extra": "mean: 15.966510850000025 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 15.90254011918774,
            "unit": "iter/sec",
            "range": "stddev: 0.0031717989222720963",
            "extra": "mean: 62.88303582352964 msec\nrounds: 17"
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
        "date": 1635182744845,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.03261759324356,
            "unit": "iter/sec",
            "range": "stddev: 0.0007802100613670155",
            "extra": "mean: 13.692512098765478 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 66.92109126933717,
            "unit": "iter/sec",
            "range": "stddev: 0.0010601266780330982",
            "extra": "mean: 14.942972103896247 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 15.688189199916138,
            "unit": "iter/sec",
            "range": "stddev: 0.002248009398063218",
            "extra": "mean: 63.742219529411685 msec\nrounds: 17"
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
        "date": 1635202355325,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 117.89318330924536,
            "unit": "iter/sec",
            "range": "stddev: 0.0000701716430648013",
            "extra": "mean: 8.482254630252049 msec\nrounds: 119"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 107.51164228484988,
            "unit": "iter/sec",
            "range": "stddev: 0.000079287249029685",
            "extra": "mean: 9.301318245614002 msec\nrounds: 114"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 22.123593632818615,
            "unit": "iter/sec",
            "range": "stddev: 0.0000623914351952173",
            "extra": "mean: 45.20061327272702 msec\nrounds: 22"
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
        "date": 1635202579517,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 117.59988818879341,
            "unit": "iter/sec",
            "range": "stddev: 0.00014638584712983976",
            "extra": "mean: 8.503409445378148 msec\nrounds: 119"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 107.01201969517089,
            "unit": "iter/sec",
            "range": "stddev: 0.0001545322458250027",
            "extra": "mean: 9.34474466371675 msec\nrounds: 113"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.97175802955108,
            "unit": "iter/sec",
            "range": "stddev: 0.0002448645357947696",
            "extra": "mean: 45.51297163636348 msec\nrounds: 22"
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
        "date": 1635202797369,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 119.454087907695,
            "unit": "iter/sec",
            "range": "stddev: 0.00007924226793148716",
            "extra": "mean: 8.371417148760315 msec\nrounds: 121"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 107.87845753212555,
            "unit": "iter/sec",
            "range": "stddev: 0.00011791884921634414",
            "extra": "mean: 9.269691307017492 msec\nrounds: 114"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.867936687512355,
            "unit": "iter/sec",
            "range": "stddev: 0.00026051289970113143",
            "extra": "mean: 45.729051363636344 msec\nrounds: 22"
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
        "date": 1635204727517,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 79.00800272403067,
            "unit": "iter/sec",
            "range": "stddev: 0.0006433591197710625",
            "extra": "mean: 12.656945695652233 msec\nrounds: 92"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.98789165813187,
            "unit": "iter/sec",
            "range": "stddev: 0.001021365642382198",
            "extra": "mean: 13.70090267415727 msec\nrounds: 89"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.708546961127414,
            "unit": "iter/sec",
            "range": "stddev: 0.0026667053516612562",
            "extra": "mean: 56.469907000000134 msec\nrounds: 19"
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
        "date": 1635449308256,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 93.4532026532511,
            "unit": "iter/sec",
            "range": "stddev: 0.0011262999220210833",
            "extra": "mean: 10.70054285576923 msec\nrounds: 104"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 88.22027837758849,
            "unit": "iter/sec",
            "range": "stddev: 0.0007308317127979576",
            "extra": "mean: 11.335262350000024 msec\nrounds: 100"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.52057633016623,
            "unit": "iter/sec",
            "range": "stddev: 0.0019500772917044106",
            "extra": "mean: 46.46715704347848 msec\nrounds: 23"
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
        "date": 1635452399908,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 101.45945245777203,
            "unit": "iter/sec",
            "range": "stddev: 0.00019353556959097692",
            "extra": "mean: 9.85615411650487 msec\nrounds: 103"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 92.18575655288419,
            "unit": "iter/sec",
            "range": "stddev: 0.00028034017068268296",
            "extra": "mean: 10.847662777777716 msec\nrounds: 99"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.24568543271462,
            "unit": "iter/sec",
            "range": "stddev: 0.0001446146865661811",
            "extra": "mean: 51.9596978500001 msec\nrounds: 20"
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
        "date": 1635945524271,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 88.26062834350036,
            "unit": "iter/sec",
            "range": "stddev: 0.0010428537764221712",
            "extra": "mean: 11.330080226804114 msec\nrounds: 97"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 86.70615681846232,
            "unit": "iter/sec",
            "range": "stddev: 0.0004862869653877254",
            "extra": "mean: 11.533206368421006 msec\nrounds: 95"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.13145432989364,
            "unit": "iter/sec",
            "range": "stddev: 0.005489981438728921",
            "extra": "mean: 52.26994157142885 msec\nrounds: 21"
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
        "date": 1636165017054,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 82.36239116144924,
            "unit": "iter/sec",
            "range": "stddev: 0.0008410645863496647",
            "extra": "mean: 12.14146391208786 msec\nrounds: 91"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 74.88498523615705,
            "unit": "iter/sec",
            "range": "stddev: 0.0009086706632081187",
            "extra": "mean: 13.353811806818191 msec\nrounds: 88"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.832568622265256,
            "unit": "iter/sec",
            "range": "stddev: 0.0041952598315568666",
            "extra": "mean: 56.07717099999983 msec\nrounds: 20"
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
        "date": 1636381245909,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 74.05757055019264,
            "unit": "iter/sec",
            "range": "stddev: 0.000577758756865764",
            "extra": "mean: 13.503008437499965 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.58009268005172,
            "unit": "iter/sec",
            "range": "stddev: 0.0007433283813838707",
            "extra": "mean: 14.371926818181647 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 16.974319432367565,
            "unit": "iter/sec",
            "range": "stddev: 0.002980939669934057",
            "extra": "mean: 58.912523944444274 msec\nrounds: 18"
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
        "date": 1636382275840,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 117.07749411873026,
            "unit": "iter/sec",
            "range": "stddev: 0.00023729796295067786",
            "extra": "mean: 8.541351243697472 msec\nrounds: 119"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 107.45555062160233,
            "unit": "iter/sec",
            "range": "stddev: 0.00007314599952397638",
            "extra": "mean: 9.3061735221239 msec\nrounds: 113"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.966658829495223,
            "unit": "iter/sec",
            "range": "stddev: 0.000557424795617892",
            "extra": "mean: 45.52353672727293 msec\nrounds: 22"
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
        "date": 1636467500850,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 114.45353709146013,
            "unit": "iter/sec",
            "range": "stddev: 0.0004858281568610197",
            "extra": "mean: 8.737169906779704 msec\nrounds: 118"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 105.97782336954201,
            "unit": "iter/sec",
            "range": "stddev: 0.00034411926250070167",
            "extra": "mean: 9.435936389380494 msec\nrounds: 113"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.931248343642345,
            "unit": "iter/sec",
            "range": "stddev: 0.000041411827487499665",
            "extra": "mean: 45.597039636363895 msec\nrounds: 22"
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
        "date": 1636640370659,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 69.27331093428188,
            "unit": "iter/sec",
            "range": "stddev: 0.0012241679193121483",
            "extra": "mean: 14.435573910256418 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 66.91217426643271,
            "unit": "iter/sec",
            "range": "stddev: 0.0011056948647036413",
            "extra": "mean: 14.944963468354395 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 16.942776060002075,
            "unit": "iter/sec",
            "range": "stddev: 0.0011572047639112392",
            "extra": "mean: 59.02220488888865 msec\nrounds: 18"
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
        "date": 1636641110299,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 77.23299141687319,
            "unit": "iter/sec",
            "range": "stddev: 0.0007873786079933001",
            "extra": "mean: 12.947834619047642 msec\nrounds: 84"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.1499779051807,
            "unit": "iter/sec",
            "range": "stddev: 0.001692459372919751",
            "extra": "mean: 14.89203766250009 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 16.383129457877963,
            "unit": "iter/sec",
            "range": "stddev: 0.005670519994647737",
            "extra": "mean: 61.03839944444446 msec\nrounds: 18"
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
        "date": 1636744991181,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 69.75849307131746,
            "unit": "iter/sec",
            "range": "stddev: 0.0015706783414948305",
            "extra": "mean: 14.335172048192781 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.86755390655098,
            "unit": "iter/sec",
            "range": "stddev: 0.0010379427240832539",
            "extra": "mean: 14.73458143750005 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.298782835727806,
            "unit": "iter/sec",
            "range": "stddev: 0.001539654305986087",
            "extra": "mean: 57.807535333333604 msec\nrounds: 18"
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
        "date": 1636745399829,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 119.05093734066803,
            "unit": "iter/sec",
            "range": "stddev: 0.00014904878990898578",
            "extra": "mean: 8.399765867768586 msec\nrounds: 121"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 108.23821507232083,
            "unit": "iter/sec",
            "range": "stddev: 0.00017089816122423178",
            "extra": "mean: 9.238881104347819 msec\nrounds: 115"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.65848257093529,
            "unit": "iter/sec",
            "range": "stddev: 0.00006320178621762832",
            "extra": "mean: 46.171286318181636 msec\nrounds: 22"
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
        "date": 1637159530013,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 117.37392801047658,
            "unit": "iter/sec",
            "range": "stddev: 0.00013832133429019552",
            "extra": "mean: 8.519779621848746 msec\nrounds: 119"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 105.09631350759327,
            "unit": "iter/sec",
            "range": "stddev: 0.00023007790006424926",
            "extra": "mean: 9.515081610619477 msec\nrounds: 113"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.622261385554086,
            "unit": "iter/sec",
            "range": "stddev: 0.00018377991487398526",
            "extra": "mean: 46.24863154545453 msec\nrounds: 22"
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
        "date": 1637160613802,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 116.03038470328474,
            "unit": "iter/sec",
            "range": "stddev: 0.00023032514596315487",
            "extra": "mean: 8.618432168067185 msec\nrounds: 119"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 105.78917864573057,
            "unit": "iter/sec",
            "range": "stddev: 0.00022307961319461138",
            "extra": "mean: 9.452762681415884 msec\nrounds: 113"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.686375219822786,
            "unit": "iter/sec",
            "range": "stddev: 0.000043315161661736536",
            "extra": "mean: 46.11190159090919 msec\nrounds: 22"
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
        "date": 1637161253843,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 131.73812798654495,
            "unit": "iter/sec",
            "range": "stddev: 0.00023422953775531407",
            "extra": "mean: 7.590816837036995 msec\nrounds: 135"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 119.92585926794561,
            "unit": "iter/sec",
            "range": "stddev: 0.00017820239784910828",
            "extra": "mean: 8.338485178294528 msec\nrounds: 129"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 24.28307103041691,
            "unit": "iter/sec",
            "range": "stddev: 0.00011771204140878734",
            "extra": "mean: 41.18095271999998 msec\nrounds: 25"
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
        "date": 1637175087522,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 102.03197612475302,
            "unit": "iter/sec",
            "range": "stddev: 0.00022541337408291817",
            "extra": "mean: 9.800849086538465 msec\nrounds: 104"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 93.03114643175168,
            "unit": "iter/sec",
            "range": "stddev: 0.0002398795391268681",
            "extra": "mean: 10.749088217821836 msec\nrounds: 101"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.279146411397043,
            "unit": "iter/sec",
            "range": "stddev: 0.0004002784859010589",
            "extra": "mean: 51.869516349999856 msec\nrounds: 20"
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
        "date": 1637529649039,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 130.48518077153028,
            "unit": "iter/sec",
            "range": "stddev: 0.00015336458850202285",
            "extra": "mean: 7.663705518796993 msec\nrounds: 133"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 118.89083860814794,
            "unit": "iter/sec",
            "range": "stddev: 0.00006684307455314646",
            "extra": "mean: 8.411077015748015 msec\nrounds: 127"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 24.855374084525106,
            "unit": "iter/sec",
            "range": "stddev: 0.0000363819737217067",
            "extra": "mean: 40.23274792000002 msec\nrounds: 25"
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
        "date": 1637590932482,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 77.32130383832616,
            "unit": "iter/sec",
            "range": "stddev: 0.0010851012187062647",
            "extra": "mean: 12.933046267441833 msec\nrounds: 86"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.80405333169354,
            "unit": "iter/sec",
            "range": "stddev: 0.0008979669675476238",
            "extra": "mean: 13.735498976190566 msec\nrounds: 84"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.14076222314565,
            "unit": "iter/sec",
            "range": "stddev: 0.0024678827225601972",
            "extra": "mean: 55.1244753499998 msec\nrounds: 20"
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
        "date": 1637591717181,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 106.58763068530146,
            "unit": "iter/sec",
            "range": "stddev: 0.0004461423386165562",
            "extra": "mean: 9.381951672727263 msec\nrounds: 110"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 94.5176301424117,
            "unit": "iter/sec",
            "range": "stddev: 0.0003966469714491281",
            "extra": "mean: 10.580036745454567 msec\nrounds: 110"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.771984280074882,
            "unit": "iter/sec",
            "range": "stddev: 0.0006147505478671738",
            "extra": "mean: 50.57661314285714 msec\nrounds: 21"
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
        "date": 1637677297383,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 103.02724194908362,
            "unit": "iter/sec",
            "range": "stddev: 0.0004636129790038922",
            "extra": "mean: 9.706170728070184 msec\nrounds: 114"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 94.32625351889648,
            "unit": "iter/sec",
            "range": "stddev: 0.0005409660072087661",
            "extra": "mean: 10.601502367521348 msec\nrounds: 117"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.298315597433852,
            "unit": "iter/sec",
            "range": "stddev: 0.0008190988134288974",
            "extra": "mean: 51.817993904761956 msec\nrounds: 21"
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
        "date": 1637936791668,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 116.3700371244979,
            "unit": "iter/sec",
            "range": "stddev: 0.00017811762565099004",
            "extra": "mean: 8.593277313559287 msec\nrounds: 118"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 104.89200266959125,
            "unit": "iter/sec",
            "range": "stddev: 0.0002879892993980464",
            "extra": "mean: 9.533615285714296 msec\nrounds: 112"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.56360687249914,
            "unit": "iter/sec",
            "range": "stddev: 0.0008074175437554012",
            "extra": "mean: 46.37443104545449 msec\nrounds: 22"
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
        "date": 1637937364879,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 116.59860814006598,
            "unit": "iter/sec",
            "range": "stddev: 0.00024110801671593473",
            "extra": "mean: 8.576431708333377 msec\nrounds: 120"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 105.62042866138782,
            "unit": "iter/sec",
            "range": "stddev: 0.0002786018349719601",
            "extra": "mean: 9.46786538053102 msec\nrounds: 113"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.5050720567762,
            "unit": "iter/sec",
            "range": "stddev: 0.00017750022607922837",
            "extra": "mean: 46.5006579545453 msec\nrounds: 22"
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
        "date": 1638198126124,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 116.0996861095714,
            "unit": "iter/sec",
            "range": "stddev: 0.00017201063073802713",
            "extra": "mean: 8.613287714285722 msec\nrounds: 119"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 106.0247270399268,
            "unit": "iter/sec",
            "range": "stddev: 0.00025383136116233126",
            "extra": "mean: 9.431762079646004 msec\nrounds: 113"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.597293623502164,
            "unit": "iter/sec",
            "range": "stddev: 0.000052318754477751186",
            "extra": "mean: 46.30209772727267 msec\nrounds: 22"
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
        "date": 1638198584916,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 70.34281595706136,
            "unit": "iter/sec",
            "range": "stddev: 0.0012300264642685229",
            "extra": "mean: 14.216092807692256 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 65.7883368905289,
            "unit": "iter/sec",
            "range": "stddev: 0.0008961680904053146",
            "extra": "mean: 15.20026264935059 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 16.408877548434067,
            "unit": "iter/sec",
            "range": "stddev: 0.00208933848400365",
            "extra": "mean: 60.942620666666635 msec\nrounds: 18"
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
        "date": 1638200277465,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 118.14852448255944,
            "unit": "iter/sec",
            "range": "stddev: 0.00007545264705001918",
            "extra": "mean: 8.463922883333305 msec\nrounds: 120"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 105.57073318581689,
            "unit": "iter/sec",
            "range": "stddev: 0.00029229864365225365",
            "extra": "mean: 9.472322203539902 msec\nrounds: 113"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 22.053948213742917,
            "unit": "iter/sec",
            "range": "stddev: 0.000050054370997093735",
            "extra": "mean: 45.343354863636165 msec\nrounds: 22"
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
        "date": 1638201374536,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 103.7874494402155,
            "unit": "iter/sec",
            "range": "stddev: 0.00041618439916555586",
            "extra": "mean: 9.635076354545435 msec\nrounds: 110"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 94.10093967117307,
            "unit": "iter/sec",
            "range": "stddev: 0.00029073572446138994",
            "extra": "mean: 10.626886442307658 msec\nrounds: 104"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.611258630212685,
            "unit": "iter/sec",
            "range": "stddev: 0.0010123982719361653",
            "extra": "mean: 50.99111784999977 msec\nrounds: 20"
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
        "date": 1638203251329,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 123.21080854496807,
            "unit": "iter/sec",
            "range": "stddev: 0.0001924657690490497",
            "extra": "mean: 8.116171071428619 msec\nrounds: 126"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 118.84561960339079,
            "unit": "iter/sec",
            "range": "stddev: 0.0001453161881012501",
            "extra": "mean: 8.41427730645168 msec\nrounds: 124"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 24.410004694287775,
            "unit": "iter/sec",
            "range": "stddev: 0.0001217631793293093",
            "extra": "mean: 40.96680900000038 msec\nrounds: 25"
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
        "date": 1638281884839,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 114.5038120873364,
            "unit": "iter/sec",
            "range": "stddev: 0.0003228195268765184",
            "extra": "mean: 8.73333369230766 msec\nrounds: 117"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 104.87081376047571,
            "unit": "iter/sec",
            "range": "stddev: 0.00018782669451587958",
            "extra": "mean: 9.535541530973468 msec\nrounds: 113"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.727655463066142,
            "unit": "iter/sec",
            "range": "stddev: 0.0001036197793396616",
            "extra": "mean: 46.02429386363636 msec\nrounds: 22"
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
        "date": 1638368547331,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 98.76098025765513,
            "unit": "iter/sec",
            "range": "stddev: 0.00019889967954898498",
            "extra": "mean: 10.125456403846176 msec\nrounds: 104"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 89.7823167751497,
            "unit": "iter/sec",
            "range": "stddev: 0.00012944884461824906",
            "extra": "mean: 11.138050742268035 msec\nrounds: 97"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.271420309178794,
            "unit": "iter/sec",
            "range": "stddev: 0.0005846800118027492",
            "extra": "mean: 51.890311349999955 msec\nrounds: 20"
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
        "date": 1638369526778,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 112.65388824433111,
            "unit": "iter/sec",
            "range": "stddev: 0.0005971053178952252",
            "extra": "mean: 8.876746427350422 msec\nrounds: 117"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 103.89229017817496,
            "unit": "iter/sec",
            "range": "stddev: 0.0002107847543034346",
            "extra": "mean: 9.625353318181773 msec\nrounds: 110"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 22.69161950467979,
            "unit": "iter/sec",
            "range": "stddev: 0.002938715113529019",
            "extra": "mean: 44.06913309090899 msec\nrounds: 22"
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
        "date": 1638454773786,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 74.73813411171182,
            "unit": "iter/sec",
            "range": "stddev: 0.0008358318188341104",
            "extra": "mean: 13.380050383720983 msec\nrounds: 86"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.50941915409366,
            "unit": "iter/sec",
            "range": "stddev: 0.0011343888730860634",
            "extra": "mean: 14.596533036585331 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 16.799555004427305,
            "unit": "iter/sec",
            "range": "stddev: 0.0013689292206945742",
            "extra": "mean: 59.52538622222213 msec\nrounds: 18"
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
        "date": 1638801128753,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 115.42718721120903,
            "unit": "iter/sec",
            "range": "stddev: 0.0002640645538865281",
            "extra": "mean: 8.663470228813571 msec\nrounds: 118"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 103.82600500692303,
            "unit": "iter/sec",
            "range": "stddev: 0.00044922833509819813",
            "extra": "mean: 9.631498389380587 msec\nrounds: 113"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.72908620762601,
            "unit": "iter/sec",
            "range": "stddev: 0.0000698622965752346",
            "extra": "mean: 46.02126340909087 msec\nrounds: 22"
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
        "date": 1638802671619,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 77.31099044832081,
            "unit": "iter/sec",
            "range": "stddev: 0.0015420831586447463",
            "extra": "mean: 12.934771553191503 msec\nrounds: 94"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 75.20090455749919,
            "unit": "iter/sec",
            "range": "stddev: 0.0010432098630079188",
            "extra": "mean: 13.297712386363548 msec\nrounds: 88"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.74754570920777,
            "unit": "iter/sec",
            "range": "stddev: 0.002842175889805214",
            "extra": "mean: 56.34581909999987 msec\nrounds: 20"
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
        "date": 1638807328903,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 92.33365129146173,
            "unit": "iter/sec",
            "range": "stddev: 0.0011687977107179646",
            "extra": "mean: 10.830287614678916 msec\nrounds: 109"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 87.55030493852426,
            "unit": "iter/sec",
            "range": "stddev: 0.000711823220268168",
            "extra": "mean: 11.422004762886617 msec\nrounds: 97"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.183198568949532,
            "unit": "iter/sec",
            "range": "stddev: 0.0004826122515366423",
            "extra": "mean: 52.128950049999915 msec\nrounds: 20"
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
        "date": 1638972765195,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.86088499181653,
            "unit": "iter/sec",
            "range": "stddev: 0.0007535494845264883",
            "extra": "mean: 13.915776296296368 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 66.8951552067375,
            "unit": "iter/sec",
            "range": "stddev: 0.0007100633566443018",
            "extra": "mean: 14.948765675324761 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 16.572850979768976,
            "unit": "iter/sec",
            "range": "stddev: 0.0018819360220804228",
            "extra": "mean: 60.339648333333415 msec\nrounds: 18"
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
        "date": 1638972984533,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 90.4527923657588,
            "unit": "iter/sec",
            "range": "stddev: 0.0008379938698733731",
            "extra": "mean: 11.055490647058823 msec\nrounds: 102"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 73.2049945123505,
            "unit": "iter/sec",
            "range": "stddev: 0.0016472457544020637",
            "extra": "mean: 13.660270131313087 msec\nrounds: 99"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.6342627508274,
            "unit": "iter/sec",
            "range": "stddev: 0.002448232160313677",
            "extra": "mean: 48.46308356521735 msec\nrounds: 23"
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
        "date": 1639145992766,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 93.70797339375089,
            "unit": "iter/sec",
            "range": "stddev: 0.0006929213419997031",
            "extra": "mean: 10.671450505050482 msec\nrounds: 99"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 76.09647448916125,
            "unit": "iter/sec",
            "range": "stddev: 0.0018316005916541723",
            "extra": "mean: 13.141213265306192 msec\nrounds: 98"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.832466143726595,
            "unit": "iter/sec",
            "range": "stddev: 0.0020033556038333857",
            "extra": "mean: 50.42237272727275 msec\nrounds: 22"
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
        "date": 1639254892456,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 118.8502719362978,
            "unit": "iter/sec",
            "range": "stddev: 0.00015607042806541695",
            "extra": "mean: 8.4139479338843 msec\nrounds: 121"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 106.83179083710192,
            "unit": "iter/sec",
            "range": "stddev: 0.00012535028952154783",
            "extra": "mean: 9.360509565217427 msec\nrounds: 115"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.643646025646092,
            "unit": "iter/sec",
            "range": "stddev: 0.00037791535654159225",
            "extra": "mean: 46.20293636363648 msec\nrounds: 22"
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
        "date": 1639406074821,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 103.30895747424175,
            "unit": "iter/sec",
            "range": "stddev: 0.00030066009984779085",
            "extra": "mean: 9.679702752293597 msec\nrounds: 109"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 92.65832969596912,
            "unit": "iter/sec",
            "range": "stddev: 0.0003087194611765347",
            "extra": "mean: 10.792337864077671 msec\nrounds: 103"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.353324155987032,
            "unit": "iter/sec",
            "range": "stddev: 0.000935644038195246",
            "extra": "mean: 51.670709999999964 msec\nrounds: 20"
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
        "date": 1639406822344,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 119.50874596608637,
            "unit": "iter/sec",
            "range": "stddev: 0.00008478301047393046",
            "extra": "mean: 8.36758842975204 msec\nrounds: 121"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 107.53732913120216,
            "unit": "iter/sec",
            "range": "stddev: 0.00007274216550561192",
            "extra": "mean: 9.299096491228068 msec\nrounds: 114"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.92902889089741,
            "unit": "iter/sec",
            "range": "stddev: 0.00007595436428917967",
            "extra": "mean: 45.60165454545473 msec\nrounds: 22"
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
        "date": 1639411060069,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 114.87395795691079,
            "unit": "iter/sec",
            "range": "stddev: 0.0002967699825079362",
            "extra": "mean: 8.705193220338938 msec\nrounds: 118"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 102.65467771009075,
            "unit": "iter/sec",
            "range": "stddev: 0.0008555435255342252",
            "extra": "mean: 9.741397297297267 msec\nrounds: 111"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.569754576391134,
            "unit": "iter/sec",
            "range": "stddev: 0.00005922120192614757",
            "extra": "mean: 46.361213636363566 msec\nrounds: 22"
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
        "date": 1639412194427,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 109.92591270607743,
            "unit": "iter/sec",
            "range": "stddev: 0.0019689834678671605",
            "extra": "mean: 9.097036134453795 msec\nrounds: 119"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 102.13268549598259,
            "unit": "iter/sec",
            "range": "stddev: 0.0007854553741126095",
            "extra": "mean: 9.791184821428544 msec\nrounds: 112"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.803310158727147,
            "unit": "iter/sec",
            "range": "stddev: 0.00006718094597543819",
            "extra": "mean: 45.86459545454537 msec\nrounds: 22"
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
        "date": 1639418858892,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 117.74958176820427,
            "unit": "iter/sec",
            "range": "stddev: 0.00024231767727916353",
            "extra": "mean: 8.492599166666666 msec\nrounds: 120"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 105.56860371040923,
            "unit": "iter/sec",
            "range": "stddev: 0.00031144868887882543",
            "extra": "mean: 9.472513274336302 msec\nrounds: 113"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.885682326933452,
            "unit": "iter/sec",
            "range": "stddev: 0.00002983438702840817",
            "extra": "mean: 45.69197272727281 msec\nrounds: 22"
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
        "date": 1639577929091,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 132.8981001392039,
            "unit": "iter/sec",
            "range": "stddev: 0.00025353455679630923",
            "extra": "mean: 7.524562043795597 msec\nrounds: 137"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 120.10943925185819,
            "unit": "iter/sec",
            "range": "stddev: 0.0002666963091816816",
            "extra": "mean: 8.325740310077494 msec\nrounds: 129"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 24.91649734245622,
            "unit": "iter/sec",
            "range": "stddev: 0.000546408400466257",
            "extra": "mean: 40.13405200000001 msec\nrounds: 25"
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
        "date": 1639665509972,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 75.06759927757865,
            "unit": "iter/sec",
            "range": "stddev: 0.0008054862762580839",
            "extra": "mean: 13.321326506024045 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.89313124363242,
            "unit": "iter/sec",
            "range": "stddev: 0.0011251641527086089",
            "extra": "mean: 14.72903048780488 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.127352810622284,
            "unit": "iter/sec",
            "range": "stddev: 0.001126673923880011",
            "extra": "mean: 58.38613888888923 msec\nrounds: 18"
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
        "date": 1639668076140,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.40843929643148,
            "unit": "iter/sec",
            "range": "stddev: 0.0014255712048747745",
            "extra": "mean: 13.810544871794843 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 65.82727403653885,
            "unit": "iter/sec",
            "range": "stddev: 0.0008621785945555098",
            "extra": "mean: 15.191271621621889 msec\nrounds: 74"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 15.933797881648445,
            "unit": "iter/sec",
            "range": "stddev: 0.0015241263999950124",
            "extra": "mean: 62.7596764705882 msec\nrounds: 17"
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
        "date": 1639668886516,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 118.15191269882085,
            "unit": "iter/sec",
            "range": "stddev: 0.00025236334342232733",
            "extra": "mean: 8.463680165289274 msec\nrounds: 121"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 107.10022843351396,
            "unit": "iter/sec",
            "range": "stddev: 0.00007539242025754342",
            "extra": "mean: 9.337048245613998 msec\nrounds: 114"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.544687501162958,
            "unit": "iter/sec",
            "range": "stddev: 0.00005700587878873194",
            "extra": "mean: 46.41515454545446 msec\nrounds: 22"
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
        "date": 1639751082153,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 103.71449699553207,
            "unit": "iter/sec",
            "range": "stddev: 0.0002779284326985101",
            "extra": "mean: 9.64185363636367 msec\nrounds: 110"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 92.44964619960712,
            "unit": "iter/sec",
            "range": "stddev: 0.00026543041478930553",
            "extra": "mean: 10.816699047618958 msec\nrounds: 105"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.94851615974572,
            "unit": "iter/sec",
            "range": "stddev: 0.0037131410489796373",
            "extra": "mean: 52.774580952381 msec\nrounds: 21"
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
        "date": 1640010750262,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 118.51287691379906,
            "unit": "iter/sec",
            "range": "stddev: 0.0001894839381862687",
            "extra": "mean: 8.43790165289258 msec\nrounds: 121"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 107.7310545254276,
            "unit": "iter/sec",
            "range": "stddev: 0.0000759629518589105",
            "extra": "mean: 9.282374561403477 msec\nrounds: 114"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 22.02077660272459,
            "unit": "iter/sec",
            "range": "stddev: 0.000051165563745930365",
            "extra": "mean: 45.411659090909254 msec\nrounds: 22"
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
        "date": 1640011364145,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 119.09594172212319,
            "unit": "iter/sec",
            "range": "stddev: 0.00009436685910742891",
            "extra": "mean: 8.396591735537204 msec\nrounds: 121"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 107.13877902203822,
            "unit": "iter/sec",
            "range": "stddev: 0.00017098028389093812",
            "extra": "mean: 9.333688596491307 msec\nrounds: 114"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.97625465684327,
            "unit": "iter/sec",
            "range": "stddev: 0.00005869551503168063",
            "extra": "mean: 45.50365909090912 msec\nrounds: 22"
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
        "date": 1640724293154,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 94.58633695680145,
            "unit": "iter/sec",
            "range": "stddev: 0.000629121432732035",
            "extra": "mean: 10.57235148514854 msec\nrounds: 101"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 81.46076778768617,
            "unit": "iter/sec",
            "range": "stddev: 0.0006203398219415027",
            "extra": "mean: 12.275847959183645 msec\nrounds: 98"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.706353970603455,
            "unit": "iter/sec",
            "range": "stddev: 0.0024136144272749924",
            "extra": "mean: 48.29435454545437 msec\nrounds: 22"
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
        "date": 1640787702510,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.36652741464032,
            "unit": "iter/sec",
            "range": "stddev: 0.0009259002215838817",
            "extra": "mean: 13.630193975903643 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.63582164258325,
            "unit": "iter/sec",
            "range": "stddev: 0.00047064690503363307",
            "extra": "mean: 14.15712278481013 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.120368444746003,
            "unit": "iter/sec",
            "range": "stddev: 0.001773709498736119",
            "extra": "mean: 58.40995789473711 msec\nrounds: 19"
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
        "date": 1640792851336,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 118.95288040467575,
            "unit": "iter/sec",
            "range": "stddev: 0.00009392587805016336",
            "extra": "mean: 8.406690082644626 msec\nrounds: 121"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 107.7120607178549,
            "unit": "iter/sec",
            "range": "stddev: 0.00007114025876722484",
            "extra": "mean: 9.284011403508828 msec\nrounds: 114"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.579338842407907,
            "unit": "iter/sec",
            "range": "stddev: 0.00015212773746577579",
            "extra": "mean: 46.3406227272724 msec\nrounds: 22"
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
        "date": 1640874578987,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.37312257133533,
            "unit": "iter/sec",
            "range": "stddev: 0.0022474939583782",
            "extra": "mean: 13.817284158415845 msec\nrounds: 101"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 78.6370059154473,
            "unit": "iter/sec",
            "range": "stddev: 0.0011947440190845447",
            "extra": "mean: 12.716659139785 msec\nrounds: 93"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.204922169196596,
            "unit": "iter/sec",
            "range": "stddev: 0.0018976709271906489",
            "extra": "mean: 49.492890476190475 msec\nrounds: 21"
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
        "date": 1640876105521,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 76.04259668060345,
            "unit": "iter/sec",
            "range": "stddev: 0.0007821368284621431",
            "extra": "mean: 13.150524096385505 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 66.28392593820028,
            "unit": "iter/sec",
            "range": "stddev: 0.0012907655935015764",
            "extra": "mean: 15.086613924050733 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.22510767958768,
            "unit": "iter/sec",
            "range": "stddev: 0.0018263637774716206",
            "extra": "mean: 58.05478947368398 msec\nrounds: 19"
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
        "date": 1641219669279,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.7431949617537,
            "unit": "iter/sec",
            "range": "stddev: 0.001902260937937611",
            "extra": "mean: 13.746990361445791 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.675903151715,
            "unit": "iter/sec",
            "range": "stddev: 0.0010887475344530213",
            "extra": "mean: 14.561148148148199 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 16.59036175560313,
            "unit": "iter/sec",
            "range": "stddev: 0.0016781048758290704",
            "extra": "mean: 60.275961111111144 msec\nrounds: 18"
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
        "date": 1641221051073,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 75.69778171171548,
            "unit": "iter/sec",
            "range": "stddev: 0.0007949945804364408",
            "extra": "mean: 13.210426744186 msec\nrounds: 86"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.57359780716476,
            "unit": "iter/sec",
            "range": "stddev: 0.0011936102036365572",
            "extra": "mean: 14.169604938271664 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.65228510224253,
            "unit": "iter/sec",
            "range": "stddev: 0.0017504012523782894",
            "extra": "mean: 56.64988947368412 msec\nrounds: 19"
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
        "date": 1641445480019,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 99.86195273866636,
            "unit": "iter/sec",
            "range": "stddev: 0.00031779599604264393",
            "extra": "mean: 10.013823809523824 msec\nrounds: 105"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 91.46417389060046,
            "unit": "iter/sec",
            "range": "stddev: 0.00020139572952112135",
            "extra": "mean: 10.933242574257454 msec\nrounds: 101"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.111451294944228,
            "unit": "iter/sec",
            "range": "stddev: 0.0008914600563708734",
            "extra": "mean: 52.32464999999982 msec\nrounds: 20"
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
        "date": 1641480688285,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 107.06223559954651,
            "unit": "iter/sec",
            "range": "stddev: 0.00104840396293757",
            "extra": "mean: 9.340361654135268 msec\nrounds: 133"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 103.2806034072688,
            "unit": "iter/sec",
            "range": "stddev: 0.0005633555736978632",
            "extra": "mean: 9.682360162601654 msec\nrounds: 123"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.21911569243108,
            "unit": "iter/sec",
            "range": "stddev: 0.0017032120349641565",
            "extra": "mean: 47.12731739130405 msec\nrounds: 23"
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
        "date": 1641494718454,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 117.41197949493427,
            "unit": "iter/sec",
            "range": "stddev: 0.00012593401686784975",
            "extra": "mean: 8.517018487395019 msec\nrounds: 119"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 106.25646530627665,
            "unit": "iter/sec",
            "range": "stddev: 0.0001793180629603866",
            "extra": "mean: 9.411192035398237 msec\nrounds: 113"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.726629035486795,
            "unit": "iter/sec",
            "range": "stddev: 0.00007441879810123255",
            "extra": "mean: 46.02646818181819 msec\nrounds: 22"
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
        "date": 1641498086128,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 103.95684946097929,
            "unit": "iter/sec",
            "range": "stddev: 0.0006892018112664401",
            "extra": "mean: 9.619375781250037 msec\nrounds: 128"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 87.58822323785608,
            "unit": "iter/sec",
            "range": "stddev: 0.000297315975921949",
            "extra": "mean: 11.417060000000033 msec\nrounds: 105"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.143768516468263,
            "unit": "iter/sec",
            "range": "stddev: 0.0011445254753034552",
            "extra": "mean: 52.236319047619 msec\nrounds: 21"
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
        "date": 1641506736310,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 93.24050597384395,
            "unit": "iter/sec",
            "range": "stddev: 0.0003741630495132791",
            "extra": "mean: 10.724952525252517 msec\nrounds: 99"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 84.92104398892167,
            "unit": "iter/sec",
            "range": "stddev: 0.00023825169719459086",
            "extra": "mean: 11.775644210526362 msec\nrounds: 95"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.051964710045773,
            "unit": "iter/sec",
            "range": "stddev: 0.0006135690883545703",
            "extra": "mean: 52.48802499999998 msec\nrounds: 20"
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
        "date": 1641512215801,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 109.32271939874059,
            "unit": "iter/sec",
            "range": "stddev: 0.00008451916637304637",
            "extra": "mean: 9.147229464285719 msec\nrounds: 112"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 99.84526836125937,
            "unit": "iter/sec",
            "range": "stddev: 0.00007332894860349255",
            "extra": "mean: 10.015497142857164 msec\nrounds: 105"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.372677712843732,
            "unit": "iter/sec",
            "range": "stddev: 0.00003497160629368216",
            "extra": "mean: 46.788709090909016 msec\nrounds: 22"
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
        "date": 1641519796483,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 102.89643572682962,
            "unit": "iter/sec",
            "range": "stddev: 0.0000960530724244665",
            "extra": "mean: 9.718509615384628 msec\nrounds: 104"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 93.76801660091662,
            "unit": "iter/sec",
            "range": "stddev: 0.00010365891875200898",
            "extra": "mean: 10.664617171717211 msec\nrounds: 99"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 22.02464337347057,
            "unit": "iter/sec",
            "range": "stddev: 0.00006853514423761124",
            "extra": "mean: 45.40368636363637 msec\nrounds: 22"
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
        "date": 1641521642929,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 87.80143753144829,
            "unit": "iter/sec",
            "range": "stddev: 0.00024946076439369153",
            "extra": "mean: 11.389335164835142 msec\nrounds: 91"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 80.45428000586323,
            "unit": "iter/sec",
            "range": "stddev: 0.0002231476541306634",
            "extra": "mean: 12.42941954022985 msec\nrounds: 87"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.45546866959422,
            "unit": "iter/sec",
            "range": "stddev: 0.00015428334528247965",
            "extra": "mean: 51.39942999999993 msec\nrounds: 20"
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
        "date": 1641524226066,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 92.48730443150012,
            "unit": "iter/sec",
            "range": "stddev: 0.00022104992928236364",
            "extra": "mean: 10.812294791666686 msec\nrounds: 96"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 83.33109573909545,
            "unit": "iter/sec",
            "range": "stddev: 0.000280072881677526",
            "extra": "mean: 12.000322222222287 msec\nrounds: 90"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.70141473982928,
            "unit": "iter/sec",
            "range": "stddev: 0.0005882850133267705",
            "extra": "mean: 50.75777619047602 msec\nrounds: 21"
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
        "date": 1641566023763,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 115.91338453767162,
            "unit": "iter/sec",
            "range": "stddev: 0.00016163098920745825",
            "extra": "mean: 8.627131404958691 msec\nrounds: 121"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 106.36732373616358,
            "unit": "iter/sec",
            "range": "stddev: 0.0001631658793937015",
            "extra": "mean: 9.40138347826093 msec\nrounds: 115"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 25.07234374062922,
            "unit": "iter/sec",
            "range": "stddev: 0.00010779573924782033",
            "extra": "mean: 39.88458399999999 msec\nrounds: 25"
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
        "date": 1641567853557,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 102.27785569361676,
            "unit": "iter/sec",
            "range": "stddev: 0.0002712837684898747",
            "extra": "mean: 9.777287499999971 msec\nrounds: 104"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 93.20096133938591,
            "unit": "iter/sec",
            "range": "stddev: 0.000157016006442544",
            "extra": "mean: 10.72950306122442 msec\nrounds: 98"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 22.1692388124384,
            "unit": "iter/sec",
            "range": "stddev: 0.0005208093019255767",
            "extra": "mean: 45.10754782608658 msec\nrounds: 23"
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
        "date": 1641679839788,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 100.99050320266132,
            "unit": "iter/sec",
            "range": "stddev: 0.00023735266566373908",
            "extra": "mean: 9.901921153846155 msec\nrounds: 104"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 94.07294815497285,
            "unit": "iter/sec",
            "range": "stddev: 0.00010435612531397545",
            "extra": "mean: 10.630048484848492 msec\nrounds: 99"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.8502189342276,
            "unit": "iter/sec",
            "range": "stddev: 0.0002835525052353917",
            "extra": "mean: 45.76613181818216 msec\nrounds: 22"
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
        "date": 1641700602897,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 102.09832677531551,
            "unit": "iter/sec",
            "range": "stddev: 0.00023473111259352162",
            "extra": "mean: 9.794479807692321 msec\nrounds: 104"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 94.33068756399382,
            "unit": "iter/sec",
            "range": "stddev: 0.00018707014613595174",
            "extra": "mean: 10.601004040404149 msec\nrounds: 99"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 22.261725492792305,
            "unit": "iter/sec",
            "range": "stddev: 0.00013267174416428922",
            "extra": "mean: 44.920147826087 msec\nrounds: 23"
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
        "date": 1641709591950,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.88090133325787,
            "unit": "iter/sec",
            "range": "stddev: 0.0010810976046931962",
            "extra": "mean: 13.91190123456785 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.54515393540565,
            "unit": "iter/sec",
            "range": "stddev: 0.0014415162199051912",
            "extra": "mean: 14.80491111111115 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.09669010090949,
            "unit": "iter/sec",
            "range": "stddev: 0.004499920719246381",
            "extra": "mean: 52.36509545454551 msec\nrounds: 22"
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
        "date": 1641827252085,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 65.63340776107798,
            "unit": "iter/sec",
            "range": "stddev: 0.0014954581203545949",
            "extra": "mean: 15.236143209876444 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 62.001243589943314,
            "unit": "iter/sec",
            "range": "stddev: 0.002034051532722382",
            "extra": "mean: 16.128708749999998 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.033892891716572,
            "unit": "iter/sec",
            "range": "stddev: 0.0031351732575979254",
            "extra": "mean: 52.53785999999998 msec\nrounds: 20"
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
        "date": 1641827399995,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 101.97249772601324,
            "unit": "iter/sec",
            "range": "stddev: 0.00023628644726128166",
            "extra": "mean: 9.80656571428572 msec\nrounds: 105"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 93.72112927712631,
            "unit": "iter/sec",
            "range": "stddev: 0.0001798393877219141",
            "extra": "mean: 10.669952525252606 msec\nrounds: 99"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.967108648221007,
            "unit": "iter/sec",
            "range": "stddev: 0.00004199574215698808",
            "extra": "mean: 45.52260454545456 msec\nrounds: 22"
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
        "date": 1641829248843,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 52.76434304990008,
            "unit": "iter/sec",
            "range": "stddev: 0.0027790470209237794",
            "extra": "mean: 18.95219275362311 msec\nrounds: 69"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 48.525830754640474,
            "unit": "iter/sec",
            "range": "stddev: 0.0028250362111950185",
            "extra": "mean: 20.607581249999953 msec\nrounds: 64"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.655330305973388,
            "unit": "iter/sec",
            "range": "stddev: 0.009675939193143704",
            "extra": "mean: 73.23147647058819 msec\nrounds: 17"
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
        "date": 1641830980275,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 63.6391919543572,
            "unit": "iter/sec",
            "range": "stddev: 0.0011893612983361103",
            "extra": "mean: 15.713587323943585 msec\nrounds: 71"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 61.63763147128128,
            "unit": "iter/sec",
            "range": "stddev: 0.0008580589059266615",
            "extra": "mean: 16.22385507246378 msec\nrounds: 69"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.05318176844338,
            "unit": "iter/sec",
            "range": "stddev: 0.0007287474502022783",
            "extra": "mean: 58.640083333333294 msec\nrounds: 18"
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
        "date": 1641833198798,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 65.04373924160963,
            "unit": "iter/sec",
            "range": "stddev: 0.001348577142427951",
            "extra": "mean: 15.374269863013692 msec\nrounds: 73"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 60.465373058206396,
            "unit": "iter/sec",
            "range": "stddev: 0.0017576890849450772",
            "extra": "mean: 16.538391304348025 msec\nrounds: 69"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 16.963358956172996,
            "unit": "iter/sec",
            "range": "stddev: 0.0017257512276888148",
            "extra": "mean: 58.950588888888554 msec\nrounds: 18"
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
        "date": 1641847120923,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 96.37510452318172,
            "unit": "iter/sec",
            "range": "stddev: 0.0004960546812354399",
            "extra": "mean: 10.376123636363618 msec\nrounds: 110"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 87.55303963140825,
            "unit": "iter/sec",
            "range": "stddev: 0.0006113613445683438",
            "extra": "mean: 11.42164800000006 msec\nrounds: 100"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.28637404827927,
            "unit": "iter/sec",
            "range": "stddev: 0.0012434818760813798",
            "extra": "mean: 49.29417142857138 msec\nrounds: 21"
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
        "date": 1641847996116,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 105.12520756088045,
            "unit": "iter/sec",
            "range": "stddev: 0.0001580309594363501",
            "extra": "mean: 9.512466355140148 msec\nrounds: 107"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 95.43921504741967,
            "unit": "iter/sec",
            "range": "stddev: 0.00012903119459347113",
            "extra": "mean: 10.477873267326672 msec\nrounds: 101"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 22.21556399231856,
            "unit": "iter/sec",
            "range": "stddev: 0.0003691709265423815",
            "extra": "mean: 45.01348695652149 msec\nrounds: 23"
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
        "date": 1641872028145,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)]",
            "value": 171.91185822327796,
            "unit": "iter/sec",
            "range": "stddev: 0.0003500900732061576",
            "extra": "mean: 5.816934389140315 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)]",
            "value": 330.8568944175798,
            "unit": "iter/sec",
            "range": "stddev: 0.0002401103232261466",
            "extra": "mean: 3.0224547738693452 msec\nrounds: 398"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)]",
            "value": 159.56425701726752,
            "unit": "iter/sec",
            "range": "stddev: 0.0004234326641442574",
            "extra": "mean: 6.267067692307703 msec\nrounds: 195"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)]",
            "value": 318.9978113843144,
            "unit": "iter/sec",
            "range": "stddev: 0.0002607969999158515",
            "extra": "mean: 3.1348177458034168 msec\nrounds: 417"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)]",
            "value": 24.96662719858995,
            "unit": "iter/sec",
            "range": "stddev: 0.0017849279861091197",
            "extra": "mean: 40.053467857143204 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)]",
            "value": 260.2382390113416,
            "unit": "iter/sec",
            "range": "stddev: 0.0002898320450639351",
            "extra": "mean: 3.8426328267477188 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1491.0361109285307,
            "unit": "iter/sec",
            "range": "stddev: 0.00007545717333255474",
            "extra": "mean: 670.6745682887977 usec\nrounds: 1911"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1292.2382225079416,
            "unit": "iter/sec",
            "range": "stddev: 0.0000849809277988923",
            "extra": "mean: 773.8511232543691 usec\nrounds: 1647"
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
        "date": 1641889906129,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)]",
            "value": 111.24284606039336,
            "unit": "iter/sec",
            "range": "stddev: 0.0007284732175366472",
            "extra": "mean: 8.989342105263141 msec\nrounds: 133"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)]",
            "value": 204.80274082679435,
            "unit": "iter/sec",
            "range": "stddev: 0.0007278755849983514",
            "extra": "mean: 4.882747154471528 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)]",
            "value": 105.43374903667787,
            "unit": "iter/sec",
            "range": "stddev: 0.0011315183119078183",
            "extra": "mean: 9.484629059829068 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)]",
            "value": 205.63153282775153,
            "unit": "iter/sec",
            "range": "stddev: 0.0005390074281047632",
            "extra": "mean: 4.863067381974223 msec\nrounds: 233"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)]",
            "value": 18.661298847726798,
            "unit": "iter/sec",
            "range": "stddev: 0.004015529519686812",
            "extra": "mean: 53.586838095238676 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)]",
            "value": 161.14269507934617,
            "unit": "iter/sec",
            "range": "stddev: 0.0005622746349311402",
            "extra": "mean: 6.20568000000002 msec\nrounds: 185"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 989.2793058898986,
            "unit": "iter/sec",
            "range": "stddev: 0.00022180186099991583",
            "extra": "mean: 1.0108368729096762 msec\nrounds: 1196"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 917.2070970906681,
            "unit": "iter/sec",
            "range": "stddev: 0.00019146302548972647",
            "extra": "mean: 1.0902663129973007 msec\nrounds: 1131"
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
        "date": 1641892580655,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 179.46770473695688,
            "unit": "iter/sec",
            "range": "stddev: 0.000018134130053777534",
            "extra": "mean: 5.572033149171239 msec\nrounds: 181"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 229.60444498370452,
            "unit": "iter/sec",
            "range": "stddev: 0.000010143502336374145",
            "extra": "mean: 4.355316379310392 msec\nrounds: 232"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 331.0333086503356,
            "unit": "iter/sec",
            "range": "stddev: 0.00001087704526595806",
            "extra": "mean: 3.020844047619032 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 594.9419493273041,
            "unit": "iter/sec",
            "range": "stddev: 0.000010035151811463216",
            "extra": "mean: 1.6808362582781258 msec\nrounds: 604"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 165.4197287889041,
            "unit": "iter/sec",
            "range": "stddev: 0.00001834963276036509",
            "extra": "mean: 6.045228143712669 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 216.2698412698529,
            "unit": "iter/sec",
            "range": "stddev: 0.000012391620989450487",
            "extra": "mean: 4.623853211008925 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 323.18607872024796,
            "unit": "iter/sec",
            "range": "stddev: 0.000009585351725507434",
            "extra": "mean: 3.0941926829268125 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 464.79084900582205,
            "unit": "iter/sec",
            "range": "stddev: 0.00042920960018484145",
            "extra": "mean: 2.1515053537284117 msec\nrounds: 523"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.620846352426543,
            "unit": "iter/sec",
            "range": "stddev: 0.0001333434360338255",
            "extra": "mean: 40.61598799999999 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.943790184187243,
            "unit": "iter/sec",
            "range": "stddev: 0.00004681713164442174",
            "extra": "mean: 38.54486923076878 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 259.43047090097485,
            "unit": "iter/sec",
            "range": "stddev: 0.000012256153061132807",
            "extra": "mean: 3.8545973282440755 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 399.81290730328084,
            "unit": "iter/sec",
            "range": "stddev: 0.000009770975469019353",
            "extra": "mean: 2.501169876542888 msec\nrounds: 405"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1488.1293295972146,
            "unit": "iter/sec",
            "range": "stddev: 0.000005455709805429624",
            "extra": "mean: 671.984605175859 usec\nrounds: 1507"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1313.759144617649,
            "unit": "iter/sec",
            "range": "stddev: 0.000005600870406466564",
            "extra": "mean: 761.1745304281295 usec\nrounds: 1331"
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
        "date": 1641910637564,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 200.61828359180967,
            "unit": "iter/sec",
            "range": "stddev: 0.000016773361624886693",
            "extra": "mean: 4.984590547263687 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 257.6808134420542,
            "unit": "iter/sec",
            "range": "stddev: 0.00001277505786477742",
            "extra": "mean: 3.880770114942509 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 373.7768055416864,
            "unit": "iter/sec",
            "range": "stddev: 0.000012220086412519286",
            "extra": "mean: 2.6753934036938856 msec\nrounds: 379"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 670.7710103998114,
            "unit": "iter/sec",
            "range": "stddev: 0.000010592355620015724",
            "extra": "mean: 1.4908217327459523 msec\nrounds: 681"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 184.6628057167636,
            "unit": "iter/sec",
            "range": "stddev: 0.000017515344288435917",
            "extra": "mean: 5.4152756756756055 msec\nrounds: 185"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 240.4121976406724,
            "unit": "iter/sec",
            "range": "stddev: 0.000011691864213925264",
            "extra": "mean: 4.159522727272896 msec\nrounds: 242"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 365.1396624668747,
            "unit": "iter/sec",
            "range": "stddev: 0.00002114774281623247",
            "extra": "mean: 2.738678108108071 msec\nrounds: 370"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 640.0511892318093,
            "unit": "iter/sec",
            "range": "stddev: 0.00001528716357252467",
            "extra": "mean: 1.5623750362845228 msec\nrounds: 689"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.453176646288522,
            "unit": "iter/sec",
            "range": "stddev: 0.0000840817786602723",
            "extra": "mean: 36.425657142857204 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.928165579234253,
            "unit": "iter/sec",
            "range": "stddev: 0.0002183358057857893",
            "extra": "mean: 34.56838620689582 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 289.9193173340327,
            "unit": "iter/sec",
            "range": "stddev: 0.000014068147600176669",
            "extra": "mean: 3.449235494880262 msec\nrounds: 293"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 448.60272602242696,
            "unit": "iter/sec",
            "range": "stddev: 0.00001833793386382286",
            "extra": "mean: 2.229143832599018 msec\nrounds: 454"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1686.4365977968032,
            "unit": "iter/sec",
            "range": "stddev: 0.000006042855520894451",
            "extra": "mean: 592.9662587413136 usec\nrounds: 1716"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1488.3747828710525,
            "unit": "iter/sec",
            "range": "stddev: 0.000007293388792616916",
            "extra": "mean: 671.8737857618194 usec\nrounds: 1503"
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
        "date": 1641914806872,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 180.16152371509736,
            "unit": "iter/sec",
            "range": "stddev: 0.000027708628384306838",
            "extra": "mean: 5.5505747252747115 msec\nrounds: 182"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 226.11711398211307,
            "unit": "iter/sec",
            "range": "stddev: 0.00007864741409383485",
            "extra": "mean: 4.422487012987017 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 331.7928664533662,
            "unit": "iter/sec",
            "range": "stddev: 0.000024291648691748546",
            "extra": "mean: 3.0139285714286177 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 594.9299361652112,
            "unit": "iter/sec",
            "range": "stddev: 0.000013517358386141811",
            "extra": "mean: 1.6808701986754644 msec\nrounds: 604"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 166.86733788391194,
            "unit": "iter/sec",
            "range": "stddev: 0.00004666264837167824",
            "extra": "mean: 5.992784523809512 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 214.86892995272603,
            "unit": "iter/sec",
            "range": "stddev: 0.000011761700242307626",
            "extra": "mean: 4.654000000000061 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 324.1380907084253,
            "unit": "iter/sec",
            "range": "stddev: 0.000011590054638446575",
            "extra": "mean: 3.085104863221825 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 564.2349611757217,
            "unit": "iter/sec",
            "range": "stddev: 0.000012047660616999203",
            "extra": "mean: 1.772311304347847 msec\nrounds: 575"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.326839851061266,
            "unit": "iter/sec",
            "range": "stddev: 0.00021343460551953366",
            "extra": "mean: 41.106860000000154 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.71131591602659,
            "unit": "iter/sec",
            "range": "stddev: 0.0000403159226045276",
            "extra": "mean: 38.89338076923055 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 259.77129219857045,
            "unit": "iter/sec",
            "range": "stddev: 0.000010284670212333905",
            "extra": "mean: 3.849540076336053 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 396.8297449361944,
            "unit": "iter/sec",
            "range": "stddev: 0.000010494799033637693",
            "extra": "mean: 2.5199723880597418 msec\nrounds: 402"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1473.2374427064747,
            "unit": "iter/sec",
            "range": "stddev: 0.000005635927227915158",
            "extra": "mean: 678.7772093023286 usec\nrounds: 1505"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1310.9373014711168,
            "unit": "iter/sec",
            "range": "stddev: 0.000005619451119555889",
            "extra": "mean: 762.8129879879175 usec\nrounds: 1332"
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
        "date": 1641939846863,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 173.44368977168023,
            "unit": "iter/sec",
            "range": "stddev: 0.000019416322082709988",
            "extra": "mean: 5.76555999999995 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 226.00987008893165,
            "unit": "iter/sec",
            "range": "stddev: 0.000020906787279419783",
            "extra": "mean: 4.424585526315795 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 349.309097368423,
            "unit": "iter/sec",
            "range": "stddev: 0.000016403037856383835",
            "extra": "mean: 2.862794034090904 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 719.1257172215745,
            "unit": "iter/sec",
            "range": "stddev: 0.000009510641425974737",
            "extra": "mean: 1.3905774415405638 msec\nrounds: 727"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 160.07115854662544,
            "unit": "iter/sec",
            "range": "stddev: 0.000026867271459475506",
            "extra": "mean: 6.247221604938409 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 211.29650643546512,
            "unit": "iter/sec",
            "range": "stddev: 0.000015153693389225393",
            "extra": "mean: 4.732685915492992 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 340.20894961179675,
            "unit": "iter/sec",
            "range": "stddev: 0.000013162505455006197",
            "extra": "mean: 2.9393700581394846 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 663.5454648299292,
            "unit": "iter/sec",
            "range": "stddev: 0.000010120664202282047",
            "extra": "mean: 1.5070557377048852 msec\nrounds: 671"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 21.824234165302485,
            "unit": "iter/sec",
            "range": "stddev: 0.00008030528614353545",
            "extra": "mean: 45.8206227272736 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.95100877666489,
            "unit": "iter/sec",
            "range": "stddev: 0.000611049737920276",
            "extra": "mean: 43.57106956521823 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 257.49251421904916,
            "unit": "iter/sec",
            "range": "stddev: 0.000011465602923468809",
            "extra": "mean: 3.8836080459772084 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 435.67409649993976,
            "unit": "iter/sec",
            "range": "stddev: 0.000015294698036279552",
            "extra": "mean: 2.2952936794582603 msec\nrounds: 443"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1309.630202974139,
            "unit": "iter/sec",
            "range": "stddev: 0.000007247739639610523",
            "extra": "mean: 763.5743263472573 usec\nrounds: 1336"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1152.954262994209,
            "unit": "iter/sec",
            "range": "stddev: 0.00000700787471754122",
            "extra": "mean: 867.3370940170788 usec\nrounds: 1170"
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
        "date": 1641944517576,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 179.98591201179653,
            "unit": "iter/sec",
            "range": "stddev: 0.0002710998524694839",
            "extra": "mean: 5.555990404040393 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 238.11899790775007,
            "unit": "iter/sec",
            "range": "stddev: 0.00022017042783756342",
            "extra": "mean: 4.199580918727917 msec\nrounds: 283"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 352.4271527784728,
            "unit": "iter/sec",
            "range": "stddev: 0.00008599317013862281",
            "extra": "mean: 2.8374658198614333 msec\nrounds: 433"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 717.6327644588773,
            "unit": "iter/sec",
            "range": "stddev: 0.000031843672500823095",
            "extra": "mean: 1.3934703786191234 msec\nrounds: 898"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 160.46051981513983,
            "unit": "iter/sec",
            "range": "stddev: 0.0000866259389377859",
            "extra": "mean: 6.232062573099353 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 213.21711783857273,
            "unit": "iter/sec",
            "range": "stddev: 0.00006990239444474214",
            "extra": "mean: 4.690054954954896 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 338.94095504945307,
            "unit": "iter/sec",
            "range": "stddev: 0.00004465428707337134",
            "extra": "mean: 2.9503663841806764 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 670.114195240816,
            "unit": "iter/sec",
            "range": "stddev: 0.00004574508509444537",
            "extra": "mean: 1.4922829677419895 msec\nrounds: 775"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.12090207884517,
            "unit": "iter/sec",
            "range": "stddev: 0.0002785887475775502",
            "extra": "mean: 45.2061130434788 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.750585600376315,
            "unit": "iter/sec",
            "range": "stddev: 0.0005404639160621568",
            "extra": "mean: 42.10422499999981 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 263.12667509946675,
            "unit": "iter/sec",
            "range": "stddev: 0.00008837466568942274",
            "extra": "mean: 3.8004508650519053 msec\nrounds: 289"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 436.30359954598737,
            "unit": "iter/sec",
            "range": "stddev: 0.00006368575125471403",
            "extra": "mean: 2.2919820075758914 msec\nrounds: 528"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1345.7112892884916,
            "unit": "iter/sec",
            "range": "stddev: 0.000017532582785584176",
            "extra": "mean: 743.1014423076758 usec\nrounds: 1664"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1184.4626033257348,
            "unit": "iter/sec",
            "range": "stddev: 0.00003369898759248911",
            "extra": "mean: 844.2647300068397 usec\nrounds: 1463"
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
        "date": 1641950752502,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 126.16485774749565,
            "unit": "iter/sec",
            "range": "stddev: 0.0006775053780539098",
            "extra": "mean: 7.926137419354795 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 160.67069985465358,
            "unit": "iter/sec",
            "range": "stddev: 0.0003816488208385367",
            "extra": "mean: 6.2239101522842875 msec\nrounds: 197"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 242.18289308245528,
            "unit": "iter/sec",
            "range": "stddev: 0.00032324309331399804",
            "extra": "mean: 4.129110802469161 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 501.39465741594006,
            "unit": "iter/sec",
            "range": "stddev: 0.0004102197040169382",
            "extra": "mean: 1.994436887608146 msec\nrounds: 694"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.69120645439897,
            "unit": "iter/sec",
            "range": "stddev: 0.0006440659218834137",
            "extra": "mean: 8.569626027397222 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 152.53217855120633,
            "unit": "iter/sec",
            "range": "stddev: 0.0004188289262601366",
            "extra": "mean: 6.555993689320392 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 239.6763122154993,
            "unit": "iter/sec",
            "range": "stddev: 0.0003273592273665216",
            "extra": "mean: 4.1722938356164025 msec\nrounds: 292"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 487.1177148094512,
            "unit": "iter/sec",
            "range": "stddev: 0.00026935038251239314",
            "extra": "mean: 2.052891877256355 msec\nrounds: 554"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.388156703135735,
            "unit": "iter/sec",
            "range": "stddev: 0.003180695575880153",
            "extra": "mean: 54.38283000000048 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.92174047411691,
            "unit": "iter/sec",
            "range": "stddev: 0.0033719053531483956",
            "extra": "mean: 50.196417391303655 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 186.26602770996624,
            "unit": "iter/sec",
            "range": "stddev: 0.0004678892595889465",
            "extra": "mean: 5.368665517241256 msec\nrounds: 232"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 295.6911493332869,
            "unit": "iter/sec",
            "range": "stddev: 0.00023054636437202058",
            "extra": "mean: 3.381907109004655 msec\nrounds: 422"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 939.7611012726755,
            "unit": "iter/sec",
            "range": "stddev: 0.00018882847353377005",
            "extra": "mean: 1.0641002257336951 msec\nrounds: 1329"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 859.3306703040256,
            "unit": "iter/sec",
            "range": "stddev: 0.0002442046876070636",
            "extra": "mean: 1.1636963913393277 msec\nrounds: 1247"
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
        "date": 1641958597781,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 125.12018756478672,
            "unit": "iter/sec",
            "range": "stddev: 0.000794989010315349",
            "extra": "mean: 7.992315384615326 msec\nrounds: 143"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 162.87129343883706,
            "unit": "iter/sec",
            "range": "stddev: 0.0004888286207464654",
            "extra": "mean: 6.139817391304314 msec\nrounds: 184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 248.91885025846938,
            "unit": "iter/sec",
            "range": "stddev: 0.00034107289418706835",
            "extra": "mean: 4.017373529411822 msec\nrounds: 272"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 524.6925825300192,
            "unit": "iter/sec",
            "range": "stddev: 0.00020433552033770068",
            "extra": "mean: 1.9058779050736574 msec\nrounds: 611"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.0992745187786,
            "unit": "iter/sec",
            "range": "stddev: 0.0008933528690917",
            "extra": "mean: 8.76429761904769 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 159.92535676396932,
            "unit": "iter/sec",
            "range": "stddev: 0.0003244908153946641",
            "extra": "mean: 6.252917112299335 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 236.95811080846224,
            "unit": "iter/sec",
            "range": "stddev: 0.0003556303674384815",
            "extra": "mean: 4.220155185185111 msec\nrounds: 270"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 505.8087071934146,
            "unit": "iter/sec",
            "range": "stddev: 0.0001802807504261473",
            "extra": "mean: 1.9770319999999788 msec\nrounds: 575"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.82840544414413,
            "unit": "iter/sec",
            "range": "stddev: 0.0019147560211032289",
            "extra": "mean: 53.111242105263486 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.07225295983142,
            "unit": "iter/sec",
            "range": "stddev: 0.0026528549170468487",
            "extra": "mean: 52.432190476192126 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 176.0494179431451,
            "unit": "iter/sec",
            "range": "stddev: 0.0005247987668380031",
            "extra": "mean: 5.68022326732684 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 307.03448879493,
            "unit": "iter/sec",
            "range": "stddev: 0.00030822483808019027",
            "extra": "mean: 3.256963098591525 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 913.5819951260395,
            "unit": "iter/sec",
            "range": "stddev: 0.0002625834254716713",
            "extra": "mean: 1.0945925000000007 msec\nrounds: 1120"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 879.6882571285702,
            "unit": "iter/sec",
            "range": "stddev: 0.00013426327512982764",
            "extra": "mean: 1.136766339548677 msec\nrounds: 1019"
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
        "date": 1641972123859,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 174.46196226535744,
            "unit": "iter/sec",
            "range": "stddev: 0.00001771346709170763",
            "extra": "mean: 5.731908474576225 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 230.53893643644017,
            "unit": "iter/sec",
            "range": "stddev: 0.000016328447834643162",
            "extra": "mean: 4.337662068965521 msec\nrounds: 232"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 351.2488032804816,
            "unit": "iter/sec",
            "range": "stddev: 0.000013617104342493501",
            "extra": "mean: 2.846984788732428 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 717.085786937313,
            "unit": "iter/sec",
            "range": "stddev: 0.000009994971376899933",
            "extra": "mean: 1.394533287671227 msec\nrounds: 730"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 161.9730423197768,
            "unit": "iter/sec",
            "range": "stddev: 0.000019327512071403797",
            "extra": "mean: 6.173866871165763 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 213.0831684322789,
            "unit": "iter/sec",
            "range": "stddev: 0.00001290259893271069",
            "extra": "mean: 4.693003240740788 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 341.46645235205307,
            "unit": "iter/sec",
            "range": "stddev: 0.000011857616350296723",
            "extra": "mean: 2.9285453757225803 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 663.690371017618,
            "unit": "iter/sec",
            "range": "stddev: 0.000011241346371328359",
            "extra": "mean: 1.5067266961651529 msec\nrounds: 678"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 21.97328268558264,
            "unit": "iter/sec",
            "range": "stddev: 0.00005668762605764984",
            "extra": "mean: 45.50981363636355 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.134057234864517,
            "unit": "iter/sec",
            "range": "stddev: 0.00010706844159459145",
            "extra": "mean: 43.226313043478406 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 261.49397251441235,
            "unit": "iter/sec",
            "range": "stddev: 0.000013944851128573415",
            "extra": "mean: 3.8241799242423626 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 439.86654488471595,
            "unit": "iter/sec",
            "range": "stddev: 0.000015955612860403765",
            "extra": "mean: 2.273416816143835 msec\nrounds: 446"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1324.5201302496546,
            "unit": "iter/sec",
            "range": "stddev: 0.0000062111897903438415",
            "extra": "mean: 754.9904128761813 usec\nrounds: 1429"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1181.5211677956106,
            "unit": "iter/sec",
            "range": "stddev: 0.000007767746651065989",
            "extra": "mean: 846.3665546218875 usec\nrounds: 1190"
          }
        ]
      }
    ]
  }
}