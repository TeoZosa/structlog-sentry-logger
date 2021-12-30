window.BENCHMARK_DATA = {
  "lastUpdate": 1640879410446,
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
        "date": 1633838693538,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 66.96453483829909,
            "unit": "iter/sec",
            "range": "stddev: 0.00047673254740241284",
            "extra": "mean: 14.933277777777816 msec\nrounds: 72"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 62.56647688168685,
            "unit": "iter/sec",
            "range": "stddev: 0.00087596062382552",
            "extra": "mean: 15.982999999999986 msec\nrounds: 70"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.770429542208745,
            "unit": "iter/sec",
            "range": "stddev: 0.002581307467626403",
            "extra": "mean: 84.95866666666677 msec\nrounds: 12"
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
        "date": 1634095088447,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 75.37024439994308,
            "unit": "iter/sec",
            "range": "stddev: 0.00020282539101528377",
            "extra": "mean: 13.267835443037987 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.67213855878312,
            "unit": "iter/sec",
            "range": "stddev: 0.00019696552003804462",
            "extra": "mean: 13.952423076923163 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.202986352367764,
            "unit": "iter/sec",
            "range": "stddev: 0.002026603350689422",
            "extra": "mean: 81.9471538461541 msec\nrounds: 13"
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
        "date": 1634096647786,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.22069086965791,
            "unit": "iter/sec",
            "range": "stddev: 0.0003593728471000092",
            "extra": "mean: 13.657341772151895 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.25902609378227,
            "unit": "iter/sec",
            "range": "stddev: 0.00045912445324747687",
            "extra": "mean: 14.438551282051236 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.77411363000837,
            "unit": "iter/sec",
            "range": "stddev: 0.0012222972751290142",
            "extra": "mean: 84.93208333333276 msec\nrounds: 12"
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
        "date": 1634097191648,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.66729172247561,
            "unit": "iter/sec",
            "range": "stddev: 0.0003511125005439363",
            "extra": "mean: 13.574545454545383 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.93918503277288,
            "unit": "iter/sec",
            "range": "stddev: 0.0004879937910054651",
            "extra": "mean: 14.505538461538407 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.222732025062264,
            "unit": "iter/sec",
            "range": "stddev: 0.002107225907595164",
            "extra": "mean: 81.81476923076907 msec\nrounds: 13"
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
        "date": 1634098353344,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.27685225860475,
            "unit": "iter/sec",
            "range": "stddev: 0.001958213043216901",
            "extra": "mean: 13.835688311688303 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 64.90061282403649,
            "unit": "iter/sec",
            "range": "stddev: 0.0008940503451262254",
            "extra": "mean: 15.408175000000025 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.335592644570738,
            "unit": "iter/sec",
            "range": "stddev: 0.001548317105432498",
            "extra": "mean: 81.066230769231 msec\nrounds: 13"
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
        "date": 1634132343273,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.23444755690853,
            "unit": "iter/sec",
            "range": "stddev: 0.0002816891714252642",
            "extra": "mean: 13.654776315789462 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.88233366791785,
            "unit": "iter/sec",
            "range": "stddev: 0.0005823337431991625",
            "extra": "mean: 14.731373333333325 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.077844494964884,
            "unit": "iter/sec",
            "range": "stddev: 0.001634475713791047",
            "extra": "mean: 82.79623076923109 msec\nrounds: 13"
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
        "date": 1634190678590,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.02883427965925,
            "unit": "iter/sec",
            "range": "stddev: 0.0006101397738913602",
            "extra": "mean: 13.883328947368476 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.86141278249043,
            "unit": "iter/sec",
            "range": "stddev: 0.00043732095805127627",
            "extra": "mean: 14.521921052631562 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.367704213986018,
            "unit": "iter/sec",
            "range": "stddev: 0.0012063974262239631",
            "extra": "mean: 80.85575 msec\nrounds: 12"
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
        "date": 1634191121060,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.63089193050317,
            "unit": "iter/sec",
            "range": "stddev: 0.0003828543161981534",
            "extra": "mean: 13.581256097560985 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.39906716838338,
            "unit": "iter/sec",
            "range": "stddev: 0.0005780195623772098",
            "extra": "mean: 14.409415584415477 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.931202848804089,
            "unit": "iter/sec",
            "range": "stddev: 0.0017684775866149143",
            "extra": "mean: 83.8138461538464 msec\nrounds: 13"
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
        "date": 1634191664051,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.04328102729612,
            "unit": "iter/sec",
            "range": "stddev: 0.0006374188888200996",
            "extra": "mean: 13.69051315789473 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.75907684170355,
            "unit": "iter/sec",
            "range": "stddev: 0.0005647125838631521",
            "extra": "mean: 14.132462500000086 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.379237954743527,
            "unit": "iter/sec",
            "range": "stddev: 0.001014990950101458",
            "extra": "mean: 80.78041666666695 msec\nrounds: 12"
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
        "date": 1634237706140,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.35124861558693,
            "unit": "iter/sec",
            "range": "stddev: 0.0004251810826540691",
            "extra": "mean: 13.821461538461493 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.58649515111362,
            "unit": "iter/sec",
            "range": "stddev: 0.0004159084740323752",
            "extra": "mean: 14.795855263157895 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.888246821951553,
            "unit": "iter/sec",
            "range": "stddev: 0.0011458102944072288",
            "extra": "mean: 84.11669230769233 msec\nrounds: 13"
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
        "date": 1634250460081,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 74.95236200837724,
            "unit": "iter/sec",
            "range": "stddev: 0.00044582883727699036",
            "extra": "mean: 13.341807692307714 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.48448250596006,
            "unit": "iter/sec",
            "range": "stddev: 0.00025158600210611025",
            "extra": "mean: 13.989049999999992 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.979446955008891,
            "unit": "iter/sec",
            "range": "stddev: 0.001508587219035129",
            "extra": "mean: 83.47630769230764 msec\nrounds: 13"
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
        "date": 1634252620475,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 78.17751061831764,
            "unit": "iter/sec",
            "range": "stddev: 0.0003562234303631436",
            "extra": "mean: 12.791402439024345 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.2320280048094,
            "unit": "iter/sec",
            "range": "stddev: 0.0012038847420872368",
            "extra": "mean: 14.238518072289205 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.660742737603174,
            "unit": "iter/sec",
            "range": "stddev: 0.001615383668803159",
            "extra": "mean: 78.98430769230777 msec\nrounds: 13"
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
        "date": 1635033033664,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.89884859129633,
            "unit": "iter/sec",
            "range": "stddev: 0.0007533887901826998",
            "extra": "mean: 13.908428571428534 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.33177255408091,
            "unit": "iter/sec",
            "range": "stddev: 0.00044718016008044877",
            "extra": "mean: 14.218324999999966 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.565886325125943,
            "unit": "iter/sec",
            "range": "stddev: 0.00181656404673705",
            "extra": "mean: 79.58053846153804 msec\nrounds: 13"
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
        "date": 1635033619749,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.64452850735798,
            "unit": "iter/sec",
            "range": "stddev: 0.00035729036567673847",
            "extra": "mean: 13.957799999999985 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.20894179527947,
            "unit": "iter/sec",
            "range": "stddev: 0.0005873416060200142",
            "extra": "mean: 14.449000000000101 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.159806041739937,
            "unit": "iter/sec",
            "range": "stddev: 0.000909035555424771",
            "extra": "mean: 82.23815384615385 msec\nrounds: 13"
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
        "date": 1635062018960,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.89676744663781,
            "unit": "iter/sec",
            "range": "stddev: 0.0007421888751417327",
            "extra": "mean: 13.90883116883114 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.52942256941377,
            "unit": "iter/sec",
            "range": "stddev: 0.0008059585302187788",
            "extra": "mean: 14.80835999999994 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.412428485772711,
            "unit": "iter/sec",
            "range": "stddev: 0.00545866759007881",
            "extra": "mean: 87.62376923076879 msec\nrounds: 13"
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
        "date": 1635177507743,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 69.70564699387408,
            "unit": "iter/sec",
            "range": "stddev: 0.0005327249795004574",
            "extra": "mean: 14.346040000000038 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 66.06183387650873,
            "unit": "iter/sec",
            "range": "stddev: 0.0005640699658791369",
            "extra": "mean: 15.137333333333261 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.511818320483258,
            "unit": "iter/sec",
            "range": "stddev: 0.0016433603668870303",
            "extra": "mean: 86.86725000000007 msec\nrounds: 12"
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
        "date": 1635178650822,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.45388651979569,
            "unit": "iter/sec",
            "range": "stddev: 0.0005853378890216483",
            "extra": "mean: 13.99503999999998 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 58.57147261012991,
            "unit": "iter/sec",
            "range": "stddev: 0.0019150645458408733",
            "extra": "mean: 17.073157894736806 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.341342548202425,
            "unit": "iter/sec",
            "range": "stddev: 0.0013865489302214908",
            "extra": "mean: 81.02846153846161 msec\nrounds: 13"
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
        "date": 1635183327854,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 81.2223578076926,
            "unit": "iter/sec",
            "range": "stddev: 0.0004255580150944424",
            "extra": "mean: 12.31188095238094 msec\nrounds: 84"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 77.6322693250806,
            "unit": "iter/sec",
            "range": "stddev: 0.00028488851207855405",
            "extra": "mean: 12.881241379310428 msec\nrounds: 87"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.929060094271279,
            "unit": "iter/sec",
            "range": "stddev: 0.0006667004698389403",
            "extra": "mean: 77.3451428571431 msec\nrounds: 14"
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
        "date": 1635202781436,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 60.032620322523464,
            "unit": "iter/sec",
            "range": "stddev: 0.002810291163768279",
            "extra": "mean: 16.657610389610344 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.93863665891578,
            "unit": "iter/sec",
            "range": "stddev: 0.0007735301743108594",
            "extra": "mean: 14.505653846153784 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.570468603978464,
            "unit": "iter/sec",
            "range": "stddev: 0.003224653016515605",
            "extra": "mean: 86.42692307692307 msec\nrounds: 13"
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
        "date": 1635203135802,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.60204879727154,
            "unit": "iter/sec",
            "range": "stddev: 0.0008515960642212267",
            "extra": "mean: 13.58657831325302 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.76442132626016,
            "unit": "iter/sec",
            "range": "stddev: 0.0005481358661661523",
            "extra": "mean: 13.934481481481384 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.582536600663202,
            "unit": "iter/sec",
            "range": "stddev: 0.002314044948924019",
            "extra": "mean: 79.47523076923073 msec\nrounds: 13"
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
        "date": 1635203519369,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 75.514694777251,
            "unit": "iter/sec",
            "range": "stddev: 0.0004319993114152436",
            "extra": "mean: 13.242455696202493 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.75656870790365,
            "unit": "iter/sec",
            "range": "stddev: 0.0011335703068026837",
            "extra": "mean: 14.54406493506487 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.247413094988131,
            "unit": "iter/sec",
            "range": "stddev: 0.0025728084171807927",
            "extra": "mean: 88.9093333333335 msec\nrounds: 12"
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
        "date": 1635205084301,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.81760482901568,
            "unit": "iter/sec",
            "range": "stddev: 0.0012339156408371057",
            "extra": "mean: 13.924162500000014 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.55612021579383,
            "unit": "iter/sec",
            "range": "stddev: 0.0007973397398052917",
            "extra": "mean: 14.58658974358969 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.338392827912267,
            "unit": "iter/sec",
            "range": "stddev: 0.007940463563675624",
            "extra": "mean: 96.72683333333347 msec\nrounds: 12"
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
        "date": 1635449617643,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 74.1600900434918,
            "unit": "iter/sec",
            "range": "stddev: 0.0007563974820985283",
            "extra": "mean: 13.484341772151863 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.4618465420747,
            "unit": "iter/sec",
            "range": "stddev: 0.0007919036204261394",
            "extra": "mean: 14.396392405063349 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.291307776237709,
            "unit": "iter/sec",
            "range": "stddev: 0.0008877757209839801",
            "extra": "mean: 81.35830769230755 msec\nrounds: 13"
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
        "date": 1635452784830,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 80.09924678101144,
            "unit": "iter/sec",
            "range": "stddev: 0.00020837538496993596",
            "extra": "mean: 12.484511904761916 msec\nrounds: 84"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 75.6686541699287,
            "unit": "iter/sec",
            "range": "stddev: 0.00027154508796221107",
            "extra": "mean: 13.215511904761849 msec\nrounds: 84"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.584448912461609,
            "unit": "iter/sec",
            "range": "stddev: 0.0007906366470718431",
            "extra": "mean: 79.46315384615382 msec\nrounds: 13"
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
        "date": 1635946619308,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 74.32358392133112,
            "unit": "iter/sec",
            "range": "stddev: 0.0006382307625984646",
            "extra": "mean: 13.454679487179527 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.43207851304523,
            "unit": "iter/sec",
            "range": "stddev: 0.0005900959672527868",
            "extra": "mean: 14.19807594936706 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.378426328628198,
            "unit": "iter/sec",
            "range": "stddev: 0.005376449378825934",
            "extra": "mean: 87.88561538461546 msec\nrounds: 13"
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
        "date": 1636165411728,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 76.59610683738417,
            "unit": "iter/sec",
            "range": "stddev: 0.00025568438178045247",
            "extra": "mean: 13.055493827160564 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 73.33103985225151,
            "unit": "iter/sec",
            "range": "stddev: 0.0002680282035557217",
            "extra": "mean: 13.636790123456795 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.400935602895348,
            "unit": "iter/sec",
            "range": "stddev: 0.0012546362329073709",
            "extra": "mean: 80.63907692307683 msec\nrounds: 13"
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
        "date": 1636384105824,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 74.04199962135495,
            "unit": "iter/sec",
            "range": "stddev: 0.00045763959867131383",
            "extra": "mean: 13.505848101265801 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 73.06130474862454,
            "unit": "iter/sec",
            "range": "stddev: 0.0003025913809532726",
            "extra": "mean: 13.687135802469038 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.274792957290341,
            "unit": "iter/sec",
            "range": "stddev: 0.001828331669120345",
            "extra": "mean: 81.46776923076916 msec\nrounds: 13"
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
        "date": 1636385161639,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 74.5922136917737,
            "unit": "iter/sec",
            "range": "stddev: 0.0007031612519205982",
            "extra": "mean: 13.406225000000017 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.22486285697043,
            "unit": "iter/sec",
            "range": "stddev: 0.0009550282330421098",
            "extra": "mean: 14.87544871794873 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.259085396788858,
            "unit": "iter/sec",
            "range": "stddev: 0.0011374557021522802",
            "extra": "mean: 81.57215384615395 msec\nrounds: 13"
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
        "date": 1636469823386,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 78.09085013318278,
            "unit": "iter/sec",
            "range": "stddev: 0.000586149474463385",
            "extra": "mean: 12.805597560975643 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 74.03006900333665,
            "unit": "iter/sec",
            "range": "stddev: 0.00035221115737970644",
            "extra": "mean: 13.508024691357893 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.052627333690015,
            "unit": "iter/sec",
            "range": "stddev: 0.002191793239008807",
            "extra": "mean: 82.96946153846122 msec\nrounds: 13"
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
        "date": 1636642456030,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 74.80529584091902,
            "unit": "iter/sec",
            "range": "stddev: 0.0007057007728877563",
            "extra": "mean: 13.368037500000007 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.09241358745568,
            "unit": "iter/sec",
            "range": "stddev: 0.0010282983529978462",
            "extra": "mean: 14.90481481481493 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.935420195649098,
            "unit": "iter/sec",
            "range": "stddev: 0.002798203952354541",
            "extra": "mean: 83.78423076923063 msec\nrounds: 13"
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
        "date": 1636643331898,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 78.48377200856669,
            "unit": "iter/sec",
            "range": "stddev: 0.00032507502517670043",
            "extra": "mean: 12.741487499999971 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 66.78407471901215,
            "unit": "iter/sec",
            "range": "stddev: 0.000992287841863992",
            "extra": "mean: 14.973629629629636 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.033649787467173,
            "unit": "iter/sec",
            "range": "stddev: 0.0015312519052843511",
            "extra": "mean: 83.10030769230809 msec\nrounds: 13"
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
        "date": 1636745461611,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.83851700779344,
            "unit": "iter/sec",
            "range": "stddev: 0.0010964014091563706",
            "extra": "mean: 13.729000000000054 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.36021272777221,
            "unit": "iter/sec",
            "range": "stddev: 0.0009010838901327365",
            "extra": "mean: 14.417487500000048 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.114599860511756,
            "unit": "iter/sec",
            "range": "stddev: 0.004042292556660946",
            "extra": "mean: 89.97175000000013 msec\nrounds: 12"
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
        "date": 1636746123499,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 77.10672713357135,
            "unit": "iter/sec",
            "range": "stddev: 0.0003420549825847329",
            "extra": "mean: 12.969037037037095 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.21291184476677,
            "unit": "iter/sec",
            "range": "stddev: 0.0006002848366609046",
            "extra": "mean: 13.84793902439027 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.001621142055777,
            "unit": "iter/sec",
            "range": "stddev: 0.0007474810434094322",
            "extra": "mean: 83.3220769230771 msec\nrounds: 13"
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
        "date": 1637161840516,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 77.88094599389096,
            "unit": "iter/sec",
            "range": "stddev: 0.00036295182187170484",
            "extra": "mean: 12.840111111111064 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 73.93622009189636,
            "unit": "iter/sec",
            "range": "stddev: 0.0002708355067662996",
            "extra": "mean: 13.52517073170749 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.179788671297505,
            "unit": "iter/sec",
            "range": "stddev: 0.001636171453620252",
            "extra": "mean: 82.10323076923063 msec\nrounds: 13"
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
        "date": 1637162273134,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 79.14251469142519,
            "unit": "iter/sec",
            "range": "stddev: 0.00032787576442439356",
            "extra": "mean: 12.635433734939767 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 74.30779962530356,
            "unit": "iter/sec",
            "range": "stddev: 0.0003637297976031809",
            "extra": "mean: 13.457537499999884 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.520647028513386,
            "unit": "iter/sec",
            "range": "stddev: 0.0015613732983892556",
            "extra": "mean: 79.86807692307679 msec\nrounds: 13"
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
        "date": 1637162901605,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.27685649881829,
            "unit": "iter/sec",
            "range": "stddev: 0.0013664802016911564",
            "extra": "mean: 13.835687500000082 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.7886295763731,
            "unit": "iter/sec",
            "range": "stddev: 0.0007383943724113593",
            "extra": "mean: 14.12656250000024 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.750668884228793,
            "unit": "iter/sec",
            "range": "stddev: 0.0022045173929676203",
            "extra": "mean: 85.10153846153848 msec\nrounds: 13"
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
        "date": 1637175646956,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 76.6946784849509,
            "unit": "iter/sec",
            "range": "stddev: 0.0005537580902851819",
            "extra": "mean: 13.038714285714372 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.4937768623424,
            "unit": "iter/sec",
            "range": "stddev: 0.00047428291492109036",
            "extra": "mean: 13.794287500000012 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.162160897904247,
            "unit": "iter/sec",
            "range": "stddev: 0.002695724180804517",
            "extra": "mean: 82.22223076923093 msec\nrounds: 13"
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
        "date": 1637530350288,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 78.22504476210877,
            "unit": "iter/sec",
            "range": "stddev: 0.0003415893896349113",
            "extra": "mean: 12.78362962962966 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.15623477234041,
            "unit": "iter/sec",
            "range": "stddev: 0.0005982234298231991",
            "extra": "mean: 14.053582278481047 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.37817023983181,
            "unit": "iter/sec",
            "range": "stddev: 0.0016801095469471572",
            "extra": "mean: 80.78738461538461 msec\nrounds: 13"
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
        "date": 1637593060321,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 62.96817443153023,
            "unit": "iter/sec",
            "range": "stddev: 0.0020281387375525595",
            "extra": "mean: 15.88103846153855 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.6955784253856,
            "unit": "iter/sec",
            "range": "stddev: 0.001037458347417521",
            "extra": "mean: 14.348112499999921 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.607298312030967,
            "unit": "iter/sec",
            "range": "stddev: 0.00429432995131561",
            "extra": "mean: 86.15269230769229 msec\nrounds: 13"
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
        "date": 1637593771684,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 79.9190673249923,
            "unit": "iter/sec",
            "range": "stddev: 0.00024489353794300686",
            "extra": "mean: 12.512658536585299 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 74.87865253662473,
            "unit": "iter/sec",
            "range": "stddev: 0.0003062794146394367",
            "extra": "mean: 13.354941176470541 msec\nrounds: 85"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.687491673833534,
            "unit": "iter/sec",
            "range": "stddev: 0.0010829188604143658",
            "extra": "mean: 78.81778571428606 msec\nrounds: 14"
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
        "date": 1637678804741,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.29603718801285,
            "unit": "iter/sec",
            "range": "stddev: 0.0010727350584818461",
            "extra": "mean: 14.02602500000003 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.5649723633327,
            "unit": "iter/sec",
            "range": "stddev: 0.0009771847435590837",
            "extra": "mean: 14.375050632911547 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.233262438965905,
            "unit": "iter/sec",
            "range": "stddev: 0.003906800791471432",
            "extra": "mean: 89.02133333333362 msec\nrounds: 12"
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
        "date": 1637939036824,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 76.39694052722852,
            "unit": "iter/sec",
            "range": "stddev: 0.0003557739246125051",
            "extra": "mean: 13.089529411764747 msec\nrounds: 85"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.15742585599003,
            "unit": "iter/sec",
            "range": "stddev: 0.0004716462602188871",
            "extra": "mean: 13.858587499999997 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.719733394388058,
            "unit": "iter/sec",
            "range": "stddev: 0.0023879727106201",
            "extra": "mean: 78.61799999999998 msec\nrounds: 13"
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
        "date": 1637940372274,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 75.36561745166229,
            "unit": "iter/sec",
            "range": "stddev: 0.0005719222329182515",
            "extra": "mean: 13.268650000000015 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.24183537003815,
            "unit": "iter/sec",
            "range": "stddev: 0.0005735141192555437",
            "extra": "mean: 14.036696202531658 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.709201090216666,
            "unit": "iter/sec",
            "range": "stddev: 0.004120478885225554",
            "extra": "mean: 85.40292307692326 msec\nrounds: 13"
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
        "date": 1638204082133,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 63.60679907753838,
            "unit": "iter/sec",
            "range": "stddev: 0.002060195561489732",
            "extra": "mean: 15.721589743589728 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.62161971613712,
            "unit": "iter/sec",
            "range": "stddev: 0.0008437168536771712",
            "extra": "mean: 14.363354430379864 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.496862793565203,
            "unit": "iter/sec",
            "range": "stddev: 0.003971864941514986",
            "extra": "mean: 86.98025000000003 msec\nrounds: 12"
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
        "date": 1638204746178,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 77.8707034839362,
            "unit": "iter/sec",
            "range": "stddev: 0.0002880583362156378",
            "extra": "mean: 12.841799999999848 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 73.05058356854755,
            "unit": "iter/sec",
            "range": "stddev: 0.00042592530928113213",
            "extra": "mean: 13.689144578313226 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.26587510885962,
            "unit": "iter/sec",
            "range": "stddev: 0.004546848414011404",
            "extra": "mean: 81.52700000000014 msec\nrounds: 13"
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
        "date": 1638206547786,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 75.58564880481383,
            "unit": "iter/sec",
            "range": "stddev: 0.0009815859230769216",
            "extra": "mean: 13.230024691357983 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.57549290910616,
            "unit": "iter/sec",
            "range": "stddev: 0.00045618893886524743",
            "extra": "mean: 13.971262499999849 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.575939498797426,
            "unit": "iter/sec",
            "range": "stddev: 0.003338669082672256",
            "extra": "mean: 86.38607692307701 msec\nrounds: 13"
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
        "date": 1638207584566,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 77.67663757706694,
            "unit": "iter/sec",
            "range": "stddev: 0.0005565773434674235",
            "extra": "mean: 12.873883720930236 msec\nrounds: 86"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.9504980573356,
            "unit": "iter/sec",
            "range": "stddev: 0.0005766188732603997",
            "extra": "mean: 13.898444444444628 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.108804125190074,
            "unit": "iter/sec",
            "range": "stddev: 0.0028708178165635727",
            "extra": "mean: 82.58453846153884 msec\nrounds: 13"
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
        "date": 1638209109444,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 82.25456938314805,
            "unit": "iter/sec",
            "range": "stddev: 0.0004540296128386142",
            "extra": "mean: 12.157379310344739 msec\nrounds: 87"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 76.7038739915892,
            "unit": "iter/sec",
            "range": "stddev: 0.0005313504773895962",
            "extra": "mean: 13.037151162790721 msec\nrounds: 86"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.979283209813861,
            "unit": "iter/sec",
            "range": "stddev: 0.0017757958933800901",
            "extra": "mean: 77.04585714285692 msec\nrounds: 14"
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
        "date": 1638282831785,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.32028181108285,
            "unit": "iter/sec",
            "range": "stddev: 0.0009984134889759447",
            "extra": "mean: 13.827379746835462 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 65.01297790710869,
            "unit": "iter/sec",
            "range": "stddev: 0.0013149454585302841",
            "extra": "mean: 15.381544303797494 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.607754337058893,
            "unit": "iter/sec",
            "range": "stddev: 0.0033603531407831247",
            "extra": "mean: 86.1493076923072 msec\nrounds: 13"
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
        "date": 1638371644609,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.78903311901014,
            "unit": "iter/sec",
            "range": "stddev: 0.001555621346922097",
            "extra": "mean: 13.738333333333319 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.35419970021636,
            "unit": "iter/sec",
            "range": "stddev: 0.0014834655349932203",
            "extra": "mean: 14.418737500000024 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.58925972114407,
            "unit": "iter/sec",
            "range": "stddev: 0.016891757814511278",
            "extra": "mean: 94.43530769230762 msec\nrounds: 13"
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
        "date": 1638373128545,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.56578088036801,
            "unit": "iter/sec",
            "range": "stddev: 0.0011302353916359483",
            "extra": "mean: 13.780600000000009 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.78809140561633,
            "unit": "iter/sec",
            "range": "stddev: 0.0010156984452315617",
            "extra": "mean: 14.5373999999999 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.538867788540475,
            "unit": "iter/sec",
            "range": "stddev: 0.0029325998288911178",
            "extra": "mean: 86.66361538461545 msec\nrounds: 13"
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
        "date": 1638455864736,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 76.03004484845404,
            "unit": "iter/sec",
            "range": "stddev: 0.0006730171551209059",
            "extra": "mean: 13.152695121951298 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.70592972692813,
            "unit": "iter/sec",
            "range": "stddev: 0.0007325475622063901",
            "extra": "mean: 14.143085365853736 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.45197608071176,
            "unit": "iter/sec",
            "range": "stddev: 0.0011532151877384892",
            "extra": "mean: 80.30853846153867 msec\nrounds: 13"
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
        "date": 1638805351595,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 70.20591133773468,
            "unit": "iter/sec",
            "range": "stddev: 0.0014473150236827834",
            "extra": "mean: 14.243814814814808 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.61512440696379,
            "unit": "iter/sec",
            "range": "stddev: 0.0006820584851465685",
            "extra": "mean: 13.963530864197745 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.574868834445052,
            "unit": "iter/sec",
            "range": "stddev: 0.0006099855714978819",
            "extra": "mean: 79.52369230769249 msec\nrounds: 13"
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
        "date": 1638806377367,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 76.966446338623,
            "unit": "iter/sec",
            "range": "stddev: 0.0005958144683485376",
            "extra": "mean: 12.992674698795128 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.98653186008838,
            "unit": "iter/sec",
            "range": "stddev: 0.0011185541283957698",
            "extra": "mean: 14.28846341463415 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.572755241567922,
            "unit": "iter/sec",
            "range": "stddev: 0.005015373878488796",
            "extra": "mean: 86.40984615384608 msec\nrounds: 13"
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
        "date": 1638808085466,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 76.25223108379845,
            "unit": "iter/sec",
            "range": "stddev: 0.0005910111979574281",
            "extra": "mean: 13.114370370370358 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.99795614633737,
            "unit": "iter/sec",
            "range": "stddev: 0.0006565640943338555",
            "extra": "mean: 14.084912500000014 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.712977979601431,
            "unit": "iter/sec",
            "range": "stddev: 0.0026579111954835298",
            "extra": "mean: 85.37538461538438 msec\nrounds: 13"
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
        "date": 1638974473823,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.26409136056525,
            "unit": "iter/sec",
            "range": "stddev: 0.0008184100299097889",
            "extra": "mean: 14.032312499999977 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.68827896754111,
            "unit": "iter/sec",
            "range": "stddev: 0.0005420863071832217",
            "extra": "mean: 14.349615384615433 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.479150330952713,
            "unit": "iter/sec",
            "range": "stddev: 0.0018465478428401703",
            "extra": "mean: 87.11446153846171 msec\nrounds: 13"
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
        "date": 1638975300745,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 74.85223614124693,
            "unit": "iter/sec",
            "range": "stddev: 0.001118248375367645",
            "extra": "mean: 13.359654320987683 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.36090599806231,
            "unit": "iter/sec",
            "range": "stddev: 0.0008739479168647172",
            "extra": "mean: 14.013275000000046 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.264949322172892,
            "unit": "iter/sec",
            "range": "stddev: 0.001953755991509463",
            "extra": "mean: 81.53315384615361 msec\nrounds: 13"
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
        "date": 1639147494287,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 74.64427338465123,
            "unit": "iter/sec",
            "range": "stddev: 0.0008218636336269158",
            "extra": "mean: 13.396875000000009 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.50448109644994,
            "unit": "iter/sec",
            "range": "stddev: 0.0006301690901023022",
            "extra": "mean: 13.985137499999956 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.735923662330347,
            "unit": "iter/sec",
            "range": "stddev: 0.0024072744828739184",
            "extra": "mean: 85.20846153846188 msec\nrounds: 13"
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
        "date": 1639255257915,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 80.2940891941568,
            "unit": "iter/sec",
            "range": "stddev: 0.00020913999560300323",
            "extra": "mean: 12.454216867469897 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 74.07759673985409,
            "unit": "iter/sec",
            "range": "stddev: 0.0004318643973702575",
            "extra": "mean: 13.499358024691363 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.418076516366527,
            "unit": "iter/sec",
            "range": "stddev: 0.00204317523126162",
            "extra": "mean: 80.52776923076935 msec\nrounds: 13"
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
        "date": 1639410251497,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.4971273013309,
            "unit": "iter/sec",
            "range": "stddev: 0.0009151459467196899",
            "extra": "mean: 13.793649999999957 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.7394929746841,
            "unit": "iter/sec",
            "range": "stddev: 0.0008126511602329083",
            "extra": "mean: 14.136375000000001 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.29284197267964,
            "unit": "iter/sec",
            "range": "stddev: 0.0018260254126630337",
            "extra": "mean: 81.34815384615379 msec\nrounds: 13"
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
        "date": 1639412492184,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 62.384460425746234,
            "unit": "iter/sec",
            "range": "stddev: 0.004055243611441064",
            "extra": "mean: 16.029632911392426 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.20447478410627,
            "unit": "iter/sec",
            "range": "stddev: 0.0011086796457692699",
            "extra": "mean: 14.879961538461396 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 9.341865570554432,
            "unit": "iter/sec",
            "range": "stddev: 0.014308882090039951",
            "extra": "mean: 107.04500000000007 msec\nrounds: 13"
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
        "date": 1639413442911,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.48276689592007,
            "unit": "iter/sec",
            "range": "stddev: 0.0008694749399554857",
            "extra": "mean: 13.608632911392485 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.83691211732678,
            "unit": "iter/sec",
            "range": "stddev: 0.000914276751784927",
            "extra": "mean: 14.52708974358965 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.113915534326143,
            "unit": "iter/sec",
            "range": "stddev: 0.001330222311283237",
            "extra": "mean: 82.54969230769255 msec\nrounds: 13"
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
        "date": 1639414004037,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.74843509418218,
            "unit": "iter/sec",
            "range": "stddev: 0.0013412564291709805",
            "extra": "mean: 13.559609756097554 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 52.49585379969554,
            "unit": "iter/sec",
            "range": "stddev: 0.004510904555581611",
            "extra": "mean: 19.049123456790024 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.040990597676473,
            "unit": "iter/sec",
            "range": "stddev: 0.009622184966933525",
            "extra": "mean: 90.57158333333292 msec\nrounds: 12"
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
        "date": 1639419248269,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 74.57765853436743,
            "unit": "iter/sec",
            "range": "stddev: 0.0010100806772510179",
            "extra": "mean: 13.408841463414578 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.05728385912286,
            "unit": "iter/sec",
            "range": "stddev: 0.0027634225382052943",
            "extra": "mean: 14.480731707317132 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.70576000969551,
            "unit": "iter/sec",
            "range": "stddev: 0.0007479665339420509",
            "extra": "mean: 78.7044615384613 msec\nrounds: 13"
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
        "date": 1639579184340,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 76.81613963300593,
            "unit": "iter/sec",
            "range": "stddev: 0.00045224115739104896",
            "extra": "mean: 13.018097560975658 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.53334902841293,
            "unit": "iter/sec",
            "range": "stddev: 0.0005294316951516905",
            "extra": "mean: 13.979493670886312 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.14854493139346,
            "unit": "iter/sec",
            "range": "stddev: 0.0035491343437155033",
            "extra": "mean: 82.31438461538441 msec\nrounds: 13"
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
        "date": 1639669547135,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 70.39365893920268,
            "unit": "iter/sec",
            "range": "stddev: 0.0012467042605570759",
            "extra": "mean: 14.205825000000015 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.36486752697594,
            "unit": "iter/sec",
            "range": "stddev: 0.0008520704094748505",
            "extra": "mean: 14.416520000000013 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.25498736627667,
            "unit": "iter/sec",
            "range": "stddev: 0.0028951159656470955",
            "extra": "mean: 88.84950000000009 msec\nrounds: 12"
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
        "date": 1639670115515,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 74.75115613602156,
            "unit": "iter/sec",
            "range": "stddev: 0.0006098193878415421",
            "extra": "mean: 13.377719512195124 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 62.54814561208221,
            "unit": "iter/sec",
            "range": "stddev: 0.0015857508270890079",
            "extra": "mean: 15.987684210526515 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.804188489281788,
            "unit": "iter/sec",
            "range": "stddev: 0.0019881839445677475",
            "extra": "mean: 84.71569230769236 msec\nrounds: 13"
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
        "date": 1639670806377,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.55029418514248,
            "unit": "iter/sec",
            "range": "stddev: 0.002181240082947773",
            "extra": "mean: 13.97618292682927 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.2300177540819,
            "unit": "iter/sec",
            "range": "stddev: 0.0006818328978810896",
            "extra": "mean: 14.039025000000006 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.588353170216836,
            "unit": "iter/sec",
            "range": "stddev: 0.004122739433422633",
            "extra": "mean: 86.29353846153866 msec\nrounds: 13"
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
        "date": 1639753369743,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.7830825680303,
            "unit": "iter/sec",
            "range": "stddev: 0.0009478899701114721",
            "extra": "mean: 13.93085897435903 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.95496317181092,
            "unit": "iter/sec",
            "range": "stddev: 0.0008117515754547256",
            "extra": "mean: 14.294911392405112 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.310074165811388,
            "unit": "iter/sec",
            "range": "stddev: 0.002479965253605359",
            "extra": "mean: 88.41674999999964 msec\nrounds: 12"
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
        "date": 1640012567663,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 78.37479013497412,
            "unit": "iter/sec",
            "range": "stddev: 0.0006462932536647612",
            "extra": "mean: 12.759204819277187 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 74.78203771933006,
            "unit": "iter/sec",
            "range": "stddev: 0.000383537640852981",
            "extra": "mean: 13.37219512195125 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.409956221492914,
            "unit": "iter/sec",
            "range": "stddev: 0.0012052381241468332",
            "extra": "mean: 80.58046153846145 msec\nrounds: 13"
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
        "date": 1640013586895,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 83.45586028926365,
            "unit": "iter/sec",
            "range": "stddev: 0.0007303903144835334",
            "extra": "mean: 11.982382022471908 msec\nrounds: 89"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 79.73670390462419,
            "unit": "iter/sec",
            "range": "stddev: 0.00027254868093679757",
            "extra": "mean: 12.54127586206892 msec\nrounds: 87"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.891379994604028,
            "unit": "iter/sec",
            "range": "stddev: 0.0011903055960918632",
            "extra": "mean: 77.57121428571435 msec\nrounds: 14"
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
        "date": 1640724835354,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.13903355206264,
            "unit": "iter/sec",
            "range": "stddev: 0.0007409971596050909",
            "extra": "mean: 13.672589743589771 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.05218809342209,
            "unit": "iter/sec",
            "range": "stddev: 0.0013690996016048178",
            "extra": "mean: 14.913756410256527 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.040421744110649,
            "unit": "iter/sec",
            "range": "stddev: 0.005352571092050389",
            "extra": "mean: 90.5762499999998 msec\nrounds: 12"
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
        "date": 1640791465382,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 74.86911769055581,
            "unit": "iter/sec",
            "range": "stddev: 0.0013750642649403872",
            "extra": "mean: 13.356641975308634 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.26671639591686,
            "unit": "iter/sec",
            "range": "stddev: 0.0011716133334944733",
            "extra": "mean: 14.64842682926832 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.996980452304625,
            "unit": "iter/sec",
            "range": "stddev: 0.004993837024850607",
            "extra": "mean: 83.35430769230766 msec\nrounds: 13"
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
        "date": 1640793665216,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 82.05131987384395,
            "unit": "iter/sec",
            "range": "stddev: 0.000525315232710858",
            "extra": "mean: 12.187494382022448 msec\nrounds: 89"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 75.42269217398552,
            "unit": "iter/sec",
            "range": "stddev: 0.0005282592817467558",
            "extra": "mean: 13.25860919540228 msec\nrounds: 87"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.689228114253865,
            "unit": "iter/sec",
            "range": "stddev: 0.001332967424150505",
            "extra": "mean: 78.80699999999966 msec\nrounds: 14"
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
        "date": 1640877808513,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 75.51152063422265,
            "unit": "iter/sec",
            "range": "stddev: 0.0005532349973976385",
            "extra": "mean: 13.243012345678931 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.78890600655676,
            "unit": "iter/sec",
            "range": "stddev: 0.0009888163845755105",
            "extra": "mean: 14.328924999999982 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.721794919383385,
            "unit": "iter/sec",
            "range": "stddev: 0.0026603712260897727",
            "extra": "mean: 85.31116666666645 msec\nrounds: 12"
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
        "date": 1640879408737,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 74.55989450224104,
            "unit": "iter/sec",
            "range": "stddev: 0.0005657446732077929",
            "extra": "mean: 13.412036144578279 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.28025809757581,
            "unit": "iter/sec",
            "range": "stddev: 0.0005794573604002726",
            "extra": "mean: 14.228746835443014 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.566177842348576,
            "unit": "iter/sec",
            "range": "stddev: 0.002095915010388311",
            "extra": "mean: 79.57869230769245 msec\nrounds: 13"
          }
        ]
      }
    ]
  }
}