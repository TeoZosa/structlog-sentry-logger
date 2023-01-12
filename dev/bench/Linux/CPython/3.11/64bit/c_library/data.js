window.BENCHMARK_DATA = {
  "lastUpdate": 1673539915912,
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
      }
    ]
  }
}