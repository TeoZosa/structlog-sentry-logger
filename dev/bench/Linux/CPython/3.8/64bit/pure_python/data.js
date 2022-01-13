window.BENCHMARK_DATA = {
  "lastUpdate": 1642085097589,
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
        "date": 1642085095380,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.44347863726502,
            "unit": "iter/sec",
            "range": "stddev: 0.0012276073398246193",
            "extra": "mean: 8.814962411347551 msec\nrounds: 141"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.34514880323735,
            "unit": "iter/sec",
            "range": "stddev: 0.0010636380611233707",
            "extra": "mean: 6.607413636363676 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 244.18263320600053,
            "unit": "iter/sec",
            "range": "stddev: 0.0003440251775959222",
            "extra": "mean: 4.095295340501824 msec\nrounds: 279"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 510.79241454221676,
            "unit": "iter/sec",
            "range": "stddev: 0.00022134230669464594",
            "extra": "mean: 1.9577424635332956 msec\nrounds: 617"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.03995078657802,
            "unit": "iter/sec",
            "range": "stddev: 0.0004654059487466005",
            "extra": "mean: 8.768856818181787 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.4125100106363,
            "unit": "iter/sec",
            "range": "stddev: 0.0005100088933829869",
            "extra": "mean: 6.692880000000083 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 228.51905972136058,
            "unit": "iter/sec",
            "range": "stddev: 0.0005863086142553199",
            "extra": "mean: 4.376002602230758 msec\nrounds: 269"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 480.9303427454728,
            "unit": "iter/sec",
            "range": "stddev: 0.0002715274020995876",
            "extra": "mean: 2.0793031986531143 msec\nrounds: 594"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.637230507251086,
            "unit": "iter/sec",
            "range": "stddev: 0.00183268138728181",
            "extra": "mean: 48.45611428571486 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.263294196689206,
            "unit": "iter/sec",
            "range": "stddev: 0.002665693836961576",
            "extra": "mean: 49.35031739130495 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 185.2322051701751,
            "unit": "iter/sec",
            "range": "stddev: 0.0005629295911905292",
            "extra": "mean: 5.398629245283171 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 309.3953234053,
            "unit": "iter/sec",
            "range": "stddev: 0.0004624034952644682",
            "extra": "mean: 3.232110909090973 msec\nrounds: 385"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 941.7672581844196,
            "unit": "iter/sec",
            "range": "stddev: 0.00020239045189754073",
            "extra": "mean: 1.0618334745761326 msec\nrounds: 1180"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 863.3169762620114,
            "unit": "iter/sec",
            "range": "stddev: 0.0002154797683401071",
            "extra": "mean: 1.1583231043710023 msec\nrounds: 1121"
          }
        ]
      }
    ]
  }
}