window.BENCHMARK_DATA = {
  "lastUpdate": 1676109144829,
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
        "date": 1671168384685,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 128.7117943511834,
            "unit": "iter/sec",
            "range": "stddev: 0.0007819133179065543",
            "extra": "mean: 7.769295774647909 msec\nrounds: 142"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 158.05917699664224,
            "unit": "iter/sec",
            "range": "stddev: 0.0005193950959354292",
            "extra": "mean: 6.326744318181815 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 189.8003449559119,
            "unit": "iter/sec",
            "range": "stddev: 0.0008431182738475716",
            "extra": "mean: 5.268694323144074 msec\nrounds: 229"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 304.42558697058814,
            "unit": "iter/sec",
            "range": "stddev: 0.0003523167873614541",
            "extra": "mean: 3.284874999999965 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.34705495438337,
            "unit": "iter/sec",
            "range": "stddev: 0.0012717998914926784",
            "extra": "mean: 8.378924812030078 msec\nrounds: 133"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.78865186560046,
            "unit": "iter/sec",
            "range": "stddev: 0.0007209791702528559",
            "extra": "mean: 6.67607317073166 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 208.74666686027714,
            "unit": "iter/sec",
            "range": "stddev: 0.0001694774591245987",
            "extra": "mean: 4.790495652174134 msec\nrounds: 230"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 300.90963048849056,
            "unit": "iter/sec",
            "range": "stddev: 0.0003250193501649604",
            "extra": "mean: 3.3232568807339944 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.513850085878968,
            "unit": "iter/sec",
            "range": "stddev: 0.003828889558937606",
            "extra": "mean: 95.112636363637 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 9.826174964871454,
            "unit": "iter/sec",
            "range": "stddev: 0.007775288278783951",
            "extra": "mean: 101.7689999999997 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 170.9518304365018,
            "unit": "iter/sec",
            "range": "stddev: 0.000281627859357922",
            "extra": "mean: 5.849601010101141 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 244.8867376079479,
            "unit": "iter/sec",
            "range": "stddev: 0.0001785249171280398",
            "extra": "mean: 4.083520446096811 msec\nrounds: 269"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 314.6226021509361,
            "unit": "iter/sec",
            "range": "stddev: 0.0001921672004988812",
            "extra": "mean: 3.1784111922139124 msec\nrounds: 411"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 299.9469861140609,
            "unit": "iter/sec",
            "range": "stddev: 0.0003876843892715061",
            "extra": "mean: 3.3339224806203913 msec\nrounds: 387"
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
        "date": 1671338474411,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 128.56867995029916,
            "unit": "iter/sec",
            "range": "stddev: 0.0006194339507835941",
            "extra": "mean: 7.777944055944033 msec\nrounds: 143"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 161.51624769909037,
            "unit": "iter/sec",
            "range": "stddev: 0.00041155096698382196",
            "extra": "mean: 6.191327586206869 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 207.3383082294989,
            "unit": "iter/sec",
            "range": "stddev: 0.00028238301583185935",
            "extra": "mean: 4.8230353982300205 msec\nrounds: 226"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 307.38612867017497,
            "unit": "iter/sec",
            "range": "stddev: 0.00018900559577889585",
            "extra": "mean: 3.2532372372372045 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.07487826309884,
            "unit": "iter/sec",
            "range": "stddev: 0.00041896947073188305",
            "extra": "mean: 8.05964925373141 msec\nrounds: 134"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.89132831779142,
            "unit": "iter/sec",
            "range": "stddev: 0.00034330873273931124",
            "extra": "mean: 6.583654320987773 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.93232702951053,
            "unit": "iter/sec",
            "range": "stddev: 0.00031917810230661385",
            "extra": "mean: 4.927751111110944 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 298.060155445629,
            "unit": "iter/sec",
            "range": "stddev: 0.00023334176974506313",
            "extra": "mean: 3.3550274390245236 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.406782194563291,
            "unit": "iter/sec",
            "range": "stddev: 0.0007992093365547155",
            "extra": "mean: 96.09118181818198 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.383304401671452,
            "unit": "iter/sec",
            "range": "stddev: 0.0028616204277864894",
            "extra": "mean: 96.30845454545519 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 172.36479844965345,
            "unit": "iter/sec",
            "range": "stddev: 0.000385253390373454",
            "extra": "mean: 5.801648648648483 msec\nrounds: 185"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 232.90829098497562,
            "unit": "iter/sec",
            "range": "stddev: 0.0002611666829612926",
            "extra": "mean: 4.293535433070984 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 327.0204174486891,
            "unit": "iter/sec",
            "range": "stddev: 0.00018821011882826734",
            "extra": "mean: 3.0579130434781012 msec\nrounds: 391"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 320.70986003723755,
            "unit": "iter/sec",
            "range": "stddev: 0.0002207207850398454",
            "extra": "mean: 3.1180831168829366 msec\nrounds: 385"
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
        "date": 1671350731329,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 127.5241100270523,
            "unit": "iter/sec",
            "range": "stddev: 0.00046654864187956654",
            "extra": "mean: 7.8416544117646865 msec\nrounds: 136"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 157.8792774269342,
            "unit": "iter/sec",
            "range": "stddev: 0.00047328841909409855",
            "extra": "mean: 6.333953488372123 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 206.57490359055132,
            "unit": "iter/sec",
            "range": "stddev: 0.0006537019646542463",
            "extra": "mean: 4.8408590909091425 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 315.99404845564624,
            "unit": "iter/sec",
            "range": "stddev: 0.00017832120604338537",
            "extra": "mean: 3.1646165644172335 msec\nrounds: 326"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.00077618806426,
            "unit": "iter/sec",
            "range": "stddev: 0.0004786778633777573",
            "extra": "mean: 8.064465648854991 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.17319376124675,
            "unit": "iter/sec",
            "range": "stddev: 0.00040217044895147054",
            "extra": "mean: 6.703617283950563 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 206.05655735005269,
            "unit": "iter/sec",
            "range": "stddev: 0.00039533832745486933",
            "extra": "mean: 4.853036529680448 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 297.28638075970406,
            "unit": "iter/sec",
            "range": "stddev: 0.00034832826379870295",
            "extra": "mean: 3.363759878419381 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.6057830442454,
            "unit": "iter/sec",
            "range": "stddev: 0.0016696972071708342",
            "extra": "mean: 94.28818181818178 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.368750471306935,
            "unit": "iter/sec",
            "range": "stddev: 0.006953766709815496",
            "extra": "mean: 96.44363636363548 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 177.12820016454546,
            "unit": "iter/sec",
            "range": "stddev: 0.0002439846726882439",
            "extra": "mean: 5.645628415300542 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 238.2867465476774,
            "unit": "iter/sec",
            "range": "stddev: 0.00030067601959960085",
            "extra": "mean: 4.196624505928683 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 322.1485759568726,
            "unit": "iter/sec",
            "range": "stddev: 0.00017709926400113273",
            "extra": "mean: 3.1041577540106036 msec\nrounds: 374"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 322.6285981256531,
            "unit": "iter/sec",
            "range": "stddev: 0.00023089615824604931",
            "extra": "mean: 3.099539240506303 msec\nrounds: 395"
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
        "date": 1671358149762,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 135.29384131159873,
            "unit": "iter/sec",
            "range": "stddev: 0.0003736089285702521",
            "extra": "mean: 7.391319444444439 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 169.13519004086675,
            "unit": "iter/sec",
            "range": "stddev: 0.00026551522816627317",
            "extra": "mean: 5.912430167597755 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 221.32674645013458,
            "unit": "iter/sec",
            "range": "stddev: 0.00019413802172587195",
            "extra": "mean: 4.518206751054835 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 322.56236967292193,
            "unit": "iter/sec",
            "range": "stddev: 0.00015913565459644668",
            "extra": "mean: 3.1001756373937837 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 128.9148545410715,
            "unit": "iter/sec",
            "range": "stddev: 0.0005169283332575363",
            "extra": "mean: 7.75705797101455 msec\nrounds: 138"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 152.87792697531083,
            "unit": "iter/sec",
            "range": "stddev: 0.0005748118116065223",
            "extra": "mean: 6.541166666666641 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.78666571692816,
            "unit": "iter/sec",
            "range": "stddev: 0.000325104001410899",
            "extra": "mean: 4.883130434782687 msec\nrounds: 230"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 313.75675730545765,
            "unit": "iter/sec",
            "range": "stddev: 0.00019324500088277677",
            "extra": "mean: 3.187182352941169 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.208437737810307,
            "unit": "iter/sec",
            "range": "stddev: 0.007672651651394107",
            "extra": "mean: 97.95818181818076 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.801848196226466,
            "unit": "iter/sec",
            "range": "stddev: 0.003558280512347846",
            "extra": "mean: 92.57674999999921 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 179.00246311041641,
            "unit": "iter/sec",
            "range": "stddev: 0.00038628026861105367",
            "extra": "mean: 5.586515306122671 msec\nrounds: 196"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 242.04702627939497,
            "unit": "iter/sec",
            "range": "stddev: 0.00029301770918770814",
            "extra": "mean: 4.13142857142851 msec\nrounds: 266"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 336.965902849741,
            "unit": "iter/sec",
            "range": "stddev: 0.00023756128729257434",
            "extra": "mean: 2.967659313725631 msec\nrounds: 408"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 332.99360442137623,
            "unit": "iter/sec",
            "range": "stddev: 0.00018465336423224057",
            "extra": "mean: 3.0030606796116768 msec\nrounds: 412"
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
        "date": 1671363990611,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 135.35821652771187,
            "unit": "iter/sec",
            "range": "stddev: 0.000494284477289478",
            "extra": "mean: 7.3878041958041765 msec\nrounds: 143"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 170.19884740199484,
            "unit": "iter/sec",
            "range": "stddev: 0.00014341016609405725",
            "extra": "mean: 5.875480446927394 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 214.45501386498222,
            "unit": "iter/sec",
            "range": "stddev: 0.00039362614947148673",
            "extra": "mean: 4.662982608695667 msec\nrounds: 230"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 315.95033152152314,
            "unit": "iter/sec",
            "range": "stddev: 0.0005319384686069981",
            "extra": "mean: 3.1650544412607404 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 129.5183930509061,
            "unit": "iter/sec",
            "range": "stddev: 0.0005412103553668078",
            "extra": "mean: 7.720911111111135 msec\nrounds: 135"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 160.78124371948488,
            "unit": "iter/sec",
            "range": "stddev: 0.0005050590593263494",
            "extra": "mean: 6.219630952380867 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 213.43850373942888,
            "unit": "iter/sec",
            "range": "stddev: 0.000149176685973937",
            "extra": "mean: 4.685190265486612 msec\nrounds: 226"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.8071473707436,
            "unit": "iter/sec",
            "range": "stddev: 0.00027787120250876584",
            "extra": "mean: 3.136692537313447 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.037172276462737,
            "unit": "iter/sec",
            "range": "stddev: 0.002352002955252645",
            "extra": "mean: 90.60291666666694 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.436533434229023,
            "unit": "iter/sec",
            "range": "stddev: 0.0016016967400144333",
            "extra": "mean: 87.43908333333295 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 182.89859620513832,
            "unit": "iter/sec",
            "range": "stddev: 0.0003460237129758004",
            "extra": "mean: 5.467510526315927 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 252.8187366561186,
            "unit": "iter/sec",
            "range": "stddev: 0.00030547604744617806",
            "extra": "mean: 3.9554030418251376 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 328.94026411576647,
            "unit": "iter/sec",
            "range": "stddev: 0.0005365487987125173",
            "extra": "mean: 3.040065656565723 msec\nrounds: 396"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 312.2004483763188,
            "unit": "iter/sec",
            "range": "stddev: 0.00024599855639506694",
            "extra": "mean: 3.2030703517588304 msec\nrounds: 398"
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
        "date": 1671374270305,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 141.32655984415865,
            "unit": "iter/sec",
            "range": "stddev: 0.00023188756222566336",
            "extra": "mean: 7.075810810810819 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 171.67587963120997,
            "unit": "iter/sec",
            "range": "stddev: 0.0005118043655558988",
            "extra": "mean: 5.824930107526906 msec\nrounds: 186"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 222.7648626820522,
            "unit": "iter/sec",
            "range": "stddev: 0.00016833014283992805",
            "extra": "mean: 4.489038297872317 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 325.64755893483266,
            "unit": "iter/sec",
            "range": "stddev: 0.00021419920576917095",
            "extra": "mean: 3.0708045325778603 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 133.3489846226122,
            "unit": "iter/sec",
            "range": "stddev: 0.0005879066901693567",
            "extra": "mean: 7.499119718309639 msec\nrounds: 142"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 164.35747562031096,
            "unit": "iter/sec",
            "range": "stddev: 0.0005006189952250373",
            "extra": "mean: 6.084298850574595 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 220.96787691243497,
            "unit": "iter/sec",
            "range": "stddev: 0.00018864277144211417",
            "extra": "mean: 4.5255446808509605 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 324.92009338714814,
            "unit": "iter/sec",
            "range": "stddev: 0.00034834413733026657",
            "extra": "mean: 3.077679775280878 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.174849139536573,
            "unit": "iter/sec",
            "range": "stddev: 0.0028384732558616762",
            "extra": "mean: 89.486666666667 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.66006253680209,
            "unit": "iter/sec",
            "range": "stddev: 0.0019746535177468886",
            "extra": "mean: 85.76283333333319 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 185.0569778222707,
            "unit": "iter/sec",
            "range": "stddev: 0.0003141075452524788",
            "extra": "mean: 5.403741116751637 msec\nrounds: 197"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 254.4849450087066,
            "unit": "iter/sec",
            "range": "stddev: 0.00028150648793065947",
            "extra": "mean: 3.9295055350554717 msec\nrounds: 271"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 330.5660158832757,
            "unit": "iter/sec",
            "range": "stddev: 0.0003142901627525734",
            "extra": "mean: 3.025114355230951 msec\nrounds: 411"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 342.65898217399564,
            "unit": "iter/sec",
            "range": "stddev: 0.00018886422746104142",
            "extra": "mean: 2.918353383458716 msec\nrounds: 399"
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
        "date": 1671378141673,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 139.76609954368206,
            "unit": "iter/sec",
            "range": "stddev: 0.0008385812228790636",
            "extra": "mean: 7.1548108108108375 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 170.81782612844748,
            "unit": "iter/sec",
            "range": "stddev: 0.0003479734228994544",
            "extra": "mean: 5.854189944134075 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 216.17187326785302,
            "unit": "iter/sec",
            "range": "stddev: 0.00026043676903158896",
            "extra": "mean: 4.625948717948729 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.745596277941,
            "unit": "iter/sec",
            "range": "stddev: 0.0001736561268085415",
            "extra": "mean: 3.137298245614086 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 127.81209769290129,
            "unit": "iter/sec",
            "range": "stddev: 0.0008820207719347747",
            "extra": "mean: 7.823985507246238 msec\nrounds: 138"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 157.17836430346924,
            "unit": "iter/sec",
            "range": "stddev: 0.0002678831771584844",
            "extra": "mean: 6.362198795180668 msec\nrounds: 166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 218.85349946745404,
            "unit": "iter/sec",
            "range": "stddev: 0.0005053422372864549",
            "extra": "mean: 4.569266666666717 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 315.04987668313316,
            "unit": "iter/sec",
            "range": "stddev: 0.0004400365663921648",
            "extra": "mean: 3.174100591716045 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.655745711284291,
            "unit": "iter/sec",
            "range": "stddev: 0.005454059329916014",
            "extra": "mean: 93.84608333333381 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.382634697380844,
            "unit": "iter/sec",
            "range": "stddev: 0.004231913200118349",
            "extra": "mean: 96.31466666666633 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 165.7325508224879,
            "unit": "iter/sec",
            "range": "stddev: 0.002171327025200279",
            "extra": "mean: 6.033817708333444 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 252.4418177295785,
            "unit": "iter/sec",
            "range": "stddev: 0.00024273714435629081",
            "extra": "mean: 3.96130882352948 msec\nrounds: 272"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 313.0043751736254,
            "unit": "iter/sec",
            "range": "stddev: 0.00027480285261851766",
            "extra": "mean: 3.1948435207823977 msec\nrounds: 409"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 294.65054373470076,
            "unit": "iter/sec",
            "range": "stddev: 0.0003238821193139947",
            "extra": "mean: 3.3938508557458693 msec\nrounds: 409"
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
        "date": 1671379497734,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.66455342224951,
            "unit": "iter/sec",
            "range": "stddev: 0.0008088977236785067",
            "extra": "mean: 8.287437956204366 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 163.59729275350585,
            "unit": "iter/sec",
            "range": "stddev: 0.0003127111608749173",
            "extra": "mean: 6.1125705882353 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.61102350654699,
            "unit": "iter/sec",
            "range": "stddev: 0.0003211211205833273",
            "extra": "mean: 4.935565610859703 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 302.49302436809086,
            "unit": "iter/sec",
            "range": "stddev: 0.000379664077945425",
            "extra": "mean: 3.3058613569321276 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.85806698591719,
            "unit": "iter/sec",
            "range": "stddev: 0.0006479175889695645",
            "extra": "mean: 8.484781954887225 msec\nrounds: 133"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.53453613198425,
            "unit": "iter/sec",
            "range": "stddev: 0.0004480484637717898",
            "extra": "mean: 6.6429938650306095 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.39171992049242,
            "unit": "iter/sec",
            "range": "stddev: 0.00037388091085254144",
            "extra": "mean: 5.015253393665247 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 306.7487584772823,
            "unit": "iter/sec",
            "range": "stddev: 0.0005203594222643507",
            "extra": "mean: 3.2599968944097935 msec\nrounds: 322"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.215102192811072,
            "unit": "iter/sec",
            "range": "stddev: 0.0028662738561030542",
            "extra": "mean: 97.89427272727185 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 9.713127203113864,
            "unit": "iter/sec",
            "range": "stddev: 0.00547621831857624",
            "extra": "mean: 102.95345454545442 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 170.51735914081658,
            "unit": "iter/sec",
            "range": "stddev: 0.000421534964417127",
            "extra": "mean: 5.864505555555668 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 238.64336926559005,
            "unit": "iter/sec",
            "range": "stddev: 0.0004747380135859972",
            "extra": "mean: 4.190353174602911 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 315.52282131491177,
            "unit": "iter/sec",
            "range": "stddev: 0.00018677613565787484",
            "extra": "mean: 3.169342857142928 msec\nrounds: 385"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 319.16215000128096,
            "unit": "iter/sec",
            "range": "stddev: 0.000167702093094557",
            "extra": "mean: 3.1332036082473635 msec\nrounds: 388"
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
        "date": 1671419571777,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 141.42472597772897,
            "unit": "iter/sec",
            "range": "stddev: 0.000350881356420283",
            "extra": "mean: 7.070899328859058 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 177.66369330780688,
            "unit": "iter/sec",
            "range": "stddev: 0.00020676202615338437",
            "extra": "mean: 5.6286120218579185 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 229.08763938550894,
            "unit": "iter/sec",
            "range": "stddev: 0.00012751623382310646",
            "extra": "mean: 4.365141666666698 msec\nrounds: 240"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 344.1658570068263,
            "unit": "iter/sec",
            "range": "stddev: 0.00004329547848260308",
            "extra": "mean: 2.9055758426965803 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 132.27229836159194,
            "unit": "iter/sec",
            "range": "stddev: 0.00040557416856012914",
            "extra": "mean: 7.560161971831066 msec\nrounds: 142"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 167.5340141915708,
            "unit": "iter/sec",
            "range": "stddev: 0.00018053716636760915",
            "extra": "mean: 5.9689371428570075 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 232.7232219799789,
            "unit": "iter/sec",
            "range": "stddev: 0.00007743822144577265",
            "extra": "mean: 4.2969497907949625 msec\nrounds: 239"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 331.64793013788176,
            "unit": "iter/sec",
            "range": "stddev: 0.0002437499944519586",
            "extra": "mean: 3.015245714285787 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.845771324142126,
            "unit": "iter/sec",
            "range": "stddev: 0.003948917016861276",
            "extra": "mean: 92.2018333333335 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.763210270972746,
            "unit": "iter/sec",
            "range": "stddev: 0.007069795811096311",
            "extra": "mean: 92.9090833333337 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 186.48430936401599,
            "unit": "iter/sec",
            "range": "stddev: 0.0003289697670504609",
            "extra": "mean: 5.362381443298843 msec\nrounds: 194"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 255.85020444328143,
            "unit": "iter/sec",
            "range": "stddev: 0.0003555168766072423",
            "extra": "mean: 3.9085370370367896 msec\nrounds: 270"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 361.4411173693805,
            "unit": "iter/sec",
            "range": "stddev: 0.00007896982592878741",
            "extra": "mean: 2.7667023809525086 msec\nrounds: 420"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 352.7214825103346,
            "unit": "iter/sec",
            "range": "stddev: 0.0002142551370151614",
            "extra": "mean: 2.8350980861243698 msec\nrounds: 418"
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
        "date": 1671424073918,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 134.901246781183,
            "unit": "iter/sec",
            "range": "stddev: 0.00043593164875425835",
            "extra": "mean: 7.412829931972779 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 170.28433679007466,
            "unit": "iter/sec",
            "range": "stddev: 0.0003444702705735666",
            "extra": "mean: 5.872530726256949 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 221.44487148690848,
            "unit": "iter/sec",
            "range": "stddev: 0.0003608340352706978",
            "extra": "mean: 4.515796610169491 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 336.91418691847946,
            "unit": "iter/sec",
            "range": "stddev: 0.00013808528437938663",
            "extra": "mean: 2.968114845938388 msec\nrounds: 357"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 131.46058342206956,
            "unit": "iter/sec",
            "range": "stddev: 0.00036068432702506437",
            "extra": "mean: 7.606842857142837 msec\nrounds: 140"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 159.5970222406492,
            "unit": "iter/sec",
            "range": "stddev: 0.00027616201356207094",
            "extra": "mean: 6.2657810650887 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 210.97122823284172,
            "unit": "iter/sec",
            "range": "stddev: 0.0003081673577679253",
            "extra": "mean: 4.739982832617983 msec\nrounds: 233"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 326.47131833562383,
            "unit": "iter/sec",
            "range": "stddev: 0.00011171870052665177",
            "extra": "mean: 3.063056213017663 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.973003667726456,
            "unit": "iter/sec",
            "range": "stddev: 0.0024140768657260475",
            "extra": "mean: 91.13275000000017 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.392024971091214,
            "unit": "iter/sec",
            "range": "stddev: 0.004669982596812389",
            "extra": "mean: 96.22763636363695 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.7032647420957,
            "unit": "iter/sec",
            "range": "stddev: 0.00011080624603668816",
            "extra": "mean: 5.243748717948722 msec\nrounds: 195"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 256.332845351559,
            "unit": "iter/sec",
            "range": "stddev: 0.00015996279152239712",
            "extra": "mean: 3.901177777777584 msec\nrounds: 270"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 343.9948694634552,
            "unit": "iter/sec",
            "range": "stddev: 0.00016912538266302288",
            "extra": "mean: 2.907020100502506 msec\nrounds: 398"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 357.8306944451702,
            "unit": "iter/sec",
            "range": "stddev: 0.00013024585572630156",
            "extra": "mean: 2.794617721519215 msec\nrounds: 395"
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
        "date": 1671429652121,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 137.52936344211133,
            "unit": "iter/sec",
            "range": "stddev: 0.0005315469104357992",
            "extra": "mean: 7.271174496644265 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 171.28538631761413,
            "unit": "iter/sec",
            "range": "stddev: 0.00030244716154638094",
            "extra": "mean: 5.83820967741931 msec\nrounds: 186"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 231.05980709862175,
            "unit": "iter/sec",
            "range": "stddev: 0.0000820592455406212",
            "extra": "mean: 4.327883817427306 msec\nrounds: 241"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 331.0050457171393,
            "unit": "iter/sec",
            "range": "stddev: 0.00010752806621742712",
            "extra": "mean: 3.021101983002854 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 137.01391865679528,
            "unit": "iter/sec",
            "range": "stddev: 0.000323850383850713",
            "extra": "mean: 7.298528571428494 msec\nrounds: 140"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 162.3580079526972,
            "unit": "iter/sec",
            "range": "stddev: 0.0003004224291115367",
            "extra": "mean: 6.159228070175318 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 216.17626348747052,
            "unit": "iter/sec",
            "range": "stddev: 0.0003806006651607818",
            "extra": "mean: 4.625854771784227 msec\nrounds: 241"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 301.0284994124283,
            "unit": "iter/sec",
            "range": "stddev: 0.0003288627130842437",
            "extra": "mean: 3.3219446064139464 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.113794138180777,
            "unit": "iter/sec",
            "range": "stddev: 0.0017931054118985182",
            "extra": "mean: 89.97827272727318 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.104828657120931,
            "unit": "iter/sec",
            "range": "stddev: 0.0029683893844762",
            "extra": "mean: 90.05091666666587 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 191.91383650298164,
            "unit": "iter/sec",
            "range": "stddev: 0.00024076799353046715",
            "extra": "mean: 5.2106717171716985 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 252.6599216101826,
            "unit": "iter/sec",
            "range": "stddev: 0.00019723434716051625",
            "extra": "mean: 3.9578892988926597 msec\nrounds: 271"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 334.8207201660285,
            "unit": "iter/sec",
            "range": "stddev: 0.0004363615785668586",
            "extra": "mean: 2.986672985782144 msec\nrounds: 422"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 349.9670963950291,
            "unit": "iter/sec",
            "range": "stddev: 0.00010602953329217489",
            "extra": "mean: 2.857411483253384 msec\nrounds: 418"
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
        "date": 1671437894146,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 130.20624480472304,
            "unit": "iter/sec",
            "range": "stddev: 0.000766365433337497",
            "extra": "mean: 7.680123188405833 msec\nrounds: 138"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 157.73365495893725,
            "unit": "iter/sec",
            "range": "stddev: 0.00048438628317907655",
            "extra": "mean: 6.339801104972364 msec\nrounds: 181"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 216.32166258649485,
            "unit": "iter/sec",
            "range": "stddev: 0.0001375492165571696",
            "extra": "mean: 4.622745535714234 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 296.56683448156105,
            "unit": "iter/sec",
            "range": "stddev: 0.0002599981175493501",
            "extra": "mean: 3.3719212121211575 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.76321025563414,
            "unit": "iter/sec",
            "range": "stddev: 0.0005032971009859543",
            "extra": "mean: 8.420115942028941 msec\nrounds: 138"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.38166012210996,
            "unit": "iter/sec",
            "range": "stddev: 0.0005991886524805327",
            "extra": "mean: 6.694262195121971 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.48045226351505,
            "unit": "iter/sec",
            "range": "stddev: 0.0006046511910505218",
            "extra": "mean: 5.013022522522624 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 307.9888790039719,
            "unit": "iter/sec",
            "range": "stddev: 0.00017300796683477967",
            "extra": "mean: 3.2468704819277057 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.486897098752321,
            "unit": "iter/sec",
            "range": "stddev: 0.003221985613081507",
            "extra": "mean: 95.35709090909026 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 9.705868079605715,
            "unit": "iter/sec",
            "range": "stddev: 0.005723579935034418",
            "extra": "mean: 103.03045454545509 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 177.17998056736204,
            "unit": "iter/sec",
            "range": "stddev: 0.000352178363240954",
            "extra": "mean: 5.643978494623494 msec\nrounds: 186"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 241.596107493414,
            "unit": "iter/sec",
            "range": "stddev: 0.00023349540673818714",
            "extra": "mean: 4.139139534883692 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 327.9082911364281,
            "unit": "iter/sec",
            "range": "stddev: 0.0001483099114331011",
            "extra": "mean: 3.049633165829114 msec\nrounds: 398"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 336.1785588402754,
            "unit": "iter/sec",
            "range": "stddev: 0.00020538095900119577",
            "extra": "mean: 2.974609693877349 msec\nrounds: 392"
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
        "date": 1671466514176,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 138.62066739205179,
            "unit": "iter/sec",
            "range": "stddev: 0.00024882930466997127",
            "extra": "mean: 7.213931506849301 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 154.43458922973159,
            "unit": "iter/sec",
            "range": "stddev: 0.0011780188467728347",
            "extra": "mean: 6.47523333333334 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 217.26171729868707,
            "unit": "iter/sec",
            "range": "stddev: 0.0011767156024874413",
            "extra": "mean: 4.602743697479018 msec\nrounds: 238"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 320.0453590748402,
            "unit": "iter/sec",
            "range": "stddev: 0.00017539894334893098",
            "extra": "mean: 3.124557103064124 msec\nrounds: 359"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 130.03565462912573,
            "unit": "iter/sec",
            "range": "stddev: 0.00036269125365706367",
            "extra": "mean: 7.690198529411774 msec\nrounds: 136"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.60194413039108,
            "unit": "iter/sec",
            "range": "stddev: 0.001055108632063887",
            "extra": "mean: 7.2673391812865935 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.44789734226396,
            "unit": "iter/sec",
            "range": "stddev: 0.0003294708453768824",
            "extra": "mean: 4.891221739130489 msec\nrounds: 230"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 303.41097815442686,
            "unit": "iter/sec",
            "range": "stddev: 0.00021179665220698145",
            "extra": "mean: 3.2958596491226193 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.921118837641762,
            "unit": "iter/sec",
            "range": "stddev: 0.017227312804003286",
            "extra": "mean: 100.79508333333287 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.589865113999934,
            "unit": "iter/sec",
            "range": "stddev: 0.002430348306501313",
            "extra": "mean: 94.42990909090878 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 186.57455877050157,
            "unit": "iter/sec",
            "range": "stddev: 0.000701906296757751",
            "extra": "mean: 5.3597875647668705 msec\nrounds: 193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 247.43299934546678,
            "unit": "iter/sec",
            "range": "stddev: 0.0002010634063362902",
            "extra": "mean: 4.041498113207594 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 342.29241552069226,
            "unit": "iter/sec",
            "range": "stddev: 0.00022207059840450983",
            "extra": "mean: 2.921478696741816 msec\nrounds: 399"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 322.9971538919079,
            "unit": "iter/sec",
            "range": "stddev: 0.00024080087301981676",
            "extra": "mean: 3.096002512562861 msec\nrounds: 398"
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
        "date": 1671540578850,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 147.40131481972858,
            "unit": "iter/sec",
            "range": "stddev: 0.00023821240112962896",
            "extra": "mean: 6.7841999999999825 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 186.05732891447246,
            "unit": "iter/sec",
            "range": "stddev: 0.00009449383619329705",
            "extra": "mean: 5.374687499999979 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 232.3267096706229,
            "unit": "iter/sec",
            "range": "stddev: 0.0000715246322327347",
            "extra": "mean: 4.304283400809715 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 343.6214089427008,
            "unit": "iter/sec",
            "range": "stddev: 0.00019665321170823192",
            "extra": "mean: 2.910179558011041 msec\nrounds: 362"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 137.24367377652214,
            "unit": "iter/sec",
            "range": "stddev: 0.0005677485691214318",
            "extra": "mean: 7.28631034482747 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 171.78037546824655,
            "unit": "iter/sec",
            "range": "stddev: 0.00013904925043101336",
            "extra": "mean: 5.821386740331401 msec\nrounds: 181"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 232.5134125792645,
            "unit": "iter/sec",
            "range": "stddev: 0.00009502541505942804",
            "extra": "mean: 4.300827160493793 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 343.57439530905384,
            "unit": "iter/sec",
            "range": "stddev: 0.0000661799652887577",
            "extra": "mean: 2.910577777777866 msec\nrounds: 360"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.283359958928528,
            "unit": "iter/sec",
            "range": "stddev: 0.002228834936518268",
            "extra": "mean: 88.62608333333367 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.583380551697037,
            "unit": "iter/sec",
            "range": "stddev: 0.002858389930088595",
            "extra": "mean: 86.33058333333388 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 189.54873326083967,
            "unit": "iter/sec",
            "range": "stddev: 0.00012834664952842927",
            "extra": "mean: 5.275688118811595 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 264.4675559703092,
            "unit": "iter/sec",
            "range": "stddev: 0.00011064645026379628",
            "extra": "mean: 3.7811821428571233 msec\nrounds: 280"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 338.7300133610196,
            "unit": "iter/sec",
            "range": "stddev: 0.0002528512767483403",
            "extra": "mean: 2.952203703703683 msec\nrounds: 432"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 333.75603850475784,
            "unit": "iter/sec",
            "range": "stddev: 0.0002717673874984005",
            "extra": "mean: 2.996200471697966 msec\nrounds: 424"
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
        "date": 1671541555254,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 134.32264884263478,
            "unit": "iter/sec",
            "range": "stddev: 0.00013936516935171786",
            "extra": "mean: 7.44476086956524 msec\nrounds: 138"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 167.41549410930955,
            "unit": "iter/sec",
            "range": "stddev: 0.00008861466097396737",
            "extra": "mean: 5.973162790697714 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 208.24556928893503,
            "unit": "iter/sec",
            "range": "stddev: 0.00017801730466963293",
            "extra": "mean: 4.80202293577986 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 307.6079151421179,
            "unit": "iter/sec",
            "range": "stddev: 0.00013302810154053449",
            "extra": "mean: 3.2508916408668806 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 128.9366891772692,
            "unit": "iter/sec",
            "range": "stddev: 0.0001167388080506435",
            "extra": "mean: 7.755744360902159 msec\nrounds: 133"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 157.9928279058226,
            "unit": "iter/sec",
            "range": "stddev: 0.00010098492968403125",
            "extra": "mean: 6.329401234567981 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 210.83335267584104,
            "unit": "iter/sec",
            "range": "stddev: 0.0002046545759446155",
            "extra": "mean: 4.743082568807378 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 313.57520112230014,
            "unit": "iter/sec",
            "range": "stddev: 0.00006896408867710583",
            "extra": "mean: 3.18902769230779 msec\nrounds: 325"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.572063993664411,
            "unit": "iter/sec",
            "range": "stddev: 0.0018989172417216299",
            "extra": "mean: 94.58890909090943 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.925922247164236,
            "unit": "iter/sec",
            "range": "stddev: 0.0015693658186463012",
            "extra": "mean: 91.52545454545447 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 174.57270904839902,
            "unit": "iter/sec",
            "range": "stddev: 0.00018704096377325863",
            "extra": "mean: 5.728272222222072 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 241.07358101412748,
            "unit": "iter/sec",
            "range": "stddev: 0.00012210009754399926",
            "extra": "mean: 4.148111111110917 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 313.1023951106779,
            "unit": "iter/sec",
            "range": "stddev: 0.0008768576131981998",
            "extra": "mean: 3.193843342036755 msec\nrounds: 383"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 330.0963155375168,
            "unit": "iter/sec",
            "range": "stddev: 0.00012079777448688678",
            "extra": "mean: 3.029418848167501 msec\nrounds: 382"
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
        "date": 1671543909332,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.9464350005505,
            "unit": "iter/sec",
            "range": "stddev: 0.0006166004117516537",
            "extra": "mean: 8.003429629629643 msec\nrounds: 135"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 158.91760930819467,
            "unit": "iter/sec",
            "range": "stddev: 0.00039076068045038585",
            "extra": "mean: 6.292568862275444 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.18194127991106,
            "unit": "iter/sec",
            "range": "stddev: 0.000601920039263274",
            "extra": "mean: 5.17646728971964 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 292.8798483740537,
            "unit": "iter/sec",
            "range": "stddev: 0.0003736839618493494",
            "extra": "mean: 3.4143694267515547 msec\nrounds: 314"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.23437873745276,
            "unit": "iter/sec",
            "range": "stddev: 0.0007222061728152253",
            "extra": "mean: 8.45777692307722 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.40276086267045,
            "unit": "iter/sec",
            "range": "stddev: 0.0003789942418814064",
            "extra": "mean: 6.604899371069249 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 187.62731853757722,
            "unit": "iter/sec",
            "range": "stddev: 0.0005522010850766456",
            "extra": "mean: 5.3297142857143385 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 292.1354547051311,
            "unit": "iter/sec",
            "range": "stddev: 0.0003603283443922962",
            "extra": "mean: 3.4230696202532376 msec\nrounds: 316"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.942172708193596,
            "unit": "iter/sec",
            "range": "stddev: 0.007210571312631441",
            "extra": "mean: 100.58163636363656 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 9.151322948523005,
            "unit": "iter/sec",
            "range": "stddev: 0.012462212282080443",
            "extra": "mean: 109.27381818181784 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 165.0674597323386,
            "unit": "iter/sec",
            "range": "stddev: 0.0005249215493070261",
            "extra": "mean: 6.05812921348355 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 210.1168711035541,
            "unit": "iter/sec",
            "range": "stddev: 0.0005713094478187406",
            "extra": "mean: 4.759256097560865 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 265.2516038637962,
            "unit": "iter/sec",
            "range": "stddev: 0.0005500880748388687",
            "extra": "mean: 3.770005479452214 msec\nrounds: 365"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 283.0006241736184,
            "unit": "iter/sec",
            "range": "stddev: 0.0003820481625181181",
            "extra": "mean: 3.5335611111108673 msec\nrounds: 360"
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
        "date": 1671549076113,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 142.79913504523907,
            "unit": "iter/sec",
            "range": "stddev: 0.0003658542958101373",
            "extra": "mean: 7.00284353741497 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 175.2911188415676,
            "unit": "iter/sec",
            "range": "stddev: 0.0004551138895098993",
            "extra": "mean: 5.704795580110504 msec\nrounds: 181"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 224.9284122072667,
            "unit": "iter/sec",
            "range": "stddev: 0.00015932675343827376",
            "extra": "mean: 4.445858974359013 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 319.66364383390226,
            "unit": "iter/sec",
            "range": "stddev: 0.0002371700030596789",
            "extra": "mean: 3.1282881844380204 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 134.3134724033464,
            "unit": "iter/sec",
            "range": "stddev: 0.0002072911988838846",
            "extra": "mean: 7.445269503545983 msec\nrounds: 141"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 166.54659818890298,
            "unit": "iter/sec",
            "range": "stddev: 0.00027936494155464506",
            "extra": "mean: 6.004325581395334 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 217.79898567900122,
            "unit": "iter/sec",
            "range": "stddev: 0.00030803648100636715",
            "extra": "mean: 4.591389610389786 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 328.1292674900109,
            "unit": "iter/sec",
            "range": "stddev: 0.00008768680616860447",
            "extra": "mean: 3.047579411764733 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.800944002505776,
            "unit": "iter/sec",
            "range": "stddev: 0.006387615567359103",
            "extra": "mean: 92.58450000000036 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.39325234629775,
            "unit": "iter/sec",
            "range": "stddev: 0.001933909376695672",
            "extra": "mean: 87.77125000000119 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 191.37541129132683,
            "unit": "iter/sec",
            "range": "stddev: 0.0002450732734087723",
            "extra": "mean: 5.225331683168642 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 260.27525512592774,
            "unit": "iter/sec",
            "range": "stddev: 0.00040065269820337206",
            "extra": "mean: 3.8420863309352047 msec\nrounds: 278"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 353.5373374710215,
            "unit": "iter/sec",
            "range": "stddev: 0.00035465772090084025",
            "extra": "mean: 2.8285555555556203 msec\nrounds: 432"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 338.8014741001395,
            "unit": "iter/sec",
            "range": "stddev: 0.0002454570393245309",
            "extra": "mean: 2.951581018518326 msec\nrounds: 432"
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
        "date": 1671551383615,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 137.33748397729292,
            "unit": "iter/sec",
            "range": "stddev: 0.00046173489596870666",
            "extra": "mean: 7.281333333333365 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 175.16725103873267,
            "unit": "iter/sec",
            "range": "stddev: 0.00018891823072257735",
            "extra": "mean: 5.708829670329655 msec\nrounds: 182"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 223.2330770882462,
            "unit": "iter/sec",
            "range": "stddev: 0.0003027805569830272",
            "extra": "mean: 4.4796228813559305 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 307.3645422507688,
            "unit": "iter/sec",
            "range": "stddev: 0.0010524384988919238",
            "extra": "mean: 3.253465714285717 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 135.1625329458619,
            "unit": "iter/sec",
            "range": "stddev: 0.0002875926677666926",
            "extra": "mean: 7.398500000000301 msec\nrounds: 142"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 163.25349553105767,
            "unit": "iter/sec",
            "range": "stddev: 0.0002444923337499963",
            "extra": "mean: 6.125443113772458 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 209.49935241422796,
            "unit": "iter/sec",
            "range": "stddev: 0.00036173808966680595",
            "extra": "mean: 4.773284444444354 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 286.53858819443747,
            "unit": "iter/sec",
            "range": "stddev: 0.0006774992220446172",
            "extra": "mean: 3.489931343283602 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.14046003415658,
            "unit": "iter/sec",
            "range": "stddev: 0.0013019043701008278",
            "extra": "mean: 89.76290000000056 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.21437417806212,
            "unit": "iter/sec",
            "range": "stddev: 0.006228745169484642",
            "extra": "mean: 97.9012499999996 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 180.45490074980427,
            "unit": "iter/sec",
            "range": "stddev: 0.0007511122729647639",
            "extra": "mean: 5.541550802139047 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 242.77280417642535,
            "unit": "iter/sec",
            "range": "stddev: 0.00031698529130081327",
            "extra": "mean: 4.119077519380178 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 284.27755597107085,
            "unit": "iter/sec",
            "range": "stddev: 0.0002380738757130621",
            "extra": "mean: 3.5176888888891518 msec\nrounds: 405"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 277.14863867395445,
            "unit": "iter/sec",
            "range": "stddev: 0.0005741056746092061",
            "extra": "mean: 3.6081721518987084 msec\nrounds: 395"
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
        "date": 1671589168805,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 104.61873685501583,
            "unit": "iter/sec",
            "range": "stddev: 0.0007932690478701448",
            "extra": "mean: 9.558517241379368 msec\nrounds: 116"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 133.1034434125243,
            "unit": "iter/sec",
            "range": "stddev: 0.00041858352153826845",
            "extra": "mean: 7.512953642384171 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 172.9846136199028,
            "unit": "iter/sec",
            "range": "stddev: 0.0005086106438291363",
            "extra": "mean: 5.780860962566815 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 249.0110451020126,
            "unit": "iter/sec",
            "range": "stddev: 0.00026828193030491675",
            "extra": "mean: 4.015886120996477 msec\nrounds: 281"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 100.6504193314094,
            "unit": "iter/sec",
            "range": "stddev: 0.0004373471276614524",
            "extra": "mean: 9.935378378378358 msec\nrounds: 111"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 126.02003342352224,
            "unit": "iter/sec",
            "range": "stddev: 0.0004391986796987376",
            "extra": "mean: 7.93524626865672 msec\nrounds: 134"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 170.42039191132628,
            "unit": "iter/sec",
            "range": "stddev: 0.00038174706550064255",
            "extra": "mean: 5.86784239130446 msec\nrounds: 184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 255.64384736580269,
            "unit": "iter/sec",
            "range": "stddev: 0.00020504845389633983",
            "extra": "mean: 3.911692028985515 msec\nrounds: 276"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 8.53487006513818,
            "unit": "iter/sec",
            "range": "stddev: 0.0061978685440152595",
            "extra": "mean: 117.16639999999927 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 8.900970472810618,
            "unit": "iter/sec",
            "range": "stddev: 0.0029950966243001325",
            "extra": "mean: 112.34730000000042 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 140.53475322743677,
            "unit": "iter/sec",
            "range": "stddev: 0.00033723832832626083",
            "extra": "mean: 7.115677631579381 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 188.20341024578624,
            "unit": "iter/sec",
            "range": "stddev: 0.0003755769757400017",
            "extra": "mean: 5.313400000000209 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 271.0344538655889,
            "unit": "iter/sec",
            "range": "stddev: 0.00023820176661728745",
            "extra": "mean: 3.6895678233436664 msec\nrounds: 317"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 255.89020582296783,
            "unit": "iter/sec",
            "range": "stddev: 0.00027751620295081366",
            "extra": "mean: 3.907926045015684 msec\nrounds: 311"
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
        "date": 1672071732921,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 142.92480963972926,
            "unit": "iter/sec",
            "range": "stddev: 0.00032233534540385486",
            "extra": "mean: 6.99668589743587 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 174.2851359287901,
            "unit": "iter/sec",
            "range": "stddev: 0.00038151711735729245",
            "extra": "mean: 5.73772395833333 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 229.9404648121796,
            "unit": "iter/sec",
            "range": "stddev: 0.00022374862967393725",
            "extra": "mean: 4.348951807228979 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 312.32554022957027,
            "unit": "iter/sec",
            "range": "stddev: 0.0001984800813280469",
            "extra": "mean: 3.2017874659400727 msec\nrounds: 367"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 129.7951850655251,
            "unit": "iter/sec",
            "range": "stddev: 0.0006321144087036293",
            "extra": "mean: 7.704446043165357 msec\nrounds: 139"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 161.24842975892346,
            "unit": "iter/sec",
            "range": "stddev: 0.00029792215871633364",
            "extra": "mean: 6.201610778443318 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 206.55037148303634,
            "unit": "iter/sec",
            "range": "stddev: 0.00029678345243549023",
            "extra": "mean: 4.841434042553288 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 326.1868473899344,
            "unit": "iter/sec",
            "range": "stddev: 0.00014872688787033627",
            "extra": "mean: 3.0657275362319174 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.935676351699307,
            "unit": "iter/sec",
            "range": "stddev: 0.003026685640042515",
            "extra": "mean: 91.44381818181816 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.3787464031156,
            "unit": "iter/sec",
            "range": "stddev: 0.0058917480833154765",
            "extra": "mean: 96.35075000000093 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 183.08565912224583,
            "unit": "iter/sec",
            "range": "stddev: 0.0003188632558910588",
            "extra": "mean: 5.461924242424157 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 246.36955608766982,
            "unit": "iter/sec",
            "range": "stddev: 0.0002260457846240149",
            "extra": "mean: 4.058943060497918 msec\nrounds: 281"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 316.4269073620452,
            "unit": "iter/sec",
            "range": "stddev: 0.00027165247562380596",
            "extra": "mean: 3.160287500000223 msec\nrounds: 400"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 331.62696187494345,
            "unit": "iter/sec",
            "range": "stddev: 0.00022212459371392677",
            "extra": "mean: 3.015436363636501 msec\nrounds: 385"
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
        "date": 1672074531094,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 141.65953678269688,
            "unit": "iter/sec",
            "range": "stddev: 0.0005522119168832617",
            "extra": "mean: 7.059178807946983 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 177.94051458113202,
            "unit": "iter/sec",
            "range": "stddev: 0.0002570113915469918",
            "extra": "mean: 5.619855614973226 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 227.71284093410927,
            "unit": "iter/sec",
            "range": "stddev: 0.00012598676897975097",
            "extra": "mean: 4.391495867768646 msec\nrounds: 242"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 336.22093516198765,
            "unit": "iter/sec",
            "range": "stddev: 0.0003201947716779463",
            "extra": "mean: 2.9742347826086757 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 133.32098879733294,
            "unit": "iter/sec",
            "range": "stddev: 0.0007620727098340978",
            "extra": "mean: 7.50069444444448 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 166.65968190416717,
            "unit": "iter/sec",
            "range": "stddev: 0.00038645124635168444",
            "extra": "mean: 6.0002514619883955 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 224.35924402152872,
            "unit": "iter/sec",
            "range": "stddev: 0.0002594624025494949",
            "extra": "mean: 4.457137499999971 msec\nrounds: 240"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 333.2946362032914,
            "unit": "iter/sec",
            "range": "stddev: 0.0001145909419151032",
            "extra": "mean: 3.0003483146067045 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.296541752018276,
            "unit": "iter/sec",
            "range": "stddev: 0.003380683022255684",
            "extra": "mean: 88.52266666666696 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.834097783177826,
            "unit": "iter/sec",
            "range": "stddev: 0.0018950024446318004",
            "extra": "mean: 84.50158333333195 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 179.24230692018335,
            "unit": "iter/sec",
            "range": "stddev: 0.002755615375718283",
            "extra": "mean: 5.579040000000113 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 261.01676508778405,
            "unit": "iter/sec",
            "range": "stddev: 0.00007597355762169366",
            "extra": "mean: 3.8311715328464984 msec\nrounds: 274"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 346.15946684913257,
            "unit": "iter/sec",
            "range": "stddev: 0.0002964343676246199",
            "extra": "mean: 2.88884198113187 msec\nrounds: 424"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 343.4784271943704,
            "unit": "iter/sec",
            "range": "stddev: 0.00021001177710321776",
            "extra": "mean: 2.911390995260706 msec\nrounds: 422"
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
        "date": 1672209668201,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 138.9366020865235,
            "unit": "iter/sec",
            "range": "stddev: 0.0003084020930025489",
            "extra": "mean: 7.197527397260261 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 168.6677509144808,
            "unit": "iter/sec",
            "range": "stddev: 0.0002959082847984809",
            "extra": "mean: 5.9288156424580984 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 220.55642964772832,
            "unit": "iter/sec",
            "range": "stddev: 0.00020903001049275388",
            "extra": "mean: 4.533987068965504 msec\nrounds: 232"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 322.9185760810461,
            "unit": "iter/sec",
            "range": "stddev: 0.00017007855844281827",
            "extra": "mean: 3.0967558823528933 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 134.50745944027483,
            "unit": "iter/sec",
            "range": "stddev: 0.0003913102268240424",
            "extra": "mean: 7.434531914893752 msec\nrounds: 141"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 159.9594138481318,
            "unit": "iter/sec",
            "range": "stddev: 0.00034769794812513434",
            "extra": "mean: 6.25158579881655 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 215.23304851766582,
            "unit": "iter/sec",
            "range": "stddev: 0.0002611799249384457",
            "extra": "mean: 4.646126637554559 msec\nrounds: 229"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 319.1548321379365,
            "unit": "iter/sec",
            "range": "stddev: 0.00020543352430645525",
            "extra": "mean: 3.1332754491017916 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.097321661416988,
            "unit": "iter/sec",
            "range": "stddev: 0.0012973684437300504",
            "extra": "mean: 90.11183333333358 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.075454301291028,
            "unit": "iter/sec",
            "range": "stddev: 0.0015454966324496167",
            "extra": "mean: 90.28975000000077 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 179.47383158776648,
            "unit": "iter/sec",
            "range": "stddev: 0.0002655451323319428",
            "extra": "mean: 5.571842931937289 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 246.68797671264096,
            "unit": "iter/sec",
            "range": "stddev: 0.00015975386710394905",
            "extra": "mean: 4.053703846154077 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 339.3795267478223,
            "unit": "iter/sec",
            "range": "stddev: 0.00019400177292746573",
            "extra": "mean: 2.9465536992838555 msec\nrounds: 419"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 351.91081398113755,
            "unit": "iter/sec",
            "range": "stddev: 0.00014453513337880236",
            "extra": "mean: 2.841629072682035 msec\nrounds: 399"
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
        "date": 1672216623086,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 139.3729517983302,
            "unit": "iter/sec",
            "range": "stddev: 0.0009292049968278455",
            "extra": "mean: 7.174993333333282 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 178.56934895944656,
            "unit": "iter/sec",
            "range": "stddev: 0.00008441457729597718",
            "extra": "mean: 5.600065217391266 msec\nrounds: 184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 224.72999763147456,
            "unit": "iter/sec",
            "range": "stddev: 0.0003887217555661121",
            "extra": "mean: 4.449784232365181 msec\nrounds: 241"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 335.9665234048577,
            "unit": "iter/sec",
            "range": "stddev: 0.00018203811367767422",
            "extra": "mean: 2.976487031700317 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 136.0376197082796,
            "unit": "iter/sec",
            "range": "stddev: 0.00020485189425916095",
            "extra": "mean: 7.350907801418533 msec\nrounds: 141"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 163.80141173961283,
            "unit": "iter/sec",
            "range": "stddev: 0.00019077698360407815",
            "extra": "mean: 6.104953488371954 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 220.30994030918575,
            "unit": "iter/sec",
            "range": "stddev: 0.0004912239909457171",
            "extra": "mean: 4.539059829059857 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 331.07724620949443,
            "unit": "iter/sec",
            "range": "stddev: 0.00009039731406450031",
            "extra": "mean: 3.0204431486881282 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.94388250647739,
            "unit": "iter/sec",
            "range": "stddev: 0.0023187136373038057",
            "extra": "mean: 91.37525000000016 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.532462440211418,
            "unit": "iter/sec",
            "range": "stddev: 0.0018777771251733257",
            "extra": "mean: 86.7117499999998 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 187.57668153882597,
            "unit": "iter/sec",
            "range": "stddev: 0.0005202722827969091",
            "extra": "mean: 5.331153061224259 msec\nrounds: 196"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 256.7296353853759,
            "unit": "iter/sec",
            "range": "stddev: 0.000046914784561124785",
            "extra": "mean: 3.895148288972964 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 349.2073667571253,
            "unit": "iter/sec",
            "range": "stddev: 0.00027268549993823826",
            "extra": "mean: 2.8636280193238384 msec\nrounds: 414"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 339.5012161299772,
            "unit": "iter/sec",
            "range": "stddev: 0.00020967035082141404",
            "extra": "mean: 2.9454975490195374 msec\nrounds: 408"
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
        "date": 1672330842427,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 134.09981309838565,
            "unit": "iter/sec",
            "range": "stddev: 0.0006146818296482839",
            "extra": "mean: 7.457131944444436 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 164.00632437870968,
            "unit": "iter/sec",
            "range": "stddev: 0.00048451884864844115",
            "extra": "mean: 6.097325842696674 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 208.19698693699422,
            "unit": "iter/sec",
            "range": "stddev: 0.000376055163339422",
            "extra": "mean: 4.803143478260931 msec\nrounds: 230"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 291.69845960140907,
            "unit": "iter/sec",
            "range": "stddev: 0.0005452046531006226",
            "extra": "mean: 3.428197740113021 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.31043606231599,
            "unit": "iter/sec",
            "range": "stddev: 0.000578445543115824",
            "extra": "mean: 8.243313868613164 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.01446885113828,
            "unit": "iter/sec",
            "range": "stddev: 0.0006406157190053007",
            "extra": "mean: 6.666023668639028 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 188.49763375311133,
            "unit": "iter/sec",
            "range": "stddev: 0.0007133388878901658",
            "extra": "mean: 5.305106382978635 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 306.3396032043641,
            "unit": "iter/sec",
            "range": "stddev: 0.0002473388616984936",
            "extra": "mean: 3.264351032448403 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.497567785348073,
            "unit": "iter/sec",
            "range": "stddev: 0.001804629675349265",
            "extra": "mean: 86.97491666666667 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.311182895229257,
            "unit": "iter/sec",
            "range": "stddev: 0.0017523478514333334",
            "extra": "mean: 88.4080833333331 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 188.11258213709613,
            "unit": "iter/sec",
            "range": "stddev: 0.0002455981862760021",
            "extra": "mean: 5.315965517241169 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 251.1689943905332,
            "unit": "iter/sec",
            "range": "stddev: 0.00017874108569295658",
            "extra": "mean: 3.9813831417628633 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 346.83256679566784,
            "unit": "iter/sec",
            "range": "stddev: 0.00015404291850090976",
            "extra": "mean: 2.883235588972641 msec\nrounds: 399"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 340.28585709182846,
            "unit": "iter/sec",
            "range": "stddev: 0.0001797950727691114",
            "extra": "mean: 2.9387057356607773 msec\nrounds: 401"
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
        "date": 1672339067520,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 129.23748000120796,
            "unit": "iter/sec",
            "range": "stddev: 0.0005032537011062002",
            "extra": "mean: 7.737693430656907 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 156.11626804979588,
            "unit": "iter/sec",
            "range": "stddev: 0.000813300283879021",
            "extra": "mean: 6.405482352941164 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.66046455121656,
            "unit": "iter/sec",
            "range": "stddev: 0.0002698809847433506",
            "extra": "mean: 4.886141552511471 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 309.35822831393523,
            "unit": "iter/sec",
            "range": "stddev: 0.00017506012770061155",
            "extra": "mean: 3.2324984709480713 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 126.93453107454978,
            "unit": "iter/sec",
            "range": "stddev: 0.00016452782405932052",
            "extra": "mean: 7.878076923076913 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 152.67524512604865,
            "unit": "iter/sec",
            "range": "stddev: 0.0006148850772119367",
            "extra": "mean: 6.549850299401192 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 209.25848244205307,
            "unit": "iter/sec",
            "range": "stddev: 0.00024338961851414818",
            "extra": "mean: 4.778778801843388 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 304.6394687087786,
            "unit": "iter/sec",
            "range": "stddev: 0.00031252901301054585",
            "extra": "mean: 3.28256874999987 msec\nrounds: 320"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.524674141736792,
            "unit": "iter/sec",
            "range": "stddev: 0.0040020261572898536",
            "extra": "mean: 95.01481818181774 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.383980727331734,
            "unit": "iter/sec",
            "range": "stddev: 0.004786636685986967",
            "extra": "mean: 96.30218181818216 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 170.74622632177847,
            "unit": "iter/sec",
            "range": "stddev: 0.000349947405094943",
            "extra": "mean: 5.856644808743578 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 242.6779092052477,
            "unit": "iter/sec",
            "range": "stddev: 0.0002759990902842205",
            "extra": "mean: 4.120688212927688 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 316.90957622326636,
            "unit": "iter/sec",
            "range": "stddev: 0.00037903125784627135",
            "extra": "mean: 3.1554742268043325 msec\nrounds: 388"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 321.20524931564603,
            "unit": "iter/sec",
            "range": "stddev: 0.00016756719535275657",
            "extra": "mean: 3.113274151436135 msec\nrounds: 383"
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
        "date": 1672353274804,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.70521625892188,
            "unit": "iter/sec",
            "range": "stddev: 0.0014011420551881479",
            "extra": "mean: 8.424229629629608 msec\nrounds: 135"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.4181936170022,
            "unit": "iter/sec",
            "range": "stddev: 0.0004704304017628312",
            "extra": "mean: 6.6042261904761865 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.08808316764362,
            "unit": "iter/sec",
            "range": "stddev: 0.00037327585336388634",
            "extra": "mean: 5.048259259259385 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 282.2374439727714,
            "unit": "iter/sec",
            "range": "stddev: 0.0005015087824073303",
            "extra": "mean: 3.5431159874608062 msec\nrounds: 319"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.21240537792495,
            "unit": "iter/sec",
            "range": "stddev: 0.000568893754188282",
            "extra": "mean: 8.318609022556283 msec\nrounds: 133"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.85918879596483,
            "unit": "iter/sec",
            "range": "stddev: 0.0007598457783516529",
            "extra": "mean: 7.049243749999823 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 179.88710823067487,
            "unit": "iter/sec",
            "range": "stddev: 0.001718802318874467",
            "extra": "mean: 5.559042056074795 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 288.4249485719587,
            "unit": "iter/sec",
            "range": "stddev: 0.00020546061195523497",
            "extra": "mean: 3.4671064516130503 msec\nrounds: 310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.654186417268212,
            "unit": "iter/sec",
            "range": "stddev: 0.001985379652267912",
            "extra": "mean: 93.85981818181901 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 9.150203924772,
            "unit": "iter/sec",
            "range": "stddev: 0.016026959311224238",
            "extra": "mean: 109.28718181818198 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 169.48905428752374,
            "unit": "iter/sec",
            "range": "stddev: 0.00034748377853334233",
            "extra": "mean: 5.900086021505467 msec\nrounds: 186"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 235.2914279617679,
            "unit": "iter/sec",
            "range": "stddev: 0.00029207798697529475",
            "extra": "mean: 4.250048582995928 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 291.19828474327517,
            "unit": "iter/sec",
            "range": "stddev: 0.0008486485871629991",
            "extra": "mean: 3.4340861618797485 msec\nrounds: 383"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 293.93313947166195,
            "unit": "iter/sec",
            "range": "stddev: 0.0006104057298269291",
            "extra": "mean: 3.4021342465755207 msec\nrounds: 365"
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
        "date": 1672682916395,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 128.6910729132139,
            "unit": "iter/sec",
            "range": "stddev: 0.0006229849164552038",
            "extra": "mean: 7.77054676258994 msec\nrounds: 139"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 163.0771992021762,
            "unit": "iter/sec",
            "range": "stddev: 0.00098519683881675",
            "extra": "mean: 6.132065088757395 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.10511301930367,
            "unit": "iter/sec",
            "range": "stddev: 0.0006513726946845814",
            "extra": "mean: 5.022472727272693 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 310.1887952171784,
            "unit": "iter/sec",
            "range": "stddev: 0.0002598205042619711",
            "extra": "mean: 3.2238430769230426 msec\nrounds: 325"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.21211693870374,
            "unit": "iter/sec",
            "range": "stddev: 0.0005414561827053817",
            "extra": "mean: 8.05074436090225 msec\nrounds: 133"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 152.19684877363798,
            "unit": "iter/sec",
            "range": "stddev: 0.00035927673967162333",
            "extra": "mean: 6.570438271605068 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 195.07293857340588,
            "unit": "iter/sec",
            "range": "stddev: 0.00042314306078812026",
            "extra": "mean: 5.12628767123278 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 297.296302483413,
            "unit": "iter/sec",
            "range": "stddev: 0.0002900190850611406",
            "extra": "mean: 3.3636476190476436 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.737521292016652,
            "unit": "iter/sec",
            "range": "stddev: 0.001838876138989619",
            "extra": "mean: 93.13136363636363 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.204524175793313,
            "unit": "iter/sec",
            "range": "stddev: 0.006311921276803978",
            "extra": "mean: 97.99575000000023 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 175.62794070573824,
            "unit": "iter/sec",
            "range": "stddev: 0.00014465607078282533",
            "extra": "mean: 5.693854838709769 msec\nrounds: 186"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 246.24781086646408,
            "unit": "iter/sec",
            "range": "stddev: 0.0001392342060613507",
            "extra": "mean: 4.060949806949889 msec\nrounds: 259"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 277.4366832161261,
            "unit": "iter/sec",
            "range": "stddev: 0.0006344033785272101",
            "extra": "mean: 3.6044260204083742 msec\nrounds: 392"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 284.1181582748797,
            "unit": "iter/sec",
            "range": "stddev: 0.00039421257260947607",
            "extra": "mean: 3.51966240409216 msec\nrounds: 391"
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
        "date": 1672686162499,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.43820689979455,
            "unit": "iter/sec",
            "range": "stddev: 0.0007524211002855925",
            "extra": "mean: 8.443221374045766 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.83135397149627,
            "unit": "iter/sec",
            "range": "stddev: 0.0006433975028629936",
            "extra": "mean: 6.904582278480986 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 181.15141224427495,
            "unit": "iter/sec",
            "range": "stddev: 0.0007874383142965694",
            "extra": "mean: 5.520244019138767 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 285.5549444126085,
            "unit": "iter/sec",
            "range": "stddev: 0.00026224355337578134",
            "extra": "mean: 3.501953020134242 msec\nrounds: 298"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 103.54578572760924,
            "unit": "iter/sec",
            "range": "stddev: 0.0010075219381912768",
            "extra": "mean: 9.657563492063607 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 122.5435856091911,
            "unit": "iter/sec",
            "range": "stddev: 0.002993954541297575",
            "extra": "mean: 8.16036184210524 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 170.55684710125095,
            "unit": "iter/sec",
            "range": "stddev: 0.0017685264599204187",
            "extra": "mean: 5.863147783251122 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 254.58160292890398,
            "unit": "iter/sec",
            "range": "stddev: 0.0004840469611155766",
            "extra": "mean: 3.928013605442127 msec\nrounds: 294"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.234765040498926,
            "unit": "iter/sec",
            "range": "stddev: 0.00550338037129109",
            "extra": "mean: 97.70620000000036 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 8.942914934993034,
            "unit": "iter/sec",
            "range": "stddev: 0.016823564754668095",
            "extra": "mean: 111.82036363636496 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 141.72427948678944,
            "unit": "iter/sec",
            "range": "stddev: 0.0007151275872749723",
            "extra": "mean: 7.055954022988793 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 194.37548742628292,
            "unit": "iter/sec",
            "range": "stddev: 0.0021042242497676445",
            "extra": "mean: 5.144681632653145 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 274.5544226998671,
            "unit": "iter/sec",
            "range": "stddev: 0.0003793420361235011",
            "extra": "mean: 3.6422651296831 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 270.76956014900793,
            "unit": "iter/sec",
            "range": "stddev: 0.0006567946730270481",
            "extra": "mean: 3.693177325581529 msec\nrounds: 344"
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
        "date": 1672765136913,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 136.17716649360915,
            "unit": "iter/sec",
            "range": "stddev: 0.0004015476680548575",
            "extra": "mean: 7.3433749999999485 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 170.7128780104757,
            "unit": "iter/sec",
            "range": "stddev: 0.0004241490065580265",
            "extra": "mean: 5.857788888888837 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 220.08705878525538,
            "unit": "iter/sec",
            "range": "stddev: 0.00014100552600302936",
            "extra": "mean: 4.54365652173909 msec\nrounds: 230"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 328.100692971297,
            "unit": "iter/sec",
            "range": "stddev: 0.000178452357405655",
            "extra": "mean: 3.047844827586153 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 130.3109932791423,
            "unit": "iter/sec",
            "range": "stddev: 0.0003384927016048498",
            "extra": "mean: 7.673949640287646 msec\nrounds: 139"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 162.59114484369545,
            "unit": "iter/sec",
            "range": "stddev: 0.0002884019025047359",
            "extra": "mean: 6.150396449704164 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 217.54177790962328,
            "unit": "iter/sec",
            "range": "stddev: 0.00013430546564735011",
            "extra": "mean: 4.596818181818139 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.5234044232559,
            "unit": "iter/sec",
            "range": "stddev: 0.00018203505002790287",
            "extra": "mean: 3.1394867256636307 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.32204713934328,
            "unit": "iter/sec",
            "range": "stddev: 0.00123546304348589",
            "extra": "mean: 88.32324999999989 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.540259155753073,
            "unit": "iter/sec",
            "range": "stddev: 0.0019105107281622727",
            "extra": "mean: 86.65316666666693 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 178.95092108728585,
            "unit": "iter/sec",
            "range": "stddev: 0.000248077787443361",
            "extra": "mean: 5.588124352331419 msec\nrounds: 193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 252.66173438035048,
            "unit": "iter/sec",
            "range": "stddev: 0.0002615999960574499",
            "extra": "mean: 3.9578609022552884 msec\nrounds: 266"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 349.81871504960856,
            "unit": "iter/sec",
            "range": "stddev: 0.00008256873432877984",
            "extra": "mean: 2.8586235011988648 msec\nrounds: 417"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 345.9842371927389,
            "unit": "iter/sec",
            "range": "stddev: 0.00014056739702059402",
            "extra": "mean: 2.8903050847455973 msec\nrounds: 413"
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
        "date": 1672779639396,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 142.41820335587363,
            "unit": "iter/sec",
            "range": "stddev: 0.0005565283435363845",
            "extra": "mean: 7.021574324324306 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 177.61902670628928,
            "unit": "iter/sec",
            "range": "stddev: 0.00012759052387433857",
            "extra": "mean: 5.630027472527476 msec\nrounds: 182"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 231.56319274811378,
            "unit": "iter/sec",
            "range": "stddev: 0.00010102909974126144",
            "extra": "mean: 4.318475609756186 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 340.45041219478856,
            "unit": "iter/sec",
            "range": "stddev: 0.000049300033459186775",
            "extra": "mean: 2.9372853260869327 msec\nrounds: 368"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 135.03210457179748,
            "unit": "iter/sec",
            "range": "stddev: 0.00020500427000966443",
            "extra": "mean: 7.405646258503609 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 164.86656459759269,
            "unit": "iter/sec",
            "range": "stddev: 0.00018388516555275554",
            "extra": "mean: 6.065511235955005 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 226.86067080955482,
            "unit": "iter/sec",
            "range": "stddev: 0.0001533427001001493",
            "extra": "mean: 4.4079919028339685 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 219.80339666126878,
            "unit": "iter/sec",
            "range": "stddev: 0.027207560958512646",
            "extra": "mean: 4.549520231214008 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.159769773949527,
            "unit": "iter/sec",
            "range": "stddev: 0.0016403014943678048",
            "extra": "mean: 89.60758333333362 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.558811715626224,
            "unit": "iter/sec",
            "range": "stddev: 0.000870985383273876",
            "extra": "mean: 86.51408333333362 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 185.44459628710007,
            "unit": "iter/sec",
            "range": "stddev: 0.000203910964305544",
            "extra": "mean: 5.392446153846555 msec\nrounds: 195"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 257.7354159121297,
            "unit": "iter/sec",
            "range": "stddev: 0.0000915265085034509",
            "extra": "mean: 3.879947955390547 msec\nrounds: 269"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 364.5490475828396,
            "unit": "iter/sec",
            "range": "stddev: 0.00006362243033230993",
            "extra": "mean: 2.7431151079135967 msec\nrounds: 417"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 353.70353166586915,
            "unit": "iter/sec",
            "range": "stddev: 0.00009632526805948334",
            "extra": "mean: 2.8272265060238744 msec\nrounds: 415"
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
        "date": 1672782299846,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 125.03705568372058,
            "unit": "iter/sec",
            "range": "stddev: 0.0010893310645584352",
            "extra": "mean: 7.997629139072865 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 158.26593292821693,
            "unit": "iter/sec",
            "range": "stddev: 0.0007182063533942821",
            "extra": "mean: 6.31847916666665 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 220.05486347761186,
            "unit": "iter/sec",
            "range": "stddev: 0.0003810211253625386",
            "extra": "mean: 4.544321285140507 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 328.31895442232087,
            "unit": "iter/sec",
            "range": "stddev: 0.00023982448834953293",
            "extra": "mean: 3.0458186666667046 msec\nrounds: 375"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 127.16977714182939,
            "unit": "iter/sec",
            "range": "stddev: 0.0006540941559456418",
            "extra": "mean: 7.863503597122168 msec\nrounds: 139"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 157.96301938973915,
            "unit": "iter/sec",
            "range": "stddev: 0.0006105989136801143",
            "extra": "mean: 6.330595628415528 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 217.9960688939412,
            "unit": "iter/sec",
            "range": "stddev: 0.0003962796311959093",
            "extra": "mean: 4.587238683127433 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 335.7756793361053,
            "unit": "iter/sec",
            "range": "stddev: 0.00016405955192823771",
            "extra": "mean: 2.978178770949692 msec\nrounds: 358"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.649967517599057,
            "unit": "iter/sec",
            "range": "stddev: 0.006106413126601237",
            "extra": "mean: 93.89700000000012 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.646991027248294,
            "unit": "iter/sec",
            "range": "stddev: 0.006647822543373404",
            "extra": "mean: 93.92325000000017 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 174.83158360755777,
            "unit": "iter/sec",
            "range": "stddev: 0.0005444276281414544",
            "extra": "mean: 5.719790322580885 msec\nrounds: 186"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 244.4629605957467,
            "unit": "iter/sec",
            "range": "stddev: 0.00028231172765293117",
            "extra": "mean: 4.090599236641163 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 334.6938243696183,
            "unit": "iter/sec",
            "range": "stddev: 0.0001824322823125589",
            "extra": "mean: 2.9878053527980617 msec\nrounds: 411"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 322.1159584748301,
            "unit": "iter/sec",
            "range": "stddev: 0.00018627318711063207",
            "extra": "mean: 3.1044720812183515 msec\nrounds: 394"
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
        "date": 1672840801772,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.1411699632804,
            "unit": "iter/sec",
            "range": "stddev: 0.0005456096625129607",
            "extra": "mean: 8.997565891472862 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.33647055007273,
            "unit": "iter/sec",
            "range": "stddev: 0.0003463857341460663",
            "extra": "mean: 7.228751724137972 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 176.41244295764295,
            "unit": "iter/sec",
            "range": "stddev: 0.0003677484760404446",
            "extra": "mean: 5.668534391534402 msec\nrounds: 189"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 263.06289699455954,
            "unit": "iter/sec",
            "range": "stddev: 0.00012304926243606352",
            "extra": "mean: 3.8013722627736484 msec\nrounds: 274"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.0285860209398,
            "unit": "iter/sec",
            "range": "stddev: 0.00028627441905576333",
            "extra": "mean: 9.343298245614056 msec\nrounds: 114"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 127.53417232599352,
            "unit": "iter/sec",
            "range": "stddev: 0.0006115950535335449",
            "extra": "mean: 7.84103571428584 msec\nrounds: 140"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 173.95555301808386,
            "unit": "iter/sec",
            "range": "stddev: 0.0002287978556204324",
            "extra": "mean: 5.748594871794884 msec\nrounds: 195"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 251.84613002380397,
            "unit": "iter/sec",
            "range": "stddev: 0.00028101477547862484",
            "extra": "mean: 3.9706784452295616 msec\nrounds: 283"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 8.885950601223373,
            "unit": "iter/sec",
            "range": "stddev: 0.0021469225416866694",
            "extra": "mean: 112.53720000000058 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 9.085631165168648,
            "unit": "iter/sec",
            "range": "stddev: 0.002980166902484805",
            "extra": "mean: 110.06389999999939 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 146.8252126360695,
            "unit": "iter/sec",
            "range": "stddev: 0.00027891365025445476",
            "extra": "mean: 6.810819354838361 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 191.90852119096934,
            "unit": "iter/sec",
            "range": "stddev: 0.00032906259092490577",
            "extra": "mean: 5.210816037735468 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 275.295054134648,
            "unit": "iter/sec",
            "range": "stddev: 0.00031784669289269775",
            "extra": "mean: 3.632466275659626 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 274.8206312134079,
            "unit": "iter/sec",
            "range": "stddev: 0.00011963704545385599",
            "extra": "mean: 3.638737003058059 msec\nrounds: 327"
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
        "date": 1672843008099,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 135.83444799332906,
            "unit": "iter/sec",
            "range": "stddev: 0.0005707694146916706",
            "extra": "mean: 7.361902777777774 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 166.89382770994007,
            "unit": "iter/sec",
            "range": "stddev: 0.0005814589481467602",
            "extra": "mean: 5.991833333333278 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.1137353231355,
            "unit": "iter/sec",
            "range": "stddev: 0.00124431586137844",
            "extra": "mean: 5.260009216589766 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 315.9120974588868,
            "unit": "iter/sec",
            "range": "stddev: 0.0006449974307191079",
            "extra": "mean: 3.1654374999999524 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 125.35047439624059,
            "unit": "iter/sec",
            "range": "stddev: 0.0016465157277146603",
            "extra": "mean: 7.977632352941388 msec\nrounds: 136"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 160.78837680803724,
            "unit": "iter/sec",
            "range": "stddev: 0.00025414350438852386",
            "extra": "mean: 6.219355029585779 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 218.1488511771588,
            "unit": "iter/sec",
            "range": "stddev: 0.0005355518074407112",
            "extra": "mean: 4.58402597402587 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 329.4732439076227,
            "unit": "iter/sec",
            "range": "stddev: 0.00032053866118846535",
            "extra": "mean: 3.035147826086839 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.716419429940043,
            "unit": "iter/sec",
            "range": "stddev: 0.0034850936631469604",
            "extra": "mean: 93.31475000000023 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.813869869494718,
            "unit": "iter/sec",
            "range": "stddev: 0.0030608582228864446",
            "extra": "mean: 92.47383333333244 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 178.63961678493172,
            "unit": "iter/sec",
            "range": "stddev: 0.0006562778440831962",
            "extra": "mean: 5.597862433862712 msec\nrounds: 189"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 250.56835649325157,
            "unit": "iter/sec",
            "range": "stddev: 0.0005322690686434702",
            "extra": "mean: 3.9909269230767066 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 342.76817252275816,
            "unit": "iter/sec",
            "range": "stddev: 0.0002518477293048271",
            "extra": "mean: 2.917423728813692 msec\nrounds: 413"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 356.49636754430196,
            "unit": "iter/sec",
            "range": "stddev: 0.000111723105698422",
            "extra": "mean: 2.8050776699028486 msec\nrounds: 412"
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
        "date": 1672843784500,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 136.4922985397212,
            "unit": "iter/sec",
            "range": "stddev: 0.001189189182623564",
            "extra": "mean: 7.326420689655144 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.9219370296024,
            "unit": "iter/sec",
            "range": "stddev: 0.001878497482833157",
            "extra": "mean: 6.582327868852458 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.43414367732728,
            "unit": "iter/sec",
            "range": "stddev: 0.0007163625538570355",
            "extra": "mean: 4.96440167364018 msec\nrounds: 239"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 331.5712331812403,
            "unit": "iter/sec",
            "range": "stddev: 0.00015500667078404434",
            "extra": "mean: 3.0159431818181575 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 123.17546344768296,
            "unit": "iter/sec",
            "range": "stddev: 0.0006342280018047421",
            "extra": "mean: 8.118499999999885 msec\nrounds: 140"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 157.83351097722758,
            "unit": "iter/sec",
            "range": "stddev: 0.00018046542423088148",
            "extra": "mean: 6.335790123456618 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 217.4391984443994,
            "unit": "iter/sec",
            "range": "stddev: 0.0001951109164966371",
            "extra": "mean: 4.598986784140976 msec\nrounds: 227"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 317.45096380583703,
            "unit": "iter/sec",
            "range": "stddev: 0.000148146730716879",
            "extra": "mean: 3.150092814371266 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.639071280004421,
            "unit": "iter/sec",
            "range": "stddev: 0.002023072947650568",
            "extra": "mean: 93.99316666666647 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.650685904172216,
            "unit": "iter/sec",
            "range": "stddev: 0.002942677300855766",
            "extra": "mean: 93.89066666666679 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 184.7327160667755,
            "unit": "iter/sec",
            "range": "stddev: 0.00019282219334315392",
            "extra": "mean: 5.413226315789831 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 240.68469407000717,
            "unit": "iter/sec",
            "range": "stddev: 0.0003212034059343539",
            "extra": "mean: 4.15481343283563 msec\nrounds: 268"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 331.4650044602414,
            "unit": "iter/sec",
            "range": "stddev: 0.00036822817903232137",
            "extra": "mean: 3.016909738717072 msec\nrounds: 421"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 295.98321183223453,
            "unit": "iter/sec",
            "range": "stddev: 0.0007466988200872046",
            "extra": "mean: 3.3785699999998897 msec\nrounds: 400"
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
        "date": 1672858481365,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 133.6962648059871,
            "unit": "iter/sec",
            "range": "stddev: 0.0008816953884896836",
            "extra": "mean: 7.479640522875839 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 174.49382867304706,
            "unit": "iter/sec",
            "range": "stddev: 0.0002823481978614249",
            "extra": "mean: 5.730861702127712 msec\nrounds: 188"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 230.20858575502842,
            "unit": "iter/sec",
            "range": "stddev: 0.00026191088618167613",
            "extra": "mean: 4.34388663967611 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 319.3853527022358,
            "unit": "iter/sec",
            "range": "stddev: 0.00028514244771811383",
            "extra": "mean: 3.131013966480497 msec\nrounds: 358"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.12921266448203,
            "unit": "iter/sec",
            "range": "stddev: 0.000941647278178284",
            "extra": "mean: 8.465306569343374 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.6248877813355,
            "unit": "iter/sec",
            "range": "stddev: 0.0008851723603921826",
            "extra": "mean: 6.683380116959004 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 211.47247037165275,
            "unit": "iter/sec",
            "range": "stddev: 0.0007526557337034444",
            "extra": "mean: 4.728747899159393 msec\nrounds: 238"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 315.3461470807085,
            "unit": "iter/sec",
            "range": "stddev: 0.00021004715924325342",
            "extra": "mean: 3.1711184971099833 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.054008304610772,
            "unit": "iter/sec",
            "range": "stddev: 0.005490744627428111",
            "extra": "mean: 99.46281818181905 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.049443260843454,
            "unit": "iter/sec",
            "range": "stddev: 0.007026829545004166",
            "extra": "mean: 99.50799999999897 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 170.75435577638603,
            "unit": "iter/sec",
            "range": "stddev: 0.0005751617254679252",
            "extra": "mean: 5.856365979381312 msec\nrounds: 194"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 234.42848732354912,
            "unit": "iter/sec",
            "range": "stddev: 0.000442469290239528",
            "extra": "mean: 4.265693181818124 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 289.27330413526164,
            "unit": "iter/sec",
            "range": "stddev: 0.0004285079985728357",
            "extra": "mean: 3.4569384236452345 msec\nrounds: 406"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 337.10490831061264,
            "unit": "iter/sec",
            "range": "stddev: 0.0003161015948400967",
            "extra": "mean: 2.9664355971897853 msec\nrounds: 427"
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
        "date": 1672940807824,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 142.99027173082334,
            "unit": "iter/sec",
            "range": "stddev: 0.0003011143678868279",
            "extra": "mean: 6.993482758620686 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 170.79260765039513,
            "unit": "iter/sec",
            "range": "stddev: 0.00023482363404622432",
            "extra": "mean: 5.855054347826082 msec\nrounds: 184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 211.43234571537997,
            "unit": "iter/sec",
            "range": "stddev: 0.0004528738635738205",
            "extra": "mean: 4.72964529914525 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 320.5482793932763,
            "unit": "iter/sec",
            "range": "stddev: 0.00011077393979660293",
            "extra": "mean: 3.119654867256716 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.02581577806983,
            "unit": "iter/sec",
            "range": "stddev: 0.001705835782429339",
            "extra": "mean: 8.472722627737248 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.683970452591,
            "unit": "iter/sec",
            "range": "stddev: 0.001927703362671451",
            "extra": "mean: 6.771215568862407 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 220.69970480209645,
            "unit": "iter/sec",
            "range": "stddev: 0.00024061426839434104",
            "extra": "mean: 4.531043668122301 msec\nrounds: 229"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 326.4099408710329,
            "unit": "iter/sec",
            "range": "stddev: 0.00008703096470291433",
            "extra": "mean: 3.0636321839079885 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.197194729480511,
            "unit": "iter/sec",
            "range": "stddev: 0.001848184832273065",
            "extra": "mean: 89.30808333333277 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.269128176690737,
            "unit": "iter/sec",
            "range": "stddev: 0.0038297062342820135",
            "extra": "mean: 97.37924999999888 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 182.18901928561652,
            "unit": "iter/sec",
            "range": "stddev: 0.0001895018515311557",
            "extra": "mean: 5.488805000000063 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 246.2223199593396,
            "unit": "iter/sec",
            "range": "stddev: 0.00043838492807559966",
            "extra": "mean: 4.061370229007414 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 353.8030883640214,
            "unit": "iter/sec",
            "range": "stddev: 0.00012884722037969325",
            "extra": "mean: 2.82643095238083 msec\nrounds: 420"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 312.84036762971397,
            "unit": "iter/sec",
            "range": "stddev: 0.00033832322556270406",
            "extra": "mean: 3.196518427518363 msec\nrounds: 407"
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
        "date": 1672948381479,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 129.98314828403838,
            "unit": "iter/sec",
            "range": "stddev: 0.000850906079618856",
            "extra": "mean: 7.693304964538989 msec\nrounds: 141"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 163.28618898199176,
            "unit": "iter/sec",
            "range": "stddev: 0.000311461562233014",
            "extra": "mean: 6.124216666666685 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 213.43044103606147,
            "unit": "iter/sec",
            "range": "stddev: 0.0002997904343422152",
            "extra": "mean: 4.685367256637205 msec\nrounds: 226"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 302.875320558161,
            "unit": "iter/sec",
            "range": "stddev: 0.0002948867529194069",
            "extra": "mean: 3.301688622754493 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.09826547632018,
            "unit": "iter/sec",
            "range": "stddev: 0.0018501688837162305",
            "extra": "mean: 8.326514925373093 msec\nrounds: 134"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 156.02922947565654,
            "unit": "iter/sec",
            "range": "stddev: 0.00024181413862672048",
            "extra": "mean: 6.409055555555497 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.91597520143773,
            "unit": "iter/sec",
            "range": "stddev: 0.0003617238177793702",
            "extra": "mean: 4.856349775784749 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.7843386472988,
            "unit": "iter/sec",
            "range": "stddev: 0.00016922939449962867",
            "extra": "mean: 3.156721712538256 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.830158743051774,
            "unit": "iter/sec",
            "range": "stddev: 0.004174335594928829",
            "extra": "mean: 92.33475000000001 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.94806602413679,
            "unit": "iter/sec",
            "range": "stddev: 0.004530057341264828",
            "extra": "mean: 91.34033333333373 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 188.03155528552082,
            "unit": "iter/sec",
            "range": "stddev: 0.00046084280460220896",
            "extra": "mean: 5.3182562814072725 msec\nrounds: 199"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 262.0368427598633,
            "unit": "iter/sec",
            "range": "stddev: 0.00014941973504201746",
            "extra": "mean: 3.8162572463766993 msec\nrounds: 276"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 337.08901376020606,
            "unit": "iter/sec",
            "range": "stddev: 0.00015850426447119084",
            "extra": "mean: 2.966575471698306 msec\nrounds: 424"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 339.8009056247452,
            "unit": "iter/sec",
            "range": "stddev: 0.00022116709609924258",
            "extra": "mean: 2.942899749373644 msec\nrounds: 399"
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
        "date": 1673020839718,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 135.536312514956,
            "unit": "iter/sec",
            "range": "stddev: 0.00033791390923940964",
            "extra": "mean: 7.3780965517241235 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 168.0744861052162,
            "unit": "iter/sec",
            "range": "stddev: 0.00048267486310790735",
            "extra": "mean: 5.949743016759786 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 218.52254060006385,
            "unit": "iter/sec",
            "range": "stddev: 0.00014590059068381362",
            "extra": "mean: 4.576186956521719 msec\nrounds: 230"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 322.42539989310586,
            "unit": "iter/sec",
            "range": "stddev: 0.00015604041666140167",
            "extra": "mean: 3.1014926253686323 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 130.7611912155025,
            "unit": "iter/sec",
            "range": "stddev: 0.000247393689975724",
            "extra": "mean: 7.647528985507163 msec\nrounds: 138"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 161.99640923935485,
            "unit": "iter/sec",
            "range": "stddev: 0.0001460311020631891",
            "extra": "mean: 6.172976331360951 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 219.79088467257904,
            "unit": "iter/sec",
            "range": "stddev: 0.00015562370642408305",
            "extra": "mean: 4.5497792207793015 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 322.710232865421,
            "unit": "iter/sec",
            "range": "stddev: 0.0002642619547070023",
            "extra": "mean: 3.098755162241872 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.074769460215737,
            "unit": "iter/sec",
            "range": "stddev: 0.004828605903332472",
            "extra": "mean: 90.29533333333332 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.677468324867101,
            "unit": "iter/sec",
            "range": "stddev: 0.0012006109051032083",
            "extra": "mean: 85.6350000000005 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 179.88058911358527,
            "unit": "iter/sec",
            "range": "stddev: 0.0005656707005218583",
            "extra": "mean: 5.559243523316191 msec\nrounds: 193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 251.3830830611755,
            "unit": "iter/sec",
            "range": "stddev: 0.00008495921600077935",
            "extra": "mean: 3.9779924242421845 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 344.67784139530136,
            "unit": "iter/sec",
            "range": "stddev: 0.0001725550346300801",
            "extra": "mean: 2.9012599009900613 msec\nrounds: 404"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 338.67559668858144,
            "unit": "iter/sec",
            "range": "stddev: 0.0001410790541396352",
            "extra": "mean: 2.9526780487804642 msec\nrounds: 410"
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
        "date": 1673244675537,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 130.88189467123757,
            "unit": "iter/sec",
            "range": "stddev: 0.0010845634898291009",
            "extra": "mean: 7.640476190476165 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 173.0293400084194,
            "unit": "iter/sec",
            "range": "stddev: 0.00022500147485552007",
            "extra": "mean: 5.779366666666712 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 218.62944246724715,
            "unit": "iter/sec",
            "range": "stddev: 0.00013312612524242284",
            "extra": "mean: 4.573949367088606 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 321.25571667355746,
            "unit": "iter/sec",
            "range": "stddev: 0.00009843512902851896",
            "extra": "mean: 3.1127850746268444 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 126.79735247128299,
            "unit": "iter/sec",
            "range": "stddev: 0.0001592406802442567",
            "extra": "mean: 7.886599999999839 msec\nrounds: 140"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 161.63664273998018,
            "unit": "iter/sec",
            "range": "stddev: 0.00018339614238276232",
            "extra": "mean: 6.186715976331363 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 219.49408967416468,
            "unit": "iter/sec",
            "range": "stddev: 0.0001577350586028323",
            "extra": "mean: 4.555931330472193 msec\nrounds: 233"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 327.4515795255282,
            "unit": "iter/sec",
            "range": "stddev: 0.00012614375364832758",
            "extra": "mean: 3.0538866279068895 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.54436734275237,
            "unit": "iter/sec",
            "range": "stddev: 0.004764073220947535",
            "extra": "mean: 94.83736363636326 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.720488282506382,
            "unit": "iter/sec",
            "range": "stddev: 0.0017120208332080272",
            "extra": "mean: 93.27933333333267 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 173.7166681143138,
            "unit": "iter/sec",
            "range": "stddev: 0.0006020255726758639",
            "extra": "mean: 5.756499999999727 msec\nrounds: 194"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 249.66090118976382,
            "unit": "iter/sec",
            "range": "stddev: 0.00021051004065791818",
            "extra": "mean: 4.0054329501915635 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 357.40060387783166,
            "unit": "iter/sec",
            "range": "stddev: 0.00008585483543508036",
            "extra": "mean: 2.7979807228916282 msec\nrounds: 415"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 340.8885601208053,
            "unit": "iter/sec",
            "range": "stddev: 0.0003011299354014006",
            "extra": "mean: 2.933510000000048 msec\nrounds: 400"
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
        "date": 1673253985459,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 134.29880279563804,
            "unit": "iter/sec",
            "range": "stddev: 0.0005528345455650264",
            "extra": "mean: 7.446082758620687 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 164.62672028101102,
            "unit": "iter/sec",
            "range": "stddev: 0.00041262186800335556",
            "extra": "mean: 6.0743480662983576 msec\nrounds: 181"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 223.2382465063217,
            "unit": "iter/sec",
            "range": "stddev: 0.00018885003619333423",
            "extra": "mean: 4.479519148936165 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 310.9093012494211,
            "unit": "iter/sec",
            "range": "stddev: 0.0002523240106145929",
            "extra": "mean: 3.2163720930232604 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 123.3848211635366,
            "unit": "iter/sec",
            "range": "stddev: 0.0010317680860912803",
            "extra": "mean: 8.10472463768117 msec\nrounds: 138"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 159.80241235452226,
            "unit": "iter/sec",
            "range": "stddev: 0.00027848204053496203",
            "extra": "mean: 6.257727810650919 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 223.98710446893205,
            "unit": "iter/sec",
            "range": "stddev: 0.0002016177711255986",
            "extra": "mean: 4.464542735042607 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 330.2191032716777,
            "unit": "iter/sec",
            "range": "stddev: 0.00011472441492109158",
            "extra": "mean: 3.028292397660836 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.818988406552338,
            "unit": "iter/sec",
            "range": "stddev: 0.0035317198349279636",
            "extra": "mean: 92.43008333333336 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.176692329029517,
            "unit": "iter/sec",
            "range": "stddev: 0.001942624639736159",
            "extra": "mean: 89.47190909090997 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 185.39011239992172,
            "unit": "iter/sec",
            "range": "stddev: 0.00026992171014654607",
            "extra": "mean: 5.394030927835083 msec\nrounds: 194"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 246.14352103236465,
            "unit": "iter/sec",
            "range": "stddev: 0.0004646958864714046",
            "extra": "mean: 4.062670411985018 msec\nrounds: 267"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 341.0728012258148,
            "unit": "iter/sec",
            "range": "stddev: 0.00016342684470129596",
            "extra": "mean: 2.931925373134423 msec\nrounds: 402"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 342.0157479250917,
            "unit": "iter/sec",
            "range": "stddev: 0.00011272934693088758",
            "extra": "mean: 2.9238419753087515 msec\nrounds: 405"
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
        "date": 1673260991687,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 135.56714915576262,
            "unit": "iter/sec",
            "range": "stddev: 0.0007160294173460428",
            "extra": "mean: 7.376418300653573 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 166.10133930132528,
            "unit": "iter/sec",
            "range": "stddev: 0.0012361405168233135",
            "extra": "mean: 6.020421052631581 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 226.10840986525983,
            "unit": "iter/sec",
            "range": "stddev: 0.00022093961901555273",
            "extra": "mean: 4.4226572580644365 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 317.43160590245975,
            "unit": "iter/sec",
            "range": "stddev: 0.00020028827220967092",
            "extra": "mean: 3.1502849162010653 msec\nrounds: 358"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 130.42030052965504,
            "unit": "iter/sec",
            "range": "stddev: 0.0004293397079459263",
            "extra": "mean: 7.6675179856116 msec\nrounds: 139"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 162.2802974434655,
            "unit": "iter/sec",
            "range": "stddev: 0.00021822960105605824",
            "extra": "mean: 6.162177514792735 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 227.89960679980456,
            "unit": "iter/sec",
            "range": "stddev: 0.00020121953108280145",
            "extra": "mean: 4.387896995708452 msec\nrounds: 233"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 321.57390982649804,
            "unit": "iter/sec",
            "range": "stddev: 0.00014786204690732166",
            "extra": "mean: 3.1097050147493 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.25440680366403,
            "unit": "iter/sec",
            "range": "stddev: 0.002004516239909751",
            "extra": "mean: 88.85408333333356 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.750260693822003,
            "unit": "iter/sec",
            "range": "stddev: 0.0020636330276312402",
            "extra": "mean: 93.02099999999847 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 191.88352278567595,
            "unit": "iter/sec",
            "range": "stddev: 0.00019661852946166076",
            "extra": "mean: 5.211494897959262 msec\nrounds: 196"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 256.12971051094064,
            "unit": "iter/sec",
            "range": "stddev: 0.00018447941118654256",
            "extra": "mean: 3.9042717770037254 msec\nrounds: 287"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 345.0825733300382,
            "unit": "iter/sec",
            "range": "stddev: 0.00019915967514001694",
            "extra": "mean: 2.8978571428572155 msec\nrounds: 420"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 340.12837966014155,
            "unit": "iter/sec",
            "range": "stddev: 0.0002313883520836208",
            "extra": "mean: 2.940066339066462 msec\nrounds: 407"
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
        "date": 1673268697205,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 143.5866763447381,
            "unit": "iter/sec",
            "range": "stddev: 0.0003974334992205186",
            "extra": "mean: 6.9644344827586515 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 170.2839097185666,
            "unit": "iter/sec",
            "range": "stddev: 0.00031370222819827425",
            "extra": "mean: 5.872545454545473 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 216.38491734275686,
            "unit": "iter/sec",
            "range": "stddev: 0.0003817690813386254",
            "extra": "mean: 4.621394190871379 msec\nrounds: 241"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 323.5743930838807,
            "unit": "iter/sec",
            "range": "stddev: 0.00020144216658263205",
            "extra": "mean: 3.0904794117647265 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 129.8183383813022,
            "unit": "iter/sec",
            "range": "stddev: 0.0004149067756350714",
            "extra": "mean: 7.703071942446233 msec\nrounds: 139"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.11338180954695,
            "unit": "iter/sec",
            "range": "stddev: 0.0015593657078736762",
            "extra": "mean: 6.617547619047611 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 216.5351186239727,
            "unit": "iter/sec",
            "range": "stddev: 0.000782349093582785",
            "extra": "mean: 4.618188524590161 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 326.3170439648492,
            "unit": "iter/sec",
            "range": "stddev: 0.00015586937587512212",
            "extra": "mean: 3.0645043478259746 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.549678052724339,
            "unit": "iter/sec",
            "range": "stddev: 0.0010894625447275786",
            "extra": "mean: 86.58249999999956 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.094725844701575,
            "unit": "iter/sec",
            "range": "stddev: 0.0040139070845415",
            "extra": "mean: 90.13291666666667 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 174.20702973513295,
            "unit": "iter/sec",
            "range": "stddev: 0.0004206985022985377",
            "extra": "mean: 5.740296482411849 msec\nrounds: 199"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 230.40072337133,
            "unit": "iter/sec",
            "range": "stddev: 0.00045166119102180396",
            "extra": "mean: 4.340264150943353 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 342.3673975372504,
            "unit": "iter/sec",
            "range": "stddev: 0.00015809987404332917",
            "extra": "mean: 2.920838862559037 msec\nrounds: 422"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 340.3541656390608,
            "unit": "iter/sec",
            "range": "stddev: 0.0001643422316129107",
            "extra": "mean: 2.9381159420286957 msec\nrounds: 414"
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
        "date": 1673281181616,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 136.00789995182262,
            "unit": "iter/sec",
            "range": "stddev: 0.00020741546123440355",
            "extra": "mean: 7.35251408450704 msec\nrounds: 142"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 164.76488622175015,
            "unit": "iter/sec",
            "range": "stddev: 0.00038334533287863785",
            "extra": "mean: 6.069254335260135 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 217.51690854093707,
            "unit": "iter/sec",
            "range": "stddev: 0.0002376126264108053",
            "extra": "mean: 4.597343750000006 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 311.31931229747886,
            "unit": "iter/sec",
            "range": "stddev: 0.0002054055678374905",
            "extra": "mean: 3.212136094674581 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 128.82923590054128,
            "unit": "iter/sec",
            "range": "stddev: 0.0004931195694245788",
            "extra": "mean: 7.762213235294044 msec\nrounds: 136"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.292712174017,
            "unit": "iter/sec",
            "range": "stddev: 0.0006287674118838653",
            "extra": "mean: 6.609703703703845 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 211.0791851202421,
            "unit": "iter/sec",
            "range": "stddev: 0.00022141783701025192",
            "extra": "mean: 4.737558558558704 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 306.09892781384576,
            "unit": "iter/sec",
            "range": "stddev: 0.0003283632041122063",
            "extra": "mean: 3.266917682926843 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.679417686231956,
            "unit": "iter/sec",
            "range": "stddev: 0.006527756721736579",
            "extra": "mean: 103.31200000000044 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.742032768570919,
            "unit": "iter/sec",
            "range": "stddev: 0.005681276251065491",
            "extra": "mean: 93.09225000000036 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 177.80215726979094,
            "unit": "iter/sec",
            "range": "stddev: 0.00043088436085842135",
            "extra": "mean: 5.624228723404261 msec\nrounds: 188"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 242.9685653509828,
            "unit": "iter/sec",
            "range": "stddev: 0.00029867935254403324",
            "extra": "mean: 4.115758754863781 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 299.63617779831634,
            "unit": "iter/sec",
            "range": "stddev: 0.0003488133970883401",
            "extra": "mean: 3.3373807106600295 msec\nrounds: 394"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 290.24408542421384,
            "unit": "iter/sec",
            "range": "stddev: 0.00036373870094194084",
            "extra": "mean: 3.445375979112283 msec\nrounds: 383"
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
        "date": 1673311753717,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 134.7688572731825,
            "unit": "iter/sec",
            "range": "stddev: 0.0004785842840820733",
            "extra": "mean: 7.420111888111919 msec\nrounds: 143"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 166.82743612326922,
            "unit": "iter/sec",
            "range": "stddev: 0.0008492605061576118",
            "extra": "mean: 5.994217877094853 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.42487161532998,
            "unit": "iter/sec",
            "range": "stddev: 0.0006386205582089673",
            "extra": "mean: 4.915819742489348 msec\nrounds: 233"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 303.8200128337793,
            "unit": "iter/sec",
            "range": "stddev: 0.0006589392115005618",
            "extra": "mean: 3.291422413793072 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 125.92953461223435,
            "unit": "iter/sec",
            "range": "stddev: 0.0007887506159331965",
            "extra": "mean: 7.940948905109728 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 156.77535491420844,
            "unit": "iter/sec",
            "range": "stddev: 0.00035547102527135917",
            "extra": "mean: 6.378553571428532 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 189.39795940027403,
            "unit": "iter/sec",
            "range": "stddev: 0.002520020841910303",
            "extra": "mean: 5.279887931034135 msec\nrounds: 232"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 283.85659799124375,
            "unit": "iter/sec",
            "range": "stddev: 0.0014173201116033686",
            "extra": "mean: 3.5229056047196323 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.396611838716288,
            "unit": "iter/sec",
            "range": "stddev: 0.0013221003606525713",
            "extra": "mean: 96.185181818183 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.16093066735127,
            "unit": "iter/sec",
            "range": "stddev: 0.004234632565363736",
            "extra": "mean: 98.41618181818359 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 181.74863117588498,
            "unit": "iter/sec",
            "range": "stddev: 0.0003480324387912639",
            "extra": "mean: 5.502104712041888 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 251.48065164806437,
            "unit": "iter/sec",
            "range": "stddev: 0.00012928901676875556",
            "extra": "mean: 3.9764490566035837 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 339.6870579231239,
            "unit": "iter/sec",
            "range": "stddev: 0.00011961288949598864",
            "extra": "mean: 2.9438860759491 msec\nrounds: 395"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 330.12985107475396,
            "unit": "iter/sec",
            "range": "stddev: 0.00022953816113015273",
            "extra": "mean: 3.029111111111131 msec\nrounds: 387"
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
        "date": 1673335060550,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 135.95397372756966,
            "unit": "iter/sec",
            "range": "stddev: 0.0007805787042097485",
            "extra": "mean: 7.35543046357617 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 173.6548021124584,
            "unit": "iter/sec",
            "range": "stddev: 0.00038057613559693086",
            "extra": "mean: 5.758550802139076 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 230.92982444658713,
            "unit": "iter/sec",
            "range": "stddev: 0.00019603402862058072",
            "extra": "mean: 4.330319838056669 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 339.78662461807534,
            "unit": "iter/sec",
            "range": "stddev: 0.00015079933919782805",
            "extra": "mean: 2.9430234374999698 msec\nrounds: 384"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 140.72926677160325,
            "unit": "iter/sec",
            "range": "stddev: 0.0003536268574671548",
            "extra": "mean: 7.10584246575342 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 169.60557993190295,
            "unit": "iter/sec",
            "range": "stddev: 0.0003566765052216474",
            "extra": "mean: 5.896032432432366 msec\nrounds: 185"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 232.5943409887309,
            "unit": "iter/sec",
            "range": "stddev: 0.00017388049154651235",
            "extra": "mean: 4.29933073929967 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 348.58657825477746,
            "unit": "iter/sec",
            "range": "stddev: 0.0003374210619424495",
            "extra": "mean: 2.868727777777814 msec\nrounds: 360"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.270921224601963,
            "unit": "iter/sec",
            "range": "stddev: 0.013628379901880984",
            "extra": "mean: 97.36224999999976 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.054375552142943,
            "unit": "iter/sec",
            "range": "stddev: 0.004551427597386846",
            "extra": "mean: 90.46191666666736 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 188.60610609898663,
            "unit": "iter/sec",
            "range": "stddev: 0.00035848935568773255",
            "extra": "mean: 5.302055276382025 msec\nrounds: 199"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 254.12451372502056,
            "unit": "iter/sec",
            "range": "stddev: 0.0002984782041695504",
            "extra": "mean: 3.93507885304629 msec\nrounds: 279"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 318.84113510508894,
            "unit": "iter/sec",
            "range": "stddev: 0.000245743541665577",
            "extra": "mean: 3.13635817307702 msec\nrounds: 416"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 279.3395293436298,
            "unit": "iter/sec",
            "range": "stddev: 0.0018622401762372585",
            "extra": "mean: 3.579872860635664 msec\nrounds: 409"
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
        "date": 1673539523904,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 144.63135908397604,
            "unit": "iter/sec",
            "range": "stddev: 0.00027432326003702965",
            "extra": "mean: 6.9141298701298854 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 174.43904924257404,
            "unit": "iter/sec",
            "range": "stddev: 0.00038589663708154355",
            "extra": "mean: 5.732661375661393 msec\nrounds: 189"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 217.17777036830478,
            "unit": "iter/sec",
            "range": "stddev: 0.00039611804913686086",
            "extra": "mean: 4.604522821576685 msec\nrounds: 241"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 326.3696179555655,
            "unit": "iter/sec",
            "range": "stddev: 0.00021702961805517967",
            "extra": "mean: 3.06401069518716 msec\nrounds: 374"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 128.91066046710253,
            "unit": "iter/sec",
            "range": "stddev: 0.0005012205867961435",
            "extra": "mean: 7.7573103448275 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 160.92334653586803,
            "unit": "iter/sec",
            "range": "stddev: 0.0005078224755649993",
            "extra": "mean: 6.214138728323743 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 215.50123958486608,
            "unit": "iter/sec",
            "range": "stddev: 0.0004013109727213206",
            "extra": "mean: 4.6403445378150225 msec\nrounds: 238"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 329.95047922720926,
            "unit": "iter/sec",
            "range": "stddev: 0.00021802800879027493",
            "extra": "mean: 3.0307578347579356 msec\nrounds: 351"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.357175839815953,
            "unit": "iter/sec",
            "range": "stddev: 0.004879566047365291",
            "extra": "mean: 96.55141666666634 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 9.790507613343447,
            "unit": "iter/sec",
            "range": "stddev: 0.006925563162202678",
            "extra": "mean: 102.13975000000038 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 178.61564036359837,
            "unit": "iter/sec",
            "range": "stddev: 0.0005453137390860844",
            "extra": "mean: 5.598613861386119 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 255.8228441176392,
            "unit": "iter/sec",
            "range": "stddev: 0.00017613478968641762",
            "extra": "mean: 3.908955056180025 msec\nrounds: 267"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 335.68097390538264,
            "unit": "iter/sec",
            "range": "stddev: 0.00032734279341347825",
            "extra": "mean: 2.9790190023753533 msec\nrounds: 421"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 342.51069417427044,
            "unit": "iter/sec",
            "range": "stddev: 0.00021689840495553507",
            "extra": "mean: 2.9196168674698284 msec\nrounds: 415"
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
        "date": 1673622913984,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 131.84790591899852,
            "unit": "iter/sec",
            "range": "stddev: 0.000733187797411046",
            "extra": "mean: 7.584496644295249 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 165.61980777474224,
            "unit": "iter/sec",
            "range": "stddev: 0.0009333926179860948",
            "extra": "mean: 6.037925133689863 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 216.63139907489273,
            "unit": "iter/sec",
            "range": "stddev: 0.0006076908673536725",
            "extra": "mean: 4.616136000000097 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 313.7030490385065,
            "unit": "iter/sec",
            "range": "stddev: 0.0003092948261134208",
            "extra": "mean: 3.187728021978045 msec\nrounds: 364"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 129.53367875647712,
            "unit": "iter/sec",
            "range": "stddev: 0.0004022261077136789",
            "extra": "mean: 7.719999999999974 msec\nrounds: 140"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 157.02200627731222,
            "unit": "iter/sec",
            "range": "stddev: 0.000498463030842599",
            "extra": "mean: 6.368534090909065 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.64530062561545,
            "unit": "iter/sec",
            "range": "stddev: 0.000469674498675511",
            "extra": "mean: 4.8627418032787215 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 330.36573765542227,
            "unit": "iter/sec",
            "range": "stddev: 0.00015286274068514993",
            "extra": "mean: 3.0269482758621264 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.743879346234987,
            "unit": "iter/sec",
            "range": "stddev: 0.0025609961884530633",
            "extra": "mean: 93.0762499999996 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 9.840606771813613,
            "unit": "iter/sec",
            "range": "stddev: 0.004426521292165118",
            "extra": "mean: 101.61974999999934 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 175.48964745383765,
            "unit": "iter/sec",
            "range": "stddev: 0.00045760341186288603",
            "extra": "mean: 5.69834183673455 msec\nrounds: 196"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 243.46938462662283,
            "unit": "iter/sec",
            "range": "stddev: 0.0005738167715438888",
            "extra": "mean: 4.107292592592573 msec\nrounds: 270"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 319.18264331494925,
            "unit": "iter/sec",
            "range": "stddev: 0.00038780125917776216",
            "extra": "mean: 3.1330024390244278 msec\nrounds: 410"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 329.2474267424544,
            "unit": "iter/sec",
            "range": "stddev: 0.00024009125567586777",
            "extra": "mean: 3.0372295081966576 msec\nrounds: 427"
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
        "date": 1673680193488,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 130.24955452843358,
            "unit": "iter/sec",
            "range": "stddev: 0.0005725915036994514",
            "extra": "mean: 7.677569444444427 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.77903685602035,
            "unit": "iter/sec",
            "range": "stddev: 0.0006910148888494488",
            "extra": "mean: 6.588525139664799 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 213.23166253264745,
            "unit": "iter/sec",
            "range": "stddev: 0.0003118078227651138",
            "extra": "mean: 4.6897350427349975 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 339.97499905298565,
            "unit": "iter/sec",
            "range": "stddev: 0.00016084658728167175",
            "extra": "mean: 2.9413927576602434 msec\nrounds: 359"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 122.64850174707887,
            "unit": "iter/sec",
            "range": "stddev: 0.0006625013797707443",
            "extra": "mean: 8.153381294964063 msec\nrounds: 139"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.48954094721122,
            "unit": "iter/sec",
            "range": "stddev: 0.0006382926719762209",
            "extra": "mean: 6.920916167664666 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 207.4326389798701,
            "unit": "iter/sec",
            "range": "stddev: 0.00028000933209579965",
            "extra": "mean: 4.820842105263112 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 282.80198253940796,
            "unit": "iter/sec",
            "range": "stddev: 0.0004352835120801927",
            "extra": "mean: 3.53604310344837 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.790280115671814,
            "unit": "iter/sec",
            "range": "stddev: 0.0028760704094303756",
            "extra": "mean: 92.6759999999999 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 9.453964777964861,
            "unit": "iter/sec",
            "range": "stddev: 0.003520566973966209",
            "extra": "mean: 105.77572727272931 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 143.9433904334248,
            "unit": "iter/sec",
            "range": "stddev: 0.0013719519160425005",
            "extra": "mean: 6.947175531915163 msec\nrounds: 188"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 233.86908170096183,
            "unit": "iter/sec",
            "range": "stddev: 0.0005145423814753168",
            "extra": "mean: 4.275896551723995 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 353.1814568777191,
            "unit": "iter/sec",
            "range": "stddev: 0.0001564885998436921",
            "extra": "mean: 2.8314057279236686 msec\nrounds: 419"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 317.2236458665294,
            "unit": "iter/sec",
            "range": "stddev: 0.0002556040989207439",
            "extra": "mean: 3.1523501259447286 msec\nrounds: 397"
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
        "date": 1673694245636,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 142.78574998215106,
            "unit": "iter/sec",
            "range": "stddev: 0.0004867666468199587",
            "extra": "mean: 7.0035000000000345 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 174.23265805821433,
            "unit": "iter/sec",
            "range": "stddev: 0.0009610025306970116",
            "extra": "mean: 5.7394521276595665 msec\nrounds: 188"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 224.29427408760236,
            "unit": "iter/sec",
            "range": "stddev: 0.0005867075401807728",
            "extra": "mean: 4.458428571428583 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 340.3685440109504,
            "unit": "iter/sec",
            "range": "stddev: 0.00005796185328067083",
            "extra": "mean: 2.9379918256130853 msec\nrounds: 367"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 136.8222688431407,
            "unit": "iter/sec",
            "range": "stddev: 0.0001279191796200229",
            "extra": "mean: 7.308751773049792 msec\nrounds: 141"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 166.24220135603522,
            "unit": "iter/sec",
            "range": "stddev: 0.00013249666028673782",
            "extra": "mean: 6.015319767441807 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 220.56394319105996,
            "unit": "iter/sec",
            "range": "stddev: 0.00044247614621125195",
            "extra": "mean: 4.533832618025722 msec\nrounds: 233"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 338.23204462724163,
            "unit": "iter/sec",
            "range": "stddev: 0.00030256307584271297",
            "extra": "mean: 2.9565501432665218 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.487727756169082,
            "unit": "iter/sec",
            "range": "stddev: 0.0019349975550059123",
            "extra": "mean: 87.04941666666717 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.692003838574792,
            "unit": "iter/sec",
            "range": "stddev: 0.004510930495573371",
            "extra": "mean: 85.52853846153852 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 185.89952130873462,
            "unit": "iter/sec",
            "range": "stddev: 0.0006871665349344236",
            "extra": "mean: 5.379249999999942 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 263.56856669894825,
            "unit": "iter/sec",
            "range": "stddev: 0.0001469867778006404",
            "extra": "mean: 3.794079136690887 msec\nrounds: 278"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 358.1448599502636,
            "unit": "iter/sec",
            "range": "stddev: 0.00025868367215659753",
            "extra": "mean: 2.7921662763465944 msec\nrounds: 427"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 347.7045744112577,
            "unit": "iter/sec",
            "range": "stddev: 0.0003910348222410084",
            "extra": "mean: 2.876004728132282 msec\nrounds: 423"
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
          "id": "eba81f3dc6bd2489195e2aad144968eac9fd3c28",
          "message": "Merge pull request #791 from TeoZosa/docs/add-ruff-documentation\n\n📝 Add Ruff status badge",
          "timestamp": "2023-01-14T23:17:36+09:00",
          "tree_id": "495cf285c70a9512296c2a1f833b1a784b5884c2",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/eba81f3dc6bd2489195e2aad144968eac9fd3c28"
        },
        "date": 1673708430421,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 144.65445432394685,
            "unit": "iter/sec",
            "range": "stddev: 0.0002703983492826435",
            "extra": "mean: 6.913025974025985 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 178.67619096758375,
            "unit": "iter/sec",
            "range": "stddev: 0.00021165390671828985",
            "extra": "mean: 5.596716577540119 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 235.44739658461168,
            "unit": "iter/sec",
            "range": "stddev: 0.00017606601892548794",
            "extra": "mean: 4.24723320158112 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 349.3330396910712,
            "unit": "iter/sec",
            "range": "stddev: 0.00008007160416546448",
            "extra": "mean: 2.8625978260869314 msec\nrounds: 368"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 140.4632207639283,
            "unit": "iter/sec",
            "range": "stddev: 0.00015086090281496984",
            "extra": "mean: 7.119301369862974 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 169.19025930837697,
            "unit": "iter/sec",
            "range": "stddev: 0.00015723778051073326",
            "extra": "mean: 5.91050574712659 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 232.8449759068788,
            "unit": "iter/sec",
            "range": "stddev: 0.00010016435879556704",
            "extra": "mean: 4.2947029288702705 msec\nrounds: 239"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 342.2407939986436,
            "unit": "iter/sec",
            "range": "stddev: 0.000107135750104818",
            "extra": "mean: 2.9219193548386966 msec\nrounds: 372"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.428049003474124,
            "unit": "iter/sec",
            "range": "stddev: 0.0010561922173543009",
            "extra": "mean: 87.50400000000002 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.793519068154918,
            "unit": "iter/sec",
            "range": "stddev: 0.0007470250492734757",
            "extra": "mean: 84.7923333333321 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 189.8735970844457,
            "unit": "iter/sec",
            "range": "stddev: 0.00025514773166775465",
            "extra": "mean: 5.266661691542364 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 263.0029932245282,
            "unit": "iter/sec",
            "range": "stddev: 0.00008853604126134835",
            "extra": "mean: 3.8022380952382937 msec\nrounds: 273"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 357.7751113406099,
            "unit": "iter/sec",
            "range": "stddev: 0.00013453494768173068",
            "extra": "mean: 2.795051886792588 msec\nrounds: 424"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 351.9803773059973,
            "unit": "iter/sec",
            "range": "stddev: 0.00015188923079671604",
            "extra": "mean: 2.8410674698795524 msec\nrounds: 415"
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
          "id": "02f4d6a9512ec041d5187d21abb8b6b616a9813b",
          "message": "Merge pull request #782 from TeoZosa/dependabot/pip/dot-github/workflows/poetry-1.3.2",
          "timestamp": "2023-01-14T14:30:36Z",
          "tree_id": "4e0d8c0db33fd57d7045107afad05779f5698ff5",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/02f4d6a9512ec041d5187d21abb8b6b616a9813b"
        },
        "date": 1673711992447,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 149.9203971052787,
            "unit": "iter/sec",
            "range": "stddev: 0.000234022967481276",
            "extra": "mean: 6.670206451612914 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 179.51760784284136,
            "unit": "iter/sec",
            "range": "stddev: 0.0003902938484130789",
            "extra": "mean: 5.570484210526299 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 241.5177877361729,
            "unit": "iter/sec",
            "range": "stddev: 0.00012218098776989745",
            "extra": "mean: 4.140481781376581 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 364.5733748497939,
            "unit": "iter/sec",
            "range": "stddev: 0.00006332110335256277",
            "extra": "mean: 2.7429320652173383 msec\nrounds: 368"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 141.10290139336786,
            "unit": "iter/sec",
            "range": "stddev: 0.00029275778263529987",
            "extra": "mean: 7.087026490066223 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 170.77296588050984,
            "unit": "iter/sec",
            "range": "stddev: 0.000299297498352651",
            "extra": "mean: 5.855727777777788 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 208.2772586867647,
            "unit": "iter/sec",
            "range": "stddev: 0.0005543712699625699",
            "extra": "mean: 4.801292307692288 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 332.97741334216244,
            "unit": "iter/sec",
            "range": "stddev: 0.0002100377363979615",
            "extra": "mean: 3.003206703910621 msec\nrounds: 358"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.964382034682776,
            "unit": "iter/sec",
            "range": "stddev: 0.00157782758928711",
            "extra": "mean: 83.58141666666648 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.315399269980887,
            "unit": "iter/sec",
            "range": "stddev: 0.0009090207043981262",
            "extra": "mean: 81.19915384615476 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 195.07680582146696,
            "unit": "iter/sec",
            "range": "stddev: 0.0003039033337311812",
            "extra": "mean: 5.126186046511309 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 269.381356476135,
            "unit": "iter/sec",
            "range": "stddev: 0.0000881117919609328",
            "extra": "mean: 3.7122093862816814 msec\nrounds: 277"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 383.409580544701,
            "unit": "iter/sec",
            "range": "stddev: 0.00011096152285673383",
            "extra": "mean: 2.6081768707483093 msec\nrounds: 441"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 354.7399541383285,
            "unit": "iter/sec",
            "range": "stddev: 0.00014958999016831571",
            "extra": "mean: 2.8189663677129992 msec\nrounds: 446"
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
          "id": "81573e95bcfc838f6f0a208d03ad824c47a35a9d",
          "message": "Merge pull request #786 from TeoZosa/dependabot/pip/docs/poetry-1.3.2",
          "timestamp": "2023-01-15T00:58:39Z",
          "tree_id": "0ee02943f6b4684bd7b5101e9d55b2cedf52986c",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/81573e95bcfc838f6f0a208d03ad824c47a35a9d"
        },
        "date": 1673773165891,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 131.5029115855916,
            "unit": "iter/sec",
            "range": "stddev: 0.000452378441926481",
            "extra": "mean: 7.604394366197192 msec\nrounds: 142"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 162.4949050131032,
            "unit": "iter/sec",
            "range": "stddev: 0.0002507414928066733",
            "extra": "mean: 6.154039106145282 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 206.1796352058915,
            "unit": "iter/sec",
            "range": "stddev: 0.00015579833319384937",
            "extra": "mean: 4.8501395348837315 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 306.9841778436152,
            "unit": "iter/sec",
            "range": "stddev: 0.0001642728825081624",
            "extra": "mean: 3.2574968749999322 msec\nrounds: 320"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.51127054208882,
            "unit": "iter/sec",
            "range": "stddev: 0.00037115825188068445",
            "extra": "mean: 8.031401459853932 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.8216402880256,
            "unit": "iter/sec",
            "range": "stddev: 0.00025595779849311155",
            "extra": "mean: 6.586676300577892 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.72606610108534,
            "unit": "iter/sec",
            "range": "stddev: 0.00033605133376786916",
            "extra": "mean: 5.057502127659592 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 266.34502975731283,
            "unit": "iter/sec",
            "range": "stddev: 0.00450874865994453",
            "extra": "mean: 3.7545284810126773 msec\nrounds: 316"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.910717597896387,
            "unit": "iter/sec",
            "range": "stddev: 0.0014133693784716464",
            "extra": "mean: 91.65300000000022 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.536025064245848,
            "unit": "iter/sec",
            "range": "stddev: 0.003285867476439917",
            "extra": "mean: 94.91245454545418 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 179.84883281874016,
            "unit": "iter/sec",
            "range": "stddev: 0.00027228063424752523",
            "extra": "mean: 5.5602251308900374 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 230.65294235343845,
            "unit": "iter/sec",
            "range": "stddev: 0.00013717560220914403",
            "extra": "mean: 4.33551807228915 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 290.0070441184599,
            "unit": "iter/sec",
            "range": "stddev: 0.00019926956971661676",
            "extra": "mean: 3.4481921052632343 msec\nrounds: 380"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 39.93825817830201,
            "unit": "iter/sec",
            "range": "stddev: 0.04190204533611292",
            "extra": "mean: 25.038648293963117 msec\nrounds: 381"
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
          "id": "804b002cf0a6bba4c7fd90ba52cf34805eda27a6",
          "message": "Merge pull request #793 from TeoZosa/dependabot/pip/rich-13.1.0",
          "timestamp": "2023-01-15T12:09:52Z",
          "tree_id": "132be4b2a953cf97aa7e76d5d655ec4500383932",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/804b002cf0a6bba4c7fd90ba52cf34805eda27a6"
        },
        "date": 1673784827731,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 142.45014245014173,
            "unit": "iter/sec",
            "range": "stddev: 0.00033897354059647596",
            "extra": "mean: 7.020000000000035 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 168.1660748905386,
            "unit": "iter/sec",
            "range": "stddev: 0.0005227687419360152",
            "extra": "mean: 5.94650259067361 msec\nrounds: 193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 231.0701351035201,
            "unit": "iter/sec",
            "range": "stddev: 0.0002760078787076649",
            "extra": "mean: 4.327690376568989 msec\nrounds: 239"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 347.0413037152646,
            "unit": "iter/sec",
            "range": "stddev: 0.00016901500503036976",
            "extra": "mean: 2.8815013927577495 msec\nrounds: 359"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.68556926856212,
            "unit": "iter/sec",
            "range": "stddev: 0.001866115974628462",
            "extra": "mean: 8.425624161073841 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 158.79173922065115,
            "unit": "iter/sec",
            "range": "stddev: 0.0004005736702838752",
            "extra": "mean: 6.2975568181820645 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 223.57305437427445,
            "unit": "iter/sec",
            "range": "stddev: 0.00040898871107568216",
            "extra": "mean: 4.472810924369898 msec\nrounds: 238"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 327.108334366214,
            "unit": "iter/sec",
            "range": "stddev: 0.00020650548994864128",
            "extra": "mean: 3.057091168091273 msec\nrounds: 351"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.241912848944416,
            "unit": "iter/sec",
            "range": "stddev: 0.0013390021273207812",
            "extra": "mean: 88.95283333333234 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.574168539910048,
            "unit": "iter/sec",
            "range": "stddev: 0.0023081051046793363",
            "extra": "mean: 94.57008333333287 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 181.1984113406418,
            "unit": "iter/sec",
            "range": "stddev: 0.0003149538843047484",
            "extra": "mean: 5.51881218274073 msec\nrounds: 197"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 263.0423537303699,
            "unit": "iter/sec",
            "range": "stddev: 0.0002125269390642519",
            "extra": "mean: 3.801669144981285 msec\nrounds: 269"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 355.94156916298414,
            "unit": "iter/sec",
            "range": "stddev: 0.00012258325582469246",
            "extra": "mean: 2.8094498834501236 msec\nrounds: 429"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 348.1128768260411,
            "unit": "iter/sec",
            "range": "stddev: 0.00014134028307603895",
            "extra": "mean: 2.8726314553992207 msec\nrounds: 426"
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
          "id": "60afafdc960ab68128dc92260c04f61397c75b3f",
          "message": "Merge pull request #792 from TeoZosa/ci/add-pydocstyle-via-ruff\n\n➕ Integrate `pydocstyle` via Ruff",
          "timestamp": "2023-01-16T09:18:19+09:00",
          "tree_id": "0fcd7364d294e5479ae39c53e00992228355d4ad",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/60afafdc960ab68128dc92260c04f61397c75b3f"
        },
        "date": 1673828713148,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 137.93825122836347,
            "unit": "iter/sec",
            "range": "stddev: 0.00033622254264110307",
            "extra": "mean: 7.249620689655196 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 175.51940653106695,
            "unit": "iter/sec",
            "range": "stddev: 0.00016850463978177458",
            "extra": "mean: 5.69737569060775 msec\nrounds: 181"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 225.6617695253633,
            "unit": "iter/sec",
            "range": "stddev: 0.00016414328511947946",
            "extra": "mean: 4.431410788381701 msec\nrounds: 241"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 335.9158821592097,
            "unit": "iter/sec",
            "range": "stddev: 0.00007368236626910533",
            "extra": "mean: 2.9769357541899226 msec\nrounds: 358"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 134.53153506288598,
            "unit": "iter/sec",
            "range": "stddev: 0.0002513569313833363",
            "extra": "mean: 7.433201438848935 msec\nrounds: 139"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 166.60602462705197,
            "unit": "iter/sec",
            "range": "stddev: 0.00010164366281480612",
            "extra": "mean: 6.002183908045958 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 223.76642904357473,
            "unit": "iter/sec",
            "range": "stddev: 0.00013266886010168056",
            "extra": "mean: 4.468945606694501 msec\nrounds: 239"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 339.441999903295,
            "unit": "iter/sec",
            "range": "stddev: 0.00008074216378454835",
            "extra": "mean: 2.9460113960113774 msec\nrounds: 351"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.144379146637753,
            "unit": "iter/sec",
            "range": "stddev: 0.0026512476079738174",
            "extra": "mean: 89.73133333333324 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.5656296473352,
            "unit": "iter/sec",
            "range": "stddev: 0.0012523511312959148",
            "extra": "mean: 86.46308333333212 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 183.21333642759728,
            "unit": "iter/sec",
            "range": "stddev: 0.0002732509541695403",
            "extra": "mean: 5.458117948718119 msec\nrounds: 195"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 248.91553932167085,
            "unit": "iter/sec",
            "range": "stddev: 0.0001650988462845889",
            "extra": "mean: 4.017426966292011 msec\nrounds: 267"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 347.36039821665486,
            "unit": "iter/sec",
            "range": "stddev: 0.00010275036791850914",
            "extra": "mean: 2.8788543689320685 msec\nrounds: 412"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 351.55052283228207,
            "unit": "iter/sec",
            "range": "stddev: 0.00009813045193588726",
            "extra": "mean: 2.8445413533834527 msec\nrounds: 399"
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
          "id": "7893c91422060f8c92dbb9e6bc24b5bf4ef57276",
          "message": "Merge pull request #794 from TeoZosa/dependabot/pip/pytest-7.2.1",
          "timestamp": "2023-01-16T02:35:42Z",
          "tree_id": "74deb5effdd1883ba09e99e2d4f5948abdf1e1c8",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/7893c91422060f8c92dbb9e6bc24b5bf4ef57276"
        },
        "date": 1673837049402,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 138.61694938748664,
            "unit": "iter/sec",
            "range": "stddev: 0.0005199796778573697",
            "extra": "mean: 7.214124999999984 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 167.96593255673616,
            "unit": "iter/sec",
            "range": "stddev: 0.0003538427092248626",
            "extra": "mean: 5.95358823529418 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 218.02244326757926,
            "unit": "iter/sec",
            "range": "stddev: 0.00035948112701413547",
            "extra": "mean: 4.58668376068375 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 328.92183856220345,
            "unit": "iter/sec",
            "range": "stddev: 0.00020301983653702997",
            "extra": "mean: 3.040235955056194 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 129.17103086907176,
            "unit": "iter/sec",
            "range": "stddev: 0.00036714694373320974",
            "extra": "mean: 7.741673913043272 msec\nrounds: 138"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 154.6381731841521,
            "unit": "iter/sec",
            "range": "stddev: 0.00043651082682756267",
            "extra": "mean: 6.466708571428492 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 212.0305791219995,
            "unit": "iter/sec",
            "range": "stddev: 0.00031177699094761454",
            "extra": "mean: 4.716300847457544 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 308.0091491475098,
            "unit": "iter/sec",
            "range": "stddev: 0.0002580690462053676",
            "extra": "mean: 3.2466568047337008 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.160454788532563,
            "unit": "iter/sec",
            "range": "stddev: 0.0024867436340555455",
            "extra": "mean: 89.6020833333339 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.38916881927093,
            "unit": "iter/sec",
            "range": "stddev: 0.005348719182281078",
            "extra": "mean: 96.25409090909122 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 167.06518674755037,
            "unit": "iter/sec",
            "range": "stddev: 0.0005357270601565867",
            "extra": "mean: 5.985687500000132 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 233.90135815136009,
            "unit": "iter/sec",
            "range": "stddev: 0.00035304037402001336",
            "extra": "mean: 4.275306513410192 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 320.3644165617858,
            "unit": "iter/sec",
            "range": "stddev: 0.0005529219809564428",
            "extra": "mean: 3.1214452926208143 msec\nrounds: 393"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 301.25523012552406,
            "unit": "iter/sec",
            "range": "stddev: 0.0003740470212701172",
            "extra": "mean: 3.3194444444444327 msec\nrounds: 396"
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
          "id": "5fdbc05d97e5754189f43e0959acb4fbf4257426",
          "message": ":bookmark: Bump version number to `0.20.0`",
          "timestamp": "2023-01-16T20:40:25+09:00",
          "tree_id": "0cc06357aaa58f6467620b400b1df6728d8f8338",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/5fdbc05d97e5754189f43e0959acb4fbf4257426"
        },
        "date": 1673869436071,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 139.12311414605597,
            "unit": "iter/sec",
            "range": "stddev: 0.000397231424266925",
            "extra": "mean: 7.187878205128211 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 172.88556876184154,
            "unit": "iter/sec",
            "range": "stddev: 0.0005939714741441329",
            "extra": "mean: 5.784172774869079 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 228.40316320811584,
            "unit": "iter/sec",
            "range": "stddev: 0.000373246805537313",
            "extra": "mean: 4.378223076923073 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 335.2542329291264,
            "unit": "iter/sec",
            "range": "stddev: 0.00014181811943624753",
            "extra": "mean: 2.982810958904142 msec\nrounds: 365"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 136.20136316463115,
            "unit": "iter/sec",
            "range": "stddev: 0.000248831699876726",
            "extra": "mean: 7.3420704225351 msec\nrounds: 142"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 161.43337822808095,
            "unit": "iter/sec",
            "range": "stddev: 0.00034144391535708264",
            "extra": "mean: 6.194505813953488 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 231.77057394821935,
            "unit": "iter/sec",
            "range": "stddev: 0.00015362217876163558",
            "extra": "mean: 4.314611570247971 msec\nrounds: 242"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 330.4068724629351,
            "unit": "iter/sec",
            "range": "stddev: 0.00016373666365259804",
            "extra": "mean: 3.0265714285715393 msec\nrounds: 357"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.168141016393909,
            "unit": "iter/sec",
            "range": "stddev: 0.001987290593122648",
            "extra": "mean: 89.5404166666666 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.047686062154314,
            "unit": "iter/sec",
            "range": "stddev: 0.005675988524546076",
            "extra": "mean: 90.51669230769204 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 192.70589302178868,
            "unit": "iter/sec",
            "range": "stddev: 0.00033906050105396803",
            "extra": "mean: 5.189254901960538 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 251.99109754078984,
            "unit": "iter/sec",
            "range": "stddev: 0.0001930400272661354",
            "extra": "mean: 3.9683941605839066 msec\nrounds: 274"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 345.88659702247145,
            "unit": "iter/sec",
            "range": "stddev: 0.00014012309891870198",
            "extra": "mean: 2.8911209876543214 msec\nrounds: 405"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 343.42051801052884,
            "unit": "iter/sec",
            "range": "stddev: 0.00021859682747400898",
            "extra": "mean: 2.911881927710974 msec\nrounds: 415"
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
          "id": "f2912cddeaba16d0a61f980cd5f39a6306f17309",
          "message": "Merge pull request #796 from TeoZosa/dependabot/github_actions/pypa/cibuildwheel-2.12.0",
          "timestamp": "2023-01-17T17:24:28Z",
          "tree_id": "43a431371c4dde5e5f50252490ae05527065795b",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/f2912cddeaba16d0a61f980cd5f39a6306f17309"
        },
        "date": 1673977426876,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 132.22231330870505,
            "unit": "iter/sec",
            "range": "stddev: 0.00048167127209574614",
            "extra": "mean: 7.56301999999998 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 162.12842192300485,
            "unit": "iter/sec",
            "range": "stddev: 0.0006661807283681883",
            "extra": "mean: 6.167950000000014 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 220.19450821997742,
            "unit": "iter/sec",
            "range": "stddev: 0.0002583609200347598",
            "extra": "mean: 4.541439330544002 msec\nrounds: 239"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 332.0728441045776,
            "unit": "iter/sec",
            "range": "stddev: 0.00011140994191135106",
            "extra": "mean: 3.0113874643874112 msec\nrounds: 351"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 126.3482030126805,
            "unit": "iter/sec",
            "range": "stddev: 0.0005987367902836619",
            "extra": "mean: 7.914635714285849 msec\nrounds: 140"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.83088752606213,
            "unit": "iter/sec",
            "range": "stddev: 0.0005411557975394775",
            "extra": "mean: 6.417213017751399 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 218.2375029228276,
            "unit": "iter/sec",
            "range": "stddev: 0.00017284043773556753",
            "extra": "mean: 4.5821638655461365 msec\nrounds: 238"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 310.7664375749106,
            "unit": "iter/sec",
            "range": "stddev: 0.00038587902837613206",
            "extra": "mean: 3.2178507042252558 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.631574753716253,
            "unit": "iter/sec",
            "range": "stddev: 0.012418932963971743",
            "extra": "mean: 103.82518181818186 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.24816792647965,
            "unit": "iter/sec",
            "range": "stddev: 0.006457465087483057",
            "extra": "mean: 97.5784166666666 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 176.13796074223015,
            "unit": "iter/sec",
            "range": "stddev: 0.00036882780874614374",
            "extra": "mean: 5.677367875647512 msec\nrounds: 193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 242.641501365187,
            "unit": "iter/sec",
            "range": "stddev: 0.00018671316420690353",
            "extra": "mean: 4.121306513410303 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 281.98796618105325,
            "unit": "iter/sec",
            "range": "stddev: 0.000264690515269992",
            "extra": "mean: 3.5462506203471813 msec\nrounds: 403"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 284.05946032877966,
            "unit": "iter/sec",
            "range": "stddev: 0.0003311092407780139",
            "extra": "mean: 3.520389705882591 msec\nrounds: 408"
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
          "id": "b74d1765eb1c51a41f7793f721ceff1260a9765d",
          "message": "Merge pull request #797 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.3.3",
          "timestamp": "2023-01-17T17:30:17Z",
          "tree_id": "d8e2cf75dfe088e056c58575ae64ed27b69f04e6",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/b74d1765eb1c51a41f7793f721ceff1260a9765d"
        },
        "date": 1673980946950,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.46579944249895,
            "unit": "iter/sec",
            "range": "stddev: 0.0006168154542380814",
            "extra": "mean: 8.813228346456677 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.83926838592075,
            "unit": "iter/sec",
            "range": "stddev: 0.0004875574617199493",
            "extra": "mean: 7.2548266666666565 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 180.75522820804272,
            "unit": "iter/sec",
            "range": "stddev: 0.00042672105182833543",
            "extra": "mean: 5.532343434343355 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 265.4811508382908,
            "unit": "iter/sec",
            "range": "stddev: 0.00011852790268525036",
            "extra": "mean: 3.7667457627118606 msec\nrounds: 295"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 104.03765620349475,
            "unit": "iter/sec",
            "range": "stddev: 0.0006171336682232067",
            "extra": "mean: 9.611904347826023 msec\nrounds: 115"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 134.3487862426836,
            "unit": "iter/sec",
            "range": "stddev: 0.0002354409482702506",
            "extra": "mean: 7.443312500000039 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 169.16609573109116,
            "unit": "iter/sec",
            "range": "stddev: 0.000548699281947733",
            "extra": "mean: 5.911350000000084 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 250.17984540168487,
            "unit": "iter/sec",
            "range": "stddev: 0.0004101514415683092",
            "extra": "mean: 3.9971245421245487 msec\nrounds: 273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.342762162152969,
            "unit": "iter/sec",
            "range": "stddev: 0.0026759602796350376",
            "extra": "mean: 107.03472727272741 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 8.804576266560305,
            "unit": "iter/sec",
            "range": "stddev: 0.003214450326261371",
            "extra": "mean: 113.57730000000004 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 151.27368928383862,
            "unit": "iter/sec",
            "range": "stddev: 0.0003046806667926719",
            "extra": "mean: 6.610534883721087 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 201.21182324315575,
            "unit": "iter/sec",
            "range": "stddev: 0.0001586347745312366",
            "extra": "mean: 4.969886877827967 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 269.07712220397383,
            "unit": "iter/sec",
            "range": "stddev: 0.0003277242877446398",
            "extra": "mean: 3.7164066265059517 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 278.9695521143718,
            "unit": "iter/sec",
            "range": "stddev: 0.00013708587468445906",
            "extra": "mean: 3.584620588235452 msec\nrounds: 340"
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
          "id": "25ff2fa2bbd35cc89b0fe68d6d4e047ff86107da",
          "message": "Merge pull request #799 from TeoZosa/dependabot/pip/docs/sphinx-autoapi-2.0.1",
          "timestamp": "2023-01-17T17:40:28Z",
          "tree_id": "f044f38c36704ec40c110d85405dc4c35ac75fff",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/25ff2fa2bbd35cc89b0fe68d6d4e047ff86107da"
        },
        "date": 1674006506236,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 137.47801460460056,
            "unit": "iter/sec",
            "range": "stddev: 0.0007170082736733993",
            "extra": "mean: 7.273890322580612 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 170.76334792719152,
            "unit": "iter/sec",
            "range": "stddev: 0.0002735692384839873",
            "extra": "mean: 5.856057591623061 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 227.72657119373642,
            "unit": "iter/sec",
            "range": "stddev: 0.00018072900068160947",
            "extra": "mean: 4.391231092436985 msec\nrounds: 238"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 339.36596266974493,
            "unit": "iter/sec",
            "range": "stddev: 0.00020121078979359178",
            "extra": "mean: 2.9466714697406267 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 129.33082296633873,
            "unit": "iter/sec",
            "range": "stddev: 0.0006418779503460321",
            "extra": "mean: 7.73210884353742 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 161.59991431446278,
            "unit": "iter/sec",
            "range": "stddev: 0.000236375586206626",
            "extra": "mean: 6.188122093023304 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 219.68844342892194,
            "unit": "iter/sec",
            "range": "stddev: 0.0003200825498593844",
            "extra": "mean: 4.551900793650715 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 341.6887754763982,
            "unit": "iter/sec",
            "range": "stddev: 0.00015059525580557546",
            "extra": "mean: 2.9266398891966943 msec\nrounds: 361"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.833873385506724,
            "unit": "iter/sec",
            "range": "stddev: 0.0029912456420219547",
            "extra": "mean: 92.3030909090902 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.058878390122338,
            "unit": "iter/sec",
            "range": "stddev: 0.0025633922999279387",
            "extra": "mean: 90.42508333333228 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 186.88024408848588,
            "unit": "iter/sec",
            "range": "stddev: 0.0003312018976654554",
            "extra": "mean: 5.351020408163157 msec\nrounds: 196"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 258.68893336522876,
            "unit": "iter/sec",
            "range": "stddev: 0.0003460402353200836",
            "extra": "mean: 3.8656466165413996 msec\nrounds: 266"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 356.17950786074675,
            "unit": "iter/sec",
            "range": "stddev: 0.00012336110208053825",
            "extra": "mean: 2.807573085846825 msec\nrounds: 431"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 349.6402638735071,
            "unit": "iter/sec",
            "range": "stddev: 0.00011597137186174759",
            "extra": "mean: 2.8600825000000007 msec\nrounds: 400"
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
          "id": "aad6a291735adda52239a3478b2cdddcacb4feab",
          "message": "Merge pull request #800 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.3.4",
          "timestamp": "2023-01-18T14:59:50Z",
          "tree_id": "97b6f4679c90952fab8e9b4cef397201787dce0c",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/aad6a291735adda52239a3478b2cdddcacb4feab"
        },
        "date": 1674055383380,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 140.40799908165525,
            "unit": "iter/sec",
            "range": "stddev: 0.00019819717180051845",
            "extra": "mean: 7.122101351351378 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 170.74426869951287,
            "unit": "iter/sec",
            "range": "stddev: 0.0002637896551257862",
            "extra": "mean: 5.856711956521753 msec\nrounds: 184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 226.59135201727906,
            "unit": "iter/sec",
            "range": "stddev: 0.00016936331867535375",
            "extra": "mean: 4.413231092437029 msec\nrounds: 238"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 330.8012512346486,
            "unit": "iter/sec",
            "range": "stddev: 0.00012789946914703988",
            "extra": "mean: 3.0229631728045248 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 131.98412012643726,
            "unit": "iter/sec",
            "range": "stddev: 0.00036701361165164667",
            "extra": "mean: 7.576669064748295 msec\nrounds: 139"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 163.03576429249088,
            "unit": "iter/sec",
            "range": "stddev: 0.0001474521666675459",
            "extra": "mean: 6.133623529411443 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 222.5300344827259,
            "unit": "iter/sec",
            "range": "stddev: 0.0001621274662368212",
            "extra": "mean: 4.493775423728818 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 327.4143981189227,
            "unit": "iter/sec",
            "range": "stddev: 0.00011659519532493779",
            "extra": "mean: 3.0542334293948254 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.650260531998317,
            "unit": "iter/sec",
            "range": "stddev: 0.0034775090473276667",
            "extra": "mean: 93.8944166666662 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.908366990190704,
            "unit": "iter/sec",
            "range": "stddev: 0.0030142189135975695",
            "extra": "mean: 91.67274999999957 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 182.91758283418085,
            "unit": "iter/sec",
            "range": "stddev: 0.00026378329542068896",
            "extra": "mean: 5.466943005181323 msec\nrounds: 193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 252.93057150899529,
            "unit": "iter/sec",
            "range": "stddev: 0.00014046789978366245",
            "extra": "mean: 3.953654135338225 msec\nrounds: 266"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 300.7985789705008,
            "unit": "iter/sec",
            "range": "stddev: 0.0002330766834362545",
            "extra": "mean: 3.3244837905237232 msec\nrounds: 401"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 297.98443329321304,
            "unit": "iter/sec",
            "range": "stddev: 0.00031720894436651785",
            "extra": "mean: 3.3558799999999067 msec\nrounds: 400"
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
          "id": "b4775494482919280cd578ae347cebc834ca3696",
          "message": "Merge pull request #801 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.3.5",
          "timestamp": "2023-01-19T14:58:01Z",
          "tree_id": "f10bcf62d4300770d86030146b7c3c7de08214b8",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/b4775494482919280cd578ae347cebc834ca3696"
        },
        "date": 1674140968320,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 140.16920021712153,
            "unit": "iter/sec",
            "range": "stddev: 0.0009421033496790663",
            "extra": "mean: 7.13423489932884 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 167.92841138810286,
            "unit": "iter/sec",
            "range": "stddev: 0.00034699978565033056",
            "extra": "mean: 5.954918478260829 msec\nrounds: 184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 225.57852869944114,
            "unit": "iter/sec",
            "range": "stddev: 0.00029810974865398214",
            "extra": "mean: 4.433046025104593 msec\nrounds: 239"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.3863758621079,
            "unit": "iter/sec",
            "range": "stddev: 0.00030819325730448496",
            "extra": "mean: 3.1408379120879744 msec\nrounds: 364"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 127.07714399565084,
            "unit": "iter/sec",
            "range": "stddev: 0.0003988707010111781",
            "extra": "mean: 7.869235714285683 msec\nrounds: 140"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.16289348762032,
            "unit": "iter/sec",
            "range": "stddev: 0.0005162270037172552",
            "extra": "mean: 6.615380116959036 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 234.26405897669835,
            "unit": "iter/sec",
            "range": "stddev: 0.00025216769501027863",
            "extra": "mean: 4.268687242798382 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 321.53534470558054,
            "unit": "iter/sec",
            "range": "stddev: 0.0002186168034461493",
            "extra": "mean: 3.110077994429096 msec\nrounds: 359"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.820165978659888,
            "unit": "iter/sec",
            "range": "stddev: 0.006808910163761815",
            "extra": "mean: 101.83127272727272 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.482250215124377,
            "unit": "iter/sec",
            "range": "stddev: 0.003933543218847593",
            "extra": "mean: 95.39936363636349 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 188.7398757994938,
            "unit": "iter/sec",
            "range": "stddev: 0.0002574482707395497",
            "extra": "mean: 5.298297435897125 msec\nrounds: 195"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 244.87583804705667,
            "unit": "iter/sec",
            "range": "stddev: 0.00021648062966675912",
            "extra": "mean: 4.083702205882128 msec\nrounds: 272"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 351.670170213657,
            "unit": "iter/sec",
            "range": "stddev: 0.00016376664861779929",
            "extra": "mean: 2.843573566084524 msec\nrounds: 401"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 333.25458303282204,
            "unit": "iter/sec",
            "range": "stddev: 0.00047581126239951404",
            "extra": "mean: 3.0007089201876354 msec\nrounds: 426"
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
          "id": "e2290ce3594ab8243dec01de1220eae04a6bc2e7",
          "message": "Merge pull request #802 from TeoZosa/dependabot/pip/rich-13.2.0",
          "timestamp": "2023-01-20T14:48:00Z",
          "tree_id": "1faae6234780c7b658d95a413191b417733c4b26",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/e2290ce3594ab8243dec01de1220eae04a6bc2e7"
        },
        "date": 1674226328385,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 138.6439873638575,
            "unit": "iter/sec",
            "range": "stddev: 0.0005415798471306545",
            "extra": "mean: 7.212718120805328 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 166.11805576871996,
            "unit": "iter/sec",
            "range": "stddev: 0.000485163415190466",
            "extra": "mean: 6.019815217391318 msec\nrounds: 184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 215.23549762623506,
            "unit": "iter/sec",
            "range": "stddev: 0.0004606126742588273",
            "extra": "mean: 4.646073770491796 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 329.232803863745,
            "unit": "iter/sec",
            "range": "stddev: 0.00019152282234080443",
            "extra": "mean: 3.037364406779636 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.90442580989675,
            "unit": "iter/sec",
            "range": "stddev: 0.0008825167124417348",
            "extra": "mean: 8.006121428571232 msec\nrounds: 140"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 152.40123917972545,
            "unit": "iter/sec",
            "range": "stddev: 0.0006765855482882463",
            "extra": "mean: 6.5616264367818475 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 213.67351569750232,
            "unit": "iter/sec",
            "range": "stddev: 0.00042912477107548674",
            "extra": "mean: 4.680037190082557 msec\nrounds: 242"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 328.89405346282206,
            "unit": "iter/sec",
            "range": "stddev: 0.00015881778496372855",
            "extra": "mean: 3.040492795389015 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.684550229406192,
            "unit": "iter/sec",
            "range": "stddev: 0.0041424786707816375",
            "extra": "mean: 93.59308333333338 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.427501492436056,
            "unit": "iter/sec",
            "range": "stddev: 0.006106449781322643",
            "extra": "mean: 95.90025000000087 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 171.526276922852,
            "unit": "iter/sec",
            "range": "stddev: 0.0004941705464609305",
            "extra": "mean: 5.830010526315881 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 240.73472237268592,
            "unit": "iter/sec",
            "range": "stddev: 0.0003900332643472893",
            "extra": "mean: 4.153949999999923 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 331.6275382830722,
            "unit": "iter/sec",
            "range": "stddev: 0.00021747034451276536",
            "extra": "mean: 3.0154311224492316 msec\nrounds: 392"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 319.87987102047396,
            "unit": "iter/sec",
            "range": "stddev: 0.00020048609350657403",
            "extra": "mean: 3.1261735751293798 msec\nrounds: 386"
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
          "id": "1b58b7124f9502774e264e78c566737bac85da81",
          "message": "Merge pull request #803 from TeoZosa/dependabot/pip/python-dotenv-0.21.1",
          "timestamp": "2023-01-23T15:20:52Z",
          "tree_id": "3e252282c997bd07abceaf7f67f40180df8dd296",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/1b58b7124f9502774e264e78c566737bac85da81"
        },
        "date": 1674488311346,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 125.74353669303497,
            "unit": "iter/sec",
            "range": "stddev: 0.00062370890581217",
            "extra": "mean: 7.952695035460942 msec\nrounds: 141"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.13755091272535,
            "unit": "iter/sec",
            "range": "stddev: 0.0005037827417763855",
            "extra": "mean: 6.445892655367256 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 212.81960087696729,
            "unit": "iter/sec",
            "range": "stddev: 0.00017247817657118714",
            "extra": "mean: 4.698815315315378 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 304.8875968778075,
            "unit": "iter/sec",
            "range": "stddev: 0.00019360085859088295",
            "extra": "mean: 3.279897280966726 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.8625590067408,
            "unit": "iter/sec",
            "range": "stddev: 0.0009006136055645336",
            "extra": "mean: 8.55706060606048 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.36826799921613,
            "unit": "iter/sec",
            "range": "stddev: 0.0005960422947495689",
            "extra": "mean: 6.650339285714278 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.2286370318719,
            "unit": "iter/sec",
            "range": "stddev: 0.0004009849007608751",
            "extra": "mean: 4.9694716157204475 msec\nrounds: 229"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 312.7195268417528,
            "unit": "iter/sec",
            "range": "stddev: 0.00022866685207586422",
            "extra": "mean: 3.1977536231884733 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.13381238628248,
            "unit": "iter/sec",
            "range": "stddev: 0.006925360429084041",
            "extra": "mean: 98.67954545454567 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.110805233720344,
            "unit": "iter/sec",
            "range": "stddev: 0.0050818156293700786",
            "extra": "mean: 98.90409090909199 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 158.12124462044645,
            "unit": "iter/sec",
            "range": "stddev: 0.0007529407101464762",
            "extra": "mean: 6.32426086956497 msec\nrounds: 184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 229.977838499185,
            "unit": "iter/sec",
            "range": "stddev: 0.0002884044146235904",
            "extra": "mean: 4.348245059288805 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 251.00182613895316,
            "unit": "iter/sec",
            "range": "stddev: 0.0009218825658816875",
            "extra": "mean: 3.984034759358307 msec\nrounds: 374"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 279.31513730364367,
            "unit": "iter/sec",
            "range": "stddev: 0.0002792667922333186",
            "extra": "mean: 3.5801854838712135 msec\nrounds: 372"
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
          "id": "21a03fbbeddf74d74ebc105abcc6794041e946b2",
          "message": "Merge pull request #804 from TeoZosa/dependabot/pip/sentry-sdk-1.14.0",
          "timestamp": "2023-01-24T11:45:43Z",
          "tree_id": "0a37f31c2b04df6d10e4adb053c1ae6fe73a8b57",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/21a03fbbeddf74d74ebc105abcc6794041e946b2"
        },
        "date": 1674561063030,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 131.25737167281025,
            "unit": "iter/sec",
            "range": "stddev: 0.0009026662455271008",
            "extra": "mean: 7.618619718309874 msec\nrounds: 142"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 170.24094266454225,
            "unit": "iter/sec",
            "range": "stddev: 0.0002604498764091043",
            "extra": "mean: 5.874027624309436 msec\nrounds: 181"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 226.84582741303365,
            "unit": "iter/sec",
            "range": "stddev: 0.00017378203069211992",
            "extra": "mean: 4.408280334728096 msec\nrounds: 239"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 325.7381459056306,
            "unit": "iter/sec",
            "range": "stddev: 0.0003151414178593144",
            "extra": "mean: 3.069950549450568 msec\nrounds: 364"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 131.68543641376746,
            "unit": "iter/sec",
            "range": "stddev: 0.00036650578313759204",
            "extra": "mean: 7.593854166666618 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 159.21352180310075,
            "unit": "iter/sec",
            "range": "stddev: 0.000596521531613499",
            "extra": "mean: 6.280873563218451 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 208.74877569283737,
            "unit": "iter/sec",
            "range": "stddev: 0.00042485989011883214",
            "extra": "mean: 4.790447257383901 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 326.46387498902317,
            "unit": "iter/sec",
            "range": "stddev: 0.0001358739639028392",
            "extra": "mean: 3.0631260504201987 msec\nrounds: 357"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.439681418885515,
            "unit": "iter/sec",
            "range": "stddev: 0.0037919480026165926",
            "extra": "mean: 95.78836363636417 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.396022292852273,
            "unit": "iter/sec",
            "range": "stddev: 0.008117765003655094",
            "extra": "mean: 96.19063636363539 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 184.35399672980708,
            "unit": "iter/sec",
            "range": "stddev: 0.00021844273312120554",
            "extra": "mean: 5.424346733668162 msec\nrounds: 199"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 247.90311470595643,
            "unit": "iter/sec",
            "range": "stddev: 0.000299456269778966",
            "extra": "mean: 4.033833948339547 msec\nrounds: 271"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 335.74168729213966,
            "unit": "iter/sec",
            "range": "stddev: 0.0001746357573895726",
            "extra": "mean: 2.978480295566835 msec\nrounds: 406"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 331.2654580544894,
            "unit": "iter/sec",
            "range": "stddev: 0.00024591982865033",
            "extra": "mean: 3.0187270531402985 msec\nrounds: 414"
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
          "id": "8ad344421dbb24e2c1279d3a8777887e0a192803",
          "message": "Merge pull request #805 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.4.2",
          "timestamp": "2023-01-26T15:10:42Z",
          "tree_id": "ba9242eee200fd9b59cddd781c0d61916e934459",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/8ad344421dbb24e2c1279d3a8777887e0a192803"
        },
        "date": 1674746149096,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 147.38788471587722,
            "unit": "iter/sec",
            "range": "stddev: 0.00034248943411103273",
            "extra": "mean: 6.784818181818142 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 182.779667245309,
            "unit": "iter/sec",
            "range": "stddev: 0.0003008190583546822",
            "extra": "mean: 5.471068062827238 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 236.167279664164,
            "unit": "iter/sec",
            "range": "stddev: 0.00028186784423833944",
            "extra": "mean: 4.234286821705471 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 357.18223739330415,
            "unit": "iter/sec",
            "range": "stddev: 0.00027517699393799785",
            "extra": "mean: 2.7996912928759943 msec\nrounds: 379"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 142.02647485617172,
            "unit": "iter/sec",
            "range": "stddev: 0.0003879793848820043",
            "extra": "mean: 7.040940789473838 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 169.06094737078334,
            "unit": "iter/sec",
            "range": "stddev: 0.00040627235186254534",
            "extra": "mean: 5.915026595744828 msec\nrounds: 188"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 234.09447831953457,
            "unit": "iter/sec",
            "range": "stddev: 0.000370423631285328",
            "extra": "mean: 4.271779527559034 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 358.35664578180786,
            "unit": "iter/sec",
            "range": "stddev: 0.00014220655133729778",
            "extra": "mean: 2.7905161290321616 msec\nrounds: 372"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.218985976267552,
            "unit": "iter/sec",
            "range": "stddev: 0.004048681977683013",
            "extra": "mean: 89.13461538461522 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.750583913631424,
            "unit": "iter/sec",
            "range": "stddev: 0.0022328335079799494",
            "extra": "mean: 85.10215384615367 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 183.70707134873822,
            "unit": "iter/sec",
            "range": "stddev: 0.0005570080660176393",
            "extra": "mean: 5.443448598130779 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 246.36042352724485,
            "unit": "iter/sec",
            "range": "stddev: 0.00035448322873267836",
            "extra": "mean: 4.059093525179829 msec\nrounds: 278"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 349.7252159017955,
            "unit": "iter/sec",
            "range": "stddev: 0.0003855255583255746",
            "extra": "mean: 2.8593877551020075 msec\nrounds: 441"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 343.91066297502704,
            "unit": "iter/sec",
            "range": "stddev: 0.0001889735190278318",
            "extra": "mean: 2.907731884057968 msec\nrounds: 414"
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
          "id": "2cddfdd81c1bf220fc141176f66d42bd81c679a5",
          "message": "Merge pull request #806 from TeoZosa/dependabot/pip/rich-13.3.1",
          "timestamp": "2023-01-30T15:39:59Z",
          "tree_id": "bf2f1ba11c00a8a104b6e079d97fbecd7bdc7144",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/2cddfdd81c1bf220fc141176f66d42bd81c679a5"
        },
        "date": 1675094342619,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 139.83911842375653,
            "unit": "iter/sec",
            "range": "stddev: 0.0003744368024375578",
            "extra": "mean: 7.15107482993196 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 171.59011528417943,
            "unit": "iter/sec",
            "range": "stddev: 0.0003392895486545727",
            "extra": "mean: 5.827841530054614 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 225.5193103278362,
            "unit": "iter/sec",
            "range": "stddev: 0.00022988931014506137",
            "extra": "mean: 4.4342100840336265 msec\nrounds: 238"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 322.7598078521669,
            "unit": "iter/sec",
            "range": "stddev: 0.0003114614520436057",
            "extra": "mean: 3.098279202279202 msec\nrounds: 351"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 130.13637742481956,
            "unit": "iter/sec",
            "range": "stddev: 0.00046503353324724877",
            "extra": "mean: 7.684246478873326 msec\nrounds: 142"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 159.95372501536988,
            "unit": "iter/sec",
            "range": "stddev: 0.0006231095511078966",
            "extra": "mean: 6.2518081395347975 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 217.16364536997625,
            "unit": "iter/sec",
            "range": "stddev: 0.0002279993936030765",
            "extra": "mean: 4.604822314049505 msec\nrounds: 242"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 330.8855324060923,
            "unit": "iter/sec",
            "range": "stddev: 0.00024882044730289933",
            "extra": "mean: 3.0221931818182686 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.576808799810411,
            "unit": "iter/sec",
            "range": "stddev: 0.012668855042320005",
            "extra": "mean: 104.41891666666632 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.691775707929146,
            "unit": "iter/sec",
            "range": "stddev: 0.004187946488181294",
            "extra": "mean: 93.5298333333338 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 181.49673682031755,
            "unit": "iter/sec",
            "range": "stddev: 0.0002831803298271893",
            "extra": "mean: 5.509740932642793 msec\nrounds: 193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 257.1099671016005,
            "unit": "iter/sec",
            "range": "stddev: 0.00014623558511269398",
            "extra": "mean: 3.889386363636523 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 303.0840271039707,
            "unit": "iter/sec",
            "range": "stddev: 0.0010708161519180186",
            "extra": "mean: 3.299415048543477 msec\nrounds: 412"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 307.9680788398442,
            "unit": "iter/sec",
            "range": "stddev: 0.0006513481150046045",
            "extra": "mean: 3.247089775560928 msec\nrounds: 401"
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
          "id": "37be49d6d2c5d448f18cfed72d7fb75b824a042d",
          "message": "Merge pull request #807 from TeoZosa/dependabot/pip/xdoctest-1.1.1",
          "timestamp": "2023-01-30T15:56:02Z",
          "tree_id": "08f4bddf144d271c20b7f813167542a11484ef19",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/37be49d6d2c5d448f18cfed72d7fb75b824a042d"
        },
        "date": 1675101889689,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.22291111182476,
            "unit": "iter/sec",
            "range": "stddev: 0.0005516941306183367",
            "extra": "mean: 9.155588235294136 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.89620874087058,
            "unit": "iter/sec",
            "range": "stddev: 0.000450652301227913",
            "extra": "mean: 7.304804195804207 msec\nrounds: 143"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 175.51888344259572,
            "unit": "iter/sec",
            "range": "stddev: 0.0002964420556652339",
            "extra": "mean: 5.697392670157082 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 258.3603804356603,
            "unit": "iter/sec",
            "range": "stddev: 0.00022434221139511806",
            "extra": "mean: 3.870562499999998 msec\nrounds: 272"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 106.25019055740636,
            "unit": "iter/sec",
            "range": "stddev: 0.0004967855770196085",
            "extra": "mean: 9.41174782608701 msec\nrounds: 115"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 130.18702295755133,
            "unit": "iter/sec",
            "range": "stddev: 0.00041035256593068605",
            "extra": "mean: 7.681257142857158 msec\nrounds: 140"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 178.2815710060007,
            "unit": "iter/sec",
            "range": "stddev: 0.0003497821420145307",
            "extra": "mean: 5.60910471204195 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 256.8076719250282,
            "unit": "iter/sec",
            "range": "stddev: 0.00017975284101603582",
            "extra": "mean: 3.893964664310876 msec\nrounds: 283"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.139748583795878,
            "unit": "iter/sec",
            "range": "stddev: 0.0017239878060923905",
            "extra": "mean: 109.41220000000094 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 9.259576485490774,
            "unit": "iter/sec",
            "range": "stddev: 0.0010745950193240487",
            "extra": "mean: 107.99629999999922 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 137.90105860882073,
            "unit": "iter/sec",
            "range": "stddev: 0.0004838382276137451",
            "extra": "mean: 7.251575949367192 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 200.2798328455119,
            "unit": "iter/sec",
            "range": "stddev: 0.00028289844086129426",
            "extra": "mean: 4.993013953488574 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 278.12708542315676,
            "unit": "iter/sec",
            "range": "stddev: 0.00014842609391078",
            "extra": "mean: 3.5954786585367944 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 262.3347311188954,
            "unit": "iter/sec",
            "range": "stddev: 0.000130614790627346",
            "extra": "mean: 3.811923780487837 msec\nrounds: 328"
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
          "id": "4db35477b05e8eeb089719010546f3d070b5178d",
          "message": "Merge pull request #809 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.4.3",
          "timestamp": "2023-01-31T15:42:43Z",
          "tree_id": "278a85b0eecd673cf832b7967610786eca2d7490",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/4db35477b05e8eeb089719010546f3d070b5178d"
        },
        "date": 1675180683863,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 149.43160982764886,
            "unit": "iter/sec",
            "range": "stddev: 0.00024358234217359905",
            "extra": "mean: 6.692024539877327 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 186.76671201054285,
            "unit": "iter/sec",
            "range": "stddev: 0.0002468680556378207",
            "extra": "mean: 5.354273195876312 msec\nrounds: 194"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 243.4351486905577,
            "unit": "iter/sec",
            "range": "stddev: 0.00024735523331325196",
            "extra": "mean: 4.1078702290076805 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 362.0132346158189,
            "unit": "iter/sec",
            "range": "stddev: 0.00011757188377304932",
            "extra": "mean: 2.762329949238555 msec\nrounds: 394"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 140.56712445302352,
            "unit": "iter/sec",
            "range": "stddev: 0.0005943363177554672",
            "extra": "mean: 7.114038961038807 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 172.25502906803476,
            "unit": "iter/sec",
            "range": "stddev: 0.00044672974834539334",
            "extra": "mean: 5.805345744680898 msec\nrounds: 188"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 239.98794479160935,
            "unit": "iter/sec",
            "range": "stddev: 0.0003062773089928765",
            "extra": "mean: 4.166875968992268 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 348.0953946703719,
            "unit": "iter/sec",
            "range": "stddev: 0.00014695311076563488",
            "extra": "mean: 2.872775725593691 msec\nrounds: 379"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.637548550397794,
            "unit": "iter/sec",
            "range": "stddev: 0.0013193170495648656",
            "extra": "mean: 85.92875000000048 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.84580407951271,
            "unit": "iter/sec",
            "range": "stddev: 0.0020477686417793013",
            "extra": "mean: 84.41807692307671 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 191.51335108802553,
            "unit": "iter/sec",
            "range": "stddev: 0.0006140415151864745",
            "extra": "mean: 5.2215680751174816 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 271.1638727437467,
            "unit": "iter/sec",
            "range": "stddev: 0.00012271765757902885",
            "extra": "mean: 3.687806896551491 msec\nrounds: 290"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 368.6293934125926,
            "unit": "iter/sec",
            "range": "stddev: 0.00012882724165200383",
            "extra": "mean: 2.712751662970996 msec\nrounds: 451"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 362.65866316513916,
            "unit": "iter/sec",
            "range": "stddev: 0.00023117052136388742",
            "extra": "mean: 2.7574137931034146 msec\nrounds: 435"
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
          "id": "92422432cbcd7a8cba00f1d1dd3aa0c5e5f8a30b",
          "message": "Merge pull request #810 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.4.4",
          "timestamp": "2023-02-01T15:33:02Z",
          "tree_id": "4c11ca522c7a3fc711242b63a6c0ecea4d4e2308",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/92422432cbcd7a8cba00f1d1dd3aa0c5e5f8a30b"
        },
        "date": 1675266764039,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.12128396158494,
            "unit": "iter/sec",
            "range": "stddev: 0.0005002341014860126",
            "extra": "mean: 9.16411504424783 msec\nrounds: 113"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 127.51997887838115,
            "unit": "iter/sec",
            "range": "stddev: 0.0004325908407848669",
            "extra": "mean: 7.841908450704214 msec\nrounds: 142"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.55178865111313,
            "unit": "iter/sec",
            "range": "stddev: 0.00042001850468777413",
            "extra": "mean: 6.077114130434797 msec\nrounds: 184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 251.67065990259954,
            "unit": "iter/sec",
            "range": "stddev: 0.0001892777825578902",
            "extra": "mean: 3.9734468864468173 msec\nrounds: 273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 100.81578298577891,
            "unit": "iter/sec",
            "range": "stddev: 0.0004916539980463633",
            "extra": "mean: 9.919081818181784 msec\nrounds: 110"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 118.68742497740958,
            "unit": "iter/sec",
            "range": "stddev: 0.0005269175014908734",
            "extra": "mean: 8.425492424242377 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 168.6014372581548,
            "unit": "iter/sec",
            "range": "stddev: 0.0005132218583755667",
            "extra": "mean: 5.9311475409835674 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 257.47328350334453,
            "unit": "iter/sec",
            "range": "stddev: 0.00014445092289497034",
            "extra": "mean: 3.883898113207579 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 8.472651973958445,
            "unit": "iter/sec",
            "range": "stddev: 0.0017375880984857373",
            "extra": "mean: 118.02680000000016 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 8.629996660191264,
            "unit": "iter/sec",
            "range": "stddev: 0.0023444952761743003",
            "extra": "mean: 115.87490000000038 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 139.26917109774874,
            "unit": "iter/sec",
            "range": "stddev: 0.0004899274405940567",
            "extra": "mean: 7.180339999999934 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 187.2925665967637,
            "unit": "iter/sec",
            "range": "stddev: 0.0002973951711687785",
            "extra": "mean: 5.339240196077698 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 265.4364663167139,
            "unit": "iter/sec",
            "range": "stddev: 0.00016133601970610983",
            "extra": "mean: 3.7673798701298953 msec\nrounds: 308"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 256.7570022010016,
            "unit": "iter/sec",
            "range": "stddev: 0.0002153046367577695",
            "extra": "mean: 3.894733118971191 msec\nrounds: 311"
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
          "id": "c208d30f3322a7d7a4c193e4f56c877ebd26516b",
          "message": "Merge pull request #811 from TeoZosa/dependabot/pip/black-23.1.0\n\n⬆️ Bump black from 22.12.0 to 23.1.0",
          "timestamp": "2023-02-04T12:27:50+09:00",
          "tree_id": "08cc0e8e04ac2601cb34ec417e87ef43ee4ec2f5",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/c208d30f3322a7d7a4c193e4f56c877ebd26516b"
        },
        "date": 1675485743718,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 135.627799114217,
            "unit": "iter/sec",
            "range": "stddev: 0.00036818185612940693",
            "extra": "mean: 7.373119718309846 msec\nrounds: 142"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 172.3168627934221,
            "unit": "iter/sec",
            "range": "stddev: 0.00016997148900406225",
            "extra": "mean: 5.803262569832332 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 221.02703897443118,
            "unit": "iter/sec",
            "range": "stddev: 0.00016284865384147255",
            "extra": "mean: 4.524333333333403 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 340.57942141343426,
            "unit": "iter/sec",
            "range": "stddev: 0.0001380693220396107",
            "extra": "mean: 2.9361727019498507 msec\nrounds: 359"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 135.3291955701653,
            "unit": "iter/sec",
            "range": "stddev: 0.00018542991608577487",
            "extra": "mean: 7.389388489208312 msec\nrounds: 139"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 162.20027535881837,
            "unit": "iter/sec",
            "range": "stddev: 0.00032623185702603983",
            "extra": "mean: 6.1652176470589 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 226.38880826608633,
            "unit": "iter/sec",
            "range": "stddev: 0.0001120291282925039",
            "extra": "mean: 4.417179487179635 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 337.3145367276414,
            "unit": "iter/sec",
            "range": "stddev: 0.00034298392843410525",
            "extra": "mean: 2.964592067988556 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.006054247007135,
            "unit": "iter/sec",
            "range": "stddev: 0.003603697128287767",
            "extra": "mean: 90.85908333333255 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.964167318879888,
            "unit": "iter/sec",
            "range": "stddev: 0.001157800222863846",
            "extra": "mean: 83.58291666666713 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 184.16375841397888,
            "unit": "iter/sec",
            "range": "stddev: 0.0004800364281612719",
            "extra": "mean: 5.429950000000083 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 246.08906987312562,
            "unit": "iter/sec",
            "range": "stddev: 0.0004198475878285819",
            "extra": "mean: 4.063569343065756 msec\nrounds: 274"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 352.5795292325245,
            "unit": "iter/sec",
            "range": "stddev: 0.00019046596235440367",
            "extra": "mean: 2.8362395348837874 msec\nrounds: 430"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 342.06992499891754,
            "unit": "iter/sec",
            "range": "stddev: 0.00019431568866476071",
            "extra": "mean: 2.923378896882456 msec\nrounds: 417"
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
          "id": "02bc216e6c302dc80ec938ec9decab46fe9140ae",
          "message": "Merge pull request #808 from TeoZosa/dependabot/pip/dot-github/workflows/pip-23.0\n\n⬆️ Bump pip from 22.3.1 to 23.0 in /.github/workflows",
          "timestamp": "2023-02-05T16:00:21+09:00",
          "tree_id": "d5d4e2e838e130c700b441448e9e8b2b97bdddb3",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/02bc216e6c302dc80ec938ec9decab46fe9140ae"
        },
        "date": 1675580626629,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 139.83750116132214,
            "unit": "iter/sec",
            "range": "stddev: 0.0003593827023326731",
            "extra": "mean: 7.151157534246553 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 164.971886041087,
            "unit": "iter/sec",
            "range": "stddev: 0.0004635705097108565",
            "extra": "mean: 6.061638888888895 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 224.88296516323555,
            "unit": "iter/sec",
            "range": "stddev: 0.00019187938223467484",
            "extra": "mean: 4.446757446808526 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 336.8949323451115,
            "unit": "iter/sec",
            "range": "stddev: 0.00011868436862141068",
            "extra": "mean: 2.9682844827585915 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 125.53475564211203,
            "unit": "iter/sec",
            "range": "stddev: 0.0007890178401374652",
            "extra": "mean: 7.965921428571601 msec\nrounds: 140"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 163.01200151888742,
            "unit": "iter/sec",
            "range": "stddev: 0.00028148490923058576",
            "extra": "mean: 6.134517647058857 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 213.90843621963396,
            "unit": "iter/sec",
            "range": "stddev: 0.0004494540968149718",
            "extra": "mean: 4.67489743589745 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 330.7815439373642,
            "unit": "iter/sec",
            "range": "stddev: 0.00019593004002736378",
            "extra": "mean: 3.0231432748538025 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.82405498619928,
            "unit": "iter/sec",
            "range": "stddev: 0.002806544880032813",
            "extra": "mean: 92.3868181818186 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.312777961593524,
            "unit": "iter/sec",
            "range": "stddev: 0.0033057282915998115",
            "extra": "mean: 96.96708333333308 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 168.94148677128558,
            "unit": "iter/sec",
            "range": "stddev: 0.0005833609008436055",
            "extra": "mean: 5.919209183673212 msec\nrounds: 196"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 239.3350902983525,
            "unit": "iter/sec",
            "range": "stddev: 0.00034319161624602525",
            "extra": "mean: 4.178242307692578 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 323.9500785835316,
            "unit": "iter/sec",
            "range": "stddev: 0.00029563761807732734",
            "extra": "mean: 3.0868953771287533 msec\nrounds: 411"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 311.8196084391865,
            "unit": "iter/sec",
            "range": "stddev: 0.00036959149236201846",
            "extra": "mean: 3.206982412060298 msec\nrounds: 398"
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
          "id": "bf1d335a37c402c4ad753e4c2803a5f31c5db5df",
          "message": "Merge pull request #820 from TeoZosa/build/c-library/constrain-mypyc-version-to-lt-1.0\n\n💚 📌  Constrain `mypy` to <1.0 for C-compilation",
          "timestamp": "2023-02-11T14:27:46+09:00",
          "tree_id": "112b8aacdd0f9c72ccc8e01c95d29cc1277a08f0",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/bf1d335a37c402c4ad753e4c2803a5f31c5db5df"
        },
        "date": 1676093561585,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 126.76658925688382,
            "unit": "iter/sec",
            "range": "stddev: 0.0007162493704324193",
            "extra": "mean: 7.88851388888888 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 162.09058391072224,
            "unit": "iter/sec",
            "range": "stddev: 0.00042832979077888023",
            "extra": "mean: 6.169389830508534 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.24535747083942,
            "unit": "iter/sec",
            "range": "stddev: 0.0004688582437007816",
            "extra": "mean: 4.944489270386264 msec\nrounds: 233"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.74232593204374,
            "unit": "iter/sec",
            "range": "stddev: 0.00028027286502180205",
            "extra": "mean: 3.1373304347826125 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.32167552950172,
            "unit": "iter/sec",
            "range": "stddev: 0.0005066768838001117",
            "extra": "mean: 8.043649635036479 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.82476820032383,
            "unit": "iter/sec",
            "range": "stddev: 0.00048231478017001037",
            "extra": "mean: 6.674463855421727 msec\nrounds: 166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 213.98399288572162,
            "unit": "iter/sec",
            "range": "stddev: 0.0002527990001964636",
            "extra": "mean: 4.673246753246871 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 308.991563896011,
            "unit": "iter/sec",
            "range": "stddev: 0.00026545205553913265",
            "extra": "mean: 3.236334310850452 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.89265290561522,
            "unit": "iter/sec",
            "range": "stddev: 0.004083628827403678",
            "extra": "mean: 91.80499999999951 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.48477217900651,
            "unit": "iter/sec",
            "range": "stddev: 0.005540677468559259",
            "extra": "mean: 95.3764166666667 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 169.60147151132162,
            "unit": "iter/sec",
            "range": "stddev: 0.0005879504140088379",
            "extra": "mean: 5.8961752577320405 msec\nrounds: 194"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 224.1238266902216,
            "unit": "iter/sec",
            "range": "stddev: 0.0006138896763780733",
            "extra": "mean: 4.461819230769137 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 310.0025663503627,
            "unit": "iter/sec",
            "range": "stddev: 0.0004201565632711224",
            "extra": "mean: 3.225779746835409 msec\nrounds: 395"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 290.3709048353245,
            "unit": "iter/sec",
            "range": "stddev: 0.00041940173312913603",
            "extra": "mean: 3.4438712121213424 msec\nrounds: 396"
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
          "id": "52504f79eb5b80040a5b89f0c788ca1e3ebb6b7d",
          "message": "Merge pull request #818 from TeoZosa/dependabot/pip/docs/orjson-3.8.6",
          "timestamp": "2023-02-11T07:59:05Z",
          "tree_id": "3e1ebcd3d82e32d14dde2a530a2d308f870ecd87",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/52504f79eb5b80040a5b89f0c788ca1e3ebb6b7d"
        },
        "date": 1676103053158,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.7083210934422,
            "unit": "iter/sec",
            "range": "stddev: 0.0005356114356043887",
            "extra": "mean: 8.018711111111136 msec\nrounds: 135"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.82672068659699,
            "unit": "iter/sec",
            "range": "stddev: 0.0002425117081120529",
            "extra": "mean: 6.417384615384596 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.06545920554453,
            "unit": "iter/sec",
            "range": "stddev: 0.00021218578337147282",
            "extra": "mean: 4.9983640552995885 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 291.70846730574743,
            "unit": "iter/sec",
            "range": "stddev: 0.00020945150385129078",
            "extra": "mean: 3.4280801282051003 msec\nrounds: 312"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.75572331082724,
            "unit": "iter/sec",
            "range": "stddev: 0.0004061905846920572",
            "extra": "mean: 8.564890625000016 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.24659957751518,
            "unit": "iter/sec",
            "range": "stddev: 0.00037352241107420727",
            "extra": "mean: 7.079816455696031 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.67073038647555,
            "unit": "iter/sec",
            "range": "stddev: 0.00021108090029200617",
            "extra": "mean: 5.163402843601978 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 292.31983338703947,
            "unit": "iter/sec",
            "range": "stddev: 0.00013577585100249794",
            "extra": "mean: 3.4209105431309297 msec\nrounds: 313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.352239659994881,
            "unit": "iter/sec",
            "range": "stddev: 0.002987056355800325",
            "extra": "mean: 96.59745454545384 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.469360464839733,
            "unit": "iter/sec",
            "range": "stddev: 0.0024356629413013176",
            "extra": "mean: 95.51681818181703 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 159.35021535043776,
            "unit": "iter/sec",
            "range": "stddev: 0.0004225708382042315",
            "extra": "mean: 6.275485714285561 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 218.97425805145633,
            "unit": "iter/sec",
            "range": "stddev: 0.00016784785294381854",
            "extra": "mean: 4.56674683544315 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 293.11648233725055,
            "unit": "iter/sec",
            "range": "stddev: 0.00030015354890204843",
            "extra": "mean: 3.4116129943502513 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 295.485708783895,
            "unit": "iter/sec",
            "range": "stddev: 0.0001375742997691444",
            "extra": "mean: 3.3842584269662774 msec\nrounds: 356"
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
          "id": "279ab510138ccb63135b7e6a2b4a67e99aaa41d6",
          "message": "Merge pull request #819 from TeoZosa/dependabot/pip/orjson-3.8.6",
          "timestamp": "2023-02-11T09:44:05Z",
          "tree_id": "37065511f4feed9ccfe2fec1ccc69c1860f66139",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/279ab510138ccb63135b7e6a2b4a67e99aaa41d6"
        },
        "date": 1676109139719,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 130.04199591515183,
            "unit": "iter/sec",
            "range": "stddev: 0.00032510795659635767",
            "extra": "mean: 7.689823529411741 msec\nrounds: 136"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 158.99184715101862,
            "unit": "iter/sec",
            "range": "stddev: 0.00023302834891081534",
            "extra": "mean: 6.289630681818223 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.9418098566873,
            "unit": "iter/sec",
            "range": "stddev: 0.0002562493899101554",
            "extra": "mean: 4.903359447004582 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 301.93208226516884,
            "unit": "iter/sec",
            "range": "stddev: 0.000167857520908716",
            "extra": "mean: 3.3120031250000124 msec\nrounds: 320"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.34779254264326,
            "unit": "iter/sec",
            "range": "stddev: 0.0005450993338235331",
            "extra": "mean: 8.449671755725216 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.3791958690217,
            "unit": "iter/sec",
            "range": "stddev: 0.0003928881533772436",
            "extra": "mean: 6.878563291139282 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.3432746562654,
            "unit": "iter/sec",
            "range": "stddev: 0.00031487507920429394",
            "extra": "mean: 5.01647222222237 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 288.3215230652576,
            "unit": "iter/sec",
            "range": "stddev: 0.0002695517501129234",
            "extra": "mean: 3.4683501577288207 msec\nrounds: 317"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.62565806632344,
            "unit": "iter/sec",
            "range": "stddev: 0.0036422448796916145",
            "extra": "mean: 94.11181818181805 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.136193582868126,
            "unit": "iter/sec",
            "range": "stddev: 0.003358754003280093",
            "extra": "mean: 98.6563636363623 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 157.6191235143976,
            "unit": "iter/sec",
            "range": "stddev: 0.0005707389514696646",
            "extra": "mean: 6.344407821228975 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 195.26284371241002,
            "unit": "iter/sec",
            "range": "stddev: 0.0017461895513891993",
            "extra": "mean: 5.121302040816507 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 281.3794962915401,
            "unit": "iter/sec",
            "range": "stddev: 0.000371614132251037",
            "extra": "mean: 3.5539192200553598 msec\nrounds: 359"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 265.2205271847348,
            "unit": "iter/sec",
            "range": "stddev: 0.0007572809243080146",
            "extra": "mean: 3.7704472222222347 msec\nrounds: 360"
          }
        ]
      }
    ]
  }
}