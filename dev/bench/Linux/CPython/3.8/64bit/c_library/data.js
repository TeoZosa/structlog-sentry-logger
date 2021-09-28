window.BENCHMARK_DATA = {
  "lastUpdate": 1632835607162,
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
      }
    ]
  }
}