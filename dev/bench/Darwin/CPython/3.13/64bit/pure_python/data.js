window.BENCHMARK_DATA = {
  "lastUpdate": 1730731891404,
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
      }
    ]
  }
}