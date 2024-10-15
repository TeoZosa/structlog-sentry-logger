window.BENCHMARK_DATA = {
  "lastUpdate": 1728978258535,
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
        "date": 1728978227148,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 761.5364673349465,
            "unit": "iter/sec",
            "range": "stddev: 0.00014855211520840646",
            "extra": "mean: 1.3131347517730494 msec\nrounds: 846"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1124.5415162665256,
            "unit": "iter/sec",
            "range": "stddev: 0.000059805778079249035",
            "extra": "mean: 889.2512953367849 usec\nrounds: 1158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1369.471686969051,
            "unit": "iter/sec",
            "range": "stddev: 0.000022667465720552202",
            "extra": "mean: 730.20859760396 usec\nrounds: 1419"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2628.1170291396825,
            "unit": "iter/sec",
            "range": "stddev: 0.00000807687525385678",
            "extra": "mean: 380.50055949272223 usec\nrounds: 2681"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 747.5100957949301,
            "unit": "iter/sec",
            "range": "stddev: 0.00004852484314804471",
            "extra": "mean: 1.3377745740498166 msec\nrounds: 763"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1004.3378013990563,
            "unit": "iter/sec",
            "range": "stddev: 0.000032041923400641324",
            "extra": "mean: 995.6809338521226 usec\nrounds: 1028"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1304.3830590321954,
            "unit": "iter/sec",
            "range": "stddev: 0.00004440679789193295",
            "extra": "mean: 766.6459580837883 usec\nrounds: 1336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2353.8699119531766,
            "unit": "iter/sec",
            "range": "stddev: 0.000027040076687343337",
            "extra": "mean: 424.8323133414911 usec\nrounds: 2451"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.00863278766404,
            "unit": "iter/sec",
            "range": "stddev: 0.0012932449425915105",
            "extra": "mean: 39.98619230769256 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.109180858295883,
            "unit": "iter/sec",
            "range": "stddev: 0.0002147397019685261",
            "extra": "mean: 38.30070370370359 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1020.6492463260483,
            "unit": "iter/sec",
            "range": "stddev: 0.0001331879177558576",
            "extra": "mean: 979.7685185186019 usec\nrounds: 1080"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1689.696823990785,
            "unit": "iter/sec",
            "range": "stddev: 0.0001481401632217417",
            "extra": "mean: 591.8221457256249 usec\nrounds: 1743"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1599.2276398986355,
            "unit": "iter/sec",
            "range": "stddev: 0.00027512384776481636",
            "extra": "mean: 625.3018488746126 usec\nrounds: 2488"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1498.6975604534425,
            "unit": "iter/sec",
            "range": "stddev: 0.00030782858381824826",
            "extra": "mean: 667.2460317460196 usec\nrounds: 2268"
          }
        ]
      }
    ]
  }
}