window.BENCHMARK_DATA = {
  "lastUpdate": 1637161391354,
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
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "id": "579c3b009cdf31b969ff038a94c39d6561e2a00b",
          "message": ":green_heart: Fix benchmark file mapping\n\nPreviously, non-deterministic ordering from `find` mapped benchmarks\nfrom non-identical directories across platforms.",
          "timestamp": "2021-10-10T03:59:04Z",
          "tree_id": "eda9c3ea3aa8215836518e6712a03af8f8c09fd6"
        },
        "date": 1633838613853,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 64,
            "unit": "iter/sec",
            "range": "stddev: 0.000613807969779989",
            "extra": "mean: 15.625 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 57.14285714285715,
            "unit": "iter/sec",
            "range": "stddev: 0.0006588078458684115",
            "extra": "mean: 17.5 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 9.846153846153847,
            "unit": "iter/sec",
            "range": "stddev: 0.005208333333333333",
            "extra": "mean: 101.5625 msec\nrounds: 10"
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
        "date": 1634094911927,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 54.237288135593225,
            "unit": "iter/sec",
            "range": "stddev: 0.000988211768802618",
            "extra": "mean: 18.4375 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 54.237288135593225,
            "unit": "iter/sec",
            "range": "stddev: 0.0006588078458684115",
            "extra": "mean: 18.4375 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 9.142857142857142,
            "unit": "iter/sec",
            "range": "stddev: 0.00637887953849786",
            "extra": "mean: 109.375 msec\nrounds: 10"
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
        "date": 1634096346333,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 63.366336633663366,
            "unit": "iter/sec",
            "range": "stddev: 0.0004941058844013098",
            "extra": "mean: 15.78125 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 60.37735849056604,
            "unit": "iter/sec",
            "range": "stddev: 0.0008068715304598793",
            "extra": "mean: 16.5625 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 9.846153846153847,
            "unit": "iter/sec",
            "range": "stddev: 0.005208333333333333",
            "extra": "mean: 101.5625 msec\nrounds: 10"
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
        "date": 1634096641020,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 77.03703703703705,
            "unit": "iter/sec",
            "range": "stddev: 0.0005067752660526246",
            "extra": "mean: 12.980769230769232 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 73.6283185840708,
            "unit": "iter/sec",
            "range": "stddev: 0.000580584004254385",
            "extra": "mean: 13.58173076923077 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.075471698113208,
            "unit": "iter/sec",
            "range": "stddev: 0.004034357652299392",
            "extra": "mean: 82.8125 msec\nrounds: 10"
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
        "date": 1634098312066,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 57.65765765765766,
            "unit": "iter/sec",
            "range": "stddev: 0.0011529137302697212",
            "extra": "mean: 17.34375 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 55.652173913043484,
            "unit": "iter/sec",
            "range": "stddev: 0.0008235098073355144",
            "extra": "mean: 17.96875 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 9.846153846153847,
            "unit": "iter/sec",
            "range": "stddev: 0.003682847818679935",
            "extra": "mean: 101.5625 msec\nrounds: 10"
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
        "date": 1634131775448,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 66.78260869565217,
            "unit": "iter/sec",
            "range": "stddev: 0.0006862581727795965",
            "extra": "mean: 14.973958333333332 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 61.93548387096775,
            "unit": "iter/sec",
            "range": "stddev: 0.0006723929420498982",
            "extra": "mean: 16.145833333333332 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.578512396694215,
            "unit": "iter/sec",
            "range": "stddev: 0.0024705294220065464",
            "extra": "mean: 94.53125 msec\nrounds: 10"
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
        "date": 1634190632998,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 67.64227642276421,
            "unit": "iter/sec",
            "range": "stddev: 0.0005805840042543842",
            "extra": "mean: 14.783653846153847 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 59.07692307692307,
            "unit": "iter/sec",
            "range": "stddev: 0.0006138079697799895",
            "extra": "mean: 16.927083333333332 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10,
            "unit": "iter/sec",
            "range": "stddev: 0.004941058844013093",
            "extra": "mean: 100 msec\nrounds: 10"
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
        "date": 1634190962054,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 69.81818181818183,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.322916666666666 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 63.471074380165284,
            "unit": "iter/sec",
            "range": "stddev: 0.0004117549036677574",
            "extra": "mean: 15.755208333333332 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.03448275862069,
            "unit": "iter/sec",
            "range": "stddev: 0.004034357652299392",
            "extra": "mean: 90.625 msec\nrounds: 10"
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
        "date": 1634191231275,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 56.63716814159292,
            "unit": "iter/sec",
            "range": "stddev: 0.0014823176532039277",
            "extra": "mean: 17.656250000000004 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 53.33333333333335,
            "unit": "iter/sec",
            "range": "stddev: 0.0007365695637359869",
            "extra": "mean: 18.75 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 8.951048951048952,
            "unit": "iter/sec",
            "range": "stddev: 0.006431817205848161",
            "extra": "mean: 111.71875 msec\nrounds: 10"
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
        "date": 1634237202773,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 52.03252032520326,
            "unit": "iter/sec",
            "range": "stddev: 0.0007547592055307006",
            "extra": "mean: 19.21875 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 49.23076923076923,
            "unit": "iter/sec",
            "range": "stddev: 0.0010416666666666664",
            "extra": "mean: 20.3125 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 9.20863309352518,
            "unit": "iter/sec",
            "range": "stddev: 0.006840586216960259",
            "extra": "mean: 108.59375 msec\nrounds: 10"
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
        "date": 1634250224291,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 55.17241379310345,
            "unit": "iter/sec",
            "range": "stddev: 0.0008068715304598774",
            "extra": "mean: 18.125 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 53.333333333333336,
            "unit": "iter/sec",
            "range": "stddev: 0.0010416666666666664",
            "extra": "mean: 18.75 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 9.552238805970148,
            "unit": "iter/sec",
            "range": "stddev: 0.004034357652299392",
            "extra": "mean: 104.6875 msec\nrounds: 10"
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
        "date": 1634252496298,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 60.47244094488189,
            "unit": "iter/sec",
            "range": "stddev: 0.001235264711003273",
            "extra": "mean: 16.536458333333332 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 57.65765765765766,
            "unit": "iter/sec",
            "range": "stddev: 0.0013681172433920514",
            "extra": "mean: 17.34375 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.24,
            "unit": "iter/sec",
            "range": "stddev: 0.0041175490366775775",
            "extra": "mean: 97.65625 msec\nrounds: 10"
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
        "date": 1635032726920,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.6283185840708,
            "unit": "iter/sec",
            "range": "stddev: 0.0033061988839387427",
            "extra": "mean: 13.58173076923077 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 74.95495495495496,
            "unit": "iter/sec",
            "range": "stddev: 0.00038008144953946896",
            "extra": "mean: 13.341346153846153 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.307692307692308,
            "unit": "iter/sec",
            "range": "stddev: 0.004034357652299392",
            "extra": "mean: 81.25 msec\nrounds: 10"
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
        "date": 1635033068243,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 85.71428571428571,
            "unit": "iter/sec",
            "range": "stddev: 0.0006588078458684129",
            "extra": "mean: 11.666666666666666 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 83.47826086956522,
            "unit": "iter/sec",
            "range": "stddev: 0.0005490065382236778",
            "extra": "mean: 11.979166666666666 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.361169102296449,
            "unit": "iter/sec",
            "range": "stddev: 0.0011529137302697223",
            "extra": "mean: 74.84375 msec\nrounds: 10"
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
        "date": 1635061760543,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 52.03252032520326,
            "unit": "iter/sec",
            "range": "stddev: 0.0007547592055307006",
            "extra": "mean: 19.21875 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 48.85496183206106,
            "unit": "iter/sec",
            "range": "stddev: 0.0004941058844013086",
            "extra": "mean: 20.46875 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 9.078014184397164,
            "unit": "iter/sec",
            "range": "stddev: 0.005764568651348608",
            "extra": "mean: 110.15625 msec\nrounds: 10"
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
        "date": 1635177358334,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 52.03252032520326,
            "unit": "iter/sec",
            "range": "stddev: 0.0007547592055307006",
            "extra": "mean: 19.21875 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 50.00000000000001,
            "unit": "iter/sec",
            "range": "stddev: 0.0009882117688026187",
            "extra": "mean: 20 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 9.142857142857142,
            "unit": "iter/sec",
            "range": "stddev: 0.003682847818679935",
            "extra": "mean: 109.375 msec\nrounds: 10"
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
        "date": 1635178282051,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 84.04040404040404,
            "unit": "iter/sec",
            "range": "stddev: 0.0006822670819682053",
            "extra": "mean: 11.899038461538463 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 73.28244274809158,
            "unit": "iter/sec",
            "range": "stddev: 0.0003294039229342061",
            "extra": "mean: 13.645833333333334 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.307692307692308,
            "unit": "iter/sec",
            "range": "stddev: 0.002689571768199593",
            "extra": "mean: 81.25 msec\nrounds: 10"
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
        "date": 1635182901978,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 80.67226890756304,
            "unit": "iter/sec",
            "range": "stddev: 0.0005912981377057783",
            "extra": "mean: 12.395833333333334 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 74.28571428571429,
            "unit": "iter/sec",
            "range": "stddev: 0.0005067752660526254",
            "extra": "mean: 13.461538461538462 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.075471698113208,
            "unit": "iter/sec",
            "range": "stddev: 0.004034357652299392",
            "extra": "mean: 82.8125 msec\nrounds: 10"
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
        "date": 1635202560428,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 83.47826086956522,
            "unit": "iter/sec",
            "range": "stddev: 0.0005490065382236778",
            "extra": "mean: 11.979166666666666 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 77.7570093457944,
            "unit": "iter/sec",
            "range": "stddev: 0.0005805840042543842",
            "extra": "mean: 12.860576923076923 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.427184466019417,
            "unit": "iter/sec",
            "range": "stddev: 0.0037737960276534996",
            "extra": "mean: 80.46875 msec\nrounds: 10"
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
        "date": 1635202774563,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 68.57142857142857,
            "unit": "iter/sec",
            "range": "stddev: 0.0005490065382236772",
            "extra": "mean: 14.583333333333334 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 64.53781512605042,
            "unit": "iter/sec",
            "range": "stddev: 0.00041175490366775793",
            "extra": "mean: 15.494791666666668 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.32258064516129,
            "unit": "iter/sec",
            "range": "stddev: 0.004034357652299392",
            "extra": "mean: 96.875 msec\nrounds: 10"
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
        "date": 1635202975785,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 69.1891891891892,
            "unit": "iter/sec",
            "range": "stddev: 0.00041175490366775793",
            "extra": "mean: 14.453124999999998 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 64.64646464646465,
            "unit": "iter/sec",
            "range": "stddev: 0.0004941058844013091",
            "extra": "mean: 15.46875 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.491803278688524,
            "unit": "iter/sec",
            "range": "stddev: 0.0032940392293420617",
            "extra": "mean: 95.3125 msec\nrounds: 10"
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
        "date": 1635204905358,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 60.37735849056604,
            "unit": "iter/sec",
            "range": "stddev: 0.0008068715304598793",
            "extra": "mean: 16.5625 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 55.65217391304348,
            "unit": "iter/sec",
            "range": "stddev: 0.0008235098073355144",
            "extra": "mean: 17.96875 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.078740157480315,
            "unit": "iter/sec",
            "range": "stddev: 0.005273035607113694",
            "extra": "mean: 99.21875 msec\nrounds: 10"
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
        "date": 1635449553777,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 58.71559633027524,
            "unit": "iter/sec",
            "range": "stddev: 0.0004941058844013098",
            "extra": "mean: 17.03125 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 53.333333333333336,
            "unit": "iter/sec",
            "range": "stddev: 0.0012757759076995716",
            "extra": "mean: 18.75 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 9.078014184397164,
            "unit": "iter/sec",
            "range": "stddev: 0.004434736032793334",
            "extra": "mean: 110.15625 msec\nrounds: 10"
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
        "date": 1635452559147,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.77570093457945,
            "unit": "iter/sec",
            "range": "stddev: 0.000878839267852282",
            "extra": "mean: 13.932291666666666 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.36842105263158,
            "unit": "iter/sec",
            "range": "stddev: 0.0006723929420498991",
            "extra": "mean: 14.84375 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.03448275862069,
            "unit": "iter/sec",
            "range": "stddev: 0.00546254608421954",
            "extra": "mean: 90.625 msec\nrounds: 10"
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
        "date": 1635945757712,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 69.33333333333333,
            "unit": "iter/sec",
            "range": "stddev: 0.0009813660828458246",
            "extra": "mean: 14.423076923076923 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 65.08474576271186,
            "unit": "iter/sec",
            "range": "stddev: 0.0008235098073355154",
            "extra": "mean: 15.364583333333332 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.158730158730158,
            "unit": "iter/sec",
            "range": "stddev: 0.004034357652299392",
            "extra": "mean: 98.4375 msec\nrounds: 10"
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
        "date": 1636165084368,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 83.47826086956522,
            "unit": "iter/sec",
            "range": "stddev: 0.0005490065382236778",
            "extra": "mean: 11.979166666666666 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 76.33027522935781,
            "unit": "iter/sec",
            "range": "stddev: 0.0006822670819682051",
            "extra": "mean: 13.100961538461538 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.673267326732674,
            "unit": "iter/sec",
            "range": "stddev: 0.005764568651348608",
            "extra": "mean: 78.90625 msec\nrounds: 10"
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
        "date": 1636381398618,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 54.70085470085471,
            "unit": "iter/sec",
            "range": "stddev: 0.0007547592055306989",
            "extra": "mean: 18.28125 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 51.2,
            "unit": "iter/sec",
            "range": "stddev: 0.0008235098073355162",
            "extra": "mean: 19.53125 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 9.014084507042254,
            "unit": "iter/sec",
            "range": "stddev: 0.006162583107395434",
            "extra": "mean: 110.9375 msec\nrounds: 10"
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
        "date": 1636382379143,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 67.36842105263158,
            "unit": "iter/sec",
            "range": "stddev: 0.0006723929420498991",
            "extra": "mean: 14.84375 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 63.366336633663366,
            "unit": "iter/sec",
            "range": "stddev: 0.0008869472065586672",
            "extra": "mean: 15.78125 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.491803278688524,
            "unit": "iter/sec",
            "range": "stddev: 0.004941058844013093",
            "extra": "mean: 95.3125 msec\nrounds: 10"
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
        "date": 1636467740426,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 64,
            "unit": "iter/sec",
            "range": "stddev: 0.0010416666666666669",
            "extra": "mean: 15.625 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 57.142857142857146,
            "unit": "iter/sec",
            "range": "stddev: 0.000988211768802618",
            "extra": "mean: 17.5 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 9.62406015037594,
            "unit": "iter/sec",
            "range": "stddev: 0.0037737960276534996",
            "extra": "mean: 103.90625 msec\nrounds: 10"
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
        "date": 1636640542602,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 57.142857142857146,
            "unit": "iter/sec",
            "range": "stddev: 0.0009882117688026183",
            "extra": "mean: 17.5 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 55.17241379310346,
            "unit": "iter/sec",
            "range": "stddev: 0.0008068715304598774",
            "extra": "mean: 18.125 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 9.770992366412214,
            "unit": "iter/sec",
            "range": "stddev: 0.004434736032793334",
            "extra": "mean: 102.34375 msec\nrounds: 10"
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
        "date": 1636641195042,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 58.18181818181818,
            "unit": "iter/sec",
            "range": "stddev: 0.0010416666666666664",
            "extra": "mean: 17.1875 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 52.03252032520325,
            "unit": "iter/sec",
            "range": "stddev: 0.001054607121422739",
            "extra": "mean: 19.21875 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 8.827586206896552,
            "unit": "iter/sec",
            "range": "stddev: 0.0041175490366775775",
            "extra": "mean: 113.28125 msec\nrounds: 10"
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
        "date": 1636745043667,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 54.237288135593225,
            "unit": "iter/sec",
            "range": "stddev: 0.000988211768802618",
            "extra": "mean: 18.4375 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 49.6124031007752,
            "unit": "iter/sec",
            "range": "stddev: 0.0011529137302697216",
            "extra": "mean: 20.15625 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 8.205128205128204,
            "unit": "iter/sec",
            "range": "stddev: 0.0065880784586841235",
            "extra": "mean: 121.875 msec\nrounds: 10"
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
        "date": 1636745449228,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 61.53846153846153,
            "unit": "iter/sec",
            "range": "stddev: 0.001092509216843908",
            "extra": "mean: 16.25 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 58.18181818181818,
            "unit": "iter/sec",
            "range": "stddev: 0.001473139127471974",
            "extra": "mean: 17.1875 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 9.770992366412214,
            "unit": "iter/sec",
            "range": "stddev: 0.005764568651348608",
            "extra": "mean: 102.34375 msec\nrounds: 10"
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
        "date": 1637159685760,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 69.1891891891892,
            "unit": "iter/sec",
            "range": "stddev: 0.00041175490366775793",
            "extra": "mean: 14.453124999999998 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 65.08474576271188,
            "unit": "iter/sec",
            "range": "stddev: 0.0008235098073355154",
            "extra": "mean: 15.364583333333332 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.491803278688524,
            "unit": "iter/sec",
            "range": "stddev: 0.004941058844013093",
            "extra": "mean: 95.3125 msec\nrounds: 10"
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
        "date": 1637160698101,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 85.71428571428571,
            "unit": "iter/sec",
            "range": "stddev: 0.0006588078458684129",
            "extra": "mean: 11.666666666666666 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 77.03703703703705,
            "unit": "iter/sec",
            "range": "stddev: 0.0005067752660526246",
            "extra": "mean: 12.980769230769232 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.061224489795919,
            "unit": "iter/sec",
            "range": "stddev: 0.0035153570714091266",
            "extra": "mean: 76.5625 msec\nrounds: 10"
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
        "date": 1637161386993,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 55.652173913043484,
            "unit": "iter/sec",
            "range": "stddev: 0.0008235098073355144",
            "extra": "mean: 17.96875 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 52.45901639344263,
            "unit": "iter/sec",
            "range": "stddev: 0.0012325166214790862",
            "extra": "mean: 19.0625 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 9.770992366412214,
            "unit": "iter/sec",
            "range": "stddev: 0.0024705294220065464",
            "extra": "mean: 102.34375 msec\nrounds: 10"
          }
        ]
      }
    ]
  }
}