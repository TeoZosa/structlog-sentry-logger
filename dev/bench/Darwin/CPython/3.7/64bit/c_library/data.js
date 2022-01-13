window.BENCHMARK_DATA = {
  "lastUpdate": 1642085561287,
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
        "date": 1642085559446,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 125.59116528468559,
            "unit": "iter/sec",
            "range": "stddev: 0.00042526934037314193",
            "extra": "mean: 7.962343511450311 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 154.00381929471993,
            "unit": "iter/sec",
            "range": "stddev: 0.0005086056939170273",
            "extra": "mean: 6.493345454545396 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.7641996255056,
            "unit": "iter/sec",
            "range": "stddev: 0.00036604794274823244",
            "extra": "mean: 5.242073732718861 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 331.0149603542948,
            "unit": "iter/sec",
            "range": "stddev: 0.00014896474597961095",
            "extra": "mean: 3.021011494252923 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.33082949649847,
            "unit": "iter/sec",
            "range": "stddev: 0.0002483249107415116",
            "extra": "mean: 8.59617355371905 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.94014546321588,
            "unit": "iter/sec",
            "range": "stddev: 0.0003024255959009022",
            "extra": "mean: 6.852124183006582 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.01073558380548,
            "unit": "iter/sec",
            "range": "stddev: 0.00021002015563735486",
            "extra": "mean: 4.901702830188612 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 331.6895620523507,
            "unit": "iter/sec",
            "range": "stddev: 0.00011842720564590338",
            "extra": "mean: 3.014867256637306 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.09543296775252,
            "unit": "iter/sec",
            "range": "stddev: 0.0014735283532029749",
            "extra": "mean: 76.36249999999986 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.2075222499577,
            "unit": "iter/sec",
            "range": "stddev: 0.0017187273339152537",
            "extra": "mean: 75.7144285714304 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 168.17918317532946,
            "unit": "iter/sec",
            "range": "stddev: 0.0003253330422041604",
            "extra": "mean: 5.946039106144808 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 245.64685430307122,
            "unit": "iter/sec",
            "range": "stddev: 0.0002564084469247955",
            "extra": "mean: 4.07088461538462 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 486.91218611034094,
            "unit": "iter/sec",
            "range": "stddev: 0.00009090140008376759",
            "extra": "mean: 2.0537584158417146 msec\nrounds: 505"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 469.646225507209,
            "unit": "iter/sec",
            "range": "stddev: 0.00005722667250186487",
            "extra": "mean: 2.129262295081833 msec\nrounds: 488"
          }
        ]
      }
    ]
  }
}