window.BENCHMARK_DATA = {
  "lastUpdate": 1641972091473,
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
        "date": 1632323707439,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 107.62450177254833,
            "unit": "iter/sec",
            "range": "stddev: 0.00034895372361200885",
            "extra": "mean: 9.291564500000026 msec\nrounds: 124"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 22.453612121423046,
            "unit": "iter/sec",
            "range": "stddev: 0.0011298811145747459",
            "extra": "mean: 44.53626412500008 msec\nrounds: 24"
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
        "date": 1632402876797,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 107.8146332923911,
            "unit": "iter/sec",
            "range": "stddev: 0.00046548525222759116",
            "extra": "mean: 9.275178790322649 msec\nrounds: 124"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.923441782902724,
            "unit": "iter/sec",
            "range": "stddev: 0.0012098159126615936",
            "extra": "mean: 45.61327595833345 msec\nrounds: 24"
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
        "date": 1632404585300,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 76.84842656938163,
            "unit": "iter/sec",
            "range": "stddev: 0.0008083795893600957",
            "extra": "mean: 13.012628164835133 msec\nrounds: 91"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.002847442764406,
            "unit": "iter/sec",
            "range": "stddev: 0.001747168719176796",
            "extra": "mean: 52.623692476190655 msec\nrounds: 21"
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
        "date": 1632432897456,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 105.12623531331525,
            "unit": "iter/sec",
            "range": "stddev: 0.000182897329286113",
            "extra": "mean: 9.512373357798161 msec\nrounds: 109"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.710672012967077,
            "unit": "iter/sec",
            "range": "stddev: 0.0009277032246193049",
            "extra": "mean: 46.06029695454532 msec\nrounds: 22"
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
        "date": 1632437864751,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 106.44320285447584,
            "unit": "iter/sec",
            "range": "stddev: 0.0005369654415490156",
            "extra": "mean: 9.394681606557379 msec\nrounds: 122"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 22.73152787125043,
            "unit": "iter/sec",
            "range": "stddev: 0.0014993037338404743",
            "extra": "mean: 43.99176358333327 msec\nrounds: 24"
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
        "date": 1632489555689,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 96.84489462497243,
            "unit": "iter/sec",
            "range": "stddev: 0.00016271727253545554",
            "extra": "mean: 10.32578954081633 msec\nrounds: 98"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.093704741567404,
            "unit": "iter/sec",
            "range": "stddev: 0.00005131014964458368",
            "extra": "mean: 49.766830599999906 msec\nrounds: 20"
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
        "date": 1632494416879,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 75.07259825516348,
            "unit": "iter/sec",
            "range": "stddev: 0.0008372164074873927",
            "extra": "mean: 13.320439457831343 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.930096250528734,
            "unit": "iter/sec",
            "range": "stddev: 0.0015699459788900219",
            "extra": "mean: 52.82593319999993 msec\nrounds: 20"
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
        "date": 1632495222658,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 79.04887703766765,
            "unit": "iter/sec",
            "range": "stddev: 0.0010945378569274977",
            "extra": "mean: 12.65040108695648 msec\nrounds: 92"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.936825700722913,
            "unit": "iter/sec",
            "range": "stddev: 0.00371394434648941",
            "extra": "mean: 52.80716080952391 msec\nrounds: 21"
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
        "date": 1632508011229,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.4456571471523,
            "unit": "iter/sec",
            "range": "stddev: 0.0010452128225779157",
            "extra": "mean: 13.99665199999995 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.17352342225776,
            "unit": "iter/sec",
            "range": "stddev: 0.0025197589541581986",
            "extra": "mean: 55.0251031000001 msec\nrounds: 20"
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
        "date": 1632509386472,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.40388857727814,
            "unit": "iter/sec",
            "range": "stddev: 0.0009950453814420125",
            "extra": "mean: 13.811412890243867 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.77971446997742,
            "unit": "iter/sec",
            "range": "stddev: 0.0028036712047218534",
            "extra": "mean: 53.248945909090935 msec\nrounds: 22"
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
        "date": 1632514981054,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 78.11733927605847,
            "unit": "iter/sec",
            "range": "stddev: 0.0004388275557973617",
            "extra": "mean: 12.801255256097562 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.447953233591292,
            "unit": "iter/sec",
            "range": "stddev: 0.0031932093436954543",
            "extra": "mean: 48.90465019047626 msec\nrounds: 21"
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
        "date": 1632515333425,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.95846036606382,
            "unit": "iter/sec",
            "range": "stddev: 0.0009533953912310995",
            "extra": "mean: 14.71487132894739 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.881649826290438,
            "unit": "iter/sec",
            "range": "stddev: 0.0012597735390155029",
            "extra": "mean: 55.92325147368411 msec\nrounds: 19"
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
        "date": 1632515773377,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 65.88873214005848,
            "unit": "iter/sec",
            "range": "stddev: 0.0013308099074788497",
            "extra": "mean: 15.17710187341772 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.7291137482539,
            "unit": "iter/sec",
            "range": "stddev: 0.0020539595957669837",
            "extra": "mean: 53.39280936842135 msec\nrounds: 19"
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
        "date": 1632516660261,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 75.89355808133597,
            "unit": "iter/sec",
            "range": "stddev: 0.0006602894657122533",
            "extra": "mean: 13.176348892857137 msec\nrounds: 84"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.759307658097708,
            "unit": "iter/sec",
            "range": "stddev: 0.0018912372473090034",
            "extra": "mean: 50.609060666666764 msec\nrounds: 21"
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
        "date": 1632750412156,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 94.68554197696506,
            "unit": "iter/sec",
            "range": "stddev: 0.0002562043112308537",
            "extra": "mean: 10.561274499999994 msec\nrounds: 98"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.6505257627301,
            "unit": "iter/sec",
            "range": "stddev: 0.0005543237833572703",
            "extra": "mean: 48.42491719047617 msec\nrounds: 21"
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
        "date": 1632835605806,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.81243611294855,
            "unit": "iter/sec",
            "range": "stddev: 0.00124585037487403",
            "extra": "mean: 14.121813270270236 msec\nrounds: 74"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.732872756275626,
            "unit": "iter/sec",
            "range": "stddev: 0.001459476367423213",
            "extra": "mean: 53.38209536842094 msec\nrounds: 19"
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
        "date": 1633008056044,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.79567745139767,
            "unit": "iter/sec",
            "range": "stddev: 0.0006810059359255234",
            "extra": "mean: 14.535796972222181 msec\nrounds: 72"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.65628346635272,
            "unit": "iter/sec",
            "range": "stddev: 0.002525743207408798",
            "extra": "mean: 56.63706078947379 msec\nrounds: 19"
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
        "date": 1633059811027,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.75277917166312,
            "unit": "iter/sec",
            "range": "stddev: 0.001902929335549325",
            "extra": "mean: 14.133720423529393 msec\nrounds: 85"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.375015239778318,
            "unit": "iter/sec",
            "range": "stddev: 0.0048706544166405045",
            "extra": "mean: 54.421723571428416 msec\nrounds: 21"
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
        "date": 1633203537655,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 96.99866557794618,
            "unit": "iter/sec",
            "range": "stddev: 0.0002526470119592819",
            "extra": "mean: 10.309420176470573 msec\nrounds: 102"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.21857077206748,
            "unit": "iter/sec",
            "range": "stddev: 0.0005305819418793613",
            "extra": "mean: 47.12852768181816 msec\nrounds: 22"
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
        "date": 1633203806054,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 92.32905770497892,
            "unit": "iter/sec",
            "range": "stddev: 0.0001340707130689821",
            "extra": "mean: 10.830826446808567 msec\nrounds: 94"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.43099328210075,
            "unit": "iter/sec",
            "range": "stddev: 0.00016777334270225668",
            "extra": "mean: 48.94524638095218 msec\nrounds: 21"
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
        "date": 1633204000159,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 93.681103860607,
            "unit": "iter/sec",
            "range": "stddev: 0.00012466861206651504",
            "extra": "mean: 10.674511281249973 msec\nrounds: 96"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.487851190586625,
            "unit": "iter/sec",
            "range": "stddev: 0.0005653991439222238",
            "extra": "mean: 48.809413476190294 msec\nrounds: 21"
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
        "date": 1633204653132,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 65.23675959091753,
            "unit": "iter/sec",
            "range": "stddev: 0.0015399465759055693",
            "extra": "mean: 15.328780985915541 msec\nrounds: 71"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.200310586772698,
            "unit": "iter/sec",
            "range": "stddev: 0.005347237284739296",
            "extra": "mean: 58.13848505555565 msec\nrounds: 18"
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
        "date": 1633204867608,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 75.73742436786294,
            "unit": "iter/sec",
            "range": "stddev: 0.001159852404085475",
            "extra": "mean: 13.203512112359633 msec\nrounds: 89"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.92854300238125,
            "unit": "iter/sec",
            "range": "stddev: 0.0028637505241375038",
            "extra": "mean: 50.17928304545448 msec\nrounds: 22"
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
        "date": 1633355646097,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 96.78000801991013,
            "unit": "iter/sec",
            "range": "stddev: 0.0003463894776454007",
            "extra": "mean: 10.332712514285744 msec\nrounds: 105"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.419099729721626,
            "unit": "iter/sec",
            "range": "stddev: 0.0009056126849478668",
            "extra": "mean: 46.68730304347841 msec\nrounds: 23"
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
        "date": 1633838466755,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 55.500281140004084,
            "unit": "iter/sec",
            "range": "stddev: 0.0023462219721539675",
            "extra": "mean: 18.01792674666668 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 46.578183160674705,
            "unit": "iter/sec",
            "range": "stddev: 0.0031807984068620817",
            "extra": "mean: 21.46927879411762 msec\nrounds: 68"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 15.254716079376824,
            "unit": "iter/sec",
            "range": "stddev: 0.011946738285107053",
            "extra": "mean: 65.55349800000023 msec\nrounds: 15"
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
        "date": 1634094692137,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.48825417346103,
            "unit": "iter/sec",
            "range": "stddev: 0.0005885804340158871",
            "extra": "mean: 13.988311948051955 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.21969150058607,
            "unit": "iter/sec",
            "range": "stddev: 0.0005784271491814792",
            "extra": "mean: 14.87659311842098 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 16.38617340004913,
            "unit": "iter/sec",
            "range": "stddev: 0.0022715671786340133",
            "extra": "mean: 61.02706077777754 msec\nrounds: 18"
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
        "date": 1634096225752,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.53183063462225,
            "unit": "iter/sec",
            "range": "stddev: 0.0006771705834136935",
            "extra": "mean: 13.787050337078647 msec\nrounds: 89"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.25099169134228,
            "unit": "iter/sec",
            "range": "stddev: 0.0009201942304694112",
            "extra": "mean: 14.034892374999885 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.420927301910062,
            "unit": "iter/sec",
            "range": "stddev: 0.0030727714198062446",
            "extra": "mean: 51.490847190476295 msec\nrounds: 21"
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
        "date": 1634096590466,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 75.12597716189944,
            "unit": "iter/sec",
            "range": "stddev: 0.0003206257401242809",
            "extra": "mean: 13.310974948717949 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.6025945565921,
            "unit": "iter/sec",
            "range": "stddev: 0.000503092095717193",
            "extra": "mean: 14.163785428571492 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.495766310330364,
            "unit": "iter/sec",
            "range": "stddev: 0.0008565065464424263",
            "extra": "mean: 54.06642705263172 msec\nrounds: 19"
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
        "date": 1634098194078,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 74.48931427530492,
            "unit": "iter/sec",
            "range": "stddev: 0.0015635718324487268",
            "extra": "mean: 13.424744337209253 msec\nrounds: 86"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 74.22744708644915,
            "unit": "iter/sec",
            "range": "stddev: 0.0007573739011254701",
            "extra": "mean: 13.472105525000044 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.386287252062907,
            "unit": "iter/sec",
            "range": "stddev: 0.0014447546311066634",
            "extra": "mean: 51.58285271428594 msec\nrounds: 21"
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
        "date": 1634131624675,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 74.33802022101442,
            "unit": "iter/sec",
            "range": "stddev: 0.0012923009259958771",
            "extra": "mean: 13.452066614457841 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.53609626802208,
            "unit": "iter/sec",
            "range": "stddev: 0.0020169896170893157",
            "extra": "mean: 14.590851455696129 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.522410358200645,
            "unit": "iter/sec",
            "range": "stddev: 0.0018056122826437524",
            "extra": "mean: 57.069774052631466 msec\nrounds: 19"
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
        "date": 1634190487089,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.31733937881535,
            "unit": "iter/sec",
            "range": "stddev: 0.0016639217883631448",
            "extra": "mean: 13.827942352272714 msec\nrounds: 88"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 74.25422987878567,
            "unit": "iter/sec",
            "range": "stddev: 0.0011822815407696045",
            "extra": "mean: 13.46724626506023 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.99513911281801,
            "unit": "iter/sec",
            "range": "stddev: 0.002767260951868844",
            "extra": "mean: 52.64504745454564 msec\nrounds: 22"
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
        "date": 1634190812478,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 118.99054702604002,
            "unit": "iter/sec",
            "range": "stddev: 0.00009615467861227855",
            "extra": "mean: 8.404028933333326 msec\nrounds: 120"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 107.81350869644838,
            "unit": "iter/sec",
            "range": "stddev: 0.00009534922212084193",
            "extra": "mean: 9.27527553913049 msec\nrounds: 115"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.022866748689342,
            "unit": "iter/sec",
            "range": "stddev: 0.0002336976241542311",
            "extra": "mean: 43.43507743478247 msec\nrounds: 23"
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
        "date": 1634191121719,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 85.39013659020189,
            "unit": "iter/sec",
            "range": "stddev: 0.0009874853167990017",
            "extra": "mean: 11.710954448979592 msec\nrounds: 98"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 73.62919392876171,
            "unit": "iter/sec",
            "range": "stddev: 0.0018804874940416393",
            "extra": "mean: 13.581569302083189 msec\nrounds: 96"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.031956324332885,
            "unit": "iter/sec",
            "range": "stddev: 0.0029376337775722816",
            "extra": "mean: 49.9202366363637 msec\nrounds: 22"
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
        "date": 1634237082461,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 78.20336257682571,
            "unit": "iter/sec",
            "range": "stddev: 0.0006725010237139664",
            "extra": "mean: 12.787173940476233 msec\nrounds: 84"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.88278959435081,
            "unit": "iter/sec",
            "range": "stddev: 0.0006172487785029917",
            "extra": "mean: 13.911535788235309 msec\nrounds: 85"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.253279263584727,
            "unit": "iter/sec",
            "range": "stddev: 0.0017431298181924339",
            "extra": "mean: 54.784676526315955 msec\nrounds: 19"
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
        "date": 1634250089736,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 118.88113521688318,
            "unit": "iter/sec",
            "range": "stddev: 0.00010190182103745382",
            "extra": "mean: 8.411763550000007 msec\nrounds: 120"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 108.04668934209701,
            "unit": "iter/sec",
            "range": "stddev: 0.00009247277294820919",
            "extra": "mean: 9.25525813043474 msec\nrounds: 115"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.053201787180043,
            "unit": "iter/sec",
            "range": "stddev: 0.00012020608332175335",
            "extra": "mean: 43.377922478260835 msec\nrounds: 23"
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
        "date": 1634252354982,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.99206388684766,
            "unit": "iter/sec",
            "range": "stddev: 0.0008697357365847172",
            "extra": "mean: 13.700119530120434 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.71199029223311,
            "unit": "iter/sec",
            "range": "stddev: 0.0007194232121090282",
            "extra": "mean: 14.344734611764686 msec\nrounds: 85"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.728721927291883,
            "unit": "iter/sec",
            "range": "stddev: 0.00218437331634741",
            "extra": "mean: 56.405645263158185 msec\nrounds: 19"
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
        "date": 1635032511800,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 120.06597912924178,
            "unit": "iter/sec",
            "range": "stddev: 0.00014065169235759228",
            "extra": "mean: 8.328753967213117 msec\nrounds: 122"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 110.35650121594588,
            "unit": "iter/sec",
            "range": "stddev: 0.00005977665605610605",
            "extra": "mean: 9.06154135897438 msec\nrounds: 117"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.35927232907861,
            "unit": "iter/sec",
            "range": "stddev: 0.00004515782720941628",
            "extra": "mean: 42.8095527083332 msec\nrounds: 24"
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
        "date": 1635032854073,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.16117994761541,
            "unit": "iter/sec",
            "range": "stddev: 0.0012927229696577083",
            "extra": "mean: 14.052605658536576 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 65.84052750830509,
            "unit": "iter/sec",
            "range": "stddev: 0.001640983351397593",
            "extra": "mean: 15.188213670886226 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 16.64057668013074,
            "unit": "iter/sec",
            "range": "stddev: 0.004993182232413276",
            "extra": "mean: 60.0940712105263 msec\nrounds: 19"
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
        "date": 1635061560601,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 119.52744683621377,
            "unit": "iter/sec",
            "range": "stddev: 0.00011028039114411972",
            "extra": "mean: 8.366279264462843 msec\nrounds: 121"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 110.60363694120188,
            "unit": "iter/sec",
            "range": "stddev: 0.00011567489232495478",
            "extra": "mean: 9.041294008547034 msec\nrounds: 117"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.59660074881185,
            "unit": "iter/sec",
            "range": "stddev: 0.0001066009012318104",
            "extra": "mean: 42.37898545833355 msec\nrounds: 24"
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
        "date": 1635177141779,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 74.07709467654664,
            "unit": "iter/sec",
            "range": "stddev: 0.0010457647428760515",
            "extra": "mean: 13.499449517647017 msec\nrounds: 85"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.59521092350812,
            "unit": "iter/sec",
            "range": "stddev: 0.0007362206805436846",
            "extra": "mean: 13.967414679012453 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.003797499597816,
            "unit": "iter/sec",
            "range": "stddev: 0.0029436538071692625",
            "extra": "mean: 55.543837350000125 msec\nrounds: 20"
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
        "date": 1635178098150,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 117.66568199145969,
            "unit": "iter/sec",
            "range": "stddev: 0.0001094714981977803",
            "extra": "mean: 8.498654689075623 msec\nrounds: 119"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 108.06621858784914,
            "unit": "iter/sec",
            "range": "stddev: 0.00013995327943721797",
            "extra": "mean: 9.253585561403543 msec\nrounds: 114"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.239688537123754,
            "unit": "iter/sec",
            "range": "stddev: 0.00015237685049341915",
            "extra": "mean: 43.029836583333335 msec\nrounds: 24"
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
        "date": 1635182734098,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 77.99091963100214,
            "unit": "iter/sec",
            "range": "stddev: 0.0010705851367747402",
            "extra": "mean: 12.82200549411768 msec\nrounds: 85"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 74.78718183500374,
            "unit": "iter/sec",
            "range": "stddev: 0.0007081490346171023",
            "extra": "mean: 13.371275337078623 msec\nrounds: 89"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.659188917095662,
            "unit": "iter/sec",
            "range": "stddev: 0.001962257661094491",
            "extra": "mean: 53.59289754999983 msec\nrounds: 20"
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
        "date": 1635202356651,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 126.02891433333004,
            "unit": "iter/sec",
            "range": "stddev: 0.00011160010972106104",
            "extra": "mean: 7.934687093750014 msec\nrounds: 128"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 114.15913463722832,
            "unit": "iter/sec",
            "range": "stddev: 0.00014577424641463115",
            "extra": "mean: 8.759702000000017 msec\nrounds: 121"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.661700387958273,
            "unit": "iter/sec",
            "range": "stddev: 0.000046355303579136275",
            "extra": "mean: 42.262389583333245 msec\nrounds: 24"
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
        "date": 1635202595469,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 80.95879195557508,
            "unit": "iter/sec",
            "range": "stddev: 0.0008376804807961948",
            "extra": "mean: 12.351962965909063 msec\nrounds: 88"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.76618015986044,
            "unit": "iter/sec",
            "range": "stddev: 0.0018952566029516375",
            "extra": "mean: 13.934139977528165 msec\nrounds: 89"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.008423058589003,
            "unit": "iter/sec",
            "range": "stddev: 0.0021725445463965875",
            "extra": "mean: 52.6082567142858 msec\nrounds: 21"
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
        "date": 1635202805863,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 76.90908713821504,
            "unit": "iter/sec",
            "range": "stddev: 0.0004795745197828745",
            "extra": "mean: 13.002364703703709 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.9511326085417,
            "unit": "iter/sec",
            "range": "stddev: 0.0007269617128034785",
            "extra": "mean: 14.503025000000065 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 16.859111646539013,
            "unit": "iter/sec",
            "range": "stddev: 0.0017256630052520654",
            "extra": "mean: 59.31510633333333 msec\nrounds: 18"
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
        "date": 1635204728132,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 76.4730261189986,
            "unit": "iter/sec",
            "range": "stddev: 0.0011218203791781066",
            "extra": "mean: 13.076506197674382 msec\nrounds: 86"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.72826239168768,
            "unit": "iter/sec",
            "range": "stddev: 0.0011993996085467322",
            "extra": "mean: 13.749812894117664 msec\nrounds: 85"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.62954048560042,
            "unit": "iter/sec",
            "range": "stddev: 0.002576226303683211",
            "extra": "mean: 56.722975894736855 msec\nrounds: 19"
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
        "date": 1635449322761,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.92917974146633,
            "unit": "iter/sec",
            "range": "stddev: 0.0011694092387540724",
            "extra": "mean: 13.711932638554229 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.90347834060618,
            "unit": "iter/sec",
            "range": "stddev: 0.0012780092801939116",
            "extra": "mean: 14.513055423076953 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.230354177750794,
            "unit": "iter/sec",
            "range": "stddev: 0.0012115351276483547",
            "extra": "mean: 58.03711227777776 msec\nrounds: 18"
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
        "date": 1635452397357,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.98502316551973,
            "unit": "iter/sec",
            "range": "stddev: 0.0012364804895344174",
            "extra": "mean: 13.51624906250004 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 66.86933418900291,
            "unit": "iter/sec",
            "range": "stddev: 0.0011313781013136122",
            "extra": "mean: 14.954538012499851 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 16.722171937154453,
            "unit": "iter/sec",
            "range": "stddev: 0.0019682909321281842",
            "extra": "mean: 59.80084427777784 msec\nrounds: 18"
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
        "date": 1635945506347,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.5425139681711,
            "unit": "iter/sec",
            "range": "stddev: 0.0011218551964304734",
            "extra": "mean: 13.597577048192777 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.32038157720474,
            "unit": "iter/sec",
            "range": "stddev: 0.0009098078155874611",
            "extra": "mean: 14.854342423076945 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.2470361895336,
            "unit": "iter/sec",
            "range": "stddev: 0.0009785063021250909",
            "extra": "mean: 57.98097650000016 msec\nrounds: 18"
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
        "date": 1636165003751,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 80.86214695030132,
            "unit": "iter/sec",
            "range": "stddev: 0.0012059683919760603",
            "extra": "mean: 12.366725813186854 msec\nrounds: 91"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 77.09048860481094,
            "unit": "iter/sec",
            "range": "stddev: 0.00138564255590508",
            "extra": "mean: 12.971768866666563 msec\nrounds: 90"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.80428840476774,
            "unit": "iter/sec",
            "range": "stddev: 0.0023974989510201668",
            "extra": "mean: 50.494114181818176 msec\nrounds: 22"
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
        "date": 1636381240598,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 75.59323513379648,
            "unit": "iter/sec",
            "range": "stddev: 0.0014754811051021688",
            "extra": "mean: 13.228696962499976 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.80263662243229,
            "unit": "iter/sec",
            "range": "stddev: 0.0009768630550756189",
            "extra": "mean: 14.123767810126601 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.004296609779427,
            "unit": "iter/sec",
            "range": "stddev: 0.002141005857912012",
            "extra": "mean: 55.54229757894724 msec\nrounds: 19"
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
        "date": 1636382292108,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 100.29976396599851,
            "unit": "iter/sec",
            "range": "stddev: 0.001732118205726544",
            "extra": "mean: 9.97011319327729 msec\nrounds: 119"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 88.47597717495023,
            "unit": "iter/sec",
            "range": "stddev: 0.0016057436993903258",
            "extra": "mean: 11.302503028846175 msec\nrounds: 104"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.993420525373825,
            "unit": "iter/sec",
            "range": "stddev: 0.0030841041618573165",
            "extra": "mean: 52.64981095238073 msec\nrounds: 21"
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
        "date": 1636467506533,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 103.84486447236972,
            "unit": "iter/sec",
            "range": "stddev: 0.0004249307388874159",
            "extra": "mean: 9.629749194444493 msec\nrounds: 108"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 94.32093476107688,
            "unit": "iter/sec",
            "range": "stddev: 0.00028660105481992756",
            "extra": "mean: 10.602100186274518 msec\nrounds: 102"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.29087373313934,
            "unit": "iter/sec",
            "range": "stddev: 0.00010714739809307712",
            "extra": "mean: 49.2832399999999 msec\nrounds: 21"
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
        "date": 1636640315818,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 85.04699039789959,
            "unit": "iter/sec",
            "range": "stddev: 0.0007541005540216798",
            "extra": "mean: 11.758205614583359 msec\nrounds: 96"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 80.63913809377745,
            "unit": "iter/sec",
            "range": "stddev: 0.0010789362159169518",
            "extra": "mean: 12.400926195876162 msec\nrounds: 97"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.743486085225317,
            "unit": "iter/sec",
            "range": "stddev: 0.0025175748553770217",
            "extra": "mean: 50.64961657142869 msec\nrounds: 21"
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
        "date": 1636641099595,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 104.5910773422295,
            "unit": "iter/sec",
            "range": "stddev: 0.00011080754330279986",
            "extra": "mean: 9.561045028037414 msec\nrounds: 107"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 94.44951857691986,
            "unit": "iter/sec",
            "range": "stddev: 0.000139431945875643",
            "extra": "mean: 10.587666459999987 msec\nrounds: 100"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.89110528877891,
            "unit": "iter/sec",
            "range": "stddev: 0.00018101975826859536",
            "extra": "mean: 50.273727150000354 msec\nrounds: 20"
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
        "date": 1636744984477,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 82.19211421256975,
            "unit": "iter/sec",
            "range": "stddev: 0.0009228488963030207",
            "extra": "mean: 12.166617315789509 msec\nrounds: 95"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 77.72577531025767,
            "unit": "iter/sec",
            "range": "stddev: 0.0012199591527090677",
            "extra": "mean: 12.865744934782622 msec\nrounds: 92"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.684891419704318,
            "unit": "iter/sec",
            "range": "stddev: 0.0018716943312932608",
            "extra": "mean: 50.80038180952388 msec\nrounds: 21"
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
        "date": 1636745426499,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 85.07588957042931,
            "unit": "iter/sec",
            "range": "stddev: 0.000627540389676598",
            "extra": "mean: 11.754211505154572 msec\nrounds: 97"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 77.13616971961592,
            "unit": "iter/sec",
            "range": "stddev: 0.0005882393404062885",
            "extra": "mean: 12.964086804347733 msec\nrounds: 92"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.15758037909747,
            "unit": "iter/sec",
            "range": "stddev: 0.0025047834824520137",
            "extra": "mean: 52.19865871428544 msec\nrounds: 21"
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
        "date": 1637159534379,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 122.14559044568676,
            "unit": "iter/sec",
            "range": "stddev: 0.0002233672051651985",
            "extra": "mean: 8.186951295999997 msec\nrounds: 125"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 111.37736036907494,
            "unit": "iter/sec",
            "range": "stddev: 0.0001064184186607325",
            "extra": "mean: 8.978485364406788 msec\nrounds: 118"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 22.91927336863266,
            "unit": "iter/sec",
            "range": "stddev: 0.00044579082546467654",
            "extra": "mean: 43.63140069565211 msec\nrounds: 23"
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
        "date": 1637160571852,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 122.57293142371253,
            "unit": "iter/sec",
            "range": "stddev: 0.00020412842434582512",
            "extra": "mean: 8.158408127999977 msec\nrounds: 125"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 112.1744597376142,
            "unit": "iter/sec",
            "range": "stddev: 0.0000635378867962568",
            "extra": "mean: 8.914685235294083 msec\nrounds: 119"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.126871333417984,
            "unit": "iter/sec",
            "range": "stddev: 0.00048666713944968507",
            "extra": "mean: 43.23974417391318 msec\nrounds: 23"
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
        "date": 1637161263920,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 112.5565741973862,
            "unit": "iter/sec",
            "range": "stddev: 0.00017595178567601056",
            "extra": "mean: 8.88442107563027 msec\nrounds: 119"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 101.53623876960665,
            "unit": "iter/sec",
            "range": "stddev: 0.00018233624728521597",
            "extra": "mean: 9.848700445454504 msec\nrounds: 110"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.254148383473915,
            "unit": "iter/sec",
            "range": "stddev: 0.0004792958111455955",
            "extra": "mean: 47.04963859090898 msec\nrounds: 22"
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
        "date": 1637175090974,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 78.53638908676676,
            "unit": "iter/sec",
            "range": "stddev: 0.0009548479618445173",
            "extra": "mean: 12.732951076923118 msec\nrounds: 91"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 76.52296986203258,
            "unit": "iter/sec",
            "range": "stddev: 0.0008535317891143354",
            "extra": "mean: 13.067971640449322 msec\nrounds: 89"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.162280554313302,
            "unit": "iter/sec",
            "range": "stddev: 0.0025028301942624518",
            "extra": "mean: 55.05916490000003 msec\nrounds: 20"
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
        "date": 1637529685112,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 123.27515856304035,
            "unit": "iter/sec",
            "range": "stddev: 0.0001940190683028257",
            "extra": "mean: 8.111934404761856 msec\nrounds: 126"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 111.9850372805777,
            "unit": "iter/sec",
            "range": "stddev: 0.00010200046813189112",
            "extra": "mean: 8.929764406779697 msec\nrounds: 118"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.174947466956727,
            "unit": "iter/sec",
            "range": "stddev: 0.00038382463170235514",
            "extra": "mean: 43.15004387499988 msec\nrounds: 24"
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
        "date": 1637590892010,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 138.456671975781,
            "unit": "iter/sec",
            "range": "stddev: 0.00027697917148263284",
            "extra": "mean: 7.222476069444462 msec\nrounds: 144"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 126.98992941310269,
            "unit": "iter/sec",
            "range": "stddev: 0.00010701153471890917",
            "extra": "mean: 7.874640175182435 msec\nrounds: 137"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 26.059085561806082,
            "unit": "iter/sec",
            "range": "stddev: 0.00012797423632272774",
            "extra": "mean: 38.37433196296289 msec\nrounds: 27"
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
        "date": 1637591698652,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 140.31463177695812,
            "unit": "iter/sec",
            "range": "stddev: 0.00011426504347961805",
            "extra": "mean: 7.126840496503485 msec\nrounds: 143"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 120.90755846074507,
            "unit": "iter/sec",
            "range": "stddev: 0.0005241501193011994",
            "extra": "mean: 8.270781518797016 msec\nrounds: 133"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 26.191400653378548,
            "unit": "iter/sec",
            "range": "stddev: 0.00007324577566808339",
            "extra": "mean: 38.180470499999984 msec\nrounds: 26"
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
        "date": 1637677285981,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 85.94193557743718,
            "unit": "iter/sec",
            "range": "stddev: 0.0009500667551246685",
            "extra": "mean: 11.635763068181765 msec\nrounds: 88"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 78.39182169742324,
            "unit": "iter/sec",
            "range": "stddev: 0.0008695711812286563",
            "extra": "mean: 12.756432729166573 msec\nrounds: 96"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.047729564816507,
            "unit": "iter/sec",
            "range": "stddev: 0.00395386583927596",
            "extra": "mean: 49.880960173913486 msec\nrounds: 23"
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
        "date": 1637936825326,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 75.07062956896694,
            "unit": "iter/sec",
            "range": "stddev: 0.0013509613111613906",
            "extra": "mean: 13.320788779069796 msec\nrounds: 86"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.74234987252743,
            "unit": "iter/sec",
            "range": "stddev: 0.0009388960410561387",
            "extra": "mean: 14.338490197530831 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.59611973479342,
            "unit": "iter/sec",
            "range": "stddev: 0.002381459542338146",
            "extra": "mean: 56.83071126315793 msec\nrounds: 19"
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
        "date": 1637937379898,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 84.59050933735222,
            "unit": "iter/sec",
            "range": "stddev: 0.000703415957115927",
            "extra": "mean: 11.82165715555557 msec\nrounds: 90"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 75.81538747070827,
            "unit": "iter/sec",
            "range": "stddev: 0.001369417401324896",
            "extra": "mean: 13.189934568181899 msec\nrounds: 88"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.288089244220828,
            "unit": "iter/sec",
            "range": "stddev: 0.0015838547107982378",
            "extra": "mean: 49.290003999999925 msec\nrounds: 21"
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
        "date": 1638198153596,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.52328758309879,
            "unit": "iter/sec",
            "range": "stddev: 0.0015897118416356361",
            "extra": "mean: 13.9814602179487 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.99994010979927,
            "unit": "iter/sec",
            "range": "stddev: 0.0006529506543916452",
            "extra": "mean: 14.492766202531552 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 16.815764467536162,
            "unit": "iter/sec",
            "range": "stddev: 0.002275690869845154",
            "extra": "mean: 59.4680070555555 msec\nrounds: 18"
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
        "date": 1638198593765,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.57245833152037,
            "unit": "iter/sec",
            "range": "stddev: 0.0008898054951446077",
            "extra": "mean: 13.592042765432156 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.79119235764601,
            "unit": "iter/sec",
            "range": "stddev: 0.0008629971093480462",
            "extra": "mean: 14.53674468674698 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 16.59862215206367,
            "unit": "iter/sec",
            "range": "stddev: 0.0035931978849256287",
            "extra": "mean: 60.24596444444471 msec\nrounds: 18"
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
        "date": 1638200236103,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 128.0704076089863,
            "unit": "iter/sec",
            "range": "stddev: 0.00008303954693275717",
            "extra": "mean: 7.808205023076956 msec\nrounds: 130"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 121.94728005531432,
            "unit": "iter/sec",
            "range": "stddev: 0.00003731170301595584",
            "extra": "mean: 8.200264897637798 msec\nrounds: 127"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 26.10076002652538,
            "unit": "iter/sec",
            "range": "stddev: 0.00020368959580323225",
            "extra": "mean: 38.31306057692311 msec\nrounds: 26"
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
        "date": 1638201371595,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 127.36539846230848,
            "unit": "iter/sec",
            "range": "stddev: 0.00010717866791667338",
            "extra": "mean: 7.851425992248062 msec\nrounds: 129"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 119.7040167072562,
            "unit": "iter/sec",
            "range": "stddev: 0.00026208266877955204",
            "extra": "mean: 8.353938552000002 msec\nrounds: 125"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 25.899227813924842,
            "unit": "iter/sec",
            "range": "stddev: 0.00005352484879252122",
            "extra": "mean: 38.61118976923109 msec\nrounds: 26"
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
        "date": 1638203256476,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 122.16767677381256,
            "unit": "iter/sec",
            "range": "stddev: 0.00017391159992289834",
            "extra": "mean: 8.185471201612934 msec\nrounds: 124"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 112.21181048541695,
            "unit": "iter/sec",
            "range": "stddev: 0.0001213415612670764",
            "extra": "mean: 8.911717899159644 msec\nrounds: 119"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.068348378951466,
            "unit": "iter/sec",
            "range": "stddev: 0.00007014264970741655",
            "extra": "mean: 43.34944069565215 msec\nrounds: 23"
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
        "date": 1638281839243,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 136.39751161563026,
            "unit": "iter/sec",
            "range": "stddev: 0.00021448854605783966",
            "extra": "mean: 7.331512049999939 msec\nrounds: 140"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 124.46106261962406,
            "unit": "iter/sec",
            "range": "stddev: 0.00008569522739476468",
            "extra": "mean: 8.0346413484849 msec\nrounds: 132"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 25.905994967872026,
            "unit": "iter/sec",
            "range": "stddev: 0.00003012940670013479",
            "extra": "mean: 38.60110376923084 msec\nrounds: 26"
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
        "date": 1638368575690,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 79.38123963626524,
            "unit": "iter/sec",
            "range": "stddev: 0.0006879147772592696",
            "extra": "mean: 12.597434917647105 msec\nrounds: 85"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 73.36175753190332,
            "unit": "iter/sec",
            "range": "stddev: 0.0007063158166277049",
            "extra": "mean: 13.631080192771053 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.76048403268243,
            "unit": "iter/sec",
            "range": "stddev: 0.002966966595463357",
            "extra": "mean: 53.30352874999979 msec\nrounds: 20"
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
        "date": 1638369545655,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 112.2970245318713,
            "unit": "iter/sec",
            "range": "stddev: 0.00036448794887064106",
            "extra": "mean: 8.904955444444456 msec\nrounds: 126"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 103.96173608417008,
            "unit": "iter/sec",
            "range": "stddev: 0.0005645212857305825",
            "extra": "mean: 9.618923631578971 msec\nrounds: 114"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.85291835344466,
            "unit": "iter/sec",
            "range": "stddev: 0.0009257334389270286",
            "extra": "mean: 45.760478478261035 msec\nrounds: 23"
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
        "date": 1638454678546,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 122.41483854305464,
            "unit": "iter/sec",
            "range": "stddev: 0.00022399716346273348",
            "extra": "mean: 8.168944319999973 msec\nrounds: 125"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 111.89910271174959,
            "unit": "iter/sec",
            "range": "stddev: 0.00010279314154473809",
            "extra": "mean: 8.936622151260542 msec\nrounds: 119"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.10455204889961,
            "unit": "iter/sec",
            "range": "stddev: 0.00004224327760671698",
            "extra": "mean: 43.281514304347944 msec\nrounds: 23"
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
        "date": 1638801097143,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 121.2682700968836,
            "unit": "iter/sec",
            "range": "stddev: 0.00025988183368743094",
            "extra": "mean: 8.246180135999964 msec\nrounds: 125"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 111.55520513481567,
            "unit": "iter/sec",
            "range": "stddev: 0.00010989668169304805",
            "extra": "mean: 8.964171584745769 msec\nrounds: 118"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.080845832638378,
            "unit": "iter/sec",
            "range": "stddev: 0.00007318343290693944",
            "extra": "mean: 43.32596852173896 msec\nrounds: 23"
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
        "date": 1638802654223,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 113.96776594424253,
            "unit": "iter/sec",
            "range": "stddev: 0.00027249372175628284",
            "extra": "mean: 8.77441083199998 msec\nrounds: 125"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 100.60248320957085,
            "unit": "iter/sec",
            "range": "stddev: 0.00026162766909879087",
            "extra": "mean: 9.940112491227898 msec\nrounds: 114"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.3815826582596,
            "unit": "iter/sec",
            "range": "stddev: 0.0010526682551237343",
            "extra": "mean: 46.76922265217374 msec\nrounds: 23"
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
        "date": 1638807287265,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 81.76932160076014,
            "unit": "iter/sec",
            "range": "stddev: 0.0006961655991922649",
            "extra": "mean: 12.229525455555498 msec\nrounds: 90"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 75.99913428075816,
            "unit": "iter/sec",
            "range": "stddev: 0.0006612526650217859",
            "extra": "mean: 13.158044620689646 msec\nrounds: 87"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.663850727081776,
            "unit": "iter/sec",
            "range": "stddev: 0.002130817188195554",
            "extra": "mean: 53.57951125000007 msec\nrounds: 20"
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
        "date": 1638972767681,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 102.9562661368254,
            "unit": "iter/sec",
            "range": "stddev: 0.0012903349767728464",
            "extra": "mean: 9.712861951219498 msec\nrounds: 123"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 97.31821877998146,
            "unit": "iter/sec",
            "range": "stddev: 0.0013502226062411151",
            "extra": "mean: 10.275568259842645 msec\nrounds: 127"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.897832249426422,
            "unit": "iter/sec",
            "range": "stddev: 0.004111514214791847",
            "extra": "mean: 50.2567308571428 msec\nrounds: 21"
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
        "date": 1638972981405,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 126.82751580450535,
            "unit": "iter/sec",
            "range": "stddev: 0.00007176747979233206",
            "extra": "mean: 7.884724333333324 msec\nrounds: 129"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 113.32411170965834,
            "unit": "iter/sec",
            "range": "stddev: 0.00011117538709433292",
            "extra": "mean: 8.82424741666669 msec\nrounds: 120"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.156059009265743,
            "unit": "iter/sec",
            "range": "stddev: 0.0001064007440414774",
            "extra": "mean: 43.1852414782609 msec\nrounds: 23"
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
        "date": 1639146007688,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 81.9193000232467,
            "unit": "iter/sec",
            "range": "stddev: 0.0006849947944215277",
            "extra": "mean: 12.20713555555558 msec\nrounds: 90"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.70328397688048,
            "unit": "iter/sec",
            "range": "stddev: 0.0009752361800831026",
            "extra": "mean: 14.143614606741515 msec\nrounds: 89"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.194834888576846,
            "unit": "iter/sec",
            "range": "stddev: 0.0021324851963451844",
            "extra": "mean: 54.96065263157864 msec\nrounds: 19"
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
        "date": 1639254916911,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 123.22410649953915,
            "unit": "iter/sec",
            "range": "stddev: 0.00015998240520996687",
            "extra": "mean: 8.11529520000001 msec\nrounds: 125"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 110.89709971857681,
            "unit": "iter/sec",
            "range": "stddev: 0.0000633026605770311",
            "extra": "mean: 9.017368376068413 msec\nrounds: 117"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.142840116338974,
            "unit": "iter/sec",
            "range": "stddev: 0.00004386196645685093",
            "extra": "mean: 43.20990833333349 msec\nrounds: 24"
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
        "date": 1639406073083,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 124.67326452094767,
            "unit": "iter/sec",
            "range": "stddev: 0.0001316795632815772",
            "extra": "mean: 8.020965873015857 msec\nrounds: 126"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 111.26217413265688,
            "unit": "iter/sec",
            "range": "stddev: 0.000192756714942126",
            "extra": "mean: 8.987780508474597 msec\nrounds: 118"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 22.93615720641587,
            "unit": "iter/sec",
            "range": "stddev: 0.0000909864707832411",
            "extra": "mean: 43.599282608695795 msec\nrounds: 23"
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
        "date": 1639406831714,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 123.86988392801997,
            "unit": "iter/sec",
            "range": "stddev: 0.00013276608240609205",
            "extra": "mean: 8.072987301587316 msec\nrounds: 126"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 111.87237446533113,
            "unit": "iter/sec",
            "range": "stddev: 0.00012002232645483212",
            "extra": "mean: 8.93875726495728 msec\nrounds: 117"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.06803224068422,
            "unit": "iter/sec",
            "range": "stddev: 0.00007510818626674533",
            "extra": "mean: 43.3500347826087 msec\nrounds: 23"
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
        "date": 1639411055921,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 123.74465992294564,
            "unit": "iter/sec",
            "range": "stddev: 0.0001139120057509425",
            "extra": "mean: 8.081156800000002 msec\nrounds: 125"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 110.61536937213607,
            "unit": "iter/sec",
            "range": "stddev: 0.000059424117529594915",
            "extra": "mean: 9.040335042735022 msec\nrounds: 117"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.228140505086337,
            "unit": "iter/sec",
            "range": "stddev: 0.000059152062547663784",
            "extra": "mean: 43.05122916666648 msec\nrounds: 24"
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
        "date": 1639412192925,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 121.30897866449024,
            "unit": "iter/sec",
            "range": "stddev: 0.00034422412767855286",
            "extra": "mean: 8.243412903225783 msec\nrounds: 124"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 109.86008465856071,
            "unit": "iter/sec",
            "range": "stddev: 0.0000672009284746365",
            "extra": "mean: 9.102487068965463 msec\nrounds: 116"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.015728949163975,
            "unit": "iter/sec",
            "range": "stddev: 0.00024104275718329972",
            "extra": "mean: 43.44854782608674 msec\nrounds: 23"
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
        "date": 1639418891221,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 125.14628319480512,
            "unit": "iter/sec",
            "range": "stddev: 0.00008515768740859906",
            "extra": "mean: 7.990648818897647 msec\nrounds: 127"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 111.3072613367151,
            "unit": "iter/sec",
            "range": "stddev: 0.00010392688516356595",
            "extra": "mean: 8.984139830508493 msec\nrounds: 118"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 22.863577605145668,
            "unit": "iter/sec",
            "range": "stddev: 0.00028638933497206746",
            "extra": "mean: 43.737686956521635 msec\nrounds: 23"
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
        "date": 1639577930835,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 122.43942431921218,
            "unit": "iter/sec",
            "range": "stddev: 0.00017891034175557708",
            "extra": "mean: 8.167304000000009 msec\nrounds: 125"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 110.30469267274188,
            "unit": "iter/sec",
            "range": "stddev: 0.00006101864816928902",
            "extra": "mean: 9.065797435897453 msec\nrounds: 117"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 22.98503903809023,
            "unit": "iter/sec",
            "range": "stddev: 0.00019316921865434504",
            "extra": "mean: 43.506560869564986 msec\nrounds: 23"
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
        "date": 1639665572527,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 125.01008939697866,
            "unit": "iter/sec",
            "range": "stddev: 0.00014495658395223803",
            "extra": "mean: 7.999354330708676 msec\nrounds: 127"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 112.54457805618979,
            "unit": "iter/sec",
            "range": "stddev: 0.00007043329929527336",
            "extra": "mean: 8.885368067226953 msec\nrounds: 119"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.108421633179972,
            "unit": "iter/sec",
            "range": "stddev: 0.00014140748294122805",
            "extra": "mean: 43.274266666666705 msec\nrounds: 24"
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
        "date": 1639668020312,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 108.81730102756524,
            "unit": "iter/sec",
            "range": "stddev: 0.00021532237627080902",
            "extra": "mean: 9.189715151515138 msec\nrounds: 132"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 98.39518350209725,
            "unit": "iter/sec",
            "range": "stddev: 0.00025926619330319113",
            "extra": "mean: 10.163099090909114 msec\nrounds: 110"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.76248341843805,
            "unit": "iter/sec",
            "range": "stddev: 0.0009562673781305394",
            "extra": "mean: 48.16379523809535 msec\nrounds: 21"
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
        "date": 1639668887966,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 108.23259684597254,
            "unit": "iter/sec",
            "range": "stddev: 0.0002933228293774828",
            "extra": "mean: 9.23936068376069 msec\nrounds: 117"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 96.41839584429607,
            "unit": "iter/sec",
            "range": "stddev: 0.0001929468113792774",
            "extra": "mean: 10.371464814814777 msec\nrounds: 108"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.550213369929672,
            "unit": "iter/sec",
            "range": "stddev: 0.0005244549260670856",
            "extra": "mean: 48.66129523809524 msec\nrounds: 21"
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
        "date": 1639751106793,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 122.95813265746266,
            "unit": "iter/sec",
            "range": "stddev: 0.00007204110679589356",
            "extra": "mean: 8.132849600000064 msec\nrounds: 125"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 109.70048269158019,
            "unit": "iter/sec",
            "range": "stddev: 0.00006110080654108465",
            "extra": "mean: 9.115730172413842 msec\nrounds: 116"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.1752216709953,
            "unit": "iter/sec",
            "range": "stddev: 0.0001363015061535613",
            "extra": "mean: 43.1495333333333 msec\nrounds: 24"
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
        "date": 1640010796430,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 140.84580565622935,
            "unit": "iter/sec",
            "range": "stddev: 0.00013512379596646552",
            "extra": "mean: 7.099962937062954 msec\nrounds: 143"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 126.0786902268223,
            "unit": "iter/sec",
            "range": "stddev: 0.00010950028503796191",
            "extra": "mean: 7.9315544776119316 msec\nrounds: 134"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 26.165534022074695,
            "unit": "iter/sec",
            "range": "stddev: 0.00007115886724417289",
            "extra": "mean: 38.21821481481496 msec\nrounds: 27"
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
        "date": 1640011378893,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 124.5184545243776,
            "unit": "iter/sec",
            "range": "stddev: 0.00009385826749492302",
            "extra": "mean: 8.030938095238124 msec\nrounds: 126"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 111.53394237797374,
            "unit": "iter/sec",
            "range": "stddev: 0.00007245001608360507",
            "extra": "mean: 8.965880508474564 msec\nrounds: 118"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 22.850112402683457,
            "unit": "iter/sec",
            "range": "stddev: 0.00013807393190590293",
            "extra": "mean: 43.76346086956503 msec\nrounds: 23"
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
        "date": 1640724282787,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 139.5377448617186,
            "unit": "iter/sec",
            "range": "stddev: 0.00007630167844322257",
            "extra": "mean: 7.166519718309884 msec\nrounds: 142"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 124.4260497629361,
            "unit": "iter/sec",
            "range": "stddev: 0.00012087763313305536",
            "extra": "mean: 8.036902255639067 msec\nrounds: 133"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 25.72827086723579,
            "unit": "iter/sec",
            "range": "stddev: 0.0007083967850012509",
            "extra": "mean: 38.86774999999985 msec\nrounds: 26"
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
        "date": 1640787694690,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 76.96703694225342,
            "unit": "iter/sec",
            "range": "stddev: 0.000832324740823441",
            "extra": "mean: 12.992575000000025 msec\nrounds: 84"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.01179983952183,
            "unit": "iter/sec",
            "range": "stddev: 0.0011658947257350732",
            "extra": "mean: 14.4902756097562 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.33122611299675,
            "unit": "iter/sec",
            "range": "stddev: 0.0015181904850475889",
            "extra": "mean: 57.699322222222726 msec\nrounds: 18"
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
        "date": 1640792883471,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 64.06100560068609,
            "unit": "iter/sec",
            "range": "stddev: 0.007849286896714576",
            "extra": "mean: 15.6101202380952 msec\nrounds: 84"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.72124635636042,
            "unit": "iter/sec",
            "range": "stddev: 0.0012377398506250546",
            "extra": "mean: 14.551540506329104 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.012028165491888,
            "unit": "iter/sec",
            "range": "stddev: 0.0027032274057544763",
            "extra": "mean: 58.78193888888886 msec\nrounds: 18"
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
        "date": 1640874521990,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 122.63870216465105,
            "unit": "iter/sec",
            "range": "stddev: 0.00009695533039958777",
            "extra": "mean: 8.154032800000035 msec\nrounds: 125"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 109.8206300587894,
            "unit": "iter/sec",
            "range": "stddev: 0.000091209602598797",
            "extra": "mean: 9.105757264957212 msec\nrounds: 117"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 22.855854979401336,
            "unit": "iter/sec",
            "range": "stddev: 0.0009926451176752356",
            "extra": "mean: 43.75246521739144 msec\nrounds: 23"
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
        "date": 1640876101526,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 77.82726319444954,
            "unit": "iter/sec",
            "range": "stddev: 0.0008400547729227605",
            "extra": "mean: 12.848967816091953 msec\nrounds: 87"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.86396187073498,
            "unit": "iter/sec",
            "range": "stddev: 0.001041320769407715",
            "extra": "mean: 13.915180487804808 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.548631645447454,
            "unit": "iter/sec",
            "range": "stddev: 0.003448488507544438",
            "extra": "mean: 56.984499999999976 msec\nrounds: 19"
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
        "date": 1641219670207,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 82.58076486655835,
            "unit": "iter/sec",
            "range": "stddev: 0.0010821129853247026",
            "extra": "mean: 12.109357446808497 msec\nrounds: 94"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.84830443425993,
            "unit": "iter/sec",
            "range": "stddev: 0.0014324761485264015",
            "extra": "mean: 14.11466382978719 msec\nrounds: 94"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.654237297220686,
            "unit": "iter/sec",
            "range": "stddev: 0.003886063792370991",
            "extra": "mean: 50.87961363636382 msec\nrounds: 22"
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
        "date": 1641221030022,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 86.32912171916989,
            "unit": "iter/sec",
            "range": "stddev: 0.0005749299861722132",
            "extra": "mean: 11.583576666666634 msec\nrounds: 90"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 75.51733934532355,
            "unit": "iter/sec",
            "range": "stddev: 0.001140566080303735",
            "extra": "mean: 13.241991954023014 msec\nrounds: 87"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.88926807884091,
            "unit": "iter/sec",
            "range": "stddev: 0.0005699451509954509",
            "extra": "mean: 47.87147142857135 msec\nrounds: 21"
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
        "date": 1641445462877,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 123.11210999109458,
            "unit": "iter/sec",
            "range": "stddev: 0.00027524664107347776",
            "extra": "mean: 8.122677777777797 msec\nrounds: 126"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 111.44487907947342,
            "unit": "iter/sec",
            "range": "stddev: 0.00009758643912726259",
            "extra": "mean: 8.97304576271182 msec\nrounds: 118"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.16327328070108,
            "unit": "iter/sec",
            "range": "stddev: 0.00007207874426975176",
            "extra": "mean: 43.17179130434768 msec\nrounds: 23"
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
        "date": 1641480661906,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 87.20828059361219,
            "unit": "iter/sec",
            "range": "stddev: 0.0007891847252128425",
            "extra": "mean: 11.466801010100959 msec\nrounds: 99"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 83.00850068211182,
            "unit": "iter/sec",
            "range": "stddev: 0.0006280052780464654",
            "extra": "mean: 12.046958947368365 msec\nrounds: 95"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.40480347623654,
            "unit": "iter/sec",
            "range": "stddev: 0.0016382323988824701",
            "extra": "mean: 49.00806818181813 msec\nrounds: 22"
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
        "date": 1641494690984,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 123.29370147714732,
            "unit": "iter/sec",
            "range": "stddev: 0.00010925089923893365",
            "extra": "mean: 8.110714399999999 msec\nrounds: 125"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 111.03871977101353,
            "unit": "iter/sec",
            "range": "stddev: 0.00006284152595467524",
            "extra": "mean: 9.005867521367518 msec\nrounds: 117"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 22.965845195025924,
            "unit": "iter/sec",
            "range": "stddev: 0.0000741871463783091",
            "extra": "mean: 43.5429217391305 msec\nrounds: 23"
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
        "date": 1641498057111,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 94.2159641885117,
            "unit": "iter/sec",
            "range": "stddev: 0.00016406094454901374",
            "extra": "mean: 10.613912500000035 msec\nrounds: 96"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 85.8073990004007,
            "unit": "iter/sec",
            "range": "stddev: 0.00006866229326830363",
            "extra": "mean: 11.65400666666671 msec\nrounds: 90"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.158963838867468,
            "unit": "iter/sec",
            "range": "stddev: 0.00005399802357226058",
            "extra": "mean: 52.194889473684206 msec\nrounds: 19"
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
        "date": 1641506696991,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 93.6158203715243,
            "unit": "iter/sec",
            "range": "stddev: 0.0003550069831396096",
            "extra": "mean: 10.681955208333315 msec\nrounds: 96"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 86.59352463035117,
            "unit": "iter/sec",
            "range": "stddev: 0.0003005204197533273",
            "extra": "mean: 11.548207608695702 msec\nrounds: 92"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.560776457197196,
            "unit": "iter/sec",
            "range": "stddev: 0.00011539869229872783",
            "extra": "mean: 51.12271499999989 msec\nrounds: 20"
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
        "date": 1641512187671,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 108.891036927463,
            "unit": "iter/sec",
            "range": "stddev: 0.0006686439432053287",
            "extra": "mean: 9.18349230769235 msec\nrounds: 117"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 90.74299513702574,
            "unit": "iter/sec",
            "range": "stddev: 0.000380648990445515",
            "extra": "mean: 11.020134375000053 msec\nrounds: 128"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.23220868305608,
            "unit": "iter/sec",
            "range": "stddev: 0.0034466328832257927",
            "extra": "mean: 47.09825600000009 msec\nrounds: 25"
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
        "date": 1641519765088,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 107.53911554589982,
            "unit": "iter/sec",
            "range": "stddev: 0.0005889066828462544",
            "extra": "mean: 9.298942016806715 msec\nrounds: 119"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 97.13212825292958,
            "unit": "iter/sec",
            "range": "stddev: 0.0006989239191361239",
            "extra": "mean: 10.295254700854754 msec\nrounds: 117"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 24.41025793245487,
            "unit": "iter/sec",
            "range": "stddev: 0.0013195853302837908",
            "extra": "mean: 40.96638400000032 msec\nrounds: 25"
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
        "date": 1641521606623,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 97.63748566601171,
            "unit": "iter/sec",
            "range": "stddev: 0.00037014160862302545",
            "extra": "mean: 10.241967961165011 msec\nrounds: 103"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 85.90978939472875,
            "unit": "iter/sec",
            "range": "stddev: 0.00026271653389698394",
            "extra": "mean: 11.640116999999979 msec\nrounds: 100"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.714600660597707,
            "unit": "iter/sec",
            "range": "stddev: 0.0007196436277743545",
            "extra": "mean: 46.051963636363475 msec\nrounds: 22"
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
        "date": 1641524164522,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 107.10643323490925,
            "unit": "iter/sec",
            "range": "stddev: 0.00016727942563844208",
            "extra": "mean: 9.33650733944961 msec\nrounds: 109"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 96.68659769246997,
            "unit": "iter/sec",
            "range": "stddev: 0.00012149156054088432",
            "extra": "mean: 10.342695098039227 msec\nrounds: 102"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.59159179940551,
            "unit": "iter/sec",
            "range": "stddev: 0.00004168131336760613",
            "extra": "mean: 42.38798333333315 msec\nrounds: 24"
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
        "date": 1641566000965,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 115.42047240899929,
            "unit": "iter/sec",
            "range": "stddev: 0.0007754065896878857",
            "extra": "mean: 8.663974242424176 msec\nrounds: 132"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 107.34134969982777,
            "unit": "iter/sec",
            "range": "stddev: 0.00045612210428425744",
            "extra": "mean: 9.316074399999877 msec\nrounds: 125"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 25.157321777612633,
            "unit": "iter/sec",
            "range": "stddev: 0.0016372727678529756",
            "extra": "mean: 39.74985925925925 msec\nrounds: 27"
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
        "date": 1641567881630,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 63.16877075128428,
            "unit": "iter/sec",
            "range": "stddev: 0.001206114410522527",
            "extra": "mean: 15.830607246376866 msec\nrounds: 69"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 54.56000989354843,
            "unit": "iter/sec",
            "range": "stddev: 0.0023408886564431947",
            "extra": "mean: 18.328442424242432 msec\nrounds: 66"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 16.917565122522188,
            "unit": "iter/sec",
            "range": "stddev: 0.003505609089837463",
            "extra": "mean: 59.11016111111107 msec\nrounds: 18"
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
        "date": 1641679845331,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 85.2317873875656,
            "unit": "iter/sec",
            "range": "stddev: 0.0015774849809695943",
            "extra": "mean: 11.732711827956914 msec\nrounds: 93"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 80.30806172477594,
            "unit": "iter/sec",
            "range": "stddev: 0.0007301834897721349",
            "extra": "mean: 12.452050000000048 msec\nrounds: 88"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.05190663384522,
            "unit": "iter/sec",
            "range": "stddev: 0.003074647601420549",
            "extra": "mean: 52.48818500000026 msec\nrounds: 20"
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
        "date": 1641700610082,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 78.3755217570449,
            "unit": "iter/sec",
            "range": "stddev: 0.001516579329028979",
            "extra": "mean: 12.759085714285705 msec\nrounds: 91"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 75.7926539494723,
            "unit": "iter/sec",
            "range": "stddev: 0.000759889511037204",
            "extra": "mean: 13.193890804597727 msec\nrounds: 87"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.548971959447172,
            "unit": "iter/sec",
            "range": "stddev: 0.0025704489083033305",
            "extra": "mean: 46.405926086956335 msec\nrounds: 23"
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
        "date": 1641709578621,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 94.22450450922501,
            "unit": "iter/sec",
            "range": "stddev: 0.00032376596043928886",
            "extra": "mean: 10.61295047619057 msec\nrounds: 105"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 85.4545040220585,
            "unit": "iter/sec",
            "range": "stddev: 0.0002838035106427525",
            "extra": "mean: 11.702133333333355 msec\nrounds: 99"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.04451584699871,
            "unit": "iter/sec",
            "range": "stddev: 0.0007889955963642848",
            "extra": "mean: 47.518318181818195 msec\nrounds: 22"
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
        "date": 1641827264309,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 62.64586670953646,
            "unit": "iter/sec",
            "range": "stddev: 0.0013855328114677548",
            "extra": "mean: 15.96274507042253 msec\nrounds: 71"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 58.14220385507096,
            "unit": "iter/sec",
            "range": "stddev: 0.0011294965829738543",
            "extra": "mean: 17.199210447761235 msec\nrounds: 67"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 16.71927510424693,
            "unit": "iter/sec",
            "range": "stddev: 0.004444637803343178",
            "extra": "mean: 59.81120555555582 msec\nrounds: 18"
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
        "date": 1641827440644,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 66.09750545370535,
            "unit": "iter/sec",
            "range": "stddev: 0.0013678480262352608",
            "extra": "mean: 15.129163999999957 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 60.894065014174565,
            "unit": "iter/sec",
            "range": "stddev: 0.0010230415214543542",
            "extra": "mean: 16.421961643835502 msec\nrounds: 73"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.11515178714997,
            "unit": "iter/sec",
            "range": "stddev: 0.0021663662167023218",
            "extra": "mean: 58.42776111111084 msec\nrounds: 18"
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
        "date": 1641829183597,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 60.942814524578374,
            "unit": "iter/sec",
            "range": "stddev: 0.001416256180187611",
            "extra": "mean: 16.40882535211264 msec\nrounds: 71"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 59.14070983810901,
            "unit": "iter/sec",
            "range": "stddev: 0.0010787324498657785",
            "extra": "mean: 16.908826470588306 msec\nrounds: 68"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 16.907909661038744,
            "unit": "iter/sec",
            "range": "stddev: 0.0025586704622541406",
            "extra": "mean: 59.14391666666644 msec\nrounds: 18"
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
        "date": 1641830989372,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 66.28993116711334,
            "unit": "iter/sec",
            "range": "stddev: 0.0013539679165870669",
            "extra": "mean: 15.08524722222224 msec\nrounds: 72"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 57.74270703333802,
            "unit": "iter/sec",
            "range": "stddev: 0.0015761944977804457",
            "extra": "mean: 17.318204347826047 msec\nrounds: 69"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 16.95836147557716,
            "unit": "iter/sec",
            "range": "stddev: 0.0022823355239083047",
            "extra": "mean: 58.96796111111118 msec\nrounds: 18"
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
        "date": 1641833192096,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 92.83565043702836,
            "unit": "iter/sec",
            "range": "stddev: 0.00015848915469774484",
            "extra": "mean: 10.771723958333368 msec\nrounds: 96"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 83.53201124997808,
            "unit": "iter/sec",
            "range": "stddev: 0.00010380064241446661",
            "extra": "mean: 11.971458426966375 msec\nrounds: 89"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.412053259129404,
            "unit": "iter/sec",
            "range": "stddev: 0.00022482174155596807",
            "extra": "mean: 48.990661904761815 msec\nrounds: 21"
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
        "date": 1641847133422,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 69.07969088404123,
            "unit": "iter/sec",
            "range": "stddev: 0.0010639026017823239",
            "extra": "mean: 14.476034666666694 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 64.41439065798028,
            "unit": "iter/sec",
            "range": "stddev: 0.0009859506328430136",
            "extra": "mean: 15.524481250000155 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.133278691720218,
            "unit": "iter/sec",
            "range": "stddev: 0.0022884990371481303",
            "extra": "mean: 55.14722499999998 msec\nrounds: 20"
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
        "date": 1641848001556,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 94.28604442431275,
            "unit": "iter/sec",
            "range": "stddev: 0.0002354343000705231",
            "extra": "mean: 10.606023469387782 msec\nrounds: 98"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 84.48887772061005,
            "unit": "iter/sec",
            "range": "stddev: 0.00017395350086404053",
            "extra": "mean: 11.835877419354832 msec\nrounds: 93"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.19308832991956,
            "unit": "iter/sec",
            "range": "stddev: 0.00023379460503214887",
            "extra": "mean: 49.52189499999991 msec\nrounds: 20"
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
        "date": 1641872032893,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)]",
            "value": 156.76889387638874,
            "unit": "iter/sec",
            "range": "stddev: 0.00001815453781865036",
            "extra": "mean: 6.378816455696202 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)]",
            "value": 294.75311755822526,
            "unit": "iter/sec",
            "range": "stddev: 0.00001423580966182714",
            "extra": "mean: 3.392669798657722 msec\nrounds: 298"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)]",
            "value": 144.68557495718633,
            "unit": "iter/sec",
            "range": "stddev: 0.000029065259208599508",
            "extra": "mean: 6.911539041095895 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)]",
            "value": 285.42158700943594,
            "unit": "iter/sec",
            "range": "stddev: 0.000013401910601770231",
            "extra": "mean: 3.5035892361110736 msec\nrounds: 288"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)]",
            "value": 22.25445139826157,
            "unit": "iter/sec",
            "range": "stddev: 0.00004781017802208996",
            "extra": "mean: 44.93483043478287 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)]",
            "value": 222.579008128586,
            "unit": "iter/sec",
            "range": "stddev: 0.000020776622336289187",
            "extra": "mean: 4.492786666666654 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1328.4694666675582,
            "unit": "iter/sec",
            "range": "stddev: 0.000005981163638284696",
            "extra": "mean: 752.7459419210304 usec\nrounds: 1343"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1145.590264154474,
            "unit": "iter/sec",
            "range": "stddev: 0.000005970935440989301",
            "extra": "mean: 872.9124463518989 usec\nrounds: 1165"
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
        "date": 1641889866402,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)]",
            "value": 187.68664943373858,
            "unit": "iter/sec",
            "range": "stddev: 0.000015349345495124458",
            "extra": "mean: 5.328029473684237 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)]",
            "value": 354.3717280458574,
            "unit": "iter/sec",
            "range": "stddev: 0.000020507091896980126",
            "extra": "mean: 2.8218955431754846 msec\nrounds: 359"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)]",
            "value": 173.1995026025175,
            "unit": "iter/sec",
            "range": "stddev: 0.00001691116913637129",
            "extra": "mean: 5.773688636363698 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)]",
            "value": 343.5531706118556,
            "unit": "iter/sec",
            "range": "stddev: 0.000011547079092444689",
            "extra": "mean: 2.9107575931231744 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)]",
            "value": 26.27739016464558,
            "unit": "iter/sec",
            "range": "stddev: 0.000048790279728773496",
            "extra": "mean: 38.05552962962932 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)]",
            "value": 270.80266007278664,
            "unit": "iter/sec",
            "range": "stddev: 0.000012166552664753476",
            "extra": "mean: 3.692725912408758 msec\nrounds: 274"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1561.4750675659081,
            "unit": "iter/sec",
            "range": "stddev: 0.0000055634822654172185",
            "extra": "mean: 640.4200878844907 usec\nrounds: 1593"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1363.5931467620946,
            "unit": "iter/sec",
            "range": "stddev: 0.000005262653048829686",
            "extra": "mean: 733.3565751445284 usec\nrounds: 1384"
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
        "date": 1641892571825,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 190.23526355411295,
            "unit": "iter/sec",
            "range": "stddev: 0.000015221010518772182",
            "extra": "mean: 5.2566489583333595 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 242.08208050896064,
            "unit": "iter/sec",
            "range": "stddev: 0.000008546656163609925",
            "extra": "mean: 4.1308303278688365 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 354.2126610167126,
            "unit": "iter/sec",
            "range": "stddev: 0.000010619000842497563",
            "extra": "mean: 2.8231627777777755 msec\nrounds: 360"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 518.5497911665806,
            "unit": "iter/sec",
            "range": "stddev: 0.0007920838751945424",
            "extra": "mean: 1.9284551204818763 msec\nrounds: 664"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 174.73159942988633,
            "unit": "iter/sec",
            "range": "stddev: 0.00003618198409829119",
            "extra": "mean: 5.723063276835997 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 225.6847543883725,
            "unit": "iter/sec",
            "range": "stddev: 0.00001261645700372658",
            "extra": "mean: 4.4309594713656955 msec\nrounds: 227"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 340.52946229413044,
            "unit": "iter/sec",
            "range": "stddev: 0.00002242679659074752",
            "extra": "mean: 2.9366034682081503 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 613.4393634882239,
            "unit": "iter/sec",
            "range": "stddev: 0.000009550977796016264",
            "extra": "mean: 1.6301529695024157 msec\nrounds: 623"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.17941919504114,
            "unit": "iter/sec",
            "range": "stddev: 0.0002238867473550782",
            "extra": "mean: 38.19794444444429 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.61207791733988,
            "unit": "iter/sec",
            "range": "stddev: 0.0000915784109053604",
            "extra": "mean: 36.21603571428495 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 270.38633750710966,
            "unit": "iter/sec",
            "range": "stddev: 0.00001269988746057217",
            "extra": "mean: 3.6984117216118793 msec\nrounds: 273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 422.055581867087,
            "unit": "iter/sec",
            "range": "stddev: 0.000019963179665767905",
            "extra": "mean: 2.3693561771561127 msec\nrounds: 429"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1573.6164799143733,
            "unit": "iter/sec",
            "range": "stddev: 0.000005511094263771336",
            "extra": "mean: 635.4788557211945 usec\nrounds: 1608"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1374.5544874086952,
            "unit": "iter/sec",
            "range": "stddev: 0.000005564673182524838",
            "extra": "mean: 727.508446671471 usec\nrounds: 1397"
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
        "date": 1641910613855,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 188.93856687228362,
            "unit": "iter/sec",
            "range": "stddev: 0.00001626890225216162",
            "extra": "mean: 5.292725654450251 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 239.5070530884634,
            "unit": "iter/sec",
            "range": "stddev: 0.0000122542003956981",
            "extra": "mean: 4.175242386831272 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 352.5597218392696,
            "unit": "iter/sec",
            "range": "stddev: 0.000012345569595131242",
            "extra": "mean: 2.836398879551804 msec\nrounds: 357"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 582.8600865084328,
            "unit": "iter/sec",
            "range": "stddev: 0.00036787691100349866",
            "extra": "mean: 1.7156776096822888 msec\nrounds: 661"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 172.17092496157898,
            "unit": "iter/sec",
            "range": "stddev: 0.000020065646764032804",
            "extra": "mean: 5.808181609195375 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 223.70334956172766,
            "unit": "iter/sec",
            "range": "stddev: 0.000012729046839009069",
            "extra": "mean: 4.470205752212328 msec\nrounds: 226"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 339.7522880839452,
            "unit": "iter/sec",
            "range": "stddev: 0.00001248132671984937",
            "extra": "mean: 2.9433208695651887 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 610.7935782284165,
            "unit": "iter/sec",
            "range": "stddev: 0.000011503456875092828",
            "extra": "mean: 1.6372143317231034 msec\nrounds: 621"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 29.29142862499029,
            "unit": "iter/sec",
            "range": "stddev: 0.000043979512471736854",
            "extra": "mean: 34.13967999999971 msec\nrounds: 30"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 30.836912819172984,
            "unit": "iter/sec",
            "range": "stddev: 0.00010342655812135559",
            "extra": "mean: 32.42866774193575 msec\nrounds: 31"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 303.6928456494442,
            "unit": "iter/sec",
            "range": "stddev: 0.00001308958322913065",
            "extra": "mean: 3.2928006514658246 msec\nrounds: 307"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 472.11988842561243,
            "unit": "iter/sec",
            "range": "stddev: 0.000012679564139332528",
            "extra": "mean: 2.1181060669456646 msec\nrounds: 478"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1738.7303260698682,
            "unit": "iter/sec",
            "range": "stddev: 0.000005666486898662403",
            "extra": "mean: 575.1323163841893 usec\nrounds: 1770"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1511.3804486247607,
            "unit": "iter/sec",
            "range": "stddev: 0.000005851488936613918",
            "extra": "mean: 661.646775244395 usec\nrounds: 1535"
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
        "date": 1641914771175,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 211.24799363994885,
            "unit": "iter/sec",
            "range": "stddev: 0.00001157190034817741",
            "extra": "mean: 4.733772769953027 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 269.19927763540846,
            "unit": "iter/sec",
            "range": "stddev: 0.000015633196157259534",
            "extra": "mean: 3.714720220588242 msec\nrounds: 272"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 396.19936752173555,
            "unit": "iter/sec",
            "range": "stddev: 0.00001704229492733239",
            "extra": "mean: 2.5239818181818268 msec\nrounds: 407"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 724.741648751932,
            "unit": "iter/sec",
            "range": "stddev: 0.000011516281139165382",
            "extra": "mean: 1.3798020325202598 msec\nrounds: 738"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 193.7457105342188,
            "unit": "iter/sec",
            "range": "stddev: 0.000015140986295227096",
            "extra": "mean: 5.161404591836798 msec\nrounds: 196"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 250.57859293159746,
            "unit": "iter/sec",
            "range": "stddev: 0.000017687378328876726",
            "extra": "mean: 3.990763888888858 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 383.06130687815147,
            "unit": "iter/sec",
            "range": "stddev: 0.000009721333312763206",
            "extra": "mean: 2.610548186528512 msec\nrounds: 386"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 690.4908805670436,
            "unit": "iter/sec",
            "range": "stddev: 0.000010643726595402048",
            "extra": "mean: 1.448245050215264 msec\nrounds: 697"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 29.196471817803438,
            "unit": "iter/sec",
            "range": "stddev: 0.00006903279098736918",
            "extra": "mean: 34.25071379310357 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 30.683129188247275,
            "unit": "iter/sec",
            "range": "stddev: 0.0000585098225375899",
            "extra": "mean: 32.59119999999986 msec\nrounds: 31"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 302.13936109805053,
            "unit": "iter/sec",
            "range": "stddev: 0.000018586439597975996",
            "extra": "mean: 3.309730967741999 msec\nrounds: 310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 469.0403561345297,
            "unit": "iter/sec",
            "range": "stddev: 0.000014122155151958726",
            "extra": "mean: 2.132012708333312 msec\nrounds: 480"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1744.1110560793982,
            "unit": "iter/sec",
            "range": "stddev: 0.000008271194137740419",
            "extra": "mean: 573.3579845815027 usec\nrounds: 1816"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1541.0531953862344,
            "unit": "iter/sec",
            "range": "stddev: 0.000007197774678217191",
            "extra": "mean: 648.9068664170089 usec\nrounds: 1602"
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
        "date": 1641939824151,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.0041010301151,
            "unit": "iter/sec",
            "range": "stddev: 0.0008148443916062773",
            "extra": "mean: 8.474281751824847 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 163.64896500875545,
            "unit": "iter/sec",
            "range": "stddev: 0.0005179390552213947",
            "extra": "mean: 6.1106405405405315 msec\nrounds: 185"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 227.1071096374374,
            "unit": "iter/sec",
            "range": "stddev: 0.00044090488613201075",
            "extra": "mean: 4.403208695652192 msec\nrounds: 276"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 523.4613791792815,
            "unit": "iter/sec",
            "range": "stddev: 0.0003055407366938583",
            "extra": "mean: 1.9103606106870161 msec\nrounds: 655"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.92604674167329,
            "unit": "iter/sec",
            "range": "stddev: 0.0009331772846377168",
            "extra": "mean: 9.180540650406407 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.61684999831067,
            "unit": "iter/sec",
            "range": "stddev: 0.0007438698949303693",
            "extra": "mean: 6.728712121212144 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 222.09677715448063,
            "unit": "iter/sec",
            "range": "stddev: 0.0004446204991808705",
            "extra": "mean: 4.502541697417088 msec\nrounds: 271"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 509.34792031858734,
            "unit": "iter/sec",
            "range": "stddev: 0.00022821732955744257",
            "extra": "mean: 1.9632945578231067 msec\nrounds: 588"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.471204229311894,
            "unit": "iter/sec",
            "range": "stddev: 0.0009534613439864058",
            "extra": "mean: 48.84910476190454 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.521879012799527,
            "unit": "iter/sec",
            "range": "stddev: 0.0028066137756466427",
            "extra": "mean: 51.22457727272818 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 179.58981331015877,
            "unit": "iter/sec",
            "range": "stddev: 0.0003105827735067933",
            "extra": "mean: 5.568244554455658 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 310.90292742393854,
            "unit": "iter/sec",
            "range": "stddev: 0.00032344439417454233",
            "extra": "mean: 3.216438031914791 msec\nrounds: 376"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 897.6562431116447,
            "unit": "iter/sec",
            "range": "stddev: 0.00026589810706872165",
            "extra": "mean: 1.1140121930568765 msec\nrounds: 1181"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 854.9108950050805,
            "unit": "iter/sec",
            "range": "stddev: 0.00020947060758602304",
            "extra": "mean: 1.169712546468433 msec\nrounds: 1076"
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
        "date": 1641944494190,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 169.0666751049328,
            "unit": "iter/sec",
            "range": "stddev: 0.0005190657954524259",
            "extra": "mean: 5.9148262032085315 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 217.8882846080243,
            "unit": "iter/sec",
            "range": "stddev: 0.0008040381821754074",
            "extra": "mean: 4.589507883817506 msec\nrounds: 241"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 341.6711653370069,
            "unit": "iter/sec",
            "range": "stddev: 0.00039812904422461843",
            "extra": "mean: 2.926790731707346 msec\nrounds: 410"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 719.5921025549883,
            "unit": "iter/sec",
            "range": "stddev: 0.00031398495187683073",
            "extra": "mean: 1.3896761741122419 msec\nrounds: 873"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 155.75637983502702,
            "unit": "iter/sec",
            "range": "stddev: 0.00045935419235729386",
            "extra": "mean: 6.4202827586206945 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 203.2766578223297,
            "unit": "iter/sec",
            "range": "stddev: 0.0008197078509551827",
            "extra": "mean: 4.9194039823009685 msec\nrounds: 226"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 332.2323595912842,
            "unit": "iter/sec",
            "range": "stddev: 0.00042563795664445054",
            "extra": "mean: 3.0099416000001042 msec\nrounds: 375"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 673.4082497273937,
            "unit": "iter/sec",
            "range": "stddev: 0.00021322447005200928",
            "extra": "mean: 1.4849832926828797 msec\nrounds: 820"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.499132377207488,
            "unit": "iter/sec",
            "range": "stddev: 0.001003474925885854",
            "extra": "mean: 44.44615833333376 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.851372921719385,
            "unit": "iter/sec",
            "range": "stddev: 0.0014290790805058901",
            "extra": "mean: 41.92630769230841 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 257.4683528482973,
            "unit": "iter/sec",
            "range": "stddev: 0.0003742578594725363",
            "extra": "mean: 3.883972491909362 msec\nrounds: 309"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 418.0923573649706,
            "unit": "iter/sec",
            "range": "stddev: 0.0004385623038945847",
            "extra": "mean: 2.3918160243409026 msec\nrounds: 493"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1326.1064568883673,
            "unit": "iter/sec",
            "range": "stddev: 0.000155231627610362",
            "extra": "mean: 754.087271655733 usec\nrounds: 1697"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1124.1553595373716,
            "unit": "iter/sec",
            "range": "stddev: 0.0002432771053975418",
            "extra": "mean: 889.5567605633569 usec\nrounds: 1420"
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
        "date": 1641950690632,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 180.59416418167265,
            "unit": "iter/sec",
            "range": "stddev: 0.00012241485741992458",
            "extra": "mean: 5.537277489177492 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 236.7914970723456,
            "unit": "iter/sec",
            "range": "stddev: 0.00012531599445037586",
            "extra": "mean: 4.223124615384629 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 369.48271317222446,
            "unit": "iter/sec",
            "range": "stddev: 0.00011950657436046169",
            "extra": "mean: 2.706486567164177 msec\nrounds: 402"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 761.8142040963678,
            "unit": "iter/sec",
            "range": "stddev: 0.00004468023830402211",
            "extra": "mean: 1.312656018518529 msec\nrounds: 864"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 159.02208144275193,
            "unit": "iter/sec",
            "range": "stddev: 0.0006127489856461482",
            "extra": "mean: 6.288434857142786 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 217.53155026634744,
            "unit": "iter/sec",
            "range": "stddev: 0.00011970929385974539",
            "extra": "mean: 4.597034309623554 msec\nrounds: 239"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 352.7882151096715,
            "unit": "iter/sec",
            "range": "stddev: 0.00007186582722312907",
            "extra": "mean: 2.8345618055555777 msec\nrounds: 432"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 713.761216898292,
            "unit": "iter/sec",
            "range": "stddev: 0.00005771543680142233",
            "extra": "mean: 1.4010287703016173 msec\nrounds: 862"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.19807342682766,
            "unit": "iter/sec",
            "range": "stddev: 0.0007017288284895143",
            "extra": "mean: 41.325603999999885 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.914978713724086,
            "unit": "iter/sec",
            "range": "stddev: 0.0007029761486997868",
            "extra": "mean: 38.58772222222274 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 280.5912001569337,
            "unit": "iter/sec",
            "range": "stddev: 0.0001770368077742844",
            "extra": "mean: 3.563903641456693 msec\nrounds: 357"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 463.94877765267336,
            "unit": "iter/sec",
            "range": "stddev: 0.00011694609525617232",
            "extra": "mean: 2.155410355986823 msec\nrounds: 618"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1488.6281093626837,
            "unit": "iter/sec",
            "range": "stddev: 0.00006017309541144307",
            "extra": "mean: 671.7594499999891 usec\nrounds: 2000"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1260.477583219241,
            "unit": "iter/sec",
            "range": "stddev: 0.00005223823378106202",
            "extra": "mean: 793.3500867552241 usec\nrounds: 1729"
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
        "date": 1641958541896,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 142.69303387717204,
            "unit": "iter/sec",
            "range": "stddev: 0.0012691056790687962",
            "extra": "mean: 7.008050588235334 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 196.99595495669533,
            "unit": "iter/sec",
            "range": "stddev: 0.0005089742994251179",
            "extra": "mean: 5.0762463636363755 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 280.95449020149664,
            "unit": "iter/sec",
            "range": "stddev: 0.0005168911620701536",
            "extra": "mean: 3.559295312499949 msec\nrounds: 320"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 597.8913767415632,
            "unit": "iter/sec",
            "range": "stddev: 0.0004138980360472187",
            "extra": "mean: 1.672544610778434 msec\nrounds: 668"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 133.63466640464287,
            "unit": "iter/sec",
            "range": "stddev: 0.0011406286509352303",
            "extra": "mean: 7.483088235293841 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 189.51049439298757,
            "unit": "iter/sec",
            "range": "stddev: 0.0005077448932679566",
            "extra": "mean: 5.276752631578819 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 272.0806530772907,
            "unit": "iter/sec",
            "range": "stddev: 0.0007128024239419874",
            "extra": "mean: 3.675380769230685 msec\nrounds: 312"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 607.6969537889103,
            "unit": "iter/sec",
            "range": "stddev: 0.00019916443126412293",
            "extra": "mean: 1.645557039187266 msec\nrounds: 689"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.015783872430355,
            "unit": "iter/sec",
            "range": "stddev: 0.0009266374913473366",
            "extra": "mean: 38.43820370370342 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.822448895332194,
            "unit": "iter/sec",
            "range": "stddev: 0.0015252377484336703",
            "extra": "mean: 37.282203571428035 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 214.14386410204526,
            "unit": "iter/sec",
            "range": "stddev: 0.00042159441700262873",
            "extra": "mean: 4.6697578947369385 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 379.3895009864418,
            "unit": "iter/sec",
            "range": "stddev: 0.00039889724929580877",
            "extra": "mean: 2.635813583137971 msec\nrounds: 427"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1071.4157644180443,
            "unit": "iter/sec",
            "range": "stddev: 0.00013866341473518453",
            "extra": "mean: 933.3444897958592 usec\nrounds: 1225"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1032.0635730639099,
            "unit": "iter/sec",
            "range": "stddev: 0.0002404005817935771",
            "extra": "mean: 968.9325600663126 usec\nrounds: 1207"
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
        "date": 1641972089336,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 127.45702480683927,
            "unit": "iter/sec",
            "range": "stddev: 0.0008689894349762353",
            "extra": "mean: 7.845781756756813 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 171.31938034033385,
            "unit": "iter/sec",
            "range": "stddev: 0.0005946927788562",
            "extra": "mean: 5.837051231527069 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 248.34711199903185,
            "unit": "iter/sec",
            "range": "stddev: 0.0006214319150794932",
            "extra": "mean: 4.026622222222171 msec\nrounds: 288"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 560.4011188272416,
            "unit": "iter/sec",
            "range": "stddev: 0.0004396196254774095",
            "extra": "mean: 1.7844361233480626 msec\nrounds: 681"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.66911699993337,
            "unit": "iter/sec",
            "range": "stddev: 0.001300037052601323",
            "extra": "mean: 8.57124855072462 msec\nrounds: 138"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 154.90162054181963,
            "unit": "iter/sec",
            "range": "stddev: 0.0006447700571908341",
            "extra": "mean: 6.455710382513556 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 242.46019611780414,
            "unit": "iter/sec",
            "range": "stddev: 0.0003043005251179895",
            "extra": "mean: 4.1243883161512 msec\nrounds: 291"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 511.9095521772924,
            "unit": "iter/sec",
            "range": "stddev: 0.0003663477863497948",
            "extra": "mean: 1.9534700920245078 msec\nrounds: 652"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.02669272044026,
            "unit": "iter/sec",
            "range": "stddev: 0.0014641524369319175",
            "extra": "mean: 49.933357142857105 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.465009282932705,
            "unit": "iter/sec",
            "range": "stddev: 0.0016058431357873874",
            "extra": "mean: 44.51366956521704 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 174.87888834785147,
            "unit": "iter/sec",
            "range": "stddev: 0.0006814524962723722",
            "extra": "mean: 5.718243119266065 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 302.37880413809387,
            "unit": "iter/sec",
            "range": "stddev: 0.0003869815599748696",
            "extra": "mean: 3.3071101092896322 msec\nrounds: 366"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 966.8528147564207,
            "unit": "iter/sec",
            "range": "stddev: 0.00037158971405328755",
            "extra": "mean: 1.034283589743626 msec\nrounds: 1170"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 876.8496618419978,
            "unit": "iter/sec",
            "range": "stddev: 0.0003368038370896256",
            "extra": "mean: 1.1404463541666885 msec\nrounds: 1152"
          }
        ]
      }
    ]
  }
}