window.BENCHMARK_DATA = {
  "lastUpdate": 1671541381966,
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
      }
    ]
  }
}