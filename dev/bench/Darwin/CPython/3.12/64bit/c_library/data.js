window.BENCHMARK_DATA = {
  "lastUpdate": 1727881916374,
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
      }
    ]
  }
}