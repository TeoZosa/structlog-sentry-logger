window.BENCHMARK_DATA = {
  "lastUpdate": 1726209094457,
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
        "date": 1726187135091,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 771.7263075108178,
            "unit": "iter/sec",
            "range": "stddev: 0.000013867788093318338",
            "extra": "mean: 1.2957961783439427 msec\nrounds: 785"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1006.3322985199372,
            "unit": "iter/sec",
            "range": "stddev: 0.0000995832455523126",
            "extra": "mean: 993.7075471698062 usec\nrounds: 1060"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1321.8641029563591,
            "unit": "iter/sec",
            "range": "stddev: 0.000012144665175159192",
            "extra": "mean: 756.5074183976193 usec\nrounds: 1348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2433.996716752383,
            "unit": "iter/sec",
            "range": "stddev: 0.000008216434929282838",
            "extra": "mean: 410.84689766314614 usec\nrounds: 2482"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 702.5207413192651,
            "unit": "iter/sec",
            "range": "stddev: 0.00005556606115105087",
            "extra": "mean: 1.4234455172413814 msec\nrounds: 725"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 933.5915649561688,
            "unit": "iter/sec",
            "range": "stddev: 0.00002002717012202392",
            "extra": "mean: 1.0711322140608128 msec\nrounds: 953"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1244.8773395192645,
            "unit": "iter/sec",
            "range": "stddev: 0.00002554341648938354",
            "extra": "mean: 803.2919937205788 usec\nrounds: 1274"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2202.29026535277,
            "unit": "iter/sec",
            "range": "stddev: 0.000028682886576648397",
            "extra": "mean: 454.0727513227312 usec\nrounds: 2268"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 40.71882295455794,
            "unit": "iter/sec",
            "range": "stddev: 0.0004910877755065373",
            "extra": "mean: 24.558666666666575 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 41.68468155811581,
            "unit": "iter/sec",
            "range": "stddev: 0.0023344263802737943",
            "extra": "mean: 23.98962790697641 msec\nrounds: 43"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 994.9359203592178,
            "unit": "iter/sec",
            "range": "stddev: 0.00012830964964855043",
            "extra": "mean: 1.0050898550722278 msec\nrounds: 1035"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1614.102135012535,
            "unit": "iter/sec",
            "range": "stddev: 0.000026916864413283118",
            "extra": "mean: 619.5394816154146 usec\nrounds: 1659"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2064.4673618856023,
            "unit": "iter/sec",
            "range": "stddev: 0.00010334466582292913",
            "extra": "mean: 484.38644197631675 usec\nrounds: 2611"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1277.489302079333,
            "unit": "iter/sec",
            "range": "stddev: 0.00047368768655502397",
            "extra": "mean: 782.7854200988835 usec\nrounds: 2428"
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
        "date": 1726187916605,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 783.2936471071433,
            "unit": "iter/sec",
            "range": "stddev: 0.0000482336194403778",
            "extra": "mean: 1.2766604244694126 msec\nrounds: 801"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1061.896040476058,
            "unit": "iter/sec",
            "range": "stddev: 0.000015160959546107978",
            "extra": "mean: 941.7117701575482 usec\nrounds: 1079"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1157.3430075338326,
            "unit": "iter/sec",
            "range": "stddev: 0.0001737596540512671",
            "extra": "mean: 864.0480769230957 usec\nrounds: 1352"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2347.7474328079925,
            "unit": "iter/sec",
            "range": "stddev: 0.000025128649115966548",
            "extra": "mean: 425.94019528070066 usec\nrounds: 2458"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 712.0090554963534,
            "unit": "iter/sec",
            "range": "stddev: 0.00001577638521117518",
            "extra": "mean: 1.4044765193370796 msec\nrounds: 724"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 888.4153967297829,
            "unit": "iter/sec",
            "range": "stddev: 0.0001829775196381932",
            "extra": "mean: 1.1255995828988952 msec\nrounds: 959"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1119.7139242449728,
            "unit": "iter/sec",
            "range": "stddev: 0.00017615977930482532",
            "extra": "mean: 893.085258964073 usec\nrounds: 1255"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2137.625014191048,
            "unit": "iter/sec",
            "range": "stddev: 0.00002305010285070075",
            "extra": "mean: 467.80889695868143 usec\nrounds: 2203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 40.992498372798075,
            "unit": "iter/sec",
            "range": "stddev: 0.00047503259066650525",
            "extra": "mean: 24.394707317072996 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 42.387751319934964,
            "unit": "iter/sec",
            "range": "stddev: 0.00019473905930286457",
            "extra": "mean: 23.591720930232498 msec\nrounds: 43"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1012.4356732944065,
            "unit": "iter/sec",
            "range": "stddev: 0.000035189192221982124",
            "extra": "mean: 987.7170731707413 usec\nrounds: 1025"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1565.4240793301647,
            "unit": "iter/sec",
            "range": "stddev: 0.00005132664684087309",
            "extra": "mean: 638.8045343137265 usec\nrounds: 1632"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2078.9706268760942,
            "unit": "iter/sec",
            "range": "stddev: 0.00018009799680389493",
            "extra": "mean: 481.0072769054084 usec\nrounds: 2611"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1427.1029689854768,
            "unit": "iter/sec",
            "range": "stddev: 0.0001831067164964177",
            "extra": "mean: 700.7202855943162 usec\nrounds: 2381"
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
        "date": 1726189633095,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 612.4878485782295,
            "unit": "iter/sec",
            "range": "stddev: 0.0003021326439258436",
            "extra": "mean: 1.632685452162527 msec\nrounds: 763"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 815.3065004542835,
            "unit": "iter/sec",
            "range": "stddev: 0.00031021531612739046",
            "extra": "mean: 1.2265325977933532 msec\nrounds: 997"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 927.4233449212961,
            "unit": "iter/sec",
            "range": "stddev: 0.0003191228340976812",
            "extra": "mean: 1.0782562305296108 msec\nrounds: 1284"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1826.9439513709196,
            "unit": "iter/sec",
            "range": "stddev: 0.00023688030190724586",
            "extra": "mean: 547.3621668850927 usec\nrounds: 2289"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 480.46100675741855,
            "unit": "iter/sec",
            "range": "stddev: 0.0009655063037582467",
            "extra": "mean: 2.081334355828158 msec\nrounds: 652"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 657.1786655838199,
            "unit": "iter/sec",
            "range": "stddev: 0.0007521550312108878",
            "extra": "mean: 1.521656213705031 msec\nrounds: 861"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 890.7215284605187,
            "unit": "iter/sec",
            "range": "stddev: 0.0006815449508522519",
            "extra": "mean: 1.1226853377265429 msec\nrounds: 1214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1731.2165347569694,
            "unit": "iter/sec",
            "range": "stddev: 0.00027242164799847537",
            "extra": "mean: 577.628494138881 usec\nrounds: 2218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 38.29578167294735,
            "unit": "iter/sec",
            "range": "stddev: 0.0016820406371069008",
            "extra": "mean: 26.112536585365312 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 42.80723900277023,
            "unit": "iter/sec",
            "range": "stddev: 0.00019428763027574657",
            "extra": "mean: 23.360534883721087 msec\nrounds: 43"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 981.2184599769325,
            "unit": "iter/sec",
            "range": "stddev: 0.00008759031020407635",
            "extra": "mean: 1.0191410381980675 msec\nrounds: 1021"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1583.5112020740382,
            "unit": "iter/sec",
            "range": "stddev: 0.00006760011582717595",
            "extra": "mean: 631.5080049261592 usec\nrounds: 1624"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2046.3652526718438,
            "unit": "iter/sec",
            "range": "stddev: 0.00013021560231841431",
            "extra": "mean: 488.6713154918686 usec\nrounds: 2653"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1643.109745413333,
            "unit": "iter/sec",
            "range": "stddev: 0.0002023937522823762",
            "extra": "mean: 608.6020746888363 usec\nrounds: 2410"
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
        "date": 1726190854274,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 731.8497158942921,
            "unit": "iter/sec",
            "range": "stddev: 0.00005510447304384326",
            "extra": "mean: 1.366400749063677 msec\nrounds: 801"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 954.7862785354858,
            "unit": "iter/sec",
            "range": "stddev: 0.0001280804623443014",
            "extra": "mean: 1.047354808590113 msec\nrounds: 1071"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1140.1028706258298,
            "unit": "iter/sec",
            "range": "stddev: 0.00016492266025929964",
            "extra": "mean: 877.1138339920818 usec\nrounds: 1265"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2186.7170570511375,
            "unit": "iter/sec",
            "range": "stddev: 0.00004584552107284289",
            "extra": "mean: 457.3065348237298 usec\nrounds: 2326"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 633.5781962210027,
            "unit": "iter/sec",
            "range": "stddev: 0.00023742987951925264",
            "extra": "mean: 1.5783371428570803 msec\nrounds: 700"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 930.7382161893869,
            "unit": "iter/sec",
            "range": "stddev: 0.00005755731635454813",
            "extra": "mean: 1.0744159663865351 msec\nrounds: 952"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1248.4882350988812,
            "unit": "iter/sec",
            "range": "stddev: 0.00003451649189929328",
            "extra": "mean: 800.9687010953686 usec\nrounds: 1278"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2140.632373761194,
            "unit": "iter/sec",
            "range": "stddev: 0.000044130045137341665",
            "extra": "mean: 467.1516754850119 usec\nrounds: 2268"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 39.35979847783105,
            "unit": "iter/sec",
            "range": "stddev: 0.0026204836648612275",
            "extra": "mean: 25.406634146341943 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 41.6099895677825,
            "unit": "iter/sec",
            "range": "stddev: 0.00041757549269876926",
            "extra": "mean: 24.032690476189714 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1000.9367256904252,
            "unit": "iter/sec",
            "range": "stddev: 0.00015376347569176358",
            "extra": "mean: 999.0641509434283 usec\nrounds: 1060"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1629.597724908396,
            "unit": "iter/sec",
            "range": "stddev: 0.00005468443567182139",
            "extra": "mean: 613.6483775811682 usec\nrounds: 1695"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2245.57569114321,
            "unit": "iter/sec",
            "range": "stddev: 0.00011905266253445418",
            "extra": "mean: 445.3201038576017 usec\nrounds: 2696"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1482.1361673961082,
            "unit": "iter/sec",
            "range": "stddev: 0.00019743502695767902",
            "extra": "mean: 674.7018404907092 usec\nrounds: 2445"
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
        "date": 1726191763063,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 536.2017659109009,
            "unit": "iter/sec",
            "range": "stddev: 0.0007297812204905824",
            "extra": "mean: 1.8649696132596607 msec\nrounds: 724"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 790.8659081121997,
            "unit": "iter/sec",
            "range": "stddev: 0.00040639424393137095",
            "extra": "mean: 1.2644368530020522 msec\nrounds: 966"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1028.3708383770118,
            "unit": "iter/sec",
            "range": "stddev: 0.00024831574475851873",
            "extra": "mean: 972.4118602762143 usec\nrounds: 1231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1931.5371939083923,
            "unit": "iter/sec",
            "range": "stddev: 0.00019880718731169107",
            "extra": "mean: 517.7223628692016 usec\nrounds: 2370"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 579.8362555499708,
            "unit": "iter/sec",
            "range": "stddev: 0.0006232436068723083",
            "extra": "mean: 1.7246248236952804 msec\nrounds: 709"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 809.1688569089274,
            "unit": "iter/sec",
            "range": "stddev: 0.0003135192031936145",
            "extra": "mean: 1.2358359957401954 msec\nrounds: 939"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1171.0912676200592,
            "unit": "iter/sec",
            "range": "stddev: 0.0001556264365340754",
            "extra": "mean: 853.9044117647995 usec\nrounds: 1224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2027.9324724359603,
            "unit": "iter/sec",
            "range": "stddev: 0.00012717478189678956",
            "extra": "mean: 493.1130664320376 usec\nrounds: 2273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 40.782083847963975,
            "unit": "iter/sec",
            "range": "stddev: 0.0008316286736705544",
            "extra": "mean: 24.520571428571678 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 41.86997134341117,
            "unit": "iter/sec",
            "range": "stddev: 0.0006151071276747895",
            "extra": "mean: 23.883465116279904 msec\nrounds: 43"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1015.5291329918896,
            "unit": "iter/sec",
            "range": "stddev: 0.000026878560975113478",
            "extra": "mean: 984.7083333334431 usec\nrounds: 1032"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1594.3477306894952,
            "unit": "iter/sec",
            "range": "stddev: 0.00004501094640358331",
            "extra": "mean: 627.2157451922598 usec\nrounds: 1664"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2165.7230163854833,
            "unit": "iter/sec",
            "range": "stddev: 0.00013506868538384653",
            "extra": "mean: 461.73956338561027 usec\nrounds: 2611"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1510.9593363619294,
            "unit": "iter/sec",
            "range": "stddev: 0.0001821000314280715",
            "extra": "mean: 661.8311796582087 usec\nrounds: 2399"
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
        "date": 1726192375715,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 775.7157651431991,
            "unit": "iter/sec",
            "range": "stddev: 0.000034616730208203265",
            "extra": "mean: 1.2891319796954206 msec\nrounds: 788"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1022.343017300755,
            "unit": "iter/sec",
            "range": "stddev: 0.0000512488202164071",
            "extra": "mean: 978.1452830188576 usec\nrounds: 1060"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1306.918044286364,
            "unit": "iter/sec",
            "range": "stddev: 0.00003605212435562491",
            "extra": "mean: 765.1589205396923 usec\nrounds: 1334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2389.8991902424373,
            "unit": "iter/sec",
            "range": "stddev: 0.000008637747134179264",
            "extra": "mean: 418.427691043553 usec\nrounds: 2434"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 699.4501927428529,
            "unit": "iter/sec",
            "range": "stddev: 0.000020612643410198508",
            "extra": "mean: 1.4296943661971966 msec\nrounds: 710"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 905.1598892780327,
            "unit": "iter/sec",
            "range": "stddev: 0.00006607816170137964",
            "extra": "mean: 1.1047771911298598 msec\nrounds: 947"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1241.2028526164456,
            "unit": "iter/sec",
            "range": "stddev: 0.00001754302968296597",
            "extra": "mean: 805.6700787401577 usec\nrounds: 1270"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2169.025004845713,
            "unit": "iter/sec",
            "range": "stddev: 0.0000122252915681785",
            "extra": "mean: 461.0366398570551 usec\nrounds: 2238"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 40.99647430320965,
            "unit": "iter/sec",
            "range": "stddev: 0.0004900668632825967",
            "extra": "mean: 24.392341463414798 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 42.061367535235576,
            "unit": "iter/sec",
            "range": "stddev: 0.00017227325652266172",
            "extra": "mean: 23.77478571428477 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1016.8968835330569,
            "unit": "iter/sec",
            "range": "stddev: 0.000020139008966900727",
            "extra": "mean: 983.3838771593526 usec\nrounds: 1042"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1512.4150589774245,
            "unit": "iter/sec",
            "range": "stddev: 0.00009317634540059273",
            "extra": "mean: 661.1941570299631 usec\nrounds: 1643"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2020.3220631051736,
            "unit": "iter/sec",
            "range": "stddev: 0.00019115597748763072",
            "extra": "mean: 494.9705882353383 usec\nrounds: 2584"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1558.9377122163708,
            "unit": "iter/sec",
            "range": "stddev: 0.0001760133575912875",
            "extra": "mean: 641.4624472572938 usec\nrounds: 2370"
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
        "date": 1726209067870,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 768.9837420393144,
            "unit": "iter/sec",
            "range": "stddev: 0.000049630591969749394",
            "extra": "mean: 1.300417610062912 msec\nrounds: 795"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 993.40476609578,
            "unit": "iter/sec",
            "range": "stddev: 0.00017210619457726602",
            "extra": "mean: 1.0066390197926474 msec\nrounds: 1061"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1298.3025571297328,
            "unit": "iter/sec",
            "range": "stddev: 0.000015800705334649395",
            "extra": "mean: 770.2364864864662 usec\nrounds: 1332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2210.3059829913877,
            "unit": "iter/sec",
            "range": "stddev: 0.00008060704536111617",
            "extra": "mean: 452.4260476581701 usec\nrounds: 2434"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 679.6847557371237,
            "unit": "iter/sec",
            "range": "stddev: 0.00006133968181012752",
            "extra": "mean: 1.4712703081232001 msec\nrounds: 714"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 902.0729502472884,
            "unit": "iter/sec",
            "range": "stddev: 0.00009427895208917059",
            "extra": "mean: 1.1085577942735858 msec\nrounds: 943"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1195.5165270149537,
            "unit": "iter/sec",
            "range": "stddev: 0.00007708651944017272",
            "extra": "mean: 836.458532695376 usec\nrounds: 1254"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2138.2167195435845,
            "unit": "iter/sec",
            "range": "stddev: 0.000020451214627779997",
            "extra": "mean: 467.6794409377999 usec\nrounds: 2218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 41.011820192462935,
            "unit": "iter/sec",
            "range": "stddev: 0.0006815943123441931",
            "extra": "mean: 24.383214285714097 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 42.17894466318724,
            "unit": "iter/sec",
            "range": "stddev: 0.0004259252881097639",
            "extra": "mean: 23.708511627906514 msec\nrounds: 43"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1014.4412750671795,
            "unit": "iter/sec",
            "range": "stddev: 0.000023513056205262006",
            "extra": "mean: 985.7643064984485 usec\nrounds: 1031"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1595.2147397074657,
            "unit": "iter/sec",
            "range": "stddev: 0.00003807954512853624",
            "extra": "mean: 626.8748495787986 usec\nrounds: 1662"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2027.256122669266,
            "unit": "iter/sec",
            "range": "stddev: 0.00019392532212697666",
            "extra": "mean: 493.27758284597553 usec\nrounds: 2565"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1699.8628724439875,
            "unit": "iter/sec",
            "range": "stddev: 0.00015873324133017363",
            "extra": "mean: 588.2827469266649 usec\nrounds: 2359"
          }
        ]
      }
    ]
  }
}