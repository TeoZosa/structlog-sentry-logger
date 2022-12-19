window.BENCHMARK_DATA = {
  "lastUpdate": 1671429942972,
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
      }
    ]
  }
}