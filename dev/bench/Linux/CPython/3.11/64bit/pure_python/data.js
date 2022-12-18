window.BENCHMARK_DATA = {
  "lastUpdate": 1671338178557,
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
      },
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
          "id": "533926cc3c6885e1451164ee8d4f11ff6e6ad936",
          "message": "Merge pull request #731 from TeoZosa/fix/flaky-documentation-build-test-ci-job\n\n💚  Fix flaky documentation building CI job",
          "timestamp": "2022-12-18T13:16:59+09:00",
          "tree_id": "9edc29e2aac79ddcfb6c05c59a921113f839ed13",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/533926cc3c6885e1451164ee8d4f11ff6e6ad936"
        },
        "date": 1671338174297,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 212.2657463987723,
            "unit": "iter/sec",
            "range": "stddev: 0.000015990113383945236",
            "extra": "mean: 4.71107570093459 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 284.4500070223576,
            "unit": "iter/sec",
            "range": "stddev: 0.000018805258063536405",
            "extra": "mean: 3.5155562500000235 msec\nrounds: 288"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 407.5136008851749,
            "unit": "iter/sec",
            "range": "stddev: 0.000019962954910659385",
            "extra": "mean: 2.4539058275057917 msec\nrounds: 429"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 763.9226987727999,
            "unit": "iter/sec",
            "range": "stddev: 0.000025336901170702564",
            "extra": "mean: 1.3090329710145352 msec\nrounds: 828"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 201.57503133906988,
            "unit": "iter/sec",
            "range": "stddev: 0.00006742433261772255",
            "extra": "mean: 4.960931884058088 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 255.10725648446706,
            "unit": "iter/sec",
            "range": "stddev: 0.00004494221494378436",
            "extra": "mean: 3.919919855595672 msec\nrounds: 277"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 395.85381969339534,
            "unit": "iter/sec",
            "range": "stddev: 0.00003809700745832936",
            "extra": "mean: 2.5261850467289673 msec\nrounds: 428"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 699.8604412151627,
            "unit": "iter/sec",
            "range": "stddev: 0.000013200945430852506",
            "extra": "mean: 1.4288562992126075 msec\nrounds: 762"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 15.86300235278075,
            "unit": "iter/sec",
            "range": "stddev: 0.0004988865344865797",
            "extra": "mean: 63.03976874999972 msec\nrounds: 16"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 16.495860121316287,
            "unit": "iter/sec",
            "range": "stddev: 0.00016812843589414456",
            "extra": "mean: 60.62127058823563 msec\nrounds: 17"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 292.3437334452838,
            "unit": "iter/sec",
            "range": "stddev: 0.000019473096002623065",
            "extra": "mean: 3.420630872483415 msec\nrounds: 298"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 463.1694372132795,
            "unit": "iter/sec",
            "range": "stddev: 0.000027478485933573653",
            "extra": "mean: 2.1590371031746676 msec\nrounds: 504"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 981.8147527452253,
            "unit": "iter/sec",
            "range": "stddev: 0.000050843553493854076",
            "extra": "mean: 1.0185220757825522 msec\nrounds: 1214"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 903.1321061994938,
            "unit": "iter/sec",
            "range": "stddev: 0.000024355938440323144",
            "extra": "mean: 1.1072577235772736 msec\nrounds: 1107"
          }
        ]
      }
    ]
  }
}