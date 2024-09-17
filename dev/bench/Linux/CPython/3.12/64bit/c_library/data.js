window.BENCHMARK_DATA = {
  "lastUpdate": 1726579850161,
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
      }
    ]
  }
}