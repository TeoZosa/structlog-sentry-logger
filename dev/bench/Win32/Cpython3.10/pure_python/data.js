window.BENCHMARK_DATA = {
  "lastUpdate": 1648770736934,
  "repoUrl": "https://github.com/TeoZosa/structlog-sentry-logger",
  "entries": {
    "Benchmark": [
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
          "id": "5493325a08df9080a9004af4aff59d62b4a40108",
          "message": "Merge pull request #472 from TeoZosa/ci/add-py310-support\n\n🚀 Add Python 3.10 support",
          "timestamp": "2022-03-22T20:39:19Z",
          "tree_id": "7cbb986ac7d1edef643a9277cf4ab0163249570c"
        },
        "date": 1647982144726,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 142.53897550111358,
            "unit": "iter/sec",
            "range": "stddev: 0.00004941058844013097",
            "extra": "mean: 7.015625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 183.3810888252149,
            "unit": "iter/sec",
            "range": "stddev: 0.00008869472065586645",
            "extra": "mean: 5.453125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 374.2690058479533,
            "unit": "iter/sec",
            "range": "stddev: 0.00029874229999374974",
            "extra": "mean: 2.671875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 809.9115044247787,
            "unit": "iter/sec",
            "range": "stddev: 0.00005278036402312586",
            "extra": "mean: 1.2347027972027973 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 135.0210970464135,
            "unit": "iter/sec",
            "range": "stddev: 0.00008068715304598792",
            "extra": "mean: 7.40625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 175.34246575342465,
            "unit": "iter/sec",
            "range": "stddev: 0.00008235098073355162",
            "extra": "mean: 5.703125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 374.2690058479533,
            "unit": "iter/sec",
            "range": "stddev: 0.00004941058844013083",
            "extra": "mean: 2.671875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 747.6635514018693,
            "unit": "iter/sec",
            "range": "stddev: 0.00010290907529357057",
            "extra": "mean: 1.3375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.446952595936796,
            "unit": "iter/sec",
            "range": "stddev: 0.0007547592055306972",
            "extra": "mean: 69.21875000000001 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 15.058823529411764,
            "unit": "iter/sec",
            "range": "stddev: 0.0011048543456039798",
            "extra": "mean: 66.40625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 284.4444444444444,
            "unit": "iter/sec",
            "range": "stddev: 0.00008235098073355162",
            "extra": "mean: 3.515625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 503.93700787401576,
            "unit": "iter/sec",
            "range": "stddev: 0.00007547592055307006",
            "extra": "mean: 1.984375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1422.2222222222226,
            "unit": "iter/sec",
            "range": "stddev: 0.000012757759076995732",
            "extra": "mean: 703.125 usec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1230.7692307692307,
            "unit": "iter/sec",
            "range": "stddev: 0.000040343576522993906",
            "extra": "mean: 812.5000000000001 usec\nrounds: 10"
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
          "id": "c66306bfef5e7f33528367159760ead762a87a63",
          "message": ":bookmark: Bump version number to `0.17.4`",
          "timestamp": "2022-03-22T21:18:08Z",
          "tree_id": "4bbf1f0cae4fc4d4ae40425118b939cf456324a9"
        },
        "date": 1647984319592,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 142.53897550111358,
            "unit": "iter/sec",
            "range": "stddev: 0.00004941058844013097",
            "extra": "mean: 7.015625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 181.3031161473088,
            "unit": "iter/sec",
            "range": "stddev: 0.0001054607121422738",
            "extra": "mean: 5.515625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 395.0617283950618,
            "unit": "iter/sec",
            "range": "stddev: 0.0000658807845868413",
            "extra": "mean: 2.53125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 832.0000000000001,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.201923076923077 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 135.3065539112051,
            "unit": "iter/sec",
            "range": "stddev: 0.00010546071214227398",
            "extra": "mean: 7.390625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 175.34246575342465,
            "unit": "iter/sec",
            "range": "stddev: 0.00008235098073355162",
            "extra": "mean: 5.703125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 372.093023255814,
            "unit": "iter/sec",
            "range": "stddev: 0.00006588078458684112",
            "extra": "mean: 2.6875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 747.6635514018693,
            "unit": "iter/sec",
            "range": "stddev: 0.00006038073644245594",
            "extra": "mean: 1.3375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.883720930232558,
            "unit": "iter/sec",
            "range": "stddev: 0.0007365695637359876",
            "extra": "mean: 67.1875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 15.496368038740917,
            "unit": "iter/sec",
            "range": "stddev: 0.0007547592055307039",
            "extra": "mean: 64.53125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 289.59276018099547,
            "unit": "iter/sec",
            "range": "stddev: 0.00004941058844013097",
            "extra": "mean: 3.453125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 516.1290322580644,
            "unit": "iter/sec",
            "range": "stddev: 0.00008068715304598792",
            "extra": "mean: 1.9375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1422.2222222222226,
            "unit": "iter/sec",
            "range": "stddev: 0.000007365695637359876",
            "extra": "mean: 703.125 usec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1242.7184466019417,
            "unit": "iter/sec",
            "range": "stddev: 0.000037737960276534974",
            "extra": "mean: 804.6875000000001 usec\nrounds: 10"
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
          "id": "47a9426392fe50bc6f0ac78abba8b563823ebe2d",
          "message": "Merge pull request #475 from TeoZosa/dependabot/pip/python-dotenv-0.20.0",
          "timestamp": "2022-03-25T14:49:47Z",
          "tree_id": "76c9f6e593a60fca0d5cb1e66e65d4a16f66e046"
        },
        "date": 1648221081896,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 148.83720930232556,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.71875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 183.90804597701148,
            "unit": "iter/sec",
            "range": "stddev: 0.00009882117688026157",
            "extra": "mean: 5.4375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 376.4705882352942,
            "unit": "iter/sec",
            "range": "stddev: 0.00007365695637359866",
            "extra": "mean: 2.65625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 817.1428571428572,
            "unit": "iter/sec",
            "range": "stddev: 0.0000460704787320568",
            "extra": "mean: 1.223776223776224 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 140.65934065934067,
            "unit": "iter/sec",
            "range": "stddev: 0.00008235098073355162",
            "extra": "mean: 7.109375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 176.79558011049724,
            "unit": "iter/sec",
            "range": "stddev: 0.00009882117688026194",
            "extra": "mean: 5.65625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 359.5505617977529,
            "unit": "iter/sec",
            "range": "stddev: 0.00006588078458684112",
            "extra": "mean: 2.78125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 727.2727272727275,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.953271028037385,
            "unit": "iter/sec",
            "range": "stddev: 0.00065880784586841",
            "extra": "mean: 66.875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 15.496368038740918,
            "unit": "iter/sec",
            "range": "stddev: 0.0007547592055307039",
            "extra": "mean: 64.53125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 289.59276018099547,
            "unit": "iter/sec",
            "range": "stddev: 0.00004941058844013097",
            "extra": "mean: 3.453125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 467.1532846715328,
            "unit": "iter/sec",
            "range": "stddev: 0.00032148540337522844",
            "extra": "mean: 2.140625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1350.2109704641352,
            "unit": "iter/sec",
            "range": "stddev: 0.000008068715304598793",
            "extra": "mean: 740.625 usec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1196.2616822429907,
            "unit": "iter/sec",
            "range": "stddev: 0.000037737960276534974",
            "extra": "mean: 835.9375 usec\nrounds: 10"
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
          "id": "d1d8ba4fa07067edf22bda4e4b8a86b699d73a5c",
          "message": "Merge pull request #477 from TeoZosa/dependabot/pip/pylint-2.13.2",
          "timestamp": "2022-03-28T14:52:21Z",
          "tree_id": "fc0eb5a24ee1b51ce1ff7abcbd5d00571f2a6694"
        },
        "date": 1648484893225,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 148.491879350348,
            "unit": "iter/sec",
            "range": "stddev: 0.00008869472065586674",
            "extra": "mean: 6.734375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 184.97109826589596,
            "unit": "iter/sec",
            "range": "stddev: 0.00008068715304598747",
            "extra": "mean: 5.40625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 376.4705882352942,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.65625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 792.0792079207921,
            "unit": "iter/sec",
            "range": "stddev: 0.00003952847075210471",
            "extra": "mean: 1.2625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 141.90687361419066,
            "unit": "iter/sec",
            "range": "stddev: 0.00004941058844013097",
            "extra": "mean: 7.046875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 177.7777777777778,
            "unit": "iter/sec",
            "range": "stddev: 0.00010416666666666675",
            "extra": "mean: 5.625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 363.63636363636374,
            "unit": "iter/sec",
            "range": "stddev: 0.0000806871530459877",
            "extra": "mean: 2.75 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 683.7606837606838,
            "unit": "iter/sec",
            "range": "stddev: 0.00008436856971381913",
            "extra": "mean: 1.4625000000000001 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 15.058823529411763,
            "unit": "iter/sec",
            "range": "stddev: 0.0018414239093399681",
            "extra": "mean: 66.40625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 15.238095238095237,
            "unit": "iter/sec",
            "range": "stddev: 0.0023292374765622836",
            "extra": "mean: 65.625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 292.23744292237444,
            "unit": "iter/sec",
            "range": "stddev: 0.00018706546870904137",
            "extra": "mean: 3.421875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 516.1290322580646,
            "unit": "iter/sec",
            "range": "stddev: 0.00010925092168439089",
            "extra": "mean: 1.9375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1370.4496788008569,
            "unit": "iter/sec",
            "range": "stddev: 0.000010546071214227398",
            "extra": "mean: 729.6875 usec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1174.3119266055046,
            "unit": "iter/sec",
            "range": "stddev: 0.00002470529422006545",
            "extra": "mean: 851.5625 usec\nrounds: 10"
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
          "id": "097533b8084df114473f6349f70824b54d429de4",
          "message": "Merge pull request #478 from TeoZosa/dependabot/pip/sphinx-4.5.0",
          "timestamp": "2022-03-28T15:36:53Z",
          "tree_id": "9f0291af7a09c2fe2b924256eef0466a67f42a33"
        },
        "date": 1648486381787,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 146.1187214611872,
            "unit": "iter/sec",
            "range": "stddev: 0.00021850184336878154",
            "extra": "mean: 6.84375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 184.43804034582135,
            "unit": "iter/sec",
            "range": "stddev: 0.00012863634411696296",
            "extra": "mean: 5.421875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 380.952380952381,
            "unit": "iter/sec",
            "range": "stddev: 0.0000658807845868413",
            "extra": "mean: 2.625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 782.2222222222222,
            "unit": "iter/sec",
            "range": "stddev: 0.0001461422104293333",
            "extra": "mean: 1.2784090909090908 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 141.28035320088298,
            "unit": "iter/sec",
            "range": "stddev: 0.00020898336091394658",
            "extra": "mean: 7.078125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 174.86338797814207,
            "unit": "iter/sec",
            "range": "stddev: 0.00008068715304598792",
            "extra": "mean: 5.71875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 359.5505617977529,
            "unit": "iter/sec",
            "range": "stddev: 0.00009882117688026176",
            "extra": "mean: 2.78125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 716.8,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.3950892857142858 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.67889908256881,
            "unit": "iter/sec",
            "range": "stddev: 0.001976423537605239",
            "extra": "mean: 68.125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 15.496368038740918,
            "unit": "iter/sec",
            "range": "stddev: 0.0010546071214227416",
            "extra": "mean: 64.53125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 284.4444444444444,
            "unit": "iter/sec",
            "range": "stddev: 0.00008235098073355162",
            "extra": "mean: 3.515625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 503.93700787401576,
            "unit": "iter/sec",
            "range": "stddev: 0.00007547592055307006",
            "extra": "mean: 1.984375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1355.9322033898306,
            "unit": "iter/sec",
            "range": "stddev: 0.000006588078458684129",
            "extra": "mean: 737.5 usec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1163.6363636363635,
            "unit": "iter/sec",
            "range": "stddev: 0.00003682847818679933",
            "extra": "mean: 859.375 usec\nrounds: 10"
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
          "id": "69ccb94a847cb22d144b8e3b156d890a587e14db",
          "message": "Merge pull request #479 from TeoZosa/dependabot/pip/sphinxcontrib-confluencebuilder-1.8.0",
          "timestamp": "2022-03-28T16:11:43Z",
          "tree_id": "f132adca5011305c7f5c8acb46a5cb14cb10b4a2"
        },
        "date": 1648486968121,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 147.1264367816092,
            "unit": "iter/sec",
            "range": "stddev: 0.00008235098073355162",
            "extra": "mean: 6.796875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 183.38108882521487,
            "unit": "iter/sec",
            "range": "stddev: 0.0000494105884401307",
            "extra": "mean: 5.453125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 374.2690058479533,
            "unit": "iter/sec",
            "range": "stddev: 0.0000886947206558666",
            "extra": "mean: 2.671875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 788.9655172413793,
            "unit": "iter/sec",
            "range": "stddev: 0.00005642458254964185",
            "extra": "mean: 1.2674825174825175 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 138.82863340563992,
            "unit": "iter/sec",
            "range": "stddev: 0.00011529137302697192",
            "extra": "mean: 7.203125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 177.28531855955683,
            "unit": "iter/sec",
            "range": "stddev: 0.00004941058844013097",
            "extra": "mean: 5.640625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 361.5819209039549,
            "unit": "iter/sec",
            "range": "stddev: 0.00007547592055306985",
            "extra": "mean: 2.765625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 714.2857142857144,
            "unit": "iter/sec",
            "range": "stddev: 0.00005270462766947303",
            "extra": "mean: 1.4 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.780600461893766,
            "unit": "iter/sec",
            "range": "stddev: 0.0010546071214227416",
            "extra": "mean: 67.65625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 15.347721822541965,
            "unit": "iter/sec",
            "range": "stddev: 0.0007547592055307039",
            "extra": "mean: 65.15625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 281.9383259911894,
            "unit": "iter/sec",
            "range": "stddev: 0.00007547592055307006",
            "extra": "mean: 3.546875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 503.93700787401576,
            "unit": "iter/sec",
            "range": "stddev: 0.00007547592055307006",
            "extra": "mean: 1.984375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1347.368421052632,
            "unit": "iter/sec",
            "range": "stddev: 0.000011048543456039815",
            "extra": "mean: 742.1875 usec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1207.5471698113206,
            "unit": "iter/sec",
            "range": "stddev: 0.000040343576522993906",
            "extra": "mean: 828.125 usec\nrounds: 10"
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
          "id": "6737c84aa532f5033982cfab767f64fd57b18230",
          "message": ":arrow_up: Auto-update pre-commit hooks",
          "timestamp": "2022-03-30T01:35:57Z",
          "tree_id": "cd230034bed97b16b1125695feeb9eed3de0758b"
        },
        "date": 1648605650242,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 142.2222222222222,
            "unit": "iter/sec",
            "range": "stddev: 0.00010416666666666675",
            "extra": "mean: 7.03125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 181.8181818181818,
            "unit": "iter/sec",
            "range": "stddev: 0.00009882117688026176",
            "extra": "mean: 5.5 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 392.63803680981596,
            "unit": "iter/sec",
            "range": "stddev: 0.00010546071214227398",
            "extra": "mean: 2.546875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 817.1428571428572,
            "unit": "iter/sec",
            "range": "stddev: 0.0000460704787320568",
            "extra": "mean: 1.223776223776224 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 134.45378151260505,
            "unit": "iter/sec",
            "range": "stddev: 0.00008068715304598792",
            "extra": "mean: 7.4375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 172.97297297297297,
            "unit": "iter/sec",
            "range": "stddev: 0.00010416666666666675",
            "extra": "mean: 5.78125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 372.093023255814,
            "unit": "iter/sec",
            "range": "stddev: 0.00006588078458684112",
            "extra": "mean: 2.6875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 747.6635514018693,
            "unit": "iter/sec",
            "range": "stddev: 0.00006038073644245594",
            "extra": "mean: 1.3375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.545454545454549,
            "unit": "iter/sec",
            "range": "stddev: 0.0010416666666666675",
            "extra": "mean: 68.75 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 15.130023640661937,
            "unit": "iter/sec",
            "range": "stddev: 0.0007547592055306972",
            "extra": "mean: 66.09375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 289.59276018099547,
            "unit": "iter/sec",
            "range": "stddev: 0.00004941058844013097",
            "extra": "mean: 3.453125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 516.1290322580646,
            "unit": "iter/sec",
            "range": "stddev: 0.00008068715304598792",
            "extra": "mean: 1.9375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1425.3897550111362,
            "unit": "iter/sec",
            "range": "stddev: 0.000008869472065586675",
            "extra": "mean: 701.5624999999999 usec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1207.5471698113206,
            "unit": "iter/sec",
            "range": "stddev: 0.000040343576522993906",
            "extra": "mean: 828.125 usec\nrounds: 10"
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
          "id": "d3469794755a31c2696d4fd03de4affb5d26a183",
          "message": "Merge pull request #481 from TeoZosa/dependabot/pip/pylint-2.13.3",
          "timestamp": "2022-03-30T02:32:14Z",
          "tree_id": "606f53627726dad80da32e23cc74f61664f6a686"
        },
        "date": 1648608155398,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 148.14814814814815,
            "unit": "iter/sec",
            "range": "stddev: 0.00009882117688026194",
            "extra": "mean: 6.75 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 185.5072463768116,
            "unit": "iter/sec",
            "range": "stddev: 0.00008235098073355116",
            "extra": "mean: 5.390625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 378.69822485207106,
            "unit": "iter/sec",
            "range": "stddev: 0.00004941058844013097",
            "extra": "mean: 2.640625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 802.8070175438597,
            "unit": "iter/sec",
            "range": "stddev: 0.00005642458254964185",
            "extra": "mean: 1.2456293706293708 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 140.04376367614879,
            "unit": "iter/sec",
            "range": "stddev: 0.00007547592055307006",
            "extra": "mean: 7.140625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 175.34246575342468,
            "unit": "iter/sec",
            "range": "stddev: 0.00011048543456039815",
            "extra": "mean: 5.703125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 361.5819209039548,
            "unit": "iter/sec",
            "range": "stddev: 0.00007547592055306985",
            "extra": "mean: 2.765625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 720.7207207207209,
            "unit": "iter/sec",
            "range": "stddev: 0.000039528470752104776",
            "extra": "mean: 1.3874999999999997 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.918414918414921,
            "unit": "iter/sec",
            "range": "stddev: 0.0004941058844013075",
            "extra": "mean: 67.03125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 15.42168674698795,
            "unit": "iter/sec",
            "range": "stddev: 0.001104854345603983",
            "extra": "mean: 64.84374999999999 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 285.71428571428567,
            "unit": "iter/sec",
            "range": "stddev: 0.00008068715304598792",
            "extra": "mean: 3.5 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 507.936507936508,
            "unit": "iter/sec",
            "range": "stddev: 0.00008068715304598792",
            "extra": "mean: 1.96875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1370.4496788008569,
            "unit": "iter/sec",
            "range": "stddev: 0.000010546071214227398",
            "extra": "mean: 729.6875 usec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1142.8571428571427,
            "unit": "iter/sec",
            "range": "stddev: 0.0000329403922934206",
            "extra": "mean: 875 usec\nrounds: 10"
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
          "id": "88cb9ce56e1a1b3c1b9de28ae63af134eff121c1",
          "message": "Merge pull request #482 from TeoZosa/dependabot/pip/pylint-2.13.4",
          "timestamp": "2022-03-31T13:33:50Z",
          "tree_id": "7b282787a6efcee7886052d4f3e84a4bcceb98a1"
        },
        "date": 1648734730609,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 143.1767337807606,
            "unit": "iter/sec",
            "range": "stddev: 0.00007547592055307006",
            "extra": "mean: 6.984375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 182.33618233618233,
            "unit": "iter/sec",
            "range": "stddev: 0.00008869472065586657",
            "extra": "mean: 5.484375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 392.63803680981596,
            "unit": "iter/sec",
            "range": "stddev: 0.00007547592055307006",
            "extra": "mean: 2.546875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 832.0000000000001,
            "unit": "iter/sec",
            "range": "stddev: 0.000051508361100418666",
            "extra": "mean: 1.201923076923077 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 133.89121338912136,
            "unit": "iter/sec",
            "range": "stddev: 0.0000658807845868413",
            "extra": "mean: 7.46875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 173.44173441734418,
            "unit": "iter/sec",
            "range": "stddev: 0.00008869472065586674",
            "extra": "mean: 5.765625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 376.4705882352942,
            "unit": "iter/sec",
            "range": "stddev: 0.00007365695637359866",
            "extra": "mean: 2.65625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 754.7169811320756,
            "unit": "iter/sec",
            "range": "stddev: 0.00006454972243679022",
            "extra": "mean: 1.325 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.814814814814817,
            "unit": "iter/sec",
            "range": "stddev: 0.0014358384116760687",
            "extra": "mean: 67.5 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 15.347721822541965,
            "unit": "iter/sec",
            "range": "stddev: 0.0007547592055307039",
            "extra": "mean: 65.15625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 284.4444444444444,
            "unit": "iter/sec",
            "range": "stddev: 0.00008235098073355162",
            "extra": "mean: 3.515625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 516.1290322580644,
            "unit": "iter/sec",
            "range": "stddev: 0.00008068715304598792",
            "extra": "mean: 1.9375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1434.9775784753367,
            "unit": "iter/sec",
            "range": "stddev: 0.000010925092168439088",
            "extra": "mean: 696.875 usec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1242.7184466019417,
            "unit": "iter/sec",
            "range": "stddev: 0.000037737960276534974",
            "extra": "mean: 804.6875000000001 usec\nrounds: 10"
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
          "id": "52c41779ef071a620510015333cfa37477586514",
          "message": "Merge pull request #476 from TeoZosa/dependabot/pip/xdoctest-1.0.0\n\n⬆️ Bump xdoctest from 0.15.10 to 1.0.0",
          "timestamp": "2022-03-31T22:18:00Z",
          "tree_id": "bae1bbe388c703b3a9445760b70cfcf73b3d8278"
        },
        "date": 1648765623478,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 148.83720930232556,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.71875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 184.97109826589596,
            "unit": "iter/sec",
            "range": "stddev: 0.00008068715304598747",
            "extra": "mean: 5.40625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 383.2335329341318,
            "unit": "iter/sec",
            "range": "stddev: 0.00007547592055307006",
            "extra": "mean: 2.609375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 817.1428571428572,
            "unit": "iter/sec",
            "range": "stddev: 0.0000460704787320568",
            "extra": "mean: 1.223776223776224 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 139.1304347826087,
            "unit": "iter/sec",
            "range": "stddev: 0.00007365695637359856",
            "extra": "mean: 7.1875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 174.38692098092645,
            "unit": "iter/sec",
            "range": "stddev: 0.00010546071214227398",
            "extra": "mean: 5.734375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 359.5505617977529,
            "unit": "iter/sec",
            "range": "stddev: 0.00012325166214790864",
            "extra": "mean: 2.78125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 727.2727272727275,
            "unit": "iter/sec",
            "range": "stddev: 0.00008333333333333334",
            "extra": "mean: 1.375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.91841491841492,
            "unit": "iter/sec",
            "range": "stddev: 0.0008869472065586666",
            "extra": "mean: 67.03125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 15.496368038740917,
            "unit": "iter/sec",
            "range": "stddev: 0.0007547592055307039",
            "extra": "mean: 64.53125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 286.9955156950672,
            "unit": "iter/sec",
            "range": "stddev: 0.00007547592055307006",
            "extra": "mean: 3.484375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 524.5901639344262,
            "unit": "iter/sec",
            "range": "stddev: 0.0000658807845868413",
            "extra": "mean: 1.90625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1358.811040339703,
            "unit": "iter/sec",
            "range": "stddev: 0.000008869472065586675",
            "extra": "mean: 735.9375 usec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1185.1851851851852,
            "unit": "iter/sec",
            "range": "stddev: 0.0000329403922934206",
            "extra": "mean: 843.75 usec\nrounds: 10"
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
          "id": "6de7c1554b72ef904e2de836358946b4357f6199",
          "message": ":rewind: Only push-trigger CI job on master\n\nCI has gotten fairly expensive, redundant runs slow down CI pipelines\nfor all concurrent users which slows down development cadence.\n\nReverts 24a56b6afb135be630c7d2c8c046fc79f6f9eeee.",
          "timestamp": "2022-03-31T22:38:04Z",
          "tree_id": "995c65d894aff6c30591110d1e9c4b1cf75cdffa"
        },
        "date": 1648767649777,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 148.491879350348,
            "unit": "iter/sec",
            "range": "stddev: 0.0001368117243392053",
            "extra": "mean: 6.734375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 182.85714285714286,
            "unit": "iter/sec",
            "range": "stddev: 0.00012757759076995694",
            "extra": "mean: 5.46875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 378.69822485207106,
            "unit": "iter/sec",
            "range": "stddev: 0.00004941058844013097",
            "extra": "mean: 2.640625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 802.8070175438597,
            "unit": "iter/sec",
            "range": "stddev: 0.00005642458254964185",
            "extra": "mean: 1.2456293706293708 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 140.35087719298244,
            "unit": "iter/sec",
            "range": "stddev: 0.00010925092168439069",
            "extra": "mean: 7.125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 175.34246575342465,
            "unit": "iter/sec",
            "range": "stddev: 0.00011048543456039815",
            "extra": "mean: 5.703125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 353.59116022099454,
            "unit": "iter/sec",
            "range": "stddev: 0.00011529137302697212",
            "extra": "mean: 2.828125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 727.2727272727275,
            "unit": "iter/sec",
            "range": "stddev: 0.00005892556509887896",
            "extra": "mean: 1.375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 15.058823529411764,
            "unit": "iter/sec",
            "range": "stddev: 0.0008235098073355125",
            "extra": "mean: 66.40625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 15.571776155717759,
            "unit": "iter/sec",
            "range": "stddev: 0.000494105884401312",
            "extra": "mean: 64.21874999999999 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 285.71428571428567,
            "unit": "iter/sec",
            "range": "stddev: 0.00008068715304598792",
            "extra": "mean: 3.5 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 516.1290322580644,
            "unit": "iter/sec",
            "range": "stddev: 0.00008068715304598792",
            "extra": "mean: 1.9375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1376.3440860215057,
            "unit": "iter/sec",
            "range": "stddev: 0.000011048543456039815",
            "extra": "mean: 726.5625 usec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1185.1851851851852,
            "unit": "iter/sec",
            "range": "stddev: 0.0000329403922934206",
            "extra": "mean: 843.75 usec\nrounds: 10"
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
          "id": "2057ecff40015f036a2659f489accf7fbf93bf38",
          "message": ":construction_worker: Only push-trigger CI job on master\n\nCI has gotten fairly expensive, redundant runs slow down CI pipelines\nfor all concurrent users which slows down development cadence.\n\nReverts 24a56b6afb135be630c7d2c8c046fc79f6f9eeee.",
          "timestamp": "2022-03-31T22:39:06Z",
          "tree_id": "995c65d894aff6c30591110d1e9c4b1cf75cdffa"
        },
        "date": 1648768592764,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 146.11872146118722,
            "unit": "iter/sec",
            "range": "stddev: 0.00012325166214790877",
            "extra": "mean: 6.84375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 177.7777777777778,
            "unit": "iter/sec",
            "range": "stddev: 0.0002946278254943947",
            "extra": "mean: 5.625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 376.4705882352942,
            "unit": "iter/sec",
            "range": "stddev: 0.00007365695637359866",
            "extra": "mean: 2.65625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 809.9115044247787,
            "unit": "iter/sec",
            "range": "stddev: 0.00005278036402312586",
            "extra": "mean: 1.2347027972027973 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 141.90687361419066,
            "unit": "iter/sec",
            "range": "stddev: 0.00004941058844013097",
            "extra": "mean: 7.046875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 174.38692098092642,
            "unit": "iter/sec",
            "range": "stddev: 0.00010546071214227398",
            "extra": "mean: 5.734375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 363.6363636363637,
            "unit": "iter/sec",
            "range": "stddev: 0.0000806871530459877",
            "extra": "mean: 2.75 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 733.9449541284406,
            "unit": "iter/sec",
            "range": "stddev: 0.00003952847075210471",
            "extra": "mean: 1.3625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.814814814814817,
            "unit": "iter/sec",
            "range": "stddev: 0.0006588078458684159",
            "extra": "mean: 67.5 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 15.165876777251183,
            "unit": "iter/sec",
            "range": "stddev: 0.0012325166214790882",
            "extra": "mean: 65.9375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 280.7017543859649,
            "unit": "iter/sec",
            "range": "stddev: 0.0000658807845868413",
            "extra": "mean: 3.5625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 500.00000000000006,
            "unit": "iter/sec",
            "range": "stddev: 0.0000658807845868413",
            "extra": "mean: 2 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1364.6055437100215,
            "unit": "iter/sec",
            "range": "stddev: 0.000011529137302697226",
            "extra": "mean: 732.8125 usec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1196.2616822429907,
            "unit": "iter/sec",
            "range": "stddev: 0.000037737960276534974",
            "extra": "mean: 835.9375 usec\nrounds: 10"
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
          "id": "d9f3b993432075dc1a154f5184a442dbeda48fef",
          "message": ":construction_worker: Restrict job CI jobs to trunk pushes & PRs\n\nCI has gotten fairly expensive, redundant runs slow down CI pipelines\nfor all concurrent users which slows down development cadence in\ngeneral (even for a one-man team with only Dependabot updates).\n\nReverts:\n- 042f0d81968505024e25f6ce047af3a5628f36d5\n- 6fb732b27234875e033857e11474816550f67d81\n- 24a56b6afb135be630c7d2c8c046fc79f6f9eeee\n- a28ff70c3b73f406cbfc92d5c3b06e2232a4cc80\n- e9328e969e69abe1d3a590a7031e3981b1ead8a5\n- 3f2ce37baca3510a175d7e3537f5c7de20729efe\n- bbaefaee2af60b92f9e67a91037df6d1b0ea9883\n- 3919b79fbefdde2ff81ecf5ea9c3c6f60e81599b",
          "timestamp": "2022-03-31T23:34:27Z",
          "tree_id": "0dd96960a0428c4ecc4c50cb79b149edd6c0602d"
        },
        "date": 1648770731949,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 144.79638009049773,
            "unit": "iter/sec",
            "range": "stddev: 0.0000658807845868413",
            "extra": "mean: 6.90625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 183.38108882521487,
            "unit": "iter/sec",
            "range": "stddev: 0.00008869472065586645",
            "extra": "mean: 5.453125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 392.63803680981596,
            "unit": "iter/sec",
            "range": "stddev: 0.00007547592055307006",
            "extra": "mean: 2.546875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 839.633027522936,
            "unit": "iter/sec",
            "range": "stddev: 0.000034552859049042605",
            "extra": "mean: 1.1909965034965035 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 138.22894168466522,
            "unit": "iter/sec",
            "range": "stddev: 0.00007547592055306964",
            "extra": "mean: 7.234375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 175.82417582417585,
            "unit": "iter/sec",
            "range": "stddev: 0.00010925092168439089",
            "extra": "mean: 5.6875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 380.952380952381,
            "unit": "iter/sec",
            "range": "stddev: 0.0000658807845868413",
            "extra": "mean: 2.625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 740.740740740741,
            "unit": "iter/sec",
            "range": "stddev: 0.000052704627669472945",
            "extra": "mean: 1.3499999999999999 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.71264367816092,
            "unit": "iter/sec",
            "range": "stddev: 0.0008235098073355199",
            "extra": "mean: 67.96875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 15.238095238095237,
            "unit": "iter/sec",
            "range": "stddev: 0.0007365695637359876",
            "extra": "mean: 65.625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 286.99551569506724,
            "unit": "iter/sec",
            "range": "stddev: 0.00010546071214227398",
            "extra": "mean: 3.484375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 512,
            "unit": "iter/sec",
            "range": "stddev: 0.00008235098073355162",
            "extra": "mean: 1.953125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1441.4414414414418,
            "unit": "iter/sec",
            "range": "stddev: 0.000010925092168439088",
            "extra": "mean: 693.7499999999999 usec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1230.7692307692307,
            "unit": "iter/sec",
            "range": "stddev: 0.000040343576522993906",
            "extra": "mean: 812.5000000000001 usec\nrounds: 10"
          }
        ]
      }
    ]
  }
}