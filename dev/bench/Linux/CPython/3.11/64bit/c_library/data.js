window.BENCHMARK_DATA = {
  "lastUpdate": 1671361931417,
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
      }
    ]
  }
}