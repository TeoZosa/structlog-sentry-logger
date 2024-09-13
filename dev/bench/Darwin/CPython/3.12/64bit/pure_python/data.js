window.BENCHMARK_DATA = {
  "lastUpdate": 1726189664509,
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
      }
    ]
  }
}