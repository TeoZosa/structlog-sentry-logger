window.BENCHMARK_DATA = {
  "lastUpdate": 1743517153957,
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
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1728484171086,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 622.7608543622597,
            "unit": "iter/sec",
            "range": "stddev: 0.0004934508986001616",
            "extra": "mean: 1.6057528230865656 msec\nrounds: 797"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1014.7512996106012,
            "unit": "iter/sec",
            "range": "stddev: 0.00006772902952417465",
            "extra": "mean: 985.4631379962145 usec\nrounds: 1058"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1171.472063501466,
            "unit": "iter/sec",
            "range": "stddev: 0.00014942667106067494",
            "extra": "mean: 853.6268436577606 usec\nrounds: 1356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2256.671261180085,
            "unit": "iter/sec",
            "range": "stddev: 0.000045884188121681654",
            "extra": "mean: 443.13056013177055 usec\nrounds: 2428"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 666.7188500020502,
            "unit": "iter/sec",
            "range": "stddev: 0.0002553738100861056",
            "extra": "mean: 1.499882596685132 msec\nrounds: 724"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 764.1924029150434,
            "unit": "iter/sec",
            "range": "stddev: 0.0003788375946428077",
            "extra": "mean: 1.3085709779179415 msec\nrounds: 951"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1096.15104430023,
            "unit": "iter/sec",
            "range": "stddev: 0.00011052164525688894",
            "extra": "mean: 912.2830336200502 usec\nrounds: 1279"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1933.692985878644,
            "unit": "iter/sec",
            "range": "stddev: 0.00014555397267161435",
            "extra": "mean: 517.1451762522754 usec\nrounds: 2156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 35.19967897892782,
            "unit": "iter/sec",
            "range": "stddev: 0.0033808396586412675",
            "extra": "mean: 28.40934999999991 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 36.70539533501215,
            "unit": "iter/sec",
            "range": "stddev: 0.0029696526223720638",
            "extra": "mean: 27.2439512195127 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 868.9289685706157,
            "unit": "iter/sec",
            "range": "stddev: 0.0003188646462824356",
            "extra": "mean: 1.1508420551854723 msec\nrounds: 1051"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1483.7240502751467,
            "unit": "iter/sec",
            "range": "stddev: 0.00005936084824986728",
            "extra": "mean: 673.979773944189 usec\nrounds: 1681"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1370.6799106385392,
            "unit": "iter/sec",
            "range": "stddev: 0.0004475081862720752",
            "extra": "mean: 729.5649350650687 usec\nrounds: 2464"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1413.381144939675,
            "unit": "iter/sec",
            "range": "stddev: 0.000495096196922767",
            "extra": "mean: 707.5232350313271 usec\nrounds: 2238"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1728568341368,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 751.1534548286694,
            "unit": "iter/sec",
            "range": "stddev: 0.00007236063795670963",
            "extra": "mean: 1.331285895806856 msec\nrounds: 787"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 770.8093135228712,
            "unit": "iter/sec",
            "range": "stddev: 0.0007732161973905081",
            "extra": "mean: 1.2973377234242882 msec\nrounds: 1063"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1218.3604963206024,
            "unit": "iter/sec",
            "range": "stddev: 0.0000970333969237093",
            "extra": "mean: 820.7751343054523 usec\nrounds: 1303"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2395.585002631725,
            "unit": "iter/sec",
            "range": "stddev: 0.000009533066337573191",
            "extra": "mean: 417.43457189013424 usec\nrounds: 2476"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 706.0204823953197,
            "unit": "iter/sec",
            "range": "stddev: 0.00004212896225752519",
            "extra": "mean: 1.4163895027624331 msec\nrounds: 724"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 918.3867426460612,
            "unit": "iter/sec",
            "range": "stddev: 0.00007098049316876218",
            "extra": "mean: 1.0888658922915135 msec\nrounds: 947"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1111.6018653306091,
            "unit": "iter/sec",
            "range": "stddev: 0.00025011894825311825",
            "extra": "mean: 899.6026645768385 usec\nrounds: 1276"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2186.537286970624,
            "unit": "iter/sec",
            "range": "stddev: 0.00003870913985441401",
            "extra": "mean: 457.3441330998143 usec\nrounds: 2284"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 40.866855783855954,
            "unit": "iter/sec",
            "range": "stddev: 0.0007030055563047267",
            "extra": "mean: 24.469707317073315 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 40.414187689261006,
            "unit": "iter/sec",
            "range": "stddev: 0.001534871735893208",
            "extra": "mean: 24.743785714285764 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 942.757905182903,
            "unit": "iter/sec",
            "range": "stddev: 0.0002520231465577846",
            "extra": "mean: 1.0607177033492936 msec\nrounds: 1045"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1544.5149648265688,
            "unit": "iter/sec",
            "range": "stddev: 0.00021803594795228627",
            "extra": "mean: 647.4524512698965 usec\nrounds: 1693"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1777.4445908850796,
            "unit": "iter/sec",
            "range": "stddev: 0.00022824484588199754",
            "extra": "mean: 562.6054421769904 usec\nrounds: 2646"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1464.5104740383408,
            "unit": "iter/sec",
            "range": "stddev: 0.00020747221767024248",
            "extra": "mean: 682.8220198675206 usec\nrounds: 2416"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1728912862909,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 709.1264291139838,
            "unit": "iter/sec",
            "range": "stddev: 0.0001814550861599456",
            "extra": "mean: 1.4101857707509893 msec\nrounds: 759"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 962.2500507879545,
            "unit": "iter/sec",
            "range": "stddev: 0.0001708222965706675",
            "extra": "mean: 1.0392309142318397 msec\nrounds: 1061"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1223.6617344671947,
            "unit": "iter/sec",
            "range": "stddev: 0.0001331627562674558",
            "extra": "mean: 817.2193113772727 usec\nrounds: 1336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2251.9961908884216,
            "unit": "iter/sec",
            "range": "stddev: 0.00006206914583278025",
            "extra": "mean: 444.0504846526832 usec\nrounds: 2476"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 647.7800001985004,
            "unit": "iter/sec",
            "range": "stddev: 0.00019671420196198196",
            "extra": "mean: 1.5437339832868693 msec\nrounds: 718"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 769.4220153819896,
            "unit": "iter/sec",
            "range": "stddev: 0.0004894415175212974",
            "extra": "mean: 1.299676874339938 msec\nrounds: 947"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1150.5320110849605,
            "unit": "iter/sec",
            "range": "stddev: 0.00008483460639335924",
            "extra": "mean: 869.1631265930553 usec\nrounds: 1177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2148.012479821553,
            "unit": "iter/sec",
            "range": "stddev: 0.0000638264741335953",
            "extra": "mean: 465.5466434175817 usec\nrounds: 2294"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 39.89244995492124,
            "unit": "iter/sec",
            "range": "stddev: 0.0013307442452074791",
            "extra": "mean: 25.067400000000184 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 38.4181948570848,
            "unit": "iter/sec",
            "range": "stddev: 0.003782868054194842",
            "extra": "mean: 26.029333333333007 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 920.7694723228088,
            "unit": "iter/sec",
            "range": "stddev: 0.00024315148714461603",
            "extra": "mean: 1.0860481695568356 msec\nrounds: 1038"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1438.1016372760414,
            "unit": "iter/sec",
            "range": "stddev: 0.0002622766035771045",
            "extra": "mean: 695.3611442193578 usec\nrounds: 1678"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2140.215318147212,
            "unit": "iter/sec",
            "range": "stddev: 0.00008133131283665435",
            "extra": "mean: 467.242707554164 usec\nrounds: 2674"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1426.4969028389287,
            "unit": "iter/sec",
            "range": "stddev: 0.00019569799874714103",
            "extra": "mean: 701.0179959100225 usec\nrounds: 2445"
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
        "date": 1728978178442,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 779.056909420403,
            "unit": "iter/sec",
            "range": "stddev: 0.00003845103060662673",
            "extra": "mean: 1.2836032745592008 msec\nrounds: 794"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1040.2296671556746,
            "unit": "iter/sec",
            "range": "stddev: 0.00005496604247479153",
            "extra": "mean: 961.3261682242966 usec\nrounds: 1070"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1299.8625145417352,
            "unit": "iter/sec",
            "range": "stddev: 0.0000324837405215353",
            "extra": "mean: 769.3121301775124 usec\nrounds: 1352"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2406.4107964678888,
            "unit": "iter/sec",
            "range": "stddev: 0.000009045108915545474",
            "extra": "mean: 415.5566462167608 usec\nrounds: 2445"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 683.2113039370302,
            "unit": "iter/sec",
            "range": "stddev: 0.0001050958775737449",
            "extra": "mean: 1.4636760168303178 msec\nrounds: 713"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 927.9870258950857,
            "unit": "iter/sec",
            "range": "stddev: 0.000017959144435833314",
            "extra": "mean: 1.0776012725344457 msec\nrounds: 943"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1207.6264485526901,
            "unit": "iter/sec",
            "range": "stddev: 0.00006179198953747227",
            "extra": "mean: 828.0706349206534 usec\nrounds: 1260"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2141.180773568244,
            "unit": "iter/sec",
            "range": "stddev: 0.00006359381596155142",
            "extra": "mean: 467.0320284697474 usec\nrounds: 2248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 40.07338316116502,
            "unit": "iter/sec",
            "range": "stddev: 0.001101186757824898",
            "extra": "mean: 24.95421951219473 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 41.61349386894532,
            "unit": "iter/sec",
            "range": "stddev: 0.0002128483562640963",
            "extra": "mean: 24.030666666666615 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 979.0397345713934,
            "unit": "iter/sec",
            "range": "stddev: 0.0002344509065238664",
            "extra": "mean: 1.0214090038314765 msec\nrounds: 1044"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1493.1646045506232,
            "unit": "iter/sec",
            "range": "stddev: 0.00012592467398677727",
            "extra": "mean: 669.7185273159861 usec\nrounds: 1684"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1639.795821748422,
            "unit": "iter/sec",
            "range": "stddev: 0.0002619234530419062",
            "extra": "mean: 609.8320209974412 usec\nrounds: 2667"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1433.40750911424,
            "unit": "iter/sec",
            "range": "stddev: 0.00020882034789981702",
            "extra": "mean: 697.6383154417407 usec\nrounds: 2422"
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
        "date": 1728979172705,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 751.8181484572601,
            "unit": "iter/sec",
            "range": "stddev: 0.000163492588440039",
            "extra": "mean: 1.3301088861076473 msec\nrounds: 799"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1003.9801650404062,
            "unit": "iter/sec",
            "range": "stddev: 0.00010505178141868861",
            "extra": "mean: 996.0356138706726 usec\nrounds: 1067"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1284.5984216969468,
            "unit": "iter/sec",
            "range": "stddev: 0.00012337938801056043",
            "extra": "mean: 778.4533929903215 usec\nrounds: 1341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2145.8810220332734,
            "unit": "iter/sec",
            "range": "stddev: 0.00011568298789342662",
            "extra": "mean: 466.0090609555212 usec\nrounds: 2428"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 648.8843676837068,
            "unit": "iter/sec",
            "range": "stddev: 0.0002926414757806604",
            "extra": "mean: 1.5411066282420316 msec\nrounds: 694"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 893.0823612825401,
            "unit": "iter/sec",
            "range": "stddev: 0.00003236925072165125",
            "extra": "mean: 1.11971755725185 msec\nrounds: 917"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 983.843638005522,
            "unit": "iter/sec",
            "range": "stddev: 0.00047394992405607904",
            "extra": "mean: 1.0164216765453 msec\nrounds: 1181"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1841.669756865934,
            "unit": "iter/sec",
            "range": "stddev: 0.00021221431556825952",
            "extra": "mean: 542.985514244287 usec\nrounds: 2071"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 33.33138900230823,
            "unit": "iter/sec",
            "range": "stddev: 0.004250430535336045",
            "extra": "mean: 30.001749999999976 msec\nrounds: 36"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 37.388952351716725,
            "unit": "iter/sec",
            "range": "stddev: 0.001607995263052918",
            "extra": "mean: 26.745868421052048 msec\nrounds: 38"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 957.9559531280145,
            "unit": "iter/sec",
            "range": "stddev: 0.00008287340173072988",
            "extra": "mean: 1.0438893320039395 msec\nrounds: 1003"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1413.08846830167,
            "unit": "iter/sec",
            "range": "stddev: 0.00017408099462311443",
            "extra": "mean: 707.6697761194364 usec\nrounds: 1608"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1750.454458840713,
            "unit": "iter/sec",
            "range": "stddev: 0.00012235279962172996",
            "extra": "mean: 571.2802152318077 usec\nrounds: 2416"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1247.1674959472666,
            "unit": "iter/sec",
            "range": "stddev: 0.0003884129281470813",
            "extra": "mean: 801.8169197397705 usec\nrounds: 2305"
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
        "date": 1729000009216,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 784.7358121330716,
            "unit": "iter/sec",
            "range": "stddev: 0.00002560388786107005",
            "extra": "mean: 1.2743142144638417 msec\nrounds: 802"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1052.9619117919817,
            "unit": "iter/sec",
            "range": "stddev: 0.00001137676551117286",
            "extra": "mean: 949.7019681349647 usec\nrounds: 1067"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1316.1008215363063,
            "unit": "iter/sec",
            "range": "stddev: 0.000011909462993960393",
            "extra": "mean: 759.8202080237921 usec\nrounds: 1346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2432.0481627845056,
            "unit": "iter/sec",
            "range": "stddev: 0.000015585212692266544",
            "extra": "mean: 411.1760676873594 usec\nrounds: 2482"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 672.0960008410192,
            "unit": "iter/sec",
            "range": "stddev: 0.00006531383242960205",
            "extra": "mean: 1.4878826815643333 msec\nrounds: 716"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 927.7916394461657,
            "unit": "iter/sec",
            "range": "stddev: 0.00001849938799894806",
            "extra": "mean: 1.0778282078473331 msec\nrounds: 943"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1254.2518053251697,
            "unit": "iter/sec",
            "range": "stddev: 0.000014618674329730677",
            "extra": "mean: 797.2880690737742 usec\nrounds: 1274"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2140.4365239235867,
            "unit": "iter/sec",
            "range": "stddev: 0.00008774660836425598",
            "extra": "mean: 467.19441984054833 usec\nrounds: 2258"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 40.39794936067795,
            "unit": "iter/sec",
            "range": "stddev: 0.000514591635395916",
            "extra": "mean: 24.753731707316994 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 39.92440978414197,
            "unit": "iter/sec",
            "range": "stddev: 0.0014320485525671231",
            "extra": "mean: 25.04733333333337 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 990.6473455841224,
            "unit": "iter/sec",
            "range": "stddev: 0.00003785599172744015",
            "extra": "mean: 1.0094409523808525 msec\nrounds: 1050"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1376.6436469198522,
            "unit": "iter/sec",
            "range": "stddev: 0.0002699994977449841",
            "extra": "mean: 726.4043982895886 usec\nrounds: 1637"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1871.018148663116,
            "unit": "iter/sec",
            "range": "stddev: 0.0002384889339367949",
            "extra": "mean: 534.4683592270455 usec\nrounds: 2639"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1155.61573853236,
            "unit": "iter/sec",
            "range": "stddev: 0.0004993528437313443",
            "extra": "mean: 865.3395472702779 usec\nrounds: 2253"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729001716590,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 790.1581198550185,
            "unit": "iter/sec",
            "range": "stddev: 0.00002942951594778833",
            "extra": "mean: 1.2655694789082015 msec\nrounds: 806"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1056.4267101519874,
            "unit": "iter/sec",
            "range": "stddev: 0.000017895583436584907",
            "extra": "mean: 946.5871985157689 usec\nrounds: 1078"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1201.4044737254885,
            "unit": "iter/sec",
            "range": "stddev: 0.00014647695962947962",
            "extra": "mean: 832.3591445427663 usec\nrounds: 1356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2149.675475036727,
            "unit": "iter/sec",
            "range": "stddev: 0.00014653625191997518",
            "extra": "mean: 465.1864951768662 usec\nrounds: 2488"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 695.6808377301124,
            "unit": "iter/sec",
            "range": "stddev: 0.0000693190221509318",
            "extra": "mean: 1.4374407713497312 msec\nrounds: 726"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 920.6216360514264,
            "unit": "iter/sec",
            "range": "stddev: 0.000048518507796705243",
            "extra": "mean: 1.086222570532917 msec\nrounds: 957"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1264.417351968474,
            "unit": "iter/sec",
            "range": "stddev: 0.000016029156189796826",
            "extra": "mean: 790.8781055900388 usec\nrounds: 1288"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2172.594409622899,
            "unit": "iter/sec",
            "range": "stddev: 0.00004972468087703828",
            "extra": "mean: 460.27919227389145 usec\nrounds: 2278"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 36.51663377200813,
            "unit": "iter/sec",
            "range": "stddev: 0.0027405204023337264",
            "extra": "mean: 27.38478048780475 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 41.782812938345884,
            "unit": "iter/sec",
            "range": "stddev: 0.00015045091342996925",
            "extra": "mean: 23.933285714286054 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1022.0927033236195,
            "unit": "iter/sec",
            "range": "stddev: 0.000052857527144680316",
            "extra": "mean: 978.3848341233835 usec\nrounds: 1055"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1514.0903005614607,
            "unit": "iter/sec",
            "range": "stddev: 0.00017330812349772894",
            "extra": "mean: 660.4625890735686 usec\nrounds: 1684"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2170.5266954385825,
            "unit": "iter/sec",
            "range": "stddev: 0.00016043780241219518",
            "extra": "mean: 460.7176691728905 usec\nrounds: 2660"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1551.045575999319,
            "unit": "iter/sec",
            "range": "stddev: 0.00016020801733025372",
            "extra": "mean: 644.7263803681028 usec\nrounds: 2445"
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
        "date": 1729004379531,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 737.5574443778821,
            "unit": "iter/sec",
            "range": "stddev: 0.00007697549657097386",
            "extra": "mean: 1.3558265971316772 msec\nrounds: 767"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1004.541182328574,
            "unit": "iter/sec",
            "range": "stddev: 0.00008611085099783218",
            "extra": "mean: 995.4793467819335 usec\nrounds: 1041"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1238.8143902371253,
            "unit": "iter/sec",
            "range": "stddev: 0.00008873543819145622",
            "extra": "mean: 807.2234290147267 usec\nrounds: 1289"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2295.7618332240654,
            "unit": "iter/sec",
            "range": "stddev: 0.0000203857949914764",
            "extra": "mean: 435.5852534562109 usec\nrounds: 2387"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 656.5236599207384,
            "unit": "iter/sec",
            "range": "stddev: 0.0001600762620538312",
            "extra": "mean: 1.5231743515850278 msec\nrounds: 694"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 819.5435895300222,
            "unit": "iter/sec",
            "range": "stddev: 0.00018920834484935592",
            "extra": "mean: 1.2201913513513818 msec\nrounds: 925"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1088.2224810406046,
            "unit": "iter/sec",
            "range": "stddev: 0.000351241605653015",
            "extra": "mean: 918.9297385620608 usec\nrounds: 1224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1868.7950836049697,
            "unit": "iter/sec",
            "range": "stddev: 0.00008131132636160242",
            "extra": "mean: 535.1041474654171 usec\nrounds: 2170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 32.867624378675856,
            "unit": "iter/sec",
            "range": "stddev: 0.003384614029029513",
            "extra": "mean: 30.425076923076578 msec\nrounds: 39"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 39.68379948569691,
            "unit": "iter/sec",
            "range": "stddev: 0.0005824346865556843",
            "extra": "mean: 25.199200000000666 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 911.8382189960869,
            "unit": "iter/sec",
            "range": "stddev: 0.0002032008358703324",
            "extra": "mean: 1.0966857707510629 msec\nrounds: 1012"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1554.9847169393051,
            "unit": "iter/sec",
            "range": "stddev: 0.00007532549374590586",
            "extra": "mean: 643.0931372549512 usec\nrounds: 1632"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2132.704582896973,
            "unit": "iter/sec",
            "range": "stddev: 0.00009467165335486088",
            "extra": "mean: 468.88819390149365 usec\nrounds: 2558"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1401.8134807630931,
            "unit": "iter/sec",
            "range": "stddev: 0.00035189691693103954",
            "extra": "mean: 713.3616659583261 usec\nrounds: 2353"
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
        "date": 1729005206264,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 764.2211904236445,
            "unit": "iter/sec",
            "range": "stddev: 0.00013809475192530675",
            "extra": "mean: 1.3085216852540453 msec\nrounds: 807"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1050.0968271100442,
            "unit": "iter/sec",
            "range": "stddev: 0.00005364415032998979",
            "extra": "mean: 952.2931354359816 usec\nrounds: 1078"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1278.202787871605,
            "unit": "iter/sec",
            "range": "stddev: 0.00009273297448136061",
            "extra": "mean: 782.3484735666603 usec\nrounds: 1343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2277.7021830443437,
            "unit": "iter/sec",
            "range": "stddev: 0.0000702439871180843",
            "extra": "mean: 439.0389610389777 usec\nrounds: 2464"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 710.5943781277406,
            "unit": "iter/sec",
            "range": "stddev: 0.000044952905581700434",
            "extra": "mean: 1.407272602739666 msec\nrounds: 730"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 916.4324038316878,
            "unit": "iter/sec",
            "range": "stddev: 0.00005318581341605191",
            "extra": "mean: 1.0911879543094598 msec\nrounds: 963"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1250.188861468952,
            "unit": "iter/sec",
            "range": "stddev: 0.00003355762561247514",
            "extra": "mean: 799.8791469194631 usec\nrounds: 1266"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2128.871189150976,
            "unit": "iter/sec",
            "range": "stddev: 0.00007127119832183832",
            "extra": "mean: 469.7325066430225 usec\nrounds: 2258"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 38.66549349901003,
            "unit": "iter/sec",
            "range": "stddev: 0.0011622387138830233",
            "extra": "mean: 25.862853658536732 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 40.52661440663311,
            "unit": "iter/sec",
            "range": "stddev: 0.0007232907714539814",
            "extra": "mean: 24.67514285714247 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1034.4728971060056,
            "unit": "iter/sec",
            "range": "stddev: 0.000029364317934394536",
            "extra": "mean: 966.6758817921229 usec\nrounds: 1049"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1656.0286771408666,
            "unit": "iter/sec",
            "range": "stddev: 0.00001619000607266375",
            "extra": "mean: 603.8542772861275 usec\nrounds: 1695"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2209.5623918640204,
            "unit": "iter/sec",
            "range": "stddev: 0.000076035670408618",
            "extra": "mean: 452.57830404887767 usec\nrounds: 2618"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1682.483693065602,
            "unit": "iter/sec",
            "range": "stddev: 0.00012615861954584228",
            "extra": "mean: 594.359400998372 usec\nrounds: 2404"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729005962459,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 424.3708421127389,
            "unit": "iter/sec",
            "range": "stddev: 0.001662054618668551",
            "extra": "mean: 2.356429567642959 msec\nrounds: 717"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 656.7100655557938,
            "unit": "iter/sec",
            "range": "stddev: 0.0008659621479214497",
            "extra": "mean: 1.5227420020639846 msec\nrounds: 969"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 882.9453319331736,
            "unit": "iter/sec",
            "range": "stddev: 0.0006275231089466037",
            "extra": "mean: 1.1325729508196616 msec\nrounds: 1220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1646.8080984210505,
            "unit": "iter/sec",
            "range": "stddev: 0.0002724214215609399",
            "extra": "mean: 607.235294117629 usec\nrounds: 2193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 446.1253215442891,
            "unit": "iter/sec",
            "range": "stddev: 0.0007894885725126308",
            "extra": "mean: 2.2415226209049086 msec\nrounds: 641"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 574.238500390504,
            "unit": "iter/sec",
            "range": "stddev: 0.0009201238135846908",
            "extra": "mean: 1.7414367015098464 msec\nrounds: 861"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 739.9706302284761,
            "unit": "iter/sec",
            "range": "stddev: 0.0008936491513584907",
            "extra": "mean: 1.3514049871023073 msec\nrounds: 1163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1444.5958755472177,
            "unit": "iter/sec",
            "range": "stddev: 0.0005706948424120328",
            "extra": "mean: 692.235120511608 usec\nrounds: 2033"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.44903541258216,
            "unit": "iter/sec",
            "range": "stddev: 0.010184978332121652",
            "extra": "mean: 42.645677419354534 msec\nrounds: 31"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.792827420109194,
            "unit": "iter/sec",
            "range": "stddev: 0.010714519648157296",
            "extra": "mean: 45.88665714285684 msec\nrounds: 35"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 771.853981853642,
            "unit": "iter/sec",
            "range": "stddev: 0.0005878581742128294",
            "extra": "mean: 1.2955818373812817 msec\nrounds: 947"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1083.993198862496,
            "unit": "iter/sec",
            "range": "stddev: 0.0005133676321167964",
            "extra": "mean: 922.5150130548462 usec\nrounds: 1532"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 902.7358060020036,
            "unit": "iter/sec",
            "range": "stddev: 0.0006795592461471566",
            "extra": "mean: 1.107743808710497 msec\nrounds: 2342"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 918.1472553510057,
            "unit": "iter/sec",
            "range": "stddev: 0.000639857569879898",
            "extra": "mean: 1.089149909420251 msec\nrounds: 2208"
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
        "date": 1729041209448,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 778.883768900602,
            "unit": "iter/sec",
            "range": "stddev: 0.000051665483287732954",
            "extra": "mean: 1.2838886107634577 msec\nrounds: 799"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1056.6350465422556,
            "unit": "iter/sec",
            "range": "stddev: 0.000022751710619975732",
            "extra": "mean: 946.4005602240917 usec\nrounds: 1071"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1334.8107605069586,
            "unit": "iter/sec",
            "range": "stddev: 0.000010206621134615728",
            "extra": "mean: 749.1698670605576 usec\nrounds: 1354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2394.2017071105556,
            "unit": "iter/sec",
            "range": "stddev: 0.00005988291579348542",
            "extra": "mean: 417.67575264443815 usec\nrounds: 2458"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 641.0147976485416,
            "unit": "iter/sec",
            "range": "stddev: 0.0002592949799864599",
            "extra": "mean: 1.5600263888888948 msec\nrounds: 720"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 931.3587609683236,
            "unit": "iter/sec",
            "range": "stddev: 0.000024295198935613812",
            "extra": "mean: 1.0737001055965918 msec\nrounds: 947"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1199.9925466301631,
            "unit": "iter/sec",
            "range": "stddev: 0.00015817919477978967",
            "extra": "mean: 833.3385093167577 usec\nrounds: 1288"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2042.2828183500942,
            "unit": "iter/sec",
            "range": "stddev: 0.00010240118311608513",
            "extra": "mean: 489.648148148195 usec\nrounds: 2268"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 37.46800369562449,
            "unit": "iter/sec",
            "range": "stddev: 0.002172628650377044",
            "extra": "mean: 26.689439024390293 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 40.693888940564676,
            "unit": "iter/sec",
            "range": "stddev: 0.0016689854561863777",
            "extra": "mean: 24.573714285713674 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1002.1922956467513,
            "unit": "iter/sec",
            "range": "stddev: 0.0001196438984687391",
            "extra": "mean: 997.8124999999761 usec\nrounds: 1056"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1561.5780394395072,
            "unit": "iter/sec",
            "range": "stddev: 0.0001205798520715159",
            "extra": "mean: 640.3778580024904 usec\nrounds: 1662"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2072.0405054007783,
            "unit": "iter/sec",
            "range": "stddev: 0.00014739343784171043",
            "extra": "mean: 482.6160479939932 usec\nrounds: 2667"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1678.5715273339424,
            "unit": "iter/sec",
            "range": "stddev: 0.00019087014731415872",
            "extra": "mean: 595.7446457990918 usec\nrounds: 2428"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729085730632,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 717.4767949570505,
            "unit": "iter/sec",
            "range": "stddev: 0.00026278880034416395",
            "extra": "mean: 1.393773299748129 msec\nrounds: 794"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1050.8782974390128,
            "unit": "iter/sec",
            "range": "stddev: 0.000014743054935114794",
            "extra": "mean: 951.5849765258231 usec\nrounds: 1065"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1274.8353257827775,
            "unit": "iter/sec",
            "range": "stddev: 0.00007080818470525568",
            "extra": "mean: 784.4150375939555 usec\nrounds: 1330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2300.4300387933176,
            "unit": "iter/sec",
            "range": "stddev: 0.00003709057844604842",
            "extra": "mean: 434.70133111483204 usec\nrounds: 2404"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 686.6157673336594,
            "unit": "iter/sec",
            "range": "stddev: 0.00011128979830381827",
            "extra": "mean: 1.456418636995926 msec\nrounds: 719"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 875.6591767692013,
            "unit": "iter/sec",
            "range": "stddev: 0.00014540811571926374",
            "extra": "mean: 1.1419968253967965 msec\nrounds: 945"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1234.9097621995852,
            "unit": "iter/sec",
            "range": "stddev: 0.000037577815259893987",
            "extra": "mean: 809.7757671125939 usec\nrounds: 1271"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2064.9447158817134,
            "unit": "iter/sec",
            "range": "stddev: 0.00006885004200502409",
            "extra": "mean: 484.2744661921899 usec\nrounds: 2248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 35.732854036651204,
            "unit": "iter/sec",
            "range": "stddev: 0.007502141065158673",
            "extra": "mean: 27.98544999999999 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 39.606234813485365,
            "unit": "iter/sec",
            "range": "stddev: 0.0016952413631942745",
            "extra": "mean: 25.248549999999348 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 954.4528233746825,
            "unit": "iter/sec",
            "range": "stddev: 0.00012502460311404176",
            "extra": "mean: 1.0477207207206694 msec\nrounds: 999"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1522.3885038744813,
            "unit": "iter/sec",
            "range": "stddev: 0.00013291950262305473",
            "extra": "mean: 656.8625534513682 usec\nrounds: 1637"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1595.1915757265892,
            "unit": "iter/sec",
            "range": "stddev: 0.00028829692271441595",
            "extra": "mean: 626.8839525086589 usec\nrounds: 2611"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1254.245832183064,
            "unit": "iter/sec",
            "range": "stddev: 0.0004281105111175376",
            "extra": "mean: 797.291866028736 usec\nrounds: 2299"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729173158779,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 445.319260118344,
            "unit": "iter/sec",
            "range": "stddev: 0.0010440351864441577",
            "extra": "mean: 2.2455799457994456 msec\nrounds: 738"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 598.3039227429399,
            "unit": "iter/sec",
            "range": "stddev: 0.0009406578662376982",
            "extra": "mean: 1.6713913480885665 msec\nrounds: 994"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 729.3712318975365,
            "unit": "iter/sec",
            "range": "stddev: 0.0007687749775416939",
            "extra": "mean: 1.3710439297124377 msec\nrounds: 1252"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1753.0263471114588,
            "unit": "iter/sec",
            "range": "stddev: 0.00034137192223044347",
            "extra": "mean: 570.4420824294771 usec\nrounds: 2305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 498.8621585254513,
            "unit": "iter/sec",
            "range": "stddev: 0.0011333879266429505",
            "extra": "mean: 2.0045617469880335 msec\nrounds: 664"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 659.3025019064601,
            "unit": "iter/sec",
            "range": "stddev: 0.0008945387167870521",
            "extra": "mean: 1.5167544444444974 msec\nrounds: 900"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 732.6436884371842,
            "unit": "iter/sec",
            "range": "stddev: 0.0011671293504286336",
            "extra": "mean: 1.3649199683042632 msec\nrounds: 1262"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1850.3273623155928,
            "unit": "iter/sec",
            "range": "stddev: 0.00018868738889767634",
            "extra": "mean: 540.4449074073842 usec\nrounds: 2160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 34.87271916356837,
            "unit": "iter/sec",
            "range": "stddev: 0.0018603795588885232",
            "extra": "mean: 28.67571052631602 msec\nrounds: 38"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 36.59501238131272,
            "unit": "iter/sec",
            "range": "stddev: 0.002308045256095197",
            "extra": "mean: 27.326128205128057 msec\nrounds: 39"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 905.3391183267755,
            "unit": "iter/sec",
            "range": "stddev: 0.00020309902184495183",
            "extra": "mean: 1.1045584795321495 msec\nrounds: 1026"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1457.7284878312084,
            "unit": "iter/sec",
            "range": "stddev: 0.00012277213692935243",
            "extra": "mean: 685.9988045426679 usec\nrounds: 1673"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1273.690646015868,
            "unit": "iter/sec",
            "range": "stddev: 0.00047689136252013366",
            "extra": "mean: 785.1200000000171 usec\nrounds: 2625"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1249.6839672049475,
            "unit": "iter/sec",
            "range": "stddev: 0.0003145835093130855",
            "extra": "mean: 800.2023121386502 usec\nrounds: 2422"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729175031462,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 665.4026223815263,
            "unit": "iter/sec",
            "range": "stddev: 0.00034780575444729096",
            "extra": "mean: 1.5028495024875683 msec\nrounds: 804"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 916.9747128592768,
            "unit": "iter/sec",
            "range": "stddev: 0.00020894701948131371",
            "extra": "mean: 1.090542613636353 msec\nrounds: 1056"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1118.9780231677148,
            "unit": "iter/sec",
            "range": "stddev: 0.00024281447226149998",
            "extra": "mean: 893.6726006191793 usec\nrounds: 1292"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2314.871458564854,
            "unit": "iter/sec",
            "range": "stddev: 0.000031493108421652974",
            "extra": "mean: 431.9894291754618 usec\nrounds: 2365"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 644.0881969038542,
            "unit": "iter/sec",
            "range": "stddev: 0.0003089600063245081",
            "extra": "mean: 1.5525824022346963 msec\nrounds: 716"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 818.2837884458668,
            "unit": "iter/sec",
            "range": "stddev: 0.0001567341988991245",
            "extra": "mean: 1.2220699152542902 msec\nrounds: 944"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1203.0898823351615,
            "unit": "iter/sec",
            "range": "stddev: 0.00014132250031752944",
            "extra": "mean: 831.1930926216667 usec\nrounds: 1274"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2201.276214933209,
            "unit": "iter/sec",
            "range": "stddev: 0.00002666216361294091",
            "extra": "mean: 454.28192664605797 usec\nrounds: 2263"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 37.11384627082849,
            "unit": "iter/sec",
            "range": "stddev: 0.0028308388703275214",
            "extra": "mean: 26.944121951219074 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 38.76670198744004,
            "unit": "iter/sec",
            "range": "stddev: 0.0007273645600745237",
            "extra": "mean: 25.79533333333303 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 814.127536241316,
            "unit": "iter/sec",
            "range": "stddev: 0.00022398700700433622",
            "extra": "mean: 1.2283087790112404 msec\nrounds: 991"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1409.652409392806,
            "unit": "iter/sec",
            "range": "stddev: 0.0001224114644389544",
            "extra": "mean: 709.3947368420703 usec\nrounds: 1558"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1455.5876108955072,
            "unit": "iter/sec",
            "range": "stddev: 0.0003976553566504237",
            "extra": "mean: 687.0077709611581 usec\nrounds: 2445"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 919.8430101934567,
            "unit": "iter/sec",
            "range": "stddev: 0.0007128070933195177",
            "extra": "mean: 1.0871420328450232 msec\nrounds: 2253"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729520608802,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 782.0296072288199,
            "unit": "iter/sec",
            "range": "stddev: 0.00003458245685240905",
            "extra": "mean: 1.278723964868254 msec\nrounds: 797"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1058.875454475285,
            "unit": "iter/sec",
            "range": "stddev: 0.000012332636216722239",
            "extra": "mean: 944.3981308411194 usec\nrounds: 1070"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1332.9086898568369,
            "unit": "iter/sec",
            "range": "stddev: 0.000011597638901820124",
            "extra": "mean: 750.2389380531434 usec\nrounds: 1356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2375.392853433392,
            "unit": "iter/sec",
            "range": "stddev: 0.000013996893797479176",
            "extra": "mean: 420.9829959514278 usec\nrounds: 2470"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 711.6361840987623,
            "unit": "iter/sec",
            "range": "stddev: 0.00001996818215879244",
            "extra": "mean: 1.4052124137931945 msec\nrounds: 725"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 907.4957425238977,
            "unit": "iter/sec",
            "range": "stddev: 0.000039218054121111445",
            "extra": "mean: 1.101933544303836 msec\nrounds: 948"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1258.6415108406618,
            "unit": "iter/sec",
            "range": "stddev: 0.000015220139166151611",
            "extra": "mean: 794.5074045206787 usec\nrounds: 1283"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2200.0194005240287,
            "unit": "iter/sec",
            "range": "stddev: 0.0000196575344540042",
            "extra": "mean: 454.5414462080686 usec\nrounds: 2268"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 40.30561486706972,
            "unit": "iter/sec",
            "range": "stddev: 0.000618022250763862",
            "extra": "mean: 24.81043902439049 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 40.59037737453745,
            "unit": "iter/sec",
            "range": "stddev: 0.0004060540005166131",
            "extra": "mean: 24.636380952380726 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 989.2298543529479,
            "unit": "iter/sec",
            "range": "stddev: 0.00005091071940432673",
            "extra": "mean: 1.0108874045800982 msec\nrounds: 1048"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1580.0313135215506,
            "unit": "iter/sec",
            "range": "stddev: 0.00001589576097129039",
            "extra": "mean: 632.8988491824347 usec\nrounds: 1651"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2298.247966934634,
            "unit": "iter/sec",
            "range": "stddev: 0.00003458271045156078",
            "extra": "mean: 435.1140583554106 usec\nrounds: 2639"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 2145.6463681424107,
            "unit": "iter/sec",
            "range": "stddev: 0.00002358259982157635",
            "extra": "mean: 466.0600250104346 usec\nrounds: 2399"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729521470957,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 653.4679833567088,
            "unit": "iter/sec",
            "range": "stddev: 0.00047293648816883654",
            "extra": "mean: 1.5302968553459024 msec\nrounds: 795"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 874.4794303292626,
            "unit": "iter/sec",
            "range": "stddev: 0.000372990666890347",
            "extra": "mean: 1.1435374753451615 msec\nrounds: 1014"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1116.2485766536538,
            "unit": "iter/sec",
            "range": "stddev: 0.00023718902600536576",
            "extra": "mean: 895.8578052550359 usec\nrounds: 1294"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1710.4738012429002,
            "unit": "iter/sec",
            "range": "stddev: 0.0003988141891110585",
            "extra": "mean: 584.6333333333484 usec\nrounds: 2370"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 640.447402409252,
            "unit": "iter/sec",
            "range": "stddev: 0.00024105846679363288",
            "extra": "mean: 1.56140847201218 msec\nrounds: 661"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 918.5346123629196,
            "unit": "iter/sec",
            "range": "stddev: 0.000026775243889948066",
            "extra": "mean: 1.0886906019006857 msec\nrounds: 947"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1222.5139560686002,
            "unit": "iter/sec",
            "range": "stddev: 0.000042140164871962416",
            "extra": "mean: 817.9865718799908 usec\nrounds: 1266"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2129.2000087526917,
            "unit": "iter/sec",
            "range": "stddev: 0.00004945678196595614",
            "extra": "mean: 469.65996425380945 usec\nrounds: 2238"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 39.45450205459355,
            "unit": "iter/sec",
            "range": "stddev: 0.0005251939592870323",
            "extra": "mean: 25.345649999999775 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 39.70185795242265,
            "unit": "iter/sec",
            "range": "stddev: 0.00123084093917014",
            "extra": "mean: 25.187738095238917 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1017.4681485076924,
            "unit": "iter/sec",
            "range": "stddev: 0.00006602737963651188",
            "extra": "mean: 982.8317490495277 usec\nrounds: 1052"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1582.849109565107,
            "unit": "iter/sec",
            "range": "stddev: 0.00006412600011786927",
            "extra": "mean: 631.7721594288627 usec\nrounds: 1681"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2175.8485768112505,
            "unit": "iter/sec",
            "range": "stddev: 0.0001098091989146377",
            "extra": "mean: 459.59080547117856 usec\nrounds: 2632"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1514.4795538914175,
            "unit": "iter/sec",
            "range": "stddev: 0.00018652362134375291",
            "extra": "mean: 660.2928361961209 usec\nrounds: 2387"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729606239699,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 792.1252503716753,
            "unit": "iter/sec",
            "range": "stddev: 0.000027039306990720056",
            "extra": "mean: 1.2624266169154275 msec\nrounds: 804"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1057.4899818029244,
            "unit": "iter/sec",
            "range": "stddev: 0.0000227300929942054",
            "extra": "mean: 945.6354359925857 usec\nrounds: 1078"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1329.6038765339733,
            "unit": "iter/sec",
            "range": "stddev: 0.000010327314910976798",
            "extra": "mean: 752.1037037037012 usec\nrounds: 1350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2414.8315099462984,
            "unit": "iter/sec",
            "range": "stddev: 0.000006701207540171394",
            "extra": "mean: 414.10756646215793 usec\nrounds: 2445"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 677.3734773149428,
            "unit": "iter/sec",
            "range": "stddev: 0.00018000498224925363",
            "extra": "mean: 1.4762904564316932 msec\nrounds: 723"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 926.2725634207512,
            "unit": "iter/sec",
            "range": "stddev: 0.00004951524326170404",
            "extra": "mean: 1.0795958333333022 msec\nrounds: 960"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1257.9395756249005,
            "unit": "iter/sec",
            "range": "stddev: 0.000023574074922447066",
            "extra": "mean: 794.9507427677796 usec\nrounds: 1279"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2166.2822184330957,
            "unit": "iter/sec",
            "range": "stddev: 0.0000545607157009146",
            "extra": "mean: 461.62037037044735 usec\nrounds: 2268"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 37.50992640735454,
            "unit": "iter/sec",
            "range": "stddev: 0.002221233203403131",
            "extra": "mean: 26.659609756097275 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 37.20442413752209,
            "unit": "iter/sec",
            "range": "stddev: 0.002966660389271875",
            "extra": "mean: 26.878523809523543 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 932.2568897523637,
            "unit": "iter/sec",
            "range": "stddev: 0.00013232607546376164",
            "extra": "mean: 1.0726657115568554 msec\nrounds: 1047"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1633.0665665312151,
            "unit": "iter/sec",
            "range": "stddev: 0.000038995746735657096",
            "extra": "mean: 612.3449101796829 usec\nrounds: 1670"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2328.7087723496375,
            "unit": "iter/sec",
            "range": "stddev: 0.00004134681394802209",
            "extra": "mean: 429.42252456541087 usec\nrounds: 2646"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1920.5651083526373,
            "unit": "iter/sec",
            "range": "stddev: 0.00010271058280755165",
            "extra": "mean: 520.680082987527 usec\nrounds: 2410"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729607530366,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 721.8589551185238,
            "unit": "iter/sec",
            "range": "stddev: 0.0001379200306157967",
            "extra": "mean: 1.3853121761657823 msec\nrounds: 772"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 856.0977507977262,
            "unit": "iter/sec",
            "range": "stddev: 0.00042826645299494153",
            "extra": "mean: 1.1680909090909106 msec\nrounds: 1056"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1153.4125101160746,
            "unit": "iter/sec",
            "range": "stddev: 0.00018187792564998935",
            "extra": "mean: 866.9925037481726 usec\nrounds: 1334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1580.7199046359644,
            "unit": "iter/sec",
            "range": "stddev: 0.0004357770133311494",
            "extra": "mean: 632.6231466227391 usec\nrounds: 2428"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 595.916764550821,
            "unit": "iter/sec",
            "range": "stddev: 0.0003432396495385785",
            "extra": "mean: 1.6780867052024644 msec\nrounds: 692"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 758.0441168745831,
            "unit": "iter/sec",
            "range": "stddev: 0.0003820384703689433",
            "extra": "mean: 1.3191844349679824 msec\nrounds: 938"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1068.6925782208104,
            "unit": "iter/sec",
            "range": "stddev: 0.00020893408026748372",
            "extra": "mean: 935.7227891156766 usec\nrounds: 1176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1795.439942834135,
            "unit": "iter/sec",
            "range": "stddev: 0.0001703262919400563",
            "extra": "mean: 556.9665551839521 usec\nrounds: 2093"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 36.10238636773828,
            "unit": "iter/sec",
            "range": "stddev: 0.0013128063028816888",
            "extra": "mean: 27.699000000000478 msec\nrounds: 37"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 37.247611616288,
            "unit": "iter/sec",
            "range": "stddev: 0.0015912358402596783",
            "extra": "mean: 26.847358974359317 msec\nrounds: 39"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 777.7705394183953,
            "unit": "iter/sec",
            "range": "stddev: 0.00047735671587123557",
            "extra": "mean: 1.2857262512768668 msec\nrounds: 979"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1241.2141583059692,
            "unit": "iter/sec",
            "range": "stddev: 0.00033041889959957855",
            "extra": "mean: 805.6627402355911 usec\nrounds: 1613"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1136.3753341654729,
            "unit": "iter/sec",
            "range": "stddev: 0.0005878857165786037",
            "extra": "mean: 879.9909413155085 usec\nrounds: 2539"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1216.4121172590533,
            "unit": "iter/sec",
            "range": "stddev: 0.0004833460497654663",
            "extra": "mean: 822.0898047721724 usec\nrounds: 2305"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729694849590,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 683.0895964692563,
            "unit": "iter/sec",
            "range": "stddev: 0.0005510736956937312",
            "extra": "mean: 1.463936802973996 msec\nrounds: 807"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1015.4902409026316,
            "unit": "iter/sec",
            "range": "stddev: 0.00009459401474907853",
            "extra": "mean: 984.7460465116209 usec\nrounds: 1075"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1275.7640503020948,
            "unit": "iter/sec",
            "range": "stddev: 0.0000881342568065836",
            "extra": "mean: 783.844002943338 usec\nrounds: 1359"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2418.382047713277,
            "unit": "iter/sec",
            "range": "stddev: 0.000012950145268042224",
            "extra": "mean: 413.4995961227709 usec\nrounds: 2476"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 700.9526013344275,
            "unit": "iter/sec",
            "range": "stddev: 0.0000707322918907232",
            "extra": "mean: 1.4266299862448126 msec\nrounds: 727"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 933.2588286577502,
            "unit": "iter/sec",
            "range": "stddev: 0.000024758943685693624",
            "extra": "mean: 1.0715141065831004 msec\nrounds: 957"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1190.86283425357,
            "unit": "iter/sec",
            "range": "stddev: 0.0001541312989830889",
            "extra": "mean: 839.7272727272555 usec\nrounds: 1276"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2128.1308989839254,
            "unit": "iter/sec",
            "range": "stddev: 0.000030025250035171768",
            "extra": "mean: 469.89590747329 usec\nrounds: 2248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 39.715559103048356,
            "unit": "iter/sec",
            "range": "stddev: 0.003165333733994337",
            "extra": "mean: 25.17904878048778 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 40.0003428600809,
            "unit": "iter/sec",
            "range": "stddev: 0.0009051791504587479",
            "extra": "mean: 24.99978571428619 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 967.0101828680642,
            "unit": "iter/sec",
            "range": "stddev: 0.00012372477274786268",
            "extra": "mean: 1.034115273775185 msec\nrounds: 1041"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1614.0698087611718,
            "unit": "iter/sec",
            "range": "stddev: 0.00006390517745539453",
            "extra": "mean: 619.5518896221213 usec\nrounds: 1667"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2154.937837394131,
            "unit": "iter/sec",
            "range": "stddev: 0.0001268253321253452",
            "extra": "mean: 464.0505088579515 usec\nrounds: 2653"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1520.6205843941482,
            "unit": "iter/sec",
            "range": "stddev: 0.00018482446430912906",
            "extra": "mean: 657.6262417218454 usec\nrounds: 2416"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729695603807,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 658.7306867472731,
            "unit": "iter/sec",
            "range": "stddev: 0.00029379440472173757",
            "extra": "mean: 1.5180710723192061 msec\nrounds: 802"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1046.5392383813041,
            "unit": "iter/sec",
            "range": "stddev: 0.000032060701244234705",
            "extra": "mean: 955.5303454715305 usec\nrounds: 1071"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1318.6429330344395,
            "unit": "iter/sec",
            "range": "stddev: 0.000026565884111702763",
            "extra": "mean: 758.3554083885442 usec\nrounds: 1359"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2394.054411204422,
            "unit": "iter/sec",
            "range": "stddev: 0.000014660579717507084",
            "extra": "mean: 417.7014504431882 usec\nrounds: 2482"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 707.0027260393224,
            "unit": "iter/sec",
            "range": "stddev: 0.000036873208106218704",
            "extra": "mean: 1.4144217032967727 msec\nrounds: 728"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 869.3328648086798,
            "unit": "iter/sec",
            "range": "stddev: 0.00009412124911351596",
            "extra": "mean: 1.1503073684210445 msec\nrounds: 950"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1201.499861401424,
            "unit": "iter/sec",
            "range": "stddev: 0.00009886450413592105",
            "extra": "mean: 832.293063133278 usec\nrounds: 1283"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2212.0134274457373,
            "unit": "iter/sec",
            "range": "stddev: 0.000020794237954299373",
            "extra": "mean: 452.0768217735111 usec\nrounds: 2278"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 39.759773388686625,
            "unit": "iter/sec",
            "range": "stddev: 0.0012298098217044381",
            "extra": "mean: 25.15104878048785 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 41.1912105802549,
            "unit": "iter/sec",
            "range": "stddev: 0.00041732571873405493",
            "extra": "mean: 24.27702380952485 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1016.5162164746392,
            "unit": "iter/sec",
            "range": "stddev: 0.00008053502360034625",
            "extra": "mean: 983.7521367520147 usec\nrounds: 1053"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1526.834248402604,
            "unit": "iter/sec",
            "range": "stddev: 0.0001127925515579719",
            "extra": "mean: 654.949940405263 usec\nrounds: 1678"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1927.4250620735602,
            "unit": "iter/sec",
            "range": "stddev: 0.00015062453381109052",
            "extra": "mean: 518.8269155970096 usec\nrounds: 2571"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1391.8275529802236,
            "unit": "iter/sec",
            "range": "stddev: 0.00026612843212562865",
            "extra": "mean: 718.4798130046855 usec\nrounds: 2353"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729696773473,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 407.5851713929735,
            "unit": "iter/sec",
            "range": "stddev: 0.0010481428146491497",
            "extra": "mean: 2.4534749303620993 msec\nrounds: 718"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 641.9118132017217,
            "unit": "iter/sec",
            "range": "stddev: 0.0007101101029088589",
            "extra": "mean: 1.5578463886062628 msec\nrounds: 983"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 712.666835994327,
            "unit": "iter/sec",
            "range": "stddev: 0.0007072673989501338",
            "extra": "mean: 1.4031802091713446 msec\nrounds: 1243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1557.1311698936054,
            "unit": "iter/sec",
            "range": "stddev: 0.0003525279860210541",
            "extra": "mean: 642.2066549912602 usec\nrounds: 2284"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 426.93783058483865,
            "unit": "iter/sec",
            "range": "stddev: 0.0010179236118257223",
            "extra": "mean: 2.3422613981762987 msec\nrounds: 658"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 474.0843772998856,
            "unit": "iter/sec",
            "range": "stddev: 0.0011249985875443",
            "extra": "mean: 2.109329157175417 msec\nrounds: 878"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 747.4744177696688,
            "unit": "iter/sec",
            "range": "stddev: 0.000697848179326328",
            "extra": "mean: 1.3378384279475715 msec\nrounds: 1145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1176.0535693254415,
            "unit": "iter/sec",
            "range": "stddev: 0.000636644208808087",
            "extra": "mean: 850.3014029995062 usec\nrounds: 2067"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.456173210530004,
            "unit": "iter/sec",
            "range": "stddev: 0.013322022998808788",
            "extra": "mean: 57.28632432432411 msec\nrounds: 37"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.63741108376359,
            "unit": "iter/sec",
            "range": "stddev: 0.008885182068313973",
            "extra": "mean: 46.216250000000514 msec\nrounds: 32"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 455.3060555705463,
            "unit": "iter/sec",
            "range": "stddev: 0.001378885962645089",
            "extra": "mean: 2.1963248407642966 msec\nrounds: 942"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 810.4825183713033,
            "unit": "iter/sec",
            "range": "stddev: 0.0007707024793076795",
            "extra": "mean: 1.23383290488429 msec\nrounds: 1556"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 995.4883222823378,
            "unit": "iter/sec",
            "range": "stddev: 0.0007744493373089932",
            "extra": "mean: 1.0045321252059676 msec\nrounds: 2428"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 696.2512483173806,
            "unit": "iter/sec",
            "range": "stddev: 0.001031426971577515",
            "extra": "mean: 1.4362631340578338 msec\nrounds: 2208"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729698575595,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 777.4894518946837,
            "unit": "iter/sec",
            "range": "stddev: 0.00003142474281834319",
            "extra": "mean: 1.28619108280257 msec\nrounds: 785"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1036.451776954063,
            "unit": "iter/sec",
            "range": "stddev: 0.000023184138883030585",
            "extra": "mean: 964.8302238805669 usec\nrounds: 1072"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1280.271916159177,
            "unit": "iter/sec",
            "range": "stddev: 0.00007022405058899153",
            "extra": "mean: 781.0840707964646 usec\nrounds: 1356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2387.9413770974493,
            "unit": "iter/sec",
            "range": "stddev: 0.000016033099534890445",
            "extra": "mean: 418.77074939565864 usec\nrounds: 2482"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 695.9724917833906,
            "unit": "iter/sec",
            "range": "stddev: 0.0000695324047816901",
            "extra": "mean: 1.436838397790056 msec\nrounds: 724"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 926.0236872210103,
            "unit": "iter/sec",
            "range": "stddev: 0.00006427166305950557",
            "extra": "mean: 1.0798859832635515 msec\nrounds: 956"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1144.2424329041175,
            "unit": "iter/sec",
            "range": "stddev: 0.0002920337462988393",
            "extra": "mean: 873.9406713505401 usec\nrounds: 1281"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1897.4789915964723,
            "unit": "iter/sec",
            "range": "stddev: 0.000199349126429616",
            "extra": "mean: 527.0150575731197 usec\nrounds: 2258"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 34.55848937931209,
            "unit": "iter/sec",
            "range": "stddev: 0.005275283883235341",
            "extra": "mean: 28.936450000000136 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 38.10486831515095,
            "unit": "iter/sec",
            "range": "stddev: 0.0014121736748021476",
            "extra": "mean: 26.243365853658865 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 933.0039264285417,
            "unit": "iter/sec",
            "range": "stddev: 0.00018058761701651458",
            "extra": "mean: 1.0718068506184248 msec\nrounds: 1051"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1549.1308135674471,
            "unit": "iter/sec",
            "range": "stddev: 0.000046139821775527455",
            "extra": "mean: 645.5232774675302 usec\nrounds: 1611"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1386.4197884535024,
            "unit": "iter/sec",
            "range": "stddev: 0.00033018635099256146",
            "extra": "mean: 721.2822612085342 usec\nrounds: 2565"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1344.6097105561203,
            "unit": "iter/sec",
            "range": "stddev: 0.00018782121983986513",
            "extra": "mean: 743.7102321583025 usec\nrounds: 2326"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729777176463,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 767.1989249589018,
            "unit": "iter/sec",
            "range": "stddev: 0.00007301258455276485",
            "extra": "mean: 1.303442910915926 msec\nrounds: 797"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 995.843031992044,
            "unit": "iter/sec",
            "range": "stddev: 0.0000995698138004064",
            "extra": "mean: 1.0041743205248328 msec\nrounds: 1067"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1282.9939811094534,
            "unit": "iter/sec",
            "range": "stddev: 0.00006776925581403133",
            "extra": "mean: 779.4268833087293 usec\nrounds: 1354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2412.54523522319,
            "unit": "iter/sec",
            "range": "stddev: 0.000010583509870415105",
            "extra": "mean: 414.4999999999949 usec\nrounds: 2482"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 671.9457686247223,
            "unit": "iter/sec",
            "range": "stddev: 0.00013455468739606943",
            "extra": "mean: 1.4882153392329702 msec\nrounds: 678"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 845.367209718733,
            "unit": "iter/sec",
            "range": "stddev: 0.00027368513439345477",
            "extra": "mean: 1.1829178947367924 msec\nrounds: 950"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1213.6817788809194,
            "unit": "iter/sec",
            "range": "stddev: 0.00008114075162386647",
            "extra": "mean: 823.9392049883573 usec\nrounds: 1283"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2093.879893435973,
            "unit": "iter/sec",
            "range": "stddev: 0.00007921285862318522",
            "extra": "mean: 477.58231173376436 usec\nrounds: 2284"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 38.771638829890755,
            "unit": "iter/sec",
            "range": "stddev: 0.001543899121562695",
            "extra": "mean: 25.79204878048787 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 39.61276110606574,
            "unit": "iter/sec",
            "range": "stddev: 0.0016134084088984973",
            "extra": "mean: 25.244390243902338 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 948.6364260031911,
            "unit": "iter/sec",
            "range": "stddev: 0.000211412188126902",
            "extra": "mean: 1.0541446360153117 msec\nrounds: 1044"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1509.074124432566,
            "unit": "iter/sec",
            "range": "stddev: 0.0000861571285549781",
            "extra": "mean: 662.6579727327938 usec\nrounds: 1687"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1917.477967894652,
            "unit": "iter/sec",
            "range": "stddev: 0.00023027430395928115",
            "extra": "mean: 521.5183781735848 usec\nrounds: 2639"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1367.6496013940407,
            "unit": "iter/sec",
            "range": "stddev: 0.00038810748728774304",
            "extra": "mean: 731.1814363713507 usec\nrounds: 2381"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1730123974773,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 419.0242769675761,
            "unit": "iter/sec",
            "range": "stddev: 0.0015167721095140758",
            "extra": "mean: 2.386496570644711 msec\nrounds: 729"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 816.4771204415631,
            "unit": "iter/sec",
            "range": "stddev: 0.00038614444981340695",
            "extra": "mean: 1.2247740628165855 msec\nrounds: 987"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 957.0771848541849,
            "unit": "iter/sec",
            "range": "stddev: 0.00046031710964899883",
            "extra": "mean: 1.0448478093774167 msec\nrounds: 1301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1837.7439187382508,
            "unit": "iter/sec",
            "range": "stddev: 0.00027687851966204515",
            "extra": "mean: 544.1454545454706 usec\nrounds: 2310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 479.8667767122367,
            "unit": "iter/sec",
            "range": "stddev: 0.0006624203413680931",
            "extra": "mean: 2.0839117199390387 msec\nrounds: 657"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 677.395453234884,
            "unit": "iter/sec",
            "range": "stddev: 0.000593412323959963",
            "extra": "mean: 1.476242562929123 msec\nrounds: 874"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 795.9840531290099,
            "unit": "iter/sec",
            "range": "stddev: 0.0005922540146735756",
            "extra": "mean: 1.2563065755764884 msec\nrounds: 1171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1494.603838289421,
            "unit": "iter/sec",
            "range": "stddev: 0.00039481621243698736",
            "extra": "mean: 669.0736196318774 usec\nrounds: 2119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.988583950522393,
            "unit": "iter/sec",
            "range": "stddev: 0.005537032145266408",
            "extra": "mean: 35.728852941176946 msec\nrounds: 34"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 30.842412017613963,
            "unit": "iter/sec",
            "range": "stddev: 0.004356086180286455",
            "extra": "mean: 32.42288571428539 msec\nrounds: 35"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 576.3810921096897,
            "unit": "iter/sec",
            "range": "stddev: 0.0009461526208161647",
            "extra": "mean: 1.7349632277834894 msec\nrounds: 979"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1228.8658338398004,
            "unit": "iter/sec",
            "range": "stddev: 0.0003655284808420545",
            "extra": "mean: 813.7584856398277 usec\nrounds: 1532"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1206.1375381574323,
            "unit": "iter/sec",
            "range": "stddev: 0.00043642915987529216",
            "extra": "mean: 829.0928425357357 usec\nrounds: 2445"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1187.601711028037,
            "unit": "iter/sec",
            "range": "stddev: 0.0005207493039260007",
            "extra": "mean: 842.0331418471591 usec\nrounds: 2263"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1730126655807,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 624.5149753835593,
            "unit": "iter/sec",
            "range": "stddev: 0.00043136633411442756",
            "extra": "mean: 1.6012426273458509 msec\nrounds: 746"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 859.8415312057955,
            "unit": "iter/sec",
            "range": "stddev: 0.00014665045288141693",
            "extra": "mean: 1.1630050000000045 msec\nrounds: 1000"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1120.7792839625583,
            "unit": "iter/sec",
            "range": "stddev: 0.0001449912154180914",
            "extra": "mean: 892.2363344051662 usec\nrounds: 1244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1979.8866510666103,
            "unit": "iter/sec",
            "range": "stddev: 0.00018622530624267481",
            "extra": "mean: 505.0794192997247 usec\nrounds: 2342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 567.521875194708,
            "unit": "iter/sec",
            "range": "stddev: 0.00035154197669384085",
            "extra": "mean: 1.762046616541284 msec\nrounds: 665"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 821.3567659030614,
            "unit": "iter/sec",
            "range": "stddev: 0.00017835253925360957",
            "extra": "mean: 1.2174977324263285 msec\nrounds: 882"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 974.2846171921334,
            "unit": "iter/sec",
            "range": "stddev: 0.00047995398763105905",
            "extra": "mean: 1.0263941176470361 msec\nrounds: 1190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1847.4588579471322,
            "unit": "iter/sec",
            "range": "stddev: 0.00016241049765933628",
            "extra": "mean: 541.2840430509963 usec\nrounds: 2137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 31.894187155089647,
            "unit": "iter/sec",
            "range": "stddev: 0.004264257777373182",
            "extra": "mean: 31.353675675676243 msec\nrounds: 37"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 31.699178525111762,
            "unit": "iter/sec",
            "range": "stddev: 0.001987829762102285",
            "extra": "mean: 31.546558823529463 msec\nrounds: 34"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 776.993190936153,
            "unit": "iter/sec",
            "range": "stddev: 0.0005313949383977974",
            "extra": "mean: 1.287012565444955 msec\nrounds: 955"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 902.0710290494138,
            "unit": "iter/sec",
            "range": "stddev: 0.0008088314631994597",
            "extra": "mean: 1.1085601552394182 msec\nrounds: 1546"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1139.0811627687112,
            "unit": "iter/sec",
            "range": "stddev: 0.0007865098672429718",
            "extra": "mean: 877.9005681819431 usec\nrounds: 2464"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1066.8640934739863,
            "unit": "iter/sec",
            "range": "stddev: 0.0005959942810647645",
            "extra": "mean: 937.326512455528 usec\nrounds: 2248"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1730128919916,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 667.537116620111,
            "unit": "iter/sec",
            "range": "stddev: 0.0002972467663090463",
            "extra": "mean: 1.4980440414507925 msec\nrounds: 772"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 914.1825052486668,
            "unit": "iter/sec",
            "range": "stddev: 0.0003698090599428709",
            "extra": "mean: 1.0938734817813978 msec\nrounds: 988"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 823.7156506587021,
            "unit": "iter/sec",
            "range": "stddev: 0.0007731478260837472",
            "extra": "mean: 1.2140111690245636 msec\nrounds: 1343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1667.536930047774,
            "unit": "iter/sec",
            "range": "stddev: 0.0002535232932558471",
            "extra": "mean: 599.6868686868306 usec\nrounds: 2376"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 578.908016408378,
            "unit": "iter/sec",
            "range": "stddev: 0.00026232388525852714",
            "extra": "mean: 1.7273901408450558 msec\nrounds: 710"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 785.7093734955944,
            "unit": "iter/sec",
            "range": "stddev: 0.00014284750071943308",
            "extra": "mean: 1.2727352297593622 msec\nrounds: 914"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1136.5601084692178,
            "unit": "iter/sec",
            "range": "stddev: 0.00011111508347816058",
            "extra": "mean: 879.8478783025874 usec\nrounds: 1249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2011.2353001834042,
            "unit": "iter/sec",
            "range": "stddev: 0.00010477030228967551",
            "extra": "mean: 497.2068658047172 usec\nrounds: 2243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.901716143219033,
            "unit": "iter/sec",
            "range": "stddev: 0.014169328903999946",
            "extra": "mean: 41.838000000000086 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 36.98494902241202,
            "unit": "iter/sec",
            "range": "stddev: 0.002157631443664659",
            "extra": "mean: 27.03802564102558 msec\nrounds: 39"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 901.3319683531201,
            "unit": "iter/sec",
            "range": "stddev: 0.0003024322383440896",
            "extra": "mean: 1.109469135802608 msec\nrounds: 1053"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1476.4823116890002,
            "unit": "iter/sec",
            "range": "stddev: 0.00012589313189774405",
            "extra": "mean: 677.2854588796696 usec\nrounds: 1678"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2158.1529237701334,
            "unit": "iter/sec",
            "range": "stddev: 0.00008561434942122118",
            "extra": "mean: 463.3591943304342 usec\nrounds: 2681"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1467.4505127331838,
            "unit": "iter/sec",
            "range": "stddev: 0.00019093824772865718",
            "extra": "mean: 681.4539852096689 usec\nrounds: 2434"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1730296960154,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 779.5902496919016,
            "unit": "iter/sec",
            "range": "stddev: 0.00009808012743603465",
            "extra": "mean: 1.2827251243781017 msec\nrounds: 804"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1057.8635670021188,
            "unit": "iter/sec",
            "range": "stddev: 0.00001957792841414211",
            "extra": "mean: 945.3014842300521 usec\nrounds: 1078"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1322.397870120264,
            "unit": "iter/sec",
            "range": "stddev: 0.00002310873757242843",
            "extra": "mean: 756.202064896744 usec\nrounds: 1356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2297.1146226633955,
            "unit": "iter/sec",
            "range": "stddev: 0.00006595596325408411",
            "extra": "mean: 435.32873376625304 usec\nrounds: 2464"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 704.1659270985025,
            "unit": "iter/sec",
            "range": "stddev: 0.00007976771946157185",
            "extra": "mean: 1.4201198347106543 msec\nrounds: 726"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 935.5717388326088,
            "unit": "iter/sec",
            "range": "stddev: 0.000020252122238982376",
            "extra": "mean: 1.0688651211801072 msec\nrounds: 949"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1244.1818919936686,
            "unit": "iter/sec",
            "range": "stddev: 0.00005881351859794931",
            "extra": "mean: 803.7410015649776 usec\nrounds: 1278"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2185.386173609613,
            "unit": "iter/sec",
            "range": "stddev: 0.00004004603119046233",
            "extra": "mean: 457.5850310008575 usec\nrounds: 2258"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 39.594360604190626,
            "unit": "iter/sec",
            "range": "stddev: 0.001055994890970951",
            "extra": "mean: 25.256121951219512 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 38.801763682116345,
            "unit": "iter/sec",
            "range": "stddev: 0.002850856647463785",
            "extra": "mean: 25.772024390244354 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1031.756960367995,
            "unit": "iter/sec",
            "range": "stddev: 0.00006120686619838721",
            "extra": "mean: 969.2205029015087 usec\nrounds: 1034"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1384.573037471446,
            "unit": "iter/sec",
            "range": "stddev: 0.0004874991378652922",
            "extra": "mean: 722.2443113771981 usec\nrounds: 1670"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1835.6299819104188,
            "unit": "iter/sec",
            "range": "stddev: 0.00037145543702966053",
            "extra": "mean: 544.7720999627917 usec\nrounds: 2681"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1772.3062152921468,
            "unit": "iter/sec",
            "range": "stddev: 0.00014892278691923215",
            "extra": "mean: 564.2365813377007 usec\nrounds: 2422"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1730731755854,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 674.3175061643973,
            "unit": "iter/sec",
            "range": "stddev: 0.00021898278954897896",
            "extra": "mean: 1.4829809264305263 msec\nrounds: 734"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 863.9871230412313,
            "unit": "iter/sec",
            "range": "stddev: 0.00031082892822825996",
            "extra": "mean: 1.157424657534251 msec\nrounds: 1022"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1175.4758795500945,
            "unit": "iter/sec",
            "range": "stddev: 0.00014193916008033286",
            "extra": "mean: 850.7192851823921 usec\nrounds: 1343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1922.5714517150323,
            "unit": "iter/sec",
            "range": "stddev: 0.00024159157263351473",
            "extra": "mean: 520.1367153912271 usec\nrounds: 2326"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 541.4958083301639,
            "unit": "iter/sec",
            "range": "stddev: 0.0006938031584329061",
            "extra": "mean: 1.8467363636364003 msec\nrounds: 660"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 867.2646035282845,
            "unit": "iter/sec",
            "range": "stddev: 0.00005174886119797858",
            "extra": "mean: 1.153050632911466 msec\nrounds: 948"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 949.567826880387,
            "unit": "iter/sec",
            "range": "stddev: 0.000373735942237099",
            "extra": "mean: 1.0531106590724517 msec\nrounds: 1229"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1462.257171973883,
            "unit": "iter/sec",
            "range": "stddev: 0.0003945459268984629",
            "extra": "mean: 683.8742316784894 usec\nrounds: 2115"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 21.097844527800746,
            "unit": "iter/sec",
            "range": "stddev: 0.009561217586760843",
            "extra": "mean: 47.39820689655261 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.64784558097118,
            "unit": "iter/sec",
            "range": "stddev: 0.005597937808131418",
            "extra": "mean: 38.98962962962966 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 713.5463923955615,
            "unit": "iter/sec",
            "range": "stddev: 0.0005958047200898836",
            "extra": "mean: 1.401450572320517 msec\nrounds: 961"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1286.0142210213146,
            "unit": "iter/sec",
            "range": "stddev: 0.0003234504109988089",
            "extra": "mean: 777.5963777490963 usec\nrounds: 1546"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1012.4168944255376,
            "unit": "iter/sec",
            "range": "stddev: 0.0005999741731012324",
            "extra": "mean: 987.7353938936556 usec\nrounds: 2653"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1301.2802190362513,
            "unit": "iter/sec",
            "range": "stddev: 0.0004080291079534908",
            "extra": "mean: 768.4739884393354 usec\nrounds: 2422"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1730735114967,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 784.1471103053132,
            "unit": "iter/sec",
            "range": "stddev: 0.000036367159158947536",
            "extra": "mean: 1.2752709113608072 msec\nrounds: 801"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1043.8127437111923,
            "unit": "iter/sec",
            "range": "stddev: 0.00003495565758788715",
            "extra": "mean: 958.0262417994443 usec\nrounds: 1067"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1307.8937465175777,
            "unit": "iter/sec",
            "range": "stddev: 0.000019463752361796785",
            "extra": "mean: 764.5881040892035 usec\nrounds: 1345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2413.9648156359713,
            "unit": "iter/sec",
            "range": "stddev: 0.000008118157757178823",
            "extra": "mean: 414.2562449637631 usec\nrounds: 2482"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 711.1308157013659,
            "unit": "iter/sec",
            "range": "stddev: 0.000016138930306578735",
            "extra": "mean: 1.4062110344827785 msec\nrounds: 725"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 924.3874357026751,
            "unit": "iter/sec",
            "range": "stddev: 0.00005767969650241099",
            "extra": "mean: 1.0817974816369587 msec\nrounds: 953"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1219.9169725277723,
            "unit": "iter/sec",
            "range": "stddev: 0.00004688142805557782",
            "extra": "mean: 819.727917981102 usec\nrounds: 1268"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2132.886496925716,
            "unit": "iter/sec",
            "range": "stddev: 0.000053309770719664204",
            "extra": "mean: 468.84820239678595 usec\nrounds: 2253"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 40.516236140482526,
            "unit": "iter/sec",
            "range": "stddev: 0.0010725182771770347",
            "extra": "mean: 24.681463414634212 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 42.00962020302698,
            "unit": "iter/sec",
            "range": "stddev: 0.00014069867350042102",
            "extra": "mean: 23.804071428571152 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1021.121766814486,
            "unit": "iter/sec",
            "range": "stddev: 0.00009370562073082655",
            "extra": "mean: 979.3151340996501 usec\nrounds: 1044"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1553.5145364576772,
            "unit": "iter/sec",
            "range": "stddev: 0.00009445281271998479",
            "extra": "mean: 643.7017334129356 usec\nrounds: 1673"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1900.4156671940848,
            "unit": "iter/sec",
            "range": "stddev: 0.00021271318195088148",
            "extra": "mean: 526.2006713912617 usec\nrounds: 2681"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1797.9871134384907,
            "unit": "iter/sec",
            "range": "stddev: 0.0002049973644821334",
            "extra": "mean: 556.177512355797 usec\nrounds: 2428"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1730735980806,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 709.3470456006214,
            "unit": "iter/sec",
            "range": "stddev: 0.00010892602241823112",
            "extra": "mean: 1.4097471839799878 msec\nrounds: 799"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 960.7135801600442,
            "unit": "iter/sec",
            "range": "stddev: 0.000056328218775624346",
            "extra": "mean: 1.0408929577464816 msec\nrounds: 1065"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1292.4182273030842,
            "unit": "iter/sec",
            "range": "stddev: 0.00008200388113473804",
            "extra": "mean: 773.7433431952757 usec\nrounds: 1352"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2056.276523670487,
            "unit": "iter/sec",
            "range": "stddev: 0.0001518614111166676",
            "extra": "mean: 486.31591543679326 usec\nrounds: 2507"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 664.8122782705792,
            "unit": "iter/sec",
            "range": "stddev: 0.00020479765841446357",
            "extra": "mean: 1.5041840120663343 msec\nrounds: 663"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 868.5459788247068,
            "unit": "iter/sec",
            "range": "stddev: 0.00010014340303033219",
            "extra": "mean: 1.1513495248152241 msec\nrounds: 947"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1151.2136083116586,
            "unit": "iter/sec",
            "range": "stddev: 0.0001125209090200423",
            "extra": "mean: 868.6485225505415 usec\nrounds: 1286"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2114.8675747538346,
            "unit": "iter/sec",
            "range": "stddev: 0.00006938792487697128",
            "extra": "mean: 472.8428446005172 usec\nrounds: 2278"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 39.71859857284242,
            "unit": "iter/sec",
            "range": "stddev: 0.001096592180236404",
            "extra": "mean: 25.177121951219842 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 37.53711154545525,
            "unit": "iter/sec",
            "range": "stddev: 0.0023764133993303873",
            "extra": "mean: 26.640302325581402 msec\nrounds: 43"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 820.5362022188689,
            "unit": "iter/sec",
            "range": "stddev: 0.0005194792061995829",
            "extra": "mean: 1.2187152709360425 msec\nrounds: 1015"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1465.703800852844,
            "unit": "iter/sec",
            "range": "stddev: 0.0002188599727376333",
            "extra": "mean: 682.2660891089547 usec\nrounds: 1616"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1860.270832119089,
            "unit": "iter/sec",
            "range": "stddev: 0.00022258502132211378",
            "extra": "mean: 537.5561357702258 usec\nrounds: 2681"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1775.2478071324833,
            "unit": "iter/sec",
            "range": "stddev: 0.00013712867336934366",
            "extra": "mean: 563.3016393442427 usec\nrounds: 2440"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1730736891877,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 766.7037945722872,
            "unit": "iter/sec",
            "range": "stddev: 0.00012015406754976727",
            "extra": "mean: 1.3042846625767115 msec\nrounds: 815"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 989.191428941878,
            "unit": "iter/sec",
            "range": "stddev: 0.000050491203101747776",
            "extra": "mean: 1.010926672777264 msec\nrounds: 1091"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1301.9062801065597,
            "unit": "iter/sec",
            "range": "stddev: 0.000038360606814468254",
            "extra": "mean: 768.1044444444581 usec\nrounds: 1350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2278.4002915185824,
            "unit": "iter/sec",
            "range": "stddev: 0.000036355567170580446",
            "extra": "mean: 438.90443822471923 usec\nrounds: 2501"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 657.9585154014286,
            "unit": "iter/sec",
            "range": "stddev: 0.00009743417343038354",
            "extra": "mean: 1.519852660300152 msec\nrounds: 733"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 915.4282903427147,
            "unit": "iter/sec",
            "range": "stddev: 0.00010690361250405822",
            "extra": "mean: 1.0923848547717743 msec\nrounds: 964"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1143.5023921390195,
            "unit": "iter/sec",
            "range": "stddev: 0.00008301170040422993",
            "extra": "mean: 874.5062597808948 usec\nrounds: 1278"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2080.190042053215,
            "unit": "iter/sec",
            "range": "stddev: 0.00004221579964219387",
            "extra": "mean: 480.7253086419775 usec\nrounds: 2268"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 36.345745553186916,
            "unit": "iter/sec",
            "range": "stddev: 0.002745337111335591",
            "extra": "mean: 27.513536585365674 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 38.786392256019575,
            "unit": "iter/sec",
            "range": "stddev: 0.0020098306907163116",
            "extra": "mean: 25.782238095238206 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1017.6784462228617,
            "unit": "iter/sec",
            "range": "stddev: 0.00009210405154140227",
            "extra": "mean: 982.628652214778 usec\nrounds: 1061"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1532.8724077494003,
            "unit": "iter/sec",
            "range": "stddev: 0.000060192824327687655",
            "extra": "mean: 652.3700178465759 usec\nrounds: 1681"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1980.4291348384475,
            "unit": "iter/sec",
            "range": "stddev: 0.00014971931286566638",
            "extra": "mean: 504.941066766105 usec\nrounds: 2681"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1499.6916178801935,
            "unit": "iter/sec",
            "range": "stddev: 0.0002020233918617759",
            "extra": "mean: 666.8037535700139 usec\nrounds: 2451"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1730904713227,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 792.7532102067964,
            "unit": "iter/sec",
            "range": "stddev: 0.000012592406654493166",
            "extra": "mean: 1.2614266169154225 msec\nrounds: 804"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1061.6898727345933,
            "unit": "iter/sec",
            "range": "stddev: 0.000021243750540133068",
            "extra": "mean: 941.8946395563718 usec\nrounds: 1082"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1354.576533574104,
            "unit": "iter/sec",
            "range": "stddev: 0.000010830391251864965",
            "extra": "mean: 738.2380952381187 usec\nrounds: 1365"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2374.3684170659235,
            "unit": "iter/sec",
            "range": "stddev: 0.00002886970528673958",
            "extra": "mean: 421.1646317447776 usec\nrounds: 2539"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 713.5002479609786,
            "unit": "iter/sec",
            "range": "stddev: 0.00002633277578973052",
            "extra": "mean: 1.4015412087911285 msec\nrounds: 728"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 952.3913131626775,
            "unit": "iter/sec",
            "range": "stddev: 0.000009325755940225514",
            "extra": "mean: 1.049988577362413 msec\nrounds: 963"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1273.5203910433877,
            "unit": "iter/sec",
            "range": "stddev: 0.000014149502206073461",
            "extra": "mean: 785.2249614791845 usec\nrounds: 1298"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2263.008625883637,
            "unit": "iter/sec",
            "range": "stddev: 0.000010264683588375235",
            "extra": "mean: 441.88961038958917 usec\nrounds: 2310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 40.40989431334236,
            "unit": "iter/sec",
            "range": "stddev: 0.0007735990878874125",
            "extra": "mean: 24.74641463414628 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 42.06284188577695,
            "unit": "iter/sec",
            "range": "stddev: 0.0001530223883473843",
            "extra": "mean: 23.77395238095261 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1039.3908521826818,
            "unit": "iter/sec",
            "range": "stddev: 0.0000350845452790113",
            "extra": "mean: 962.1019830028689 usec\nrounds: 1059"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1663.4738437135527,
            "unit": "iter/sec",
            "range": "stddev: 0.000010128514025339585",
            "extra": "mean: 601.1516224190167 usec\nrounds: 1695"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2375.361429948391,
            "unit": "iter/sec",
            "range": "stddev: 0.000034935991261703576",
            "extra": "mean: 420.98856510511195 usec\nrounds: 2711"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 2186.971895990985,
            "unit": "iter/sec",
            "range": "stddev: 0.00004400062734404806",
            "extra": "mean: 457.2532467532551 usec\nrounds: 2464"
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
        "date": 1730939119785,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 739.9366698446586,
            "unit": "iter/sec",
            "range": "stddev: 0.00007280158293412868",
            "extra": "mean: 1.3514670116429544 msec\nrounds: 773"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1000.0528784917294,
            "unit": "iter/sec",
            "range": "stddev: 0.00011323964115436824",
            "extra": "mean: 999.9471243042576 usec\nrounds: 1078"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1263.390190739948,
            "unit": "iter/sec",
            "range": "stddev: 0.00004214195133926773",
            "extra": "mean: 791.5211051419637 usec\nrounds: 1303"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2207.5520263220496,
            "unit": "iter/sec",
            "range": "stddev: 0.00010821919928368939",
            "extra": "mean: 452.9904564315417 usec\nrounds: 2410"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 644.2897040188411,
            "unit": "iter/sec",
            "range": "stddev: 0.0004083905801550351",
            "extra": "mean: 1.552096818810497 msec\nrounds: 723"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 887.5490991977276,
            "unit": "iter/sec",
            "range": "stddev: 0.00015872529495100727",
            "extra": "mean: 1.1266982310093254 msec\nrounds: 961"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1055.465627167897,
            "unit": "iter/sec",
            "range": "stddev: 0.00027473809012023453",
            "extra": "mean: 947.4491392801427 usec\nrounds: 1278"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2057.8515021476655,
            "unit": "iter/sec",
            "range": "stddev: 0.0000580950355965368",
            "extra": "mean: 485.94371311844185 usec\nrounds: 2203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 37.921054053618896,
            "unit": "iter/sec",
            "range": "stddev: 0.0013912680046979493",
            "extra": "mean: 26.370574999999707 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 36.11471063947877,
            "unit": "iter/sec",
            "range": "stddev: 0.0021854720894523855",
            "extra": "mean: 27.689547619048362 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 932.3194095493005,
            "unit": "iter/sec",
            "range": "stddev: 0.00021034579691613404",
            "extra": "mean: 1.0725937803691306 msec\nrounds: 1029"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1496.5056145844762,
            "unit": "iter/sec",
            "range": "stddev: 0.00010008014071304273",
            "extra": "mean: 668.2233532933739 usec\nrounds: 1670"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1924.08980417945,
            "unit": "iter/sec",
            "range": "stddev: 0.0002489483885837132",
            "extra": "mean: 519.7262611276408 usec\nrounds: 2696"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1296.7842290720698,
            "unit": "iter/sec",
            "range": "stddev: 0.0003503658485085204",
            "extra": "mean: 771.1383108935266 usec\nrounds: 2451"
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
        "date": 1730940773735,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 607.0490890285606,
            "unit": "iter/sec",
            "range": "stddev: 0.0005095126745560148",
            "extra": "mean: 1.6473132372214987 msec\nrounds: 763"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 963.9416765317036,
            "unit": "iter/sec",
            "range": "stddev: 0.0001229390173475493",
            "extra": "mean: 1.0374071630537187 msec\nrounds: 1061"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1194.458147885097,
            "unit": "iter/sec",
            "range": "stddev: 0.00010220542790240478",
            "extra": "mean: 837.1996974281568 usec\nrounds: 1322"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2099.351156003009,
            "unit": "iter/sec",
            "range": "stddev: 0.00012436242974512174",
            "extra": "mean: 476.3376518218693 usec\nrounds: 2470"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 573.5058110941336,
            "unit": "iter/sec",
            "range": "stddev: 0.00046285264271509396",
            "extra": "mean: 1.7436614950634959 msec\nrounds: 709"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 727.2510314145082,
            "unit": "iter/sec",
            "range": "stddev: 0.0005185251575844876",
            "extra": "mean: 1.3750410199556446 msec\nrounds: 902"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 846.3179614498379,
            "unit": "iter/sec",
            "range": "stddev: 0.0006685145574635845",
            "extra": "mean: 1.181589007383097 msec\nrounds: 1219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1531.233736896627,
            "unit": "iter/sec",
            "range": "stddev: 0.00042762636310407325",
            "extra": "mean: 653.0681605975545 usec\nrounds: 2142"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 29.614200996517766,
            "unit": "iter/sec",
            "range": "stddev: 0.0053285604562311375",
            "extra": "mean: 33.76758333333344 msec\nrounds: 36"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 35.947913365529246,
            "unit": "iter/sec",
            "range": "stddev: 0.0021989109526464263",
            "extra": "mean: 27.81802631578912 msec\nrounds: 38"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 802.8084003180968,
            "unit": "iter/sec",
            "range": "stddev: 0.00039686277496276193",
            "extra": "mean: 1.2456272251308904 msec\nrounds: 955"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1460.0811197830142,
            "unit": "iter/sec",
            "range": "stddev: 0.00009146780079722074",
            "extra": "mean: 684.8934531449952 usec\nrounds: 1558"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1014.4460672353381,
            "unit": "iter/sec",
            "range": "stddev: 0.0005212835941413008",
            "extra": "mean: 985.7596498208054 usec\nrounds: 2513"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1253.5411358453664,
            "unit": "iter/sec",
            "range": "stddev: 0.00041892110407678007",
            "extra": "mean: 797.740075219484 usec\nrounds: 2393"
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
        "date": 1730941725903,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 609.6197843420646,
            "unit": "iter/sec",
            "range": "stddev: 0.0004334209585700963",
            "extra": "mean: 1.6403667100129555 msec\nrounds: 769"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 868.3699304734366,
            "unit": "iter/sec",
            "range": "stddev: 0.0001778260987519138",
            "extra": "mean: 1.1515829428303657 msec\nrounds: 1067"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1236.1221932623828,
            "unit": "iter/sec",
            "range": "stddev: 0.0001011503130020147",
            "extra": "mean: 808.9815112539907 usec\nrounds: 1244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2424.748920691029,
            "unit": "iter/sec",
            "range": "stddev: 0.00006304785700191202",
            "extra": "mean: 412.41383446621353 usec\nrounds: 2501"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 708.0800453641355,
            "unit": "iter/sec",
            "range": "stddev: 0.00005403233881678399",
            "extra": "mean: 1.4122697095435623 msec\nrounds: 723"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 915.0416788576995,
            "unit": "iter/sec",
            "range": "stddev: 0.00011323906663980385",
            "extra": "mean: 1.09284639498428 msec\nrounds: 957"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1242.175701334038,
            "unit": "iter/sec",
            "range": "stddev: 0.00005942258706882087",
            "extra": "mean: 805.0390930413847 usec\nrounds: 1279"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2172.7265392522313,
            "unit": "iter/sec",
            "range": "stddev: 0.00005925030819011771",
            "extra": "mean: 460.25120139792716 usec\nrounds: 2289"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 38.84147531575621,
            "unit": "iter/sec",
            "range": "stddev: 0.001948894616187182",
            "extra": "mean: 25.745675000000467 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 37.872349859226055,
            "unit": "iter/sec",
            "range": "stddev: 0.002403315242763283",
            "extra": "mean: 26.404487804877803 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 955.4062331209066,
            "unit": "iter/sec",
            "range": "stddev: 0.00017587942765140546",
            "extra": "mean: 1.0466751893939654 msec\nrounds: 1056"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1655.6112341676196,
            "unit": "iter/sec",
            "range": "stddev: 0.000021584651136273482",
            "extra": "mean: 604.0065320665472 usec\nrounds: 1684"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2179.557476454621,
            "unit": "iter/sec",
            "range": "stddev: 0.0001233280276774156",
            "extra": "mean: 458.80873103959203 usec\nrounds: 2703"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1660.1077587804882,
            "unit": "iter/sec",
            "range": "stddev: 0.000115547310477355",
            "extra": "mean: 602.3705357142586 usec\nrounds: 2464"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1730989626857,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 697.234740707606,
            "unit": "iter/sec",
            "range": "stddev: 0.00011413083061020192",
            "extra": "mean: 1.434237196765504 msec\nrounds: 742"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 950.4203466571585,
            "unit": "iter/sec",
            "range": "stddev: 0.00005740933023668744",
            "extra": "mean: 1.0521660268713988 msec\nrounds: 1042"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1223.9445197540367,
            "unit": "iter/sec",
            "range": "stddev: 0.00005375783003460807",
            "extra": "mean: 817.0304975922924 usec\nrounds: 1246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2223.5250648488823,
            "unit": "iter/sec",
            "range": "stddev: 0.0000727739420964968",
            "extra": "mean: 449.73632895294713 usec\nrounds: 2359"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 635.4012525667421,
            "unit": "iter/sec",
            "range": "stddev: 0.0002484935375178785",
            "extra": "mean: 1.5738086696562825 msec\nrounds: 669"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 828.8928359976144,
            "unit": "iter/sec",
            "range": "stddev: 0.00021908107538910467",
            "extra": "mean: 1.2064285714285967 msec\nrounds: 882"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1065.5430796088885,
            "unit": "iter/sec",
            "range": "stddev: 0.0002937587634404301",
            "extra": "mean: 938.488569009386 usec\nrounds: 1181"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2002.0076154800577,
            "unit": "iter/sec",
            "range": "stddev: 0.00005496495208647316",
            "extra": "mean: 499.49859943974883 usec\nrounds: 2142"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 34.36675436553293,
            "unit": "iter/sec",
            "range": "stddev: 0.0029106927675901107",
            "extra": "mean: 29.097888888888473 msec\nrounds: 36"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 36.53442167452637,
            "unit": "iter/sec",
            "range": "stddev: 0.0006758998685381902",
            "extra": "mean: 27.371447368421055 msec\nrounds: 38"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 897.4191431749157,
            "unit": "iter/sec",
            "range": "stddev: 0.00013952211556659814",
            "extra": "mean: 1.1143065173115994 msec\nrounds: 982"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1482.0832497004963,
            "unit": "iter/sec",
            "range": "stddev: 0.00007725131843110373",
            "extra": "mean: 674.7259306804007 usec\nrounds: 1558"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1811.4596880378463,
            "unit": "iter/sec",
            "range": "stddev: 0.0002911595999641279",
            "extra": "mean: 552.0409902597332 usec\nrounds: 2464"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1486.7120231001938,
            "unit": "iter/sec",
            "range": "stddev: 0.00047096496461197546",
            "extra": "mean: 672.6252189141051 usec\nrounds: 2284"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1731510009567,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 588.3419574199116,
            "unit": "iter/sec",
            "range": "stddev: 0.0006747554015390729",
            "extra": "mean: 1.6996917989418179 msec\nrounds: 756"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 739.5134596529774,
            "unit": "iter/sec",
            "range": "stddev: 0.0006696504337581152",
            "extra": "mean: 1.35224043179587 msec\nrounds: 1019"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 758.4464300290063,
            "unit": "iter/sec",
            "range": "stddev: 0.0008498513752560263",
            "extra": "mean: 1.3184846818538731 msec\nrounds: 1273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1108.195927859559,
            "unit": "iter/sec",
            "range": "stddev: 0.0007074460613415893",
            "extra": "mean: 902.3675099866721 usec\nrounds: 2253"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 379.8401397902048,
            "unit": "iter/sec",
            "range": "stddev: 0.0015920510313363959",
            "extra": "mean: 2.63268647845466 msec\nrounds: 673"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 477.87141050379824,
            "unit": "iter/sec",
            "range": "stddev: 0.00124886484294457",
            "extra": "mean: 2.0926131549609654 msec\nrounds: 897"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 777.5243624300714,
            "unit": "iter/sec",
            "range": "stddev: 0.000688049213725642",
            "extra": "mean: 1.286133333333253 msec\nrounds: 1155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1048.3620071666596,
            "unit": "iter/sec",
            "range": "stddev: 0.0006902590990807433",
            "extra": "mean: 953.8689814815357 usec\nrounds: 2160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.352421966199152,
            "unit": "iter/sec",
            "range": "stddev: 0.009618908071733467",
            "extra": "mean: 41.063677419354306 msec\nrounds: 31"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.572726292241608,
            "unit": "iter/sec",
            "range": "stddev: 0.006511923222599474",
            "extra": "mean: 33.81494117647008 msec\nrounds: 34"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 799.5277555686391,
            "unit": "iter/sec",
            "range": "stddev: 0.00026637353225546115",
            "extra": "mean: 1.250738317757063 msec\nrounds: 963"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1042.7377563945088,
            "unit": "iter/sec",
            "range": "stddev: 0.0005643746534799756",
            "extra": "mean: 959.0138976627413 usec\nrounds: 1583"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1172.8365245959574,
            "unit": "iter/sec",
            "range": "stddev: 0.0005724130692118948",
            "extra": "mean: 852.6337465014574 usec\nrounds: 2501"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 750.469166175959,
            "unit": "iter/sec",
            "range": "stddev: 0.0009593228140060853",
            "extra": "mean: 1.3324997815640232 msec\nrounds: 2289"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1731596120886,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 620.9116508080033,
            "unit": "iter/sec",
            "range": "stddev: 0.0005936825217735563",
            "extra": "mean: 1.6105350877192952 msec\nrounds: 798"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 865.5420794059141,
            "unit": "iter/sec",
            "range": "stddev: 0.0005074110744252994",
            "extra": "mean: 1.1553453307392916 msec\nrounds: 1028"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1163.4731024985772,
            "unit": "iter/sec",
            "range": "stddev: 0.00023132451985848158",
            "extra": "mean: 859.4955894145588 usec\nrounds: 1247"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2277.4470064335114,
            "unit": "iter/sec",
            "range": "stddev: 0.00010834024159187599",
            "extra": "mean: 439.088153171126 usec\nrounds: 2507"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 591.0694334188828,
            "unit": "iter/sec",
            "range": "stddev: 0.00035849420922917744",
            "extra": "mean: 1.6918486111111648 msec\nrounds: 720"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 764.0777300295745,
            "unit": "iter/sec",
            "range": "stddev: 0.0004309691404123511",
            "extra": "mean: 1.308767368421134 msec\nrounds: 950"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 989.0255312529479,
            "unit": "iter/sec",
            "range": "stddev: 0.0005332600077218334",
            "extra": "mean: 1.0110962441314828 msec\nrounds: 1278"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2002.1230920002836,
            "unit": "iter/sec",
            "range": "stddev: 0.00011321092481655417",
            "extra": "mean: 499.4697898424011 usec\nrounds: 2284"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 34.45621371592688,
            "unit": "iter/sec",
            "range": "stddev: 0.0032971325694434402",
            "extra": "mean: 29.022341463414033 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 33.63845548230761,
            "unit": "iter/sec",
            "range": "stddev: 0.005414406546776674",
            "extra": "mean: 29.72788095238074 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 734.2834306385304,
            "unit": "iter/sec",
            "range": "stddev: 0.0007904562746499437",
            "extra": "mean: 1.3618719397364085 msec\nrounds: 1062"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1357.8534599887134,
            "unit": "iter/sec",
            "range": "stddev: 0.00034019791090541965",
            "extra": "mean: 736.4564950980146 usec\nrounds: 1632"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1700.8597984829541,
            "unit": "iter/sec",
            "range": "stddev: 0.0003649776451231776",
            "extra": "mean: 587.9379363848384 usec\nrounds: 2578"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1261.3928070029283,
            "unit": "iter/sec",
            "range": "stddev: 0.0004452196753626597",
            "extra": "mean: 792.7744588745531 usec\nrounds: 2310"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1732286725786,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 758.6222514096825,
            "unit": "iter/sec",
            "range": "stddev: 0.0001109936116600089",
            "extra": "mean: 1.3181791044776054 msec\nrounds: 804"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1020.6738530437841,
            "unit": "iter/sec",
            "range": "stddev: 0.00008445005252422864",
            "extra": "mean: 979.7448979591944 usec\nrounds: 1078"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1239.873452444075,
            "unit": "iter/sec",
            "range": "stddev: 0.00018000860053156653",
            "extra": "mean: 806.5339233038426 usec\nrounds: 1356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2454.8755863678566,
            "unit": "iter/sec",
            "range": "stddev: 0.000023515045129855037",
            "extra": "mean: 407.35261923377675 usec\nrounds: 2558"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 692.8075884379584,
            "unit": "iter/sec",
            "range": "stddev: 0.00011643640002296261",
            "extra": "mean: 1.4434022038567076 msec\nrounds: 726"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 875.3589199529646,
            "unit": "iter/sec",
            "range": "stddev: 0.0003222235023684241",
            "extra": "mean: 1.1423885416666946 msec\nrounds: 960"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1255.8468977464042,
            "unit": "iter/sec",
            "range": "stddev: 0.00003870223193216641",
            "extra": "mean: 796.2754072924675 usec\nrounds: 1289"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2223.7933399553544,
            "unit": "iter/sec",
            "range": "stddev: 0.0000394154347119429",
            "extra": "mean: 449.6820734340703 usec\nrounds: 2315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 39.33774427779706,
            "unit": "iter/sec",
            "range": "stddev: 0.0016148414039020551",
            "extra": "mean: 25.420878048780708 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 41.812471067264106,
            "unit": "iter/sec",
            "range": "stddev: 0.0008446421233227116",
            "extra": "mean: 23.916309523809076 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1026.5411983579784,
            "unit": "iter/sec",
            "range": "stddev: 0.0000723766162779273",
            "extra": "mean: 974.1450236966302 usec\nrounds: 1055"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1524.2941698673558,
            "unit": "iter/sec",
            "range": "stddev: 0.0001659202133615365",
            "extra": "mean: 656.0413467218209 usec\nrounds: 1693"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1892.6055726641557,
            "unit": "iter/sec",
            "range": "stddev: 0.00019975287474609038",
            "extra": "mean: 528.3721100917686 usec\nrounds: 2725"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1187.0418686848363,
            "unit": "iter/sec",
            "range": "stddev: 0.00047904517671819156",
            "extra": "mean: 842.4302683678156 usec\nrounds: 2273"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1732315943751,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 690.080550110224,
            "unit": "iter/sec",
            "range": "stddev: 0.0004647100948470121",
            "extra": "mean: 1.4491061946902775 msec\nrounds: 791"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 932.2933979068727,
            "unit": "iter/sec",
            "range": "stddev: 0.00032817955543434403",
            "extra": "mean: 1.0726237064910447 msec\nrounds: 1063"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1130.6310425307083,
            "unit": "iter/sec",
            "range": "stddev: 0.0003121633106939229",
            "extra": "mean: 884.4618291761078 usec\nrounds: 1323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2086.923762014706,
            "unit": "iter/sec",
            "range": "stddev: 0.0002459913492458803",
            "extra": "mean: 479.1741884402164 usec\nrounds: 2526"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 686.4536859813928,
            "unit": "iter/sec",
            "range": "stddev: 0.00014001214938053535",
            "extra": "mean: 1.4567625178825336 msec\nrounds: 699"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 911.419773496344,
            "unit": "iter/sec",
            "range": "stddev: 0.00011814199275982126",
            "extra": "mean: 1.0971892744479845 msec\nrounds: 951"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1234.105341223408,
            "unit": "iter/sec",
            "range": "stddev: 0.00003863766794283966",
            "extra": "mean: 810.3035993739952 usec\nrounds: 1278"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2003.8010065399415,
            "unit": "iter/sec",
            "range": "stddev: 0.0002680878042133363",
            "extra": "mean: 499.0515508956389 usec\nrounds: 2289"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 38.849413042222096,
            "unit": "iter/sec",
            "range": "stddev: 0.0016106540127478006",
            "extra": "mean: 25.7404146341461 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 39.14552012939008,
            "unit": "iter/sec",
            "range": "stddev: 0.002510855623526393",
            "extra": "mean: 25.54570731707329 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 969.9825217504439,
            "unit": "iter/sec",
            "range": "stddev: 0.00019061786259229032",
            "extra": "mean: 1.0309464114831535 msec\nrounds: 1045"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1571.9087356158257,
            "unit": "iter/sec",
            "range": "stddev: 0.00007119536448688899",
            "extra": "mean: 636.1692491060753 usec\nrounds: 1678"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1711.9275504133225,
            "unit": "iter/sec",
            "range": "stddev: 0.0002721433926401971",
            "extra": "mean: 584.1368694361879 usec\nrounds: 2696"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1193.9159218965062,
            "unit": "iter/sec",
            "range": "stddev: 0.00043993177394928846",
            "extra": "mean: 837.5799180326907 usec\nrounds: 2440"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1732545920863,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 777.6309355724915,
            "unit": "iter/sec",
            "range": "stddev: 0.00005128821587600223",
            "extra": "mean: 1.2859570707070707 msec\nrounds: 792"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1047.4757310200405,
            "unit": "iter/sec",
            "range": "stddev: 0.000023986549321281442",
            "extra": "mean: 954.6760563380232 usec\nrounds: 1065"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1292.6471982645794,
            "unit": "iter/sec",
            "range": "stddev: 0.00003571003601301106",
            "extra": "mean: 773.606287425163 usec\nrounds: 1336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2463.90907557822,
            "unit": "iter/sec",
            "range": "stddev: 0.000009466420138272182",
            "extra": "mean: 405.8591325109366 usec\nrounds: 2513"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 700.8941561352113,
            "unit": "iter/sec",
            "range": "stddev: 0.000044427729183272235",
            "extra": "mean: 1.4267489481066344 msec\nrounds: 713"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 866.9973084672076,
            "unit": "iter/sec",
            "range": "stddev: 0.000054348426587654404",
            "extra": "mean: 1.1534061181434716 msec\nrounds: 948"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1012.0351920135677,
            "unit": "iter/sec",
            "range": "stddev: 0.00017850885758570535",
            "extra": "mean: 988.1079313164771 usec\nrounds: 1223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1751.2960420708725,
            "unit": "iter/sec",
            "range": "stddev: 0.00023008860100169392",
            "extra": "mean: 571.0056872038151 usec\nrounds: 2110"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.06157772594843,
            "unit": "iter/sec",
            "range": "stddev: 0.00842414519395119",
            "extra": "mean: 41.5600344827589 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 32.7407261893074,
            "unit": "iter/sec",
            "range": "stddev: 0.0025994955845544186",
            "extra": "mean: 30.542999999999513 msec\nrounds: 35"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 755.5985152368593,
            "unit": "iter/sec",
            "range": "stddev: 0.00047595552487890663",
            "extra": "mean: 1.323454162276282 msec\nrounds: 949"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1243.2532735238558,
            "unit": "iter/sec",
            "range": "stddev: 0.0004627714047172092",
            "extra": "mean: 804.3413367942455 usec\nrounds: 1541"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 971.9056037590773,
            "unit": "iter/sec",
            "range": "stddev: 0.0009422997193978977",
            "extra": "mean: 1.0289065071054853 msec\nrounds: 2674"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1253.1764008118912,
            "unit": "iter/sec",
            "range": "stddev: 0.0004570272300705359",
            "extra": "mean: 797.9722562219758 usec\nrounds: 2451"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1732632036789,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 642.1939792785441,
            "unit": "iter/sec",
            "range": "stddev: 0.00037606636707269666",
            "extra": "mean: 1.557161904761897 msec\nrounds: 735"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 908.3783497510916,
            "unit": "iter/sec",
            "range": "stddev: 0.0001329037366447744",
            "extra": "mean: 1.100862873134321 msec\nrounds: 1072"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 970.3287389323034,
            "unit": "iter/sec",
            "range": "stddev: 0.0004065240763709285",
            "extra": "mean: 1.0305785656728514 msec\nrounds: 1241"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1420.7109834302582,
            "unit": "iter/sec",
            "range": "stddev: 0.0004837997671695002",
            "extra": "mean: 703.872928176802 usec\nrounds: 2353"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 399.6013703047463,
            "unit": "iter/sec",
            "range": "stddev: 0.0012669040672000354",
            "extra": "mean: 2.502493920972729 msec\nrounds: 658"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 455.4606478385526,
            "unit": "iter/sec",
            "range": "stddev: 0.0015669772657431547",
            "extra": "mean: 2.1955793650793525 msec\nrounds: 882"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 645.3422340948442,
            "unit": "iter/sec",
            "range": "stddev: 0.001132981965417581",
            "extra": "mean: 1.5495654044750349 msec\nrounds: 1162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1102.5686714779022,
            "unit": "iter/sec",
            "range": "stddev: 0.0007425751680848217",
            "extra": "mean: 906.9729857819945 usec\nrounds: 2110"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.781040947667133,
            "unit": "iter/sec",
            "range": "stddev: 0.010171152332441029",
            "extra": "mean: 35.99577142857108 msec\nrounds: 35"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.363379348509167,
            "unit": "iter/sec",
            "range": "stddev: 0.008943460111304164",
            "extra": "mean: 34.05602564102595 msec\nrounds: 39"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 556.7078003063062,
            "unit": "iter/sec",
            "range": "stddev: 0.0011191626154292997",
            "extra": "mean: 1.7962744539411697 msec\nrounds: 1053"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1303.624246015103,
            "unit": "iter/sec",
            "range": "stddev: 0.0003438010505019134",
            "extra": "mean: 767.0922070196099 usec\nrounds: 1681"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1175.4858880148888,
            "unit": "iter/sec",
            "range": "stddev: 0.0006183720575820771",
            "extra": "mean: 850.7120418848737 usec\nrounds: 2674"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1037.9916379853887,
            "unit": "iter/sec",
            "range": "stddev: 0.0007291042843944901",
            "extra": "mean: 963.3988978378229 usec\nrounds: 2359"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1733150322272,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 723.9283356477805,
            "unit": "iter/sec",
            "range": "stddev: 0.0001495549290581911",
            "extra": "mean: 1.3813522012578594 msec\nrounds: 795"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1006.6003956655825,
            "unit": "iter/sec",
            "range": "stddev: 0.00008019523690603926",
            "extra": "mean: 993.4428838951349 usec\nrounds: 1068"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1263.830509113535,
            "unit": "iter/sec",
            "range": "stddev: 0.00005839637002732508",
            "extra": "mean: 791.2453392990261 usec\nrounds: 1341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2391.178487596282,
            "unit": "iter/sec",
            "range": "stddev: 0.000022151809202296203",
            "extra": "mean: 418.20382927802433 usec\nrounds: 2507"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 682.8217228350684,
            "unit": "iter/sec",
            "range": "stddev: 0.00009276368581663556",
            "extra": "mean: 1.4645111111111269 msec\nrounds: 720"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 915.5991102304563,
            "unit": "iter/sec",
            "range": "stddev: 0.00005954115788717425",
            "extra": "mean: 1.0921810526315388 msec\nrounds: 950"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1147.059087926254,
            "unit": "iter/sec",
            "range": "stddev: 0.00008588599924144544",
            "extra": "mean: 871.7946708463649 usec\nrounds: 1276"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2186.9800762079726,
            "unit": "iter/sec",
            "range": "stddev: 0.000022528300355685824",
            "extra": "mean: 457.2515364355355 usec\nrounds: 2278"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 37.47697679626671,
            "unit": "iter/sec",
            "range": "stddev: 0.0014208982537681227",
            "extra": "mean: 26.683048780487958 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 40.91565335479186,
            "unit": "iter/sec",
            "range": "stddev: 0.0012955171156649589",
            "extra": "mean: 24.440523809523487 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 979.844268097342,
            "unit": "iter/sec",
            "range": "stddev: 0.00009057665873809368",
            "extra": "mean: 1.0205703422052939 msec\nrounds: 1052"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1541.637126314566,
            "unit": "iter/sec",
            "range": "stddev: 0.00007072675955891033",
            "extra": "mean: 648.6610778443028 usec\nrounds: 1670"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2228.094936947288,
            "unit": "iter/sec",
            "range": "stddev: 0.000055854330516390126",
            "extra": "mean: 448.813909774464 usec\nrounds: 2660"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 2058.6250284033235,
            "unit": "iter/sec",
            "range": "stddev: 0.00006924126278521387",
            "extra": "mean: 485.76112026365644 usec\nrounds: 2428"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1733158830931,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 662.2971819674078,
            "unit": "iter/sec",
            "range": "stddev: 0.0003751309521900374",
            "extra": "mean: 1.5098962025316465 msec\nrounds: 790"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 938.6560653746409,
            "unit": "iter/sec",
            "range": "stddev: 0.00026340284450566357",
            "extra": "mean: 1.065352941176463 msec\nrounds: 1071"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1182.6040459851936,
            "unit": "iter/sec",
            "range": "stddev: 0.00020178075371112233",
            "extra": "mean: 845.5915599095796 usec\nrounds: 1327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1968.0548523997318,
            "unit": "iter/sec",
            "range": "stddev: 0.00020204391086800757",
            "extra": "mean: 508.115919015498 usec\nrounds: 2519"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 565.5796284054835,
            "unit": "iter/sec",
            "range": "stddev: 0.0006001590421964191",
            "extra": "mean: 1.7680976290098367 msec\nrounds: 717"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 778.6591234596087,
            "unit": "iter/sec",
            "range": "stddev: 0.00040585253707773635",
            "extra": "mean: 1.2842590163934202 msec\nrounds: 915"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1020.7924841223182,
            "unit": "iter/sec",
            "range": "stddev: 0.00024086651889244923",
            "extra": "mean: 979.6310372130182 usec\nrounds: 1263"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1866.3485266959888,
            "unit": "iter/sec",
            "range": "stddev: 0.0001658330220150309",
            "extra": "mean: 535.8056042031483 usec\nrounds: 2284"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 32.38826287457203,
            "unit": "iter/sec",
            "range": "stddev: 0.003155713394969725",
            "extra": "mean: 30.875382352941767 msec\nrounds: 34"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 30.95869554345643,
            "unit": "iter/sec",
            "range": "stddev: 0.007102695944035833",
            "extra": "mean: 32.30110256410221 msec\nrounds: 39"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 678.0669026010419,
            "unit": "iter/sec",
            "range": "stddev: 0.0009919007185870982",
            "extra": "mean: 1.4747807276303173 msec\nrounds: 1017"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1091.1587856371575,
            "unit": "iter/sec",
            "range": "stddev: 0.0005393713367275913",
            "extra": "mean: 916.4569017478722 usec\nrounds: 1659"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1626.6028396449062,
            "unit": "iter/sec",
            "range": "stddev: 0.00037901259578240894",
            "extra": "mean: 614.7782209812839 usec\nrounds: 2507"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1306.0243871667665,
            "unit": "iter/sec",
            "range": "stddev: 0.00046611488375400504",
            "extra": "mean: 765.682486350318 usec\nrounds: 2381"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1733160718164,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 556.2925556475814,
            "unit": "iter/sec",
            "range": "stddev: 0.0008124147803189064",
            "extra": "mean: 1.7976152832674486 msec\nrounds: 759"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 778.0367889503782,
            "unit": "iter/sec",
            "range": "stddev: 0.0007418997117203603",
            "extra": "mean: 1.285286266924556 msec\nrounds: 1034"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 984.3273548211656,
            "unit": "iter/sec",
            "range": "stddev: 0.0006060634823151896",
            "extra": "mean: 1.0159221879815399 msec\nrounds: 1298"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1901.439779836443,
            "unit": "iter/sec",
            "range": "stddev: 0.0002485778478038568",
            "extra": "mean: 525.9172604908988 usec\nrounds: 2526"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 609.9262728514492,
            "unit": "iter/sec",
            "range": "stddev: 0.00041062896316515415",
            "extra": "mean: 1.6395424242424057 msec\nrounds: 660"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 836.2776724457907,
            "unit": "iter/sec",
            "range": "stddev: 0.00022383613261045486",
            "extra": "mean: 1.1957750791975401 msec\nrounds: 947"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1126.4531996655317,
            "unit": "iter/sec",
            "range": "stddev: 0.00013873793089103762",
            "extra": "mean: 887.7421630094545 usec\nrounds: 1276"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1894.4001367581675,
            "unit": "iter/sec",
            "range": "stddev: 0.00015415016802014376",
            "extra": "mean: 527.8715835141732 usec\nrounds: 2305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 33.72220796567871,
            "unit": "iter/sec",
            "range": "stddev: 0.004080233957453865",
            "extra": "mean: 29.65404878048807 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 35.219263083261566,
            "unit": "iter/sec",
            "range": "stddev: 0.002013821816340161",
            "extra": "mean: 28.393552631578586 msec\nrounds: 38"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 931.1053397641199,
            "unit": "iter/sec",
            "range": "stddev: 0.00017781212665639337",
            "extra": "mean: 1.0739923371649156 msec\nrounds: 1044"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1312.4016480886812,
            "unit": "iter/sec",
            "range": "stddev: 0.000289010791601149",
            "extra": "mean: 761.9618593563579 usec\nrounds: 1678"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1672.0019832288383,
            "unit": "iter/sec",
            "range": "stddev: 0.00026002592644431687",
            "extra": "mean: 598.0854149878932 usec\nrounds: 2482"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1342.7602977907507,
            "unit": "iter/sec",
            "range": "stddev: 0.0004935653898715583",
            "extra": "mean: 744.734560327189 usec\nrounds: 2445"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1733495412426,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 699.2394085937066,
            "unit": "iter/sec",
            "range": "stddev: 0.00017897638292923396",
            "extra": "mean: 1.4301253443526243 msec\nrounds: 726"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 954.2852829078275,
            "unit": "iter/sec",
            "range": "stddev: 0.00004244307072214941",
            "extra": "mean: 1.0479046653144164 msec\nrounds: 986"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1199.8897138998093,
            "unit": "iter/sec",
            "range": "stddev: 0.00013610509854550308",
            "extra": "mean: 833.4099279423441 usec\nrounds: 1249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2173.3017947836033,
            "unit": "iter/sec",
            "range": "stddev: 0.00009956272142311624",
            "extra": "mean: 460.12937660117774 usec\nrounds: 2342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 644.181659227894,
            "unit": "iter/sec",
            "range": "stddev: 0.00013801669252178184",
            "extra": "mean: 1.552357142857163 msec\nrounds: 658"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 829.5281869906972,
            "unit": "iter/sec",
            "range": "stddev: 0.0002336407839109116",
            "extra": "mean: 1.2055045454546014 msec\nrounds: 880"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1092.7980959698298,
            "unit": "iter/sec",
            "range": "stddev: 0.0001727994079086566",
            "extra": "mean: 915.0821214714198 usec\nrounds: 1169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1915.880287770862,
            "unit": "iter/sec",
            "range": "stddev: 0.00027476541662164626",
            "extra": "mean: 521.9532798489753 usec\nrounds: 2119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 33.08063897489367,
            "unit": "iter/sec",
            "range": "stddev: 0.0070553705214674856",
            "extra": "mean: 30.229162162162083 msec\nrounds: 37"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 36.02245854252972,
            "unit": "iter/sec",
            "range": "stddev: 0.0021653413330437973",
            "extra": "mean: 27.7604594594607 msec\nrounds: 37"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 806.1822565303764,
            "unit": "iter/sec",
            "range": "stddev: 0.00042900749443277073",
            "extra": "mean: 1.2404143007361272 msec\nrounds: 951"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1309.7498565858045,
            "unit": "iter/sec",
            "range": "stddev: 0.0003035471042938613",
            "extra": "mean: 763.504569190604 usec\nrounds: 1532"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1652.6694190228325,
            "unit": "iter/sec",
            "range": "stddev: 0.0002700274458770372",
            "extra": "mean: 605.0816869300251 usec\nrounds: 2632"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1693.880926444128,
            "unit": "iter/sec",
            "range": "stddev: 0.0002791073784005409",
            "extra": "mean: 590.3602693604005 usec\nrounds: 2376"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1733755826226,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 703.0843728569483,
            "unit": "iter/sec",
            "range": "stddev: 0.0002510072199524508",
            "extra": "mean: 1.4223044041450528 msec\nrounds: 772"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1028.4407956018022,
            "unit": "iter/sec",
            "range": "stddev: 0.00007470438407939368",
            "extra": "mean: 972.3457142857119 usec\nrounds: 1050"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1231.0545791774803,
            "unit": "iter/sec",
            "range": "stddev: 0.00016098350825549107",
            "extra": "mean: 812.311669128547 usec\nrounds: 1354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2446.603742955799,
            "unit": "iter/sec",
            "range": "stddev: 0.00004818622189527906",
            "extra": "mean: 408.7298578199168 usec\nrounds: 2532"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 690.725492972816,
            "unit": "iter/sec",
            "range": "stddev: 0.00016802124477203518",
            "extra": "mean: 1.4477531380752957 msec\nrounds: 717"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 925.6141896461469,
            "unit": "iter/sec",
            "range": "stddev: 0.00004533606336305485",
            "extra": "mean: 1.0803637316561558 msec\nrounds: 954"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1247.0008069401863,
            "unit": "iter/sec",
            "range": "stddev: 0.000033010850328370905",
            "extra": "mean: 801.9241001565496 usec\nrounds: 1278"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2205.34182798327,
            "unit": "iter/sec",
            "range": "stddev: 0.00002349873528960812",
            "extra": "mean: 453.44444444445827 usec\nrounds: 2268"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 40.346428209435345,
            "unit": "iter/sec",
            "range": "stddev: 0.0007884487494364131",
            "extra": "mean: 24.785341463414643 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 41.930353682532775,
            "unit": "iter/sec",
            "range": "stddev: 0.00028704859730075766",
            "extra": "mean: 23.849071428571733 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1016.4647841156382,
            "unit": "iter/sec",
            "range": "stddev: 0.00006980859159102037",
            "extra": "mean: 983.8019138754884 usec\nrounds: 1045"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1551.6141238617092,
            "unit": "iter/sec",
            "range": "stddev: 0.00012620735123906174",
            "extra": "mean: 644.4901374777168 usec\nrounds: 1673"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2066.010003423527,
            "unit": "iter/sec",
            "range": "stddev: 0.00015245423567425385",
            "extra": "mean: 484.02476190479626 usec\nrounds: 2625"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1501.51927583151,
            "unit": "iter/sec",
            "range": "stddev: 0.0001458834537846377",
            "extra": "mean: 665.9921161826051 usec\nrounds: 2410"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1733756607970,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 771.710282337512,
            "unit": "iter/sec",
            "range": "stddev: 0.0000796845071037694",
            "extra": "mean: 1.2958230865746636 msec\nrounds: 797"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1061.3116905897045,
            "unit": "iter/sec",
            "range": "stddev: 0.000014221785909089785",
            "extra": "mean: 942.2302692664796 usec\nrounds: 1077"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1316.7542882038251,
            "unit": "iter/sec",
            "range": "stddev: 0.0000261808780374761",
            "extra": "mean: 759.4431314623571 usec\nrounds: 1354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2438.8461789105054,
            "unit": "iter/sec",
            "range": "stddev: 0.00001332744578898591",
            "extra": "mean: 410.02995951418524 usec\nrounds: 2470"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 705.8377448192442,
            "unit": "iter/sec",
            "range": "stddev: 0.0000682081585483388",
            "extra": "mean: 1.4167561983470958 msec\nrounds: 726"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 939.8219346778756,
            "unit": "iter/sec",
            "range": "stddev: 0.00001546737217669076",
            "extra": "mean: 1.064031347962474 msec\nrounds: 957"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1249.083792622706,
            "unit": "iter/sec",
            "range": "stddev: 0.000022540087598930386",
            "extra": "mean: 800.5868028279322 usec\nrounds: 1273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2149.4096738664703,
            "unit": "iter/sec",
            "range": "stddev: 0.0000279102503652237",
            "extra": "mean: 465.2440212577753 usec\nrounds: 2258"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 36.552379559909724,
            "unit": "iter/sec",
            "range": "stddev: 0.0037511037309041215",
            "extra": "mean: 27.357999999999723 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 40.281063577273365,
            "unit": "iter/sec",
            "range": "stddev: 0.0014542879537555497",
            "extra": "mean: 24.825560975609427 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 951.2979202659076,
            "unit": "iter/sec",
            "range": "stddev: 0.00016210574457348618",
            "extra": "mean: 1.051195402298871 msec\nrounds: 1044"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1333.439621998948,
            "unit": "iter/sec",
            "range": "stddev: 0.00030631478298135393",
            "extra": "mean: 749.940217391252 usec\nrounds: 1656"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1870.5261808865732,
            "unit": "iter/sec",
            "range": "stddev: 0.00026947299262009645",
            "extra": "mean: 534.6089299461343 usec\nrounds: 2598"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1460.5396098464782,
            "unit": "iter/sec",
            "range": "stddev: 0.00014673124279758067",
            "extra": "mean: 684.6784525789842 usec\nrounds: 2404"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1733842073170,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 747.4843336480488,
            "unit": "iter/sec",
            "range": "stddev: 0.00007394637312687147",
            "extra": "mean: 1.337820680628268 msec\nrounds: 764"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1005.110615943129,
            "unit": "iter/sec",
            "range": "stddev: 0.00003608790033101098",
            "extra": "mean: 994.9153696498037 usec\nrounds: 1028"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1246.079479038515,
            "unit": "iter/sec",
            "range": "stddev: 0.00006798763172584264",
            "extra": "mean: 802.5170278637506 usec\nrounds: 1292"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2304.030180010181,
            "unit": "iter/sec",
            "range": "stddev: 0.00003264983315620489",
            "extra": "mean: 434.022092538554 usec\nrounds: 2399"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 673.2776209945058,
            "unit": "iter/sec",
            "range": "stddev: 0.00003842003638529813",
            "extra": "mean: 1.4852714078375113 msec\nrounds: 689"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 873.1567488697738,
            "unit": "iter/sec",
            "range": "stddev: 0.0000912080987791634",
            "extra": "mean: 1.145269736842112 msec\nrounds: 912"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1184.7101348399697,
            "unit": "iter/sec",
            "range": "stddev: 0.00008345252484282934",
            "extra": "mean: 844.0883306320998 usec\nrounds: 1234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2123.561657366181,
            "unit": "iter/sec",
            "range": "stddev: 0.000031267396787286374",
            "extra": "mean: 470.9069767441006 usec\nrounds: 2193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 39.12994565828775,
            "unit": "iter/sec",
            "range": "stddev: 0.0007380211305257",
            "extra": "mean: 25.55587500000014 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 39.641561005389796,
            "unit": "iter/sec",
            "range": "stddev: 0.0013465868334422136",
            "extra": "mean: 25.226049999999667 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 980.7017835474679,
            "unit": "iter/sec",
            "range": "stddev: 0.000051421868557289365",
            "extra": "mean: 1.0196779661017086 msec\nrounds: 1003"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1392.0068370836973,
            "unit": "iter/sec",
            "range": "stddev: 0.00017567715743701262",
            "extra": "mean: 718.387276096312 usec\nrounds: 1619"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1751.1655706276028,
            "unit": "iter/sec",
            "range": "stddev: 0.00027100419111688456",
            "extra": "mean: 571.0482302604936 usec\nrounds: 2571"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1417.9274181683736,
            "unit": "iter/sec",
            "range": "stddev: 0.0003148747585240834",
            "extra": "mean: 705.2547169810448 usec\nrounds: 2332"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1734964225877,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 661.7507191292334,
            "unit": "iter/sec",
            "range": "stddev: 0.0005392655601593138",
            "extra": "mean: 1.5111430499325378 msec\nrounds: 741"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 922.832259512081,
            "unit": "iter/sec",
            "range": "stddev: 0.00015055082659992344",
            "extra": "mean: 1.0836205493387487 msec\nrounds: 983"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1188.9525930262487,
            "unit": "iter/sec",
            "range": "stddev: 0.0000544553898541896",
            "extra": "mean: 841.0764279967577 usec\nrounds: 1243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2129.891010566181,
            "unit": "iter/sec",
            "range": "stddev: 0.00007231541431853985",
            "extra": "mean: 469.5075921909139 usec\nrounds: 2305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 624.7573529134877,
            "unit": "iter/sec",
            "range": "stddev: 0.0003563671559116685",
            "extra": "mean: 1.6006214177978204 msec\nrounds: 663"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 836.3957022128861,
            "unit": "iter/sec",
            "range": "stddev: 0.00011196965595933906",
            "extra": "mean: 1.195606334841582 msec\nrounds: 884"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1043.999528516358,
            "unit": "iter/sec",
            "range": "stddev: 0.0003369838079369915",
            "extra": "mean: 957.8548387096629 usec\nrounds: 1178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1683.7978837487938,
            "unit": "iter/sec",
            "range": "stddev: 0.0003980003588823776",
            "extra": "mean: 593.8955082741927 usec\nrounds: 2115"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 32.887573385953345,
            "unit": "iter/sec",
            "range": "stddev: 0.0036859402867245087",
            "extra": "mean: 30.40662162162172 msec\nrounds: 37"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 37.02510301984774,
            "unit": "iter/sec",
            "range": "stddev: 0.0014576824235923481",
            "extra": "mean: 27.008702702702493 msec\nrounds: 37"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 874.8528021869452,
            "unit": "iter/sec",
            "range": "stddev: 0.00026146638353481845",
            "extra": "mean: 1.1430494335735264 msec\nrounds: 971"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1385.3000287108052,
            "unit": "iter/sec",
            "range": "stddev: 0.00022899185910314605",
            "extra": "mean: 721.8652849741329 usec\nrounds: 1544"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1448.3451011372224,
            "unit": "iter/sec",
            "range": "stddev: 0.00042226389451145745",
            "extra": "mean: 690.4431818182093 usec\nrounds: 2464"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1315.938018335191,
            "unit": "iter/sec",
            "range": "stddev: 0.0005799368083711916",
            "extra": "mean: 759.9142102947311 usec\nrounds: 2273"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1735002847601,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 746.1578509150303,
            "unit": "iter/sec",
            "range": "stddev: 0.00010279278338854388",
            "extra": "mean: 1.3401989924433244 msec\nrounds: 794"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 985.8013541749476,
            "unit": "iter/sec",
            "range": "stddev: 0.00011118089202164626",
            "extra": "mean: 1.0144031510658005 msec\nrounds: 1079"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1275.1120452683588,
            "unit": "iter/sec",
            "range": "stddev: 0.000051163008729455884",
            "extra": "mean: 784.2448071216683 usec\nrounds: 1348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2251.0194277091823,
            "unit": "iter/sec",
            "range": "stddev: 0.00003727436546481137",
            "extra": "mean: 444.24316720255064 usec\nrounds: 2488"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 683.9090663983828,
            "unit": "iter/sec",
            "range": "stddev: 0.00004294320970616715",
            "extra": "mean: 1.462182692307652 msec\nrounds: 728"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 908.3976863267274,
            "unit": "iter/sec",
            "range": "stddev: 0.000024739136883767496",
            "extra": "mean: 1.100839439655206 msec\nrounds: 928"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1153.1643173095263,
            "unit": "iter/sec",
            "range": "stddev: 0.00010556071892821981",
            "extra": "mean: 867.1791044776018 usec\nrounds: 1273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2184.689607404716,
            "unit": "iter/sec",
            "range": "stddev: 0.00003285858651240545",
            "extra": "mean: 457.73092736406704 usec\nrounds: 2189"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 40.368555061724656,
            "unit": "iter/sec",
            "range": "stddev: 0.0007086341362255926",
            "extra": "mean: 24.771756097560882 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 40.58253327767698,
            "unit": "iter/sec",
            "range": "stddev: 0.0011718019805134446",
            "extra": "mean: 24.641142857143045 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 984.3892046246234,
            "unit": "iter/sec",
            "range": "stddev: 0.00011379306141265491",
            "extra": "mean: 1.0158583569405653 msec\nrounds: 1059"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1548.1952626344378,
            "unit": "iter/sec",
            "range": "stddev: 0.00009205935944463293",
            "extra": "mean: 645.913357400656 usec\nrounds: 1662"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1710.7152868159608,
            "unit": "iter/sec",
            "range": "stddev: 0.0004915555776523515",
            "extra": "mean: 584.5508061491827 usec\nrounds: 2667"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1373.6000459996242,
            "unit": "iter/sec",
            "range": "stddev: 0.0002621197806653276",
            "extra": "mean: 728.0139534883749 usec\nrounds: 2365"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1735225222670,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 775.1501246262654,
            "unit": "iter/sec",
            "range": "stddev: 0.00004557153826347182",
            "extra": "mean: 1.2900726817042631 msec\nrounds: 798"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1029.039770091852,
            "unit": "iter/sec",
            "range": "stddev: 0.00006641689893063732",
            "extra": "mean: 971.7797397769573 usec\nrounds: 1076"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1281.6793791817647,
            "unit": "iter/sec",
            "range": "stddev: 0.00003972068227010038",
            "extra": "mean: 780.2263313609748 usec\nrounds: 1352"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2429.054373223148,
            "unit": "iter/sec",
            "range": "stddev: 0.00001186290394345751",
            "extra": "mean: 411.68283881314903 usec\nrounds: 2494"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 675.6038326873103,
            "unit": "iter/sec",
            "range": "stddev: 0.00020382368298588953",
            "extra": "mean: 1.4801573816157285 msec\nrounds: 718"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 932.7717739926998,
            "unit": "iter/sec",
            "range": "stddev: 0.0000251384973701734",
            "extra": "mean: 1.0720736067296848 msec\nrounds: 951"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1252.468431033296,
            "unit": "iter/sec",
            "range": "stddev: 0.000023305132427020262",
            "extra": "mean: 798.4233176839375 usec\nrounds: 1278"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2092.4431105580093,
            "unit": "iter/sec",
            "range": "stddev: 0.0000868076263634883",
            "extra": "mean: 477.91024518383284 usec\nrounds: 2284"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 39.77991036906977,
            "unit": "iter/sec",
            "range": "stddev: 0.0012449111903867047",
            "extra": "mean: 25.13831707317103 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 41.72420301805119,
            "unit": "iter/sec",
            "range": "stddev: 0.0002515511691654405",
            "extra": "mean: 23.96690476190447 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 990.9907339514494,
            "unit": "iter/sec",
            "range": "stddev: 0.000127043474896178",
            "extra": "mean: 1.0090911708252077 msec\nrounds: 1042"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1613.2459219392408,
            "unit": "iter/sec",
            "range": "stddev: 0.00007406232726827533",
            "extra": "mean: 619.8682955900028 usec\nrounds: 1678"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1351.0870367378134,
            "unit": "iter/sec",
            "range": "stddev: 0.0003571690799536168",
            "extra": "mean: 740.1447669977579 usec\nrounds: 2618"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1476.9820777873344,
            "unit": "iter/sec",
            "range": "stddev: 0.0001923102427463336",
            "extra": "mean: 677.0562859490476 usec\nrounds: 2434"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1735569788862,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 778.3670189512535,
            "unit": "iter/sec",
            "range": "stddev: 0.00006329633943671518",
            "extra": "mean: 1.2847409713574036 msec\nrounds: 803"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1012.2499877064054,
            "unit": "iter/sec",
            "range": "stddev: 0.00008345627711337476",
            "extra": "mean: 987.8982584784596 usec\nrounds: 1091"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1204.2547375932506,
            "unit": "iter/sec",
            "range": "stddev: 0.00018928598674418278",
            "extra": "mean: 830.3890935887355 usec\nrounds: 1357"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2459.594817722832,
            "unit": "iter/sec",
            "range": "stddev: 0.00002033588936120976",
            "extra": "mean: 406.5710306406608 usec\nrounds: 2513"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 700.6507967977727,
            "unit": "iter/sec",
            "range": "stddev: 0.00009619715883169178",
            "extra": "mean: 1.4272445054945506 msec\nrounds: 728"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 934.752715417998,
            "unit": "iter/sec",
            "range": "stddev: 0.0000763727721651095",
            "extra": "mean: 1.069801652892578 msec\nrounds: 968"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1225.6738581139696,
            "unit": "iter/sec",
            "range": "stddev: 0.00006894941385001499",
            "extra": "mean: 815.8777258566729 usec\nrounds: 1284"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2201.568355361629,
            "unit": "iter/sec",
            "range": "stddev: 0.00003258033026544592",
            "extra": "mean: 454.22164502166464 usec\nrounds: 2310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 35.214574138416715,
            "unit": "iter/sec",
            "range": "stddev: 0.0057815955698521946",
            "extra": "mean: 28.39733333333336 msec\nrounds: 39"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 40.39002977040566,
            "unit": "iter/sec",
            "range": "stddev: 0.002794835084362767",
            "extra": "mean: 24.758585365854668 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1007.0124686451767,
            "unit": "iter/sec",
            "range": "stddev: 0.00009861797211225394",
            "extra": "mean: 993.0363636364789 usec\nrounds: 1045"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1583.1919994765653,
            "unit": "iter/sec",
            "range": "stddev: 0.00005898592268193693",
            "extra": "mean: 631.6353293413684 usec\nrounds: 1670"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1244.4467732338485,
            "unit": "iter/sec",
            "range": "stddev: 0.00034592998636977213",
            "extra": "mean: 803.5699248119521 usec\nrounds: 2660"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1708.8439471992551,
            "unit": "iter/sec",
            "range": "stddev: 0.00020354242463950482",
            "extra": "mean: 585.190942472524 usec\nrounds: 2451"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1735657816709,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 781.9212755005262,
            "unit": "iter/sec",
            "range": "stddev: 0.000030493377993998512",
            "extra": "mean: 1.2789011264079961 msec\nrounds: 799"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1059.414860361061,
            "unit": "iter/sec",
            "range": "stddev: 0.000013320229011088084",
            "extra": "mean: 943.9172862453414 usec\nrounds: 1076"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1335.7988136362706,
            "unit": "iter/sec",
            "range": "stddev: 0.000011425526149856344",
            "extra": "mean: 748.6157270029538 usec\nrounds: 1348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2444.177755539227,
            "unit": "iter/sec",
            "range": "stddev: 0.000008243325784660542",
            "extra": "mean: 409.13554578168686 usec\nrounds: 2501"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 702.3303008961685,
            "unit": "iter/sec",
            "range": "stddev: 0.00004541173924040905",
            "extra": "mean: 1.42383149171267 msec\nrounds: 724"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 942.8350923418104,
            "unit": "iter/sec",
            "range": "stddev: 0.000016961436254392243",
            "extra": "mean: 1.0606308654848682 msec\nrounds: 959"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1258.7568893412906,
            "unit": "iter/sec",
            "range": "stddev: 0.00004665165436271632",
            "extra": "mean: 794.4345794391652 usec\nrounds: 1284"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2255.6619666352203,
            "unit": "iter/sec",
            "range": "stddev: 0.000007214101062041967",
            "extra": "mean: 443.32883862545407 usec\nrounds: 2299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 40.69377931068775,
            "unit": "iter/sec",
            "range": "stddev: 0.0005930552045208679",
            "extra": "mean: 24.57378048780447 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 41.8527202773437,
            "unit": "iter/sec",
            "range": "stddev: 0.00019444197681101557",
            "extra": "mean: 23.89330952380971 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1018.942533600519,
            "unit": "iter/sec",
            "range": "stddev: 0.00003258157015860084",
            "extra": "mean: 981.4096153847028 usec\nrounds: 1040"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1645.8690748467798,
            "unit": "iter/sec",
            "range": "stddev: 0.000014938436876284313",
            "extra": "mean: 607.5817422434368 usec\nrounds: 1676"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2463.8755094472804,
            "unit": "iter/sec",
            "range": "stddev: 0.000020361432159536096",
            "extra": "mean: 405.86466165424457 usec\nrounds: 2660"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 2256.5053543809245,
            "unit": "iter/sec",
            "range": "stddev: 0.00002386344938916822",
            "extra": "mean: 443.16314076478295 usec\nrounds: 2458"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1735658821709,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 792.033170822046,
            "unit": "iter/sec",
            "range": "stddev: 0.000023762069631514358",
            "extra": "mean: 1.2625733830845831 msec\nrounds: 804"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1066.9989261550559,
            "unit": "iter/sec",
            "range": "stddev: 0.000030096294523652782",
            "extra": "mean: 937.2080659945111 usec\nrounds: 1091"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1260.3913030229642,
            "unit": "iter/sec",
            "range": "stddev: 0.00005259538725706015",
            "extra": "mean: 793.4043956044181 usec\nrounds: 1365"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2465.0595224082767,
            "unit": "iter/sec",
            "range": "stddev: 0.000010175878995769204",
            "extra": "mean: 405.6697174691486 usec\nrounds: 2513"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 713.7772682933607,
            "unit": "iter/sec",
            "range": "stddev: 0.0000516525005630101",
            "extra": "mean: 1.4009972640218664 msec\nrounds: 731"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 952.5092080804809,
            "unit": "iter/sec",
            "range": "stddev: 0.00002745912872918536",
            "extra": "mean: 1.0498586171310866 msec\nrounds: 969"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1267.709249386337,
            "unit": "iter/sec",
            "range": "stddev: 0.000017837455463758396",
            "extra": "mean: 788.8244094488324 usec\nrounds: 1270"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2164.7237228698787,
            "unit": "iter/sec",
            "range": "stddev: 0.00004264888324283636",
            "extra": "mean: 461.95271453590016 usec\nrounds: 2284"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 38.46944165827684,
            "unit": "iter/sec",
            "range": "stddev: 0.0016298615678908737",
            "extra": "mean: 25.994658536585394 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 41.78048533007605,
            "unit": "iter/sec",
            "range": "stddev: 0.0003886144212576361",
            "extra": "mean: 23.934619047618895 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1010.2559187195009,
            "unit": "iter/sec",
            "range": "stddev: 0.00006652074993888598",
            "extra": "mean: 989.8481973434016 usec\nrounds: 1054"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1550.686134428915,
            "unit": "iter/sec",
            "range": "stddev: 0.00005292211142234042",
            "extra": "mean: 644.8758248349715 usec\nrounds: 1667"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2157.953803443906,
            "unit": "iter/sec",
            "range": "stddev: 0.0001389143484859806",
            "extra": "mean: 463.4019497563327 usec\nrounds: 2667"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1425.3877918841797,
            "unit": "iter/sec",
            "range": "stddev: 0.00023623541561556107",
            "extra": "mean: 701.5634662326722 usec\nrounds: 2458"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1735829582369,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 756.0082763011228,
            "unit": "iter/sec",
            "range": "stddev: 0.00007201302280841757",
            "extra": "mean: 1.3227368421052756 msec\nrounds: 798"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1034.2035481432424,
            "unit": "iter/sec",
            "range": "stddev: 0.00003483251285677398",
            "extra": "mean: 966.9276437847756 usec\nrounds: 1078"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1284.7851278008222,
            "unit": "iter/sec",
            "range": "stddev: 0.00004398982779935129",
            "extra": "mean: 778.3402674591265 usec\nrounds: 1346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2387.6350861114006,
            "unit": "iter/sec",
            "range": "stddev: 0.0000215208172932059",
            "extra": "mean: 418.8244702119203 usec\nrounds: 2501"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 682.3813686159431,
            "unit": "iter/sec",
            "range": "stddev: 0.00021980644933009843",
            "extra": "mean: 1.4654561891516393 msec\nrounds: 719"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 910.5492410187301,
            "unit": "iter/sec",
            "range": "stddev: 0.00006863780446001356",
            "extra": "mean: 1.0982382445140382 msec\nrounds: 957"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1237.1810016055354,
            "unit": "iter/sec",
            "range": "stddev: 0.00003362127000474192",
            "extra": "mean: 808.2891660171497 usec\nrounds: 1283"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2166.1879728776016,
            "unit": "iter/sec",
            "range": "stddev: 0.000027794757689843594",
            "extra": "mean: 461.6404543468971 usec\nrounds: 2289"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 39.56707826078584,
            "unit": "iter/sec",
            "range": "stddev: 0.0009853327381541591",
            "extra": "mean: 25.27353658536573 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 40.78453530001039,
            "unit": "iter/sec",
            "range": "stddev: 0.0006563506991266548",
            "extra": "mean: 24.519097560975403 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 977.1928311389767,
            "unit": "iter/sec",
            "range": "stddev: 0.00008119768029184962",
            "extra": "mean: 1.0233394762366812 msec\nrounds: 1031"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1574.6492741203008,
            "unit": "iter/sec",
            "range": "stddev: 0.00005504401249326538",
            "extra": "mean: 635.06205250605 usec\nrounds: 1676"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1949.4906673858604,
            "unit": "iter/sec",
            "range": "stddev: 0.00022713600243058965",
            "extra": "mean: 512.9544945916231 usec\nrounds: 2681"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1493.9052555319768,
            "unit": "iter/sec",
            "range": "stddev: 0.0001394192863852159",
            "extra": "mean: 669.3864930837946 usec\nrounds: 2458"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1736175466873,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 501.98462967654905,
            "unit": "iter/sec",
            "range": "stddev: 0.0010523618927720379",
            "extra": "mean: 1.992092866756387 msec\nrounds: 743"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 528.3925064878777,
            "unit": "iter/sec",
            "range": "stddev: 0.0012354923173207631",
            "extra": "mean: 1.8925325164938573 msec\nrounds: 1061"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1051.3779009729758,
            "unit": "iter/sec",
            "range": "stddev: 0.0003442114308007585",
            "extra": "mean: 951.1327935222633 usec\nrounds: 1235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2223.0606947270207,
            "unit": "iter/sec",
            "range": "stddev: 0.000055506482040005934",
            "extra": "mean: 449.8302733577836 usec\nrounds: 2451"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 685.8710562414515,
            "unit": "iter/sec",
            "range": "stddev: 0.00011768730399426723",
            "extra": "mean: 1.457999999999947 msec\nrounds: 724"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 926.1289540801405,
            "unit": "iter/sec",
            "range": "stddev: 0.000035509947344179375",
            "extra": "mean: 1.079763239875413 msec\nrounds: 963"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1138.0245931316613,
            "unit": "iter/sec",
            "range": "stddev: 0.0003302418294627242",
            "extra": "mean: 878.7156323644645 usec\nrounds: 1273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2112.739072485936,
            "unit": "iter/sec",
            "range": "stddev: 0.00005003004200874642",
            "extra": "mean: 473.3192153365909 usec\nrounds: 2243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 39.276950616107584,
            "unit": "iter/sec",
            "range": "stddev: 0.0009444509051179364",
            "extra": "mean: 25.460225000000314 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 39.97429945040279,
            "unit": "iter/sec",
            "range": "stddev: 0.0012923350260334527",
            "extra": "mean: 25.016073170731296 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 934.6333479341548,
            "unit": "iter/sec",
            "range": "stddev: 0.00030302650350167077",
            "extra": "mean: 1.0699382835101345 msec\nrounds: 1037"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1468.7946585346074,
            "unit": "iter/sec",
            "range": "stddev: 0.00012636851647364108",
            "extra": "mean: 680.8303626305966 usec\nrounds: 1627"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1529.4662806105518,
            "unit": "iter/sec",
            "range": "stddev: 0.0003063320993491698",
            "extra": "mean: 653.8228483211851 usec\nrounds: 2591"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1393.8442977599645,
            "unit": "iter/sec",
            "range": "stddev: 0.00023242857015103255",
            "extra": "mean: 717.4402489625934 usec\nrounds: 2410"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1736262844171,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 746.4157958482384,
            "unit": "iter/sec",
            "range": "stddev: 0.00010651938086148057",
            "extra": "mean: 1.3397358490566034 msec\nrounds: 795"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 935.5495810874661,
            "unit": "iter/sec",
            "range": "stddev: 0.00016651719122512496",
            "extra": "mean: 1.0688904363974145 msec\nrounds: 1077"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1251.3689753463814,
            "unit": "iter/sec",
            "range": "stddev: 0.00006250042100202177",
            "extra": "mean: 799.1248142644723 usec\nrounds: 1346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2344.5208691124803,
            "unit": "iter/sec",
            "range": "stddev: 0.000021373629955488365",
            "extra": "mean: 426.5263803680922 usec\nrounds: 2445"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 616.7211652666015,
            "unit": "iter/sec",
            "range": "stddev: 0.0003823629510689059",
            "extra": "mean: 1.6214783216783415 msec\nrounds: 715"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 807.0470808547414,
            "unit": "iter/sec",
            "range": "stddev: 0.0003724568643231593",
            "extra": "mean: 1.2390850840336387 msec\nrounds: 952"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1021.5195828849468,
            "unit": "iter/sec",
            "range": "stddev: 0.0001514026146564831",
            "extra": "mean: 978.9337539431483 usec\nrounds: 1268"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1906.2911830233957,
            "unit": "iter/sec",
            "range": "stddev: 0.00009789411437238429",
            "extra": "mean: 524.578830823731 usec\nrounds: 2258"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 30.70006116987174,
            "unit": "iter/sec",
            "range": "stddev: 0.00879289624257533",
            "extra": "mean: 32.57322500000015 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 37.2373784885547,
            "unit": "iter/sec",
            "range": "stddev: 0.002147451848678155",
            "extra": "mean: 26.85473684210505 msec\nrounds: 38"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 932.6912356935635,
            "unit": "iter/sec",
            "range": "stddev: 0.00014822220339369698",
            "extra": "mean: 1.0721661807579705 msec\nrounds: 1029"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1563.9213985738386,
            "unit": "iter/sec",
            "range": "stddev: 0.00008155566631852295",
            "extra": "mean: 639.4183242916899 usec\nrounds: 1659"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1647.4777147808486,
            "unit": "iter/sec",
            "range": "stddev: 0.00018106086260059786",
            "extra": "mean: 606.9884836852086 usec\nrounds: 2605"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1653.0905937967093,
            "unit": "iter/sec",
            "range": "stddev: 0.0001680720473550769",
            "extra": "mean: 604.9275240888438 usec\nrounds: 2387"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1736347713484,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 639.7358510034578,
            "unit": "iter/sec",
            "range": "stddev: 0.0003909961745459217",
            "extra": "mean: 1.5631451612903198 msec\nrounds: 744"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 819.1545370822478,
            "unit": "iter/sec",
            "range": "stddev: 0.0005127503535818746",
            "extra": "mean: 1.2207708737864127 msec\nrounds: 1030"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1194.5895951246096,
            "unit": "iter/sec",
            "range": "stddev: 0.00007061584787687326",
            "extra": "mean: 837.1075757575877 usec\nrounds: 1320"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2276.813916185276,
            "unit": "iter/sec",
            "range": "stddev: 0.00004754017805672549",
            "extra": "mean: 439.2102459016352 usec\nrounds: 2440"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 643.1340842689386,
            "unit": "iter/sec",
            "range": "stddev: 0.0001691827822672704",
            "extra": "mean: 1.5548857142857182 msec\nrounds: 700"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 842.0336202646977,
            "unit": "iter/sec",
            "range": "stddev: 0.0002453276355287599",
            "extra": "mean: 1.187601036269365 msec\nrounds: 965"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1013.1301347368026,
            "unit": "iter/sec",
            "range": "stddev: 0.00039485574539162885",
            "extra": "mean: 987.0400313971377 usec\nrounds: 1274"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1782.6841465408413,
            "unit": "iter/sec",
            "range": "stddev: 0.0003229780723453734",
            "extra": "mean: 560.9518668466434 usec\nrounds: 2223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 30.81356737589204,
            "unit": "iter/sec",
            "range": "stddev: 0.003896439854146683",
            "extra": "mean: 32.45323684210551 msec\nrounds: 38"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 33.85725957559025,
            "unit": "iter/sec",
            "range": "stddev: 0.003739546203385579",
            "extra": "mean: 29.535763157894817 msec\nrounds: 38"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 723.6415292295403,
            "unit": "iter/sec",
            "range": "stddev: 0.0007378171532702356",
            "extra": "mean: 1.3818996832101358 msec\nrounds: 947"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1421.5630326804317,
            "unit": "iter/sec",
            "range": "stddev: 0.0001485686450046227",
            "extra": "mean: 703.4510443862961 usec\nrounds: 1532"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 997.4056927414931,
            "unit": "iter/sec",
            "range": "stddev: 0.0005476286623081055",
            "extra": "mean: 1.0026010551948787 msec\nrounds: 2464"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1235.3794541664324,
            "unit": "iter/sec",
            "range": "stddev: 0.0004894906719835401",
            "extra": "mean: 809.4678899081628 usec\nrounds: 2289"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1736436377471,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 699.6323654648883,
            "unit": "iter/sec",
            "range": "stddev: 0.00025462939465740314",
            "extra": "mean: 1.429322097378278 msec\nrounds: 801"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 958.690969406284,
            "unit": "iter/sec",
            "range": "stddev: 0.0001386467945649737",
            "extra": "mean: 1.0430889952153182 msec\nrounds: 1045"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1155.5942024904107,
            "unit": "iter/sec",
            "range": "stddev: 0.0002524734695374971",
            "extra": "mean: 865.3556740289187 usec\nrounds: 1313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2290.4860868064857,
            "unit": "iter/sec",
            "range": "stddev: 0.00005814075798135476",
            "extra": "mean: 436.58855024710135 usec\nrounds: 2428"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 651.0263764322774,
            "unit": "iter/sec",
            "range": "stddev: 0.00018362151674975854",
            "extra": "mean: 1.5360360750360846 msec\nrounds: 693"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 865.2494647893323,
            "unit": "iter/sec",
            "range": "stddev: 0.00013250351947442443",
            "extra": "mean: 1.155736051502183 msec\nrounds: 932"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 947.5667051131505,
            "unit": "iter/sec",
            "range": "stddev: 0.000544606636672896",
            "extra": "mean: 1.0553346741753533 msec\nrounds: 1243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1983.4163600648035,
            "unit": "iter/sec",
            "range": "stddev: 0.0000767829094797346",
            "extra": "mean: 504.1805745553734 usec\nrounds: 2193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 37.153861762865226,
            "unit": "iter/sec",
            "range": "stddev: 0.0013285399345232996",
            "extra": "mean: 26.9151025641024 msec\nrounds: 39"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 35.70420891664737,
            "unit": "iter/sec",
            "range": "stddev: 0.005277737895182202",
            "extra": "mean: 28.007902439024274 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 898.053471339317,
            "unit": "iter/sec",
            "range": "stddev: 0.00023923955617840585",
            "extra": "mean: 1.1135194416749423 msec\nrounds: 1003"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1304.9579535935818,
            "unit": "iter/sec",
            "range": "stddev: 0.0003048703337420416",
            "extra": "mean: 766.3082149476224 usec\nrounds: 1619"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1817.4988082274244,
            "unit": "iter/sec",
            "range": "stddev: 0.00018394318665428233",
            "extra": "mean: 550.206688154741 usec\nrounds: 2482"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1361.1460033141516,
            "unit": "iter/sec",
            "range": "stddev: 0.0002732012411704791",
            "extra": "mean: 734.6750440916518 usec\nrounds: 2268"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1736438226287,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 631.1047906127067,
            "unit": "iter/sec",
            "range": "stddev: 0.0005308115207816235",
            "extra": "mean: 1.5845229110511938 msec\nrounds: 742"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 825.5114547591381,
            "unit": "iter/sec",
            "range": "stddev: 0.0005607838782628766",
            "extra": "mean: 1.2113702290076311 msec\nrounds: 1048"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1082.1527121559132,
            "unit": "iter/sec",
            "range": "stddev: 0.0003767881070763012",
            "extra": "mean: 924.0839936608902 usec\nrounds: 1262"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2054.2060586418106,
            "unit": "iter/sec",
            "range": "stddev: 0.00021955522471476128",
            "extra": "mean: 486.8060805259113 usec\nrounds: 2434"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 565.6825740507508,
            "unit": "iter/sec",
            "range": "stddev: 0.0006621885156550872",
            "extra": "mean: 1.7677758620690407 msec\nrounds: 696"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 809.1289188926952,
            "unit": "iter/sec",
            "range": "stddev: 0.00021526969598692491",
            "extra": "mean: 1.2358969957080692 msec\nrounds: 932"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 972.9633174650279,
            "unit": "iter/sec",
            "range": "stddev: 0.00047189880724374505",
            "extra": "mean: 1.027787977254285 msec\nrounds: 1231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1846.6693791948057,
            "unit": "iter/sec",
            "range": "stddev: 0.0002775898767212877",
            "extra": "mean: 541.5154500672044 usec\nrounds: 2233"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 29.431154643059372,
            "unit": "iter/sec",
            "range": "stddev: 0.0061922063206869",
            "extra": "mean: 33.97759999999952 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.51548390776255,
            "unit": "iter/sec",
            "range": "stddev: 0.011399800070577613",
            "extra": "mean: 35.06866666666589 msec\nrounds: 39"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 913.8447479310986,
            "unit": "iter/sec",
            "range": "stddev: 0.0002333048288960541",
            "extra": "mean: 1.0942777777778476 msec\nrounds: 990"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1500.8013593793823,
            "unit": "iter/sec",
            "range": "stddev: 0.0000395816089878064",
            "extra": "mean: 666.3106971155224 usec\nrounds: 1664"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1747.2456929838709,
            "unit": "iter/sec",
            "range": "stddev: 0.00019619627335651303",
            "extra": "mean: 572.3293547184215 usec\nrounds: 2681"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1297.5512459370225,
            "unit": "iter/sec",
            "range": "stddev: 0.00041113409887780174",
            "extra": "mean: 770.6824706394184 usec\nrounds: 2299"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1736441813601,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 683.5451723014137,
            "unit": "iter/sec",
            "range": "stddev: 0.00018099330824907392",
            "extra": "mean: 1.4629611041405228 msec\nrounds: 797"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 943.2698331082316,
            "unit": "iter/sec",
            "range": "stddev: 0.00008474175597346664",
            "extra": "mean: 1.0601420345489403 msec\nrounds: 1042"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1140.776575602293,
            "unit": "iter/sec",
            "range": "stddev: 0.00021946926542443853",
            "extra": "mean: 876.5958395245209 usec\nrounds: 1346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2044.2643304890737,
            "unit": "iter/sec",
            "range": "stddev: 0.00018713066738266682",
            "extra": "mean: 489.1735305877778 usec\nrounds: 2501"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 580.4473324887982,
            "unit": "iter/sec",
            "range": "stddev: 0.0006718801705227455",
            "extra": "mean: 1.7228091922005664 msec\nrounds: 718"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 830.8603275938792,
            "unit": "iter/sec",
            "range": "stddev: 0.00016659291398549324",
            "extra": "mean: 1.2035717277486806 msec\nrounds: 955"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 945.4137021761136,
            "unit": "iter/sec",
            "range": "stddev: 0.00044610028334321055",
            "extra": "mean: 1.0577380015735356 msec\nrounds: 1271"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1948.4774738377314,
            "unit": "iter/sec",
            "range": "stddev: 0.00015007026537326468",
            "extra": "mean: 513.2212270488274 usec\nrounds: 2233"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 33.80449919103989,
            "unit": "iter/sec",
            "range": "stddev: 0.004741113974902949",
            "extra": "mean: 29.581861111110815 msec\nrounds: 36"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 33.982456339079015,
            "unit": "iter/sec",
            "range": "stddev: 0.00409683016071212",
            "extra": "mean: 29.426948717948438 msec\nrounds: 39"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 796.7661234923363,
            "unit": "iter/sec",
            "range": "stddev: 0.0005155656810135629",
            "extra": "mean: 1.2550734406438635 msec\nrounds: 994"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1406.5123726262673,
            "unit": "iter/sec",
            "range": "stddev: 0.0003269813884700922",
            "extra": "mean: 710.978459530207 usec\nrounds: 1532"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1440.014447950282,
            "unit": "iter/sec",
            "range": "stddev: 0.0005077786625753507",
            "extra": "mean: 694.4374769457356 usec\nrounds: 2711"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1119.951967537195,
            "unit": "iter/sec",
            "range": "stddev: 0.0006754001417328347",
            "extra": "mean: 892.8954356846458 usec\nrounds: 2410"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1736870000067,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 561.905143628813,
            "unit": "iter/sec",
            "range": "stddev: 0.000944830479033365",
            "extra": "mean: 1.7796598079561032 msec\nrounds: 729"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 786.4490225617958,
            "unit": "iter/sec",
            "range": "stddev: 0.0007161895818671093",
            "extra": "mean: 1.2715382323733824 msec\nrounds: 1007"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 944.0772181599956,
            "unit": "iter/sec",
            "range": "stddev: 0.000665594748020315",
            "extra": "mean: 1.059235389610394 msec\nrounds: 1232"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1577.8230728879646,
            "unit": "iter/sec",
            "range": "stddev: 0.00045632438411687777",
            "extra": "mean: 633.7846221057299 usec\nrounds: 2289"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 538.071377672779,
            "unit": "iter/sec",
            "range": "stddev: 0.000816547098795274",
            "extra": "mean: 1.8584894894895092 msec\nrounds: 666"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 818.0785905993941,
            "unit": "iter/sec",
            "range": "stddev: 0.0002677216725049102",
            "extra": "mean: 1.2223764458464985 msec\nrounds: 951"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1037.5439353225452,
            "unit": "iter/sec",
            "range": "stddev: 0.0003785628713033412",
            "extra": "mean: 963.8146067415701 usec\nrounds: 1246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1812.803636126068,
            "unit": "iter/sec",
            "range": "stddev: 0.0002244857806539426",
            "extra": "mean: 551.6317267197145 usec\nrounds: 2137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.745667424223896,
            "unit": "iter/sec",
            "range": "stddev: 0.009842342564870956",
            "extra": "mean: 43.964416666666395 msec\nrounds: 36"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.67290566983303,
            "unit": "iter/sec",
            "range": "stddev: 0.008640397421782397",
            "extra": "mean: 33.70077777777761 msec\nrounds: 36"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 656.9442646806372,
            "unit": "iter/sec",
            "range": "stddev: 0.0009691082693365042",
            "extra": "mean: 1.5221991480299075 msec\nrounds: 939"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1043.4464360917784,
            "unit": "iter/sec",
            "range": "stddev: 0.0007605785926912128",
            "extra": "mean: 958.3625621890983 usec\nrounds: 1608"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1248.406227838471,
            "unit": "iter/sec",
            "range": "stddev: 0.0006800074579223711",
            "extra": "mean: 801.02131637987 usec\nrounds: 2674"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1003.2213262817716,
            "unit": "iter/sec",
            "range": "stddev: 0.0007589509959718644",
            "extra": "mean: 996.789017341058 usec\nrounds: 2422"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1736872087952,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 556.0595420721512,
            "unit": "iter/sec",
            "range": "stddev: 0.0008889017095958877",
            "extra": "mean: 1.7983685636856594 msec\nrounds: 738"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 752.103186755789,
            "unit": "iter/sec",
            "range": "stddev: 0.0006786244015791195",
            "extra": "mean: 1.3296047904191426 msec\nrounds: 1002"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 912.693343948001,
            "unit": "iter/sec",
            "range": "stddev: 0.0006245447452489896",
            "extra": "mean: 1.0956582587469523 msec\nrounds: 1229"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1918.294732634549,
            "unit": "iter/sec",
            "range": "stddev: 0.00026241518338326647",
            "extra": "mean: 521.2963279248644 usec\nrounds: 2342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 393.1987571023796,
            "unit": "iter/sec",
            "range": "stddev: 0.001464466830960218",
            "extra": "mean: 2.5432430340557355 msec\nrounds: 646"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 651.5652683964763,
            "unit": "iter/sec",
            "range": "stddev: 0.0005281613128880324",
            "extra": "mean: 1.5347656612529903 msec\nrounds: 862"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 911.1120864618272,
            "unit": "iter/sec",
            "range": "stddev: 0.0003078428482153176",
            "extra": "mean: 1.0975598006644345 msec\nrounds: 1204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1647.7732414121856,
            "unit": "iter/sec",
            "range": "stddev: 0.00028288025924998867",
            "extra": "mean: 606.8796208530327 usec\nrounds: 2110"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.775016808764175,
            "unit": "iter/sec",
            "range": "stddev: 0.01304056894090695",
            "extra": "mean: 50.56885714285743 msec\nrounds: 35"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 34.31088443259485,
            "unit": "iter/sec",
            "range": "stddev: 0.002345435989423271",
            "extra": "mean: 29.145270270270686 msec\nrounds: 37"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 734.2307950109426,
            "unit": "iter/sec",
            "range": "stddev: 0.0005920526607192397",
            "extra": "mean: 1.3619695697796173 msec\nrounds: 953"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 931.88067325504,
            "unit": "iter/sec",
            "range": "stddev: 0.0007154373524798844",
            "extra": "mean: 1.073098765432081 msec\nrounds: 1539"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1204.8335365058863,
            "unit": "iter/sec",
            "range": "stddev: 0.0006545373848677663",
            "extra": "mean: 829.9901768173552 usec\nrounds: 2545"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1271.7185248287337,
            "unit": "iter/sec",
            "range": "stddev: 0.0005550323835506277",
            "extra": "mean: 786.3375271148724 usec\nrounds: 2305"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1737040046132,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 432.27589435529956,
            "unit": "iter/sec",
            "range": "stddev: 0.0015242712737465124",
            "extra": "mean: 2.3133374149659898 msec\nrounds: 735"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 672.7370483146286,
            "unit": "iter/sec",
            "range": "stddev: 0.000914519041210234",
            "extra": "mean: 1.4864648862512408 msec\nrounds: 1011"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 918.4866992519896,
            "unit": "iter/sec",
            "range": "stddev: 0.0006908549228466229",
            "extra": "mean: 1.0887473937449441 msec\nrounds: 1247"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1662.9107618099545,
            "unit": "iter/sec",
            "range": "stddev: 0.00042917057477678675",
            "extra": "mean: 601.3551797040357 usec\nrounds: 2365"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 507.87123106595465,
            "unit": "iter/sec",
            "range": "stddev: 0.0009849339584102992",
            "extra": "mean: 1.9690030441400115 msec\nrounds: 657"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 700.4262049829164,
            "unit": "iter/sec",
            "range": "stddev: 0.0007470050273987561",
            "extra": "mean: 1.4277021517554305 msec\nrounds: 883"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 971.4090465665705,
            "unit": "iter/sec",
            "range": "stddev: 0.0005322252420089883",
            "extra": "mean: 1.0294324553950611 msec\nrounds: 1177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1654.6530577504698,
            "unit": "iter/sec",
            "range": "stddev: 0.00038225632254457317",
            "extra": "mean: 604.3563001415642 usec\nrounds: 2119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.73646279446487,
            "unit": "iter/sec",
            "range": "stddev: 0.009853334256177564",
            "extra": "mean: 38.855378378378774 msec\nrounds: 37"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.104995963553126,
            "unit": "iter/sec",
            "range": "stddev: 0.007182484019940615",
            "extra": "mean: 36.89356756756781 msec\nrounds: 37"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 667.5912025849501,
            "unit": "iter/sec",
            "range": "stddev: 0.0009682372080672796",
            "extra": "mean: 1.4979226750261905 msec\nrounds: 957"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1024.3074510426395,
            "unit": "iter/sec",
            "range": "stddev: 0.0006985817476088314",
            "extra": "mean: 976.2693798449899 usec\nrounds: 1548"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1584.7276479692962,
            "unit": "iter/sec",
            "range": "stddev: 0.00043820967249516503",
            "extra": "mean: 631.0232558139699 usec\nrounds: 2494"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1083.3239261859674,
            "unit": "iter/sec",
            "range": "stddev: 0.000670040064414196",
            "extra": "mean: 923.0849387040458 usec\nrounds: 2284"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1737127444728,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 622.7277606300058,
            "unit": "iter/sec",
            "range": "stddev: 0.0008200696611477136",
            "extra": "mean: 1.6058381578947316 msec\nrounds: 760"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 891.3809566837656,
            "unit": "iter/sec",
            "range": "stddev: 0.0003158853318555148",
            "extra": "mean: 1.1218547945205533 msec\nrounds: 1095"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1212.00247565536,
            "unit": "iter/sec",
            "range": "stddev: 0.0001018648438080263",
            "extra": "mean: 825.080822924289 usec\nrounds: 1361"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1987.562121326114,
            "unit": "iter/sec",
            "range": "stddev: 0.00016152568231442207",
            "extra": "mean: 503.1289282836572 usec\nrounds: 2482"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 546.2651592385528,
            "unit": "iter/sec",
            "range": "stddev: 0.0005589389409374082",
            "extra": "mean: 1.8306128133705524 msec\nrounds: 718"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 722.8683669330617,
            "unit": "iter/sec",
            "range": "stddev: 0.0006536357948021089",
            "extra": "mean: 1.3833777292575884 msec\nrounds: 916"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 914.4138050976992,
            "unit": "iter/sec",
            "range": "stddev: 0.00046566451678144274",
            "extra": "mean: 1.0935967878275377 msec\nrounds: 1183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1866.0117279584663,
            "unit": "iter/sec",
            "range": "stddev: 0.00021323847717653383",
            "extra": "mean: 535.9023124115424 usec\nrounds: 2119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 34.26884096116486,
            "unit": "iter/sec",
            "range": "stddev: 0.0019689470788225014",
            "extra": "mean: 29.181027777777757 msec\nrounds: 36"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 38.02957369798614,
            "unit": "iter/sec",
            "range": "stddev: 0.0016929638157413948",
            "extra": "mean: 26.29532500000007 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 969.1931047233861,
            "unit": "iter/sec",
            "range": "stddev: 0.00008897482400050915",
            "extra": "mean: 1.0317861271675126 msec\nrounds: 1038"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1417.0336005678234,
            "unit": "iter/sec",
            "range": "stddev: 0.00015377856592942662",
            "extra": "mean: 705.6995681678171 usec\nrounds: 1621"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1866.049943777626,
            "unit": "iter/sec",
            "range": "stddev: 0.00019204203118520377",
            "extra": "mean: 535.8913373859667 usec\nrounds: 2632"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1330.6562564491148,
            "unit": "iter/sec",
            "range": "stddev: 0.0005719704176869141",
            "extra": "mean: 751.5088852988387 usec\nrounds: 2476"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1737386819976,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 428.2747452318077,
            "unit": "iter/sec",
            "range": "stddev: 0.0015833261025856838",
            "extra": "mean: 2.3349497282608636 msec\nrounds: 736"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 568.8691498147908,
            "unit": "iter/sec",
            "range": "stddev: 0.0012332291631747794",
            "extra": "mean: 1.7578734939758542 msec\nrounds: 996"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 771.7269997127668,
            "unit": "iter/sec",
            "range": "stddev: 0.0009688396468178942",
            "extra": "mean: 1.295795016077182 msec\nrounds: 1244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1419.6540478617112,
            "unit": "iter/sec",
            "range": "stddev: 0.0005492168998027595",
            "extra": "mean: 704.3969631236597 usec\nrounds: 2305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 423.858159172353,
            "unit": "iter/sec",
            "range": "stddev: 0.0014337989994744364",
            "extra": "mean: 2.3592798165137387 msec\nrounds: 654"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 538.0070087974708,
            "unit": "iter/sec",
            "range": "stddev: 0.0013468660206744682",
            "extra": "mean: 1.8587118451024558 msec\nrounds: 878"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 739.4223635030306,
            "unit": "iter/sec",
            "range": "stddev: 0.0009656098410135282",
            "extra": "mean: 1.3524070265639205 msec\nrounds: 1167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1070.2027262385966,
            "unit": "iter/sec",
            "range": "stddev: 0.00077291907355832",
            "extra": "mean: 934.4024038461052 usec\nrounds: 2080"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.003257737224907,
            "unit": "iter/sec",
            "range": "stddev: 0.01223366785714435",
            "extra": "mean: 43.47210344827615 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.562842350841983,
            "unit": "iter/sec",
            "range": "stddev: 0.009038510952139006",
            "extra": "mean: 44.320657142856945 msec\nrounds: 35"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 546.189502851683,
            "unit": "iter/sec",
            "range": "stddev: 0.0012705873047140189",
            "extra": "mean: 1.830866383881326 msec\nrounds: 943"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 917.0792130899722,
            "unit": "iter/sec",
            "range": "stddev: 0.0007870026777880151",
            "extra": "mean: 1.0904183474300302 msec\nrounds: 1537"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1077.8970847963649,
            "unit": "iter/sec",
            "range": "stddev: 0.0008139916853671715",
            "extra": "mean: 927.7323541411367 usec\nrounds: 2451"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 933.6017245803959,
            "unit": "iter/sec",
            "range": "stddev: 0.0007729232660478694",
            "extra": "mean: 1.0711205578047176 msec\nrounds: 2223"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1737390451153,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 446.3222693112095,
            "unit": "iter/sec",
            "range": "stddev: 0.0016252224306859157",
            "extra": "mean: 2.2405335085413918 msec\nrounds: 761"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 732.0127832320981,
            "unit": "iter/sec",
            "range": "stddev: 0.0006712216947774588",
            "extra": "mean: 1.3660963618485493 msec\nrounds: 1017"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 817.7509957991757,
            "unit": "iter/sec",
            "range": "stddev: 0.0007091286426500762",
            "extra": "mean: 1.2228661354581598 msec\nrounds: 1255"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1733.4475258137136,
            "unit": "iter/sec",
            "range": "stddev: 0.00026393268117132224",
            "extra": "mean: 576.8850715746822 usec\nrounds: 2445"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 515.3661265529945,
            "unit": "iter/sec",
            "range": "stddev: 0.0007882024454815703",
            "extra": "mean: 1.9403681159420771 msec\nrounds: 690"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 614.110066408056,
            "unit": "iter/sec",
            "range": "stddev: 0.00091308607034193",
            "extra": "mean: 1.6283725910064024 msec\nrounds: 934"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 943.5374593583517,
            "unit": "iter/sec",
            "range": "stddev: 0.000580349044178034",
            "extra": "mean: 1.0598413344182913 msec\nrounds: 1229"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1862.0355357949102,
            "unit": "iter/sec",
            "range": "stddev: 0.00016640122947780728",
            "extra": "mean: 537.0466786355375 usec\nrounds: 2228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.41388573504918,
            "unit": "iter/sec",
            "range": "stddev: 0.010986922834140106",
            "extra": "mean: 39.34856756756661 msec\nrounds: 37"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 32.72757322589958,
            "unit": "iter/sec",
            "range": "stddev: 0.0038474008808307143",
            "extra": "mean: 30.555275000000037 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 701.0916899315491,
            "unit": "iter/sec",
            "range": "stddev: 0.0008453368455789342",
            "extra": "mean: 1.4263469591226146 msec\nrounds: 1003"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1044.6512268362599,
            "unit": "iter/sec",
            "range": "stddev: 0.0006432712142873784",
            "extra": "mean: 957.2572877059775 usec\nrounds: 1578"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1794.0682814407799,
            "unit": "iter/sec",
            "range": "stddev: 0.0002895852917950481",
            "extra": "mean: 557.3923859781526 usec\nrounds: 2653"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1221.337617451379,
            "unit": "iter/sec",
            "range": "stddev: 0.0005340839164758574",
            "extra": "mean: 818.7744205298005 usec\nrounds: 2416"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1737392357240,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 794.9235082886532,
            "unit": "iter/sec",
            "range": "stddev: 0.00003998995780735218",
            "extra": "mean: 1.2579826732673245 msec\nrounds: 808"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1073.4887215557208,
            "unit": "iter/sec",
            "range": "stddev: 0.00002386588719035951",
            "extra": "mean: 931.5421577515789 usec\nrounds: 1103"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1289.1643982543878,
            "unit": "iter/sec",
            "range": "stddev: 0.00004102959294219004",
            "extra": "mean: 775.6962582538463 usec\nrounds: 1363"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2378.211498779152,
            "unit": "iter/sec",
            "range": "stddev: 0.00001852338738491444",
            "extra": "mean: 420.48404883810673 usec\nrounds: 2539"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 698.0004226780433,
            "unit": "iter/sec",
            "range": "stddev: 0.00004770214524310611",
            "extra": "mean: 1.4326638888888694 msec\nrounds: 720"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 908.811824474811,
            "unit": "iter/sec",
            "range": "stddev: 0.00006142269639016753",
            "extra": "mean: 1.1003377960865388 msec\nrounds: 971"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1262.4267041772632,
            "unit": "iter/sec",
            "range": "stddev: 0.00001102833144768094",
            "extra": "mean: 792.125195618157 usec\nrounds: 1278"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2083.4173544174846,
            "unit": "iter/sec",
            "range": "stddev: 0.00010686364046427631",
            "extra": "mean: 479.980642322909 usec\nrounds: 2273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 37.3186546624995,
            "unit": "iter/sec",
            "range": "stddev: 0.003222986556929876",
            "extra": "mean: 26.796249999999944 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 41.33357871045196,
            "unit": "iter/sec",
            "range": "stddev: 0.0014390998890659312",
            "extra": "mean: 24.19340476190443 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 995.4554877586636,
            "unit": "iter/sec",
            "range": "stddev: 0.0001450073967519551",
            "extra": "mean: 1.0045652591172798 msec\nrounds: 1042"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1536.0180656252248,
            "unit": "iter/sec",
            "range": "stddev: 0.0001151706613280626",
            "extra": "mean: 651.0340095465983 usec\nrounds: 1676"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2261.958618062377,
            "unit": "iter/sec",
            "range": "stddev: 0.00006120089742143766",
            "extra": "mean: 442.094736842097 usec\nrounds: 2755"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1594.0020361111472,
            "unit": "iter/sec",
            "range": "stddev: 0.00018728383402820523",
            "extra": "mean: 627.3517707917606 usec\nrounds: 2513"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1737471615531,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 673.5238822552872,
            "unit": "iter/sec",
            "range": "stddev: 0.0001430280509125711",
            "extra": "mean: 1.4847283464567156 msec\nrounds: 762"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 941.1005036948505,
            "unit": "iter/sec",
            "range": "stddev: 0.00008910426880679481",
            "extra": "mean: 1.0625857664233571 msec\nrounds: 1096"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1076.112686190596,
            "unit": "iter/sec",
            "range": "stddev: 0.000360620848931429",
            "extra": "mean: 929.2707100591552 usec\nrounds: 1352"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2196.1390149892163,
            "unit": "iter/sec",
            "range": "stddev: 0.00006911627258201528",
            "extra": "mean: 455.3445811830406 usec\nrounds: 2519"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 612.6662570863738,
            "unit": "iter/sec",
            "range": "stddev: 0.00015805025155494123",
            "extra": "mean: 1.6322100139081428 msec\nrounds: 719"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 852.349670477889,
            "unit": "iter/sec",
            "range": "stddev: 0.0001339295405265584",
            "extra": "mean: 1.173227414330233 msec\nrounds: 963"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1117.1951625276197,
            "unit": "iter/sec",
            "range": "stddev: 0.0001328276038362784",
            "extra": "mean: 895.0987558319987 usec\nrounds: 1286"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2012.7238541114718,
            "unit": "iter/sec",
            "range": "stddev: 0.000049279482088100546",
            "extra": "mean: 496.839145597276 usec\nrounds: 2294"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 35.72726330034513,
            "unit": "iter/sec",
            "range": "stddev: 0.001682352607250257",
            "extra": "mean: 27.989829268292706 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 34.01396354188952,
            "unit": "iter/sec",
            "range": "stddev: 0.006050131369216733",
            "extra": "mean: 29.399690476191086 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 956.2160411381508,
            "unit": "iter/sec",
            "range": "stddev: 0.00015211037066636517",
            "extra": "mean: 1.045788772597597 msec\nrounds: 1051"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1508.3654213234004,
            "unit": "iter/sec",
            "range": "stddev: 0.00004360863841016643",
            "extra": "mean: 662.9693215339199 usec\nrounds: 1695"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1845.3089098928651,
            "unit": "iter/sec",
            "range": "stddev: 0.00021538554989345213",
            "extra": "mean: 541.9146868250141 usec\nrounds: 2778"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1688.4866442925563,
            "unit": "iter/sec",
            "range": "stddev: 0.00014289863301873641",
            "extra": "mean: 592.2463191404046 usec\nrounds: 2513"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1737472597145,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 683.1350368901793,
            "unit": "iter/sec",
            "range": "stddev: 0.00011994573527603246",
            "extra": "mean: 1.4638394255874771 msec\nrounds: 766"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 962.0256411900887,
            "unit": "iter/sec",
            "range": "stddev: 0.000056524236206053404",
            "extra": "mean: 1.0394733333333346 msec\nrounds: 1050"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1190.4399394027216,
            "unit": "iter/sec",
            "range": "stddev: 0.00004526490191266947",
            "extra": "mean: 840.0255795363595 usec\nrounds: 1251"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2230.317911490117,
            "unit": "iter/sec",
            "range": "stddev: 0.00003159941127371047",
            "extra": "mean: 448.36657359393286 usec\nrounds: 2507"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 620.6906090720894,
            "unit": "iter/sec",
            "range": "stddev: 0.00008524778492540521",
            "extra": "mean: 1.6111086350975485 msec\nrounds: 718"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 860.6340689682404,
            "unit": "iter/sec",
            "range": "stddev: 0.00007792095004958451",
            "extra": "mean: 1.16193401592716 msec\nrounds: 879"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1121.2643387336263,
            "unit": "iter/sec",
            "range": "stddev: 0.00006469308693437415",
            "extra": "mean: 891.8503562945878 usec\nrounds: 1263"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1998.6510433171582,
            "unit": "iter/sec",
            "range": "stddev: 0.000037826287473948475",
            "extra": "mean: 500.3374667847478 usec\nrounds: 2258"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 36.19813623742412,
            "unit": "iter/sec",
            "range": "stddev: 0.0013058969144686204",
            "extra": "mean: 27.62573170731733 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 36.30175052227083,
            "unit": "iter/sec",
            "range": "stddev: 0.0011775656204056194",
            "extra": "mean: 27.546880952380196 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 921.046938070933,
            "unit": "iter/sec",
            "range": "stddev: 0.00008571121563584685",
            "extra": "mean: 1.0857209971235868 msec\nrounds: 1043"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1515.4444027035404,
            "unit": "iter/sec",
            "range": "stddev: 0.000037015551980731824",
            "extra": "mean: 659.8724428398746 usec\nrounds: 1662"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2265.2548411697207,
            "unit": "iter/sec",
            "range": "stddev: 0.00006509806053932283",
            "extra": "mean: 441.4514348785699 usec\nrounds: 2718"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 2155.449805789146,
            "unit": "iter/sec",
            "range": "stddev: 0.00004688777772078164",
            "extra": "mean: 463.94028629856376 usec\nrounds: 2445"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1737557804558,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 754.922941592412,
            "unit": "iter/sec",
            "range": "stddev: 0.00011236185440856848",
            "extra": "mean: 1.3246385093167652 msec\nrounds: 805"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 986.1808365123372,
            "unit": "iter/sec",
            "range": "stddev: 0.00011559902047776375",
            "extra": "mean: 1.0140128087831586 msec\nrounds: 1093"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1251.1314158544799,
            "unit": "iter/sec",
            "range": "stddev: 0.000214593705685259",
            "extra": "mean: 799.2765486725743 usec\nrounds: 1356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2372.6399754793006,
            "unit": "iter/sec",
            "range": "stddev: 0.00003231085884971364",
            "extra": "mean: 421.47144545096376 usec\nrounds: 2539"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 656.5785726852588,
            "unit": "iter/sec",
            "range": "stddev: 0.00033330324290864623",
            "extra": "mean: 1.5230469613259305 msec\nrounds: 724"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 854.0479373447996,
            "unit": "iter/sec",
            "range": "stddev: 0.0000644198631351887",
            "extra": "mean: 1.170894461860021 msec\nrounds: 957"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 821.8531230072734,
            "unit": "iter/sec",
            "range": "stddev: 0.00060567328430623",
            "extra": "mean: 1.2167624262847145 msec\nrounds: 1187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1581.8654294545915,
            "unit": "iter/sec",
            "range": "stddev: 0.00035766040754493285",
            "extra": "mean: 632.1650257852768 usec\nrounds: 2133"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.13354688167458,
            "unit": "iter/sec",
            "range": "stddev: 0.012507285504259029",
            "extra": "mean: 43.22726666666744 msec\nrounds: 30"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.292659267461758,
            "unit": "iter/sec",
            "range": "stddev: 0.006539585735857725",
            "extra": "mean: 35.34485714285824 msec\nrounds: 35"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 630.8664570708437,
            "unit": "iter/sec",
            "range": "stddev: 0.0009527027595757231",
            "extra": "mean: 1.5851215242019185 msec\nrounds: 971"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1121.5278539011113,
            "unit": "iter/sec",
            "range": "stddev: 0.0006128488711515394",
            "extra": "mean: 891.6408063532349 usec\nrounds: 1637"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1433.7167506513103,
            "unit": "iter/sec",
            "range": "stddev: 0.0005040600232347672",
            "extra": "mean: 697.4878402904332 usec\nrounds: 2755"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1363.7785423834084,
            "unit": "iter/sec",
            "range": "stddev: 0.00039538537908268245",
            "extra": "mean: 733.2568807339858 usec\nrounds: 2507"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1737560349482,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 560.6715363986929,
            "unit": "iter/sec",
            "range": "stddev: 0.0009649313326617732",
            "extra": "mean: 1.7835754716981054 msec\nrounds: 742"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 838.9665925164273,
            "unit": "iter/sec",
            "range": "stddev: 0.0005062613217853829",
            "extra": "mean: 1.1919425742574126 msec\nrounds: 1010"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1028.2703576715373,
            "unit": "iter/sec",
            "range": "stddev: 0.00048683266396142396",
            "extra": "mean: 972.5068825911175 usec\nrounds: 1235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1629.7755415395068,
            "unit": "iter/sec",
            "range": "stddev: 0.00044789125105873214",
            "extra": "mean: 613.5814254859827 usec\nrounds: 2315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 513.146789986038,
            "unit": "iter/sec",
            "range": "stddev: 0.0011350396598614032",
            "extra": "mean: 1.948760119939966 msec\nrounds: 667"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 832.0092606248179,
            "unit": "iter/sec",
            "range": "stddev: 0.00023222101081383627",
            "extra": "mean: 1.2019096989966498 msec\nrounds: 897"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1111.1069190457215,
            "unit": "iter/sec",
            "range": "stddev: 0.00011169008275082424",
            "extra": "mean: 900.0033955857767 usec\nrounds: 1178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1857.248859904418,
            "unit": "iter/sec",
            "range": "stddev: 0.0001803916730685712",
            "extra": "mean: 538.4308056872165 usec\nrounds: 2110"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 33.44338684894516,
            "unit": "iter/sec",
            "range": "stddev: 0.003409598397894082",
            "extra": "mean: 29.90127777777809 msec\nrounds: 36"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.20091519391042,
            "unit": "iter/sec",
            "range": "stddev: 0.009761536616205673",
            "extra": "mean: 35.45984210526386 msec\nrounds: 38"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 934.345005677984,
            "unit": "iter/sec",
            "range": "stddev: 0.0001371207904802415",
            "extra": "mean: 1.0702684703434306 msec\nrounds: 961"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1409.7353155622034,
            "unit": "iter/sec",
            "range": "stddev: 0.0002067951931769303",
            "extra": "mean: 709.3530175210226 usec\nrounds: 1541"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1524.080533070694,
            "unit": "iter/sec",
            "range": "stddev: 0.0003949981165510619",
            "extra": "mean: 656.1333068044742 usec\nrounds: 2513"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1309.437701375619,
            "unit": "iter/sec",
            "range": "stddev: 0.0005487032901299072",
            "extra": "mean: 763.686580086596 usec\nrounds: 2310"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1737729392141,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 651.7819883531906,
            "unit": "iter/sec",
            "range": "stddev: 0.000455596173165999",
            "extra": "mean: 1.5342553459119455 msec\nrounds: 795"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 884.0975802314526,
            "unit": "iter/sec",
            "range": "stddev: 0.0004896887443309412",
            "extra": "mean: 1.1310968634686283 msec\nrounds: 1084"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1050.8169702313364,
            "unit": "iter/sec",
            "range": "stddev: 0.00047852438580762367",
            "extra": "mean: 951.6405124099308 usec\nrounds: 1249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2005.1986009696739,
            "unit": "iter/sec",
            "range": "stddev: 0.00022604286462054077",
            "extra": "mean: 498.703719180943 usec\nrounds: 2393"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 587.1178558356187,
            "unit": "iter/sec",
            "range": "stddev: 0.0006773637099601656",
            "extra": "mean: 1.7032355430184363 msec\nrounds: 709"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 817.1854005222294,
            "unit": "iter/sec",
            "range": "stddev: 0.00037824496657553876",
            "extra": "mean: 1.2237125129266153 msec\nrounds: 967"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1035.8244261361613,
            "unit": "iter/sec",
            "range": "stddev: 0.0003288915640944034",
            "extra": "mean: 965.4145768025633 usec\nrounds: 1276"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1849.069309933403,
            "unit": "iter/sec",
            "range": "stddev: 0.0002668594072824326",
            "extra": "mean: 540.8126102293139 usec\nrounds: 2268"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 31.54726028648224,
            "unit": "iter/sec",
            "range": "stddev: 0.005740373355108536",
            "extra": "mean: 31.698473684210615 msec\nrounds: 38"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 32.77211093359581,
            "unit": "iter/sec",
            "range": "stddev: 0.006609329814933114",
            "extra": "mean: 30.513749999999717 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 764.1850464859517,
            "unit": "iter/sec",
            "range": "stddev: 0.0005843276414592113",
            "extra": "mean: 1.308583574879443 msec\nrounds: 1035"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1207.7601492860765,
            "unit": "iter/sec",
            "range": "stddev: 0.00045627543497089255",
            "extra": "mean: 827.9789663461853 usec\nrounds: 1664"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1577.299847884951,
            "unit": "iter/sec",
            "range": "stddev: 0.0004136241217222274",
            "extra": "mean: 633.9948623851895 usec\nrounds: 2725"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1062.2113533023019,
            "unit": "iter/sec",
            "range": "stddev: 0.0007399637990502719",
            "extra": "mean: 941.4322271091405 usec\nrounds: 2501"
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
        "date": 1738381581062,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 725.8760628409117,
            "unit": "iter/sec",
            "range": "stddev: 0.00013626511327304586",
            "extra": "mean: 1.3776456494325358 msec\nrounds: 793"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 939.9314198186279,
            "unit": "iter/sec",
            "range": "stddev: 0.00007841317069831861",
            "extra": "mean: 1.0639074074074075 msec\nrounds: 1080"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1189.0503885253652,
            "unit": "iter/sec",
            "range": "stddev: 0.000055209475977291326",
            "extra": "mean: 841.0072522159289 usec\nrounds: 1241"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2253.841133328981,
            "unit": "iter/sec",
            "range": "stddev: 0.000017786141708271953",
            "extra": "mean: 443.68699515345804 usec\nrounds: 2476"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 632.9186961342133,
            "unit": "iter/sec",
            "range": "stddev: 0.00015093684390125476",
            "extra": "mean: 1.5799817671809546 msec\nrounds: 713"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 884.7692111409085,
            "unit": "iter/sec",
            "range": "stddev: 0.00005811221002713466",
            "extra": "mean: 1.130238244514071 msec\nrounds: 957"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1182.7326684899542,
            "unit": "iter/sec",
            "range": "stddev: 0.000028064856388589862",
            "extra": "mean: 845.499601593607 usec\nrounds: 1255"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2053.7512442418374,
            "unit": "iter/sec",
            "range": "stddev: 0.00004957664046951949",
            "extra": "mean: 486.9138863841127 usec\nrounds: 2218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 38.07764984745173,
            "unit": "iter/sec",
            "range": "stddev: 0.0007798111272804999",
            "extra": "mean: 26.26212499999978 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 39.203679918755256,
            "unit": "iter/sec",
            "range": "stddev: 0.0004812418507687975",
            "extra": "mean: 25.507809523809385 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 971.2376368962101,
            "unit": "iter/sec",
            "range": "stddev: 0.00008557276437445457",
            "extra": "mean: 1.0296141356256598 msec\nrounds: 1047"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1554.1288177359934,
            "unit": "iter/sec",
            "range": "stddev: 0.0000306099063182129",
            "extra": "mean: 643.4473053892463 usec\nrounds: 1670"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2399.437800482499,
            "unit": "iter/sec",
            "range": "stddev: 0.00005214829260871872",
            "extra": "mean: 416.7642936186601 usec\nrounds: 2711"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 2076.642883681909,
            "unit": "iter/sec",
            "range": "stddev: 0.00010596400696085776",
            "extra": "mean: 481.5464458804731 usec\nrounds: 2476"
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
        "date": 1738382141148,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 739.0414159922229,
            "unit": "iter/sec",
            "range": "stddev: 0.00015720161316386613",
            "extra": "mean: 1.3531041405269812 msec\nrounds: 797"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1008.1538597890577,
            "unit": "iter/sec",
            "range": "stddev: 0.0001447763392778729",
            "extra": "mean: 991.9120879120934 usec\nrounds: 1092"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1290.8262998021946,
            "unit": "iter/sec",
            "range": "stddev: 0.00007447643814964524",
            "extra": "mean: 774.6975717439592 usec\nrounds: 1359"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2372.8022046479596,
            "unit": "iter/sec",
            "range": "stddev: 0.00006630229171239975",
            "extra": "mean: 421.44262932711024 usec\nrounds: 2571"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 684.0635830023647,
            "unit": "iter/sec",
            "range": "stddev: 0.00010201098960595364",
            "extra": "mean: 1.4618524137931534 msec\nrounds: 725"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 907.6554713076553,
            "unit": "iter/sec",
            "range": "stddev: 0.00013915473075929932",
            "extra": "mean: 1.1017396265559931 msec\nrounds: 964"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1152.3999670230392,
            "unit": "iter/sec",
            "range": "stddev: 0.00027036717554472365",
            "extra": "mean: 867.7542768274027 usec\nrounds: 1286"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2023.5449529198822,
            "unit": "iter/sec",
            "range": "stddev: 0.00013104638388869642",
            "extra": "mean: 494.18225108221384 usec\nrounds: 2310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 38.110677124484425,
            "unit": "iter/sec",
            "range": "stddev: 0.002201719972612907",
            "extra": "mean: 26.239365853658477 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 35.46734133431413,
            "unit": "iter/sec",
            "range": "stddev: 0.005495951773816095",
            "extra": "mean: 28.1949523809532 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 876.4052776859652,
            "unit": "iter/sec",
            "range": "stddev: 0.0003395185542534737",
            "extra": "mean: 1.1410246212121984 msec\nrounds: 1056"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1587.8134375784202,
            "unit": "iter/sec",
            "range": "stddev: 0.00008522126854935225",
            "extra": "mean: 629.7969121139971 usec\nrounds: 1684"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2278.798524270859,
            "unit": "iter/sec",
            "range": "stddev: 0.00012129469918195912",
            "extra": "mean: 438.82773722611887 usec\nrounds: 2740"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1547.8229385121786,
            "unit": "iter/sec",
            "range": "stddev: 0.00019161510984403005",
            "extra": "mean: 646.0687299034571 usec\nrounds: 2488"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1739373313993,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 784.7235249112932,
            "unit": "iter/sec",
            "range": "stddev: 0.00003630440394623397",
            "extra": "mean: 1.27433416770963 msec\nrounds: 799"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1060.9435742445207,
            "unit": "iter/sec",
            "range": "stddev: 0.000029696051107969133",
            "extra": "mean: 942.5571955719533 usec\nrounds: 1084"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1318.087293638458,
            "unit": "iter/sec",
            "range": "stddev: 0.000021019814483036994",
            "extra": "mean: 758.675092936821 usec\nrounds: 1345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2373.660248641029,
            "unit": "iter/sec",
            "range": "stddev: 0.000038578580865051393",
            "extra": "mean: 421.2902838864666 usec\nrounds: 2501"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 684.6143196108085,
            "unit": "iter/sec",
            "range": "stddev: 0.0001230116661795046",
            "extra": "mean: 1.4606764295676475 msec\nrounds: 717"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 916.905772873155,
            "unit": "iter/sec",
            "range": "stddev: 0.00009727816077032172",
            "extra": "mean: 1.0906246089676876 msec\nrounds: 959"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1241.6870518438839,
            "unit": "iter/sec",
            "range": "stddev: 0.000022922714752453284",
            "extra": "mean: 805.3559055117931 usec\nrounds: 1270"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2178.6262673510514,
            "unit": "iter/sec",
            "range": "stddev: 0.000038639261045875536",
            "extra": "mean: 459.00483941923653 usec\nrounds: 2273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 38.63011943302269,
            "unit": "iter/sec",
            "range": "stddev: 0.0011120442234363425",
            "extra": "mean: 25.886536585366 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 40.468782670110606,
            "unit": "iter/sec",
            "range": "stddev: 0.0008177612526391613",
            "extra": "mean: 24.71040476190501 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 932.6425807875104,
            "unit": "iter/sec",
            "range": "stddev: 0.0001224715466689802",
            "extra": "mean: 1.0722221144520485 msec\nrounds: 1031"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1569.3976022721527,
            "unit": "iter/sec",
            "range": "stddev: 0.00006172892435234087",
            "extra": "mean: 637.1871592974358 usec\nrounds: 1651"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2510.207960570564,
            "unit": "iter/sec",
            "range": "stddev: 0.000022253955362772727",
            "extra": "mean: 398.3733681462401 usec\nrounds: 2681"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 2194.1457516438195,
            "unit": "iter/sec",
            "range": "stddev: 0.000028962538391856405",
            "extra": "mean: 455.7582372323332 usec\nrounds: 2428"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1739809266773,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 744.6393469681764,
            "unit": "iter/sec",
            "range": "stddev: 0.00010976594569408968",
            "extra": "mean: 1.3429319899244283 msec\nrounds: 794"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 973.90688438333,
            "unit": "iter/sec",
            "range": "stddev: 0.00004331497491139776",
            "extra": "mean: 1.0267922077922182 msec\nrounds: 1078"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1217.3281241037105,
            "unit": "iter/sec",
            "range": "stddev: 0.00004285750604470509",
            "extra": "mean: 821.4712041884977 usec\nrounds: 1337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2241.371235891971,
            "unit": "iter/sec",
            "range": "stddev: 0.000045043717946889746",
            "extra": "mean: 446.1554534057551 usec\nrounds: 2393"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 628.3212985190595,
            "unit": "iter/sec",
            "range": "stddev: 0.0001215885594706086",
            "extra": "mean: 1.5915424200277464 msec\nrounds: 719"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 863.5140859603673,
            "unit": "iter/sec",
            "range": "stddev: 0.00008149377120873334",
            "extra": "mean: 1.1580587002096652 msec\nrounds: 954"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1109.5538425601706,
            "unit": "iter/sec",
            "range": "stddev: 0.00004927701683121099",
            "extra": "mean: 901.2631578947198 usec\nrounds: 1254"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2081.7930836585847,
            "unit": "iter/sec",
            "range": "stddev: 0.000028585383543928756",
            "extra": "mean: 480.35513608421644 usec\nrounds: 2278"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 38.80341621490655,
            "unit": "iter/sec",
            "range": "stddev: 0.0007091588817127288",
            "extra": "mean: 25.77092682926831 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 40.03945351028772,
            "unit": "iter/sec",
            "range": "stddev: 0.00023442394887216464",
            "extra": "mean: 24.975365853658825 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 976.3692258975099,
            "unit": "iter/sec",
            "range": "stddev: 0.000028131565169268656",
            "extra": "mean: 1.024202702702728 msec\nrounds: 1036"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1572.7794800079416,
            "unit": "iter/sec",
            "range": "stddev: 0.00002661874233271222",
            "extra": "mean: 635.817044100137 usec\nrounds: 1678"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2370.985661477905,
            "unit": "iter/sec",
            "range": "stddev: 0.00003447819559032731",
            "extra": "mean: 421.76551982042383 usec\nrounds: 2674"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 2281.7189952162344,
            "unit": "iter/sec",
            "range": "stddev: 0.00001882292437143232",
            "extra": "mean: 438.26606260304715 usec\nrounds: 2428"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "67c42a2bd52df3a39e1ae869e3638f3835911851",
          "message": "Merge pull request #1580 from TeoZosa/dependabot/pip/docs/sphinx-autoapi-3.6.0",
          "timestamp": "2025-02-18T14:26:18Z",
          "tree_id": "e7856148a644df0403cc3db6bd0396a5b212ffa8",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/67c42a2bd52df3a39e1ae869e3638f3835911851"
        },
        "date": 1739890014311,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 583.8136503993732,
            "unit": "iter/sec",
            "range": "stddev: 0.0007638205659361976",
            "extra": "mean: 1.7128753315650014 msec\nrounds: 754"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 684.729774333018,
            "unit": "iter/sec",
            "range": "stddev: 0.0010481558828985976",
            "extra": "mean: 1.4604301397205646 msec\nrounds: 1002"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 842.4725349890219,
            "unit": "iter/sec",
            "range": "stddev: 0.0008427872510018516",
            "extra": "mean: 1.1869823151125405 msec\nrounds: 1244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1996.289091166555,
            "unit": "iter/sec",
            "range": "stddev: 0.00016281260915884056",
            "extra": "mean: 500.92945176374144 usec\nrounds: 2353"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 507.54444469185387,
            "unit": "iter/sec",
            "range": "stddev: 0.0008924475373143322",
            "extra": "mean: 1.9702708018154573 msec\nrounds: 661"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 758.3038984181106,
            "unit": "iter/sec",
            "range": "stddev: 0.0005286304633522022",
            "extra": "mean: 1.3187325056433035 msec\nrounds: 886"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 537.7987231290513,
            "unit": "iter/sec",
            "range": "stddev: 0.001004108059394037",
            "extra": "mean: 1.8594317111460266 msec\nrounds: 1274"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1495.3731757163662,
            "unit": "iter/sec",
            "range": "stddev: 0.00042806029339761904",
            "extra": "mean: 668.7293956045085 usec\nrounds: 2184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.128153583274752,
            "unit": "iter/sec",
            "range": "stddev: 0.007594125602508109",
            "extra": "mean: 39.79599999999992 msec\nrounds: 37"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.684070291689036,
            "unit": "iter/sec",
            "range": "stddev: 0.013178013929021262",
            "extra": "mean: 42.22247222222227 msec\nrounds: 36"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 542.5092280877059,
            "unit": "iter/sec",
            "range": "stddev: 0.0013536468947454282",
            "extra": "mean: 1.843286617492031 msec\nrounds: 949"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1174.685002167159,
            "unit": "iter/sec",
            "range": "stddev: 0.00042574885268156575",
            "extra": "mean: 851.292046936085 usec\nrounds: 1534"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1350.4648093819737,
            "unit": "iter/sec",
            "range": "stddev: 0.0006286285281445562",
            "extra": "mean: 740.4857890800129 usec\nrounds: 2674"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 939.0238683252521,
            "unit": "iter/sec",
            "range": "stddev: 0.0007843119392377046",
            "extra": "mean: 1.06493565683639 msec\nrounds: 2238"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a5bebd2d253764ee1d831f25409ab699ca710a64",
          "message": "Merge pull request #1581 from TeoZosa/dependabot/pip/sphinx-autoapi-3.6.0",
          "timestamp": "2025-02-18T15:11:19Z",
          "tree_id": "069438da4aff07906fa1ad10d1a52d2e1891f3e2",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/a5bebd2d253764ee1d831f25409ab699ca710a64"
        },
        "date": 1739891976865,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 719.0211893914485,
            "unit": "iter/sec",
            "range": "stddev: 0.00020843735070053866",
            "extra": "mean: 1.3907795969773311 msec\nrounds: 794"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 994.2831025318619,
            "unit": "iter/sec",
            "range": "stddev: 0.00009008954748109153",
            "extra": "mean: 1.0057497683039975 msec\nrounds: 1079"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1219.3667963711978,
            "unit": "iter/sec",
            "range": "stddev: 0.00008010678146616672",
            "extra": "mean: 820.0977777777554 usec\nrounds: 1350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2228.071055403429,
            "unit": "iter/sec",
            "range": "stddev: 0.00006214307103148967",
            "extra": "mean: 448.8187203791548 usec\nrounds: 2532"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 652.6163279514946,
            "unit": "iter/sec",
            "range": "stddev: 0.0003114544209610183",
            "extra": "mean: 1.5322938718663572 msec\nrounds: 718"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 836.9933666970629,
            "unit": "iter/sec",
            "range": "stddev: 0.0001942183059947605",
            "extra": "mean: 1.1947525987525953 msec\nrounds: 962"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1143.2749271565044,
            "unit": "iter/sec",
            "range": "stddev: 0.00016425470785574268",
            "extra": "mean: 874.6802507837284 usec\nrounds: 1276"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1970.820096481937,
            "unit": "iter/sec",
            "range": "stddev: 0.0001673804793980026",
            "extra": "mean: 507.40298507462734 usec\nrounds: 2278"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 32.3890405452657,
            "unit": "iter/sec",
            "range": "stddev: 0.007442938887885802",
            "extra": "mean: 30.87464102564069 msec\nrounds: 39"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.47095527961517,
            "unit": "iter/sec",
            "range": "stddev: 0.011082598680607408",
            "extra": "mean: 42.605850000000345 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 729.0697127479634,
            "unit": "iter/sec",
            "range": "stddev: 0.0007131029183571905",
            "extra": "mean: 1.3716109481915841 msec\nrounds: 1023"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1416.3640267497294,
            "unit": "iter/sec",
            "range": "stddev: 0.0002314516031514378",
            "extra": "mean: 706.0331815224076 usec\nrounds: 1537"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1079.2158786055431,
            "unit": "iter/sec",
            "range": "stddev: 0.0011168985724604949",
            "extra": "mean: 926.5986720767137 usec\nrounds: 2711"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1093.41444199279,
            "unit": "iter/sec",
            "range": "stddev: 0.0007110780995530177",
            "extra": "mean: 914.5662994696333 usec\nrounds: 2451"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "21beb46edaae972d0d60fe84ca046ccad2308cd5",
          "message": "Merge pull request #1570 from TeoZosa/dependabot/github_actions/crazy-max/ghaction-github-labeler-5.2.0\n\n⬆️ Bump crazy-max/ghaction-github-labeler from 5.1.0 to 5.2.0",
          "timestamp": "2025-02-23T13:19:34+09:00",
          "tree_id": "5a0cbff821e8a4a9f91f6a66d5efa5560ad1f355",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/21beb46edaae972d0d60fe84ca046ccad2308cd5"
        },
        "date": 1740284524126,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 663.5442672333736,
            "unit": "iter/sec",
            "range": "stddev: 0.00033382408670192025",
            "extra": "mean: 1.5070584577114468 msec\nrounds: 804"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 963.2153945261593,
            "unit": "iter/sec",
            "range": "stddev: 0.00011869293422319694",
            "extra": "mean: 1.0381893870082262 msec\nrounds: 1093"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1151.6592908238772,
            "unit": "iter/sec",
            "range": "stddev: 0.0001963437643713379",
            "extra": "mean: 868.3123628383331 usec\nrounds: 1367"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2255.7517237222387,
            "unit": "iter/sec",
            "range": "stddev: 0.000047061178614297346",
            "extra": "mean: 443.31119842829594 usec\nrounds: 2545"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 625.8319934996542,
            "unit": "iter/sec",
            "range": "stddev: 0.00040694313376786283",
            "extra": "mean: 1.5978729281767734 msec\nrounds: 724"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 858.0599841725291,
            "unit": "iter/sec",
            "range": "stddev: 0.00009215688311632119",
            "extra": "mean: 1.1654196891192299 msec\nrounds: 965"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1107.7421035008886,
            "unit": "iter/sec",
            "range": "stddev: 0.00016473086974588794",
            "extra": "mean: 902.7371956339094 usec\nrounds: 1191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1811.9651648405986,
            "unit": "iter/sec",
            "range": "stddev: 0.00019581603793934613",
            "extra": "mean: 551.8869895536715 usec\nrounds: 2106"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.871333730769013,
            "unit": "iter/sec",
            "range": "stddev: 0.004047300715981946",
            "extra": "mean: 34.63643243243284 msec\nrounds: 37"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 35.317608670559316,
            "unit": "iter/sec",
            "range": "stddev: 0.002418567201070766",
            "extra": "mean: 28.31448780487785 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 864.2593305781686,
            "unit": "iter/sec",
            "range": "stddev: 0.0002591629594554891",
            "extra": "mean: 1.1570601145040853 msec\nrounds: 1048"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1520.2102590324248,
            "unit": "iter/sec",
            "range": "stddev: 0.0001106651169376404",
            "extra": "mean: 657.8037439613614 usec\nrounds: 1656"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1954.0950327813068,
            "unit": "iter/sec",
            "range": "stddev: 0.000226777030931745",
            "extra": "mean: 511.7458379578796 usec\nrounds: 2703"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1462.5843087033475,
            "unit": "iter/sec",
            "range": "stddev: 0.00047148116640270704",
            "extra": "mean: 683.721269296639 usec\nrounds: 2332"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "45184bec459a095dd13a4983db5b6e80e76acb3d",
          "message": "Merge pull request #1578 from TeoZosa/dependabot/pip/docs/poetry-2.1.1\n\n⬆️ Bump poetry from 1.8.5 to 2.1.1 in /docs",
          "timestamp": "2025-02-23T16:07:25+09:00",
          "tree_id": "516caa849c06dd0d0de50134f45edee88b84c85b",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/45184bec459a095dd13a4983db5b6e80e76acb3d"
        },
        "date": 1740294849080,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 730.593101206081,
            "unit": "iter/sec",
            "range": "stddev: 0.00012408904487998",
            "extra": "mean: 1.3687509481668736 msec\nrounds: 791"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 970.5518177345213,
            "unit": "iter/sec",
            "range": "stddev: 0.00004084120416153322",
            "extra": "mean: 1.0303416898792868 msec\nrounds: 1077"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1192.1983292326715,
            "unit": "iter/sec",
            "range": "stddev: 0.00005511830654745495",
            "extra": "mean: 838.7866141731844 usec\nrounds: 1270"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2279.6374510767696,
            "unit": "iter/sec",
            "range": "stddev: 0.000015315963078484432",
            "extra": "mean: 438.66624472573807 usec\nrounds: 2370"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 672.4706627726264,
            "unit": "iter/sec",
            "range": "stddev: 0.00011812125216795892",
            "extra": "mean: 1.4870537190082844 msec\nrounds: 726"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 897.4791891410123,
            "unit": "iter/sec",
            "range": "stddev: 0.00005991672479757204",
            "extra": "mean: 1.1142319644838914 msec\nrounds: 901"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1110.1487863695343,
            "unit": "iter/sec",
            "range": "stddev: 0.00009693908777505071",
            "extra": "mean: 900.7801587301208 usec\nrounds: 1260"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1988.981819260196,
            "unit": "iter/sec",
            "range": "stddev: 0.00006569433450942264",
            "extra": "mean: 502.76980428707543 usec\nrounds: 2146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 37.31149731038686,
            "unit": "iter/sec",
            "range": "stddev: 0.0027211871479008074",
            "extra": "mean: 26.801390243902585 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 37.52731639542206,
            "unit": "iter/sec",
            "range": "stddev: 0.0018550135424105403",
            "extra": "mean: 26.64725581395395 msec\nrounds: 43"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 918.37938601666,
            "unit": "iter/sec",
            "range": "stddev: 0.00011058995697316402",
            "extra": "mean: 1.088874614594038 msec\nrounds: 973"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1481.4896812305753,
            "unit": "iter/sec",
            "range": "stddev: 0.00007239129557140797",
            "extra": "mean: 674.9962640099972 usec\nrounds: 1606"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2270.0736145283313,
            "unit": "iter/sec",
            "range": "stddev: 0.00005051290458661251",
            "extra": "mean: 440.51434878589913 usec\nrounds: 2718"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1703.7474875573655,
            "unit": "iter/sec",
            "range": "stddev: 0.00013911211162000192",
            "extra": "mean: 586.9414378029009 usec\nrounds: 2476"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ef5b9179f6d316429aa33771048afaf46cbb61ee",
          "message": "Merge pull request #1577 from TeoZosa/dependabot/pip/poetry-2.1.1\n\n⬆️ Bump poetry from 1.8.5 to 2.1.1",
          "timestamp": "2025-02-23T16:07:44+09:00",
          "tree_id": "516caa849c06dd0d0de50134f45edee88b84c85b",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/ef5b9179f6d316429aa33771048afaf46cbb61ee"
        },
        "date": 1740295328025,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 696.5997715292589,
            "unit": "iter/sec",
            "range": "stddev: 0.0002750732695191933",
            "extra": "mean: 1.4355445420326234 msec\nrounds: 797"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 981.1927618921402,
            "unit": "iter/sec",
            "range": "stddev: 0.00007435879884051444",
            "extra": "mean: 1.0191677301732147 msec\nrounds: 1097"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1326.5241665492695,
            "unit": "iter/sec",
            "range": "stddev: 0.00001927977783008128",
            "extra": "mean: 753.8498168497997 usec\nrounds: 1365"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2458.571225567668,
            "unit": "iter/sec",
            "range": "stddev: 0.000015034819486072961",
            "extra": "mean: 406.7403008709282 usec\nrounds: 2526"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 638.0004816103932,
            "unit": "iter/sec",
            "range": "stddev: 0.00024806885902727135",
            "extra": "mean: 1.5673969359331432 msec\nrounds: 718"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 878.3815864922541,
            "unit": "iter/sec",
            "range": "stddev: 0.00011408852812775042",
            "extra": "mean: 1.1384573804574152 msec\nrounds: 962"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1130.4862369236503,
            "unit": "iter/sec",
            "range": "stddev: 0.00014867130334378316",
            "extra": "mean: 884.5751211631399 usec\nrounds: 1238"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1996.835073112627,
            "unit": "iter/sec",
            "range": "stddev: 0.00022884262085189142",
            "extra": "mean: 500.79248580165404 usec\nrounds: 2289"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 39.75302704757216,
            "unit": "iter/sec",
            "range": "stddev: 0.0010348658231630506",
            "extra": "mean: 25.155317073170483 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 37.795751757501314,
            "unit": "iter/sec",
            "range": "stddev: 0.0031551725243694996",
            "extra": "mean: 26.4580000000008 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 960.8534725959901,
            "unit": "iter/sec",
            "range": "stddev: 0.0002286362854503737",
            "extra": "mean: 1.0407414122137122 msec\nrounds: 1048"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1547.720145728272,
            "unit": "iter/sec",
            "range": "stddev: 0.00009474714453442904",
            "extra": "mean: 646.1116389548932 usec\nrounds: 1684"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2079.961431178948,
            "unit": "iter/sec",
            "range": "stddev: 0.00011831874820420474",
            "extra": "mean: 480.77814569532075 usec\nrounds: 2718"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1210.8577187992173,
            "unit": "iter/sec",
            "range": "stddev: 0.000562629301347422",
            "extra": "mean: 825.8608624898385 usec\nrounds: 2458"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f5042665c90779d4797fc2bdb5f7cd40c6c4c1ab",
          "message": "Merge pull request #1583 from TeoZosa/fix/build/fix-release-branch-checkout-ref\n\n💚 Checkout correct ref when determining version numbers",
          "timestamp": "2025-02-25T16:49:36+09:00",
          "tree_id": "a6c1605eb0ba9ae7bb0eb7e0a43299d7a4832e3f",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/f5042665c90779d4797fc2bdb5f7cd40c6c4c1ab"
        },
        "date": 1740472055361,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 773.4208835357057,
            "unit": "iter/sec",
            "range": "stddev: 0.000047559830446130106",
            "extra": "mean: 1.29295707070707 msec\nrounds: 792"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1064.5142651766682,
            "unit": "iter/sec",
            "range": "stddev: 0.00001612936590727316",
            "extra": "mean: 939.3955841766373 usec\nrounds: 1087"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1318.2973005266795,
            "unit": "iter/sec",
            "range": "stddev: 0.00001125264251033576",
            "extra": "mean: 758.5542347697177 usec\nrounds: 1346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2342.7871394681824,
            "unit": "iter/sec",
            "range": "stddev: 0.00003310016650795296",
            "extra": "mean: 426.8420221168715 usec\nrounds: 2532"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 699.112456402323,
            "unit": "iter/sec",
            "range": "stddev: 0.00005975364308493637",
            "extra": "mean: 1.4303850415512025 msec\nrounds: 722"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 944.4768400220694,
            "unit": "iter/sec",
            "range": "stddev: 0.000014258732122649199",
            "extra": "mean: 1.0587872117400288 msec\nrounds: 954"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1251.8136512743458,
            "unit": "iter/sec",
            "range": "stddev: 0.000014963835333987944",
            "extra": "mean: 798.8409448818522 usec\nrounds: 1270"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2105.4410054130008,
            "unit": "iter/sec",
            "range": "stddev: 0.000029817096820396806",
            "extra": "mean: 474.9598765432239 usec\nrounds: 2268"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 39.37866233565409,
            "unit": "iter/sec",
            "range": "stddev: 0.0014557627570724997",
            "extra": "mean: 25.39446341463416 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 42.172358428899145,
            "unit": "iter/sec",
            "range": "stddev: 0.0001788143247003962",
            "extra": "mean: 23.712214285714158 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1021.5449538828451,
            "unit": "iter/sec",
            "range": "stddev: 0.000018884399062255623",
            "extra": "mean: 978.9094412331501 usec\nrounds: 1038"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1652.7849821409764,
            "unit": "iter/sec",
            "range": "stddev: 0.000012293607147261309",
            "extra": "mean: 605.039379474894 usec\nrounds: 1676"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2483.849450715379,
            "unit": "iter/sec",
            "range": "stddev: 0.000030530234157623623",
            "extra": "mean: 402.60089020773285 usec\nrounds: 2696"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 2160.6510715128557,
            "unit": "iter/sec",
            "range": "stddev: 0.00006478164142280577",
            "extra": "mean: 462.8234577921992 usec\nrounds: 2464"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cedd6c3f8536a9574d01d80f1321656e0d7df2db",
          "message": "Merge pull request #1584 from TeoZosa/dependabot/pip/dot-github/workflows/tox-gh-actions-3.3.0",
          "timestamp": "2025-02-25T15:32:02Z",
          "tree_id": "39b6cf8ee725e25245ac3de8b8fea0cc02a9bb3a",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/cedd6c3f8536a9574d01d80f1321656e0d7df2db"
        },
        "date": 1740498026106,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 558.4630001120008,
            "unit": "iter/sec",
            "range": "stddev: 0.000986169163452074",
            "extra": "mean: 1.7906289222373697 msec\nrounds: 733"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 662.9217403440318,
            "unit": "iter/sec",
            "range": "stddev: 0.000823978197051086",
            "extra": "mean: 1.5084736842105027 msec\nrounds: 988"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 950.1505623198841,
            "unit": "iter/sec",
            "range": "stddev: 0.0005773873975257615",
            "extra": "mean: 1.0524647773279254 msec\nrounds: 1235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1844.2781451832109,
            "unit": "iter/sec",
            "range": "stddev: 0.0002912643808193699",
            "extra": "mean: 542.2175622542335 usec\nrounds: 2289"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 451.85238655798446,
            "unit": "iter/sec",
            "range": "stddev: 0.0012061266171663973",
            "extra": "mean: 2.2131121351766367 msec\nrounds: 651"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 708.1263941237809,
            "unit": "iter/sec",
            "range": "stddev: 0.0007423910746956745",
            "extra": "mean: 1.4121772727273876 msec\nrounds: 880"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 851.8241048748461,
            "unit": "iter/sec",
            "range": "stddev: 0.0007166296414205033",
            "extra": "mean: 1.1739512820512688 msec\nrounds: 1170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1435.3642683663559,
            "unit": "iter/sec",
            "range": "stddev: 0.0005128592224680337",
            "extra": "mean: 696.6872605364067 usec\nrounds: 2088"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.92833533836891,
            "unit": "iter/sec",
            "range": "stddev: 0.009229767728910376",
            "extra": "mean: 43.614156249999205 msec\nrounds: 32"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.751613266577504,
            "unit": "iter/sec",
            "range": "stddev: 0.00628901869755998",
            "extra": "mean: 36.03394117647006 msec\nrounds: 34"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 643.0462825688693,
            "unit": "iter/sec",
            "range": "stddev: 0.0009243007619406008",
            "extra": "mean: 1.5550980187695924 msec\nrounds: 959"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 985.8583727072678,
            "unit": "iter/sec",
            "range": "stddev: 0.0006355373789964131",
            "extra": "mean: 1.0143444816053018 msec\nrounds: 1495"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 991.2169523576318,
            "unit": "iter/sec",
            "range": "stddev: 0.000895103626781132",
            "extra": "mean: 1.0088608731130733 msec\nrounds: 2451"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 792.4670010143283,
            "unit": "iter/sec",
            "range": "stddev: 0.0008811989960578694",
            "extra": "mean: 1.2618821966341023 msec\nrounds: 2258"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1e1e09e11bfb8035340a9243b5c8607b29f7c86a",
          "message": "Merge pull request #1582 from TeoZosa/build/migrate-poetry-to-uv\n\n👷 Migrate Poetry to uv",
          "timestamp": "2025-02-26T09:43:03+09:00",
          "tree_id": "e8e854292ec3d05d1d9e1f07b58105f404b5a2d6",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/1e1e09e11bfb8035340a9243b5c8607b29f7c86a"
        },
        "date": 1740531570089,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 542.240376350571,
            "unit": "iter/sec",
            "range": "stddev: 0.0008327290170551611",
            "extra": "mean: 1.8442005494505573 msec\nrounds: 728"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 649.3590073624065,
            "unit": "iter/sec",
            "range": "stddev: 0.0008578471563479888",
            "extra": "mean: 1.5399801783944476 msec\nrounds: 1009"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 851.9418696026097,
            "unit": "iter/sec",
            "range": "stddev: 0.000569263999882169",
            "extra": "mean: 1.1737890056588631 msec\nrounds: 1237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1686.762545800827,
            "unit": "iter/sec",
            "range": "stddev: 0.00035462648955422987",
            "extra": "mean: 592.8516746411561 usec\nrounds: 2299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 306.61661460869766,
            "unit": "iter/sec",
            "range": "stddev: 0.0021446194024001856",
            "extra": "mean: 3.261401869158963 msec\nrounds: 642"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 642.4061388923142,
            "unit": "iter/sec",
            "range": "stddev: 0.0009464216760476296",
            "extra": "mean: 1.556647639956051 msec\nrounds: 911"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 738.7275592569478,
            "unit": "iter/sec",
            "range": "stddev: 0.001064441697861754",
            "extra": "mean: 1.3536790220820436 msec\nrounds: 1268"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1585.1040349931131,
            "unit": "iter/sec",
            "range": "stddev: 0.0004093326077676028",
            "extra": "mean: 630.8734177213452 usec\nrounds: 2133"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 35.166130662270184,
            "unit": "iter/sec",
            "range": "stddev: 0.004320443807388674",
            "extra": "mean: 28.43645238095251 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 33.02639752773846,
            "unit": "iter/sec",
            "range": "stddev: 0.008644022305695978",
            "extra": "mean: 30.278809523809326 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 775.1053874545847,
            "unit": "iter/sec",
            "range": "stddev: 0.0007220647055002638",
            "extra": "mean: 1.2901471415183428 msec\nrounds: 1067"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1409.1375393258995,
            "unit": "iter/sec",
            "range": "stddev: 0.0002763796544731914",
            "extra": "mean: 709.6539351853319 usec\nrounds: 1728"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1526.465355650835,
            "unit": "iter/sec",
            "range": "stddev: 0.00028384655735221763",
            "extra": "mean: 655.1082186687642 usec\nrounds: 2689"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1548.5509045259323,
            "unit": "iter/sec",
            "range": "stddev: 0.0002643934669717788",
            "extra": "mean: 645.7650162337649 usec\nrounds: 2464"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "202d2f0a9da987e10699d93fed6203e702e06f4b",
          "message": "Merge pull request #1585 from TeoZosa/chore/remove-deprecated-code-from-uv-migration\n\n👷 Remove deprecated code from uv migration",
          "timestamp": "2025-02-26T14:22:53+09:00",
          "tree_id": "1fb48c252b5118a1c455287da8df5e99975e1dc8",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/202d2f0a9da987e10699d93fed6203e702e06f4b"
        },
        "date": 1740547806404,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 477.5203193128991,
            "unit": "iter/sec",
            "range": "stddev: 0.0012929971357161637",
            "extra": "mean: 2.0941517241379244 msec\nrounds: 725"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 694.3918216074031,
            "unit": "iter/sec",
            "range": "stddev: 0.001030554474215585",
            "extra": "mean: 1.440109126984192 msec\nrounds: 1008"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 822.0761049435117,
            "unit": "iter/sec",
            "range": "stddev: 0.0009103494525139151",
            "extra": "mean: 1.2164323886639596 msec\nrounds: 1235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1454.0219229424672,
            "unit": "iter/sec",
            "range": "stddev: 0.0006100338614311885",
            "extra": "mean: 687.747539580645 usec\nrounds: 2337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 429.0343416653821,
            "unit": "iter/sec",
            "range": "stddev: 0.00147282211531054",
            "extra": "mean: 2.3308157480315006 msec\nrounds: 635"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 769.1026399342004,
            "unit": "iter/sec",
            "range": "stddev: 0.0005896992929797704",
            "extra": "mean: 1.3002165745856156 msec\nrounds: 905"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1070.2802270478294,
            "unit": "iter/sec",
            "range": "stddev: 0.00023234749458955528",
            "extra": "mean: 934.3347421808544 usec\nrounds: 1183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1825.9040544344643,
            "unit": "iter/sec",
            "range": "stddev: 0.00023937403713831612",
            "extra": "mean: 547.6739030023838 usec\nrounds: 2165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 34.304925043738194,
            "unit": "iter/sec",
            "range": "stddev: 0.0040174233909011405",
            "extra": "mean: 29.150333333333833 msec\nrounds: 39"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 30.375401999460745,
            "unit": "iter/sec",
            "range": "stddev: 0.009834961511500205",
            "extra": "mean: 32.9213750000001 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 719.751442011997,
            "unit": "iter/sec",
            "range": "stddev: 0.0008212932884471885",
            "extra": "mean: 1.389368525896377 msec\nrounds: 1004"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1489.8000728467423,
            "unit": "iter/sec",
            "range": "stddev: 0.00016681408955119019",
            "extra": "mean: 671.2310049020057 usec\nrounds: 1632"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1693.2192722286431,
            "unit": "iter/sec",
            "range": "stddev: 0.00044603647807865796",
            "extra": "mean: 590.5909626718243 usec\nrounds: 2545"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1099.1621064216154,
            "unit": "iter/sec",
            "range": "stddev: 0.0006487596074047788",
            "extra": "mean: 909.7839109970383 usec\nrounds: 2337"
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
          "id": "702b9834344de35cf0ea4744b6a292f7f06ffe94",
          "message": ":bookmark: Bump version number to `1.6.2`",
          "timestamp": "2025-02-26T15:30:32+09:00",
          "tree_id": "1b4e5829dd0f8d037f299fd9d786f25e100baa1b",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/702b9834344de35cf0ea4744b6a292f7f06ffe94"
        },
        "date": 1740551771908,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 659.7008882432973,
            "unit": "iter/sec",
            "range": "stddev: 0.00012531897103053047",
            "extra": "mean: 1.5158384925975732 msec\nrounds: 743"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 926.5055025051279,
            "unit": "iter/sec",
            "range": "stddev: 0.00008921576514487452",
            "extra": "mean: 1.07932440476193 msec\nrounds: 1008"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1194.2492306279257,
            "unit": "iter/sec",
            "range": "stddev: 0.0000721566270726163",
            "extra": "mean: 837.3461538461355 usec\nrounds: 1352"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2252.8377851398204,
            "unit": "iter/sec",
            "range": "stddev: 0.000054559653485885404",
            "extra": "mean: 443.88460038987483 usec\nrounds: 2565"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 615.2903639331666,
            "unit": "iter/sec",
            "range": "stddev: 0.00013868570991111827",
            "extra": "mean: 1.6252489208633552 msec\nrounds: 695"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 844.1285782202823,
            "unit": "iter/sec",
            "range": "stddev: 0.00008389711928934487",
            "extra": "mean: 1.1846536485097439 msec\nrounds: 973"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1244.0648551679687,
            "unit": "iter/sec",
            "range": "stddev: 0.00003614980907693413",
            "extra": "mean: 803.8166144199804 usec\nrounds: 1276"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2189.0672747618064,
            "unit": "iter/sec",
            "range": "stddev: 0.0000420112523411997",
            "extra": "mean: 456.81556319862784 usec\nrounds: 2326"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 42.52297724130659,
            "unit": "iter/sec",
            "range": "stddev: 0.0005876838936061506",
            "extra": "mean: 23.51669767441884 msec\nrounds: 43"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 43.77303680416926,
            "unit": "iter/sec",
            "range": "stddev: 0.00026434317159305823",
            "extra": "mean: 22.84511363636422 msec\nrounds: 44"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1045.110988609721,
            "unit": "iter/sec",
            "range": "stddev: 0.000035735583155337376",
            "extra": "mean: 956.8361742423828 usec\nrounds: 1056"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1691.4582807474321,
            "unit": "iter/sec",
            "range": "stddev: 0.00002580593279344523",
            "extra": "mean: 591.2058319038846 usec\nrounds: 1749"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2064.7847093499317,
            "unit": "iter/sec",
            "range": "stddev: 0.0001816006910192318",
            "extra": "mean: 484.31199411334063 usec\nrounds: 2718"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1695.0131679552237,
            "unit": "iter/sec",
            "range": "stddev: 0.0001249083612798877",
            "extra": "mean: 589.9659182036611 usec\nrounds: 2494"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ba1f2be63b9daa6b8b5bc5656cdc8431bfc24292",
          "message": "Merge pull request #1574 from TeoZosa/dependabot/pip/dot-github/workflows/pip-25.0.1\n\n⬆️ Bump pip from 24.3.1 to 25.0.1 in /.github/workflows",
          "timestamp": "2025-02-26T17:49:03+09:00",
          "tree_id": "4a63730a960b0d54c3b7e919795647ba671d3565",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/ba1f2be63b9daa6b8b5bc5656cdc8431bfc24292"
        },
        "date": 1740560090317,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 590.9817158976509,
            "unit": "iter/sec",
            "range": "stddev: 0.0006468767241112613",
            "extra": "mean: 1.6920997267759545 msec\nrounds: 732"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 844.8305571030074,
            "unit": "iter/sec",
            "range": "stddev: 0.00047278071147023755",
            "extra": "mean: 1.183669306930707 msec\nrounds: 1010"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 999.79472456912,
            "unit": "iter/sec",
            "range": "stddev: 0.0004560348375277822",
            "extra": "mean: 1.000205317577534 msec\nrounds: 1354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2117.379020017944,
            "unit": "iter/sec",
            "range": "stddev: 0.00012187788280306436",
            "extra": "mean: 472.28200078771215 usec\nrounds: 2539"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 431.94563310401406,
            "unit": "iter/sec",
            "range": "stddev: 0.0013960407295622755",
            "extra": "mean: 2.3151061692969965 msec\nrounds: 697"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 677.1818376512749,
            "unit": "iter/sec",
            "range": "stddev: 0.0006044164617737544",
            "extra": "mean: 1.4767082405345981 msec\nrounds: 898"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1068.7005165938926,
            "unit": "iter/sec",
            "range": "stddev: 0.00028355051596228774",
            "extra": "mean: 935.7158385093222 usec\nrounds: 1288"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1529.6733054868641,
            "unit": "iter/sec",
            "range": "stddev: 0.00040191486770617044",
            "extra": "mean: 653.7343604108461 usec\nrounds: 2142"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.31957472463858,
            "unit": "iter/sec",
            "range": "stddev: 0.009259962864650362",
            "extra": "mean: 37.994534883721684 msec\nrounds: 43"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 35.28676532722358,
            "unit": "iter/sec",
            "range": "stddev: 0.004603995141907756",
            "extra": "mean: 28.33923684210591 msec\nrounds: 38"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 819.8986337228974,
            "unit": "iter/sec",
            "range": "stddev: 0.0004882826051125838",
            "extra": "mean: 1.21966296670031 msec\nrounds: 991"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1384.3868720388252,
            "unit": "iter/sec",
            "range": "stddev: 0.00028043932421225936",
            "extra": "mean: 722.341435185146 usec\nrounds: 1728"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1522.5042527343567,
            "unit": "iter/sec",
            "range": "stddev: 0.0004635456018792813",
            "extra": "mean: 656.8126152712151 usec\nrounds: 2711"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1402.0072088703103,
            "unit": "iter/sec",
            "range": "stddev: 0.00041748843745053417",
            "extra": "mean: 713.2630942787847 usec\nrounds: 2482"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9723276321916960f870e6dff003309d939ad4d6",
          "message": "Merge pull request #1587 from TeoZosa/dependabot/pip/myst-parser-4.0.1\n\n⬆️ Bump myst-parser from 3.0.1 to 4.0.1",
          "timestamp": "2025-02-27T13:30:49+09:00",
          "tree_id": "df3c8016e29c5a6e8a4167e42d3dcda1b6707661",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/9723276321916960f870e6dff003309d939ad4d6"
        },
        "date": 1740631011567,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 654.513317850945,
            "unit": "iter/sec",
            "range": "stddev: 0.000369314814113355",
            "extra": "mean: 1.5278527918781541 msec\nrounds: 788"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 866.8337322641793,
            "unit": "iter/sec",
            "range": "stddev: 0.0004462028575362202",
            "extra": "mean: 1.1536237721021643 msec\nrounds: 1018"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1003.3474446755833,
            "unit": "iter/sec",
            "range": "stddev: 0.0005304239761672396",
            "extra": "mean: 996.6637233260053 usec\nrounds: 1359"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1939.0077674036381,
            "unit": "iter/sec",
            "range": "stddev: 0.0002799573394333616",
            "extra": "mean: 515.7276916631519 usec\nrounds: 2387"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 519.3377369617343,
            "unit": "iter/sec",
            "range": "stddev: 0.0008598958347634079",
            "extra": "mean: 1.9255292439372294 msec\nrounds: 701"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 766.4901725921712,
            "unit": "iter/sec",
            "range": "stddev: 0.0005992805533576643",
            "extra": "mean: 1.3046481687014049 msec\nrounds: 901"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 969.676222361298,
            "unit": "iter/sec",
            "range": "stddev: 0.000544609257713144",
            "extra": "mean: 1.0312720647773124 msec\nrounds: 1235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1372.2516145347868,
            "unit": "iter/sec",
            "range": "stddev: 0.0005848290464573348",
            "extra": "mean: 728.729330254069 usec\nrounds: 2165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 34.00911942095009,
            "unit": "iter/sec",
            "range": "stddev: 0.004490794752574101",
            "extra": "mean: 29.403878048779646 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 37.61862799220926,
            "unit": "iter/sec",
            "range": "stddev: 0.002870634611223279",
            "extra": "mean: 26.58257499999994 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 795.5839066032943,
            "unit": "iter/sec",
            "range": "stddev: 0.000625021459346474",
            "extra": "mean: 1.2569384469696603 msec\nrounds: 1056"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1242.776884502879,
            "unit": "iter/sec",
            "range": "stddev: 0.00046708694765666936",
            "extra": "mean: 804.6496619544127 usec\nrounds: 1627"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1806.648924913212,
            "unit": "iter/sec",
            "range": "stddev: 0.0003607144417052453",
            "extra": "mean: 553.5109706209457 usec\nrounds: 2689"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1327.9957671590828,
            "unit": "iter/sec",
            "range": "stddev: 0.0005626716924024514",
            "extra": "mean: 753.0144483361206 usec\nrounds: 2284"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "061578b63603d43e0bc1727b9e5c27e692dddc82",
          "message": "Merge pull request #1586 from TeoZosa/dependabot/pip/sphinx-8.2.1\n\n⬆️ Bump sphinx from 7.4.7 to 8.2.1",
          "timestamp": "2025-02-28T17:27:38+09:00",
          "tree_id": "cfac2d763a0d9b275e0e1f2b0de623d745cca2e8",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/061578b63603d43e0bc1727b9e5c27e692dddc82"
        },
        "date": 1740732061025,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 600.4016653599255,
            "unit": "iter/sec",
            "range": "stddev: 0.0006250583582130777",
            "extra": "mean: 1.6655516759776565 msec\nrounds: 716"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 782.3009040349125,
            "unit": "iter/sec",
            "range": "stddev: 0.0008473535626595147",
            "extra": "mean: 1.2782805118110563 msec\nrounds: 1016"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1022.0284757197605,
            "unit": "iter/sec",
            "range": "stddev: 0.0005530730670811853",
            "extra": "mean: 978.4463190184139 usec\nrounds: 1304"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1999.7904219638667,
            "unit": "iter/sec",
            "range": "stddev: 0.00027955767106417465",
            "extra": "mean: 500.05239999997787 usec\nrounds: 2500"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 539.2609967300939,
            "unit": "iter/sec",
            "range": "stddev: 0.0006852916948380221",
            "extra": "mean: 1.8543896296295856 msec\nrounds: 675"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 777.4644538914399,
            "unit": "iter/sec",
            "range": "stddev: 0.0005275840887818828",
            "extra": "mean: 1.2862324380165597 msec\nrounds: 968"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1085.2005041149107,
            "unit": "iter/sec",
            "range": "stddev: 0.00020902961778757932",
            "extra": "mean: 921.4886983632575 usec\nrounds: 1283"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1702.1941125946164,
            "unit": "iter/sec",
            "range": "stddev: 0.0003148243926133828",
            "extra": "mean: 587.4770642202037 usec\nrounds: 2289"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 36.186058373281114,
            "unit": "iter/sec",
            "range": "stddev: 0.0032981111516152857",
            "extra": "mean: 27.634952380952747 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 37.38221265316702,
            "unit": "iter/sec",
            "range": "stddev: 0.0033687932810058684",
            "extra": "mean: 26.750690476190425 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 795.7169409638669,
            "unit": "iter/sec",
            "range": "stddev: 0.0007980296981932349",
            "extra": "mean: 1.2567283018867 msec\nrounds: 1060"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1406.3162893499657,
            "unit": "iter/sec",
            "range": "stddev: 0.0003440164802685779",
            "extra": "mean: 711.0775915581727 usec\nrounds: 1611"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1713.5421798632115,
            "unit": "iter/sec",
            "range": "stddev: 0.0004080064942611722",
            "extra": "mean: 583.5864513588034 usec\nrounds: 2539"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1207.645359018538,
            "unit": "iter/sec",
            "range": "stddev: 0.000426092558896126",
            "extra": "mean: 828.0576681988056 usec\nrounds: 2393"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ec7d8ce9d2a8a6122a3ca6040391b170a72dcd90",
          "message": "Merge pull request #1588 from TeoZosa/dependabot/github_actions/codecov/codecov-action-5.4.0\n\n⬆️ Bump codecov/codecov-action from 4.6.0 to 5.4.0",
          "timestamp": "2025-03-01T13:04:08+09:00",
          "tree_id": "e339d45c695b7399a0dadf28ef2be3c765fe77e0",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/ec7d8ce9d2a8a6122a3ca6040391b170a72dcd90"
        },
        "date": 1740802615724,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 657.7761916507824,
            "unit": "iter/sec",
            "range": "stddev: 0.00013633379949842364",
            "extra": "mean: 1.5202739361702322 msec\nrounds: 752"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 945.1046462389268,
            "unit": "iter/sec",
            "range": "stddev: 0.0000865412943490487",
            "extra": "mean: 1.0580838894185218 msec\nrounds: 1049"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1009.3084874975016,
            "unit": "iter/sec",
            "range": "stddev: 0.00048580131781147235",
            "extra": "mean: 990.7773613193511 usec\nrounds: 1334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2123.545457684395,
            "unit": "iter/sec",
            "range": "stddev: 0.00005992406835213061",
            "extra": "mean: 470.9105691057082 usec\nrounds: 2337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 663.407221306971,
            "unit": "iter/sec",
            "range": "stddev: 0.00016787167445911003",
            "extra": "mean: 1.5073697841725502 msec\nrounds: 695"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 950.8539040942755,
            "unit": "iter/sec",
            "range": "stddev: 0.000031533607735050196",
            "extra": "mean: 1.0516862745097924 msec\nrounds: 969"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1203.3921857968683,
            "unit": "iter/sec",
            "range": "stddev: 0.000058857289867742394",
            "extra": "mean: 830.9842890809657 usec\nrounds: 1273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2187.2425573263317,
            "unit": "iter/sec",
            "range": "stddev: 0.00004649953081136603",
            "extra": "mean: 457.1966637401167 usec\nrounds: 2278"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 42.213644235187246,
            "unit": "iter/sec",
            "range": "stddev: 0.001347033132981609",
            "extra": "mean: 23.68902325581378 msec\nrounds: 43"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 43.79992583212578,
            "unit": "iter/sec",
            "range": "stddev: 0.000509226009039436",
            "extra": "mean: 22.83108888888879 msec\nrounds: 45"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 993.2462989195616,
            "unit": "iter/sec",
            "range": "stddev: 0.0001397432145981895",
            "extra": "mean: 1.006799623706411 msec\nrounds: 1063"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1416.9280220075116,
            "unit": "iter/sec",
            "range": "stddev: 0.00020579175730887496",
            "extra": "mean: 705.7521514629899 usec\nrounds: 1743"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2225.498350590831,
            "unit": "iter/sec",
            "range": "stddev: 0.00009064494764027691",
            "extra": "mean: 449.33756061176933 usec\nrounds: 2681"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1498.9817198843957,
            "unit": "iter/sec",
            "range": "stddev: 0.00019571630653163953",
            "extra": "mean: 667.1195430436082 usec\nrounds: 2451"
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
          "id": "6fb877c23792cda80ebd7bf099a6b522fa2b7734",
          "message": ":memo: Point `CI` status badge to default branch workflows",
          "timestamp": "2025-03-03T10:43:48+09:00",
          "tree_id": "6302bee4be2a972cc7762cfab9473edeeb9e3e4a",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/6fb877c23792cda80ebd7bf099a6b522fa2b7734"
        },
        "date": 1740966623825,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 635.1817121156012,
            "unit": "iter/sec",
            "range": "stddev: 0.0005528998526212826",
            "extra": "mean: 1.574352631578919 msec\nrounds: 760"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 938.0806629103558,
            "unit": "iter/sec",
            "range": "stddev: 0.00022429151711962555",
            "extra": "mean: 1.0660064102563869 msec\nrounds: 1092"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1172.1798015828717,
            "unit": "iter/sec",
            "range": "stddev: 0.00013924513775872074",
            "extra": "mean: 853.1114413075826 usec\nrounds: 1346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2171.642272229017,
            "unit": "iter/sec",
            "range": "stddev: 0.0001988709363927587",
            "extra": "mean: 460.4809976247055 usec\nrounds: 2526"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 604.6967661681037,
            "unit": "iter/sec",
            "range": "stddev: 0.0002808236472527907",
            "extra": "mean: 1.653721428571363 msec\nrounds: 700"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 830.3041508422714,
            "unit": "iter/sec",
            "range": "stddev: 0.0002791813261054816",
            "extra": "mean: 1.2043779366700587 msec\nrounds: 979"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1124.448638328678,
            "unit": "iter/sec",
            "range": "stddev: 0.00019230461046854642",
            "extra": "mean: 889.3247462919675 usec\nrounds: 1281"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1902.8458243970633,
            "unit": "iter/sec",
            "range": "stddev: 0.00017248299809355237",
            "extra": "mean: 525.5286514433509 usec\nrounds: 2321"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 34.024532479185574,
            "unit": "iter/sec",
            "range": "stddev: 0.006687816521400286",
            "extra": "mean: 29.390558139534985 msec\nrounds: 43"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 35.530605175031866,
            "unit": "iter/sec",
            "range": "stddev: 0.0056157362545110195",
            "extra": "mean: 28.144750000000617 msec\nrounds: 44"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 823.7728483530747,
            "unit": "iter/sec",
            "range": "stddev: 0.00044100813621387905",
            "extra": "mean: 1.2139268755934927 msec\nrounds: 1053"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1509.828126483664,
            "unit": "iter/sec",
            "range": "stddev: 0.0002442076419484567",
            "extra": "mean: 662.3270440251796 usec\nrounds: 1749"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1719.1684734089522,
            "unit": "iter/sec",
            "range": "stddev: 0.0002807763289940986",
            "extra": "mean: 581.676557863519 usec\nrounds: 2696"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1562.033891478313,
            "unit": "iter/sec",
            "range": "stddev: 0.0003079064787046491",
            "extra": "mean: 640.1909750201369 usec\nrounds: 2482"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "589a9ac537faf072c840bc4e186bd490fd0e59f0",
          "message": "Merge pull request #1589 from TeoZosa/build/migrate-dependabot-project-dependencies-updates-to-uv\n\n👷  Migrate Dependabot project dependencies updates to uv",
          "timestamp": "2025-03-03T14:12:54+09:00",
          "tree_id": "7e3aa1132a948fa62db37d2a557e2d0a93063f49",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/589a9ac537faf072c840bc4e186bd490fd0e59f0"
        },
        "date": 1740979138424,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 639.8059673406233,
            "unit": "iter/sec",
            "range": "stddev: 0.0004446047239651845",
            "extra": "mean: 1.5629738562091509 msec\nrounds: 765"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 902.6533572220955,
            "unit": "iter/sec",
            "range": "stddev: 0.00027980029129197277",
            "extra": "mean: 1.107844990548185 msec\nrounds: 1058"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1205.9084168666432,
            "unit": "iter/sec",
            "range": "stddev: 0.00014564344611420698",
            "extra": "mean: 829.2503692762485 usec\nrounds: 1354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2213.3641036400495,
            "unit": "iter/sec",
            "range": "stddev: 0.00012551927019362164",
            "extra": "mean: 451.8009478672859 usec\nrounds: 2532"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 559.0683370805209,
            "unit": "iter/sec",
            "range": "stddev: 0.0005899343708160781",
            "extra": "mean: 1.7886901004303757 msec\nrounds: 697"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 772.004905431361,
            "unit": "iter/sec",
            "range": "stddev: 0.0006183614084732136",
            "extra": "mean: 1.2953285568065733 msec\nrounds: 977"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 948.4392584256537,
            "unit": "iter/sec",
            "range": "stddev: 0.0005939004417825446",
            "extra": "mean: 1.0543637782981838 msec\nrounds: 1281"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1436.8836797566346,
            "unit": "iter/sec",
            "range": "stddev: 0.0005208353312571226",
            "extra": "mean: 695.9505588993608 usec\nrounds: 2326"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 32.99169564292619,
            "unit": "iter/sec",
            "range": "stddev: 0.007776167493039558",
            "extra": "mean: 30.310657894736362 msec\nrounds: 38"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 33.69467608445858,
            "unit": "iter/sec",
            "range": "stddev: 0.007817884671046675",
            "extra": "mean: 29.67827906976802 msec\nrounds: 43"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 895.0228392471734,
            "unit": "iter/sec",
            "range": "stddev: 0.0002467667006335427",
            "extra": "mean: 1.1172899239544833 msec\nrounds: 1052"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1474.5035924744323,
            "unit": "iter/sec",
            "range": "stddev: 0.0002556994979929837",
            "extra": "mean: 678.194346289692 usec\nrounds: 1698"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1570.2025801453942,
            "unit": "iter/sec",
            "range": "stddev: 0.0005225458845191053",
            "extra": "mean: 636.8604998136 usec\nrounds: 2681"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1396.237714546131,
            "unit": "iter/sec",
            "range": "stddev: 0.0003896434989982001",
            "extra": "mean: 716.2104200322834 usec\nrounds: 2476"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d9c4dbd4e52b8b142121812e63c1c34270845dec",
          "message": "Merge pull request #1590 from TeoZosa/dependabot/github_actions/pypa/cibuildwheel-2.23.0",
          "timestamp": "2025-03-03T07:13:42Z",
          "tree_id": "eed08cc697e416fd76cdf34aeed06cb13cf552c6",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/d9c4dbd4e52b8b142121812e63c1c34270845dec"
        },
        "date": 1740986354147,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 554.9892400045303,
            "unit": "iter/sec",
            "range": "stddev: 0.0006557682937191427",
            "extra": "mean: 1.8018367346938782 msec\nrounds: 784"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 856.0911584944525,
            "unit": "iter/sec",
            "range": "stddev: 0.0002639814708131699",
            "extra": "mean: 1.168099903938536 msec\nrounds: 1041"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1048.772549240556,
            "unit": "iter/sec",
            "range": "stddev: 0.0002894638644682008",
            "extra": "mean: 953.4955894146224 usec\nrounds: 1247"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1850.840786630137,
            "unit": "iter/sec",
            "range": "stddev: 0.00022462949189910547",
            "extra": "mean: 540.2949876746126 usec\nrounds: 2434"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 501.58407248940784,
            "unit": "iter/sec",
            "range": "stddev: 0.0005578544099219289",
            "extra": "mean: 1.9936837209301883 msec\nrounds: 645"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 681.533862856183,
            "unit": "iter/sec",
            "range": "stddev: 0.0005108168958258813",
            "extra": "mean: 1.4672785234899175 msec\nrounds: 894"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 948.4636394538207,
            "unit": "iter/sec",
            "range": "stddev: 0.00041936833304688904",
            "extra": "mean: 1.054336675020939 msec\nrounds: 1197"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1754.3706660979485,
            "unit": "iter/sec",
            "range": "stddev: 0.00028735759972538255",
            "extra": "mean: 570.0049706281221 usec\nrounds: 2213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 35.39984993917223,
            "unit": "iter/sec",
            "range": "stddev: 0.0034510133964084488",
            "extra": "mean: 28.24870731707355 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 34.07375307537398,
            "unit": "iter/sec",
            "range": "stddev: 0.0037257074552133162",
            "extra": "mean: 29.34810256410313 msec\nrounds: 39"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 817.134919708471,
            "unit": "iter/sec",
            "range": "stddev: 0.0005399565136508117",
            "extra": "mean: 1.2237881112176308 msec\nrounds: 1043"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1481.4425217835726,
            "unit": "iter/sec",
            "range": "stddev: 0.00009773831819704879",
            "extra": "mean: 675.0177514791845 usec\nrounds: 1690"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1510.7708620557178,
            "unit": "iter/sec",
            "range": "stddev: 0.00044788970559803603",
            "extra": "mean: 661.9137455691276 usec\nrounds: 2539"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1367.8572921393575,
            "unit": "iter/sec",
            "range": "stddev: 0.00034193282472668075",
            "extra": "mean: 731.0704162975796 usec\nrounds: 2258"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bda5255a7f839ed917528ec81c814e7967ca7935",
          "message": "Merge pull request #1591 from TeoZosa/dependabot/uv/sphinx-8.2.3",
          "timestamp": "2025-03-06T15:22:40Z",
          "tree_id": "dce58b243d52c38be8ad2613ef9a32b50efed6f9",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/bda5255a7f839ed917528ec81c814e7967ca7935"
        },
        "date": 1741275038217,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 639.258224010604,
            "unit": "iter/sec",
            "range": "stddev: 0.0006456441133973938",
            "extra": "mean: 1.56431307793924 msec\nrounds: 757"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 895.073896874685,
            "unit": "iter/sec",
            "range": "stddev: 0.0005523044507812694",
            "extra": "mean: 1.1172261904762095 msec\nrounds: 1092"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1189.8550315884686,
            "unit": "iter/sec",
            "range": "stddev: 0.00022876404694572198",
            "extra": "mean: 840.4385185185038 usec\nrounds: 1350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1846.6614657837636,
            "unit": "iter/sec",
            "range": "stddev: 0.0002714743213617418",
            "extra": "mean: 541.5177705977517 usec\nrounds: 2476"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 523.1806724645053,
            "unit": "iter/sec",
            "range": "stddev: 0.0009351628663552693",
            "extra": "mean: 1.911385593220369 msec\nrounds: 708"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 776.2731593445733,
            "unit": "iter/sec",
            "range": "stddev: 0.0005574345966759509",
            "extra": "mean: 1.2882063329927895 msec\nrounds: 979"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1004.5143872383219,
            "unit": "iter/sec",
            "range": "stddev: 0.00046096145645295445",
            "extra": "mean: 995.5059008654589 usec\nrounds: 1271"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1865.2614859719142,
            "unit": "iter/sec",
            "range": "stddev: 0.00018443975348405935",
            "extra": "mean: 536.117862037418 usec\nrounds: 2189"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 34.595463711005884,
            "unit": "iter/sec",
            "range": "stddev: 0.005888128280341606",
            "extra": "mean: 28.905523809523885 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.916343026228336,
            "unit": "iter/sec",
            "range": "stddev: 0.007241950509629962",
            "extra": "mean: 33.426545454545604 msec\nrounds: 44"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 759.6013832282567,
            "unit": "iter/sec",
            "range": "stddev: 0.0006304170596756584",
            "extra": "mean: 1.3164799618321714 msec\nrounds: 1048"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1335.0243091516688,
            "unit": "iter/sec",
            "range": "stddev: 0.0002904772286481996",
            "extra": "mean: 749.0500308832897 usec\nrounds: 1619"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1714.7777902579162,
            "unit": "iter/sec",
            "range": "stddev: 0.00030845091617240513",
            "extra": "mean: 583.1659388646456 usec\nrounds: 2519"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1241.3920412187445,
            "unit": "iter/sec",
            "range": "stddev: 0.0005787256433159295",
            "extra": "mean: 805.5472943247194 usec\nrounds: 2273"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ab5fd48095e994cfc65d60d6e82bfc5669aa5ae2",
          "message": "Merge pull request #1593 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.24.2",
          "timestamp": "2025-03-10T13:52:53Z",
          "tree_id": "c2c35658ac4709da0b401427dea05ebf0536e759",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/ab5fd48095e994cfc65d60d6e82bfc5669aa5ae2"
        },
        "date": 1741615128737,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 663.1288162627042,
            "unit": "iter/sec",
            "range": "stddev: 0.0001681834198343036",
            "extra": "mean: 1.5080026315789623 msec\nrounds: 760"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 954.2914081932314,
            "unit": "iter/sec",
            "range": "stddev: 0.00007162745646962879",
            "extra": "mean: 1.0478979391560372 msec\nrounds: 1019"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1102.0259483885943,
            "unit": "iter/sec",
            "range": "stddev: 0.0001615148792819353",
            "extra": "mean: 907.419649657271 usec\nrounds: 1313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2146.586666481202,
            "unit": "iter/sec",
            "range": "stddev: 0.00006154238246904884",
            "extra": "mean: 465.8558704453581 usec\nrounds: 2470"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 674.3992561052863,
            "unit": "iter/sec",
            "range": "stddev: 0.00008550128993209863",
            "extra": "mean: 1.4828011611031218 msec\nrounds: 689"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 834.3003311790881,
            "unit": "iter/sec",
            "range": "stddev: 0.0003735999835126835",
            "extra": "mean: 1.198609137055878 msec\nrounds: 985"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1179.5833176879805,
            "unit": "iter/sec",
            "range": "stddev: 0.00008419428883728119",
            "extra": "mean: 847.7569875776394 usec\nrounds: 1288"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2018.3350904822012,
            "unit": "iter/sec",
            "range": "stddev: 0.00011241836487752264",
            "extra": "mean: 495.45786758386566 usec\nrounds: 2326"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 33.548011936210486,
            "unit": "iter/sec",
            "range": "stddev: 0.005880163815687744",
            "extra": "mean: 29.808025641025747 msec\nrounds: 39"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 35.85731055072958,
            "unit": "iter/sec",
            "range": "stddev: 0.005612841266842336",
            "extra": "mean: 27.888315789474436 msec\nrounds: 38"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 948.672130583642,
            "unit": "iter/sec",
            "range": "stddev: 0.00011367375045141165",
            "extra": "mean: 1.0541049618320506 msec\nrounds: 1048"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1380.0053825935918,
            "unit": "iter/sec",
            "range": "stddev: 0.00018283843653179576",
            "extra": "mean: 724.634854771793 usec\nrounds: 1687"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1458.525830743382,
            "unit": "iter/sec",
            "range": "stddev: 0.0004186765582513222",
            "extra": "mean: 685.6237845923645 usec\nrounds: 2674"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1238.6392368069057,
            "unit": "iter/sec",
            "range": "stddev: 0.0003653175331755009",
            "extra": "mean: 807.3375768217265 usec\nrounds: 2278"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cb3af65cb7d0f085815968f4e33dd3073f6e379c",
          "message": "Merge pull request #1595 from TeoZosa/dependabot/uv/tox-4.24.2",
          "timestamp": "2025-03-13T14:20:49Z",
          "tree_id": "d72b07c16943451c607859682225882470d39693",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/cb3af65cb7d0f085815968f4e33dd3073f6e379c"
        },
        "date": 1741876059367,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 694.5058797364068,
            "unit": "iter/sec",
            "range": "stddev: 0.00038341135070586453",
            "extra": "mean: 1.4398726190475748 msec\nrounds: 840"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 891.5793430124967,
            "unit": "iter/sec",
            "range": "stddev: 0.0005625088728331841",
            "extra": "mean: 1.121605169340474 msec\nrounds: 1122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1229.5659191631455,
            "unit": "iter/sec",
            "range": "stddev: 0.00024325135899804106",
            "extra": "mean: 813.2951510892639 usec\nrounds: 1423"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2092.6111098931997,
            "unit": "iter/sec",
            "range": "stddev: 0.00013430090871562733",
            "extra": "mean: 477.87187751814855 usec\nrounds: 2482"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 664.2648052240038,
            "unit": "iter/sec",
            "range": "stddev: 0.00022968857701840243",
            "extra": "mean: 1.505423728813661 msec\nrounds: 767"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 993.2933148231174,
            "unit": "iter/sec",
            "range": "stddev: 0.000027899953141256122",
            "extra": "mean: 1.006751968503963 msec\nrounds: 1016"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1251.8201052053803,
            "unit": "iter/sec",
            "range": "stddev: 0.00014476331303235187",
            "extra": "mean: 798.8368263472927 usec\nrounds: 1336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2099.1460677365244,
            "unit": "iter/sec",
            "range": "stddev: 0.00006501035596429258",
            "extra": "mean: 476.3841903952325 usec\nrounds: 2353"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 43.663442187617804,
            "unit": "iter/sec",
            "range": "stddev: 0.0013436428348535807",
            "extra": "mean: 22.902454545454567 msec\nrounds: 44"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 45.33261326747499,
            "unit": "iter/sec",
            "range": "stddev: 0.0004846976287378148",
            "extra": "mean: 22.059173913044077 msec\nrounds: 46"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1004.24839959093,
            "unit": "iter/sec",
            "range": "stddev: 0.00016640024948012314",
            "extra": "mean: 995.7695729536033 usec\nrounds: 1124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1447.4727659754667,
            "unit": "iter/sec",
            "range": "stddev: 0.0003652845460407357",
            "extra": "mean: 690.8592848903031 usec\nrounds: 1734"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1745.1054543213031,
            "unit": "iter/sec",
            "range": "stddev: 0.00028172252402921215",
            "extra": "mean: 573.0312729948544 usec\nrounds: 2718"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1048.6178549918986,
            "unit": "iter/sec",
            "range": "stddev: 0.0006137585464163291",
            "extra": "mean: 953.636251032294 usec\nrounds: 2422"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "975ebcfb420d6ba81287210a8b805bb3ae5ce3b9",
          "message": "Merge pull request #1598 from TeoZosa/dependabot/github_actions/pypa/cibuildwheel-2.23.1",
          "timestamp": "2025-03-17T13:39:18Z",
          "tree_id": "6731a1afb3207969688f4b7680dd18315db576ae",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/975ebcfb420d6ba81287210a8b805bb3ae5ce3b9"
        },
        "date": 1742219321492,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 560.7248617271047,
            "unit": "iter/sec",
            "range": "stddev: 0.0008999194199830043",
            "extra": "mean: 1.7834058524173004 msec\nrounds: 786"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 904.4733745650011,
            "unit": "iter/sec",
            "range": "stddev: 0.00034658756906847434",
            "extra": "mean: 1.1056157407407836 msec\nrounds: 1080"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1230.614107135012,
            "unit": "iter/sec",
            "range": "stddev: 0.0001389888513913489",
            "extra": "mean: 812.6024187453012 usec\nrounds: 1323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1723.5112083513434,
            "unit": "iter/sec",
            "range": "stddev: 0.00033540680920756457",
            "extra": "mean: 580.2109061748247 usec\nrounds: 2494"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 410.84098497495324,
            "unit": "iter/sec",
            "range": "stddev: 0.0014851384840847879",
            "extra": "mean: 2.434031746031776 msec\nrounds: 693"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 577.1254555191055,
            "unit": "iter/sec",
            "range": "stddev: 0.0009668885480991989",
            "extra": "mean: 1.7327255113024476 msec\nrounds: 929"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 758.6722928217232,
            "unit": "iter/sec",
            "range": "stddev: 0.0009755790055297989",
            "extra": "mean: 1.3180921584478968 msec\nrounds: 1237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1724.8277997935752,
            "unit": "iter/sec",
            "range": "stddev: 0.00031017229295913395",
            "extra": "mean: 579.768020969791 usec\nrounds: 2289"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 30.344270925788944,
            "unit": "iter/sec",
            "range": "stddev: 0.00646435320321403",
            "extra": "mean: 32.955149999999556 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 32.54296266369837,
            "unit": "iter/sec",
            "range": "stddev: 0.00735428307817263",
            "extra": "mean: 30.728609756096322 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 893.3060363985769,
            "unit": "iter/sec",
            "range": "stddev: 0.00027161167089064257",
            "extra": "mean: 1.1194371908999596 msec\nrounds: 1011"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1366.8631452314414,
            "unit": "iter/sec",
            "range": "stddev: 0.00035859919980256254",
            "extra": "mean: 731.602138435503 usec\nrounds: 1777"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1236.7147999100996,
            "unit": "iter/sec",
            "range": "stddev: 0.0007090335460601137",
            "extra": "mean: 808.5938650307193 usec\nrounds: 2445"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1300.0236028875256,
            "unit": "iter/sec",
            "range": "stddev: 0.00032736557905468716",
            "extra": "mean: 769.2168032786994 usec\nrounds: 2440"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "46a789a16ca0a025bc884c57729a7fc033551f8f",
          "message": "Merge pull request #1599 from TeoZosa/dependabot/uv/pre-commit-4.2.0",
          "timestamp": "2025-03-19T14:10:43Z",
          "tree_id": "e7eac0f7317b0280bc5f9b1ae4b8acd0578c7550",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/46a789a16ca0a025bc884c57729a7fc033551f8f"
        },
        "date": 1742393867208,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 483.8654680803052,
            "unit": "iter/sec",
            "range": "stddev: 0.001462157093986601",
            "extra": "mean: 2.066690156599549 msec\nrounds: 894"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 625.9872633864775,
            "unit": "iter/sec",
            "range": "stddev: 0.001062697444211293",
            "extra": "mean: 1.5974765917603204 msec\nrounds: 1068"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1135.0783458830742,
            "unit": "iter/sec",
            "range": "stddev: 0.0005963810313070162",
            "extra": "mean: 880.9964559953038 usec\nrounds: 1693"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1497.5746550039278,
            "unit": "iter/sec",
            "range": "stddev: 0.00047410797733918325",
            "extra": "mean: 667.7463435019052 usec\nrounds: 2393"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 402.9415765630121,
            "unit": "iter/sec",
            "range": "stddev: 0.0019900943089096335",
            "extra": "mean: 2.4817493606138696 msec\nrounds: 782"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 567.0926175907739,
            "unit": "iter/sec",
            "range": "stddev: 0.0014073934029403014",
            "extra": "mean: 1.7633803879309558 msec\nrounds: 928"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 902.9159378395643,
            "unit": "iter/sec",
            "range": "stddev: 0.0008392302810332114",
            "extra": "mean: 1.1075228136882063 msec\nrounds: 1578"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1714.6310318269957,
            "unit": "iter/sec",
            "range": "stddev: 0.000297387159678086",
            "extra": "mean: 583.215853112414 usec\nrounds: 2233"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.421696623667206,
            "unit": "iter/sec",
            "range": "stddev: 0.01183584295114398",
            "extra": "mean: 36.467473684210944 msec\nrounds: 38"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.214781930703253,
            "unit": "iter/sec",
            "range": "stddev: 0.010906457213448524",
            "extra": "mean: 35.442414634146175 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 833.0396767212717,
            "unit": "iter/sec",
            "range": "stddev: 0.000813246508860507",
            "extra": "mean: 1.200423014586605 msec\nrounds: 1234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 864.3839427787594,
            "unit": "iter/sec",
            "range": "stddev: 0.0009458871303060479",
            "extra": "mean: 1.1568933092223714 msec\nrounds: 1659"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 862.3519416538445,
            "unit": "iter/sec",
            "range": "stddev: 0.0011480698396218317",
            "extra": "mean: 1.1596193522590903 msec\nrounds: 2501"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 844.2481315240542,
            "unit": "iter/sec",
            "range": "stddev: 0.0008148582175237264",
            "extra": "mean: 1.1844858906525255 msec\nrounds: 2268"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a0211a6cbbc9426f6f0d2391f1abaa9028b5e400",
          "message": "Merge pull request #1600 from TeoZosa/dependabot/github_actions/pypa/cibuildwheel-2.23.2",
          "timestamp": "2025-03-25T13:27:09Z",
          "tree_id": "c3614dd5bde6cd09a6bd617944664d6469b24867",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/a0211a6cbbc9426f6f0d2391f1abaa9028b5e400"
        },
        "date": 1742909349076,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 637.3167535713343,
            "unit": "iter/sec",
            "range": "stddev: 0.0008617613488327212",
            "extra": "mean: 1.569078475336316 msec\nrounds: 892"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 912.7819356270951,
            "unit": "iter/sec",
            "range": "stddev: 0.0002843790106414326",
            "extra": "mean: 1.0955519176800808 msec\nrounds: 1069"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1392.9785443803719,
            "unit": "iter/sec",
            "range": "stddev: 0.00030299422704162807",
            "extra": "mean: 717.8861469433633 usec\nrounds: 1783"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1805.7190681281222,
            "unit": "iter/sec",
            "range": "stddev: 0.0003484883601258819",
            "extra": "mean: 553.7960016319915 usec\nrounds: 2451"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 678.2496268404471,
            "unit": "iter/sec",
            "range": "stddev: 0.0005261072521677453",
            "extra": "mean: 1.4743834134614895 msec\nrounds: 832"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 817.979047532636,
            "unit": "iter/sec",
            "range": "stddev: 0.000356226301628213",
            "extra": "mean: 1.2225252016129444 msec\nrounds: 992"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1274.2218454926651,
            "unit": "iter/sec",
            "range": "stddev: 0.0003913006252107404",
            "extra": "mean: 784.7926980198334 usec\nrounds: 1616"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1619.3235789965086,
            "unit": "iter/sec",
            "range": "stddev: 0.0003340294569750638",
            "extra": "mean: 617.5418013857972 usec\nrounds: 2165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 31.481167464785663,
            "unit": "iter/sec",
            "range": "stddev: 0.008414264174847932",
            "extra": "mean: 31.76502272727288 msec\nrounds: 44"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 40.42026294728357,
            "unit": "iter/sec",
            "range": "stddev: 0.002960878212779228",
            "extra": "mean: 24.74006666666687 msec\nrounds: 45"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1164.6638044409099,
            "unit": "iter/sec",
            "range": "stddev: 0.00010470695978743868",
            "extra": "mean: 858.6168782673248 usec\nrounds: 1339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1556.6792460683473,
            "unit": "iter/sec",
            "range": "stddev: 0.00010323058667248463",
            "extra": "mean: 642.3930957682301 usec\nrounds: 1796"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1660.1944969961858,
            "unit": "iter/sec",
            "range": "stddev: 0.0004443303835992718",
            "extra": "mean: 602.3390643742734 usec\nrounds: 2501"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1033.1888960656877,
            "unit": "iter/sec",
            "range": "stddev: 0.0006437887826285213",
            "extra": "mean: 967.8772234273242 usec\nrounds: 2305"
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
          "id": "e250b18882fe8033deb7a6589c8a764c8c2e7a8f",
          "message": ":package: Update `uv.lock`",
          "timestamp": "2025-04-01T14:57:48+09:00",
          "tree_id": "f63a306d836b7920bc37b28d500c8808151d8830",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/e250b18882fe8033deb7a6589c8a764c8c2e7a8f"
        },
        "date": 1743487270535,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 746.822877118463,
            "unit": "iter/sec",
            "range": "stddev: 0.0005071976254417522",
            "extra": "mean: 1.3390055803571446 msec\nrounds: 896"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 888.0042869172445,
            "unit": "iter/sec",
            "range": "stddev: 0.0003816418721425567",
            "extra": "mean: 1.1261206896551759 msec\nrounds: 1102"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1450.1099666724922,
            "unit": "iter/sec",
            "range": "stddev: 0.0002227312304702944",
            "extra": "mean: 689.6028735632092 usec\nrounds: 1740"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1924.685795439325,
            "unit": "iter/sec",
            "range": "stddev: 0.00027911920070313595",
            "extra": "mean: 519.5653245685965 usec\nrounds: 2434"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 759.1303318079396,
            "unit": "iter/sec",
            "range": "stddev: 0.0002585381066029558",
            "extra": "mean: 1.3172968568103542 msec\nrounds: 859"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 914.9621806687484,
            "unit": "iter/sec",
            "range": "stddev: 0.00008373920750592381",
            "extra": "mean: 1.0929413489736781 msec\nrounds: 1023"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1518.4115245012174,
            "unit": "iter/sec",
            "range": "stddev: 0.00006847834289528678",
            "extra": "mean: 658.5829887773605 usec\nrounds: 1693"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2001.2390250156272,
            "unit": "iter/sec",
            "range": "stddev: 0.00019603758996450678",
            "extra": "mean: 499.6904355251573 usec\nrounds: 2342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 35.290456498096226,
            "unit": "iter/sec",
            "range": "stddev: 0.0077794390584036395",
            "extra": "mean: 28.33627272727248 msec\nrounds: 44"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 36.859414099136075,
            "unit": "iter/sec",
            "range": "stddev: 0.004769365100791059",
            "extra": "mean: 27.130111111110644 msec\nrounds: 45"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1162.2783760176642,
            "unit": "iter/sec",
            "range": "stddev: 0.00017939762543146143",
            "extra": "mean: 860.3790801187564 usec\nrounds: 1348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1543.7226741465342,
            "unit": "iter/sec",
            "range": "stddev: 0.00019243638724593924",
            "extra": "mean: 647.784745762617 usec\nrounds: 1770"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1737.9150007383817,
            "unit": "iter/sec",
            "range": "stddev: 0.000277983492377616",
            "extra": "mean: 575.4021339220466 usec\nrounds: 2718"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1305.979158924283,
            "unit": "iter/sec",
            "range": "stddev: 0.0003823660132930522",
            "extra": "mean: 765.7090032154007 usec\nrounds: 2488"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a0211a6cbbc9426f6f0d2391f1abaa9028b5e400",
          "message": "Merge pull request #1600 from TeoZosa/dependabot/github_actions/pypa/cibuildwheel-2.23.2",
          "timestamp": "2025-03-25T13:27:09Z",
          "tree_id": "c3614dd5bde6cd09a6bd617944664d6469b24867",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/a0211a6cbbc9426f6f0d2391f1abaa9028b5e400"
        },
        "date": 1743488446168,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 546.7798592789072,
            "unit": "iter/sec",
            "range": "stddev: 0.0012015422098309995",
            "extra": "mean: 1.8288896034297955 msec\nrounds: 933"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 714.3974726441635,
            "unit": "iter/sec",
            "range": "stddev: 0.0008913707714388618",
            "extra": "mean: 1.3997809878844478 msec\nrounds: 1073"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1139.6288123178858,
            "unit": "iter/sec",
            "range": "stddev: 0.0006079928241554122",
            "extra": "mean: 877.4786923525605 usec\nrounds: 1713"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1722.4113759263657,
            "unit": "iter/sec",
            "range": "stddev: 0.0004222588897877065",
            "extra": "mean: 580.581395348814 usec\nrounds: 2451"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 581.8437389509176,
            "unit": "iter/sec",
            "range": "stddev: 0.0010008558514758318",
            "extra": "mean: 1.7186745049504724 msec\nrounds: 808"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 788.9651629346555,
            "unit": "iter/sec",
            "range": "stddev: 0.0008446735559467406",
            "extra": "mean: 1.2674830866807527 msec\nrounds: 946"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 845.8155609784836,
            "unit": "iter/sec",
            "range": "stddev: 0.0009669919720784236",
            "extra": "mean: 1.1822908517350375 msec\nrounds: 1585"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1306.599612457374,
            "unit": "iter/sec",
            "range": "stddev: 0.0005735756532090877",
            "extra": "mean: 765.3453976763855 usec\nrounds: 2238"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 35.9496137781635,
            "unit": "iter/sec",
            "range": "stddev: 0.005962099081236842",
            "extra": "mean: 27.816710526315017 msec\nrounds: 38"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 40.35842121699747,
            "unit": "iter/sec",
            "range": "stddev: 0.0012794339542633998",
            "extra": "mean: 24.777976190476874 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1115.2455747798092,
            "unit": "iter/sec",
            "range": "stddev: 0.000360996057754291",
            "extra": "mean: 896.6634996040555 usec\nrounds: 1263"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1276.3223009255687,
            "unit": "iter/sec",
            "range": "stddev: 0.0004226990453230448",
            "extra": "mean: 783.5011574073538 usec\nrounds: 1728"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1485.59063956292,
            "unit": "iter/sec",
            "range": "stddev: 0.0004921938271864326",
            "extra": "mean: 673.1329434696848 usec\nrounds: 2565"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 918.9329682242972,
            "unit": "iter/sec",
            "range": "stddev: 0.0007016991996641931",
            "extra": "mean: 1.0882186563970526 msec\nrounds: 2337"
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
          "id": "b9fd1afebe57377efd502929e2703e943c5d1cbe",
          "message": ":package: Update `uv.lock`",
          "timestamp": "2025-04-01T15:20:22+09:00",
          "tree_id": "fd6c61965d489629ff86cdb3463937495f5da6a6",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/b9fd1afebe57377efd502929e2703e943c5d1cbe"
        },
        "date": 1743490840766,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 959.4760732488057,
            "unit": "iter/sec",
            "range": "stddev: 0.00003541875736052791",
            "extra": "mean: 1.0422354740061202 msec\nrounds: 981"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1061.3430697771578,
            "unit": "iter/sec",
            "range": "stddev: 0.00004193271944073983",
            "extra": "mean: 942.2024117140206 usec\nrounds: 1161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1727.2166108778295,
            "unit": "iter/sec",
            "range": "stddev: 0.000020893115183972933",
            "extra": "mean: 578.9661781285014 usec\nrounds: 1774"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2545.662325379954,
            "unit": "iter/sec",
            "range": "stddev: 0.000010474439049250396",
            "extra": "mean: 392.82507739935403 usec\nrounds: 2584"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 848.7027180821789,
            "unit": "iter/sec",
            "range": "stddev: 0.0000458487954362141",
            "extra": "mean: 1.1782688787184623 msec\nrounds: 874"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1007.7242505357572,
            "unit": "iter/sec",
            "range": "stddev: 0.00002116418632315956",
            "extra": "mean: 992.3349561830526 usec\nrounds: 1027"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1676.0504433932667,
            "unit": "iter/sec",
            "range": "stddev: 0.000010250396598508629",
            "extra": "mean: 596.6407538280523 usec\nrounds: 1698"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2306.541638320699,
            "unit": "iter/sec",
            "range": "stddev: 0.000012573601035495146",
            "extra": "mean: 433.54951126226365 usec\nrounds: 2353"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 45.73428381105725,
            "unit": "iter/sec",
            "range": "stddev: 0.0004685923436644477",
            "extra": "mean: 21.865434782608936 msec\nrounds: 46"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 45.84462379121541,
            "unit": "iter/sec",
            "range": "stddev: 0.0006863846569639734",
            "extra": "mean: 21.812808510637545 msec\nrounds: 47"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1282.2961801569184,
            "unit": "iter/sec",
            "range": "stddev: 0.0000482521200694448",
            "extra": "mean: 779.8510324483905 usec\nrounds: 1356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1765.1653113127438,
            "unit": "iter/sec",
            "range": "stddev: 0.000011563316252014893",
            "extra": "mean: 566.519177320738 usec\nrounds: 1799"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2454.788001283646,
            "unit": "iter/sec",
            "range": "stddev: 0.000030781275298688125",
            "extra": "mean: 407.3671532845545 usec\nrounds: 2740"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 2343.7923626211073,
            "unit": "iter/sec",
            "range": "stddev: 0.000019073464542806215",
            "extra": "mean: 426.65895492622957 usec\nrounds: 2507"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6e74ac142e575a4f068f4f9df184d4e84edd9ddd",
          "message": "Merge pull request #1605 from TeoZosa/fix/build/fix-project-agnost-uv-commands\n\n🐛  Make uv-based runner commands project agnostic",
          "timestamp": "2025-04-01T15:17:03+09:00",
          "tree_id": "dc994359d7dfe9db9359a957d39979e34a30bd27",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/6e74ac142e575a4f068f4f9df184d4e84edd9ddd"
        },
        "date": 1743491058086,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 620.1920293115755,
            "unit": "iter/sec",
            "range": "stddev: 0.0007313431614845588",
            "extra": "mean: 1.6124038245219279 msec\nrounds: 889"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 590.7989307371482,
            "unit": "iter/sec",
            "range": "stddev: 0.0013588001596207503",
            "extra": "mean: 1.6926232394366147 msec\nrounds: 1136"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1288.8857444314858,
            "unit": "iter/sec",
            "range": "stddev: 0.00043776179918518846",
            "extra": "mean: 775.8639618138454 usec\nrounds: 1676"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2111.117224566777,
            "unit": "iter/sec",
            "range": "stddev: 0.00013429811317798373",
            "extra": "mean: 473.6828388130887 usec\nrounds: 2494"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 627.2461002420647,
            "unit": "iter/sec",
            "range": "stddev: 0.0006831309760535022",
            "extra": "mean: 1.5942705735660745 msec\nrounds: 802"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 578.8744232129009,
            "unit": "iter/sec",
            "range": "stddev: 0.001070234313848351",
            "extra": "mean: 1.7274903846152756 msec\nrounds: 936"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1089.1209933008622,
            "unit": "iter/sec",
            "range": "stddev: 0.0004787316044887396",
            "extra": "mean: 918.1716321243997 usec\nrounds: 1544"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1819.9829709194098,
            "unit": "iter/sec",
            "range": "stddev: 0.00016874629226907716",
            "extra": "mean: 549.4556905083706 usec\nrounds: 2223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 32.905391856944085,
            "unit": "iter/sec",
            "range": "stddev: 0.007950783070012754",
            "extra": "mean: 30.390156249999745 msec\nrounds: 32"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.895000502511532,
            "unit": "iter/sec",
            "range": "stddev: 0.011354034761886546",
            "extra": "mean: 37.18163157894781 msec\nrounds: 38"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 799.867250556823,
            "unit": "iter/sec",
            "range": "stddev: 0.0008611157885972757",
            "extra": "mean: 1.2502074554294549 msec\nrounds: 1234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1093.4642511445109,
            "unit": "iter/sec",
            "range": "stddev: 0.0005539571855599387",
            "extra": "mean: 914.5246394231149 usec\nrounds: 1664"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1214.9341943277216,
            "unit": "iter/sec",
            "range": "stddev: 0.0006260587636637173",
            "extra": "mean: 823.0898468977125 usec\nrounds: 2482"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 957.2353835100212,
            "unit": "iter/sec",
            "range": "stddev: 0.0007426076755961517",
            "extra": "mean: 1.0446751313487475 msec\nrounds: 2284"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f4811f792e60e07946b7d9193fd5328e463ad5ed",
          "message": "Merge pull request #1596 from TeoZosa/dependabot/uv/pytest-8.3.5",
          "timestamp": "2025-04-01T06:55:52Z",
          "tree_id": "ba2369157e0c01b9ecea424f589d8c97ce564133",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/f4811f792e60e07946b7d9193fd5328e463ad5ed"
        },
        "date": 1743494112660,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 830.4062983667587,
            "unit": "iter/sec",
            "range": "stddev: 0.00008845567932863713",
            "extra": "mean: 1.2042297872340297 msec\nrounds: 940"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1014.1685864536806,
            "unit": "iter/sec",
            "range": "stddev: 0.00006893924782237167",
            "extra": "mean: 986.0293577981694 usec\nrounds: 1090"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1522.8642145899557,
            "unit": "iter/sec",
            "range": "stddev: 0.00007935217237144791",
            "extra": "mean: 656.6573634204535 usec\nrounds: 1684"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2328.009722864151,
            "unit": "iter/sec",
            "range": "stddev: 0.000023507341497939343",
            "extra": "mean: 429.55147058823263 usec\nrounds: 2584"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 786.0269908462877,
            "unit": "iter/sec",
            "range": "stddev: 0.00010526781501879739",
            "extra": "mean: 1.2722209436133165 msec\nrounds: 869"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 989.4276204995662,
            "unit": "iter/sec",
            "range": "stddev: 0.00003621968338170013",
            "extra": "mean: 1.0106853490658527 msec\nrounds: 1017"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1670.8618616431766,
            "unit": "iter/sec",
            "range": "stddev: 0.000010390729196539834",
            "extra": "mean: 598.4935217903469 usec\nrounds: 1698"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2344.210900970898,
            "unit": "iter/sec",
            "range": "stddev: 0.000007956721445561352",
            "extra": "mean: 426.5827787021346 usec\nrounds: 2404"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 42.265465714897225,
            "unit": "iter/sec",
            "range": "stddev: 0.001778327085139012",
            "extra": "mean: 23.659978260869654 msec\nrounds: 46"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 46.46426700147397,
            "unit": "iter/sec",
            "range": "stddev: 0.00025525075733789416",
            "extra": "mean: 21.52191489361658 msec\nrounds: 47"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1351.0817542731966,
            "unit": "iter/sec",
            "range": "stddev: 0.000014642488418534329",
            "extra": "mean: 740.1476608186023 usec\nrounds: 1368"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1691.7256257089393,
            "unit": "iter/sec",
            "range": "stddev: 0.00003639501793980541",
            "extra": "mean: 591.1124031007906 usec\nrounds: 1806"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2627.34538810108,
            "unit": "iter/sec",
            "range": "stddev: 0.000016724304526301634",
            "extra": "mean: 380.61231101509355 usec\nrounds: 2778"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 2191.479430805165,
            "unit": "iter/sec",
            "range": "stddev: 0.00003812411689373176",
            "extra": "mean: 456.3127474267887 usec\nrounds: 2526"
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
          "id": "fa0fb0024a459fed6f7f62d5ce450c14ff89552f",
          "message": ":memo: Point CI status badge to latest trunk run",
          "timestamp": "2025-04-01T16:37:12+09:00",
          "tree_id": "46ab55f494444d3fff603a4aef26f5e242b36d8b",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/fa0fb0024a459fed6f7f62d5ce450c14ff89552f"
        },
        "date": 1743496306968,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 836.8944044215569,
            "unit": "iter/sec",
            "range": "stddev: 0.00020056713502454584",
            "extra": "mean: 1.1948938775509894 msec\nrounds: 980"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 989.3019351228135,
            "unit": "iter/sec",
            "range": "stddev: 0.0001345315013779638",
            "extra": "mean: 1.0108137510878903 msec\nrounds: 1149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1523.7448858480527,
            "unit": "iter/sec",
            "range": "stddev: 0.00013305240070263976",
            "extra": "mean: 656.2778384279478 usec\nrounds: 1832"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2156.5020702910983,
            "unit": "iter/sec",
            "range": "stddev: 0.00009194207186639662",
            "extra": "mean: 463.71390678285496 usec\nrounds: 2639"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 448.38112502512934,
            "unit": "iter/sec",
            "range": "stddev: 0.0011743812992647958",
            "extra": "mean: 2.2302455303932684 msec\nrounds: 839"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 623.7979586245052,
            "unit": "iter/sec",
            "range": "stddev: 0.0007676195664786174",
            "extra": "mean: 1.603083155650321 msec\nrounds: 938"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 869.1043509115536,
            "unit": "iter/sec",
            "range": "stddev: 0.0007876640500086118",
            "extra": "mean: 1.150609819121441 msec\nrounds: 1548"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1523.5892935619613,
            "unit": "iter/sec",
            "range": "stddev: 0.000392687551679379",
            "extra": "mean: 656.3448589626965 usec\nrounds: 2198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.20328033837985,
            "unit": "iter/sec",
            "range": "stddev: 0.007595362202174433",
            "extra": "mean: 35.456868421052796 msec\nrounds: 38"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 34.74604206943947,
            "unit": "iter/sec",
            "range": "stddev: 0.006721483959419876",
            "extra": "mean: 28.780256410255717 msec\nrounds: 39"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 915.1882764667243,
            "unit": "iter/sec",
            "range": "stddev: 0.0006237378546983726",
            "extra": "mean: 1.0926713395638208 msec\nrounds: 1284"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1413.3047855157076,
            "unit": "iter/sec",
            "range": "stddev: 0.00034715566904090897",
            "extra": "mean: 707.5614617940356 usec\nrounds: 1806"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1998.5640662783119,
            "unit": "iter/sec",
            "range": "stddev: 0.00012624074248956921",
            "extra": "mean: 500.359241353809 usec\nrounds: 2689"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1488.9857713871074,
            "unit": "iter/sec",
            "range": "stddev: 0.0002222838229789457",
            "extra": "mean: 671.5980899323312 usec\nrounds: 2513"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "de0a87e062a3a55aa4b241d8e7f9f33a736ac3a3",
          "message": "Merge pull request #1604 from TeoZosa/dependabot/github_actions/crazy-max/ghaction-github-labeler-5.3.0",
          "timestamp": "2025-04-01T07:58:24Z",
          "tree_id": "e7f6bca3b56f5815ab647e908d4ee3049a00a506",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/de0a87e062a3a55aa4b241d8e7f9f33a736ac3a3"
        },
        "date": 1743496695837,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 850.8209247755217,
            "unit": "iter/sec",
            "range": "stddev: 0.00014176832216225566",
            "extra": "mean: 1.175335456475565 msec\nrounds: 942"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 991.8149938115248,
            "unit": "iter/sec",
            "range": "stddev: 0.00007220829860889763",
            "extra": "mean: 1.0082525533890352 msec\nrounds: 1077"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1566.1387190347132,
            "unit": "iter/sec",
            "range": "stddev: 0.00006519251766831645",
            "extra": "mean: 638.5130434782611 usec\nrounds: 1725"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2179.1462913412693,
            "unit": "iter/sec",
            "range": "stddev: 0.00007480177249600598",
            "extra": "mean: 458.8953040800661 usec\nrounds: 2598"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 743.5267554521439,
            "unit": "iter/sec",
            "range": "stddev: 0.0002528401518446819",
            "extra": "mean: 1.3449415137615228 msec\nrounds: 872"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 997.7064330836951,
            "unit": "iter/sec",
            "range": "stddev: 0.00009155513818876836",
            "extra": "mean: 1.0022988394584327 msec\nrounds: 1034"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1702.6306967552223,
            "unit": "iter/sec",
            "range": "stddev: 0.00002740000585602331",
            "extra": "mean: 587.3264248704922 usec\nrounds: 1737"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2303.346079664738,
            "unit": "iter/sec",
            "range": "stddev: 0.00004194838686865619",
            "extra": "mean: 434.1509983361051 usec\nrounds: 2404"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 44.336242119233155,
            "unit": "iter/sec",
            "range": "stddev: 0.0010111269999860748",
            "extra": "mean: 22.554911111111014 msec\nrounds: 45"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 45.76094482423826,
            "unit": "iter/sec",
            "range": "stddev: 0.000623519539730489",
            "extra": "mean: 21.852695652173875 msec\nrounds: 46"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1292.0785224271124,
            "unit": "iter/sec",
            "range": "stddev: 0.00008852758224441497",
            "extra": "mean: 773.9467707593686 usec\nrounds: 1409"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1800.0885385568838,
            "unit": "iter/sec",
            "range": "stddev: 0.000017007763061659305",
            "extra": "mean: 555.5282301845507 usec\nrounds: 1842"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2022.1088824453527,
            "unit": "iter/sec",
            "range": "stddev: 0.00015246191173543165",
            "extra": "mean: 494.53321167883496 usec\nrounds: 2740"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1611.1102980618255,
            "unit": "iter/sec",
            "range": "stddev: 0.00019031093278111769",
            "extra": "mean: 620.6899684044013 usec\nrounds: 2532"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9e2d80ae41a7167c8025a81b32dbbf2fed0ea984",
          "message": "Merge pull request #1603 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.25.0",
          "timestamp": "2025-04-01T08:15:15Z",
          "tree_id": "db2c21c236147279f87ec9925684a32c85e28fcc",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/9e2d80ae41a7167c8025a81b32dbbf2fed0ea984"
        },
        "date": 1743497936388,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 821.573343576019,
            "unit": "iter/sec",
            "range": "stddev: 0.0001508701437351334",
            "extra": "mean: 1.2171767838125718 msec\nrounds: 939"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 983.3983770055016,
            "unit": "iter/sec",
            "range": "stddev: 0.00012107726128646103",
            "extra": "mean: 1.0168818897637917 msec\nrounds: 1143"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1628.9970349590396,
            "unit": "iter/sec",
            "range": "stddev: 0.00005913383878688913",
            "extra": "mean: 613.8746594005584 usec\nrounds: 1835"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2252.232824460375,
            "unit": "iter/sec",
            "range": "stddev: 0.000028903048147605258",
            "extra": "mean: 444.00382995021647 usec\nrounds: 2611"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 816.048134660138,
            "unit": "iter/sec",
            "range": "stddev: 0.00013553154563696103",
            "extra": "mean: 1.2254179104477374 msec\nrounds: 871"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1010.2197791429899,
            "unit": "iter/sec",
            "range": "stddev: 0.000029676214413566216",
            "extra": "mean: 989.8836081474668 usec\nrounds: 1031"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1680.0009398606828,
            "unit": "iter/sec",
            "range": "stddev: 0.000024119394383558577",
            "extra": "mean: 595.2377622377562 usec\nrounds: 1716"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2321.3769937632774,
            "unit": "iter/sec",
            "range": "stddev: 0.0000245218414316158",
            "extra": "mean: 430.7788018433231 usec\nrounds: 2387"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 44.60197200185574,
            "unit": "iter/sec",
            "range": "stddev: 0.0011125603885550803",
            "extra": "mean: 22.420533333333182 msec\nrounds: 45"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 41.99183715200499,
            "unit": "iter/sec",
            "range": "stddev: 0.003822109748801803",
            "extra": "mean: 23.814152173912518 msec\nrounds: 46"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1235.294117647229,
            "unit": "iter/sec",
            "range": "stddev: 0.0001732572597663371",
            "extra": "mean: 809.5238095236979 usec\nrounds: 1365"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1633.49345536755,
            "unit": "iter/sec",
            "range": "stddev: 0.00011839304236664695",
            "extra": "mean: 612.1848830884918 usec\nrounds: 1839"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1895.186800034316,
            "unit": "iter/sec",
            "range": "stddev: 0.0002135342584731985",
            "extra": "mean: 527.6524720317242 usec\nrounds: 2771"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1502.4334437415878,
            "unit": "iter/sec",
            "range": "stddev: 0.00023412097414637876",
            "extra": "mean: 665.5868878355425 usec\nrounds: 2532"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "93d5ceda0a44801da6451a9e2ebc5aee523caad8",
          "message": "Merge pull request #1601 from TeoZosa/dependabot/pip/docs/orjson-3.10.16",
          "timestamp": "2025-04-01T08:31:43Z",
          "tree_id": "d786369fa1e605df9e060b92ce6c3589d79b4f6b",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/93d5ceda0a44801da6451a9e2ebc5aee523caad8"
        },
        "date": 1743498574531,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 855.6124231622322,
            "unit": "iter/sec",
            "range": "stddev: 0.00012170335823099228",
            "extra": "mean: 1.1687534833869409 msec\nrounds: 933"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1011.9861093510249,
            "unit": "iter/sec",
            "range": "stddev: 0.0000720309023262849",
            "extra": "mean: 988.1558558558561 usec\nrounds: 1110"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1633.6382432741234,
            "unit": "iter/sec",
            "range": "stddev: 0.000060637646463514924",
            "extra": "mean: 612.1306256860202 usec\nrounds: 1822"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2283.981773633008,
            "unit": "iter/sec",
            "range": "stddev: 0.00003055457518408997",
            "extra": "mean: 437.83186518575116 usec\nrounds: 2611"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 752.9401139049736,
            "unit": "iter/sec",
            "range": "stddev: 0.00011786674887091505",
            "extra": "mean: 1.3281268742791503 msec\nrounds: 867"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 907.0879013486787,
            "unit": "iter/sec",
            "range": "stddev: 0.0001774133152093717",
            "extra": "mean: 1.102428991185063 msec\nrounds: 1021"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1565.3278945135407,
            "unit": "iter/sec",
            "range": "stddev: 0.00011424699997811079",
            "extra": "mean: 638.8437869822613 usec\nrounds: 1690"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2284.280384068116,
            "unit": "iter/sec",
            "range": "stddev: 0.00004651236066361182",
            "extra": "mean: 437.7746300211545 usec\nrounds: 2365"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 41.8643086746487,
            "unit": "iter/sec",
            "range": "stddev: 0.004305573126745965",
            "extra": "mean: 23.886695652173966 msec\nrounds: 46"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 39.62623842762951,
            "unit": "iter/sec",
            "range": "stddev: 0.004718785392778211",
            "extra": "mean: 25.235804347826946 msec\nrounds: 46"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1219.4344938905228,
            "unit": "iter/sec",
            "range": "stddev: 0.00012095708932004054",
            "extra": "mean: 820.0522496370985 usec\nrounds: 1378"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1760.9061317300234,
            "unit": "iter/sec",
            "range": "stddev: 0.000052453349945787985",
            "extra": "mean: 567.8894416805387 usec\nrounds: 1809"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1674.7616543924385,
            "unit": "iter/sec",
            "range": "stddev: 0.00021347384700827162",
            "extra": "mean: 597.0998902305146 usec\nrounds: 2733"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1401.561257822871,
            "unit": "iter/sec",
            "range": "stddev: 0.0003354749328599381",
            "extra": "mean: 713.4900414936981 usec\nrounds: 2410"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "66c02bb560e2228fa82755f01aa5d352eb128d10",
          "message": "Merge pull request #1606 from TeoZosa/dependabot/uv/pytest-cov-6.1.0",
          "timestamp": "2025-04-01T13:49:40Z",
          "tree_id": "5257983c93509f790fbfca27d8b04534d3a130cd",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/66c02bb560e2228fa82755f01aa5d352eb128d10"
        },
        "date": 1743517103949,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 813.6853796729666,
            "unit": "iter/sec",
            "range": "stddev: 0.00014061026634818734",
            "extra": "mean: 1.2289762419006671 msec\nrounds: 926"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 995.1217594896034,
            "unit": "iter/sec",
            "range": "stddev: 0.00007575008760741313",
            "extra": "mean: 1.004902154398572 msec\nrounds: 1114"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1536.4463298463677,
            "unit": "iter/sec",
            "range": "stddev: 0.00009377104440963772",
            "extra": "mean: 650.8525423728872 usec\nrounds: 1770"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2282.4581149754154,
            "unit": "iter/sec",
            "range": "stddev: 0.000026619846402884467",
            "extra": "mean: 438.1241405653444 usec\nrounds: 2618"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 796.4548498080156,
            "unit": "iter/sec",
            "range": "stddev: 0.00010879565856733178",
            "extra": "mean: 1.2555639534884477 msec\nrounds: 860"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 975.7324663543442,
            "unit": "iter/sec",
            "range": "stddev: 0.00007313438523292317",
            "extra": "mean: 1.0248710937500392 msec\nrounds: 1024"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1627.8896474243068,
            "unit": "iter/sec",
            "range": "stddev: 0.00007170590773156913",
            "extra": "mean: 614.292253521133 usec\nrounds: 1704"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2295.9215491378272,
            "unit": "iter/sec",
            "range": "stddev: 0.00004362158182902202",
            "extra": "mean: 435.55495194316364 usec\nrounds: 2393"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 37.945342209243584,
            "unit": "iter/sec",
            "range": "stddev: 0.004891147281316779",
            "extra": "mean: 26.35369565217407 msec\nrounds: 46"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 38.857915188375785,
            "unit": "iter/sec",
            "range": "stddev: 0.007712447462563132",
            "extra": "mean: 25.73478260869607 msec\nrounds: 46"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1271.473312821079,
            "unit": "iter/sec",
            "range": "stddev: 0.00011627431258569793",
            "extra": "mean: 786.4891774891066 usec\nrounds: 1386"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1798.9432560774933,
            "unit": "iter/sec",
            "range": "stddev: 0.000010972775415381572",
            "extra": "mean: 555.8819026790486 usec\nrounds: 1829"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1884.4078961357977,
            "unit": "iter/sec",
            "range": "stddev: 0.00016997107717299002",
            "extra": "mean: 530.670669577759 usec\nrounds: 2748"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1562.7030721135536,
            "unit": "iter/sec",
            "range": "stddev: 0.00022905439583031855",
            "extra": "mean: 639.9168324712522 usec\nrounds: 2513"
          }
        ]
      }
    ]
  }
}