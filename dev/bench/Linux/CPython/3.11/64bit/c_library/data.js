window.BENCHMARK_DATA = {
  "lastUpdate": 1679421711468,
  "repoUrl": "https://github.com/TeoZosa/structlog-sentry-logger",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4843153269187517c009b0c426df18ed8dbc5f04",
          "message": "Merge pull request #729 from TeoZosa/ci/fix-benchmarks-output-capture\n\n💚 Fix benchmarks output capture",
          "timestamp": "2022-12-16T13:08:52+09:00",
          "tree_id": "fd541630e7b95c41ac449f78e2ea1fa5e4636b80",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/4843153269187517c009b0c426df18ed8dbc5f04"
        },
        "date": 1671164107991,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 281.6736872597812,
            "unit": "iter/sec",
            "range": "stddev: 0.000016416293705822623",
            "extra": "mean: 3.5502073684210442 msec\nrounds: 285"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 374.6559022786722,
            "unit": "iter/sec",
            "range": "stddev: 0.000011910253576102503",
            "extra": "mean: 2.669115831134542 msec\nrounds: 379"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 534.8851395956239,
            "unit": "iter/sec",
            "range": "stddev: 0.000012112954158721316",
            "extra": "mean: 1.8695602587800542 msec\nrounds: 541"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1029.4829055848409,
            "unit": "iter/sec",
            "range": "stddev: 0.000008361424546014531",
            "extra": "mean: 971.3614423076875 usec\nrounds: 1040"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 264.4609509150613,
            "unit": "iter/sec",
            "range": "stddev: 0.00007271729870908869",
            "extra": "mean: 3.781276579925694 msec\nrounds: 269"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 340.04858233445907,
            "unit": "iter/sec",
            "range": "stddev: 0.000012463674003137874",
            "extra": "mean: 2.940756268221808 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 520.227812308529,
            "unit": "iter/sec",
            "range": "stddev: 0.000012813314007767529",
            "extra": "mean: 1.922234790874531 msec\nrounds: 526"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 940.4374529412091,
            "unit": "iter/sec",
            "range": "stddev: 0.000007903081319473054",
            "extra": "mean: 1.0633349372385261 msec\nrounds: 956"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.838524358597603,
            "unit": "iter/sec",
            "range": "stddev: 0.000081605720213135",
            "extra": "mean: 47.98804285714299 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.79111257397701,
            "unit": "iter/sec",
            "range": "stddev: 0.0000793773170562091",
            "extra": "mean: 45.8902681818184 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 383.97459387795243,
            "unit": "iter/sec",
            "range": "stddev: 0.00008788734650145964",
            "extra": "mean: 2.6043389743589476 msec\nrounds: 390"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 610.8719214744997,
            "unit": "iter/sec",
            "range": "stddev: 0.000010902790402017698",
            "extra": "mean: 1.637004361873824 msec\nrounds: 619"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1299.8826743827142,
            "unit": "iter/sec",
            "range": "stddev: 0.00004907192012078575",
            "extra": "mean: 769.3001989390142 usec\nrounds: 1508"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1173.2614486055438,
            "unit": "iter/sec",
            "range": "stddev: 0.000017861511589313373",
            "extra": "mean: 852.3249452954665 usec\nrounds: 1371"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f744c5e05fd7585611008a82be81c94012afb433",
          "message": "Merge pull request #730 from TeoZosa/dependabot/pip/sentry-sdk-1.12.0",
          "timestamp": "2022-12-16T05:17:17Z",
          "tree_id": "d2bd8f8aaea1217a0bb5c77f90187dd926f13069",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/f744c5e05fd7585611008a82be81c94012afb433"
        },
        "date": 1671168272469,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 239.45772580789904,
            "unit": "iter/sec",
            "range": "stddev: 0.00001356561320566788",
            "extra": "mean: 4.176102469135755 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 321.7778353326052,
            "unit": "iter/sec",
            "range": "stddev: 0.000016234082944615597",
            "extra": "mean: 3.1077342507645107 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 471.3350240513442,
            "unit": "iter/sec",
            "range": "stddev: 0.000010241624034596066",
            "extra": "mean: 2.1216331249999927 msec\nrounds: 480"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 902.7601427785851,
            "unit": "iter/sec",
            "range": "stddev: 0.000011825343780087303",
            "extra": "mean: 1.1077139459459548 msec\nrounds: 925"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 225.67315183338872,
            "unit": "iter/sec",
            "range": "stddev: 0.00008388192543452664",
            "extra": "mean: 4.431187280701808 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 293.0186096414849,
            "unit": "iter/sec",
            "range": "stddev: 0.000014287887116705997",
            "extra": "mean: 3.4127525252526563 msec\nrounds: 297"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 453.0073066548745,
            "unit": "iter/sec",
            "range": "stddev: 0.000011141457998272397",
            "extra": "mean: 2.2074699134198603 msec\nrounds: 462"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 821.4889053791825,
            "unit": "iter/sec",
            "range": "stddev: 0.00000873270782646341",
            "extra": "mean: 1.2173018934910877 msec\nrounds: 845"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.082408642015274,
            "unit": "iter/sec",
            "range": "stddev: 0.0000764714123369468",
            "extra": "mean: 49.794823809523365 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.884024745381126,
            "unit": "iter/sec",
            "range": "stddev: 0.0004969179347802992",
            "extra": "mean: 47.88349047619128 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 339.50005993217235,
            "unit": "iter/sec",
            "range": "stddev: 0.00001326046759552184",
            "extra": "mean: 2.9455075801747634 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 566.9626803471031,
            "unit": "iter/sec",
            "range": "stddev: 0.000008992706320970607",
            "extra": "mean: 1.7637845217392174 msec\nrounds: 575"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1223.2255893137892,
            "unit": "iter/sec",
            "range": "stddev: 0.00004196369382244992",
            "extra": "mean: 817.5106936415423 usec\nrounds: 1384"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1101.0581914954162,
            "unit": "iter/sec",
            "range": "stddev: 0.000026837398449308718",
            "extra": "mean: 908.2172111556042 usec\nrounds: 1255"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "533926cc3c6885e1451164ee8d4f11ff6e6ad936",
          "message": "Merge pull request #731 from TeoZosa/fix/flaky-documentation-build-test-ci-job\n\n💚  Fix flaky documentation building CI job",
          "timestamp": "2022-12-18T13:16:59+09:00",
          "tree_id": "9edc29e2aac79ddcfb6c05c59a921113f839ed13",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/533926cc3c6885e1451164ee8d4f11ff6e6ad936"
        },
        "date": 1671338100847,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 241.1801696919958,
            "unit": "iter/sec",
            "range": "stddev: 0.000014980879513418818",
            "extra": "mean: 4.146277868852447 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 323.0594199842376,
            "unit": "iter/sec",
            "range": "stddev: 0.000013130627990273122",
            "extra": "mean: 3.0954057926829406 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 477.2745381376587,
            "unit": "iter/sec",
            "range": "stddev: 0.00000994187617368501",
            "extra": "mean: 2.0952301455301465 msec\nrounds: 481"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 903.8471650095304,
            "unit": "iter/sec",
            "range": "stddev: 0.000006910706162536541",
            "extra": "mean: 1.1063817409765906 msec\nrounds: 942"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 226.93982986419374,
            "unit": "iter/sec",
            "range": "stddev: 0.000019657598578860342",
            "extra": "mean: 4.406454347826136 msec\nrounds: 230"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 294.7423853304849,
            "unit": "iter/sec",
            "range": "stddev: 0.000013450604127469079",
            "extra": "mean: 3.3927933333332185 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 456.5111054953828,
            "unit": "iter/sec",
            "range": "stddev: 0.00001305780994885431",
            "extra": "mean: 2.1905272138228717 msec\nrounds: 463"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 841.642130863741,
            "unit": "iter/sec",
            "range": "stddev: 0.00001005352903672249",
            "extra": "mean: 1.188153448275864 msec\nrounds: 870"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.26939766878775,
            "unit": "iter/sec",
            "range": "stddev: 0.00018165188843403856",
            "extra": "mean: 49.335457142856825 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.03157049046343,
            "unit": "iter/sec",
            "range": "stddev: 0.00008866281821195353",
            "extra": "mean: 47.54756666666622 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 341.65456393226975,
            "unit": "iter/sec",
            "range": "stddev: 0.000011164813308513022",
            "extra": "mean: 2.926932947976781 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 570.6902835540793,
            "unit": "iter/sec",
            "range": "stddev: 0.000010485050427236658",
            "extra": "mean: 1.7522639316238486 msec\nrounds: 585"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1208.9390766997353,
            "unit": "iter/sec",
            "range": "stddev: 0.00004098409547761951",
            "extra": "mean: 827.1715417867748 usec\nrounds: 1388"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1098.9310717702047,
            "unit": "iter/sec",
            "range": "stddev: 0.000011740345549095447",
            "extra": "mean: 909.9751801440628 usec\nrounds: 1249"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d0d76d790b384fea42cba8f5141ddd0bb0ac7f5d",
          "message": "Merge pull request #732 from TeoZosa/ci/add-cp311-musllinux_aarch64-wheel-builds\n\n👷 📦 Build Python 3.11 `musllinux-aarch64` wheels",
          "timestamp": "2022-12-18T16:55:31+09:00",
          "tree_id": "acfeb7a91edcc721e75ca15348383fb888c00b60",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/d0d76d790b384fea42cba8f5141ddd0bb0ac7f5d"
        },
        "date": 1671350433164,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 248.8520219226786,
            "unit": "iter/sec",
            "range": "stddev: 0.00005624643587013699",
            "extra": "mean: 4.018452380952374 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 330.8540350019868,
            "unit": "iter/sec",
            "range": "stddev: 0.000011746384044351105",
            "extra": "mean: 3.0224808955223863 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 476.2567719612421,
            "unit": "iter/sec",
            "range": "stddev: 0.000010514285065097204",
            "extra": "mean: 2.0997076763485483 msec\nrounds: 482"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 908.4359609794102,
            "unit": "iter/sec",
            "range": "stddev: 0.000009700011505559909",
            "extra": "mean: 1.1007930585683465 msec\nrounds: 922"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 235.45548267032902,
            "unit": "iter/sec",
            "range": "stddev: 0.000011013963022454952",
            "extra": "mean: 4.247087341772124 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 299.3601695070149,
            "unit": "iter/sec",
            "range": "stddev: 0.000017613817130022475",
            "extra": "mean: 3.3404577557755792 msec\nrounds: 303"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 456.64036957295633,
            "unit": "iter/sec",
            "range": "stddev: 0.000012779887004955541",
            "extra": "mean: 2.189907127429811 msec\nrounds: 463"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 825.3439388890448,
            "unit": "iter/sec",
            "range": "stddev: 0.000010336456046066098",
            "extra": "mean: 1.2116160946744836 msec\nrounds: 845"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.866215889881644,
            "unit": "iter/sec",
            "range": "stddev: 0.00008561531534833557",
            "extra": "mean: 53.004800000000074 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.552465570797036,
            "unit": "iter/sec",
            "range": "stddev: 0.00007977008062630713",
            "extra": "mean: 51.14444499999884 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 344.1941421124406,
            "unit": "iter/sec",
            "range": "stddev: 0.000012332052355554045",
            "extra": "mean: 2.9053370689653466 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 549.3659015588142,
            "unit": "iter/sec",
            "range": "stddev: 0.000012422946445059878",
            "extra": "mean: 1.8202804308795302 msec\nrounds: 557"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1158.9025815248253,
            "unit": "iter/sec",
            "range": "stddev: 0.00004915489046309627",
            "extra": "mean: 862.885298507361 usec\nrounds: 1340"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1053.546818818861,
            "unit": "iter/sec",
            "range": "stddev: 0.00001741403240771101",
            "extra": "mean: 949.1747135842594 usec\nrounds: 1222"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9d72d14953ea2a29ef0b30386a253ba0a188d3e5",
          "message": "Merge pull request #733 from TeoZosa/ci/build-against-optimized-orjson-builds\n\n👷 :package: Only build against optimized `orjson` wheels",
          "timestamp": "2022-12-18T18:59:38+09:00",
          "tree_id": "9f499c76659a3218cc6865c50285593f74700fa0",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/9d72d14953ea2a29ef0b30386a253ba0a188d3e5"
        },
        "date": 1671357959247,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 152.04931696275312,
            "unit": "iter/sec",
            "range": "stddev: 0.00034253422348891197",
            "extra": "mean: 6.576813496932483 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 204.64080061276266,
            "unit": "iter/sec",
            "range": "stddev: 0.0004042839187300868",
            "extra": "mean: 4.88661106194692 msec\nrounds: 226"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 290.10846354855624,
            "unit": "iter/sec",
            "range": "stddev: 0.0007353547150417903",
            "extra": "mean: 3.4469866468843198 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 593.4795305253649,
            "unit": "iter/sec",
            "range": "stddev: 0.0003746742716473544",
            "extra": "mean: 1.684978080229274 msec\nrounds: 698"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 141.32406694980494,
            "unit": "iter/sec",
            "range": "stddev: 0.0013497503519623718",
            "extra": "mean: 7.0759356249999295 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 180.98258964642403,
            "unit": "iter/sec",
            "range": "stddev: 0.0010475520100070516",
            "extra": "mean: 5.5253933649288935 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 271.7367393765234,
            "unit": "iter/sec",
            "range": "stddev: 0.0003015066355901425",
            "extra": "mean: 3.680032380952292 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 502.29234579262504,
            "unit": "iter/sec",
            "range": "stddev: 0.0003687969425542481",
            "extra": "mean: 1.9908724637680564 msec\nrounds: 621"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.942683695047243,
            "unit": "iter/sec",
            "range": "stddev: 0.0041726664777461085",
            "extra": "mean: 77.26372857142978 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.982944676519477,
            "unit": "iter/sec",
            "range": "stddev: 0.00446171247348398",
            "extra": "mean: 77.02412857143008 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 194.02787423583223,
            "unit": "iter/sec",
            "range": "stddev: 0.0004407813980355501",
            "extra": "mean: 5.15389865470847 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 298.6192383263656,
            "unit": "iter/sec",
            "range": "stddev: 0.0008113356933008922",
            "extra": "mean: 3.348746067415404 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 667.5776349720879,
            "unit": "iter/sec",
            "range": "stddev: 0.0004714119436769867",
            "extra": "mean: 1.4979531182793608 msec\nrounds: 930"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 595.2200899465959,
            "unit": "iter/sec",
            "range": "stddev: 0.0005167805521712161",
            "extra": "mean: 1.6800508196719663 msec\nrounds: 854"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "992b57a5e182e832fa82ad21a3a99115c40cef80",
          "message": "Merge pull request #734 from TeoZosa/lint/configure-black-for-line-length-120\n\n🔧 Configure Black with a max line length of 120",
          "timestamp": "2022-12-18T20:04:35+09:00",
          "tree_id": "cdd82cda1745c1bfe3d142fdf075904bac8adae2",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/992b57a5e182e832fa82ad21a3a99115c40cef80"
        },
        "date": 1671361928023,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 248.19960967136464,
            "unit": "iter/sec",
            "range": "stddev: 0.00004444835197095358",
            "extra": "mean: 4.0290152000000194 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 329.6118538320891,
            "unit": "iter/sec",
            "range": "stddev: 0.000012069008276585359",
            "extra": "mean: 3.033871471471472 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 480.0265022039209,
            "unit": "iter/sec",
            "range": "stddev: 0.00001097212090474534",
            "extra": "mean: 2.083218312757216 msec\nrounds: 486"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 912.4444386511254,
            "unit": "iter/sec",
            "range": "stddev: 0.000008827098215176633",
            "extra": "mean: 1.0959571428571682 msec\nrounds: 924"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 234.66598861068334,
            "unit": "iter/sec",
            "range": "stddev: 0.00001153683359022145",
            "extra": "mean: 4.261375949367016 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 299.9050958216536,
            "unit": "iter/sec",
            "range": "stddev: 0.00001238589602556631",
            "extra": "mean: 3.33438815789471 msec\nrounds: 304"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 460.17400883985846,
            "unit": "iter/sec",
            "range": "stddev: 0.000011238879312803478",
            "extra": "mean: 2.173091006424055 msec\nrounds: 467"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 835.7025550101195,
            "unit": "iter/sec",
            "range": "stddev: 0.000007735328260307596",
            "extra": "mean: 1.1965979929161412 msec\nrounds: 847"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.87827477209704,
            "unit": "iter/sec",
            "range": "stddev: 0.00004589504107540501",
            "extra": "mean: 52.97094210526304 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.569144195337135,
            "unit": "iter/sec",
            "range": "stddev: 0.0000670859972454101",
            "extra": "mean: 51.10085499999926 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 345.343175187464,
            "unit": "iter/sec",
            "range": "stddev: 0.00001155822673621116",
            "extra": "mean: 2.895670370370476 msec\nrounds: 351"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 546.0864085172051,
            "unit": "iter/sec",
            "range": "stddev: 0.000013451680740960018",
            "extra": "mean: 1.8312120287251092 msec\nrounds: 557"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1159.8871550980505,
            "unit": "iter/sec",
            "range": "stddev: 0.00004853148881338066",
            "extra": "mean: 862.1528358208826 usec\nrounds: 1340"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1056.7643929108888,
            "unit": "iter/sec",
            "range": "stddev: 0.000017467589524969393",
            "extra": "mean: 946.2847222222074 usec\nrounds: 1224"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dbd12ca830adad258a9ee2ffa52316911e07d9ee",
          "message": "Merge pull request #736 from TeoZosa/feat/update-setup-logger-log-messages\n\n🔊 Update setup meta logger log messages",
          "timestamp": "2022-12-18T23:28:21+09:00",
          "tree_id": "da1419cc3d6b7fec50653846f0fa5303f807318d",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/dbd12ca830adad258a9ee2ffa52316911e07d9ee"
        },
        "date": 1671374124509,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 249.22322106458668,
            "unit": "iter/sec",
            "range": "stddev: 0.000009759779574841378",
            "extra": "mean: 4.012467199999987 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 331.4561404135557,
            "unit": "iter/sec",
            "range": "stddev: 0.000013753543833909885",
            "extra": "mean: 3.016990419161661 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 478.4429331754471,
            "unit": "iter/sec",
            "range": "stddev: 0.000011441789185546143",
            "extra": "mean: 2.090113429752124 msec\nrounds: 484"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 909.6429528484779,
            "unit": "iter/sec",
            "range": "stddev: 0.000008379555815039886",
            "extra": "mean: 1.099332432432501 msec\nrounds: 925"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 234.14747203079042,
            "unit": "iter/sec",
            "range": "stddev: 0.000010723408846926099",
            "extra": "mean: 4.27081271186434 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 300.0528508932539,
            "unit": "iter/sec",
            "range": "stddev: 0.000011902889784441943",
            "extra": "mean: 3.3327462046203244 msec\nrounds: 303"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 457.62770913141253,
            "unit": "iter/sec",
            "range": "stddev: 0.000010936936724257177",
            "extra": "mean: 2.185182365591502 msec\nrounds: 465"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 817.3923850000568,
            "unit": "iter/sec",
            "range": "stddev: 0.000010020924937881547",
            "extra": "mean: 1.2234026378896723 msec\nrounds: 834"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.754892312369876,
            "unit": "iter/sec",
            "range": "stddev: 0.00010484579988895019",
            "extra": "mean: 53.319421052630915 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.435919094488217,
            "unit": "iter/sec",
            "range": "stddev: 0.00005804541869481082",
            "extra": "mean: 51.451130000000234 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 344.5465633948685,
            "unit": "iter/sec",
            "range": "stddev: 0.000012005739825738625",
            "extra": "mean: 2.9023653295126537 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 542.2879723299442,
            "unit": "iter/sec",
            "range": "stddev: 0.000011315913941207327",
            "extra": "mean: 1.844038686131084 msec\nrounds: 548"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1147.8536442219713,
            "unit": "iter/sec",
            "range": "stddev: 0.00004910702425876051",
            "extra": "mean: 871.1912054587863 usec\nrounds: 1319"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1052.4872903728315,
            "unit": "iter/sec",
            "range": "stddev: 0.000016483744166200956",
            "extra": "mean: 950.130238290822 usec\nrounds: 1217"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c1eccaca8fd7558c9d157d1c06ec4863a8f754f3",
          "message": "Merge pull request #737 from TeoZosa/ci/group=build-prs-under-ci-build-system-label\n\n👷 Group `build` PRs in release notes under \"Continuous Integration Build System\" label",
          "timestamp": "2022-12-18T23:36:26+09:00",
          "tree_id": "415cfce686ef511089c02b5b36c8a3e21f224870",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/c1eccaca8fd7558c9d157d1c06ec4863a8f754f3"
        },
        "date": 1671377916346,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 251.04705475167523,
            "unit": "iter/sec",
            "range": "stddev: 0.000012009456742820856",
            "extra": "mean: 3.9833169960474386 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 335.5081474381629,
            "unit": "iter/sec",
            "range": "stddev: 0.00001663009862376663",
            "extra": "mean: 2.9805535502958507 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 482.219013796895,
            "unit": "iter/sec",
            "range": "stddev: 0.000010777255127686618",
            "extra": "mean: 2.0737465163934585 msec\nrounds: 488"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 927.8086028464344,
            "unit": "iter/sec",
            "range": "stddev: 0.000009674501031016354",
            "extra": "mean: 1.0778085015940668 msec\nrounds: 941"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 234.44253097486228,
            "unit": "iter/sec",
            "range": "stddev: 0.0001481351066984072",
            "extra": "mean: 4.265437656903743 msec\nrounds: 239"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 302.84257710155936,
            "unit": "iter/sec",
            "range": "stddev: 0.000020208543586081574",
            "extra": "mean: 3.3020456026057605 msec\nrounds: 307"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 465.1281294679797,
            "unit": "iter/sec",
            "range": "stddev: 0.000011453241365079204",
            "extra": "mean: 2.1499452229298934 msec\nrounds: 471"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 843.8606743053024,
            "unit": "iter/sec",
            "range": "stddev: 0.00000916411242821978",
            "extra": "mean: 1.1850297453702738 msec\nrounds: 864"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.53984837916838,
            "unit": "iter/sec",
            "range": "stddev: 0.00006416515878793733",
            "extra": "mean: 53.937873684210565 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.561681207406973,
            "unit": "iter/sec",
            "range": "stddev: 0.0003425702071685962",
            "extra": "mean: 46.37857272727301 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 390.8351251582222,
            "unit": "iter/sec",
            "range": "stddev: 0.00001090879044593653",
            "extra": "mean: 2.558623664122228 msec\nrounds: 393"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 621.7296479455463,
            "unit": "iter/sec",
            "range": "stddev: 0.000010115542902456237",
            "extra": "mean: 1.6084161392406113 msec\nrounds: 632"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1336.9390173499044,
            "unit": "iter/sec",
            "range": "stddev: 0.000048188259786803025",
            "extra": "mean: 747.9772727272268 usec\nrounds: 1562"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1206.5056209494478,
            "unit": "iter/sec",
            "range": "stddev: 0.000017037908595066057",
            "extra": "mean: 828.8399014776738 usec\nrounds: 1421"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a0f0492694150df2360ab6ff2019e559f8755b26",
          "message": "Merge pull request #735 from TeoZosa/dependabot/pip/tox-3.28.0",
          "timestamp": "2022-12-18T14:39:01Z",
          "tree_id": "de2619588bc4c5afd2c2a3be50104759bd56d02d",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/a0f0492694150df2360ab6ff2019e559f8755b26"
        },
        "date": 1671379037042,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 253.20377243832357,
            "unit": "iter/sec",
            "range": "stddev: 0.000010988846296905683",
            "extra": "mean: 3.949388235294102 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 336.5215117417297,
            "unit": "iter/sec",
            "range": "stddev: 0.000011379422890199723",
            "extra": "mean: 2.9715782352941242 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 486.744553693748,
            "unit": "iter/sec",
            "range": "stddev: 0.000010920080208793167",
            "extra": "mean: 2.054465720081142 msec\nrounds: 493"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 921.1179009286119,
            "unit": "iter/sec",
            "range": "stddev: 0.000008542151183043342",
            "extra": "mean: 1.0856373532550656 msec\nrounds: 937"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 237.30678160488205,
            "unit": "iter/sec",
            "range": "stddev: 0.000012097645775249086",
            "extra": "mean: 4.213954583333439 msec\nrounds: 240"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 304.1977606486792,
            "unit": "iter/sec",
            "range": "stddev: 0.000010341075541358447",
            "extra": "mean: 3.2873351791531076 msec\nrounds: 307"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 464.50146003044875,
            "unit": "iter/sec",
            "range": "stddev: 0.000010768767405636493",
            "extra": "mean: 2.152845762711808 msec\nrounds: 472"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 831.9351655658348,
            "unit": "iter/sec",
            "range": "stddev: 0.000007803356694299875",
            "extra": "mean: 1.202016745283098 msec\nrounds: 848"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.72209668563723,
            "unit": "iter/sec",
            "range": "stddev: 0.00038823051082074284",
            "extra": "mean: 53.41282105263115 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.450465984538702,
            "unit": "iter/sec",
            "range": "stddev: 0.00012700825294366928",
            "extra": "mean: 51.412650000000326 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 343.6908696600045,
            "unit": "iter/sec",
            "range": "stddev: 0.000010820727530522444",
            "extra": "mean: 2.909591404011541 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 541.8874605383718,
            "unit": "iter/sec",
            "range": "stddev: 0.000012940139587650256",
            "extra": "mean: 1.845401624548551 msec\nrounds: 554"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1195.2927106124641,
            "unit": "iter/sec",
            "range": "stddev: 0.00004489652701649293",
            "extra": "mean: 836.6151580457671 usec\nrounds: 1392"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1075.5677713699495,
            "unit": "iter/sec",
            "range": "stddev: 0.000015740279009402538",
            "extra": "mean: 929.7415064104246 usec\nrounds: 1248"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "b2d4efb89b4be51ec654ca235109221d09e7ab7a",
          "message": ":art: Lexicographically order labels for CI build system headers\n\nFollow-up to #737.",
          "timestamp": "2022-12-19T12:07:33+09:00",
          "tree_id": "7fe64403ed14900566e9b246603aaaf916eec699",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/b2d4efb89b4be51ec654ca235109221d09e7ab7a"
        },
        "date": 1671419472329,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 257.7408588325799,
            "unit": "iter/sec",
            "range": "stddev: 0.0003214382556350344",
            "extra": "mean: 3.879866019417463 msec\nrounds: 309"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 338.444219806932,
            "unit": "iter/sec",
            "range": "stddev: 0.00027447657071839307",
            "extra": "mean: 2.954696642685928 msec\nrounds: 417"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 479.8167816038726,
            "unit": "iter/sec",
            "range": "stddev: 0.0002230697120671533",
            "extra": "mean: 2.0841288557213917 msec\nrounds: 603"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 875.6218420172613,
            "unit": "iter/sec",
            "range": "stddev: 0.00012405235670203345",
            "extra": "mean: 1.1420455178415785 msec\nrounds: 1149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 222.35742102451803,
            "unit": "iter/sec",
            "range": "stddev: 0.00033488629514747374",
            "extra": "mean: 4.497263888888764 msec\nrounds: 288"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 306.2911466421537,
            "unit": "iter/sec",
            "range": "stddev: 0.000308272383737306",
            "extra": "mean: 3.264867466666677 msec\nrounds: 375"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 450.1657128338753,
            "unit": "iter/sec",
            "range": "stddev: 0.00023376625335185417",
            "extra": "mean: 2.221404188481654 msec\nrounds: 573"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 805.7647677477197,
            "unit": "iter/sec",
            "range": "stddev: 0.00013173921936952997",
            "extra": "mean: 1.241056993339642 msec\nrounds: 1051"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.359701996332923,
            "unit": "iter/sec",
            "range": "stddev: 0.0026798551241826378",
            "extra": "mean: 54.46711500000028 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.355944763663768,
            "unit": "iter/sec",
            "range": "stddev: 0.0022881995857625534",
            "extra": "mean: 51.663714285714676 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 343.38163193884463,
            "unit": "iter/sec",
            "range": "stddev: 0.000284566398377648",
            "extra": "mean: 2.912211682243089 msec\nrounds: 428"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 564.1870754998266,
            "unit": "iter/sec",
            "range": "stddev: 0.00021184834590081528",
            "extra": "mean: 1.7724617302054932 msec\nrounds: 682"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1212.9123547974102,
            "unit": "iter/sec",
            "range": "stddev: 0.00011737318430100385",
            "extra": "mean: 824.4618797431801 usec\nrounds: 1713"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1063.4469338582908,
            "unit": "iter/sec",
            "range": "stddev: 0.00011725382023360502",
            "extra": "mean: 940.3384110309114 usec\nrounds: 1523"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "6332b0d81f1f0aa7bbc62e79ea13a73dc7bbdbaa",
          "message": ":bookmark: Bump version number to `0.19.0`",
          "timestamp": "2022-12-19T13:19:11+09:00",
          "tree_id": "5c1a8a1f5af220fb2ec4439aa5aff08913e0588e",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/6332b0d81f1f0aa7bbc62e79ea13a73dc7bbdbaa"
        },
        "date": 1671423892112,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 237.40462564688997,
            "unit": "iter/sec",
            "range": "stddev: 0.000013044515654422305",
            "extra": "mean: 4.212217842323664 msec\nrounds: 241"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 317.9466826053465,
            "unit": "iter/sec",
            "range": "stddev: 0.000012688235924827554",
            "extra": "mean: 3.1451814241485794 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 470.6227325381907,
            "unit": "iter/sec",
            "range": "stddev: 0.000010633392053664388",
            "extra": "mean: 2.1248442348008565 msec\nrounds: 477"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 915.4689362748816,
            "unit": "iter/sec",
            "range": "stddev: 0.000008032565144913967",
            "extra": "mean: 1.0923363539445503 msec\nrounds: 938"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 226.0737912752513,
            "unit": "iter/sec",
            "range": "stddev: 0.000014004209496910218",
            "extra": "mean: 4.423334497816563 msec\nrounds: 229"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 292.6105203235732,
            "unit": "iter/sec",
            "range": "stddev: 0.000014122913187536361",
            "extra": "mean: 3.4175121212121304 msec\nrounds: 297"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 449.058817131693,
            "unit": "iter/sec",
            "range": "stddev: 0.000011059760970580305",
            "extra": "mean: 2.2268797802198272 msec\nrounds: 455"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 837.7895548978496,
            "unit": "iter/sec",
            "range": "stddev: 0.00001189697674297903",
            "extra": "mean: 1.19361717289723 msec\nrounds: 856"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.043711325659025,
            "unit": "iter/sec",
            "range": "stddev: 0.00012058914763088696",
            "extra": "mean: 49.89095999999993 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.98033722795013,
            "unit": "iter/sec",
            "range": "stddev: 0.00010631781555688272",
            "extra": "mean: 47.66367619047581 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 338.92128567960856,
            "unit": "iter/sec",
            "range": "stddev: 0.000010741304771139973",
            "extra": "mean: 2.9505376093295212 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 572.7860163444451,
            "unit": "iter/sec",
            "range": "stddev: 0.000010581046853206594",
            "extra": "mean: 1.7458526770294782 msec\nrounds: 579"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1215.3220894579372,
            "unit": "iter/sec",
            "range": "stddev: 0.00004078689115580386",
            "extra": "mean: 822.827140783744 usec\nrounds: 1378"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1114.5640510497215,
            "unit": "iter/sec",
            "range": "stddev: 0.0000118016429946531",
            "extra": "mean: 897.2117834396125 usec\nrounds: 1256"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7f61ab9b41c22755077fe22fb9b2f60b96e2dc14",
          "message": "Merge pull request #738 from TeoZosa/dependabot/pip/importlib-metadata-5.2.0",
          "timestamp": "2022-12-19T05:32:04Z",
          "tree_id": "f641aa1f704def6037e3e93b9b19fbaf784fcb6e",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/7f61ab9b41c22755077fe22fb9b2f60b96e2dc14"
        },
        "date": 1671428103341,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 252.3593362472546,
            "unit": "iter/sec",
            "range": "stddev: 0.000010233485068340346",
            "extra": "mean: 3.9626035433071043 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 335.4104374979045,
            "unit": "iter/sec",
            "range": "stddev: 0.000010564706016399927",
            "extra": "mean: 2.981421828908492 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 482.4106563626375,
            "unit": "iter/sec",
            "range": "stddev: 0.000009970986397931579",
            "extra": "mean: 2.0729226993863925 msec\nrounds: 489"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 887.515413838134,
            "unit": "iter/sec",
            "range": "stddev: 0.000007438636066637236",
            "extra": "mean: 1.126740994475146 msec\nrounds: 905"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 236.02031433758484,
            "unit": "iter/sec",
            "range": "stddev: 0.00007037140810683577",
            "extra": "mean: 4.236923430962298 msec\nrounds: 239"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 302.1314485070227,
            "unit": "iter/sec",
            "range": "stddev: 0.000011554442010911652",
            "extra": "mean: 3.309817647058863 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 459.30162841686285,
            "unit": "iter/sec",
            "range": "stddev: 0.000024052716033628883",
            "extra": "mean: 2.177218494623752 msec\nrounds: 465"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 822.4277518295754,
            "unit": "iter/sec",
            "range": "stddev: 0.00000844107637372448",
            "extra": "mean: 1.2159122765196053 msec\nrounds: 839"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.710039295021478,
            "unit": "iter/sec",
            "range": "stddev: 0.00004778848438450049",
            "extra": "mean: 53.44724210526314 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.422616121509463,
            "unit": "iter/sec",
            "range": "stddev: 0.00014540528514209953",
            "extra": "mean: 51.48636999999994 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 344.9315325732667,
            "unit": "iter/sec",
            "range": "stddev: 0.000011302673969299247",
            "extra": "mean: 2.89912607449883 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 539.5858174519457,
            "unit": "iter/sec",
            "range": "stddev: 0.000011180264903547755",
            "extra": "mean: 1.8532733212341292 msec\nrounds: 551"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1156.707252718915,
            "unit": "iter/sec",
            "range": "stddev: 0.00004927052361988048",
            "extra": "mean: 864.5229790419619 usec\nrounds: 1336"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1043.2928434699434,
            "unit": "iter/sec",
            "range": "stddev: 0.000023602994839509402",
            "extra": "mean: 958.5036514523061 usec\nrounds: 1205"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "23faab732914021aa130e807b9cd28fc767affe0",
          "message": "Merge pull request #739 from TeoZosa/dependabot/pip/importlib-metadata-5.2.0",
          "timestamp": "2022-12-19T08:08:55Z",
          "tree_id": "540e21b48240ab8665b926474ca392a95b2288a6",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/23faab732914021aa130e807b9cd28fc767affe0"
        },
        "date": 1671437538702,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 169.62874308576744,
            "unit": "iter/sec",
            "range": "stddev: 0.0008456409229244993",
            "extra": "mean: 5.895227317073154 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 229.48267333093037,
            "unit": "iter/sec",
            "range": "stddev: 0.000650847874529983",
            "extra": "mean: 4.357627464788719 msec\nrounds: 284"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 311.54948730498364,
            "unit": "iter/sec",
            "range": "stddev: 0.0006259480236332224",
            "extra": "mean: 3.2097629453682095 msec\nrounds: 421"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 645.6536097410566,
            "unit": "iter/sec",
            "range": "stddev: 0.0003115557191445613",
            "extra": "mean: 1.548818104495778 msec\nrounds: 823"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 155.28291080668203,
            "unit": "iter/sec",
            "range": "stddev: 0.0007338390830917199",
            "extra": "mean: 6.4398586734694865 msec\nrounds: 196"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 208.66436816069165,
            "unit": "iter/sec",
            "range": "stddev: 0.0005954400798883429",
            "extra": "mean: 4.792385057471353 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 311.9199873116179,
            "unit": "iter/sec",
            "range": "stddev: 0.0005615233940416881",
            "extra": "mean: 3.205950374064899 msec\nrounds: 401"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 565.6927359245217,
            "unit": "iter/sec",
            "range": "stddev: 0.00045977898939893836",
            "extra": "mean: 1.7677441064638777 msec\nrounds: 789"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 15.463836320704651,
            "unit": "iter/sec",
            "range": "stddev: 0.0028833748461287653",
            "extra": "mean: 64.667006250001 msec\nrounds: 16"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 15.911741873358558,
            "unit": "iter/sec",
            "range": "stddev: 0.002693992123867209",
            "extra": "mean: 62.84667058823559 msec\nrounds: 17"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 216.21198072851925,
            "unit": "iter/sec",
            "range": "stddev: 0.0006484065463174388",
            "extra": "mean: 4.625090601503823 msec\nrounds: 266"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 342.5674463491485,
            "unit": "iter/sec",
            "range": "stddev: 0.0006859945872018185",
            "extra": "mean: 2.9191331828442015 msec\nrounds: 443"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 724.4958286490956,
            "unit": "iter/sec",
            "range": "stddev: 0.00030051990845413084",
            "extra": "mean: 1.3802701968134352 msec\nrounds: 1067"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 686.6070706956453,
            "unit": "iter/sec",
            "range": "stddev: 0.000349956405602586",
            "extra": "mean: 1.4564370841489243 msec\nrounds: 1022"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f1ea631b4f10daf69d36ac505ed9795b91021e69",
          "message": "Merge pull request #741 from TeoZosa/dependabot/pip/sentry-sdk-1.12.1",
          "timestamp": "2022-12-19T15:52:53Z",
          "tree_id": "27fb6b20e1b0edbd2ed292d43718b8de1503a1f9",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/f1ea631b4f10daf69d36ac505ed9795b91021e69"
        },
        "date": 1671465402082,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 248.27211405660356,
            "unit": "iter/sec",
            "range": "stddev: 0.00013756500384962158",
            "extra": "mean: 4.02783858267711 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 332.67787870326987,
            "unit": "iter/sec",
            "range": "stddev: 0.00001910124645682533",
            "extra": "mean: 3.005910714285708 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 482.8757353362991,
            "unit": "iter/sec",
            "range": "stddev: 0.00001188222126841565",
            "extra": "mean: 2.070926175869138 msec\nrounds: 489"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 935.4109565571719,
            "unit": "iter/sec",
            "range": "stddev: 0.000008030131199919297",
            "extra": "mean: 1.0690488421052404 msec\nrounds: 950"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 235.67580833570764,
            "unit": "iter/sec",
            "range": "stddev: 0.000011500820252268336",
            "extra": "mean: 4.2431168776370685 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 301.3737870451107,
            "unit": "iter/sec",
            "range": "stddev: 0.000011058291997925801",
            "extra": "mean: 3.3181386138613194 msec\nrounds: 303"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 463.07489002460983,
            "unit": "iter/sec",
            "range": "stddev: 0.000012612385871305302",
            "extra": "mean: 2.1594779193206866 msec\nrounds: 471"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 853.6727632722133,
            "unit": "iter/sec",
            "range": "stddev: 0.000008096003552497838",
            "extra": "mean: 1.1714090492554778 msec\nrounds: 873"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.603193874653723,
            "unit": "iter/sec",
            "range": "stddev: 0.00019691444531077403",
            "extra": "mean: 53.75421052631555 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.29864665345561,
            "unit": "iter/sec",
            "range": "stddev: 0.00007277644554508948",
            "extra": "mean: 51.817104999999586 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 343.93866901464315,
            "unit": "iter/sec",
            "range": "stddev: 0.000017638636666323976",
            "extra": "mean: 2.9074951149427894 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 550.15884488222,
            "unit": "iter/sec",
            "range": "stddev: 0.00001086228534885619",
            "extra": "mean: 1.817656862744947 msec\nrounds: 561"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1179.0055416717744,
            "unit": "iter/sec",
            "range": "stddev: 0.000045857139509244575",
            "extra": "mean: 848.1724340176103 usec\nrounds: 1364"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1063.325840476222,
            "unit": "iter/sec",
            "range": "stddev: 0.00001635475689332727",
            "extra": "mean: 940.4454983922323 usec\nrounds: 1244"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8ab5e99e1f5dd1028e0e7d0d05d10b01b19d4301",
          "message": "Merge pull request #742 from TeoZosa/fix/debug-library-logging\n\n🐛 Fix library meta logger not honoring user-requested log level filtering & rich formatting logging",
          "timestamp": "2022-12-20T21:45:29+09:00",
          "tree_id": "e544b58e1a67cb3ce9ac53b8f7e61f48ebda8bb8",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/8ab5e99e1f5dd1028e0e7d0d05d10b01b19d4301"
        },
        "date": 1671540471499,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 241.6400196902112,
            "unit": "iter/sec",
            "range": "stddev: 0.00009777641001611792",
            "extra": "mean: 4.138387346938748 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 322.06972445113206,
            "unit": "iter/sec",
            "range": "stddev: 0.000015446882776179617",
            "extra": "mean: 3.104917737003035 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 468.7604502689171,
            "unit": "iter/sec",
            "range": "stddev: 0.00005971968452383378",
            "extra": "mean: 2.1332857740586326 msec\nrounds: 478"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 907.4951368852677,
            "unit": "iter/sec",
            "range": "stddev: 0.000009414271500002734",
            "extra": "mean: 1.1019342797055973 msec\nrounds: 951"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 227.62181817748885,
            "unit": "iter/sec",
            "range": "stddev: 0.000013800443613459128",
            "extra": "mean: 4.393251965065347 msec\nrounds: 229"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 294.2482200707283,
            "unit": "iter/sec",
            "range": "stddev: 0.000014306405345665036",
            "extra": "mean: 3.3984912457911576 msec\nrounds: 297"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 454.21377077412143,
            "unit": "iter/sec",
            "range": "stddev: 0.00001082147872607695",
            "extra": "mean: 2.2016065217390683 msec\nrounds: 460"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 843.3531134127073,
            "unit": "iter/sec",
            "range": "stddev: 0.00001184588741245589",
            "extra": "mean: 1.1857429398148616 msec\nrounds: 864"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.026625398467132,
            "unit": "iter/sec",
            "range": "stddev: 0.0001289565527610579",
            "extra": "mean: 49.93352500000032 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.956226633807542,
            "unit": "iter/sec",
            "range": "stddev: 0.000058059721715667116",
            "extra": "mean: 47.71851428571374 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 343.40611761669874,
            "unit": "iter/sec",
            "range": "stddev: 0.000010972155292816513",
            "extra": "mean: 2.9120040345820946 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 567.3730461091126,
            "unit": "iter/sec",
            "range": "stddev: 0.000010674731254146738",
            "extra": "mean: 1.7625088235292872 msec\nrounds: 578"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1211.6355254318162,
            "unit": "iter/sec",
            "range": "stddev: 0.00004266346752843106",
            "extra": "mean: 825.3307030128626 usec\nrounds: 1394"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1104.127919137605,
            "unit": "iter/sec",
            "range": "stddev: 0.000012554299139042378",
            "extra": "mean: 905.6921599999612 usec\nrounds: 1250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "c73c0191484889f362620fe16608d6dea791a876",
          "message": ":bookmark: Bump version number to `0.19.1`",
          "timestamp": "2022-12-20T21:48:24+09:00",
          "tree_id": "ddd815851c129e8efea4776025f0ff6b9ba6a5ec",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/c73c0191484889f362620fe16608d6dea791a876"
        },
        "date": 1671541378204,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 254.42192258298587,
            "unit": "iter/sec",
            "range": "stddev: 0.000009107821696413927",
            "extra": "mean: 3.9304789062500136 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 331.74268492525545,
            "unit": "iter/sec",
            "range": "stddev: 0.00001685103092878983",
            "extra": "mean: 3.0143844776119444 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 482.37817183416337,
            "unit": "iter/sec",
            "range": "stddev: 0.00001039107441876351",
            "extra": "mean: 2.0730622950820203 msec\nrounds: 488"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 917.8677664445738,
            "unit": "iter/sec",
            "range": "stddev: 0.000009526110223252089",
            "extra": "mean: 1.0894815533980142 msec\nrounds: 927"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 236.13882531794388,
            "unit": "iter/sec",
            "range": "stddev: 0.000011854068158880936",
            "extra": "mean: 4.234797046413576 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 301.8739443690745,
            "unit": "iter/sec",
            "range": "stddev: 0.00001734732059786539",
            "extra": "mean: 3.3126409836066832 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 465.0312342680956,
            "unit": "iter/sec",
            "range": "stddev: 0.000010308451643873568",
            "extra": "mean: 2.1503931914893464 msec\nrounds: 470"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 836.3545622945745,
            "unit": "iter/sec",
            "range": "stddev: 0.000008062215727171974",
            "extra": "mean: 1.195665146198829 msec\nrounds: 855"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.91914901667703,
            "unit": "iter/sec",
            "range": "stddev: 0.00007040351159205809",
            "extra": "mean: 52.856500000000565 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.54995610057362,
            "unit": "iter/sec",
            "range": "stddev: 0.00042125440856652743",
            "extra": "mean: 51.151009999999886 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 346.75403155895185,
            "unit": "iter/sec",
            "range": "stddev: 0.000010285428585313204",
            "extra": "mean: 2.8838886039887024 msec\nrounds: 351"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 543.1458028017331,
            "unit": "iter/sec",
            "range": "stddev: 0.00001005508222690877",
            "extra": "mean: 1.8411262589928075 msec\nrounds: 556"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1150.2280994167045,
            "unit": "iter/sec",
            "range": "stddev: 0.00004638001394567568",
            "extra": "mean: 869.3927756652033 usec\nrounds: 1315"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1050.793578525945,
            "unit": "iter/sec",
            "range": "stddev: 0.00001732158822738979",
            "extra": "mean: 951.6616968699045 usec\nrounds: 1214"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "a5f480666d7d5e9cef46a72f662dc999773c5c10",
          "message": ":bento: Update `.mutmut-cache`",
          "timestamp": "2022-12-20T22:07:13+09:00",
          "tree_id": "9dd564ecc8a9a0c727538d08ede01e5c29c878c8",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/a5f480666d7d5e9cef46a72f662dc999773c5c10"
        },
        "date": 1671543652785,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 242.21420866425075,
            "unit": "iter/sec",
            "range": "stddev: 0.000012212558051373164",
            "extra": "mean: 4.128576954732521 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 321.99410161780946,
            "unit": "iter/sec",
            "range": "stddev: 0.000014470632175885315",
            "extra": "mean: 3.1056469512194633 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 472.11240820131945,
            "unit": "iter/sec",
            "range": "stddev: 0.000010998146993156974",
            "extra": "mean: 2.118139626556007 msec\nrounds: 482"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 904.3233650542787,
            "unit": "iter/sec",
            "range": "stddev: 0.000011613067320673112",
            "extra": "mean: 1.1057991407088974 msec\nrounds: 931"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 226.53939703126642,
            "unit": "iter/sec",
            "range": "stddev: 0.000014188762233501913",
            "extra": "mean: 4.414243231441031 msec\nrounds: 229"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 294.92632347203823,
            "unit": "iter/sec",
            "range": "stddev: 0.000016307796714096587",
            "extra": "mean: 3.390677333333419 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 459.4041802639127,
            "unit": "iter/sec",
            "range": "stddev: 0.000011468596572151779",
            "extra": "mean: 2.1767324786325033 msec\nrounds: 468"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 843.9375243146342,
            "unit": "iter/sec",
            "range": "stddev: 0.000014580936483030397",
            "extra": "mean: 1.1849218350755348 msec\nrounds: 861"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.097538137710504,
            "unit": "iter/sec",
            "range": "stddev: 0.00021549496392251594",
            "extra": "mean: 49.757338095237934 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.03362856535028,
            "unit": "iter/sec",
            "range": "stddev: 0.00009040107458287668",
            "extra": "mean: 47.54291428571428 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 341.33432802288837,
            "unit": "iter/sec",
            "range": "stddev: 0.000014335633724939532",
            "extra": "mean: 2.929678962535946 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 575.9459545615056,
            "unit": "iter/sec",
            "range": "stddev: 0.000009916511394461062",
            "extra": "mean: 1.7362740237690295 msec\nrounds: 589"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1218.3390195019026,
            "unit": "iter/sec",
            "range": "stddev: 0.000042650855441211485",
            "extra": "mean: 820.7896028880641 usec\nrounds: 1385"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1114.2903478678995,
            "unit": "iter/sec",
            "range": "stddev: 0.00001343791450414238",
            "extra": "mean: 897.4321656051454 usec\nrounds: 1256"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "edf5f76eb7810cf223186cd1cbde9ed384ac118d",
          "message": ":memo: Add visual tl;dr of library to \"Features\" intro section",
          "timestamp": "2022-12-21T00:05:09+09:00",
          "tree_id": "37407cf54120d06b047669a222bf3b43092715df",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/edf5f76eb7810cf223186cd1cbde9ed384ac118d"
        },
        "date": 1671548964245,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 241.1924794398328,
            "unit": "iter/sec",
            "range": "stddev: 0.000015722135694409352",
            "extra": "mean: 4.146066255143984 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 320.6756517212998,
            "unit": "iter/sec",
            "range": "stddev: 0.000013765532147371512",
            "extra": "mean: 3.1184157407407507 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 475.19623243175954,
            "unit": "iter/sec",
            "range": "stddev: 0.000015182078958630522",
            "extra": "mean: 2.104393788819874 msec\nrounds: 483"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 892.9138765963758,
            "unit": "iter/sec",
            "range": "stddev: 0.000010666539882759913",
            "extra": "mean: 1.1199288377192849 msec\nrounds: 912"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 226.02947542803275,
            "unit": "iter/sec",
            "range": "stddev: 0.000019284365463353628",
            "extra": "mean: 4.424201746724832 msec\nrounds: 229"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 291.89972427151747,
            "unit": "iter/sec",
            "range": "stddev: 0.00001456627033377701",
            "extra": "mean: 3.425834000000035 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 454.4263143788268,
            "unit": "iter/sec",
            "range": "stddev: 0.000021218075848477075",
            "extra": "mean: 2.200576789587855 msec\nrounds: 461"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 831.1189855149088,
            "unit": "iter/sec",
            "range": "stddev: 0.0000096067735825255",
            "extra": "mean: 1.2031971563980857 msec\nrounds: 844"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.98427836820775,
            "unit": "iter/sec",
            "range": "stddev: 0.00016178892446348689",
            "extra": "mean: 50.03933499999995 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.950287063826448,
            "unit": "iter/sec",
            "range": "stddev: 0.00010467523380183957",
            "extra": "mean: 47.7320428571424 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 340.5365781092555,
            "unit": "iter/sec",
            "range": "stddev: 0.000011694891193017618",
            "extra": "mean: 2.936542105262967 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 564.2911257686873,
            "unit": "iter/sec",
            "range": "stddev: 0.000009728580732898909",
            "extra": "mean: 1.772134904013921 msec\nrounds: 573"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1209.2436911186976,
            "unit": "iter/sec",
            "range": "stddev: 0.00004280544509809892",
            "extra": "mean: 826.9631732168709 usec\nrounds: 1374"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1106.980058329866,
            "unit": "iter/sec",
            "range": "stddev: 0.000012563824939356139",
            "extra": "mean: 903.3586400000104 usec\nrounds: 1250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "e906892e8535453a7ae7626f965f8fe4686f4327",
          "message": ":memo: Add visual tl;dr of library to \"Features\" intro section",
          "timestamp": "2022-12-21T00:11:39+09:00",
          "tree_id": "2b9c8b697a0fa61f31140a278a94546c111c62eb",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/e906892e8535453a7ae7626f965f8fe4686f4327"
        },
        "date": 1671551166025,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 215.224890264923,
            "unit": "iter/sec",
            "range": "stddev: 0.00003157457256941382",
            "extra": "mean: 4.646302752293601 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 284.3964540374038,
            "unit": "iter/sec",
            "range": "stddev: 0.00002284611760858669",
            "extra": "mean: 3.5162182432432156 msec\nrounds: 296"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 412.7263331985961,
            "unit": "iter/sec",
            "range": "stddev: 0.00001719737271378303",
            "extra": "mean: 2.422913004484303 msec\nrounds: 446"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 773.2853844057772,
            "unit": "iter/sec",
            "range": "stddev: 0.00001390478599148133",
            "extra": "mean: 1.2931836294415924 msec\nrounds: 788"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 198.845005830495,
            "unit": "iter/sec",
            "range": "stddev: 0.000030373790241469577",
            "extra": "mean: 5.029042574257297 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 256.27500227332933,
            "unit": "iter/sec",
            "range": "stddev: 0.000016548522692454492",
            "extra": "mean: 3.902058301158273 msec\nrounds: 259"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 391.97009103674503,
            "unit": "iter/sec",
            "range": "stddev: 0.000016423565697050952",
            "extra": "mean: 2.55121506172841 msec\nrounds: 405"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 718.3760189856929,
            "unit": "iter/sec",
            "range": "stddev: 0.000013320545918095077",
            "extra": "mean: 1.3920286501377712 msec\nrounds: 726"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 15.989959904176146,
            "unit": "iter/sec",
            "range": "stddev: 0.00024724518726316314",
            "extra": "mean: 62.53924375000008 msec\nrounds: 16"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 16.319474643472148,
            "unit": "iter/sec",
            "range": "stddev: 0.001746078646652916",
            "extra": "mean: 61.276482352941656 msec\nrounds: 17"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 293.55694815868196,
            "unit": "iter/sec",
            "range": "stddev: 0.000019826246009234573",
            "extra": "mean: 3.406494059406323 msec\nrounds: 303"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 466.84864313366114,
            "unit": "iter/sec",
            "range": "stddev: 0.000021434226193328633",
            "extra": "mean: 2.142021862348425 msec\nrounds: 494"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1006.8072128028914,
            "unit": "iter/sec",
            "range": "stddev: 0.00005143289624850636",
            "extra": "mean: 993.2388120423368 usec\nrounds: 1229"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 905.8590517965438,
            "unit": "iter/sec",
            "range": "stddev: 0.00002513961291715813",
            "extra": "mean: 1.1039244990892914 msec\nrounds: 1098"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "df079e98b066d94ac126565e27ad07f441ff8ce6",
          "message": ":memo: Add visual tl;dr of library to \"Features\" intro section",
          "timestamp": "2022-12-21T11:12:45+09:00",
          "tree_id": "7c86e247c2d45a01b3485279ef426d4bf023bf28",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/df079e98b066d94ac126565e27ad07f441ff8ce6"
        },
        "date": 1671589033354,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 253.30809487575368,
            "unit": "iter/sec",
            "range": "stddev: 0.00001107103708475804",
            "extra": "mean: 3.9477617187500256 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 333.23346188454906,
            "unit": "iter/sec",
            "range": "stddev: 0.00001765127661033496",
            "extra": "mean: 3.0008991124260405 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 482.4629597364043,
            "unit": "iter/sec",
            "range": "stddev: 0.000011975266767363328",
            "extra": "mean: 2.0726979757085484 msec\nrounds: 494"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 924.5244977980151,
            "unit": "iter/sec",
            "range": "stddev: 0.000008836490460907976",
            "extra": "mean: 1.0816371035940622 msec\nrounds: 946"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 234.92782533531252,
            "unit": "iter/sec",
            "range": "stddev: 0.00001240073211979382",
            "extra": "mean: 4.256626470588147 msec\nrounds: 238"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 302.25055168133713,
            "unit": "iter/sec",
            "range": "stddev: 0.000013636447672654533",
            "extra": "mean: 3.308513398692818 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 465.55675695335447,
            "unit": "iter/sec",
            "range": "stddev: 0.000011497144850077683",
            "extra": "mean: 2.1479658174098697 msec\nrounds: 471"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 849.8205378981424,
            "unit": "iter/sec",
            "range": "stddev: 0.000010263256283734475",
            "extra": "mean: 1.1767190311419111 msec\nrounds: 867"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.804571609095326,
            "unit": "iter/sec",
            "range": "stddev: 0.00006815622019210241",
            "extra": "mean: 53.17855789473681 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.341774277045534,
            "unit": "iter/sec",
            "range": "stddev: 0.0000785126625718421",
            "extra": "mean: 51.701565000000116 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 343.35626893838815,
            "unit": "iter/sec",
            "range": "stddev: 0.00001278029334998177",
            "extra": "mean: 2.912426801152828 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 542.1969464731884,
            "unit": "iter/sec",
            "range": "stddev: 0.000010690338674500329",
            "extra": "mean: 1.8443482695811346 msec\nrounds: 549"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1187.3669339466092,
            "unit": "iter/sec",
            "range": "stddev: 0.00004653839010830768",
            "extra": "mean: 842.1996363636026 usec\nrounds: 1375"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1065.78077780405,
            "unit": "iter/sec",
            "range": "stddev: 0.0000168489051073234",
            "extra": "mean: 938.2792604501783 usec\nrounds: 1244"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ad67e527eff42409f2067fd74bcd2137c298bfd2",
          "message": "Merge pull request #746 from TeoZosa/dependabot/github_actions/pypa/cibuildwheel-2.11.4",
          "timestamp": "2022-12-26T16:11:11Z",
          "tree_id": "868d6188aecf188d8119ce6b762d39b7ed963952",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/ad67e527eff42409f2067fd74bcd2137c298bfd2"
        },
        "date": 1672071508225,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 253.06210084643348,
            "unit": "iter/sec",
            "range": "stddev: 0.000012825287497229972",
            "extra": "mean: 3.9515992187499993 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 332.4631571948167,
            "unit": "iter/sec",
            "range": "stddev: 0.000015705046108142243",
            "extra": "mean: 3.0078520833333124 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 483.1258140967679,
            "unit": "iter/sec",
            "range": "stddev: 0.000009657638277573655",
            "extra": "mean: 2.0698542094455434 msec\nrounds: 487"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 919.498676747082,
            "unit": "iter/sec",
            "range": "stddev: 0.000010456375345449633",
            "extra": "mean: 1.0875491452991626 msec\nrounds: 936"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 237.03708425264026,
            "unit": "iter/sec",
            "range": "stddev: 0.000010806943156422188",
            "extra": "mean: 4.2187491596638695 msec\nrounds: 238"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 303.36678833288863,
            "unit": "iter/sec",
            "range": "stddev: 0.000013381271076348952",
            "extra": "mean: 3.296339739413683 msec\nrounds: 307"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 462.40411921867997,
            "unit": "iter/sec",
            "range": "stddev: 0.000009617419659841377",
            "extra": "mean: 2.162610492505324 msec\nrounds: 467"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 845.3778427056258,
            "unit": "iter/sec",
            "range": "stddev: 0.000009683839055798086",
            "extra": "mean: 1.1829030162412433 msec\nrounds: 862"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.7933223171493,
            "unit": "iter/sec",
            "range": "stddev: 0.00007609631977229676",
            "extra": "mean: 53.210389473684444 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.383317805680974,
            "unit": "iter/sec",
            "range": "stddev: 0.00009605561149590486",
            "extra": "mean: 51.59075499999872 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 347.50232702454053,
            "unit": "iter/sec",
            "range": "stddev: 0.000010902686150265423",
            "extra": "mean: 2.8776785714283295 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 546.2837963972851,
            "unit": "iter/sec",
            "range": "stddev: 0.000010119036553406895",
            "extra": "mean: 1.8305503597122064 msec\nrounds: 556"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1193.8664936363741,
            "unit": "iter/sec",
            "range": "stddev: 0.00004485881334383108",
            "extra": "mean: 837.6145953758363 usec\nrounds: 1384"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1077.1946552591126,
            "unit": "iter/sec",
            "range": "stddev: 0.00001617179254818101",
            "extra": "mean: 928.337320574113 usec\nrounds: 1254"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "811aeb3c53ffea07bca222e7dfae5015906430a9",
          "message": "Merge pull request #748 from TeoZosa/dependabot/pip/pre-commit-2.21.0",
          "timestamp": "2022-12-26T16:54:48Z",
          "tree_id": "4996c0897caab7c378f945742c4ef96ca51262bf",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/811aeb3c53ffea07bca222e7dfae5015906430a9"
        },
        "date": 1672074344687,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 254.6477187543268,
            "unit": "iter/sec",
            "range": "stddev: 0.000011238039393604577",
            "extra": "mean: 3.9269937500000034 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 334.43915938222847,
            "unit": "iter/sec",
            "range": "stddev: 0.000011426331078344989",
            "extra": "mean: 2.9900804733727555 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 485.49576449531787,
            "unit": "iter/sec",
            "range": "stddev: 0.000009721122089628836",
            "extra": "mean: 2.0597502040816345 msec\nrounds: 490"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 919.683888140505,
            "unit": "iter/sec",
            "range": "stddev: 0.000007140870569920186",
            "extra": "mean: 1.0873301282051215 msec\nrounds: 936"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 235.0750176950911,
            "unit": "iter/sec",
            "range": "stddev: 0.00008257769025237305",
            "extra": "mean: 4.253961181434731 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 300.5291884031347,
            "unit": "iter/sec",
            "range": "stddev: 0.000012663481704934623",
            "extra": "mean: 3.327463815789446 msec\nrounds: 304"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 461.8991893175616,
            "unit": "iter/sec",
            "range": "stddev: 0.000009780563189609163",
            "extra": "mean: 2.164974572649633 msec\nrounds: 468"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 833.9347443601009,
            "unit": "iter/sec",
            "range": "stddev: 0.0000071606387673866725",
            "extra": "mean: 1.1991345926800605 msec\nrounds: 847"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.62717887748497,
            "unit": "iter/sec",
            "range": "stddev: 0.00008024790390962175",
            "extra": "mean: 53.68499473684228 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.429933522425177,
            "unit": "iter/sec",
            "range": "stddev: 0.00042595796135577816",
            "extra": "mean: 51.46698000000072 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 343.0804770894946,
            "unit": "iter/sec",
            "range": "stddev: 0.000021282145012600883",
            "extra": "mean: 2.914768011527348 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 538.3793759042622,
            "unit": "iter/sec",
            "range": "stddev: 0.000028439593175156377",
            "extra": "mean: 1.8574262773725303 msec\nrounds: 548"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1171.9240192224472,
            "unit": "iter/sec",
            "range": "stddev: 0.00004526651844174792",
            "extra": "mean: 853.2976401179011 usec\nrounds: 1356"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1048.061438300106,
            "unit": "iter/sec",
            "range": "stddev: 0.00001535667419024571",
            "extra": "mean: 954.1425373134053 usec\nrounds: 1206"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "23312ae4f5e9f11a1725b352f60734087d051d66",
          "message": "Merge pull request #745 from TeoZosa/dependabot/pip/dot-github/workflows/tox-gh-actions-3.0.0\n\n⬆️ Bump tox-gh-actions from 2.12.0 to 3.0.0 in /.github/workflows",
          "timestamp": "2022-12-28T15:37:45+09:00",
          "tree_id": "8f91cfb5c258db3d2819e6d3bea3aabc289cdabe",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/23312ae4f5e9f11a1725b352f60734087d051d66"
        },
        "date": 1672209608284,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 242.89786471957282,
            "unit": "iter/sec",
            "range": "stddev: 0.000011857577190780107",
            "extra": "mean: 4.116956734693845 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 322.6543965620485,
            "unit": "iter/sec",
            "range": "stddev: 0.000013911338590770343",
            "extra": "mean: 3.0992914110429415 msec\nrounds: 326"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 472.06912826571835,
            "unit": "iter/sec",
            "range": "stddev: 0.000010147897128322522",
            "extra": "mean: 2.1183338204592776 msec\nrounds: 479"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 897.0040356444765,
            "unit": "iter/sec",
            "range": "stddev: 0.000008440132370694716",
            "extra": "mean: 1.1148221861471597 msec\nrounds: 924"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 227.27133489893757,
            "unit": "iter/sec",
            "range": "stddev: 0.000014352151348723516",
            "extra": "mean: 4.4000269565217165 msec\nrounds: 230"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 294.8115823681386,
            "unit": "iter/sec",
            "range": "stddev: 0.00005069194789604651",
            "extra": "mean: 3.3919969899665436 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 457.07599345465144,
            "unit": "iter/sec",
            "range": "stddev: 0.000010017296153323637",
            "extra": "mean: 2.187820000000097 msec\nrounds: 460"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 823.1079681229256,
            "unit": "iter/sec",
            "range": "stddev: 0.000009690084182415694",
            "extra": "mean: 1.2149074468085537 msec\nrounds: 846"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.038965290889823,
            "unit": "iter/sec",
            "range": "stddev: 0.000217328244608786",
            "extra": "mean: 49.902776190476416 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.91968931272845,
            "unit": "iter/sec",
            "range": "stddev: 0.00011641484257324361",
            "extra": "mean: 47.8018571428571 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 341.3994714228564,
            "unit": "iter/sec",
            "range": "stddev: 0.000016773947397577954",
            "extra": "mean: 2.929119942196404 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 569.1852010268844,
            "unit": "iter/sec",
            "range": "stddev: 0.000008800969219430874",
            "extra": "mean: 1.7568974003467932 msec\nrounds: 577"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1224.9740724170272,
            "unit": "iter/sec",
            "range": "stddev: 0.000040924078872587",
            "extra": "mean: 816.3438088341534 usec\nrounds: 1381"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1109.6667407333023,
            "unit": "iter/sec",
            "range": "stddev: 0.000012352910951673616",
            "extra": "mean: 901.1714628296139 usec\nrounds: 1251"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0c2a117b5767b8060f03b63e30f41811ca47cdf7",
          "message": "Merge pull request #749 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.0.18\n\n⬆️ Bump tox from 3.27.1 to 4.0.18 in /.github/workflows",
          "timestamp": "2022-12-28T17:33:14+09:00",
          "tree_id": "98c38f999d60b86f7a62b44c67db5ce6043f436f",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/0c2a117b5767b8060f03b63e30f41811ca47cdf7"
        },
        "date": 1672216550682,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 252.69609957647685,
            "unit": "iter/sec",
            "range": "stddev: 0.000018787257737859668",
            "extra": "mean: 3.9573226562500086 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 334.1304637947018,
            "unit": "iter/sec",
            "range": "stddev: 0.000010289739578157831",
            "extra": "mean: 2.99284294117649 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 481.92890067376055,
            "unit": "iter/sec",
            "range": "stddev: 0.000013724156762207183",
            "extra": "mean: 2.0749948770491877 msec\nrounds: 488"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 917.5247321980399,
            "unit": "iter/sec",
            "range": "stddev: 0.000007140064323581319",
            "extra": "mean: 1.0898888770053976 msec\nrounds: 935"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 235.9761739418049,
            "unit": "iter/sec",
            "range": "stddev: 0.000014042665447103357",
            "extra": "mean: 4.237715966386566 msec\nrounds: 238"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 302.6652943202243,
            "unit": "iter/sec",
            "range": "stddev: 0.000014450589003799702",
            "extra": "mean: 3.3039797385622465 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 463.29179711186066,
            "unit": "iter/sec",
            "range": "stddev: 0.000010203085212245087",
            "extra": "mean: 2.1584668803418343 msec\nrounds: 468"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 841.4128273729076,
            "unit": "iter/sec",
            "range": "stddev: 0.000007794489898761598",
            "extra": "mean: 1.1884772462077142 msec\nrounds: 857"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.751342201336428,
            "unit": "iter/sec",
            "range": "stddev: 0.00009513209683451494",
            "extra": "mean: 53.32951578947393 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.40559309944879,
            "unit": "iter/sec",
            "range": "stddev: 0.0004967846703658364",
            "extra": "mean: 51.531534999999806 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 345.7292754067377,
            "unit": "iter/sec",
            "range": "stddev: 0.000012136642271942408",
            "extra": "mean: 2.89243657142872 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 547.9704875098033,
            "unit": "iter/sec",
            "range": "stddev: 0.000016384904932998664",
            "extra": "mean: 1.824915798922674 msec\nrounds: 557"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1183.2299075478077,
            "unit": "iter/sec",
            "range": "stddev: 0.00004629598872212133",
            "extra": "mean: 845.1442898975199 usec\nrounds: 1366"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1071.0737505739492,
            "unit": "iter/sec",
            "range": "stddev: 0.000017852197335364332",
            "extra": "mean: 933.6425241157639 usec\nrounds: 1244"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3f276fee0c42357caab3f788816c73e6dd9bc312",
          "message": "Merge pull request #750 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.0.19",
          "timestamp": "2022-12-29T16:08:04Z",
          "tree_id": "382786747ed546072351f982caa3c5c67881d651",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/3f276fee0c42357caab3f788816c73e6dd9bc312"
        },
        "date": 1672330257481,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 162.35918953012646,
            "unit": "iter/sec",
            "range": "stddev: 0.0008512861017814494",
            "extra": "mean: 6.159183246073335 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 223.19586781848312,
            "unit": "iter/sec",
            "range": "stddev: 0.00036870171602725645",
            "extra": "mean: 4.480369685039432 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 306.29784095756594,
            "unit": "iter/sec",
            "range": "stddev: 0.0003603240532180677",
            "extra": "mean: 3.2647961111111408 msec\nrounds: 360"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 639.7708863413974,
            "unit": "iter/sec",
            "range": "stddev: 0.00019869002649052517",
            "extra": "mean: 1.5630595598349493 msec\nrounds: 727"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 159.09634721114963,
            "unit": "iter/sec",
            "range": "stddev: 0.00041977060830854994",
            "extra": "mean: 6.285499431817998 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 200.46063744372884,
            "unit": "iter/sec",
            "range": "stddev: 0.00044174564249572877",
            "extra": "mean: 4.988510526315717 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 292.3197762212429,
            "unit": "iter/sec",
            "range": "stddev: 0.0003454056600511886",
            "extra": "mean: 3.4209112121211662 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 566.9569677060858,
            "unit": "iter/sec",
            "range": "stddev: 0.00028011278237930317",
            "extra": "mean: 1.7638022935779607 msec\nrounds: 654"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.551088462341898,
            "unit": "iter/sec",
            "range": "stddev: 0.0018867683790777267",
            "extra": "mean: 68.7233812500001 msec\nrounds: 16"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.874805732712838,
            "unit": "iter/sec",
            "range": "stddev: 0.002564242162438531",
            "extra": "mean: 67.22776875000048 msec\nrounds: 16"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 221.12268964793603,
            "unit": "iter/sec",
            "range": "stddev: 0.0003061060591942945",
            "extra": "mean: 4.5223762500002405 msec\nrounds: 240"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 352.9761006399835,
            "unit": "iter/sec",
            "range": "stddev: 0.0006235168214503288",
            "extra": "mean: 2.833052997602084 msec\nrounds: 417"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 714.0968613078094,
            "unit": "iter/sec",
            "range": "stddev: 0.000257125417513117",
            "extra": "mean: 1.4003702497285628 msec\nrounds: 921"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 667.0105476600997,
            "unit": "iter/sec",
            "range": "stddev: 0.00016602303454641998",
            "extra": "mean: 1.4992266666667282 msec\nrounds: 855"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "94637814913a0f17d0bb2ad192ed7e01a1dc4a4c",
          "message": "Merge pull request #751 from TeoZosa/dependabot/pip/cruft-2.12.0",
          "timestamp": "2022-12-29T16:17:28Z",
          "tree_id": "8fac5cd3d7e1a118ab017fb3eb45f9967163e7bf",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/94637814913a0f17d0bb2ad192ed7e01a1dc4a4c"
        },
        "date": 1672330809482,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 240.99578267297738,
            "unit": "iter/sec",
            "range": "stddev: 0.000013668910778035173",
            "extra": "mean: 4.149450205761335 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 320.95434350849905,
            "unit": "iter/sec",
            "range": "stddev: 0.00001419334927280493",
            "extra": "mean: 3.115707951070366 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 473.2058268263511,
            "unit": "iter/sec",
            "range": "stddev: 0.00001162342748998644",
            "extra": "mean: 2.1132453222452874 msec\nrounds: 481"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 898.6871415480064,
            "unit": "iter/sec",
            "range": "stddev: 0.000011087449242601435",
            "extra": "mean: 1.1127342917997918 msec\nrounds: 939"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 227.2170231783988,
            "unit": "iter/sec",
            "range": "stddev: 0.000017702870959530846",
            "extra": "mean: 4.401078695652362 msec\nrounds: 230"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 291.3640290406681,
            "unit": "iter/sec",
            "range": "stddev: 0.000021941614263320044",
            "extra": "mean: 3.4321326599325053 msec\nrounds: 297"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 453.8004505251918,
            "unit": "iter/sec",
            "range": "stddev: 0.000012000664161776805",
            "extra": "mean: 2.2036117391304506 msec\nrounds: 460"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 827.7822105004258,
            "unit": "iter/sec",
            "range": "stddev: 0.000013591516905287214",
            "extra": "mean: 1.2080472222222098 msec\nrounds: 864"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.908974179155468,
            "unit": "iter/sec",
            "range": "stddev: 0.00011395018059573158",
            "extra": "mean: 50.22860500000004 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.92416246555998,
            "unit": "iter/sec",
            "range": "stddev: 0.00021282849310192683",
            "extra": "mean: 47.79163809523774 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 341.0301285418771,
            "unit": "iter/sec",
            "range": "stddev: 0.000012751195802055037",
            "extra": "mean: 2.9322922413795007 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 564.5972089656897,
            "unit": "iter/sec",
            "range": "stddev: 0.000013681327114535335",
            "extra": "mean: 1.771174182444054 msec\nrounds: 581"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1212.9155481747564,
            "unit": "iter/sec",
            "range": "stddev: 0.00004231556580134246",
            "extra": "mean: 824.459709090909 usec\nrounds: 1375"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1108.235992974975,
            "unit": "iter/sec",
            "range": "stddev: 0.000012859664151833217",
            "extra": "mean: 902.3348874598236 usec\nrounds: 1244"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bf3e762dbe6b3f71043f017fc65dfea2a9d11154",
          "message": "Merge pull request #752 from TeoZosa/dependabot/pip/gitpython-3.1.30",
          "timestamp": "2022-12-29T21:30:41Z",
          "tree_id": "61f5e3aca9751ebaab7ad23d57143861acf4048c",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/bf3e762dbe6b3f71043f017fc65dfea2a9d11154"
        },
        "date": 1672352915474,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 242.38315909840847,
            "unit": "iter/sec",
            "range": "stddev: 0.00001483495701821401",
            "extra": "mean: 4.125699176954766 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 322.1649800969775,
            "unit": "iter/sec",
            "range": "stddev: 0.000016257115117886",
            "extra": "mean: 3.1039996951219893 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 469.43944304994324,
            "unit": "iter/sec",
            "range": "stddev: 0.000012954590210385898",
            "extra": "mean: 2.130200209643677 msec\nrounds: 477"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 889.0255892167379,
            "unit": "iter/sec",
            "range": "stddev: 0.000009785874917313283",
            "extra": "mean: 1.1248270152505222 msec\nrounds: 918"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 226.016084180734,
            "unit": "iter/sec",
            "range": "stddev: 0.000014830258441200073",
            "extra": "mean: 4.4244638766520215 msec\nrounds: 227"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 292.8643886534618,
            "unit": "iter/sec",
            "range": "stddev: 0.000014557796685333418",
            "extra": "mean: 3.414549664429402 msec\nrounds: 298"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 448.5822035780492,
            "unit": "iter/sec",
            "range": "stddev: 0.000012451772487324033",
            "extra": "mean: 2.229245814978055 msec\nrounds: 454"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 824.363646581391,
            "unit": "iter/sec",
            "range": "stddev: 0.000011275010251886618",
            "extra": "mean: 1.2130568883610615 msec\nrounds: 842"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.551511640634057,
            "unit": "iter/sec",
            "range": "stddev: 0.0001426697866114448",
            "extra": "mean: 53.903963157895085 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.870892658018104,
            "unit": "iter/sec",
            "range": "stddev: 0.0001176906309736541",
            "extra": "mean: 47.91361904761767 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 337.1973321183762,
            "unit": "iter/sec",
            "range": "stddev: 0.000012427535013343654",
            "extra": "mean: 2.9656225146198394 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 566.4750648064963,
            "unit": "iter/sec",
            "range": "stddev: 0.000012755841803775393",
            "extra": "mean: 1.7653027681661373 msec\nrounds: 578"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1227.9593002555991,
            "unit": "iter/sec",
            "range": "stddev: 0.00004169543544883225",
            "extra": "mean: 814.3592379583349 usec\nrounds: 1391"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1111.6441127709954,
            "unit": "iter/sec",
            "range": "stddev: 0.000012189198879510584",
            "extra": "mean: 899.5684756583651 usec\nrounds: 1253"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "38fd5bc384b38634f8dfb4e3924269b0fe036d32",
          "message": "Merge pull request #757 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.1.2",
          "timestamp": "2023-01-02T17:17:52Z",
          "tree_id": "7f9135c6730d662578a7b7242d7a5a2541a0a104",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/38fd5bc384b38634f8dfb4e3924269b0fe036d32"
        },
        "date": 1672680001305,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 242.353427861721,
            "unit": "iter/sec",
            "range": "stddev: 0.000017027641835715135",
            "extra": "mean: 4.1262053061224595 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 323.8115722798473,
            "unit": "iter/sec",
            "range": "stddev: 0.000016382335180282492",
            "extra": "mean: 3.088215757575739 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 472.5233119721358,
            "unit": "iter/sec",
            "range": "stddev: 0.000012059242490456952",
            "extra": "mean: 2.116297703549003 msec\nrounds: 479"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 902.9317439672178,
            "unit": "iter/sec",
            "range": "stddev: 0.00001051219008803511",
            "extra": "mean: 1.107503426124208 msec\nrounds: 934"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 226.71211205003127,
            "unit": "iter/sec",
            "range": "stddev: 0.000015062265732515018",
            "extra": "mean: 4.410880349345067 msec\nrounds: 229"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 294.6047558045797,
            "unit": "iter/sec",
            "range": "stddev: 0.00001795395533748776",
            "extra": "mean: 3.394378333333255 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 453.3562717088815,
            "unit": "iter/sec",
            "range": "stddev: 0.000011865560552993355",
            "extra": "mean: 2.2057707423581 msec\nrounds: 458"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 841.6862777306604,
            "unit": "iter/sec",
            "range": "stddev: 0.00001214072814637684",
            "extra": "mean: 1.1880911290322829 msec\nrounds: 868"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.196972416129416,
            "unit": "iter/sec",
            "range": "stddev: 0.00023181453177702972",
            "extra": "mean: 49.512371428570866 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.948539911706725,
            "unit": "iter/sec",
            "range": "stddev: 0.00018030039907096843",
            "extra": "mean: 47.73602380952419 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 339.8021222277126,
            "unit": "iter/sec",
            "range": "stddev: 0.00001414903651035427",
            "extra": "mean: 2.9428892128280095 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 573.7447712105338,
            "unit": "iter/sec",
            "range": "stddev: 0.00001405573037440159",
            "extra": "mean: 1.7429352739722888 msec\nrounds: 584"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1203.756833818676,
            "unit": "iter/sec",
            "range": "stddev: 0.00004246382157352711",
            "extra": "mean: 830.7325631769845 usec\nrounds: 1385"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1100.147354668911,
            "unit": "iter/sec",
            "range": "stddev: 0.00001219619904675505",
            "extra": "mean: 908.9691446842133 usec\nrounds: 1251"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f636cbf8b178cf25b86ae1630942272ca92fed71",
          "message": "Merge pull request #758 from TeoZosa/dependabot/pip/pygments-2.14.0",
          "timestamp": "2023-01-02T17:25:11Z",
          "tree_id": "a4c5e6b707159cc5db6abdccc915f66d926c3ed7",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/f636cbf8b178cf25b86ae1630942272ca92fed71"
        },
        "date": 1672680451365,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 246.73892687971173,
            "unit": "iter/sec",
            "range": "stddev: 0.0003757974818916047",
            "extra": "mean: 4.052866779661048 msec\nrounds: 295"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 314.5088334094615,
            "unit": "iter/sec",
            "range": "stddev: 0.0002976710480205624",
            "extra": "mean: 3.1795609336609387 msec\nrounds: 407"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 452.25246601963187,
            "unit": "iter/sec",
            "range": "stddev: 0.00024692643416147735",
            "extra": "mean: 2.2111543333333445 msec\nrounds: 600"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 867.0650462639475,
            "unit": "iter/sec",
            "range": "stddev: 0.00010385102591730464",
            "extra": "mean: 1.1533160104986924 msec\nrounds: 1143"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 224.11020071113464,
            "unit": "iter/sec",
            "range": "stddev: 0.00034691613893761354",
            "extra": "mean: 4.462090510948868 msec\nrounds: 274"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 283.0835121338837,
            "unit": "iter/sec",
            "range": "stddev: 0.00028082736899039335",
            "extra": "mean: 3.532526470588129 msec\nrounds: 374"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 431.1758074440575,
            "unit": "iter/sec",
            "range": "stddev: 0.0002102045069533472",
            "extra": "mean: 2.319239583333404 msec\nrounds: 576"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 807.4026590460721,
            "unit": "iter/sec",
            "range": "stddev: 0.00014855604271928784",
            "extra": "mean: 1.2385393939394223 msec\nrounds: 891"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.834394450079323,
            "unit": "iter/sec",
            "range": "stddev: 0.0025382610730265895",
            "extra": "mean: 56.07142999999937 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 18.429643432035117,
            "unit": "iter/sec",
            "range": "stddev: 0.0038814225410155646",
            "extra": "mean: 54.26040952380888 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 310.2888044076152,
            "unit": "iter/sec",
            "range": "stddev: 0.0002136297672621034",
            "extra": "mean: 3.2228039999997424 msec\nrounds: 425"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 537.8734503094637,
            "unit": "iter/sec",
            "range": "stddev: 0.00019364894241121334",
            "extra": "mean: 1.8591733788396756 msec\nrounds: 586"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1161.3702658866587,
            "unit": "iter/sec",
            "range": "stddev: 0.00011233632754408498",
            "extra": "mean: 861.0518362432337 usec\nrounds: 1661"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1046.1607696192068,
            "unit": "iter/sec",
            "range": "stddev: 0.00011907531435857802",
            "extra": "mean: 955.8760269360808 usec\nrounds: 1485"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "32a607fdc879226b79e37d62f3241496d43de46f",
          "message": "Merge pull request #762 from TeoZosa/dependabot/pip/pygments-2.14.0",
          "timestamp": "2023-01-03T11:21:57Z",
          "tree_id": "191ae65430e9797313ee608fcf4604a517f9fe1a",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/32a607fdc879226b79e37d62f3241496d43de46f"
        },
        "date": 1672745120759,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 213.68505576942604,
            "unit": "iter/sec",
            "range": "stddev: 0.00011372563662863724",
            "extra": "mean: 4.679784444444428 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 281.6111839441087,
            "unit": "iter/sec",
            "range": "stddev: 0.00004988259974590976",
            "extra": "mean: 3.550995333333316 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 415.5409320424374,
            "unit": "iter/sec",
            "range": "stddev: 0.00003937400016070443",
            "extra": "mean: 2.4065017977528007 msec\nrounds: 445"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 779.6432720417513,
            "unit": "iter/sec",
            "range": "stddev: 0.000026654505559508163",
            "extra": "mean: 1.2826378881987557 msec\nrounds: 966"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 199.90547326906554,
            "unit": "iter/sec",
            "range": "stddev: 0.00004968062025975621",
            "extra": "mean: 5.00236428571436 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 257.13330647718715,
            "unit": "iter/sec",
            "range": "stddev: 0.0000546851916682176",
            "extra": "mean: 3.8890333333333458 msec\nrounds: 285"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 397.976204483626,
            "unit": "iter/sec",
            "range": "stddev: 0.000033454984669003685",
            "extra": "mean: 2.5127130434783145 msec\nrounds: 437"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 706.279924957061,
            "unit": "iter/sec",
            "range": "stddev: 0.00001518869770093632",
            "extra": "mean: 1.4158692108667765 msec\nrounds: 773"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 15.987055375304127,
            "unit": "iter/sec",
            "range": "stddev: 0.0001041149513198161",
            "extra": "mean: 62.55060588235291 msec\nrounds: 17"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 16.592441518231947,
            "unit": "iter/sec",
            "range": "stddev: 0.00018642880501183165",
            "extra": "mean: 60.26840588235249 msec\nrounds: 17"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 295.66000582380667,
            "unit": "iter/sec",
            "range": "stddev: 0.000027786850111058803",
            "extra": "mean: 3.3822633440517897 msec\nrounds: 311"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 467.98552302256445,
            "unit": "iter/sec",
            "range": "stddev: 0.000031883595511677235",
            "extra": "mean: 2.1368182364730623 msec\nrounds: 499"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1002.0473376014523,
            "unit": "iter/sec",
            "range": "stddev: 0.000052865528309828254",
            "extra": "mean: 997.956845425733 usec\nrounds: 1585"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 889.4858252644029,
            "unit": "iter/sec",
            "range": "stddev: 0.000022848468344848962",
            "extra": "mean: 1.1242450094162506 msec\nrounds: 1062"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "303e1a87e5cd8e0c2bc00294c93b2b2366378d70",
          "message": "Merge pull request #764 from TeoZosa/dependabot/github_actions/release-drafter/release-drafter-5.22.0",
          "timestamp": "2023-01-03T20:28:20Z",
          "tree_id": "a08f54dce626322e6027d8fdb197cdb93b266bbf",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/303e1a87e5cd8e0c2bc00294c93b2b2366378d70"
        },
        "date": 1672777870147,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 241.104427543298,
            "unit": "iter/sec",
            "range": "stddev: 0.000014923609576243075",
            "extra": "mean: 4.147580408163256 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 323.1991035560441,
            "unit": "iter/sec",
            "range": "stddev: 0.000013881421578921795",
            "extra": "mean: 3.0940679878049093 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 468.4431190253373,
            "unit": "iter/sec",
            "range": "stddev: 0.000011825831833959581",
            "extra": "mean: 2.1347308977035304 msec\nrounds: 479"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 901.5696415560651,
            "unit": "iter/sec",
            "range": "stddev: 0.000009058239589237027",
            "extra": "mean: 1.1091766558089167 msec\nrounds: 921"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 226.01529655597136,
            "unit": "iter/sec",
            "range": "stddev: 0.000016361955749919563",
            "extra": "mean: 4.42447929515406 msec\nrounds: 227"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 292.2685520907741,
            "unit": "iter/sec",
            "range": "stddev: 0.000015388955490471963",
            "extra": "mean: 3.4215107744107054 msec\nrounds: 297"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 449.06057709014584,
            "unit": "iter/sec",
            "range": "stddev: 0.000012606706561065353",
            "extra": "mean: 2.226871052631407 msec\nrounds: 456"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 830.8556149153941,
            "unit": "iter/sec",
            "range": "stddev: 0.000008387888930309303",
            "extra": "mean: 1.2035785545023123 msec\nrounds: 844"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.198835412098138,
            "unit": "iter/sec",
            "range": "stddev: 0.00012934215660872245",
            "extra": "mean: 49.50780476190462 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.976384786007976,
            "unit": "iter/sec",
            "range": "stddev: 0.00006957485588462883",
            "extra": "mean: 47.672657142857 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 339.00149785133283,
            "unit": "iter/sec",
            "range": "stddev: 0.00003220023301410285",
            "extra": "mean: 2.9498394736844036 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 568.3941949448007,
            "unit": "iter/sec",
            "range": "stddev: 0.00001176895657366625",
            "extra": "mean: 1.7593423875434098 msec\nrounds: 578"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1204.0784120561832,
            "unit": "iter/sec",
            "range": "stddev: 0.00004255569650313475",
            "extra": "mean: 830.5106959706368 usec\nrounds: 1365"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1094.1975519591779,
            "unit": "iter/sec",
            "range": "stddev: 0.00001312557045833318",
            "extra": "mean: 913.9117504051114 usec\nrounds: 1234"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b39171a1b0e66cd733edd6f3d680fbb120a24372",
          "message": "Merge pull request #763 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.1.3",
          "timestamp": "2023-01-03T20:39:34Z",
          "tree_id": "ae2b9ad8e633ffc407b51798dfb3100ed7f73f95",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/b39171a1b0e66cd733edd6f3d680fbb120a24372"
        },
        "date": 1672778566124,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 252.26006791116887,
            "unit": "iter/sec",
            "range": "stddev: 0.000013187242418030915",
            "extra": "mean: 3.964162890625008 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 331.76626434741013,
            "unit": "iter/sec",
            "range": "stddev: 0.000013929715084351028",
            "extra": "mean: 3.0141702380952355 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 479.8757903356325,
            "unit": "iter/sec",
            "range": "stddev: 0.000011209941101564986",
            "extra": "mean: 2.0838725773196116 msec\nrounds: 485"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 906.9357445339715,
            "unit": "iter/sec",
            "range": "stddev: 0.000016732475813768918",
            "extra": "mean: 1.1026139459459166 msec\nrounds: 925"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 234.45666555333327,
            "unit": "iter/sec",
            "range": "stddev: 0.00001377073528821887",
            "extra": "mean: 4.265180508474493 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 298.97068242178784,
            "unit": "iter/sec",
            "range": "stddev: 0.000010832178919585823",
            "extra": "mean: 3.344809570957195 msec\nrounds: 303"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 455.6633664879921,
            "unit": "iter/sec",
            "range": "stddev: 0.00001269337806797168",
            "extra": "mean: 2.194602580645141 msec\nrounds: 465"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 827.6453051868591,
            "unit": "iter/sec",
            "range": "stddev: 0.000008816421877484276",
            "extra": "mean: 1.2082470518868322 msec\nrounds: 848"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.589897564772368,
            "unit": "iter/sec",
            "range": "stddev: 0.0006383095037461332",
            "extra": "mean: 53.79265789473676 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.283158234221673,
            "unit": "iter/sec",
            "range": "stddev: 0.0005422543633810456",
            "extra": "mean: 51.85872500000066 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 342.17168700372974,
            "unit": "iter/sec",
            "range": "stddev: 0.000012396234287561673",
            "extra": "mean: 2.9225094827588696 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 540.7224876767386,
            "unit": "iter/sec",
            "range": "stddev: 0.00001059689842628312",
            "extra": "mean: 1.84937749546276 msec\nrounds: 551"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1151.9701232753616,
            "unit": "iter/sec",
            "range": "stddev: 0.000049961212726400465",
            "extra": "mean: 868.0780688623506 usec\nrounds: 1336"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1040.6831864524486,
            "unit": "iter/sec",
            "range": "stddev: 0.000018911971555708422",
            "extra": "mean: 960.9072319202809 usec\nrounds: 1203"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b84599e42755c96e2c4c51313957fcd1054482c6",
          "message": "Merge pull request #761 from TeoZosa/dependabot/pip/importlib-metadata-6.0.0\n\n⬆️ Bump importlib-metadata from 4.13.0 to 6.0.0",
          "timestamp": "2023-01-04T22:52:06+09:00",
          "tree_id": "4ce2f1ff5e6987afa410c61c14774dcdd8d386a3",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/b84599e42755c96e2c4c51313957fcd1054482c6"
        },
        "date": 1672840757122,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 219.4356303943031,
            "unit": "iter/sec",
            "range": "stddev: 0.0001548986267055852",
            "extra": "mean: 4.557145064377666 msec\nrounds: 233"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 286.9228120088988,
            "unit": "iter/sec",
            "range": "stddev: 0.00007095068556012535",
            "extra": "mean: 3.485257909604571 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 422.84921709934366,
            "unit": "iter/sec",
            "range": "stddev: 0.00008959660767517133",
            "extra": "mean: 2.364909191176441 msec\nrounds: 544"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 793.6432491799073,
            "unit": "iter/sec",
            "range": "stddev: 0.00005264586689034525",
            "extra": "mean: 1.2600119777158396 msec\nrounds: 1077"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 204.3491479637327,
            "unit": "iter/sec",
            "range": "stddev: 0.0001612353048808914",
            "extra": "mean: 4.893585365853727 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 259.96702568084385,
            "unit": "iter/sec",
            "range": "stddev: 0.00009666300510850695",
            "extra": "mean: 3.846641693811119 msec\nrounds: 307"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 404.76550048718576,
            "unit": "iter/sec",
            "range": "stddev: 0.00010976126413363977",
            "extra": "mean: 2.470566287878723 msec\nrounds: 528"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 735.0217758283794,
            "unit": "iter/sec",
            "range": "stddev: 0.00005414041037510954",
            "extra": "mean: 1.3605039100684964 msec\nrounds: 1023"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 16.210343896724353,
            "unit": "iter/sec",
            "range": "stddev: 0.000606064286472545",
            "extra": "mean: 61.68900588235339 msec\nrounds: 17"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 16.923139987086167,
            "unit": "iter/sec",
            "range": "stddev: 0.0006673527737082281",
            "extra": "mean: 59.09068888888748 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 301.52247080087733,
            "unit": "iter/sec",
            "range": "stddev: 0.00013581463443670727",
            "extra": "mean: 3.316502406417301 msec\nrounds: 374"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 476.97140918242974,
            "unit": "iter/sec",
            "range": "stddev: 0.00008496721556385456",
            "extra": "mean: 2.096561724137903 msec\nrounds: 580"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1035.2505465590818,
            "unit": "iter/sec",
            "range": "stddev: 0.000060863307449070546",
            "extra": "mean: 965.9497435898528 usec\nrounds: 1560"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 937.7712709245149,
            "unit": "iter/sec",
            "range": "stddev: 0.00004762609646996245",
            "extra": "mean: 1.0663581099196353 msec\nrounds: 1492"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eb88bbf190d39eb2b6cca816200f06d6fa049b81",
          "message": "Merge pull request #759 from TeoZosa/dependabot/pip/docs/importlib-metadata-6.0.0\n\n⬆️ Bump importlib-metadata from 5.2.0 to 6.0.0 in /docs",
          "timestamp": "2023-01-04T22:52:20+09:00",
          "tree_id": "4ce2f1ff5e6987afa410c61c14774dcdd8d386a3",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/eb88bbf190d39eb2b6cca816200f06d6fa049b81"
        },
        "date": 1672841064026,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 240.775212954777,
            "unit": "iter/sec",
            "range": "stddev: 0.000014276780981394664",
            "extra": "mean: 4.1532514403292105 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 320.1273147309658,
            "unit": "iter/sec",
            "range": "stddev: 0.00004378128156385766",
            "extra": "mean: 3.123757186544352 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 467.38486507862933,
            "unit": "iter/sec",
            "range": "stddev: 0.00001229135568771607",
            "extra": "mean: 2.1395643605870025 msec\nrounds: 477"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 887.757676737176,
            "unit": "iter/sec",
            "range": "stddev: 0.00004674945420146204",
            "extra": "mean: 1.1264335146899032 msec\nrounds: 919"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 225.21870662625787,
            "unit": "iter/sec",
            "range": "stddev: 0.000027766730059599486",
            "extra": "mean: 4.440128508771978 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 294.4789239759654,
            "unit": "iter/sec",
            "range": "stddev: 0.000015013299768610381",
            "extra": "mean: 3.3958287625419916 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 446.5944388926772,
            "unit": "iter/sec",
            "range": "stddev: 0.000013291879657884817",
            "extra": "mean: 2.239168052516466 msec\nrounds: 457"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 835.3717222347775,
            "unit": "iter/sec",
            "range": "stddev: 0.00001054059615205225",
            "extra": "mean: 1.1970718823529372 msec\nrounds: 850"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.106172077812026,
            "unit": "iter/sec",
            "range": "stddev: 0.00018139324999306736",
            "extra": "mean: 49.735971428571446 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.15913148012242,
            "unit": "iter/sec",
            "range": "stddev: 0.00007919419561575332",
            "extra": "mean: 47.26091904761936 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 339.21399581168413,
            "unit": "iter/sec",
            "range": "stddev: 0.000013229369829952146",
            "extra": "mean: 2.9479915697675216 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 572.6279111305315,
            "unit": "iter/sec",
            "range": "stddev: 0.000010457497784285292",
            "extra": "mean: 1.746334715025877 msec\nrounds: 579"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1215.273106298314,
            "unit": "iter/sec",
            "range": "stddev: 0.000041971546889481226",
            "extra": "mean: 822.8603058994455 usec\nrounds: 1373"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1099.4824773831003,
            "unit": "iter/sec",
            "range": "stddev: 0.00001628925406362856",
            "extra": "mean: 909.5188150520775 usec\nrounds: 1249"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "73c45809ef5737c2ec65e032e603fe1a936652c5",
          "message": "Merge pull request #756 from TeoZosa/dependabot/pip/rich-13.0.0\n\n⬆️ Bump rich from 12.6.0 to 13.0.0",
          "timestamp": "2023-01-04T22:52:45+09:00",
          "tree_id": "3ef513042fa23d6a7634201feea5cb4decb7d810",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/73c45809ef5737c2ec65e032e603fe1a936652c5"
        },
        "date": 1672841367847,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 226.2122125680438,
            "unit": "iter/sec",
            "range": "stddev: 0.00011749458300053253",
            "extra": "mean: 4.4206278195488835 msec\nrounds: 266"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 297.0353513128838,
            "unit": "iter/sec",
            "range": "stddev: 0.0001002298283373742",
            "extra": "mean: 3.3666026470588166 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 431.8684201537979,
            "unit": "iter/sec",
            "range": "stddev: 0.00008394842191422844",
            "extra": "mean: 2.3155200828156826 msec\nrounds: 483"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 811.1458195149933,
            "unit": "iter/sec",
            "range": "stddev: 0.000055334528655079344",
            "extra": "mean: 1.2328239583333214 msec\nrounds: 960"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 207.02185206599594,
            "unit": "iter/sec",
            "range": "stddev: 0.00013825581020030493",
            "extra": "mean: 4.830407949790791 msec\nrounds: 239"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 270.06869039306844,
            "unit": "iter/sec",
            "range": "stddev: 0.00011978147350014962",
            "extra": "mean: 3.7027616883118193 msec\nrounds: 308"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 413.8295527003457,
            "unit": "iter/sec",
            "range": "stddev: 0.00008465257150168253",
            "extra": "mean: 2.4164538116592675 msec\nrounds: 446"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 752.2533328764026,
            "unit": "iter/sec",
            "range": "stddev: 0.000053007578000957876",
            "extra": "mean: 1.3293394077448413 msec\nrounds: 878"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 16.507587024559765,
            "unit": "iter/sec",
            "range": "stddev: 0.0008069254142010886",
            "extra": "mean: 60.578205555555364 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.357658999531886,
            "unit": "iter/sec",
            "range": "stddev: 0.0009111280165892698",
            "extra": "mean: 57.61145555555439 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 309.7468090531492,
            "unit": "iter/sec",
            "range": "stddev: 0.00011616651292920726",
            "extra": "mean: 3.228443266475784 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 482.8000168768456,
            "unit": "iter/sec",
            "range": "stddev: 0.00007286463954781405",
            "extra": "mean: 2.0712509632224885 msec\nrounds: 571"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1051.8938305560177,
            "unit": "iter/sec",
            "range": "stddev: 0.00006221642189418586",
            "extra": "mean: 950.6662848962739 usec\nrounds: 1397"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 927.9119429525546,
            "unit": "iter/sec",
            "range": "stddev: 0.000039084483162987837",
            "extra": "mean: 1.0776884677419563 msec\nrounds: 1240"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "93114cb2cb4f9d09ff5f94b18b6d312d75234035",
          "message": "Merge pull request #765 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.2.1",
          "timestamp": "2023-01-04T18:50:34Z",
          "tree_id": "d9c771061fedb833bc5dc5f796d19abe63337f10",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/93114cb2cb4f9d09ff5f94b18b6d312d75234035"
        },
        "date": 1672858365920,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 242.65861513544627,
            "unit": "iter/sec",
            "range": "stddev: 0.000018173657564423184",
            "extra": "mean: 4.121015853658539 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 321.1842454819006,
            "unit": "iter/sec",
            "range": "stddev: 0.0000473811259191315",
            "extra": "mean: 3.113477743902455 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 475.74043877451396,
            "unit": "iter/sec",
            "range": "stddev: 0.000010476185454315453",
            "extra": "mean: 2.101986542443092 msec\nrounds: 483"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 905.9792591924692,
            "unit": "iter/sec",
            "range": "stddev: 0.000012735396398510452",
            "extra": "mean: 1.1037780278671443 msec\nrounds: 933"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 227.25186591073398,
            "unit": "iter/sec",
            "range": "stddev: 0.000013304043854060867",
            "extra": "mean: 4.400403913043365 msec\nrounds: 230"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 295.40410296605864,
            "unit": "iter/sec",
            "range": "stddev: 0.000020400267775317966",
            "extra": "mean: 3.3851933333332815 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 454.15638738165615,
            "unit": "iter/sec",
            "range": "stddev: 0.000010856314796984553",
            "extra": "mean: 2.2018846982760527 msec\nrounds: 464"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 840.194432715352,
            "unit": "iter/sec",
            "range": "stddev: 0.000011963584617680255",
            "extra": "mean: 1.1902006976744492 msec\nrounds: 860"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.174804109857398,
            "unit": "iter/sec",
            "range": "stddev: 0.0002729294394249173",
            "extra": "mean: 49.56677619047615 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.10671121461904,
            "unit": "iter/sec",
            "range": "stddev: 0.00006801164100040291",
            "extra": "mean: 47.37829545454598 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 342.30790120834894,
            "unit": "iter/sec",
            "range": "stddev: 0.000010947881912533907",
            "extra": "mean: 2.9213465317919747 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 577.9528105461432,
            "unit": "iter/sec",
            "range": "stddev: 0.000009879881274413552",
            "extra": "mean: 1.7302450680273334 msec\nrounds: 588"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1210.7512601661463,
            "unit": "iter/sec",
            "range": "stddev: 0.000040961777122752504",
            "extra": "mean: 825.9334785765775 usec\nrounds: 1377"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1108.9303037748764,
            "unit": "iter/sec",
            "range": "stddev: 0.000012694400450757307",
            "extra": "mean: 901.7699278267805 usec\nrounds: 1247"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d6c1f874e45e1daaabc306ca037af79e37bdabb5",
          "message": "Merge pull request #766 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.2.3",
          "timestamp": "2023-01-05T17:02:10Z",
          "tree_id": "fefaa29742d74a16c94ee32e80776b945caf4ba3",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/d6c1f874e45e1daaabc306ca037af79e37bdabb5"
        },
        "date": 1672938272507,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 242.7287626945912,
            "unit": "iter/sec",
            "range": "stddev: 0.000012592477282419903",
            "extra": "mean: 4.1198248979591705 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 322.2028823856007,
            "unit": "iter/sec",
            "range": "stddev: 0.00001353964634104057",
            "extra": "mean: 3.103634556574936 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 473.8771041775799,
            "unit": "iter/sec",
            "range": "stddev: 0.000011754822387214047",
            "extra": "mean: 2.1102517745302625 msec\nrounds: 479"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 893.4280347606679,
            "unit": "iter/sec",
            "range": "stddev: 0.000008132990079266982",
            "extra": "mean: 1.1192843307943439 msec\nrounds: 919"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 226.7627799066116,
            "unit": "iter/sec",
            "range": "stddev: 0.000014486402861293981",
            "extra": "mean: 4.40989478260865 msec\nrounds: 230"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 295.3822305139338,
            "unit": "iter/sec",
            "range": "stddev: 0.0000139567247071685",
            "extra": "mean: 3.385443999999952 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 451.5994604709181,
            "unit": "iter/sec",
            "range": "stddev: 0.000010846850001513324",
            "extra": "mean: 2.214351626897919 msec\nrounds: 461"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 840.757900030319,
            "unit": "iter/sec",
            "range": "stddev: 0.000011336360385384795",
            "extra": "mean: 1.1894030373832212 msec\nrounds: 856"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.16033804854836,
            "unit": "iter/sec",
            "range": "stddev: 0.0002172353391408231",
            "extra": "mean: 49.60234285714295 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.074900195294703,
            "unit": "iter/sec",
            "range": "stddev: 0.00011542547771038587",
            "extra": "mean: 47.44980952380812 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 342.59603080283694,
            "unit": "iter/sec",
            "range": "stddev: 0.000014430665670850387",
            "extra": "mean: 2.9188896253602463 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 570.6273319473229,
            "unit": "iter/sec",
            "range": "stddev: 0.000010271615195784879",
            "extra": "mean: 1.7524572413792376 msec\nrounds: 580"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1213.2309308864199,
            "unit": "iter/sec",
            "range": "stddev: 0.00004246942807071928",
            "extra": "mean: 824.2453885258041 usec\nrounds: 1377"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1100.4549605300188,
            "unit": "iter/sec",
            "range": "stddev: 0.00001260147891671257",
            "extra": "mean: 908.7150641025454 usec\nrounds: 1248"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dd3dcf17494bd78be7074c2355109c4131e433cf",
          "message": "Merge pull request #768 from TeoZosa/dependabot/pip/docs/orjson-3.8.4",
          "timestamp": "2023-01-05T18:16:35Z",
          "tree_id": "4f656f450805c9f564a68fbecfb13b7fa8d5bfd7",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/dd3dcf17494bd78be7074c2355109c4131e433cf"
        },
        "date": 1672947589836,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 250.87648738150716,
            "unit": "iter/sec",
            "range": "stddev: 0.0000163578339091054",
            "extra": "mean: 3.986025196850364 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 327.14553855024843,
            "unit": "iter/sec",
            "range": "stddev: 0.000017946495693598023",
            "extra": "mean: 3.05674350453171 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 471.65333717526283,
            "unit": "iter/sec",
            "range": "stddev: 0.000013997393685483276",
            "extra": "mean: 2.12020126050419 msec\nrounds: 476"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 882.6820895123428,
            "unit": "iter/sec",
            "range": "stddev: 0.000009950251588433324",
            "extra": "mean: 1.1329107182320557 msec\nrounds: 905"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 232.63586132289745,
            "unit": "iter/sec",
            "range": "stddev: 0.00002064917428410345",
            "extra": "mean: 4.298563404255223 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 297.2675091550502,
            "unit": "iter/sec",
            "range": "stddev: 0.000011828824592955201",
            "extra": "mean: 3.3639734219268984 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 455.70781952112173,
            "unit": "iter/sec",
            "range": "stddev: 0.000014109855410726495",
            "extra": "mean: 2.1943885032537844 msec\nrounds: 461"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 814.1523725749611,
            "unit": "iter/sec",
            "range": "stddev: 0.000008633162544675651",
            "extra": "mean: 1.2282713085233041 msec\nrounds: 833"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.72079064007772,
            "unit": "iter/sec",
            "range": "stddev: 0.00012662502108516974",
            "extra": "mean: 53.41654736842079 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.393862288644243,
            "unit": "iter/sec",
            "range": "stddev: 0.00006856229188551402",
            "extra": "mean: 51.56270500000062 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 342.48012625439736,
            "unit": "iter/sec",
            "range": "stddev: 0.00004751965403179303",
            "extra": "mean: 2.9198774566474865 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 535.5527268395731,
            "unit": "iter/sec",
            "range": "stddev: 0.000011621327125145561",
            "extra": "mean: 1.8672297794117179 msec\nrounds: 544"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1126.9562308821833,
            "unit": "iter/sec",
            "range": "stddev: 0.00003920625632618237",
            "extra": "mean: 887.3459080280326 usec\nrounds: 1283"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1024.92302905957,
            "unit": "iter/sec",
            "range": "stddev: 0.00001602443370963818",
            "extra": "mean: 975.6830236486751 usec\nrounds: 1184"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "639b1120d0c461b03a0676d046937482bf1fe415",
          "message": "Merge pull request #771 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.2.4",
          "timestamp": "2023-01-06T15:41:04Z",
          "tree_id": "524ff09ef85bca5ce1866f85d1d22b6e7b3e2e51",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/639b1120d0c461b03a0676d046937482bf1fe415"
        },
        "date": 1673019841499,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 169.67424800689193,
            "unit": "iter/sec",
            "range": "stddev: 0.00044114947560391053",
            "extra": "mean: 5.893646276595735 msec\nrounds: 188"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 202.9068450664271,
            "unit": "iter/sec",
            "range": "stddev: 0.0008369459215990037",
            "extra": "mean: 4.928369960474338 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 308.23075633926845,
            "unit": "iter/sec",
            "range": "stddev: 0.00023649996923674616",
            "extra": "mean: 3.2443225714286075 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 596.8020071563559,
            "unit": "iter/sec",
            "range": "stddev: 0.0002717996946750815",
            "extra": "mean: 1.675597581792332 msec\nrounds: 703"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 151.98667548538572,
            "unit": "iter/sec",
            "range": "stddev: 0.0008757423144848003",
            "extra": "mean: 6.579524137931124 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 204.0656376220459,
            "unit": "iter/sec",
            "range": "stddev: 0.00034045038054301367",
            "extra": "mean: 4.900384070796477 msec\nrounds: 226"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 298.51275676706433,
            "unit": "iter/sec",
            "range": "stddev: 0.00038594717025754757",
            "extra": "mean: 3.3499405882352984 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 567.4492211759688,
            "unit": "iter/sec",
            "range": "stddev: 0.0002972526922233814",
            "extra": "mean: 1.7622722222221452 msec\nrounds: 684"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.86339748097013,
            "unit": "iter/sec",
            "range": "stddev: 0.0015315385369921342",
            "extra": "mean: 67.27936874999929 msec\nrounds: 16"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 15.094769681174071,
            "unit": "iter/sec",
            "range": "stddev: 0.0018130945244241845",
            "extra": "mean: 66.2481124999994 msec\nrounds: 16"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.82636816902857,
            "unit": "iter/sec",
            "range": "stddev: 0.0006679397442824766",
            "extra": "mean: 4.85846400000014 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 335.8151315313374,
            "unit": "iter/sec",
            "range": "stddev: 0.00030679092588905665",
            "extra": "mean: 2.9778288888887743 msec\nrounds: 405"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 720.8249427881381,
            "unit": "iter/sec",
            "range": "stddev: 0.00022796854699754247",
            "extra": "mean: 1.3872993852460458 msec\nrounds: 976"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 648.0699302486332,
            "unit": "iter/sec",
            "range": "stddev: 0.00019617832706482718",
            "extra": "mean: 1.5430433558556684 msec\nrounds: 888"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "304b1f91062f070502017967302355528e614edb",
          "message": "Merge pull request #773 from TeoZosa/feat/make-sentry-sdk-dependency-an-optional-extra\n\n✨  Make `Sentry` integration an optional extra",
          "timestamp": "2023-01-09T15:06:54+09:00",
          "tree_id": "4e1ccee7db11f148caf18b506df8a003c10da5ae",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/304b1f91062f070502017967302355528e614edb"
        },
        "date": 1673244602752,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 240.08702413615666,
            "unit": "iter/sec",
            "range": "stddev: 0.000020599508300039507",
            "extra": "mean: 4.165156378600812 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 319.8234809118182,
            "unit": "iter/sec",
            "range": "stddev: 0.000019700288789711726",
            "extra": "mean: 3.126724770642216 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 463.1015500263963,
            "unit": "iter/sec",
            "range": "stddev: 0.000013013945963765435",
            "extra": "mean: 2.159353601694922 msec\nrounds: 472"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 898.977130466962,
            "unit": "iter/sec",
            "range": "stddev: 0.000011593909366016496",
            "extra": "mean: 1.1123753498385025 msec\nrounds: 929"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 225.3448294777103,
            "unit": "iter/sec",
            "range": "stddev: 0.000018157495040106322",
            "extra": "mean: 4.437643421052684 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 292.6822057595171,
            "unit": "iter/sec",
            "range": "stddev: 0.00001587799722945753",
            "extra": "mean: 3.416675084175264 msec\nrounds: 297"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 451.6819208367968,
            "unit": "iter/sec",
            "range": "stddev: 0.000013737320374930902",
            "extra": "mean: 2.2139473684210693 msec\nrounds: 456"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 827.5002158380628,
            "unit": "iter/sec",
            "range": "stddev: 0.000011531717175431194",
            "extra": "mean: 1.2084588992973684 msec\nrounds: 854"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.019897776400125,
            "unit": "iter/sec",
            "range": "stddev: 0.00012008428388742587",
            "extra": "mean: 49.950304999999595 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.842536719339016,
            "unit": "iter/sec",
            "range": "stddev: 0.00012657418961373263",
            "extra": "mean: 47.978804761904875 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 337.4610126145931,
            "unit": "iter/sec",
            "range": "stddev: 0.000012647588760921717",
            "extra": "mean: 2.963305278592518 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 564.022744315705,
            "unit": "iter/sec",
            "range": "stddev: 0.00001323666409702991",
            "extra": "mean: 1.7729781468533508 msec\nrounds: 572"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1195.3098268691947,
            "unit": "iter/sec",
            "range": "stddev: 0.000042164048073605235",
            "extra": "mean: 836.6031781226476 usec\nrounds: 1353"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1080.8953040730526,
            "unit": "iter/sec",
            "range": "stddev: 0.00001333689799849885",
            "extra": "mean: 925.1589827726875 usec\nrounds: 1219"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8454547e2de3bf9d9db9078d09bc0131a13aa785",
          "message": "Merge pull request #776 from TeoZosa/dependabot/pip/rich-13.0.1",
          "timestamp": "2023-01-09T08:27:40Z",
          "tree_id": "a1ef4dd0d72f0fb75a7e651d220915f92c16690a",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/8454547e2de3bf9d9db9078d09bc0131a13aa785"
        },
        "date": 1673253665623,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 250.26515246686938,
            "unit": "iter/sec",
            "range": "stddev: 0.000036492552824228874",
            "extra": "mean: 3.995762055336018 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 327.642488323677,
            "unit": "iter/sec",
            "range": "stddev: 0.00001617890217567553",
            "extra": "mean: 3.0521072072072135 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 469.6252008529982,
            "unit": "iter/sec",
            "range": "stddev: 0.000019466176528419815",
            "extra": "mean: 2.129357620041816 msec\nrounds: 479"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 879.9806758606011,
            "unit": "iter/sec",
            "range": "stddev: 0.000011831076982145826",
            "extra": "mean: 1.1363885906040183 msec\nrounds: 894"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 232.54205433612853,
            "unit": "iter/sec",
            "range": "stddev: 0.000015484054994253844",
            "extra": "mean: 4.30029743589754 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 296.16629403977925,
            "unit": "iter/sec",
            "range": "stddev: 0.00001867722831871744",
            "extra": "mean: 3.3764814569536603 msec\nrounds: 302"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 449.3610135767323,
            "unit": "iter/sec",
            "range": "stddev: 0.000015218104928809723",
            "extra": "mean: 2.2253821978021713 msec\nrounds: 455"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 802.1955611387532,
            "unit": "iter/sec",
            "range": "stddev: 0.000011261826227918484",
            "extra": "mean: 1.2465788249693808 msec\nrounds: 817"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.444282976072472,
            "unit": "iter/sec",
            "range": "stddev: 0.00008394772391671791",
            "extra": "mean: 54.21734210526302 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.197306848216833,
            "unit": "iter/sec",
            "range": "stddev: 0.00011291652436062931",
            "extra": "mean: 52.09064000000012 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 337.78740532419283,
            "unit": "iter/sec",
            "range": "stddev: 0.0001524618377547327",
            "extra": "mean: 2.960441935483787 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 528.625877317569,
            "unit": "iter/sec",
            "range": "stddev: 0.000014378806774167863",
            "extra": "mean: 1.891697026022159 msec\nrounds: 538"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1136.5444105384488,
            "unit": "iter/sec",
            "range": "stddev: 0.0000395025195069019",
            "extra": "mean: 879.8600307455125 usec\nrounds: 1301"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1021.5880401044276,
            "unit": "iter/sec",
            "range": "stddev: 0.000018463498840384506",
            "extra": "mean: 978.86815501264 usec\nrounds: 1187"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0064cb0024ffa21814901a9d51f26c61dc9f9d7c",
          "message": "Merge pull request #775 from TeoZosa/fix/remove-system-git-executable-dependence\n\n✨ Remove dependence on available system `git` executable",
          "timestamp": "2023-01-09T19:39:48+09:00",
          "tree_id": "6161a9739206bb5fe2086f487866a1d441c21e8a",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/0064cb0024ffa21814901a9d51f26c61dc9f9d7c"
        },
        "date": 1673260972941,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 238.9230757781723,
            "unit": "iter/sec",
            "range": "stddev: 0.000028688258343275677",
            "extra": "mean: 4.185447540983644 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 318.97306768078346,
            "unit": "iter/sec",
            "range": "stddev: 0.000020502692816415397",
            "extra": "mean: 3.1350609230769395 msec\nrounds: 325"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 469.5176681262797,
            "unit": "iter/sec",
            "range": "stddev: 0.00001622859110676868",
            "extra": "mean: 2.1298453027140267 msec\nrounds: 479"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 896.0442107634509,
            "unit": "iter/sec",
            "range": "stddev: 0.000010189358636413115",
            "extra": "mean: 1.1160163616792707 msec\nrounds: 929"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 225.45093895866864,
            "unit": "iter/sec",
            "range": "stddev: 0.000020324018981160455",
            "extra": "mean: 4.43555482456131 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 290.8902795278765,
            "unit": "iter/sec",
            "range": "stddev: 0.00001539104657597195",
            "extra": "mean: 3.4377222972972126 msec\nrounds: 296"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 452.5523062716057,
            "unit": "iter/sec",
            "range": "stddev: 0.000015005186708188977",
            "extra": "mean: 2.209689324618834 msec\nrounds: 459"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 828.6297690913868,
            "unit": "iter/sec",
            "range": "stddev: 0.000012503455043268733",
            "extra": "mean: 1.206811578947405 msec\nrounds: 855"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.23883238937744,
            "unit": "iter/sec",
            "range": "stddev: 0.00013321497574613747",
            "extra": "mean: 49.40996499999972 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.137673800920314,
            "unit": "iter/sec",
            "range": "stddev: 0.00006397626403061172",
            "extra": "mean: 47.308895454544334 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 340.98247626811894,
            "unit": "iter/sec",
            "range": "stddev: 0.000011802139215550293",
            "extra": "mean: 2.932702028985463 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 571.5426570277015,
            "unit": "iter/sec",
            "range": "stddev: 0.000012945022785577765",
            "extra": "mean: 1.7496506825938138 msec\nrounds: 586"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1206.0804360848765,
            "unit": "iter/sec",
            "range": "stddev: 0.000041899164969887624",
            "extra": "mean: 829.1320960699393 usec\nrounds: 1374"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1078.3384557359843,
            "unit": "iter/sec",
            "range": "stddev: 0.000015095940689537074",
            "extra": "mean: 927.3526272579077 usec\nrounds: 1218"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ee41b945fb628fe36169caf6c8b69797f66a0419",
          "message": "Merge pull request #777 from TeoZosa/feat/only-install-colorama-on-windows-platforms\n\n✨  Only install `colorama` on Windows",
          "timestamp": "2023-01-09T21:47:21+09:00",
          "tree_id": "3fdee09ad0a69dc9cd22c6324bb4f632fbeab5e6",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/ee41b945fb628fe36169caf6c8b69797f66a0419"
        },
        "date": 1673268637758,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 215.7298958786587,
            "unit": "iter/sec",
            "range": "stddev: 0.000015032410601605624",
            "extra": "mean: 4.635426146788986 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 282.5740998705804,
            "unit": "iter/sec",
            "range": "stddev: 0.000018170010199244912",
            "extra": "mean: 3.5388947552447387 msec\nrounds: 286"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 414.08561515869326,
            "unit": "iter/sec",
            "range": "stddev: 0.000012596020880249555",
            "extra": "mean: 2.414959523809496 msec\nrounds: 420"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 785.6336630848099,
            "unit": "iter/sec",
            "range": "stddev: 0.000010451900003727334",
            "extra": "mean: 1.2728578814628124 msec\nrounds: 793"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 198.8589184247809,
            "unit": "iter/sec",
            "range": "stddev: 0.000045903679654685705",
            "extra": "mean: 5.0286907317071305 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 254.58782231567255,
            "unit": "iter/sec",
            "range": "stddev: 0.000019385509795228125",
            "extra": "mean: 3.9279176470587984 msec\nrounds: 272"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 397.91676429928646,
            "unit": "iter/sec",
            "range": "stddev: 0.000017060501053877448",
            "extra": "mean: 2.5130883886255835 msec\nrounds: 422"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 714.6660753045252,
            "unit": "iter/sec",
            "range": "stddev: 0.000013083996521289256",
            "extra": "mean: 1.3992548891786862 msec\nrounds: 767"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 16.03535957139101,
            "unit": "iter/sec",
            "range": "stddev: 0.00013413192619578644",
            "extra": "mean: 62.36218124999948 msec\nrounds: 16"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 16.604901317560138,
            "unit": "iter/sec",
            "range": "stddev: 0.00014116980128274305",
            "extra": "mean: 60.22318235294013 msec\nrounds: 17"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 291.6321028618902,
            "unit": "iter/sec",
            "range": "stddev: 0.000012707223825024558",
            "extra": "mean: 3.428977777777694 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 465.9241827331121,
            "unit": "iter/sec",
            "range": "stddev: 0.000016008264040046907",
            "extra": "mean: 2.146271940928239 msec\nrounds: 474"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 996.8334999693865,
            "unit": "iter/sec",
            "range": "stddev: 0.00004912765417882503",
            "extra": "mean: 1.0031765586035288 msec\nrounds: 1203"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 905.9974755691123,
            "unit": "iter/sec",
            "range": "stddev: 0.000023805028783880566",
            "extra": "mean: 1.1037558348292738 msec\nrounds: 1114"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3fe79262989d9e589264fabad47dbbaa5654b5e6",
          "message": "Merge pull request #779 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.2.6",
          "timestamp": "2023-01-09T16:08:58Z",
          "tree_id": "7b4917cfa6ca10532fd426b37c70eb148e3eaa2f",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/3fe79262989d9e589264fabad47dbbaa5654b5e6"
        },
        "date": 1673281182013,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 246.2933477335648,
            "unit": "iter/sec",
            "range": "stddev: 0.0003288290909475664",
            "extra": "mean: 4.060198983050813 msec\nrounds: 295"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 313.5208065406854,
            "unit": "iter/sec",
            "range": "stddev: 0.00025097600978096383",
            "extra": "mean: 3.189580975609766 msec\nrounds: 410"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 458.8766914897822,
            "unit": "iter/sec",
            "range": "stddev: 0.000192449106150215",
            "extra": "mean: 2.179234680134689 msec\nrounds: 594"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 837.401431949069,
            "unit": "iter/sec",
            "range": "stddev: 0.0000983992304771026",
            "extra": "mean: 1.1941703964757733 msec\nrounds: 1135"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 224.6041004347554,
            "unit": "iter/sec",
            "range": "stddev: 0.0003628957270744305",
            "extra": "mean: 4.452278467153306 msec\nrounds: 274"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 271.5384640857289,
            "unit": "iter/sec",
            "range": "stddev: 0.00023260874315035723",
            "extra": "mean: 3.6827195121950917 msec\nrounds: 369"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 426.10068871998936,
            "unit": "iter/sec",
            "range": "stddev: 0.00014956197800353012",
            "extra": "mean: 2.3468631393298374 msec\nrounds: 567"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 752.6864921320107,
            "unit": "iter/sec",
            "range": "stddev: 0.00010053891293219965",
            "extra": "mean: 1.3285743937923813 msec\nrounds: 1031"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.06879159214061,
            "unit": "iter/sec",
            "range": "stddev: 0.0017344874141001284",
            "extra": "mean: 58.58645555555637 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 18.12609042743977,
            "unit": "iter/sec",
            "range": "stddev: 0.0017210108907505693",
            "extra": "mean: 55.16909473684257 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 308.2949314233222,
            "unit": "iter/sec",
            "range": "stddev: 0.00021526523755221796",
            "extra": "mean: 3.2436472289156515 msec\nrounds: 415"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 505.33787944039926,
            "unit": "iter/sec",
            "range": "stddev: 0.00017919907123171722",
            "extra": "mean: 1.9788740181269993 msec\nrounds: 662"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1122.266036181502,
            "unit": "iter/sec",
            "range": "stddev: 0.00009755699269570297",
            "extra": "mean: 891.0543202416507 usec\nrounds: 1655"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1001.484886181522,
            "unit": "iter/sec",
            "range": "stddev: 0.00010132719734727615",
            "extra": "mean: 998.5173154362982 usec\nrounds: 1490"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2c17a319adcd65bfc0bbb57469ba75effe716efe",
          "message": "Merge pull request #778 from TeoZosa/deps/remove-typeguard\n\n:heavy_minus_sign: Remove dev dependency: `typeguard`",
          "timestamp": "2023-01-10T09:44:04+09:00",
          "tree_id": "5c3ff10b5045ff63238e1e0e7e11be5969e61247",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/2c17a319adcd65bfc0bbb57469ba75effe716efe"
        },
        "date": 1673311619883,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 257.26761135863137,
            "unit": "iter/sec",
            "range": "stddev: 0.000009890814297940602",
            "extra": "mean: 3.887003088803117 msec\nrounds: 259"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 335.526918458795,
            "unit": "iter/sec",
            "range": "stddev: 0.00007691978921189615",
            "extra": "mean: 2.980386803519035 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 488.8675688310122,
            "unit": "iter/sec",
            "range": "stddev: 0.00002785137613790838",
            "extra": "mean: 2.0455437500000575 msec\nrounds: 496"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 931.9346399215159,
            "unit": "iter/sec",
            "range": "stddev: 0.000007866768269249998",
            "extra": "mean: 1.0730366242038352 msec\nrounds: 942"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 238.81590910330195,
            "unit": "iter/sec",
            "range": "stddev: 0.000012840148703822475",
            "extra": "mean: 4.187325726140972 msec\nrounds: 241"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 304.85792584729353,
            "unit": "iter/sec",
            "range": "stddev: 0.000012567881376356371",
            "extra": "mean: 3.2802165048544953 msec\nrounds: 309"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 471.22774288626306,
            "unit": "iter/sec",
            "range": "stddev: 0.000010156238065477202",
            "extra": "mean: 2.1221161425577675 msec\nrounds: 477"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 852.905711717295,
            "unit": "iter/sec",
            "range": "stddev: 0.00000717455689726919",
            "extra": "mean: 1.1724625433525775 msec\nrounds: 865"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.818132161723103,
            "unit": "iter/sec",
            "range": "stddev: 0.00020124773900862143",
            "extra": "mean: 53.140236842105054 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.681292950731784,
            "unit": "iter/sec",
            "range": "stddev: 0.0003063255081564716",
            "extra": "mean: 50.809669999999585 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 349.99095278350086,
            "unit": "iter/sec",
            "range": "stddev: 0.000012810169010538186",
            "extra": "mean: 2.857216713880558 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 562.3492083822363,
            "unit": "iter/sec",
            "range": "stddev: 0.000011241658180618937",
            "extra": "mean: 1.7782544815467878 msec\nrounds: 569"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1134.8128401964334,
            "unit": "iter/sec",
            "range": "stddev: 0.0000468321050471405",
            "extra": "mean: 881.2025777104376 usec\nrounds: 1319"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1043.1530811705236,
            "unit": "iter/sec",
            "range": "stddev: 0.000015873440020719187",
            "extra": "mean: 958.6320723684184 usec\nrounds: 1216"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8b9c77d6363b4698601385cfa8bdf91bac8a0fc6",
          "message": "Merge pull request #781 from TeoZosa/chore/from-future-import-annotations\n\n♻️  Postpone annotation evaluation (PEP 563)",
          "timestamp": "2023-01-10T16:14:14+09:00",
          "tree_id": "1a90a31642aeef9d5c84e0c18e2d900be1317ea1",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/8b9c77d6363b4698601385cfa8bdf91bac8a0fc6"
        },
        "date": 1673335002885,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 241.71380414709827,
            "unit": "iter/sec",
            "range": "stddev: 0.00001575475571167536",
            "extra": "mean: 4.137124081632658 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 323.58076047989897,
            "unit": "iter/sec",
            "range": "stddev: 0.000013706655513525123",
            "extra": "mean: 3.0904185975609653 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 482.13476416645443,
            "unit": "iter/sec",
            "range": "stddev: 0.00001106587753068033",
            "extra": "mean: 2.074108888888907 msec\nrounds: 495"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 930.631723716869,
            "unit": "iter/sec",
            "range": "stddev: 0.000008586126180924264",
            "extra": "mean: 1.0745389121338778 msec\nrounds: 956"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 228.48162535868346,
            "unit": "iter/sec",
            "range": "stddev: 0.00001460910494877061",
            "extra": "mean: 4.376719565217304 msec\nrounds: 230"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 295.8416420425855,
            "unit": "iter/sec",
            "range": "stddev: 0.000014991488949779624",
            "extra": "mean: 3.3801867549668794 msec\nrounds: 302"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 465.5003362601686,
            "unit": "iter/sec",
            "range": "stddev: 0.000010433969933161376",
            "extra": "mean: 2.148226160337506 msec\nrounds: 474"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 848.9359306887378,
            "unit": "iter/sec",
            "range": "stddev: 0.000008897474113985372",
            "extra": "mean: 1.1779451945080293 msec\nrounds: 874"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.20642304455935,
            "unit": "iter/sec",
            "range": "stddev: 0.0001762227206858109",
            "extra": "mean: 49.48921428571464 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.1426771280631,
            "unit": "iter/sec",
            "range": "stddev: 0.00010726879455748247",
            "extra": "mean: 47.29770000000047 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 347.2313073977022,
            "unit": "iter/sec",
            "range": "stddev: 0.000011297713915413976",
            "extra": "mean: 2.879924645892162 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 588.1403562537128,
            "unit": "iter/sec",
            "range": "stddev: 0.000013126636041880884",
            "extra": "mean: 1.70027441471576 msec\nrounds: 598"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1201.5561032441685,
            "unit": "iter/sec",
            "range": "stddev: 0.00004150988573930131",
            "extra": "mean: 832.2541055719557 usec\nrounds: 1364"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1094.7073024140027,
            "unit": "iter/sec",
            "range": "stddev: 0.00001227634361766853",
            "extra": "mean: 913.4861873989895 usec\nrounds: 1238"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0830c97cb7f211f467f65497896d652c47a17afe",
          "message": "Merge pull request #788 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.2.8",
          "timestamp": "2023-01-12T15:48:00Z",
          "tree_id": "a5cd56579681b1ea7c3de969bed98ed7c03a5e44",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/0830c97cb7f211f467f65497896d652c47a17afe"
        },
        "date": 1673539910059,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 246.3708046836576,
            "unit": "iter/sec",
            "range": "stddev: 0.000018386142008829053",
            "extra": "mean: 4.058922489959836 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 327.4553298812511,
            "unit": "iter/sec",
            "range": "stddev: 0.00001726088896685879",
            "extra": "mean: 3.0538516516516663 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 489.4272024809113,
            "unit": "iter/sec",
            "range": "stddev: 0.000015164799858261605",
            "extra": "mean: 2.043204780876482 msec\nrounds: 502"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 962.8400382870635,
            "unit": "iter/sec",
            "range": "stddev: 0.000009896590495429978",
            "extra": "mean: 1.0385941176470452 msec\nrounds: 986"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 230.3163661038072,
            "unit": "iter/sec",
            "range": "stddev: 0.000020170266811700827",
            "extra": "mean: 4.341853846153878 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 299.5816465085877,
            "unit": "iter/sec",
            "range": "stddev: 0.000015680665842959754",
            "extra": "mean: 3.3379881967213043 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 467.6097121950294,
            "unit": "iter/sec",
            "range": "stddev: 0.000011328716725086567",
            "extra": "mean: 2.138535564853543 msec\nrounds: 478"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 864.599195057233,
            "unit": "iter/sec",
            "range": "stddev: 0.000010695592737157164",
            "extra": "mean: 1.15660528683907 msec\nrounds: 889"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.388834491694027,
            "unit": "iter/sec",
            "range": "stddev: 0.0001516534325990935",
            "extra": "mean: 49.04645238095284 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.117692258590093,
            "unit": "iter/sec",
            "range": "stddev: 0.00015561548661766582",
            "extra": "mean: 47.353659090908835 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 352.20143159522627,
            "unit": "iter/sec",
            "range": "stddev: 0.000012216740236918562",
            "extra": "mean: 2.8392843137255266 msec\nrounds: 357"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 596.8234659993285,
            "unit": "iter/sec",
            "range": "stddev: 0.000012412333936445928",
            "extra": "mean: 1.6755373355261554 msec\nrounds: 608"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1222.0668568860544,
            "unit": "iter/sec",
            "range": "stddev: 0.0000418914462380369",
            "extra": "mean: 818.2858362987583 usec\nrounds: 1405"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1103.6119994506998,
            "unit": "iter/sec",
            "range": "stddev: 0.000015575402572644866",
            "extra": "mean: 906.1155555555117 usec\nrounds: 1260"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "98cc16b298317ed9504c2747c16cad84e52a4401",
          "message": "Merge pull request #789 from TeoZosa/dependabot/pip/sentry-sdk-1.13.0",
          "timestamp": "2023-01-13T15:02:19Z",
          "tree_id": "0f08b28be620f15d477f8637bf1fe3d7ffba7892",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/98cc16b298317ed9504c2747c16cad84e52a4401"
        },
        "date": 1673622579277,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 257.6557705032315,
            "unit": "iter/sec",
            "range": "stddev: 0.000012828637143019801",
            "extra": "mean: 3.8811473076922915 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 338.14291516654254,
            "unit": "iter/sec",
            "range": "stddev: 0.000013605882434683235",
            "extra": "mean: 2.9573294460641852 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 497.36234804862687,
            "unit": "iter/sec",
            "range": "stddev: 0.000011839782720984223",
            "extra": "mean: 2.0106065606362113 msec\nrounds: 503"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 945.6491822594746,
            "unit": "iter/sec",
            "range": "stddev: 0.000007778422376354162",
            "extra": "mean: 1.0574746097814656 msec\nrounds: 961"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 237.98276290846928,
            "unit": "iter/sec",
            "range": "stddev: 0.0000195911138168743",
            "extra": "mean: 4.201985000000233 msec\nrounds: 240"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 305.6429351470931,
            "unit": "iter/sec",
            "range": "stddev: 0.00001848157742390538",
            "extra": "mean: 3.2717916398713482 msec\nrounds: 311"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 474.7263020281818,
            "unit": "iter/sec",
            "range": "stddev: 0.000018979660925504615",
            "extra": "mean: 2.106476923076901 msec\nrounds: 481"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 858.0738911579706,
            "unit": "iter/sec",
            "range": "stddev: 0.000007779209040025276",
            "extra": "mean: 1.165400800915292 msec\nrounds: 874"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.730621816225828,
            "unit": "iter/sec",
            "range": "stddev: 0.00010830607808321545",
            "extra": "mean: 53.38851052631511 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.463032451395343,
            "unit": "iter/sec",
            "range": "stddev: 0.00013966355616676186",
            "extra": "mean: 51.37945499999965 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 353.49270709693394,
            "unit": "iter/sec",
            "range": "stddev: 0.00001396714394759542",
            "extra": "mean: 2.8289126760563756 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 559.9223916020413,
            "unit": "iter/sec",
            "range": "stddev: 0.00001681573132654024",
            "extra": "mean: 1.785961795774617 msec\nrounds: 568"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1169.1769020286497,
            "unit": "iter/sec",
            "range": "stddev: 0.00004640476987777941",
            "extra": "mean: 855.3025622255201 usec\nrounds: 1366"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1053.697978548448,
            "unit": "iter/sec",
            "range": "stddev: 0.000017068396270311676",
            "extra": "mean: 949.0385483870615 usec\nrounds: 1240"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e818a0c20ce288e263ca91d6d8f0511a49a9062c",
          "message": "Merge pull request #790 from TeoZosa/ci/migrate-linters-to-ruff\n\n🏗️ Migrate linters to `ruff`",
          "timestamp": "2023-01-14T16:05:44+09:00",
          "tree_id": "acf6e6fe5702230e9b89b2a3f3e4c149f9b4b6a5",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/e818a0c20ce288e263ca91d6d8f0511a49a9062c"
        },
        "date": 1673680128039,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 255.19530155775988,
            "unit": "iter/sec",
            "range": "stddev: 0.000012187814688993925",
            "extra": "mean: 3.918567441860461 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 334.00386245996145,
            "unit": "iter/sec",
            "range": "stddev: 0.000011456015103779574",
            "extra": "mean: 2.993977352941164 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 492.7723749827452,
            "unit": "iter/sec",
            "range": "stddev: 0.00001389865343442901",
            "extra": "mean: 2.029334538152663 msec\nrounds: 498"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 933.2315428736118,
            "unit": "iter/sec",
            "range": "stddev: 0.000008427995979089816",
            "extra": "mean: 1.071545435466952 msec\nrounds: 953"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 238.0486910743957,
            "unit": "iter/sec",
            "range": "stddev: 0.000013537680503352413",
            "extra": "mean: 4.200821249999971 msec\nrounds: 240"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 305.46744352620556,
            "unit": "iter/sec",
            "range": "stddev: 0.00001321235012171601",
            "extra": "mean: 3.273671290322668 msec\nrounds: 310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 468.8692069112037,
            "unit": "iter/sec",
            "range": "stddev: 0.000011059470145593442",
            "extra": "mean: 2.1327909473683646 msec\nrounds: 475"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 861.3787941367351,
            "unit": "iter/sec",
            "range": "stddev: 0.00000844912822069521",
            "extra": "mean: 1.160929438717132 msec\nrounds: 873"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.83802500956038,
            "unit": "iter/sec",
            "range": "stddev: 0.00004258736874518691",
            "extra": "mean: 53.084121052631346 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.49897386650043,
            "unit": "iter/sec",
            "range": "stddev: 0.00014015170915465772",
            "extra": "mean: 51.28474999999959 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 346.1262587499587,
            "unit": "iter/sec",
            "range": "stddev: 0.00001307262518975593",
            "extra": "mean: 2.889119142857055 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 548.9964696206217,
            "unit": "iter/sec",
            "range": "stddev: 0.0001366560236976397",
            "extra": "mean: 1.821505338078111 msec\nrounds: 562"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1160.323066234869,
            "unit": "iter/sec",
            "range": "stddev: 0.000049776850475246284",
            "extra": "mean: 861.8289415247934 usec\nrounds: 1351"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1046.0851976371832,
            "unit": "iter/sec",
            "range": "stddev: 0.000017220412570333428",
            "extra": "mean: 955.9450819672461 usec\nrounds: 1220"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5a27cbbe68edad7eb6cf140c5dc2f70bedf24aae",
          "message": "Merge pull request #784 from TeoZosa/dependabot/pip/docs/orjson-3.8.5",
          "timestamp": "2023-01-14T10:14:21Z",
          "tree_id": "efecafffd0e86ff848bf96e95ff4594ad7dbadba",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/5a27cbbe68edad7eb6cf140c5dc2f70bedf24aae"
        },
        "date": 1673691476319,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 219.8747660379654,
            "unit": "iter/sec",
            "range": "stddev: 0.00010535728377084092",
            "extra": "mean: 4.548043497757863 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 290.86666829683554,
            "unit": "iter/sec",
            "range": "stddev: 0.000012532089349429932",
            "extra": "mean: 3.438001355932193 msec\nrounds: 295"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 429.0833694190859,
            "unit": "iter/sec",
            "range": "stddev: 0.000013264828877559395",
            "extra": "mean: 2.330549425287326 msec\nrounds: 435"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 827.9040549445864,
            "unit": "iter/sec",
            "range": "stddev: 0.000010039142333863774",
            "extra": "mean: 1.2078694312796094 msec\nrounds: 844"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 205.0247302414389,
            "unit": "iter/sec",
            "range": "stddev: 0.00002492199628602566",
            "extra": "mean: 4.877460386473336 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 263.5056515547299,
            "unit": "iter/sec",
            "range": "stddev: 0.000015217014131410558",
            "extra": "mean: 3.794985018726632 msec\nrounds: 267"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 410.18143101776707,
            "unit": "iter/sec",
            "range": "stddev: 0.000019102388235031682",
            "extra": "mean: 2.437945563549133 msec\nrounds: 417"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 752.039524272256,
            "unit": "iter/sec",
            "range": "stddev: 0.000008518602788709097",
            "extra": "mean: 1.3297173455978846 msec\nrounds: 761"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 16.135195474096584,
            "unit": "iter/sec",
            "range": "stddev: 0.0001951850603762656",
            "extra": "mean: 61.97631764705909 msec\nrounds: 17"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 16.73459435392517,
            "unit": "iter/sec",
            "range": "stddev: 0.00006857712918476008",
            "extra": "mean: 59.75645294117606 msec\nrounds: 17"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 301.1691286831646,
            "unit": "iter/sec",
            "range": "stddev: 0.000013450453289926932",
            "extra": "mean: 3.3203934426227932 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 488.10936016258194,
            "unit": "iter/sec",
            "range": "stddev: 0.000023807233925480526",
            "extra": "mean: 2.048721212121224 msec\nrounds: 495"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1007.9271058859559,
            "unit": "iter/sec",
            "range": "stddev: 0.00004993678407350168",
            "extra": "mean: 992.1352389079881 usec\nrounds: 1172"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 905.7882968882376,
            "unit": "iter/sec",
            "range": "stddev: 0.000017447344158742365",
            "extra": "mean: 1.104010731244176 msec\nrounds: 1053"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eba81f3dc6bd2489195e2aad144968eac9fd3c28",
          "message": "Merge pull request #791 from TeoZosa/docs/add-ruff-documentation\n\n📝 Add Ruff status badge",
          "timestamp": "2023-01-14T23:17:36+09:00",
          "tree_id": "495cf285c70a9512296c2a1f833b1a784b5884c2",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/eba81f3dc6bd2489195e2aad144968eac9fd3c28"
        },
        "date": 1673705998550,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 207.26264603078957,
            "unit": "iter/sec",
            "range": "stddev: 0.0004936426884782299",
            "extra": "mean: 4.8247960698689845 msec\nrounds: 229"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 271.47705444611705,
            "unit": "iter/sec",
            "range": "stddev: 0.0004731042317939258",
            "extra": "mean: 3.6835525641025426 msec\nrounds: 312"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 397.444309658979,
            "unit": "iter/sec",
            "range": "stddev: 0.0006053067930794929",
            "extra": "mean: 2.51607577639754 msec\nrounds: 483"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 831.259214517714,
            "unit": "iter/sec",
            "range": "stddev: 0.00002876538976098523",
            "extra": "mean: 1.202994183445157 msec\nrounds: 894"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 204.41035788165522,
            "unit": "iter/sec",
            "range": "stddev: 0.00006329898952397914",
            "extra": "mean: 4.892119999999985 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 262.5259367561589,
            "unit": "iter/sec",
            "range": "stddev: 0.00005386391625748653",
            "extra": "mean: 3.809147440273022 msec\nrounds: 293"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 410.1807035811836,
            "unit": "iter/sec",
            "range": "stddev: 0.00003270043475612479",
            "extra": "mean: 2.4379498871332896 msec\nrounds: 443"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 754.1788246720427,
            "unit": "iter/sec",
            "range": "stddev: 0.000038332395128814215",
            "extra": "mean: 1.3259454751130855 msec\nrounds: 884"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.890420927072086,
            "unit": "iter/sec",
            "range": "stddev: 0.0032028511803742685",
            "extra": "mean: 67.15726874999972 msec\nrounds: 16"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 15.614481752135848,
            "unit": "iter/sec",
            "range": "stddev: 0.0026425179419639145",
            "extra": "mean: 64.0431117647061 msec\nrounds: 17"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 302.1134915765974,
            "unit": "iter/sec",
            "range": "stddev: 0.00005072375655677651",
            "extra": "mean: 3.31001437500007 msec\nrounds: 320"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 492.4173578288038,
            "unit": "iter/sec",
            "range": "stddev: 0.00004976015490645817",
            "extra": "mean: 2.030797623400727 msec\nrounds: 547"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1023.2041682633545,
            "unit": "iter/sec",
            "range": "stddev: 0.00005505957908207901",
            "extra": "mean: 977.3220545976293 usec\nrounds: 1392"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 908.7024708235907,
            "unit": "iter/sec",
            "range": "stddev: 0.000030266014381663173",
            "extra": "mean: 1.1004702112162883 msec\nrounds: 1373"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "02f4d6a9512ec041d5187d21abb8b6b616a9813b",
          "message": "Merge pull request #782 from TeoZosa/dependabot/pip/dot-github/workflows/poetry-1.3.2",
          "timestamp": "2023-01-14T14:30:36Z",
          "tree_id": "4e0d8c0db33fd57d7045107afad05779f5698ff5",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/02f4d6a9512ec041d5187d21abb8b6b616a9813b"
        },
        "date": 1673706889056,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 162.43917999355241,
            "unit": "iter/sec",
            "range": "stddev: 0.0007212087028994912",
            "extra": "mean: 6.156150259067377 msec\nrounds: 193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 220.6352265695539,
            "unit": "iter/sec",
            "range": "stddev: 0.000641806256500598",
            "extra": "mean: 4.532367816091942 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 294.13539218594735,
            "unit": "iter/sec",
            "range": "stddev: 0.0008287677942980096",
            "extra": "mean: 3.39979487870612 msec\nrounds: 371"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 630.9036160092159,
            "unit": "iter/sec",
            "range": "stddev: 0.00029615927473786836",
            "extra": "mean: 1.5850281637716792 msec\nrounds: 806"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 147.89594470971934,
            "unit": "iter/sec",
            "range": "stddev: 0.0009563728440293225",
            "extra": "mean: 6.761510614525204 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 198.82827750737658,
            "unit": "iter/sec",
            "range": "stddev: 0.0006851167859061618",
            "extra": "mean: 5.029465690376459 msec\nrounds: 239"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 295.7123816886509,
            "unit": "iter/sec",
            "range": "stddev: 0.0005419273317344014",
            "extra": "mean: 3.381664285714211 msec\nrounds: 364"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 569.7935353125125,
            "unit": "iter/sec",
            "range": "stddev: 0.0004029699515332234",
            "extra": "mean: 1.7550216666665648 msec\nrounds: 720"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.263144133617622,
            "unit": "iter/sec",
            "range": "stddev: 0.003279373504135878",
            "extra": "mean: 70.11076875000111 msec\nrounds: 16"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.45128732970721,
            "unit": "iter/sec",
            "range": "stddev: 0.0031880348370892874",
            "extra": "mean: 69.19798750000083 msec\nrounds: 16"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 211.44636116205805,
            "unit": "iter/sec",
            "range": "stddev: 0.0007243697203193481",
            "extra": "mean: 4.729331800766123 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 354.67924834359957,
            "unit": "iter/sec",
            "range": "stddev: 0.0006026048656953135",
            "extra": "mean: 2.8194488532107145 msec\nrounds: 436"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 680.2732751009604,
            "unit": "iter/sec",
            "range": "stddev: 0.0003667044893732347",
            "extra": "mean: 1.4699974798386553 msec\nrounds: 992"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 626.4250488222481,
            "unit": "iter/sec",
            "range": "stddev: 0.00035247394789682593",
            "extra": "mean: 1.5963601741024187 msec\nrounds: 919"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "81573e95bcfc838f6f0a208d03ad824c47a35a9d",
          "message": "Merge pull request #786 from TeoZosa/dependabot/pip/docs/poetry-1.3.2",
          "timestamp": "2023-01-15T00:58:39Z",
          "tree_id": "0ee02943f6b4684bd7b5101e9d55b2cedf52986c",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/81573e95bcfc838f6f0a208d03ad824c47a35a9d"
        },
        "date": 1673744528361,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 245.9903328762928,
            "unit": "iter/sec",
            "range": "stddev: 0.000014073417799025928",
            "extra": "mean: 4.06520040160641 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 331.41092120567686,
            "unit": "iter/sec",
            "range": "stddev: 0.00001660029213487898",
            "extra": "mean: 3.0174020710059533 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 482.87879328392506,
            "unit": "iter/sec",
            "range": "stddev: 0.000011376582018356084",
            "extra": "mean: 2.070913061224488 msec\nrounds: 490"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 952.3453038361567,
            "unit": "iter/sec",
            "range": "stddev: 0.000010280535819109022",
            "extra": "mean: 1.0500393039918239 msec\nrounds: 977"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 229.9414867702048,
            "unit": "iter/sec",
            "range": "stddev: 0.00001749022451219348",
            "extra": "mean: 4.348932478632548 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 301.6612000809746,
            "unit": "iter/sec",
            "range": "stddev: 0.000016244029611149994",
            "extra": "mean: 3.3149771986969854 msec\nrounds: 307"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 468.66503588409296,
            "unit": "iter/sec",
            "range": "stddev: 0.00001082394348354516",
            "extra": "mean: 2.133720084566567 msec\nrounds: 473"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 862.6179316386235,
            "unit": "iter/sec",
            "range": "stddev: 0.000008813602404395569",
            "extra": "mean: 1.159261781285263 msec\nrounds: 887"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.287273590403778,
            "unit": "iter/sec",
            "range": "stddev: 0.00016367993550113426",
            "extra": "mean: 49.29198571428626 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.178439616851062,
            "unit": "iter/sec",
            "range": "stddev: 0.00011239883233749944",
            "extra": "mean: 47.21783181818218 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 345.28039571687566,
            "unit": "iter/sec",
            "range": "stddev: 0.000024461266556969736",
            "extra": "mean: 2.8961968660971524 msec\nrounds: 351"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 588.6144453768815,
            "unit": "iter/sec",
            "range": "stddev: 0.000010848372869347582",
            "extra": "mean: 1.6989049586775162 msec\nrounds: 605"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1204.5772898586374,
            "unit": "iter/sec",
            "range": "stddev: 0.000040239367810260865",
            "extra": "mean: 830.1667385057164 usec\nrounds: 1392"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1095.9579580006498,
            "unit": "iter/sec",
            "range": "stddev: 0.000012265604636947486",
            "extra": "mean: 912.443759999968 usec\nrounds: 1250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "804b002cf0a6bba4c7fd90ba52cf34805eda27a6",
          "message": "Merge pull request #793 from TeoZosa/dependabot/pip/rich-13.1.0",
          "timestamp": "2023-01-15T12:09:52Z",
          "tree_id": "132be4b2a953cf97aa7e76d5d655ec4500383932",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/804b002cf0a6bba4c7fd90ba52cf34805eda27a6"
        },
        "date": 1673784773948,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 246.336799357791,
            "unit": "iter/sec",
            "range": "stddev: 0.000015539104195463064",
            "extra": "mean: 4.059482799999985 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 329.2744701645471,
            "unit": "iter/sec",
            "range": "stddev: 0.000018565247295984386",
            "extra": "mean: 3.0369800595238186 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 482.49785337190787,
            "unit": "iter/sec",
            "range": "stddev: 0.000013305138552313401",
            "extra": "mean: 2.0725480808081502 msec\nrounds: 495"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 931.3086547222038,
            "unit": "iter/sec",
            "range": "stddev: 0.000011305695262385019",
            "extra": "mean: 1.0737578727841695 msec\nrounds: 959"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 230.51057796224015,
            "unit": "iter/sec",
            "range": "stddev: 0.00001510516520885184",
            "extra": "mean: 4.338195708154485 msec\nrounds: 233"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 300.754489475672,
            "unit": "iter/sec",
            "range": "stddev: 0.00002377112122447827",
            "extra": "mean: 3.3249711475408907 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 464.8322340527698,
            "unit": "iter/sec",
            "range": "stddev: 0.000012575279726723124",
            "extra": "mean: 2.151313800424769 msec\nrounds: 471"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 849.5741973183783,
            "unit": "iter/sec",
            "range": "stddev: 0.00000787784938161786",
            "extra": "mean: 1.1770602298850767 msec\nrounds: 870"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.251033742947428,
            "unit": "iter/sec",
            "range": "stddev: 0.0000871485999661008",
            "extra": "mean: 49.38019523809531 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.175192376622654,
            "unit": "iter/sec",
            "range": "stddev: 0.0000992204096804836",
            "extra": "mean: 47.225072727272924 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 346.6952164924487,
            "unit": "iter/sec",
            "range": "stddev: 0.00001229728702857608",
            "extra": "mean: 2.884377840909093 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 581.4647223398271,
            "unit": "iter/sec",
            "range": "stddev: 0.00001235898600620775",
            "extra": "mean: 1.7197947899160202 msec\nrounds: 595"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1198.1251709255644,
            "unit": "iter/sec",
            "range": "stddev: 0.00004119379728468833",
            "extra": "mean: 834.6373352856693 usec\nrounds: 1366"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1086.1946688683506,
            "unit": "iter/sec",
            "range": "stddev: 0.000012433693549034334",
            "extra": "mean: 920.6452845527659 usec\nrounds: 1230"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "60afafdc960ab68128dc92260c04f61397c75b3f",
          "message": "Merge pull request #792 from TeoZosa/ci/add-pydocstyle-via-ruff\n\n➕ Integrate `pydocstyle` via Ruff",
          "timestamp": "2023-01-16T09:18:19+09:00",
          "tree_id": "0fcd7364d294e5479ae39c53e00992228355d4ad",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/60afafdc960ab68128dc92260c04f61397c75b3f"
        },
        "date": 1673828649826,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 245.91905752711233,
            "unit": "iter/sec",
            "range": "stddev: 0.000012244945538089518",
            "extra": "mean: 4.066378629032242 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 327.73852274902555,
            "unit": "iter/sec",
            "range": "stddev: 0.000014274994900208859",
            "extra": "mean: 3.0512128742515157 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 487.9445429025563,
            "unit": "iter/sec",
            "range": "stddev: 0.000014546494678766089",
            "extra": "mean: 2.0494132264528724 msec\nrounds: 499"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 945.129225119385,
            "unit": "iter/sec",
            "range": "stddev: 0.000008702260002692703",
            "extra": "mean: 1.0580563730570114 msec\nrounds: 965"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 229.75510878310408,
            "unit": "iter/sec",
            "range": "stddev: 0.00001431817407958379",
            "extra": "mean: 4.3524603448275485 msec\nrounds: 232"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 299.21160195439865,
            "unit": "iter/sec",
            "range": "stddev: 0.000013174778789830672",
            "extra": "mean: 3.3421163934425415 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 464.0321855088524,
            "unit": "iter/sec",
            "range": "stddev: 0.00001049646266224483",
            "extra": "mean: 2.1550229299362313 msec\nrounds: 471"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 859.3841678415981,
            "unit": "iter/sec",
            "range": "stddev: 0.00001015926383417969",
            "extra": "mean: 1.1636239500566645 msec\nrounds: 881"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.128996192840034,
            "unit": "iter/sec",
            "range": "stddev: 0.0002199541177260717",
            "extra": "mean: 49.67957619047611 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.182440411628455,
            "unit": "iter/sec",
            "range": "stddev: 0.00008520663564397441",
            "extra": "mean: 47.20891363636426 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 349.28809183424374,
            "unit": "iter/sec",
            "range": "stddev: 0.000018470720024470735",
            "extra": "mean: 2.8629661971830247 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 584.8382294640533,
            "unit": "iter/sec",
            "range": "stddev: 0.00001002810886948319",
            "extra": "mean: 1.7098745424292827 msec\nrounds: 601"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1207.245226073297,
            "unit": "iter/sec",
            "range": "stddev: 0.00004157085972570031",
            "extra": "mean: 828.3321220930516 usec\nrounds: 1376"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1100.181565164076,
            "unit": "iter/sec",
            "range": "stddev: 0.000012342231620258537",
            "extra": "mean: 908.9408799999887 usec\nrounds: 1250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7893c91422060f8c92dbb9e6bc24b5bf4ef57276",
          "message": "Merge pull request #794 from TeoZosa/dependabot/pip/pytest-7.2.1",
          "timestamp": "2023-01-16T02:35:42Z",
          "tree_id": "74deb5effdd1883ba09e99e2d4f5948abdf1e1c8",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/7893c91422060f8c92dbb9e6bc24b5bf4ef57276"
        },
        "date": 1673836998065,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 162.06309133761374,
            "unit": "iter/sec",
            "range": "stddev: 0.0005215304160797988",
            "extra": "mean: 6.170436413043461 msec\nrounds: 184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 213.87188310373838,
            "unit": "iter/sec",
            "range": "stddev: 0.00038127074425588296",
            "extra": "mean: 4.675696428571449 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 289.2100121245078,
            "unit": "iter/sec",
            "range": "stddev: 0.0005451345435210992",
            "extra": "mean: 3.4576949554896115 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 605.1782220648337,
            "unit": "iter/sec",
            "range": "stddev: 0.0003951491084319776",
            "extra": "mean: 1.6524057931034877 msec\nrounds: 725"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 148.1967334301683,
            "unit": "iter/sec",
            "range": "stddev: 0.0005246938987690337",
            "extra": "mean: 6.747787058823462 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 190.03151503957443,
            "unit": "iter/sec",
            "range": "stddev: 0.00016799492715550805",
            "extra": "mean: 5.26228504672895 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 287.70715902250055,
            "unit": "iter/sec",
            "range": "stddev: 0.00038527860282372477",
            "extra": "mean: 3.4757564024390284 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 557.2456977496026,
            "unit": "iter/sec",
            "range": "stddev: 0.00035133549972626746",
            "extra": "mean: 1.794540548340578 msec\nrounds: 693"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.592966238062393,
            "unit": "iter/sec",
            "range": "stddev: 0.004287521531774665",
            "extra": "mean: 73.56745999999958 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.355513526865332,
            "unit": "iter/sec",
            "range": "stddev: 0.0025115792780258414",
            "extra": "mean: 69.65964666666717 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.87854949308345,
            "unit": "iter/sec",
            "range": "stddev: 0.0005932890613200087",
            "extra": "mean: 5.07927350427341 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 331.59215908785933,
            "unit": "iter/sec",
            "range": "stddev: 0.000548863084686781",
            "extra": "mean: 3.0157528535981997 msec\nrounds: 403"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 665.2980887348706,
            "unit": "iter/sec",
            "range": "stddev: 0.00029775573193916615",
            "extra": "mean: 1.5030856347439654 msec\nrounds: 898"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 565.6962098074237,
            "unit": "iter/sec",
            "range": "stddev: 0.00031626793706329996",
            "extra": "mean: 1.767733250927072 msec\nrounds: 809"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "5fdbc05d97e5754189f43e0959acb4fbf4257426",
          "message": ":bookmark: Bump version number to `0.20.0`",
          "timestamp": "2023-01-16T20:40:25+09:00",
          "tree_id": "0cc06357aaa58f6467620b400b1df6728d8f8338",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/5fdbc05d97e5754189f43e0959acb4fbf4257426"
        },
        "date": 1673869424459,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 257.77406935629494,
            "unit": "iter/sec",
            "range": "stddev: 0.000012429194389849011",
            "extra": "mean: 3.879366153846147 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 337.49093300598213,
            "unit": "iter/sec",
            "range": "stddev: 0.000013882135280593135",
            "extra": "mean: 2.9630425655976795 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 493.336204372083,
            "unit": "iter/sec",
            "range": "stddev: 0.000011120394832114533",
            "extra": "mean: 2.0270152304609335 msec\nrounds: 499"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 949.322104001999,
            "unit": "iter/sec",
            "range": "stddev: 0.00000795433059927945",
            "extra": "mean: 1.0533832466181512 msec\nrounds: 961"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 237.33101708853616,
            "unit": "iter/sec",
            "range": "stddev: 0.000013731225417170992",
            "extra": "mean: 4.213524267782288 msec\nrounds: 239"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 303.2933124021495,
            "unit": "iter/sec",
            "range": "stddev: 0.000017014748145979823",
            "extra": "mean: 3.2971383116883812 msec\nrounds: 308"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 472.28924537982164,
            "unit": "iter/sec",
            "range": "stddev: 0.000011004825793183385",
            "extra": "mean: 2.117346540880443 msec\nrounds: 477"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 858.6219709519132,
            "unit": "iter/sec",
            "range": "stddev: 0.000011083860358217872",
            "extra": "mean: 1.1646568965517476 msec\nrounds: 870"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.905120869890332,
            "unit": "iter/sec",
            "range": "stddev: 0.0005288545321715969",
            "extra": "mean: 52.89572105263144 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.769401789763883,
            "unit": "iter/sec",
            "range": "stddev: 0.0001984073842007371",
            "extra": "mean: 50.583219999998974 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 346.71512117497707,
            "unit": "iter/sec",
            "range": "stddev: 0.00001318073023353276",
            "extra": "mean: 2.884212250712103 msec\nrounds: 351"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 551.2624352745945,
            "unit": "iter/sec",
            "range": "stddev: 0.000012612170616386171",
            "extra": "mean: 1.8140180357144788 msec\nrounds: 560"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1120.4650085166227,
            "unit": "iter/sec",
            "range": "stddev: 0.00004067381888397356",
            "extra": "mean: 892.486594761129 usec\nrounds: 1298"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1029.6243270944876,
            "unit": "iter/sec",
            "range": "stddev: 0.000019056960975364654",
            "extra": "mean: 971.228023352862 usec\nrounds: 1199"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f2912cddeaba16d0a61f980cd5f39a6306f17309",
          "message": "Merge pull request #796 from TeoZosa/dependabot/github_actions/pypa/cibuildwheel-2.12.0",
          "timestamp": "2023-01-17T17:24:28Z",
          "tree_id": "43a431371c4dde5e5f50252490ae05527065795b",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/f2912cddeaba16d0a61f980cd5f39a6306f17309"
        },
        "date": 1673976430352,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 262.0603342301643,
            "unit": "iter/sec",
            "range": "stddev: 0.00007053465829295731",
            "extra": "mean: 3.815915151515118 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 341.36693383726805,
            "unit": "iter/sec",
            "range": "stddev: 0.00001966958733459817",
            "extra": "mean: 2.9293991329479696 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 498.2177347917787,
            "unit": "iter/sec",
            "range": "stddev: 0.000033715528143332634",
            "extra": "mean: 2.0071545634920693 msec\nrounds: 504"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 946.3290230089774,
            "unit": "iter/sec",
            "range": "stddev: 0.0000071468288762839086",
            "extra": "mean: 1.0567149222797465 msec\nrounds: 965"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 240.86866397219097,
            "unit": "iter/sec",
            "range": "stddev: 0.00001706016461203732",
            "extra": "mean: 4.151640082644595 msec\nrounds: 242"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 309.78833143155884,
            "unit": "iter/sec",
            "range": "stddev: 0.000011262488112653788",
            "extra": "mean: 3.228010543130895 msec\nrounds: 313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 483.7449336621478,
            "unit": "iter/sec",
            "range": "stddev: 0.000009613753512265893",
            "extra": "mean: 2.0672051124744386 msec\nrounds: 489"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 871.9330638196055,
            "unit": "iter/sec",
            "range": "stddev: 0.000007911055110100839",
            "extra": "mean: 1.1468770270270314 msec\nrounds: 888"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.91733314588572,
            "unit": "iter/sec",
            "range": "stddev: 0.00038341829905016344",
            "extra": "mean: 52.86157368421073 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.80736740972988,
            "unit": "iter/sec",
            "range": "stddev: 0.00011743986266230776",
            "extra": "mean: 50.486265000000685 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 351.6783601377112,
            "unit": "iter/sec",
            "range": "stddev: 0.000010898870813302897",
            "extra": "mean: 2.843507344632798 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 556.7793203685852,
            "unit": "iter/sec",
            "range": "stddev: 0.000012752423646340789",
            "extra": "mean: 1.7960437168140597 msec\nrounds: 565"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1165.0315985191337,
            "unit": "iter/sec",
            "range": "stddev: 0.00004599064970119695",
            "extra": "mean: 858.345817633698 usec\nrounds: 1327"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1054.492480220947,
            "unit": "iter/sec",
            "range": "stddev: 0.00001674080432696103",
            "extra": "mean: 948.323500410805 usec\nrounds: 1217"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b74d1765eb1c51a41f7793f721ceff1260a9765d",
          "message": "Merge pull request #797 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.3.3",
          "timestamp": "2023-01-17T17:30:17Z",
          "tree_id": "d8e2cf75dfe088e056c58575ae64ed27b69f04e6",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/b74d1765eb1c51a41f7793f721ceff1260a9765d"
        },
        "date": 1673976954994,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 245.33550916911625,
            "unit": "iter/sec",
            "range": "stddev: 0.00001640387283181146",
            "extra": "mean: 4.07605080645164 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 327.2344602576182,
            "unit": "iter/sec",
            "range": "stddev: 0.000014559699473947458",
            "extra": "mean: 3.0559128742515114 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 489.21833519589944,
            "unit": "iter/sec",
            "range": "stddev: 0.000012692227301624552",
            "extra": "mean: 2.044077108433735 msec\nrounds: 498"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 951.4611228980216,
            "unit": "iter/sec",
            "range": "stddev: 0.000009625263741787592",
            "extra": "mean: 1.0510150924024468 msec\nrounds: 974"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 228.5501691470029,
            "unit": "iter/sec",
            "range": "stddev: 0.000014628799863786764",
            "extra": "mean: 4.375406956521666 msec\nrounds: 230"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 298.1948512151318,
            "unit": "iter/sec",
            "range": "stddev: 0.000015044420554148366",
            "extra": "mean: 3.3535119601329164 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 465.09318333668875,
            "unit": "iter/sec",
            "range": "stddev: 0.000011641560406942993",
            "extra": "mean: 2.150106765327677 msec\nrounds: 473"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 871.1052336276749,
            "unit": "iter/sec",
            "range": "stddev: 0.0000120287759199243",
            "extra": "mean: 1.147966929133865 msec\nrounds: 889"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.29096274337701,
            "unit": "iter/sec",
            "range": "stddev: 0.0001914724442437562",
            "extra": "mean: 49.283023809523336 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.199159356971712,
            "unit": "iter/sec",
            "range": "stddev: 0.00007539027116991631",
            "extra": "mean: 47.171681818181746 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 350.23368260290613,
            "unit": "iter/sec",
            "range": "stddev: 0.000012404690762163098",
            "extra": "mean: 2.8552365168537968 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 588.1029434305951,
            "unit": "iter/sec",
            "range": "stddev: 0.000010949124173998096",
            "extra": "mean: 1.700382579564516 msec\nrounds: 597"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1206.8039659959986,
            "unit": "iter/sec",
            "range": "stddev: 0.0000415908305094734",
            "extra": "mean: 828.6349963845875 usec\nrounds: 1383"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1099.741825032008,
            "unit": "iter/sec",
            "range": "stddev: 0.000012780503917283165",
            "extra": "mean: 909.3043269231805 usec\nrounds: 1248"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "25ff2fa2bbd35cc89b0fe68d6d4e047ff86107da",
          "message": "Merge pull request #799 from TeoZosa/dependabot/pip/docs/sphinx-autoapi-2.0.1",
          "timestamp": "2023-01-17T17:40:28Z",
          "tree_id": "f044f38c36704ec40c110d85405dc4c35ac75fff",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/25ff2fa2bbd35cc89b0fe68d6d4e047ff86107da"
        },
        "date": 1673977674765,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 244.43260216317915,
            "unit": "iter/sec",
            "range": "stddev: 0.000017577279644040432",
            "extra": "mean: 4.091107287449391 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 326.564996749507,
            "unit": "iter/sec",
            "range": "stddev: 0.00001499092634338088",
            "extra": "mean: 3.062177544910161 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 483.416314887954,
            "unit": "iter/sec",
            "range": "stddev: 0.000014307991097118497",
            "extra": "mean: 2.0686103658536625 msec\nrounds: 492"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 934.2575891380465,
            "unit": "iter/sec",
            "range": "stddev: 0.00001756987021909435",
            "extra": "mean: 1.070368613138704 msec\nrounds: 959"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 227.86865333786753,
            "unit": "iter/sec",
            "range": "stddev: 0.000013621423671376862",
            "extra": "mean: 4.3884930434783005 msec\nrounds: 230"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 297.99408673516234,
            "unit": "iter/sec",
            "range": "stddev: 0.000014688791532371665",
            "extra": "mean: 3.355771287128709 msec\nrounds: 303"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 464.3828671450906,
            "unit": "iter/sec",
            "range": "stddev: 0.000010367278740534602",
            "extra": "mean: 2.1533955508474056 msec\nrounds: 472"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 857.3188806821895,
            "unit": "iter/sec",
            "range": "stddev: 0.00001189856378049254",
            "extra": "mean: 1.1664271282632614 msec\nrounds: 881"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.428633589984972,
            "unit": "iter/sec",
            "range": "stddev: 0.0001436524451582064",
            "extra": "mean: 48.950900000000225 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.287274380290754,
            "unit": "iter/sec",
            "range": "stddev: 0.00006150056083242048",
            "extra": "mean: 46.97642272727362 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 348.87227529765914,
            "unit": "iter/sec",
            "range": "stddev: 0.000011200920241659328",
            "extra": "mean: 2.8663785310735745 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 578.1514786372194,
            "unit": "iter/sec",
            "range": "stddev: 0.000009420352920231257",
            "extra": "mean: 1.7296505102038904 msec\nrounds: 588"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1189.1751782886583,
            "unit": "iter/sec",
            "range": "stddev: 0.000040767702457182535",
            "extra": "mean: 840.9189985272816 usec\nrounds: 1358"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1101.9616773607893,
            "unit": "iter/sec",
            "range": "stddev: 0.000011445650131339524",
            "extra": "mean: 907.4725741779073 usec\nrounds: 1247"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aad6a291735adda52239a3478b2cdddcacb4feab",
          "message": "Merge pull request #800 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.3.4",
          "timestamp": "2023-01-18T14:59:50Z",
          "tree_id": "97b6f4679c90952fab8e9b4cef397201787dce0c",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/aad6a291735adda52239a3478b2cdddcacb4feab"
        },
        "date": 1674054511695,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 244.68438042893416,
            "unit": "iter/sec",
            "range": "stddev: 0.000014094440255187227",
            "extra": "mean: 4.086897570850212 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 326.097440665489,
            "unit": "iter/sec",
            "range": "stddev: 0.00001463278213086939",
            "extra": "mean: 3.0665680722891686 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 492.0950963460359,
            "unit": "iter/sec",
            "range": "stddev: 0.000014069989330521188",
            "extra": "mean: 2.032127544910163 msec\nrounds: 501"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 944.2405113533011,
            "unit": "iter/sec",
            "range": "stddev: 0.000008659397934137371",
            "extra": "mean: 1.0590522096608452 msec\nrounds: 973"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 228.22435817827355,
            "unit": "iter/sec",
            "range": "stddev: 0.000016797206686174545",
            "extra": "mean: 4.381653246753211 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 297.84347516665076,
            "unit": "iter/sec",
            "range": "stddev: 0.000015918512889298956",
            "extra": "mean: 3.3574682119206254 msec\nrounds: 302"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 466.9999306367676,
            "unit": "iter/sec",
            "range": "stddev: 0.000012222234990984317",
            "extra": "mean: 2.1413279411765047 msec\nrounds: 476"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 860.6810959674973,
            "unit": "iter/sec",
            "range": "stddev: 0.000009642059460681531",
            "extra": "mean: 1.1618705286839064 msec\nrounds: 889"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.440399105606073,
            "unit": "iter/sec",
            "range": "stddev: 0.00011314507901257407",
            "extra": "mean: 48.922723809523646 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.228269609445302,
            "unit": "iter/sec",
            "range": "stddev: 0.00015321344115248382",
            "extra": "mean: 47.10699545454521 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 348.80933342831855,
            "unit": "iter/sec",
            "range": "stddev: 0.00001256281031290027",
            "extra": "mean: 2.866895762711875 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 589.6738460350928,
            "unit": "iter/sec",
            "range": "stddev: 0.000013439593083541411",
            "extra": "mean: 1.6958527272727097 msec\nrounds: 605"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1202.012007139245,
            "unit": "iter/sec",
            "range": "stddev: 0.000045812382132461634",
            "extra": "mean: 831.9384449244997 usec\nrounds: 1389"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1102.1830771721604,
            "unit": "iter/sec",
            "range": "stddev: 0.000011994809684122791",
            "extra": "mean: 907.290286624316 usec\nrounds: 1256"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b4775494482919280cd578ae347cebc834ca3696",
          "message": "Merge pull request #801 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.3.5",
          "timestamp": "2023-01-19T14:58:01Z",
          "tree_id": "f10bcf62d4300770d86030146b7c3c7de08214b8",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/b4775494482919280cd578ae347cebc834ca3696"
        },
        "date": 1674140566868,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 259.17172490102985,
            "unit": "iter/sec",
            "range": "stddev: 0.000010537910943364663",
            "extra": "mean: 3.858445593869744 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 338.74659611519724,
            "unit": "iter/sec",
            "range": "stddev: 0.000011724761194301697",
            "extra": "mean: 2.952059183673482 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 495.4544272546866,
            "unit": "iter/sec",
            "range": "stddev: 0.000010709992457562814",
            "extra": "mean: 2.0183491053677747 msec\nrounds: 503"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 956.2109652037237,
            "unit": "iter/sec",
            "range": "stddev: 0.00000879009813306411",
            "extra": "mean: 1.0457943240453709 msec\nrounds: 969"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 240.66412914136893,
            "unit": "iter/sec",
            "range": "stddev: 0.000011553625032114311",
            "extra": "mean: 4.155168464730314 msec\nrounds: 241"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 307.399035478684,
            "unit": "iter/sec",
            "range": "stddev: 0.000012866345180005058",
            "extra": "mean: 3.2531006430869005 msec\nrounds: 311"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 477.76942807835553,
            "unit": "iter/sec",
            "range": "stddev: 0.000009981996323042916",
            "extra": "mean: 2.0930598343684665 msec\nrounds: 483"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 868.2873782019021,
            "unit": "iter/sec",
            "range": "stddev: 0.0000069220366903415015",
            "extra": "mean: 1.1516924293784574 msec\nrounds: 885"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.023840677136736,
            "unit": "iter/sec",
            "range": "stddev: 0.00015757369555926274",
            "extra": "mean: 52.565621052631165 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.925697075605214,
            "unit": "iter/sec",
            "range": "stddev: 0.000052938449861384005",
            "extra": "mean: 50.18644999999964 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 349.93176330617587,
            "unit": "iter/sec",
            "range": "stddev: 0.00001568060650756552",
            "extra": "mean: 2.857699999999832 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 562.6721150933606,
            "unit": "iter/sec",
            "range": "stddev: 0.000010780054753219957",
            "extra": "mean: 1.7772339754815756 msec\nrounds: 571"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1183.1160530624877,
            "unit": "iter/sec",
            "range": "stddev: 0.000045560021262253044",
            "extra": "mean: 845.2256204380853 usec\nrounds: 1370"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1075.1013004931567,
            "unit": "iter/sec",
            "range": "stddev: 0.000017584518334073674",
            "extra": "mean: 930.14490777873 usec\nrounds: 1247"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e2290ce3594ab8243dec01de1220eae04a6bc2e7",
          "message": "Merge pull request #802 from TeoZosa/dependabot/pip/rich-13.2.0",
          "timestamp": "2023-01-20T14:48:00Z",
          "tree_id": "1faae6234780c7b658d95a413191b417733c4b26",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/e2290ce3594ab8243dec01de1220eae04a6bc2e7"
        },
        "date": 1674226242758,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 245.65423840378878,
            "unit": "iter/sec",
            "range": "stddev: 0.00001543996504944856",
            "extra": "mean: 4.0707622489959725 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 328.67893956435364,
            "unit": "iter/sec",
            "range": "stddev: 0.000014790210546262253",
            "extra": "mean: 3.0424827380952566 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 486.699920903912,
            "unit": "iter/sec",
            "range": "stddev: 0.00001071723570780675",
            "extra": "mean: 2.0546541247485175 msec\nrounds: 497"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 966.6554037708532,
            "unit": "iter/sec",
            "range": "stddev: 0.0000074413459037605945",
            "extra": "mean: 1.0344948118006394 msec\nrounds: 983"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 229.5402694268349,
            "unit": "iter/sec",
            "range": "stddev: 0.000013657226333660227",
            "extra": "mean: 4.356534051724403 msec\nrounds: 232"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 300.0865331494801,
            "unit": "iter/sec",
            "range": "stddev: 0.000014546960380169532",
            "extra": "mean: 3.332372131147507 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 464.33796795192694,
            "unit": "iter/sec",
            "range": "stddev: 0.000010201941363265023",
            "extra": "mean: 2.1536037735848694 msec\nrounds: 477"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 868.7431627591226,
            "unit": "iter/sec",
            "range": "stddev: 0.000010292138273007126",
            "extra": "mean: 1.1510881959910988 msec\nrounds: 898"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.341954059730767,
            "unit": "iter/sec",
            "range": "stddev: 0.00014372022225740265",
            "extra": "mean: 49.15948571428616 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.233072053947193,
            "unit": "iter/sec",
            "range": "stddev: 0.00006690792293603162",
            "extra": "mean: 47.09634090909147 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 348.0522865502552,
            "unit": "iter/sec",
            "range": "stddev: 0.00001276892372206802",
            "extra": "mean: 2.873131534090957 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 590.8678869378562,
            "unit": "iter/sec",
            "range": "stddev: 0.000009827327446626713",
            "extra": "mean: 1.6924257048093287 msec\nrounds: 603"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1218.845841999381,
            "unit": "iter/sec",
            "range": "stddev: 0.000041685631536945066",
            "extra": "mean: 820.4483007954568 usec\nrounds: 1383"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1105.1976498666677,
            "unit": "iter/sec",
            "range": "stddev: 0.000012412942308448865",
            "extra": "mean: 904.8155324259342 usec\nrounds: 1249"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1b58b7124f9502774e264e78c566737bac85da81",
          "message": "Merge pull request #803 from TeoZosa/dependabot/pip/python-dotenv-0.21.1",
          "timestamp": "2023-01-23T15:20:52Z",
          "tree_id": "3e252282c997bd07abceaf7f67f40180df8dd296",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/1b58b7124f9502774e264e78c566737bac85da81"
        },
        "date": 1674487514908,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 244.53237489842476,
            "unit": "iter/sec",
            "range": "stddev: 0.0000343926078195657",
            "extra": "mean: 4.089438056680167 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 326.20435622061103,
            "unit": "iter/sec",
            "range": "stddev: 0.000017894568223375953",
            "extra": "mean: 3.065562985074617 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 484.63063591583506,
            "unit": "iter/sec",
            "range": "stddev: 0.000011920066477284863",
            "extra": "mean: 2.06342712550609 msec\nrounds: 494"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 955.0624487291193,
            "unit": "iter/sec",
            "range": "stddev: 0.000010381700404182195",
            "extra": "mean: 1.047051950718697 msec\nrounds: 974"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 228.31803931933825,
            "unit": "iter/sec",
            "range": "stddev: 0.000019180507625246036",
            "extra": "mean: 4.379855411255281 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 299.8063603625539,
            "unit": "iter/sec",
            "range": "stddev: 0.000016020462565962055",
            "extra": "mean: 3.335486274509675 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 465.37886868368184,
            "unit": "iter/sec",
            "range": "stddev: 0.000012865624185733832",
            "extra": "mean: 2.1487868644068158 msec\nrounds: 472"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 856.2870676753648,
            "unit": "iter/sec",
            "range": "stddev: 0.000010163654428176803",
            "extra": "mean: 1.1678326553672997 msec\nrounds: 885"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.275944011746088,
            "unit": "iter/sec",
            "range": "stddev: 0.0004191387492740195",
            "extra": "mean: 49.319528571428705 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.023534604690333,
            "unit": "iter/sec",
            "range": "stddev: 0.0001356372601541474",
            "extra": "mean: 47.565740909090565 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 346.88247038820936,
            "unit": "iter/sec",
            "range": "stddev: 0.000013533593987354219",
            "extra": "mean: 2.88282079772109 msec\nrounds: 351"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 585.6254691267217,
            "unit": "iter/sec",
            "range": "stddev: 0.00001564282029305707",
            "extra": "mean: 1.7075760067115746 msec\nrounds: 596"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1208.7395564770686,
            "unit": "iter/sec",
            "range": "stddev: 0.00004237617822481011",
            "extra": "mean: 827.3080786025979 usec\nrounds: 1374"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1096.8416484189024,
            "unit": "iter/sec",
            "range": "stddev: 0.000012986649968706854",
            "extra": "mean: 911.7086330934828 usec\nrounds: 1251"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "21a03fbbeddf74d74ebc105abcc6794041e946b2",
          "message": "Merge pull request #804 from TeoZosa/dependabot/pip/sentry-sdk-1.14.0",
          "timestamp": "2023-01-24T11:45:43Z",
          "tree_id": "0a37f31c2b04df6d10e4adb053c1ae6fe73a8b57",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/21a03fbbeddf74d74ebc105abcc6794041e946b2"
        },
        "date": 1674560923246,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 269.1417959016213,
            "unit": "iter/sec",
            "range": "stddev: 0.000341880683379219",
            "extra": "mean: 3.7155135888501216 msec\nrounds: 287"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 347.03504630551936,
            "unit": "iter/sec",
            "range": "stddev: 0.0002976883279141263",
            "extra": "mean: 2.881553349282279 msec\nrounds: 418"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 522.4230846314268,
            "unit": "iter/sec",
            "range": "stddev: 0.00022977542999369943",
            "extra": "mean: 1.9141573743922649 msec\nrounds: 617"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 970.3289775524676,
            "unit": "iter/sec",
            "range": "stddev: 0.0001203174879191059",
            "extra": "mean: 1.0305783122363035 msec\nrounds: 1185"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 243.6597123301853,
            "unit": "iter/sec",
            "range": "stddev: 0.0003684508557581706",
            "extra": "mean: 4.104084300341337 msec\nrounds: 293"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 320.79800323134475,
            "unit": "iter/sec",
            "range": "stddev: 0.0003102276090352901",
            "extra": "mean: 3.1172263852242437 msec\nrounds: 379"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 480.99301409929956,
            "unit": "iter/sec",
            "range": "stddev: 0.0002394936255839193",
            "extra": "mean: 2.079032274247445 msec\nrounds: 598"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 922.5008315144865,
            "unit": "iter/sec",
            "range": "stddev: 0.00013691739564373654",
            "extra": "mean: 1.0840098630136534 msec\nrounds: 1095"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.92191931807944,
            "unit": "iter/sec",
            "range": "stddev: 0.001861391103845085",
            "extra": "mean: 55.79759523809544 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.753213165640837,
            "unit": "iter/sec",
            "range": "stddev: 0.001375584479739552",
            "extra": "mean: 48.185309523809394 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 364.07521412432493,
            "unit": "iter/sec",
            "range": "stddev: 0.00028817263967907133",
            "extra": "mean: 2.7466851936218832 msec\nrounds: 439"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 580.7006140726644,
            "unit": "iter/sec",
            "range": "stddev: 0.00020338405786132812",
            "extra": "mean: 1.7220577622376472 msec\nrounds: 715"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1156.3122752144195,
            "unit": "iter/sec",
            "range": "stddev: 0.00011661857656884781",
            "extra": "mean: 864.8182860590717 usec\nrounds: 1657"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1073.5650795796428,
            "unit": "iter/sec",
            "range": "stddev: 0.00011390477494599866",
            "extra": "mean: 931.4759012015858 usec\nrounds: 1498"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8ad344421dbb24e2c1279d3a8777887e0a192803",
          "message": "Merge pull request #805 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.4.2",
          "timestamp": "2023-01-26T15:10:42Z",
          "tree_id": "ba9242eee200fd9b59cddd781c0d61916e934459",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/8ad344421dbb24e2c1279d3a8777887e0a192803"
        },
        "date": 1674746043085,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 245.43488646960796,
            "unit": "iter/sec",
            "range": "stddev: 0.000043668567992138765",
            "extra": "mean: 4.074400401606433 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 329.10144140554604,
            "unit": "iter/sec",
            "range": "stddev: 0.000013949287568459982",
            "extra": "mean: 3.0385767857142785 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 486.27052024756944,
            "unit": "iter/sec",
            "range": "stddev: 0.00001247962455672644",
            "extra": "mean: 2.0564684848484776 msec\nrounds: 495"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 950.725174665203,
            "unit": "iter/sec",
            "range": "stddev: 0.000008527155242706245",
            "extra": "mean: 1.051828674203509 msec\nrounds: 973"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 230.2718979718372,
            "unit": "iter/sec",
            "range": "stddev: 0.000014250536644303786",
            "extra": "mean: 4.3426923076922845 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 300.0791837611798,
            "unit": "iter/sec",
            "range": "stddev: 0.00001511440286061246",
            "extra": "mean: 3.332453745928132 msec\nrounds: 307"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 465.7931563950722,
            "unit": "iter/sec",
            "range": "stddev: 0.000010973711702853243",
            "extra": "mean: 2.1468756813417613 msec\nrounds: 477"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 857.6775839406837,
            "unit": "iter/sec",
            "range": "stddev: 0.000008437933082195575",
            "extra": "mean: 1.1659392978482683 msec\nrounds: 883"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.346146076609124,
            "unit": "iter/sec",
            "range": "stddev: 0.0001860148020228381",
            "extra": "mean: 49.14935714285697 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.335989858034083,
            "unit": "iter/sec",
            "range": "stddev: 0.0000895391244388563",
            "extra": "mean: 46.86916363636391 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 349.0768306203763,
            "unit": "iter/sec",
            "range": "stddev: 0.000014247266898671617",
            "extra": "mean: 2.8646988636364337 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 588.113552145307,
            "unit": "iter/sec",
            "range": "stddev: 0.00001380008698676822",
            "extra": "mean: 1.7003519071312387 msec\nrounds: 603"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1208.4561588932681,
            "unit": "iter/sec",
            "range": "stddev: 0.00004199029133043581",
            "extra": "mean: 827.5020923521322 usec\nrounds: 1386"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1099.4953088930786,
            "unit": "iter/sec",
            "range": "stddev: 0.000015816697655385386",
            "extra": "mean: 909.5082006368488 usec\nrounds: 1256"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2cddfdd81c1bf220fc141176f66d42bd81c679a5",
          "message": "Merge pull request #806 from TeoZosa/dependabot/pip/rich-13.3.1",
          "timestamp": "2023-01-30T15:39:59Z",
          "tree_id": "bf2f1ba11c00a8a104b6e079d97fbecd7bdc7144",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/2cddfdd81c1bf220fc141176f66d42bd81c679a5"
        },
        "date": 1675093370095,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 246.77632322901493,
            "unit": "iter/sec",
            "range": "stddev: 0.000012730060436740151",
            "extra": "mean: 4.052252610441779 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 328.4399366932017,
            "unit": "iter/sec",
            "range": "stddev: 0.000018280124301374",
            "extra": "mean: 3.044696726190481 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 483.38133017878357,
            "unit": "iter/sec",
            "range": "stddev: 0.000010299435054509885",
            "extra": "mean: 2.0687600814664058 msec\nrounds: 491"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 942.5571841777221,
            "unit": "iter/sec",
            "range": "stddev: 0.000007997550385670572",
            "extra": "mean: 1.0609435870698822 msec\nrounds: 959"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 231.21850764231525,
            "unit": "iter/sec",
            "range": "stddev: 0.000013642038342970652",
            "extra": "mean: 4.324913304721072 msec\nrounds: 233"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 302.98648267123076,
            "unit": "iter/sec",
            "range": "stddev: 0.00001902314558926477",
            "extra": "mean: 3.3004772727273624 msec\nrounds: 308"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 467.0865124039446,
            "unit": "iter/sec",
            "range": "stddev: 0.000010882009331526732",
            "extra": "mean: 2.1409310126582772 msec\nrounds: 474"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 866.1998562322979,
            "unit": "iter/sec",
            "range": "stddev: 0.000010824087483513103",
            "extra": "mean: 1.154467981961682 msec\nrounds: 887"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.221101374062176,
            "unit": "iter/sec",
            "range": "stddev: 0.00013465934391925093",
            "extra": "mean: 49.45329047619091 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.221248102627616,
            "unit": "iter/sec",
            "range": "stddev: 0.00012171227443720971",
            "extra": "mean: 47.12258181818156 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 347.5274262819753,
            "unit": "iter/sec",
            "range": "stddev: 0.000011165944434902488",
            "extra": "mean: 2.8774707386363927 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 586.2396227988472,
            "unit": "iter/sec",
            "range": "stddev: 0.000010412361456878607",
            "extra": "mean: 1.7057871237460245 msec\nrounds: 598"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1189.8398255254467,
            "unit": "iter/sec",
            "range": "stddev: 0.00004211305967987634",
            "extra": "mean: 840.4492592592358 usec\nrounds: 1350"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1085.7271712674715,
            "unit": "iter/sec",
            "range": "stddev: 0.000012205051908195938",
            "extra": "mean: 921.0417004049054 usec\nrounds: 1235"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "37be49d6d2c5d448f18cfed72d7fb75b824a042d",
          "message": "Merge pull request #807 from TeoZosa/dependabot/pip/xdoctest-1.1.1",
          "timestamp": "2023-01-30T15:56:02Z",
          "tree_id": "08f4bddf144d271c20b7f813167542a11484ef19",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/37be49d6d2c5d448f18cfed72d7fb75b824a042d"
        },
        "date": 1675094605053,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 167.758614627944,
            "unit": "iter/sec",
            "range": "stddev: 0.00033465400527084283",
            "extra": "mean: 5.960945744680865 msec\nrounds: 188"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 222.00717653554352,
            "unit": "iter/sec",
            "range": "stddev: 0.00027472480958583626",
            "extra": "mean: 4.504358893280638 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 298.8243896951239,
            "unit": "iter/sec",
            "range": "stddev: 0.0003369435432654073",
            "extra": "mean: 3.3464470588235846 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 643.600107289508,
            "unit": "iter/sec",
            "range": "stddev: 0.00009989693508498502",
            "extra": "mean: 1.5537598404255302 msec\nrounds: 752"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 151.56419567983383,
            "unit": "iter/sec",
            "range": "stddev: 0.00041048232585304137",
            "extra": "mean: 6.597864327485451 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 200.15991347372378,
            "unit": "iter/sec",
            "range": "stddev: 0.0002875709515382394",
            "extra": "mean: 4.996005357142984 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 298.1922967787446,
            "unit": "iter/sec",
            "range": "stddev: 0.0001723235659617024",
            "extra": "mean: 3.353540687679095 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 574.0636471443203,
            "unit": "iter/sec",
            "range": "stddev: 0.0001564442755631601",
            "extra": "mean: 1.7419671232876357 msec\nrounds: 657"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.870970629182324,
            "unit": "iter/sec",
            "range": "stddev: 0.001427508281104982",
            "extra": "mean: 67.24510625000035 msec\nrounds: 16"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 15.413107402867425,
            "unit": "iter/sec",
            "range": "stddev: 0.001119426732436551",
            "extra": "mean: 64.87984374999955 msec\nrounds: 16"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 216.75395623583708,
            "unit": "iter/sec",
            "range": "stddev: 0.0002078523866072446",
            "extra": "mean: 4.613525941422538 msec\nrounds: 239"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 352.54391745086673,
            "unit": "iter/sec",
            "range": "stddev: 0.00016208170381263023",
            "extra": "mean: 2.8365260340631684 msec\nrounds: 411"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 705.32526307981,
            "unit": "iter/sec",
            "range": "stddev: 0.00021331576780053593",
            "extra": "mean: 1.4177855981416143 msec\nrounds: 861"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 632.3092707390265,
            "unit": "iter/sec",
            "range": "stddev: 0.00017519314572894408",
            "extra": "mean: 1.5815045679011257 msec\nrounds: 810"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4db35477b05e8eeb089719010546f3d070b5178d",
          "message": "Merge pull request #809 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.4.3",
          "timestamp": "2023-01-31T15:42:43Z",
          "tree_id": "278a85b0eecd673cf832b7967610786eca2d7490",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/4db35477b05e8eeb089719010546f3d070b5178d"
        },
        "date": 1675179917485,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 246.26698651165952,
            "unit": "iter/sec",
            "range": "stddev: 0.000014229083537370969",
            "extra": "mean: 4.060633600000035 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 327.98643643911674,
            "unit": "iter/sec",
            "range": "stddev: 0.000013712818596823678",
            "extra": "mean: 3.04890656716418 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 491.1052490605934,
            "unit": "iter/sec",
            "range": "stddev: 0.000043418931350740694",
            "extra": "mean: 2.036223399999983 msec\nrounds: 500"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 955.4088316651556,
            "unit": "iter/sec",
            "range": "stddev: 0.000009154048848045979",
            "extra": "mean: 1.04667234262125 msec\nrounds: 969"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 229.54097345951791,
            "unit": "iter/sec",
            "range": "stddev: 0.00001547323631147535",
            "extra": "mean: 4.356520689655265 msec\nrounds: 232"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 298.2507397893872,
            "unit": "iter/sec",
            "range": "stddev: 0.000017962097770428013",
            "extra": "mean: 3.3528835526314547 msec\nrounds: 304"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 467.07831703450495,
            "unit": "iter/sec",
            "range": "stddev: 0.000012083360719082258",
            "extra": "mean: 2.1409685774947373 msec\nrounds: 471"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 875.5285366970102,
            "unit": "iter/sec",
            "range": "stddev: 0.000009187036835833354",
            "extra": "mean: 1.1421672259508147 msec\nrounds: 894"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.37060928492372,
            "unit": "iter/sec",
            "range": "stddev: 0.00010111302257003394",
            "extra": "mean: 49.09033333333331 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.12909260919711,
            "unit": "iter/sec",
            "range": "stddev: 0.0002596338280643538",
            "extra": "mean: 47.32810909090901 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 349.0708929362331,
            "unit": "iter/sec",
            "range": "stddev: 0.000011096068157483108",
            "extra": "mean: 2.864747592067712 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 589.1982037140266,
            "unit": "iter/sec",
            "range": "stddev: 0.00001290655485051917",
            "extra": "mean: 1.6972217391303528 msec\nrounds: 598"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1188.975546765379,
            "unit": "iter/sec",
            "range": "stddev: 0.00006696364246259546",
            "extra": "mean: 841.0601906157876 usec\nrounds: 1364"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1096.3767633173672,
            "unit": "iter/sec",
            "range": "stddev: 0.00002278780409341035",
            "extra": "mean: 912.0952153110626 usec\nrounds: 1254"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "92422432cbcd7a8cba00f1d1dd3aa0c5e5f8a30b",
          "message": "Merge pull request #810 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.4.4",
          "timestamp": "2023-02-01T15:33:02Z",
          "tree_id": "4c11ca522c7a3fc711242b63a6c0ecea4d4e2308",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/92422432cbcd7a8cba00f1d1dd3aa0c5e5f8a30b"
        },
        "date": 1675265711758,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 245.43614943934165,
            "unit": "iter/sec",
            "range": "stddev: 0.000015571889590844707",
            "extra": "mean: 4.074379435483872 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 325.70298294050116,
            "unit": "iter/sec",
            "range": "stddev: 0.00002866980443637007",
            "extra": "mean: 3.0702819819819647 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 484.1619264861897,
            "unit": "iter/sec",
            "range": "stddev: 0.000011731110032855769",
            "extra": "mean: 2.06542469635626 msec\nrounds: 494"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 944.1316001924413,
            "unit": "iter/sec",
            "range": "stddev: 0.000008437367875279937",
            "extra": "mean: 1.059174377593305 msec\nrounds: 964"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 228.25112603889147,
            "unit": "iter/sec",
            "range": "stddev: 0.00002726705222457908",
            "extra": "mean: 4.381139393939336 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 299.04191871570595,
            "unit": "iter/sec",
            "range": "stddev: 0.000014886255154970797",
            "extra": "mean: 3.3440127868851826 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 463.4463586970328,
            "unit": "iter/sec",
            "range": "stddev: 0.000012388695138286941",
            "extra": "mean: 2.15774702127658 msec\nrounds: 470"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 866.5595551896481,
            "unit": "iter/sec",
            "range": "stddev: 0.000023028711755735378",
            "extra": "mean: 1.1539887755102396 msec\nrounds: 882"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.24238813911724,
            "unit": "iter/sec",
            "range": "stddev: 0.00015374583014159593",
            "extra": "mean: 49.401285714285756 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.130062642951987,
            "unit": "iter/sec",
            "range": "stddev: 0.00018167778003274815",
            "extra": "mean: 47.32593636363657 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 346.2561422455582,
            "unit": "iter/sec",
            "range": "stddev: 0.00001727926103273705",
            "extra": "mean: 2.8880354107648416 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 585.8975531319593,
            "unit": "iter/sec",
            "range": "stddev: 0.00001276202092736577",
            "extra": "mean: 1.7067830282861312 msec\nrounds: 601"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1190.9847248151802,
            "unit": "iter/sec",
            "range": "stddev: 0.0000430783128233266",
            "extra": "mean: 839.6413313824679 usec\nrounds: 1367"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1090.610276486436,
            "unit": "iter/sec",
            "range": "stddev: 0.00001720600520482221",
            "extra": "mean: 916.9178225806282 usec\nrounds: 1240"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c208d30f3322a7d7a4c193e4f56c877ebd26516b",
          "message": "Merge pull request #811 from TeoZosa/dependabot/pip/black-23.1.0\n\n⬆️ Bump black from 22.12.0 to 23.1.0",
          "timestamp": "2023-02-04T12:27:50+09:00",
          "tree_id": "08cc0e8e04ac2601cb34ec417e87ef43ee4ec2f5",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/c208d30f3322a7d7a4c193e4f56c877ebd26516b"
        },
        "date": 1675481472555,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 245.41313971517766,
            "unit": "iter/sec",
            "range": "stddev: 0.000016608835809087252",
            "extra": "mean: 4.074761445783152 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 329.5955627020257,
            "unit": "iter/sec",
            "range": "stddev: 0.000014801357916151069",
            "extra": "mean: 3.034021428571417 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 487.1872216292331,
            "unit": "iter/sec",
            "range": "stddev: 0.000014377286343936756",
            "extra": "mean: 2.052598991935457 msec\nrounds: 496"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 957.6733007278486,
            "unit": "iter/sec",
            "range": "stddev: 0.000007858001843934758",
            "extra": "mean: 1.0441974306268977 msec\nrounds: 973"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 230.14578445835903,
            "unit": "iter/sec",
            "range": "stddev: 0.000016854560944232902",
            "extra": "mean: 4.345071982758532 msec\nrounds: 232"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 300.5628803660347,
            "unit": "iter/sec",
            "range": "stddev: 0.000012972084691173439",
            "extra": "mean: 3.3270908196719753 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 465.12295667946324,
            "unit": "iter/sec",
            "range": "stddev: 0.000014089520789325386",
            "extra": "mean: 2.1499691331923314 msec\nrounds: 473"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 870.4441991048609,
            "unit": "iter/sec",
            "range": "stddev: 0.000008247300827780855",
            "extra": "mean: 1.1488387205387438 msec\nrounds: 891"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.35902856022697,
            "unit": "iter/sec",
            "range": "stddev: 0.00018515852551717726",
            "extra": "mean: 49.1182571428571 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.27554431304233,
            "unit": "iter/sec",
            "range": "stddev: 0.00011429288163487196",
            "extra": "mean: 47.002322727272364 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 349.14260901977275,
            "unit": "iter/sec",
            "range": "stddev: 0.000010876507330597499",
            "extra": "mean: 2.8641591549296344 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 589.4420208000628,
            "unit": "iter/sec",
            "range": "stddev: 0.00000951482451380376",
            "extra": "mean: 1.6965196994993297 msec\nrounds: 599"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1201.2909149222885,
            "unit": "iter/sec",
            "range": "stddev: 0.000040620124208077126",
            "extra": "mean: 832.4378279883103 usec\nrounds: 1372"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1098.78267371894,
            "unit": "iter/sec",
            "range": "stddev: 0.00001220530882919178",
            "extra": "mean: 910.0980784629593 usec\nrounds: 1249"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "02bc216e6c302dc80ec938ec9decab46fe9140ae",
          "message": "Merge pull request #808 from TeoZosa/dependabot/pip/dot-github/workflows/pip-23.0\n\n⬆️ Bump pip from 22.3.1 to 23.0 in /.github/workflows",
          "timestamp": "2023-02-05T16:00:21+09:00",
          "tree_id": "d5d4e2e838e130c700b441448e9e8b2b97bdddb3",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/02bc216e6c302dc80ec938ec9decab46fe9140ae"
        },
        "date": 1675580544172,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 241.4690702267974,
            "unit": "iter/sec",
            "range": "stddev: 0.00007035119885493492",
            "extra": "mean: 4.141317142857095 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 327.25084404263123,
            "unit": "iter/sec",
            "range": "stddev: 0.000016054043711954665",
            "extra": "mean: 3.0557598802395427 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 485.6549543707786,
            "unit": "iter/sec",
            "range": "stddev: 0.000013587045996119816",
            "extra": "mean: 2.0590750511247515 msec\nrounds: 489"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 942.9232234115642,
            "unit": "iter/sec",
            "range": "stddev: 0.000008312855633386523",
            "extra": "mean: 1.0605317327766388 msec\nrounds: 958"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 229.7546836636001,
            "unit": "iter/sec",
            "range": "stddev: 0.000017499299278791626",
            "extra": "mean: 4.3524683982685195 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 297.6776901709419,
            "unit": "iter/sec",
            "range": "stddev: 0.000021330801593792053",
            "extra": "mean: 3.3593380794702763 msec\nrounds: 302"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 465.54343311778587,
            "unit": "iter/sec",
            "range": "stddev: 0.000011811810569703259",
            "extra": "mean: 2.1480272921108794 msec\nrounds: 469"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 863.77993059159,
            "unit": "iter/sec",
            "range": "stddev: 0.000011204773594034852",
            "extra": "mean: 1.1577022857142731 msec\nrounds: 875"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.933241580622454,
            "unit": "iter/sec",
            "range": "stddev: 0.00016727814679457265",
            "extra": "mean: 50.167454999999705 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.00284168447954,
            "unit": "iter/sec",
            "range": "stddev: 0.00019756034135443224",
            "extra": "mean: 47.612604761905594 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 346.53445307729834,
            "unit": "iter/sec",
            "range": "stddev: 0.000013227846240015054",
            "extra": "mean: 2.88571595441605 msec\nrounds: 351"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 583.8919232732787,
            "unit": "iter/sec",
            "range": "stddev: 0.00000986266781624176",
            "extra": "mean: 1.7126457142856735 msec\nrounds: 595"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1203.1371272901372,
            "unit": "iter/sec",
            "range": "stddev: 0.00004199850182414029",
            "extra": "mean: 831.1604532164433 usec\nrounds: 1368"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1099.9242910398336,
            "unit": "iter/sec",
            "range": "stddev: 0.000011684938096764439",
            "extra": "mean: 909.153482786194 usec\nrounds: 1249"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bf1d335a37c402c4ad753e4c2803a5f31c5db5df",
          "message": "Merge pull request #820 from TeoZosa/build/c-library/constrain-mypyc-version-to-lt-1.0\n\n💚 📌  Constrain `mypy` to <1.0 for C-compilation",
          "timestamp": "2023-02-11T14:27:46+09:00",
          "tree_id": "112b8aacdd0f9c72ccc8e01c95d29cc1277a08f0",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/bf1d335a37c402c4ad753e4c2803a5f31c5db5df"
        },
        "date": 1676093416069,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 244.49877750611287,
            "unit": "iter/sec",
            "range": "stddev: 0.000012948061928051732",
            "extra": "mean: 4.089999999999993 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 326.2222115985038,
            "unit": "iter/sec",
            "range": "stddev: 0.00005328304032695537",
            "extra": "mean: 3.065395195195183 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 487.42815244897747,
            "unit": "iter/sec",
            "range": "stddev: 0.00001107666717652723",
            "extra": "mean: 2.05158441295546 msec\nrounds: 494"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 945.3259273725062,
            "unit": "iter/sec",
            "range": "stddev: 0.000008271906300788978",
            "extra": "mean: 1.0578362139917799 msec\nrounds: 972"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 229.0371061925087,
            "unit": "iter/sec",
            "range": "stddev: 0.000014352113124534797",
            "extra": "mean: 4.366104761904767 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 300.79648937951885,
            "unit": "iter/sec",
            "range": "stddev: 0.000013302338973663675",
            "extra": "mean: 3.3245068852458814 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 464.37011602432125,
            "unit": "iter/sec",
            "range": "stddev: 0.00003747576629056733",
            "extra": "mean: 2.1534546808512225 msec\nrounds: 470"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 879.8518372955757,
            "unit": "iter/sec",
            "range": "stddev: 0.000007515600649232248",
            "extra": "mean: 1.1365549943882904 msec\nrounds: 891"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.490007803765963,
            "unit": "iter/sec",
            "range": "stddev: 0.0001430450555058301",
            "extra": "mean: 48.804276190475875 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.280458744783875,
            "unit": "iter/sec",
            "range": "stddev: 0.00020888190873447486",
            "extra": "mean: 46.9914681818179 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 348.00769057447025,
            "unit": "iter/sec",
            "range": "stddev: 0.000011400061224955682",
            "extra": "mean: 2.8734997159093236 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 584.5983008920883,
            "unit": "iter/sec",
            "range": "stddev: 0.000010759831137030913",
            "extra": "mean: 1.7105763025209186 msec\nrounds: 595"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1207.290025470133,
            "unit": "iter/sec",
            "range": "stddev: 0.000042671678800805026",
            "extra": "mean: 828.3013848396438 usec\nrounds: 1372"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1103.2561464926885,
            "unit": "iter/sec",
            "range": "stddev: 0.000012039475915270273",
            "extra": "mean: 906.4078212290542 usec\nrounds: 1253"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "52504f79eb5b80040a5b89f0c788ca1e3ebb6b7d",
          "message": "Merge pull request #818 from TeoZosa/dependabot/pip/docs/orjson-3.8.6",
          "timestamp": "2023-02-11T07:59:05Z",
          "tree_id": "3e1ebcd3d82e32d14dde2a530a2d308f870ecd87",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/52504f79eb5b80040a5b89f0c788ca1e3ebb6b7d"
        },
        "date": 1676102514864,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 254.25589242977574,
            "unit": "iter/sec",
            "range": "stddev: 0.000027384154958442447",
            "extra": "mean: 3.9330455252917895 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 332.9455822968516,
            "unit": "iter/sec",
            "range": "stddev: 0.0000171050973986481",
            "extra": "mean: 3.00349382352942 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 483.1159279124577,
            "unit": "iter/sec",
            "range": "stddev: 0.000019325287295979682",
            "extra": "mean: 2.069896565656604 msec\nrounds: 495"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 926.0296728188683,
            "unit": "iter/sec",
            "range": "stddev: 0.000011912885504517285",
            "extra": "mean: 1.0798790031813594 msec\nrounds: 943"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 239.8236721225969,
            "unit": "iter/sec",
            "range": "stddev: 0.00004296843721425329",
            "extra": "mean: 4.1697301652891205 msec\nrounds: 242"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 305.62022824622125,
            "unit": "iter/sec",
            "range": "stddev: 0.000013018327645461685",
            "extra": "mean: 3.2720347266881675 msec\nrounds: 311"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 469.2713404112117,
            "unit": "iter/sec",
            "range": "stddev: 0.00001644911824535281",
            "extra": "mean: 2.1309632911392433 msec\nrounds: 474"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 865.6078374438953,
            "unit": "iter/sec",
            "range": "stddev: 0.000010843920129128276",
            "extra": "mean: 1.1552575620767935 msec\nrounds: 886"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.578425793269286,
            "unit": "iter/sec",
            "range": "stddev: 0.00019363087403644408",
            "extra": "mean: 53.82587368421099 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.207046681285977,
            "unit": "iter/sec",
            "range": "stddev: 0.00017963806850965515",
            "extra": "mean: 52.06422500000123 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 348.3284808420867,
            "unit": "iter/sec",
            "range": "stddev: 0.000018919886335565095",
            "extra": "mean: 2.8708533898304625 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 555.1360542688985,
            "unit": "iter/sec",
            "range": "stddev: 0.000015959747690232953",
            "extra": "mean: 1.801360211267447 msec\nrounds: 568"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1123.5192003994314,
            "unit": "iter/sec",
            "range": "stddev: 0.000045218417177821476",
            "extra": "mean: 890.0604454685616 usec\nrounds: 1302"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1038.2430332269819,
            "unit": "iter/sec",
            "range": "stddev: 0.000024515988285053442",
            "extra": "mean: 963.1656250000368 usec\nrounds: 1216"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "279ab510138ccb63135b7e6a2b4a67e99aaa41d6",
          "message": "Merge pull request #819 from TeoZosa/dependabot/pip/orjson-3.8.6",
          "timestamp": "2023-02-11T09:44:05Z",
          "tree_id": "37065511f4feed9ccfe2fec1ccc69c1860f66139",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/279ab510138ccb63135b7e6a2b4a67e99aaa41d6"
        },
        "date": 1676108806183,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 247.55622065879083,
            "unit": "iter/sec",
            "range": "stddev: 0.000013117855608901991",
            "extra": "mean: 4.03948645418331 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 332.72545697150287,
            "unit": "iter/sec",
            "range": "stddev: 0.00001405740923430314",
            "extra": "mean: 3.005480882352947 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 487.4776487093174,
            "unit": "iter/sec",
            "range": "stddev: 0.000010874181265445966",
            "extra": "mean: 2.05137610441766 msec\nrounds: 498"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 945.2173747645103,
            "unit": "iter/sec",
            "range": "stddev: 0.000009552860306178131",
            "extra": "mean: 1.0579577002053502 msec\nrounds: 974"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 231.91394433413842,
            "unit": "iter/sec",
            "range": "stddev: 0.000014008147773227498",
            "extra": "mean: 4.311944255319179 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 303.339502872699,
            "unit": "iter/sec",
            "range": "stddev: 0.000014652508987441346",
            "extra": "mean: 3.296636245954637 msec\nrounds: 309"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 468.1703079912925,
            "unit": "iter/sec",
            "range": "stddev: 0.00001345469507509514",
            "extra": "mean: 2.1359748427672582 msec\nrounds: 477"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 874.6454070442015,
            "unit": "iter/sec",
            "range": "stddev: 0.000009288304389112543",
            "extra": "mean: 1.1433204724408543 msec\nrounds: 889"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.157369543903922,
            "unit": "iter/sec",
            "range": "stddev: 0.00017477251391210245",
            "extra": "mean: 49.60964761904781 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.128416402049588,
            "unit": "iter/sec",
            "range": "stddev: 0.00012175301599857254",
            "extra": "mean: 47.329623809524776 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 346.4722548355319,
            "unit": "iter/sec",
            "range": "stddev: 0.000012719329428674582",
            "extra": "mean: 2.8862339943343907 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 585.9437702753912,
            "unit": "iter/sec",
            "range": "stddev: 0.000010406690251735818",
            "extra": "mean: 1.7066484033613054 msec\nrounds: 595"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1203.197016281742,
            "unit": "iter/sec",
            "range": "stddev: 0.0000413320640543094",
            "extra": "mean: 831.119082301513 usec\nrounds: 1373"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1099.9828377780811,
            "unit": "iter/sec",
            "range": "stddev: 0.000012179577245327152",
            "extra": "mean: 909.1050929666845 usec\nrounds: 1237"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a33d9177ec2d461e22ad89b09cd56d9f33f2c259",
          "message": "Merge pull request #821 from TeoZosa/fix/use-directory-owner-agnostic-method-to-infer-git-repo-root\n\n🐛 Infer git project root with invoking `git`",
          "timestamp": "2023-02-12T19:34:09+09:00",
          "tree_id": "6c77dc86ea1db8a7c75d9d48d716456414854ba7",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/a33d9177ec2d461e22ad89b09cd56d9f33f2c259"
        },
        "date": 1676198191144,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 257.64193221539733,
            "unit": "iter/sec",
            "range": "stddev: 0.000014646256304260476",
            "extra": "mean: 3.8813557692307876 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 335.32928007753617,
            "unit": "iter/sec",
            "range": "stddev: 0.000009891413039777003",
            "extra": "mean: 2.982143401759536 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 484.5585538885622,
            "unit": "iter/sec",
            "range": "stddev: 0.000010850711593473288",
            "extra": "mean: 2.06373407707911 msec\nrounds: 493"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 944.0757912332159,
            "unit": "iter/sec",
            "range": "stddev: 0.00000720774299865781",
            "extra": "mean: 1.0592369905955665 msec\nrounds: 957"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 235.50838409848106,
            "unit": "iter/sec",
            "range": "stddev: 0.00002331992916038614",
            "extra": "mean: 4.246133333333204 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 303.3535040432215,
            "unit": "iter/sec",
            "range": "stddev: 0.00001198834831248235",
            "extra": "mean: 3.2964840909090705 msec\nrounds: 308"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 467.15234084225,
            "unit": "iter/sec",
            "range": "stddev: 0.000012185473136809882",
            "extra": "mean: 2.1406293248944337 msec\nrounds: 474"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 850.6679517700056,
            "unit": "iter/sec",
            "range": "stddev: 0.000007269108647509194",
            "extra": "mean: 1.1755468134414557 msec\nrounds: 863"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.833410946810908,
            "unit": "iter/sec",
            "range": "stddev: 0.00003648366212876714",
            "extra": "mean: 53.09712631578995 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.58894364760397,
            "unit": "iter/sec",
            "range": "stddev: 0.00005146081263291832",
            "extra": "mean: 51.049205000000875 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 346.73112299176444,
            "unit": "iter/sec",
            "range": "stddev: 0.000010505743788770034",
            "extra": "mean: 2.884079142857193 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 552.7222801662782,
            "unit": "iter/sec",
            "range": "stddev: 0.000010649092944838145",
            "extra": "mean: 1.8092268683273725 msec\nrounds: 562"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1150.484695742222,
            "unit": "iter/sec",
            "range": "stddev: 0.00004879838582603494",
            "extra": "mean: 869.1988721804435 usec\nrounds: 1330"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1037.5299754818404,
            "unit": "iter/sec",
            "range": "stddev: 0.00001787275762446979",
            "extra": "mean: 963.8275747508777 usec\nrounds: 1204"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a7422e7d85a3118e0c7d89c7d25ca52e4bae9d5c",
          "message": "Merge pull request #813 from TeoZosa/dependabot/pip/mypy-1.0.0\n\n⬆️ Bump mypy from 0.991 to 1.0.0",
          "timestamp": "2023-02-12T19:36:56+09:00",
          "tree_id": "0aa558ae87162e170880e6dda9b80f6089deab77",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/a7422e7d85a3118e0c7d89c7d25ca52e4bae9d5c"
        },
        "date": 1676198429151,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 245.18735774437337,
            "unit": "iter/sec",
            "range": "stddev: 0.000013030063864781592",
            "extra": "mean: 4.078513709677384 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 331.8271792848444,
            "unit": "iter/sec",
            "range": "stddev: 0.00001790702289659029",
            "extra": "mean: 3.0136169139466062 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 484.0018177176173,
            "unit": "iter/sec",
            "range": "stddev: 0.000011358767091644306",
            "extra": "mean: 2.066107942973539 msec\nrounds: 491"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 951.1884718306201,
            "unit": "iter/sec",
            "range": "stddev: 0.000008911105205903015",
            "extra": "mean: 1.05131635802465 msec\nrounds: 972"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 229.95398354318834,
            "unit": "iter/sec",
            "range": "stddev: 0.000015070330311721561",
            "extra": "mean: 4.348696137339091 msec\nrounds: 233"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 302.67861673497566,
            "unit": "iter/sec",
            "range": "stddev: 0.000014786368301798031",
            "extra": "mean: 3.3038343137255595 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 461.6116499411692,
            "unit": "iter/sec",
            "range": "stddev: 0.000014785986590966085",
            "extra": "mean: 2.1663231422505183 msec\nrounds: 471"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 870.3922201262056,
            "unit": "iter/sec",
            "range": "stddev: 0.000007470429468326903",
            "extra": "mean: 1.1489073280721667 msec\nrounds: 887"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.424711449888946,
            "unit": "iter/sec",
            "range": "stddev: 0.0001707266147967302",
            "extra": "mean: 48.96030000000011 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.304514136028985,
            "unit": "iter/sec",
            "range": "stddev: 0.00008252441433259331",
            "extra": "mean: 46.93840909090984 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 349.3267587741354,
            "unit": "iter/sec",
            "range": "stddev: 0.000010741885299444182",
            "extra": "mean: 2.862649295774594 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 590.7390371052296,
            "unit": "iter/sec",
            "range": "stddev: 0.000009609364715925296",
            "extra": "mean: 1.6927948504982038 msec\nrounds: 602"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1224.951116601496,
            "unit": "iter/sec",
            "range": "stddev: 0.00004037818640721985",
            "extra": "mean: 816.3591072714801 usec\nrounds: 1389"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1098.7537818948576,
            "unit": "iter/sec",
            "range": "stddev: 0.000011772164489881616",
            "extra": "mean: 910.1220095692853 usec\nrounds: 1254"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a85d8a7029ba6fd53dd7ce2b5284f7e37b1f3cc6",
          "message": "Merge pull request #815 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.4.5",
          "timestamp": "2023-02-12T12:44:32Z",
          "tree_id": "96805a5b8d936f6ec0eb0fdc6f26c95796e2a578",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/a85d8a7029ba6fd53dd7ce2b5284f7e37b1f3cc6"
        },
        "date": 1676206021040,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 246.28266484569076,
            "unit": "iter/sec",
            "range": "stddev: 0.000015119175181027493",
            "extra": "mean: 4.060375100401619 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 329.97122768741315,
            "unit": "iter/sec",
            "range": "stddev: 0.000015138901149106762",
            "extra": "mean: 3.0305672619047725 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 488.9738848591494,
            "unit": "iter/sec",
            "range": "stddev: 0.00001080159687057226",
            "extra": "mean: 2.0450989939637645 msec\nrounds: 497"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 956.1442290013296,
            "unit": "iter/sec",
            "range": "stddev: 0.000010794221929189058",
            "extra": "mean: 1.0458673175745428 msec\nrounds: 973"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 230.1657618254586,
            "unit": "iter/sec",
            "range": "stddev: 0.00001530174007175925",
            "extra": "mean: 4.3446948497853874 msec\nrounds: 233"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 298.4116380147534,
            "unit": "iter/sec",
            "range": "stddev: 0.000014450541837840946",
            "extra": "mean: 3.351075737704842 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 465.6454361491326,
            "unit": "iter/sec",
            "range": "stddev: 0.00001154171617451616",
            "extra": "mean: 2.147556751054958 msec\nrounds: 474"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 867.5189721988794,
            "unit": "iter/sec",
            "range": "stddev: 0.000007845293627633711",
            "extra": "mean: 1.1527125423727902 msec\nrounds: 885"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.15382357861073,
            "unit": "iter/sec",
            "range": "stddev: 0.00014997591108119343",
            "extra": "mean: 49.61837619047637 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.09505643379604,
            "unit": "iter/sec",
            "range": "stddev: 0.00010735717089602896",
            "extra": "mean: 47.40447142857209 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 347.2783343110566,
            "unit": "iter/sec",
            "range": "stddev: 0.000012160261416381218",
            "extra": "mean: 2.8795346590907736 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 584.6491279097854,
            "unit": "iter/sec",
            "range": "stddev: 0.000010569935774003096",
            "extra": "mean: 1.7104275919732588 msec\nrounds: 598"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1220.8389062365873,
            "unit": "iter/sec",
            "range": "stddev: 0.000041349955802652465",
            "extra": "mean: 819.1088888890713 usec\nrounds: 1395"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1097.545399325533,
            "unit": "iter/sec",
            "range": "stddev: 0.000012597169132162236",
            "extra": "mean: 911.1240415335194 usec\nrounds: 1252"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2935be47c51599dad527b1c7160324c45e9f48dd",
          "message": "Merge pull request #817 from TeoZosa/dependabot/pip/pytest-xdist-3.2.0",
          "timestamp": "2023-02-12T12:45:27Z",
          "tree_id": "fb2788308bac6dcf5fb608c7dc81dda03bf68288",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/2935be47c51599dad527b1c7160324c45e9f48dd"
        },
        "date": 1676206288628,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 243.20530353653143,
            "unit": "iter/sec",
            "range": "stddev: 0.000011779791331887914",
            "extra": "mean: 4.111752439024389 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 325.9811052345329,
            "unit": "iter/sec",
            "range": "stddev: 0.000013895886621674884",
            "extra": "mean: 3.0676624624624558 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 485.9655318617279,
            "unit": "iter/sec",
            "range": "stddev: 0.000010348755597175477",
            "extra": "mean: 2.0577591093117498 msec\nrounds: 494"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 955.4270885567812,
            "unit": "iter/sec",
            "range": "stddev: 0.00000991911783817895",
            "extra": "mean: 1.0466523421588856 msec\nrounds: 982"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 228.29196517495063,
            "unit": "iter/sec",
            "range": "stddev: 0.000013340925583408316",
            "extra": "mean: 4.380355652173978 msec\nrounds: 230"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 299.753009436406,
            "unit": "iter/sec",
            "range": "stddev: 0.000014146329521689828",
            "extra": "mean: 3.3360799342104843 msec\nrounds: 304"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 466.9975303204272,
            "unit": "iter/sec",
            "range": "stddev: 0.00001005775824924778",
            "extra": "mean: 2.1413389473684297 msec\nrounds: 475"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 876.139630784649,
            "unit": "iter/sec",
            "range": "stddev: 0.000008936571080981992",
            "extra": "mean: 1.1413705816553747 msec\nrounds: 894"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.45227976692993,
            "unit": "iter/sec",
            "range": "stddev: 0.00019198708934775203",
            "extra": "mean: 48.894304761904245 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.226442628640065,
            "unit": "iter/sec",
            "range": "stddev: 0.00006718452734286424",
            "extra": "mean: 47.111050000000304 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 347.96434433087325,
            "unit": "iter/sec",
            "range": "stddev: 0.00001502411540019779",
            "extra": "mean: 2.8738576704546412 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 585.4897401013907,
            "unit": "iter/sec",
            "range": "stddev: 0.000010071530014737903",
            "extra": "mean: 1.7079718592965054 msec\nrounds: 597"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1219.8234512380436,
            "unit": "iter/sec",
            "range": "stddev: 0.00004064439643525404",
            "extra": "mean: 819.7907647906451 usec\nrounds: 1386"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1096.4288048716012,
            "unit": "iter/sec",
            "range": "stddev: 0.000011578501473742755",
            "extra": "mean: 912.0519230768534 usec\nrounds: 1248"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ec3a79ca66b815990daae4b15f077c3231f95490",
          "message": "Merge pull request #814 from TeoZosa/dependabot/pip/sentry-sdk-1.15.0",
          "timestamp": "2023-02-12T13:39:16Z",
          "tree_id": "7b6f7689d9eaeb83470c3ca09713669847367ed8",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/ec3a79ca66b815990daae4b15f077c3231f95490"
        },
        "date": 1676209324878,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 256.555967042822,
            "unit": "iter/sec",
            "range": "stddev: 0.000014968934562297826",
            "extra": "mean: 3.8977849999999776 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 341.2605519424958,
            "unit": "iter/sec",
            "range": "stddev: 0.000051331034534449316",
            "extra": "mean: 2.9303123209169084 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 504.21899333860273,
            "unit": "iter/sec",
            "range": "stddev: 0.000011188707017362957",
            "extra": "mean: 1.9832652343749793 msec\nrounds: 512"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 972.4085214778852,
            "unit": "iter/sec",
            "range": "stddev: 0.000010967602842089053",
            "extra": "mean: 1.0283743693238936 msec\nrounds: 991"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 239.18493680476524,
            "unit": "iter/sec",
            "range": "stddev: 0.000030415120204402383",
            "extra": "mean: 4.180865289256281 msec\nrounds: 242"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 307.68305157307356,
            "unit": "iter/sec",
            "range": "stddev: 0.00003859469282822296",
            "extra": "mean: 3.2500977707005863 msec\nrounds: 314"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 477.7890987796352,
            "unit": "iter/sec",
            "range": "stddev: 0.000016816968779383073",
            "extra": "mean: 2.092973662551514 msec\nrounds: 486"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 874.1250155918831,
            "unit": "iter/sec",
            "range": "stddev: 0.000009041833712822043",
            "extra": "mean: 1.1440011235954448 msec\nrounds: 890"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.91532931140329,
            "unit": "iter/sec",
            "range": "stddev: 0.00012735103647430266",
            "extra": "mean: 52.867173684210734 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.75991505607689,
            "unit": "iter/sec",
            "range": "stddev: 0.00008843074884872927",
            "extra": "mean: 50.607505000000685 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 355.6673668373722,
            "unit": "iter/sec",
            "range": "stddev: 0.000013483453157648851",
            "extra": "mean: 2.811615833333529 msec\nrounds: 360"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 566.8769097649437,
            "unit": "iter/sec",
            "range": "stddev: 0.000015882093766897646",
            "extra": "mean: 1.7640513888890823 msec\nrounds: 576"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1182.60096402131,
            "unit": "iter/sec",
            "range": "stddev: 0.0000488527199698522",
            "extra": "mean: 845.5937635968141 usec\nrounds: 1379"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1055.9908990929325,
            "unit": "iter/sec",
            "range": "stddev: 0.00001951968986914693",
            "extra": "mean: 946.9778582930711 usec\nrounds: 1242"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "95c5ca1918d97c251000ab9f6124dd36c337e210",
          "message": "Merge pull request #822 from TeoZosa/test/reproduce-previous-error-in-test-which-infers-git-repo-root-with-bad-ownership\n\n✅ Validate previous method to infer git repo root directory throws the expected error",
          "timestamp": "2023-02-13T13:13:30+09:00",
          "tree_id": "140290f18c8d1e37afcefde55ebc11f2f5298f19",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/95c5ca1918d97c251000ab9f6124dd36c337e210"
        },
        "date": 1676261814872,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 210.69840706283972,
            "unit": "iter/sec",
            "range": "stddev: 0.00032393093889656726",
            "extra": "mean: 4.746120361990943 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 281.12379998839214,
            "unit": "iter/sec",
            "range": "stddev: 0.00021421868708265045",
            "extra": "mean: 3.5571516891892148 msec\nrounds: 296"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 404.5837393443793,
            "unit": "iter/sec",
            "range": "stddev: 0.0004062751364488689",
            "extra": "mean: 2.4716762013730014 msec\nrounds: 437"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 776.1869892602004,
            "unit": "iter/sec",
            "range": "stddev: 0.000325912239542358",
            "extra": "mean: 1.2883493460166349 msec\nrounds: 841"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 193.44140702452262,
            "unit": "iter/sec",
            "range": "stddev: 0.00031865670219487",
            "extra": "mean: 5.169524019607808 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 249.19787075522,
            "unit": "iter/sec",
            "range": "stddev: 0.00035925265482637504",
            "extra": "mean: 4.012875378787934 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 392.5170622554741,
            "unit": "iter/sec",
            "range": "stddev: 0.0002658380206518742",
            "extra": "mean: 2.547659952038311 msec\nrounds: 417"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 724.2845607053395,
            "unit": "iter/sec",
            "range": "stddev: 0.00020107805800625853",
            "extra": "mean: 1.3806728104574768 msec\nrounds: 765"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 15.383622845103055,
            "unit": "iter/sec",
            "range": "stddev: 0.0027765364062618926",
            "extra": "mean: 65.00419374999966 msec\nrounds: 16"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 15.671497390372936,
            "unit": "iter/sec",
            "range": "stddev: 0.004093758735697158",
            "extra": "mean: 63.810111764706285 msec\nrounds: 17"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 278.8948558163892,
            "unit": "iter/sec",
            "range": "stddev: 0.00041218646814972134",
            "extra": "mean: 3.585580655737699 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 464.0325805463199,
            "unit": "iter/sec",
            "range": "stddev: 0.0003326911433003844",
            "extra": "mean: 2.1550210953348774 msec\nrounds: 493"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 913.9030747126722,
            "unit": "iter/sec",
            "range": "stddev: 0.00029402585110892374",
            "extra": "mean: 1.094207939189171 msec\nrounds: 1184"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 876.3688998732424,
            "unit": "iter/sec",
            "range": "stddev: 0.00020012883964047392",
            "extra": "mean: 1.1410719848053024 msec\nrounds: 1053"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "4b88375791c3c73d62a1875c3feb84a8ede25f53",
          "message": ":bookmark: Bump version number to `0.20.1`",
          "timestamp": "2023-02-13T14:16:27+09:00",
          "tree_id": "c222d2ff61556b747c49437af1f78e862accfbda",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/4b88375791c3c73d62a1875c3feb84a8ede25f53"
        },
        "date": 1676265617401,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 244.54697376090158,
            "unit": "iter/sec",
            "range": "stddev: 0.00003316688039054647",
            "extra": "mean: 4.089193927125509 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 328.5547094100352,
            "unit": "iter/sec",
            "range": "stddev: 0.000014413845037637024",
            "extra": "mean: 3.043633134328333 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 492.19452474526685,
            "unit": "iter/sec",
            "range": "stddev: 0.00001128952896616459",
            "extra": "mean: 2.031717034068077 msec\nrounds: 499"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 955.5178013751433,
            "unit": "iter/sec",
            "range": "stddev: 0.000010613963652905712",
            "extra": "mean: 1.0465529774127074 msec\nrounds: 974"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 215.66848258909562,
            "unit": "iter/sec",
            "range": "stddev: 0.0007995313718238637",
            "extra": "mean: 4.636746120689593 msec\nrounds: 232"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 298.52754235729253,
            "unit": "iter/sec",
            "range": "stddev: 0.00002006542557537575",
            "extra": "mean: 3.3497746710524634 msec\nrounds: 304"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 471.56716369320515,
            "unit": "iter/sec",
            "range": "stddev: 0.000013354503554595199",
            "extra": "mean: 2.1205887029288277 msec\nrounds: 478"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 875.4837764260036,
            "unit": "iter/sec",
            "range": "stddev: 0.000007430502747634587",
            "extra": "mean: 1.1422256207674233 msec\nrounds: 886"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.279758300046083,
            "unit": "iter/sec",
            "range": "stddev: 0.00015993039304350846",
            "extra": "mean: 49.31025238095307 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.240121895128617,
            "unit": "iter/sec",
            "range": "stddev: 0.00017268152880303597",
            "extra": "mean: 47.08070909090913 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 351.37155475022064,
            "unit": "iter/sec",
            "range": "stddev: 0.00004089558902092762",
            "extra": "mean: 2.8459901960785348 msec\nrounds: 357"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 586.5739671238704,
            "unit": "iter/sec",
            "range": "stddev: 0.00001648885382526214",
            "extra": "mean: 1.7048148333334132 msec\nrounds: 600"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1214.6075285233292,
            "unit": "iter/sec",
            "range": "stddev: 0.00004183443940328812",
            "extra": "mean: 823.3112149533271 usec\nrounds: 1391"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1101.2525882984378,
            "unit": "iter/sec",
            "range": "stddev: 0.000014417449206103454",
            "extra": "mean: 908.0568896052406 usec\nrounds: 1241"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ac53cad7dad459349c8ce97802077bca85a99454",
          "message": "Merge pull request #824 from TeoZosa/dependabot/pip/pytest-forked-1.6.0",
          "timestamp": "2023-02-13T16:45:44Z",
          "tree_id": "9236930651daf64db26e4f6dc748617be62f5989",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/ac53cad7dad459349c8ce97802077bca85a99454"
        },
        "date": 1676306920651,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 245.32643292805167,
            "unit": "iter/sec",
            "range": "stddev: 0.00008171610275226866",
            "extra": "mean: 4.076201606425655 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 329.5074721181087,
            "unit": "iter/sec",
            "range": "stddev: 0.000015877999449082713",
            "extra": "mean: 3.03483254437872 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 487.6140610557785,
            "unit": "iter/sec",
            "range": "stddev: 0.00001302637837288089",
            "extra": "mean: 2.0508022222222366 msec\nrounds: 495"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 952.65043129482,
            "unit": "iter/sec",
            "range": "stddev: 0.000009020536207954704",
            "extra": "mean: 1.0497029835391178 msec\nrounds: 972"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 230.63078406482964,
            "unit": "iter/sec",
            "range": "stddev: 0.000016594917471882806",
            "extra": "mean: 4.335934615384661 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 301.3185779490547,
            "unit": "iter/sec",
            "range": "stddev: 0.000014959287222833428",
            "extra": "mean: 3.318746579804563 msec\nrounds: 307"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 464.52539854257503,
            "unit": "iter/sec",
            "range": "stddev: 0.000010948089210590683",
            "extra": "mean: 2.152734819532903 msec\nrounds: 471"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 873.650675979851,
            "unit": "iter/sec",
            "range": "stddev: 0.000009054298117687529",
            "extra": "mean: 1.1446222471910077 msec\nrounds: 890"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.151090960872978,
            "unit": "iter/sec",
            "range": "stddev: 0.00018721725207913965",
            "extra": "mean: 49.62510476190508 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.051247156076872,
            "unit": "iter/sec",
            "range": "stddev: 0.00009466798246844812",
            "extra": "mean: 47.50312380952354 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 347.6461108346998,
            "unit": "iter/sec",
            "range": "stddev: 0.000018132296523596217",
            "extra": "mean: 2.8764883852691336 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 583.6626917010551,
            "unit": "iter/sec",
            "range": "stddev: 0.00001121739870456166",
            "extra": "mean: 1.71331835016823 msec\nrounds: 594"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1211.3081247438527,
            "unit": "iter/sec",
            "range": "stddev: 0.00004188869650401763",
            "extra": "mean: 825.5537790696017 usec\nrounds: 1376"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1099.6697019374922,
            "unit": "iter/sec",
            "range": "stddev: 0.000012629358669989842",
            "extra": "mean: 909.363964686955 usec\nrounds: 1246"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b6b30188b0e0c5bea9fc46acab433d066968892c",
          "message": "Merge pull request #825 from TeoZosa/dependabot/pip/gitpython-3.1.31",
          "timestamp": "2023-02-17T16:07:34Z",
          "tree_id": "85e9b1980ecc13057d9e89de32a2e4d0dd709c88",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/b6b30188b0e0c5bea9fc46acab433d066968892c"
        },
        "date": 1676650212353,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 245.06853914841386,
            "unit": "iter/sec",
            "range": "stddev: 0.000013343154014151099",
            "extra": "mean: 4.080491129032269 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 330.1527958930579,
            "unit": "iter/sec",
            "range": "stddev: 0.000013615910346744962",
            "extra": "mean: 3.028900595238082 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 489.2623646296205,
            "unit": "iter/sec",
            "range": "stddev: 0.000011341820338425514",
            "extra": "mean: 2.043893158953716 msec\nrounds: 497"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 953.0723915977267,
            "unit": "iter/sec",
            "range": "stddev: 0.00000824393265153711",
            "extra": "mean: 1.0492382413088308 msec\nrounds: 978"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 230.54684021146062,
            "unit": "iter/sec",
            "range": "stddev: 0.000013293794499579251",
            "extra": "mean: 4.3375133620690125 msec\nrounds: 232"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 299.9760314233299,
            "unit": "iter/sec",
            "range": "stddev: 0.000013779985243674886",
            "extra": "mean: 3.3335996721310965 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 472.13685804600067,
            "unit": "iter/sec",
            "range": "stddev: 0.000010635846316577934",
            "extra": "mean: 2.1180299376300105 msec\nrounds: 481"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 875.6513270290076,
            "unit": "iter/sec",
            "range": "stddev: 0.00000859896931575219",
            "extra": "mean: 1.1420070627802212 msec\nrounds: 892"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.30501026128204,
            "unit": "iter/sec",
            "range": "stddev: 0.00029761087705776606",
            "extra": "mean: 49.24892857142841 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.187428227586906,
            "unit": "iter/sec",
            "range": "stddev: 0.00010350973729365466",
            "extra": "mean: 47.19779999999994 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 349.77819628546365,
            "unit": "iter/sec",
            "range": "stddev: 0.000015699946006322458",
            "extra": "mean: 2.858954647887407 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 584.9482763917891,
            "unit": "iter/sec",
            "range": "stddev: 0.000010873175072111143",
            "extra": "mean: 1.7095528619529017 msec\nrounds: 594"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1209.2858431010632,
            "unit": "iter/sec",
            "range": "stddev: 0.000041041934831698565",
            "extra": "mean: 826.9343478260065 usec\nrounds: 1380"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1104.2905220512744,
            "unit": "iter/sec",
            "range": "stddev: 0.000013306702567901862",
            "extra": "mean: 905.5587999998863 usec\nrounds: 1250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4753a4818c36756ea82610a1c4214538c98de2fa",
          "message": "Merge pull request #827 from TeoZosa/dependabot/pip/mypy-1.0.1",
          "timestamp": "2023-02-20T16:10:00Z",
          "tree_id": "0c7f5f11dd69a5b8f17ef1f9bef9dc11a383cc90",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/4753a4818c36756ea82610a1c4214538c98de2fa"
        },
        "date": 1676909597847,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 175.43340738544174,
            "unit": "iter/sec",
            "range": "stddev: 0.000663349444606433",
            "extra": "mean: 5.700168599033804 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 227.51902852658523,
            "unit": "iter/sec",
            "range": "stddev: 0.0006293344764896647",
            "extra": "mean: 4.395236769759465 msec\nrounds: 291"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 309.4894470925537,
            "unit": "iter/sec",
            "range": "stddev: 0.0005346795381393124",
            "extra": "mean: 3.2311279411764473 msec\nrounds: 408"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 638.7042460750596,
            "unit": "iter/sec",
            "range": "stddev: 0.0003044990646460723",
            "extra": "mean: 1.5656698795180413 msec\nrounds: 830"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 154.8489937661907,
            "unit": "iter/sec",
            "range": "stddev: 0.000631947303978089",
            "extra": "mean: 6.457904411764653 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 206.53911190189015,
            "unit": "iter/sec",
            "range": "stddev: 0.00046969188892748994",
            "extra": "mean: 4.8416979757084375 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 298.3395479386003,
            "unit": "iter/sec",
            "range": "stddev: 0.0003492118060762189",
            "extra": "mean: 3.3518854838708974 msec\nrounds: 372"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 580.1721036876534,
            "unit": "iter/sec",
            "range": "stddev: 0.00032552976090270236",
            "extra": "mean: 1.7236264784946798 msec\nrounds: 744"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.775462832138505,
            "unit": "iter/sec",
            "range": "stddev: 0.005189685746748121",
            "extra": "mean: 67.67977500000022 msec\nrounds: 16"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 15.011851415167321,
            "unit": "iter/sec",
            "range": "stddev: 0.003588577012539144",
            "extra": "mean: 66.61403529411724 msec\nrounds: 17"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 208.59967536571043,
            "unit": "iter/sec",
            "range": "stddev: 0.0005920281074862881",
            "extra": "mean: 4.793871314741172 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 346.4584655088154,
            "unit": "iter/sec",
            "range": "stddev: 0.000668927963142845",
            "extra": "mean: 2.8863488687781995 msec\nrounds: 442"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 670.135656117106,
            "unit": "iter/sec",
            "range": "stddev: 0.0002902978467191286",
            "extra": "mean: 1.4922351778656147 msec\nrounds: 1012"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 633.2808460111894,
            "unit": "iter/sec",
            "range": "stddev: 0.000264655056458578",
            "extra": "mean: 1.5790782340862572 msec\nrounds: 974"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "45d053718c2c90b01d082dbeddde9e85ce480461",
          "message": "Merge pull request #828 from TeoZosa/dependabot/github_actions/release-drafter/release-drafter-5.23.0",
          "timestamp": "2023-02-21T16:38:05Z",
          "tree_id": "8871c1becb96707ca71c7dc0345d6c59957fe205",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/45d053718c2c90b01d082dbeddde9e85ce480461"
        },
        "date": 1676997672315,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 218.97794641553767,
            "unit": "iter/sec",
            "range": "stddev: 0.0000325531915876806",
            "extra": "mean: 4.566669915254282 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 287.7184175562756,
            "unit": "iter/sec",
            "range": "stddev: 0.0000469462171580592",
            "extra": "mean: 3.475620394736835 msec\nrounds: 304"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 420.5797472109497,
            "unit": "iter/sec",
            "range": "stddev: 0.000044879568620564644",
            "extra": "mean: 2.3776703624733297 msec\nrounds: 469"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 793.5704309515587,
            "unit": "iter/sec",
            "range": "stddev: 0.00002288561598672076",
            "extra": "mean: 1.2601275967413688 msec\nrounds: 982"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 203.03317970165827,
            "unit": "iter/sec",
            "range": "stddev: 0.00007206605569171736",
            "extra": "mean: 4.925303349282238 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 264.71768108107335,
            "unit": "iter/sec",
            "range": "stddev: 0.00006126270023120524",
            "extra": "mean: 3.777609398496266 msec\nrounds: 266"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 408.0937855422313,
            "unit": "iter/sec",
            "range": "stddev: 0.00003803867421290754",
            "extra": "mean: 2.4504171232877443 msec\nrounds: 438"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 728.3509128817334,
            "unit": "iter/sec",
            "range": "stddev: 0.00002641009719603019",
            "extra": "mean: 1.372964572864311 msec\nrounds: 796"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 15.894899743913475,
            "unit": "iter/sec",
            "range": "stddev: 0.0003529165451395446",
            "extra": "mean: 62.91326249999929 msec\nrounds: 16"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 16.517934006772883,
            "unit": "iter/sec",
            "range": "stddev: 0.0003363532333331225",
            "extra": "mean: 60.540258823528895 msec\nrounds: 17"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 297.59203405644445,
            "unit": "iter/sec",
            "range": "stddev: 0.00006996300123853942",
            "extra": "mean: 3.3603049999998635 msec\nrounds: 320"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 472.58318973299595,
            "unit": "iter/sec",
            "range": "stddev: 0.000032068501893425954",
            "extra": "mean: 2.116029562043856 msec\nrounds: 548"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1003.2243518396249,
            "unit": "iter/sec",
            "range": "stddev: 0.00005051704255163179",
            "extra": "mean: 996.7860111911035 usec\nrounds: 1251"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 890.6930132129387,
            "unit": "iter/sec",
            "range": "stddev: 0.000029965600011521772",
            "extra": "mean: 1.1227212801330564 msec\nrounds: 1203"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bb3a6b22faba4709776404069d0634fb9dbaf89b",
          "message": "Merge pull request #830 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.4.6",
          "timestamp": "2023-02-22T15:15:39Z",
          "tree_id": "9dad8124aaf595607b4e624dc603aad5319936e9",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/bb3a6b22faba4709776404069d0634fb9dbaf89b"
        },
        "date": 1677079098679,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 247.56342357924413,
            "unit": "iter/sec",
            "range": "stddev: 0.00003111457006673399",
            "extra": "mean: 4.03936892430276 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 334.1475066650118,
            "unit": "iter/sec",
            "range": "stddev: 0.00001528714905291555",
            "extra": "mean: 2.992690294117669 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 490.0987794090096,
            "unit": "iter/sec",
            "range": "stddev: 0.000037089942068045504",
            "extra": "mean: 2.040404999999918 msec\nrounds: 500"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 947.1256794597215,
            "unit": "iter/sec",
            "range": "stddev: 0.000009815605773105379",
            "extra": "mean: 1.0558260869565275 msec\nrounds: 966"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 233.4099893936944,
            "unit": "iter/sec",
            "range": "stddev: 0.000023677874504989464",
            "extra": "mean: 4.28430677966097 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 307.0575460176838,
            "unit": "iter/sec",
            "range": "stddev: 0.000015161672803303314",
            "extra": "mean: 3.256718530351339 msec\nrounds: 313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 471.7277508431838,
            "unit": "iter/sec",
            "range": "stddev: 0.00001132320386174954",
            "extra": "mean: 2.119866804979276 msec\nrounds: 482"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 859.3872539414887,
            "unit": "iter/sec",
            "range": "stddev: 0.000010382000571756484",
            "extra": "mean: 1.163619771428545 msec\nrounds: 875"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.219845566596955,
            "unit": "iter/sec",
            "range": "stddev: 0.00011643761624218504",
            "extra": "mean: 49.45636190476118 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.07448777704814,
            "unit": "iter/sec",
            "range": "stddev: 0.00007983155689523471",
            "extra": "mean: 47.450738095237725 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 346.4996281792618,
            "unit": "iter/sec",
            "range": "stddev: 0.000012432277969880367",
            "extra": "mean: 2.8860059829058446 msec\nrounds: 351"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 584.0121615870755,
            "unit": "iter/sec",
            "range": "stddev: 0.000009898682168046496",
            "extra": "mean: 1.7122931092435842 msec\nrounds: 595"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1182.0235566358879,
            "unit": "iter/sec",
            "range": "stddev: 0.00006500692082355039",
            "extra": "mean: 846.0068281938999 usec\nrounds: 1362"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1089.296861502536,
            "unit": "iter/sec",
            "range": "stddev: 0.000013097538943436793",
            "extra": "mean: 918.0233922831987 usec\nrounds: 1244"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9f43ef5c41d0895668b8bbf50b4f3ff68a95211e",
          "message": "Merge pull request #831 from TeoZosa/dependabot/pip/markdown-it-py-2.2.0",
          "timestamp": "2023-02-23T20:49:01Z",
          "tree_id": "ca521ec9cf81ecfae165a5dc2ea69ecbb494d56e",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/9f43ef5c41d0895668b8bbf50b4f3ff68a95211e"
        },
        "date": 1677185505824,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 256.8259649470076,
            "unit": "iter/sec",
            "range": "stddev: 0.00002268415228575525",
            "extra": "mean: 3.8936873076923355 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 340.7786911281448,
            "unit": "iter/sec",
            "range": "stddev: 0.000012996136933166004",
            "extra": "mean: 2.9344557803467963 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 494.81691577370196,
            "unit": "iter/sec",
            "range": "stddev: 0.00001089217868591824",
            "extra": "mean: 2.020949502982103 msec\nrounds: 503"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 963.1899437078898,
            "unit": "iter/sec",
            "range": "stddev: 0.000008725342661936249",
            "extra": "mean: 1.0382168195718555 msec\nrounds: 981"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 238.95995110542043,
            "unit": "iter/sec",
            "range": "stddev: 0.00001083185874646542",
            "extra": "mean: 4.184801659751079 msec\nrounds: 241"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 307.5367973711244,
            "unit": "iter/sec",
            "range": "stddev: 0.000011864229783048975",
            "extra": "mean: 3.2516434083601244 msec\nrounds: 311"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 474.23851757372194,
            "unit": "iter/sec",
            "range": "stddev: 0.00001113905166800737",
            "extra": "mean: 2.1086435684645686 msec\nrounds: 482"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 872.8979679921902,
            "unit": "iter/sec",
            "range": "stddev: 0.00000872299219223591",
            "extra": "mean: 1.1456092655366876 msec\nrounds: 885"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.86042905292264,
            "unit": "iter/sec",
            "range": "stddev: 0.0000623318111271017",
            "extra": "mean: 53.02106315789451 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.45343057843911,
            "unit": "iter/sec",
            "range": "stddev: 0.00007984203664504961",
            "extra": "mean: 51.404814999999715 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 348.07374403389775,
            "unit": "iter/sec",
            "range": "stddev: 0.000011052923420888092",
            "extra": "mean: 2.8729544159544917 msec\nrounds: 351"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 554.1631357666172,
            "unit": "iter/sec",
            "range": "stddev: 0.000010807182901318497",
            "extra": "mean: 1.804522775800707 msec\nrounds: 562"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1150.5943077071674,
            "unit": "iter/sec",
            "range": "stddev: 0.00004932530854669653",
            "extra": "mean: 869.1160674979677 usec\nrounds: 1363"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1042.4020245304118,
            "unit": "iter/sec",
            "range": "stddev: 0.000016492405766395585",
            "extra": "mean: 959.3227722773146 usec\nrounds: 1212"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b7a8434b0b978bd2f41e7f345da544560088f42e",
          "message": "Merge pull request #829 from TeoZosa/dependabot/pip/types-emoji-2.1.0.2\n\n⬆️ Bump types-emoji from 2.1.0.1 to 2.1.0.2",
          "timestamp": "2023-02-25T19:49:25+09:00",
          "tree_id": "42c392e3e52bab420ad3506c3413257925b09f45",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/b7a8434b0b978bd2f41e7f345da544560088f42e"
        },
        "date": 1677322324108,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 254.6221318741312,
            "unit": "iter/sec",
            "range": "stddev: 0.00010806141943408365",
            "extra": "mean: 3.9273883720930263 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 342.19000617815266,
            "unit": "iter/sec",
            "range": "stddev: 0.000010634745693327753",
            "extra": "mean: 2.9223530259366344 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 499.9340816699019,
            "unit": "iter/sec",
            "range": "stddev: 0.000011241000988307233",
            "extra": "mean: 2.000263708086786 msec\nrounds: 507"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 938.8083536660052,
            "unit": "iter/sec",
            "range": "stddev: 0.000007883351294222314",
            "extra": "mean: 1.0651801255230036 msec\nrounds: 956"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 237.8962656282859,
            "unit": "iter/sec",
            "range": "stddev: 0.00011147728887456773",
            "extra": "mean: 4.203512809917348 msec\nrounds: 242"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 310.0963826960769,
            "unit": "iter/sec",
            "range": "stddev: 0.000010190692272425659",
            "extra": "mean: 3.224803821655967 msec\nrounds: 314"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 478.9875740176257,
            "unit": "iter/sec",
            "range": "stddev: 0.000009227651265416128",
            "extra": "mean: 2.087736831275715 msec\nrounds: 486"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 861.413711971609,
            "unit": "iter/sec",
            "range": "stddev: 0.000006451311049712544",
            "extra": "mean: 1.160882379862742 msec\nrounds: 874"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.677143167773092,
            "unit": "iter/sec",
            "range": "stddev: 0.0001641723504219584",
            "extra": "mean: 53.54137894736884 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.465854992422837,
            "unit": "iter/sec",
            "range": "stddev: 0.00004796131637563231",
            "extra": "mean: 51.37200499999892 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 353.6266843328178,
            "unit": "iter/sec",
            "range": "stddev: 0.000010162140980570537",
            "extra": "mean: 2.827840896358501 msec\nrounds: 357"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 562.8105420318213,
            "unit": "iter/sec",
            "range": "stddev: 0.000009833138005776133",
            "extra": "mean: 1.7767968531468268 msec\nrounds: 572"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1178.6121969303792,
            "unit": "iter/sec",
            "range": "stddev: 0.00004490044610294569",
            "extra": "mean: 848.4554992765532 usec\nrounds: 1382"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1065.4102462492572,
            "unit": "iter/sec",
            "range": "stddev: 0.00001609564333075145",
            "extra": "mean: 938.6055780113511 usec\nrounds: 1237"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3c26dcab945e3c3e813a775e211a2c917b4d5342",
          "message": "Merge pull request #826 from TeoZosa/dependabot/pip/dot-github/workflows/pip-23.0.1\n\n⬆️ Bump pip from 23.0 to 23.0.1 in /.github/workflows",
          "timestamp": "2023-02-25T19:49:50+09:00",
          "tree_id": "1a6ba58a62bef073dc76b16a6b5f7a1faaa5b25d",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/3c26dcab945e3c3e813a775e211a2c917b4d5342"
        },
        "date": 1677322857409,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 164.2652670428141,
            "unit": "iter/sec",
            "range": "stddev: 0.0008235347499725684",
            "extra": "mean: 6.08771420765024 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 206.71023922420454,
            "unit": "iter/sec",
            "range": "stddev: 0.0006306522499524747",
            "extra": "mean: 4.837689723320227 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 296.7100669763938,
            "unit": "iter/sec",
            "range": "stddev: 0.00034678899310764316",
            "extra": "mean: 3.3702934659091284 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 585.5223391558413,
            "unit": "iter/sec",
            "range": "stddev: 0.00030204039272598265",
            "extra": "mean: 1.7078767676767364 msec\nrounds: 693"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 153.17155032928707,
            "unit": "iter/sec",
            "range": "stddev: 0.0005082686155065537",
            "extra": "mean: 6.528627528089958 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 199.98812351230995,
            "unit": "iter/sec",
            "range": "stddev: 0.0002844948963086725",
            "extra": "mean: 5.0002969298246684 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 291.48846775034656,
            "unit": "iter/sec",
            "range": "stddev: 0.0004419330439303261",
            "extra": "mean: 3.4306674556211876 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 577.043203026221,
            "unit": "iter/sec",
            "range": "stddev: 0.00021162791574236165",
            "extra": "mean: 1.732972496263091 msec\nrounds: 669"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.183006524360207,
            "unit": "iter/sec",
            "range": "stddev: 0.0025743929225821092",
            "extra": "mean: 70.50691250000041 msec\nrounds: 16"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 15.33464655412735,
            "unit": "iter/sec",
            "range": "stddev: 0.0016917907350763426",
            "extra": "mean: 65.21180625000112 msec\nrounds: 16"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.1205649811699,
            "unit": "iter/sec",
            "range": "stddev: 0.0008739650420923741",
            "extra": "mean: 4.923184415584429 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 324.2829848059618,
            "unit": "iter/sec",
            "range": "stddev: 0.00038609864698640925",
            "extra": "mean: 3.0837263959389074 msec\nrounds: 394"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 690.8723662859101,
            "unit": "iter/sec",
            "range": "stddev: 0.00016841422067318784",
            "extra": "mean: 1.4474453586498794 msec\nrounds: 948"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 627.3376605226237,
            "unit": "iter/sec",
            "range": "stddev: 0.00015547950867351608",
            "extra": "mean: 1.5940378888889246 msec\nrounds: 900"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9cc99ab25988a00637c61d820ba8a724fb867f4d",
          "message": "Merge pull request #832 from TeoZosa/dependabot/pip/sentry-sdk-1.16.0",
          "timestamp": "2023-02-27T15:58:16Z",
          "tree_id": "4e73bbd5591dadc401a016780363b0feff44834d",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/9cc99ab25988a00637c61d820ba8a724fb867f4d"
        },
        "date": 1677513680166,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 162.97497652746088,
            "unit": "iter/sec",
            "range": "stddev: 0.0004999261430530948",
            "extra": "mean: 6.135911299434993 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 218.604505667528,
            "unit": "iter/sec",
            "range": "stddev: 0.00037543947095084037",
            "extra": "mean: 4.574471129707105 msec\nrounds: 239"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 303.3337735886085,
            "unit": "iter/sec",
            "range": "stddev: 0.0002790951456513094",
            "extra": "mean: 3.2966985119046908 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 624.98482826683,
            "unit": "iter/sec",
            "range": "stddev: 0.00018036015967362457",
            "extra": "mean: 1.6000388405797612 msec\nrounds: 690"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 153.73020894118616,
            "unit": "iter/sec",
            "range": "stddev: 0.0004913269012816564",
            "extra": "mean: 6.504902366863876 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 199.14725146920446,
            "unit": "iter/sec",
            "range": "stddev: 0.0003075941526274136",
            "extra": "mean: 5.0214100000001105 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 300.07204456997,
            "unit": "iter/sec",
            "range": "stddev: 0.0002534384014175133",
            "extra": "mean: 3.33253303030307 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 597.4099400017158,
            "unit": "iter/sec",
            "range": "stddev: 0.00019664172067044205",
            "extra": "mean: 1.67389246987944 msec\nrounds: 664"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.868728457070972,
            "unit": "iter/sec",
            "range": "stddev: 0.0015208941053900566",
            "extra": "mean: 67.25524666666706 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.635061032777836,
            "unit": "iter/sec",
            "range": "stddev: 0.0038481798339603667",
            "extra": "mean: 68.32906250000059 msec\nrounds: 16"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.85191547881166,
            "unit": "iter/sec",
            "range": "stddev: 0.0005092238125400382",
            "extra": "mean: 4.857861038960942 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 357.3894326442937,
            "unit": "iter/sec",
            "range": "stddev: 0.00023461191828282258",
            "extra": "mean: 2.7980681818180404 msec\nrounds: 396"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 717.0147837006505,
            "unit": "iter/sec",
            "range": "stddev: 0.0003468668050834092",
            "extra": "mean: 1.3946713829787563 msec\nrounds: 940"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 631.215372774863,
            "unit": "iter/sec",
            "range": "stddev: 0.0004370091027111729",
            "extra": "mean: 1.5842453196346222 msec\nrounds: 876"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "460635008347f97b6604ec7ab9888a24da0996be",
          "message": "Merge pull request #833 from TeoZosa/dependabot/pip/dot-github/workflows/poetry-1.4.0",
          "timestamp": "2023-02-28T18:33:50Z",
          "tree_id": "a97cf792360f9820cf5765666453582cc1f229e8",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/460635008347f97b6604ec7ab9888a24da0996be"
        },
        "date": 1677609389034,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 246.90612363582986,
            "unit": "iter/sec",
            "range": "stddev: 0.000036399249171368226",
            "extra": "mean: 4.050122310756997 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 334.7103901172289,
            "unit": "iter/sec",
            "range": "stddev: 0.00001594913361383994",
            "extra": "mean: 2.9876574780058673 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 487.7349383378427,
            "unit": "iter/sec",
            "range": "stddev: 0.000015635733854452373",
            "extra": "mean: 2.050293963782687 msec\nrounds: 497"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 945.774552307376,
            "unit": "iter/sec",
            "range": "stddev: 0.000010779096746237086",
            "extra": "mean: 1.0573344329896928 msec\nrounds: 970"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 233.010487634907,
            "unit": "iter/sec",
            "range": "stddev: 0.000021051654714151606",
            "extra": "mean: 4.291652320675163 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 307.0040010886804,
            "unit": "iter/sec",
            "range": "stddev: 0.000015597796804342182",
            "extra": "mean: 3.25728653846157 msec\nrounds: 312"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 470.1899567425271,
            "unit": "iter/sec",
            "range": "stddev: 0.000026818700151525146",
            "extra": "mean: 2.126799999999986 msec\nrounds: 479"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 869.0472348750835,
            "unit": "iter/sec",
            "range": "stddev: 0.000010125001900180898",
            "extra": "mean: 1.150685440180636 msec\nrounds: 886"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.0497956725324,
            "unit": "iter/sec",
            "range": "stddev: 0.0004688073609539655",
            "extra": "mean: 49.87581999999975 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.994211895780268,
            "unit": "iter/sec",
            "range": "stddev: 0.0001553497663502118",
            "extra": "mean: 47.63217619047634 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 347.0914569320958,
            "unit": "iter/sec",
            "range": "stddev: 0.000014036717396286652",
            "extra": "mean: 2.881085028248441 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 586.4811405259519,
            "unit": "iter/sec",
            "range": "stddev: 0.000010805311478683724",
            "extra": "mean: 1.7050846666667023 msec\nrounds: 600"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1189.3559821277192,
            "unit": "iter/sec",
            "range": "stddev: 0.000042604981475666636",
            "extra": "mean: 840.7911634757428 usec\nrounds: 1358"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1081.2245660524172,
            "unit": "iter/sec",
            "range": "stddev: 0.00001309521021213991",
            "extra": "mean: 924.8772469636252 usec\nrounds: 1235"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d608e0f1c16863af724cfc002214287d01536f4d",
          "message": "Merge pull request #835 from TeoZosa/dependabot/pip/docs/orjson-3.8.7",
          "timestamp": "2023-02-28T18:51:39Z",
          "tree_id": "476175aa31a11df3701478316a5163c9baac7c4e",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/d608e0f1c16863af724cfc002214287d01536f4d"
        },
        "date": 1677611080699,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 157.78908965230139,
            "unit": "iter/sec",
            "range": "stddev: 0.0005953730320735717",
            "extra": "mean: 6.337573796791435 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 204.61572661318175,
            "unit": "iter/sec",
            "range": "stddev: 0.0007227077238530902",
            "extra": "mean: 4.887209876543174 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 280.58777493388783,
            "unit": "iter/sec",
            "range": "stddev: 0.00045858441185949757",
            "extra": "mean: 3.5639471471471635 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 579.3354183373673,
            "unit": "iter/sec",
            "range": "stddev: 0.00022630520805005185",
            "extra": "mean: 1.7261157670454477 msec\nrounds: 704"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 145.78894144116924,
            "unit": "iter/sec",
            "range": "stddev: 0.0006833385205479258",
            "extra": "mean: 6.859230817609947 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 187.31496261704118,
            "unit": "iter/sec",
            "range": "stddev: 0.0005453786278901084",
            "extra": "mean: 5.338601818181843 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 262.11946379475404,
            "unit": "iter/sec",
            "range": "stddev: 0.00035973418240477326",
            "extra": "mean: 3.815054347826014 msec\nrounds: 322"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 530.1048885980464,
            "unit": "iter/sec",
            "range": "stddev: 0.00046735972865118565",
            "extra": "mean: 1.8864191247974946 msec\nrounds: 617"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.989248795991816,
            "unit": "iter/sec",
            "range": "stddev: 0.0020381341613161024",
            "extra": "mean: 71.48346666666754 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.550720318858444,
            "unit": "iter/sec",
            "range": "stddev: 0.0031231711034963327",
            "extra": "mean: 68.72512000000104 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.69957578933085,
            "unit": "iter/sec",
            "range": "stddev: 0.00047889971081240744",
            "extra": "mean: 5.032723376622805 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 334.8096485779159,
            "unit": "iter/sec",
            "range": "stddev: 0.0003134913684971169",
            "extra": "mean: 2.986771750000159 msec\nrounds: 400"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 657.4588451149052,
            "unit": "iter/sec",
            "range": "stddev: 0.00021856491494807046",
            "extra": "mean: 1.5210077519380367 msec\nrounds: 903"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 604.4737099271354,
            "unit": "iter/sec",
            "range": "stddev: 0.00023677122123229845",
            "extra": "mean: 1.6543316666667642 msec\nrounds: 780"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2b4147a6d9dcc47e19e2dfd021dfa5b516485ded",
          "message": "Merge pull request #837 from TeoZosa/dependabot/pip/poetry-1.4.0",
          "timestamp": "2023-03-01T02:44:24Z",
          "tree_id": "cfd96dee526eb38c9260c6c59911e84ce59d3964",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/2b4147a6d9dcc47e19e2dfd021dfa5b516485ded"
        },
        "date": 1677638858432,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 151.612801120977,
            "unit": "iter/sec",
            "range": "stddev: 0.0007147801746294423",
            "extra": "mean: 6.5957491228070255 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 207.23382383216818,
            "unit": "iter/sec",
            "range": "stddev: 0.0004535931631270478",
            "extra": "mean: 4.825467105263024 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 279.12488281306145,
            "unit": "iter/sec",
            "range": "stddev: 0.000535304679237767",
            "extra": "mean: 3.5826257763974803 msec\nrounds: 322"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 581.73557223175,
            "unit": "iter/sec",
            "range": "stddev: 0.0002764294687887245",
            "extra": "mean: 1.7189940717629402 msec\nrounds: 641"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 144.46287431330177,
            "unit": "iter/sec",
            "range": "stddev: 0.0007305960065389154",
            "extra": "mean: 6.922193710691818 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 188.99490102873884,
            "unit": "iter/sec",
            "range": "stddev: 0.0005657425404848111",
            "extra": "mean: 5.291148039215823 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 269.99519270540736,
            "unit": "iter/sec",
            "range": "stddev: 0.0007916929186503964",
            "extra": "mean: 3.7037696485622367 msec\nrounds: 313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 537.7263906523061,
            "unit": "iter/sec",
            "range": "stddev: 0.00028331025570616056",
            "extra": "mean: 1.8596818333333391 msec\nrounds: 600"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.830535554296143,
            "unit": "iter/sec",
            "range": "stddev: 0.0017443766370012967",
            "extra": "mean: 72.30377999999953 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.945187418205498,
            "unit": "iter/sec",
            "range": "stddev: 0.0022251769353296186",
            "extra": "mean: 71.70932666666754 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.9065412040385,
            "unit": "iter/sec",
            "range": "stddev: 0.0004969835167089856",
            "extra": "mean: 4.904207555555331 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 327.33526209796446,
            "unit": "iter/sec",
            "range": "stddev: 0.0004121864732307325",
            "extra": "mean: 3.0549718157181656 msec\nrounds: 369"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 635.7069998268996,
            "unit": "iter/sec",
            "range": "stddev: 0.0002998774985000238",
            "extra": "mean: 1.5730517365268841 msec\nrounds: 835"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 577.7629815288632,
            "unit": "iter/sec",
            "range": "stddev: 0.00034518483474237034",
            "extra": "mean: 1.7308135549872423 msec\nrounds: 782"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d2177a687d938f4f92d4071f9977168ebdab2a83",
          "message": "Merge pull request #834 from TeoZosa/dependabot/pip/docs/poetry-1.4.0",
          "timestamp": "2023-03-01T02:44:44Z",
          "tree_id": "cfd96dee526eb38c9260c6c59911e84ce59d3964",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/d2177a687d938f4f92d4071f9977168ebdab2a83"
        },
        "date": 1677639139547,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 207.8924546801292,
            "unit": "iter/sec",
            "range": "stddev: 0.0004999264223093289",
            "extra": "mean: 4.810179385964902 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 282.32211132061326,
            "unit": "iter/sec",
            "range": "stddev: 0.00024094368232427968",
            "extra": "mean: 3.542053420195525 msec\nrounds: 307"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 402.77092293590755,
            "unit": "iter/sec",
            "range": "stddev: 0.0005931868070225102",
            "extra": "mean: 2.482800875273533 msec\nrounds: 457"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 787.5518958517856,
            "unit": "iter/sec",
            "range": "stddev: 0.00010476871285707793",
            "extra": "mean: 1.2697575934579381 msec\nrounds: 856"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 193.22536006090957,
            "unit": "iter/sec",
            "range": "stddev: 0.000490984647484546",
            "extra": "mean: 5.1753041095887955 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 246.9887949416653,
            "unit": "iter/sec",
            "range": "stddev: 0.0007690223629233207",
            "extra": "mean: 4.048766666666736 msec\nrounds: 279"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 398.67209573494733,
            "unit": "iter/sec",
            "range": "stddev: 0.00015109915560644038",
            "extra": "mean: 2.5083270454545152 msec\nrounds: 440"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 741.1916660895292,
            "unit": "iter/sec",
            "range": "stddev: 0.000019539368761892943",
            "extra": "mean: 1.3491786885245538 msec\nrounds: 793"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 16.011908056021337,
            "unit": "iter/sec",
            "range": "stddev: 0.00027743157287022903",
            "extra": "mean: 62.453518749999716 msec\nrounds: 16"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 16.639221738575806,
            "unit": "iter/sec",
            "range": "stddev: 0.0003131135316080312",
            "extra": "mean: 60.09896470588128 msec\nrounds: 17"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 299.2494877754569,
            "unit": "iter/sec",
            "range": "stddev: 0.000015199445541758131",
            "extra": "mean: 3.3416932721714607 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 481.4065386131559,
            "unit": "iter/sec",
            "range": "stddev: 0.000019026757009169682",
            "extra": "mean: 2.0772464015150627 msec\nrounds: 528"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1008.3197223562171,
            "unit": "iter/sec",
            "range": "stddev: 0.00005008834122499795",
            "extra": "mean: 991.7489243027244 usec\nrounds: 1255"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 909.4330705922705,
            "unit": "iter/sec",
            "range": "stddev: 0.000025730300067043705",
            "extra": "mean: 1.0995861403508755 msec\nrounds: 1140"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "321d48934034cc7ec8c586abab5ba2ff93fa5efc",
          "message": "Merge pull request #836 from TeoZosa/dependabot/pip/orjson-3.8.7",
          "timestamp": "2023-03-01T02:48:46Z",
          "tree_id": "ad9a3accda544343843f870627be4f1734e2491b",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/321d48934034cc7ec8c586abab5ba2ff93fa5efc"
        },
        "date": 1677639603837,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 259.53671112107634,
            "unit": "iter/sec",
            "range": "stddev: 0.000013394856725143177",
            "extra": "mean: 3.8530194656488908 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 345.4512022047302,
            "unit": "iter/sec",
            "range": "stddev: 0.00001847130956918047",
            "extra": "mean: 2.8947648571428455 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 502.5595760865822,
            "unit": "iter/sec",
            "range": "stddev: 0.00003913429431669846",
            "extra": "mean: 1.989813840155973 msec\nrounds: 513"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 961.3894968295975,
            "unit": "iter/sec",
            "range": "stddev: 0.000007909233265446872",
            "extra": "mean: 1.0401611451942523 msec\nrounds: 978"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 239.58738910578842,
            "unit": "iter/sec",
            "range": "stddev: 0.00009091589186865065",
            "extra": "mean: 4.173842386831369 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 312.23932709659704,
            "unit": "iter/sec",
            "range": "stddev: 0.000020000465365343047",
            "extra": "mean: 3.2026715189872017 msec\nrounds: 316"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 478.4113677613875,
            "unit": "iter/sec",
            "range": "stddev: 0.000012457805049361036",
            "extra": "mean: 2.0902513347023146 msec\nrounds: 487"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 882.7331388365604,
            "unit": "iter/sec",
            "range": "stddev: 0.000008513874274075014",
            "extra": "mean: 1.13284520089276 msec\nrounds: 896"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.781802410496066,
            "unit": "iter/sec",
            "range": "stddev: 0.00008558342805645597",
            "extra": "mean: 53.243026315789464 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.56030584102974,
            "unit": "iter/sec",
            "range": "stddev: 0.00014236671134981713",
            "extra": "mean: 51.12394500000086 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 349.01925097512265,
            "unit": "iter/sec",
            "range": "stddev: 0.000013050774871870453",
            "extra": "mean: 2.8651714689264454 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 556.3376557979566,
            "unit": "iter/sec",
            "range": "stddev: 0.000011336812909106636",
            "extra": "mean: 1.7974695575220363 msec\nrounds: 565"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1165.1541014339566,
            "unit": "iter/sec",
            "range": "stddev: 0.00005006007439715503",
            "extra": "mean: 858.2555721765034 usec\nrounds: 1337"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1052.647860504007,
            "unit": "iter/sec",
            "range": "stddev: 0.000016475463423736628",
            "extra": "mean: 949.985306122411 usec\nrounds: 1225"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2aaad2fd1deeb0f30619c224fda8df85cd90294a",
          "message": "Merge pull request #840 from TeoZosa/dependabot/pip/sphinx-rtd-theme-1.2.0",
          "timestamp": "2023-03-03T12:13:36Z",
          "tree_id": "1cf52b16f7a3c4c04cbfa65f841adcb24a567286",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/2aaad2fd1deeb0f30619c224fda8df85cd90294a"
        },
        "date": 1677845780131,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 257.7550962004747,
            "unit": "iter/sec",
            "range": "stddev: 0.00011269283552361713",
            "extra": "mean: 3.8796517110266096 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 344.3002329600434,
            "unit": "iter/sec",
            "range": "stddev: 0.000012008465551562276",
            "extra": "mean: 2.904441833810934 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 503.9050662654896,
            "unit": "iter/sec",
            "range": "stddev: 0.000012732936681987125",
            "extra": "mean: 1.9845007858546428 msec\nrounds: 509"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 959.5872479685383,
            "unit": "iter/sec",
            "range": "stddev: 0.000007667221968082798",
            "extra": "mean: 1.0421147239263715 msec\nrounds: 978"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 241.49243910926313,
            "unit": "iter/sec",
            "range": "stddev: 0.000044466576638648056",
            "extra": "mean: 4.140916393442656 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 309.7475991108413,
            "unit": "iter/sec",
            "range": "stddev: 0.000009383112191937455",
            "extra": "mean: 3.2284350318471917 msec\nrounds: 314"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 475.9917607298316,
            "unit": "iter/sec",
            "range": "stddev: 0.000024738454470692134",
            "extra": "mean: 2.100876701030946 msec\nrounds: 485"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 869.704967644216,
            "unit": "iter/sec",
            "range": "stddev: 0.000007192126075383381",
            "extra": "mean: 1.1498152099886427 msec\nrounds: 881"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.79916662304934,
            "unit": "iter/sec",
            "range": "stddev: 0.0000903436179167736",
            "extra": "mean: 53.19384736842094 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.507977592356852,
            "unit": "iter/sec",
            "range": "stddev: 0.00007143476670911995",
            "extra": "mean: 51.26107999999938 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 346.95475739528473,
            "unit": "iter/sec",
            "range": "stddev: 0.000014293618880665875",
            "extra": "mean: 2.882220170454969 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 549.4361042735584,
            "unit": "iter/sec",
            "range": "stddev: 0.000011236623599161494",
            "extra": "mean: 1.8200478494622383 msec\nrounds: 558"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1165.127170765763,
            "unit": "iter/sec",
            "range": "stddev: 0.000046048834828423354",
            "extra": "mean: 858.2754098359619 usec\nrounds: 1342"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1044.7225954745236,
            "unit": "iter/sec",
            "range": "stddev: 0.00001534859617161663",
            "extra": "mean: 957.1918941274453 usec\nrounds: 1209"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0fdc6fbf8c3c8862a039824047ce25751550f5eb",
          "message": "Merge pull request #816 from TeoZosa/dependabot/pip/docs/sphinx-rtd-theme-1.2.0",
          "timestamp": "2023-03-03T18:03:15Z",
          "tree_id": "7ccfad39e9e60282f08b1ea07e9b38db6ac5e9bf",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/0fdc6fbf8c3c8862a039824047ce25751550f5eb"
        },
        "date": 1677866730153,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 249.27381552062243,
            "unit": "iter/sec",
            "range": "stddev: 0.00001723195908235592",
            "extra": "mean: 4.011652800000046 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 334.1554018947527,
            "unit": "iter/sec",
            "range": "stddev: 0.000013083674253413114",
            "extra": "mean: 2.992619584569712 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 489.344306198383,
            "unit": "iter/sec",
            "range": "stddev: 0.000012127651197699464",
            "extra": "mean: 2.043550905432614 msec\nrounds: 497"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 936.123651883359,
            "unit": "iter/sec",
            "range": "stddev: 0.000009010904279827532",
            "extra": "mean: 1.06823494736847 msec\nrounds: 950"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 233.71505798272716,
            "unit": "iter/sec",
            "range": "stddev: 0.000012968995046405864",
            "extra": "mean: 4.278714468084917 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 303.8336806540527,
            "unit": "iter/sec",
            "range": "stddev: 0.00001565647792069105",
            "extra": "mean: 3.2912743506491218 msec\nrounds: 308"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 472.2207482511056,
            "unit": "iter/sec",
            "range": "stddev: 0.000012544117614520744",
            "extra": "mean: 2.117653668763079 msec\nrounds: 477"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 862.6765515599386,
            "unit": "iter/sec",
            "range": "stddev: 0.000009155325597911557",
            "extra": "mean: 1.1591830080367267 msec\nrounds: 871"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.339989707965024,
            "unit": "iter/sec",
            "range": "stddev: 0.00016649378166591738",
            "extra": "mean: 49.16423333333377 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.139561269545407,
            "unit": "iter/sec",
            "range": "stddev: 0.0002396109265933709",
            "extra": "mean: 47.30467142857144 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 349.4134246809337,
            "unit": "iter/sec",
            "range": "stddev: 0.000014551553776707748",
            "extra": "mean: 2.8619392655366584 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 587.186029764251,
            "unit": "iter/sec",
            "range": "stddev: 0.000010991512325028325",
            "extra": "mean: 1.7030377926421199 msec\nrounds: 598"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1183.508860729876,
            "unit": "iter/sec",
            "range": "stddev: 0.000041367719793926806",
            "extra": "mean: 844.9450892858503 usec\nrounds: 1344"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1087.5055880784669,
            "unit": "iter/sec",
            "range": "stddev: 0.00001239850504923792",
            "extra": "mean: 919.5355048859271 usec\nrounds: 1228"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ca1020ade08b992079a13edb15f4330870194a5d",
          "message": "Merge pull request #842 from TeoZosa/dependabot/pip/docs/myst-parser-0.19.1",
          "timestamp": "2023-03-03T19:53:04Z",
          "tree_id": "23e594b5175ac37b9d3b4d2eb6be9e84dc817ee7",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/ca1020ade08b992079a13edb15f4330870194a5d"
        },
        "date": 1677873326088,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 257.19533629675084,
            "unit": "iter/sec",
            "range": "stddev: 0.00007340119759738535",
            "extra": "mean: 3.8880953846153896 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 342.49350471431484,
            "unit": "iter/sec",
            "range": "stddev: 0.000011060632316766246",
            "extra": "mean: 2.9197634005764086 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 496.26638630580715,
            "unit": "iter/sec",
            "range": "stddev: 0.00003420298191471678",
            "extra": "mean: 2.015046812749039 msec\nrounds: 502"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 953.7112184038864,
            "unit": "iter/sec",
            "range": "stddev: 0.0000308479406871056",
            "extra": "mean: 1.0485354273944494 msec\nrounds: 971"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 239.50329787134632,
            "unit": "iter/sec",
            "range": "stddev: 0.000013607780158440653",
            "extra": "mean: 4.1753078512395625 msec\nrounds: 242"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 308.56675655065953,
            "unit": "iter/sec",
            "range": "stddev: 0.000011536928814926744",
            "extra": "mean: 3.2407898089171607 msec\nrounds: 314"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 477.77582324031135,
            "unit": "iter/sec",
            "range": "stddev: 0.000010936166186077943",
            "extra": "mean: 2.093031818181852 msec\nrounds: 484"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 870.3142812547708,
            "unit": "iter/sec",
            "range": "stddev: 0.000007634112145402318",
            "extra": "mean: 1.1490102156639963 msec\nrounds: 881"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.696766492639117,
            "unit": "iter/sec",
            "range": "stddev: 0.00009029742375519067",
            "extra": "mean: 53.485184210526356 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.50080094664718,
            "unit": "iter/sec",
            "range": "stddev: 0.00010682583698401102",
            "extra": "mean: 51.279944999999216 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 349.7855754968589,
            "unit": "iter/sec",
            "range": "stddev: 0.000012015996519516195",
            "extra": "mean: 2.858894334277601 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 556.6741853617089,
            "unit": "iter/sec",
            "range": "stddev: 0.000011740058224064978",
            "extra": "mean: 1.7963829225352572 msec\nrounds: 568"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1163.1572001301,
            "unit": "iter/sec",
            "range": "stddev: 0.000057088863221383865",
            "extra": "mean: 859.7290201944753 usec\nrounds: 1337"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1056.1276725694454,
            "unit": "iter/sec",
            "range": "stddev: 0.00001623299113821593",
            "extra": "mean: 946.8552202283528 usec\nrounds: 1226"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dac6d6e0d0345079eb08efcd8c45fecc64647780",
          "message": "Merge pull request #841 from TeoZosa/dependabot/pip/myst-parser-0.19.1",
          "timestamp": "2023-03-03T21:30:26Z",
          "tree_id": "6d36213e0b5099d54f352e55a2ceebf58251a33a",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/dac6d6e0d0345079eb08efcd8c45fecc64647780"
        },
        "date": 1677879192626,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 258.26262280832924,
            "unit": "iter/sec",
            "range": "stddev: 0.000011665771987863406",
            "extra": "mean: 3.872027586206907 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 343.57745446712755,
            "unit": "iter/sec",
            "range": "stddev: 0.000011412736292483179",
            "extra": "mean: 2.91055186246418 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 497.4912648415001,
            "unit": "iter/sec",
            "range": "stddev: 0.000011748122483888444",
            "extra": "mean: 2.0100855445544323 msec\nrounds: 505"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 953.903657491653,
            "unit": "iter/sec",
            "range": "stddev: 0.000007577458546097943",
            "extra": "mean: 1.04832389743589 msec\nrounds: 975"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 241.52293915870192,
            "unit": "iter/sec",
            "range": "stddev: 0.000014304738059406572",
            "extra": "mean: 4.140393469387649 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 311.607097281961,
            "unit": "iter/sec",
            "range": "stddev: 0.000011719044795481556",
            "extra": "mean: 3.209169523809464 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 479.15386141061197,
            "unit": "iter/sec",
            "range": "stddev: 0.00001117244210031301",
            "extra": "mean: 2.0870122950820758 msec\nrounds: 488"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 877.1379127882257,
            "unit": "iter/sec",
            "range": "stddev: 0.000008569453611869077",
            "extra": "mean: 1.1400715730337356 msec\nrounds: 890"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.713857631274667,
            "unit": "iter/sec",
            "range": "stddev: 0.0002078341759153602",
            "extra": "mean: 53.436336842105526 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.548198135062666,
            "unit": "iter/sec",
            "range": "stddev: 0.00008225677959584035",
            "extra": "mean: 51.15561000000035 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 352.3455852874973,
            "unit": "iter/sec",
            "range": "stddev: 0.00001689875886509491",
            "extra": "mean: 2.838122689075407 msec\nrounds: 357"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 564.1788798311848,
            "unit": "iter/sec",
            "range": "stddev: 0.000010572906819246738",
            "extra": "mean: 1.7724874782608362 msec\nrounds: 575"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1139.0630026693962,
            "unit": "iter/sec",
            "range": "stddev: 0.00004684966812085817",
            "extra": "mean: 877.9145645644694 usec\nrounds: 1332"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1045.342456156322,
            "unit": "iter/sec",
            "range": "stddev: 0.000016502179841508336",
            "extra": "mean: 956.6243044188177 usec\nrounds: 1222"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a00e7062202fc88c0996943d044a5baacd9cf95c",
          "message": "Merge pull request #844 from TeoZosa/dependabot/pip/rich-13.3.2",
          "timestamp": "2023-03-06T18:04:30Z",
          "tree_id": "fcfe99919da8f9306f542d1eac2a188af7a53188",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/a00e7062202fc88c0996943d044a5baacd9cf95c"
        },
        "date": 1678126182111,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 256.987778311118,
            "unit": "iter/sec",
            "range": "stddev: 0.00002280279660822908",
            "extra": "mean: 3.891235632183903 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 327.26553563822586,
            "unit": "iter/sec",
            "range": "stddev: 0.0004978670910760606",
            "extra": "mean: 3.0556227011494586 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 492.50439764158403,
            "unit": "iter/sec",
            "range": "stddev: 0.000016141980596055903",
            "extra": "mean: 2.030438722554802 msec\nrounds: 501"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 956.8022487608929,
            "unit": "iter/sec",
            "range": "stddev: 0.000012373335433477748",
            "extra": "mean: 1.0451480452675046 msec\nrounds: 972"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 239.4712396513351,
            "unit": "iter/sec",
            "range": "stddev: 0.00003466199880194686",
            "extra": "mean: 4.175866803278665 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 307.70582890199563,
            "unit": "iter/sec",
            "range": "stddev: 0.00002003818360862008",
            "extra": "mean: 3.2498571884983702 msec\nrounds: 313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 473.6686614465609,
            "unit": "iter/sec",
            "range": "stddev: 0.00001794261190968025",
            "extra": "mean: 2.111180412371063 msec\nrounds: 485"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 854.6667487511106,
            "unit": "iter/sec",
            "range": "stddev: 0.000012064910177802945",
            "extra": "mean: 1.1700466894977006 msec\nrounds: 876"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.59572885469876,
            "unit": "iter/sec",
            "range": "stddev: 0.00023598242376838456",
            "extra": "mean: 53.77578947368446 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.412319213071285,
            "unit": "iter/sec",
            "range": "stddev: 0.00035351099082090175",
            "extra": "mean: 51.513679999999695 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 344.90127641890683,
            "unit": "iter/sec",
            "range": "stddev: 0.0000197455360993406",
            "extra": "mean: 2.8993803977269996 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 550.8002045042231,
            "unit": "iter/sec",
            "range": "stddev: 0.000016123637240899464",
            "extra": "mean: 1.815540357142937 msec\nrounds: 560"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1103.1414136600608,
            "unit": "iter/sec",
            "range": "stddev: 0.000053332885210116664",
            "extra": "mean: 906.5020926756318 usec\nrounds: 1338"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 987.3221010670036,
            "unit": "iter/sec",
            "range": "stddev: 0.00002883900516909026",
            "extra": "mean: 1.0128406919274828 msec\nrounds: 1214"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2fd2f60a89731391918f0fb3bbdfd659a45542ff",
          "message": "Merge pull request #845 from TeoZosa/dependabot/pip/pytest-7.2.2",
          "timestamp": "2023-03-06T18:11:29Z",
          "tree_id": "8ade130a2ec79dfc05a351214ad6ae29eda459fa",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/2fd2f60a89731391918f0fb3bbdfd659a45542ff"
        },
        "date": 1678126443462,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 257.10065717292105,
            "unit": "iter/sec",
            "range": "stddev: 0.0000812843484048804",
            "extra": "mean: 3.889527203065136 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 339.05539949643355,
            "unit": "iter/sec",
            "range": "stddev: 0.00017756536024071554",
            "extra": "mean: 2.949370520231219 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 499.4897855828333,
            "unit": "iter/sec",
            "range": "stddev: 0.000009755165394997208",
            "extra": "mean: 2.0020429423459434 msec\nrounds: 503"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 950.782811181181,
            "unit": "iter/sec",
            "range": "stddev: 0.000007861618699233798",
            "extra": "mean: 1.051764912280729 msec\nrounds: 969"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 240.51687968248078,
            "unit": "iter/sec",
            "range": "stddev: 0.00001762935228049622",
            "extra": "mean: 4.1577123456788305 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 307.25617966529666,
            "unit": "iter/sec",
            "range": "stddev: 0.000011786612401563834",
            "extra": "mean: 3.2546131410256085 msec\nrounds: 312"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 474.54008415375847,
            "unit": "iter/sec",
            "range": "stddev: 0.000012880384657823394",
            "extra": "mean: 2.1073035416666386 msec\nrounds: 480"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 862.0757215965085,
            "unit": "iter/sec",
            "range": "stddev: 0.000007280869303362891",
            "extra": "mean: 1.159990909090984 msec\nrounds: 869"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.836936178279274,
            "unit": "iter/sec",
            "range": "stddev: 0.00014160234184621998",
            "extra": "mean: 53.08718947368375 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.66332455693613,
            "unit": "iter/sec",
            "range": "stddev: 0.00007281913426966308",
            "extra": "mean: 50.856100000000026 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 351.9158098425501,
            "unit": "iter/sec",
            "range": "stddev: 0.000011450334281753237",
            "extra": "mean: 2.841588732394284 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 553.5637694095021,
            "unit": "iter/sec",
            "range": "stddev: 0.0000103608958966115",
            "extra": "mean: 1.8064766071426976 msec\nrounds: 560"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1158.761788172874,
            "unit": "iter/sec",
            "range": "stddev: 0.00004580459724150801",
            "extra": "mean: 862.9901418968878 usec\nrounds: 1339"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1050.720224500523,
            "unit": "iter/sec",
            "range": "stddev: 0.000016055473368645688",
            "extra": "mean: 951.7281353134382 usec\nrounds: 1212"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7297cc9bff459accc6bcf86884ac6fd96ec5703b",
          "message": "Merge pull request #785 from TeoZosa/dependabot/pip/docs/sphinx-6.1.3\n\n⬆️ Bump sphinx from 5.3.0 to 6.1.3 in /docs",
          "timestamp": "2023-03-07T14:20:14+09:00",
          "tree_id": "2471e69f68e66598bd8e310e5ec4f331790c1130",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/7297cc9bff459accc6bcf86884ac6fd96ec5703b"
        },
        "date": 1678166567952,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 230.48526332681283,
            "unit": "iter/sec",
            "range": "stddev: 0.00015953234502743147",
            "extra": "mean: 4.338672180451148 msec\nrounds: 266"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 300.3184881749816,
            "unit": "iter/sec",
            "range": "stddev: 0.00010863349482690736",
            "extra": "mean: 3.329798328690795 msec\nrounds: 359"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 442.2965125525883,
            "unit": "iter/sec",
            "range": "stddev: 0.00008326386113837277",
            "extra": "mean: 2.260926712328761 msec\nrounds: 584"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 854.4741909921987,
            "unit": "iter/sec",
            "range": "stddev: 0.00007181045691411328",
            "extra": "mean: 1.1703103622577757 msec\nrounds: 1187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 210.9270096903464,
            "unit": "iter/sec",
            "range": "stddev: 0.00017177164179816554",
            "extra": "mean: 4.740976518218603 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 272.33424489656545,
            "unit": "iter/sec",
            "range": "stddev: 0.00016353813169587344",
            "extra": "mean: 3.6719583333333907 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 418.88286009766847,
            "unit": "iter/sec",
            "range": "stddev: 0.00007348635538561995",
            "extra": "mean: 2.3873022633746244 msec\nrounds: 486"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 754.1965120629836,
            "unit": "iter/sec",
            "range": "stddev: 0.000052063709296794814",
            "extra": "mean: 1.3259143790849157 msec\nrounds: 918"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 16.18796166043173,
            "unit": "iter/sec",
            "range": "stddev: 0.0007677124201165389",
            "extra": "mean: 61.77429999999952 msec\nrounds: 17"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.09560326727383,
            "unit": "iter/sec",
            "range": "stddev: 0.0009464720721196297",
            "extra": "mean: 58.4945722222218 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 311.7666056626236,
            "unit": "iter/sec",
            "range": "stddev: 0.0001550769497467562",
            "extra": "mean: 3.20752762430927 msec\nrounds: 362"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 501.4575623135695,
            "unit": "iter/sec",
            "range": "stddev: 0.00009028212692149988",
            "extra": "mean: 1.9941866972477402 msec\nrounds: 654"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1025.6280801090497,
            "unit": "iter/sec",
            "range": "stddev: 0.00006279953385055902",
            "extra": "mean: 975.0123065016661 usec\nrounds: 1292"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 911.8336815363853,
            "unit": "iter/sec",
            "range": "stddev: 0.00005912793416451401",
            "extra": "mean: 1.0966912280702987 msec\nrounds: 1425"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3d9fdf89dfa34d4dfa79010a349744139f6fb82c",
          "message": "Merge pull request #846 from TeoZosa/dependabot/pip/mypy-1.1.1",
          "timestamp": "2023-03-07T15:49:33Z",
          "tree_id": "9c0ea0f5d707c911f89e7fcf7ce124bea5a6ad29",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/3d9fdf89dfa34d4dfa79010a349744139f6fb82c"
        },
        "date": 1678204351639,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 246.57816088790884,
            "unit": "iter/sec",
            "range": "stddev: 0.000013239002989664099",
            "extra": "mean: 4.055509200000023 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 331.6477841659805,
            "unit": "iter/sec",
            "range": "stddev: 0.000014639250726846565",
            "extra": "mean: 3.015247041420086 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 490.1306582041361,
            "unit": "iter/sec",
            "range": "stddev: 0.000011962274501422849",
            "extra": "mean: 2.0402722891566327 msec\nrounds: 498"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 943.1299516164643,
            "unit": "iter/sec",
            "range": "stddev: 0.000010223262106689002",
            "extra": "mean: 1.0602992708333185 msec\nrounds: 960"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 231.83574378107966,
            "unit": "iter/sec",
            "range": "stddev: 0.000015676220970864663",
            "extra": "mean: 4.313398717948733 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 306.199870198738,
            "unit": "iter/sec",
            "range": "stddev: 0.000014471532432564903",
            "extra": "mean: 3.265840705128168 msec\nrounds: 312"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 471.67183196454334,
            "unit": "iter/sec",
            "range": "stddev: 0.000011749699264286295",
            "extra": "mean: 2.1201181250000367 msec\nrounds: 480"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 856.1522642884407,
            "unit": "iter/sec",
            "range": "stddev: 0.000009047886951640226",
            "extra": "mean: 1.1680165336374049 msec\nrounds: 877"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.27395128401211,
            "unit": "iter/sec",
            "range": "stddev: 0.000111789936509477",
            "extra": "mean: 49.32437619047613 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.036628978376957,
            "unit": "iter/sec",
            "range": "stddev: 0.00017383861289517444",
            "extra": "mean: 47.53613333333377 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 351.65526816846017,
            "unit": "iter/sec",
            "range": "stddev: 0.00001148513974503236",
            "extra": "mean: 2.843694067796393 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 591.4626534007314,
            "unit": "iter/sec",
            "range": "stddev: 0.000012327669341609376",
            "extra": "mean: 1.6907238255032715 msec\nrounds: 596"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1195.6320277322745,
            "unit": "iter/sec",
            "range": "stddev: 0.000042325865470155644",
            "extra": "mean: 836.3777289377863 usec\nrounds: 1365"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1091.240282214674,
            "unit": "iter/sec",
            "range": "stddev: 0.00001286206821763113",
            "extra": "mean: 916.3884584341943 usec\nrounds: 1239"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ad30cb04f7b84a9159347e5fec9419cab835b6b1",
          "message": "Merge pull request #848 from TeoZosa/dependabot/pip/myst-parser-1.0.0\n\n⬆️ Bump myst-parser from 0.19.1 to 1.0.0",
          "timestamp": "2023-03-11T12:39:07+09:00",
          "tree_id": "172098207d74339bbf2109e74822d616a87ee231",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/ad30cb04f7b84a9159347e5fec9419cab835b6b1"
        },
        "date": 1678506138914,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 155.63705037028316,
            "unit": "iter/sec",
            "range": "stddev: 0.001065985663295044",
            "extra": "mean: 6.425205294117658 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 210.48243739020972,
            "unit": "iter/sec",
            "range": "stddev: 0.000723736369540823",
            "extra": "mean: 4.7509902127659105 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 294.1906506915917,
            "unit": "iter/sec",
            "range": "stddev: 0.0004637971597701216",
            "extra": "mean: 3.3991562874250816 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 631.8561541343519,
            "unit": "iter/sec",
            "range": "stddev: 0.00024766128670240464",
            "extra": "mean: 1.582638696255176 msec\nrounds: 721"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 152.90554813387692,
            "unit": "iter/sec",
            "range": "stddev: 0.0004466586052031497",
            "extra": "mean: 6.53998505747121 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 184.95047135171825,
            "unit": "iter/sec",
            "range": "stddev: 0.0007894247663807607",
            "extra": "mean: 5.406852941176403 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 291.7179101783158,
            "unit": "iter/sec",
            "range": "stddev: 0.0004622328423831732",
            "extra": "mean: 3.427969161676563 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 589.5466914270745,
            "unit": "iter/sec",
            "range": "stddev: 0.00028090811350518855",
            "extra": "mean: 1.6962184921763697 msec\nrounds: 703"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.728893541582702,
            "unit": "iter/sec",
            "range": "stddev: 0.003128361567739157",
            "extra": "mean: 67.89376250000001 msec\nrounds: 16"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 15.03543758667675,
            "unit": "iter/sec",
            "range": "stddev: 0.0013761418366220613",
            "extra": "mean: 66.50953750000087 msec\nrounds: 16"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 209.8281777127952,
            "unit": "iter/sec",
            "range": "stddev: 0.0007443399091246944",
            "extra": "mean: 4.765804149377696 msec\nrounds: 241"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 353.4724616541174,
            "unit": "iter/sec",
            "range": "stddev: 0.00020533824562648715",
            "extra": "mean: 2.829074704491485 msec\nrounds: 423"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 703.013106814429,
            "unit": "iter/sec",
            "range": "stddev: 0.00020957518413345795",
            "extra": "mean: 1.4224485863874017 msec\nrounds: 955"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 618.5876568304005,
            "unit": "iter/sec",
            "range": "stddev: 0.0003469792855972044",
            "extra": "mean: 1.6165857642939878 msec\nrounds: 857"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "960c9628b22352c1732d29004a795d7964ee9142",
          "message": "Merge pull request #847 from TeoZosa/dependabot/pip/docs/myst-parser-1.0.0\n\n⬆️ Bump myst-parser from 0.19.1 to 1.0.0 in /docs",
          "timestamp": "2023-03-11T12:39:15+09:00",
          "tree_id": "0eff3648cd9528548d973aa125cf95740872e96e",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/960c9628b22352c1732d29004a795d7964ee9142"
        },
        "date": 1678507871595,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 248.1328739724265,
            "unit": "iter/sec",
            "range": "stddev: 0.000030660141250898044",
            "extra": "mean: 4.030098809523819 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 334.6519468083418,
            "unit": "iter/sec",
            "range": "stddev: 0.000015510380839612056",
            "extra": "mean: 2.9881792397661116 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 491.55241180044044,
            "unit": "iter/sec",
            "range": "stddev: 0.00001111353502169517",
            "extra": "mean: 2.0343710578842162 msec\nrounds: 501"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 956.3643734474166,
            "unit": "iter/sec",
            "range": "stddev: 0.000008617598541287342",
            "extra": "mean: 1.0456265705457948 msec\nrounds: 971"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 233.80000274246012,
            "unit": "iter/sec",
            "range": "stddev: 0.000021465161880815175",
            "extra": "mean: 4.277159915611889 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 307.70519365077575,
            "unit": "iter/sec",
            "range": "stddev: 0.000014227001464035993",
            "extra": "mean: 3.2498638977635563 msec\nrounds: 313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 468.7500616776619,
            "unit": "iter/sec",
            "range": "stddev: 0.000010523462942635143",
            "extra": "mean: 2.133333052631478 msec\nrounds: 475"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 872.1496396637028,
            "unit": "iter/sec",
            "range": "stddev: 0.000008227477293921972",
            "extra": "mean: 1.1465922297297466 msec\nrounds: 888"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.041319474665453,
            "unit": "iter/sec",
            "range": "stddev: 0.0002393093777634296",
            "extra": "mean: 49.89691428571435 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.046584510154673,
            "unit": "iter/sec",
            "range": "stddev: 0.00008691328217825243",
            "extra": "mean: 47.513647619047845 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 349.86617130305325,
            "unit": "iter/sec",
            "range": "stddev: 0.000010402760669255252",
            "extra": "mean: 2.8582357541901424 msec\nrounds: 358"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 588.7133175768157,
            "unit": "iter/sec",
            "range": "stddev: 0.000011640475958118264",
            "extra": "mean: 1.6986196339435098 msec\nrounds: 601"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1203.9366796095417,
            "unit": "iter/sec",
            "range": "stddev: 0.00004092397164134446",
            "extra": "mean: 830.6084671532044 usec\nrounds: 1370"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1089.028904656737,
            "unit": "iter/sec",
            "range": "stddev: 0.000011406280955123089",
            "extra": "mean: 918.2492730210876 usec\nrounds: 1238"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e5e15d5044855b856ff92011bbf5538045bca3cb",
          "message": "Merge pull request #850 from TeoZosa/dependabot/github_actions/pypa/gh-action-pypi-publish-1.7.1",
          "timestamp": "2023-03-13T18:38:58Z",
          "tree_id": "38341bc80d4b7053db20170edf2aec1182f7c325",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/e5e15d5044855b856ff92011bbf5538045bca3cb"
        },
        "date": 1678732888943,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 245.97103883645516,
            "unit": "iter/sec",
            "range": "stddev: 0.00002093738432515648",
            "extra": "mean: 4.065519277108451 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 329.4107067277,
            "unit": "iter/sec",
            "range": "stddev: 0.00002187683837934376",
            "extra": "mean: 3.0357240356083133 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 488.6495235226391,
            "unit": "iter/sec",
            "range": "stddev: 0.00001203676983153275",
            "extra": "mean: 2.046456513026089 msec\nrounds: 499"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 949.517452876267,
            "unit": "iter/sec",
            "range": "stddev: 0.000014052101144452607",
            "extra": "mean: 1.0531665289256262 msec\nrounds: 968"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 231.82102149060216,
            "unit": "iter/sec",
            "range": "stddev: 0.000015778189563739784",
            "extra": "mean: 4.313672649572632 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 302.9683322350836,
            "unit": "iter/sec",
            "range": "stddev: 0.000016944682705379844",
            "extra": "mean: 3.300674999999886 msec\nrounds: 308"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 468.14067185546105,
            "unit": "iter/sec",
            "range": "stddev: 0.00001308938980299704",
            "extra": "mean: 2.136110062893128 msec\nrounds: 477"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 855.2526899849848,
            "unit": "iter/sec",
            "range": "stddev: 0.000009949112438257241",
            "extra": "mean: 1.1692450800915417 msec\nrounds: 874"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.217447310444104,
            "unit": "iter/sec",
            "range": "stddev: 0.0001184023654444046",
            "extra": "mean: 49.46222857142857 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.975108838341132,
            "unit": "iter/sec",
            "range": "stddev: 0.0001234138346034916",
            "extra": "mean: 47.67555714285807 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 345.74464950334277,
            "unit": "iter/sec",
            "range": "stddev: 0.000014256362375085353",
            "extra": "mean: 2.8923079545453145 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 582.3165203690764,
            "unit": "iter/sec",
            "range": "stddev: 0.00001111485439986908",
            "extra": "mean: 1.7172791171478232 msec\nrounds: 589"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1209.3288470982761,
            "unit": "iter/sec",
            "range": "stddev: 0.00004093455927244296",
            "extra": "mean: 826.9049418604789 usec\nrounds: 1376"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1095.5769878296248,
            "unit": "iter/sec",
            "range": "stddev: 0.000012113465737264519",
            "extra": "mean: 912.7610483869635 usec\nrounds: 1240"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f59d2121509e2a2aa2aa8c4b43c10788f9a12add",
          "message": "Merge pull request #851 from TeoZosa/dependabot/github_actions/pypa/cibuildwheel-2.12.1",
          "timestamp": "2023-03-13T18:42:41Z",
          "tree_id": "318ff7a46e67bd702a8348f3ef7ce8b00b8b6388",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/f59d2121509e2a2aa2aa8c4b43c10788f9a12add"
        },
        "date": 1678733337251,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 259.09915180628974,
            "unit": "iter/sec",
            "range": "stddev: 0.000031721400265426405",
            "extra": "mean: 3.859526335877895 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 345.00073238726924,
            "unit": "iter/sec",
            "range": "stddev: 0.000010488116441567416",
            "extra": "mean: 2.8985445714285696 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 503.03413421957504,
            "unit": "iter/sec",
            "range": "stddev: 0.00000992740687865768",
            "extra": "mean: 1.9879366666666378 msec\nrounds: 510"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 966.9060676303989,
            "unit": "iter/sec",
            "range": "stddev: 0.000007565427226094924",
            "extra": "mean: 1.0342266260162216 msec\nrounds: 984"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 241.31899248434948,
            "unit": "iter/sec",
            "range": "stddev: 0.0000713188840662347",
            "extra": "mean: 4.143892653061089 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 308.48857398603053,
            "unit": "iter/sec",
            "range": "stddev: 0.00006115981032768851",
            "extra": "mean: 3.241611146496737 msec\nrounds: 314"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 478.4587039826485,
            "unit": "iter/sec",
            "range": "stddev: 0.000014126289747356838",
            "extra": "mean: 2.0900445360823983 msec\nrounds: 485"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 867.6185299451191,
            "unit": "iter/sec",
            "range": "stddev: 0.00000780024633049861",
            "extra": "mean: 1.1525802705749666 msec\nrounds: 887"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.616656969674565,
            "unit": "iter/sec",
            "range": "stddev: 0.00022775417110630517",
            "extra": "mean: 53.715336842105486 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.22831762027252,
            "unit": "iter/sec",
            "range": "stddev: 0.00012847908328651844",
            "extra": "mean: 52.00663000000034 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 349.15821219122193,
            "unit": "iter/sec",
            "range": "stddev: 0.0000344780849869479",
            "extra": "mean: 2.864031161473396 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 558.7879406663067,
            "unit": "iter/sec",
            "range": "stddev: 0.000009979404018157885",
            "extra": "mean: 1.7895876543212186 msec\nrounds: 567"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1184.4363515128257,
            "unit": "iter/sec",
            "range": "stddev: 0.00004476145610208153",
            "extra": "mean: 844.2834422658054 usec\nrounds: 1377"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1067.0784523854477,
            "unit": "iter/sec",
            "range": "stddev: 0.000016460974330600076",
            "extra": "mean: 937.1382186234815 usec\nrounds: 1235"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0f0d0e5b91621d707e031f5db0b0cb53911456e6",
          "message": "Merge pull request #852 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.4.7",
          "timestamp": "2023-03-13T18:42:56Z",
          "tree_id": "f0f7f8d6375191815548b1312178b865e6b31614",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/0f0d0e5b91621d707e031f5db0b0cb53911456e6"
        },
        "date": 1678733751157,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 222.5371430526072,
            "unit": "iter/sec",
            "range": "stddev: 0.00008439024371181502",
            "extra": "mean: 4.493631877729295 msec\nrounds: 229"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 293.53180514029617,
            "unit": "iter/sec",
            "range": "stddev: 0.00001766357230293234",
            "extra": "mean: 3.4067858490565985 msec\nrounds: 318"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 426.18902916814875,
            "unit": "iter/sec",
            "range": "stddev: 0.000025275486969580523",
            "extra": "mean: 2.3463766816143448 msec\nrounds: 446"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 829.7300364613093,
            "unit": "iter/sec",
            "range": "stddev: 0.000017724506521058134",
            "extra": "mean: 1.2052112808460809 msec\nrounds: 851"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 204.32982059304206,
            "unit": "iter/sec",
            "range": "stddev: 0.00006939888753889455",
            "extra": "mean: 4.8940482456139955 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 267.19775842344416,
            "unit": "iter/sec",
            "range": "stddev: 0.00007465339536747115",
            "extra": "mean: 3.7425463667821663 msec\nrounds: 289"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 412.4233040911089,
            "unit": "iter/sec",
            "range": "stddev: 0.00002519162927886628",
            "extra": "mean: 2.4246932461873905 msec\nrounds: 459"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 747.6489162910145,
            "unit": "iter/sec",
            "range": "stddev: 0.000024607471711813775",
            "extra": "mean: 1.3375261813537633 msec\nrounds: 783"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 15.916612865199228,
            "unit": "iter/sec",
            "range": "stddev: 0.00044103575195266175",
            "extra": "mean: 62.827437499999974 msec\nrounds: 16"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 16.462979262747226,
            "unit": "iter/sec",
            "range": "stddev: 0.0004841741514141983",
            "extra": "mean: 60.74234705882313 msec\nrounds: 17"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 302.5447205014553,
            "unit": "iter/sec",
            "range": "stddev: 0.00005225417843618046",
            "extra": "mean: 3.305296480938559 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 484.6900399338703,
            "unit": "iter/sec",
            "range": "stddev: 0.00003598352527675323",
            "extra": "mean: 2.0631742301460063 msec\nrounds: 617"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1012.2931192816046,
            "unit": "iter/sec",
            "range": "stddev: 0.00005548981833671912",
            "extra": "mean: 987.856166314428 usec\nrounds: 1419"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 914.5437883565673,
            "unit": "iter/sec",
            "range": "stddev: 0.00003868327056227981",
            "extra": "mean: 1.0934413559322262 msec\nrounds: 1180"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4f47f0a9fb58c6837d969b4a8f16f3a595a156c9",
          "message": "Merge pull request #854 from TeoZosa/dependabot/pip/pytest-xdist-3.2.1",
          "timestamp": "2023-03-13T18:56:52Z",
          "tree_id": "7cc4bd4dea0736ee0214b5f44a6832a53b768bba",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/4f47f0a9fb58c6837d969b4a8f16f3a595a156c9"
        },
        "date": 1678734954906,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 159.21971784264431,
            "unit": "iter/sec",
            "range": "stddev: 0.0005134917582153144",
            "extra": "mean: 6.280629142857122 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 201.88287191369062,
            "unit": "iter/sec",
            "range": "stddev: 0.00046306161995929426",
            "extra": "mean: 4.953367219917111 msec\nrounds: 241"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 281.20441347831195,
            "unit": "iter/sec",
            "range": "stddev: 0.00032269331093563264",
            "extra": "mean: 3.5561319526627044 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 538.4651947066866,
            "unit": "iter/sec",
            "range": "stddev: 0.0005799292636703156",
            "extra": "mean: 1.857130246913584 msec\nrounds: 648"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 137.11725920762484,
            "unit": "iter/sec",
            "range": "stddev: 0.0008831769652568437",
            "extra": "mean: 7.2930279220778935 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 181.24438466058044,
            "unit": "iter/sec",
            "range": "stddev: 0.0006729677538478323",
            "extra": "mean: 5.517412315270996 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 271.8467101269594,
            "unit": "iter/sec",
            "range": "stddev: 0.00044111196645383336",
            "extra": "mean: 3.6785436893202577 msec\nrounds: 309"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 535.1864227033645,
            "unit": "iter/sec",
            "range": "stddev: 0.00014892191041271962",
            "extra": "mean: 1.8685077901429978 msec\nrounds: 629"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.156095665489413,
            "unit": "iter/sec",
            "range": "stddev: 0.0013618244603145644",
            "extra": "mean: 76.0103928571425 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.764181039093437,
            "unit": "iter/sec",
            "range": "stddev: 0.0019268323198440357",
            "extra": "mean: 72.65234285714277 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.6134781616645,
            "unit": "iter/sec",
            "range": "stddev: 0.00043629117408398204",
            "extra": "mean: 5.08612130434799 msec\nrounds: 230"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 321.929462505495,
            "unit": "iter/sec",
            "range": "stddev: 0.0003417171976788034",
            "extra": "mean: 3.106270523416076 msec\nrounds: 363"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 642.8307354658795,
            "unit": "iter/sec",
            "range": "stddev: 0.0002916766920186849",
            "extra": "mean: 1.5556194575470461 msec\nrounds: 848"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 579.4693919469283,
            "unit": "iter/sec",
            "range": "stddev: 0.0002109489501719459",
            "extra": "mean: 1.7257166882277477 msec\nrounds: 773"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9abf8fdc1664df0d8ada4d32c47b1b3b485245b6",
          "message": "Merge pull request #853 from TeoZosa/dependabot/pip/dot-github/workflows/tox-gh-actions-3.1.0",
          "timestamp": "2023-03-14T07:54:17Z",
          "tree_id": "0732160f0dd871667709f898cc96d2a09a0e4466",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/9abf8fdc1664df0d8ada4d32c47b1b3b485245b6"
        },
        "date": 1678780639072,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 230.64157062919213,
            "unit": "iter/sec",
            "range": "stddev: 0.00019445094646287575",
            "extra": "mean: 4.335731833910043 msec\nrounds: 289"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 303.0563426926823,
            "unit": "iter/sec",
            "range": "stddev: 0.00015175540492679075",
            "extra": "mean: 3.299716452442183 msec\nrounds: 389"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 460.4262120487566,
            "unit": "iter/sec",
            "range": "stddev: 0.00016114027877306588",
            "extra": "mean: 2.171900673400639 msec\nrounds: 594"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 873.461769340468,
            "unit": "iter/sec",
            "range": "stddev: 0.00009015283251075231",
            "extra": "mean: 1.144869798657677 msec\nrounds: 1192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 211.3582563352918,
            "unit": "iter/sec",
            "range": "stddev: 0.0001663364103028989",
            "extra": "mean: 4.731303225806485 msec\nrounds: 279"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 274.145084249182,
            "unit": "iter/sec",
            "range": "stddev: 0.00014698949666622278",
            "extra": "mean: 3.647703560830797 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 440.33288271856253,
            "unit": "iter/sec",
            "range": "stddev: 0.00016808052363337532",
            "extra": "mean: 2.2710091370558554 msec\nrounds: 591"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 777.4378260053467,
            "unit": "iter/sec",
            "range": "stddev: 0.00008921725519890648",
            "extra": "mean: 1.2862764925373242 msec\nrounds: 1072"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 16.91651100343891,
            "unit": "iter/sec",
            "range": "stddev: 0.0013700122718316666",
            "extra": "mean: 59.11384444444323 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.499384067731857,
            "unit": "iter/sec",
            "range": "stddev: 0.0016215098509488345",
            "extra": "mean: 57.144868421052536 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 309.783690043267,
            "unit": "iter/sec",
            "range": "stddev: 0.00015693573448921134",
            "extra": "mean: 3.228058907363172 msec\nrounds: 421"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 511.4197846104301,
            "unit": "iter/sec",
            "range": "stddev: 0.00013279169587846322",
            "extra": "mean: 1.9553408571429085 msec\nrounds: 700"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1043.6144385736513,
            "unit": "iter/sec",
            "range": "stddev: 0.00007361714055801904",
            "extra": "mean: 958.2082836710646 usec\nrounds: 1678"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 921.164879484825,
            "unit": "iter/sec",
            "range": "stddev: 0.000050734802704446504",
            "extra": "mean: 1.085581986754928 msec\nrounds: 1510"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a157a013debddc24a42aa42faab8f4869676bb1b",
          "message": "Merge pull request #855 from TeoZosa/dependabot/github_actions/pypa/gh-action-pypi-publish-1.8.1",
          "timestamp": "2023-03-16T15:02:08Z",
          "tree_id": "75c6ac86b4f3ca689da6de0611b8bc678d605cb4",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/a157a013debddc24a42aa42faab8f4869676bb1b"
        },
        "date": 1678979138144,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 209.65922922907848,
            "unit": "iter/sec",
            "range": "stddev: 0.000019500153996015446",
            "extra": "mean: 4.769644549763068 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 276.73448984144255,
            "unit": "iter/sec",
            "range": "stddev: 0.00001666219415897683",
            "extra": "mean: 3.613571985815569 msec\nrounds: 282"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 405.4752144909817,
            "unit": "iter/sec",
            "range": "stddev: 0.000014044209270513942",
            "extra": "mean: 2.4662419902912247 msec\nrounds: 412"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 767.5362175638676,
            "unit": "iter/sec",
            "range": "stddev: 0.000010563543003167397",
            "extra": "mean: 1.302870114942542 msec\nrounds: 783"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 194.40673956589131,
            "unit": "iter/sec",
            "range": "stddev: 0.00001747498517917199",
            "extra": "mean: 5.143854591836641 msec\nrounds: 196"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 250.1919951615056,
            "unit": "iter/sec",
            "range": "stddev: 0.000021806045802458585",
            "extra": "mean: 3.9969304347825894 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 390.07333477444485,
            "unit": "iter/sec",
            "range": "stddev: 0.000012877525763567925",
            "extra": "mean: 2.5636205063292468 msec\nrounds: 395"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 696.5054281022141,
            "unit": "iter/sec",
            "range": "stddev: 0.000012505299779486912",
            "extra": "mean: 1.4357389901823527 msec\nrounds: 713"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 15.195492864861334,
            "unit": "iter/sec",
            "range": "stddev: 0.00007639403881607396",
            "extra": "mean: 65.80898750000009 msec\nrounds: 16"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 15.88141663824561,
            "unit": "iter/sec",
            "range": "stddev: 0.00009153042845721171",
            "extra": "mean: 62.96667499999975 msec\nrounds: 16"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 283.2634995043961,
            "unit": "iter/sec",
            "range": "stddev: 0.000012373186917061188",
            "extra": "mean: 3.5302818815329946 msec\nrounds: 287"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 455.68228925327327,
            "unit": "iter/sec",
            "range": "stddev: 0.000012606851477831993",
            "extra": "mean: 2.194511447084547 msec\nrounds: 463"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 948.0057823153257,
            "unit": "iter/sec",
            "range": "stddev: 0.00004749938350315132",
            "extra": "mean: 1.054845886654497 msec\nrounds: 1094"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 838.8227765600416,
            "unit": "iter/sec",
            "range": "stddev: 0.000017392363993410193",
            "extra": "mean: 1.1921469325152756 msec\nrounds: 978"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a0615430f91278859a2dfc624fc830e432dfc685",
          "message": "Merge pull request #856 from TeoZosa/dependabot/pip/sentry-sdk-1.17.0",
          "timestamp": "2023-03-17T14:56:33Z",
          "tree_id": "9bed019c0b5bfd64ea1da05ec86f8e446a65a4ea",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/a0615430f91278859a2dfc624fc830e432dfc685"
        },
        "date": 1679065162856,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 256.6103672768091,
            "unit": "iter/sec",
            "range": "stddev: 0.000024547497697980915",
            "extra": "mean: 3.8969586872586732 msec\nrounds: 259"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 340.64199661628714,
            "unit": "iter/sec",
            "range": "stddev: 0.000013334193528463252",
            "extra": "mean: 2.9356333333333535 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 490.175017287601,
            "unit": "iter/sec",
            "range": "stddev: 0.000015020534603995194",
            "extra": "mean: 2.0400876518218567 msec\nrounds: 494"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 942.9969147728956,
            "unit": "iter/sec",
            "range": "stddev: 0.000008127911068501805",
            "extra": "mean: 1.0604488565488388 msec\nrounds: 962"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 240.21191058003015,
            "unit": "iter/sec",
            "range": "stddev: 0.000025760512095235842",
            "extra": "mean: 4.1629909090908095 msec\nrounds: 242"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 309.93174810950717,
            "unit": "iter/sec",
            "range": "stddev: 0.000011597322997929612",
            "extra": "mean: 3.226516825396904 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 473.2515360626015,
            "unit": "iter/sec",
            "range": "stddev: 0.000011141694417804848",
            "extra": "mean: 2.113041213389153 msec\nrounds: 478"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 865.1609643318834,
            "unit": "iter/sec",
            "range": "stddev: 0.000007976175745729765",
            "extra": "mean: 1.155854275940715 msec\nrounds: 877"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.717360371447107,
            "unit": "iter/sec",
            "range": "stddev: 0.00009058737470580423",
            "extra": "mean: 53.426336842104966 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.513428751397836,
            "unit": "iter/sec",
            "range": "stddev: 0.00007050482178354463",
            "extra": "mean: 51.24676000000079 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 347.1969402228172,
            "unit": "iter/sec",
            "range": "stddev: 0.000016295797880642634",
            "extra": "mean: 2.8802097142856145 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 558.5184786035023,
            "unit": "iter/sec",
            "range": "stddev: 0.000010649592764103043",
            "extra": "mean: 1.7904510563381193 msec\nrounds: 568"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1166.7141049680574,
            "unit": "iter/sec",
            "range": "stddev: 0.00004901853350777311",
            "extra": "mean: 857.1080059303631 usec\nrounds: 1349"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1043.2856819197677,
            "unit": "iter/sec",
            "range": "stddev: 0.000017963603746613864",
            "extra": "mean: 958.5102310230915 usec\nrounds: 1212"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a4940eff947e3e4f0d07c49b16f6d26b465bba75",
          "message": "Merge pull request #857 from TeoZosa/security/ignore-cve-2023-24816\n\n🚨  Fix security scanning for `CVE-2023-24816`",
          "timestamp": "2023-03-18T22:40:58+09:00",
          "tree_id": "0b578213b655ffbdaf47275ef7c30944d60cbc3a",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/a4940eff947e3e4f0d07c49b16f6d26b465bba75"
        },
        "date": 1679146997142,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 247.39159566396523,
            "unit": "iter/sec",
            "range": "stddev: 0.000013344766286872383",
            "extra": "mean: 4.0421745019920206 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 330.75931476455315,
            "unit": "iter/sec",
            "range": "stddev: 0.00001406712613874565",
            "extra": "mean: 3.0233464497041824 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 492.0788589832908,
            "unit": "iter/sec",
            "range": "stddev: 0.000010879713561246734",
            "extra": "mean: 2.0321945999999897 msec\nrounds: 500"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 954.9022256356446,
            "unit": "iter/sec",
            "range": "stddev: 0.000010922246334770598",
            "extra": "mean: 1.0472276356192756 msec\nrounds: 977"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 232.45290809423068,
            "unit": "iter/sec",
            "range": "stddev: 0.0000132001301231372",
            "extra": "mean: 4.301946610169423 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 304.5438828639855,
            "unit": "iter/sec",
            "range": "stddev: 0.00001682756472427614",
            "extra": "mean: 3.283599035369944 msec\nrounds: 311"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 472.25701564850976,
            "unit": "iter/sec",
            "range": "stddev: 0.000009713706765180953",
            "extra": "mean: 2.1174910416667636 msec\nrounds: 480"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 871.5332615002766,
            "unit": "iter/sec",
            "range": "stddev: 0.000010285523764741733",
            "extra": "mean: 1.1474031390133959 msec\nrounds: 892"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.315299248711348,
            "unit": "iter/sec",
            "range": "stddev: 0.0000901152056300009",
            "extra": "mean: 49.223985714285384 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.052865851439616,
            "unit": "iter/sec",
            "range": "stddev: 0.00011221607791667895",
            "extra": "mean: 47.49947142857128 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 352.8345063845462,
            "unit": "iter/sec",
            "range": "stddev: 0.000011285102999676928",
            "extra": "mean: 2.834189915966221 msec\nrounds: 357"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 591.8663840079488,
            "unit": "iter/sec",
            "range": "stddev: 0.00001366028581956512",
            "extra": "mean: 1.6895705298014865 msec\nrounds: 604"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1217.0672993303185,
            "unit": "iter/sec",
            "range": "stddev: 0.000040416649595034915",
            "extra": "mean: 821.6472503617853 usec\nrounds: 1382"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1104.2468842829874,
            "unit": "iter/sec",
            "range": "stddev: 0.00001138331704388437",
            "extra": "mean: 905.5945859872838 usec\nrounds: 1256"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "1a4fb58fe49e2cd0e565dab2016f670012d9195c",
          "message": ":bookmark: Bump version number to `0.20.2`",
          "timestamp": "2023-03-19T13:25:26+09:00",
          "tree_id": "579e9e9c54d3d8f3bddf701de6b52c18bc8f6f23",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/1a4fb58fe49e2cd0e565dab2016f670012d9195c"
        },
        "date": 1679200067458,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 249.6030370746689,
            "unit": "iter/sec",
            "range": "stddev: 0.00001361046829169568",
            "extra": "mean: 4.006361507936497 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 332.4600519247519,
            "unit": "iter/sec",
            "range": "stddev: 0.000012921828102571503",
            "extra": "mean: 3.0078801775147928 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 490.3949768646523,
            "unit": "iter/sec",
            "range": "stddev: 0.000011926959964207098",
            "extra": "mean: 2.039172599999933 msec\nrounds: 500"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 951.4700952456092,
            "unit": "iter/sec",
            "range": "stddev: 0.000008042209323454339",
            "extra": "mean: 1.0510051813471484 msec\nrounds: 965"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 233.5428720884794,
            "unit": "iter/sec",
            "range": "stddev: 0.00001636815072874757",
            "extra": "mean: 4.281869067796437 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 306.42969305695624,
            "unit": "iter/sec",
            "range": "stddev: 0.000015783765297447126",
            "extra": "mean: 3.263391318328049 msec\nrounds: 311"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 473.4025365340261,
            "unit": "iter/sec",
            "range": "stddev: 0.000011641947068724299",
            "extra": "mean: 2.1123672199169223 msec\nrounds: 482"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 871.9139439913235,
            "unit": "iter/sec",
            "range": "stddev: 0.000009309859986300536",
            "extra": "mean: 1.1469021764032612 msec\nrounds: 873"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.11101664253633,
            "unit": "iter/sec",
            "range": "stddev: 0.0010061462303779778",
            "extra": "mean: 49.72399047619123 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.972475722861024,
            "unit": "iter/sec",
            "range": "stddev: 0.00008939273220581955",
            "extra": "mean: 47.681542857143526 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 346.72296420278985,
            "unit": "iter/sec",
            "range": "stddev: 0.000013787702010955093",
            "extra": "mean: 2.884147008546928 msec\nrounds: 351"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 589.3511066622123,
            "unit": "iter/sec",
            "range": "stddev: 0.000010981180027398625",
            "extra": "mean: 1.696781407035097 msec\nrounds: 597"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1205.8702113971985,
            "unit": "iter/sec",
            "range": "stddev: 0.00004040464061962909",
            "extra": "mean: 829.276642335609 usec\nrounds: 1370"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1093.5856695403077,
            "unit": "iter/sec",
            "range": "stddev: 0.000012624025908623062",
            "extra": "mean: 914.4231017770683 usec\nrounds: 1238"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "251a1b1e23dbf23eedccee5ff7f88cb87b14b536",
          "message": "Merge pull request #860 from TeoZosa/dependabot/pip/dot-github/workflows/poetry-1.4.1",
          "timestamp": "2023-03-20T18:49:48Z",
          "tree_id": "680c7412d87961f2d941a61b7eb8f98ea29fb0f6",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/251a1b1e23dbf23eedccee5ff7f88cb87b14b536"
        },
        "date": 1679338321924,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 243.27795649643042,
            "unit": "iter/sec",
            "range": "stddev: 0.00009204993474272033",
            "extra": "mean: 4.110524497991962 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 330.31244038739993,
            "unit": "iter/sec",
            "range": "stddev: 0.000013285723924705494",
            "extra": "mean: 3.0274366863905313 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 486.4809203553383,
            "unit": "iter/sec",
            "range": "stddev: 0.000011081065146752733",
            "extra": "mean: 2.05557907444669 msec\nrounds: 497"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 935.7502201937311,
            "unit": "iter/sec",
            "range": "stddev: 0.000010973780416150323",
            "extra": "mean: 1.0686612499999915 msec\nrounds: 960"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 231.73796372739093,
            "unit": "iter/sec",
            "range": "stddev: 0.000012770464993090549",
            "extra": "mean: 4.315218723404197 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 303.0358008848776,
            "unit": "iter/sec",
            "range": "stddev: 0.0000645001299303669",
            "extra": "mean: 3.2999401294499098 msec\nrounds: 309"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 473.57061589044275,
            "unit": "iter/sec",
            "range": "stddev: 0.000010966787305365929",
            "extra": "mean: 2.1116174999999218 msec\nrounds: 480"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 858.5747152962018,
            "unit": "iter/sec",
            "range": "stddev: 0.000012037636127870172",
            "extra": "mean: 1.1647209988649707 msec\nrounds: 881"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.25273288930983,
            "unit": "iter/sec",
            "range": "stddev: 0.00012360334388298425",
            "extra": "mean: 49.37605238095242 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.922090320066,
            "unit": "iter/sec",
            "range": "stddev: 0.00014513132378260305",
            "extra": "mean: 47.796371428571746 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 345.9015129222741,
            "unit": "iter/sec",
            "range": "stddev: 0.000012390970550103052",
            "extra": "mean: 2.890996317280362 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 585.1709997513669,
            "unit": "iter/sec",
            "range": "stddev: 0.000013063843951370008",
            "extra": "mean: 1.708902184873976 msec\nrounds: 595"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1207.7530564517401,
            "unit": "iter/sec",
            "range": "stddev: 0.000041709091613499695",
            "extra": "mean: 827.9838288614245 usec\nrounds: 1379"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1103.2471590497228,
            "unit": "iter/sec",
            "range": "stddev: 0.000012514422038406185",
            "extra": "mean: 906.4152051489041 usec\nrounds: 1243"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0296a46cf23af382dcad1b3adc04506d9d8ab21b",
          "message": "Merge pull request #861 from TeoZosa/dependabot/pip/docs/importlib-metadata-6.1.0",
          "timestamp": "2023-03-20T19:02:50Z",
          "tree_id": "1b27375fad0e8cc045aa62893606ba27f81a47ec",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/0296a46cf23af382dcad1b3adc04506d9d8ab21b"
        },
        "date": 1679340166117,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 245.5700494483416,
            "unit": "iter/sec",
            "range": "stddev: 0.000020101631617003324",
            "extra": "mean: 4.072157831325279 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 327.9260027167088,
            "unit": "iter/sec",
            "range": "stddev: 0.000016692875019107175",
            "extra": "mean: 3.049468452380971 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 488.20516057510855,
            "unit": "iter/sec",
            "range": "stddev: 0.000011562882791777818",
            "extra": "mean: 2.048319191919221 msec\nrounds: 495"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 936.3534403759578,
            "unit": "iter/sec",
            "range": "stddev: 0.000010645748022807346",
            "extra": "mean: 1.0679727941176649 msec\nrounds: 952"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 232.26602175447556,
            "unit": "iter/sec",
            "range": "stddev: 0.000019569869883296155",
            "extra": "mean: 4.305408050847329 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 303.74867282540293,
            "unit": "iter/sec",
            "range": "stddev: 0.000014334741020325647",
            "extra": "mean: 3.292195454545435 msec\nrounds: 308"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 470.43091766075435,
            "unit": "iter/sec",
            "range": "stddev: 0.000013118317828745346",
            "extra": "mean: 2.1257106250000732 msec\nrounds: 480"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 860.3769473649155,
            "unit": "iter/sec",
            "range": "stddev: 0.00001072407056541481",
            "extra": "mean: 1.1622812571428247 msec\nrounds: 875"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.262683499103037,
            "unit": "iter/sec",
            "range": "stddev: 0.00012156201493982807",
            "extra": "mean: 49.35180476190465 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.047575940656426,
            "unit": "iter/sec",
            "range": "stddev: 0.00016976795605974792",
            "extra": "mean: 47.51140952380915 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 347.04392799458265,
            "unit": "iter/sec",
            "range": "stddev: 0.000011873178465851946",
            "extra": "mean: 2.8814796033994003 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 582.89138941419,
            "unit": "iter/sec",
            "range": "stddev: 0.000010604040594848803",
            "extra": "mean: 1.7155854729729445 msec\nrounds: 592"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1197.0826587327826,
            "unit": "iter/sec",
            "range": "stddev: 0.00004149325802050896",
            "extra": "mean: 835.36420204983 usec\nrounds: 1366"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1091.4142464105053,
            "unit": "iter/sec",
            "range": "stddev: 0.000012400109716488693",
            "extra": "mean: 916.2423921887105 usec\nrounds: 1229"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "561d947f208d21d108a43bd8910c20f7d969729b",
          "message": "Merge pull request #862 from TeoZosa/dependabot/pip/docs/poetry-1.4.1",
          "timestamp": "2023-03-21T15:16:13Z",
          "tree_id": "bb49a640001af5c157f490ef6f1e5798861587ae",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/561d947f208d21d108a43bd8910c20f7d969729b"
        },
        "date": 1679411888842,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 247.6519867484393,
            "unit": "iter/sec",
            "range": "stddev: 0.000014751799449159766",
            "extra": "mean: 4.037924400000001 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 332.61787879795907,
            "unit": "iter/sec",
            "range": "stddev: 0.000015763995706883872",
            "extra": "mean: 3.006452941176462 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 489.76388552059785,
            "unit": "iter/sec",
            "range": "stddev: 0.000012434702836726481",
            "extra": "mean: 2.041800201207247 msec\nrounds: 497"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 955.5721914124447,
            "unit": "iter/sec",
            "range": "stddev: 0.000011977529555109235",
            "extra": "mean: 1.0464934088568296 msec\nrounds: 971"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 233.57243496888734,
            "unit": "iter/sec",
            "range": "stddev: 0.00001317372407976401",
            "extra": "mean: 4.28132711864396 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 305.0012807092645,
            "unit": "iter/sec",
            "range": "stddev: 0.000014447545415444551",
            "extra": "mean: 3.2786747572815185 msec\nrounds: 309"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 472.2063669979687,
            "unit": "iter/sec",
            "range": "stddev: 0.00001134956287136998",
            "extra": "mean: 2.117718162839388 msec\nrounds: 479"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 866.4606350331221,
            "unit": "iter/sec",
            "range": "stddev: 0.000010338430919240136",
            "extra": "mean: 1.1541205215419543 msec\nrounds: 882"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.036934080590985,
            "unit": "iter/sec",
            "range": "stddev: 0.00008755981579525866",
            "extra": "mean: 49.90783499999942 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.000506112197698,
            "unit": "iter/sec",
            "range": "stddev: 0.0001477099759658129",
            "extra": "mean: 47.61789999999911 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 348.06571599041655,
            "unit": "iter/sec",
            "range": "stddev: 0.000016738374445762135",
            "extra": "mean: 2.8730206798865923 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 591.5332335063835,
            "unit": "iter/sec",
            "range": "stddev: 0.00001274689588399899",
            "extra": "mean: 1.6905220930232125 msec\nrounds: 602"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1208.0521913739767,
            "unit": "iter/sec",
            "range": "stddev: 0.00004137729702811457",
            "extra": "mean: 827.7788055354225 usec\nrounds: 1373"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1094.726304264016,
            "unit": "iter/sec",
            "range": "stddev: 0.00001323309207486693",
            "extra": "mean: 913.4703314471824 usec\nrounds: 1237"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9876eebbbcd07d8f19425ee919012dff10031aa2",
          "message": "Merge pull request #864 from TeoZosa/dependabot/pip/docs/orjson-3.8.8",
          "timestamp": "2023-03-21T17:59:12Z",
          "tree_id": "0655ed05b14d82d08cfb041b2ad340983acb3d88",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/9876eebbbcd07d8f19425ee919012dff10031aa2"
        },
        "date": 1679421699183,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 221.20760362964626,
            "unit": "iter/sec",
            "range": "stddev: 0.000026350418388768855",
            "extra": "mean: 4.520640265486696 msec\nrounds: 226"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 292.3961115634447,
            "unit": "iter/sec",
            "range": "stddev: 0.000015398454396558253",
            "extra": "mean: 3.4200181208053375 msec\nrounds: 298"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 420.5847783178465,
            "unit": "iter/sec",
            "range": "stddev: 0.00001444541446690708",
            "extra": "mean: 2.3776419203746713 msec\nrounds: 427"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 808.7447253629273,
            "unit": "iter/sec",
            "range": "stddev: 0.00000929424964027992",
            "extra": "mean: 1.2364841075794915 msec\nrounds: 818"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 204.7120966652467,
            "unit": "iter/sec",
            "range": "stddev: 0.000020418016573138325",
            "extra": "mean: 4.884909178744037 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 264.4116170625199,
            "unit": "iter/sec",
            "range": "stddev: 0.00001576434535223606",
            "extra": "mean: 3.781982089552257 msec\nrounds: 268"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 405.35463872189325,
            "unit": "iter/sec",
            "range": "stddev: 0.000015517569430989514",
            "extra": "mean: 2.466975592417193 msec\nrounds: 422"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 727.9482718774342,
            "unit": "iter/sec",
            "range": "stddev: 0.000009415891002690749",
            "extra": "mean: 1.3737239837398385 msec\nrounds: 738"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 15.926893964015804,
            "unit": "iter/sec",
            "range": "stddev: 0.00007061263549589256",
            "extra": "mean: 62.78688124999987 msec\nrounds: 16"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 16.55223393330647,
            "unit": "iter/sec",
            "range": "stddev: 0.0001351867387651715",
            "extra": "mean: 60.414805882352596 msec\nrounds: 17"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 297.2133200381225,
            "unit": "iter/sec",
            "range": "stddev: 0.000022444353263465735",
            "extra": "mean: 3.364586754966882 msec\nrounds: 302"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 479.0286259443295,
            "unit": "iter/sec",
            "range": "stddev: 0.000015099789636064925",
            "extra": "mean: 2.087557915831559 msec\nrounds: 499"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 994.358379221763,
            "unit": "iter/sec",
            "range": "stddev: 0.00004169336830675526",
            "extra": "mean: 1.0056736292428614 msec\nrounds: 1149"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 889.2620661316561,
            "unit": "iter/sec",
            "range": "stddev: 0.000019607967024639998",
            "extra": "mean: 1.1245278957530043 msec\nrounds: 1036"
          }
        ]
      }
    ]
  }
}