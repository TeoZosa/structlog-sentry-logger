window.BENCHMARK_DATA = {
  "lastUpdate": 1729000139278,
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
          "id": "9f5020048a36caf9b2b676c6a1aaca33f71473ea",
          "message": "Merge pull request #1425 from TeoZosa/build/add-python-313-support\n\n[WIP]➕ Add Python 3.13 support",
          "timestamp": "2024-10-15T16:35:53+09:00",
          "tree_id": "22c189e4e0a9077558e411f3a2f6ab1636238eb9",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/9f5020048a36caf9b2b676c6a1aaca33f71473ea"
        },
        "date": 1728978227148,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 761.5364673349465,
            "unit": "iter/sec",
            "range": "stddev: 0.00014855211520840646",
            "extra": "mean: 1.3131347517730494 msec\nrounds: 846"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1124.5415162665256,
            "unit": "iter/sec",
            "range": "stddev: 0.000059805778079249035",
            "extra": "mean: 889.2512953367849 usec\nrounds: 1158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1369.471686969051,
            "unit": "iter/sec",
            "range": "stddev: 0.000022667465720552202",
            "extra": "mean: 730.20859760396 usec\nrounds: 1419"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2628.1170291396825,
            "unit": "iter/sec",
            "range": "stddev: 0.00000807687525385678",
            "extra": "mean: 380.50055949272223 usec\nrounds: 2681"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 747.5100957949301,
            "unit": "iter/sec",
            "range": "stddev: 0.00004852484314804471",
            "extra": "mean: 1.3377745740498166 msec\nrounds: 763"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1004.3378013990563,
            "unit": "iter/sec",
            "range": "stddev: 0.000032041923400641324",
            "extra": "mean: 995.6809338521226 usec\nrounds: 1028"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1304.3830590321954,
            "unit": "iter/sec",
            "range": "stddev: 0.00004440679789193295",
            "extra": "mean: 766.6459580837883 usec\nrounds: 1336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2353.8699119531766,
            "unit": "iter/sec",
            "range": "stddev: 0.000027040076687343337",
            "extra": "mean: 424.8323133414911 usec\nrounds: 2451"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.00863278766404,
            "unit": "iter/sec",
            "range": "stddev: 0.0012932449425915105",
            "extra": "mean: 39.98619230769256 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.109180858295883,
            "unit": "iter/sec",
            "range": "stddev: 0.0002147397019685261",
            "extra": "mean: 38.30070370370359 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1020.6492463260483,
            "unit": "iter/sec",
            "range": "stddev: 0.0001331879177558576",
            "extra": "mean: 979.7685185186019 usec\nrounds: 1080"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1689.696823990785,
            "unit": "iter/sec",
            "range": "stddev: 0.0001481401632217417",
            "extra": "mean: 591.8221457256249 usec\nrounds: 1743"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1599.2276398986355,
            "unit": "iter/sec",
            "range": "stddev: 0.00027512384776481636",
            "extra": "mean: 625.3018488746126 usec\nrounds: 2488"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1498.6975604534425,
            "unit": "iter/sec",
            "range": "stddev: 0.00030782858381824826",
            "extra": "mean: 667.2460317460196 usec\nrounds: 2268"
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
        "date": 1728979202705,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 829.7744682815019,
            "unit": "iter/sec",
            "range": "stddev: 0.00003942807663270331",
            "extra": "mean: 1.2051467455621314 msec\nrounds: 845"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1138.1546967293887,
            "unit": "iter/sec",
            "range": "stddev: 0.000021191339286094304",
            "extra": "mean: 878.6151855047549 usec\nrounds: 1159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1393.2273179042418,
            "unit": "iter/sec",
            "range": "stddev: 0.000011255317375106562",
            "extra": "mean: 717.7579617834706 usec\nrounds: 1413"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2637.491933072131,
            "unit": "iter/sec",
            "range": "stddev: 0.000017038654611591213",
            "extra": "mean: 379.14807907495947 usec\nrounds: 2681"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 703.3168861647076,
            "unit": "iter/sec",
            "range": "stddev: 0.00014240719451466923",
            "extra": "mean: 1.4218341968911763 msec\nrounds: 772"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1013.8285419518568,
            "unit": "iter/sec",
            "range": "stddev: 0.000017252843771666957",
            "extra": "mean: 986.3600782778973 usec\nrounds: 1022"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1270.3916330359148,
            "unit": "iter/sec",
            "range": "stddev: 0.00010868995740931627",
            "extra": "mean: 787.1588366890081 usec\nrounds: 1341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2238.122381041725,
            "unit": "iter/sec",
            "range": "stddev: 0.000057231974096418844",
            "extra": "mean: 446.80309194466577 usec\nrounds: 2458"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.498833949730233,
            "unit": "iter/sec",
            "range": "stddev: 0.004113956806362921",
            "extra": "mean: 40.8182692307693 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.27893431502979,
            "unit": "iter/sec",
            "range": "stddev: 0.00101400288833473",
            "extra": "mean: 39.558629629629685 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 887.8834525399473,
            "unit": "iter/sec",
            "range": "stddev: 0.00016546845569075195",
            "extra": "mean: 1.1262739463601035 msec\nrounds: 1044"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1471.4821238542052,
            "unit": "iter/sec",
            "range": "stddev: 0.00010890570365837518",
            "extra": "mean: 679.5869170199177 usec\nrounds: 1651"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1139.1736823094732,
            "unit": "iter/sec",
            "range": "stddev: 0.0005091973323979076",
            "extra": "mean: 877.8292682926776 usec\nrounds: 2337"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1129.9793947997746,
            "unit": "iter/sec",
            "range": "stddev: 0.0006178159248186311",
            "extra": "mean: 884.9718894008628 usec\nrounds: 2170"
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
        "date": 1729000105513,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 629.2691831029196,
            "unit": "iter/sec",
            "range": "stddev: 0.000446337128682267",
            "extra": "mean: 1.5891450381679437 msec\nrounds: 786"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 903.4698191575128,
            "unit": "iter/sec",
            "range": "stddev: 0.000286517605879424",
            "extra": "mean: 1.1068438356164478 msec\nrounds: 1095"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1118.4350237552903,
            "unit": "iter/sec",
            "range": "stddev: 0.0003431549073557909",
            "extra": "mean: 894.1064780342542 usec\nrounds: 1343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2153.126157368308,
            "unit": "iter/sec",
            "range": "stddev: 0.00018233573251916362",
            "extra": "mean: 464.4409695074558 usec\nrounds: 2558"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 699.296054622936,
            "unit": "iter/sec",
            "range": "stddev: 0.0001832264759409798",
            "extra": "mean: 1.4300094979646425 msec\nrounds: 737"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 857.9820512660912,
            "unit": "iter/sec",
            "range": "stddev: 0.0003033491224787349",
            "extra": "mean: 1.1655255474451223 msec\nrounds: 959"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1165.0064489801537,
            "unit": "iter/sec",
            "range": "stddev: 0.00024289313874612266",
            "extra": "mean: 858.3643471462323 usec\nrounds: 1279"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1969.7267246485303,
            "unit": "iter/sec",
            "range": "stddev: 0.00021772773522451451",
            "extra": "mean: 507.6846384253815 usec\nrounds: 2337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.2685804581628,
            "unit": "iter/sec",
            "range": "stddev: 0.0049701347208433245",
            "extra": "mean: 44.906319999999766 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.967957784893795,
            "unit": "iter/sec",
            "range": "stddev: 0.003209152128531896",
            "extra": "mean: 43.53891666666628 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 932.4995618977788,
            "unit": "iter/sec",
            "range": "stddev: 0.00026587569743393276",
            "extra": "mean: 1.07238656280422 msec\nrounds: 1027"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1326.0572987720664,
            "unit": "iter/sec",
            "range": "stddev: 0.0003261086064268704",
            "extra": "mean: 754.1152263375071 usec\nrounds: 1701"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1361.5209988649258,
            "unit": "iter/sec",
            "range": "stddev: 0.0004544365830241214",
            "extra": "mean: 734.4726969570656 usec\nrounds: 2399"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1231.4854908896416,
            "unit": "iter/sec",
            "range": "stddev: 0.0002935517594473818",
            "extra": "mean: 812.027431421532 usec\nrounds: 2005"
          }
        ]
      }
    ]
  }
}