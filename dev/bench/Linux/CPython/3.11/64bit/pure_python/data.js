window.BENCHMARK_DATA = {
  "lastUpdate": 1671168291651,
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
        "date": 1671164122467,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 220.1281617024108,
            "unit": "iter/sec",
            "range": "stddev: 0.0001732397200428415",
            "extra": "mean: 4.542808118081187 msec\nrounds: 271"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 289.04264693571315,
            "unit": "iter/sec",
            "range": "stddev: 0.00012389451412967526",
            "extra": "mean: 3.4596970744680906 msec\nrounds: 376"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 423.15141249726463,
            "unit": "iter/sec",
            "range": "stddev: 0.00009315381046826529",
            "extra": "mean: 2.363220281124465 msec\nrounds: 498"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 793.5614877770109,
            "unit": "iter/sec",
            "range": "stddev: 0.00006367968081359563",
            "extra": "mean: 1.26014179796109 msec\nrounds: 1079"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 208.24869009953733,
            "unit": "iter/sec",
            "range": "stddev: 0.00020501216010282655",
            "extra": "mean: 4.801950972762549 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 277.7513977363388,
            "unit": "iter/sec",
            "range": "stddev: 0.00025199542757416713",
            "extra": "mean: 3.600341917808351 msec\nrounds: 365"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 435.678386162248,
            "unit": "iter/sec",
            "range": "stddev: 0.00020059587733389116",
            "extra": "mean: 2.295271080139369 msec\nrounds: 574"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 757.7686971950787,
            "unit": "iter/sec",
            "range": "stddev: 0.00011686457792144742",
            "extra": "mean: 1.3196639076034062 msec\nrounds: 1039"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 16.390373847174455,
            "unit": "iter/sec",
            "range": "stddev: 0.001823748739267127",
            "extra": "mean: 61.01142105263148 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.29772563130557,
            "unit": "iter/sec",
            "range": "stddev: 0.00155913254302643",
            "extra": "mean: 57.811068421052504 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 316.90844523378155,
            "unit": "iter/sec",
            "range": "stddev: 0.00023507847665345794",
            "extra": "mean: 3.155485488126723 msec\nrounds: 379"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 504.57326519678537,
            "unit": "iter/sec",
            "range": "stddev: 0.00017363894272567513",
            "extra": "mean: 1.9818727407406267 msec\nrounds: 675"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1047.0141684720418,
            "unit": "iter/sec",
            "range": "stddev: 0.0000953417077261104",
            "extra": "mean: 955.096912832945 usec\nrounds: 1652"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 920.4545725413548,
            "unit": "iter/sec",
            "range": "stddev: 0.00004190198247981614",
            "extra": "mean: 1.0864197211156463 msec\nrounds: 1506"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f744c5e05fd7585611008a82be81c94012afb433",
          "message": "Merge pull request #730 from TeoZosa/dependabot/pip/sentry-sdk-1.12.0",
          "timestamp": "2022-12-16T05:17:17Z",
          "tree_id": "d2bd8f8aaea1217a0bb5c77f90187dd926f13069",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/f744c5e05fd7585611008a82be81c94012afb433"
        },
        "date": 1671168288247,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 237.27220015096313,
            "unit": "iter/sec",
            "range": "stddev: 0.00001582589050091813",
            "extra": "mean: 4.214568750000023 msec\nrounds: 240"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 316.40506712300646,
            "unit": "iter/sec",
            "range": "stddev: 0.000020353170278541433",
            "extra": "mean: 3.1605056426332054 msec\nrounds: 319"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 463.63241725733735,
            "unit": "iter/sec",
            "range": "stddev: 0.000012701228104962628",
            "extra": "mean: 2.1568811040340905 msec\nrounds: 471"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 880.8940518580303,
            "unit": "iter/sec",
            "range": "stddev: 0.000008736212718339356",
            "extra": "mean: 1.1352102990033193 msec\nrounds: 903"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 222.35419173069778,
            "unit": "iter/sec",
            "range": "stddev: 0.000018457021218545326",
            "extra": "mean: 4.497329203540002 msec\nrounds: 226"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 288.06094300462644,
            "unit": "iter/sec",
            "range": "stddev: 0.000019104030578912068",
            "extra": "mean: 3.47148762886588 msec\nrounds: 291"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 447.64791941396345,
            "unit": "iter/sec",
            "range": "stddev: 0.00001694805567155486",
            "extra": "mean: 2.2338984649122153 msec\nrounds: 456"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 822.6483714891779,
            "unit": "iter/sec",
            "range": "stddev: 0.000012035014460981226",
            "extra": "mean: 1.2155861904762248 msec\nrounds: 840"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.461252208973676,
            "unit": "iter/sec",
            "range": "stddev: 0.0002557011155622702",
            "extra": "mean: 51.38415500000022 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.413170344213082,
            "unit": "iter/sec",
            "range": "stddev: 0.0002051646865780084",
            "extra": "mean: 48.98798095238006 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 335.3417675075405,
            "unit": "iter/sec",
            "range": "stddev: 0.000013009207553526029",
            "extra": "mean: 2.9820323529412835 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 560.617284873425,
            "unit": "iter/sec",
            "range": "stddev: 0.000011601086464666107",
            "extra": "mean: 1.7837480701754995 msec\nrounds: 570"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1189.6944209017586,
            "unit": "iter/sec",
            "range": "stddev: 0.00003986145159256308",
            "extra": "mean: 840.5519790889034 usec\nrounds: 1339"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1100.4189350175438,
            "unit": "iter/sec",
            "range": "stddev: 0.000013984974320281038",
            "extra": "mean: 908.7448136141505 usec\nrounds: 1234"
          }
        ]
      }
    ]
  }
}