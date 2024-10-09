window.BENCHMARK_DATA = {
  "lastUpdate": 1728483534186,
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
        "date": 1726186987832,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 232.15276438855432,
            "unit": "iter/sec",
            "range": "stddev: 0.00004307247552306484",
            "extra": "mean: 4.307508474576245 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 336.7772628522816,
            "unit": "iter/sec",
            "range": "stddev: 0.00003549500277461465",
            "extra": "mean: 2.969321597101475 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 416.0880096837283,
            "unit": "iter/sec",
            "range": "stddev: 0.00026180359425568005",
            "extra": "mean: 2.403337699541277 msec\nrounds: 436"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 974.0298494971253,
            "unit": "iter/sec",
            "range": "stddev: 0.00004071615214627386",
            "extra": "mean: 1.026662581764083 msec\nrounds: 1009"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 214.97253998199014,
            "unit": "iter/sec",
            "range": "stddev: 0.00018703252833992195",
            "extra": "mean: 4.651756917808096 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 301.3936122709819,
            "unit": "iter/sec",
            "range": "stddev: 0.00004264457152152883",
            "extra": "mean: 3.3179203516128393 msec\nrounds: 310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 408.34304551241473,
            "unit": "iter/sec",
            "range": "stddev: 0.00003121104180062744",
            "extra": "mean: 2.4489213444179923 msec\nrounds: 421"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 892.510446147651,
            "unit": "iter/sec",
            "range": "stddev: 0.000030321345785506948",
            "extra": "mean: 1.1204350652883748 msec\nrounds: 919"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.362082403070605,
            "unit": "iter/sec",
            "range": "stddev: 0.0002793035125391528",
            "extra": "mean: 57.596777666666476 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.87546094855288,
            "unit": "iter/sec",
            "range": "stddev: 0.0011595418145627233",
            "extra": "mean: 55.94261333333369 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 329.11029514481856,
            "unit": "iter/sec",
            "range": "stddev: 0.00006391754985676883",
            "extra": "mean: 3.0384950417912924 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 636.859804787329,
            "unit": "iter/sec",
            "range": "stddev: 0.00005740781109181622",
            "extra": "mean: 1.5702042937596554 msec\nrounds: 657"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 883.4268328229,
            "unit": "iter/sec",
            "range": "stddev: 0.00004501417123569023",
            "extra": "mean: 1.131955655913917 msec\nrounds: 1023"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 820.4796348544521,
            "unit": "iter/sec",
            "range": "stddev: 0.00004349234604075048",
            "extra": "mean: 1.2187992943632215 msec\nrounds: 958"
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
        "date": 1726187242053,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 228.00222104046236,
            "unit": "iter/sec",
            "range": "stddev: 0.00019806896813321704",
            "extra": "mean: 4.385922187234024 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 332.5628311465902,
            "unit": "iter/sec",
            "range": "stddev: 0.00004002109803856598",
            "extra": "mean: 3.0069505860058383 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 407.9964118439112,
            "unit": "iter/sec",
            "range": "stddev: 0.00010749798014605071",
            "extra": "mean: 2.4510019474940234 msec\nrounds: 419"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 990.8665104783147,
            "unit": "iter/sec",
            "range": "stddev: 0.00003844964316359123",
            "extra": "mean: 1.0092176790971332 msec\nrounds: 1019"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 209.24934740774967,
            "unit": "iter/sec",
            "range": "stddev: 0.00011486165004693849",
            "extra": "mean: 4.778987425233731 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 299.3940803306609,
            "unit": "iter/sec",
            "range": "stddev: 0.00010269897868959886",
            "extra": "mean: 3.340079399350736 msec\nrounds: 308"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 394.6516939703309,
            "unit": "iter/sec",
            "range": "stddev: 0.000058737288831483446",
            "extra": "mean: 2.5338799130434695 msec\nrounds: 414"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 919.5415925645403,
            "unit": "iter/sec",
            "range": "stddev: 0.000042635993854225244",
            "extra": "mean: 1.087498388420981 msec\nrounds: 950"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.280026271169515,
            "unit": "iter/sec",
            "range": "stddev: 0.00034876847057547665",
            "extra": "mean: 57.87028238888898 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.86717979857082,
            "unit": "iter/sec",
            "range": "stddev: 0.00012419895091194855",
            "extra": "mean: 55.968541833333376 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 315.61230743573844,
            "unit": "iter/sec",
            "range": "stddev: 0.00007441952775276496",
            "extra": "mean: 3.1684442477060535 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 634.4529299945642,
            "unit": "iter/sec",
            "range": "stddev: 0.00005934774767447998",
            "extra": "mean: 1.5761610558068788 msec\nrounds: 663"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 903.3046073985835,
            "unit": "iter/sec",
            "range": "stddev: 0.00003965871661608205",
            "extra": "mean: 1.1070462741022529 msec\nrounds: 1058"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 823.3366071833558,
            "unit": "iter/sec",
            "range": "stddev: 0.00007580798048677505",
            "extra": "mean: 1.2145700692466617 msec\nrounds: 982"
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
        "date": 1726189469270,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 229.98592150926513,
            "unit": "iter/sec",
            "range": "stddev: 0.00023369033658955063",
            "extra": "mean: 4.348092237288161 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 337.5590377745943,
            "unit": "iter/sec",
            "range": "stddev: 0.00007589139628615567",
            "extra": "mean: 2.9624447521614043 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 420.61190139273236,
            "unit": "iter/sec",
            "range": "stddev: 0.00006191268688875169",
            "extra": "mean: 2.377488598607873 msec\nrounds: 431"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 994.5666151037225,
            "unit": "iter/sec",
            "range": "stddev: 0.000018183431992936562",
            "extra": "mean: 1.0054630678466026 msec\nrounds: 1017"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 212.01303101333053,
            "unit": "iter/sec",
            "range": "stddev: 0.00006992368707923488",
            "extra": "mean: 4.716691211009214 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 303.99827131627137,
            "unit": "iter/sec",
            "range": "stddev: 0.000044908147105873074",
            "extra": "mean: 3.2894923897762163 msec\nrounds: 313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 408.4517024665316,
            "unit": "iter/sec",
            "range": "stddev: 0.00007038651335372302",
            "extra": "mean: 2.4482698785713586 msec\nrounds: 420"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 896.6171029702161,
            "unit": "iter/sec",
            "range": "stddev: 0.00004469541834912127",
            "extra": "mean: 1.1153032846321003 msec\nrounds: 924"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.17258406341972,
            "unit": "iter/sec",
            "range": "stddev: 0.00012271218847649537",
            "extra": "mean: 58.23235433333274 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.8752545154461,
            "unit": "iter/sec",
            "range": "stddev: 0.0001974496634315029",
            "extra": "mean: 55.943259388888414 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 323.4505049491141,
            "unit": "iter/sec",
            "range": "stddev: 0.00010380126955600869",
            "extra": "mean: 3.091663128358146 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 637.9131189687317,
            "unit": "iter/sec",
            "range": "stddev: 0.00007034702495574149",
            "extra": "mean: 1.5676115920246758 msec\nrounds: 652"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 915.92441701787,
            "unit": "iter/sec",
            "range": "stddev: 0.0000368599873729445",
            "extra": "mean: 1.0917931451766172 msec\nrounds: 1047"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 834.692703263786,
            "unit": "iter/sec",
            "range": "stddev: 0.00002316676948105649",
            "extra": "mean: 1.1980456952478862 msec\nrounds: 968"
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
        "date": 1726190534569,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 224.3510766952417,
            "unit": "iter/sec",
            "range": "stddev: 0.0002628989005740483",
            "extra": "mean: 4.457299758620723 msec\nrounds: 232"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 327.19784197908155,
            "unit": "iter/sec",
            "range": "stddev: 0.00003915269022113525",
            "extra": "mean: 3.0562548761062183 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 405.7514652370489,
            "unit": "iter/sec",
            "range": "stddev: 0.000034676891891744146",
            "extra": "mean: 2.4645628806682884 msec\nrounds: 419"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 988.4308807160896,
            "unit": "iter/sec",
            "range": "stddev: 0.00003279168867656839",
            "extra": "mean: 1.0117045303921797 msec\nrounds: 1020"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 208.3637367066854,
            "unit": "iter/sec",
            "range": "stddev: 0.000034348613979671694",
            "extra": "mean: 4.799299608490439 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 295.9437831186361,
            "unit": "iter/sec",
            "range": "stddev: 0.0000354845298889585",
            "extra": "mean: 3.379020128289454 msec\nrounds: 304"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 392.23549670463046,
            "unit": "iter/sec",
            "range": "stddev: 0.00007479852873299089",
            "extra": "mean: 2.549488785185195 msec\nrounds: 405"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 913.6491755556658,
            "unit": "iter/sec",
            "range": "stddev: 0.00002192239681142182",
            "extra": "mean: 1.0945120148461986 msec\nrounds: 943"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.09107095370904,
            "unit": "iter/sec",
            "range": "stddev: 0.0005036277276776915",
            "extra": "mean: 58.510084166667376 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.835605266751912,
            "unit": "iter/sec",
            "range": "stddev: 0.0007826591808916969",
            "extra": "mean: 56.06762344444465 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 315.8947632539186,
            "unit": "iter/sec",
            "range": "stddev: 0.000051977420476194316",
            "extra": "mean: 3.165611198170425 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 639.1724196005235,
            "unit": "iter/sec",
            "range": "stddev: 0.00004350100287304904",
            "extra": "mean: 1.5645230759878377 msec\nrounds: 658"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 882.0808708139106,
            "unit": "iter/sec",
            "range": "stddev: 0.0000420413191745964",
            "extra": "mean: 1.1336829003867677 msec\nrounds: 1034"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 816.7406250117838,
            "unit": "iter/sec",
            "range": "stddev: 0.000028943152073719774",
            "extra": "mean: 1.2243789146469506 msec\nrounds: 949"
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
        "date": 1726191038319,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 230.1845444698272,
            "unit": "iter/sec",
            "range": "stddev: 0.00004132718651361515",
            "extra": "mean: 4.344340330508511 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 339.7621296513806,
            "unit": "iter/sec",
            "range": "stddev: 0.0000643881779427528",
            "extra": "mean: 2.943235613180519 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 419.105899059153,
            "unit": "iter/sec",
            "range": "stddev: 0.00003456381473432155",
            "extra": "mean: 2.3860317935034816 msec\nrounds: 431"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 990.2234412834154,
            "unit": "iter/sec",
            "range": "stddev: 0.00005155537760258648",
            "extra": "mean: 1.0098730834971077 msec\nrounds: 1018"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 211.64882877109088,
            "unit": "iter/sec",
            "range": "stddev: 0.00004001557733760679",
            "extra": "mean: 4.724807625000143 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 301.7322939843092,
            "unit": "iter/sec",
            "range": "stddev: 0.00003364664737656034",
            "extra": "mean: 3.314196126623431 msec\nrounds: 308"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 407.80122056915377,
            "unit": "iter/sec",
            "range": "stddev: 0.00003209393081192836",
            "extra": "mean: 2.452175102870794 msec\nrounds: 418"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 897.0547893269171,
            "unit": "iter/sec",
            "range": "stddev: 0.00002066916783360624",
            "extra": "mean: 1.1147591115926434 msec\nrounds: 923"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.341660635630642,
            "unit": "iter/sec",
            "range": "stddev: 0.0004096206730840155",
            "extra": "mean: 57.6646043888884 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.79860909407272,
            "unit": "iter/sec",
            "range": "stddev: 0.0007028690420228927",
            "extra": "mean: 56.184165555555644 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 323.8015221975211,
            "unit": "iter/sec",
            "range": "stddev: 0.00003935910161225044",
            "extra": "mean: 3.088311608955295 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 646.342852732022,
            "unit": "iter/sec",
            "range": "stddev: 0.000036277959272051006",
            "extra": "mean: 1.5471664856710443 msec\nrounds: 663"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 884.0249387241377,
            "unit": "iter/sec",
            "range": "stddev: 0.00003889683635730906",
            "extra": "mean: 1.131189807205261 msec\nrounds: 1027"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 815.1217695936205,
            "unit": "iter/sec",
            "range": "stddev: 0.00005385656735092058",
            "extra": "mean: 1.2268105665961426 msec\nrounds: 946"
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
        "date": 1726191331125,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 230.95156561202725,
            "unit": "iter/sec",
            "range": "stddev: 0.00008788083732897853",
            "extra": "mean: 4.329912193277303 msec\nrounds: 238"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 335.3736530458156,
            "unit": "iter/sec",
            "range": "stddev: 0.00007338562341866583",
            "extra": "mean: 2.981748837209312 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 416.5785845157146,
            "unit": "iter/sec",
            "range": "stddev: 0.000038884243781124304",
            "extra": "mean: 2.400507460465186 msec\nrounds: 430"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1005.2172605258701,
            "unit": "iter/sec",
            "range": "stddev: 0.000021937923253557387",
            "extra": "mean: 994.8098180057705 usec\nrounds: 1033"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 211.45428714734996,
            "unit": "iter/sec",
            "range": "stddev: 0.0001068504062976176",
            "extra": "mean: 4.729154530232623 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 295.4510910914337,
            "unit": "iter/sec",
            "range": "stddev: 0.00009368276143926453",
            "extra": "mean: 3.3846549569536997 msec\nrounds: 302"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 401.9078227010887,
            "unit": "iter/sec",
            "range": "stddev: 0.00008650751815731213",
            "extra": "mean: 2.488132709832152 msec\nrounds: 417"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 907.4882501141935,
            "unit": "iter/sec",
            "range": "stddev: 0.00007084543826829593",
            "extra": "mean: 1.1019426420938954 msec\nrounds: 936"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.38624273381463,
            "unit": "iter/sec",
            "range": "stddev: 0.00010991222054563804",
            "extra": "mean: 57.51673983333343 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.844063812426857,
            "unit": "iter/sec",
            "range": "stddev: 0.00024944946717890564",
            "extra": "mean: 56.04104594736912 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 319.9901079677885,
            "unit": "iter/sec",
            "range": "stddev: 0.00009284358933588804",
            "extra": "mean: 3.1250966048633733 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 629.7008514803733,
            "unit": "iter/sec",
            "range": "stddev: 0.0000394341400039201",
            "extra": "mean: 1.5880556579351683 msec\nrounds: 649"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 901.9794663681281,
            "unit": "iter/sec",
            "range": "stddev: 0.000057177162552616046",
            "extra": "mean: 1.1086726885552696 msec\nrounds: 1066"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 830.3589231253114,
            "unit": "iter/sec",
            "range": "stddev: 0.000026490088144209046",
            "extra": "mean: 1.204298493278295 msec\nrounds: 967"
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
        "date": 1726208612499,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 227.12574122950525,
            "unit": "iter/sec",
            "range": "stddev: 0.00005551384442108776",
            "extra": "mean: 4.4028474913793385 msec\nrounds: 232"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 323.7686653984632,
            "unit": "iter/sec",
            "range": "stddev: 0.00007527530071081763",
            "extra": "mean: 3.0886250180180244 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 406.83459654931124,
            "unit": "iter/sec",
            "range": "stddev: 0.00006317119409962164",
            "extra": "mean: 2.458001380614623 msec\nrounds: 423"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 997.566655994765,
            "unit": "iter/sec",
            "range": "stddev: 0.00002722174718864887",
            "extra": "mean: 1.002439279611655 msec\nrounds: 1030"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 207.1435323021726,
            "unit": "iter/sec",
            "range": "stddev: 0.00005674188119361004",
            "extra": "mean: 4.827570471962603 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 293.64683529484495,
            "unit": "iter/sec",
            "range": "stddev: 0.0000841549680853793",
            "extra": "mean: 3.4054513102309447 msec\nrounds: 303"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 400.61038388158335,
            "unit": "iter/sec",
            "range": "stddev: 0.0000360891644174524",
            "extra": "mean: 2.4961909132529887 msec\nrounds: 415"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 914.4926266742965,
            "unit": "iter/sec",
            "range": "stddev: 0.00005040676394062921",
            "extra": "mean: 1.0935025289779157 msec\nrounds: 949"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.27047060749598,
            "unit": "iter/sec",
            "range": "stddev: 0.0004814303535076152",
            "extra": "mean: 57.90230172222207 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.810620844065895,
            "unit": "iter/sec",
            "range": "stddev: 0.0005112312938247966",
            "extra": "mean: 56.146274111111516 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 317.72305972383094,
            "unit": "iter/sec",
            "range": "stddev: 0.00012259238611642812",
            "extra": "mean: 3.1473950958083217 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 635.9556521289798,
            "unit": "iter/sec",
            "range": "stddev: 0.00006108589028399868",
            "extra": "mean: 1.5724366890243275 msec\nrounds: 656"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 907.326146883549,
            "unit": "iter/sec",
            "range": "stddev: 0.00004458786318507071",
            "extra": "mean: 1.1021395155807687 msec\nrounds: 1059"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 852.1552096700751,
            "unit": "iter/sec",
            "range": "stddev: 0.000047093419572365096",
            "extra": "mean: 1.173495143434217 msec\nrounds: 990"
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
        "date": 1726208977589,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 228.6137660695648,
            "unit": "iter/sec",
            "range": "stddev: 0.00012019248363284748",
            "extra": "mean: 4.374189783898273 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 330.36938199298766,
            "unit": "iter/sec",
            "range": "stddev: 0.0000791874994726587",
            "extra": "mean: 3.0269148852941394 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 408.1657258643555,
            "unit": "iter/sec",
            "range": "stddev: 0.00006107353095456099",
            "extra": "mean: 2.4499852305882417 msec\nrounds: 425"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 989.309641391031,
            "unit": "iter/sec",
            "range": "stddev: 0.00002745004788052578",
            "extra": "mean: 1.0108058773125244 msec\nrounds: 1027"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 209.90256757262415,
            "unit": "iter/sec",
            "range": "stddev: 0.00008791572148205693",
            "extra": "mean: 4.764115139534966 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 296.40334246029926,
            "unit": "iter/sec",
            "range": "stddev: 0.00006045116114029972",
            "extra": "mean: 3.3737811176469497 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 400.8001221243781,
            "unit": "iter/sec",
            "range": "stddev: 0.00007441387489988604",
            "extra": "mean: 2.4950092198067635 msec\nrounds: 414"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 908.0374178050312,
            "unit": "iter/sec",
            "range": "stddev: 0.00006121305506767817",
            "extra": "mean: 1.1012762033719565 msec\nrounds: 949"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.229415742060432,
            "unit": "iter/sec",
            "range": "stddev: 0.0002108061946067292",
            "extra": "mean: 58.04027338888811 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.92873701746167,
            "unit": "iter/sec",
            "range": "stddev: 0.0001901555682815663",
            "extra": "mean: 55.776377277777634 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 315.54440019773415,
            "unit": "iter/sec",
            "range": "stddev: 0.00006312782421092413",
            "extra": "mean: 3.1691261178247996 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 639.3512316550791,
            "unit": "iter/sec",
            "range": "stddev: 0.00003687347092162086",
            "extra": "mean: 1.5640855143288217 msec\nrounds: 663"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 897.4878787246213,
            "unit": "iter/sec",
            "range": "stddev: 0.00005271975511413534",
            "extra": "mean: 1.1142211763584529 msec\nrounds: 1049"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 837.0879741058428,
            "unit": "iter/sec",
            "range": "stddev: 0.00003215335681868093",
            "extra": "mean: 1.1946175682050335 msec\nrounds: 975"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1726235633725,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 231.1886479240061,
            "unit": "iter/sec",
            "range": "stddev: 0.00016774819117948948",
            "extra": "mean: 4.32547189915964 msec\nrounds: 238"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 333.33605204529636,
            "unit": "iter/sec",
            "range": "stddev: 0.000038215761859537865",
            "extra": "mean: 2.999975531791899 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 418.03383591622196,
            "unit": "iter/sec",
            "range": "stddev: 0.000029036901773124944",
            "extra": "mean: 2.39215085977014 msec\nrounds: 435"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1004.3771603361022,
            "unit": "iter/sec",
            "range": "stddev: 0.00003916487605014274",
            "extra": "mean: 995.6419156976475 usec\nrounds: 1032"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 213.87587769045805,
            "unit": "iter/sec",
            "range": "stddev: 0.00003729721837176123",
            "extra": "mean: 4.675609100000034 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 302.0978461634829,
            "unit": "iter/sec",
            "range": "stddev: 0.00008948492377472139",
            "extra": "mean: 3.310185798076962 msec\nrounds: 312"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 406.0985121677947,
            "unit": "iter/sec",
            "range": "stddev: 0.00003215860428111314",
            "extra": "mean: 2.4624566947115847 msec\nrounds: 416"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 931.5252077871976,
            "unit": "iter/sec",
            "range": "stddev: 0.0000419325979340438",
            "extra": "mean: 1.0735082546777899 msec\nrounds: 962"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.36807705348927,
            "unit": "iter/sec",
            "range": "stddev: 0.0007002650133506264",
            "extra": "mean: 57.576897944444504 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.84445610292675,
            "unit": "iter/sec",
            "range": "stddev: 0.0014914828653452962",
            "extra": "mean: 56.03981394736853 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 325.0701344672213,
            "unit": "iter/sec",
            "range": "stddev: 0.0001196173033150444",
            "extra": "mean: 3.0762592252252436 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 642.9575100645736,
            "unit": "iter/sec",
            "range": "stddev: 0.0000383131227407985",
            "extra": "mean: 1.55531272960723 msec\nrounds: 662"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 898.0554443768759,
            "unit": "iter/sec",
            "range": "stddev: 0.00004327097964092638",
            "extra": "mean: 1.1135169952606425 msec\nrounds: 1055"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 832.0169917353807,
            "unit": "iter/sec",
            "range": "stddev: 0.00006456456672180164",
            "extra": "mean: 1.2018985308391943 msec\nrounds: 989"
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
        "date": 1726276345518,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 226.00743695571688,
            "unit": "iter/sec",
            "range": "stddev: 0.00015766594792975065",
            "extra": "mean: 4.424633160173117 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 321.9906130057198,
            "unit": "iter/sec",
            "range": "stddev: 0.00010167011790491169",
            "extra": "mean: 3.105680599397586 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 404.1944026403436,
            "unit": "iter/sec",
            "range": "stddev: 0.00003315999735003919",
            "extra": "mean: 2.4740570217391418 msec\nrounds: 414"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 958.169553539269,
            "unit": "iter/sec",
            "range": "stddev: 0.000024525495376443347",
            "extra": "mean: 1.0436566224696022 msec\nrounds: 988"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 206.75490369747607,
            "unit": "iter/sec",
            "range": "stddev: 0.00011837911125938525",
            "extra": "mean: 4.836644655660505 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 287.5257075963251,
            "unit": "iter/sec",
            "range": "stddev: 0.0001329732454581119",
            "extra": "mean: 3.477949879194667 msec\nrounds: 298"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 385.4259691635182,
            "unit": "iter/sec",
            "range": "stddev: 0.00003267547378428913",
            "extra": "mean: 2.594531972431123 msec\nrounds: 399"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 879.951721909608,
            "unit": "iter/sec",
            "range": "stddev: 0.00004369959513817449",
            "extra": "mean: 1.136425982359432 msec\nrounds: 907"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 16.253967702274327,
            "unit": "iter/sec",
            "range": "stddev: 0.00009589115185828603",
            "extra": "mean: 61.523439588235156 msec\nrounds: 17"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 16.533190443516627,
            "unit": "iter/sec",
            "range": "stddev: 0.0005546123167088064",
            "extra": "mean: 60.48439370588287 msec\nrounds: 17"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 314.6348676781075,
            "unit": "iter/sec",
            "range": "stddev: 0.000034798542067467364",
            "extra": "mean: 3.1782872870373247 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 623.4021598842186,
            "unit": "iter/sec",
            "range": "stddev: 0.000032200420333640415",
            "extra": "mean: 1.6041009549689802 msec\nrounds: 644"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 892.5150653097933,
            "unit": "iter/sec",
            "range": "stddev: 0.000037715844259238895",
            "extra": "mean: 1.1204292665389335 msec\nrounds: 1043"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 825.771790740677,
            "unit": "iter/sec",
            "range": "stddev: 0.000029761704321718093",
            "extra": "mean: 1.2109883277836953 msec\nrounds: 961"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1726495041698,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 223.54266756149664,
            "unit": "iter/sec",
            "range": "stddev: 0.00038302161989935005",
            "extra": "mean: 4.473418926724133 msec\nrounds: 232"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 333.9641677448484,
            "unit": "iter/sec",
            "range": "stddev: 0.00008752761665570567",
            "extra": "mean: 2.994333214705863 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 414.33762413793863,
            "unit": "iter/sec",
            "range": "stddev: 0.00003965227295494615",
            "extra": "mean: 2.413490693925219 msec\nrounds: 428"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 983.2711106127642,
            "unit": "iter/sec",
            "range": "stddev: 0.000039184962193563645",
            "extra": "mean: 1.0170135064548074 msec\nrounds: 1007"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 208.81798168754344,
            "unit": "iter/sec",
            "range": "stddev: 0.00015133951307058754",
            "extra": "mean: 4.788859617924622 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 297.5035483282492,
            "unit": "iter/sec",
            "range": "stddev: 0.00009809529446113155",
            "extra": "mean: 3.3613044470200886 msec\nrounds: 302"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 401.4030179573028,
            "unit": "iter/sec",
            "range": "stddev: 0.00009636877591337988",
            "extra": "mean: 2.4912617874397 msec\nrounds: 414"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 912.2029387908965,
            "unit": "iter/sec",
            "range": "stddev: 0.00006756785346821498",
            "extra": "mean: 1.0962472904609104 msec\nrounds: 933"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.363730475406246,
            "unit": "iter/sec",
            "range": "stddev: 0.00051712348603307",
            "extra": "mean: 57.59131088888915 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.90800478860063,
            "unit": "iter/sec",
            "range": "stddev: 0.00012474535832892534",
            "extra": "mean: 55.840949999999545 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 325.15003481289466,
            "unit": "iter/sec",
            "range": "stddev: 0.00009770061397496615",
            "extra": "mean: 3.075503284431272 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 632.3203582952093,
            "unit": "iter/sec",
            "range": "stddev: 0.00006299675447426042",
            "extra": "mean: 1.581476836671979 msec\nrounds: 649"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 887.6883304592473,
            "unit": "iter/sec",
            "range": "stddev: 0.00004057425821737745",
            "extra": "mean: 1.1265215117592546 msec\nrounds: 1063"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 825.4887804577473,
            "unit": "iter/sec",
            "range": "stddev: 0.00002831479324683595",
            "extra": "mean: 1.2114035025957386 msec\nrounds: 963"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1726579813305,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 227.27125736347978,
            "unit": "iter/sec",
            "range": "stddev: 0.00012591199189216067",
            "extra": "mean: 4.4000284576270845 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 332.0741823643638,
            "unit": "iter/sec",
            "range": "stddev: 0.00010954904073129254",
            "extra": "mean: 3.0113753284883913 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 417.7914842124681,
            "unit": "iter/sec",
            "range": "stddev: 0.000050698803500260476",
            "extra": "mean: 2.3935384941724887 msec\nrounds: 429"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 970.8287011532342,
            "unit": "iter/sec",
            "range": "stddev: 0.000025618753768550406",
            "extra": "mean: 1.0300478331678016 msec\nrounds: 1007"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 210.35820060527266,
            "unit": "iter/sec",
            "range": "stddev: 0.00008429483987734263",
            "extra": "mean: 4.753796130232419 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 298.28460675246663,
            "unit": "iter/sec",
            "range": "stddev: 0.00003745211005188904",
            "extra": "mean: 3.3525028692810035 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 400.29602016693144,
            "unit": "iter/sec",
            "range": "stddev: 0.000056423177826109515",
            "extra": "mean: 2.498151242130711 msec\nrounds: 413"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 917.0614207259296,
            "unit": "iter/sec",
            "range": "stddev: 0.000022285606262150753",
            "extra": "mean: 1.0904395031778982 msec\nrounds: 944"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.26490812227371,
            "unit": "iter/sec",
            "range": "stddev: 0.0006731195106019972",
            "extra": "mean: 57.92095694444418 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.871390362140836,
            "unit": "iter/sec",
            "range": "stddev: 0.00024011970538905328",
            "extra": "mean: 55.95535544444393 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 322.2929086987441,
            "unit": "iter/sec",
            "range": "stddev: 0.00008712833409083481",
            "extra": "mean: 3.1027676160716497 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 643.0429001953885,
            "unit": "iter/sec",
            "range": "stddev: 0.0000675708489704104",
            "extra": "mean: 1.5551061985073629 msec\nrounds: 670"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 891.102804217442,
            "unit": "iter/sec",
            "range": "stddev: 0.0000420086901337826",
            "extra": "mean: 1.122204974854939 msec\nrounds: 1034"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 825.9624962817414,
            "unit": "iter/sec",
            "range": "stddev: 0.0000420132128179692",
            "extra": "mean: 1.2107087240664414 msec\nrounds: 964"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1726668990208,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 224.77863594699247,
            "unit": "iter/sec",
            "range": "stddev: 0.00007931407413367142",
            "extra": "mean: 4.448821373913049 msec\nrounds: 230"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 328.51699113888805,
            "unit": "iter/sec",
            "range": "stddev: 0.00004756419738556993",
            "extra": "mean: 3.0439825852941262 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 412.664014502946,
            "unit": "iter/sec",
            "range": "stddev: 0.000031530170820223355",
            "extra": "mean: 2.423278902097874 msec\nrounds: 429"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 998.7406886474632,
            "unit": "iter/sec",
            "range": "stddev: 0.00003900586605542106",
            "extra": "mean: 1.0012608992172356 msec\nrounds: 1022"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 208.3554776241308,
            "unit": "iter/sec",
            "range": "stddev: 0.000048654868465020885",
            "extra": "mean: 4.7994898497652185 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 295.2479846581363,
            "unit": "iter/sec",
            "range": "stddev: 0.0002083755382925701",
            "extra": "mean: 3.386983322368437 msec\nrounds: 304"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 399.74702386169247,
            "unit": "iter/sec",
            "range": "stddev: 0.00010514055800638087",
            "extra": "mean: 2.50158210144921 msec\nrounds: 414"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 916.5342825258955,
            "unit": "iter/sec",
            "range": "stddev: 0.00002079300047669329",
            "extra": "mean: 1.0910666617336775 msec\nrounds: 946"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.13066498754678,
            "unit": "iter/sec",
            "range": "stddev: 0.000506124003159355",
            "extra": "mean: 58.37485005555562 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.816420511684843,
            "unit": "iter/sec",
            "range": "stddev: 0.00024228441450296876",
            "extra": "mean: 56.127997166667306 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 319.3088161203453,
            "unit": "iter/sec",
            "range": "stddev: 0.00008734166204153907",
            "extra": "mean: 3.1317644534534463 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 638.4975699603046,
            "unit": "iter/sec",
            "range": "stddev: 0.00003552825790840354",
            "extra": "mean: 1.5661766732521316 msec\nrounds: 658"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 904.9497736979,
            "unit": "iter/sec",
            "range": "stddev: 0.00005154483616284173",
            "extra": "mean: 1.1050337035984836 msec\nrounds: 1056"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 821.2879313681447,
            "unit": "iter/sec",
            "range": "stddev: 0.00005671232784211898",
            "extra": "mean: 1.2175997744593023 msec\nrounds: 971"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1726754314069,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 241.40878062458322,
            "unit": "iter/sec",
            "range": "stddev: 0.000047464357840990216",
            "extra": "mean: 4.1423513983739815 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 352.4741492537894,
            "unit": "iter/sec",
            "range": "stddev: 0.00007133606655522006",
            "extra": "mean: 2.8370874917126963 msec\nrounds: 362"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 447.3903972132884,
            "unit": "iter/sec",
            "range": "stddev: 0.00007086111545646581",
            "extra": "mean: 2.2351843182795474 msec\nrounds: 465"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1133.814927839482,
            "unit": "iter/sec",
            "range": "stddev: 0.00004280181295346322",
            "extra": "mean: 881.9781566163799 usec\nrounds: 1194"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 220.13937722211503,
            "unit": "iter/sec",
            "range": "stddev: 0.00005584860844586099",
            "extra": "mean: 4.5425766740087825 msec\nrounds: 227"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 316.42909170461127,
            "unit": "iter/sec",
            "range": "stddev: 0.00006293531382785871",
            "extra": "mean: 3.160265684210562 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 422.4549388245904,
            "unit": "iter/sec",
            "range": "stddev: 0.00007249278864147599",
            "extra": "mean: 2.367116366972372 msec\nrounds: 436"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1023.0981955083098,
            "unit": "iter/sec",
            "range": "stddev: 0.000022163444822743744",
            "extra": "mean: 977.4232858490834 usec\nrounds: 1060"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.0689264171339,
            "unit": "iter/sec",
            "range": "stddev: 0.00012701614623589056",
            "extra": "mean: 55.34363121052659 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 18.728056022570705,
            "unit": "iter/sec",
            "range": "stddev: 0.00017629533067549822",
            "extra": "mean: 53.39582489473646 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 340.5103842046766,
            "unit": "iter/sec",
            "range": "stddev: 0.00004507603317506126",
            "extra": "mean: 2.9367680000000007 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 715.6624818532378,
            "unit": "iter/sec",
            "range": "stddev: 0.00006031299322888992",
            "extra": "mean: 1.3973067267833554 msec\nrounds: 743"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1018.8850655654372,
            "unit": "iter/sec",
            "range": "stddev: 0.00004380721366252176",
            "extra": "mean: 981.4649696970906 usec\nrounds: 1221"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 911.6565957242802,
            "unit": "iter/sec",
            "range": "stddev: 0.0000509329294784678",
            "extra": "mean: 1.0969042561530902 msec\nrounds: 1097"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1726840248199,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 236.72527028726168,
            "unit": "iter/sec",
            "range": "stddev: 0.0003130700900963977",
            "extra": "mean: 4.224306086065585 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 345.5078112362299,
            "unit": "iter/sec",
            "range": "stddev: 0.00006549408788203174",
            "extra": "mean: 2.8942905702247126 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 439.6820090608349,
            "unit": "iter/sec",
            "range": "stddev: 0.00009382224051171356",
            "extra": "mean: 2.2743709758241186 msec\nrounds: 455"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1100.8466253789434,
            "unit": "iter/sec",
            "range": "stddev: 0.000036328936538464424",
            "extra": "mean: 908.3917568042423 usec\nrounds: 1139"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 218.93189712940284,
            "unit": "iter/sec",
            "range": "stddev: 0.00014472180762433216",
            "extra": "mean: 4.567630450892844 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 317.0692666074967,
            "unit": "iter/sec",
            "range": "stddev: 0.000057910978818693706",
            "extra": "mean: 3.1538849876544814 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 427.9324822472267,
            "unit": "iter/sec",
            "range": "stddev: 0.00009898124729730212",
            "extra": "mean: 2.3368172351597196 msec\nrounds: 438"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 990.2314217875362,
            "unit": "iter/sec",
            "range": "stddev: 0.000052434328186438013",
            "extra": "mean: 1.009864944696291 msec\nrounds: 1103"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.198314440125873,
            "unit": "iter/sec",
            "range": "stddev: 0.00023721626180022476",
            "extra": "mean: 54.95014405263145 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 18.906576367000426,
            "unit": "iter/sec",
            "range": "stddev: 0.0009691847801660735",
            "extra": "mean: 52.89164894736848 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 342.4372101633107,
            "unit": "iter/sec",
            "range": "stddev: 0.00009713131533377575",
            "extra": "mean: 2.920243391549339 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 706.3995952089375,
            "unit": "iter/sec",
            "range": "stddev: 0.00005385158519465366",
            "extra": "mean: 1.415629350274786 msec\nrounds: 728"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 999.850101664029,
            "unit": "iter/sec",
            "range": "stddev: 0.000040892432555569245",
            "extra": "mean: 1.0001499208088507 msec\nrounds: 1187"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 905.8350933313291,
            "unit": "iter/sec",
            "range": "stddev: 0.000032002101087013844",
            "extra": "mean: 1.1039536968283785 msec\nrounds: 1072"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1726841665931,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 240.88767574747337,
            "unit": "iter/sec",
            "range": "stddev: 0.00005937976469327348",
            "extra": "mean: 4.151312419354808 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 352.0474820907834,
            "unit": "iter/sec",
            "range": "stddev: 0.0000899872470578226",
            "extra": "mean: 2.8405259258241973 msec\nrounds: 364"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 446.1933945128311,
            "unit": "iter/sec",
            "range": "stddev: 0.00006403201606014604",
            "extra": "mean: 2.2411806456521695 msec\nrounds: 460"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1130.398232803994,
            "unit": "iter/sec",
            "range": "stddev: 0.00002301184255556429",
            "extra": "mean: 884.643987384396 usec\nrounds: 1189"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 217.9875943568745,
            "unit": "iter/sec",
            "range": "stddev: 0.0001547194647160541",
            "extra": "mean: 4.587417017699034 msec\nrounds: 226"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 311.85602366688056,
            "unit": "iter/sec",
            "range": "stddev: 0.00014349556000936006",
            "extra": "mean: 3.2066079347826975 msec\nrounds: 322"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 419.6349891745814,
            "unit": "iter/sec",
            "range": "stddev: 0.00007975683690050182",
            "extra": "mean: 2.3830234031890236 msec\nrounds: 439"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1014.8356723005493,
            "unit": "iter/sec",
            "range": "stddev: 0.00004239601497284682",
            "extra": "mean: 985.3812073171235 usec\nrounds: 1066"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.085625929545028,
            "unit": "iter/sec",
            "range": "stddev: 0.0003754202058573143",
            "extra": "mean: 55.29252921052518 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 18.59929966392854,
            "unit": "iter/sec",
            "range": "stddev: 0.0003147880835469929",
            "extra": "mean: 53.765465263157125 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 342.48185017672057,
            "unit": "iter/sec",
            "range": "stddev: 0.00009322134400156426",
            "extra": "mean: 2.9198627591038773 msec\nrounds: 357"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 718.468428213479,
            "unit": "iter/sec",
            "range": "stddev: 0.000026894234208022852",
            "extra": "mean: 1.3918496077643503 msec\nrounds: 747"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1041.3448562667606,
            "unit": "iter/sec",
            "range": "stddev: 0.000051620939463959965",
            "extra": "mean: 960.2966721178394 usec\nrounds: 1223"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 926.0744507522998,
            "unit": "iter/sec",
            "range": "stddev: 0.00009513770246993345",
            "extra": "mean: 1.079826788426834 msec\nrounds: 1106"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1727101288176,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 232.93711268508343,
            "unit": "iter/sec",
            "range": "stddev: 0.0003043479788842527",
            "extra": "mean: 4.293004186722011 msec\nrounds: 241"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 347.48916881842047,
            "unit": "iter/sec",
            "range": "stddev: 0.0000853808098142501",
            "extra": "mean: 2.8777875391061394 msec\nrounds: 358"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 440.5607462212806,
            "unit": "iter/sec",
            "range": "stddev: 0.00006340997637577418",
            "extra": "mean: 2.2698345428571836 msec\nrounds: 455"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1118.6064703127481,
            "unit": "iter/sec",
            "range": "stddev: 0.000017046367802325162",
            "extra": "mean: 893.9694401377928 usec\nrounds: 1161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 216.97713522776527,
            "unit": "iter/sec",
            "range": "stddev: 0.00012011990930908307",
            "extra": "mean: 4.608780547085202 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 308.8436168518506,
            "unit": "iter/sec",
            "range": "stddev: 0.00008777745308184041",
            "extra": "mean: 3.237884629746746 msec\nrounds: 316"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 420.8483734823016,
            "unit": "iter/sec",
            "range": "stddev: 0.00007033073839644388",
            "extra": "mean: 2.376152702517345 msec\nrounds: 437"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 990.400045607415,
            "unit": "iter/sec",
            "range": "stddev: 0.00007818662494773874",
            "extra": "mean: 1.009693006815945 msec\nrounds: 1027"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.827165523288826,
            "unit": "iter/sec",
            "range": "stddev: 0.00027343388166844865",
            "extra": "mean: 56.094166999999665 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 18.76402365725059,
            "unit": "iter/sec",
            "range": "stddev: 0.0006386241266910859",
            "extra": "mean: 53.29347363157853 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 341.33905171715,
            "unit": "iter/sec",
            "range": "stddev: 0.00009444622861926783",
            "extra": "mean: 2.9296384195402525 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 719.22918974482,
            "unit": "iter/sec",
            "range": "stddev: 0.0000552214257602602",
            "extra": "mean: 1.3903773849262104 msec\nrounds: 743"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1008.0454335871946,
            "unit": "iter/sec",
            "range": "stddev: 0.00004935565892226939",
            "extra": "mean: 992.0187787979314 usec\nrounds: 1198"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 914.6888822588166,
            "unit": "iter/sec",
            "range": "stddev: 0.00003589014002108512",
            "extra": "mean: 1.093267907149487 msec\nrounds: 1077"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1727185597265,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 239.48685290831898,
            "unit": "iter/sec",
            "range": "stddev: 0.000046003480018763954",
            "extra": "mean: 4.1755945591836845 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 349.49761032741833,
            "unit": "iter/sec",
            "range": "stddev: 0.00006676812943866125",
            "extra": "mean: 2.861249892561996 msec\nrounds: 363"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 448.89409125400664,
            "unit": "iter/sec",
            "range": "stddev: 0.000039703414440067574",
            "extra": "mean: 2.2276969545454546 msec\nrounds: 462"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1128.5589155401428,
            "unit": "iter/sec",
            "range": "stddev: 0.00003729650152017859",
            "extra": "mean: 886.0857738396289 usec\nrounds: 1185"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 216.96164322905238,
            "unit": "iter/sec",
            "range": "stddev: 0.0000972251459095503",
            "extra": "mean: 4.609109633928576 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 301.78177903374336,
            "unit": "iter/sec",
            "range": "stddev: 0.00031777187176863455",
            "extra": "mean: 3.313652677116024 msec\nrounds: 319"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 425.737689137053,
            "unit": "iter/sec",
            "range": "stddev: 0.00006973384924349494",
            "extra": "mean: 2.3488641609976915 msec\nrounds: 441"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1009.0045302963933,
            "unit": "iter/sec",
            "range": "stddev: 0.000023233129262142385",
            "extra": "mean: 991.0758276836 usec\nrounds: 1062"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.04617268478486,
            "unit": "iter/sec",
            "range": "stddev: 0.0005779305633340202",
            "extra": "mean: 55.41341188888893 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 18.858539399195386,
            "unit": "iter/sec",
            "range": "stddev: 0.0005480647283586624",
            "extra": "mean: 53.02637594736874 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 344.4702441919384,
            "unit": "iter/sec",
            "range": "stddev: 0.0000939124210591916",
            "extra": "mean: 2.903008363888758 msec\nrounds: 360"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 721.5779676562216,
            "unit": "iter/sec",
            "range": "stddev: 0.0000689686966740719",
            "extra": "mean: 1.3858516263296248 msec\nrounds: 752"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1020.0669532715244,
            "unit": "iter/sec",
            "range": "stddev: 0.00006508546934953258",
            "extra": "mean: 980.3278076922634 usec\nrounds: 1196"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 936.1228942478291,
            "unit": "iter/sec",
            "range": "stddev: 0.00004670286398929647",
            "extra": "mean: 1.068235811926698 msec\nrounds: 1090"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1727271243446,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 236.247110697835,
            "unit": "iter/sec",
            "range": "stddev: 0.0004003084199128582",
            "extra": "mean: 4.232856000000021 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 346.8117022514535,
            "unit": "iter/sec",
            "range": "stddev: 0.00006356207778812306",
            "extra": "mean: 2.883409047353762 msec\nrounds: 359"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 449.40758858214696,
            "unit": "iter/sec",
            "range": "stddev: 0.00004170655624586751",
            "extra": "mean: 2.2251515670995627 msec\nrounds: 462"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1105.0695500796255,
            "unit": "iter/sec",
            "range": "stddev: 0.00004566831424748785",
            "extra": "mean: 904.9204187446348 usec\nrounds: 1163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 220.99239394970382,
            "unit": "iter/sec",
            "range": "stddev: 0.00005314870180230504",
            "extra": "mean: 4.525042614034908 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 312.1903040461996,
            "unit": "iter/sec",
            "range": "stddev: 0.0001415169493827757",
            "extra": "mean: 3.203174432515414 msec\nrounds: 326"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 435.1537594734303,
            "unit": "iter/sec",
            "range": "stddev: 0.00008452149017472358",
            "extra": "mean: 2.2980382869955607 msec\nrounds: 446"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1005.0908453222947,
            "unit": "iter/sec",
            "range": "stddev: 0.0000390287925294486",
            "extra": "mean: 994.9349401141325 usec\nrounds: 1052"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.16402612713503,
            "unit": "iter/sec",
            "range": "stddev: 0.0005449509860357818",
            "extra": "mean: 55.053873684210984 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 18.916537531346503,
            "unit": "iter/sec",
            "range": "stddev: 0.00016936696040347255",
            "extra": "mean: 52.86379700000092 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 346.1377282370924,
            "unit": "iter/sec",
            "range": "stddev: 0.00005186498561161661",
            "extra": "mean: 2.8890234101121575 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 715.9713642440565,
            "unit": "iter/sec",
            "range": "stddev: 0.00007764630994990616",
            "extra": "mean: 1.3967039045700231 msec\nrounds: 744"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1014.3023440587353,
            "unit": "iter/sec",
            "range": "stddev: 0.000047718458797186867",
            "extra": "mean: 985.899328595156 usec\nrounds: 1196"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 919.5563695670382,
            "unit": "iter/sec",
            "range": "stddev: 0.000056597004380575737",
            "extra": "mean: 1.087480912639252 msec\nrounds: 1076"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1727361496440,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 232.2059812902418,
            "unit": "iter/sec",
            "range": "stddev: 0.00014275515412233788",
            "extra": "mean: 4.306521280991756 msec\nrounds: 242"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 334.40641741125916,
            "unit": "iter/sec",
            "range": "stddev: 0.00014284948256453346",
            "extra": "mean: 2.9903732342856975 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 429.2452908247132,
            "unit": "iter/sec",
            "range": "stddev: 0.00007821371738029279",
            "extra": "mean: 2.329670287305168 msec\nrounds: 449"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1088.2353885146642,
            "unit": "iter/sec",
            "range": "stddev: 0.00003995220971081949",
            "extra": "mean: 918.9188392089537 usec\nrounds: 1163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 214.8256386874183,
            "unit": "iter/sec",
            "range": "stddev: 0.00010831637720269835",
            "extra": "mean: 4.654937865470743 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 304.59671780384565,
            "unit": "iter/sec",
            "range": "stddev: 0.00010593128553655924",
            "extra": "mean: 3.283029466666744 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 415.9907172140091,
            "unit": "iter/sec",
            "range": "stddev: 0.00008782174434907341",
            "extra": "mean: 2.40389979540227 msec\nrounds: 435"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 988.7120804757865,
            "unit": "iter/sec",
            "range": "stddev: 0.000029205767687907597",
            "extra": "mean: 1.0114167913461536 msec\nrounds: 1040"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.76885009325879,
            "unit": "iter/sec",
            "range": "stddev: 0.0003976710654274713",
            "extra": "mean: 56.278261944445326 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 18.34393441371494,
            "unit": "iter/sec",
            "range": "stddev: 0.00043521156901145435",
            "extra": "mean: 54.51393236842063 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 337.67226958259573,
            "unit": "iter/sec",
            "range": "stddev: 0.00011537922730447964",
            "extra": "mean: 2.9614513541077043 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 709.0810348169184,
            "unit": "iter/sec",
            "range": "stddev: 0.00007545047475450268",
            "extra": "mean: 1.4102760487145107 msec\nrounds: 739"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 983.9967289925646,
            "unit": "iter/sec",
            "range": "stddev: 0.000057234726691282495",
            "extra": "mean: 1.0162635408593481 msec\nrounds: 1187"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 892.5829784280631,
            "unit": "iter/sec",
            "range": "stddev: 0.00005279481774512427",
            "extra": "mean: 1.120344017495281 msec\nrounds: 1086"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1727363112161,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 235.19654918235116,
            "unit": "iter/sec",
            "range": "stddev: 0.0001910057946204093",
            "extra": "mean: 4.251763061475388 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 343.1080280995986,
            "unit": "iter/sec",
            "range": "stddev: 0.00011000841981974794",
            "extra": "mean: 2.914533960452002 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 444.35244102739387,
            "unit": "iter/sec",
            "range": "stddev: 0.00007056514587726993",
            "extra": "mean: 2.250465863736194 msec\nrounds: 455"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1112.5096134856815,
            "unit": "iter/sec",
            "range": "stddev: 0.00004389680231126409",
            "extra": "mean: 898.8686370689691 usec\nrounds: 1160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 218.73854867241585,
            "unit": "iter/sec",
            "range": "stddev: 0.00006188406768764365",
            "extra": "mean: 4.571667893333268 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 310.45049871296226,
            "unit": "iter/sec",
            "range": "stddev: 0.00015834495906529754",
            "extra": "mean: 3.2211254423674953 msec\nrounds: 321"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 422.43324835127237,
            "unit": "iter/sec",
            "range": "stddev: 0.00007043597511410472",
            "extra": "mean: 2.3672379101383014 msec\nrounds: 434"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 984.5395840123813,
            "unit": "iter/sec",
            "range": "stddev: 0.00003251564737776055",
            "extra": "mean: 1.01570319389761 msec\nrounds: 1016"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.847335144487552,
            "unit": "iter/sec",
            "range": "stddev: 0.0004695215089181562",
            "extra": "mean: 56.030773888888774 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 18.69775911913314,
            "unit": "iter/sec",
            "range": "stddev: 0.000152569853400533",
            "extra": "mean: 53.48234478947346 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 323.8857003513907,
            "unit": "iter/sec",
            "range": "stddev: 0.00038163201113651746",
            "extra": "mean: 3.0875089542856573 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 712.1066997486415,
            "unit": "iter/sec",
            "range": "stddev: 0.000025938598184962028",
            "extra": "mean: 1.404283937158545 msec\nrounds: 732"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1015.274759604624,
            "unit": "iter/sec",
            "range": "stddev: 0.000043092687226334955",
            "extra": "mean: 984.9550484141137 usec\nrounds: 1198"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 922.7055363389014,
            "unit": "iter/sec",
            "range": "stddev: 0.00005221397155747553",
            "extra": "mean: 1.0837693723696364 msec\nrounds: 1093"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1727791713014,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 236.4266895321395,
            "unit": "iter/sec",
            "range": "stddev: 0.00005272379559667382",
            "extra": "mean: 4.2296409173553196 msec\nrounds: 242"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 349.06576494612466,
            "unit": "iter/sec",
            "range": "stddev: 0.00005101245127299818",
            "extra": "mean: 2.864789676966292 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 451.42515036971724,
            "unit": "iter/sec",
            "range": "stddev: 0.00003335059547044184",
            "extra": "mean: 2.215206660907129 msec\nrounds: 463"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1119.1351915014961,
            "unit": "iter/sec",
            "range": "stddev: 0.000018679692792080104",
            "extra": "mean: 893.5470956447562 usec\nrounds: 1171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 217.91901087015873,
            "unit": "iter/sec",
            "range": "stddev: 0.00012942921917695704",
            "extra": "mean: 4.58886076991155 msec\nrounds: 226"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 315.6536383248124,
            "unit": "iter/sec",
            "range": "stddev: 0.00004794119755012627",
            "extra": "mean: 3.1680293796296586 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 427.7587268978354,
            "unit": "iter/sec",
            "range": "stddev: 0.00003134109245942328",
            "extra": "mean: 2.33776644897963 msec\nrounds: 441"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1009.7937435806424,
            "unit": "iter/sec",
            "range": "stddev: 0.00001979334731436354",
            "extra": "mean: 990.3012435530502 usec\nrounds: 1047"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.826502512533317,
            "unit": "iter/sec",
            "range": "stddev: 0.0016478303370058192",
            "extra": "mean: 56.096253277777166 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 18.74435947694254,
            "unit": "iter/sec",
            "range": "stddev: 0.000680003966033197",
            "extra": "mean: 53.34938231578951 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 345.10291711497416,
            "unit": "iter/sec",
            "range": "stddev: 0.00006821480240688422",
            "extra": "mean: 2.897686314447585 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 709.5681537391115,
            "unit": "iter/sec",
            "range": "stddev: 0.000029707082682236832",
            "extra": "mean: 1.4093078934425687 msec\nrounds: 732"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1003.0615380897232,
            "unit": "iter/sec",
            "range": "stddev: 0.00009025739499649927",
            "extra": "mean: 996.947806317493 usec\nrounds: 1203"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 922.766704446942,
            "unit": "iter/sec",
            "range": "stddev: 0.000026725229458766704",
            "extra": "mean: 1.0836975317605848 msec\nrounds: 1102"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1727793123676,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 239.1663794012716,
            "unit": "iter/sec",
            "range": "stddev: 0.00030538547170421944",
            "extra": "mean: 4.1811896910568995 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 351.7101184178631,
            "unit": "iter/sec",
            "range": "stddev: 0.000050469860944564515",
            "extra": "mean: 2.843250585164884 msec\nrounds: 364"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 440.2770074093721,
            "unit": "iter/sec",
            "range": "stddev: 0.00007923358765273088",
            "extra": "mean: 2.2712973495574666 msec\nrounds: 452"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1132.0228046745854,
            "unit": "iter/sec",
            "range": "stddev: 0.000043151605867350776",
            "extra": "mean: 883.3744301533422 usec\nrounds: 1174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 216.5995542867044,
            "unit": "iter/sec",
            "range": "stddev: 0.00007075079895160442",
            "extra": "mean: 4.616814671171201 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 305.65278593182046,
            "unit": "iter/sec",
            "range": "stddev: 0.0002173956397171439",
            "extra": "mean: 3.2716861943573514 msec\nrounds: 319"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 427.1197213309819,
            "unit": "iter/sec",
            "range": "stddev: 0.00004379381255942476",
            "extra": "mean: 2.341263936218679 msec\nrounds: 439"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1024.2323389720232,
            "unit": "iter/sec",
            "range": "stddev: 0.00004382915123243238",
            "extra": "mean: 976.3409745523714 usec\nrounds: 1061"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.1562894832106,
            "unit": "iter/sec",
            "range": "stddev: 0.0002277986337204089",
            "extra": "mean: 55.07733289473686 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 18.861368470209463,
            "unit": "iter/sec",
            "range": "stddev: 0.0007940116231213583",
            "extra": "mean: 53.01842236842185 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 340.1188910781247,
            "unit": "iter/sec",
            "range": "stddev: 0.00010678666860221628",
            "extra": "mean: 2.94014836056343 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 716.6617726824373,
            "unit": "iter/sec",
            "range": "stddev: 0.00003674119309498214",
            "extra": "mean: 1.3953583658537259 msec\nrounds: 738"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1020.0586341073509,
            "unit": "iter/sec",
            "range": "stddev: 0.0000497505091590348",
            "extra": "mean: 980.3358028287225 usec\nrounds: 1202"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 920.9381543677875,
            "unit": "iter/sec",
            "range": "stddev: 0.00005798283936170123",
            "extra": "mean: 1.0858492454213577 msec\nrounds: 1092"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1727876085721,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 235.3794972049256,
            "unit": "iter/sec",
            "range": "stddev: 0.0003960876395326195",
            "extra": "mean: 4.248458391129037 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 346.8174984919827,
            "unit": "iter/sec",
            "range": "stddev: 0.00008053133806003662",
            "extra": "mean: 2.883360857938709 msec\nrounds: 359"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 446.04806053764764,
            "unit": "iter/sec",
            "range": "stddev: 0.00003607602981818528",
            "extra": "mean: 2.2419108801743066 msec\nrounds: 459"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1140.646342525138,
            "unit": "iter/sec",
            "range": "stddev: 0.000020229020630959352",
            "extra": "mean: 876.695924686193 usec\nrounds: 1195"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 221.1308805023036,
            "unit": "iter/sec",
            "range": "stddev: 0.00013016574461482985",
            "extra": "mean: 4.522208737777729 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 310.9322342894343,
            "unit": "iter/sec",
            "range": "stddev: 0.00004289195486707265",
            "extra": "mean: 3.216134867088564 msec\nrounds: 316"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 431.365019039295,
            "unit": "iter/sec",
            "range": "stddev: 0.00008636772220490034",
            "extra": "mean: 2.3182222847534733 msec\nrounds: 446"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1028.905383511607,
            "unit": "iter/sec",
            "range": "stddev: 0.000020923679677673948",
            "extra": "mean: 971.9066651075785 usec\nrounds: 1069"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.991161112988014,
            "unit": "iter/sec",
            "range": "stddev: 0.0011659292302098776",
            "extra": "mean: 55.58284947368345 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 18.934562077721143,
            "unit": "iter/sec",
            "range": "stddev: 0.0002557038070145471",
            "extra": "mean: 52.81347389473685 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 342.37702448842145,
            "unit": "iter/sec",
            "range": "stddev: 0.00003993065063877455",
            "extra": "mean: 2.920756734463116 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 724.802095828011,
            "unit": "iter/sec",
            "range": "stddev: 0.00005893043048376766",
            "extra": "mean: 1.3796869597315442 msec\nrounds: 745"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1007.7942170759785,
            "unit": "iter/sec",
            "range": "stddev: 0.00010573787195980221",
            "extra": "mean: 992.2660629085641 usec\nrounds: 1224"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 917.3509454545513,
            "unit": "iter/sec",
            "range": "stddev: 0.0000489723034679488",
            "extra": "mean: 1.0900953500456643 msec\nrounds: 1097"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1727881883640,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 239.60600820880686,
            "unit": "iter/sec",
            "range": "stddev: 0.00009288237920557433",
            "extra": "mean: 4.173518049382722 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 346.8694012928516,
            "unit": "iter/sec",
            "range": "stddev: 0.00004730505323586299",
            "extra": "mean: 2.882929414565828 msec\nrounds: 357"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 437.9146063401876,
            "unit": "iter/sec",
            "range": "stddev: 0.00016904040209189024",
            "extra": "mean: 2.2835502299349306 msec\nrounds: 461"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1121.039105025993,
            "unit": "iter/sec",
            "range": "stddev: 0.00003264285748349702",
            "extra": "mean: 892.0295425169967 usec\nrounds: 1176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 217.97519270639307,
            "unit": "iter/sec",
            "range": "stddev: 0.00006024402980488012",
            "extra": "mean: 4.587678017777803 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 313.6921522579279,
            "unit": "iter/sec",
            "range": "stddev: 0.0001235128676085683",
            "extra": "mean: 3.187838754658317 msec\nrounds: 322"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 422.40455540913644,
            "unit": "iter/sec",
            "range": "stddev: 0.00004239153175636312",
            "extra": "mean: 2.3673987110091907 msec\nrounds: 436"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1019.332185176508,
            "unit": "iter/sec",
            "range": "stddev: 0.00005573160287210257",
            "extra": "mean: 981.0344601518096 usec\nrounds: 1054"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.605559533667655,
            "unit": "iter/sec",
            "range": "stddev: 0.0032466893147951683",
            "extra": "mean: 56.80023961111087 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 18.68240261184331,
            "unit": "iter/sec",
            "range": "stddev: 0.0005400269344958967",
            "extra": "mean: 53.52630605263112 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 339.94196742508984,
            "unit": "iter/sec",
            "range": "stddev: 0.00012424387284122845",
            "extra": "mean: 2.9416785681819695 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 732.1253344604999,
            "unit": "iter/sec",
            "range": "stddev: 0.00003760200412460642",
            "extra": "mean: 1.3658863488679789 msec\nrounds: 751"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 983.6048145577049,
            "unit": "iter/sec",
            "range": "stddev: 0.0001457795338706145",
            "extra": "mean: 1.0166684680672975 msec\nrounds: 1190"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 909.8351483016137,
            "unit": "iter/sec",
            "range": "stddev: 0.000028617616260476257",
            "extra": "mean: 1.0991002071822535 msec\nrounds: 1086"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1727964297639,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 236.0880119640955,
            "unit": "iter/sec",
            "range": "stddev: 0.00016231306076202993",
            "extra": "mean: 4.235708504132268 msec\nrounds: 242"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 341.0198724033365,
            "unit": "iter/sec",
            "range": "stddev: 0.00005013030664016192",
            "extra": "mean: 2.932380429775259 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 438.29661125542157,
            "unit": "iter/sec",
            "range": "stddev: 0.0000520205437379962",
            "extra": "mean: 2.2815599626373575 msec\nrounds: 455"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1083.5082859337588,
            "unit": "iter/sec",
            "range": "stddev: 0.00010676221517659463",
            "extra": "mean: 922.9278751091488 usec\nrounds: 1145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 216.98981607437037,
            "unit": "iter/sec",
            "range": "stddev: 0.00015862556685254054",
            "extra": "mean: 4.608511210762368 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 305.91349938256457,
            "unit": "iter/sec",
            "range": "stddev: 0.000047194120847013476",
            "extra": "mean: 3.2688979140127303 msec\nrounds: 314"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 423.69808511886015,
            "unit": "iter/sec",
            "range": "stddev: 0.00007686098079388958",
            "extra": "mean: 2.36017115753419 msec\nrounds: 438"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 996.4042767596015,
            "unit": "iter/sec",
            "range": "stddev: 0.0000432783890808191",
            "extra": "mean: 1.0036086991237052 msec\nrounds: 1027"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.28971572567276,
            "unit": "iter/sec",
            "range": "stddev: 0.00026746920929709143",
            "extra": "mean: 54.675535421052395 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 18.944778077615787,
            "unit": "iter/sec",
            "range": "stddev: 0.0004006971855543281",
            "extra": "mean: 52.78499415000013 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 342.2405342776136,
            "unit": "iter/sec",
            "range": "stddev: 0.00005553742915134826",
            "extra": "mean: 2.9219215722379475 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 715.5256599403814,
            "unit": "iter/sec",
            "range": "stddev: 0.00003139451827797577",
            "extra": "mean: 1.3975739180106015 msec\nrounds: 744"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1000.2443130526545,
            "unit": "iter/sec",
            "range": "stddev: 0.00004170279876199575",
            "extra": "mean: 999.7557466216341 usec\nrounds: 1184"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 913.0556738210898,
            "unit": "iter/sec",
            "range": "stddev: 0.00003062865558916447",
            "extra": "mean: 1.0952234662920968 msec\nrounds: 1068"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1727965742170,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 238.6520585734995,
            "unit": "iter/sec",
            "range": "stddev: 0.0002426929296311665",
            "extra": "mean: 4.190200604081621 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 355.8800615089446,
            "unit": "iter/sec",
            "range": "stddev: 0.00003707590291703069",
            "extra": "mean: 2.80993544780217 msec\nrounds: 364"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 457.5649147977418,
            "unit": "iter/sec",
            "range": "stddev: 0.00007311070932433679",
            "extra": "mean: 2.1854822510638336 msec\nrounds: 470"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1136.695801675741,
            "unit": "iter/sec",
            "range": "stddev: 0.000015256658297166516",
            "extra": "mean: 879.7428463497259 usec\nrounds: 1178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 219.24531069286735,
            "unit": "iter/sec",
            "range": "stddev: 0.0001222645413738823",
            "extra": "mean: 4.561100973333304 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 311.28066368173876,
            "unit": "iter/sec",
            "range": "stddev: 0.00037721794733879406",
            "extra": "mean: 3.2125349135801935 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 431.26383834195735,
            "unit": "iter/sec",
            "range": "stddev: 0.00007674096709307224",
            "extra": "mean: 2.3187661730336893 msec\nrounds: 445"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1032.642304437159,
            "unit": "iter/sec",
            "range": "stddev: 0.000026110064842750648",
            "extra": "mean: 968.3895340168629 usec\nrounds: 1073"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.449322769056998,
            "unit": "iter/sec",
            "range": "stddev: 0.0005524506179278404",
            "extra": "mean: 54.20253157894712 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.094918105419655,
            "unit": "iter/sec",
            "range": "stddev: 0.0003447389778104937",
            "extra": "mean: 52.369954899998916 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 346.39680824819385,
            "unit": "iter/sec",
            "range": "stddev: 0.000036063548538874645",
            "extra": "mean: 2.886862627450939 msec\nrounds: 357"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 730.0457408805902,
            "unit": "iter/sec",
            "range": "stddev: 0.00003238537913127059",
            "extra": "mean: 1.3697771851853935 msec\nrounds: 756"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1004.6109245112773,
            "unit": "iter/sec",
            "range": "stddev: 0.00004469825858853892",
            "extra": "mean: 995.4102385323748 usec\nrounds: 1199"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 924.0860692482757,
            "unit": "iter/sec",
            "range": "stddev: 0.00004305963112993557",
            "extra": "mean: 1.0821502815354405 msec\nrounds: 1094"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1728049489737,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 242.59048377807997,
            "unit": "iter/sec",
            "range": "stddev: 0.000055537936882822834",
            "extra": "mean: 4.122173237903234 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 352.794907713345,
            "unit": "iter/sec",
            "range": "stddev: 0.00007516759860792555",
            "extra": "mean: 2.834508033241018 msec\nrounds: 361"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 454.33056404324077,
            "unit": "iter/sec",
            "range": "stddev: 0.00006166758341057058",
            "extra": "mean: 2.2010405619658586 msec\nrounds: 468"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1136.3945654509469,
            "unit": "iter/sec",
            "range": "stddev: 0.00002741511914731902",
            "extra": "mean: 879.9760491666708 usec\nrounds: 1200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 220.13035616816677,
            "unit": "iter/sec",
            "range": "stddev: 0.00011901589397769089",
            "extra": "mean: 4.542762831111118 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 310.9195919607377,
            "unit": "iter/sec",
            "range": "stddev: 0.00006904677806660839",
            "extra": "mean: 3.2162656386294173 msec\nrounds: 321"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 438.88217020128627,
            "unit": "iter/sec",
            "range": "stddev: 0.00004404590901100442",
            "extra": "mean: 2.278515893095785 msec\nrounds: 449"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1025.718608632995,
            "unit": "iter/sec",
            "range": "stddev: 0.00003820301782134478",
            "extra": "mean: 974.9262532467154 usec\nrounds: 1078"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.985174462879762,
            "unit": "iter/sec",
            "range": "stddev: 0.000510574018850076",
            "extra": "mean: 55.601351105263696 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 18.768697092043023,
            "unit": "iter/sec",
            "range": "stddev: 0.00046313109933447975",
            "extra": "mean: 53.28020347368435 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 347.6407095055503,
            "unit": "iter/sec",
            "range": "stddev: 0.000050577824886233654",
            "extra": "mean: 2.8765330775624665 msec\nrounds: 361"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 730.8662247390648,
            "unit": "iter/sec",
            "range": "stddev: 0.00002788640896134602",
            "extra": "mean: 1.3682394481384357 msec\nrounds: 752"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1029.513142186167,
            "unit": "iter/sec",
            "range": "stddev: 0.000047232149826127936",
            "extra": "mean: 971.3329136105093 usec\nrounds: 1227"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 925.7981520592573,
            "unit": "iter/sec",
            "range": "stddev: 0.000031654418834159716",
            "extra": "mean: 1.0801490560071816 msec\nrounds: 1107"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1728051902667,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 238.27382287847735,
            "unit": "iter/sec",
            "range": "stddev: 0.00025260307769432223",
            "extra": "mean: 4.196852125506093 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 348.61986643543395,
            "unit": "iter/sec",
            "range": "stddev: 0.00011388913542537578",
            "extra": "mean: 2.8684538555556034 msec\nrounds: 360"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 442.4219537310948,
            "unit": "iter/sec",
            "range": "stddev: 0.00006946557733917573",
            "extra": "mean: 2.2602856652267365 msec\nrounds: 463"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1120.2821164800007,
            "unit": "iter/sec",
            "range": "stddev: 0.00003780789948215436",
            "extra": "mean: 892.6322979626462 usec\nrounds: 1178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 218.63082503862532,
            "unit": "iter/sec",
            "range": "stddev: 0.00006645615506563281",
            "extra": "mean: 4.573920442478004 msec\nrounds: 226"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 307.91357541223283,
            "unit": "iter/sec",
            "range": "stddev: 0.00005307992772561229",
            "extra": "mean: 3.2476645391850814 msec\nrounds: 319"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 429.3561999095168,
            "unit": "iter/sec",
            "range": "stddev: 0.00006949571207694592",
            "extra": "mean: 2.329068498861182 msec\nrounds: 439"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1016.3073325495222,
            "unit": "iter/sec",
            "range": "stddev: 0.00003923870275652723",
            "extra": "mean: 983.9543295347349 usec\nrounds: 1053"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.11736096314544,
            "unit": "iter/sec",
            "range": "stddev: 0.0002093467282990367",
            "extra": "mean: 55.195676789473495 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 18.815354782047812,
            "unit": "iter/sec",
            "range": "stddev: 0.0005058402197312929",
            "extra": "mean: 53.14808099999923 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 346.10314226721204,
            "unit": "iter/sec",
            "range": "stddev: 0.00008668674005346696",
            "extra": "mean: 2.8893121092438423 msec\nrounds: 357"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 705.5887403715845,
            "unit": "iter/sec",
            "range": "stddev: 0.0001146485925545977",
            "extra": "mean: 1.4172561759891031 msec\nrounds: 733"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1017.2078289467375,
            "unit": "iter/sec",
            "range": "stddev: 0.00005507305053082832",
            "extra": "mean: 983.0832712283042 usec\nrounds: 1213"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 904.1294493460705,
            "unit": "iter/sec",
            "range": "stddev: 0.00003239285334954486",
            "extra": "mean: 1.106036310091735 msec\nrounds: 1090"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1728052606496,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 239.8959277635072,
            "unit": "iter/sec",
            "range": "stddev: 0.00027270819821188465",
            "extra": "mean: 4.168474260162575 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 341.7808053186587,
            "unit": "iter/sec",
            "range": "stddev: 0.00010993165366985632",
            "extra": "mean: 2.925851845505636 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 443.707416250554,
            "unit": "iter/sec",
            "range": "stddev: 0.0001970787065928278",
            "extra": "mean: 2.2537374030172104 msec\nrounds: 464"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1135.8371556300397,
            "unit": "iter/sec",
            "range": "stddev: 0.000038224739632326263",
            "extra": "mean: 880.4078956593985 usec\nrounds: 1198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 216.0596395682075,
            "unit": "iter/sec",
            "range": "stddev: 0.00014665847925248067",
            "extra": "mean: 4.62835169955151 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 306.7495819122866,
            "unit": "iter/sec",
            "range": "stddev: 0.000051164460812652414",
            "extra": "mean: 3.259988143312106 msec\nrounds: 314"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 421.45245283339983,
            "unit": "iter/sec",
            "range": "stddev: 0.0000636280981486922",
            "extra": "mean: 2.3727468977272745 msec\nrounds: 440"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1018.0366136587389,
            "unit": "iter/sec",
            "range": "stddev: 0.000016009635957062936",
            "extra": "mean: 982.2829420703084 usec\nrounds: 1053"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.00277524150535,
            "unit": "iter/sec",
            "range": "stddev: 0.0001499154141662743",
            "extra": "mean: 55.54699131578906 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 18.67596013897437,
            "unit": "iter/sec",
            "range": "stddev: 0.0004653383394805584",
            "extra": "mean: 53.54477052631561 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 339.01515681318216,
            "unit": "iter/sec",
            "range": "stddev: 0.0001049949710042353",
            "extra": "mean: 2.9497206242936813 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 730.0552377535685,
            "unit": "iter/sec",
            "range": "stddev: 0.00006045988592162342",
            "extra": "mean: 1.3697593665337853 msec\nrounds: 753"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1008.7209739761227,
            "unit": "iter/sec",
            "range": "stddev: 0.00005344410701397908",
            "extra": "mean: 991.3544238683303 usec\nrounds: 1215"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 905.7541449715656,
            "unit": "iter/sec",
            "range": "stddev: 0.00004942754103963477",
            "extra": "mean: 1.1040523585253843 msec\nrounds: 1085"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1728053075154,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 241.29478371231363,
            "unit": "iter/sec",
            "range": "stddev: 0.00005151707837366194",
            "extra": "mean: 4.144308404081627 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 351.4749322859868,
            "unit": "iter/sec",
            "range": "stddev: 0.00005629125288470362",
            "extra": "mean: 2.8451531194444435 msec\nrounds: 360"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 457.7113813997708,
            "unit": "iter/sec",
            "range": "stddev: 0.00006462064006150551",
            "extra": "mean: 2.18478290170938 msec\nrounds: 468"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1159.4911153332012,
            "unit": "iter/sec",
            "range": "stddev: 0.00001787851723448724",
            "extra": "mean: 862.4473157024851 usec\nrounds: 1210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 218.35010415171806,
            "unit": "iter/sec",
            "range": "stddev: 0.00005443089130922766",
            "extra": "mean: 4.579800883928874 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 310.57552510915684,
            "unit": "iter/sec",
            "range": "stddev: 0.00013132962708435047",
            "extra": "mean: 3.2198287345679724 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 428.0627907071822,
            "unit": "iter/sec",
            "range": "stddev: 0.00015647803102036357",
            "extra": "mean: 2.336105874439466 msec\nrounds: 446"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1017.785558795554,
            "unit": "iter/sec",
            "range": "stddev: 0.00002964542419567305",
            "extra": "mean: 982.525239583276 usec\nrounds: 1056"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.72004304233897,
            "unit": "iter/sec",
            "range": "stddev: 0.0003515335293979553",
            "extra": "mean: 56.43327149999995 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 18.61618534107962,
            "unit": "iter/sec",
            "range": "stddev: 0.0006671650999263693",
            "extra": "mean: 53.716697684210224 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 346.6644651456737,
            "unit": "iter/sec",
            "range": "stddev: 0.00010125346659882883",
            "extra": "mean: 2.884633703600929 msec\nrounds: 361"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 724.8795453492069,
            "unit": "iter/sec",
            "range": "stddev: 0.000031018304010125295",
            "extra": "mean: 1.3795395475233823 msec\nrounds: 747"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1036.9808460557074,
            "unit": "iter/sec",
            "range": "stddev: 0.00004726136794297915",
            "extra": "mean: 964.3379661289127 usec\nrounds: 1240"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 934.277874354707,
            "unit": "iter/sec",
            "range": "stddev: 0.00004770998267269077",
            "extra": "mean: 1.070345373094366 msec\nrounds: 1115"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1728053492446,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 239.82329071223714,
            "unit": "iter/sec",
            "range": "stddev: 0.00004220063600159701",
            "extra": "mean: 4.169736796747967 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 352.7600711306975,
            "unit": "iter/sec",
            "range": "stddev: 0.00008800194763092767",
            "extra": "mean: 2.834787953168034 msec\nrounds: 363"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 450.27913433537657,
            "unit": "iter/sec",
            "range": "stddev: 0.000030871178234443876",
            "extra": "mean: 2.2208446355748315 msec\nrounds: 461"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1144.2305259439663,
            "unit": "iter/sec",
            "range": "stddev: 0.000024221776136907873",
            "extra": "mean: 873.9497656514809 usec\nrounds: 1182"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 219.86066894349028,
            "unit": "iter/sec",
            "range": "stddev: 0.00005023517552065389",
            "extra": "mean: 4.548335110619649 msec\nrounds: 226"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 314.92558820224986,
            "unit": "iter/sec",
            "range": "stddev: 0.00009779127805669282",
            "extra": "mean: 3.1753532817339227 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 432.58539361186297,
            "unit": "iter/sec",
            "range": "stddev: 0.000034465758346626",
            "extra": "mean: 2.3116823054299647 msec\nrounds: 442"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 997.1862644472002,
            "unit": "iter/sec",
            "range": "stddev: 0.000019298096137761682",
            "extra": "mean: 1.002821675000066 msec\nrounds: 1040"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.164268282972866,
            "unit": "iter/sec",
            "range": "stddev: 0.0001447316159159299",
            "extra": "mean: 55.05313973684242 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 18.8034772439152,
            "unit": "iter/sec",
            "range": "stddev: 0.0005166306298280756",
            "extra": "mean: 53.181652894737844 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 344.1279983895248,
            "unit": "iter/sec",
            "range": "stddev: 0.00007306810625372844",
            "extra": "mean: 2.9058954943505686 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 718.1756600637681,
            "unit": "iter/sec",
            "range": "stddev: 0.000027609564212797213",
            "extra": "mean: 1.3924170027026648 msec\nrounds: 740"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1022.0346113261135,
            "unit": "iter/sec",
            "range": "stddev: 0.00006885985232436626",
            "extra": "mean: 978.4404450867636 usec\nrounds: 1211"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 919.0055489393853,
            "unit": "iter/sec",
            "range": "stddev: 0.000053680087969984956",
            "extra": "mean: 1.088132711662176 msec\nrounds: 1089"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1728397052475,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 237.98498181416002,
            "unit": "iter/sec",
            "range": "stddev: 0.00020956813196713626",
            "extra": "mean: 4.201945821862362 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 352.62989798327663,
            "unit": "iter/sec",
            "range": "stddev: 0.000057955083095710824",
            "extra": "mean: 2.8358344136985933 msec\nrounds: 365"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 453.6429535669023,
            "unit": "iter/sec",
            "range": "stddev: 0.00007798260592069834",
            "extra": "mean: 2.2043767948718336 msec\nrounds: 468"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1158.9799733265124,
            "unit": "iter/sec",
            "range": "stddev: 0.000034826871846203794",
            "extra": "mean: 862.8276786610843 usec\nrounds: 1195"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 219.23928691316976,
            "unit": "iter/sec",
            "range": "stddev: 0.000057677473424644516",
            "extra": "mean: 4.5612262933333305 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 316.1346348541105,
            "unit": "iter/sec",
            "range": "stddev: 0.00005528380980087831",
            "extra": "mean: 3.16320924615387 msec\nrounds: 325"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 434.78024975913377,
            "unit": "iter/sec",
            "range": "stddev: 0.00003571829705118738",
            "extra": "mean: 2.3000124788418868 msec\nrounds: 449"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1030.0832093373638,
            "unit": "iter/sec",
            "range": "stddev: 0.000020518837141233364",
            "extra": "mean: 970.7953599625064 usec\nrounds: 1064"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.08663764065928,
            "unit": "iter/sec",
            "range": "stddev: 0.0009805329610057495",
            "extra": "mean: 55.289436315789914 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 18.692935926920338,
            "unit": "iter/sec",
            "range": "stddev: 0.001095481942113295",
            "extra": "mean: 53.4961444210519 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 348.4051530964852,
            "unit": "iter/sec",
            "range": "stddev: 0.0001284930515432106",
            "extra": "mean: 2.8702216115703263 msec\nrounds: 363"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 728.8928706578973,
            "unit": "iter/sec",
            "range": "stddev: 0.00006277728997231005",
            "extra": "mean: 1.3719437248678283 msec\nrounds: 756"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1024.1454561155688,
            "unit": "iter/sec",
            "range": "stddev: 0.000056977381056482985",
            "extra": "mean: 976.4238019400594 usec\nrounds: 1237"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 923.5840363911553,
            "unit": "iter/sec",
            "range": "stddev: 0.00004947057259836763",
            "extra": "mean: 1.082738506294928 msec\nrounds: 1112"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1728399121154,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 240.0486134062264,
            "unit": "iter/sec",
            "range": "stddev: 0.0002693606934728461",
            "extra": "mean: 4.16582285483871 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 354.443166694729,
            "unit": "iter/sec",
            "range": "stddev: 0.00005002438429321318",
            "extra": "mean: 2.8213267851239725 msec\nrounds: 363"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 454.87517621767927,
            "unit": "iter/sec",
            "range": "stddev: 0.00002598044182322926",
            "extra": "mean: 2.19840530387935 msec\nrounds: 464"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1151.0467935958902,
            "unit": "iter/sec",
            "range": "stddev: 0.00003426788586931042",
            "extra": "mean: 868.7744108786252 usec\nrounds: 1195"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 221.96584316141156,
            "unit": "iter/sec",
            "range": "stddev: 0.00008002056647667168",
            "extra": "mean: 4.505197672566266 msec\nrounds: 226"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 312.8029200599558,
            "unit": "iter/sec",
            "range": "stddev: 0.00006205584987042286",
            "extra": "mean: 3.1969011024843605 msec\nrounds: 322"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 440.1524867772978,
            "unit": "iter/sec",
            "range": "stddev: 0.00006659106800941249",
            "extra": "mean: 2.271939907284827 msec\nrounds: 453"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1028.0648783983568,
            "unit": "iter/sec",
            "range": "stddev: 0.000020565693525615402",
            "extra": "mean: 972.7012574905976 usec\nrounds: 1068"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.4229679925425,
            "unit": "iter/sec",
            "range": "stddev: 0.0006157082226868878",
            "extra": "mean: 54.280070421052336 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.156765742128524,
            "unit": "iter/sec",
            "range": "stddev: 0.0005021284540921944",
            "extra": "mean: 52.2008784500013 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 331.23911486105095,
            "unit": "iter/sec",
            "range": "stddev: 0.00006570196392830252",
            "extra": "mean: 3.0189671301937957 msec\nrounds: 361"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 726.4959663582239,
            "unit": "iter/sec",
            "range": "stddev: 0.00007130321960270179",
            "extra": "mean: 1.3764701337748593 msec\nrounds: 755"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1046.7253357527845,
            "unit": "iter/sec",
            "range": "stddev: 0.0000952822586058789",
            "extra": "mean: 955.3604616638227 usec\nrounds: 1226"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 958.1039221929551,
            "unit": "iter/sec",
            "range": "stddev: 0.00004573667158927686",
            "extra": "mean: 1.0437281142855057 msec\nrounds: 1120"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1728400369080,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 239.8515095035808,
            "unit": "iter/sec",
            "range": "stddev: 0.00012585706652203408",
            "extra": "mean: 4.169246222672077 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 352.5566677993784,
            "unit": "iter/sec",
            "range": "stddev: 0.0000811487377136144",
            "extra": "mean: 2.8364234499999523 msec\nrounds: 360"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 450.11111007304396,
            "unit": "iter/sec",
            "range": "stddev: 0.00009092176666248501",
            "extra": "mean: 2.221673665948215 msec\nrounds: 464"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1140.4330397044573,
            "unit": "iter/sec",
            "range": "stddev: 0.000036615935212542974",
            "extra": "mean: 876.8598989899043 usec\nrounds: 1188"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 222.30724413372502,
            "unit": "iter/sec",
            "range": "stddev: 0.00006552033313853355",
            "extra": "mean: 4.498278964757746 msec\nrounds: 227"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 314.157875790103,
            "unit": "iter/sec",
            "range": "stddev: 0.000043761029967644126",
            "extra": "mean: 3.183112941176512 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 437.6426418387662,
            "unit": "iter/sec",
            "range": "stddev: 0.00010724418602338752",
            "extra": "mean: 2.2849692977779217 msec\nrounds: 450"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1015.5760862197029,
            "unit": "iter/sec",
            "range": "stddev: 0.00002372166278478205",
            "extra": "mean: 984.6628072174464 usec\nrounds: 1053"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.036538335823003,
            "unit": "iter/sec",
            "range": "stddev: 0.000311951406625745",
            "extra": "mean: 55.443011368421224 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 18.750665889190273,
            "unit": "iter/sec",
            "range": "stddev: 0.00017772487499595246",
            "extra": "mean: 53.33143931578975 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 349.97533409917156,
            "unit": "iter/sec",
            "range": "stddev: 0.00004665940995968237",
            "extra": "mean: 2.8573442256265773 msec\nrounds: 359"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 716.2297294678531,
            "unit": "iter/sec",
            "range": "stddev: 0.000032858134205884635",
            "extra": "mean: 1.3962000722072563 msec\nrounds: 734"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1025.065119430913,
            "unit": "iter/sec",
            "range": "stddev: 0.000045075383495255366",
            "extra": "mean: 975.5477784232593 usec\nrounds: 1205"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 921.7252554788308,
            "unit": "iter/sec",
            "range": "stddev: 0.00005604289848788221",
            "extra": "mean: 1.0849219917278992 msec\nrounds: 1088"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1728400973458,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 233.88351518868424,
            "unit": "iter/sec",
            "range": "stddev: 0.0001459194480599084",
            "extra": "mean: 4.275632676348546 msec\nrounds: 241"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 342.4766356313207,
            "unit": "iter/sec",
            "range": "stddev: 0.000036540692197520086",
            "extra": "mean: 2.9199072169013873 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 442.1856319539958,
            "unit": "iter/sec",
            "range": "stddev: 0.0000645521043419916",
            "extra": "mean: 2.2614936527472658 msec\nrounds: 455"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1101.5017942686168,
            "unit": "iter/sec",
            "range": "stddev: 0.00003545727187644404",
            "extra": "mean: 907.8514489974003 usec\nrounds: 1147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 215.1247929669694,
            "unit": "iter/sec",
            "range": "stddev: 0.00010694326692508237",
            "extra": "mean: 4.648464671171312 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 309.1934763413282,
            "unit": "iter/sec",
            "range": "stddev: 0.00010021703052314698",
            "extra": "mean: 3.234220889240461 msec\nrounds: 316"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 427.2287857171888,
            "unit": "iter/sec",
            "range": "stddev: 0.00006938423381377776",
            "extra": "mean: 2.34066625056947 msec\nrounds: 439"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1011.4314616825145,
            "unit": "iter/sec",
            "range": "stddev: 0.000038723002573170716",
            "extra": "mean: 988.6977396733356 usec\nrounds: 1041"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.12427499620954,
            "unit": "iter/sec",
            "range": "stddev: 0.0003162711313764212",
            "extra": "mean: 55.17462078947364 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.108622217760484,
            "unit": "iter/sec",
            "range": "stddev: 0.00021303811999371058",
            "extra": "mean: 52.33239678947399 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 337.8996922249584,
            "unit": "iter/sec",
            "range": "stddev: 0.00006228365270003947",
            "extra": "mean: 2.9594581558075084 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 717.5924069490081,
            "unit": "iter/sec",
            "range": "stddev: 0.000059801274379835976",
            "extra": "mean: 1.3935487476124586 msec\nrounds: 733"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1004.1259000292721,
            "unit": "iter/sec",
            "range": "stddev: 0.00010993111707177196",
            "extra": "mean: 995.8910530749662 usec\nrounds: 1187"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 912.8565528934331,
            "unit": "iter/sec",
            "range": "stddev: 0.0000416658024985158",
            "extra": "mean: 1.0954623668202337 msec\nrounds: 1085"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1728403501155,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 242.6209609638692,
            "unit": "iter/sec",
            "range": "stddev: 0.00009683868198925269",
            "extra": "mean: 4.121655425101208 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 353.0760996015566,
            "unit": "iter/sec",
            "range": "stddev: 0.00007900871541006188",
            "extra": "mean: 2.8322506143250465 msec\nrounds: 363"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 448.2210122153816,
            "unit": "iter/sec",
            "range": "stddev: 0.000051648280665836605",
            "extra": "mean: 2.2310422152174216 msec\nrounds: 460"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1132.9095062001284,
            "unit": "iter/sec",
            "range": "stddev: 0.00003156184796392111",
            "extra": "mean: 882.6830338409659 usec\nrounds: 1182"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 218.7421357502647,
            "unit": "iter/sec",
            "range": "stddev: 0.00013013622900372689",
            "extra": "mean: 4.571592924107169 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 313.87912360231405,
            "unit": "iter/sec",
            "range": "stddev: 0.00010988095356371094",
            "extra": "mean: 3.185939824615426 msec\nrounds: 325"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 434.73912922340133,
            "unit": "iter/sec",
            "range": "stddev: 0.0000313183110338814",
            "extra": "mean: 2.300230029411789 msec\nrounds: 442"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1013.0784087673208,
            "unit": "iter/sec",
            "range": "stddev: 0.000023323716381178167",
            "extra": "mean: 987.0904278936968 usec\nrounds: 1054"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.208932362444514,
            "unit": "iter/sec",
            "range": "stddev: 0.0005117836744300294",
            "extra": "mean: 54.91810173684186 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 18.785576879389033,
            "unit": "iter/sec",
            "range": "stddev: 0.00022796461343370432",
            "extra": "mean: 53.232328526315825 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 345.2373508963079,
            "unit": "iter/sec",
            "range": "stddev: 0.00004447791786834461",
            "extra": "mean: 2.896557969187842 msec\nrounds: 357"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 725.4134337110247,
            "unit": "iter/sec",
            "range": "stddev: 0.00005195965319902506",
            "extra": "mean: 1.378524236702183 msec\nrounds: 752"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1021.82175032464,
            "unit": "iter/sec",
            "range": "stddev: 0.00005476811664582958",
            "extra": "mean: 978.6442691029947 usec\nrounds: 1204"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 926.9711427688352,
            "unit": "iter/sec",
            "range": "stddev: 0.00004738750311889653",
            "extra": "mean: 1.0787822337306314 msec\nrounds: 1091"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1728480113618,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 227.2724066690181,
            "unit": "iter/sec",
            "range": "stddev: 0.00008138463255560636",
            "extra": "mean: 4.400006206896566 msec\nrounds: 232"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 326.7602932032527,
            "unit": "iter/sec",
            "range": "stddev: 0.00004670312977177951",
            "extra": "mean: 3.060347357988127 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 405.2391991897085,
            "unit": "iter/sec",
            "range": "stddev: 0.00015819844422109043",
            "extra": "mean: 2.467678353919213 msec\nrounds: 421"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 964.6368039385885,
            "unit": "iter/sec",
            "range": "stddev: 0.000022108799555834",
            "extra": "mean: 1.0366595965621719 msec\nrounds: 989"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 210.6663830973015,
            "unit": "iter/sec",
            "range": "stddev: 0.00005655786761549574",
            "extra": "mean: 4.7468418325581885 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 292.3469963702813,
            "unit": "iter/sec",
            "range": "stddev: 0.000047092166159264796",
            "extra": "mean: 3.4205926943522225 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 393.2123544257063,
            "unit": "iter/sec",
            "range": "stddev: 0.00007957752934105146",
            "extra": "mean: 2.543155088452188 msec\nrounds: 407"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 878.5369806528008,
            "unit": "iter/sec",
            "range": "stddev: 0.00005669638120882833",
            "extra": "mean: 1.1382560120086755 msec\nrounds: 916"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.03019688925195,
            "unit": "iter/sec",
            "range": "stddev: 0.00015261873852082813",
            "extra": "mean: 58.71922717647012 msec\nrounds: 17"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.507576629926128,
            "unit": "iter/sec",
            "range": "stddev: 0.0005363749314953436",
            "extra": "mean: 57.118127833333354 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 325.7454543729173,
            "unit": "iter/sec",
            "range": "stddev: 0.00004280915165646248",
            "extra": "mean: 3.0698816716416495 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 653.5622099490937,
            "unit": "iter/sec",
            "range": "stddev: 0.00006214243759967843",
            "extra": "mean: 1.530076226527679 msec\nrounds: 671"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 878.4705357284091,
            "unit": "iter/sec",
            "range": "stddev: 0.0000412736382863608",
            "extra": "mean: 1.1383421063414734 msec\nrounds: 1025"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 804.7204779963065,
            "unit": "iter/sec",
            "range": "stddev: 0.000025774975131082477",
            "extra": "mean: 1.242667519148916 msec\nrounds: 940"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1728482806100,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 225.92423985444586,
            "unit": "iter/sec",
            "range": "stddev: 0.00007453542990618287",
            "extra": "mean: 4.42626254112556 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 323.2853137552021,
            "unit": "iter/sec",
            "range": "stddev: 0.0000520219752538605",
            "extra": "mean: 3.0932428955223723 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 409.5083414974807,
            "unit": "iter/sec",
            "range": "stddev: 0.00009257092825494238",
            "extra": "mean: 2.4419526995304244 msec\nrounds: 426"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 989.7676484030903,
            "unit": "iter/sec",
            "range": "stddev: 0.00004446392348501026",
            "extra": "mean: 1.0103381350293867 msec\nrounds: 1022"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 210.97388194450502,
            "unit": "iter/sec",
            "range": "stddev: 0.0001012506687704455",
            "extra": "mean: 4.739923211267649 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 298.29144223578874,
            "unit": "iter/sec",
            "range": "stddev: 0.000051593768192860315",
            "extra": "mean: 3.352426045161348 msec\nrounds: 310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 407.0439420763848,
            "unit": "iter/sec",
            "range": "stddev: 0.000035351494005826345",
            "extra": "mean: 2.4567372134292635 msec\nrounds: 417"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 912.9864576226764,
            "unit": "iter/sec",
            "range": "stddev: 0.000029990190427177634",
            "extra": "mean: 1.095306498416086 msec\nrounds: 947"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.02729581087707,
            "unit": "iter/sec",
            "range": "stddev: 0.00045600688395386227",
            "extra": "mean: 58.72923164705919 msec\nrounds: 17"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.648060039500166,
            "unit": "iter/sec",
            "range": "stddev: 0.00026687483267110606",
            "extra": "mean: 56.66345183333377 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 334.91087714314455,
            "unit": "iter/sec",
            "range": "stddev: 0.00003792277523630618",
            "extra": "mean: 2.985868982608735 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 662.7421782435249,
            "unit": "iter/sec",
            "range": "stddev: 0.000032378564061796634",
            "extra": "mean: 1.508882387190618 msec\nrounds: 687"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 879.9167123534365,
            "unit": "iter/sec",
            "range": "stddev: 0.00012149573615192878",
            "extra": "mean: 1.1364711977402808 msec\nrounds: 1062"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 837.882253207817,
            "unit": "iter/sec",
            "range": "stddev: 0.00002371056670386696",
            "extra": "mean: 1.1934851181911517 msec\nrounds: 973"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1728483494295,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 230.1294016548289,
            "unit": "iter/sec",
            "range": "stddev: 0.00011298178880092948",
            "extra": "mean: 4.345381306383007 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 330.1395191585247,
            "unit": "iter/sec",
            "range": "stddev: 0.0000920073151064541",
            "extra": "mean: 3.0290224040697935 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 412.27090555792745,
            "unit": "iter/sec",
            "range": "stddev: 0.00006156062471208928",
            "extra": "mean: 2.4255895492957404 msec\nrounds: 426"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 990.0607884633813,
            "unit": "iter/sec",
            "range": "stddev: 0.00004344094416804427",
            "extra": "mean: 1.010038991193707 msec\nrounds: 1022"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 210.3074915909799,
            "unit": "iter/sec",
            "range": "stddev: 0.00006319978699367669",
            "extra": "mean: 4.754942358139419 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 298.28238519282814,
            "unit": "iter/sec",
            "range": "stddev: 0.00003896317849940929",
            "extra": "mean: 3.3525278381877577 msec\nrounds: 309"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 399.3069751894801,
            "unit": "iter/sec",
            "range": "stddev: 0.0000760182825686711",
            "extra": "mean: 2.5043389225181394 msec\nrounds: 413"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 905.3611224059985,
            "unit": "iter/sec",
            "range": "stddev: 0.0000722610417451921",
            "extra": "mean: 1.1045316341202045 msec\nrounds: 932"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.064289772390776,
            "unit": "iter/sec",
            "range": "stddev: 0.0001451596091528507",
            "extra": "mean: 58.60191155555464 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.52426755216002,
            "unit": "iter/sec",
            "range": "stddev: 0.0011025461337302413",
            "extra": "mean: 57.06372588888837 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 326.8199640934852,
            "unit": "iter/sec",
            "range": "stddev: 0.00007639822620780928",
            "extra": "mean: 3.0597885988199756 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 648.5406955977439,
            "unit": "iter/sec",
            "range": "stddev: 0.000029075562766528482",
            "extra": "mean: 1.541923285289483 msec\nrounds: 673"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 884.8597041033833,
            "unit": "iter/sec",
            "range": "stddev: 0.000040747401581418457",
            "extra": "mean: 1.1301226571429048 msec\nrounds: 1050"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 807.4344228339521,
            "unit": "iter/sec",
            "range": "stddev: 0.000047973101280908535",
            "extra": "mean: 1.2384906708462797 msec\nrounds: 957"
          }
        ]
      }
    ]
  }
}