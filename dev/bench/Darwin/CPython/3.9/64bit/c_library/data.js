window.BENCHMARK_DATA = {
  "lastUpdate": 1641834463191,
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
        "date": 1634132568818,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.44602051337831,
            "unit": "iter/sec",
            "range": "stddev: 0.0005561917383682594",
            "extra": "mean: 13.615441558441526 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.85510439307996,
            "unit": "iter/sec",
            "range": "stddev: 0.0004188476407404078",
            "extra": "mean: 14.315346153846171 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.525979362967226,
            "unit": "iter/sec",
            "range": "stddev: 0.0014175302149357569",
            "extra": "mean: 79.83407692307696 msec\nrounds: 13"
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
        "date": 1634190732450,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.65490254468001,
            "unit": "iter/sec",
            "range": "stddev: 0.00048161894260747266",
            "extra": "mean: 13.955779220779144 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 66.74531634246027,
            "unit": "iter/sec",
            "range": "stddev: 0.0011143252081482183",
            "extra": "mean: 14.982324675324769 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.636318501552513,
            "unit": "iter/sec",
            "range": "stddev: 0.0024936419817873866",
            "extra": "mean: 85.93783333333309 msec\nrounds: 12"
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
        "date": 1634191178097,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 69.794840393159,
            "unit": "iter/sec",
            "range": "stddev: 0.0004813169931842247",
            "extra": "mean: 14.327706666666664 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 59.49977350419557,
            "unit": "iter/sec",
            "range": "stddev: 0.0017926519257365579",
            "extra": "mean: 16.806786666666653 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.778956109646403,
            "unit": "iter/sec",
            "range": "stddev: 0.001950109919201338",
            "extra": "mean: 84.89716666666646 msec\nrounds: 12"
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
        "date": 1634191643484,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.17069234788586,
            "unit": "iter/sec",
            "range": "stddev: 0.0004889737305716493",
            "extra": "mean: 13.856039999999995 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.2797614410186,
            "unit": "iter/sec",
            "range": "stddev: 0.000686668507501249",
            "extra": "mean: 14.645628205128101 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.95497755452957,
            "unit": "iter/sec",
            "range": "stddev: 0.0016192701966307908",
            "extra": "mean: 83.64716666666716 msec\nrounds: 12"
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
        "date": 1634237932699,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 76.87057994165352,
            "unit": "iter/sec",
            "range": "stddev: 0.0006633961703020097",
            "extra": "mean: 13.00887804878046 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.4479249198955,
            "unit": "iter/sec",
            "range": "stddev: 0.0008840916358444134",
            "extra": "mean: 14.826253012048177 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.834993325803456,
            "unit": "iter/sec",
            "range": "stddev: 0.00134386228213008",
            "extra": "mean: 77.91200000000008 msec\nrounds: 13"
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
        "date": 1634250543774,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 67.0797366237709,
            "unit": "iter/sec",
            "range": "stddev: 0.0012165622147906245",
            "extra": "mean: 14.90763157894738 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.93933811202764,
            "unit": "iter/sec",
            "range": "stddev: 0.0006613432402375757",
            "extra": "mean: 14.719012987012968 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.309218942183632,
            "unit": "iter/sec",
            "range": "stddev: 0.001946466048233027",
            "extra": "mean: 81.23992307692286 msec\nrounds: 13"
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
        "date": 1634252736760,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.60005982244927,
            "unit": "iter/sec",
            "range": "stddev: 0.00032373788919579495",
            "extra": "mean: 13.774093333333338 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.84923357505704,
            "unit": "iter/sec",
            "range": "stddev: 0.000630014805488881",
            "extra": "mean: 14.738560000000108 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.606635066858702,
            "unit": "iter/sec",
            "range": "stddev: 0.0028870093677966506",
            "extra": "mean: 86.15761538461524 msec\nrounds: 13"
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
        "date": 1635032944786,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.08571642741995,
            "unit": "iter/sec",
            "range": "stddev: 0.00043508970831207045",
            "extra": "mean: 13.68256410256416 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.30870279146149,
            "unit": "iter/sec",
            "range": "stddev: 0.000755237427520746",
            "extra": "mean: 14.639423076923062 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.41512451852592,
            "unit": "iter/sec",
            "range": "stddev: 0.002634865925805185",
            "extra": "mean: 80.54691666666687 msec\nrounds: 12"
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
        "date": 1635033560735,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.7862579544982,
            "unit": "iter/sec",
            "range": "stddev: 0.0008455635340938984",
            "extra": "mean: 13.738857142857142 msec\nrounds: 84"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.6227477681396,
            "unit": "iter/sec",
            "range": "stddev: 0.00047704208847765695",
            "extra": "mean: 14.159743589743687 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.038463467228327,
            "unit": "iter/sec",
            "range": "stddev: 0.0009106809582350576",
            "extra": "mean: 76.69615384615383 msec\nrounds: 13"
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
        "date": 1635061916697,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.51838962264081,
            "unit": "iter/sec",
            "range": "stddev: 0.0005711023376252177",
            "extra": "mean: 13.602038961038923 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.46700150855021,
            "unit": "iter/sec",
            "range": "stddev: 0.0001837166979011904",
            "extra": "mean: 14.1910394736842 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.087246926493448,
            "unit": "iter/sec",
            "range": "stddev: 0.01300792621482222",
            "extra": "mean: 99.13507692307701 msec\nrounds: 13"
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
        "date": 1635177384544,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.23045779199647,
            "unit": "iter/sec",
            "range": "stddev: 0.0006823747384260377",
            "extra": "mean: 14.038938271604946 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.36350845763819,
            "unit": "iter/sec",
            "range": "stddev: 0.0007399094441171874",
            "extra": "mean: 14.416802469135797 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.412397120323908,
            "unit": "iter/sec",
            "range": "stddev: 0.0010878353535393528",
            "extra": "mean: 80.56461538461512 msec\nrounds: 13"
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
        "date": 1635178439575,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 75.18565072216795,
            "unit": "iter/sec",
            "range": "stddev: 0.00023229937222253854",
            "extra": "mean: 13.300410256410231 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.41549984154712,
            "unit": "iter/sec",
            "range": "stddev: 0.0005000102491038124",
            "extra": "mean: 14.002562499999948 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.323010757988383,
            "unit": "iter/sec",
            "range": "stddev: 0.003591431608704265",
            "extra": "mean: 81.14900000000006 msec\nrounds: 13"
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
        "date": 1635183019600,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 74.31802023957253,
            "unit": "iter/sec",
            "range": "stddev: 0.0006619907877870398",
            "extra": "mean: 13.455686746987974 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.6036635983594,
            "unit": "iter/sec",
            "range": "stddev: 0.00033555164031883735",
            "extra": "mean: 13.773409638554336 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.741117393110693,
            "unit": "iter/sec",
            "range": "stddev: 0.0017895400784301786",
            "extra": "mean: 85.17076923076908 msec\nrounds: 13"
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
        "date": 1635202643708,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 77.82379045807097,
            "unit": "iter/sec",
            "range": "stddev: 0.0003891526066475501",
            "extra": "mean: 12.849541176470565 msec\nrounds: 85"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 73.65086436474792,
            "unit": "iter/sec",
            "range": "stddev: 0.000289260318082238",
            "extra": "mean: 13.577573170731688 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.879360524885023,
            "unit": "iter/sec",
            "range": "stddev: 0.0032724142601056982",
            "extra": "mean: 84.17961538461505 msec\nrounds: 13"
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
        "date": 1635203046258,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 79.86651706930266,
            "unit": "iter/sec",
            "range": "stddev: 0.00022848941972878153",
            "extra": "mean: 12.520891566265108 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 75.26071490425088,
            "unit": "iter/sec",
            "range": "stddev: 0.00021116281618640965",
            "extra": "mean: 13.2871445783133 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.075544607061797,
            "unit": "iter/sec",
            "range": "stddev: 0.001737789352405594",
            "extra": "mean: 82.81199999999987 msec\nrounds: 13"
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
        "date": 1635203406544,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 74.73513401410808,
            "unit": "iter/sec",
            "range": "stddev: 0.0004907905968622342",
            "extra": "mean: 13.380587500000008 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.3333380140647,
            "unit": "iter/sec",
            "range": "stddev: 0.0007528990767683996",
            "extra": "mean: 14.423075949367155 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.958894519790594,
            "unit": "iter/sec",
            "range": "stddev: 0.0013382691030986544",
            "extra": "mean: 83.61976923076921 msec\nrounds: 13"
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
        "date": 1635204982635,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 76.09206025748823,
            "unit": "iter/sec",
            "range": "stddev: 0.0005312965965182825",
            "extra": "mean: 13.141975609756075 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.60078365326774,
            "unit": "iter/sec",
            "range": "stddev: 0.001146735782127937",
            "extra": "mean: 14.367654320987667 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.26223063180671,
            "unit": "iter/sec",
            "range": "stddev: 0.0014802832022875604",
            "extra": "mean: 81.55123076923083 msec\nrounds: 13"
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
        "date": 1635449824506,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.56418475119558,
            "unit": "iter/sec",
            "range": "stddev: 0.0008537752759388838",
            "extra": "mean: 13.593571428571398 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.10908254175979,
            "unit": "iter/sec",
            "range": "stddev: 0.0006005790007960712",
            "extra": "mean: 14.263487179487191 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.003083869240273,
            "unit": "iter/sec",
            "range": "stddev: 0.0016052762203400866",
            "extra": "mean: 83.31192307692294 msec\nrounds: 13"
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
        "date": 1635452795988,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 81.42932413661029,
            "unit": "iter/sec",
            "range": "stddev: 0.00032439042812630966",
            "extra": "mean: 12.280588235294022 msec\nrounds: 85"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 77.123899100664,
            "unit": "iter/sec",
            "range": "stddev: 0.00028077871485345825",
            "extra": "mean: 12.966149425287425 msec\nrounds: 87"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.547887080598924,
            "unit": "iter/sec",
            "range": "stddev: 0.0007625661047427791",
            "extra": "mean: 79.6946923076924 msec\nrounds: 13"
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
        "date": 1635946396515,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 77.36264072121074,
            "unit": "iter/sec",
            "range": "stddev: 0.0004386861279173418",
            "extra": "mean: 12.926135802469151 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 73.0331759964297,
            "unit": "iter/sec",
            "range": "stddev: 0.0005776610549833573",
            "extra": "mean: 13.692407407407366 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.364301787878045,
            "unit": "iter/sec",
            "range": "stddev: 0.001330066414381874",
            "extra": "mean: 80.87799999999994 msec\nrounds: 13"
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
        "date": 1636165398934,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 80.2830444077262,
            "unit": "iter/sec",
            "range": "stddev: 0.0005189741643959967",
            "extra": "mean: 12.455930232558087 msec\nrounds: 86"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 76.96966753685173,
            "unit": "iter/sec",
            "range": "stddev: 0.00036175052242707543",
            "extra": "mean: 12.992130952380917 msec\nrounds: 84"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.039521859361379,
            "unit": "iter/sec",
            "range": "stddev: 0.0017273651551196266",
            "extra": "mean: 76.68992857142813 msec\nrounds: 14"
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
        "date": 1636384286176,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.80344134311585,
            "unit": "iter/sec",
            "range": "stddev: 0.0008224201798066448",
            "extra": "mean: 13.926909090909122 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 66.49525667169027,
            "unit": "iter/sec",
            "range": "stddev: 0.0012681331474469282",
            "extra": "mean: 15.038666666666774 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.553070361753312,
            "unit": "iter/sec",
            "range": "stddev: 0.0023082271140976427",
            "extra": "mean: 86.55707692307679 msec\nrounds: 13"
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
        "date": 1636385190703,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.66703869706133,
            "unit": "iter/sec",
            "range": "stddev: 0.0009937462026684866",
            "extra": "mean: 13.761397435897443 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.46899004772945,
            "unit": "iter/sec",
            "range": "stddev: 0.0011281794057253142",
            "extra": "mean: 14.60515189873407 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.660426843378925,
            "unit": "iter/sec",
            "range": "stddev: 0.0028365923760198695",
            "extra": "mean: 85.76015384615395 msec\nrounds: 13"
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
        "date": 1636469929638,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 80.55351774335112,
            "unit": "iter/sec",
            "range": "stddev: 0.00017398532121000272",
            "extra": "mean: 12.414107142857082 msec\nrounds: 84"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 75.16267350050343,
            "unit": "iter/sec",
            "range": "stddev: 0.0006591324798038007",
            "extra": "mean: 13.304476190476407 msec\nrounds: 84"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.561952166018772,
            "unit": "iter/sec",
            "range": "stddev: 0.0008794760386532057",
            "extra": "mean: 79.60546153846146 msec\nrounds: 13"
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
        "date": 1636642375157,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 67.39116327131667,
            "unit": "iter/sec",
            "range": "stddev: 0.0024123804052107057",
            "extra": "mean: 14.838740740740775 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.43944239297568,
            "unit": "iter/sec",
            "range": "stddev: 0.00041996547512997964",
            "extra": "mean: 13.80463414634136 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.955353193320777,
            "unit": "iter/sec",
            "range": "stddev: 0.0017593929642249152",
            "extra": "mean: 83.64453846153876 msec\nrounds: 13"
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
        "date": 1636643151195,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.64486627092379,
            "unit": "iter/sec",
            "range": "stddev: 0.0009746877426535348",
            "extra": "mean: 13.578679012345718 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.16145007173805,
            "unit": "iter/sec",
            "range": "stddev: 0.0012039077196906453",
            "extra": "mean: 14.671049382716001 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.693023941916286,
            "unit": "iter/sec",
            "range": "stddev: 0.004166891056522268",
            "extra": "mean: 85.52107692307669 msec\nrounds: 13"
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
        "date": 1636745311930,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 78.81818854656336,
            "unit": "iter/sec",
            "range": "stddev: 0.00038552756960514927",
            "extra": "mean: 12.68742682926836 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 74.44039656103364,
            "unit": "iter/sec",
            "range": "stddev: 0.0002201340053500896",
            "extra": "mean: 13.433566265060135 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.417246217754574,
            "unit": "iter/sec",
            "range": "stddev: 0.0010935781366806238",
            "extra": "mean: 80.53315384615377 msec\nrounds: 13"
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
        "date": 1636745931844,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 78.60170478364181,
            "unit": "iter/sec",
            "range": "stddev: 0.0002472207234661309",
            "extra": "mean: 12.722370370370324 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 73.42492733091771,
            "unit": "iter/sec",
            "range": "stddev: 0.000493897032499147",
            "extra": "mean: 13.619352941176436 msec\nrounds: 85"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.605344666138462,
            "unit": "iter/sec",
            "range": "stddev: 0.0042491526886460716",
            "extra": "mean: 79.33142857142846 msec\nrounds: 14"
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
        "date": 1637161495235,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 80.59407202486031,
            "unit": "iter/sec",
            "range": "stddev: 0.0003499112211032017",
            "extra": "mean: 12.4078604651163 msec\nrounds: 86"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 77.38533382098414,
            "unit": "iter/sec",
            "range": "stddev: 0.00032229768078158826",
            "extra": "mean: 12.922345238095176 msec\nrounds: 84"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.279129192647945,
            "unit": "iter/sec",
            "range": "stddev: 0.001197623213968588",
            "extra": "mean: 75.30614285714269 msec\nrounds: 14"
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
        "date": 1637162213890,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 77.42064619803266,
            "unit": "iter/sec",
            "range": "stddev: 0.00047026885277194163",
            "extra": "mean: 12.91645121951218 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.82947339512974,
            "unit": "iter/sec",
            "range": "stddev: 0.0007567126943407611",
            "extra": "mean: 14.742853658536607 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.572351464920699,
            "unit": "iter/sec",
            "range": "stddev: 0.0016814522759838054",
            "extra": "mean: 79.53961538461553 msec\nrounds: 13"
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
        "date": 1637162718975,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 70.69735874667735,
            "unit": "iter/sec",
            "range": "stddev: 0.00131394027796322",
            "extra": "mean: 14.144799999999975 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.00342807024614,
            "unit": "iter/sec",
            "range": "stddev: 0.0011294930218232323",
            "extra": "mean: 14.70514102564095 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.68211025909872,
            "unit": "iter/sec",
            "range": "stddev: 0.010319445669991281",
            "extra": "mean: 93.61446153846131 msec\nrounds: 13"
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
        "date": 1637175302902,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 76.8770246285158,
            "unit": "iter/sec",
            "range": "stddev: 0.00048584387484859273",
            "extra": "mean: 13.007787500000001 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.9946740922978,
            "unit": "iter/sec",
            "range": "stddev: 0.00040843082169568924",
            "extra": "mean: 13.699629629629612 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.154042200704366,
            "unit": "iter/sec",
            "range": "stddev: 0.002060537666328511",
            "extra": "mean: 82.27715384615391 msec\nrounds: 13"
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
        "date": 1637530269128,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 83.14045385131423,
            "unit": "iter/sec",
            "range": "stddev: 0.00031246606787178053",
            "extra": "mean: 12.027839080459778 msec\nrounds: 87"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 75.17854905400281,
            "unit": "iter/sec",
            "range": "stddev: 0.0009026471492056473",
            "extra": "mean: 13.301666666666744 msec\nrounds: 87"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.990314792442561,
            "unit": "iter/sec",
            "range": "stddev: 0.001554088093448575",
            "extra": "mean: 76.98042857142883 msec\nrounds: 14"
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
        "date": 1637592919959,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.76494431668776,
            "unit": "iter/sec",
            "range": "stddev: 0.0011070140791873825",
            "extra": "mean: 13.556574999999983 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.90959815089082,
            "unit": "iter/sec",
            "range": "stddev: 0.0008149082901535309",
            "extra": "mean: 14.304187500000065 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.90127172419055,
            "unit": "iter/sec",
            "range": "stddev: 0.0035390431541548087",
            "extra": "mean: 91.73241666666672 msec\nrounds: 12"
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
        "date": 1637593829683,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 76.37501276894761,
            "unit": "iter/sec",
            "range": "stddev: 0.0003275179845772038",
            "extra": "mean: 13.093287499999972 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 74.24333666053379,
            "unit": "iter/sec",
            "range": "stddev: 0.0003748181559102689",
            "extra": "mean: 13.469222222222392 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.556031289629912,
            "unit": "iter/sec",
            "range": "stddev: 0.0009055584832946416",
            "extra": "mean: 79.64300000000038 msec\nrounds: 13"
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
        "date": 1637679061995,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 77.66751973090678,
            "unit": "iter/sec",
            "range": "stddev: 0.0002440151470201638",
            "extra": "mean: 12.87539506172827 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.56200511827569,
            "unit": "iter/sec",
            "range": "stddev: 0.0006040505840574487",
            "extra": "mean: 13.781317073170802 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.573907980272484,
            "unit": "iter/sec",
            "range": "stddev: 0.0007903498332852767",
            "extra": "mean: 79.52976923076936 msec\nrounds: 13"
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
        "date": 1637939188728,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.24918187064262,
            "unit": "iter/sec",
            "range": "stddev: 0.000903603471440773",
            "extra": "mean: 13.840987179487154 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.71693138245134,
            "unit": "iter/sec",
            "range": "stddev: 0.0008773422364922923",
            "extra": "mean: 14.34371794871788 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.027159175751079,
            "unit": "iter/sec",
            "range": "stddev: 0.0035457676847697904",
            "extra": "mean: 83.14515384615348 msec\nrounds: 13"
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
        "date": 1637940169832,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 70.57904077919221,
            "unit": "iter/sec",
            "range": "stddev: 0.001024364328560495",
            "extra": "mean: 14.16851219512203 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.32065370728205,
            "unit": "iter/sec",
            "range": "stddev: 0.0003925950407854648",
            "extra": "mean: 13.827308641975243 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.184891671626577,
            "unit": "iter/sec",
            "range": "stddev: 0.0019997063470320094",
            "extra": "mean: 82.06884615384593 msec\nrounds: 13"
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
        "date": 1638204102316,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 74.53904588157772,
            "unit": "iter/sec",
            "range": "stddev: 0.0007874185622950772",
            "extra": "mean: 13.415787500000043 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.07453141894015,
            "unit": "iter/sec",
            "range": "stddev: 0.000631120276682144",
            "extra": "mean: 14.069737500000134 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.68445509724186,
            "unit": "iter/sec",
            "range": "stddev: 0.006710375324258927",
            "extra": "mean: 93.59391666666698 msec\nrounds: 12"
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
        "date": 1638204767474,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 75.60300574582836,
            "unit": "iter/sec",
            "range": "stddev: 0.0006129811243521367",
            "extra": "mean: 13.226987341772166 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.41720783164926,
            "unit": "iter/sec",
            "range": "stddev: 0.0009460100502582211",
            "extra": "mean: 14.405650000000024 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.74799290059756,
            "unit": "iter/sec",
            "range": "stddev: 0.0033307023148664377",
            "extra": "mean: 85.1209230769228 msec\nrounds: 13"
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
        "date": 1638206653486,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 69.52360025818156,
            "unit": "iter/sec",
            "range": "stddev: 0.0012784712616931287",
            "extra": "mean: 14.383604938271587 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.71219768753745,
            "unit": "iter/sec",
            "range": "stddev: 0.001144959836079255",
            "extra": "mean: 14.553456790123496 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.819170330609477,
            "unit": "iter/sec",
            "range": "stddev: 0.003269852223588097",
            "extra": "mean: 84.60830769230763 msec\nrounds: 13"
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
        "date": 1638207637430,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 74.21017825472656,
            "unit": "iter/sec",
            "range": "stddev: 0.0005299336488507624",
            "extra": "mean: 13.475240506329177 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.18168959718462,
            "unit": "iter/sec",
            "range": "stddev: 0.0007529970537373852",
            "extra": "mean: 14.248730769230665 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.66857278500426,
            "unit": "iter/sec",
            "range": "stddev: 0.00822203704161146",
            "extra": "mean: 93.73324999999996 msec\nrounds: 12"
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
        "date": 1638209398535,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 77.07547115950041,
            "unit": "iter/sec",
            "range": "stddev: 0.00033053912190701945",
            "extra": "mean: 12.97429629629632 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.08643965074583,
            "unit": "iter/sec",
            "range": "stddev: 0.0004935783694512538",
            "extra": "mean: 13.872234567901199 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.803277639075636,
            "unit": "iter/sec",
            "range": "stddev: 0.0009630695717339453",
            "extra": "mean: 78.1049999999998 msec\nrounds: 13"
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
        "date": 1638282672594,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 78.481817102911,
            "unit": "iter/sec",
            "range": "stddev: 0.0003462674139319836",
            "extra": "mean: 12.741804878048734 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 73.2491444589257,
            "unit": "iter/sec",
            "range": "stddev: 0.0004769391980586565",
            "extra": "mean: 13.652036585365824 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.480631020704417,
            "unit": "iter/sec",
            "range": "stddev: 0.0015067825460314687",
            "extra": "mean: 80.12415384615377 msec\nrounds: 13"
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
        "date": 1638371442840,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 74.45363753141922,
            "unit": "iter/sec",
            "range": "stddev: 0.0005333839421379376",
            "extra": "mean: 13.431177215189827 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.67536122713922,
            "unit": "iter/sec",
            "range": "stddev: 0.0005921792084033092",
            "extra": "mean: 14.149202531645523 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.0885454472565,
            "unit": "iter/sec",
            "range": "stddev: 0.003829031336299294",
            "extra": "mean: 90.18315384615369 msec\nrounds: 13"
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
        "date": 1638372864217,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 74.83964912215849,
            "unit": "iter/sec",
            "range": "stddev: 0.0006428238989983893",
            "extra": "mean: 13.361901234567927 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.01932278430307,
            "unit": "iter/sec",
            "range": "stddev: 0.000584283168815139",
            "extra": "mean: 13.885162499999993 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.257871675170202,
            "unit": "iter/sec",
            "range": "stddev: 0.0035106248293298855",
            "extra": "mean: 81.58023076923057 msec\nrounds: 13"
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
        "date": 1638455670015,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.52827706907216,
            "unit": "iter/sec",
            "range": "stddev: 0.0009783901281704222",
            "extra": "mean: 13.6002098765432 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.36468255852999,
            "unit": "iter/sec",
            "range": "stddev: 0.0009712026053470834",
            "extra": "mean: 14.211675000000046 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.309615229834789,
            "unit": "iter/sec",
            "range": "stddev: 0.0017126374584548248",
            "extra": "mean: 81.23730769230725 msec\nrounds: 13"
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
        "date": 1638805418981,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 79.00591291814119,
            "unit": "iter/sec",
            "range": "stddev: 0.00024442243710987206",
            "extra": "mean: 12.65728048780488 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 73.87646953361387,
            "unit": "iter/sec",
            "range": "stddev: 0.00045307522625319917",
            "extra": "mean: 13.536109756097629 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.458670755666256,
            "unit": "iter/sec",
            "range": "stddev: 0.0013271833921545341",
            "extra": "mean: 80.26538461538489 msec\nrounds: 13"
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
        "date": 1638806374053,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 75.14095887284824,
            "unit": "iter/sec",
            "range": "stddev: 0.0008189776679977652",
            "extra": "mean: 13.308320987654369 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.10938817289646,
            "unit": "iter/sec",
            "range": "stddev: 0.0008136947266806494",
            "extra": "mean: 14.263425000000062 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.212971679058079,
            "unit": "iter/sec",
            "range": "stddev: 0.0012831852845007965",
            "extra": "mean: 81.88015384615423 msec\nrounds: 13"
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
        "date": 1638807977626,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 78.53578645928106,
            "unit": "iter/sec",
            "range": "stddev: 0.0002807435410880623",
            "extra": "mean: 12.733048780487813 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.72211284343432,
            "unit": "iter/sec",
            "range": "stddev: 0.0004751045102858755",
            "extra": "mean: 13.750975609756152 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.097265738775338,
            "unit": "iter/sec",
            "range": "stddev: 0.0023665580626938865",
            "extra": "mean: 82.66330769230788 msec\nrounds: 13"
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
        "date": 1638974137335,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 79.52653967079696,
            "unit": "iter/sec",
            "range": "stddev: 0.0004366036152235969",
            "extra": "mean: 12.574418604651187 msec\nrounds: 86"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 74.54507536595852,
            "unit": "iter/sec",
            "range": "stddev: 0.0005457211605338964",
            "extra": "mean: 13.4147023809524 msec\nrounds: 84"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.509382036527386,
            "unit": "iter/sec",
            "range": "stddev: 0.0031893619810479975",
            "extra": "mean: 79.94000000000005 msec\nrounds: 14"
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
        "date": 1638975286155,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 77.67946799037531,
            "unit": "iter/sec",
            "range": "stddev: 0.0004484718346226902",
            "extra": "mean: 12.873414634146345 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 73.07387947443841,
            "unit": "iter/sec",
            "range": "stddev: 0.0006275044050682216",
            "extra": "mean: 13.684780487804876 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.675685385185357,
            "unit": "iter/sec",
            "range": "stddev: 0.00506208434444307",
            "extra": "mean: 85.64807692307689 msec\nrounds: 13"
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
        "date": 1639147197456,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 78.29560837102692,
            "unit": "iter/sec",
            "range": "stddev: 0.00018085150977128665",
            "extra": "mean: 12.772108433734928 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.35671131893642,
            "unit": "iter/sec",
            "range": "stddev: 0.000523315191947925",
            "extra": "mean: 14.014098765432077 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.75241192252421,
            "unit": "iter/sec",
            "range": "stddev: 0.0012136674870945813",
            "extra": "mean: 78.41653846153835 msec\nrounds: 13"
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
        "date": 1639255285718,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 84.40898840623366,
            "unit": "iter/sec",
            "range": "stddev: 0.0006560244111940978",
            "extra": "mean: 11.847079545454537 msec\nrounds: 88"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 78.31925087186417,
            "unit": "iter/sec",
            "range": "stddev: 0.00048576880371246586",
            "extra": "mean: 12.768252873563242 msec\nrounds: 87"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.064661676588033,
            "unit": "iter/sec",
            "range": "stddev: 0.0014980561562414805",
            "extra": "mean: 76.54235714285714 msec\nrounds: 14"
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
        "date": 1639410126526,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.96894229035556,
            "unit": "iter/sec",
            "range": "stddev: 0.000578043362521932",
            "extra": "mean: 13.519187500000053 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.69089880969693,
            "unit": "iter/sec",
            "range": "stddev: 0.0006409032842783797",
            "extra": "mean: 14.349075949367121 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.690931344556038,
            "unit": "iter/sec",
            "range": "stddev: 0.003753854231285925",
            "extra": "mean: 85.53638461538455 msec\nrounds: 13"
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
        "date": 1639412479650,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 76.53263691783228,
            "unit": "iter/sec",
            "range": "stddev: 0.000647064328856917",
            "extra": "mean: 13.066320987654326 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.2406522982342,
            "unit": "iter/sec",
            "range": "stddev: 0.0008563935072135031",
            "extra": "mean: 14.442382716049346 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.176012693024914,
            "unit": "iter/sec",
            "range": "stddev: 0.0010705118234298988",
            "extra": "mean: 82.12869230769239 msec\nrounds: 13"
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
        "date": 1639413328526,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 74.99062617172851,
            "unit": "iter/sec",
            "range": "stddev: 0.0007335890538986681",
            "extra": "mean: 13.335000000000003 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.39787599551207,
            "unit": "iter/sec",
            "range": "stddev: 0.0003662706065346097",
            "extra": "mean: 14.204974025974177 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.62414143699626,
            "unit": "iter/sec",
            "range": "stddev: 0.0009469879781547623",
            "extra": "mean: 79.21330769230799 msec\nrounds: 13"
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
        "date": 1639413775990,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 77.82568172484233,
            "unit": "iter/sec",
            "range": "stddev: 0.0007575473956886675",
            "extra": "mean: 12.849228915662621 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.56001465358388,
            "unit": "iter/sec",
            "range": "stddev: 0.00055569968550463",
            "extra": "mean: 13.781695121951138 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.559318627981389,
            "unit": "iter/sec",
            "range": "stddev: 0.000905499479675322",
            "extra": "mean: 79.62215384615384 msec\nrounds: 13"
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
        "date": 1639419143824,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 77.98183023355577,
            "unit": "iter/sec",
            "range": "stddev: 0.00045356389153424626",
            "extra": "mean: 12.823499999999969 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.30057787476245,
            "unit": "iter/sec",
            "range": "stddev: 0.0011526339449433219",
            "extra": "mean: 14.641164556962073 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.520224978811877,
            "unit": "iter/sec",
            "range": "stddev: 0.000895287863747953",
            "extra": "mean: 79.87076923076955 msec\nrounds: 13"
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
        "date": 1639579411558,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 78.92213795199993,
            "unit": "iter/sec",
            "range": "stddev: 0.000211751991405542",
            "extra": "mean: 12.670716049382687 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.03611410520377,
            "unit": "iter/sec",
            "range": "stddev: 0.0004080457014164666",
            "extra": "mean: 13.881925925926115 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.413440127113581,
            "unit": "iter/sec",
            "range": "stddev: 0.0016397693357177237",
            "extra": "mean: 80.55784615384646 msec\nrounds: 13"
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
        "date": 1639669310299,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 76.8673061520413,
            "unit": "iter/sec",
            "range": "stddev: 0.0002262938321227226",
            "extra": "mean: 13.009432098765489 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.47010476105638,
            "unit": "iter/sec",
            "range": "stddev: 0.0006410427589694442",
            "extra": "mean: 13.991864197530795 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.474131714623429,
            "unit": "iter/sec",
            "range": "stddev: 0.007212194573366778",
            "extra": "mean: 95.47330769230761 msec\nrounds: 13"
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
        "date": 1639670125774,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 70.5185253951495,
            "unit": "iter/sec",
            "range": "stddev: 0.0009121592967256136",
            "extra": "mean: 14.180670886075895 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.03989435260064,
            "unit": "iter/sec",
            "range": "stddev: 0.0009615909295838573",
            "extra": "mean: 14.69725974025969 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.965483399628816,
            "unit": "iter/sec",
            "range": "stddev: 0.005458012960526202",
            "extra": "mean: 91.19525000000002 msec\nrounds: 12"
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
        "date": 1639670592554,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 78.9670341522793,
            "unit": "iter/sec",
            "range": "stddev: 0.0003547132468682202",
            "extra": "mean: 12.663512195121946 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 73.96713363989522,
            "unit": "iter/sec",
            "range": "stddev: 0.00042362850043027275",
            "extra": "mean: 13.519518072289282 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.61167394748302,
            "unit": "iter/sec",
            "range": "stddev: 0.0011854970503591621",
            "extra": "mean: 79.29161538461557 msec\nrounds: 13"
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
        "date": 1639753146200,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 75.15194784454843,
            "unit": "iter/sec",
            "range": "stddev: 0.0006406035993646147",
            "extra": "mean: 13.306374999999958 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.46787876189046,
            "unit": "iter/sec",
            "range": "stddev: 0.00047886097451268903",
            "extra": "mean: 13.992300000000002 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.16925372519583,
            "unit": "iter/sec",
            "range": "stddev: 0.003667541078720614",
            "extra": "mean: 82.17430769230738 msec\nrounds: 13"
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
        "date": 1640012470125,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 76.72500261987814,
            "unit": "iter/sec",
            "range": "stddev: 0.0005351169734258576",
            "extra": "mean: 13.033560975609756 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.97067209592527,
            "unit": "iter/sec",
            "range": "stddev: 0.00043280058205507433",
            "extra": "mean: 13.704135802469068 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.748130917556146,
            "unit": "iter/sec",
            "range": "stddev: 0.0037466982233591004",
            "extra": "mean: 85.119923076923 msec\nrounds: 13"
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
        "date": 1640013383852,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 77.44840691392955,
            "unit": "iter/sec",
            "range": "stddev: 0.0005720535226604676",
            "extra": "mean: 12.911821428571491 msec\nrounds: 84"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.75164131879544,
            "unit": "iter/sec",
            "range": "stddev: 0.000750631379427169",
            "extra": "mean: 13.936963414634095 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.309114046782176,
            "unit": "iter/sec",
            "range": "stddev: 0.0018297168969752795",
            "extra": "mean: 81.24061538461561 msec\nrounds: 13"
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
        "date": 1640724914775,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.52058954157074,
            "unit": "iter/sec",
            "range": "stddev: 0.0011256924479385384",
            "extra": "mean: 13.981987654320974 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.11196310803423,
            "unit": "iter/sec",
            "range": "stddev: 0.0007655885958539304",
            "extra": "mean: 14.469274999999971 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.810570263543104,
            "unit": "iter/sec",
            "range": "stddev: 0.001972579596657981",
            "extra": "mean: 84.66991666666617 msec\nrounds: 12"
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
        "date": 1640791476593,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 75.13232681059516,
            "unit": "iter/sec",
            "range": "stddev: 0.0007333397005861069",
            "extra": "mean: 13.30985 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.01037398446955,
            "unit": "iter/sec",
            "range": "stddev: 0.0011931496640765356",
            "extra": "mean: 14.490574999999927 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.399604815016993,
            "unit": "iter/sec",
            "range": "stddev: 0.009365111225859573",
            "extra": "mean: 96.15750000000034 msec\nrounds: 12"
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
        "date": 1640793786710,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 76.76364473785202,
            "unit": "iter/sec",
            "range": "stddev: 0.00034610710047612347",
            "extra": "mean: 13.027000000000022 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.85974499089184,
            "unit": "iter/sec",
            "range": "stddev: 0.0004512260519960923",
            "extra": "mean: 13.72500000000013 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.441441484551055,
            "unit": "iter/sec",
            "range": "stddev: 0.0013131805293124827",
            "extra": "mean: 80.37653846153863 msec\nrounds: 13"
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
        "date": 1640877721328,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.08699362133308,
            "unit": "iter/sec",
            "range": "stddev: 0.0009895432493858705",
            "extra": "mean: 13.682324999999917 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.45676781804033,
            "unit": "iter/sec",
            "range": "stddev: 0.0014380362073753976",
            "extra": "mean: 14.607759493670851 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.365454344840202,
            "unit": "iter/sec",
            "range": "stddev: 0.001704030057216194",
            "extra": "mean: 80.87046153846138 msec\nrounds: 13"
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
        "date": 1640879182663,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 78.54965909447948,
            "unit": "iter/sec",
            "range": "stddev: 0.0006748018818488847",
            "extra": "mean: 12.73080000000001 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 75.54066180900759,
            "unit": "iter/sec",
            "range": "stddev: 0.000532015349458992",
            "extra": "mean: 13.237903614457855 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.04018325158913,
            "unit": "iter/sec",
            "range": "stddev: 0.007502941312256423",
            "extra": "mean: 83.05521428571402 msec\nrounds: 14"
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
        "date": 1641223389515,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.33122638498484,
            "unit": "iter/sec",
            "range": "stddev: 0.0012049100832437815",
            "extra": "mean: 13.825287499999982 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.04923863883384,
            "unit": "iter/sec",
            "range": "stddev: 0.001166170456850875",
            "extra": "mean: 14.482418918918999 msec\nrounds: 74"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.823522109001061,
            "unit": "iter/sec",
            "range": "stddev: 0.003291948299420675",
            "extra": "mean: 84.57716666666659 msec\nrounds: 12"
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
        "date": 1641224435934,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 70.06819675504418,
            "unit": "iter/sec",
            "range": "stddev: 0.001172134980368678",
            "extra": "mean: 14.271810126582293 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.48975693435894,
            "unit": "iter/sec",
            "range": "stddev: 0.0012836521849162225",
            "extra": "mean: 14.817063291139243 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.907603508612434,
            "unit": "iter/sec",
            "range": "stddev: 0.0049423257652342805",
            "extra": "mean: 91.6791666666669 msec\nrounds: 12"
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
        "date": 1641446921235,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 79.46385919004148,
            "unit": "iter/sec",
            "range": "stddev: 0.0006453871908618969",
            "extra": "mean: 12.584337209302332 msec\nrounds: 86"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.7110974243164,
            "unit": "iter/sec",
            "range": "stddev: 0.0007325164446869614",
            "extra": "mean: 13.753058823529393 msec\nrounds: 85"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.580868370245321,
            "unit": "iter/sec",
            "range": "stddev: 0.002468436048521342",
            "extra": "mean: 79.48576923076895 msec\nrounds: 13"
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
        "date": 1641482276854,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 75.82388265084062,
            "unit": "iter/sec",
            "range": "stddev: 0.0006342739165649662",
            "extra": "mean: 13.188456790123416 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.50764049261575,
            "unit": "iter/sec",
            "range": "stddev: 0.00040865147479007065",
            "extra": "mean: 13.791650000000221 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.072572878872213,
            "unit": "iter/sec",
            "range": "stddev: 0.0017141462665355134",
            "extra": "mean: 82.83238461538426 msec\nrounds: 13"
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
        "date": 1641495284365,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 76.10234243009998,
            "unit": "iter/sec",
            "range": "stddev: 0.0005325889335612618",
            "extra": "mean: 13.140200000000002 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.21922547109651,
            "unit": "iter/sec",
            "range": "stddev: 0.000651965720194441",
            "extra": "mean: 13.846728395061767 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.463125924548255,
            "unit": "iter/sec",
            "range": "stddev: 0.0012990784159429183",
            "extra": "mean: 80.2366923076922 msec\nrounds: 13"
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
        "date": 1641498248025,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 77.04253211884615,
            "unit": "iter/sec",
            "range": "stddev: 0.000558554569291388",
            "extra": "mean: 12.97984337349395 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.99882194547237,
            "unit": "iter/sec",
            "range": "stddev: 0.0006870389686505665",
            "extra": "mean: 14.084740740740845 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.773081642800733,
            "unit": "iter/sec",
            "range": "stddev: 0.0029721275624126917",
            "extra": "mean: 78.2896428571431 msec\nrounds: 14"
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
        "date": 1641507056702,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 74.22502327966616,
            "unit": "iter/sec",
            "range": "stddev: 0.0003071231342917615",
            "extra": "mean: 13.472545454545497 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.73059218705366,
            "unit": "iter/sec",
            "range": "stddev: 0.0005399310370194313",
            "extra": "mean: 14.340907894736942 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.337629675605774,
            "unit": "iter/sec",
            "range": "stddev: 0.0015846676226767469",
            "extra": "mean: 81.05284615384602 msec\nrounds: 13"
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
        "date": 1641512454225,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 76.10994462050164,
            "unit": "iter/sec",
            "range": "stddev: 0.0006741386063720304",
            "extra": "mean: 13.138887499999985 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.34841456776019,
            "unit": "iter/sec",
            "range": "stddev: 0.0005213248270594425",
            "extra": "mean: 14.015728395061837 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.723405879583684,
            "unit": "iter/sec",
            "range": "stddev: 0.0015725797480901143",
            "extra": "mean: 78.59530769230798 msec\nrounds: 13"
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
        "date": 1641520131021,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.86750991211618,
            "unit": "iter/sec",
            "range": "stddev: 0.0004192892677960156",
            "extra": "mean: 13.914493506493532 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.13579554900609,
            "unit": "iter/sec",
            "range": "stddev: 0.00047492634345935354",
            "extra": "mean: 14.676573333333412 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.832205168628894,
            "unit": "iter/sec",
            "range": "stddev: 0.0019568173714668608",
            "extra": "mean: 77.92892857142876 msec\nrounds: 14"
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
        "date": 1641522476701,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 61.55324988511468,
            "unit": "iter/sec",
            "range": "stddev: 0.0018038013191619855",
            "extra": "mean: 16.246095890410952 msec\nrounds: 73"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 61.758620841770146,
            "unit": "iter/sec",
            "range": "stddev: 0.0018000291971982164",
            "extra": "mean: 16.192071428571392 msec\nrounds: 70"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.801525154012195,
            "unit": "iter/sec",
            "range": "stddev: 0.0019460865167736634",
            "extra": "mean: 78.1156923076923 msec\nrounds: 13"
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
        "date": 1641524780052,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.9338662749426,
            "unit": "iter/sec",
            "range": "stddev: 0.0004111031517800846",
            "extra": "mean: 13.90165789473684 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.16956770785691,
            "unit": "iter/sec",
            "range": "stddev: 0.00045985272103049395",
            "extra": "mean: 14.8876944444445 msec\nrounds: 72"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.718625840529926,
            "unit": "iter/sec",
            "range": "stddev: 0.0017383060166990456",
            "extra": "mean: 78.62484615384633 msec\nrounds: 13"
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
        "date": 1641569144881,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 68.029846205305,
            "unit": "iter/sec",
            "range": "stddev: 0.0005945428786438053",
            "extra": "mean: 14.699430555555473 msec\nrounds: 72"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 63.998008950832315,
            "unit": "iter/sec",
            "range": "stddev: 0.0007470261603929959",
            "extra": "mean: 15.62548611111119 msec\nrounds: 72"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.32284722228804,
            "unit": "iter/sec",
            "range": "stddev: 0.002449831472487382",
            "extra": "mean: 81.150076923077 msec\nrounds: 13"
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
        "date": 1641570712210,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 63.716102584719934,
            "unit": "iter/sec",
            "range": "stddev: 0.0014364823340985628",
            "extra": "mean: 15.69461971830987 msec\nrounds: 71"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 60.44623135017898,
            "unit": "iter/sec",
            "range": "stddev: 0.0015519739013514478",
            "extra": "mean: 16.54362857142853 msec\nrounds: 70"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.212902837902853,
            "unit": "iter/sec",
            "range": "stddev: 0.004183884250678533",
            "extra": "mean: 81.88061538461528 msec\nrounds: 13"
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
        "date": 1641680300113,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 69.30888596884274,
            "unit": "iter/sec",
            "range": "stddev: 0.0002882447847508427",
            "extra": "mean: 14.428164383561755 msec\nrounds: 73"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 64.10187925342674,
            "unit": "iter/sec",
            "range": "stddev: 0.0006993522153585243",
            "extra": "mean: 15.600166666666674 msec\nrounds: 72"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.489120055029032,
            "unit": "iter/sec",
            "range": "stddev: 0.001613302275077538",
            "extra": "mean: 80.06969230769201 msec\nrounds: 13"
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
        "date": 1641701232959,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 66.65315088884762,
            "unit": "iter/sec",
            "range": "stddev: 0.001066448356382483",
            "extra": "mean: 15.003041666666649 msec\nrounds: 72"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 60.44852807834138,
            "unit": "iter/sec",
            "range": "stddev: 0.001418411916968151",
            "extra": "mean: 16.542999999999974 msec\nrounds: 72"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.461286138927976,
            "unit": "iter/sec",
            "range": "stddev: 0.0023694965223080835",
            "extra": "mean: 80.24853846153863 msec\nrounds: 13"
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
        "date": 1641710665707,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 66.44300555390708,
            "unit": "iter/sec",
            "range": "stddev: 0.001125434139976539",
            "extra": "mean: 15.050493150684941 msec\nrounds: 73"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 64.37630093774796,
            "unit": "iter/sec",
            "range": "stddev: 0.0008550916432229714",
            "extra": "mean: 15.533666666666704 msec\nrounds: 72"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.413400385597368,
            "unit": "iter/sec",
            "range": "stddev: 0.007849803759591595",
            "extra": "mean: 87.61630769230749 msec\nrounds: 13"
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
        "date": 1641834018994,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.78770975762764,
            "unit": "iter/sec",
            "range": "stddev: 0.0007889372338713125",
            "extra": "mean: 13.929961038961093 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 62.53137131297338,
            "unit": "iter/sec",
            "range": "stddev: 0.00160613057498969",
            "extra": "mean: 15.991972972972848 msec\nrounds: 74"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.95795975072587,
            "unit": "iter/sec",
            "range": "stddev: 0.0013906032784448928",
            "extra": "mean: 77.1726428571429 msec\nrounds: 14"
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
        "date": 1641834461241,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 70.83796654024557,
            "unit": "iter/sec",
            "range": "stddev: 0.00045150901352926907",
            "extra": "mean: 14.116723684210562 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 65.10932207118034,
            "unit": "iter/sec",
            "range": "stddev: 0.0008545613994832161",
            "extra": "mean: 15.35878378378378 msec\nrounds: 74"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.045293258192451,
            "unit": "iter/sec",
            "range": "stddev: 0.0011563508251260935",
            "extra": "mean: 76.65599999999996 msec\nrounds: 14"
          }
        ]
      }
    ]
  }
}