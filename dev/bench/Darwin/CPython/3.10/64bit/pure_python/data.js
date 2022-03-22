window.BENCHMARK_DATA = {
  "lastUpdate": 1647982262520,
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
        "date": 1647982260025,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.72948130221292,
            "unit": "iter/sec",
            "range": "stddev: 0.00039069833867259537",
            "extra": "mean: 8.017350746268663 msec\nrounds: 134"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.24268665815978,
            "unit": "iter/sec",
            "range": "stddev: 0.0002900638820227407",
            "extra": "mean: 6.441527272727335 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 209.80534203915715,
            "unit": "iter/sec",
            "range": "stddev: 0.00026828447952147367",
            "extra": "mean: 4.766322869955163 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 327.8280394647972,
            "unit": "iter/sec",
            "range": "stddev: 0.0000944786375812379",
            "extra": "mean: 3.0503797101449033 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.61019024359948,
            "unit": "iter/sec",
            "range": "stddev: 0.00045190351162602657",
            "extra": "mean: 8.725227642276304 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.0426730963569,
            "unit": "iter/sec",
            "range": "stddev: 0.0002911381131505783",
            "extra": "mean: 6.847313725490453 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.55719494583394,
            "unit": "iter/sec",
            "range": "stddev: 0.00020660500541913696",
            "extra": "mean: 4.888608294930895 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 319.9456745303726,
            "unit": "iter/sec",
            "range": "stddev: 0.00019526642040386248",
            "extra": "mean: 3.125530612244828 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.30949033208118,
            "unit": "iter/sec",
            "range": "stddev: 0.0027311309183939655",
            "extra": "mean: 75.13435714285777 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.422329771302639,
            "unit": "iter/sec",
            "range": "stddev: 0.001277425200495277",
            "extra": "mean: 74.50271428571449 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 171.5113206742585,
            "unit": "iter/sec",
            "range": "stddev: 0.0003847896530388735",
            "extra": "mean: 5.830518918918722 msec\nrounds: 185"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 241.58427846676486,
            "unit": "iter/sec",
            "range": "stddev: 0.0003835998889660115",
            "extra": "mean: 4.139342205323065 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 442.2298349424481,
            "unit": "iter/sec",
            "range": "stddev: 0.0003592344891043895",
            "extra": "mean: 2.261267605633483 msec\nrounds: 497"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 410.0922065357979,
            "unit": "iter/sec",
            "range": "stddev: 0.0012236986833033853",
            "extra": "mean: 2.4384759916492285 msec\nrounds: 479"
          }
        ]
      }
    ]
  }
}