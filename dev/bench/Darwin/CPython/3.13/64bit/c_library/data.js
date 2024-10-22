window.BENCHMARK_DATA = {
  "lastUpdate": 1729607576454,
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
          "id": "9f5020048a36caf9b2b676c6a1aaca33f71473ea",
          "message": "Merge pull request #1425 from TeoZosa/build/add-python-313-support\n\n[WIP]➕ Add Python 3.13 support",
          "timestamp": "2024-10-15T16:35:53+09:00",
          "tree_id": "22c189e4e0a9077558e411f3a2f6ab1636238eb9",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/9f5020048a36caf9b2b676c6a1aaca33f71473ea"
        },
        "date": 1728978243858,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 712.006045805722,
            "unit": "iter/sec",
            "range": "stddev: 0.00018973168419621436",
            "extra": "mean: 1.4044824561403513 msec\nrounds: 798"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 993.0662034837168,
            "unit": "iter/sec",
            "range": "stddev: 0.00014876303676573165",
            "extra": "mean: 1.0069822097378396 msec\nrounds: 1068"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1220.05740562627,
            "unit": "iter/sec",
            "range": "stddev: 0.000139239098813361",
            "extra": "mean: 819.6335642802708 usec\nrounds: 1299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2284.5718682864085,
            "unit": "iter/sec",
            "range": "stddev: 0.00011399171163057104",
            "extra": "mean: 437.71877518130833 usec\nrounds: 2482"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 479.8167622404783,
            "unit": "iter/sec",
            "range": "stddev: 0.001607011981875997",
            "extra": "mean: 2.084128939828101 msec\nrounds: 698"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 885.8940358238298,
            "unit": "iter/sec",
            "range": "stddev: 0.0002284204730095761",
            "extra": "mean: 1.1288031746032225 msec\nrounds: 945"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1090.2218775349688,
            "unit": "iter/sec",
            "range": "stddev: 0.00035493474873481075",
            "extra": "mean: 917.2444807849905 usec\nrounds: 1223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1668.9448974941713,
            "unit": "iter/sec",
            "range": "stddev: 0.0003202248092318019",
            "extra": "mean: 599.1809564842104 usec\nrounds: 2321"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.023145778715953,
            "unit": "iter/sec",
            "range": "stddev: 0.0031933481982731747",
            "extra": "mean: 41.626521739129636 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.670214751092693,
            "unit": "iter/sec",
            "range": "stddev: 0.0010494980492526942",
            "extra": "mean: 38.95565384615388 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1044.152601608269,
            "unit": "iter/sec",
            "range": "stddev: 0.0000776540107746132",
            "extra": "mean: 957.7144168962827 usec\nrounds: 1089"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1693.1675931522693,
            "unit": "iter/sec",
            "range": "stddev: 0.00005512275562642164",
            "extra": "mean: 590.608988764214 usec\nrounds: 1780"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1934.1758720654168,
            "unit": "iter/sec",
            "range": "stddev: 0.00018710634237265527",
            "extra": "mean: 517.0160658307386 usec\nrounds: 2552"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1434.4811817838204,
            "unit": "iter/sec",
            "range": "stddev: 0.00033637556896862317",
            "extra": "mean: 697.1161509114187 usec\nrounds: 2359"
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
          "id": "9f5020048a36caf9b2b676c6a1aaca33f71473ea",
          "message": "Merge pull request #1425 from TeoZosa/build/add-python-313-support\n\n[WIP]➕ Add Python 3.13 support",
          "timestamp": "2024-10-15T16:35:53+09:00",
          "tree_id": "22c189e4e0a9077558e411f3a2f6ab1636238eb9",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/9f5020048a36caf9b2b676c6a1aaca33f71473ea"
        },
        "date": 1728978243858,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 712.006045805722,
            "unit": "iter/sec",
            "range": "stddev: 0.00018973168419621436",
            "extra": "mean: 1.4044824561403513 msec\nrounds: 798"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 993.0662034837168,
            "unit": "iter/sec",
            "range": "stddev: 0.00014876303676573165",
            "extra": "mean: 1.0069822097378396 msec\nrounds: 1068"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1220.05740562627,
            "unit": "iter/sec",
            "range": "stddev: 0.000139239098813361",
            "extra": "mean: 819.6335642802708 usec\nrounds: 1299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2284.5718682864085,
            "unit": "iter/sec",
            "range": "stddev: 0.00011399171163057104",
            "extra": "mean: 437.71877518130833 usec\nrounds: 2482"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 479.8167622404783,
            "unit": "iter/sec",
            "range": "stddev: 0.001607011981875997",
            "extra": "mean: 2.084128939828101 msec\nrounds: 698"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 885.8940358238298,
            "unit": "iter/sec",
            "range": "stddev: 0.0002284204730095761",
            "extra": "mean: 1.1288031746032225 msec\nrounds: 945"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1090.2218775349688,
            "unit": "iter/sec",
            "range": "stddev: 0.00035493474873481075",
            "extra": "mean: 917.2444807849905 usec\nrounds: 1223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1668.9448974941713,
            "unit": "iter/sec",
            "range": "stddev: 0.0003202248092318019",
            "extra": "mean: 599.1809564842104 usec\nrounds: 2321"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.023145778715953,
            "unit": "iter/sec",
            "range": "stddev: 0.0031933481982731747",
            "extra": "mean: 41.626521739129636 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.670214751092693,
            "unit": "iter/sec",
            "range": "stddev: 0.0010494980492526942",
            "extra": "mean: 38.95565384615388 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1044.152601608269,
            "unit": "iter/sec",
            "range": "stddev: 0.0000776540107746132",
            "extra": "mean: 957.7144168962827 usec\nrounds: 1089"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1693.1675931522693,
            "unit": "iter/sec",
            "range": "stddev: 0.00005512275562642164",
            "extra": "mean: 590.608988764214 usec\nrounds: 1780"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1934.1758720654168,
            "unit": "iter/sec",
            "range": "stddev: 0.00018710634237265527",
            "extra": "mean: 517.0160658307386 usec\nrounds: 2552"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1434.4811817838204,
            "unit": "iter/sec",
            "range": "stddev: 0.00033637556896862317",
            "extra": "mean: 697.1161509114187 usec\nrounds: 2359"
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
          "id": "b69d50658b3d5819eb5e80ce41575370486e6d52",
          "message": ":bookmark: Bump version number to `1.6.0`",
          "timestamp": "2024-10-15T16:54:23+09:00",
          "tree_id": "1a2e1b792e090b427508e9532082016460daed16",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/b69d50658b3d5819eb5e80ce41575370486e6d52"
        },
        "date": 1728979205688,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 797.6959847982486,
            "unit": "iter/sec",
            "range": "stddev: 0.00011128420151197714",
            "extra": "mean: 1.2536104218362307 msec\nrounds: 806"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 925.6333048317504,
            "unit": "iter/sec",
            "range": "stddev: 0.0003906750750856828",
            "extra": "mean: 1.0803414211438374 msec\nrounds: 1154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1140.8384868631563,
            "unit": "iter/sec",
            "range": "stddev: 0.00031449800343646706",
            "extra": "mean: 876.5482682387365 usec\nrounds: 1357"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2397.9635869601384,
            "unit": "iter/sec",
            "range": "stddev: 0.00006397524780530157",
            "extra": "mean: 417.02051083589834 usec\nrounds: 2584"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 647.7987587226511,
            "unit": "iter/sec",
            "range": "stddev: 0.00045215915256282413",
            "extra": "mean: 1.5436892808683824 msec\nrounds: 737"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 986.3699752644502,
            "unit": "iter/sec",
            "range": "stddev: 0.00004425183884001162",
            "extra": "mean: 1.0138183694529992 msec\nrounds: 969"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1203.9973800146859,
            "unit": "iter/sec",
            "range": "stddev: 0.00011897741495161843",
            "extra": "mean: 830.5665914221528 usec\nrounds: 1329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2086.401351329583,
            "unit": "iter/sec",
            "range": "stddev: 0.00012297080567315622",
            "extra": "mean: 479.2941680960562 usec\nrounds: 2332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.886665413278564,
            "unit": "iter/sec",
            "range": "stddev: 0.012942376589215415",
            "extra": "mean: 52.94740909090996 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.927226824351617,
            "unit": "iter/sec",
            "range": "stddev: 0.007936977005762024",
            "extra": "mean: 47.78464000000071 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 984.0057679292,
            "unit": "iter/sec",
            "range": "stddev: 0.00020871396241428633",
            "extra": "mean: 1.0162542056074113 msec\nrounds: 1070"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1324.7545395618665,
            "unit": "iter/sec",
            "range": "stddev: 0.000349965215927163",
            "extra": "mean: 754.8568207441116 usec\nrounds: 1774"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1114.9882841942817,
            "unit": "iter/sec",
            "range": "stddev: 0.0004380300765194545",
            "extra": "mean: 896.8704103672487 usec\nrounds: 2315"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1281.8991097922292,
            "unit": "iter/sec",
            "range": "stddev: 0.0003573091470022951",
            "extra": "mean: 780.0925925926266 usec\nrounds: 2160"
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
          "id": "9f5020048a36caf9b2b676c6a1aaca33f71473ea",
          "message": "Merge pull request #1425 from TeoZosa/build/add-python-313-support\n\n[WIP]➕ Add Python 3.13 support",
          "timestamp": "2024-10-15T16:35:53+09:00",
          "tree_id": "22c189e4e0a9077558e411f3a2f6ab1636238eb9",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/9f5020048a36caf9b2b676c6a1aaca33f71473ea"
        },
        "date": 1729000144934,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 729.3877378156961,
            "unit": "iter/sec",
            "range": "stddev: 0.0001818963979162139",
            "extra": "mean: 1.3710129032258054 msec\nrounds: 775"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 880.849390483683,
            "unit": "iter/sec",
            "range": "stddev: 0.0006099844859158943",
            "extra": "mean: 1.1352678571428543 msec\nrounds: 1064"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1004.709380812872,
            "unit": "iter/sec",
            "range": "stddev: 0.000507095874492268",
            "extra": "mean: 995.3126934984305 usec\nrounds: 1292"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2321.294975090099,
            "unit": "iter/sec",
            "range": "stddev: 0.0001109570468381544",
            "extra": "mean: 430.7940226171325 usec\nrounds: 2476"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 570.2654371348344,
            "unit": "iter/sec",
            "range": "stddev: 0.0006923001549820631",
            "extra": "mean: 1.7535693641618304 msec\nrounds: 692"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 862.445812538738,
            "unit": "iter/sec",
            "range": "stddev: 0.0002883969814812104",
            "extra": "mean: 1.159493136219597 msec\nrounds: 947"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1106.5195502600882,
            "unit": "iter/sec",
            "range": "stddev: 0.00019172852766307285",
            "extra": "mean: 903.7345971564165 usec\nrounds: 1266"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2007.1621591933826,
            "unit": "iter/sec",
            "range": "stddev: 0.00014896342168943706",
            "extra": "mean: 498.2158493870119 usec\nrounds: 2284"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.59465572889007,
            "unit": "iter/sec",
            "range": "stddev: 0.013953491373368676",
            "extra": "mean: 56.83544000000069 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.586752173721298,
            "unit": "iter/sec",
            "range": "stddev: 0.012838603198156339",
            "extra": "mean: 51.054916666667026 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 906.5789402254912,
            "unit": "iter/sec",
            "range": "stddev: 0.0003672848833196314",
            "extra": "mean: 1.103047904191633 msec\nrounds: 1002"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1572.78544137741,
            "unit": "iter/sec",
            "range": "stddev: 0.00007060243532330594",
            "extra": "mean: 635.8146341462968 usec\nrounds: 1640"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1317.964260843462,
            "unit": "iter/sec",
            "range": "stddev: 0.0005222889295696282",
            "extra": "mean: 758.7459157352466 usec\nrounds: 2326"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1538.5146430104082,
            "unit": "iter/sec",
            "range": "stddev: 0.00042286509291660835",
            "extra": "mean: 649.9775641025439 usec\nrounds: 2184"
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
          "id": "4734cd939b23a91ceab5b3cf32175604c419e991",
          "message": "Merge pull request #1467 from TeoZosa/dependabot/pip/poetry-1.8.4",
          "timestamp": "2024-10-15T13:36:38Z",
          "tree_id": "d9aea439ccd637790d941d8c840b3d29f66f354f",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/4734cd939b23a91ceab5b3cf32175604c419e991"
        },
        "date": 1729001797664,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 585.0912868233496,
            "unit": "iter/sec",
            "range": "stddev: 0.0008083519930514548",
            "extra": "mean: 1.709135005973725 msec\nrounds: 837"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1119.660697088526,
            "unit": "iter/sec",
            "range": "stddev: 0.000040723460025226255",
            "extra": "mean: 893.1277150303821 usec\nrounds: 1151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1137.737497641603,
            "unit": "iter/sec",
            "range": "stddev: 0.0004040279077060698",
            "extra": "mean: 878.9373665479806 usec\nrounds: 1405"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2526.7346526482584,
            "unit": "iter/sec",
            "range": "stddev: 0.000023360384950477548",
            "extra": "mean: 395.7677150435661 usec\nrounds: 2639"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 458.59685052578016,
            "unit": "iter/sec",
            "range": "stddev: 0.0025048173004467702",
            "extra": "mean: 2.1805644736842447 msec\nrounds: 760"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 982.6485231218124,
            "unit": "iter/sec",
            "range": "stddev: 0.00004752619338871426",
            "extra": "mean: 1.0176578669482583 msec\nrounds: 947"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 874.6919598974929,
            "unit": "iter/sec",
            "range": "stddev: 0.0006802757275367825",
            "extra": "mean: 1.1432596226415437 msec\nrounds: 1325"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2176.608976346664,
            "unit": "iter/sec",
            "range": "stddev: 0.00006576613145843796",
            "extra": "mean: 459.43024717211864 usec\nrounds: 2387"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.304747779720127,
            "unit": "iter/sec",
            "range": "stddev: 0.005314947573727604",
            "extra": "mean: 49.249565217390916 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.493726499679383,
            "unit": "iter/sec",
            "range": "stddev: 0.002728802617144969",
            "extra": "mean: 44.456839999999715 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1026.3009667675904,
            "unit": "iter/sec",
            "range": "stddev: 0.00013976158129180407",
            "extra": "mean: 974.3730468749073 usec\nrounds: 1024"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1311.7903748588155,
            "unit": "iter/sec",
            "range": "stddev: 0.00029099182574835684",
            "extra": "mean: 762.3169213355658 usec\nrounds: 1767"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1682.5932330856797,
            "unit": "iter/sec",
            "range": "stddev: 0.00016349359764856905",
            "extra": "mean: 594.3207070707855 usec\nrounds: 2376"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1324.247605373048,
            "unit": "iter/sec",
            "range": "stddev: 0.0003902557827520264",
            "extra": "mean: 755.145786892546 usec\nrounds: 2243"
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
          "id": "7430b0444dce4357f96d7e491e2e86d86da49472",
          "message": "Merge pull request #1469 from TeoZosa/build/add-python-313-wheel-builds\n\n👷  Build Python 3.13 wheels in CI",
          "timestamp": "2024-10-15T23:44:30+09:00",
          "tree_id": "14888d016a4310bb7a2cb8635768a619e5713c21",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/7430b0444dce4357f96d7e491e2e86d86da49472"
        },
        "date": 1729004516537,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 540.9027709615677,
            "unit": "iter/sec",
            "range": "stddev: 0.0009412206573684366",
            "extra": "mean: 1.848761096605756 msec\nrounds: 766"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 856.207300804446,
            "unit": "iter/sec",
            "range": "stddev: 0.0004806946399054086",
            "extra": "mean: 1.1679414542021005 msec\nrounds: 1059"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1056.745304397794,
            "unit": "iter/sec",
            "range": "stddev: 0.0005406869173567825",
            "extra": "mean: 946.301815431173 usec\nrounds: 1322"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1950.2760334807865,
            "unit": "iter/sec",
            "range": "stddev: 0.00022365612977282676",
            "extra": "mean: 512.7479304635835 usec\nrounds: 2416"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 473.7795969239515,
            "unit": "iter/sec",
            "range": "stddev: 0.0013850719366643185",
            "extra": "mean: 2.1106860795453684 msec\nrounds: 704"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 778.5617750213593,
            "unit": "iter/sec",
            "range": "stddev: 0.0005407277559501086",
            "extra": "mean: 1.2844195953141493 msec\nrounds: 939"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1065.0896842061763,
            "unit": "iter/sec",
            "range": "stddev: 0.0003318019358977464",
            "extra": "mean: 938.8880718953837 usec\nrounds: 1224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1847.3278274745712,
            "unit": "iter/sec",
            "range": "stddev: 0.00029210450228218455",
            "extra": "mean: 541.3224361845246 usec\nrounds: 2233"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 15.824442131899065,
            "unit": "iter/sec",
            "range": "stddev: 0.010611924992555869",
            "extra": "mean: 63.19338095238064 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.944680708326,
            "unit": "iter/sec",
            "range": "stddev: 0.00409224395756442",
            "extra": "mean: 50.13868181818249 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 838.6798825343159,
            "unit": "iter/sec",
            "range": "stddev: 0.0005279760635931493",
            "extra": "mean: 1.1923500501504918 msec\nrounds: 997"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1312.691283053276,
            "unit": "iter/sec",
            "range": "stddev: 0.00040421325949307915",
            "extra": "mean: 761.793738489703 usec\nrounds: 1629"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 848.9158690771372,
            "unit": "iter/sec",
            "range": "stddev: 0.0008765777644716325",
            "extra": "mean: 1.1779730317529666 msec\nrounds: 2299"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 992.0175397965938,
            "unit": "iter/sec",
            "range": "stddev: 0.0006957435224180403",
            "extra": "mean: 1.0080466926069098 msec\nrounds: 1799"
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
          "id": "a556a3e7c7f8a831e35b66683aeecfeb12651f2a",
          "message": ":bookmark: Bump version number to `1.6.0`",
          "timestamp": "2024-10-15T23:47:34+09:00",
          "tree_id": "14888d016a4310bb7a2cb8635768a619e5713c21",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/a556a3e7c7f8a831e35b66683aeecfeb12651f2a"
        },
        "date": 1729005221681,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 768.8692958766201,
            "unit": "iter/sec",
            "range": "stddev: 0.00005864787836594836",
            "extra": "mean: 1.3006111771700521 msec\nrounds: 841"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1051.2310444393377,
            "unit": "iter/sec",
            "range": "stddev: 0.00004092880393487033",
            "extra": "mean: 951.2656663724565 usec\nrounds: 1133"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1372.437546765436,
            "unit": "iter/sec",
            "range": "stddev: 0.00001394559238604542",
            "extra": "mean: 728.6306049822101 usec\nrounds: 1405"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2345.9228576114588,
            "unit": "iter/sec",
            "range": "stddev: 0.00003934661591379519",
            "extra": "mean: 426.2714763852751 usec\nrounds: 2689"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 751.5550007427115,
            "unit": "iter/sec",
            "range": "stddev: 0.000019079290556834348",
            "extra": "mean: 1.3305746073298255 msec\nrounds: 764"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 996.4422526615015,
            "unit": "iter/sec",
            "range": "stddev: 0.00008628623770014466",
            "extra": "mean: 1.0035704500978313 msec\nrounds: 1022"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1309.3738821072886,
            "unit": "iter/sec",
            "range": "stddev: 0.00001817260322373749",
            "extra": "mean: 763.7238023952436 usec\nrounds: 1336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2374.744576891626,
            "unit": "iter/sec",
            "range": "stddev: 0.00002502939088180988",
            "extra": "mean: 421.0979192166131 usec\nrounds: 2451"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.669311419665497,
            "unit": "iter/sec",
            "range": "stddev: 0.0059408604780785525",
            "extra": "mean: 44.11250000000025 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.26464717920221,
            "unit": "iter/sec",
            "range": "stddev: 0.002664571779711496",
            "extra": "mean: 39.5809999999999 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1053.5189560988163,
            "unit": "iter/sec",
            "range": "stddev: 0.0000759150928410087",
            "extra": "mean: 949.1998166819919 usec\nrounds: 1091"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1705.6988876757619,
            "unit": "iter/sec",
            "range": "stddev: 0.000017787697185817827",
            "extra": "mean: 586.2699490662335 usec\nrounds: 1767"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1953.5467154711387,
            "unit": "iter/sec",
            "range": "stddev: 0.000120937794389883",
            "extra": "mean: 511.88947368419036 usec\nrounds: 2470"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1568.0986820486323,
            "unit": "iter/sec",
            "range": "stddev: 0.00018983650418689707",
            "extra": "mean: 637.7149674620965 usec\nrounds: 2305"
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
          "id": "0fbd6c98ef7778c30f18a542ba99566b6fcdd57a",
          "message": "Merge pull request #1470 from TeoZosa/dependabot/pip/dot-github/workflows/poetry-1.8.4",
          "timestamp": "2024-10-15T14:48:48Z",
          "tree_id": "52d1a8faa4e95096d7cd69d0c6715764208e9e3d",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/0fbd6c98ef7778c30f18a542ba99566b6fcdd57a"
        },
        "date": 1729005917158,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 805.9404931240329,
            "unit": "iter/sec",
            "range": "stddev: 0.00006907536414525601",
            "extra": "mean: 1.2407863961813639 msec\nrounds: 838"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1053.8841042077543,
            "unit": "iter/sec",
            "range": "stddev: 0.00004896401271734236",
            "extra": "mean: 948.8709394205532 usec\nrounds: 1139"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1143.9586525025627,
            "unit": "iter/sec",
            "range": "stddev: 0.00010587817874652113",
            "extra": "mean: 874.1574687270088 usec\nrounds: 1359"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2215.8309007039265,
            "unit": "iter/sec",
            "range": "stddev: 0.00008278951114164878",
            "extra": "mean: 451.29797570848905 usec\nrounds: 2470"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 419.92477245103373,
            "unit": "iter/sec",
            "range": "stddev: 0.0011891955847002059",
            "extra": "mean: 2.3813789173788438 msec\nrounds: 702"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 718.9329358240119,
            "unit": "iter/sec",
            "range": "stddev: 0.0005969705300480409",
            "extra": "mean: 1.3909503239740164 msec\nrounds: 926"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1025.2330631752045,
            "unit": "iter/sec",
            "range": "stddev: 0.00031354214689053255",
            "extra": "mean: 975.3879736407873 usec\nrounds: 1214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1951.4057545258556,
            "unit": "iter/sec",
            "range": "stddev: 0.00016757141958087152",
            "extra": "mean: 512.4510869565288 usec\nrounds: 2208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 15.165191396847808,
            "unit": "iter/sec",
            "range": "stddev: 0.017958547837358924",
            "extra": "mean: 65.94047999999901 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.301978498031758,
            "unit": "iter/sec",
            "range": "stddev: 0.00236013331505365",
            "extra": "mean: 41.148913043478785 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 969.4271072830849,
            "unit": "iter/sec",
            "range": "stddev: 0.00014506630117176272",
            "extra": "mean: 1.0315370722432124 msec\nrounds: 1052"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1562.5717282221747,
            "unit": "iter/sec",
            "range": "stddev: 0.00023986181775782268",
            "extra": "mean: 639.9706214688499 usec\nrounds: 1770"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1247.3625266811316,
            "unit": "iter/sec",
            "range": "stddev: 0.00035061649482298347",
            "extra": "mean: 801.6915520628223 usec\nrounds: 2545"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1687.243512939467,
            "unit": "iter/sec",
            "range": "stddev: 0.0002209496422106072",
            "extra": "mean: 592.682675814725 usec\nrounds: 2332"
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
          "id": "a934f70d7b106a1d9bacb4b2e86430601733dd03",
          "message": ":bookmark: Bump version number to `1.6.1`",
          "timestamp": "2024-10-16T10:06:04+09:00",
          "tree_id": "18a9142ce5f43f0e5035566c7666dbeae2df6bef",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/a934f70d7b106a1d9bacb4b2e86430601733dd03"
        },
        "date": 1729041215219,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 743.4463587290318,
            "unit": "iter/sec",
            "range": "stddev: 0.0002094915681854327",
            "extra": "mean: 1.345086956521736 msec\nrounds: 782"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1028.6475479446926,
            "unit": "iter/sec",
            "range": "stddev: 0.00015372404599328814",
            "extra": "mean: 972.1502782931508 usec\nrounds: 1078"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1270.227409198068,
            "unit": "iter/sec",
            "range": "stddev: 0.00003547105678196878",
            "extra": "mean: 787.2606060605553 usec\nrounds: 1320"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2445.846499961468,
            "unit": "iter/sec",
            "range": "stddev: 0.000016757415539330486",
            "extra": "mean: 408.8564020741915 usec\nrounds: 2507"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 680.8315324447213,
            "unit": "iter/sec",
            "range": "stddev: 0.00009280068956139576",
            "extra": "mean: 1.4687921348313768 msec\nrounds: 712"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 915.6475264121599,
            "unit": "iter/sec",
            "range": "stddev: 0.000060709968389797575",
            "extra": "mean: 1.092123301985387 msec\nrounds: 957"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1171.326238660804,
            "unit": "iter/sec",
            "range": "stddev: 0.000043764457473080945",
            "extra": "mean: 853.7331163547707 usec\nrounds: 1229"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2118.628345837252,
            "unit": "iter/sec",
            "range": "stddev: 0.00010916257104526447",
            "extra": "mean: 472.00350262698583 usec\nrounds: 2284"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.072915477048355,
            "unit": "iter/sec",
            "range": "stddev: 0.001967865034616248",
            "extra": "mean: 45.304391304348094 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.99415505329438,
            "unit": "iter/sec",
            "range": "stddev: 0.003960325270046525",
            "extra": "mean: 45.46662500000043 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 903.044097600792,
            "unit": "iter/sec",
            "range": "stddev: 0.0002469825382042928",
            "extra": "mean: 1.1073656343658083 msec\nrounds: 1001"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1481.0880561210015,
            "unit": "iter/sec",
            "range": "stddev: 0.00017372341738631437",
            "extra": "mean: 675.1793020456998 usec\nrounds: 1662"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1635.6751093731134,
            "unit": "iter/sec",
            "range": "stddev: 0.00032808064147990973",
            "extra": "mean: 611.3683544302747 usec\nrounds: 2370"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1501.5562145103802,
            "unit": "iter/sec",
            "range": "stddev: 0.000408489453230873",
            "extra": "mean: 665.9757326009103 usec\nrounds: 2184"
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
          "id": "55d681730b6ea7a716c61f9b1f445553d3bd2486",
          "message": "Merge pull request #1471 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.22.0",
          "timestamp": "2024-10-16T13:28:52Z",
          "tree_id": "38c24b95072894dd18e63174856011b9e99023f6",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/55d681730b6ea7a716c61f9b1f445553d3bd2486"
        },
        "date": 1729085768890,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 640.3759329217679,
            "unit": "iter/sec",
            "range": "stddev: 0.0006657133595328097",
            "extra": "mean: 1.5615827338129615 msec\nrounds: 834"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 974.5935588611267,
            "unit": "iter/sec",
            "range": "stddev: 0.00020928345391811576",
            "extra": "mean: 1.0260687554395111 msec\nrounds: 1149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1372.897232738815,
            "unit": "iter/sec",
            "range": "stddev: 0.00003080267659386183",
            "extra": "mean: 728.38663823736 usec\nrounds: 1407"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2629.293992028997,
            "unit": "iter/sec",
            "range": "stddev: 0.000009835869425889237",
            "extra": "mean: 380.33023428784054 usec\nrounds: 2689"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 708.3167967544259,
            "unit": "iter/sec",
            "range": "stddev: 0.00017866454250298132",
            "extra": "mean: 1.4117976653696396 msec\nrounds: 771"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 990.0248673240455,
            "unit": "iter/sec",
            "range": "stddev: 0.00005478359298918095",
            "extra": "mean: 1.0100756385068552 msec\nrounds: 1018"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1228.9193949449905,
            "unit": "iter/sec",
            "range": "stddev: 0.00022008424874754833",
            "extra": "mean: 813.72301886794 usec\nrounds: 1325"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2277.975929634163,
            "unit": "iter/sec",
            "range": "stddev: 0.00007025579830038955",
            "extra": "mean: 438.98620129871057 usec\nrounds: 2464"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.47835613646216,
            "unit": "iter/sec",
            "range": "stddev: 0.001301919567408214",
            "extra": "mean: 39.24899999999987 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.945789104603268,
            "unit": "iter/sec",
            "range": "stddev: 0.0034853493691558574",
            "extra": "mean: 40.086925925925875 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 987.7533101980947,
            "unit": "iter/sec",
            "range": "stddev: 0.00018973459849333478",
            "extra": "mean: 1.0123985307621488 msec\nrounds: 1089"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1480.1015430807458,
            "unit": "iter/sec",
            "range": "stddev: 0.00029389240588308953",
            "extra": "mean: 675.6293206198258 usec\nrounds: 1678"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1790.4718755210201,
            "unit": "iter/sec",
            "range": "stddev: 0.00017424960171180226",
            "extra": "mean: 558.5119842829165 usec\nrounds: 2545"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1535.5504764654647,
            "unit": "iter/sec",
            "range": "stddev: 0.0003701733619312491",
            "extra": "mean: 651.2322553549678 usec\nrounds: 2381"
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
          "id": "2d2406c55b593319f7d9557560cfa34bf516d62f",
          "message": "Merge pull request #1472 from TeoZosa/dependabot/pip/sentry-sdk-2.17.0",
          "timestamp": "2024-10-17T13:41:53Z",
          "tree_id": "66c9f2bc18581ab45d24b7bd37c8ad90db7f0530",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/2d2406c55b593319f7d9557560cfa34bf516d62f"
        },
        "date": 1729173241483,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 751.6083579595357,
            "unit": "iter/sec",
            "range": "stddev: 0.0002768365869583168",
            "extra": "mean: 1.3304801488833855 msec\nrounds: 806"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1035.2444216600018,
            "unit": "iter/sec",
            "range": "stddev: 0.0003282985256826067",
            "extra": "mean: 965.9554585153062 usec\nrounds: 1145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1369.1130802137204,
            "unit": "iter/sec",
            "range": "stddev: 0.000025513328738567432",
            "extra": "mean: 730.3998584571982 usec\nrounds: 1413"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2608.866222047847,
            "unit": "iter/sec",
            "range": "stddev: 0.000011169574298681338",
            "extra": "mean: 383.3082706766939 usec\nrounds: 2660"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 740.1578028137857,
            "unit": "iter/sec",
            "range": "stddev: 0.00007623873215259949",
            "extra": "mean: 1.3510632411066903 msec\nrounds: 759"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 971.4689392112007,
            "unit": "iter/sec",
            "range": "stddev: 0.00008799288493777433",
            "extra": "mean: 1.029368989205116 msec\nrounds: 1019"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1303.389395600378,
            "unit": "iter/sec",
            "range": "stddev: 0.0000522120232525951",
            "extra": "mean: 767.23042505603 usec\nrounds: 1341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2280.1171721675705,
            "unit": "iter/sec",
            "range": "stddev: 0.00005247435789181687",
            "extra": "mean: 438.5739523418264 usec\nrounds: 2434"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.87402740161103,
            "unit": "iter/sec",
            "range": "stddev: 0.002577285303152652",
            "extra": "mean: 40.2025769230773 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.29695101462397,
            "unit": "iter/sec",
            "range": "stddev: 0.00017495831005326828",
            "extra": "mean: 38.0272222222223 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1015.0731921196149,
            "unit": "iter/sec",
            "range": "stddev: 0.00011366442392700974",
            "extra": "mean: 985.150635208738 usec\nrounds: 1102"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1674.9936684089057,
            "unit": "iter/sec",
            "range": "stddev: 0.00010182531669521122",
            "extra": "mean: 597.0171821305513 usec\nrounds: 1746"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1203.673340243965,
            "unit": "iter/sec",
            "range": "stddev: 0.00032898543987278496",
            "extra": "mean: 830.7901874750473 usec\nrounds: 2507"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1669.3140422092154,
            "unit": "iter/sec",
            "range": "stddev: 0.00018677841333021762",
            "extra": "mean: 599.048456260856 usec\nrounds: 2332"
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
          "id": "3754898af9ec72491a792418114fe80c5231a7bc",
          "message": "Merge pull request #1473 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.23.0",
          "timestamp": "2024-10-17T14:18:34Z",
          "tree_id": "8796a077b40260b85bfca77b304d80f1e7140ad0",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/3754898af9ec72491a792418114fe80c5231a7bc"
        },
        "date": 1729175073281,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 654.048078418511,
            "unit": "iter/sec",
            "range": "stddev: 0.0006587389381414704",
            "extra": "mean: 1.5289395886889559 msec\nrounds: 778"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1027.6052575777537,
            "unit": "iter/sec",
            "range": "stddev: 0.00004857827383599744",
            "extra": "mean: 973.1363211951405 usec\nrounds: 1071"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1231.9345859559287,
            "unit": "iter/sec",
            "range": "stddev: 0.00019460879302628207",
            "extra": "mean: 811.7314112291463 usec\nrounds: 1318"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2180.7116146403896,
            "unit": "iter/sec",
            "range": "stddev: 0.0001546178160389261",
            "extra": "mean: 458.5659072416621 usec\nrounds: 2458"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 655.4407652411343,
            "unit": "iter/sec",
            "range": "stddev: 0.00039106087818208503",
            "extra": "mean: 1.5256908831907998 msec\nrounds: 702"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 868.8760597379021,
            "unit": "iter/sec",
            "range": "stddev: 0.0003720484889571266",
            "extra": "mean: 1.1509121338912844 msec\nrounds: 956"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1129.0048106217048,
            "unit": "iter/sec",
            "range": "stddev: 0.0002188571248564547",
            "extra": "mean: 885.7358184765695 usec\nrounds: 1234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2043.0973464110518,
            "unit": "iter/sec",
            "range": "stddev: 0.0001808812849077675",
            "extra": "mean: 489.4529385771173 usec\nrounds: 2263"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.838274932614727,
            "unit": "iter/sec",
            "range": "stddev: 0.012659901844151108",
            "extra": "mean: 50.407608695651746 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.66114621367851,
            "unit": "iter/sec",
            "range": "stddev: 0.00219393531310787",
            "extra": "mean: 46.16560869565265 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 845.649804620169,
            "unit": "iter/sec",
            "range": "stddev: 0.0005534193290502325",
            "extra": "mean: 1.1825225933200076 msec\nrounds: 1018"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1358.928256943343,
            "unit": "iter/sec",
            "range": "stddev: 0.0003801813742997699",
            "extra": "mean: 735.8740204941463 usec\nrounds: 1659"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1438.7614119521347,
            "unit": "iter/sec",
            "range": "stddev: 0.00041562108499729503",
            "extra": "mean: 695.0422715627213 usec\nrounds: 2342"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1394.529154854232,
            "unit": "iter/sec",
            "range": "stddev: 0.00047702822956374405",
            "extra": "mean: 717.0879120878103 usec\nrounds: 2184"
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
          "id": "71787aadc3fa0bca56e13f579718061ac7d2458f",
          "message": "Merge pull request #1474 from TeoZosa/dependabot/pip/mypy-1.12.1",
          "timestamp": "2024-10-21T13:55:11Z",
          "tree_id": "cbf3b04e6ef78ade63a8f83c0349926eb05c1eca",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/71787aadc3fa0bca56e13f579718061ac7d2458f"
        },
        "date": 1729520681599,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 755.6268731480784,
            "unit": "iter/sec",
            "range": "stddev: 0.00006647549307658194",
            "extra": "mean: 1.323404494382021 msec\nrounds: 801"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1067.162812219809,
            "unit": "iter/sec",
            "range": "stddev: 0.0000414901723286875",
            "extra": "mean: 937.0641373080614 usec\nrounds: 1107"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1298.4862613182534,
            "unit": "iter/sec",
            "range": "stddev: 0.000030505140191151755",
            "extra": "mean: 770.1275167784809 usec\nrounds: 1341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2399.8160575436264,
            "unit": "iter/sec",
            "range": "stddev: 0.000042549269827033034",
            "extra": "mean: 416.69860356862824 usec\nrounds: 2578"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 695.3925277944085,
            "unit": "iter/sec",
            "range": "stddev: 0.00009539259198244769",
            "extra": "mean: 1.438036734693888 msec\nrounds: 735"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 940.9064830751388,
            "unit": "iter/sec",
            "range": "stddev: 0.00004161300828315856",
            "extra": "mean: 1.062804878048802 msec\nrounds: 984"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1114.0159218041642,
            "unit": "iter/sec",
            "range": "stddev: 0.00023113900608883302",
            "extra": "mean: 897.6532385466144 usec\nrounds: 1266"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1914.7033430412978,
            "unit": "iter/sec",
            "range": "stddev: 0.00022580887314551659",
            "extra": "mean: 522.2741181469966 usec\nrounds: 2353"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 21.13474190517372,
            "unit": "iter/sec",
            "range": "stddev: 0.005031286567064871",
            "extra": "mean: 47.31545833333328 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.818338642400406,
            "unit": "iter/sec",
            "range": "stddev: 0.004012076218536014",
            "extra": "mean: 43.82439999999946 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 987.9369200854119,
            "unit": "iter/sec",
            "range": "stddev: 0.00012012162477427696",
            "extra": "mean: 1.0122103746396531 msec\nrounds: 1041"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1462.024426713291,
            "unit": "iter/sec",
            "range": "stddev: 0.0002905171527478428",
            "extra": "mean: 683.9831002331838 usec\nrounds: 1716"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1512.9006390909296,
            "unit": "iter/sec",
            "range": "stddev: 0.0003947388181414483",
            "extra": "mean: 660.9819403611854 usec\nrounds: 2381"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1546.3790159180717,
            "unit": "iter/sec",
            "range": "stddev: 0.00023622246435394057",
            "extra": "mean: 646.6719928983962 usec\nrounds: 2253"
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
          "id": "c499c72c2fd47d2dedd2bac673622dd00cf10709",
          "message": "Merge pull request #1475 from TeoZosa/dependabot/pip/orjson-3.10.9",
          "timestamp": "2024-10-21T14:05:20Z",
          "tree_id": "11802cbb62f4e23fc75e7158457f02ed6b48b2d7",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/c499c72c2fd47d2dedd2bac673622dd00cf10709"
        },
        "date": 1729521476899,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 781.926409447981,
            "unit": "iter/sec",
            "range": "stddev: 0.00010295537616694692",
            "extra": "mean: 1.2788927294398116 msec\nrounds: 839"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1112.5565501038777,
            "unit": "iter/sec",
            "range": "stddev: 0.000033308943667121645",
            "extra": "mean: 898.8307155322859 usec\nrounds: 1146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1379.0737631955956,
            "unit": "iter/sec",
            "range": "stddev: 0.00001147973143334903",
            "extra": "mean: 725.1243745532479 usec\nrounds: 1399"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2584.3903607739257,
            "unit": "iter/sec",
            "range": "stddev: 0.000008021067586563355",
            "extra": "mean: 386.9384498480092 usec\nrounds: 2632"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 727.9580680906963,
            "unit": "iter/sec",
            "range": "stddev: 0.00008435810157493537",
            "extra": "mean: 1.3737054973823162 msec\nrounds: 764"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1006.5504725853108,
            "unit": "iter/sec",
            "range": "stddev: 0.000017059985873761948",
            "extra": "mean: 993.4921568627492 usec\nrounds: 1020"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1312.9331815727812,
            "unit": "iter/sec",
            "range": "stddev: 0.000009309623077704063",
            "extra": "mean: 761.6533834586204 usec\nrounds: 1330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2338.2417699406797,
            "unit": "iter/sec",
            "range": "stddev: 0.000024780316061468948",
            "extra": "mean: 427.67177152316873 usec\nrounds: 2416"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.931825231466597,
            "unit": "iter/sec",
            "range": "stddev: 0.000539271355983308",
            "extra": "mean: 38.562653846153665 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.61834615286051,
            "unit": "iter/sec",
            "range": "stddev: 0.00013755388480503707",
            "extra": "mean: 37.56807407407376 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1078.1708247170905,
            "unit": "iter/sec",
            "range": "stddev: 0.000024811924648752026",
            "extra": "mean: 927.4968094804435 usec\nrounds: 1097"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1752.8050809611009,
            "unit": "iter/sec",
            "range": "stddev: 0.000011093082749022226",
            "extra": "mean: 570.5140924464222 usec\nrounds: 1774"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2405.7815160724576,
            "unit": "iter/sec",
            "range": "stddev: 0.00002027243836200201",
            "extra": "mean: 415.6653433901775 usec\nrounds: 2519"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 2210.8269690475886,
            "unit": "iter/sec",
            "range": "stddev: 0.000019620086938350096",
            "extra": "mean: 452.3194325021258 usec\nrounds: 2326"
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
          "id": "5947b6257a742d6a05341f1c06ea985da67d416d",
          "message": "Merge pull request #1479 from TeoZosa/dependabot/pip/orjson-3.10.9",
          "timestamp": "2024-10-22T13:56:41Z",
          "tree_id": "f4179e2bfcfcd7e49a549c9cdd98b3b06e6bc6e5",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/5947b6257a742d6a05341f1c06ea985da67d416d"
        },
        "date": 1729606756580,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 474.9842661461839,
            "unit": "iter/sec",
            "range": "stddev: 0.001207409879711667",
            "extra": "mean: 2.105332894736842 msec\nrounds: 760"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 653.5745671172415,
            "unit": "iter/sec",
            "range": "stddev: 0.0011446112023408065",
            "extra": "mean: 1.5300472972973183 msec\nrounds: 1036"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 704.5137945234362,
            "unit": "iter/sec",
            "range": "stddev: 0.0010686229039081573",
            "extra": "mean: 1.419418622848178 msec\nrounds: 1278"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1684.2584268416158,
            "unit": "iter/sec",
            "range": "stddev: 0.00042114460894942786",
            "extra": "mean: 593.733113673795 usec\nrounds: 2428"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 427.8143040754523,
            "unit": "iter/sec",
            "range": "stddev: 0.0013871633770475048",
            "extra": "mean: 2.3374627507163317 msec\nrounds: 698"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 663.9640424851598,
            "unit": "iter/sec",
            "range": "stddev: 0.0009171327000308313",
            "extra": "mean: 1.5061056563501343 msec\nrounds: 937"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 958.2786928920679,
            "unit": "iter/sec",
            "range": "stddev: 0.0005723875054731602",
            "extra": "mean: 1.0435377593359798 msec\nrounds: 1205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1461.1860113509297,
            "unit": "iter/sec",
            "range": "stddev: 0.0004945996226432323",
            "extra": "mean: 684.3755635707578 usec\nrounds: 2218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 16.053226662074394,
            "unit": "iter/sec",
            "range": "stddev: 0.012320945352304592",
            "extra": "mean: 62.29277272727303 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.926814245860957,
            "unit": "iter/sec",
            "range": "stddev: 0.0077514119177478575",
            "extra": "mean: 50.183636363635614 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 713.553177044948,
            "unit": "iter/sec",
            "range": "stddev: 0.0006710270184447088",
            "extra": "mean: 1.401437246963597 msec\nrounds: 988"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1169.1063821087228,
            "unit": "iter/sec",
            "range": "stddev: 0.0005232879514394877",
            "extra": "mean: 855.3541536539175 usec\nrounds: 1601"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 939.1498508820529,
            "unit": "iter/sec",
            "range": "stddev: 0.0005395604256035266",
            "extra": "mean: 1.0647928007024614 msec\nrounds: 2278"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 921.6819947473288,
            "unit": "iter/sec",
            "range": "stddev: 0.0006490423291785441",
            "extra": "mean: 1.0849729144097486 msec\nrounds: 1846"
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
          "id": "dff108e22964932ec8eb982d0d9bbeadfefb6c4e",
          "message": "Merge pull request #1480 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.23.1",
          "timestamp": "2024-10-22T14:08:18Z",
          "tree_id": "eed48a327f72be9f96a531e54aabd9d2e5252fe5",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/dff108e22964932ec8eb982d0d9bbeadfefb6c4e"
        },
        "date": 1729607545176,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 819.6689126576559,
            "unit": "iter/sec",
            "range": "stddev: 0.000058202367344952724",
            "extra": "mean: 1.2200047904191549 msec\nrounds: 835"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1109.564366910247,
            "unit": "iter/sec",
            "range": "stddev: 0.000021402621328642293",
            "extra": "mean: 901.2546093064021 usec\nrounds: 1139"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1261.50273461242,
            "unit": "iter/sec",
            "range": "stddev: 0.00011971111182293491",
            "extra": "mean: 792.7053763440606 usec\nrounds: 1395"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2178.3959981067583,
            "unit": "iter/sec",
            "range": "stddev: 0.00005592103270037355",
            "extra": "mean: 459.0533589251445 usec\nrounds: 2605"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 740.645925323707,
            "unit": "iter/sec",
            "range": "stddev: 0.000047199041145034415",
            "extra": "mean: 1.3501728232190564 msec\nrounds: 758"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 977.0494845121774,
            "unit": "iter/sec",
            "range": "stddev: 0.00005064247269380813",
            "extra": "mean: 1.0234896142433167 msec\nrounds: 1011"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1284.0502613959484,
            "unit": "iter/sec",
            "range": "stddev: 0.00004641280775303091",
            "extra": "mean: 778.7857142857129 usec\nrounds: 1316"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2064.548929551924,
            "unit": "iter/sec",
            "range": "stddev: 0.00007649859629552453",
            "extra": "mean: 484.3673044925282 usec\nrounds: 2404"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.654692072378644,
            "unit": "iter/sec",
            "range": "stddev: 0.0014411723924001004",
            "extra": "mean: 40.560230769230685 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.58402853304639,
            "unit": "iter/sec",
            "range": "stddev: 0.0035463934601020195",
            "extra": "mean: 42.401576923076604 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 852.3489991198115,
            "unit": "iter/sec",
            "range": "stddev: 0.00026251610028793086",
            "extra": "mean: 1.173228338430223 msec\nrounds: 981"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1259.0397518768596,
            "unit": "iter/sec",
            "range": "stddev: 0.00029697476123341016",
            "extra": "mean: 794.2560975610919 usec\nrounds: 1640"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1064.6259048291818,
            "unit": "iter/sec",
            "range": "stddev: 0.0007279936392608903",
            "extra": "mean: 939.2970765260958 usec\nrounds: 2326"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1025.2375912661614,
            "unit": "iter/sec",
            "range": "stddev: 0.000642633312508747",
            "extra": "mean: 975.3836657169455 usec\nrounds: 2106"
          }
        ]
      }
    ]
  }
}