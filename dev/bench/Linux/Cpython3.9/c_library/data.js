window.BENCHMARK_DATA = {
  "lastUpdate": 1633820875014,
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
        "date": 1633528708611,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 73.16347716935469,
            "unit": "iter/sec",
            "range": "stddev: 0.0015754213719331724",
            "extra": "mean: 13.668021787500017 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.228555551968245,
            "unit": "iter/sec",
            "range": "stddev: 0.002227797338784422",
            "extra": "mean: 54.85898195000009 msec\nrounds: 20"
          }
        ]
      },
      {
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
        "date": 1633529889226,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.38097674049926,
            "unit": "iter/sec",
            "range": "stddev: 0.0004990554704590058",
            "extra": "mean: 14.623950222222268 msec\nrounds: 72"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.430016358482476,
            "unit": "iter/sec",
            "range": "stddev: 0.00166233418732327",
            "extra": "mean: 54.2593115789475 msec\nrounds: 19"
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
        "date": 1633632283552,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 80.63293007472718,
            "unit": "iter/sec",
            "range": "stddev: 0.0008183898843115382",
            "extra": "mean: 12.40188095698919 msec\nrounds: 93"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.49935564000789,
            "unit": "iter/sec",
            "range": "stddev: 0.0023804943747531694",
            "extra": "mean: 46.51302191304339 msec\nrounds: 23"
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
        "date": 1633813825011,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.26169656940071,
            "unit": "iter/sec",
            "range": "stddev: 0.0009296973595243694",
            "extra": "mean: 14.032784064102582 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.001802859702355,
            "unit": "iter/sec",
            "range": "stddev: 0.0010209979019650782",
            "extra": "mean: 52.62658535 msec\nrounds: 20"
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
        "date": 1633815488411,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 75.20148370793295,
            "unit": "iter/sec",
            "range": "stddev: 0.0016318667881298633",
            "extra": "mean: 13.297609976470595 msec\nrounds: 85"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.59327952576811,
            "unit": "iter/sec",
            "range": "stddev: 0.00260683453684242",
            "extra": "mean: 48.55953121739121 msec\nrounds: 23"
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
        "date": 1633820871802,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 112.19301646363866,
            "unit": "iter/sec",
            "range": "stddev: 0.0005129669984490967",
            "extra": "mean: 8.913210746268653 msec\nrounds: 134"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 102.50610634126777,
            "unit": "iter/sec",
            "range": "stddev: 0.0004705577845410536",
            "extra": "mean: 9.755516385245935 msec\nrounds: 122"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.58445596914289,
            "unit": "iter/sec",
            "range": "stddev: 0.0015305604770937363",
            "extra": "mean: 46.32963654166677 msec\nrounds: 24"
          }
        ]
      }
    ]
  }
}