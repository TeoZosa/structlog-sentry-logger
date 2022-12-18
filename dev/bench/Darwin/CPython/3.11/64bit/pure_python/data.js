window.BENCHMARK_DATA = {
  "lastUpdate": 1671358228216,
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
      }
    ]
  }
}