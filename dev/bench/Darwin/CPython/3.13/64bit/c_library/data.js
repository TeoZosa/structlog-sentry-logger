window.BENCHMARK_DATA = {
  "lastUpdate": 1738382260649,
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
          "id": "f3fe9c78928377b889f65c042bca3ad2b7bc44ba",
          "message": "Merge pull request #1482 from TeoZosa/dependabot/pip/rich-13.9.3",
          "timestamp": "2024-10-23T14:06:24Z",
          "tree_id": "20d90fe7b85fc64bef420e04f52f58f77a56df04",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/f3fe9c78928377b889f65c042bca3ad2b7bc44ba"
        },
        "date": 1729694905417,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 667.7743114075455,
            "unit": "iter/sec",
            "range": "stddev: 0.0007982680201511339",
            "extra": "mean: 1.4975119331742244 msec\nrounds: 838"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1037.6895312053107,
            "unit": "iter/sec",
            "range": "stddev: 0.0001760921695728242",
            "extra": "mean: 963.6793760831979 usec\nrounds: 1154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1266.1226496868978,
            "unit": "iter/sec",
            "range": "stddev: 0.0001194917386539957",
            "extra": "mean: 789.8128986534537 usec\nrounds: 1411"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2199.3924393730545,
            "unit": "iter/sec",
            "range": "stddev: 0.00019721749097268337",
            "extra": "mean: 454.671018276781 usec\nrounds: 2681"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 608.7205948023343,
            "unit": "iter/sec",
            "range": "stddev: 0.0004275152632031892",
            "extra": "mean: 1.642789825970523 msec\nrounds: 747"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 812.8061391544738,
            "unit": "iter/sec",
            "range": "stddev: 0.0005092519671507047",
            "extra": "mean: 1.2303056680160604 msec\nrounds: 988"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 802.4657129701949,
            "unit": "iter/sec",
            "range": "stddev: 0.0008325383846435984",
            "extra": "mean: 1.2461591614907312 msec\nrounds: 1288"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1849.7017892643607,
            "unit": "iter/sec",
            "range": "stddev: 0.00026863444848864435",
            "extra": "mean: 540.6276870163524 usec\nrounds: 2326"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.04605767301175,
            "unit": "iter/sec",
            "range": "stddev: 0.010906900492279315",
            "extra": "mean: 58.66459090909066 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 15.503981732588597,
            "unit": "iter/sec",
            "range": "stddev: 0.01835447679287033",
            "extra": "mean: 64.49955999999986 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 500.45666670838835,
            "unit": "iter/sec",
            "range": "stddev: 0.0013321412901008442",
            "extra": "mean: 1.9981749999999323 msec\nrounds: 1000"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1023.1798894022833,
            "unit": "iter/sec",
            "range": "stddev: 0.000986816324811862",
            "extra": "mean: 977.3452453059606 usec\nrounds: 1651"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1106.9187045398248,
            "unit": "iter/sec",
            "range": "stddev: 0.0006457852707305276",
            "extra": "mean: 903.4087109547274 usec\nrounds: 2273"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 954.2988568519406,
            "unit": "iter/sec",
            "range": "stddev: 0.0005647571038690936",
            "extra": "mean: 1.0478897599215609 msec\nrounds: 2041"
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
          "id": "438d98bdcb9eae5e55657555e7ec1d319decbc13",
          "message": "Merge pull request #1483 from TeoZosa/dependabot/pip/orjson-3.10.10",
          "timestamp": "2024-10-23T14:24:57Z",
          "tree_id": "12948fa74d7fecff6e1349b89fc406c884b2378c",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/438d98bdcb9eae5e55657555e7ec1d319decbc13"
        },
        "date": 1729695638358,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 821.1703001245066,
            "unit": "iter/sec",
            "range": "stddev: 0.000031190653170345",
            "extra": "mean: 1.2177741935483772 msec\nrounds: 837"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1116.6336515966577,
            "unit": "iter/sec",
            "range": "stddev: 0.00007038192604636804",
            "extra": "mean: 895.5488656195477 usec\nrounds: 1146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1388.663350014945,
            "unit": "iter/sec",
            "range": "stddev: 0.000010473258929568128",
            "extra": "mean: 720.1169383416346 usec\nrounds: 1411"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2626.17989037613,
            "unit": "iter/sec",
            "range": "stddev: 0.000008346521944698285",
            "extra": "mean: 380.7812266267779 usec\nrounds: 2674"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 744.2595446653228,
            "unit": "iter/sec",
            "range": "stddev: 0.00001655382740111702",
            "extra": "mean: 1.3436173001310694 msec\nrounds: 763"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 999.8631663311178,
            "unit": "iter/sec",
            "range": "stddev: 0.00004118573794938264",
            "extra": "mean: 1.0001368523948975 msec\nrounds: 1023"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1312.431860196959,
            "unit": "iter/sec",
            "range": "stddev: 0.00001645118462632618",
            "extra": "mean: 761.9443190368208 usec\nrounds: 1329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2397.7413687181106,
            "unit": "iter/sec",
            "range": "stddev: 0.000007222482525016354",
            "extra": "mean: 417.0591595267106 usec\nrounds: 2451"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.977477526983932,
            "unit": "iter/sec",
            "range": "stddev: 0.0006476548047794651",
            "extra": "mean: 38.49488461538487 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.78324321268057,
            "unit": "iter/sec",
            "range": "stddev: 0.0001289139048822469",
            "extra": "mean: 37.336777777776675 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1076.9024049840511,
            "unit": "iter/sec",
            "range": "stddev: 0.00003565122441607097",
            "extra": "mean: 928.5892531875347 usec\nrounds: 1098"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1742.3103426670361,
            "unit": "iter/sec",
            "range": "stddev: 0.00002444150361952128",
            "extra": "mean: 573.9505617978788 usec\nrounds: 1780"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2388.6234862793617,
            "unit": "iter/sec",
            "range": "stddev: 0.00002164541688330461",
            "extra": "mean: 418.65116279068724 usec\nrounds: 2494"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 2217.093392455786,
            "unit": "iter/sec",
            "range": "stddev: 0.000019866384781719066",
            "extra": "mean: 451.04099060632706 usec\nrounds: 2342"
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
          "id": "0e8bd5e25ce86507625ee41de0e0c0b9e5a465db",
          "message": "Merge pull request #1484 from TeoZosa/dependabot/pip/mypy-1.13.0",
          "timestamp": "2024-10-23T14:30:36Z",
          "tree_id": "7160f6ca8bad0cafa893cfded2100a91e3f25281",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/0e8bd5e25ce86507625ee41de0e0c0b9e5a465db"
        },
        "date": 1729696765739,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 799.2348683596381,
            "unit": "iter/sec",
            "range": "stddev: 0.00008365911733024356",
            "extra": "mean: 1.2511966626936777 msec\nrounds: 839"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1118.6762910181162,
            "unit": "iter/sec",
            "range": "stddev: 0.00004315583873544183",
            "extra": "mean: 893.9136442141739 usec\nrounds: 1158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1389.3214585238952,
            "unit": "iter/sec",
            "range": "stddev: 0.000019821770703313603",
            "extra": "mean: 719.7758257203229 usec\nrounds: 1423"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2650.480565935323,
            "unit": "iter/sec",
            "range": "stddev: 0.000008480670969427442",
            "extra": "mean: 377.29007065822873 usec\nrounds: 2689"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 724.6493198027204,
            "unit": "iter/sec",
            "range": "stddev: 0.0002374468928480566",
            "extra": "mean: 1.379977835723687 msec\nrounds: 767"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 992.2803298316554,
            "unit": "iter/sec",
            "range": "stddev: 0.00004710681394792515",
            "extra": "mean: 1.0077797270955218 msec\nrounds: 1026"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1264.4208323196149,
            "unit": "iter/sec",
            "range": "stddev: 0.00007675253664270919",
            "extra": "mean: 790.8759286775372 usec\nrounds: 1346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2095.5434434111016,
            "unit": "iter/sec",
            "range": "stddev: 0.00009490491657376525",
            "extra": "mean: 477.20318237459753 usec\nrounds: 2451"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.14336782288527,
            "unit": "iter/sec",
            "range": "stddev: 0.0038361970118654222",
            "extra": "mean: 43.20892307692367 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.321256778424004,
            "unit": "iter/sec",
            "range": "stddev: 0.0025811739400564407",
            "extra": "mean: 41.116296296296866 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 926.056563842858,
            "unit": "iter/sec",
            "range": "stddev: 0.00026587711687318694",
            "extra": "mean: 1.079847645429237 msec\nrounds: 1083"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1414.0661251243116,
            "unit": "iter/sec",
            "range": "stddev: 0.0002658201024951234",
            "extra": "mean: 707.180507497193 usec\nrounds: 1734"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 923.5616675208308,
            "unit": "iter/sec",
            "range": "stddev: 0.0006499227908038862",
            "extra": "mean: 1.082764730463919 msec\nrounds: 2393"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1175.2898537077267,
            "unit": "iter/sec",
            "range": "stddev: 0.0005175273775706371",
            "extra": "mean: 850.8539377288643 usec\nrounds: 2184"
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
          "id": "c57a976b58f2cd8fb3ee1b203c421c9a03044f1a",
          "message": "Merge pull request #1485 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.23.2",
          "timestamp": "2024-10-23T14:42:58Z",
          "tree_id": "3f19c7c73afb006918a5d6e6f4485baadedbcdaf",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/c57a976b58f2cd8fb3ee1b203c421c9a03044f1a"
        },
        "date": 1729698634394,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 753.1376979241409,
            "unit": "iter/sec",
            "range": "stddev: 0.00014000811047069594",
            "extra": "mean: 1.327778443113764 msec\nrounds: 835"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1123.8037520924183,
            "unit": "iter/sec",
            "range": "stddev: 0.00002011460243961279",
            "extra": "mean: 889.8350785340348 usec\nrounds: 1146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1303.6852571131428,
            "unit": "iter/sec",
            "range": "stddev: 0.00015460207665267948",
            "extra": "mean: 767.0563079116058 usec\nrounds: 1403"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2232.560637941603,
            "unit": "iter/sec",
            "range": "stddev: 0.00008980829590366751",
            "extra": "mean: 447.91616541353574 usec\nrounds: 2660"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 604.487007099159,
            "unit": "iter/sec",
            "range": "stddev: 0.0005490013949165165",
            "extra": "mean: 1.6542952755905336 msec\nrounds: 762"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 971.3013340857182,
            "unit": "iter/sec",
            "range": "stddev: 0.00010618419393240332",
            "extra": "mean: 1.0295466143277727 msec\nrounds: 1019"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1287.0691540889236,
            "unit": "iter/sec",
            "range": "stddev: 0.00003520174837276939",
            "extra": "mean: 776.9590288315698 usec\nrounds: 1318"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2388.564289126423,
            "unit": "iter/sec",
            "range": "stddev: 0.000021240060178875758",
            "extra": "mean: 418.6615384615556 usec\nrounds: 2470"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.255315179162938,
            "unit": "iter/sec",
            "range": "stddev: 0.002744822994994111",
            "extra": "mean: 41.22807692307672 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.45462430388713,
            "unit": "iter/sec",
            "range": "stddev: 0.0035710040094237656",
            "extra": "mean: 39.28559259259198 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 928.7514926363183,
            "unit": "iter/sec",
            "range": "stddev: 0.00021470890655174137",
            "extra": "mean: 1.0767142857142964 msec\nrounds: 1071"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1630.119449995415,
            "unit": "iter/sec",
            "range": "stddev: 0.00010007962465372094",
            "extra": "mean: 613.4519774012957 usec\nrounds: 1770"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1885.0312345288273,
            "unit": "iter/sec",
            "range": "stddev: 0.00017613673835582496",
            "extra": "mean: 530.4951884523838 usec\nrounds: 2494"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1605.719977728704,
            "unit": "iter/sec",
            "range": "stddev: 0.00019248280546083904",
            "extra": "mean: 622.7735930734966 usec\nrounds: 2310"
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
          "id": "aabadf0bb739344423632cab1efe3a5bca0aa4b4",
          "message": "Merge pull request #1486 from TeoZosa/dependabot/pip/orjson-3.10.10",
          "timestamp": "2024-10-24T13:37:15Z",
          "tree_id": "8ccae666915a96968c87bae8b7c2a15549b78e12",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/aabadf0bb739344423632cab1efe3a5bca0aa4b4"
        },
        "date": 1729777352198,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 710.2278732310847,
            "unit": "iter/sec",
            "range": "stddev: 0.0002021719402962654",
            "extra": "mean: 1.4079988095238174 msec\nrounds: 840"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1065.1804252471493,
            "unit": "iter/sec",
            "range": "stddev: 0.00006421837879980416",
            "extra": "mean: 938.8080895008695 usec\nrounds: 1162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1382.2426518624816,
            "unit": "iter/sec",
            "range": "stddev: 0.000015046767201182229",
            "extra": "mean: 723.461975835115 usec\nrounds: 1407"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2612.668334517203,
            "unit": "iter/sec",
            "range": "stddev: 0.00002541848720756711",
            "extra": "mean: 382.75045737284165 usec\nrounds: 2733"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 743.9712422364581,
            "unit": "iter/sec",
            "range": "stddev: 0.000030214333311781742",
            "extra": "mean: 1.344137976346897 msec\nrounds: 761"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1012.6861598901751,
            "unit": "iter/sec",
            "range": "stddev: 0.000016880652065911463",
            "extra": "mean: 987.4727626458814 usec\nrounds: 1028"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1316.8158467018104,
            "unit": "iter/sec",
            "range": "stddev: 0.000012210811758027308",
            "extra": "mean: 759.4076290201627 usec\nrounds: 1337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2342.187784575228,
            "unit": "iter/sec",
            "range": "stddev: 0.0000470502193010964",
            "extra": "mean: 426.95124899276897 usec\nrounds: 2482"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.752365255701058,
            "unit": "iter/sec",
            "range": "stddev: 0.0006346836110642325",
            "extra": "mean: 38.83138461538479 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.179787264988185,
            "unit": "iter/sec",
            "range": "stddev: 0.0006876889535726821",
            "extra": "mean: 38.197407407407034 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1070.7745887716799,
            "unit": "iter/sec",
            "range": "stddev: 0.000046929086874050804",
            "extra": "mean: 933.9033728351102 usec\nrounds: 1097"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1599.1346914467647,
            "unit": "iter/sec",
            "range": "stddev: 0.0002367127439720133",
            "extra": "mean: 625.3381940549879 usec\nrounds: 1783"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2069.4474526256695,
            "unit": "iter/sec",
            "range": "stddev: 0.00007654243402688025",
            "extra": "mean: 483.2207740917615 usec\nrounds: 2532"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1569.9610096121612,
            "unit": "iter/sec",
            "range": "stddev: 0.00015902524000301126",
            "extra": "mean: 636.9584937953568 usec\nrounds: 2337"
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
          "id": "a400ea71468c8920448aa448ef44e9bdb53f86fb",
          "message": "Merge pull request #1487 from TeoZosa/dependabot/github_actions/crazy-max/ghaction-github-labeler-5.1.0",
          "timestamp": "2024-10-28T13:36:03Z",
          "tree_id": "c486816eb83bcdef0cb387d280d0b13453957925",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/a400ea71468c8920448aa448ef44e9bdb53f86fb"
        },
        "date": 1730124001480,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 774.7966158883363,
            "unit": "iter/sec",
            "range": "stddev: 0.00005776343415853949",
            "extra": "mean: 1.2906612903225692 msec\nrounds: 806"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1036.7797376069946,
            "unit": "iter/sec",
            "range": "stddev: 0.00007290617059115792",
            "extra": "mean: 964.52502274795 usec\nrounds: 1099"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1280.4698184548704,
            "unit": "iter/sec",
            "range": "stddev: 0.00007750770294050751",
            "extra": "mean: 780.9633507853308 usec\nrounds: 1337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2441.187159297502,
            "unit": "iter/sec",
            "range": "stddev: 0.00001180141878304954",
            "extra": "mean: 409.63676061927555 usec\nrounds: 2519"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 707.4592552259063,
            "unit": "iter/sec",
            "range": "stddev: 0.000036478238266417296",
            "extra": "mean: 1.4135089655172854 msec\nrounds: 725"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 957.1504597636668,
            "unit": "iter/sec",
            "range": "stddev: 0.00004288275582716242",
            "extra": "mean: 1.0447678207738762 msec\nrounds: 982"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1229.8904733973172,
            "unit": "iter/sec",
            "range": "stddev: 0.0000834344021154279",
            "extra": "mean: 813.0805316653177 usec\nrounds: 1279"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2206.1688683785783,
            "unit": "iter/sec",
            "range": "stddev: 0.00002643525797200914",
            "extra": "mean: 453.2744588744692 usec\nrounds: 2310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.611524312786596,
            "unit": "iter/sec",
            "range": "stddev: 0.001980155970288306",
            "extra": "mean: 42.35219999999998 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.839878322811117,
            "unit": "iter/sec",
            "range": "stddev: 0.0012424297386103309",
            "extra": "mean: 40.257846153846636 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 948.0356264683915,
            "unit": "iter/sec",
            "range": "stddev: 0.00022976252052726525",
            "extra": "mean: 1.0548126801153934 msec\nrounds: 1041"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1593.3516027523394,
            "unit": "iter/sec",
            "range": "stddev: 0.0000538347256336693",
            "extra": "mean: 627.6078665076874 usec\nrounds: 1678"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1771.546730411093,
            "unit": "iter/sec",
            "range": "stddev: 0.00016161640406350065",
            "extra": "mean: 564.4784768211825 usec\nrounds: 2416"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1843.3187264162625,
            "unit": "iter/sec",
            "range": "stddev: 0.00009529159523077148",
            "extra": "mean: 542.4997780737447 usec\nrounds: 2253"
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
          "id": "801ee64296e251dd25ade28df79120f731529ea0",
          "message": "Merge pull request #1489 from TeoZosa/dependabot/pip/docs/sphinx-autoapi-3.3.3",
          "timestamp": "2024-10-28T14:18:28Z",
          "tree_id": "b722e08f4205ffa6571d73e92e56882485a55b4d",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/801ee64296e251dd25ade28df79120f731529ea0"
        },
        "date": 1730126738944,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 825.410977771327,
            "unit": "iter/sec",
            "range": "stddev: 0.00008757048592711383",
            "extra": "mean: 1.2115176886792525 msec\nrounds: 848"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1131.613903464178,
            "unit": "iter/sec",
            "range": "stddev: 0.000024878843941409816",
            "extra": "mean: 883.6936316695368 usec\nrounds: 1162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1379.9591978046435,
            "unit": "iter/sec",
            "range": "stddev: 0.000012172840087567294",
            "extra": "mean: 724.659107016269 usec\nrounds: 1411"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2508.4652515341754,
            "unit": "iter/sec",
            "range": "stddev: 0.00003018760879558106",
            "extra": "mean: 398.6501305483107 usec\nrounds: 2681"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 749.8894643451969,
            "unit": "iter/sec",
            "range": "stddev: 0.00008444326827258705",
            "extra": "mean: 1.3335298701298592 msec\nrounds: 770"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1015.0432349574518,
            "unit": "iter/sec",
            "range": "stddev: 0.000024070025459937284",
            "extra": "mean: 985.1797101449748 usec\nrounds: 1035"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1306.141602956487,
            "unit": "iter/sec",
            "range": "stddev: 0.00002930197557719105",
            "extra": "mean: 765.6137724550483 usec\nrounds: 1336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2285.06381356105,
            "unit": "iter/sec",
            "range": "stddev: 0.00007912501070447619",
            "extra": "mean: 437.6245398773337 usec\nrounds: 2445"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.047976508851367,
            "unit": "iter/sec",
            "range": "stddev: 0.0013638374412488666",
            "extra": "mean: 39.92338461538495 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.24039310052598,
            "unit": "iter/sec",
            "range": "stddev: 0.00021007636652449772",
            "extra": "mean: 38.109185185185176 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 901.3350101339257,
            "unit": "iter/sec",
            "range": "stddev: 0.00029122369863731625",
            "extra": "mean: 1.109465391621051 msec\nrounds: 1098"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1608.6898635092277,
            "unit": "iter/sec",
            "range": "stddev: 0.0001192313070539025",
            "extra": "mean: 621.6238584475072 usec\nrounds: 1752"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1388.9233500675148,
            "unit": "iter/sec",
            "range": "stddev: 0.00026716133327438836",
            "extra": "mean: 719.9821357682487 usec\nrounds: 2519"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1715.619296186855,
            "unit": "iter/sec",
            "range": "stddev: 0.0001886242188134097",
            "extra": "mean: 582.8798977853685 usec\nrounds: 2348"
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
          "id": "58214f2c8d765586160e3a30f5ee5f5623ce86c2",
          "message": "Merge pull request #1491 from TeoZosa/dependabot/pip/sphinx-autoapi-3.3.3",
          "timestamp": "2024-10-28T15:12:03Z",
          "tree_id": "8215281af2ec2fc841858b58841572d638467b8f",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/58214f2c8d765586160e3a30f5ee5f5623ce86c2"
        },
        "date": 1730128862970,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 697.6977661016709,
            "unit": "iter/sec",
            "range": "stddev: 0.0002387204658987877",
            "extra": "mean: 1.4332853688029101 msec\nrounds: 827"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1061.3475511414274,
            "unit": "iter/sec",
            "range": "stddev: 0.00010135256347510975",
            "extra": "mean: 942.198433420371 usec\nrounds: 1149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1217.2159822113574,
            "unit": "iter/sec",
            "range": "stddev: 0.0001136736209736362",
            "extra": "mean: 821.5468861847066 usec\nrounds: 1397"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2396.0802908172145,
            "unit": "iter/sec",
            "range": "stddev: 0.00005150678389874816",
            "extra": "mean: 417.34828496040797 usec\nrounds: 2653"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 654.4287907226272,
            "unit": "iter/sec",
            "range": "stddev: 0.0002314364827938657",
            "extra": "mean: 1.5280501319261783 msec\nrounds: 758"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 925.703239507595,
            "unit": "iter/sec",
            "range": "stddev: 0.00012606544615553338",
            "extra": "mean: 1.0802598039215303 msec\nrounds: 1020"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1198.8730593241983,
            "unit": "iter/sec",
            "range": "stddev: 0.00014661632671033483",
            "extra": "mean: 834.1166666666925 usec\nrounds: 1320"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2018.5772447506056,
            "unit": "iter/sec",
            "range": "stddev: 0.00018781999928922815",
            "extra": "mean: 495.39843104867145 usec\nrounds: 2422"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.472932623653293,
            "unit": "iter/sec",
            "range": "stddev: 0.007157050749668139",
            "extra": "mean: 51.353333333332884 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.954353890028614,
            "unit": "iter/sec",
            "range": "stddev: 0.003725511413663425",
            "extra": "mean: 43.56471999999968 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 864.5202080549557,
            "unit": "iter/sec",
            "range": "stddev: 0.00029445709771434153",
            "extra": "mean: 1.1567109602329066 msec\nrounds: 1031"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1585.2657984327611,
            "unit": "iter/sec",
            "range": "stddev: 0.00014851512609862552",
            "extra": "mean: 630.8090422367205 usec\nrounds: 1681"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1480.5720921066525,
            "unit": "iter/sec",
            "range": "stddev: 0.0002463466126283922",
            "extra": "mean: 675.414595028018 usec\nrounds: 2494"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1359.218683826603,
            "unit": "iter/sec",
            "range": "stddev: 0.0004718228311449744",
            "extra": "mean: 735.716784869896 usec\nrounds: 2115"
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
          "id": "c6cc88922d99e030e2b3cf3714443b2f2cde3239",
          "message": "Merge pull request #1493 from TeoZosa/dependabot/github_actions/pypa/gh-action-pypi-publish-1.11.0",
          "timestamp": "2024-10-30T13:54:43Z",
          "tree_id": "cb62810936ede19f335fc4997635aea8ea505d42",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/c6cc88922d99e030e2b3cf3714443b2f2cde3239"
        },
        "date": 1730297015469,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 563.8871418026561,
            "unit": "iter/sec",
            "range": "stddev: 0.0006261207721207663",
            "extra": "mean: 1.7734045092838289 msec\nrounds: 754"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 798.0425429224783,
            "unit": "iter/sec",
            "range": "stddev: 0.00047330584593573437",
            "extra": "mean: 1.253066028708121 msec\nrounds: 1045"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 931.1838445772155,
            "unit": "iter/sec",
            "range": "stddev: 0.00044725185785771674",
            "extra": "mean: 1.0739017926734211 msec\nrounds: 1283"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1749.6624567371352,
            "unit": "iter/sec",
            "range": "stddev: 0.0003302070006844532",
            "extra": "mean: 571.5388109000486 usec\nrounds: 2422"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 449.08701211002426,
            "unit": "iter/sec",
            "range": "stddev: 0.0009153212676747738",
            "extra": "mean: 2.226739970282206 msec\nrounds: 673"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 711.4693904035478,
            "unit": "iter/sec",
            "range": "stddev: 0.0003977869275225845",
            "extra": "mean: 1.405541845493587 msec\nrounds: 932"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 895.0069169762113,
            "unit": "iter/sec",
            "range": "stddev: 0.0004541309362604959",
            "extra": "mean: 1.1173098006644562 msec\nrounds: 1204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1443.4973879571917,
            "unit": "iter/sec",
            "range": "stddev: 0.0004403029732888023",
            "extra": "mean: 692.7619047618643 usec\nrounds: 2184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.8479558579281,
            "unit": "iter/sec",
            "range": "stddev: 0.004888743313817979",
            "extra": "mean: 47.96633333333341 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.815067209277405,
            "unit": "iter/sec",
            "range": "stddev: 0.011222349702177002",
            "extra": "mean: 56.13226086956541 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 725.1428339585499,
            "unit": "iter/sec",
            "range": "stddev: 0.0006759309417501554",
            "extra": "mean: 1.379038657171866 msec\nrounds: 983"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1153.4591503668846,
            "unit": "iter/sec",
            "range": "stddev: 0.00046153464373511186",
            "extra": "mean: 866.9574468085209 usec\nrounds: 1598"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 982.7628737336032,
            "unit": "iter/sec",
            "range": "stddev: 0.0005786932144253779",
            "extra": "mean: 1.017539456085588 msec\nrounds: 2243"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 933.6803328602327,
            "unit": "iter/sec",
            "range": "stddev: 0.0006700298804082897",
            "extra": "mean: 1.0710303781772974 msec\nrounds: 1613"
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
          "id": "21eefb2d9fec5fb31640eda85fa0788411970fa8",
          "message": "Merge pull request #1496 from TeoZosa/dependabot/pip/docs/orjson-3.10.11",
          "timestamp": "2024-11-04T14:41:08Z",
          "tree_id": "1aa94739ec9c5fce5deceefaa655d078b0b0320f",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/21eefb2d9fec5fb31640eda85fa0788411970fa8"
        },
        "date": 1730731804794,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 545.2593999850842,
            "unit": "iter/sec",
            "range": "stddev: 0.0010532988857435356",
            "extra": "mean: 1.8339894736841869 msec\nrounds: 760"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 562.7348274350799,
            "unit": "iter/sec",
            "range": "stddev: 0.0014130575672620708",
            "extra": "mean: 1.777035916824191 msec\nrounds: 1058"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1005.8211214632287,
            "unit": "iter/sec",
            "range": "stddev: 0.0005604164224762322",
            "extra": "mean: 994.2125678820898 usec\nrounds: 1289"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1647.2013660110324,
            "unit": "iter/sec",
            "range": "stddev: 0.0004497259328889928",
            "extra": "mean: 607.0903173311856 usec\nrounds: 2458"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 503.85477946917933,
            "unit": "iter/sec",
            "range": "stddev: 0.001169555754919727",
            "extra": "mean: 1.9846988472621399 msec\nrounds: 694"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 669.8018893817281,
            "unit": "iter/sec",
            "range": "stddev: 0.0007625174143586454",
            "extra": "mean: 1.4929787685774771 msec\nrounds: 942"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 896.1754203324983,
            "unit": "iter/sec",
            "range": "stddev: 0.0006200444072653582",
            "extra": "mean: 1.1158529650690272 msec\nrounds: 1231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1611.5816910613096,
            "unit": "iter/sec",
            "range": "stddev: 0.0003977900550930308",
            "extra": "mean: 620.5084145262587 usec\nrounds: 2258"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 16.49821465748524,
            "unit": "iter/sec",
            "range": "stddev: 0.009267207381277575",
            "extra": "mean: 60.61261904761919 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 15.449752839067786,
            "unit": "iter/sec",
            "range": "stddev: 0.015023776360844477",
            "extra": "mean: 64.72595454545397 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 605.125189867221,
            "unit": "iter/sec",
            "range": "stddev: 0.0008468570228154309",
            "extra": "mean: 1.652550607287434 msec\nrounds: 988"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1350.9307626952948,
            "unit": "iter/sec",
            "range": "stddev: 0.00031010063159862356",
            "extra": "mean: 740.230386052399 usec\nrounds: 1606"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 776.6344182690863,
            "unit": "iter/sec",
            "range": "stddev: 0.0010649143770160355",
            "extra": "mean: 1.2876071115013636 msec\nrounds: 2278"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 586.5100892246618,
            "unit": "iter/sec",
            "range": "stddev: 0.0018057146301977797",
            "extra": "mean: 1.7050005078718287 msec\nrounds: 1969"
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
          "id": "0d2a9e41a956ccbcef8329161cdb6bed5587d9bc",
          "message": "Merge pull request #1497 from TeoZosa/dependabot/pip/orjson-3.10.11",
          "timestamp": "2024-11-04T15:32:32Z",
          "tree_id": "7c2efc407c232ed71d6e76423981d166fab32fb3",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/0d2a9e41a956ccbcef8329161cdb6bed5587d9bc"
        },
        "date": 1730735158270,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 772.3813716549755,
            "unit": "iter/sec",
            "range": "stddev: 0.00011818833040696045",
            "extra": "mean: 1.2946972010178184 msec\nrounds: 786"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1033.8489814672969,
            "unit": "iter/sec",
            "range": "stddev: 0.00016099356057626296",
            "extra": "mean: 967.2592592592619 usec\nrounds: 1134"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1122.6965260607346,
            "unit": "iter/sec",
            "range": "stddev: 0.0003551237855535082",
            "extra": "mean: 890.7126518942332 usec\nrounds: 1399"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2126.054235163984,
            "unit": "iter/sec",
            "range": "stddev: 0.00016653802191712684",
            "extra": "mean: 470.3548872180438 usec\nrounds: 2660"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 738.2387540831176,
            "unit": "iter/sec",
            "range": "stddev: 0.0001475968137066083",
            "extra": "mean: 1.354575324675262 msec\nrounds: 770"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 995.6962720358271,
            "unit": "iter/sec",
            "range": "stddev: 0.00003071229207897759",
            "extra": "mean: 1.004322330097082 msec\nrounds: 1030"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1296.563477385191,
            "unit": "iter/sec",
            "range": "stddev: 0.00005385583696824648",
            "extra": "mean: 771.2696041822209 usec\nrounds: 1339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2271.7253375010077,
            "unit": "iter/sec",
            "range": "stddev: 0.00004060246555204822",
            "extra": "mean: 440.19406021154015 usec\nrounds: 2458"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.084660729963787,
            "unit": "iter/sec",
            "range": "stddev: 0.000761720736228789",
            "extra": "mean: 39.864999999999746 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.686032829440826,
            "unit": "iter/sec",
            "range": "stddev: 0.007387322504171665",
            "extra": "mean: 46.112629629629915 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 942.8024543945173,
            "unit": "iter/sec",
            "range": "stddev: 0.00020793595734713613",
            "extra": "mean: 1.060667582417587 msec\nrounds: 1092"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1576.654079055981,
            "unit": "iter/sec",
            "range": "stddev: 0.00011658732802486241",
            "extra": "mean: 634.2545351474614 usec\nrounds: 1764"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1621.125718038365,
            "unit": "iter/sec",
            "range": "stddev: 0.0004074684907238539",
            "extra": "mean: 616.8553054664045 usec\nrounds: 2488"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1625.4756363367756,
            "unit": "iter/sec",
            "range": "stddev: 0.0001370431882622805",
            "extra": "mean: 615.204545454543 usec\nrounds: 2332"
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
          "id": "0d7329f9c24b528ef32b7fabf98cceee5b004031",
          "message": "Merge pull request #1498 from TeoZosa/dependabot/pip/sentry-sdk-2.18.0",
          "timestamp": "2024-11-04T15:37:30Z",
          "tree_id": "f20e21d63d6845e027d7f982264a1a57850c3840",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/0d7329f9c24b528ef32b7fabf98cceee5b004031"
        },
        "date": 1730736095660,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 747.8008223128699,
            "unit": "iter/sec",
            "range": "stddev: 0.00012654206137204476",
            "extra": "mean: 1.3372544802867485 msec\nrounds: 837"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1021.662989924741,
            "unit": "iter/sec",
            "range": "stddev: 0.0001014279422935982",
            "extra": "mean: 978.7963446475272 usec\nrounds: 1149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1306.773770504032,
            "unit": "iter/sec",
            "range": "stddev: 0.00008660742298037015",
            "extra": "mean: 765.2433975731643 usec\nrounds: 1401"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2586.4800746823717,
            "unit": "iter/sec",
            "range": "stddev: 0.00002036599664256021",
            "extra": "mean: 386.6258278145844 usec\nrounds: 2718"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 708.5793031527691,
            "unit": "iter/sec",
            "range": "stddev: 0.00008753450147264557",
            "extra": "mean: 1.4112746386333568 msec\nrounds: 761"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 917.2264157592812,
            "unit": "iter/sec",
            "range": "stddev: 0.00029478755579219983",
            "extra": "mean: 1.0902433497537232 msec\nrounds: 1015"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1285.8165807355906,
            "unit": "iter/sec",
            "range": "stddev: 0.0000278115004709272",
            "extra": "mean: 777.7159005275228 usec\nrounds: 1327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2114.155812767291,
            "unit": "iter/sec",
            "range": "stddev: 0.00013272249423559415",
            "extra": "mean: 473.00203417413485 usec\nrounds: 2458"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.125808847400712,
            "unit": "iter/sec",
            "range": "stddev: 0.0023618212897284193",
            "extra": "mean: 43.24173076923092 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.11228087120312,
            "unit": "iter/sec",
            "range": "stddev: 0.00172956736075397",
            "extra": "mean: 39.82115384615362 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1034.9019690110044,
            "unit": "iter/sec",
            "range": "stddev: 0.00007865357664057517",
            "extra": "mean: 966.2750965249799 usec\nrounds: 1036"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1579.8701597844183,
            "unit": "iter/sec",
            "range": "stddev: 0.00008562018216448437",
            "extra": "mean: 632.9634076615862 usec\nrounds: 1749"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1712.3402881033373,
            "unit": "iter/sec",
            "range": "stddev: 0.00021394006497066267",
            "extra": "mean: 583.9960707270653 usec\nrounds: 2545"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1785.4019815833128,
            "unit": "iter/sec",
            "range": "stddev: 0.00015939322186886797",
            "extra": "mean: 560.0979557069774 usec\nrounds: 2348"
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
          "id": "f5651caa381da6f661fbbd155a7dd8ecb36e3c7c",
          "message": "Merge pull request #1499 from TeoZosa/dependabot/pip/rich-13.9.4",
          "timestamp": "2024-11-04T15:44:17Z",
          "tree_id": "993ed23eddb93975385ce57ef75edddc9aba9ea5",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/f5651caa381da6f661fbbd155a7dd8ecb36e3c7c"
        },
        "date": 1730737007850,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 779.9731197807861,
            "unit": "iter/sec",
            "range": "stddev: 0.00003813076229470453",
            "extra": "mean: 1.2820954653937986 msec\nrounds: 838"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1145.1432020808081,
            "unit": "iter/sec",
            "range": "stddev: 0.000015415776468506998",
            "extra": "mean: 873.2532299741442 usec\nrounds: 1161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1367.2016937410156,
            "unit": "iter/sec",
            "range": "stddev: 0.000014940590127867104",
            "extra": "mean: 731.4209780297614 usec\nrounds: 1411"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2514.0652140745788,
            "unit": "iter/sec",
            "range": "stddev: 0.0000087020160383725",
            "extra": "mean: 397.7621560497577 usec\nrounds: 2653"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 745.1477502006657,
            "unit": "iter/sec",
            "range": "stddev: 0.000019088198772474376",
            "extra": "mean: 1.3420157273919213 msec\nrounds: 763"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 974.8743148957886,
            "unit": "iter/sec",
            "range": "stddev: 0.00008893952730277718",
            "extra": "mean: 1.0257732558139017 msec\nrounds: 1032"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1192.5590031063653,
            "unit": "iter/sec",
            "range": "stddev: 0.00009900937250269644",
            "extra": "mean: 838.5329341317373 usec\nrounds: 1336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2018.3171961282703,
            "unit": "iter/sec",
            "range": "stddev: 0.0001965674618153016",
            "extra": "mean: 495.46226030194657 usec\nrounds: 2451"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.16285177467557,
            "unit": "iter/sec",
            "range": "stddev: 0.0021021396370948606",
            "extra": "mean: 43.17257692307649 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.927523531223294,
            "unit": "iter/sec",
            "range": "stddev: 0.0019826026222139748",
            "extra": "mean: 41.7928750000011 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 887.1612638410033,
            "unit": "iter/sec",
            "range": "stddev: 0.00034392943355504737",
            "extra": "mean: 1.1271907834100607 msec\nrounds: 1085"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1334.8616421610561,
            "unit": "iter/sec",
            "range": "stddev: 0.00035809985592836845",
            "extra": "mean: 749.1413105414158 usec\nrounds: 1755"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1443.7215491889203,
            "unit": "iter/sec",
            "range": "stddev: 0.0005167688346120307",
            "extra": "mean: 692.6543422184131 usec\nrounds: 2326"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1344.027854884442,
            "unit": "iter/sec",
            "range": "stddev: 0.0004925038611682742",
            "extra": "mean: 744.0321987121159 usec\nrounds: 2174"
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
          "id": "5b2126d132b2365d977f2dabf02bbbc0a96e2bb4",
          "message": "Merge pull request #1500 from TeoZosa/dependabot/github_actions/pypa/gh-action-pypi-publish-1.12.0",
          "timestamp": "2024-11-06T14:46:21Z",
          "tree_id": "457dc8776fe18182ce1b6df037de37a1ec4dcb8b",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/5b2126d132b2365d977f2dabf02bbbc0a96e2bb4"
        },
        "date": 1730904726044,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 638.4429033631118,
            "unit": "iter/sec",
            "range": "stddev: 0.0006512781862951659",
            "extra": "mean: 1.5663107769423417 msec\nrounds: 798"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 811.3282825918835,
            "unit": "iter/sec",
            "range": "stddev: 0.0007001385620476368",
            "extra": "mean: 1.2325467032967008 msec\nrounds: 1092"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 803.6171281082296,
            "unit": "iter/sec",
            "range": "stddev: 0.0009329085014456436",
            "extra": "mean: 1.2443736762481272 msec\nrounds: 1322"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1365.0381035282562,
            "unit": "iter/sec",
            "range": "stddev: 0.0005623591453571144",
            "extra": "mean: 732.5802828618989 usec\nrounds: 2404"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 474.80994376347365,
            "unit": "iter/sec",
            "range": "stddev: 0.0014186054803937808",
            "extra": "mean: 2.1061058495821006 msec\nrounds: 718"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 777.3973413010948,
            "unit": "iter/sec",
            "range": "stddev: 0.0004170543413979993",
            "extra": "mean: 1.286343478260866 msec\nrounds: 920"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1038.3321727961486,
            "unit": "iter/sec",
            "range": "stddev: 0.0004263287605687817",
            "extra": "mean: 963.0829383886633 usec\nrounds: 1266"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1760.0981465004168,
            "unit": "iter/sec",
            "range": "stddev: 0.0002978056485906752",
            "extra": "mean: 568.1501352571098 usec\nrounds: 2218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 15.367840233005582,
            "unit": "iter/sec",
            "range": "stddev: 0.01748598124348857",
            "extra": "mean: 65.070952380953 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.29486751256832,
            "unit": "iter/sec",
            "range": "stddev: 0.011795518043359824",
            "extra": "mean: 49.27354166666594 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 775.5840071535102,
            "unit": "iter/sec",
            "range": "stddev: 0.0006200166640809361",
            "extra": "mean: 1.2893509803923424 msec\nrounds: 1020"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1045.526041869916,
            "unit": "iter/sec",
            "range": "stddev: 0.000703973901469204",
            "extra": "mean: 956.4563291140093 usec\nrounds: 1580"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1031.3133262567596,
            "unit": "iter/sec",
            "range": "stddev: 0.0006440802217332083",
            "extra": "mean: 969.6374269006936 usec\nrounds: 2223"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1200.7922824044929,
            "unit": "iter/sec",
            "range": "stddev: 0.0005233438553110128",
            "extra": "mean: 832.783500238341 usec\nrounds: 2097"
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
          "id": "daace40f44156e576c7ed0488f351f91cd5b6761",
          "message": ":arrow_up: Bump Python `3.12.6` to `3.12.7`",
          "timestamp": "2024-11-07T09:20:15+09:00",
          "tree_id": "cd2ff39777f03a5e5b4a32efe1288d88dfe8efb0",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/daace40f44156e576c7ed0488f351f91cd5b6761"
        },
        "date": 1730939275485,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 781.4428284691179,
            "unit": "iter/sec",
            "range": "stddev: 0.00013404300283856955",
            "extra": "mean: 1.2796841477949779 msec\nrounds: 839"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1078.7132665799465,
            "unit": "iter/sec",
            "range": "stddev: 0.00010097915383539445",
            "extra": "mean: 927.0304083405719 usec\nrounds: 1151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1339.7109054954267,
            "unit": "iter/sec",
            "range": "stddev: 0.00007250594716871999",
            "extra": "mean: 746.4296930763574 usec\nrounds: 1401"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2442.403606501749,
            "unit": "iter/sec",
            "range": "stddev: 0.00004767533702193911",
            "extra": "mean: 409.43273967413535 usec\nrounds: 2639"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 738.1537985744297,
            "unit": "iter/sec",
            "range": "stddev: 0.00006024073484372196",
            "extra": "mean: 1.354731225296496 msec\nrounds: 759"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 993.9351459751192,
            "unit": "iter/sec",
            "range": "stddev: 0.000052404922370917066",
            "extra": "mean: 1.0061018609206447 msec\nrounds: 1021"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1294.4483526849249,
            "unit": "iter/sec",
            "range": "stddev: 0.00002329176856992718",
            "extra": "mean: 772.529856386943 usec\nrounds: 1323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2234.7351106193964,
            "unit": "iter/sec",
            "range": "stddev: 0.00006713298489736877",
            "extra": "mean: 447.4803278688508 usec\nrounds: 2440"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.971139125741164,
            "unit": "iter/sec",
            "range": "stddev: 0.0024208812661125406",
            "extra": "mean: 40.046230769230846 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.26816881676501,
            "unit": "iter/sec",
            "range": "stddev: 0.0001537621373152932",
            "extra": "mean: 38.06888888888877 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 981.7798252810834,
            "unit": "iter/sec",
            "range": "stddev: 0.0001539427192080561",
            "extra": "mean: 1.0185583103764635 msec\nrounds: 1089"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1700.0922634337733,
            "unit": "iter/sec",
            "range": "stddev: 0.00006765615202723781",
            "extra": "mean: 588.2033707866201 usec\nrounds: 1780"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1520.1620061803599,
            "unit": "iter/sec",
            "range": "stddev: 0.00027618122569982674",
            "extra": "mean: 657.8246239114036 usec\nrounds: 2526"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1687.2220902640527,
            "unit": "iter/sec",
            "range": "stddev: 0.00020158420912153117",
            "extra": "mean: 592.6902011124679 usec\nrounds: 2337"
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
          "id": "ff3364d840705d5366d03aa0ff5d87472c9997c8",
          "message": "Merge pull request #1494 from TeoZosa/dependabot/pip/pytest-cov-6.0.0\n\n⬆️ Bump pytest-cov from 5.0.0 to 6.0.0",
          "timestamp": "2024-11-07T09:39:30+09:00",
          "tree_id": "c0c0a3a9c5376be6be028fbbeb346d26bd76ddb7",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/ff3364d840705d5366d03aa0ff5d87472c9997c8"
        },
        "date": 1730940777431,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 773.563012367573,
            "unit": "iter/sec",
            "range": "stddev: 0.00004203820414599212",
            "extra": "mean: 1.2927195121951243 msec\nrounds: 820"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1013.6568514149574,
            "unit": "iter/sec",
            "range": "stddev: 0.0000865107565945815",
            "extra": "mean: 986.5271453590099 usec\nrounds: 1142"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1313.6621832274434,
            "unit": "iter/sec",
            "range": "stddev: 0.00002085315528757492",
            "extra": "mean: 761.2307127112169 usec\nrounds: 1361"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2438.59170180229,
            "unit": "iter/sec",
            "range": "stddev: 0.000031052496296914535",
            "extra": "mean: 410.072747832665 usec\nrounds: 2653"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 751.7996882445339,
            "unit": "iter/sec",
            "range": "stddev: 0.000011471790859715662",
            "extra": "mean: 1.330141546526866 msec\nrounds: 763"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1003.3524006463736,
            "unit": "iter/sec",
            "range": "stddev: 0.000017328251809321916",
            "extra": "mean: 996.6588003933474 usec\nrounds: 1017"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1312.424579627852,
            "unit": "iter/sec",
            "range": "stddev: 0.00002205034012776116",
            "extra": "mean: 761.9485458612469 usec\nrounds: 1341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2398.292720873417,
            "unit": "iter/sec",
            "range": "stddev: 0.000015731480141356818",
            "extra": "mean: 416.9632802937488 usec\nrounds: 2451"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.89257171993404,
            "unit": "iter/sec",
            "range": "stddev: 0.000651336062378217",
            "extra": "mean: 38.621115384615315 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.55708100303166,
            "unit": "iter/sec",
            "range": "stddev: 0.0006644358273461899",
            "extra": "mean: 37.654740740740436 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1073.320994728614,
            "unit": "iter/sec",
            "range": "stddev: 0.00003276372258265267",
            "extra": "mean: 931.6877289378345 usec\nrounds: 1092"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1753.5439684186383,
            "unit": "iter/sec",
            "range": "stddev: 0.000010467158739982298",
            "extra": "mean: 570.2736960179043 usec\nrounds: 1783"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2348.828216210632,
            "unit": "iter/sec",
            "range": "stddev: 0.00002660877518906123",
            "extra": "mean: 425.74420432214555 usec\nrounds: 2545"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 2166.61220636807,
            "unit": "iter/sec",
            "range": "stddev: 0.000051764930535197624",
            "extra": "mean: 461.55006284041826 usec\nrounds: 2387"
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
          "id": "2a69bbda38c860262a9ed4dace7c5e3e395d747c",
          "message": "Merge pull request #1488 from TeoZosa/dependabot/pip/dot-github/workflows/pip-24.3.1\n\n⬆️ Bump pip from 24.2 to 24.3.1 in /.github/workflows",
          "timestamp": "2024-11-07T09:40:58+09:00",
          "tree_id": "d3ac5803dbe9d1b96b5672811511803626e62ec8",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/2a69bbda38c860262a9ed4dace7c5e3e395d747c"
        },
        "date": 1730941725847,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 814.414055908786,
            "unit": "iter/sec",
            "range": "stddev: 0.00003225610002375905",
            "extra": "mean: 1.227876646706598 msec\nrounds: 835"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1134.9507195021085,
            "unit": "iter/sec",
            "range": "stddev: 0.000011087949893567602",
            "extra": "mean: 881.095524956969 usec\nrounds: 1162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1388.305912074599,
            "unit": "iter/sec",
            "range": "stddev: 0.000015086662585728592",
            "extra": "mean: 720.302342086595 usec\nrounds: 1409"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2643.112688205049,
            "unit": "iter/sec",
            "range": "stddev: 0.00001076180817930869",
            "extra": "mean: 378.3417954378271 usec\nrounds: 2718"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 744.8701965673318,
            "unit": "iter/sec",
            "range": "stddev: 0.000020692230264468786",
            "extra": "mean: 1.342515789473671 msec\nrounds: 760"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1004.2011697373629,
            "unit": "iter/sec",
            "range": "stddev: 0.000012879677945615617",
            "extra": "mean: 995.8164062500927 usec\nrounds: 1024"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1315.5092026475209,
            "unit": "iter/sec",
            "range": "stddev: 0.000022865913093745798",
            "extra": "mean: 760.1619190405171 usec\nrounds: 1334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2412.8035494364062,
            "unit": "iter/sec",
            "range": "stddev: 0.000007742121151425453",
            "extra": "mean: 414.4556237218669 usec\nrounds: 2445"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.938655080734037,
            "unit": "iter/sec",
            "range": "stddev: 0.0005561234575170081",
            "extra": "mean: 38.55250000000004 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.69878431535395,
            "unit": "iter/sec",
            "range": "stddev: 0.000305299894597661",
            "extra": "mean: 37.4548888888892 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1062.776857318539,
            "unit": "iter/sec",
            "range": "stddev: 0.00001791322836541402",
            "extra": "mean: 940.9312906220697 usec\nrounds: 1077"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1705.5178060717558,
            "unit": "iter/sec",
            "range": "stddev: 0.000019660753960233888",
            "extra": "mean: 586.3321956768402 usec\nrounds: 1758"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2247.0159999220123,
            "unit": "iter/sec",
            "range": "stddev: 0.00003666505987234894",
            "extra": "mean: 445.0346593147121 usec\nrounds: 2539"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 2186.5571688767086,
            "unit": "iter/sec",
            "range": "stddev: 0.00003974928499373179",
            "extra": "mean: 457.3399745654609 usec\nrounds: 2359"
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
          "id": "1e63b2b7b745285d4f77c2b01a6c93a41126f0b2",
          "message": "Merge pull request #1501 from TeoZosa/dependabot/github_actions/pypa/gh-action-pypi-publish-1.12.2",
          "timestamp": "2024-11-07T14:20:21Z",
          "tree_id": "ea5114be30488b6b7b053404913dfb3581babf0b",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/1e63b2b7b745285d4f77c2b01a6c93a41126f0b2"
        },
        "date": 1730989664380,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 600.2700825078672,
            "unit": "iter/sec",
            "range": "stddev: 0.0005472329122522574",
            "extra": "mean: 1.6659167750325021 msec\nrounds: 769"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 848.1135839396997,
            "unit": "iter/sec",
            "range": "stddev: 0.0004558825780476613",
            "extra": "mean: 1.1790873521383185 msec\nrounds: 1099"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 887.2163192824239,
            "unit": "iter/sec",
            "range": "stddev: 0.0005442312230540136",
            "extra": "mean: 1.1271208365608005 msec\nrounds: 1291"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1675.9263510720598,
            "unit": "iter/sec",
            "range": "stddev: 0.0004071496300972712",
            "extra": "mean: 596.6849315068756 usec\nrounds: 2482"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 484.3326251647876,
            "unit": "iter/sec",
            "range": "stddev: 0.001336993952951792",
            "extra": "mean: 2.064696755994423 msec\nrounds: 709"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 761.1082979444195,
            "unit": "iter/sec",
            "range": "stddev: 0.0010265830458669875",
            "extra": "mean: 1.3138734693876977 msec\nrounds: 980"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 993.5001647967739,
            "unit": "iter/sec",
            "range": "stddev: 0.0004023517824015245",
            "extra": "mean: 1.0065423594615663 msec\nrounds: 1263"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2056.854263705066,
            "unit": "iter/sec",
            "range": "stddev: 0.00006309070254681394",
            "extra": "mean: 486.1793164668233 usec\nrounds: 2253"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.29598207015329,
            "unit": "iter/sec",
            "range": "stddev: 0.0014459887244728025",
            "extra": "mean: 44.85113043478174 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.928270282118813,
            "unit": "iter/sec",
            "range": "stddev: 0.0021094492669895206",
            "extra": "mean: 43.61427999999961 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 813.8584788742579,
            "unit": "iter/sec",
            "range": "stddev: 0.00043325981268701216",
            "extra": "mean: 1.2287148514852557 msec\nrounds: 1010"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1121.9582275797611,
            "unit": "iter/sec",
            "range": "stddev: 0.0004109659387408211",
            "extra": "mean: 891.2987804877156 usec\nrounds: 1640"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1388.340017719915,
            "unit": "iter/sec",
            "range": "stddev: 0.00040887259402563485",
            "extra": "mean: 720.2846473029786 usec\nrounds: 2410"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1086.2053853123855,
            "unit": "iter/sec",
            "range": "stddev: 0.0005913195472260118",
            "extra": "mean: 920.6362015157995 usec\nrounds: 2243"
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
          "id": "c92c8519b60c3c05bbc8dfd8e2f1124de5f0de8b",
          "message": "Merge pull request #1505 from TeoZosa/dependabot/pip/sphinx-rtd-theme-3.0.2",
          "timestamp": "2024-11-13T14:43:17Z",
          "tree_id": "10aade2337335d6104782b2dce3a45307f2a6e8d",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/c92c8519b60c3c05bbc8dfd8e2f1124de5f0de8b"
        },
        "date": 1731509895669,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 454.80660059944586,
            "unit": "iter/sec",
            "range": "stddev: 0.001482848139804443",
            "extra": "mean: 2.198736778846165 msec\nrounds: 832"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 818.0455534304342,
            "unit": "iter/sec",
            "range": "stddev: 0.000533949582673823",
            "extra": "mean: 1.2224258121159008 msec\nrounds: 1139"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1084.7462868894722,
            "unit": "iter/sec",
            "range": "stddev: 0.0003115006908508435",
            "extra": "mean: 921.8745545260324 usec\nrounds: 1403"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2006.6184008052608,
            "unit": "iter/sec",
            "range": "stddev: 0.00015712986883013725",
            "extra": "mean: 498.3508571428915 usec\nrounds: 2625"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 616.7843063035256,
            "unit": "iter/sec",
            "range": "stddev: 0.00021762833997624774",
            "extra": "mean: 1.6213123287671496 msec\nrounds: 730"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 781.9955568434629,
            "unit": "iter/sec",
            "range": "stddev: 0.0008467573616661072",
            "extra": "mean: 1.278779644268716 msec\nrounds: 1012"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1059.5156722553365,
            "unit": "iter/sec",
            "range": "stddev: 0.0002460048211124581",
            "extra": "mean: 943.827473425996 usec\nrounds: 1223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1757.7976166053268,
            "unit": "iter/sec",
            "range": "stddev: 0.0002349157390639309",
            "extra": "mean: 568.8937057106768 usec\nrounds: 2399"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.730417861622872,
            "unit": "iter/sec",
            "range": "stddev: 0.011938395275783503",
            "extra": "mean: 56.40025000000026 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.412242106496894,
            "unit": "iter/sec",
            "range": "stddev: 0.006784017325018367",
            "extra": "mean: 51.51388461538504 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 849.1268000175646,
            "unit": "iter/sec",
            "range": "stddev: 0.00041454838106607864",
            "extra": "mean: 1.1776804123710551 msec\nrounds: 1067"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1412.9022373789053,
            "unit": "iter/sec",
            "range": "stddev: 0.0002554880801393102",
            "extra": "mean: 707.763052208845 usec\nrounds: 1743"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1428.144408648589,
            "unit": "iter/sec",
            "range": "stddev: 0.0003615901452063734",
            "extra": "mean: 700.2093023255754 usec\nrounds: 2494"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1436.980651496189,
            "unit": "iter/sec",
            "range": "stddev: 0.0002849235166315971",
            "extra": "mean: 695.9035940802659 usec\nrounds: 2365"
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
          "id": "f4a94a588b991454423a73773f8c31d5c82be983",
          "message": "Merge pull request #1507 from TeoZosa/dependabot/pip/sphinx-rtd-theme-3.0.2",
          "timestamp": "2024-11-14T14:46:15Z",
          "tree_id": "ad0a6328125c993e95eb71089c820c5ff5d570aa",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/f4a94a588b991454423a73773f8c31d5c82be983"
        },
        "date": 1731596100790,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 711.2726925802832,
            "unit": "iter/sec",
            "range": "stddev: 0.00013670834001378783",
            "extra": "mean: 1.4059305389221413 msec\nrounds: 835"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1011.4324095700264,
            "unit": "iter/sec",
            "range": "stddev: 0.00008487291350443248",
            "extra": "mean: 988.6968130921507 usec\nrounds: 1161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1261.488878274808,
            "unit": "iter/sec",
            "range": "stddev: 0.00006193195394206935",
            "extra": "mean: 792.7140835102597 usec\nrounds: 1413"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2434.4007175450747,
            "unit": "iter/sec",
            "range": "stddev: 0.00002784723090856291",
            "extra": "mean: 410.77871559635054 usec\nrounds: 2725"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 651.2297302610277,
            "unit": "iter/sec",
            "range": "stddev: 0.000137877271568259",
            "extra": "mean: 1.5355564304460996 msec\nrounds: 762"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 928.0759249325564,
            "unit": "iter/sec",
            "range": "stddev: 0.00007656618686994138",
            "extra": "mean: 1.0774980506822978 msec\nrounds: 1026"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1193.6571710501858,
            "unit": "iter/sec",
            "range": "stddev: 0.00005621348957286855",
            "extra": "mean: 837.7614814814833 usec\nrounds: 1350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2197.4889129512108,
            "unit": "iter/sec",
            "range": "stddev: 0.00003760034301170308",
            "extra": "mean: 455.06486704272277 usec\nrounds: 2482"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.043406859399543,
            "unit": "iter/sec",
            "range": "stddev: 0.00357230912974529",
            "extra": "mean: 45.36503846153842 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.69245012739256,
            "unit": "iter/sec",
            "range": "stddev: 0.0020372917754849316",
            "extra": "mean: 42.20753846153832 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 957.764170199511,
            "unit": "iter/sec",
            "range": "stddev: 0.00009251945705371277",
            "extra": "mean: 1.0440983606556204 msec\nrounds: 1098"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1585.6849351150602,
            "unit": "iter/sec",
            "range": "stddev: 0.00004932677475809832",
            "extra": "mean: 630.6423034330197 usec\nrounds: 1806"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2043.5431257367732,
            "unit": "iter/sec",
            "range": "stddev: 0.00008025891912232159",
            "extra": "mean: 489.3461691147148 usec\nrounds: 2519"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1949.9409951844134,
            "unit": "iter/sec",
            "range": "stddev: 0.00005145356212045096",
            "extra": "mean: 512.8360306643157 usec\nrounds: 2348"
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
          "id": "564e5480eb096043baae32d1c3adc2f293c50b6a",
          "message": "Merge pull request #1513 from TeoZosa/dependabot/pip/sentry-sdk-2.19.0",
          "timestamp": "2024-11-22T14:39:10Z",
          "tree_id": "133d7153af4d61c80c6a303c4d40f438015857bb",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/564e5480eb096043baae32d1c3adc2f293c50b6a"
        },
        "date": 1732286706114,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 741.4876947509878,
            "unit": "iter/sec",
            "range": "stddev: 0.00018732499961985258",
            "extra": "mean: 1.3486400476758118 msec\nrounds: 839"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 993.0914998787779,
            "unit": "iter/sec",
            "range": "stddev: 0.00021750638137158878",
            "extra": "mean: 1.0069565595134642 msec\nrounds: 1151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1328.1654137041537,
            "unit": "iter/sec",
            "range": "stddev: 0.00007857580804956531",
            "extra": "mean: 752.9182658138003 usec\nrounds: 1407"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2532.5976740091073,
            "unit": "iter/sec",
            "range": "stddev: 0.00003709080541796349",
            "extra": "mean: 394.8515037593784 usec\nrounds: 2660"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 705.3406513209335,
            "unit": "iter/sec",
            "range": "stddev: 0.000056296004580493954",
            "extra": "mean: 1.417754666666724 msec\nrounds: 750"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 999.0097449655591,
            "unit": "iter/sec",
            "range": "stddev: 0.00003269626480345729",
            "extra": "mean: 1.0009912366114857 msec\nrounds: 1027"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1312.1179909646467,
            "unit": "iter/sec",
            "range": "stddev: 0.000027576238732482962",
            "extra": "mean: 762.1265822784862 usec\nrounds: 1343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2237.006478603176,
            "unit": "iter/sec",
            "range": "stddev: 0.00006587319829197847",
            "extra": "mean: 447.0259740259745 usec\nrounds: 2464"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.63205189504611,
            "unit": "iter/sec",
            "range": "stddev: 0.0009136608535909786",
            "extra": "mean: 39.0136538461546 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.23715472633193,
            "unit": "iter/sec",
            "range": "stddev: 0.0010803552597083005",
            "extra": "mean: 38.113888888888845 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1015.5359344558384,
            "unit": "iter/sec",
            "range": "stddev: 0.0001341712001828756",
            "extra": "mean: 984.7017383346822 usec\nrounds: 1093"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1616.3365048231797,
            "unit": "iter/sec",
            "range": "stddev: 0.00013960669374402153",
            "extra": "mean: 618.6830508473827 usec\nrounds: 1770"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1928.1450234493025,
            "unit": "iter/sec",
            "range": "stddev: 0.0001631895415631351",
            "extra": "mean: 518.6331877729183 usec\nrounds: 2519"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1672.4480565268454,
            "unit": "iter/sec",
            "range": "stddev: 0.0001821391976081969",
            "extra": "mean: 597.9258943782619 usec\nrounds: 2348"
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
          "id": "90caf1c4258dc18e9d9f4613af76fcdd8fa70a40",
          "message": "Merge pull request #1514 from TeoZosa/dependabot/pip/pip-661d9d4597",
          "timestamp": "2024-11-22T22:47:02Z",
          "tree_id": "2560cd6de3c956bac939430c7b0d37c38985b4f0",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/90caf1c4258dc18e9d9f4613af76fcdd8fa70a40"
        },
        "date": 1732316011687,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 807.6385347323338,
            "unit": "iter/sec",
            "range": "stddev: 0.000062957514908967",
            "extra": "mean: 1.2381776710684294 msec\nrounds: 833"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1104.4865134883967,
            "unit": "iter/sec",
            "range": "stddev: 0.00008664516375777953",
            "extra": "mean: 905.3981083405106 usec\nrounds: 1163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1334.7708277678662,
            "unit": "iter/sec",
            "range": "stddev: 0.00006304126584472482",
            "extra": "mean: 749.1922802001131 usec\nrounds: 1399"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2610.531317612367,
            "unit": "iter/sec",
            "range": "stddev: 0.00001360248678496054",
            "extra": "mean: 383.0637821708325 usec\nrounds: 2681"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 742.9879904541783,
            "unit": "iter/sec",
            "range": "stddev: 0.00008356753033971178",
            "extra": "mean: 1.3459167750325463 msec\nrounds: 769"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 954.5906160680786,
            "unit": "iter/sec",
            "range": "stddev: 0.00008763073769261133",
            "extra": "mean: 1.047569484936863 msec\nrounds: 1029"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1312.1903068816825,
            "unit": "iter/sec",
            "range": "stddev: 0.000024150580088809196",
            "extra": "mean: 762.0845808382944 usec\nrounds: 1336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2272.9280466436826,
            "unit": "iter/sec",
            "range": "stddev: 0.00005220409005588295",
            "extra": "mean: 439.9611336032608 usec\nrounds: 2470"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.255787703733624,
            "unit": "iter/sec",
            "range": "stddev: 0.0027953111501492905",
            "extra": "mean: 39.59488461538531 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.83622535802122,
            "unit": "iter/sec",
            "range": "stddev: 0.006782228048509718",
            "extra": "mean: 43.79007407407416 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1005.3138015224324,
            "unit": "iter/sec",
            "range": "stddev: 0.00025351189931734975",
            "extra": "mean: 994.7142857141868 usec\nrounds: 1092"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1729.3231626666707,
            "unit": "iter/sec",
            "range": "stddev: 0.000045418911719598856",
            "extra": "mean: 578.2609182531093 usec\nrounds: 1786"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1156.4937213085768,
            "unit": "iter/sec",
            "range": "stddev: 0.00037389088819984737",
            "extra": "mean: 864.6826018808788 usec\nrounds: 2552"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1811.7052244523754,
            "unit": "iter/sec",
            "range": "stddev: 0.00017657148087096226",
            "extra": "mean: 551.9661733614915 usec\nrounds: 2365"
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
          "id": "7cdcdee5266f441dd99fe61e7255b9c636bcf78f",
          "message": "Merge pull request #1515 from TeoZosa/dependabot/pip/orjson-3.10.12",
          "timestamp": "2024-11-25T14:37:59Z",
          "tree_id": "9ac429a3ca6330836a550dc261ac6733fde230e4",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/7cdcdee5266f441dd99fe61e7255b9c636bcf78f"
        },
        "date": 1732546058311,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 604.5533305870752,
            "unit": "iter/sec",
            "range": "stddev: 0.0006941131005954199",
            "extra": "mean: 1.6541137884872965 msec\nrounds: 747"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 886.9860452832387,
            "unit": "iter/sec",
            "range": "stddev: 0.0004550569818504958",
            "extra": "mean: 1.1274134529147781 msec\nrounds: 1115"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1091.2234219052482,
            "unit": "iter/sec",
            "range": "stddev: 0.0002680595258949702",
            "extra": "mean: 916.4026173980261 usec\nrounds: 1299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2098.9076139917697,
            "unit": "iter/sec",
            "range": "stddev: 0.000215927416173532",
            "extra": "mean: 476.43831168832054 usec\nrounds: 2464"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 506.4634558398338,
            "unit": "iter/sec",
            "range": "stddev: 0.0011762746551227325",
            "extra": "mean: 1.974476121562943 msec\nrounds: 691"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 778.861773876235,
            "unit": "iter/sec",
            "range": "stddev: 0.0003408250390931324",
            "extra": "mean: 1.2839248677248665 msec\nrounds: 945"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 930.8166482365668,
            "unit": "iter/sec",
            "range": "stddev: 0.0005712638619215153",
            "extra": "mean: 1.074325434439211 msec\nrounds: 1266"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1692.4032652191684,
            "unit": "iter/sec",
            "range": "stddev: 0.00035767424625021704",
            "extra": "mean: 590.8757212604992 usec\nrounds: 2253"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.238760943535073,
            "unit": "iter/sec",
            "range": "stddev: 0.011532995927419647",
            "extra": "mean: 58.00880952380877 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.835355371665855,
            "unit": "iter/sec",
            "range": "stddev: 0.01503236395242564",
            "extra": "mean: 67.40654166666656 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 679.2814344883252,
            "unit": "iter/sec",
            "range": "stddev: 0.0006852946343525528",
            "extra": "mean: 1.4721438703138692 msec\nrounds: 987"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1522.4714941506757,
            "unit": "iter/sec",
            "range": "stddev: 0.0001100888980059186",
            "extra": "mean: 656.8267477203958 usec\nrounds: 1645"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1457.4735464603955,
            "unit": "iter/sec",
            "range": "stddev: 0.0002293566073904363",
            "extra": "mean: 686.118799499716 usec\nrounds: 2399"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 801.0941846730447,
            "unit": "iter/sec",
            "range": "stddev: 0.000949415340013795",
            "extra": "mean: 1.2482926716140574 msec\nrounds: 2156"
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
          "id": "78a4010dd2a29dfec0aa914c8a492f6d9260b739",
          "message": "Merge pull request #1517 from TeoZosa/dependabot/pip/orjson-3.10.12",
          "timestamp": "2024-11-26T14:31:56Z",
          "tree_id": "c017414ae850471581f5d746922eca04e86799b3",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/78a4010dd2a29dfec0aa914c8a492f6d9260b739"
        },
        "date": 1732632059258,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 586.2778414118476,
            "unit": "iter/sec",
            "range": "stddev: 0.0008942847447936567",
            "extra": "mean: 1.705675925925915 msec\nrounds: 756"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 803.0592734225618,
            "unit": "iter/sec",
            "range": "stddev: 0.0007250178569881465",
            "extra": "mean: 1.2452380952380957 msec\nrounds: 1134"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1075.6179391759786,
            "unit": "iter/sec",
            "range": "stddev: 0.000483060110857254",
            "extra": "mean: 929.6981424148534 usec\nrounds: 1292"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1995.4525043943293,
            "unit": "iter/sec",
            "range": "stddev: 0.00029693673397065046",
            "extra": "mean: 501.1394647569051 usec\nrounds: 2653"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 534.7258388656618,
            "unit": "iter/sec",
            "range": "stddev: 0.0008512147377234497",
            "extra": "mean: 1.8701172214182606 msec\nrounds: 691"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 710.9740197326132,
            "unit": "iter/sec",
            "range": "stddev: 0.0008107948985895648",
            "extra": "mean: 1.4065211558308208 msec\nrounds: 969"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1090.8173913620587,
            "unit": "iter/sec",
            "range": "stddev: 0.00029035802263022273",
            "extra": "mean: 916.7437262357372 usec\nrounds: 1315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1795.4955402206642,
            "unit": "iter/sec",
            "range": "stddev: 0.0002855618488462358",
            "extra": "mean: 556.9493087557886 usec\nrounds: 2387"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.724268758791926,
            "unit": "iter/sec",
            "range": "stddev: 0.007134071164138768",
            "extra": "mean: 53.40662499999915 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.13422883476524,
            "unit": "iter/sec",
            "range": "stddev: 0.012413579147815228",
            "extra": "mean: 58.362708333333714 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 709.268348606522,
            "unit": "iter/sec",
            "range": "stddev: 0.000859963677015524",
            "extra": "mean: 1.4099036027262033 msec\nrounds: 1027"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1247.7343173877675,
            "unit": "iter/sec",
            "range": "stddev: 0.00045304173917041547",
            "extra": "mean: 801.4526699029813 usec\nrounds: 1648"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1231.8066823883726,
            "unit": "iter/sec",
            "range": "stddev: 0.0005904154881042649",
            "extra": "mean: 811.8156966489918 usec\nrounds: 2268"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1067.4601804323966,
            "unit": "iter/sec",
            "range": "stddev: 0.0006906523805365716",
            "extra": "mean: 936.8030942333882 usec\nrounds: 2133"
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
          "id": "1eb5227f90226e05b0e4937d33e305513a2126b7",
          "message": "Merge pull request #1518 from TeoZosa/dependabot/pip/docs/sphinx-autoapi-3.4.0",
          "timestamp": "2024-12-02T14:36:05Z",
          "tree_id": "2b72a87465810b5098f1f8d646ee9775c57c41ab",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/1eb5227f90226e05b0e4937d33e305513a2126b7"
        },
        "date": 1733150505548,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 523.4969052889409,
            "unit": "iter/sec",
            "range": "stddev: 0.0011495063436892758",
            "extra": "mean: 1.910230967741932 msec\nrounds: 775"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 726.3882994351916,
            "unit": "iter/sec",
            "range": "stddev: 0.0009683631357633479",
            "extra": "mean: 1.3766741573034107 msec\nrounds: 1068"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 928.9697639036153,
            "unit": "iter/sec",
            "range": "stddev: 0.0006946738152384208",
            "extra": "mean: 1.076461300309613 msec\nrounds: 1292"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1699.104962934946,
            "unit": "iter/sec",
            "range": "stddev: 0.0004036951976072731",
            "extra": "mean: 588.545158665567 usec\nrounds: 2458"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 478.55105222619346,
            "unit": "iter/sec",
            "range": "stddev: 0.0012685528993248497",
            "extra": "mean: 2.089641210374639 msec\nrounds: 694"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 720.4869119168119,
            "unit": "iter/sec",
            "range": "stddev: 0.0007936280245679497",
            "extra": "mean: 1.3879502645503448 msec\nrounds: 945"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 933.8593896392276,
            "unit": "iter/sec",
            "range": "stddev: 0.0006251034353390292",
            "extra": "mean: 1.0708250204415937 msec\nrounds: 1223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1602.6849418751142,
            "unit": "iter/sec",
            "range": "stddev: 0.000454765304085147",
            "extra": "mean: 623.9529516200589 usec\nrounds: 2253"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.251608712512212,
            "unit": "iter/sec",
            "range": "stddev: 0.009236327062887958",
            "extra": "mean: 57.965608695652946 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.074741122023987,
            "unit": "iter/sec",
            "range": "stddev: 0.01131341686547822",
            "extra": "mean: 58.56604166666646 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 755.4596574799493,
            "unit": "iter/sec",
            "range": "stddev: 0.0008197418519183849",
            "extra": "mean: 1.3236974206349874 msec\nrounds: 1008"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1129.5865588224733,
            "unit": "iter/sec",
            "range": "stddev: 0.0006122478393791809",
            "extra": "mean: 885.2796558082636 usec\nrounds: 1627"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1480.8580624847355,
            "unit": "iter/sec",
            "range": "stddev: 0.00046439432107639076",
            "extra": "mean: 675.2841648591881 usec\nrounds: 2305"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1128.01435769531,
            "unit": "iter/sec",
            "range": "stddev: 0.0006567783169685868",
            "extra": "mean: 886.5135387488674 usec\nrounds: 2142"
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
          "id": "a24ba3298a49c3c66a18596c3b11556e99f41565",
          "message": "Merge pull request #1519 from TeoZosa/dependabot/pip/sphinx-autoapi-3.4.0",
          "timestamp": "2024-12-02T16:47:35Z",
          "tree_id": "6b501032ed8223db07ee450953f13c7b208e5647",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/a24ba3298a49c3c66a18596c3b11556e99f41565"
        },
        "date": 1733158800263,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 742.3563805530742,
            "unit": "iter/sec",
            "range": "stddev: 0.00022929343401144204",
            "extra": "mean: 1.347061904761935 msec\nrounds: 840"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1074.1507524625622,
            "unit": "iter/sec",
            "range": "stddev: 0.00009340320664218873",
            "extra": "mean: 930.968020743302 usec\nrounds: 1157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1288.854916712408,
            "unit": "iter/sec",
            "range": "stddev: 0.00008805944786632259",
            "extra": "mean: 775.8825194621479 usec\nrounds: 1413"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2417.4009359611287,
            "unit": "iter/sec",
            "range": "stddev: 0.000036942149775637754",
            "extra": "mean: 413.66741657292044 usec\nrounds: 2667"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 726.3406480296343,
            "unit": "iter/sec",
            "range": "stddev: 0.00007455359321930963",
            "extra": "mean: 1.376764473684255 msec\nrounds: 760"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 971.6757933766172,
            "unit": "iter/sec",
            "range": "stddev: 0.00006560552099312803",
            "extra": "mean: 1.0291498530852095 msec\nrounds: 1021"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1202.9125418702256,
            "unit": "iter/sec",
            "range": "stddev: 0.00019232167415502945",
            "extra": "mean: 831.3156320119933 usec\nrounds: 1337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2267.563133559777,
            "unit": "iter/sec",
            "range": "stddev: 0.000029272161324008914",
            "extra": "mean: 441.00205423172986 usec\nrounds: 2434"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.40126600849069,
            "unit": "iter/sec",
            "range": "stddev: 0.00458218324869414",
            "extra": "mean: 42.732730769231445 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.113076444905452,
            "unit": "iter/sec",
            "range": "stddev: 0.003510117358692056",
            "extra": "mean: 45.222111111110735 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1001.0203949833448,
            "unit": "iter/sec",
            "range": "stddev: 0.00010061329734623037",
            "extra": "mean: 998.980645161219 usec\nrounds: 1085"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1584.3291524647868,
            "unit": "iter/sec",
            "range": "stddev: 0.0001359631731416851",
            "extra": "mean: 631.1819727890957 usec\nrounds: 1764"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1971.2380654653396,
            "unit": "iter/sec",
            "range": "stddev: 0.00011816334665794012",
            "extra": "mean: 507.2953985209977 usec\nrounds: 2434"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1643.8667438304808,
            "unit": "iter/sec",
            "range": "stddev: 0.00012908263727738135",
            "extra": "mean: 608.3218142547461 usec\nrounds: 2315"
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
          "id": "de9d425e4bf505bb68944550101cdb0dafd39146",
          "message": "Merge pull request #1520 from TeoZosa/dependabot/pip/pytest-8.3.4",
          "timestamp": "2024-12-02T17:26:19Z",
          "tree_id": "90172706254302c4e424aca06b3928e85a084cb6",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/de9d425e4bf505bb68944550101cdb0dafd39146"
        },
        "date": 1733160755046,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 663.5771530634689,
            "unit": "iter/sec",
            "range": "stddev: 0.00027936437404626433",
            "extra": "mean: 1.5069837702871507 msec\nrounds: 801"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 929.2021991118893,
            "unit": "iter/sec",
            "range": "stddev: 0.000151678350835868",
            "extra": "mean: 1.0761920289854863 msec\nrounds: 1104"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1226.8282916657988,
            "unit": "iter/sec",
            "range": "stddev: 0.000059552661968648545",
            "extra": "mean: 815.1099928109669 usec\nrounds: 1391"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2130.6307529827004,
            "unit": "iter/sec",
            "range": "stddev: 0.00015552234219939844",
            "extra": "mean: 469.34458192724645 usec\nrounds: 2667"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 670.9010765767823,
            "unit": "iter/sec",
            "range": "stddev: 0.00017982342218575499",
            "extra": "mean: 1.4905327102803558 msec\nrounds: 749"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 881.8380458815898,
            "unit": "iter/sec",
            "range": "stddev: 0.00009153928557783629",
            "extra": "mean: 1.1339950738916933 msec\nrounds: 1015"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1169.8539669085476,
            "unit": "iter/sec",
            "range": "stddev: 0.00013608591431856152",
            "extra": "mean: 854.8075471698376 usec\nrounds: 1325"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2199.2853228501353,
            "unit": "iter/sec",
            "range": "stddev: 0.000041779062611896734",
            "extra": "mean: 454.6931630972115 usec\nrounds: 2428"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.065454223377092,
            "unit": "iter/sec",
            "range": "stddev: 0.0026037818540217694",
            "extra": "mean: 43.354879999999696 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.630606361359114,
            "unit": "iter/sec",
            "range": "stddev: 0.0016828528852317016",
            "extra": "mean: 42.31800000000021 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 944.300236903369,
            "unit": "iter/sec",
            "range": "stddev: 0.0001364034523566327",
            "extra": "mean: 1.05898522622348 msec\nrounds: 1083"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1568.2771329608831,
            "unit": "iter/sec",
            "range": "stddev: 0.00007711309031559798",
            "extra": "mean: 637.6424032352085 usec\nrounds: 1731"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1660.2445676083257,
            "unit": "iter/sec",
            "range": "stddev: 0.0003145209977871833",
            "extra": "mean: 602.3208986857613 usec\nrounds: 2359"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1551.8958771559635,
            "unit": "iter/sec",
            "range": "stddev: 0.00035906985327633154",
            "extra": "mean: 644.3731275532613 usec\nrounds: 2203"
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
          "id": "12fb0754cc0e092fc2ee9e9e73cd492c6b768930",
          "message": "Merge pull request #1521 from TeoZosa/dependabot/pip/sentry-sdk-2.19.2",
          "timestamp": "2024-12-06T14:27:38Z",
          "tree_id": "81057b2b91974394c7d22662873279d633052ba7",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/12fb0754cc0e092fc2ee9e9e73cd492c6b768930"
        },
        "date": 1733495595549,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 788.8234176012255,
            "unit": "iter/sec",
            "range": "stddev: 0.00017075694180735543",
            "extra": "mean: 1.2677108433734796 msec\nrounds: 830"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1116.2023904768985,
            "unit": "iter/sec",
            "range": "stddev: 0.00003079684173187921",
            "extra": "mean: 895.8948740225768 usec\nrounds: 1151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1304.6053592035028,
            "unit": "iter/sec",
            "range": "stddev: 0.00008119895267052171",
            "extra": "mean: 766.515324305066 usec\nrounds: 1403"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2432.1600395535415,
            "unit": "iter/sec",
            "range": "stddev: 0.000047966513316264584",
            "extra": "mean: 411.1571540265765 usec\nrounds: 2558"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 728.8986715606006,
            "unit": "iter/sec",
            "range": "stddev: 0.00013883019360291197",
            "extra": "mean: 1.3719328063240408 msec\nrounds: 759"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 994.1722615228623,
            "unit": "iter/sec",
            "range": "stddev: 0.000026145699003604467",
            "extra": "mean: 1.0058619000978872 msec\nrounds: 1021"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1267.2631302541388,
            "unit": "iter/sec",
            "range": "stddev: 0.000094191686016258",
            "extra": "mean: 789.1021021020778 usec\nrounds: 1332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2198.75027984919,
            "unit": "iter/sec",
            "range": "stddev: 0.00006048940842888362",
            "extra": "mean: 454.80380794702563 usec\nrounds: 2416"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.19790043340394,
            "unit": "iter/sec",
            "range": "stddev: 0.0016758927815895119",
            "extra": "mean: 39.68584615384607 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.69126145045246,
            "unit": "iter/sec",
            "range": "stddev: 0.0012627601816480906",
            "extra": "mean: 38.9237407407408 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1008.2862460882859,
            "unit": "iter/sec",
            "range": "stddev: 0.00011721468612259065",
            "extra": "mean: 991.7818515124718 usec\nrounds: 1091"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1639.312050347119,
            "unit": "iter/sec",
            "range": "stddev: 0.00006272173800384706",
            "extra": "mean: 610.0119863013593 usec\nrounds: 1752"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1122.2974541567123,
            "unit": "iter/sec",
            "range": "stddev: 0.0004933273607363153",
            "extra": "mean: 891.0293757650854 usec\nrounds: 2451"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1271.0668322537979,
            "unit": "iter/sec",
            "range": "stddev: 0.0003049363909807152",
            "extra": "mean: 786.7406926407209 usec\nrounds: 2310"
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
          "id": "a1d9601fcb86d7ee3ac9812af0b4632d2dd971dd",
          "message": "Merge pull request #1523 from TeoZosa/dependabot/pip/dot-github/workflows/poetry-1.8.5",
          "timestamp": "2024-12-09T14:21:46Z",
          "tree_id": "97362ec1a513452bc9374e2911cfffe8b2e7f3b1",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/a1d9601fcb86d7ee3ac9812af0b4632d2dd971dd"
        },
        "date": 1733755839588,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 692.1808522143917,
            "unit": "iter/sec",
            "range": "stddev: 0.000366155411446579",
            "extra": "mean: 1.4447091346153944 msec\nrounds: 832"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 940.4833573228494,
            "unit": "iter/sec",
            "range": "stddev: 0.00026132137977971377",
            "extra": "mean: 1.0632830365510868 msec\nrounds: 1067"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1117.5138554060006,
            "unit": "iter/sec",
            "range": "stddev: 0.00023567340942137277",
            "extra": "mean: 894.8434913468639 usec\nrounds: 1329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2234.3055217001206,
            "unit": "iter/sec",
            "range": "stddev: 0.0001028031996562217",
            "extra": "mean: 447.56636471053577 usec\nrounds: 2539"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 704.679594492299,
            "unit": "iter/sec",
            "range": "stddev: 0.0001350726298714879",
            "extra": "mean: 1.419084656084686 msec\nrounds: 756"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 968.2899424394778,
            "unit": "iter/sec",
            "range": "stddev: 0.00004549899663201821",
            "extra": "mean: 1.0327485148514843 msec\nrounds: 1010"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 935.1331216630809,
            "unit": "iter/sec",
            "range": "stddev: 0.0006472370129616003",
            "extra": "mean: 1.069366464339919 msec\nrounds: 1318"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2045.9469994195654,
            "unit": "iter/sec",
            "range": "stddev: 0.0001825682277655767",
            "extra": "mean: 488.7712146422658 usec\nrounds: 2404"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 21.73317332678204,
            "unit": "iter/sec",
            "range": "stddev: 0.0029659960114467765",
            "extra": "mean: 46.01260869565184 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.664512612702776,
            "unit": "iter/sec",
            "range": "stddev: 0.024006910573318618",
            "extra": "mean: 68.19183333333386 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 783.6923704833066,
            "unit": "iter/sec",
            "range": "stddev: 0.0005835942262326212",
            "extra": "mean: 1.27601089108893 msec\nrounds: 1010"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1043.9808773259062,
            "unit": "iter/sec",
            "range": "stddev: 0.0006312545423197609",
            "extra": "mean: 957.8719512194892 usec\nrounds: 1640"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1412.8841609033354,
            "unit": "iter/sec",
            "range": "stddev: 0.0002994957234402225",
            "extra": "mean: 707.7721073471758 usec\nrounds: 2273"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 950.8801756208084,
            "unit": "iter/sec",
            "range": "stddev: 0.0007831396086391473",
            "extra": "mean: 1.0516572178477928 msec\nrounds: 1905"
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
          "id": "4efbfaecc926ea8a29c1077d1e2b819b00b44909",
          "message": "Merge pull request #1524 from TeoZosa/dependabot/pip/docs/poetry-1.8.5",
          "timestamp": "2024-12-09T14:31:46Z",
          "tree_id": "6ec96285f2670cf82be834ecd63891f4ac5c76ae",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/4efbfaecc926ea8a29c1077d1e2b819b00b44909"
        },
        "date": 1733756610032,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 707.4076662535831,
            "unit": "iter/sec",
            "range": "stddev: 0.0003967906186259513",
            "extra": "mean: 1.413612048192777 msec\nrounds: 830"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1022.4399607497785,
            "unit": "iter/sec",
            "range": "stddev: 0.00016098993944547473",
            "extra": "mean: 978.0525394045409 usec\nrounds: 1142"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1318.1351835761736,
            "unit": "iter/sec",
            "range": "stddev: 0.00007441671391732563",
            "extra": "mean: 758.6475290697763 usec\nrounds: 1376"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2471.7793421392867,
            "unit": "iter/sec",
            "range": "stddev: 0.0000635966727292497",
            "extra": "mean: 404.56685714288534 usec\nrounds: 2625"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 726.6161495439397,
            "unit": "iter/sec",
            "range": "stddev: 0.0001287671816335",
            "extra": "mean: 1.376242463957964 msec\nrounds: 763"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 931.8443237576744,
            "unit": "iter/sec",
            "range": "stddev: 0.00014595556893673797",
            "extra": "mean: 1.073140624999986 msec\nrounds: 1024"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1284.4404662333313,
            "unit": "iter/sec",
            "range": "stddev: 0.000035036208203646125",
            "extra": "mean: 778.5491241431662 usec\nrounds: 1313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2278.1739104707344,
            "unit": "iter/sec",
            "range": "stddev: 0.00004697051722119387",
            "extra": "mean: 438.94805194804997 usec\nrounds: 2387"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.45229212574621,
            "unit": "iter/sec",
            "range": "stddev: 0.0010411605455156378",
            "extra": "mean: 39.28919230769209 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.3210813963649,
            "unit": "iter/sec",
            "range": "stddev: 0.00032309749302706725",
            "extra": "mean: 37.992360000000076 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1002.3816958635347,
            "unit": "iter/sec",
            "range": "stddev: 0.00019859443034681481",
            "extra": "mean: 997.6239631336416 usec\nrounds: 1085"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1565.0041410764031,
            "unit": "iter/sec",
            "range": "stddev: 0.00010269853228147173",
            "extra": "mean: 638.9759450171196 usec\nrounds: 1746"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1780.71388568228,
            "unit": "iter/sec",
            "range": "stddev: 0.00013047805928170057",
            "extra": "mean: 561.5725288831845 usec\nrounds: 2337"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1520.3309222497473,
            "unit": "iter/sec",
            "range": "stddev: 0.00031486451441419135",
            "extra": "mean: 657.7515364353869 usec\nrounds: 2278"
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
          "id": "4ade16bd91dd2ceb39753bdd175cef4f360cc84c",
          "message": "Merge pull request #1526 from TeoZosa/dependabot/github_actions/pypa/gh-action-pypi-publish-1.12.3",
          "timestamp": "2024-12-10T14:41:22Z",
          "tree_id": "073e153bd7e1e74a349bc85b12d8eac25e4ecda3",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/4ade16bd91dd2ceb39753bdd175cef4f360cc84c"
        },
        "date": 1733842133136,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 724.6376811594239,
            "unit": "iter/sec",
            "range": "stddev: 0.00023410225051445798",
            "extra": "mean: 1.3799999999999932 msec\nrounds: 764"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 932.255789421522,
            "unit": "iter/sec",
            "range": "stddev: 0.0004159794288876878",
            "extra": "mean: 1.0726669776119218 msec\nrounds: 1072"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1134.0164432384452,
            "unit": "iter/sec",
            "range": "stddev: 0.00034243441619210847",
            "extra": "mean: 881.8214285714145 usec\nrounds: 1288"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2276.9436003578053,
            "unit": "iter/sec",
            "range": "stddev: 0.00015192642943664852",
            "extra": "mean: 439.18523051816356 usec\nrounds: 2451"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 572.7948625210537,
            "unit": "iter/sec",
            "range": "stddev: 0.0008781829226816725",
            "extra": "mean: 1.7458257142857039 msec\nrounds: 700"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 892.7566675419336,
            "unit": "iter/sec",
            "range": "stddev: 0.00013229082798598186",
            "extra": "mean: 1.120126050420149 msec\nrounds: 952"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1097.2956421560298,
            "unit": "iter/sec",
            "range": "stddev: 0.0003103447223027288",
            "extra": "mean: 911.3314238951522 usec\nrounds: 1222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1835.2200639619875,
            "unit": "iter/sec",
            "range": "stddev: 0.0002912365297020555",
            "extra": "mean: 544.8937812074361 usec\nrounds: 2203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 15.351888649413953,
            "unit": "iter/sec",
            "range": "stddev: 0.013007333783908896",
            "extra": "mean: 65.1385652173926 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.555522674615837,
            "unit": "iter/sec",
            "range": "stddev: 0.0038401596481564006",
            "extra": "mean: 44.33503999999999 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 862.6270681399382,
            "unit": "iter/sec",
            "range": "stddev: 0.0005307747574622631",
            "extra": "mean: 1.1592495029819498 msec\nrounds: 1006"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1033.9223806616835,
            "unit": "iter/sec",
            "range": "stddev: 0.0006223940805672992",
            "extra": "mean: 967.1905925472141 usec\nrounds: 1637"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1002.8846625679649,
            "unit": "iter/sec",
            "range": "stddev: 0.0005393410112382736",
            "extra": "mean: 997.123634775131 usec\nrounds: 2289"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 771.475033479973,
            "unit": "iter/sec",
            "range": "stddev: 0.0008278151380107671",
            "extra": "mean: 1.2962182269064437 msec\nrounds: 1613"
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
          "id": "c5b540cc9681c8368df8f4d575e960f529d03e89",
          "message": "Merge pull request #1528 from TeoZosa/dependabot/pip/mypy-1.14.0",
          "timestamp": "2024-12-23T14:22:40Z",
          "tree_id": "5d23275d53a1d79869bb68fa5342c7f57604c732",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/c5b540cc9681c8368df8f4d575e960f529d03e89"
        },
        "date": 1734964192414,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 820.8864792178783,
            "unit": "iter/sec",
            "range": "stddev: 0.00003731172012682926",
            "extra": "mean: 1.2181952380952565 msec\nrounds: 840"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1116.2195058637801,
            "unit": "iter/sec",
            "range": "stddev: 0.0000820086706775013",
            "extra": "mean: 895.8811369508865 usec\nrounds: 1161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1383.0594333279296,
            "unit": "iter/sec",
            "range": "stddev: 0.000010969955693709303",
            "extra": "mean: 723.0347271438591 usec\nrounds: 1411"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2607.0865441293863,
            "unit": "iter/sec",
            "range": "stddev: 0.000008477579722228918",
            "extra": "mean: 383.5699287589017 usec\nrounds: 2667"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 744.3584689164753,
            "unit": "iter/sec",
            "range": "stddev: 0.000033978630976557155",
            "extra": "mean: 1.3434387351777552 msec\nrounds: 759"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 997.5954139922419,
            "unit": "iter/sec",
            "range": "stddev: 0.000023532310911062566",
            "extra": "mean: 1.002410381978537 msec\nrounds: 1021"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1313.7480976789147,
            "unit": "iter/sec",
            "range": "stddev: 0.00003839446291598668",
            "extra": "mean: 761.1809309309492 usec\nrounds: 1332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2316.2457739009246,
            "unit": "iter/sec",
            "range": "stddev: 0.000032833757750012424",
            "extra": "mean: 431.7331136737884 usec\nrounds: 2428"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.428867632964284,
            "unit": "iter/sec",
            "range": "stddev: 0.0012629053512253727",
            "extra": "mean: 39.32538461538361 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.30494445272578,
            "unit": "iter/sec",
            "range": "stddev: 0.0002155256543722894",
            "extra": "mean: 38.01566666666645 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1050.8381894057104,
            "unit": "iter/sec",
            "range": "stddev: 0.00005428131944406511",
            "extra": "mean: 951.6212962963771 usec\nrounds: 1080"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1708.0525844602323,
            "unit": "iter/sec",
            "range": "stddev: 0.000015096974180629575",
            "extra": "mean: 585.4620689655252 usec\nrounds: 1740"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2051.045151559294,
            "unit": "iter/sec",
            "range": "stddev: 0.00014808604332320295",
            "extra": "mean: 487.5563072025774 usec\nrounds: 2513"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1800.565031513953,
            "unit": "iter/sec",
            "range": "stddev: 0.00011497596805077083",
            "extra": "mean: 555.3812178387019 usec\nrounds: 2332"
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
          "id": "5d84a4535c3b42153b5a1ae824e4fb2a1f6ed2ba",
          "message": "Merge pull request #1529 from TeoZosa/dependabot/pip/pip-e49d2f513e",
          "timestamp": "2024-12-24T01:06:18Z",
          "tree_id": "50aeb90f190c4e1f89af71d4458f10235c809792",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/5d84a4535c3b42153b5a1ae824e4fb2a1f6ed2ba"
        },
        "date": 1735002882374,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 812.0717740593042,
            "unit": "iter/sec",
            "range": "stddev: 0.00003843771994226275",
            "extra": "mean: 1.2314182464455066 msec\nrounds: 844"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1099.360089457378,
            "unit": "iter/sec",
            "range": "stddev: 0.000060697778666959076",
            "extra": "mean: 909.6200686106222 usec\nrounds: 1166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1315.2512036187209,
            "unit": "iter/sec",
            "range": "stddev: 0.00003427456466194946",
            "extra": "mean: 760.3110320284418 usec\nrounds: 1405"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2477.720680305164,
            "unit": "iter/sec",
            "range": "stddev: 0.000033963299581882664",
            "extra": "mean: 403.59674435814 usec\nrounds: 2703"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 736.9290388158475,
            "unit": "iter/sec",
            "range": "stddev: 0.000044691457747189867",
            "extra": "mean: 1.3569827586206598 msec\nrounds: 754"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 979.9118079372656,
            "unit": "iter/sec",
            "range": "stddev: 0.00004342753434075231",
            "extra": "mean: 1.0205000000000208 msec\nrounds: 1016"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1206.0332610319572,
            "unit": "iter/sec",
            "range": "stddev: 0.0002668097330216336",
            "extra": "mean: 829.1645283019291 usec\nrounds: 1325"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2231.5125511121105,
            "unit": "iter/sec",
            "range": "stddev: 0.000066109727770027",
            "extra": "mean: 448.1265406737837 usec\nrounds: 2434"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.686481682630475,
            "unit": "iter/sec",
            "range": "stddev: 0.001609980546466135",
            "extra": "mean: 40.508000000000195 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.82121011579333,
            "unit": "iter/sec",
            "range": "stddev: 0.0009576755795507155",
            "extra": "mean: 38.72785185185253 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 960.6242009635805,
            "unit": "iter/sec",
            "range": "stddev: 0.00009807609824135269",
            "extra": "mean: 1.040989805375424 msec\nrounds: 1079"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1614.8415545249422,
            "unit": "iter/sec",
            "range": "stddev: 0.00006996334737728692",
            "extra": "mean: 619.2558007922842 usec\nrounds: 1767"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1336.8317035554721,
            "unit": "iter/sec",
            "range": "stddev: 0.00032862227296580175",
            "extra": "mean: 748.037316395455 usec\nrounds: 2519"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1654.2837241699262,
            "unit": "iter/sec",
            "range": "stddev: 0.0001767626786133522",
            "extra": "mean: 604.4912280701863 usec\nrounds: 2337"
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
          "id": "268cd4b4113c7c5df5c1d323707eb79c60fbc023",
          "message": "Merge pull request #1530 from TeoZosa/dependabot/pip/cruft-2.16.0",
          "timestamp": "2024-12-26T14:58:06Z",
          "tree_id": "a200f8ff35ce271f914857abbefed647ccc4b280",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/268cd4b4113c7c5df5c1d323707eb79c60fbc023"
        },
        "date": 1735225405770,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 826.4931571228408,
            "unit": "iter/sec",
            "range": "stddev: 0.0000412255230500857",
            "extra": "mean: 1.209931372549006 msec\nrounds: 816"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1129.7051928359172,
            "unit": "iter/sec",
            "range": "stddev: 0.000033456236908550557",
            "extra": "mean: 885.18668971476 usec\nrounds: 1157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1357.644932194538,
            "unit": "iter/sec",
            "range": "stddev: 0.00007611545282875596",
            "extra": "mean: 736.5696113074057 usec\nrounds: 1415"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2616.8482597813027,
            "unit": "iter/sec",
            "range": "stddev: 0.0000217372018838429",
            "extra": "mean: 382.1390851617712 usec\nrounds: 2689"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 743.7218952316712,
            "unit": "iter/sec",
            "range": "stddev: 0.000028848704727568187",
            "extra": "mean: 1.344588624338534 msec\nrounds: 756"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 984.7522542724387,
            "unit": "iter/sec",
            "range": "stddev: 0.00008826739112845466",
            "extra": "mean: 1.0154838393732104 msec\nrounds: 1021"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1311.296190137005,
            "unit": "iter/sec",
            "range": "stddev: 0.000017451736726225106",
            "extra": "mean: 762.6042136944816 usec\nrounds: 1329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2196.9608102565503,
            "unit": "iter/sec",
            "range": "stddev: 0.00005705996133763769",
            "extra": "mean: 455.174254966899 usec\nrounds: 2416"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.999254829904302,
            "unit": "iter/sec",
            "range": "stddev: 0.0015443885008440453",
            "extra": "mean: 40.001192307691994 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.84501224766471,
            "unit": "iter/sec",
            "range": "stddev: 0.0011821363333144568",
            "extra": "mean: 38.69218518518433 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 999.2635057866604,
            "unit": "iter/sec",
            "range": "stddev: 0.00012298791473943114",
            "extra": "mean: 1.0007370370368522 msec\nrounds: 1080"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1671.1000022931044,
            "unit": "iter/sec",
            "range": "stddev: 0.0000867694890743333",
            "extra": "mean: 598.408233276158 usec\nrounds: 1749"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1952.0733396637127,
            "unit": "iter/sec",
            "range": "stddev: 0.00010077059686903018",
            "extra": "mean: 512.275834970561 usec\nrounds: 2545"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1817.178779510804,
            "unit": "iter/sec",
            "range": "stddev: 0.00009395546208242803",
            "extra": "mean: 550.3035866780298 usec\nrounds: 2342"
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
          "id": "ce227a970be6f02e4d263faf5b3ce49544be58f4",
          "message": "Merge pull request #1531 from TeoZosa/dependabot/pip/orjson-3.10.13",
          "timestamp": "2024-12-30T14:34:23Z",
          "tree_id": "5940f6ab91173d86fef4f639ce9c9a5ef9085914",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/ce227a970be6f02e4d263faf5b3ce49544be58f4"
        },
        "date": 1735569792409,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 810.8229997380453,
            "unit": "iter/sec",
            "range": "stddev: 0.00003744332629127005",
            "extra": "mean: 1.233314792899403 msec\nrounds: 845"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1105.2937201639622,
            "unit": "iter/sec",
            "range": "stddev: 0.00005403565062367502",
            "extra": "mean: 904.7368873602732 usec\nrounds: 1163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1355.3500509092034,
            "unit": "iter/sec",
            "range": "stddev: 0.000027837002406420394",
            "extra": "mean: 737.8167723749111 usec\nrounds: 1419"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2567.792679314648,
            "unit": "iter/sec",
            "range": "stddev: 0.000016729831210457308",
            "extra": "mean: 389.4395400593257 usec\nrounds: 2696"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 716.6588193471888,
            "unit": "iter/sec",
            "range": "stddev: 0.00010013951630838042",
            "extra": "mean: 1.3953641160948935 msec\nrounds: 758"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 992.2580682561481,
            "unit": "iter/sec",
            "range": "stddev: 0.000031423704353787345",
            "extra": "mean: 1.007802336903602 msec\nrounds: 1027"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1281.4151081502473,
            "unit": "iter/sec",
            "range": "stddev: 0.0000570172472931902",
            "extra": "mean: 780.3872403561118 usec\nrounds: 1348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2261.7585218513213,
            "unit": "iter/sec",
            "range": "stddev: 0.00007199548035544043",
            "extra": "mean: 442.13384865748975 usec\nrounds: 2458"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.67936568107159,
            "unit": "iter/sec",
            "range": "stddev: 0.001840020509849598",
            "extra": "mean: 40.51967999999988 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.907818010566693,
            "unit": "iter/sec",
            "range": "stddev: 0.003263213405424183",
            "extra": "mean: 40.14803703703665 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 996.0132183234238,
            "unit": "iter/sec",
            "range": "stddev: 0.0001701338729570957",
            "extra": "mean: 1.0040027397259719 msec\nrounds: 1095"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1629.5367472875346,
            "unit": "iter/sec",
            "range": "stddev: 0.00011628102063822687",
            "extra": "mean: 613.6713404374356 usec\nrounds: 1783"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1084.0176042049272,
            "unit": "iter/sec",
            "range": "stddev: 0.0005586513942774209",
            "extra": "mean: 922.4942437474989 usec\nrounds: 2519"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1533.3805921979717,
            "unit": "iter/sec",
            "range": "stddev: 0.00016965231698665937",
            "extra": "mean: 652.1538130116701 usec\nrounds: 2321"
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
          "id": "a27b97502639bc7b121dd847057fdd84125e93aa",
          "message": "Merge pull request #1533 from TeoZosa/dependabot/pip/mypy-1.14.1",
          "timestamp": "2024-12-31T15:01:58Z",
          "tree_id": "78266acf5d45a97e52457bc2097f0cf740d8e56a",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/a27b97502639bc7b121dd847057fdd84125e93aa"
        },
        "date": 1735657883664,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 688.8079043176646,
            "unit": "iter/sec",
            "range": "stddev: 0.0003852980198028364",
            "extra": "mean: 1.451783572359849 msec\nrounds: 767"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 889.2859757355418,
            "unit": "iter/sec",
            "range": "stddev: 0.0004476061475641316",
            "extra": "mean: 1.1244976613657771 msec\nrounds: 1069"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1142.1547421842945,
            "unit": "iter/sec",
            "range": "stddev: 0.0002261774888081469",
            "extra": "mean: 875.5381062355586 usec\nrounds: 1299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2191.279634204471,
            "unit": "iter/sec",
            "range": "stddev: 0.0001538866038255617",
            "extra": "mean: 456.35435313259006 usec\nrounds: 2458"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 597.4817059276827,
            "unit": "iter/sec",
            "range": "stddev: 0.0004950154848997316",
            "extra": "mean: 1.6736914119359445 msec\nrounds: 687"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 772.1388737568994,
            "unit": "iter/sec",
            "range": "stddev: 0.0005878079178423809",
            "extra": "mean: 1.2951038135593733 msec\nrounds: 944"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 938.5354722880176,
            "unit": "iter/sec",
            "range": "stddev: 0.0006304789794951952",
            "extra": "mean: 1.0654898291293566 msec\nrounds: 1229"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1950.6162747315668,
            "unit": "iter/sec",
            "range": "stddev: 0.00017933901883823483",
            "extra": "mean: 512.6584930896337 usec\nrounds: 2243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.33675904565788,
            "unit": "iter/sec",
            "range": "stddev: 0.007262961720439524",
            "extra": "mean: 49.17204347826066 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.0310326602794,
            "unit": "iter/sec",
            "range": "stddev: 0.002104484669299663",
            "extra": "mean: 47.5487826086955 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 847.6616231086944,
            "unit": "iter/sec",
            "range": "stddev: 0.0003590173482322889",
            "extra": "mean: 1.179716024340731 msec\nrounds: 986"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1241.6500183112232,
            "unit": "iter/sec",
            "range": "stddev: 0.0004517037007406877",
            "extra": "mean: 805.3799261084109 usec\nrounds: 1624"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 821.3218607183813,
            "unit": "iter/sec",
            "range": "stddev: 0.0008089854500226599",
            "extra": "mean: 1.2175494746058935 msec\nrounds: 2284"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 928.3368983649194,
            "unit": "iter/sec",
            "range": "stddev: 0.000630763570524119",
            "extra": "mean: 1.0771951451690662 msec\nrounds: 2101"
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
          "id": "e83ae2e8d2184ca3bd0975e5ff52330501aa8cb6",
          "message": "Merge pull request #1534 from TeoZosa/dependabot/pip/orjson-3.10.13",
          "timestamp": "2024-12-31T15:07:41Z",
          "tree_id": "2b45490fc26906b26c19c4e1c47e8c050b4c17bf",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/e83ae2e8d2184ca3bd0975e5ff52330501aa8cb6"
        },
        "date": 1735658853735,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 753.3123161759416,
            "unit": "iter/sec",
            "range": "stddev: 0.0001121456549536017",
            "extra": "mean: 1.3274706632653046 msec\nrounds: 784"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1031.0292997696117,
            "unit": "iter/sec",
            "range": "stddev: 0.00008486336922227273",
            "extra": "mean: 969.9045412418974 usec\nrounds: 1079"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1267.2272721154673,
            "unit": "iter/sec",
            "range": "stddev: 0.00003397629252207563",
            "extra": "mean: 789.1244309559665 usec\nrounds: 1318"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2376.3836369556993,
            "unit": "iter/sec",
            "range": "stddev: 0.000054630405587872075",
            "extra": "mean: 420.80747588426607 usec\nrounds: 2488"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 669.9735142198582,
            "unit": "iter/sec",
            "range": "stddev: 0.00010707940945714176",
            "extra": "mean: 1.4925963172804477 msec\nrounds: 706"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 865.1382252856484,
            "unit": "iter/sec",
            "range": "stddev: 0.00037898398185632406",
            "extra": "mean: 1.155884656084666 msec\nrounds: 945"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1167.2848709933974,
            "unit": "iter/sec",
            "range": "stddev: 0.00023092811899797817",
            "extra": "mean: 856.688906752443 usec\nrounds: 1244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2083.1978898679995,
            "unit": "iter/sec",
            "range": "stddev: 0.00010252248032550584",
            "extra": "mean: 480.0312082033476 usec\nrounds: 2243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.042313842360013,
            "unit": "iter/sec",
            "range": "stddev: 0.018124014796722",
            "extra": "mean: 58.67747826086979 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.860750661742955,
            "unit": "iter/sec",
            "range": "stddev: 0.004139684475653418",
            "extra": "mean: 45.74408333333372 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 879.8975219753331,
            "unit": "iter/sec",
            "range": "stddev: 0.00040288220279700057",
            "extra": "mean: 1.1364959839357676 msec\nrounds: 996"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1431.4816321187086,
            "unit": "iter/sec",
            "range": "stddev: 0.0002797071631942673",
            "extra": "mean: 698.5768993206843 usec\nrounds: 1619"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1445.0066335830265,
            "unit": "iter/sec",
            "range": "stddev: 0.0004184708697001874",
            "extra": "mean: 692.0383455406071 usec\nrounds: 2321"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1391.3778882327658,
            "unit": "iter/sec",
            "range": "stddev: 0.0004664874793253471",
            "extra": "mean: 718.7120109189981 usec\nrounds: 2198"
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
          "id": "38412c218324142514f42e9d3ec917f340075192",
          "message": "Merge pull request #1535 from TeoZosa/dependabot/pip/gitpython-3.1.44",
          "timestamp": "2025-01-02T14:50:42Z",
          "tree_id": "19d50a361802f7015a2ee474085480ab4923639b",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/38412c218324142514f42e9d3ec917f340075192"
        },
        "date": 1735829771447,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 757.2810984324773,
            "unit": "iter/sec",
            "range": "stddev: 0.00006426144949549612",
            "extra": "mean: 1.3205136138613984 msec\nrounds: 808"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1130.45400240111,
            "unit": "iter/sec",
            "range": "stddev: 0.00003965398357885943",
            "extra": "mean: 884.6003445305844 usec\nrounds: 1161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1378.4496257321114,
            "unit": "iter/sec",
            "range": "stddev: 0.000025570839878923632",
            "extra": "mean: 725.4526979677532 usec\nrounds: 1427"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2565.633756964168,
            "unit": "iter/sec",
            "range": "stddev: 0.000022084541782124674",
            "extra": "mean: 389.7672445592032 usec\nrounds: 2711"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 716.1016788605807,
            "unit": "iter/sec",
            "range": "stddev: 0.0001099596379288266",
            "extra": "mean: 1.3964497354497782 msec\nrounds: 756"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 936.4462009280414,
            "unit": "iter/sec",
            "range": "stddev: 0.00009594151323102591",
            "extra": "mean: 1.067867005076186 msec\nrounds: 985"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1246.424384525151,
            "unit": "iter/sec",
            "range": "stddev: 0.00007036819247517499",
            "extra": "mean: 802.2949586155352 usec\nrounds: 1329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2344.3179963498314,
            "unit": "iter/sec",
            "range": "stddev: 0.00003547841635633273",
            "extra": "mean: 426.56329113926864 usec\nrounds: 2370"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.34130828032906,
            "unit": "iter/sec",
            "range": "stddev: 0.0027953308677146024",
            "extra": "mean: 42.8425000000001 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.843082716050734,
            "unit": "iter/sec",
            "range": "stddev: 0.0013061559256046023",
            "extra": "mean: 38.69507407407382 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1004.9252482360774,
            "unit": "iter/sec",
            "range": "stddev: 0.00008002689429208996",
            "extra": "mean: 995.0988909426619 usec\nrounds: 1082"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1656.1590508164438,
            "unit": "iter/sec",
            "range": "stddev: 0.000037999833725859475",
            "extra": "mean: 603.8067415729338 usec\nrounds: 1780"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1828.2272014246487,
            "unit": "iter/sec",
            "range": "stddev: 0.0002227953841261067",
            "extra": "mean: 546.9779681763561 usec\nrounds: 2451"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1502.2633119531988,
            "unit": "iter/sec",
            "range": "stddev: 0.0003750256614862455",
            "extra": "mean: 665.6622657580775 usec\nrounds: 2348"
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
          "id": "37557d3e04b04cc28c9bae8be7a102901e28fff0",
          "message": "Merge pull request #1536 from TeoZosa/dependabot/pip/pygments-2.19.0",
          "timestamp": "2025-01-06T14:28:02Z",
          "tree_id": "39c6846d9604816197f120e1160f9a7c4c64b383",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/37557d3e04b04cc28c9bae8be7a102901e28fff0"
        },
        "date": 1736175497298,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 818.4397094101053,
            "unit": "iter/sec",
            "range": "stddev: 0.000033572995854107365",
            "extra": "mean: 1.2218370986920408 msec\nrounds: 841"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1130.8077655917923,
            "unit": "iter/sec",
            "range": "stddev: 0.000030015159412391853",
            "extra": "mean: 884.3236051502212 usec\nrounds: 1165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1368.9842465369934,
            "unit": "iter/sec",
            "range": "stddev: 0.0000444241788241271",
            "extra": "mean: 730.4685956245424 usec\nrounds: 1417"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2562.96082007188,
            "unit": "iter/sec",
            "range": "stddev: 0.000021535135369190927",
            "extra": "mean: 390.1737366285429 usec\nrounds: 2711"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 703.260978479137,
            "unit": "iter/sec",
            "range": "stddev: 0.00008662373949804223",
            "extra": "mean: 1.421947229551378 msec\nrounds: 758"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 844.4249929201898,
            "unit": "iter/sec",
            "range": "stddev: 0.00014385679536386197",
            "extra": "mean: 1.1842378048780873 msec\nrounds: 984"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1046.636467985634,
            "unit": "iter/sec",
            "range": "stddev: 0.0003587149173747624",
            "extra": "mean: 955.4415793714976 usec\nrounds: 1241"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1409.3462763179157,
            "unit": "iter/sec",
            "range": "stddev: 0.000484767828134915",
            "extra": "mean: 709.5488289880175 usec\nrounds: 2263"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.163565510060412,
            "unit": "iter/sec",
            "range": "stddev: 0.00946730357322581",
            "extra": "mean: 58.262952380952 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.68111230489927,
            "unit": "iter/sec",
            "range": "stddev: 0.0067260807826546",
            "extra": "mean: 50.81013636363772 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 825.6488388591857,
            "unit": "iter/sec",
            "range": "stddev: 0.0005903406731588989",
            "extra": "mean: 1.2111686626747011 msec\nrounds: 1002"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1224.108996705235,
            "unit": "iter/sec",
            "range": "stddev: 0.000544651692558037",
            "extra": "mean: 816.9207175926014 usec\nrounds: 1728"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 977.9609371423804,
            "unit": "iter/sec",
            "range": "stddev: 0.0005230743012039063",
            "extra": "mean: 1.022535729210226 msec\nrounds: 2393"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 860.9231751510748,
            "unit": "iter/sec",
            "range": "stddev: 0.0008261969035838771",
            "extra": "mean: 1.161543827443744 msec\nrounds: 2179"
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
          "id": "568f3bf24b792984bf400fbe65d3b585fa68700f",
          "message": "Merge pull request #1541 from TeoZosa/dependabot/pip/pygments-2.19.1",
          "timestamp": "2025-01-07T15:08:11Z",
          "tree_id": "8f1235d96e1e89c5df47f097e1b01f52b8764b11",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/568f3bf24b792984bf400fbe65d3b585fa68700f"
        },
        "date": 1736262846231,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 819.4564889066451,
            "unit": "iter/sec",
            "range": "stddev: 0.000046839814635573425",
            "extra": "mean: 1.2203210463733638 msec\nrounds: 841"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1136.2858511876098,
            "unit": "iter/sec",
            "range": "stddev: 0.000029383469356628758",
            "extra": "mean: 880.0602409638665 usec\nrounds: 1162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1384.8263298779682,
            "unit": "iter/sec",
            "range": "stddev: 0.00001912882210963897",
            "extra": "mean: 722.1122088920138 usec\nrounds: 1417"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2599.521115743155,
            "unit": "iter/sec",
            "range": "stddev: 0.00006714676632810119",
            "extra": "mean: 384.6862385320992 usec\nrounds: 2725"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 690.1150221617648,
            "unit": "iter/sec",
            "range": "stddev: 0.00011578735853728579",
            "extra": "mean: 1.4490338101430247 msec\nrounds: 769"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1002.4173078855166,
            "unit": "iter/sec",
            "range": "stddev: 0.00003644615540719863",
            "extra": "mean: 997.5885214007172 usec\nrounds: 1028"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1319.1616561065098,
            "unit": "iter/sec",
            "range": "stddev: 0.000024655433585252988",
            "extra": "mean: 758.057206537892 usec\nrounds: 1346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2279.2096402263364,
            "unit": "iter/sec",
            "range": "stddev: 0.00003651149205749155",
            "extra": "mean: 438.74858299594376 usec\nrounds: 2470"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.734273045445537,
            "unit": "iter/sec",
            "range": "stddev: 0.0027392391579808594",
            "extra": "mean: 40.42973076923058 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.283127692195475,
            "unit": "iter/sec",
            "range": "stddev: 0.0002672915914721015",
            "extra": "mean: 38.047222222222075 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1002.6623689261544,
            "unit": "iter/sec",
            "range": "stddev: 0.00005770086911882917",
            "extra": "mean: 997.3447004608283 usec\nrounds: 1085"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1691.0205767616724,
            "unit": "iter/sec",
            "range": "stddev: 0.000054041534756140634",
            "extra": "mean: 591.3588596982147 usec\nrounds: 1789"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2112.5324044138715,
            "unit": "iter/sec",
            "range": "stddev: 0.000052616666425979335",
            "extra": "mean: 473.3655199374104 usec\nrounds: 2558"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1726.6234926407233,
            "unit": "iter/sec",
            "range": "stddev: 0.0001576145905819635",
            "extra": "mean: 579.1650607455742 usec\nrounds: 2387"
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
          "id": "530abe1351622d550dd17181e33eb16bdadcfe8e",
          "message": "Merge pull request #1542 from TeoZosa/dependabot/pip/pygments-2.19.1",
          "timestamp": "2025-01-08T14:40:44Z",
          "tree_id": "3480d9cd7dadd30df758c71463795e807b435c51",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/530abe1351622d550dd17181e33eb16bdadcfe8e"
        },
        "date": 1736347727515,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 757.2068878056488,
            "unit": "iter/sec",
            "range": "stddev: 0.0001386470990412793",
            "extra": "mean: 1.3206430317848201 msec\nrounds: 818"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1137.4459334032979,
            "unit": "iter/sec",
            "range": "stddev: 0.000021825114333222403",
            "extra": "mean: 879.1626666666675 usec\nrounds: 1125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1325.3618862856133,
            "unit": "iter/sec",
            "range": "stddev: 0.00007429120036290491",
            "extra": "mean: 754.5109078114093 usec\nrounds: 1421"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2437.600695366226,
            "unit": "iter/sec",
            "range": "stddev: 0.00006150081987329152",
            "extra": "mean: 410.23946288699256 usec\nrounds: 2681"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 724.0694992392627,
            "unit": "iter/sec",
            "range": "stddev: 0.00013261583187472404",
            "extra": "mean: 1.3810828947368192 msec\nrounds: 760"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 988.945762445119,
            "unit": "iter/sec",
            "range": "stddev: 0.00004683094576332152",
            "extra": "mean: 1.0111777996070785 msec\nrounds: 1018"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1315.7623216375493,
            "unit": "iter/sec",
            "range": "stddev: 0.00002490428119240863",
            "extra": "mean: 760.0156833457861 usec\nrounds: 1339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2348.4480992968947,
            "unit": "iter/sec",
            "range": "stddev: 0.00003825072536717574",
            "extra": "mean: 425.81311475411843 usec\nrounds: 2440"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.490520957620216,
            "unit": "iter/sec",
            "range": "stddev: 0.0005750427850303042",
            "extra": "mean: 39.23026923076897 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.395750444425985,
            "unit": "iter/sec",
            "range": "stddev: 0.001095512770700481",
            "extra": "mean: 39.376666666666125 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1035.6961781963792,
            "unit": "iter/sec",
            "range": "stddev: 0.00010227590221264863",
            "extra": "mean: 965.5341219289401 usec\nrounds: 1099"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1705.9034155914392,
            "unit": "iter/sec",
            "range": "stddev: 0.000041349193319249335",
            "extra": "mean: 586.1996587030096 usec\nrounds: 1758"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1960.4760555751543,
            "unit": "iter/sec",
            "range": "stddev: 0.00013989908680291934",
            "extra": "mean: 510.0801905517919 usec\nrounds: 2519"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1751.1271429205572,
            "unit": "iter/sec",
            "range": "stddev: 0.00012631801601284135",
            "extra": "mean: 571.0607616601638 usec\nrounds: 2337"
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
          "id": "e338316c20ca8d0df0d94a437a4e2748162d671c",
          "message": "Merge pull request #1543 from TeoZosa/dependabot/pip/docs/orjson-3.10.14",
          "timestamp": "2025-01-09T15:06:22Z",
          "tree_id": "86a6ba20e76e052fbf5ff8ff3b22326a0baa63d1",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/e338316c20ca8d0df0d94a437a4e2748162d671c"
        },
        "date": 1736436370258,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 706.3720237779543,
            "unit": "iter/sec",
            "range": "stddev: 0.00034241283492975543",
            "extra": "mean: 1.4156846057571877 msec\nrounds: 799"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1007.5271915292171,
            "unit": "iter/sec",
            "range": "stddev: 0.00014528781750713978",
            "extra": "mean: 992.5290437890887 usec\nrounds: 1119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1107.4160891036695,
            "unit": "iter/sec",
            "range": "stddev: 0.0003169723245595953",
            "extra": "mean: 903.0029542097308 usec\nrounds: 1354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2305.433542844638,
            "unit": "iter/sec",
            "range": "stddev: 0.00011168837955308898",
            "extra": "mean: 433.7578947368467 usec\nrounds: 2660"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 702.6707123465407,
            "unit": "iter/sec",
            "range": "stddev: 0.00009299900662055137",
            "extra": "mean: 1.423141711229916 msec\nrounds: 748"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 904.8192949248711,
            "unit": "iter/sec",
            "range": "stddev: 0.00009439218166710478",
            "extra": "mean: 1.1051930541368837 msec\nrounds: 979"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1035.241377150346,
            "unit": "iter/sec",
            "range": "stddev: 0.0002334518543698637",
            "extra": "mean: 965.9582992641264 usec\nrounds: 1223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1914.0771365473336,
            "unit": "iter/sec",
            "range": "stddev: 0.00014371700890107583",
            "extra": "mean: 522.4449845338147 usec\nrounds: 2263"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.79929568394832,
            "unit": "iter/sec",
            "range": "stddev: 0.009725363201933538",
            "extra": "mean: 72.46746666666652 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 18.302599492059006,
            "unit": "iter/sec",
            "range": "stddev: 0.011482246389430892",
            "extra": "mean: 54.63704761904845 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 845.917054449009,
            "unit": "iter/sec",
            "range": "stddev: 0.00036209849505255314",
            "extra": "mean: 1.1821490000001873 msec\nrounds: 1000"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1278.6585722991365,
            "unit": "iter/sec",
            "range": "stddev: 0.00035289142473689966",
            "extra": "mean: 782.0696014276238 usec\nrounds: 1681"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1360.5771640414998,
            "unit": "iter/sec",
            "range": "stddev: 0.0004159255777486309",
            "extra": "mean: 734.9822019866698 usec\nrounds: 2416"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1677.6508521083288,
            "unit": "iter/sec",
            "range": "stddev: 0.0002772531349925538",
            "extra": "mean: 596.0715835141056 usec\nrounds: 2305"
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
          "id": "0dc0d2d4d785a6a7ae71d4b4f3f89655e57f874d",
          "message": "Merge pull request #1544 from TeoZosa/dependabot/pip/orjson-3.10.14",
          "timestamp": "2025-01-09T15:37:29Z",
          "tree_id": "86a6ba20e76e052fbf5ff8ff3b22326a0baa63d1",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/0dc0d2d4d785a6a7ae71d4b4f3f89655e57f874d"
        },
        "date": 1736438334151,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 654.6437118298348,
            "unit": "iter/sec",
            "range": "stddev: 0.0006533812694101668",
            "extra": "mean: 1.5275484693877814 msec\nrounds: 784"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 939.9439606261178,
            "unit": "iter/sec",
            "range": "stddev: 0.00037825915771826405",
            "extra": "mean: 1.0638932126696974 msec\nrounds: 1105"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 985.8696894144396,
            "unit": "iter/sec",
            "range": "stddev: 0.0005284234747722584",
            "extra": "mean: 1.0143328380386187 msec\nrounds: 1346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2018.562514246169,
            "unit": "iter/sec",
            "range": "stddev: 0.00021883112396232243",
            "extra": "mean: 495.40204622964046 usec\nrounds: 2639"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 532.6762477462479,
            "unit": "iter/sec",
            "range": "stddev: 0.0011978282222226521",
            "extra": "mean: 1.8773129161117994 msec\nrounds: 751"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 766.5288308947054,
            "unit": "iter/sec",
            "range": "stddev: 0.0006512111548955581",
            "extra": "mean: 1.3045823714585962 msec\nrounds: 953"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1150.1815984833336,
            "unit": "iter/sec",
            "range": "stddev: 0.00017594246511950924",
            "extra": "mean: 869.4279245282937 usec\nrounds: 1325"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1674.8154479542075,
            "unit": "iter/sec",
            "range": "stddev: 0.00026459839271036044",
            "extra": "mean: 597.0807119205302 usec\nrounds: 2416"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.65944459812981,
            "unit": "iter/sec",
            "range": "stddev: 0.003195808647468481",
            "extra": "mean: 44.13170833333376 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.96949650863608,
            "unit": "iter/sec",
            "range": "stddev: 0.0037716376527088713",
            "extra": "mean: 43.536000000000854 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 871.7765392178469,
            "unit": "iter/sec",
            "range": "stddev: 0.00034030474108912815",
            "extra": "mean: 1.1470829450138618 msec\nrounds: 1073"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1340.672533568588,
            "unit": "iter/sec",
            "range": "stddev: 0.00029598611398236986",
            "extra": "mean: 745.894299287396 usec\nrounds: 1684"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1417.4526035645952,
            "unit": "iter/sec",
            "range": "stddev: 0.0003362579208808169",
            "extra": "mean: 705.4909613804442 usec\nrounds: 2434"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1040.7474106506802,
            "unit": "iter/sec",
            "range": "stddev: 0.0005273552756592248",
            "extra": "mean: 960.8479346345865 usec\nrounds: 2203"
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
          "id": "7a717f8707ed492e7c1a0aba37496cbdce3b258d",
          "message": "Merge pull request #1545 from TeoZosa/dependabot/pip/orjson-3.10.14",
          "timestamp": "2025-01-09T16:50:58Z",
          "tree_id": "49f1329219fff3a5b38cf35e234ba6d3b877da1d",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/7a717f8707ed492e7c1a0aba37496cbdce3b258d"
        },
        "date": 1736441805624,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 758.9175044143515,
            "unit": "iter/sec",
            "range": "stddev: 0.000141237750585972",
            "extra": "mean: 1.317666273584886 msec\nrounds: 848"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1115.2530236280616,
            "unit": "iter/sec",
            "range": "stddev: 0.000058100298001118535",
            "extra": "mean: 896.6575107296022 usec\nrounds: 1165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1376.9193053583006,
            "unit": "iter/sec",
            "range": "stddev: 0.00004502789978692007",
            "extra": "mean: 726.258972554518 usec\nrounds: 1421"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2598.8503473415744,
            "unit": "iter/sec",
            "range": "stddev: 0.00002336442208907992",
            "extra": "mean: 384.78552680916147 usec\nrounds: 2667"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 703.7622650431521,
            "unit": "iter/sec",
            "range": "stddev: 0.000174411097426754",
            "extra": "mean: 1.4209343832020942 msec\nrounds: 762"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 967.4237382430001,
            "unit": "iter/sec",
            "range": "stddev: 0.00008898650136372573",
            "extra": "mean: 1.0336732090285108 msec\nrounds: 1019"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1209.0124088063571,
            "unit": "iter/sec",
            "range": "stddev: 0.00025036900519144657",
            "extra": "mean: 827.1213700670677 usec\nrounds: 1343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2218.896279206273,
            "unit": "iter/sec",
            "range": "stddev: 0.00011929478964710869",
            "extra": "mean: 450.67451298702093 usec\nrounds: 2464"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.81749595283915,
            "unit": "iter/sec",
            "range": "stddev: 0.0022454769772557747",
            "extra": "mean: 40.2941538461538 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.410927640030756,
            "unit": "iter/sec",
            "range": "stddev: 0.0022989351498813077",
            "extra": "mean: 39.35314814814803 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 939.6670429328703,
            "unit": "iter/sec",
            "range": "stddev: 0.0002511925976643943",
            "extra": "mean: 1.064206739526396 msec\nrounds: 1098"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1667.2138401586626,
            "unit": "iter/sec",
            "range": "stddev: 0.000052127447075713694",
            "extra": "mean: 599.8030821918044 usec\nrounds: 1752"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1786.7885518297226,
            "unit": "iter/sec",
            "range": "stddev: 0.00018748070085949887",
            "extra": "mean: 559.6633126935873 usec\nrounds: 2584"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1620.774826730687,
            "unit": "iter/sec",
            "range": "stddev: 0.0002183858991546876",
            "extra": "mean: 616.9888521881412 usec\nrounds: 2422"
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
          "id": "1c661c749bff6c80839b27460091f2cee8225907",
          "message": "Merge pull request #1549 from TeoZosa/dependabot/pip/sentry-sdk-2.20.0",
          "timestamp": "2025-01-14T15:38:24Z",
          "tree_id": "b46c76299d8b834bf968491f90aaad831121065f",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/1c661c749bff6c80839b27460091f2cee8225907"
        },
        "date": 1736870001867,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 710.6007540788623,
            "unit": "iter/sec",
            "range": "stddev: 0.000365011567539028",
            "extra": "mean: 1.4072599758162094 msec\nrounds: 827"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 992.4452462472759,
            "unit": "iter/sec",
            "range": "stddev: 0.00027574950256368093",
            "extra": "mean: 1.0076122625215755 msec\nrounds: 1158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1258.671845884779,
            "unit": "iter/sec",
            "range": "stddev: 0.00014157132804080557",
            "extra": "mean: 794.4882562277808 usec\nrounds: 1405"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2390.9862000487833,
            "unit": "iter/sec",
            "range": "stddev: 0.00008376296529095508",
            "extra": "mean: 418.23746200609474 usec\nrounds: 2632"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 666.1034002825493,
            "unit": "iter/sec",
            "range": "stddev: 0.0003060301319955088",
            "extra": "mean: 1.501268421052674 msec\nrounds: 760"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 885.4402033940512,
            "unit": "iter/sec",
            "range": "stddev: 0.00018498372839292448",
            "extra": "mean: 1.1293817427386068 msec\nrounds: 964"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1081.2195248470216,
            "unit": "iter/sec",
            "range": "stddev: 0.00021912926521458639",
            "extra": "mean: 924.8815592203507 usec\nrounds: 1334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1670.1918572257173,
            "unit": "iter/sec",
            "range": "stddev: 0.0004127240385483631",
            "extra": "mean: 598.7336099584728 usec\nrounds: 2410"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.494174896863793,
            "unit": "iter/sec",
            "range": "stddev: 0.008477110037765159",
            "extra": "mean: 51.29737499999957 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.400734589414235,
            "unit": "iter/sec",
            "range": "stddev: 0.00562731370252821",
            "extra": "mean: 51.54444000000069 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 800.7350906694145,
            "unit": "iter/sec",
            "range": "stddev: 0.0004570225037115489",
            "extra": "mean: 1.248852475247463 msec\nrounds: 1010"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1457.243381270182,
            "unit": "iter/sec",
            "range": "stddev: 0.00018482551326113035",
            "extra": "mean: 686.2271689498886 usec\nrounds: 1752"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1511.332625834019,
            "unit": "iter/sec",
            "range": "stddev: 0.0005928949891319855",
            "extra": "mean: 661.6677115986671 usec\nrounds: 2552"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1093.1048449145192,
            "unit": "iter/sec",
            "range": "stddev: 0.0005368400242028159",
            "extra": "mean: 914.8253295668084 usec\nrounds: 2124"
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
          "id": "026483ac3c0d9de822b9c23177cf56ba5642ce4f",
          "message": "Merge pull request #1551 from TeoZosa/dependabot/pip/pip-343d96632a",
          "timestamp": "2025-01-14T16:18:52Z",
          "tree_id": "c7c476ac5d9c5815f47879ba8d9a0a1174350ca1",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/026483ac3c0d9de822b9c23177cf56ba5642ce4f"
        },
        "date": 1736872058985,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 759.4841305501017,
            "unit": "iter/sec",
            "range": "stddev: 0.00009569234219387057",
            "extra": "mean: 1.3166832061068747 msec\nrounds: 786"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1046.1403456670023,
            "unit": "iter/sec",
            "range": "stddev: 0.000059920546913667866",
            "extra": "mean: 955.8946886446828 usec\nrounds: 1092"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1254.9640005971066,
            "unit": "iter/sec",
            "range": "stddev: 0.00006188825145632034",
            "extra": "mean: 796.8356060605756 usec\nrounds: 1320"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2466.2962068131833,
            "unit": "iter/sec",
            "range": "stddev: 0.00002687951762969667",
            "extra": "mean: 405.4663009404482 usec\nrounds: 2552"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 681.8153643993053,
            "unit": "iter/sec",
            "range": "stddev: 0.000052447031011165825",
            "extra": "mean: 1.4666727272727602 msec\nrounds: 715"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 919.4715560310366,
            "unit": "iter/sec",
            "range": "stddev: 0.00007245916262962775",
            "extra": "mean: 1.0875812236286788 msec\nrounds: 948"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1156.1382931448113,
            "unit": "iter/sec",
            "range": "stddev: 0.0001768894649834208",
            "extra": "mean: 864.9484286865893 usec\nrounds: 1241"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2093.6581918588304,
            "unit": "iter/sec",
            "range": "stddev: 0.0001860525302656703",
            "extra": "mean: 477.6328838625571 usec\nrounds: 2299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.950935680958917,
            "unit": "iter/sec",
            "range": "stddev: 0.0013234124526870605",
            "extra": "mean: 43.57120833333357 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.22965807879103,
            "unit": "iter/sec",
            "range": "stddev: 0.002214690633349795",
            "extra": "mean: 43.048416666666846 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 951.1906052806124,
            "unit": "iter/sec",
            "range": "stddev: 0.0000725466223639813",
            "extra": "mean: 1.0513140000000192 msec\nrounds: 1000"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1503.15533037015,
            "unit": "iter/sec",
            "range": "stddev: 0.00009378206542948696",
            "extra": "mean: 665.2672413793399 usec\nrounds: 1624"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1820.8089443666058,
            "unit": "iter/sec",
            "range": "stddev: 0.00009466865797936203",
            "extra": "mean: 549.206440957958 usec\nrounds: 2422"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1095.1829411432677,
            "unit": "iter/sec",
            "range": "stddev: 0.0006970573575034123",
            "extra": "mean: 913.0894596989378 usec\nrounds: 2258"
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
          "id": "d58b921c91dc47415c7f52e357ff521da0c2e210",
          "message": "Merge pull request #1553 from TeoZosa/dependabot/pip/emoji-2.14.1",
          "timestamp": "2025-01-16T14:52:37Z",
          "tree_id": "03a91129584a74f0ca4a4c7172f3a871925c6d57",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/d58b921c91dc47415c7f52e357ff521da0c2e210"
        },
        "date": 1737040140239,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 627.7478682074817,
            "unit": "iter/sec",
            "range": "stddev: 0.0005989428912422682",
            "extra": "mean: 1.5929962499999801 msec\nrounds: 800"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 999.6180946253957,
            "unit": "iter/sec",
            "range": "stddev: 0.00014442698855827264",
            "extra": "mean: 1.0003820512820423 msec\nrounds: 1170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1233.2571055210833,
            "unit": "iter/sec",
            "range": "stddev: 0.00011301355606785201",
            "extra": "mean: 810.8609271523101 usec\nrounds: 1359"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2350.8728712107268,
            "unit": "iter/sec",
            "range": "stddev: 0.000041509948447777244",
            "extra": "mean: 425.3739163211273 usec\nrounds: 2653"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 649.6743034906983,
            "unit": "iter/sec",
            "range": "stddev: 0.00014610967044186281",
            "extra": "mean: 1.5392328042328327 msec\nrounds: 756"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 890.681804791543,
            "unit": "iter/sec",
            "range": "stddev: 0.0001927601241533105",
            "extra": "mean: 1.122735408560459 msec\nrounds: 1028"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1158.7972682865543,
            "unit": "iter/sec",
            "range": "stddev: 0.00007005161409486752",
            "extra": "mean: 862.9637188208438 usec\nrounds: 1323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2115.1720227724973,
            "unit": "iter/sec",
            "range": "stddev: 0.000048151477319697",
            "extra": "mean: 472.7747858016925 usec\nrounds: 2451"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.231513854935816,
            "unit": "iter/sec",
            "range": "stddev: 0.0038232437329491797",
            "extra": "mean: 44.98119230769258 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.888976140883905,
            "unit": "iter/sec",
            "range": "stddev: 0.0034095632176838263",
            "extra": "mean: 43.6891538461529 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 842.179847350997,
            "unit": "iter/sec",
            "range": "stddev: 0.0003332446590424281",
            "extra": "mean: 1.187394833948369 msec\nrounds: 1084"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1543.5318041176856,
            "unit": "iter/sec",
            "range": "stddev: 0.00006602952092103188",
            "extra": "mean: 647.8648495173836 usec\nrounds: 1761"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2075.646850630944,
            "unit": "iter/sec",
            "range": "stddev: 0.00008231506450972147",
            "extra": "mean: 481.77752380951773 usec\nrounds: 2625"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1357.3223542065489,
            "unit": "iter/sec",
            "range": "stddev: 0.00035126576958679557",
            "extra": "mean: 736.744662681527 usec\nrounds: 2342"
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
          "id": "cbbe126d011f506b327bc8b7bdccd94d3293e791",
          "message": "Merge pull request #1555 from TeoZosa/dependabot/pip/emoji-2.14.1",
          "timestamp": "2025-01-17T15:16:34Z",
          "tree_id": "8f274d0e63856b636bac9bbe8e343399e4e0aa49",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/cbbe126d011f506b327bc8b7bdccd94d3293e791"
        },
        "date": 1737127495187,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 614.4352046921049,
            "unit": "iter/sec",
            "range": "stddev: 0.0007942945412915387",
            "extra": "mean: 1.6275109114249118 msec\nrounds: 779"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 742.187526969031,
            "unit": "iter/sec",
            "range": "stddev: 0.0008201588074207617",
            "extra": "mean: 1.3473683720930099 msec\nrounds: 1075"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 976.2121614375003,
            "unit": "iter/sec",
            "range": "stddev: 0.0006169119003218023",
            "extra": "mean: 1.0243674884437737 msec\nrounds: 1298"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2138.673536345203,
            "unit": "iter/sec",
            "range": "stddev: 0.00019912190208599652",
            "extra": "mean: 467.5795454545663 usec\nrounds: 2552"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 618.2017103866314,
            "unit": "iter/sec",
            "range": "stddev: 0.0006437794952703869",
            "extra": "mean: 1.6175950069348515 msec\nrounds: 721"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 845.6775669874078,
            "unit": "iter/sec",
            "range": "stddev: 0.0003991765969768035",
            "extra": "mean: 1.182483772819399 msec\nrounds: 986"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1120.056122873324,
            "unit": "iter/sec",
            "range": "stddev: 0.0003361502093532911",
            "extra": "mean: 892.812404287975 usec\nrounds: 1306"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1981.2371668903722,
            "unit": "iter/sec",
            "range": "stddev: 0.00018755845326957424",
            "extra": "mean: 504.73513050915477 usec\nrounds: 2337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.383997476712743,
            "unit": "iter/sec",
            "range": "stddev: 0.007244778993190907",
            "extra": "mean: 44.674772727273265 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.6010506011444,
            "unit": "iter/sec",
            "range": "stddev: 0.0033234026124754233",
            "extra": "mean: 44.245730769230924 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 768.7283480020182,
            "unit": "iter/sec",
            "range": "stddev: 0.0006871660045250396",
            "extra": "mean: 1.3008496468213693 msec\nrounds: 991"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1426.3371466683955,
            "unit": "iter/sec",
            "range": "stddev: 0.00023145032105308333",
            "extra": "mean: 701.0965130760117 usec\nrounds: 1606"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1558.843902177383,
            "unit": "iter/sec",
            "range": "stddev: 0.0005962530458134977",
            "extra": "mean: 641.5010499789021 usec\nrounds: 2381"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1304.4388054335204,
            "unit": "iter/sec",
            "range": "stddev: 0.0005601695795998473",
            "extra": "mean: 766.6131947582298 usec\nrounds: 2213"
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
          "id": "baf3a3aef8fbef048101c0227d116f0a49a12e86",
          "message": "Merge pull request #1556 from TeoZosa/dependabot/pip/docs/orjson-3.10.15",
          "timestamp": "2025-01-20T14:56:45Z",
          "tree_id": "cce852772e68b171a32b68976122c9d4f10aefe6",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/baf3a3aef8fbef048101c0227d116f0a49a12e86"
        },
        "date": 1737386779142,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 710.0310628061515,
            "unit": "iter/sec",
            "range": "stddev: 0.0002932969691111299",
            "extra": "mean: 1.408389086595517 msec\nrounds: 843"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1117.9880051201208,
            "unit": "iter/sec",
            "range": "stddev: 0.00010842201757270676",
            "extra": "mean: 894.4639794168062 usec\nrounds: 1166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1345.076091248725,
            "unit": "iter/sec",
            "range": "stddev: 0.000045767274181489616",
            "extra": "mean: 743.4523641496239 usec\nrounds: 1417"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2431.7074446686665,
            "unit": "iter/sec",
            "range": "stddev: 0.00005095160052691101",
            "extra": "mean: 411.2336795252339 usec\nrounds: 2696"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 698.2878519016147,
            "unit": "iter/sec",
            "range": "stddev: 0.00006526450251228316",
            "extra": "mean: 1.4320741758241202 msec\nrounds: 728"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 975.7613791285112,
            "unit": "iter/sec",
            "range": "stddev: 0.000044292770064580965",
            "extra": "mean: 1.0248407258064847 msec\nrounds: 992"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1275.5407402158867,
            "unit": "iter/sec",
            "range": "stddev: 0.000046199844620505205",
            "extra": "mean: 783.9812312311946 usec\nrounds: 1332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2213.690477798809,
            "unit": "iter/sec",
            "range": "stddev: 0.00015471559045019613",
            "extra": "mean: 451.7343368592133 usec\nrounds: 2458"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.311329351017736,
            "unit": "iter/sec",
            "range": "stddev: 0.0009439085548926413",
            "extra": "mean: 39.507999999999655 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.88044459246125,
            "unit": "iter/sec",
            "range": "stddev: 0.004281863265641201",
            "extra": "mean: 43.70544444444425 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1026.0209524278969,
            "unit": "iter/sec",
            "range": "stddev: 0.00007117333139126312",
            "extra": "mean: 974.6389658356169 usec\nrounds: 1083"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1693.411057044915,
            "unit": "iter/sec",
            "range": "stddev: 0.00010218529734871807",
            "extra": "mean: 590.5240761478485 usec\nrounds: 1786"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2092.445552806149,
            "unit": "iter/sec",
            "range": "stddev: 0.00008748249657665581",
            "extra": "mean: 477.9096873793988 usec\nrounds: 2591"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1606.0831231316447,
            "unit": "iter/sec",
            "range": "stddev: 0.00024975127187704696",
            "extra": "mean: 622.6327800830976 usec\nrounds: 2410"
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
          "id": "a352be814abb1ec341788782633e05fd414576b4",
          "message": "Merge pull request #1557 from TeoZosa/dependabot/github_actions/release-drafter/release-drafter-6.1.0",
          "timestamp": "2025-01-20T15:26:55Z",
          "tree_id": "c167f3baa57d2fa4707ac588adea1fd7d06d1767",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/a352be814abb1ec341788782633e05fd414576b4"
        },
        "date": 1737390509752,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 801.5643801504591,
            "unit": "iter/sec",
            "range": "stddev: 0.00006596467222165817",
            "extra": "mean: 1.2475604265402778 msec\nrounds: 844"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1080.3863053384857,
            "unit": "iter/sec",
            "range": "stddev: 0.00010466047531769727",
            "extra": "mean: 925.5948497854195 usec\nrounds: 1165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1234.0758428999598,
            "unit": "iter/sec",
            "range": "stddev: 0.0001697710526792685",
            "extra": "mean: 810.3229681978833 usec\nrounds: 1415"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2421.875909995548,
            "unit": "iter/sec",
            "range": "stddev: 0.000042330004007457035",
            "extra": "mean: 412.9030706622116 usec\nrounds: 2703"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 709.0310349775774,
            "unit": "iter/sec",
            "range": "stddev: 0.00010084148689355555",
            "extra": "mean: 1.410375499334277 msec\nrounds: 751"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 975.2941435452865,
            "unit": "iter/sec",
            "range": "stddev: 0.00006731576681467491",
            "extra": "mean: 1.0253316977429041 msec\nrounds: 1019"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1284.6624144755663,
            "unit": "iter/sec",
            "range": "stddev: 0.00009964323476268585",
            "extra": "mean: 778.4146159582531 usec\nrounds: 1341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2357.3331379333918,
            "unit": "iter/sec",
            "range": "stddev: 0.000027953645845226595",
            "extra": "mean: 424.20817995910085 usec\nrounds: 2445"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.274586655139327,
            "unit": "iter/sec",
            "range": "stddev: 0.0035301863513677507",
            "extra": "mean: 41.195346153846195 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.810090716445384,
            "unit": "iter/sec",
            "range": "stddev: 0.0026299847030856983",
            "extra": "mean: 41.99900000000043 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 977.2702915281303,
            "unit": "iter/sec",
            "range": "stddev: 0.000348165261714968",
            "extra": "mean: 1.023258364312219 msec\nrounds: 1076"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1600.3963919650878,
            "unit": "iter/sec",
            "range": "stddev: 0.00023146900988008502",
            "extra": "mean: 624.84519774012 usec\nrounds: 1770"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2072.4551434646683,
            "unit": "iter/sec",
            "range": "stddev: 0.00006487270209503897",
            "extra": "mean: 482.51949054406555 usec\nrounds: 2591"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1664.30651687193,
            "unit": "iter/sec",
            "range": "stddev: 0.0001957519952182153",
            "extra": "mean: 600.850858818665 usec\nrounds: 2387"
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
          "id": "7faa24b058d91918c0c1ebce30b8c42d5df06737",
          "message": "Merge pull request #1558 from TeoZosa/dependabot/pip/orjson-3.10.15",
          "timestamp": "2025-01-20T16:51:19Z",
          "tree_id": "7acfceb6d40ab890581b7662fff1a92d57ef555f",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/7faa24b058d91918c0c1ebce30b8c42d5df06737"
        },
        "date": 1737392488309,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 734.3706391292094,
            "unit": "iter/sec",
            "range": "stddev: 0.00017320303939688007",
            "extra": "mean: 1.3617102137767443 msec\nrounds: 842"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1042.415796278964,
            "unit": "iter/sec",
            "range": "stddev: 0.00005798262798788099",
            "extra": "mean: 959.3100983020665 usec\nrounds: 1119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1266.8166294970258,
            "unit": "iter/sec",
            "range": "stddev: 0.0000295827900256408",
            "extra": "mean: 789.3802281369151 usec\nrounds: 1315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2471.434227542522,
            "unit": "iter/sec",
            "range": "stddev: 0.000019436186285071324",
            "extra": "mean: 404.62335143523245 usec\nrounds: 2578"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 707.4154052951417,
            "unit": "iter/sec",
            "range": "stddev: 0.000037189931275932054",
            "extra": "mean: 1.4135965834427775 msec\nrounds: 761"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 942.1114576101522,
            "unit": "iter/sec",
            "range": "stddev: 0.0000371345417601352",
            "extra": "mean: 1.0614455348379832 msec\nrounds: 1019"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1268.927433212377,
            "unit": "iter/sec",
            "range": "stddev: 0.00005217663169985275",
            "extra": "mean: 788.067129629652 usec\nrounds: 1296"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2281.4348470238506,
            "unit": "iter/sec",
            "range": "stddev: 0.000018604363352373475",
            "extra": "mean: 438.32064777326764 usec\nrounds: 2470"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.513940417925028,
            "unit": "iter/sec",
            "range": "stddev: 0.001184455328896776",
            "extra": "mean: 40.79311538461529 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.228340741732872,
            "unit": "iter/sec",
            "range": "stddev: 0.0008760072365351078",
            "extra": "mean: 39.63796153846115 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1024.2541124786774,
            "unit": "iter/sec",
            "range": "stddev: 0.00005464494054050482",
            "extra": "mean: 976.320219579121 usec\nrounds: 1093"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1733.7473430567682,
            "unit": "iter/sec",
            "range": "stddev: 0.000009251233034117961",
            "extra": "mean: 576.7853107344356 usec\nrounds: 1770"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2517.6918233348642,
            "unit": "iter/sec",
            "range": "stddev: 0.000020155910833821377",
            "extra": "mean: 397.18919954048545 usec\nrounds: 2611"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 2279.4140654254757,
            "unit": "iter/sec",
            "range": "stddev: 0.000017558460169061595",
            "extra": "mean: 438.70923460908796 usec\nrounds: 2404"
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
          "id": "a09abdfffd75cdbe57e3a4a592f58ca59694849d",
          "message": "Merge pull request #1559 from TeoZosa/dependabot/pip/pre-commit-4.1.0",
          "timestamp": "2025-01-21T14:37:16Z",
          "tree_id": "e144482503801965e4374f9201ce2d53a1fb5a8a",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/a09abdfffd75cdbe57e3a4a592f58ca59694849d"
        },
        "date": 1737471638973,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 660.1227497070075,
            "unit": "iter/sec",
            "range": "stddev: 0.0003975581038531456",
            "extra": "mean: 1.5148697729988028 msec\nrounds: 837"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 824.7753712554812,
            "unit": "iter/sec",
            "range": "stddev: 0.0005969181018020573",
            "extra": "mean: 1.2124513350559805 msec\nrounds: 1161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1185.399399363159,
            "unit": "iter/sec",
            "range": "stddev: 0.0002144590145533962",
            "extra": "mean: 843.5975254730494 usec\nrounds: 1374"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1917.7053343109558,
            "unit": "iter/sec",
            "range": "stddev: 0.0003632320776503708",
            "extra": "mean: 521.4565460648868 usec\nrounds: 2681"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 575.248779879087,
            "unit": "iter/sec",
            "range": "stddev: 0.0007264092326303354",
            "extra": "mean: 1.7383783068782737 msec\nrounds: 756"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 861.2170578167248,
            "unit": "iter/sec",
            "range": "stddev: 0.0003479078072695447",
            "extra": "mean: 1.1611474609375532 msec\nrounds: 1024"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1069.4088549920145,
            "unit": "iter/sec",
            "range": "stddev: 0.00040222116593453496",
            "extra": "mean: 935.096053611289 usec\nrounds: 1343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1965.6827243075645,
            "unit": "iter/sec",
            "range": "stddev: 0.0001998732397948116",
            "extra": "mean: 508.7290983606025 usec\nrounds: 2440"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 21.06707250275133,
            "unit": "iter/sec",
            "range": "stddev: 0.005842052322600195",
            "extra": "mean: 47.46744000000007 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.61636590560608,
            "unit": "iter/sec",
            "range": "stddev: 0.006960011843049135",
            "extra": "mean: 48.505153846152695 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 834.9100426869877,
            "unit": "iter/sec",
            "range": "stddev: 0.0005946853235022138",
            "extra": "mean: 1.1977338262475608 msec\nrounds: 1082"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1570.795317534064,
            "unit": "iter/sec",
            "range": "stddev: 0.0001437062128858645",
            "extra": "mean: 636.6201814058529 usec\nrounds: 1764"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1856.3361583274059,
            "unit": "iter/sec",
            "range": "stddev: 0.00021945515738423498",
            "extra": "mean: 538.6955350269204 usec\nrounds: 2598"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1473.269031151355,
            "unit": "iter/sec",
            "range": "stddev: 0.0002891702420855885",
            "extra": "mean: 678.7626556016747 usec\nrounds: 2410"
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
          "id": "d30ea4dbe33fe5d2b6a379c0990f48352f4b0415",
          "message": "Merge pull request #1560 from TeoZosa/dependabot/pip/importlib-metadata-8.6.1",
          "timestamp": "2025-01-21T14:48:12Z",
          "tree_id": "799ce123dbdf514736ad393f5094d613a28c1302",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/d30ea4dbe33fe5d2b6a379c0990f48352f4b0415"
        },
        "date": 1737472583502,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 738.9769995603131,
            "unit": "iter/sec",
            "range": "stddev: 0.00032128951214950135",
            "extra": "mean: 1.3532220902612586 msec\nrounds: 842"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1034.8604517296708,
            "unit": "iter/sec",
            "range": "stddev: 0.000265093554248321",
            "extra": "mean: 966.3138622493451 usec\nrounds: 1147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1267.7020189743664,
            "unit": "iter/sec",
            "range": "stddev: 0.00018911600591979904",
            "extra": "mean: 788.8289085545903 usec\nrounds: 1356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2284.8592333749034,
            "unit": "iter/sec",
            "range": "stddev: 0.00011945396349206765",
            "extra": "mean: 437.6637236084462 usec\nrounds: 2605"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 664.8604327831691,
            "unit": "iter/sec",
            "range": "stddev: 0.00029380658340373783",
            "extra": "mean: 1.5040750670240741 msec\nrounds: 746"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 950.0166555319842,
            "unit": "iter/sec",
            "range": "stddev: 0.00008138117877588342",
            "extra": "mean: 1.0526131243878314 msec\nrounds: 1021"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1285.000427053856,
            "unit": "iter/sec",
            "range": "stddev: 0.000048156788259858724",
            "extra": "mean: 778.2098581030968 usec\nrounds: 1339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2272.4575548319535,
            "unit": "iter/sec",
            "range": "stddev: 0.0000423017600606624",
            "extra": "mean: 440.05222358221306 usec\nrounds: 2451"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.357340927827295,
            "unit": "iter/sec",
            "range": "stddev: 0.0031051494788744156",
            "extra": "mean: 41.05538461538467 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.76421511367551,
            "unit": "iter/sec",
            "range": "stddev: 0.003682292763190493",
            "extra": "mean: 42.08007692307639 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1024.2262004034696,
            "unit": "iter/sec",
            "range": "stddev: 0.00010792412691300053",
            "extra": "mean: 976.3468261269569 usec\nrounds: 1087"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1675.4906016334928,
            "unit": "iter/sec",
            "range": "stddev: 0.00007405468985733903",
            "extra": "mean: 596.8401129944066 usec\nrounds: 1770"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2050.6899302143765,
            "unit": "iter/sec",
            "range": "stddev: 0.00015129976030689557",
            "extra": "mean: 487.64076190468313 usec\nrounds: 2625"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1534.1110442237905,
            "unit": "iter/sec",
            "range": "stddev: 0.00025259923590758107",
            "extra": "mean: 651.8432963279832 usec\nrounds: 2342"
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
          "id": "bc1d2d9b0c1b854b2dc343f4feec6c2e59ca5b8e",
          "message": "Merge pull request #1562 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.24.1",
          "timestamp": "2025-01-22T14:49:07Z",
          "tree_id": "c4ee992c141384f7d6e52767e8801b64f63d5b98",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/bc1d2d9b0c1b854b2dc343f4feec6c2e59ca5b8e"
        },
        "date": 1737557798281,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 759.9520521396988,
            "unit": "iter/sec",
            "range": "stddev: 0.00009993330062265772",
            "extra": "mean: 1.3158724911452362 msec\nrounds: 847"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1152.7315216547383,
            "unit": "iter/sec",
            "range": "stddev: 0.000017402513063662072",
            "extra": "mean: 867.5046888320592 usec\nrounds: 1173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1229.2451969975068,
            "unit": "iter/sec",
            "range": "stddev: 0.0001558309684796039",
            "extra": "mean: 813.5073477956638 usec\nrounds: 1429"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2477.661845648409,
            "unit": "iter/sec",
            "range": "stddev: 0.00005991851530778901",
            "extra": "mean: 403.6063281824877 usec\nrounds: 2718"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 717.1635473044281,
            "unit": "iter/sec",
            "range": "stddev: 0.00013199477880210505",
            "extra": "mean: 1.3943820816864676 msec\nrounds: 759"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 906.8483579790753,
            "unit": "iter/sec",
            "range": "stddev: 0.0001268815803802226",
            "extra": "mean: 1.1027201970443155 msec\nrounds: 1015"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1199.4535129273133,
            "unit": "iter/sec",
            "range": "stddev: 0.00011577433799431837",
            "extra": "mean: 833.713011152438 usec\nrounds: 1345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2344.4518642714806,
            "unit": "iter/sec",
            "range": "stddev: 0.000020254047639090738",
            "extra": "mean: 426.53893442625315 usec\nrounds: 2440"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.60622935087818,
            "unit": "iter/sec",
            "range": "stddev: 0.003140334636014887",
            "extra": "mean: 40.64011538461543 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.21042539654261,
            "unit": "iter/sec",
            "range": "stddev: 0.005665723682225141",
            "extra": "mean: 41.30451999999991 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1052.7968916319026,
            "unit": "iter/sec",
            "range": "stddev: 0.00004118354816992799",
            "extra": "mean: 949.8508287291161 usec\nrounds: 1086"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1709.7930570809497,
            "unit": "iter/sec",
            "range": "stddev: 0.000058007968430339876",
            "extra": "mean: 584.8661016949346 usec\nrounds: 1770"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1971.7922246039823,
            "unit": "iter/sec",
            "range": "stddev: 0.00021788790260452996",
            "extra": "mean: 507.15282651083663 usec\nrounds: 2565"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1673.6301929336776,
            "unit": "iter/sec",
            "range": "stddev: 0.00015551960970374527",
            "extra": "mean: 597.5035609551936 usec\nrounds: 2387"
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
          "id": "aafec4b6d431e00188141e78f2fc10e5de8e9ce2",
          "message": "Merge pull request #1563 from TeoZosa/dependabot/pip/importlib-metadata-8.6.1",
          "timestamp": "2025-01-22T15:30:25Z",
          "tree_id": "4514bf54dd35e1380f28718d52412a2020cf2995",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/aafec4b6d431e00188141e78f2fc10e5de8e9ce2"
        },
        "date": 1737560158068,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 746.2225244399048,
            "unit": "iter/sec",
            "range": "stddev: 0.00041226146083121794",
            "extra": "mean: 1.3400828402366627 msec\nrounds: 845"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1042.7115899327373,
            "unit": "iter/sec",
            "range": "stddev: 0.0003773830079034172",
            "extra": "mean: 959.0379637618755 usec\nrounds: 1159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1178.4065944132883,
            "unit": "iter/sec",
            "range": "stddev: 0.0003489197803817799",
            "extra": "mean: 848.6035335688914 usec\nrounds: 1415"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2037.3614247511168,
            "unit": "iter/sec",
            "range": "stddev: 0.0002769308647022211",
            "extra": "mean: 490.8309285978356 usec\nrounds: 2703"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 580.9969311444366,
            "unit": "iter/sec",
            "range": "stddev: 0.0006967334314481908",
            "extra": "mean: 1.7211794871794228 msec\nrounds: 741"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 797.9906642154513,
            "unit": "iter/sec",
            "range": "stddev: 0.0005665459894358209",
            "extra": "mean: 1.2531474926253119 msec\nrounds: 1017"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1026.0521168330001,
            "unit": "iter/sec",
            "range": "stddev: 0.00039250959478892984",
            "extra": "mean: 974.60936300837 usec\nrounds: 1303"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1756.0617350718658,
            "unit": "iter/sec",
            "range": "stddev: 0.0002963508929496048",
            "extra": "mean: 569.456061838894 usec\nrounds: 2458"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.573202334153365,
            "unit": "iter/sec",
            "range": "stddev: 0.007448346024005687",
            "extra": "mean: 48.60691999999972 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.301139119378327,
            "unit": "iter/sec",
            "range": "stddev: 0.004554130474129288",
            "extra": "mean: 46.94584615384574 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 734.8479446811524,
            "unit": "iter/sec",
            "range": "stddev: 0.0007857393299810331",
            "extra": "mean: 1.3608257425743988 msec\nrounds: 1010"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1441.3691779448816,
            "unit": "iter/sec",
            "range": "stddev: 0.00025233159486722363",
            "extra": "mean: 693.7847813742 usec\nrounds: 1761"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1444.702849617702,
            "unit": "iter/sec",
            "range": "stddev: 0.0004485620481920241",
            "extra": "mean: 692.1838634599637 usec\nrounds: 2578"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1350.0805756182424,
            "unit": "iter/sec",
            "range": "stddev: 0.00036091543273626784",
            "extra": "mean: 740.6965317918673 usec\nrounds: 2422"
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
          "id": "beca5f792b211eadc9d6e7a827931c99866a9883",
          "message": "Merge pull request #1566 from TeoZosa/dependabot/github_actions/pypa/gh-action-pypi-publish-1.12.4",
          "timestamp": "2025-01-24T14:29:15Z",
          "tree_id": "8a53d2b79dcd093f10e64cb2c6f6fe7324a70b5d",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/beca5f792b211eadc9d6e7a827931c99866a9883"
        },
        "date": 1737729442100,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 738.6195668000652,
            "unit": "iter/sec",
            "range": "stddev: 0.00010355820500630559",
            "extra": "mean: 1.3538769414575869 msec\nrounds: 837"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1039.752458590621,
            "unit": "iter/sec",
            "range": "stddev: 0.0000695597468750854",
            "extra": "mean: 961.7673819742583 usec\nrounds: 1165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1293.2038983316897,
            "unit": "iter/sec",
            "range": "stddev: 0.00003909700343863934",
            "extra": "mean: 773.2732644017387 usec\nrounds: 1354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2578.4846089185853,
            "unit": "iter/sec",
            "range": "stddev: 0.000016278884837603526",
            "extra": "mean: 387.8246922790047 usec\nrounds: 2681"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 699.7013924151058,
            "unit": "iter/sec",
            "range": "stddev: 0.00013365617267953442",
            "extra": "mean: 1.4291810918774601 msec\nrounds: 751"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 950.6917879769898,
            "unit": "iter/sec",
            "range": "stddev: 0.00010125845007943673",
            "extra": "mean: 1.0518656126481696 msec\nrounds: 1012"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1259.9550110304915,
            "unit": "iter/sec",
            "range": "stddev: 0.00008270351122722716",
            "extra": "mean: 793.6791323859416 usec\nrounds: 1337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2289.73512856992,
            "unit": "iter/sec",
            "range": "stddev: 0.000031139332199194905",
            "extra": "mean: 436.7317370129886 usec\nrounds: 2464"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.155195271527774,
            "unit": "iter/sec",
            "range": "stddev: 0.0012992230133664052",
            "extra": "mean: 41.39896153846127 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.747433405608458,
            "unit": "iter/sec",
            "range": "stddev: 0.0028644026575554596",
            "extra": "mean: 40.40823076923088 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1011.5404620820678,
            "unit": "iter/sec",
            "range": "stddev: 0.00004914891876821235",
            "extra": "mean: 988.5912007332716 usec\nrounds: 1091"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1653.7677082523985,
            "unit": "iter/sec",
            "range": "stddev: 0.00004137499487318438",
            "extra": "mean: 604.679844097778 usec\nrounds: 1796"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2480.7166769469864,
            "unit": "iter/sec",
            "range": "stddev: 0.00001964891065345402",
            "extra": "mean: 403.1093148576315 usec\nrounds: 2598"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 2280.915085005733,
            "unit": "iter/sec",
            "range": "stddev: 0.000020162597249295536",
            "extra": "mean: 438.4205298013041 usec\nrounds: 2416"
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
          "id": "29372592cd0fa83a735fe2efc0d6dad1367c4124",
          "message": "Merge pull request #1569 from TeoZosa/dependabot/pip/black-25.1.0\n\n⬆️ Bump black from 24.10.0 to 25.1.0",
          "timestamp": "2025-02-01T12:37:01+09:00",
          "tree_id": "7154520b27c5c06bddbbe4aa95db680c99c5e9ec",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/29372592cd0fa83a735fe2efc0d6dad1367c4124"
        },
        "date": 1738381567789,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 600.8339719442881,
            "unit": "iter/sec",
            "range": "stddev: 0.0006722371316174102",
            "extra": "mean: 1.6643532934131833 msec\nrounds: 835"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 855.7507420613244,
            "unit": "iter/sec",
            "range": "stddev: 0.0006599303296041973",
            "extra": "mean: 1.1685645724258553 msec\nrounds: 1146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1088.760069134611,
            "unit": "iter/sec",
            "range": "stddev: 0.00041965464597340925",
            "extra": "mean: 918.4760061919234 usec\nrounds: 1292"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1897.7158749136672,
            "unit": "iter/sec",
            "range": "stddev: 0.00039746699435913867",
            "extra": "mean: 526.9492726594243 usec\nrounds: 2681"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 648.0398527182027,
            "unit": "iter/sec",
            "range": "stddev: 0.00039392973998328813",
            "extra": "mean: 1.543114973262062 msec\nrounds: 748"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 902.8979912076405,
            "unit": "iter/sec",
            "range": "stddev: 0.00028263669732170207",
            "extra": "mean: 1.107544827586208 msec\nrounds: 1015"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1147.2288489355715,
            "unit": "iter/sec",
            "range": "stddev: 0.00021342506584369337",
            "extra": "mean: 871.6656671664296 usec\nrounds: 1334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2013.053804254944,
            "unit": "iter/sec",
            "range": "stddev: 0.0001705284142135647",
            "extra": "mean: 496.7577110389816 usec\nrounds: 2464"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.35027918039279,
            "unit": "iter/sec",
            "range": "stddev: 0.007929821900585155",
            "extra": "mean: 49.13937499999932 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.550700740474845,
            "unit": "iter/sec",
            "range": "stddev: 0.004334048993339327",
            "extra": "mean: 44.34451999999993 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 967.0006565613918,
            "unit": "iter/sec",
            "range": "stddev: 0.00017627992548908885",
            "extra": "mean: 1.034125461254548 msec\nrounds: 1084"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1593.0174591372229,
            "unit": "iter/sec",
            "range": "stddev: 0.00011304633215424736",
            "extra": "mean: 627.7395104894828 usec\nrounds: 1716"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2190.619292626763,
            "unit": "iter/sec",
            "range": "stddev: 0.00006669966516539982",
            "extra": "mean: 456.49191685922926 usec\nrounds: 2598"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1383.221562803846,
            "unit": "iter/sec",
            "range": "stddev: 0.0004731921154746788",
            "extra": "mean: 722.9499791580458 usec\nrounds: 2399"
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
          "id": "a582ed01286d43c20f1dd6804fd76fe960d60039",
          "message": "Merge pull request #1552 from TeoZosa/dependabot/pip/structlog-25.1.0\n\n⬆️ Bump structlog from 24.4.0 to 25.1.0",
          "timestamp": "2025-02-01T12:37:13+09:00",
          "tree_id": "a1b15d8dd2e6f6a9383a8341fa77874f8293552b",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/a582ed01286d43c20f1dd6804fd76fe960d60039"
        },
        "date": 1738382221459,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 663.8562886453617,
            "unit": "iter/sec",
            "range": "stddev: 0.0007176201061597185",
            "extra": "mean: 1.5063501199040528 msec\nrounds: 834"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1040.1445630720893,
            "unit": "iter/sec",
            "range": "stddev: 0.00029908579920662263",
            "extra": "mean: 961.4048234280805 usec\nrounds: 1161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1225.3731957715695,
            "unit": "iter/sec",
            "range": "stddev: 0.00023237966336428376",
            "extra": "mean: 816.0779127948357 usec\nrounds: 1399"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2254.8144052960447,
            "unit": "iter/sec",
            "range": "stddev: 0.00018720712367137753",
            "extra": "mean: 443.49548133594857 usec\nrounds: 2545"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 623.6563209378586,
            "unit": "iter/sec",
            "range": "stddev: 0.0004816467944418418",
            "extra": "mean: 1.6034472295513549 msec\nrounds: 758"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 859.764253687999,
            "unit": "iter/sec",
            "range": "stddev: 0.00038771007034914604",
            "extra": "mean: 1.1631095334685677 msec\nrounds: 986"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1096.5816334943731,
            "unit": "iter/sec",
            "range": "stddev: 0.0003098649557566351",
            "extra": "mean: 911.9248120300853 usec\nrounds: 1330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2035.7770203703565,
            "unit": "iter/sec",
            "range": "stddev: 0.00014501001331363795",
            "extra": "mean: 491.212932454693 usec\nrounds: 2428"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.960295645245697,
            "unit": "iter/sec",
            "range": "stddev: 0.014604303650931195",
            "extra": "mean: 50.09945833333325 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.926146628297357,
            "unit": "iter/sec",
            "range": "stddev: 0.002876321445875227",
            "extra": "mean: 43.61832000000021 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 988.3550431162913,
            "unit": "iter/sec",
            "range": "stddev: 0.00006734131626952994",
            "extra": "mean: 1.0117821596245333 msec\nrounds: 1065"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1552.16955579396,
            "unit": "iter/sec",
            "range": "stddev: 0.0001688315466320554",
            "extra": "mean: 644.2595116411002 usec\nrounds: 1761"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1939.9545041632168,
            "unit": "iter/sec",
            "range": "stddev: 0.0002189248819885432",
            "extra": "mean: 515.476006191878 usec\nrounds: 2584"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1467.7695633624915,
            "unit": "iter/sec",
            "range": "stddev: 0.00038346513210391986",
            "extra": "mean: 681.3058568329452 usec\nrounds: 2305"
          }
        ]
      }
    ]
  }
}