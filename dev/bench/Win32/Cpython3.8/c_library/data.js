window.BENCHMARK_DATA = {
  "lastUpdate": 1642431715976,
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
          "id": "47b651f62e195f128f5b4a2eeeb86575d0d1302c",
          "message": "Merge pull request #414 from TeoZosa/dependabot/github_actions/release-drafter/release-drafter-5.17.5",
          "timestamp": "2022-01-17T14:17:07Z",
          "tree_id": "4d41b141b482b6b7cf3f7964d4bcfab727102e36"
        },
        "date": 1642431710993,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.43119266055048,
            "unit": "iter/sec",
            "range": "stddev: 0.0002470529422006549",
            "extra": "mean: 8.515625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.12643678160921,
            "unit": "iter/sec",
            "range": "stddev: 0.0001841423909339969",
            "extra": "mean: 6.796875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 309.17874396135267,
            "unit": "iter/sec",
            "range": "stddev: 0.00012863634411696315",
            "extra": "mean: 3.234375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 627.4509803921569,
            "unit": "iter/sec",
            "range": "stddev: 0.00009882117688026186",
            "extra": "mean: 1.5937500000000002 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 105.78512396694215,
            "unit": "iter/sec",
            "range": "stddev: 0.0004434736032793334",
            "extra": "mean: 9.453125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.65934065934067,
            "unit": "iter/sec",
            "range": "stddev: 0.00013278696649981204",
            "extra": "mean: 7.109375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 301.88679245283015,
            "unit": "iter/sec",
            "range": "stddev: 0.00009882117688026186",
            "extra": "mean: 3.3125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 587.1559633027524,
            "unit": "iter/sec",
            "range": "stddev: 0.00008869472065586662",
            "extra": "mean: 1.703125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.962616822429906,
            "unit": "iter/sec",
            "range": "stddev: 0.0037737960276534996",
            "extra": "mean: 83.59375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.549019607843137,
            "unit": "iter/sec",
            "range": "stddev: 0.002515864018435664",
            "extra": "mean: 79.6875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 237.9182156133829,
            "unit": "iter/sec",
            "range": "stddev: 0.0001368117243392053",
            "extra": "mean: 4.203125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 412.9032258064516,
            "unit": "iter/sec",
            "range": "stddev: 0.00013278696649981215",
            "extra": "mean: 2.421875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1084.7457627118645,
            "unit": "iter/sec",
            "range": "stddev: 0.00004941058844013093",
            "extra": "mean: 921.875 usec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 937.5438596491229,
            "unit": "iter/sec",
            "range": "stddev: 0.00010057706771829527",
            "extra": "mean: 1.0666167664670658 msec\nrounds: 10"
          }
        ]
      }
    ]
  }
}