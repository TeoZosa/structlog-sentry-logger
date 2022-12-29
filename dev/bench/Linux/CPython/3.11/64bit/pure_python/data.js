window.BENCHMARK_DATA = {
  "lastUpdate": 1672330257815,
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
      }
    ]
  }
}