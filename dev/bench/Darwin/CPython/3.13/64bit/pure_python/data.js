window.BENCHMARK_DATA = {
  "lastUpdate": 1729006041792,
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
      }
    ]
  }
}