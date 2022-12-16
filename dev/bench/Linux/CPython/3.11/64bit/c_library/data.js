window.BENCHMARK_DATA = {
  "lastUpdate": 1671168275827,
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
      }
    ]
  }
}