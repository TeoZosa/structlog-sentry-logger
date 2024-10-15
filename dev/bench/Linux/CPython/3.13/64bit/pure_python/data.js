window.BENCHMARK_DATA = {
  "lastUpdate": 1728978089812,
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
          "id": "9f5020048a36caf9b2b676c6a1aaca33f71473ea",
          "message": "Merge pull request #1425 from TeoZosa/build/add-python-313-support\n\n[WIP]➕ Add Python 3.13 support",
          "timestamp": "2024-10-15T16:35:53+09:00",
          "tree_id": "22c189e4e0a9077558e411f3a2f6ab1636238eb9",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/9f5020048a36caf9b2b676c6a1aaca33f71473ea"
        },
        "date": 1728978052518,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 234.63722458227153,
            "unit": "iter/sec",
            "range": "stddev: 0.00018405509595735857",
            "extra": "mean: 4.26189834873949 msec\nrounds: 238"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 348.7268321769596,
            "unit": "iter/sec",
            "range": "stddev: 0.00008395080389179982",
            "extra": "mean: 2.867574008450704 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 430.57003190988405,
            "unit": "iter/sec",
            "range": "stddev: 0.00002735751671808651",
            "extra": "mean: 2.3225025568182005 msec\nrounds: 440"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1066.3423573334464,
            "unit": "iter/sec",
            "range": "stddev: 0.00003769338711160572",
            "extra": "mean: 937.785124189059 usec\nrounds: 1079"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 216.7587653762463,
            "unit": "iter/sec",
            "range": "stddev: 0.00011400669723118782",
            "extra": "mean: 4.613423582959685 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 309.53798581198504,
            "unit": "iter/sec",
            "range": "stddev: 0.00004334747782380738",
            "extra": "mean: 3.2306212672954624 msec\nrounds: 318"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 417.7739619322988,
            "unit": "iter/sec",
            "range": "stddev: 0.00002890235810301627",
            "extra": "mean: 2.393638883990698 msec\nrounds: 431"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 977.2409504010361,
            "unit": "iter/sec",
            "range": "stddev: 0.000020395603909661554",
            "extra": "mean: 1.0232890870870934 msec\nrounds: 999"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.06826362367667,
            "unit": "iter/sec",
            "range": "stddev: 0.0008182445319832142",
            "extra": "mean: 99.32199209090892 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.166697159364215,
            "unit": "iter/sec",
            "range": "stddev: 0.000627573880300176",
            "extra": "mean: 98.36036072727242 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 329.8076987908822,
            "unit": "iter/sec",
            "range": "stddev: 0.0000857688522721753",
            "extra": "mean: 3.032069911242611 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 682.9465437329367,
            "unit": "iter/sec",
            "range": "stddev: 0.00005553158534818521",
            "extra": "mean: 1.4642434450785444 msec\nrounds: 701"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 868.2361040885557,
            "unit": "iter/sec",
            "range": "stddev: 0.00004131958001778064",
            "extra": "mean: 1.151760443145549 msec\nrounds: 941"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 796.5673909133486,
            "unit": "iter/sec",
            "range": "stddev: 0.00006626247963505441",
            "extra": "mean: 1.2553865641592412 msec\nrounds: 904"
          }
        ]
      }
    ]
  }
}