window.BENCHMARK_DATA = {
  "lastUpdate": 1632750289674,
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
      }
    ]
  }
}