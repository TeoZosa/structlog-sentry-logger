window.BENCHMARK_DATA = {
  "lastUpdate": 1642085080928,
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
        "date": 1642085079405,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 164.10895608810122,
            "unit": "iter/sec",
            "range": "stddev: 0.000019803443752250047",
            "extra": "mean: 6.093512650602409 msec\nrounds: 166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 196.64508758488142,
            "unit": "iter/sec",
            "range": "stddev: 0.00010417374567034435",
            "extra": "mean: 5.085303743315491 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 333.6546851170772,
            "unit": "iter/sec",
            "range": "stddev: 0.000014106247490223253",
            "extra": "mean: 2.9971106194690678 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 686.9975472913595,
            "unit": "iter/sec",
            "range": "stddev: 0.000011733709054879875",
            "extra": "mean: 1.455609272467889 msec\nrounds: 701"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 151.87840614803656,
            "unit": "iter/sec",
            "range": "stddev: 0.000024373548271735333",
            "extra": "mean: 6.584214473684268 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 200.16267407866624,
            "unit": "iter/sec",
            "range": "stddev: 0.00003829108227020753",
            "extra": "mean: 4.995936453202002 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 322.08254039797646,
            "unit": "iter/sec",
            "range": "stddev: 0.000013831341550325088",
            "extra": "mean: 3.104794189602346 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 635.9168377551138,
            "unit": "iter/sec",
            "range": "stddev: 0.000012596707847336629",
            "extra": "mean: 1.5725326656393577 msec\nrounds: 649"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.979207507439373,
            "unit": "iter/sec",
            "range": "stddev: 0.000040826640462331503",
            "extra": "mean: 47.66624285714287 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.42947661522937,
            "unit": "iter/sec",
            "range": "stddev: 0.0005027049948851686",
            "extra": "mean: 46.6646954545463 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 244.03979725923188,
            "unit": "iter/sec",
            "range": "stddev: 0.000013189040687058964",
            "extra": "mean: 4.097692307692534 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 413.8035742904135,
            "unit": "iter/sec",
            "range": "stddev: 0.000013880618865411155",
            "extra": "mean: 2.416605515587415 msec\nrounds: 417"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1276.106685689381,
            "unit": "iter/sec",
            "range": "stddev: 0.000006952957203405653",
            "extra": "mean: 783.6335403726672 usec\nrounds: 1288"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1107.3964873384266,
            "unit": "iter/sec",
            "range": "stddev: 0.000006433726645850577",
            "extra": "mean: 903.0189380530285 usec\nrounds: 1130"
          }
        ]
      }
    ]
  }
}