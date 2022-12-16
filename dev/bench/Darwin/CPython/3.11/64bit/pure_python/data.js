window.BENCHMARK_DATA = {
  "lastUpdate": 1671164197466,
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
        "date": 1671164194760,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 122.0134535418187,
            "unit": "iter/sec",
            "range": "stddev: 0.0008195991687025689",
            "extra": "mean: 8.195817518248196 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.81132003718173,
            "unit": "iter/sec",
            "range": "stddev: 0.0010843356722901102",
            "extra": "mean: 6.811463855421625 msec\nrounds: 166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.10837711358863,
            "unit": "iter/sec",
            "range": "stddev: 0.00043239807727527506",
            "extra": "mean: 5.178439252336465 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 282.7842383023682,
            "unit": "iter/sec",
            "range": "stddev: 0.0003028759497773922",
            "extra": "mean: 3.536264984227112 msec\nrounds: 317"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 123.50718934406177,
            "unit": "iter/sec",
            "range": "stddev: 0.00040634390310019037",
            "extra": "mean: 8.096694656488676 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.33548507469496,
            "unit": "iter/sec",
            "range": "stddev: 0.0008228361444404532",
            "extra": "mean: 6.833612500000008 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 177.11902315975246,
            "unit": "iter/sec",
            "range": "stddev: 0.0009667525020711455",
            "extra": "mean: 5.645920930232606 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 256.6449244834443,
            "unit": "iter/sec",
            "range": "stddev: 0.0013171878779125827",
            "extra": "mean: 3.8964339622641098 msec\nrounds: 318"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 6.8128413388347875,
            "unit": "iter/sec",
            "range": "stddev: 0.16947607829087333",
            "extra": "mean: 146.78163636363675 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.355751118162106,
            "unit": "iter/sec",
            "range": "stddev: 0.0054256393591504215",
            "extra": "mean: 96.56470000000112 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 172.45493799078827,
            "unit": "iter/sec",
            "range": "stddev: 0.0002998554339300194",
            "extra": "mean: 5.798616216216524 msec\nrounds: 185"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 241.02537720946793,
            "unit": "iter/sec",
            "range": "stddev: 0.0001907805199393713",
            "extra": "mean: 4.148940711462636 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 323.6917663686576,
            "unit": "iter/sec",
            "range": "stddev: 0.0003563899507139762",
            "extra": "mean: 3.0893587786260968 msec\nrounds: 393"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 328.9217643262897,
            "unit": "iter/sec",
            "range": "stddev: 0.00015993323696680465",
            "extra": "mean: 3.040236641221473 msec\nrounds: 393"
          }
        ]
      }
    ]
  }
}