window.BENCHMARK_DATA = {
  "lastUpdate": 1739809207217,
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
          "id": "8df53ae6cc7b2202dc2b3fec51df809f89b35d03",
          "message": "Merge pull request #1423 from TeoZosa/build/add-python-312-support\n\n➕ Add Python 3.12 support",
          "timestamp": "2024-09-13T09:20:08+09:00",
          "tree_id": "c8ab121c4cd1e65d843d42fe7c718f783372f757",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/8df53ae6cc7b2202dc2b3fec51df809f89b35d03"
        },
        "date": 1726187097571,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 767.3160058258077,
            "unit": "iter/sec",
            "range": "stddev: 0.00009440444810795673",
            "extra": "mean: 1.3032440251572377 msec\nrounds: 795"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1053.1614125613926,
            "unit": "iter/sec",
            "range": "stddev: 0.000012580183854126537",
            "extra": "mean: 949.5220657277038 usec\nrounds: 1065"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1284.1694344912596,
            "unit": "iter/sec",
            "range": "stddev: 0.00008110920259761819",
            "extra": "mean: 778.7134416543429 usec\nrounds: 1354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2439.714131718898,
            "unit": "iter/sec",
            "range": "stddev: 0.000011118711738424969",
            "extra": "mean: 409.88408723748756 usec\nrounds: 2476"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 697.5711839685586,
            "unit": "iter/sec",
            "range": "stddev: 0.000027212239602938344",
            "extra": "mean: 1.4335454545454285 msec\nrounds: 715"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 926.8206109128604,
            "unit": "iter/sec",
            "range": "stddev: 0.00001147810333170402",
            "extra": "mean: 1.0789574468084633 msec\nrounds: 940"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1236.3297943798118,
            "unit": "iter/sec",
            "range": "stddev: 0.00002749653966596465",
            "extra": "mean: 808.8456692913694 usec\nrounds: 1270"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2199.0671981566766,
            "unit": "iter/sec",
            "range": "stddev: 0.000012875985863622886",
            "extra": "mean: 454.73826395038304 usec\nrounds: 2258"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 41.11607066749431,
            "unit": "iter/sec",
            "range": "stddev: 0.00014075224297488238",
            "extra": "mean: 24.321390243902457 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 42.148722256583355,
            "unit": "iter/sec",
            "range": "stddev: 0.00022816967079590641",
            "extra": "mean: 23.725511627907213 msec\nrounds: 43"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1010.0871957283418,
            "unit": "iter/sec",
            "range": "stddev: 0.00013350927980198673",
            "extra": "mean: 990.0135396518235 usec\nrounds: 1034"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1598.9757285909986,
            "unit": "iter/sec",
            "range": "stddev: 0.00003129803676918615",
            "extra": "mean: 625.400362318939 usec\nrounds: 1656"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2028.7072144637584,
            "unit": "iter/sec",
            "range": "stddev: 0.00012712732128917305",
            "extra": "mean: 492.9247517189546 usec\nrounds: 2618"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1506.0450009022775,
            "unit": "iter/sec",
            "range": "stddev: 0.00014583603504871671",
            "extra": "mean: 663.9907834101214 usec\nrounds: 2387"
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
          "id": "04eed430db5e2bc0a8d1195d771d6552072b29df",
          "message": ":bookmark: Bump version number to `1.5.0`",
          "timestamp": "2024-09-13T09:21:02+09:00",
          "tree_id": "879de066c95b776dd70335a5592c09595efdf551",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/04eed430db5e2bc0a8d1195d771d6552072b29df"
        },
        "date": 1726187907207,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 715.2911655803451,
            "unit": "iter/sec",
            "range": "stddev: 0.00005164515979304834",
            "extra": "mean: 1.3980320855614912 msec\nrounds: 748"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 956.0679259912927,
            "unit": "iter/sec",
            "range": "stddev: 0.00007364216196639543",
            "extra": "mean: 1.0459507874015925 msec\nrounds: 1016"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1205.6922365971386,
            "unit": "iter/sec",
            "range": "stddev: 0.00005003682999403131",
            "extra": "mean: 829.3990536277566 usec\nrounds: 1268"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2057.6476640140504,
            "unit": "iter/sec",
            "range": "stddev: 0.0000875312651017249",
            "extra": "mean: 485.991852487128 usec\nrounds: 2332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 621.7681603363415,
            "unit": "iter/sec",
            "range": "stddev: 0.0002666677862836873",
            "extra": "mean: 1.608316513761426 msec\nrounds: 654"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 849.7059250143867,
            "unit": "iter/sec",
            "range": "stddev: 0.00006957615762324512",
            "extra": "mean: 1.1768777533039665 msec\nrounds: 908"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1117.5669340459424,
            "unit": "iter/sec",
            "range": "stddev: 0.00008185973206993132",
            "extra": "mean: 894.8009909166575 usec\nrounds: 1211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1957.5539368582738,
            "unit": "iter/sec",
            "range": "stddev: 0.00006700011980718483",
            "extra": "mean: 510.8416075650637 usec\nrounds: 2115"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 37.4034523386512,
            "unit": "iter/sec",
            "range": "stddev: 0.0015037617275799882",
            "extra": "mean: 26.735499999999757 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 36.932872657301616,
            "unit": "iter/sec",
            "range": "stddev: 0.0023797287450458685",
            "extra": "mean: 27.076150000000077 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 883.5138813623721,
            "unit": "iter/sec",
            "range": "stddev: 0.0002995828237459537",
            "extra": "mean: 1.1318441295545998 msec\nrounds: 988"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1395.0106109847254,
            "unit": "iter/sec",
            "range": "stddev: 0.00010326307452399973",
            "extra": "mean: 716.8404255320388 usec\nrounds: 1598"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1484.6861079173607,
            "unit": "iter/sec",
            "range": "stddev: 0.0002734639715917232",
            "extra": "mean: 673.543043655704 usec\nrounds: 2451"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1626.4749219753626,
            "unit": "iter/sec",
            "range": "stddev: 0.0002124677501228376",
            "extra": "mean: 614.8265715560462 usec\nrounds: 2243"
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
          "id": "8df53ae6cc7b2202dc2b3fec51df809f89b35d03",
          "message": "Merge pull request #1423 from TeoZosa/build/add-python-312-support\n\n➕ Add Python 3.12 support",
          "timestamp": "2024-09-13T09:20:08+09:00",
          "tree_id": "c8ab121c4cd1e65d843d42fe7c718f783372f757",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/8df53ae6cc7b2202dc2b3fec51df809f89b35d03"
        },
        "date": 1726189572431,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 773.959857412033,
            "unit": "iter/sec",
            "range": "stddev: 0.00004460184584453319",
            "extra": "mean: 1.2920566750629678 msec\nrounds: 794"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1039.017854701546,
            "unit": "iter/sec",
            "range": "stddev: 0.00004704585394191857",
            "extra": "mean: 962.4473684210617 usec\nrounds: 1064"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1322.6376496363698,
            "unit": "iter/sec",
            "range": "stddev: 0.00000857810973189694",
            "extra": "mean: 756.0649738610783 usec\nrounds: 1339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2383.8192782244046,
            "unit": "iter/sec",
            "range": "stddev: 0.000007202790480761795",
            "extra": "mean: 419.4948875255566 usec\nrounds: 2445"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 699.6873425091359,
            "unit": "iter/sec",
            "range": "stddev: 0.000023377565062883562",
            "extra": "mean: 1.4292097902098935 msec\nrounds: 715"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 928.8791787250625,
            "unit": "iter/sec",
            "range": "stddev: 0.00003569024570779593",
            "extra": "mean: 1.0765662778366447 msec\nrounds: 943"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1237.9630202760632,
            "unit": "iter/sec",
            "range": "stddev: 0.000026953011526755063",
            "extra": "mean: 807.7785714285732 usec\nrounds: 1260"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2138.9974778410838,
            "unit": "iter/sec",
            "range": "stddev: 0.00002462150835558753",
            "extra": "mean: 467.50873264671264 usec\nrounds: 2233"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.879767891192767,
            "unit": "iter/sec",
            "range": "stddev: 0.011299581455609104",
            "extra": "mean: 34.62631707317018 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 41.22608384379892,
            "unit": "iter/sec",
            "range": "stddev: 0.0007012985855520166",
            "extra": "mean: 24.25648780487833 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 928.8784515558901,
            "unit": "iter/sec",
            "range": "stddev: 0.0002771166156416947",
            "extra": "mean: 1.0765671206227034 msec\nrounds: 1028"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1568.358061659988,
            "unit": "iter/sec",
            "range": "stddev: 0.0000671558984738352",
            "extra": "mean: 637.6095003086068 usec\nrounds: 1621"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1875.4009170605607,
            "unit": "iter/sec",
            "range": "stddev: 0.00020175966930311676",
            "extra": "mean: 533.2193190815784 usec\nrounds: 2526"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1646.4025215917584,
            "unit": "iter/sec",
            "range": "stddev: 0.0001637554515522409",
            "extra": "mean: 607.3848812094809 usec\nrounds: 2315"
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
          "distinct": false,
          "id": "04eed430db5e2bc0a8d1195d771d6552072b29df",
          "message": ":bookmark: Bump version number to `1.5.0`",
          "timestamp": "2024-09-13T09:21:02+09:00",
          "tree_id": "879de066c95b776dd70335a5592c09595efdf551",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/04eed430db5e2bc0a8d1195d771d6552072b29df"
        },
        "date": 1726190769149,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 670.2950344125383,
            "unit": "iter/sec",
            "range": "stddev: 0.0004024904194536253",
            "extra": "mean: 1.4918803641092502 msec\nrounds: 769"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 927.1652900656134,
            "unit": "iter/sec",
            "range": "stddev: 0.00015021748364224644",
            "extra": "mean: 1.0785563380281764 msec\nrounds: 994"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1197.3118540536143,
            "unit": "iter/sec",
            "range": "stddev: 0.00012059863442819904",
            "extra": "mean: 835.2042925278021 usec\nrounds: 1258"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2229.0089732632196,
            "unit": "iter/sec",
            "range": "stddev: 0.00008941322904800397",
            "extra": "mean: 448.62986735132887 usec\nrounds: 2337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 622.6597826097291,
            "unit": "iter/sec",
            "range": "stddev: 0.0003852051165641685",
            "extra": "mean: 1.60601347305384 msec\nrounds: 668"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 819.4752402069449,
            "unit": "iter/sec",
            "range": "stddev: 0.0003783091552111243",
            "extra": "mean: 1.2202931228861367 msec\nrounds: 887"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1136.6052690045813,
            "unit": "iter/sec",
            "range": "stddev: 0.0001867023639274458",
            "extra": "mean: 879.8129194630448 usec\nrounds: 1192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1961.3414361653984,
            "unit": "iter/sec",
            "range": "stddev: 0.00016431014785672402",
            "extra": "mean: 509.85513361462006 usec\nrounds: 2133"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 35.95798215159359,
            "unit": "iter/sec",
            "range": "stddev: 0.002217270216428187",
            "extra": "mean: 27.81023684210494 msec\nrounds: 38"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 36.39887709464125,
            "unit": "iter/sec",
            "range": "stddev: 0.00236425543857844",
            "extra": "mean: 27.47337500000029 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 840.1487511016861,
            "unit": "iter/sec",
            "range": "stddev: 0.0004253863891922104",
            "extra": "mean: 1.1902654127482795 msec\nrounds: 957"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1271.6377234485353,
            "unit": "iter/sec",
            "range": "stddev: 0.00044713338568251685",
            "extra": "mean: 786.3874919407982 usec\nrounds: 1551"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1532.8221832036102,
            "unit": "iter/sec",
            "range": "stddev: 0.0003751519747914411",
            "extra": "mean: 652.3913934426447 usec\nrounds: 2440"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1368.75873781274,
            "unit": "iter/sec",
            "range": "stddev: 0.0005257102934791295",
            "extra": "mean: 730.5889433794504 usec\nrounds: 2243"
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
          "id": "afc48d45e9da35914f4ce228ffe02d811de3781a",
          "message": "Merge pull request #1429 from TeoZosa/bug/add-type-annotations-to-config-dataclass\n\n🐛 Add type annotations to `Config` dataclass",
          "timestamp": "2024-09-13T10:21:02+09:00",
          "tree_id": "206ff81d24e25cddde6738c0658528ad93fdf093",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/afc48d45e9da35914f4ce228ffe02d811de3781a"
        },
        "date": 1726191817764,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 707.2747060534681,
            "unit": "iter/sec",
            "range": "stddev: 0.0001386328530341284",
            "extra": "mean: 1.4138777923784576 msec\nrounds: 761"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 950.3927477722649,
            "unit": "iter/sec",
            "range": "stddev: 0.00011423069807951749",
            "extra": "mean: 1.0521965811965794 msec\nrounds: 1053"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1161.8978524223942,
            "unit": "iter/sec",
            "range": "stddev: 0.00008491229251249296",
            "extra": "mean: 860.6608557844737 usec\nrounds: 1262"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2126.063701547434,
            "unit": "iter/sec",
            "range": "stddev: 0.0000530916112236311",
            "extra": "mean: 470.35279294414374 usec\nrounds: 2381"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 659.6951904037976,
            "unit": "iter/sec",
            "range": "stddev: 0.0000643656101125044",
            "extra": "mean: 1.515851585014441 msec\nrounds: 694"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 857.8184698098675,
            "unit": "iter/sec",
            "range": "stddev: 0.00023412961405000108",
            "extra": "mean: 1.165747807017546 msec\nrounds: 912"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1120.0178631237968,
            "unit": "iter/sec",
            "range": "stddev: 0.0001671579819907516",
            "extra": "mean: 892.8429027113373 usec\nrounds: 1254"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1982.1467401911084,
            "unit": "iter/sec",
            "range": "stddev: 0.00004936004730540094",
            "extra": "mean: 504.50351617438025 usec\nrounds: 2133"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 37.67370801488363,
            "unit": "iter/sec",
            "range": "stddev: 0.0008950686492742065",
            "extra": "mean: 26.543710526315415 msec\nrounds: 38"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 40.26722094815978,
            "unit": "iter/sec",
            "range": "stddev: 0.0019195110125488923",
            "extra": "mean: 24.834095238094648 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 964.774334027985,
            "unit": "iter/sec",
            "range": "stddev: 0.0000693375407828039",
            "extra": "mean: 1.036511819116234 msec\nrounds: 973"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1451.6691539777305,
            "unit": "iter/sec",
            "range": "stddev: 0.00012143197076621691",
            "extra": "mean: 688.8621951220027 usec\nrounds: 1640"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1737.5119689290077,
            "unit": "iter/sec",
            "range": "stddev: 0.00025453808278574225",
            "extra": "mean: 575.5356037152333 usec\nrounds: 2584"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1479.888509628947,
            "unit": "iter/sec",
            "range": "stddev: 0.00016548578685299768",
            "extra": "mean: 675.7265790588037 usec\nrounds: 2359"
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
          "id": "2aaffef80511db148c0daf7d5fa9153530fd85c4",
          "message": ":bookmark: Bump version number to `1.5.1`",
          "timestamp": "2024-09-13T10:21:38+09:00",
          "tree_id": "d4bd6636c937dcc99026d279adf8531035504bf1",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/2aaffef80511db148c0daf7d5fa9153530fd85c4"
        },
        "date": 1726192332770,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 778.7384030154694,
            "unit": "iter/sec",
            "range": "stddev: 0.00006540735776624631",
            "extra": "mean: 1.2841282722513112 msec\nrounds: 764"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1053.1935546495893,
            "unit": "iter/sec",
            "range": "stddev: 0.00002991576732813127",
            "extra": "mean: 949.4930875575977 usec\nrounds: 1085"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1244.523775341984,
            "unit": "iter/sec",
            "range": "stddev: 0.00006963358772861007",
            "extra": "mean: 803.5202057310709 usec\nrounds: 1361"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2242.4217801950044,
            "unit": "iter/sec",
            "range": "stddev: 0.0000947082798927051",
            "extra": "mean: 445.9464356045625 usec\nrounds: 2539"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 620.2463068896665,
            "unit": "iter/sec",
            "range": "stddev: 0.00020134225490077914",
            "extra": "mean: 1.6122627235213618 msec\nrounds: 727"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 783.2827429017788,
            "unit": "iter/sec",
            "range": "stddev: 0.00021376384722002667",
            "extra": "mean: 1.2766781970650374 msec\nrounds: 954"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1042.0262093311264,
            "unit": "iter/sec",
            "range": "stddev: 0.00016619985370642967",
            "extra": "mean: 959.6687598116147 usec\nrounds: 1274"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2083.837237427364,
            "unit": "iter/sec",
            "range": "stddev: 0.00009763886794364803",
            "extra": "mean: 479.88392857139195 usec\nrounds: 2128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 37.68611050132847,
            "unit": "iter/sec",
            "range": "stddev: 0.0014376366911599918",
            "extra": "mean: 26.534975000000305 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 38.21092796148364,
            "unit": "iter/sec",
            "range": "stddev: 0.0020007416093095537",
            "extra": "mean: 26.170523809523633 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 936.2736309487238,
            "unit": "iter/sec",
            "range": "stddev: 0.0001802223156180137",
            "extra": "mean: 1.068063829787348 msec\nrounds: 1034"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1530.934036469839,
            "unit": "iter/sec",
            "range": "stddev: 0.00008002185118359672",
            "extra": "mean: 653.1960072596512 usec\nrounds: 1653"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1922.801899204686,
            "unit": "iter/sec",
            "range": "stddev: 0.00017866899088898473",
            "extra": "mean: 520.0743770919004 usec\nrounds: 2689"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1521.831736553108,
            "unit": "iter/sec",
            "range": "stddev: 0.00033544939240777075",
            "extra": "mean: 657.1028688526121 usec\nrounds: 2440"
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
          "id": "3f370f2fa7d6fb8cef872adb86a1fcd867f6fe04",
          "message": "Merge pull request #1430 from TeoZosa/fix/build/fix-uninitialized-config-fields-breaking-library\n\n:ambulance: Initialize Config object with explicit defaults",
          "timestamp": "2024-09-13T15:19:38+09:00",
          "tree_id": "591a604e5a5dcf2050129fc37f419e283fe1e097",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/3f370f2fa7d6fb8cef872adb86a1fcd867f6fe04"
        },
        "date": 1726208967805,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 542.8713772784312,
            "unit": "iter/sec",
            "range": "stddev: 0.00049428514324716",
            "extra": "mean: 1.8420569620253047 msec\nrounds: 790"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 833.8095081905035,
            "unit": "iter/sec",
            "range": "stddev: 0.00031786804107207577",
            "extra": "mean: 1.1993146997929487 msec\nrounds: 966"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1203.409218643539,
            "unit": "iter/sec",
            "range": "stddev: 0.00007214356834004675",
            "extra": "mean: 830.9725274725599 usec\nrounds: 1274"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2219.2874909345965,
            "unit": "iter/sec",
            "range": "stddev: 0.00003708796276914712",
            "extra": "mean: 450.5950689511053 usec\nrounds: 2393"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 608.0602785539089,
            "unit": "iter/sec",
            "range": "stddev: 0.00015088147428395234",
            "extra": "mean: 1.6445737951806414 msec\nrounds: 664"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 823.605076738705,
            "unit": "iter/sec",
            "range": "stddev: 0.00012882741049018446",
            "extra": "mean: 1.2141741573033766 msec\nrounds: 890"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1109.9337647738137,
            "unit": "iter/sec",
            "range": "stddev: 0.00007686593580091689",
            "extra": "mean: 900.9546621043497 usec\nrounds: 1169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1969.3213375264252,
            "unit": "iter/sec",
            "range": "stddev: 0.00007046550051211158",
            "extra": "mean: 507.7891459075208 usec\nrounds: 2248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 35.08879263963101,
            "unit": "iter/sec",
            "range": "stddev: 0.003360170564119675",
            "extra": "mean: 28.499128205128116 msec\nrounds: 39"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 36.88634946865188,
            "unit": "iter/sec",
            "range": "stddev: 0.0016428194994245761",
            "extra": "mean: 27.110300000000187 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 869.1158087873192,
            "unit": "iter/sec",
            "range": "stddev: 0.00035778797795627345",
            "extra": "mean: 1.1505946502058269 msec\nrounds: 972"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1420.3452517928743,
            "unit": "iter/sec",
            "range": "stddev: 0.00010459244234183894",
            "extra": "mean: 704.0541718555537 usec\nrounds: 1606"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1326.5564114724439,
            "unit": "iter/sec",
            "range": "stddev: 0.0004407022602982385",
            "extra": "mean: 753.8314928424533 usec\nrounds: 2445"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1599.8831620594578,
            "unit": "iter/sec",
            "range": "stddev: 0.00025594532529230453",
            "extra": "mean: 625.0456431535567 usec\nrounds: 2410"
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
          "id": "0808bcf76fc20412b2ea8081f15ae4806b8c5943",
          "message": ":bookmark: Bump version number to `1.5.2`",
          "timestamp": "2024-09-13T15:19:51+09:00",
          "tree_id": "6b9d03853322b010c6b01de4d517a22a76f2d9b5",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/0808bcf76fc20412b2ea8081f15ae4806b8c5943"
        },
        "date": 1726209689787,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 777.1655343134643,
            "unit": "iter/sec",
            "range": "stddev: 0.0000730189878200697",
            "extra": "mean: 1.2867271589486842 msec\nrounds: 799"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1008.9322118361215,
            "unit": "iter/sec",
            "range": "stddev: 0.00008937323342064998",
            "extra": "mean: 991.1468662301246 usec\nrounds: 1069"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1261.9716383981383,
            "unit": "iter/sec",
            "range": "stddev: 0.000054283376856910954",
            "extra": "mean: 792.4108352144368 usec\nrounds: 1329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2251.6274002199943,
            "unit": "iter/sec",
            "range": "stddev: 0.00008377809559582714",
            "extra": "mean: 444.12321501430273 usec\nrounds: 2451"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 646.5362865001867,
            "unit": "iter/sec",
            "range": "stddev: 0.00027767385171547347",
            "extra": "mean: 1.546703597122404 msec\nrounds: 695"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 907.0737799858578,
            "unit": "iter/sec",
            "range": "stddev: 0.00009457472910680414",
            "extra": "mean: 1.1024461538460422 msec\nrounds: 910"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1204.4260270547127,
            "unit": "iter/sec",
            "range": "stddev: 0.000033139138085708696",
            "extra": "mean: 830.2709984152259 usec\nrounds: 1262"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1980.481712981539,
            "unit": "iter/sec",
            "range": "stddev: 0.0001067378061504081",
            "extra": "mean: 504.9276615104607 usec\nrounds: 2198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 37.22831473934131,
            "unit": "iter/sec",
            "range": "stddev: 0.0017479876926676315",
            "extra": "mean: 26.861274999999996 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 36.47731293521846,
            "unit": "iter/sec",
            "range": "stddev: 0.0041531992932238426",
            "extra": "mean: 27.414300000001113 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 889.6626601349036,
            "unit": "iter/sec",
            "range": "stddev: 0.0001896837035130494",
            "extra": "mean: 1.124021547502472 msec\nrounds: 1021"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1472.0034674268957,
            "unit": "iter/sec",
            "range": "stddev: 0.00006842342122542633",
            "extra": "mean: 679.3462258265115 usec\nrounds: 1603"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2026.3890033142884,
            "unit": "iter/sec",
            "range": "stddev: 0.00007947156124199216",
            "extra": "mean: 493.4886630180268 usec\nrounds: 2558"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1392.2198582350115,
            "unit": "iter/sec",
            "range": "stddev: 0.00021160475591297455",
            "extra": "mean: 718.2773569023439 usec\nrounds: 2376"
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
          "id": "69c231eb414a95d9d8e849f0049aa8978d24da43",
          "message": "Merge pull request #1431 from TeoZosa/dependabot/pip/sphinx-7.4.7",
          "timestamp": "2024-09-13T13:50:38Z",
          "tree_id": "f074fa9c18bfaa363b25472a72722116b685a021",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/69c231eb414a95d9d8e849f0049aa8978d24da43"
        },
        "date": 1726236218590,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 766.9067194164583,
            "unit": "iter/sec",
            "range": "stddev: 0.00004056425939511309",
            "extra": "mean: 1.3039395465994914 msec\nrounds: 794"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1039.4168334776205,
            "unit": "iter/sec",
            "range": "stddev: 0.000022871916396291863",
            "extra": "mean: 962.0779342722959 usec\nrounds: 1065"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1312.3281886121658,
            "unit": "iter/sec",
            "range": "stddev: 0.000013965721038745374",
            "extra": "mean: 762.0045112781856 usec\nrounds: 1330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2308.073180285461,
            "unit": "iter/sec",
            "range": "stddev: 0.000035466492046741766",
            "extra": "mean: 433.26182572613254 usec\nrounds: 2410"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 682.6431791776503,
            "unit": "iter/sec",
            "range": "stddev: 0.0001832295507775557",
            "extra": "mean: 1.4648941504178732 msec\nrounds: 718"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 905.3756923035555,
            "unit": "iter/sec",
            "range": "stddev: 0.000032298638499419496",
            "extra": "mean: 1.1045138592750274 msec\nrounds: 938"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1220.3447522274741,
            "unit": "iter/sec",
            "range": "stddev: 0.00005232680387223434",
            "extra": "mean: 819.440570522975 usec\nrounds: 1262"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2090.253907155974,
            "unit": "iter/sec",
            "range": "stddev: 0.00006884642860066818",
            "extra": "mean: 478.41077898551214 usec\nrounds: 2208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 38.29148976309754,
            "unit": "iter/sec",
            "range": "stddev: 0.0043468357807584295",
            "extra": "mean: 26.11546341463384 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 39.03143494191566,
            "unit": "iter/sec",
            "range": "stddev: 0.0025907211419326326",
            "extra": "mean: 25.62037500000045 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 975.7038793428695,
            "unit": "iter/sec",
            "range": "stddev: 0.00006607243558136429",
            "extra": "mean: 1.0249011213048511 msec\nrounds: 981"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1443.2216152953804,
            "unit": "iter/sec",
            "range": "stddev: 0.00014345594439475583",
            "extra": "mean: 692.8942786069157 usec\nrounds: 1608"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1605.8031131948155,
            "unit": "iter/sec",
            "range": "stddev: 0.00021455653094824796",
            "extra": "mean: 622.7413509060001 usec\nrounds: 2428"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1617.7135749422664,
            "unit": "iter/sec",
            "range": "stddev: 0.00020967769556583412",
            "extra": "mean: 618.1564001746652 usec\nrounds: 2289"
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
          "id": "7b653c20b9629cdeafa80e022e3d81dde31063f2",
          "message": "Merge pull request #1432 from TeoZosa/dependabot/pip/importlib-metadata-8.5.0\n\n⬆️ Bump importlib-metadata from 7.1.0 to 8.5.0",
          "timestamp": "2024-09-14T10:09:47+09:00",
          "tree_id": "68bee4bcad674e5acb79540baf6ed675b86e15b0",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/7b653c20b9629cdeafa80e022e3d81dde31063f2"
        },
        "date": 1726276322146,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 703.2248008126924,
            "unit": "iter/sec",
            "range": "stddev: 0.0001980923552707047",
            "extra": "mean: 1.4220203821656103 msec\nrounds: 785"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 868.6970947367153,
            "unit": "iter/sec",
            "range": "stddev: 0.00041051176383717056",
            "extra": "mean: 1.15114923954371 msec\nrounds: 1052"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1180.4022703219505,
            "unit": "iter/sec",
            "range": "stddev: 0.00009556452680578526",
            "extra": "mean: 847.1688212928068 usec\nrounds: 1315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2078.269148928505,
            "unit": "iter/sec",
            "range": "stddev: 0.00010688579111006886",
            "extra": "mean: 481.1696312364406 usec\nrounds: 2305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 566.433484882069,
            "unit": "iter/sec",
            "range": "stddev: 0.0006310353519783832",
            "extra": "mean: 1.7654323529411384 msec\nrounds: 680"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 819.0572624402262,
            "unit": "iter/sec",
            "range": "stddev: 0.00017072752924093473",
            "extra": "mean: 1.2209158576052292 msec\nrounds: 927"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1121.462140235259,
            "unit": "iter/sec",
            "range": "stddev: 0.00011303524378759168",
            "extra": "mean: 891.6930533118319 usec\nrounds: 1238"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1907.0605282514382,
            "unit": "iter/sec",
            "range": "stddev: 0.00010575818394417603",
            "extra": "mean: 524.3672055427043 usec\nrounds: 2165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 34.6430218925664,
            "unit": "iter/sec",
            "range": "stddev: 0.0016279682666125864",
            "extra": "mean: 28.86584210526325 msec\nrounds: 38"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 37.703162038522926,
            "unit": "iter/sec",
            "range": "stddev: 0.0006912584438311358",
            "extra": "mean: 26.522974358974384 msec\nrounds: 39"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 949.223133143859,
            "unit": "iter/sec",
            "range": "stddev: 0.0002848412094675147",
            "extra": "mean: 1.0534930777423916 msec\nrounds: 939"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1572.6160766788548,
            "unit": "iter/sec",
            "range": "stddev: 0.00005500132311386742",
            "extra": "mean: 635.8831089351828 usec\nrounds: 1634"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1891.3426605976547,
            "unit": "iter/sec",
            "range": "stddev: 0.00015501044703098688",
            "extra": "mean: 528.7249216300155 usec\nrounds: 2552"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1764.9644363816114,
            "unit": "iter/sec",
            "range": "stddev: 0.00016030298246819477",
            "extra": "mean: 566.5836542577139 usec\nrounds: 2337"
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
          "id": "b6d04bd936f2df896924210b64d22000c6dd1bfd",
          "message": "Merge pull request #1433 from TeoZosa/dependabot/github_actions/pypa/cibuildwheel-2.21.0",
          "timestamp": "2024-09-16T13:54:30Z",
          "tree_id": "ea0be395d70e1119ee250fd0d5c3e16fbc5cec35",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/b6d04bd936f2df896924210b64d22000c6dd1bfd"
        },
        "date": 1726495235955,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 386.8995075482937,
            "unit": "iter/sec",
            "range": "stddev: 0.001530853964623434",
            "extra": "mean: 2.5846504854369132 msec\nrounds: 721"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 635.9018014235093,
            "unit": "iter/sec",
            "range": "stddev: 0.000976425185435106",
            "extra": "mean: 1.5725698492462707 msec\nrounds: 995"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 769.8238851508673,
            "unit": "iter/sec",
            "range": "stddev: 0.000814273042974063",
            "extra": "mean: 1.2989984063744964 msec\nrounds: 1255"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1867.6038642423944,
            "unit": "iter/sec",
            "range": "stddev: 0.0002899670077462556",
            "extra": "mean: 535.4454545453923 usec\nrounds: 2310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 396.034415092887,
            "unit": "iter/sec",
            "range": "stddev: 0.0015474736958234153",
            "extra": "mean: 2.5250330827068583 msec\nrounds: 665"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 636.6118845387103,
            "unit": "iter/sec",
            "range": "stddev: 0.0010365726840759666",
            "extra": "mean: 1.5708157894736776 msec\nrounds: 874"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 756.1868390501654,
            "unit": "iter/sec",
            "range": "stddev: 0.0008598500626937581",
            "extra": "mean: 1.322424496644354 msec\nrounds: 1192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1215.9052231739936,
            "unit": "iter/sec",
            "range": "stddev: 0.0005793893306905762",
            "extra": "mean: 822.4325226513992 usec\nrounds: 2097"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.00521515263982,
            "unit": "iter/sec",
            "range": "stddev: 0.014374642916018558",
            "extra": "mean: 49.98696551724131 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.88693074032576,
            "unit": "iter/sec",
            "range": "stddev: 0.00906333356027384",
            "extra": "mean: 38.629531250000014 msec\nrounds: 32"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 742.5690165724448,
            "unit": "iter/sec",
            "range": "stddev: 0.0007945706557858775",
            "extra": "mean: 1.3466761710794333 msec\nrounds: 982"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1231.085344332495,
            "unit": "iter/sec",
            "range": "stddev: 0.0005097607372138175",
            "extra": "mean: 812.2913692406992 usec\nrounds: 1541"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1103.643656406649,
            "unit": "iter/sec",
            "range": "stddev: 0.000729449227917555",
            "extra": "mean: 906.0895645030009 usec\nrounds: 2434"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1028.286254774979,
            "unit": "iter/sec",
            "range": "stddev: 0.0007719395992148286",
            "extra": "mean: 972.4918478258091 usec\nrounds: 2208"
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
          "id": "cb2fa4e3d81bb95bb14154590197583edba24ef7",
          "message": "Merge pull request #1434 from TeoZosa/dependabot/github_actions/pypa/cibuildwheel-2.21.1",
          "timestamp": "2024-09-17T13:27:42Z",
          "tree_id": "37a9e0af68d10af7bfea3690d03a3c8c8c2a098e",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/cb2fa4e3d81bb95bb14154590197583edba24ef7"
        },
        "date": 1726579810447,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 767.4449837877264,
            "unit": "iter/sec",
            "range": "stddev: 0.00006512996057659256",
            "extra": "mean: 1.3030249999999972 msec\nrounds: 800"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1022.31381779649,
            "unit": "iter/sec",
            "range": "stddev: 0.00005870055660675031",
            "extra": "mean: 978.1732209737852 usec\nrounds: 1068"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1281.9575396671287,
            "unit": "iter/sec",
            "range": "stddev: 0.00005353281008393354",
            "extra": "mean: 780.0570370370133 usec\nrounds: 1350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2321.839852775957,
            "unit": "iter/sec",
            "range": "stddev: 0.00004162703895468588",
            "extra": "mean: 430.6929260450134 usec\nrounds: 2488"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 665.4538977046702,
            "unit": "iter/sec",
            "range": "stddev: 0.0002076694852370259",
            "extra": "mean: 1.5027337031900625 msec\nrounds: 721"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 852.3895772147542,
            "unit": "iter/sec",
            "range": "stddev: 0.0002042555957490363",
            "extra": "mean: 1.173172486772508 msec\nrounds: 945"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1111.8912832976691,
            "unit": "iter/sec",
            "range": "stddev: 0.00043698108394160407",
            "extra": "mean: 899.3685039369859 usec\nrounds: 1270"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1858.476363536974,
            "unit": "iter/sec",
            "range": "stddev: 0.00022727225800558374",
            "extra": "mean: 538.075177935996 usec\nrounds: 2248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 38.671365080323106,
            "unit": "iter/sec",
            "range": "stddev: 0.002394749656960116",
            "extra": "mean: 25.85892682926839 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 40.46312941842924,
            "unit": "iter/sec",
            "range": "stddev: 0.002031915707530068",
            "extra": "mean: 24.71385714285713 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 925.7025771025319,
            "unit": "iter/sec",
            "range": "stddev: 0.0002817692527982553",
            "extra": "mean: 1.08026057692312 msec\nrounds: 1040"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1408.039374605211,
            "unit": "iter/sec",
            "range": "stddev: 0.00021490015628161882",
            "extra": "mean: 710.2074118349013 usec\nrounds: 1673"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1880.0032200127548,
            "unit": "iter/sec",
            "range": "stddev: 0.00017711218081244002",
            "extra": "mean: 531.9139825692508 usec\nrounds: 2639"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1527.2380516267717,
            "unit": "iter/sec",
            "range": "stddev: 0.0002544735786463259",
            "extra": "mean: 654.7767710049051 usec\nrounds: 2428"
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
          "id": "c3f33ca66dd0b613093a70aac9e22f62932af434",
          "message": "Merge pull request #1435 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.19.0",
          "timestamp": "2024-09-18T14:13:08Z",
          "tree_id": "e758d297dcb26d3c2291750ad403db909bc7af67",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/c3f33ca66dd0b613093a70aac9e22f62932af434"
        },
        "date": 1726669222235,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 510.1637604502396,
            "unit": "iter/sec",
            "range": "stddev: 0.001308630597105815",
            "extra": "mean: 1.9601549100968299 msec\nrounds: 723"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 805.4117256727453,
            "unit": "iter/sec",
            "range": "stddev: 0.0007503427138621642",
            "extra": "mean: 1.241600995024897 msec\nrounds: 1005"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 876.7815998205599,
            "unit": "iter/sec",
            "range": "stddev: 0.0007266341179979648",
            "extra": "mean: 1.1405348837209377 msec\nrounds: 1247"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1396.1955785932098,
            "unit": "iter/sec",
            "range": "stddev: 0.0005878398474787715",
            "extra": "mean: 716.2320346319877 usec\nrounds: 2310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 396.3375177947575,
            "unit": "iter/sec",
            "range": "stddev: 0.0018663774431704682",
            "extra": "mean: 2.523102040816251 msec\nrounds: 686"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 632.9045953599124,
            "unit": "iter/sec",
            "range": "stddev: 0.0010360653938231716",
            "extra": "mean: 1.5800169683257432 msec\nrounds: 884"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 932.9412871585632,
            "unit": "iter/sec",
            "range": "stddev: 0.00045054479666297543",
            "extra": "mean: 1.0718788135592925 msec\nrounds: 1180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1728.8780709570003,
            "unit": "iter/sec",
            "range": "stddev: 0.0001906576233776547",
            "extra": "mean: 578.4097888675641 usec\nrounds: 2084"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 30.64646650382563,
            "unit": "iter/sec",
            "range": "stddev: 0.00601842593318303",
            "extra": "mean: 32.630189189189856 msec\nrounds: 37"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 33.14528342616814,
            "unit": "iter/sec",
            "range": "stddev: 0.0029618381488477124",
            "extra": "mean: 30.170205128205414 msec\nrounds: 39"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 752.1326030755114,
            "unit": "iter/sec",
            "range": "stddev: 0.0008013283962312979",
            "extra": "mean: 1.3295527888446073 msec\nrounds: 1004"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1167.3148835647885,
            "unit": "iter/sec",
            "range": "stddev: 0.0004790279617363632",
            "extra": "mean: 856.6668806159344 usec\nrounds: 1558"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1103.5160633221537,
            "unit": "iter/sec",
            "range": "stddev: 0.0012612771238638028",
            "extra": "mean: 906.1943303203791 usec\nrounds: 2434"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1158.2909942875879,
            "unit": "iter/sec",
            "range": "stddev: 0.0006412872190270921",
            "extra": "mean: 863.3409090908581 usec\nrounds: 2332"
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
          "id": "9903a45255865bd07b6240640722dc82d6c0cb94",
          "message": "Merge pull request #1436 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.20.0",
          "timestamp": "2024-09-19T13:55:50Z",
          "tree_id": "d3edacdf8b8bd1b6db00ff772d36dfb5cc8b421e",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/9903a45255865bd07b6240640722dc82d6c0cb94"
        },
        "date": 1726754451693,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 683.6362344961072,
            "unit": "iter/sec",
            "range": "stddev: 0.0002571367548443971",
            "extra": "mean: 1.462766233766233 msec\nrounds: 770"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 825.1371288065018,
            "unit": "iter/sec",
            "range": "stddev: 0.00035582983727930226",
            "extra": "mean: 1.211919770773646 msec\nrounds: 1047"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1139.634898617804,
            "unit": "iter/sec",
            "range": "stddev: 0.00024046576857806733",
            "extra": "mean: 877.4740061162054 usec\nrounds: 1308"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2107.9389249155643,
            "unit": "iter/sec",
            "range": "stddev: 0.00010628429301190662",
            "extra": "mean: 474.3970464135037 usec\nrounds: 2370"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 639.0715680932548,
            "unit": "iter/sec",
            "range": "stddev: 0.0001818786430768574",
            "extra": "mean: 1.5647699724517832 msec\nrounds: 726"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 855.202589936773,
            "unit": "iter/sec",
            "range": "stddev: 0.00016852887725607622",
            "extra": "mean: 1.1693135775862562 msec\nrounds: 928"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1158.9316757098613,
            "unit": "iter/sec",
            "range": "stddev: 0.00010274027513819792",
            "extra": "mean: 862.8636363636247 usec\nrounds: 1276"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1880.4357011346283,
            "unit": "iter/sec",
            "range": "stddev: 0.00016632940267315358",
            "extra": "mean: 531.7916477530256 usec\nrounds: 2203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 30.049558656737936,
            "unit": "iter/sec",
            "range": "stddev: 0.00579006015552495",
            "extra": "mean: 33.2783589743596 msec\nrounds: 39"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 35.06544650900978,
            "unit": "iter/sec",
            "range": "stddev: 0.0013336108442660755",
            "extra": "mean: 28.518102564102758 msec\nrounds: 39"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 869.4082119712649,
            "unit": "iter/sec",
            "range": "stddev: 0.00022209743386224744",
            "extra": "mean: 1.1502076771654088 msec\nrounds: 1016"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1282.4593887862884,
            "unit": "iter/sec",
            "range": "stddev: 0.000303390647572044",
            "extra": "mean: 779.7517868744318 usec\nrounds: 1539"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1795.2741335871904,
            "unit": "iter/sec",
            "range": "stddev: 0.0002502398695472585",
            "extra": "mean: 557.0179959101122 usec\nrounds: 2445"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1532.3631002223444,
            "unit": "iter/sec",
            "range": "stddev: 0.0001873868747855011",
            "extra": "mean: 652.5868443679575 usec\nrounds: 2326"
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
          "id": "81726bf55fa784f306c27ea3357a451bf1de6161",
          "message": "Merge pull request #1438 from TeoZosa/dependabot/pip/docs/emoji-2.13.0",
          "timestamp": "2024-09-20T13:47:46Z",
          "tree_id": "07d6e1f91563c8dc1faba1f106bed6ce06978ac8",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/81726bf55fa784f306c27ea3357a451bf1de6161"
        },
        "date": 1726840326584,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 756.9380489097033,
            "unit": "iter/sec",
            "range": "stddev: 0.00013609402423492723",
            "extra": "mean: 1.3211120797011118 msec\nrounds: 803"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1063.8182817466604,
            "unit": "iter/sec",
            "range": "stddev: 0.000013456232824322272",
            "extra": "mean: 940.0101663586015 usec\nrounds: 1082"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1340.6127198354775,
            "unit": "iter/sec",
            "range": "stddev: 0.000010783977265154058",
            "extra": "mean: 745.9275786393566 usec\nrounds: 1367"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2408.9439178446187,
            "unit": "iter/sec",
            "range": "stddev: 0.00003629046054922984",
            "extra": "mean: 415.1196682464659 usec\nrounds: 2532"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 714.620649012595,
            "unit": "iter/sec",
            "range": "stddev: 0.0000450261728072432",
            "extra": "mean: 1.399343835616448 msec\nrounds: 730"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 918.2974362517573,
            "unit": "iter/sec",
            "range": "stddev: 0.000055037627279591065",
            "extra": "mean: 1.0889717868338287 msec\nrounds: 957"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1231.9749097561958,
            "unit": "iter/sec",
            "range": "stddev: 0.00007629314244555853",
            "extra": "mean: 811.704842428891 usec\nrounds: 1301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2237.4805420501266,
            "unit": "iter/sec",
            "range": "stddev: 0.000009797605971422717",
            "extra": "mean: 446.9312609457306 usec\nrounds: 2284"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 40.339124129388466,
            "unit": "iter/sec",
            "range": "stddev: 0.0005233656419005137",
            "extra": "mean: 24.789829268292536 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 41.89977573643932,
            "unit": "iter/sec",
            "range": "stddev: 0.00011954756948771661",
            "extra": "mean: 23.86647619047569 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1032.519512580946,
            "unit": "iter/sec",
            "range": "stddev: 0.000026990120078521268",
            "extra": "mean: 968.5046992480962 usec\nrounds: 1064"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1619.7928862088468,
            "unit": "iter/sec",
            "range": "stddev: 0.00004424150876067132",
            "extra": "mean: 617.362879238541 usec\nrounds: 1681"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2518.639241691879,
            "unit": "iter/sec",
            "range": "stddev: 0.000021209737261933422",
            "extra": "mean: 397.039791744155 usec\nrounds: 2689"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 2266.1582759623816,
            "unit": "iter/sec",
            "range": "stddev: 0.000024301225367193792",
            "extra": "mean: 441.275444264953 usec\nrounds: 2476"
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
          "id": "57b21a77be2f986cc7bbca8f5bb5c8f41196bcf0",
          "message": "Merge pull request #1437 from TeoZosa/dependabot/pip/emoji-2.13.0",
          "timestamp": "2024-09-20T14:11:39Z",
          "tree_id": "262d542041c9af6dfd1dde8d65712262f5f076ce",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/57b21a77be2f986cc7bbca8f5bb5c8f41196bcf0"
        },
        "date": 1726841633984,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 708.8436041353631,
            "unit": "iter/sec",
            "range": "stddev: 0.00020015523473509444",
            "extra": "mean: 1.4107484276729636 msec\nrounds: 795"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1027.438074990503,
            "unit": "iter/sec",
            "range": "stddev: 0.00007468534606757808",
            "extra": "mean: 973.294667913921 usec\nrounds: 1069"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1297.4484151911963,
            "unit": "iter/sec",
            "range": "stddev: 0.00007182800024730832",
            "extra": "mean: 770.7435519528048 usec\nrounds: 1357"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2403.0584380121004,
            "unit": "iter/sec",
            "range": "stddev: 0.00001358562837499077",
            "extra": "mean: 416.1363636363489 usec\nrounds: 2464"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 686.3593176113491,
            "unit": "iter/sec",
            "range": "stddev: 0.00016194251000277947",
            "extra": "mean: 1.4569628099173704 msec\nrounds: 726"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 919.355385591691,
            "unit": "iter/sec",
            "range": "stddev: 0.00006588157352266317",
            "extra": "mean: 1.087718651211693 msec\nrounds: 949"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1254.3628428988218,
            "unit": "iter/sec",
            "range": "stddev: 0.0000505592418478783",
            "extra": "mean: 797.2174922600612 usec\nrounds: 1292"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2216.8730830454597,
            "unit": "iter/sec",
            "range": "stddev: 0.000031480237217227405",
            "extra": "mean: 451.08581436075553 usec\nrounds: 2284"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 38.44981595667365,
            "unit": "iter/sec",
            "range": "stddev: 0.0030397943959276",
            "extra": "mean: 26.007926829268268 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 42.28640582666441,
            "unit": "iter/sec",
            "range": "stddev: 0.00009255296691107579",
            "extra": "mean: 23.648261904761675 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 931.9014366665048,
            "unit": "iter/sec",
            "range": "stddev: 0.00024840869952416183",
            "extra": "mean: 1.0730748560460321 msec\nrounds: 1042"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1602.4953550514545,
            "unit": "iter/sec",
            "range": "stddev: 0.00006901706912460401",
            "extra": "mean: 624.0267697798669 usec\nrounds: 1681"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2129.327716868816,
            "unit": "iter/sec",
            "range": "stddev: 0.00015583161756258353",
            "extra": "mean: 469.6317960255097 usec\nrounds: 2667"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1406.8949412474058,
            "unit": "iter/sec",
            "range": "stddev: 0.00024648984560734415",
            "extra": "mean: 710.7851273623619 usec\nrounds: 2434"
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
          "id": "69ab5cf43e93538e519bb86771e377eae7697a59",
          "message": "Merge pull request #1439 from TeoZosa/dependabot/github_actions/pypa/gh-action-pypi-publish-1.10.2",
          "timestamp": "2024-09-23T14:18:36Z",
          "tree_id": "30d91a6af30090dcef9dbacd148534b61929640d",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/69ab5cf43e93538e519bb86771e377eae7697a59"
        },
        "date": 1727101402446,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 391.85522456588,
            "unit": "iter/sec",
            "range": "stddev: 0.0016675855067376552",
            "extra": "mean: 2.551962912087897 msec\nrounds: 728"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 595.9140673389119,
            "unit": "iter/sec",
            "range": "stddev: 0.001034303659763567",
            "extra": "mean: 1.6780943005181215 msec\nrounds: 965"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 980.5249679071638,
            "unit": "iter/sec",
            "range": "stddev: 0.0008905566395360867",
            "extra": "mean: 1.019861842105259 msec\nrounds: 1216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1923.1540343050356,
            "unit": "iter/sec",
            "range": "stddev: 0.00022069466496660656",
            "extra": "mean: 519.9791499599598 usec\nrounds: 2494"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 575.2403019970872,
            "unit": "iter/sec",
            "range": "stddev: 0.00047970739804322285",
            "extra": "mean: 1.7384039270688367 msec\nrounds: 713"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 750.9177884080503,
            "unit": "iter/sec",
            "range": "stddev: 0.0006246422255955587",
            "extra": "mean: 1.3317037037037105 msec\nrounds: 945"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1000.3520484821491,
            "unit": "iter/sec",
            "range": "stddev: 0.0005221779817314065",
            "extra": "mean: 999.6480754123679 usec\nrounds: 1273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1812.9945666120377,
            "unit": "iter/sec",
            "range": "stddev: 0.000282394631932621",
            "extra": "mean: 551.5736331569436 usec\nrounds: 2268"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.95469478252233,
            "unit": "iter/sec",
            "range": "stddev: 0.009674615819278979",
            "extra": "mean: 38.52867500000006 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.82887666955442,
            "unit": "iter/sec",
            "range": "stddev: 0.013470263166646066",
            "extra": "mean: 35.933897435897165 msec\nrounds: 39"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 570.5751061436904,
            "unit": "iter/sec",
            "range": "stddev: 0.0011907189721706611",
            "extra": "mean: 1.7526176470590107 msec\nrounds: 952"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1190.4147740791936,
            "unit": "iter/sec",
            "range": "stddev: 0.0005261396544499161",
            "extra": "mean: 840.0433376455003 usec\nrounds: 1546"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1395.8318877048937,
            "unit": "iter/sec",
            "range": "stddev: 0.0004489141003118708",
            "extra": "mean: 716.4186524240085 usec\nrounds: 2434"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1219.1928362614935,
            "unit": "iter/sec",
            "range": "stddev: 0.0005326137605164312",
            "extra": "mean: 820.2147931465693 usec\nrounds: 2393"
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
          "id": "bca729d1a73667ac4410a697b7603704933013af",
          "message": "Merge pull request #1441 from TeoZosa/dependabot/pip/emoji-2.13.2",
          "timestamp": "2024-09-24T13:42:36Z",
          "tree_id": "871ca82efc1e582562284e2834a5c4bebd6c472d",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/bca729d1a73667ac4410a697b7603704933013af"
        },
        "date": 1727185705255,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 423.9884552824477,
            "unit": "iter/sec",
            "range": "stddev: 0.0017741102465140518",
            "extra": "mean: 2.3585547850208126 msec\nrounds: 721"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 677.2414299845324,
            "unit": "iter/sec",
            "range": "stddev: 0.0010188877002683236",
            "extra": "mean: 1.476578300921193 msec\nrounds: 977"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 907.4617872936369,
            "unit": "iter/sec",
            "range": "stddev: 0.0007036844797798884",
            "extra": "mean: 1.1019747762408199 msec\nrounds: 1229"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1663.722971719542,
            "unit": "iter/sec",
            "range": "stddev: 0.00040751900052202775",
            "extra": "mean: 601.0616052060934 usec\nrounds: 2305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 480.1665925356754,
            "unit": "iter/sec",
            "range": "stddev: 0.0012147401118538094",
            "extra": "mean: 2.0826105263158263 msec\nrounds: 665"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 608.335517547511,
            "unit": "iter/sec",
            "range": "stddev: 0.0010592011095256581",
            "extra": "mean: 1.6438297142857516 msec\nrounds: 875"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 747.4470191965692,
            "unit": "iter/sec",
            "range": "stddev: 0.0011274087247836284",
            "extra": "mean: 1.337887468030711 msec\nrounds: 1173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1257.2254422061583,
            "unit": "iter/sec",
            "range": "stddev: 0.0007345532113472279",
            "extra": "mean: 795.4022933589514 usec\nrounds: 2093"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.56998911852179,
            "unit": "iter/sec",
            "range": "stddev: 0.009418170870336987",
            "extra": "mean: 42.42683333333316 msec\nrounds: 36"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.499305646571955,
            "unit": "iter/sec",
            "range": "stddev: 0.007875481983535113",
            "extra": "mean: 37.73683783783835 msec\nrounds: 37"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 648.8436510074082,
            "unit": "iter/sec",
            "range": "stddev: 0.0014511739446712117",
            "extra": "mean: 1.5412033368090743 msec\nrounds: 959"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1025.004069869169,
            "unit": "iter/sec",
            "range": "stddev: 0.0007219114576000545",
            "extra": "mean: 975.6058823528765 usec\nrounds: 1530"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1321.2384250879775,
            "unit": "iter/sec",
            "range": "stddev: 0.0005771868666768895",
            "extra": "mean: 756.8656655844784 usec\nrounds: 2464"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 965.4580562111338,
            "unit": "iter/sec",
            "range": "stddev: 0.0008701713065312819",
            "extra": "mean: 1.0357777777777561 msec\nrounds: 2223"
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
          "id": "785847e6198cb5fe9280cfd5d169b17dc85fbb62",
          "message": "Merge pull request #1442 from TeoZosa/dependabot/pip/emoji-2.13.2",
          "timestamp": "2024-09-25T13:29:17Z",
          "tree_id": "3c849449950a918f21f5448045c44d629640c682",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/785847e6198cb5fe9280cfd5d169b17dc85fbb62"
        },
        "date": 1727271377099,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 786.9473776019371,
            "unit": "iter/sec",
            "range": "stddev: 0.000024011855926843553",
            "extra": "mean: 1.2707329974810992 msec\nrounds: 794"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1057.5915612842946,
            "unit": "iter/sec",
            "range": "stddev: 0.000016078668773314265",
            "extra": "mean: 945.5446096654194 usec\nrounds: 1076"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1311.6532740473872,
            "unit": "iter/sec",
            "range": "stddev: 0.00002121449295382121",
            "extra": "mean: 762.3966026587848 usec\nrounds: 1354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2412.7431913266328,
            "unit": "iter/sec",
            "range": "stddev: 0.000015231501582876816",
            "extra": "mean: 414.4659919028332 usec\nrounds: 2470"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 711.2035067803719,
            "unit": "iter/sec",
            "range": "stddev: 0.00003961113771383426",
            "extra": "mean: 1.4060673076923 msec\nrounds: 728"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 848.6013231762046,
            "unit": "iter/sec",
            "range": "stddev: 0.0002578369259224623",
            "extra": "mean: 1.1784096638656298 msec\nrounds: 952"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1216.7541634174036,
            "unit": "iter/sec",
            "range": "stddev: 0.0001004649325692749",
            "extra": "mean: 821.8587041373888 usec\nrounds: 1281"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2133.2338518553124,
            "unit": "iter/sec",
            "range": "stddev: 0.00008114552508627101",
            "extra": "mean: 468.7718597425602 usec\nrounds: 2253"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 40.402447797080974,
            "unit": "iter/sec",
            "range": "stddev: 0.0008018111837523868",
            "extra": "mean: 24.750975609756217 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 41.697029384491636,
            "unit": "iter/sec",
            "range": "stddev: 0.0004633947502293952",
            "extra": "mean: 23.982523809524178 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1011.9269652712303,
            "unit": "iter/sec",
            "range": "stddev: 0.00009384364562426008",
            "extra": "mean: 988.2136105859838 usec\nrounds: 1058"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1658.3992465932643,
            "unit": "iter/sec",
            "range": "stddev: 0.000017600699372626486",
            "extra": "mean: 602.9911084765815 usec\nrounds: 1687"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1990.6111282615077,
            "unit": "iter/sec",
            "range": "stddev: 0.00025605751849911747",
            "extra": "mean: 502.3582887700151 usec\nrounds: 2618"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1421.3705618231095,
            "unit": "iter/sec",
            "range": "stddev: 0.0001544691665881506",
            "extra": "mean: 703.5463002113665 usec\nrounds: 2365"
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
          "id": "a9be2e427cc8831fa7face2781bc2e84e1bac4a5",
          "message": "Merge pull request #1443 from TeoZosa/dependabot/pip/docs/sphinx-autoapi-3.3.2",
          "timestamp": "2024-09-26T14:35:05Z",
          "tree_id": "86ca9c0e8b0a5fe4fa36dd9d0e1c10d1ac61a243",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/a9be2e427cc8831fa7face2781bc2e84e1bac4a5"
        },
        "date": 1727361564728,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 666.5859731636463,
            "unit": "iter/sec",
            "range": "stddev: 0.00018632443628374917",
            "extra": "mean: 1.500181582360571 msec\nrounds: 771"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 884.2768020516543,
            "unit": "iter/sec",
            "range": "stddev: 0.00014938451637004337",
            "extra": "mean: 1.1308676171079584 msec\nrounds: 982"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 833.9754521428955,
            "unit": "iter/sec",
            "range": "stddev: 0.0007466136283751051",
            "extra": "mean: 1.1990760608486801 msec\nrounds: 1249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1834.0875874977796,
            "unit": "iter/sec",
            "range": "stddev: 0.00022674667566434175",
            "extra": "mean: 545.2302315421513 usec\nrounds: 2289"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 564.3365094799395,
            "unit": "iter/sec",
            "range": "stddev: 0.0004639397054002433",
            "extra": "mean: 1.7719923896498264 msec\nrounds: 657"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 703.8880745395397,
            "unit": "iter/sec",
            "range": "stddev: 0.0006233197099562402",
            "extra": "mean: 1.4206804123711954 msec\nrounds: 873"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1125.053780777517,
            "unit": "iter/sec",
            "range": "stddev: 0.0001637845696712184",
            "extra": "mean: 888.8463974663565 usec\nrounds: 1263"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1772.1541137758686,
            "unit": "iter/sec",
            "range": "stddev: 0.0002601674584375767",
            "extra": "mean: 564.285008976637 usec\nrounds: 2228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 32.99124165012273,
            "unit": "iter/sec",
            "range": "stddev: 0.005129314181114493",
            "extra": "mean: 30.311075000000187 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 38.9224989927498,
            "unit": "iter/sec",
            "range": "stddev: 0.0019172637095949366",
            "extra": "mean: 25.69208108108045 msec\nrounds: 37"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 869.6554022347733,
            "unit": "iter/sec",
            "range": "stddev: 0.00039142463647258896",
            "extra": "mean: 1.1498807429129712 msec\nrounds: 1023"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1332.1380686332614,
            "unit": "iter/sec",
            "range": "stddev: 0.0003096642769042927",
            "extra": "mean: 750.6729396495468 usec\nrounds: 1541"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1757.2416486193922,
            "unit": "iter/sec",
            "range": "stddev: 0.00025542306698700856",
            "extra": "mean: 569.0736961451304 usec\nrounds: 2646"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1414.0327353807054,
            "unit": "iter/sec",
            "range": "stddev: 0.00017376509191580384",
            "extra": "mean: 707.1972062448513 usec\nrounds: 2434"
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
          "id": "9972eceb769a55554174bbe68dacbc20f845c49b",
          "message": "Merge pull request #1444 from TeoZosa/dependabot/pip/sphinx-autoapi-3.3.2",
          "timestamp": "2024-09-26T15:00:48Z",
          "tree_id": "5d7801ae9a9480ad5b5029a853b1c639258b37af",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/9972eceb769a55554174bbe68dacbc20f845c49b"
        },
        "date": 1727363181738,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 792.0184849887613,
            "unit": "iter/sec",
            "range": "stddev: 0.00003835360416794189",
            "extra": "mean: 1.2625967940813778 msec\nrounds: 811"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1021.4102951791475,
            "unit": "iter/sec",
            "range": "stddev: 0.000041300602913772524",
            "extra": "mean: 979.0384967919357 usec\nrounds: 1091"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1293.5361986690389,
            "unit": "iter/sec",
            "range": "stddev: 0.00004941719184709771",
            "extra": "mean: 773.0746159473018 usec\nrounds: 1367"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2322.0026280762277,
            "unit": "iter/sec",
            "range": "stddev: 0.00007607043039925779",
            "extra": "mean: 430.66273393002024 usec\nrounds: 2458"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 710.8536954181411,
            "unit": "iter/sec",
            "range": "stddev: 0.00003403502678395648",
            "extra": "mean: 1.4067592339261543 msec\nrounds: 731"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 942.5881671939691,
            "unit": "iter/sec",
            "range": "stddev: 0.000011876133243418424",
            "extra": "mean: 1.0609087136930042 msec\nrounds: 964"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1232.5378472632358,
            "unit": "iter/sec",
            "range": "stddev: 0.00007201685124686626",
            "extra": "mean: 811.3341121495216 usec\nrounds: 1284"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2206.2990850945,
            "unit": "iter/sec",
            "range": "stddev: 0.000049037299162112914",
            "extra": "mean: 453.24770642198234 usec\nrounds: 2289"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 39.428536258866465,
            "unit": "iter/sec",
            "range": "stddev: 0.0017413139666608837",
            "extra": "mean: 25.36234146341473 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 38.89393245167393,
            "unit": "iter/sec",
            "range": "stddev: 0.001435808116553765",
            "extra": "mean: 25.710951219512427 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 930.777930201328,
            "unit": "iter/sec",
            "range": "stddev: 0.0001921688816340933",
            "extra": "mean: 1.0743701236918017 msec\nrounds: 1051"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1591.7317793499403,
            "unit": "iter/sec",
            "range": "stddev: 0.00008020980766657551",
            "extra": "mean: 628.2465506898391 usec\nrounds: 1667"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1982.5558676723324,
            "unit": "iter/sec",
            "range": "stddev: 0.00017035450065232513",
            "extra": "mean: 504.3994049832624 usec\nrounds: 2689"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1515.6272530755148,
            "unit": "iter/sec",
            "range": "stddev: 0.00016036966566129396",
            "extra": "mean: 659.792833607866 usec\nrounds: 2428"
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
          "id": "e037351210a79d5c71b5bac9641cbea75cdd5895",
          "message": "Merge pull request #1446 from TeoZosa/dependabot/pip/rich-13.9.1",
          "timestamp": "2024-10-01T14:05:58Z",
          "tree_id": "692634397a6f2af91a3bc6e9bbba8cea92fd3037",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/e037351210a79d5c71b5bac9641cbea75cdd5895"
        },
        "date": 1727791708163,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 714.0012014532638,
            "unit": "iter/sec",
            "range": "stddev: 0.00024044245152089047",
            "extra": "mean: 1.4005578673601946 msec\nrounds: 769"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 978.8273139071839,
            "unit": "iter/sec",
            "range": "stddev: 0.00011257458079067164",
            "extra": "mean: 1.0216306653809049 msec\nrounds: 1037"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1202.1014651072896,
            "unit": "iter/sec",
            "range": "stddev: 0.00014230901251742595",
            "extra": "mean: 831.8765337423063 usec\nrounds: 1304"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2196.035784673185,
            "unit": "iter/sec",
            "range": "stddev: 0.00005568716483286529",
            "extra": "mean: 455.36598582742147 usec\nrounds: 2399"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 511.87220379710305,
            "unit": "iter/sec",
            "range": "stddev: 0.0009441541502824773",
            "extra": "mean: 1.9536126255380375 msec\nrounds: 697"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 758.4416959318928,
            "unit": "iter/sec",
            "range": "stddev: 0.0004920455822647175",
            "extra": "mean: 1.318492911668452 msec\nrounds: 917"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1131.6023434473434,
            "unit": "iter/sec",
            "range": "stddev: 0.00021187606937822818",
            "extra": "mean: 883.702659145768 usec\nrounds: 1241"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1871.1928723768824,
            "unit": "iter/sec",
            "range": "stddev: 0.0002256818895224066",
            "extra": "mean: 534.4184529357202 usec\nrounds: 2146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 33.72357125874926,
            "unit": "iter/sec",
            "range": "stddev: 0.005277121979561822",
            "extra": "mean: 29.65284999999991 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 35.73422668900062,
            "unit": "iter/sec",
            "range": "stddev: 0.003040947800018579",
            "extra": "mean: 27.98437499999995 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 766.3413719111302,
            "unit": "iter/sec",
            "range": "stddev: 0.0006289757335177802",
            "extra": "mean: 1.3049014925374098 msec\nrounds: 1005"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1331.7667462540935,
            "unit": "iter/sec",
            "range": "stddev: 0.00022375396766569728",
            "extra": "mean: 750.8822418135418 usec\nrounds: 1588"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1605.4549962177819,
            "unit": "iter/sec",
            "range": "stddev: 0.0003462696244663291",
            "extra": "mean: 622.8763823064828 usec\nrounds: 2532"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1147.3223651477485,
            "unit": "iter/sec",
            "range": "stddev: 0.0006114338406746242",
            "extra": "mean: 871.5946192430608 usec\nrounds: 2193"
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
          "id": "b10852fca6a99c461f5845eb24bd7273ea6de786",
          "message": "Merge pull request #1445 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.21.0",
          "timestamp": "2024-10-01T14:29:41Z",
          "tree_id": "332117c8e5efea59690aa26a15701c1c55d2210c",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/b10852fca6a99c461f5845eb24bd7273ea6de786"
        },
        "date": 1727793243795,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 721.2665778761514,
            "unit": "iter/sec",
            "range": "stddev: 0.00009928413247636285",
            "extra": "mean: 1.386449934980503 msec\nrounds: 769"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 946.9266272856812,
            "unit": "iter/sec",
            "range": "stddev: 0.00011436315133442195",
            "extra": "mean: 1.056048030739669 msec\nrounds: 1041"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1218.1511008356142,
            "unit": "iter/sec",
            "range": "stddev: 0.00011735776544444004",
            "extra": "mean: 820.916222391484 usec\nrounds: 1313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2295.2648346143556,
            "unit": "iter/sec",
            "range": "stddev: 0.00003094919682308608",
            "extra": "mean: 435.67957166390227 usec\nrounds: 2428"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 600.5403147002809,
            "unit": "iter/sec",
            "range": "stddev: 0.0003156991909655997",
            "extra": "mean: 1.6651671428571495 msec\nrounds: 700"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 799.8260640261892,
            "unit": "iter/sec",
            "range": "stddev: 0.00016708504203354633",
            "extra": "mean: 1.250271834061232 msec\nrounds: 916"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1093.6585486611534,
            "unit": "iter/sec",
            "range": "stddev: 0.00012521772542911424",
            "extra": "mean: 914.3621665319497 usec\nrounds: 1237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1824.1438103292655,
            "unit": "iter/sec",
            "range": "stddev: 0.000142772995940378",
            "extra": "mean: 548.20239190434 usec\nrounds: 2174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 29.88711322732815,
            "unit": "iter/sec",
            "range": "stddev: 0.006549190651189948",
            "extra": "mean: 33.45923684210561 msec\nrounds: 38"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 33.604722583679774,
            "unit": "iter/sec",
            "range": "stddev: 0.0016243664894541284",
            "extra": "mean: 29.7577222222228 msec\nrounds: 36"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 792.1722011743841,
            "unit": "iter/sec",
            "range": "stddev: 0.000537647157959974",
            "extra": "mean: 1.2623517948717642 msec\nrounds: 975"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1320.4982975324494,
            "unit": "iter/sec",
            "range": "stddev: 0.00025885580727428713",
            "extra": "mean: 757.2898820609242 usec\nrounds: 1611"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1679.0673347841682,
            "unit": "iter/sec",
            "range": "stddev: 0.00029337655645781676",
            "extra": "mean: 595.5687299035823 usec\nrounds: 2488"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1137.8011186257902,
            "unit": "iter/sec",
            "range": "stddev: 0.0004726032407832071",
            "extra": "mean: 878.8882201203817 usec\nrounds: 2326"
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
          "id": "9a0cbde277f26b159d1f3ef8ba943af93e461c38",
          "message": "Merge pull request #1447 from TeoZosa/dependabot/github_actions/codecov/codecov-action-4.6.0",
          "timestamp": "2024-10-02T13:32:11Z",
          "tree_id": "8d8c9c54b3222d7d9e121fc276a83b8abbfe2d17",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/9a0cbde277f26b159d1f3ef8ba943af93e461c38"
        },
        "date": 1727876299527,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 719.2098085115302,
            "unit": "iter/sec",
            "range": "stddev: 0.00022016334142475392",
            "extra": "mean: 1.3904148527528988 msec\nrounds: 781"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 943.2114823870857,
            "unit": "iter/sec",
            "range": "stddev: 0.00022246758258088459",
            "extra": "mean: 1.0602076190476324 msec\nrounds: 1050"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1098.1021135138349,
            "unit": "iter/sec",
            "range": "stddev: 0.00036077474475971273",
            "extra": "mean: 910.6621212121007 usec\nrounds: 1320"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2248.278086199234,
            "unit": "iter/sec",
            "range": "stddev: 0.00009134500432460173",
            "extra": "mean: 444.7848360655968 usec\nrounds: 2440"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 619.2716285624459,
            "unit": "iter/sec",
            "range": "stddev: 0.0005507084395651641",
            "extra": "mean: 1.6148002812939497 msec\nrounds: 711"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 742.600096798987,
            "unit": "iter/sec",
            "range": "stddev: 0.0004974278116418522",
            "extra": "mean: 1.3466198083067151 msec\nrounds: 939"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1110.1562637015936,
            "unit": "iter/sec",
            "range": "stddev: 0.0002816745485424602",
            "extra": "mean: 900.7740916271556 usec\nrounds: 1266"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1932.0710958127431,
            "unit": "iter/sec",
            "range": "stddev: 0.00012158291552642415",
            "extra": "mean: 517.5792972459645 usec\nrounds: 2106"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 34.790123999326056,
            "unit": "iter/sec",
            "range": "stddev: 0.0034371432210561987",
            "extra": "mean: 28.743789473684306 msec\nrounds: 38"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 38.59735335123895,
            "unit": "iter/sec",
            "range": "stddev: 0.0034253737396228914",
            "extra": "mean: 25.90851219512181 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 887.8722017329793,
            "unit": "iter/sec",
            "range": "stddev: 0.0003680859939140691",
            "extra": "mean: 1.1262882181108564 msec\nrounds: 1027"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1370.4045328763673,
            "unit": "iter/sec",
            "range": "stddev: 0.00023069944568286887",
            "extra": "mean: 729.7115384616262 usec\nrounds: 1664"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1227.352235208887,
            "unit": "iter/sec",
            "range": "stddev: 0.0004979704786760831",
            "extra": "mean: 814.7620310723652 usec\nrounds: 2639"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1486.509709572137,
            "unit": "iter/sec",
            "range": "stddev: 0.00033819902395121077",
            "extra": "mean: 672.7167630057597 usec\nrounds: 2422"
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
          "id": "6b06009ddbaf1c241263bf98ef149d82850d698b",
          "message": "Merge pull request #1448 from TeoZosa/dependabot/pip/sentry-sdk-2.15.0",
          "timestamp": "2024-10-02T15:08:44Z",
          "tree_id": "cdbd228324e3873809275b8f1289cb96c566e666",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/6b06009ddbaf1c241263bf98ef149d82850d698b"
        },
        "date": 1727881872063,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 515.7754764878963,
            "unit": "iter/sec",
            "range": "stddev: 0.0009007752052651439",
            "extra": "mean: 1.9388281249999815 msec\nrounds: 768"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 960.9425462921112,
            "unit": "iter/sec",
            "range": "stddev: 0.0001845437264062091",
            "extra": "mean: 1.0406449416342274 msec\nrounds: 1028"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1269.226632246944,
            "unit": "iter/sec",
            "range": "stddev: 0.00001753599072076012",
            "extra": "mean: 787.8813559322142 usec\nrounds: 1298"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2245.453806592298,
            "unit": "iter/sec",
            "range": "stddev: 0.00006251938775388238",
            "extra": "mean: 445.34427609428343 usec\nrounds: 2376"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 658.8323116248233,
            "unit": "iter/sec",
            "range": "stddev: 0.0002910312250199414",
            "extra": "mean: 1.5178369098713194 msec\nrounds: 699"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 890.8120347834249,
            "unit": "iter/sec",
            "range": "stddev: 0.000057676328874274515",
            "extra": "mean: 1.1225712731228659 msec\nrounds: 919"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1058.0692284456902,
            "unit": "iter/sec",
            "range": "stddev: 0.00027883471750288647",
            "extra": "mean: 945.117741935474 usec\nrounds: 1240"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1532.046172364654,
            "unit": "iter/sec",
            "range": "stddev: 0.00032983719048642707",
            "extra": "mean: 652.72184222525 usec\nrounds: 2193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 35.41829000495869,
            "unit": "iter/sec",
            "range": "stddev: 0.003748224696890596",
            "extra": "mean: 28.233999999999895 msec\nrounds: 38"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 36.55708983630683,
            "unit": "iter/sec",
            "range": "stddev: 0.0016302318851497861",
            "extra": "mean: 27.354474999999745 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 685.3545229833052,
            "unit": "iter/sec",
            "range": "stddev: 0.0009161392359201311",
            "extra": "mean: 1.4590988553589213 msec\nrounds: 961"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1179.490578933123,
            "unit": "iter/sec",
            "range": "stddev: 0.0004810710502961441",
            "extra": "mean: 847.8236434109743 usec\nrounds: 1548"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1879.5214543102784,
            "unit": "iter/sec",
            "range": "stddev: 0.00013941289190544723",
            "extra": "mean: 532.0503246753129 usec\nrounds: 2464"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1319.3230297798073,
            "unit": "iter/sec",
            "range": "stddev: 0.000314430558662656",
            "extra": "mean: 757.964484381735 usec\nrounds: 2337"
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
          "id": "d7486b3f3e74c9df408b881ae9cbc67c8dfbd839",
          "message": "Merge pull request #1450 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.21.1",
          "timestamp": "2024-10-03T14:02:57Z",
          "tree_id": "9d114ed884e8cf1b9f56c5afd4e3f24d42b6d2fc",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/d7486b3f3e74c9df408b881ae9cbc67c8dfbd839"
        },
        "date": 1727964339531,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 553.9593656747253,
            "unit": "iter/sec",
            "range": "stddev: 0.0008909465985805783",
            "extra": "mean: 1.8051865569273204 msec\nrounds: 729"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 741.0671066612067,
            "unit": "iter/sec",
            "range": "stddev: 0.0007546471696216068",
            "extra": "mean: 1.3494054600606764 msec\nrounds: 989"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 838.1390322452851,
            "unit": "iter/sec",
            "range": "stddev: 0.0007520321844992109",
            "extra": "mean: 1.193119472459249 msec\nrounds: 1289"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1915.6963082866819,
            "unit": "iter/sec",
            "range": "stddev: 0.0002155560757749075",
            "extra": "mean: 522.0034071550506 usec\nrounds: 2348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 547.672670574891,
            "unit": "iter/sec",
            "range": "stddev: 0.0006203336884164591",
            "extra": "mean: 1.8259081632652983 msec\nrounds: 686"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 698.933996223506,
            "unit": "iter/sec",
            "range": "stddev: 0.0006556033602384406",
            "extra": "mean: 1.4307502645503292 msec\nrounds: 945"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1000.7753259393331,
            "unit": "iter/sec",
            "range": "stddev: 0.00045121153340314937",
            "extra": "mean: 999.2252747252683 usec\nrounds: 1274"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1767.4836826349435,
            "unit": "iter/sec",
            "range": "stddev: 0.00028663556348748615",
            "extra": "mean: 565.7760859829901 usec\nrounds: 2233"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 29.398189659481112,
            "unit": "iter/sec",
            "range": "stddev: 0.007319320919881208",
            "extra": "mean: 34.015699999999605 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 31.215011463302446,
            "unit": "iter/sec",
            "range": "stddev: 0.005689003566251083",
            "extra": "mean: 32.03586842105242 msec\nrounds: 38"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 819.9818524392331,
            "unit": "iter/sec",
            "range": "stddev: 0.0006921624018720615",
            "extra": "mean: 1.2195391849530082 msec\nrounds: 957"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1128.5778372333043,
            "unit": "iter/sec",
            "range": "stddev: 0.0005342942862818227",
            "extra": "mean: 886.0709177591937 usec\nrounds: 1678"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1162.7660401631265,
            "unit": "iter/sec",
            "range": "stddev: 0.0007435559321400268",
            "extra": "mean: 860.0182370820775 usec\nrounds: 2632"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1017.6216113996305,
            "unit": "iter/sec",
            "range": "stddev: 0.0006985971948280494",
            "extra": "mean: 982.6835326586729 usec\nrounds: 2174"
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
          "id": "2c061635997023e948adba5d76170a0c0c071fba",
          "message": "Merge pull request #1449 from TeoZosa/dependabot/github_actions/pypa/cibuildwheel-2.21.2",
          "timestamp": "2024-10-03T14:26:26Z",
          "tree_id": "d83c5fe22d7c11a1ac37ae40d887a60ff042ce8c",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/2c061635997023e948adba5d76170a0c0c071fba"
        },
        "date": 1727965827311,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 735.4315068430076,
            "unit": "iter/sec",
            "range": "stddev: 0.0001596398100497984",
            "extra": "mean: 1.359745932415525 msec\nrounds: 799"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 957.4249555672735,
            "unit": "iter/sec",
            "range": "stddev: 0.0000853691654988201",
            "extra": "mean: 1.0444682835820807 msec\nrounds: 1072"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1163.849160335279,
            "unit": "iter/sec",
            "range": "stddev: 0.00015119313289609583",
            "extra": "mean: 859.2178729689698 usec\nrounds: 1354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2266.2597583863053,
            "unit": "iter/sec",
            "range": "stddev: 0.00004706823385116628",
            "extra": "mean: 441.2556840845341 usec\nrounds: 2507"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 653.9571644489582,
            "unit": "iter/sec",
            "range": "stddev: 0.0001554314844208558",
            "extra": "mean: 1.5291521438451199 msec\nrounds: 723"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 823.6003994895381,
            "unit": "iter/sec",
            "range": "stddev: 0.00028470694980922337",
            "extra": "mean: 1.2141810526315835 msec\nrounds: 950"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1146.6800072440346,
            "unit": "iter/sec",
            "range": "stddev: 0.00008974997096797627",
            "extra": "mean: 872.082877247882 usec\nrounds: 1279"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2015.0534794665364,
            "unit": "iter/sec",
            "range": "stddev: 0.00019210279104508172",
            "extra": "mean: 496.26474442987944 usec\nrounds: 2289"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 37.443261757418306,
            "unit": "iter/sec",
            "range": "stddev: 0.002942651781480833",
            "extra": "mean: 26.707074999999936 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 38.17706340210466,
            "unit": "iter/sec",
            "range": "stddev: 0.0021320002866828214",
            "extra": "mean: 26.193738095237336 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 876.3323186326702,
            "unit": "iter/sec",
            "range": "stddev: 0.0003650794802034639",
            "extra": "mean: 1.1411196172249893 msec\nrounds: 1045"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1467.5287222005443,
            "unit": "iter/sec",
            "range": "stddev: 0.00013422026377051105",
            "extra": "mean: 681.4176682692181 usec\nrounds: 1664"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1804.3807062114238,
            "unit": "iter/sec",
            "range": "stddev: 0.0003583611231455034",
            "extra": "mean: 554.2067683153488 usec\nrounds: 2689"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1476.5469404568878,
            "unit": "iter/sec",
            "range": "stddev: 0.00043763582969224597",
            "extra": "mean: 677.255813953717 usec\nrounds: 2451"
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
          "id": "8006625e3d6cf5317acdd8627b94b183b9430d34",
          "message": "Merge pull request #1451 from TeoZosa/dependabot/pip/docs/emoji-2.14.0",
          "timestamp": "2024-10-04T13:40:22Z",
          "tree_id": "70696f372c6e59c7bee1c43d50a7364818558d97",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/8006625e3d6cf5317acdd8627b94b183b9430d34"
        },
        "date": 1728050218183,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 637.3525517837927,
            "unit": "iter/sec",
            "range": "stddev: 0.00046711452470289786",
            "extra": "mean: 1.5689903448275941 msec\nrounds: 725"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 878.6381109280541,
            "unit": "iter/sec",
            "range": "stddev: 0.0003078548191096713",
            "extra": "mean: 1.1381250000000098 msec\nrounds: 984"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1143.6199063407669,
            "unit": "iter/sec",
            "range": "stddev: 0.00016217395362787658",
            "extra": "mean: 874.4163987138817 usec\nrounds: 1244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2125.574385857878,
            "unit": "iter/sec",
            "range": "stddev: 0.00008979683399220833",
            "extra": "mean: 470.4610700304435 usec\nrounds: 2299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 611.1695158631311,
            "unit": "iter/sec",
            "range": "stddev: 0.00026767537611343227",
            "extra": "mean: 1.6362072617246601 msec\nrounds: 661"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 837.8561606845042,
            "unit": "iter/sec",
            "range": "stddev: 0.00007126419980085475",
            "extra": "mean: 1.1935222857143273 msec\nrounds: 875"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 862.9323276298064,
            "unit": "iter/sec",
            "range": "stddev: 0.0005595585075241063",
            "extra": "mean: 1.1588394222599978 msec\nrounds: 1177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1647.9769960362178,
            "unit": "iter/sec",
            "range": "stddev: 0.0002820068658867417",
            "extra": "mean: 606.8045867176795 usec\nrounds: 2093"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 30.585612527866722,
            "unit": "iter/sec",
            "range": "stddev: 0.007182586107197264",
            "extra": "mean: 32.695111111111295 msec\nrounds: 36"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 34.19930404416226,
            "unit": "iter/sec",
            "range": "stddev: 0.005479596742998274",
            "extra": "mean: 29.240361111111486 msec\nrounds: 36"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 802.0317009578484,
            "unit": "iter/sec",
            "range": "stddev: 0.0003090418937341122",
            "extra": "mean: 1.2468335089569682 msec\nrounds: 949"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1308.009579448987,
            "unit": "iter/sec",
            "range": "stddev: 0.000249942538976112",
            "extra": "mean: 764.5203947369106 usec\nrounds: 1520"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1285.4045995359427,
            "unit": "iter/sec",
            "range": "stddev: 0.0005118612484798728",
            "extra": "mean: 777.9651639343912 usec\nrounds: 2440"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1357.3029692377665,
            "unit": "iter/sec",
            "range": "stddev: 0.0004653304799817745",
            "extra": "mean: 736.7551848513082 usec\nrounds: 2218"
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
          "id": "85da80b00d125c50803ca5fe28bffd5dfc0fa37a",
          "message": "Merge pull request #1453 from TeoZosa/dependabot/pip/emoji-2.14.0",
          "timestamp": "2024-10-04T14:20:04Z",
          "tree_id": "6db5260a69330c88d2a80396dd37db4169e18322",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/85da80b00d125c50803ca5fe28bffd5dfc0fa37a"
        },
        "date": 1728052870345,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 744.2526634684438,
            "unit": "iter/sec",
            "range": "stddev: 0.00007598436105886471",
            "extra": "mean: 1.3436297229219119 msec\nrounds: 794"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1007.3941599436313,
            "unit": "iter/sec",
            "range": "stddev: 0.00004405315036373522",
            "extra": "mean: 992.6601123595505 usec\nrounds: 1068"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1229.3661650706827,
            "unit": "iter/sec",
            "range": "stddev: 0.00008890045931793463",
            "extra": "mean: 813.4272997032621 usec\nrounds: 1348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2059.0875213712416,
            "unit": "iter/sec",
            "range": "stddev: 0.00013660559158068012",
            "extra": "mean: 485.6520131470923 usec\nrounds: 2434"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 634.7492375712943,
            "unit": "iter/sec",
            "range": "stddev: 0.0002815608553639549",
            "extra": "mean: 1.5754252873563808 msec\nrounds: 696"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 932.4982466887293,
            "unit": "iter/sec",
            "range": "stddev: 0.000016661490353338427",
            "extra": "mean: 1.072388075313779 msec\nrounds: 956"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1261.343743676076,
            "unit": "iter/sec",
            "range": "stddev: 0.000033980225829903446",
            "extra": "mean: 792.8052959501646 usec\nrounds: 1284"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2045.444112921769,
            "unit": "iter/sec",
            "range": "stddev: 0.00011191375960507448",
            "extra": "mean: 488.89138240573703 usec\nrounds: 2228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 35.38116572095777,
            "unit": "iter/sec",
            "range": "stddev: 0.0024966751294315517",
            "extra": "mean: 28.26362499999986 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 38.752966447311614,
            "unit": "iter/sec",
            "range": "stddev: 0.0010960141364164144",
            "extra": "mean: 25.80447619047683 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 978.491957960492,
            "unit": "iter/sec",
            "range": "stddev: 0.00005584987094570397",
            "extra": "mean: 1.021980806142074 msec\nrounds: 1042"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1258.8801513738053,
            "unit": "iter/sec",
            "range": "stddev: 0.00035337604460057266",
            "extra": "mean: 794.3567931456449 usec\nrounds: 1634"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1928.5456260043895,
            "unit": "iter/sec",
            "range": "stddev: 0.00011220691760409465",
            "extra": "mean: 518.5254559270272 usec\nrounds: 2632"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1185.096818878407,
            "unit": "iter/sec",
            "range": "stddev: 0.00047021703347080836",
            "extra": "mean: 843.812913907249 usec\nrounds: 2416"
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
          "id": "ec36a6dc5cbf47740d7d0df36ffa73ee2eac14cd",
          "message": "Merge pull request #1454 from TeoZosa/dependabot/github_actions/pypa/gh-action-pypi-publish-1.10.3",
          "timestamp": "2024-10-04T14:32:05Z",
          "tree_id": "32cbdbc439c745d63bac6a9ef8d9acfe1ce0bb00",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/ec36a6dc5cbf47740d7d0df36ffa73ee2eac14cd"
        },
        "date": 1728053659089,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 637.2037322847809,
            "unit": "iter/sec",
            "range": "stddev: 0.0005343880985208371",
            "extra": "mean: 1.569356783919585 msec\nrounds: 796"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 927.1019315929243,
            "unit": "iter/sec",
            "range": "stddev: 0.0003288730761618274",
            "extra": "mean: 1.0786300469483696 msec\nrounds: 1065"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 904.2612555314594,
            "unit": "iter/sec",
            "range": "stddev: 0.0006785899612999607",
            "extra": "mean: 1.1058750929367998 msec\nrounds: 1345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1865.2715568342442,
            "unit": "iter/sec",
            "range": "stddev: 0.00035157086134107274",
            "extra": "mean: 536.114967462008 usec\nrounds: 2305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 543.370798412542,
            "unit": "iter/sec",
            "range": "stddev: 0.0007058787471628957",
            "extra": "mean: 1.8403638968481568 msec\nrounds: 698"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 808.726388306455,
            "unit": "iter/sec",
            "range": "stddev: 0.0002831298953537927",
            "extra": "mean: 1.236512143611499 msec\nrounds: 947"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1148.7109110472409,
            "unit": "iter/sec",
            "range": "stddev: 0.00013203262150554595",
            "extra": "mean: 870.5410476934827 usec\nrounds: 1279"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1814.8095807253662,
            "unit": "iter/sec",
            "range": "stddev: 0.0002468251174422716",
            "extra": "mean: 551.0219973603552 usec\nrounds: 2273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 36.536687401236655,
            "unit": "iter/sec",
            "range": "stddev: 0.004396942461850301",
            "extra": "mean: 27.36975000000008 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 35.122695282186406,
            "unit": "iter/sec",
            "range": "stddev: 0.007231336684292652",
            "extra": "mean: 28.471619047618532 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 917.7270350357009,
            "unit": "iter/sec",
            "range": "stddev: 0.00022401075729215243",
            "extra": "mean: 1.0896486229819944 msec\nrounds: 1053"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1474.2807728702896,
            "unit": "iter/sec",
            "range": "stddev: 0.00011650397212040554",
            "extra": "mean: 678.2968471148758 usec\nrounds: 1681"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1790.53067740145,
            "unit": "iter/sec",
            "range": "stddev: 0.0002007141853718468",
            "extra": "mean: 558.4936424832853 usec\nrounds: 2674"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1320.988757344207,
            "unit": "iter/sec",
            "range": "stddev: 0.0002658290858265154",
            "extra": "mean: 757.0087136929602 usec\nrounds: 2410"
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
          "id": "ed67ec3286258b503cb7e0aab62ce7363af98cc8",
          "message": "Merge pull request #1455 from TeoZosa/dependabot/pip/rich-13.9.2",
          "timestamp": "2024-10-04T14:39:44Z",
          "tree_id": "8d4f1e7169ee4d2a6744833287c82cb7e35cf055",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/ed67ec3286258b503cb7e0aab62ce7363af98cc8"
        },
        "date": 1728054382134,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 520.7679010456701,
            "unit": "iter/sec",
            "range": "stddev: 0.0009813368734199865",
            "extra": "mean: 1.9202412398922077 msec\nrounds: 742"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 687.6805584914721,
            "unit": "iter/sec",
            "range": "stddev: 0.0007711293114910604",
            "extra": "mean: 1.4541635467980167 msec\nrounds: 1015"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1056.1643405298037,
            "unit": "iter/sec",
            "range": "stddev: 0.0003666045520962263",
            "extra": "mean: 946.8223472668752 usec\nrounds: 1244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1564.6639014821837,
            "unit": "iter/sec",
            "range": "stddev: 0.0004081641155686591",
            "extra": "mean: 639.1148917366307 usec\nrounds: 2263"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 464.51413112203016,
            "unit": "iter/sec",
            "range": "stddev: 0.0011908962989118472",
            "extra": "mean: 2.152787037036975 msec\nrounds: 648"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 586.2403035853636,
            "unit": "iter/sec",
            "range": "stddev: 0.0009523486465733846",
            "extra": "mean: 1.705785142857187 msec\nrounds: 875"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 958.5598989333606,
            "unit": "iter/sec",
            "range": "stddev: 0.00026021864898188147",
            "extra": "mean: 1.0432316239316415 msec\nrounds: 1170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1440.8041518289901,
            "unit": "iter/sec",
            "range": "stddev: 0.0004879841294840174",
            "extra": "mean: 694.0568561872736 usec\nrounds: 2093"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.843820172713357,
            "unit": "iter/sec",
            "range": "stddev: 0.013094102526589633",
            "extra": "mean: 41.93958823529422 msec\nrounds: 34"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.862003416214282,
            "unit": "iter/sec",
            "range": "stddev: 0.006660673111567126",
            "extra": "mean: 33.4873714285702 msec\nrounds: 35"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 669.5641382849052,
            "unit": "iter/sec",
            "range": "stddev: 0.0007007337115191688",
            "extra": "mean: 1.493508900523719 msec\nrounds: 955"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1193.0163205893,
            "unit": "iter/sec",
            "range": "stddev: 0.0005109382050874586",
            "extra": "mean: 838.2115003305587 usec\nrounds: 1513"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1122.4996436879062,
            "unit": "iter/sec",
            "range": "stddev: 0.0006109539589535059",
            "extra": "mean: 890.868879668023 usec\nrounds: 2410"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1040.199259498576,
            "unit": "iter/sec",
            "range": "stddev: 0.0006553602043163456",
            "extra": "mean: 961.3542702213093 usec\nrounds: 2213"
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
          "id": "8f531fe882a668fbd5ee9301c0e2af9bc5e86073",
          "message": "Merge pull request #1452 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.21.2",
          "timestamp": "2024-10-04T14:40:14Z",
          "tree_id": "0b8606c1b1b30c58becd960a018ffa8ca583cd71",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/8f531fe882a668fbd5ee9301c0e2af9bc5e86073"
        },
        "date": 1728054908229,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 737.4672365783806,
            "unit": "iter/sec",
            "range": "stddev: 0.00010926540195268353",
            "extra": "mean: 1.3559924433249266 msec\nrounds: 794"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 986.7558716128135,
            "unit": "iter/sec",
            "range": "stddev: 0.00016224081239251032",
            "extra": "mean: 1.0134218896164655 msec\nrounds: 1069"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1265.4123794901905,
            "unit": "iter/sec",
            "range": "stddev: 0.00006475740135553648",
            "extra": "mean: 790.2562170309097 usec\nrounds: 1327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2258.440317182905,
            "unit": "iter/sec",
            "range": "stddev: 0.0000647988159905896",
            "extra": "mean: 442.78345209819986 usec\nrounds: 2526"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 667.6314376081783,
            "unit": "iter/sec",
            "range": "stddev: 0.00020566601307615425",
            "extra": "mean: 1.4978324022346041 msec\nrounds: 716"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 832.5753865527946,
            "unit": "iter/sec",
            "range": "stddev: 0.0002335719972123453",
            "extra": "mean: 1.2010924369748814 msec\nrounds: 952"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1136.0370226187958,
            "unit": "iter/sec",
            "range": "stddev: 0.00011382196248365978",
            "extra": "mean: 880.253002401979 usec\nrounds: 1249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2001.20738343901,
            "unit": "iter/sec",
            "range": "stddev: 0.00008776622263241947",
            "extra": "mean: 499.6983362521541 usec\nrounds: 2284"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 36.73315996537668,
            "unit": "iter/sec",
            "range": "stddev: 0.001690948137758246",
            "extra": "mean: 27.22335897435895 msec\nrounds: 39"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 39.75977338868745,
            "unit": "iter/sec",
            "range": "stddev: 0.0006923511374738829",
            "extra": "mean: 25.15104878048733 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 915.8879677234175,
            "unit": "iter/sec",
            "range": "stddev: 0.00028546232705525023",
            "extra": "mean: 1.0918365949119913 msec\nrounds: 1022"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1519.1044784212,
            "unit": "iter/sec",
            "range": "stddev: 0.0001036525410850142",
            "extra": "mean: 658.2825698988767 usec\nrounds: 1681"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2089.0086427461792,
            "unit": "iter/sec",
            "range": "stddev: 0.00011923916400600153",
            "extra": "mean: 478.69596110689855 usec\nrounds: 2674"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1385.539046765842,
            "unit": "iter/sec",
            "range": "stddev: 0.00030588903369692437",
            "extra": "mean: 721.7407566637863 usec\nrounds: 2326"
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
          "id": "603c827a6951ed01bc70995ea89907121dbe67e3",
          "message": "Merge pull request #1460 from TeoZosa/dependabot/pip/black-24.10.0",
          "timestamp": "2024-10-08T14:14:16Z",
          "tree_id": "837d71de64eb2113bd7493c90fc5fef25030a0ea",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/603c827a6951ed01bc70995ea89907121dbe67e3"
        },
        "date": 1728397180169,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 726.7367662905564,
            "unit": "iter/sec",
            "range": "stddev: 0.00006464788401212906",
            "extra": "mean: 1.3760140485312813 msec\nrounds: 783"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 986.5442737097871,
            "unit": "iter/sec",
            "range": "stddev: 0.000030353433381693483",
            "extra": "mean: 1.0136392523364552 msec\nrounds: 1070"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1242.1490597792497,
            "unit": "iter/sec",
            "range": "stddev: 0.000044481050958314327",
            "extra": "mean: 805.0563594821031 usec\nrounds: 1313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2240.8466761688305,
            "unit": "iter/sec",
            "range": "stddev: 0.00001801341277562675",
            "extra": "mean: 446.2598939208538 usec\nrounds: 2451"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 653.2956399339911,
            "unit": "iter/sec",
            "range": "stddev: 0.00008518062374027367",
            "extra": "mean: 1.530700557103121 msec\nrounds: 718"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 880.3044322371478,
            "unit": "iter/sec",
            "range": "stddev: 0.000023921393933274283",
            "extra": "mean: 1.1359706521738913 msec\nrounds: 920"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1171.2322596247973,
            "unit": "iter/sec",
            "range": "stddev: 0.00003923596071548554",
            "extra": "mean: 853.8016194331504 usec\nrounds: 1235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2080.924855491062,
            "unit": "iter/sec",
            "range": "stddev: 0.000017338200971645313",
            "extra": "mean: 480.55555555561733 usec\nrounds: 2142"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 40.29733536327047,
            "unit": "iter/sec",
            "range": "stddev: 0.0008854383687635206",
            "extra": "mean: 24.815536585365965 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 41.991307799285714,
            "unit": "iter/sec",
            "range": "stddev: 0.0005176947119200117",
            "extra": "mean: 23.814452380952286 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1034.21951750806,
            "unit": "iter/sec",
            "range": "stddev: 0.000017178465771715454",
            "extra": "mean: 966.9127134725599 usec\nrounds: 1054"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1649.7675282883858,
            "unit": "iter/sec",
            "range": "stddev: 0.000016187320808075017",
            "extra": "mean: 606.1460071513761 usec\nrounds: 1678"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2231.0682119746357,
            "unit": "iter/sec",
            "range": "stddev: 0.00010730195929670583",
            "extra": "mean: 448.21578947375036 usec\nrounds: 2660"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1518.821245321173,
            "unit": "iter/sec",
            "range": "stddev: 0.00018973383109726792",
            "extra": "mean: 658.405327868941 usec\nrounds: 2440"
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
          "id": "4aaea981d63e87b69435d279aa58f254e5017ea6",
          "message": "Merge pull request #1458 from TeoZosa/dependabot/pip/docs/sphinx-rtd-theme-3.0.0",
          "timestamp": "2024-10-08T14:32:36Z",
          "tree_id": "a151a8d41783a8238f0481442d7bffcea08228c6",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/4aaea981d63e87b69435d279aa58f254e5017ea6"
        },
        "date": 1728400016109,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 724.0210650870259,
            "unit": "iter/sec",
            "range": "stddev: 0.0001939379086683181",
            "extra": "mean: 1.3811752837326658 msec\nrounds: 793"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 921.7153027116199,
            "unit": "iter/sec",
            "range": "stddev: 0.00026110877221611665",
            "extra": "mean: 1.0849337068160552 msec\nrounds: 1071"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 916.4367695772734,
            "unit": "iter/sec",
            "range": "stddev: 0.0005527107846001623",
            "extra": "mean: 1.0911827560795841 msec\nrounds: 1357"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1896.6405980702514,
            "unit": "iter/sec",
            "range": "stddev: 0.0002643573000317888",
            "extra": "mean: 527.2480200083538 usec\nrounds: 2399"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 496.0989529810847,
            "unit": "iter/sec",
            "range": "stddev: 0.0007907184119100309",
            "extra": "mean: 2.015726890756264 msec\nrounds: 714"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 600.6745536147477,
            "unit": "iter/sec",
            "range": "stddev: 0.0008576093531834771",
            "extra": "mean: 1.664795010846033 msec\nrounds: 922"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 878.9551101848658,
            "unit": "iter/sec",
            "range": "stddev: 0.0006103387920705092",
            "extra": "mean: 1.1377145299145885 msec\nrounds: 1170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1432.0794069051494,
            "unit": "iter/sec",
            "range": "stddev: 0.0004756297115590547",
            "extra": "mean: 698.2853012048324 usec\nrounds: 2075"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.9516696366735,
            "unit": "iter/sec",
            "range": "stddev: 0.009830697618542671",
            "extra": "mean: 41.7507428571432 msec\nrounds: 35"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.33602778024463,
            "unit": "iter/sec",
            "range": "stddev: 0.016770848801790854",
            "extra": "mean: 42.852194444444436 msec\nrounds: 36"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 601.0411953178307,
            "unit": "iter/sec",
            "range": "stddev: 0.001065626325720022",
            "extra": "mean: 1.6637794676805802 msec\nrounds: 1052"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1312.0743369769198,
            "unit": "iter/sec",
            "range": "stddev: 0.00027962737005812337",
            "extra": "mean: 762.1519389702007 usec\nrounds: 1573"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1286.8965209721937,
            "unit": "iter/sec",
            "range": "stddev: 0.000496219981946703",
            "extra": "mean: 777.063255439174 usec\nrounds: 2482"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1052.3095462178264,
            "unit": "iter/sec",
            "range": "stddev: 0.0006336007753541637",
            "extra": "mean: 950.2907234797636 usec\nrounds: 2253"
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
          "id": "79eebf220d8f876e8977fca9fb864561441f9386",
          "message": "Merge pull request #1459 from TeoZosa/dependabot/pip/sentry-sdk-2.16.0",
          "timestamp": "2024-10-08T15:07:30Z",
          "tree_id": "4d80f813d66a45bf3670cb46efb0c256c324c1cb",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/79eebf220d8f876e8977fca9fb864561441f9386"
        },
        "date": 1728401525121,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 755.0486837360326,
            "unit": "iter/sec",
            "range": "stddev: 0.00013700333863495964",
            "extra": "mean: 1.3244179104477496 msec\nrounds: 804"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1039.9682210454318,
            "unit": "iter/sec",
            "range": "stddev: 0.000040076787312612925",
            "extra": "mean: 961.5678438661773 usec\nrounds: 1076"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1311.2744627136901,
            "unit": "iter/sec",
            "range": "stddev: 0.000036145585920898944",
            "extra": "mean: 762.6168498168524 usec\nrounds: 1365"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2430.1747830442605,
            "unit": "iter/sec",
            "range": "stddev: 0.00001910749561266729",
            "extra": "mean: 411.4930362117033 usec\nrounds: 2513"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 697.4621562200716,
            "unit": "iter/sec",
            "range": "stddev: 0.00007257829500984165",
            "extra": "mean: 1.4337695473250422 msec\nrounds: 729"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 925.3822167700711,
            "unit": "iter/sec",
            "range": "stddev: 0.00008078812169887083",
            "extra": "mean: 1.0806345549738061 msec\nrounds: 955"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1226.6644757395068,
            "unit": "iter/sec",
            "range": "stddev: 0.000055896153462145174",
            "extra": "mean: 815.2188473519951 usec\nrounds: 1284"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2179.9875429283634,
            "unit": "iter/sec",
            "range": "stddev: 0.000044748672922137635",
            "extra": "mean: 458.7182175622464 usec\nrounds: 2289"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 40.55823965369191,
            "unit": "iter/sec",
            "range": "stddev: 0.0005986282989001555",
            "extra": "mean: 24.655902439024434 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 41.13408634828231,
            "unit": "iter/sec",
            "range": "stddev: 0.0008385084626457628",
            "extra": "mean: 24.310738095238094 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1021.6752029478812,
            "unit": "iter/sec",
            "range": "stddev: 0.00011195031059088252",
            "extra": "mean: 978.7846441948078 usec\nrounds: 1068"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1637.1913679620375,
            "unit": "iter/sec",
            "range": "stddev: 0.00005660705928202732",
            "extra": "mean: 610.802145411255 usec\nrounds: 1678"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2219.7401231133954,
            "unit": "iter/sec",
            "range": "stddev: 0.0001178523825262714",
            "extra": "mean: 450.5031871016529 usec\nrounds: 2667"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1456.3909525771137,
            "unit": "iter/sec",
            "range": "stddev: 0.0002055736107117885",
            "extra": "mean: 686.6288191577127 usec\nrounds: 2422"
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
          "id": "70536ee662d0f3f79099c2503ac6d43cdbcf6a02",
          "message": "Merge pull request #1457 from TeoZosa/dependabot/pip/pre-commit-4.0.0",
          "timestamp": "2024-10-08T15:08:33Z",
          "tree_id": "67732cdedf7c7c307e50a94f5b985dc57c916894",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/70536ee662d0f3f79099c2503ac6d43cdbcf6a02"
        },
        "date": 1728402122915,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 731.712206563355,
            "unit": "iter/sec",
            "range": "stddev: 0.00009152129892546829",
            "extra": "mean: 1.3666575342465814 msec\nrounds: 803"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 994.4276799686966,
            "unit": "iter/sec",
            "range": "stddev: 0.00004795543864602311",
            "extra": "mean: 1.0056035447761056 msec\nrounds: 1072"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1276.8656190543406,
            "unit": "iter/sec",
            "range": "stddev: 0.000042281420490125396",
            "extra": "mean: 783.1677704194196 usec\nrounds: 1359"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2334.427101387998,
            "unit": "iter/sec",
            "range": "stddev: 0.00002388407560817965",
            "extra": "mean: 428.37062652563554 usec\nrounds: 2458"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 649.5860234927877,
            "unit": "iter/sec",
            "range": "stddev: 0.0003952234911688386",
            "extra": "mean: 1.5394419889502178 msec\nrounds: 724"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 875.3531825993972,
            "unit": "iter/sec",
            "range": "stddev: 0.00005071102090393441",
            "extra": "mean: 1.1423960292581092 msec\nrounds: 957"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1232.575173698414,
            "unit": "iter/sec",
            "range": "stddev: 0.00003603987065578559",
            "extra": "mean: 811.3095422808505 usec\nrounds: 1289"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2142.6810154492746,
            "unit": "iter/sec",
            "range": "stddev: 0.000056628272177775334",
            "extra": "mean: 466.705026455056 usec\nrounds: 2268"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 39.72694989075143,
            "unit": "iter/sec",
            "range": "stddev: 0.0009871589512951212",
            "extra": "mean: 25.17182926829234 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 40.47139539589579,
            "unit": "iter/sec",
            "range": "stddev: 0.0009545952337999394",
            "extra": "mean: 24.708809523810242 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 946.8104551271311,
            "unit": "iter/sec",
            "range": "stddev: 0.0001387544361319305",
            "extra": "mean: 1.0561776061774972 msec\nrounds: 1036"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1541.0200683890646,
            "unit": "iter/sec",
            "range": "stddev: 0.000021217638980160667",
            "extra": "mean: 648.9208158368564 usec\nrounds: 1667"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1944.4923939233036,
            "unit": "iter/sec",
            "range": "stddev: 0.00015616516340486613",
            "extra": "mean: 514.273032450567 usec\nrounds: 2681"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1461.9655861847534,
            "unit": "iter/sec",
            "range": "stddev: 0.0001907702872595708",
            "extra": "mean: 684.0106288751085 usec\nrounds: 2258"
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
          "id": "dd320feedf1e0541dc962566e1205fcd2ed717c9",
          "message": "Merge pull request #1456 from TeoZosa/dependabot/pip/sphinx-rtd-theme-3.0.0",
          "timestamp": "2024-10-08T16:02:10Z",
          "tree_id": "b59cb61bcc44d8aa116cb66e38489a68198a6e46",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/dd320feedf1e0541dc962566e1205fcd2ed717c9"
        },
        "date": 1728403488396,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 711.2305098082217,
            "unit": "iter/sec",
            "range": "stddev: 0.00013006599108354074",
            "extra": "mean: 1.406013924050647 msec\nrounds: 790"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 978.2078093273296,
            "unit": "iter/sec",
            "range": "stddev: 0.0001600698298371945",
            "extra": "mean: 1.0222776699029381 msec\nrounds: 1030"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1201.6683854380542,
            "unit": "iter/sec",
            "range": "stddev: 0.0001857178237474346",
            "extra": "mean: 832.1763409257552 usec\nrounds: 1361"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2282.14732508303,
            "unit": "iter/sec",
            "range": "stddev: 0.000033699242481000425",
            "extra": "mean: 438.18380566803137 usec\nrounds: 2470"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 580.2228962266855,
            "unit": "iter/sec",
            "range": "stddev: 0.0005128344430260487",
            "extra": "mean: 1.7234755927475722 msec\nrounds: 717"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 736.6084276715861,
            "unit": "iter/sec",
            "range": "stddev: 0.0005636085877817739",
            "extra": "mean: 1.3575733896515312 msec\nrounds: 947"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 902.442109846392,
            "unit": "iter/sec",
            "range": "stddev: 0.0007258411471099116",
            "extra": "mean: 1.1081043194784137 msec\nrounds: 1227"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1956.6374482548722,
            "unit": "iter/sec",
            "range": "stddev: 0.00015209386752772607",
            "extra": "mean: 511.08088567552534 usec\nrounds: 2213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 31.360717404554464,
            "unit": "iter/sec",
            "range": "stddev: 0.008037998557795443",
            "extra": "mean: 31.887025641026042 msec\nrounds: 39"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 35.944417656599285,
            "unit": "iter/sec",
            "range": "stddev: 0.0014932289848574277",
            "extra": "mean: 27.820731707317094 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 945.5438768379862,
            "unit": "iter/sec",
            "range": "stddev: 0.00020942326619153645",
            "extra": "mean: 1.0575923809523484 msec\nrounds: 1050"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1451.7312462875711,
            "unit": "iter/sec",
            "range": "stddev: 0.00023088803969673988",
            "extra": "mean: 688.832731648673 usec\nrounds: 1662"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1918.9082258453116,
            "unit": "iter/sec",
            "range": "stddev: 0.00019267151513223778",
            "extra": "mean: 521.1296645307167 usec\nrounds: 2653"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1378.308181019467,
            "unit": "iter/sec",
            "range": "stddev: 0.0002293689521582712",
            "extra": "mean: 725.5271453589929 usec\nrounds: 2284"
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
          "id": "6fe649fabc6da647fb2a1c80174aec6669a59bbd",
          "message": "Merge pull request #1461 from TeoZosa/dependabot/pip/pre-commit-4.0.1",
          "timestamp": "2024-10-09T13:19:15Z",
          "tree_id": "b7431ab71f3f609de3bda59eaabbbf673b191e0b",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/6fe649fabc6da647fb2a1c80174aec6669a59bbd"
        },
        "date": 1728480111331,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 652.8773059355091,
            "unit": "iter/sec",
            "range": "stddev: 0.0003956123294823964",
            "extra": "mean: 1.5316813602015131 msec\nrounds: 794"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 991.2164392554959,
            "unit": "iter/sec",
            "range": "stddev: 0.0001002619490359996",
            "extra": "mean: 1.008861395348832 msec\nrounds: 1075"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1270.3874821628276,
            "unit": "iter/sec",
            "range": "stddev: 0.00005405957779723456",
            "extra": "mean: 787.1614086573851 usec\nrounds: 1363"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2060.154213052056,
            "unit": "iter/sec",
            "range": "stddev: 0.000060670259574452095",
            "extra": "mean: 485.4005557761282 usec\nrounds: 2519"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 588.3463480211046,
            "unit": "iter/sec",
            "range": "stddev: 0.00036910384390119867",
            "extra": "mean: 1.6996791147994497 msec\nrounds: 723"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 809.3373774563208,
            "unit": "iter/sec",
            "range": "stddev: 0.00017134867610972052",
            "extra": "mean: 1.235578669482578 msec\nrounds: 947"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1047.0238080528554,
            "unit": "iter/sec",
            "range": "stddev: 0.00013034125449189627",
            "extra": "mean: 955.0881195907995 usec\nrounds: 1271"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1513.0052057162338,
            "unit": "iter/sec",
            "range": "stddev: 0.00035268563052077203",
            "extra": "mean: 660.9362586605346 usec\nrounds: 2165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.994989121340836,
            "unit": "iter/sec",
            "range": "stddev: 0.009629436549515218",
            "extra": "mean: 43.48773529411829 msec\nrounds: 34"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.2240001422333,
            "unit": "iter/sec",
            "range": "stddev: 0.008396522398362569",
            "extra": "mean: 44.99640000000061 msec\nrounds: 30"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 582.9034595410819,
            "unit": "iter/sec",
            "range": "stddev: 0.000708635081468726",
            "extra": "mean: 1.7155499485065622 msec\nrounds: 971"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1137.9034843617958,
            "unit": "iter/sec",
            "range": "stddev: 0.00036209431449148725",
            "extra": "mean: 878.8091553835603 usec\nrounds: 1551"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1195.5578556613368,
            "unit": "iter/sec",
            "range": "stddev: 0.0005526004334427528",
            "extra": "mean: 836.4296175753353 usec\nrounds: 2458"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1318.6219742487403,
            "unit": "iter/sec",
            "range": "stddev: 0.00047967612036793345",
            "extra": "mean: 758.3674620390965 usec\nrounds: 2305"
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
          "id": "b84bd3a5a3788ee3935df1c188ea4bfd94b20492",
          "message": "Merge pull request #1462 from TeoZosa/dependabot/pip/sphinx-rtd-theme-3.0.1",
          "timestamp": "2024-10-09T14:00:45Z",
          "tree_id": "a22fb549f7aba6f68c7f89cf8c9810451d7bf630",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/b84bd3a5a3788ee3935df1c188ea4bfd94b20492"
        },
        "date": 1728483408238,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 641.3137337083574,
            "unit": "iter/sec",
            "range": "stddev: 0.0002627575734726815",
            "extra": "mean: 1.5592992125984286 msec\nrounds: 762"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 884.4723082125707,
            "unit": "iter/sec",
            "range": "stddev: 0.0001836817309771276",
            "extra": "mean: 1.1306176470588425 msec\nrounds: 1020"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 740.429607674194,
            "unit": "iter/sec",
            "range": "stddev: 0.000875471972427512",
            "extra": "mean: 1.3505672782874762 msec\nrounds: 1308"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1742.9690497627932,
            "unit": "iter/sec",
            "range": "stddev: 0.00035240878556326295",
            "extra": "mean: 573.7336530078337 usec\nrounds: 2294"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 485.6535033875351,
            "unit": "iter/sec",
            "range": "stddev: 0.0008898869594644776",
            "extra": "mean: 2.0590812030074734 msec\nrounds: 665"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 641.8705775446517,
            "unit": "iter/sec",
            "range": "stddev: 0.0006085095334662275",
            "extra": "mean: 1.5579464692482108 msec\nrounds: 878"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 807.6207938959478,
            "unit": "iter/sec",
            "range": "stddev: 0.0006622788186431479",
            "extra": "mean: 1.238204869857323 msec\nrounds: 1191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1368.1700423555417,
            "unit": "iter/sec",
            "range": "stddev: 0.0005543416165634873",
            "extra": "mean: 730.9033007902487 usec\nrounds: 2151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 35.6449054518885,
            "unit": "iter/sec",
            "range": "stddev: 0.002118649298809969",
            "extra": "mean: 28.054499999999837 msec\nrounds: 38"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 32.45023159217908,
            "unit": "iter/sec",
            "range": "stddev: 0.004981522342111029",
            "extra": "mean: 30.81642105263165 msec\nrounds: 38"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 863.8652998397448,
            "unit": "iter/sec",
            "range": "stddev: 0.00020445778710620916",
            "extra": "mean: 1.1575878787879421 msec\nrounds: 990"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1171.7394642989555,
            "unit": "iter/sec",
            "range": "stddev: 0.0005224879069076828",
            "extra": "mean: 853.4320388349247 usec\nrounds: 1648"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1231.8315462105018,
            "unit": "iter/sec",
            "range": "stddev: 0.0005783837676637187",
            "extra": "mean: 811.7993106089157 usec\nrounds: 2611"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1659.365915660185,
            "unit": "iter/sec",
            "range": "stddev: 0.0002210655667375749",
            "extra": "mean: 602.6398340248819 usec\nrounds: 2410"
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
          "id": "00eff669cc34a2b9c0615e29f371809e8af9bfb8",
          "message": "Merge pull request #1464 from TeoZosa/dependabot/github_actions/pypa/cibuildwheel-2.21.3",
          "timestamp": "2024-10-09T14:13:17Z",
          "tree_id": "ba3975a57710bd3c9ad7f4001535b4492d3d7728",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/00eff669cc34a2b9c0615e29f371809e8af9bfb8"
        },
        "date": 1728484110333,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 779.7840733762192,
            "unit": "iter/sec",
            "range": "stddev: 0.00005482240354241765",
            "extra": "mean: 1.2824062893081607 msec\nrounds: 795"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1055.6642769936489,
            "unit": "iter/sec",
            "range": "stddev: 0.000010124030239797833",
            "extra": "mean: 947.2708528584758 usec\nrounds: 1067"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1293.1646463367003,
            "unit": "iter/sec",
            "range": "stddev: 0.00005939927751239497",
            "extra": "mean: 773.2967359050665 usec\nrounds: 1348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2302.3116578586832,
            "unit": "iter/sec",
            "range": "stddev: 0.00002958270994248238",
            "extra": "mean: 434.34606109325466 usec\nrounds: 2488"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 697.4643512801475,
            "unit": "iter/sec",
            "range": "stddev: 0.00003067477649461784",
            "extra": "mean: 1.4337650349649689 msec\nrounds: 715"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 926.7409773804737,
            "unit": "iter/sec",
            "range": "stddev: 0.000019556095145644605",
            "extra": "mean: 1.0790501600852918 msec\nrounds: 937"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1202.6492482016752,
            "unit": "iter/sec",
            "range": "stddev: 0.00008576890769956858",
            "extra": "mean: 831.4976303317885 usec\nrounds: 1266"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2092.193942519864,
            "unit": "iter/sec",
            "range": "stddev: 0.000050995766766250084",
            "extra": "mean: 477.9671614934455 usec\nrounds: 2223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 36.86158654066617,
            "unit": "iter/sec",
            "range": "stddev: 0.00316794453961852",
            "extra": "mean: 27.128512195121807 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 40.35564147260703,
            "unit": "iter/sec",
            "range": "stddev: 0.0005482515590051791",
            "extra": "mean: 24.779682926829178 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 975.6023991335418,
            "unit": "iter/sec",
            "range": "stddev: 0.00017181591273976118",
            "extra": "mean: 1.0250077294686097 msec\nrounds: 1035"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1591.848505239077,
            "unit": "iter/sec",
            "range": "stddev: 0.0000592202476173849",
            "extra": "mean: 628.2004830917072 usec\nrounds: 1656"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1911.2390786334345,
            "unit": "iter/sec",
            "range": "stddev: 0.00021008490594790735",
            "extra": "mean: 523.2207792208892 usec\nrounds: 2618"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1411.2561072556184,
            "unit": "iter/sec",
            "range": "stddev: 0.0003070704575329554",
            "extra": "mean: 708.5886075948592 usec\nrounds: 2370"
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
          "id": "8d3f9b9915b107f38d448fd615b0574dcb7d8864",
          "message": "Merge pull request #1465 from TeoZosa/dependabot/pip/sphinx-rtd-theme-3.0.1",
          "timestamp": "2024-10-10T13:46:42Z",
          "tree_id": "ef7d7a40ade6b53fb651d7fd542f59c04287518c",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/8d3f9b9915b107f38d448fd615b0574dcb7d8864"
        },
        "date": 1728568307329,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 783.8901349320649,
            "unit": "iter/sec",
            "range": "stddev: 0.000060589893143771186",
            "extra": "mean: 1.2756889714993849 msec\nrounds: 807"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1064.8968160174525,
            "unit": "iter/sec",
            "range": "stddev: 0.00003887842806196428",
            "extra": "mean: 939.05811808119 usec\nrounds: 1084"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1320.772964793374,
            "unit": "iter/sec",
            "range": "stddev: 0.000014457044800512696",
            "extra": "mean: 757.1323964497133 usec\nrounds: 1352"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2256.940319919067,
            "unit": "iter/sec",
            "range": "stddev: 0.00003507196256041861",
            "extra": "mean: 443.0777327935103 usec\nrounds: 2470"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 698.5086261955877,
            "unit": "iter/sec",
            "range": "stddev: 0.00007798579776243103",
            "extra": "mean: 1.4316215469613864 msec\nrounds: 724"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 937.7078602156544,
            "unit": "iter/sec",
            "range": "stddev: 0.000017622309963830636",
            "extra": "mean: 1.0664302203567106 msec\nrounds: 953"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1245.294600422192,
            "unit": "iter/sec",
            "range": "stddev: 0.000014823690328355777",
            "extra": "mean: 803.0228346456897 usec\nrounds: 1270"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2172.8437924947534,
            "unit": "iter/sec",
            "range": "stddev: 0.00003215787649075378",
            "extra": "mean: 460.22636484689434 usec\nrounds: 2253"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 40.34333159168252,
            "unit": "iter/sec",
            "range": "stddev: 0.0006597840851556057",
            "extra": "mean: 24.78724390243882 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 38.06022799004928,
            "unit": "iter/sec",
            "range": "stddev: 0.0027576278896995973",
            "extra": "mean: 26.274146341462973 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1017.8873911372145,
            "unit": "iter/sec",
            "range": "stddev: 0.00007761261997535948",
            "extra": "mean: 982.426944971555 usec\nrounds: 1054"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1599.250780517532,
            "unit": "iter/sec",
            "range": "stddev: 0.0001003683418523816",
            "extra": "mean: 625.2928009679576 usec\nrounds: 1653"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1474.3204962139828,
            "unit": "iter/sec",
            "range": "stddev: 0.000338662020477344",
            "extra": "mean: 678.2785714286509 usec\nrounds: 2660"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1394.3612566849283,
            "unit": "iter/sec",
            "range": "stddev: 0.00024081597834037677",
            "extra": "mean: 717.1742582531905 usec\nrounds: 2393"
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
          "id": "acc91ab8165b30e32c1deca66440386a956fb1f6",
          "message": "Merge pull request #1466 from TeoZosa/dependabot/pip/mypy-1.12.0",
          "timestamp": "2024-10-14T13:29:03Z",
          "tree_id": "14a87901e54123de28dd6c73e9f7298bc07e3741",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/acc91ab8165b30e32c1deca66440386a956fb1f6"
        },
        "date": 1728912835628,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 766.8331317694112,
            "unit": "iter/sec",
            "range": "stddev: 0.00008806953154790008",
            "extra": "mean: 1.3040646766168975 msec\nrounds: 804"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1048.8134013087044,
            "unit": "iter/sec",
            "range": "stddev: 0.000028790832864551133",
            "extra": "mean: 953.4584500466954 usec\nrounds: 1071"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1291.0148237190967,
            "unit": "iter/sec",
            "range": "stddev: 0.000038413649983652363",
            "extra": "mean: 774.5844444444454 usec\nrounds: 1350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2433.3339229942544,
            "unit": "iter/sec",
            "range": "stddev: 0.000009332289943014564",
            "extra": "mean: 410.9588045234189 usec\nrounds: 2476"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 705.5672663501562,
            "unit": "iter/sec",
            "range": "stddev: 0.00002508626139083579",
            "extra": "mean: 1.417299310344882 msec\nrounds: 725"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 945.6493706046193,
            "unit": "iter/sec",
            "range": "stddev: 0.000012698574310479601",
            "extra": "mean: 1.0574743991640692 msec\nrounds: 957"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1257.76015660769,
            "unit": "iter/sec",
            "range": "stddev: 0.00003417911145505529",
            "extra": "mean: 795.0641421947282 usec\nrounds: 1294"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2221.8429201921576,
            "unit": "iter/sec",
            "range": "stddev: 0.000026050502927274316",
            "extra": "mean: 450.07682177348266 usec\nrounds: 2278"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 39.46166397998488,
            "unit": "iter/sec",
            "range": "stddev: 0.0020476866365581833",
            "extra": "mean: 25.34105000000011 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 41.81804966590455,
            "unit": "iter/sec",
            "range": "stddev: 0.00016565850892597843",
            "extra": "mean: 23.913119047618533 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1027.8217720305938,
            "unit": "iter/sec",
            "range": "stddev: 0.00005824139637097596",
            "extra": "mean: 972.9313264345158 usec\nrounds: 1063"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1653.7739730936305,
            "unit": "iter/sec",
            "range": "stddev: 0.00001131969168314721",
            "extra": "mean: 604.6775534442297 usec\nrounds: 1684"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2268.721042990694,
            "unit": "iter/sec",
            "range": "stddev: 0.000058633436926161856",
            "extra": "mean: 440.7769756839611 usec\nrounds: 2632"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1757.938441518081,
            "unit": "iter/sec",
            "range": "stddev: 0.00022109613192068412",
            "extra": "mean: 568.8481327801459 usec\nrounds: 2410"
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
        "date": 1728978137841,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 775.0836694123269,
            "unit": "iter/sec",
            "range": "stddev: 0.00005900204249737191",
            "extra": "mean: 1.2901832917705593 msec\nrounds: 802"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1050.0283911144134,
            "unit": "iter/sec",
            "range": "stddev: 0.0000323305276689758",
            "extra": "mean: 952.3552014995353 usec\nrounds: 1067"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1323.846254857422,
            "unit": "iter/sec",
            "range": "stddev: 0.00002836535389968974",
            "extra": "mean: 755.3747244673059 usec\nrounds: 1361"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2413.3568899782517,
            "unit": "iter/sec",
            "range": "stddev: 0.000010619813456692298",
            "extra": "mean: 414.36059629332806 usec\nrounds: 2482"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 704.6140476553549,
            "unit": "iter/sec",
            "range": "stddev: 0.000018218890072982234",
            "extra": "mean: 1.4192166666667512 msec\nrounds: 720"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 941.477743466038,
            "unit": "iter/sec",
            "range": "stddev: 0.000018741705014488486",
            "extra": "mean: 1.0621600000001203 msec\nrounds: 950"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1257.7445818538235,
            "unit": "iter/sec",
            "range": "stddev: 0.000029079834358471948",
            "extra": "mean: 795.0739875389271 usec\nrounds: 1284"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2136.8172759246168,
            "unit": "iter/sec",
            "range": "stddev: 0.000047167000474399265",
            "extra": "mean: 467.98573339280614 usec\nrounds: 2243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 40.912079940208955,
            "unit": "iter/sec",
            "range": "stddev: 0.0005242618911269517",
            "extra": "mean: 24.44265853658509 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 41.93219563965085,
            "unit": "iter/sec",
            "range": "stddev: 0.0003213585102377785",
            "extra": "mean: 23.848023809523713 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1014.5560073202474,
            "unit": "iter/sec",
            "range": "stddev: 0.00014138423407332215",
            "extra": "mean: 985.6528301885529 usec\nrounds: 1060"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1558.4766312899974,
            "unit": "iter/sec",
            "range": "stddev: 0.00012121094550129813",
            "extra": "mean: 641.652226233428 usec\nrounds: 1662"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2108.334351948636,
            "unit": "iter/sec",
            "range": "stddev: 0.00013142857761980559",
            "extra": "mean: 474.3080712391496 usec\nrounds: 2639"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1502.1285309765412,
            "unit": "iter/sec",
            "range": "stddev: 0.00015275059903978352",
            "extra": "mean: 665.7219934101744 usec\nrounds: 2428"
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
        "date": 1728979031220,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 525.6678156435877,
            "unit": "iter/sec",
            "range": "stddev: 0.0009006176312030651",
            "extra": "mean: 1.9023420689655046 msec\nrounds: 725"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 801.5377771610688,
            "unit": "iter/sec",
            "range": "stddev: 0.000490836529604094",
            "extra": "mean: 1.2476018329938932 msec\nrounds: 982"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1081.56740291154,
            "unit": "iter/sec",
            "range": "stddev: 0.0003035163957317537",
            "extra": "mean: 924.5840779853723 usec\nrounds: 1231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1602.2477083509689,
            "unit": "iter/sec",
            "range": "stddev: 0.00044710496476605",
            "extra": "mean: 624.1232206405829 usec\nrounds: 2248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 476.72284993586936,
            "unit": "iter/sec",
            "range": "stddev: 0.0010045506570926749",
            "extra": "mean: 2.0976548536209747 msec\nrounds: 649"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 680.3528774005821,
            "unit": "iter/sec",
            "range": "stddev: 0.000675555663559978",
            "extra": "mean: 1.46982548794486 msec\nrounds: 871"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 968.382677095198,
            "unit": "iter/sec",
            "range": "stddev: 0.0005130811621992079",
            "extra": "mean: 1.0326496163682344 msec\nrounds: 1173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1724.9464233805006,
            "unit": "iter/sec",
            "range": "stddev: 0.00025269951408685723",
            "extra": "mean: 579.7281506519075 usec\nrounds: 2071"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 32.560992459050254,
            "unit": "iter/sec",
            "range": "stddev: 0.0045725916579084395",
            "extra": "mean: 30.711594594594498 msec\nrounds: 37"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 31.34005110077757,
            "unit": "iter/sec",
            "range": "stddev: 0.0075848364123796645",
            "extra": "mean: 31.908052631579448 msec\nrounds: 38"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 755.1460430580956,
            "unit": "iter/sec",
            "range": "stddev: 0.0006122735470420724",
            "extra": "mean: 1.3242471561531668 msec\nrounds: 967"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1196.8807914354593,
            "unit": "iter/sec",
            "range": "stddev: 0.0004591922817287899",
            "extra": "mean: 835.5050955414418 usec\nrounds: 1570"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 971.0222554656673,
            "unit": "iter/sec",
            "range": "stddev: 0.0006100008060250052",
            "extra": "mean: 1.0298425132598388 msec\nrounds: 2451"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1206.1843972548834,
            "unit": "iter/sec",
            "range": "stddev: 0.000542268944598195",
            "extra": "mean: 829.0606330805374 usec\nrounds: 2243"
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
        "date": 1728999916330,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 654.6568116538944,
            "unit": "iter/sec",
            "range": "stddev: 0.0004280605358384934",
            "extra": "mean: 1.5275179028133028 msec\nrounds: 782"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 988.3615762315817,
            "unit": "iter/sec",
            "range": "stddev: 0.00010390412230047483",
            "extra": "mean: 1.011775471698114 msec\nrounds: 1060"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1319.9289616788392,
            "unit": "iter/sec",
            "range": "stddev: 0.000017022504457226257",
            "extra": "mean: 757.616530156353 usec\nrounds: 1343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2190.012491831267,
            "unit": "iter/sec",
            "range": "stddev: 0.000046615469344744425",
            "extra": "mean: 456.61839999999717 usec\nrounds: 2500"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 548.3767092934044,
            "unit": "iter/sec",
            "range": "stddev: 0.0003139327132543844",
            "extra": "mean: 1.8235639534883281 msec\nrounds: 688"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 746.9334845938113,
            "unit": "iter/sec",
            "range": "stddev: 0.0003773021094205181",
            "extra": "mean: 1.3388072976053664 msec\nrounds: 877"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 922.9272559036216,
            "unit": "iter/sec",
            "range": "stddev: 0.00035834909877649577",
            "extra": "mean: 1.0835090128754707 msec\nrounds: 1165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1448.191771662869,
            "unit": "iter/sec",
            "range": "stddev: 0.0005698940904162921",
            "extra": "mean: 690.5162835249104 usec\nrounds: 2088"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 29.257756532439956,
            "unit": "iter/sec",
            "range": "stddev: 0.005717384194666085",
            "extra": "mean: 34.178970588234804 msec\nrounds: 34"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.779839399077737,
            "unit": "iter/sec",
            "range": "stddev: 0.007289695093007422",
            "extra": "mean: 33.57976470588251 msec\nrounds: 34"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 679.2238735205176,
            "unit": "iter/sec",
            "range": "stddev: 0.000805035660402906",
            "extra": "mean: 1.472268627450994 msec\nrounds: 1020"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1422.4373661114923,
            "unit": "iter/sec",
            "range": "stddev: 0.00024531174237335887",
            "extra": "mean: 703.0186522262793 usec\nrounds: 1662"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 992.7527146355434,
            "unit": "iter/sec",
            "range": "stddev: 0.0008432653204262889",
            "extra": "mean: 1.0073001919386515 msec\nrounds: 2605"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1531.508801749452,
            "unit": "iter/sec",
            "range": "stddev: 0.0006274472606621465",
            "extra": "mean: 652.9508670519515 usec\nrounds: 2422"
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
        "date": 1729001684430,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 687.7264194402356,
            "unit": "iter/sec",
            "range": "stddev: 0.00015453205086734143",
            "extra": "mean: 1.4540665760869482 msec\nrounds: 736"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 946.152298091385,
            "unit": "iter/sec",
            "range": "stddev: 0.00006909384199020972",
            "extra": "mean: 1.0569122983870978 msec\nrounds: 992"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1201.3670926725763,
            "unit": "iter/sec",
            "range": "stddev: 0.00006016479253019958",
            "extra": "mean: 832.3850437549338 usec\nrounds: 1257"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2213.0325380276795,
            "unit": "iter/sec",
            "range": "stddev: 0.0000601321590945268",
            "extra": "mean: 451.86863853851406 usec\nrounds: 2299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 630.1901169002863,
            "unit": "iter/sec",
            "range": "stddev: 0.00008296382248185607",
            "extra": "mean: 1.586822727272678 msec\nrounds: 660"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 851.907768855438,
            "unit": "iter/sec",
            "range": "stddev: 0.00004785144703851542",
            "extra": "mean: 1.1738359908884597 msec\nrounds: 878"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1107.6330363592226,
            "unit": "iter/sec",
            "range": "stddev: 0.00010353984131085314",
            "extra": "mean: 902.826086956551 usec\nrounds: 1173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1856.5993024969928,
            "unit": "iter/sec",
            "range": "stddev: 0.00016411469048141123",
            "extra": "mean: 538.6191832858451 usec\nrounds: 2106"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 34.537413353097584,
            "unit": "iter/sec",
            "range": "stddev: 0.003901885874404324",
            "extra": "mean: 28.954108108107995 msec\nrounds: 37"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 37.380493088052205,
            "unit": "iter/sec",
            "range": "stddev: 0.0005637246012288368",
            "extra": "mean: 26.751921052631236 msec\nrounds: 38"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 853.5361723195431,
            "unit": "iter/sec",
            "range": "stddev: 0.0004199459716975965",
            "extra": "mean: 1.1715965092404126 msec\nrounds: 974"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1415.9362810498271,
            "unit": "iter/sec",
            "range": "stddev: 0.0001865672928364025",
            "extra": "mean: 706.2464698330657 usec\nrounds: 1558"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1530.674529763725,
            "unit": "iter/sec",
            "range": "stddev: 0.0003310791769579483",
            "extra": "mean: 653.3067484662203 usec\nrounds: 2445"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1486.4909444792725,
            "unit": "iter/sec",
            "range": "stddev: 0.00046981238315928886",
            "extra": "mean: 672.7252552152657 usec\nrounds: 2253"
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
        "date": 1729004290161,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 787.1417101367963,
            "unit": "iter/sec",
            "range": "stddev: 0.00001944913497051693",
            "extra": "mean: 1.2704192740926046 msec\nrounds: 799"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1057.2265554127002,
            "unit": "iter/sec",
            "range": "stddev: 0.000012566594269957951",
            "extra": "mean: 945.8710575139107 usec\nrounds: 1078"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1320.8890990500488,
            "unit": "iter/sec",
            "range": "stddev: 0.000012958829679856678",
            "extra": "mean: 757.0658284023812 usec\nrounds: 1352"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2436.0655191963606,
            "unit": "iter/sec",
            "range": "stddev: 0.0000071055002835381135",
            "extra": "mean: 410.49799035367994 usec\nrounds: 2488"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 626.6557269902074,
            "unit": "iter/sec",
            "range": "stddev: 0.00017130925048092872",
            "extra": "mean: 1.595772538141388 msec\nrounds: 721"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 932.2433057308381,
            "unit": "iter/sec",
            "range": "stddev: 0.00004121315013239923",
            "extra": "mean: 1.072681341719095 msec\nrounds: 954"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1223.0366252209103,
            "unit": "iter/sec",
            "range": "stddev: 0.00003194000976063384",
            "extra": "mean: 817.6370023419173 usec\nrounds: 1281"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2030.7154749009146,
            "unit": "iter/sec",
            "range": "stddev: 0.00009988467127154011",
            "extra": "mean: 492.43727758010675 usec\nrounds: 2248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 39.73884792233636,
            "unit": "iter/sec",
            "range": "stddev: 0.0012292676324524266",
            "extra": "mean: 25.164292682927055 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 36.66101912395894,
            "unit": "iter/sec",
            "range": "stddev: 0.0031941988223547512",
            "extra": "mean: 27.276928571428442 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 985.0625604448609,
            "unit": "iter/sec",
            "range": "stddev: 0.00010823728538168339",
            "extra": "mean: 1.0151639501438297 msec\nrounds: 1043"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1374.4750211963224,
            "unit": "iter/sec",
            "range": "stddev: 0.0003894744434421464",
            "extra": "mean: 727.5505080693391 usec\nrounds: 1673"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1833.4191489180623,
            "unit": "iter/sec",
            "range": "stddev: 0.00015473160698983447",
            "extra": "mean: 545.4290147400937 usec\nrounds: 2578"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 906.6935767938509,
            "unit": "iter/sec",
            "range": "stddev: 0.0004964112105230105",
            "extra": "mean: 1.10290844183113 msec\nrounds: 2381"
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
        "date": 1729005149029,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 689.4656900100105,
            "unit": "iter/sec",
            "range": "stddev: 0.00016017781555189003",
            "extra": "mean: 1.4503984962405903 msec\nrounds: 798"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1039.628061423397,
            "unit": "iter/sec",
            "range": "stddev: 0.0000687290189718351",
            "extra": "mean: 961.8824626865683 usec\nrounds: 1072"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1214.4855663409592,
            "unit": "iter/sec",
            "range": "stddev: 0.00013022951947284345",
            "extra": "mean: 823.393894266551 usec\nrounds: 1343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2349.732447642782,
            "unit": "iter/sec",
            "range": "stddev: 0.000046807836860075426",
            "extra": "mean: 425.5803680981576 usec\nrounds: 2445"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 592.5952639917382,
            "unit": "iter/sec",
            "range": "stddev: 0.0006492752775383362",
            "extra": "mean: 1.68749239280782 msec\nrounds: 723"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 885.8902685930115,
            "unit": "iter/sec",
            "range": "stddev: 0.00018740380125883464",
            "extra": "mean: 1.128807974816362 msec\nrounds: 953"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1243.750666644377,
            "unit": "iter/sec",
            "range": "stddev: 0.00008400407989837854",
            "extra": "mean: 804.0196695516048 usec\nrounds: 1271"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2010.4690737562926,
            "unit": "iter/sec",
            "range": "stddev: 0.00008717727862578626",
            "extra": "mean: 497.3963604083866 usec\nrounds: 2253"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 40.14395622703036,
            "unit": "iter/sec",
            "range": "stddev: 0.0006121069769913946",
            "extra": "mean: 24.91034999999986 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 39.39430320857268,
            "unit": "iter/sec",
            "range": "stddev: 0.0022520447614184317",
            "extra": "mean: 25.384380952380646 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1035.4155808702853,
            "unit": "iter/sec",
            "range": "stddev: 0.000029675750931019782",
            "extra": "mean: 965.7957813996599 usec\nrounds: 1043"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1510.0467843238462,
            "unit": "iter/sec",
            "range": "stddev: 0.00010640361106962156",
            "extra": "mean: 662.2311377244978 usec\nrounds: 1670"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1945.8825459201048,
            "unit": "iter/sec",
            "range": "stddev: 0.00018580293396632352",
            "extra": "mean: 513.9056322267144 usec\nrounds: 2681"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1549.9030755909755,
            "unit": "iter/sec",
            "range": "stddev: 0.00011776571028008293",
            "extra": "mean: 645.2016359917872 usec\nrounds: 2445"
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
        "date": 1729005832750,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 712.4359763911141,
            "unit": "iter/sec",
            "range": "stddev: 0.00012938289580402345",
            "extra": "mean: 1.4036348993288608 msec\nrounds: 745"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 922.0434035516867,
            "unit": "iter/sec",
            "range": "stddev: 0.00017180855539169684",
            "extra": "mean: 1.0845476429287675 msec\nrounds: 997"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1206.1529274469187,
            "unit": "iter/sec",
            "range": "stddev: 0.00006872045936734059",
            "extra": "mean: 829.0822641509601 usec\nrounds: 1325"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2066.0332755284217,
            "unit": "iter/sec",
            "range": "stddev: 0.0001511852176434048",
            "extra": "mean: 484.01930977817074 usec\nrounds: 2434"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 556.9655237498539,
            "unit": "iter/sec",
            "range": "stddev: 0.0006635490997368356",
            "extra": "mean: 1.795443267775984 msec\nrounds: 661"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 796.3199619080148,
            "unit": "iter/sec",
            "range": "stddev: 0.0002665582613634545",
            "extra": "mean: 1.255776632302372 msec\nrounds: 873"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1026.5208450366151,
            "unit": "iter/sec",
            "range": "stddev: 0.0002850399919025311",
            "extra": "mean: 974.1643385374516 usec\nrounds: 1217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1766.4863138467708,
            "unit": "iter/sec",
            "range": "stddev: 0.00017220375449323666",
            "extra": "mean: 566.0955265610636 usec\nrounds: 2146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 33.20345100516821,
            "unit": "iter/sec",
            "range": "stddev: 0.005884590357764033",
            "extra": "mean: 30.117351351350408 msec\nrounds: 37"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 36.40635530649273,
            "unit": "iter/sec",
            "range": "stddev: 0.0013193188777619268",
            "extra": "mean: 27.467731707317032 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 866.9652980294215,
            "unit": "iter/sec",
            "range": "stddev: 0.0001742638658136356",
            "extra": "mean: 1.1534487046632216 msec\nrounds: 965"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1264.522567799069,
            "unit": "iter/sec",
            "range": "stddev: 0.0003862758413923751",
            "extra": "mean: 790.8122998077631 usec\nrounds: 1561"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1551.89523167959,
            "unit": "iter/sec",
            "range": "stddev: 0.00025632504408618995",
            "extra": "mean: 644.3733955659602 usec\nrounds: 2571"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1276.3007879544314,
            "unit": "iter/sec",
            "range": "stddev: 0.00043105838903985345",
            "extra": "mean: 783.5143638849681 usec\nrounds: 2193"
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
        "date": 1729041053841,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 778.4633581486869,
            "unit": "iter/sec",
            "range": "stddev: 0.0000499919840751809",
            "extra": "mean: 1.284581977471828 msec\nrounds: 799"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1022.063765688291,
            "unit": "iter/sec",
            "range": "stddev: 0.00013714126875429773",
            "extra": "mean: 978.4125350795188 usec\nrounds: 1069"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1290.8472599705356,
            "unit": "iter/sec",
            "range": "stddev: 0.00009579901683164606",
            "extra": "mean: 774.6849925705584 usec\nrounds: 1346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2358.9046963911173,
            "unit": "iter/sec",
            "range": "stddev: 0.000048311110111549346",
            "extra": "mean: 423.9255623721881 usec\nrounds: 2445"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 665.5920224699682,
            "unit": "iter/sec",
            "range": "stddev: 0.0001350783620661999",
            "extra": "mean: 1.5024218533886053 msec\nrounds: 723"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 930.8820107052219,
            "unit": "iter/sec",
            "range": "stddev: 0.00003711678179772648",
            "extra": "mean: 1.074249999999909 msec\nrounds: 948"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1218.3784595308286,
            "unit": "iter/sec",
            "range": "stddev: 0.00007507185969814599",
            "extra": "mean: 820.7630331753226 usec\nrounds: 1266"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2108.2107870907075,
            "unit": "iter/sec",
            "range": "stddev: 0.000079787896740563",
            "extra": "mean: 474.3358710254878 usec\nrounds: 2233"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 39.650265318299816,
            "unit": "iter/sec",
            "range": "stddev: 0.0022190131153503588",
            "extra": "mean: 25.220512195121913 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 41.29426291755074,
            "unit": "iter/sec",
            "range": "stddev: 0.0003409419341162088",
            "extra": "mean: 24.216439024390084 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1006.7403664535856,
            "unit": "iter/sec",
            "range": "stddev: 0.00013549933947196966",
            "extra": "mean: 993.3047619046708 usec\nrounds: 1050"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1565.4131800293048,
            "unit": "iter/sec",
            "range": "stddev: 0.00010887451912127714",
            "extra": "mean: 638.8089820358352 usec\nrounds: 1670"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1481.9217524779187,
            "unit": "iter/sec",
            "range": "stddev: 0.000317698553077191",
            "extra": "mean: 674.7994611239776 usec\nrounds: 2598"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1505.0218522410623,
            "unit": "iter/sec",
            "range": "stddev: 0.00010154226228087697",
            "extra": "mean: 664.442179700543 usec\nrounds: 2404"
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
        "date": 1729085695980,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 768.2175219553119,
            "unit": "iter/sec",
            "range": "stddev: 0.00012121887044239066",
            "extra": "mean: 1.3017146464646392 msec\nrounds: 792"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 962.8253494540102,
            "unit": "iter/sec",
            "range": "stddev: 0.00011152414169584813",
            "extra": "mean: 1.0386099624060277 msec\nrounds: 1064"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1283.5486071762793,
            "unit": "iter/sec",
            "range": "stddev: 0.000030469888686959134",
            "extra": "mean: 779.0900900901079 usec\nrounds: 1332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2353.459826585198,
            "unit": "iter/sec",
            "range": "stddev: 0.000022071835847956555",
            "extra": "mean: 424.90633946829297 usec\nrounds: 2445"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 695.9820384216937,
            "unit": "iter/sec",
            "range": "stddev: 0.00006436911745170509",
            "extra": "mean: 1.4368186889818881 msec\nrounds: 717"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 928.564284691751,
            "unit": "iter/sec",
            "range": "stddev: 0.00003106265472474637",
            "extra": "mean: 1.0769313621963859 msec\nrounds: 947"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1218.7245298107034,
            "unit": "iter/sec",
            "range": "stddev: 0.00008495423282095017",
            "extra": "mean: 820.5299684542524 usec\nrounds: 1268"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2119.3958009707944,
            "unit": "iter/sec",
            "range": "stddev: 0.00005618002429605756",
            "extra": "mean: 471.832585278289 usec\nrounds: 2228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 40.56450335526374,
            "unit": "iter/sec",
            "range": "stddev: 0.0009472400682011379",
            "extra": "mean: 24.65209523809535 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 41.89095783674973,
            "unit": "iter/sec",
            "range": "stddev: 0.0005600645977547327",
            "extra": "mean: 23.87150000000069 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 971.8127752422519,
            "unit": "iter/sec",
            "range": "stddev: 0.00015965405726753274",
            "extra": "mean: 1.0290047892720093 msec\nrounds: 1044"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1611.1625334619275,
            "unit": "iter/sec",
            "range": "stddev: 0.00005462071254228582",
            "extra": "mean: 620.6698450536123 usec\nrounds: 1678"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2030.5576432496964,
            "unit": "iter/sec",
            "range": "stddev: 0.0001479867943475291",
            "extra": "mean: 492.4755538580052 usec\nrounds: 2618"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1558.291063307936,
            "unit": "iter/sec",
            "range": "stddev: 0.00017843201823200056",
            "extra": "mean: 641.7286369320522 usec\nrounds: 2399"
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
        "date": 1729173125361,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 788.8675942369773,
            "unit": "iter/sec",
            "range": "stddev: 0.000026224183546942658",
            "extra": "mean: 1.267639851485138 msec\nrounds: 808"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1058.8514564378502,
            "unit": "iter/sec",
            "range": "stddev: 0.00003078301228308798",
            "extra": "mean: 944.4195348837351 usec\nrounds: 1075"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1307.2110603612257,
            "unit": "iter/sec",
            "range": "stddev: 0.0000559576562478835",
            "extra": "mean: 764.9874074073906 usec\nrounds: 1350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2440.7747389673164,
            "unit": "iter/sec",
            "range": "stddev: 0.000009300112990195856",
            "extra": "mean: 409.7059773828603 usec\nrounds: 2476"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 709.5634808707288,
            "unit": "iter/sec",
            "range": "stddev: 0.000021489034297910954",
            "extra": "mean: 1.409317174515333 msec\nrounds: 722"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 945.1983526542692,
            "unit": "iter/sec",
            "range": "stddev: 0.000012988208671395405",
            "extra": "mean: 1.0579789915966726 msec\nrounds: 952"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1242.4974878465828,
            "unit": "iter/sec",
            "range": "stddev: 0.00007481934618027233",
            "extra": "mean: 804.8306010929134 usec\nrounds: 1281"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2120.079107149416,
            "unit": "iter/sec",
            "range": "stddev: 0.00004784401235684217",
            "extra": "mean: 471.68051259396873 usec\nrounds: 2263"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 40.52292362021952,
            "unit": "iter/sec",
            "range": "stddev: 0.0018829907976148864",
            "extra": "mean: 24.677390243902217 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 41.581358878808,
            "unit": "iter/sec",
            "range": "stddev: 0.0011932280425143698",
            "extra": "mean: 24.049238095238188 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1041.3769843854557,
            "unit": "iter/sec",
            "range": "stddev: 0.000020671813655224484",
            "extra": "mean: 960.267045454367 usec\nrounds: 1056"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1590.3319960374201,
            "unit": "iter/sec",
            "range": "stddev: 0.00011191661778795976",
            "extra": "mean: 628.7995226730446 usec\nrounds: 1676"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2078.4303894253835,
            "unit": "iter/sec",
            "range": "stddev: 0.00010169682667446999",
            "extra": "mean: 481.1323030532028 usec\nrounds: 2653"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1406.3592764311168,
            "unit": "iter/sec",
            "range": "stddev: 0.00022451740898455218",
            "extra": "mean: 711.0558566070508 usec\nrounds: 2399"
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
        "date": 1729174837076,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 747.9101682000157,
            "unit": "iter/sec",
            "range": "stddev: 0.0001704002391222414",
            "extra": "mean: 1.337058971141795 msec\nrounds: 797"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1042.4793192658972,
            "unit": "iter/sec",
            "range": "stddev: 0.000018662176768868584",
            "extra": "mean: 959.2516431924897 usec\nrounds: 1065"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1277.6888240873384,
            "unit": "iter/sec",
            "range": "stddev: 0.000035725254272875305",
            "extra": "mean: 782.6631814787194 usec\nrounds: 1339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2398.987568970881,
            "unit": "iter/sec",
            "range": "stddev: 0.000010459815996621663",
            "extra": "mean: 416.84251012145944 usec\nrounds: 2470"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 587.527921718993,
            "unit": "iter/sec",
            "range": "stddev: 0.0002500874734292856",
            "extra": "mean: 1.7020467675377768 msec\nrounds: 727"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 756.5000441224496,
            "unit": "iter/sec",
            "range": "stddev: 0.0002896651623785776",
            "extra": "mean: 1.3218769883351609 msec\nrounds: 943"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1062.046391778276,
            "unit": "iter/sec",
            "range": "stddev: 0.0002715363700969899",
            "extra": "mean: 941.578454332502 usec\nrounds: 1281"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2165.8910695533477,
            "unit": "iter/sec",
            "range": "stddev: 0.000047585908019224866",
            "extra": "mean: 461.70373665478064 usec\nrounds: 2248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 39.604304698133255,
            "unit": "iter/sec",
            "range": "stddev: 0.0013475569841790143",
            "extra": "mean: 25.24978048780477 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 40.43811812551914,
            "unit": "iter/sec",
            "range": "stddev: 0.0013493830852655286",
            "extra": "mean: 24.72914285714333 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 978.6307387167016,
            "unit": "iter/sec",
            "range": "stddev: 0.0001815400365802669",
            "extra": "mean: 1.0218358778626966 msec\nrounds: 1048"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1474.2264696004006,
            "unit": "iter/sec",
            "range": "stddev: 0.00012717164274896764",
            "extra": "mean: 678.3218322426791 usec\nrounds: 1681"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2237.8382721633225,
            "unit": "iter/sec",
            "range": "stddev: 0.00007655504824505366",
            "extra": "mean: 446.8598166539078 usec\nrounds: 2618"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1544.5909699052002,
            "unit": "iter/sec",
            "range": "stddev: 0.00014401272795955066",
            "extra": "mean: 647.4205919133241 usec\nrounds: 2399"
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
        "date": 1729520720056,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 663.7868178128742,
            "unit": "iter/sec",
            "range": "stddev: 0.00022541401872056257",
            "extra": "mean: 1.506507772020725 msec\nrounds: 772"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 899.1753903737205,
            "unit": "iter/sec",
            "range": "stddev: 0.00010360828565391166",
            "extra": "mean: 1.112130081300795 msec\nrounds: 984"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1151.4714634022778,
            "unit": "iter/sec",
            "range": "stddev: 0.0000828269759795869",
            "extra": "mean: 868.4540014958583 usec\nrounds: 1337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2051.25290705158,
            "unit": "iter/sec",
            "range": "stddev: 0.00010046153214521425",
            "extra": "mean: 487.50692640693205 usec\nrounds: 2310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 533.6616782331336,
            "unit": "iter/sec",
            "range": "stddev: 0.0006316150864179724",
            "extra": "mean: 1.8738463726884724 msec\nrounds: 703"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 838.675428148336,
            "unit": "iter/sec",
            "range": "stddev: 0.00010029803092348328",
            "extra": "mean: 1.1923563829786255 msec\nrounds: 940"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 958.1236795953715,
            "unit": "iter/sec",
            "range": "stddev: 0.0004252805934798878",
            "extra": "mean: 1.0437065916399366 msec\nrounds: 1244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2180.569219004363,
            "unit": "iter/sec",
            "range": "stddev: 0.000037984579644475926",
            "extra": "mean: 458.5958525345942 usec\nrounds: 2170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 37.18567897875386,
            "unit": "iter/sec",
            "range": "stddev: 0.0036187434793742996",
            "extra": "mean: 26.892073170732008 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 35.735687857012984,
            "unit": "iter/sec",
            "range": "stddev: 0.0013434599569283592",
            "extra": "mean: 27.98323076923099 msec\nrounds: 39"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 935.8098491317105,
            "unit": "iter/sec",
            "range": "stddev: 0.00014541263139378994",
            "extra": "mean: 1.068593155893634 msec\nrounds: 1052"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1618.8241133058882,
            "unit": "iter/sec",
            "range": "stddev: 0.000018267819077193104",
            "extra": "mean: 617.7323353294051 usec\nrounds: 1670"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2193.575956128502,
            "unit": "iter/sec",
            "range": "stddev: 0.00011426390684993645",
            "extra": "mean: 455.87662337661897 usec\nrounds: 2618"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1581.6793568589121,
            "unit": "iter/sec",
            "range": "stddev: 0.00017828871348158165",
            "extra": "mean: 632.2393952121367 usec\nrounds: 2381"
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
        "date": 1729521446742,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 689.8943494677503,
            "unit": "iter/sec",
            "range": "stddev: 0.00019834485669901453",
            "extra": "mean: 1.4494973045822082 msec\nrounds: 742"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 904.905166301247,
            "unit": "iter/sec",
            "range": "stddev: 0.00040563171412375947",
            "extra": "mean: 1.10508817635272 msec\nrounds: 998"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1143.054916729977,
            "unit": "iter/sec",
            "range": "stddev: 0.00018427902798622928",
            "extra": "mean: 874.8486055777399 usec\nrounds: 1255"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2187.3053359508103,
            "unit": "iter/sec",
            "range": "stddev: 0.00006940302652674613",
            "extra": "mean: 457.1835415768806 usec\nrounds: 2321"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 608.5420666125594,
            "unit": "iter/sec",
            "range": "stddev: 0.00040890360613681767",
            "extra": "mean: 1.6432717717716467 msec\nrounds: 666"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 803.6384917033066,
            "unit": "iter/sec",
            "range": "stddev: 0.0003836652618034659",
            "extra": "mean: 1.244340596330206 msec\nrounds: 872"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1050.1665352847644,
            "unit": "iter/sec",
            "range": "stddev: 0.0003667138280630286",
            "extra": "mean: 952.2299239223414 usec\nrounds: 1183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1808.774877096032,
            "unit": "iter/sec",
            "range": "stddev: 0.0002618806013928273",
            "extra": "mean: 552.8603988604093 usec\nrounds: 2106"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 34.82644663882349,
            "unit": "iter/sec",
            "range": "stddev: 0.0017193733974562408",
            "extra": "mean: 28.71381081081151 msec\nrounds: 37"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 35.235232265086744,
            "unit": "iter/sec",
            "range": "stddev: 0.0032184784226467",
            "extra": "mean: 28.380684210527033 msec\nrounds: 38"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 862.2515218963014,
            "unit": "iter/sec",
            "range": "stddev: 0.0003267810133697967",
            "extra": "mean: 1.1597544041450412 msec\nrounds: 965"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1321.1621059012864,
            "unit": "iter/sec",
            "range": "stddev: 0.0003702373794731371",
            "extra": "mean: 756.9093872230069 usec\nrounds: 1534"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1576.4153994647354,
            "unit": "iter/sec",
            "range": "stddev: 0.0003587401410094786",
            "extra": "mean: 634.350565428088 usec\nrounds: 2476"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1279.5952340026515,
            "unit": "iter/sec",
            "range": "stddev: 0.0005878401600910534",
            "extra": "mean: 781.4971277065009 usec\nrounds: 2263"
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
        "date": 1729606252307,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 688.4308971250315,
            "unit": "iter/sec",
            "range": "stddev: 0.00026918708633863497",
            "extra": "mean: 1.452578616352226 msec\nrounds: 795"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1041.4427137472503,
            "unit": "iter/sec",
            "range": "stddev: 0.000017898211306557183",
            "extra": "mean: 960.2064393939309 usec\nrounds: 1056"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1312.7893992988006,
            "unit": "iter/sec",
            "range": "stddev: 0.000025327480550202797",
            "extra": "mean: 761.7368029739799 usec\nrounds: 1345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2372.9650445113325,
            "unit": "iter/sec",
            "range": "stddev: 0.00002334770450970894",
            "extra": "mean: 421.41370869031533 usec\nrounds: 2451"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 641.2266329860443,
            "unit": "iter/sec",
            "range": "stddev: 0.0004078711754223944",
            "extra": "mean: 1.5595110192838235 msec\nrounds: 726"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 820.0894849506079,
            "unit": "iter/sec",
            "range": "stddev: 0.00022825112192456895",
            "extra": "mean: 1.2193791267305758 msec\nrounds: 939"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1161.911924703054,
            "unit": "iter/sec",
            "range": "stddev: 0.00016649906850518202",
            "extra": "mean: 860.650432050232 usec\nrounds: 1273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2158.783192620795,
            "unit": "iter/sec",
            "range": "stddev: 0.00004424170964493145",
            "extra": "mean: 463.22391401703715 usec\nrounds: 2233"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 40.083530166278415,
            "unit": "iter/sec",
            "range": "stddev: 0.0008282381241191026",
            "extra": "mean: 24.947902439024265 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 33.64378615681316,
            "unit": "iter/sec",
            "range": "stddev: 0.004672600672551205",
            "extra": "mean: 29.723170731707064 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 978.4612582625571,
            "unit": "iter/sec",
            "range": "stddev: 0.00027007998821148655",
            "extra": "mean: 1.022012871286993 msec\nrounds: 1010"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1611.3691151967857,
            "unit": "iter/sec",
            "range": "stddev: 0.000085164031809799",
            "extra": "mean: 620.5902735562092 usec\nrounds: 1645"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1693.347178633847,
            "unit": "iter/sec",
            "range": "stddev: 0.0004089312991551404",
            "extra": "mean: 590.5463525836307 usec\nrounds: 2632"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1455.6341049185055,
            "unit": "iter/sec",
            "range": "stddev: 0.00016255912829201278",
            "extra": "mean: 686.9858274280991 usec\nrounds: 2399"
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
        "date": 1729607384582,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 770.8530288706351,
            "unit": "iter/sec",
            "range": "stddev: 0.000102742779556575",
            "extra": "mean: 1.2972641509433838 msec\nrounds: 795"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1036.6973453004896,
            "unit": "iter/sec",
            "range": "stddev: 0.00007127692812337995",
            "extra": "mean: 964.601679104471 usec\nrounds: 1072"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1315.9904931532287,
            "unit": "iter/sec",
            "range": "stddev: 0.00006271953008528312",
            "extra": "mean: 759.8839088904907 usec\nrounds: 1361"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2406.6660906796405,
            "unit": "iter/sec",
            "range": "stddev: 0.000035581714426366336",
            "extra": "mean: 415.5125648184958 usec\nrounds: 2507"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 698.0594922422409,
            "unit": "iter/sec",
            "range": "stddev: 0.00004223151227197755",
            "extra": "mean: 1.432542657342706 msec\nrounds: 715"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 829.0286489116266,
            "unit": "iter/sec",
            "range": "stddev: 0.0003118090098069704",
            "extra": "mean: 1.2062309322034042 msec\nrounds: 944"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1250.1886060397226,
            "unit": "iter/sec",
            "range": "stddev: 0.00002172107341789358",
            "extra": "mean: 799.8793103448158 usec\nrounds: 1276"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2156.989960175055,
            "unit": "iter/sec",
            "range": "stddev: 0.00006431120220422831",
            "extra": "mean: 463.60901926443967 usec\nrounds: 2284"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 35.83465018389269,
            "unit": "iter/sec",
            "range": "stddev: 0.002404939229494289",
            "extra": "mean: 27.905951219512385 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 41.906799278404606,
            "unit": "iter/sec",
            "range": "stddev: 0.00029236314189061343",
            "extra": "mean: 23.862476190476315 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 903.514603097717,
            "unit": "iter/sec",
            "range": "stddev: 0.00044140380587421804",
            "extra": "mean: 1.1067889733840284 msec\nrounds: 1052"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1473.689023478796,
            "unit": "iter/sec",
            "range": "stddev: 0.00020874781038649116",
            "extra": "mean: 678.5692124104963 usec\nrounds: 1676"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1619.7144833490588,
            "unit": "iter/sec",
            "range": "stddev: 0.00026298391919946914",
            "extra": "mean: 617.392762909865 usec\nrounds: 2653"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1527.628534626693,
            "unit": "iter/sec",
            "range": "stddev: 0.0001168172066525464",
            "extra": "mean: 654.6094009983718 usec\nrounds: 2404"
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
        "date": 1729694773529,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 768.9534562636176,
            "unit": "iter/sec",
            "range": "stddev: 0.00007663596291793179",
            "extra": "mean: 1.3004688279301702 msec\nrounds: 802"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1050.401641448547,
            "unit": "iter/sec",
            "range": "stddev: 0.00003486599259381921",
            "extra": "mean: 952.0167910447653 usec\nrounds: 1072"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1229.6088357860397,
            "unit": "iter/sec",
            "range": "stddev: 0.00008318610932116812",
            "extra": "mean: 813.2667649226349 usec\nrounds: 1357"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2422.8949876605225,
            "unit": "iter/sec",
            "range": "stddev: 0.000015685375025896144",
            "extra": "mean: 412.72940226170147 usec\nrounds: 2476"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 704.8191765787777,
            "unit": "iter/sec",
            "range": "stddev: 0.000027155970563033554",
            "extra": "mean: 1.418803621169961 msec\nrounds: 718"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 924.3921777973121,
            "unit": "iter/sec",
            "range": "stddev: 0.00002315183947961755",
            "extra": "mean: 1.0817919320594533 msec\nrounds: 942"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1216.167653344917,
            "unit": "iter/sec",
            "range": "stddev: 0.00012376111777953193",
            "extra": "mean: 822.2550544323598 usec\nrounds: 1286"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2027.5688024987012,
            "unit": "iter/sec",
            "range": "stddev: 0.00010734274722896409",
            "extra": "mean: 493.2015124555264 usec\nrounds: 2248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 39.22619161516234,
            "unit": "iter/sec",
            "range": "stddev: 0.0017038280708805541",
            "extra": "mean: 25.49317073170733 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 38.457714336098505,
            "unit": "iter/sec",
            "range": "stddev: 0.001387990237278331",
            "extra": "mean: 26.00258536585326 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1018.3220229626371,
            "unit": "iter/sec",
            "range": "stddev: 0.00007463551637529271",
            "extra": "mean: 982.0076335879172 usec\nrounds: 1048"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1529.2038753197364,
            "unit": "iter/sec",
            "range": "stddev: 0.0002558695836551809",
            "extra": "mean: 653.9350417163396 usec\nrounds: 1678"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1507.5667030422908,
            "unit": "iter/sec",
            "range": "stddev: 0.0005867670821473562",
            "extra": "mean: 663.3205668326224 usec\nrounds: 2611"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1494.0596943038747,
            "unit": "iter/sec",
            "range": "stddev: 0.00013371001395043273",
            "extra": "mean: 669.3172995781329 usec\nrounds: 2370"
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
        "date": 1729695520273,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 775.5294479885274,
            "unit": "iter/sec",
            "range": "stddev: 0.00008397984643848628",
            "extra": "mean: 1.2894416873449186 msec\nrounds: 806"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1059.7401579815821,
            "unit": "iter/sec",
            "range": "stddev: 0.00001990571901840827",
            "extra": "mean: 943.6275415896616 usec\nrounds: 1082"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1342.245002884652,
            "unit": "iter/sec",
            "range": "stddev: 0.000023836332740673543",
            "extra": "mean: 745.0204678362559 usec\nrounds: 1368"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2372.2636329818497,
            "unit": "iter/sec",
            "range": "stddev: 0.00003567836893701266",
            "extra": "mean: 421.538308852729 usec\nrounds: 2519"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 708.231855820756,
            "unit": "iter/sec",
            "range": "stddev: 0.0000613850827585108",
            "extra": "mean: 1.411966987620346 msec\nrounds: 727"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 931.2850269087049,
            "unit": "iter/sec",
            "range": "stddev: 0.00003746588442758966",
            "extra": "mean: 1.0737851153039437 msec\nrounds: 954"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1227.6907366717562,
            "unit": "iter/sec",
            "range": "stddev: 0.0000879165231753679",
            "extra": "mean: 814.5373831776062 usec\nrounds: 1284"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2183.7080678247457,
            "unit": "iter/sec",
            "range": "stddev: 0.00004752862600219828",
            "extra": "mean: 457.9366696190891 usec\nrounds: 2258"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 39.327103664326046,
            "unit": "iter/sec",
            "range": "stddev: 0.0019075194596712348",
            "extra": "mean: 25.427756097561506 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 35.314416017274276,
            "unit": "iter/sec",
            "range": "stddev: 0.004408738545055012",
            "extra": "mean: 28.317047619047234 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 951.8750124650627,
            "unit": "iter/sec",
            "range": "stddev: 0.00024280773218851093",
            "extra": "mean: 1.050558095238059 msec\nrounds: 1050"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1306.4761526756818,
            "unit": "iter/sec",
            "range": "stddev: 0.0002330809790048204",
            "extra": "mean: 765.4177215190539 usec\nrounds: 1659"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1955.089505534675,
            "unit": "iter/sec",
            "range": "stddev: 0.00016504875249378353",
            "extra": "mean: 511.4855341247005 usec\nrounds: 2696"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1224.9210564679713,
            "unit": "iter/sec",
            "range": "stddev: 0.0005007414917350773",
            "extra": "mean: 816.3791411043863 usec\nrounds: 2445"
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
        "date": 1729696730540,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 594.9556152237188,
            "unit": "iter/sec",
            "range": "stddev: 0.0014964851916860504",
            "extra": "mean: 1.6807976501305462 msec\nrounds: 766"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 654.6092135940871,
            "unit": "iter/sec",
            "range": "stddev: 0.001014956295723225",
            "extra": "mean: 1.5276289719626286 msec\nrounds: 1070"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 949.2379008412581,
            "unit": "iter/sec",
            "range": "stddev: 0.0005612389770137312",
            "extra": "mean: 1.0534766881029025 msec\nrounds: 1244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1732.4928484305615,
            "unit": "iter/sec",
            "range": "stddev: 0.00025649551552346314",
            "extra": "mean: 577.2029598309076 usec\nrounds: 2365"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 463.53616695399,
            "unit": "iter/sec",
            "range": "stddev: 0.0009964631825264926",
            "extra": "mean: 2.1573289665210926 msec\nrounds: 687"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 664.0738998111904,
            "unit": "iter/sec",
            "range": "stddev: 0.0007026517127577221",
            "extra": "mean: 1.5058565022421757 msec\nrounds: 892"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 691.6619779145379,
            "unit": "iter/sec",
            "range": "stddev: 0.0009027267000134377",
            "extra": "mean: 1.4457929334429316 msec\nrounds: 1217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1367.1232017726195,
            "unit": "iter/sec",
            "range": "stddev: 0.0005962885193174442",
            "extra": "mean: 731.4629718107296 usec\nrounds: 2093"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.751179670420726,
            "unit": "iter/sec",
            "range": "stddev: 0.009838122403868608",
            "extra": "mean: 38.83317241379264 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.760969810803296,
            "unit": "iter/sec",
            "range": "stddev: 0.007543663191029805",
            "extra": "mean: 33.601055555555114 msec\nrounds: 36"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 638.5900978581842,
            "unit": "iter/sec",
            "range": "stddev: 0.0009634635524910648",
            "extra": "mean: 1.5659497435897862 msec\nrounds: 975"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 731.7125627332065,
            "unit": "iter/sec",
            "range": "stddev: 0.0012104902582977606",
            "extra": "mean: 1.366656869009662 msec\nrounds: 1565"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 998.2773190939456,
            "unit": "iter/sec",
            "range": "stddev: 0.0009935565360668765",
            "extra": "mean: 1.0017256536566592 msec\nrounds: 2639"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 942.1185400417623,
            "unit": "iter/sec",
            "range": "stddev: 0.0007617606758626823",
            "extra": "mean: 1.061437555358662 msec\nrounds: 2258"
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
        "date": 1729698541045,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 657.6441069833404,
            "unit": "iter/sec",
            "range": "stddev: 0.00042720498185295483",
            "extra": "mean: 1.5205792759051246 msec\nrounds: 801"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 998.3789160270967,
            "unit": "iter/sec",
            "range": "stddev: 0.000058072170354902286",
            "extra": "mean: 1.0016237161531356 msec\nrounds: 1071"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1278.938242828488,
            "unit": "iter/sec",
            "range": "stddev: 0.00006821443476222116",
            "extra": "mean: 781.8985831469151 usec\nrounds: 1341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2343.722770001591,
            "unit": "iter/sec",
            "range": "stddev: 0.00006452127603336324",
            "extra": "mean: 426.6716237941919 usec\nrounds: 2488"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 699.4420909352534,
            "unit": "iter/sec",
            "range": "stddev: 0.00017801765678429425",
            "extra": "mean: 1.4297109266942427 msec\nrounds: 723"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 889.6522208996684,
            "unit": "iter/sec",
            "range": "stddev: 0.0001286575242228757",
            "extra": "mean: 1.124034736842158 msec\nrounds: 950"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1235.4682753190411,
            "unit": "iter/sec",
            "range": "stddev: 0.00003905262409841266",
            "extra": "mean: 809.4096950743352 usec\nrounds: 1279"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2173.696048873667,
            "unit": "iter/sec",
            "range": "stddev: 0.000036016055185473394",
            "extra": "mean: 460.0459206420166 usec\nrounds: 2243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 40.4974709329397,
            "unit": "iter/sec",
            "range": "stddev: 0.0006403296747045752",
            "extra": "mean: 24.69290000000033 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 41.16412135182868,
            "unit": "iter/sec",
            "range": "stddev: 0.0007319902704948443",
            "extra": "mean: 24.293000000000628 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1011.2265594766269,
            "unit": "iter/sec",
            "range": "stddev: 0.00008184961912124121",
            "extra": "mean: 988.8980769231009 usec\nrounds: 1040"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1600.8800973674427,
            "unit": "iter/sec",
            "range": "stddev: 0.00006285148414075944",
            "extra": "mean: 624.656400966221 usec\nrounds: 1656"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1783.8297236464969,
            "unit": "iter/sec",
            "range": "stddev: 0.0002511665071434718",
            "extra": "mean: 560.5916230366452 usec\nrounds: 2674"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1495.5316207373742,
            "unit": "iter/sec",
            "range": "stddev: 0.00022322688711290162",
            "extra": "mean: 668.6585466557694 usec\nrounds: 2422"
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
        "date": 1729777161415,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 794.4260712982731,
            "unit": "iter/sec",
            "range": "stddev: 0.00002611222544208883",
            "extra": "mean: 1.2587703703703634 msec\nrounds: 810"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1056.225903009456,
            "unit": "iter/sec",
            "range": "stddev: 0.000021188953112310265",
            "extra": "mean: 946.7671614100221 usec\nrounds: 1078"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1340.2145531067242,
            "unit": "iter/sec",
            "range": "stddev: 0.000009596665167665612",
            "extra": "mean: 746.14918759233 usec\nrounds: 1354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2451.576921674724,
            "unit": "iter/sec",
            "range": "stddev: 0.000011087843836368465",
            "extra": "mean: 407.9007234726614 usec\nrounds: 2488"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 719.1551404815654,
            "unit": "iter/sec",
            "range": "stddev: 0.00002237987876731208",
            "extra": "mean: 1.3905205479451535 msec\nrounds: 730"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 941.3770748040006,
            "unit": "iter/sec",
            "range": "stddev: 0.000011107582010053632",
            "extra": "mean: 1.0622735849056075 msec\nrounds: 954"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1266.2309806485616,
            "unit": "iter/sec",
            "range": "stddev: 0.000010714669759691627",
            "extra": "mean: 789.745327102802 usec\nrounds: 1284"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2241.622254403436,
            "unit": "iter/sec",
            "range": "stddev: 0.000011270849184495548",
            "extra": "mean: 446.10549258939733 usec\nrounds: 2294"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 39.174132842351,
            "unit": "iter/sec",
            "range": "stddev: 0.0006674596973307885",
            "extra": "mean: 25.52704878048772 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 39.83738757794438,
            "unit": "iter/sec",
            "range": "stddev: 0.0004594396880389621",
            "extra": "mean: 25.102047619047227 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 987.3257631892459,
            "unit": "iter/sec",
            "range": "stddev: 0.000043150384524506425",
            "extra": "mean: 1.0128369351669848 msec\nrounds: 1018"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1557.4984207667499,
            "unit": "iter/sec",
            "range": "stddev: 0.000035605115096612636",
            "extra": "mean: 642.0552256532653 usec\nrounds: 1684"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2496.6955500074823,
            "unit": "iter/sec",
            "range": "stddev: 0.000020657464557042542",
            "extra": "mean: 400.52941176468363 usec\nrounds: 2584"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 2159.933800804348,
            "unit": "iter/sec",
            "range": "stddev: 0.00003666715552220396",
            "extra": "mean: 462.9771521829074 usec\nrounds: 2451"
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
        "date": 1730123822939,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 412.68932892907327,
            "unit": "iter/sec",
            "range": "stddev: 0.0016067683774829969",
            "extra": "mean: 2.423130257801904 msec\nrounds: 737"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 500.70261527887794,
            "unit": "iter/sec",
            "range": "stddev: 0.0013849918517438475",
            "extra": "mean: 1.9971934826883753 msec\nrounds: 982"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 719.3475891053914,
            "unit": "iter/sec",
            "range": "stddev: 0.0010288094567548057",
            "extra": "mean: 1.390148538961031 msec\nrounds: 1232"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1448.1178855722028,
            "unit": "iter/sec",
            "range": "stddev: 0.00056509164024534",
            "extra": "mean: 690.551515151589 usec\nrounds: 2310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 422.8712191555499,
            "unit": "iter/sec",
            "range": "stddev: 0.0015589591916195813",
            "extra": "mean: 2.3647861445783516 msec\nrounds: 664"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 563.0409617125682,
            "unit": "iter/sec",
            "range": "stddev: 0.0012013906247967145",
            "extra": "mean: 1.7760697142857234 msec\nrounds: 875"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 684.7902749236616,
            "unit": "iter/sec",
            "range": "stddev: 0.0013003078257812514",
            "extra": "mean: 1.4603011120616118 msec\nrounds: 1169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1360.5025519196288,
            "unit": "iter/sec",
            "range": "stddev: 0.000574005020247094",
            "extra": "mean: 735.0225095785595 usec\nrounds: 2088"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.765785872314044,
            "unit": "iter/sec",
            "range": "stddev: 0.01532606503479043",
            "extra": "mean: 56.28796874999975 msec\nrounds: 32"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.989921491268046,
            "unit": "iter/sec",
            "range": "stddev: 0.0061930851642854725",
            "extra": "mean: 41.684171428571965 msec\nrounds: 35"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 647.3344010826529,
            "unit": "iter/sec",
            "range": "stddev: 0.0011119781332982045",
            "extra": "mean: 1.544796628029534 msec\nrounds: 949"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 947.5883724550907,
            "unit": "iter/sec",
            "range": "stddev: 0.0008079007541555836",
            "extra": "mean: 1.0553105431307868 msec\nrounds: 1565"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1050.6137716732092,
            "unit": "iter/sec",
            "range": "stddev: 0.000781023789337636",
            "extra": "mean: 951.824568611354 usec\nrounds: 2434"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 974.1805243811817,
            "unit": "iter/sec",
            "range": "stddev: 0.0008605075496244848",
            "extra": "mean: 1.026503789567359 msec\nrounds: 2243"
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
        "date": 1730126721386,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 535.9837253120943,
            "unit": "iter/sec",
            "range": "stddev: 0.0007436382146134852",
            "extra": "mean: 1.8657282913165263 msec\nrounds: 714"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 805.0938685007767,
            "unit": "iter/sec",
            "range": "stddev: 0.0004184388481305793",
            "extra": "mean: 1.2420911885246029 msec\nrounds: 976"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 836.9618623248327,
            "unit": "iter/sec",
            "range": "stddev: 0.0007660548142516884",
            "extra": "mean: 1.1947975708502363 msec\nrounds: 1235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2120.2740660632653,
            "unit": "iter/sec",
            "range": "stddev: 0.0001393138062051509",
            "extra": "mean: 471.63714163457666 usec\nrounds: 2337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 453.03075680779426,
            "unit": "iter/sec",
            "range": "stddev: 0.0011155517876526352",
            "extra": "mean: 2.2073556485355064 msec\nrounds: 717"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 786.4690159929556,
            "unit": "iter/sec",
            "range": "stddev: 0.00041737725736444434",
            "extra": "mean: 1.2715059076261905 msec\nrounds: 931"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1039.1298887736684,
            "unit": "iter/sec",
            "range": "stddev: 0.00029593475610027644",
            "extra": "mean: 962.3436018957672 usec\nrounds: 1266"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2117.537158438698,
            "unit": "iter/sec",
            "range": "stddev: 0.00006450593318984353",
            "extra": "mean: 472.2467306015634 usec\nrounds: 2294"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 36.951098537210626,
            "unit": "iter/sec",
            "range": "stddev: 0.002353401291965245",
            "extra": "mean: 27.062794871794583 msec\nrounds: 39"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 41.44180172377198,
            "unit": "iter/sec",
            "range": "stddev: 0.0003530772042761766",
            "extra": "mean: 24.13022499999986 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1008.2824568417954,
            "unit": "iter/sec",
            "range": "stddev: 0.000105982786059514",
            "extra": "mean: 991.7855787477071 usec\nrounds: 1054"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1373.3782971750272,
            "unit": "iter/sec",
            "range": "stddev: 0.00017529393474556988",
            "extra": "mean: 728.1315002988993 usec\nrounds: 1673"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1671.7533853473403,
            "unit": "iter/sec",
            "range": "stddev: 0.00022047254536100642",
            "extra": "mean: 598.1743532059485 usec\nrounds: 2667"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1318.3419231094886,
            "unit": "iter/sec",
            "range": "stddev: 0.00026042975315200984",
            "extra": "mean: 758.5285596026289 usec\nrounds: 2416"
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
        "date": 1730128731697,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 442.6998240981258,
            "unit": "iter/sec",
            "range": "stddev: 0.001873990716057821",
            "extra": "mean: 2.2588669467786975 msec\nrounds: 714"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 627.5363728013976,
            "unit": "iter/sec",
            "range": "stddev: 0.0009881206818043386",
            "extra": "mean: 1.5935331294596995 msec\nrounds: 981"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 744.6160509218221,
            "unit": "iter/sec",
            "range": "stddev: 0.0010389438700802972",
            "extra": "mean: 1.3429740048740784 msec\nrounds: 1231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1444.6005580512726,
            "unit": "iter/sec",
            "range": "stddev: 0.000652250460521972",
            "extra": "mean: 692.2328767122817 usec\nrounds: 2263"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 441.40695080545913,
            "unit": "iter/sec",
            "range": "stddev: 0.0012160613772093482",
            "extra": "mean: 2.2654831288343913 msec\nrounds: 652"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 605.0335349155864,
            "unit": "iter/sec",
            "range": "stddev: 0.0009820579926965584",
            "extra": "mean: 1.6528009478673258 msec\nrounds: 844"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 790.7574645477001,
            "unit": "iter/sec",
            "range": "stddev: 0.0007369686648000695",
            "extra": "mean: 1.2646102564102675 msec\nrounds: 1170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1386.6889540524737,
            "unit": "iter/sec",
            "range": "stddev: 0.0006145578206808036",
            "extra": "mean: 721.142255498315 usec\nrounds: 2137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 31.19490831647775,
            "unit": "iter/sec",
            "range": "stddev: 0.009039624616166557",
            "extra": "mean: 32.05651351351403 msec\nrounds: 37"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 30.91983414600989,
            "unit": "iter/sec",
            "range": "stddev: 0.005020643758906404",
            "extra": "mean: 32.34169999999974 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 669.2231908404857,
            "unit": "iter/sec",
            "range": "stddev: 0.0007808146290059053",
            "extra": "mean: 1.4942697947213806 msec\nrounds: 1023"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1202.2832059980085,
            "unit": "iter/sec",
            "range": "stddev: 0.00039196238351260875",
            "extra": "mean: 831.7507846829697 usec\nrounds: 1593"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1055.7023981112802,
            "unit": "iter/sec",
            "range": "stddev: 0.000829227937570542",
            "extra": "mean: 947.2366471735448 usec\nrounds: 2565"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1222.8598393702812,
            "unit": "iter/sec",
            "range": "stddev: 0.0004987188019835835",
            "extra": "mean: 817.7552061199063 usec\nrounds: 2353"
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
        "date": 1730296940666,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 786.7462901354208,
            "unit": "iter/sec",
            "range": "stddev: 0.000023372545893004854",
            "extra": "mean: 1.2710577889447336 msec\nrounds: 796"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1042.5791263966282,
            "unit": "iter/sec",
            "range": "stddev: 0.00002006695229310329",
            "extra": "mean: 959.1598130841247 usec\nrounds: 1070"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1324.3510630667543,
            "unit": "iter/sec",
            "range": "stddev: 0.000016066510909159338",
            "extra": "mean: 755.0867952522606 usec\nrounds: 1348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2329.066921609565,
            "unit": "iter/sec",
            "range": "stddev: 0.00003535418133626054",
            "extra": "mean: 429.35649067091765 usec\nrounds: 2519"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 624.2376846012996,
            "unit": "iter/sec",
            "range": "stddev: 0.000379321941015442",
            "extra": "mean: 1.6019539106145118 msec\nrounds: 716"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 823.258199909537,
            "unit": "iter/sec",
            "range": "stddev: 0.00016177974868029338",
            "extra": "mean: 1.2146857451403268 msec\nrounds: 926"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1175.2446175752382,
            "unit": "iter/sec",
            "range": "stddev: 0.0000893043819635031",
            "extra": "mean: 850.8866877971307 usec\nrounds: 1262"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2033.6160958238488,
            "unit": "iter/sec",
            "range": "stddev: 0.00007886220123416951",
            "extra": "mean: 491.7348963029744 usec\nrounds: 2218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 37.94579006053885,
            "unit": "iter/sec",
            "range": "stddev: 0.0008855622244883599",
            "extra": "mean: 26.35338461538412 msec\nrounds: 39"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 41.74817500835003,
            "unit": "iter/sec",
            "range": "stddev: 0.00021771771513631757",
            "extra": "mean: 23.95314285714263 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 944.5971658475204,
            "unit": "iter/sec",
            "range": "stddev: 0.00014325046408512627",
            "extra": "mean: 1.0586523400192192 msec\nrounds: 1047"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1442.049655998673,
            "unit": "iter/sec",
            "range": "stddev: 0.00013216578531941543",
            "extra": "mean: 693.4573964496824 usec\nrounds: 1690"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1767.9415550616654,
            "unit": "iter/sec",
            "range": "stddev: 0.0002913122487002274",
            "extra": "mean: 565.6295577967339 usec\nrounds: 2578"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1584.958728134815,
            "unit": "iter/sec",
            "range": "stddev: 0.00021682371567432717",
            "extra": "mean: 630.9312553373574 usec\nrounds: 2342"
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
        "date": 1730731735318,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 498.700684317205,
            "unit": "iter/sec",
            "range": "stddev: 0.0010837828138945244",
            "extra": "mean: 2.0052108036890863 msec\nrounds: 759"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 629.6128105390778,
            "unit": "iter/sec",
            "range": "stddev: 0.0009301149487586952",
            "extra": "mean: 1.5882777212614125 msec\nrounds: 983"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 948.5548487892032,
            "unit": "iter/sec",
            "range": "stddev: 0.0005940774912461767",
            "extra": "mean: 1.0542352941176407 msec\nrounds: 1224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1960.1503102332797,
            "unit": "iter/sec",
            "range": "stddev: 0.00021266261864553434",
            "extra": "mean: 510.164957646023 usec\nrounds: 2243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 460.91139757618595,
            "unit": "iter/sec",
            "range": "stddev: 0.001052187937716916",
            "extra": "mean: 2.1696143884892884 msec\nrounds: 695"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 636.6040968348092,
            "unit": "iter/sec",
            "range": "stddev: 0.0009915129906828616",
            "extra": "mean: 1.5708350055740963 msec\nrounds: 897"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1000.7314949587228,
            "unit": "iter/sec",
            "range": "stddev: 0.00041747030966877427",
            "extra": "mean: 999.2690397350259 usec\nrounds: 1208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1707.5025235643036,
            "unit": "iter/sec",
            "range": "stddev: 0.0001996971154543849",
            "extra": "mean: 585.6506717849899 usec\nrounds: 2084"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 31.88990188540048,
            "unit": "iter/sec",
            "range": "stddev: 0.004039771158849685",
            "extra": "mean: 31.357888888890255 msec\nrounds: 36"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 33.990803599247386,
            "unit": "iter/sec",
            "range": "stddev: 0.00323119647553266",
            "extra": "mean: 29.419722222223125 msec\nrounds: 36"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 871.0092831492785,
            "unit": "iter/sec",
            "range": "stddev: 0.0002282712862689379",
            "extra": "mean: 1.1480933892969936 msec\nrounds: 953"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1332.7769450881394,
            "unit": "iter/sec",
            "range": "stddev: 0.00019399190958799528",
            "extra": "mean: 750.3130990413913 usec\nrounds: 1565"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1514.0887795841027,
            "unit": "iter/sec",
            "range": "stddev: 0.0004132279495688968",
            "extra": "mean: 660.4632525410333 usec\nrounds: 2558"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 857.5260227156548,
            "unit": "iter/sec",
            "range": "stddev: 0.0008688104793092311",
            "extra": "mean: 1.1661453687821062 msec\nrounds: 2332"
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
        "date": 1730735100136,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 690.2729113871775,
            "unit": "iter/sec",
            "range": "stddev: 0.00015706430797534355",
            "extra": "mean: 1.4487023661270333 msec\nrounds: 803"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 958.3782387573202,
            "unit": "iter/sec",
            "range": "stddev: 0.0001701407287060469",
            "extra": "mean: 1.043429368029734 msec\nrounds: 1076"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1217.0961559896978,
            "unit": "iter/sec",
            "range": "stddev: 0.00007331987242509828",
            "extra": "mean: 821.6277695716135 usec\nrounds: 1354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2170.3689898692787,
            "unit": "iter/sec",
            "range": "stddev: 0.00007596381659826473",
            "extra": "mean: 460.75114631094596 usec\nrounds: 2399"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 637.528374146469,
            "unit": "iter/sec",
            "range": "stddev: 0.00016572593901008245",
            "extra": "mean: 1.5685576368876326 msec\nrounds: 694"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 879.2809691886674,
            "unit": "iter/sec",
            "range": "stddev: 0.00013227928441422927",
            "extra": "mean: 1.13729289617484 msec\nrounds: 915"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1117.9229533443595,
            "unit": "iter/sec",
            "range": "stddev: 0.00023801029590274467",
            "extra": "mean: 894.5160281470354 usec\nrounds: 1279"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2158.8207772322157,
            "unit": "iter/sec",
            "range": "stddev: 0.00003859078405808001",
            "extra": "mean: 463.215849387035 usec\nrounds: 2284"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 34.70857379867125,
            "unit": "iter/sec",
            "range": "stddev: 0.004200931150672667",
            "extra": "mean: 28.811324999999943 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.723101660613683,
            "unit": "iter/sec",
            "range": "stddev: 0.013694164004108632",
            "extra": "mean: 36.07100000000014 msec\nrounds: 36"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 698.2843491537761,
            "unit": "iter/sec",
            "range": "stddev: 0.0006822226611254",
            "extra": "mean: 1.4320813594230797 msec\nrounds: 971"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1261.8132984586696,
            "unit": "iter/sec",
            "range": "stddev: 0.0002907939637794072",
            "extra": "mean: 792.5102717030485 usec\nrounds: 1509"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1269.908184699204,
            "unit": "iter/sec",
            "range": "stddev: 0.0006233017972209545",
            "extra": "mean: 787.4585045192574 usec\nrounds: 2434"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1087.886360311319,
            "unit": "iter/sec",
            "range": "stddev: 0.0005654605986403424",
            "extra": "mean: 919.2136573105222 usec\nrounds: 2387"
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
        "date": 1730736019119,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 458.8876466963115,
            "unit": "iter/sec",
            "range": "stddev: 0.0009003182811555883",
            "extra": "mean: 2.179182654402098 msec\nrounds: 761"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 714.7414884436871,
            "unit": "iter/sec",
            "range": "stddev: 0.0005598519959786938",
            "extra": "mean: 1.3991072522982382 msec\nrounds: 979"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 983.7808885727536,
            "unit": "iter/sec",
            "range": "stddev: 0.00039496022338271535",
            "extra": "mean: 1.0164865079365148 msec\nrounds: 1260"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2137.3395886731378,
            "unit": "iter/sec",
            "range": "stddev: 0.00006324813300114775",
            "extra": "mean: 467.8713692945728 usec\nrounds: 2410"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 404.46679044926356,
            "unit": "iter/sec",
            "range": "stddev: 0.0016389639379374103",
            "extra": "mean: 2.472390870185522 msec\nrounds: 701"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 693.0953576581691,
            "unit": "iter/sec",
            "range": "stddev: 0.0005060308345419792",
            "extra": "mean: 1.4428029115341365 msec\nrounds: 893"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 854.3458748892352,
            "unit": "iter/sec",
            "range": "stddev: 0.0006335548429229885",
            "extra": "mean: 1.170486133768304 msec\nrounds: 1226"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1668.7454571089145,
            "unit": "iter/sec",
            "range": "stddev: 0.00024121972320391457",
            "extra": "mean: 599.2525676938712 usec\nrounds: 2142"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 31.951859198806783,
            "unit": "iter/sec",
            "range": "stddev: 0.0026159380986011723",
            "extra": "mean: 31.29708333333367 msec\nrounds: 36"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.907276285612735,
            "unit": "iter/sec",
            "range": "stddev: 0.008538226861864456",
            "extra": "mean: 35.832948717949165 msec\nrounds: 39"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 811.563596182952,
            "unit": "iter/sec",
            "range": "stddev: 0.00040423165169570235",
            "extra": "mean: 1.2321893252769418 msec\nrounds: 993"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1022.3770331140252,
            "unit": "iter/sec",
            "range": "stddev: 0.0004990003474412585",
            "extra": "mean: 978.112738853427 usec\nrounds: 1570"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1668.9714059467983,
            "unit": "iter/sec",
            "range": "stddev: 0.0003239877108768192",
            "extra": "mean: 599.1714396285331 usec\nrounds: 2584"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1121.727556228796,
            "unit": "iter/sec",
            "range": "stddev: 0.0005039286082190761",
            "extra": "mean: 891.4820666097932 usec\nrounds: 2342"
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
        "date": 1730736865432,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 662.0491663576156,
            "unit": "iter/sec",
            "range": "stddev: 0.00037184324536638445",
            "extra": "mean: 1.5104618369987273 msec\nrounds: 773"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 895.1890750465278,
            "unit": "iter/sec",
            "range": "stddev: 0.00020089646174582397",
            "extra": "mean: 1.1170824442289184 msec\nrounds: 1031"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1154.4677903486674,
            "unit": "iter/sec",
            "range": "stddev: 0.00009185606517186203",
            "extra": "mean: 866.1999999999864 usec\nrounds: 1265"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2244.3250573092273,
            "unit": "iter/sec",
            "range": "stddev: 0.0000431132193505822",
            "extra": "mean: 445.56825525038823 usec\nrounds: 2476"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 529.2350168721572,
            "unit": "iter/sec",
            "range": "stddev: 0.0009306568204135678",
            "extra": "mean: 1.8895197183098744 msec\nrounds: 710"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 747.6650854356898,
            "unit": "iter/sec",
            "range": "stddev: 0.0005797993834012531",
            "extra": "mean: 1.3374972557629412 msec\nrounds: 911"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 886.8138979285975,
            "unit": "iter/sec",
            "range": "stddev: 0.0006540984633087345",
            "extra": "mean: 1.1276323051947883 msec\nrounds: 1232"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1568.9648534101354,
            "unit": "iter/sec",
            "range": "stddev: 0.0004028925747418443",
            "extra": "mean: 637.3629070316688 usec\nrounds: 2119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 30.89355001123013,
            "unit": "iter/sec",
            "range": "stddev: 0.005496032620270149",
            "extra": "mean: 32.369216216216316 msec\nrounds: 37"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 37.764524374236665,
            "unit": "iter/sec",
            "range": "stddev: 0.00061361853765686",
            "extra": "mean: 26.47987804878088 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 820.4151415359389,
            "unit": "iter/sec",
            "range": "stddev: 0.0002972785965823731",
            "extra": "mean: 1.2188951048951286 msec\nrounds: 1001"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1271.659773661323,
            "unit": "iter/sec",
            "range": "stddev: 0.00033057551550992267",
            "extra": "mean: 786.373856209064 usec\nrounds: 1530"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1195.4727141033597,
            "unit": "iter/sec",
            "range": "stddev: 0.0005854976918212211",
            "extra": "mean: 836.489188086597 usec\nrounds: 2451"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1000.5075810764525,
            "unit": "iter/sec",
            "range": "stddev: 0.0006415168744048998",
            "extra": "mean: 999.4926764313906 usec\nrounds: 2253"
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
        "date": 1730904516759,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 709.6599061542594,
            "unit": "iter/sec",
            "range": "stddev: 0.0001708228594141859",
            "extra": "mean: 1.409125683060118 msec\nrounds: 732"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 966.7533170814437,
            "unit": "iter/sec",
            "range": "stddev: 0.0000922226799873113",
            "extra": "mean: 1.0343900375940014 msec\nrounds: 1064"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1231.1643257824987,
            "unit": "iter/sec",
            "range": "stddev: 0.0001497163013221403",
            "extra": "mean: 812.2392592592576 usec\nrounds: 1350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2187.6962698636753,
            "unit": "iter/sec",
            "range": "stddev: 0.00011505626752923976",
            "extra": "mean: 457.1018444266554 usec\nrounds: 2494"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 654.0157656387487,
            "unit": "iter/sec",
            "range": "stddev: 0.000238243368850202",
            "extra": "mean: 1.5290151285930296 msec\nrounds: 661"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 891.9604630266123,
            "unit": "iter/sec",
            "range": "stddev: 0.00008551899144080276",
            "extra": "mean: 1.121125925925894 msec\nrounds: 945"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1138.2090504648033,
            "unit": "iter/sec",
            "range": "stddev: 0.0001785626057393992",
            "extra": "mean: 878.5732283464415 usec\nrounds: 1270"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2041.2470196265758,
            "unit": "iter/sec",
            "range": "stddev: 0.00007959402022952455",
            "extra": "mean: 489.89661240653726 usec\nrounds: 2273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 35.94161328752621,
            "unit": "iter/sec",
            "range": "stddev: 0.006047475567559913",
            "extra": "mean: 27.822902439024823 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 40.66826893033537,
            "unit": "iter/sec",
            "range": "stddev: 0.0016314218065764505",
            "extra": "mean: 24.58919512195115 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1006.7691601653821,
            "unit": "iter/sec",
            "range": "stddev: 0.0000760092836359973",
            "extra": "mean: 993.2763532761869 usec\nrounds: 1053"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1524.6607539286285,
            "unit": "iter/sec",
            "range": "stddev: 0.0001150259605089818",
            "extra": "mean: 655.8836104512279 usec\nrounds: 1684"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1811.626366572967,
            "unit": "iter/sec",
            "range": "stddev: 0.00017904262507347017",
            "extra": "mean: 551.9901997737472 usec\nrounds: 2653"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1490.0404678629325,
            "unit": "iter/sec",
            "range": "stddev: 0.00027792638381969544",
            "extra": "mean: 671.1227121463584 usec\nrounds: 2404"
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
        "date": 1730939337623,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 426.10295941990034,
            "unit": "iter/sec",
            "range": "stddev: 0.001708543476657277",
            "extra": "mean: 2.3468506329113676 msec\nrounds: 790"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 700.8830996293617,
            "unit": "iter/sec",
            "range": "stddev: 0.0008886665337586948",
            "extra": "mean: 1.4267714552238684 msec\nrounds: 1072"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 756.9104057400949,
            "unit": "iter/sec",
            "range": "stddev: 0.0009266169596696192",
            "extra": "mean: 1.3211603281133597 msec\nrounds: 1341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1439.847145541751,
            "unit": "iter/sec",
            "range": "stddev: 0.000508753069320897",
            "extra": "mean: 694.5181668042576 usec\nrounds: 2422"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 592.9947225950634,
            "unit": "iter/sec",
            "range": "stddev: 0.0005180983361364427",
            "extra": "mean: 1.686355648535623 msec\nrounds: 717"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 575.4134240494361,
            "unit": "iter/sec",
            "range": "stddev: 0.0009041403556930254",
            "extra": "mean: 1.7378809012875687 msec\nrounds: 932"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 904.9259478523741,
            "unit": "iter/sec",
            "range": "stddev: 0.0005756369043896511",
            "extra": "mean: 1.1050627980922214 msec\nrounds: 1258"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1676.4311298101115,
            "unit": "iter/sec",
            "range": "stddev: 0.00027622679084584483",
            "extra": "mean: 596.5052677787422 usec\nrounds: 2278"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.582056963871384,
            "unit": "iter/sec",
            "range": "stddev: 0.004477159112988645",
            "extra": "mean: 37.61936111111098 msec\nrounds: 36"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.92202854017621,
            "unit": "iter/sec",
            "range": "stddev: 0.008415328443968854",
            "extra": "mean: 41.802474999999895 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 661.2781892255946,
            "unit": "iter/sec",
            "range": "stddev: 0.0008942906745636297",
            "extra": "mean: 1.5122228682168901 msec\nrounds: 1032"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1196.6016513101845,
            "unit": "iter/sec",
            "range": "stddev: 0.00039735043287620334",
            "extra": "mean: 835.7000000000659 usec\nrounds: 1670"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1198.665692273379,
            "unit": "iter/sec",
            "range": "stddev: 0.0006234640560969048",
            "extra": "mean: 834.2609673789935 usec\nrounds: 2667"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 925.1414603627413,
            "unit": "iter/sec",
            "range": "stddev: 0.0007470889078996377",
            "extra": "mean: 1.0809157764996362 msec\nrounds: 2434"
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
        "date": 1730940672338,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 769.8546899272806,
            "unit": "iter/sec",
            "range": "stddev: 0.00003541914235205575",
            "extra": "mean: 1.2989464285714214 msec\nrounds: 784"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1038.3942107813364,
            "unit": "iter/sec",
            "range": "stddev: 0.000016757276694838203",
            "extra": "mean: 963.0253998118434 usec\nrounds: 1063"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1296.742240036847,
            "unit": "iter/sec",
            "range": "stddev: 0.00001641919718552071",
            "extra": "mean: 771.16328066215 usec\nrounds: 1329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2359.3089958105656,
            "unit": "iter/sec",
            "range": "stddev: 0.00002417108618646707",
            "extra": "mean: 423.85291700904963 usec\nrounds: 2434"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 674.8719212522789,
            "unit": "iter/sec",
            "range": "stddev: 0.00012259637780632875",
            "extra": "mean: 1.4817626404494944 msec\nrounds: 712"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 897.1429008194334,
            "unit": "iter/sec",
            "range": "stddev: 0.00008444456507531539",
            "extra": "mean: 1.1146496272629687 msec\nrounds: 939"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1229.6982396825717,
            "unit": "iter/sec",
            "range": "stddev: 0.000029422152583492747",
            "extra": "mean: 813.2076372315008 usec\nrounds: 1257"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2099.4787203998426,
            "unit": "iter/sec",
            "range": "stddev: 0.00003890650642939507",
            "extra": "mean: 476.30870953031217 usec\nrounds: 2193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 39.85903511969884,
            "unit": "iter/sec",
            "range": "stddev: 0.0016152356325878732",
            "extra": "mean: 25.088414634146208 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 41.240150231975825,
            "unit": "iter/sec",
            "range": "stddev: 0.0009300220699115298",
            "extra": "mean: 24.2482142857143 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 984.7026255543258,
            "unit": "iter/sec",
            "range": "stddev: 0.00014267071374391525",
            "extra": "mean: 1.015535019455303 msec\nrounds: 1028"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1584.2685992169893,
            "unit": "iter/sec",
            "range": "stddev: 0.00006924581224259185",
            "extra": "mean: 631.2060975608815 usec\nrounds: 1640"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2069.398325415772,
            "unit": "iter/sec",
            "range": "stddev: 0.00014693553568823818",
            "extra": "mean: 483.2322456814038 usec\nrounds: 2605"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1519.1811036947547,
            "unit": "iter/sec",
            "range": "stddev: 0.0001742965595796491",
            "extra": "mean: 658.2493670885782 usec\nrounds: 2370"
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
        "date": 1730941608783,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 769.5859627520337,
            "unit": "iter/sec",
            "range": "stddev: 0.00004399922309146107",
            "extra": "mean: 1.2994000000000099 msec\nrounds: 785"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1046.1637038545932,
            "unit": "iter/sec",
            "range": "stddev: 0.000015857902248511377",
            "extra": "mean: 955.873345935724 usec\nrounds: 1058"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1314.444859532269,
            "unit": "iter/sec",
            "range": "stddev: 0.00001763372263720029",
            "extra": "mean: 760.7774436090375 usec\nrounds: 1330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2425.9268214930285,
            "unit": "iter/sec",
            "range": "stddev: 0.000007920156769446237",
            "extra": "mean: 412.2135882831591 usec\nrounds: 2458"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 701.0808166517647,
            "unit": "iter/sec",
            "range": "stddev: 0.000021612060582217386",
            "extra": "mean: 1.426369080779901 msec\nrounds: 718"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 930.6884619383305,
            "unit": "iter/sec",
            "range": "stddev: 0.000012959358734753453",
            "extra": "mean: 1.0744734042552924 msec\nrounds: 940"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1216.4292900029802,
            "unit": "iter/sec",
            "range": "stddev: 0.00003291780707102202",
            "extra": "mean: 822.0781990522031 usec\nrounds: 1266"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2199.015296048581,
            "unit": "iter/sec",
            "range": "stddev: 0.000008602680049482936",
            "extra": "mean: 454.7489968791503 usec\nrounds: 2243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 40.0513047445164,
            "unit": "iter/sec",
            "range": "stddev: 0.0009962771825100204",
            "extra": "mean: 24.967975609756245 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 41.85668271837337,
            "unit": "iter/sec",
            "range": "stddev: 0.00017501636890434927",
            "extra": "mean: 23.891047619047004 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1014.9082180475979,
            "unit": "iter/sec",
            "range": "stddev: 0.00002785332850233472",
            "extra": "mean: 985.3107721639329 usec\nrounds: 1049"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1630.5122542270747,
            "unit": "iter/sec",
            "range": "stddev: 0.000011315283138648582",
            "extra": "mean: 613.3041916167863 usec\nrounds: 1670"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2462.3333352095883,
            "unit": "iter/sec",
            "range": "stddev: 0.00001546966588906602",
            "extra": "mean: 406.11885714282556 usec\nrounds: 2625"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 2155.811185893715,
            "unit": "iter/sec",
            "range": "stddev: 0.00003573287746074334",
            "extra": "mean: 463.8625156708421 usec\nrounds: 2393"
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
        "date": 1730989514945,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 585.4346111184567,
            "unit": "iter/sec",
            "range": "stddev: 0.0008254651524954758",
            "extra": "mean: 1.708132694938428 msec\nrounds: 731"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 810.7966302341308,
            "unit": "iter/sec",
            "range": "stddev: 0.000564770549615773",
            "extra": "mean: 1.2333549039433398 msec\nrounds: 989"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 693.8431262299611,
            "unit": "iter/sec",
            "range": "stddev: 0.0010030391709009634",
            "extra": "mean: 1.441247974068088 msec\nrounds: 1234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1820.8664107146574,
            "unit": "iter/sec",
            "range": "stddev: 0.00033460824119637507",
            "extra": "mean: 549.1891080617595 usec\nrounds: 2332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 543.1030057770956,
            "unit": "iter/sec",
            "range": "stddev: 0.0005335590478655289",
            "extra": "mean: 1.8412713414634043 msec\nrounds: 656"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 536.6943199646087,
            "unit": "iter/sec",
            "range": "stddev: 0.0012005433236815808",
            "extra": "mean: 1.8632580275228985 msec\nrounds: 872"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 919.0606007075708,
            "unit": "iter/sec",
            "range": "stddev: 0.0005444022231133416",
            "extra": "mean: 1.0880675324675166 msec\nrounds: 1155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1737.2556931422832,
            "unit": "iter/sec",
            "range": "stddev: 0.0002517239988881591",
            "extra": "mean: 575.6205053449773 usec\nrounds: 2058"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.562445321467926,
            "unit": "iter/sec",
            "range": "stddev: 0.007442613043862895",
            "extra": "mean: 40.71255882352991 msec\nrounds: 34"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.20450143842906,
            "unit": "iter/sec",
            "range": "stddev: 0.00592898109220017",
            "extra": "mean: 35.455333333333975 msec\nrounds: 33"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 540.1994136762825,
            "unit": "iter/sec",
            "range": "stddev: 0.0012205175265913614",
            "extra": "mean: 1.851168243953807 msec\nrounds: 951"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 963.4865830157946,
            "unit": "iter/sec",
            "range": "stddev: 0.000716802177568432",
            "extra": "mean: 1.0378971722366026 msec\nrounds: 1556"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1102.8205875134938,
            "unit": "iter/sec",
            "range": "stddev: 0.0006525166987082293",
            "extra": "mean: 906.7658069883141 usec\nrounds: 2404"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 818.395308166773,
            "unit": "iter/sec",
            "range": "stddev: 0.000984932067020078",
            "extra": "mean: 1.2219033882782468 msec\nrounds: 2184"
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
        "date": 1731509797465,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 586.7866520762948,
            "unit": "iter/sec",
            "range": "stddev: 0.0006196108469353309",
            "extra": "mean: 1.7041969111969142 msec\nrounds: 777"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 831.4819654992089,
            "unit": "iter/sec",
            "range": "stddev: 0.0003576213870237096",
            "extra": "mean: 1.202671905697456 msec\nrounds: 1018"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 943.7971592265901,
            "unit": "iter/sec",
            "range": "stddev: 0.0006992956248613091",
            "extra": "mean: 1.059549703264064 msec\nrounds: 1348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1735.5246672900694,
            "unit": "iter/sec",
            "range": "stddev: 0.000399658860735992",
            "extra": "mean: 576.1946337308173 usec\nrounds: 2348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 474.21544173096487,
            "unit": "iter/sec",
            "range": "stddev: 0.001097578028262539",
            "extra": "mean: 2.108746177370004 msec\nrounds: 654"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 670.9777948525945,
            "unit": "iter/sec",
            "range": "stddev: 0.0009134597257998006",
            "extra": "mean: 1.4903622857142205 msec\nrounds: 875"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 887.8330692945735,
            "unit": "iter/sec",
            "range": "stddev: 0.0004500615057857316",
            "extra": "mean: 1.1263378607811358 msec\nrounds: 1178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1627.8381765925915,
            "unit": "iter/sec",
            "range": "stddev: 0.0003716820108907059",
            "extra": "mean: 614.3116769095628 usec\nrounds: 2278"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 30.27893823010097,
            "unit": "iter/sec",
            "range": "stddev: 0.006408740063120287",
            "extra": "mean: 33.02625714285706 msec\nrounds: 35"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.976143675143668,
            "unit": "iter/sec",
            "range": "stddev: 0.014218767995209183",
            "extra": "mean: 45.50388888888909 msec\nrounds: 36"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 714.6780259982229,
            "unit": "iter/sec",
            "range": "stddev: 0.0008527202356095105",
            "extra": "mean: 1.399231491136523 msec\nrounds: 959"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1131.0971344547352,
            "unit": "iter/sec",
            "range": "stddev: 0.0005187190707736207",
            "extra": "mean: 884.0973684210306 usec\nrounds: 1520"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1339.6360697645796,
            "unit": "iter/sec",
            "range": "stddev: 0.0005738321837689128",
            "extra": "mean: 746.4713906783165 usec\nrounds: 2639"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1160.8267671809779,
            "unit": "iter/sec",
            "range": "stddev: 0.00043582140372959866",
            "extra": "mean: 861.4549804261154 usec\nrounds: 2299"
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
        "date": 1731596036379,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 775.8961406207459,
            "unit": "iter/sec",
            "range": "stddev: 0.00008750398148411474",
            "extra": "mean: 1.288832290362938 msec\nrounds: 799"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1040.2541192205376,
            "unit": "iter/sec",
            "range": "stddev: 0.000047462605436242665",
            "extra": "mean: 961.3035714285852 usec\nrounds: 1064"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1268.4837893430195,
            "unit": "iter/sec",
            "range": "stddev: 0.00008763289649144518",
            "extra": "mean: 788.34275092938 usec\nrounds: 1345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2325.1793182402603,
            "unit": "iter/sec",
            "range": "stddev: 0.000052527317816496645",
            "extra": "mean: 430.0743569131773 usec\nrounds: 2488"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 689.5351198708019,
            "unit": "iter/sec",
            "range": "stddev: 0.00008743008891050315",
            "extra": "mean: 1.4502524544179418 msec\nrounds: 713"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 932.128070061347,
            "unit": "iter/sec",
            "range": "stddev: 0.00001673342995646546",
            "extra": "mean: 1.0728139534883723 msec\nrounds: 946"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1259.5004572833907,
            "unit": "iter/sec",
            "range": "stddev: 0.000015892022228190354",
            "extra": "mean: 793.965571205027 usec\nrounds: 1278"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2170.4067253774233,
            "unit": "iter/sec",
            "range": "stddev: 0.00003856622323907491",
            "extra": "mean: 460.7431355181157 usec\nrounds: 2258"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 40.74113085454911,
            "unit": "iter/sec",
            "range": "stddev: 0.0005427600073784942",
            "extra": "mean: 24.54521951219577 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 38.50247378394153,
            "unit": "iter/sec",
            "range": "stddev: 0.001390531006160551",
            "extra": "mean: 25.972357142856527 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1005.5130845983083,
            "unit": "iter/sec",
            "range": "stddev: 0.00004655464302147364",
            "extra": "mean: 994.5171428569616 usec\nrounds: 1050"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1598.219318105902,
            "unit": "iter/sec",
            "range": "stddev: 0.00005383310726375398",
            "extra": "mean: 625.6963538553208 usec\nrounds: 1673"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2256.522495238937,
            "unit": "iter/sec",
            "range": "stddev: 0.00004676711724390758",
            "extra": "mean: 443.1597744360677 usec\nrounds: 2660"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1945.5985640395443,
            "unit": "iter/sec",
            "range": "stddev: 0.00011893107921337465",
            "extra": "mean: 513.9806425040489 usec\nrounds: 2428"
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
        "date": 1732286476553,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 778.5442591652494,
            "unit": "iter/sec",
            "range": "stddev: 0.000042140001584878557",
            "extra": "mean: 1.284448492462322 msec\nrounds: 796"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1045.1007964490238,
            "unit": "iter/sec",
            "range": "stddev: 0.000020720876931094385",
            "extra": "mean: 956.8455056179612 usec\nrounds: 1068"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1323.409568162534,
            "unit": "iter/sec",
            "range": "stddev: 0.000011015674645888346",
            "extra": "mean: 755.6239761727229 usec\nrounds: 1343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2429.141872846898,
            "unit": "iter/sec",
            "range": "stddev: 0.000007050015364069383",
            "extra": "mean: 411.6680096696136 usec\nrounds: 2482"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 706.8691977819625,
            "unit": "iter/sec",
            "range": "stddev: 0.000019398188662464797",
            "extra": "mean: 1.414688888888967 msec\nrounds: 720"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 929.1373347395831,
            "unit": "iter/sec",
            "range": "stddev: 0.000014691233980717123",
            "extra": "mean: 1.0762671594509525 msec\nrounds: 947"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1227.5418905874571,
            "unit": "iter/sec",
            "range": "stddev: 0.00003414871215421657",
            "extra": "mean: 814.6361502347071 usec\nrounds: 1278"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2234.2887137456964,
            "unit": "iter/sec",
            "range": "stddev: 0.000008411542558403163",
            "extra": "mean: 447.56973163219345 usec\nrounds: 2273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 40.88450128387358,
            "unit": "iter/sec",
            "range": "stddev: 0.0005962869930229087",
            "extra": "mean: 24.459146341463104 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 41.75199316062475,
            "unit": "iter/sec",
            "range": "stddev: 0.0005769478546154349",
            "extra": "mean: 23.950952380953034 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1040.2229386889728,
            "unit": "iter/sec",
            "range": "stddev: 0.000019089967400174975",
            "extra": "mean: 961.3323863635741 usec\nrounds: 1056"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1654.4096154521512,
            "unit": "iter/sec",
            "range": "stddev: 0.000020637589015007916",
            "extra": "mean: 604.4452296819487 usec\nrounds: 1698"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2486.454772859243,
            "unit": "iter/sec",
            "range": "stddev: 0.000017283981925689163",
            "extra": "mean: 402.1790425932713 usec\nrounds: 2653"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 2238.2266130331095,
            "unit": "iter/sec",
            "range": "stddev: 0.000021871159354373204",
            "extra": "mean: 446.7822847682346 usec\nrounds: 2416"
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
        "date": 1732315764578,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 690.6598737798176,
            "unit": "iter/sec",
            "range": "stddev: 0.0003141874379139186",
            "extra": "mean: 1.4478906882590952 msec\nrounds: 741"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 988.873577298012,
            "unit": "iter/sec",
            "range": "stddev: 0.00013744413930609275",
            "extra": "mean: 1.0112516129032285 msec\nrounds: 1085"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1175.12296075193,
            "unit": "iter/sec",
            "range": "stddev: 0.0001741076797396865",
            "extra": "mean: 850.9747774480779 usec\nrounds: 1348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2390.036605694973,
            "unit": "iter/sec",
            "range": "stddev: 0.00003829250419789351",
            "extra": "mean: 418.40363349130416 usec\nrounds: 2532"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 651.9720327738988,
            "unit": "iter/sec",
            "range": "stddev: 0.0002544839420005317",
            "extra": "mean: 1.533808123249354 msec\nrounds: 714"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 840.4114449590487,
            "unit": "iter/sec",
            "range": "stddev: 0.00009664429282154035",
            "extra": "mean: 1.189893362350304 msec\nrounds: 919"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1137.9762765416244,
            "unit": "iter/sec",
            "range": "stddev: 0.0000955967023014983",
            "extra": "mean: 878.7529411764696 usec\nrounds: 1190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2020.3856537626637,
            "unit": "iter/sec",
            "range": "stddev: 0.00013514037839521846",
            "extra": "mean: 494.95500927639773 usec\nrounds: 2156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 32.58469985418347,
            "unit": "iter/sec",
            "range": "stddev: 0.004497883021988217",
            "extra": "mean: 30.68925 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 37.15506523572102,
            "unit": "iter/sec",
            "range": "stddev: 0.001845544584605009",
            "extra": "mean: 26.914230769230258 msec\nrounds: 39"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 927.4653205498154,
            "unit": "iter/sec",
            "range": "stddev: 0.00020958627414105694",
            "extra": "mean: 1.0782074303405598 msec\nrounds: 969"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1218.6345834927251,
            "unit": "iter/sec",
            "range": "stddev: 0.0004967887286711836",
            "extra": "mean: 820.5905310301492 usec\nrounds: 1563"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1806.666092669919,
            "unit": "iter/sec",
            "range": "stddev: 0.00027596440156793756",
            "extra": "mean: 553.5057109098585 usec\nrounds: 2539"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1132.8475628436413,
            "unit": "iter/sec",
            "range": "stddev: 0.0005586567773375424",
            "extra": "mean: 882.7312983662416 usec\nrounds: 2326"
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
        "date": 1732545874826,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 706.0315001479587,
            "unit": "iter/sec",
            "range": "stddev: 0.00012464815590309484",
            "extra": "mean: 1.416367399741281 msec\nrounds: 773"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 843.6085720993865,
            "unit": "iter/sec",
            "range": "stddev: 0.00035840859757233824",
            "extra": "mean: 1.18538387715931 msec\nrounds: 1042"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1228.605124268438,
            "unit": "iter/sec",
            "range": "stddev: 0.00011213295320537087",
            "extra": "mean: 813.9311649016939 usec\nrounds: 1322"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1760.3914087728515,
            "unit": "iter/sec",
            "range": "stddev: 0.0004028678845850992",
            "extra": "mean: 568.055487556082 usec\nrounds: 2451"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 379.4734076711951,
            "unit": "iter/sec",
            "range": "stddev: 0.000659067757833845",
            "extra": "mean: 2.6352307692308092 msec\nrounds: 715"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 627.2283377882994,
            "unit": "iter/sec",
            "range": "stddev: 0.0004183315518676774",
            "extra": "mean: 1.5943157216495496 msec\nrounds: 776"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 698.8975303267467,
            "unit": "iter/sec",
            "range": "stddev: 0.000454574885494951",
            "extra": "mean: 1.430824915824903 msec\nrounds: 1188"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1696.7690927487645,
            "unit": "iter/sec",
            "range": "stddev: 0.00024587503840541616",
            "extra": "mean: 589.3553838725344 usec\nrounds: 2071"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 38.26414227981692,
            "unit": "iter/sec",
            "range": "stddev: 0.0015814759957825393",
            "extra": "mean: 26.134128205128146 msec\nrounds: 39"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 40.26800814788718,
            "unit": "iter/sec",
            "range": "stddev: 0.0005528525516834311",
            "extra": "mean: 24.833609756097882 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 951.5911586339196,
            "unit": "iter/sec",
            "range": "stddev: 0.00018451742294554733",
            "extra": "mean: 1.0508714703019886 msec\nrounds: 1027"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1446.9050536894038,
            "unit": "iter/sec",
            "range": "stddev: 0.00014679052887705456",
            "extra": "mean: 691.1303526448685 usec\nrounds: 1588"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1765.780032301754,
            "unit": "iter/sec",
            "range": "stddev: 0.00025468422227577654",
            "extra": "mean: 566.3219550039119 usec\nrounds: 2578"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1485.920946716583,
            "unit": "iter/sec",
            "range": "stddev: 0.00028756106881874967",
            "extra": "mean: 672.9833119384209 usec\nrounds: 2337"
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
        "date": 1732631913318,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 455.314933033955,
            "unit": "iter/sec",
            "range": "stddev: 0.0013996829417626012",
            "extra": "mean: 2.1962820181112424 msec\nrounds: 773"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 678.75378359376,
            "unit": "iter/sec",
            "range": "stddev: 0.0007740969041450895",
            "extra": "mean: 1.4732882882882148 msec\nrounds: 999"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 836.3752107868835,
            "unit": "iter/sec",
            "range": "stddev: 0.0008227891342911856",
            "extra": "mean: 1.195635627530345 msec\nrounds: 1235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1669.1409367810336,
            "unit": "iter/sec",
            "range": "stddev: 0.00045437182585692117",
            "extra": "mean: 599.1105831533417 usec\nrounds: 2315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 513.0205208208484,
            "unit": "iter/sec",
            "range": "stddev: 0.0007704420425729332",
            "extra": "mean: 1.949239766081812 msec\nrounds: 684"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 605.4016495747544,
            "unit": "iter/sec",
            "range": "stddev: 0.0010966908527060728",
            "extra": "mean: 1.6517959617427849 msec\nrounds: 941"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 869.9554305981865,
            "unit": "iter/sec",
            "range": "stddev: 0.0006792441558460475",
            "extra": "mean: 1.1494841745081057 msec\nrounds: 1169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1465.5256999347505,
            "unit": "iter/sec",
            "range": "stddev: 0.00046888471327041623",
            "extra": "mean: 682.3490028489592 usec\nrounds: 2106"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 21.631149349489426,
            "unit": "iter/sec",
            "range": "stddev: 0.011816941052090114",
            "extra": "mean: 46.229628571428805 msec\nrounds: 35"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.92615626207357,
            "unit": "iter/sec",
            "range": "stddev: 0.010320364746462134",
            "extra": "mean: 40.11850000000006 msec\nrounds: 34"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 582.5942400688197,
            "unit": "iter/sec",
            "range": "stddev: 0.0012333407559934938",
            "extra": "mean: 1.7164604989604322 msec\nrounds: 962"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 901.6946555437611,
            "unit": "iter/sec",
            "range": "stddev: 0.0008407820895096611",
            "extra": "mean: 1.109022875817043 msec\nrounds: 1530"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1373.9905990118423,
            "unit": "iter/sec",
            "range": "stddev: 0.0006443419493100387",
            "extra": "mean: 727.8070175437796 usec\nrounds: 2451"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1147.9947532041995,
            "unit": "iter/sec",
            "range": "stddev: 0.000770289687774143",
            "extra": "mean: 871.0841205579319 usec\nrounds: 2223"
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
        "date": 1733150466099,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 668.7507989032457,
            "unit": "iter/sec",
            "range": "stddev: 0.000603047002682568",
            "extra": "mean: 1.4953253164557028 msec\nrounds: 790"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 922.8383834788465,
            "unit": "iter/sec",
            "range": "stddev: 0.0003910946202241752",
            "extra": "mean: 1.08361335841957 msec\nrounds: 1063"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1200.4339133787087,
            "unit": "iter/sec",
            "range": "stddev: 0.0001816817706433069",
            "extra": "mean: 833.0321135175424 usec\nrounds: 1339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2034.6647202712043,
            "unit": "iter/sec",
            "range": "stddev: 0.00014207956093017463",
            "extra": "mean: 491.48146622737346 usec\nrounds: 2428"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 593.2230770059118,
            "unit": "iter/sec",
            "range": "stddev: 0.00045382512160860295",
            "extra": "mean: 1.6857065052950297 msec\nrounds: 661"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 915.5008285185024,
            "unit": "iter/sec",
            "range": "stddev: 0.00011278143768251355",
            "extra": "mean: 1.0922983014862337 msec\nrounds: 942"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1189.952056055854,
            "unit": "iter/sec",
            "range": "stddev: 0.00005597258098465531",
            "extra": "mean: 840.3699921445087 usec\nrounds: 1273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2120.3436272050167,
            "unit": "iter/sec",
            "range": "stddev: 0.00006356626946872809",
            "extra": "mean: 471.62166885099407 usec\nrounds: 2289"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 37.67295100494905,
            "unit": "iter/sec",
            "range": "stddev: 0.0033169155158106135",
            "extra": "mean: 26.54424390243895 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 40.75869397499177,
            "unit": "iter/sec",
            "range": "stddev: 0.001613715328681651",
            "extra": "mean: 24.534642857142767 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 923.1371084301201,
            "unit": "iter/sec",
            "range": "stddev: 0.00019489606467580381",
            "extra": "mean: 1.0832627037392013 msec\nrounds: 1043"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1521.8062718171443,
            "unit": "iter/sec",
            "range": "stddev: 0.0000982424026166373",
            "extra": "mean: 657.113864306742 usec\nrounds: 1695"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1603.3359828218054,
            "unit": "iter/sec",
            "range": "stddev: 0.0002796606435044814",
            "extra": "mean: 623.6995930447723 usec\nrounds: 2703"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1706.114308960673,
            "unit": "iter/sec",
            "range": "stddev: 0.00024319109887772558",
            "extra": "mean: 586.1271983640872 usec\nrounds: 2445"
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
        "date": 1733158626995,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 688.8882672187103,
            "unit": "iter/sec",
            "range": "stddev: 0.00011505988011119137",
            "extra": "mean: 1.4516142131979684 msec\nrounds: 788"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 935.2051512824288,
            "unit": "iter/sec",
            "range": "stddev: 0.00007743721228718354",
            "extra": "mean: 1.069284101599226 msec\nrounds: 1063"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1205.5948854251014,
            "unit": "iter/sec",
            "range": "stddev: 0.00004691487871584039",
            "extra": "mean: 829.4660271782695 usec\nrounds: 1251"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2192.49203421392,
            "unit": "iter/sec",
            "range": "stddev: 0.00002919055270858838",
            "extra": "mean: 456.1019991840165 usec\nrounds: 2451"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 646.4731402037411,
            "unit": "iter/sec",
            "range": "stddev: 0.0000837018373906724",
            "extra": "mean: 1.5468546762590045 msec\nrounds: 695"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 865.4433777626331,
            "unit": "iter/sec",
            "range": "stddev: 0.00005673993106083751",
            "extra": "mean: 1.1554770949720896 msec\nrounds: 895"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1133.9872957706468,
            "unit": "iter/sec",
            "range": "stddev: 0.00007200343181295327",
            "extra": "mean: 881.8440944882099 usec\nrounds: 1270"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1911.461392656471,
            "unit": "iter/sec",
            "range": "stddev: 0.00010496641098534441",
            "extra": "mean: 523.159925615992 usec\nrounds: 2151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 37.04966840546748,
            "unit": "iter/sec",
            "range": "stddev: 0.0011633331916132415",
            "extra": "mean: 26.990794871795085 msec\nrounds: 39"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 36.94109280987852,
            "unit": "iter/sec",
            "range": "stddev: 0.0015366418295040493",
            "extra": "mean: 27.070124999999656 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 926.5742214140713,
            "unit": "iter/sec",
            "range": "stddev: 0.0001100759790958587",
            "extra": "mean: 1.0792443572128216 msec\nrounds: 1019"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1503.5065421766692,
            "unit": "iter/sec",
            "range": "stddev: 0.00007432035297089965",
            "extra": "mean: 665.1118381914531 usec\nrounds: 1681"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2197.076071694095,
            "unit": "iter/sec",
            "range": "stddev: 0.0000442064622097201",
            "extra": "mean: 455.15037593984266 usec\nrounds: 2660"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 2046.1752972274414,
            "unit": "iter/sec",
            "range": "stddev: 0.000057264631103193054",
            "extra": "mean: 488.7166809974667 usec\nrounds: 2326"
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
        "date": 1733160555593,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 569.9427277063961,
            "unit": "iter/sec",
            "range": "stddev: 0.0008683676881441769",
            "extra": "mean: 1.754562259306774 msec\nrounds: 779"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 745.5958196037354,
            "unit": "iter/sec",
            "range": "stddev: 0.0007569621557484415",
            "extra": "mean: 1.3412092365693167 msec\nrounds: 1061"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1028.0533223335694,
            "unit": "iter/sec",
            "range": "stddev: 0.000315392438814373",
            "extra": "mean: 972.7121913580403 usec\nrounds: 1296"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1884.4395391639378,
            "unit": "iter/sec",
            "range": "stddev: 0.00027406659571131307",
            "extra": "mean: 530.661758691216 usec\nrounds: 2445"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 445.4402764925021,
            "unit": "iter/sec",
            "range": "stddev: 0.0014632442788177645",
            "extra": "mean: 2.2449698708752317 msec\nrounds: 697"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 605.8873504780665,
            "unit": "iter/sec",
            "range": "stddev: 0.001038043268325213",
            "extra": "mean: 1.6504718232043707 msec\nrounds: 905"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 815.108857787981,
            "unit": "iter/sec",
            "range": "stddev: 0.0007407775029369046",
            "extra": "mean: 1.2268299999999648 msec\nrounds: 1200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1623.8570666741678,
            "unit": "iter/sec",
            "range": "stddev: 0.00038189613426929285",
            "extra": "mean: 615.8177468464676 usec\nrounds: 2299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 29.70839932842047,
            "unit": "iter/sec",
            "range": "stddev: 0.0075858335978842475",
            "extra": "mean: 33.66051428571423 msec\nrounds: 35"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.85674098037818,
            "unit": "iter/sec",
            "range": "stddev: 0.014907304416682698",
            "extra": "mean: 43.750769230769585 msec\nrounds: 39"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 642.8280765810242,
            "unit": "iter/sec",
            "range": "stddev: 0.0010312188794079312",
            "extra": "mean: 1.5556258919471084 msec\nrounds: 981"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1406.9970497587603,
            "unit": "iter/sec",
            "range": "stddev: 0.00017417515156074257",
            "extra": "mean: 710.733544303776 usec\nrounds: 1580"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1370.7001157923876,
            "unit": "iter/sec",
            "range": "stddev: 0.0004997667358807162",
            "extra": "mean: 729.5541807274965 usec\nrounds: 2667"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1059.1876721533918,
            "unit": "iter/sec",
            "range": "stddev: 0.0007095220626599989",
            "extra": "mean: 944.1197497766759 usec\nrounds: 2238"
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
        "date": 1733495581139,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 774.1525484928594,
            "unit": "iter/sec",
            "range": "stddev: 0.00009821935556112745",
            "extra": "mean: 1.291735074626863 msec\nrounds: 804"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1021.7522203823661,
            "unit": "iter/sec",
            "range": "stddev: 0.00007214194413120074",
            "extra": "mean: 978.710865561686 usec\nrounds: 1086"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1324.2340641788612,
            "unit": "iter/sec",
            "range": "stddev: 0.00004244121338257739",
            "extra": "mean: 755.153508771945 usec\nrounds: 1368"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2382.65317022927,
            "unit": "iter/sec",
            "range": "stddev: 0.000034392263498843715",
            "extra": "mean: 419.7001949317597 usec\nrounds: 2565"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 687.1286899389736,
            "unit": "iter/sec",
            "range": "stddev: 0.00006331607332296974",
            "extra": "mean: 1.4553314606741476 msec\nrounds: 712"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 859.6856109895429,
            "unit": "iter/sec",
            "range": "stddev: 0.000046916790420065265",
            "extra": "mean: 1.163215932914066 msec\nrounds: 954"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1065.241916526596,
            "unit": "iter/sec",
            "range": "stddev: 0.00014019389625080853",
            "extra": "mean: 938.7538966366171 usec\nrounds: 1219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1502.8662258823206,
            "unit": "iter/sec",
            "range": "stddev: 0.00033794147682618403",
            "extra": "mean: 665.395218002792 usec\nrounds: 2133"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.54796456087667,
            "unit": "iter/sec",
            "range": "stddev: 0.004364640301232726",
            "extra": "mean: 36.300322580645016 msec\nrounds: 31"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 32.39836326971172,
            "unit": "iter/sec",
            "range": "stddev: 0.0031604464822179504",
            "extra": "mean: 30.86575675675785 msec\nrounds: 37"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 804.450962218327,
            "unit": "iter/sec",
            "range": "stddev: 0.0006033638761600748",
            "extra": "mean: 1.2430838509316136 msec\nrounds: 966"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1336.1292760393087,
            "unit": "iter/sec",
            "range": "stddev: 0.000362316517316729",
            "extra": "mean: 748.4305732483479 usec\nrounds: 1570"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1171.8298404107802,
            "unit": "iter/sec",
            "range": "stddev: 0.0005020764573828379",
            "extra": "mean: 853.3662188099374 usec\nrounds: 2605"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1918.4408265499735,
            "unit": "iter/sec",
            "range": "stddev: 0.00011908199126977597",
            "extra": "mean: 521.2566299469081 usec\nrounds: 2451"
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
        "date": 1733755770095,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 674.4933559057158,
            "unit": "iter/sec",
            "range": "stddev: 0.0001743509573108669",
            "extra": "mean: 1.4825942928039535 msec\nrounds: 806"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 912.6455766605302,
            "unit": "iter/sec",
            "range": "stddev: 0.00011300114670003473",
            "extra": "mean: 1.0957156048014929 msec\nrounds: 1083"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1330.3547514561737,
            "unit": "iter/sec",
            "range": "stddev: 0.0000263842658796288",
            "extra": "mean: 751.6792035398262 usec\nrounds: 1356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2390.6694445237636,
            "unit": "iter/sec",
            "range": "stddev: 0.000028178517323925394",
            "extra": "mean: 418.2928770393877 usec\nrounds: 2513"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 686.070845438598,
            "unit": "iter/sec",
            "range": "stddev: 0.00009798456370067181",
            "extra": "mean: 1.4575754189943901 msec\nrounds: 716"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 906.4723260723578,
            "unit": "iter/sec",
            "range": "stddev: 0.00014857117886668385",
            "extra": "mean: 1.1031776384535499 msec\nrounds: 957"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1203.0236181428302,
            "unit": "iter/sec",
            "range": "stddev: 0.00008728472135051086",
            "extra": "mean: 831.2388758782241 usec\nrounds: 1281"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2151.8414468573387,
            "unit": "iter/sec",
            "range": "stddev: 0.000042798194724542066",
            "extra": "mean: 464.7182539682243 usec\nrounds: 2268"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 40.59960667893272,
            "unit": "iter/sec",
            "range": "stddev: 0.0004403013463637033",
            "extra": "mean: 24.630780487804664 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 41.11230315037627,
            "unit": "iter/sec",
            "range": "stddev: 0.0008421759839362965",
            "extra": "mean: 24.323619047619513 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 996.9178385448294,
            "unit": "iter/sec",
            "range": "stddev: 0.00011751221895594022",
            "extra": "mean: 1.0030916905445986 msec\nrounds: 1047"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1555.5898746260525,
            "unit": "iter/sec",
            "range": "stddev: 0.0001303596100891562",
            "extra": "mean: 642.8429602888676 usec\nrounds: 1662"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2088.8597809676244,
            "unit": "iter/sec",
            "range": "stddev: 0.0001631585474887307",
            "extra": "mean: 478.7300751880861 usec\nrounds: 2660"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1600.5344855412304,
            "unit": "iter/sec",
            "range": "stddev: 0.0002094085050000856",
            "extra": "mean: 624.7912863069888 usec\nrounds: 2410"
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
        "date": 1733756584041,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 711.3170634956384,
            "unit": "iter/sec",
            "range": "stddev: 0.00018504727929275587",
            "extra": "mean: 1.4058428390367605 msec\nrounds: 789"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1046.328445242147,
            "unit": "iter/sec",
            "range": "stddev: 0.000027009005449966777",
            "extra": "mean: 955.7228464419455 usec\nrounds: 1068"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1300.9591500793622,
            "unit": "iter/sec",
            "range": "stddev: 0.000023865060029176324",
            "extra": "mean: 768.6636432350679 usec\nrounds: 1323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2241.4217638792747,
            "unit": "iter/sec",
            "range": "stddev: 0.00006424031163837906",
            "extra": "mean: 446.1453957997086 usec\nrounds: 2476"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 679.1277909539939,
            "unit": "iter/sec",
            "range": "stddev: 0.00016233099105577092",
            "extra": "mean: 1.472476923076975 msec\nrounds: 715"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 749.8191330845115,
            "unit": "iter/sec",
            "range": "stddev: 0.00039551450150443045",
            "extra": "mean: 1.3336549520766776 msec\nrounds: 939"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1130.198491695286,
            "unit": "iter/sec",
            "range": "stddev: 0.0002526573313753839",
            "extra": "mean: 884.8003314002042 usec\nrounds: 1207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2013.0550579007706,
            "unit": "iter/sec",
            "range": "stddev: 0.00007913513443473257",
            "extra": "mean: 496.7574016792207 usec\nrounds: 2263"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 32.87965036285619,
            "unit": "iter/sec",
            "range": "stddev: 0.0013787789401211975",
            "extra": "mean: 30.413948717948962 msec\nrounds: 39"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 35.43251287381343,
            "unit": "iter/sec",
            "range": "stddev: 0.002462394869071792",
            "extra": "mean: 28.22266666666633 msec\nrounds: 39"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 860.9119338713999,
            "unit": "iter/sec",
            "range": "stddev: 0.00023309145673666292",
            "extra": "mean: 1.1615589941971656 msec\nrounds: 1034"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1320.965370652055,
            "unit": "iter/sec",
            "range": "stddev: 0.00025189674275021603",
            "extra": "mean: 757.0221159593153 usec\nrounds: 1673"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1594.2465743229689,
            "unit": "iter/sec",
            "range": "stddev: 0.0002466456264009962",
            "extra": "mean: 627.2555425905001 usec\nrounds: 2571"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1338.8763500239547,
            "unit": "iter/sec",
            "range": "stddev: 0.0005959983035678984",
            "extra": "mean: 746.8949615714016 usec\nrounds: 2342"
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
        "date": 1733842053102,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 767.0667559020834,
            "unit": "iter/sec",
            "range": "stddev: 0.00010049099459027",
            "extra": "mean: 1.3036675000000268 msec\nrounds: 800"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1018.8669633330657,
            "unit": "iter/sec",
            "range": "stddev: 0.00009299039615643669",
            "extra": "mean: 981.4824074073957 usec\nrounds: 1080"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1303.0147198131463,
            "unit": "iter/sec",
            "range": "stddev: 0.000023857187203251312",
            "extra": "mean: 767.4510385756817 usec\nrounds: 1348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2348.0955944943494,
            "unit": "iter/sec",
            "range": "stddev: 0.000053861852235707445",
            "extra": "mean: 425.8770393951295 usec\nrounds: 2513"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 672.4131365751082,
            "unit": "iter/sec",
            "range": "stddev: 0.0002360867321255374",
            "extra": "mean: 1.4871809392264908 msec\nrounds: 724"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 859.911396018237,
            "unit": "iter/sec",
            "range": "stddev: 0.00015140756360405215",
            "extra": "mean: 1.1629105098855927 msec\nrounds: 961"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1123.140374134721,
            "unit": "iter/sec",
            "range": "stddev: 0.00018555989888925626",
            "extra": "mean: 890.3606557376324 usec\nrounds: 1281"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2152.4416228163004,
            "unit": "iter/sec",
            "range": "stddev: 0.00004792816680603611",
            "extra": "mean: 464.5886742756715 usec\nrounds: 2278"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 39.22699287833961,
            "unit": "iter/sec",
            "range": "stddev: 0.0014002927084114437",
            "extra": "mean: 25.492649999999895 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 39.034726966026234,
            "unit": "iter/sec",
            "range": "stddev: 0.0017169948014145219",
            "extra": "mean: 25.618214285714032 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 963.3537641915622,
            "unit": "iter/sec",
            "range": "stddev: 0.00015067696984139703",
            "extra": "mean: 1.0380402684565113 msec\nrounds: 1043"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1508.630899238447,
            "unit": "iter/sec",
            "range": "stddev: 0.0001428994069707353",
            "extra": "mean: 662.8526570049688 usec\nrounds: 1656"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1684.1713984923279,
            "unit": "iter/sec",
            "range": "stddev: 0.00041705516962051126",
            "extra": "mean: 593.7637944066744 usec\nrounds: 2646"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1380.7161505404263,
            "unit": "iter/sec",
            "range": "stddev: 0.00027498767834421134",
            "extra": "mean: 724.2618257261566 usec\nrounds: 2410"
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
        "date": 1734964091843,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 727.1030471801735,
            "unit": "iter/sec",
            "range": "stddev: 0.00014859993097641523",
            "extra": "mean: 1.3753208762886722 msec\nrounds: 776"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1006.8742223866271,
            "unit": "iter/sec",
            "range": "stddev: 0.00004295580611945867",
            "extra": "mean: 993.1727099236557 usec\nrounds: 1048"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1290.422855739366,
            "unit": "iter/sec",
            "range": "stddev: 0.000025651425427036148",
            "extra": "mean: 774.9397769516689 usec\nrounds: 1345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2352.4724587460964,
            "unit": "iter/sec",
            "range": "stddev: 0.000031900781923274294",
            "extra": "mean: 425.0846790074708 usec\nrounds: 2539"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 684.3931777106252,
            "unit": "iter/sec",
            "range": "stddev: 0.00010438155914630306",
            "extra": "mean: 1.4611484049930425 msec\nrounds: 721"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 928.7249505195662,
            "unit": "iter/sec",
            "range": "stddev: 0.000034085470680064595",
            "extra": "mean: 1.0767450572320252 msec\nrounds: 961"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1189.5884379106399,
            "unit": "iter/sec",
            "range": "stddev: 0.0000745906742172014",
            "extra": "mean: 840.6268656716034 usec\nrounds: 1273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2053.6932459096447,
            "unit": "iter/sec",
            "range": "stddev: 0.00006865957912345809",
            "extra": "mean: 486.927637314729 usec\nrounds: 2294"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 39.20859834998758,
            "unit": "iter/sec",
            "range": "stddev: 0.0012500486566142228",
            "extra": "mean: 25.50460975609746 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 40.63924541842161,
            "unit": "iter/sec",
            "range": "stddev: 0.0006819874918391904",
            "extra": "mean: 24.60675609756041 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 995.3255419263785,
            "unit": "iter/sec",
            "range": "stddev: 0.00008970869781035227",
            "extra": "mean: 1.0046964112511112 msec\nrounds: 1031"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1377.630162084105,
            "unit": "iter/sec",
            "range": "stddev: 0.00021942164327169267",
            "extra": "mean: 725.8842231554956 usec\nrounds: 1667"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1181.0582735511853,
            "unit": "iter/sec",
            "range": "stddev: 0.0006946271001847835",
            "extra": "mean: 846.6982725528162 usec\nrounds: 2605"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1201.5464968075519,
            "unit": "iter/sec",
            "range": "stddev: 0.0004167252475861785",
            "extra": "mean: 832.2607594936603 usec\nrounds: 2370"
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
        "date": 1735002726629,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 773.0768264423266,
            "unit": "iter/sec",
            "range": "stddev: 0.00010234645787985138",
            "extra": "mean: 1.2935324999999886 msec\nrounds: 800"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1047.5281839599659,
            "unit": "iter/sec",
            "range": "stddev: 0.000026978911680339808",
            "extra": "mean: 954.6282527881061 usec\nrounds: 1076"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1341.5143068612547,
            "unit": "iter/sec",
            "range": "stddev: 0.000016011086001754197",
            "extra": "mean: 745.4262655906393 usec\nrounds: 1363"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2283.0946516713607,
            "unit": "iter/sec",
            "range": "stddev: 0.00006821336593525281",
            "extra": "mean: 438.00198965379764 usec\nrounds: 2513"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 683.915042130288,
            "unit": "iter/sec",
            "range": "stddev: 0.0001908678311507558",
            "extra": "mean: 1.4621699164345865 msec\nrounds: 718"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 936.0414046874383,
            "unit": "iter/sec",
            "range": "stddev: 0.000052162789005032776",
            "extra": "mean: 1.0683288100208759 msec\nrounds: 958"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1254.3556740715005,
            "unit": "iter/sec",
            "range": "stddev: 0.000043324492942868884",
            "extra": "mean: 797.2220484753818 usec\nrounds: 1279"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2130.013038821735,
            "unit": "iter/sec",
            "range": "stddev: 0.00006974756501771708",
            "extra": "mean: 469.4806941431554 usec\nrounds: 2305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 40.56775061717401,
            "unit": "iter/sec",
            "range": "stddev: 0.0005273605121317096",
            "extra": "mean: 24.65012195121951 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 40.50835015417777,
            "unit": "iter/sec",
            "range": "stddev: 0.0007937044167823298",
            "extra": "mean: 24.686268292683515 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1007.8073908431968,
            "unit": "iter/sec",
            "range": "stddev: 0.00004447510461939178",
            "extra": "mean: 992.2530922930972 usec\nrounds: 1051"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1249.7151219279244,
            "unit": "iter/sec",
            "range": "stddev: 0.00043415195762068796",
            "extra": "mean: 800.1823635272244 usec\nrounds: 1667"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1184.3969652152823,
            "unit": "iter/sec",
            "range": "stddev: 0.0008593079623457639",
            "extra": "mean: 844.3115183246309 usec\nrounds: 2674"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1397.3884111807067,
            "unit": "iter/sec",
            "range": "stddev: 0.00038083959683891385",
            "extra": "mean: 715.6206477732715 usec\nrounds: 2470"
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
        "date": 1735225425961,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 718.650559997401,
            "unit": "iter/sec",
            "range": "stddev: 0.00011217584926573074",
            "extra": "mean: 1.3914968632371434 msec\nrounds: 797"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 957.0681454026683,
            "unit": "iter/sec",
            "range": "stddev: 0.00004001813514670077",
            "extra": "mean: 1.0448576779026209 msec\nrounds: 1068"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 816.0614619263191,
            "unit": "iter/sec",
            "range": "stddev: 0.0008496202046779143",
            "extra": "mean: 1.2253978978979017 msec\nrounds: 1332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1986.3037234394565,
            "unit": "iter/sec",
            "range": "stddev: 0.00020786390936696804",
            "extra": "mean: 503.44767932489884 usec\nrounds: 2370"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 619.9330619895929,
            "unit": "iter/sec",
            "range": "stddev: 0.0002643182834332146",
            "extra": "mean: 1.6130773809524412 msec\nrounds: 672"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 860.5111436193243,
            "unit": "iter/sec",
            "range": "stddev: 0.000042565175014885955",
            "extra": "mean: 1.1620999999999804 msec\nrounds: 920"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1083.3005879743826,
            "unit": "iter/sec",
            "range": "stddev: 0.00019613507213464052",
            "extra": "mean: 923.1048252912493 usec\nrounds: 1202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2007.2423223443006,
            "unit": "iter/sec",
            "range": "stddev: 0.00016586220990849013",
            "extra": "mean: 498.1959521619088 usec\nrounds: 2174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 36.41255811635868,
            "unit": "iter/sec",
            "range": "stddev: 0.0015841785141585698",
            "extra": "mean: 27.46305263157934 msec\nrounds: 38"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 36.997675621030204,
            "unit": "iter/sec",
            "range": "stddev: 0.002257416914874732",
            "extra": "mean: 27.0287249999992 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 895.0181187682734,
            "unit": "iter/sec",
            "range": "stddev: 0.00038680804251877923",
            "extra": "mean: 1.117295816732965 msec\nrounds: 1004"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1477.6205659987502,
            "unit": "iter/sec",
            "range": "stddev: 0.00010162130289426847",
            "extra": "mean: 676.7637260950562 usec\nrounds: 1621"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1880.1679938509362,
            "unit": "iter/sec",
            "range": "stddev: 0.00022296079096612714",
            "extra": "mean: 531.8673667834398 usec\nrounds: 2571"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1513.9833181465624,
            "unit": "iter/sec",
            "range": "stddev: 0.0004111314612531555",
            "extra": "mean: 660.5092592593509 usec\nrounds: 2268"
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
        "date": 1735569706803,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 715.8845530616848,
            "unit": "iter/sec",
            "range": "stddev: 0.00017792241195058468",
            "extra": "mean: 1.3968732747804298 msec\nrounds: 797"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 991.0494132474734,
            "unit": "iter/sec",
            "range": "stddev: 0.00008805146785438443",
            "extra": "mean: 1.0090314232901842 msec\nrounds: 1082"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1229.6534434504663,
            "unit": "iter/sec",
            "range": "stddev: 0.000045465091683090115",
            "extra": "mean: 813.2372623573941 usec\nrounds: 1315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2295.911807598903,
            "unit": "iter/sec",
            "range": "stddev: 0.00002774091918444636",
            "extra": "mean: 435.5568000000026 usec\nrounds: 2500"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 684.310439410225,
            "unit": "iter/sec",
            "range": "stddev: 0.00008999809410818845",
            "extra": "mean: 1.4613250688705746 msec\nrounds: 726"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 858.0663595128487,
            "unit": "iter/sec",
            "range": "stddev: 0.00016061607511870385",
            "extra": "mean: 1.165411030176887 msec\nrounds: 961"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1136.5114699122018,
            "unit": "iter/sec",
            "range": "stddev: 0.00007921379545991136",
            "extra": "mean: 879.8855325914593 usec\nrounds: 1258"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2023.0501330156937,
            "unit": "iter/sec",
            "range": "stddev: 0.00007170482502077764",
            "extra": "mean: 494.30312362518333 usec\nrounds: 2273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 38.259473885576085,
            "unit": "iter/sec",
            "range": "stddev: 0.001260153491425274",
            "extra": "mean: 26.13731707317079 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 38.849265796253945,
            "unit": "iter/sec",
            "range": "stddev: 0.0007893120460865062",
            "extra": "mean: 25.740512195121724 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 950.6950213162112,
            "unit": "iter/sec",
            "range": "stddev: 0.00009971574460826513",
            "extra": "mean: 1.051862035225058 msec\nrounds: 1022"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1439.5894040655319,
            "unit": "iter/sec",
            "range": "stddev: 0.0001422795987124353",
            "extra": "mean: 694.6425120773387 usec\nrounds: 1656"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1098.5703599139872,
            "unit": "iter/sec",
            "range": "stddev: 0.000459582151470738",
            "extra": "mean: 910.2739674118781 usec\nrounds: 2639"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1474.3061272187513,
            "unit": "iter/sec",
            "range": "stddev: 0.0002046895548766395",
            "extra": "mean: 678.2851821191842 usec\nrounds: 2416"
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
        "date": 1735657816472,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 692.9364616987157,
            "unit": "iter/sec",
            "range": "stddev: 0.00007385457783793064",
            "extra": "mean: 1.4431337579617705 msec\nrounds: 785"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1046.413750107572,
            "unit": "iter/sec",
            "range": "stddev: 0.00003900144558801557",
            "extra": "mean: 955.6449348044207 usec\nrounds: 997"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1315.6697737341499,
            "unit": "iter/sec",
            "range": "stddev: 0.000023229582841394746",
            "extra": "mean: 760.0691449814096 usec\nrounds: 1345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2451.775024020081,
            "unit": "iter/sec",
            "range": "stddev: 0.000013124400838731719",
            "extra": "mean: 407.86776527331557 usec\nrounds: 2488"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 682.9037633177733,
            "unit": "iter/sec",
            "range": "stddev: 0.00006435431052619176",
            "extra": "mean: 1.464335172413852 msec\nrounds: 725"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 934.3122289258837,
            "unit": "iter/sec",
            "range": "stddev: 0.00006117080868357856",
            "extra": "mean: 1.0703060165975065 msec\nrounds: 964"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1247.191616209608,
            "unit": "iter/sec",
            "range": "stddev: 0.00002225014466272738",
            "extra": "mean: 801.8014128728204 usec\nrounds: 1274"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2167.3213981601048,
            "unit": "iter/sec",
            "range": "stddev: 0.00004568840196076901",
            "extra": "mean: 461.3990342405727 usec\nrounds: 2278"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 40.65012437946588,
            "unit": "iter/sec",
            "range": "stddev: 0.000544836668298151",
            "extra": "mean: 24.60017073170735 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 41.773647960223734,
            "unit": "iter/sec",
            "range": "stddev: 0.0002459170691066018",
            "extra": "mean: 23.938536585365625 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1022.1719826495873,
            "unit": "iter/sec",
            "range": "stddev: 0.00006607371537852648",
            "extra": "mean: 978.3089509143902 usec\nrounds: 1039"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1619.208662669464,
            "unit": "iter/sec",
            "range": "stddev: 0.00004110424030511971",
            "extra": "mean: 617.5856287424855 usec\nrounds: 1670"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2008.6859275010831,
            "unit": "iter/sec",
            "range": "stddev: 0.00019081339043352662",
            "extra": "mean: 497.83790801185904 usec\nrounds: 2696"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1872.325587565726,
            "unit": "iter/sec",
            "range": "stddev: 0.00013262735939766085",
            "extra": "mean: 534.0951417002926 usec\nrounds: 2470"
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
        "date": 1735658714635,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 773.7389701040479,
            "unit": "iter/sec",
            "range": "stddev: 0.00006605478586578975",
            "extra": "mean: 1.2924255319148859 msec\nrounds: 799"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1031.419276693445,
            "unit": "iter/sec",
            "range": "stddev: 0.000036015199536548065",
            "extra": "mean: 969.5378228782287 usec\nrounds: 1084"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1347.5771747081697,
            "unit": "iter/sec",
            "range": "stddev: 0.00001493524192814451",
            "extra": "mean: 742.0725274725429 usec\nrounds: 1365"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2469.985207609602,
            "unit": "iter/sec",
            "range": "stddev: 0.000009793676740286975",
            "extra": "mean: 404.86072423396337 usec\nrounds: 2513"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 697.6881459784089,
            "unit": "iter/sec",
            "range": "stddev: 0.00009207206470270349",
            "extra": "mean: 1.4333051317614713 msec\nrounds: 721"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 930.3654965643963,
            "unit": "iter/sec",
            "range": "stddev: 0.00005367237919788817",
            "extra": "mean: 1.074846394984279 msec\nrounds: 957"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1242.5286974272792,
            "unit": "iter/sec",
            "range": "stddev: 0.0000843183473692793",
            "extra": "mean: 804.8103855231292 usec\nrounds: 1271"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2186.3237980004783,
            "unit": "iter/sec",
            "range": "stddev: 0.000041904542634544595",
            "extra": "mean: 457.3887915937058 usec\nrounds: 2284"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 40.641501316883584,
            "unit": "iter/sec",
            "range": "stddev: 0.0005405542932052715",
            "extra": "mean: 24.60539024390255 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 42.3061697504841,
            "unit": "iter/sec",
            "range": "stddev: 0.00021456371340076804",
            "extra": "mean: 23.63721428571437 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 999.4445394770948,
            "unit": "iter/sec",
            "range": "stddev: 0.00007046249499248594",
            "extra": "mean: 1.0005557692307725 msec\nrounds: 1040"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1588.0275547300396,
            "unit": "iter/sec",
            "range": "stddev: 0.00008216840422815983",
            "extra": "mean: 629.7119952493503 usec\nrounds: 1684"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2189.507169553977,
            "unit": "iter/sec",
            "range": "stddev: 0.00009063370419255844",
            "extra": "mean: 456.7237841946457 usec\nrounds: 2632"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1576.6229694665124,
            "unit": "iter/sec",
            "range": "stddev: 0.00015922207930234297",
            "extra": "mean: 634.267050123197 usec\nrounds: 2434"
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
        "date": 1735829760886,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 760.1545806211006,
            "unit": "iter/sec",
            "range": "stddev: 0.00012840949811600936",
            "extra": "mean: 1.315521902377972 msec\nrounds: 799"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1019.3766914541162,
            "unit": "iter/sec",
            "range": "stddev: 0.00006676947560160982",
            "extra": "mean: 980.9916279069754 usec\nrounds: 1075"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1290.6666254477707,
            "unit": "iter/sec",
            "range": "stddev: 0.000027659228936172764",
            "extra": "mean: 774.7934131736538 usec\nrounds: 1336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2407.9059251336225,
            "unit": "iter/sec",
            "range": "stddev: 0.000019694169789226994",
            "extra": "mean: 415.2986167615774 usec\nrounds: 2458"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 701.1676348060558,
            "unit": "iter/sec",
            "range": "stddev: 0.00007855071165012629",
            "extra": "mean: 1.4261924686192933 msec\nrounds: 717"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 942.2391654790557,
            "unit": "iter/sec",
            "range": "stddev: 0.000021389941320233496",
            "extra": "mean: 1.0613016701461113 msec\nrounds: 958"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1207.7191967817573,
            "unit": "iter/sec",
            "range": "stddev: 0.0001486524827895185",
            "extra": "mean: 828.0070422534706 usec\nrounds: 1278"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2153.0660213188985,
            "unit": "iter/sec",
            "range": "stddev: 0.00005512922632320253",
            "extra": "mean: 464.4539415412038 usec\nrounds: 2258"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 40.11396278989704,
            "unit": "iter/sec",
            "range": "stddev: 0.0013514051481290045",
            "extra": "mean: 24.928975609755927 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 41.976451210870806,
            "unit": "iter/sec",
            "range": "stddev: 0.0003167097002969845",
            "extra": "mean: 23.822880952380896 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 986.6526764376987,
            "unit": "iter/sec",
            "range": "stddev: 0.0001490643167907008",
            "extra": "mean: 1.0135278846153761 msec\nrounds: 1040"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1607.3221162493999,
            "unit": "iter/sec",
            "range": "stddev: 0.00006138661241713461",
            "extra": "mean: 622.1528279181813 usec\nrounds: 1662"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2059.3877889143114,
            "unit": "iter/sec",
            "range": "stddev: 0.000154702290201236",
            "extra": "mean: 485.58120300751614 usec\nrounds: 2660"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1485.5938896560517,
            "unit": "iter/sec",
            "range": "stddev: 0.00015171031507345235",
            "extra": "mean: 673.1314708298391 usec\nrounds: 2434"
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
        "date": 1736175351070,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 763.465612678739,
            "unit": "iter/sec",
            "range": "stddev: 0.00005169384582182294",
            "extra": "mean: 1.3098166877370454 msec\nrounds: 791"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1006.6093461182506,
            "unit": "iter/sec",
            "range": "stddev: 0.00009247437442674652",
            "extra": "mean: 993.434050514494 usec\nrounds: 1069"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1289.0645949693865,
            "unit": "iter/sec",
            "range": "stddev: 0.00002747836014167119",
            "extra": "mean: 775.7563150074327 usec\nrounds: 1346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2394.676022610192,
            "unit": "iter/sec",
            "range": "stddev: 0.00001753396701948165",
            "extra": "mean: 417.59302325581484 usec\nrounds: 2494"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 626.312654227328,
            "unit": "iter/sec",
            "range": "stddev: 0.00046263158113443416",
            "extra": "mean: 1.596646648044632 msec\nrounds: 716"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 882.8438351479564,
            "unit": "iter/sec",
            "range": "stddev: 0.00014237827252559958",
            "extra": "mean: 1.1327031578947473 msec\nrounds: 950"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1156.5283435753072,
            "unit": "iter/sec",
            "range": "stddev: 0.00012149009647591123",
            "extra": "mean: 864.6567164178498 usec\nrounds: 1273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2120.980027437867,
            "unit": "iter/sec",
            "range": "stddev: 0.000029276077447181262",
            "extra": "mean: 471.48015873020483 usec\nrounds: 2268"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 39.35732515508271,
            "unit": "iter/sec",
            "range": "stddev: 0.0007648816372673125",
            "extra": "mean: 25.408230769230958 msec\nrounds: 39"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 39.920121737360894,
            "unit": "iter/sec",
            "range": "stddev: 0.0016050625622339605",
            "extra": "mean: 25.050023809524326 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 932.2114924944296,
            "unit": "iter/sec",
            "range": "stddev: 0.0002818554748802078",
            "extra": "mean: 1.0727179487180325 msec\nrounds: 1014"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1558.3897818814569,
            "unit": "iter/sec",
            "range": "stddev: 0.000054276775680772774",
            "extra": "mean: 641.6879856544566 usec\nrounds: 1673"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1798.5289346883224,
            "unit": "iter/sec",
            "range": "stddev: 0.00023115990594131552",
            "extra": "mean: 556.0099594245871 usec\nrounds: 2711"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1392.3211515567639,
            "unit": "iter/sec",
            "range": "stddev: 0.0002826813857222083",
            "extra": "mean: 718.2251012145388 usec\nrounds: 2470"
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
        "date": 1736262710226,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 336.99447946800075,
            "unit": "iter/sec",
            "range": "stddev: 0.0016154932079145336",
            "extra": "mean: 2.9674076607387114 msec\nrounds: 731"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 425.15141948026513,
            "unit": "iter/sec",
            "range": "stddev: 0.001361144001350829",
            "extra": "mean: 2.3521031664964682 msec\nrounds: 979"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 555.3335817444722,
            "unit": "iter/sec",
            "range": "stddev: 0.0013167061868819402",
            "extra": "mean: 1.8007194826192483 msec\nrounds: 1237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1425.036186207165,
            "unit": "iter/sec",
            "range": "stddev: 0.0004392008636908076",
            "extra": "mean: 701.7365661861339 usec\nrounds: 2289"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 324.65166534745987,
            "unit": "iter/sec",
            "range": "stddev: 0.0015926096045927444",
            "extra": "mean: 3.08022445820429 msec\nrounds: 646"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 561.8237093301659,
            "unit": "iter/sec",
            "range": "stddev: 0.0008106085318529677",
            "extra": "mean: 1.7799177631578587 msec\nrounds: 912"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 807.9522905515666,
            "unit": "iter/sec",
            "range": "stddev: 0.0005501400685755997",
            "extra": "mean: 1.2376968438536486 msec\nrounds: 1204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1419.0124372266848,
            "unit": "iter/sec",
            "range": "stddev: 0.00030907888113794056",
            "extra": "mean: 704.7154582763193 usec\nrounds: 2193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.66772873775934,
            "unit": "iter/sec",
            "range": "stddev: 0.002350314400566547",
            "extra": "mean: 34.88242857142926 msec\nrounds: 35"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.310152469522183,
            "unit": "iter/sec",
            "range": "stddev: 0.003134225909129767",
            "extra": "mean: 34.117870967741915 msec\nrounds: 31"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 687.2166987635003,
            "unit": "iter/sec",
            "range": "stddev: 0.0005398478409759632",
            "extra": "mean: 1.455145082765431 msec\nrounds: 1027"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1024.652512488639,
            "unit": "iter/sec",
            "range": "stddev: 0.000517508071931483",
            "extra": "mean: 975.9406118775195 usec\nrounds: 1667"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 824.8385388827652,
            "unit": "iter/sec",
            "range": "stddev: 0.0006551093297248989",
            "extra": "mean: 1.2123584833396475 msec\nrounds: 2611"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 815.2577500238586,
            "unit": "iter/sec",
            "range": "stddev: 0.0009145324182064573",
            "extra": "mean: 1.226605941459293 msec\nrounds: 2289"
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
        "date": 1736347575846,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 686.9516520440587,
            "unit": "iter/sec",
            "range": "stddev: 0.0003020104215183619",
            "extra": "mean: 1.4557065217391214 msec\nrounds: 736"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 967.7905399923164,
            "unit": "iter/sec",
            "range": "stddev: 0.00013076674918357473",
            "extra": "mean: 1.0332814371257848 msec\nrounds: 1002"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1224.9085443679776,
            "unit": "iter/sec",
            "range": "stddev: 0.000046995347283381895",
            "extra": "mean: 816.3874801901845 usec\nrounds: 1262"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2250.390070754801,
            "unit": "iter/sec",
            "range": "stddev: 0.000060074251290916814",
            "extra": "mean: 444.367406786767 usec\nrounds: 2387"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 636.2660165161478,
            "unit": "iter/sec",
            "range": "stddev: 0.00013170080769627475",
            "extra": "mean: 1.5716696696697157 msec\nrounds: 666"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 832.2111804046111,
            "unit": "iter/sec",
            "range": "stddev: 0.00025458442516583285",
            "extra": "mean: 1.2016180790959956 msec\nrounds: 885"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1070.74692628714,
            "unit": "iter/sec",
            "range": "stddev: 0.00028920597156482404",
            "extra": "mean: 933.9274999999691 usec\nrounds: 1200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1871.2076727341348,
            "unit": "iter/sec",
            "range": "stddev: 0.00025245340894091697",
            "extra": "mean: 534.4142259414955 usec\nrounds: 2151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 35.68723705445491,
            "unit": "iter/sec",
            "range": "stddev: 0.0009393825057256097",
            "extra": "mean: 28.021222222222104 msec\nrounds: 36"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 36.63860525284871,
            "unit": "iter/sec",
            "range": "stddev: 0.0008500854636720401",
            "extra": "mean: 27.29361538461534 msec\nrounds: 39"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 917.1190769392164,
            "unit": "iter/sec",
            "range": "stddev: 0.0002448472440541129",
            "extra": "mean: 1.0903709508882855 msec\nrounds: 957"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1264.2715251315933,
            "unit": "iter/sec",
            "range": "stddev: 0.0004440579776895905",
            "extra": "mean: 790.9693290734469 usec\nrounds: 1565"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1754.1545121837266,
            "unit": "iter/sec",
            "range": "stddev: 0.00029137108810151183",
            "extra": "mean: 570.075208913673 usec\nrounds: 2513"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1377.1919130407143,
            "unit": "iter/sec",
            "range": "stddev: 0.0005042984989458295",
            "extra": "mean: 726.1152135232126 usec\nrounds: 2248"
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
        "date": 1736436162753,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 765.6866004844887,
            "unit": "iter/sec",
            "range": "stddev: 0.000058328090638612116",
            "extra": "mean: 1.3060173697270518 msec\nrounds: 806"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1039.2945464386319,
            "unit": "iter/sec",
            "range": "stddev: 0.00004060418737343514",
            "extra": "mean: 962.1911357340582 usec\nrounds: 1083"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1290.086881072225,
            "unit": "iter/sec",
            "range": "stddev: 0.00003466941200152508",
            "extra": "mean: 775.1415929203728 usec\nrounds: 1356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2053.6920351691883,
            "unit": "iter/sec",
            "range": "stddev: 0.00018295869933402937",
            "extra": "mean: 486.92792437967336 usec\nrounds: 2539"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 680.4854689748886,
            "unit": "iter/sec",
            "range": "stddev: 0.0001742710687587143",
            "extra": "mean: 1.4695390946502376 msec\nrounds: 729"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 817.4235323823208,
            "unit": "iter/sec",
            "range": "stddev: 0.00021717501312027365",
            "extra": "mean: 1.2233560209425016 msec\nrounds: 955"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1169.144745202684,
            "unit": "iter/sec",
            "range": "stddev: 0.00009747514593061993",
            "extra": "mean: 855.3260869565293 usec\nrounds: 1288"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1862.9326853383398,
            "unit": "iter/sec",
            "range": "stddev: 0.0003065085313466237",
            "extra": "mean: 536.7880481512854 usec\nrounds: 2326"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 35.96399740708378,
            "unit": "iter/sec",
            "range": "stddev: 0.00234378467414982",
            "extra": "mean: 27.805585365853446 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 41.328047279287034,
            "unit": "iter/sec",
            "range": "stddev: 0.0004264266054384687",
            "extra": "mean: 24.1966428571423 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 962.7694986429872,
            "unit": "iter/sec",
            "range": "stddev: 0.00012422303171909325",
            "extra": "mean: 1.0386702127658685 msec\nrounds: 1034"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1441.4533510614167,
            "unit": "iter/sec",
            "range": "stddev: 0.00018334826994584997",
            "extra": "mean: 693.7442680775262 usec\nrounds: 1701"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1005.5931642287766,
            "unit": "iter/sec",
            "range": "stddev: 0.0005255162233510668",
            "extra": "mean: 994.4379452568512 usec\nrounds: 2667"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1396.1490596441427,
            "unit": "iter/sec",
            "range": "stddev: 0.00023550765233821752",
            "extra": "mean: 716.2558991049889 usec\nrounds: 2458"
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
        "date": 1736438154303,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 697.2156271375289,
            "unit": "iter/sec",
            "range": "stddev: 0.0003182268598264752",
            "extra": "mean: 1.4342765151515249 msec\nrounds: 792"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 949.095816753131,
            "unit": "iter/sec",
            "range": "stddev: 0.00022382699100251155",
            "extra": "mean: 1.0536343984962582 msec\nrounds: 1064"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1200.4705487533763,
            "unit": "iter/sec",
            "range": "stddev: 0.00017408587555655687",
            "extra": "mean: 833.0066914498201 usec\nrounds: 1345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2103.087487577571,
            "unit": "iter/sec",
            "range": "stddev: 0.00013108447244921805",
            "extra": "mean: 475.49139344262096 usec\nrounds: 2440"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 626.6538504542007,
            "unit": "iter/sec",
            "range": "stddev: 0.00026559119010317146",
            "extra": "mean: 1.595777316735861 msec\nrounds: 723"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 854.7540282988671,
            "unit": "iter/sec",
            "range": "stddev: 0.00035285326644785844",
            "extra": "mean: 1.16992721518985 msec\nrounds: 948"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1112.507829164432,
            "unit": "iter/sec",
            "range": "stddev: 0.0002224094251021738",
            "extra": "mean: 898.8700787400902 usec\nrounds: 1270"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2095.0430052312663,
            "unit": "iter/sec",
            "range": "stddev: 0.00004362739662396743",
            "extra": "mean: 477.3171708184638 usec\nrounds: 2248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 36.75362574518058,
            "unit": "iter/sec",
            "range": "stddev: 0.003347705246958375",
            "extra": "mean: 27.208199999999394 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 37.6774878804087,
            "unit": "iter/sec",
            "range": "stddev: 0.002569060945952947",
            "extra": "mean: 26.54104761904717 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 998.5202537305721,
            "unit": "iter/sec",
            "range": "stddev: 0.000058967202553820924",
            "extra": "mean: 1.0014819391633765 msec\nrounds: 1052"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1097.091255944954,
            "unit": "iter/sec",
            "range": "stddev: 0.0005642917537248511",
            "extra": "mean: 911.5012033695168 usec\nrounds: 1662"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1776.9756754035118,
            "unit": "iter/sec",
            "range": "stddev: 0.00017029436832606697",
            "extra": "mean: 562.7539047617645 usec\nrounds: 2625"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1157.078732372996,
            "unit": "iter/sec",
            "range": "stddev: 0.0005911201267463566",
            "extra": "mean: 864.245424292908 usec\nrounds: 2404"
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
        "date": 1736441597819,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 749.9604776612149,
            "unit": "iter/sec",
            "range": "stddev: 0.00007276838019104994",
            "extra": "mean: 1.3334035989717012 msec\nrounds: 778"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1019.6974504616603,
            "unit": "iter/sec",
            "range": "stddev: 0.000030987425850309944",
            "extra": "mean: 980.6830443159955 usec\nrounds: 1038"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1261.3089293964704,
            "unit": "iter/sec",
            "range": "stddev: 0.00004015820119602162",
            "extra": "mean: 792.8271787297142 usec\nrounds: 1354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2341.065887011802,
            "unit": "iter/sec",
            "range": "stddev: 0.000014726658646521139",
            "extra": "mean: 427.1558547531639 usec\nrounds: 2451"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 664.3712159726241,
            "unit": "iter/sec",
            "range": "stddev: 0.000054363943048512464",
            "extra": "mean: 1.5051826086956868 msec\nrounds: 690"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 895.1893721880396,
            "unit": "iter/sec",
            "range": "stddev: 0.00008394243692040123",
            "extra": "mean: 1.117082073434116 msec\nrounds: 926"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1220.4044741787768,
            "unit": "iter/sec",
            "range": "stddev: 0.000023575999090412903",
            "extra": "mean: 819.4004702194414 usec\nrounds: 1276"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2090.2438464890106,
            "unit": "iter/sec",
            "range": "stddev: 0.00003607350064062117",
            "extra": "mean: 478.41308165059456 usec\nrounds: 2278"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 37.49325578630632,
            "unit": "iter/sec",
            "range": "stddev: 0.0015322101862599716",
            "extra": "mean: 26.671463414634438 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 38.779944176270085,
            "unit": "iter/sec",
            "range": "stddev: 0.0005605547612709871",
            "extra": "mean: 25.786525000000182 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 989.1031508736263,
            "unit": "iter/sec",
            "range": "stddev: 0.00008939107834832845",
            "extra": "mean: 1.0110168986083494 msec\nrounds: 1006"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1531.7724103873818,
            "unit": "iter/sec",
            "range": "stddev: 0.00004646805786050606",
            "extra": "mean: 652.8384982120824 usec\nrounds: 1678"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2064.391076786971,
            "unit": "iter/sec",
            "range": "stddev: 0.00017102436899932478",
            "extra": "mean: 484.4043414275967 usec\nrounds: 2718"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1455.7375757569826,
            "unit": "iter/sec",
            "range": "stddev: 0.00018395040852694708",
            "extra": "mean: 686.936997885763 usec\nrounds: 2365"
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
        "date": 1736869924694,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 599.3082573464513,
            "unit": "iter/sec",
            "range": "stddev: 0.0005331907290340083",
            "extra": "mean: 1.6685903919089748 msec\nrounds: 791"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 993.796385238687,
            "unit": "iter/sec",
            "range": "stddev: 0.00009794513177102601",
            "extra": "mean: 1.006242339832845 msec\nrounds: 1077"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1248.0157744778894,
            "unit": "iter/sec",
            "range": "stddev: 0.00007902133062292628",
            "extra": "mean: 801.2719233603858 usec\nrounds: 1357"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2328.205230610382,
            "unit": "iter/sec",
            "range": "stddev: 0.000051413850523279644",
            "extra": "mean: 429.5153996101244 usec\nrounds: 2565"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 647.2917368507877,
            "unit": "iter/sec",
            "range": "stddev: 0.0002868264517118689",
            "extra": "mean: 1.5448984485190762 msec\nrounds: 709"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 886.6188469303581,
            "unit": "iter/sec",
            "range": "stddev: 0.00014340528585662522",
            "extra": "mean: 1.1278803777544193 msec\nrounds: 953"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1207.817664693566,
            "unit": "iter/sec",
            "range": "stddev: 0.00004689637754510496",
            "extra": "mean: 827.9395385840038 usec\nrounds: 1257"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2188.049646884693,
            "unit": "iter/sec",
            "range": "stddev: 0.000032113343718624976",
            "extra": "mean: 457.0280210157856 usec\nrounds: 2284"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 35.97980918415315,
            "unit": "iter/sec",
            "range": "stddev: 0.002447144261747811",
            "extra": "mean: 27.793365853658763 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 35.067582073109534,
            "unit": "iter/sec",
            "range": "stddev: 0.0031788320634793246",
            "extra": "mean: 28.51636585365885 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 893.7971376931417,
            "unit": "iter/sec",
            "range": "stddev: 0.00025922681334719123",
            "extra": "mean: 1.1188221105529204 msec\nrounds: 995"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1388.1640141091245,
            "unit": "iter/sec",
            "range": "stddev: 0.00016202745520573243",
            "extra": "mean: 720.3759713089561 usec\nrounds: 1673"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1979.3002706424077,
            "unit": "iter/sec",
            "range": "stddev: 0.0002522085612154666",
            "extra": "mean: 505.22905232334307 usec\nrounds: 2733"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1624.9494239380967,
            "unit": "iter/sec",
            "range": "stddev: 0.0002624142045758736",
            "extra": "mean: 615.4037690456115 usec\nrounds: 2494"
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
        "date": 1736871878689,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 678.1465516862652,
            "unit": "iter/sec",
            "range": "stddev: 0.00032606346822841006",
            "extra": "mean: 1.4746075129533884 msec\nrounds: 772"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 890.9882544722444,
            "unit": "iter/sec",
            "range": "stddev: 0.00028513950733015294",
            "extra": "mean: 1.1223492509363393 msec\nrounds: 1068"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 867.022252661606,
            "unit": "iter/sec",
            "range": "stddev: 0.0006612079230492603",
            "extra": "mean: 1.1533729346970918 msec\nrounds: 1271"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1629.9317496231695,
            "unit": "iter/sec",
            "range": "stddev: 0.00032271100734844053",
            "extra": "mean: 613.5226215644883 usec\nrounds: 2365"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 553.7985734346273,
            "unit": "iter/sec",
            "range": "stddev: 0.0007256040252511999",
            "extra": "mean: 1.8057106824924751 msec\nrounds: 674"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 822.0229856563178,
            "unit": "iter/sec",
            "range": "stddev: 0.000300225779181015",
            "extra": "mean: 1.2165109947644372 msec\nrounds: 955"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 803.8553815351629,
            "unit": "iter/sec",
            "range": "stddev: 0.000582002050971008",
            "extra": "mean: 1.2440048582995735 msec\nrounds: 1235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1656.8392207921438,
            "unit": "iter/sec",
            "range": "stddev: 0.0002789754428968378",
            "extra": "mean: 603.558865248189 usec\nrounds: 2115"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.990310578872222,
            "unit": "iter/sec",
            "range": "stddev: 0.010498250705824688",
            "extra": "mean: 50.02423529411798 msec\nrounds: 34"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.55530927596241,
            "unit": "iter/sec",
            "range": "stddev: 0.01006634623274443",
            "extra": "mean: 44.3354594594594 msec\nrounds: 37"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 731.6505370979531,
            "unit": "iter/sec",
            "range": "stddev: 0.0007027574925008002",
            "extra": "mean: 1.3667727272728296 msec\nrounds: 946"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1133.4070649521298,
            "unit": "iter/sec",
            "range": "stddev: 0.0005117445168459639",
            "extra": "mean: 882.2955414013021 usec\nrounds: 1570"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2015.2867818844118,
            "unit": "iter/sec",
            "range": "stddev: 0.00018571267020892976",
            "extra": "mean: 496.2072936661357 usec\nrounds: 2605"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1379.703210003125,
            "unit": "iter/sec",
            "range": "stddev: 0.00034312731200343674",
            "extra": "mean: 724.7935590421182 usec\nrounds: 2422"
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
        "date": 1737039933105,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 584.3233542981928,
            "unit": "iter/sec",
            "range": "stddev: 0.0006558327240120538",
            "extra": "mean: 1.7113811944091464 msec\nrounds: 787"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 796.4018853533208,
            "unit": "iter/sec",
            "range": "stddev: 0.0008179665732871854",
            "extra": "mean: 1.255647454370796 msec\nrounds: 1041"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1104.143864171032,
            "unit": "iter/sec",
            "range": "stddev: 0.0003610006854111719",
            "extra": "mean: 905.6790808241088 usec\nrounds: 1262"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2064.761721196951,
            "unit": "iter/sec",
            "range": "stddev: 0.00018406171039779496",
            "extra": "mean: 484.31738623103485 usec\nrounds: 2571"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 570.0776851625535,
            "unit": "iter/sec",
            "range": "stddev: 0.0006221578554213161",
            "extra": "mean: 1.7541468926552655 msec\nrounds: 708"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 668.5740141505615,
            "unit": "iter/sec",
            "range": "stddev: 0.000673833383502444",
            "extra": "mean: 1.4957207112970474 msec\nrounds: 956"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1086.9939410630661,
            "unit": "iter/sec",
            "range": "stddev: 0.00028749690928285917",
            "extra": "mean: 919.9683293745068 usec\nrounds: 1263"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1885.5307708034802,
            "unit": "iter/sec",
            "range": "stddev: 0.0002392383656696759",
            "extra": "mean: 530.3546436284731 usec\nrounds: 2315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 29.091060988290337,
            "unit": "iter/sec",
            "range": "stddev: 0.005577341603459346",
            "extra": "mean: 34.374820512820676 msec\nrounds: 39"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 30.718989770576208,
            "unit": "iter/sec",
            "range": "stddev: 0.00844586825968269",
            "extra": "mean: 32.55315384615406 msec\nrounds: 39"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 829.6989001089121,
            "unit": "iter/sec",
            "range": "stddev: 0.0005062092461964366",
            "extra": "mean: 1.2052565091610137 msec\nrounds: 1037"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1394.3646433587733,
            "unit": "iter/sec",
            "range": "stddev: 0.00025145250423698224",
            "extra": "mean: 717.1725163592647 usec\nrounds: 1681"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1968.068686021007,
            "unit": "iter/sec",
            "range": "stddev: 0.00019545946590876525",
            "extra": "mean: 508.1123474515391 usec\nrounds: 2786"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1374.8869228983203,
            "unit": "iter/sec",
            "range": "stddev: 0.0005147898237529911",
            "extra": "mean: 727.3325415678239 usec\nrounds: 2526"
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
        "date": 1737127312689,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 615.6110687330148,
            "unit": "iter/sec",
            "range": "stddev: 0.0007449129851575242",
            "extra": "mean: 1.6244022415940207 msec\nrounds: 803"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 846.247123484449,
            "unit": "iter/sec",
            "range": "stddev: 0.0005720265591873929",
            "extra": "mean: 1.1816879162702127 msec\nrounds: 1051"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1027.525196481616,
            "unit": "iter/sec",
            "range": "stddev: 0.00044770712219907463",
            "extra": "mean: 973.2121445042266 usec\nrounds: 1301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2116.1597812556065,
            "unit": "iter/sec",
            "range": "stddev: 0.00017485384710777102",
            "extra": "mean: 472.5541090317187 usec\nrounds: 2458"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 613.6624244856681,
            "unit": "iter/sec",
            "range": "stddev: 0.0002993362275605957",
            "extra": "mean: 1.6295604229607752 msec\nrounds: 662"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 797.3637368236745,
            "unit": "iter/sec",
            "range": "stddev: 0.0004316231758653215",
            "extra": "mean: 1.2541327800829443 msec\nrounds: 964"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 962.1949708304045,
            "unit": "iter/sec",
            "range": "stddev: 0.0005271150829829835",
            "extra": "mean: 1.0392904040404292 msec\nrounds: 1188"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1711.4756484117688,
            "unit": "iter/sec",
            "range": "stddev: 0.00033895740605517595",
            "extra": "mean: 584.2911062906384 usec\nrounds: 2305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 29.630166142925475,
            "unit": "iter/sec",
            "range": "stddev: 0.007076498077752617",
            "extra": "mean: 33.749388888889534 msec\nrounds: 36"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 31.285816536919828,
            "unit": "iter/sec",
            "range": "stddev: 0.007527294712431385",
            "extra": "mean: 31.963365853658257 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 819.7798378243175,
            "unit": "iter/sec",
            "range": "stddev: 0.0005161931064458429",
            "extra": "mean: 1.2198397104446774 msec\nrounds: 967"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 950.3584817302337,
            "unit": "iter/sec",
            "range": "stddev: 0.000687509855391127",
            "extra": "mean: 1.0522345191041893 msec\nrounds: 1518"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1390.5516161708283,
            "unit": "iter/sec",
            "range": "stddev: 0.0005491413230217922",
            "extra": "mean: 719.1390728477287 usec\nrounds: 2718"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1783.7642419747522,
            "unit": "iter/sec",
            "range": "stddev: 0.000126731133317971",
            "extra": "mean: 560.6122022565772 usec\nrounds: 2393"
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
        "date": 1737386646448,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 410.9742869017318,
            "unit": "iter/sec",
            "range": "stddev: 0.001406758791215007",
            "extra": "mean: 2.433242253521107 msec\nrounds: 710"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 643.2099139400719,
            "unit": "iter/sec",
            "range": "stddev: 0.001076661739879585",
            "extra": "mean: 1.5547024048095912 msec\nrounds: 998"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 846.1429030859509,
            "unit": "iter/sec",
            "range": "stddev: 0.0007988122503563203",
            "extra": "mean: 1.1818334661354717 msec\nrounds: 1255"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1573.2758327123572,
            "unit": "iter/sec",
            "range": "stddev: 0.0004450455513033605",
            "extra": "mean: 635.6164502164768 usec\nrounds: 2310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 442.68179050656175,
            "unit": "iter/sec",
            "range": "stddev: 0.0011243174204539604",
            "extra": "mean: 2.2589589665653467 msec\nrounds: 658"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 637.6267589734804,
            "unit": "iter/sec",
            "range": "stddev: 0.0009216390091196042",
            "extra": "mean: 1.5683156108597243 msec\nrounds: 884"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 724.9124037982021,
            "unit": "iter/sec",
            "range": "stddev: 0.000959695591404075",
            "extra": "mean: 1.3794770164787737 msec\nrounds: 1153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1483.69424981654,
            "unit": "iter/sec",
            "range": "stddev: 0.00046265984468770685",
            "extra": "mean: 673.9933110367253 usec\nrounds: 2093"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.267803298668486,
            "unit": "iter/sec",
            "range": "stddev: 0.010920065651694608",
            "extra": "mean: 41.20686111111126 msec\nrounds: 36"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.256455994451645,
            "unit": "iter/sec",
            "range": "stddev: 0.007882125208142297",
            "extra": "mean: 36.68855555555576 msec\nrounds: 36"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 719.148563983023,
            "unit": "iter/sec",
            "range": "stddev: 0.0007119453654368231",
            "extra": "mean: 1.3905332640330588 msec\nrounds: 962"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1067.4999737845417,
            "unit": "iter/sec",
            "range": "stddev: 0.0006107459214428267",
            "extra": "mean: 936.7681728878754 usec\nrounds: 1527"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1317.3450071241284,
            "unit": "iter/sec",
            "range": "stddev: 0.0005534496226628469",
            "extra": "mean: 759.102584814195 usec\nrounds: 2476"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1030.6968998555917,
            "unit": "iter/sec",
            "range": "stddev: 0.0006803396306079924",
            "extra": "mean: 970.2173356106024 usec\nrounds: 2342"
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
        "date": 1737390375669,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 711.8907647400936,
            "unit": "iter/sec",
            "range": "stddev: 0.00017717132605896707",
            "extra": "mean: 1.4047098930481183 msec\nrounds: 748"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 632.4802654294316,
            "unit": "iter/sec",
            "range": "stddev: 0.0009202994314202292",
            "extra": "mean: 1.5810769990128237 msec\nrounds: 1013"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1137.9429604950599,
            "unit": "iter/sec",
            "range": "stddev: 0.00026662557070527047",
            "extra": "mean: 878.7786688051148 usec\nrounds: 1247"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2214.510623410263,
            "unit": "iter/sec",
            "range": "stddev: 0.000050566838100031897",
            "extra": "mean: 451.56703672075304 usec\nrounds: 2342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 541.1242397204346,
            "unit": "iter/sec",
            "range": "stddev: 0.0008105618293557709",
            "extra": "mean: 1.8480044444444736 msec\nrounds: 675"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 827.7648038105391,
            "unit": "iter/sec",
            "range": "stddev: 0.00024606103687805497",
            "extra": "mean: 1.2080726256982564 msec\nrounds: 895"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1076.721374366901,
            "unit": "iter/sec",
            "range": "stddev: 0.00030902097752368805",
            "extra": "mean: 928.7453781513232 usec\nrounds: 1190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1920.1359232385437,
            "unit": "iter/sec",
            "range": "stddev: 0.00020083578389000226",
            "extra": "mean: 520.7964644051749 usec\nrounds: 2093"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 35.1415835907293,
            "unit": "iter/sec",
            "range": "stddev: 0.0016634954423648072",
            "extra": "mean: 28.456315789474267 msec\nrounds: 38"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 36.649325748851375,
            "unit": "iter/sec",
            "range": "stddev: 0.0021408062313187644",
            "extra": "mean: 27.285631578947694 msec\nrounds: 38"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 860.3810461242753,
            "unit": "iter/sec",
            "range": "stddev: 0.0003303416733011195",
            "extra": "mean: 1.1622757201645255 msec\nrounds: 972"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1436.3091252345669,
            "unit": "iter/sec",
            "range": "stddev: 0.0002294230976976121",
            "extra": "mean: 696.2289540816555 usec\nrounds: 1568"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1356.1623358158172,
            "unit": "iter/sec",
            "range": "stddev: 0.0005287444556675223",
            "extra": "mean: 737.3748507758379 usec\nrounds: 2513"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1207.9471735486227,
            "unit": "iter/sec",
            "range": "stddev: 0.0005618405075537371",
            "extra": "mean: 827.8507718696587 usec\nrounds: 2332"
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
        "date": 1737392380604,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 654.7902950080287,
            "unit": "iter/sec",
            "range": "stddev: 0.0003969729050906667",
            "extra": "mean: 1.5272065081351558 msec\nrounds: 799"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 911.4166933163058,
            "unit": "iter/sec",
            "range": "stddev: 0.0002681388042806635",
            "extra": "mean: 1.0971929824561064 msec\nrounds: 1083"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1007.7059869591408,
            "unit": "iter/sec",
            "range": "stddev: 0.0003847817725003182",
            "extra": "mean: 992.3529411764295 usec\nrounds: 1343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2043.427084372644,
            "unit": "iter/sec",
            "range": "stddev: 0.00018050086714133898",
            "extra": "mean: 489.3739579198206 usec\nrounds: 2519"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 576.3058713270847,
            "unit": "iter/sec",
            "range": "stddev: 0.0004702262592851435",
            "extra": "mean: 1.7351896792188781 msec\nrounds: 717"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 816.0407351059531,
            "unit": "iter/sec",
            "range": "stddev: 0.0002594041044982344",
            "extra": "mean: 1.2254290220820436 msec\nrounds: 951"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1098.2273572759575,
            "unit": "iter/sec",
            "range": "stddev: 0.0002283034616414511",
            "extra": "mean: 910.5582677164404 usec\nrounds: 1270"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1853.7384941068299,
            "unit": "iter/sec",
            "range": "stddev: 0.0002317919256044688",
            "extra": "mean: 539.4504150283727 usec\nrounds: 2289"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 30.188175609384345,
            "unit": "iter/sec",
            "range": "stddev: 0.009908208308041172",
            "extra": "mean: 33.12555263157865 msec\nrounds: 38"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 34.28543713514344,
            "unit": "iter/sec",
            "range": "stddev: 0.003189460352511453",
            "extra": "mean: 29.16690243902344 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 844.8218248494908,
            "unit": "iter/sec",
            "range": "stddev: 0.0004728583823411695",
            "extra": "mean: 1.183681541582043 msec\nrounds: 986"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1391.677882719696,
            "unit": "iter/sec",
            "range": "stddev: 0.0002976060070056394",
            "extra": "mean: 718.5570830843004 usec\nrounds: 1673"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1744.8918935257534,
            "unit": "iter/sec",
            "range": "stddev: 0.00032563015526217837",
            "extra": "mean: 573.1014074341224 usec\nrounds: 2771"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1620.4357094892225,
            "unit": "iter/sec",
            "range": "stddev: 0.0002529291244997601",
            "extra": "mean: 617.1179727427816 usec\nrounds: 2348"
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
        "date": 1737471584473,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 734.2636423465243,
            "unit": "iter/sec",
            "range": "stddev: 0.00023633028060777677",
            "extra": "mean: 1.3619086419753106 msec\nrounds: 810"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1054.4971457183608,
            "unit": "iter/sec",
            "range": "stddev: 0.000034980705862896955",
            "extra": "mean: 948.3193046660781 usec\nrounds: 1093"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1222.5809621783603,
            "unit": "iter/sec",
            "range": "stddev: 0.00007764649003738192",
            "extra": "mean: 817.941740413026 usec\nrounds: 1356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2429.6696210082823,
            "unit": "iter/sec",
            "range": "stddev: 0.000029750613708133596",
            "extra": "mean: 411.5785913251089 usec\nrounds: 2513"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 707.0710022001084,
            "unit": "iter/sec",
            "range": "stddev: 0.00005746917589803896",
            "extra": "mean: 1.4142851239669276 msec\nrounds: 726"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 936.6025035657354,
            "unit": "iter/sec",
            "range": "stddev: 0.00005021363124935236",
            "extra": "mean: 1.0676887966804534 msec\nrounds: 964"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1185.9784743968728,
            "unit": "iter/sec",
            "range": "stddev: 0.00009391052582295756",
            "extra": "mean: 843.1856240127362 usec\nrounds: 1266"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2000.2412351238158,
            "unit": "iter/sec",
            "range": "stddev: 0.00008151880381153665",
            "extra": "mean: 499.9396984924669 usec\nrounds: 2189"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 37.3812910376486,
            "unit": "iter/sec",
            "range": "stddev: 0.0017964807555682946",
            "extra": "mean: 26.751349999999974 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 38.06552841452438,
            "unit": "iter/sec",
            "range": "stddev: 0.002623407327522195",
            "extra": "mean: 26.270487804878005 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 898.6126361307706,
            "unit": "iter/sec",
            "range": "stddev: 0.00021146861177433364",
            "extra": "mean: 1.1128265503874741 msec\nrounds: 1032"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1467.9752383374798,
            "unit": "iter/sec",
            "range": "stddev: 0.00011330177328530164",
            "extra": "mean: 681.2104004782301 usec\nrounds: 1673"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1885.2890849162984,
            "unit": "iter/sec",
            "range": "stddev: 0.00024068968093051714",
            "extra": "mean: 530.4226327944806 usec\nrounds: 2598"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1374.4784678442875,
            "unit": "iter/sec",
            "range": "stddev: 0.00030648129282305427",
            "extra": "mean: 727.5486836606366 usec\nrounds: 2393"
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
        "date": 1737472493375,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 685.6114318475877,
            "unit": "iter/sec",
            "range": "stddev: 0.0001997271969008552",
            "extra": "mean: 1.4585521091811393 msec\nrounds: 806"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1055.5584903304614,
            "unit": "iter/sec",
            "range": "stddev: 0.000047966508443230614",
            "extra": "mean: 947.3657870791529 usec\nrounds: 1099"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1262.766876851726,
            "unit": "iter/sec",
            "range": "stddev: 0.00007794204924584633",
            "extra": "mean: 791.9118075801571 usec\nrounds: 1372"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2194.3802248423885,
            "unit": "iter/sec",
            "range": "stddev: 0.000048447727687179433",
            "extra": "mean: 455.7095387021294 usec\nrounds: 2558"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 414.4069586190947,
            "unit": "iter/sec",
            "range": "stddev: 0.0011181804791194814",
            "extra": "mean: 2.4130868924890754 msec\nrounds: 679"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 631.3907122002189,
            "unit": "iter/sec",
            "range": "stddev: 0.0008765998703725816",
            "extra": "mean: 1.5838053691275904 msec\nrounds: 894"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 633.9235239340688,
            "unit": "iter/sec",
            "range": "stddev: 0.0010470908607601408",
            "extra": "mean: 1.5774773489932912 msec\nrounds: 1192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1053.1788207180366,
            "unit": "iter/sec",
            "range": "stddev: 0.0006801396733685911",
            "extra": "mean: 949.506370929696 usec\nrounds: 2119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 21.843009092933524,
            "unit": "iter/sec",
            "range": "stddev: 0.011812614426553913",
            "extra": "mean: 45.78123809523625 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 18.619487368273717,
            "unit": "iter/sec",
            "range": "stddev: 0.010770755649621969",
            "extra": "mean: 53.7071714285716 msec\nrounds: 35"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 666.9995868636988,
            "unit": "iter/sec",
            "range": "stddev: 0.0009190282937050068",
            "extra": "mean: 1.4992513034409867 msec\nrounds: 959"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 956.1962866995493,
            "unit": "iter/sec",
            "range": "stddev: 0.0006960063521446136",
            "extra": "mean: 1.0458103779629238 msec\nrounds: 1561"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1386.913592878711,
            "unit": "iter/sec",
            "range": "stddev: 0.000518197201789383",
            "extra": "mean: 721.0254518627769 usec\nrounds: 2711"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1314.898554726573,
            "unit": "iter/sec",
            "range": "stddev: 0.0004454391220961563",
            "extra": "mean: 760.5149434573266 usec\nrounds: 2476"
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
        "date": 1737557803216,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 355.67422190174034,
            "unit": "iter/sec",
            "range": "stddev: 0.001962855089882229",
            "extra": "mean: 2.811561643835586 msec\nrounds: 730"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 577.8304337885257,
            "unit": "iter/sec",
            "range": "stddev: 0.0012058109403293767",
            "extra": "mean: 1.7306115107913815 msec\nrounds: 973"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 751.4527684148117,
            "unit": "iter/sec",
            "range": "stddev: 0.0009897253996041125",
            "extra": "mean: 1.3307556270096632 msec\nrounds: 1244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1377.1802685297775,
            "unit": "iter/sec",
            "range": "stddev: 0.0005737503503612357",
            "extra": "mean: 726.1213530655358 usec\nrounds: 2365"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 484.8377345661371,
            "unit": "iter/sec",
            "range": "stddev: 0.0010922898887011704",
            "extra": "mean: 2.0625457317072526 msec\nrounds: 656"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 631.6641104460775,
            "unit": "iter/sec",
            "range": "stddev: 0.0008313594350145456",
            "extra": "mean: 1.5831198630135972 msec\nrounds: 876"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 903.4414817374142,
            "unit": "iter/sec",
            "range": "stddev: 0.0006177201882143069",
            "extra": "mean: 1.10687855297157 msec\nrounds: 1161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1356.7833318388446,
            "unit": "iter/sec",
            "range": "stddev: 0.0005175230375887914",
            "extra": "mean: 737.0373563218106 usec\nrounds: 2088"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 30.762215313792293,
            "unit": "iter/sec",
            "range": "stddev: 0.0047216493594715025",
            "extra": "mean: 32.507411764706305 msec\nrounds: 34"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 32.263904398465826,
            "unit": "iter/sec",
            "range": "stddev: 0.006283211586795465",
            "extra": "mean: 30.99438888888943 msec\nrounds: 36"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 854.6582312873539,
            "unit": "iter/sec",
            "range": "stddev: 0.0004015358688755206",
            "extra": "mean: 1.1700583501006252 msec\nrounds: 994"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1371.7065406434629,
            "unit": "iter/sec",
            "range": "stddev: 0.00015910423676030562",
            "extra": "mean: 729.0189048241349 usec\nrounds: 1534"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1619.730243829037,
            "unit": "iter/sec",
            "range": "stddev: 0.0003842864021990381",
            "extra": "mean: 617.3867554859031 usec\nrounds: 2552"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1094.2025524836492,
            "unit": "iter/sec",
            "range": "stddev: 0.000591897930489806",
            "extra": "mean: 913.9075738127041 usec\nrounds: 2337"
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
        "date": 1737560338096,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 613.1971121696547,
            "unit": "iter/sec",
            "range": "stddev: 0.0007714913112553637",
            "extra": "mean: 1.6307969821673387 msec\nrounds: 729"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 859.6049944399687,
            "unit": "iter/sec",
            "range": "stddev: 0.0005080606921477184",
            "extra": "mean: 1.1633250230840022 msec\nrounds: 1083"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1094.7276307153682,
            "unit": "iter/sec",
            "range": "stddev: 0.0003218051206120277",
            "extra": "mean: 913.4692246203133 usec\nrounds: 1251"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2138.307907660437,
            "unit": "iter/sec",
            "range": "stddev: 0.00009529289276330471",
            "extra": "mean: 467.6594967532617 usec\nrounds: 2464"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 597.3764020127406,
            "unit": "iter/sec",
            "range": "stddev: 0.000526148292268421",
            "extra": "mean: 1.6739864457830933 msec\nrounds: 664"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 796.1876368317298,
            "unit": "iter/sec",
            "range": "stddev: 0.00032872516254346966",
            "extra": "mean: 1.2559853403141261 msec\nrounds: 955"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1060.8281577007651,
            "unit": "iter/sec",
            "range": "stddev: 0.00025835387255109606",
            "extra": "mean: 942.6597444089307 usec\nrounds: 1252"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1977.9367024981277,
            "unit": "iter/sec",
            "range": "stddev: 0.0000758974063670932",
            "extra": "mean: 505.5773517610565 usec\nrounds: 2243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 30.7471637663119,
            "unit": "iter/sec",
            "range": "stddev: 0.007093881677237059",
            "extra": "mean: 32.523325000000455 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 31.228480374101522,
            "unit": "iter/sec",
            "range": "stddev: 0.00358652328313329",
            "extra": "mean: 32.02205128205093 msec\nrounds: 39"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 760.0757930417708,
            "unit": "iter/sec",
            "range": "stddev: 0.0006578356825371922",
            "extra": "mean: 1.3156582661290517 msec\nrounds: 992"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1261.8679964527262,
            "unit": "iter/sec",
            "range": "stddev: 0.0004094758791614597",
            "extra": "mean: 792.475918884645 usec\nrounds: 1578"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1588.3905888596128,
            "unit": "iter/sec",
            "range": "stddev: 0.0004901493321895927",
            "extra": "mean: 629.5680716151508 usec\nrounds: 2681"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1430.773356825168,
            "unit": "iter/sec",
            "range": "stddev: 0.000277663409992855",
            "extra": "mean: 698.9227156276953 usec\nrounds: 2342"
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
        "date": 1737729243963,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 420.7638667455165,
            "unit": "iter/sec",
            "range": "stddev: 0.0017050480050061073",
            "extra": "mean: 2.3766299319727784 msec\nrounds: 735"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 647.1631379004876,
            "unit": "iter/sec",
            "range": "stddev: 0.0011046279707305556",
            "extra": "mean: 1.5452054380664788 msec\nrounds: 993"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 806.5280104647469,
            "unit": "iter/sec",
            "range": "stddev: 0.0010124362522828648",
            "extra": "mean: 1.2398825422365287 msec\nrounds: 1243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1408.1357870532,
            "unit": "iter/sec",
            "range": "stddev: 0.0005697414701703875",
            "extra": "mean: 710.1587852494652 usec\nrounds: 2305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 459.44532669597254,
            "unit": "iter/sec",
            "range": "stddev: 0.0012871515509566228",
            "extra": "mean: 2.1765375375375777 msec\nrounds: 666"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 626.7440645844947,
            "unit": "iter/sec",
            "range": "stddev: 0.0009657924698291831",
            "extra": "mean: 1.5955476190475908 msec\nrounds: 882"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 913.2157920381593,
            "unit": "iter/sec",
            "range": "stddev: 0.0005835356693572561",
            "extra": "mean: 1.0950314358538977 msec\nrounds: 1177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1368.8936095625197,
            "unit": "iter/sec",
            "range": "stddev: 0.0005559394416962462",
            "extra": "mean: 730.5169612995613 usec\nrounds: 2093"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.805534941697097,
            "unit": "iter/sec",
            "range": "stddev: 0.007337010443634588",
            "extra": "mean: 40.313583333332616 msec\nrounds: 36"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.560170656412982,
            "unit": "iter/sec",
            "range": "stddev: 0.009858857434012382",
            "extra": "mean: 42.444514285714824 msec\nrounds: 35"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 650.0497556369662,
            "unit": "iter/sec",
            "range": "stddev: 0.0009927646869928384",
            "extra": "mean: 1.538343782654186 msec\nrounds: 957"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1083.729782505097,
            "unit": "iter/sec",
            "range": "stddev: 0.0006324678508198797",
            "extra": "mean: 922.7392438071128 usec\nrounds: 1534"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1456.786258789717,
            "unit": "iter/sec",
            "range": "stddev: 0.000498697057891628",
            "extra": "mean: 686.4424990051662 usec\nrounds: 2513"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1171.1754026618696,
            "unit": "iter/sec",
            "range": "stddev: 0.0006361221523568716",
            "extra": "mean: 853.8430688752351 usec\nrounds: 2294"
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
        "date": 1738381560311,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 548.8637037916185,
            "unit": "iter/sec",
            "range": "stddev: 0.0010324089489830263",
            "extra": "mean: 1.8219459459459173 msec\nrounds: 740"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 907.0661123298202,
            "unit": "iter/sec",
            "range": "stddev: 0.0004331665031647647",
            "extra": "mean: 1.1024554730982914 msec\nrounds: 1078"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1020.2110448409666,
            "unit": "iter/sec",
            "range": "stddev: 0.00047343804471240215",
            "extra": "mean: 980.1893491124506 usec\nrounds: 1352"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1906.9709580201609,
            "unit": "iter/sec",
            "range": "stddev: 0.00032237190696564496",
            "extra": "mean: 524.3918350168329 usec\nrounds: 2376"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 549.1170775410766,
            "unit": "iter/sec",
            "range": "stddev: 0.0007134840473976215",
            "extra": "mean: 1.8211052631580107 msec\nrounds: 665"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 638.146856258486,
            "unit": "iter/sec",
            "range": "stddev: 0.0010196009867907848",
            "extra": "mean: 1.5670374149660353 msec\nrounds: 882"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 862.6780753253163,
            "unit": "iter/sec",
            "range": "stddev: 0.0007108647317148518",
            "extra": "mean: 1.1591809605488115 msec\nrounds: 1166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1660.08074431885,
            "unit": "iter/sec",
            "range": "stddev: 0.0003207687041368198",
            "extra": "mean: 602.3803380782609 usec\nrounds: 2248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.39536916460638,
            "unit": "iter/sec",
            "range": "stddev: 0.009523336480417107",
            "extra": "mean: 44.652088235294606 msec\nrounds: 34"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.907124322835656,
            "unit": "iter/sec",
            "range": "stddev: 0.005638065178148685",
            "extra": "mean: 38.599421052631335 msec\nrounds: 38"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 861.3852318657213,
            "unit": "iter/sec",
            "range": "stddev: 0.0003229390208461623",
            "extra": "mean: 1.1609207622866315 msec\nrounds: 997"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1265.1953983838089,
            "unit": "iter/sec",
            "range": "stddev: 0.00043590962839223484",
            "extra": "mean: 790.3917460318178 usec\nrounds: 1575"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1735.0917876049773,
            "unit": "iter/sec",
            "range": "stddev: 0.00029352577682533615",
            "extra": "mean: 576.3383857521126 usec\nrounds: 2639"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1592.5717718583692,
            "unit": "iter/sec",
            "range": "stddev: 0.00012607753296595234",
            "extra": "mean: 627.9151857834964 usec\nrounds: 2476"
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
        "date": 1738382143853,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 605.9443213764855,
            "unit": "iter/sec",
            "range": "stddev: 0.0005306615496825681",
            "extra": "mean: 1.6503166458072636 msec\nrounds: 799"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1019.4408498600711,
            "unit": "iter/sec",
            "range": "stddev: 0.0001087445891144108",
            "extra": "mean: 980.9298892988843 usec\nrounds: 1084"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1270.330238672938,
            "unit": "iter/sec",
            "range": "stddev: 0.00009265350099569185",
            "extra": "mean: 787.196879643406 usec\nrounds: 1346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2410.894512065539,
            "unit": "iter/sec",
            "range": "stddev: 0.00002317535105340059",
            "extra": "mean: 414.78380534503265 usec\nrounds: 2507"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 699.1776201270353,
            "unit": "iter/sec",
            "range": "stddev: 0.00008008274966613961",
            "extra": "mean: 1.4302517289073233 msec\nrounds: 723"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 929.3689238658903,
            "unit": "iter/sec",
            "range": "stddev: 0.00007676162549855626",
            "extra": "mean: 1.0759989648032409 msec\nrounds: 966"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1215.684897511435,
            "unit": "iter/sec",
            "range": "stddev: 0.000059315218096343527",
            "extra": "mean: 822.5815768930318 usec\nrounds: 1281"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2105.697038875287,
            "unit": "iter/sec",
            "range": "stddev: 0.00014605652150598712",
            "extra": "mean: 474.9021257750016 usec\nrounds: 2258"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 33.918047379376056,
            "unit": "iter/sec",
            "range": "stddev: 0.004938472121528935",
            "extra": "mean: 29.482829268292498 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 38.87517459118656,
            "unit": "iter/sec",
            "range": "stddev: 0.0019232162571532335",
            "extra": "mean: 25.723357142856702 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 922.8762055460559,
            "unit": "iter/sec",
            "range": "stddev: 0.00012176494192175775",
            "extra": "mean: 1.0835689488909412 msec\nrounds: 1037"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1593.8285408668514,
            "unit": "iter/sec",
            "range": "stddev: 0.000027185972324735326",
            "extra": "mean: 627.4200607903031 usec\nrounds: 1645"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1851.3724528998378,
            "unit": "iter/sec",
            "range": "stddev: 0.00023550317949805067",
            "extra": "mean: 540.1398289326829 usec\nrounds: 2689"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1361.5843679416594,
            "unit": "iter/sec",
            "range": "stddev: 0.000363002282720243",
            "extra": "mean: 734.4385140905551 usec\nrounds: 2342"
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
          "id": "81ed4133e00ed6218070f68b41cdf91bfde1132a",
          "message": "Merge pull request #1575 from TeoZosa/dependabot/pip/sentry-sdk-2.21.0",
          "timestamp": "2025-02-12T15:07:19Z",
          "tree_id": "e4f9a6950ae534fdf525c9ef3d2dedff04fe7fbf",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/81ed4133e00ed6218070f68b41cdf91bfde1132a"
        },
        "date": 1739373190570,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 744.4987681231755,
            "unit": "iter/sec",
            "range": "stddev: 0.00007860005153367133",
            "extra": "mean: 1.3431855670103034 msec\nrounds: 776"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1008.7315343969847,
            "unit": "iter/sec",
            "range": "stddev: 0.00005738275255599705",
            "extra": "mean: 991.344045368618 usec\nrounds: 1058"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1251.456353540323,
            "unit": "iter/sec",
            "range": "stddev: 0.00009733432423403354",
            "extra": "mean: 799.0690184048668 usec\nrounds: 1304"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2268.4109146677165,
            "unit": "iter/sec",
            "range": "stddev: 0.00006856646638566183",
            "extra": "mean: 440.83723699878374 usec\nrounds: 2519"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 606.2134329764839,
            "unit": "iter/sec",
            "range": "stddev: 0.0004202567696011226",
            "extra": "mean: 1.6495840336134415 msec\nrounds: 714"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 832.3701827659976,
            "unit": "iter/sec",
            "range": "stddev: 0.00017470340745854857",
            "extra": "mean: 1.2013885416665961 msec\nrounds: 960"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1016.6316457994212,
            "unit": "iter/sec",
            "range": "stddev: 0.00035484765354928727",
            "extra": "mean: 983.6404405979875 usec\nrounds: 1271"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2004.6666606137987,
            "unit": "iter/sec",
            "range": "stddev: 0.00008515878888898731",
            "extra": "mean: 498.83605072467014 usec\nrounds: 2208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 34.6003263076926,
            "unit": "iter/sec",
            "range": "stddev: 0.0024791797863320192",
            "extra": "mean: 28.90146153846164 msec\nrounds: 39"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 35.462030360816684,
            "unit": "iter/sec",
            "range": "stddev: 0.0021055208368079407",
            "extra": "mean: 28.199175000000487 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 857.9269536479499,
            "unit": "iter/sec",
            "range": "stddev: 0.00026722655960781215",
            "extra": "mean: 1.1656003996003952 msec\nrounds: 1001"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1443.68112569286,
            "unit": "iter/sec",
            "range": "stddev: 0.0001145569066952702",
            "extra": "mean: 692.673736743683 usec\nrounds: 1603"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1807.642747113131,
            "unit": "iter/sec",
            "range": "stddev: 0.0002640542181780124",
            "extra": "mean: 553.2066563468004 usec\nrounds: 2584"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1321.828406594244,
            "unit": "iter/sec",
            "range": "stddev: 0.00028430020775727555",
            "extra": "mean: 756.5278481013654 usec\nrounds: 2370"
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
          "id": "fee566d292351d1c70c60324a0939d242cefc4fd",
          "message": "Merge pull request #1576 from TeoZosa/dependabot/pip/sentry-sdk-2.22.0",
          "timestamp": "2025-02-17T15:46:28Z",
          "tree_id": "d763becc220d4a3e6ee726a924362b8efcf735f1",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/fee566d292351d1c70c60324a0939d242cefc4fd"
        },
        "date": 1739809158890,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 685.6441541122537,
            "unit": "iter/sec",
            "range": "stddev: 0.00015826067972551697",
            "extra": "mean: 1.4584824999999635 msec\nrounds: 800"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 867.9552421087922,
            "unit": "iter/sec",
            "range": "stddev: 0.0003759058786712897",
            "extra": "mean: 1.1521331417624607 msec\nrounds: 1044"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1154.2798600081396,
            "unit": "iter/sec",
            "range": "stddev: 0.0003662006647080822",
            "extra": "mean: 866.341027550241 usec\nrounds: 1343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2165.397541976416,
            "unit": "iter/sec",
            "range": "stddev: 0.0001135993751600274",
            "extra": "mean: 461.8089660743188 usec\nrounds: 2476"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 638.0553559481515,
            "unit": "iter/sec",
            "range": "stddev: 0.00013182660884818157",
            "extra": "mean: 1.5672621359223575 msec\nrounds: 721"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 837.1601435032645,
            "unit": "iter/sec",
            "range": "stddev: 0.00034951427907636785",
            "extra": "mean: 1.1945145833332431 msec\nrounds: 960"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1076.3997235030583,
            "unit": "iter/sec",
            "range": "stddev: 0.00029044756567700127",
            "extra": "mean: 929.0229067930067 usec\nrounds: 1266"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1926.8378073892236,
            "unit": "iter/sec",
            "range": "stddev: 0.00023093112149457525",
            "extra": "mean: 518.9850417949573 usec\nrounds: 2273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 35.83779812568334,
            "unit": "iter/sec",
            "range": "stddev: 0.0020681726729474045",
            "extra": "mean: 27.90349999999986 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 31.486774786619275,
            "unit": "iter/sec",
            "range": "stddev: 0.008854263588113764",
            "extra": "mean: 31.759365853658768 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 832.7899440003918,
            "unit": "iter/sec",
            "range": "stddev: 0.00043312245890406365",
            "extra": "mean: 1.2007829912023165 msec\nrounds: 1023"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1376.9924190578529,
            "unit": "iter/sec",
            "range": "stddev: 0.000275259651712783",
            "extra": "mean: 726.2204106281184 usec\nrounds: 1656"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1640.9676575355998,
            "unit": "iter/sec",
            "range": "stddev: 0.0003998123027042747",
            "extra": "mean: 609.3965322276961 usec\nrounds: 2653"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1513.1655398101368,
            "unit": "iter/sec",
            "range": "stddev: 0.0004399100386128135",
            "extra": "mean: 660.8662262593386 usec\nrounds: 2422"
          }
        ]
      }
    ]
  }
}