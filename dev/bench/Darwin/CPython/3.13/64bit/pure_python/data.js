window.BENCHMARK_DATA = {
  "lastUpdate": 1742393918787,
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
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729001770631,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 709.842926916143,
            "unit": "iter/sec",
            "range": "stddev: 0.00024400016380015136",
            "extra": "mean: 1.4087623642943399 msec\nrounds: 829"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 826.3429223383301,
            "unit": "iter/sec",
            "range": "stddev: 0.0004741238900672331",
            "extra": "mean: 1.210151346332424 msec\nrounds: 1077"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 965.2941942480439,
            "unit": "iter/sec",
            "range": "stddev: 0.0005330299736843364",
            "extra": "mean: 1.035953604568182 msec\nrounds: 1401"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2083.1657245425185,
            "unit": "iter/sec",
            "range": "stddev: 0.0001675902272041954",
            "extra": "mean: 480.03862017248235 usec\nrounds: 2667"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 476.9418273240493,
            "unit": "iter/sec",
            "range": "stddev: 0.0009773729195003114",
            "extra": "mean: 2.0966917613635268 msec\nrounds: 704"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 746.3887836666048,
            "unit": "iter/sec",
            "range": "stddev: 0.00034079751927219533",
            "extra": "mean: 1.3397843347639018 msec\nrounds: 932"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1002.8012333487336,
            "unit": "iter/sec",
            "range": "stddev: 0.00030147896092843577",
            "extra": "mean: 997.2065916399214 usec\nrounds: 1244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1801.4883725364427,
            "unit": "iter/sec",
            "range": "stddev: 0.00019994663806556788",
            "extra": "mean: 555.0965608465347 usec\nrounds: 2268"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.160172571076956,
            "unit": "iter/sec",
            "range": "stddev: 0.005567929903748416",
            "extra": "mean: 49.60275000000062 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.603731868678643,
            "unit": "iter/sec",
            "range": "stddev: 0.005592934523572471",
            "extra": "mean: 51.01069565217448 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 595.2370848547121,
            "unit": "iter/sec",
            "range": "stddev: 0.0007983060687732071",
            "extra": "mean: 1.6800028517109014 msec\nrounds: 1052"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1114.5560754726982,
            "unit": "iter/sec",
            "range": "stddev: 0.00044551507917472673",
            "extra": "mean: 897.2182037372022 usec\nrounds: 1659"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1142.0956522296121,
            "unit": "iter/sec",
            "range": "stddev: 0.0006603048104611712",
            "extra": "mean: 875.5834049869542 usec\nrounds: 2326"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1015.3799076167255,
            "unit": "iter/sec",
            "range": "stddev: 0.0006361641940721632",
            "extra": "mean: 984.8530510586675 usec\nrounds: 1606"
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
        "date": 1729004386746,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 824.5724547805664,
            "unit": "iter/sec",
            "range": "stddev: 0.000025610136322441054",
            "extra": "mean: 1.2127497034400914 msec\nrounds: 843"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1124.5426045188965,
            "unit": "iter/sec",
            "range": "stddev: 0.000021407275200045535",
            "extra": "mean: 889.2504347826123 usec\nrounds: 1150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1365.6634856580881,
            "unit": "iter/sec",
            "range": "stddev: 0.00001705620816643583",
            "extra": "mean: 732.2448103078032 usec\nrounds: 1397"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2616.4347814142775,
            "unit": "iter/sec",
            "range": "stddev: 0.00000972097366814038",
            "extra": "mean: 382.1994750656326 usec\nrounds: 2667"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 743.2960602355677,
            "unit": "iter/sec",
            "range": "stddev: 0.000055353622381956265",
            "extra": "mean: 1.345358940397285 msec\nrounds: 755"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 999.8942325395255,
            "unit": "iter/sec",
            "range": "stddev: 0.00001723751539993252",
            "extra": "mean: 1.0001057786484133 msec\nrounds: 1021"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1290.7693938831328,
            "unit": "iter/sec",
            "range": "stddev: 0.00002477050766602853",
            "extra": "mean: 774.7317256970385 usec\nrounds: 1327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2135.68607364315,
            "unit": "iter/sec",
            "range": "stddev: 0.00010562220612429249",
            "extra": "mean: 468.2336099584874 usec\nrounds: 2410"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.530168312544266,
            "unit": "iter/sec",
            "range": "stddev: 0.002222008081755007",
            "extra": "mean: 39.16934615384612 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.523453117832688,
            "unit": "iter/sec",
            "range": "stddev: 0.00032706178790126866",
            "extra": "mean: 37.702481481480376 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1066.7270145954358,
            "unit": "iter/sec",
            "range": "stddev: 0.00004363000939602509",
            "extra": "mean: 937.4469628288708 usec\nrounds: 1103"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1602.6534115931706,
            "unit": "iter/sec",
            "range": "stddev: 0.00012627033032756366",
            "extra": "mean: 623.9652271453482 usec\nrounds: 1783"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1630.1218277494147,
            "unit": "iter/sec",
            "range": "stddev: 0.00022986374304316255",
            "extra": "mean: 613.4510825983012 usec\nrounds: 2494"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1599.7002265333317,
            "unit": "iter/sec",
            "range": "stddev: 0.00017419998986389183",
            "extra": "mean: 625.1171209540139 usec\nrounds: 2348"
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
        "date": 1729005340715,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 811.8869461822555,
            "unit": "iter/sec",
            "range": "stddev: 0.0001153980614642258",
            "extra": "mean: 1.2316985815602903 msec\nrounds: 846"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1081.483930437594,
            "unit": "iter/sec",
            "range": "stddev: 0.00004208526884429348",
            "extra": "mean: 924.6554404145204 usec\nrounds: 1158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1180.6805612787416,
            "unit": "iter/sec",
            "range": "stddev: 0.00010066962092109616",
            "extra": "mean: 846.9691403379634 usec\nrounds: 1361"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2104.216802649355,
            "unit": "iter/sec",
            "range": "stddev: 0.00016286760666377946",
            "extra": "mean: 475.23620129871153 usec\nrounds: 2464"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 481.8515248391763,
            "unit": "iter/sec",
            "range": "stddev: 0.0008139142135478334",
            "extra": "mean: 2.075328080229199 msec\nrounds: 698"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 829.7009675369787,
            "unit": "iter/sec",
            "range": "stddev: 0.00019175072524746497",
            "extra": "mean: 1.2052535059330653 msec\nrounds: 927"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 954.9673921191778,
            "unit": "iter/sec",
            "range": "stddev: 0.00041585342923666503",
            "extra": "mean: 1.0471561733441912 msec\nrounds: 1223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1999.4711250464318,
            "unit": "iter/sec",
            "range": "stddev: 0.00013383237954027883",
            "extra": "mean: 500.1322537112297 usec\nrounds: 2223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.847389527787307,
            "unit": "iter/sec",
            "range": "stddev: 0.012934579075543044",
            "extra": "mean: 47.96763636363721 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 15.53060305331679,
            "unit": "iter/sec",
            "range": "stddev: 0.011887616136832532",
            "extra": "mean: 64.38899999999904 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 886.110202383608,
            "unit": "iter/sec",
            "range": "stddev: 0.0003139681416639547",
            "extra": "mean: 1.1285278030994703 msec\nrounds: 1097"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1688.5509051219926,
            "unit": "iter/sec",
            "range": "stddev: 0.000045707321182897405",
            "extra": "mean: 592.2237801458245 usec\nrounds: 1783"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1947.4762629534466,
            "unit": "iter/sec",
            "range": "stddev: 0.00010503225863736662",
            "extra": "mean: 513.485077596504 usec\nrounds: 2513"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1863.5938999748223,
            "unit": "iter/sec",
            "range": "stddev: 0.0001273888726703165",
            "extra": "mean: 536.5975924333677 usec\nrounds: 2326"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729006002495,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 485.0893085186799,
            "unit": "iter/sec",
            "range": "stddev: 0.00137373785256654",
            "extra": "mean: 2.061476067270388 msec\nrounds: 773"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 863.346666513464,
            "unit": "iter/sec",
            "range": "stddev: 0.0006333377199733084",
            "extra": "mean: 1.1582832699619914 msec\nrounds: 1052"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1033.2591260575316,
            "unit": "iter/sec",
            "range": "stddev: 0.000543985366420021",
            "extra": "mean: 967.8114374034769 usec\nrounds: 1294"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1409.917945058854,
            "unit": "iter/sec",
            "range": "stddev: 0.0005555808750995177",
            "extra": "mean: 709.2611336032446 usec\nrounds: 2470"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 573.1102594970695,
            "unit": "iter/sec",
            "range": "stddev: 0.0006921038298042431",
            "extra": "mean: 1.7448649425287657 msec\nrounds: 696"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 973.5059172364379,
            "unit": "iter/sec",
            "range": "stddev: 0.00006446771183436393",
            "extra": "mean: 1.0272151224707218 msec\nrounds: 939"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1195.6517830493767,
            "unit": "iter/sec",
            "range": "stddev: 0.00006352262631475893",
            "extra": "mean: 836.3639097744757 usec\nrounds: 1330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1898.198708489828,
            "unit": "iter/sec",
            "range": "stddev: 0.0002081186118169585",
            "extra": "mean: 526.8152356902516 usec\nrounds: 2376"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.46366797770716,
            "unit": "iter/sec",
            "range": "stddev: 0.009451842293808684",
            "extra": "mean: 57.26173913043507 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.876663012478716,
            "unit": "iter/sec",
            "range": "stddev: 0.017224815847613043",
            "extra": "mean: 72.06343478260882 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 615.3439314883017,
            "unit": "iter/sec",
            "range": "stddev: 0.0009718830222411808",
            "extra": "mean: 1.6251074380165738 msec\nrounds: 968"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 969.4198673197697,
            "unit": "iter/sec",
            "range": "stddev: 0.0006869664232649014",
            "extra": "mean: 1.0315447761193275 msec\nrounds: 1608"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1170.3762904415055,
            "unit": "iter/sec",
            "range": "stddev: 0.0005539876700035922",
            "extra": "mean: 854.4260578132237 usec\nrounds: 2387"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1410.1793588842588,
            "unit": "iter/sec",
            "range": "stddev: 0.0002144885020578796",
            "extra": "mean: 709.1296534018235 usec\nrounds: 2337"
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
        "date": 1729041236802,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 826.4972673689302,
            "unit": "iter/sec",
            "range": "stddev: 0.00003429095896035472",
            "extra": "mean: 1.209925355450234 msec\nrounds: 844"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1097.8079772155304,
            "unit": "iter/sec",
            "range": "stddev: 0.000057767360180514995",
            "extra": "mean: 910.9061154177348 usec\nrounds: 1161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1374.526491858092,
            "unit": "iter/sec",
            "range": "stddev: 0.000013820287761424469",
            "extra": "mean: 727.523264137452 usec\nrounds: 1397"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2573.716132346879,
            "unit": "iter/sec",
            "range": "stddev: 0.000008210904745300247",
            "extra": "mean: 388.54323809523464 usec\nrounds: 2625"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 724.4626901714519,
            "unit": "iter/sec",
            "range": "stddev: 0.0001707759930158687",
            "extra": "mean: 1.3803333333333414 msec\nrounds: 765"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 987.1859206596455,
            "unit": "iter/sec",
            "range": "stddev: 0.00012058066053207717",
            "extra": "mean: 1.01298041136141 msec\nrounds: 1021"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1183.0156452702968,
            "unit": "iter/sec",
            "range": "stddev: 0.0002704143190703046",
            "extra": "mean: 845.2973584905708 usec\nrounds: 1325"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2026.2813874127223,
            "unit": "iter/sec",
            "range": "stddev: 0.00010377401502934475",
            "extra": "mean: 493.5148722245631 usec\nrounds: 2387"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.257729875651094,
            "unit": "iter/sec",
            "range": "stddev: 0.0014630091899917048",
            "extra": "mean: 39.591840000000076 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.9042253629233,
            "unit": "iter/sec",
            "range": "stddev: 0.0014616780817993489",
            "extra": "mean: 38.603740740740285 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1035.7303091916708,
            "unit": "iter/sec",
            "range": "stddev: 0.00012601801416157871",
            "extra": "mean: 965.5023041475378 usec\nrounds: 1085"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1669.746612139297,
            "unit": "iter/sec",
            "range": "stddev: 0.00005375010945503384",
            "extra": "mean: 598.8932648402199 usec\nrounds: 1752"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1838.9725520720285,
            "unit": "iter/sec",
            "range": "stddev: 0.0001570137074752447",
            "extra": "mean: 543.7819063004873 usec\nrounds: 2476"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1749.4970386676027,
            "unit": "iter/sec",
            "range": "stddev: 0.00012561285215881827",
            "extra": "mean: 571.5928509153629 usec\nrounds: 2294"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729085738866,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 822.6680299451141,
            "unit": "iter/sec",
            "range": "stddev: 0.00010550133032247867",
            "extra": "mean: 1.2155571428571461 msec\nrounds: 840"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1088.817617407539,
            "unit": "iter/sec",
            "range": "stddev: 0.00009601662474323833",
            "extra": "mean: 918.427461139899 usec\nrounds: 1158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1380.081441362097,
            "unit": "iter/sec",
            "range": "stddev: 0.000016041116912195475",
            "extra": "mean: 724.5949188426384 usec\nrounds: 1417"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2587.8003696858127,
            "unit": "iter/sec",
            "range": "stddev: 0.000017270943805899772",
            "extra": "mean: 386.42857142856457 usec\nrounds: 2667"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 734.2362932134014,
            "unit": "iter/sec",
            "range": "stddev: 0.00017151399222281293",
            "extra": "mean: 1.3619593709042601 msec\nrounds: 763"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 937.8013544596258,
            "unit": "iter/sec",
            "range": "stddev: 0.0003334000864442675",
            "extra": "mean: 1.066323902439034 msec\nrounds: 1025"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1222.5187962264529,
            "unit": "iter/sec",
            "range": "stddev: 0.00012561909051147848",
            "extra": "mean: 817.9833333333595 usec\nrounds: 1320"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2197.2189022210728,
            "unit": "iter/sec",
            "range": "stddev: 0.00009730600646198536",
            "extra": "mean: 455.1207888249749 usec\nrounds: 2434"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.47336367929437,
            "unit": "iter/sec",
            "range": "stddev: 0.001051976606934928",
            "extra": "mean: 39.25669230769216 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.60773315603944,
            "unit": "iter/sec",
            "range": "stddev: 0.002570573593800322",
            "extra": "mean: 39.05070370370348 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1037.0904408405104,
            "unit": "iter/sec",
            "range": "stddev: 0.00007569173738135119",
            "extra": "mean: 964.2360594795856 usec\nrounds: 1076"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1668.6136961767036,
            "unit": "iter/sec",
            "range": "stddev: 0.00005929814380721324",
            "extra": "mean: 599.2998872604852 usec\nrounds: 1774"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1878.0236030186447,
            "unit": "iter/sec",
            "range": "stddev: 0.00018127472849615992",
            "extra": "mean: 532.4746709214135 usec\nrounds: 2507"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1637.4601793116592,
            "unit": "iter/sec",
            "range": "stddev: 0.00018481018868623717",
            "extra": "mean: 610.7018739352617 usec\nrounds: 2348"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729173283416,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 827.2352504150915,
            "unit": "iter/sec",
            "range": "stddev: 0.000033883723724766355",
            "extra": "mean: 1.2088459715639757 msec\nrounds: 844"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1155.5552064781734,
            "unit": "iter/sec",
            "range": "stddev: 0.000014086909866890962",
            "extra": "mean: 865.3848768054411 usec\nrounds: 1177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1264.630365209919,
            "unit": "iter/sec",
            "range": "stddev: 0.0001551546152053076",
            "extra": "mean: 790.7448907681476 usec\nrounds: 1419"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2631.1913144691284,
            "unit": "iter/sec",
            "range": "stddev: 0.00003218987883892881",
            "extra": "mean: 380.0559824368989 usec\nrounds: 2733"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 750.7904863279614,
            "unit": "iter/sec",
            "range": "stddev: 0.00007714405668176199",
            "extra": "mean: 1.3319295039164607 msec\nrounds: 766"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 995.6584659913304,
            "unit": "iter/sec",
            "range": "stddev: 0.000054887645641016316",
            "extra": "mean: 1.0043604651162654 msec\nrounds: 1032"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1235.9803529666206,
            "unit": "iter/sec",
            "range": "stddev: 0.00009565351879849551",
            "extra": "mean: 809.0743494423543 usec\nrounds: 1345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2304.5785348425047,
            "unit": "iter/sec",
            "range": "stddev: 0.00005943511421034903",
            "extra": "mean: 433.9188206785672 usec\nrounds: 2476"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.730814594985173,
            "unit": "iter/sec",
            "range": "stddev: 0.0031342227244011488",
            "extra": "mean: 40.435384615384905 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.112751604193146,
            "unit": "iter/sec",
            "range": "stddev: 0.0016381716651675954",
            "extra": "mean: 39.8204074074076 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1013.3002684028019,
            "unit": "iter/sec",
            "range": "stddev: 0.00011536386110618889",
            "extra": "mean: 986.8743068392095 usec\nrounds: 1082"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1572.4564388859997,
            "unit": "iter/sec",
            "range": "stddev: 0.000171677278381898",
            "extra": "mean: 635.947664603317 usec\nrounds: 1777"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1980.1443693994509,
            "unit": "iter/sec",
            "range": "stddev: 0.00017221537084211592",
            "extra": "mean: 505.013682564613 usec\nrounds: 2558"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1673.5459452350367,
            "unit": "iter/sec",
            "range": "stddev: 0.00023026153112979512",
            "extra": "mean: 597.5336397827773 usec\nrounds: 2393"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729175107804,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 509.40559118667414,
            "unit": "iter/sec",
            "range": "stddev: 0.0011677444357192674",
            "extra": "mean: 1.9630722891566086 msec\nrounds: 747"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 697.2816762705155,
            "unit": "iter/sec",
            "range": "stddev: 0.0009624156021128861",
            "extra": "mean: 1.43414065510599 msec\nrounds: 1038"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 889.3777213668859,
            "unit": "iter/sec",
            "range": "stddev: 0.0007034926932914398",
            "extra": "mean: 1.1243816614420008 msec\nrounds: 1276"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1888.635674108723,
            "unit": "iter/sec",
            "range": "stddev: 0.0003016200590114265",
            "extra": "mean: 529.4827444535674 usec\nrounds: 2434"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 491.5072206430508,
            "unit": "iter/sec",
            "range": "stddev: 0.0011959471946455073",
            "extra": "mean: 2.034558106169175 msec\nrounds: 697"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 804.4801590263315,
            "unit": "iter/sec",
            "range": "stddev: 0.00046000774896754235",
            "extra": "mean: 1.243038735983629 msec\nrounds: 981"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 993.3966499848551,
            "unit": "iter/sec",
            "range": "stddev: 0.00045165561645461633",
            "extra": "mean: 1.006647244094537 msec\nrounds: 1270"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1858.9602051733732,
            "unit": "iter/sec",
            "range": "stddev: 0.0002576449865944028",
            "extra": "mean: 537.9351301964726 usec\nrounds: 2189"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.699611983050744,
            "unit": "iter/sec",
            "range": "stddev: 0.008370704296915624",
            "extra": "mean: 53.477045454547195 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.25900117567464,
            "unit": "iter/sec",
            "range": "stddev: 0.009788292647130869",
            "extra": "mean: 51.92377272727229 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 745.5277727884177,
            "unit": "iter/sec",
            "range": "stddev: 0.0005770055655626908",
            "extra": "mean: 1.3413316532257507 msec\nrounds: 992"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1354.3204366781417,
            "unit": "iter/sec",
            "range": "stddev: 0.0003754239834371327",
            "extra": "mean: 738.3776932826814 usec\nrounds: 1578"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1032.3182505188934,
            "unit": "iter/sec",
            "range": "stddev: 0.0006993496201016821",
            "extra": "mean: 968.6935201400839 usec\nrounds: 2284"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1056.2265845238926,
            "unit": "iter/sec",
            "range": "stddev: 0.0006059685118936696",
            "extra": "mean: 946.7665505226445 usec\nrounds: 2009"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729520779888,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 815.6440132410743,
            "unit": "iter/sec",
            "range": "stddev: 0.000055847232247962685",
            "extra": "mean: 1.2260250596658726 msec\nrounds: 838"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1130.0531409204623,
            "unit": "iter/sec",
            "range": "stddev: 0.000013115621635033604",
            "extra": "mean: 884.9141370338299 usec\nrounds: 1153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1369.7426484945202,
            "unit": "iter/sec",
            "range": "stddev: 0.000012740195151894786",
            "extra": "mean: 730.0641482537591 usec\nrounds: 1403"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2592.0895964830697,
            "unit": "iter/sec",
            "range": "stddev: 0.000007461391038118993",
            "extra": "mean: 385.7891337385843 usec\nrounds: 2632"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 725.9135847220023,
            "unit": "iter/sec",
            "range": "stddev: 0.00008512439713142319",
            "extra": "mean: 1.3775744400526166 msec\nrounds: 759"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 989.8789727385204,
            "unit": "iter/sec",
            "range": "stddev: 0.00002942093390041013",
            "extra": "mean: 1.0102245098039404 msec\nrounds: 1020"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1283.5625665767773,
            "unit": "iter/sec",
            "range": "stddev: 0.00002446914659506976",
            "extra": "mean: 779.0816170862399 usec\nrounds: 1311"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2185.9454786553315,
            "unit": "iter/sec",
            "range": "stddev: 0.00010358348856062982",
            "extra": "mean: 457.46795140340953 usec\nrounds: 2387"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.463758705422748,
            "unit": "iter/sec",
            "range": "stddev: 0.002130126817820777",
            "extra": "mean: 39.271499999999634 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.76534625229321,
            "unit": "iter/sec",
            "range": "stddev: 0.003317854542251003",
            "extra": "mean: 42.078074074073555 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 980.2130185610362,
            "unit": "iter/sec",
            "range": "stddev: 0.00009984082533410269",
            "extra": "mean: 1.0201864095500501 msec\nrounds: 1089"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1605.5527197717925,
            "unit": "iter/sec",
            "range": "stddev: 0.00014342898972169378",
            "extra": "mean: 622.838470319515 usec\nrounds: 1752"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1963.196380396376,
            "unit": "iter/sec",
            "range": "stddev: 0.0001642646003063402",
            "extra": "mean: 509.3733922828936 usec\nrounds: 2488"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1751.6394664423635,
            "unit": "iter/sec",
            "range": "stddev: 0.000135917122065301",
            "extra": "mean: 570.8937365010577 usec\nrounds: 2315"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729521602740,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 669.055318823559,
            "unit": "iter/sec",
            "range": "stddev: 0.0004418946718197356",
            "extra": "mean: 1.4946447204968962 msec\nrounds: 805"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1040.7567610961642,
            "unit": "iter/sec",
            "range": "stddev: 0.00007724642385275522",
            "extra": "mean: 960.8393021120155 usec\nrounds: 1089"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1275.120598755459,
            "unit": "iter/sec",
            "range": "stddev: 0.00009934593558491947",
            "extra": "mean: 784.2395464209568 usec\nrounds: 1411"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2440.857946024214,
            "unit": "iter/sec",
            "range": "stddev: 0.000040936839120198486",
            "extra": "mean: 409.69201080662964 usec\nrounds: 2591"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 628.7801413073973,
            "unit": "iter/sec",
            "range": "stddev: 0.0005210968151668453",
            "extra": "mean: 1.5903810160428096 msec\nrounds: 748"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 915.4871146586659,
            "unit": "iter/sec",
            "range": "stddev: 0.00012679055493381884",
            "extra": "mean: 1.0923146639511625 msec\nrounds: 982"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1254.6647488445572,
            "unit": "iter/sec",
            "range": "stddev: 0.0000483804716379386",
            "extra": "mean: 797.0256603773379 usec\nrounds: 1325"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2340.530019862353,
            "unit": "iter/sec",
            "range": "stddev: 0.00004442566435892752",
            "extra": "mean: 427.2536525973763 usec\nrounds: 2464"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.448580164985056,
            "unit": "iter/sec",
            "range": "stddev: 0.0009196762875300114",
            "extra": "mean: 39.29492307692314 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.88165088832094,
            "unit": "iter/sec",
            "range": "stddev: 0.0022503551444951566",
            "extra": "mean: 40.19025925925938 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1024.245211890882,
            "unit": "iter/sec",
            "range": "stddev: 0.00009596255598036838",
            "extra": "mean: 976.3287037035572 usec\nrounds: 1080"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1623.1224396904745,
            "unit": "iter/sec",
            "range": "stddev: 0.00010418249282523581",
            "extra": "mean: 616.0964666292813 usec\nrounds: 1783"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1727.7315544751245,
            "unit": "iter/sec",
            "range": "stddev: 0.0001913683852875521",
            "extra": "mean: 578.7936195352955 usec\nrounds: 2539"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1694.9347885905129,
            "unit": "iter/sec",
            "range": "stddev: 0.00017306421320576924",
            "extra": "mean: 589.9932001700123 usec\nrounds: 2353"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729606746816,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 630.5609774645719,
            "unit": "iter/sec",
            "range": "stddev: 0.0006267865577855056",
            "extra": "mean: 1.5858894472361875 msec\nrounds: 796"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 964.9278092744908,
            "unit": "iter/sec",
            "range": "stddev: 0.0001930712916357964",
            "extra": "mean: 1.0363469581749118 msec\nrounds: 1052"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1193.8857270069154,
            "unit": "iter/sec",
            "range": "stddev: 0.00012978881926070047",
            "extra": "mean: 837.6011014948733 usec\nrounds: 1271"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2203.212806945861,
            "unit": "iter/sec",
            "range": "stddev: 0.00006622919571048482",
            "extra": "mean: 453.88261943984463 usec\nrounds: 2428"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 625.8497724718939,
            "unit": "iter/sec",
            "range": "stddev: 0.0004218144621274578",
            "extra": "mean: 1.597827536231802 msec\nrounds: 690"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 880.8613867515953,
            "unit": "iter/sec",
            "range": "stddev: 0.00007909196276279706",
            "extra": "mean: 1.1352523961661654 msec\nrounds: 939"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1075.6556334792722,
            "unit": "iter/sec",
            "range": "stddev: 0.00034803599610921314",
            "extra": "mean: 929.665562913886 usec\nrounds: 1208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2019.8285604488774,
            "unit": "iter/sec",
            "range": "stddev: 0.00015968219229222074",
            "extra": "mean: 495.091523895357 usec\nrounds: 2218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.943624522699327,
            "unit": "iter/sec",
            "range": "stddev: 0.005245580234207217",
            "extra": "mean: 47.7472272727278 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.949769384271,
            "unit": "iter/sec",
            "range": "stddev: 0.0021417008497090577",
            "extra": "mean: 45.55856521739088 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 885.460665112789,
            "unit": "iter/sec",
            "range": "stddev: 0.0003182139019441964",
            "extra": "mean: 1.1293556443556092 msec\nrounds: 1001"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1325.1010946523215,
            "unit": "iter/sec",
            "range": "stddev: 0.00033064515496265156",
            "extra": "mean: 754.6594022415918 usec\nrounds: 1606"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1448.727600240297,
            "unit": "iter/sec",
            "range": "stddev: 0.00040339369495558027",
            "extra": "mean: 690.2608881297853 usec\nrounds: 2342"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1497.7357148257415,
            "unit": "iter/sec",
            "range": "stddev: 0.0003584789557859165",
            "extra": "mean: 667.6745370369619 usec\nrounds: 2160"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729607539795,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 742.0086807982423,
            "unit": "iter/sec",
            "range": "stddev: 0.00028671099588315684",
            "extra": "mean: 1.3476931279620805 msec\nrounds: 844"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 976.4671418806705,
            "unit": "iter/sec",
            "range": "stddev: 0.00017411313384361947",
            "extra": "mean: 1.0241000000000053 msec\nrounds: 1150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1086.8626546367757,
            "unit": "iter/sec",
            "range": "stddev: 0.00035602249552691903",
            "extra": "mean: 920.0794559770711 usec\nrounds: 1397"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2107.618255241236,
            "unit": "iter/sec",
            "range": "stddev: 0.00016291990685569503",
            "extra": "mean: 474.46922492400836 usec\nrounds: 2632"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 727.1089499287316,
            "unit": "iter/sec",
            "range": "stddev: 0.00012112747223919104",
            "extra": "mean: 1.3753097112860682 msec\nrounds: 762"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 937.8495714982132,
            "unit": "iter/sec",
            "range": "stddev: 0.0001214581785273623",
            "extra": "mean: 1.0662690802347987 msec\nrounds: 1022"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1287.5628860975962,
            "unit": "iter/sec",
            "range": "stddev: 0.00003797830927888937",
            "extra": "mean: 776.6610942249549 usec\nrounds: 1316"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1929.2645978735077,
            "unit": "iter/sec",
            "range": "stddev: 0.00016091429157546233",
            "extra": "mean: 518.3322189720527 usec\nrounds: 2393"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.53274578091551,
            "unit": "iter/sec",
            "range": "stddev: 0.0061998384157602665",
            "extra": "mean: 48.70269230769253 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.408558249564834,
            "unit": "iter/sec",
            "range": "stddev: 0.002843433755150316",
            "extra": "mean: 46.71029166666685 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 850.15800417164,
            "unit": "iter/sec",
            "range": "stddev: 0.0002208330460661482",
            "extra": "mean: 1.1762519379845868 msec\nrounds: 1032"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1429.0027531819428,
            "unit": "iter/sec",
            "range": "stddev: 0.00015105813690676048",
            "extra": "mean: 699.7887147336227 usec\nrounds: 1595"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1041.8135787199208,
            "unit": "iter/sec",
            "range": "stddev: 0.0006902850338341444",
            "extra": "mean: 959.8646249444192 usec\nrounds: 2253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 975.1919745276697,
            "unit": "iter/sec",
            "range": "stddev: 0.0005891321188487941",
            "extra": "mean: 1.0254391198044324 msec\nrounds: 2045"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729694935509,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 713.7455650651357,
            "unit": "iter/sec",
            "range": "stddev: 0.00024404067427767214",
            "extra": "mean: 1.401059493670887 msec\nrounds: 790"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 958.0821694312608,
            "unit": "iter/sec",
            "range": "stddev: 0.0003733818712197411",
            "extra": "mean: 1.0437518115942213 msec\nrounds: 1104"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1249.2676787260905,
            "unit": "iter/sec",
            "range": "stddev: 0.00006575978651387941",
            "extra": "mean: 800.4689603590201 usec\nrounds: 1337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2299.45509725475,
            "unit": "iter/sec",
            "range": "stddev: 0.00008187642354291516",
            "extra": "mean: 434.88563929509644 usec\nrounds: 2667"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 645.878999235174,
            "unit": "iter/sec",
            "range": "stddev: 0.0002005246225181802",
            "extra": "mean: 1.5482776203966422 msec\nrounds: 706"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 827.4066437171323,
            "unit": "iter/sec",
            "range": "stddev: 0.00022765424829503605",
            "extra": "mean: 1.2085955649419136 msec\nrounds: 947"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1067.1464981105692,
            "unit": "iter/sec",
            "range": "stddev: 0.00033951666756822975",
            "extra": "mean: 937.078462770149 usec\nrounds: 1249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2045.2840100619826,
            "unit": "iter/sec",
            "range": "stddev: 0.0001510850741530336",
            "extra": "mean: 488.9296523516531 usec\nrounds: 2445"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 15.840967249460356,
            "unit": "iter/sec",
            "range": "stddev: 0.017076650450450686",
            "extra": "mean: 63.127458333332925 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.29274656446446,
            "unit": "iter/sec",
            "range": "stddev: 0.005927169180139476",
            "extra": "mean: 44.85764000000074 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 872.9732622894668,
            "unit": "iter/sec",
            "range": "stddev: 0.00035925077031289765",
            "extra": "mean: 1.1455104562737604 msec\nrounds: 1052"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1607.1913180983101,
            "unit": "iter/sec",
            "range": "stddev: 0.00006028246753825812",
            "extra": "mean: 622.2034606205053 usec\nrounds: 1676"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1284.9563984706385,
            "unit": "iter/sec",
            "range": "stddev: 0.0005312877742337436",
            "extra": "mean: 778.2365231926974 usec\nrounds: 2393"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1427.0823547305808,
            "unit": "iter/sec",
            "range": "stddev: 0.00032312599334342206",
            "extra": "mean: 700.7304075235309 usec\nrounds: 2233"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729695696884,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 774.7687157754724,
            "unit": "iter/sec",
            "range": "stddev: 0.0000816070813698309",
            "extra": "mean: 1.2907077681874284 msec\nrounds: 811"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1039.6453230929005,
            "unit": "iter/sec",
            "range": "stddev: 0.00007642371298759181",
            "extra": "mean: 961.8664921466127 usec\nrounds: 1146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1344.2833415372968,
            "unit": "iter/sec",
            "range": "stddev: 0.000039903743927667475",
            "extra": "mean: 743.8907922911691 usec\nrounds: 1401"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2460.672025711709,
            "unit": "iter/sec",
            "range": "stddev: 0.00006423203810490712",
            "extra": "mean: 406.39304610729926 usec\nrounds: 2646"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 730.1600900336168,
            "unit": "iter/sec",
            "range": "stddev: 0.00002465350143631522",
            "extra": "mean: 1.369562666666648 msec\nrounds: 750"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 994.0416034212434,
            "unit": "iter/sec",
            "range": "stddev: 0.00005280733752548148",
            "extra": "mean: 1.0059941118744418 msec\nrounds: 1019"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1286.9294938795847,
            "unit": "iter/sec",
            "range": "stddev: 0.00005493587329326653",
            "extra": "mean: 777.0433460075537 usec\nrounds: 1315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2344.0448550833885,
            "unit": "iter/sec",
            "range": "stddev: 0.000010943845976730683",
            "extra": "mean: 426.6129966887623 usec\nrounds: 2416"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.623299569290445,
            "unit": "iter/sec",
            "range": "stddev: 0.007806102395907123",
            "extra": "mean: 48.48884615384586 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.99502380121839,
            "unit": "iter/sec",
            "range": "stddev: 0.0009482385678402989",
            "extra": "mean: 41.67530769230673 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 841.1084853840345,
            "unit": "iter/sec",
            "range": "stddev: 0.0001815976787928755",
            "extra": "mean: 1.188907278165692 msec\nrounds: 1003"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1294.024204337519,
            "unit": "iter/sec",
            "range": "stddev: 0.00031552066362391197",
            "extra": "mean: 772.7830721002272 usec\nrounds: 1595"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1107.469358618551,
            "unit": "iter/sec",
            "range": "stddev: 0.0005864548629918287",
            "extra": "mean: 902.9595195729771 usec\nrounds: 2248"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 966.487744245517,
            "unit": "iter/sec",
            "range": "stddev: 0.000693153165620207",
            "extra": "mean: 1.0346742687157862 msec\nrounds: 2017"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729696889120,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 800.4736214911475,
            "unit": "iter/sec",
            "range": "stddev: 0.00010849496351852612",
            "extra": "mean: 1.2492604042806164 msec\nrounds: 841"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1127.8529842657438,
            "unit": "iter/sec",
            "range": "stddev: 0.0000335613218279633",
            "extra": "mean: 886.6403812825138 usec\nrounds: 1154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1368.9220158585977,
            "unit": "iter/sec",
            "range": "stddev: 0.000007469067790640704",
            "extra": "mean: 730.5018024513199 usec\nrounds: 1387"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2565.182509070785,
            "unit": "iter/sec",
            "range": "stddev: 0.000006227956061289526",
            "extra": "mean: 389.83580952383824 usec\nrounds: 2625"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 752.937582551438,
            "unit": "iter/sec",
            "range": "stddev: 0.000017031822800833834",
            "extra": "mean: 1.328131339401807 msec\nrounds: 769"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 994.7172056906201,
            "unit": "iter/sec",
            "range": "stddev: 0.00002545209900954588",
            "extra": "mean: 1.0053108504398616 msec\nrounds: 1023"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1299.2101627106733,
            "unit": "iter/sec",
            "range": "stddev: 0.00003193015101154205",
            "extra": "mean: 769.6984126983729 usec\nrounds: 1323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2255.4878077313742,
            "unit": "iter/sec",
            "range": "stddev: 0.00003777375414208204",
            "extra": "mean: 443.36307053941687 usec\nrounds: 2410"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.02134031621182,
            "unit": "iter/sec",
            "range": "stddev: 0.0012977271925001996",
            "extra": "mean: 39.9658846153849 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.650379625618623,
            "unit": "iter/sec",
            "range": "stddev: 0.0012681106277071693",
            "extra": "mean: 38.98577777777753 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1068.0284688921415,
            "unit": "iter/sec",
            "range": "stddev: 0.00002601430377298947",
            "extra": "mean: 936.3046296296699 usec\nrounds: 1080"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1727.4924827541456,
            "unit": "iter/sec",
            "range": "stddev: 0.000010658831109974262",
            "extra": "mean: 578.8737201366558 usec\nrounds: 1758"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2248.6955844206113,
            "unit": "iter/sec",
            "range": "stddev: 0.000045456025883707565",
            "extra": "mean: 444.7022562449934 usec\nrounds: 2482"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 2085.1140868145267,
            "unit": "iter/sec",
            "range": "stddev: 0.000048488876249334445",
            "extra": "mean: 479.590064794834 usec\nrounds: 2315"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729698762895,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 792.8377704773875,
            "unit": "iter/sec",
            "range": "stddev: 0.00003562073156336185",
            "extra": "mean: 1.2612920792079254 msec\nrounds: 808"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1087.7354262010122,
            "unit": "iter/sec",
            "range": "stddev: 0.00010239218809622053",
            "extra": "mean: 919.3412073490758 usec\nrounds: 1143"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1367.8931621893028,
            "unit": "iter/sec",
            "range": "stddev: 0.000021553556007821793",
            "extra": "mean: 731.0512455515951 usec\nrounds: 1405"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2541.764749277339,
            "unit": "iter/sec",
            "range": "stddev: 0.000011298488305091782",
            "extra": "mean: 393.4274406332508 usec\nrounds: 2653"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 702.7355040052522,
            "unit": "iter/sec",
            "range": "stddev: 0.00017884769842684646",
            "extra": "mean: 1.423010498687606 msec\nrounds: 762"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 998.0217782609932,
            "unit": "iter/sec",
            "range": "stddev: 0.000040458539575767175",
            "extra": "mean: 1.0019821428570965 msec\nrounds: 1008"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1294.1461292729532,
            "unit": "iter/sec",
            "range": "stddev: 0.00001326680352052731",
            "extra": "mean: 772.7102661596621 usec\nrounds: 1315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2319.940541921301,
            "unit": "iter/sec",
            "range": "stddev: 0.00002316979356941348",
            "extra": "mean: 431.04552980130774 usec\nrounds: 2416"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.18390932894284,
            "unit": "iter/sec",
            "range": "stddev: 0.0015005956689055782",
            "extra": "mean: 41.349807692308005 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.79092159559796,
            "unit": "iter/sec",
            "range": "stddev: 0.003913022380954663",
            "extra": "mean: 38.773333333333916 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1011.4512736622058,
            "unit": "iter/sec",
            "range": "stddev: 0.00014074526780918605",
            "extra": "mean: 988.6783733824926 usec\nrounds: 1082"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1681.904308699694,
            "unit": "iter/sec",
            "range": "stddev: 0.00004808230357662799",
            "extra": "mean: 594.5641466208713 usec\nrounds: 1746"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1674.631460971487,
            "unit": "iter/sec",
            "range": "stddev: 0.00025223513890812135",
            "extra": "mean: 597.146311475529 usec\nrounds: 2440"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1601.8435447093711,
            "unit": "iter/sec",
            "range": "stddev: 0.00019089336231845798",
            "extra": "mean: 624.2806941432186 usec\nrounds: 2305"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729777412364,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 666.8875537989838,
            "unit": "iter/sec",
            "range": "stddev: 0.00036993414704492174",
            "extra": "mean: 1.499503168567792 msec\nrounds: 789"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 911.9621828526303,
            "unit": "iter/sec",
            "range": "stddev: 0.00026798868757579565",
            "extra": "mean: 1.0965366972476713 msec\nrounds: 1090"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1188.1209362286022,
            "unit": "iter/sec",
            "range": "stddev: 0.00023184617874819804",
            "extra": "mean: 841.6651617757482 usec\nrounds: 1329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2248.885420822062,
            "unit": "iter/sec",
            "range": "stddev: 0.00009716182132392978",
            "extra": "mean: 444.6647173489426 usec\nrounds: 2565"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 673.4359716091017,
            "unit": "iter/sec",
            "range": "stddev: 0.00019939733640242843",
            "extra": "mean: 1.4849221635883352 msec\nrounds: 758"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 806.4898714360243,
            "unit": "iter/sec",
            "range": "stddev: 0.00031879598145609833",
            "extra": "mean: 1.2399411764705914 msec\nrounds: 1020"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1133.3220804899574,
            "unit": "iter/sec",
            "range": "stddev: 0.000055976596343896763",
            "extra": "mean: 882.3617021276779 usec\nrounds: 1316"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2092.512886817171,
            "unit": "iter/sec",
            "range": "stddev: 0.00006233354166962865",
            "extra": "mean: 477.8943089430889 usec\nrounds: 2337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.490003193580797,
            "unit": "iter/sec",
            "range": "stddev: 0.004436579810694544",
            "extra": "mean: 44.46419999999932 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.812959908212154,
            "unit": "iter/sec",
            "range": "stddev: 0.0006803279919766809",
            "extra": "mean: 40.301519999999584 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 884.3637395662527,
            "unit": "iter/sec",
            "range": "stddev: 0.0003865731522001568",
            "extra": "mean: 1.130756446991441 msec\nrounds: 1047"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1221.1687745759125,
            "unit": "iter/sec",
            "range": "stddev: 0.0003540388758910857",
            "extra": "mean: 818.8876270172236 usec\nrounds: 1673"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 861.4036606985954,
            "unit": "iter/sec",
            "range": "stddev: 0.0008179757497769482",
            "extra": "mean: 1.160895925597766 msec\nrounds: 2258"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 837.3065395240435,
            "unit": "iter/sec",
            "range": "stddev: 0.0007654276727215149",
            "extra": "mean: 1.1943057324841124 msec\nrounds: 2041"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1730123971552,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 740.6161194641236,
            "unit": "iter/sec",
            "range": "stddev: 0.00022996684934003137",
            "extra": "mean: 1.3502271604938263 msec\nrounds: 810"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1076.7121448911407,
            "unit": "iter/sec",
            "range": "stddev: 0.00003405585057065624",
            "extra": "mean: 928.753339269804 usec\nrounds: 1123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1246.2438084630594,
            "unit": "iter/sec",
            "range": "stddev: 0.0001404190136469719",
            "extra": "mean: 802.4112081513634 usec\nrounds: 1374"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2467.732892291805,
            "unit": "iter/sec",
            "range": "stddev: 0.00005591623232224328",
            "extra": "mean: 405.23024316107865 usec\nrounds: 2632"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 718.5996900426952,
            "unit": "iter/sec",
            "range": "stddev: 0.00004868142427988745",
            "extra": "mean: 1.3915953678474111 msec\nrounds: 734"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 929.5715605617094,
            "unit": "iter/sec",
            "range": "stddev: 0.00021660409533647574",
            "extra": "mean: 1.0757644084934495 msec\nrounds: 989"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1183.8735828904996,
            "unit": "iter/sec",
            "range": "stddev: 0.00020334613437821906",
            "extra": "mean: 844.6847826086624 usec\nrounds: 1288"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2321.2266782648235,
            "unit": "iter/sec",
            "range": "stddev: 0.00006837936094655446",
            "extra": "mean: 430.80669775324384 usec\nrounds: 2359"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.49093340320389,
            "unit": "iter/sec",
            "range": "stddev: 0.004600340527195204",
            "extra": "mean: 42.569615384615226 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.78621886231212,
            "unit": "iter/sec",
            "range": "stddev: 0.000730531203987649",
            "extra": "mean: 40.34500000000071 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 989.28945628671,
            "unit": "iter/sec",
            "range": "stddev: 0.00013189569244794527",
            "extra": "mean: 1.0108265014301192 msec\nrounds: 1049"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1608.1147946562742,
            "unit": "iter/sec",
            "range": "stddev: 0.00011330745444592623",
            "extra": "mean: 621.8461538460907 usec\nrounds: 1716"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1649.1297012731293,
            "unit": "iter/sec",
            "range": "stddev: 0.0003071908744365035",
            "extra": "mean: 606.3804437140385 usec\nrounds: 2434"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1638.5656781715354,
            "unit": "iter/sec",
            "range": "stddev: 0.0001564820032279203",
            "extra": "mean: 610.2898488120985 usec\nrounds: 2315"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1730126826092,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 803.9851692427021,
            "unit": "iter/sec",
            "range": "stddev: 0.00010637889490933554",
            "extra": "mean: 1.2438040380047435 msec\nrounds: 842"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1097.9191817412843,
            "unit": "iter/sec",
            "range": "stddev: 0.000043362214085084515",
            "extra": "mean: 910.813852813842 usec\nrounds: 1155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1373.515945922052,
            "unit": "iter/sec",
            "range": "stddev: 0.00001576703615076295",
            "extra": "mean: 728.0585296217237 usec\nrounds: 1401"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2576.4483562550095,
            "unit": "iter/sec",
            "range": "stddev: 0.00004105421254713893",
            "extra": "mean: 388.1312030075183 usec\nrounds: 2660"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 704.6824292999455,
            "unit": "iter/sec",
            "range": "stddev: 0.000253183330347152",
            "extra": "mean: 1.4190789473684375 msec\nrounds: 760"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 985.4221472901229,
            "unit": "iter/sec",
            "range": "stddev: 0.00008361770098769075",
            "extra": "mean: 1.014793510324449 msec\nrounds: 1017"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1298.6548551401947,
            "unit": "iter/sec",
            "range": "stddev: 0.00003558808563997425",
            "extra": "mean: 770.0275373721574 usec\nrounds: 1271"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2294.3011249112,
            "unit": "iter/sec",
            "range": "stddev: 0.000024757381033037242",
            "extra": "mean: 435.86257668714023 usec\nrounds: 2445"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.461988189554635,
            "unit": "iter/sec",
            "range": "stddev: 0.001064100946628551",
            "extra": "mean: 39.27423076923088 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.76189122720084,
            "unit": "iter/sec",
            "range": "stddev: 0.004374196639559605",
            "extra": "mean: 42.08419230769286 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 687.6323156962088,
            "unit": "iter/sec",
            "range": "stddev: 0.0008518329334191494",
            "extra": "mean: 1.4542655677657144 msec\nrounds: 1092"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1558.6868943664435,
            "unit": "iter/sec",
            "range": "stddev: 0.0001358289594635926",
            "extra": "mean: 641.5656689064984 usec\nrounds: 1637"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 917.4162497826775,
            "unit": "iter/sec",
            "range": "stddev: 0.0006498879813991745",
            "extra": "mean: 1.090017753922372 msec\nrounds: 2422"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1570.944998223427,
            "unit": "iter/sec",
            "range": "stddev: 0.0002397767440200994",
            "extra": "mean: 636.559523809487 usec\nrounds: 2184"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1730128908316,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 761.9915086741777,
            "unit": "iter/sec",
            "range": "stddev: 0.00013062052973355983",
            "extra": "mean: 1.3123505821474883 msec\nrounds: 773"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1025.7817383593367,
            "unit": "iter/sec",
            "range": "stddev: 0.00003743072566256847",
            "extra": "mean: 974.8662533215179 usec\nrounds: 1129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1278.8289725296042,
            "unit": "iter/sec",
            "range": "stddev: 0.00003272805807886659",
            "extra": "mean: 781.9653929343945 usec\nrounds: 1387"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2405.3952313198874,
            "unit": "iter/sec",
            "range": "stddev: 0.000018265932025192754",
            "extra": "mean: 415.73209549071913 usec\nrounds: 2639"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 676.4525594570795,
            "unit": "iter/sec",
            "range": "stddev: 0.00019604117749881476",
            "extra": "mean: 1.4783002680965531 msec\nrounds: 746"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 921.6370325852312,
            "unit": "iter/sec",
            "range": "stddev: 0.00006301707364024155",
            "extra": "mean: 1.0850258449304684 msec\nrounds: 1006"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1196.9371217193195,
            "unit": "iter/sec",
            "range": "stddev: 0.000043253913037817593",
            "extra": "mean: 835.4657749803661 usec\nrounds: 1271"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2081.068685197915,
            "unit": "iter/sec",
            "range": "stddev: 0.00007337105770740256",
            "extra": "mean: 480.52234273319885 usec\nrounds: 2305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.566119461372605,
            "unit": "iter/sec",
            "range": "stddev: 0.0019824354129874197",
            "extra": "mean: 42.4338000000003 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.88228517168031,
            "unit": "iter/sec",
            "range": "stddev: 0.002011490398518712",
            "extra": "mean: 41.8720399999998 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 912.2138955683105,
            "unit": "iter/sec",
            "range": "stddev: 0.0004578234862532715",
            "extra": "mean: 1.0962341232228199 msec\nrounds: 1055"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1555.3884848560265,
            "unit": "iter/sec",
            "range": "stddev: 0.0001287165669132523",
            "extra": "mean: 642.9261947972852 usec\nrounds: 1653"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 977.7489738603599,
            "unit": "iter/sec",
            "range": "stddev: 0.0010067299120142513",
            "extra": "mean: 1.022757401679276 msec\nrounds: 2263"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1671.7111702218929,
            "unit": "iter/sec",
            "range": "stddev: 0.00024935566315734267",
            "extra": "mean: 598.1894586893657 usec\nrounds: 2106"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1730296960456,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 836.0028050352912,
            "unit": "iter/sec",
            "range": "stddev: 0.000031184940612881785",
            "extra": "mean: 1.1961682352941216 msec\nrounds: 850"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1145.755807121296,
            "unit": "iter/sec",
            "range": "stddev: 0.00001646726231468269",
            "extra": "mean: 872.7863247863378 usec\nrounds: 1170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1392.172004472144,
            "unit": "iter/sec",
            "range": "stddev: 0.000011160890784201139",
            "extra": "mean: 718.3020465773265 usec\nrounds: 1417"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2623.382646925538,
            "unit": "iter/sec",
            "range": "stddev: 0.000007469490275373601",
            "extra": "mean: 381.1872435658388 usec\nrounds: 2681"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 756.3359114978708,
            "unit": "iter/sec",
            "range": "stddev: 0.000012720828300975802",
            "extra": "mean: 1.3221638491547616 msec\nrounds: 769"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 998.2725969278214,
            "unit": "iter/sec",
            "range": "stddev: 0.000026086382842668883",
            "extra": "mean: 1.0017303921569065 msec\nrounds: 1020"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1316.2308830784357,
            "unit": "iter/sec",
            "range": "stddev: 0.000015891826359242496",
            "extra": "mean: 759.7451274362849 usec\nrounds: 1334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2365.720803716835,
            "unit": "iter/sec",
            "range": "stddev: 0.000007998081404079436",
            "extra": "mean: 422.70414937759284 usec\nrounds: 2410"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.81582986970975,
            "unit": "iter/sec",
            "range": "stddev: 0.0005905889889305549",
            "extra": "mean: 38.73592307692269 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.33702941159895,
            "unit": "iter/sec",
            "range": "stddev: 0.002314676949147291",
            "extra": "mean: 39.46792592592616 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1003.6894366769124,
            "unit": "iter/sec",
            "range": "stddev: 0.00009760406195714496",
            "extra": "mean: 996.3241252302828 usec\nrounds: 1086"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1682.1304457079048,
            "unit": "iter/sec",
            "range": "stddev: 0.000031748989601214696",
            "extra": "mean: 594.4842164598964 usec\nrounds: 1774"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2357.4768606004204,
            "unit": "iter/sec",
            "range": "stddev: 0.000026238095565989572",
            "extra": "mean: 424.18231827111646 usec\nrounds: 2545"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 2085.951535026567,
            "unit": "iter/sec",
            "range": "stddev: 0.000042228335735869644",
            "extra": "mean: 479.3975234842951 usec\nrounds: 2342"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1730731859502,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 403.7881691683768,
            "unit": "iter/sec",
            "range": "stddev: 0.001621106293405795",
            "extra": "mean: 2.476546061415205 msec\nrounds: 749"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 749.1853151017281,
            "unit": "iter/sec",
            "range": "stddev: 0.0007515571416423552",
            "extra": "mean: 1.3347832369941943 msec\nrounds: 1038"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 968.980805844742,
            "unit": "iter/sec",
            "range": "stddev: 0.0006751620979672013",
            "extra": "mean: 1.0320121863799108 msec\nrounds: 1395"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1595.1074590042736,
            "unit": "iter/sec",
            "range": "stddev: 0.0005169995187653696",
            "extra": "mean: 626.9170107349619 usec\nrounds: 2422"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 453.08975101469923,
            "unit": "iter/sec",
            "range": "stddev: 0.0010884139339085005",
            "extra": "mean: 2.207068241469796 msec\nrounds: 762"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 679.6466643250697,
            "unit": "iter/sec",
            "range": "stddev: 0.0008334076503333868",
            "extra": "mean: 1.4713527667984077 msec\nrounds: 1012"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 845.5167724096701,
            "unit": "iter/sec",
            "range": "stddev: 0.0007745835396682846",
            "extra": "mean: 1.182708649468966 msec\nrounds: 1318"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1551.4910433404336,
            "unit": "iter/sec",
            "range": "stddev: 0.00035699269229107124",
            "extra": "mean: 644.541265186393 usec\nrounds: 2387"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 15.003704039434565,
            "unit": "iter/sec",
            "range": "stddev: 0.02174775139996618",
            "extra": "mean: 66.65020833333409 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.438746303652906,
            "unit": "iter/sec",
            "range": "stddev: 0.007583399829671374",
            "extra": "mean: 48.92667999999958 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 889.9896800826588,
            "unit": "iter/sec",
            "range": "stddev: 0.00035663758695928693",
            "extra": "mean: 1.1236085343226945 msec\nrounds: 1078"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1263.3970194764117,
            "unit": "iter/sec",
            "range": "stddev: 0.0002984929792246712",
            "extra": "mean: 791.5168269230435 usec\nrounds: 1664"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1121.9298375220644,
            "unit": "iter/sec",
            "range": "stddev: 0.0006415002586209487",
            "extra": "mean: 891.3213345039801 usec\nrounds: 2278"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1477.062075884078,
            "unit": "iter/sec",
            "range": "stddev: 0.00021462382645142896",
            "extra": "mean: 677.019616390504 usec\nrounds: 2294"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1730735184544,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 585.5769070313207,
            "unit": "iter/sec",
            "range": "stddev: 0.0006438729648497087",
            "extra": "mean: 1.7077176165803154 msec\nrounds: 772"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 705.2349317997559,
            "unit": "iter/sec",
            "range": "stddev: 0.0007454806260652071",
            "extra": "mean: 1.4179671977506916 msec\nrounds: 1067"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 822.8055850361031,
            "unit": "iter/sec",
            "range": "stddev: 0.0008476256338131658",
            "extra": "mean: 1.2153539282990184 msec\nrounds: 1311"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1579.8675361467283,
            "unit": "iter/sec",
            "range": "stddev: 0.00045845585926882816",
            "extra": "mean: 632.9644588045553 usec\nrounds: 2476"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 540.0788669454139,
            "unit": "iter/sec",
            "range": "stddev: 0.0006670613735252781",
            "extra": "mean: 1.8515814285713768 msec\nrounds: 700"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 745.397827033592,
            "unit": "iter/sec",
            "range": "stddev: 0.0004280939294830021",
            "extra": "mean: 1.341565488565523 msec\nrounds: 962"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 956.95192171017,
            "unit": "iter/sec",
            "range": "stddev: 0.00038626513909789987",
            "extra": "mean: 1.0449845779220537 msec\nrounds: 1232"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1698.3815998861876,
            "unit": "iter/sec",
            "range": "stddev: 0.00028478172290084347",
            "extra": "mean: 588.7958277851175 usec\nrounds: 2253"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.815276956295516,
            "unit": "iter/sec",
            "range": "stddev: 0.005518659595075293",
            "extra": "mean: 56.13160000000015 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.95253861719303,
            "unit": "iter/sec",
            "range": "stddev: 0.005745766646596815",
            "extra": "mean: 55.702428571428136 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 765.4190746436491,
            "unit": "iter/sec",
            "range": "stddev: 0.0005146767421031757",
            "extra": "mean: 1.3064738430585403 msec\nrounds: 994"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1216.8294101075182,
            "unit": "iter/sec",
            "range": "stddev: 0.000532050619791413",
            "extra": "mean: 821.8078817733708 usec\nrounds: 1624"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1307.205662913538,
            "unit": "iter/sec",
            "range": "stddev: 0.0005136820982537328",
            "extra": "mean: 764.9905660377656 usec\nrounds: 2332"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1455.242680586072,
            "unit": "iter/sec",
            "range": "stddev: 0.0003994884946538038",
            "extra": "mean: 687.1706096451683 usec\nrounds: 2198"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1730736113242,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 715.8009132992609,
            "unit": "iter/sec",
            "range": "stddev: 0.0001668525022200479",
            "extra": "mean: 1.3970364963503779 msec\nrounds: 822"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1002.9967479120111,
            "unit": "iter/sec",
            "range": "stddev: 0.0001933492437090481",
            "extra": "mean: 997.0122057541565 usec\nrounds: 1147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1275.0559041789816,
            "unit": "iter/sec",
            "range": "stddev: 0.00008395145612975736",
            "extra": "mean: 784.2793376529697 usec\nrounds: 1389"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2322.1668753434046,
            "unit": "iter/sec",
            "range": "stddev: 0.00005707514464421674",
            "extra": "mean: 430.632273079909 usec\nrounds: 2578"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 697.9404294918637,
            "unit": "iter/sec",
            "range": "stddev: 0.00011934640278710782",
            "extra": "mean: 1.4327870370370308 msec\nrounds: 756"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 923.5940794876658,
            "unit": "iter/sec",
            "range": "stddev: 0.00012578001852709162",
            "extra": "mean: 1.0827267326732086 msec\nrounds: 1010"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1170.1920823059422,
            "unit": "iter/sec",
            "range": "stddev: 0.0001355762551506967",
            "extra": "mean: 854.560559006204 usec\nrounds: 1288"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2278.004527931579,
            "unit": "iter/sec",
            "range": "stddev: 0.00004844446777551328",
            "extra": "mean: 438.980690221892 usec\nrounds: 2434"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.300541236962466,
            "unit": "iter/sec",
            "range": "stddev: 0.0009056459216406079",
            "extra": "mean: 39.524846153846866 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.287708257065972,
            "unit": "iter/sec",
            "range": "stddev: 0.00040919520066942384",
            "extra": "mean: 38.04059259259339 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1021.724743735739,
            "unit": "iter/sec",
            "range": "stddev: 0.00005930934812111637",
            "extra": "mean: 978.7371854612167 usec\nrounds: 1073"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1641.6122904103875,
            "unit": "iter/sec",
            "range": "stddev: 0.000054549768182823",
            "extra": "mean: 609.1572327044466 usec\nrounds: 1749"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2001.4574879434988,
            "unit": "iter/sec",
            "range": "stddev: 0.00006708701166937201",
            "extra": "mean: 499.6358933546482 usec\nrounds: 2513"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1769.609312455334,
            "unit": "iter/sec",
            "range": "stddev: 0.00010306401423437694",
            "extra": "mean: 565.0964837049255 usec\nrounds: 2332"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1730737035928,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 452.9309826274973,
            "unit": "iter/sec",
            "range": "stddev: 0.0015105611518373742",
            "extra": "mean: 2.2078418972332194 msec\nrounds: 759"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 617.6166864777406,
            "unit": "iter/sec",
            "range": "stddev: 0.0011791312287230205",
            "extra": "mean: 1.6191272384543012 msec\nrounds: 1061"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 716.2466689567433,
            "unit": "iter/sec",
            "range": "stddev: 0.0010598634672186096",
            "extra": "mean: 1.3961670515781393 msec\nrounds: 1299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1436.7106815353015,
            "unit": "iter/sec",
            "range": "stddev: 0.0006402258559185122",
            "extra": "mean: 696.0343601896085 usec\nrounds: 2532"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 344.13116777713765,
            "unit": "iter/sec",
            "range": "stddev: 0.001973993337795774",
            "extra": "mean: 2.9058687315634506 msec\nrounds: 678"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 504.2508021441999,
            "unit": "iter/sec",
            "range": "stddev: 0.0012623461994272394",
            "extra": "mean: 1.9831401273884965 msec\nrounds: 942"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 678.4756218490458,
            "unit": "iter/sec",
            "range": "stddev: 0.0010424964017743403",
            "extra": "mean: 1.4738923076922141 msec\nrounds: 1235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1323.5243562857206,
            "unit": "iter/sec",
            "range": "stddev: 0.000503286147794221",
            "extra": "mean: 755.5584415585332 usec\nrounds: 2310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.457579838325987,
            "unit": "iter/sec",
            "range": "stddev: 0.018485319715410963",
            "extra": "mean: 87.27846666666608 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.503078279876492,
            "unit": "iter/sec",
            "range": "stddev: 0.013921258258355487",
            "extra": "mean: 74.05718750000068 msec\nrounds: 16"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 692.8959361436312,
            "unit": "iter/sec",
            "range": "stddev: 0.0007016528161441413",
            "extra": "mean: 1.443218162839259 msec\nrounds: 958"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 986.3869059376177,
            "unit": "iter/sec",
            "range": "stddev: 0.0007245999010887127",
            "extra": "mean: 1.0138009679370614 msec\nrounds: 1653"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 750.6390201376677,
            "unit": "iter/sec",
            "range": "stddev: 0.001092279542575569",
            "extra": "mean: 1.332198264642037 msec\nrounds: 2305"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 819.0353168028533,
            "unit": "iter/sec",
            "range": "stddev: 0.000861814739963733",
            "extra": "mean: 1.2209485714285822 msec\nrounds: 1575"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1730904795003,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 573.74025507953,
            "unit": "iter/sec",
            "range": "stddev: 0.0006960158894468925",
            "extra": "mean: 1.74294899328858 msec\nrounds: 745"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 788.9960346342853,
            "unit": "iter/sec",
            "range": "stddev: 0.0005319951968676101",
            "extra": "mean: 1.2674334928229636 msec\nrounds: 1045"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1029.179608286057,
            "unit": "iter/sec",
            "range": "stddev: 0.00038308847012718595",
            "extra": "mean: 971.6477007014828 usec\nrounds: 1283"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1959.0258503096236,
            "unit": "iter/sec",
            "range": "stddev: 0.00022144947201569405",
            "extra": "mean: 510.45778688522677 usec\nrounds: 2440"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 485.0023967319816,
            "unit": "iter/sec",
            "range": "stddev: 0.0008124970177338003",
            "extra": "mean: 2.061845481049473 msec\nrounds: 686"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 651.6884237401099,
            "unit": "iter/sec",
            "range": "stddev: 0.0006358821892221877",
            "extra": "mean: 1.5344756229685537 msec\nrounds: 923"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1027.3856386589785,
            "unit": "iter/sec",
            "range": "stddev: 0.00026492063587618155",
            "extra": "mean: 973.3443435176646 usec\nrounds: 1211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1589.1414102053918,
            "unit": "iter/sec",
            "range": "stddev: 0.000428230487021983",
            "extra": "mean: 629.2706197057398 usec\nrounds: 2243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.69614696797231,
            "unit": "iter/sec",
            "range": "stddev: 0.0066448080790273",
            "extra": "mean: 53.48695652174021 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.834055072559977,
            "unit": "iter/sec",
            "range": "stddev: 0.009256605178645306",
            "extra": "mean: 50.41833333333233 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 633.2976883704396,
            "unit": "iter/sec",
            "range": "stddev: 0.0008230613047828755",
            "extra": "mean: 1.5790362389812838 msec\nrounds: 1021"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1269.3509996333737,
            "unit": "iter/sec",
            "range": "stddev: 0.0002901950410824091",
            "extra": "mean: 787.8041615666824 usec\nrounds: 1634"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 981.2952072329665,
            "unit": "iter/sec",
            "range": "stddev: 0.0007098322054855565",
            "extra": "mean: 1.019061331013505 msec\nrounds: 2299"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 916.8981731864754,
            "unit": "iter/sec",
            "range": "stddev: 0.0009307417222668218",
            "extra": "mean: 1.090633648581415 msec\nrounds: 2009"
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
        "date": 1730939317223,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 466.6431128507271,
            "unit": "iter/sec",
            "range": "stddev: 0.0011540239519494749",
            "extra": "mean: 2.142965303593555 msec\nrounds: 807"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 656.8893336412951,
            "unit": "iter/sec",
            "range": "stddev: 0.0009277602912219666",
            "extra": "mean: 1.5223264388489308 msec\nrounds: 1112"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1164.120358753435,
            "unit": "iter/sec",
            "range": "stddev: 0.0003273832147986358",
            "extra": "mean: 859.0177059276081 usec\nrounds: 1299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2184.6109463682574,
            "unit": "iter/sec",
            "range": "stddev: 0.00016947765350182927",
            "extra": "mean: 457.7474088292109 usec\nrounds: 2605"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 519.934041009366,
            "unit": "iter/sec",
            "range": "stddev: 0.0007501826790953945",
            "extra": "mean: 1.9233208852004868 msec\nrounds: 723"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 810.9475353688682,
            "unit": "iter/sec",
            "range": "stddev: 0.0006165448865482311",
            "extra": "mean: 1.2331253951528927 msec\nrounds: 949"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1140.1066438214316,
            "unit": "iter/sec",
            "range": "stddev: 0.0001643900809214319",
            "extra": "mean: 877.1109311741054 usec\nrounds: 1235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2149.2211068725796,
            "unit": "iter/sec",
            "range": "stddev: 0.00008104009271715865",
            "extra": "mean: 465.2848405416702 usec\nrounds: 2289"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.90644650277915,
            "unit": "iter/sec",
            "range": "stddev: 0.004010590911162737",
            "extra": "mean: 47.83213636363632 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.000240394346356,
            "unit": "iter/sec",
            "range": "stddev: 0.006901125526864298",
            "extra": "mean: 52.63091304347688 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 889.688318972578,
            "unit": "iter/sec",
            "range": "stddev: 0.00020385342885359257",
            "extra": "mean: 1.1239891304348149 msec\nrounds: 1012"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1291.3589923676795,
            "unit": "iter/sec",
            "range": "stddev: 0.0005052747871050248",
            "extra": "mean: 774.3780048075718 usec\nrounds: 1664"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1543.3139006745455,
            "unit": "iter/sec",
            "range": "stddev: 0.0003414031378652318",
            "extra": "mean: 647.9563227953328 usec\nrounds: 2404"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 966.6205486398875,
            "unit": "iter/sec",
            "range": "stddev: 0.0007106106769982211",
            "extra": "mean: 1.0345321143928505 msec\nrounds: 2133"
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
        "date": 1730940855619,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 818.953652494241,
            "unit": "iter/sec",
            "range": "stddev: 0.00005865160323527372",
            "extra": "mean: 1.2210703218116876 msec\nrounds: 839"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1091.5030899306341,
            "unit": "iter/sec",
            "range": "stddev: 0.0000995435243698262",
            "extra": "mean: 916.1678141136098 usec\nrounds: 1162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1377.2249356774685,
            "unit": "iter/sec",
            "range": "stddev: 0.000015383755436814803",
            "extra": "mean: 726.0978029766006 usec\nrounds: 1411"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2639.2180181553745,
            "unit": "iter/sec",
            "range": "stddev: 0.000012534143302267344",
            "extra": "mean: 378.9001109877724 usec\nrounds: 2703"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 702.5841228930369,
            "unit": "iter/sec",
            "range": "stddev: 0.00020636691863981107",
            "extra": "mean: 1.4233171052631977 msec\nrounds: 760"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1006.6545057835762,
            "unit": "iter/sec",
            "range": "stddev: 0.000012905572727835797",
            "extra": "mean: 993.3894839338187 usec\nrounds: 1027"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1290.0917647035556,
            "unit": "iter/sec",
            "range": "stddev: 0.00006371252180699036",
            "extra": "mean: 775.138658628509 usec\nrounds: 1327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2047.6498393458119,
            "unit": "iter/sec",
            "range": "stddev: 0.00005076972388139199",
            "extra": "mean: 488.36474908204156 usec\nrounds: 2451"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.2667341094107,
            "unit": "iter/sec",
            "range": "stddev: 0.0014745637065295748",
            "extra": "mean: 39.57773076923091 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.872403057542794,
            "unit": "iter/sec",
            "range": "stddev: 0.0026504534638630297",
            "extra": "mean: 38.65122222222268 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1021.4390256870429,
            "unit": "iter/sec",
            "range": "stddev: 0.0002002285802290246",
            "extra": "mean: 979.0109589041573 usec\nrounds: 1095"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1691.9865662509014,
            "unit": "iter/sec",
            "range": "stddev: 0.0000616076983591322",
            "extra": "mean: 591.0212409167035 usec\nrounds: 1789"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1850.5941901890976,
            "unit": "iter/sec",
            "range": "stddev: 0.00019722161310510537",
            "extra": "mean: 540.3669833729554 usec\nrounds: 2526"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1654.7408568791632,
            "unit": "iter/sec",
            "range": "stddev: 0.00017785915220111637",
            "extra": "mean: 604.3242335153296 usec\nrounds: 2381"
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
        "date": 1730941823285,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 691.2200576861127,
            "unit": "iter/sec",
            "range": "stddev: 0.00023693502416805476",
            "extra": "mean: 1.4467172774869133 msec\nrounds: 764"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 784.3102369535978,
            "unit": "iter/sec",
            "range": "stddev: 0.000594188995131696",
            "extra": "mean: 1.275005671077532 msec\nrounds: 1058"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1347.5030222712203,
            "unit": "iter/sec",
            "range": "stddev: 0.00003693767856499795",
            "extra": "mean: 742.113363363369 usec\nrounds: 1332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2324.3644506103537,
            "unit": "iter/sec",
            "range": "stddev: 0.0000661765894546101",
            "extra": "mean: 430.22513089004195 usec\nrounds: 2674"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 519.689467745436,
            "unit": "iter/sec",
            "range": "stddev: 0.000592882625442931",
            "extra": "mean: 1.924226027397266 msec\nrounds: 730"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 811.9306753225895,
            "unit": "iter/sec",
            "range": "stddev: 0.0003280603086171809",
            "extra": "mean: 1.2316322444680248 msec\nrounds: 949"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1039.3015063818648,
            "unit": "iter/sec",
            "range": "stddev: 0.00016804204550570064",
            "extra": "mean: 962.1846921797645 usec\nrounds: 1202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1680.6537183726625,
            "unit": "iter/sec",
            "range": "stddev: 0.00036508068873425105",
            "extra": "mean: 595.0065674256066 usec\nrounds: 2284"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 15.655764042288407,
            "unit": "iter/sec",
            "range": "stddev: 0.01015637130034639",
            "extra": "mean: 63.87423809523829 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.331931683208655,
            "unit": "iter/sec",
            "range": "stddev: 0.004592557846850937",
            "extra": "mean: 46.878080000000466 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 782.3354950820011,
            "unit": "iter/sec",
            "range": "stddev: 0.0006435343758745259",
            "extra": "mean: 1.2782239925023269 msec\nrounds: 1067"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1468.7309666571755,
            "unit": "iter/sec",
            "range": "stddev: 0.0001855155974208161",
            "extra": "mean: 680.8598870057157 usec\nrounds: 1770"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 810.8609326489791,
            "unit": "iter/sec",
            "range": "stddev: 0.0014175782641795633",
            "extra": "mean: 1.2332570971610726 msec\nrounds: 2501"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1345.623934240079,
            "unit": "iter/sec",
            "range": "stddev: 0.00045832282852703056",
            "extra": "mean: 743.1496828753533 usec\nrounds: 2365"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1730989722124,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 745.6402963850018,
            "unit": "iter/sec",
            "range": "stddev: 0.00022290286685303217",
            "extra": "mean: 1.341129234629861 msec\nrounds: 797"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1004.9381852583142,
            "unit": "iter/sec",
            "range": "stddev: 0.0001435440188314145",
            "extra": "mean: 995.0860805860963 usec\nrounds: 1092"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1040.3674432469732,
            "unit": "iter/sec",
            "range": "stddev: 0.000485921350485324",
            "extra": "mean: 961.1988595865832 usec\nrounds: 1403"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2454.7427420184026,
            "unit": "iter/sec",
            "range": "stddev: 0.00008408378147511817",
            "extra": "mean: 407.37466410747135 usec\nrounds: 2605"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 685.2677471572139,
            "unit": "iter/sec",
            "range": "stddev: 0.00009595470173327007",
            "extra": "mean: 1.4592836218374954 msec\nrounds: 751"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 980.3411240088086,
            "unit": "iter/sec",
            "range": "stddev: 0.00007734521711754204",
            "extra": "mean: 1.020053097345139 msec\nrounds: 1017"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1226.8886012824482,
            "unit": "iter/sec",
            "range": "stddev: 0.00009615036543999175",
            "extra": "mean: 815.0699248120123 usec\nrounds: 1330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2321.517675322637,
            "unit": "iter/sec",
            "range": "stddev: 0.000022760403151685774",
            "extra": "mean: 430.7526970954564 usec\nrounds: 2410"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.206817086732002,
            "unit": "iter/sec",
            "range": "stddev: 0.001153482345568197",
            "extra": "mean: 39.67180769230739 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.10017052111448,
            "unit": "iter/sec",
            "range": "stddev: 0.000164883391412102",
            "extra": "mean: 38.31392592592532 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1035.800636591698,
            "unit": "iter/sec",
            "range": "stddev: 0.00009636630293527525",
            "extra": "mean: 965.4367497692413 usec\nrounds: 1083"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1604.4108565131837,
            "unit": "iter/sec",
            "range": "stddev: 0.00014705545693629622",
            "extra": "mean: 623.2817460318543 usec\nrounds: 1764"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1609.2132684334154,
            "unit": "iter/sec",
            "range": "stddev: 0.00016737468559091247",
            "extra": "mean: 621.4216720780022 usec\nrounds: 2464"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1103.09965920828,
            "unit": "iter/sec",
            "range": "stddev: 0.0005575499331038288",
            "extra": "mean: 906.5364055299619 usec\nrounds: 2170"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1731509980196,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 629.1781360597752,
            "unit": "iter/sec",
            "range": "stddev: 0.0003418848881933307",
            "extra": "mean: 1.5893749999999915 msec\nrounds: 832"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 795.9333262459388,
            "unit": "iter/sec",
            "range": "stddev: 0.00040580370310076955",
            "extra": "mean: 1.2563866432337396 msec\nrounds: 1138"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 905.6528592604475,
            "unit": "iter/sec",
            "range": "stddev: 0.0007038805456519299",
            "extra": "mean: 1.1041758326878093 msec\nrounds: 1291"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1843.6332427950342,
            "unit": "iter/sec",
            "range": "stddev: 0.00035163477594306623",
            "extra": "mean: 542.4072298045317 usec\nrounds: 2711"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 657.6191524256504,
            "unit": "iter/sec",
            "range": "stddev: 0.0001682645734695801",
            "extra": "mean: 1.5206369770580226 msec\nrounds: 741"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 761.1356701126444,
            "unit": "iter/sec",
            "range": "stddev: 0.000425195031886417",
            "extra": "mean: 1.3138262195122254 msec\nrounds: 984"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1099.4777910648247,
            "unit": "iter/sec",
            "range": "stddev: 0.00022318047176500785",
            "extra": "mean: 909.5226917057759 usec\nrounds: 1278"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1667.524867944903,
            "unit": "iter/sec",
            "range": "stddev: 0.0004100937639086931",
            "extra": "mean: 599.6912065439981 usec\nrounds: 2445"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.875177634577685,
            "unit": "iter/sec",
            "range": "stddev: 0.01002697375772374",
            "extra": "mean: 55.943500000000185 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.148534310256615,
            "unit": "iter/sec",
            "range": "stddev: 0.00560791120086574",
            "extra": "mean: 52.22331818181851 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 848.244185532584,
            "unit": "iter/sec",
            "range": "stddev: 0.00032061239537874576",
            "extra": "mean: 1.1789058116232576 msec\nrounds: 998"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1443.2568923508136,
            "unit": "iter/sec",
            "range": "stddev: 0.00015900523416552802",
            "extra": "mean: 692.877342419044 usec\nrounds: 1761"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1235.786833243855,
            "unit": "iter/sec",
            "range": "stddev: 0.0004702646671667832",
            "extra": "mean: 809.2010475423735 usec\nrounds: 2482"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1521.1832206995673,
            "unit": "iter/sec",
            "range": "stddev: 0.0002717488624640184",
            "extra": "mean: 657.3830071173915 usec\nrounds: 2248"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1731596120120,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 708.4456105819655,
            "unit": "iter/sec",
            "range": "stddev: 0.00040218180614703903",
            "extra": "mean: 1.411540963855407 msec\nrounds: 830"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 975.9831757474276,
            "unit": "iter/sec",
            "range": "stddev: 0.00021222336240922187",
            "extra": "mean: 1.0246078260869402 msec\nrounds: 1150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1229.1229210778433,
            "unit": "iter/sec",
            "range": "stddev: 0.0000904901564677741",
            "extra": "mean: 813.5882773409509 usec\nrounds: 1399"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2180.4456171211223,
            "unit": "iter/sec",
            "range": "stddev: 0.0001741177110859503",
            "extra": "mean: 458.6218487394866 usec\nrounds: 2618"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 586.6615251387082,
            "unit": "iter/sec",
            "range": "stddev: 0.0005822693604869634",
            "extra": "mean: 1.7045603932583844 msec\nrounds: 712"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 737.6571771530223,
            "unit": "iter/sec",
            "range": "stddev: 0.0009640762074708749",
            "extra": "mean: 1.3556432865731562 msec\nrounds: 998"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 930.1564534947383,
            "unit": "iter/sec",
            "range": "stddev: 0.0006538470291583223",
            "extra": "mean: 1.075087955626012 msec\nrounds: 1262"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1631.177224670395,
            "unit": "iter/sec",
            "range": "stddev: 0.0004398537318830152",
            "extra": "mean: 613.0541702493828 usec\nrounds: 2326"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 16.92232812555374,
            "unit": "iter/sec",
            "range": "stddev: 0.01088467424234212",
            "extra": "mean: 59.09352380952474 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 18.44948890904959,
            "unit": "iter/sec",
            "range": "stddev: 0.009944332568116323",
            "extra": "mean: 54.202043478261 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 799.2878779227865,
            "unit": "iter/sec",
            "range": "stddev: 0.0006811317696060319",
            "extra": "mean: 1.2511136820926527 msec\nrounds: 994"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1406.6480064793511,
            "unit": "iter/sec",
            "range": "stddev: 0.00033103317540878445",
            "extra": "mean: 710.909904534585 usec\nrounds: 1676"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 920.3865623561778,
            "unit": "iter/sec",
            "range": "stddev: 0.0010146372678709512",
            "extra": "mean: 1.0865000000000138 msec\nrounds: 2370"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1059.3917004307725,
            "unit": "iter/sec",
            "range": "stddev: 0.0007199457773590717",
            "extra": "mean: 943.9379217275136 usec\nrounds: 2223"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1732286756800,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 512.083923957736,
            "unit": "iter/sec",
            "range": "stddev: 0.0012661175347373765",
            "extra": "mean: 1.9528049079754617 msec\nrounds: 815"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1016.7547915606476,
            "unit": "iter/sec",
            "range": "stddev: 0.00011402880860450832",
            "extra": "mean: 983.5213055303825 usec\nrounds: 1103"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1052.8989845937015,
            "unit": "iter/sec",
            "range": "stddev: 0.00028932969218482563",
            "extra": "mean: 949.7587276958819 usec\nrounds: 1289"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2234.335298654681,
            "unit": "iter/sec",
            "range": "stddev: 0.00010299939175414344",
            "extra": "mean: 447.56039999999615 usec\nrounds: 2500"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 591.1585313358958,
            "unit": "iter/sec",
            "range": "stddev: 0.0005510227812525392",
            "extra": "mean: 1.6915936199723063 msec\nrounds: 721"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 645.6354716041022,
            "unit": "iter/sec",
            "range": "stddev: 0.0009147487922503785",
            "extra": "mean: 1.5488616161616207 msec\nrounds: 990"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 925.0427012112302,
            "unit": "iter/sec",
            "range": "stddev: 0.0006044592900672742",
            "extra": "mean: 1.081031176929046 msec\nrounds: 1283"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1723.2929583486712,
            "unit": "iter/sec",
            "range": "stddev: 0.0003009516581047346",
            "extra": "mean: 580.2843881856514 usec\nrounds: 2370"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.08032206138615,
            "unit": "iter/sec",
            "range": "stddev: 0.019714665837016233",
            "extra": "mean: 82.77925000000005 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.892075004999509,
            "unit": "iter/sec",
            "range": "stddev: 0.013792567906735833",
            "extra": "mean: 67.14980952380941 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 600.4264411202995,
            "unit": "iter/sec",
            "range": "stddev: 0.0007454763336027372",
            "extra": "mean: 1.6654829493087617 msec\nrounds: 1085"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1122.9306129632882,
            "unit": "iter/sec",
            "range": "stddev: 0.0004081518719182577",
            "extra": "mean: 890.5269733105877 usec\nrounds: 1761"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1045.360820443603,
            "unit": "iter/sec",
            "range": "stddev: 0.0008028293616642092",
            "extra": "mean: 956.6074990027329 usec\nrounds: 2507"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1284.4564248709823,
            "unit": "iter/sec",
            "range": "stddev: 0.00045594212424958624",
            "extra": "mean: 778.5394511148522 usec\nrounds: 2332"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1732315963678,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 815.4928100717214,
            "unit": "iter/sec",
            "range": "stddev: 0.00004952499634023803",
            "extra": "mean: 1.2262523809523858 msec\nrounds: 840"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1098.878077858468,
            "unit": "iter/sec",
            "range": "stddev: 0.00005391248876254938",
            "extra": "mean: 910.0190641247798 usec\nrounds: 1154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1376.5020481921654,
            "unit": "iter/sec",
            "range": "stddev: 0.000044520856700915",
            "extra": "mean: 726.4791224345464 usec\nrounds: 1413"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2619.7346779991603,
            "unit": "iter/sec",
            "range": "stddev: 0.000007407053087425364",
            "extra": "mean: 381.71804511278094 usec\nrounds: 2660"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 742.9788018254457,
            "unit": "iter/sec",
            "range": "stddev: 0.00007170046266011804",
            "extra": "mean: 1.3459334203655229 msec\nrounds: 766"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1006.1861817097334,
            "unit": "iter/sec",
            "range": "stddev: 0.0000360202853617574",
            "extra": "mean: 993.8518518518891 usec\nrounds: 1026"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1292.068324031706,
            "unit": "iter/sec",
            "range": "stddev: 0.0000771180564738155",
            "extra": "mean: 773.9528795812048 usec\nrounds: 1337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2351.284380698804,
            "unit": "iter/sec",
            "range": "stddev: 0.000049412136777805926",
            "extra": "mean: 425.2994696042675 usec\nrounds: 2451"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.588460785191803,
            "unit": "iter/sec",
            "range": "stddev: 0.0010535036906218038",
            "extra": "mean: 39.08011538461532 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.578831830810213,
            "unit": "iter/sec",
            "range": "stddev: 0.00023710804514271434",
            "extra": "mean: 37.623925925924205 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 994.1055173319122,
            "unit": "iter/sec",
            "range": "stddev: 0.00015678677727645887",
            "extra": "mean: 1.0059294336117437 msec\nrounds: 1077"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1677.8570937067177,
            "unit": "iter/sec",
            "range": "stddev: 0.000056424289013218665",
            "extra": "mean: 595.9983146066406 usec\nrounds: 1780"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1966.4113974809368,
            "unit": "iter/sec",
            "range": "stddev: 0.00012999551550836133",
            "extra": "mean: 508.54058376647214 usec\nrounds: 2501"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1599.658886153224,
            "unit": "iter/sec",
            "range": "stddev: 0.0002552881792953405",
            "extra": "mean: 625.1332760103296 usec\nrounds: 2326"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1732545937909,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 723.7475049987677,
            "unit": "iter/sec",
            "range": "stddev: 0.00009220295357223602",
            "extra": "mean: 1.3816973365617373 msec\nrounds: 826"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 985.6821096378942,
            "unit": "iter/sec",
            "range": "stddev: 0.00010077539792666713",
            "extra": "mean: 1.0145258701787392 msec\nrounds: 1063"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1239.7623654915847,
            "unit": "iter/sec",
            "range": "stddev: 0.00010922100900881174",
            "extra": "mean: 806.6061915046798 usec\nrounds: 1389"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2302.382036109904,
            "unit": "iter/sec",
            "range": "stddev: 0.00005251584457032101",
            "extra": "mean: 434.33278418450317 usec\nrounds: 2428"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 649.9953937334212,
            "unit": "iter/sec",
            "range": "stddev: 0.00011975304155180852",
            "extra": "mean: 1.5384724409449033 msec\nrounds: 762"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 884.2887912402517,
            "unit": "iter/sec",
            "range": "stddev: 0.00015098968003197992",
            "extra": "mean: 1.1308522848033145 msec\nrounds: 941"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1059.840137883462,
            "unit": "iter/sec",
            "range": "stddev: 0.0002997087965803399",
            "extra": "mean: 943.5385245901663 usec\nrounds: 1220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2064.6194230608576,
            "unit": "iter/sec",
            "range": "stddev: 0.000056902337432377136",
            "extra": "mean: 484.3507664562563 usec\nrounds: 2218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 21.28000890486541,
            "unit": "iter/sec",
            "range": "stddev: 0.0037245814501041525",
            "extra": "mean: 46.99246153846122 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.8796165991022,
            "unit": "iter/sec",
            "range": "stddev: 0.007426177823977847",
            "extra": "mean: 45.70464000000044 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 910.224459998443,
            "unit": "iter/sec",
            "range": "stddev: 0.0002590362474129066",
            "extra": "mean: 1.0986301115240418 msec\nrounds: 1076"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1562.8169306061754,
            "unit": "iter/sec",
            "range": "stddev: 0.00011028689323931363",
            "extra": "mean: 639.8702115494273 usec\nrounds: 1749"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1833.4600731395528,
            "unit": "iter/sec",
            "range": "stddev: 0.00010058068093657004",
            "extra": "mean: 545.4168403501883 usec\nrounds: 2399"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1191.7469949755498,
            "unit": "iter/sec",
            "range": "stddev: 0.0004755198509291355",
            "extra": "mean: 839.1042765083845 usec\nrounds: 1707"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1732632076869,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 731.9064533715662,
            "unit": "iter/sec",
            "range": "stddev: 0.00007098695593523929",
            "extra": "mean: 1.3662948255114389 msec\nrounds: 831"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 995.81860460265,
            "unit": "iter/sec",
            "range": "stddev: 0.00007752659292304792",
            "extra": "mean: 1.0041989528795945 msec\nrounds: 1146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1226.1250543425792,
            "unit": "iter/sec",
            "range": "stddev: 0.00005694389145118682",
            "extra": "mean: 815.5774946921524 usec\nrounds: 1413"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2360.5214454384995,
            "unit": "iter/sec",
            "range": "stddev: 0.000029342898376132242",
            "extra": "mean: 423.63521074227566 usec\nrounds: 2681"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 657.9882723776576,
            "unit": "iter/sec",
            "range": "stddev: 0.00008883927977239746",
            "extra": "mean: 1.5197839262187365 msec\nrounds: 759"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 894.34930403708,
            "unit": "iter/sec",
            "range": "stddev: 0.00004769463346503966",
            "extra": "mean: 1.1181313559322004 msec\nrounds: 944"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1169.097578360077,
            "unit": "iter/sec",
            "range": "stddev: 0.000051600053867855333",
            "extra": "mean: 855.3605947954536 usec\nrounds: 1345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2211.674589950387,
            "unit": "iter/sec",
            "range": "stddev: 0.00003615814630307972",
            "extra": "mean: 452.14608177165536 usec\nrounds: 2348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.114710705561322,
            "unit": "iter/sec",
            "range": "stddev: 0.0027030140111765737",
            "extra": "mean: 45.21876923076927 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.648300637026818,
            "unit": "iter/sec",
            "range": "stddev: 0.003505209233961032",
            "extra": "mean: 44.15342307692345 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 959.8852356992558,
            "unit": "iter/sec",
            "range": "stddev: 0.00008230012810874895",
            "extra": "mean: 1.0417912087912484 msec\nrounds: 1092"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1657.1822520046921,
            "unit": "iter/sec",
            "range": "stddev: 0.00004406478998483658",
            "extra": "mean: 603.4339305711853 usec\nrounds: 1786"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2190.7052870874977,
            "unit": "iter/sec",
            "range": "stddev: 0.00005280013887433853",
            "extra": "mean: 456.4739976181285 usec\nrounds: 2519"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 2040.2056292032105,
            "unit": "iter/sec",
            "range": "stddev: 0.000046916205107453526",
            "extra": "mean: 490.1466723187817 usec\nrounds: 2359"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1733150533709,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 793.0198962003808,
            "unit": "iter/sec",
            "range": "stddev: 0.00010059223899814667",
            "extra": "mean: 1.2610024096385588 msec\nrounds: 830"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1130.236517892958,
            "unit": "iter/sec",
            "range": "stddev: 0.000024622807886731843",
            "extra": "mean: 884.7705627705682 usec\nrounds: 1155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1374.3274464197532,
            "unit": "iter/sec",
            "range": "stddev: 0.000021289350770149176",
            "extra": "mean: 727.6286321757527 usec\nrounds: 1411"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2635.5742738939953,
            "unit": "iter/sec",
            "range": "stddev: 0.000007737285501148323",
            "extra": "mean: 379.4239494235634 usec\nrounds: 2689"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 752.8024246512181,
            "unit": "iter/sec",
            "range": "stddev: 0.000028782803499024883",
            "extra": "mean: 1.3283697916665338 msec\nrounds: 768"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 983.3331258790007,
            "unit": "iter/sec",
            "range": "stddev: 0.00004522354446261589",
            "extra": "mean: 1.016949367088697 msec\nrounds: 1027"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1314.3785763154087,
            "unit": "iter/sec",
            "range": "stddev: 0.000016567760116001435",
            "extra": "mean: 760.815809097631 usec\nrounds: 1341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2403.4251240634026,
            "unit": "iter/sec",
            "range": "stddev: 0.000014280770783532952",
            "extra": "mean: 416.072874493934 usec\nrounds: 2470"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.652991977520088,
            "unit": "iter/sec",
            "range": "stddev: 0.000776207550555104",
            "extra": "mean: 38.98180769230768 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.29124073233763,
            "unit": "iter/sec",
            "range": "stddev: 0.0005701330728862438",
            "extra": "mean: 38.0354814814815 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1065.3645110465563,
            "unit": "iter/sec",
            "range": "stddev: 0.0000362855133841796",
            "extra": "mean: 938.6458715596357 usec\nrounds: 1090"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1730.790668202631,
            "unit": "iter/sec",
            "range": "stddev: 0.000037304128536028684",
            "extra": "mean: 577.770621468896 usec\nrounds: 1770"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2157.079311153065,
            "unit": "iter/sec",
            "range": "stddev: 0.00004810868737311859",
            "extra": "mean: 463.58981555733834 usec\nrounds: 2494"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1733.4256043017717,
            "unit": "iter/sec",
            "range": "stddev: 0.0001949187160599991",
            "extra": "mean: 576.8923670668881 usec\nrounds: 2332"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1733158829231,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 709.8721452906167,
            "unit": "iter/sec",
            "range": "stddev: 0.000389012634340183",
            "extra": "mean: 1.4087043795620506 msec\nrounds: 822"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 935.7069731154638,
            "unit": "iter/sec",
            "range": "stddev: 0.0003507820586089484",
            "extra": "mean: 1.0687106420405 msec\nrounds: 1137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1151.784028539797,
            "unit": "iter/sec",
            "range": "stddev: 0.0003489845014363384",
            "extra": "mean: 868.2183249821366 usec\nrounds: 1397"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2098.5248604656413,
            "unit": "iter/sec",
            "range": "stddev: 0.000221059054104684",
            "extra": "mean: 476.5252100840541 usec\nrounds: 2618"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 590.2162423423363,
            "unit": "iter/sec",
            "range": "stddev: 0.000754939990520564",
            "extra": "mean: 1.6942942743008782 msec\nrounds: 751"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 766.2905222722297,
            "unit": "iter/sec",
            "range": "stddev: 0.0007731374745346628",
            "extra": "mean: 1.3049880834161531 msec\nrounds: 1007"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 944.8717738044136,
            "unit": "iter/sec",
            "range": "stddev: 0.0005271008551429935",
            "extra": "mean: 1.0583446640316276 msec\nrounds: 1265"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1872.2682114347476,
            "unit": "iter/sec",
            "range": "stddev: 0.0002206671206852589",
            "extra": "mean: 534.1115091804528 usec\nrounds: 2233"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.17673509181416,
            "unit": "iter/sec",
            "range": "stddev: 0.00751874541351994",
            "extra": "mean: 52.14652000000058 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.198449748153138,
            "unit": "iter/sec",
            "range": "stddev: 0.004453588892092976",
            "extra": "mean: 47.17326086956536 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 780.5460064148757,
            "unit": "iter/sec",
            "range": "stddev: 0.0005656258574847548",
            "extra": "mean: 1.2811544633904388 msec\nrounds: 997"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1347.3399757371988,
            "unit": "iter/sec",
            "range": "stddev: 0.00027897737750345484",
            "extra": "mean: 742.2031692133596 usec\nrounds: 1767"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1806.8294920445853,
            "unit": "iter/sec",
            "range": "stddev: 0.00023584617240830725",
            "extra": "mean: 553.4556550039554 usec\nrounds: 2458"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1326.0259522223428,
            "unit": "iter/sec",
            "range": "stddev: 0.00032176769688907687",
            "extra": "mean: 754.1330532212118 usec\nrounds: 2142"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1733160763212,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 712.1101779737337,
            "unit": "iter/sec",
            "range": "stddev: 0.0001634796092842323",
            "extra": "mean: 1.4042770780856402 msec\nrounds: 794"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1020.6619563915642,
            "unit": "iter/sec",
            "range": "stddev: 0.00007069205075217177",
            "extra": "mean: 979.7563176895392 usec\nrounds: 1108"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1255.4392681253714,
            "unit": "iter/sec",
            "range": "stddev: 0.00005525869316938699",
            "extra": "mean: 796.5339506173048 usec\nrounds: 1296"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2380.051713165541,
            "unit": "iter/sec",
            "range": "stddev: 0.000027286150808739692",
            "extra": "mean: 420.15893792070995 usec\nrounds: 2674"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 671.4739291042683,
            "unit": "iter/sec",
            "range": "stddev: 0.00010327718766061793",
            "extra": "mean: 1.4892610966057584 msec\nrounds: 766"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 823.4991006522497,
            "unit": "iter/sec",
            "range": "stddev: 0.0003063158373093893",
            "extra": "mean: 1.2143304093567964 msec\nrounds: 1026"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1122.822847340659,
            "unit": "iter/sec",
            "range": "stddev: 0.00011281909196568304",
            "extra": "mean: 890.6124437781455 usec\nrounds: 1334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2158.107762309262,
            "unit": "iter/sec",
            "range": "stddev: 0.00003841131783640344",
            "extra": "mean: 463.3688907777061 usec\nrounds: 2353"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.271238744115827,
            "unit": "iter/sec",
            "range": "stddev: 0.0038874927061022017",
            "extra": "mean: 44.900960000000225 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.91881714221771,
            "unit": "iter/sec",
            "range": "stddev: 0.0029136131597412387",
            "extra": "mean: 43.6322692307687 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 906.1634089718231,
            "unit": "iter/sec",
            "range": "stddev: 0.00017963988463098835",
            "extra": "mean: 1.1035537190081959 msec\nrounds: 1089"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1546.3266026580268,
            "unit": "iter/sec",
            "range": "stddev: 0.00005255735617089289",
            "extra": "mean: 646.6939120629951 usec\nrounds: 1774"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2079.929436965719,
            "unit": "iter/sec",
            "range": "stddev: 0.00007077858810607521",
            "extra": "mean: 480.78554119549284 usec\nrounds: 2476"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1681.7778307620615,
            "unit": "iter/sec",
            "range": "stddev: 0.00013944915514093085",
            "extra": "mean: 594.6088607594925 usec\nrounds: 2370"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1733495633578,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 786.9894524449778,
            "unit": "iter/sec",
            "range": "stddev: 0.00012500809569317788",
            "extra": "mean: 1.2706650602409626 msec\nrounds: 830"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1091.003403629912,
            "unit": "iter/sec",
            "range": "stddev: 0.00006208017186087814",
            "extra": "mean: 916.5874246339363 usec\nrounds: 1161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1338.7771235390107,
            "unit": "iter/sec",
            "range": "stddev: 0.00003392189518974907",
            "extra": "mean: 746.9503193754423 usec\nrounds: 1409"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2507.5468704124924,
            "unit": "iter/sec",
            "range": "stddev: 0.00003946751488342027",
            "extra": "mean: 398.79613489956404 usec\nrounds: 2639"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 738.5216579714034,
            "unit": "iter/sec",
            "range": "stddev: 0.000060322703948821336",
            "extra": "mean: 1.3540564304462432 msec\nrounds: 762"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 985.287021318686,
            "unit": "iter/sec",
            "range": "stddev: 0.000047041437384317206",
            "extra": "mean: 1.0149326829268719 msec\nrounds: 1025"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1270.0712393644733,
            "unit": "iter/sec",
            "range": "stddev: 0.00007956552307269115",
            "extra": "mean: 787.3574087862872 usec\nrounds: 1343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2244.995588055776,
            "unit": "iter/sec",
            "range": "stddev: 0.00005748403669062836",
            "extra": "mean: 445.4351738241169 usec\nrounds: 2445"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.41401562975613,
            "unit": "iter/sec",
            "range": "stddev: 0.002622780223057918",
            "extra": "mean: 42.709461538461255 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.957226272602867,
            "unit": "iter/sec",
            "range": "stddev: 0.004335454334279006",
            "extra": "mean: 43.55926923076936 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 991.4119841446319,
            "unit": "iter/sec",
            "range": "stddev: 0.00013761029977390416",
            "extra": "mean: 1.0086624087591372 msec\nrounds: 1096"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1562.8232142793954,
            "unit": "iter/sec",
            "range": "stddev: 0.00007653805184220153",
            "extra": "mean: 639.8676388110165 usec\nrounds: 1783"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1076.8665687190446,
            "unit": "iter/sec",
            "range": "stddev: 0.000422626275472945",
            "extra": "mean: 928.6201550388189 usec\nrounds: 2451"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1309.49337345317,
            "unit": "iter/sec",
            "range": "stddev: 0.00030014187827131003",
            "extra": "mean: 763.6541125542105 usec\nrounds: 2310"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1733755950539,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 818.8724635523278,
            "unit": "iter/sec",
            "range": "stddev: 0.00003088121685555225",
            "extra": "mean: 1.2211913875598257 msec\nrounds: 836"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1130.5618120257682,
            "unit": "iter/sec",
            "range": "stddev: 0.00002535780208266708",
            "extra": "mean: 884.5159896283562 usec\nrounds: 1157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1354.0587353265694,
            "unit": "iter/sec",
            "range": "stddev: 0.000026372940631357545",
            "extra": "mean: 738.5204008589936 usec\nrounds: 1397"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2510.75383335725,
            "unit": "iter/sec",
            "range": "stddev: 0.000022691265846849807",
            "extra": "mean: 398.2867562380067 usec\nrounds: 2605"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 716.4586579786404,
            "unit": "iter/sec",
            "range": "stddev: 0.0001427741104847369",
            "extra": "mean: 1.3957539473684646 msec\nrounds: 760"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 981.7764956932009,
            "unit": "iter/sec",
            "range": "stddev: 0.00010556114418083822",
            "extra": "mean: 1.0185617647058582 msec\nrounds: 1020"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1303.9138985457284,
            "unit": "iter/sec",
            "range": "stddev: 0.000025233236583730597",
            "extra": "mean: 766.9218045112584 usec\nrounds: 1330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2148.761663010523,
            "unit": "iter/sec",
            "range": "stddev: 0.00011453782395074087",
            "extra": "mean: 465.384326802885 usec\nrounds: 2399"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.785368243842466,
            "unit": "iter/sec",
            "range": "stddev: 0.003014427150579827",
            "extra": "mean: 40.34638461538428 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.223266836308508,
            "unit": "iter/sec",
            "range": "stddev: 0.0006577519947597608",
            "extra": "mean: 38.13407407407413 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1022.8686223008142,
            "unit": "iter/sec",
            "range": "stddev: 0.00012349717198049918",
            "extra": "mean: 977.6426592797674 usec\nrounds: 1083"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1626.799179120847,
            "unit": "iter/sec",
            "range": "stddev: 0.00009085923169274475",
            "extra": "mean: 614.7040229885159 usec\nrounds: 1740"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1709.5006451215131,
            "unit": "iter/sec",
            "range": "stddev: 0.00019208569272963279",
            "extra": "mean: 584.9661436828056 usec\nrounds: 2422"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1657.439908627636,
            "unit": "iter/sec",
            "range": "stddev: 0.0001397596499811029",
            "extra": "mean: 603.3401240036522 usec\nrounds: 2258"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1733756686115,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 803.7206807198,
            "unit": "iter/sec",
            "range": "stddev: 0.00007500049968401494",
            "extra": "mean: 1.2442133492252747 msec\nrounds: 839"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1120.766732311117,
            "unit": "iter/sec",
            "range": "stddev: 0.00004496154447678917",
            "extra": "mean: 892.2463267069984 usec\nrounds: 1157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1385.9366285641406,
            "unit": "iter/sec",
            "range": "stddev: 0.000016852439647697074",
            "extra": "mean: 721.5337118523385 usec\nrounds: 1409"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2585.223747422232,
            "unit": "iter/sec",
            "range": "stddev: 0.000011505067585178525",
            "extra": "mean: 386.81371428570395 usec\nrounds: 2625"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 756.4915755243807,
            "unit": "iter/sec",
            "range": "stddev: 0.00002844329290991779",
            "extra": "mean: 1.3218917861799393 msec\nrounds: 767"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1010.5781057810655,
            "unit": "iter/sec",
            "range": "stddev: 0.00002502403634480847",
            "extra": "mean: 989.5326192794472 usec\nrounds: 1027"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1313.9491764459926,
            "unit": "iter/sec",
            "range": "stddev: 0.00006024456822805915",
            "extra": "mean: 761.0644444443648 usec\nrounds: 1350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2365.540131663428,
            "unit": "iter/sec",
            "range": "stddev: 0.000025645859246768462",
            "extra": "mean: 422.73643410852156 usec\nrounds: 2451"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.36800684545904,
            "unit": "iter/sec",
            "range": "stddev: 0.0009952162200318256",
            "extra": "mean: 39.419730769230824 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.407985774898467,
            "unit": "iter/sec",
            "range": "stddev: 0.000333147576447287",
            "extra": "mean: 37.867333333333136 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1062.7292208727156,
            "unit": "iter/sec",
            "range": "stddev: 0.00005478900780228666",
            "extra": "mean: 940.973467520539 usec\nrounds: 1093"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1713.9387765577953,
            "unit": "iter/sec",
            "range": "stddev: 0.00004116530616403342",
            "extra": "mean: 583.4514124293046 usec\nrounds: 1770"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2222.2582978435885,
            "unit": "iter/sec",
            "range": "stddev: 0.000027458068785159572",
            "extra": "mean: 449.99269480526607 usec\nrounds: 2464"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 2107.012546954496,
            "unit": "iter/sec",
            "range": "stddev: 0.000050462618282893795",
            "extra": "mean: 474.60562180581854 usec\nrounds: 2348"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1733842217325,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 725.848822074591,
            "unit": "iter/sec",
            "range": "stddev: 0.0002917739442634721",
            "extra": "mean: 1.3776973518284998 msec\nrounds: 793"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1089.9756718962615,
            "unit": "iter/sec",
            "range": "stddev: 0.00006247813930319763",
            "extra": "mean: 917.4516695957735 usec\nrounds: 1138"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1275.9964903256277,
            "unit": "iter/sec",
            "range": "stddev: 0.00009591759662269547",
            "extra": "mean: 783.7012151536601 usec\nrounds: 1399"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2515.690895086494,
            "unit": "iter/sec",
            "range": "stddev: 0.00002936368178183184",
            "extra": "mean: 397.505115574073 usec\nrounds: 2639"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 699.4633141642092,
            "unit": "iter/sec",
            "range": "stddev: 0.0002137529414435646",
            "extra": "mean: 1.4296675461741735 msec\nrounds: 758"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 977.7108733706049,
            "unit": "iter/sec",
            "range": "stddev: 0.00006836883127937985",
            "extra": "mean: 1.0227972575906357 msec\nrounds: 1021"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1282.6563436476606,
            "unit": "iter/sec",
            "range": "stddev: 0.0000591741423457844",
            "extra": "mean: 779.6320541760757 usec\nrounds: 1329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2284.234828372021,
            "unit": "iter/sec",
            "range": "stddev: 0.00006111172382234756",
            "extra": "mean: 437.7833607907563 usec\nrounds: 2428"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.467609289470257,
            "unit": "iter/sec",
            "range": "stddev: 0.0021635689242545946",
            "extra": "mean: 40.87036000000026 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.25832520200497,
            "unit": "iter/sec",
            "range": "stddev: 0.0003930537155814949",
            "extra": "mean: 38.083160000000476 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1015.8944369471848,
            "unit": "iter/sec",
            "range": "stddev: 0.00011060721337871451",
            "extra": "mean: 984.3542435423228 usec\nrounds: 1084"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1644.1397962188473,
            "unit": "iter/sec",
            "range": "stddev: 0.00008435422858531018",
            "extra": "mean: 608.2207865169224 usec\nrounds: 1780"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1391.920341708616,
            "unit": "iter/sec",
            "range": "stddev: 0.0003621716228281516",
            "extra": "mean: 718.4319174274555 usec\nrounds: 2519"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1466.4834284277676,
            "unit": "iter/sec",
            "range": "stddev: 0.0002970065604482635",
            "extra": "mean: 681.9033755274756 usec\nrounds: 2370"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1734964225040,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 786.8765129084449,
            "unit": "iter/sec",
            "range": "stddev: 0.00004901831609343646",
            "extra": "mean: 1.2708474374254868 msec\nrounds: 839"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1057.6086172269402,
            "unit": "iter/sec",
            "range": "stddev: 0.00006532169249620143",
            "extra": "mean: 945.5293609672067 usec\nrounds: 1158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1286.2787198924727,
            "unit": "iter/sec",
            "range": "stddev: 0.00004229630804176818",
            "extra": "mean: 777.436479772903 usec\nrounds: 1409"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2356.4046193110644,
            "unit": "iter/sec",
            "range": "stddev: 0.000056019195436133104",
            "extra": "mean: 424.37533512065824 usec\nrounds: 2611"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 687.1687190591838,
            "unit": "iter/sec",
            "range": "stddev: 0.0004183011460186597",
            "extra": "mean: 1.4552466843501253 msec\nrounds: 754"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 965.3961646924478,
            "unit": "iter/sec",
            "range": "stddev: 0.00011947184438141807",
            "extra": "mean: 1.0358441814595112 msec\nrounds: 1014"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1242.0895184305891,
            "unit": "iter/sec",
            "range": "stddev: 0.00008900856652122137",
            "extra": "mean: 805.0949510173185 usec\nrounds: 1327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2191.1882927941483,
            "unit": "iter/sec",
            "range": "stddev: 0.00007924780484713185",
            "extra": "mean: 456.3733766233413 usec\nrounds: 2464"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.251249936871602,
            "unit": "iter/sec",
            "range": "stddev: 0.0009116691194364298",
            "extra": "mean: 39.60200000000043 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.25751621401565,
            "unit": "iter/sec",
            "range": "stddev: 0.0003889874429458024",
            "extra": "mean: 38.08433333333423 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 950.2823910730283,
            "unit": "iter/sec",
            "range": "stddev: 0.0001735307268838365",
            "extra": "mean: 1.052318773234167 msec\nrounds: 1076"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1441.6863569312914,
            "unit": "iter/sec",
            "range": "stddev: 0.0002270438850996444",
            "extra": "mean: 693.6321448782763 usec\nrounds: 1767"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1070.3061118812263,
            "unit": "iter/sec",
            "range": "stddev: 0.00037916602882411796",
            "extra": "mean: 934.3121457489834 usec\nrounds: 2470"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1390.8732280636375,
            "unit": "iter/sec",
            "range": "stddev: 0.0003387795915025816",
            "extra": "mean: 718.9727861770637 usec\nrounds: 2315"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1735002902353,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 814.7043065827356,
            "unit": "iter/sec",
            "range": "stddev: 0.000057837003160422345",
            "extra": "mean: 1.2274391971664962 msec\nrounds: 847"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1119.0535349095082,
            "unit": "iter/sec",
            "range": "stddev: 0.00005951737506073497",
            "extra": "mean: 893.61229718189 usec\nrounds: 1171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1312.0610487136676,
            "unit": "iter/sec",
            "range": "stddev: 0.00004801928580578026",
            "extra": "mean: 762.1596578759735 usec\nrounds: 1403"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2249.8713609139386,
            "unit": "iter/sec",
            "range": "stddev: 0.00005520656087245657",
            "extra": "mean: 444.46985608714175 usec\nrounds: 2571"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 594.3088430730289,
            "unit": "iter/sec",
            "range": "stddev: 0.0003026023057174376",
            "extra": "mean: 1.6826268221573804 msec\nrounds: 686"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 688.5679331853522,
            "unit": "iter/sec",
            "range": "stddev: 0.0005655877984840139",
            "extra": "mean: 1.4522895299145668 msec\nrounds: 936"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 967.9407041303541,
            "unit": "iter/sec",
            "range": "stddev: 0.0003604387486121439",
            "extra": "mean: 1.0331211361737798 msec\nrounds: 1197"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1936.8203633884796,
            "unit": "iter/sec",
            "range": "stddev: 0.00015207077838727423",
            "extra": "mean: 516.3101436265848 usec\nrounds: 2228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.78354330679455,
            "unit": "iter/sec",
            "range": "stddev: 0.003190271826846171",
            "extra": "mean: 50.54706249999996 msec\nrounds: 16"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.260479572938227,
            "unit": "iter/sec",
            "range": "stddev: 0.004308383645391979",
            "extra": "mean: 42.99137499999883 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 921.8389906643752,
            "unit": "iter/sec",
            "range": "stddev: 0.0003218922307675932",
            "extra": "mean: 1.0847881355932816 msec\nrounds: 1062"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1550.062383881356,
            "unit": "iter/sec",
            "range": "stddev: 0.00009401704635747236",
            "extra": "mean: 645.135325131883 usec\nrounds: 1707"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1562.0442606272698,
            "unit": "iter/sec",
            "range": "stddev: 0.0003772840870216091",
            "extra": "mean: 640.1867253098387 usec\nrounds: 2501"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1717.735956068474,
            "unit": "iter/sec",
            "range": "stddev: 0.0001630513913566309",
            "extra": "mean: 582.1616509028452 usec\nrounds: 2326"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1735225427114,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 802.9708012351671,
            "unit": "iter/sec",
            "range": "stddev: 0.0000724375774255108",
            "extra": "mean: 1.2453752969121086 msec\nrounds: 842"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1141.2148422360945,
            "unit": "iter/sec",
            "range": "stddev: 0.00002702887952657589",
            "extra": "mean: 876.259195893914 usec\nrounds: 1169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1382.0549081941717,
            "unit": "iter/sec",
            "range": "stddev: 0.000021781120406014813",
            "extra": "mean: 723.5602536997792 usec\nrounds: 1419"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2640.7142170105894,
            "unit": "iter/sec",
            "range": "stddev: 0.000012226636106943574",
            "extra": "mean: 378.68543046359866 usec\nrounds: 2718"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 738.2562039679567,
            "unit": "iter/sec",
            "range": "stddev: 0.00009721000926479447",
            "extra": "mean: 1.3545433070866604 msec\nrounds: 762"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 992.5765365773442,
            "unit": "iter/sec",
            "range": "stddev: 0.000026750812452514383",
            "extra": "mean: 1.0074789833822324 msec\nrounds: 1023"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1284.719028786997,
            "unit": "iter/sec",
            "range": "stddev: 0.00005265297570836189",
            "extra": "mean: 778.3803131990484 usec\nrounds: 1341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2286.951106210463,
            "unit": "iter/sec",
            "range": "stddev: 0.00007852351476024365",
            "extra": "mean: 437.2633928571503 usec\nrounds: 2464"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.06123133540703,
            "unit": "iter/sec",
            "range": "stddev: 0.0018137670535699057",
            "extra": "mean: 39.902269230769164 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.192307804240134,
            "unit": "iter/sec",
            "range": "stddev: 0.0004526665187622963",
            "extra": "mean: 38.17914814814887 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 954.9524946372511,
            "unit": "iter/sec",
            "range": "stddev: 0.00024774785893590654",
            "extra": "mean: 1.0471725092250381 msec\nrounds: 1084"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1582.6055384903098,
            "unit": "iter/sec",
            "range": "stddev: 0.00008701975337474695",
            "extra": "mean: 631.8693923906819 usec\nrounds: 1761"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1430.8849116671374,
            "unit": "iter/sec",
            "range": "stddev: 0.0003372921567565872",
            "extra": "mean: 698.868226120919 usec\nrounds: 2565"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1652.539404553174,
            "unit": "iter/sec",
            "range": "stddev: 0.00019229096640674656",
            "extra": "mean: 605.1292920730004 usec\nrounds: 2359"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1735569885775,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 796.5451509604333,
            "unit": "iter/sec",
            "range": "stddev: 0.00007178585977073755",
            "extra": "mean: 1.2554216152019146 msec\nrounds: 842"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1107.4144666790514,
            "unit": "iter/sec",
            "range": "stddev: 0.00008405089058253756",
            "extra": "mean: 903.0042771599605 usec\nrounds: 1169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1327.7978325624713,
            "unit": "iter/sec",
            "range": "stddev: 0.00007001754064968567",
            "extra": "mean: 753.1267000716024 usec\nrounds: 1397"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2562.481881561175,
            "unit": "iter/sec",
            "range": "stddev: 0.00001753798919259009",
            "extra": "mean: 390.2466617210798 usec\nrounds: 2696"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 728.0628192422515,
            "unit": "iter/sec",
            "range": "stddev: 0.00012344357333083823",
            "extra": "mean: 1.373507853403053 msec\nrounds: 764"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 995.7585542946097,
            "unit": "iter/sec",
            "range": "stddev: 0.00003422893640839899",
            "extra": "mean: 1.0042595121950972 msec\nrounds: 1025"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1258.3920068735097,
            "unit": "iter/sec",
            "range": "stddev: 0.00010494831400870108",
            "extra": "mean: 794.6649331351939 usec\nrounds: 1346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2286.0841737873798,
            "unit": "iter/sec",
            "range": "stddev: 0.00003471019651625843",
            "extra": "mean: 437.42921256625885 usec\nrounds: 2451"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.038593139232454,
            "unit": "iter/sec",
            "range": "stddev: 0.0014036923863095553",
            "extra": "mean: 39.93834615384683 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.47366871776797,
            "unit": "iter/sec",
            "range": "stddev: 0.003955444653923857",
            "extra": "mean: 39.25622222222339 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1001.6755801411243,
            "unit": "iter/sec",
            "range": "stddev: 0.00012610580304247093",
            "extra": "mean: 998.3272227312477 usec\nrounds: 1091"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1657.621096858465,
            "unit": "iter/sec",
            "range": "stddev: 0.00008079472871864619",
            "extra": "mean: 603.2741751991496 usec\nrounds: 1758"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1049.0860975852172,
            "unit": "iter/sec",
            "range": "stddev: 0.0003961979506505517",
            "extra": "mean: 953.2106109325026 usec\nrounds: 2488"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1442.5107090264985,
            "unit": "iter/sec",
            "range": "stddev: 0.00024319502270644366",
            "extra": "mean: 693.2357546758637 usec\nrounds: 2299"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1735657898518,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 760.3726825439331,
            "unit": "iter/sec",
            "range": "stddev: 0.00010543704616057193",
            "extra": "mean: 1.315144563918788 msec\nrounds: 837"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1100.484059742194,
            "unit": "iter/sec",
            "range": "stddev: 0.00006787064529486599",
            "extra": "mean: 908.6910356832121 usec\nrounds: 1149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1378.9872529437005,
            "unit": "iter/sec",
            "range": "stddev: 0.000012957156732082651",
            "extra": "mean: 725.1698649609103 usec\nrounds: 1407"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2531.231206084223,
            "unit": "iter/sec",
            "range": "stddev: 0.00002981288568327833",
            "extra": "mean: 395.0646616541147 usec\nrounds: 2660"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 704.6239175957747,
            "unit": "iter/sec",
            "range": "stddev: 0.00016828591810052598",
            "extra": "mean: 1.4191967871486235 msec\nrounds: 747"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 961.5785820224055,
            "unit": "iter/sec",
            "range": "stddev: 0.0000987844987195844",
            "extra": "mean: 1.0399566074951319 msec\nrounds: 1014"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1182.953024312753,
            "unit": "iter/sec",
            "range": "stddev: 0.00016338702302895765",
            "extra": "mean: 845.3421052631896 usec\nrounds: 1330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2301.9400039155767,
            "unit": "iter/sec",
            "range": "stddev: 0.00004364770126614965",
            "extra": "mean: 434.4161873458952 usec\nrounds: 2434"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.47711976752611,
            "unit": "iter/sec",
            "range": "stddev: 0.002294258796794355",
            "extra": "mean: 40.854479999999995 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.21048631093702,
            "unit": "iter/sec",
            "range": "stddev: 0.005172642007073935",
            "extra": "mean: 45.02377777777761 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 927.7933607591019,
            "unit": "iter/sec",
            "range": "stddev: 0.00020010626130825934",
            "extra": "mean: 1.0778262081783168 msec\nrounds: 1076"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1702.8751527756506,
            "unit": "iter/sec",
            "range": "stddev: 0.000043963897025815985",
            "extra": "mean: 587.2421113021827 usec\nrounds: 1743"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2054.926576643859,
            "unit": "iter/sec",
            "range": "stddev: 0.00016208914207502183",
            "extra": "mean: 486.6353919239378 usec\nrounds: 2526"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1606.048929005581,
            "unit": "iter/sec",
            "range": "stddev: 0.00021027357219963186",
            "extra": "mean: 622.646036456169 usec\nrounds: 2359"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1735658885752,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 705.8016046632046,
            "unit": "iter/sec",
            "range": "stddev: 0.00025017904023015407",
            "extra": "mean: 1.4168287425149473 msec\nrounds: 835"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1051.5438907853759,
            "unit": "iter/sec",
            "range": "stddev: 0.00005433013517138568",
            "extra": "mean: 950.9826539462097 usec\nrounds: 1153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1270.8913322207586,
            "unit": "iter/sec",
            "range": "stddev: 0.00003411815113407078",
            "extra": "mean: 786.8493353028048 usec\nrounds: 1354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2386.8233064506576,
            "unit": "iter/sec",
            "range": "stddev: 0.00005067520155248423",
            "extra": "mean: 418.9669161086989 usec\nrounds: 2539"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 710.6900171053882,
            "unit": "iter/sec",
            "range": "stddev: 0.00022739350015184886",
            "extra": "mean: 1.407083223249652 msec\nrounds: 757"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 981.7284598929435,
            "unit": "iter/sec",
            "range": "stddev: 0.00008157474220633224",
            "extra": "mean: 1.0186116027532186 msec\nrounds: 1017"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1222.6252357259932,
            "unit": "iter/sec",
            "range": "stddev: 0.00007518770953379521",
            "extra": "mean: 817.9121212120257 usec\nrounds: 1320"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2179.7665191164333,
            "unit": "iter/sec",
            "range": "stddev: 0.0000761427509337618",
            "extra": "mean: 458.76473063975186 usec\nrounds: 2376"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.314409838347906,
            "unit": "iter/sec",
            "range": "stddev: 0.0016018790221296088",
            "extra": "mean: 39.50319230769249 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.072493256945915,
            "unit": "iter/sec",
            "range": "stddev: 0.002783500744635878",
            "extra": "mean: 39.88434615384598 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1003.4950909354908,
            "unit": "iter/sec",
            "range": "stddev: 0.00011378314830111433",
            "extra": "mean: 996.5170821790144 usec\nrounds: 1083"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1616.9792142636702,
            "unit": "iter/sec",
            "range": "stddev: 0.00005662115651752042",
            "extra": "mean: 618.4371395617313 usec\nrounds: 1734"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1781.867314497931,
            "unit": "iter/sec",
            "range": "stddev: 0.00023678855003703793",
            "extra": "mean: 561.2090147586358 usec\nrounds: 2507"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1382.7542367328274,
            "unit": "iter/sec",
            "range": "stddev: 0.00016248983968884337",
            "extra": "mean: 723.1943127961775 usec\nrounds: 2321"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1735829779501,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 702.5880239345381,
            "unit": "iter/sec",
            "range": "stddev: 0.00022425681816304764",
            "extra": "mean: 1.423309202454001 msec\nrounds: 815"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1092.2935589022982,
            "unit": "iter/sec",
            "range": "stddev: 0.000060027894328685096",
            "extra": "mean: 915.5048034934412 usec\nrounds: 1145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1338.0137885432525,
            "unit": "iter/sec",
            "range": "stddev: 0.000052900159801054345",
            "extra": "mean: 747.3764534883745 usec\nrounds: 1376"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2227.6314099280116,
            "unit": "iter/sec",
            "range": "stddev: 0.00017467727343712319",
            "extra": "mean: 448.9072992700871 usec\nrounds: 2740"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 740.1245071071079,
            "unit": "iter/sec",
            "range": "stddev: 0.00009610803573766525",
            "extra": "mean: 1.351124020887588 msec\nrounds: 766"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 950.3255745023775,
            "unit": "iter/sec",
            "range": "stddev: 0.00017588880266207889",
            "extra": "mean: 1.0522709551656901 msec\nrounds: 1026"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1189.933803232175,
            "unit": "iter/sec",
            "range": "stddev: 0.00022817480929896255",
            "extra": "mean: 840.3828828828423 usec\nrounds: 1332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2364.5323988076702,
            "unit": "iter/sec",
            "range": "stddev: 0.00004042885641366287",
            "extra": "mean: 422.9165988608386 usec\nrounds: 2458"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.851657369107187,
            "unit": "iter/sec",
            "range": "stddev: 0.0035076963838879768",
            "extra": "mean: 41.92580769230762 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.40726911379459,
            "unit": "iter/sec",
            "range": "stddev: 0.0019960539155078273",
            "extra": "mean: 39.3588148148146 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1034.2155374318818,
            "unit": "iter/sec",
            "range": "stddev: 0.00005995035491925065",
            "extra": "mean: 966.9164345404787 usec\nrounds: 1077"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1698.4880860720614,
            "unit": "iter/sec",
            "range": "stddev: 0.00003772801045626522",
            "extra": "mean: 588.7589134125802 usec\nrounds: 1767"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1992.2503589166577,
            "unit": "iter/sec",
            "range": "stddev: 0.00012050330235596846",
            "extra": "mean: 501.94494658983433 usec\nrounds: 2434"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1535.6351544934803,
            "unit": "iter/sec",
            "range": "stddev: 0.00024725003807918154",
            "extra": "mean: 651.1963450913859 usec\nrounds: 2353"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1736175548095,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 693.537201012882,
            "unit": "iter/sec",
            "range": "stddev: 0.0003345774952142799",
            "extra": "mean: 1.4418837209302426 msec\nrounds: 774"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 891.2698374939196,
            "unit": "iter/sec",
            "range": "stddev: 0.0005202291432658066",
            "extra": "mean: 1.1219946619217014 msec\nrounds: 1124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1072.0805665336225,
            "unit": "iter/sec",
            "range": "stddev: 0.00043224354321567374",
            "extra": "mean: 932.7657185628483 usec\nrounds: 1336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2232.87960461401,
            "unit": "iter/sec",
            "range": "stddev: 0.00018759796039221856",
            "extra": "mean: 447.8521806252363 usec\nrounds: 2591"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 631.535057610168,
            "unit": "iter/sec",
            "range": "stddev: 0.0002696547782193658",
            "extra": "mean: 1.5834433701656463 msec\nrounds: 724"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 844.6841355390505,
            "unit": "iter/sec",
            "range": "stddev: 0.00032430297307842697",
            "extra": "mean: 1.1838744897959186 msec\nrounds: 980"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1243.6501082808036,
            "unit": "iter/sec",
            "range": "stddev: 0.00008023899530520567",
            "extra": "mean: 804.0846805235112 usec\nrounds: 1299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2262.890514085642,
            "unit": "iter/sec",
            "range": "stddev: 0.00004161424698046309",
            "extra": "mean: 441.91267486225087 usec\nrounds: 2359"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.69325347728734,
            "unit": "iter/sec",
            "range": "stddev: 0.005943203544665997",
            "extra": "mean: 44.06595999999979 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.084056673914517,
            "unit": "iter/sec",
            "range": "stddev: 0.0009739389731054813",
            "extra": "mean: 39.86595999999963 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 978.4173728382434,
            "unit": "iter/sec",
            "range": "stddev: 0.00014723093495727277",
            "extra": "mean: 1.0220587121211357 msec\nrounds: 1056"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1454.8973221279423,
            "unit": "iter/sec",
            "range": "stddev: 0.0003145776607834939",
            "extra": "mean: 687.3337278106977 usec\nrounds: 1690"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1075.0610878411817,
            "unit": "iter/sec",
            "range": "stddev: 0.0004178924276523174",
            "extra": "mean: 930.1796998420704 usec\nrounds: 2532"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1630.8163328206642,
            "unit": "iter/sec",
            "range": "stddev: 0.0004266994357682099",
            "extra": "mean: 613.1898362033187 usec\nrounds: 2381"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1736262870752,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 698.9725194387609,
            "unit": "iter/sec",
            "range": "stddev: 0.0002705585006084645",
            "extra": "mean: 1.430671410090555 msec\nrounds: 773"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1037.0955885565807,
            "unit": "iter/sec",
            "range": "stddev: 0.00006791294854863654",
            "extra": "mean: 964.2312734082593 usec\nrounds: 1068"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1210.5339839878075,
            "unit": "iter/sec",
            "range": "stddev: 0.0001791311268387616",
            "extra": "mean: 826.0817236255898 usec\nrounds: 1346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2274.564863953956,
            "unit": "iter/sec",
            "range": "stddev: 0.00017799422749334573",
            "extra": "mean: 439.64452975047936 usec\nrounds: 2605"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 676.1185215061153,
            "unit": "iter/sec",
            "range": "stddev: 0.00021052153744327462",
            "extra": "mean: 1.4790306258323014 msec\nrounds: 751"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 898.1356371000038,
            "unit": "iter/sec",
            "range": "stddev: 0.00018463554092195398",
            "extra": "mean: 1.113417571569598 msec\nrounds: 1013"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1091.4785055037894,
            "unit": "iter/sec",
            "range": "stddev: 0.0004040004096527693",
            "extra": "mean: 916.1884498480655 usec\nrounds: 1316"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 877.6985126125004,
            "unit": "iter/sec",
            "range": "stddev: 0.0012966981030554604",
            "extra": "mean: 1.1393433914151967 msec\nrounds: 2353"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.342229314550956,
            "unit": "iter/sec",
            "range": "stddev: 0.010312636566242329",
            "extra": "mean: 54.51899999999981 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.989143551866217,
            "unit": "iter/sec",
            "range": "stddev: 0.013660617984992345",
            "extra": "mean: 55.589083333334045 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 752.0704910582191,
            "unit": "iter/sec",
            "range": "stddev: 0.0006943257128692382",
            "extra": "mean: 1.329662593984941 msec\nrounds: 1064"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1102.6323830027472,
            "unit": "iter/sec",
            "range": "stddev: 0.0005157460447428211",
            "extra": "mean: 906.9205797101176 usec\nrounds: 1725"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1418.7962608568646,
            "unit": "iter/sec",
            "range": "stddev: 0.0003943417627824652",
            "extra": "mean: 704.8228329810105 usec\nrounds: 2365"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1090.565024815451,
            "unit": "iter/sec",
            "range": "stddev: 0.0009564436151908522",
            "extra": "mean: 916.9558689718878 usec\nrounds: 2198"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1736347763752,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 753.834514065611,
            "unit": "iter/sec",
            "range": "stddev: 0.0000999554063421288",
            "extra": "mean: 1.3265510948905208 msec\nrounds: 822"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 931.1541003748981,
            "unit": "iter/sec",
            "range": "stddev: 0.00039096913170437756",
            "extra": "mean: 1.0739360967184521 msec\nrounds: 1158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1190.7979268493782,
            "unit": "iter/sec",
            "range": "stddev: 0.00017487765491211392",
            "extra": "mean: 839.773044151838 usec\nrounds: 1291"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2205.689026562442,
            "unit": "iter/sec",
            "range": "stddev: 0.00013605888693920862",
            "extra": "mean: 453.37306753459086 usec\nrounds: 2458"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 668.2156832695782,
            "unit": "iter/sec",
            "range": "stddev: 0.00007239481163905199",
            "extra": "mean: 1.4965227920227817 msec\nrounds: 702"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 818.2833883226651,
            "unit": "iter/sec",
            "range": "stddev: 0.00040712220943883856",
            "extra": "mean: 1.2220705128205298 msec\nrounds: 936"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1168.2732407347153,
            "unit": "iter/sec",
            "range": "stddev: 0.00009029631491871593",
            "extra": "mean: 855.9641401793216 usec\nrounds: 1227"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1743.0280819463726,
            "unit": "iter/sec",
            "range": "stddev: 0.00040933263161868605",
            "extra": "mean: 573.7142220240871 usec\nrounds: 2243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.47910055726572,
            "unit": "iter/sec",
            "range": "stddev: 0.011916110845391827",
            "extra": "mean: 57.21118181818112 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.662839565010756,
            "unit": "iter/sec",
            "range": "stddev: 0.004871607276305202",
            "extra": "mean: 46.16199999999878 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 842.8121720881552,
            "unit": "iter/sec",
            "range": "stddev: 0.00037673945259115657",
            "extra": "mean: 1.1865039840637275 msec\nrounds: 1004"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 849.0981151489954,
            "unit": "iter/sec",
            "range": "stddev: 0.0008378133667377128",
            "extra": "mean: 1.177720197652924 msec\nrounds: 1619"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 908.1806580294589,
            "unit": "iter/sec",
            "range": "stddev: 0.0006330865610648375",
            "extra": "mean: 1.1011025076990384 msec\nrounds: 2273"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1062.8880691287834,
            "unit": "iter/sec",
            "range": "stddev: 0.0005577102701842196",
            "extra": "mean: 940.8328393597166 usec\nrounds: 1687"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1736436399850,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 685.9079319305628,
            "unit": "iter/sec",
            "range": "stddev: 0.0004214402106601221",
            "extra": "mean: 1.4579216152018988 msec\nrounds: 842"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 841.3259296651502,
            "unit": "iter/sec",
            "range": "stddev: 0.0005166547754729739",
            "extra": "mean: 1.188600000000003 msec\nrounds: 1155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1080.9606490373567,
            "unit": "iter/sec",
            "range": "stddev: 0.0006222957096540515",
            "extra": "mean: 925.1030561478295 usec\nrounds: 1407"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2228.567274404732,
            "unit": "iter/sec",
            "range": "stddev: 0.0001708658492587795",
            "extra": "mean: 448.7187851518228 usec\nrounds: 2667"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 577.5337098110597,
            "unit": "iter/sec",
            "range": "stddev: 0.0006616587073705278",
            "extra": "mean: 1.731500660501965 msec\nrounds: 757"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 846.4742525225693,
            "unit": "iter/sec",
            "range": "stddev: 0.00033040261915640143",
            "extra": "mean: 1.1813708414873934 msec\nrounds: 1022"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 950.9431077646118,
            "unit": "iter/sec",
            "range": "stddev: 0.000533571024488008",
            "extra": "mean: 1.0515876205788026 msec\nrounds: 1244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2075.5988652124242,
            "unit": "iter/sec",
            "range": "stddev: 0.00006827340370070603",
            "extra": "mean: 481.7886619424686 usec\nrounds: 2399"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.850156181398223,
            "unit": "iter/sec",
            "range": "stddev: 0.004493937031341843",
            "extra": "mean: 53.04995833333326 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 15.683755736706896,
            "unit": "iter/sec",
            "range": "stddev: 0.017016986874605185",
            "extra": "mean: 63.760238095238854 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 638.0176701487269,
            "unit": "iter/sec",
            "range": "stddev: 0.0008313275231731798",
            "extra": "mean: 1.5673547094187723 msec\nrounds: 998"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1117.2386244163843,
            "unit": "iter/sec",
            "range": "stddev: 0.0005498580259528437",
            "extra": "mean: 895.063935443848 usec\nrounds: 1611"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 959.7862045067754,
            "unit": "iter/sec",
            "range": "stddev: 0.0007238829898985823",
            "extra": "mean: 1.0418987012986816 msec\nrounds: 2310"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1007.1730372408207,
            "unit": "iter/sec",
            "range": "stddev: 0.0005981095088177547",
            "extra": "mean: 992.878048780504 usec\nrounds: 1722"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1736438402534,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 416.0624357317998,
            "unit": "iter/sec",
            "range": "stddev: 0.0016535128729981542",
            "extra": "mean: 2.403485424588091 msec\nrounds: 789"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 657.243536445349,
            "unit": "iter/sec",
            "range": "stddev: 0.0009374435392823071",
            "extra": "mean: 1.5215060240963691 msec\nrounds: 1079"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 957.7331244626457,
            "unit": "iter/sec",
            "range": "stddev: 0.0006246828593901222",
            "extra": "mean: 1.0441322059953486 msec\nrounds: 1301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2283.3276523402246,
            "unit": "iter/sec",
            "range": "stddev: 0.0000682802857299303",
            "extra": "mean: 437.9572940287749 usec\nrounds: 2646"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 587.8678766946794,
            "unit": "iter/sec",
            "range": "stddev: 0.0006346509929923088",
            "extra": "mean: 1.701062500000097 msec\nrounds: 752"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 895.0395685396111,
            "unit": "iter/sec",
            "range": "stddev: 0.00032942718485248534",
            "extra": "mean: 1.1172690405538688 msec\nrounds: 1011"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1224.4418084269337,
            "unit": "iter/sec",
            "range": "stddev: 0.000051697585833893166",
            "extra": "mean: 816.698672911799 usec\nrounds: 1281"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1939.7533522148738,
            "unit": "iter/sec",
            "range": "stddev: 0.0002024446393760533",
            "extra": "mean: 515.5294609276831 usec\nrounds: 2393"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.654293597341,
            "unit": "iter/sec",
            "range": "stddev: 0.006012728006464073",
            "extra": "mean: 48.41608333333358 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.87906317862668,
            "unit": "iter/sec",
            "range": "stddev: 0.005522041713751701",
            "extra": "mean: 43.70808333333276 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 875.25158346572,
            "unit": "iter/sec",
            "range": "stddev: 0.00037486293908338387",
            "extra": "mean: 1.1425286384976485 msec\nrounds: 1065"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1437.0742327413611,
            "unit": "iter/sec",
            "range": "stddev: 0.00015087832319781336",
            "extra": "mean: 695.858277336447 usec\nrounds: 1637"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 932.3661734725973,
            "unit": "iter/sec",
            "range": "stddev: 0.000600971713565472",
            "extra": "mean: 1.0725399831650912 msec\nrounds: 2376"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 896.4314246773486,
            "unit": "iter/sec",
            "range": "stddev: 0.0006281786345828158",
            "extra": "mean: 1.1155342979636493 msec\nrounds: 1866"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1736441828203,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 791.0856828964926,
            "unit": "iter/sec",
            "range": "stddev: 0.00007818479200635622",
            "extra": "mean: 1.2640855745721318 msec\nrounds: 818"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1096.8755022102175,
            "unit": "iter/sec",
            "range": "stddev: 0.000026640426301692578",
            "extra": "mean: 911.6804942630115 usec\nrounds: 1133"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1313.9783457906751,
            "unit": "iter/sec",
            "range": "stddev: 0.00003786780494059481",
            "extra": "mean: 761.047549378189 usec\nrounds: 1367"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2341.8545784435423,
            "unit": "iter/sec",
            "range": "stddev: 0.00005799024250794918",
            "extra": "mean: 427.01199690402046 usec\nrounds: 2584"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 683.0404045386006,
            "unit": "iter/sec",
            "range": "stddev: 0.00011595942797764714",
            "extra": "mean: 1.4640422343324013 msec\nrounds: 734"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 960.3660598518995,
            "unit": "iter/sec",
            "range": "stddev: 0.00003808409815367033",
            "extra": "mean: 1.041269617706203 msec\nrounds: 994"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1223.727123180926,
            "unit": "iter/sec",
            "range": "stddev: 0.00004416536291399554",
            "extra": "mean: 817.1756440280777 usec\nrounds: 1281"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2249.6319748720657,
            "unit": "iter/sec",
            "range": "stddev: 0.00002432763207741799",
            "extra": "mean: 444.5171526586561 usec\nrounds: 2332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.160098341264227,
            "unit": "iter/sec",
            "range": "stddev: 0.001672765651050587",
            "extra": "mean: 41.39056000000011 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.097179173588366,
            "unit": "iter/sec",
            "range": "stddev: 0.00047639440189170367",
            "extra": "mean: 39.845115384615596 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 989.7364898108981,
            "unit": "iter/sec",
            "range": "stddev: 0.00006145495596389803",
            "extra": "mean: 1.010369942196496 msec\nrounds: 1038"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1547.9890248395218,
            "unit": "iter/sec",
            "range": "stddev: 0.0001421051992247451",
            "extra": "mean: 645.9994121106051 usec\nrounds: 1701"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2042.378953833542,
            "unit": "iter/sec",
            "range": "stddev: 0.00005048665878323968",
            "extra": "mean: 489.62510024058054 usec\nrounds: 2494"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1549.6797886276727,
            "unit": "iter/sec",
            "range": "stddev: 0.00030187325057606806",
            "extra": "mean: 645.2946004319739 usec\nrounds: 2315"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1736870097189,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 684.6928207871778,
            "unit": "iter/sec",
            "range": "stddev: 0.00042960355205834964",
            "extra": "mean: 1.4605089605734727 msec\nrounds: 837"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 969.5350900008774,
            "unit": "iter/sec",
            "range": "stddev: 0.00029198132545213055",
            "extra": "mean: 1.0314221840068676 msec\nrounds: 1163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1100.4554168622892,
            "unit": "iter/sec",
            "range": "stddev: 0.000378030587770989",
            "extra": "mean: 908.7146872803661 usec\nrounds: 1423"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2350.5369955258575,
            "unit": "iter/sec",
            "range": "stddev: 0.000034442042028529176",
            "extra": "mean: 425.43469934889583 usec\nrounds: 2611"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 634.4068967556382,
            "unit": "iter/sec",
            "range": "stddev: 0.000401528383612373",
            "extra": "mean: 1.5762754237288525 msec\nrounds: 708"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 938.4837271157943,
            "unit": "iter/sec",
            "range": "stddev: 0.00012665165143351242",
            "extra": "mean: 1.0655485770363449 msec\nrounds: 1019"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1241.7582838095987,
            "unit": "iter/sec",
            "range": "stddev: 0.00007931287165169325",
            "extra": "mean: 805.3097072419707 usec\nrounds: 1298"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2267.318666487509,
            "unit": "iter/sec",
            "range": "stddev: 0.00002388615528180924",
            "extra": "mean: 441.0496040017096 usec\nrounds: 2399"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.942323899419414,
            "unit": "iter/sec",
            "range": "stddev: 0.002284835889074128",
            "extra": "mean: 41.767039999999724 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.045563660043737,
            "unit": "iter/sec",
            "range": "stddev: 0.0015739584570800562",
            "extra": "mean: 39.92723076922972 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1006.7545306369985,
            "unit": "iter/sec",
            "range": "stddev: 0.000042922342264555205",
            "extra": "mean: 993.2907869481106 usec\nrounds: 1042"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1691.9777927913276,
            "unit": "iter/sec",
            "range": "stddev: 0.00003507578839832608",
            "extra": "mean: 591.0243055556051 usec\nrounds: 1728"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1859.782538178172,
            "unit": "iter/sec",
            "range": "stddev: 0.0001228147624720656",
            "extra": "mean: 537.6972734562783 usec\nrounds: 2494"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1993.1679710833253,
            "unit": "iter/sec",
            "range": "stddev: 0.000069164153842245",
            "extra": "mean: 501.7138618058772 usec\nrounds: 2359"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1736872104545,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 668.7492256048099,
            "unit": "iter/sec",
            "range": "stddev: 0.0003166700898240636",
            "extra": "mean: 1.4953288343558233 msec\nrounds: 815"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1079.0399041346582,
            "unit": "iter/sec",
            "range": "stddev: 0.00011343827685780705",
            "extra": "mean: 926.7497857754903 usec\nrounds: 1167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1267.6061406475872,
            "unit": "iter/sec",
            "range": "stddev: 0.00010607606587466109",
            "extra": "mean: 788.8885734563623 usec\nrounds: 1409"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2218.128935240334,
            "unit": "iter/sec",
            "range": "stddev: 0.00011172575951473671",
            "extra": "mean: 450.830420230576 usec\nrounds: 2689"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 711.1322920147365,
            "unit": "iter/sec",
            "range": "stddev: 0.00015879927862178514",
            "extra": "mean: 1.406208115183268 msec\nrounds: 764"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 938.8196409887149,
            "unit": "iter/sec",
            "range": "stddev: 0.00014014973938622743",
            "extra": "mean: 1.0651673189824333 msec\nrounds: 1022"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1160.6366621245013,
            "unit": "iter/sec",
            "range": "stddev: 0.00011295739095634355",
            "extra": "mean: 861.5960813865194 usec\nrounds: 1327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2113.5880322410044,
            "unit": "iter/sec",
            "range": "stddev: 0.00008054713052211632",
            "extra": "mean: 473.12909836062784 usec\nrounds: 2440"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.998815560998654,
            "unit": "iter/sec",
            "range": "stddev: 0.0034388650831342735",
            "extra": "mean: 43.480499999999914 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.01139987384747,
            "unit": "iter/sec",
            "range": "stddev: 0.0023974676861544322",
            "extra": "mean: 41.64688461538519 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 936.5027084621464,
            "unit": "iter/sec",
            "range": "stddev: 0.00018535996516120685",
            "extra": "mean: 1.0678025711662105 msec\nrounds: 1089"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1631.2836556291359,
            "unit": "iter/sec",
            "range": "stddev: 0.00006781561638087196",
            "extra": "mean: 613.0141723355468 usec\nrounds: 1764"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1909.8562512414867,
            "unit": "iter/sec",
            "range": "stddev: 0.00018625732431259097",
            "extra": "mean: 523.5996161229192 usec\nrounds: 2605"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1506.8638396337424,
            "unit": "iter/sec",
            "range": "stddev: 0.0002412008460017561",
            "extra": "mean: 663.6299668874259 usec\nrounds: 2416"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1737040098925,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 722.9711795288797,
            "unit": "iter/sec",
            "range": "stddev: 0.00048078451511334694",
            "extra": "mean: 1.3831810012836816 msec\nrounds: 779"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 860.9250424720675,
            "unit": "iter/sec",
            "range": "stddev: 0.0006084134395717549",
            "extra": "mean: 1.161541308089484 msec\nrounds: 1162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1100.0795480863032,
            "unit": "iter/sec",
            "range": "stddev: 0.0004845049745444009",
            "extra": "mean: 909.0251716247235 usec\nrounds: 1311"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1957.2189911454877,
            "unit": "iter/sec",
            "range": "stddev: 0.00035119118164368983",
            "extra": "mean: 510.92902967119545 usec\nrounds: 2494"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 613.8783802718349,
            "unit": "iter/sec",
            "range": "stddev: 0.0005919140030256579",
            "extra": "mean: 1.6289871611982563 msec\nrounds: 701"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 762.4189445611346,
            "unit": "iter/sec",
            "range": "stddev: 0.0006943918019327152",
            "extra": "mean: 1.311614837398384 msec\nrounds: 984"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1048.859290967726,
            "unit": "iter/sec",
            "range": "stddev: 0.00047470154869945697",
            "extra": "mean: 953.4167343622935 usec\nrounds: 1231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1920.188420072757,
            "unit": "iter/sec",
            "range": "stddev: 0.00028411463448579574",
            "extra": "mean: 520.7822261328445 usec\nrounds: 2273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.82218307208161,
            "unit": "iter/sec",
            "range": "stddev: 0.009220193011356383",
            "extra": "mean: 53.1287999999995 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.384450740974565,
            "unit": "iter/sec",
            "range": "stddev: 0.009749352739199276",
            "extra": "mean: 49.05700000000053 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 716.0664652180483,
            "unit": "iter/sec",
            "range": "stddev: 0.0009063010595092373",
            "extra": "mean: 1.3965184079602047 msec\nrounds: 1005"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1371.5888912794817,
            "unit": "iter/sec",
            "range": "stddev: 0.00035519434500414366",
            "extra": "mean: 729.081437125926 usec\nrounds: 1670"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1287.6769423216238,
            "unit": "iter/sec",
            "range": "stddev: 0.0006540488548422568",
            "extra": "mean: 776.5923013244649 usec\nrounds: 2416"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1211.512193424159,
            "unit": "iter/sec",
            "range": "stddev: 0.0006731948894164672",
            "extra": "mean: 825.4147217236409 usec\nrounds: 2228"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1737127482159,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 711.180347716383,
            "unit": "iter/sec",
            "range": "stddev: 0.00028958834424936227",
            "extra": "mean: 1.406113095238112 msec\nrounds: 840"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 952.024388939407,
            "unit": "iter/sec",
            "range": "stddev: 0.00039669544599720355",
            "extra": "mean: 1.0503932584269609 msec\nrounds: 1157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1133.7968130641498,
            "unit": "iter/sec",
            "range": "stddev: 0.00030157640936818373",
            "extra": "mean: 881.9922480620171 usec\nrounds: 1419"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2251.895741309472,
            "unit": "iter/sec",
            "range": "stddev: 0.00015980264549965968",
            "extra": "mean: 444.07029226783936 usec\nrounds: 2703"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 646.269869405974,
            "unit": "iter/sec",
            "range": "stddev: 0.0004059638605739077",
            "extra": "mean: 1.5473412073491233 msec\nrounds: 762"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 878.6447206090254,
            "unit": "iter/sec",
            "range": "stddev: 0.000291085941959012",
            "extra": "mean: 1.1381164383561746 msec\nrounds: 1022"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 931.105195343699,
            "unit": "iter/sec",
            "range": "stddev: 0.0004839348051832202",
            "extra": "mean: 1.0739925037480536 msec\nrounds: 1334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1916.2615570843732,
            "unit": "iter/sec",
            "range": "stddev: 0.00031831112391695314",
            "extra": "mean: 521.8494293240001 usec\nrounds: 2278"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.733341376181126,
            "unit": "iter/sec",
            "range": "stddev: 0.01076527737790891",
            "extra": "mean: 53.38076000000029 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.791234415570543,
            "unit": "iter/sec",
            "range": "stddev: 0.006702723040789244",
            "extra": "mean: 48.09719230769197 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 844.5414132255461,
            "unit": "iter/sec",
            "range": "stddev: 0.0005137982719046657",
            "extra": "mean: 1.1840745573159202 msec\nrounds: 1073"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1514.9584087413973,
            "unit": "iter/sec",
            "range": "stddev: 0.00016607954056408033",
            "extra": "mean: 660.0841278743643 usec\nrounds: 1783"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1838.1377499579776,
            "unit": "iter/sec",
            "range": "stddev: 0.00025926848667810244",
            "extra": "mean: 544.0288683603072 usec\nrounds: 2598"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1313.2320399939738,
            "unit": "iter/sec",
            "range": "stddev: 0.0005192055422325982",
            "extra": "mean: 761.4800503988532 usec\nrounds: 2381"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1737386862791,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 683.6920704211134,
            "unit": "iter/sec",
            "range": "stddev: 0.00023682475656461053",
            "extra": "mean: 1.4626467722289946 msec\nrounds: 821"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 843.5625260808797,
            "unit": "iter/sec",
            "range": "stddev: 0.0005506980751960232",
            "extra": "mean: 1.185448581560297 msec\nrounds: 1128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1178.0697779791462,
            "unit": "iter/sec",
            "range": "stddev: 0.00021619191053784046",
            "extra": "mean: 848.8461538461618 usec\nrounds: 1378"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2065.05148824892,
            "unit": "iter/sec",
            "range": "stddev: 0.00019440663288252983",
            "extra": "mean: 484.24942704356465 usec\nrounds: 2618"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 598.117104692349,
            "unit": "iter/sec",
            "range": "stddev: 0.0004699431904452723",
            "extra": "mean: 1.6719133964817237 msec\nrounds: 739"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 820.3249311174123,
            "unit": "iter/sec",
            "range": "stddev: 0.0003678280098411278",
            "extra": "mean: 1.2190291457286833 msec\nrounds: 995"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1005.8498524726803,
            "unit": "iter/sec",
            "range": "stddev: 0.000442256252326322",
            "extra": "mean: 994.1841692790434 usec\nrounds: 1276"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1403.729225070233,
            "unit": "iter/sec",
            "range": "stddev: 0.0005831060941017998",
            "extra": "mean: 712.3881031613962 usec\nrounds: 2404"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.683198402468095,
            "unit": "iter/sec",
            "range": "stddev: 0.011751632427851764",
            "extra": "mean: 68.10505263157857 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.603247447089295,
            "unit": "iter/sec",
            "range": "stddev: 0.013400658181400103",
            "extra": "mean: 56.80769999999917 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 695.3565118836874,
            "unit": "iter/sec",
            "range": "stddev: 0.0008248413626916862",
            "extra": "mean: 1.4381112176415058 msec\nrounds: 1043"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1208.4911849985078,
            "unit": "iter/sec",
            "range": "stddev: 0.0004954990188726908",
            "extra": "mean: 827.4781085815158 usec\nrounds: 1713"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1404.0782223536703,
            "unit": "iter/sec",
            "range": "stddev: 0.000512160662774539",
            "extra": "mean: 712.2110321771746 usec\nrounds: 2393"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1164.5214954907271,
            "unit": "iter/sec",
            "range": "stddev: 0.0005142747355947318",
            "extra": "mean: 858.7218045113044 usec\nrounds: 2128"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1737390599098,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 582.3468431460454,
            "unit": "iter/sec",
            "range": "stddev: 0.0008838699499912515",
            "extra": "mean: 1.7171896984924708 msec\nrounds: 796"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 872.3077411081011,
            "unit": "iter/sec",
            "range": "stddev: 0.0005169371832276425",
            "extra": "mean: 1.1463844155844476 msec\nrounds: 1155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1109.9894301790575,
            "unit": "iter/sec",
            "range": "stddev: 0.00037118953779703907",
            "extra": "mean: 900.9094796863835 usec\nrounds: 1403"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1744.8552429967278,
            "unit": "iter/sec",
            "range": "stddev: 0.0004201817097446476",
            "extra": "mean: 573.1134453781592 usec\nrounds: 2618"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 503.48069562538956,
            "unit": "iter/sec",
            "range": "stddev: 0.0013118544451245638",
            "extra": "mean: 1.986173469387675 msec\nrounds: 686"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 623.0651030729446,
            "unit": "iter/sec",
            "range": "stddev: 0.0010381705179174935",
            "extra": "mean: 1.6049687184662087 msec\nrounds: 991"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 921.0542067710952,
            "unit": "iter/sec",
            "range": "stddev: 0.0006696742310796989",
            "extra": "mean: 1.0857124289195335 msec\nrounds: 1231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1911.1628782815274,
            "unit": "iter/sec",
            "range": "stddev: 0.00026735977176927045",
            "extra": "mean: 523.2416406597309 usec\nrounds: 2243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.443269403118714,
            "unit": "iter/sec",
            "range": "stddev: 0.01254831904811761",
            "extra": "mean: 74.38666666666735 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.075468915660956,
            "unit": "iter/sec",
            "range": "stddev: 0.012659268769702447",
            "extra": "mean: 58.56354545454614 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 895.3984306735263,
            "unit": "iter/sec",
            "range": "stddev: 0.00027967370448293117",
            "extra": "mean: 1.1168212560388244 msec\nrounds: 1035"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1056.854853307398,
            "unit": "iter/sec",
            "range": "stddev: 0.0007188421521093452",
            "extra": "mean: 946.2037259615432 usec\nrounds: 1664"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1737.2759171020577,
            "unit": "iter/sec",
            "range": "stddev: 0.00009106552650500552",
            "extra": "mean: 575.6138044370613 usec\nrounds: 2434"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1355.4604196941984,
            "unit": "iter/sec",
            "range": "stddev: 0.0005373107666335567",
            "extra": "mean: 737.7566954154273 usec\nrounds: 2203"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1737392539156,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 792.79687411518,
            "unit": "iter/sec",
            "range": "stddev: 0.000045502309536546106",
            "extra": "mean: 1.2613571428571462 msec\nrounds: 826"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1085.8720928027021,
            "unit": "iter/sec",
            "range": "stddev: 0.00003852727494369936",
            "extra": "mean: 920.9187772925807 usec\nrounds: 1145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1330.936201841994,
            "unit": "iter/sec",
            "range": "stddev: 0.00002386476893134078",
            "extra": "mean: 751.3508150248045 usec\nrounds: 1411"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2470.606563236007,
            "unit": "iter/sec",
            "range": "stddev: 0.00003642925533533163",
            "extra": "mean: 404.7589020771472 usec\nrounds: 2696"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 719.863197539307,
            "unit": "iter/sec",
            "range": "stddev: 0.00004022529349415579",
            "extra": "mean: 1.3891528326747065 msec\nrounds: 759"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 978.0512663466751,
            "unit": "iter/sec",
            "range": "stddev: 0.000023715832735194537",
            "extra": "mean: 1.0224412915851642 msec\nrounds: 1022"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1255.0020658072392,
            "unit": "iter/sec",
            "range": "stddev: 0.00003286088221321623",
            "extra": "mean: 796.8114374033181 usec\nrounds: 1294"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2293.125151085223,
            "unit": "iter/sec",
            "range": "stddev: 0.0000173656832206455",
            "extra": "mean: 436.08609827804185 usec\nrounds: 2381"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.381609244726214,
            "unit": "iter/sec",
            "range": "stddev: 0.0014038655894828929",
            "extra": "mean: 41.01451999999966 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.347889729202677,
            "unit": "iter/sec",
            "range": "stddev: 0.0002827508844864112",
            "extra": "mean: 37.95370370370308 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1008.1356168106188,
            "unit": "iter/sec",
            "range": "stddev: 0.00004387006271069274",
            "extra": "mean: 991.9300373134748 usec\nrounds: 1072"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1599.6229658172485,
            "unit": "iter/sec",
            "range": "stddev: 0.000018801786826524835",
            "extra": "mean: 625.1473136915731 usec\nrounds: 1731"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1911.4602662182153,
            "unit": "iter/sec",
            "range": "stddev: 0.00015773843248447874",
            "extra": "mean: 523.1602339181653 usec\nrounds: 2565"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1504.7217669552972,
            "unit": "iter/sec",
            "range": "stddev: 0.00038693860822126716",
            "extra": "mean: 664.5746887967417 usec\nrounds: 2410"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1737471654384,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 687.6151958889615,
            "unit": "iter/sec",
            "range": "stddev: 0.0003941653970678619",
            "extra": "mean: 1.454301775147918 msec\nrounds: 845"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 953.4987251608711,
            "unit": "iter/sec",
            "range": "stddev: 0.0004294977596792165",
            "extra": "mean: 1.0487691001697808 msec\nrounds: 1178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1068.6776310012299,
            "unit": "iter/sec",
            "range": "stddev: 0.0005120544285752582",
            "extra": "mean: 935.7358767424685 usec\nrounds: 1363"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1932.9362197143748,
            "unit": "iter/sec",
            "range": "stddev: 0.00030262147744492126",
            "extra": "mean: 517.3476443768886 usec\nrounds: 2632"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 656.783803480334,
            "unit": "iter/sec",
            "range": "stddev: 0.00023902022518850022",
            "extra": "mean: 1.5225710419485747 msec\nrounds: 739"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 878.807374737587,
            "unit": "iter/sec",
            "range": "stddev: 0.00025283401715687256",
            "extra": "mean: 1.1379057899902139 msec\nrounds: 1019"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1111.9384544968325,
            "unit": "iter/sec",
            "range": "stddev: 0.00041225883647270646",
            "extra": "mean: 899.3303504846532 usec\nrounds: 1341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1959.8641457807764,
            "unit": "iter/sec",
            "range": "stddev: 0.0002442997173522009",
            "extra": "mean: 510.23944805195526 usec\nrounds: 2464"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 21.629508154816367,
            "unit": "iter/sec",
            "range": "stddev: 0.00481291286214786",
            "extra": "mean: 46.23313636363591 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.7461306524258,
            "unit": "iter/sec",
            "range": "stddev: 0.005893377137221775",
            "extra": "mean: 45.985192307692174 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 878.153005919387,
            "unit": "iter/sec",
            "range": "stddev: 0.00033286628607397464",
            "extra": "mean: 1.1387537174720987 msec\nrounds: 1076"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1266.5753353837379,
            "unit": "iter/sec",
            "range": "stddev: 0.00040013452030924384",
            "extra": "mean: 789.5306122450482 usec\nrounds: 1764"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2074.8959157773775,
            "unit": "iter/sec",
            "range": "stddev: 0.0001482340859514609",
            "extra": "mean: 481.95188606621815 usec\nrounds: 2598"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1477.7563837681794,
            "unit": "iter/sec",
            "range": "stddev: 0.00019457172352925272",
            "extra": "mean: 676.7015260323675 usec\nrounds: 2228"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1737472664005,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 643.2561177630553,
            "unit": "iter/sec",
            "range": "stddev: 0.0006044919352736791",
            "extra": "mean: 1.5545907335907407 msec\nrounds: 777"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 843.7125757500476,
            "unit": "iter/sec",
            "range": "stddev: 0.0005433396067563884",
            "extra": "mean: 1.185237756010707 msec\nrounds: 1123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 995.9179116864634,
            "unit": "iter/sec",
            "range": "stddev: 0.0005110728176236149",
            "extra": "mean: 1.0040988200589986 msec\nrounds: 1356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1810.1126018865816,
            "unit": "iter/sec",
            "range": "stddev: 0.00036447764894118",
            "extra": "mean: 552.4518192723228 usec\nrounds: 2501"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 497.72568969550656,
            "unit": "iter/sec",
            "range": "stddev: 0.0010857274832748553",
            "extra": "mean: 2.0091388101983836 msec\nrounds: 706"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 631.6582243115639,
            "unit": "iter/sec",
            "range": "stddev: 0.0010280808989571214",
            "extra": "mean: 1.5831346153845887 msec\nrounds: 936"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 758.3496291370674,
            "unit": "iter/sec",
            "range": "stddev: 0.0008066985241976497",
            "extra": "mean: 1.3186529821843633 msec\nrounds: 1291"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1815.7007454985285,
            "unit": "iter/sec",
            "range": "stddev: 0.0002500420182851189",
            "extra": "mean: 550.751550044352 usec\nrounds: 2258"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.020035878703812,
            "unit": "iter/sec",
            "range": "stddev: 0.004588876294602913",
            "extra": "mean: 52.576136363637005 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.872462110380244,
            "unit": "iter/sec",
            "range": "stddev: 0.009227481445020115",
            "extra": "mean: 55.952000000000254 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 719.516109403381,
            "unit": "iter/sec",
            "range": "stddev: 0.0008523801685807828",
            "extra": "mean: 1.3898229475768025 msec\nrounds: 1011"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1261.1358920517084,
            "unit": "iter/sec",
            "range": "stddev: 0.00041957567050272874",
            "extra": "mean: 792.9359605911513 usec\nrounds: 1624"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1426.6574411494962,
            "unit": "iter/sec",
            "range": "stddev: 0.0005337235247388603",
            "extra": "mean: 700.9391120508039 usec\nrounds: 2365"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1197.6723251294106,
            "unit": "iter/sec",
            "range": "stddev: 0.0005906989918664717",
            "extra": "mean: 834.9529157667964 usec\nrounds: 2315"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1737557829936,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 784.2639309549016,
            "unit": "iter/sec",
            "range": "stddev: 0.00009358939876116047",
            "extra": "mean: 1.2750809523809454 msec\nrounds: 840"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 970.0567704664953,
            "unit": "iter/sec",
            "range": "stddev: 0.0002322464401275355",
            "extra": "mean: 1.0308675022381475 msec\nrounds: 1117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1171.0092351288354,
            "unit": "iter/sec",
            "range": "stddev: 0.00022919515473277137",
            "extra": "mean: 853.964230171062 usec\nrounds: 1286"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2316.568592266789,
            "unit": "iter/sec",
            "range": "stddev: 0.00004742824802198763",
            "extra": "mean: 431.6729508196814 usec\nrounds: 2440"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 642.3845313804587,
            "unit": "iter/sec",
            "range": "stddev: 0.0002629468672703386",
            "extra": "mean: 1.5567000000000621 msec\nrounds: 690"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 872.50242673507,
            "unit": "iter/sec",
            "range": "stddev: 0.0001246625512340632",
            "extra": "mean: 1.1461286173633118 msec\nrounds: 933"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1180.0146751619761,
            "unit": "iter/sec",
            "range": "stddev: 0.00006397143333849581",
            "extra": "mean: 847.4470877768819 usec\nrounds: 1219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2098.0145479999246,
            "unit": "iter/sec",
            "range": "stddev: 0.00009379442373741385",
            "extra": "mean: 476.64111812442775 usec\nrounds: 2218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 21.1068428384484,
            "unit": "iter/sec",
            "range": "stddev: 0.004303494351845317",
            "extra": "mean: 47.3779999999996 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.582921665490296,
            "unit": "iter/sec",
            "range": "stddev: 0.00317876556912834",
            "extra": "mean: 44.28125000000035 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 889.596531662837,
            "unit": "iter/sec",
            "range": "stddev: 0.0004027355060318831",
            "extra": "mean: 1.1241051020408055 msec\nrounds: 980"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1509.248008514054,
            "unit": "iter/sec",
            "range": "stddev: 0.00017058566274168028",
            "extra": "mean: 662.5816263190306 usec\nrounds: 1611"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1813.5189595161937,
            "unit": "iter/sec",
            "range": "stddev: 0.00024426565045778976",
            "extra": "mean: 551.4141414142026 usec\nrounds: 2376"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1364.8623896484016,
            "unit": "iter/sec",
            "range": "stddev: 0.0005039367548048953",
            "extra": "mean: 732.6745960503807 usec\nrounds: 2228"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1737560379031,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 538.9638597299775,
            "unit": "iter/sec",
            "range": "stddev: 0.0011042242848801904",
            "extra": "mean: 1.8554119760478986 msec\nrounds: 835"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 681.5601130846615,
            "unit": "iter/sec",
            "range": "stddev: 0.0009094008390620426",
            "extra": "mean: 1.467222011385198 msec\nrounds: 1054"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 903.7758523963171,
            "unit": "iter/sec",
            "range": "stddev: 0.0007409262441519749",
            "extra": "mean: 1.1064690402477 msec\nrounds: 1292"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2272.9265622464413,
            "unit": "iter/sec",
            "range": "stddev: 0.00011094492036505034",
            "extra": "mean: 439.96142093198665 usec\nrounds: 2618"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 511.46678810341933,
            "unit": "iter/sec",
            "range": "stddev: 0.0008770228441895762",
            "extra": "mean: 1.9551611624835328 msec\nrounds: 757"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 658.561964095172,
            "unit": "iter/sec",
            "range": "stddev: 0.0007385681751533362",
            "extra": "mean: 1.5184600000000685 msec\nrounds: 1000"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 996.7576907106039,
            "unit": "iter/sec",
            "range": "stddev: 0.0005607316268559519",
            "extra": "mean: 1.0032528560547995 msec\nrounds: 1313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2130.853880010945,
            "unit": "iter/sec",
            "range": "stddev: 0.00010514141902660554",
            "extra": "mean: 469.2954356846202 usec\nrounds: 2410"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.2192201586987,
            "unit": "iter/sec",
            "range": "stddev: 0.00485238599316467",
            "extra": "mean: 45.00607999999971 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 16.887567305399667,
            "unit": "iter/sec",
            "range": "stddev: 0.010176020447109144",
            "extra": "mean: 59.2151599999994 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 853.3308073652175,
            "unit": "iter/sec",
            "range": "stddev: 0.00046397769380652907",
            "extra": "mean: 1.1718784688995876 msec\nrounds: 1045"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1545.7477819580495,
            "unit": "iter/sec",
            "range": "stddev: 0.0001095165140146138",
            "extra": "mean: 646.9360730592588 usec\nrounds: 1752"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1765.9126911989204,
            "unit": "iter/sec",
            "range": "stddev: 0.0001784687050809907",
            "extra": "mean: 566.2794117647323 usec\nrounds: 2584"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1348.1729264075316,
            "unit": "iter/sec",
            "range": "stddev: 0.0004381991864031117",
            "extra": "mean: 741.7446088794367 usec\nrounds: 2365"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1737729426971,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 802.5781514045119,
            "unit": "iter/sec",
            "range": "stddev: 0.00007673030784479037",
            "extra": "mean: 1.2459845788849344 msec\nrounds: 843"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1119.5114302977383,
            "unit": "iter/sec",
            "range": "stddev: 0.00004840065758094185",
            "extra": "mean: 893.2467976088874 usec\nrounds: 1171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1372.5793658470852,
            "unit": "iter/sec",
            "range": "stddev: 0.00003410870376170181",
            "extra": "mean: 728.5553206483266 usec\nrounds: 1419"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2570.0637092857055,
            "unit": "iter/sec",
            "range": "stddev: 0.000020773065773323016",
            "extra": "mean: 389.09541284403747 usec\nrounds: 2725"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 730.9864886630477,
            "unit": "iter/sec",
            "range": "stddev: 0.00006858549240134497",
            "extra": "mean: 1.3680143415905948 msec\nrounds: 767"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 973.140189262922,
            "unit": "iter/sec",
            "range": "stddev: 0.00005830833823574634",
            "extra": "mean: 1.0276011730205308 msec\nrounds: 1023"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1290.7473091038228,
            "unit": "iter/sec",
            "range": "stddev: 0.00003635126996194823",
            "extra": "mean: 774.7449814125963 usec\nrounds: 1345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2360.4356580596805,
            "unit": "iter/sec",
            "range": "stddev: 0.000028031295607775298",
            "extra": "mean: 423.65060728747744 usec\nrounds: 2470"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.901859366728488,
            "unit": "iter/sec",
            "range": "stddev: 0.0027153291980616862",
            "extra": "mean: 43.66457692307667 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.986400450430864,
            "unit": "iter/sec",
            "range": "stddev: 0.001374114596049869",
            "extra": "mean: 38.48166666666678 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1045.9070204096913,
            "unit": "iter/sec",
            "range": "stddev: 0.00005947831352709452",
            "extra": "mean: 956.107933579307 usec\nrounds: 1084"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1702.2399756711686,
            "unit": "iter/sec",
            "range": "stddev: 0.0000318492296021008",
            "extra": "mean: 587.4612359551211 usec\nrounds: 1780"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2412.365800025675,
            "unit": "iter/sec",
            "range": "stddev: 0.00003892945908579221",
            "extra": "mean: 414.5308310992292 usec\nrounds: 2611"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 2132.722444795531,
            "unit": "iter/sec",
            "range": "stddev: 0.00004306763243717768",
            "extra": "mean: 468.88426688634223 usec\nrounds: 2428"
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
        "date": 1738381714306,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 741.1379940919925,
            "unit": "iter/sec",
            "range": "stddev: 0.00020034319900473653",
            "extra": "mean: 1.3492763938315606 msec\nrounds: 843"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 960.1741115722302,
            "unit": "iter/sec",
            "range": "stddev: 0.000385326226781315",
            "extra": "mean: 1.0414777777777795 msec\nrounds: 1170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1216.854418483131,
            "unit": "iter/sec",
            "range": "stddev: 0.00023046437646674013",
            "extra": "mean: 821.7909922589996 usec\nrounds: 1421"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2334.322728606512,
            "unit": "iter/sec",
            "range": "stddev: 0.00011629500521862602",
            "extra": "mean: 428.3897799328527 usec\nrounds: 2681"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 677.4355143785438,
            "unit": "iter/sec",
            "range": "stddev: 0.0003442239054362007",
            "extra": "mean: 1.4761552631579493 msec\nrounds: 760"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 922.071002176471,
            "unit": "iter/sec",
            "range": "stddev: 0.00020171532312402614",
            "extra": "mean: 1.0845151811949234 msec\nrounds: 1021"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 996.1081591263879,
            "unit": "iter/sec",
            "range": "stddev: 0.00041908479794940643",
            "extra": "mean: 1.0039070464767854 msec\nrounds: 1334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2027.412670708787,
            "unit": "iter/sec",
            "range": "stddev: 0.00018212928623617734",
            "extra": "mean: 493.2394940840526 usec\nrounds: 2451"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.179956782604457,
            "unit": "iter/sec",
            "range": "stddev: 0.007886153801231465",
            "extra": "mean: 49.55412000000024 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.466066277305153,
            "unit": "iter/sec",
            "range": "stddev: 0.00846779902308611",
            "extra": "mean: 46.58515384615406 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 870.553526950923,
            "unit": "iter/sec",
            "range": "stddev: 0.0004104429998578589",
            "extra": "mean: 1.148694444444396 msec\nrounds: 1080"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1407.0958971629182,
            "unit": "iter/sec",
            "range": "stddev: 0.00039941071688208066",
            "extra": "mean: 710.6836158191262 usec\nrounds: 1770"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1582.5190886425532,
            "unit": "iter/sec",
            "range": "stddev: 0.0004388724955312565",
            "extra": "mean: 631.9039101498458 usec\nrounds: 2404"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1411.1026098580812,
            "unit": "iter/sec",
            "range": "stddev: 0.0003351028763938668",
            "extra": "mean: 708.6656866863658 usec\nrounds: 2381"
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
        "date": 1738382260903,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 687.3046776523314,
            "unit": "iter/sec",
            "range": "stddev: 0.0004319340864098795",
            "extra": "mean: 1.454958815958828 msec\nrounds: 777"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 933.0687904098361,
            "unit": "iter/sec",
            "range": "stddev: 0.00028095500080726083",
            "extra": "mean: 1.0717323420074585 msec\nrounds: 1076"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1193.7291397216666,
            "unit": "iter/sec",
            "range": "stddev: 0.00016146988662854757",
            "extra": "mean: 837.7109737248794 usec\nrounds: 1294"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2103.922257025244,
            "unit": "iter/sec",
            "range": "stddev: 0.0002045413419332938",
            "extra": "mean: 475.3027335781455 usec\nrounds: 2451"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 632.731040146091,
            "unit": "iter/sec",
            "range": "stddev: 0.0004555402341760026",
            "extra": "mean: 1.580450359712257 msec\nrounds: 695"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 847.5964073429548,
            "unit": "iter/sec",
            "range": "stddev: 0.00038860973327962316",
            "extra": "mean: 1.1798067940552037 msec\nrounds: 942"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 838.9175213425411,
            "unit": "iter/sec",
            "range": "stddev: 0.0008750414211761764",
            "extra": "mean: 1.19201229508197 msec\nrounds: 1220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1475.4052300436933,
            "unit": "iter/sec",
            "range": "stddev: 0.0005555684980729775",
            "extra": "mean: 677.7798937112251 usec\nrounds: 2258"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.022491242520626,
            "unit": "iter/sec",
            "range": "stddev: 0.008564238616571527",
            "extra": "mean: 52.569349999999915 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.84073330385411,
            "unit": "iter/sec",
            "range": "stddev: 0.005572127873934224",
            "extra": "mean: 47.98295652173949 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 827.5708212799751,
            "unit": "iter/sec",
            "range": "stddev: 0.0005128060383854238",
            "extra": "mean: 1.2083557978196169 msec\nrounds: 1009"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1286.7376652710332,
            "unit": "iter/sec",
            "range": "stddev: 0.0003960065629387081",
            "extra": "mean: 777.1591886908542 usec\nrounds: 1627"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1047.1997983170875,
            "unit": "iter/sec",
            "range": "stddev: 0.0007199655569389602",
            "extra": "mean: 954.9276094275988 usec\nrounds: 2376"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1011.2777818806551,
            "unit": "iter/sec",
            "range": "stddev: 0.0007380870623930323",
            "extra": "mean: 988.8479880773391 usec\nrounds: 2013"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1739373390102,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 716.9514557171194,
            "unit": "iter/sec",
            "range": "stddev: 0.0003102140027041768",
            "extra": "mean: 1.3947945736434357 msec\nrounds: 774"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1002.891842834779,
            "unit": "iter/sec",
            "range": "stddev: 0.0002649144723253344",
            "extra": "mean: 997.116495806163 usec\nrounds: 1073"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1257.355384919793,
            "unit": "iter/sec",
            "range": "stddev: 0.00008933993803003522",
            "extra": "mean: 795.3200916730397 usec\nrounds: 1309"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2371.250734447641,
            "unit": "iter/sec",
            "range": "stddev: 0.000044619056403812225",
            "extra": "mean: 421.71837228041585 usec\nrounds: 2482"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 629.7756469761742,
            "unit": "iter/sec",
            "range": "stddev: 0.0004133587071710805",
            "extra": "mean: 1.5878670520231026 msec\nrounds: 692"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 873.9587096082915,
            "unit": "iter/sec",
            "range": "stddev: 0.0002121000156037299",
            "extra": "mean: 1.1442188160676379 msec\nrounds: 946"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1106.3814970534881,
            "unit": "iter/sec",
            "range": "stddev: 0.0002771923724233163",
            "extra": "mean: 903.8473642800399 usec\nrounds: 1271"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2072.991606577562,
            "unit": "iter/sec",
            "range": "stddev: 0.0001495814625729072",
            "extra": "mean: 482.39462081130455 usec\nrounds: 2268"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.076386437778849,
            "unit": "iter/sec",
            "range": "stddev: 0.0175898382323729",
            "extra": "mean: 82.80622727272754 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 16.008603896930573,
            "unit": "iter/sec",
            "range": "stddev: 0.015966282880343314",
            "extra": "mean: 62.46640909090993 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 686.1342729883257,
            "unit": "iter/sec",
            "range": "stddev: 0.0007738899791446647",
            "extra": "mean: 1.4574406779662712 msec\nrounds: 1003"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1441.2338884920089,
            "unit": "iter/sec",
            "range": "stddev: 0.00023457522365912288",
            "extra": "mean: 693.8499073500967 usec\nrounds: 1619"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1500.4523233206103,
            "unit": "iter/sec",
            "range": "stddev: 0.0003937114777274055",
            "extra": "mean: 666.4656946826055 usec\nrounds: 2332"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1167.0891479823408,
            "unit": "iter/sec",
            "range": "stddev: 0.0005345507748570465",
            "extra": "mean: 856.8325750683194 usec\nrounds: 2198"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1739809319567,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 788.2064029792059,
            "unit": "iter/sec",
            "range": "stddev: 0.00010606892601513271",
            "extra": "mean: 1.2687032181168179 msec\nrounds: 839"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1123.8576292121727,
            "unit": "iter/sec",
            "range": "stddev: 0.00004429659998334156",
            "extra": "mean: 889.7924203272996 usec\nrounds: 1161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1227.6475696346658,
            "unit": "iter/sec",
            "range": "stddev: 0.00005665798482850509",
            "extra": "mean: 814.5660242683401 usec\nrounds: 1401"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2225.6359796646393,
            "unit": "iter/sec",
            "range": "stddev: 0.00005052154000484811",
            "extra": "mean: 449.3097744361056 usec\nrounds: 2660"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 652.3969965511438,
            "unit": "iter/sec",
            "range": "stddev: 0.00011266502724789182",
            "extra": "mean: 1.5328090185675867 msec\nrounds: 754"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 905.5823447096326,
            "unit": "iter/sec",
            "range": "stddev: 0.00008804937239167903",
            "extra": "mean: 1.1042618110235372 msec\nrounds: 1016"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 963.5329250583635,
            "unit": "iter/sec",
            "range": "stddev: 0.0004022250108231272",
            "extra": "mean: 1.0378472535740568 msec\nrounds: 1329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2100.8457759965336,
            "unit": "iter/sec",
            "range": "stddev: 0.00006686840723905278",
            "extra": "mean: 475.9987674610009 usec\nrounds: 2434"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 21.95188877709702,
            "unit": "iter/sec",
            "range": "stddev: 0.0045221725123977905",
            "extra": "mean: 45.55416666666634 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.14684984727542,
            "unit": "iter/sec",
            "range": "stddev: 0.002713626049006371",
            "extra": "mean: 43.20242307692286 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 917.9795371265112,
            "unit": "iter/sec",
            "range": "stddev: 0.00022036387304460702",
            "extra": "mean: 1.0893489010988544 msec\nrounds: 1092"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1499.8597070004928,
            "unit": "iter/sec",
            "range": "stddev: 0.00010109718701192317",
            "extra": "mean: 666.7290249431785 usec\nrounds: 1764"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1754.2415888297846,
            "unit": "iter/sec",
            "range": "stddev: 0.00023128883284010738",
            "extra": "mean: 570.0469116497676 usec\nrounds: 2558"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1433.10278629776,
            "unit": "iter/sec",
            "range": "stddev: 0.00021493309837627628",
            "extra": "mean: 697.7866553336161 usec\nrounds: 2353"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1739890061313,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 563.6150688005523,
            "unit": "iter/sec",
            "range": "stddev: 0.0009183393965407768",
            "extra": "mean: 1.7742605820105783 msec\nrounds: 756"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 726.2749614674632,
            "unit": "iter/sec",
            "range": "stddev: 0.0008486179921118963",
            "extra": "mean: 1.3768889925372976 msec\nrounds: 1072"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 876.8218163591305,
            "unit": "iter/sec",
            "range": "stddev: 0.0007231501963485474",
            "extra": "mean: 1.1404825716499027 msec\nrounds: 1291"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1642.9556785896498,
            "unit": "iter/sec",
            "range": "stddev: 0.0005044585748137623",
            "extra": "mean: 608.6591458501318 usec\nrounds: 2482"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 446.9945066553974,
            "unit": "iter/sec",
            "range": "stddev: 0.001306457433234233",
            "extra": "mean: 2.237163958641068 msec\nrounds: 677"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 593.6543812837579,
            "unit": "iter/sec",
            "range": "stddev: 0.001151712522927027",
            "extra": "mean: 1.6844817987151603 msec\nrounds: 934"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 802.1752561311499,
            "unit": "iter/sec",
            "range": "stddev: 0.0009672636839999322",
            "extra": "mean: 1.2466103789126441 msec\nrounds: 1214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1438.0480842941297,
            "unit": "iter/sec",
            "range": "stddev: 0.000612322288897166",
            "extra": "mean: 695.3870395028224 usec\nrounds: 2253"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 15.680722567695819,
            "unit": "iter/sec",
            "range": "stddev: 0.01431366276524405",
            "extra": "mean: 63.772571428571844 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.836595136294463,
            "unit": "iter/sec",
            "range": "stddev: 0.012066690448184734",
            "extra": "mean: 67.40090909090863 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 698.6555107157297,
            "unit": "iter/sec",
            "range": "stddev: 0.0008245149214916189",
            "extra": "mean: 1.431320564516211 msec\nrounds: 992"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1056.8978608936948,
            "unit": "iter/sec",
            "range": "stddev: 0.0007236328092710296",
            "extra": "mean: 946.1652227722527 usec\nrounds: 1616"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1348.0846278857061,
            "unit": "iter/sec",
            "range": "stddev: 0.0006080368610977148",
            "extra": "mean: 741.7931925893769 usec\nrounds: 2321"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1050.328439886444,
            "unit": "iter/sec",
            "range": "stddev: 0.0008082976260228784",
            "extra": "mean: 952.0831408774525 usec\nrounds: 2165"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1739892004188,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 757.4899337364365,
            "unit": "iter/sec",
            "range": "stddev: 0.0000933731417183052",
            "extra": "mean: 1.320149556400499 msec\nrounds: 789"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1059.6538721840823,
            "unit": "iter/sec",
            "range": "stddev: 0.00008128982041543664",
            "extra": "mean: 943.704379562047 usec\nrounds: 1096"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1270.1882957922455,
            "unit": "iter/sec",
            "range": "stddev: 0.00011927455377785582",
            "extra": "mean: 787.284848484828 usec\nrounds: 1320"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2436.1660980354786,
            "unit": "iter/sec",
            "range": "stddev: 0.00009035341752960786",
            "extra": "mean: 410.4810426540287 usec\nrounds: 2532"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 676.6722274384181,
            "unit": "iter/sec",
            "range": "stddev: 0.00010181227647604175",
            "extra": "mean: 1.4778203677511017 msec\nrounds: 707"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 930.7784533531988,
            "unit": "iter/sec",
            "range": "stddev: 0.000037860233394786353",
            "extra": "mean: 1.0743695198330232 msec\nrounds: 958"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1116.555313479116,
            "unit": "iter/sec",
            "range": "stddev: 0.00020774764317600002",
            "extra": "mean: 895.6116978065895 usec\nrounds: 1231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2137.358004658573,
            "unit": "iter/sec",
            "range": "stddev: 0.00008211807574044423",
            "extra": "mean: 467.86733800346315 usec\nrounds: 2284"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.45721199327379,
            "unit": "iter/sec",
            "range": "stddev: 0.005074797998228995",
            "extra": "mean: 44.52912500000054 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.40508395871725,
            "unit": "iter/sec",
            "range": "stddev: 0.0021713949679092828",
            "extra": "mean: 42.725759999999866 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 837.5084248865011,
            "unit": "iter/sec",
            "range": "stddev: 0.00043162939680859455",
            "extra": "mean: 1.1940178394450416 msec\nrounds: 1009"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1421.3741870068588,
            "unit": "iter/sec",
            "range": "stddev: 0.00027981837741414327",
            "extra": "mean: 703.5445058319287 usec\nrounds: 1629"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1764.4072007047287,
            "unit": "iter/sec",
            "range": "stddev: 0.00024175891884550124",
            "extra": "mean: 566.7625928983889 usec\nrounds: 2422"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1610.9940947088808,
            "unit": "iter/sec",
            "range": "stddev: 0.0002277596163763518",
            "extra": "mean: 620.7347396768129 usec\nrounds: 2228"
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
        "date": 1740284664812,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 828.3811610848846,
            "unit": "iter/sec",
            "range": "stddev: 0.000048865537734112284",
            "extra": "mean: 1.2071737588652496 msec\nrounds: 846"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1069.1199771921056,
            "unit": "iter/sec",
            "range": "stddev: 0.00012282475753433092",
            "extra": "mean: 935.3487179487192 usec\nrounds: 1170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1247.7497051338096,
            "unit": "iter/sec",
            "range": "stddev: 0.00011128945236578446",
            "extra": "mean: 801.4427860696303 usec\nrounds: 1407"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2606.339428437599,
            "unit": "iter/sec",
            "range": "stddev: 0.000012648430040014166",
            "extra": "mean: 383.6798803291181 usec\nrounds: 2674"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 746.9881864840976,
            "unit": "iter/sec",
            "range": "stddev: 0.00004891082849393117",
            "extra": "mean: 1.3387092568448387 msec\nrounds: 767"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 990.5913172350286,
            "unit": "iter/sec",
            "range": "stddev: 0.00005001985916558798",
            "extra": "mean: 1.0094980468749042 msec\nrounds: 1024"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1187.58870982233,
            "unit": "iter/sec",
            "range": "stddev: 0.00003795614453918041",
            "extra": "mean: 842.0423600605009 usec\nrounds: 1322"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2331.255749934903,
            "unit": "iter/sec",
            "range": "stddev: 0.00006163402555377635",
            "extra": "mean: 428.95336559617004 usec\nrounds: 2273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.39603157703494,
            "unit": "iter/sec",
            "range": "stddev: 0.000864762409344779",
            "extra": "mean: 39.376230769230794 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.321536085851456,
            "unit": "iter/sec",
            "range": "stddev: 0.00023287960157993262",
            "extra": "mean: 37.991703703703195 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1018.5042297388094,
            "unit": "iter/sec",
            "range": "stddev: 0.00017618790168012283",
            "extra": "mean: 981.8319559227017 usec\nrounds: 1089"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1616.9029034706275,
            "unit": "iter/sec",
            "range": "stddev: 0.0001244487999949872",
            "extra": "mean: 618.4663271081608 usec\nrounds: 1767"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2138.821227488378,
            "unit": "iter/sec",
            "range": "stddev: 0.000038539378053767",
            "extra": "mean: 467.54725787638733 usec\nrounds: 2571"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1687.5719715331263,
            "unit": "iter/sec",
            "range": "stddev: 0.00017907750694515944",
            "extra": "mean: 592.5673197164559 usec\nrounds: 2399"
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
        "date": 1740294833362,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 823.4573542422183,
            "unit": "iter/sec",
            "range": "stddev: 0.000058144881667053016",
            "extra": "mean: 1.214391971664694 msec\nrounds: 847"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1146.366508069651,
            "unit": "iter/sec",
            "range": "stddev: 0.00003744698180594659",
            "extra": "mean: 872.3213675213565 usec\nrounds: 1170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1376.9158835761098,
            "unit": "iter/sec",
            "range": "stddev: 0.00002854890804814043",
            "extra": "mean: 726.260777385189 usec\nrounds: 1415"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2552.1074571562012,
            "unit": "iter/sec",
            "range": "stddev: 0.00002854897557892213",
            "extra": "mean: 391.8330308529776 usec\nrounds: 2755"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 605.9825814857697,
            "unit": "iter/sec",
            "range": "stddev: 0.00026314719583176685",
            "extra": "mean: 1.6502124492558257 msec\nrounds: 739"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 826.3019767753514,
            "unit": "iter/sec",
            "range": "stddev: 0.00025013202103858973",
            "extra": "mean: 1.2102113127001175 msec\nrounds: 937"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 922.1915823070601,
            "unit": "iter/sec",
            "range": "stddev: 0.00043492063035567493",
            "extra": "mean: 1.0843733766234185 msec\nrounds: 1232"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1737.8849517029453,
            "unit": "iter/sec",
            "range": "stddev: 0.0003007136582619741",
            "extra": "mean: 575.4120829575656 usec\nrounds: 2218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.288817099134025,
            "unit": "iter/sec",
            "range": "stddev: 0.008610304990450153",
            "extra": "mean: 57.84085714285731 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.749660177042802,
            "unit": "iter/sec",
            "range": "stddev: 0.005584593555297305",
            "extra": "mean: 50.633782608695704 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 948.4927213494956,
            "unit": "iter/sec",
            "range": "stddev: 0.0002606036619364624",
            "extra": "mean: 1.0543043478259075 msec\nrounds: 989"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1457.8126859455149,
            "unit": "iter/sec",
            "range": "stddev: 0.0002898343836956749",
            "extra": "mean: 685.9591836734603 usec\nrounds: 1764"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1434.0512142024015,
            "unit": "iter/sec",
            "range": "stddev: 0.0004008886122607977",
            "extra": "mean: 697.3251653053309 usec\nrounds: 2571"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1819.2393471360972,
            "unit": "iter/sec",
            "range": "stddev: 0.0001969514211487964",
            "extra": "mean: 549.6802834515595 usec\nrounds: 2399"
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
        "date": 1740295281603,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 822.1266721801727,
            "unit": "iter/sec",
            "range": "stddev: 0.000020967548782749882",
            "extra": "mean: 1.2163575685339711 msec\nrounds: 839"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 1147.678461047827,
            "unit": "iter/sec",
            "range": "stddev: 0.000019722048357001094",
            "extra": "mean: 871.3241852487176 usec\nrounds: 1166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1351.073261827391,
            "unit": "iter/sec",
            "range": "stddev: 0.00008447713072829075",
            "extra": "mean: 740.1523131672759 usec\nrounds: 1405"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2587.9775045761753,
            "unit": "iter/sec",
            "range": "stddev: 0.0000423857048424948",
            "extra": "mean: 386.40212221000996 usec\nrounds: 2733"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 743.7135707230758,
            "unit": "iter/sec",
            "range": "stddev: 0.00007195697274092785",
            "extra": "mean: 1.3446036745406562 msec\nrounds: 762"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 974.9868090020408,
            "unit": "iter/sec",
            "range": "stddev: 0.00011082597611933927",
            "extra": "mean: 1.025654901960737 msec\nrounds: 1020"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1280.5652466642996,
            "unit": "iter/sec",
            "range": "stddev: 0.00009760865301714808",
            "extra": "mean: 780.9051530992784 usec\nrounds: 1339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2306.2339319765247,
            "unit": "iter/sec",
            "range": "stddev: 0.0000850353489429667",
            "extra": "mean: 433.6073570572108 usec\nrounds: 2501"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.304789539218568,
            "unit": "iter/sec",
            "range": "stddev: 0.003212887980522081",
            "extra": "mean: 41.14415384615387 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.259257650785994,
            "unit": "iter/sec",
            "range": "stddev: 0.0005757455701430989",
            "extra": "mean: 38.081807692308004 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1045.605974455169,
            "unit": "iter/sec",
            "range": "stddev: 0.00008349876028434003",
            "extra": "mean: 956.3832116788232 usec\nrounds: 1096"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1614.075681410844,
            "unit": "iter/sec",
            "range": "stddev: 0.0001307518089895339",
            "extra": "mean: 619.5496354457879 usec\nrounds: 1783"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1900.7727305549909,
            "unit": "iter/sec",
            "range": "stddev: 0.00020169920583776196",
            "extra": "mean: 526.1018237083075 usec\nrounds: 2632"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1679.4063146507954,
            "unit": "iter/sec",
            "range": "stddev: 0.00016817332496259",
            "extra": "mean: 595.4485172981699 usec\nrounds: 2428"
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
        "date": 1740472079701,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 651.9514162662703,
            "unit": "iter/sec",
            "range": "stddev: 0.0005941817659397838",
            "extra": "mean: 1.5338566265060152 msec\nrounds: 830"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 967.7353806764321,
            "unit": "iter/sec",
            "range": "stddev: 0.00029163078012837225",
            "extra": "mean: 1.0333403324584614 msec\nrounds: 1143"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1103.3227443792991,
            "unit": "iter/sec",
            "range": "stddev: 0.00033850756090053516",
            "extra": "mean: 906.3531093638192 usec\nrounds: 1399"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2014.803292580542,
            "unit": "iter/sec",
            "range": "stddev: 0.00022636414514403197",
            "extra": "mean: 496.32636778114903 usec\nrounds: 2632"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 616.4809298502378,
            "unit": "iter/sec",
            "range": "stddev: 0.00047118519264915064",
            "extra": "mean: 1.6221101928374828 msec\nrounds: 726"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 835.7281607378281,
            "unit": "iter/sec",
            "range": "stddev: 0.0003391597913678106",
            "extra": "mean: 1.1965613305612957 msec\nrounds: 962"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 945.587673818657,
            "unit": "iter/sec",
            "range": "stddev: 0.0005137625725298543",
            "extra": "mean: 1.0575433962263958 msec\nrounds: 1325"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1748.747110603574,
            "unit": "iter/sec",
            "range": "stddev: 0.00043749868510038986",
            "extra": "mean: 571.8379712746765 usec\nrounds: 2228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.92893058397002,
            "unit": "iter/sec",
            "range": "stddev: 0.005629977953852871",
            "extra": "mean: 47.78074999999878 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.517470525930538,
            "unit": "iter/sec",
            "range": "stddev: 0.005429148356645465",
            "extra": "mean: 44.409961538460806 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 802.6862642345639,
            "unit": "iter/sec",
            "range": "stddev: 0.0004297523330642686",
            "extra": "mean: 1.2458167587476947 msec\nrounds: 1086"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1357.526045843254,
            "unit": "iter/sec",
            "range": "stddev: 0.0002786154538340425",
            "extra": "mean: 736.6341169379409 usec\nrounds: 1659"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1805.8659347386176,
            "unit": "iter/sec",
            "range": "stddev: 0.00028146475747510037",
            "extra": "mean: 553.750962772738 usec\nrounds: 2337"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1428.5749052686028,
            "unit": "iter/sec",
            "range": "stddev: 0.00044550605551663624",
            "extra": "mean: 699.9982964225305 usec\nrounds: 2348"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1740498019514,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 665.7346949213106,
            "unit": "iter/sec",
            "range": "stddev: 0.0006422537183471741",
            "extra": "mean: 1.5020998719590533 msec\nrounds: 781"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 923.236811082874,
            "unit": "iter/sec",
            "range": "stddev: 0.0005456920093640293",
            "extra": "mean: 1.083145719489986 msec\nrounds: 1098"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1176.4999483053132,
            "unit": "iter/sec",
            "range": "stddev: 0.000468052684746373",
            "extra": "mean: 849.9787878787821 usec\nrounds: 1320"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2032.4148688131609,
            "unit": "iter/sec",
            "range": "stddev: 0.0002809139814081551",
            "extra": "mean: 492.02552852014657 usec\nrounds: 2507"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 577.8436207728696,
            "unit": "iter/sec",
            "range": "stddev: 0.0008749746734711733",
            "extra": "mean: 1.7305720164609475 msec\nrounds: 729"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 753.5359137910997,
            "unit": "iter/sec",
            "range": "stddev: 0.0006683932118749444",
            "extra": "mean: 1.3270767613038108 msec\nrounds: 951"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1025.014176170882,
            "unit": "iter/sec",
            "range": "stddev: 0.00046194269551236175",
            "extra": "mean: 975.5962632006449 usec\nrounds: 1231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2036.131957081885,
            "unit": "iter/sec",
            "range": "stddev: 0.00019362404779566347",
            "extra": "mean: 491.1273046532632 usec\nrounds: 2278"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.705474807893857,
            "unit": "iter/sec",
            "range": "stddev: 0.009717252807868552",
            "extra": "mean: 50.747318181818585 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.588361667693455,
            "unit": "iter/sec",
            "range": "stddev: 0.007437711086718321",
            "extra": "mean: 48.57113043478178 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 749.525737589546,
            "unit": "iter/sec",
            "range": "stddev: 0.0006669394784678553",
            "extra": "mean: 1.3341769999999897 msec\nrounds: 1000"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1342.0763745693998,
            "unit": "iter/sec",
            "range": "stddev: 0.00038815907779436715",
            "extra": "mean: 745.1140776700181 usec\nrounds: 1648"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1126.9356784577608,
            "unit": "iter/sec",
            "range": "stddev: 0.0007759677196879927",
            "extra": "mean: 887.362090947839 usec\nrounds: 2353"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1319.7061454317106,
            "unit": "iter/sec",
            "range": "stddev: 0.0005310137450837463",
            "extra": "mean: 757.7444444443909 usec\nrounds: 2160"
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
        "date": 1740531624514,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 500.4444141285369,
            "unit": "iter/sec",
            "range": "stddev: 0.0013295061437538628",
            "extra": "mean: 1.9982239221140643 msec\nrounds: 719"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 694.0534537916069,
            "unit": "iter/sec",
            "range": "stddev: 0.0010923545838346126",
            "extra": "mean: 1.4408112149532724 msec\nrounds: 1070"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 820.4927377865628,
            "unit": "iter/sec",
            "range": "stddev: 0.0008308830799988343",
            "extra": "mean: 1.2187798306389557 msec\nrounds: 1299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1628.6041881177314,
            "unit": "iter/sec",
            "range": "stddev: 0.0006218636600522154",
            "extra": "mean: 614.0227363382602 usec\nrounds: 2507"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 438.79770759827625,
            "unit": "iter/sec",
            "range": "stddev: 0.0015072722330590536",
            "extra": "mean: 2.2789544764794214 msec\nrounds: 659"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 684.4751171882731,
            "unit": "iter/sec",
            "range": "stddev: 0.0010333608641307757",
            "extra": "mean: 1.4609734888652468 msec\nrounds: 943"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1075.9684816956976,
            "unit": "iter/sec",
            "range": "stddev: 0.0003510574782924996",
            "extra": "mean: 929.395253682549 usec\nrounds: 1222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2081.594144373119,
            "unit": "iter/sec",
            "range": "stddev: 0.00013670272970485244",
            "extra": "mean: 480.40104393219957 usec\nrounds: 2299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.160523659439658,
            "unit": "iter/sec",
            "range": "stddev: 0.0009525212272727053",
            "extra": "mean: 43.176916666667196 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.659038123830932,
            "unit": "iter/sec",
            "range": "stddev: 0.0028499560637347886",
            "extra": "mean: 44.132500000001386 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 759.9425179479761,
            "unit": "iter/sec",
            "range": "stddev: 0.0006381444013356117",
            "extra": "mean: 1.3158889999999417 msec\nrounds: 1000"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1277.4778249134267,
            "unit": "iter/sec",
            "range": "stddev: 0.000571574500320568",
            "extra": "mean: 782.7924528300668 usec\nrounds: 1749"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1648.357204736793,
            "unit": "iter/sec",
            "range": "stddev: 0.0003686382663750852",
            "extra": "mean: 606.6646216768763 usec\nrounds: 2445"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1348.7733675902527,
            "unit": "iter/sec",
            "range": "stddev: 0.0004302903256004353",
            "extra": "mean: 741.4144021738962 usec\nrounds: 2208"
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
        "date": 1740547842309,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 654.8946689503088,
            "unit": "iter/sec",
            "range": "stddev: 0.00011237951018805042",
            "extra": "mean: 1.5269631093544245 msec\nrounds: 759"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 981.1251971550518,
            "unit": "iter/sec",
            "range": "stddev: 0.00006867879810200569",
            "extra": "mean: 1.019237914691906 msec\nrounds: 1055"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1194.3131063592996,
            "unit": "iter/sec",
            "range": "stddev: 0.00011573449496255883",
            "extra": "mean: 837.3013698630198 usec\nrounds: 1387"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2364.8173280741285,
            "unit": "iter/sec",
            "range": "stddev: 0.00003806853193991826",
            "extra": "mean: 422.86564299424555 usec\nrounds: 2605"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 623.764346131851,
            "unit": "iter/sec",
            "range": "stddev: 0.0002065453004617323",
            "extra": "mean: 1.603169540229894 msec\nrounds: 696"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 920.6279342722825,
            "unit": "iter/sec",
            "range": "stddev: 0.00012733679574743087",
            "extra": "mean: 1.0862151394422521 msec\nrounds: 1004"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1200.915414768988,
            "unit": "iter/sec",
            "range": "stddev: 0.0001470287989065694",
            "extra": "mean: 832.698113207551 usec\nrounds: 1325"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2186.593538869404,
            "unit": "iter/sec",
            "range": "stddev: 0.00004718763966348808",
            "extra": "mean: 457.3323675496902 usec\nrounds: 2416"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.522474502066284,
            "unit": "iter/sec",
            "range": "stddev: 0.0012580824676404066",
            "extra": "mean: 39.18115384615393 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.197619315601386,
            "unit": "iter/sec",
            "range": "stddev: 0.0008897954068752154",
            "extra": "mean: 38.17140740740794 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1024.4298052159568,
            "unit": "iter/sec",
            "range": "stddev: 0.00013924986973160995",
            "extra": "mean: 976.1527777778714 usec\nrounds: 1080"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1552.4089574084926,
            "unit": "iter/sec",
            "range": "stddev: 0.0001832715059404512",
            "extra": "mean: 644.1601584606584 usec\nrounds: 1767"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2001.301863292169,
            "unit": "iter/sec",
            "range": "stddev: 0.00009088258290282948",
            "extra": "mean: 499.6747458951477 usec\nrounds: 2558"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1872.6635945860505,
            "unit": "iter/sec",
            "range": "stddev: 0.00011359545091689162",
            "extra": "mean: 533.9987400251931 usec\nrounds: 2381"
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
        "date": 1740551775301,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 651.1156363890643,
            "unit": "iter/sec",
            "range": "stddev: 0.00011278690605149139",
            "extra": "mean: 1.5358255033556976 msec\nrounds: 745"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 993.343843713908,
            "unit": "iter/sec",
            "range": "stddev: 0.00009001597246044904",
            "extra": "mean: 1.0067007575757514 msec\nrounds: 1056"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1214.1141424630491,
            "unit": "iter/sec",
            "range": "stddev: 0.00008198206439058481",
            "extra": "mean: 823.6457883369351 usec\nrounds: 1389"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2238.914204772838,
            "unit": "iter/sec",
            "range": "stddev: 0.000060350291147705205",
            "extra": "mean: 446.64507370056225 usec\nrounds: 2578"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 687.8653375051705,
            "unit": "iter/sec",
            "range": "stddev: 0.00004397968264942936",
            "extra": "mean: 1.453772919605043 msec\nrounds: 709"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 988.166582270965,
            "unit": "iter/sec",
            "range": "stddev: 0.00001532510823264947",
            "extra": "mean: 1.011975124378159 msec\nrounds: 1005"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1297.9313849262844,
            "unit": "iter/sec",
            "range": "stddev: 0.000011817423879079305",
            "extra": "mean: 770.4567526555301 usec\nrounds: 1318"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2330.6996199796845,
            "unit": "iter/sec",
            "range": "stddev: 0.000008951662815355665",
            "extra": "mean: 429.0557184750888 usec\nrounds: 2387"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.74772380218636,
            "unit": "iter/sec",
            "range": "stddev: 0.0006982843590929933",
            "extra": "mean: 38.83838461538434 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.460937775634722,
            "unit": "iter/sec",
            "range": "stddev: 0.00021002881365106172",
            "extra": "mean: 37.791555555555625 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1056.3940642761295,
            "unit": "iter/sec",
            "range": "stddev: 0.00002854607952114049",
            "extra": "mean: 946.6164510165321 usec\nrounds: 1082"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1740.750609311649,
            "unit": "iter/sec",
            "range": "stddev: 0.000015094038031841355",
            "extra": "mean: 574.4648283624232 usec\nrounds: 1777"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2287.246986354831,
            "unit": "iter/sec",
            "range": "stddev: 0.00003788350754597616",
            "extra": "mean: 437.2068281063484 usec\nrounds: 2519"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 2225.0015091146415,
            "unit": "iter/sec",
            "range": "stddev: 0.000019094167030156508",
            "extra": "mean: 449.43789741424206 usec\nrounds: 2359"
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
        "date": 1740560141103,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 446.5354345130851,
            "unit": "iter/sec",
            "range": "stddev: 0.0015314027452083163",
            "extra": "mean: 2.23946393210749 msec\nrounds: 707"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 788.1417417140694,
            "unit": "iter/sec",
            "range": "stddev: 0.0007960970150368435",
            "extra": "mean: 1.2688073059360823 msec\nrounds: 1095"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 868.8324038205675,
            "unit": "iter/sec",
            "range": "stddev: 0.0008281093718797724",
            "extra": "mean: 1.1509699633699682 msec\nrounds: 1365"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1683.9675607369575,
            "unit": "iter/sec",
            "range": "stddev: 0.0005057494267583082",
            "extra": "mean: 593.8356672158034 usec\nrounds: 2428"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 380.1890791277312,
            "unit": "iter/sec",
            "range": "stddev: 0.001753676423080991",
            "extra": "mean: 2.630270186335448 msec\nrounds: 644"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 739.655235754865,
            "unit": "iter/sec",
            "range": "stddev: 0.0007006901843568504",
            "extra": "mean: 1.3519812362031571 msec\nrounds: 906"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1055.7733539817339,
            "unit": "iter/sec",
            "range": "stddev: 0.0003176403130449107",
            "extra": "mean: 947.1729857820422 usec\nrounds: 1266"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2192.1245827071325,
            "unit": "iter/sec",
            "range": "stddev: 0.00012232839295770487",
            "extra": "mean: 456.17845257912506 usec\nrounds: 2404"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.503589721337946,
            "unit": "iter/sec",
            "range": "stddev: 0.004732853767182956",
            "extra": "mean: 42.54669230769208 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.985396316854636,
            "unit": "iter/sec",
            "range": "stddev: 0.002797792005519867",
            "extra": "mean: 43.505884615386165 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 971.938193322534,
            "unit": "iter/sec",
            "range": "stddev: 0.00019646631542308076",
            "extra": "mean: 1.0288720073665774 msec\nrounds: 1086"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1702.8066654357767,
            "unit": "iter/sec",
            "range": "stddev: 0.00005615059105227731",
            "extra": "mean: 587.2657303370863 usec\nrounds: 1780"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1961.4209648034134,
            "unit": "iter/sec",
            "range": "stddev: 0.00014371679779358044",
            "extra": "mean: 509.83446080389314 usec\nrounds: 2513"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1634.8826716993212,
            "unit": "iter/sec",
            "range": "stddev: 0.00020785836928789722",
            "extra": "mean: 611.6646884272038 usec\nrounds: 2359"
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
        "date": 1740631113951,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 628.8500043823858,
            "unit": "iter/sec",
            "range": "stddev: 0.00045859434718035125",
            "extra": "mean: 1.5902043301758941 msec\nrounds: 739"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 873.5157118720253,
            "unit": "iter/sec",
            "range": "stddev: 0.0007355830797856801",
            "extra": "mean: 1.144799099099096 msec\nrounds: 1110"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1034.1675025632217,
            "unit": "iter/sec",
            "range": "stddev: 0.000529360254748183",
            "extra": "mean: 966.9613457408628 usec\nrounds: 1397"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2103.481682881575,
            "unit": "iter/sec",
            "range": "stddev: 0.00020192069084451415",
            "extra": "mean: 475.40228571426996 usec\nrounds: 2625"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 648.3579669621845,
            "unit": "iter/sec",
            "range": "stddev: 0.00014458105181456516",
            "extra": "mean: 1.5423578500706927 msec\nrounds: 707"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 929.2523135178394,
            "unit": "iter/sec",
            "range": "stddev: 0.00026073654922898376",
            "extra": "mean: 1.0761339901477711 msec\nrounds: 1015"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1154.2830459430734,
            "unit": "iter/sec",
            "range": "stddev: 0.0001848297612918818",
            "extra": "mean: 866.3386363636478 usec\nrounds: 1320"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2059.525410056402,
            "unit": "iter/sec",
            "range": "stddev: 0.000133119600856279",
            "extra": "mean: 485.5487556099703 usec\nrounds: 2451"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.855213977545734,
            "unit": "iter/sec",
            "range": "stddev: 0.005383361736084738",
            "extra": "mean: 43.75369230769211 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.962724650543723,
            "unit": "iter/sec",
            "range": "stddev: 0.00397346224121193",
            "extra": "mean: 41.73148148148127 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 915.6475384132569,
            "unit": "iter/sec",
            "range": "stddev: 0.00037567557228147553",
            "extra": "mean: 1.0921232876712792 msec\nrounds: 1095"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1419.46813494118,
            "unit": "iter/sec",
            "range": "stddev: 0.0003385828564556829",
            "extra": "mean: 704.4892205638967 usec\nrounds: 1809"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1269.0840120717214,
            "unit": "iter/sec",
            "range": "stddev: 0.00046498235200253017",
            "extra": "mean: 787.9698983580653 usec\nrounds: 2558"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1313.5393414750106,
            "unit": "iter/sec",
            "range": "stddev: 0.00046161838846146337",
            "extra": "mean: 761.3019027485477 usec\nrounds: 2365"
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
        "date": 1740731665538,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 691.1432979507871,
            "unit": "iter/sec",
            "range": "stddev: 0.00009959906253750822",
            "extra": "mean: 1.446877952755906 msec\nrounds: 762"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 998.2638513434302,
            "unit": "iter/sec",
            "range": "stddev: 0.00006972268504378408",
            "extra": "mean: 1.001739168110949 msec\nrounds: 1154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1186.6565929318967,
            "unit": "iter/sec",
            "range": "stddev: 0.00010342557044266428",
            "extra": "mean: 842.7037830121345 usec\nrounds: 1401"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2228.2659195035994,
            "unit": "iter/sec",
            "range": "stddev: 0.00006421661818330997",
            "extra": "mean: 448.77947072976565 usec\nrounds: 2494"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 622.5959544361108,
            "unit": "iter/sec",
            "range": "stddev: 0.00012075873417760718",
            "extra": "mean: 1.6061781206170969 msec\nrounds: 713"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 912.3421319055047,
            "unit": "iter/sec",
            "range": "stddev: 0.00011517331590757789",
            "extra": "mean: 1.096080039525758 msec\nrounds: 1012"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1164.535182601212,
            "unit": "iter/sec",
            "range": "stddev: 0.00012800930685932696",
            "extra": "mean: 858.711711711714 usec\nrounds: 1332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2007.8478071207678,
            "unit": "iter/sec",
            "range": "stddev: 0.00008776233950062392",
            "extra": "mean: 498.04571663924537 usec\nrounds: 2428"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.38220717831807,
            "unit": "iter/sec",
            "range": "stddev: 0.0029925854499716496",
            "extra": "mean: 44.67834615384639 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.020965653222074,
            "unit": "iter/sec",
            "range": "stddev: 0.0037055719294894953",
            "extra": "mean: 45.4112692307697 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 943.3358638828652,
            "unit": "iter/sec",
            "range": "stddev: 0.00016281464381071354",
            "extra": "mean: 1.0600678276811184 msec\nrounds: 1091"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1592.7054831394641,
            "unit": "iter/sec",
            "range": "stddev: 0.00006504587994207923",
            "extra": "mean: 627.8624708623771 usec\nrounds: 1716"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2072.779966120521,
            "unit": "iter/sec",
            "range": "stddev: 0.00008783825927272843",
            "extra": "mean: 482.4438755415178 usec\nrounds: 2539"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1737.1556157108264,
            "unit": "iter/sec",
            "range": "stddev: 0.00019499051111709694",
            "extra": "mean: 575.6536668079734 usec\nrounds: 2359"
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
        "date": 1740802740329,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 645.8995906962315,
            "unit": "iter/sec",
            "range": "stddev: 0.00012739477264862333",
            "extra": "mean: 1.54822826086958 msec\nrounds: 736"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 948.0862239438413,
            "unit": "iter/sec",
            "range": "stddev: 0.0001582751893873444",
            "extra": "mean: 1.0547563868613217 msec\nrounds: 1096"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1232.6230498642785,
            "unit": "iter/sec",
            "range": "stddev: 0.00006979858906015012",
            "extra": "mean: 811.2780303030255 usec\nrounds: 1320"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2283.2347954138913,
            "unit": "iter/sec",
            "range": "stddev: 0.000053178112419965784",
            "extra": "mean: 437.9751053236406 usec\nrounds: 2611"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 674.1282796813649,
            "unit": "iter/sec",
            "range": "stddev: 0.00009763151228899807",
            "extra": "mean: 1.483397196261611 msec\nrounds: 642"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 976.0877784550621,
            "unit": "iter/sec",
            "range": "stddev: 0.0000874337901036534",
            "extra": "mean: 1.0244980237154346 msec\nrounds: 1012"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1277.008537521233,
            "unit": "iter/sec",
            "range": "stddev: 0.000031714825980442824",
            "extra": "mean: 783.0801209372281 usec\nrounds: 1323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2284.838839618814,
            "unit": "iter/sec",
            "range": "stddev: 0.00006376905953690029",
            "extra": "mean: 437.66763005780876 usec\nrounds: 2422"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.239576515952606,
            "unit": "iter/sec",
            "range": "stddev: 0.005032422380463152",
            "extra": "mean: 41.25484615384586 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.42504389493425,
            "unit": "iter/sec",
            "range": "stddev: 0.00033922279192930075",
            "extra": "mean: 37.84288888888857 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1055.443464084731,
            "unit": "iter/sec",
            "range": "stddev: 0.000077643268622679",
            "extra": "mean: 947.4690346083 usec\nrounds: 1098"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1669.3008470813943,
            "unit": "iter/sec",
            "range": "stddev: 0.00008691567099074131",
            "extra": "mean: 599.0531914893592 usec\nrounds: 1786"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1963.8121844776304,
            "unit": "iter/sec",
            "range": "stddev: 0.00016222204250211243",
            "extra": "mean: 509.2136650868157 usec\nrounds: 2532"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1540.9095481524134,
            "unit": "iter/sec",
            "range": "stddev: 0.00015829938632561842",
            "extra": "mean: 648.967359050389 usec\nrounds: 2359"
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
        "date": 1740966758712,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 632.781771683922,
            "unit": "iter/sec",
            "range": "stddev: 0.00048233938848736335",
            "extra": "mean: 1.5803236514523138 msec\nrounds: 723"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 962.2497882514367,
            "unit": "iter/sec",
            "range": "stddev: 0.00028001963458735755",
            "extra": "mean: 1.0392311977715907 msec\nrounds: 1077"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1212.579779094534,
            "unit": "iter/sec",
            "range": "stddev: 0.00016302301064231137",
            "extra": "mean: 824.6880058866947 usec\nrounds: 1359"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1977.267789041545,
            "unit": "iter/sec",
            "range": "stddev: 0.000385088520553525",
            "extra": "mean: 505.7483895414778 usec\nrounds: 2639"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 584.9550864429232,
            "unit": "iter/sec",
            "range": "stddev: 0.0006023656541385623",
            "extra": "mean: 1.709532959326741 msec\nrounds: 713"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 867.9686772019558,
            "unit": "iter/sec",
            "range": "stddev: 0.0003316121492596752",
            "extra": "mean: 1.152115308151061 msec\nrounds: 1006"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1093.8523651621217,
            "unit": "iter/sec",
            "range": "stddev: 0.00023088893709737805",
            "extra": "mean: 914.2001533742518 usec\nrounds: 1304"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1898.041685352835,
            "unit": "iter/sec",
            "range": "stddev: 0.000229914867642137",
            "extra": "mean: 526.8588186007653 usec\nrounds: 2387"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.99739853283491,
            "unit": "iter/sec",
            "range": "stddev: 0.010502252665625137",
            "extra": "mean: 47.6249473684199 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.040494535783743,
            "unit": "iter/sec",
            "range": "stddev: 0.010669580712629682",
            "extra": "mean: 47.5273999999996 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 766.7396414483172,
            "unit": "iter/sec",
            "range": "stddev: 0.0007162201456598939",
            "extra": "mean: 1.3042236842105495 msec\nrounds: 1064"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1345.8005529683762,
            "unit": "iter/sec",
            "range": "stddev: 0.00046186785021447464",
            "extra": "mean: 743.0521541950192 usec\nrounds: 1764"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1713.6957761386013,
            "unit": "iter/sec",
            "range": "stddev: 0.0002910128975795166",
            "extra": "mean: 583.5341452805923 usec\nrounds: 2299"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1132.8800463275204,
            "unit": "iter/sec",
            "range": "stddev: 0.0006914189605817944",
            "extra": "mean: 882.7059874888959 usec\nrounds: 2238"
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
        "date": 1740979194651,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 583.1213325220906,
            "unit": "iter/sec",
            "range": "stddev: 0.0006921700748068354",
            "extra": "mean: 1.7149089635854071 msec\nrounds: 714"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 849.0917634858152,
            "unit": "iter/sec",
            "range": "stddev: 0.000637279178781045",
            "extra": "mean: 1.1777290076335851 msec\nrounds: 1048"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1109.156686318137,
            "unit": "iter/sec",
            "range": "stddev: 0.000340841437714651",
            "extra": "mean: 901.5858736059337 usec\nrounds: 1345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1956.8862275450663,
            "unit": "iter/sec",
            "range": "stddev: 0.00020312360003105055",
            "extra": "mean: 511.0159118726643 usec\nrounds: 2451"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 489.199336097563,
            "unit": "iter/sec",
            "range": "stddev: 0.0006444168615567019",
            "extra": "mean: 2.044156494522646 msec\nrounds: 639"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 653.4868392267456,
            "unit": "iter/sec",
            "range": "stddev: 0.0009396956061884864",
            "extra": "mean: 1.5302526997839387 msec\nrounds: 926"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 966.4497064030801,
            "unit": "iter/sec",
            "range": "stddev: 0.00040671348759930843",
            "extra": "mean: 1.0347149917627758 msec\nrounds: 1214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1574.8543542461073,
            "unit": "iter/sec",
            "range": "stddev: 0.0003623384616307763",
            "extra": "mean: 634.9793536804273 usec\nrounds: 2228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.450913357008165,
            "unit": "iter/sec",
            "range": "stddev: 0.008596577439993699",
            "extra": "mean: 57.303590909091696 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.56054730372437,
            "unit": "iter/sec",
            "range": "stddev: 0.010484583264578315",
            "extra": "mean: 56.945833333333105 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 966.9173588376099,
            "unit": "iter/sec",
            "range": "stddev: 0.00013877896429596138",
            "extra": "mean: 1.034214548802972 msec\nrounds: 1086"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1255.6706270595212,
            "unit": "iter/sec",
            "range": "stddev: 0.0003750973150723339",
            "extra": "mean: 796.3871882085508 usec\nrounds: 1764"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1861.3589733516997,
            "unit": "iter/sec",
            "range": "stddev: 0.00022786457880930475",
            "extra": "mean: 537.2418831168964 usec\nrounds: 2464"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1502.6092653730682,
            "unit": "iter/sec",
            "range": "stddev: 0.00023907804960979505",
            "extra": "mean: 665.5090069285043 usec\nrounds: 2165"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1740986364846,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 592.1655661561497,
            "unit": "iter/sec",
            "range": "stddev: 0.00065769124125637",
            "extra": "mean: 1.6887169014084606 msec\nrounds: 710"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 740.6282590508496,
            "unit": "iter/sec",
            "range": "stddev: 0.0008915837092956152",
            "extra": "mean: 1.3502050290135401 msec\nrounds: 1034"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 939.008282053037,
            "unit": "iter/sec",
            "range": "stddev: 0.0006630029266125692",
            "extra": "mean: 1.0649533333333454 msec\nrounds: 1350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1677.1442129888655,
            "unit": "iter/sec",
            "range": "stddev: 0.0004070069499286911",
            "extra": "mean: 596.2516474465151 usec\nrounds: 2428"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 620.4342245415825,
            "unit": "iter/sec",
            "range": "stddev: 0.00011770683643525607",
            "extra": "mean: 1.6117744000000414 msec\nrounds: 625"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 872.0298424047455,
            "unit": "iter/sec",
            "range": "stddev: 0.0001251844685185697",
            "extra": "mean: 1.1467497456765456 msec\nrounds: 983"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1121.2069646127873,
            "unit": "iter/sec",
            "range": "stddev: 0.00009848937243962708",
            "extra": "mean: 891.8959938367432 usec\nrounds: 1298"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1862.6835990417594,
            "unit": "iter/sec",
            "range": "stddev: 0.000261627523548759",
            "extra": "mean: 536.8598298253341 usec\nrounds: 2233"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.65037920381137,
            "unit": "iter/sec",
            "range": "stddev: 0.0049830463411399874",
            "extra": "mean: 48.42526086956473 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.850534652835833,
            "unit": "iter/sec",
            "range": "stddev: 0.004406663380183149",
            "extra": "mean: 43.76265217391298 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 881.8840383901847,
            "unit": "iter/sec",
            "range": "stddev: 0.0003125060364907965",
            "extra": "mean: 1.1339359331476588 msec\nrounds: 1077"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1337.3574243411529,
            "unit": "iter/sec",
            "range": "stddev: 0.00033560143347359197",
            "extra": "mean: 747.7432598040488 usec\nrounds: 1632"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1584.380857867547,
            "unit": "iter/sec",
            "range": "stddev: 0.0003559120286240006",
            "extra": "mean: 631.1613745106224 usec\nrounds: 2299"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1363.7201870476679,
            "unit": "iter/sec",
            "range": "stddev: 0.0004694655181876262",
            "extra": "mean: 733.2882577362959 usec\nrounds: 2359"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1741275065521,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 590.7447250527554,
            "unit": "iter/sec",
            "range": "stddev: 0.00044225324190068864",
            "extra": "mean: 1.692778551532046 msec\nrounds: 718"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 960.87935761848,
            "unit": "iter/sec",
            "range": "stddev: 0.00024551166732314055",
            "extra": "mean: 1.040713375796187 msec\nrounds: 1099"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1175.4114789461619,
            "unit": "iter/sec",
            "range": "stddev: 0.00019472678850681658",
            "extra": "mean: 850.7658959537894 usec\nrounds: 1384"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2110.7176196174614,
            "unit": "iter/sec",
            "range": "stddev: 0.0001881031252704588",
            "extra": "mean: 473.77251732102195 usec\nrounds: 2598"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 582.9416389274716,
            "unit": "iter/sec",
            "range": "stddev: 0.00041721021592792685",
            "extra": "mean: 1.7154375896699636 msec\nrounds: 697"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 866.545462355195,
            "unit": "iter/sec",
            "range": "stddev: 0.00023788501965272472",
            "extra": "mean: 1.1540075431034942 msec\nrounds: 928"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1201.9824929830313,
            "unit": "iter/sec",
            "range": "stddev: 0.00009086728034082074",
            "extra": "mean: 831.9588728104023 usec\nrounds: 1313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2212.2150973714943,
            "unit": "iter/sec",
            "range": "stddev: 0.0000739436476185271",
            "extra": "mean: 452.0356095517918 usec\nrounds: 2387"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.245159593763233,
            "unit": "iter/sec",
            "range": "stddev: 0.002984647355281052",
            "extra": "mean: 41.2453461538458 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.541568225088053,
            "unit": "iter/sec",
            "range": "stddev: 0.002140858594474319",
            "extra": "mean: 40.74719230769174 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 957.0141859150915,
            "unit": "iter/sec",
            "range": "stddev: 0.00017289805398883437",
            "extra": "mean: 1.044916590284193 msec\nrounds: 1091"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1593.3459010729355,
            "unit": "iter/sec",
            "range": "stddev: 0.00010007812411478664",
            "extra": "mean: 627.6101123595416 usec\nrounds: 1780"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1992.3104920937499,
            "unit": "iter/sec",
            "range": "stddev: 0.00011473967837051239",
            "extra": "mean: 501.92979656955197 usec\nrounds: 2507"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1543.6522667314355,
            "unit": "iter/sec",
            "range": "stddev: 0.0002379327144969057",
            "extra": "mean: 647.8142918271501 usec\nrounds: 2337"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1741615140049,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 660.323938642332,
            "unit": "iter/sec",
            "range": "stddev: 0.00020485338981284234",
            "extra": "mean: 1.5144082191780956 msec\nrounds: 730"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 988.9901845078526,
            "unit": "iter/sec",
            "range": "stddev: 0.00012088547077253764",
            "extra": "mean: 1.0111323809524217 msec\nrounds: 1050"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1185.3066765671754,
            "unit": "iter/sec",
            "range": "stddev: 0.00009858055573935407",
            "extra": "mean: 843.6635174418732 usec\nrounds: 1376"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2288.059142835953,
            "unit": "iter/sec",
            "range": "stddev: 0.0000614301155545503",
            "extra": "mean: 437.0516396532225 usec\nrounds: 2653"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 620.2723282351545,
            "unit": "iter/sec",
            "range": "stddev: 0.00018125534540061792",
            "extra": "mean: 1.6121950867053434 msec\nrounds: 692"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 911.6606297904215,
            "unit": "iter/sec",
            "range": "stddev: 0.00012577395428669546",
            "extra": "mean: 1.0968994023904342 msec\nrounds: 1004"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1284.0623704201626,
            "unit": "iter/sec",
            "range": "stddev: 0.000034118544526020466",
            "extra": "mean: 778.7783701447356 usec\nrounds: 1313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2341.069548222127,
            "unit": "iter/sec",
            "range": "stddev: 0.00001978000592405836",
            "extra": "mean: 427.15518672199534 usec\nrounds: 2410"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.350841014150536,
            "unit": "iter/sec",
            "range": "stddev: 0.002283293956950529",
            "extra": "mean: 39.446423076923246 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.65113506272599,
            "unit": "iter/sec",
            "range": "stddev: 0.00107028249858614",
            "extra": "mean: 38.98462962963044 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1031.8700150657373,
            "unit": "iter/sec",
            "range": "stddev: 0.00011275119734180294",
            "extra": "mean: 969.1143122676098 usec\nrounds: 1076"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1519.2466454965077,
            "unit": "iter/sec",
            "range": "stddev: 0.0001348307568160707",
            "extra": "mean: 658.2209695603364 usec\nrounds: 1774"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1987.582490530714,
            "unit": "iter/sec",
            "range": "stddev: 0.00010034996939131841",
            "extra": "mean: 503.1237721021506 usec\nrounds: 2545"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1504.3725751681882,
            "unit": "iter/sec",
            "range": "stddev: 0.00017415143763755938",
            "extra": "mean: 664.7289484708936 usec\nrounds: 2387"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1741876072636,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 388.05763661615595,
            "unit": "iter/sec",
            "range": "stddev: 0.001741218855379326",
            "extra": "mean: 2.5769367888748493 msec\nrounds: 791"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 639.4489763617547,
            "unit": "iter/sec",
            "range": "stddev: 0.0011448443129123585",
            "extra": "mean: 1.5638464317976655 msec\nrounds: 1107"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 755.0495333715743,
            "unit": "iter/sec",
            "range": "stddev: 0.0010238940568443986",
            "extra": "mean: 1.3244164201183355 msec\nrounds: 1352"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1469.6010413037613,
            "unit": "iter/sec",
            "range": "stddev: 0.0005612961048534517",
            "extra": "mean: 680.4567851373097 usec\nrounds: 2476"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 512.195491852431,
            "unit": "iter/sec",
            "range": "stddev: 0.0014111899372663693",
            "extra": "mean: 1.95237954239572 msec\nrounds: 743"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 726.5251958647865,
            "unit": "iter/sec",
            "range": "stddev: 0.0008504022938227866",
            "extra": "mean: 1.3764147557328623 msec\nrounds: 1003"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1024.7079174628966,
            "unit": "iter/sec",
            "range": "stddev: 0.0005031742741759596",
            "extra": "mean: 975.8878437047001 usec\nrounds: 1382"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2028.5392189784907,
            "unit": "iter/sec",
            "range": "stddev: 0.00015607724445099606",
            "extra": "mean: 492.9655737706511 usec\nrounds: 2440"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.013911199485108,
            "unit": "iter/sec",
            "range": "stddev: 0.0009983753277072772",
            "extra": "mean: 37.017964285714406 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.960330902672514,
            "unit": "iter/sec",
            "range": "stddev: 0.00309242626102847",
            "extra": "mean: 40.06357142857147 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 935.1716196721285,
            "unit": "iter/sec",
            "range": "stddev: 0.00038555664665945684",
            "extra": "mean: 1.0693224419605467 msec\nrounds: 1163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1372.516115889241,
            "unit": "iter/sec",
            "range": "stddev: 0.0004181734967972126",
            "extra": "mean: 728.5888948211793 usec\nrounds: 1873"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1306.1275379745505,
            "unit": "iter/sec",
            "range": "stddev: 0.000535985094111029",
            "extra": "mean: 765.6220169362088 usec\nrounds: 2598"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1551.881680857732,
            "unit": "iter/sec",
            "range": "stddev: 0.00014980081706647409",
            "extra": "mean: 644.3790221476778 usec\nrounds: 2393"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1742218906145,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 463.17550559923177,
            "unit": "iter/sec",
            "range": "stddev: 0.0012254848380108898",
            "extra": "mean: 2.159008816120907 msec\nrounds: 794"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 625.827388912803,
            "unit": "iter/sec",
            "range": "stddev: 0.001149387177932978",
            "extra": "mean: 1.5978846846847266 msec\nrounds: 1110"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1029.6623094492281,
            "unit": "iter/sec",
            "range": "stddev: 0.0005484827787185287",
            "extra": "mean: 971.1921965317981 usec\nrounds: 1384"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1779.917842739615,
            "unit": "iter/sec",
            "range": "stddev: 0.0003605661777329304",
            "extra": "mean: 561.8236842105135 usec\nrounds: 2660"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 447.82887550482894,
            "unit": "iter/sec",
            "range": "stddev: 0.0015000607041812763",
            "extra": "mean: 2.232995804195786 msec\nrounds: 715"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 723.4198443685308,
            "unit": "iter/sec",
            "range": "stddev: 0.0006940676688911423",
            "extra": "mean: 1.3823231527093296 msec\nrounds: 1015"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1084.0645731727827,
            "unit": "iter/sec",
            "range": "stddev: 0.0003114379684828471",
            "extra": "mean: 922.4542750929061 usec\nrounds: 1345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1613.810778951653,
            "unit": "iter/sec",
            "range": "stddev: 0.0004677839710167584",
            "extra": "mean: 619.6513327600957 usec\nrounds: 2326"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.081469022588003,
            "unit": "iter/sec",
            "range": "stddev: 0.02438583619782531",
            "extra": "mean: 82.77139130434881 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 18.41299375896433,
            "unit": "iter/sec",
            "range": "stddev: 0.006245057631337401",
            "extra": "mean: 54.309473684210204 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 773.3884015197576,
            "unit": "iter/sec",
            "range": "stddev: 0.0007003636910069718",
            "extra": "mean: 1.2930113744076535 msec\nrounds: 1055"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1206.6699796486114,
            "unit": "iter/sec",
            "range": "stddev: 0.00043804245672665387",
            "extra": "mean: 828.72700644397 usec\nrounds: 1707"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1042.1226318685535,
            "unit": "iter/sec",
            "range": "stddev: 0.0006492928833273163",
            "extra": "mean: 959.5799663298487 usec\nrounds: 2376"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1081.2605129293129,
            "unit": "iter/sec",
            "range": "stddev: 0.000728382878778333",
            "extra": "mean: 924.8464991020853 usec\nrounds: 2228"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1742393858762,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 478.1186032960274,
            "unit": "iter/sec",
            "range": "stddev: 0.0015486795186382444",
            "extra": "mean: 2.0915312500000116 msec\nrounds: 928"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 680.2175055527599,
            "unit": "iter/sec",
            "range": "stddev: 0.0011116957452599757",
            "extra": "mean: 1.470118001722666 msec\nrounds: 1161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 921.6575545111408,
            "unit": "iter/sec",
            "range": "stddev: 0.0009573481304847508",
            "extra": "mean: 1.0850016853932403 msec\nrounds: 1780"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1578.9759231118023,
            "unit": "iter/sec",
            "range": "stddev: 0.0005645113118478128",
            "extra": "mean: 633.3218799367297 usec\nrounds: 2532"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 485.9633419270492,
            "unit": "iter/sec",
            "range": "stddev: 0.00146823956656094",
            "extra": "mean: 2.0577683823528314 msec\nrounds: 816"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 890.765939817623,
            "unit": "iter/sec",
            "range": "stddev: 0.00032964830553867475",
            "extra": "mean: 1.1226293634495519 msec\nrounds: 974"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1370.2613188598864,
            "unit": "iter/sec",
            "range": "stddev: 0.00033916145576806943",
            "extra": "mean: 729.7878048780075 usec\nrounds: 1640"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1306.0676169862334,
            "unit": "iter/sec",
            "range": "stddev: 0.0006337000527083539",
            "extra": "mean: 765.6571428572066 usec\nrounds: 2310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.667051774587042,
            "unit": "iter/sec",
            "range": "stddev: 0.01729286142959171",
            "extra": "mean: 93.74661538461628 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.115989395480357,
            "unit": "iter/sec",
            "range": "stddev: 0.010559415652827142",
            "extra": "mean: 82.53556249999949 msec\nrounds: 16"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 576.4515483001047,
            "unit": "iter/sec",
            "range": "stddev: 0.0012309176186592345",
            "extra": "mean: 1.73475117370904 msec\nrounds: 1278"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1172.3060413918279,
            "unit": "iter/sec",
            "range": "stddev: 0.0005094007555952194",
            "extra": "mean: 853.0195739780917 usec\nrounds: 1737"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 924.0958641641287,
            "unit": "iter/sec",
            "range": "stddev: 0.000830974023835637",
            "extra": "mean: 1.0821388113283343 msec\nrounds: 2507"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1022.5046760326761,
            "unit": "iter/sec",
            "range": "stddev: 0.0011320578049224305",
            "extra": "mean: 977.9906375391901 usec\nrounds: 2243"
          }
        ]
      }
    ]
  }
}