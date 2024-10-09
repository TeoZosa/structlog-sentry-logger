window.BENCHMARK_DATA = {
  "lastUpdate": 1728483542789,
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
        "date": 1726209714550,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 739.028327487112,
            "unit": "iter/sec",
            "range": "stddev: 0.00007491794329415234",
            "extra": "mean: 1.353128104575178 msec\nrounds: 765"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 949.425345358132,
            "unit": "iter/sec",
            "range": "stddev: 0.0002853993514318338",
            "extra": "mean: 1.0532687007874124 msec\nrounds: 1016"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1198.872179041493,
            "unit": "iter/sec",
            "range": "stddev: 0.000031388553979373806",
            "extra": "mean: 834.1172791243745 usec\nrounds: 1279"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2205.071664829078,
            "unit": "iter/sec",
            "range": "stddev: 0.00004262108308817058",
            "extra": "mean: 453.50000000000585 usec\nrounds: 2284"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 646.9018058154769,
            "unit": "iter/sec",
            "range": "stddev: 0.00025116410220514665",
            "extra": "mean: 1.5458296622613559 msec\nrounds: 681"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 871.5358149781965,
            "unit": "iter/sec",
            "range": "stddev: 0.000119149183162676",
            "extra": "mean: 1.1473997772828386 msec\nrounds: 898"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1168.3832763721741,
            "unit": "iter/sec",
            "range": "stddev: 0.00003045524273475041",
            "extra": "mean: 855.8835274542754 usec\nrounds: 1202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1979.4939437806331,
            "unit": "iter/sec",
            "range": "stddev: 0.000052905109879410084",
            "extra": "mean: 505.17962085304544 usec\nrounds: 2110"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 38.058991436726984,
            "unit": "iter/sec",
            "range": "stddev: 0.003574026874908204",
            "extra": "mean: 26.27499999999996 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 40.586227469569785,
            "unit": "iter/sec",
            "range": "stddev: 0.0003863713372612025",
            "extra": "mean: 24.63890000000042 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 971.0505553194205,
            "unit": "iter/sec",
            "range": "stddev: 0.000034576099912498944",
            "extra": "mean: 1.0298125000001228 msec\nrounds: 992"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1529.908992270851,
            "unit": "iter/sec",
            "range": "stddev: 0.00001665361316133533",
            "extra": "mean: 653.6336507936302 usec\nrounds: 1575"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1617.098090755567,
            "unit": "iter/sec",
            "range": "stddev: 0.0002925588125001861",
            "extra": "mean: 618.3916768665305 usec\nrounds: 2451"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1719.629958026613,
            "unit": "iter/sec",
            "range": "stddev: 0.00020248429483817726",
            "extra": "mean: 581.5204575451598 usec\nrounds: 2273"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1726236343012,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 744.6549667210738,
            "unit": "iter/sec",
            "range": "stddev: 0.00011072980484922968",
            "extra": "mean: 1.3429038208168844 msec\nrounds: 759"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 998.2800603672478,
            "unit": "iter/sec",
            "range": "stddev: 0.000059376592597970134",
            "extra": "mean: 1.001722902921771 msec\nrounds: 1061"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1264.5897773296956,
            "unit": "iter/sec",
            "range": "stddev: 0.00006233442502321789",
            "extra": "mean: 790.770270270251 usec\nrounds: 1332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2404.063216376303,
            "unit": "iter/sec",
            "range": "stddev: 0.000020094780536101096",
            "extra": "mean: 415.96243941842835 usec\nrounds: 2476"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 642.3707764121621,
            "unit": "iter/sec",
            "range": "stddev: 0.00037960054914665015",
            "extra": "mean: 1.5567333333332922 msec\nrounds: 720"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 889.4485608570324,
            "unit": "iter/sec",
            "range": "stddev: 0.00010550092920748831",
            "extra": "mean: 1.1242921108742312 msec\nrounds: 938"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1222.1580181875966,
            "unit": "iter/sec",
            "range": "stddev: 0.000015079555011563137",
            "extra": "mean: 818.224800000047 usec\nrounds: 1250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2130.2711725711174,
            "unit": "iter/sec",
            "range": "stddev: 0.00004500667831508646",
            "extra": "mean: 469.4238052299493 usec\nrounds: 2218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 39.3234826410798,
            "unit": "iter/sec",
            "range": "stddev: 0.0014681788856418616",
            "extra": "mean: 25.430097560975863 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 41.520151607868314,
            "unit": "iter/sec",
            "range": "stddev: 0.0009859318605076716",
            "extra": "mean: 24.084690476190218 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 892.2032206486439,
            "unit": "iter/sec",
            "range": "stddev: 0.0003649508109918863",
            "extra": "mean: 1.1208208812259008 msec\nrounds: 1044"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1596.0501632367457,
            "unit": "iter/sec",
            "range": "stddev: 0.00004267970260141308",
            "extra": "mean: 626.5467233009942 usec\nrounds: 1648"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1889.5693655551765,
            "unit": "iter/sec",
            "range": "stddev: 0.00027077063114396347",
            "extra": "mean: 529.2211115553246 usec\nrounds: 2501"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1336.8164890960645,
            "unit": "iter/sec",
            "range": "stddev: 0.0002801552955731713",
            "extra": "mean: 748.0458298926168 usec\nrounds: 2422"
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
        "date": 1726276501778,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 782.4467868230475,
            "unit": "iter/sec",
            "range": "stddev: 0.00006420209324730307",
            "extra": "mean: 1.2780421836228368 msec\nrounds: 806"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 978.6718283615763,
            "unit": "iter/sec",
            "range": "stddev: 0.00024498791834624037",
            "extra": "mean: 1.021792975970433 msec\nrounds: 1082"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1193.0234522368285,
            "unit": "iter/sec",
            "range": "stddev: 0.00019293080070822508",
            "extra": "mean: 838.2064896755181 usec\nrounds: 1356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2348.053908136385,
            "unit": "iter/sec",
            "range": "stddev: 0.00002952256811859409",
            "extra": "mean: 425.88460023632297 usec\nrounds: 2539"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 609.2329673484511,
            "unit": "iter/sec",
            "range": "stddev: 0.0002744261561124859",
            "extra": "mean: 1.6414082191780826 msec\nrounds: 730"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 899.8563865564557,
            "unit": "iter/sec",
            "range": "stddev: 0.00006590683645059388",
            "extra": "mean: 1.1112884399551477 msec\nrounds: 891"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1097.6647418259963,
            "unit": "iter/sec",
            "range": "stddev: 0.00021673807493260766",
            "extra": "mean: 911.0249804839972 usec\nrounds: 1281"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1936.5930510284163,
            "unit": "iter/sec",
            "range": "stddev: 0.00013770684777985814",
            "extra": "mean: 516.3707467962646 usec\nrounds: 2263"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 35.56096433432785,
            "unit": "iter/sec",
            "range": "stddev: 0.0023934860721920403",
            "extra": "mean: 28.12072222222264 msec\nrounds: 36"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 34.88341671438857,
            "unit": "iter/sec",
            "range": "stddev: 0.008358815512037316",
            "extra": "mean: 28.66691666666712 msec\nrounds: 36"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 911.2616086804263,
            "unit": "iter/sec",
            "range": "stddev: 0.00010214428190950404",
            "extra": "mean: 1.097379710145008 msec\nrounds: 1035"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1459.6122285035472,
            "unit": "iter/sec",
            "range": "stddev: 0.00012316106164052973",
            "extra": "mean: 685.1134708738635 usec\nrounds: 1648"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1690.167196344907,
            "unit": "iter/sec",
            "range": "stddev: 0.00034861421891743466",
            "extra": "mean: 591.6574420344703 usec\nrounds: 2674"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1460.43587558917,
            "unit": "iter/sec",
            "range": "stddev: 0.00040272922827963516",
            "extra": "mean: 684.727085053686 usec\nrounds: 2422"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1726495175176,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 715.3457582524572,
            "unit": "iter/sec",
            "range": "stddev: 0.00013166031568117274",
            "extra": "mean: 1.3979253926701605 msec\nrounds: 764"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 983.2967024962908,
            "unit": "iter/sec",
            "range": "stddev: 0.000039431147609184786",
            "extra": "mean: 1.0169870370370455 msec\nrounds: 1080"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1198.9452246957255,
            "unit": "iter/sec",
            "range": "stddev: 0.00006330132877428416",
            "extra": "mean: 834.0664605872926 usec\nrounds: 1294"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2269.5061401022263,
            "unit": "iter/sec",
            "range": "stddev: 0.000017859950835919114",
            "extra": "mean: 440.62449637389244 usec\nrounds: 2482"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 654.506917510249,
            "unit": "iter/sec",
            "range": "stddev: 0.000059333181602765285",
            "extra": "mean: 1.5278677325581373 msec\nrounds: 688"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 864.3393424597433,
            "unit": "iter/sec",
            "range": "stddev: 0.00007735578789191906",
            "extra": "mean: 1.1569530054644888 msec\nrounds: 915"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1164.5821344540793,
            "unit": "iter/sec",
            "range": "stddev: 0.000034078199204355845",
            "extra": "mean: 858.6770914777683 usec\nrounds: 1279"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2045.3893435787309,
            "unit": "iter/sec",
            "range": "stddev: 0.000044939023266457775",
            "extra": "mean: 488.90447343895045 usec\nrounds: 2146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 36.676139845226615,
            "unit": "iter/sec",
            "range": "stddev: 0.0010115234905583264",
            "extra": "mean: 27.265682926829324 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 38.20428403739066,
            "unit": "iter/sec",
            "range": "stddev: 0.0012168436342148417",
            "extra": "mean: 26.175074999999914 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 943.5220586326433,
            "unit": "iter/sec",
            "range": "stddev: 0.00006142409313828117",
            "extra": "mean: 1.0598586337760931 msec\nrounds: 1054"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1520.2120808183881,
            "unit": "iter/sec",
            "range": "stddev: 0.00005703537911347667",
            "extra": "mean: 657.802955665016 usec\nrounds: 1624"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2220.836424675335,
            "unit": "iter/sec",
            "range": "stddev: 0.00004415245890648743",
            "extra": "mean: 450.280799112069 usec\nrounds: 2703"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 2065.5229789427763,
            "unit": "iter/sec",
            "range": "stddev: 0.00003703635745149804",
            "extra": "mean: 484.1388888889743 usec\nrounds: 2268"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1726579980881,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 696.380086416082,
            "unit": "iter/sec",
            "range": "stddev: 0.00024885547088395095",
            "extra": "mean: 1.4359974093264167 msec\nrounds: 772"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 963.8440479562053,
            "unit": "iter/sec",
            "range": "stddev: 0.00023961295403654052",
            "extra": "mean: 1.0375122428991101 msec\nrounds: 1021"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1226.4692313751455,
            "unit": "iter/sec",
            "range": "stddev: 0.00008946495309806217",
            "extra": "mean: 815.3486238531864 usec\nrounds: 1308"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2241.4889290684837,
            "unit": "iter/sec",
            "range": "stddev: 0.000045072025262350444",
            "extra": "mean: 446.13202725724784 usec\nrounds: 2348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 467.39031907179054,
            "unit": "iter/sec",
            "range": "stddev: 0.0013906298842341197",
            "extra": "mean: 2.1395393939393963 msec\nrounds: 660"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 585.8622716860497,
            "unit": "iter/sec",
            "range": "stddev: 0.0010169079791138684",
            "extra": "mean: 1.7068858131487212 msec\nrounds: 867"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 904.4530832296823,
            "unit": "iter/sec",
            "range": "stddev: 0.0005112923667749179",
            "extra": "mean: 1.105640545144843 msec\nrounds: 1174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1750.6235853656228,
            "unit": "iter/sec",
            "range": "stddev: 0.00019235341128247656",
            "extra": "mean: 571.2250242482294 usec\nrounds: 2062"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 34.345718580220264,
            "unit": "iter/sec",
            "range": "stddev: 0.006178696608411907",
            "extra": "mean: 29.11571052631582 msec\nrounds: 38"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 36.62773170092576,
            "unit": "iter/sec",
            "range": "stddev: 0.002320494864970316",
            "extra": "mean: 27.301717948718217 msec\nrounds: 39"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 870.070818744941,
            "unit": "iter/sec",
            "range": "stddev: 0.0002964103081742235",
            "extra": "mean: 1.1493317307693172 msec\nrounds: 1040"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1230.2167586775715,
            "unit": "iter/sec",
            "range": "stddev: 0.0003250937383909302",
            "extra": "mean: 812.8648816936584 usec\nrounds: 1606"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1422.51571712429,
            "unit": "iter/sec",
            "range": "stddev: 0.00034885131910357295",
            "extra": "mean: 702.9799305286879 usec\nrounds: 2591"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1431.0907455084634,
            "unit": "iter/sec",
            "range": "stddev: 0.0003600699263011499",
            "extra": "mean: 698.7677078749484 usec\nrounds: 2273"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1726669267421,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 739.2592029896427,
            "unit": "iter/sec",
            "range": "stddev: 0.00030544039783900477",
            "extra": "mean: 1.3527055137844666 msec\nrounds: 798"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1034.1542012998596,
            "unit": "iter/sec",
            "range": "stddev: 0.00004864766567618174",
            "extra": "mean: 966.9737827715344 usec\nrounds: 1068"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1266.6477755738615,
            "unit": "iter/sec",
            "range": "stddev: 0.000059802753932728274",
            "extra": "mean: 789.4854586129476 usec\nrounds: 1341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2333.5511439761003,
            "unit": "iter/sec",
            "range": "stddev: 0.00004241735235769344",
            "extra": "mean: 428.5314262691136 usec\nrounds: 2482"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 654.7035567403567,
            "unit": "iter/sec",
            "range": "stddev: 0.00019760558038414084",
            "extra": "mean: 1.5274088397790415 msec\nrounds: 724"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 854.6609545629473,
            "unit": "iter/sec",
            "range": "stddev: 0.00016415412072774598",
            "extra": "mean: 1.170054621848702 msec\nrounds: 952"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1171.1147032626577,
            "unit": "iter/sec",
            "range": "stddev: 0.00008223103697137117",
            "extra": "mean: 853.8873239436393 usec\nrounds: 1278"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1905.9446353961137,
            "unit": "iter/sec",
            "range": "stddev: 0.00015595252339184847",
            "extra": "mean: 524.6742121615559 usec\nrounds: 2253"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 33.49147774094625,
            "unit": "iter/sec",
            "range": "stddev: 0.0026685616965787485",
            "extra": "mean: 29.858342105263777 msec\nrounds: 38"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 35.28167650898337,
            "unit": "iter/sec",
            "range": "stddev: 0.002107490372379018",
            "extra": "mean: 28.34332432432403 msec\nrounds: 37"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 889.7758566598429,
            "unit": "iter/sec",
            "range": "stddev: 0.00019426068229695575",
            "extra": "mean: 1.123878550440704 msec\nrounds: 1021"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1416.068838963362,
            "unit": "iter/sec",
            "range": "stddev: 0.00010743618951690134",
            "extra": "mean: 706.1803582458981 usec\nrounds: 1619"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1727.9260916178691,
            "unit": "iter/sec",
            "range": "stddev: 0.00026527993489976626",
            "extra": "mean: 578.7284565300436 usec\nrounds: 2611"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1659.0649195419326,
            "unit": "iter/sec",
            "range": "stddev: 0.00029884245104842177",
            "extra": "mean: 602.7491680531102 usec\nrounds: 2404"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1726754500070,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 728.4399486640543,
            "unit": "iter/sec",
            "range": "stddev: 0.00012641797917084657",
            "extra": "mean: 1.372796758104744 msec\nrounds: 802"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 957.7647996935073,
            "unit": "iter/sec",
            "range": "stddev: 0.00006501789428653952",
            "extra": "mean: 1.0440976744186132 msec\nrounds: 1075"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1195.4809237663162,
            "unit": "iter/sec",
            "range": "stddev: 0.00006264265826396984",
            "extra": "mean: 836.4834437086113 usec\nrounds: 1359"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2191.860761473976,
            "unit": "iter/sec",
            "range": "stddev: 0.000040484124963018964",
            "extra": "mean: 456.2333600641325 usec\nrounds: 2494"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 641.7000903852955,
            "unit": "iter/sec",
            "range": "stddev: 0.00020140065183793",
            "extra": "mean: 1.5583603851443604 msec\nrounds: 727"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 882.1403413460004,
            "unit": "iter/sec",
            "range": "stddev: 0.00009612194362297362",
            "extra": "mean: 1.133606471816225 msec\nrounds: 958"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1076.369193791941,
            "unit": "iter/sec",
            "range": "stddev: 0.00009241271268285079",
            "extra": "mean: 929.049257232177 usec\nrounds: 1279"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2070.249189627167,
            "unit": "iter/sec",
            "range": "stddev: 0.00003672275171865325",
            "extra": "mean: 483.03363914374523 usec\nrounds: 2289"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 35.33380022269285,
            "unit": "iter/sec",
            "range": "stddev: 0.0009648498075595202",
            "extra": "mean: 28.30151282051337 msec\nrounds: 39"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 36.88141308499784,
            "unit": "iter/sec",
            "range": "stddev: 0.0010161928805019096",
            "extra": "mean: 27.113928571429046 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 927.3790189842526,
            "unit": "iter/sec",
            "range": "stddev: 0.00007753867887132323",
            "extra": "mean: 1.078307767945072 msec\nrounds: 1017"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1471.8568957347964,
            "unit": "iter/sec",
            "range": "stddev: 0.00004173530770968229",
            "extra": "mean: 679.4138770541066 usec\nrounds: 1643"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2275.3236451733583,
            "unit": "iter/sec",
            "range": "stddev: 0.00003100437579807719",
            "extra": "mean: 439.49791587728583 usec\nrounds: 2639"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 2060.4238925219674,
            "unit": "iter/sec",
            "range": "stddev: 0.00005868907025263278",
            "extra": "mean: 485.3370239150138 usec\nrounds: 2258"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1726840372311,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 784.3420355626923,
            "unit": "iter/sec",
            "range": "stddev: 0.00004227946660868881",
            "extra": "mean: 1.2749539800995022 msec\nrounds: 804"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1061.7624665983103,
            "unit": "iter/sec",
            "range": "stddev: 0.000012381431500265232",
            "extra": "mean: 941.8302411873855 usec\nrounds: 1078"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1303.1369466232488,
            "unit": "iter/sec",
            "range": "stddev: 0.000056550125791892045",
            "extra": "mean: 767.3790560472161 usec\nrounds: 1356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2379.232288204976,
            "unit": "iter/sec",
            "range": "stddev: 0.000025129121934961378",
            "extra": "mean: 420.30364372469705 usec\nrounds: 2470"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 703.6076760705673,
            "unit": "iter/sec",
            "range": "stddev: 0.00010185502767063964",
            "extra": "mean: 1.4212465753425156 msec\nrounds: 730"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 939.0609194963616,
            "unit": "iter/sec",
            "range": "stddev: 0.00001918150725197356",
            "extra": "mean: 1.0648936392074768 msec\nrounds: 959"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1255.6141378635891,
            "unit": "iter/sec",
            "range": "stddev: 0.000024779649594016213",
            "extra": "mean: 796.4230171073789 usec\nrounds: 1286"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2201.5915632072815,
            "unit": "iter/sec",
            "range": "stddev: 0.000023657236822145052",
            "extra": "mean: 454.21685689201985 usec\nrounds: 2278"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 40.53526320732737,
            "unit": "iter/sec",
            "range": "stddev: 0.0004440859823906726",
            "extra": "mean: 24.669878048780863 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 41.24233702648519,
            "unit": "iter/sec",
            "range": "stddev: 0.0009868315000073611",
            "extra": "mean: 24.246928571429294 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1025.5482455064114,
            "unit": "iter/sec",
            "range": "stddev: 0.00002555667903925523",
            "extra": "mean: 975.0882070947372 usec\nrounds: 1043"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1539.6039329631108,
            "unit": "iter/sec",
            "range": "stddev: 0.0001309846087288932",
            "extra": "mean: 649.5176964606782 usec\nrounds: 1667"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2364.4350666912796,
            "unit": "iter/sec",
            "range": "stddev: 0.00003387043616721779",
            "extra": "mean: 422.93400824890085 usec\nrounds: 2667"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1583.5635024471687,
            "unit": "iter/sec",
            "range": "stddev: 0.00015557138179877756",
            "extra": "mean: 631.4871481027723 usec\nrounds: 2451"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1726841803884,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 743.6878433900981,
            "unit": "iter/sec",
            "range": "stddev: 0.00011037334802800352",
            "extra": "mean: 1.3446501901140455 msec\nrounds: 789"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1031.6093972687356,
            "unit": "iter/sec",
            "range": "stddev: 0.00004704959667770723",
            "extra": "mean: 969.3591417910462 usec\nrounds: 1072"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1288.2352885333512,
            "unit": "iter/sec",
            "range": "stddev: 0.00004254428777175771",
            "extra": "mean: 776.2557111275024 usec\nrounds: 1357"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2430.13248515048,
            "unit": "iter/sec",
            "range": "stddev: 0.00001930508118635846",
            "extra": "mean: 411.5001984914733 usec\nrounds: 2519"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 687.1127237052123,
            "unit": "iter/sec",
            "range": "stddev: 0.00007263338822303855",
            "extra": "mean: 1.4553652777779498 msec\nrounds: 720"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 924.9889088320386,
            "unit": "iter/sec",
            "range": "stddev: 0.000053060354204810315",
            "extra": "mean: 1.0810940438871597 msec\nrounds: 957"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1243.4683934795996,
            "unit": "iter/sec",
            "range": "stddev: 0.000033578995409503924",
            "extra": "mean: 804.2021857923532 usec\nrounds: 1281"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2182.196616587288,
            "unit": "iter/sec",
            "range": "stddev: 0.00003574830420989321",
            "extra": "mean: 458.25384953803496 usec\nrounds: 2273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 39.072215937842785,
            "unit": "iter/sec",
            "range": "stddev: 0.001368579971285853",
            "extra": "mean: 25.593634146341458 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 41.0464499218639,
            "unit": "iter/sec",
            "range": "stddev: 0.0008076201359377269",
            "extra": "mean: 24.362642857143594 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 966.4643690626124,
            "unit": "iter/sec",
            "range": "stddev: 0.00014600718949187111",
            "extra": "mean: 1.0346992936427801 msec\nrounds: 991"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1450.9371362301958,
            "unit": "iter/sec",
            "range": "stddev: 0.0001877844041519864",
            "extra": "mean: 689.2097355769566 usec\nrounds: 1664"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2201.796587174385,
            "unit": "iter/sec",
            "range": "stddev: 0.00006254140212302556",
            "extra": "mean: 454.1745617306649 usec\nrounds: 2681"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1576.4226489061032,
            "unit": "iter/sec",
            "range": "stddev: 0.00029843277246383785",
            "extra": "mean: 634.347648261658 usec\nrounds: 2445"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1727101414231,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 751.5071894187768,
            "unit": "iter/sec",
            "range": "stddev: 0.00010910172590406888",
            "extra": "mean: 1.3306592592592628 msec\nrounds: 810"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1049.0533496562214,
            "unit": "iter/sec",
            "range": "stddev: 0.00004666405958728277",
            "extra": "mean: 953.2403669724744 usec\nrounds: 1090"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1304.6345727202186,
            "unit": "iter/sec",
            "range": "stddev: 0.00004545307623770642",
            "extra": "mean: 766.4981604120436 usec\nrounds: 1359"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2370.598495325656,
            "unit": "iter/sec",
            "range": "stddev: 0.000027773759415981803",
            "extra": "mean: 421.834402566187 usec\nrounds: 2494"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 686.7329597908109,
            "unit": "iter/sec",
            "range": "stddev: 0.0001071315235367723",
            "extra": "mean: 1.4561700960219164 msec\nrounds: 729"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 931.1704244095865,
            "unit": "iter/sec",
            "range": "stddev: 0.000048251469705771046",
            "extra": "mean: 1.073917269906908 msec\nrounds: 967"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1162.4228290442998,
            "unit": "iter/sec",
            "range": "stddev: 0.00010843164478222115",
            "extra": "mean: 860.2721617418356 usec\nrounds: 1286"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2086.8201847405235,
            "unit": "iter/sec",
            "range": "stddev: 0.00005096265232860609",
            "extra": "mean: 479.19797178133035 usec\nrounds: 2268"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 35.19932692018741,
            "unit": "iter/sec",
            "range": "stddev: 0.0020713048152806142",
            "extra": "mean: 28.409634146341673 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 34.583484108890396,
            "unit": "iter/sec",
            "range": "stddev: 0.003351147423626237",
            "extra": "mean: 28.915536585364727 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 941.5748758079068,
            "unit": "iter/sec",
            "range": "stddev: 0.00006954672514488107",
            "extra": "mean: 1.0620504281637317 msec\nrounds: 1051"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1512.6736415707594,
            "unit": "iter/sec",
            "range": "stddev: 0.000038799018401489987",
            "extra": "mean: 661.0811298077493 usec\nrounds: 1664"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2205.530209462616,
            "unit": "iter/sec",
            "range": "stddev: 0.000058173314283802806",
            "extra": "mean: 453.4057142856606 usec\nrounds: 2625"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 2035.3026693389047,
            "unit": "iter/sec",
            "range": "stddev: 0.000053240173281622915",
            "extra": "mean: 491.32741535921747 usec\nrounds: 2422"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1727185740327,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 741.8878591580108,
            "unit": "iter/sec",
            "range": "stddev: 0.0001109955960987038",
            "extra": "mean: 1.3479126092384475 msec\nrounds: 801"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1009.9956375775188,
            "unit": "iter/sec",
            "range": "stddev: 0.00006197997674558415",
            "extra": "mean: 990.1032863849854 usec\nrounds: 1065"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1269.88516109358,
            "unit": "iter/sec",
            "range": "stddev: 0.00004983567217652854",
            "extra": "mean: 787.4727815063493 usec\nrounds: 1341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2176.550759033256,
            "unit": "iter/sec",
            "range": "stddev: 0.00005884613761098298",
            "extra": "mean: 459.4425357872946 usec\nrounds: 2445"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 663.211100737272,
            "unit": "iter/sec",
            "range": "stddev: 0.0001189775099313775",
            "extra": "mean: 1.507815533980553 msec\nrounds: 721"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 868.6495480637172,
            "unit": "iter/sec",
            "range": "stddev: 0.0000893035795545589",
            "extra": "mean: 1.1512122492080639 msec\nrounds: 947"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1144.4065562495514,
            "unit": "iter/sec",
            "range": "stddev: 0.00007594891958669782",
            "extra": "mean: 873.8153364632929 usec\nrounds: 1278"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2031.712021729449,
            "unit": "iter/sec",
            "range": "stddev: 0.00003534547008269145",
            "extra": "mean: 492.19573901461325 usec\nrounds: 2253"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 36.36470069633981,
            "unit": "iter/sec",
            "range": "stddev: 0.0022975842881112736",
            "extra": "mean: 27.499195121951118 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 36.42368024865194,
            "unit": "iter/sec",
            "range": "stddev: 0.0020950371050516546",
            "extra": "mean: 27.454666666666952 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 933.2871461167612,
            "unit": "iter/sec",
            "range": "stddev: 0.00008672476828267689",
            "extra": "mean: 1.071481595091949 msec\nrounds: 978"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1517.4229738933361,
            "unit": "iter/sec",
            "range": "stddev: 0.000044551357502845376",
            "extra": "mean: 659.0120336943659 usec\nrounds: 1662"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2219.5023395543944,
            "unit": "iter/sec",
            "range": "stddev: 0.00003351579526155065",
            "extra": "mean: 450.5514511873721 usec\nrounds: 2653"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 2025.7769348537227,
            "unit": "iter/sec",
            "range": "stddev: 0.000035309841571109204",
            "extra": "mean: 493.6377657356475 usec\nrounds: 2399"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1727271383706,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 735.8228343777242,
            "unit": "iter/sec",
            "range": "stddev: 0.000017041702210437847",
            "extra": "mean: 1.3590227882037489 msec\nrounds: 746"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 974.981044759854,
            "unit": "iter/sec",
            "range": "stddev: 0.00003111500846433567",
            "extra": "mean: 1.0256609657947846 msec\nrounds: 994"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1333.468582127663,
            "unit": "iter/sec",
            "range": "stddev: 0.000009558397552055675",
            "extra": "mean: 749.9239302694441 usec\nrounds: 1262"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2346.9938715281255,
            "unit": "iter/sec",
            "range": "stddev: 0.000028713180174780634",
            "extra": "mean: 426.0769540692924 usec\nrounds: 2482"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 657.6355014470672,
            "unit": "iter/sec",
            "range": "stddev: 0.00008764088448778104",
            "extra": "mean: 1.520599173553725 msec\nrounds: 726"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 839.7840878352,
            "unit": "iter/sec",
            "range": "stddev: 0.0001682816317822678",
            "extra": "mean: 1.1907822671155934 msec\nrounds: 891"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1111.6595006616365,
            "unit": "iter/sec",
            "range": "stddev: 0.0002855830653319948",
            "extra": "mean: 899.5560235888966 usec\nrounds: 1187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2010.9717091543432,
            "unit": "iter/sec",
            "range": "stddev: 0.00011679530234846839",
            "extra": "mean: 497.2720379147062 usec\nrounds: 2110"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 37.485762619005406,
            "unit": "iter/sec",
            "range": "stddev: 0.0016069662194640834",
            "extra": "mean: 26.676794871794787 msec\nrounds: 39"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 39.47798263560948,
            "unit": "iter/sec",
            "range": "stddev: 0.0009997273958561367",
            "extra": "mean: 25.33057499999991 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 978.4362691071984,
            "unit": "iter/sec",
            "range": "stddev: 0.0002151891284231164",
            "extra": "mean: 1.0220389733840078 msec\nrounds: 1052"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1611.8520587483804,
            "unit": "iter/sec",
            "range": "stddev: 0.00002074265773670789",
            "extra": "mean: 620.4043321299042 usec\nrounds: 1662"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2077.0464273537523,
            "unit": "iter/sec",
            "range": "stddev: 0.0001519986398921344",
            "extra": "mean: 481.45288753802373 usec\nrounds: 2632"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1894.6717791746833,
            "unit": "iter/sec",
            "range": "stddev: 0.00009566210513877131",
            "extra": "mean: 527.7959016392796 usec\nrounds: 2440"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1727361655819,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 679.3902535771348,
            "unit": "iter/sec",
            "range": "stddev: 0.0002933974796950924",
            "extra": "mean: 1.471908074534167 msec\nrounds: 805"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 944.70064357733,
            "unit": "iter/sec",
            "range": "stddev: 0.00015716084697471442",
            "extra": "mean: 1.0585363805969963 msec\nrounds: 1072"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1232.131807071888,
            "unit": "iter/sec",
            "range": "stddev: 0.0001579096860162972",
            "extra": "mean: 811.6014814814821 usec\nrounds: 1350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2113.603191012929,
            "unit": "iter/sec",
            "range": "stddev: 0.00011495228104116715",
            "extra": "mean: 473.125705076532 usec\nrounds: 2482"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 665.7505642189554,
            "unit": "iter/sec",
            "range": "stddev: 0.0002216138192252298",
            "extra": "mean: 1.502064066852394 msec\nrounds: 718"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 934.5638587582856,
            "unit": "iter/sec",
            "range": "stddev: 0.00003089727315116173",
            "extra": "mean: 1.070017838405025 msec\nrounds: 953"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1182.7442656522117,
            "unit": "iter/sec",
            "range": "stddev: 0.00011455720701633353",
            "extra": "mean: 845.4913112164282 usec\nrounds: 1266"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2140.1996258668737,
            "unit": "iter/sec",
            "range": "stddev: 0.000027367992816440236",
            "extra": "mean: 467.2461334511992 usec\nrounds: 2263"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 37.636077944317464,
            "unit": "iter/sec",
            "range": "stddev: 0.004562868557646031",
            "extra": "mean: 26.570249999999973 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 40.49742407456147,
            "unit": "iter/sec",
            "range": "stddev: 0.0013584575074873987",
            "extra": "mean: 24.692928571428617 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 989.6091044037826,
            "unit": "iter/sec",
            "range": "stddev: 0.00010859226970395687",
            "extra": "mean: 1.0104999999999773 msec\nrounds: 1040"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1478.167000103686,
            "unit": "iter/sec",
            "range": "stddev: 0.00024193723401210024",
            "extra": "mean: 676.5135467980647 usec\nrounds: 1624"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2082.7659383543255,
            "unit": "iter/sec",
            "range": "stddev: 0.00006767367143589861",
            "extra": "mean: 480.13076341652624 usec\nrounds: 2646"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1349.4249104505418,
            "unit": "iter/sec",
            "range": "stddev: 0.0002615116488975748",
            "extra": "mean: 741.0564250411852 usec\nrounds: 2428"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1727363185478,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 679.0400874889539,
            "unit": "iter/sec",
            "range": "stddev: 0.0002476019500372024",
            "extra": "mean: 1.472667105263159 msec\nrounds: 760"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 937.7659438472523,
            "unit": "iter/sec",
            "range": "stddev: 0.00006866039119514173",
            "extra": "mean: 1.0663641674781108 msec\nrounds: 1027"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1185.7590997740467,
            "unit": "iter/sec",
            "range": "stddev: 0.00004373118003764439",
            "extra": "mean: 843.3416198876786 usec\nrounds: 1247"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2132.232779440848,
            "unit": "iter/sec",
            "range": "stddev: 0.000018142785467848553",
            "extra": "mean: 468.991945739732 usec\nrounds: 2359"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 642.9021380664975,
            "unit": "iter/sec",
            "range": "stddev: 0.000038791921463312",
            "extra": "mean: 1.5554466858789116 msec\nrounds: 694"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 828.5056712754405,
            "unit": "iter/sec",
            "range": "stddev: 0.00013747186487574674",
            "extra": "mean: 1.2069923413566417 msec\nrounds: 914"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1115.2923060488079,
            "unit": "iter/sec",
            "range": "stddev: 0.000047134426591434994",
            "extra": "mean: 896.6259289842511 usec\nrounds: 1211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1976.8349639556227,
            "unit": "iter/sec",
            "range": "stddev: 0.000040554361136329484",
            "extra": "mean: 505.85912240190856 usec\nrounds: 2165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 33.2962236959833,
            "unit": "iter/sec",
            "range": "stddev: 0.0035596202325150687",
            "extra": "mean: 30.033435897435876 msec\nrounds: 39"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 35.75681077853283,
            "unit": "iter/sec",
            "range": "stddev: 0.001799194523483629",
            "extra": "mean: 27.966700000000166 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 892.252973956469,
            "unit": "iter/sec",
            "range": "stddev: 0.00021800004483873146",
            "extra": "mean: 1.1207583826431582 msec\nrounds: 1014"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1521.694466792606,
            "unit": "iter/sec",
            "range": "stddev: 0.00006678685817352884",
            "extra": "mean: 657.1621451103637 usec\nrounds: 1585"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1924.3776877755129,
            "unit": "iter/sec",
            "range": "stddev: 0.00008179297544863158",
            "extra": "mean: 519.6485109718516 usec\nrounds: 2552"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1699.2759260803975,
            "unit": "iter/sec",
            "range": "stddev: 0.00017216764669005424",
            "extra": "mean: 588.4859454853992 usec\nrounds: 2348"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1727791889331,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 636.4589863213656,
            "unit": "iter/sec",
            "range": "stddev: 0.0003203422461766939",
            "extra": "mean: 1.571193150684925 msec\nrounds: 730"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 839.4543546694568,
            "unit": "iter/sec",
            "range": "stddev: 0.00028043315021200214",
            "extra": "mean: 1.1912500000000112 msec\nrounds: 1008"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 952.1685163772892,
            "unit": "iter/sec",
            "range": "stddev: 0.00033177797230685743",
            "extra": "mean: 1.0502342629482173 msec\nrounds: 1255"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1871.111659501546,
            "unit": "iter/sec",
            "range": "stddev: 0.0001859344273809685",
            "extra": "mean: 534.4416485900123 usec\nrounds: 2305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 598.0065250155292,
            "unit": "iter/sec",
            "range": "stddev: 0.0002914201906224791",
            "extra": "mean: 1.6722225563910555 msec\nrounds: 665"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 846.8666850169519,
            "unit": "iter/sec",
            "range": "stddev: 0.0002700199201587861",
            "extra": "mean: 1.1808234019501933 msec\nrounds: 923"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1079.7059003523038,
            "unit": "iter/sec",
            "range": "stddev: 0.0002482094040798689",
            "extra": "mean: 926.1781376518402 usec\nrounds: 1235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1923.229953390127,
            "unit": "iter/sec",
            "range": "stddev: 0.00015314161149394248",
            "extra": "mean: 519.9586238958448 usec\nrounds: 2151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 38.64730656551702,
            "unit": "iter/sec",
            "range": "stddev: 0.0015577279847239043",
            "extra": "mean: 25.875024390244256 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 35.54679862992538,
            "unit": "iter/sec",
            "range": "stddev: 0.004178689066184636",
            "extra": "mean: 28.13192857142813 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 834.2336674826751,
            "unit": "iter/sec",
            "range": "stddev: 0.0003634811282628819",
            "extra": "mean: 1.1987049180327733 msec\nrounds: 1037"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1533.6189751983788,
            "unit": "iter/sec",
            "range": "stddev: 0.00011071340026217472",
            "extra": "mean: 652.0524433851939 usec\nrounds: 1678"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1805.190483999412,
            "unit": "iter/sec",
            "range": "stddev: 0.0002569954298498797",
            "extra": "mean: 553.9581605728904 usec\nrounds: 2653"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1483.1144597615921,
            "unit": "iter/sec",
            "range": "stddev: 0.00037855484232056195",
            "extra": "mean: 674.2567934781972 usec\nrounds: 2208"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1727793274992,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 638.1021637683191,
            "unit": "iter/sec",
            "range": "stddev: 0.0005629125162792089",
            "extra": "mean: 1.5671471698113189 msec\nrounds: 795"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 901.5567158846911,
            "unit": "iter/sec",
            "range": "stddev: 0.0002995548484120131",
            "extra": "mean: 1.1091925581395146 msec\nrounds: 1075"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1191.815024649713,
            "unit": "iter/sec",
            "range": "stddev: 0.000185568725355555",
            "extra": "mean: 839.0563798219531 usec\nrounds: 1348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2084.349488870227,
            "unit": "iter/sec",
            "range": "stddev: 0.00013980230319515007",
            "extra": "mean: 479.76599190283906 usec\nrounds: 2470"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 666.1124904349467,
            "unit": "iter/sec",
            "range": "stddev: 0.00022943051347405177",
            "extra": "mean: 1.5012479338843159 msec\nrounds: 726"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 855.8071866408036,
            "unit": "iter/sec",
            "range": "stddev: 0.0003052223618052806",
            "extra": "mean: 1.168487500000063 msec\nrounds: 960"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1205.551700985844,
            "unit": "iter/sec",
            "range": "stddev: 0.00012236779838913612",
            "extra": "mean: 829.4957397366256 usec\nrounds: 1291"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2160.096255927332,
            "unit": "iter/sec",
            "range": "stddev: 0.00004915182872957407",
            "extra": "mean: 462.9423328965026 usec\nrounds: 2289"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 37.51332409224617,
            "unit": "iter/sec",
            "range": "stddev: 0.002376097959044459",
            "extra": "mean: 26.657195121951226 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 36.25881542449992,
            "unit": "iter/sec",
            "range": "stddev: 0.0038899337209849613",
            "extra": "mean: 27.57950000000012 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 779.4116334623324,
            "unit": "iter/sec",
            "range": "stddev: 0.0007153938994322967",
            "extra": "mean: 1.2830190839694828 msec\nrounds: 1048"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1404.4084662123619,
            "unit": "iter/sec",
            "range": "stddev: 0.00022191713500462992",
            "extra": "mean: 712.043557168922 usec\nrounds: 1653"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2100.7557192283075,
            "unit": "iter/sec",
            "range": "stddev: 0.00014360609073971526",
            "extra": "mean: 476.01917293236767 usec\nrounds: 2660"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1334.4911273972684,
            "unit": "iter/sec",
            "range": "stddev: 0.00029708593179391367",
            "extra": "mean: 749.3493058663904 usec\nrounds: 2233"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1727876290947,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 767.3438340626104,
            "unit": "iter/sec",
            "range": "stddev: 0.00008047583636645136",
            "extra": "mean: 1.3031967621419713 msec\nrounds: 803"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 825.5032113994644,
            "unit": "iter/sec",
            "range": "stddev: 0.0005539783556200728",
            "extra": "mean: 1.2113823255814034 msec\nrounds: 1075"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1076.9660187579975,
            "unit": "iter/sec",
            "range": "stddev: 0.00037568389202455587",
            "extra": "mean: 928.534403669711 usec\nrounds: 1308"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2177.727824004612,
            "unit": "iter/sec",
            "range": "stddev: 0.000054310000423599375",
            "extra": "mean: 459.19420644638006 usec\nrounds: 2451"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 620.6447857277451,
            "unit": "iter/sec",
            "range": "stddev: 0.0002659463542264258",
            "extra": "mean: 1.6112275862068783 msec\nrounds: 725"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 936.2117945132302,
            "unit": "iter/sec",
            "range": "stddev: 0.000050338951904557326",
            "extra": "mean: 1.0681343749999812 msec\nrounds: 960"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1242.6425645986062,
            "unit": "iter/sec",
            "range": "stddev: 0.000019245949075584977",
            "extra": "mean: 804.7366382649352 usec\nrounds: 1291"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2097.6802344027064,
            "unit": "iter/sec",
            "range": "stddev: 0.00004861667206696586",
            "extra": "mean: 476.71708185053285 usec\nrounds: 2248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 39.49785700041672,
            "unit": "iter/sec",
            "range": "stddev: 0.0012172976608544562",
            "extra": "mean: 25.317829268292947 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 38.030215912023166,
            "unit": "iter/sec",
            "range": "stddev: 0.0019936416881183886",
            "extra": "mean: 26.294880952381135 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1038.1397013858307,
            "unit": "iter/sec",
            "range": "stddev: 0.0000190815380163635",
            "extra": "mean: 963.2614942527318 usec\nrounds: 1044"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1513.610670955315,
            "unit": "iter/sec",
            "range": "stddev: 0.00020348297474837362",
            "extra": "mean: 660.6718749999629 usec\nrounds: 1664"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2187.6058634730925,
            "unit": "iter/sec",
            "range": "stddev: 0.00018109514221505976",
            "extra": "mean: 457.12073490805943 usec\nrounds: 2667"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1385.7450891087615,
            "unit": "iter/sec",
            "range": "stddev: 0.00025660609982502915",
            "extra": "mean: 721.6334431631633 usec\nrounds: 2428"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1727882052274,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 654.7923378695841,
            "unit": "iter/sec",
            "range": "stddev: 0.0002791967712104065",
            "extra": "mean: 1.5272017434620184 msec\nrounds: 803"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 845.5448009564147,
            "unit": "iter/sec",
            "range": "stddev: 0.0005349034602266339",
            "extra": "mean: 1.182669444444431 msec\nrounds: 1080"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1048.304674264627,
            "unit": "iter/sec",
            "range": "stddev: 0.00034549298769295995",
            "extra": "mean: 953.9211495946901 usec\nrounds: 1357"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2038.4219819657476,
            "unit": "iter/sec",
            "range": "stddev: 0.00006133591824532522",
            "extra": "mean: 490.5755573905518 usec\nrounds: 2422"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 528.3488511347917,
            "unit": "iter/sec",
            "range": "stddev: 0.0008851340911208565",
            "extra": "mean: 1.892688888888832 msec\nrounds: 720"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 681.1690071129491,
            "unit": "iter/sec",
            "range": "stddev: 0.0007476731708980663",
            "extra": "mean: 1.4680644444443776 msec\nrounds: 900"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1141.4140251358651,
            "unit": "iter/sec",
            "range": "stddev: 0.0001089995741882159",
            "extra": "mean: 876.1062839410685 usec\nrounds: 1289"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1787.6541084562136,
            "unit": "iter/sec",
            "range": "stddev: 0.0001247542897246348",
            "extra": "mean: 559.3923316986542 usec\nrounds: 2243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 33.26410802743858,
            "unit": "iter/sec",
            "range": "stddev: 0.002630475163461277",
            "extra": "mean: 30.062432432432264 msec\nrounds: 37"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 37.76624019139971,
            "unit": "iter/sec",
            "range": "stddev: 0.0015166359769358208",
            "extra": "mean: 26.47867499999972 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 935.8033546186115,
            "unit": "iter/sec",
            "range": "stddev: 0.0001360322832966804",
            "extra": "mean: 1.06860057197332 msec\nrounds: 1049"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1481.5815505324272,
            "unit": "iter/sec",
            "range": "stddev: 0.00010727374787843999",
            "extra": "mean: 674.9544091181724 usec\nrounds: 1667"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1631.8572442808356,
            "unit": "iter/sec",
            "range": "stddev: 0.00032101338209603313",
            "extra": "mean: 612.7987012985949 usec\nrounds: 2618"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1772.9926772776457,
            "unit": "iter/sec",
            "range": "stddev: 0.00017415282870883046",
            "extra": "mean: 564.0181219109472 usec\nrounds: 2428"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1727964490669,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 777.6727603955147,
            "unit": "iter/sec",
            "range": "stddev: 0.000049341732717384116",
            "extra": "mean: 1.285887909319869 msec\nrounds: 794"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1054.5372828543266,
            "unit": "iter/sec",
            "range": "stddev: 0.000023059320795646876",
            "extra": "mean: 948.283210332109 usec\nrounds: 1084"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1322.3888427830182,
            "unit": "iter/sec",
            "range": "stddev: 0.00003925906733985097",
            "extra": "mean: 756.207227138624 usec\nrounds: 1356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2102.88762373699,
            "unit": "iter/sec",
            "range": "stddev: 0.00012252704175392306",
            "extra": "mean: 475.53658536585255 usec\nrounds: 2501"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 624.9273088026526,
            "unit": "iter/sec",
            "range": "stddev: 0.0002353956308126852",
            "extra": "mean: 1.6001861111110325 msec\nrounds: 720"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 868.2887559815268,
            "unit": "iter/sec",
            "range": "stddev: 0.00022693460128965954",
            "extra": "mean: 1.1516906019007291 msec\nrounds: 947"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1263.5972999125158,
            "unit": "iter/sec",
            "range": "stddev: 0.000049152455726104524",
            "extra": "mean: 791.3913713405641 usec\nrounds: 1298"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2160.1180437655453,
            "unit": "iter/sec",
            "range": "stddev: 0.00004630272638782791",
            "extra": "mean: 462.9376634699033 usec\nrounds: 2294"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 37.354567734764096,
            "unit": "iter/sec",
            "range": "stddev: 0.0025109307151133585",
            "extra": "mean: 26.77048780487823 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 41.29691993805504,
            "unit": "iter/sec",
            "range": "stddev: 0.0003244660305705478",
            "extra": "mean: 24.214880952380707 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1014.644016943795,
            "unit": "iter/sec",
            "range": "stddev: 0.00011888486405520353",
            "extra": "mean: 985.5673352434441 usec\nrounds: 1047"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1604.6200840013707,
            "unit": "iter/sec",
            "range": "stddev: 0.00008256295375715612",
            "extra": "mean: 623.2004759072589 usec\nrounds: 1681"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1968.22502222611,
            "unit": "iter/sec",
            "range": "stddev: 0.0001761143191164897",
            "extra": "mean: 508.07198806413703 usec\nrounds: 2681"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1579.8156536423132,
            "unit": "iter/sec",
            "range": "stddev: 0.00017106131755002614",
            "extra": "mean: 632.9852459016149 usec\nrounds: 2440"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1727965988720,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 775.6117309084749,
            "unit": "iter/sec",
            "range": "stddev: 0.000042981954126681296",
            "extra": "mean: 1.2893048933500513 msec\nrounds: 797"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 982.6191266174843,
            "unit": "iter/sec",
            "range": "stddev: 0.0001356145517999933",
            "extra": "mean: 1.0176883116883209 msec\nrounds: 1078"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1306.4855058150824,
            "unit": "iter/sec",
            "range": "stddev: 0.00004712455472618844",
            "extra": "mean: 765.4122418879235 usec\nrounds: 1356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2380.088943179287,
            "unit": "iter/sec",
            "range": "stddev: 0.000025873974095907337",
            "extra": "mean: 420.15236567765197 usec\nrounds: 2494"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 698.8936455187679,
            "unit": "iter/sec",
            "range": "stddev: 0.00004786973759324147",
            "extra": "mean: 1.4308328690808596 msec\nrounds: 718"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 914.96556689141,
            "unit": "iter/sec",
            "range": "stddev: 0.0000985955785789519",
            "extra": "mean: 1.0929373040752712 msec\nrounds: 957"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1145.9208003484832,
            "unit": "iter/sec",
            "range": "stddev: 0.00023312316708434165",
            "extra": "mean: 872.660658307182 usec\nrounds: 1276"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1911.2179275370029,
            "unit": "iter/sec",
            "range": "stddev: 0.00009462487364824741",
            "extra": "mean: 523.2265696087863 usec\nrounds: 2198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 38.356758125159914,
            "unit": "iter/sec",
            "range": "stddev: 0.001341836695468654",
            "extra": "mean: 26.07102500000007 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 40.69184483260538,
            "unit": "iter/sec",
            "range": "stddev: 0.0008245247737725633",
            "extra": "mean: 24.574948717948622 msec\nrounds: 39"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 999.7763533465493,
            "unit": "iter/sec",
            "range": "stddev: 0.00010089167546420008",
            "extra": "mean: 1.0002236966824651 msec\nrounds: 1055"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1540.5072768578975,
            "unit": "iter/sec",
            "range": "stddev: 0.00009846636641938274",
            "extra": "mean: 649.1368233194293 usec\nrounds: 1681"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2156.256679884905,
            "unit": "iter/sec",
            "range": "stddev: 0.00005380070681419028",
            "extra": "mean: 463.7666792310539 usec\nrounds: 2653"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1463.4404438662198,
            "unit": "iter/sec",
            "range": "stddev: 0.00018333317351291412",
            "extra": "mean: 683.3212818405714 usec\nrounds: 2434"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1728050276305,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 525.6910060917083,
            "unit": "iter/sec",
            "range": "stddev: 0.0011081839652766568",
            "extra": "mean: 1.9022581486310366 msec\nrounds: 767"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 873.6108210430876,
            "unit": "iter/sec",
            "range": "stddev: 0.00040512751987689807",
            "extra": "mean: 1.1446744659206536 msec\nrounds: 983"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1070.463626134482,
            "unit": "iter/sec",
            "range": "stddev: 0.0004631948036850033",
            "extra": "mean: 934.1746656176157 usec\nrounds: 1271"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1707.8017707907297,
            "unit": "iter/sec",
            "range": "stddev: 0.0003400870243545933",
            "extra": "mean: 585.548051948084 usec\nrounds: 2310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 489.5847028751176,
            "unit": "iter/sec",
            "range": "stddev: 0.0011377655214689511",
            "extra": "mean: 2.0425474777447823 msec\nrounds: 674"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 690.9007070396568,
            "unit": "iter/sec",
            "range": "stddev: 0.000731853295526433",
            "extra": "mean: 1.447385984427139 msec\nrounds: 899"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 897.5347508998002,
            "unit": "iter/sec",
            "range": "stddev: 0.0006221246741616665",
            "extra": "mean: 1.1141629881154753 msec\nrounds: 1178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1496.3841701657423,
            "unit": "iter/sec",
            "range": "stddev: 0.00045394943304249096",
            "extra": "mean: 668.277585353792 usec\nrounds: 2021"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 29.777483833960986,
            "unit": "iter/sec",
            "range": "stddev: 0.007143637541997573",
            "extra": "mean: 33.58242105263131 msec\nrounds: 38"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 35.05962505152358,
            "unit": "iter/sec",
            "range": "stddev: 0.005194923470260323",
            "extra": "mean: 28.522837837837717 msec\nrounds: 37"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 772.1080396998979,
            "unit": "iter/sec",
            "range": "stddev: 0.0006895205830632287",
            "extra": "mean: 1.2951555334000653 msec\nrounds: 1003"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1275.5518174025956,
            "unit": "iter/sec",
            "range": "stddev: 0.0003590867994757033",
            "extra": "mean: 783.9744229570372 usec\nrounds: 1603"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1389.439387139647,
            "unit": "iter/sec",
            "range": "stddev: 0.00031211788140640505",
            "extra": "mean: 719.7147347741727 usec\nrounds: 2545"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1331.5709094494694,
            "unit": "iter/sec",
            "range": "stddev: 0.0004194238663783834",
            "extra": "mean: 750.992675571025 usec\nrounds: 2321"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1728052951558,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 747.8899150419362,
            "unit": "iter/sec",
            "range": "stddev: 0.00013774461441736315",
            "extra": "mean: 1.3370951792336006 msec\nrounds: 809"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 965.350129835165,
            "unit": "iter/sec",
            "range": "stddev: 0.00021653465284244506",
            "extra": "mean: 1.0358935779816505 msec\nrounds: 1090"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1264.6056338555134,
            "unit": "iter/sec",
            "range": "stddev: 0.000058065829273864226",
            "extra": "mean: 790.7603550295858 usec\nrounds: 1352"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2195.1409556342373,
            "unit": "iter/sec",
            "range": "stddev: 0.00013068137637429298",
            "extra": "mean: 455.55161158708927 usec\nrounds: 2451"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 655.0274923885497,
            "unit": "iter/sec",
            "range": "stddev: 0.00027031796695079505",
            "extra": "mean: 1.5266534788540131 msec\nrounds: 733"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 856.965624562961,
            "unit": "iter/sec",
            "range": "stddev: 0.00014443274091697784",
            "extra": "mean: 1.1669079497908497 msec\nrounds: 956"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1152.059227176033,
            "unit": "iter/sec",
            "range": "stddev: 0.00023074475523387705",
            "extra": "mean: 868.0109289617292 usec\nrounds: 1281"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1988.2933428761642,
            "unit": "iter/sec",
            "range": "stddev: 0.00012960972467590572",
            "extra": "mean: 502.94389587074255 usec\nrounds: 2228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 33.43105487836271,
            "unit": "iter/sec",
            "range": "stddev: 0.006555522405430355",
            "extra": "mean: 29.91230769230741 msec\nrounds: 39"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 36.23634795590756,
            "unit": "iter/sec",
            "range": "stddev: 0.004682307248486842",
            "extra": "mean: 27.596600000000038 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 910.6750068433906,
            "unit": "iter/sec",
            "range": "stddev: 0.00039674093354381866",
            "extra": "mean: 1.0980865758754381 msec\nrounds: 1028"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1441.9366694645785,
            "unit": "iter/sec",
            "range": "stddev: 0.00023658331078323658",
            "extra": "mean: 693.5117340287359 usec\nrounds: 1534"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1900.281511563247,
            "unit": "iter/sec",
            "range": "stddev: 0.0002410671810875729",
            "extra": "mean: 526.2378199835035 usec\nrounds: 2422"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1079.5687665810165,
            "unit": "iter/sec",
            "range": "stddev: 0.00066251567820723",
            "extra": "mean: 926.2957867584387 usec\nrounds: 2326"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1728053685553,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 745.8571281696618,
            "unit": "iter/sec",
            "range": "stddev: 0.00018407834710415427",
            "extra": "mean: 1.3407393483709225 msec\nrounds: 798"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1039.786057019267,
            "unit": "iter/sec",
            "range": "stddev: 0.00004675618073861707",
            "extra": "mean: 961.7363045496869 usec\nrounds: 1077"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1276.3662342772213,
            "unit": "iter/sec",
            "range": "stddev: 0.00005900089496230498",
            "extra": "mean: 783.4741887905539 usec\nrounds: 1356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2382.9614425727955,
            "unit": "iter/sec",
            "range": "stddev: 0.000025130564071997205",
            "extra": "mean: 419.6459003215498 usec\nrounds: 2488"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 680.4517673419258,
            "unit": "iter/sec",
            "range": "stddev: 0.00015478993903101732",
            "extra": "mean: 1.469611878452954 msec\nrounds: 724"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 908.7438823589193,
            "unit": "iter/sec",
            "range": "stddev: 0.00011770950846754172",
            "extra": "mean: 1.1004200626959908 msec\nrounds: 957"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1225.6941817356033,
            "unit": "iter/sec",
            "range": "stddev: 0.000044288350514784054",
            "extra": "mean: 815.8641975308909 usec\nrounds: 1296"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2004.8776830565378,
            "unit": "iter/sec",
            "range": "stddev: 0.00016768362793585797",
            "extra": "mean: 498.78354597446025 usec\nrounds: 2273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 38.06960456150005,
            "unit": "iter/sec",
            "range": "stddev: 0.0021197270069451962",
            "extra": "mean: 26.26767499999998 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 40.01756868869296,
            "unit": "iter/sec",
            "range": "stddev: 0.0018792698913112043",
            "extra": "mean: 24.989024390243678 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1015.558552321211,
            "unit": "iter/sec",
            "range": "stddev: 0.00009695114700038806",
            "extra": "mean: 984.6798076923783 usec\nrounds: 1040"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1527.8381362553207,
            "unit": "iter/sec",
            "range": "stddev: 0.00011192624564538295",
            "extra": "mean: 654.5195961994809 usec\nrounds: 1684"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1738.1505258846043,
            "unit": "iter/sec",
            "range": "stddev: 0.00026499332610251103",
            "extra": "mean: 575.3241650294158 usec\nrounds: 2545"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1490.8574456599915,
            "unit": "iter/sec",
            "range": "stddev: 0.0003943171674029549",
            "extra": "mean: 670.754942339445 usec\nrounds: 2428"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1728054401117,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 761.1321441777618,
            "unit": "iter/sec",
            "range": "stddev: 0.00010553038994509888",
            "extra": "mean: 1.3138323057953138 msec\nrounds: 811"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 977.6223149020062,
            "unit": "iter/sec",
            "range": "stddev: 0.00018166666613336264",
            "extra": "mean: 1.0228899082568885 msec\nrounds: 1090"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1296.6439472096558,
            "unit": "iter/sec",
            "range": "stddev: 0.00008891428007211182",
            "extra": "mean: 771.2217391304483 usec\nrounds: 1380"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2402.3350658509576,
            "unit": "iter/sec",
            "range": "stddev: 0.0000214360567181983",
            "extra": "mean: 416.2616673314799 usec\nrounds: 2507"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 699.7179172652448,
            "unit": "iter/sec",
            "range": "stddev: 0.00009035909000538236",
            "extra": "mean: 1.4291473396999297 msec\nrounds: 733"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 909.7066921996538,
            "unit": "iter/sec",
            "range": "stddev: 0.0002161644244816239",
            "extra": "mean: 1.0992554067971279 msec\nrounds: 971"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1193.5805763367966,
            "unit": "iter/sec",
            "range": "stddev: 0.00010143058249298586",
            "extra": "mean: 837.8152424942166 usec\nrounds: 1299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1835.3772823601253,
            "unit": "iter/sec",
            "range": "stddev: 0.000208731541376461",
            "extra": "mean: 544.8471056120367 usec\nrounds: 2263"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 37.15646132737364,
            "unit": "iter/sec",
            "range": "stddev: 0.0026240821587003686",
            "extra": "mean: 26.913219512195237 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 39.49499071867772,
            "unit": "iter/sec",
            "range": "stddev: 0.002916040981901329",
            "extra": "mean: 25.319666666666325 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 987.7003354452859,
            "unit": "iter/sec",
            "range": "stddev: 0.00018571542152397182",
            "extra": "mean: 1.0124528301887932 msec\nrounds: 1060"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1482.4367509870074,
            "unit": "iter/sec",
            "range": "stddev: 0.00012088066870397896",
            "extra": "mean: 674.5650357994696 usec\nrounds: 1676"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1796.601721090597,
            "unit": "iter/sec",
            "range": "stddev: 0.00027855918237650696",
            "extra": "mean: 556.6063909773874 usec\nrounds: 2660"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1459.3643140361617,
            "unit": "iter/sec",
            "range": "stddev: 0.0004496376477201901",
            "extra": "mean: 685.2298568506869 usec\nrounds: 2445"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1728054942451,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 782.1419459573381,
            "unit": "iter/sec",
            "range": "stddev: 0.000024933839576467183",
            "extra": "mean: 1.278540302267007 msec\nrounds: 794"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1056.3467186613036,
            "unit": "iter/sec",
            "range": "stddev: 0.000011351452050806098",
            "extra": "mean: 946.6588785046722 usec\nrounds: 1070"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1321.1906328868558,
            "unit": "iter/sec",
            "range": "stddev: 0.000011565671164421464",
            "extra": "mean: 756.8930441286577 usec\nrounds: 1337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2408.825844042222,
            "unit": "iter/sec",
            "range": "stddev: 0.000007679974708969672",
            "extra": "mean: 415.1400162337647 usec\nrounds: 2464"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 707.9936789072265,
            "unit": "iter/sec",
            "range": "stddev: 0.00004758023817053393",
            "extra": "mean: 1.4124419889503523 msec\nrounds: 724"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 940.5436421122675,
            "unit": "iter/sec",
            "range": "stddev: 0.000014269808626393952",
            "extra": "mean: 1.0632148846960527 msec\nrounds: 954"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1228.281467777274,
            "unit": "iter/sec",
            "range": "stddev: 0.000054925555553287266",
            "extra": "mean: 814.1456386292489 usec\nrounds: 1284"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2201.8073695843595,
            "unit": "iter/sec",
            "range": "stddev: 0.000013470779003933515",
            "extra": "mean: 454.1723376049797 usec\nrounds: 2263"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 41.19941300645871,
            "unit": "iter/sec",
            "range": "stddev: 0.0004249128598238402",
            "extra": "mean: 24.272190476190353 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 42.36436506654171,
            "unit": "iter/sec",
            "range": "stddev: 0.00028929759706587514",
            "extra": "mean: 23.604744186046457 msec\nrounds: 43"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1034.5672336941627,
            "unit": "iter/sec",
            "range": "stddev: 0.00003243691983291007",
            "extra": "mean: 966.5877358489961 usec\nrounds: 1060"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1642.628362193683,
            "unit": "iter/sec",
            "range": "stddev: 0.000010883623137141922",
            "extra": "mean: 608.7804295942685 usec\nrounds: 1676"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2265.372168284338,
            "unit": "iter/sec",
            "range": "stddev: 0.00004655529874476383",
            "extra": "mean: 441.4285714286595 usec\nrounds: 2646"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 2229.3445064423845,
            "unit": "iter/sec",
            "range": "stddev: 0.0000295933340751061",
            "extra": "mean: 448.5623451692589 usec\nrounds: 2422"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1728397227492,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 687.0219668215349,
            "unit": "iter/sec",
            "range": "stddev: 0.0001580996806794843",
            "extra": "mean: 1.455557534246596 msec\nrounds: 730"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 766.6429157685016,
            "unit": "iter/sec",
            "range": "stddev: 0.0006011997493553755",
            "extra": "mean: 1.3043882352941012 msec\nrounds: 1020"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 917.8697501810511,
            "unit": "iter/sec",
            "range": "stddev: 0.0005537688059732524",
            "extra": "mean: 1.0894791987673074 msec\nrounds: 1298"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1717.4095516221723,
            "unit": "iter/sec",
            "range": "stddev: 0.00030765252212978716",
            "extra": "mean: 582.2722943723319 usec\nrounds: 2310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 493.5481952785847,
            "unit": "iter/sec",
            "range": "stddev: 0.0010802331574201658",
            "extra": "mean: 2.026144578313263 msec\nrounds: 664"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 760.7923711587246,
            "unit": "iter/sec",
            "range": "stddev: 0.00042745551474184857",
            "extra": "mean: 1.314419068736126 msec\nrounds: 902"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1054.4603846285443,
            "unit": "iter/sec",
            "range": "stddev: 0.0002672374344089985",
            "extra": "mean: 948.3523654160521 usec\nrounds: 1226"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1460.424451119784,
            "unit": "iter/sec",
            "range": "stddev: 0.0003820227500202999",
            "extra": "mean: 684.7324414715513 usec\nrounds: 2093"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 34.737936045529715,
            "unit": "iter/sec",
            "range": "stddev: 0.0020367252495276885",
            "extra": "mean: 28.786972222222335 msec\nrounds: 36"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 35.18883087487012,
            "unit": "iter/sec",
            "range": "stddev: 0.0019753985783991916",
            "extra": "mean: 28.418108108108353 msec\nrounds: 37"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 925.749347809508,
            "unit": "iter/sec",
            "range": "stddev: 0.00016739951661258367",
            "extra": "mean: 1.0802060000000893 msec\nrounds: 1000"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1330.6869765372458,
            "unit": "iter/sec",
            "range": "stddev: 0.00032790885159348645",
            "extra": "mean: 751.4915360502215 usec\nrounds: 1595"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1453.8043636223426,
            "unit": "iter/sec",
            "range": "stddev: 0.0002964162317228217",
            "extra": "mean: 687.8504598159068 usec\nrounds: 2501"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1077.293261581143,
            "unit": "iter/sec",
            "range": "stddev: 0.0005808141871331504",
            "extra": "mean: 928.2523484202437 usec\nrounds: 2342"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1728400193105,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 559.7481354634723,
            "unit": "iter/sec",
            "range": "stddev: 0.0007829059422388974",
            "extra": "mean: 1.7865177865612691 msec\nrounds: 759"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 840.875558605027,
            "unit": "iter/sec",
            "range": "stddev: 0.00041170566321368303",
            "extra": "mean: 1.1892366114897583 msec\nrounds: 1027"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1035.7143146578185,
            "unit": "iter/sec",
            "range": "stddev: 0.00044895518062070184",
            "extra": "mean: 965.5172143974684 usec\nrounds: 1278"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2056.075915028469,
            "unit": "iter/sec",
            "range": "stddev: 0.00017334035845826106",
            "extra": "mean: 486.36336464558696 usec\nrounds: 2342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 627.6118603333764,
            "unit": "iter/sec",
            "range": "stddev: 0.0003682336424324545",
            "extra": "mean: 1.5933414634146932 msec\nrounds: 697"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 798.8152635960889,
            "unit": "iter/sec",
            "range": "stddev: 0.0003763847258290836",
            "extra": "mean: 1.2518538961038652 msec\nrounds: 924"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 996.1638951755743,
            "unit": "iter/sec",
            "range": "stddev: 0.00044386508803003123",
            "extra": "mean: 1.0038508771930041 msec\nrounds: 1254"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1870.6993974975655,
            "unit": "iter/sec",
            "range": "stddev: 0.0002072178409662244",
            "extra": "mean: 534.5594280608098 usec\nrounds: 2238"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 32.46349209784511,
            "unit": "iter/sec",
            "range": "stddev: 0.006304349580136852",
            "extra": "mean: 30.80383333333319 msec\nrounds: 36"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 36.47408652929875,
            "unit": "iter/sec",
            "range": "stddev: 0.0016916367281048742",
            "extra": "mean: 27.41672500000032 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 849.9387831147508,
            "unit": "iter/sec",
            "range": "stddev: 0.000305604255346701",
            "extra": "mean: 1.1765553235908632 msec\nrounds: 958"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1000.5509479437181,
            "unit": "iter/sec",
            "range": "stddev: 0.0005994444146955121",
            "extra": "mean: 999.4493554327738 usec\nrounds: 1629"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1315.0732416716821,
            "unit": "iter/sec",
            "range": "stddev: 0.000405951022663573",
            "extra": "mean: 760.4139209226321 usec\nrounds: 2428"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1156.7648734774675,
            "unit": "iter/sec",
            "range": "stddev: 0.000645051636299188",
            "extra": "mean: 864.4799154332886 usec\nrounds: 2365"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1728401551960,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 651.124765522383,
            "unit": "iter/sec",
            "range": "stddev: 0.0005986660067279105",
            "extra": "mean: 1.5358039702233137 msec\nrounds: 806"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 990.0961902655329,
            "unit": "iter/sec",
            "range": "stddev: 0.00009865428980875223",
            "extra": "mean: 1.010002876318321 msec\nrounds: 1043"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1052.9279016562348,
            "unit": "iter/sec",
            "range": "stddev: 0.00044601381662976846",
            "extra": "mean: 949.7326440177146 usec\nrounds: 1354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1922.3050269518455,
            "unit": "iter/sec",
            "range": "stddev: 0.00032884346283562675",
            "extra": "mean: 520.2088045234303 usec\nrounds: 2476"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 549.9548657730651,
            "unit": "iter/sec",
            "range": "stddev: 0.0006842411053603289",
            "extra": "mean: 1.8183310344828238 msec\nrounds: 725"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 862.9584289818159,
            "unit": "iter/sec",
            "range": "stddev: 0.00012375768650845637",
            "extra": "mean: 1.1588043715847078 msec\nrounds: 915"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1160.1766649078022,
            "unit": "iter/sec",
            "range": "stddev: 0.00010133102885527388",
            "extra": "mean: 861.9376947039948 usec\nrounds: 1284"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1801.9913665785741,
            "unit": "iter/sec",
            "range": "stddev: 0.0002417412526171182",
            "extra": "mean: 554.9416154521825 usec\nrounds: 2278"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 33.85715583375322,
            "unit": "iter/sec",
            "range": "stddev: 0.0039516839737056995",
            "extra": "mean: 29.53585365853649 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 36.556451865598085,
            "unit": "iter/sec",
            "range": "stddev: 0.0023382050542510506",
            "extra": "mean: 27.35495238095201 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 833.3107827390673,
            "unit": "iter/sec",
            "range": "stddev: 0.000487651578529045",
            "extra": "mean: 1.2000324737345054 msec\nrounds: 1047"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1376.7988353466499,
            "unit": "iter/sec",
            "range": "stddev: 0.00023707947099278314",
            "extra": "mean: 726.3225202745181 usec\nrounds: 1603"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1606.1314096596195,
            "unit": "iter/sec",
            "range": "stddev: 0.00038625773381136994",
            "extra": "mean: 622.6140613313363 usec\nrounds: 2674"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1308.4124413456016,
            "unit": "iter/sec",
            "range": "stddev: 0.00041832800637318246",
            "extra": "mean: 764.28499791058 usec\nrounds: 2393"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1728402197889,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 713.3232234738459,
            "unit": "iter/sec",
            "range": "stddev: 0.00009124366907007634",
            "extra": "mean: 1.4018890274314266 msec\nrounds: 802"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1021.7689873207681,
            "unit": "iter/sec",
            "range": "stddev: 0.00007916158029443931",
            "extra": "mean: 978.6948051948125 usec\nrounds: 1078"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1301.4653999839695,
            "unit": "iter/sec",
            "range": "stddev: 0.000049565000650047945",
            "extra": "mean: 768.3646449704443 usec\nrounds: 1352"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2320.3881928778155,
            "unit": "iter/sec",
            "range": "stddev: 0.00002943715418895614",
            "extra": "mean: 430.9623721881509 usec\nrounds: 2445"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 699.6622784002194,
            "unit": "iter/sec",
            "range": "stddev: 0.00008065553644948994",
            "extra": "mean: 1.4292609890110184 msec\nrounds: 728"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 923.8851833723965,
            "unit": "iter/sec",
            "range": "stddev: 0.00006519892894647856",
            "extra": "mean: 1.082385579937289 msec\nrounds: 957"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1243.6430927637996,
            "unit": "iter/sec",
            "range": "stddev: 0.00004619519364859588",
            "extra": "mean: 804.0892164468653 usec\nrounds: 1289"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2184.3608240473586,
            "unit": "iter/sec",
            "range": "stddev: 0.000022982484267782238",
            "extra": "mean: 457.7998236331303 usec\nrounds: 2268"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 40.078201368523544,
            "unit": "iter/sec",
            "range": "stddev: 0.0007702272233631688",
            "extra": "mean: 24.951219512195372 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 40.466436854948995,
            "unit": "iter/sec",
            "range": "stddev: 0.0009609615950457007",
            "extra": "mean: 24.711837209302036 msec\nrounds: 43"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 986.2128576083705,
            "unit": "iter/sec",
            "range": "stddev: 0.00011136206563320981",
            "extra": "mean: 1.0139798850575363 msec\nrounds: 1044"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1589.590592952206,
            "unit": "iter/sec",
            "range": "stddev: 0.00006477293454311845",
            "extra": "mean: 629.0928019036578 usec\nrounds: 1681"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2381.719739905182,
            "unit": "iter/sec",
            "range": "stddev: 0.00003403425444115476",
            "extra": "mean: 419.8646814926305 usec\nrounds: 2653"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 2221.761521145382,
            "unit": "iter/sec",
            "range": "stddev: 0.000032554741567581634",
            "extra": "mean: 450.09331131294016 usec\nrounds: 2422"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1728403706938,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 397.17626076407265,
            "unit": "iter/sec",
            "range": "stddev: 0.0016171347130107118",
            "extra": "mean: 2.517773841961848 msec\nrounds: 734"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 597.8413440637536,
            "unit": "iter/sec",
            "range": "stddev: 0.0012218550010369398",
            "extra": "mean: 1.672684584178508 msec\nrounds: 986"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 771.5003023694941,
            "unit": "iter/sec",
            "range": "stddev: 0.0009726909840125429",
            "extra": "mean: 1.296175771971468 msec\nrounds: 1263"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1512.4156494886915,
            "unit": "iter/sec",
            "range": "stddev: 0.0004599343453359718",
            "extra": "mean: 661.1938988716985 usec\nrounds: 2393"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 392.7454477781577,
            "unit": "iter/sec",
            "range": "stddev: 0.0015665505476471374",
            "extra": "mean: 2.546178461538401 msec\nrounds: 650"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 600.1999766401308,
            "unit": "iter/sec",
            "range": "stddev: 0.0009708978673841258",
            "extra": "mean: 1.6661113610798792 msec\nrounds: 889"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 653.3254373923734,
            "unit": "iter/sec",
            "range": "stddev: 0.000957032611979177",
            "extra": "mean: 1.5306307435254831 msec\nrounds: 1197"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1440.0823372193647,
            "unit": "iter/sec",
            "range": "stddev: 0.0005103419535986925",
            "extra": "mean: 694.4047393365621 usec\nrounds: 2110"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.179580434639316,
            "unit": "iter/sec",
            "range": "stddev: 0.011110723384112746",
            "extra": "mean: 43.14141935483917 msec\nrounds: 31"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.371629615299994,
            "unit": "iter/sec",
            "range": "stddev: 0.008768493358145503",
            "extra": "mean: 44.69947058823548 msec\nrounds: 34"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 524.956895990143,
            "unit": "iter/sec",
            "range": "stddev: 0.0012759774512316018",
            "extra": "mean: 1.9049183040330548 msec\nrounds: 967"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1141.9588621545763,
            "unit": "iter/sec",
            "range": "stddev: 0.00048549317827460307",
            "extra": "mean: 875.688287153587 usec\nrounds: 1588"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1347.5835698828057,
            "unit": "iter/sec",
            "range": "stddev: 0.0006184325175618124",
            "extra": "mean: 742.0690058479759 usec\nrounds: 2565"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1446.4281604399691,
            "unit": "iter/sec",
            "range": "stddev: 0.00039372408005736956",
            "extra": "mean: 691.3582211340685 usec\nrounds: 2451"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1728480299748,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 721.7998652285173,
            "unit": "iter/sec",
            "range": "stddev: 0.00011436576417174678",
            "extra": "mean: 1.3854255842558327 msec\nrounds: 813"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1004.0271519863361,
            "unit": "iter/sec",
            "range": "stddev: 0.00019178812341376673",
            "extra": "mean: 995.98900091659 usec\nrounds: 1091"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1190.6537605032806,
            "unit": "iter/sec",
            "range": "stddev: 0.00007870845074380175",
            "extra": "mean: 839.8747252747158 usec\nrounds: 1365"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2195.6361731058832,
            "unit": "iter/sec",
            "range": "stddev: 0.000042797209246551276",
            "extra": "mean: 455.44886363637784 usec\nrounds: 2464"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 547.244566993694,
            "unit": "iter/sec",
            "range": "stddev: 0.0005176863129547938",
            "extra": "mean: 1.8273365517240912 msec\nrounds: 725"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 833.0431754874874,
            "unit": "iter/sec",
            "range": "stddev: 0.0002959330800661597",
            "extra": "mean: 1.200417972831734 msec\nrounds: 957"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1127.6203507702378,
            "unit": "iter/sec",
            "range": "stddev: 0.0001946636320139369",
            "extra": "mean: 886.8232994526351 usec\nrounds: 1279"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2015.3631874392813,
            "unit": "iter/sec",
            "range": "stddev: 0.0001175758384664471",
            "extra": "mean: 496.18848167540415 usec\nrounds: 2101"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 34.09370826184287,
            "unit": "iter/sec",
            "range": "stddev: 0.005709751044855309",
            "extra": "mean: 29.330925000000185 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 37.194916042265966,
            "unit": "iter/sec",
            "range": "stddev: 0.004261520877729399",
            "extra": "mean: 26.88539473684153 msec\nrounds: 38"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 934.9120598343387,
            "unit": "iter/sec",
            "range": "stddev: 0.0001231241925551292",
            "extra": "mean: 1.069619318181856 msec\nrounds: 1056"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1523.9673524215266,
            "unit": "iter/sec",
            "range": "stddev: 0.00007645241811437656",
            "extra": "mean: 656.1820359281567 usec\nrounds: 1670"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1726.7053812191443,
            "unit": "iter/sec",
            "range": "stddev: 0.0002815043973042537",
            "extra": "mean: 579.1375939848798 usec\nrounds: 2660"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1244.0984013915897,
            "unit": "iter/sec",
            "range": "stddev: 0.0004968602902074809",
            "extra": "mean: 803.7949400798581 usec\nrounds: 2253"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1728483508728,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 785.3783970810315,
            "unit": "iter/sec",
            "range": "stddev: 0.00003787398418502035",
            "extra": "mean: 1.273271589486851 msec\nrounds: 799"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1043.5404552689686,
            "unit": "iter/sec",
            "range": "stddev: 0.000027847615798109217",
            "extra": "mean: 958.2762172284484 usec\nrounds: 1068"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1256.5556880930649,
            "unit": "iter/sec",
            "range": "stddev: 0.00015790201126399567",
            "extra": "mean: 795.8262490678699 usec\nrounds: 1341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1976.9046560903457,
            "unit": "iter/sec",
            "range": "stddev: 0.0001772107165662321",
            "extra": "mean: 505.8412892696932 usec\nrounds: 2451"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 596.2886202327869,
            "unit": "iter/sec",
            "range": "stddev: 0.0005248625161696364",
            "extra": "mean: 1.6770402219140237 msec\nrounds: 721"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 805.6053259369362,
            "unit": "iter/sec",
            "range": "stddev: 0.0002387343144516671",
            "extra": "mean: 1.241302617801066 msec\nrounds: 955"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1135.3175547362675,
            "unit": "iter/sec",
            "range": "stddev: 0.0001622243638746157",
            "extra": "mean: 880.8108320251407 usec\nrounds: 1274"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1895.8364643741563,
            "unit": "iter/sec",
            "range": "stddev: 0.00017463952707108934",
            "extra": "mean: 527.4716563330344 usec\nrounds: 2258"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 39.03200624511995,
            "unit": "iter/sec",
            "range": "stddev: 0.0008910849624228123",
            "extra": "mean: 25.620000000000687 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 38.48915966899395,
            "unit": "iter/sec",
            "range": "stddev: 0.0011323464268891985",
            "extra": "mean: 25.981341463414147 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 951.6267430739892,
            "unit": "iter/sec",
            "range": "stddev: 0.0001546014456450667",
            "extra": "mean: 1.0508321747765865 msec\nrounds: 1007"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1548.286300897724,
            "unit": "iter/sec",
            "range": "stddev: 0.0000619130762605396",
            "extra": "mean: 645.8753781004083 usec\nrounds: 1653"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2119.723976107571,
            "unit": "iter/sec",
            "range": "stddev: 0.00011020368582230823",
            "extra": "mean: 471.75953627523256 usec\nrounds: 2674"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1476.4943908341604,
            "unit": "iter/sec",
            "range": "stddev: 0.0001910203797828765",
            "extra": "mean: 677.2799180327668 usec\nrounds: 2440"
          }
        ]
      }
    ]
  }
}