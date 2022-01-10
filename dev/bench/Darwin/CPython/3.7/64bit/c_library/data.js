window.BENCHMARK_DATA = {
  "lastUpdate": 1641848825093,
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
        "date": 1633838771898,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 69.08946619050951,
            "unit": "iter/sec",
            "range": "stddev: 0.0007014094322119105",
            "extra": "mean: 14.473986486486494 msec\nrounds: 74"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.99361575734198,
            "unit": "iter/sec",
            "range": "stddev: 0.00042328166724376676",
            "extra": "mean: 14.707263157894635 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.578518760095033,
            "unit": "iter/sec",
            "range": "stddev: 0.0015332376814699421",
            "extra": "mean: 86.36683333333325 msec\nrounds: 12"
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
        "date": 1634094727015,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 75.60250471098101,
            "unit": "iter/sec",
            "range": "stddev: 0.0009197744739399567",
            "extra": "mean: 13.22707500000001 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.07593639386494,
            "unit": "iter/sec",
            "range": "stddev: 0.000905138510797016",
            "extra": "mean: 13.874256097561007 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.431304054588322,
            "unit": "iter/sec",
            "range": "stddev: 0.0013651961203318271",
            "extra": "mean: 87.47908333333305 msec\nrounds: 12"
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
        "date": 1634096240912,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 70.51386502693353,
            "unit": "iter/sec",
            "range": "stddev: 0.00031484568159814485",
            "extra": "mean: 14.18160810810809 msec\nrounds: 74"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.07748292464451,
            "unit": "iter/sec",
            "range": "stddev: 0.00038984224857232066",
            "extra": "mean: 14.6891447368421 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.30241494932755,
            "unit": "iter/sec",
            "range": "stddev: 0.001442436091751516",
            "extra": "mean: 88.47666666666632 msec\nrounds: 12"
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
        "date": 1634097229892,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 68.26806719074074,
            "unit": "iter/sec",
            "range": "stddev: 0.0009210607157431727",
            "extra": "mean: 14.648136986301424 msec\nrounds: 73"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 64.22591078764101,
            "unit": "iter/sec",
            "range": "stddev: 0.0008859367685325218",
            "extra": "mean: 15.570039999999967 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.063701103050997,
            "unit": "iter/sec",
            "range": "stddev: 0.0017519368156590188",
            "extra": "mean: 90.3856666666667 msec\nrounds: 12"
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
        "date": 1634098351468,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 69.89042734113487,
            "unit": "iter/sec",
            "range": "stddev: 0.0004669009773943055",
            "extra": "mean: 14.308111111111176 msec\nrounds: 72"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.21043794599161,
            "unit": "iter/sec",
            "range": "stddev: 0.0002926670349390015",
            "extra": "mean: 14.660512820512759 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.328214239187666,
            "unit": "iter/sec",
            "range": "stddev: 0.002057502538751632",
            "extra": "mean: 88.27516666666686 msec\nrounds: 12"
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
        "date": 1634131686902,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.7569596283916,
            "unit": "iter/sec",
            "range": "stddev: 0.0004043643860836412",
            "extra": "mean: 13.744389610389586 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.59111570598712,
            "unit": "iter/sec",
            "range": "stddev: 0.00034539231465443155",
            "extra": "mean: 14.166088607594935 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.557209518380105,
            "unit": "iter/sec",
            "range": "stddev: 0.0031164440691857677",
            "extra": "mean: 94.72199999999998 msec\nrounds: 12"
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
        "date": 1634190534460,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 69.45617690676004,
            "unit": "iter/sec",
            "range": "stddev: 0.0006752971153516253",
            "extra": "mean: 14.397567567567513 msec\nrounds: 74"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 66.73435012755147,
            "unit": "iter/sec",
            "range": "stddev: 0.00078305409176545",
            "extra": "mean: 14.984786666666695 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.178836227254568,
            "unit": "iter/sec",
            "range": "stddev: 0.002779554317609836",
            "extra": "mean: 89.45474999999996 msec\nrounds: 12"
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
        "date": 1634190981131,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.00302662234839,
            "unit": "iter/sec",
            "range": "stddev: 0.00033479324694234673",
            "extra": "mean: 14.083906666666621 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 66.13341944992445,
            "unit": "iter/sec",
            "range": "stddev: 0.0007070574103115088",
            "extra": "mean: 15.120948051948075 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.173257181378244,
            "unit": "iter/sec",
            "range": "stddev: 0.001301038079124678",
            "extra": "mean: 89.49941666666695 msec\nrounds: 12"
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
        "date": 1634191448832,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 70.58421103593176,
            "unit": "iter/sec",
            "range": "stddev: 0.0006112349586359484",
            "extra": "mean: 14.167474358974387 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.17341270990998,
            "unit": "iter/sec",
            "range": "stddev: 0.0005453169320029523",
            "extra": "mean: 14.668475000000047 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.33294297640856,
            "unit": "iter/sec",
            "range": "stddev: 0.0036497918579090757",
            "extra": "mean: 88.23833333333357 msec\nrounds: 12"
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
        "date": 1634237584260,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.60746612201645,
            "unit": "iter/sec",
            "range": "stddev: 0.0002859789401402042",
            "extra": "mean: 13.772688311688299 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.17782159039763,
            "unit": "iter/sec",
            "range": "stddev: 0.0008431216385566941",
            "extra": "mean: 14.455500000000102 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.14935960865746,
            "unit": "iter/sec",
            "range": "stddev: 0.0012138382492963592",
            "extra": "mean: 89.69125000000015 msec\nrounds: 12"
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
        "date": 1634250379886,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 66.12916878280016,
            "unit": "iter/sec",
            "range": "stddev: 0.001494395265560539",
            "extra": "mean: 15.121919999999976 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 66.82364361192317,
            "unit": "iter/sec",
            "range": "stddev: 0.0012816127222467822",
            "extra": "mean: 14.964763157894797 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.014337914380022,
            "unit": "iter/sec",
            "range": "stddev: 0.0029280317039082045",
            "extra": "mean: 90.79075000000019 msec\nrounds: 12"
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
        "date": 1634252408654,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 68.69010787169826,
            "unit": "iter/sec",
            "range": "stddev: 0.0010240531034823555",
            "extra": "mean: 14.558136986301351 msec\nrounds: 73"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 65.31897576408124,
            "unit": "iter/sec",
            "range": "stddev: 0.0012983812023021346",
            "extra": "mean: 15.309486842105349 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.14392377556136,
            "unit": "iter/sec",
            "range": "stddev: 0.0023389107410383457",
            "extra": "mean: 89.73500000000013 msec\nrounds: 12"
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
        "date": 1635032783749,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 70.38288288288307,
            "unit": "iter/sec",
            "range": "stddev: 0.0006173732691206752",
            "extra": "mean: 14.207999999999961 msec\nrounds: 74"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 66.35788132556489,
            "unit": "iter/sec",
            "range": "stddev: 0.0009388564061406556",
            "extra": "mean: 15.069800000000035 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.234734804084988,
            "unit": "iter/sec",
            "range": "stddev: 0.0017741658902311185",
            "extra": "mean: 89.00966666666636 msec\nrounds: 12"
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
        "date": 1635033405358,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.12557647279739,
            "unit": "iter/sec",
            "range": "stddev: 0.0005212101988174236",
            "extra": "mean: 14.059639999999984 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 66.85623738305576,
            "unit": "iter/sec",
            "range": "stddev: 0.0010137781676847226",
            "extra": "mean: 14.957467532467554 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.160133028785726,
            "unit": "iter/sec",
            "range": "stddev: 0.0020125484221541283",
            "extra": "mean: 89.60466666666649 msec\nrounds: 12"
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
        "date": 1635061627494,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 70.84788863845495,
            "unit": "iter/sec",
            "range": "stddev: 0.000545986612382505",
            "extra": "mean: 14.114746666666623 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.2011698379645,
            "unit": "iter/sec",
            "range": "stddev: 0.0005252452702061038",
            "extra": "mean: 14.880693333333342 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.369407199108613,
            "unit": "iter/sec",
            "range": "stddev: 0.0012729458556891816",
            "extra": "mean: 87.95533333333354 msec\nrounds: 12"
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
        "date": 1635177332913,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 69.31287833279454,
            "unit": "iter/sec",
            "range": "stddev: 0.0008140741770660763",
            "extra": "mean: 14.427333333333271 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 56.58450001638004,
            "unit": "iter/sec",
            "range": "stddev: 0.002070830076470268",
            "extra": "mean: 17.672684210526217 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 8.682447304056709,
            "unit": "iter/sec",
            "range": "stddev: 0.007111459913407553",
            "extra": "mean: 115.17489999999988 msec\nrounds: 10"
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
        "date": 1635178460632,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 70.9731938978193,
            "unit": "iter/sec",
            "range": "stddev: 0.0005251732114093533",
            "extra": "mean: 14.08982666666669 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 66.36876406515697,
            "unit": "iter/sec",
            "range": "stddev: 0.0009276478266837144",
            "extra": "mean: 15.06732894736835 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.157580367121584,
            "unit": "iter/sec",
            "range": "stddev: 0.0019418550565391656",
            "extra": "mean: 89.62516666666669 msec\nrounds: 12"
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
        "date": 1635182860879,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 76.54623392529076,
            "unit": "iter/sec",
            "range": "stddev: 0.0004456321629902392",
            "extra": "mean: 13.064000000000018 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.8205187718692,
            "unit": "iter/sec",
            "range": "stddev: 0.000670966887736378",
            "extra": "mean: 13.923597560975596 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.62592426097877,
            "unit": "iter/sec",
            "range": "stddev: 0.0011153905417416498",
            "extra": "mean: 86.0146666666665 msec\nrounds: 12"
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
        "date": 1635202611871,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 75.767804705569,
            "unit": "iter/sec",
            "range": "stddev: 0.00034337479607965513",
            "extra": "mean: 13.198217948717987 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.10469253864099,
            "unit": "iter/sec",
            "range": "stddev: 0.0003650711361769173",
            "extra": "mean: 13.868722891566298 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.913863243836616,
            "unit": "iter/sec",
            "range": "stddev: 0.00519453820606213",
            "extra": "mean: 91.6265833333334 msec\nrounds: 12"
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
        "date": 1635202902842,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 75.34889399269002,
            "unit": "iter/sec",
            "range": "stddev: 0.00037022292380047554",
            "extra": "mean: 13.271594936708892 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.03262794973993,
            "unit": "iter/sec",
            "range": "stddev: 0.0004999281326515055",
            "extra": "mean: 14.078037500000185 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.222085063404732,
            "unit": "iter/sec",
            "range": "stddev: 0.003668696721774742",
            "extra": "mean: 89.1100000000004 msec\nrounds: 12"
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
        "date": 1635203291446,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 76.46180637194473,
            "unit": "iter/sec",
            "range": "stddev: 0.00023293975833381966",
            "extra": "mean: 13.078424999999982 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 65.16578991526805,
            "unit": "iter/sec",
            "range": "stddev: 0.0009563194341465704",
            "extra": "mean: 15.34547500000003 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.72291975356782,
            "unit": "iter/sec",
            "range": "stddev: 0.0038345421322022177",
            "extra": "mean: 93.2581818181817 msec\nrounds: 11"
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
        "date": 1635204764544,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.14350851361912,
            "unit": "iter/sec",
            "range": "stddev: 0.0005542117720797218",
            "extra": "mean: 13.6717532467533 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.76712984289023,
            "unit": "iter/sec",
            "range": "stddev: 0.0007184968859070826",
            "extra": "mean: 14.333397435897346 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.90142027337127,
            "unit": "iter/sec",
            "range": "stddev: 0.0024775963730757715",
            "extra": "mean: 91.73116666666677 msec\nrounds: 12"
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
        "date": 1635449430556,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 74.5307821446606,
            "unit": "iter/sec",
            "range": "stddev: 0.0005759810997031142",
            "extra": "mean: 13.417274999999984 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.56012059492035,
            "unit": "iter/sec",
            "range": "stddev: 0.00030414885492036927",
            "extra": "mean: 13.781675000000016 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.352617014734756,
            "unit": "iter/sec",
            "range": "stddev: 0.0019544314429396953",
            "extra": "mean: 88.08541666666662 msec\nrounds: 12"
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
        "date": 1635452443428,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 75.34645415865901,
            "unit": "iter/sec",
            "range": "stddev: 0.0005921264429011433",
            "extra": "mean: 13.272024691358054 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 74.68941650968047,
            "unit": "iter/sec",
            "range": "stddev: 0.00045766404162869614",
            "extra": "mean: 13.388777777777799 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.453627602478944,
            "unit": "iter/sec",
            "range": "stddev: 0.0014679977990033298",
            "extra": "mean: 87.30858333333336 msec\nrounds: 12"
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
        "date": 1635946166768,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 67.76555519718937,
            "unit": "iter/sec",
            "range": "stddev: 0.0017142182356292622",
            "extra": "mean: 14.756759493670845 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.27989293712797,
            "unit": "iter/sec",
            "range": "stddev: 0.0014955358431772282",
            "extra": "mean: 14.64559999999998 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.198448641581487,
            "unit": "iter/sec",
            "range": "stddev: 0.005175967690961695",
            "extra": "mean: 89.2980833333336 msec\nrounds: 12"
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
        "date": 1636165044964,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 81.24734751306643,
            "unit": "iter/sec",
            "range": "stddev: 0.0002963109942646846",
            "extra": "mean: 12.308094117647068 msec\nrounds: 85"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 76.45484230299718,
            "unit": "iter/sec",
            "range": "stddev: 0.000388397890846741",
            "extra": "mean: 13.07961627906985 msec\nrounds: 86"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.278723239467253,
            "unit": "iter/sec",
            "range": "stddev: 0.001935652619687286",
            "extra": "mean: 81.44169230769208 msec\nrounds: 13"
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
        "date": 1636383860840,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.79460253199525,
            "unit": "iter/sec",
            "range": "stddev: 0.0007425187620367748",
            "extra": "mean: 13.551126582278538 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.89489016578861,
            "unit": "iter/sec",
            "range": "stddev: 0.0010041627410404665",
            "extra": "mean: 14.307197530864268 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.871544547512688,
            "unit": "iter/sec",
            "range": "stddev: 0.0020760420877237533",
            "extra": "mean: 91.98325000000034 msec\nrounds: 12"
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
        "date": 1636384777808,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.54363080872197,
            "unit": "iter/sec",
            "range": "stddev: 0.0008113842278075463",
            "extra": "mean: 13.784807692307693 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.8653417564556,
            "unit": "iter/sec",
            "range": "stddev: 0.0015185615178983987",
            "extra": "mean: 14.735061728395056 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.235039842260019,
            "unit": "iter/sec",
            "range": "stddev: 0.0016133739985170763",
            "extra": "mean: 89.00725000000017 msec\nrounds: 12"
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
        "date": 1636469284621,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.97487699523155,
            "unit": "iter/sec",
            "range": "stddev: 0.0007837753591982364",
            "extra": "mean: 13.70334615384612 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.32590340125283,
            "unit": "iter/sec",
            "range": "stddev: 0.000757414039949637",
            "extra": "mean: 14.020151898734103 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.78930025094117,
            "unit": "iter/sec",
            "range": "stddev: 0.005311252590804787",
            "extra": "mean: 92.68441666666642 msec\nrounds: 12"
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
        "date": 1636642363147,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.11473172851483,
            "unit": "iter/sec",
            "range": "stddev: 0.0008124004771057428",
            "extra": "mean: 13.86679220779228 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.09000636943166,
            "unit": "iter/sec",
            "range": "stddev: 0.0009170327811555028",
            "extra": "mean: 14.68644303797481 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.209055422240448,
            "unit": "iter/sec",
            "range": "stddev: 0.0033849320782317876",
            "extra": "mean: 89.21358333333333 msec\nrounds: 12"
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
        "date": 1636643309393,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 75.97744989287153,
            "unit": "iter/sec",
            "range": "stddev: 0.00035570754592489706",
            "extra": "mean: 13.161800000000046 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 73.88640721558637,
            "unit": "iter/sec",
            "range": "stddev: 0.0003273307244572101",
            "extra": "mean: 13.534289156626492 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.304097170019288,
            "unit": "iter/sec",
            "range": "stddev: 0.002312310434490782",
            "extra": "mean: 88.46349999999988 msec\nrounds: 12"
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
        "date": 1636745330322,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 67.72477719885009,
            "unit": "iter/sec",
            "range": "stddev: 0.001162253554711152",
            "extra": "mean: 14.765644736842031 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 65.53735166922844,
            "unit": "iter/sec",
            "range": "stddev: 0.0011945565141791717",
            "extra": "mean: 15.258474358974242 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.927339566166394,
            "unit": "iter/sec",
            "range": "stddev: 0.0022148973486715343",
            "extra": "mean: 91.51358333333344 msec\nrounds: 12"
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
        "date": 1636745747316,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 74.62561262963875,
            "unit": "iter/sec",
            "range": "stddev: 0.0005624650081943712",
            "extra": "mean: 13.400224999999988 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.51035764433097,
            "unit": "iter/sec",
            "range": "stddev: 0.0008913242488156092",
            "extra": "mean: 13.983988235294131 msec\nrounds: 85"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.654875817298164,
            "unit": "iter/sec",
            "range": "stddev: 0.0011776136115807798",
            "extra": "mean: 85.80100000000002 msec\nrounds: 12"
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
        "date": 1637161511677,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 76.60630339085667,
            "unit": "iter/sec",
            "range": "stddev: 0.00033290600612334326",
            "extra": "mean: 13.053756097560958 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.97057203276891,
            "unit": "iter/sec",
            "range": "stddev: 0.0006407975877426988",
            "extra": "mean: 13.89456790123455 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.811979673478193,
            "unit": "iter/sec",
            "range": "stddev: 0.0017528178352689612",
            "extra": "mean: 92.49000000000018 msec\nrounds: 12"
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
        "date": 1637161939363,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.55255097005534,
            "unit": "iter/sec",
            "range": "stddev: 0.0004839667274193489",
            "extra": "mean: 13.595721518987416 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.49773634635966,
            "unit": "iter/sec",
            "range": "stddev: 0.0005161596421985452",
            "extra": "mean: 13.986456790123476 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.87320603277599,
            "unit": "iter/sec",
            "range": "stddev: 0.0007508910010479281",
            "extra": "mean: 84.22324999999998 msec\nrounds: 12"
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
        "date": 1637162451300,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 75.64017590122842,
            "unit": "iter/sec",
            "range": "stddev: 0.00038360970387244544",
            "extra": "mean: 13.220487500000111 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 74.10429859823928,
            "unit": "iter/sec",
            "range": "stddev: 0.0004260203669854618",
            "extra": "mean: 13.49449382716052 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.552464629463636,
            "unit": "iter/sec",
            "range": "stddev: 0.0010962109391339818",
            "extra": "mean: 86.561615384615 msec\nrounds: 13"
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
        "date": 1637175152176,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 74.76761291311477,
            "unit": "iter/sec",
            "range": "stddev: 0.0003080223144554739",
            "extra": "mean: 13.37477499999994 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.19508419917426,
            "unit": "iter/sec",
            "range": "stddev: 0.00031090980193344185",
            "extra": "mean: 14.045913580246856 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.231128194904954,
            "unit": "iter/sec",
            "range": "stddev: 0.0017771379505973344",
            "extra": "mean: 89.03825000000036 msec\nrounds: 12"
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
        "date": 1637529824226,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 74.17227496695058,
            "unit": "iter/sec",
            "range": "stddev: 0.000593567319904513",
            "extra": "mean: 13.482126582278575 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.67087865103456,
            "unit": "iter/sec",
            "range": "stddev: 0.0006991182439240173",
            "extra": "mean: 14.150099999999943 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.765431124117324,
            "unit": "iter/sec",
            "range": "stddev: 0.0044545624712881956",
            "extra": "mean: 92.88991666666686 msec\nrounds: 12"
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
        "date": 1637592425606,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 70.82237655981706,
            "unit": "iter/sec",
            "range": "stddev: 0.0009061353506802976",
            "extra": "mean: 14.119831168831126 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.89962767388201,
            "unit": "iter/sec",
            "range": "stddev: 0.0008936447402512471",
            "extra": "mean: 14.306227848101255 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.324317117940684,
            "unit": "iter/sec",
            "range": "stddev: 0.005614111904186103",
            "extra": "mean: 88.30554545454561 msec\nrounds: 11"
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
        "date": 1637593757661,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 70.17213409156199,
            "unit": "iter/sec",
            "range": "stddev: 0.0008151409430384339",
            "extra": "mean: 14.250671052631523 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.24511194385653,
            "unit": "iter/sec",
            "range": "stddev: 0.0006915010088121171",
            "extra": "mean: 14.653064102564208 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.533171590631799,
            "unit": "iter/sec",
            "range": "stddev: 0.004843951389165857",
            "extra": "mean: 94.93816666666666 msec\nrounds: 12"
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
        "date": 1637678512695,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 70.34619345924696,
            "unit": "iter/sec",
            "range": "stddev: 0.0009625069598115898",
            "extra": "mean: 14.215410256410266 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.18616666947543,
            "unit": "iter/sec",
            "range": "stddev: 0.0008586601490589254",
            "extra": "mean: 14.453756410256428 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.607809823185454,
            "unit": "iter/sec",
            "range": "stddev: 0.0035657708801461762",
            "extra": "mean: 94.270166666667 msec\nrounds: 12"
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
        "date": 1637938799630,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 75.3404810199945,
            "unit": "iter/sec",
            "range": "stddev: 0.0004081172408974046",
            "extra": "mean: 13.27307692307687 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.96147907510411,
            "unit": "iter/sec",
            "range": "stddev: 0.0004793087782474963",
            "extra": "mean: 13.705862499999943 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.935529776851533,
            "unit": "iter/sec",
            "range": "stddev: 0.001371149068931293",
            "extra": "mean: 83.78346153846131 msec\nrounds: 13"
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
        "date": 1637939963688,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.51485848389727,
            "unit": "iter/sec",
            "range": "stddev: 0.0005449767374444791",
            "extra": "mean: 13.602692307692337 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.42869628749497,
            "unit": "iter/sec",
            "range": "stddev: 0.0011797897559415401",
            "extra": "mean: 14.83048101265834 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.199817816296855,
            "unit": "iter/sec",
            "range": "stddev: 0.0016999182244146174",
            "extra": "mean: 89.28716666666665 msec\nrounds: 12"
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
        "date": 1638203543643,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 69.8992180365402,
            "unit": "iter/sec",
            "range": "stddev: 0.0008610755401140246",
            "extra": "mean: 14.306311688311656 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.14795891638316,
            "unit": "iter/sec",
            "range": "stddev: 0.0003670744914127383",
            "extra": "mean: 14.255582278480928 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.135475118244852,
            "unit": "iter/sec",
            "range": "stddev: 0.0011226746843899088",
            "extra": "mean: 89.80308333333313 msec\nrounds: 12"
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
        "date": 1638204370790,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 75.27482280213778,
            "unit": "iter/sec",
            "range": "stddev: 0.0006869153179339595",
            "extra": "mean: 13.28465432098766 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.97736750678315,
            "unit": "iter/sec",
            "range": "stddev: 0.00038521373932187594",
            "extra": "mean: 13.893256097560945 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.478552324980761,
            "unit": "iter/sec",
            "range": "stddev: 0.0028453361520534436",
            "extra": "mean: 87.1190000000001 msec\nrounds: 12"
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
        "date": 1638205988012,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 75.35319455158715,
            "unit": "iter/sec",
            "range": "stddev: 0.00037209796735555254",
            "extra": "mean: 13.27083750000002 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.73264446378958,
            "unit": "iter/sec",
            "range": "stddev: 0.0005296083024389835",
            "extra": "mean: 13.940654320987663 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.60629138368271,
            "unit": "iter/sec",
            "range": "stddev: 0.002106473435230757",
            "extra": "mean: 86.1601666666667 msec\nrounds: 12"
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
        "date": 1638207310713,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.568530138559,
            "unit": "iter/sec",
            "range": "stddev: 0.000626116303435011",
            "extra": "mean: 13.78007792207788 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 66.6961593143298,
            "unit": "iter/sec",
            "range": "stddev: 0.0012573849356258364",
            "extra": "mean: 14.993367088607574 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.425198274795045,
            "unit": "iter/sec",
            "range": "stddev: 0.0025434810017101153",
            "extra": "mean: 87.52583333333345 msec\nrounds: 12"
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
        "date": 1638208953114,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.86633226079687,
            "unit": "iter/sec",
            "range": "stddev: 0.0007943427687557718",
            "extra": "mean: 13.914721518987282 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.16060482039339,
            "unit": "iter/sec",
            "range": "stddev: 0.0004048456333547363",
            "extra": "mean: 14.253012820512815 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.023024091134506,
            "unit": "iter/sec",
            "range": "stddev: 0.0016007739108433422",
            "extra": "mean: 83.17375000000011 msec\nrounds: 12"
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
        "date": 1638282410352,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 65.33128405288451,
            "unit": "iter/sec",
            "range": "stddev: 0.0014560043112157835",
            "extra": "mean: 15.306602564102638 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 57.18083625116552,
            "unit": "iter/sec",
            "range": "stddev: 0.0019583944890418045",
            "extra": "mean: 17.488376623376453 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.664732795119852,
            "unit": "iter/sec",
            "range": "stddev: 0.004589329515299921",
            "extra": "mean: 93.76699999999971 msec\nrounds: 11"
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
        "date": 1638370614526,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.92224028060474,
            "unit": "iter/sec",
            "range": "stddev: 0.000764965594390603",
            "extra": "mean: 13.713237500000009 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.55233508923946,
            "unit": "iter/sec",
            "range": "stddev: 0.0009882702564793953",
            "extra": "mean: 14.37766250000011 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.782043078774734,
            "unit": "iter/sec",
            "range": "stddev: 0.0010604887600802679",
            "extra": "mean: 84.87492307692311 msec\nrounds: 13"
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
        "date": 1638372567942,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 75.90860224746405,
            "unit": "iter/sec",
            "range": "stddev: 0.0003591249471839508",
            "extra": "mean: 13.173737499999982 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 73.68305189742932,
            "unit": "iter/sec",
            "range": "stddev: 0.0002324752840972809",
            "extra": "mean: 13.571641975308685 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.679775592578304,
            "unit": "iter/sec",
            "range": "stddev: 0.0022324973158219037",
            "extra": "mean: 85.61808333333316 msec\nrounds: 12"
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
        "date": 1638455250737,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 77.29381168776673,
            "unit": "iter/sec",
            "range": "stddev: 0.0006591935659062621",
            "extra": "mean: 12.937646341463449 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 73.50991464973838,
            "unit": "iter/sec",
            "range": "stddev: 0.0006742300922517071",
            "extra": "mean: 13.603607142857143 msec\nrounds: 84"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.946256548616125,
            "unit": "iter/sec",
            "range": "stddev: 0.0013101929981141208",
            "extra": "mean: 83.70823076923136 msec\nrounds: 13"
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
        "date": 1638805005646,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.07160689304605,
            "unit": "iter/sec",
            "range": "stddev: 0.001088081368849975",
            "extra": "mean: 14.070316455696236 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.42842430127273,
            "unit": "iter/sec",
            "range": "stddev: 0.0011220117815087965",
            "extra": "mean: 14.613810126582157 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.013476470416435,
            "unit": "iter/sec",
            "range": "stddev: 0.011745002824864069",
            "extra": "mean: 99.86541666666666 msec\nrounds: 12"
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
        "date": 1638806210499,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 76.4674737372946,
            "unit": "iter/sec",
            "range": "stddev: 0.00023227701175846922",
            "extra": "mean: 13.077455696202522 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 73.75161730012647,
            "unit": "iter/sec",
            "range": "stddev: 0.00036028495580960203",
            "extra": "mean: 13.559024691357992 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.548744362769185,
            "unit": "iter/sec",
            "range": "stddev: 0.0017004730090610896",
            "extra": "mean: 86.5894999999998 msec\nrounds: 12"
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
        "date": 1638807786789,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 75.15246207816047,
            "unit": "iter/sec",
            "range": "stddev: 0.0003558044840416585",
            "extra": "mean: 13.306283950617276 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.9763506799536,
            "unit": "iter/sec",
            "range": "stddev: 0.0006076625354272719",
            "extra": "mean: 14.089199999999968 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.141792305849608,
            "unit": "iter/sec",
            "range": "stddev: 0.0039209388679320315",
            "extra": "mean: 89.75216666666681 msec\nrounds: 12"
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
        "date": 1638973767752,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 80.67653033293509,
            "unit": "iter/sec",
            "range": "stddev: 0.0006960851831391171",
            "extra": "mean: 12.395178571428518 msec\nrounds: 84"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.15257120279698,
            "unit": "iter/sec",
            "range": "stddev: 0.0006646667088801431",
            "extra": "mean: 14.054305882352857 msec\nrounds: 85"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.738398060816607,
            "unit": "iter/sec",
            "range": "stddev: 0.002170149366455314",
            "extra": "mean: 85.19050000000024 msec\nrounds: 12"
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
        "date": 1638974897981,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.90403272917692,
            "unit": "iter/sec",
            "range": "stddev: 0.000646314238594737",
            "extra": "mean: 13.71666233766229 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.24558736126298,
            "unit": "iter/sec",
            "range": "stddev: 0.0008600294932783309",
            "extra": "mean: 14.65296202531641 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.669587762694112,
            "unit": "iter/sec",
            "range": "stddev: 0.003706938269425994",
            "extra": "mean: 93.72433333333359 msec\nrounds: 12"
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
        "date": 1639147184040,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 74.8168444781284,
            "unit": "iter/sec",
            "range": "stddev: 0.00041140011175023816",
            "extra": "mean: 13.365974025973994 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.13086368175144,
            "unit": "iter/sec",
            "range": "stddev: 0.0005260133935845386",
            "extra": "mean: 14.058594936708875 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.189218069468199,
            "unit": "iter/sec",
            "range": "stddev: 0.0025782964469163554",
            "extra": "mean: 89.37175000000049 msec\nrounds: 12"
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
        "date": 1639255106863,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 80.78786663577942,
            "unit": "iter/sec",
            "range": "stddev: 0.00023854961208483647",
            "extra": "mean: 12.378096385542117 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 73.28097910285051,
            "unit": "iter/sec",
            "range": "stddev: 0.0004301493933045164",
            "extra": "mean: 13.64610588235306 msec\nrounds: 85"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.275922695743551,
            "unit": "iter/sec",
            "range": "stddev: 0.0036803100552218024",
            "extra": "mean: 88.68453846153817 msec\nrounds: 13"
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
        "date": 1639409726823,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 75.19906602759978,
            "unit": "iter/sec",
            "range": "stddev: 0.0003593653845163203",
            "extra": "mean: 13.298037500000026 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.74066571520635,
            "unit": "iter/sec",
            "range": "stddev: 0.00044668605494016663",
            "extra": "mean: 13.747468354430405 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.543778336368417,
            "unit": "iter/sec",
            "range": "stddev: 0.002504443110844126",
            "extra": "mean: 86.62674999999976 msec\nrounds: 12"
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
        "date": 1639412065644,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.67591733974805,
            "unit": "iter/sec",
            "range": "stddev: 0.0003896531594276264",
            "extra": "mean: 13.951687500000054 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.16645468795349,
            "unit": "iter/sec",
            "range": "stddev: 0.0004859923731362666",
            "extra": "mean: 14.051564102564074 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.315844067668758,
            "unit": "iter/sec",
            "range": "stddev: 0.0026442210172140527",
            "extra": "mean: 88.37166666666658 msec\nrounds: 12"
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
        "date": 1639413076190,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 66.18313382229678,
            "unit": "iter/sec",
            "range": "stddev: 0.0021257154605247644",
            "extra": "mean: 15.1095897435897 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.30229106378835,
            "unit": "iter/sec",
            "range": "stddev: 0.0006938061450652149",
            "extra": "mean: 14.22428749999991 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.964912280701752,
            "unit": "iter/sec",
            "range": "stddev: 0.0025781988780051142",
            "extra": "mean: 91.20000000000002 msec\nrounds: 12"
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
        "date": 1639413606206,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 75.9656289184804,
            "unit": "iter/sec",
            "range": "stddev: 0.00047920484588876176",
            "extra": "mean: 13.163848101265792 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.29207443914866,
            "unit": "iter/sec",
            "range": "stddev: 0.00043158319012670196",
            "extra": "mean: 13.832775000000074 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.554938436250936,
            "unit": "iter/sec",
            "range": "stddev: 0.0016810562944621905",
            "extra": "mean: 86.54308333333323 msec\nrounds: 12"
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
        "date": 1639419056780,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.26117254947995,
            "unit": "iter/sec",
            "range": "stddev: 0.0005240976393633909",
            "extra": "mean: 13.649795180722895 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.8114214768071,
            "unit": "iter/sec",
            "range": "stddev: 0.0008017810901637918",
            "extra": "mean: 13.925361445782961 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.60726722072021,
            "unit": "iter/sec",
            "range": "stddev: 0.0017024610843099706",
            "extra": "mean: 86.15292307692316 msec\nrounds: 13"
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
        "date": 1639578981623,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 81.41501354683986,
            "unit": "iter/sec",
            "range": "stddev: 0.0003120173182387204",
            "extra": "mean: 12.282746835443048 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 75.50363558784818,
            "unit": "iter/sec",
            "range": "stddev: 0.0005410653821331393",
            "extra": "mean: 13.244395348837262 msec\nrounds: 86"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.709960492394837,
            "unit": "iter/sec",
            "range": "stddev: 0.002711694812549971",
            "extra": "mean: 85.39738461538458 msec\nrounds: 13"
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
        "date": 1639669231080,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 76.51577755333147,
            "unit": "iter/sec",
            "range": "stddev: 0.000645486989152047",
            "extra": "mean: 13.069200000000002 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 74.19109091665847,
            "unit": "iter/sec",
            "range": "stddev: 0.00039202668993945606",
            "extra": "mean: 13.4787073170731 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.701170117011714,
            "unit": "iter/sec",
            "range": "stddev: 0.0011690018973025986",
            "extra": "mean: 85.46153846153838 msec\nrounds: 13"
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
        "date": 1639669772837,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.88710433373812,
            "unit": "iter/sec",
            "range": "stddev: 0.0009376634638838713",
            "extra": "mean: 13.719848101265809 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.68307267508953,
            "unit": "iter/sec",
            "range": "stddev: 0.0011988980446062398",
            "extra": "mean: 14.350687500000014 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.289708019926332,
            "unit": "iter/sec",
            "range": "stddev: 0.0011595356535349564",
            "extra": "mean: 88.57625000000002 msec\nrounds: 12"
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
        "date": 1639670340025,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 76.4050136597256,
            "unit": "iter/sec",
            "range": "stddev: 0.00032890784937658515",
            "extra": "mean: 13.088146341463418 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 73.78592902333546,
            "unit": "iter/sec",
            "range": "stddev: 0.0008513238387241328",
            "extra": "mean: 13.552719512195084 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.060611064775678,
            "unit": "iter/sec",
            "range": "stddev: 0.002784425961647669",
            "extra": "mean: 82.91453846153853 msec\nrounds: 13"
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
        "date": 1639752336605,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 75.57532946426882,
            "unit": "iter/sec",
            "range": "stddev: 0.0002440978234986546",
            "extra": "mean: 13.23183116883121 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.74048594111294,
            "unit": "iter/sec",
            "range": "stddev: 0.0007994244142056348",
            "extra": "mean: 14.33887341772144 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.651763737186656,
            "unit": "iter/sec",
            "range": "stddev: 0.0010130388539921905",
            "extra": "mean: 85.823916666667 msec\nrounds: 12"
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
        "date": 1640011983169,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 76.62331976005962,
            "unit": "iter/sec",
            "range": "stddev: 0.0003937749997527669",
            "extra": "mean: 13.050857142857131 msec\nrounds: 84"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 73.65216537366246,
            "unit": "iter/sec",
            "range": "stddev: 0.0005396393559946028",
            "extra": "mean: 13.577333333333245 msec\nrounds: 84"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.103492881273128,
            "unit": "iter/sec",
            "range": "stddev: 0.005186092400484708",
            "extra": "mean: 90.06174999999998 msec\nrounds: 12"
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
        "date": 1640013129951,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 75.95954505790489,
            "unit": "iter/sec",
            "range": "stddev: 0.0007990836821667267",
            "extra": "mean: 13.164902439024454 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 73.26773190800874,
            "unit": "iter/sec",
            "range": "stddev: 0.0004535576795226688",
            "extra": "mean: 13.64857317073155 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.444102710821854,
            "unit": "iter/sec",
            "range": "stddev: 0.002931816753699541",
            "extra": "mean: 87.38124999999981 msec\nrounds: 12"
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
        "date": 1640724579925,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 75.75836490721025,
            "unit": "iter/sec",
            "range": "stddev: 0.00026609671525042666",
            "extra": "mean: 13.199862499999993 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.56915369475784,
            "unit": "iter/sec",
            "range": "stddev: 0.0008558326170195102",
            "extra": "mean: 13.972499999999943 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.266928560161684,
            "unit": "iter/sec",
            "range": "stddev: 0.0015318381313327715",
            "extra": "mean: 88.755333333333 msec\nrounds: 12"
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
        "date": 1640790955764,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 76.49068212897839,
            "unit": "iter/sec",
            "range": "stddev: 0.00027544129548209546",
            "extra": "mean: 13.073487804878019 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 66.22422180252275,
            "unit": "iter/sec",
            "range": "stddev: 0.0017134533630826549",
            "extra": "mean: 15.100215189873412 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.5170332122445,
            "unit": "iter/sec",
            "range": "stddev: 0.0010245995633182267",
            "extra": "mean: 86.82791666666685 msec\nrounds: 12"
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
        "date": 1640793407643,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.74490122031558,
            "unit": "iter/sec",
            "range": "stddev: 0.0007500152917101049",
            "extra": "mean: 13.93827272727272 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.50127309029722,
            "unit": "iter/sec",
            "range": "stddev: 0.0003423595256284903",
            "extra": "mean: 14.184141025640935 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.666372748839777,
            "unit": "iter/sec",
            "range": "stddev: 0.0028380822737235985",
            "extra": "mean: 93.75258333333362 msec\nrounds: 12"
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
        "date": 1640877584417,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.18470284276513,
            "unit": "iter/sec",
            "range": "stddev: 0.0008594710546890061",
            "extra": "mean: 13.853350649350595 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.76845430581591,
            "unit": "iter/sec",
            "range": "stddev: 0.001408124555062672",
            "extra": "mean: 14.756128205128322 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.050446207809147,
            "unit": "iter/sec",
            "range": "stddev: 0.0032782901157973124",
            "extra": "mean: 90.49408333333349 msec\nrounds: 12"
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
        "date": 1640878765863,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.91684544696322,
            "unit": "iter/sec",
            "range": "stddev: 0.0007869446729717256",
            "extra": "mean: 13.904948051948047 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.76786890093358,
            "unit": "iter/sec",
            "range": "stddev: 0.0008715767288676878",
            "extra": "mean: 14.541675000000243 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.452971712114248,
            "unit": "iter/sec",
            "range": "stddev: 0.002404144582640888",
            "extra": "mean: 87.31358333333361 msec\nrounds: 12"
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
          "id": "deca3932e707eacf37b93abea49a638af757122d",
          "message": "Merge pull request #385 from TeoZosa/dependabot/pip/pygments-2.11.1",
          "timestamp": "2022-01-03T14:17:10Z",
          "tree_id": "3f26ff49051fee3ea98e5b22fb7017b651e4e202"
        },
        "date": 1641222100509,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 74.22088685713004,
            "unit": "iter/sec",
            "range": "stddev: 0.0004628117177763503",
            "extra": "mean: 13.473296296296343 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.38975688257793,
            "unit": "iter/sec",
            "range": "stddev: 0.0008028506725247549",
            "extra": "mean: 14.206612500000105 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.408644329808778,
            "unit": "iter/sec",
            "range": "stddev: 0.0013949733026662606",
            "extra": "mean: 87.6528333333327 msec\nrounds: 12"
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
          "id": "8bf483f82b536caff4b5dafef92d0006067671ec",
          "message": "Merge pull request #386 from TeoZosa/dependabot/pip/rich-10.16.2",
          "timestamp": "2022-01-03T14:41:31Z",
          "tree_id": "422c7cdfc55674aea165b8cc35a0946359e2e4f4"
        },
        "date": 1641224069608,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.06894148810957,
            "unit": "iter/sec",
            "range": "stddev: 0.0010374445332660951",
            "extra": "mean: 14.070844155844199 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.86196528251496,
            "unit": "iter/sec",
            "range": "stddev: 0.0010117527720058513",
            "extra": "mean: 14.73579487179479 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.910578715279357,
            "unit": "iter/sec",
            "range": "stddev: 0.0022370893359387094",
            "extra": "mean: 91.65416666666667 msec\nrounds: 12"
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
          "id": "49e12e88993ed6df75664562c09fcf5e31c0804a",
          "message": ":art: Fix test actual to expected comparison order\n\nPer the standard comparison order convention of `actual == expected`.",
          "timestamp": "2022-01-06T04:59:57Z",
          "tree_id": "ba16ee9877581f21ddbb345ce94b87e3a10cca96"
        },
        "date": 1641446394979,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.40951099518568,
            "unit": "iter/sec",
            "range": "stddev: 0.0006721706007341966",
            "extra": "mean: 14.003736842105225 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.254605634639,
            "unit": "iter/sec",
            "range": "stddev: 0.0006340572357948324",
            "extra": "mean: 14.651025974026037 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.208573811727707,
            "unit": "iter/sec",
            "range": "stddev: 0.0022540379708966105",
            "extra": "mean: 89.21741666666675 msec\nrounds: 12"
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
          "id": "3152ed1406363d1ba22674da21cda87298ce7788",
          "message": "Merge pull request #388 from TeoZosa/dependabot/pip/pygments-2.11.2",
          "timestamp": "2022-01-06T14:49:17Z",
          "tree_id": "efe3b44513643664ca932877bb5cf6eb80db9b40"
        },
        "date": 1641482016722,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.60186359918617,
            "unit": "iter/sec",
            "range": "stddev: 0.0007519434481454519",
            "extra": "mean: 13.58661250000003 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 65.11523013469326,
            "unit": "iter/sec",
            "range": "stddev: 0.0025435028959354586",
            "extra": "mean: 15.357390243902433 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.41003284187783,
            "unit": "iter/sec",
            "range": "stddev: 0.0018067281243043113",
            "extra": "mean: 87.64216666666691 msec\nrounds: 12"
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
          "id": "ba4c9a5e4a597c86aeb40fa9c52adeffb8ba9ff7",
          "message": ":rotating_light: Explicitly check for `None`\n\nSee first bullet of https://google.github.io/styleguide/pyguide.html#2144-decision",
          "timestamp": "2022-01-06T18:43:06Z",
          "tree_id": "a67b452ba8718aae971ed68d3e4c91ab4ad64ea0"
        },
        "date": 1641494939078,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.13219056215054,
            "unit": "iter/sec",
            "range": "stddev: 0.0005159746694111127",
            "extra": "mean: 13.863435897435831 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.34975151173448,
            "unit": "iter/sec",
            "range": "stddev: 0.00044641662775532536",
            "extra": "mean: 14.419662337662345 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.96323934487333,
            "unit": "iter/sec",
            "range": "stddev: 0.003363956422221711",
            "extra": "mean: 91.21391666666693 msec\nrounds: 12"
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
          "id": "350e4853afb9bfe41d1ffdd51074eca5616d3508",
          "message": "Merge pull request #387 from TeoZosa/feat/add-line-numbers-and-function-names-to-logs\n\n✨ 💥 Add line numbers and function names to logs",
          "timestamp": "2022-01-06T19:39:25Z",
          "tree_id": "35a9f905fd02a774ab3824024228975f2262906f"
        },
        "date": 1641498127924,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 67.56883575142177,
            "unit": "iter/sec",
            "range": "stddev: 0.0007195228900864185",
            "extra": "mean: 14.799722222222218 msec\nrounds: 72"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 65.26609792775645,
            "unit": "iter/sec",
            "range": "stddev: 0.0004309197708791841",
            "extra": "mean: 15.321890410958963 msec\nrounds: 73"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.755547907165907,
            "unit": "iter/sec",
            "range": "stddev: 0.0030763928907375625",
            "extra": "mean: 92.97527272727297 msec\nrounds: 11"
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
          "id": "d52b3618b95a3b1bd92233e11c9ef0ba022db6ab",
          "message": "Merge pull request #389 from TeoZosa/refactor/leverage-structlog-stack-introspection-for-logger-namespacing-and-remove-now-obsolete-typeguard-compatiblity-in-test-suite\n\n♻️ ✅ Simplify logger name inference and test suite",
          "timestamp": "2022-01-06T22:03:19Z",
          "tree_id": "938ae6323e0ded6254f9c1cb603dbc5983c884e2"
        },
        "date": 1641506923657,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 63.44786417510194,
            "unit": "iter/sec",
            "range": "stddev: 0.0015428141631616725",
            "extra": "mean: 15.760971830985882 msec\nrounds: 71"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 64.49614431148524,
            "unit": "iter/sec",
            "range": "stddev: 0.0007600723954187853",
            "extra": "mean: 15.50480281690147 msec\nrounds: 71"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.736494222302008,
            "unit": "iter/sec",
            "range": "stddev: 0.003871972574565209",
            "extra": "mean: 93.140272727273 msec\nrounds: 11"
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
          "id": "5d4b6f1b73130c34941f4e3213a7dc8965039296",
          "message": "Merge pull request #392 from TeoZosa/refactor/clean-and-reorganize\n\n♻️  📝  Clean up source code and update features documentation",
          "timestamp": "2022-01-06T23:34:57Z",
          "tree_id": "dbd83ba095d35fb9bc078399665b9c03802e7426"
        },
        "date": 1641512248608,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 69.23217721919929,
            "unit": "iter/sec",
            "range": "stddev: 0.0006065575147051772",
            "extra": "mean: 14.444150684931554 msec\nrounds: 73"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 65.35484960215237,
            "unit": "iter/sec",
            "range": "stddev: 0.0007097407531061982",
            "extra": "mean: 15.30108333333333 msec\nrounds: 72"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.32304068934669,
            "unit": "iter/sec",
            "range": "stddev: 0.002379568314555743",
            "extra": "mean: 88.31550000000021 msec\nrounds: 12"
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
          "id": "99728b92f1dbd308a3fbbeaf428cc72fa9935911",
          "message": "Merge pull request #393 from TeoZosa/feat/remove-automatic-sentry-initialization",
          "timestamp": "2022-01-07T01:41:16Z",
          "tree_id": "be055794c6fd25fcd54a6a8643510de266c6ea4d"
        },
        "date": 1641519973749,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 67.76292013010496,
            "unit": "iter/sec",
            "range": "stddev: 0.0003995345178904103",
            "extra": "mean: 14.757333333333301 msec\nrounds: 72"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 63.77805237772546,
            "unit": "iter/sec",
            "range": "stddev: 0.0007652426189419871",
            "extra": "mean: 15.679375000000013 msec\nrounds: 72"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.43510577472839,
            "unit": "iter/sec",
            "range": "stddev: 0.003506054929214276",
            "extra": "mean: 87.45000000000019 msec\nrounds: 13"
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
          "id": "0cfeab5d73dcc521fee687b7a4407e01fedcc8ab",
          "message": ":bookmark: Bump version number to `0.16.0`",
          "timestamp": "2022-01-07T02:11:32Z",
          "tree_id": "8e6b8cde9d7c2ca7deb812c178deb9824e924979"
        },
        "date": 1641522294519,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 62.20714453435758,
            "unit": "iter/sec",
            "range": "stddev: 0.0013311560365191536",
            "extra": "mean: 16.07532394366198 msec\nrounds: 71"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 57.83600478654075,
            "unit": "iter/sec",
            "range": "stddev: 0.00181576615043856",
            "extra": "mean: 17.29026760563368 msec\nrounds: 71"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.40275298454988,
            "unit": "iter/sec",
            "range": "stddev: 0.013742981911587829",
            "extra": "mean: 96.12839999999956 msec\nrounds: 10"
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
          "id": "0766d7ba31d69b61ed71365c5de6f160fe7d8c6f",
          "message": "Merge pull request #394 from TeoZosa/template-update/20220106\n\n🍪 Fetch Upstream Project Template Updates (2022-01-06)",
          "timestamp": "2022-01-07T02:54:38Z",
          "tree_id": "1c9662cc01e7ce4b31ae7bce52abc23357828489"
        },
        "date": 1641524619832,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 66.01616295723076,
            "unit": "iter/sec",
            "range": "stddev: 0.0009421226803115453",
            "extra": "mean: 15.147805555555541 msec\nrounds: 72"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 63.26096931842985,
            "unit": "iter/sec",
            "range": "stddev: 0.0008844301447175983",
            "extra": "mean: 15.807535211267613 msec\nrounds: 71"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.824424230834458,
            "unit": "iter/sec",
            "range": "stddev: 0.006270217834890138",
            "extra": "mean: 92.38366666666664 msec\nrounds: 12"
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
          "id": "9b4dea542d679e78e40125800267ed30935234cc",
          "message": "Merge pull request #395 from TeoZosa/dependabot/pip/gitpython-3.1.25",
          "timestamp": "2022-01-07T14:30:38Z",
          "tree_id": "038a86112187c5d257a91937887cd45a8a3c505d"
        },
        "date": 1641568896308,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 67.03754653599525,
            "unit": "iter/sec",
            "range": "stddev: 0.0005969661374435236",
            "extra": "mean: 14.917013698630189 msec\nrounds: 73"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 64.4349778470733,
            "unit": "iter/sec",
            "range": "stddev: 0.0006121806189856033",
            "extra": "mean: 15.519521126760518 msec\nrounds: 71"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.969021654676883,
            "unit": "iter/sec",
            "range": "stddev: 0.004187064774307173",
            "extra": "mean: 91.16583333333361 msec\nrounds: 12"
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
          "id": "1bede4717bb033962e0794a784e34c85d81613f1",
          "message": "Merge pull request #396 from TeoZosa/dependabot/pip/types-emoji-1.2.7",
          "timestamp": "2022-01-07T15:01:50Z",
          "tree_id": "9b87e8253c7e8a722f46a9ab04bc9d105a68cc25"
        },
        "date": 1641570100584,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 65.98637852614742,
            "unit": "iter/sec",
            "range": "stddev: 0.0006155167273235285",
            "extra": "mean: 15.154642857142786 msec\nrounds: 70"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 58.78949866190034,
            "unit": "iter/sec",
            "range": "stddev: 0.0012169073581538082",
            "extra": "mean: 17.009840579710016 msec\nrounds: 69"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.943885787051554,
            "unit": "iter/sec",
            "range": "stddev: 0.0021037667743895325",
            "extra": "mean: 83.72484615384607 msec\nrounds: 13"
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
          "id": "cd679fec8ac6339102e7a5e03ebedbfe3b4df298",
          "message": ":recycle: Explicitly specify UTC format\n\nSame as the default value, but now it is explicit to readers.",
          "timestamp": "2022-01-08T22:06:22Z",
          "tree_id": "80a163aca105b9357b1d0a1ac28ed2a5867b9cac"
        },
        "date": 1641680063383,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 64.04297995543665,
            "unit": "iter/sec",
            "range": "stddev: 0.0009315069721912456",
            "extra": "mean: 15.614513888888915 msec\nrounds: 72"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 64.12460122513674,
            "unit": "iter/sec",
            "range": "stddev: 0.0005229524607579416",
            "extra": "mean: 15.594638888888742 msec\nrounds: 72"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.79301980229454,
            "unit": "iter/sec",
            "range": "stddev: 0.0027643006487944057",
            "extra": "mean: 84.79592307692322 msec\nrounds: 13"
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
          "id": "e303fa29243beb9caf7feb64f854497b48036c41",
          "message": "Merge pull request #397 from TeoZosa/warn-on-cloud-logging-field-overwrites\n\n🔊  Warn on cloud logging mode field overwrites",
          "timestamp": "2022-01-09T03:54:43Z",
          "tree_id": "c53a2d4fae8755c4643bc36f52945f5cc3604a8e"
        },
        "date": 1641700854485,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 62.6461744069494,
            "unit": "iter/sec",
            "range": "stddev: 0.0010556247465997911",
            "extra": "mean: 15.962666666666705 msec\nrounds: 72"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 60.692869801655924,
            "unit": "iter/sec",
            "range": "stddev: 0.0009675573667596277",
            "extra": "mean: 16.47639999999994 msec\nrounds: 70"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.396487602520923,
            "unit": "iter/sec",
            "range": "stddev: 0.0019104562203035398",
            "extra": "mean: 87.74633333333318 msec\nrounds: 12"
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
          "id": "5693da0e3056522b719d7fb731499ddee8f03eea",
          "message": "Merge pull request #398 from TeoZosa/feat/add-dynamic-log-level-configuration-from-env\n\n✨  Enable dynamic log level configuration via env var",
          "timestamp": "2022-01-09T06:22:19Z",
          "tree_id": "cce6fb32b4e06c0e95372d84a03248d19f192451"
        },
        "date": 1641710416041,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 64.7901256198407,
            "unit": "iter/sec",
            "range": "stddev: 0.0009172270756195023",
            "extra": "mean: 15.434450704225362 msec\nrounds: 71"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 60.64809752897459,
            "unit": "iter/sec",
            "range": "stddev: 0.0012640177070684384",
            "extra": "mean: 16.488563380281644 msec\nrounds: 71"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.294606637087359,
            "unit": "iter/sec",
            "range": "stddev: 0.0032331073944799698",
            "extra": "mean: 88.53783333333324 msec\nrounds: 12"
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
          "id": "e1d0a65388fe9048bdf0f94beff3a8aaf1d1116e",
          "message": "Merge pull request #399 from TeoZosa/dependabot/github_actions/pypa/gh-action-pypi-publish-1.5.0",
          "timestamp": "2022-01-10T14:10:38Z",
          "tree_id": "d2102bd6ce0fa2f698124dff9002ed7b1c1aa5f8"
        },
        "date": 1641833558821,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 68.59864851515951,
            "unit": "iter/sec",
            "range": "stddev: 0.0008593611438130005",
            "extra": "mean: 14.577546666666638 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 64.7975387586918,
            "unit": "iter/sec",
            "range": "stddev: 0.0007646310089897258",
            "extra": "mean: 15.432684931506941 msec\nrounds: 73"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.217698421669837,
            "unit": "iter/sec",
            "range": "stddev: 0.007034747055937526",
            "extra": "mean: 89.14484615384612 msec\nrounds: 13"
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
          "id": "eae2950def2c27a58f471fac8ad19778033c2684",
          "message": "Merge pull request #400 from TeoZosa/dependabot/pip/dot-github/workflows/tox-gh-actions-2.9.0",
          "timestamp": "2022-01-10T14:28:25Z",
          "tree_id": "c28acda022f837d70e8c333cba1d89b7d4ec2959"
        },
        "date": 1641834258854,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 67.71378511594577,
            "unit": "iter/sec",
            "range": "stddev: 0.0006951891107086562",
            "extra": "mean: 14.768041666666663 msec\nrounds: 72"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 65.21801512884058,
            "unit": "iter/sec",
            "range": "stddev: 0.0007615885548292684",
            "extra": "mean: 15.333186666666615 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.37709567442741,
            "unit": "iter/sec",
            "range": "stddev: 0.005532655954444864",
            "extra": "mean: 96.36607692307688 msec\nrounds: 13"
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
          "id": "d1d8d1e36a926a83edc1a7c5e7bec6fcb3dbfde4",
          "message": "Merge pull request #403 from TeoZosa/dependabot/pip/sentry-sdk-1.5.2",
          "timestamp": "2022-01-10T15:37:38Z",
          "tree_id": "08000fef30d0a2183e4550db43926d599bf9dda4"
        },
        "date": 1641835104358,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 63.596479442214154,
            "unit": "iter/sec",
            "range": "stddev: 0.001628116556864499",
            "extra": "mean: 15.724140845070407 msec\nrounds: 71"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 58.40571856880056,
            "unit": "iter/sec",
            "range": "stddev: 0.001542355912922943",
            "extra": "mean: 17.12161111111104 msec\nrounds: 72"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.865569364889387,
            "unit": "iter/sec",
            "range": "stddev: 0.0028732175765900053",
            "extra": "mean: 92.0338333333331 msec\nrounds: 12"
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
          "id": "817a97657d51d44c541ee151e71cccb9bb5a837b",
          "message": "Merge pull request #405 from TeoZosa/dependabot/pip/gitpython-3.1.26",
          "timestamp": "2022-01-10T16:06:45Z",
          "tree_id": "d21b281ff8e5a3b0f22fc95ef53c60b456d6fd0d"
        },
        "date": 1641835622888,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 67.73232186399353,
            "unit": "iter/sec",
            "range": "stddev: 0.0008899234859306012",
            "extra": "mean: 14.763999999999994 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 66.99548776336496,
            "unit": "iter/sec",
            "range": "stddev: 0.0005341070823499521",
            "extra": "mean: 14.926378378378319 msec\nrounds: 74"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.182585088328423,
            "unit": "iter/sec",
            "range": "stddev: 0.0016508470320046628",
            "extra": "mean: 82.08438461538464 msec\nrounds: 13"
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
          "id": "402727a64e3560c9419794a8c99f7b48641eb63c",
          "message": "Merge pull request #401 from TeoZosa/dependabot/pip/tox-gh-actions-2.9.0",
          "timestamp": "2022-01-10T16:43:57Z",
          "tree_id": "21bcf2c6053e9e6fd892df1f531d826865b9ecc1"
        },
        "date": 1641836277412,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 66.50009975014976,
            "unit": "iter/sec",
            "range": "stddev: 0.000639546931376198",
            "extra": "mean: 15.0375714285714 msec\nrounds: 70"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 63.7980889327383,
            "unit": "iter/sec",
            "range": "stddev: 0.0005244484936914205",
            "extra": "mean: 15.674450704225483 msec\nrounds: 71"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.467352924031644,
            "unit": "iter/sec",
            "range": "stddev: 0.0029601531735040025",
            "extra": "mean: 87.2040833333334 msec\nrounds: 12"
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
          "id": "b783c6adc7660887c254d8793538cb1ca89ab4f5",
          "message": "Merge pull request #404 from TeoZosa/dependabot/pip/rich-11.0.0",
          "timestamp": "2022-01-10T20:36:27Z",
          "tree_id": "d6bed994eb145bd468709fa0c86b3cf384120024"
        },
        "date": 1641847152305,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 66.55461743749733,
            "unit": "iter/sec",
            "range": "stddev: 0.0010635665566964042",
            "extra": "mean: 15.025253521126743 msec\nrounds: 71"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 63.789888341479625,
            "unit": "iter/sec",
            "range": "stddev: 0.0008797524601681288",
            "extra": "mean: 15.676465753424845 msec\nrounds: 73"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.100308866094213,
            "unit": "iter/sec",
            "range": "stddev: 0.00715111863415104",
            "extra": "mean: 90.08758333333321 msec\nrounds: 12"
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
          "id": "dceca5bf914e51f092456ab946d5710daeda830d",
          "message": "Merge pull request #402 from TeoZosa/dependabot/pip/mypy-0.931",
          "timestamp": "2022-01-10T20:50:56Z",
          "tree_id": "c15f74c3f0ca2f5170e9e709a09170a8d914b642"
        },
        "date": 1641848822765,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 66.03281453552042,
            "unit": "iter/sec",
            "range": "stddev: 0.0007502660299753015",
            "extra": "mean: 15.143985714285726 msec\nrounds: 70"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 63.65251427431435,
            "unit": "iter/sec",
            "range": "stddev: 0.0004775844845114723",
            "extra": "mean: 15.710298507462559 msec\nrounds: 67"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.933371397728326,
            "unit": "iter/sec",
            "range": "stddev: 0.0022176458816523677",
            "extra": "mean: 83.79861538461488 msec\nrounds: 13"
          }
        ]
      }
    ]
  }
}