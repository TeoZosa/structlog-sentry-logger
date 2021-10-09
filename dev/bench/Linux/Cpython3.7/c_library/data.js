window.BENCHMARK_DATA = {
  "lastUpdate": 1633821532909,
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
        "date": 1633528467618,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 106.48455714513219,
            "unit": "iter/sec",
            "range": "stddev: 0.00013321097757387459",
            "extra": "mean: 9.39103309259256 msec\nrounds: 108"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 22.229232671047352,
            "unit": "iter/sec",
            "range": "stddev: 0.00006894715097430272",
            "extra": "mean: 44.985808318181775 msec\nrounds: 22"
          }
        ]
      },
      {
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
        "date": 1633529812840,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.56086248547639,
            "unit": "iter/sec",
            "range": "stddev: 0.0007456461423953979",
            "extra": "mean: 14.172162368421034 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.119445190827864,
            "unit": "iter/sec",
            "range": "stddev: 0.001252644871523877",
            "extra": "mean: 55.1893277894736 msec\nrounds: 19"
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
        "date": 1633632256592,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 91.92686919219906,
            "unit": "iter/sec",
            "range": "stddev: 0.00018088084420788325",
            "extra": "mean: 10.878212309278345 msec\nrounds: 97"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.597998025305763,
            "unit": "iter/sec",
            "range": "stddev: 0.0006531182092657983",
            "extra": "mean: 51.02561999999988 msec\nrounds: 21"
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
        "date": 1633813782892,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 106.32074432814045,
            "unit": "iter/sec",
            "range": "stddev: 0.00017629784017630893",
            "extra": "mean: 9.405502250000001 msec\nrounds: 108"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 22.346574127702564,
            "unit": "iter/sec",
            "range": "stddev: 0.00007360010181617103",
            "extra": "mean: 44.74958865217383 msec\nrounds: 23"
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
        "date": 1633815466432,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 103.61844748781203,
            "unit": "iter/sec",
            "range": "stddev: 0.00045820059740301077",
            "extra": "mean: 9.65079118867925 msec\nrounds: 106"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 22.16536264882824,
            "unit": "iter/sec",
            "range": "stddev: 0.00005471376485889728",
            "extra": "mean: 45.11543599999996 msec\nrounds: 22"
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
          "id": "2390314399f6d91c16e54309ac72939d5c170ccd",
          "message": "Merge pull request #304 from TeoZosa/add-non-str-key-serialization-benchmarks",
          "timestamp": "2021-10-09T23:05:44Z",
          "tree_id": "c2e7eacf71344e285607b2caf263d5608953905a"
        },
        "date": 1633820843891,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.15033216569886,
            "unit": "iter/sec",
            "range": "stddev: 0.0008685230945325594",
            "extra": "mean: 13.85995005128212 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.60122652434593,
            "unit": "iter/sec",
            "range": "stddev: 0.0012966978653262634",
            "extra": "mean: 14.792631012987012 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 16.884177858078957,
            "unit": "iter/sec",
            "range": "stddev: 0.0023405810089018888",
            "extra": "mean: 59.227047263157516 msec\nrounds: 19"
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
          "id": "41985f89d3390fb7022861f7554ab4f1d631c006",
          "message": ":bookmark: Bump version number to `0.12.0`",
          "timestamp": "2021-10-09T23:16:59Z",
          "tree_id": "3a04d4d7745b241fd1f62babfc4ebfcd4295067c"
        },
        "date": 1633821531724,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 66.00197351609081,
            "unit": "iter/sec",
            "range": "stddev: 0.0007935146874672029",
            "extra": "mean: 15.151062108108132 msec\nrounds: 74"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 64.21171269477286,
            "unit": "iter/sec",
            "range": "stddev: 0.0008135797556072893",
            "extra": "mean: 15.573482749999986 msec\nrounds: 72"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 16.14761506830399,
            "unit": "iter/sec",
            "range": "stddev: 0.0027387371861608448",
            "extra": "mean: 61.92864988235267 msec\nrounds: 17"
          }
        ]
      }
    ]
  }
}