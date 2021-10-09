window.BENCHMARK_DATA = {
  "lastUpdate": 1633815498627,
  "repoUrl": "https://github.com/TeoZosa/structlog-sentry-logger",
  "entries": {
    "Benchmark": [
      {
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
        "date": 1633528625262,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 107.77307070618043,
            "unit": "iter/sec",
            "range": "stddev: 0.00011432275878500554",
            "extra": "mean: 9.278755754545399 msec\nrounds: 110"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.397914133864777,
            "unit": "iter/sec",
            "range": "stddev: 0.000054378562046441825",
            "extra": "mean: 42.73885245833338 msec\nrounds: 24"
          }
        ]
      },
      {
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
        "date": 1633529854949,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 97.07958931480383,
            "unit": "iter/sec",
            "range": "stddev: 0.0003285770918502836",
            "extra": "mean: 10.300826435897463 msec\nrounds: 117"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.093150725872786,
            "unit": "iter/sec",
            "range": "stddev: 0.0015357370804217824",
            "extra": "mean: 47.40875429166699 msec\nrounds: 24"
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
        "date": 1633632246148,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 98.01281422360479,
            "unit": "iter/sec",
            "range": "stddev: 0.0002911729508180615",
            "extra": "mean: 10.202747548076895 msec\nrounds: 104"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.062509996913434,
            "unit": "iter/sec",
            "range": "stddev: 0.0011096345708975985",
            "extra": "mean: 47.47772227272738 msec\nrounds: 22"
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
        "date": 1633813831749,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 108.55642227566715,
            "unit": "iter/sec",
            "range": "stddev: 0.0006261639794724507",
            "extra": "mean: 9.211799532786827 msec\nrounds: 122"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 22.411307921240923,
            "unit": "iter/sec",
            "range": "stddev: 0.0029296880728689966",
            "extra": "mean: 44.620332000000005 msec\nrounds: 26"
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
        "date": 1633815497897,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 109.17248620603733,
            "unit": "iter/sec",
            "range": "stddev: 0.00009425399224455945",
            "extra": "mean: 9.15981704504499 msec\nrounds: 111"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.24130133724818,
            "unit": "iter/sec",
            "range": "stddev: 0.00004408682390650434",
            "extra": "mean: 43.02685058333322 msec\nrounds: 24"
          }
        ]
      }
    ]
  }
}