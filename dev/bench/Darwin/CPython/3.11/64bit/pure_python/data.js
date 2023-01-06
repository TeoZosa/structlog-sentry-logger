window.BENCHMARK_DATA = {
  "lastUpdate": 1673021027994,
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
        "date": 1671168393041,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 131.96081517850962,
            "unit": "iter/sec",
            "range": "stddev: 0.0006032188180044161",
            "extra": "mean: 7.578007142857165 msec\nrounds: 140"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 162.26711405139906,
            "unit": "iter/sec",
            "range": "stddev: 0.0005506447822033302",
            "extra": "mean: 6.1626781609195564 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 213.78951990351558,
            "unit": "iter/sec",
            "range": "stddev: 0.00020917809719552002",
            "extra": "mean: 4.677497757847558 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 313.022092818993,
            "unit": "iter/sec",
            "range": "stddev: 0.0001910358219816294",
            "extra": "mean: 3.1946626865671632 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.27423406894799,
            "unit": "iter/sec",
            "range": "stddev: 0.0006473399354587115",
            "extra": "mean: 8.527022222222136 msec\nrounds: 135"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 134.95765292183333,
            "unit": "iter/sec",
            "range": "stddev: 0.0012646056981326888",
            "extra": "mean: 7.409731707317066 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.7269992604874,
            "unit": "iter/sec",
            "range": "stddev: 0.0006357292916274777",
            "extra": "mean: 5.08318636363631 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 282.1303583763032,
            "unit": "iter/sec",
            "range": "stddev: 0.0003268923873291048",
            "extra": "mean: 3.5444608150470924 msec\nrounds: 319"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.847142802280187,
            "unit": "iter/sec",
            "range": "stddev: 0.0050461136652098885",
            "extra": "mean: 101.55230000000017 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.412545034257265,
            "unit": "iter/sec",
            "range": "stddev: 0.004230941030077024",
            "extra": "mean: 96.03800000000007 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 163.87669499061917,
            "unit": "iter/sec",
            "range": "stddev: 0.0006885627277929657",
            "extra": "mean: 6.102148936169619 msec\nrounds: 188"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 225.4726904875638,
            "unit": "iter/sec",
            "range": "stddev: 0.0006222486213424762",
            "extra": "mean: 4.435126923076993 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 278.798025675507,
            "unit": "iter/sec",
            "range": "stddev: 0.0004279757323127598",
            "extra": "mean: 3.586825974025727 msec\nrounds: 385"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 269.3535944698522,
            "unit": "iter/sec",
            "range": "stddev: 0.000898453758754525",
            "extra": "mean: 3.712591999999934 msec\nrounds: 375"
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
        "date": 1671338658411,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 130.51374281942904,
            "unit": "iter/sec",
            "range": "stddev: 0.000859721881468202",
            "extra": "mean: 7.662028368794386 msec\nrounds: 141"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 162.57128658546637,
            "unit": "iter/sec",
            "range": "stddev: 0.0004473149108631325",
            "extra": "mean: 6.15114772727276 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.17138472032778,
            "unit": "iter/sec",
            "range": "stddev: 0.0004914926150277176",
            "extra": "mean: 4.873974025974018 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 286.04876601741114,
            "unit": "iter/sec",
            "range": "stddev: 0.00033856845424703953",
            "extra": "mean: 3.4959074074073517 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 122.09934330599285,
            "unit": "iter/sec",
            "range": "stddev: 0.0006988117661206223",
            "extra": "mean: 8.19005223880609 msec\nrounds: 134"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.3798203890326,
            "unit": "iter/sec",
            "range": "stddev: 0.0005762167403672446",
            "extra": "mean: 6.878533742331131 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.729585895152,
            "unit": "iter/sec",
            "range": "stddev: 0.00044152262962978973",
            "extra": "mean: 4.908467248908281 msec\nrounds: 229"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 289.31375315177627,
            "unit": "iter/sec",
            "range": "stddev: 0.00032703717046628645",
            "extra": "mean: 3.4564551083590973 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.955102338914328,
            "unit": "iter/sec",
            "range": "stddev: 0.0028933402003826036",
            "extra": "mean: 91.28166666666685 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.110572901826483,
            "unit": "iter/sec",
            "range": "stddev: 0.003234304972407754",
            "extra": "mean: 98.90636363636222 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 173.25453046626373,
            "unit": "iter/sec",
            "range": "stddev: 0.0005765498177329629",
            "extra": "mean: 5.77185483870923 msec\nrounds: 186"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 230.18443415830592,
            "unit": "iter/sec",
            "range": "stddev: 0.0003627525621665749",
            "extra": "mean: 4.3443424124511605 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 300.4600794967601,
            "unit": "iter/sec",
            "range": "stddev: 0.0003650762280765624",
            "extra": "mean: 3.3282291666663264 msec\nrounds: 384"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 306.5081083864137,
            "unit": "iter/sec",
            "range": "stddev: 0.00030876590535123096",
            "extra": "mean: 3.262556430446217 msec\nrounds: 381"
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
        "date": 1671350650722,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 136.76934939415239,
            "unit": "iter/sec",
            "range": "stddev: 0.0003473597351027922",
            "extra": "mean: 7.311579710144876 msec\nrounds: 138"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 162.07408522202687,
            "unit": "iter/sec",
            "range": "stddev: 0.00031714271656978145",
            "extra": "mean: 6.170017857142864 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 219.78144783822717,
            "unit": "iter/sec",
            "range": "stddev: 0.00027731258841110385",
            "extra": "mean: 4.549974576271162 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.2866080694219,
            "unit": "iter/sec",
            "range": "stddev: 0.00013772475433791333",
            "extra": "mean: 3.1616893491124656 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 128.51960107515993,
            "unit": "iter/sec",
            "range": "stddev: 0.0004384162551092109",
            "extra": "mean: 7.780914285714185 msec\nrounds: 140"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 158.73451358650055,
            "unit": "iter/sec",
            "range": "stddev: 0.0004342216793706178",
            "extra": "mean: 6.299827160493748 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 212.5864034889875,
            "unit": "iter/sec",
            "range": "stddev: 0.00022733477313801147",
            "extra": "mean: 4.703969696969837 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.64260848185575,
            "unit": "iter/sec",
            "range": "stddev: 0.0001960015589788578",
            "extra": "mean: 3.1581346704870326 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.676056420046471,
            "unit": "iter/sec",
            "range": "stddev: 0.0017576780344321697",
            "extra": "mean: 93.66754545454596 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.611819637654515,
            "unit": "iter/sec",
            "range": "stddev: 0.004996791137593517",
            "extra": "mean: 94.23454545454616 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 169.5398130168025,
            "unit": "iter/sec",
            "range": "stddev: 0.00043544530352334965",
            "extra": "mean: 5.898319587629211 msec\nrounds: 194"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 232.75363985620058,
            "unit": "iter/sec",
            "range": "stddev: 0.0002730184482582519",
            "extra": "mean: 4.296388235293842 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 298.7018323539784,
            "unit": "iter/sec",
            "range": "stddev: 0.000719840985548476",
            "extra": "mean: 3.347820105820255 msec\nrounds: 378"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 328.2507050995696,
            "unit": "iter/sec",
            "range": "stddev: 0.00020013630356005102",
            "extra": "mean: 3.04645194805192 msec\nrounds: 385"
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
        "date": 1671358224773,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.71793334479354,
            "unit": "iter/sec",
            "range": "stddev: 0.0008889533861599954",
            "extra": "mean: 8.641702898550708 msec\nrounds: 138"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.87979431549965,
            "unit": "iter/sec",
            "range": "stddev: 0.0012055193806583416",
            "extra": "mean: 7.098250000000033 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 180.19612156257728,
            "unit": "iter/sec",
            "range": "stddev: 0.0006244205910915288",
            "extra": "mean: 5.549509009008981 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 285.46910656768677,
            "unit": "iter/sec",
            "range": "stddev: 0.0005115934705580929",
            "extra": "mean: 3.503006024096316 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.7849474728033,
            "unit": "iter/sec",
            "range": "stddev: 0.0010249965212898008",
            "extra": "mean: 9.277733333333245 msec\nrounds: 135"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 129.30397517363554,
            "unit": "iter/sec",
            "range": "stddev: 0.0012501307853008607",
            "extra": "mean: 7.733714285714359 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 184.9366985730869,
            "unit": "iter/sec",
            "range": "stddev: 0.0006528441394447034",
            "extra": "mean: 5.407255605381105 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 276.7384896975937,
            "unit": "iter/sec",
            "range": "stddev: 0.00046673423040748016",
            "extra": "mean: 3.613519756838852 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 8.987972295474094,
            "unit": "iter/sec",
            "range": "stddev: 0.008141174892005476",
            "extra": "mean: 111.25980000000126 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.488937032050307,
            "unit": "iter/sec",
            "range": "stddev: 0.006759916025568192",
            "extra": "mean: 95.33854545454611 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 172.80724407968103,
            "unit": "iter/sec",
            "range": "stddev: 0.0006671288158609646",
            "extra": "mean: 5.786794444444135 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 209.82726399126744,
            "unit": "iter/sec",
            "range": "stddev: 0.0005498980200933856",
            "extra": "mean: 4.76582490272388 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 291.7764829632043,
            "unit": "iter/sec",
            "range": "stddev: 0.000578642187571713",
            "extra": "mean: 3.4272810126582725 msec\nrounds: 395"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 276.5693175847601,
            "unit": "iter/sec",
            "range": "stddev: 0.0005727167771689484",
            "extra": "mean: 3.6157300771208303 msec\nrounds: 389"
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
        "date": 1671364001126,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 139.63988425405174,
            "unit": "iter/sec",
            "range": "stddev: 0.0003004889126666181",
            "extra": "mean: 7.161277777777765 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 164.47959224185556,
            "unit": "iter/sec",
            "range": "stddev: 0.00027534056369925026",
            "extra": "mean: 6.079781609195449 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 220.78346048825134,
            "unit": "iter/sec",
            "range": "stddev: 0.00017222546501415115",
            "extra": "mean: 4.529324786324805 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 314.4686754258246,
            "unit": "iter/sec",
            "range": "stddev: 0.00013273463694643732",
            "extra": "mean: 3.1799669669670334 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 122.85384131913091,
            "unit": "iter/sec",
            "range": "stddev: 0.00048067198721488927",
            "extra": "mean: 8.13975362318833 msec\nrounds: 138"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 152.46755499559495,
            "unit": "iter/sec",
            "range": "stddev: 0.00042384214606247766",
            "extra": "mean: 6.558772455089817 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 210.71589544333546,
            "unit": "iter/sec",
            "range": "stddev: 0.0004056644883269933",
            "extra": "mean: 4.745726457399197 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 299.6434517826073,
            "unit": "iter/sec",
            "range": "stddev: 0.0002457467062855973",
            "extra": "mean: 3.3372996941895616 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.823975104857286,
            "unit": "iter/sec",
            "range": "stddev: 0.003232887184152928",
            "extra": "mean: 92.38749999999978 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.127204345544293,
            "unit": "iter/sec",
            "range": "stddev: 0.0027051308767989425",
            "extra": "mean: 89.86983333333261 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 188.30440353335126,
            "unit": "iter/sec",
            "range": "stddev: 0.00028572804333381013",
            "extra": "mean: 5.310550264550167 msec\nrounds: 189"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 246.86505121975063,
            "unit": "iter/sec",
            "range": "stddev: 0.00018697694814013687",
            "extra": "mean: 4.050796153846155 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 329.37464832395966,
            "unit": "iter/sec",
            "range": "stddev: 0.00017031769493335022",
            "extra": "mean: 3.036056372548868 msec\nrounds: 408"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 320.32185418266903,
            "unit": "iter/sec",
            "range": "stddev: 0.0002113245479067983",
            "extra": "mean: 3.121860050890355 msec\nrounds: 393"
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
        "date": 1671374539524,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 142.19486723613656,
            "unit": "iter/sec",
            "range": "stddev: 0.00034639653730887085",
            "extra": "mean: 7.03260264900663 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 180.03076380616807,
            "unit": "iter/sec",
            "range": "stddev: 0.00016525394083388963",
            "extra": "mean: 5.554606217616563 msec\nrounds: 193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 227.7234126084044,
            "unit": "iter/sec",
            "range": "stddev: 0.00014344101237838186",
            "extra": "mean: 4.391292000000064 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 338.8358274895037,
            "unit": "iter/sec",
            "range": "stddev: 0.0000982991823524576",
            "extra": "mean: 2.9512817679558325 msec\nrounds: 362"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 139.61360273376872,
            "unit": "iter/sec",
            "range": "stddev: 0.00019521495742143597",
            "extra": "mean: 7.162625850340064 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 166.88068879297052,
            "unit": "iter/sec",
            "range": "stddev: 0.00013826924338838602",
            "extra": "mean: 5.992305084745808 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 224.0973222656707,
            "unit": "iter/sec",
            "range": "stddev: 0.0001579016802176378",
            "extra": "mean: 4.4623469387754895 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 327.61585773398275,
            "unit": "iter/sec",
            "range": "stddev: 0.00012252576485678631",
            "extra": "mean: 3.0523553008596402 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.254575688428359,
            "unit": "iter/sec",
            "range": "stddev: 0.0010905281560285513",
            "extra": "mean: 88.85274999999974 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.426960771243516,
            "unit": "iter/sec",
            "range": "stddev: 0.0009645090445246139",
            "extra": "mean: 87.51233333333452 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 187.96434613139724,
            "unit": "iter/sec",
            "range": "stddev: 0.00019509253350778958",
            "extra": "mean: 5.320157894736835 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 258.6059107431755,
            "unit": "iter/sec",
            "range": "stddev: 0.00013924199507542407",
            "extra": "mean: 3.8668876404496086 msec\nrounds: 267"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 348.39477109219933,
            "unit": "iter/sec",
            "range": "stddev: 0.0002041951274351258",
            "extra": "mean: 2.8703071428570883 msec\nrounds: 420"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 349.4396392881421,
            "unit": "iter/sec",
            "range": "stddev: 0.00012980764976440188",
            "extra": "mean: 2.8617245657565964 msec\nrounds: 403"
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
        "date": 1671378318946,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.55933843832632,
            "unit": "iter/sec",
            "range": "stddev: 0.0005099271454965199",
            "extra": "mean: 8.364047619047689 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.64096408494345,
            "unit": "iter/sec",
            "range": "stddev: 0.0010629950862980368",
            "extra": "mean: 6.913670731707298 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 210.42934374166447,
            "unit": "iter/sec",
            "range": "stddev: 0.0001404048915843285",
            "extra": "mean: 4.7521889400922115 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 294.7057419123749,
            "unit": "iter/sec",
            "range": "stddev: 0.00023613326454708313",
            "extra": "mean: 3.3932151898734664 msec\nrounds: 316"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.60834850988468,
            "unit": "iter/sec",
            "range": "stddev: 0.0006520557550946267",
            "extra": "mean: 8.291299999999945 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.01918514579253,
            "unit": "iter/sec",
            "range": "stddev: 0.000496479214449468",
            "extra": "mean: 6.665814102564109 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.37161513436297,
            "unit": "iter/sec",
            "range": "stddev: 0.0003239298867883169",
            "extra": "mean: 4.990726851851901 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 304.1533168952869,
            "unit": "iter/sec",
            "range": "stddev: 0.00018174063227645884",
            "extra": "mean: 3.287815533980441 msec\nrounds: 309"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.602491392704712,
            "unit": "iter/sec",
            "range": "stddev: 0.0017147604709482553",
            "extra": "mean: 94.31745454545458 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.738066347583363,
            "unit": "iter/sec",
            "range": "stddev: 0.0010337858842843148",
            "extra": "mean: 93.12663636363668 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 176.78523458116533,
            "unit": "iter/sec",
            "range": "stddev: 0.00023703512250359434",
            "extra": "mean: 5.65658100558665 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 238.765045567541,
            "unit": "iter/sec",
            "range": "stddev: 0.00018699540190021213",
            "extra": "mean: 4.1882177419354445 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 287.16299978759434,
            "unit": "iter/sec",
            "range": "stddev: 0.0003171532671396264",
            "extra": "mean: 3.48234278350508 msec\nrounds: 388"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 268.8353209619577,
            "unit": "iter/sec",
            "range": "stddev: 0.0006524970950746842",
            "extra": "mean: 3.7197493112949545 msec\nrounds: 363"
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
        "date": 1671379517366,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 138.2525458287864,
            "unit": "iter/sec",
            "range": "stddev: 0.00030085115409635117",
            "extra": "mean: 7.233139860139805 msec\nrounds: 143"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 167.74197258808675,
            "unit": "iter/sec",
            "range": "stddev: 0.00029300264316189754",
            "extra": "mean: 5.96153714285712 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 214.1307512420549,
            "unit": "iter/sec",
            "range": "stddev: 0.00030307732661693853",
            "extra": "mean: 4.670043859649065 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 313.3735170551478,
            "unit": "iter/sec",
            "range": "stddev: 0.0001934547199758304",
            "extra": "mean: 3.1910801186943285 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 127.61613067891622,
            "unit": "iter/sec",
            "range": "stddev: 0.00044426350205648446",
            "extra": "mean: 7.836000000000098 msec\nrounds: 136"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.93575649995387,
            "unit": "iter/sec",
            "range": "stddev: 0.00046415453142844047",
            "extra": "mean: 6.6253353293413 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 212.2653524454005,
            "unit": "iter/sec",
            "range": "stddev: 0.0002503554740226678",
            "extra": "mean: 4.7110844444442375 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 317.66016173550463,
            "unit": "iter/sec",
            "range": "stddev: 0.00015781793685581781",
            "extra": "mean: 3.148018292682972 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.879459218347181,
            "unit": "iter/sec",
            "range": "stddev: 0.002677239702426247",
            "extra": "mean: 91.91633333333283 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.95111422609465,
            "unit": "iter/sec",
            "range": "stddev: 0.0014588338119563035",
            "extra": "mean: 91.31490909090961 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 177.16467874292573,
            "unit": "iter/sec",
            "range": "stddev: 0.00032863085616725157",
            "extra": "mean: 5.644465968586475 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 241.1587492394082,
            "unit": "iter/sec",
            "range": "stddev: 0.0002446406666452923",
            "extra": "mean: 4.1466461538463975 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 332.44423827747926,
            "unit": "iter/sec",
            "range": "stddev: 0.0002018761277621898",
            "extra": "mean: 3.008023255813915 msec\nrounds: 387"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 324.01959709503103,
            "unit": "iter/sec",
            "range": "stddev: 0.000292325347605037",
            "extra": "mean: 3.08623308270676 msec\nrounds: 399"
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
        "date": 1671419554905,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 147.04579161761094,
            "unit": "iter/sec",
            "range": "stddev: 0.00021976660587902898",
            "extra": "mean: 6.800602649006617 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 181.47733956120427,
            "unit": "iter/sec",
            "range": "stddev: 0.00012790790724689991",
            "extra": "mean: 5.510329842931956 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 234.33035778596525,
            "unit": "iter/sec",
            "range": "stddev: 0.00010475102556116732",
            "extra": "mean: 4.267479508196668 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 332.6077233263848,
            "unit": "iter/sec",
            "range": "stddev: 0.0002479870636652758",
            "extra": "mean: 3.006544736842173 msec\nrounds: 380"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 138.21853928050123,
            "unit": "iter/sec",
            "range": "stddev: 0.00033985264129394",
            "extra": "mean: 7.234919463087337 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 171.2717112773016,
            "unit": "iter/sec",
            "range": "stddev: 0.00014702316639392441",
            "extra": "mean: 5.838675824175809 msec\nrounds: 182"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 233.492826430669,
            "unit": "iter/sec",
            "range": "stddev: 0.00017415940722579872",
            "extra": "mean: 4.282786821705334 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 337.82686373233616,
            "unit": "iter/sec",
            "range": "stddev: 0.00010940872435899673",
            "extra": "mean: 2.960096153846163 msec\nrounds: 364"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.723122716310053,
            "unit": "iter/sec",
            "range": "stddev: 0.008057014803132211",
            "extra": "mean: 93.25641666666584 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.733000236465191,
            "unit": "iter/sec",
            "range": "stddev: 0.002982074400609806",
            "extra": "mean: 85.22969230769152 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.97993521447344,
            "unit": "iter/sec",
            "range": "stddev: 0.00018740330086405708",
            "extra": "mean: 5.025632352941192 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 259.63793129871317,
            "unit": "iter/sec",
            "range": "stddev: 0.00020184348917586716",
            "extra": "mean: 3.851517361111235 msec\nrounds: 288"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 374.8783775264035,
            "unit": "iter/sec",
            "range": "stddev: 0.00010950744510875913",
            "extra": "mean: 2.6675318181816654 msec\nrounds: 440"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 354.3843420527173,
            "unit": "iter/sec",
            "range": "stddev: 0.00013298881489306856",
            "extra": "mean: 2.8217951002226918 msec\nrounds: 449"
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
        "date": 1671424057313,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 134.85436658438965,
            "unit": "iter/sec",
            "range": "stddev: 0.0005270790381452327",
            "extra": "mean: 7.415406896551743 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 166.93229729616212,
            "unit": "iter/sec",
            "range": "stddev: 0.0005441674309963229",
            "extra": "mean: 5.990452513966515 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 219.63688628107522,
            "unit": "iter/sec",
            "range": "stddev: 0.00012820253086856683",
            "extra": "mean: 4.552969298245619 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 329.80464539822356,
            "unit": "iter/sec",
            "range": "stddev: 0.00017767729620161036",
            "extra": "mean: 3.032097982708968 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 129.91218689280288,
            "unit": "iter/sec",
            "range": "stddev: 0.0004079727027933742",
            "extra": "mean: 7.697507246376745 msec\nrounds: 138"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 160.63565824763654,
            "unit": "iter/sec",
            "range": "stddev: 0.00020995076335289178",
            "extra": "mean: 6.225267857142878 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 216.5759814374389,
            "unit": "iter/sec",
            "range": "stddev: 0.0002452648664271104",
            "extra": "mean: 4.617317180616653 msec\nrounds: 227"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 321.34189368093377,
            "unit": "iter/sec",
            "range": "stddev: 0.00034237385096843746",
            "extra": "mean: 3.1119502923976614 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.014236818941587,
            "unit": "iter/sec",
            "range": "stddev: 0.002964361266732023",
            "extra": "mean: 90.79158333333304 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.239796372355467,
            "unit": "iter/sec",
            "range": "stddev: 0.001628266923523718",
            "extra": "mean: 88.96958333333534 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 181.40161088410036,
            "unit": "iter/sec",
            "range": "stddev: 0.0002831752712826287",
            "extra": "mean: 5.512630208333221 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 246.93635844351036,
            "unit": "iter/sec",
            "range": "stddev: 0.0002750693026661802",
            "extra": "mean: 4.0496264150941625 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 329.21240961753614,
            "unit": "iter/sec",
            "range": "stddev: 0.00043534060116099917",
            "extra": "mean: 3.0375525672369217 msec\nrounds: 409"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 338.82634979309745,
            "unit": "iter/sec",
            "range": "stddev: 0.00011669219531204942",
            "extra": "mean: 2.951364321607941 msec\nrounds: 398"
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
        "date": 1671429937481,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.56640434982242,
            "unit": "iter/sec",
            "range": "stddev: 0.001034841547195277",
            "extra": "mean: 8.02784671532847 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.10142143265657,
            "unit": "iter/sec",
            "range": "stddev: 0.000538058147153015",
            "extra": "mean: 6.6180714285714615 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 208.2848586289983,
            "unit": "iter/sec",
            "range": "stddev: 0.0002259241949805791",
            "extra": "mean: 4.801117117117105 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 296.27133269325714,
            "unit": "iter/sec",
            "range": "stddev: 0.0003975693039952015",
            "extra": "mean: 3.375284375000076 msec\nrounds: 320"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.88450625772407,
            "unit": "iter/sec",
            "range": "stddev: 0.0010693444289608149",
            "extra": "mean: 8.704393939393952 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.32221352991604,
            "unit": "iter/sec",
            "range": "stddev: 0.0003216117303321713",
            "extra": "mean: 6.608415094339751 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 207.24513645557153,
            "unit": "iter/sec",
            "range": "stddev: 0.00023444294230255157",
            "extra": "mean: 4.825203703703688 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 281.0266248347776,
            "unit": "iter/sec",
            "range": "stddev: 0.0010376993308805892",
            "extra": "mean: 3.5583817034699985 msec\nrounds: 317"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 8.948209552750617,
            "unit": "iter/sec",
            "range": "stddev: 0.004086508936597675",
            "extra": "mean: 111.75419999999967 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 7.511071319124323,
            "unit": "iter/sec",
            "range": "stddev: 0.0326089335366866",
            "extra": "mean: 133.1368000000012 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 132.88600023591542,
            "unit": "iter/sec",
            "range": "stddev: 0.0015265993468061754",
            "extra": "mean: 7.525247191010927 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 212.12236183589056,
            "unit": "iter/sec",
            "range": "stddev: 0.0005972031047858727",
            "extra": "mean: 4.714260162602067 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 311.87147802163105,
            "unit": "iter/sec",
            "range": "stddev: 0.0001706131436061054",
            "extra": "mean: 3.206449035812891 msec\nrounds: 363"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 304.61120952469577,
            "unit": "iter/sec",
            "range": "stddev: 0.00021547462817923617",
            "extra": "mean: 3.2828732782367513 msec\nrounds: 363"
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
        "date": 1671437887329,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 132.5046534372338,
            "unit": "iter/sec",
            "range": "stddev: 0.0006382996283290723",
            "extra": "mean: 7.546904761904763 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 172.22004140977765,
            "unit": "iter/sec",
            "range": "stddev: 0.00033794249092621275",
            "extra": "mean: 5.806525139664877 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 222.8802496258781,
            "unit": "iter/sec",
            "range": "stddev: 0.00031135352104848284",
            "extra": "mean: 4.486714285714316 msec\nrounds: 238"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 334.1183835198972,
            "unit": "iter/sec",
            "range": "stddev: 0.00011382890960337771",
            "extra": "mean: 2.992951149425301 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 130.60450972868404,
            "unit": "iter/sec",
            "range": "stddev: 0.0006388001461522856",
            "extra": "mean: 7.656703448275913 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 163.97875755884417,
            "unit": "iter/sec",
            "range": "stddev: 0.00022530662697989036",
            "extra": "mean: 6.098350877193027 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 226.54816751453947,
            "unit": "iter/sec",
            "range": "stddev: 0.0002410776178358896",
            "extra": "mean: 4.41407234042545 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 321.2397909020989,
            "unit": "iter/sec",
            "range": "stddev: 0.00014770478495655719",
            "extra": "mean: 3.1129393939394023 msec\nrounds: 363"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.824023921092804,
            "unit": "iter/sec",
            "range": "stddev: 0.001199285352224896",
            "extra": "mean: 92.38708333333386 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.104171004233617,
            "unit": "iter/sec",
            "range": "stddev: 0.0017820752011991003",
            "extra": "mean: 90.05624999999877 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 187.683085321311,
            "unit": "iter/sec",
            "range": "stddev: 0.00030013241692955505",
            "extra": "mean: 5.3281306532659185 msec\nrounds: 199"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 258.61152430422686,
            "unit": "iter/sec",
            "range": "stddev: 0.00011468532341287351",
            "extra": "mean: 3.8668037037035305 msec\nrounds: 270"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 350.6137838189186,
            "unit": "iter/sec",
            "range": "stddev: 0.00014785275804996624",
            "extra": "mean: 2.8521411483253885 msec\nrounds: 418"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 342.1239252575215,
            "unit": "iter/sec",
            "range": "stddev: 0.00012461486355714384",
            "extra": "mean: 2.922917475728381 msec\nrounds: 412"
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
        "date": 1671466162110,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 131.28996138199514,
            "unit": "iter/sec",
            "range": "stddev: 0.0002798308801400765",
            "extra": "mean: 7.6167285714286015 msec\nrounds: 140"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 164.1688853608692,
            "unit": "iter/sec",
            "range": "stddev: 0.00015302447645161704",
            "extra": "mean: 6.09128823529405 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 210.31311074879812,
            "unit": "iter/sec",
            "range": "stddev: 0.0001173412748653921",
            "extra": "mean: 4.754815315315356 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 311.2017053853532,
            "unit": "iter/sec",
            "range": "stddev: 0.00014020181155168575",
            "extra": "mean: 3.21334999999992 msec\nrounds: 320"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 126.86507992033232,
            "unit": "iter/sec",
            "range": "stddev: 0.00013763123960587739",
            "extra": "mean: 7.882389705882594 msec\nrounds: 136"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 153.83263009844916,
            "unit": "iter/sec",
            "range": "stddev: 0.0001412513590326891",
            "extra": "mean: 6.500571428571585 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 208.2675433923017,
            "unit": "iter/sec",
            "range": "stddev: 0.00013131935983127816",
            "extra": "mean: 4.80151627906974 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 311.9166512781543,
            "unit": "iter/sec",
            "range": "stddev: 0.00008927797425530616",
            "extra": "mean: 3.2059846625765474 msec\nrounds: 326"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.93679081747035,
            "unit": "iter/sec",
            "range": "stddev: 0.0022072692095971517",
            "extra": "mean: 91.43450000000068 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.187695027163036,
            "unit": "iter/sec",
            "range": "stddev: 0.001874350479419966",
            "extra": "mean: 89.38391666666472 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 178.63029056536217,
            "unit": "iter/sec",
            "range": "stddev: 0.0003034705886219867",
            "extra": "mean: 5.598154696132527 msec\nrounds: 181"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 246.73453435918685,
            "unit": "iter/sec",
            "range": "stddev: 0.0001559998406386871",
            "extra": "mean: 4.052938931297868 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 275.0165294909005,
            "unit": "iter/sec",
            "range": "stddev: 0.0018288048796927829",
            "extra": "mean: 3.6361450777200908 msec\nrounds: 386"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 322.2187465455812,
            "unit": "iter/sec",
            "range": "stddev: 0.00033838798850432467",
            "extra": "mean: 3.103481751824577 msec\nrounds: 411"
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
        "date": 1671540533421,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 139.4849286534596,
            "unit": "iter/sec",
            "range": "stddev: 0.00019502099066743764",
            "extra": "mean: 7.1692333333333025 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 174.0204655716772,
            "unit": "iter/sec",
            "range": "stddev: 0.000537161184771491",
            "extra": "mean: 5.746450549450522 msec\nrounds: 182"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 222.23910114129998,
            "unit": "iter/sec",
            "range": "stddev: 0.00014104277684533342",
            "extra": "mean: 4.499658227848025 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 333.425049106162,
            "unit": "iter/sec",
            "range": "stddev: 0.00008723377130808287",
            "extra": "mean: 2.999174785100209 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 122.28395200918632,
            "unit": "iter/sec",
            "range": "stddev: 0.0017945137906358374",
            "extra": "mean: 8.177687943262393 msec\nrounds: 141"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 158.14937892200973,
            "unit": "iter/sec",
            "range": "stddev: 0.0006056525714829505",
            "extra": "mean: 6.323135802469025 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 211.16671938082777,
            "unit": "iter/sec",
            "range": "stddev: 0.0001064426122678771",
            "extra": "mean: 4.735594713656341 msec\nrounds: 227"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.848198839804,
            "unit": "iter/sec",
            "range": "stddev: 0.00008817866863970022",
            "extra": "mean: 3.1362886904762504 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.604453870625607,
            "unit": "iter/sec",
            "range": "stddev: 0.0034038545209808",
            "extra": "mean: 94.3000000000005 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.139351429828682,
            "unit": "iter/sec",
            "range": "stddev: 0.0008800163049465439",
            "extra": "mean: 89.77183333333254 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 179.88360691797183,
            "unit": "iter/sec",
            "range": "stddev: 0.000511204789374507",
            "extra": "mean: 5.55915025906728 msec\nrounds: 193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 255.65295783744543,
            "unit": "iter/sec",
            "range": "stddev: 0.00013979172868291444",
            "extra": "mean: 3.9115526315789424 msec\nrounds: 266"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 336.91600886858447,
            "unit": "iter/sec",
            "range": "stddev: 0.00021909552187089048",
            "extra": "mean: 2.9680987951808913 msec\nrounds: 415"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 344.11855395251666,
            "unit": "iter/sec",
            "range": "stddev: 0.00023021651127935595",
            "extra": "mean: 2.9059752475246814 msec\nrounds: 404"
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
        "date": 1671541528203,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 132.85104947618086,
            "unit": "iter/sec",
            "range": "stddev: 0.0006364664997220826",
            "extra": "mean: 7.527226950354592 msec\nrounds: 141"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 172.2851849178283,
            "unit": "iter/sec",
            "range": "stddev: 0.0001812555082939995",
            "extra": "mean: 5.804329608938526 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 224.8881964061597,
            "unit": "iter/sec",
            "range": "stddev: 0.00017440105286442285",
            "extra": "mean: 4.446654008438702 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 315.9856296036864,
            "unit": "iter/sec",
            "range": "stddev: 0.0004748857803531126",
            "extra": "mean: 3.164700879765368 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 129.77023146119242,
            "unit": "iter/sec",
            "range": "stddev: 0.00044169981281151426",
            "extra": "mean: 7.705927536231977 msec\nrounds: 138"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 159.84777132005684,
            "unit": "iter/sec",
            "range": "stddev: 0.0003378510188594761",
            "extra": "mean: 6.255952095808328 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 221.0824618441297,
            "unit": "iter/sec",
            "range": "stddev: 0.00019978928943570698",
            "extra": "mean: 4.5231991341992215 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 327.5043972281528,
            "unit": "iter/sec",
            "range": "stddev: 0.00011605246484481915",
            "extra": "mean: 3.0533941176470965 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.105427165593078,
            "unit": "iter/sec",
            "range": "stddev: 0.017704100706282536",
            "extra": "mean: 98.95672727272692 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.02645312549593,
            "unit": "iter/sec",
            "range": "stddev: 0.009312248999261353",
            "extra": "mean: 99.73616666666837 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 172.07966838175594,
            "unit": "iter/sec",
            "range": "stddev: 0.0004131682141884245",
            "extra": "mean: 5.811261780104762 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 248.72551904839236,
            "unit": "iter/sec",
            "range": "stddev: 0.00021238239473756273",
            "extra": "mean: 4.0204961832060295 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 327.9492269006758,
            "unit": "iter/sec",
            "range": "stddev: 0.00024070455011233714",
            "extra": "mean: 3.0492525000001436 msec\nrounds: 400"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 340.50256454461135,
            "unit": "iter/sec",
            "range": "stddev: 0.00010301902519826863",
            "extra": "mean: 2.93683544303815 msec\nrounds: 395"
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
        "date": 1671543919571,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 138.29833642880305,
            "unit": "iter/sec",
            "range": "stddev: 0.000609030711451694",
            "extra": "mean: 7.23074496644294 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 174.03831743622266,
            "unit": "iter/sec",
            "range": "stddev: 0.00018233800536329435",
            "extra": "mean: 5.745861111111096 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.01768497603436,
            "unit": "iter/sec",
            "range": "stddev: 0.0007025790954482226",
            "extra": "mean: 4.901535864978903 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 331.8146800585169,
            "unit": "iter/sec",
            "range": "stddev: 0.00011726131038857132",
            "extra": "mean: 3.0137304347825897 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 136.07438992505345,
            "unit": "iter/sec",
            "range": "stddev: 0.00019039682407179573",
            "extra": "mean: 7.3489214285713595 msec\nrounds: 140"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 167.71594154566347,
            "unit": "iter/sec",
            "range": "stddev: 0.00009522528385260492",
            "extra": "mean: 5.962462427745625 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 227.08561224213608,
            "unit": "iter/sec",
            "range": "stddev: 0.00018843669782960426",
            "extra": "mean: 4.403625531914912 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 336.91287123342795,
            "unit": "iter/sec",
            "range": "stddev: 0.00004872058890483404",
            "extra": "mean: 2.9681264367818008 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.219409578570849,
            "unit": "iter/sec",
            "range": "stddev: 0.0013054248437682195",
            "extra": "mean: 89.13125000000062 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.512436789526713,
            "unit": "iter/sec",
            "range": "stddev: 0.0007671509817416274",
            "extra": "mean: 86.86258333333363 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 188.31095587406625,
            "unit": "iter/sec",
            "range": "stddev: 0.00018821060833057929",
            "extra": "mean: 5.310365482233303 msec\nrounds: 197"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 261.05422888295976,
            "unit": "iter/sec",
            "range": "stddev: 0.00006544655151580225",
            "extra": "mean: 3.83062172284647 msec\nrounds: 267"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 364.89155284698666,
            "unit": "iter/sec",
            "range": "stddev: 0.00007376454830823103",
            "extra": "mean: 2.7405402843604305 msec\nrounds: 422"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 355.9908859420401,
            "unit": "iter/sec",
            "range": "stddev: 0.00006542471171272494",
            "extra": "mean: 2.8090606796119295 msec\nrounds: 412"
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
        "date": 1671549042001,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 143.9514272389623,
            "unit": "iter/sec",
            "range": "stddev: 0.00025749295829415985",
            "extra": "mean: 6.946787671232878 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 161.06235697102872,
            "unit": "iter/sec",
            "range": "stddev: 0.0009336192512332096",
            "extra": "mean: 6.208775401069514 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 230.92144419623608,
            "unit": "iter/sec",
            "range": "stddev: 0.00012729040481231375",
            "extra": "mean: 4.330476987447749 msec\nrounds: 239"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 325.4432034369683,
            "unit": "iter/sec",
            "range": "stddev: 0.00021492402023701553",
            "extra": "mean: 3.072732782369135 msec\nrounds: 363"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 129.43296428109133,
            "unit": "iter/sec",
            "range": "stddev: 0.0010909612962655053",
            "extra": "mean: 7.726007092198602 msec\nrounds: 141"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.9259771814838,
            "unit": "iter/sec",
            "range": "stddev: 0.003933102096602938",
            "extra": "mean: 6.996628742514911 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 226.03846161340473,
            "unit": "iter/sec",
            "range": "stddev: 0.00018348612890723491",
            "extra": "mean: 4.424025862069029 msec\nrounds: 232"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 326.18351852243256,
            "unit": "iter/sec",
            "range": "stddev: 0.00020885365035610241",
            "extra": "mean: 3.0657588235293596 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.302100512443616,
            "unit": "iter/sec",
            "range": "stddev: 0.005654569663850529",
            "extra": "mean: 97.06758333333366 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 9.40719760367331,
            "unit": "iter/sec",
            "range": "stddev: 0.021838396080209054",
            "extra": "mean: 106.30158333333206 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 186.86061642811893,
            "unit": "iter/sec",
            "range": "stddev: 0.0002146854691769248",
            "extra": "mean: 5.351582474227133 msec\nrounds: 194"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 252.3578184386102,
            "unit": "iter/sec",
            "range": "stddev: 0.00020991777273201661",
            "extra": "mean: 3.9626273764260844 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 311.96879703309247,
            "unit": "iter/sec",
            "range": "stddev: 0.00030156707835731465",
            "extra": "mean: 3.205448780487889 msec\nrounds: 410"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 295.1735022373224,
            "unit": "iter/sec",
            "range": "stddev: 0.000500202024237903",
            "extra": "mean: 3.3878379746837513 msec\nrounds: 395"
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
        "date": 1671551415629,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 138.05851380009938,
            "unit": "iter/sec",
            "range": "stddev: 0.0004966773414475572",
            "extra": "mean: 7.2433055555555335 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 162.14252781106828,
            "unit": "iter/sec",
            "range": "stddev: 0.0010204312687296865",
            "extra": "mean: 6.167413407821174 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 226.7031668250773,
            "unit": "iter/sec",
            "range": "stddev: 0.00011277813969752828",
            "extra": "mean: 4.411054393305381 msec\nrounds: 239"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 329.72182962272876,
            "unit": "iter/sec",
            "range": "stddev: 0.0003158048290914926",
            "extra": "mean: 3.0328595505617892 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 130.06842730306064,
            "unit": "iter/sec",
            "range": "stddev: 0.0011808797741257107",
            "extra": "mean: 7.688260869565145 msec\nrounds: 138"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 162.22837675452186,
            "unit": "iter/sec",
            "range": "stddev: 0.0002988316935488039",
            "extra": "mean: 6.164149700598706 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 217.7215997657656,
            "unit": "iter/sec",
            "range": "stddev: 0.00041505626224922247",
            "extra": "mean: 4.5930215517240525 msec\nrounds: 232"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 325.9179945241811,
            "unit": "iter/sec",
            "range": "stddev: 0.00034454185116618026",
            "extra": "mean: 3.068256484150053 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.00385409989851,
            "unit": "iter/sec",
            "range": "stddev: 0.0018969773145243983",
            "extra": "mean: 90.87724999999983 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.108899617205735,
            "unit": "iter/sec",
            "range": "stddev: 0.0035077052705656288",
            "extra": "mean: 90.01791666666747 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 184.30552916588027,
            "unit": "iter/sec",
            "range": "stddev: 0.00024372935831966423",
            "extra": "mean: 5.4257731958761335 msec\nrounds: 194"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 252.08735972868863,
            "unit": "iter/sec",
            "range": "stddev: 0.00016097559176854028",
            "extra": "mean: 3.9668787878783736 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 336.31911786433585,
            "unit": "iter/sec",
            "range": "stddev: 0.00016150009723130062",
            "extra": "mean: 2.973366504854414 msec\nrounds: 412"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 333.82371457161514,
            "unit": "iter/sec",
            "range": "stddev: 0.0002194407481339744",
            "extra": "mean: 2.995593052109155 msec\nrounds: 403"
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
        "date": 1671589105744,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 142.19259091850705,
            "unit": "iter/sec",
            "range": "stddev: 0.001698722584286868",
            "extra": "mean: 7.032715231788108 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 176.78584427530438,
            "unit": "iter/sec",
            "range": "stddev: 0.00042810340703117",
            "extra": "mean: 5.656561497326244 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 227.6027301179706,
            "unit": "iter/sec",
            "range": "stddev: 0.0005329385660238897",
            "extra": "mean: 4.393620408163303 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 335.54982635297335,
            "unit": "iter/sec",
            "range": "stddev: 0.0003599826051972154",
            "extra": "mean: 2.9801833333332577 msec\nrounds: 360"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 135.30553681532214,
            "unit": "iter/sec",
            "range": "stddev: 0.000593864994344146",
            "extra": "mean: 7.390680555555497 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 162.74948218224344,
            "unit": "iter/sec",
            "range": "stddev: 0.0007815257071566044",
            "extra": "mean: 6.144412790697675 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 229.77567192629567,
            "unit": "iter/sec",
            "range": "stddev: 0.0003403479747487867",
            "extra": "mean: 4.3520708333333324 msec\nrounds: 240"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 334.2624696897555,
            "unit": "iter/sec",
            "range": "stddev: 0.0001154004153796253",
            "extra": "mean: 2.9916610169491844 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.839392718095889,
            "unit": "iter/sec",
            "range": "stddev: 0.0021977465938797895",
            "extra": "mean: 92.25609090909163 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.177170257177238,
            "unit": "iter/sec",
            "range": "stddev: 0.0031151181054028167",
            "extra": "mean: 89.4680833333344 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 179.6288441239637,
            "unit": "iter/sec",
            "range": "stddev: 0.0003562184664054385",
            "extra": "mean: 5.567034653465174 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 243.866127542883,
            "unit": "iter/sec",
            "range": "stddev: 0.000421234613474424",
            "extra": "mean: 4.1006104868916395 msec\nrounds: 267"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 335.361510103264,
            "unit": "iter/sec",
            "range": "stddev: 0.00012082223693534659",
            "extra": "mean: 2.9818568019093235 msec\nrounds: 419"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 330.07734425411184,
            "unit": "iter/sec",
            "range": "stddev: 0.00014145672550173688",
            "extra": "mean: 3.0295929648238586 msec\nrounds: 398"
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
        "date": 1672071777738,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 133.2220430823775,
            "unit": "iter/sec",
            "range": "stddev: 0.0010894731875502564",
            "extra": "mean: 7.506265306122446 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 172.1407422708789,
            "unit": "iter/sec",
            "range": "stddev: 0.000367550116675465",
            "extra": "mean: 5.80920000000006 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 220.65582667531586,
            "unit": "iter/sec",
            "range": "stddev: 0.0004946204030168388",
            "extra": "mean: 4.5319446808511 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 328.4811621589668,
            "unit": "iter/sec",
            "range": "stddev: 0.0002453722826274933",
            "extra": "mean: 3.0443146067416036 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 132.2546177318196,
            "unit": "iter/sec",
            "range": "stddev: 0.00031702937110887863",
            "extra": "mean: 7.561172661870745 msec\nrounds: 139"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 160.93775590286788,
            "unit": "iter/sec",
            "range": "stddev: 0.0004928507902619176",
            "extra": "mean: 6.213582352941086 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 220.21014339398596,
            "unit": "iter/sec",
            "range": "stddev: 0.00012875895653362838",
            "extra": "mean: 4.541116883116795 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 328.43893070884,
            "unit": "iter/sec",
            "range": "stddev: 0.00015913558055299581",
            "extra": "mean: 3.0447060518732982 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.183712041782387,
            "unit": "iter/sec",
            "range": "stddev: 0.002572688481477641",
            "extra": "mean: 89.41574999999969 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.411497654461723,
            "unit": "iter/sec",
            "range": "stddev: 0.0014632625724942808",
            "extra": "mean: 87.63091666666689 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 181.80010510319025,
            "unit": "iter/sec",
            "range": "stddev: 0.0003505574586602555",
            "extra": "mean: 5.500546874999864 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 254.89941497243944,
            "unit": "iter/sec",
            "range": "stddev: 0.00007082864530204615",
            "extra": "mean: 3.923116104868751 msec\nrounds: 267"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 317.84345160891735,
            "unit": "iter/sec",
            "range": "stddev: 0.0002836012465597552",
            "extra": "mean: 3.1462029339853297 msec\nrounds: 409"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 327.5864844416216,
            "unit": "iter/sec",
            "range": "stddev: 0.00022054160257807515",
            "extra": "mean: 3.052628992629296 msec\nrounds: 407"
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
        "date": 1672074772508,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 143.6685101015756,
            "unit": "iter/sec",
            "range": "stddev: 0.0010829428386343837",
            "extra": "mean: 6.960467532467528 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 172.14274914702713,
            "unit": "iter/sec",
            "range": "stddev: 0.00041373062526554394",
            "extra": "mean: 5.809132275132309 msec\nrounds: 189"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 240.26677362413503,
            "unit": "iter/sec",
            "range": "stddev: 0.00012418814244434352",
            "extra": "mean: 4.162040322580622 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 336.7254614817788,
            "unit": "iter/sec",
            "range": "stddev: 0.00017048284592315188",
            "extra": "mean: 2.969778393351799 msec\nrounds: 361"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 137.57791672398875,
            "unit": "iter/sec",
            "range": "stddev: 0.00028354009664943784",
            "extra": "mean: 7.268608391608499 msec\nrounds: 143"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 165.7842613535586,
            "unit": "iter/sec",
            "range": "stddev: 0.0004622717197673451",
            "extra": "mean: 6.031935672514517 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 237.889421556695,
            "unit": "iter/sec",
            "range": "stddev: 0.00011612739519334733",
            "extra": "mean: 4.203633744856011 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 344.3443597065271,
            "unit": "iter/sec",
            "range": "stddev: 0.00008622231980812467",
            "extra": "mean: 2.904069637883036 msec\nrounds: 359"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.002371010952897,
            "unit": "iter/sec",
            "range": "stddev: 0.004727081811703999",
            "extra": "mean: 90.8894999999997 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.468251579034927,
            "unit": "iter/sec",
            "range": "stddev: 0.00338718220582479",
            "extra": "mean: 87.19724999999971 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 192.77868152675467,
            "unit": "iter/sec",
            "range": "stddev: 0.0003687443254540907",
            "extra": "mean: 5.187295566502853 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 249.8432759670013,
            "unit": "iter/sec",
            "range": "stddev: 0.00045652639986772125",
            "extra": "mean: 4.002509157509117 msec\nrounds: 273"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 362.8342538572751,
            "unit": "iter/sec",
            "range": "stddev: 0.00010722951406661871",
            "extra": "mean: 2.756079365079354 msec\nrounds: 441"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 355.1738126496698,
            "unit": "iter/sec",
            "range": "stddev: 0.00021342081275117102",
            "extra": "mean: 2.815522891566228 msec\nrounds: 415"
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
        "date": 1672209738946,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 132.76456225214866,
            "unit": "iter/sec",
            "range": "stddev: 0.00018944555391745108",
            "extra": "mean: 7.532130434782615 msec\nrounds: 138"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 158.634445011362,
            "unit": "iter/sec",
            "range": "stddev: 0.001004679015875159",
            "extra": "mean: 6.303801169590729 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 208.88804178531117,
            "unit": "iter/sec",
            "range": "stddev: 0.00037329500708468337",
            "extra": "mean: 4.787253456221156 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 311.0626593835022,
            "unit": "iter/sec",
            "range": "stddev: 0.0000591950208808789",
            "extra": "mean: 3.214786377708944 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 127.3252655120562,
            "unit": "iter/sec",
            "range": "stddev: 0.0003652076723213402",
            "extra": "mean: 7.853900763358799 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.90529310732222,
            "unit": "iter/sec",
            "range": "stddev: 0.00045561014312076937",
            "extra": "mean: 6.583049079754532 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 210.22306269549208,
            "unit": "iter/sec",
            "range": "stddev: 0.00008190562896844087",
            "extra": "mean: 4.7568520179372475 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 317.37215852739615,
            "unit": "iter/sec",
            "range": "stddev: 0.00004795965031262399",
            "extra": "mean: 3.1508749999999703 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.711158438563132,
            "unit": "iter/sec",
            "range": "stddev: 0.00417844269507953",
            "extra": "mean: 93.36058333333241 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.218088045163853,
            "unit": "iter/sec",
            "range": "stddev: 0.0009923354569349283",
            "extra": "mean: 89.14175000000135 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 172.9895112251469,
            "unit": "iter/sec",
            "range": "stddev: 0.0007832825474741578",
            "extra": "mean: 5.780697297297372 msec\nrounds: 185"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 248.518042602548,
            "unit": "iter/sec",
            "range": "stddev: 0.0000664016314992554",
            "extra": "mean: 4.023852713178207 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 294.72331040534135,
            "unit": "iter/sec",
            "range": "stddev: 0.0003574411395270104",
            "extra": "mean: 3.3930129198965346 msec\nrounds: 387"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 311.9204659524713,
            "unit": "iter/sec",
            "range": "stddev: 0.00020763622445162995",
            "extra": "mean: 3.2059454545453727 msec\nrounds: 385"
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
        "date": 1672216691247,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.35338384806151,
            "unit": "iter/sec",
            "range": "stddev: 0.0008457799072608205",
            "extra": "mean: 8.980418604651218 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 132.37804571021996,
            "unit": "iter/sec",
            "range": "stddev: 0.0007127361533962385",
            "extra": "mean: 7.554122699386528 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 167.14260523507596,
            "unit": "iter/sec",
            "range": "stddev: 0.0006655049903916828",
            "extra": "mean: 5.982914999999913 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 238.09147142111678,
            "unit": "iter/sec",
            "range": "stddev: 0.0006063721318109747",
            "extra": "mean: 4.200066445182665 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 102.92461098989546,
            "unit": "iter/sec",
            "range": "stddev: 0.0009839237130384025",
            "extra": "mean: 9.715849206349432 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 125.98861430045683,
            "unit": "iter/sec",
            "range": "stddev: 0.0006987052327667678",
            "extra": "mean: 7.937225165563028 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 167.9609941018973,
            "unit": "iter/sec",
            "range": "stddev: 0.0006786598351524631",
            "extra": "mean: 5.953763285023948 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 243.09161011970298,
            "unit": "iter/sec",
            "range": "stddev: 0.0008831843589848467",
            "extra": "mean: 4.1136754966885976 msec\nrounds: 302"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 5.237598414474243,
            "unit": "iter/sec",
            "range": "stddev: 0.08925700772463545",
            "extra": "mean: 190.92719999999872 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 8.970189613499048,
            "unit": "iter/sec",
            "range": "stddev: 0.00578158636141811",
            "extra": "mean: 111.48036363636297 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 135.56389486823915,
            "unit": "iter/sec",
            "range": "stddev: 0.0008672647381422153",
            "extra": "mean: 7.3765953757226175 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 186.69735440667387,
            "unit": "iter/sec",
            "range": "stddev: 0.0006779081696465371",
            "extra": "mean: 5.356262295081848 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 238.08491738518913,
            "unit": "iter/sec",
            "range": "stddev: 0.0010128121112803765",
            "extra": "mean: 4.200182065217241 msec\nrounds: 368"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 257.18766028301945,
            "unit": "iter/sec",
            "range": "stddev: 0.0005416002881049411",
            "extra": "mean: 3.8882114285714966 msec\nrounds: 350"
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
        "date": 1672331243032,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.17408602985478,
            "unit": "iter/sec",
            "range": "stddev: 0.0006828534017464073",
            "extra": "mean: 8.321261538461549 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.5811976418338,
            "unit": "iter/sec",
            "range": "stddev: 0.0007480852523392492",
            "extra": "mean: 6.427511904761894 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 181.13848123146462,
            "unit": "iter/sec",
            "range": "stddev: 0.0014950153773276935",
            "extra": "mean: 5.520638095238126 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 285.56968324384286,
            "unit": "iter/sec",
            "range": "stddev: 0.00023099120770456706",
            "extra": "mean: 3.5017722772277544 msec\nrounds: 303"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.68845033619421,
            "unit": "iter/sec",
            "range": "stddev: 0.0012451871630335969",
            "extra": "mean: 8.795968253968159 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 121.10765845764939,
            "unit": "iter/sec",
            "range": "stddev: 0.004512790597118443",
            "extra": "mean: 8.257116129032369 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 181.73379384438633,
            "unit": "iter/sec",
            "range": "stddev: 0.0004519147572464949",
            "extra": "mean: 5.502553921568779 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 295.9489695288248,
            "unit": "iter/sec",
            "range": "stddev: 0.00012102791676740851",
            "extra": "mean: 3.3789609120521105 msec\nrounds: 307"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 8.207760810926782,
            "unit": "iter/sec",
            "range": "stddev: 0.01600413793026406",
            "extra": "mean: 121.8359090909089 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 9.674463111272212,
            "unit": "iter/sec",
            "range": "stddev: 0.004124776344350149",
            "extra": "mean: 103.36490909090851 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 161.44913742044568,
            "unit": "iter/sec",
            "range": "stddev: 0.00036361696091853776",
            "extra": "mean: 6.1939011627903655 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 218.15725578253512,
            "unit": "iter/sec",
            "range": "stddev: 0.0006981282676244884",
            "extra": "mean: 4.583849372384966 msec\nrounds: 239"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 301.8105211318709,
            "unit": "iter/sec",
            "range": "stddev: 0.00037789676201086236",
            "extra": "mean: 3.3133371104815366 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 296.88860739453213,
            "unit": "iter/sec",
            "range": "stddev: 0.00013285986088968236",
            "extra": "mean: 3.368266666666366 msec\nrounds: 345"
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
        "date": 1672339805765,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 123.86392104746038,
            "unit": "iter/sec",
            "range": "stddev: 0.0006496260066435142",
            "extra": "mean: 8.073375939849624 msec\nrounds: 133"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.52055822511662,
            "unit": "iter/sec",
            "range": "stddev: 0.00035982314633873714",
            "extra": "mean: 6.43001807228917 msec\nrounds: 166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.207003020556,
            "unit": "iter/sec",
            "range": "stddev: 0.00048369461706904685",
            "extra": "mean: 4.994830275229314 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 282.30030837947425,
            "unit": "iter/sec",
            "range": "stddev: 0.0004160558562783077",
            "extra": "mean: 3.5423269841270524 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.54406777037516,
            "unit": "iter/sec",
            "range": "stddev: 0.0005461028545013158",
            "extra": "mean: 8.580445312500018 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.63381799103513,
            "unit": "iter/sec",
            "range": "stddev: 0.0002996892409741985",
            "extra": "mean: 6.682981249999997 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 207.3699272131557,
            "unit": "iter/sec",
            "range": "stddev: 0.0004205342231932582",
            "extra": "mean: 4.822299999999997 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 314.4410553649487,
            "unit": "iter/sec",
            "range": "stddev: 0.00010821080833850716",
            "extra": "mean: 3.180246290801223 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.813850379566128,
            "unit": "iter/sec",
            "range": "stddev: 0.0019686435570077615",
            "extra": "mean: 92.47400000000016 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.034513198656965,
            "unit": "iter/sec",
            "range": "stddev: 0.0018704479349276888",
            "extra": "mean: 90.6247500000011 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 170.99148462407737,
            "unit": "iter/sec",
            "range": "stddev: 0.0002914880647104183",
            "extra": "mean: 5.848244444444045 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 239.4152498860683,
            "unit": "iter/sec",
            "range": "stddev: 0.00015676840957365605",
            "extra": "mean: 4.176843373493856 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 329.4344507370211,
            "unit": "iter/sec",
            "range": "stddev: 0.0001122947178056317",
            "extra": "mean: 3.035505235602314 msec\nrounds: 382"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 270.4734868176174,
            "unit": "iter/sec",
            "range": "stddev: 0.00028873608997189034",
            "extra": "mean: 3.697220055710335 msec\nrounds: 359"
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
        "date": 1672353269080,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 142.63152326688513,
            "unit": "iter/sec",
            "range": "stddev: 0.0003315977502806547",
            "extra": "mean: 7.0110728476821285 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 178.53768142229868,
            "unit": "iter/sec",
            "range": "stddev: 0.0002571103755613688",
            "extra": "mean: 5.601058510638325 msec\nrounds: 188"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 232.078612571019,
            "unit": "iter/sec",
            "range": "stddev: 0.00027517837020432715",
            "extra": "mean: 4.308884773662577 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 342.3510656259975,
            "unit": "iter/sec",
            "range": "stddev: 0.0001397794694151387",
            "extra": "mean: 2.920978201634848 msec\nrounds: 367"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 138.4533708144098,
            "unit": "iter/sec",
            "range": "stddev: 0.0002124710938193618",
            "extra": "mean: 7.22264827586215 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 166.37400686601893,
            "unit": "iter/sec",
            "range": "stddev: 0.00013395537158471146",
            "extra": "mean: 6.010554285714237 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 220.5133696439309,
            "unit": "iter/sec",
            "range": "stddev: 0.00027747875389797535",
            "extra": "mean: 4.534872427983518 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 331.95590709812114,
            "unit": "iter/sec",
            "range": "stddev: 0.000059376250333267125",
            "extra": "mean: 3.0124482758621767 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.486210325911582,
            "unit": "iter/sec",
            "range": "stddev: 0.001232867644472358",
            "extra": "mean: 87.06091666666715 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.524377419518931,
            "unit": "iter/sec",
            "range": "stddev: 0.0019764324820399784",
            "extra": "mean: 86.77258333333408 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 189.047582198966,
            "unit": "iter/sec",
            "range": "stddev: 0.0004072217892011884",
            "extra": "mean: 5.289673575129539 msec\nrounds: 193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 262.242132500198,
            "unit": "iter/sec",
            "range": "stddev: 0.00010754353943533169",
            "extra": "mean: 3.8132697841726286 msec\nrounds: 278"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 365.6704865425405,
            "unit": "iter/sec",
            "range": "stddev: 0.0001787008758905647",
            "extra": "mean: 2.7347025171627144 msec\nrounds: 437"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 351.6738337960862,
            "unit": "iter/sec",
            "range": "stddev: 0.00016965605568644104",
            "extra": "mean: 2.843543942993034 msec\nrounds: 421"
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
        "date": 1672682719244,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 134.66403997470823,
            "unit": "iter/sec",
            "range": "stddev: 0.0007198862923457045",
            "extra": "mean: 7.425887417218538 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 164.80001333213588,
            "unit": "iter/sec",
            "range": "stddev: 0.0013214293851408659",
            "extra": "mean: 6.067960674157305 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 217.20903375052885,
            "unit": "iter/sec",
            "range": "stddev: 0.0003866857654071917",
            "extra": "mean: 4.603860082304543 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 329.69085288927255,
            "unit": "iter/sec",
            "range": "stddev: 0.00017164794417020153",
            "extra": "mean: 3.0331445086705284 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 131.38306670762864,
            "unit": "iter/sec",
            "range": "stddev: 0.0006002059113879902",
            "extra": "mean: 7.611330935251613 msec\nrounds: 139"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 163.62054959281687,
            "unit": "iter/sec",
            "range": "stddev: 0.0002041442366316401",
            "extra": "mean: 6.111701754385876 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 217.9341657207732,
            "unit": "iter/sec",
            "range": "stddev: 0.0007576886996787186",
            "extra": "mean: 4.5885416666666385 msec\nrounds: 240"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 312.1825308585344,
            "unit": "iter/sec",
            "range": "stddev: 0.0002809823896149464",
            "extra": "mean: 3.203254189944249 msec\nrounds: 358"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.284251228808024,
            "unit": "iter/sec",
            "range": "stddev: 0.0021263410082415263",
            "extra": "mean: 88.61908333333268 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.166239247842023,
            "unit": "iter/sec",
            "range": "stddev: 0.007032524935590329",
            "extra": "mean: 89.55566666666748 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 175.4376590738672,
            "unit": "iter/sec",
            "range": "stddev: 0.00040994746936497676",
            "extra": "mean: 5.700030456852795 msec\nrounds: 197"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 255.966806761362,
            "unit": "iter/sec",
            "range": "stddev: 0.00012692753210424937",
            "extra": "mean: 3.9067565543070613 msec\nrounds: 267"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 364.2374828387891,
            "unit": "iter/sec",
            "range": "stddev: 0.00008806015721237035",
            "extra": "mean: 2.745461538461703 msec\nrounds: 416"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 323.90462756405606,
            "unit": "iter/sec",
            "range": "stddev: 0.0007180142789558032",
            "extra": "mean: 3.0873285371702135 msec\nrounds: 417"
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
        "date": 1672686021106,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.23588503560434,
            "unit": "iter/sec",
            "range": "stddev: 0.0007628999668509667",
            "extra": "mean: 8.457669172932313 msec\nrounds: 133"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.3771595575463,
            "unit": "iter/sec",
            "range": "stddev: 0.0004220797496731307",
            "extra": "mean: 6.43595238095233 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.0100991213513,
            "unit": "iter/sec",
            "range": "stddev: 0.00028699654504169334",
            "extra": "mean: 4.9748744186046725 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 247.75147947492218,
            "unit": "iter/sec",
            "range": "stddev: 0.0012127159770159168",
            "extra": "mean: 4.036302839116735 msec\nrounds: 317"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.70163192305482,
            "unit": "iter/sec",
            "range": "stddev: 0.0006943979265362228",
            "extra": "mean: 8.56886046511614 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.44845690158306,
            "unit": "iter/sec",
            "range": "stddev: 0.0009309204460764027",
            "extra": "mean: 6.922884615384498 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 169.13778027406684,
            "unit": "iter/sec",
            "range": "stddev: 0.0024004740838505004",
            "extra": "mean: 5.912339622641516 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 289.7423792200159,
            "unit": "iter/sec",
            "range": "stddev: 0.0005183270191562565",
            "extra": "mean: 3.4513418530350717 msec\nrounds: 313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.01943770915581,
            "unit": "iter/sec",
            "range": "stddev: 0.004710226581009466",
            "extra": "mean: 99.80599999999953 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 9.6380728410498,
            "unit": "iter/sec",
            "range": "stddev: 0.00791269757817455",
            "extra": "mean: 103.75518181818161 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 163.5034682830709,
            "unit": "iter/sec",
            "range": "stddev: 0.0006835244786759564",
            "extra": "mean: 6.116078212290373 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 237.75626831511627,
            "unit": "iter/sec",
            "range": "stddev: 0.00019245863573004945",
            "extra": "mean: 4.20598795180712 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 322.38565383838886,
            "unit": "iter/sec",
            "range": "stddev: 0.00020398382589378527",
            "extra": "mean: 3.1018750000001476 msec\nrounds: 368"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 307.6567764144093,
            "unit": "iter/sec",
            "range": "stddev: 0.00022285433311007252",
            "extra": "mean: 3.2503753424660937 msec\nrounds: 365"
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
        "date": 1672766173691,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.46490750816113,
            "unit": "iter/sec",
            "range": "stddev: 0.0016383293935929343",
            "extra": "mean: 8.586277372262767 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 156.02812012412275,
            "unit": "iter/sec",
            "range": "stddev: 0.0009679691308630379",
            "extra": "mean: 6.409101123595444 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 211.65560369866006,
            "unit": "iter/sec",
            "range": "stddev: 0.0006519061064859504",
            "extra": "mean: 4.72465638766516 msec\nrounds: 227"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 296.1871903042786,
            "unit": "iter/sec",
            "range": "stddev: 0.00034077190591267134",
            "extra": "mean: 3.3762432432431715 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 125.3204955636537,
            "unit": "iter/sec",
            "range": "stddev: 0.0006416828709804577",
            "extra": "mean: 7.979540740740791 msec\nrounds: 135"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.07351979522969,
            "unit": "iter/sec",
            "range": "stddev: 0.0005050845654488414",
            "extra": "mean: 6.44855421686741 msec\nrounds: 166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 218.14180190971587,
            "unit": "iter/sec",
            "range": "stddev: 0.0002752956357074944",
            "extra": "mean: 4.584174107142831 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 319.49217961585236,
            "unit": "iter/sec",
            "range": "stddev: 0.000343417643097598",
            "extra": "mean: 3.1299670658679957 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.785806488345552,
            "unit": "iter/sec",
            "range": "stddev: 0.010292254843504808",
            "extra": "mean: 102.18881818181816 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 9.942622032127222,
            "unit": "iter/sec",
            "range": "stddev: 0.009143818452425179",
            "extra": "mean: 100.57709090909194 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 180.2957609619934,
            "unit": "iter/sec",
            "range": "stddev: 0.0004342794486129399",
            "extra": "mean: 5.546442105262814 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 246.60729549673363,
            "unit": "iter/sec",
            "range": "stddev: 0.0002430843611575116",
            "extra": "mean: 4.055030075187882 msec\nrounds: 266"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 331.3447030375774,
            "unit": "iter/sec",
            "range": "stddev: 0.00033927573665703436",
            "extra": "mean: 3.018005089058542 msec\nrounds: 393"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 336.37224270126563,
            "unit": "iter/sec",
            "range": "stddev: 0.00020253353871825126",
            "extra": "mean: 2.9728969072162905 msec\nrounds: 388"
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
        "date": 1672779604903,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.85175745412295,
            "unit": "iter/sec",
            "range": "stddev: 0.0019377362037761767",
            "extra": "mean: 8.63172058823534 msec\nrounds: 136"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.88248858552564,
            "unit": "iter/sec",
            "range": "stddev: 0.00031263956567853025",
            "extra": "mean: 6.41508875739654 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.28648384525297,
            "unit": "iter/sec",
            "range": "stddev: 0.0003080532592315544",
            "extra": "mean: 4.943484018264855 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 263.63183020839534,
            "unit": "iter/sec",
            "range": "stddev: 0.00219456733691094",
            "extra": "mean: 3.7931686746988076 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.21835267281381,
            "unit": "iter/sec",
            "range": "stddev: 0.0006839532500966871",
            "extra": "mean: 8.5310873015871 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.68845560387004,
            "unit": "iter/sec",
            "range": "stddev: 0.00070320192475476",
            "extra": "mean: 6.7254716981132745 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 158.65094772306597,
            "unit": "iter/sec",
            "range": "stddev: 0.004697065113657896",
            "extra": "mean: 6.303145454545633 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 289.69112142550756,
            "unit": "iter/sec",
            "range": "stddev: 0.0003867628956120907",
            "extra": "mean: 3.4519525316454835 msec\nrounds: 316"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 7.294281210588061,
            "unit": "iter/sec",
            "range": "stddev: 0.041821818067314394",
            "extra": "mean: 137.0937000000005 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 8.12335806625082,
            "unit": "iter/sec",
            "range": "stddev: 0.021639605607415173",
            "extra": "mean: 123.1018000000006 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 160.36455591068741,
            "unit": "iter/sec",
            "range": "stddev: 0.0010058124406407188",
            "extra": "mean: 6.235791907514368 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 224.0988974150412,
            "unit": "iter/sec",
            "range": "stddev: 0.0004038424737750677",
            "extra": "mean: 4.462315573770786 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 277.7777777777791,
            "unit": "iter/sec",
            "range": "stddev: 0.0012579440058884705",
            "extra": "mean: 3.5999999999999828 msec\nrounds: 370"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 294.8242061004002,
            "unit": "iter/sec",
            "range": "stddev: 0.0005801621647631073",
            "extra": "mean: 3.391851752021533 msec\nrounds: 371"
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
        "date": 1672782499923,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 136.79669635978348,
            "unit": "iter/sec",
            "range": "stddev: 0.00024075058900300378",
            "extra": "mean: 7.310118055555525 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 171.38436438422238,
            "unit": "iter/sec",
            "range": "stddev: 0.00020092150490437442",
            "extra": "mean: 5.834837988826827 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 224.6135823445986,
            "unit": "iter/sec",
            "range": "stddev: 0.0000695199712543223",
            "extra": "mean: 4.4520905172413645 msec\nrounds: 232"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 307.4107500553418,
            "unit": "iter/sec",
            "range": "stddev: 0.00039282871962629097",
            "extra": "mean: 3.2529766763848516 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 132.64628367714687,
            "unit": "iter/sec",
            "range": "stddev: 0.0001515656958370565",
            "extra": "mean: 7.538846715328567 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 158.47906203446416,
            "unit": "iter/sec",
            "range": "stddev: 0.0002987726412020033",
            "extra": "mean: 6.309981818181962 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.2474219788545,
            "unit": "iter/sec",
            "range": "stddev: 0.0006194232678850693",
            "extra": "mean: 4.920111607142737 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 327.9996454057933,
            "unit": "iter/sec",
            "range": "stddev: 0.0003359779128586655",
            "extra": "mean: 3.0487837837837417 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.018858776796424,
            "unit": "iter/sec",
            "range": "stddev: 0.004240967846226791",
            "extra": "mean: 90.75350000000053 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.204523639677449,
            "unit": "iter/sec",
            "range": "stddev: 0.004535110649814976",
            "extra": "mean: 89.24966666666674 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 184.44162470862355,
            "unit": "iter/sec",
            "range": "stddev: 0.00019591402335381402",
            "extra": "mean: 5.42176963350749 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 250.85685938486694,
            "unit": "iter/sec",
            "range": "stddev: 0.0001941055799725329",
            "extra": "mean: 3.9863370786516565 msec\nrounds: 267"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 362.2598395780771,
            "unit": "iter/sec",
            "range": "stddev: 0.00006249863497120509",
            "extra": "mean: 2.760449519230994 msec\nrounds: 416"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 356.42162892339036,
            "unit": "iter/sec",
            "range": "stddev: 0.00013511435190537225",
            "extra": "mean: 2.805665871121814 msec\nrounds: 419"
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
        "date": 1672841010809,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 141.86929687839347,
            "unit": "iter/sec",
            "range": "stddev: 0.00027844285925289795",
            "extra": "mean: 7.048741496598612 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 163.10284067888892,
            "unit": "iter/sec",
            "range": "stddev: 0.0005958536099503112",
            "extra": "mean: 6.131101063829811 msec\nrounds: 188"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 221.7068483497606,
            "unit": "iter/sec",
            "range": "stddev: 0.00025148096246305635",
            "extra": "mean: 4.510460580912768 msec\nrounds: 241"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 326.7067862600174,
            "unit": "iter/sec",
            "range": "stddev: 0.0002702949729816449",
            "extra": "mean: 3.0608485714285902 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 130.09482678395793,
            "unit": "iter/sec",
            "range": "stddev: 0.00043988471693238887",
            "extra": "mean: 7.686700729927184 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 158.34214833754774,
            "unit": "iter/sec",
            "range": "stddev: 0.00042026030480567836",
            "extra": "mean: 6.315437869822494 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 177.8998241528648,
            "unit": "iter/sec",
            "range": "stddev: 0.0026132016049464674",
            "extra": "mean: 5.621141025641068 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 325.2351646503101,
            "unit": "iter/sec",
            "range": "stddev: 0.0002964902539034907",
            "extra": "mean: 3.074698275861994 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.081094000320892,
            "unit": "iter/sec",
            "range": "stddev: 0.00412226836183297",
            "extra": "mean: 99.19558333333356 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 9.700107935746534,
            "unit": "iter/sec",
            "range": "stddev: 0.004265791796905791",
            "extra": "mean: 103.09163636363584 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 189.29006518373592,
            "unit": "iter/sec",
            "range": "stddev: 0.00026913567218979037",
            "extra": "mean: 5.282897435897346 msec\nrounds: 195"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 255.45301291041184,
            "unit": "iter/sec",
            "range": "stddev: 0.00017711329013114907",
            "extra": "mean: 3.91461423220991 msec\nrounds: 267"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 336.0811615361427,
            "unit": "iter/sec",
            "range": "stddev: 0.0007613800075031466",
            "extra": "mean: 2.975471744471635 msec\nrounds: 407"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 352.4729360556062,
            "unit": "iter/sec",
            "range": "stddev: 0.00009246276557311998",
            "extra": "mean: 2.8370972568578705 msec\nrounds: 401"
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
        "date": 1672842985776,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 135.23713976326738,
            "unit": "iter/sec",
            "range": "stddev: 0.0004921544205405393",
            "extra": "mean: 7.394418439716339 msec\nrounds: 141"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 169.07567481368093,
            "unit": "iter/sec",
            "range": "stddev: 0.0004683056021584502",
            "extra": "mean: 5.9145113636363496 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 222.23596434948328,
            "unit": "iter/sec",
            "range": "stddev: 0.00008203796626941438",
            "extra": "mean: 4.499721739130497 msec\nrounds: 230"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 326.58204434579716,
            "unit": "iter/sec",
            "range": "stddev: 0.00004312112751859483",
            "extra": "mean: 3.0620176991150285 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 131.194315301726,
            "unit": "iter/sec",
            "range": "stddev: 0.00027918419672180164",
            "extra": "mean: 7.622281481481568 msec\nrounds: 135"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 161.71261358386081,
            "unit": "iter/sec",
            "range": "stddev: 0.00043185654016830624",
            "extra": "mean: 6.183809523809475 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 212.80348460912793,
            "unit": "iter/sec",
            "range": "stddev: 0.00007974624618447212",
            "extra": "mean: 4.6991711711712565 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 310.0371767793146,
            "unit": "iter/sec",
            "range": "stddev: 0.00045411445013552286",
            "extra": "mean: 3.225419642857227 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.776343914003794,
            "unit": "iter/sec",
            "range": "stddev: 0.01835238105037552",
            "extra": "mean: 102.28772727272654 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.900390415649968,
            "unit": "iter/sec",
            "range": "stddev: 0.002068998344976792",
            "extra": "mean: 91.73983333333406 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 174.56666392837056,
            "unit": "iter/sec",
            "range": "stddev: 0.000541267819683453",
            "extra": "mean: 5.7284705882351465 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 248.61071897639496,
            "unit": "iter/sec",
            "range": "stddev: 0.00006830889167070263",
            "extra": "mean: 4.022352713178662 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 319.03493511509555,
            "unit": "iter/sec",
            "range": "stddev: 0.0002216578864520207",
            "extra": "mean: 3.1344529702969313 msec\nrounds: 404"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 330.97597384613346,
            "unit": "iter/sec",
            "range": "stddev: 0.00019301262896808823",
            "extra": "mean: 3.021367346938867 msec\nrounds: 392"
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
        "date": 1672843831537,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 132.75047771474757,
            "unit": "iter/sec",
            "range": "stddev: 0.0007054399024710983",
            "extra": "mean: 7.532929577464772 msec\nrounds: 142"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 166.42415846554982,
            "unit": "iter/sec",
            "range": "stddev: 0.00041650239878697856",
            "extra": "mean: 6.008743016759807 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 209.2305869195697,
            "unit": "iter/sec",
            "range": "stddev: 0.0004835111714331228",
            "extra": "mean: 4.779415929203553 msec\nrounds: 226"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 314.9141835064905,
            "unit": "iter/sec",
            "range": "stddev: 0.00044446660718185294",
            "extra": "mean: 3.1754682779456 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.20146557729161,
            "unit": "iter/sec",
            "range": "stddev: 0.0006710163546967318",
            "extra": "mean: 8.051434782608839 msec\nrounds: 138"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.68681266556453,
            "unit": "iter/sec",
            "range": "stddev: 0.0008075875765870412",
            "extra": "mean: 6.725546012269839 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 214.51752067103126,
            "unit": "iter/sec",
            "range": "stddev: 0.00015965812128778116",
            "extra": "mean: 4.661623893805525 msec\nrounds: 226"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 333.03994100434545,
            "unit": "iter/sec",
            "range": "stddev: 0.0001627759850897911",
            "extra": "mean: 3.002642857142928 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.032656663724635,
            "unit": "iter/sec",
            "range": "stddev: 0.0022671910133266844",
            "extra": "mean: 90.6399999999999 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.765701551427357,
            "unit": "iter/sec",
            "range": "stddev: 0.003998882990816619",
            "extra": "mean: 92.88758333333291 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 180.59170340467958,
            "unit": "iter/sec",
            "range": "stddev: 0.00022603097972435083",
            "extra": "mean: 5.537352941176629 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 247.11569648014537,
            "unit": "iter/sec",
            "range": "stddev: 0.00021076680729874555",
            "extra": "mean: 4.046687500000007 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 340.0221573932264,
            "unit": "iter/sec",
            "range": "stddev: 0.0002793004036958499",
            "extra": "mean: 2.9409848101267326 msec\nrounds: 395"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 332.1763367357512,
            "unit": "iter/sec",
            "range": "stddev: 0.0001035289720457691",
            "extra": "mean: 3.010449238578688 msec\nrounds: 394"
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
        "date": 1672858509551,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 132.51258154528784,
            "unit": "iter/sec",
            "range": "stddev: 0.0002779059694750673",
            "extra": "mean: 7.546453237410045 msec\nrounds: 139"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 166.57901898516525,
            "unit": "iter/sec",
            "range": "stddev: 0.00011246865090507238",
            "extra": "mean: 6.0031569767442035 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 217.00725014531014,
            "unit": "iter/sec",
            "range": "stddev: 0.00012139308433645521",
            "extra": "mean: 4.608140969162968 msec\nrounds: 227"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 325.2726209251641,
            "unit": "iter/sec",
            "range": "stddev: 0.00008142199873879614",
            "extra": "mean: 3.074344213649852 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 129.35973687843236,
            "unit": "iter/sec",
            "range": "stddev: 0.0002966594410794335",
            "extra": "mean: 7.730380597015007 msec\nrounds: 134"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.84180073784032,
            "unit": "iter/sec",
            "range": "stddev: 0.00021258917471538634",
            "extra": "mean: 6.416763636363627 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 212.0473025698232,
            "unit": "iter/sec",
            "range": "stddev: 0.0001409277116845482",
            "extra": "mean: 4.715928888888925 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.87722789251666,
            "unit": "iter/sec",
            "range": "stddev: 0.00015111198960145373",
            "extra": "mean: 3.1557963525835806 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.5403864488959,
            "unit": "iter/sec",
            "range": "stddev: 0.0019109676511225935",
            "extra": "mean: 94.87318181818178 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.937307354245444,
            "unit": "iter/sec",
            "range": "stddev: 0.0019233273157815978",
            "extra": "mean: 91.43018181818198 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 176.19635398714493,
            "unit": "iter/sec",
            "range": "stddev: 0.00012374041678643257",
            "extra": "mean: 5.675486338797673 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 246.3223112953547,
            "unit": "iter/sec",
            "range": "stddev: 0.00012799602035169677",
            "extra": "mean: 4.05972156862779 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 334.4809785275279,
            "unit": "iter/sec",
            "range": "stddev: 0.000053824600588546084",
            "extra": "mean: 2.989706632652953 msec\nrounds: 392"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 329.06879498587466,
            "unit": "iter/sec",
            "range": "stddev: 0.00008654390488810653",
            "extra": "mean: 3.0388782383420017 msec\nrounds: 386"
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
        "date": 1672941243736,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 101.98178243187473,
            "unit": "iter/sec",
            "range": "stddev: 0.0006816460207869935",
            "extra": "mean: 9.805672897196262 msec\nrounds: 107"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 131.20617349343732,
            "unit": "iter/sec",
            "range": "stddev: 0.0001712215679108669",
            "extra": "mean: 7.62159259259259 msec\nrounds: 135"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.7838242205987,
            "unit": "iter/sec",
            "range": "stddev: 0.00026437444691534875",
            "extra": "mean: 6.0685568181818885 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 234.69357819697015,
            "unit": "iter/sec",
            "range": "stddev: 0.00024198134040968463",
            "extra": "mean: 4.260874999999935 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 100.43321480926423,
            "unit": "iter/sec",
            "range": "stddev: 0.00022520657432710116",
            "extra": "mean: 9.956865384615341 msec\nrounds: 104"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 118.99630830350488,
            "unit": "iter/sec",
            "range": "stddev: 0.00039132937714266556",
            "extra": "mean: 8.403622047244186 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 161.30998371318995,
            "unit": "iter/sec",
            "range": "stddev: 0.0004509912922459424",
            "extra": "mean: 6.199244318181852 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 253.1909361540073,
            "unit": "iter/sec",
            "range": "stddev: 0.00007062776875723856",
            "extra": "mean: 3.9495884615385064 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 8.99885894468584,
            "unit": "iter/sec",
            "range": "stddev: 0.001962086236636762",
            "extra": "mean: 111.12519999999968 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 8.615757876525768,
            "unit": "iter/sec",
            "range": "stddev: 0.006013656887083986",
            "extra": "mean: 116.06640000000112 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 146.71127221627867,
            "unit": "iter/sec",
            "range": "stddev: 0.00015573603982123736",
            "extra": "mean: 6.816108843537401 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 193.85884849700193,
            "unit": "iter/sec",
            "range": "stddev: 0.00009521084466131731",
            "extra": "mean: 5.158392344497317 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 271.4379028882728,
            "unit": "iter/sec",
            "range": "stddev: 0.00009989767935701438",
            "extra": "mean: 3.6840838709677644 msec\nrounds: 310"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 262.3547950839579,
            "unit": "iter/sec",
            "range": "stddev: 0.000181607939298603",
            "extra": "mean: 3.811632258064821 msec\nrounds: 310"
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
        "date": 1672948645399,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 131.9159064773582,
            "unit": "iter/sec",
            "range": "stddev: 0.0003881924183923076",
            "extra": "mean: 7.580586956521715 msec\nrounds: 138"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 164.72798208221934,
            "unit": "iter/sec",
            "range": "stddev: 0.00048160804496845096",
            "extra": "mean: 6.070614035087725 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 211.81456665644507,
            "unit": "iter/sec",
            "range": "stddev: 0.0004291943368919028",
            "extra": "mean: 4.721110619469155 msec\nrounds: 226"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 321.1905462915907,
            "unit": "iter/sec",
            "range": "stddev: 0.00016158723596205928",
            "extra": "mean: 3.113416666666636 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 127.00394778683506,
            "unit": "iter/sec",
            "range": "stddev: 0.00019125209158769535",
            "extra": "mean: 7.87377099236641 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 157.5566004961567,
            "unit": "iter/sec",
            "range": "stddev: 0.00019791723499941978",
            "extra": "mean: 6.346925465838501 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 215.4128363072978,
            "unit": "iter/sec",
            "range": "stddev: 0.00013289137048419763",
            "extra": "mean: 4.642248888889087 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.9019065988174,
            "unit": "iter/sec",
            "range": "stddev: 0.0002285529504597111",
            "extra": "mean: 3.155550595238141 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.480662225406629,
            "unit": "iter/sec",
            "range": "stddev: 0.002049935160837237",
            "extra": "mean: 95.41381818181836 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.787059843012289,
            "unit": "iter/sec",
            "range": "stddev: 0.0028159053552439402",
            "extra": "mean: 92.70366666666696 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 177.3823949901069,
            "unit": "iter/sec",
            "range": "stddev: 0.00036671262802143926",
            "extra": "mean: 5.637538043478175 msec\nrounds: 184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 243.4377945668038,
            "unit": "iter/sec",
            "range": "stddev: 0.0001531447923908669",
            "extra": "mean: 4.107825581395422 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 325.1901014155107,
            "unit": "iter/sec",
            "range": "stddev: 0.00015201546427744434",
            "extra": "mean: 3.0751243523315397 msec\nrounds: 386"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 330.2872562748359,
            "unit": "iter/sec",
            "range": "stddev: 0.00009876281339491102",
            "extra": "mean: 3.0276675257730448 msec\nrounds: 388"
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
        "date": 1673021023924,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 128.81345327706094,
            "unit": "iter/sec",
            "range": "stddev: 0.0005570427261129243",
            "extra": "mean: 7.763164285714244 msec\nrounds: 140"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.00012693966684,
            "unit": "iter/sec",
            "range": "stddev: 0.0007290092553279342",
            "extra": "mean: 6.622510989011003 msec\nrounds: 182"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 207.53459820209548,
            "unit": "iter/sec",
            "range": "stddev: 0.0005265561574700269",
            "extra": "mean: 4.818473684210515 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.3678833440924,
            "unit": "iter/sec",
            "range": "stddev: 0.00015637762526604106",
            "extra": "mean: 3.1410203488371304 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 129.97662332201233,
            "unit": "iter/sec",
            "range": "stddev: 0.00036563613798857203",
            "extra": "mean: 7.69369117647053 msec\nrounds: 136"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 160.20088805335877,
            "unit": "iter/sec",
            "range": "stddev: 0.00016599493618490465",
            "extra": "mean: 6.242162650602324 msec\nrounds: 166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 209.816124777921,
            "unit": "iter/sec",
            "range": "stddev: 0.0002977980392189399",
            "extra": "mean: 4.766077922077942 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 325.581710834997,
            "unit": "iter/sec",
            "range": "stddev: 0.000062981213495582",
            "extra": "mean: 3.0714255952380394 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.0232618382943,
            "unit": "iter/sec",
            "range": "stddev: 0.002341512608433681",
            "extra": "mean: 90.71724999999968 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.078992291791387,
            "unit": "iter/sec",
            "range": "stddev: 0.002843403449081581",
            "extra": "mean: 90.26091666666443 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 182.41970667674636,
            "unit": "iter/sec",
            "range": "stddev: 0.00016180268133756466",
            "extra": "mean: 5.481863874345728 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 250.25121743836416,
            "unit": "iter/sec",
            "range": "stddev: 0.0000743004569304988",
            "extra": "mean: 3.9959845559844114 msec\nrounds: 259"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 340.5182099459179,
            "unit": "iter/sec",
            "range": "stddev: 0.00010938822079942133",
            "extra": "mean: 2.9367005076140362 msec\nrounds: 394"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 341.84707420364276,
            "unit": "iter/sec",
            "range": "stddev: 0.0001293711672678078",
            "extra": "mean: 2.9252846534655053 msec\nrounds: 404"
          }
        ]
      }
    ]
  }
}