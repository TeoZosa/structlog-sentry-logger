window.BENCHMARK_DATA = {
  "lastUpdate": 1726841665801,
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
      }
    ]
  }
}