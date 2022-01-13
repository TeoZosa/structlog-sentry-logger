window.BENCHMARK_DATA = {
  "lastUpdate": 1642086157149,
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
        "date": 1642086153410,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.71788192443324,
            "unit": "iter/sec",
            "range": "stddev: 0.001003962084640299",
            "extra": "mean: 8.215719696969712 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 153.08675164848128,
            "unit": "iter/sec",
            "range": "stddev: 0.0005022302544552979",
            "extra": "mean: 6.532243902439095 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 212.2759470996732,
            "unit": "iter/sec",
            "range": "stddev: 0.000248568267507949",
            "extra": "mean: 4.71084931506844 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 326.78838616105946,
            "unit": "iter/sec",
            "range": "stddev: 0.0002572964064380266",
            "extra": "mean: 3.060084269662951 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.29013372084908,
            "unit": "iter/sec",
            "range": "stddev: 0.0009024133078182519",
            "extra": "mean: 9.234451612903218 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.44457300553057,
            "unit": "iter/sec",
            "range": "stddev: 0.0008456798819153311",
            "extra": "mean: 7.27566013071874 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 184.62259990620228,
            "unit": "iter/sec",
            "range": "stddev: 0.0003779834735758871",
            "extra": "mean: 5.416454976303287 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 277.5901787240708,
            "unit": "iter/sec",
            "range": "stddev: 0.00041051172110322744",
            "extra": "mean: 3.6024329268292172 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.937722606550532,
            "unit": "iter/sec",
            "range": "stddev: 0.005977630537316534",
            "extra": "mean: 83.76807142857169 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.827126073241152,
            "unit": "iter/sec",
            "range": "stddev: 0.004557386197212537",
            "extra": "mean: 77.95978571428515 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 156.86330432549826,
            "unit": "iter/sec",
            "range": "stddev: 0.0009490180486284628",
            "extra": "mean: 6.3749772727275715 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 226.2287046521418,
            "unit": "iter/sec",
            "range": "stddev: 0.0004339468061484904",
            "extra": "mean: 4.420305555555559 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 441.5029962193612,
            "unit": "iter/sec",
            "range": "stddev: 0.0003333112348584656",
            "extra": "mean: 2.2649902912621434 msec\nrounds: 515"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 411.7096504916066,
            "unit": "iter/sec",
            "range": "stddev: 0.0003207448004127331",
            "extra": "mean: 2.4288961864409506 msec\nrounds: 472"
          }
        ]
      }
    ]
  }
}