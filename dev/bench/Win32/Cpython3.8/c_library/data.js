window.BENCHMARK_DATA = {
  "lastUpdate": 1642085311867,
  "repoUrl": "https://github.com/TeoZosa/structlog-sentry-logger",
  "entries": {
    "Benchmark": [
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
          "id": "de351d873a6e2fd6ba664f30f32e7c44c395f1af",
          "message": "Merge pull request #413 from TeoZosa/dependabot/github_actions/release-drafter/release-drafter-5.16.1",
          "timestamp": "2022-01-13T14:41:34Z",
          "tree_id": "d94f460d865ed87282fc73b144e9f910eaac6178"
        },
        "date": 1642085307732,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 144.1441441441441,
            "unit": "iter/sec",
            "range": "stddev: 0.00024650332429581754",
            "extra": "mean: 6.9375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 188.79056047197642,
            "unit": "iter/sec",
            "range": "stddev: 0.00015537951968933625",
            "extra": "mean: 5.296875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 395.0617283950618,
            "unit": "iter/sec",
            "range": "stddev: 0.00009882117688026194",
            "extra": "mean: 2.53125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 809.9115044247787,
            "unit": "iter/sec",
            "range": "stddev: 0.00008995548539647776",
            "extra": "mean: 1.2347027972027973 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 138.22894168466522,
            "unit": "iter/sec",
            "range": "stddev: 0.0002215838269394024",
            "extra": "mean: 7.234375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 179.7752808988764,
            "unit": "iter/sec",
            "range": "stddev: 0.0001317615691736826",
            "extra": "mean: 5.5625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 378.69822485207106,
            "unit": "iter/sec",
            "range": "stddev: 0.00011529137302697212",
            "extra": "mean: 2.640625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 706.031746031746,
            "unit": "iter/sec",
            "range": "stddev: 0.00005804831154387613",
            "extra": "mean: 1.41636690647482 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 15.274463007159902,
            "unit": "iter/sec",
            "range": "stddev: 0.0017195389603353313",
            "extra": "mean: 65.46874999999999 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 15.458937198067634,
            "unit": "iter/sec",
            "range": "stddev: 0.0022341261030757514",
            "extra": "mean: 64.6875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 288.28828828828824,
            "unit": "iter/sec",
            "range": "stddev: 0.00012325166214790877",
            "extra": "mean: 3.46875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 507.93650793650784,
            "unit": "iter/sec",
            "range": "stddev: 0.00010925092168439089",
            "extra": "mean: 1.96875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1303.4623217922608,
            "unit": "iter/sec",
            "range": "stddev: 0.000021411254990723403",
            "extra": "mean: 767.1875000000001 usec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1185.1851851851852,
            "unit": "iter/sec",
            "range": "stddev: 0.0000329403922934206",
            "extra": "mean: 843.75 usec\nrounds: 10"
          }
        ]
      }
    ]
  }
}