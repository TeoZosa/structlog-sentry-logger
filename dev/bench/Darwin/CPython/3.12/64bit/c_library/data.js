window.BENCHMARK_DATA = {
  "lastUpdate": 1729041086527,
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
      }
    ]
  }
}