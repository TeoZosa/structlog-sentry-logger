window.BENCHMARK_DATA = {
  "lastUpdate": 1638203826096,
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
        "date": 1633838551292,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 70.53066701995559,
            "unit": "iter/sec",
            "range": "stddev: 0.0005013342074875696",
            "extra": "mean: 14.178229729729695 msec\nrounds: 74"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 66.92707932939085,
            "unit": "iter/sec",
            "range": "stddev: 0.000673224047754358",
            "extra": "mean: 14.941635135135096 msec\nrounds: 74"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.26383275461121,
            "unit": "iter/sec",
            "range": "stddev: 0.0014593991976779934",
            "extra": "mean: 88.77972727272767 msec\nrounds: 11"
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
        "date": 1634094945462,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 67.55712510191441,
            "unit": "iter/sec",
            "range": "stddev: 0.0009304644819697137",
            "extra": "mean: 14.802287671232808 msec\nrounds: 73"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 63.69277288162859,
            "unit": "iter/sec",
            "range": "stddev: 0.0012716864901078876",
            "extra": "mean: 15.700368421052646 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.707325952416664,
            "unit": "iter/sec",
            "range": "stddev: 0.003238281165849",
            "extra": "mean: 93.39399999999982 msec\nrounds: 12"
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
        "date": 1634096437964,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 67.35190998791408,
            "unit": "iter/sec",
            "range": "stddev: 0.0008724800745220955",
            "extra": "mean: 14.847388888888887 msec\nrounds: 72"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 57.93021600925057,
            "unit": "iter/sec",
            "range": "stddev: 0.002343340050876054",
            "extra": "mean: 17.26214864864849 msec\nrounds: 74"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.78066753189129,
            "unit": "iter/sec",
            "range": "stddev: 0.000989294223477298",
            "extra": "mean: 84.88483333333303 msec\nrounds: 12"
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
        "date": 1634097057666,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 70.48342229907522,
            "unit": "iter/sec",
            "range": "stddev: 0.0007377090786242323",
            "extra": "mean: 14.187733333333341 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.04036872160864,
            "unit": "iter/sec",
            "range": "stddev: 0.0003084843086681444",
            "extra": "mean: 14.277480519480518 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.071877707420084,
            "unit": "iter/sec",
            "range": "stddev: 0.0025962759153812533",
            "extra": "mean: 90.31891666666677 msec\nrounds: 12"
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
        "date": 1634098263374,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.08893784687538,
            "unit": "iter/sec",
            "range": "stddev: 0.0004797484933620622",
            "extra": "mean: 13.681961038961123 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.89463564628198,
            "unit": "iter/sec",
            "range": "stddev: 0.00021154939774355915",
            "extra": "mean: 13.909243589743607 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.485176943507293,
            "unit": "iter/sec",
            "range": "stddev: 0.0013954646749709052",
            "extra": "mean: 87.06874999999995 msec\nrounds: 12"
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
        "date": 1634132398500,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 69.42245274280508,
            "unit": "iter/sec",
            "range": "stddev: 0.0003205432448854239",
            "extra": "mean: 14.404561643835605 msec\nrounds: 73"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 63.655913978494446,
            "unit": "iter/sec",
            "range": "stddev: 0.0009907275199983322",
            "extra": "mean: 15.709459459459504 msec\nrounds: 74"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.14084065069938,
            "unit": "iter/sec",
            "range": "stddev: 0.0017266483472761316",
            "extra": "mean: 89.75983333333322 msec\nrounds: 12"
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
        "date": 1634190771108,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 65.85422070676219,
            "unit": "iter/sec",
            "range": "stddev: 0.001358684345902198",
            "extra": "mean: 15.185055555555541 msec\nrounds: 72"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 66.75971487370836,
            "unit": "iter/sec",
            "range": "stddev: 0.0005274035373138416",
            "extra": "mean: 14.979093333333347 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.11865502837364,
            "unit": "iter/sec",
            "range": "stddev: 0.004426390838431076",
            "extra": "mean: 98.82736363636351 msec\nrounds: 11"
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
        "date": 1634191133757,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 66.85275543247295,
            "unit": "iter/sec",
            "range": "stddev: 0.0008704428116518167",
            "extra": "mean: 14.958246575342526 msec\nrounds: 73"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 62.98218108132808,
            "unit": "iter/sec",
            "range": "stddev: 0.0012219576271385272",
            "extra": "mean: 15.877506666666767 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.249271602902235,
            "unit": "iter/sec",
            "range": "stddev: 0.0025033782556596208",
            "extra": "mean: 97.56790909090896 msec\nrounds: 11"
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
        "date": 1634191580646,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.52220905753498,
            "unit": "iter/sec",
            "range": "stddev: 0.0003516386549914775",
            "extra": "mean: 13.981671052631565 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.73467614357953,
            "unit": "iter/sec",
            "range": "stddev: 0.00048431310790776974",
            "extra": "mean: 14.763486842105296 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.481847199577448,
            "unit": "iter/sec",
            "range": "stddev: 0.0016674023346074796",
            "extra": "mean: 87.09400000000015 msec\nrounds: 12"
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
        "date": 1634237904343,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 69.66253210124815,
            "unit": "iter/sec",
            "range": "stddev: 0.0008144372753794981",
            "extra": "mean: 14.35491891891887 msec\nrounds: 74"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 65.45951286064114,
            "unit": "iter/sec",
            "range": "stddev: 0.0009215642494094206",
            "extra": "mean: 15.276618421052598 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.092695182904722,
            "unit": "iter/sec",
            "range": "stddev: 0.0035198922364271814",
            "extra": "mean: 90.14941666666631 msec\nrounds: 12"
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
        "date": 1634250307724,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.33054288249596,
            "unit": "iter/sec",
            "range": "stddev: 0.0002980422988300073",
            "extra": "mean: 14.019239999999963 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 65.72188573385445,
            "unit": "iter/sec",
            "range": "stddev: 0.000964798339441805",
            "extra": "mean: 15.215631578947272 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.122140567173535,
            "unit": "iter/sec",
            "range": "stddev: 0.0031235412340659273",
            "extra": "mean: 89.91075000000019 msec\nrounds: 12"
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
        "date": 1634252632212,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 63.427737806874454,
            "unit": "iter/sec",
            "range": "stddev: 0.0018009369325092523",
            "extra": "mean: 15.765972972972994 msec\nrounds: 74"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.74053236928017,
            "unit": "iter/sec",
            "range": "stddev: 0.0009174908292479803",
            "extra": "mean: 14.762210526315446 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.38999720335909,
            "unit": "iter/sec",
            "range": "stddev: 0.002824511364284138",
            "extra": "mean: 96.24641666666663 msec\nrounds: 12"
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
        "date": 1635032824413,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.1638419365675,
            "unit": "iter/sec",
            "range": "stddev: 0.0006182545343052602",
            "extra": "mean: 14.052079999999982 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.03847754954093,
            "unit": "iter/sec",
            "range": "stddev: 0.0004927519818469268",
            "extra": "mean: 14.697565789473595 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.598954547563492,
            "unit": "iter/sec",
            "range": "stddev: 0.0012322692543236256",
            "extra": "mean: 86.21466666666633 msec\nrounds: 12"
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
        "date": 1635033549288,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 69.45481773818923,
            "unit": "iter/sec",
            "range": "stddev: 0.0008467010765846496",
            "extra": "mean: 14.397849315068566 msec\nrounds: 73"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.58204771826081,
            "unit": "iter/sec",
            "range": "stddev: 0.0005644151518910797",
            "extra": "mean: 14.796828947368487 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.554897340429743,
            "unit": "iter/sec",
            "range": "stddev: 0.0030191908345541126",
            "extra": "mean: 94.74274999999999 msec\nrounds: 12"
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
        "date": 1635061827791,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 69.26819536955976,
            "unit": "iter/sec",
            "range": "stddev: 0.0008980619168444596",
            "extra": "mean: 14.436639999999983 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 65.10695530750179,
            "unit": "iter/sec",
            "range": "stddev: 0.0009249090124997642",
            "extra": "mean: 15.359342105263176 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.00031350893504,
            "unit": "iter/sec",
            "range": "stddev: 0.002129531382509523",
            "extra": "mean: 90.90649999999971 msec\nrounds: 12"
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
        "date": 1635177238550,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 69.37585464663069,
            "unit": "iter/sec",
            "range": "stddev: 0.0007761394353838357",
            "extra": "mean: 14.414236842105211 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 64.91426619119804,
            "unit": "iter/sec",
            "range": "stddev: 0.0009451363123631375",
            "extra": "mean: 15.404934210526338 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.353250719512253,
            "unit": "iter/sec",
            "range": "stddev: 0.0022471907108452408",
            "extra": "mean: 88.08050000000007 msec\nrounds: 12"
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
        "date": 1635178437748,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.00537936754084,
            "unit": "iter/sec",
            "range": "stddev: 0.0005672607065444374",
            "extra": "mean: 14.083440000000008 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.43034489734191,
            "unit": "iter/sec",
            "range": "stddev: 0.0007866203144610368",
            "extra": "mean: 14.830118421052594 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.19090565964791,
            "unit": "iter/sec",
            "range": "stddev: 0.0011964482513599714",
            "extra": "mean: 89.3582727272729 msec\nrounds: 11"
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
        "date": 1635183147653,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 77.84930842282095,
            "unit": "iter/sec",
            "range": "stddev: 0.0003106986573449885",
            "extra": "mean: 12.845329268292605 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 73.69302720171387,
            "unit": "iter/sec",
            "range": "stddev: 0.0010364009596250546",
            "extra": "mean: 13.569804878048803 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.577197196180913,
            "unit": "iter/sec",
            "range": "stddev: 0.002517678043509261",
            "extra": "mean: 86.37669230769258 msec\nrounds: 13"
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
        "date": 1635202568373,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 68.32958688632597,
            "unit": "iter/sec",
            "range": "stddev: 0.001392657954831035",
            "extra": "mean: 14.634948717948694 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.95813879869644,
            "unit": "iter/sec",
            "range": "stddev: 0.0007112273176068191",
            "extra": "mean: 14.294262499999977 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.51836243121429,
            "unit": "iter/sec",
            "range": "stddev: 0.0026280669298707733",
            "extra": "mean: 95.07183333333336 msec\nrounds: 12"
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
        "date": 1635202998580,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 74.05463169538251,
            "unit": "iter/sec",
            "range": "stddev: 0.0007069505077781861",
            "extra": "mean: 13.503544303797442 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.67272640396682,
            "unit": "iter/sec",
            "range": "stddev: 0.0007327683918190763",
            "extra": "mean: 13.952308641975335 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.094797649382187,
            "unit": "iter/sec",
            "range": "stddev: 0.002123933928664526",
            "extra": "mean: 90.13233333333348 msec\nrounds: 12"
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
        "date": 1635203461299,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.65309280441876,
            "unit": "iter/sec",
            "range": "stddev: 0.0007349050501069557",
            "extra": "mean: 13.764038961038972 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 64.86463407725176,
            "unit": "iter/sec",
            "range": "stddev: 0.0010660609250004894",
            "extra": "mean: 15.416721518987234 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.461874314529295,
            "unit": "iter/sec",
            "range": "stddev: 0.003854644160756991",
            "extra": "mean: 95.5851666666665 msec\nrounds: 12"
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
        "date": 1635204979058,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 67.48294740975034,
            "unit": "iter/sec",
            "range": "stddev: 0.0010553291266797245",
            "extra": "mean: 14.818558441558437 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.37793854190856,
            "unit": "iter/sec",
            "range": "stddev: 0.0005923651631270919",
            "extra": "mean: 14.624600000000061 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.86456236555106,
            "unit": "iter/sec",
            "range": "stddev: 0.002839935713100966",
            "extra": "mean: 92.04236363636346 msec\nrounds: 11"
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
        "date": 1635449710894,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.34570616596008,
            "unit": "iter/sec",
            "range": "stddev: 0.0007587300344480388",
            "extra": "mean: 13.63406329113922 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.93680179013424,
            "unit": "iter/sec",
            "range": "stddev: 0.0014589737059060028",
            "extra": "mean: 14.719562500000105 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.033782684133124,
            "unit": "iter/sec",
            "range": "stddev: 0.002983933466386271",
            "extra": "mean: 90.63075000000016 msec\nrounds: 12"
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
        "date": 1635452682763,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 74.95988697187732,
            "unit": "iter/sec",
            "range": "stddev: 0.00034368309924067157",
            "extra": "mean: 13.34046835443028 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.70480704129966,
            "unit": "iter/sec",
            "range": "stddev: 0.0014506757831603523",
            "extra": "mean: 14.77000000000006 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.88982581723602,
            "unit": "iter/sec",
            "range": "stddev: 0.0016411054386008474",
            "extra": "mean: 91.82883333333362 msec\nrounds: 12"
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
        "date": 1635946331264,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.93528038158905,
            "unit": "iter/sec",
            "range": "stddev: 0.000991977144567634",
            "extra": "mean: 13.901384615384606 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 65.85463060683806,
            "unit": "iter/sec",
            "range": "stddev: 0.0014693235593790433",
            "extra": "mean: 15.18496103896093 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 9.79066737268257,
            "unit": "iter/sec",
            "range": "stddev: 0.007972708943735248",
            "extra": "mean: 102.13808333333334 msec\nrounds: 12"
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
        "date": 1636165267094,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.28580225586974,
            "unit": "iter/sec",
            "range": "stddev: 0.0006527890837271504",
            "extra": "mean: 13.645207792207884 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.02963555847597,
            "unit": "iter/sec",
            "range": "stddev: 0.0007344132288108208",
            "extra": "mean: 14.486531645569617 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.32112852782875,
            "unit": "iter/sec",
            "range": "stddev: 0.0028024106654588148",
            "extra": "mean: 88.33041666666668 msec\nrounds: 12"
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
        "date": 1636383993876,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 74.57663043158323,
            "unit": "iter/sec",
            "range": "stddev: 0.0004229398688129535",
            "extra": "mean: 13.409026315789399 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.21942269231694,
            "unit": "iter/sec",
            "range": "stddev: 0.0006678281174407376",
            "extra": "mean: 14.241074074074024 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.426503775507262,
            "unit": "iter/sec",
            "range": "stddev: 0.0028726015080836184",
            "extra": "mean: 87.51583333333353 msec\nrounds: 12"
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
        "date": 1636384799425,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 58.2034778467738,
            "unit": "iter/sec",
            "range": "stddev: 0.0013481922846656526",
            "extra": "mean: 17.181103896103856 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.83082170874066,
            "unit": "iter/sec",
            "range": "stddev: 0.0011143139473206414",
            "extra": "mean: 14.742560606060596 msec\nrounds: 66"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.067160139040404,
            "unit": "iter/sec",
            "range": "stddev: 0.0028987917375827136",
            "extra": "mean: 90.35741666666682 msec\nrounds: 12"
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
        "date": 1636468938792,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 75.23243489299381,
            "unit": "iter/sec",
            "range": "stddev: 0.00043485528787079464",
            "extra": "mean: 13.292139240506321 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.36103330776156,
            "unit": "iter/sec",
            "range": "stddev: 0.0006651149229715077",
            "extra": "mean: 14.013250000000143 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.425599015823478,
            "unit": "iter/sec",
            "range": "stddev: 0.007206760060400404",
            "extra": "mean: 95.91774999999976 msec\nrounds: 12"
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
        "date": 1636642131137,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 75.42983068390026,
            "unit": "iter/sec",
            "range": "stddev: 0.00038703266402849836",
            "extra": "mean: 13.257354430379754 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.70508334581373,
            "unit": "iter/sec",
            "range": "stddev: 0.0005262122632469473",
            "extra": "mean: 13.946012658227833 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.906250186035168,
            "unit": "iter/sec",
            "range": "stddev: 0.001395114299651005",
            "extra": "mean: 83.98949999999994 msec\nrounds: 12"
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
        "date": 1636642984810,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 70.32724424028751,
            "unit": "iter/sec",
            "range": "stddev: 0.0011155915668287037",
            "extra": "mean: 14.219240506329156 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.1502073615702,
            "unit": "iter/sec",
            "range": "stddev: 0.0005463084480118106",
            "extra": "mean: 13.859974025973985 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.12947474443944,
            "unit": "iter/sec",
            "range": "stddev: 0.002867149027423781",
            "extra": "mean: 89.85149999999997 msec\nrounds: 12"
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
        "date": 1636745254591,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 75.52684696183837,
            "unit": "iter/sec",
            "range": "stddev: 0.00042600614409905445",
            "extra": "mean: 13.240324999999965 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.22616249991478,
            "unit": "iter/sec",
            "range": "stddev: 0.000682009096058415",
            "extra": "mean: 14.239707317073083 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.8390831813984,
            "unit": "iter/sec",
            "range": "stddev: 0.0016629298350692345",
            "extra": "mean: 84.46600000000022 msec\nrounds: 12"
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
        "date": 1636745792002,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.41217926877704,
            "unit": "iter/sec",
            "range": "stddev: 0.0007211350342312427",
            "extra": "mean: 13.62171794871795 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.5480057302664,
            "unit": "iter/sec",
            "range": "stddev: 0.0009556513491519713",
            "extra": "mean: 14.58831645569616 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.35400266440594,
            "unit": "iter/sec",
            "range": "stddev: 0.0023202408312826554",
            "extra": "mean: 88.07466666666681 msec\nrounds: 12"
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
        "date": 1637161561157,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 69.34746634697512,
            "unit": "iter/sec",
            "range": "stddev: 0.0011123515715946073",
            "extra": "mean: 14.42013749999994 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.81418083094573,
            "unit": "iter/sec",
            "range": "stddev: 0.000993456321066807",
            "extra": "mean: 14.323737500000021 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.711015029339247,
            "unit": "iter/sec",
            "range": "stddev: 0.00320524606439728",
            "extra": "mean: 93.36183333333341 msec\nrounds: 12"
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
        "date": 1637162054609,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.8222511622274,
            "unit": "iter/sec",
            "range": "stddev: 0.00046660102530591006",
            "extra": "mean: 13.54605128205125 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 65.5921183182183,
            "unit": "iter/sec",
            "range": "stddev: 0.0012058423878475715",
            "extra": "mean: 15.245734177215143 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.260320787772034,
            "unit": "iter/sec",
            "range": "stddev: 0.0012245421748058728",
            "extra": "mean: 88.80741666666674 msec\nrounds: 12"
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
        "date": 1637162904415,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.74470905348629,
            "unit": "iter/sec",
            "range": "stddev: 0.0006506846366229111",
            "extra": "mean: 13.560294871794941 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.85847197565707,
            "unit": "iter/sec",
            "range": "stddev: 0.0003980398787662924",
            "extra": "mean: 13.916243589743491 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.656947686533035,
            "unit": "iter/sec",
            "range": "stddev: 0.001403401266080476",
            "extra": "mean: 85.78574999999988 msec\nrounds: 12"
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
        "date": 1637175358171,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 75.6852425420927,
            "unit": "iter/sec",
            "range": "stddev: 0.0003915676528688258",
            "extra": "mean: 13.212615384615376 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.65309801086852,
            "unit": "iter/sec",
            "range": "stddev: 0.0002308397403371603",
            "extra": "mean: 13.764037974683546 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.43071604863001,
            "unit": "iter/sec",
            "range": "stddev: 0.0016912938811526443",
            "extra": "mean: 87.48358333333384 msec\nrounds: 12"
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
        "date": 1637530002825,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.42420362979173,
            "unit": "iter/sec",
            "range": "stddev: 0.0005198034029856934",
            "extra": "mean: 13.61948717948712 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.6339172965609,
            "unit": "iter/sec",
            "range": "stddev: 0.0011636926070097877",
            "extra": "mean: 14.785481012658256 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.722145429819564,
            "unit": "iter/sec",
            "range": "stddev: 0.0028934889747449246",
            "extra": "mean: 93.26491666666644 msec\nrounds: 12"
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
        "date": 1637592345084,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.95521955686813,
            "unit": "iter/sec",
            "range": "stddev: 0.0008485412185567742",
            "extra": "mean: 13.897532467532441 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.90288996589518,
            "unit": "iter/sec",
            "range": "stddev: 0.00044303381186428756",
            "extra": "mean: 14.103797468354355 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.745611089470625,
            "unit": "iter/sec",
            "range": "stddev: 0.003142215145836855",
            "extra": "mean: 93.06125000000017 msec\nrounds: 12"
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
        "date": 1637593771710,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.54234541650186,
            "unit": "iter/sec",
            "range": "stddev: 0.0004605201834568655",
            "extra": "mean: 13.785051948051862 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.50413637591333,
            "unit": "iter/sec",
            "range": "stddev: 0.0006748014556474786",
            "extra": "mean: 14.387632911392451 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.918341722259234,
            "unit": "iter/sec",
            "range": "stddev: 0.0015727568152768647",
            "extra": "mean: 91.58899999999991 msec\nrounds: 12"
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
        "date": 1637678504362,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.85413901031718,
            "unit": "iter/sec",
            "range": "stddev: 0.00041618475864311355",
            "extra": "mean: 13.540202531645562 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.70632781111433,
            "unit": "iter/sec",
            "range": "stddev: 0.0006668410100411587",
            "extra": "mean: 13.753961038961094 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.315446803473312,
            "unit": "iter/sec",
            "range": "stddev: 0.0021980629409340557",
            "extra": "mean: 88.37476923076929 msec\nrounds: 13"
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
        "date": 1637938781875,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 67.01047974281892,
            "unit": "iter/sec",
            "range": "stddev: 0.0010476454985191158",
            "extra": "mean: 14.92303896103898 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.73808634695503,
            "unit": "iter/sec",
            "range": "stddev: 0.000963598685608508",
            "extra": "mean: 14.76274358974347 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.27067464379974,
            "unit": "iter/sec",
            "range": "stddev: 0.0015299028390621376",
            "extra": "mean: 88.72583333333317 msec\nrounds: 12"
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
        "date": 1637939776122,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 75.8209034439751,
            "unit": "iter/sec",
            "range": "stddev: 0.0002902949602112782",
            "extra": "mean: 13.188974999999981 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 73.31956147570263,
            "unit": "iter/sec",
            "range": "stddev: 0.0002884266255990478",
            "extra": "mean: 13.638925000000034 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.814768066257164,
            "unit": "iter/sec",
            "range": "stddev: 0.001353425138698473",
            "extra": "mean: 84.63983333333373 msec\nrounds: 12"
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
        "date": 1638203819323,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 69.21158893415992,
            "unit": "iter/sec",
            "range": "stddev: 0.0010032356505458872",
            "extra": "mean: 14.448447368421014 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 62.86304428578961,
            "unit": "iter/sec",
            "range": "stddev: 0.0015614373039616785",
            "extra": "mean: 15.907597402597524 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 9.170915857680741,
            "unit": "iter/sec",
            "range": "stddev: 0.009972554179072758",
            "extra": "mean: 109.04036363636345 msec\nrounds: 11"
          }
        ]
      }
    ]
  }
}