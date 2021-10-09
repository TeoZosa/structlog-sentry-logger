window.BENCHMARK_DATA = {
  "lastUpdate": 1633815751782,
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
        "date": 1632258884080,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.61574297660698,
            "unit": "iter/sec",
            "range": "stddev: 0.0010517920321310606",
            "extra": "mean: 13.963410256410329 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.200637744764373,
            "unit": "iter/sec",
            "range": "stddev: 0.007043985786735545",
            "extra": "mean: 81.96292857142876 msec\nrounds: 14"
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
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "id": "a208950b450fd4bf11b08fcb9cd8671f83ca42d5",
          "message": ":construction_worker: Invoke `tox-%` target directly when benchmarking in CI",
          "timestamp": "2021-09-21T20:55:29Z",
          "tree_id": "1c37749a5fb85d6155bbe2f0ae768542dc655be8"
        },
        "date": 1632258884080,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.61574297660698,
            "unit": "iter/sec",
            "range": "stddev: 0.0010517920321310606",
            "extra": "mean: 13.963410256410329 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.200637744764373,
            "unit": "iter/sec",
            "range": "stddev: 0.007043985786735545",
            "extra": "mean: 81.96292857142876 msec\nrounds: 14"
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
        "date": 1632259176839,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.01018358863601,
            "unit": "iter/sec",
            "range": "stddev: 0.0013536945284874436",
            "extra": "mean: 14.082487179487217 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.882258002182645,
            "unit": "iter/sec",
            "range": "stddev: 0.0031284717787330133",
            "extra": "mean: 77.62614285714272 msec\nrounds: 14"
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
        "date": 1632277230719,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 77.40230136392526,
            "unit": "iter/sec",
            "range": "stddev: 0.0002942062048648843",
            "extra": "mean: 12.919512500000007 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.152332190333038,
            "unit": "iter/sec",
            "range": "stddev: 0.000788943973553425",
            "extra": "mean: 76.03214285714286 msec\nrounds: 14"
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
        "date": 1632278550708,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 80.59431193791407,
            "unit": "iter/sec",
            "range": "stddev: 0.0002768732379916114",
            "extra": "mean: 12.407823529411743 msec\nrounds: 85"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.744016771365558,
            "unit": "iter/sec",
            "range": "stddev: 0.0016231401429974287",
            "extra": "mean: 72.75893333333319 msec\nrounds: 15"
          }
        ]
      },
      {
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
        "date": 1632322171997,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.88130028437591,
            "unit": "iter/sec",
            "range": "stddev: 0.0008926311876229371",
            "extra": "mean: 14.108093333333306 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.930151714821665,
            "unit": "iter/sec",
            "range": "stddev: 0.005233128496318111",
            "extra": "mean: 83.8212307692307 msec\nrounds: 13"
          }
        ]
      },
      {
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
        "date": 1632323156789,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.73477219285246,
            "unit": "iter/sec",
            "range": "stddev: 0.000873270402032834",
            "extra": "mean: 13.748582278480946 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.820335813903922,
            "unit": "iter/sec",
            "range": "stddev: 0.002078113465844031",
            "extra": "mean: 78.0010769230771 msec\nrounds: 13"
          }
        ]
      },
      {
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
        "date": 1632324216421,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 77.4313929529879,
            "unit": "iter/sec",
            "range": "stddev: 0.00046456232474039036",
            "extra": "mean: 12.91465853658535 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.570585948821444,
            "unit": "iter/sec",
            "range": "stddev: 0.0016432234352764692",
            "extra": "mean: 73.6887857142857 msec\nrounds: 14"
          }
        ]
      },
      {
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
        "date": 1632403704425,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 76.85446989392173,
            "unit": "iter/sec",
            "range": "stddev: 0.0005018896711183422",
            "extra": "mean: 13.011604938271624 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.563512600987611,
            "unit": "iter/sec",
            "range": "stddev: 0.001016926226699586",
            "extra": "mean: 73.72721428571431 msec\nrounds: 14"
          }
        ]
      },
      {
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
        "date": 1632404723299,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 76.5968039983531,
            "unit": "iter/sec",
            "range": "stddev: 0.0005776391141556113",
            "extra": "mean: 13.055375000000014 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.405077307080857,
            "unit": "iter/sec",
            "range": "stddev: 0.0017086519247641184",
            "extra": "mean: 74.59859999999985 msec\nrounds: 15"
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
        "date": 1632432951003,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.39559043069515,
            "unit": "iter/sec",
            "range": "stddev: 0.001260267389186458",
            "extra": "mean: 14.41013749999998 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.180527089278307,
            "unit": "iter/sec",
            "range": "stddev: 0.0020888102529256353",
            "extra": "mean: 75.86949999999996 msec\nrounds: 12"
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
        "date": 1632437927260,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.91326784506666,
            "unit": "iter/sec",
            "range": "stddev: 0.0006623249952757652",
            "extra": "mean: 13.714924999999988 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.044928597651484,
            "unit": "iter/sec",
            "range": "stddev: 0.004519537244132199",
            "extra": "mean: 76.65814285714319 msec\nrounds: 14"
          }
        ]
      },
      {
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
        "date": 1632490306525,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 74.48213431420555,
            "unit": "iter/sec",
            "range": "stddev: 0.0003765122043970882",
            "extra": "mean: 13.426038461538496 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.303002487661459,
            "unit": "iter/sec",
            "range": "stddev: 0.002402406229659631",
            "extra": "mean: 75.17100000000003 msec\nrounds: 14"
          }
        ]
      },
      {
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
        "date": 1632494821812,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 65.7821782922567,
            "unit": "iter/sec",
            "range": "stddev: 0.0004953302087849342",
            "extra": "mean: 15.201685714285798 msec\nrounds: 70"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.599784244013074,
            "unit": "iter/sec",
            "range": "stddev: 0.001235824310844444",
            "extra": "mean: 86.20849999999992 msec\nrounds: 12"
          }
        ]
      },
      {
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
        "date": 1632496330423,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 78.96331630706658,
            "unit": "iter/sec",
            "range": "stddev: 0.0007093344185692333",
            "extra": "mean: 12.664108433734922 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.632720867118902,
            "unit": "iter/sec",
            "range": "stddev: 0.0013745693291571412",
            "extra": "mean: 73.35292857142882 msec\nrounds: 14"
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
        "date": 1632508255330,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.49995903380753,
            "unit": "iter/sec",
            "range": "stddev: 0.00035410469463831486",
            "extra": "mean: 14.184405405405418 msec\nrounds: 74"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.938858349075625,
            "unit": "iter/sec",
            "range": "stddev: 0.0022051030924546845",
            "extra": "mean: 77.28657142857135 msec\nrounds: 14"
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
        "date": 1632509870495,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.42654105461027,
            "unit": "iter/sec",
            "range": "stddev: 0.0006731743383478836",
            "extra": "mean: 14.199192307692327 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.631831494983482,
            "unit": "iter/sec",
            "range": "stddev: 0.0013977843692277478",
            "extra": "mean: 73.35771428571432 msec\nrounds: 14"
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
        "date": 1632515037280,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 63.295201688823155,
            "unit": "iter/sec",
            "range": "stddev: 0.0014625577155201067",
            "extra": "mean: 15.798985915492908 msec\nrounds: 71"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.954594610500934,
            "unit": "iter/sec",
            "range": "stddev: 0.004777382823369414",
            "extra": "mean: 83.64984615384603 msec\nrounds: 13"
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
        "date": 1632515615479,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.96630271582701,
            "unit": "iter/sec",
            "range": "stddev: 0.0006728186044476633",
            "extra": "mean: 14.292594594594618 msec\nrounds: 74"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.401630595539807,
            "unit": "iter/sec",
            "range": "stddev: 0.0012151100094907347",
            "extra": "mean: 74.61778571428538 msec\nrounds: 14"
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
        "date": 1632516252514,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.5251111710834,
            "unit": "iter/sec",
            "range": "stddev: 0.0007564382844609685",
            "extra": "mean: 14.179346666666703 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.779722862213811,
            "unit": "iter/sec",
            "range": "stddev: 0.0013542869921633926",
            "extra": "mean: 72.5703999999999 msec\nrounds: 15"
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
        "date": 1632516687825,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 57.19160617859961,
            "unit": "iter/sec",
            "range": "stddev: 0.00030960391818938616",
            "extra": "mean: 17.485083333333407 msec\nrounds: 60"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.499409169611218,
            "unit": "iter/sec",
            "range": "stddev: 0.0021274040689836546",
            "extra": "mean: 95.24345454545507 msec\nrounds: 11"
          }
        ]
      },
      {
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
        "date": 1632750070706,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.21511694512499,
            "unit": "iter/sec",
            "range": "stddev: 0.0007836242789286023",
            "extra": "mean: 14.241947368421062 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.029388716921634,
            "unit": "iter/sec",
            "range": "stddev: 0.001373063095322393",
            "extra": "mean: 76.74957142857146 msec\nrounds: 14"
          }
        ]
      },
      {
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
        "date": 1632836420742,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.09029272175202,
            "unit": "iter/sec",
            "range": "stddev: 0.0006320130577965028",
            "extra": "mean: 14.473813333333373 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.887428313680013,
            "unit": "iter/sec",
            "range": "stddev: 0.001958064703888898",
            "extra": "mean: 77.59499999999996 msec\nrounds: 14"
          }
        ]
      },
      {
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
        "date": 1633008433339,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.1142478438156,
            "unit": "iter/sec",
            "range": "stddev: 0.0006198168812711856",
            "extra": "mean: 14.681216216216274 msec\nrounds: 74"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.700810281111977,
            "unit": "iter/sec",
            "range": "stddev: 0.0019100059892022579",
            "extra": "mean: 85.4641666666666 msec\nrounds: 12"
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
        "date": 1633059976401,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 66.38300226347584,
            "unit": "iter/sec",
            "range": "stddev: 0.00039695269380497187",
            "extra": "mean: 15.064097222222252 msec\nrounds: 72"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.364701804430524,
            "unit": "iter/sec",
            "range": "stddev: 0.002830000453742371",
            "extra": "mean: 87.99175000000004 msec\nrounds: 12"
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
        "date": 1633203697676,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 62.941354393044065,
            "unit": "iter/sec",
            "range": "stddev: 0.0009234860414218988",
            "extra": "mean: 15.88780555555561 msec\nrounds: 72"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.307559008967853,
            "unit": "iter/sec",
            "range": "stddev: 0.0012567710761624017",
            "extra": "mean: 88.43641666666653 msec\nrounds: 12"
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
        "date": 1633204085487,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.81968594350445,
            "unit": "iter/sec",
            "range": "stddev: 0.00039077705578840534",
            "extra": "mean: 14.322608108108128 msec\nrounds: 74"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.604707940744575,
            "unit": "iter/sec",
            "range": "stddev: 0.0018956320608853028",
            "extra": "mean: 86.1719230769231 msec\nrounds: 13"
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
        "date": 1633204510590,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.62855367229488,
            "unit": "iter/sec",
            "range": "stddev: 0.0003623720226308055",
            "extra": "mean: 14.571194444444435 msec\nrounds: 72"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.700546976292985,
            "unit": "iter/sec",
            "range": "stddev: 0.0020638519077132485",
            "extra": "mean: 93.45316666666625 msec\nrounds: 12"
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
        "date": 1633205213765,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 59.71635572107925,
            "unit": "iter/sec",
            "range": "stddev: 0.0010459580841904854",
            "extra": "mean: 16.74583098591548 msec\nrounds: 71"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.118914942153884,
            "unit": "iter/sec",
            "range": "stddev: 0.0033230309503478163",
            "extra": "mean: 89.93683333333303 msec\nrounds: 12"
          }
        ]
      },
      {
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
        "date": 1633356185800,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 64.88438698876122,
            "unit": "iter/sec",
            "range": "stddev: 0.0010001657144383552",
            "extra": "mean: 15.412028169014102 msec\nrounds: 71"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.138417109418764,
            "unit": "iter/sec",
            "range": "stddev: 0.00167396435282989",
            "extra": "mean: 89.7793636363635 msec\nrounds: 11"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "6a93db071a7c88642fb7c9d235fc325f4bcf76c0",
          "message": "Merge pull request #299 from TeoZosa/dependabot/pip/emoji-1.6.0",
          "timestamp": "2021-10-06T13:26:23Z",
          "tree_id": "ae0e1fa92b395ebb6e46e6dcf64db4ff7148ab36"
        },
        "date": 1633529223002,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.47016025515832,
            "unit": "iter/sec",
            "range": "stddev: 0.0008264187423199718",
            "extra": "mean: 13.99185333333327 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.102164611781165,
            "unit": "iter/sec",
            "range": "stddev: 0.0014949103566297406",
            "extra": "mean: 82.62984615384624 msec\nrounds: 13"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "4f69af02ecbbfbfae0e136f83ad479b6b386e46c",
          "message": "Merge pull request #300 from TeoZosa/dependabot/pip/xdoctest-0.15.10",
          "timestamp": "2021-10-06T13:44:55Z",
          "tree_id": "8b30ac83a96e77c23bc0dc3658e54100fd6a90fb"
        },
        "date": 1633531778949,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.3727329075379,
            "unit": "iter/sec",
            "range": "stddev: 0.0005101963702653429",
            "extra": "mean: 14.842799999999949 msec\nrounds: 70"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.923937533283887,
            "unit": "iter/sec",
            "range": "stddev: 0.005768159616035222",
            "extra": "mean: 91.54208333333321 msec\nrounds: 12"
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
          "id": "764d015c2fbf5cee6de562a0ca91be3bc38f1fc6",
          "message": "Merge pull request #301 from TeoZosa/dependabot/pip/coverage-6.0.1\n\n⬆️ Bump coverage from 6.0b1 to 6.0.1",
          "timestamp": "2021-10-07T18:42:08Z",
          "tree_id": "7a05a3eb5596f02f3c0e1725d43be0ca44e05943"
        },
        "date": 1633632443065,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 66.21542083578574,
            "unit": "iter/sec",
            "range": "stddev: 0.0009957255719878083",
            "extra": "mean: 15.102222222222228 msec\nrounds: 72"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.452418689684832,
            "unit": "iter/sec",
            "range": "stddev: 0.003322434567383496",
            "extra": "mean: 95.67163636363601 msec\nrounds: 11"
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
          "id": "e2b620812dcfdbcf5ff0a31141998660e8ae54e5",
          "message": ":green_heart: Allow spurious interrogate failures\n\nThis hook works fine locally, but recent runs throw spurious error.\n\nExample error log:\n```\n\ninterrogate..........................................................................Failed\n- hook id: interrogate\n- duration: 0.24s\n- exit code: 2\n\nUsage: interrogate [OPTIONS] [PATHS]...\n\nError: Invalid value for '[PATHS]...': Path 'tests/structlog_sentry_logger/child_module_1.py' does not exist.\n```",
          "timestamp": "2021-10-09T21:08:10Z",
          "tree_id": "44c0682dacb9aed51a382f8e2099e69f28999f8d"
        },
        "date": 1633814372225,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 64.42731827185938,
            "unit": "iter/sec",
            "range": "stddev: 0.0008407049293715271",
            "extra": "mean: 15.521366197183175 msec\nrounds: 71"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.618929109959907,
            "unit": "iter/sec",
            "range": "stddev: 0.002523450984807528",
            "extra": "mean: 94.17145454545515 msec\nrounds: 11"
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
          "id": "b73fc2c6870cb9d950061342359b6a6bc7818919",
          "message": "Merge pull request #303 from TeoZosa/add-non-str-key-serialization-functionality\n\n✨  Enable Non-String Key JSON Serialization",
          "timestamp": "2021-10-09T21:36:31Z",
          "tree_id": "1d60d5d7b2cd69e4bba934a6a28c39159fefba23"
        },
        "date": 1633815746659,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.94517709334765,
            "unit": "iter/sec",
            "range": "stddev: 0.00033517690188251546",
            "extra": "mean: 14.50427777777784 msec\nrounds: 72"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.113446993025383,
            "unit": "iter/sec",
            "range": "stddev: 0.0020788683310585354",
            "extra": "mean: 89.98108333333336 msec\nrounds: 12"
          }
        ]
      }
    ]
  }
}