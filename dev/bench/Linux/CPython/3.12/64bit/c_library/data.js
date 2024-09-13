window.BENCHMARK_DATA = {
  "lastUpdate": 1726187022963,
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
        "date": 1726186987832,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 232.15276438855432,
            "unit": "iter/sec",
            "range": "stddev: 0.00004307247552306484",
            "extra": "mean: 4.307508474576245 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 336.7772628522816,
            "unit": "iter/sec",
            "range": "stddev: 0.00003549500277461465",
            "extra": "mean: 2.969321597101475 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 416.0880096837283,
            "unit": "iter/sec",
            "range": "stddev: 0.00026180359425568005",
            "extra": "mean: 2.403337699541277 msec\nrounds: 436"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 974.0298494971253,
            "unit": "iter/sec",
            "range": "stddev: 0.00004071615214627386",
            "extra": "mean: 1.026662581764083 msec\nrounds: 1009"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 214.97253998199014,
            "unit": "iter/sec",
            "range": "stddev: 0.00018703252833992195",
            "extra": "mean: 4.651756917808096 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 301.3936122709819,
            "unit": "iter/sec",
            "range": "stddev: 0.00004264457152152883",
            "extra": "mean: 3.3179203516128393 msec\nrounds: 310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 408.34304551241473,
            "unit": "iter/sec",
            "range": "stddev: 0.00003121104180062744",
            "extra": "mean: 2.4489213444179923 msec\nrounds: 421"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 892.510446147651,
            "unit": "iter/sec",
            "range": "stddev: 0.000030321345785506948",
            "extra": "mean: 1.1204350652883748 msec\nrounds: 919"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.362082403070605,
            "unit": "iter/sec",
            "range": "stddev: 0.0002793035125391528",
            "extra": "mean: 57.596777666666476 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.87546094855288,
            "unit": "iter/sec",
            "range": "stddev: 0.0011595418145627233",
            "extra": "mean: 55.94261333333369 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 329.11029514481856,
            "unit": "iter/sec",
            "range": "stddev: 0.00006391754985676883",
            "extra": "mean: 3.0384950417912924 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 636.859804787329,
            "unit": "iter/sec",
            "range": "stddev: 0.00005740781109181622",
            "extra": "mean: 1.5702042937596554 msec\nrounds: 657"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 883.4268328229,
            "unit": "iter/sec",
            "range": "stddev: 0.00004501417123569023",
            "extra": "mean: 1.131955655913917 msec\nrounds: 1023"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 820.4796348544521,
            "unit": "iter/sec",
            "range": "stddev: 0.00004349234604075048",
            "extra": "mean: 1.2187992943632215 msec\nrounds: 958"
          }
        ]
      }
    ]
  }
}