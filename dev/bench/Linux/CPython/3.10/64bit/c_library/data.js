window.BENCHMARK_DATA = {
  "lastUpdate": 1647981771995,
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
        "date": 1647981769274,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 145.45985486399897,
            "unit": "iter/sec",
            "range": "stddev: 0.0008388593503860302",
            "extra": "mean: 6.8747490566037825 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 182.77923232722372,
            "unit": "iter/sec",
            "range": "stddev: 0.0005258670082916994",
            "extra": "mean: 5.4710810810810955 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 275.391455697851,
            "unit": "iter/sec",
            "range": "stddev: 0.0004011620978181806",
            "extra": "mean: 3.631194720496928 msec\nrounds: 322"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 612.6364221518646,
            "unit": "iter/sec",
            "range": "stddev: 0.00037767172678688897",
            "extra": "mean: 1.6322895013122694 msec\nrounds: 762"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 133.10778219640298,
            "unit": "iter/sec",
            "range": "stddev: 0.0008859756307528069",
            "extra": "mean: 7.512708749999919 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 172.7886985805876,
            "unit": "iter/sec",
            "range": "stddev: 0.0005638932521864386",
            "extra": "mean: 5.787415544041534 msec\nrounds: 193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 262.4559841157379,
            "unit": "iter/sec",
            "range": "stddev: 0.00044418595497579055",
            "extra": "mean: 3.8101626959247374 msec\nrounds: 319"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 534.0088772546791,
            "unit": "iter/sec",
            "range": "stddev: 0.00039596537903800993",
            "extra": "mean: 1.8726280453256976 msec\nrounds: 706"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.299428932934937,
            "unit": "iter/sec",
            "range": "stddev: 0.003267382601833632",
            "extra": "mean: 49.262469565217366 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.199368920791485,
            "unit": "iter/sec",
            "range": "stddev: 0.002393731102532272",
            "extra": "mean: 41.32339166666554 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.20541513710953,
            "unit": "iter/sec",
            "range": "stddev: 0.0006530374243792546",
            "extra": "mean: 5.045270833333415 msec\nrounds: 240"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.34268333660896,
            "unit": "iter/sec",
            "range": "stddev: 0.000791834045499004",
            "extra": "mean: 3.161128904429048 msec\nrounds: 429"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1023.0407498210396,
            "unit": "iter/sec",
            "range": "stddev: 0.0003560535395411667",
            "extra": "mean: 977.478170028838 usec\nrounds: 1388"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 938.394158014672,
            "unit": "iter/sec",
            "range": "stddev: 0.00034838342089570714",
            "extra": "mean: 1.0656502829425807 msec\nrounds: 1237"
          }
        ]
      }
    ]
  }
}