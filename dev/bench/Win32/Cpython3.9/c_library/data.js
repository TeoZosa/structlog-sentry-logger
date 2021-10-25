window.BENCHMARK_DATA = {
  "lastUpdate": 1635177290750,
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
        "date": 1633838699399,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 66.78260869565217,
            "unit": "iter/sec",
            "range": "stddev: 0.0012653975466244138",
            "extra": "mean: 14.973958333333332 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 62.135922330097095,
            "unit": "iter/sec",
            "range": "stddev: 0.0010546071214227394",
            "extra": "mean: 16.09375 msec\nrounds: 10"
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
        "date": 1633838699399,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 66.78260869565217,
            "unit": "iter/sec",
            "range": "stddev: 0.0012653975466244138",
            "extra": "mean: 14.973958333333332 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 62.135922330097095,
            "unit": "iter/sec",
            "range": "stddev: 0.0010546071214227394",
            "extra": "mean: 16.09375 msec\nrounds: 10"
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
        "date": 1634094928274,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 65.64102564102564,
            "unit": "iter/sec",
            "range": "stddev: 0.0010719695343080267",
            "extra": "mean: 15.234375 msec\nrounds: 10"
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
            "value": 9.343065693430656,
            "unit": "iter/sec",
            "range": "stddev: 0.006431817205848161",
            "extra": "mean: 107.03125 msec\nrounds: 10"
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
        "date": 1634096382316,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.72413793103448,
            "unit": "iter/sec",
            "range": "stddev: 0.000620670408046061",
            "extra": "mean: 13.942307692307693 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.1967213114754,
            "unit": "iter/sec",
            "range": "stddev: 0.0005067752660526246",
            "extra": "mean: 14.663461538461538 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.130434782608695,
            "unit": "iter/sec",
            "range": "stddev: 0.0041175490366775775",
            "extra": "mean: 89.84375 msec\nrounds: 10"
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
        "date": 1634096713778,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 84.21052631578948,
            "unit": "iter/sec",
            "range": "stddev: 0.0005379143536399198",
            "extra": "mean: 11.875 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 82.05128205128206,
            "unit": "iter/sec",
            "range": "stddev: 0.0005031728036871341",
            "extra": "mean: 12.1875 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.168724279835393,
            "unit": "iter/sec",
            "range": "stddev: 0.0015095184110614003",
            "extra": "mean: 75.9375 msec\nrounds: 10"
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
        "date": 1634098325724,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 60.95238095238095,
            "unit": "iter/sec",
            "range": "stddev: 0.0008235098073355162",
            "extra": "mean: 16.40625 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 54.237288135593225,
            "unit": "iter/sec",
            "range": "stddev: 0.0017738944131173327",
            "extra": "mean: 18.437500000000004 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10,
            "unit": "iter/sec",
            "range": "stddev: 0.0032940392293420617",
            "extra": "mean: 100 msec\nrounds: 10"
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
        "date": 1634131811127,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 54.237288135593225,
            "unit": "iter/sec",
            "range": "stddev: 0.0006588078458684115",
            "extra": "mean: 18.4375 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 52.459016393442624,
            "unit": "iter/sec",
            "range": "stddev: 0.0006588078458684129",
            "extra": "mean: 19.0625 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 9.481481481481481,
            "unit": "iter/sec",
            "range": "stddev: 0.005524271728019903",
            "extra": "mean: 105.46875 msec\nrounds: 10"
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
        "date": 1634190642126,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 70.45871559633026,
            "unit": "iter/sec",
            "range": "stddev: 0.0004117549036677574",
            "extra": "mean: 14.192708333333334 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 63.471074380165284,
            "unit": "iter/sec",
            "range": "stddev: 0.000739122672132222",
            "extra": "mean: 15.755208333333332 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.40650406504065,
            "unit": "iter/sec",
            "range": "stddev: 0.005273035607113694",
            "extra": "mean: 96.09375 msec\nrounds: 10"
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
        "date": 1634190988226,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 54.23728813559322,
            "unit": "iter/sec",
            "range": "stddev: 0.000988211768802618",
            "extra": "mean: 18.4375 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 52.459016393442624,
            "unit": "iter/sec",
            "range": "stddev: 0.0009882117688026187",
            "extra": "mean: 19.0625 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 8.951048951048952,
            "unit": "iter/sec",
            "range": "stddev: 0.005273035607113694",
            "extra": "mean: 111.71875 msec\nrounds: 10"
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
        "date": 1634191267815,
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
            "value": 65.64102564102564,
            "unit": "iter/sec",
            "range": "stddev: 0.0006289660046089169",
            "extra": "mean: 15.234375 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.94017094017094,
            "unit": "iter/sec",
            "range": "stddev: 0.0037737960276534996",
            "extra": "mean: 91.40625 msec\nrounds: 10"
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
        "date": 1634237228100,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 62.74509803921569,
            "unit": "iter/sec",
            "range": "stddev: 0.0009882117688026191",
            "extra": "mean: 15.9375 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 59.07692307692307,
            "unit": "iter/sec",
            "range": "stddev: 0.0010631465897496437",
            "extra": "mean: 16.927083333333332 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 9.62406015037594,
            "unit": "iter/sec",
            "range": "stddev: 0.006431817205848161",
            "extra": "mean: 103.90625 msec\nrounds: 10"
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
        "date": 1634250261329,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 54.237288135593225,
            "unit": "iter/sec",
            "range": "stddev: 0.0006588078458684115",
            "extra": "mean: 18.4375 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 51.61290322580645,
            "unit": "iter/sec",
            "range": "stddev: 0.0008068715304598793",
            "extra": "mean: 19.375 msec\nrounds: 10"
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
          "id": "f5a5d969b2598480158a4aa744d7a730400bf380",
          "message": ":bookmark: Bump version number to `0.13.0`",
          "timestamp": "2021-10-14T22:57:23Z",
          "tree_id": "dc42413898cb8d56b3a24cd66460fce7285b5826"
        },
        "date": 1634252524439,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 57.65765765765766,
            "unit": "iter/sec",
            "range": "stddev: 0.0004941058844013086",
            "extra": "mean: 17.34375 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 54.237288135593225,
            "unit": "iter/sec",
            "range": "stddev: 0.000988211768802618",
            "extra": "mean: 18.4375 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 9.696969696969697,
            "unit": "iter/sec",
            "range": "stddev: 0.0032940392293420617",
            "extra": "mean: 103.125 msec\nrounds: 10"
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
        "date": 1635032676097,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 88.07339449541284,
            "unit": "iter/sec",
            "range": "stddev: 0.0005912981377057781",
            "extra": "mean: 11.354166666666664 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 81.35593220338984,
            "unit": "iter/sec",
            "range": "stddev: 0.00043920523057894225",
            "extra": "mean: 12.291666666666668 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.955465587044534,
            "unit": "iter/sec",
            "range": "stddev: 0.0008068715304598757",
            "extra": "mean: 77.1875 msec\nrounds: 10"
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
        "date": 1635033029704,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 89.91735537190081,
            "unit": "iter/sec",
            "range": "stddev: 0.0002906505202360638",
            "extra": "mean: 11.121323529411764 msec\nrounds: 10"
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
            "value": 14.285714285714286,
            "unit": "iter/sec",
            "range": "stddev: 0.0016137430609197544",
            "extra": "mean: 70 msec\nrounds: 10"
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
        "date": 1635061726422,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 58.18181818181818,
            "unit": "iter/sec",
            "range": "stddev: 0.0007365695637359869",
            "extra": "mean: 17.1875 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 53.78151260504202,
            "unit": "iter/sec",
            "range": "stddev: 0.0008869472065586663",
            "extra": "mean: 18.59375 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10,
            "unit": "iter/sec",
            "range": "stddev: 0.0032940392293420617",
            "extra": "mean: 100 msec\nrounds: 10"
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
        "date": 1635177283533,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.72413793103449,
            "unit": "iter/sec",
            "range": "stddev: 0.0008403917052645448",
            "extra": "mean: 13.942307692307693 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 66.78260869565217,
            "unit": "iter/sec",
            "range": "stddev: 0.0009207119546699837",
            "extra": "mean: 14.973958333333332 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.03448275862069,
            "unit": "iter/sec",
            "range": "stddev: 0.004034357652299392",
            "extra": "mean: 90.625 msec\nrounds: 10"
          }
        ]
      }
    ]
  }
}