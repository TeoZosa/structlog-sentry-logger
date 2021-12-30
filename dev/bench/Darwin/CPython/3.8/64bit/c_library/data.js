window.BENCHMARK_DATA = {
  "lastUpdate": 1640878988393,
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
      }
    ]
  }
}