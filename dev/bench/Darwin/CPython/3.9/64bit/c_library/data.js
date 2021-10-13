window.BENCHMARK_DATA = {
  "lastUpdate": 1634098652202,
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
        "date": 1633838754952,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 68.63615325896481,
            "unit": "iter/sec",
            "range": "stddev: 0.000586306479459654",
            "extra": "mean: 14.56958108108115 msec\nrounds: 74"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 64.84517997131307,
            "unit": "iter/sec",
            "range": "stddev: 0.0008237252148316766",
            "extra": "mean: 15.421346666666528 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.951363466704436,
            "unit": "iter/sec",
            "range": "stddev: 0.0028342127247665385",
            "extra": "mean: 83.67246153846143 msec\nrounds: 13"
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
        "date": 1634095128893,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.73421553875615,
            "unit": "iter/sec",
            "range": "stddev: 0.0005833431496311481",
            "extra": "mean: 13.748687499999967 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 66.99833706691591,
            "unit": "iter/sec",
            "range": "stddev: 0.0005459656388953466",
            "extra": "mean: 14.925743589743583 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.75004895108076,
            "unit": "iter/sec",
            "range": "stddev: 0.0008539437438044652",
            "extra": "mean: 78.43107142857164 msec\nrounds: 14"
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
        "date": 1634096763470,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.91603942493306,
            "unit": "iter/sec",
            "range": "stddev: 0.0005094670740979187",
            "extra": "mean: 13.905103896103924 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.77726251203939,
            "unit": "iter/sec",
            "range": "stddev: 0.0008586858380229324",
            "extra": "mean: 14.754210526315788 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.505002000800324,
            "unit": "iter/sec",
            "range": "stddev: 0.0013667900350825032",
            "extra": "mean: 79.96799999999998 msec\nrounds: 13"
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
        "date": 1634097190136,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.45898587044627,
            "unit": "iter/sec",
            "range": "stddev: 0.0004329730936214464",
            "extra": "mean: 13.613038461538524 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.01535570499097,
            "unit": "iter/sec",
            "range": "stddev: 0.0002203273062472014",
            "extra": "mean: 14.081461538461602 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.605999486063165,
            "unit": "iter/sec",
            "range": "stddev: 0.0009379333118277041",
            "extra": "mean: 79.32730769230727 msec\nrounds: 13"
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
        "date": 1634098650664,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 76.4859520801343,
            "unit": "iter/sec",
            "range": "stddev: 0.0004991749554125887",
            "extra": "mean: 13.074296296296351 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 66.5730808049261,
            "unit": "iter/sec",
            "range": "stddev: 0.0011812401449062732",
            "extra": "mean: 15.021086419753082 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.253496841661189,
            "unit": "iter/sec",
            "range": "stddev: 0.0036026357788356157",
            "extra": "mean: 81.60935714285714 msec\nrounds: 14"
          }
        ]
      }
    ]
  }
}