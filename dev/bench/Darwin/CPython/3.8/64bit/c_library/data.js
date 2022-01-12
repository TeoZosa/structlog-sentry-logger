window.BENCHMARK_DATA = {
  "lastUpdate": 1641972723289,
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
        "date": 1633838800681,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.47635847966937,
            "unit": "iter/sec",
            "range": "stddev: 0.0005483290499572319",
            "extra": "mean: 13.99063999999998 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.85355999285383,
            "unit": "iter/sec",
            "range": "stddev: 0.0007461184738500297",
            "extra": "mean: 14.737620253164573 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.311818588194285,
            "unit": "iter/sec",
            "range": "stddev: 0.0016588749779016347",
            "extra": "mean: 81.22276923076927 msec\nrounds: 13"
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
        "date": 1634095216282,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 66.96281120740274,
            "unit": "iter/sec",
            "range": "stddev: 0.0014895935023053278",
            "extra": "mean: 14.933662162162184 msec\nrounds: 74"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 66.69263233152076,
            "unit": "iter/sec",
            "range": "stddev: 0.0008762413131773995",
            "extra": "mean: 14.994160000000072 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.568878703621346,
            "unit": "iter/sec",
            "range": "stddev: 0.0063960212129151916",
            "extra": "mean: 94.6174166666666 msec\nrounds: 12"
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
        "date": 1634096554903,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.29524007051714,
            "unit": "iter/sec",
            "range": "stddev: 0.0005210948172957451",
            "extra": "mean: 14.026181818181882 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 66.09609502531222,
            "unit": "iter/sec",
            "range": "stddev: 0.0009471489075946897",
            "extra": "mean: 15.129486842105257 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.899673849772528,
            "unit": "iter/sec",
            "range": "stddev: 0.0016827778689001646",
            "extra": "mean: 84.03591666666695 msec\nrounds: 12"
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
        "date": 1634097117124,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 69.94229760447664,
            "unit": "iter/sec",
            "range": "stddev: 0.0008888459109054559",
            "extra": "mean: 14.297499999999934 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.81315417768273,
            "unit": "iter/sec",
            "range": "stddev: 0.000339131894851096",
            "extra": "mean: 14.532105263157911 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.973279324633383,
            "unit": "iter/sec",
            "range": "stddev: 0.0009838159875890133",
            "extra": "mean: 83.51930769230756 msec\nrounds: 13"
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
        "date": 1634098348782,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.98735295872767,
            "unit": "iter/sec",
            "range": "stddev: 0.0002492167671275499",
            "extra": "mean: 13.8913289473684 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.98548672437835,
            "unit": "iter/sec",
            "range": "stddev: 0.000528356218719609",
            "extra": "mean: 14.495802631578972 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.446277557734032,
            "unit": "iter/sec",
            "range": "stddev: 0.0013373186097947124",
            "extra": "mean: 80.34530769230732 msec\nrounds: 13"
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
        "date": 1634132133963,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.98439601829428,
            "unit": "iter/sec",
            "range": "stddev: 0.0002923433862813126",
            "extra": "mean: 13.516363636363645 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.66574378413247,
            "unit": "iter/sec",
            "range": "stddev: 0.00039800190428869366",
            "extra": "mean: 14.151128205128202 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.193863672604078,
            "unit": "iter/sec",
            "range": "stddev: 0.0014627255732244083",
            "extra": "mean: 82.00846153846196 msec\nrounds: 13"
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
        "date": 1634190735484,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 64.13353832637794,
            "unit": "iter/sec",
            "range": "stddev: 0.0010915981032182842",
            "extra": "mean: 15.592465753424722 msec\nrounds: 73"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 64.2256298451292,
            "unit": "iter/sec",
            "range": "stddev: 0.0006497098523665498",
            "extra": "mean: 15.570108108108165 msec\nrounds: 74"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.77636527567737,
            "unit": "iter/sec",
            "range": "stddev: 0.0048912138730092545",
            "extra": "mean: 92.79566666666679 msec\nrounds: 12"
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
        "date": 1634191296010,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.4922046715909,
            "unit": "iter/sec",
            "range": "stddev: 0.0002973416950304392",
            "extra": "mean: 13.794586666666682 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.50820274513235,
            "unit": "iter/sec",
            "range": "stddev: 0.00041836072126380107",
            "extra": "mean: 14.596792207792257 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.058239441388103,
            "unit": "iter/sec",
            "range": "stddev: 0.0011513861100251876",
            "extra": "mean: 82.93084615384643 msec\nrounds: 13"
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
        "date": 1634191592645,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.26543092779762,
            "unit": "iter/sec",
            "range": "stddev: 0.0005781999867551054",
            "extra": "mean: 13.837875000000032 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.34119560430867,
            "unit": "iter/sec",
            "range": "stddev: 0.00039381091821166515",
            "extra": "mean: 14.421441558441527 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.25258034629565,
            "unit": "iter/sec",
            "range": "stddev: 0.00078764338539949",
            "extra": "mean: 81.61546153846135 msec\nrounds: 13"
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
        "date": 1634237814851,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.1584525447106,
            "unit": "iter/sec",
            "range": "stddev: 0.00023328325790989053",
            "extra": "mean: 13.668960526315844 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.42675546888648,
            "unit": "iter/sec",
            "range": "stddev: 0.0008389065927762521",
            "extra": "mean: 14.830907894736857 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.036301485279578,
            "unit": "iter/sec",
            "range": "stddev: 0.0010335811530791383",
            "extra": "mean: 83.08200000000016 msec\nrounds: 13"
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
        "date": 1634250580970,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 67.54961930312489,
            "unit": "iter/sec",
            "range": "stddev: 0.0008084569833962733",
            "extra": "mean: 14.803932432432516 msec\nrounds: 74"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 57.88046372284049,
            "unit": "iter/sec",
            "range": "stddev: 0.002026124796010615",
            "extra": "mean: 17.276986666666687 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.344921540413436,
            "unit": "iter/sec",
            "range": "stddev: 0.0017626200969183782",
            "extra": "mean: 88.14516666666675 msec\nrounds: 12"
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
        "date": 1634252607010,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.84824893527525,
            "unit": "iter/sec",
            "range": "stddev: 0.0006440917863925161",
            "extra": "mean: 13.918223684210503 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.21125486415443,
            "unit": "iter/sec",
            "range": "stddev: 0.0003593982948841278",
            "extra": "mean: 14.242730769230828 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.289634544082912,
            "unit": "iter/sec",
            "range": "stddev: 0.001930317527353823",
            "extra": "mean: 81.36938461538466 msec\nrounds: 13"
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
        "date": 1635032939991,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 70.30615133170792,
            "unit": "iter/sec",
            "range": "stddev: 0.0007159045552264876",
            "extra": "mean: 14.223506493506527 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.33258471190513,
            "unit": "iter/sec",
            "range": "stddev: 0.00044753257388114144",
            "extra": "mean: 14.634306666666697 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.45974543781631,
            "unit": "iter/sec",
            "range": "stddev: 0.0028853078869619485",
            "extra": "mean: 80.25846153846139 msec\nrounds: 13"
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
        "date": 1635033462780,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.5779837423795,
            "unit": "iter/sec",
            "range": "stddev: 0.0008510157475814186",
            "extra": "mean: 13.97077631578948 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.27096637327573,
            "unit": "iter/sec",
            "range": "stddev: 0.0006614128020975354",
            "extra": "mean: 14.436062499999903 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.331532297231696,
            "unit": "iter/sec",
            "range": "stddev: 0.001936408594173797",
            "extra": "mean: 81.09292307692287 msec\nrounds: 13"
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
        "date": 1635061770699,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.66552441561616,
            "unit": "iter/sec",
            "range": "stddev: 0.0005535503882038821",
            "extra": "mean: 13.761684210526324 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.74404828434093,
            "unit": "iter/sec",
            "range": "stddev: 0.00046996970679825115",
            "extra": "mean: 14.338141025641065 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.455722302545622,
            "unit": "iter/sec",
            "range": "stddev: 0.0012410272316688334",
            "extra": "mean: 80.28438461538488 msec\nrounds: 13"
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
        "date": 1635177320432,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.37469593415037,
            "unit": "iter/sec",
            "range": "stddev: 0.0007359365495483726",
            "extra": "mean: 14.010567567567515 msec\nrounds: 74"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 66.96477740819915,
            "unit": "iter/sec",
            "range": "stddev: 0.0009128223865014991",
            "extra": "mean: 14.933223684210445 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.612534390967241,
            "unit": "iter/sec",
            "range": "stddev: 0.006555537580882239",
            "extra": "mean: 86.11384615384611 msec\nrounds: 13"
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
        "date": 1635178306140,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.39785405335178,
            "unit": "iter/sec",
            "range": "stddev: 0.0006310565576510588",
            "extra": "mean: 13.812564102564076 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.97770726723247,
            "unit": "iter/sec",
            "range": "stddev: 0.0006155931552195078",
            "extra": "mean: 14.497437500000022 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.99876975929063,
            "unit": "iter/sec",
            "range": "stddev: 0.001087781695232809",
            "extra": "mean: 76.9303571428572 msec\nrounds: 14"
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
        "date": 1635182975650,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.32166451092502,
            "unit": "iter/sec",
            "range": "stddev: 0.0008038604256436787",
            "extra": "mean: 13.827115384615333 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.3331891704869,
            "unit": "iter/sec",
            "range": "stddev: 0.0007509816440704136",
            "extra": "mean: 14.634177215189888 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.856289862939327,
            "unit": "iter/sec",
            "range": "stddev: 0.003814923506917834",
            "extra": "mean: 92.11250000000011 msec\nrounds: 12"
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
        "date": 1635202611395,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 75.18114530223286,
            "unit": "iter/sec",
            "range": "stddev: 0.0007034566986384727",
            "extra": "mean: 13.301207317073159 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.46056642954997,
            "unit": "iter/sec",
            "range": "stddev: 0.00088634133207288",
            "extra": "mean: 13.800609756097524 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.081166854854091,
            "unit": "iter/sec",
            "range": "stddev: 0.0010260107711733575",
            "extra": "mean: 82.77346153846142 msec\nrounds: 13"
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
        "date": 1635203043503,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 74.54292917855612,
            "unit": "iter/sec",
            "range": "stddev: 0.0006083762792682088",
            "extra": "mean: 13.41508860759488 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.43623803574461,
            "unit": "iter/sec",
            "range": "stddev: 0.0006569525394441724",
            "extra": "mean: 14.197237500000005 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.596985140693727,
            "unit": "iter/sec",
            "range": "stddev: 0.003013679959358035",
            "extra": "mean: 86.22930769230773 msec\nrounds: 13"
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
        "date": 1635203325191,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.05609795251264,
            "unit": "iter/sec",
            "range": "stddev: 0.0011320219800819093",
            "extra": "mean: 13.878075949367021 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 65.72877186611407,
            "unit": "iter/sec",
            "range": "stddev: 0.0017897312254457366",
            "extra": "mean: 15.214037499999934 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.276128904946916,
            "unit": "iter/sec",
            "range": "stddev: 0.003395369131313927",
            "extra": "mean: 88.6829166666668 msec\nrounds: 12"
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
        "date": 1635204976628,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 69.67084989504754,
            "unit": "iter/sec",
            "range": "stddev: 0.0013449117902708807",
            "extra": "mean: 14.35320512820504 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.23233567856008,
            "unit": "iter/sec",
            "range": "stddev: 0.0008105572441776923",
            "extra": "mean: 14.238455696202504 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.703297989373388,
            "unit": "iter/sec",
            "range": "stddev: 0.0016553481918811597",
            "extra": "mean: 85.44600000000014 msec\nrounds: 12"
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
        "date": 1635449611052,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 75.10062533153584,
            "unit": "iter/sec",
            "range": "stddev: 0.0009681311343079979",
            "extra": "mean: 13.315468354430406 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.31422051271325,
            "unit": "iter/sec",
            "range": "stddev: 0.0006271168959867997",
            "extra": "mean: 14.022448717948606 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.024656094835658,
            "unit": "iter/sec",
            "range": "stddev: 0.0029139884069598835",
            "extra": "mean: 83.16246153846176 msec\nrounds: 13"
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
        "date": 1635452680294,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.1497457589149,
            "unit": "iter/sec",
            "range": "stddev: 0.0007637132919145105",
            "extra": "mean: 13.670587499999998 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.23031260197365,
            "unit": "iter/sec",
            "range": "stddev: 0.0007329425012766006",
            "extra": "mean: 14.23886585365843 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.200455358533848,
            "unit": "iter/sec",
            "range": "stddev: 0.0011291839860529242",
            "extra": "mean: 81.9641538461538 msec\nrounds: 13"
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
        "date": 1635946247225,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 75.75365295621425,
            "unit": "iter/sec",
            "range": "stddev: 0.0003794026865638119",
            "extra": "mean: 13.200683544303821 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.7383916073258,
            "unit": "iter/sec",
            "range": "stddev: 0.0003170875750034436",
            "extra": "mean: 13.939537499999954 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.271919299858622,
            "unit": "iter/sec",
            "range": "stddev: 0.001455930106275504",
            "extra": "mean: 81.48684615384656 msec\nrounds: 13"
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
        "date": 1636165405329,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 75.26468876145759,
            "unit": "iter/sec",
            "range": "stddev: 0.0004960715091864909",
            "extra": "mean: 13.286443037974689 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.8501780088162,
            "unit": "iter/sec",
            "range": "stddev: 0.0005542492264888565",
            "extra": "mean: 13.917849999999964 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.177127894379666,
            "unit": "iter/sec",
            "range": "stddev: 0.0009475042085786662",
            "extra": "mean: 75.88907142857147 msec\nrounds: 14"
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
        "date": 1636384039409,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 74.03385815112766,
            "unit": "iter/sec",
            "range": "stddev: 0.0004025202638011693",
            "extra": "mean: 13.507333333333355 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.42398634445611,
            "unit": "iter/sec",
            "range": "stddev: 0.00035538673751759606",
            "extra": "mean: 14.000898734177406 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.848668802060068,
            "unit": "iter/sec",
            "range": "stddev: 0.0013431019952698596",
            "extra": "mean: 84.39766666666682 msec\nrounds: 12"
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
        "date": 1636384876880,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.96986435814321,
            "unit": "iter/sec",
            "range": "stddev: 0.00121773165543641",
            "extra": "mean: 13.704287500000033 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.74761008459149,
            "unit": "iter/sec",
            "range": "stddev: 0.0009502580114219001",
            "extra": "mean: 14.134753086419744 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.625130670939914,
            "unit": "iter/sec",
            "range": "stddev: 0.0035635159280171845",
            "extra": "mean: 86.02053846153869 msec\nrounds: 13"
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
        "date": 1636469030674,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.28984016624803,
            "unit": "iter/sec",
            "range": "stddev: 0.0008679971549603059",
            "extra": "mean: 13.833202531645627 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.40407291243571,
            "unit": "iter/sec",
            "range": "stddev: 0.0018723917831517509",
            "extra": "mean: 14.83589873417731 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.007913214808545,
            "unit": "iter/sec",
            "range": "stddev: 0.003085909780638844",
            "extra": "mean: 83.27841666666676 msec\nrounds: 12"
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
        "date": 1636642482096,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 78.17126150827549,
            "unit": "iter/sec",
            "range": "stddev: 0.00020673053304036065",
            "extra": "mean: 12.792424999999986 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 74.18645952359648,
            "unit": "iter/sec",
            "range": "stddev: 0.00020307343149385558",
            "extra": "mean: 13.479548780487766 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.286138495023652,
            "unit": "iter/sec",
            "range": "stddev: 0.0017867614845200022",
            "extra": "mean: 81.3925384615384 msec\nrounds: 13"
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
        "date": 1636643236525,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 64.85575910718043,
            "unit": "iter/sec",
            "range": "stddev: 0.0029333445766448053",
            "extra": "mean: 15.418831168831176 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 66.1800453587847,
            "unit": "iter/sec",
            "range": "stddev: 0.0014848806336999172",
            "extra": "mean: 15.110294871794926 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.466314569109898,
            "unit": "iter/sec",
            "range": "stddev: 0.008125101163867289",
            "extra": "mean: 95.54461538461521 msec\nrounds: 13"
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
        "date": 1636745511554,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 78.28563882967704,
            "unit": "iter/sec",
            "range": "stddev: 0.0003949841331897037",
            "extra": "mean: 12.773734939759008 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 73.70315352981012,
            "unit": "iter/sec",
            "range": "stddev: 0.0006261417590596984",
            "extra": "mean: 13.567940476190588 msec\nrounds: 84"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.374011149935908,
            "unit": "iter/sec",
            "range": "stddev: 0.00178838659203325",
            "extra": "mean: 80.81453846153835 msec\nrounds: 13"
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
        "date": 1636745924435,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.00763842065705,
            "unit": "iter/sec",
            "range": "stddev: 0.0006856771979247907",
            "extra": "mean: 13.887415584415653 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 66.8863473958356,
            "unit": "iter/sec",
            "range": "stddev: 0.0011183958487878775",
            "extra": "mean: 14.950734177215079 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.704727921498657,
            "unit": "iter/sec",
            "range": "stddev: 0.005058773411039443",
            "extra": "mean: 93.4166666666667 msec\nrounds: 12"
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
        "date": 1637161503073,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 77.35724722803218,
            "unit": "iter/sec",
            "range": "stddev: 0.0003239976637433389",
            "extra": "mean: 12.927037037037003 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 74.91415306272442,
            "unit": "iter/sec",
            "range": "stddev: 0.00025839663818754197",
            "extra": "mean: 13.348612500000046 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.286080437913702,
            "unit": "iter/sec",
            "range": "stddev: 0.002481229616592647",
            "extra": "mean: 81.39292307692313 msec\nrounds: 13"
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
        "date": 1637162072778,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.15798287513036,
            "unit": "iter/sec",
            "range": "stddev: 0.0008126260972659375",
            "extra": "mean: 13.858480519480477 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.06038492863891,
            "unit": "iter/sec",
            "range": "stddev: 0.0007657937515611519",
            "extra": "mean: 14.072538461538473 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.160170017884793,
            "unit": "iter/sec",
            "range": "stddev: 0.0015632785732029467",
            "extra": "mean: 82.23569230769237 msec\nrounds: 13"
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
        "date": 1637162623693,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 76.94953060786342,
            "unit": "iter/sec",
            "range": "stddev: 0.00039149764004456903",
            "extra": "mean: 12.995530864197509 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.35815495202979,
            "unit": "iter/sec",
            "range": "stddev: 0.000587135493174718",
            "extra": "mean: 14.846012345679098 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.867147286131809,
            "unit": "iter/sec",
            "range": "stddev: 0.0021171683973474553",
            "extra": "mean: 84.26624999999962 msec\nrounds: 12"
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
        "date": 1637175302565,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.83036079250319,
            "unit": "iter/sec",
            "range": "stddev: 0.000988509720200276",
            "extra": "mean: 13.730537500000073 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.91099619444276,
            "unit": "iter/sec",
            "range": "stddev: 0.0005810716201791892",
            "extra": "mean: 14.102185185185274 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.159715051108225,
            "unit": "iter/sec",
            "range": "stddev: 0.0020223038493202674",
            "extra": "mean: 82.23876923076918 msec\nrounds: 13"
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
        "date": 1637530309075,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 74.05581183449334,
            "unit": "iter/sec",
            "range": "stddev: 0.0007557955007892513",
            "extra": "mean: 13.503329113924117 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.62820254755896,
            "unit": "iter/sec",
            "range": "stddev: 0.001081366974794997",
            "extra": "mean: 14.15865000000006 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.95716758614218,
            "unit": "iter/sec",
            "range": "stddev: 0.0023029928660391412",
            "extra": "mean: 83.63184615384625 msec\nrounds: 13"
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
        "date": 1637592824927,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 77.1421160275282,
            "unit": "iter/sec",
            "range": "stddev: 0.000268974479696232",
            "extra": "mean: 12.963087499999993 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 73.85760964740604,
            "unit": "iter/sec",
            "range": "stddev: 0.0002859779623425061",
            "extra": "mean: 13.539566265060152 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.476905727379599,
            "unit": "iter/sec",
            "range": "stddev: 0.001808225809162954",
            "extra": "mean: 80.14807692307699 msec\nrounds: 13"
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
        "date": 1637593570023,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 75.42394132213295,
            "unit": "iter/sec",
            "range": "stddev: 0.00025564310833262754",
            "extra": "mean: 13.258389610389571 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.23692671303476,
            "unit": "iter/sec",
            "range": "stddev: 0.0005077903478226697",
            "extra": "mean: 14.237524999999996 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.211457352894206,
            "unit": "iter/sec",
            "range": "stddev: 0.0010612860425459406",
            "extra": "mean: 81.89030769230772 msec\nrounds: 13"
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
        "date": 1637678793509,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 74.23704563553646,
            "unit": "iter/sec",
            "range": "stddev: 0.00047266865297204144",
            "extra": "mean: 13.470363636363663 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.17575427689758,
            "unit": "iter/sec",
            "range": "stddev: 0.000773771810044252",
            "extra": "mean: 14.249935897435847 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.511961887731532,
            "unit": "iter/sec",
            "range": "stddev: 0.0029784124457450634",
            "extra": "mean: 86.8661666666665 msec\nrounds: 12"
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
        "date": 1637938565983,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 60.45997311122268,
            "unit": "iter/sec",
            "range": "stddev: 0.005062753904986545",
            "extra": "mean: 16.539868421052578 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.38365490436861,
            "unit": "iter/sec",
            "range": "stddev: 0.0005433357270004203",
            "extra": "mean: 14.207844155844363 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.425618345675918,
            "unit": "iter/sec",
            "range": "stddev: 0.0026396618955985053",
            "extra": "mean: 87.52261538461549 msec\nrounds: 13"
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
        "date": 1637939922351,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 74.54651655451707,
            "unit": "iter/sec",
            "range": "stddev: 0.00039207886918636673",
            "extra": "mean: 13.414443037974603 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.01965336318446,
            "unit": "iter/sec",
            "range": "stddev: 0.0003310061783765301",
            "extra": "mean: 13.885098765432094 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.419393360401186,
            "unit": "iter/sec",
            "range": "stddev: 0.0008452138934260134",
            "extra": "mean: 80.51923076923113 msec\nrounds: 13"
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
        "date": 1638203563407,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 70.2922470463196,
            "unit": "iter/sec",
            "range": "stddev: 0.0008038928118679209",
            "extra": "mean: 14.226320000000037 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.19029165076314,
            "unit": "iter/sec",
            "range": "stddev: 0.0007705737962017393",
            "extra": "mean: 14.66484415584412 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.768689130981855,
            "unit": "iter/sec",
            "range": "stddev: 0.0017039805434068307",
            "extra": "mean: 84.97123076923103 msec\nrounds: 13"
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
        "date": 1638204483368,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.81796791059796,
            "unit": "iter/sec",
            "range": "stddev: 0.0009520322008228556",
            "extra": "mean: 13.92409210526316 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 64.27733963413976,
            "unit": "iter/sec",
            "range": "stddev: 0.0014490095698539336",
            "extra": "mean: 15.557582278481044 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.468011305694807,
            "unit": "iter/sec",
            "range": "stddev: 0.00679872234886239",
            "extra": "mean: 87.19907692307717 msec\nrounds: 13"
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
        "date": 1638206231851,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 76.82306481241075,
            "unit": "iter/sec",
            "range": "stddev: 0.0002280090400902923",
            "extra": "mean: 13.016924050632907 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.68739396523789,
            "unit": "iter/sec",
            "range": "stddev: 0.000810126715951121",
            "extra": "mean: 14.349797619047559 msec\nrounds: 84"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.659793372695594,
            "unit": "iter/sec",
            "range": "stddev: 0.003096108206384384",
            "extra": "mean: 78.99023076923051 msec\nrounds: 13"
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
        "date": 1638207804485,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 76.40727203793655,
            "unit": "iter/sec",
            "range": "stddev: 0.00035349475806470247",
            "extra": "mean: 13.08775949367091 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 57.48586628361705,
            "unit": "iter/sec",
            "range": "stddev: 0.002727993772281095",
            "extra": "mean: 17.395580246913507 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.392235216063384,
            "unit": "iter/sec",
            "range": "stddev: 0.001123929370898925",
            "extra": "mean: 80.69569230769233 msec\nrounds: 13"
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
        "date": 1638209119302,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.44833243669142,
            "unit": "iter/sec",
            "range": "stddev: 0.00045069456612476395",
            "extra": "mean: 13.615012987012976 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.74111292095476,
            "unit": "iter/sec",
            "range": "stddev: 0.000376783340459288",
            "extra": "mean: 14.136051282051323 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.85767866785364,
            "unit": "iter/sec",
            "range": "stddev: 0.0018177913161941544",
            "extra": "mean: 84.33353846153852 msec\nrounds: 13"
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
        "date": 1638282481785,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 75.18493143604167,
            "unit": "iter/sec",
            "range": "stddev: 0.0006179089880907106",
            "extra": "mean: 13.300537499999987 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.79439716802892,
            "unit": "iter/sec",
            "range": "stddev: 0.0003749350219424608",
            "extra": "mean: 13.737320987654211 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.556322349770891,
            "unit": "iter/sec",
            "range": "stddev: 0.0009477440623355",
            "extra": "mean: 79.64115384615357 msec\nrounds: 13"
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
        "date": 1638370919854,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.81356273961953,
            "unit": "iter/sec",
            "range": "stddev: 0.0007791789903061317",
            "extra": "mean: 13.733705128205148 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.67940804653759,
            "unit": "iter/sec",
            "range": "stddev: 0.0006046761459491474",
            "extra": "mean: 14.148392405063268 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.539659887757594,
            "unit": "iter/sec",
            "range": "stddev: 0.0036047475597737215",
            "extra": "mean: 86.65766666666653 msec\nrounds: 12"
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
        "date": 1638372713971,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.55222801557822,
            "unit": "iter/sec",
            "range": "stddev: 0.0008006260878863888",
            "extra": "mean: 13.975805194805138 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.1132418745039,
            "unit": "iter/sec",
            "range": "stddev: 0.0004271977848560133",
            "extra": "mean: 14.262641025641146 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.136001635559575,
            "unit": "iter/sec",
            "range": "stddev: 0.0017399648279672417",
            "extra": "mean: 82.39946153846175 msec\nrounds: 13"
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
        "date": 1638455505451,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 70.91963010475419,
            "unit": "iter/sec",
            "range": "stddev: 0.00116535464873107",
            "extra": "mean: 14.10046835443046 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.26732926491414,
            "unit": "iter/sec",
            "range": "stddev: 0.000639159832938064",
            "extra": "mean: 14.436820512820441 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.536531388017789,
            "unit": "iter/sec",
            "range": "stddev: 0.0021728198617270295",
            "extra": "mean: 86.68116666666654 msec\nrounds: 12"
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
        "date": 1638805223825,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 67.80371441075458,
            "unit": "iter/sec",
            "range": "stddev: 0.0009096859571686409",
            "extra": "mean: 14.748454545454615 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.59745361417775,
            "unit": "iter/sec",
            "range": "stddev: 0.000606797264459721",
            "extra": "mean: 14.36834177215198 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.332058704393903,
            "unit": "iter/sec",
            "range": "stddev: 0.002987049090529357",
            "extra": "mean: 81.0894615384616 msec\nrounds: 13"
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
        "date": 1638806292354,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 77.30544153002953,
            "unit": "iter/sec",
            "range": "stddev: 0.00042638588334867686",
            "extra": "mean: 12.935699999999962 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 73.38490561985151,
            "unit": "iter/sec",
            "range": "stddev: 0.0004949094199299668",
            "extra": "mean: 13.626780487804947 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.948672180825689,
            "unit": "iter/sec",
            "range": "stddev: 0.0015767847762991841",
            "extra": "mean: 83.69130769230769 msec\nrounds: 13"
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
        "date": 1638807921771,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.34425609500389,
            "unit": "iter/sec",
            "range": "stddev: 0.0008888934547175185",
            "extra": "mean: 13.822797468354372 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.84897039494264,
            "unit": "iter/sec",
            "range": "stddev: 0.0007766393111459449",
            "extra": "mean: 14.524545454545475 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.766942133799189,
            "unit": "iter/sec",
            "range": "stddev: 0.002598053433058687",
            "extra": "mean: 84.98384615384612 msec\nrounds: 13"
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
        "date": 1638973813696,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 67.84988856299941,
            "unit": "iter/sec",
            "range": "stddev: 0.0014567043468188508",
            "extra": "mean: 14.738417721519003 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.65361613892141,
            "unit": "iter/sec",
            "range": "stddev: 0.0006474899825910476",
            "extra": "mean: 14.356756410256422 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.546699664568392,
            "unit": "iter/sec",
            "range": "stddev: 0.0029411234969384924",
            "extra": "mean: 86.6048333333332 msec\nrounds: 12"
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
        "date": 1638975080050,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 77.34137192545033,
            "unit": "iter/sec",
            "range": "stddev: 0.0004586028277748824",
            "extra": "mean: 12.929690476190466 msec\nrounds: 84"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.413327885991,
            "unit": "iter/sec",
            "range": "stddev: 0.0007414323100940394",
            "extra": "mean: 14.002988372093045 msec\nrounds: 86"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.8372882879,
            "unit": "iter/sec",
            "range": "stddev: 0.0017152453273414935",
            "extra": "mean: 77.89807142857163 msec\nrounds: 14"
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
        "date": 1639147037725,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.87882140569553,
            "unit": "iter/sec",
            "range": "stddev: 0.0008474580445620442",
            "extra": "mean: 13.91230379746825 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.57681674988739,
            "unit": "iter/sec",
            "range": "stddev: 0.0009923825836074096",
            "extra": "mean: 14.582187500000021 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.955232355913594,
            "unit": "iter/sec",
            "range": "stddev: 0.002745883645099449",
            "extra": "mean: 91.2805833333333 msec\nrounds: 12"
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
        "date": 1639255394333,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 78.69228412786005,
            "unit": "iter/sec",
            "range": "stddev: 0.0002598066635756809",
            "extra": "mean: 12.70772619047618 msec\nrounds: 84"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 74.95253740792919,
            "unit": "iter/sec",
            "range": "stddev: 0.001233310434566641",
            "extra": "mean: 13.341776470588313 msec\nrounds: 85"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.552551740652738,
            "unit": "iter/sec",
            "range": "stddev: 0.0016892982498433503",
            "extra": "mean: 79.66507692307664 msec\nrounds: 13"
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
        "date": 1639409837084,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 76.30420579244293,
            "unit": "iter/sec",
            "range": "stddev: 0.0004003436132905171",
            "extra": "mean: 13.105437500000017 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.50156175206918,
            "unit": "iter/sec",
            "range": "stddev: 0.0010282031400602968",
            "extra": "mean: 14.598207317073228 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.179218131670485,
            "unit": "iter/sec",
            "range": "stddev: 0.0013753410765781776",
            "extra": "mean: 82.10707692307679 msec\nrounds: 13"
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
        "date": 1639412230426,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.54930258014213,
            "unit": "iter/sec",
            "range": "stddev: 0.0009748294862902951",
            "extra": "mean: 13.976376623376636 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 66.59755709645064,
            "unit": "iter/sec",
            "range": "stddev: 0.0009099241775816024",
            "extra": "mean: 15.015565789473916 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.017230029663843,
            "unit": "iter/sec",
            "range": "stddev: 0.003584001330619259",
            "extra": "mean: 90.76691666666707 msec\nrounds: 12"
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
        "date": 1639413158456,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.82618392616855,
            "unit": "iter/sec",
            "range": "stddev: 0.0009722755219104635",
            "extra": "mean: 13.73132500000005 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.58811800885393,
            "unit": "iter/sec",
            "range": "stddev: 0.0009557597101034003",
            "extra": "mean: 14.795500000000025 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.617173041366948,
            "unit": "iter/sec",
            "range": "stddev: 0.006555243329012299",
            "extra": "mean: 86.07946153846167 msec\nrounds: 13"
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
        "date": 1639413826281,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 74.0607107929245,
            "unit": "iter/sec",
            "range": "stddev: 0.0003803060145049921",
            "extra": "mean: 13.502435897435872 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.21312561218598,
            "unit": "iter/sec",
            "range": "stddev: 0.0008584894062798633",
            "extra": "mean: 14.448126582278427 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.952528235549376,
            "unit": "iter/sec",
            "range": "stddev: 0.0013694477222963052",
            "extra": "mean: 83.66430769230782 msec\nrounds: 13"
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
        "date": 1639419072142,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 77.2062158724397,
            "unit": "iter/sec",
            "range": "stddev: 0.0002506083623221499",
            "extra": "mean: 12.952325000000032 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 73.25099680137318,
            "unit": "iter/sec",
            "range": "stddev: 0.0003105088018872533",
            "extra": "mean: 13.651691358024683 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.658930437229772,
            "unit": "iter/sec",
            "range": "stddev: 0.000910104347356301",
            "extra": "mean: 78.99561538461505 msec\nrounds: 13"
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
        "date": 1639579154790,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.19759766688139,
            "unit": "iter/sec",
            "range": "stddev: 0.0010092471376278187",
            "extra": "mean: 14.04541772151906 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.82534305948728,
            "unit": "iter/sec",
            "range": "stddev: 0.000800651254715925",
            "extra": "mean: 14.529531645569534 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.60619035506233,
            "unit": "iter/sec",
            "range": "stddev: 0.0028947170205026957",
            "extra": "mean: 86.16091666666703 msec\nrounds: 12"
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
        "date": 1639669309125,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.16599582203423,
            "unit": "iter/sec",
            "range": "stddev: 0.0005465328888866086",
            "extra": "mean: 13.667551282051244 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.45096748145947,
            "unit": "iter/sec",
            "range": "stddev: 0.0004483202899909496",
            "extra": "mean: 14.194269230769176 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.8814885494439,
            "unit": "iter/sec",
            "range": "stddev: 0.0016601859642510894",
            "extra": "mean: 84.16453846153847 msec\nrounds: 13"
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
        "date": 1639669928695,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 74.05470111428919,
            "unit": "iter/sec",
            "range": "stddev: 0.0007656892125005206",
            "extra": "mean: 13.50353164556957 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 74.09515806214067,
            "unit": "iter/sec",
            "range": "stddev: 0.00023631353255144368",
            "extra": "mean: 13.49615853658534 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.884323480315064,
            "unit": "iter/sec",
            "range": "stddev: 0.003085266671763654",
            "extra": "mean: 84.144461538461 msec\nrounds: 13"
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
        "date": 1639670540394,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 75.38203903644589,
            "unit": "iter/sec",
            "range": "stddev: 0.0003669586441866562",
            "extra": "mean: 13.265759493670867 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.1435990414302,
            "unit": "iter/sec",
            "range": "stddev: 0.0007155467308189697",
            "extra": "mean: 14.256468354430341 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.22842318245655,
            "unit": "iter/sec",
            "range": "stddev: 0.002335502065389165",
            "extra": "mean: 81.77669230769223 msec\nrounds: 13"
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
        "date": 1639752626288,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.38215316385137,
            "unit": "iter/sec",
            "range": "stddev: 0.0011535594409480176",
            "extra": "mean: 14.009103896103962 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.6734154132602,
            "unit": "iter/sec",
            "range": "stddev: 0.000934184571279822",
            "extra": "mean: 14.77685135135142 msec\nrounds: 74"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.219178812206804,
            "unit": "iter/sec",
            "range": "stddev: 0.002443293621261685",
            "extra": "mean: 89.13308333333363 msec\nrounds: 12"
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
        "date": 1640012021910,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 76.97467533181525,
            "unit": "iter/sec",
            "range": "stddev: 0.000451781735643398",
            "extra": "mean: 12.991285714285812 msec\nrounds: 84"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 74.50143097260764,
            "unit": "iter/sec",
            "range": "stddev: 0.00034959952741584697",
            "extra": "mean: 13.422560975609658 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.288949115242877,
            "unit": "iter/sec",
            "range": "stddev: 0.0010047597939757836",
            "extra": "mean: 81.37392307692342 msec\nrounds: 13"
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
        "date": 1640013227418,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.0841318622762,
            "unit": "iter/sec",
            "range": "stddev: 0.001074834354968198",
            "extra": "mean: 13.682860759493671 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.31766673520366,
            "unit": "iter/sec",
            "range": "stddev: 0.0007705814281585912",
            "extra": "mean: 14.221177215189972 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.999812366570238,
            "unit": "iter/sec",
            "range": "stddev: 0.0032995568572987215",
            "extra": "mean: 83.33463636363656 msec\nrounds: 11"
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
        "date": 1640724780755,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 69.12905576076997,
            "unit": "iter/sec",
            "range": "stddev: 0.0015042899013132714",
            "extra": "mean: 14.465697368421019 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 65.40310111319445,
            "unit": "iter/sec",
            "range": "stddev: 0.0011257111963713041",
            "extra": "mean: 15.28979487179484 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.716170612152272,
            "unit": "iter/sec",
            "range": "stddev: 0.005289256649238349",
            "extra": "mean: 93.31691666666704 msec\nrounds: 12"
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
        "date": 1640791032440,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.73766784772951,
            "unit": "iter/sec",
            "range": "stddev: 0.0007230081179314117",
            "extra": "mean: 13.5615897435898 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 64.36663233779669,
            "unit": "iter/sec",
            "range": "stddev: 0.0010400235827285364",
            "extra": "mean: 15.535999999999856 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.374979027382397,
            "unit": "iter/sec",
            "range": "stddev: 0.0036975338986703645",
            "extra": "mean: 87.91225000000017 msec\nrounds: 12"
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
        "date": 1640793797690,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.23935827488843,
            "unit": "iter/sec",
            "range": "stddev: 0.0005154210560104046",
            "extra": "mean: 13.653860759493709 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.74173079264655,
            "unit": "iter/sec",
            "range": "stddev: 0.0010547268196410306",
            "extra": "mean: 14.761949367088674 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.819190030907166,
            "unit": "iter/sec",
            "range": "stddev: 0.0025330284365967263",
            "extra": "mean: 84.60816666666678 msec\nrounds: 12"
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
        "date": 1640877571147,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 57.581760491284484,
            "unit": "iter/sec",
            "range": "stddev: 0.0018959323713500147",
            "extra": "mean: 17.366610389610422 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.11287324790295,
            "unit": "iter/sec",
            "range": "stddev: 0.0009202805845351694",
            "extra": "mean: 14.681512499999961 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.097941209589392,
            "unit": "iter/sec",
            "range": "stddev: 0.0034758836858322754",
            "extra": "mean: 82.65869230769226 msec\nrounds: 13"
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
        "date": 1640878986557,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.65877531817698,
            "unit": "iter/sec",
            "range": "stddev: 0.001043525905299715",
            "extra": "mean: 13.762962500000064 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.29062394592232,
            "unit": "iter/sec",
            "range": "stddev: 0.0016808621504963597",
            "extra": "mean: 14.860911392405033 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.802473798508187,
            "unit": "iter/sec",
            "range": "stddev: 0.0023608054063531474",
            "extra": "mean: 84.72799999999985 msec\nrounds: 13"
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
        "date": 1641222759533,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.58169516609739,
            "unit": "iter/sec",
            "range": "stddev: 0.0008633026988822514",
            "extra": "mean: 13.970051948051953 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 66.53415981673629,
            "unit": "iter/sec",
            "range": "stddev: 0.0008294680619665421",
            "extra": "mean: 15.029873417721518 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.794279032112955,
            "unit": "iter/sec",
            "range": "stddev: 0.005059478024340682",
            "extra": "mean: 92.64166666666688 msec\nrounds: 12"
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
        "date": 1641224258435,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 77.46015885142069,
            "unit": "iter/sec",
            "range": "stddev: 0.000603769944110664",
            "extra": "mean: 12.909862500000013 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 66.18809220399959,
            "unit": "iter/sec",
            "range": "stddev: 0.0008275587121048116",
            "extra": "mean: 15.10845783132532 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.836043483802845,
            "unit": "iter/sec",
            "range": "stddev: 0.003798724969965063",
            "extra": "mean: 84.4876923076922 msec\nrounds: 13"
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
        "date": 1641446749043,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.00212573437446,
            "unit": "iter/sec",
            "range": "stddev: 0.0010541301861785183",
            "extra": "mean: 14.084085365853591 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.71624594103942,
            "unit": "iter/sec",
            "range": "stddev: 0.000682480573423478",
            "extra": "mean: 14.343858974359037 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.948463519502669,
            "unit": "iter/sec",
            "range": "stddev: 0.001975115193005657",
            "extra": "mean: 83.6927692307691 msec\nrounds: 13"
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
        "date": 1641482330263,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 70.42667869566247,
            "unit": "iter/sec",
            "range": "stddev: 0.0010558012442906197",
            "extra": "mean: 14.19916455696198 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.68376800421305,
            "unit": "iter/sec",
            "range": "stddev: 0.0007688644440136594",
            "extra": "mean: 14.350544303797413 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.003726695457155,
            "unit": "iter/sec",
            "range": "stddev: 0.0016028899221604638",
            "extra": "mean: 83.30746153846145 msec\nrounds: 13"
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
        "date": 1641494997171,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.18270447578475,
            "unit": "iter/sec",
            "range": "stddev: 0.0009057514476071755",
            "extra": "mean: 13.853734177215149 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.70611249792748,
            "unit": "iter/sec",
            "range": "stddev: 0.0005956026220443259",
            "extra": "mean: 13.945812499999954 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.9274809160306,
            "unit": "iter/sec",
            "range": "stddev: 0.0026641991291944203",
            "extra": "mean: 83.83999999999953 msec\nrounds: 13"
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
        "date": 1641498505443,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 68.2067498157472,
            "unit": "iter/sec",
            "range": "stddev: 0.0006288597917781304",
            "extra": "mean: 14.661305555555522 msec\nrounds: 72"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 62.3933223760404,
            "unit": "iter/sec",
            "range": "stddev: 0.0009941802369828844",
            "extra": "mean: 16.02735616438353 msec\nrounds: 73"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.224191675325521,
            "unit": "iter/sec",
            "range": "stddev: 0.0014629983481422792",
            "extra": "mean: 81.80499999999965 msec\nrounds: 13"
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
        "date": 1641507048101,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 70.41201495398983,
            "unit": "iter/sec",
            "range": "stddev: 0.0003873242580783886",
            "extra": "mean: 14.202121621621567 msec\nrounds: 74"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 62.09877061217653,
            "unit": "iter/sec",
            "range": "stddev: 0.0013933401250891533",
            "extra": "mean: 16.103378378378345 msec\nrounds: 74"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.256561276390135,
            "unit": "iter/sec",
            "range": "stddev: 0.0045091853192774575",
            "extra": "mean: 88.83707692307698 msec\nrounds: 13"
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
        "date": 1641512535974,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 68.88443079756861,
            "unit": "iter/sec",
            "range": "stddev: 0.0003336499882931296",
            "extra": "mean: 14.517068493150655 msec\nrounds: 73"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 65.38789157627244,
            "unit": "iter/sec",
            "range": "stddev: 0.0005623232734845122",
            "extra": "mean: 15.293351351351323 msec\nrounds: 74"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.450828819798287,
            "unit": "iter/sec",
            "range": "stddev: 0.005678686606683076",
            "extra": "mean: 87.32992307692324 msec\nrounds: 13"
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
        "date": 1641520294843,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 59.41729715020841,
            "unit": "iter/sec",
            "range": "stddev: 0.0012042474405721468",
            "extra": "mean: 16.830115942029057 msec\nrounds: 69"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 60.773754072926685,
            "unit": "iter/sec",
            "range": "stddev: 0.0013078895791870126",
            "extra": "mean: 16.454471428571452 msec\nrounds: 70"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.958253736206919,
            "unit": "iter/sec",
            "range": "stddev: 0.0034848665847683562",
            "extra": "mean: 83.62424999999989 msec\nrounds: 12"
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
        "date": 1641522710498,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 66.2859865660402,
            "unit": "iter/sec",
            "range": "stddev: 0.0006433991139747547",
            "extra": "mean: 15.086144927536202 msec\nrounds: 69"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 63.53729102048046,
            "unit": "iter/sec",
            "range": "stddev: 0.0008711391870990729",
            "extra": "mean: 15.73878873239437 msec\nrounds: 71"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.281340958681488,
            "unit": "iter/sec",
            "range": "stddev: 0.0023655658686215475",
            "extra": "mean: 81.42433333333325 msec\nrounds: 12"
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
        "date": 1641524727886,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 66.92178634041497,
            "unit": "iter/sec",
            "range": "stddev: 0.000743796003328444",
            "extra": "mean: 14.942816901408483 msec\nrounds: 71"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 65.7202344386808,
            "unit": "iter/sec",
            "range": "stddev: 0.0005381188279959931",
            "extra": "mean: 15.216013888888872 msec\nrounds: 72"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.250779102432537,
            "unit": "iter/sec",
            "range": "stddev: 0.0024367553431894843",
            "extra": "mean: 81.6274615384615 msec\nrounds: 13"
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
        "date": 1641568628047,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 67.92896677249946,
            "unit": "iter/sec",
            "range": "stddev: 0.0006601492892477684",
            "extra": "mean: 14.721260273972584 msec\nrounds: 73"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 57.14585422484032,
            "unit": "iter/sec",
            "range": "stddev: 0.0014700059594873875",
            "extra": "mean: 17.499082191780715 msec\nrounds: 73"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.904738284249506,
            "unit": "iter/sec",
            "range": "stddev: 0.0019719442105946045",
            "extra": "mean: 84.00016666666617 msec\nrounds: 12"
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
        "date": 1641570261953,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 63.18457370881008,
            "unit": "iter/sec",
            "range": "stddev: 0.0017845647256290818",
            "extra": "mean: 15.826647887323894 msec\nrounds: 71"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 61.79286335944304,
            "unit": "iter/sec",
            "range": "stddev: 0.0007649696754947376",
            "extra": "mean: 16.183098591549285 msec\nrounds: 71"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.723458100768315,
            "unit": "iter/sec",
            "range": "stddev: 0.01055288553817504",
            "extra": "mean: 93.25350000000017 msec\nrounds: 12"
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
        "date": 1641680163095,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 69.12588399524589,
            "unit": "iter/sec",
            "range": "stddev: 0.00044591982180706074",
            "extra": "mean: 14.466361111111066 msec\nrounds: 72"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 65.75166766044701,
            "unit": "iter/sec",
            "range": "stddev: 0.00039571366708329714",
            "extra": "mean: 15.20873972602753 msec\nrounds: 73"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.721339067721555,
            "unit": "iter/sec",
            "range": "stddev: 0.001360493076151521",
            "extra": "mean: 78.60807692307695 msec\nrounds: 13"
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
        "date": 1641700856096,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 66.3446376719395,
            "unit": "iter/sec",
            "range": "stddev: 0.0010740288851062785",
            "extra": "mean: 15.072808219178059 msec\nrounds: 73"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 64.91888648318559,
            "unit": "iter/sec",
            "range": "stddev: 0.0007208326431083471",
            "extra": "mean: 15.403837837837939 msec\nrounds: 74"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.716286922472731,
            "unit": "iter/sec",
            "range": "stddev: 0.0018363133530989464",
            "extra": "mean: 78.63930769230757 msec\nrounds: 13"
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
        "date": 1641710616222,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 66.89231674849836,
            "unit": "iter/sec",
            "range": "stddev: 0.0006696433270834248",
            "extra": "mean: 14.94939999999998 msec\nrounds: 70"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 63.393479757390956,
            "unit": "iter/sec",
            "range": "stddev: 0.0008069003810567561",
            "extra": "mean: 15.774492957746359 msec\nrounds: 71"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.977757304685165,
            "unit": "iter/sec",
            "range": "stddev: 0.0024157410479201825",
            "extra": "mean: 83.48808333333358 msec\nrounds: 12"
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
        "date": 1641833703226,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 70.40172521280337,
            "unit": "iter/sec",
            "range": "stddev: 0.0009713286161368883",
            "extra": "mean: 14.204197368421 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.70867682296803,
            "unit": "iter/sec",
            "range": "stddev: 0.000494711188071806",
            "extra": "mean: 14.769155844155877 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.699610666221508,
            "unit": "iter/sec",
            "range": "stddev: 0.0010589548340978103",
            "extra": "mean: 78.74257142857185 msec\nrounds: 14"
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
        "date": 1641834423620,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 67.86824887663921,
            "unit": "iter/sec",
            "range": "stddev: 0.00048482640501204815",
            "extra": "mean: 14.73443055555553 msec\nrounds: 72"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 65.4679543210622,
            "unit": "iter/sec",
            "range": "stddev: 0.00045350194249574685",
            "extra": "mean: 15.274648648648586 msec\nrounds: 74"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.192568134758547,
            "unit": "iter/sec",
            "range": "stddev: 0.007142718086742129",
            "extra": "mean: 89.34499999999979 msec\nrounds: 13"
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
        "date": 1641835401048,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 68.57364010487085,
            "unit": "iter/sec",
            "range": "stddev: 0.0004132093333847849",
            "extra": "mean: 14.5828630136986 msec\nrounds: 73"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 63.25910931174087,
            "unit": "iter/sec",
            "range": "stddev: 0.0011139883552153433",
            "extra": "mean: 15.808000000000007 msec\nrounds: 73"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.97278310105401,
            "unit": "iter/sec",
            "range": "stddev: 0.0013446231575789387",
            "extra": "mean: 77.08446153846141 msec\nrounds: 13"
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
        "date": 1641835635456,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 70.31256866461736,
            "unit": "iter/sec",
            "range": "stddev: 0.0004571519899348693",
            "extra": "mean: 14.22220833333343 msec\nrounds: 72"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 64.36209231463732,
            "unit": "iter/sec",
            "range": "stddev: 0.0006743917251944841",
            "extra": "mean: 15.537095890410924 msec\nrounds: 73"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.867599751471484,
            "unit": "iter/sec",
            "range": "stddev: 0.0015433619503831548",
            "extra": "mean: 77.71457142857153 msec\nrounds: 14"
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
        "date": 1641836289075,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 67.71749374772737,
            "unit": "iter/sec",
            "range": "stddev: 0.0006608803161218785",
            "extra": "mean: 14.767232876712312 msec\nrounds: 73"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 63.54920597843474,
            "unit": "iter/sec",
            "range": "stddev: 0.0010045642281167025",
            "extra": "mean: 15.735837837837774 msec\nrounds: 74"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.38875139492576,
            "unit": "iter/sec",
            "range": "stddev: 0.0019728637196748597",
            "extra": "mean: 80.7183846153846 msec\nrounds: 13"
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
        "date": 1641847340623,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 68.30160470825743,
            "unit": "iter/sec",
            "range": "stddev: 0.0008242166214798012",
            "extra": "mean: 14.640944444444415 msec\nrounds: 72"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 65.31360187955995,
            "unit": "iter/sec",
            "range": "stddev: 0.0006384061787722384",
            "extra": "mean: 15.310746478873222 msec\nrounds: 71"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.441048569853631,
            "unit": "iter/sec",
            "range": "stddev: 0.002049437665212129",
            "extra": "mean: 80.37907692307684 msec\nrounds: 13"
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
        "date": 1641848961894,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 68.72539468344104,
            "unit": "iter/sec",
            "range": "stddev: 0.0005521150435266808",
            "extra": "mean: 14.550662162162071 msec\nrounds: 74"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 55.82149356905773,
            "unit": "iter/sec",
            "range": "stddev: 0.0023361418263454603",
            "extra": "mean: 17.914246575342574 msec\nrounds: 73"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.751529280743146,
            "unit": "iter/sec",
            "range": "stddev: 0.004102351569214195",
            "extra": "mean: 85.09530769230759 msec\nrounds: 13"
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
          "id": "590e6dcd1d545b7bb26b12bb64eb321af832003d",
          "message": "Merge pull request #406 from TeoZosa/perf/improve-perf-for-default-json-logging\n\n⚡ Improve JSON-only logging performance",
          "timestamp": "2022-01-11T03:31:15Z",
          "tree_id": "a1c0965db83e7a864fc92fbdcd47762b969f04f4"
        },
        "date": 1641872230508,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)]",
            "value": 114.48835447943011,
            "unit": "iter/sec",
            "range": "stddev: 0.0003133791802435156",
            "extra": "mean: 8.734512820512833 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)]",
            "value": 189.40559332984404,
            "unit": "iter/sec",
            "range": "stddev: 0.00022066366974083813",
            "extra": "mean: 5.279675126903621 msec\nrounds: 197"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)]",
            "value": 107.37081469523231,
            "unit": "iter/sec",
            "range": "stddev: 0.00036243222372655675",
            "extra": "mean: 9.313517857142644 msec\nrounds: 112"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)]",
            "value": 181.8818967520299,
            "unit": "iter/sec",
            "range": "stddev: 0.00030104538015866475",
            "extra": "mean: 5.498073298429243 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)]",
            "value": 13.276610595114622,
            "unit": "iter/sec",
            "range": "stddev: 0.0008041619349245516",
            "extra": "mean: 75.32042857142837 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)]",
            "value": 155.48934993934503,
            "unit": "iter/sec",
            "range": "stddev: 0.00026384682371519727",
            "extra": "mean: 6.431308641975098 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 465.3858562671524,
            "unit": "iter/sec",
            "range": "stddev: 0.00009458492749113079",
            "extra": "mean: 2.1487546012269765 msec\nrounds: 489"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 446.72792267876497,
            "unit": "iter/sec",
            "range": "stddev: 0.00010979714829850811",
            "extra": "mean: 2.2384989816700673 msec\nrounds: 491"
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
          "id": "c45dba8f9e61490723081853b07497d24835b1e1",
          "message": ":bookmark: Bump version number to `0.16.1`",
          "timestamp": "2022-01-11T08:14:18Z",
          "tree_id": "17442a7c1e60c3535f4b5cb02613662b737bb8e6"
        },
        "date": 1641890669152,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)]",
            "value": 113.77366562765849,
            "unit": "iter/sec",
            "range": "stddev: 0.00040291155473210383",
            "extra": "mean: 8.789380165289312 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)]",
            "value": 187.73431764646662,
            "unit": "iter/sec",
            "range": "stddev: 0.00038970205272809816",
            "extra": "mean: 5.32667661691539 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)]",
            "value": 104.80702522417587,
            "unit": "iter/sec",
            "range": "stddev: 0.0006277718075223625",
            "extra": "mean: 9.54134513274335 msec\nrounds: 113"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)]",
            "value": 181.5175805390723,
            "unit": "iter/sec",
            "range": "stddev: 0.0003649954696773832",
            "extra": "mean: 5.509108247422604 msec\nrounds: 194"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)]",
            "value": 12.976756774793932,
            "unit": "iter/sec",
            "range": "stddev: 0.0026543845254208406",
            "extra": "mean: 77.06085714285723 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)]",
            "value": 149.74804661482113,
            "unit": "iter/sec",
            "range": "stddev: 0.0007011458557391351",
            "extra": "mean: 6.6778834355828325 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 460.8776050166067,
            "unit": "iter/sec",
            "range": "stddev: 0.0001731785835187508",
            "extra": "mean: 2.16977346938775 msec\nrounds: 490"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 427.8127102884699,
            "unit": "iter/sec",
            "range": "stddev: 0.0002704205915301766",
            "extra": "mean: 2.337471458773887 msec\nrounds: 473"
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
          "id": "20f3d86b28a503cbad7fb04fba8ef61810743b28",
          "message": "Merge pull request #407 from TeoZosa/feat_and_perf/make-sentry-integration-opt-in\n\n💥 ✨ ⚡ Make Sentry integration opt-in",
          "timestamp": "2022-01-11T09:13:35Z",
          "tree_id": "522dbf40e1d8e2775b1ce9487077f9d3c6442d98"
        },
        "date": 1641892968878,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.93934082455901,
            "unit": "iter/sec",
            "range": "stddev: 0.0003817196580926347",
            "extra": "mean: 8.478934959349592 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.68844850538045,
            "unit": "iter/sec",
            "range": "stddev: 0.00039684442979200985",
            "extra": "mean: 7.158788079470169 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 181.57375248545904,
            "unit": "iter/sec",
            "range": "stddev: 0.0003521610291890101",
            "extra": "mean: 5.5074039408866815 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 270.7207092882602,
            "unit": "iter/sec",
            "range": "stddev: 0.00020376068808678388",
            "extra": "mean: 3.693843749999975 msec\nrounds: 288"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.86409311950521,
            "unit": "iter/sec",
            "range": "stddev: 0.0005842926497347793",
            "extra": "mean: 9.185765217391314 msec\nrounds: 115"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 130.6448687113083,
            "unit": "iter/sec",
            "range": "stddev: 0.0004183268528966911",
            "extra": "mean: 7.65433812949626 msec\nrounds: 139"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 185.0899342248838,
            "unit": "iter/sec",
            "range": "stddev: 0.00021107054809706532",
            "extra": "mean: 5.402778947368379 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 265.9609584403063,
            "unit": "iter/sec",
            "range": "stddev: 0.00026152080070065633",
            "extra": "mean: 3.7599503546098303 msec\nrounds: 282"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.618597556823628,
            "unit": "iter/sec",
            "range": "stddev: 0.0010284462515417756",
            "extra": "mean: 73.42899999999985 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.719571604828346,
            "unit": "iter/sec",
            "range": "stddev: 0.003924090899129142",
            "extra": "mean: 78.61900000000003 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 152.62096811043963,
            "unit": "iter/sec",
            "range": "stddev: 0.00036756793168384326",
            "extra": "mean: 6.552179640718696 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 212.52150119875355,
            "unit": "iter/sec",
            "range": "stddev: 0.0002089218536852568",
            "extra": "mean: 4.705406250000012 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 458.1250946539357,
            "unit": "iter/sec",
            "range": "stddev: 0.00010557744709071996",
            "extra": "mean: 2.1828099173554167 msec\nrounds: 484"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 455.8294436538659,
            "unit": "iter/sec",
            "range": "stddev: 0.0000750356692833204",
            "extra": "mean: 2.193802997858449 msec\nrounds: 467"
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
          "id": "1aaa6b5ba961c55f8fe88b707c1a9bd05359de73",
          "message": "Merge pull request #408 from TeoZosa/dependabot/pip/dot-github/workflows/tox-gh-actions-2.9.1",
          "timestamp": "2022-01-11T14:11:00Z",
          "tree_id": "1dedf895825787161142ea470f987716779393dd"
        },
        "date": 1641913402500,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.47982926311474,
            "unit": "iter/sec",
            "range": "stddev: 0.00037291026511406417",
            "extra": "mean: 8.585177419354842 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.4424044823815,
            "unit": "iter/sec",
            "range": "stddev: 0.00024278803572364536",
            "extra": "mean: 6.971439189189179 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.96273849305487,
            "unit": "iter/sec",
            "range": "stddev: 0.0002461293383965517",
            "extra": "mean: 5.077102439024329 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 277.0814460852673,
            "unit": "iter/sec",
            "range": "stddev: 0.0003160902910479767",
            "extra": "mean: 3.609047138047151 msec\nrounds: 297"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 101.16185275271425,
            "unit": "iter/sec",
            "range": "stddev: 0.0009820565312969591",
            "extra": "mean: 9.88514912280676 msec\nrounds: 114"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 125.61638892972144,
            "unit": "iter/sec",
            "range": "stddev: 0.0006283168718801193",
            "extra": "mean: 7.960744680851078 msec\nrounds: 141"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 184.42191892927553,
            "unit": "iter/sec",
            "range": "stddev: 0.0001637310017723567",
            "extra": "mean: 5.422348958333378 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 265.6387869781369,
            "unit": "iter/sec",
            "range": "stddev: 0.0002811285369284786",
            "extra": "mean: 3.7645104895103434 msec\nrounds: 286"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.233078594034792,
            "unit": "iter/sec",
            "range": "stddev: 0.0038787613350791932",
            "extra": "mean: 81.7455714285715 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.139272534790726,
            "unit": "iter/sec",
            "range": "stddev: 0.004865551204896072",
            "extra": "mean: 76.10771428571539 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 150.86984430418931,
            "unit": "iter/sec",
            "range": "stddev: 0.00039312272651882143",
            "extra": "mean: 6.628229813664839 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 216.32022224056695,
            "unit": "iter/sec",
            "range": "stddev: 0.00019420287307947206",
            "extra": "mean: 4.6227763157894355 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 482.9313066220353,
            "unit": "iter/sec",
            "range": "stddev: 0.00013945255798410082",
            "extra": "mean: 2.0706878727633344 msec\nrounds: 503"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 450.09162252073645,
            "unit": "iter/sec",
            "range": "stddev: 0.00015125265384019091",
            "extra": "mean: 2.2217698574337015 msec\nrounds: 491"
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
          "id": "f1fdacf014859d56ff1364cb7ae900ac5f555439",
          "message": "Merge pull request #409 from TeoZosa/dependabot/pip/tox-gh-actions-2.9.1",
          "timestamp": "2022-01-11T15:23:55Z",
          "tree_id": "5d47f0cafda9548c3698d048202d657e1c345529"
        },
        "date": 1641915504509,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.39482230873037,
            "unit": "iter/sec",
            "range": "stddev: 0.00017933436878475047",
            "extra": "mean: 8.375572580645134 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.02792741733828,
            "unit": "iter/sec",
            "range": "stddev: 0.00013314505346858312",
            "extra": "mean: 6.895223684210554 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 191.34192224595398,
            "unit": "iter/sec",
            "range": "stddev: 0.0003207567042267201",
            "extra": "mean: 5.226246231155679 msec\nrounds: 199"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 279.1581110733969,
            "unit": "iter/sec",
            "range": "stddev: 0.00020760303497989035",
            "extra": "mean: 3.5821993355481534 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.05145926842455,
            "unit": "iter/sec",
            "range": "stddev: 0.0004949392499017063",
            "extra": "mean: 9.254849557522135 msec\nrounds: 113"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.39382258268319,
            "unit": "iter/sec",
            "range": "stddev: 0.0002037346080499599",
            "extra": "mean: 7.331710344827318 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 189.40235825262664,
            "unit": "iter/sec",
            "range": "stddev: 0.000188262653459504",
            "extra": "mean: 5.279765306122486 msec\nrounds: 196"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 263.19423995497385,
            "unit": "iter/sec",
            "range": "stddev: 0.0002635758028641976",
            "extra": "mean: 3.799475247524702 msec\nrounds: 303"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.162934672877833,
            "unit": "iter/sec",
            "range": "stddev: 0.004217825446838289",
            "extra": "mean: 82.21700000000027 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.33592431291412,
            "unit": "iter/sec",
            "range": "stddev: 0.0013030935213088604",
            "extra": "mean: 74.98542857142861 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 146.94573735657826,
            "unit": "iter/sec",
            "range": "stddev: 0.0006595699082236904",
            "extra": "mean: 6.805233128834502 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 180.39296804157195,
            "unit": "iter/sec",
            "range": "stddev: 0.0006892017955579148",
            "extra": "mean: 5.543453333333635 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 467.7281680583745,
            "unit": "iter/sec",
            "range": "stddev: 0.00015794109369114383",
            "extra": "mean: 2.137993963782818 msec\nrounds: 497"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 445.4318837070809,
            "unit": "iter/sec",
            "range": "stddev: 0.00022340283134924868",
            "extra": "mean: 2.245012170385196 msec\nrounds: 493"
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
          "id": "d50fe8319858673f32ef03adb1309f323b3dd99f",
          "message": "Merge pull request #410 from TeoZosa/perf/make-cloud-logging-mode-a-logger-configuration-time-option\n\n⚡  Make Cloud Logging mode a logger configuration-time option",
          "timestamp": "2022-01-11T22:21:05Z",
          "tree_id": "4cf3b14fb57f6546638edb620383fd7565db1d1b"
        },
        "date": 1641940261426,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 131.196462786711,
            "unit": "iter/sec",
            "range": "stddev: 0.00021826533671236178",
            "extra": "mean: 7.622156716417897 msec\nrounds: 134"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 164.6087365846273,
            "unit": "iter/sec",
            "range": "stddev: 0.00023338357692874982",
            "extra": "mean: 6.075011695906482 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 224.4671002017448,
            "unit": "iter/sec",
            "range": "stddev: 0.00014701223015805117",
            "extra": "mean: 4.454995850622331 msec\nrounds: 241"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 341.8335334162674,
            "unit": "iter/sec",
            "range": "stddev: 0.0003037684786424012",
            "extra": "mean: 2.925400530503984 msec\nrounds: 377"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.75009201497248,
            "unit": "iter/sec",
            "range": "stddev: 0.0005554737779663799",
            "extra": "mean: 8.213546153846215 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 152.2250069005603,
            "unit": "iter/sec",
            "range": "stddev: 0.0004049255730566293",
            "extra": "mean: 6.569222891566308 msec\nrounds: 166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 208.62798649608175,
            "unit": "iter/sec",
            "range": "stddev: 0.00020085412985400834",
            "extra": "mean: 4.793220779220725 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 338.074025350046,
            "unit": "iter/sec",
            "range": "stddev: 0.0001849908555191342",
            "extra": "mean: 2.9579320652173373 msec\nrounds: 368"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.233889372313977,
            "unit": "iter/sec",
            "range": "stddev: 0.0016907722608600422",
            "extra": "mean: 70.25486666666652 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.314766445042096,
            "unit": "iter/sec",
            "range": "stddev: 0.003189855291537695",
            "extra": "mean: 69.85793333333419 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 171.6414067729727,
            "unit": "iter/sec",
            "range": "stddev: 0.0005815068689400438",
            "extra": "mean: 5.826099999999905 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 246.61239929200835,
            "unit": "iter/sec",
            "range": "stddev: 0.0003663714344451509",
            "extra": "mean: 4.054946153846554 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 440.7997899770733,
            "unit": "iter/sec",
            "range": "stddev: 0.00015468445321863941",
            "extra": "mean: 2.268603621730427 msec\nrounds: 497"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 424.11955595914725,
            "unit": "iter/sec",
            "range": "stddev: 0.0002297179928954357",
            "extra": "mean: 2.3578257261410593 msec\nrounds: 482"
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
          "id": "eed196312eabc3a79c04bec3ada421c6b4a7b9e5",
          "message": ":bento: Update `.mutmut-cache`",
          "timestamp": "2022-01-11T23:38:54Z",
          "tree_id": "8c11c50884ab7c6dea0427dcbbce38bbc2646540"
        },
        "date": 1641944868469,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 130.34386745970022,
            "unit": "iter/sec",
            "range": "stddev: 0.00021363152475417318",
            "extra": "mean: 7.672014184397132 msec\nrounds: 141"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 156.64636276639487,
            "unit": "iter/sec",
            "range": "stddev: 0.00029849757724576887",
            "extra": "mean: 6.383806060606014 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 218.72035164092875,
            "unit": "iter/sec",
            "range": "stddev: 0.00022534320832618053",
            "extra": "mean: 4.572048245614066 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 337.81792081959605,
            "unit": "iter/sec",
            "range": "stddev: 0.00007694258331053462",
            "extra": "mean: 2.9601745152354635 msec\nrounds: 361"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.54856185926218,
            "unit": "iter/sec",
            "range": "stddev: 0.0005083849725527424",
            "extra": "mean: 8.36480158730177 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.55143057421495,
            "unit": "iter/sec",
            "range": "stddev: 0.0002653363046489854",
            "extra": "mean: 6.6422484076433 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 186.57897736146674,
            "unit": "iter/sec",
            "range": "stddev: 0.00047092377084128457",
            "extra": "mean: 5.3596606334842365 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 317.66231340949014,
            "unit": "iter/sec",
            "range": "stddev: 0.00019694355259507147",
            "extra": "mean: 3.147996969696957 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.895037160733935,
            "unit": "iter/sec",
            "range": "stddev: 0.0019484988375103845",
            "extra": "mean: 77.54921428571393 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.367362819826146,
            "unit": "iter/sec",
            "range": "stddev: 0.003743063625186335",
            "extra": "mean: 74.80907142857112 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 169.3072256159183,
            "unit": "iter/sec",
            "range": "stddev: 0.00040350144651833214",
            "extra": "mean: 5.9064224598928154 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 250.44815771298082,
            "unit": "iter/sec",
            "range": "stddev: 0.000107209507563428",
            "extra": "mean: 3.9928423076923663 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 494.69085619503704,
            "unit": "iter/sec",
            "range": "stddev: 0.00009930548820036184",
            "extra": "mean: 2.0214644913625404 msec\nrounds: 521"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 471.68629191918905,
            "unit": "iter/sec",
            "range": "stddev: 0.00008710585876873229",
            "extra": "mean: 2.120053130929918 msec\nrounds: 527"
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
          "id": "66974ac83e46d35a72c4c7efee7045bba6b5cb1f",
          "message": ":bento: Update `.mutmut-cache`",
          "timestamp": "2022-01-12T01:22:19Z",
          "tree_id": "0fc04ad99adfb211e92f89623bd4e9213057c9fb"
        },
        "date": 1641951126316,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 122.27422353460963,
            "unit": "iter/sec",
            "range": "stddev: 0.0006764659474821037",
            "extra": "mean: 8.178338582677245 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.469476197682,
            "unit": "iter/sec",
            "range": "stddev: 0.0002647740257370168",
            "extra": "mean: 6.690329192546591 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.5716549844488,
            "unit": "iter/sec",
            "range": "stddev: 0.00029937229232947194",
            "extra": "mean: 4.864483870967758 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 315.40706870679736,
            "unit": "iter/sec",
            "range": "stddev: 0.00019622198534210628",
            "extra": "mean: 3.1705059880240056 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.54549672078768,
            "unit": "iter/sec",
            "range": "stddev: 0.0007372373587800671",
            "extra": "mean: 9.046049180327701 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.90527854855065,
            "unit": "iter/sec",
            "range": "stddev: 0.0004565862841957405",
            "extra": "mean: 7.304320261438061 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.4000498622932,
            "unit": "iter/sec",
            "range": "stddev: 0.00048632975715288317",
            "extra": "mean: 5.09164840182655 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 301.12209040779913,
            "unit": "iter/sec",
            "range": "stddev: 0.00025140140012815343",
            "extra": "mean: 3.320912121212147 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.490712126512042,
            "unit": "iter/sec",
            "range": "stddev: 0.000986160110599466",
            "extra": "mean: 74.12507142857143 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.073182805801496,
            "unit": "iter/sec",
            "range": "stddev: 0.0012063348780887108",
            "extra": "mean: 76.49246666666585 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 155.656775939454,
            "unit": "iter/sec",
            "range": "stddev: 0.0005379600598437952",
            "extra": "mean: 6.424391061452867 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 234.13135416764277,
            "unit": "iter/sec",
            "range": "stddev: 0.00023995598239346942",
            "extra": "mean: 4.271106719367367 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 455.99467853295,
            "unit": "iter/sec",
            "range": "stddev: 0.00011432790955344758",
            "extra": "mean: 2.193008048289626 msec\nrounds: 497"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 445.0390635120101,
            "unit": "iter/sec",
            "range": "stddev: 0.00015976099976031734",
            "extra": "mean: 2.2469937629936014 msec\nrounds: 481"
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
          "id": "307743181ca10a177ae0922b61186eb7acf60f97",
          "message": ":bookmark: Bump version number to `0.17.0`",
          "timestamp": "2022-01-12T03:33:21Z",
          "tree_id": "5983054aa39534315fe2a94c66194c3c7091b6e2"
        },
        "date": 1641958759754,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.16515272313816,
            "unit": "iter/sec",
            "range": "stddev: 0.000532175581253289",
            "extra": "mean: 8.053789473684189 msec\nrounds: 133"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 156.3325659933701,
            "unit": "iter/sec",
            "range": "stddev: 0.0005005939313184994",
            "extra": "mean: 6.396619883040932 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 213.79482261683174,
            "unit": "iter/sec",
            "range": "stddev: 0.00023523299513168565",
            "extra": "mean: 4.677381742738571 msec\nrounds: 241"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 341.44018559777777,
            "unit": "iter/sec",
            "range": "stddev: 0.00016885899155905232",
            "extra": "mean: 2.9287706666666837 msec\nrounds: 375"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.68554177746893,
            "unit": "iter/sec",
            "range": "stddev: 0.0009374659435424663",
            "extra": "mean: 9.286297709923677 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.61822337626816,
            "unit": "iter/sec",
            "range": "stddev: 0.0004863013385765588",
            "extra": "mean: 7.011726666666647 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.43514778110438,
            "unit": "iter/sec",
            "range": "stddev: 0.00021286823910133154",
            "extra": "mean: 4.915571428571414 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 326.1476991496914,
            "unit": "iter/sec",
            "range": "stddev: 0.00015655707137230234",
            "extra": "mean: 3.0660955223879474 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.600704379374793,
            "unit": "iter/sec",
            "range": "stddev: 0.0032941022030561246",
            "extra": "mean: 79.36064285714295 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.500104625810891,
            "unit": "iter/sec",
            "range": "stddev: 0.001089349117592823",
            "extra": "mean: 74.07349999999978 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 169.3789251213414,
            "unit": "iter/sec",
            "range": "stddev: 0.0002524123932438154",
            "extra": "mean: 5.9039222222222145 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 241.95178233067932,
            "unit": "iter/sec",
            "range": "stddev: 0.00017996501444088913",
            "extra": "mean: 4.133054901960938 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 480.6284362744215,
            "unit": "iter/sec",
            "range": "stddev: 0.00007559574879353106",
            "extra": "mean: 2.080609311740839 msec\nrounds: 494"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 456.30613215963024,
            "unit": "iter/sec",
            "range": "stddev: 0.00006228552897067884",
            "extra": "mean: 2.191511201629367 msec\nrounds: 491"
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
          "id": "285367a1132fdc775a747d977d8ce5ef2b16694d",
          "message": "Merge pull request #411 from TeoZosa/fix/only-create-logdir-on-local-logfile-configuration\n\n🐛  Fix log output directory creation on library import",
          "timestamp": "2022-01-12T07:19:03Z",
          "tree_id": "2e7522ae348c7406c1ac615ee670e1faeeef17cb"
        },
        "date": 1641972715806,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 125.51570056588211,
            "unit": "iter/sec",
            "range": "stddev: 0.00028447365754425964",
            "extra": "mean: 7.967130769230807 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.06012887219606,
            "unit": "iter/sec",
            "range": "stddev: 0.00021050371413494794",
            "extra": "mean: 6.449111111111109 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 213.800945643474,
            "unit": "iter/sec",
            "range": "stddev: 0.00019026038443140979",
            "extra": "mean: 4.677247787610634 msec\nrounds: 226"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 338.8044321609596,
            "unit": "iter/sec",
            "range": "stddev: 0.00020674454237869366",
            "extra": "mean: 2.9515552486188223 msec\nrounds: 362"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.08882627089353,
            "unit": "iter/sec",
            "range": "stddev: 0.0005022095840705647",
            "extra": "mean: 8.54052459016394 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.05493230286507,
            "unit": "iter/sec",
            "range": "stddev: 0.00024318151946537463",
            "extra": "mean: 6.893939999999906 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 207.5580216810789,
            "unit": "iter/sec",
            "range": "stddev: 0.0001916738714538157",
            "extra": "mean: 4.817929906542179 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 335.5184296176858,
            "unit": "iter/sec",
            "range": "stddev: 0.0000771260659868004",
            "extra": "mean: 2.980462209302401 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.523316612718336,
            "unit": "iter/sec",
            "range": "stddev: 0.0015045400322997802",
            "extra": "mean: 73.94635714285691 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.809751341617376,
            "unit": "iter/sec",
            "range": "stddev: 0.0016851428002216133",
            "extra": "mean: 72.41259999999983 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 169.43534513887758,
            "unit": "iter/sec",
            "range": "stddev: 0.00031871113768930316",
            "extra": "mean: 5.901956284152817 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 245.84458202739228,
            "unit": "iter/sec",
            "range": "stddev: 0.00019129659971490012",
            "extra": "mean: 4.067610486891181 msec\nrounds: 267"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 460.2420945329938,
            "unit": "iter/sec",
            "range": "stddev: 0.00010817703838364199",
            "extra": "mean: 2.172769531250063 msec\nrounds: 512"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 448.90784698490137,
            "unit": "iter/sec",
            "range": "stddev: 0.00014276816797930558",
            "extra": "mean: 2.227628691983266 msec\nrounds: 474"
          }
        ]
      }
    ]
  }
}