window.BENCHMARK_DATA = {
  "lastUpdate": 1642086183252,
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
        "date": 1642086180777,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.79737504494811,
            "unit": "iter/sec",
            "range": "stddev: 0.00041294563358096277",
            "extra": "mean: 8.27832558139533 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.47161597741032,
            "unit": "iter/sec",
            "range": "stddev: 0.0006381432404311959",
            "extra": "mean: 7.018941935483877 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.3791994260936,
            "unit": "iter/sec",
            "range": "stddev: 0.00017838966014806955",
            "extra": "mean: 4.869042253521166 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 321.25615982156154,
            "unit": "iter/sec",
            "range": "stddev: 0.0001331007295540684",
            "extra": "mean: 3.112780780780794 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 101.14119565891993,
            "unit": "iter/sec",
            "range": "stddev: 0.0011972515157029709",
            "extra": "mean: 9.88716806722669 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.45743135207766,
            "unit": "iter/sec",
            "range": "stddev: 0.0004374739484252945",
            "extra": "mean: 7.0692645161290235 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 195.4375685044684,
            "unit": "iter/sec",
            "range": "stddev: 0.00024864076244778167",
            "extra": "mean: 5.116723502304198 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 300.6804151034956,
            "unit": "iter/sec",
            "range": "stddev: 0.0002487196024379363",
            "extra": "mean: 3.325790273556046 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.558077589749209,
            "unit": "iter/sec",
            "range": "stddev: 0.0018160068903072272",
            "extra": "mean: 73.75676923076952 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.219667692806492,
            "unit": "iter/sec",
            "range": "stddev: 0.0027111143693702147",
            "extra": "mean: 75.64486666666757 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 157.52935020525578,
            "unit": "iter/sec",
            "range": "stddev: 0.0005931554994334522",
            "extra": "mean: 6.348023391812583 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 231.26734505089513,
            "unit": "iter/sec",
            "range": "stddev: 0.0004141713493409695",
            "extra": "mean: 4.323999999999695 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 455.7999614895974,
            "unit": "iter/sec",
            "range": "stddev: 0.00015764579068748132",
            "extra": "mean: 2.193944897958976 msec\nrounds: 490"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 442.77113206790597,
            "unit": "iter/sec",
            "range": "stddev: 0.00020652751242028955",
            "extra": "mean: 2.258503157894752 msec\nrounds: 475"
          }
        ]
      }
    ]
  }
}