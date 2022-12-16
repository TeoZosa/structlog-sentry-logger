window.BENCHMARK_DATA = {
  "lastUpdate": 1671164312988,
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
          "id": "4843153269187517c009b0c426df18ed8dbc5f04",
          "message": "Merge pull request #729 from TeoZosa/ci/fix-benchmarks-output-capture\n\n💚 Fix benchmarks output capture",
          "timestamp": "2022-12-16T13:08:52+09:00",
          "tree_id": "fd541630e7b95c41ac449f78e2ea1fa5e4636b80",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/4843153269187517c009b0c426df18ed8dbc5f04"
        },
        "date": 1671164309169,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 106.3760685852636,
            "unit": "iter/sec",
            "range": "stddev: 0.0003520100301338146",
            "extra": "mean: 9.400610619469079 msec\nrounds: 113"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 133.30027237999838,
            "unit": "iter/sec",
            "range": "stddev: 0.0003620328286686035",
            "extra": "mean: 7.501860139860069 msec\nrounds: 143"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 174.7290020381865,
            "unit": "iter/sec",
            "range": "stddev: 0.0004961305911809589",
            "extra": "mean: 5.723148351648303 msec\nrounds: 182"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 251.76734047557787,
            "unit": "iter/sec",
            "range": "stddev: 0.00025370206372833215",
            "extra": "mean: 3.971921052631538 msec\nrounds: 266"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 102.92568669228562,
            "unit": "iter/sec",
            "range": "stddev: 0.00021704560400103828",
            "extra": "mean: 9.715747663551424 msec\nrounds: 107"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 125.91456264393538,
            "unit": "iter/sec",
            "range": "stddev: 0.00016590837378199186",
            "extra": "mean: 7.941893129771074 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 170.46155526862586,
            "unit": "iter/sec",
            "range": "stddev: 0.00020208293461259215",
            "extra": "mean: 5.866425414364702 msec\nrounds: 181"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 248.10275728581286,
            "unit": "iter/sec",
            "range": "stddev: 0.00011988723839939561",
            "extra": "mean: 4.030588014981253 msec\nrounds: 267"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 8.750690210690374,
            "unit": "iter/sec",
            "range": "stddev: 0.0024881855973123415",
            "extra": "mean: 114.27669999999992 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 8.658061131106335,
            "unit": "iter/sec",
            "range": "stddev: 0.0019692140028153044",
            "extra": "mean: 115.49930000000117 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 144.0158417425916,
            "unit": "iter/sec",
            "range": "stddev: 0.00021712990062438902",
            "extra": "mean: 6.943680555555559 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 198.65247405101587,
            "unit": "iter/sec",
            "range": "stddev: 0.0002111125622827703",
            "extra": "mean: 5.033916666666786 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 261.1268144296288,
            "unit": "iter/sec",
            "range": "stddev: 0.00014891386810535854",
            "extra": "mean: 3.8295569230768933 msec\nrounds: 325"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 257.9219165883782,
            "unit": "iter/sec",
            "range": "stddev: 0.00038856605163329765",
            "extra": "mean: 3.877142405063298 msec\nrounds: 316"
          }
        ]
      }
    ]
  }
}