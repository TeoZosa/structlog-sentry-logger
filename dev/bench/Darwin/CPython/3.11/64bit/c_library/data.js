window.BENCHMARK_DATA = {
  "lastUpdate": 1671429661945,
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
      }
    ]
  }
}