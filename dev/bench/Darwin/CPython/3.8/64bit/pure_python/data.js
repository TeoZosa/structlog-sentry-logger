window.BENCHMARK_DATA = {
  "lastUpdate": 1634191089254,
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
        "date": 1633838795511,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 68.24660634527427,
            "unit": "iter/sec",
            "range": "stddev: 0.0008850626641511842",
            "extra": "mean: 14.652743243243258 msec\nrounds: 74"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 59.97574139091646,
            "unit": "iter/sec",
            "range": "stddev: 0.0013172900483202847",
            "extra": "mean: 16.673407894736812 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.274497368814176,
            "unit": "iter/sec",
            "range": "stddev: 0.002156638804208717",
            "extra": "mean: 88.69575 msec\nrounds: 12"
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
        "date": 1633838795511,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 68.24660634527427,
            "unit": "iter/sec",
            "range": "stddev: 0.0008850626641511842",
            "extra": "mean: 14.652743243243258 msec\nrounds: 74"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 59.97574139091646,
            "unit": "iter/sec",
            "range": "stddev: 0.0013172900483202847",
            "extra": "mean: 16.673407894736812 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.274497368814176,
            "unit": "iter/sec",
            "range": "stddev: 0.002156638804208717",
            "extra": "mean: 88.69575 msec\nrounds: 12"
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
        "date": 1634095087338,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 75.2462922621729,
            "unit": "iter/sec",
            "range": "stddev: 0.0005093248629798297",
            "extra": "mean: 13.2896913580247 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.87800643584617,
            "unit": "iter/sec",
            "range": "stddev: 0.0002250861129473715",
            "extra": "mean: 13.912461538461528 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.10750721328025,
            "unit": "iter/sec",
            "range": "stddev: 0.0021230729120178945",
            "extra": "mean: 82.59338461538466 msec\nrounds: 13"
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
        "date": 1634096798616,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 66.61361910880098,
            "unit": "iter/sec",
            "range": "stddev: 0.000997908881534188",
            "extra": "mean: 15.011945205479464 msec\nrounds: 73"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 66.16498901661237,
            "unit": "iter/sec",
            "range": "stddev: 0.0006730222945854282",
            "extra": "mean: 15.113733333333208 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.632813417075491,
            "unit": "iter/sec",
            "range": "stddev: 0.0012988957687902558",
            "extra": "mean: 85.96372727272725 msec\nrounds: 11"
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
        "date": 1634097143190,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.98127550143433,
            "unit": "iter/sec",
            "range": "stddev: 0.0004387152669313011",
            "extra": "mean: 13.702144736842076 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.85064441555161,
            "unit": "iter/sec",
            "range": "stddev: 0.0008930997247685776",
            "extra": "mean: 14.524192307692116 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.030765443569697,
            "unit": "iter/sec",
            "range": "stddev: 0.0015282812870374167",
            "extra": "mean: 83.12023076923076 msec\nrounds: 13"
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
        "date": 1634098411644,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 68.21662008189588,
            "unit": "iter/sec",
            "range": "stddev: 0.0009008491358789836",
            "extra": "mean: 14.659184210526307 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 65.42922900495374,
            "unit": "iter/sec",
            "range": "stddev: 0.001043739298863027",
            "extra": "mean: 15.283689189189262 msec\nrounds: 74"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.98343336427516,
            "unit": "iter/sec",
            "range": "stddev: 0.001593162087139606",
            "extra": "mean: 83.44853846153856 msec\nrounds: 13"
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
        "date": 1634132224786,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 69.48595622194404,
            "unit": "iter/sec",
            "range": "stddev: 0.0006870946024894279",
            "extra": "mean: 14.391397260273935 msec\nrounds: 73"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 66.44477608547624,
            "unit": "iter/sec",
            "range": "stddev: 0.0010342029997717525",
            "extra": "mean: 15.050092105263095 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.495736850203482,
            "unit": "iter/sec",
            "range": "stddev: 0.0033460700120647026",
            "extra": "mean: 86.98876923076918 msec\nrounds: 13"
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
        "date": 1634190707112,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 66.72906901065501,
            "unit": "iter/sec",
            "range": "stddev: 0.001183640394111464",
            "extra": "mean: 14.985972602739661 msec\nrounds: 73"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 66.33851215984913,
            "unit": "iter/sec",
            "range": "stddev: 0.0009431196077881895",
            "extra": "mean: 15.074200000000033 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.31284639699983,
            "unit": "iter/sec",
            "range": "stddev: 0.0020161123010901945",
            "extra": "mean: 88.39508333333335 msec\nrounds: 12"
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
        "date": 1634191087585,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.86693270040014,
            "unit": "iter/sec",
            "range": "stddev: 0.00047030126738634983",
            "extra": "mean: 13.914605263157867 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.190033087029,
            "unit": "iter/sec",
            "range": "stddev: 0.0003964228326814185",
            "extra": "mean: 14.452948717948647 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.209645244061424,
            "unit": "iter/sec",
            "range": "stddev: 0.0015751412431580327",
            "extra": "mean: 81.9024615384615 msec\nrounds: 13"
          }
        ]
      }
    ]
  }
}