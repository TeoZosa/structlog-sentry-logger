window.BENCHMARK_DATA = {
  "lastUpdate": 1726187025748,
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
          "id": "8df53ae6cc7b2202dc2b3fec51df809f89b35d03",
          "message": "Merge pull request #1423 from TeoZosa/build/add-python-312-support\n\n➕ Add Python 3.12 support",
          "timestamp": "2024-09-13T09:20:08+09:00",
          "tree_id": "c8ab121c4cd1e65d843d42fe7c718f783372f757",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/8df53ae6cc7b2202dc2b3fec51df809f89b35d03"
        },
        "date": 1726186993390,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 228.41933309022318,
            "unit": "iter/sec",
            "range": "stddev: 0.0001224024860447296",
            "extra": "mean: 4.377913141025636 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 327.5147874973546,
            "unit": "iter/sec",
            "range": "stddev: 0.00004203397604920778",
            "extra": "mean: 3.053297249999978 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 410.7862984356869,
            "unit": "iter/sec",
            "range": "stddev: 0.0000322377009836447",
            "extra": "mean: 2.434355780141876 msec\nrounds: 423"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 974.3193520386017,
            "unit": "iter/sec",
            "range": "stddev: 0.000024860980784782822",
            "extra": "mean: 1.0263575263158489 msec\nrounds: 1007"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 208.27971894621302,
            "unit": "iter/sec",
            "range": "stddev: 0.00004858673432063852",
            "extra": "mean: 4.801235593458064 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 295.26926166737275,
            "unit": "iter/sec",
            "range": "stddev: 0.00011323274610012866",
            "extra": "mean: 3.386739257425725 msec\nrounds: 303"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 393.9831417342569,
            "unit": "iter/sec",
            "range": "stddev: 0.00008470927427948968",
            "extra": "mean: 2.5381796682927713 msec\nrounds: 410"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 914.6081003519241,
            "unit": "iter/sec",
            "range": "stddev: 0.00004759828583769096",
            "extra": "mean: 1.093364469017078 msec\nrounds: 936"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.341953504584843,
            "unit": "iter/sec",
            "range": "stddev: 0.0001966061261888146",
            "extra": "mean: 57.66363055555542 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.939611750683394,
            "unit": "iter/sec",
            "range": "stddev: 0.00017777617047691374",
            "extra": "mean: 55.74256644444415 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 321.7626794214837,
            "unit": "iter/sec",
            "range": "stddev: 0.00004127951379598196",
            "extra": "mean: 3.1078806336333336 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 640.0465643293184,
            "unit": "iter/sec",
            "range": "stddev: 0.00010505753223588874",
            "extra": "mean: 1.5623863258259403 msec\nrounds: 666"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 901.3871568346556,
            "unit": "iter/sec",
            "range": "stddev: 0.00005706597573777075",
            "extra": "mean: 1.109401207258862 msec\nrounds: 1047"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 831.9509364340495,
            "unit": "iter/sec",
            "range": "stddev: 0.00005489598988884032",
            "extra": "mean: 1.201993959266698 msec\nrounds: 982"
          }
        ]
      }
    ]
  }
}