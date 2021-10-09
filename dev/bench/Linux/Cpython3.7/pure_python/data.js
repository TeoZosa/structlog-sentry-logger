window.BENCHMARK_DATA = {
  "lastUpdate": 1633821563456,
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
        "date": 1633528570133,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.88111376051093,
            "unit": "iter/sec",
            "range": "stddev: 0.0007867971496183273",
            "extra": "mean: 14.108130458823531 msec\nrounds: 85"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.829827169301566,
            "unit": "iter/sec",
            "range": "stddev: 0.0025628426254387343",
            "extra": "mean: 53.10723199999991 msec\nrounds: 19"
          }
        ]
      },
      {
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
        "date": 1633529815514,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 90.51885623375489,
            "unit": "iter/sec",
            "range": "stddev: 0.0001939035424602467",
            "extra": "mean: 11.047421958333311 msec\nrounds: 96"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.112369553192185,
            "unit": "iter/sec",
            "range": "stddev: 0.0002626896168535886",
            "extra": "mean: 52.32213605000005 msec\nrounds: 20"
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
        "date": 1633632203035,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 115.80660429488358,
            "unit": "iter/sec",
            "range": "stddev: 0.0003113352945908214",
            "extra": "mean: 8.635086108333294 msec\nrounds: 120"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.90389647896742,
            "unit": "iter/sec",
            "range": "stddev: 0.00005235845438948042",
            "extra": "mean: 45.6539776363635 msec\nrounds: 22"
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
        "date": 1633813810949,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 115.93900234355988,
            "unit": "iter/sec",
            "range": "stddev: 0.00015073957719583206",
            "extra": "mean: 8.625225159663861 msec\nrounds: 119"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 24.6735365911775,
            "unit": "iter/sec",
            "range": "stddev: 0.00025584201000963174",
            "extra": "mean: 40.529252719999995 msec\nrounds: 25"
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
        "date": 1633815529088,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.61363854126886,
            "unit": "iter/sec",
            "range": "stddev: 0.0010432817142570741",
            "extra": "mean: 14.574361909090896 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 16.201421807615304,
            "unit": "iter/sec",
            "range": "stddev: 0.004721457476186418",
            "extra": "mean: 61.72297788888878 msec\nrounds: 18"
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
        "date": 1633820872467,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 75.86482380102187,
            "unit": "iter/sec",
            "range": "stddev: 0.0011757270665303657",
            "extra": "mean: 13.18133951807228 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 74.88921953552033,
            "unit": "iter/sec",
            "range": "stddev: 0.000872613646510621",
            "extra": "mean: 13.353056771084324 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.080852604734428,
            "unit": "iter/sec",
            "range": "stddev: 0.001650468022810618",
            "extra": "mean: 52.40855955000016 msec\nrounds: 20"
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
        "date": 1633821562184,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.61370954217323,
            "unit": "iter/sec",
            "range": "stddev: 0.0005697476646204844",
            "extra": "mean: 13.963806740259715 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 65.79576201871296,
            "unit": "iter/sec",
            "range": "stddev: 0.0013342038239767893",
            "extra": "mean: 15.198547282051239 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 16.871031580135224,
            "unit": "iter/sec",
            "range": "stddev: 0.002997798386176247",
            "extra": "mean: 59.27319827777744 msec\nrounds: 18"
          }
        ]
      }
    ]
  }
}