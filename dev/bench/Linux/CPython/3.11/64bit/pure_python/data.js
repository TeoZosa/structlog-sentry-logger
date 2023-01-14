window.BENCHMARK_DATA = {
  "lastUpdate": 1673691504002,
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
          "id": "d0d76d790b384fea42cba8f5141ddd0bb0ac7f5d",
          "message": "Merge pull request #732 from TeoZosa/ci/add-cp311-musllinux_aarch64-wheel-builds\n\n👷 📦 Build Python 3.11 `musllinux-aarch64` wheels",
          "timestamp": "2022-12-18T16:55:31+09:00",
          "tree_id": "acfeb7a91edcc721e75ca15348383fb888c00b60",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/d0d76d790b384fea42cba8f5141ddd0bb0ac7f5d"
        },
        "date": 1671350475760,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 251.3376307450448,
            "unit": "iter/sec",
            "range": "stddev: 0.000026714415921962218",
            "extra": "mean: 3.978711811023608 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 334.8820973705153,
            "unit": "iter/sec",
            "range": "stddev: 0.000012098134547740056",
            "extra": "mean: 2.9861255882352973 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 482.7937243121769,
            "unit": "iter/sec",
            "range": "stddev: 0.000014920236594548462",
            "extra": "mean: 2.071277959183651 msec\nrounds: 490"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 908.2434009297488,
            "unit": "iter/sec",
            "range": "stddev: 0.000007578350906800077",
            "extra": "mean: 1.1010264417845723 msec\nrounds: 919"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 236.55325867950225,
            "unit": "iter/sec",
            "range": "stddev: 0.000021123266919017187",
            "extra": "mean: 4.227377824267748 msec\nrounds: 239"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 302.8619264354487,
            "unit": "iter/sec",
            "range": "stddev: 0.000011655727194363297",
            "extra": "mean: 3.3018346405226926 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 463.9452485505571,
            "unit": "iter/sec",
            "range": "stddev: 0.000013677944891360943",
            "extra": "mean: 2.1554267515922794 msec\nrounds: 471"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 837.9669858710655,
            "unit": "iter/sec",
            "range": "stddev: 0.00001577853084914279",
            "extra": "mean: 1.1933644366197809 msec\nrounds: 852"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.484937548638495,
            "unit": "iter/sec",
            "range": "stddev: 0.0003296999747241289",
            "extra": "mean: 54.09809999999999 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.34347847196572,
            "unit": "iter/sec",
            "range": "stddev: 0.00007024701454696348",
            "extra": "mean: 51.697010000000176 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 342.21576674335546,
            "unit": "iter/sec",
            "range": "stddev: 0.000010625808218728238",
            "extra": "mean: 2.922133043478238 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 538.4451287768101,
            "unit": "iter/sec",
            "range": "stddev: 0.000020522153432782678",
            "extra": "mean: 1.8571994555354372 msec\nrounds: 551"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1174.4836770675324,
            "unit": "iter/sec",
            "range": "stddev: 0.00004902819024351931",
            "extra": "mean: 851.4379718727248 usec\nrounds: 1351"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1071.707565868042,
            "unit": "iter/sec",
            "range": "stddev: 0.000016845778243948047",
            "extra": "mean: 933.0903614457909 usec\nrounds: 1245"
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
          "id": "9d72d14953ea2a29ef0b30386a253ba0a188d3e5",
          "message": "Merge pull request #733 from TeoZosa/ci/build-against-optimized-orjson-builds\n\n👷 :package: Only build against optimized `orjson` wheels",
          "timestamp": "2022-12-18T18:59:38+09:00",
          "tree_id": "9f499c76659a3218cc6865c50285593f74700fa0",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/9d72d14953ea2a29ef0b30386a253ba0a188d3e5"
        },
        "date": 1671358018123,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 160.36178970171753,
            "unit": "iter/sec",
            "range": "stddev: 0.0004448752815534646",
            "extra": "mean: 6.23589947368422 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 218.42787515477121,
            "unit": "iter/sec",
            "range": "stddev: 0.0006947283233900985",
            "extra": "mean: 4.578170250896004 msec\nrounds: 279"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 309.05684881162836,
            "unit": "iter/sec",
            "range": "stddev: 0.00028248796002671963",
            "extra": "mean: 3.2356506702412697 msec\nrounds: 373"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 576.9014545767408,
            "unit": "iter/sec",
            "range": "stddev: 0.00041014569555049697",
            "extra": "mean: 1.733398298906486 msec\nrounds: 823"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 152.95897862368062,
            "unit": "iter/sec",
            "range": "stddev: 0.0006873790155034021",
            "extra": "mean: 6.537700558659347 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 192.94523581225366,
            "unit": "iter/sec",
            "range": "stddev: 0.0006026774464045384",
            "extra": "mean: 5.182817786561235 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 285.0865466624683,
            "unit": "iter/sec",
            "range": "stddev: 0.00028102758131715873",
            "extra": "mean: 3.5077067357512393 msec\nrounds: 386"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 549.7123829485031,
            "unit": "iter/sec",
            "range": "stddev: 0.0002939935143835933",
            "extra": "mean: 1.8191331158237338 msec\nrounds: 613"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.643813080784092,
            "unit": "iter/sec",
            "range": "stddev: 0.0020695306274506626",
            "extra": "mean: 73.29329374999993 msec\nrounds: 16"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.52544772196013,
            "unit": "iter/sec",
            "range": "stddev: 0.002837691166299522",
            "extra": "mean: 68.84469375000135 msec\nrounds: 16"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 212.3697567466338,
            "unit": "iter/sec",
            "range": "stddev: 0.00034612342872982914",
            "extra": "mean: 4.70876840148686 msec\nrounds: 269"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 344.4592236231077,
            "unit": "iter/sec",
            "range": "stddev: 0.0003540806745146446",
            "extra": "mean: 2.9031012422363136 msec\nrounds: 483"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 678.8891699377743,
            "unit": "iter/sec",
            "range": "stddev: 0.0003106730969292327",
            "extra": "mean: 1.4729944802207673 msec\nrounds: 1087"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 641.6120429110949,
            "unit": "iter/sec",
            "range": "stddev: 0.00026618131346404367",
            "extra": "mean: 1.5585742366412614 msec\nrounds: 1048"
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
          "id": "992b57a5e182e832fa82ad21a3a99115c40cef80",
          "message": "Merge pull request #734 from TeoZosa/lint/configure-black-for-line-length-120\n\n🔧 Configure Black with a max line length of 120",
          "timestamp": "2022-12-18T20:04:35+09:00",
          "tree_id": "cdd82cda1745c1bfe3d142fdf075904bac8adae2",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/992b57a5e182e832fa82ad21a3a99115c40cef80"
        },
        "date": 1671362043577,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 154.35835559887914,
            "unit": "iter/sec",
            "range": "stddev: 0.0005055255178924853",
            "extra": "mean: 6.478431284916211 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 207.60968294950752,
            "unit": "iter/sec",
            "range": "stddev: 0.0004437568157142689",
            "extra": "mean: 4.81673102040818 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 285.8505208561411,
            "unit": "iter/sec",
            "range": "stddev: 0.0004889826700097401",
            "extra": "mean: 3.498331914893611 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 593.5272218147921,
            "unit": "iter/sec",
            "range": "stddev: 0.00026047975218109035",
            "extra": "mean: 1.684842688330892 msec\nrounds: 677"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 149.87622338766474,
            "unit": "iter/sec",
            "range": "stddev: 0.0006427877781118191",
            "extra": "mean: 6.672172392637851 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 194.5378162674495,
            "unit": "iter/sec",
            "range": "stddev: 0.0006221107305732203",
            "extra": "mean: 5.140388738738619 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 279.71221706213487,
            "unit": "iter/sec",
            "range": "stddev: 0.0005274725708681324",
            "extra": "mean: 3.5751030487805306 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 549.4864047835939,
            "unit": "iter/sec",
            "range": "stddev: 0.00035932619562126044",
            "extra": "mean: 1.8198812405446745 msec\nrounds: 661"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.292140644668361,
            "unit": "iter/sec",
            "range": "stddev: 0.0024797330451748743",
            "extra": "mean: 69.9685250000004 msec\nrounds: 16"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.985438561200459,
            "unit": "iter/sec",
            "range": "stddev: 0.0026032086441824054",
            "extra": "mean: 66.73144705882346 msec\nrounds: 17"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.37169903902657,
            "unit": "iter/sec",
            "range": "stddev: 0.0005776461381191775",
            "extra": "mean: 5.015757024793435 msec\nrounds: 242"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 347.4848264958941,
            "unit": "iter/sec",
            "range": "stddev: 0.0003681307993850316",
            "extra": "mean: 2.87782350119917 msec\nrounds: 417"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 737.9938060202703,
            "unit": "iter/sec",
            "range": "stddev: 0.00019295567531430765",
            "extra": "mean: 1.3550249227600337 msec\nrounds: 971"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 677.3780681279802,
            "unit": "iter/sec",
            "range": "stddev: 0.0002976167903840424",
            "extra": "mean: 1.4762804511277228 msec\nrounds: 931"
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
          "id": "dbd12ca830adad258a9ee2ffa52316911e07d9ee",
          "message": "Merge pull request #736 from TeoZosa/feat/update-setup-logger-log-messages\n\n🔊 Update setup meta logger log messages",
          "timestamp": "2022-12-18T23:28:21+09:00",
          "tree_id": "da1419cc3d6b7fec50653846f0fa5303f807318d",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/dbd12ca830adad258a9ee2ffa52316911e07d9ee"
        },
        "date": 1671374162773,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 236.25619146913422,
            "unit": "iter/sec",
            "range": "stddev: 0.00011258190649161124",
            "extra": "mean: 4.232693305439343 msec\nrounds: 239"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 317.68545036155336,
            "unit": "iter/sec",
            "range": "stddev: 0.000019954262663400537",
            "extra": "mean: 3.147767701863318 msec\nrounds: 322"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 470.37460198502515,
            "unit": "iter/sec",
            "range": "stddev: 0.000011000269957615623",
            "extra": "mean: 2.1259651260503984 msec\nrounds: 476"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 899.5481099296226,
            "unit": "iter/sec",
            "range": "stddev: 0.000008816288774833808",
            "extra": "mean: 1.111669280343701 msec\nrounds: 931"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 225.0569305195986,
            "unit": "iter/sec",
            "range": "stddev: 0.000013300466553397676",
            "extra": "mean: 4.44332017543853 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 290.8756164590998,
            "unit": "iter/sec",
            "range": "stddev: 0.000014592037744995182",
            "extra": "mean: 3.4378955932203783 msec\nrounds: 295"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 450.00145588704277,
            "unit": "iter/sec",
            "range": "stddev: 0.000011603794579058854",
            "extra": "mean: 2.2222150326798396 msec\nrounds: 459"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 827.3926123442186,
            "unit": "iter/sec",
            "range": "stddev: 0.000011091472529416934",
            "extra": "mean: 1.2086160609613612 msec\nrounds: 853"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.862211863858196,
            "unit": "iter/sec",
            "range": "stddev: 0.0002779263048854369",
            "extra": "mean: 50.346859999999616 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.878692707500196,
            "unit": "iter/sec",
            "range": "stddev: 0.00017136252396355756",
            "extra": "mean: 47.89571904761895 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 335.6383129949799,
            "unit": "iter/sec",
            "range": "stddev: 0.0000546189508132869",
            "extra": "mean: 2.9793976470587156 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 566.7451090437288,
            "unit": "iter/sec",
            "range": "stddev: 0.000010137530963195569",
            "extra": "mean: 1.7644616319447446 msec\nrounds: 576"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1217.4504877773077,
            "unit": "iter/sec",
            "range": "stddev: 0.00004193755462335309",
            "extra": "mean: 821.3886396527666 usec\nrounds: 1382"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1108.087875079994,
            "unit": "iter/sec",
            "range": "stddev: 0.000014088380167116516",
            "extra": "mean: 902.4555023921807 usec\nrounds: 1254"
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
          "id": "c1eccaca8fd7558c9d157d1c06ec4863a8f754f3",
          "message": "Merge pull request #737 from TeoZosa/ci/group=build-prs-under-ci-build-system-label\n\n👷 Group `build` PRs in release notes under \"Continuous Integration Build System\" label",
          "timestamp": "2022-12-18T23:36:26+09:00",
          "tree_id": "415cfce686ef511089c02b5b36c8a3e21f224870",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/c1eccaca8fd7558c9d157d1c06ec4863a8f754f3"
        },
        "date": 1671377949783,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 251.27140350671405,
            "unit": "iter/sec",
            "range": "stddev: 0.000012152066377143938",
            "extra": "mean: 3.9797604743083292 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 333.92497483988734,
            "unit": "iter/sec",
            "range": "stddev: 0.000014227309375261615",
            "extra": "mean: 2.994684660766949 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 487.63445256342015,
            "unit": "iter/sec",
            "range": "stddev: 0.000010305703702869371",
            "extra": "mean: 2.050716463414658 msec\nrounds: 492"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 926.491841598715,
            "unit": "iter/sec",
            "range": "stddev: 0.000007671844010845986",
            "extra": "mean: 1.0793403191488902 msec\nrounds: 940"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 235.65660713300568,
            "unit": "iter/sec",
            "range": "stddev: 0.00001249678392143158",
            "extra": "mean: 4.24346260504207 msec\nrounds: 238"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 301.47836715376275,
            "unit": "iter/sec",
            "range": "stddev: 0.000011009517910555443",
            "extra": "mean: 3.3169875816992564 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 464.59359699658944,
            "unit": "iter/sec",
            "range": "stddev: 0.000011238029652028132",
            "extra": "mean: 2.1524188160676285 msec\nrounds: 473"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 841.7374794244422,
            "unit": "iter/sec",
            "range": "stddev: 0.000007889879806407847",
            "extra": "mean: 1.1880188591385683 msec\nrounds: 859"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.336490426614695,
            "unit": "iter/sec",
            "range": "stddev: 0.00006863517247407437",
            "extra": "mean: 54.53606315789522 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.63630037177431,
            "unit": "iter/sec",
            "range": "stddev: 0.00006708937401159111",
            "extra": "mean: 50.92608999999939 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 343.3365604346325,
            "unit": "iter/sec",
            "range": "stddev: 0.00001199941298430802",
            "extra": "mean: 2.9125939828082745 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 550.2114999151978,
            "unit": "iter/sec",
            "range": "stddev: 0.000011917411569717185",
            "extra": "mean: 1.817482913668883 msec\nrounds: 556"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1178.5558658742054,
            "unit": "iter/sec",
            "range": "stddev: 0.000049307527708501314",
            "extra": "mean: 848.4960526315314 usec\nrounds: 1368"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1073.5651214841328,
            "unit": "iter/sec",
            "range": "stddev: 0.00001659431969118094",
            "extra": "mean: 931.4758648432675 usec\nrounds: 1243"
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
          "id": "a0f0492694150df2360ab6ff2019e559f8755b26",
          "message": "Merge pull request #735 from TeoZosa/dependabot/pip/tox-3.28.0",
          "timestamp": "2022-12-18T14:39:01Z",
          "tree_id": "de2619588bc4c5afd2c2a3be50104759bd56d02d",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/a0f0492694150df2360ab6ff2019e559f8755b26"
        },
        "date": 1671379029939,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 237.44153245543376,
            "unit": "iter/sec",
            "range": "stddev: 0.00020254364350129345",
            "extra": "mean: 4.211563114754128 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 325.33359962854803,
            "unit": "iter/sec",
            "range": "stddev: 0.000013961407906758544",
            "extra": "mean: 3.073767975830831 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 474.768107001428,
            "unit": "iter/sec",
            "range": "stddev: 0.000013301831983371643",
            "extra": "mean: 2.1062914405010615 msec\nrounds: 479"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 899.9794193750548,
            "unit": "iter/sec",
            "range": "stddev: 0.000011392451675927171",
            "extra": "mean: 1.111136519871087 msec\nrounds: 931"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 227.41027453462974,
            "unit": "iter/sec",
            "range": "stddev: 0.00003403768561411003",
            "extra": "mean: 4.397338695652123 msec\nrounds: 230"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 293.9934098279981,
            "unit": "iter/sec",
            "range": "stddev: 0.000014844766700102922",
            "extra": "mean: 3.401436789297602 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 454.1471233970247,
            "unit": "iter/sec",
            "range": "stddev: 0.00001523552239491073",
            "extra": "mean: 2.201929613733961 msec\nrounds: 466"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 843.7547854108191,
            "unit": "iter/sec",
            "range": "stddev: 0.000008472759832225425",
            "extra": "mean: 1.1851784633293736 msec\nrounds: 859"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.032627139822655,
            "unit": "iter/sec",
            "range": "stddev: 0.00019590506367571668",
            "extra": "mean: 49.91856499999994 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.03348109520735,
            "unit": "iter/sec",
            "range": "stddev: 0.0000746661343519421",
            "extra": "mean: 47.54324761904762 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 341.9841863358516,
            "unit": "iter/sec",
            "range": "stddev: 0.000012611337861342375",
            "extra": "mean: 2.9241118155619406 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 574.9947768025725,
            "unit": "iter/sec",
            "range": "stddev: 0.000010705495592100212",
            "extra": "mean: 1.7391462328767473 msec\nrounds: 584"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1226.5123328813625,
            "unit": "iter/sec",
            "range": "stddev: 0.000041776325121043214",
            "extra": "mean: 815.3199712641842 usec\nrounds: 1392"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1101.7811081091268,
            "unit": "iter/sec",
            "range": "stddev: 0.00001684366018209707",
            "extra": "mean: 907.6212984956666 usec\nrounds: 1263"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "b2d4efb89b4be51ec654ca235109221d09e7ab7a",
          "message": ":art: Lexicographically order labels for CI build system headers\n\nFollow-up to #737.",
          "timestamp": "2022-12-19T12:07:33+09:00",
          "tree_id": "7fe64403ed14900566e9b246603aaaf916eec699",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/b2d4efb89b4be51ec654ca235109221d09e7ab7a"
        },
        "date": 1671419446069,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 141.3960997020568,
            "unit": "iter/sec",
            "range": "stddev: 0.0008012386997320175",
            "extra": "mean: 7.072330864197477 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 193.16427467820023,
            "unit": "iter/sec",
            "range": "stddev: 0.0006508878716921195",
            "extra": "mean: 5.176940723981898 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 265.7551892344081,
            "unit": "iter/sec",
            "range": "stddev: 0.0005135117071460724",
            "extra": "mean: 3.7628616129032757 msec\nrounds: 310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 553.3788442635404,
            "unit": "iter/sec",
            "range": "stddev: 0.0002792264411173974",
            "extra": "mean: 1.8070802857142862 msec\nrounds: 700"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 134.8836792434155,
            "unit": "iter/sec",
            "range": "stddev: 0.0008285605428437565",
            "extra": "mean: 7.413795394736878 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 176.40827354802812,
            "unit": "iter/sec",
            "range": "stddev: 0.0007469651586419025",
            "extra": "mean: 5.66866836734698 msec\nrounds: 196"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 261.5385157292982,
            "unit": "iter/sec",
            "range": "stddev: 0.0003696644406368764",
            "extra": "mean: 3.8235286195285902 msec\nrounds: 297"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 509.3062615019463,
            "unit": "iter/sec",
            "range": "stddev: 0.0004067271479093737",
            "extra": "mean: 1.9634551459292797 msec\nrounds: 651"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.70978711344644,
            "unit": "iter/sec",
            "range": "stddev: 0.0012400523118402899",
            "extra": "mean: 72.94059285714282 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.797755988157228,
            "unit": "iter/sec",
            "range": "stddev: 0.002512772166884798",
            "extra": "mean: 72.47555333333273 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 191.2773287483417,
            "unit": "iter/sec",
            "range": "stddev: 0.0008635048555428115",
            "extra": "mean: 5.228011111111199 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.42667443887876,
            "unit": "iter/sec",
            "range": "stddev: 0.0006332093667656964",
            "extra": "mean: 3.1602898263027472 msec\nrounds: 403"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 636.3822396545863,
            "unit": "iter/sec",
            "range": "stddev: 0.0004142980826610303",
            "extra": "mean: 1.5713826340326171 msec\nrounds: 858"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 569.1276506004344,
            "unit": "iter/sec",
            "range": "stddev: 0.0005584839746911531",
            "extra": "mean: 1.7570750585479227 msec\nrounds: 854"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "6332b0d81f1f0aa7bbc62e79ea13a73dc7bbdbaa",
          "message": ":bookmark: Bump version number to `0.19.0`",
          "timestamp": "2022-12-19T13:19:11+09:00",
          "tree_id": "5c1a8a1f5af220fb2ec4439aa5aff08913e0588e",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/6332b0d81f1f0aa7bbc62e79ea13a73dc7bbdbaa"
        },
        "date": 1671423860834,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 249.93450332975908,
            "unit": "iter/sec",
            "range": "stddev: 0.00001504240193423755",
            "extra": "mean: 4.001048221343885 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 328.7209084463906,
            "unit": "iter/sec",
            "range": "stddev: 0.000012911424281830002",
            "extra": "mean: 3.0420942942942886 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 486.80833514813895,
            "unit": "iter/sec",
            "range": "stddev: 0.000011297930178834047",
            "extra": "mean: 2.054196544715475 msec\nrounds: 492"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 927.2361034536553,
            "unit": "iter/sec",
            "range": "stddev: 0.00000965644487184066",
            "extra": "mean: 1.0784739682539568 msec\nrounds: 945"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 236.44884826561736,
            "unit": "iter/sec",
            "range": "stddev: 0.000017241653995027675",
            "extra": "mean: 4.229244537814958 msec\nrounds: 238"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 301.24251637782095,
            "unit": "iter/sec",
            "range": "stddev: 0.000014965868465570492",
            "extra": "mean: 3.319584539473809 msec\nrounds: 304"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 464.9294791009309,
            "unit": "iter/sec",
            "range": "stddev: 0.00001070630656320458",
            "extra": "mean: 2.1508638297872085 msec\nrounds: 470"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 846.0405795061589,
            "unit": "iter/sec",
            "range": "stddev: 0.000009595719276991406",
            "extra": "mean: 1.1819764018691734 msec\nrounds: 856"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.622028683804565,
            "unit": "iter/sec",
            "range": "stddev: 0.0000650267493316514",
            "extra": "mean: 53.69984210526387 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.364447223458164,
            "unit": "iter/sec",
            "range": "stddev: 0.0005303912767206229",
            "extra": "mean: 51.64102999999898 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 346.4231806597076,
            "unit": "iter/sec",
            "range": "stddev: 0.000011163432571168822",
            "extra": "mean: 2.8866428571426996 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 545.6397797848748,
            "unit": "iter/sec",
            "range": "stddev: 0.000010923982197263016",
            "extra": "mean: 1.8327109515260458 msec\nrounds: 557"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1157.885038556805,
            "unit": "iter/sec",
            "range": "stddev: 0.00005020066180851475",
            "extra": "mean: 863.6435973353676 usec\nrounds: 1351"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1049.2492771316229,
            "unit": "iter/sec",
            "range": "stddev: 0.00001672762516726942",
            "extra": "mean: 953.0623673468161 usec\nrounds: 1225"
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
          "id": "7f61ab9b41c22755077fe22fb9b2f60b96e2dc14",
          "message": "Merge pull request #738 from TeoZosa/dependabot/pip/importlib-metadata-5.2.0",
          "timestamp": "2022-12-19T05:32:04Z",
          "tree_id": "f641aa1f704def6037e3e93b9b19fbaf784fcb6e",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/7f61ab9b41c22755077fe22fb9b2f60b96e2dc14"
        },
        "date": 1671428058800,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 238.9070142309614,
            "unit": "iter/sec",
            "range": "stddev: 0.000013595541361006753",
            "extra": "mean: 4.185728925619815 msec\nrounds: 242"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 320.4668679658729,
            "unit": "iter/sec",
            "range": "stddev: 0.000019651674313522848",
            "extra": "mean: 3.12044738461541 msec\nrounds: 325"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 464.0912112165237,
            "unit": "iter/sec",
            "range": "stddev: 0.00001163387557492618",
            "extra": "mean: 2.154748842105191 msec\nrounds: 475"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 901.1047197284984,
            "unit": "iter/sec",
            "range": "stddev: 0.000011445284806942954",
            "extra": "mean: 1.1097489316239502 msec\nrounds: 936"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 225.81661797310193,
            "unit": "iter/sec",
            "range": "stddev: 0.0000141973065669244",
            "extra": "mean: 4.428372052401894 msec\nrounds: 229"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 293.67638139623597,
            "unit": "iter/sec",
            "range": "stddev: 0.000013674197692073222",
            "extra": "mean: 3.4051086956522165 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 443.74810127014786,
            "unit": "iter/sec",
            "range": "stddev: 0.0000132819317857104",
            "extra": "mean: 2.2535307692307476 msec\nrounds: 455"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 826.000802981086,
            "unit": "iter/sec",
            "range": "stddev: 0.000013549600139027914",
            "extra": "mean: 1.210652576112445 msec\nrounds: 854"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.027724378857542,
            "unit": "iter/sec",
            "range": "stddev: 0.00046803653621997827",
            "extra": "mean: 49.93078500000028 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.141632021236667,
            "unit": "iter/sec",
            "range": "stddev: 0.00011743742791871311",
            "extra": "mean: 47.3000380952381 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 339.94966966079875,
            "unit": "iter/sec",
            "range": "stddev: 0.000011225850157576955",
            "extra": "mean: 2.9416119186048877 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 568.968385762162,
            "unit": "iter/sec",
            "range": "stddev: 0.00001499325838214646",
            "extra": "mean: 1.757566896551641 msec\nrounds: 580"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1206.160812161301,
            "unit": "iter/sec",
            "range": "stddev: 0.000041843376126834714",
            "extra": "mean: 829.0768444119117 usec\nrounds: 1369"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1110.1528801107877,
            "unit": "iter/sec",
            "range": "stddev: 0.000012081749529053154",
            "extra": "mean: 900.7768370606802 usec\nrounds: 1252"
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
          "id": "23faab732914021aa130e807b9cd28fc767affe0",
          "message": "Merge pull request #739 from TeoZosa/dependabot/pip/importlib-metadata-5.2.0",
          "timestamp": "2022-12-19T08:08:55Z",
          "tree_id": "540e21b48240ab8665b926474ca392a95b2288a6",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/23faab732914021aa130e807b9cd28fc767affe0"
        },
        "date": 1671437502920,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 249.18702732335845,
            "unit": "iter/sec",
            "range": "stddev: 0.000023791837128394202",
            "extra": "mean: 4.013049999999985 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 330.96493121199023,
            "unit": "iter/sec",
            "range": "stddev: 0.00001044970459568417",
            "extra": "mean: 3.021468154761926 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 477.41201345811146,
            "unit": "iter/sec",
            "range": "stddev: 0.000014217862960462322",
            "extra": "mean: 2.094626804123648 msec\nrounds: 485"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 907.5750589701947,
            "unit": "iter/sec",
            "range": "stddev: 0.000007856371866683655",
            "extra": "mean: 1.1018372421281364 msec\nrounds: 921"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 236.12887336039375,
            "unit": "iter/sec",
            "range": "stddev: 0.00001576387444570931",
            "extra": "mean: 4.2349755274262515 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 301.15137899098715,
            "unit": "iter/sec",
            "range": "stddev: 0.000011307880685792136",
            "extra": "mean: 3.320589144736833 msec\nrounds: 304"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 460.23559548453073,
            "unit": "iter/sec",
            "range": "stddev: 0.000015119627673309057",
            "extra": "mean: 2.1728002132195177 msec\nrounds: 469"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 828.5857169472574,
            "unit": "iter/sec",
            "range": "stddev: 0.000007436608297146037",
            "extra": "mean: 1.2068757396449952 msec\nrounds: 845"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.705670023317033,
            "unit": "iter/sec",
            "range": "stddev: 0.0000812746430461993",
            "extra": "mean: 53.459726315789695 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.547355570209486,
            "unit": "iter/sec",
            "range": "stddev: 0.00012743359581458307",
            "extra": "mean: 51.157815000000184 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 342.9961035840162,
            "unit": "iter/sec",
            "range": "stddev: 0.000011938048425785705",
            "extra": "mean: 2.9154850144093603 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 550.3942347194335,
            "unit": "iter/sec",
            "range": "stddev: 0.000009542497289531244",
            "extra": "mean: 1.8168794964027115 msec\nrounds: 556"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1153.7214668471086,
            "unit": "iter/sec",
            "range": "stddev: 0.00004573658335215386",
            "extra": "mean: 866.7603305785765 usec\nrounds: 1331"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1052.2036205238553,
            "unit": "iter/sec",
            "range": "stddev: 0.000016059614235381707",
            "extra": "mean: 950.3863895679575 usec\nrounds: 1227"
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
          "id": "f1ea631b4f10daf69d36ac505ed9795b91021e69",
          "message": "Merge pull request #741 from TeoZosa/dependabot/pip/sentry-sdk-1.12.1",
          "timestamp": "2022-12-19T15:52:53Z",
          "tree_id": "27fb6b20e1b0edbd2ed292d43718b8de1503a1f9",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/f1ea631b4f10daf69d36ac505ed9795b91021e69"
        },
        "date": 1671465403635,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 240.05453090578737,
            "unit": "iter/sec",
            "range": "stddev: 0.00001726656004650925",
            "extra": "mean: 4.16572016460903 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 321.35275710315295,
            "unit": "iter/sec",
            "range": "stddev: 0.000015747594409430487",
            "extra": "mean: 3.1118450920245384 msec\nrounds: 326"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 473.75510236712614,
            "unit": "iter/sec",
            "range": "stddev: 0.000013040012213781644",
            "extra": "mean: 2.110795208333338 msec\nrounds: 480"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 893.549836858417,
            "unit": "iter/sec",
            "range": "stddev: 0.000009826257015695461",
            "extra": "mean: 1.1191317582417621 msec\nrounds: 910"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 224.62928040699128,
            "unit": "iter/sec",
            "range": "stddev: 0.00006567674184210105",
            "extra": "mean: 4.45177938596502 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 292.06304851858573,
            "unit": "iter/sec",
            "range": "stddev: 0.000027936021427182285",
            "extra": "mean: 3.4239182432431674 msec\nrounds: 296"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 454.3778620039386,
            "unit": "iter/sec",
            "range": "stddev: 0.00001234094032364793",
            "extra": "mean: 2.200811447084391 msec\nrounds: 463"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 828.4222379110894,
            "unit": "iter/sec",
            "range": "stddev: 0.000009820353882158204",
            "extra": "mean: 1.2071139018691157 msec\nrounds: 856"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.21596231205526,
            "unit": "iter/sec",
            "range": "stddev: 0.00009198378920262537",
            "extra": "mean: 49.465861904762065 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.00523240339134,
            "unit": "iter/sec",
            "range": "stddev: 0.00008960496239445766",
            "extra": "mean: 47.607185714286494 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 341.143615940919,
            "unit": "iter/sec",
            "range": "stddev: 0.000012714994318003493",
            "extra": "mean: 2.9313167630057166 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 570.0797343644936,
            "unit": "iter/sec",
            "range": "stddev: 0.000010195021870115175",
            "extra": "mean: 1.7541405872193785 msec\nrounds: 579"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1203.4862244342735,
            "unit": "iter/sec",
            "range": "stddev: 0.00004244240126014247",
            "extra": "mean: 830.9193571950299 usec\nrounds: 1369"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1110.0715622026469,
            "unit": "iter/sec",
            "range": "stddev: 0.0000142557503726485",
            "extra": "mean: 900.8428231561588 usec\nrounds: 1261"
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
          "id": "8ab5e99e1f5dd1028e0e7d0d05d10b01b19d4301",
          "message": "Merge pull request #742 from TeoZosa/fix/debug-library-logging\n\n🐛 Fix library meta logger not honoring user-requested log level filtering & rich formatting logging",
          "timestamp": "2022-12-20T21:45:29+09:00",
          "tree_id": "e544b58e1a67cb3ce9ac53b8f7e61f48ebda8bb8",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/8ab5e99e1f5dd1028e0e7d0d05d10b01b19d4301"
        },
        "date": 1671540545640,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 217.13480005580854,
            "unit": "iter/sec",
            "range": "stddev: 0.00014163791454324386",
            "extra": "mean: 4.605434042553185 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 286.8151626645771,
            "unit": "iter/sec",
            "range": "stddev: 0.000056895150581978205",
            "extra": "mean: 3.48656601941744 msec\nrounds: 309"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 414.79899815465114,
            "unit": "iter/sec",
            "range": "stddev: 0.00006641060763021667",
            "extra": "mean: 2.410806208425716 msec\nrounds: 451"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 781.9346867900435,
            "unit": "iter/sec",
            "range": "stddev: 0.00003120114096378955",
            "extra": "mean: 1.2788791914387971 msec\nrounds: 841"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 202.18565462314356,
            "unit": "iter/sec",
            "range": "stddev: 0.000039591808727665105",
            "extra": "mean: 4.945949315068435 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 258.7321118722728,
            "unit": "iter/sec",
            "range": "stddev: 0.00004703616187639144",
            "extra": "mean: 3.865001498127398 msec\nrounds: 267"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 403.12079242672206,
            "unit": "iter/sec",
            "range": "stddev: 0.000052755218442395844",
            "extra": "mean: 2.480646046511671 msec\nrounds: 430"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 720.1995312340184,
            "unit": "iter/sec",
            "range": "stddev: 0.000029474722044476017",
            "extra": "mean: 1.3885040973111442 msec\nrounds: 781"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 15.934196548513547,
            "unit": "iter/sec",
            "range": "stddev: 0.00033431619657459273",
            "extra": "mean: 62.758106250000225 msec\nrounds: 16"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 16.515971381513413,
            "unit": "iter/sec",
            "range": "stddev: 0.0007827889219930494",
            "extra": "mean: 60.54745294117643 msec\nrounds: 17"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 294.98525073744827,
            "unit": "iter/sec",
            "range": "stddev: 0.00003346598673839095",
            "extra": "mean: 3.390000000000171 msec\nrounds: 314"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 473.23238939002437,
            "unit": "iter/sec",
            "range": "stddev: 0.00004209804275006007",
            "extra": "mean: 2.113126705652916 msec\nrounds: 513"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1001.8286594349369,
            "unit": "iter/sec",
            "range": "stddev: 0.000054664083760691034",
            "extra": "mean: 998.1746784565255 usec\nrounds: 1244"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 911.2499639079784,
            "unit": "iter/sec",
            "range": "stddev: 0.000024848978932402134",
            "extra": "mean: 1.097393733450928 msec\nrounds: 1133"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "c73c0191484889f362620fe16608d6dea791a876",
          "message": ":bookmark: Bump version number to `0.19.1`",
          "timestamp": "2022-12-20T21:48:24+09:00",
          "tree_id": "ddd815851c129e8efea4776025f0ff6b9ba6a5ec",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/c73c0191484889f362620fe16608d6dea791a876"
        },
        "date": 1671541408923,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 240.9952471588972,
            "unit": "iter/sec",
            "range": "stddev: 0.000017054242719356925",
            "extra": "mean: 4.149459426229524 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 321.3097769242801,
            "unit": "iter/sec",
            "range": "stddev: 0.000012694584309413097",
            "extra": "mean: 3.1122613496932594 msec\nrounds: 326"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 470.87528456074165,
            "unit": "iter/sec",
            "range": "stddev: 0.000013876443287892725",
            "extra": "mean: 2.12370458333326 msec\nrounds: 480"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 890.682511918431,
            "unit": "iter/sec",
            "range": "stddev: 0.000009358879118243233",
            "extra": "mean: 1.122734517203118 msec\nrounds: 901"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 226.31362403053842,
            "unit": "iter/sec",
            "range": "stddev: 0.000023921890869672008",
            "extra": "mean: 4.418646929824523 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 292.91418951037525,
            "unit": "iter/sec",
            "range": "stddev: 0.000014064205344168831",
            "extra": "mean: 3.4139691275167094 msec\nrounds: 298"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 449.36378151519466,
            "unit": "iter/sec",
            "range": "stddev: 0.000010161844512684171",
            "extra": "mean: 2.225368490153197 msec\nrounds: 457"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 814.5232342016236,
            "unit": "iter/sec",
            "range": "stddev: 0.000008758614763532219",
            "extra": "mean: 1.2277120627260882 msec\nrounds: 829"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.687101090114194,
            "unit": "iter/sec",
            "range": "stddev: 0.0001379601872395654",
            "extra": "mean: 50.794679999999914 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.73536695280128,
            "unit": "iter/sec",
            "range": "stddev: 0.00007335520171646897",
            "extra": "mean: 48.22678095238162 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 340.05188616770306,
            "unit": "iter/sec",
            "range": "stddev: 0.000011106355443237358",
            "extra": "mean: 2.9407276967928095 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 563.440781686737,
            "unit": "iter/sec",
            "range": "stddev: 0.00001008597329169886",
            "extra": "mean: 1.7748094076654575 msec\nrounds: 574"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1165.4484663224466,
            "unit": "iter/sec",
            "range": "stddev: 0.00004804118998689194",
            "extra": "mean: 858.0387969924432 usec\nrounds: 1330"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1072.114999511609,
            "unit": "iter/sec",
            "range": "stddev: 0.000015004151411379385",
            "extra": "mean: 932.7357610475925 usec\nrounds: 1222"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "a5f480666d7d5e9cef46a72f662dc999773c5c10",
          "message": ":bento: Update `.mutmut-cache`",
          "timestamp": "2022-12-20T22:07:13+09:00",
          "tree_id": "9dd564ecc8a9a0c727538d08ede01e5c29c878c8",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/a5f480666d7d5e9cef46a72f662dc999773c5c10"
        },
        "date": 1671543692378,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 244.12737756097815,
            "unit": "iter/sec",
            "range": "stddev: 0.000013935497098867826",
            "extra": "mean: 4.09622226720647 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 322.6119291268779,
            "unit": "iter/sec",
            "range": "stddev: 0.00005514514514683477",
            "extra": "mean: 3.099699390243926 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 470.250657344655,
            "unit": "iter/sec",
            "range": "stddev: 0.00001123700637529225",
            "extra": "mean: 2.1265254697285463 msec\nrounds: 479"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 899.2137819434706,
            "unit": "iter/sec",
            "range": "stddev: 0.000011043363117037267",
            "extra": "mean: 1.1120825993555172 msec\nrounds: 931"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 227.8210308990419,
            "unit": "iter/sec",
            "range": "stddev: 0.000034231688539995125",
            "extra": "mean: 4.389410389610371 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 293.7658562331478,
            "unit": "iter/sec",
            "range": "stddev: 0.00001867957722340177",
            "extra": "mean: 3.4040715719063965 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 452.39610669668843,
            "unit": "iter/sec",
            "range": "stddev: 0.000011336766902777498",
            "extra": "mean: 2.2104522678186 msec\nrounds: 463"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 836.1216150501949,
            "unit": "iter/sec",
            "range": "stddev: 0.000010073511230039149",
            "extra": "mean: 1.1959982638888806 msec\nrounds: 864"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.814386750674366,
            "unit": "iter/sec",
            "range": "stddev: 0.0002749476612397485",
            "extra": "mean: 50.468380000000046 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.915365971595765,
            "unit": "iter/sec",
            "range": "stddev: 0.00025128619237085105",
            "extra": "mean: 47.81173809523849 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 340.9260361458597,
            "unit": "iter/sec",
            "range": "stddev: 0.000012562742118948816",
            "extra": "mean: 2.933187536231953 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 573.9266027341964,
            "unit": "iter/sec",
            "range": "stddev: 0.000010508160760415759",
            "extra": "mean: 1.7423830769230462 msec\nrounds: 585"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1224.6499659652295,
            "unit": "iter/sec",
            "range": "stddev: 0.000040511170632035735",
            "extra": "mean: 816.5598561151573 usec\nrounds: 1390"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1119.5947190826887,
            "unit": "iter/sec",
            "range": "stddev: 0.000013764479684457903",
            "extra": "mean: 893.1803472772045 usec\nrounds: 1267"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "edf5f76eb7810cf223186cd1cbde9ed384ac118d",
          "message": ":memo: Add visual tl;dr of library to \"Features\" intro section",
          "timestamp": "2022-12-21T00:05:09+09:00",
          "tree_id": "37407cf54120d06b047669a222bf3b43092715df",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/edf5f76eb7810cf223186cd1cbde9ed384ac118d"
        },
        "date": 1671549029504,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 251.72505994326804,
            "unit": "iter/sec",
            "range": "stddev: 0.00001121456290781623",
            "extra": "mean: 3.9725881889763883 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 334.1157538132923,
            "unit": "iter/sec",
            "range": "stddev: 0.000020025603263012975",
            "extra": "mean: 2.992974705882355 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 479.8868051180678,
            "unit": "iter/sec",
            "range": "stddev: 0.00006351363751667347",
            "extra": "mean: 2.0838247464502953 msec\nrounds: 493"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 913.0300018506872,
            "unit": "iter/sec",
            "range": "stddev: 0.000007940184091102542",
            "extra": "mean: 1.095254261057169 msec\nrounds: 927"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 235.66903555479578,
            "unit": "iter/sec",
            "range": "stddev: 0.000014148774108377352",
            "extra": "mean: 4.24323881856549 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 303.48336420235637,
            "unit": "iter/sec",
            "range": "stddev: 0.000011257043782275593",
            "extra": "mean: 3.295073529411717 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 464.437910321261,
            "unit": "iter/sec",
            "range": "stddev: 0.000011075398609177797",
            "extra": "mean: 2.153140339702847 msec\nrounds: 471"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 839.561227389325,
            "unit": "iter/sec",
            "range": "stddev: 0.000008881003735511515",
            "extra": "mean: 1.191098358733848 msec\nrounds: 853"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.50348128392348,
            "unit": "iter/sec",
            "range": "stddev: 0.0005158436932324343",
            "extra": "mean: 54.043884210526244 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.237663343392136,
            "unit": "iter/sec",
            "range": "stddev: 0.00024960856993325875",
            "extra": "mean: 51.98136500000068 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 342.158314872313,
            "unit": "iter/sec",
            "range": "stddev: 0.000019808107377422015",
            "extra": "mean: 2.922623699421658 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 548.7693058720447,
            "unit": "iter/sec",
            "range": "stddev: 0.000011105031840995931",
            "extra": "mean: 1.8222593525177366 msec\nrounds: 556"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1162.5973180804,
            "unit": "iter/sec",
            "range": "stddev: 0.00004777661794002912",
            "extra": "mean: 860.1430473374311 usec\nrounds: 1352"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1054.5224966226767,
            "unit": "iter/sec",
            "range": "stddev: 0.00001724207830311411",
            "extra": "mean: 948.2965069049773 usec\nrounds: 1231"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "e906892e8535453a7ae7626f965f8fe4686f4327",
          "message": ":memo: Add visual tl;dr of library to \"Features\" intro section",
          "timestamp": "2022-12-21T00:11:39+09:00",
          "tree_id": "2b9c8b697a0fa61f31140a278a94546c111c62eb",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/e906892e8535453a7ae7626f965f8fe4686f4327"
        },
        "date": 1671551230817,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 210.15337389742834,
            "unit": "iter/sec",
            "range": "stddev: 0.00069515947720761",
            "extra": "mean: 4.758429433962264 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 285.9752351982905,
            "unit": "iter/sec",
            "range": "stddev: 0.0004600303510173856",
            "extra": "mean: 3.496806285714274 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 424.38757770065354,
            "unit": "iter/sec",
            "range": "stddev: 0.00021791512310785025",
            "extra": "mean: 2.3563366425992824 msec\nrounds: 554"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 831.1024903935199,
            "unit": "iter/sec",
            "range": "stddev: 0.0000779601187564791",
            "extra": "mean: 1.2032210365854017 msec\nrounds: 984"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 210.55175387892666,
            "unit": "iter/sec",
            "range": "stddev: 0.0002314947812394254",
            "extra": "mean: 4.749426122448872 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 267.362570136828,
            "unit": "iter/sec",
            "range": "stddev: 0.00014134566607076972",
            "extra": "mean: 3.7402393292682308 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 414.48151784785665,
            "unit": "iter/sec",
            "range": "stddev: 0.00012907145119970897",
            "extra": "mean: 2.412652813067214 msec\nrounds: 551"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 742.6982893635424,
            "unit": "iter/sec",
            "range": "stddev: 0.000059873623066064855",
            "extra": "mean: 1.3464417709335956 msec\nrounds: 1039"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 16.25401390483116,
            "unit": "iter/sec",
            "range": "stddev: 0.0007426445591107515",
            "extra": "mean: 61.52326470588112 msec\nrounds: 17"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.226296400823884,
            "unit": "iter/sec",
            "range": "stddev: 0.0011435183088373169",
            "extra": "mean: 58.05078333333292 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 309.7522251883415,
            "unit": "iter/sec",
            "range": "stddev: 0.00016099345551465752",
            "extra": "mean: 3.228386815920243 msec\nrounds: 402"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 502.72991971573623,
            "unit": "iter/sec",
            "range": "stddev: 0.00012769753466797758",
            "extra": "mean: 1.9891396170839413 msec\nrounds: 679"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1041.9991286590448,
            "unit": "iter/sec",
            "range": "stddev: 0.00006388171709095126",
            "extra": "mean: 959.6937007873569 usec\nrounds: 1651"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 939.016673208664,
            "unit": "iter/sec",
            "range": "stddev: 0.00004504585393969048",
            "extra": "mean: 1.0649438167939587 msec\nrounds: 1310"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "df079e98b066d94ac126565e27ad07f441ff8ce6",
          "message": ":memo: Add visual tl;dr of library to \"Features\" intro section",
          "timestamp": "2022-12-21T11:12:45+09:00",
          "tree_id": "7c86e247c2d45a01b3485279ef426d4bf023bf28",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/df079e98b066d94ac126565e27ad07f441ff8ce6"
        },
        "date": 1671589080541,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 226.07852217575027,
            "unit": "iter/sec",
            "range": "stddev: 0.0006197851119798265",
            "extra": "mean: 4.423241935483876 msec\nrounds: 310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 284.8547040504844,
            "unit": "iter/sec",
            "range": "stddev: 0.0005056957772314089",
            "extra": "mean: 3.5105616504854047 msec\nrounds: 412"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 416.52241153973875,
            "unit": "iter/sec",
            "range": "stddev: 0.00028315644936852786",
            "extra": "mean: 2.400831197301838 msec\nrounds: 593"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 809.6278560822103,
            "unit": "iter/sec",
            "range": "stddev: 0.00015795163869851934",
            "extra": "mean: 1.2351353680430421 msec\nrounds: 1114"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 202.69400834233892,
            "unit": "iter/sec",
            "range": "stddev: 0.0005673425656245055",
            "extra": "mean: 4.9335449438202215 msec\nrounds: 267"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 263.38380877101133,
            "unit": "iter/sec",
            "range": "stddev: 0.00036697352700439687",
            "extra": "mean: 3.796740599455035 msec\nrounds: 367"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 407.7246323516211,
            "unit": "iter/sec",
            "range": "stddev: 0.000259554749831215",
            "extra": "mean: 2.4526357267951413 msec\nrounds: 571"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 716.0895980238478,
            "unit": "iter/sec",
            "range": "stddev: 0.00024456221347891367",
            "extra": "mean: 1.3964732943470255 msec\nrounds: 1026"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 16.391879807835647,
            "unit": "iter/sec",
            "range": "stddev: 0.006356265099644063",
            "extra": "mean: 61.005815789472784 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 16.56059452534381,
            "unit": "iter/sec",
            "range": "stddev: 0.002017875890917039",
            "extra": "mean: 60.384305555554285 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 282.52272401096855,
            "unit": "iter/sec",
            "range": "stddev: 0.0003071047899949372",
            "extra": "mean: 3.5395382920107212 msec\nrounds: 363"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 450.5015789552247,
            "unit": "iter/sec",
            "range": "stddev: 0.00030417348085283707",
            "extra": "mean: 2.2197480468750808 msec\nrounds: 512"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 994.1816625084789,
            "unit": "iter/sec",
            "range": "stddev: 0.00033475420940353665",
            "extra": "mean: 1.0058523886638993 msec\nrounds: 1235"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 890.475902501424,
            "unit": "iter/sec",
            "range": "stddev: 0.00015996143959561826",
            "extra": "mean: 1.122995015576405 msec\nrounds: 1284"
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
          "id": "ad67e527eff42409f2067fd74bcd2137c298bfd2",
          "message": "Merge pull request #746 from TeoZosa/dependabot/github_actions/pypa/cibuildwheel-2.11.4",
          "timestamp": "2022-12-26T16:11:11Z",
          "tree_id": "868d6188aecf188d8119ce6b762d39b7ed963952",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/ad67e527eff42409f2067fd74bcd2137c298bfd2"
        },
        "date": 1672071555402,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 240.9673535651763,
            "unit": "iter/sec",
            "range": "stddev: 0.000011924285207827724",
            "extra": "mean: 4.14993975409836 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 319.4966698616304,
            "unit": "iter/sec",
            "range": "stddev: 0.000013575665516176928",
            "extra": "mean: 3.1299230769231063 msec\nrounds: 325"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 470.2507727119718,
            "unit": "iter/sec",
            "range": "stddev: 0.000010485643024275538",
            "extra": "mean: 2.126524948024911 msec\nrounds: 481"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 906.0857291986429,
            "unit": "iter/sec",
            "range": "stddev: 0.000010651107229506472",
            "extra": "mean: 1.1036483279395828 msec\nrounds: 927"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 224.27819309683184,
            "unit": "iter/sec",
            "range": "stddev: 0.000018495036755226987",
            "extra": "mean: 4.458748245614103 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 289.0678946742779,
            "unit": "iter/sec",
            "range": "stddev: 0.000017053537695849892",
            "extra": "mean: 3.459394897959185 msec\nrounds: 294"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 448.96255681811556,
            "unit": "iter/sec",
            "range": "stddev: 0.000010132100670472774",
            "extra": "mean: 2.2273572368421846 msec\nrounds: 456"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 827.2795029518861,
            "unit": "iter/sec",
            "range": "stddev: 0.000009914623904770495",
            "extra": "mean: 1.2087813084112626 msec\nrounds: 856"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.98023355494401,
            "unit": "iter/sec",
            "range": "stddev: 0.00023548369543525778",
            "extra": "mean: 50.049465000000204 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.89858543446217,
            "unit": "iter/sec",
            "range": "stddev: 0.00020100627886329998",
            "extra": "mean: 47.850128571428606 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 337.7008986112064,
            "unit": "iter/sec",
            "range": "stddev: 0.000010310798162048856",
            "extra": "mean: 2.9612002932550547 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 568.0573806394929,
            "unit": "iter/sec",
            "range": "stddev: 0.000010182930151515128",
            "extra": "mean: 1.760385542168726 msec\nrounds: 581"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1219.143345679005,
            "unit": "iter/sec",
            "range": "stddev: 0.000041487496181723595",
            "extra": "mean: 820.2480894016998 usec\nrounds: 1387"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1103.9428422553556,
            "unit": "iter/sec",
            "range": "stddev: 0.00001191243202833267",
            "extra": "mean: 905.844000000036 usec\nrounds: 1250"
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
          "id": "811aeb3c53ffea07bca222e7dfae5015906430a9",
          "message": "Merge pull request #748 from TeoZosa/dependabot/pip/pre-commit-2.21.0",
          "timestamp": "2022-12-26T16:54:48Z",
          "tree_id": "4996c0897caab7c378f945742c4ef96ca51262bf",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/811aeb3c53ffea07bca222e7dfae5015906430a9"
        },
        "date": 1672074347522,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 241.00870307019275,
            "unit": "iter/sec",
            "range": "stddev: 0.000020218913729436903",
            "extra": "mean: 4.149227755102082 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 322.76297703974217,
            "unit": "iter/sec",
            "range": "stddev: 0.000013229762054253723",
            "extra": "mean: 3.098248780487822 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 470.7074594672402,
            "unit": "iter/sec",
            "range": "stddev: 0.000011355933678983333",
            "extra": "mean: 2.124461764705891 msec\nrounds: 476"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 887.554450393783,
            "unit": "iter/sec",
            "range": "stddev: 0.000008532550036623413",
            "extra": "mean: 1.1266914379803157 msec\nrounds: 911"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 226.6046366290264,
            "unit": "iter/sec",
            "range": "stddev: 0.0000158982386082157",
            "extra": "mean: 4.412972368421111 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 294.0435143097282,
            "unit": "iter/sec",
            "range": "stddev: 0.000014185060678124147",
            "extra": "mean: 3.400857190635596 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 453.1891184849643,
            "unit": "iter/sec",
            "range": "stddev: 0.000011283491347272837",
            "extra": "mean: 2.2065843137254797 msec\nrounds: 459"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 838.4745536227682,
            "unit": "iter/sec",
            "range": "stddev: 0.000009591355089059805",
            "extra": "mean: 1.1926420374707072 msec\nrounds: 854"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.01829481495655,
            "unit": "iter/sec",
            "range": "stddev: 0.00008677176658474861",
            "extra": "mean: 49.95430476190489 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.923682958776194,
            "unit": "iter/sec",
            "range": "stddev: 0.0006949583500718784",
            "extra": "mean: 47.79273333333326 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 340.3427012164489,
            "unit": "iter/sec",
            "range": "stddev: 0.000010487086592061551",
            "extra": "mean: 2.9382149122805092 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 572.6057736931094,
            "unit": "iter/sec",
            "range": "stddev: 0.000010532705332153295",
            "extra": "mean: 1.7464022298454054 msec\nrounds: 583"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1203.1340053125784,
            "unit": "iter/sec",
            "range": "stddev: 0.0000407929954309915",
            "extra": "mean: 831.162609970613 usec\nrounds: 1364"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1115.1973992848984,
            "unit": "iter/sec",
            "range": "stddev: 0.000017086676089813236",
            "extra": "mean: 896.7022346368752 usec\nrounds: 1253"
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
          "id": "23312ae4f5e9f11a1725b352f60734087d051d66",
          "message": "Merge pull request #745 from TeoZosa/dependabot/pip/dot-github/workflows/tox-gh-actions-3.0.0\n\n⬆️ Bump tox-gh-actions from 2.12.0 to 3.0.0 in /.github/workflows",
          "timestamp": "2022-12-28T15:37:45+09:00",
          "tree_id": "8f91cfb5c258db3d2819e6d3bea3aabc289cdabe",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/23312ae4f5e9f11a1725b352f60734087d051d66"
        },
        "date": 1672209648325,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 242.007026501153,
            "unit": "iter/sec",
            "range": "stddev: 0.000011284064638006337",
            "extra": "mean: 4.132111428571417 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 323.455674196509,
            "unit": "iter/sec",
            "range": "stddev: 0.000014399195978918434",
            "extra": "mean: 3.0916137195122135 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 473.72585583829004,
            "unit": "iter/sec",
            "range": "stddev: 0.000009730839757615836",
            "extra": "mean: 2.1109255230125283 msec\nrounds: 478"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 903.2216640465115,
            "unit": "iter/sec",
            "range": "stddev: 0.000010634996536605545",
            "extra": "mean: 1.1071479347826017 msec\nrounds: 920"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 226.572975428857,
            "unit": "iter/sec",
            "range": "stddev: 0.000014406658792361254",
            "extra": "mean: 4.413589035087708 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 295.46026780755454,
            "unit": "iter/sec",
            "range": "stddev: 0.000012870658516362691",
            "extra": "mean: 3.3845498327759636 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 457.2261939368249,
            "unit": "iter/sec",
            "range": "stddev: 0.000010275174975983281",
            "extra": "mean: 2.1871012931034532 msec\nrounds: 464"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 833.7453890500228,
            "unit": "iter/sec",
            "range": "stddev: 0.00000836935229031406",
            "extra": "mean: 1.1994069330199346 msec\nrounds: 851"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.104618691493865,
            "unit": "iter/sec",
            "range": "stddev: 0.00013809123174835566",
            "extra": "mean: 49.73981428571404 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.94395606795835,
            "unit": "iter/sec",
            "range": "stddev: 0.00017600462250418343",
            "extra": "mean: 47.74647142857007 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 342.88152680187955,
            "unit": "iter/sec",
            "range": "stddev: 0.000014287208772412314",
            "extra": "mean: 2.916459248554998 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 571.0794140665402,
            "unit": "iter/sec",
            "range": "stddev: 0.000009801553183272864",
            "extra": "mean: 1.7510699481867222 msec\nrounds: 579"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1194.1553553375063,
            "unit": "iter/sec",
            "range": "stddev: 0.00005831864466392086",
            "extra": "mean: 837.4119795471404 usec\nrounds: 1369"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1106.022384865686,
            "unit": "iter/sec",
            "range": "stddev: 0.000013161577162721707",
            "extra": "mean: 904.1408326662744 usec\nrounds: 1249"
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
          "id": "0c2a117b5767b8060f03b63e30f41811ca47cdf7",
          "message": "Merge pull request #749 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.0.18\n\n⬆️ Bump tox from 3.27.1 to 4.0.18 in /.github/workflows",
          "timestamp": "2022-12-28T17:33:14+09:00",
          "tree_id": "98c38f999d60b86f7a62b44c67db5ce6043f436f",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/0c2a117b5767b8060f03b63e30f41811ca47cdf7"
        },
        "date": 1672216564254,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 242.92301562261562,
            "unit": "iter/sec",
            "range": "stddev: 0.000012862484817446592",
            "extra": "mean: 4.116530487804887 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 323.25790353254666,
            "unit": "iter/sec",
            "range": "stddev: 0.00001595313867567751",
            "extra": "mean: 3.0935051829268474 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 472.6250639766881,
            "unit": "iter/sec",
            "range": "stddev: 0.000011028803616953403",
            "extra": "mean: 2.1158420833333635 msec\nrounds: 480"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 908.3993199317449,
            "unit": "iter/sec",
            "range": "stddev: 0.000010649660680078313",
            "extra": "mean: 1.1008374599786552 msec\nrounds: 937"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 227.44252934131447,
            "unit": "iter/sec",
            "range": "stddev: 0.000016826769179846712",
            "extra": "mean: 4.396715086206844 msec\nrounds: 232"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 295.3266278163498,
            "unit": "iter/sec",
            "range": "stddev: 0.00001481469943601505",
            "extra": "mean: 3.3860813953486595 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 452.3027162985736,
            "unit": "iter/sec",
            "range": "stddev: 0.000011193061252437326",
            "extra": "mean: 2.2109086767895527 msec\nrounds: 461"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 840.3984188837662,
            "unit": "iter/sec",
            "range": "stddev: 0.000013177616278397174",
            "extra": "mean: 1.1899118055555362 msec\nrounds: 864"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.02755218965508,
            "unit": "iter/sec",
            "range": "stddev: 0.00018170434580837484",
            "extra": "mean: 49.93121428571458 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.963705536604266,
            "unit": "iter/sec",
            "range": "stddev: 0.00016608161820259846",
            "extra": "mean: 47.701490476190955 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 340.14616936237115,
            "unit": "iter/sec",
            "range": "stddev: 0.000011773168452535362",
            "extra": "mean: 2.9399125730993036 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 572.2526489545295,
            "unit": "iter/sec",
            "range": "stddev: 0.000013371960207285275",
            "extra": "mean: 1.7474798969073166 msec\nrounds: 582"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1218.1228646806271,
            "unit": "iter/sec",
            "range": "stddev: 0.000041018746637172125",
            "extra": "mean: 820.9352512746607 usec\nrounds: 1373"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1112.246400066164,
            "unit": "iter/sec",
            "range": "stddev: 0.000012376369922371057",
            "extra": "mean: 899.0813545816047 usec\nrounds: 1255"
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
          "id": "3f276fee0c42357caab3f788816c73e6dd9bc312",
          "message": "Merge pull request #750 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.0.19",
          "timestamp": "2022-12-29T16:08:04Z",
          "tree_id": "382786747ed546072351f982caa3c5c67881d651",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/3f276fee0c42357caab3f788816c73e6dd9bc312"
        },
        "date": 1672330253547,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 238.91540664188977,
            "unit": "iter/sec",
            "range": "stddev: 0.000048478130893379834",
            "extra": "mean: 4.185581893004078 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 318.1041620296898,
            "unit": "iter/sec",
            "range": "stddev: 0.000024008210500675465",
            "extra": "mean: 3.143624382716082 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 468.47439140085277,
            "unit": "iter/sec",
            "range": "stddev: 0.000011650746165766864",
            "extra": "mean: 2.1345883966245323 msec\nrounds: 474"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 900.3733912905441,
            "unit": "iter/sec",
            "range": "stddev: 0.000009447807649562481",
            "extra": "mean: 1.110650325379626 msec\nrounds: 922"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 225.04520151317516,
            "unit": "iter/sec",
            "range": "stddev: 0.000020902438499803682",
            "extra": "mean: 4.4435517543859095 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 290.93370947654506,
            "unit": "iter/sec",
            "range": "stddev: 0.000016736591939125937",
            "extra": "mean: 3.4372091216216374 msec\nrounds: 296"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 451.06220245829945,
            "unit": "iter/sec",
            "range": "stddev: 0.000010049401466387317",
            "extra": "mean: 2.216989130434731 msec\nrounds: 460"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 827.5605542335833,
            "unit": "iter/sec",
            "range": "stddev: 0.000012793710478054076",
            "extra": "mean: 1.2083707891637194 msec\nrounds: 849"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.04536064660724,
            "unit": "iter/sec",
            "range": "stddev: 0.00013414647718795514",
            "extra": "mean: 49.88685499999992 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.797389749322743,
            "unit": "iter/sec",
            "range": "stddev: 0.00010578248234603847",
            "extra": "mean: 48.08295714285801 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 339.0810882678618,
            "unit": "iter/sec",
            "range": "stddev: 0.000012796896626602357",
            "extra": "mean: 2.949147076023409 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 567.6791025130523,
            "unit": "iter/sec",
            "range": "stddev: 0.00001206997755079102",
            "extra": "mean: 1.7615585910651128 msec\nrounds: 582"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1222.9739032668674,
            "unit": "iter/sec",
            "range": "stddev: 0.00004139833184713508",
            "extra": "mean: 817.6789360171557 usec\nrounds: 1391"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1119.7986821120162,
            "unit": "iter/sec",
            "range": "stddev: 0.000012376135601473326",
            "extra": "mean: 893.017661097736 usec\nrounds: 1257"
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
          "id": "94637814913a0f17d0bb2ad192ed7e01a1dc4a4c",
          "message": "Merge pull request #751 from TeoZosa/dependabot/pip/cruft-2.12.0",
          "timestamp": "2022-12-29T16:17:28Z",
          "tree_id": "8fac5cd3d7e1a118ab017fb3eb45f9967163e7bf",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/94637814913a0f17d0bb2ad192ed7e01a1dc4a4c"
        },
        "date": 1672330831136,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 216.81955248818156,
            "unit": "iter/sec",
            "range": "stddev: 0.00009880558129583337",
            "extra": "mean: 4.612130172413801 msec\nrounds: 232"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 288.7098046030113,
            "unit": "iter/sec",
            "range": "stddev: 0.00008153824676877262",
            "extra": "mean: 3.463685624999968 msec\nrounds: 320"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 419.10808167935755,
            "unit": "iter/sec",
            "range": "stddev: 0.0000833624802252396",
            "extra": "mean: 2.3860193675889527 msec\nrounds: 506"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 760.5190272820715,
            "unit": "iter/sec",
            "range": "stddev: 0.000023318326695602248",
            "extra": "mean: 1.3148914940021699 msec\nrounds: 917"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 200.452465760216,
            "unit": "iter/sec",
            "range": "stddev: 0.00008189134884407698",
            "extra": "mean: 4.988713888888819 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 257.1866844259509,
            "unit": "iter/sec",
            "range": "stddev: 0.00007071629169107062",
            "extra": "mean: 3.8882261818182102 msec\nrounds: 275"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 392.6043320608686,
            "unit": "iter/sec",
            "range": "stddev: 0.00004883421204609524",
            "extra": "mean: 2.547093647058795 msec\nrounds: 425"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 707.6040416872106,
            "unit": "iter/sec",
            "range": "stddev: 0.000032550908811090794",
            "extra": "mean: 1.413219740259822 msec\nrounds: 770"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 16.236727669007468,
            "unit": "iter/sec",
            "range": "stddev: 0.0007325105928772136",
            "extra": "mean: 61.58876470588293 msec\nrounds: 17"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.023919931586818,
            "unit": "iter/sec",
            "range": "stddev: 0.0009375907407421127",
            "extra": "mean: 58.740877777776824 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 301.1042720376838,
            "unit": "iter/sec",
            "range": "stddev: 0.00008465298159851338",
            "extra": "mean: 3.3211086419751887 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 481.9710463984846,
            "unit": "iter/sec",
            "range": "stddev: 0.00005617878830723661",
            "extra": "mean: 2.074813430127126 msec\nrounds: 551"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 992.9609380696266,
            "unit": "iter/sec",
            "range": "stddev: 0.00005797515313039384",
            "extra": "mean: 1.007088961569886 msec\nrounds: 1223"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 888.9756305394105,
            "unit": "iter/sec",
            "range": "stddev: 0.000029863665618571947",
            "extra": "mean: 1.1248902283105584 msec\nrounds: 1095"
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
          "id": "bf3e762dbe6b3f71043f017fc65dfea2a9d11154",
          "message": "Merge pull request #752 from TeoZosa/dependabot/pip/gitpython-3.1.30",
          "timestamp": "2022-12-29T21:30:41Z",
          "tree_id": "61f5e3aca9751ebaab7ad23d57143861acf4048c",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/bf3e762dbe6b3f71043f017fc65dfea2a9d11154"
        },
        "date": 1672352920400,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 247.9600629446121,
            "unit": "iter/sec",
            "range": "stddev: 0.00015684436952882237",
            "extra": "mean: 4.032907509881437 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 328.88408149688286,
            "unit": "iter/sec",
            "range": "stddev: 0.00001021264349338937",
            "extra": "mean: 3.040584984984985 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 476.1651531997874,
            "unit": "iter/sec",
            "range": "stddev: 0.00007677243397817205",
            "extra": "mean: 2.100111680327905 msec\nrounds: 488"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 899.6813146296181,
            "unit": "iter/sec",
            "range": "stddev: 0.0000073371199742075996",
            "extra": "mean: 1.1115046892039557 msec\nrounds: 917"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 235.78378010544577,
            "unit": "iter/sec",
            "range": "stddev: 0.000011420669228112387",
            "extra": "mean: 4.241173839662703 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 299.2463225432416,
            "unit": "iter/sec",
            "range": "stddev: 0.000012526610753190925",
            "extra": "mean: 3.341728618421028 msec\nrounds: 304"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 461.8891960457836,
            "unit": "iter/sec",
            "range": "stddev: 0.000017679497950500554",
            "extra": "mean: 2.1650214132760914 msec\nrounds: 467"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 834.5279882272406,
            "unit": "iter/sec",
            "range": "stddev: 0.000008387811426388598",
            "extra": "mean: 1.1982821596244675 msec\nrounds: 852"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.696860324809766,
            "unit": "iter/sec",
            "range": "stddev: 0.00006415056302760497",
            "extra": "mean: 53.48491578947358 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.54522941994833,
            "unit": "iter/sec",
            "range": "stddev: 0.00017413547539051568",
            "extra": "mean: 51.1633800000002 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 343.2608040351592,
            "unit": "iter/sec",
            "range": "stddev: 0.000012107799805273171",
            "extra": "mean: 2.913236781609277 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 547.6571551949133,
            "unit": "iter/sec",
            "range": "stddev: 0.0000167249662648348",
            "extra": "mean: 1.825959892086311 msec\nrounds: 556"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1150.6363841088107,
            "unit": "iter/sec",
            "range": "stddev: 0.00004594824567199263",
            "extra": "mean: 869.0842857142212 usec\nrounds: 1330"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1051.3182261724419,
            "unit": "iter/sec",
            "range": "stddev: 0.00001651597461765053",
            "extra": "mean: 951.186781609145 usec\nrounds: 1218"
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
          "id": "38fd5bc384b38634f8dfb4e3924269b0fe036d32",
          "message": "Merge pull request #757 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.1.2",
          "timestamp": "2023-01-02T17:17:52Z",
          "tree_id": "7f9135c6730d662578a7b7242d7a5a2541a0a104",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/38fd5bc384b38634f8dfb4e3924269b0fe036d32"
        },
        "date": 1672680073916,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 178.59161654402828,
            "unit": "iter/sec",
            "range": "stddev: 0.0004016402265310816",
            "extra": "mean: 5.599366976744227 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 253.59110537420318,
            "unit": "iter/sec",
            "range": "stddev: 0.00034873318706492474",
            "extra": "mean: 3.9433559726962177 msec\nrounds: 293"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 329.2902433529201,
            "unit": "iter/sec",
            "range": "stddev: 0.0003384031981665695",
            "extra": "mean: 3.036834586466141 msec\nrounds: 399"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 664.2114518327755,
            "unit": "iter/sec",
            "range": "stddev: 0.00024078762183149237",
            "extra": "mean: 1.5055446533489818 msec\nrounds: 851"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 162.99403834371063,
            "unit": "iter/sec",
            "range": "stddev: 0.0006824032359107924",
            "extra": "mean: 6.135193717277369 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 220.90088588814353,
            "unit": "iter/sec",
            "range": "stddev: 0.000507391660428633",
            "extra": "mean: 4.526917110266208 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 315.0224741643119,
            "unit": "iter/sec",
            "range": "stddev: 0.00032563553195665625",
            "extra": "mean: 3.174376693766973 msec\nrounds: 369"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 612.8960860549729,
            "unit": "iter/sec",
            "range": "stddev: 0.0001976100429804355",
            "extra": "mean: 1.6315979539642653 msec\nrounds: 782"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.79025340788252,
            "unit": "iter/sec",
            "range": "stddev: 0.002222367254518895",
            "extra": "mean: 67.61209374999933 msec\nrounds: 16"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.987205921877829,
            "unit": "iter/sec",
            "range": "stddev: 0.0035003642330740958",
            "extra": "mean: 66.72357777777866 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 229.97783872890824,
            "unit": "iter/sec",
            "range": "stddev: 0.0003404659074006862",
            "extra": "mean: 4.348245054945374 msec\nrounds: 273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 365.10142773873343,
            "unit": "iter/sec",
            "range": "stddev: 0.00039071868798384033",
            "extra": "mean: 2.7389649122807596 msec\nrounds: 456"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 770.9009018795525,
            "unit": "iter/sec",
            "range": "stddev: 0.0002151762983307403",
            "extra": "mean: 1.2971835907337446 msec\nrounds: 1036"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 658.3172398553564,
            "unit": "iter/sec",
            "range": "stddev: 0.0002688876622873938",
            "extra": "mean: 1.5190244755244706 msec\nrounds: 1001"
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
          "id": "f636cbf8b178cf25b86ae1630942272ca92fed71",
          "message": "Merge pull request #758 from TeoZosa/dependabot/pip/pygments-2.14.0",
          "timestamp": "2023-01-02T17:25:11Z",
          "tree_id": "a4c5e6b707159cc5db6abdccc915f66d926c3ed7",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/f636cbf8b178cf25b86ae1630942272ca92fed71"
        },
        "date": 1672680486243,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 238.4071553010923,
            "unit": "iter/sec",
            "range": "stddev: 0.000022152969517342786",
            "extra": "mean: 4.1945049792531055 msec\nrounds: 241"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 318.6151177563119,
            "unit": "iter/sec",
            "range": "stddev: 0.000018197558492680446",
            "extra": "mean: 3.138583024691362 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 461.4100711283624,
            "unit": "iter/sec",
            "range": "stddev: 0.000017719184375404844",
            "extra": "mean: 2.1672695560253694 msec\nrounds: 473"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 888.1595601619442,
            "unit": "iter/sec",
            "range": "stddev: 0.000012917764279334505",
            "extra": "mean: 1.1259238146551767 msec\nrounds: 928"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 223.8390799064986,
            "unit": "iter/sec",
            "range": "stddev: 0.000029823913197902234",
            "extra": "mean: 4.467495132743205 msec\nrounds: 226"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 291.3873384326094,
            "unit": "iter/sec",
            "range": "stddev: 0.00001897658329872231",
            "extra": "mean: 3.431858108108136 msec\nrounds: 296"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 444.89940587678706,
            "unit": "iter/sec",
            "range": "stddev: 0.000019811853895196498",
            "extra": "mean: 2.2476991130820827 msec\nrounds: 451"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 823.0482161979072,
            "unit": "iter/sec",
            "range": "stddev: 0.000014767049155073254",
            "extra": "mean: 1.2149956470588397 msec\nrounds: 850"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.551160107187204,
            "unit": "iter/sec",
            "range": "stddev: 0.00023500516545338078",
            "extra": "mean: 51.1478600000002 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.620980197673354,
            "unit": "iter/sec",
            "range": "stddev: 0.00007493041438532792",
            "extra": "mean: 48.494299999998496 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 334.6554520343546,
            "unit": "iter/sec",
            "range": "stddev: 0.000017396994668300786",
            "extra": "mean: 2.9881479411766567 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 565.0722212158971,
            "unit": "iter/sec",
            "range": "stddev: 0.000015317619639072067",
            "extra": "mean: 1.7696852941173515 msec\nrounds: 578"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1194.847074938029,
            "unit": "iter/sec",
            "range": "stddev: 0.000044204250977794644",
            "extra": "mean: 836.9271858926927 usec\nrounds: 1361"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1086.1468212147065,
            "unit": "iter/sec",
            "range": "stddev: 0.000014538467812572685",
            "extra": "mean: 920.6858414239402 usec\nrounds: 1236"
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
          "id": "32a607fdc879226b79e37d62f3241496d43de46f",
          "message": "Merge pull request #762 from TeoZosa/dependabot/pip/pygments-2.14.0",
          "timestamp": "2023-01-03T11:21:57Z",
          "tree_id": "191ae65430e9797313ee608fcf4604a517f9fe1a",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/32a607fdc879226b79e37d62f3241496d43de46f"
        },
        "date": 1672745084761,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 240.6631368746332,
            "unit": "iter/sec",
            "range": "stddev: 0.000022019401624149116",
            "extra": "mean: 4.155185596707826 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 321.7746166218279,
            "unit": "iter/sec",
            "range": "stddev: 0.000016106017825444162",
            "extra": "mean: 3.107765337423338 msec\nrounds: 326"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 471.89569304659716,
            "unit": "iter/sec",
            "range": "stddev: 0.000014011831511895337",
            "extra": "mean: 2.1191123689727243 msec\nrounds: 477"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 895.9657195724603,
            "unit": "iter/sec",
            "range": "stddev: 0.000009779392308988471",
            "extra": "mean: 1.1161141304347928 msec\nrounds: 920"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 226.0443322506634,
            "unit": "iter/sec",
            "range": "stddev: 0.000019241605823309458",
            "extra": "mean: 4.423910964912349 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 293.83623946218665,
            "unit": "iter/sec",
            "range": "stddev: 0.000015679443650898655",
            "extra": "mean: 3.4032561872909772 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 452.01808425320957,
            "unit": "iter/sec",
            "range": "stddev: 0.000011275818648884066",
            "extra": "mean: 2.2123008676790556 msec\nrounds: 461"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 818.1393402594734,
            "unit": "iter/sec",
            "range": "stddev: 0.000009208045944200556",
            "extra": "mean: 1.2222856801909185 msec\nrounds: 838"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.23779017979545,
            "unit": "iter/sec",
            "range": "stddev: 0.00022113672898172384",
            "extra": "mean: 49.412509523809454 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.000176401481298,
            "unit": "iter/sec",
            "range": "stddev: 0.00014799215728950084",
            "extra": "mean: 47.618647619048694 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 338.2525812654369,
            "unit": "iter/sec",
            "range": "stddev: 0.000011991927977538561",
            "extra": "mean: 2.95637063953481 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 565.7163351229359,
            "unit": "iter/sec",
            "range": "stddev: 0.000009753576909894817",
            "extra": "mean: 1.7676703639513782 msec\nrounds: 577"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1209.548731882759,
            "unit": "iter/sec",
            "range": "stddev: 0.00004282883223457235",
            "extra": "mean: 826.754618181791 usec\nrounds: 1375"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1098.908236422596,
            "unit": "iter/sec",
            "range": "stddev: 0.000012574533545915155",
            "extra": "mean: 909.994089456838 usec\nrounds: 1252"
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
          "id": "303e1a87e5cd8e0c2bc00294c93b2b2366378d70",
          "message": "Merge pull request #764 from TeoZosa/dependabot/github_actions/release-drafter/release-drafter-5.22.0",
          "timestamp": "2023-01-03T20:28:20Z",
          "tree_id": "a08f54dce626322e6027d8fdb197cdb93b266bbf",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/303e1a87e5cd8e0c2bc00294c93b2b2366378d70"
        },
        "date": 1672777863873,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 254.1163624632402,
            "unit": "iter/sec",
            "range": "stddev: 0.0000127002058650106",
            "extra": "mean: 3.9352050781250156 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 332.8640641437975,
            "unit": "iter/sec",
            "range": "stddev: 0.000014405686622030524",
            "extra": "mean: 3.0042293768545685 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 481.977747292706,
            "unit": "iter/sec",
            "range": "stddev: 0.0001555837920453964",
            "extra": "mean: 2.0747845841785266 msec\nrounds: 493"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 913.765550628308,
            "unit": "iter/sec",
            "range": "stddev: 0.000007841990081395956",
            "extra": "mean: 1.0943726203208217 msec\nrounds: 935"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 236.4445595141299,
            "unit": "iter/sec",
            "range": "stddev: 0.000013927397163089399",
            "extra": "mean: 4.229321250000003 msec\nrounds: 240"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 303.86640205795106,
            "unit": "iter/sec",
            "range": "stddev: 0.00001302365419228941",
            "extra": "mean: 3.2909199346405127 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 461.7386188061791,
            "unit": "iter/sec",
            "range": "stddev: 0.000010761117713712192",
            "extra": "mean: 2.165727446808523 msec\nrounds: 470"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 843.7832964108336,
            "unit": "iter/sec",
            "range": "stddev: 0.000007892009491056117",
            "extra": "mean: 1.1851384167637107 msec\nrounds: 859"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.720196707886075,
            "unit": "iter/sec",
            "range": "stddev: 0.00009436255917010458",
            "extra": "mean: 53.41824210526269 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.392354157134427,
            "unit": "iter/sec",
            "range": "stddev: 0.00023812386709257338",
            "extra": "mean: 51.566714999999164 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 345.16231282489736,
            "unit": "iter/sec",
            "range": "stddev: 0.000011750194058205975",
            "extra": "mean: 2.897187679082754 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 546.6884713903434,
            "unit": "iter/sec",
            "range": "stddev: 0.000010571468648930733",
            "extra": "mean: 1.8291953321364003 msec\nrounds: 557"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1159.9192572104118,
            "unit": "iter/sec",
            "range": "stddev: 0.00004948548516113195",
            "extra": "mean: 862.1289747400045 usec\nrounds: 1346"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1060.544147885543,
            "unit": "iter/sec",
            "range": "stddev: 0.000018598449039711797",
            "extra": "mean: 942.9121852152476 usec\nrounds: 1231"
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
          "id": "b39171a1b0e66cd733edd6f3d680fbb120a24372",
          "message": "Merge pull request #763 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.1.3",
          "timestamp": "2023-01-03T20:39:34Z",
          "tree_id": "ae2b9ad8e633ffc407b51798dfb3100ed7f73f95",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/b39171a1b0e66cd733edd6f3d680fbb120a24372"
        },
        "date": 1672778540863,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 149.75155225151852,
            "unit": "iter/sec",
            "range": "stddev: 0.0006157460918465517",
            "extra": "mean: 6.677727108433761 msec\nrounds: 166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 190.5356836794429,
            "unit": "iter/sec",
            "range": "stddev: 0.0008959787693111263",
            "extra": "mean: 5.2483607305936415 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 270.71890999011885,
            "unit": "iter/sec",
            "range": "stddev: 0.0006661669306439927",
            "extra": "mean: 3.6938683006536177 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 554.5751315643435,
            "unit": "iter/sec",
            "range": "stddev: 0.00025046897144375747",
            "extra": "mean: 1.8031821895424769 msec\nrounds: 612"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 140.77129131942274,
            "unit": "iter/sec",
            "range": "stddev: 0.00102526022194896",
            "extra": "mean: 7.103721153845992 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 182.43428326834297,
            "unit": "iter/sec",
            "range": "stddev: 0.0006541707619021054",
            "extra": "mean: 5.48142587064679 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 272.29754608220884,
            "unit": "iter/sec",
            "range": "stddev: 0.0004690604087491859",
            "extra": "mean: 3.672453220338944 msec\nrounds: 295"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 529.1977589293225,
            "unit": "iter/sec",
            "range": "stddev: 0.00024595866979463296",
            "extra": "mean: 1.8896527491409045 msec\nrounds: 582"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.717229196518831,
            "unit": "iter/sec",
            "range": "stddev: 0.002674352100229428",
            "extra": "mean: 72.90101999999976 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.17801806052651,
            "unit": "iter/sec",
            "range": "stddev: 0.00237937133809944",
            "extra": "mean: 70.53172000000009 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.96028131580263,
            "unit": "iter/sec",
            "range": "stddev: 0.00030640634385196107",
            "extra": "mean: 4.927072398190154 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 331.7225858099831,
            "unit": "iter/sec",
            "range": "stddev: 0.0003826652853767019",
            "extra": "mean: 3.0145671195654393 msec\nrounds: 368"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 663.4423626494086,
            "unit": "iter/sec",
            "range": "stddev: 0.00033651608494332383",
            "extra": "mean: 1.5072899415204257 msec\nrounds: 855"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 607.3341125572666,
            "unit": "iter/sec",
            "range": "stddev: 0.0002443907962452164",
            "extra": "mean: 1.6465401486989721 msec\nrounds: 807"
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
          "id": "b84599e42755c96e2c4c51313957fcd1054482c6",
          "message": "Merge pull request #761 from TeoZosa/dependabot/pip/importlib-metadata-6.0.0\n\n⬆️ Bump importlib-metadata from 4.13.0 to 6.0.0",
          "timestamp": "2023-01-04T22:52:06+09:00",
          "tree_id": "4ce2f1ff5e6987afa410c61c14774dcdd8d386a3",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/b84599e42755c96e2c4c51313957fcd1054482c6"
        },
        "date": 1672840692043,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 241.05288739866626,
            "unit": "iter/sec",
            "range": "stddev: 0.00003767953553273047",
            "extra": "mean: 4.1484672131147144 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 318.7573657300972,
            "unit": "iter/sec",
            "range": "stddev: 0.00015322485621659533",
            "extra": "mean: 3.1371824074074395 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 475.5396633693162,
            "unit": "iter/sec",
            "range": "stddev: 0.000012477024314385238",
            "extra": "mean: 2.1028740124740644 msec\nrounds: 481"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 899.0407177663168,
            "unit": "iter/sec",
            "range": "stddev: 0.000019861765018645642",
            "extra": "mean: 1.112296673819756 msec\nrounds: 932"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 226.27863734016586,
            "unit": "iter/sec",
            "range": "stddev: 0.000019614634048283355",
            "extra": "mean: 4.419330131004346 msec\nrounds: 229"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 293.233619422058,
            "unit": "iter/sec",
            "range": "stddev: 0.000015303272315071164",
            "extra": "mean: 3.4102501683501605 msec\nrounds: 297"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 453.7485820356673,
            "unit": "iter/sec",
            "range": "stddev: 0.000012136886381759935",
            "extra": "mean: 2.203863636363703 msec\nrounds: 462"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 831.9738925233788,
            "unit": "iter/sec",
            "range": "stddev: 0.000011011323964286104",
            "extra": "mean: 1.2019607934655228 msec\nrounds: 857"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.440162349396072,
            "unit": "iter/sec",
            "range": "stddev: 0.00012592249959642444",
            "extra": "mean: 48.92329047619067 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.059302037295975,
            "unit": "iter/sec",
            "range": "stddev: 0.00024918595413904785",
            "extra": "mean: 47.484954545454656 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 341.21114482885207,
            "unit": "iter/sec",
            "range": "stddev: 0.000019140921200187153",
            "extra": "mean: 2.930736627907009 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 572.2585917806211,
            "unit": "iter/sec",
            "range": "stddev: 0.000010916327899332934",
            "extra": "mean: 1.7474617495709988 msec\nrounds: 583"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1203.9168124889138,
            "unit": "iter/sec",
            "range": "stddev: 0.000040782642526631845",
            "extra": "mean: 830.6221739130405 usec\nrounds: 1380"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1096.5899138939976,
            "unit": "iter/sec",
            "range": "stddev: 0.000012269744140745907",
            "extra": "mean: 911.9179260449276 usec\nrounds: 1244"
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
          "id": "eb88bbf190d39eb2b6cca816200f06d6fa049b81",
          "message": "Merge pull request #759 from TeoZosa/dependabot/pip/docs/importlib-metadata-6.0.0\n\n⬆️ Bump importlib-metadata from 5.2.0 to 6.0.0 in /docs",
          "timestamp": "2023-01-04T22:52:20+09:00",
          "tree_id": "4ce2f1ff5e6987afa410c61c14774dcdd8d386a3",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/eb88bbf190d39eb2b6cca816200f06d6fa049b81"
        },
        "date": 1672841026068,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 241.15765913280313,
            "unit": "iter/sec",
            "range": "stddev: 0.00001698174986183483",
            "extra": "mean: 4.14666489795918 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 316.1682566491945,
            "unit": "iter/sec",
            "range": "stddev: 0.0005593377292088488",
            "extra": "mean: 3.162872865853681 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 466.0417594956274,
            "unit": "iter/sec",
            "range": "stddev: 0.000013334314127881538",
            "extra": "mean: 2.1457304621848645 msec\nrounds: 476"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 878.9257642374617,
            "unit": "iter/sec",
            "range": "stddev: 0.00006607206592942717",
            "extra": "mean: 1.137752516411417 msec\nrounds: 914"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 224.83442128211107,
            "unit": "iter/sec",
            "range": "stddev: 0.00002502140139675485",
            "extra": "mean: 4.447717543859753 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 292.526076926867,
            "unit": "iter/sec",
            "range": "stddev: 0.000014397963381396014",
            "extra": "mean: 3.4184986531987196 msec\nrounds: 297"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 451.48377754429225,
            "unit": "iter/sec",
            "range": "stddev: 0.000013592582388270794",
            "extra": "mean: 2.214919006479466 msec\nrounds: 463"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 824.7237394296062,
            "unit": "iter/sec",
            "range": "stddev: 0.000012276997849702493",
            "extra": "mean: 1.212527240566178 msec\nrounds: 848"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.117071778191175,
            "unit": "iter/sec",
            "range": "stddev: 0.00012515175550062503",
            "extra": "mean: 49.709023809523586 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.89885788736799,
            "unit": "iter/sec",
            "range": "stddev: 0.000200896347593016",
            "extra": "mean: 47.84950476190546 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 338.16231751805657,
            "unit": "iter/sec",
            "range": "stddev: 0.000012268431030315164",
            "extra": "mean: 2.9571597667637937 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 566.8329442128486,
            "unit": "iter/sec",
            "range": "stddev: 0.000011380670126621799",
            "extra": "mean: 1.764188214904628 msec\nrounds: 577"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1215.4507678537998,
            "unit": "iter/sec",
            "range": "stddev: 0.00004202509246291817",
            "extra": "mean: 822.7400290064935 usec\nrounds: 1379"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1109.4216055733295,
            "unit": "iter/sec",
            "range": "stddev: 0.000011478109164016028",
            "extra": "mean: 901.3705835332255 usec\nrounds: 1251"
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
          "id": "73c45809ef5737c2ec65e032e603fe1a936652c5",
          "message": "Merge pull request #756 from TeoZosa/dependabot/pip/rich-13.0.0\n\n⬆️ Bump rich from 12.6.0 to 13.0.0",
          "timestamp": "2023-01-04T22:52:45+09:00",
          "tree_id": "3ef513042fa23d6a7634201feea5cb4decb7d810",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/73c45809ef5737c2ec65e032e603fe1a936652c5"
        },
        "date": 1672841451148,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 241.36468578504918,
            "unit": "iter/sec",
            "range": "stddev: 0.000012569730697540664",
            "extra": "mean: 4.143108163265295 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 320.2942777364022,
            "unit": "iter/sec",
            "range": "stddev: 0.00001441192123604795",
            "extra": "mean: 3.122128834355843 msec\nrounds: 326"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 472.4771268518574,
            "unit": "iter/sec",
            "range": "stddev: 0.000010563598063030945",
            "extra": "mean: 2.1165045738045736 msec\nrounds: 481"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 906.915931606136,
            "unit": "iter/sec",
            "range": "stddev: 0.000011801153119707788",
            "extra": "mean: 1.1026380341880349 msec\nrounds: 936"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 225.3218915930974,
            "unit": "iter/sec",
            "range": "stddev: 0.000013263753512439568",
            "extra": "mean: 4.43809517543849 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 290.88104625982913,
            "unit": "iter/sec",
            "range": "stddev: 0.00004363062280998937",
            "extra": "mean: 3.4378314189187535 msec\nrounds: 296"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 456.5082780993043,
            "unit": "iter/sec",
            "range": "stddev: 0.000011824044526133628",
            "extra": "mean: 2.1905407809110304 msec\nrounds: 461"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 844.0901852166186,
            "unit": "iter/sec",
            "range": "stddev: 0.000012236532966091186",
            "extra": "mean: 1.1847075318656504 msec\nrounds: 863"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.9046091511044,
            "unit": "iter/sec",
            "range": "stddev: 0.00018408041892446235",
            "extra": "mean: 50.23961999999962 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.984624565580642,
            "unit": "iter/sec",
            "range": "stddev: 0.00007792071917116355",
            "extra": "mean: 47.65393809523845 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 338.666577143179,
            "unit": "iter/sec",
            "range": "stddev: 0.000013179791119104502",
            "extra": "mean: 2.9527566860464867 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 568.190460582669,
            "unit": "iter/sec",
            "range": "stddev: 0.000010838714975353409",
            "extra": "mean: 1.7599732297063175 msec\nrounds: 579"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1215.5364283283352,
            "unit": "iter/sec",
            "range": "stddev: 0.00004226871188981008",
            "extra": "mean: 822.6820494185013 usec\nrounds: 1376"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1109.7575945769802,
            "unit": "iter/sec",
            "range": "stddev: 0.000012875437375512098",
            "extra": "mean: 901.0976855546387 usec\nrounds: 1253"
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
          "id": "93114cb2cb4f9d09ff5f94b18b6d312d75234035",
          "message": "Merge pull request #765 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.2.1",
          "timestamp": "2023-01-04T18:50:34Z",
          "tree_id": "d9c771061fedb833bc5dc5f796d19abe63337f10",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/93114cb2cb4f9d09ff5f94b18b6d312d75234035"
        },
        "date": 1672858418071,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 241.55679792308493,
            "unit": "iter/sec",
            "range": "stddev: 0.000014825939068765562",
            "extra": "mean: 4.139813114754129 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 319.890883845754,
            "unit": "iter/sec",
            "range": "stddev: 0.00002032763575909151",
            "extra": "mean: 3.1260659509202617 msec\nrounds: 326"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 470.8803573286899,
            "unit": "iter/sec",
            "range": "stddev: 0.000013183596104779135",
            "extra": "mean: 2.1236817047816823 msec\nrounds: 481"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 902.8487436738984,
            "unit": "iter/sec",
            "range": "stddev: 0.000012320537176506141",
            "extra": "mean: 1.107605240641717 msec\nrounds: 935"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 225.28829490949673,
            "unit": "iter/sec",
            "range": "stddev: 0.00001629554664327197",
            "extra": "mean: 4.438757017543774 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 291.61117818058034,
            "unit": "iter/sec",
            "range": "stddev: 0.0000187927452904684",
            "extra": "mean: 3.429223825503526 msec\nrounds: 298"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 452.18519972281365,
            "unit": "iter/sec",
            "range": "stddev: 0.000013762523796153384",
            "extra": "mean: 2.2114832608696458 msec\nrounds: 460"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 840.9680328008598,
            "unit": "iter/sec",
            "range": "stddev: 0.000013865387541970291",
            "extra": "mean: 1.189105841121548 msec\nrounds: 856"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.875430737850316,
            "unit": "iter/sec",
            "range": "stddev: 0.00015753025398644905",
            "extra": "mean: 50.313375000000526 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.804335227188275,
            "unit": "iter/sec",
            "range": "stddev: 0.0002637426861086058",
            "extra": "mean: 48.06690476190481 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 339.90886874760054,
            "unit": "iter/sec",
            "range": "stddev: 0.000014571730238438897",
            "extra": "mean: 2.941965014577335 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 568.2339639885276,
            "unit": "iter/sec",
            "range": "stddev: 0.000012815074081040676",
            "extra": "mean: 1.7598384879721645 msec\nrounds: 582"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1212.1534957265417,
            "unit": "iter/sec",
            "range": "stddev: 0.000043849372934070256",
            "extra": "mean: 824.9780275563361 usec\nrounds: 1379"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1102.2214893735384,
            "unit": "iter/sec",
            "range": "stddev: 0.000013803538961584548",
            "extra": "mean: 907.2586677368836 usec\nrounds: 1246"
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
          "id": "d6c1f874e45e1daaabc306ca037af79e37bdabb5",
          "message": "Merge pull request #766 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.2.3",
          "timestamp": "2023-01-05T17:02:10Z",
          "tree_id": "fefaa29742d74a16c94ee32e80776b945caf4ba3",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/d6c1f874e45e1daaabc306ca037af79e37bdabb5"
        },
        "date": 1672938355244,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 148.28459874673004,
            "unit": "iter/sec",
            "range": "stddev: 0.0006755757759370697",
            "extra": "mean: 6.7437886904762046 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 199.93375120942497,
            "unit": "iter/sec",
            "range": "stddev: 0.0005030873618895324",
            "extra": "mean: 5.001656768558942 msec\nrounds: 229"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 276.4423603811754,
            "unit": "iter/sec",
            "range": "stddev: 0.00037709328233268935",
            "extra": "mean: 3.617390614886734 msec\nrounds: 309"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 585.6753081469345,
            "unit": "iter/sec",
            "range": "stddev: 0.000299081601985624",
            "extra": "mean: 1.7074306976744178 msec\nrounds: 645"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 146.81638945955848,
            "unit": "iter/sec",
            "range": "stddev: 0.0008222690092641037",
            "extra": "mean: 6.811228662420256 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 188.9002229022635,
            "unit": "iter/sec",
            "range": "stddev: 0.0004789686562433107",
            "extra": "mean: 5.293799999999987 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 255.29187641798964,
            "unit": "iter/sec",
            "range": "stddev: 0.0005570210485562206",
            "extra": "mean: 3.917085079364997 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 490.85417961530845,
            "unit": "iter/sec",
            "range": "stddev: 0.0003428263812776783",
            "extra": "mean: 2.0372649180327214 msec\nrounds: 610"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.438887733144643,
            "unit": "iter/sec",
            "range": "stddev: 0.0033810823913992083",
            "extra": "mean: 74.41091999999945 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.452859019405954,
            "unit": "iter/sec",
            "range": "stddev: 0.003348016530201484",
            "extra": "mean: 69.19046250000038 msec\nrounds: 16"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.2892960126975,
            "unit": "iter/sec",
            "range": "stddev: 0.0008553189415715633",
            "extra": "mean: 5.255156338027929 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 310.7436877746574,
            "unit": "iter/sec",
            "range": "stddev: 0.0004898970670030424",
            "extra": "mean: 3.218086285714585 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 613.5542694236224,
            "unit": "iter/sec",
            "range": "stddev: 0.0002604012629544097",
            "extra": "mean: 1.629847675804469 msec\nrounds: 839"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 540.7976502549728,
            "unit": "iter/sec",
            "range": "stddev: 0.00047151728144367324",
            "extra": "mean: 1.8491204603579996 msec\nrounds: 782"
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
          "id": "dd3dcf17494bd78be7074c2355109c4131e433cf",
          "message": "Merge pull request #768 from TeoZosa/dependabot/pip/docs/orjson-3.8.4",
          "timestamp": "2023-01-05T18:16:35Z",
          "tree_id": "4f656f450805c9f564a68fbecfb13b7fa8d5bfd7",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/dd3dcf17494bd78be7074c2355109c4131e433cf"
        },
        "date": 1672947627342,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 251.296750594505,
            "unit": "iter/sec",
            "range": "stddev: 0.000011699889221706122",
            "extra": "mean: 3.979359055118107 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 328.8579766766809,
            "unit": "iter/sec",
            "range": "stddev: 0.000012412464449303045",
            "extra": "mean: 3.0408263473054125 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 478.9671690225746,
            "unit": "iter/sec",
            "range": "stddev: 0.000010280663450466738",
            "extra": "mean: 2.087825773195883 msec\nrounds: 485"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 901.5201225911991,
            "unit": "iter/sec",
            "range": "stddev: 0.000008135380997832885",
            "extra": "mean: 1.109237580993472 msec\nrounds: 926"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 233.4244686301379,
            "unit": "iter/sec",
            "range": "stddev: 0.00003303039867625986",
            "extra": "mean: 4.284041025641165 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 298.94934154924,
            "unit": "iter/sec",
            "range": "stddev: 0.000013036928659575581",
            "extra": "mean: 3.345048344370713 msec\nrounds: 302"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 460.1715578944691,
            "unit": "iter/sec",
            "range": "stddev: 0.000011206442199588811",
            "extra": "mean: 2.1731025806452156 msec\nrounds: 465"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 819.6238238885703,
            "unit": "iter/sec",
            "range": "stddev: 0.00007741384212313274",
            "extra": "mean: 1.2200719047619488 msec\nrounds: 840"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.552132958254703,
            "unit": "iter/sec",
            "range": "stddev: 0.00006916954464504826",
            "extra": "mean: 53.90215789473704 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.417928184734308,
            "unit": "iter/sec",
            "range": "stddev: 0.00011631762775537986",
            "extra": "mean: 51.498800000000244 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 340.4936725254099,
            "unit": "iter/sec",
            "range": "stddev: 0.000011638888962683448",
            "extra": "mean: 2.9369121387281383 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 534.2735500218475,
            "unit": "iter/sec",
            "range": "stddev: 0.00001377521594921359",
            "extra": "mean: 1.8717003676470751 msec\nrounds: 544"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1165.7896683318943,
            "unit": "iter/sec",
            "range": "stddev: 0.00004621610169588591",
            "extra": "mean: 857.7876671620195 usec\nrounds: 1346"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1050.5127880127807,
            "unit": "iter/sec",
            "range": "stddev: 0.000016004048531911018",
            "extra": "mean: 951.9160655737148 usec\nrounds: 1220"
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
          "id": "639b1120d0c461b03a0676d046937482bf1fe415",
          "message": "Merge pull request #771 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.2.4",
          "timestamp": "2023-01-06T15:41:04Z",
          "tree_id": "524ff09ef85bca5ce1866f85d1d22b6e7b3e2e51",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/639b1120d0c461b03a0676d046937482bf1fe415"
        },
        "date": 1673019862613,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 206.14596442515293,
            "unit": "iter/sec",
            "range": "stddev: 0.000016792520559722736",
            "extra": "mean: 4.850931730769235 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 269.90298999513766,
            "unit": "iter/sec",
            "range": "stddev: 0.000021567602500936094",
            "extra": "mean: 3.705034909090912 msec\nrounds: 275"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 392.15415115418574,
            "unit": "iter/sec",
            "range": "stddev: 0.00001295063047629049",
            "extra": "mean: 2.5500176322418264 msec\nrounds: 397"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 746.0837003546654,
            "unit": "iter/sec",
            "range": "stddev: 0.000011078307469392943",
            "extra": "mean: 1.3403321899736325 msec\nrounds: 758"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 190.5305897859417,
            "unit": "iter/sec",
            "range": "stddev: 0.00001785924495820791",
            "extra": "mean: 5.2485010471204925 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 243.1730644906784,
            "unit": "iter/sec",
            "range": "stddev: 0.000014242715078347045",
            "extra": "mean: 4.112297560975686 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 374.3899624286999,
            "unit": "iter/sec",
            "range": "stddev: 0.000013892086626506465",
            "extra": "mean: 2.671011780104664 msec\nrounds: 382"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 670.7652015215289,
            "unit": "iter/sec",
            "range": "stddev: 0.00002453557230406793",
            "extra": "mean: 1.4908346433769255 msec\nrounds: 687"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 15.183414700620096,
            "unit": "iter/sec",
            "range": "stddev: 0.0001120392364306449",
            "extra": "mean: 65.86133749999989 msec\nrounds: 16"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 15.696160012933646,
            "unit": "iter/sec",
            "range": "stddev: 0.00008477677354960858",
            "extra": "mean: 63.70984999999996 msec\nrounds: 16"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 274.36441767866097,
            "unit": "iter/sec",
            "range": "stddev: 0.0000688513089666355",
            "extra": "mean: 3.644787500000137 msec\nrounds: 280"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 447.32194251767766,
            "unit": "iter/sec",
            "range": "stddev: 0.000014022691138858969",
            "extra": "mean: 2.235526373626264 msec\nrounds: 455"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 954.8390790671604,
            "unit": "iter/sec",
            "range": "stddev: 0.00004776322691977244",
            "extra": "mean: 1.0472968921391026 msec\nrounds: 1094"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 850.3821656924766,
            "unit": "iter/sec",
            "range": "stddev: 0.00002343311979096009",
            "extra": "mean: 1.1759418768921237 msec\nrounds: 991"
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
          "id": "304b1f91062f070502017967302355528e614edb",
          "message": "Merge pull request #773 from TeoZosa/feat/make-sentry-sdk-dependency-an-optional-extra\n\n✨  Make `Sentry` integration an optional extra",
          "timestamp": "2023-01-09T15:06:54+09:00",
          "tree_id": "4e1ccee7db11f148caf18b506df8a003c10da5ae",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/304b1f91062f070502017967302355528e614edb"
        },
        "date": 1673244601533,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 241.38304405299647,
            "unit": "iter/sec",
            "range": "stddev: 0.00001941540479772272",
            "extra": "mean: 4.142793061224494 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 320.17467942387094,
            "unit": "iter/sec",
            "range": "stddev: 0.000013597836170780318",
            "extra": "mean: 3.1232950769230756 msec\nrounds: 325"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 472.84781987663365,
            "unit": "iter/sec",
            "range": "stddev: 0.00001273608979559132",
            "extra": "mean: 2.1148453222453276 msec\nrounds: 481"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 886.5419689262673,
            "unit": "iter/sec",
            "range": "stddev: 0.000008147154103066657",
            "extra": "mean: 1.1279781838316658 msec\nrounds: 903"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 225.3800693834426,
            "unit": "iter/sec",
            "range": "stddev: 0.00001816474898078762",
            "extra": "mean: 4.436949561403695 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 294.5006133466119,
            "unit": "iter/sec",
            "range": "stddev: 0.000013320658568619373",
            "extra": "mean: 3.3955786666666534 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 457.28896238651447,
            "unit": "iter/sec",
            "range": "stddev: 0.00001160850389374135",
            "extra": "mean: 2.1868010869564123 msec\nrounds: 460"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 823.7061443145308,
            "unit": "iter/sec",
            "range": "stddev: 0.000009670770754721142",
            "extra": "mean: 1.2140251798560722 msec\nrounds: 834"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.288649515029004,
            "unit": "iter/sec",
            "range": "stddev: 0.00019311216318885905",
            "extra": "mean: 49.288642857142406 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.19498072027484,
            "unit": "iter/sec",
            "range": "stddev: 0.00009622503701796483",
            "extra": "mean: 47.18098181818175 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 338.8844904847229,
            "unit": "iter/sec",
            "range": "stddev: 0.000030199857566518357",
            "extra": "mean: 2.950857971014405 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 565.4026862604998,
            "unit": "iter/sec",
            "range": "stddev: 0.00001839677290791262",
            "extra": "mean: 1.7686509532062373 msec\nrounds: 577"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1213.497514138124,
            "unit": "iter/sec",
            "range": "stddev: 0.00004098387725532423",
            "extra": "mean: 824.064316860378 usec\nrounds: 1376"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1101.1098797814298,
            "unit": "iter/sec",
            "range": "stddev: 0.000012369170308437295",
            "extra": "mean: 908.1745776347951 usec\nrounds: 1243"
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
          "id": "8454547e2de3bf9d9db9078d09bc0131a13aa785",
          "message": "Merge pull request #776 from TeoZosa/dependabot/pip/rich-13.0.1",
          "timestamp": "2023-01-09T08:27:40Z",
          "tree_id": "a1ef4dd0d72f0fb75a7e651d220915f92c16690a",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/8454547e2de3bf9d9db9078d09bc0131a13aa785"
        },
        "date": 1673253652058,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 241.57216347198104,
            "unit": "iter/sec",
            "range": "stddev: 0.000015060472704108429",
            "extra": "mean: 4.139549795918377 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 321.2239437773609,
            "unit": "iter/sec",
            "range": "stddev: 0.000014446575349658668",
            "extra": "mean: 3.1130929663608646 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 471.60684559581915,
            "unit": "iter/sec",
            "range": "stddev: 0.000011335561621679724",
            "extra": "mean: 2.1204102725366907 msec\nrounds: 477"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 905.8591453940701,
            "unit": "iter/sec",
            "range": "stddev: 0.000008414894769672703",
            "extra": "mean: 1.1039243850267433 msec\nrounds: 935"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 228.2969050880444,
            "unit": "iter/sec",
            "range": "stddev: 0.000012309904384984374",
            "extra": "mean: 4.380260869565195 msec\nrounds: 230"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 293.77846225311396,
            "unit": "iter/sec",
            "range": "stddev: 0.000014475453061238905",
            "extra": "mean: 3.403925503355719 msec\nrounds: 298"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 452.53687108663473,
            "unit": "iter/sec",
            "range": "stddev: 0.000010746724679370066",
            "extra": "mean: 2.2097646929824593 msec\nrounds: 456"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 835.2656134938692,
            "unit": "iter/sec",
            "range": "stddev: 0.000011673613647718624",
            "extra": "mean: 1.1972239534883473 msec\nrounds: 860"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.171992168656157,
            "unit": "iter/sec",
            "range": "stddev: 0.0001671127801386974",
            "extra": "mean: 49.57368571428605 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.094628393510423,
            "unit": "iter/sec",
            "range": "stddev: 0.0002182977401009301",
            "extra": "mean: 47.40543333333339 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 340.38705282767324,
            "unit": "iter/sec",
            "range": "stddev: 0.00002166267623382136",
            "extra": "mean: 2.9378320699708484 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 570.1538492941205,
            "unit": "iter/sec",
            "range": "stddev: 0.000011130376134243096",
            "extra": "mean: 1.7539125645438522 msec\nrounds: 581"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1210.734248153559,
            "unit": "iter/sec",
            "range": "stddev: 0.00004030465142657696",
            "extra": "mean: 825.9450837581069 usec\nrounds: 1373"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1089.8408010408502,
            "unit": "iter/sec",
            "range": "stddev: 0.000011485453722741557",
            "extra": "mean: 917.5652068127307 usec\nrounds: 1233"
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
          "id": "0064cb0024ffa21814901a9d51f26c61dc9f9d7c",
          "message": "Merge pull request #775 from TeoZosa/fix/remove-system-git-executable-dependence\n\n✨ Remove dependence on available system `git` executable",
          "timestamp": "2023-01-09T19:39:48+09:00",
          "tree_id": "6161a9739206bb5fe2086f487866a1d441c21e8a",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/0064cb0024ffa21814901a9d51f26c61dc9f9d7c"
        },
        "date": 1673260929938,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 241.602560632133,
            "unit": "iter/sec",
            "range": "stddev: 0.000027147677816719615",
            "extra": "mean: 4.139028979591869 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 318.70503455588465,
            "unit": "iter/sec",
            "range": "stddev: 0.000014607120917568497",
            "extra": "mean: 3.137697530864235 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 470.59396818391673,
            "unit": "iter/sec",
            "range": "stddev: 0.000011305896839436107",
            "extra": "mean: 2.1249741127348694 msec\nrounds: 479"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 903.5116779615339,
            "unit": "iter/sec",
            "range": "stddev: 0.000009372380189168063",
            "extra": "mean: 1.1067925566343084 msec\nrounds: 927"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 226.58373834347202,
            "unit": "iter/sec",
            "range": "stddev: 0.000014118777622891466",
            "extra": "mean: 4.413379385965146 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 293.4526287200947,
            "unit": "iter/sec",
            "range": "stddev: 0.000015045092989411014",
            "extra": "mean: 3.4077050335569994 msec\nrounds: 298"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 449.15664005837937,
            "unit": "iter/sec",
            "range": "stddev: 0.00001166344563173682",
            "extra": "mean: 2.2263947826086343 msec\nrounds: 460"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 844.3972415961824,
            "unit": "iter/sec",
            "range": "stddev: 0.000008927004713216809",
            "extra": "mean: 1.1842767251461863 msec\nrounds: 855"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.13055720807204,
            "unit": "iter/sec",
            "range": "stddev: 0.000181920979837058",
            "extra": "mean: 49.67572380952355 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.908722969874965,
            "unit": "iter/sec",
            "range": "stddev: 0.00008131019089255913",
            "extra": "mean: 47.82692857142868 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 339.92400524548236,
            "unit": "iter/sec",
            "range": "stddev: 0.000012590460091876788",
            "extra": "mean: 2.941834011628074 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 573.7456913905169,
            "unit": "iter/sec",
            "range": "stddev: 0.000012244765648911322",
            "extra": "mean: 1.7429324786325158 msec\nrounds: 585"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1213.8441425874473,
            "unit": "iter/sec",
            "range": "stddev: 0.00004025447838291688",
            "extra": "mean: 823.8289949386631 usec\nrounds: 1383"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1097.280577375847,
            "unit": "iter/sec",
            "range": "stddev: 0.00001205009395155588",
            "extra": "mean: 911.343935742949 usec\nrounds: 1245"
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
          "id": "ee41b945fb628fe36169caf6c8b69797f66a0419",
          "message": "Merge pull request #777 from TeoZosa/feat/only-install-colorama-on-windows-platforms\n\n✨  Only install `colorama` on Windows",
          "timestamp": "2023-01-09T21:47:21+09:00",
          "tree_id": "3fdee09ad0a69dc9cd22c6324bb4f632fbeab5e6",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/ee41b945fb628fe36169caf6c8b69797f66a0419"
        },
        "date": 1673268657339,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 154.98228089180458,
            "unit": "iter/sec",
            "range": "stddev: 0.0015306366207876335",
            "extra": "mean: 6.45235051546386 msec\nrounds: 194"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 230.6720338100754,
            "unit": "iter/sec",
            "range": "stddev: 0.0003856501883863632",
            "extra": "mean: 4.335159245283082 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 311.25893386749107,
            "unit": "iter/sec",
            "range": "stddev: 0.0004927341590835901",
            "extra": "mean: 3.2127591891891503 msec\nrounds: 370"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 574.5619590410186,
            "unit": "iter/sec",
            "range": "stddev: 0.0008080589884432627",
            "extra": "mean: 1.7404563324537972 msec\nrounds: 758"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 150.48393420240805,
            "unit": "iter/sec",
            "range": "stddev: 0.001237272334302787",
            "extra": "mean: 6.645227647058673 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 197.80497600914578,
            "unit": "iter/sec",
            "range": "stddev: 0.0009992291846983837",
            "extra": "mean: 5.055484549356148 msec\nrounds: 233"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 310.9515315528966,
            "unit": "iter/sec",
            "range": "stddev: 0.000345415576364912",
            "extra": "mean: 3.21593527777781 msec\nrounds: 360"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 583.1537507035295,
            "unit": "iter/sec",
            "range": "stddev: 0.0003050788606371111",
            "extra": "mean: 1.7148136298421783 msec\nrounds: 697"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.924697481299486,
            "unit": "iter/sec",
            "range": "stddev: 0.009175212080746141",
            "extra": "mean: 77.37125000000056 msec\nrounds: 16"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 15.109851453161472,
            "unit": "iter/sec",
            "range": "stddev: 0.003618571790247256",
            "extra": "mean: 66.1819875000007 msec\nrounds: 16"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 223.35104521720314,
            "unit": "iter/sec",
            "range": "stddev: 0.000517019289248016",
            "extra": "mean: 4.477256862745039 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 378.55490027820133,
            "unit": "iter/sec",
            "range": "stddev: 0.00022772535791108992",
            "extra": "mean: 2.641624766355148 msec\nrounds: 428"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 743.9527662988886,
            "unit": "iter/sec",
            "range": "stddev: 0.0003067827990548371",
            "extra": "mean: 1.3441713577797794 msec\nrounds: 1009"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 660.3277126507023,
            "unit": "iter/sec",
            "range": "stddev: 0.00029044782900770444",
            "extra": "mean: 1.5143995637950398 msec\nrounds: 917"
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
          "id": "3fe79262989d9e589264fabad47dbbaa5654b5e6",
          "message": "Merge pull request #779 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.2.6",
          "timestamp": "2023-01-09T16:08:58Z",
          "tree_id": "7b4917cfa6ca10532fd426b37c70eb148e3eaa2f",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/3fe79262989d9e589264fabad47dbbaa5654b5e6"
        },
        "date": 1673280918044,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 239.64367057180243,
            "unit": "iter/sec",
            "range": "stddev: 0.00006194852474206909",
            "extra": "mean: 4.1728621399177666 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 315.84602418855667,
            "unit": "iter/sec",
            "range": "stddev: 0.00016133553440083565",
            "extra": "mean: 3.1660996923077014 msec\nrounds: 325"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 471.8451573978668,
            "unit": "iter/sec",
            "range": "stddev: 0.000011013915401198586",
            "extra": "mean: 2.119339330543951 msec\nrounds: 478"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 899.9114046006636,
            "unit": "iter/sec",
            "range": "stddev: 0.000010522267509478516",
            "extra": "mean: 1.1112204989153913 msec\nrounds: 922"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 225.6643067260892,
            "unit": "iter/sec",
            "range": "stddev: 0.000016340641825682516",
            "extra": "mean: 4.431360964912353 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 293.77660871775777,
            "unit": "iter/sec",
            "range": "stddev: 0.000013831721006587015",
            "extra": "mean: 3.4039469798657036 msec\nrounds: 298"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 453.1720132318329,
            "unit": "iter/sec",
            "range": "stddev: 0.000013209241324271847",
            "extra": "mean: 2.206667602591826 msec\nrounds: 463"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 815.0049074316856,
            "unit": "iter/sec",
            "range": "stddev: 0.000009491883383252008",
            "extra": "mean: 1.2269864768683258 msec\nrounds: 843"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.278007622020247,
            "unit": "iter/sec",
            "range": "stddev: 0.00023700529298859767",
            "extra": "mean: 49.31450952380954 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.145823714920436,
            "unit": "iter/sec",
            "range": "stddev: 0.000061028153144569406",
            "extra": "mean: 47.29066190476196 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 339.4978022913933,
            "unit": "iter/sec",
            "range": "stddev: 0.000011874328005288646",
            "extra": "mean: 2.9455271676300665 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 567.9025935030277,
            "unit": "iter/sec",
            "range": "stddev: 0.000011167720120169097",
            "extra": "mean: 1.7608653516294754 msec\nrounds: 583"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1214.9328809397516,
            "unit": "iter/sec",
            "range": "stddev: 0.000041945532394431084",
            "extra": "mean: 823.0907366886795 usec\nrounds: 1371"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1111.1435799128178,
            "unit": "iter/sec",
            "range": "stddev: 0.000012604929345619981",
            "extra": "mean: 899.9737010391237 usec\nrounds: 1251"
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
          "id": "2c17a319adcd65bfc0bbb57469ba75effe716efe",
          "message": "Merge pull request #778 from TeoZosa/deps/remove-typeguard\n\n:heavy_minus_sign: Remove dev dependency: `typeguard`",
          "timestamp": "2023-01-10T09:44:04+09:00",
          "tree_id": "5c3ff10b5045ff63238e1e0e7e11be5969e61247",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/2c17a319adcd65bfc0bbb57469ba75effe716efe"
        },
        "date": 1673311632908,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 244.19862003955464,
            "unit": "iter/sec",
            "range": "stddev: 0.00001423308412667423",
            "extra": "mean: 4.095027235772351 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 319.95851625996863,
            "unit": "iter/sec",
            "range": "stddev: 0.00013030350056622537",
            "extra": "mean: 3.125405167173274 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 478.472002117455,
            "unit": "iter/sec",
            "range": "stddev: 0.000013570382795115549",
            "extra": "mean: 2.089986447638624 msec\nrounds: 487"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 933.0463610111012,
            "unit": "iter/sec",
            "range": "stddev: 0.000007778285179014515",
            "extra": "mean: 1.0717581052632197 msec\nrounds: 950"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 229.23200233558978,
            "unit": "iter/sec",
            "range": "stddev: 0.000033887261778150395",
            "extra": "mean: 4.362392640692575 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 297.97274588815134,
            "unit": "iter/sec",
            "range": "stddev: 0.000015520915920366983",
            "extra": "mean: 3.356011627906954 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 460.1433610907451,
            "unit": "iter/sec",
            "range": "stddev: 0.00001197910934692377",
            "extra": "mean: 2.1732357446808614 msec\nrounds: 470"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 859.7404247507433,
            "unit": "iter/sec",
            "range": "stddev: 0.000008482049417203205",
            "extra": "mean: 1.1631417707151794 msec\nrounds: 881"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.09189026010443,
            "unit": "iter/sec",
            "range": "stddev: 0.00021574076030737483",
            "extra": "mean: 49.77132500000039 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.090406134937883,
            "unit": "iter/sec",
            "range": "stddev: 0.00006976779274658605",
            "extra": "mean: 47.41492380952413 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 347.59986233866044,
            "unit": "iter/sec",
            "range": "stddev: 0.000011707231796529296",
            "extra": "mean: 2.8768711048156788 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 586.3691277145482,
            "unit": "iter/sec",
            "range": "stddev: 0.000011299499277016235",
            "extra": "mean: 1.7054103852595948 msec\nrounds: 597"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1195.761722149494,
            "unit": "iter/sec",
            "range": "stddev: 0.00004367381884368498",
            "extra": "mean: 836.2870139398725 usec\nrounds: 1363"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1100.842850449029,
            "unit": "iter/sec",
            "range": "stddev: 0.000012516071053842387",
            "extra": "mean: 908.39487179492 usec\nrounds: 1248"
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
          "id": "8b9c77d6363b4698601385cfa8bdf91bac8a0fc6",
          "message": "Merge pull request #781 from TeoZosa/chore/from-future-import-annotations\n\n♻️  Postpone annotation evaluation (PEP 563)",
          "timestamp": "2023-01-10T16:14:14+09:00",
          "tree_id": "1a90a31642aeef9d5c84e0c18e2d900be1317ea1",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/8b9c77d6363b4698601385cfa8bdf91bac8a0fc6"
        },
        "date": 1673335037502,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 243.42438697045682,
            "unit": "iter/sec",
            "range": "stddev: 0.000012283320637169614",
            "extra": "mean: 4.108051836734686 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 322.39088223542706,
            "unit": "iter/sec",
            "range": "stddev: 0.00001772697196574882",
            "extra": "mean: 3.10182469512195 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 479.0957638274488,
            "unit": "iter/sec",
            "range": "stddev: 0.00001143338928844668",
            "extra": "mean: 2.0872653767820832 msec\nrounds: 491"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 924.9539085798087,
            "unit": "iter/sec",
            "range": "stddev: 0.000007248314892978854",
            "extra": "mean: 1.08113495248149 msec\nrounds: 947"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 228.02887497067974,
            "unit": "iter/sec",
            "range": "stddev: 0.000014383686267540184",
            "extra": "mean: 4.385409523809567 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 297.5545856967528,
            "unit": "iter/sec",
            "range": "stddev: 0.000013541344785501027",
            "extra": "mean: 3.360727906976811 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 465.08348692935203,
            "unit": "iter/sec",
            "range": "stddev: 0.000012250146009088571",
            "extra": "mean: 2.1501515923568015 msec\nrounds: 471"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 860.5839268719466,
            "unit": "iter/sec",
            "range": "stddev: 0.000007057239986419275",
            "extra": "mean: 1.1620017162472502 msec\nrounds: 874"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.205291534935277,
            "unit": "iter/sec",
            "range": "stddev: 0.00018839226705416346",
            "extra": "mean: 49.49198571428597 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.980701950345658,
            "unit": "iter/sec",
            "range": "stddev: 0.0002547129533780284",
            "extra": "mean: 47.662847619048556 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 351.13640823258186,
            "unit": "iter/sec",
            "range": "stddev: 0.000011179336690964863",
            "extra": "mean: 2.8478960784312375 msec\nrounds: 357"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 586.9285410077365,
            "unit": "iter/sec",
            "range": "stddev: 0.000010607590697537359",
            "extra": "mean: 1.703784924623079 msec\nrounds: 597"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1186.1856780682238,
            "unit": "iter/sec",
            "range": "stddev: 0.0000433401418698201",
            "extra": "mean: 843.0383358097541 usec\nrounds: 1346"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1090.7551605579922,
            "unit": "iter/sec",
            "range": "stddev: 0.000012419364263653294",
            "extra": "mean: 916.7960291734353 usec\nrounds: 1234"
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
          "id": "0830c97cb7f211f467f65497896d652c47a17afe",
          "message": "Merge pull request #788 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.2.8",
          "timestamp": "2023-01-12T15:48:00Z",
          "tree_id": "a5cd56579681b1ea7c3de969bed98ed7c03a5e44",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/0830c97cb7f211f467f65497896d652c47a17afe"
        },
        "date": 1673540059978,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 259.281250518438,
            "unit": "iter/sec",
            "range": "stddev: 0.000010651978074511026",
            "extra": "mean: 3.8568157088122654 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 339.33890647196563,
            "unit": "iter/sec",
            "range": "stddev: 0.000011602150673938502",
            "extra": "mean: 2.94690641399416 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 497.0804383227891,
            "unit": "iter/sec",
            "range": "stddev: 0.000013510956312486923",
            "extra": "mean: 2.0117468379446266 msec\nrounds: 506"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 963.8688027797351,
            "unit": "iter/sec",
            "range": "stddev: 0.000007941477393118696",
            "extra": "mean: 1.037485596707835 msec\nrounds: 972"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 241.57886401665164,
            "unit": "iter/sec",
            "range": "stddev: 0.00001581579823655398",
            "extra": "mean: 4.139434979423828 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 309.94697833775086,
            "unit": "iter/sec",
            "range": "stddev: 0.000014849395537524312",
            "extra": "mean: 3.226358280254937 msec\nrounds: 314"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 476.62076274749415,
            "unit": "iter/sec",
            "range": "stddev: 0.00001189047660477379",
            "extra": "mean: 2.0981041493775283 msec\nrounds: 482"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 882.5168322209851,
            "unit": "iter/sec",
            "range": "stddev: 0.000007244675363623178",
            "extra": "mean: 1.1331228634850523 msec\nrounds: 901"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.800137617007508,
            "unit": "iter/sec",
            "range": "stddev: 0.00009910006727200403",
            "extra": "mean: 53.191099999999565 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.536916468936703,
            "unit": "iter/sec",
            "range": "stddev: 0.00012599636377286368",
            "extra": "mean: 51.185150000000235 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 355.7499397008697,
            "unit": "iter/sec",
            "range": "stddev: 0.00001783610946114611",
            "extra": "mean: 2.8109632311978587 msec\nrounds: 359"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 568.0092239931654,
            "unit": "iter/sec",
            "range": "stddev: 0.000010498159097712479",
            "extra": "mean: 1.760534790209732 msec\nrounds: 572"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1163.9476275297816,
            "unit": "iter/sec",
            "range": "stddev: 0.000046601747436462125",
            "extra": "mean: 859.1451851852444 usec\nrounds: 1350"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1055.896181118042,
            "unit": "iter/sec",
            "range": "stddev: 0.000017071030095625874",
            "extra": "mean: 947.0628058727743 usec\nrounds: 1226"
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
          "id": "98cc16b298317ed9504c2747c16cad84e52a4401",
          "message": "Merge pull request #789 from TeoZosa/dependabot/pip/sentry-sdk-1.13.0",
          "timestamp": "2023-01-13T15:02:19Z",
          "tree_id": "0f08b28be620f15d477f8637bf1fe3d7ffba7892",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/98cc16b298317ed9504c2747c16cad84e52a4401"
        },
        "date": 1673622599719,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 220.8816397389025,
            "unit": "iter/sec",
            "range": "stddev: 0.00006604612734519815",
            "extra": "mean: 4.527311555555589 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 291.64177782693804,
            "unit": "iter/sec",
            "range": "stddev: 0.00006198186662629491",
            "extra": "mean: 3.4288640243902435 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 426.87649782390093,
            "unit": "iter/sec",
            "range": "stddev: 0.000057374043134299616",
            "extra": "mean: 2.3425979296066313 msec\nrounds: 483"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 833.1050760889135,
            "unit": "iter/sec",
            "range": "stddev: 0.000035653222934864084",
            "extra": "mean: 1.2003287804877985 msec\nrounds: 1025"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 204.97005506984752,
            "unit": "iter/sec",
            "range": "stddev: 0.00006483543090505578",
            "extra": "mean: 4.878761434977566 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 266.10982324196124,
            "unit": "iter/sec",
            "range": "stddev: 0.00009582369199007003",
            "extra": "mean: 3.757846996466368 msec\nrounds: 283"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 416.5223734522506,
            "unit": "iter/sec",
            "range": "stddev: 0.0000697620678429156",
            "extra": "mean: 2.400831416837776 msec\nrounds: 487"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 770.0409911948191,
            "unit": "iter/sec",
            "range": "stddev: 0.00005228389351535498",
            "extra": "mean: 1.2986321656050666 msec\nrounds: 942"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 16.15279402954718,
            "unit": "iter/sec",
            "range": "stddev: 0.00033057160054707094",
            "extra": "mean: 61.90879411764736 msec\nrounds: 17"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 16.85554238326133,
            "unit": "iter/sec",
            "range": "stddev: 0.0005503578397411327",
            "extra": "mean: 59.32766666666664 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 306.7746376632679,
            "unit": "iter/sec",
            "range": "stddev: 0.00007576368190153877",
            "extra": "mean: 3.259721884498329 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 497.6634742132379,
            "unit": "iter/sec",
            "range": "stddev: 0.00007388547893947172",
            "extra": "mean: 2.0093899830219843 msec\nrounds: 589"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1017.2238833185406,
            "unit": "iter/sec",
            "range": "stddev: 0.00006017798698916224",
            "extra": "mean: 983.0677556819151 usec\nrounds: 1408"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 922.9696033427431,
            "unit": "iter/sec",
            "range": "stddev: 0.0000454921805385847",
            "extra": "mean: 1.0834592996110315 msec\nrounds: 1285"
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
          "id": "e818a0c20ce288e263ca91d6d8f0511a49a9062c",
          "message": "Merge pull request #790 from TeoZosa/ci/migrate-linters-to-ruff\n\n🏗️ Migrate linters to `ruff`",
          "timestamp": "2023-01-14T16:05:44+09:00",
          "tree_id": "acf6e6fe5702230e9b89b2a3f3e4c149f9b4b6a5",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/e818a0c20ce288e263ca91d6d8f0511a49a9062c"
        },
        "date": 1673680161002,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 152.60658665906251,
            "unit": "iter/sec",
            "range": "stddev: 0.0006995765297520783",
            "extra": "mean: 6.5527971098265505 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 217.12330915222995,
            "unit": "iter/sec",
            "range": "stddev: 0.000395073470936832",
            "extra": "mean: 4.605677777777778 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 287.9137998115629,
            "unit": "iter/sec",
            "range": "stddev: 0.00033845282537265726",
            "extra": "mean: 3.47326179104472 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 597.1095141669549,
            "unit": "iter/sec",
            "range": "stddev: 0.00033895405635708846",
            "extra": "mean: 1.6747346613545917 msec\nrounds: 753"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 146.58716551244635,
            "unit": "iter/sec",
            "range": "stddev: 0.0009145515173548864",
            "extra": "mean: 6.821879640718563 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 190.7346186033451,
            "unit": "iter/sec",
            "range": "stddev: 0.0005271966639593003",
            "extra": "mean: 5.242886725663665 msec\nrounds: 226"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 285.6137058429427,
            "unit": "iter/sec",
            "range": "stddev: 0.00038335191667962043",
            "extra": "mean: 3.501232537313507 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 573.0605508513032,
            "unit": "iter/sec",
            "range": "stddev: 0.00024095285285881925",
            "extra": "mean: 1.7450162962961975 msec\nrounds: 675"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.333609016413632,
            "unit": "iter/sec",
            "range": "stddev: 0.0009562195690764342",
            "extra": "mean: 69.76609999999894 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.453090102280026,
            "unit": "iter/sec",
            "range": "stddev: 0.005681799411801404",
            "extra": "mean: 69.18935624999989 msec\nrounds: 16"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 207.23493955962527,
            "unit": "iter/sec",
            "range": "stddev: 0.00037551892385167044",
            "extra": "mean: 4.825441125540906 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 342.1227981359362,
            "unit": "iter/sec",
            "range": "stddev: 0.0004890392803309008",
            "extra": "mean: 2.922927105263147 msec\nrounds: 380"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 706.2055177935165,
            "unit": "iter/sec",
            "range": "stddev: 0.00017540752102039348",
            "extra": "mean: 1.4160183895538245 msec\nrounds: 919"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 646.3682123158982,
            "unit": "iter/sec",
            "range": "stddev: 0.0003496928051969337",
            "extra": "mean: 1.5471057842047347 msec\nrounds: 899"
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
          "id": "5a27cbbe68edad7eb6cf140c5dc2f70bedf24aae",
          "message": "Merge pull request #784 from TeoZosa/dependabot/pip/docs/orjson-3.8.5",
          "timestamp": "2023-01-14T10:14:21Z",
          "tree_id": "efecafffd0e86ff848bf96e95ff4594ad7dbadba",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/5a27cbbe68edad7eb6cf140c5dc2f70bedf24aae"
        },
        "date": 1673691497613,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 244.03619195608985,
            "unit": "iter/sec",
            "range": "stddev: 0.00001348750790256849",
            "extra": "mean: 4.097752845528473 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 326.62158764064145,
            "unit": "iter/sec",
            "range": "stddev: 0.000015557955871525924",
            "extra": "mean: 3.0616469879517854 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 486.18980791287146,
            "unit": "iter/sec",
            "range": "stddev: 0.000011133618358920954",
            "extra": "mean: 2.056809879032279 msec\nrounds: 496"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 938.3238749641298,
            "unit": "iter/sec",
            "range": "stddev: 0.000011025786502451191",
            "extra": "mean: 1.0657301030928452 msec\nrounds: 970"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 230.10631705317672,
            "unit": "iter/sec",
            "range": "stddev: 0.000014599482739426738",
            "extra": "mean: 4.345817241379356 msec\nrounds: 232"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 298.93280986876135,
            "unit": "iter/sec",
            "range": "stddev: 0.000015372588200726408",
            "extra": "mean: 3.345233333333413 msec\nrounds: 303"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 472.5370801323581,
            "unit": "iter/sec",
            "range": "stddev: 0.000011035184428229245",
            "extra": "mean: 2.116236041666612 msec\nrounds: 480"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 853.4609493984743,
            "unit": "iter/sec",
            "range": "stddev: 0.000007997096105949716",
            "extra": "mean: 1.171699772209622 msec\nrounds: 878"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.116094772478455,
            "unit": "iter/sec",
            "range": "stddev: 0.00011471350171776258",
            "extra": "mean: 49.71143809523783 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.00579970129739,
            "unit": "iter/sec",
            "range": "stddev: 0.00015887440322578407",
            "extra": "mean: 47.605900000000304 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 348.6577268461519,
            "unit": "iter/sec",
            "range": "stddev: 0.000011055062343401976",
            "extra": "mean: 2.868142372881523 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 588.2229529694482,
            "unit": "iter/sec",
            "range": "stddev: 0.000011311357385344707",
            "extra": "mean: 1.7000356666665795 msec\nrounds: 600"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1206.272723745442,
            "unit": "iter/sec",
            "range": "stddev: 0.00004160701241056783",
            "extra": "mean: 828.9999270604651 usec\nrounds: 1371"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1103.095731731863,
            "unit": "iter/sec",
            "range": "stddev: 0.000012232357369800022",
            "extra": "mean: 906.5396331739927 usec\nrounds: 1254"
          }
        ]
      }
    ]
  }
}