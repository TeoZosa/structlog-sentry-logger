window.BENCHMARK_DATA = {
  "lastUpdate": 1744726801721,
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
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1728568186703,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 229.77647395457942,
            "unit": "iter/sec",
            "range": "stddev: 0.000041058333794819996",
            "extra": "mean: 4.352055642553175 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 331.0634959227949,
            "unit": "iter/sec",
            "range": "stddev: 0.00004147626370140613",
            "extra": "mean: 3.020568598820098 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 411.3063230600013,
            "unit": "iter/sec",
            "range": "stddev: 0.000038011702441854655",
            "extra": "mean: 2.4312779647059304 msec\nrounds: 425"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 984.8554088428048,
            "unit": "iter/sec",
            "range": "stddev: 0.00003828010209050432",
            "extra": "mean: 1.0153774767556893 msec\nrounds: 1011"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 207.33201013080227,
            "unit": "iter/sec",
            "range": "stddev: 0.0002868158984746948",
            "extra": "mean: 4.823181906976722 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 294.24713693506794,
            "unit": "iter/sec",
            "range": "stddev: 0.00009514501241164865",
            "extra": "mean: 3.398503755775445 msec\nrounds: 303"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 395.5545854876046,
            "unit": "iter/sec",
            "range": "stddev: 0.00005993916276080869",
            "extra": "mean: 2.5280960875912712 msec\nrounds: 411"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 892.2617917176248,
            "unit": "iter/sec",
            "range": "stddev: 0.000020474036636432946",
            "extra": "mean: 1.12074730676854 msec\nrounds: 916"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.12365966123673,
            "unit": "iter/sec",
            "range": "stddev: 0.0005408008057588636",
            "extra": "mean: 58.39873133333325 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.60887699489666,
            "unit": "iter/sec",
            "range": "stddev: 0.0006729332726226961",
            "extra": "mean: 56.78953861111166 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 319.561060551644,
            "unit": "iter/sec",
            "range": "stddev: 0.0004955979847870173",
            "extra": "mean: 3.129292405882446 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 651.5732059857937,
            "unit": "iter/sec",
            "range": "stddev: 0.000033957709498085114",
            "extra": "mean: 1.5347469644443956 msec\nrounds: 675"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 915.9459809242677,
            "unit": "iter/sec",
            "range": "stddev: 0.000043496231272399816",
            "extra": "mean: 1.0917674413407161 msec\nrounds: 1074"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 826.3998887264994,
            "unit": "iter/sec",
            "range": "stddev: 0.00002762991432824889",
            "extra": "mean: 1.2100679267285748 msec\nrounds: 969"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1728912734692,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 234.07448813161642,
            "unit": "iter/sec",
            "range": "stddev: 0.0001422219279987552",
            "extra": "mean: 4.27214434166664 msec\nrounds: 240"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 316.6500441608393,
            "unit": "iter/sec",
            "range": "stddev: 0.00003444906417360594",
            "extra": "mean: 3.158060510144947 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 418.3808467333529,
            "unit": "iter/sec",
            "range": "stddev: 0.000057347116872161104",
            "extra": "mean: 2.390166777011499 msec\nrounds: 435"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1009.4394236481672,
            "unit": "iter/sec",
            "range": "stddev: 0.00002068893202291606",
            "extra": "mean: 990.6488458573841 usec\nrounds: 1038"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 213.1535432345337,
            "unit": "iter/sec",
            "range": "stddev: 0.0001116728585531427",
            "extra": "mean: 4.6914537981650914 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 296.013544557214,
            "unit": "iter/sec",
            "range": "stddev: 0.00027076425233223676",
            "extra": "mean: 3.378223795454462 msec\nrounds: 308"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 401.27528030155804,
            "unit": "iter/sec",
            "range": "stddev: 0.000029494946831121542",
            "extra": "mean: 2.492054828915703 msec\nrounds: 415"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 925.8197809195291,
            "unit": "iter/sec",
            "range": "stddev: 0.00002442972602543525",
            "extra": "mean: 1.0801238217299642 msec\nrounds: 948"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.099609348309635,
            "unit": "iter/sec",
            "range": "stddev: 0.001947791574847949",
            "extra": "mean: 58.480868166666866 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.881506160933036,
            "unit": "iter/sec",
            "range": "stddev: 0.00035755166423050383",
            "extra": "mean: 55.92370077777728 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 333.41925120478476,
            "unit": "iter/sec",
            "range": "stddev: 0.00003768290450489747",
            "extra": "mean: 2.999226938416355 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 671.9094639041076,
            "unit": "iter/sec",
            "range": "stddev: 0.00004111006929419563",
            "extra": "mean: 1.4882957507244106 msec\nrounds: 690"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 935.3611687462859,
            "unit": "iter/sec",
            "range": "stddev: 0.00003682422011656919",
            "extra": "mean: 1.0691057459017173 msec\nrounds: 1098"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 830.062907160855,
            "unit": "iter/sec",
            "range": "stddev: 0.000028300605319189775",
            "extra": "mean: 1.2047279686552883 msec\nrounds: 989"
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
        "date": 1728977958416,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 229.8170554196144,
            "unit": "iter/sec",
            "range": "stddev: 0.000040020738561363264",
            "extra": "mean: 4.351287149572678 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 330.0303269125861,
            "unit": "iter/sec",
            "range": "stddev: 0.0000648951903368372",
            "extra": "mean: 3.0300245718475027 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 416.9575978586463,
            "unit": "iter/sec",
            "range": "stddev: 0.00006663507826632841",
            "extra": "mean: 2.398325405594389 msec\nrounds: 429"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 991.5131852467873,
            "unit": "iter/sec",
            "range": "stddev: 0.00004665672865525335",
            "extra": "mean: 1.0085594572815493 msec\nrounds: 1030"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 210.0369121995595,
            "unit": "iter/sec",
            "range": "stddev: 0.0000426068430153295",
            "extra": "mean: 4.761067897674499 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 294.3430749399262,
            "unit": "iter/sec",
            "range": "stddev: 0.0000766331833259431",
            "extra": "mean: 3.3973960495047977 msec\nrounds: 303"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 397.0146396269852,
            "unit": "iter/sec",
            "range": "stddev: 0.00007493656675401003",
            "extra": "mean: 2.518798805352743 msec\nrounds: 411"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 901.9840979041988,
            "unit": "iter/sec",
            "range": "stddev: 0.000047888673671504174",
            "extra": "mean: 1.108666995708179 msec\nrounds: 932"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.090061840217817,
            "unit": "iter/sec",
            "range": "stddev: 0.00044307353803166484",
            "extra": "mean: 58.51353900000018 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.80155129680387,
            "unit": "iter/sec",
            "range": "stddev: 0.0002780788986363073",
            "extra": "mean: 56.17487955555549 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 326.56141988460297,
            "unit": "iter/sec",
            "range": "stddev: 0.00003580633128822558",
            "extra": "mean: 3.062211085294062 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 657.5672388394564,
            "unit": "iter/sec",
            "range": "stddev: 0.00006606730344438848",
            "extra": "mean: 1.5207570282316754 msec\nrounds: 673"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 901.9911678601228,
            "unit": "iter/sec",
            "range": "stddev: 0.00005518760790135966",
            "extra": "mean: 1.108658305792941 msec\nrounds: 1053"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 816.0900707200523,
            "unit": "iter/sec",
            "range": "stddev: 0.00002630676416683549",
            "extra": "mean: 1.2253549404389648 msec\nrounds: 957"
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
        "date": 1728979012096,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 230.15465328112916,
            "unit": "iter/sec",
            "range": "stddev: 0.00012265826650590466",
            "extra": "mean: 4.344904548936148 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 332.22216976235535,
            "unit": "iter/sec",
            "range": "stddev: 0.000035840118391913016",
            "extra": "mean: 3.0100339201183304 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 415.6622136912183,
            "unit": "iter/sec",
            "range": "stddev: 0.00006510602279191391",
            "extra": "mean: 2.405799630232607 msec\nrounds: 430"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 984.0030498526925,
            "unit": "iter/sec",
            "range": "stddev: 0.000026232027851829047",
            "extra": "mean: 1.0162570127701354 msec\nrounds: 1018"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 213.67127865046837,
            "unit": "iter/sec",
            "range": "stddev: 0.00007494819072674214",
            "extra": "mean: 4.680086188073214 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 296.5931519340766,
            "unit": "iter/sec",
            "range": "stddev: 0.00009578356839745638",
            "extra": "mean: 3.371622013114682 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 398.96992611357234,
            "unit": "iter/sec",
            "range": "stddev: 0.00006366456936744954",
            "extra": "mean: 2.506454583535041 msec\nrounds: 413"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 904.2551827924572,
            "unit": "iter/sec",
            "range": "stddev: 0.000043503535725953874",
            "extra": "mean: 1.1058825197018725 msec\nrounds: 939"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.042415777915004,
            "unit": "iter/sec",
            "range": "stddev: 0.0003376843645352683",
            "extra": "mean: 58.67712729411778 msec\nrounds: 17"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.773757871600292,
            "unit": "iter/sec",
            "range": "stddev: 0.0006226721269682801",
            "extra": "mean: 56.26272211110993 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 323.4052486770011,
            "unit": "iter/sec",
            "range": "stddev: 0.00009249322382978261",
            "extra": "mean: 3.0920957655784473 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 659.2477521674772,
            "unit": "iter/sec",
            "range": "stddev: 0.000026977033397260996",
            "extra": "mean: 1.5168804090908103 msec\nrounds: 682"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 900.636063376437,
            "unit": "iter/sec",
            "range": "stddev: 0.00005196594621214793",
            "extra": "mean: 1.1103264022662527 msec\nrounds: 1059"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 828.292745941943,
            "unit": "iter/sec",
            "range": "stddev: 0.000051622564137047855",
            "extra": "mean: 1.2073026172199415 msec\nrounds: 964"
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
        "date": 1728998820338,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 238.10280986397072,
            "unit": "iter/sec",
            "range": "stddev: 0.00041781214703775593",
            "extra": "mean: 4.19986643824701 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 339.784628121896,
            "unit": "iter/sec",
            "range": "stddev: 0.00009738681462974511",
            "extra": "mean: 2.943040730027537 msec\nrounds: 363"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 418.72131699811126,
            "unit": "iter/sec",
            "range": "stddev: 0.00007973353533018675",
            "extra": "mean: 2.3882232869565385 msec\nrounds: 460"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1012.2008675575551,
            "unit": "iter/sec",
            "range": "stddev: 0.000041155905448040575",
            "extra": "mean: 987.9461992687324 usec\nrounds: 1094"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 218.84358854425744,
            "unit": "iter/sec",
            "range": "stddev: 0.00018004213601240717",
            "extra": "mean: 4.569473598253333 msec\nrounds: 229"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 307.54771324232104,
            "unit": "iter/sec",
            "range": "stddev: 0.00010929676300540459",
            "extra": "mean: 3.2515279969325808 msec\nrounds: 326"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 412.8892257799873,
            "unit": "iter/sec",
            "range": "stddev: 0.0000842009481341604",
            "extra": "mean: 2.421957119638819 msec\nrounds: 443"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 922.727248127169,
            "unit": "iter/sec",
            "range": "stddev: 0.000046361782896319075",
            "extra": "mean: 1.0837438712573724 msec\nrounds: 1002"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.982369032958385,
            "unit": "iter/sec",
            "range": "stddev: 0.0011813604181832359",
            "extra": "mean: 55.61002547368388 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 18.46434319975579,
            "unit": "iter/sec",
            "range": "stddev: 0.0012675639562893697",
            "extra": "mean: 54.15843873684205 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 330.2896547429183,
            "unit": "iter/sec",
            "range": "stddev: 0.00010610378211720567",
            "extra": "mean: 3.0276455397258877 msec\nrounds: 365"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 681.0025355370033,
            "unit": "iter/sec",
            "range": "stddev: 0.00006636061048470064",
            "extra": "mean: 1.4684233138889151 msec\nrounds: 720"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 930.7379023730621,
            "unit": "iter/sec",
            "range": "stddev: 0.00007551751395496885",
            "extra": "mean: 1.0744163286467043 msec\nrounds: 1138"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 861.4943226339933,
            "unit": "iter/sec",
            "range": "stddev: 0.000045726160375929465",
            "extra": "mean: 1.16077375523791 msec\nrounds: 1050"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1728999929496,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 229.5545934884862,
            "unit": "iter/sec",
            "range": "stddev: 0.0001269251101072022",
            "extra": "mean: 4.3562622067510794 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 334.3759391572186,
            "unit": "iter/sec",
            "range": "stddev: 0.000037773375892608366",
            "extra": "mean: 2.9906458057970937 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 413.5690973386024,
            "unit": "iter/sec",
            "range": "stddev: 0.00009172473986063813",
            "extra": "mean: 2.4179756331776106 msec\nrounds: 428"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 999.3163465777404,
            "unit": "iter/sec",
            "range": "stddev: 0.000022629080308818714",
            "extra": "mean: 1.0006841211240072 msec\nrounds: 1032"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 207.10391373353346,
            "unit": "iter/sec",
            "range": "stddev: 0.0002890129811906464",
            "extra": "mean: 4.828493976635478 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 300.3849410367436,
            "unit": "iter/sec",
            "range": "stddev: 0.00009609458375979291",
            "extra": "mean: 3.329061691803246 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 398.7053397389759,
            "unit": "iter/sec",
            "range": "stddev: 0.00010037888976691051",
            "extra": "mean: 2.5081179014424015 msec\nrounds: 416"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 904.7544477411816,
            "unit": "iter/sec",
            "range": "stddev: 0.00004582488323312083",
            "extra": "mean: 1.1052722675159095 msec\nrounds: 942"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.08715826325422,
            "unit": "iter/sec",
            "range": "stddev: 0.0005657170463934246",
            "extra": "mean: 58.52348205555577 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.755949639190778,
            "unit": "iter/sec",
            "range": "stddev: 0.0002060416537212275",
            "extra": "mean: 56.31915049999966 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 324.4666465207983,
            "unit": "iter/sec",
            "range": "stddev: 0.00009123321987486402",
            "extra": "mean: 3.081980877612023 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 647.5191910298282,
            "unit": "iter/sec",
            "range": "stddev: 0.000028729325312721784",
            "extra": "mean: 1.5443557717719203 msec\nrounds: 666"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 903.2744551759916,
            "unit": "iter/sec",
            "range": "stddev: 0.00006340830300704621",
            "extra": "mean: 1.1070832284359937 msec\nrounds: 1055"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 822.1212657308389,
            "unit": "iter/sec",
            "range": "stddev: 0.000025938588695903157",
            "extra": "mean: 1.2163655675674958 msec\nrounds: 962"
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
        "date": 1729003631329,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 231.47884125609588,
            "unit": "iter/sec",
            "range": "stddev: 0.00012014141941588252",
            "extra": "mean: 4.320049273504239 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 336.97870238405164,
            "unit": "iter/sec",
            "range": "stddev: 0.0000369354825286885",
            "extra": "mean: 2.9675465924855655 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 423.1128730966706,
            "unit": "iter/sec",
            "range": "stddev: 0.00005781874686244282",
            "extra": "mean: 2.363435535962824 msec\nrounds: 431"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1023.4843832934095,
            "unit": "iter/sec",
            "range": "stddev: 0.000027624667164442705",
            "extra": "mean: 977.0544781368911 usec\nrounds: 1052"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 209.9075476426002,
            "unit": "iter/sec",
            "range": "stddev: 0.00008664782431894782",
            "extra": "mean: 4.764002110598964 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 301.82638396119023,
            "unit": "iter/sec",
            "range": "stddev: 0.00009748106787407233",
            "extra": "mean: 3.313162974276573 msec\nrounds: 311"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 409.27350106001114,
            "unit": "iter/sec",
            "range": "stddev: 0.00006674826891352297",
            "extra": "mean: 2.4433538878281094 msec\nrounds: 419"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 915.1200161312997,
            "unit": "iter/sec",
            "range": "stddev: 0.00011223477333724175",
            "extra": "mean: 1.0927528437499743 msec\nrounds: 960"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.125778957254887,
            "unit": "iter/sec",
            "range": "stddev: 0.0005799906819111854",
            "extra": "mean: 58.39150455555635 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.694076512424953,
            "unit": "iter/sec",
            "range": "stddev: 0.0010946821817420054",
            "extra": "mean: 56.51608883333302 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 330.7952026456213,
            "unit": "iter/sec",
            "range": "stddev: 0.00011120538946658002",
            "extra": "mean: 3.0230184476746884 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 667.7522598297217,
            "unit": "iter/sec",
            "range": "stddev: 0.0000703205990415608",
            "extra": "mean: 1.4975613863965094 msec\nrounds: 691"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 909.2183858137715,
            "unit": "iter/sec",
            "range": "stddev: 0.0001217324661295229",
            "extra": "mean: 1.0998457747914732 msec\nrounds: 1079"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 854.5145979774467,
            "unit": "iter/sec",
            "range": "stddev: 0.000048547136611466146",
            "extra": "mean: 1.1702550224032489 msec\nrounds: 982"
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
        "date": 1729004025014,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 235.22264655140881,
            "unit": "iter/sec",
            "range": "stddev: 0.00006931987301114317",
            "extra": "mean: 4.251291338912158 msec\nrounds: 239"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 335.4318055291037,
            "unit": "iter/sec",
            "range": "stddev: 0.000040864870741401474",
            "extra": "mean: 2.9812319032258108 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 424.7927453216042,
            "unit": "iter/sec",
            "range": "stddev: 0.00003127551519904128",
            "extra": "mean: 2.354089167042895 msec\nrounds: 443"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 994.2785279447156,
            "unit": "iter/sec",
            "range": "stddev: 0.00003276692053058374",
            "extra": "mean: 1.0057543956693014 msec\nrounds: 1016"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 213.941705248941,
            "unit": "iter/sec",
            "range": "stddev: 0.00004652123137940888",
            "extra": "mean: 4.674170465437804 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 303.1801531369862,
            "unit": "iter/sec",
            "range": "stddev: 0.00007380648386395947",
            "extra": "mean: 3.2983689389066613 msec\nrounds: 311"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 411.88803495508813,
            "unit": "iter/sec",
            "range": "stddev: 0.000034133999626912116",
            "extra": "mean: 2.4278442565320915 msec\nrounds: 421"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 924.3607559202707,
            "unit": "iter/sec",
            "range": "stddev: 0.00002081439652728208",
            "extra": "mean: 1.0818287055084082 msec\nrounds: 944"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.3069004504317,
            "unit": "iter/sec",
            "range": "stddev: 0.0005523592539477486",
            "extra": "mean: 57.78042133333332 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.820622267438537,
            "unit": "iter/sec",
            "range": "stddev: 0.0005003110602156048",
            "extra": "mean: 56.11476327777728 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 334.81405222113085,
            "unit": "iter/sec",
            "range": "stddev: 0.000032927875643724066",
            "extra": "mean: 2.986732466472289 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 668.4442789383975,
            "unit": "iter/sec",
            "range": "stddev: 0.000027755220834944662",
            "extra": "mean: 1.4960110087084133 msec\nrounds: 689"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 921.2651405873628,
            "unit": "iter/sec",
            "range": "stddev: 0.000038339300531268654",
            "extra": "mean: 1.0854638430826102 msec\nrounds: 1077"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 846.6126853982763,
            "unit": "iter/sec",
            "range": "stddev: 0.000024335682311998964",
            "extra": "mean: 1.181177671026232 msec\nrounds: 994"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729004365616,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 228.7127832240079,
            "unit": "iter/sec",
            "range": "stddev: 0.00009528575415122551",
            "extra": "mean: 4.37229605579401 msec\nrounds: 233"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 326.6374342575627,
            "unit": "iter/sec",
            "range": "stddev: 0.00007612974973175765",
            "extra": "mean: 3.0614984540059553 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 414.11688009743585,
            "unit": "iter/sec",
            "range": "stddev: 0.00003424525933236039",
            "extra": "mean: 2.4147771995305143 msec\nrounds: 426"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 990.01061097673,
            "unit": "iter/sec",
            "range": "stddev: 0.000038653140497281714",
            "extra": "mean: 1.0100901837945098 msec\nrounds: 1012"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 212.13490333407412,
            "unit": "iter/sec",
            "range": "stddev: 0.00004873031830238632",
            "extra": "mean: 4.713981453703452 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 295.01126720818644,
            "unit": "iter/sec",
            "range": "stddev: 0.00004176575916100971",
            "extra": "mean: 3.3897010424836087 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 395.86475754431444,
            "unit": "iter/sec",
            "range": "stddev: 0.000051622574344110846",
            "extra": "mean: 2.5261152475490487 msec\nrounds: 408"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 906.8295681123352,
            "unit": "iter/sec",
            "range": "stddev: 0.00002201244469791515",
            "extra": "mean: 1.1027430458422407 msec\nrounds: 938"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.083229529382667,
            "unit": "iter/sec",
            "range": "stddev: 0.0007277514761665416",
            "extra": "mean: 58.536941055555594 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.76432962758167,
            "unit": "iter/sec",
            "range": "stddev: 0.0005663141998849902",
            "extra": "mean: 56.292582999999986 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 323.36177089696815,
            "unit": "iter/sec",
            "range": "stddev: 0.00006517780082867398",
            "extra": "mean: 3.0925115149701083 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 647.5112111969204,
            "unit": "iter/sec",
            "range": "stddev: 0.000038118373334414676",
            "extra": "mean: 1.544374804185253 msec\nrounds: 669"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 904.4910564970703,
            "unit": "iter/sec",
            "range": "stddev: 0.000047271743041706575",
            "extra": "mean: 1.1055941270141671 msec\nrounds: 1055"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 816.7038307744787,
            "unit": "iter/sec",
            "range": "stddev: 0.000034859537633041405",
            "extra": "mean: 1.2244340755102152 msec\nrounds: 980"
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
        "date": 1729040929228,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 227.61646335350784,
            "unit": "iter/sec",
            "range": "stddev: 0.00026598291898821555",
            "extra": "mean: 4.393355319148925 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 326.8051361364285,
            "unit": "iter/sec",
            "range": "stddev: 0.00007113278360379224",
            "extra": "mean: 3.059927428994074 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 412.64677586091886,
            "unit": "iter/sec",
            "range": "stddev: 0.00005615879426073981",
            "extra": "mean: 2.423380136470633 msec\nrounds: 425"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 993.0982713819493,
            "unit": "iter/sec",
            "range": "stddev: 0.000016427808396001903",
            "extra": "mean: 1.0069496935166815 msec\nrounds: 1018"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 208.45874166793064,
            "unit": "iter/sec",
            "range": "stddev: 0.00011419786675212274",
            "extra": "mean: 4.797112330232589 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 286.1318622355748,
            "unit": "iter/sec",
            "range": "stddev: 0.0005148913343718524",
            "extra": "mean: 3.4948921528239016 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 398.02885626668035,
            "unit": "iter/sec",
            "range": "stddev: 0.00008915062378575966",
            "extra": "mean: 2.5123806584766744 msec\nrounds: 407"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 900.0851078965024,
            "unit": "iter/sec",
            "range": "stddev: 0.00005575140604471095",
            "extra": "mean: 1.111006049569022 msec\nrounds: 928"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.115354089163255,
            "unit": "iter/sec",
            "range": "stddev: 0.00024115503493217727",
            "extra": "mean: 58.42707049999972 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.622898727795896,
            "unit": "iter/sec",
            "range": "stddev: 0.000437809769348237",
            "extra": "mean: 56.74435377777777 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 321.9337298734172,
            "unit": "iter/sec",
            "range": "stddev: 0.000035036776765991746",
            "extra": "mean: 3.1062293484848427 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 646.1102119226824,
            "unit": "iter/sec",
            "range": "stddev: 0.000025825440243308172",
            "extra": "mean: 1.5477235641025067 msec\nrounds: 663"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 908.5884238476588,
            "unit": "iter/sec",
            "range": "stddev: 0.00005160689039529769",
            "extra": "mean: 1.1006083433962703 msec\nrounds: 1060"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 818.9235623670627,
            "unit": "iter/sec",
            "range": "stddev: 0.00004989056032340844",
            "extra": "mean: 1.2211151882228712 msec\nrounds: 951"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729085485927,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 225.61141061063458,
            "unit": "iter/sec",
            "range": "stddev: 0.00041916623492322546",
            "extra": "mean: 4.432399927350409 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 327.1628854753305,
            "unit": "iter/sec",
            "range": "stddev: 0.00016440931976871698",
            "extra": "mean: 3.0565814289940425 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 417.9872519628072,
            "unit": "iter/sec",
            "range": "stddev: 0.00003740154452986003",
            "extra": "mean: 2.3924174608295963 msec\nrounds: 434"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 979.0179647562986,
            "unit": "iter/sec",
            "range": "stddev: 0.000041162826362789215",
            "extra": "mean: 1.0214317162698074 msec\nrounds: 1008"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 210.1245424386605,
            "unit": "iter/sec",
            "range": "stddev: 0.00005312394213344599",
            "extra": "mean: 4.759082344186042 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 295.75811522038487,
            "unit": "iter/sec",
            "range": "stddev: 0.00006262081273890056",
            "extra": "mean: 3.3811413737704124 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 404.8020382952122,
            "unit": "iter/sec",
            "range": "stddev: 0.00004457290789894853",
            "extra": "mean: 2.4703432922704915 msec\nrounds: 414"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 909.127012482378,
            "unit": "iter/sec",
            "range": "stddev: 0.000022442623475472055",
            "extra": "mean: 1.0999563166311523 msec\nrounds: 938"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.09006964021423,
            "unit": "iter/sec",
            "range": "stddev: 0.0005556741797100906",
            "extra": "mean: 58.51351229411752 msec\nrounds: 17"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.758841801013926,
            "unit": "iter/sec",
            "range": "stddev: 0.0004538166491270349",
            "extra": "mean: 56.309978500000256 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 328.119957961769,
            "unit": "iter/sec",
            "range": "stddev: 0.00006706088925719868",
            "extra": "mean: 3.0476658786982878 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 656.2729035597476,
            "unit": "iter/sec",
            "range": "stddev: 0.00002600618290412373",
            "extra": "mean: 1.5237563437036816 msec\nrounds: 675"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 887.6146814275176,
            "unit": "iter/sec",
            "range": "stddev: 0.0000733325831465519",
            "extra": "mean: 1.1266149838708586 msec\nrounds: 1054"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 829.0268073829131,
            "unit": "iter/sec",
            "range": "stddev: 0.00004719531282867272",
            "extra": "mean: 1.2062336116208572 msec\nrounds: 981"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729172706991,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 221.66291816759804,
            "unit": "iter/sec",
            "range": "stddev: 0.00038923633313686775",
            "extra": "mean: 4.511354484848502 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 326.4749407395819,
            "unit": "iter/sec",
            "range": "stddev: 0.00007300177132263422",
            "extra": "mean: 3.0630222268656953 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 412.00159927083195,
            "unit": "iter/sec",
            "range": "stddev: 0.0000680514729560167",
            "extra": "mean: 2.427175044392591 msec\nrounds: 428"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 989.6253403151537,
            "unit": "iter/sec",
            "range": "stddev: 0.0000480861434814818",
            "extra": "mean: 1.0104834216164496 msec\nrounds: 1027"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 206.7837498328098,
            "unit": "iter/sec",
            "range": "stddev: 0.00007840127971325525",
            "extra": "mean: 4.835969948356806 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 291.1623856677764,
            "unit": "iter/sec",
            "range": "stddev: 0.00008622008462122504",
            "extra": "mean: 3.43450956999997 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 404.72217811393256,
            "unit": "iter/sec",
            "range": "stddev: 0.000041616460555603124",
            "extra": "mean: 2.4708307428571206 msec\nrounds: 420"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 918.68820246318,
            "unit": "iter/sec",
            "range": "stddev: 0.000034334762069180824",
            "extra": "mean: 1.0885085900948845 msec\nrounds: 949"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 16.981519063747317,
            "unit": "iter/sec",
            "range": "stddev: 0.00019380000787596783",
            "extra": "mean: 58.88754688235351 msec\nrounds: 17"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.618395024840233,
            "unit": "iter/sec",
            "range": "stddev: 0.00033359145908660163",
            "extra": "mean: 56.7588590555551 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 323.4305260053586,
            "unit": "iter/sec",
            "range": "stddev: 0.00023099353422219188",
            "extra": "mean: 3.0918541065088947 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 661.9705618342798,
            "unit": "iter/sec",
            "range": "stddev: 0.00005692313361953462",
            "extra": "mean: 1.510641194117547 msec\nrounds: 680"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 891.9003605595741,
            "unit": "iter/sec",
            "range": "stddev: 0.00011164113525838239",
            "extra": "mean: 1.1212014752103079 msec\nrounds: 1069"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 825.8190408571543,
            "unit": "iter/sec",
            "range": "stddev: 0.00003084620923278589",
            "extra": "mean: 1.2109190397960012 msec\nrounds: 980"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729174837694,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 228.17892120692065,
            "unit": "iter/sec",
            "range": "stddev: 0.00009364704532024454",
            "extra": "mean: 4.382525759656673 msec\nrounds: 233"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 328.55066479062174,
            "unit": "iter/sec",
            "range": "stddev: 0.000052508396881377724",
            "extra": "mean: 3.0436706029411886 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 411.70642946990745,
            "unit": "iter/sec",
            "range": "stddev: 0.000034836280358907175",
            "extra": "mean: 2.4289151891252945 msec\nrounds: 423"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 977.1861564895249,
            "unit": "iter/sec",
            "range": "stddev: 0.00002365086682631302",
            "extra": "mean: 1.023346466135411 msec\nrounds: 1004"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 210.23843457689614,
            "unit": "iter/sec",
            "range": "stddev: 0.00008699649494179472",
            "extra": "mean: 4.75650421395353 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 294.7991833538873,
            "unit": "iter/sec",
            "range": "stddev: 0.00010358011780975446",
            "extra": "mean: 3.392139654605369 msec\nrounds: 304"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 393.5891181869693,
            "unit": "iter/sec",
            "range": "stddev: 0.00007176494515238114",
            "extra": "mean: 2.5407206495098356 msec\nrounds: 408"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 883.8746548057627,
            "unit": "iter/sec",
            "range": "stddev: 0.000025757721035249764",
            "extra": "mean: 1.1313821417582752 msec\nrounds: 910"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.226938070466076,
            "unit": "iter/sec",
            "range": "stddev: 0.0006885871645333191",
            "extra": "mean: 58.04862105555505 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.670742712095457,
            "unit": "iter/sec",
            "range": "stddev: 0.0005218235904820308",
            "extra": "mean: 56.590716999999636 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 326.834618119092,
            "unit": "iter/sec",
            "range": "stddev: 0.00008515396027399516",
            "extra": "mean: 3.05965140949549 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 648.9500895120101,
            "unit": "iter/sec",
            "range": "stddev: 0.000042854698023398915",
            "extra": "mean: 1.5409505540741482 msec\nrounds: 675"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 908.8439416394488,
            "unit": "iter/sec",
            "range": "stddev: 0.0000439622750911409",
            "extra": "mean: 1.1002989118199065 msec\nrounds: 1066"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 821.5195068963069,
            "unit": "iter/sec",
            "range": "stddev: 0.000026413344693625018",
            "extra": "mean: 1.2172565491207759 msec\nrounds: 967"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729519132156,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 228.03428282545406,
            "unit": "iter/sec",
            "range": "stddev: 0.00008392117313715266",
            "extra": "mean: 4.385305523404291 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 328.9000553080259,
            "unit": "iter/sec",
            "range": "stddev: 0.00006269561897563848",
            "extra": "mean: 3.040437311764714 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 411.43748914067453,
            "unit": "iter/sec",
            "range": "stddev: 0.00011783771347752844",
            "extra": "mean: 2.430502874418646 msec\nrounds: 430"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 983.2515563430702,
            "unit": "iter/sec",
            "range": "stddev: 0.000029787644175246115",
            "extra": "mean: 1.0170337321602834 msec\nrounds: 1023"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 207.98036666886586,
            "unit": "iter/sec",
            "range": "stddev: 0.00024280576049562447",
            "extra": "mean: 4.80814615348833 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 294.13171172829357,
            "unit": "iter/sec",
            "range": "stddev: 0.0001516364761957381",
            "extra": "mean: 3.399837420195473 msec\nrounds: 307"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 399.0988390225262,
            "unit": "iter/sec",
            "range": "stddev: 0.00024275320479425798",
            "extra": "mean: 2.505644973684219 msec\nrounds: 418"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 916.1237019680133,
            "unit": "iter/sec",
            "range": "stddev: 0.000024322775461319942",
            "extra": "mean: 1.0915556467448706 msec\nrounds: 937"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 16.848609815554862,
            "unit": "iter/sec",
            "range": "stddev: 0.000472962296569743",
            "extra": "mean: 59.35207776470593 msec\nrounds: 17"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.58236295043091,
            "unit": "iter/sec",
            "range": "stddev: 0.0002019443028561148",
            "extra": "mean: 56.87517672222163 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 325.3088707950703,
            "unit": "iter/sec",
            "range": "stddev: 0.00004289998022417631",
            "extra": "mean: 3.0740016328357496 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 649.4460630984769,
            "unit": "iter/sec",
            "range": "stddev: 0.000060753549968263665",
            "extra": "mean: 1.5397737500001871 msec\nrounds: 672"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 912.1663537679239,
            "unit": "iter/sec",
            "range": "stddev: 0.00004616085713610469",
            "extra": "mean: 1.0962912585728009 msec\nrounds: 1079"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 837.2615296988517,
            "unit": "iter/sec",
            "range": "stddev: 0.00004591158783299652",
            "extra": "mean: 1.1943699364279672 msec\nrounds: 991"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729519643327,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 231.95061338204647,
            "unit": "iter/sec",
            "range": "stddev: 0.00010188714598604843",
            "extra": "mean: 4.311262580508453 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 334.58263547679513,
            "unit": "iter/sec",
            "range": "stddev: 0.000055057905641912434",
            "extra": "mean: 2.9887982637680985 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 417.9007526958124,
            "unit": "iter/sec",
            "range": "stddev: 0.00007335920372904694",
            "extra": "mean: 2.3929126558139857 msec\nrounds: 430"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 995.6922829070032,
            "unit": "iter/sec",
            "range": "stddev: 0.00002291602017435332",
            "extra": "mean: 1.0043263538012166 msec\nrounds: 1026"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 212.7022968492664,
            "unit": "iter/sec",
            "range": "stddev: 0.00005626300614940725",
            "extra": "mean: 4.7014066834861685 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 303.5587709585114,
            "unit": "iter/sec",
            "range": "stddev: 0.0001315770136624406",
            "extra": "mean: 3.2942550032154205 msec\nrounds: 311"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 402.71621476836947,
            "unit": "iter/sec",
            "range": "stddev: 0.00004465809938881237",
            "extra": "mean: 2.4831381586539063 msec\nrounds: 416"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 921.2948290986867,
            "unit": "iter/sec",
            "range": "stddev: 0.000040805324769649934",
            "extra": "mean: 1.085428864263041 msec\nrounds: 943"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.014765113516564,
            "unit": "iter/sec",
            "range": "stddev: 0.0003932317906377424",
            "extra": "mean: 58.77248338888899 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.75332369219337,
            "unit": "iter/sec",
            "range": "stddev: 0.00022614129764847394",
            "extra": "mean: 56.3274808333342 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 327.94261516741614,
            "unit": "iter/sec",
            "range": "stddev: 0.00004761776640385001",
            "extra": "mean: 3.0493139767440582 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 665.7830108564008,
            "unit": "iter/sec",
            "range": "stddev: 0.00006040332642662029",
            "extra": "mean: 1.5019908644314817 msec\nrounds: 686"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 915.0165640979794,
            "unit": "iter/sec",
            "range": "stddev: 0.0000514340273602613",
            "extra": "mean: 1.0928763906976886 msec\nrounds: 1075"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 838.2237559771274,
            "unit": "iter/sec",
            "range": "stddev: 0.000032077599716604175",
            "extra": "mean: 1.1929988775303655 msec\nrounds: 988"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729605964782,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 229.16176895833192,
            "unit": "iter/sec",
            "range": "stddev: 0.00017568435282552802",
            "extra": "mean: 4.36372962447252 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 327.7022075122402,
            "unit": "iter/sec",
            "range": "stddev: 0.00009655140934736006",
            "extra": "mean: 3.051551002941134 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 417.6967694407686,
            "unit": "iter/sec",
            "range": "stddev: 0.00007486564385720472",
            "extra": "mean: 2.394081240654184 msec\nrounds: 428"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1002.1138731264427,
            "unit": "iter/sec",
            "range": "stddev: 0.000041224180691178935",
            "extra": "mean: 997.8905859073202 usec\nrounds: 1036"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 208.83272380808774,
            "unit": "iter/sec",
            "range": "stddev: 0.00006839487144431787",
            "extra": "mean: 4.788521558139403 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 295.51742722738743,
            "unit": "iter/sec",
            "range": "stddev: 0.00004725566169335437",
            "extra": "mean: 3.383895188118786 msec\nrounds: 303"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 401.66502805607365,
            "unit": "iter/sec",
            "range": "stddev: 0.00004306424659423708",
            "extra": "mean: 2.4896367125603898 msec\nrounds: 414"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 919.7755938677918,
            "unit": "iter/sec",
            "range": "stddev: 0.00003996519926886532",
            "extra": "mean: 1.0872217165437634 msec\nrounds: 949"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.029901939128038,
            "unit": "iter/sec",
            "range": "stddev: 0.001280923514186169",
            "extra": "mean: 58.720244166667335 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.79665450025411,
            "unit": "iter/sec",
            "range": "stddev: 0.0004546688313894424",
            "extra": "mean: 56.19033622222207 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 326.80617603338044,
            "unit": "iter/sec",
            "range": "stddev: 0.00010830742472110554",
            "extra": "mean: 3.0599176923078057 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 661.6359452442586,
            "unit": "iter/sec",
            "range": "stddev: 0.00006226174501106932",
            "extra": "mean: 1.5114051876834267 msec\nrounds: 682"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 917.3217084935882,
            "unit": "iter/sec",
            "range": "stddev: 0.000059079764068274757",
            "extra": "mean: 1.090130093663852 msec\nrounds: 1089"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 825.3927735318956,
            "unit": "iter/sec",
            "range": "stddev: 0.000029570788731242017",
            "extra": "mean: 1.2115444089980962 msec\nrounds: 978"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729606270994,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 231.3820853642023,
            "unit": "iter/sec",
            "range": "stddev: 0.0001654297250149112",
            "extra": "mean: 4.321855766949157 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 334.81582724244004,
            "unit": "iter/sec",
            "range": "stddev: 0.00003833134713653729",
            "extra": "mean: 2.9867166323529273 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 417.4036162098168,
            "unit": "iter/sec",
            "range": "stddev: 0.000030420200816626173",
            "extra": "mean: 2.3957626651162713 msec\nrounds: 430"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1002.0241041806877,
            "unit": "iter/sec",
            "range": "stddev: 0.00002241287330589248",
            "extra": "mean: 997.9799845410479 usec\nrounds: 1035"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 209.2096073255439,
            "unit": "iter/sec",
            "range": "stddev: 0.00012258333671728006",
            "extra": "mean: 4.7798952102803485 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 300.4035585317696,
            "unit": "iter/sec",
            "range": "stddev: 0.00007989251303996221",
            "extra": "mean: 3.328855373376822 msec\nrounds: 308"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 396.6631602447483,
            "unit": "iter/sec",
            "range": "stddev: 0.000044752427187175215",
            "extra": "mean: 2.521030688564529 msec\nrounds: 411"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 924.8620151678209,
            "unit": "iter/sec",
            "range": "stddev: 0.000023085123948538506",
            "extra": "mean: 1.0812423730242018 msec\nrounds: 949"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.008536100470373,
            "unit": "iter/sec",
            "range": "stddev: 0.0008609168348506977",
            "extra": "mean: 58.79400755555587 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.654793873366543,
            "unit": "iter/sec",
            "range": "stddev: 0.0005389538638413695",
            "extra": "mean: 56.641839444445054 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 328.82473991555963,
            "unit": "iter/sec",
            "range": "stddev: 0.00004776531574201261",
            "extra": "mean: 3.0411337062314545 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 650.1166235588037,
            "unit": "iter/sec",
            "range": "stddev: 0.00006263997400374713",
            "extra": "mean: 1.5381855558867263 msec\nrounds: 671"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 905.6568658100289,
            "unit": "iter/sec",
            "range": "stddev: 0.000045206877689461576",
            "extra": "mean: 1.1041709479070636 msec\nrounds: 1075"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 827.2933256547581,
            "unit": "iter/sec",
            "range": "stddev: 0.00005080620501414687",
            "extra": "mean: 1.2087611116752983 msec\nrounds: 985"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729692713764,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 226.10340118850445,
            "unit": "iter/sec",
            "range": "stddev: 0.00008774527046024947",
            "extra": "mean: 4.422755229437222 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 328.7448701423776,
            "unit": "iter/sec",
            "range": "stddev: 0.000033923016788819826",
            "extra": "mean: 3.041872560830852 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 416.8014591898672,
            "unit": "iter/sec",
            "range": "stddev: 0.0000688224588455681",
            "extra": "mean: 2.39922384615373 msec\nrounds: 429"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 994.1809870390349,
            "unit": "iter/sec",
            "range": "stddev: 0.00002031929407837536",
            "extra": "mean: 1.005853072063162 msec\nrounds: 1013"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 210.62194093488927,
            "unit": "iter/sec",
            "range": "stddev: 0.00011991139834576014",
            "extra": "mean: 4.747843437209306 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 297.65051846858734,
            "unit": "iter/sec",
            "range": "stddev: 0.0000396020085445449",
            "extra": "mean: 3.359644744262508 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 398.3074339370584,
            "unit": "iter/sec",
            "range": "stddev: 0.00008997845398023311",
            "extra": "mean: 2.510623490291227 msec\nrounds: 412"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 902.9471991233136,
            "unit": "iter/sec",
            "range": "stddev: 0.00012852089633934392",
            "extra": "mean: 1.107484469713087 msec\nrounds: 941"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.193804580084933,
            "unit": "iter/sec",
            "range": "stddev: 0.00025490951374544717",
            "extra": "mean: 58.16048422222212 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.742720072993883,
            "unit": "iter/sec",
            "range": "stddev: 0.0006530023744480421",
            "extra": "mean: 56.36114394444488 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 327.191170007079,
            "unit": "iter/sec",
            "range": "stddev: 0.00004062070207497719",
            "extra": "mean: 3.056317198225014 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 664.7443128197831,
            "unit": "iter/sec",
            "range": "stddev: 0.00003059399662255788",
            "extra": "mean: 1.5043378043478004 msec\nrounds: 690"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 901.3580087014467,
            "unit": "iter/sec",
            "range": "stddev: 0.000047006592735518013",
            "extra": "mean: 1.1094370830971627 msec\nrounds: 1059"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 819.9238338323265,
            "unit": "iter/sec",
            "range": "stddev: 0.000032205576740253",
            "extra": "mean: 1.2196254807303222 msec\nrounds: 986"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729693624729,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 230.57939883866854,
            "unit": "iter/sec",
            "range": "stddev: 0.00017393039265304296",
            "extra": "mean: 4.336900889830486 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 329.9671178102373,
            "unit": "iter/sec",
            "range": "stddev: 0.00003815530159221184",
            "extra": "mean: 3.0306050088757504 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 420.5969544703654,
            "unit": "iter/sec",
            "range": "stddev: 0.00007082102031979544",
            "extra": "mean: 2.377573088372085 msec\nrounds: 430"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 987.3021525665639,
            "unit": "iter/sec",
            "range": "stddev: 0.000020537338197860457",
            "extra": "mean: 1.012861156435674 msec\nrounds: 1010"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 207.81165083085773,
            "unit": "iter/sec",
            "range": "stddev: 0.00004992044043259371",
            "extra": "mean: 4.812049738317708 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 295.1150302180029,
            "unit": "iter/sec",
            "range": "stddev: 0.0000859329075609195",
            "extra": "mean: 3.388509217105259 msec\nrounds: 304"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 404.77040854585147,
            "unit": "iter/sec",
            "range": "stddev: 0.00007283296290646528",
            "extra": "mean: 2.4705363309351758 msec\nrounds: 417"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 909.595487221618,
            "unit": "iter/sec",
            "range": "stddev: 0.00002329293303300583",
            "extra": "mean: 1.0993897991452495 msec\nrounds: 936"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.116197103835134,
            "unit": "iter/sec",
            "range": "stddev: 0.00033678909290968894",
            "extra": "mean: 58.42419282352944 msec\nrounds: 17"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.546397583327597,
            "unit": "iter/sec",
            "range": "stddev: 0.000478740918263126",
            "extra": "mean: 56.9917554444446 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 332.9299235362185,
            "unit": "iter/sec",
            "range": "stddev: 0.00008929062224327722",
            "extra": "mean: 3.003635087463722 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 656.2979321393739,
            "unit": "iter/sec",
            "range": "stddev: 0.00003102329581210461",
            "extra": "mean: 1.5236982337278435 msec\nrounds: 676"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 912.4242817719086,
            "unit": "iter/sec",
            "range": "stddev: 0.000060742677155780466",
            "extra": "mean: 1.0959813542642918 msec\nrounds: 1067"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 834.3093279406211,
            "unit": "iter/sec",
            "range": "stddev: 0.00004969198225265987",
            "extra": "mean: 1.1985962118730755 msec\nrounds: 977"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729694114520,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 228.738499842007,
            "unit": "iter/sec",
            "range": "stddev: 0.00009252087107085474",
            "extra": "mean: 4.371804487179528 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 332.43169221698446,
            "unit": "iter/sec",
            "range": "stddev: 0.000040516186195363",
            "extra": "mean: 3.008136779411757 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 419.37480636174075,
            "unit": "iter/sec",
            "range": "stddev: 0.00006314099224616943",
            "extra": "mean: 2.3845018461538876 msec\nrounds: 429"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 990.6169193979953,
            "unit": "iter/sec",
            "range": "stddev: 0.00003737653830603889",
            "extra": "mean: 1.0094719567355128 msec\nrounds: 1017"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 207.70156277898798,
            "unit": "iter/sec",
            "range": "stddev: 0.00005386576495190767",
            "extra": "mean: 4.814600268867907 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 288.1739926948153,
            "unit": "iter/sec",
            "range": "stddev: 0.000294758965017802",
            "extra": "mean: 3.470125775919791 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 399.0371857799743,
            "unit": "iter/sec",
            "range": "stddev: 0.00003164507012335019",
            "extra": "mean: 2.5060321083744594 msec\nrounds: 406"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 886.527856225874,
            "unit": "iter/sec",
            "range": "stddev: 0.000042262309643268826",
            "extra": "mean: 1.127996140197105 msec\nrounds: 913"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 16.995122989810547,
            "unit": "iter/sec",
            "range": "stddev: 0.00012570719973339364",
            "extra": "mean: 58.84040972222159 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.584665808779757,
            "unit": "iter/sec",
            "range": "stddev: 0.0002959101206280568",
            "extra": "mean: 56.867728444444765 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 327.0089252444024,
            "unit": "iter/sec",
            "range": "stddev: 0.00010726666812736012",
            "extra": "mean: 3.0580205089283488 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 660.0605300780936,
            "unit": "iter/sec",
            "range": "stddev: 0.000025541184562500318",
            "extra": "mean: 1.5150125699557997 msec\nrounds: 679"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 891.7002632058127,
            "unit": "iter/sec",
            "range": "stddev: 0.00005222312832646784",
            "extra": "mean: 1.1214530725883511 msec\nrounds: 1047"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 811.9615293812784,
            "unit": "iter/sec",
            "range": "stddev: 0.00004736749799379207",
            "extra": "mean: 1.2315854431699595 msec\nrounds: 959"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729695017824,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 227.04342658654204,
            "unit": "iter/sec",
            "range": "stddev: 0.0001140982333727682",
            "extra": "mean: 4.4044437446808455 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 333.6506191840562,
            "unit": "iter/sec",
            "range": "stddev: 0.000041165816533880376",
            "extra": "mean: 2.9971471428571106 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 419.79399935250046,
            "unit": "iter/sec",
            "range": "stddev: 0.00008806413182779136",
            "extra": "mean: 2.382120758139521 msec\nrounds: 430"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 992.1742755890843,
            "unit": "iter/sec",
            "range": "stddev: 0.000022249635639498918",
            "extra": "mean: 1.007887449416353 msec\nrounds: 1028"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 210.38734134209218,
            "unit": "iter/sec",
            "range": "stddev: 0.000042592945635489376",
            "extra": "mean: 4.75313768224291 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 298.7923696266901,
            "unit": "iter/sec",
            "range": "stddev: 0.00004345901698180271",
            "extra": "mean: 3.3468056806450432 msec\nrounds: 310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 400.3052139161088,
            "unit": "iter/sec",
            "range": "stddev: 0.00017260866379192313",
            "extra": "mean: 2.498093867469755 msec\nrounds: 415"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 913.2197611273003,
            "unit": "iter/sec",
            "range": "stddev: 0.00005855829908965581",
            "extra": "mean: 1.0950266765642216 msec\nrounds: 943"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 16.920373466960935,
            "unit": "iter/sec",
            "range": "stddev: 0.0009349176210325441",
            "extra": "mean: 59.1003503529411 msec\nrounds: 17"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.290916643738676,
            "unit": "iter/sec",
            "range": "stddev: 0.0029103026369176454",
            "extra": "mean: 57.83383383333332 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 332.30338700305634,
            "unit": "iter/sec",
            "range": "stddev: 0.00008052669839919805",
            "extra": "mean: 3.0092982470588017 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 664.8059999544483,
            "unit": "iter/sec",
            "range": "stddev: 0.00007187792841359691",
            "extra": "mean: 1.5041982173273387 msec\nrounds: 681"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 905.4599078670107,
            "unit": "iter/sec",
            "range": "stddev: 0.00003851373351073385",
            "extra": "mean: 1.1044111299811135 msec\nrounds: 1054"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 833.3089807196565,
            "unit": "iter/sec",
            "range": "stddev: 0.000023052852872106897",
            "extra": "mean: 1.2000350687885146 msec\nrounds: 974"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729777196142,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 225.88435699818712,
            "unit": "iter/sec",
            "range": "stddev: 0.00014201802698557498",
            "extra": "mean: 4.427044056034503 msec\nrounds: 232"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 324.52073762735176,
            "unit": "iter/sec",
            "range": "stddev: 0.00011556376586044279",
            "extra": "mean: 3.081467173134259 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 415.46355998875373,
            "unit": "iter/sec",
            "range": "stddev: 0.000060750197509136493",
            "extra": "mean: 2.406949962174948 msec\nrounds: 423"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 993.8021151080077,
            "unit": "iter/sec",
            "range": "stddev: 0.000027960547030597347",
            "extra": "mean: 1.0062365382381167 msec\nrounds: 1033"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 213.40805686301104,
            "unit": "iter/sec",
            "range": "stddev: 0.00003832747753966096",
            "extra": "mean: 4.6858587004609245 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 299.30692926184594,
            "unit": "iter/sec",
            "range": "stddev: 0.00006123187530307867",
            "extra": "mean: 3.3410519511399586 msec\nrounds: 307"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 399.36950007099654,
            "unit": "iter/sec",
            "range": "stddev: 0.000039399514994968904",
            "extra": "mean: 2.503946845771218 msec\nrounds: 402"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 916.1882412220167,
            "unit": "iter/sec",
            "range": "stddev: 0.0000283344422769635",
            "extra": "mean: 1.091478754045342 msec\nrounds: 927"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.18661565761891,
            "unit": "iter/sec",
            "range": "stddev: 0.0005559629451751006",
            "extra": "mean: 58.184811944444405 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.652497159857894,
            "unit": "iter/sec",
            "range": "stddev: 0.0005619697647521501",
            "extra": "mean: 56.64920894444433 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 326.5485273508681,
            "unit": "iter/sec",
            "range": "stddev: 0.0000809721927944967",
            "extra": "mean: 3.0623319851187856 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 661.1633258238869,
            "unit": "iter/sec",
            "range": "stddev: 0.000028731467266294024",
            "extra": "mean: 1.512485585545573 msec\nrounds: 678"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 906.2335980628922,
            "unit": "iter/sec",
            "range": "stddev: 0.000038023345470586374",
            "extra": "mean: 1.1034682471909418 msec\nrounds: 1068"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 822.6411872095376,
            "unit": "iter/sec",
            "range": "stddev: 0.000029222147143824847",
            "extra": "mean: 1.2155968064182114 msec\nrounds: 966"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1730122882086,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 228.77209818216298,
            "unit": "iter/sec",
            "range": "stddev: 0.00006634469758733824",
            "extra": "mean: 4.371162427350454 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 326.5405399840965,
            "unit": "iter/sec",
            "range": "stddev: 0.000042616294282291223",
            "extra": "mean: 3.062406891495626 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 418.70209483177354,
            "unit": "iter/sec",
            "range": "stddev: 0.00006555406866952859",
            "extra": "mean: 2.388332927738947 msec\nrounds: 429"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 980.811276949265,
            "unit": "iter/sec",
            "range": "stddev: 0.00002416385228130465",
            "extra": "mean: 1.0195641337958714 msec\nrounds: 1009"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 212.08202073880358,
            "unit": "iter/sec",
            "range": "stddev: 0.00011210291525322844",
            "extra": "mean: 4.715156883720861 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 301.1366971595173,
            "unit": "iter/sec",
            "range": "stddev: 0.00010279222649154002",
            "extra": "mean: 3.3207510390880146 msec\nrounds: 307"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 407.1670504314955,
            "unit": "iter/sec",
            "range": "stddev: 0.000035083610859033464",
            "extra": "mean: 2.4559944105011673 msec\nrounds: 419"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 895.5966718925681,
            "unit": "iter/sec",
            "range": "stddev: 0.0000212735636881954",
            "extra": "mean: 1.1165740465368272 msec\nrounds: 924"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 16.950885030984193,
            "unit": "iter/sec",
            "range": "stddev: 0.0006242738590370302",
            "extra": "mean: 58.99396982352953 msec\nrounds: 17"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.325768448508573,
            "unit": "iter/sec",
            "range": "stddev: 0.0018693383103077017",
            "extra": "mean: 57.71749766666664 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 324.45138238960783,
            "unit": "iter/sec",
            "range": "stddev: 0.00003476279202499808",
            "extra": "mean: 3.0821258724032177 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 619.105635365215,
            "unit": "iter/sec",
            "range": "stddev: 0.00030254892168815335",
            "extra": "mean: 1.6152332378788519 msec\nrounds: 660"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 873.5492524430042,
            "unit": "iter/sec",
            "range": "stddev: 0.00003928560653010905",
            "extra": "mean: 1.1447551436892178 msec\nrounds: 1030"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 820.405639073829,
            "unit": "iter/sec",
            "range": "stddev: 0.000022427418566860958",
            "extra": "mean: 1.2189092229167493 msec\nrounds: 960"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1730125282084,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 230.54690491790515,
            "unit": "iter/sec",
            "range": "stddev: 0.00010529823761663269",
            "extra": "mean: 4.337512144680872 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 327.4261177242067,
            "unit": "iter/sec",
            "range": "stddev: 0.00023013758872433442",
            "extra": "mean: 3.054124108823558 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 422.87080743593424,
            "unit": "iter/sec",
            "range": "stddev: 0.0000705952213180038",
            "extra": "mean: 2.36478844700459 msec\nrounds: 434"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 991.3864425082294,
            "unit": "iter/sec",
            "range": "stddev: 0.00002024483769676846",
            "extra": "mean: 1.0086883954857988 msec\nrounds: 1019"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 215.20768177493164,
            "unit": "iter/sec",
            "range": "stddev: 0.000031558299156820584",
            "extra": "mean: 4.64667428110591 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 297.1009419570675,
            "unit": "iter/sec",
            "range": "stddev: 0.00007198346348929628",
            "extra": "mean: 3.3658594059405735 msec\nrounds: 303"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 402.66776026700234,
            "unit": "iter/sec",
            "range": "stddev: 0.00006120219498101814",
            "extra": "mean: 2.4834369638555533 msec\nrounds: 415"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 903.9334575365926,
            "unit": "iter/sec",
            "range": "stddev: 0.000025894932648835338",
            "extra": "mean: 1.1062761220557193 msec\nrounds: 934"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.003856735433324,
            "unit": "iter/sec",
            "range": "stddev: 0.0005083444010103132",
            "extra": "mean: 58.81018733333359 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.494125929303934,
            "unit": "iter/sec",
            "range": "stddev: 0.0007683196761402506",
            "extra": "mean: 57.162044222222455 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 329.73730722216715,
            "unit": "iter/sec",
            "range": "stddev: 0.00007820701070222655",
            "extra": "mean: 3.03271719061571 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 656.1974333353446,
            "unit": "iter/sec",
            "range": "stddev: 0.000061015739826349717",
            "extra": "mean: 1.5239315931444033 msec\nrounds: 671"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 899.1878207382499,
            "unit": "iter/sec",
            "range": "stddev: 0.00004158300279668893",
            "extra": "mean: 1.1121147072243276 msec\nrounds: 1052"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 825.8109175674604,
            "unit": "iter/sec",
            "range": "stddev: 0.00003609237602911673",
            "extra": "mean: 1.2109309512952886 msec\nrounds: 965"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1730128537804,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 213.90171625165107,
            "unit": "iter/sec",
            "range": "stddev: 0.00009828255006014871",
            "extra": "mean: 4.675044303167349 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 306.94679125814747,
            "unit": "iter/sec",
            "range": "stddev: 0.0000544468461877122",
            "extra": "mean: 3.257893643067873 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 394.0278670864287,
            "unit": "iter/sec",
            "range": "stddev: 0.000037205845893574127",
            "extra": "mean: 2.5378915643564195 msec\nrounds: 404"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 973.9187790962947,
            "unit": "iter/sec",
            "range": "stddev: 0.00012103598463311466",
            "extra": "mean: 1.026779667322881 msec\nrounds: 1016"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 199.81879589215072,
            "unit": "iter/sec",
            "range": "stddev: 0.00005426665237323761",
            "extra": "mean: 5.004534210784332 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 284.39571514826014,
            "unit": "iter/sec",
            "range": "stddev: 0.00010314495634881592",
            "extra": "mean: 3.516227378737699 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 376.9083921575007,
            "unit": "iter/sec",
            "range": "stddev: 0.00007421632969812413",
            "extra": "mean: 2.653164590673599 msec\nrounds: 386"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 895.1677044491805,
            "unit": "iter/sec",
            "range": "stddev: 0.00004976459343318464",
            "extra": "mean: 1.1171091126609909 msec\nrounds: 932"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 16.52571628877558,
            "unit": "iter/sec",
            "range": "stddev: 0.00023439547991035024",
            "extra": "mean: 60.51174923529392 msec\nrounds: 17"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.073077232318557,
            "unit": "iter/sec",
            "range": "stddev: 0.00022933285356398683",
            "extra": "mean: 58.571749333333166 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 310.2976913174727,
            "unit": "iter/sec",
            "range": "stddev: 0.00004721815451035255",
            "extra": "mean: 3.2227116990595874 msec\nrounds: 319"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 653.805895709326,
            "unit": "iter/sec",
            "range": "stddev: 0.00006422718395608603",
            "extra": "mean: 1.5295059383260556 msec\nrounds: 681"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 904.1011837050764,
            "unit": "iter/sec",
            "range": "stddev: 0.00008992098778861561",
            "extra": "mean: 1.106070888992671 msec\nrounds: 1072"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 837.4842974985028,
            "unit": "iter/sec",
            "range": "stddev: 0.000029805956113068197",
            "extra": "mean: 1.1940522383367884 msec\nrounds: 986"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1730296654209,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 228.78507540388642,
            "unit": "iter/sec",
            "range": "stddev: 0.000034516364740418023",
            "extra": "mean: 4.370914484848484 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 328.3579628099978,
            "unit": "iter/sec",
            "range": "stddev: 0.0000820721196168351",
            "extra": "mean: 3.0454568284023726 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 419.2059767413603,
            "unit": "iter/sec",
            "range": "stddev: 0.00002776278140398795",
            "extra": "mean: 2.385462172494204 msec\nrounds: 429"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 983.4612894308011,
            "unit": "iter/sec",
            "range": "stddev: 0.00004310703468632886",
            "extra": "mean: 1.016816839408871 msec\nrounds: 1015"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 209.3229642369866,
            "unit": "iter/sec",
            "range": "stddev: 0.00011733592924879231",
            "extra": "mean: 4.777306702325514 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 294.36017197549927,
            "unit": "iter/sec",
            "range": "stddev: 0.000035248224033873645",
            "extra": "mean: 3.3971987218543744 msec\nrounds: 302"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 400.4812283532232,
            "unit": "iter/sec",
            "range": "stddev: 0.000036349741916619286",
            "extra": "mean: 2.4969959368932098 msec\nrounds: 412"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 913.4391257017212,
            "unit": "iter/sec",
            "range": "stddev: 0.00002651993763134974",
            "extra": "mean: 1.0947637033083963 msec\nrounds: 937"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.101459509525558,
            "unit": "iter/sec",
            "range": "stddev: 0.0003031110568765485",
            "extra": "mean: 58.474541277777924 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.783563012330756,
            "unit": "iter/sec",
            "range": "stddev: 0.00011491496945439391",
            "extra": "mean: 56.231701111111455 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 326.5997499201371,
            "unit": "iter/sec",
            "range": "stddev: 0.00010623271796090193",
            "extra": "mean: 3.0618517014925093 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 650.0013243532255,
            "unit": "iter/sec",
            "range": "stddev: 0.000021850354153619024",
            "extra": "mean: 1.5384584039040774 msec\nrounds: 666"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 918.9209600800447,
            "unit": "iter/sec",
            "range": "stddev: 0.00004400917700483153",
            "extra": "mean: 1.0882328768655933 msec\nrounds: 1072"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 831.6385525842353,
            "unit": "iter/sec",
            "range": "stddev: 0.000029001367935656513",
            "extra": "mean: 1.2024454576962527 msec\nrounds: 981"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1730731473780,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 224.7904041433518,
            "unit": "iter/sec",
            "range": "stddev: 0.0001103477450184785",
            "extra": "mean: 4.4485884698275955 msec\nrounds: 232"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 323.82168533854957,
            "unit": "iter/sec",
            "range": "stddev: 0.00007296228281321932",
            "extra": "mean: 3.0881193115727217 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 411.4278849097408,
            "unit": "iter/sec",
            "range": "stddev: 0.00004785078327928931",
            "extra": "mean: 2.4305596112411787 msec\nrounds: 427"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 977.0190988027924,
            "unit": "iter/sec",
            "range": "stddev: 0.00003328715074921974",
            "extra": "mean: 1.0235214452054904 msec\nrounds: 1022"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 206.5120996122702,
            "unit": "iter/sec",
            "range": "stddev: 0.00006201804385765553",
            "extra": "mean: 4.84233128169011 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 291.7148380579888,
            "unit": "iter/sec",
            "range": "stddev: 0.00006843208333691423",
            "extra": "mean: 3.4280052624584494 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 394.5691513473074,
            "unit": "iter/sec",
            "range": "stddev: 0.00006000243531978794",
            "extra": "mean: 2.534409992736053 msec\nrounds: 413"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 895.5668848630293,
            "unit": "iter/sec",
            "range": "stddev: 0.000030516942414282202",
            "extra": "mean: 1.1166111843817708 msec\nrounds: 922"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 16.809325215217445,
            "unit": "iter/sec",
            "range": "stddev: 0.0004465227696036617",
            "extra": "mean: 59.49078783333325 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.439022230451435,
            "unit": "iter/sec",
            "range": "stddev: 0.0006058962791207414",
            "extra": "mean: 57.34266444444537 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 319.6606935344838,
            "unit": "iter/sec",
            "range": "stddev: 0.0000557597786491135",
            "extra": "mean: 3.128317056886206 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 643.459252781925,
            "unit": "iter/sec",
            "range": "stddev: 0.00006790926061494635",
            "extra": "mean: 1.5540999615385287 msec\nrounds: 676"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 885.0019817073803,
            "unit": "iter/sec",
            "range": "stddev: 0.00006262201271887941",
            "extra": "mean: 1.1299409726413956 msec\nrounds: 1060"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 801.1001727002322,
            "unit": "iter/sec",
            "range": "stddev: 0.000042902590142793333",
            "extra": "mean: 1.248283340932689 msec\nrounds: 965"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1730734545891,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 228.70919843228452,
            "unit": "iter/sec",
            "range": "stddev: 0.00015419159625967298",
            "extra": "mean: 4.372364587234022 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 330.6103327317991,
            "unit": "iter/sec",
            "range": "stddev: 0.000039323537294722",
            "extra": "mean: 3.0247088520709657 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 409.2029297780509,
            "unit": "iter/sec",
            "range": "stddev: 0.00028353416154779435",
            "extra": "mean: 2.4437752695035537 msec\nrounds: 423"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 976.8362034065748,
            "unit": "iter/sec",
            "range": "stddev: 0.000045870883292830845",
            "extra": "mean: 1.0237130815920261 msec\nrounds: 1005"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 204.3252247789458,
            "unit": "iter/sec",
            "range": "stddev: 0.0007387783600986824",
            "extra": "mean: 4.894158325688246 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 300.86250036595123,
            "unit": "iter/sec",
            "range": "stddev: 0.00003240376809204409",
            "extra": "mean: 3.3237774690553312 msec\nrounds: 307"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 400.42003358345323,
            "unit": "iter/sec",
            "range": "stddev: 0.0001267706854598605",
            "extra": "mean: 2.4973775439024974 msec\nrounds: 410"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 898.5059106347793,
            "unit": "iter/sec",
            "range": "stddev: 0.00004968439471084681",
            "extra": "mean: 1.1129587331189807 msec\nrounds: 933"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.140743003615114,
            "unit": "iter/sec",
            "range": "stddev: 0.00026038304075049596",
            "extra": "mean: 58.34052816666654 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.62891914965576,
            "unit": "iter/sec",
            "range": "stddev: 0.0005872852502518578",
            "extra": "mean: 56.724975111110375 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 323.62307746935284,
            "unit": "iter/sec",
            "range": "stddev: 0.00008534781427075394",
            "extra": "mean: 3.0900144940828587 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 647.4642043565211,
            "unit": "iter/sec",
            "range": "stddev: 0.00003174836362486194",
            "extra": "mean: 1.5444869280361913 msec\nrounds: 667"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 897.4600873128423,
            "unit": "iter/sec",
            "range": "stddev: 0.000039161026002322006",
            "extra": "mean: 1.114255680154179 msec\nrounds: 1038"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 820.0539591044588,
            "unit": "iter/sec",
            "range": "stddev: 0.00002580390310424948",
            "extra": "mean: 1.219431951882839 msec\nrounds: 956"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1730734959921,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 224.25091704208955,
            "unit": "iter/sec",
            "range": "stddev: 0.0001391861668898521",
            "extra": "mean: 4.459290571428569 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 331.42222568595906,
            "unit": "iter/sec",
            "range": "stddev: 0.00003296244892546884",
            "extra": "mean: 3.0172991504424793 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 416.2889433517311,
            "unit": "iter/sec",
            "range": "stddev: 0.000029619254518798712",
            "extra": "mean: 2.4021776604215006 msec\nrounds: 427"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1003.0967451963348,
            "unit": "iter/sec",
            "range": "stddev: 0.000023649516924778674",
            "extra": "mean: 996.9128150288946 usec\nrounds: 1038"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 208.60614728566878,
            "unit": "iter/sec",
            "range": "stddev: 0.000048365871599059056",
            "extra": "mean: 4.793722586854466 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 293.32251402947867,
            "unit": "iter/sec",
            "range": "stddev: 0.000049232061619315084",
            "extra": "mean: 3.409216654605316 msec\nrounds: 304"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 401.334229102222,
            "unit": "iter/sec",
            "range": "stddev: 0.00007511765103880008",
            "extra": "mean: 2.4916887907542384 msec\nrounds: 411"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 917.7336494851372,
            "unit": "iter/sec",
            "range": "stddev: 0.000022342569588603094",
            "extra": "mean: 1.0896407694770869 msec\nrounds: 937"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.095875636595686,
            "unit": "iter/sec",
            "range": "stddev: 0.00016851633372413785",
            "extra": "mean: 58.49364029411779 msec\nrounds: 17"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.61506122024954,
            "unit": "iter/sec",
            "range": "stddev: 0.00044587006869566196",
            "extra": "mean: 56.76960116666763 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 322.22090018952804,
            "unit": "iter/sec",
            "range": "stddev: 0.00008098559353228973",
            "extra": "mean: 3.103461008928369 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 652.8311369865099,
            "unit": "iter/sec",
            "range": "stddev: 0.00007366512440777299",
            "extra": "mean: 1.5317896824223687 msec\nrounds: 677"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 908.2178651214218,
            "unit": "iter/sec",
            "range": "stddev: 0.00004930778093429733",
            "extra": "mean: 1.1010573986741692 msec\nrounds: 1056"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 828.498990660788,
            "unit": "iter/sec",
            "range": "stddev: 0.00005508287838480992",
            "extra": "mean: 1.2070020739583853 msec\nrounds: 960"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1730735438802,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 226.67291488440756,
            "unit": "iter/sec",
            "range": "stddev: 0.00030640350781300656",
            "extra": "mean: 4.411643096000034 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 330.5497807087981,
            "unit": "iter/sec",
            "range": "stddev: 0.0000955435501768597",
            "extra": "mean: 3.025262935754183 msec\nrounds: 358"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 416.95740024641276,
            "unit": "iter/sec",
            "range": "stddev: 0.00006691175296548091",
            "extra": "mean: 2.3983265422535296 msec\nrounds: 426"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 987.7510596527637,
            "unit": "iter/sec",
            "range": "stddev: 0.000030185514692338472",
            "extra": "mean: 1.0124008374656082 msec\nrounds: 1089"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 209.95445381148568,
            "unit": "iter/sec",
            "range": "stddev: 0.00011591152763192891",
            "extra": "mean: 4.762937779342762 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 294.4764273526149,
            "unit": "iter/sec",
            "range": "stddev: 0.00011810236804574044",
            "extra": "mean: 3.3958575529801918 msec\nrounds: 302"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 397.024717531316,
            "unit": "iter/sec",
            "range": "stddev: 0.0001455595136177897",
            "extra": "mean: 2.518734869249352 msec\nrounds: 413"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 904.1340108942178,
            "unit": "iter/sec",
            "range": "stddev: 0.00003138821132845025",
            "extra": "mean: 1.1060307299035987 msec\nrounds: 933"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 16.946721169421867,
            "unit": "iter/sec",
            "range": "stddev: 0.0001611061969493461",
            "extra": "mean: 59.00846482352991 msec\nrounds: 17"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.594186636762412,
            "unit": "iter/sec",
            "range": "stddev: 0.00023153321579983083",
            "extra": "mean: 56.836955333333584 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 325.2884959566025,
            "unit": "iter/sec",
            "range": "stddev: 0.00008510017412570414",
            "extra": "mean: 3.0741941766468504 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 653.0440894045738,
            "unit": "iter/sec",
            "range": "stddev: 0.00006441469699278618",
            "extra": "mean: 1.531290178143669 msec\nrounds: 668"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 901.3476956836178,
            "unit": "iter/sec",
            "range": "stddev: 0.00003804478026537403",
            "extra": "mean: 1.109449777027011 msec\nrounds: 1036"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 836.8268294617898,
            "unit": "iter/sec",
            "range": "stddev: 0.000031586645865703935",
            "extra": "mean: 1.1949903669354818 msec\nrounds: 992"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1730904506962,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 230.15424603250204,
            "unit": "iter/sec",
            "range": "stddev: 0.00003876243064499723",
            "extra": "mean: 4.344912237068967 msec\nrounds: 232"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 332.26284286504756,
            "unit": "iter/sec",
            "range": "stddev: 0.00006804886490423742",
            "extra": "mean: 3.0096654545454595 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 420.8479978715298,
            "unit": "iter/sec",
            "range": "stddev: 0.000037915462306406514",
            "extra": "mean: 2.3761548232558427 msec\nrounds: 430"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1009.5392664792952,
            "unit": "iter/sec",
            "range": "stddev: 0.00006796617304689656",
            "extra": "mean: 990.5508712775852 usec\nrounds: 1041"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 211.7597235761578,
            "unit": "iter/sec",
            "range": "stddev: 0.00012478524263572006",
            "extra": "mean: 4.722333327188905 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 295.99783309596,
            "unit": "iter/sec",
            "range": "stddev: 0.00008852650394524568",
            "extra": "mean: 3.378403110389691 msec\nrounds: 308"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 399.48150442279103,
            "unit": "iter/sec",
            "range": "stddev: 0.00006026957461265913",
            "extra": "mean: 2.503244803398083 msec\nrounds: 412"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 924.3855196935446,
            "unit": "iter/sec",
            "range": "stddev: 0.00002396362316275628",
            "extra": "mean: 1.0817997239198678 msec\nrounds: 949"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 16.923787736626764,
            "unit": "iter/sec",
            "range": "stddev: 0.0003865955780737105",
            "extra": "mean: 59.088427222221775 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.63547428794587,
            "unit": "iter/sec",
            "range": "stddev: 0.0005066753448132365",
            "extra": "mean: 56.7038903333332 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 319.2151659078953,
            "unit": "iter/sec",
            "range": "stddev: 0.00020341714585665836",
            "extra": "mean: 3.132683239393879 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 655.0065501236945,
            "unit": "iter/sec",
            "range": "stddev: 0.00002744435318856208",
            "extra": "mean: 1.5267022899406966 msec\nrounds: 676"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 939.8062532472562,
            "unit": "iter/sec",
            "range": "stddev: 0.000059373682113675265",
            "extra": "mean: 1.0640491021896905 msec\nrounds: 1096"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 858.8789834416457,
            "unit": "iter/sec",
            "range": "stddev: 0.000028468075843061573",
            "extra": "mean: 1.1643083825300546 msec\nrounds: 996"
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
        "date": 1730939013815,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 227.93878139438942,
            "unit": "iter/sec",
            "range": "stddev: 0.00019564280667576405",
            "extra": "mean: 4.3871428717948495 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 330.95048916053923,
            "unit": "iter/sec",
            "range": "stddev: 0.00006271987389358017",
            "extra": "mean: 3.0216000058997183 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 414.4080072149718,
            "unit": "iter/sec",
            "range": "stddev: 0.00003776686310686706",
            "extra": "mean: 2.4130807865429484 msec\nrounds: 431"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 982.7484890135678,
            "unit": "iter/sec",
            "range": "stddev: 0.000023620630786615257",
            "extra": "mean: 1.017554350049165 msec\nrounds: 1017"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 208.54700773360682,
            "unit": "iter/sec",
            "range": "stddev: 0.000046166907561516477",
            "extra": "mean: 4.795081985915507 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 296.9069464500034,
            "unit": "iter/sec",
            "range": "stddev: 0.00016514480071522897",
            "extra": "mean: 3.368058618892541 msec\nrounds: 307"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 394.7251859499426,
            "unit": "iter/sec",
            "range": "stddev: 0.00004903729184617521",
            "extra": "mean: 2.533408142156948 msec\nrounds: 408"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 900.0955064396514,
            "unit": "iter/sec",
            "range": "stddev: 0.00004374013515533256",
            "extra": "mean: 1.1109932144373469 msec\nrounds: 942"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 16.980381013996457,
            "unit": "iter/sec",
            "range": "stddev: 0.000492956492329974",
            "extra": "mean: 58.891493611110825 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.53608941815684,
            "unit": "iter/sec",
            "range": "stddev: 0.00022697066916564795",
            "extra": "mean: 57.025256666666024 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 324.1492619392798,
            "unit": "iter/sec",
            "range": "stddev: 0.00009104021755997128",
            "extra": "mean: 3.084998540540628 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 651.7518144021486,
            "unit": "iter/sec",
            "range": "stddev: 0.000029459396746806124",
            "extra": "mean: 1.5343263768545075 msec\nrounds: 674"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 885.7713321652824,
            "unit": "iter/sec",
            "range": "stddev: 0.000044812207587372175",
            "extra": "mean: 1.128959544847183 msec\nrounds: 1048"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 808.3846586394664,
            "unit": "iter/sec",
            "range": "stddev: 0.000029582418414869334",
            "extra": "mean: 1.2370348562564604 msec\nrounds: 967"
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
        "date": 1730940285717,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 227.42618804099789,
            "unit": "iter/sec",
            "range": "stddev: 0.0002337248340295749",
            "extra": "mean: 4.3970310042734875 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 331.08623515024686,
            "unit": "iter/sec",
            "range": "stddev: 0.00007808967796735442",
            "extra": "mean: 3.020361144117635 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 409.92868768837786,
            "unit": "iter/sec",
            "range": "stddev: 0.00003832169522678427",
            "extra": "mean: 2.439448689573505 msec\nrounds: 422"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 990.5120472712799,
            "unit": "iter/sec",
            "range": "stddev: 0.000030977255473944955",
            "extra": "mean: 1.0095788362744886 msec\nrounds: 1020"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 209.41807737461298,
            "unit": "iter/sec",
            "range": "stddev: 0.00003874669677940211",
            "extra": "mean: 4.7751369534883645 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 299.0372437870963,
            "unit": "iter/sec",
            "range": "stddev: 0.00007295740331800719",
            "extra": "mean: 3.344065064724726 msec\nrounds: 309"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 397.27691487579136,
            "unit": "iter/sec",
            "range": "stddev: 0.00003229006504212291",
            "extra": "mean: 2.51713593857486 msec\nrounds: 407"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 897.224014038265,
            "unit": "iter/sec",
            "range": "stddev: 0.000050349913728408313",
            "extra": "mean: 1.1145488577586733 msec\nrounds: 928"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 16.97096045027414,
            "unit": "iter/sec",
            "range": "stddev: 0.0014245018992475665",
            "extra": "mean: 58.924184222222166 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.77244711437852,
            "unit": "iter/sec",
            "range": "stddev: 0.00011599579100368302",
            "extra": "mean: 56.26687161111121 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 325.8035036792427,
            "unit": "iter/sec",
            "range": "stddev: 0.00004599502730959211",
            "extra": "mean: 3.069334702380953 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 651.8228007186079,
            "unit": "iter/sec",
            "range": "stddev: 0.00003968943098594527",
            "extra": "mean: 1.5341592820894587 msec\nrounds: 670"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 898.1865214841484,
            "unit": "iter/sec",
            "range": "stddev: 0.000041163866216149704",
            "extra": "mean: 1.113354493839004 msec\nrounds: 1055"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 818.3083977048999,
            "unit": "iter/sec",
            "range": "stddev: 0.00002567281280793926",
            "extra": "mean: 1.2220331635416286 msec\nrounds: 960"
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
        "date": 1730940695890,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 221.9655843427677,
            "unit": "iter/sec",
            "range": "stddev: 0.00015159080353862074",
            "extra": "mean: 4.5052029257642126 msec\nrounds: 229"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 323.3998058665365,
            "unit": "iter/sec",
            "range": "stddev: 0.00003305223992665839",
            "extra": "mean: 3.092147805471129 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 403.12468443658736,
            "unit": "iter/sec",
            "range": "stddev: 0.00007309025385816247",
            "extra": "mean: 2.4806220968522776 msec\nrounds: 413"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 959.0981345315028,
            "unit": "iter/sec",
            "range": "stddev: 0.00008057597815257354",
            "extra": "mean: 1.042646173520582 msec\nrounds: 997"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 205.30125142448597,
            "unit": "iter/sec",
            "range": "stddev: 0.00009938378400499342",
            "extra": "mean: 4.87089091304356 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 292.1240993089762,
            "unit": "iter/sec",
            "range": "stddev: 0.00008663364973959367",
            "extra": "mean: 3.423202681208139 msec\nrounds: 298"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 391.23283140007493,
            "unit": "iter/sec",
            "range": "stddev: 0.0000552201061696516",
            "extra": "mean: 2.5560227049999273 msec\nrounds: 400"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 893.5469517382845,
            "unit": "iter/sec",
            "range": "stddev: 0.00002041906656248169",
            "extra": "mean: 1.1191353717391395 msec\nrounds: 920"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 16.75119452447907,
            "unit": "iter/sec",
            "range": "stddev: 0.00017987091523682177",
            "extra": "mean: 59.697235235294244 msec\nrounds: 17"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.154282450441247,
            "unit": "iter/sec",
            "range": "stddev: 0.00019839029886282406",
            "extra": "mean: 58.29448144444408 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 311.8726722361006,
            "unit": "iter/sec",
            "range": "stddev: 0.00006514765040554461",
            "extra": "mean: 3.206436757764266 msec\nrounds: 322"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 640.5083167734844,
            "unit": "iter/sec",
            "range": "stddev: 0.00003063478989021455",
            "extra": "mean: 1.561259977134145 msec\nrounds: 656"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 882.3434302609038,
            "unit": "iter/sec",
            "range": "stddev: 0.0000444487905753914",
            "extra": "mean: 1.1333455497076754 msec\nrounds: 1026"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 814.6457530889473,
            "unit": "iter/sec",
            "range": "stddev: 0.00004714205640890588",
            "extra": "mean: 1.2275274206097957 msec\nrounds: 951"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1730989341934,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 225.14978718257342,
            "unit": "iter/sec",
            "range": "stddev: 0.00018001746227212057",
            "extra": "mean: 4.441487653679648 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 330.73550250720325,
            "unit": "iter/sec",
            "range": "stddev: 0.00004142356918670322",
            "extra": "mean: 3.0235641242603535 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 413.69845510866435,
            "unit": "iter/sec",
            "range": "stddev: 0.00006262744101030082",
            "extra": "mean: 2.4172195657277338 msec\nrounds: 426"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 998.7275719716313,
            "unit": "iter/sec",
            "range": "stddev: 0.000020931823443216012",
            "extra": "mean: 1.001274049164235 msec\nrounds: 1017"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 210.91060622013072,
            "unit": "iter/sec",
            "range": "stddev: 0.0001327823101507743",
            "extra": "mean: 4.741345245370375 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 295.74546087636145,
            "unit": "iter/sec",
            "range": "stddev: 0.00019090679584976195",
            "extra": "mean: 3.3812860459016725 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 389.85763408302057,
            "unit": "iter/sec",
            "range": "stddev: 0.00021269588170697744",
            "extra": "mean: 2.565038907990318 msec\nrounds: 413"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 912.7242104711654,
            "unit": "iter/sec",
            "range": "stddev: 0.00005364857506360087",
            "extra": "mean: 1.0956212057569736 msec\nrounds: 938"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.0964434089265,
            "unit": "iter/sec",
            "range": "stddev: 0.0008467395571880909",
            "extra": "mean: 58.4916977222218 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.51440126265666,
            "unit": "iter/sec",
            "range": "stddev: 0.00028739362805142027",
            "extra": "mean: 57.095871277778166 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 324.04604377778423,
            "unit": "iter/sec",
            "range": "stddev: 0.00008692379855184163",
            "extra": "mean: 3.0859812029853195 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 661.8027373619823,
            "unit": "iter/sec",
            "range": "stddev: 0.000027513594091324166",
            "extra": "mean: 1.511024272861289 msec\nrounds: 678"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 905.4638232918054,
            "unit": "iter/sec",
            "range": "stddev: 0.000043466496573384964",
            "extra": "mean: 1.1044063542643916 msec\nrounds: 1067"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 832.2456799511356,
            "unit": "iter/sec",
            "range": "stddev: 0.00007589689027001543",
            "extra": "mean: 1.2015682677484298 msec\nrounds: 986"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1731509157583,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 227.89893116089786,
            "unit": "iter/sec",
            "range": "stddev: 0.00024300772564000043",
            "extra": "mean: 4.387910004255328 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 331.695405163055,
            "unit": "iter/sec",
            "range": "stddev: 0.00004440120411375307",
            "extra": "mean: 3.014814147058864 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 409.7712249083293,
            "unit": "iter/sec",
            "range": "stddev: 0.00004776450896369271",
            "extra": "mean: 2.4403860964705655 msec\nrounds: 425"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 996.2600533936397,
            "unit": "iter/sec",
            "range": "stddev: 0.000021681130913147898",
            "extra": "mean: 1.0037539863147384 msec\nrounds: 1023"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 213.2804952299956,
            "unit": "iter/sec",
            "range": "stddev: 0.00009398397228960154",
            "extra": "mean: 4.688661281106031 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 300.33146198057966,
            "unit": "iter/sec",
            "range": "stddev: 0.0000629630963237358",
            "extra": "mean: 3.329654487096869 msec\nrounds: 310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 402.23471995541877,
            "unit": "iter/sec",
            "range": "stddev: 0.00006944697135746561",
            "extra": "mean: 2.4861105975904665 msec\nrounds: 415"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 904.9353231821626,
            "unit": "iter/sec",
            "range": "stddev: 0.000025105728550621708",
            "extra": "mean: 1.1050513493975977 msec\nrounds: 913"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.15291566160959,
            "unit": "iter/sec",
            "range": "stddev: 0.00021640375192272034",
            "extra": "mean: 58.299126499999495 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.521467435746743,
            "unit": "iter/sec",
            "range": "stddev: 0.000248129382260832",
            "extra": "mean: 57.072845277778036 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 328.33110502544787,
            "unit": "iter/sec",
            "range": "stddev: 0.00005073615778445792",
            "extra": "mean: 3.045705949555079 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 648.5388784354797,
            "unit": "iter/sec",
            "range": "stddev: 0.00006591066104243921",
            "extra": "mean: 1.5419276056546942 msec\nrounds: 672"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 898.3478748604947,
            "unit": "iter/sec",
            "range": "stddev: 0.00005448892191065096",
            "extra": "mean: 1.1131545228570736 msec\nrounds: 1050"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 828.6247390854141,
            "unit": "iter/sec",
            "range": "stddev: 0.0000531330236054067",
            "extra": "mean: 1.2068189046633335 msec\nrounds: 965"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1731595767022,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 226.82797414617437,
            "unit": "iter/sec",
            "range": "stddev: 0.00017191464763414036",
            "extra": "mean: 4.408627303418809 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 322.27959449690104,
            "unit": "iter/sec",
            "range": "stddev: 0.00008168561763904421",
            "extra": "mean: 3.1028957994100237 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 410.77355157364684,
            "unit": "iter/sec",
            "range": "stddev: 0.00003618514701530498",
            "extra": "mean: 2.434431321512948 msec\nrounds: 423"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1002.7564525095581,
            "unit": "iter/sec",
            "range": "stddev: 0.000025683221496320767",
            "extra": "mean: 997.2511246348406 usec\nrounds: 1027"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 208.3147319581651,
            "unit": "iter/sec",
            "range": "stddev: 0.000050925943885578595",
            "extra": "mean: 4.800428613953359 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 294.0723795850272,
            "unit": "iter/sec",
            "range": "stddev: 0.0002113808332961719",
            "extra": "mean: 3.4005233725490465 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 397.7722988586791,
            "unit": "iter/sec",
            "range": "stddev: 0.00007496205116625115",
            "extra": "mean: 2.51400110784306 msec\nrounds: 408"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 914.7351827019895,
            "unit": "iter/sec",
            "range": "stddev: 0.00004241628545517102",
            "extra": "mean: 1.0932125700535003 msec\nrounds: 935"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.162979624960233,
            "unit": "iter/sec",
            "range": "stddev: 0.0003568820748616262",
            "extra": "mean: 58.26494127777752 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.75771236957014,
            "unit": "iter/sec",
            "range": "stddev: 0.0005098541570089922",
            "extra": "mean: 56.31355994444497 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 324.47813752677064,
            "unit": "iter/sec",
            "range": "stddev: 0.00003848182438175682",
            "extra": "mean: 3.0818717329376204 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 657.0170683067806,
            "unit": "iter/sec",
            "range": "stddev: 0.00004985170406014066",
            "extra": "mean: 1.5220304741505903 msec\nrounds: 677"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 909.6902089429082,
            "unit": "iter/sec",
            "range": "stddev: 0.00005347918207385282",
            "extra": "mean: 1.0992753249065248 msec\nrounds: 1068"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 831.7794307268396,
            "unit": "iter/sec",
            "range": "stddev: 0.000024964086831834305",
            "extra": "mean: 1.202241799999987 msec\nrounds: 980"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1732286554677,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 228.67390895749384,
            "unit": "iter/sec",
            "range": "stddev: 0.0001149072702470491",
            "extra": "mean: 4.3730393404255015 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 333.6919654297349,
            "unit": "iter/sec",
            "range": "stddev: 0.00007114424265449634",
            "extra": "mean: 2.9967757800586563 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 415.363185974325,
            "unit": "iter/sec",
            "range": "stddev: 0.00003152640490342863",
            "extra": "mean: 2.4075316103286375 msec\nrounds: 426"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 991.3807844295004,
            "unit": "iter/sec",
            "range": "stddev: 0.00005316087956313897",
            "extra": "mean: 1.0086941523437531 msec\nrounds: 1024"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 208.87357167066787,
            "unit": "iter/sec",
            "range": "stddev: 0.00012049500555582172",
            "extra": "mean: 4.787585102325466 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 299.9870796444233,
            "unit": "iter/sec",
            "range": "stddev: 0.00007958860206273347",
            "extra": "mean: 3.333476899022807 msec\nrounds: 307"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 397.3947884461997,
            "unit": "iter/sec",
            "range": "stddev: 0.00004390182507889442",
            "extra": "mean: 2.5163893163017224 msec\nrounds: 411"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 912.6372990352488,
            "unit": "iter/sec",
            "range": "stddev: 0.00004547401053853265",
            "extra": "mean: 1.0957255429480064 msec\nrounds: 943"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 16.974465277933522,
            "unit": "iter/sec",
            "range": "stddev: 0.0005699155072050943",
            "extra": "mean: 58.912017764705716 msec\nrounds: 17"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.56907027177955,
            "unit": "iter/sec",
            "range": "stddev: 0.0006818694511045002",
            "extra": "mean: 56.918208222222056 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 324.4054016217237,
            "unit": "iter/sec",
            "range": "stddev: 0.00003973984429241735",
            "extra": "mean: 3.082562728613442 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 660.7505859432367,
            "unit": "iter/sec",
            "range": "stddev: 0.000037150284685922184",
            "extra": "mean: 1.5134303643067935 msec\nrounds: 678"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 894.1537791216301,
            "unit": "iter/sec",
            "range": "stddev: 0.0000630085399553511",
            "extra": "mean: 1.1183758581016652 msec\nrounds: 1043"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 827.9590325973843,
            "unit": "iter/sec",
            "range": "stddev: 0.000029840574307480382",
            "extra": "mean: 1.2077892270380906 msec\nrounds: 969"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1732315848009,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 229.57160055671784,
            "unit": "iter/sec",
            "range": "stddev: 0.000046232093001280566",
            "extra": "mean: 4.355939487179472 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 331.43071841400723,
            "unit": "iter/sec",
            "range": "stddev: 0.00004350697628011462",
            "extra": "mean: 3.0172218338278722 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 409.20951144047314,
            "unit": "iter/sec",
            "range": "stddev: 0.00003754667840935327",
            "extra": "mean: 2.4437359642004997 msec\nrounds: 419"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 965.4586224296621,
            "unit": "iter/sec",
            "range": "stddev: 0.00003812124745305258",
            "extra": "mean: 1.0357771703187149 msec\nrounds: 1004"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 210.99886690058003,
            "unit": "iter/sec",
            "range": "stddev: 0.00015431811201769207",
            "extra": "mean: 4.7393619439254495 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 300.4202788990529,
            "unit": "iter/sec",
            "range": "stddev: 0.00004324259859773586",
            "extra": "mean: 3.328670100649296 msec\nrounds: 308"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 395.86079258039786,
            "unit": "iter/sec",
            "range": "stddev: 0.00003418051448567567",
            "extra": "mean: 2.526140549261149 msec\nrounds: 406"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 901.8493796193359,
            "unit": "iter/sec",
            "range": "stddev: 0.00005227433049083557",
            "extra": "mean: 1.10883260841416 msec\nrounds: 927"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 16.97640775033825,
            "unit": "iter/sec",
            "range": "stddev: 0.0005299025086701271",
            "extra": "mean: 58.90527694117592 msec\nrounds: 17"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.609794357869898,
            "unit": "iter/sec",
            "range": "stddev: 0.00023639203856634894",
            "extra": "mean: 56.78658022222135 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 323.3831504597023,
            "unit": "iter/sec",
            "range": "stddev: 0.0001361162947848468",
            "extra": "mean: 3.092307062314346 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 635.1782752387548,
            "unit": "iter/sec",
            "range": "stddev: 0.00032255391876327575",
            "extra": "mean: 1.574361150220564 msec\nrounds: 679"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 896.021536777176,
            "unit": "iter/sec",
            "range": "stddev: 0.000039693080621301336",
            "extra": "mean: 1.1160446026741893 msec\nrounds: 1047"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 814.4549670104947,
            "unit": "iter/sec",
            "range": "stddev: 0.00003249056046511352",
            "extra": "mean: 1.2278149689117366 msec\nrounds: 965"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1732545692219,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 230.24770441911832,
            "unit": "iter/sec",
            "range": "stddev: 0.00005990920680713936",
            "extra": "mean: 4.343148621276618 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 337.1260370803093,
            "unit": "iter/sec",
            "range": "stddev: 0.000038061216938955285",
            "extra": "mean: 2.9662496811594017 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 415.3299149048902,
            "unit": "iter/sec",
            "range": "stddev: 0.00006526828029437984",
            "extra": "mean: 2.407724471831022 msec\nrounds: 426"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1018.2490834593727,
            "unit": "iter/sec",
            "range": "stddev: 0.00005313960928370729",
            "extra": "mean: 982.0779770335037 usec\nrounds: 1045"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 211.57044338091012,
            "unit": "iter/sec",
            "range": "stddev: 0.00004828117181424708",
            "extra": "mean: 4.726558133640653 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 303.7907439972417,
            "unit": "iter/sec",
            "range": "stddev: 0.00009617557026053124",
            "extra": "mean: 3.2917395271564946 msec\nrounds: 313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 402.8446274439065,
            "unit": "iter/sec",
            "range": "stddev: 0.00008955845104688598",
            "extra": "mean: 2.482346621686654 msec\nrounds: 415"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 928.8415681908771,
            "unit": "iter/sec",
            "range": "stddev: 0.00004077378875630231",
            "extra": "mean: 1.0766098700209117 msec\nrounds: 954"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.32405301009317,
            "unit": "iter/sec",
            "range": "stddev: 0.00012986354082705824",
            "extra": "mean: 57.72321288888863 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.70355456305849,
            "unit": "iter/sec",
            "range": "stddev: 0.0006405362775151643",
            "extra": "mean: 56.48583150000124 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 327.43243611818167,
            "unit": "iter/sec",
            "range": "stddev: 0.00007151125187544375",
            "extra": "mean: 3.054065174041174 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 664.7300998552472,
            "unit": "iter/sec",
            "range": "stddev: 0.000025754495054963902",
            "extra": "mean: 1.5043699694323482 msec\nrounds: 687"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 923.0571744218674,
            "unit": "iter/sec",
            "range": "stddev: 0.00006979187429929671",
            "extra": "mean: 1.0833565110702092 msec\nrounds: 1084"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 847.8165381919214,
            "unit": "iter/sec",
            "range": "stddev: 0.00002766647950686772",
            "extra": "mean: 1.1795004637826831 msec\nrounds: 994"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9b1502680dd6d693bde07bca0d08d57f51d4a910",
          "message": "Merge pull request #1516 from TeoZosa/dependabot/github_actions/pypa/cibuildwheel-2.22.0",
          "timestamp": "2024-11-25T15:23:07Z",
          "tree_id": "f1d7edc23cd20a161f98f46b84e7917241188c54",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/9b1502680dd6d693bde07bca0d08d57f51d4a910"
        },
        "date": 1732548475244,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 233.34895159855756,
            "unit": "iter/sec",
            "range": "stddev: 0.000040652176551923854",
            "extra": "mean: 4.285427438818549 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 337.2039340348842,
            "unit": "iter/sec",
            "range": "stddev: 0.00005909975398905004",
            "extra": "mean: 2.9655644524495632 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 421.7967879591946,
            "unit": "iter/sec",
            "range": "stddev: 0.00006439697485176661",
            "extra": "mean: 2.3708098983834414 msec\nrounds: 433"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1022.3071505571039,
            "unit": "iter/sec",
            "range": "stddev: 0.000018604737202150213",
            "extra": "mean: 978.1796003823825 usec\nrounds: 1046"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 215.17660530385697,
            "unit": "iter/sec",
            "range": "stddev: 0.00010675568621272398",
            "extra": "mean: 4.647345368181972 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 305.0688592928193,
            "unit": "iter/sec",
            "range": "stddev: 0.00003666292679206858",
            "extra": "mean: 3.2779484681527378 msec\nrounds: 314"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 403.8538809319585,
            "unit": "iter/sec",
            "range": "stddev: 0.000030916737581050707",
            "extra": "mean: 2.4761430983214456 msec\nrounds: 417"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 941.3042113365078,
            "unit": "iter/sec",
            "range": "stddev: 0.00002227633897349982",
            "extra": "mean: 1.0623558122407133 msec\nrounds: 964"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.276722420550495,
            "unit": "iter/sec",
            "range": "stddev: 0.0004699918145893931",
            "extra": "mean: 57.88134899999954 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.840606437973126,
            "unit": "iter/sec",
            "range": "stddev: 0.0005565211662154932",
            "extra": "mean: 56.05190627777842 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 327.74521026847583,
            "unit": "iter/sec",
            "range": "stddev: 0.00004026291996327726",
            "extra": "mean: 3.051150615384554 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 673.8202719227677,
            "unit": "iter/sec",
            "range": "stddev: 0.00002390561646624353",
            "extra": "mean: 1.4840752670537323 msec\nrounds: 689"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 926.8837065412256,
            "unit": "iter/sec",
            "range": "stddev: 0.00007032946557816105",
            "extra": "mean: 1.078883999085081 msec\nrounds: 1093"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 858.1196825325494,
            "unit": "iter/sec",
            "range": "stddev: 0.000030722664262603596",
            "extra": "mean: 1.1653386122652758 msec\nrounds: 1011"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1732631702497,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 231.55241657281155,
            "unit": "iter/sec",
            "range": "stddev: 0.0003041200203013719",
            "extra": "mean: 4.318676586497858 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 334.91738644916165,
            "unit": "iter/sec",
            "range": "stddev: 0.000040131005533440194",
            "extra": "mean: 2.9858109505813717 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 415.24044106753655,
            "unit": "iter/sec",
            "range": "stddev: 0.00003231790208414088",
            "extra": "mean: 2.40824327570097 msec\nrounds: 428"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 996.7036889799923,
            "unit": "iter/sec",
            "range": "stddev: 0.00002230697788402108",
            "extra": "mean: 1.003307212621417 msec\nrounds: 1030"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 214.0168922394297,
            "unit": "iter/sec",
            "range": "stddev: 0.00004740471329446727",
            "extra": "mean: 4.672528366972351 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 298.1324255879269,
            "unit": "iter/sec",
            "range": "stddev: 0.00008898088892944319",
            "extra": "mean: 3.3542141483871384 msec\nrounds: 310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 406.3433943379208,
            "unit": "iter/sec",
            "range": "stddev: 0.00003141462915826107",
            "extra": "mean: 2.460972699283961 msec\nrounds: 419"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 918.1247789562939,
            "unit": "iter/sec",
            "range": "stddev: 0.000020756493158542915",
            "extra": "mean: 1.0891765726405733 msec\nrounds: 943"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 16.963071525224443,
            "unit": "iter/sec",
            "range": "stddev: 0.0006632491609377855",
            "extra": "mean: 58.95158777777828 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.59668936981123,
            "unit": "iter/sec",
            "range": "stddev: 0.0001914630472693752",
            "extra": "mean: 56.82887155555486 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 323.3732428570406,
            "unit": "iter/sec",
            "range": "stddev: 0.00012532726752824175",
            "extra": "mean: 3.09240180530981 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 660.5973655490774,
            "unit": "iter/sec",
            "range": "stddev: 0.00006087356568999107",
            "extra": "mean: 1.51378139264727 msec\nrounds: 680"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 903.781216877734,
            "unit": "iter/sec",
            "range": "stddev: 0.00004030507013004623",
            "extra": "mean: 1.1064624726929713 msec\nrounds: 1062"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 843.791417671657,
            "unit": "iter/sec",
            "range": "stddev: 0.000039047884256707476",
            "extra": "mean: 1.1851270101317009 msec\nrounds: 987"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1733150293385,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 231.24401469763737,
            "unit": "iter/sec",
            "range": "stddev: 0.0000752436249118867",
            "extra": "mean: 4.32443625106383 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 334.9695672753318,
            "unit": "iter/sec",
            "range": "stddev: 0.000048432042644685864",
            "extra": "mean: 2.9853458274853946 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 413.8878035507099,
            "unit": "iter/sec",
            "range": "stddev: 0.00005574149068141771",
            "extra": "mean: 2.4161137183098442 msec\nrounds: 426"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1004.5734908519329,
            "unit": "iter/sec",
            "range": "stddev: 0.000026357635005653883",
            "extra": "mean: 995.4473307392827 usec\nrounds: 1028"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 201.26564386033394,
            "unit": "iter/sec",
            "range": "stddev: 0.0007104077515174347",
            "extra": "mean: 4.968557876146706 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 299.2864815598154,
            "unit": "iter/sec",
            "range": "stddev: 0.00013995354346771197",
            "extra": "mean: 3.341280216828437 msec\nrounds: 309"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 401.9726651247465,
            "unit": "iter/sec",
            "range": "stddev: 0.00007443435644184463",
            "extra": "mean: 2.487731347826012 msec\nrounds: 414"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 915.750237696436,
            "unit": "iter/sec",
            "range": "stddev: 0.00004558859003745232",
            "extra": "mean: 1.0920008085561559 msec\nrounds: 935"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.1928848846753,
            "unit": "iter/sec",
            "range": "stddev: 0.0005074231370348634",
            "extra": "mean: 58.163595388889014 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.582432197948457,
            "unit": "iter/sec",
            "range": "stddev: 0.00045169174081678145",
            "extra": "mean: 56.87495272222244 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 328.9542470764614,
            "unit": "iter/sec",
            "range": "stddev: 0.0000389250038181114",
            "extra": "mean: 3.0399364315474613 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 651.2682005075587,
            "unit": "iter/sec",
            "range": "stddev: 0.00006493907582285758",
            "extra": "mean: 1.5354657255193191 msec\nrounds: 674"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 905.188948722237,
            "unit": "iter/sec",
            "range": "stddev: 0.00004610916743178532",
            "extra": "mean: 1.1047417242682847 msec\nrounds: 1059"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 835.6843009358017,
            "unit": "iter/sec",
            "range": "stddev: 0.00005589417218846891",
            "extra": "mean: 1.196624130524167 msec\nrounds: 973"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1733158225478,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 231.76694146612977,
            "unit": "iter/sec",
            "range": "stddev: 0.0000678926333884737",
            "extra": "mean: 4.314679193133069 msec\nrounds: 233"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 330.34629934396924,
            "unit": "iter/sec",
            "range": "stddev: 0.000032924367868870055",
            "extra": "mean: 3.0271263882352795 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 411.910573232895,
            "unit": "iter/sec",
            "range": "stddev: 0.000035698306243056185",
            "extra": "mean: 2.4277114135514024 msec\nrounds: 428"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 988.6695069303706,
            "unit": "iter/sec",
            "range": "stddev: 0.00003254521580587181",
            "extra": "mean: 1.0114603444226862 msec\nrounds: 1022"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 211.0877783565371,
            "unit": "iter/sec",
            "range": "stddev: 0.00005753316672392015",
            "extra": "mean: 4.7373656958526205 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 298.1750250384039,
            "unit": "iter/sec",
            "range": "stddev: 0.000045945728027216876",
            "extra": "mean: 3.3537349409837516 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 401.17641864506277,
            "unit": "iter/sec",
            "range": "stddev: 0.00003040857390950402",
            "extra": "mean: 2.4926689444444663 msec\nrounds: 414"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 907.2595216821597,
            "unit": "iter/sec",
            "range": "stddev: 0.00002404978261978849",
            "extra": "mean: 1.1022204519230496 msec\nrounds: 936"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 16.940124807007283,
            "unit": "iter/sec",
            "range": "stddev: 0.0002812836517185044",
            "extra": "mean: 59.03144229411757 msec\nrounds: 17"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.506044102747186,
            "unit": "iter/sec",
            "range": "stddev: 0.00025257437287920466",
            "extra": "mean: 57.123128111111754 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 323.1348279845842,
            "unit": "iter/sec",
            "range": "stddev: 0.00003521061920563265",
            "extra": "mean: 3.0946834367470504 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 649.7421931432018,
            "unit": "iter/sec",
            "range": "stddev: 0.000026969761053500133",
            "extra": "mean: 1.539071974320132 msec\nrounds: 662"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 900.5929058054487,
            "unit": "iter/sec",
            "range": "stddev: 0.00006427172948378533",
            "extra": "mean: 1.1103796105362902 msec\nrounds: 1063"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 831.068205780431,
            "unit": "iter/sec",
            "range": "stddev: 0.00009428479326481135",
            "extra": "mean: 1.2032706738683745 msec\nrounds: 972"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1733160548584,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 225.60332900506688,
            "unit": "iter/sec",
            "range": "stddev: 0.00016129986719418178",
            "extra": "mean: 4.432558705627702 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 332.191529852055,
            "unit": "iter/sec",
            "range": "stddev: 0.0000400610568579741",
            "extra": "mean: 3.0103115526315816 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 409.97557718437713,
            "unit": "iter/sec",
            "range": "stddev: 0.000058524192939952715",
            "extra": "mean: 2.4391696863207852 msec\nrounds: 424"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 997.2187741984899,
            "unit": "iter/sec",
            "range": "stddev: 0.0000430716630472596",
            "extra": "mean: 1.0027889825918546 msec\nrounds: 1034"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 211.18969669631943,
            "unit": "iter/sec",
            "range": "stddev: 0.00012784028032831023",
            "extra": "mean: 4.735079483720987 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 300.5055147532228,
            "unit": "iter/sec",
            "range": "stddev: 0.00009722763649266059",
            "extra": "mean: 3.3277259514561877 msec\nrounds: 309"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 402.3256846376386,
            "unit": "iter/sec",
            "range": "stddev: 0.000028811188874342397",
            "extra": "mean: 2.4855484951219733 msec\nrounds: 410"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 918.5360306469319,
            "unit": "iter/sec",
            "range": "stddev: 0.000024289742709256364",
            "extra": "mean: 1.0886889208860893 msec\nrounds: 948"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 16.78974247473273,
            "unit": "iter/sec",
            "range": "stddev: 0.000589513255386724",
            "extra": "mean: 59.56017499999914 msec\nrounds: 17"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.466952944720855,
            "unit": "iter/sec",
            "range": "stddev: 0.0010374354939866838",
            "extra": "mean: 57.250970055554895 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 322.15768204925877,
            "unit": "iter/sec",
            "range": "stddev: 0.000047320178000956484",
            "extra": "mean: 3.104070012048005 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 643.6643220320774,
            "unit": "iter/sec",
            "range": "stddev: 0.00006916403267157567",
            "extra": "mean: 1.5536048306094623 msec\nrounds: 673"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 885.6465991762419,
            "unit": "iter/sec",
            "range": "stddev: 0.00004613429946736132",
            "extra": "mean: 1.1291185456254453 msec\nrounds: 1063"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 799.0886284287491,
            "unit": "iter/sec",
            "range": "stddev: 0.000050063494126735634",
            "extra": "mean: 1.2514256421922856 msec\nrounds: 967"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1733495410919,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 230.24258432830626,
            "unit": "iter/sec",
            "range": "stddev: 0.00013551297235989742",
            "extra": "mean: 4.343245203389854 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 333.0200059104392,
            "unit": "iter/sec",
            "range": "stddev: 0.00003761299885230316",
            "extra": "mean: 3.002822599999999 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 414.1599932139017,
            "unit": "iter/sec",
            "range": "stddev: 0.00006232884013661681",
            "extra": "mean: 2.4145258266979175 msec\nrounds: 427"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1000.3322819145624,
            "unit": "iter/sec",
            "range": "stddev: 0.000038412810232029815",
            "extra": "mean: 999.6678284600329 usec\nrounds: 1026"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 213.21316154439702,
            "unit": "iter/sec",
            "range": "stddev: 0.00016793449309773006",
            "extra": "mean: 4.690141981651408 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 299.8248230227441,
            "unit": "iter/sec",
            "range": "stddev: 0.00032174201427382504",
            "extra": "mean: 3.3352808814103496 msec\nrounds: 312"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 406.4549283897049,
            "unit": "iter/sec",
            "range": "stddev: 0.00008802949337839892",
            "extra": "mean: 2.460297391304381 msec\nrounds: 414"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 916.2500273101944,
            "unit": "iter/sec",
            "range": "stddev: 0.00005219410597306122",
            "extra": "mean: 1.0914051516436707 msec\nrounds: 943"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.01701162574151,
            "unit": "iter/sec",
            "range": "stddev: 0.00013064719671981246",
            "extra": "mean: 58.76472450000018 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.68741163006853,
            "unit": "iter/sec",
            "range": "stddev: 0.0003880488013426944",
            "extra": "mean: 56.537384944442856 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 332.3616432949392,
            "unit": "iter/sec",
            "range": "stddev: 0.00008943111073258723",
            "extra": "mean: 3.0087707777777344 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 649.2294576483553,
            "unit": "iter/sec",
            "range": "stddev: 0.0001262196159003691",
            "extra": "mean: 1.540287471893541 msec\nrounds: 676"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 905.0386261063355,
            "unit": "iter/sec",
            "range": "stddev: 0.00011579225046648786",
            "extra": "mean: 1.104925216619989 msec\nrounds: 1071"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 847.6377165292809,
            "unit": "iter/sec",
            "range": "stddev: 0.00002240932247800438",
            "extra": "mean: 1.1797492967804435 msec\nrounds: 994"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1733754458346,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 225.83345315485207,
            "unit": "iter/sec",
            "range": "stddev: 0.00005404609986020142",
            "extra": "mean: 4.428041931034499 msec\nrounds: 232"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 329.1994979695987,
            "unit": "iter/sec",
            "range": "stddev: 0.00006363805691223025",
            "extra": "mean: 3.037671704141995 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 405.7533999426711,
            "unit": "iter/sec",
            "range": "stddev: 0.00003522018012485902",
            "extra": "mean: 2.46455112918657 msec\nrounds: 418"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 992.6109235140681,
            "unit": "iter/sec",
            "range": "stddev: 0.000042076912723728365",
            "extra": "mean: 1.0074440813725611 msec\nrounds: 1020"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 209.376562342973,
            "unit": "iter/sec",
            "range": "stddev: 0.00012742481062661852",
            "extra": "mean: 4.776083764150891 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 300.5532359281568,
            "unit": "iter/sec",
            "range": "stddev: 0.00009638252539432412",
            "extra": "mean: 3.327197582524237 msec\nrounds: 309"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 396.5088314499221,
            "unit": "iter/sec",
            "range": "stddev: 0.00004530565710956761",
            "extra": "mean: 2.5220119217604284 msec\nrounds: 409"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 909.6135074264037,
            "unit": "iter/sec",
            "range": "stddev: 0.00002356890056746064",
            "extra": "mean: 1.099368019313312 msec\nrounds: 932"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.09058897448986,
            "unit": "iter/sec",
            "range": "stddev: 0.0006926908511218027",
            "extra": "mean: 58.511734235294206 msec\nrounds: 17"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.603645868406588,
            "unit": "iter/sec",
            "range": "stddev: 0.001106273921286501",
            "extra": "mean: 56.806414277778025 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 325.72417213743074,
            "unit": "iter/sec",
            "range": "stddev: 0.00011280805933852629",
            "extra": "mean: 3.070082252225593 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 659.1869923811473,
            "unit": "iter/sec",
            "range": "stddev: 0.00002763612276524496",
            "extra": "mean: 1.5170202257598429 msec\nrounds: 691"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 894.5103732092929,
            "unit": "iter/sec",
            "range": "stddev: 0.00006386186817698116",
            "extra": "mean: 1.117930020657262 msec\nrounds: 1065"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 821.1338552563923,
            "unit": "iter/sec",
            "range": "stddev: 0.000033809161364951126",
            "extra": "mean: 1.2178282427385219 msec\nrounds: 964"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1733754898819,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 223.08604098897365,
            "unit": "iter/sec",
            "range": "stddev: 0.00009613785280766116",
            "extra": "mean: 4.482575402597361 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 327.59528956009365,
            "unit": "iter/sec",
            "range": "stddev: 0.00004329960165061974",
            "extra": "mean: 3.052546943952811 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 405.58002913971654,
            "unit": "iter/sec",
            "range": "stddev: 0.000039753387137886334",
            "extra": "mean: 2.465604635714236 msec\nrounds: 420"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 981.8077114952445,
            "unit": "iter/sec",
            "range": "stddev: 0.000040609577920799985",
            "extra": "mean: 1.018529380337673 msec\nrounds: 1007"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 208.06102192544802,
            "unit": "iter/sec",
            "range": "stddev: 0.0000843652957592037",
            "extra": "mean: 4.806282266355098 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 295.25373363420334,
            "unit": "iter/sec",
            "range": "stddev: 0.00031009415842225564",
            "extra": "mean: 3.3869173733766327 msec\nrounds: 308"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 398.7357248165241,
            "unit": "iter/sec",
            "range": "stddev: 0.000031232138183091246",
            "extra": "mean: 2.507926773955717 msec\nrounds: 407"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 900.816834774609,
            "unit": "iter/sec",
            "range": "stddev: 0.00002322751975027791",
            "extra": "mean: 1.1101035875403098 msec\nrounds: 931"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 16.87940679981823,
            "unit": "iter/sec",
            "range": "stddev: 0.00021526332990288983",
            "extra": "mean: 59.24378811764692 msec\nrounds: 17"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 16.848072988547543,
            "unit": "iter/sec",
            "range": "stddev: 0.00019151009699293074",
            "extra": "mean: 59.35396888889007 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 304.0928423289261,
            "unit": "iter/sec",
            "range": "stddev: 0.00012807655324199502",
            "extra": "mean: 3.288469377777516 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 646.3754569462604,
            "unit": "iter/sec",
            "range": "stddev: 0.000112205553832108",
            "extra": "mean: 1.5470884441132793 msec\nrounds: 671"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 901.5188959127855,
            "unit": "iter/sec",
            "range": "stddev: 0.00005241044447856228",
            "extra": "mean: 1.1092390903104727 msec\nrounds: 1063"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 817.3803310223614,
            "unit": "iter/sec",
            "range": "stddev: 0.00012855456167749457",
            "extra": "mean: 1.2234206795130755 msec\nrounds: 986"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1733841904753,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 225.64272964665705,
            "unit": "iter/sec",
            "range": "stddev: 0.000055067760665865135",
            "extra": "mean: 4.4317847136751976 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 331.3153755092275,
            "unit": "iter/sec",
            "range": "stddev: 0.00009217632522787703",
            "extra": "mean: 3.0182722382352845 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 416.46988259597117,
            "unit": "iter/sec",
            "range": "stddev: 0.00006563759777360879",
            "extra": "mean: 2.4011340118203153 msec\nrounds: 423"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 990.6066682424907,
            "unit": "iter/sec",
            "range": "stddev: 0.00003133163211525844",
            "extra": "mean: 1.0094824031158347 msec\nrounds: 1027"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 213.98742507018596,
            "unit": "iter/sec",
            "range": "stddev: 0.000060620719605682495",
            "extra": "mean: 4.673171798165284 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 301.5952687790091,
            "unit": "iter/sec",
            "range": "stddev: 0.00005140853140113811",
            "extra": "mean: 3.3157018810289762 msec\nrounds: 311"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 400.4111002522264,
            "unit": "iter/sec",
            "range": "stddev: 0.00006180569953347846",
            "extra": "mean: 2.497433261390809 msec\nrounds: 417"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 916.4766755839161,
            "unit": "iter/sec",
            "range": "stddev: 0.00005135542130470435",
            "extra": "mean: 1.0911352428722405 msec\nrounds: 947"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.223286824944193,
            "unit": "iter/sec",
            "range": "stddev: 0.00017822908997652072",
            "extra": "mean: 58.0609270555558 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.71790288546952,
            "unit": "iter/sec",
            "range": "stddev: 0.0006725527269759259",
            "extra": "mean: 56.440088111110576 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 325.67941866510967,
            "unit": "iter/sec",
            "range": "stddev: 0.00005092304878441446",
            "extra": "mean: 3.0705041297936058 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 658.273896492475,
            "unit": "iter/sec",
            "range": "stddev: 0.00005083185425845608",
            "extra": "mean: 1.519124494117672 msec\nrounds: 680"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 905.5779374345394,
            "unit": "iter/sec",
            "range": "stddev: 0.000038791718843380595",
            "extra": "mean: 1.1042671852551464 msec\nrounds: 1058"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 826.6814005623794,
            "unit": "iter/sec",
            "range": "stddev: 0.000028286397345352598",
            "extra": "mean: 1.2096558593428066 msec\nrounds: 974"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1734963942346,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 265.35166778057607,
            "unit": "iter/sec",
            "range": "stddev: 0.0001174709329086473",
            "extra": "mean: 3.7685838131867984 msec\nrounds: 273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 392.1340384457097,
            "unit": "iter/sec",
            "range": "stddev: 0.00003976102212230014",
            "extra": "mean: 2.5501484236453202 msec\nrounds: 406"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 502.2773215416915,
            "unit": "iter/sec",
            "range": "stddev: 0.000048238746415141244",
            "extra": "mean: 1.9909320152671777 msec\nrounds: 524"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1328.183288213754,
            "unit": "iter/sec",
            "range": "stddev: 0.000022251568257094105",
            "extra": "mean: 752.9081331424364 usec\nrounds: 1397"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 244.32811867608376,
            "unit": "iter/sec",
            "range": "stddev: 0.00013532349763102563",
            "extra": "mean: 4.092856792000035 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 353.78935036545425,
            "unit": "iter/sec",
            "range": "stddev: 0.00003215023204918887",
            "extra": "mean: 2.8265407055555194 msec\nrounds: 360"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 486.7309160811429,
            "unit": "iter/sec",
            "range": "stddev: 0.00004835177490691675",
            "extra": "mean: 2.0545232837301217 msec\nrounds: 504"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1235.6381187219515,
            "unit": "iter/sec",
            "range": "stddev: 0.00004788108041757512",
            "extra": "mean: 809.2984384734931 usec\nrounds: 1284"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.818825173233588,
            "unit": "iter/sec",
            "range": "stddev: 0.0009790618176902543",
            "extra": "mean: 48.033450095237995 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.53583099845049,
            "unit": "iter/sec",
            "range": "stddev: 0.0004928688118602775",
            "extra": "mean: 46.43424254545601 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 381.0521330327032,
            "unit": "iter/sec",
            "range": "stddev: 0.00008579071990684329",
            "extra": "mean: 2.624312825757563 msec\nrounds: 396"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 852.7694269317932,
            "unit": "iter/sec",
            "range": "stddev: 0.000028672344997662046",
            "extra": "mean: 1.172649919683369 msec\nrounds: 884"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1162.7804771150109,
            "unit": "iter/sec",
            "range": "stddev: 0.0000402833953725657",
            "extra": "mean: 860.0075591921809 usec\nrounds: 1436"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1074.0072003460461,
            "unit": "iter/sec",
            "range": "stddev: 0.00007474670125890539",
            "extra": "mean: 931.0924542012372 usec\nrounds: 1321"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1735002593183,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 266.23794579070267,
            "unit": "iter/sec",
            "range": "stddev: 0.00007971578339657608",
            "extra": "mean: 3.756038595588207 msec\nrounds: 272"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 397.602106607559,
            "unit": "iter/sec",
            "range": "stddev: 0.000043930513499265076",
            "extra": "mean: 2.5150772176039284 msec\nrounds: 409"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 495.33958455920765,
            "unit": "iter/sec",
            "range": "stddev: 0.000052029973711123605",
            "extra": "mean: 2.018817052325586 msec\nrounds: 516"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1344.3704418129896,
            "unit": "iter/sec",
            "range": "stddev: 0.00003118366025382444",
            "extra": "mean: 743.8425964285716 usec\nrounds: 1400"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 243.3352838040662,
            "unit": "iter/sec",
            "range": "stddev: 0.000042451313123389234",
            "extra": "mean: 4.109556100401785 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 354.2474866330576,
            "unit": "iter/sec",
            "range": "stddev: 0.0000388565127994773",
            "extra": "mean: 2.822885236263755 msec\nrounds: 364"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 492.0318132540856,
            "unit": "iter/sec",
            "range": "stddev: 0.000023675070992149414",
            "extra": "mean: 2.0323889087301743 msec\nrounds: 504"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1232.6735260718262,
            "unit": "iter/sec",
            "range": "stddev: 0.00003573066124291292",
            "extra": "mean: 811.244809634803 usec\nrounds: 1287"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.824949782889604,
            "unit": "iter/sec",
            "range": "stddev: 0.0010044692848153623",
            "extra": "mean: 48.01932347619055 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.759847852611653,
            "unit": "iter/sec",
            "range": "stddev: 0.0001844487231225979",
            "extra": "mean: 45.95620368181841 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 386.81817539038093,
            "unit": "iter/sec",
            "range": "stddev: 0.00008416269137888624",
            "extra": "mean: 2.5851939325001716 msec\nrounds: 400"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 874.9030922232131,
            "unit": "iter/sec",
            "range": "stddev: 0.00002492455421661145",
            "extra": "mean: 1.142983730299665 msec\nrounds: 901"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1166.8658154663656,
            "unit": "iter/sec",
            "range": "stddev: 0.00007728399594825097",
            "extra": "mean: 856.9965687102816 usec\nrounds: 1419"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1070.8065973496878,
            "unit": "iter/sec",
            "range": "stddev: 0.00002536697712594416",
            "extra": "mean: 933.8754565717671 usec\nrounds: 1301"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1735225237542,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 267.8403223109817,
            "unit": "iter/sec",
            "range": "stddev: 0.000039533915993532234",
            "extra": "mean: 3.733567789090877 msec\nrounds: 275"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 396.72979789369606,
            "unit": "iter/sec",
            "range": "stddev: 0.00003856112978544412",
            "extra": "mean: 2.5206072377450974 msec\nrounds: 408"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 501.9387719693159,
            "unit": "iter/sec",
            "range": "stddev: 0.000044505539742065",
            "extra": "mean: 1.992274866666668 msec\nrounds: 525"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1347.912786787228,
            "unit": "iter/sec",
            "range": "stddev: 0.000031673431693107734",
            "extra": "mean: 741.8877614356016 usec\nrounds: 1421"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 242.37945959649397,
            "unit": "iter/sec",
            "range": "stddev: 0.00006164623846286036",
            "extra": "mean: 4.125762148594481 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 351.1576958694595,
            "unit": "iter/sec",
            "range": "stddev: 0.00010655133376711906",
            "extra": "mean: 2.8477234352618126 msec\nrounds: 363"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 480.2787709266277,
            "unit": "iter/sec",
            "range": "stddev: 0.00009536317337111579",
            "extra": "mean: 2.082124092369617 msec\nrounds: 498"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1250.9621607929034,
            "unit": "iter/sec",
            "range": "stddev: 0.000017295963972736662",
            "extra": "mean: 799.3846907137184 usec\nrounds: 1303"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.605421569199628,
            "unit": "iter/sec",
            "range": "stddev: 0.001416703836261498",
            "extra": "mean: 48.53091680952407 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.42105277814452,
            "unit": "iter/sec",
            "range": "stddev: 0.0006141730384832",
            "extra": "mean: 46.68304636363532 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 382.16718358075497,
            "unit": "iter/sec",
            "range": "stddev: 0.0002714330890439665",
            "extra": "mean: 2.616655858910743 msec\nrounds: 404"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 856.2288964430662,
            "unit": "iter/sec",
            "range": "stddev: 0.000029005760904950685",
            "extra": "mean: 1.167911996610002 msec\nrounds: 885"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1155.9808146579667,
            "unit": "iter/sec",
            "range": "stddev: 0.00009772567081495003",
            "extra": "mean: 865.0662600277509 usec\nrounds: 1446"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1074.4491306291225,
            "unit": "iter/sec",
            "range": "stddev: 0.000027510040988837032",
            "extra": "mean: 930.7094877674383 usec\nrounds: 1308"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1735569381281,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 257.10446377936483,
            "unit": "iter/sec",
            "range": "stddev: 0.00006068372629639277",
            "extra": "mean: 3.8894696159696154 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 372.2703183242952,
            "unit": "iter/sec",
            "range": "stddev: 0.00030402059927459046",
            "extra": "mean: 2.686220068527923 msec\nrounds: 394"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 469.66937765730745,
            "unit": "iter/sec",
            "range": "stddev: 0.00005157636239383171",
            "extra": "mean: 2.129157334012196 msec\nrounds: 491"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1307.1296455410302,
            "unit": "iter/sec",
            "range": "stddev: 0.000034262265747750105",
            "extra": "mean: 765.035054794502 usec\nrounds: 1387"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 237.30527442568064,
            "unit": "iter/sec",
            "range": "stddev: 0.00004477742125346344",
            "extra": "mean: 4.213981347107312 msec\nrounds: 242"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 350.3879273937539,
            "unit": "iter/sec",
            "range": "stddev: 0.00007447616713657899",
            "extra": "mean: 2.853979608938508 msec\nrounds: 358"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 469.10336752203244,
            "unit": "iter/sec",
            "range": "stddev: 0.0001027580599410443",
            "extra": "mean: 2.131726329918177 msec\nrounds: 488"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1206.6429593590626,
            "unit": "iter/sec",
            "range": "stddev: 0.000020734851529819203",
            "extra": "mean: 828.7455640823314 usec\nrounds: 1264"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.809282818918057,
            "unit": "iter/sec",
            "range": "stddev: 0.0001371676049072018",
            "extra": "mean: 48.05547642857176 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.674266337660345,
            "unit": "iter/sec",
            "range": "stddev: 0.00021693372805311762",
            "extra": "mean: 46.13766318181851 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 364.5023895438076,
            "unit": "iter/sec",
            "range": "stddev: 0.00021641033141058989",
            "extra": "mean: 2.7434662396906324 msec\nrounds: 388"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 841.8532142355338,
            "unit": "iter/sec",
            "range": "stddev: 0.000030184938480508242",
            "extra": "mean: 1.1878555347776103 msec\nrounds: 877"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1137.5389563970846,
            "unit": "iter/sec",
            "range": "stddev: 0.000038391128754905486",
            "extra": "mean: 879.0907725633325 usec\nrounds: 1385"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1046.5943956701985,
            "unit": "iter/sec",
            "range": "stddev: 0.00003998523990704147",
            "extra": "mean: 955.4799874115881 usec\nrounds: 1271"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1735657493958,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 263.5312278930741,
            "unit": "iter/sec",
            "range": "stddev: 0.000041826491005413305",
            "extra": "mean: 3.794616706319688 msec\nrounds: 269"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 389.7877384465339,
            "unit": "iter/sec",
            "range": "stddev: 0.00006856985367073687",
            "extra": "mean: 2.5654988635235565 msec\nrounds: 403"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 489.88137175703537,
            "unit": "iter/sec",
            "range": "stddev: 0.00003227858873331558",
            "extra": "mean: 2.0413105246548673 msec\nrounds: 507"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1309.6749842006207,
            "unit": "iter/sec",
            "range": "stddev: 0.000024204333850860637",
            "extra": "mean: 763.5482177361466 usec\nrounds: 1387"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 244.9584373559419,
            "unit": "iter/sec",
            "range": "stddev: 0.00006657993600822263",
            "extra": "mean: 4.082325192771088 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 353.4618011521747,
            "unit": "iter/sec",
            "range": "stddev: 0.00007585879556283129",
            "extra": "mean: 2.8291600301371 msec\nrounds: 365"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 479.33849293924004,
            "unit": "iter/sec",
            "range": "stddev: 0.00005864092040253104",
            "extra": "mean: 2.086208420000098 msec\nrounds: 500"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1206.3547031898536,
            "unit": "iter/sec",
            "range": "stddev: 0.00003811638564073268",
            "extra": "mean: 828.9435912636568 usec\nrounds: 1282"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.515881191715437,
            "unit": "iter/sec",
            "range": "stddev: 0.00019464051271029034",
            "extra": "mean: 48.74272719047584 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.543374096654528,
            "unit": "iter/sec",
            "range": "stddev: 0.0016298767918978476",
            "extra": "mean: 46.417984272727736 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 374.9446072084442,
            "unit": "iter/sec",
            "range": "stddev: 0.00007693510667901105",
            "extra": "mean: 2.6670606291559937 msec\nrounds: 391"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 841.9589095480869,
            "unit": "iter/sec",
            "range": "stddev: 0.00002686965034882647",
            "extra": "mean: 1.1877064173318623 msec\nrounds: 877"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1141.4986139823811,
            "unit": "iter/sec",
            "range": "stddev: 0.00005591841289470385",
            "extra": "mean: 876.0413615495067 usec\nrounds: 1394"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1070.4781291228378,
            "unit": "iter/sec",
            "range": "stddev: 0.0000433615443368358",
            "extra": "mean: 934.1620092877672 usec\nrounds: 1292"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1735658015452,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 268.4955514839857,
            "unit": "iter/sec",
            "range": "stddev: 0.00004700752880566209",
            "extra": "mean: 3.7244564927536405 msec\nrounds: 276"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 391.460163363026,
            "unit": "iter/sec",
            "range": "stddev: 0.00004945460927685907",
            "extra": "mean: 2.5545383504901777 msec\nrounds: 408"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 489.7002405282318,
            "unit": "iter/sec",
            "range": "stddev: 0.00009500382408363096",
            "extra": "mean: 2.0420655683593623 msec\nrounds: 512"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1313.3360604965578,
            "unit": "iter/sec",
            "range": "stddev: 0.00001941545707104407",
            "extra": "mean: 761.4197386934698 usec\nrounds: 1393"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 244.14475948659393,
            "unit": "iter/sec",
            "range": "stddev: 0.00010639881593649593",
            "extra": "mean: 4.095930636000034 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 356.671646086202,
            "unit": "iter/sec",
            "range": "stddev: 0.00009239129631901983",
            "extra": "mean: 2.803699175342678 msec\nrounds: 365"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 470.492540031285,
            "unit": "iter/sec",
            "range": "stddev: 0.00007093629215598492",
            "extra": "mean: 2.1254322118125524 msec\nrounds: 491"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1197.4110275129829,
            "unit": "iter/sec",
            "range": "stddev: 0.0000233617783172374",
            "extra": "mean: 835.1351182033085 usec\nrounds: 1269"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.8545592261552,
            "unit": "iter/sec",
            "range": "stddev: 0.0005018982730707937",
            "extra": "mean: 47.95114531818194 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.583871208145776,
            "unit": "iter/sec",
            "range": "stddev: 0.0001611599373882876",
            "extra": "mean: 46.33089172727267 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 378.32822306407786,
            "unit": "iter/sec",
            "range": "stddev: 0.0001100403226803263",
            "extra": "mean: 2.643207508816039 msec\nrounds: 397"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 854.3725163892959,
            "unit": "iter/sec",
            "range": "stddev: 0.000029582661910449932",
            "extra": "mean: 1.170449635044614 msec\nrounds: 896"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1179.5488240228667,
            "unit": "iter/sec",
            "range": "stddev: 0.00004266819247974316",
            "extra": "mean: 847.7817786206483 usec\nrounds: 1450"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1077.2869846784286,
            "unit": "iter/sec",
            "range": "stddev: 0.00002592742159298035",
            "extra": "mean: 928.2577569601857 usec\nrounds: 1329"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1735829592999,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 261.0397787694584,
            "unit": "iter/sec",
            "range": "stddev: 0.00015405432431714745",
            "extra": "mean: 3.830833770676639 msec\nrounds: 266"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 383.6673162746117,
            "unit": "iter/sec",
            "range": "stddev: 0.00006190853975731429",
            "extra": "mean: 2.6064247789203008 msec\nrounds: 389"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 486.62437173556503,
            "unit": "iter/sec",
            "range": "stddev: 0.00006262772344987961",
            "extra": "mean: 2.054973112903204 msec\nrounds: 496"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1329.650181951513,
            "unit": "iter/sec",
            "range": "stddev: 0.00003797541204741981",
            "extra": "mean: 752.077511494272 usec\nrounds: 1392"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 243.71189382499182,
            "unit": "iter/sec",
            "range": "stddev: 0.00011236338314787291",
            "extra": "mean: 4.103205569105686 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 349.8602588353575,
            "unit": "iter/sec",
            "range": "stddev: 0.00005819434377869132",
            "extra": "mean: 2.858284056980004 msec\nrounds: 351"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 467.4071816172795,
            "unit": "iter/sec",
            "range": "stddev: 0.00005883071018809046",
            "extra": "mean: 2.139462206250002 msec\nrounds: 480"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1218.5180966873136,
            "unit": "iter/sec",
            "range": "stddev: 0.00001601246995344027",
            "extra": "mean: 820.6689771113116 usec\nrounds: 1267"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.126426891546895,
            "unit": "iter/sec",
            "range": "stddev: 0.0022557756060750766",
            "extra": "mean: 49.68591819047624 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.49618431931387,
            "unit": "iter/sec",
            "range": "stddev: 0.0004520540555636255",
            "extra": "mean: 46.51988395454542 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 370.87642630763315,
            "unit": "iter/sec",
            "range": "stddev: 0.00007718539873123691",
            "extra": "mean: 2.696315886010301 msec\nrounds: 386"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 826.8717613822301,
            "unit": "iter/sec",
            "range": "stddev: 0.00004475549962176044",
            "extra": "mean: 1.2093773747072487 msec\nrounds: 854"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1170.7285082678086,
            "unit": "iter/sec",
            "range": "stddev: 0.0000883274211958226",
            "extra": "mean: 854.1690007016094 usec\nrounds: 1425"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1067.2280137610396,
            "unit": "iter/sec",
            "range": "stddev: 0.000029591104918825003",
            "extra": "mean: 937.0068880368686 usec\nrounds: 1304"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1736174086542,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 261.0100464729381,
            "unit": "iter/sec",
            "range": "stddev: 0.00004465811175976707",
            "extra": "mean: 3.8312701503759223 msec\nrounds: 266"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 388.0974029059555,
            "unit": "iter/sec",
            "range": "stddev: 0.00004685708747482182",
            "extra": "mean: 2.576672743781081 msec\nrounds: 402"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 501.1944731628707,
            "unit": "iter/sec",
            "range": "stddev: 0.00002824553701354576",
            "extra": "mean: 1.9952334942748562 msec\nrounds: 524"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1340.9075095456194,
            "unit": "iter/sec",
            "range": "stddev: 0.00002110835202529452",
            "extra": "mean: 745.7635913597504 usec\nrounds: 1412"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 241.6887464747872,
            "unit": "iter/sec",
            "range": "stddev: 0.00005249678573717523",
            "extra": "mean: 4.1375530080972105 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 353.7836545940155,
            "unit": "iter/sec",
            "range": "stddev: 0.00006966891947433582",
            "extra": "mean: 2.8265862116992095 msec\nrounds: 359"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 481.1442729714932,
            "unit": "iter/sec",
            "range": "stddev: 0.000039775556260640114",
            "extra": "mean: 2.078378682186347 msec\nrounds: 494"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1217.3738374314187,
            "unit": "iter/sec",
            "range": "stddev: 0.000046332492272750507",
            "extra": "mean: 821.4403573104022 usec\nrounds: 1279"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.690279692708348,
            "unit": "iter/sec",
            "range": "stddev: 0.00035576910960703436",
            "extra": "mean: 48.33187442857137 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.58781249761845,
            "unit": "iter/sec",
            "range": "stddev: 0.000401641425068856",
            "extra": "mean: 46.322433090908085 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 387.7243637415694,
            "unit": "iter/sec",
            "range": "stddev: 0.00006943905955258195",
            "extra": "mean: 2.5791518241204257 msec\nrounds: 398"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 848.4105193860959,
            "unit": "iter/sec",
            "range": "stddev: 0.00004746515962822353",
            "extra": "mean: 1.1786746830102877 msec\nrounds: 877"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1174.5017624598777,
            "unit": "iter/sec",
            "range": "stddev: 0.00011883365897237171",
            "extra": "mean: 851.4248611305605 usec\nrounds: 1433"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1092.4149359968376,
            "unit": "iter/sec",
            "range": "stddev: 0.00004823224525772366",
            "extra": "mean: 915.4030827008896 usec\nrounds: 1318"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1736262641506,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 267.193892870216,
            "unit": "iter/sec",
            "range": "stddev: 0.00012797046586175508",
            "extra": "mean: 3.74260051102938 msec\nrounds: 272"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 394.5020511713532,
            "unit": "iter/sec",
            "range": "stddev: 0.00010624690317631996",
            "extra": "mean: 2.5348410661764773 msec\nrounds: 408"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 501.2038524668344,
            "unit": "iter/sec",
            "range": "stddev: 0.00005867472967489576",
            "extra": "mean: 1.9951961563706693 msec\nrounds: 518"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1340.0972068850704,
            "unit": "iter/sec",
            "range": "stddev: 0.000018846321736879013",
            "extra": "mean: 746.2145244854332 usec\nrounds: 1409"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 244.58289775728466,
            "unit": "iter/sec",
            "range": "stddev: 0.00007066413694617142",
            "extra": "mean: 4.088593311999944 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 353.06491283467375,
            "unit": "iter/sec",
            "range": "stddev: 0.00007217091778921513",
            "extra": "mean: 2.832340353424641 msec\nrounds: 365"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 484.64322898736157,
            "unit": "iter/sec",
            "range": "stddev: 0.00003469543478696567",
            "extra": "mean: 2.06337350898196 msec\nrounds: 501"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1235.856875555603,
            "unit": "iter/sec",
            "range": "stddev: 0.000022725363224117908",
            "extra": "mean: 809.1551859922541 usec\nrounds: 1285"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.798456323517534,
            "unit": "iter/sec",
            "range": "stddev: 0.0006967326504059488",
            "extra": "mean: 48.08049138095241 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.554433180513485,
            "unit": "iter/sec",
            "range": "stddev: 0.00012665943542840532",
            "extra": "mean: 46.394168272727335 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 382.2561836199808,
            "unit": "iter/sec",
            "range": "stddev: 0.00005167922720956467",
            "extra": "mean: 2.616046627499813 msec\nrounds: 400"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 867.4294535394087,
            "unit": "iter/sec",
            "range": "stddev: 0.000027529180930960664",
            "extra": "mean: 1.152831502227251 msec\nrounds: 898"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1180.3458427291264,
            "unit": "iter/sec",
            "range": "stddev: 0.00003663079159487188",
            "extra": "mean: 847.2093210307402 usec\nrounds: 1436"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1080.64659570904,
            "unit": "iter/sec",
            "range": "stddev: 0.00002131701905984499",
            "extra": "mean: 925.3719060150969 usec\nrounds: 1330"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1736347446890,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 264.80514491084205,
            "unit": "iter/sec",
            "range": "stddev: 0.000054202195777580014",
            "extra": "mean: 3.776361672794132 msec\nrounds: 272"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 389.71683204285523,
            "unit": "iter/sec",
            "range": "stddev: 0.000055917642543943034",
            "extra": "mean: 2.5659656390977617 msec\nrounds: 399"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 494.24653577808965,
            "unit": "iter/sec",
            "range": "stddev: 0.00003115263258937154",
            "extra": "mean: 2.023281758415778 msec\nrounds: 505"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1310.5585988537455,
            "unit": "iter/sec",
            "range": "stddev: 0.000019347889185253934",
            "extra": "mean: 763.0334125270174 usec\nrounds: 1389"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 242.38100494345932,
            "unit": "iter/sec",
            "range": "stddev: 0.000058340868183417986",
            "extra": "mean: 4.125735844000118 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 356.0524319776078,
            "unit": "iter/sec",
            "range": "stddev: 0.00003757122484387934",
            "extra": "mean: 2.808575114754139 msec\nrounds: 366"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 475.2124491755373,
            "unit": "iter/sec",
            "range": "stddev: 0.00003711772953833341",
            "extra": "mean: 2.104321975855083 msec\nrounds: 497"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1217.552597485525,
            "unit": "iter/sec",
            "range": "stddev: 0.00001448226970957358",
            "extra": "mean: 821.3197541241241 usec\nrounds: 1273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.913595255903882,
            "unit": "iter/sec",
            "range": "stddev: 0.00026907242124423494",
            "extra": "mean: 47.815786227272476 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.678608408581837,
            "unit": "iter/sec",
            "range": "stddev: 0.00014566292750838706",
            "extra": "mean: 46.12842213636432 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 378.12823140484926,
            "unit": "iter/sec",
            "range": "stddev: 0.00004653760998365413",
            "extra": "mean: 2.644605498734458 msec\nrounds: 395"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 836.4195801142156,
            "unit": "iter/sec",
            "range": "stddev: 0.00011269624820336267",
            "extra": "mean: 1.1955722029647453 msec\nrounds: 877"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1149.5255080026789,
            "unit": "iter/sec",
            "range": "stddev: 0.00003541073287840139",
            "extra": "mean: 869.924149606317 usec\nrounds: 1397"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1056.27355595615,
            "unit": "iter/sec",
            "range": "stddev: 0.000025704472511930096",
            "extra": "mean: 946.7244487577741 usec\nrounds: 1288"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1736435524769,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 260.65848837935704,
            "unit": "iter/sec",
            "range": "stddev: 0.00006352324042671977",
            "extra": "mean: 3.836437501872644 msec\nrounds: 267"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 380.5425370998492,
            "unit": "iter/sec",
            "range": "stddev: 0.00013558266441499132",
            "extra": "mean: 2.627827121827418 msec\nrounds: 394"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 483.68568104313994,
            "unit": "iter/sec",
            "range": "stddev: 0.00006715856112008824",
            "extra": "mean: 2.067458349900604 msec\nrounds: 503"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1330.5599798692058,
            "unit": "iter/sec",
            "range": "stddev: 0.00002517212565099193",
            "extra": "mean: 751.5632629340769 usec\nrounds: 1411"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 236.6263431618639,
            "unit": "iter/sec",
            "range": "stddev: 0.00006226594756990991",
            "extra": "mean: 4.2260721551021545 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 340.59718914216234,
            "unit": "iter/sec",
            "range": "stddev: 0.00008767857304780269",
            "extra": "mean: 2.936019532394346 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 482.36997455726504,
            "unit": "iter/sec",
            "range": "stddev: 0.00006334058158878347",
            "extra": "mean: 2.0730975241936087 msec\nrounds: 496"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1183.4240453163152,
            "unit": "iter/sec",
            "range": "stddev: 0.000022590032766423718",
            "extra": "mean: 845.0056460807435 usec\nrounds: 1263"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.84910516429915,
            "unit": "iter/sec",
            "range": "stddev: 0.00033960071089302675",
            "extra": "mean: 47.96368919047636 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.710752250446394,
            "unit": "iter/sec",
            "range": "stddev: 0.000362641506558642",
            "extra": "mean: 46.060126727273534 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 369.9891391988425,
            "unit": "iter/sec",
            "range": "stddev: 0.00005158374914576593",
            "extra": "mean: 2.70278203886026 msec\nrounds: 386"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 832.7997422807896,
            "unit": "iter/sec",
            "range": "stddev: 0.00011642641877396684",
            "extra": "mean: 1.2007688634260367 msec\nrounds: 864"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1168.8040660897343,
            "unit": "iter/sec",
            "range": "stddev: 0.000042938205332452",
            "extra": "mean: 855.5753945531069 usec\nrounds: 1432"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1068.3908912606234,
            "unit": "iter/sec",
            "range": "stddev: 0.00005854086762822196",
            "extra": "mean: 935.9870139103047 usec\nrounds: 1294"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1736437211714,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 263.5152546675184,
            "unit": "iter/sec",
            "range": "stddev: 0.00008981231636643309",
            "extra": "mean: 3.7948467205882137 msec\nrounds: 272"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 387.17784097677077,
            "unit": "iter/sec",
            "range": "stddev: 0.00023920098989782044",
            "extra": "mean: 2.582792438423655 msec\nrounds: 406"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 495.94543572036315,
            "unit": "iter/sec",
            "range": "stddev: 0.000058944612693173144",
            "extra": "mean: 2.0163508482490524 msec\nrounds: 514"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1330.841744094712,
            "unit": "iter/sec",
            "range": "stddev: 0.000036277599274855554",
            "extra": "mean: 751.4041428571487 usec\nrounds: 1414"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 240.15275210178044,
            "unit": "iter/sec",
            "range": "stddev: 0.00012782200683203517",
            "extra": "mean: 4.164016407258097 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 348.9189614883352,
            "unit": "iter/sec",
            "range": "stddev: 0.00007328743961703927",
            "extra": "mean: 2.865995002777834 msec\nrounds: 360"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 477.0947720398955,
            "unit": "iter/sec",
            "range": "stddev: 0.00004793690972595499",
            "extra": "mean: 2.096019614141524 msec\nrounds: 495"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1221.3487283889997,
            "unit": "iter/sec",
            "range": "stddev: 0.000022066128528467175",
            "extra": "mean: 818.7669719188506 usec\nrounds: 1282"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.79237120692417,
            "unit": "iter/sec",
            "range": "stddev: 0.00015641262152523143",
            "extra": "mean: 48.09456266666617 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.682965362421882,
            "unit": "iter/sec",
            "range": "stddev: 0.0006156092112551203",
            "extra": "mean: 46.119153136363494 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 379.5020861687819,
            "unit": "iter/sec",
            "range": "stddev: 0.00007944909770303532",
            "extra": "mean: 2.6350316281403905 msec\nrounds: 398"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 844.5089845954066,
            "unit": "iter/sec",
            "range": "stddev: 0.000044957564260435526",
            "extra": "mean: 1.18412002505703 msec\nrounds: 878"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1163.3571704497908,
            "unit": "iter/sec",
            "range": "stddev: 0.00004798964435794753",
            "extra": "mean: 859.5812407408536 usec\nrounds: 1458"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1062.0215855443944,
            "unit": "iter/sec",
            "range": "stddev: 0.00006681027563727655",
            "extra": "mean: 941.6004473086092 usec\nrounds: 1319"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1736441610104,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 260.1068731919614,
            "unit": "iter/sec",
            "range": "stddev: 0.0001844515723114841",
            "extra": "mean: 3.8445735313652794 msec\nrounds: 271"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 384.4661726495919,
            "unit": "iter/sec",
            "range": "stddev: 0.000060070879345254645",
            "extra": "mean: 2.601009064356397 msec\nrounds: 404"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 492.9879356341651,
            "unit": "iter/sec",
            "range": "stddev: 0.00003999037601789912",
            "extra": "mean: 2.0284472047244515 msec\nrounds: 508"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1331.0353041822761,
            "unit": "iter/sec",
            "range": "stddev: 0.00001937813025862426",
            "extra": "mean: 751.2948731396361 usec\nrounds: 1411"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 241.5726304210062,
            "unit": "iter/sec",
            "range": "stddev: 0.0000672632809004374",
            "extra": "mean: 4.139541794354879 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 346.92159777338026,
            "unit": "iter/sec",
            "range": "stddev: 0.00004215093790808843",
            "extra": "mean: 2.882495660167086 msec\nrounds: 359"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 468.3989800717138,
            "unit": "iter/sec",
            "range": "stddev: 0.000033300103481167215",
            "extra": "mean: 2.134932061224591 msec\nrounds: 490"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1207.2386209508509,
            "unit": "iter/sec",
            "range": "stddev: 0.00002161952217266629",
            "extra": "mean: 828.3366541176221 usec\nrounds: 1275"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.506468625400267,
            "unit": "iter/sec",
            "range": "stddev: 0.0009835503630219765",
            "extra": "mean: 48.76510033333353 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.336425930598438,
            "unit": "iter/sec",
            "range": "stddev: 0.00040860354509483657",
            "extra": "mean: 46.868205727272546 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 382.2753551325577,
            "unit": "iter/sec",
            "range": "stddev: 0.00004995758152049303",
            "extra": "mean: 2.615915430000033 msec\nrounds: 400"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 840.905090166052,
            "unit": "iter/sec",
            "range": "stddev: 0.0000513666496691325",
            "extra": "mean: 1.1891948469506017 msec\nrounds: 869"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1129.5927140023161,
            "unit": "iter/sec",
            "range": "stddev: 0.0000722200174557759",
            "extra": "mean: 885.2748318965782 usec\nrounds: 1392"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1026.175637085114,
            "unit": "iter/sec",
            "range": "stddev: 0.000030511675951106025",
            "extra": "mean: 974.4920497630729 usec\nrounds: 1266"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1736869278786,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 266.484731009318,
            "unit": "iter/sec",
            "range": "stddev: 0.00004643490528824718",
            "extra": "mean: 3.752560216911766 msec\nrounds: 272"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 392.84005452058864,
            "unit": "iter/sec",
            "range": "stddev: 0.00012828538397196805",
            "extra": "mean: 2.545565271393654 msec\nrounds: 409"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 491.8861897344775,
            "unit": "iter/sec",
            "range": "stddev: 0.000053177780296921955",
            "extra": "mean: 2.0329905999999807 msec\nrounds: 505"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1360.053394393699,
            "unit": "iter/sec",
            "range": "stddev: 0.00005244724763838693",
            "extra": "mean: 735.2652507042138 usec\nrounds: 1420"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 238.18697319925528,
            "unit": "iter/sec",
            "range": "stddev: 0.0004617689964909286",
            "extra": "mean: 4.19838241599993 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 353.7109508895833,
            "unit": "iter/sec",
            "range": "stddev: 0.00003664305646194433",
            "extra": "mean: 2.827167203856707 msec\nrounds: 363"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 476.6829304044721,
            "unit": "iter/sec",
            "range": "stddev: 0.000031582470422681905",
            "extra": "mean: 2.097830520491863 msec\nrounds: 488"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1228.9966335622369,
            "unit": "iter/sec",
            "range": "stddev: 0.00003230898417292239",
            "extra": "mean: 813.6718789062164 usec\nrounds: 1280"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.690928510500864,
            "unit": "iter/sec",
            "range": "stddev: 0.0010677905280489918",
            "extra": "mean: 48.330358857143096 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.546465305990367,
            "unit": "iter/sec",
            "range": "stddev: 0.0004727068952714719",
            "extra": "mean: 46.411324818181626 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 383.4547389672152,
            "unit": "iter/sec",
            "range": "stddev: 0.00006125898305366513",
            "extra": "mean: 2.6078697128463406 msec\nrounds: 397"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 845.715202216326,
            "unit": "iter/sec",
            "range": "stddev: 0.000026597667500875092",
            "extra": "mean: 1.1824311510297405 msec\nrounds: 874"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1176.8427593755866,
            "unit": "iter/sec",
            "range": "stddev: 0.00009498198484949893",
            "extra": "mean: 849.7311913875253 usec\nrounds: 1463"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1068.3001424547458,
            "unit": "iter/sec",
            "range": "stddev: 0.000030164823124430457",
            "extra": "mean: 936.0665231235433 usec\nrounds: 1319"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1736871805821,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 263.89057135357587,
            "unit": "iter/sec",
            "range": "stddev: 0.00004581406801327063",
            "extra": "mean: 3.7894495239852355 msec\nrounds: 271"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 392.1078779725718,
            "unit": "iter/sec",
            "range": "stddev: 0.000031160923378731475",
            "extra": "mean: 2.550318563275463 msec\nrounds: 403"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 497.9174975077333,
            "unit": "iter/sec",
            "range": "stddev: 0.000054967655623223996",
            "extra": "mean: 2.008364849609385 msec\nrounds: 512"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1321.0844013202309,
            "unit": "iter/sec",
            "range": "stddev: 0.000019282090207969566",
            "extra": "mean: 756.9539077144851 usec\nrounds: 1387"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 242.88597513637896,
            "unit": "iter/sec",
            "range": "stddev: 0.00009190746562646421",
            "extra": "mean: 4.11715826506041 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 346.86814656804194,
            "unit": "iter/sec",
            "range": "stddev: 0.0002591250966528932",
            "extra": "mean: 2.8829398429752877 msec\nrounds: 363"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 473.5181747931224,
            "unit": "iter/sec",
            "range": "stddev: 0.00008835822980583645",
            "extra": "mean: 2.1118513569978483 msec\nrounds: 493"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1220.8122802315659,
            "unit": "iter/sec",
            "range": "stddev: 0.000016043916734049846",
            "extra": "mean: 819.12675371378 usec\nrounds: 1279"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.78437779338338,
            "unit": "iter/sec",
            "range": "stddev: 0.0005478287289145168",
            "extra": "mean: 48.11305923809496 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.81769771051605,
            "unit": "iter/sec",
            "range": "stddev: 0.00013671572225070215",
            "extra": "mean: 45.83435031818246 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 377.096577040279,
            "unit": "iter/sec",
            "range": "stddev: 0.00007886513892583766",
            "extra": "mean: 2.6518405652172934 msec\nrounds: 391"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 862.6293444561288,
            "unit": "iter/sec",
            "range": "stddev: 0.00002133763488885293",
            "extra": "mean: 1.1592464439410888 msec\nrounds: 883"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1159.1438714095236,
            "unit": "iter/sec",
            "range": "stddev: 0.00004645603781045735",
            "extra": "mean: 862.7056784452442 usec\nrounds: 1415"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1072.6752485215065,
            "unit": "iter/sec",
            "range": "stddev: 0.000028990483772600262",
            "extra": "mean: 932.2486012223397 usec\nrounds: 1309"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1737039333177,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 258.9175632360659,
            "unit": "iter/sec",
            "range": "stddev: 0.0001158666051297461",
            "extra": "mean: 3.8622331660377105 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 386.29377229984976,
            "unit": "iter/sec",
            "range": "stddev: 0.00012068271860111903",
            "extra": "mean: 2.5887033954660237 msec\nrounds: 397"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 492.78345429959995,
            "unit": "iter/sec",
            "range": "stddev: 0.00003855996202963825",
            "extra": "mean: 2.0292889123505864 msec\nrounds: 502"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1305.0415915899173,
            "unit": "iter/sec",
            "range": "stddev: 0.000040404476909273704",
            "extra": "mean: 766.2591034985417 usec\nrounds: 1372"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 243.8323245128364,
            "unit": "iter/sec",
            "range": "stddev: 0.00009799080606589677",
            "extra": "mean: 4.101178963855367 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 353.02353547699806,
            "unit": "iter/sec",
            "range": "stddev: 0.0001054858628486203",
            "extra": "mean: 2.832672327777866 msec\nrounds: 360"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 466.8224083273546,
            "unit": "iter/sec",
            "range": "stddev: 0.00004904923830460874",
            "extra": "mean: 2.1421422411641386 msec\nrounds: 481"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1213.7130672445253,
            "unit": "iter/sec",
            "range": "stddev: 0.000043284157937179896",
            "extra": "mean: 823.9179646226313 usec\nrounds: 1272"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.865326419849403,
            "unit": "iter/sec",
            "range": "stddev: 0.0001438732667694959",
            "extra": "mean: 47.92640095238048 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.46411176755601,
            "unit": "iter/sec",
            "range": "stddev: 0.00040556319331081625",
            "extra": "mean: 46.58939586363624 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 368.5214712352855,
            "unit": "iter/sec",
            "range": "stddev: 0.0003706975710057428",
            "extra": "mean: 2.713546097186674 msec\nrounds: 391"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 792.229239713272,
            "unit": "iter/sec",
            "range": "stddev: 0.000330006242188223",
            "extra": "mean: 1.2622609086757837 msec\nrounds: 876"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1131.7621540555788,
            "unit": "iter/sec",
            "range": "stddev: 0.00009025904922671016",
            "extra": "mean: 883.5778758077219 usec\nrounds: 1393"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1048.0521929665485,
            "unit": "iter/sec",
            "range": "stddev: 0.00004481971026224795",
            "extra": "mean: 954.1509542282098 usec\nrounds: 1289"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1737127212585,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 257.9570235666058,
            "unit": "iter/sec",
            "range": "stddev: 0.00006651773876716902",
            "extra": "mean: 3.8766147406015286 msec\nrounds: 266"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 388.5318146803926,
            "unit": "iter/sec",
            "range": "stddev: 0.00004918833086348609",
            "extra": "mean: 2.5737918034398364 msec\nrounds: 407"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 496.87309303072357,
            "unit": "iter/sec",
            "range": "stddev: 0.00003063388742012408",
            "extra": "mean: 2.012586340508815 msec\nrounds: 511"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1324.7881869910148,
            "unit": "iter/sec",
            "range": "stddev: 0.000016514514175219615",
            "extra": "mean: 754.837648629171 usec\nrounds: 1386"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 234.13901033789563,
            "unit": "iter/sec",
            "range": "stddev: 0.0003828013878458767",
            "extra": "mean: 4.270967057376978 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 346.14974161673666,
            "unit": "iter/sec",
            "range": "stddev: 0.00004157974900619737",
            "extra": "mean: 2.8889231444442864 msec\nrounds: 360"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 469.11668889867155,
            "unit": "iter/sec",
            "range": "stddev: 0.000043214725792705284",
            "extra": "mean: 2.1316657958762124 msec\nrounds: 485"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1172.7839578219641,
            "unit": "iter/sec",
            "range": "stddev: 0.00014689769344415672",
            "extra": "mean: 852.6719634340412 usec\nrounds: 1258"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.617140019102315,
            "unit": "iter/sec",
            "range": "stddev: 0.00017629948833445882",
            "extra": "mean: 48.50333261904775 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.236246711624812,
            "unit": "iter/sec",
            "range": "stddev: 0.00022735557540305644",
            "extra": "mean: 47.08930036363703 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 378.4060729267078,
            "unit": "iter/sec",
            "range": "stddev: 0.00003080971494883776",
            "extra": "mean: 2.642663719072201 msec\nrounds: 388"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 836.8086630326192,
            "unit": "iter/sec",
            "range": "stddev: 0.000041009392210561514",
            "extra": "mean: 1.1950163091954265 msec\nrounds: 870"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1157.9485664000701,
            "unit": "iter/sec",
            "range": "stddev: 0.00004673657800815465",
            "extra": "mean: 863.5962157705205 usec\nrounds: 1395"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1063.225567174667,
            "unit": "iter/sec",
            "range": "stddev: 0.000044818874903533624",
            "extra": "mean: 940.5341922479557 usec\nrounds: 1290"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1737385267371,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 265.3335679275149,
            "unit": "iter/sec",
            "range": "stddev: 0.000047390866972681666",
            "extra": "mean: 3.7688408888889056 msec\nrounds: 270"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 396.0905127027286,
            "unit": "iter/sec",
            "range": "stddev: 0.00004124623373285968",
            "extra": "mean: 2.5246754666666655 msec\nrounds: 405"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 495.5632998708658,
            "unit": "iter/sec",
            "range": "stddev: 0.00003594909824920453",
            "extra": "mean: 2.0179056848248864 msec\nrounds: 514"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1321.021026097149,
            "unit": "iter/sec",
            "range": "stddev: 0.000028587991565892954",
            "extra": "mean: 756.9902221423531 usec\nrounds: 1391"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 244.45820690256505,
            "unit": "iter/sec",
            "range": "stddev: 0.00006414543836625432",
            "extra": "mean: 4.090678781746015 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 355.79674125257975,
            "unit": "iter/sec",
            "range": "stddev: 0.00003983875285444247",
            "extra": "mean: 2.8105934767123153 msec\nrounds: 365"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 480.9235081453933,
            "unit": "iter/sec",
            "range": "stddev: 0.00007726929970988538",
            "extra": "mean: 2.0793327484787434 msec\nrounds: 493"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1218.7146639478653,
            "unit": "iter/sec",
            "range": "stddev: 0.000015818462228279534",
            "extra": "mean: 820.5366108918654 usec\nrounds: 1267"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.832101428668764,
            "unit": "iter/sec",
            "range": "stddev: 0.00042856717106294254",
            "extra": "mean: 48.0028384761903 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.629673131926882,
            "unit": "iter/sec",
            "range": "stddev: 0.0005082769686895356",
            "extra": "mean: 46.23278372727378 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 383.2883476714699,
            "unit": "iter/sec",
            "range": "stddev: 0.0000362796105342406",
            "extra": "mean: 2.609001828714959 msec\nrounds: 397"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 848.9202802619183,
            "unit": "iter/sec",
            "range": "stddev: 0.000024197681856429953",
            "extra": "mean: 1.1779669107345028 msec\nrounds: 885"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1169.0402898290997,
            "unit": "iter/sec",
            "range": "stddev: 0.00003946582861403311",
            "extra": "mean: 855.402511530367 usec\nrounds: 1431"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1073.9891418981024,
            "unit": "iter/sec",
            "range": "stddev: 0.000026871883615132934",
            "extra": "mean: 931.1081099317834 usec\nrounds: 1319"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1737388080357,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 261.86406874302844,
            "unit": "iter/sec",
            "range": "stddev: 0.00008094593131524554",
            "extra": "mean: 3.818775156133836 msec\nrounds: 269"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 390.863224709981,
            "unit": "iter/sec",
            "range": "stddev: 0.000038152058263243266",
            "extra": "mean: 2.5584397220843584 msec\nrounds: 403"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 486.90715711003946,
            "unit": "iter/sec",
            "range": "stddev: 0.000034520360760415005",
            "extra": "mean: 2.0537796280000116 msec\nrounds: 500"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1325.8070474440292,
            "unit": "iter/sec",
            "range": "stddev: 0.000019991853452214637",
            "extra": "mean: 754.2575685714299 usec\nrounds: 1400"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 235.94440545636442,
            "unit": "iter/sec",
            "range": "stddev: 0.00006816061654328813",
            "extra": "mean: 4.238286549180078 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 355.54382784068207,
            "unit": "iter/sec",
            "range": "stddev: 0.000035617018153135666",
            "extra": "mean: 2.8125927711170857 msec\nrounds: 367"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 467.38225536856214,
            "unit": "iter/sec",
            "range": "stddev: 0.00004685598806818059",
            "extra": "mean: 2.1395763072165273 msec\nrounds: 485"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1228.1444838182056,
            "unit": "iter/sec",
            "range": "stddev: 0.00003516549562929145",
            "extra": "mean: 814.2364462616628 usec\nrounds: 1284"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.701542650863168,
            "unit": "iter/sec",
            "range": "stddev: 0.0002852085092736839",
            "extra": "mean: 48.305578809524334 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.445571228441608,
            "unit": "iter/sec",
            "range": "stddev: 0.0003412955057802818",
            "extra": "mean: 46.62967422727249 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 375.25553366484684,
            "unit": "iter/sec",
            "range": "stddev: 0.000037391169682449544",
            "extra": "mean: 2.664850775773324 msec\nrounds: 388"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 843.695216771177,
            "unit": "iter/sec",
            "range": "stddev: 0.000033860531917909056",
            "extra": "mean: 1.1852621422069947 msec\nrounds: 879"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1166.6194890333286,
            "unit": "iter/sec",
            "range": "stddev: 0.000038873547593261695",
            "extra": "mean: 857.17751966291 usec\nrounds: 1424"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1098.1113309525358,
            "unit": "iter/sec",
            "range": "stddev: 0.0000204647848151954",
            "extra": "mean: 910.6544772036629 usec\nrounds: 1316"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1737392092514,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 261.83249303130714,
            "unit": "iter/sec",
            "range": "stddev: 0.00005921162765858986",
            "extra": "mean: 3.819235681647926 msec\nrounds: 267"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 389.33709418430954,
            "unit": "iter/sec",
            "range": "stddev: 0.00003315878241429818",
            "extra": "mean: 2.5684683400000075 msec\nrounds: 400"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 486.85445256692543,
            "unit": "iter/sec",
            "range": "stddev: 0.00003053408918633903",
            "extra": "mean: 2.0540019603960284 msec\nrounds: 505"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1322.6841438660736,
            "unit": "iter/sec",
            "range": "stddev: 0.000032294914964475515",
            "extra": "mean: 756.0383971014425 usec\nrounds: 1380"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 238.19768410448842,
            "unit": "iter/sec",
            "range": "stddev: 0.00005294239663867489",
            "extra": "mean: 4.198193629629654 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 347.2409240073456,
            "unit": "iter/sec",
            "range": "stddev: 0.00009358351796869165",
            "extra": "mean: 2.879844888267968 msec\nrounds: 358"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 477.0821436442176,
            "unit": "iter/sec",
            "range": "stddev: 0.00002641388501031086",
            "extra": "mean: 2.0960750959183807 msec\nrounds: 490"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1216.9025028139454,
            "unit": "iter/sec",
            "range": "stddev: 0.000021114580241998863",
            "extra": "mean: 821.7585202492529 usec\nrounds: 1284"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.71204419838982,
            "unit": "iter/sec",
            "range": "stddev: 0.0002289552148981044",
            "extra": "mean: 48.28108661904754 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.60415132645094,
            "unit": "iter/sec",
            "range": "stddev: 0.00024913907729418885",
            "extra": "mean: 46.28740027272697 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 376.7626434195305,
            "unit": "iter/sec",
            "range": "stddev: 0.00004900298948650879",
            "extra": "mean: 2.6541909540816286 msec\nrounds: 392"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 858.7023623268896,
            "unit": "iter/sec",
            "range": "stddev: 0.000030028292753092348",
            "extra": "mean: 1.1645478618344847 msec\nrounds: 883"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1149.2026523577767,
            "unit": "iter/sec",
            "range": "stddev: 0.00009734417649247143",
            "extra": "mean: 870.1685450763074 usec\nrounds: 1442"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1069.2867815642278,
            "unit": "iter/sec",
            "range": "stddev: 0.00002029493032562978",
            "extra": "mean: 935.202807367664 usec\nrounds: 1303"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1737470585395,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 266.98201308853663,
            "unit": "iter/sec",
            "range": "stddev: 0.00004160027672568073",
            "extra": "mean: 3.7455706788321343 msec\nrounds: 274"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 399.0708688874921,
            "unit": "iter/sec",
            "range": "stddev: 0.00004594735036327612",
            "extra": "mean: 2.5058205896805874 msec\nrounds: 407"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 495.02908456658565,
            "unit": "iter/sec",
            "range": "stddev: 0.000048947246646592226",
            "extra": "mean: 2.0200833267716645 msec\nrounds: 508"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1331.450880017647,
            "unit": "iter/sec",
            "range": "stddev: 0.000018427295704353837",
            "extra": "mean: 751.060377072826 usec\nrounds: 1387"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 243.6375671152203,
            "unit": "iter/sec",
            "range": "stddev: 0.00014724989554511074",
            "extra": "mean: 4.104457337349306 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 355.8975076879662,
            "unit": "iter/sec",
            "range": "stddev: 0.0000847507308983132",
            "extra": "mean: 2.8097977041096676 msec\nrounds: 365"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 477.7759475423488,
            "unit": "iter/sec",
            "range": "stddev: 0.00008043294371283632",
            "extra": "mean: 2.093031273641842 msec\nrounds: 497"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1216.8516757901873,
            "unit": "iter/sec",
            "range": "stddev: 0.000047320252625813946",
            "extra": "mean: 821.7928445146199 usec\nrounds: 1267"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.74212293435498,
            "unit": "iter/sec",
            "range": "stddev: 0.0005766058947357303",
            "extra": "mean: 48.21107285714277 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.91187925213561,
            "unit": "iter/sec",
            "range": "stddev: 0.00015194760532084546",
            "extra": "mean: 45.63734531818107 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 384.60931624327816,
            "unit": "iter/sec",
            "range": "stddev: 0.00003822698349709552",
            "extra": "mean: 2.6000410228426887 msec\nrounds: 394"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 855.8107980319328,
            "unit": "iter/sec",
            "range": "stddev: 0.000024471505101019705",
            "extra": "mean: 1.1684825691609082 msec\nrounds: 882"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1163.487700200809,
            "unit": "iter/sec",
            "range": "stddev: 0.00003534317836512456",
            "extra": "mean: 859.4848057503382 usec\nrounds: 1426"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1066.8780114771532,
            "unit": "iter/sec",
            "range": "stddev: 0.00002567483853073198",
            "extra": "mean: 937.3142845220356 usec\nrounds: 1318"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1737471119142,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 264.4942815222946,
            "unit": "iter/sec",
            "range": "stddev: 0.00008683998812161102",
            "extra": "mean: 3.78080007720586 msec\nrounds: 272"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 391.8733599173164,
            "unit": "iter/sec",
            "range": "stddev: 0.00009107967681448915",
            "extra": "mean: 2.551844810810808 msec\nrounds: 407"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 489.08918937155323,
            "unit": "iter/sec",
            "range": "stddev: 0.00003829170863853336",
            "extra": "mean: 2.044616854616911 msec\nrounds: 509"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1369.3363186909341,
            "unit": "iter/sec",
            "range": "stddev: 0.00003557445137086178",
            "extra": "mean: 730.2807837273941 usec\nrounds: 1438"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 243.19130917730888,
            "unit": "iter/sec",
            "range": "stddev: 0.00004120946081216607",
            "extra": "mean: 4.111989048387036 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 353.82325893855256,
            "unit": "iter/sec",
            "range": "stddev: 0.00011399322700864003",
            "extra": "mean: 2.826269824657477 msec\nrounds: 365"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 488.44345764683504,
            "unit": "iter/sec",
            "range": "stddev: 0.000041117216460325656",
            "extra": "mean: 2.047319877755516 msec\nrounds: 499"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1245.1163771414988,
            "unit": "iter/sec",
            "range": "stddev: 0.000022827138894273473",
            "extra": "mean: 803.1377776073995 usec\nrounds: 1304"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.94020079636324,
            "unit": "iter/sec",
            "range": "stddev: 0.00042023345171292813",
            "extra": "mean: 47.7550339523809 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.85968962553454,
            "unit": "iter/sec",
            "range": "stddev: 0.0005267201358049565",
            "extra": "mean: 45.74630368181849 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 383.3686135783848,
            "unit": "iter/sec",
            "range": "stddev: 0.00004989482642166517",
            "extra": "mean: 2.6084555818639985 msec\nrounds: 397"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 873.7329835273299,
            "unit": "iter/sec",
            "range": "stddev: 0.000026436745465489376",
            "extra": "mean: 1.1445144212856886 msec\nrounds: 902"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1157.0210271429578,
            "unit": "iter/sec",
            "range": "stddev: 0.00003648640225516395",
            "extra": "mean: 864.2885276418085 usec\nrounds: 1429"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1075.9345700841172,
            "unit": "iter/sec",
            "range": "stddev: 0.00002720356857634032",
            "extra": "mean: 929.424546626306 usec\nrounds: 1319"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1737557512329,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 252.34273691732898,
            "unit": "iter/sec",
            "range": "stddev: 0.00011585458812251704",
            "extra": "mean: 3.9628642068965676 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 380.3494561797737,
            "unit": "iter/sec",
            "range": "stddev: 0.00010744067510667911",
            "extra": "mean: 2.629161114213204 msec\nrounds: 394"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 479.0679618293619,
            "unit": "iter/sec",
            "range": "stddev: 0.00003196321009678399",
            "extra": "mean: 2.0873865081301086 msec\nrounds: 492"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1324.3226181550945,
            "unit": "iter/sec",
            "range": "stddev: 0.000021543122835667257",
            "extra": "mean: 755.1030136396022 usec\nrounds: 1393"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 233.811130064263,
            "unit": "iter/sec",
            "range": "stddev: 0.00007270611155398535",
            "extra": "mean: 4.276956360995945 msec\nrounds: 241"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 348.67093544461136,
            "unit": "iter/sec",
            "range": "stddev: 0.00004392031956768594",
            "extra": "mean: 2.8680337198878925 msec\nrounds: 357"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 469.68275166202847,
            "unit": "iter/sec",
            "range": "stddev: 0.00004820434852527087",
            "extra": "mean: 2.129096707216479 msec\nrounds: 485"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1242.4674928161337,
            "unit": "iter/sec",
            "range": "stddev: 0.00003467493551771748",
            "extra": "mean: 804.8500309118226 usec\nrounds: 1294"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.880071376056286,
            "unit": "iter/sec",
            "range": "stddev: 0.0005726611483290598",
            "extra": "mean: 47.89255659090925 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.851449649802355,
            "unit": "iter/sec",
            "range": "stddev: 0.0005336063376666447",
            "extra": "mean: 45.763554181818094 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 376.63387498069085,
            "unit": "iter/sec",
            "range": "stddev: 0.000053175339791688925",
            "extra": "mean: 2.655098403061243 msec\nrounds: 392"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 878.0803416137862,
            "unit": "iter/sec",
            "range": "stddev: 0.000023135473024200692",
            "extra": "mean: 1.1388479534368607 msec\nrounds: 902"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1163.8877191069193,
            "unit": "iter/sec",
            "range": "stddev: 0.0000922515102119555",
            "extra": "mean: 859.189407692458 usec\nrounds: 1430"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1072.2720061259436,
            "unit": "iter/sec",
            "range": "stddev: 0.000043119044114922874",
            "extra": "mean: 932.5991859219956 usec\nrounds: 1307"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1737560075080,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 262.9730464495373,
            "unit": "iter/sec",
            "range": "stddev: 0.00010484634918167666",
            "extra": "mean: 3.8026710855018866 msec\nrounds: 269"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 390.6327556323041,
            "unit": "iter/sec",
            "range": "stddev: 0.00007070562089164727",
            "extra": "mean: 2.5599491736972584 msec\nrounds: 403"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 497.37644970185465,
            "unit": "iter/sec",
            "range": "stddev: 0.000035364167142563084",
            "extra": "mean: 2.0105495557729682 msec\nrounds: 511"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1335.7632478664968,
            "unit": "iter/sec",
            "range": "stddev: 0.000031060508383702503",
            "extra": "mean: 748.6356594982057 usec\nrounds: 1395"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 243.51015963748165,
            "unit": "iter/sec",
            "range": "stddev: 0.00005328362736080588",
            "extra": "mean: 4.106604839357502 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 355.6871734643472,
            "unit": "iter/sec",
            "range": "stddev: 0.000048799883819673905",
            "extra": "mean: 2.8114592670298704 msec\nrounds: 367"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 475.7826321131942,
            "unit": "iter/sec",
            "range": "stddev: 0.00006592857029996082",
            "extra": "mean: 2.1018001341463184 msec\nrounds: 492"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1220.36592049141,
            "unit": "iter/sec",
            "range": "stddev: 0.00002535964498984291",
            "extra": "mean: 819.4263566433629 usec\nrounds: 1287"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.925874400665865,
            "unit": "iter/sec",
            "range": "stddev: 0.0003170395719745422",
            "extra": "mean: 47.78772828571407 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.609804042768392,
            "unit": "iter/sec",
            "range": "stddev: 0.00012707080739276434",
            "extra": "mean: 46.27529236363644 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 379.1993474031778,
            "unit": "iter/sec",
            "range": "stddev: 0.000045568790224507705",
            "extra": "mean: 2.6371353401533297 msec\nrounds: 391"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 865.7092353254351,
            "unit": "iter/sec",
            "range": "stddev: 0.000041932975905774206",
            "extra": "mean: 1.155122250283125 msec\nrounds: 883"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1192.5181292319792,
            "unit": "iter/sec",
            "range": "stddev: 0.00003627199044322339",
            "extra": "mean: 838.5616750699068 usec\nrounds: 1428"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1076.6616945701742,
            "unit": "iter/sec",
            "range": "stddev: 0.00003351138068045009",
            "extra": "mean: 928.7968588863197 usec\nrounds: 1311"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1737729175428,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 258.55145725705455,
            "unit": "iter/sec",
            "range": "stddev: 0.00006360101696359188",
            "extra": "mean: 3.867702045112782 msec\nrounds: 266"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 379.96271118326257,
            "unit": "iter/sec",
            "range": "stddev: 0.00015224446565562837",
            "extra": "mean: 2.6318372055137873 msec\nrounds: 399"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 476.768141872528,
            "unit": "iter/sec",
            "range": "stddev: 0.00006664292993655155",
            "extra": "mean: 2.097455580971614 msec\nrounds: 494"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1324.6129873708203,
            "unit": "iter/sec",
            "range": "stddev: 0.00003295457667337759",
            "extra": "mean: 754.9374870503619 usec\nrounds: 1390"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 237.58467539739004,
            "unit": "iter/sec",
            "range": "stddev: 0.00012094199567319372",
            "extra": "mean: 4.209025680327972 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 349.6930435001208,
            "unit": "iter/sec",
            "range": "stddev: 0.0000972397227128503",
            "extra": "mean: 2.859650824022339 msec\nrounds: 358"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 469.0436843198419,
            "unit": "iter/sec",
            "range": "stddev: 0.000048726550078564344",
            "extra": "mean: 2.1319975802469133 msec\nrounds: 486"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1192.2517782593886,
            "unit": "iter/sec",
            "range": "stddev: 0.00010170189733842768",
            "extra": "mean: 838.7490111022825 usec\nrounds: 1261"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.733053579740275,
            "unit": "iter/sec",
            "range": "stddev: 0.00047887541448919055",
            "extra": "mean: 48.23216204761899 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.61595063713978,
            "unit": "iter/sec",
            "range": "stddev: 0.00031669211287934713",
            "extra": "mean: 46.262133772725896 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 372.8830607298061,
            "unit": "iter/sec",
            "range": "stddev: 0.000058183793643577",
            "extra": "mean: 2.6818059207162737 msec\nrounds: 391"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 841.2523770445242,
            "unit": "iter/sec",
            "range": "stddev: 0.00007180254151638921",
            "extra": "mean: 1.188703922018248 msec\nrounds: 872"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1155.2039284028951,
            "unit": "iter/sec",
            "range": "stddev: 0.00004897448806148784",
            "extra": "mean: 865.6480257840975 usec\nrounds: 1435"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1063.362329372902,
            "unit": "iter/sec",
            "range": "stddev: 0.00004453878474549619",
            "extra": "mean: 940.4132273424913 usec\nrounds: 1302"
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
        "date": 1738381208416,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 256.2482704024463,
            "unit": "iter/sec",
            "range": "stddev: 0.00006332402161065296",
            "extra": "mean: 3.9024653646616514 msec\nrounds: 266"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 386.2772473362911,
            "unit": "iter/sec",
            "range": "stddev: 0.00004327570183113783",
            "extra": "mean: 2.5888141403508675 msec\nrounds: 399"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 473.23514343373046,
            "unit": "iter/sec",
            "range": "stddev: 0.00006414596612815467",
            "extra": "mean: 2.1131144080808006 msec\nrounds: 495"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1294.9180341181695,
            "unit": "iter/sec",
            "range": "stddev: 0.0000380473028139292",
            "extra": "mean: 772.2496510607278 usec\nrounds: 1367"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 235.24208899876984,
            "unit": "iter/sec",
            "range": "stddev: 0.0001042125758035545",
            "extra": "mean: 4.250939975308709 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 343.5507235791795,
            "unit": "iter/sec",
            "range": "stddev: 0.00008984592824737548",
            "extra": "mean: 2.9107783257790927 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 466.4763164878138,
            "unit": "iter/sec",
            "range": "stddev: 0.00007448433781509133",
            "extra": "mean: 2.143731556468256 msec\nrounds: 487"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1193.1909079142952,
            "unit": "iter/sec",
            "range": "stddev: 0.000036903046263613345",
            "extra": "mean: 838.0888534828061 usec\nrounds: 1249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.741235416644606,
            "unit": "iter/sec",
            "range": "stddev: 0.00040859755695220296",
            "extra": "mean: 48.21313580952422 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.503786030854332,
            "unit": "iter/sec",
            "range": "stddev: 0.0005834633905663284",
            "extra": "mean: 46.50343890909105 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 371.7062075546078,
            "unit": "iter/sec",
            "range": "stddev: 0.0000603621175772056",
            "extra": "mean: 2.6902967442454906 msec\nrounds: 391"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 831.5199020067424,
            "unit": "iter/sec",
            "range": "stddev: 0.0000313340673112503",
            "extra": "mean: 1.202617036088562 msec\nrounds: 859"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1156.441776012493,
            "unit": "iter/sec",
            "range": "stddev: 0.000049111746068606686",
            "extra": "mean: 864.7214418767219 usec\nrounds: 1428"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1052.072127436933,
            "unit": "iter/sec",
            "range": "stddev: 0.00006966454716743211",
            "extra": "mean: 950.5051734772295 usec\nrounds: 1297"
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
        "date": 1738381454182,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 263.5268879613183,
            "unit": "iter/sec",
            "range": "stddev: 0.00006439025166233508",
            "extra": "mean: 3.794679198529391 msec\nrounds: 272"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 396.8907970876565,
            "unit": "iter/sec",
            "range": "stddev: 0.000034927538346232975",
            "extra": "mean: 2.519584750611242 msec\nrounds: 409"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 486.6986982592935,
            "unit": "iter/sec",
            "range": "stddev: 0.000068317399926949",
            "extra": "mean: 2.054659286282373 msec\nrounds: 503"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1302.8855216719805,
            "unit": "iter/sec",
            "range": "stddev: 0.00002815722226365584",
            "extra": "mean: 767.5271413843863 usec\nrounds: 1358"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 242.70362205112596,
            "unit": "iter/sec",
            "range": "stddev: 0.00005461240246677928",
            "extra": "mean: 4.120251653225629 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 352.207889747757,
            "unit": "iter/sec",
            "range": "stddev: 0.000041751794244915436",
            "extra": "mean: 2.83923225205482 msec\nrounds: 365"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 476.944323346028,
            "unit": "iter/sec",
            "range": "stddev: 0.00002873082128886826",
            "extra": "mean: 2.0966807886179404 msec\nrounds: 492"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1186.506901592103,
            "unit": "iter/sec",
            "range": "stddev: 0.000018923826296112955",
            "extra": "mean: 842.8100996784422 usec\nrounds: 1244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 21.014090367873614,
            "unit": "iter/sec",
            "range": "stddev: 0.00043415511159942125",
            "extra": "mean: 47.58711809523776 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.564508059115756,
            "unit": "iter/sec",
            "range": "stddev: 0.0015781007139204046",
            "extra": "mean: 46.37249304545483 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 381.0863723140042,
            "unit": "iter/sec",
            "range": "stddev: 0.00007542124721258888",
            "extra": "mean: 2.624077040403924 msec\nrounds: 396"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 832.735104231397,
            "unit": "iter/sec",
            "range": "stddev: 0.000027262432247604653",
            "extra": "mean: 1.2008620687643354 msec\nrounds: 858"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1134.8870892043988,
            "unit": "iter/sec",
            "range": "stddev: 0.00004546789165066555",
            "extra": "mean: 881.144925792609 usec\nrounds: 1388"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1047.240654425467,
            "unit": "iter/sec",
            "range": "stddev: 0.000020308950497726756",
            "extra": "mean: 954.8903547376281 usec\nrounds: 1277"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1739373092460,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 260.50683629012576,
            "unit": "iter/sec",
            "range": "stddev: 0.00008878482425713892",
            "extra": "mean: 3.8386708550185715 msec\nrounds: 269"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 393.58254614894713,
            "unit": "iter/sec",
            "range": "stddev: 0.00005830101003938812",
            "extra": "mean: 2.5407630744417227 msec\nrounds: 403"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 492.0279612884511,
            "unit": "iter/sec",
            "range": "stddev: 0.00007183497231075486",
            "extra": "mean: 2.0324048198020006 msec\nrounds: 505"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1336.395658674644,
            "unit": "iter/sec",
            "range": "stddev: 0.00002329575746978095",
            "extra": "mean: 748.2813892045558 usec\nrounds: 1408"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 239.1044970153037,
            "unit": "iter/sec",
            "range": "stddev: 0.00006152102410159691",
            "extra": "mean: 4.182271820408278 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 350.0375332752413,
            "unit": "iter/sec",
            "range": "stddev: 0.00006379868934597484",
            "extra": "mean: 2.8568364959127983 msec\nrounds: 367"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 484.2137946814925,
            "unit": "iter/sec",
            "range": "stddev: 0.00006215175939250992",
            "extra": "mean: 2.065203451417122 msec\nrounds: 494"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1210.500740526544,
            "unit": "iter/sec",
            "range": "stddev: 0.000016477238550331586",
            "extra": "mean: 826.1044099527109 usec\nrounds: 1266"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.800451430810657,
            "unit": "iter/sec",
            "range": "stddev: 0.0009380510550580139",
            "extra": "mean: 48.075879666666786 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.571480744576565,
            "unit": "iter/sec",
            "range": "stddev: 0.0001834678721616295",
            "extra": "mean: 46.35750377272627 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 384.40251631068924,
            "unit": "iter/sec",
            "range": "stddev: 0.00004509855184666697",
            "extra": "mean: 2.601439786600566 msec\nrounds: 403"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 850.1169052753501,
            "unit": "iter/sec",
            "range": "stddev: 0.00006887321373327608",
            "extra": "mean: 1.176308803876925 msec\nrounds: 877"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1197.9125842084522,
            "unit": "iter/sec",
            "range": "stddev: 0.0000675560091859802",
            "extra": "mean: 834.7854536153592 usec\nrounds: 1466"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1072.9675565624696,
            "unit": "iter/sec",
            "range": "stddev: 0.000030227423671067695",
            "extra": "mean: 931.994629179432 usec\nrounds: 1316"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1739807840327,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 255.48570832205849,
            "unit": "iter/sec",
            "range": "stddev: 0.0001295951356749446",
            "extra": "mean: 3.914113265151516 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 387.74978874107563,
            "unit": "iter/sec",
            "range": "stddev: 0.00005433225023293124",
            "extra": "mean: 2.5789827074999683 msec\nrounds: 400"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 492.11447290347604,
            "unit": "iter/sec",
            "range": "stddev: 0.00003587970933317092",
            "extra": "mean: 2.0320475317460156 msec\nrounds: 504"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1357.6936350429228,
            "unit": "iter/sec",
            "range": "stddev: 0.00001900489686028478",
            "extra": "mean: 736.5431892655116 usec\nrounds: 1416"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 233.58856456542216,
            "unit": "iter/sec",
            "range": "stddev: 0.00009463008097082491",
            "extra": "mean: 4.2810314873951185 msec\nrounds: 238"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 346.0080947113536,
            "unit": "iter/sec",
            "range": "stddev: 0.00005942758097452492",
            "extra": "mean: 2.8901057960341032 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 472.1212494667127,
            "unit": "iter/sec",
            "range": "stddev: 0.00003297178064292363",
            "extra": "mean: 2.1180999608248006 msec\nrounds: 485"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1232.1339605628464,
            "unit": "iter/sec",
            "range": "stddev: 0.000020464245468716865",
            "extra": "mean: 811.6000629860034 usec\nrounds: 1286"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.60795898983188,
            "unit": "iter/sec",
            "range": "stddev: 0.00020569406306600473",
            "extra": "mean: 48.52494128571429 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.281501624766463,
            "unit": "iter/sec",
            "range": "stddev: 0.0011437752365876885",
            "extra": "mean: 46.98916540909146 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 379.5766651973186,
            "unit": "iter/sec",
            "range": "stddev: 0.00007579751195488656",
            "extra": "mean: 2.634513898477298 msec\nrounds: 394"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 854.1103115439894,
            "unit": "iter/sec",
            "range": "stddev: 0.0000414501697322987",
            "extra": "mean: 1.1708089534620927 msec\nrounds: 881"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1162.2677644333785,
            "unit": "iter/sec",
            "range": "stddev: 0.000045964816748761094",
            "extra": "mean: 860.3869354386799 usec\nrounds: 1425"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1058.5360840318378,
            "unit": "iter/sec",
            "range": "stddev: 0.000031723291127203705",
            "extra": "mean: 944.7009082497398 usec\nrounds: 1297"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1739889044004,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 262.1921939275618,
            "unit": "iter/sec",
            "range": "stddev: 0.0001265108761734129",
            "extra": "mean: 3.8139960805861333 msec\nrounds: 273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 391.6915853441593,
            "unit": "iter/sec",
            "range": "stddev: 0.00009285589095653047",
            "extra": "mean: 2.553029060150351 msec\nrounds: 399"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 503.9424728147495,
            "unit": "iter/sec",
            "range": "stddev: 0.000030358439549025873",
            "extra": "mean: 1.9843534806950127 msec\nrounds: 518"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1346.0224928169596,
            "unit": "iter/sec",
            "range": "stddev: 0.00004297391004192756",
            "extra": "mean: 742.9296355272617 usec\nrounds: 1413"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 240.54254594179375,
            "unit": "iter/sec",
            "range": "stddev: 0.00015841800066185768",
            "extra": "mean: 4.157268711382057 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 356.1386830064009,
            "unit": "iter/sec",
            "range": "stddev: 0.00003728287773587723",
            "extra": "mean: 2.8078949232875856 msec\nrounds: 365"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 486.2290969806938,
            "unit": "iter/sec",
            "range": "stddev: 0.000037740004659952655",
            "extra": "mean: 2.0566436813626274 msec\nrounds: 499"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1228.7586100764463,
            "unit": "iter/sec",
            "range": "stddev: 0.000023189320214154093",
            "extra": "mean: 813.8294957199004 usec\nrounds: 1285"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.868949694849007,
            "unit": "iter/sec",
            "range": "stddev: 0.00015019256287275164",
            "extra": "mean: 47.91807995238139 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.723866863824377,
            "unit": "iter/sec",
            "range": "stddev: 0.00012579671693422755",
            "extra": "mean: 46.03232040909107 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 386.2024098155721,
            "unit": "iter/sec",
            "range": "stddev: 0.00005145419141085695",
            "extra": "mean: 2.5893157955113284 msec\nrounds: 401"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 863.9444958955619,
            "unit": "iter/sec",
            "range": "stddev: 0.00010728268975176709",
            "extra": "mean: 1.1574817650333005 msec\nrounds: 898"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1188.2365138487269,
            "unit": "iter/sec",
            "range": "stddev: 0.000033972760690646154",
            "extra": "mean: 841.583294525242 usec\nrounds: 1443"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1085.2919727673689,
            "unit": "iter/sec",
            "range": "stddev: 0.00003364212882867001",
            "extra": "mean: 921.411035087743 usec\nrounds: 1311"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1739891676435,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 259.3157101211116,
            "unit": "iter/sec",
            "range": "stddev: 0.00004646771851414864",
            "extra": "mean: 3.856303189393952 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 388.4100594796699,
            "unit": "iter/sec",
            "range": "stddev: 0.00006030708887478711",
            "extra": "mean: 2.574598611940281 msec\nrounds: 402"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 491.47306614578133,
            "unit": "iter/sec",
            "range": "stddev: 0.00003752391996953408",
            "extra": "mean: 2.0346994960317497 msec\nrounds: 504"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1326.8833637649877,
            "unit": "iter/sec",
            "range": "stddev: 0.00003649388287043667",
            "extra": "mean: 753.6457440860008 usec\nrounds: 1395"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 237.8431505815018,
            "unit": "iter/sec",
            "range": "stddev: 0.00004988825432727211",
            "extra": "mean: 4.204451536885145 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 353.64559517158125,
            "unit": "iter/sec",
            "range": "stddev: 0.00003139428279533032",
            "extra": "mean: 2.827689680440729 msec\nrounds: 363"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 473.88931692258876,
            "unit": "iter/sec",
            "range": "stddev: 0.000033512256338893404",
            "extra": "mean: 2.110197390593114 msec\nrounds: 489"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1236.9127119445632,
            "unit": "iter/sec",
            "range": "stddev: 0.000023838280899312983",
            "extra": "mean: 808.4644860896367 usec\nrounds: 1294"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.996124277701036,
            "unit": "iter/sec",
            "range": "stddev: 0.0005709235081417958",
            "extra": "mean: 47.627837727272905 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.725458573647305,
            "unit": "iter/sec",
            "range": "stddev: 0.0005418711513172042",
            "extra": "mean: 46.028947863636205 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 380.98213347532896,
            "unit": "iter/sec",
            "range": "stddev: 0.00004726809824439314",
            "extra": "mean: 2.62479500253194 msec\nrounds: 395"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 863.5966682904934,
            "unit": "iter/sec",
            "range": "stddev: 0.000023538809593158745",
            "extra": "mean: 1.1579479596412985 msec\nrounds: 892"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1164.8606327150849,
            "unit": "iter/sec",
            "range": "stddev: 0.00004298874311739617",
            "extra": "mean: 858.4717964664804 usec\nrounds: 1415"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1062.0870775679723,
            "unit": "iter/sec",
            "range": "stddev: 0.000029150223944595036",
            "extra": "mean: 941.5423849142927 usec\nrounds: 1286"
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
        "date": 1740284498052,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 260.68692920113756,
            "unit": "iter/sec",
            "range": "stddev: 0.000037910631145684084",
            "extra": "mean: 3.836018948339495 msec\nrounds: 271"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 390.02801953392753,
            "unit": "iter/sec",
            "range": "stddev: 0.0000426778695503419",
            "extra": "mean: 2.563918359493689 msec\nrounds: 395"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 490.93534777829353,
            "unit": "iter/sec",
            "range": "stddev: 0.00004023950308055827",
            "extra": "mean: 2.036928089463218 msec\nrounds: 503"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1307.3203521969021,
            "unit": "iter/sec",
            "range": "stddev: 0.000019222551606157743",
            "extra": "mean: 764.923454545428 usec\nrounds: 1364"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 239.07594232730708,
            "unit": "iter/sec",
            "range": "stddev: 0.000046985101921782034",
            "extra": "mean: 4.18277134146333 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 348.39111684221035,
            "unit": "iter/sec",
            "range": "stddev: 0.000059892855311201186",
            "extra": "mean: 2.8703372493073913 msec\nrounds: 361"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 472.9363947228689,
            "unit": "iter/sec",
            "range": "stddev: 0.00009053602402424317",
            "extra": "mean: 2.114449239175132 msec\nrounds: 485"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1211.399963849141,
            "unit": "iter/sec",
            "range": "stddev: 0.000017958936818011115",
            "extra": "mean: 825.4911918789959 usec\nrounds: 1256"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 21.24615066829427,
            "unit": "iter/sec",
            "range": "stddev: 0.00045072453150506826",
            "extra": "mean: 47.06734954545459 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.946394220298014,
            "unit": "iter/sec",
            "range": "stddev: 0.00020555148348801576",
            "extra": "mean: 45.56557172727305 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 384.13745933252403,
            "unit": "iter/sec",
            "range": "stddev: 0.00005459882198570759",
            "extra": "mean: 2.603234794486319 msec\nrounds: 399"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 853.0011318730186,
            "unit": "iter/sec",
            "range": "stddev: 0.00003119763762649841",
            "extra": "mean: 1.1723313869516228 msec\nrounds: 889"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1120.2803171323656,
            "unit": "iter/sec",
            "range": "stddev: 0.000040511241363894954",
            "extra": "mean: 892.6337316715045 usec\nrounds: 1364"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1034.6172344597828,
            "unit": "iter/sec",
            "range": "stddev: 0.000030381961988816154",
            "extra": "mean: 966.5410227987766 usec\nrounds: 1272"
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
        "date": 1740294570349,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 264.08804728119054,
            "unit": "iter/sec",
            "range": "stddev: 0.00006277789998324502",
            "extra": "mean: 3.786615904411756 msec\nrounds: 272"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 385.52170327946385,
            "unit": "iter/sec",
            "range": "stddev: 0.00009749283923123088",
            "extra": "mean: 2.5938876890546996 msec\nrounds: 402"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 503.95273453536527,
            "unit": "iter/sec",
            "range": "stddev: 0.000044166970978271524",
            "extra": "mean: 1.9843130743639696 msec\nrounds: 511"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1352.1519858530926,
            "unit": "iter/sec",
            "range": "stddev: 0.000029757677867590757",
            "extra": "mean: 739.5618321479484 usec\nrounds: 1406"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 242.77538505405886,
            "unit": "iter/sec",
            "range": "stddev: 0.000048422094424981667",
            "extra": "mean: 4.119033730612062 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 348.99077249681244,
            "unit": "iter/sec",
            "range": "stddev: 0.00009902933902476473",
            "extra": "mean: 2.8654052737429714 msec\nrounds: 358"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 484.7993360851178,
            "unit": "iter/sec",
            "range": "stddev: 0.000050422866855735074",
            "extra": "mean: 2.062709095427529 msec\nrounds: 503"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1222.078252995708,
            "unit": "iter/sec",
            "range": "stddev: 0.000035513230213975965",
            "extra": "mean: 818.2782056293673 usec\nrounds: 1279"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.815423809706925,
            "unit": "iter/sec",
            "range": "stddev: 0.0020387083830816517",
            "extra": "mean: 48.041299045454295 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.895167340066635,
            "unit": "iter/sec",
            "range": "stddev: 0.0001124628908018452",
            "extra": "mean: 45.67217890909057 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 383.7508677087215,
            "unit": "iter/sec",
            "range": "stddev: 0.00007077069140608193",
            "extra": "mean: 2.605857299999723 msec\nrounds: 400"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 864.2317733882105,
            "unit": "iter/sec",
            "range": "stddev: 0.000024166122832391084",
            "extra": "mean: 1.1570970089186976 msec\nrounds: 897"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1122.634502331356,
            "unit": "iter/sec",
            "range": "stddev: 0.000048413942748352344",
            "extra": "mean: 890.761862318784 usec\nrounds: 1380"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1034.3156790467704,
            "unit": "iter/sec",
            "range": "stddev: 0.00003936361587958479",
            "extra": "mean: 966.8228184664127 usec\nrounds: 1278"
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
        "date": 1740294850484,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 267.5109948635727,
            "unit": "iter/sec",
            "range": "stddev: 0.0000416125000788673",
            "extra": "mean: 3.7381641098900915 msec\nrounds: 273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 396.38486548993853,
            "unit": "iter/sec",
            "range": "stddev: 0.00008162382538769985",
            "extra": "mean: 2.5228006593137273 msec\nrounds: 408"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 492.2633455151942,
            "unit": "iter/sec",
            "range": "stddev: 0.0002173715750168487",
            "extra": "mean: 2.031432990310131 msec\nrounds: 516"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1351.688825936033,
            "unit": "iter/sec",
            "range": "stddev: 0.0000377958221304806",
            "extra": "mean: 739.8152450565007 usec\nrounds: 1416"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 245.83856860928924,
            "unit": "iter/sec",
            "range": "stddev: 0.00004051085625463323",
            "extra": "mean: 4.067709984063966 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 356.09516905830475,
            "unit": "iter/sec",
            "range": "stddev: 0.00008056186862591085",
            "extra": "mean: 2.80823804109588 msec\nrounds: 365"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 485.2075758377866,
            "unit": "iter/sec",
            "range": "stddev: 0.00007070486455753413",
            "extra": "mean: 2.06097359109314 msec\nrounds: 494"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1253.8053026994173,
            "unit": "iter/sec",
            "range": "stddev: 0.00001467268815262272",
            "extra": "mean: 797.5719976993399 usec\nrounds: 1304"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 21.110001070186303,
            "unit": "iter/sec",
            "range": "stddev: 0.0006318218460033147",
            "extra": "mean: 47.37091185714348 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.0898942281342,
            "unit": "iter/sec",
            "range": "stddev: 0.0003735672709539727",
            "extra": "mean: 45.26956940909101 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 386.34219344763983,
            "unit": "iter/sec",
            "range": "stddev: 0.00005842318275807938",
            "extra": "mean: 2.5883789473683985 msec\nrounds: 399"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 871.596558646563,
            "unit": "iter/sec",
            "range": "stddev: 0.00005200066950042244",
            "extra": "mean: 1.1473198122223256 msec\nrounds: 900"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1199.7797243843313,
            "unit": "iter/sec",
            "range": "stddev: 0.000043328977503050626",
            "extra": "mean: 833.4863305955195 usec\nrounds: 1461"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1102.681930648234,
            "unit": "iter/sec",
            "range": "stddev: 0.00002710830022035812",
            "extra": "mean: 906.8798283582371 usec\nrounds: 1340"
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
        "date": 1740470955613,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 272.0679421374892,
            "unit": "iter/sec",
            "range": "stddev: 0.00004700715551658226",
            "extra": "mean: 3.6755524820144054 msec\nrounds: 278"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 403.7866988181797,
            "unit": "iter/sec",
            "range": "stddev: 0.0000682153137758182",
            "extra": "mean: 2.47655507951808 msec\nrounds: 415"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 502.2216990806048,
            "unit": "iter/sec",
            "range": "stddev: 0.00006744051939210054",
            "extra": "mean: 1.9911525165691883 msec\nrounds: 513"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1361.2710014505249,
            "unit": "iter/sec",
            "range": "stddev: 0.000032194790362892",
            "extra": "mean: 734.6075828651558 usec\nrounds: 1424"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 239.14390663137078,
            "unit": "iter/sec",
            "range": "stddev: 0.0004910421917652663",
            "extra": "mean: 4.181582604742899 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 352.9215901731643,
            "unit": "iter/sec",
            "range": "stddev: 0.00008126728420286191",
            "extra": "mean: 2.8334905765026743 msec\nrounds: 366"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 478.0515833900902,
            "unit": "iter/sec",
            "range": "stddev: 0.00004833354124345633",
            "extra": "mean: 2.0918244698794353 msec\nrounds: 498"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1254.856521215292,
            "unit": "iter/sec",
            "range": "stddev: 0.00001584981734187514",
            "extra": "mean: 796.9038556149264 usec\nrounds: 1309"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.92332966636423,
            "unit": "iter/sec",
            "range": "stddev: 0.0010312674804387914",
            "extra": "mean: 47.79354031818237 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.900542387936724,
            "unit": "iter/sec",
            "range": "stddev: 0.00012473382813525647",
            "extra": "mean: 45.66096959090935 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 388.77347356379425,
            "unit": "iter/sec",
            "range": "stddev: 0.00004405701775423",
            "extra": "mean: 2.572191952381002 msec\nrounds: 399"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 862.4955401431256,
            "unit": "iter/sec",
            "range": "stddev: 0.000046585991629534815",
            "extra": "mean: 1.1594262850727974 msec\nrounds: 891"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1157.5886738508239,
            "unit": "iter/sec",
            "range": "stddev: 0.0000764565176275215",
            "extra": "mean: 863.8647065139374 usec\nrounds: 1397"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1054.1726665337105,
            "unit": "iter/sec",
            "range": "stddev: 0.000029357187589828898",
            "extra": "mean: 948.6112017001551 usec\nrounds: 1294"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1740497667802,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 261.21751856178383,
            "unit": "iter/sec",
            "range": "stddev: 0.0000929758379088994",
            "extra": "mean: 3.828227162962952 msec\nrounds: 270"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 396.3013983098493,
            "unit": "iter/sec",
            "range": "stddev: 0.00003483222128105479",
            "extra": "mean: 2.5233320000000288 msec\nrounds: 406"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 494.13156970071464,
            "unit": "iter/sec",
            "range": "stddev: 0.000030163588312450072",
            "extra": "mean: 2.0237525009901303 msec\nrounds: 505"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1355.5413682130131,
            "unit": "iter/sec",
            "range": "stddev: 0.00002401487014659841",
            "extra": "mean: 737.7126389866529 usec\nrounds: 1421"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 239.96239496633763,
            "unit": "iter/sec",
            "range": "stddev: 0.00005749486672747573",
            "extra": "mean: 4.16731963414635 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 353.43243259661375,
            "unit": "iter/sec",
            "range": "stddev: 0.00008392534962263287",
            "extra": "mean: 2.82939511989082 msec\nrounds: 367"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 482.16325091939933,
            "unit": "iter/sec",
            "range": "stddev: 0.000035500435288080106",
            "extra": "mean: 2.073986348178088 msec\nrounds: 494"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1235.0429618203484,
            "unit": "iter/sec",
            "range": "stddev: 0.00004264950784993537",
            "extra": "mean: 809.688432640501 usec\nrounds: 1299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.944272338875933,
            "unit": "iter/sec",
            "range": "stddev: 0.0006035606312260178",
            "extra": "mean: 47.74575042857131 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.83335718511772,
            "unit": "iter/sec",
            "range": "stddev: 0.00044320391058811124",
            "extra": "mean: 45.801476681819246 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 382.99109949864476,
            "unit": "iter/sec",
            "range": "stddev: 0.00006232365364809478",
            "extra": "mean: 2.611026734848543 msec\nrounds: 396"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 859.597517508128,
            "unit": "iter/sec",
            "range": "stddev: 0.00004644806142439597",
            "extra": "mean: 1.1633351418916171 msec\nrounds: 888"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1167.1336763161241,
            "unit": "iter/sec",
            "range": "stddev: 0.00004414401419114099",
            "extra": "mean: 856.7998853022085 usec\nrounds: 1456"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1065.5842976604574,
            "unit": "iter/sec",
            "range": "stddev: 0.00002832749647411213",
            "extra": "mean: 938.4522671698044 usec\nrounds: 1325"
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
        "date": 1740530814282,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 287.98747105288106,
            "unit": "iter/sec",
            "range": "stddev: 0.00008949168149043982",
            "extra": "mean: 3.472373281879256 msec\nrounds: 298"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 439.91400131917976,
            "unit": "iter/sec",
            "range": "stddev: 0.00008503634074206536",
            "extra": "mean: 2.273171567627487 msec\nrounds: 451"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 535.0706223652778,
            "unit": "iter/sec",
            "range": "stddev: 0.00003063943144857679",
            "extra": "mean: 1.8689121738351167 msec\nrounds: 558"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1457.0041554932711,
            "unit": "iter/sec",
            "range": "stddev: 0.00013791431846160154",
            "extra": "mean: 686.3398407133906 usec\nrounds: 1626"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 261.5582299853233,
            "unit": "iter/sec",
            "range": "stddev: 0.00009957285104015907",
            "extra": "mean: 3.823240431226777 msec\nrounds: 269"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 385.06469373012675,
            "unit": "iter/sec",
            "range": "stddev: 0.00022065241108547195",
            "extra": "mean: 2.5969662144638264 msec\nrounds: 401"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 516.1753826497103,
            "unit": "iter/sec",
            "range": "stddev: 0.00006268420333618201",
            "extra": "mean: 1.9373260205991367 msec\nrounds: 534"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1343.7571362136068,
            "unit": "iter/sec",
            "range": "stddev: 0.00011016314129430722",
            "extra": "mean: 744.1820944056648 usec\nrounds: 1430"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.01672029986035,
            "unit": "iter/sec",
            "range": "stddev: 0.0003404749329012979",
            "extra": "mean: 43.44667645833396 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.95368174770519,
            "unit": "iter/sec",
            "range": "stddev: 0.00043473696756127727",
            "extra": "mean: 41.74723579166706 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 413.9221259779193,
            "unit": "iter/sec",
            "range": "stddev: 0.00007179941865710097",
            "extra": "mean: 2.4159133741339187 msec\nrounds: 433"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 986.2844687814924,
            "unit": "iter/sec",
            "range": "stddev: 0.000033673640373835896",
            "extra": "mean: 1.013906263002856 msec\nrounds: 1019"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1304.6518582118078,
            "unit": "iter/sec",
            "range": "stddev: 0.0000384352354542137",
            "extra": "mean: 766.4880049844314 usec\nrounds: 1605"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1176.825826080105,
            "unit": "iter/sec",
            "range": "stddev: 0.00004649387461412252",
            "extra": "mean: 849.7434181325754 usec\nrounds: 1478"
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
        "date": 1740547503005,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 265.2929640631237,
            "unit": "iter/sec",
            "range": "stddev: 0.00012749453354674888",
            "extra": "mean: 3.769417721014495 msec\nrounds: 276"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 391.7880314745551,
            "unit": "iter/sec",
            "range": "stddev: 0.00017766063545792326",
            "extra": "mean: 2.552400583132529 msec\nrounds: 415"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 499.1841840472299,
            "unit": "iter/sec",
            "range": "stddev: 0.00008325828534125187",
            "extra": "mean: 2.0032685969581636 msec\nrounds: 526"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1513.7407155452959,
            "unit": "iter/sec",
            "range": "stddev: 0.000023799601409945076",
            "extra": "mean: 660.6151170610281 usec\nrounds: 1606"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 242.23383312503668,
            "unit": "iter/sec",
            "range": "stddev: 0.00009011639931701748",
            "extra": "mean: 4.128242479999969 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 362.31884577530434,
            "unit": "iter/sec",
            "range": "stddev: 0.00008525644564310176",
            "extra": "mean: 2.759999960422042 msec\nrounds: 379"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 474.21483531284184,
            "unit": "iter/sec",
            "range": "stddev: 0.00013639942135383363",
            "extra": "mean: 2.108748873999893 msec\nrounds: 500"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1346.7119314071854,
            "unit": "iter/sec",
            "range": "stddev: 0.0000574825490365029",
            "extra": "mean: 742.5492985386232 usec\nrounds: 1437"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.92277061843623,
            "unit": "iter/sec",
            "range": "stddev: 0.00031595506962440724",
            "extra": "mean: 43.62474399999991 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.849819570301374,
            "unit": "iter/sec",
            "range": "stddev: 0.00023458693728369305",
            "extra": "mean: 41.92903837500032 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 414.45854749220456,
            "unit": "iter/sec",
            "range": "stddev: 0.00027241271181526643",
            "extra": "mean: 2.4127865284737764 msec\nrounds: 439"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1013.2476408947233,
            "unit": "iter/sec",
            "range": "stddev: 0.000032678885078084514",
            "extra": "mean: 986.9255645312677 usec\nrounds: 1077"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1280.0364948755328,
            "unit": "iter/sec",
            "range": "stddev: 0.00004793860216169709",
            "extra": "mean: 781.2277259307651 usec\nrounds: 1558"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1156.2376458188435,
            "unit": "iter/sec",
            "range": "stddev: 0.00005047555545734876",
            "extra": "mean: 864.8741057828155 usec\nrounds: 1418"
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
        "date": 1740551555241,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 292.37857541966423,
            "unit": "iter/sec",
            "range": "stddev: 0.00004908918664289592",
            "extra": "mean: 3.4202232450331036 msec\nrounds: 302"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 440.24454424669693,
            "unit": "iter/sec",
            "range": "stddev: 0.00002940392747457396",
            "extra": "mean: 2.2714648325991216 msec\nrounds: 454"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 550.4478304740131,
            "unit": "iter/sec",
            "range": "stddev: 0.00008472301813049967",
            "extra": "mean: 1.816702591304355 msec\nrounds: 575"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1568.4206299139914,
            "unit": "iter/sec",
            "range": "stddev: 0.0000182602509597755",
            "extra": "mean: 637.5840644577837 usec\nrounds: 1660"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 260.5596175287895,
            "unit": "iter/sec",
            "range": "stddev: 0.00012606596982849368",
            "extra": "mean: 3.8378932602229083 msec\nrounds: 269"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 398.4916672369515,
            "unit": "iter/sec",
            "range": "stddev: 0.00005573767116894119",
            "extra": "mean: 2.509462762254898 msec\nrounds: 408"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 536.326522328045,
            "unit": "iter/sec",
            "range": "stddev: 0.000056387132216057974",
            "extra": "mean: 1.8645357974453265 msec\nrounds: 548"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1388.9545090068173,
            "unit": "iter/sec",
            "range": "stddev: 0.000028996730220550217",
            "extra": "mean: 719.9659841379959 usec\nrounds: 1450"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.25172038897846,
            "unit": "iter/sec",
            "range": "stddev: 0.00039726337734609965",
            "extra": "mean: 43.00757033333369 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.99374360736083,
            "unit": "iter/sec",
            "range": "stddev: 0.0009517068903467802",
            "extra": "mean: 41.67753129166633 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 421.0439199178974,
            "unit": "iter/sec",
            "range": "stddev: 0.00006576328135194345",
            "extra": "mean: 2.375049140229831 msec\nrounds: 435"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1014.1467829374228,
            "unit": "iter/sec",
            "range": "stddev: 0.00008747335890115065",
            "extra": "mean: 986.0505568075192 usec\nrounds: 1065"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1351.978691583785,
            "unit": "iter/sec",
            "range": "stddev: 0.000042341884623735965",
            "extra": "mean: 739.6566278929612 usec\nrounds: 1642"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1213.227749994131,
            "unit": "iter/sec",
            "range": "stddev: 0.00006785862702521413",
            "extra": "mean: 824.2475495675378 usec\nrounds: 1503"
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
        "date": 1740559852773,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 289.2130939107401,
            "unit": "iter/sec",
            "range": "stddev: 0.00007969456290458712",
            "extra": "mean: 3.4576581111110767 msec\nrounds: 297"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 435.546396795237,
            "unit": "iter/sec",
            "range": "stddev: 0.00003538009799087103",
            "extra": "mean: 2.2959666463964092 msec\nrounds: 444"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 553.249313076017,
            "unit": "iter/sec",
            "range": "stddev: 0.00005580901820069657",
            "extra": "mean: 1.80750337391309 msec\nrounds: 575"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1582.049983361654,
            "unit": "iter/sec",
            "range": "stddev: 0.00003407111209671634",
            "extra": "mean: 632.0912806276373 usec\nrounds: 1657"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 262.89477982980856,
            "unit": "iter/sec",
            "range": "stddev: 0.00011178869088031202",
            "extra": "mean: 3.80380318181812 msec\nrounds: 275"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 390.84370078978105,
            "unit": "iter/sec",
            "range": "stddev: 0.0001727056940007479",
            "extra": "mean: 2.5585675245099044 msec\nrounds: 408"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 534.0022725794548,
            "unit": "iter/sec",
            "range": "stddev: 0.00003644619557800398",
            "extra": "mean: 1.8726512064631875 msec\nrounds: 557"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1416.5411931352764,
            "unit": "iter/sec",
            "range": "stddev: 0.00006689995395525379",
            "extra": "mean: 705.9448781624682 usec\nrounds: 1502"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.315148747831902,
            "unit": "iter/sec",
            "range": "stddev: 0.00009802330652611513",
            "extra": "mean: 42.89056916666641 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.287017774122045,
            "unit": "iter/sec",
            "range": "stddev: 0.0003510851036092798",
            "extra": "mean: 41.17426063999943 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 429.4058498545698,
            "unit": "iter/sec",
            "range": "stddev: 0.0000736798233227753",
            "extra": "mean: 2.3287992008927634 msec\nrounds: 448"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1014.3180421864387,
            "unit": "iter/sec",
            "range": "stddev: 0.00005307551683429237",
            "extra": "mean: 985.8840702906407 usec\nrounds: 1067"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1322.2243111559396,
            "unit": "iter/sec",
            "range": "stddev: 0.000044522546549373615",
            "extra": "mean: 756.3013261537759 usec\nrounds: 1625"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1206.4436451237839,
            "unit": "iter/sec",
            "range": "stddev: 0.00003842796594646995",
            "extra": "mean: 828.8824795437483 usec\nrounds: 1491"
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
        "date": 1740630762413,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 283.4649974115689,
            "unit": "iter/sec",
            "range": "stddev: 0.00011679392418069221",
            "extra": "mean: 3.5277724203390037 msec\nrounds: 295"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 427.7398075473155,
            "unit": "iter/sec",
            "range": "stddev: 0.00008693906905757101",
            "extra": "mean: 2.337869850678751 msec\nrounds: 442"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 546.0560903433995,
            "unit": "iter/sec",
            "range": "stddev: 0.000028021137296482853",
            "extra": "mean: 1.8313137014388534 msec\nrounds: 556"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1583.5476878328366,
            "unit": "iter/sec",
            "range": "stddev: 0.00002408361019983042",
            "extra": "mean: 631.4934546546872 usec\nrounds: 1665"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 261.90567977561653,
            "unit": "iter/sec",
            "range": "stddev: 0.0000435070081685636",
            "extra": "mean: 3.8181684370370803 msec\nrounds: 270"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 393.5970802024034,
            "unit": "iter/sec",
            "range": "stddev: 0.00010512174481502132",
            "extra": "mean: 2.5406692536584874 msec\nrounds: 410"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 529.0667637409265,
            "unit": "iter/sec",
            "range": "stddev: 0.00004493807884070143",
            "extra": "mean: 1.890120620938646 msec\nrounds: 554"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1411.865861581897,
            "unit": "iter/sec",
            "range": "stddev: 0.000026261037139168092",
            "extra": "mean: 708.2825835023518 usec\nrounds: 1479"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.95384122547992,
            "unit": "iter/sec",
            "range": "stddev: 0.00010805477291280894",
            "extra": "mean: 43.56569299999991 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.07815412472253,
            "unit": "iter/sec",
            "range": "stddev: 0.00016751644753291745",
            "extra": "mean: 41.53142283333248 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 421.05005633447274,
            "unit": "iter/sec",
            "range": "stddev: 0.000039035898836396895",
            "extra": "mean: 2.375014526077209 msec\nrounds: 441"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1011.4179486992923,
            "unit": "iter/sec",
            "range": "stddev: 0.000038219569059975406",
            "extra": "mean: 988.710949104694 usec\nrounds: 1061"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1328.1091375144695,
            "unit": "iter/sec",
            "range": "stddev: 0.0000363238440906907",
            "extra": "mean: 752.9501693448783 usec\nrounds: 1618"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1191.1263729292161,
            "unit": "iter/sec",
            "range": "stddev: 0.000037899213442562145",
            "extra": "mean: 839.5414816824193 usec\nrounds: 1474"
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
        "date": 1740731354145,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 283.53537468156935,
            "unit": "iter/sec",
            "range": "stddev: 0.000064288882680106",
            "extra": "mean: 3.526896780068702 msec\nrounds: 291"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 442.57688765546,
            "unit": "iter/sec",
            "range": "stddev: 0.00003796923312014169",
            "extra": "mean: 2.2594944017467227 msec\nrounds: 458"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 522.5747509111353,
            "unit": "iter/sec",
            "range": "stddev: 0.00024192046035014",
            "extra": "mean: 1.913601830659537 msec\nrounds: 561"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1566.969033929644,
            "unit": "iter/sec",
            "range": "stddev: 0.00001830187621515819",
            "extra": "mean: 638.1747043795757 usec\nrounds: 1644"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 266.9741923550899,
            "unit": "iter/sec",
            "range": "stddev: 0.00006320296725892653",
            "extra": "mean: 3.7456804014597296 msec\nrounds: 274"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 391.62953245703505,
            "unit": "iter/sec",
            "range": "stddev: 0.00004123316639472372",
            "extra": "mean: 2.553433582309598 msec\nrounds: 407"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 525.6827328011875,
            "unit": "iter/sec",
            "range": "stddev: 0.00004233057037863564",
            "extra": "mean: 1.9022880867159824 msec\nrounds: 542"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1417.487281825246,
            "unit": "iter/sec",
            "range": "stddev: 0.000024087525657620515",
            "extra": "mean: 705.4737018256254 usec\nrounds: 1479"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.123304089306934,
            "unit": "iter/sec",
            "range": "stddev: 0.00015560855398699729",
            "extra": "mean: 43.24641479166624 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.00167454114895,
            "unit": "iter/sec",
            "range": "stddev: 0.00012095824129491675",
            "extra": "mean: 41.66375967999983 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 413.40744612994035,
            "unit": "iter/sec",
            "range": "stddev: 0.000054677639216035035",
            "extra": "mean: 2.4189211136890956 msec\nrounds: 431"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 995.2371522538148,
            "unit": "iter/sec",
            "range": "stddev: 0.000013782890758117016",
            "extra": "mean: 1.0047856410257587 msec\nrounds: 1014"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1326.57097276427,
            "unit": "iter/sec",
            "range": "stddev: 0.0000365208785962622",
            "extra": "mean: 753.8232183056359 usec\nrounds: 1617"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1206.214837716151,
            "unit": "iter/sec",
            "range": "stddev: 0.000041841513020496996",
            "extra": "mean: 829.0397106152346 usec\nrounds: 1479"
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
        "date": 1740802029075,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 292.9646710963714,
            "unit": "iter/sec",
            "range": "stddev: 0.00004146183532270385",
            "extra": "mean: 3.4133808566666657 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 438.70784140521073,
            "unit": "iter/sec",
            "range": "stddev: 0.000048687722686514706",
            "extra": "mean: 2.279421304157529 msec\nrounds: 457"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 530.4818545462869,
            "unit": "iter/sec",
            "range": "stddev: 0.000034380195153173026",
            "extra": "mean: 1.8850786156583714 msec\nrounds: 562"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1538.20375138402,
            "unit": "iter/sec",
            "range": "stddev: 0.00010478067603271345",
            "extra": "mean: 650.1089332932885 usec\nrounds: 1664"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 262.2363820328612,
            "unit": "iter/sec",
            "range": "stddev: 0.0000757077354158867",
            "extra": "mean: 3.813353403703872 msec\nrounds: 270"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 392.4744500068686,
            "unit": "iter/sec",
            "range": "stddev: 0.00007763822159859157",
            "extra": "mean: 2.5479365599021775 msec\nrounds: 409"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 523.5965133564054,
            "unit": "iter/sec",
            "range": "stddev: 0.000055937444185423973",
            "extra": "mean: 1.909867568807344 msec\nrounds: 545"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1400.7603706504499,
            "unit": "iter/sec",
            "range": "stddev: 0.000021796493594417813",
            "extra": "mean: 713.8979806629202 usec\nrounds: 1448"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.77095324333732,
            "unit": "iter/sec",
            "range": "stddev: 0.0001516581323090071",
            "extra": "mean: 43.915596739130606 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.07473202045078,
            "unit": "iter/sec",
            "range": "stddev: 0.0006423485272073634",
            "extra": "mean: 41.537326319999295 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 420.24191554001663,
            "unit": "iter/sec",
            "range": "stddev: 0.00006933122440498765",
            "extra": "mean: 2.379581767123316 msec\nrounds: 438"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 989.6030550916532,
            "unit": "iter/sec",
            "range": "stddev: 0.000022719916529673964",
            "extra": "mean: 1.0105061770523576 msec\nrounds: 1011"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1333.686056772772,
            "unit": "iter/sec",
            "range": "stddev: 0.00003939115850621185",
            "extra": "mean: 749.8016455385167 usec\nrounds: 1625"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1206.2001639613368,
            "unit": "iter/sec",
            "range": "stddev: 0.000029456920232437344",
            "extra": "mean: 829.0497961100043 usec\nrounds: 1491"
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
        "date": 1740966379632,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 289.3422556402127,
            "unit": "iter/sec",
            "range": "stddev: 0.00008552307394147164",
            "extra": "mean: 3.456114620338987 msec\nrounds: 295"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 445.0512891793276,
            "unit": "iter/sec",
            "range": "stddev: 0.00007655442609059778",
            "extra": "mean: 2.2469320375276185 msec\nrounds: 453"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 542.3753171224755,
            "unit": "iter/sec",
            "range": "stddev: 0.00006717897086250785",
            "extra": "mean: 1.8437417198581456 msec\nrounds: 564"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1581.246184550995,
            "unit": "iter/sec",
            "range": "stddev: 0.00002012753875365423",
            "extra": "mean: 632.4125931623712 usec\nrounds: 1755"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 256.00522810312896,
            "unit": "iter/sec",
            "range": "stddev: 0.00037640521279137215",
            "extra": "mean: 3.9061702271063026 msec\nrounds: 273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 394.04615057969363,
            "unit": "iter/sec",
            "range": "stddev: 0.000051163601197452333",
            "extra": "mean: 2.5377738077858867 msec\nrounds: 411"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 528.6233640348554,
            "unit": "iter/sec",
            "range": "stddev: 0.00008006122812950246",
            "extra": "mean: 1.89170601989144 msec\nrounds: 553"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1421.067413290337,
            "unit": "iter/sec",
            "range": "stddev: 0.000019269912402666594",
            "extra": "mean: 703.6963838925852 usec\nrounds: 1490"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.678772804629023,
            "unit": "iter/sec",
            "range": "stddev: 0.0018045011126458517",
            "extra": "mean: 44.094096652173675 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.8137630845985,
            "unit": "iter/sec",
            "range": "stddev: 0.0011622743575473759",
            "extra": "mean: 41.99252325000025 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 424.70017843349297,
            "unit": "iter/sec",
            "range": "stddev: 0.00003391258151770792",
            "extra": "mean: 2.3546022600896968 msec\nrounds: 446"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1016.2436450458661,
            "unit": "iter/sec",
            "range": "stddev: 0.000021143355992736236",
            "extra": "mean: 984.0159934824163 usec\nrounds: 1074"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1343.9506525443503,
            "unit": "iter/sec",
            "range": "stddev: 0.000042983820845639044",
            "extra": "mean: 744.0749391406691 usec\nrounds: 1676"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1215.603216235257,
            "unit": "iter/sec",
            "range": "stddev: 0.00008103229657370459",
            "extra": "mean: 822.636849462291 usec\nrounds: 1488"
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
        "date": 1740978875444,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 288.4110544942059,
            "unit": "iter/sec",
            "range": "stddev: 0.00024460288199917174",
            "extra": "mean: 3.4672734779661143 msec\nrounds: 295"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 447.97922981681955,
            "unit": "iter/sec",
            "range": "stddev: 0.000033137265419624774",
            "extra": "mean: 2.2322463485838484 msec\nrounds: 459"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 552.233310990412,
            "unit": "iter/sec",
            "range": "stddev: 0.00002343986302458548",
            "extra": "mean: 1.8108288292253385 msec\nrounds: 568"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1597.2453831564692,
            "unit": "iter/sec",
            "range": "stddev: 0.000021314830101031264",
            "extra": "mean: 626.0778779174208 usec\nrounds: 1671"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 267.26585417755393,
            "unit": "iter/sec",
            "range": "stddev: 0.00009774957222559171",
            "extra": "mean: 3.741592816176456 msec\nrounds: 272"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 399.23152523983975,
            "unit": "iter/sec",
            "range": "stddev: 0.00005485472046946136",
            "extra": "mean: 2.5048122124104464 msec\nrounds: 419"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 534.4716540421983,
            "unit": "iter/sec",
            "range": "stddev: 0.00003092962802129284",
            "extra": "mean: 1.8710066145454491 msec\nrounds: 550"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1413.2256791221203,
            "unit": "iter/sec",
            "range": "stddev: 0.000027189705407623454",
            "extra": "mean: 707.6010680906879 usec\nrounds: 1498"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.788796555588064,
            "unit": "iter/sec",
            "range": "stddev: 0.00019807660598647662",
            "extra": "mean: 43.881211434782365 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.95467743887427,
            "unit": "iter/sec",
            "range": "stddev: 0.00045241549287442526",
            "extra": "mean: 41.74550054166767 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 410.2716585775472,
            "unit": "iter/sec",
            "range": "stddev: 0.00018671588299533443",
            "extra": "mean: 2.4374094068966397 msec\nrounds: 435"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 992.4409601541389,
            "unit": "iter/sec",
            "range": "stddev: 0.00007475355716116988",
            "extra": "mean: 1.0076166141356027 msec\nrounds: 1047"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1314.4435556555964,
            "unit": "iter/sec",
            "range": "stddev: 0.00004408430957498043",
            "extra": "mean: 760.77819827055 usec\nrounds: 1619"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1176.7571613221387,
            "unit": "iter/sec",
            "range": "stddev: 0.000030317306452889918",
            "extra": "mean: 849.7930013669564 usec\nrounds: 1463"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1740986155385,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 296.12944278326796,
            "unit": "iter/sec",
            "range": "stddev: 0.00009304247589020701",
            "extra": "mean: 3.3769016366666476 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 442.28406240133177,
            "unit": "iter/sec",
            "range": "stddev: 0.000050077606215454376",
            "extra": "mean: 2.2609903566739713 msec\nrounds: 457"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 546.5909799735266,
            "unit": "iter/sec",
            "range": "stddev: 0.00004892167614240388",
            "extra": "mean: 1.8295215922670982 msec\nrounds: 569"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1583.8268111395485,
            "unit": "iter/sec",
            "range": "stddev: 0.000027160539040577624",
            "extra": "mean: 631.382164367144 usec\nrounds: 1667"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 267.5554318494254,
            "unit": "iter/sec",
            "range": "stddev: 0.00011362735665048638",
            "extra": "mean: 3.737543256317738 msec\nrounds: 277"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 401.48133332230594,
            "unit": "iter/sec",
            "range": "stddev: 0.00006314487403768814",
            "extra": "mean: 2.4907758269229623 msec\nrounds: 416"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 534.4503961983671,
            "unit": "iter/sec",
            "range": "stddev: 0.000032763900869911293",
            "extra": "mean: 1.8710810341112352 msec\nrounds: 557"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1426.6789545528566,
            "unit": "iter/sec",
            "range": "stddev: 0.000028166438151645365",
            "extra": "mean: 700.9285423386762 usec\nrounds: 1488"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.99899513940387,
            "unit": "iter/sec",
            "range": "stddev: 0.00023159232630997183",
            "extra": "mean: 43.4801605 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.962228542348335,
            "unit": "iter/sec",
            "range": "stddev: 0.00042014181080493677",
            "extra": "mean: 41.732345480000106 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 426.7098172260686,
            "unit": "iter/sec",
            "range": "stddev: 0.00005317065529593652",
            "extra": "mean: 2.3435129908675276 msec\nrounds: 438"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 982.9086017494624,
            "unit": "iter/sec",
            "range": "stddev: 0.00005118012906727818",
            "extra": "mean: 1.0173885936292724 msec\nrounds: 1036"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1337.841770303768,
            "unit": "iter/sec",
            "range": "stddev: 0.000039216297286259146",
            "extra": "mean: 747.4725503397473 usec\nrounds: 1619"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1204.4533800603845,
            "unit": "iter/sec",
            "range": "stddev: 0.000028882653850074",
            "extra": "mean: 830.2521430508715 usec\nrounds: 1475"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1741274666034,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 290.82061307717333,
            "unit": "iter/sec",
            "range": "stddev: 0.0002075589789187718",
            "extra": "mean: 3.438545808080791 msec\nrounds: 297"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 446.4453860045386,
            "unit": "iter/sec",
            "range": "stddev: 0.0000440558612910941",
            "extra": "mean: 2.2399156343612296 msec\nrounds: 454"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 527.6422352144913,
            "unit": "iter/sec",
            "range": "stddev: 0.00015742473403999733",
            "extra": "mean: 1.8952235686619952 msec\nrounds: 568"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1580.8712971200541,
            "unit": "iter/sec",
            "range": "stddev: 0.000020229141766078574",
            "extra": "mean: 632.5625633293147 usec\nrounds: 1658"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 270.31999226046014,
            "unit": "iter/sec",
            "range": "stddev: 0.00004544303778944906",
            "extra": "mean: 3.6993194311594784 msec\nrounds: 276"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 401.6357089972927,
            "unit": "iter/sec",
            "range": "stddev: 0.00008584992721712748",
            "extra": "mean: 2.489818453883394 msec\nrounds: 412"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 536.4916998534742,
            "unit": "iter/sec",
            "range": "stddev: 0.00003976136649234379",
            "extra": "mean: 1.863961735611415 msec\nrounds: 556"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1402.286060633783,
            "unit": "iter/sec",
            "range": "stddev: 0.00008037857641971405",
            "extra": "mean: 713.1212582602695 usec\nrounds: 1483"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.290454668201697,
            "unit": "iter/sec",
            "range": "stddev: 0.00020847752252861043",
            "extra": "mean: 42.936044583332816 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.274957605339623,
            "unit": "iter/sec",
            "range": "stddev: 0.0003628944853696158",
            "extra": "mean: 41.19471664000088 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 430.80200361743186,
            "unit": "iter/sec",
            "range": "stddev: 0.00007054347547060849",
            "extra": "mean: 2.3212519709820967 msec\nrounds: 448"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1009.318654681664,
            "unit": "iter/sec",
            "range": "stddev: 0.00004402298309412321",
            "extra": "mean: 990.7673809074666 usec\nrounds: 1058"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1330.8659877580087,
            "unit": "iter/sec",
            "range": "stddev: 0.000044117036511114103",
            "extra": "mean: 751.3904549357451 usec\nrounds: 1631"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1203.2009493779249,
            "unit": "iter/sec",
            "range": "stddev: 0.000025074603604214534",
            "extra": "mean: 831.1163654890871 usec\nrounds: 1472"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1741614898125,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 283.12610944206546,
            "unit": "iter/sec",
            "range": "stddev: 0.00008578111814119191",
            "extra": "mean: 3.5319949896907143 msec\nrounds: 291"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 429.08349488575624,
            "unit": "iter/sec",
            "range": "stddev: 0.000039815648021146865",
            "extra": "mean: 2.3305487438202457 msec\nrounds: 445"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 551.6691261399028,
            "unit": "iter/sec",
            "range": "stddev: 0.00010078519021676732",
            "extra": "mean: 1.8126807403508762 msec\nrounds: 570"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1587.7600089445239,
            "unit": "iter/sec",
            "range": "stddev: 0.000019679179333504416",
            "extra": "mean: 629.8181049822246 usec\nrounds: 1686"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 258.4999288244138,
            "unit": "iter/sec",
            "range": "stddev: 0.0001134705251204782",
            "extra": "mean: 3.868473018726633 msec\nrounds: 267"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 388.8153756884724,
            "unit": "iter/sec",
            "range": "stddev: 0.00010957230097457685",
            "extra": "mean: 2.5719147506173274 msec\nrounds: 405"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 517.960194055917,
            "unit": "iter/sec",
            "range": "stddev: 0.000032078454928432084",
            "extra": "mean: 1.9306502921960906 msec\nrounds: 551"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1428.4420081349372,
            "unit": "iter/sec",
            "range": "stddev: 0.00003573793354097367",
            "extra": "mean: 700.0634217595309 usec\nrounds: 1489"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.85048214313667,
            "unit": "iter/sec",
            "range": "stddev: 0.0007990624504891928",
            "extra": "mean: 43.7627527391302 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.994457526014564,
            "unit": "iter/sec",
            "range": "stddev: 0.00043416467188455874",
            "extra": "mean: 41.676291240000296 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 411.48794680404086,
            "unit": "iter/sec",
            "range": "stddev: 0.0001977926014851756",
            "extra": "mean: 2.4302048401826477 msec\nrounds: 438"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1013.8113300434611,
            "unit": "iter/sec",
            "range": "stddev: 0.000039794591579043793",
            "extra": "mean: 986.3768241346552 usec\nrounds: 1069"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1329.1567621816769,
            "unit": "iter/sec",
            "range": "stddev: 0.00004279557008946793",
            "extra": "mean: 752.3567034776249 usec\nrounds: 1639"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1193.530843891694,
            "unit": "iter/sec",
            "range": "stddev: 0.000023735475698482943",
            "extra": "mean: 837.8501528618594 usec\nrounds: 1485"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1741875740655,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 295.60848079931674,
            "unit": "iter/sec",
            "range": "stddev: 0.00008495929377711643",
            "extra": "mean: 3.3828528778877693 msec\nrounds: 303"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 452.8752709130364,
            "unit": "iter/sec",
            "range": "stddev: 0.000055966054723224046",
            "extra": "mean: 2.208113501061588 msec\nrounds: 471"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 573.1174417550039,
            "unit": "iter/sec",
            "range": "stddev: 0.00004556840041005077",
            "extra": "mean: 1.7448430760330615 msec\nrounds: 605"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1604.7426128659115,
            "unit": "iter/sec",
            "range": "stddev: 0.00007124957964471365",
            "extra": "mean: 623.152891923334 usec\nrounds: 1721"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 271.5947183584032,
            "unit": "iter/sec",
            "range": "stddev: 0.00007089953475811976",
            "extra": "mean: 3.681956725978651 msec\nrounds: 281"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 412.15499841254507,
            "unit": "iter/sec",
            "range": "stddev: 0.00006154589307895361",
            "extra": "mean: 2.42627167898387 msec\nrounds: 433"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 550.8233676250862,
            "unit": "iter/sec",
            "range": "stddev: 0.000045442869449512586",
            "extra": "mean: 1.8154640103806245 msec\nrounds: 578"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1472.5401868487381,
            "unit": "iter/sec",
            "range": "stddev: 0.000029221348712737184",
            "extra": "mean: 679.0986140351235 usec\nrounds: 1539"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.727522034773585,
            "unit": "iter/sec",
            "range": "stddev: 0.00023714239229687535",
            "extra": "mean: 42.14515104166638 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.766064068107532,
            "unit": "iter/sec",
            "range": "stddev: 0.00013533838079803935",
            "extra": "mean: 40.37783304000044 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 439.4236559979072,
            "unit": "iter/sec",
            "range": "stddev: 0.00004136322730387108",
            "extra": "mean: 2.275708160793152 msec\nrounds: 454"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1046.4519197060124,
            "unit": "iter/sec",
            "range": "stddev: 0.00002321903382326995",
            "extra": "mean: 955.6100774137216 usec\nrounds: 1098"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1322.3901844367338,
            "unit": "iter/sec",
            "range": "stddev: 0.000039367730007824736",
            "extra": "mean: 756.2064599155699 usec\nrounds: 1659"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1203.2736946154628,
            "unit": "iter/sec",
            "range": "stddev: 0.00004481145419839533",
            "extra": "mean: 831.0661194330986 usec\nrounds: 1482"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1742218851197,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 300.1827774198447,
            "unit": "iter/sec",
            "range": "stddev: 0.00004457706640871235",
            "extra": "mean: 3.33130370967742 msec\nrounds: 310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 454.36513928827765,
            "unit": "iter/sec",
            "range": "stddev: 0.00004909554505340607",
            "extra": "mean: 2.2008730721868552 msec\nrounds: 471"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 547.2366342241572,
            "unit": "iter/sec",
            "range": "stddev: 0.00016662598347125628",
            "extra": "mean: 1.8273630408858619 msec\nrounds: 587"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1575.1668022885342,
            "unit": "iter/sec",
            "range": "stddev: 0.00003952454694662518",
            "extra": "mean: 634.8533999999977 usec\nrounds: 1660"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 274.8158701848959,
            "unit": "iter/sec",
            "range": "stddev: 0.00007752125853696728",
            "extra": "mean: 3.6388000421052857 msec\nrounds: 285"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 400.269783691596,
            "unit": "iter/sec",
            "range": "stddev: 0.00020256530409313545",
            "extra": "mean: 2.4983149883991507 msec\nrounds: 431"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 551.3756236755947,
            "unit": "iter/sec",
            "range": "stddev: 0.00003633289895036759",
            "extra": "mean: 1.8136456474694573 msec\nrounds: 573"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1423.797904262604,
            "unit": "iter/sec",
            "range": "stddev: 0.000018953042166472513",
            "extra": "mean: 702.3468688963325 usec\nrounds: 1495"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.35609020357952,
            "unit": "iter/sec",
            "range": "stddev: 0.0006092700350707247",
            "extra": "mean: 42.81538524999965 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.662708215185795,
            "unit": "iter/sec",
            "range": "stddev: 0.0003239455341022793",
            "extra": "mean: 40.547047439999346 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 440.4125184893612,
            "unit": "iter/sec",
            "range": "stddev: 0.00004801161623925579",
            "extra": "mean: 2.2705984912283017 msec\nrounds: 456"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1029.6714806318025,
            "unit": "iter/sec",
            "range": "stddev: 0.00001948711788731923",
            "extra": "mean: 971.1835462184538 usec\nrounds: 1071"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1311.1670763542188,
            "unit": "iter/sec",
            "range": "stddev: 0.00008631806027098842",
            "extra": "mean: 762.6793091697832 usec\nrounds: 1614"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1201.2660457943275,
            "unit": "iter/sec",
            "range": "stddev: 0.000037822758396420925",
            "extra": "mean: 832.4550614753771 usec\nrounds: 1464"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1742393613330,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 341.85544278281435,
            "unit": "iter/sec",
            "range": "stddev: 0.00004927757744712632",
            "extra": "mean: 2.9252130428571657 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 438.7732024424156,
            "unit": "iter/sec",
            "range": "stddev: 0.00007268565333401217",
            "extra": "mean: 2.2790817543859454 msec\nrounds: 456"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 860.1401028966751,
            "unit": "iter/sec",
            "range": "stddev: 0.000053002419869145574",
            "extra": "mean: 1.1626012978959146 msec\nrounds: 903"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1599.866623476057,
            "unit": "iter/sec",
            "range": "stddev: 0.000030309125178163822",
            "extra": "mean: 625.0521045481174 usec\nrounds: 1693"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 302.97209974368343,
            "unit": "iter/sec",
            "range": "stddev: 0.0000781330799827757",
            "extra": "mean: 3.300633955555667 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 397.3339999997237,
            "unit": "iter/sec",
            "range": "stddev: 0.00008939813012753001",
            "extra": "mean: 2.516774300716011 msec\nrounds: 419"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 798.4886587806429,
            "unit": "iter/sec",
            "range": "stddev: 0.00003258538527684283",
            "extra": "mean: 1.2523659403341825 msec\nrounds: 838"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1457.2396389156575,
            "unit": "iter/sec",
            "range": "stddev: 0.000024859234186541043",
            "extra": "mean: 686.2289312580787 usec\nrounds: 1542"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.985501100381914,
            "unit": "iter/sec",
            "range": "stddev: 0.00020438482526565012",
            "extra": "mean: 41.6918535833332 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.39789382039149,
            "unit": "iter/sec",
            "range": "stddev: 0.00041594389788417245",
            "extra": "mean: 40.98714451999996 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 621.0460901494118,
            "unit": "iter/sec",
            "range": "stddev: 0.00008705902669860072",
            "extra": "mean: 1.610186451313813 msec\nrounds: 647"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1032.5293302212265,
            "unit": "iter/sec",
            "range": "stddev: 0.00003968739743497476",
            "extra": "mean: 968.4954903757971 usec\nrounds: 1091"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1357.9029375208759,
            "unit": "iter/sec",
            "range": "stddev: 0.00004959583467116284",
            "extra": "mean: 736.4296610372612 usec\nrounds: 1658"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1240.1457698623833,
            "unit": "iter/sec",
            "range": "stddev: 0.0000269047199956381",
            "extra": "mean: 806.3568205461589 usec\nrounds: 1538"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1742909324268,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 342.8524617928695,
            "unit": "iter/sec",
            "range": "stddev: 0.00008678614006215044",
            "extra": "mean: 2.916706488764076 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 440.4734099103375,
            "unit": "iter/sec",
            "range": "stddev: 0.00010018669671199192",
            "extra": "mean: 2.2702846017505562 msec\nrounds: 457"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 872.2825544649686,
            "unit": "iter/sec",
            "range": "stddev: 0.00007006246548981878",
            "extra": "mean: 1.1464175167567916 msec\nrounds: 925"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1651.8727070142888,
            "unit": "iter/sec",
            "range": "stddev: 0.000018866766815316704",
            "extra": "mean: 605.3735228832919 usec\nrounds: 1748"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 309.6617707256113,
            "unit": "iter/sec",
            "range": "stddev: 0.00004391783602482677",
            "extra": "mean: 3.2293298512656623 msec\nrounds: 316"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 402.4101685056888,
            "unit": "iter/sec",
            "range": "stddev: 0.00007703167185665163",
            "extra": "mean: 2.485026667475634 msec\nrounds: 412"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 823.5877790084834,
            "unit": "iter/sec",
            "range": "stddev: 0.00004092117162225117",
            "extra": "mean: 1.2141996584795116 msec\nrounds: 855"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1501.5948075440042,
            "unit": "iter/sec",
            "range": "stddev: 0.000033338617313134893",
            "extra": "mean: 665.9586161166817 usec\nrounds: 1576"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.743054281097344,
            "unit": "iter/sec",
            "range": "stddev: 0.0003249939272592437",
            "extra": "mean: 42.11758050000055 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.466539787237398,
            "unit": "iter/sec",
            "range": "stddev: 0.00017316880701910505",
            "extra": "mean: 40.87214655999844 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 635.4083932919174,
            "unit": "iter/sec",
            "range": "stddev: 0.000051308938428088286",
            "extra": "mean: 1.573790983180455 msec\nrounds: 654"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1077.166822565871,
            "unit": "iter/sec",
            "range": "stddev: 0.00003718626981078527",
            "extra": "mean: 928.3613076922892 usec\nrounds: 1131"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1418.3268525578135,
            "unit": "iter/sec",
            "range": "stddev: 0.000039724367572373615",
            "extra": "mean: 705.0561005713162 usec\nrounds: 1750"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1263.5887673938712,
            "unit": "iter/sec",
            "range": "stddev: 0.00003730998305841068",
            "extra": "mean: 791.3967152956589 usec\nrounds: 1556"
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
        "date": 1743487204641,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 342.75490220081605,
            "unit": "iter/sec",
            "range": "stddev: 0.00004099825700535924",
            "extra": "mean: 2.917536681690148 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 442.02781465150304,
            "unit": "iter/sec",
            "range": "stddev: 0.00005067018861163507",
            "extra": "mean: 2.262301074398237 msec\nrounds: 457"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 890.3672112328925,
            "unit": "iter/sec",
            "range": "stddev: 0.000028913091940067707",
            "extra": "mean: 1.1231321048034764 msec\nrounds: 916"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1636.3514554232106,
            "unit": "iter/sec",
            "range": "stddev: 0.000019303969767612867",
            "extra": "mean: 611.1156601998862 usec\nrounds: 1701"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 310.2998222306051,
            "unit": "iter/sec",
            "range": "stddev: 0.00007648713828734309",
            "extra": "mean: 3.222689567823314 msec\nrounds: 317"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 398.2058161065984,
            "unit": "iter/sec",
            "range": "stddev: 0.00007587780710999653",
            "extra": "mean: 2.5112641743341673 msec\nrounds: 413"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 836.9678614782034,
            "unit": "iter/sec",
            "range": "stddev: 0.00004203866505626948",
            "extra": "mean: 1.1947890068728073 msec\nrounds: 873"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1463.8667932655173,
            "unit": "iter/sec",
            "range": "stddev: 0.0000200101912609203",
            "extra": "mean: 683.1222653594405 usec\nrounds: 1530"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.710471363054143,
            "unit": "iter/sec",
            "range": "stddev: 0.0003104310905438812",
            "extra": "mean: 42.175458458333665 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.175975813920825,
            "unit": "iter/sec",
            "range": "stddev: 0.00012387440952994777",
            "extra": "mean: 41.36337691999955 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 641.4680895283747,
            "unit": "iter/sec",
            "range": "stddev: 0.000025263098678314054",
            "extra": "mean: 1.5589240000001061 msec\nrounds: 661"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1056.3885050388747,
            "unit": "iter/sec",
            "range": "stddev: 0.00002142381042992024",
            "extra": "mean: 946.6214325791063 usec\nrounds: 1105"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1410.4489698066295,
            "unit": "iter/sec",
            "range": "stddev: 0.000040379389688345985",
            "extra": "mean: 708.9941014577072 usec\nrounds: 1715"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1257.3472014852061,
            "unit": "iter/sec",
            "range": "stddev: 0.000040162459052303954",
            "extra": "mean: 795.3252680077373 usec\nrounds: 1541"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1743488362922,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 339.5204091295782,
            "unit": "iter/sec",
            "range": "stddev: 0.00003576677539215268",
            "extra": "mean: 2.9453310408163103 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 442.9722068525008,
            "unit": "iter/sec",
            "range": "stddev: 0.000040879374423433494",
            "extra": "mean: 2.2574779738562163 msec\nrounds: 459"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 761.6608957797511,
            "unit": "iter/sec",
            "range": "stddev: 0.00013017237846635956",
            "extra": "mean: 1.312920232009875 msec\nrounds: 806"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1610.677647989007,
            "unit": "iter/sec",
            "range": "stddev: 0.00002675891397001504",
            "extra": "mean: 620.8566942296235 usec\nrounds: 1681"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 295.1516578784685,
            "unit": "iter/sec",
            "range": "stddev: 0.000558164453882363",
            "extra": "mean: 3.3880887106917745 msec\nrounds: 318"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 402.0726472219414,
            "unit": "iter/sec",
            "range": "stddev: 0.00017724302625600878",
            "extra": "mean: 2.487112731764632 msec\nrounds: 425"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 801.9439052731835,
            "unit": "iter/sec",
            "range": "stddev: 0.0001407462460043998",
            "extra": "mean: 1.2469700105262953 msec\nrounds: 855"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1470.207926257488,
            "unit": "iter/sec",
            "range": "stddev: 0.000024875375526557436",
            "extra": "mean: 680.1759003881624 usec\nrounds: 1546"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.85515704467636,
            "unit": "iter/sec",
            "range": "stddev: 0.0004094249371781199",
            "extra": "mean: 41.919656958333256 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.400542788317658,
            "unit": "iter/sec",
            "range": "stddev: 0.000420380328068114",
            "extra": "mean: 40.98269487999971 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 633.5559570527025,
            "unit": "iter/sec",
            "range": "stddev: 0.00003314269862494557",
            "extra": "mean: 1.5783925458644448 msec\nrounds: 665"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1037.4170581383348,
            "unit": "iter/sec",
            "range": "stddev: 0.00004868035000746605",
            "extra": "mean: 963.9324822694929 usec\nrounds: 1128"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1353.1312977753446,
            "unit": "iter/sec",
            "range": "stddev: 0.000041340063150502386",
            "extra": "mean: 739.026583483864 usec\nrounds: 1659"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1250.6127116061332,
            "unit": "iter/sec",
            "range": "stddev: 0.000048270010412130986",
            "extra": "mean: 799.6080566906464 usec\nrounds: 1517"
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
        "date": 1743488565295,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 340.72771882067826,
            "unit": "iter/sec",
            "range": "stddev: 0.0000600934336473851",
            "extra": "mean: 2.934894770114933 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 444.4983450605083,
            "unit": "iter/sec",
            "range": "stddev: 0.000050788972891368394",
            "extra": "mean: 2.2497271612200778 msec\nrounds: 459"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 863.5093105897695,
            "unit": "iter/sec",
            "range": "stddev: 0.00003191329531837125",
            "extra": "mean: 1.1580651044943666 msec\nrounds: 890"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1639.755752788857,
            "unit": "iter/sec",
            "range": "stddev: 0.000028973728887674886",
            "extra": "mean: 609.8469228110492 usec\nrounds: 1736"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 308.3444282885489,
            "unit": "iter/sec",
            "range": "stddev: 0.00005827844656232277",
            "extra": "mean: 3.2431265437499635 msec\nrounds: 320"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 398.2930797294215,
            "unit": "iter/sec",
            "range": "stddev: 0.00014868350378796367",
            "extra": "mean: 2.5107139714286406 msec\nrounds: 420"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 820.0926328815622,
            "unit": "iter/sec",
            "range": "stddev: 0.00004995443846211753",
            "extra": "mean: 1.219374446135794 msec\nrounds: 854"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1475.6448658883849,
            "unit": "iter/sec",
            "range": "stddev: 0.000044680469752991855",
            "extra": "mean: 677.6698263358701 usec\nrounds: 1572"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.79222768611504,
            "unit": "iter/sec",
            "range": "stddev: 0.0003843807349188738",
            "extra": "mean: 42.03053254166663 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.464274778930374,
            "unit": "iter/sec",
            "range": "stddev: 0.00009225305193604741",
            "extra": "mean: 40.87593067999876 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 630.3915937254786,
            "unit": "iter/sec",
            "range": "stddev: 0.00005047502203505817",
            "extra": "mean: 1.5863155694862858 msec\nrounds: 662"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1059.5685439540275,
            "unit": "iter/sec",
            "range": "stddev: 0.00004882643271317459",
            "extra": "mean: 943.7803771224337 usec\nrounds: 1119"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1371.7460418125236,
            "unit": "iter/sec",
            "range": "stddev: 0.000043632597376618514",
            "extra": "mean: 728.9979117990923 usec\nrounds: 1712"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1270.6820744681086,
            "unit": "iter/sec",
            "range": "stddev: 0.00003105429373295265",
            "extra": "mean: 786.9789147836899 usec\nrounds: 1549"
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
        "date": 1743488848731,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 347.8271120954942,
            "unit": "iter/sec",
            "range": "stddev: 0.00009225689748566516",
            "extra": "mean: 2.8749915266106543 msec\nrounds: 357"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 451.62657074614015,
            "unit": "iter/sec",
            "range": "stddev: 0.00005639970435336557",
            "extra": "mean: 2.2142187036247285 msec\nrounds: 469"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 870.7021761087079,
            "unit": "iter/sec",
            "range": "stddev: 0.000043477545208629346",
            "extra": "mean: 1.1484983355263247 msec\nrounds: 912"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1641.282240618632,
            "unit": "iter/sec",
            "range": "stddev: 0.000015105576898350045",
            "extra": "mean: 609.2797297453727 usec\nrounds: 1728"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 310.8892428252355,
            "unit": "iter/sec",
            "range": "stddev: 0.00023978176752797661",
            "extra": "mean: 3.2165796118013126 msec\nrounds: 322"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 410.225173685988,
            "unit": "iter/sec",
            "range": "stddev: 0.00007494319634484357",
            "extra": "mean: 2.43768560328641 msec\nrounds: 426"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 846.8722442095985,
            "unit": "iter/sec",
            "range": "stddev: 0.00002286696995866591",
            "extra": "mean: 1.180815650574684 msec\nrounds: 870"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1471.3971593609397,
            "unit": "iter/sec",
            "range": "stddev: 0.000025400673796040024",
            "extra": "mean: 679.6261591495271 usec\nrounds: 1552"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.110422130295404,
            "unit": "iter/sec",
            "range": "stddev: 0.0003325819019042244",
            "extra": "mean: 41.47583955999977 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.428998566260738,
            "unit": "iter/sec",
            "range": "stddev: 0.0007390642507365108",
            "extra": "mean: 40.9349567600006 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 638.5104387366831,
            "unit": "iter/sec",
            "range": "stddev: 0.00006644454151918913",
            "extra": "mean: 1.5661451079461404 msec\nrounds: 667"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1053.5076115094903,
            "unit": "iter/sec",
            "range": "stddev: 0.0000398886439186996",
            "extra": "mean: 949.210038043462 usec\nrounds: 1104"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1394.2687688659664,
            "unit": "iter/sec",
            "range": "stddev: 0.000039906726754453635",
            "extra": "mean: 717.2218314933308 usec\nrounds: 1721"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1260.694993236599,
            "unit": "iter/sec",
            "range": "stddev: 0.00003825865407022219",
            "extra": "mean: 793.2132715405545 usec\nrounds: 1532"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1743490732666,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 341.9699350555267,
            "unit": "iter/sec",
            "range": "stddev: 0.00003741893659369578",
            "extra": "mean: 2.9242336752136615 msec\nrounds: 351"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 455.5428747483709,
            "unit": "iter/sec",
            "range": "stddev: 0.00004116032869015247",
            "extra": "mean: 2.19518305615552 msec\nrounds: 463"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 851.8163772295537,
            "unit": "iter/sec",
            "range": "stddev: 0.0001917364003996417",
            "extra": "mean: 1.1739619320919827 msec\nrounds: 913"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1598.3735087287605,
            "unit": "iter/sec",
            "range": "stddev: 0.000017571503686077183",
            "extra": "mean: 625.6359946776979 usec\nrounds: 1691"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 311.2102938970248,
            "unit": "iter/sec",
            "range": "stddev: 0.00008397808613286535",
            "extra": "mean: 3.2132613207546603 msec\nrounds: 318"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 402.3203012961534,
            "unit": "iter/sec",
            "range": "stddev: 0.00010723174407558893",
            "extra": "mean: 2.4855817535886326 msec\nrounds: 418"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 818.7815360442498,
            "unit": "iter/sec",
            "range": "stddev: 0.00005413993355808708",
            "extra": "mean: 1.2213270035756603 msec\nrounds: 839"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1456.2996005117502,
            "unit": "iter/sec",
            "range": "stddev: 0.000019531948522575005",
            "extra": "mean: 686.6718906251128 usec\nrounds: 1536"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.04590247229323,
            "unit": "iter/sec",
            "range": "stddev: 0.0015874476513462847",
            "extra": "mean: 43.391661541666366 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.351154567107997,
            "unit": "iter/sec",
            "range": "stddev: 0.004275953331497252",
            "extra": "mean: 42.824434959998996 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 634.2166456833637,
            "unit": "iter/sec",
            "range": "stddev: 0.00004279211375659146",
            "extra": "mean: 1.5767482717557932 msec\nrounds: 655"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1050.9124296375005,
            "unit": "iter/sec",
            "range": "stddev: 0.00008255796160481341",
            "extra": "mean: 951.5540703471723 usec\nrounds: 1123"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1373.8254718158735,
            "unit": "iter/sec",
            "range": "stddev: 0.00005310298550714426",
            "extra": "mean: 727.8944964371898 usec\nrounds: 1684"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1216.2320804274339,
            "unit": "iter/sec",
            "range": "stddev: 0.00008813848313869515",
            "extra": "mean: 822.2114973719152 usec\nrounds: 1522"
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
        "date": 1743493407455,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 344.72271898405137,
            "unit": "iter/sec",
            "range": "stddev: 0.00016845667286277276",
            "extra": "mean: 2.9008822016348303 msec\nrounds: 367"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 451.20509631798956,
            "unit": "iter/sec",
            "range": "stddev: 0.00006218833183622596",
            "extra": "mean: 2.2162870237069394 msec\nrounds: 464"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 836.5918427881572,
            "unit": "iter/sec",
            "range": "stddev: 0.00007175367430951113",
            "extra": "mean: 1.1953260226244176 msec\nrounds: 884"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1606.879925375944,
            "unit": "iter/sec",
            "range": "stddev: 0.000024491166932603465",
            "extra": "mean: 622.324035671826 usec\nrounds: 1682"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 299.5963582243137,
            "unit": "iter/sec",
            "range": "stddev: 0.0003960496379525394",
            "extra": "mean: 3.337824284403619 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 401.89240928432326,
            "unit": "iter/sec",
            "range": "stddev: 0.000048027429146903485",
            "extra": "mean: 2.488228134939814 msec\nrounds: 415"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 811.8390275631998,
            "unit": "iter/sec",
            "range": "stddev: 0.00007398551436117711",
            "extra": "mean: 1.2317712822966649 msec\nrounds: 836"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1441.2619214615038,
            "unit": "iter/sec",
            "range": "stddev: 0.000045311450362446514",
            "extra": "mean: 693.836411764737 usec\nrounds: 1513"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.01359147665334,
            "unit": "iter/sec",
            "range": "stddev: 0.0001493656529596322",
            "extra": "mean: 41.64308370833355 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.236519885399172,
            "unit": "iter/sec",
            "range": "stddev: 0.0011956363671444827",
            "extra": "mean: 41.26004908000141 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 623.54194108639,
            "unit": "iter/sec",
            "range": "stddev: 0.00007742039857790874",
            "extra": "mean: 1.603741359013816 msec\nrounds: 649"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1062.0017367696612,
            "unit": "iter/sec",
            "range": "stddev: 0.000020616204041586975",
            "extra": "mean: 941.6180457875195 usec\nrounds: 1092"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1365.0626814499471,
            "unit": "iter/sec",
            "range": "stddev: 0.00003525616775844975",
            "extra": "mean: 732.5670927710195 usec\nrounds: 1660"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1226.2841760098909,
            "unit": "iter/sec",
            "range": "stddev: 0.000023126468494527815",
            "extra": "mean: 815.4716659998181 usec\nrounds: 1500"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1743494441818,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 346.2732306968125,
            "unit": "iter/sec",
            "range": "stddev: 0.00005258472903277626",
            "extra": "mean: 2.887892887323921 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 444.41848082590417,
            "unit": "iter/sec",
            "range": "stddev: 0.00010179184727823599",
            "extra": "mean: 2.250131448497837 msec\nrounds: 466"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 881.1901001015789,
            "unit": "iter/sec",
            "range": "stddev: 0.00003320342056516461",
            "extra": "mean: 1.1348289090909276 msec\nrounds: 913"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1617.6227108522648,
            "unit": "iter/sec",
            "range": "stddev: 0.00003127633578543752",
            "extra": "mean: 618.1911228689027 usec\nrounds: 1701"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 310.90576341162773,
            "unit": "iter/sec",
            "range": "stddev: 0.00007378552560172424",
            "extra": "mean: 3.2164086925466124 msec\nrounds: 322"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 400.8687449706578,
            "unit": "iter/sec",
            "range": "stddev: 0.00006546707736197234",
            "extra": "mean: 2.4945821108432797 msec\nrounds: 415"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 838.8921393983784,
            "unit": "iter/sec",
            "range": "stddev: 0.00003367897131747159",
            "extra": "mean: 1.1920483612078687 msec\nrounds: 861"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1420.5480798919598,
            "unit": "iter/sec",
            "range": "stddev: 0.00003259153216103298",
            "extra": "mean: 703.9536458886033 usec\nrounds: 1508"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.70883869863179,
            "unit": "iter/sec",
            "range": "stddev: 0.00024234513872629953",
            "extra": "mean: 42.17836279166676 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.42496216321776,
            "unit": "iter/sec",
            "range": "stddev: 0.0002057673965407037",
            "extra": "mean: 40.94172156000013 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 619.103719158074,
            "unit": "iter/sec",
            "range": "stddev: 0.00011964446346852236",
            "extra": "mean: 1.6152382372373906 msec\nrounds: 666"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1065.1118098057275,
            "unit": "iter/sec",
            "range": "stddev: 0.000038828168314653205",
            "extra": "mean: 938.8685683453236 usec\nrounds: 1112"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1395.665181261612,
            "unit": "iter/sec",
            "range": "stddev: 0.00004104963290178721",
            "extra": "mean: 716.5042256739899 usec\nrounds: 1706"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1220.5140668061683,
            "unit": "iter/sec",
            "range": "stddev: 0.000030015466558853275",
            "extra": "mean: 819.3268944591456 usec\nrounds: 1516"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1743495412797,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 347.52188186534033,
            "unit": "iter/sec",
            "range": "stddev: 0.000057436408614405885",
            "extra": "mean: 2.877516646239518 msec\nrounds: 359"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 455.00795641760214,
            "unit": "iter/sec",
            "range": "stddev: 0.00006340605889039235",
            "extra": "mean: 2.1977637663157896 msec\nrounds: 475"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 883.2158691438395,
            "unit": "iter/sec",
            "range": "stddev: 0.00005245335144338968",
            "extra": "mean: 1.1322260332226222 msec\nrounds: 903"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1651.4865459978537,
            "unit": "iter/sec",
            "range": "stddev: 0.000026304308380159883",
            "extra": "mean: 605.5150751444872 usec\nrounds: 1730"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 313.0095983490767,
            "unit": "iter/sec",
            "range": "stddev: 0.00008255227606671532",
            "extra": "mean: 3.1947902085889814 msec\nrounds: 326"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 405.34149931400447,
            "unit": "iter/sec",
            "range": "stddev: 0.00009442385339863564",
            "extra": "mean: 2.4670555610328306 msec\nrounds: 426"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 832.8403983213124,
            "unit": "iter/sec",
            "range": "stddev: 0.00002381721213474751",
            "extra": "mean: 1.2007102465437764 msec\nrounds: 868"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1488.2670527326197,
            "unit": "iter/sec",
            "range": "stddev: 0.000019204560480804652",
            "extra": "mean: 671.9224202161107 usec\nrounds: 1573"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.50899275247469,
            "unit": "iter/sec",
            "range": "stddev: 0.00023879653571738847",
            "extra": "mean: 42.53691387499936 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.939776806358125,
            "unit": "iter/sec",
            "range": "stddev: 0.00034629318528326585",
            "extra": "mean: 41.7714838400002 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 628.6007148837779,
            "unit": "iter/sec",
            "range": "stddev: 0.0000574915659644799",
            "extra": "mean: 1.5908349709479572 msec\nrounds: 654"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1082.2600362205021,
            "unit": "iter/sec",
            "range": "stddev: 0.000025681614834075044",
            "extra": "mean: 923.992355379052 usec\nrounds: 1134"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1389.3082267076147,
            "unit": "iter/sec",
            "range": "stddev: 0.00004004734097713845",
            "extra": "mean: 719.7826808884606 usec\nrounds: 1711"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1246.34080651052,
            "unit": "iter/sec",
            "range": "stddev: 0.000027317158947995553",
            "extra": "mean: 802.3487594856016 usec\nrounds: 1555"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1743496491973,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 337.934174972555,
            "unit": "iter/sec",
            "range": "stddev: 0.00027636632723690793",
            "extra": "mean: 2.9591561731843607 msec\nrounds: 358"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 448.9273390982046,
            "unit": "iter/sec",
            "range": "stddev: 0.000040400396512304245",
            "extra": "mean: 2.227531969892451 msec\nrounds: 465"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 879.1640399565019,
            "unit": "iter/sec",
            "range": "stddev: 0.0000336126638354422",
            "extra": "mean: 1.1374441566666862 msec\nrounds: 900"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1653.3853001629175,
            "unit": "iter/sec",
            "range": "stddev: 0.000020710438593944556",
            "extra": "mean: 604.8196992567094 usec\nrounds: 1749"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 308.7261436866644,
            "unit": "iter/sec",
            "range": "stddev: 0.00004071272496843757",
            "extra": "mean: 3.2391166749225184 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 401.3217405450257,
            "unit": "iter/sec",
            "range": "stddev: 0.00007326817750823961",
            "extra": "mean: 2.4917663285371066 msec\nrounds: 417"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 823.6015829935374,
            "unit": "iter/sec",
            "range": "stddev: 0.00004743467074823825",
            "extra": "mean: 1.2141793078703282 msec\nrounds: 864"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1449.1203702699054,
            "unit": "iter/sec",
            "range": "stddev: 0.000065413277465757",
            "extra": "mean: 690.0737996069611 usec\nrounds: 1527"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.059008085591163,
            "unit": "iter/sec",
            "range": "stddev: 0.00047513055770058253",
            "extra": "mean: 41.564473333333126 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.476543993759105,
            "unit": "iter/sec",
            "range": "stddev: 0.00043341944859851493",
            "extra": "mean: 40.85544104000036 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 623.3878473563675,
            "unit": "iter/sec",
            "range": "stddev: 0.000047842119972951116",
            "extra": "mean: 1.604137783950635 msec\nrounds: 648"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1042.2236029377007,
            "unit": "iter/sec",
            "range": "stddev: 0.00002270744248124697",
            "extra": "mean: 959.4870018116213 usec\nrounds: 1104"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1382.4725275272497,
            "unit": "iter/sec",
            "range": "stddev: 0.00003880597426306073",
            "extra": "mean: 723.3416795548505 usec\nrounds: 1707"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1245.8851452693593,
            "unit": "iter/sec",
            "range": "stddev: 0.000026209696582417567",
            "extra": "mean: 802.6422048589405 usec\nrounds: 1523"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1743515544776,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 343.24872088774174,
            "unit": "iter/sec",
            "range": "stddev: 0.00007963088372163711",
            "extra": "mean: 2.9133393342696428 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 434.0758708154553,
            "unit": "iter/sec",
            "range": "stddev: 0.000057732827269955754",
            "extra": "mean: 2.303744730434795 msec\nrounds: 460"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 869.426188300495,
            "unit": "iter/sec",
            "range": "stddev: 0.0000744645112712457",
            "extra": "mean: 1.150183895374423 msec\nrounds: 908"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1605.4465040855998,
            "unit": "iter/sec",
            "range": "stddev: 0.000024196937709599727",
            "extra": "mean: 622.879677058789 usec\nrounds: 1700"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 294.4097280564221,
            "unit": "iter/sec",
            "range": "stddev: 0.00043371588521185433",
            "extra": "mean: 3.3966268934169017 msec\nrounds: 319"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 399.5856125946446,
            "unit": "iter/sec",
            "range": "stddev: 0.00007857821022109065",
            "extra": "mean: 2.502592607142839 msec\nrounds: 420"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 799.4590801066324,
            "unit": "iter/sec",
            "range": "stddev: 0.00007002691899253837",
            "extra": "mean: 1.2508457591933526 msec\nrounds: 843"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1442.1450425046469,
            "unit": "iter/sec",
            "range": "stddev: 0.00003595500863651263",
            "extra": "mean: 693.4115297191253 usec\nrounds: 1531"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.566417879658964,
            "unit": "iter/sec",
            "range": "stddev: 0.00015621771233683302",
            "extra": "mean: 42.43326266666673 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.14675196620749,
            "unit": "iter/sec",
            "range": "stddev: 0.0011149706580819026",
            "extra": "mean: 41.41343736000039 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 637.5412429232176,
            "unit": "iter/sec",
            "range": "stddev: 0.000045581607140207395",
            "extra": "mean: 1.5685259755350998 msec\nrounds: 654"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1030.336547718235,
            "unit": "iter/sec",
            "range": "stddev: 0.00005060873704674586",
            "extra": "mean: 970.5566615244139 usec\nrounds: 1102"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1331.9571873891846,
            "unit": "iter/sec",
            "range": "stddev: 0.00004690688140127532",
            "extra": "mean: 750.7748818564767 usec\nrounds: 1659"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1207.0141502445542,
            "unit": "iter/sec",
            "range": "stddev: 0.000029421627833521864",
            "extra": "mean: 828.4907014531595 usec\nrounds: 1514"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "916c68b0812c0f4bb6a92f3c7fd0065a425c2e75",
          "message": "Merge pull request #1607 from TeoZosa/dependabot/uv/tox-4.25.0",
          "timestamp": "2025-04-03T01:39:25Z",
          "tree_id": "69e8901d7071b465b1e37caf9a7cae11b4213c35",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/916c68b0812c0f4bb6a92f3c7fd0065a425c2e75"
        },
        "date": 1743644454762,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 337.0362752541801,
            "unit": "iter/sec",
            "range": "stddev: 0.0003354516313120007",
            "extra": "mean: 2.9670396732394386 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 441.953198682483,
            "unit": "iter/sec",
            "range": "stddev: 0.00003917894179457465",
            "extra": "mean: 2.2626830238611766 msec\nrounds: 461"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 857.2288015158043,
            "unit": "iter/sec",
            "range": "stddev: 0.00003551650776925672",
            "extra": "mean: 1.1665496985539205 msec\nrounds: 899"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1612.118835674601,
            "unit": "iter/sec",
            "range": "stddev: 0.000021176081999247445",
            "extra": "mean: 620.3016662735931 usec\nrounds: 1696"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 298.8723317879248,
            "unit": "iter/sec",
            "range": "stddev: 0.0003784078120560992",
            "extra": "mean: 3.3459102554517646 msec\nrounds: 321"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 405.5627935578514,
            "unit": "iter/sec",
            "range": "stddev: 0.00004760658275423397",
            "extra": "mean: 2.4657094188235864 msec\nrounds: 425"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 815.7463259336959,
            "unit": "iter/sec",
            "range": "stddev: 0.00004408000748647652",
            "extra": "mean: 1.225871288914981 msec\nrounds: 848"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1441.3152618772137,
            "unit": "iter/sec",
            "range": "stddev: 0.00002170377416497979",
            "extra": "mean: 693.8107341606644 usec\nrounds: 1531"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.826794004029942,
            "unit": "iter/sec",
            "range": "stddev: 0.00016306609189946226",
            "extra": "mean: 41.96955745833305 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.470355621129706,
            "unit": "iter/sec",
            "range": "stddev: 0.0005189449248404663",
            "extra": "mean: 40.86577308000045 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 621.329934508699,
            "unit": "iter/sec",
            "range": "stddev: 0.00009516625962186691",
            "extra": "mean: 1.609450864122175 msec\nrounds: 655"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1041.261274297042,
            "unit": "iter/sec",
            "range": "stddev: 0.000020532608878770786",
            "extra": "mean: 960.3737550645993 usec\nrounds: 1086"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1333.2378782647252,
            "unit": "iter/sec",
            "range": "stddev: 0.00004086298379112089",
            "extra": "mean: 750.0536973203531 usec\nrounds: 1642"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1219.2927174763786,
            "unit": "iter/sec",
            "range": "stddev: 0.000023880264352290565",
            "extra": "mean: 820.1476033333013 usec\nrounds: 1500"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2b3bed2fe2c3369dd9549187ed45e888b2f69823",
          "message": "Merge pull request #1608 from TeoZosa/dependabot/uv/pytest-cov-6.1.1",
          "timestamp": "2025-04-07T15:10:54Z",
          "tree_id": "a913db5120c705545dd8bb9f5bc883a0f354787b",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/2b3bed2fe2c3369dd9549187ed45e888b2f69823"
        },
        "date": 1744038748219,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 347.7496884531896,
            "unit": "iter/sec",
            "range": "stddev: 0.00007747954211519915",
            "extra": "mean: 2.875631620111744 msec\nrounds: 358"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 439.63615209610583,
            "unit": "iter/sec",
            "range": "stddev: 0.00008802055086636256",
            "extra": "mean: 2.27460820779224 msec\nrounds: 462"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 837.4347005324254,
            "unit": "iter/sec",
            "range": "stddev: 0.00006320972527924532",
            "extra": "mean: 1.1941229559322282 msec\nrounds: 885"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1574.3065598037938,
            "unit": "iter/sec",
            "range": "stddev: 0.00011506090330915393",
            "extra": "mean: 635.200300584805 usec\nrounds: 1710"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 289.618077146584,
            "unit": "iter/sec",
            "range": "stddev: 0.0002579045478445588",
            "extra": "mean: 3.4528231450617333 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 396.91792807007425,
            "unit": "iter/sec",
            "range": "stddev: 0.00005256066598080548",
            "extra": "mean: 2.519412526570113 msec\nrounds: 414"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 759.2648574388883,
            "unit": "iter/sec",
            "range": "stddev: 0.0000649386496128627",
            "extra": "mean: 1.3170634597433453 msec\nrounds: 857"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1456.5816089687894,
            "unit": "iter/sec",
            "range": "stddev: 0.000017819062379717084",
            "extra": "mean: 686.5389442256972 usec\nrounds: 1524"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.865885595835003,
            "unit": "iter/sec",
            "range": "stddev: 0.00084320089659798",
            "extra": "mean: 43.73327224999975 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.690016887112478,
            "unit": "iter/sec",
            "range": "stddev: 0.00043242637680129397",
            "extra": "mean: 42.21187366666701 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 634.167646952001,
            "unit": "iter/sec",
            "range": "stddev: 0.00007819346185547174",
            "extra": "mean: 1.5768700986344835 msec\nrounds: 659"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1058.222837287967,
            "unit": "iter/sec",
            "range": "stddev: 0.0000376196665441438",
            "extra": "mean: 944.9805511311952 usec\nrounds: 1105"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1384.458767873963,
            "unit": "iter/sec",
            "range": "stddev: 0.00005078798604279027",
            "extra": "mean: 722.3039235293694 usec\nrounds: 1700"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1243.9192048298191,
            "unit": "iter/sec",
            "range": "stddev: 0.00003539986284401939",
            "extra": "mean: 803.9107332029737 usec\nrounds: 1533"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "36ad22606e7bfdf8defe4524f914d1fded478751",
          "message": "Merge pull request #1609 from TeoZosa/dependabot/github_actions/codecov/codecov-action-5.4.2",
          "timestamp": "2025-04-15T14:17:29Z",
          "tree_id": "1cd50bc9956ee0a8a5471baf52ca96e2d615d5de",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/36ad22606e7bfdf8defe4524f914d1fded478751"
        },
        "date": 1744726745055,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 292.93166710529835,
            "unit": "iter/sec",
            "range": "stddev: 0.000162957120769403",
            "extra": "mean: 3.4137654350648816 msec\nrounds: 308"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 437.49361735621096,
            "unit": "iter/sec",
            "range": "stddev: 0.00014069586578637584",
            "extra": "mean: 2.285747632258122 msec\nrounds: 465"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 563.461582642292,
            "unit": "iter/sec",
            "range": "stddev: 0.00006914997075169048",
            "extra": "mean: 1.774743888146923 msec\nrounds: 599"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1603.5050849954337,
            "unit": "iter/sec",
            "range": "stddev: 0.00004296256610792067",
            "extra": "mean: 623.6338190364065 usec\nrounds: 1702"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 266.7477167769899,
            "unit": "iter/sec",
            "range": "stddev: 0.0001601829034383968",
            "extra": "mean: 3.7488605791367804 msec\nrounds: 278"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 397.11052863697415,
            "unit": "iter/sec",
            "range": "stddev: 0.0000923466223939878",
            "extra": "mean: 2.518190599056537 msec\nrounds: 424"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 538.513158680327,
            "unit": "iter/sec",
            "range": "stddev: 0.00008155301910794084",
            "extra": "mean: 1.8569648371278176 msec\nrounds: 571"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1452.228950249414,
            "unit": "iter/sec",
            "range": "stddev: 0.00003255470522594326",
            "extra": "mean: 688.5966567656252 usec\nrounds: 1515"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.14876928892919,
            "unit": "iter/sec",
            "range": "stddev: 0.0006072539137249668",
            "extra": "mean: 43.19884083333303 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.480222117162565,
            "unit": "iter/sec",
            "range": "stddev: 0.0005681346989745773",
            "extra": "mean: 40.84930256000092 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 433.47279491025023,
            "unit": "iter/sec",
            "range": "stddev: 0.00012108214365611671",
            "extra": "mean: 2.306949851851829 msec\nrounds: 459"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1045.9975651646153,
            "unit": "iter/sec",
            "range": "stddev: 0.00004809157493806476",
            "extra": "mean: 956.0251699463789 usec\nrounds: 1118"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1373.728526462509,
            "unit": "iter/sec",
            "range": "stddev: 0.000054115050126824627",
            "extra": "mean: 727.945864657191 usec\nrounds: 1692"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1240.913421582357,
            "unit": "iter/sec",
            "range": "stddev: 0.00004747420673633031",
            "extra": "mean: 805.8579934809998 usec\nrounds: 1534"
          }
        ]
      }
    ]
  }
}