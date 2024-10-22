window.BENCHMARK_DATA = {
  "lastUpdate": 1729606004224,
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
        "date": 1726186993390,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 228.41933309022318,
            "unit": "iter/sec",
            "range": "stddev: 0.0001224024860447296",
            "extra": "mean: 4.377913141025636 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 327.5147874973546,
            "unit": "iter/sec",
            "range": "stddev: 0.00004203397604920778",
            "extra": "mean: 3.053297249999978 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 410.7862984356869,
            "unit": "iter/sec",
            "range": "stddev: 0.0000322377009836447",
            "extra": "mean: 2.434355780141876 msec\nrounds: 423"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 974.3193520386017,
            "unit": "iter/sec",
            "range": "stddev: 0.000024860980784782822",
            "extra": "mean: 1.0263575263158489 msec\nrounds: 1007"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 208.27971894621302,
            "unit": "iter/sec",
            "range": "stddev: 0.00004858673432063852",
            "extra": "mean: 4.801235593458064 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 295.26926166737275,
            "unit": "iter/sec",
            "range": "stddev: 0.00011323274610012866",
            "extra": "mean: 3.386739257425725 msec\nrounds: 303"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 393.9831417342569,
            "unit": "iter/sec",
            "range": "stddev: 0.00008470927427948968",
            "extra": "mean: 2.5381796682927713 msec\nrounds: 410"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 914.6081003519241,
            "unit": "iter/sec",
            "range": "stddev: 0.00004759828583769096",
            "extra": "mean: 1.093364469017078 msec\nrounds: 936"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.341953504584843,
            "unit": "iter/sec",
            "range": "stddev: 0.0001966061261888146",
            "extra": "mean: 57.66363055555542 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.939611750683394,
            "unit": "iter/sec",
            "range": "stddev: 0.00017777617047691374",
            "extra": "mean: 55.74256644444415 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 321.7626794214837,
            "unit": "iter/sec",
            "range": "stddev: 0.00004127951379598196",
            "extra": "mean: 3.1078806336333336 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 640.0465643293184,
            "unit": "iter/sec",
            "range": "stddev: 0.00010505753223588874",
            "extra": "mean: 1.5623863258259403 msec\nrounds: 666"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 901.3871568346556,
            "unit": "iter/sec",
            "range": "stddev: 0.00005706597573777075",
            "extra": "mean: 1.109401207258862 msec\nrounds: 1047"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 831.9509364340495,
            "unit": "iter/sec",
            "range": "stddev: 0.00005489598988884032",
            "extra": "mean: 1.201993959266698 msec\nrounds: 982"
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
        "date": 1726187291422,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 220.96120536890436,
            "unit": "iter/sec",
            "range": "stddev: 0.0005710297080973822",
            "extra": "mean: 4.5256813218884115 msec\nrounds: 233"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 327.9873469812977,
            "unit": "iter/sec",
            "range": "stddev: 0.00008702716908666847",
            "extra": "mean: 3.0488981029412128 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 398.64718877639024,
            "unit": "iter/sec",
            "range": "stddev: 0.00035960940090847075",
            "extra": "mean: 2.5084837624702816 msec\nrounds: 421"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1006.2295897073965,
            "unit": "iter/sec",
            "range": "stddev: 0.000020549632453718577",
            "extra": "mean: 993.8089778206503 usec\nrounds: 1037"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 210.28040559549572,
            "unit": "iter/sec",
            "range": "stddev: 0.00004453105915468267",
            "extra": "mean: 4.755554837209332 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 292.09287805456097,
            "unit": "iter/sec",
            "range": "stddev: 0.0002046366795991009",
            "extra": "mean: 3.4235685808580616 msec\nrounds: 303"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 400.01374834539695,
            "unit": "iter/sec",
            "range": "stddev: 0.00003607749158081375",
            "extra": "mean: 2.499914075794558 msec\nrounds: 409"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 919.3780916137795,
            "unit": "iter/sec",
            "range": "stddev: 0.000028314969410281625",
            "extra": "mean: 1.0876917876569208 msec\nrounds: 956"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 16.972971310743052,
            "unit": "iter/sec",
            "range": "stddev: 0.0037583584049343333",
            "extra": "mean: 58.91720322222246 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.882424471809223,
            "unit": "iter/sec",
            "range": "stddev: 0.0002451780566565977",
            "extra": "mean: 55.920828944444956 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 319.09501003934304,
            "unit": "iter/sec",
            "range": "stddev: 0.00006345431692338485",
            "extra": "mean: 3.1338628575755676 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 636.3534872049925,
            "unit": "iter/sec",
            "range": "stddev: 0.000030177815455568944",
            "extra": "mean: 1.5714536340363665 msec\nrounds: 664"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 903.9803990596289,
            "unit": "iter/sec",
            "range": "stddev: 0.000052393384133995085",
            "extra": "mean: 1.1062186758034311 msec\nrounds: 1058"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 829.5157444308021,
            "unit": "iter/sec",
            "range": "stddev: 0.00008811896678390457",
            "extra": "mean: 1.2055226277666147 msec\nrounds: 994"
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
        "date": 1726189505817,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 225.68540606751705,
            "unit": "iter/sec",
            "range": "stddev: 0.00010627972429343426",
            "extra": "mean: 4.430946676724128 msec\nrounds: 232"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 329.27132306185473,
            "unit": "iter/sec",
            "range": "stddev: 0.000056827925223812654",
            "extra": "mean: 3.037009086309489 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 414.0337449281664,
            "unit": "iter/sec",
            "range": "stddev: 0.00006821165100580294",
            "extra": "mean: 2.415262070422538 msec\nrounds: 426"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 982.0257414835978,
            "unit": "iter/sec",
            "range": "stddev: 0.000027106583868074644",
            "extra": "mean: 1.018303245787883 msec\nrounds: 1009"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 206.6974135110134,
            "unit": "iter/sec",
            "range": "stddev: 0.0001144439720457085",
            "extra": "mean: 4.837989905213387 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 296.43290747960515,
            "unit": "iter/sec",
            "range": "stddev: 0.00003409176238990594",
            "extra": "mean: 3.3734446303631147 msec\nrounds: 303"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 396.4457915562433,
            "unit": "iter/sec",
            "range": "stddev: 0.00005534158916798714",
            "extra": "mean: 2.5224129535453303 msec\nrounds: 409"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 894.2900376456269,
            "unit": "iter/sec",
            "range": "stddev: 0.00004382195784635613",
            "extra": "mean: 1.1182054567360191 msec\nrounds: 913"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.003911222655645,
            "unit": "iter/sec",
            "range": "stddev: 0.00020028456873217082",
            "extra": "mean: 58.809998882352524 msec\nrounds: 17"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.350030101386974,
            "unit": "iter/sec",
            "range": "stddev: 0.0029814554910958463",
            "extra": "mean: 57.63678761110964 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 322.96468679360333,
            "unit": "iter/sec",
            "range": "stddev: 0.00008047308664421253",
            "extra": "mean: 3.096313748503002 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 628.8698979176638,
            "unit": "iter/sec",
            "range": "stddev: 0.00016019325240604733",
            "extra": "mean: 1.5901540259936677 msec\nrounds: 654"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 885.8148007878091,
            "unit": "iter/sec",
            "range": "stddev: 0.0000513310833633229",
            "extra": "mean: 1.1289041446481127 msec\nrounds: 1037"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 809.3116758419103,
            "unit": "iter/sec",
            "range": "stddev: 0.00005245779769399248",
            "extra": "mean: 1.235617908217771 msec\nrounds: 937"
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
        "date": 1726190569214,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 231.78756784122282,
            "unit": "iter/sec",
            "range": "stddev: 0.00004516334075879745",
            "extra": "mean: 4.314295237288187 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 331.2613071723696,
            "unit": "iter/sec",
            "range": "stddev: 0.00003888898654976271",
            "extra": "mean: 3.0187648794118194 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 410.61778586380143,
            "unit": "iter/sec",
            "range": "stddev: 0.00005235423467982284",
            "extra": "mean: 2.4353548103045193 msec\nrounds: 427"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1007.7726855200425,
            "unit": "iter/sec",
            "range": "stddev: 0.000026308161449942584",
            "extra": "mean: 992.2872631579298 usec\nrounds: 1045"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 210.2857927034013,
            "unit": "iter/sec",
            "range": "stddev: 0.00013424248809799122",
            "extra": "mean: 4.755433009259237 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 294.88516960933356,
            "unit": "iter/sec",
            "range": "stddev: 0.00010841453264445435",
            "extra": "mean: 3.391150532679581 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 396.06784080065233,
            "unit": "iter/sec",
            "range": "stddev: 0.00006850141882801714",
            "extra": "mean: 2.5248199853300304 msec\nrounds: 409"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 943.0860341796607,
            "unit": "iter/sec",
            "range": "stddev: 0.00002003315544136433",
            "extra": "mean: 1.06034864663206 msec\nrounds: 965"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.193007787507007,
            "unit": "iter/sec",
            "range": "stddev: 0.00046488779849820217",
            "extra": "mean: 58.163179611110984 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.848718032039773,
            "unit": "iter/sec",
            "range": "stddev: 0.00029281225335116865",
            "extra": "mean: 56.02643272222273 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 322.80488276295097,
            "unit": "iter/sec",
            "range": "stddev: 0.000041436881122306446",
            "extra": "mean: 3.097846573573491 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 646.3469377998816,
            "unit": "iter/sec",
            "range": "stddev: 0.000029312879293332014",
            "extra": "mean: 1.547156707207321 msec\nrounds: 666"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 895.9309317511029,
            "unit": "iter/sec",
            "range": "stddev: 0.00005392071175010366",
            "extra": "mean: 1.1161574676805648 msec\nrounds: 1052"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 835.9644088323305,
            "unit": "iter/sec",
            "range": "stddev: 0.00005636800564423496",
            "extra": "mean: 1.1962231758129431 msec\nrounds: 984"
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
        "date": 1726191068368,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 232.76463243826467,
            "unit": "iter/sec",
            "range": "stddev: 0.00010984424692767186",
            "extra": "mean: 4.296185333333346 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 334.01749534897084,
            "unit": "iter/sec",
            "range": "stddev: 0.00004262311363021801",
            "extra": "mean: 2.993855154069794 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 418.6736551024059,
            "unit": "iter/sec",
            "range": "stddev: 0.00006490929769288384",
            "extra": "mean: 2.3884951627907043 msec\nrounds: 430"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1008.4434441230167,
            "unit": "iter/sec",
            "range": "stddev: 0.00004027298524439312",
            "extra": "mean: 991.6272507177046 usec\nrounds: 1045"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 212.63224732174538,
            "unit": "iter/sec",
            "range": "stddev: 0.00010447678303551938",
            "extra": "mean: 4.702955514018745 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 297.90722780378155,
            "unit": "iter/sec",
            "range": "stddev: 0.000060355547778435256",
            "extra": "mean: 3.3567497081965945 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 397.962197675435,
            "unit": "iter/sec",
            "range": "stddev: 0.000034416670490264916",
            "extra": "mean: 2.51280148175171 msec\nrounds: 411"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 910.4542044580594,
            "unit": "iter/sec",
            "range": "stddev: 0.000059940023867204774",
            "extra": "mean: 1.0983528826639248 msec\nrounds: 946"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 16.710459735730495,
            "unit": "iter/sec",
            "range": "stddev: 0.0006950269564572072",
            "extra": "mean: 59.84275811764703 msec\nrounds: 17"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.39053659344111,
            "unit": "iter/sec",
            "range": "stddev: 0.000552253545658301",
            "extra": "mean: 57.502538499999645 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 325.6164234608904,
            "unit": "iter/sec",
            "range": "stddev: 0.00008575382565457493",
            "extra": "mean: 3.071098163204625 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 649.2287631978131,
            "unit": "iter/sec",
            "range": "stddev: 0.00003083909422099248",
            "extra": "mean: 1.5402891194691424 msec\nrounds: 678"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 910.5274027259721,
            "unit": "iter/sec",
            "range": "stddev: 0.00004080287405191384",
            "extra": "mean: 1.0982645849055848 msec\nrounds: 1060"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 839.9550269715392,
            "unit": "iter/sec",
            "range": "stddev: 0.000046045484375057476",
            "extra": "mean: 1.1905399311740579 msec\nrounds: 988"
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
        "date": 1726191363849,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 227.89536392392978,
            "unit": "iter/sec",
            "range": "stddev: 0.00037439882700177263",
            "extra": "mean: 4.387978688034191 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 334.36260117614086,
            "unit": "iter/sec",
            "range": "stddev: 0.000039415379398068424",
            "extra": "mean: 2.990765104956233 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 414.7356422544486,
            "unit": "iter/sec",
            "range": "stddev: 0.00004639637189712669",
            "extra": "mean: 2.4111744883177417 msec\nrounds: 428"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1022.0953971696212,
            "unit": "iter/sec",
            "range": "stddev: 0.00003972435537132349",
            "extra": "mean: 978.3822554814279 usec\nrounds: 1049"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 211.39038716686784,
            "unit": "iter/sec",
            "range": "stddev: 0.00009911842755574592",
            "extra": "mean: 4.7305840790698666 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 299.3272317214286,
            "unit": "iter/sec",
            "range": "stddev: 0.00008686816926479043",
            "extra": "mean: 3.340825337704852 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 404.8478111911762,
            "unit": "iter/sec",
            "range": "stddev: 0.0000667774123234485",
            "extra": "mean: 2.4700639903615103 msec\nrounds: 415"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 939.2139935292998,
            "unit": "iter/sec",
            "range": "stddev: 0.00004837369542212428",
            "extra": "mean: 1.0647200817806 msec\nrounds: 966"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.328083830127362,
            "unit": "iter/sec",
            "range": "stddev: 0.00023334894064670251",
            "extra": "mean: 57.709785444444606 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.751093475000825,
            "unit": "iter/sec",
            "range": "stddev: 0.0006551236221059858",
            "extra": "mean: 56.334557722222435 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 320.3576943934711,
            "unit": "iter/sec",
            "range": "stddev: 0.000033876204837205",
            "extra": "mean: 3.1215107909091633 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 652.928892271926,
            "unit": "iter/sec",
            "range": "stddev: 0.000039267334948735044",
            "extra": "mean: 1.531560345752825 msec\nrounds: 671"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 900.0829183812326,
            "unit": "iter/sec",
            "range": "stddev: 0.000039847920320921115",
            "extra": "mean: 1.1110087521697054 msec\nrounds: 1037"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 843.1521170704576,
            "unit": "iter/sec",
            "range": "stddev: 0.000022986522787530442",
            "extra": "mean: 1.1860256052899594 msec\nrounds: 983"
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
        "date": 1726208634642,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 228.5783080637546,
            "unit": "iter/sec",
            "range": "stddev: 0.00006174466639630562",
            "extra": "mean: 4.3748683261802865 msec\nrounds: 233"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 331.0119725026932,
            "unit": "iter/sec",
            "range": "stddev: 0.0000809880522647782",
            "extra": "mean: 3.0210387631579207 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 417.1381297621562,
            "unit": "iter/sec",
            "range": "stddev: 0.0000326677212632421",
            "extra": "mean: 2.3972874418605175 msec\nrounds: 430"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 994.5596285571137,
            "unit": "iter/sec",
            "range": "stddev: 0.000020590526420826",
            "extra": "mean: 1.0054701309872986 msec\nrounds: 1023"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 210.98922317704972,
            "unit": "iter/sec",
            "range": "stddev: 0.00010261390853223911",
            "extra": "mean: 4.739578566820255 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 297.677305794847,
            "unit": "iter/sec",
            "range": "stddev: 0.00008276061314423268",
            "extra": "mean: 3.359342417218662 msec\nrounds: 302"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 399.1647192020323,
            "unit": "iter/sec",
            "range": "stddev: 0.00007150994560298943",
            "extra": "mean: 2.505231429268332 msec\nrounds: 410"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 924.1206467110361,
            "unit": "iter/sec",
            "range": "stddev: 0.00004492930155968273",
            "extra": "mean: 1.0821097911393063 msec\nrounds: 948"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.227884826972907,
            "unit": "iter/sec",
            "range": "stddev: 0.00022558966017409207",
            "extra": "mean: 58.045430999999844 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.938886644108266,
            "unit": "iter/sec",
            "range": "stddev: 0.00022505520482351502",
            "extra": "mean: 55.744819611111915 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 326.4835427424827,
            "unit": "iter/sec",
            "range": "stddev: 0.00003337570692459662",
            "extra": "mean: 3.06294152409624 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 645.6984679077885,
            "unit": "iter/sec",
            "range": "stddev: 0.00004494837327152887",
            "extra": "mean: 1.5487105045180452 msec\nrounds: 664"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 906.8485665727096,
            "unit": "iter/sec",
            "range": "stddev: 0.00005306335406874508",
            "extra": "mean: 1.1027199433962183 msec\nrounds: 1060"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 836.0800826821571,
            "unit": "iter/sec",
            "range": "stddev: 0.000023960533362455002",
            "extra": "mean: 1.1960576752312833 msec\nrounds: 973"
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
        "date": 1726209024587,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 224.24638361220815,
            "unit": "iter/sec",
            "range": "stddev: 0.00028922678985079025",
            "extra": "mean: 4.459380721739136 msec\nrounds: 230"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 329.8632854287587,
            "unit": "iter/sec",
            "range": "stddev: 0.00006797351900808412",
            "extra": "mean: 3.0315589644970427 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 410.74834500242787,
            "unit": "iter/sec",
            "range": "stddev: 0.00003644427371339197",
            "extra": "mean: 2.4345807163120505 msec\nrounds: 423"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 989.7692300161967,
            "unit": "iter/sec",
            "range": "stddev: 0.00004204413949621304",
            "extra": "mean: 1.0103365205479622 msec\nrounds: 1022"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 208.32670520301886,
            "unit": "iter/sec",
            "range": "stddev: 0.00007307994425648505",
            "extra": "mean: 4.80015271698114 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 292.46121245884825,
            "unit": "iter/sec",
            "range": "stddev: 0.00008738306691996675",
            "extra": "mean: 3.419256836120477 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 391.4211651753697,
            "unit": "iter/sec",
            "range": "stddev: 0.000038496578121891876",
            "extra": "mean: 2.5547928649999463 msec\nrounds: 400"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 892.203803241197,
            "unit": "iter/sec",
            "range": "stddev: 0.00004194081375783267",
            "extra": "mean: 1.1208201493506318 msec\nrounds: 924"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.093063940618755,
            "unit": "iter/sec",
            "range": "stddev: 0.00045047243111604677",
            "extra": "mean: 58.503262111111056 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.691357340564878,
            "unit": "iter/sec",
            "range": "stddev: 0.0007237719521704264",
            "extra": "mean: 56.52477538888886 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 311.3115372794748,
            "unit": "iter/sec",
            "range": "stddev: 0.00011586907856188725",
            "extra": "mean: 3.212216317901082 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 625.1427862797939,
            "unit": "iter/sec",
            "range": "stddev: 0.00005187687691198643",
            "extra": "mean: 1.5996345506135812 msec\nrounds: 652"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 897.6676689344662,
            "unit": "iter/sec",
            "range": "stddev: 0.000038743552448650775",
            "extra": "mean: 1.1139980135265455 msec\nrounds: 1035"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 815.0707578661901,
            "unit": "iter/sec",
            "range": "stddev: 0.00005346936963943963",
            "extra": "mean: 1.2268873473242303 msec\nrounds: 953"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1726235648449,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 231.2269155169885,
            "unit": "iter/sec",
            "range": "stddev: 0.00009131765347315988",
            "extra": "mean: 4.324756042194097 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 336.20756039783345,
            "unit": "iter/sec",
            "range": "stddev: 0.00003453738347236877",
            "extra": "mean: 2.974353101449304 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 419.85208182579174,
            "unit": "iter/sec",
            "range": "stddev: 0.00004034288276543955",
            "extra": "mean: 2.3817912147805607 msec\nrounds: 433"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 997.8444194417015,
            "unit": "iter/sec",
            "range": "stddev: 0.000027015465534227603",
            "extra": "mean: 1.0021602371234433 msec\nrounds: 1029"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 213.82809917326944,
            "unit": "iter/sec",
            "range": "stddev: 0.00012763495822449",
            "extra": "mean: 4.676653834862362 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 300.7039632083377,
            "unit": "iter/sec",
            "range": "stddev: 0.00004300777985173523",
            "extra": "mean: 3.325529831168759 msec\nrounds: 308"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 404.5236852969268,
            "unit": "iter/sec",
            "range": "stddev: 0.00003748957409114967",
            "extra": "mean: 2.472043137019243 msec\nrounds: 416"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 909.8874680639431,
            "unit": "iter/sec",
            "range": "stddev: 0.00005112650292440977",
            "extra": "mean: 1.0990370074310378 msec\nrounds: 942"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.240595788019263,
            "unit": "iter/sec",
            "range": "stddev: 0.0004151240910824941",
            "extra": "mean: 58.00263588888931 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.908085711416934,
            "unit": "iter/sec",
            "range": "stddev: 0.0005690917143191102",
            "extra": "mean: 55.84069766666744 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 321.5062115126093,
            "unit": "iter/sec",
            "range": "stddev: 0.00008491436599159834",
            "extra": "mean: 3.110359813252879 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 630.7089795569952,
            "unit": "iter/sec",
            "range": "stddev: 0.00003560613329099807",
            "extra": "mean: 1.5855173026114069 msec\nrounds: 651"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 895.303119432703,
            "unit": "iter/sec",
            "range": "stddev: 0.000048974947769003425",
            "extra": "mean: 1.1169401494251878 msec\nrounds: 1044"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 824.6664549882075,
            "unit": "iter/sec",
            "range": "stddev: 0.000056635669326520826",
            "extra": "mean: 1.2126114672801862 msec\nrounds: 978"
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
        "date": 1726276343588,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 229.1864795940128,
            "unit": "iter/sec",
            "range": "stddev: 0.0001328016699143777",
            "extra": "mean: 4.363259131914881 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 332.546348102665,
            "unit": "iter/sec",
            "range": "stddev: 0.00008200949904438663",
            "extra": "mean: 3.0070996289854794 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 414.9704567455191,
            "unit": "iter/sec",
            "range": "stddev: 0.000034539521094308466",
            "extra": "mean: 2.4098101051402097 msec\nrounds: 428"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 997.7575676093124,
            "unit": "iter/sec",
            "range": "stddev: 0.00003904704696566525",
            "extra": "mean: 1.002247472195135 msec\nrounds: 1025"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 210.52602924731545,
            "unit": "iter/sec",
            "range": "stddev: 0.00010952869739914269",
            "extra": "mean: 4.750006465116245 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 296.4596845310477,
            "unit": "iter/sec",
            "range": "stddev: 0.00011700207845765806",
            "extra": "mean: 3.3731399315958988 msec\nrounds: 307"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 407.89973369107656,
            "unit": "iter/sec",
            "range": "stddev: 0.00003135312395922585",
            "extra": "mean: 2.4515828705035423 msec\nrounds: 417"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 922.3283968918419,
            "unit": "iter/sec",
            "range": "stddev: 0.00002408444096241598",
            "extra": "mean: 1.0842125249205206 msec\nrounds: 943"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.40515570706921,
            "unit": "iter/sec",
            "range": "stddev: 0.0001995805869889014",
            "extra": "mean: 57.45424038888913 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 18.011302164153353,
            "unit": "iter/sec",
            "range": "stddev: 0.0002306746103564346",
            "extra": "mean: 55.5206942222218 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 319.3051744505524,
            "unit": "iter/sec",
            "range": "stddev: 0.00004895378205562399",
            "extra": "mean: 3.131800171170919 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 642.631859680601,
            "unit": "iter/sec",
            "range": "stddev: 0.000029827309518953",
            "extra": "mean: 1.5561008763197908 msec\nrounds: 663"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 902.2441171506416,
            "unit": "iter/sec",
            "range": "stddev: 0.00005099922455566344",
            "extra": "mean: 1.1083474871059058 msec\nrounds: 1047"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 824.0890422875108,
            "unit": "iter/sec",
            "range": "stddev: 0.00004587430102590381",
            "extra": "mean: 1.2134611051546016 msec\nrounds: 970"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1726495015125,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 229.94077230216766,
            "unit": "iter/sec",
            "range": "stddev: 0.000119493596768439",
            "extra": "mean: 4.348945991561206 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 330.4759827447155,
            "unit": "iter/sec",
            "range": "stddev: 0.00004665403112106178",
            "extra": "mean: 3.0259385014749323 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 404.28012769166054,
            "unit": "iter/sec",
            "range": "stddev: 0.000303913643452879",
            "extra": "mean: 2.4735324135513475 msec\nrounds: 428"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1013.2406968357461,
            "unit": "iter/sec",
            "range": "stddev: 0.000028878740619887223",
            "extra": "mean: 986.93232824432 usec\nrounds: 1048"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 211.50316133922962,
            "unit": "iter/sec",
            "range": "stddev: 0.00017111939174892373",
            "extra": "mean: 4.728061716279036 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 297.29080294875627,
            "unit": "iter/sec",
            "range": "stddev: 0.00009428309536829373",
            "extra": "mean: 3.363709842622912 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 397.34305526662433,
            "unit": "iter/sec",
            "range": "stddev: 0.00007451154570550203",
            "extra": "mean: 2.516716944578236 msec\nrounds: 415"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 932.360524241898,
            "unit": "iter/sec",
            "range": "stddev: 0.000040668627595811045",
            "extra": "mean: 1.0725464817518948 msec\nrounds: 959"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.30815079062133,
            "unit": "iter/sec",
            "range": "stddev: 0.00017329797296793521",
            "extra": "mean: 57.77624727777761 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.861040462206454,
            "unit": "iter/sec",
            "range": "stddev: 0.00021790328317366472",
            "extra": "mean: 55.987779777778165 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 316.5133786177172,
            "unit": "iter/sec",
            "range": "stddev: 0.00006908211985207214",
            "extra": "mean: 3.159424111445834 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 650.6717659133244,
            "unit": "iter/sec",
            "range": "stddev: 0.00003561340731137167",
            "extra": "mean: 1.5368732014925162 msec\nrounds: 670"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 896.0482538512292,
            "unit": "iter/sec",
            "range": "stddev: 0.00005726952230707136",
            "extra": "mean: 1.1160113260664084 msec\nrounds: 1055"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 830.6124873614789,
            "unit": "iter/sec",
            "range": "stddev: 0.000057455910461111984",
            "extra": "mean: 1.2039308524924746 msec\nrounds: 983"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1726579788745,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 229.80284121954915,
            "unit": "iter/sec",
            "range": "stddev: 0.0001705225884612846",
            "extra": "mean: 4.351556293617012 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 331.10976877409246,
            "unit": "iter/sec",
            "range": "stddev: 0.00004866790831825667",
            "extra": "mean: 3.020146471976409 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 412.86305311067497,
            "unit": "iter/sec",
            "range": "stddev: 0.00012620222684653587",
            "extra": "mean: 2.4221106550116343 msec\nrounds: 429"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 984.6757405266388,
            "unit": "iter/sec",
            "range": "stddev: 0.00004075500858711057",
            "extra": "mean: 1.0155627470472313 msec\nrounds: 1016"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 208.84323796477847,
            "unit": "iter/sec",
            "range": "stddev: 0.00008834524576768053",
            "extra": "mean: 4.788280481308428 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 293.78179017945826,
            "unit": "iter/sec",
            "range": "stddev: 0.00004561661698808751",
            "extra": "mean: 3.403886944078952 msec\nrounds: 304"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 399.6713246250024,
            "unit": "iter/sec",
            "range": "stddev: 0.00005455602435497746",
            "extra": "mean: 2.5020559104115487 msec\nrounds: 413"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 904.5612448076699,
            "unit": "iter/sec",
            "range": "stddev: 0.000022290199834947562",
            "extra": "mean: 1.1055083398058054 msec\nrounds: 927"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.254428136895573,
            "unit": "iter/sec",
            "range": "stddev: 0.0002994532073039127",
            "extra": "mean: 57.956136944444715 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.831853273496268,
            "unit": "iter/sec",
            "range": "stddev: 0.0009484847997756708",
            "extra": "mean: 56.07942061111023 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 327.3846592373841,
            "unit": "iter/sec",
            "range": "stddev: 0.00008916800143472762",
            "extra": "mean: 3.054510869047495 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 640.5088283565119,
            "unit": "iter/sec",
            "range": "stddev: 0.000029254809395385765",
            "extra": "mean: 1.5612587301347745 msec\nrounds: 667"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 885.4783665336605,
            "unit": "iter/sec",
            "range": "stddev: 0.000045575857533451695",
            "extra": "mean: 1.1293330676328681 msec\nrounds: 1035"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 806.2083208709134,
            "unit": "iter/sec",
            "range": "stddev: 0.00003072519873141787",
            "extra": "mean: 1.2403741987179462 msec\nrounds: 936"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1726668974895,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 228.23378369194012,
            "unit": "iter/sec",
            "range": "stddev: 0.00009156812386598439",
            "extra": "mean: 4.381472294871805 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 328.58539514389406,
            "unit": "iter/sec",
            "range": "stddev: 0.00009156082504578854",
            "extra": "mean: 3.0433488973607 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 412.5406199267389,
            "unit": "iter/sec",
            "range": "stddev: 0.000033969302295192025",
            "extra": "mean: 2.4240037264150747 msec\nrounds: 424"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 983.5693308902631,
            "unit": "iter/sec",
            "range": "stddev: 0.000017739297693421045",
            "extra": "mean: 1.0167051458333547 msec\nrounds: 1008"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 209.6507667505602,
            "unit": "iter/sec",
            "range": "stddev: 0.00004797971407772556",
            "extra": "mean: 4.769837074766282 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 294.4464255603276,
            "unit": "iter/sec",
            "range": "stddev: 0.0000530803790421848",
            "extra": "mean: 3.396203564356447 msec\nrounds: 303"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 392.65437181310494,
            "unit": "iter/sec",
            "range": "stddev: 0.00030457523134865244",
            "extra": "mean: 2.546769046228724 msec\nrounds: 411"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 892.2707882862921,
            "unit": "iter/sec",
            "range": "stddev: 0.000049329645531690156",
            "extra": "mean: 1.120736006521758 msec\nrounds: 920"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.249109968205733,
            "unit": "iter/sec",
            "range": "stddev: 0.00031067821145099365",
            "extra": "mean: 57.97400572222225 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.680603122462497,
            "unit": "iter/sec",
            "range": "stddev: 0.001286745266986263",
            "extra": "mean: 56.55915655555551 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 320.1989751643935,
            "unit": "iter/sec",
            "range": "stddev: 0.00004217048429786959",
            "extra": "mean: 3.1230580906343923 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 628.0929531199813,
            "unit": "iter/sec",
            "range": "stddev: 0.00003575917914201683",
            "extra": "mean: 1.5921210308643206 msec\nrounds: 648"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 879.4357971022412,
            "unit": "iter/sec",
            "range": "stddev: 0.000059719340883841196",
            "extra": "mean: 1.1370926715685445 msec\nrounds: 1020"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 814.8687410812623,
            "unit": "iter/sec",
            "range": "stddev: 0.000029499276223455174",
            "extra": "mean: 1.2271915089945455 msec\nrounds: 945"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1726754323930,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 235.19358873566347,
            "unit": "iter/sec",
            "range": "stddev: 0.00009646007794129266",
            "extra": "mean: 4.251816579591846 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 346.1547650549361,
            "unit": "iter/sec",
            "range": "stddev: 0.0000931955754391801",
            "extra": "mean: 2.888881220055706 msec\nrounds: 359"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 438.5527643246534,
            "unit": "iter/sec",
            "range": "stddev: 0.00011328242519973847",
            "extra": "mean: 2.280227332599177 msec\nrounds: 454"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1131.7804520188017,
            "unit": "iter/sec",
            "range": "stddev: 0.000016132193854281695",
            "extra": "mean: 883.563590638326 usec\nrounds: 1175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 217.85282401953629,
            "unit": "iter/sec",
            "range": "stddev: 0.0001109125870778294",
            "extra": "mean: 4.590254932432382 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 313.52070308341047,
            "unit": "iter/sec",
            "range": "stddev: 0.00004508543703345159",
            "extra": "mean: 3.1895820281251264 msec\nrounds: 320"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 418.2634276731751,
            "unit": "iter/sec",
            "range": "stddev: 0.00005538986439546523",
            "extra": "mean: 2.3908377683486712 msec\nrounds: 436"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1004.7967557610691,
            "unit": "iter/sec",
            "range": "stddev: 0.00014571919198673794",
            "extra": "mean: 995.226143263733 usec\nrounds: 1054"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.874396353412298,
            "unit": "iter/sec",
            "range": "stddev: 0.0003469446113825507",
            "extra": "mean: 55.94594526315826 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 18.718327930305815,
            "unit": "iter/sec",
            "range": "stddev: 0.00023769902173880866",
            "extra": "mean: 53.42357521052695 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 338.17342087857713,
            "unit": "iter/sec",
            "range": "stddev: 0.000053130493839723076",
            "extra": "mean: 2.957062673352602 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 716.2594982157697,
            "unit": "iter/sec",
            "range": "stddev: 0.00009491707208212285",
            "extra": "mean: 1.396142044176781 msec\nrounds: 747"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1016.9340276245314,
            "unit": "iter/sec",
            "range": "stddev: 0.000045074143094463215",
            "extra": "mean: 983.3479585061307 usec\nrounds: 1205"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 919.5549438412628,
            "unit": "iter/sec",
            "range": "stddev: 0.000037288662520769975",
            "extra": "mean: 1.0874825987261767 msec\nrounds: 1099"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1726840248407,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 243.1626794672593,
            "unit": "iter/sec",
            "range": "stddev: 0.00004661110909824118",
            "extra": "mean: 4.112473189516097 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 351.3000644430682,
            "unit": "iter/sec",
            "range": "stddev: 0.000043609507068982244",
            "extra": "mean: 2.84656936111112 msec\nrounds: 360"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 447.9335324596493,
            "unit": "iter/sec",
            "range": "stddev: 0.00003714418122055327",
            "extra": "mean: 2.23247407826089 msec\nrounds: 460"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1077.2842214563557,
            "unit": "iter/sec",
            "range": "stddev: 0.0001543455553009238",
            "extra": "mean: 928.2601379310311 usec\nrounds: 1189"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 218.91520737132382,
            "unit": "iter/sec",
            "range": "stddev: 0.00011314002370652867",
            "extra": "mean: 4.5679786800000635 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 314.7308648867284,
            "unit": "iter/sec",
            "range": "stddev: 0.00010182171695240603",
            "extra": "mean: 3.1773178660437384 msec\nrounds: 321"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 422.49261177887826,
            "unit": "iter/sec",
            "range": "stddev: 0.00004855635855668841",
            "extra": "mean: 2.3669052951945444 msec\nrounds: 437"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1019.4452015830836,
            "unit": "iter/sec",
            "range": "stddev: 0.00004199651997584925",
            "extra": "mean: 980.9257019868381 usec\nrounds: 1057"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.99592932457569,
            "unit": "iter/sec",
            "range": "stddev: 0.0005985700346959982",
            "extra": "mean: 55.56812221052541 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 18.88471761810423,
            "unit": "iter/sec",
            "range": "stddev: 0.00018710202510176154",
            "extra": "mean: 52.95287015789578 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 343.88629637150217,
            "unit": "iter/sec",
            "range": "stddev: 0.00004593774709135459",
            "extra": "mean: 2.9079379159665457 msec\nrounds: 357"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 714.2771228299363,
            "unit": "iter/sec",
            "range": "stddev: 0.00005883111174455447",
            "extra": "mean: 1.4000168394558705 msec\nrounds: 735"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1007.0431044783517,
            "unit": "iter/sec",
            "range": "stddev: 0.00005450722282745748",
            "extra": "mean: 993.0061539103632 usec\nrounds: 1202"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 910.9189986262497,
            "unit": "iter/sec",
            "range": "stddev: 0.000029568742445188417",
            "extra": "mean: 1.0977924508195487 msec\nrounds: 1098"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1726841654073,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 241.86874175212412,
            "unit": "iter/sec",
            "range": "stddev: 0.0001305377029278075",
            "extra": "mean: 4.13447390000001 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 352.08285071262304,
            "unit": "iter/sec",
            "range": "stddev: 0.00006700316096996206",
            "extra": "mean: 2.840240579670322 msec\nrounds: 364"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 452.2630571736548,
            "unit": "iter/sec",
            "range": "stddev: 0.00006111919497405724",
            "extra": "mean: 2.2111025522388212 msec\nrounds: 469"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1122.2138559299435,
            "unit": "iter/sec",
            "range": "stddev: 0.000022964443935139408",
            "extra": "mean: 891.0957521294649 usec\nrounds: 1174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 220.05612082447385,
            "unit": "iter/sec",
            "range": "stddev: 0.000051614447260537326",
            "extra": "mean: 4.544295319999949 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 314.4174985262534,
            "unit": "iter/sec",
            "range": "stddev: 0.00005735044067517433",
            "extra": "mean: 3.1804845617283655 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 433.57213778611896,
            "unit": "iter/sec",
            "range": "stddev: 0.00007109036747799574",
            "extra": "mean: 2.306421268456369 msec\nrounds: 447"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1016.0537965125465,
            "unit": "iter/sec",
            "range": "stddev: 0.00001743276992194544",
            "extra": "mean: 984.1998557875097 usec\nrounds: 1054"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.918260223996107,
            "unit": "iter/sec",
            "range": "stddev: 0.0010135275254679055",
            "extra": "mean: 55.80898968421061 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 18.663221312900575,
            "unit": "iter/sec",
            "range": "stddev: 0.0006714376357979108",
            "extra": "mean: 53.581318210526184 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 347.95996059920265,
            "unit": "iter/sec",
            "range": "stddev: 0.00008688437730304049",
            "extra": "mean: 2.8738938764045012 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 721.4962452409244,
            "unit": "iter/sec",
            "range": "stddev: 0.0000607103898919444",
            "extra": "mean: 1.3860085989305138 msec\nrounds: 748"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1036.0422882452822,
            "unit": "iter/sec",
            "range": "stddev: 0.000055278844664822774",
            "extra": "mean: 965.2115665024387 usec\nrounds: 1218"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 934.0147862541096,
            "unit": "iter/sec",
            "range": "stddev: 0.000021329619029071613",
            "extra": "mean: 1.0706468620379404 msec\nrounds: 1109"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1727101265969,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 237.5095402614028,
            "unit": "iter/sec",
            "range": "stddev: 0.000298154672327668",
            "extra": "mean: 4.210357187755072 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 347.1656391121364,
            "unit": "iter/sec",
            "range": "stddev: 0.00005359829419095303",
            "extra": "mean: 2.8804693994413273 msec\nrounds: 358"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 441.1418441971522,
            "unit": "iter/sec",
            "range": "stddev: 0.00004008149934437276",
            "extra": "mean: 2.266844583333352 msec\nrounds: 456"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1102.908506331741,
            "unit": "iter/sec",
            "range": "stddev: 0.000025149684859545982",
            "extra": "mean: 906.6935237683375 usec\nrounds: 1157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 217.01223973445363,
            "unit": "iter/sec",
            "range": "stddev: 0.00013034154084856747",
            "extra": "mean: 4.608035017857274 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 306.9594463443098,
            "unit": "iter/sec",
            "range": "stddev: 0.00017478628934765715",
            "extra": "mean: 3.2577593291536027 msec\nrounds: 319"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 426.9135721471704,
            "unit": "iter/sec",
            "range": "stddev: 0.0000494690670199096",
            "extra": "mean: 2.3423944920993724 msec\nrounds: 443"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1009.0039796240848,
            "unit": "iter/sec",
            "range": "stddev: 0.000021052960121104584",
            "extra": "mean: 991.0763685714704 usec\nrounds: 1050"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.059860256584322,
            "unit": "iter/sec",
            "range": "stddev: 0.0007525808331030925",
            "extra": "mean: 55.37141405263181 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 18.832375212786395,
            "unit": "iter/sec",
            "range": "stddev: 0.0005537994880693365",
            "extra": "mean: 53.10004652631611 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 341.71179861342887,
            "unit": "iter/sec",
            "range": "stddev: 0.00009038968283060058",
            "extra": "mean: 2.9264427042253764 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 713.2789471474467,
            "unit": "iter/sec",
            "range": "stddev: 0.000033404546379190834",
            "extra": "mean: 1.4019760487803705 msec\nrounds: 738"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1009.2741275050851,
            "unit": "iter/sec",
            "range": "stddev: 0.00005646645492810713",
            "extra": "mean: 990.811091603021 usec\nrounds: 1179"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 901.5552083120792,
            "unit": "iter/sec",
            "range": "stddev: 0.00005278471490161408",
            "extra": "mean: 1.1091944129214586 msec\nrounds: 1068"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1727185571405,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 238.57905110283744,
            "unit": "iter/sec",
            "range": "stddev: 0.00014743102929478584",
            "extra": "mean: 4.191482845528456 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 352.60479850239614,
            "unit": "iter/sec",
            "range": "stddev: 0.000039912588813479094",
            "extra": "mean: 2.8360362770083074 msec\nrounds: 361"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 447.4171964485028,
            "unit": "iter/sec",
            "range": "stddev: 0.00006665755838294863",
            "extra": "mean: 2.235050436008663 msec\nrounds: 461"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1100.7542178214421,
            "unit": "iter/sec",
            "range": "stddev: 0.00001896916397354064",
            "extra": "mean: 908.4680156657952 usec\nrounds: 1149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 219.42231160843613,
            "unit": "iter/sec",
            "range": "stddev: 0.00022173015263685406",
            "extra": "mean: 4.5574216799999885 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 312.6906041022121,
            "unit": "iter/sec",
            "range": "stddev: 0.00011104992554750832",
            "extra": "mean: 3.198049403726633 msec\nrounds: 322"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 427.7440116127024,
            "unit": "iter/sec",
            "range": "stddev: 0.000040214173283328765",
            "extra": "mean: 2.3378468730158226 msec\nrounds: 441"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 999.3409116954206,
            "unit": "iter/sec",
            "range": "stddev: 0.000021718145696518792",
            "extra": "mean: 1.0006595229884678 msec\nrounds: 1044"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.03399884309995,
            "unit": "iter/sec",
            "range": "stddev: 0.0008109374063297047",
            "extra": "mean: 55.450818684210645 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 18.915961603401747,
            "unit": "iter/sec",
            "range": "stddev: 0.00024219180495292983",
            "extra": "mean: 52.86540652631506 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 345.7072342964424,
            "unit": "iter/sec",
            "range": "stddev: 0.00003734689327437732",
            "extra": "mean: 2.8926209832869874 msec\nrounds: 359"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 710.9801752939227,
            "unit": "iter/sec",
            "range": "stddev: 0.0000610809656839409",
            "extra": "mean: 1.4065089783784688 msec\nrounds: 740"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 996.4604815528405,
            "unit": "iter/sec",
            "range": "stddev: 0.00005772233549967391",
            "extra": "mean: 1.0035520911392728 msec\nrounds: 1185"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 911.8221260512698,
            "unit": "iter/sec",
            "range": "stddev: 0.00004986713700042096",
            "extra": "mean: 1.0967051263941057 msec\nrounds: 1076"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1727271163079,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 238.56388104612498,
            "unit": "iter/sec",
            "range": "stddev: 0.00005248010447298266",
            "extra": "mean: 4.19174937804879 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 351.38301266916216,
            "unit": "iter/sec",
            "range": "stddev: 0.00009602718372778339",
            "extra": "mean: 2.8458973938547523 msec\nrounds: 358"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 452.02138651331,
            "unit": "iter/sec",
            "range": "stddev: 0.00006623111600894637",
            "extra": "mean: 2.212284705627649 msec\nrounds: 462"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1124.7192508776984,
            "unit": "iter/sec",
            "range": "stddev: 0.0000405070963561027",
            "extra": "mean: 889.1107707275651 usec\nrounds: 1182"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 219.97382102310362,
            "unit": "iter/sec",
            "range": "stddev: 0.00007955730754620634",
            "extra": "mean: 4.545995497777761 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 313.79352644422534,
            "unit": "iter/sec",
            "range": "stddev: 0.00006296746411360231",
            "extra": "mean: 3.1868088909658985 msec\nrounds: 321"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 425.251055460779,
            "unit": "iter/sec",
            "range": "stddev: 0.00007281232628769437",
            "extra": "mean: 2.3515520706149786 msec\nrounds: 439"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 994.8255281730083,
            "unit": "iter/sec",
            "range": "stddev: 0.000022519898388265817",
            "extra": "mean: 1.0052013862536224 msec\nrounds: 1033"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.94817580898315,
            "unit": "iter/sec",
            "range": "stddev: 0.00042007417818023645",
            "extra": "mean: 55.71596861111061 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 18.76797004733169,
            "unit": "iter/sec",
            "range": "stddev: 0.0005388502645713271",
            "extra": "mean: 53.2822674736831 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 340.3935296559301,
            "unit": "iter/sec",
            "range": "stddev: 0.00006644843685691407",
            "extra": "mean: 2.9377761704542396 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 725.9150577460881,
            "unit": "iter/sec",
            "range": "stddev: 0.00005274809540003681",
            "extra": "mean: 1.3775716446837805 msec\nrounds: 743"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 986.6749514306758,
            "unit": "iter/sec",
            "range": "stddev: 0.00005690526163625849",
            "extra": "mean: 1.0135050033954982 msec\nrounds: 1178"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 890.6297098202162,
            "unit": "iter/sec",
            "range": "stddev: 0.000052117301750189555",
            "extra": "mean: 1.122801079925642 msec\nrounds: 1076"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1727361529467,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 235.3361456880051,
            "unit": "iter/sec",
            "range": "stddev: 0.0002329527326116663",
            "extra": "mean: 4.2492410040816315 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 345.95520301469116,
            "unit": "iter/sec",
            "range": "stddev: 0.0000408815745629021",
            "extra": "mean: 2.8905476526610716 msec\nrounds: 357"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 452.27465607039534,
            "unit": "iter/sec",
            "range": "stddev: 0.00006188274725444397",
            "extra": "mean: 2.211045846982752 msec\nrounds: 464"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1119.416329983155,
            "unit": "iter/sec",
            "range": "stddev: 0.00003897778766858021",
            "extra": "mean: 893.3226836301808 usec\nrounds: 1179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 220.03856601277224,
            "unit": "iter/sec",
            "range": "stddev: 0.00008934691507049881",
            "extra": "mean: 4.544657866666676 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 311.5666664207262,
            "unit": "iter/sec",
            "range": "stddev: 0.00012437555519382383",
            "extra": "mean: 3.209585965944261 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 434.4074077552309,
            "unit": "iter/sec",
            "range": "stddev: 0.00005205770084357022",
            "extra": "mean: 2.3019865272727005 msec\nrounds: 440"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1002.3516761051795,
            "unit": "iter/sec",
            "range": "stddev: 0.00002049557254232649",
            "extra": "mean: 997.6538413001737 usec\nrounds: 1046"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.103106601902248,
            "unit": "iter/sec",
            "range": "stddev: 0.00038755408736340755",
            "extra": "mean: 55.23913778947319 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 18.70161914504168,
            "unit": "iter/sec",
            "range": "stddev: 0.00015971865767406524",
            "extra": "mean: 53.47130600000096 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 342.0223108538306,
            "unit": "iter/sec",
            "range": "stddev: 0.0001124692961715327",
            "extra": "mean: 2.9237858708795406 msec\nrounds: 364"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 713.5536697926586,
            "unit": "iter/sec",
            "range": "stddev: 0.00011068978439182528",
            "extra": "mean: 1.401436279194774 msec\nrounds: 745"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1019.3676170838278,
            "unit": "iter/sec",
            "range": "stddev: 0.00005482828564288803",
            "extra": "mean: 981.0003606557231 usec\nrounds: 1220"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 928.5944318107876,
            "unit": "iter/sec",
            "range": "stddev: 0.0000309588920763978",
            "extra": "mean: 1.0768963992708522 msec\nrounds: 1097"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1727363114544,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 243.67456642778714,
            "unit": "iter/sec",
            "range": "stddev: 0.00015935295405555808",
            "extra": "mean: 4.103834120481957 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 353.54658131769276,
            "unit": "iter/sec",
            "range": "stddev: 0.00004979208661757031",
            "extra": "mean: 2.8284816000000066 msec\nrounds: 360"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 455.2711995638389,
            "unit": "iter/sec",
            "range": "stddev: 0.00003880018323662604",
            "extra": "mean: 2.196492993534458 msec\nrounds: 464"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1157.30210781554,
            "unit": "iter/sec",
            "range": "stddev: 0.000011745213894633796",
            "extra": "mean: 864.0786128762396 usec\nrounds: 1196"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 222.32789579789562,
            "unit": "iter/sec",
            "range": "stddev: 0.000050908434434342885",
            "extra": "mean: 4.497861127193132 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 318.51709226614827,
            "unit": "iter/sec",
            "range": "stddev: 0.00009429612289496582",
            "extra": "mean: 3.139548941896074 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 435.4810854538559,
            "unit": "iter/sec",
            "range": "stddev: 0.00007373415796204372",
            "extra": "mean: 2.2963109843400105 msec\nrounds: 447"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1015.8659339811782,
            "unit": "iter/sec",
            "range": "stddev: 0.00002033755821322036",
            "extra": "mean: 984.3818623595344 usec\nrounds: 1068"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.15021344961482,
            "unit": "iter/sec",
            "range": "stddev: 0.00018807985878408306",
            "extra": "mean: 55.09577078947365 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 18.952269032629975,
            "unit": "iter/sec",
            "range": "stddev: 0.00042882357320119766",
            "extra": "mean: 52.76413068421031 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 344.9531276683925,
            "unit": "iter/sec",
            "range": "stddev: 0.00005035300875424582",
            "extra": "mean: 2.8989445805556278 msec\nrounds: 360"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 726.0955711421852,
            "unit": "iter/sec",
            "range": "stddev: 0.000021410989602970685",
            "extra": "mean: 1.3772291689191123 msec\nrounds: 740"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1025.5332771775313,
            "unit": "iter/sec",
            "range": "stddev: 0.00004585137647641447",
            "extra": "mean: 975.1024391448283 usec\nrounds: 1216"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 926.6233697312315,
            "unit": "iter/sec",
            "range": "stddev: 0.000029308128020769276",
            "extra": "mean: 1.0791871138432991 msec\nrounds: 1098"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1727791719323,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 236.0469015828326,
            "unit": "iter/sec",
            "range": "stddev: 0.00021402326493252848",
            "extra": "mean: 4.2364462032520445 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 345.10776624461073,
            "unit": "iter/sec",
            "range": "stddev: 0.00006314348634471476",
            "extra": "mean: 2.8976455988857834 msec\nrounds: 359"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 444.58533201046276,
            "unit": "iter/sec",
            "range": "stddev: 0.00005410877796682145",
            "extra": "mean: 2.2492869827213875 msec\nrounds: 463"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1124.725010334744,
            "unit": "iter/sec",
            "range": "stddev: 0.00004209089924905677",
            "extra": "mean: 889.1062177966302 usec\nrounds: 1180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 220.0683086601139,
            "unit": "iter/sec",
            "range": "stddev: 0.00008325343390223486",
            "extra": "mean: 4.544043647576976 msec\nrounds: 227"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 314.43124470000436,
            "unit": "iter/sec",
            "range": "stddev: 0.00010199028467180024",
            "extra": "mean: 3.1803455186334606 msec\nrounds: 322"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 431.23654709050965,
            "unit": "iter/sec",
            "range": "stddev: 0.00008140013052718455",
            "extra": "mean: 2.318912918552138 msec\nrounds: 442"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1006.4207223629195,
            "unit": "iter/sec",
            "range": "stddev: 0.000023661769371113",
            "extra": "mean: 993.6202403028382 usec\nrounds: 1057"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.135119589416686,
            "unit": "iter/sec",
            "range": "stddev: 0.00018113292729765574",
            "extra": "mean: 55.14162699999955 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.770205001798594,
            "unit": "iter/sec",
            "range": "stddev: 0.00649883374638474",
            "extra": "mean: 56.273970947368696 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 346.512367291403,
            "unit": "iter/sec",
            "range": "stddev: 0.0000536897468626672",
            "extra": "mean: 2.8858998823526556 msec\nrounds: 357"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 716.6630967225592,
            "unit": "iter/sec",
            "range": "stddev: 0.000060205551884389016",
            "extra": "mean: 1.395355787919311 msec\nrounds: 745"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1004.0748912092215,
            "unit": "iter/sec",
            "range": "stddev: 0.00004655587626880669",
            "extra": "mean: 995.9416461412414 usec\nrounds: 1218"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 909.9880991417563,
            "unit": "iter/sec",
            "range": "stddev: 0.00003380635670929552",
            "extra": "mean: 1.0989154703705875 msec\nrounds: 1080"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1727793248977,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 237.76180087205756,
            "unit": "iter/sec",
            "range": "stddev: 0.0001397592901246867",
            "extra": "mean: 4.2058900813007885 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 350.3935469805329,
            "unit": "iter/sec",
            "range": "stddev: 0.000041052967623097925",
            "extra": "mean: 2.8539338370165757 msec\nrounds: 362"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 448.2937186200567,
            "unit": "iter/sec",
            "range": "stddev: 0.00007926359278106266",
            "extra": "mean: 2.230680374193536 msec\nrounds: 465"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1130.4312405605356,
            "unit": "iter/sec",
            "range": "stddev: 0.000060380695448146913",
            "extra": "mean: 884.6181564339465 usec\nrounds: 1189"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 220.61913115070521,
            "unit": "iter/sec",
            "range": "stddev: 0.00009063055870573859",
            "extra": "mean: 4.53269847807033 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 316.05333263977275,
            "unit": "iter/sec",
            "range": "stddev: 0.000035546761521530156",
            "extra": "mean: 3.1640229566563924 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 430.91023910126506,
            "unit": "iter/sec",
            "range": "stddev: 0.00007359725723116973",
            "extra": "mean: 2.3206689218749275 msec\nrounds: 448"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1020.1888038873794,
            "unit": "iter/sec",
            "range": "stddev: 0.000024573495433166053",
            "extra": "mean: 980.2107180450804 usec\nrounds: 1064"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.17834752648,
            "unit": "iter/sec",
            "range": "stddev: 0.00024538700656905467",
            "extra": "mean: 55.01050073684211 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 18.823220650339017,
            "unit": "iter/sec",
            "range": "stddev: 0.0006658488112213245",
            "extra": "mean: 53.12587142105192 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 345.5299933933311,
            "unit": "iter/sec",
            "range": "stddev: 0.00003587817604073354",
            "extra": "mean: 2.8941047640447772 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 726.4231303555722,
            "unit": "iter/sec",
            "range": "stddev: 0.00005390124979110887",
            "extra": "mean: 1.3766081478029426 msec\nrounds: 751"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1040.3799332258418,
            "unit": "iter/sec",
            "range": "stddev: 0.00006124944395262443",
            "extra": "mean: 961.1873201930777 usec\nrounds: 1243"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 945.6885927755775,
            "unit": "iter/sec",
            "range": "stddev: 0.00005267040886794284",
            "extra": "mean: 1.0574305407079296 msec\nrounds: 1130"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1727876185666,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 242.66477017886638,
            "unit": "iter/sec",
            "range": "stddev: 0.0000703694321248104",
            "extra": "mean: 4.120911326612872 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 350.33461920016003,
            "unit": "iter/sec",
            "range": "stddev: 0.00003227453142056353",
            "extra": "mean: 2.8544138808864346 msec\nrounds: 361"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 449.7121766954604,
            "unit": "iter/sec",
            "range": "stddev: 0.00005299933931534071",
            "extra": "mean: 2.223644481561787 msec\nrounds: 461"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1115.1463895794707,
            "unit": "iter/sec",
            "range": "stddev: 0.00002224880287206589",
            "extra": "mean: 896.7432521367055 usec\nrounds: 1170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 219.21166577721888,
            "unit": "iter/sec",
            "range": "stddev: 0.00005555947446011103",
            "extra": "mean: 4.561801017543853 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 314.41815788850533,
            "unit": "iter/sec",
            "range": "stddev: 0.00004307164088480324",
            "extra": "mean: 3.1804778919753303 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 429.5602884068583,
            "unit": "iter/sec",
            "range": "stddev: 0.00004331436395668145",
            "extra": "mean: 2.327961934537229 msec\nrounds: 443"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1009.0415810539054,
            "unit": "iter/sec",
            "range": "stddev: 0.00003990097829877264",
            "extra": "mean: 991.0394366063073 usec\nrounds: 1049"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.11829961917015,
            "unit": "iter/sec",
            "range": "stddev: 0.0005386563251563326",
            "extra": "mean: 55.19281726315783 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 18.855292792826262,
            "unit": "iter/sec",
            "range": "stddev: 0.0000882210483176123",
            "extra": "mean: 53.03550631578963 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 346.16447226512287,
            "unit": "iter/sec",
            "range": "stddev: 0.000040832491958712745",
            "extra": "mean: 2.8888002094972736 msec\nrounds: 358"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 720.1060490995086,
            "unit": "iter/sec",
            "range": "stddev: 0.000025854659319378587",
            "extra": "mean: 1.388684348993455 msec\nrounds: 745"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1012.6809881262336,
            "unit": "iter/sec",
            "range": "stddev: 0.000042405660514090706",
            "extra": "mean: 987.4778056713621 usec\nrounds: 1199"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 916.7198371290618,
            "unit": "iter/sec",
            "range": "stddev: 0.00002092942796013017",
            "extra": "mean: 1.090845817334717 msec\nrounds: 1073"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1727881885137,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 238.13368218011493,
            "unit": "iter/sec",
            "range": "stddev: 0.0002483539448144778",
            "extra": "mean: 4.199321955823281 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 343.3194212759027,
            "unit": "iter/sec",
            "range": "stddev: 0.00013131977819253566",
            "extra": "mean: 2.9127393850415686 msec\nrounds: 361"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 441.3668412192622,
            "unit": "iter/sec",
            "range": "stddev: 0.00007222276751867047",
            "extra": "mean: 2.265689006535994 msec\nrounds: 459"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1106.8610183124208,
            "unit": "iter/sec",
            "range": "stddev: 0.00004297456587730727",
            "extra": "mean: 903.4557938671047 usec\nrounds: 1174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 212.78733299348045,
            "unit": "iter/sec",
            "range": "stddev: 0.00026751722652557086",
            "extra": "mean: 4.699527861607433 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 307.0384236920716,
            "unit": "iter/sec",
            "range": "stddev: 0.00012790347991472597",
            "extra": "mean: 3.2569213584906187 msec\nrounds: 318"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 417.27940076613703,
            "unit": "iter/sec",
            "range": "stddev: 0.00009712663294511153",
            "extra": "mean: 2.3964758340909498 msec\nrounds: 440"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 983.3297155388207,
            "unit": "iter/sec",
            "range": "stddev: 0.00006507836022806847",
            "extra": "mean: 1.0169528940270505 msec\nrounds: 1038"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.478804832263474,
            "unit": "iter/sec",
            "range": "stddev: 0.0009297508582819257",
            "extra": "mean: 57.212149777777555 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 18.244894921398704,
            "unit": "iter/sec",
            "range": "stddev: 0.0009355568110453302",
            "extra": "mean: 54.8098525263163 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 338.6766120436298,
            "unit": "iter/sec",
            "range": "stddev: 0.00010530296115598849",
            "extra": "mean: 2.9526691966293073 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 704.8983289753088,
            "unit": "iter/sec",
            "range": "stddev: 0.00007108475783271389",
            "extra": "mean: 1.418644304993136 msec\nrounds: 741"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1002.7923335354318,
            "unit": "iter/sec",
            "range": "stddev: 0.000054389107396863765",
            "extra": "mean: 997.2154418795892 usec\nrounds: 1213"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 913.806342856616,
            "unit": "iter/sec",
            "range": "stddev: 0.0000763259305013846",
            "extra": "mean: 1.0943237676310467 msec\nrounds: 1106"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1727964340485,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 237.14643782913964,
            "unit": "iter/sec",
            "range": "stddev: 0.000052002517573643125",
            "extra": "mean: 4.216803799180339 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 344.89231909484414,
            "unit": "iter/sec",
            "range": "stddev: 0.00005855610177046091",
            "extra": "mean: 2.899455698591547 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 453.9772505170422,
            "unit": "iter/sec",
            "range": "stddev: 0.00003497751514465894",
            "extra": "mean: 2.2027535495690223 msec\nrounds: 464"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1133.2658971702292,
            "unit": "iter/sec",
            "range": "stddev: 0.0000348740015163025",
            "extra": "mean: 882.4054465037774 usec\nrounds: 1187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 217.10281559521832,
            "unit": "iter/sec",
            "range": "stddev: 0.00008671672034215038",
            "extra": "mean: 4.606112533632314 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 307.54200888805025,
            "unit": "iter/sec",
            "range": "stddev: 0.000060747715212497685",
            "extra": "mean: 3.25158830696204 msec\nrounds: 316"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 422.58006251497426,
            "unit": "iter/sec",
            "range": "stddev: 0.00017491794638231474",
            "extra": "mean: 2.366415476510004 msec\nrounds: 447"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1012.659755363079,
            "unit": "iter/sec",
            "range": "stddev: 0.000040255224625235655",
            "extra": "mean: 987.4985104364694 usec\nrounds: 1054"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.01525533623407,
            "unit": "iter/sec",
            "range": "stddev: 0.00012015528656356437",
            "extra": "mean: 55.508511055555275 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 18.67903478309574,
            "unit": "iter/sec",
            "range": "stddev: 0.0001327552543077087",
            "extra": "mean: 53.53595684210545 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 345.72258494058457,
            "unit": "iter/sec",
            "range": "stddev: 0.00004672698938379976",
            "extra": "mean: 2.892492546218404 msec\nrounds: 357"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 710.9918549384356,
            "unit": "iter/sec",
            "range": "stddev: 0.00005809669156678381",
            "extra": "mean: 1.4064858732968037 msec\nrounds: 734"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1023.3189521534515,
            "unit": "iter/sec",
            "range": "stddev: 0.00004108836782338356",
            "extra": "mean: 977.2124300987688 usec\nrounds: 1216"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 926.1561700805173,
            "unit": "iter/sec",
            "range": "stddev: 0.00004524348164599532",
            "extra": "mean: 1.0797315099818026 msec\nrounds: 1102"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1727965838113,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 228.921899231929,
            "unit": "iter/sec",
            "range": "stddev: 0.00011911253706659833",
            "extra": "mean: 4.36830204255323 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 338.0241162022187,
            "unit": "iter/sec",
            "range": "stddev: 0.000032433947776208474",
            "extra": "mean: 2.9583688028985557 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 438.9485121242122,
            "unit": "iter/sec",
            "range": "stddev: 0.00004236743149047632",
            "extra": "mean: 2.278171522123814 msec\nrounds: 452"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1133.578525310722,
            "unit": "iter/sec",
            "range": "stddev: 0.000018900133769190463",
            "extra": "mean: 882.1620890585351 usec\nrounds: 1179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 213.42622540749724,
            "unit": "iter/sec",
            "range": "stddev: 0.00014589719181160087",
            "extra": "mean: 4.685459802752394 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 301.73615305361693,
            "unit": "iter/sec",
            "range": "stddev: 0.0000825202972725896",
            "extra": "mean: 3.314153739549749 msec\nrounds: 311"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 420.1119081293857,
            "unit": "iter/sec",
            "range": "stddev: 0.00007123504865321177",
            "extra": "mean: 2.380318150115423 msec\nrounds: 433"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1031.648457291943,
            "unit": "iter/sec",
            "range": "stddev: 0.00001610683132051651",
            "extra": "mean: 969.3224401507665 usec\nrounds: 1061"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.666122873633803,
            "unit": "iter/sec",
            "range": "stddev: 0.001027771153656048",
            "extra": "mean: 56.60551594444484 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 18.637237485155143,
            "unit": "iter/sec",
            "range": "stddev: 0.00035047460864371256",
            "extra": "mean: 53.65602068420902 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 337.7886264149938,
            "unit": "iter/sec",
            "range": "stddev: 0.00008992588178536313",
            "extra": "mean: 2.9604312336183853 msec\nrounds: 351"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 732.6110990030053,
            "unit": "iter/sec",
            "range": "stddev: 0.00004111551737697906",
            "extra": "mean: 1.3649806853334305 msec\nrounds: 750"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1017.1429286011978,
            "unit": "iter/sec",
            "range": "stddev: 0.00004361630422191648",
            "extra": "mean: 983.1459983458044 usec\nrounds: 1209"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 914.1447013473712,
            "unit": "iter/sec",
            "range": "stddev: 0.000049920787985797086",
            "extra": "mean: 1.093918718257717 msec\nrounds: 1079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1728049519870,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 238.20253057699603,
            "unit": "iter/sec",
            "range": "stddev: 0.00004645528746447154",
            "extra": "mean: 4.198108213114732 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 343.2672112290773,
            "unit": "iter/sec",
            "range": "stddev: 0.00007005146387300171",
            "extra": "mean: 2.9131824050991457 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 444.03290442779706,
            "unit": "iter/sec",
            "range": "stddev: 0.00004146101730170635",
            "extra": "mean: 2.2520853522975957 msec\nrounds: 457"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1108.5293040797421,
            "unit": "iter/sec",
            "range": "stddev: 0.000043040830311058245",
            "extra": "mean: 902.0961343283216 usec\nrounds: 1139"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 217.50238838932,
            "unit": "iter/sec",
            "range": "stddev: 0.0001163868770795801",
            "extra": "mean: 4.597650662162122 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 309.45143264277624,
            "unit": "iter/sec",
            "range": "stddev: 0.00016509725655970556",
            "extra": "mean: 3.231524867924517 msec\nrounds: 318"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 422.2887724847232,
            "unit": "iter/sec",
            "range": "stddev: 0.00004999913980008941",
            "extra": "mean: 2.368047803203615 msec\nrounds: 437"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 990.8163378312087,
            "unit": "iter/sec",
            "range": "stddev: 0.000042876413191253376",
            "extra": "mean: 1.0092687835455898 msec\nrounds: 1021"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.988224494516807,
            "unit": "iter/sec",
            "range": "stddev: 0.0005945145468824279",
            "extra": "mean: 55.59192349999975 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 18.771435138834192,
            "unit": "iter/sec",
            "range": "stddev: 0.00037392934377375616",
            "extra": "mean: 53.272431894736066 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 345.6968496671184,
            "unit": "iter/sec",
            "range": "stddev: 0.00007973700481055466",
            "extra": "mean: 2.8927078767507695 msec\nrounds: 357"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 718.1496167413077,
            "unit": "iter/sec",
            "range": "stddev: 0.00006457847585395851",
            "extra": "mean: 1.3924674979813025 msec\nrounds: 743"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 988.1163954453285,
            "unit": "iter/sec",
            "range": "stddev: 0.00005443951331840487",
            "extra": "mean: 1.012026522998149 msec\nrounds: 1174"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 891.1830589503156,
            "unit": "iter/sec",
            "range": "stddev: 0.000025771988181674287",
            "extra": "mean: 1.1221039156397956 msec\nrounds: 1055"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1728051896275,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 238.01132040620067,
            "unit": "iter/sec",
            "range": "stddev: 0.0001041418316862878",
            "extra": "mean: 4.201480829959499 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 355.72630314716855,
            "unit": "iter/sec",
            "range": "stddev: 0.00007665429666743719",
            "extra": "mean: 2.811150008174366 msec\nrounds: 367"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 447.5904077953138,
            "unit": "iter/sec",
            "range": "stddev: 0.00005376887543891152",
            "extra": "mean: 2.2341855021551464 msec\nrounds: 464"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1121.4075696814286,
            "unit": "iter/sec",
            "range": "stddev: 0.00008583950685786916",
            "extra": "mean: 891.7364453711344 usec\nrounds: 1199"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 221.72425896899944,
            "unit": "iter/sec",
            "range": "stddev: 0.00004027750704964729",
            "extra": "mean: 4.510106402654911 msec\nrounds: 226"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 316.2771080391662,
            "unit": "iter/sec",
            "range": "stddev: 0.00003624060615531927",
            "extra": "mean: 3.1617843169230095 msec\nrounds: 325"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 434.14450621680146,
            "unit": "iter/sec",
            "range": "stddev: 0.000027589492621777964",
            "extra": "mean: 2.3033805234900835 msec\nrounds: 447"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1034.9676662324134,
            "unit": "iter/sec",
            "range": "stddev: 0.00004040546727640943",
            "extra": "mean: 966.2137597402381 usec\nrounds: 1078"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.10649571410484,
            "unit": "iter/sec",
            "range": "stddev: 0.0001963527924912068",
            "extra": "mean: 55.22879831578932 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 18.941121334919245,
            "unit": "iter/sec",
            "range": "stddev: 0.00030493065218008443",
            "extra": "mean: 52.795184736841954 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 354.24938262647424,
            "unit": "iter/sec",
            "range": "stddev: 0.00008244057907514782",
            "extra": "mean: 2.8228701277777937 msec\nrounds: 360"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 728.868787084037,
            "unit": "iter/sec",
            "range": "stddev: 0.000034625110970768444",
            "extra": "mean: 1.3719890571808808 msec\nrounds: 752"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1023.9233163111859,
            "unit": "iter/sec",
            "range": "stddev: 0.00004115234502027494",
            "extra": "mean: 976.6356367414577 usec\nrounds: 1203"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 936.4432968471389,
            "unit": "iter/sec",
            "range": "stddev: 0.000028763030121159363",
            "extra": "mean: 1.0678703167258996 msec\nrounds: 1124"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1728052593284,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 239.5523430443792,
            "unit": "iter/sec",
            "range": "stddev: 0.00006035469582001367",
            "extra": "mean: 4.174453012195088 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 350.6572228453427,
            "unit": "iter/sec",
            "range": "stddev: 0.00007830318312201066",
            "extra": "mean: 2.8517878282548588 msec\nrounds: 361"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 448.37046080555825,
            "unit": "iter/sec",
            "range": "stddev: 0.00003320339056460112",
            "extra": "mean: 2.23029857543105 msec\nrounds: 464"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1133.6040034214116,
            "unit": "iter/sec",
            "range": "stddev: 0.00002158796819809664",
            "extra": "mean: 882.1422621848795 usec\nrounds: 1190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 218.97922901848017,
            "unit": "iter/sec",
            "range": "stddev: 0.00005888716750646945",
            "extra": "mean: 4.566643167401086 msec\nrounds: 227"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 318.51593043412566,
            "unit": "iter/sec",
            "range": "stddev: 0.0001022890972946771",
            "extra": "mean: 3.1395603938460352 msec\nrounds: 325"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 436.5612047338362,
            "unit": "iter/sec",
            "range": "stddev: 0.00003251725686555832",
            "extra": "mean: 2.2906295592840937 msec\nrounds: 447"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1025.650287171317,
            "unit": "iter/sec",
            "range": "stddev: 0.000045174314094327754",
            "extra": "mean: 974.9911958372684 usec\nrounds: 1057"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.253910157124842,
            "unit": "iter/sec",
            "range": "stddev: 0.000335509629864124",
            "extra": "mean: 54.78278305263168 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.01874906320129,
            "unit": "iter/sec",
            "range": "stddev: 0.00018099038796610384",
            "extra": "mean: 52.579693684211065 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 343.627961820357,
            "unit": "iter/sec",
            "range": "stddev: 0.00014277603736819017",
            "extra": "mean: 2.9101240617979265 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 724.9657505709216,
            "unit": "iter/sec",
            "range": "stddev: 0.00003233695676052479",
            "extra": "mean: 1.379375507342912 msec\nrounds: 749"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1007.1434375817454,
            "unit": "iter/sec",
            "range": "stddev: 0.0000618852739897631",
            "extra": "mean: 992.9072291838612 usec\nrounds: 1213"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 917.171021314618,
            "unit": "iter/sec",
            "range": "stddev: 0.00004949095448752229",
            "extra": "mean: 1.0903091972603538 msec\nrounds: 1095"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1728053136374,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 237.2762091880258,
            "unit": "iter/sec",
            "range": "stddev: 0.0001969547080044573",
            "extra": "mean: 4.214497540322577 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 348.81552494185684,
            "unit": "iter/sec",
            "range": "stddev: 0.00008036760539288385",
            "extra": "mean: 2.8668448750000084 msec\nrounds: 360"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 445.3750133009027,
            "unit": "iter/sec",
            "range": "stddev: 0.00006384601213082567",
            "extra": "mean: 2.2452988383620514 msec\nrounds: 464"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1150.737606988191,
            "unit": "iter/sec",
            "range": "stddev: 0.00002134943158095893",
            "extra": "mean: 869.0078380398861 usec\nrounds: 1204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 217.37455667445997,
            "unit": "iter/sec",
            "range": "stddev: 0.00014025372494718717",
            "extra": "mean: 4.600354408071776 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 316.1763360650266,
            "unit": "iter/sec",
            "range": "stddev: 0.000031752323776935435",
            "extra": "mean: 3.162792043343605 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 425.9047166238867,
            "unit": "iter/sec",
            "range": "stddev: 0.00010364306140287081",
            "extra": "mean: 2.3479430045455274 msec\nrounds: 440"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1030.479580281733,
            "unit": "iter/sec",
            "range": "stddev: 0.00002029429469400159",
            "extra": "mean: 970.4219463782099 usec\nrounds: 1063"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.0175170302352,
            "unit": "iter/sec",
            "range": "stddev: 0.0006633473068624733",
            "extra": "mean: 55.50154321052671 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 18.885765950780346,
            "unit": "iter/sec",
            "range": "stddev: 0.0006663777272160424",
            "extra": "mean: 52.94993078947273 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 348.80570942695556,
            "unit": "iter/sec",
            "range": "stddev: 0.000037488087699864275",
            "extra": "mean: 2.8669255490194696 msec\nrounds: 357"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 733.7221106131368,
            "unit": "iter/sec",
            "range": "stddev: 0.000023243829046643796",
            "extra": "mean: 1.3629138137384837 msec\nrounds: 757"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1034.2425885205766,
            "unit": "iter/sec",
            "range": "stddev: 0.00005249794828085357",
            "extra": "mean: 966.8911443981837 usec\nrounds: 1205"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 926.2588122298622,
            "unit": "iter/sec",
            "range": "stddev: 0.00004607446551632658",
            "extra": "mean: 1.0796118609577534 msec\nrounds: 1086"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1728053519131,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 233.73675813210582,
            "unit": "iter/sec",
            "range": "stddev: 0.00013269998063595488",
            "extra": "mean: 4.278317231707344 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 349.5766792438934,
            "unit": "iter/sec",
            "range": "stddev: 0.00004673647975062121",
            "extra": "mean: 2.860602721448469 msec\nrounds: 359"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 445.5643457818465,
            "unit": "iter/sec",
            "range": "stddev: 0.00004128781349484211",
            "extra": "mean: 2.2443447494553608 msec\nrounds: 459"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1125.0760932651647,
            "unit": "iter/sec",
            "range": "stddev: 0.000019505925736345068",
            "extra": "mean: 888.8287698815355 usec\nrounds: 1182"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 214.7616894156352,
            "unit": "iter/sec",
            "range": "stddev: 0.00005366900429296382",
            "extra": "mean: 4.656323959459398 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 308.57060581288084,
            "unit": "iter/sec",
            "range": "stddev: 0.000044179534889117345",
            "extra": "mean: 3.2407493817036035 msec\nrounds: 317"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 421.8173369959793,
            "unit": "iter/sec",
            "range": "stddev: 0.00007915651169151135",
            "extra": "mean: 2.370694403225849 msec\nrounds: 434"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1003.6268023523014,
            "unit": "iter/sec",
            "range": "stddev: 0.00003966268139895099",
            "extra": "mean: 996.3863038095426 usec\nrounds: 1050"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.74013989859393,
            "unit": "iter/sec",
            "range": "stddev: 0.002637529838599023",
            "extra": "mean: 56.36934126315764 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 18.830602442558156,
            "unit": "iter/sec",
            "range": "stddev: 0.00023989297985099942",
            "extra": "mean: 53.105045526315564 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 347.4908730445407,
            "unit": "iter/sec",
            "range": "stddev: 0.00006411909170017362",
            "extra": "mean: 2.877773425352159 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 719.5389728280442,
            "unit": "iter/sec",
            "range": "stddev: 0.000058631406712377333",
            "extra": "mean: 1.389778785810092 msec\nrounds: 747"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1022.7335821819848,
            "unit": "iter/sec",
            "range": "stddev: 0.000051366071273513305",
            "extra": "mean: 977.7717456647086 usec\nrounds: 1211"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 914.8501900175822,
            "unit": "iter/sec",
            "range": "stddev: 0.00002525249851951157",
            "extra": "mean: 1.0930751405110177 msec\nrounds: 1096"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1728397103096,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 237.8664056516003,
            "unit": "iter/sec",
            "range": "stddev: 0.00014004960562527202",
            "extra": "mean: 4.204040487603308 msec\nrounds: 242"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 343.0702841094761,
            "unit": "iter/sec",
            "range": "stddev: 0.00013778004482402887",
            "extra": "mean: 2.9148546123595276 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 441.86860747244305,
            "unit": "iter/sec",
            "range": "stddev: 0.000043525534608364184",
            "extra": "mean: 2.2631161913043676 msec\nrounds: 460"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1144.0361778255485,
            "unit": "iter/sec",
            "range": "stddev: 0.000055454554014340366",
            "extra": "mean: 874.0982316666631 usec\nrounds: 1200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 216.71498491726112,
            "unit": "iter/sec",
            "range": "stddev: 0.00018471780028361427",
            "extra": "mean: 4.614355580357245 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 308.17993245457114,
            "unit": "iter/sec",
            "range": "stddev: 0.00022328904884644205",
            "extra": "mean: 3.244857613003112 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 422.9023579571196,
            "unit": "iter/sec",
            "range": "stddev: 0.00017978498621765997",
            "extra": "mean: 2.3646120225732945 msec\nrounds: 443"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1025.7172189389933,
            "unit": "iter/sec",
            "range": "stddev: 0.000028522976492166938",
            "extra": "mean: 974.9275741265266 usec\nrounds: 1059"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.770268423982436,
            "unit": "iter/sec",
            "range": "stddev: 0.0013616203660268965",
            "extra": "mean: 56.2737701052629 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 18.687597581163317,
            "unit": "iter/sec",
            "range": "stddev: 0.0011377410108834006",
            "extra": "mean: 53.511426263158505 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 342.63045532182707,
            "unit": "iter/sec",
            "range": "stddev: 0.00008712155398007684",
            "extra": "mean: 2.9185963607955303 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 715.2967975177974,
            "unit": "iter/sec",
            "range": "stddev: 0.000032798343475906686",
            "extra": "mean: 1.398021078061822 msec\nrounds: 743"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1015.4299647698878,
            "unit": "iter/sec",
            "range": "stddev: 0.00004367812614760051",
            "extra": "mean: 984.8045012406301 usec\nrounds: 1209"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 923.3321519425828,
            "unit": "iter/sec",
            "range": "stddev: 0.000034285628871086114",
            "extra": "mean: 1.0830338766998604 msec\nrounds: 1103"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1728399208447,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 239.55137449597797,
            "unit": "iter/sec",
            "range": "stddev: 0.00010030152778478377",
            "extra": "mean: 4.1744698902438975 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 353.52300150714916,
            "unit": "iter/sec",
            "range": "stddev: 0.00008598810991902361",
            "extra": "mean: 2.8286702583333247 msec\nrounds: 360"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 452.1036854277589,
            "unit": "iter/sec",
            "range": "stddev: 0.00006681865639883067",
            "extra": "mean: 2.211881991304379 msec\nrounds: 460"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1119.6073043413132,
            "unit": "iter/sec",
            "range": "stddev: 0.00001856660297842103",
            "extra": "mean: 893.1703072340347 usec\nrounds: 1175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 219.21751281578094,
            "unit": "iter/sec",
            "range": "stddev: 0.000040844947103483744",
            "extra": "mean: 4.561679343750006 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 317.23118133787654,
            "unit": "iter/sec",
            "range": "stddev: 0.00012380870128239182",
            "extra": "mean: 3.1522752453987812 msec\nrounds: 326"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 436.2288298652206,
            "unit": "iter/sec",
            "range": "stddev: 0.00003429020317924398",
            "extra": "mean: 2.2923748536037034 msec\nrounds: 444"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1003.9048681109689,
            "unit": "iter/sec",
            "range": "stddev: 0.00003794639705535835",
            "extra": "mean: 996.1103205741828 usec\nrounds: 1045"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.069517754366636,
            "unit": "iter/sec",
            "range": "stddev: 0.0008403317839035064",
            "extra": "mean: 55.341820052632144 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 18.828594212671373,
            "unit": "iter/sec",
            "range": "stddev: 0.00032835443997645197",
            "extra": "mean: 53.11070963157804 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 343.4223915560793,
            "unit": "iter/sec",
            "range": "stddev: 0.00005040737821011946",
            "extra": "mean: 2.911866041899323 msec\nrounds: 358"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 717.8498594578072,
            "unit": "iter/sec",
            "range": "stddev: 0.000059118034983648606",
            "extra": "mean: 1.3930489597856874 msec\nrounds: 746"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1013.6811543913343,
            "unit": "iter/sec",
            "range": "stddev: 0.00010479290384456356",
            "extra": "mean: 986.5034933992148 usec\nrounds: 1212"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 920.9934601727001,
            "unit": "iter/sec",
            "range": "stddev: 0.000030928546927735624",
            "extra": "mean: 1.0857840400001157 msec\nrounds: 1100"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1728400363661,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 235.44514821247765,
            "unit": "iter/sec",
            "range": "stddev: 0.00017654755064529552",
            "extra": "mean: 4.247273760330577 msec\nrounds: 242"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 349.0967078201856,
            "unit": "iter/sec",
            "range": "stddev: 0.000055969788973067175",
            "extra": "mean: 2.86453575069257 msec\nrounds: 361"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 445.5099476674857,
            "unit": "iter/sec",
            "range": "stddev: 0.000027361020007160192",
            "extra": "mean: 2.244618790748906 msec\nrounds: 454"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1137.9679159940406,
            "unit": "iter/sec",
            "range": "stddev: 0.000017500311324655968",
            "extra": "mean: 878.7593972950261 usec\nrounds: 1183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 214.873786922059,
            "unit": "iter/sec",
            "range": "stddev: 0.00012058025597545035",
            "extra": "mean: 4.653894801801623 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 313.22074755165306,
            "unit": "iter/sec",
            "range": "stddev: 0.00004441527562293419",
            "extra": "mean: 3.1926365281249147 msec\nrounds: 320"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 424.7485000612771,
            "unit": "iter/sec",
            "range": "stddev: 0.00006761675254914613",
            "extra": "mean: 2.3543343881278758 msec\nrounds: 438"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1022.2273619526726,
            "unit": "iter/sec",
            "range": "stddev: 0.000033460566824597514",
            "extra": "mean: 978.2559508970553 usec\nrounds: 1059"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.12993950738641,
            "unit": "iter/sec",
            "range": "stddev: 0.0005598401066300861",
            "extra": "mean: 55.15738205263095 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 18.884513588944714,
            "unit": "iter/sec",
            "range": "stddev: 0.0005680272786284234",
            "extra": "mean: 52.95344226315766 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 341.05505452411523,
            "unit": "iter/sec",
            "range": "stddev: 0.00008911420558156726",
            "extra": "mean: 2.9320779350282065 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 722.2198583481799,
            "unit": "iter/sec",
            "range": "stddev: 0.00003960274108990515",
            "extra": "mean: 1.3846199165544175 msec\nrounds: 743"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1028.795483420589,
            "unit": "iter/sec",
            "range": "stddev: 0.000043756361264840314",
            "extra": "mean: 972.01048810513 usec\nrounds: 1219"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 942.5831375027299,
            "unit": "iter/sec",
            "range": "stddev: 0.00002633002180463243",
            "extra": "mean: 1.0609143747780059 msec\nrounds: 1126"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1728401000202,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 235.77582746751628,
            "unit": "iter/sec",
            "range": "stddev: 0.00018871638523050395",
            "extra": "mean: 4.241316893004114 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 327.6840753906682,
            "unit": "iter/sec",
            "range": "stddev: 0.00007158805825002605",
            "extra": "mean: 3.0517198579387483 msec\nrounds: 359"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 424.48249286092323,
            "unit": "iter/sec",
            "range": "stddev: 0.000035935416873880936",
            "extra": "mean: 2.3558097608695454 msec\nrounds: 460"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1115.0500948437582,
            "unit": "iter/sec",
            "range": "stddev: 0.00005126176760963958",
            "extra": "mean: 896.8206940873996 usec\nrounds: 1167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 218.52114711329847,
            "unit": "iter/sec",
            "range": "stddev: 0.00013100417612344647",
            "extra": "mean: 4.5762161383928746 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 311.97651528926724,
            "unit": "iter/sec",
            "range": "stddev: 0.00007555975234107434",
            "extra": "mean: 3.205369478124953 msec\nrounds: 320"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 434.66501618687477,
            "unit": "iter/sec",
            "range": "stddev: 0.00003307041631365763",
            "extra": "mean: 2.300622232662202 msec\nrounds: 447"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1006.2308985177934,
            "unit": "iter/sec",
            "range": "stddev: 0.000040742968291904174",
            "extra": "mean: 993.807685167518 usec\nrounds: 1045"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.64022264742573,
            "unit": "iter/sec",
            "range": "stddev: 0.0005866443162067955",
            "extra": "mean: 56.6886268947366 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 18.36957382439812,
            "unit": "iter/sec",
            "range": "stddev: 0.0004549823346253044",
            "extra": "mean: 54.43784431579022 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 349.2060603242855,
            "unit": "iter/sec",
            "range": "stddev: 0.00004403237780380494",
            "extra": "mean: 2.8636387325906187 msec\nrounds: 359"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 706.7377411134507,
            "unit": "iter/sec",
            "range": "stddev: 0.00003935352625206074",
            "extra": "mean: 1.414952027925551 msec\nrounds: 752"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1022.9230492063326,
            "unit": "iter/sec",
            "range": "stddev: 0.00005685992957437513",
            "extra": "mean: 977.5906416185283 usec\nrounds: 1211"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 908.8663452946771,
            "unit": "iter/sec",
            "range": "stddev: 0.000053148730136133154",
            "extra": "mean: 1.1002717893308889 msec\nrounds: 1106"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1728403496080,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 241.29920328853197,
            "unit": "iter/sec",
            "range": "stddev: 0.000052742484780996566",
            "extra": "mean: 4.14423249795921 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 345.1918520439382,
            "unit": "iter/sec",
            "range": "stddev: 0.00004531058075791343",
            "extra": "mean: 2.8969397570621505 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 449.9442330723696,
            "unit": "iter/sec",
            "range": "stddev: 0.00003341677513155508",
            "extra": "mean: 2.2224976485900614 msec\nrounds: 461"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1111.3367010043082,
            "unit": "iter/sec",
            "range": "stddev: 0.00009717296123850788",
            "extra": "mean: 899.8173092783727 usec\nrounds: 1164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 221.22137858999722,
            "unit": "iter/sec",
            "range": "stddev: 0.0002090766606143239",
            "extra": "mean: 4.520358775330479 msec\nrounds: 227"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 309.9560653737691,
            "unit": "iter/sec",
            "range": "stddev: 0.000047908064027578144",
            "extra": "mean: 3.2262636925466275 msec\nrounds: 322"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 429.93142698576565,
            "unit": "iter/sec",
            "range": "stddev: 0.00010130984053216897",
            "extra": "mean: 2.325952319910562 msec\nrounds: 447"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1014.360907547599,
            "unit": "iter/sec",
            "range": "stddev: 0.000026464867195473166",
            "extra": "mean: 985.8424083176479 usec\nrounds: 1058"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.179401295653008,
            "unit": "iter/sec",
            "range": "stddev: 0.00013503100317792686",
            "extra": "mean: 55.00731205263159 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 18.714096974175806,
            "unit": "iter/sec",
            "range": "stddev: 0.0011037931774725857",
            "extra": "mean: 53.43565342105113 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 347.9225156146459,
            "unit": "iter/sec",
            "range": "stddev: 0.00004623413375763327",
            "extra": "mean: 2.8742031777776234 msec\nrounds: 360"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 710.3837405348893,
            "unit": "iter/sec",
            "range": "stddev: 0.000028048075388399072",
            "extra": "mean: 1.407689876526512 msec\nrounds: 737"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1011.792513111615,
            "unit": "iter/sec",
            "range": "stddev: 0.00007536048904077293",
            "extra": "mean: 988.3449294605384 usec\nrounds: 1205"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 916.88713217758,
            "unit": "iter/sec",
            "range": "stddev: 0.00005152689329891456",
            "extra": "mean: 1.0906467818182042 msec\nrounds: 1100"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1728480112143,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 227.0435385480166,
            "unit": "iter/sec",
            "range": "stddev: 0.00004489488122253277",
            "extra": "mean: 4.40444157272731 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 323.93661034871343,
            "unit": "iter/sec",
            "range": "stddev: 0.00030747780744924403",
            "extra": "mean: 3.0870237202380846 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 415.07512654682876,
            "unit": "iter/sec",
            "range": "stddev: 0.00003144580921614007",
            "extra": "mean: 2.409202421545681 msec\nrounds: 427"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 991.3803569222887,
            "unit": "iter/sec",
            "range": "stddev: 0.00005250449951661446",
            "extra": "mean: 1.0086945873170927 msec\nrounds: 1025"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 207.98665122711208,
            "unit": "iter/sec",
            "range": "stddev: 0.00007340822319993191",
            "extra": "mean: 4.808000869767574 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 296.96623649603214,
            "unit": "iter/sec",
            "range": "stddev: 0.000040079690040175485",
            "extra": "mean: 3.3673861776315483 msec\nrounds: 304"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 401.014984652233,
            "unit": "iter/sec",
            "range": "stddev: 0.00007355658140347533",
            "extra": "mean: 2.4936724019607817 msec\nrounds: 408"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 914.903853219439,
            "unit": "iter/sec",
            "range": "stddev: 0.000018794602053453397",
            "extra": "mean: 1.0930110267664932 msec\nrounds: 934"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 16.586497942825428,
            "unit": "iter/sec",
            "range": "stddev: 0.0003012176408589162",
            "extra": "mean: 60.29000235294124 msec\nrounds: 17"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.459133808025694,
            "unit": "iter/sec",
            "range": "stddev: 0.0008544409212313068",
            "extra": "mean: 57.27661011111075 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 324.86581417545017,
            "unit": "iter/sec",
            "range": "stddev: 0.00007836147534594127",
            "extra": "mean: 3.078194000000044 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 662.5251143540875,
            "unit": "iter/sec",
            "range": "stddev: 0.00006128966894984936",
            "extra": "mean: 1.509376744117731 msec\nrounds: 680"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 901.0987405527023,
            "unit": "iter/sec",
            "range": "stddev: 0.0000557717397691597",
            "extra": "mean: 1.109756295283062 msec\nrounds: 1060"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 821.5655632947196,
            "unit": "iter/sec",
            "range": "stddev: 0.000053336870355243076",
            "extra": "mean: 1.2171883105588137 msec\nrounds: 966"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1728482855585,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 218.70527989616525,
            "unit": "iter/sec",
            "range": "stddev: 0.000047359651539289024",
            "extra": "mean: 4.572363321428592 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 327.93879244975705,
            "unit": "iter/sec",
            "range": "stddev: 0.00010716239566842332",
            "extra": "mean: 3.0493495219941336 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 412.46595547395646,
            "unit": "iter/sec",
            "range": "stddev: 0.0001875625144182108",
            "extra": "mean: 2.4244425187793253 msec\nrounds: 426"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 994.6965099171958,
            "unit": "iter/sec",
            "range": "stddev: 0.00003043224063428103",
            "extra": "mean: 1.0053317670565123 msec\nrounds: 1026"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 213.70904504850787,
            "unit": "iter/sec",
            "range": "stddev: 0.00004607959978655463",
            "extra": "mean: 4.679259129032275 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 296.1073780574786,
            "unit": "iter/sec",
            "range": "stddev: 0.0001301981419614348",
            "extra": "mean: 3.3771532697367834 msec\nrounds: 304"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 399.5508193304701,
            "unit": "iter/sec",
            "range": "stddev: 0.0000322860437808131",
            "extra": "mean: 2.502810535279859 msec\nrounds: 411"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 902.9069953988953,
            "unit": "iter/sec",
            "range": "stddev: 0.00004594959432340087",
            "extra": "mean: 1.1075337826552225 msec\nrounds: 934"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.085121684038043,
            "unit": "iter/sec",
            "range": "stddev: 0.0008400491327722422",
            "extra": "mean: 58.53045816666677 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.815060361918196,
            "unit": "iter/sec",
            "range": "stddev: 0.00023495249409515904",
            "extra": "mean: 56.13228244444338 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 324.28654063903076,
            "unit": "iter/sec",
            "range": "stddev: 0.00003951245012630864",
            "extra": "mean: 3.083692582582754 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 644.1730652969791,
            "unit": "iter/sec",
            "range": "stddev: 0.0001346717812651516",
            "extra": "mean: 1.5523778528973051 msec\nrounds: 673"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 907.57535952372,
            "unit": "iter/sec",
            "range": "stddev: 0.00005307826714471615",
            "extra": "mean: 1.1018368772426599 msec\nrounds: 1059"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 828.1951573888388,
            "unit": "iter/sec",
            "range": "stddev: 0.00005718973418320445",
            "extra": "mean: 1.2074448770659725 msec\nrounds: 968"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1728483572719,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 234.12174820776883,
            "unit": "iter/sec",
            "range": "stddev: 0.00003292016596874027",
            "extra": "mean: 4.271281961864392 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 329.56355150571295,
            "unit": "iter/sec",
            "range": "stddev: 0.00005533679360554692",
            "extra": "mean: 3.034316129411735 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 416.7587114556189,
            "unit": "iter/sec",
            "range": "stddev: 0.000047259319149147556",
            "extra": "mean: 2.399469939110058 msec\nrounds: 427"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 962.1228737630264,
            "unit": "iter/sec",
            "range": "stddev: 0.00004569912265997858",
            "extra": "mean: 1.0393682836879552 msec\nrounds: 987"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 211.76890070911566,
            "unit": "iter/sec",
            "range": "stddev: 0.0000602471102868211",
            "extra": "mean: 4.7221286820277415 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 298.47775659106856,
            "unit": "iter/sec",
            "range": "stddev: 0.00003849568578932788",
            "extra": "mean: 3.3503334098361535 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 399.8503119982919,
            "unit": "iter/sec",
            "range": "stddev: 0.000031148181743825854",
            "extra": "mean: 2.5009359002432685 msec\nrounds: 411"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 885.1315923131405,
            "unit": "iter/sec",
            "range": "stddev: 0.000042589920376428806",
            "extra": "mean: 1.1297755143804895 msec\nrounds: 904"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.114574070436582,
            "unit": "iter/sec",
            "range": "stddev: 0.0005471130612728969",
            "extra": "mean: 58.42973338888887 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.821401629535654,
            "unit": "iter/sec",
            "range": "stddev: 0.0001499555385260795",
            "extra": "mean: 56.11230927777792 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 325.2973899627871,
            "unit": "iter/sec",
            "range": "stddev: 0.0000856285715374399",
            "extra": "mean: 3.0741101246290246 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 645.8214347258029,
            "unit": "iter/sec",
            "range": "stddev: 0.0000589053437543656",
            "extra": "mean: 1.5484156242422817 msec\nrounds: 660"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 886.2285046499046,
            "unit": "iter/sec",
            "range": "stddev: 0.000040950354095842985",
            "extra": "mean: 1.1283771564028395 msec\nrounds: 1023"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 811.5532584319292,
            "unit": "iter/sec",
            "range": "stddev: 0.00002358054718119523",
            "extra": "mean: 1.232205021186391 msec\nrounds: 944"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1728568274487,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 227.10566040068193,
            "unit": "iter/sec",
            "range": "stddev: 0.00010832112861872325",
            "extra": "mean: 4.4032367939914066 msec\nrounds: 233"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 327.3129831639657,
            "unit": "iter/sec",
            "range": "stddev: 0.00008937953030747538",
            "extra": "mean: 3.055179755882324 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 414.398049546889,
            "unit": "iter/sec",
            "range": "stddev: 0.00008216786668117938",
            "extra": "mean: 2.413138771028048 msec\nrounds: 428"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 995.7414876790605,
            "unit": "iter/sec",
            "range": "stddev: 0.000033318252372554985",
            "extra": "mean: 1.00427672480622 msec\nrounds: 1032"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 210.61370384918038,
            "unit": "iter/sec",
            "range": "stddev: 0.00011788767726745259",
            "extra": "mean: 4.748029124999843 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 294.0103750770621,
            "unit": "iter/sec",
            "range": "stddev: 0.00011648492525132303",
            "extra": "mean: 3.401240516556238 msec\nrounds: 302"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 397.3594053186291,
            "unit": "iter/sec",
            "range": "stddev: 0.00003739451169619869",
            "extra": "mean: 2.5166133898306335 msec\nrounds: 413"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 893.8164619611242,
            "unit": "iter/sec",
            "range": "stddev: 0.00004551549467285552",
            "extra": "mean: 1.1187979216738728 msec\nrounds: 932"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.117620732426342,
            "unit": "iter/sec",
            "range": "stddev: 0.0005371714974969841",
            "extra": "mean: 58.4193338333332 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.635937082901176,
            "unit": "iter/sec",
            "range": "stddev: 0.0005157225901833491",
            "extra": "mean: 56.70240233333246 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 330.7108606203386,
            "unit": "iter/sec",
            "range": "stddev: 0.00003722442000608595",
            "extra": "mean: 3.023789415697527 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 664.2814727202775,
            "unit": "iter/sec",
            "range": "stddev: 0.00003067623399019261",
            "extra": "mean: 1.5053859562045777 msec\nrounds: 685"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 902.8393815794618,
            "unit": "iter/sec",
            "range": "stddev: 0.000038225309887733835",
            "extra": "mean: 1.1076167260787426 msec\nrounds: 1066"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 826.6745207542955,
            "unit": "iter/sec",
            "range": "stddev: 0.00005511465740822471",
            "extra": "mean: 1.2096659264247729 msec\nrounds: 965"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1728912738082,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 225.1995735437602,
            "unit": "iter/sec",
            "range": "stddev: 0.00006810630824577376",
            "extra": "mean: 4.440505744588733 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 332.3111614173287,
            "unit": "iter/sec",
            "range": "stddev: 0.00006263776874182962",
            "extra": "mean: 3.0092278445747502 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 410.43817581898145,
            "unit": "iter/sec",
            "range": "stddev: 0.000044468629524288785",
            "extra": "mean: 2.436420535211221 msec\nrounds: 426"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1003.5452789516826,
            "unit": "iter/sec",
            "range": "stddev: 0.0000239906999290781",
            "extra": "mean: 996.4672456479632 usec\nrounds: 1034"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 209.97828321192497,
            "unit": "iter/sec",
            "range": "stddev: 0.000049486635845948254",
            "extra": "mean: 4.762397257009331 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 297.26176293960805,
            "unit": "iter/sec",
            "range": "stddev: 0.00006726608147467525",
            "extra": "mean: 3.364038449180431 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 393.44981697393007,
            "unit": "iter/sec",
            "range": "stddev: 0.00012479674419440065",
            "extra": "mean: 2.5416201936275393 msec\nrounds: 408"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 922.6800867190198,
            "unit": "iter/sec",
            "range": "stddev: 0.00004390189323258131",
            "extra": "mean: 1.0837992651991917 msec\nrounds: 954"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 16.850051976278817,
            "unit": "iter/sec",
            "range": "stddev: 0.00012494945409590268",
            "extra": "mean: 59.34699794444439 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.646489879934936,
            "unit": "iter/sec",
            "range": "stddev: 0.00022330779790018468",
            "extra": "mean: 56.66849366666722 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 324.4407422107816,
            "unit": "iter/sec",
            "range": "stddev: 0.00003590401734108336",
            "extra": "mean: 3.0822269520956875 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 659.2048556202188,
            "unit": "iter/sec",
            "range": "stddev: 0.0000599662961891617",
            "extra": "mean: 1.5169791173020728 msec\nrounds: 682"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 908.2542328579244,
            "unit": "iter/sec",
            "range": "stddev: 0.000042517432858422194",
            "extra": "mean: 1.101013310836314 msec\nrounds: 1052"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 833.9686870947359,
            "unit": "iter/sec",
            "range": "stddev: 0.00004785358730857461",
            "extra": "mean: 1.1990857876015235 msec\nrounds: 984"
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
        "date": 1728977967362,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 226.8863664805205,
            "unit": "iter/sec",
            "range": "stddev: 0.00018545497556825014",
            "extra": "mean: 4.4074926824034435 msec\nrounds: 233"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 322.585954991376,
            "unit": "iter/sec",
            "range": "stddev: 0.00033144736459301557",
            "extra": "mean: 3.099948973372799 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 414.5365746943234,
            "unit": "iter/sec",
            "range": "stddev: 0.00003914876661475567",
            "extra": "mean: 2.412332375586867 msec\nrounds: 426"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 982.0829648206815,
            "unit": "iter/sec",
            "range": "stddev: 0.00011525923479168165",
            "extra": "mean: 1.0182439119922928 msec\nrounds: 1034"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 211.5232219903465,
            "unit": "iter/sec",
            "range": "stddev: 0.00006482730875656453",
            "extra": "mean: 4.727613311627969 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 299.5065120561795,
            "unit": "iter/sec",
            "range": "stddev: 0.00003729831163000853",
            "extra": "mean: 3.3388255672131315 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 398.7608116721997,
            "unit": "iter/sec",
            "range": "stddev: 0.0001683061267015982",
            "extra": "mean: 2.5077689951690827 msec\nrounds: 414"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 895.567090464,
            "unit": "iter/sec",
            "range": "stddev: 0.0001167222190041067",
            "extra": "mean: 1.1166109280343168 msec\nrounds: 931"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.03763043316533,
            "unit": "iter/sec",
            "range": "stddev: 0.0015286978961242806",
            "extra": "mean: 58.69360788888854 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.724825731827213,
            "unit": "iter/sec",
            "range": "stddev: 0.0006218779780502269",
            "extra": "mean: 56.41804411111195 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 331.97377901694597,
            "unit": "iter/sec",
            "range": "stddev: 0.00009387728060322732",
            "extra": "mean: 3.0122860997071514 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 650.2531550282565,
            "unit": "iter/sec",
            "range": "stddev: 0.00003056011597511923",
            "extra": "mean: 1.5378625882354162 msec\nrounds: 680"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 918.3397738353119,
            "unit": "iter/sec",
            "range": "stddev: 0.00004908749717917427",
            "extra": "mean: 1.088921582720572 msec\nrounds: 1088"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 838.3482649087016,
            "unit": "iter/sec",
            "range": "stddev: 0.000026865530391781264",
            "extra": "mean: 1.1928216969696988 msec\nrounds: 990"
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
        "date": 1728979033290,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 229.36270195134708,
            "unit": "iter/sec",
            "range": "stddev: 0.00011623814700606327",
            "extra": "mean: 4.359906782978699 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 327.99771875063675,
            "unit": "iter/sec",
            "range": "stddev: 0.00009214633106787397",
            "extra": "mean: 3.0488016923076806 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 413.52107308106406,
            "unit": "iter/sec",
            "range": "stddev: 0.0000440149202150924",
            "extra": "mean: 2.418256444705942 msec\nrounds: 425"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 977.959962261502,
            "unit": "iter/sec",
            "range": "stddev: 0.000046015609208444635",
            "extra": "mean: 1.0225367485265255 msec\nrounds: 1018"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 208.39797911810592,
            "unit": "iter/sec",
            "range": "stddev: 0.00006682729390431788",
            "extra": "mean: 4.798511023148009 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 296.3647926702184,
            "unit": "iter/sec",
            "range": "stddev: 0.00004390301940772357",
            "extra": "mean: 3.374219963815863 msec\nrounds: 304"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 394.9011360311789,
            "unit": "iter/sec",
            "range": "stddev: 0.00003696463617950735",
            "extra": "mean: 2.532279370097953 msec\nrounds: 408"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 898.4416905239528,
            "unit": "iter/sec",
            "range": "stddev: 0.00004635805147361529",
            "extra": "mean: 1.1130382867883397 msec\nrounds: 931"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 16.937442470855853,
            "unit": "iter/sec",
            "range": "stddev: 0.0006610487820664999",
            "extra": "mean: 59.04079094117625 msec\nrounds: 17"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.369681410427813,
            "unit": "iter/sec",
            "range": "stddev: 0.000113385710903722",
            "extra": "mean: 57.57157983333272 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 327.3999265024207,
            "unit": "iter/sec",
            "range": "stddev: 0.00003875388219752071",
            "extra": "mean: 3.054368431547605 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 645.1998770639076,
            "unit": "iter/sec",
            "range": "stddev: 0.00003164946474447136",
            "extra": "mean: 1.5499073008982442 msec\nrounds: 668"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 902.9490687023265,
            "unit": "iter/sec",
            "range": "stddev: 0.00004002527217896183",
            "extra": "mean: 1.1074821766383238 msec\nrounds: 1053"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 818.2758958406293,
            "unit": "iter/sec",
            "range": "stddev: 0.00005233415380202258",
            "extra": "mean: 1.2220817026177733 msec\nrounds: 955"
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
        "date": 1728998923102,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 227.8189986741742,
            "unit": "iter/sec",
            "range": "stddev: 0.0001745442733947468",
            "extra": "mean: 4.389449544680845 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 329.83961412211477,
            "unit": "iter/sec",
            "range": "stddev: 0.00007917369488683476",
            "extra": "mean: 3.0317765276968074 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 417.1307468017151,
            "unit": "iter/sec",
            "range": "stddev: 0.000057428600566030344",
            "extra": "mean: 2.3973298723897583 msec\nrounds: 431"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 988.9967444459494,
            "unit": "iter/sec",
            "range": "stddev: 0.00005044280111634529",
            "extra": "mean: 1.0111256741903785 msec\nrounds: 1019"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 210.46260080307323,
            "unit": "iter/sec",
            "range": "stddev: 0.00013593712228804868",
            "extra": "mean: 4.751438004587263 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 295.92548125221884,
            "unit": "iter/sec",
            "range": "stddev: 0.000054794611933614774",
            "extra": "mean: 3.379229107843183 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 400.4900663445235,
            "unit": "iter/sec",
            "range": "stddev: 0.00010891653232825914",
            "extra": "mean: 2.496940833333292 msec\nrounds: 414"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 907.2226791385214,
            "unit": "iter/sec",
            "range": "stddev: 0.00003493911266527567",
            "extra": "mean: 1.1022652133758142 msec\nrounds: 942"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 16.981856207453433,
            "unit": "iter/sec",
            "range": "stddev: 0.0004192401117428668",
            "extra": "mean: 58.886377777777575 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.785855946669194,
            "unit": "iter/sec",
            "range": "stddev: 0.00013785247596603126",
            "extra": "mean: 56.22445177777754 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 329.0205188246824,
            "unit": "iter/sec",
            "range": "stddev: 0.00006671340477153821",
            "extra": "mean: 3.0393241235293504 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 655.6758781610843,
            "unit": "iter/sec",
            "range": "stddev: 0.00006086029059928892",
            "extra": "mean: 1.5251437994098715 msec\nrounds: 678"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 911.4451323744771,
            "unit": "iter/sec",
            "range": "stddev: 0.0000428778027485563",
            "extra": "mean: 1.0971587476635283 msec\nrounds: 1070"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 816.7223524188736,
            "unit": "iter/sec",
            "range": "stddev: 0.00005476616035193427",
            "extra": "mean: 1.2244063077719325 msec\nrounds: 965"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1728999960879,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 227.1793037899471,
            "unit": "iter/sec",
            "range": "stddev: 0.00016536220872371665",
            "extra": "mean: 4.401809422413816 msec\nrounds: 232"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 326.08593312480764,
            "unit": "iter/sec",
            "range": "stddev: 0.00013773382522541816",
            "extra": "mean: 3.0666762911764587 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 404.6808715272114,
            "unit": "iter/sec",
            "range": "stddev: 0.00019385046408786758",
            "extra": "mean: 2.4710829454976064 msec\nrounds: 422"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 971.7224094452282,
            "unit": "iter/sec",
            "range": "stddev: 0.00004931468324791217",
            "extra": "mean: 1.029100482071743 msec\nrounds: 1004"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 211.88134003094007,
            "unit": "iter/sec",
            "range": "stddev: 0.000053070854590163926",
            "extra": "mean: 4.719622784403642 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 295.5155583045727,
            "unit": "iter/sec",
            "range": "stddev: 0.00007527113805957707",
            "extra": "mean: 3.383916588815778 msec\nrounds: 304"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 396.1639535428348,
            "unit": "iter/sec",
            "range": "stddev: 0.000035302802090168916",
            "extra": "mean: 2.5242074425427905 msec\nrounds: 409"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 894.9845766899579,
            "unit": "iter/sec",
            "range": "stddev: 0.000042896027916235937",
            "extra": "mean: 1.1173376905537689 msec\nrounds: 921"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.027153789584922,
            "unit": "iter/sec",
            "range": "stddev: 0.00048710907510729067",
            "extra": "mean: 58.72972150000047 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.593304637252718,
            "unit": "iter/sec",
            "range": "stddev: 0.0005617651468626237",
            "extra": "mean: 56.83980472222158 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 328.9462312803277,
            "unit": "iter/sec",
            "range": "stddev: 0.000043442300188897315",
            "extra": "mean: 3.040010509036052 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 654.5524431244086,
            "unit": "iter/sec",
            "range": "stddev: 0.000029879928585781574",
            "extra": "mean: 1.527761465875292 msec\nrounds: 674"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 904.5411912291801,
            "unit": "iter/sec",
            "range": "stddev: 0.00005125698572844181",
            "extra": "mean: 1.1055328488038239 msec\nrounds: 1045"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 821.9618037095717,
            "unit": "iter/sec",
            "range": "stddev: 0.00004942863630079584",
            "extra": "mean: 1.2166015446057583 msec\nrounds: 964"
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
        "date": 1729003684345,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 228.9927741622447,
            "unit": "iter/sec",
            "range": "stddev: 0.0001090145737888084",
            "extra": "mean: 4.366950021276591 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 331.6385797056503,
            "unit": "iter/sec",
            "range": "stddev: 0.0000446872032696862",
            "extra": "mean: 3.0153307280701833 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 416.93097626144197,
            "unit": "iter/sec",
            "range": "stddev: 0.00007951588581280036",
            "extra": "mean: 2.3984785418604564 msec\nrounds: 430"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 999.2136227518217,
            "unit": "iter/sec",
            "range": "stddev: 0.000040051572331889956",
            "extra": "mean: 1.0007869961240248 msec\nrounds: 1032"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 209.21057883636684,
            "unit": "iter/sec",
            "range": "stddev: 0.00014346344540748968",
            "extra": "mean: 4.779873013888775 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 296.7485666850321,
            "unit": "iter/sec",
            "range": "stddev: 0.0000922992795239856",
            "extra": "mean: 3.3698562091502757 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 402.2086075160258,
            "unit": "iter/sec",
            "range": "stddev: 0.00008044465683866666",
            "extra": "mean: 2.4862720024214187 msec\nrounds: 413"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 921.5038052063258,
            "unit": "iter/sec",
            "range": "stddev: 0.00001984348579852387",
            "extra": "mean: 1.0851827136797323 msec\nrounds: 943"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.127257929944726,
            "unit": "iter/sec",
            "range": "stddev: 0.0003086857018786259",
            "extra": "mean: 58.38646233333319 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.58349541848226,
            "unit": "iter/sec",
            "range": "stddev: 0.0022482267584425022",
            "extra": "mean: 56.87151366666754 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 330.9317199110319,
            "unit": "iter/sec",
            "range": "stddev: 0.00004079967529977323",
            "extra": "mean: 3.021771380116845 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 667.2655004915945,
            "unit": "iter/sec",
            "range": "stddev: 0.000028428761843615733",
            "extra": "mean: 1.4986538330893324 msec\nrounds: 683"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 929.5030343789964,
            "unit": "iter/sec",
            "range": "stddev: 0.00005343557315550901",
            "extra": "mean: 1.0758437175711888 msec\nrounds: 1087"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 840.0625696323526,
            "unit": "iter/sec",
            "range": "stddev: 0.00003017423034514369",
            "extra": "mean: 1.1903875212981372 msec\nrounds: 986"
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
        "date": 1729004068935,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 228.0381660472411,
            "unit": "iter/sec",
            "range": "stddev: 0.00012093225545985812",
            "extra": "mean: 4.385230846808499 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 329.58639958184244,
            "unit": "iter/sec",
            "range": "stddev: 0.00009385345648079523",
            "extra": "mean: 3.034105780058686 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 417.74166285009164,
            "unit": "iter/sec",
            "range": "stddev: 0.00009928232302118328",
            "extra": "mean: 2.3938239561201113 msec\nrounds: 433"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 999.8595566203113,
            "unit": "iter/sec",
            "range": "stddev: 0.000020886777156706237",
            "extra": "mean: 1.000140463106802 msec\nrounds: 1030"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 211.45661266910005,
            "unit": "iter/sec",
            "range": "stddev: 0.00006989655207919593",
            "extra": "mean: 4.729102520737244 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 294.412578628596,
            "unit": "iter/sec",
            "range": "stddev: 0.0002208392710476607",
            "extra": "mean: 3.396594006472491 msec\nrounds: 309"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 402.58940148012937,
            "unit": "iter/sec",
            "range": "stddev: 0.0001249799010000036",
            "extra": "mean: 2.483920332536019 msec\nrounds: 418"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 920.560348518023,
            "unit": "iter/sec",
            "range": "stddev: 0.000024824212331002154",
            "extra": "mean: 1.0862948872497755 msec\nrounds: 949"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.115377930878537,
            "unit": "iter/sec",
            "range": "stddev: 0.0006624290919290108",
            "extra": "mean: 58.426989111111595 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.559390947530197,
            "unit": "iter/sec",
            "range": "stddev: 0.0005120850017396577",
            "extra": "mean: 56.94958344444482 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 326.3239420437257,
            "unit": "iter/sec",
            "range": "stddev: 0.00004756844816245639",
            "extra": "mean: 3.0644395680474013 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 660.3396376868008,
            "unit": "iter/sec",
            "range": "stddev: 0.00003080760814324964",
            "extra": "mean: 1.5143722153391317 msec\nrounds: 678"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 907.74682829873,
            "unit": "iter/sec",
            "range": "stddev: 0.000052573236644145875",
            "extra": "mean: 1.1016287458411371 msec\nrounds: 1082"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 841.4852449241447,
            "unit": "iter/sec",
            "range": "stddev: 0.00003256770089404381",
            "extra": "mean: 1.1883749668006889 msec\nrounds: 994"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729004412602,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 229.82349987589538,
            "unit": "iter/sec",
            "range": "stddev: 0.0001254700755630526",
            "extra": "mean: 4.351165135593182 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 331.1756093277274,
            "unit": "iter/sec",
            "range": "stddev: 0.00009371252369695342",
            "extra": "mean: 3.019546040935678 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 414.88978577697435,
            "unit": "iter/sec",
            "range": "stddev: 0.00006371107919549441",
            "extra": "mean: 2.410278667447248 msec\nrounds: 427"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 979.1379925225773,
            "unit": "iter/sec",
            "range": "stddev: 0.00003236103742342681",
            "extra": "mean: 1.0213065039215519 msec\nrounds: 1020"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 210.48711623534862,
            "unit": "iter/sec",
            "range": "stddev: 0.00008876033259359412",
            "extra": "mean: 4.75088460465146 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 292.8884152149116,
            "unit": "iter/sec",
            "range": "stddev: 0.000127015053950452",
            "extra": "mean: 3.4142695581395177 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 395.44878664959737,
            "unit": "iter/sec",
            "range": "stddev: 0.00007728762649921964",
            "extra": "mean: 2.528772457420861 msec\nrounds: 411"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 911.8894250893602,
            "unit": "iter/sec",
            "range": "stddev: 0.000029383604405959485",
            "extra": "mean: 1.0966241876332818 msec\nrounds: 938"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 16.81265673413813,
            "unit": "iter/sec",
            "range": "stddev: 0.0005696121266164802",
            "extra": "mean: 59.478999411764484 msec\nrounds: 17"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.318181630568446,
            "unit": "iter/sec",
            "range": "stddev: 0.000192095582498975",
            "extra": "mean: 57.7427827777769 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 329.6966714447827,
            "unit": "iter/sec",
            "range": "stddev: 0.0000858504190161862",
            "extra": "mean: 3.03309097910465 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 658.045471883478,
            "unit": "iter/sec",
            "range": "stddev: 0.00005707446958707808",
            "extra": "mean: 1.5196518215341095 msec\nrounds: 678"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 893.5195096712997,
            "unit": "iter/sec",
            "range": "stddev: 0.00003995838551799731",
            "extra": "mean: 1.1191697429951715 msec\nrounds: 1035"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 825.6791006121817,
            "unit": "iter/sec",
            "range": "stddev: 0.000022156544635327993",
            "extra": "mean: 1.2111242724426132 msec\nrounds: 958"
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
        "date": 1729040990272,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 226.1784890987724,
            "unit": "iter/sec",
            "range": "stddev: 0.00037789035038878356",
            "extra": "mean: 4.421286940170949 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 323.61385471654626,
            "unit": "iter/sec",
            "range": "stddev: 0.0001950232198631553",
            "extra": "mean: 3.0901025571847076 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 411.34644645218685,
            "unit": "iter/sec",
            "range": "stddev: 0.00007146341078156182",
            "extra": "mean: 2.43104081395349 msec\nrounds: 430"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1008.7738561149088,
            "unit": "iter/sec",
            "range": "stddev: 0.000043936489616008673",
            "extra": "mean: 991.3024548944007 usec\nrounds: 1042"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 207.55039652329273,
            "unit": "iter/sec",
            "range": "stddev: 0.00011036220255995997",
            "extra": "mean: 4.818106911627958 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 292.5202788225522,
            "unit": "iter/sec",
            "range": "stddev: 0.00011602125176300273",
            "extra": "mean: 3.4185664119601675 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 395.7593163551479,
            "unit": "iter/sec",
            "range": "stddev: 0.00005044087797331591",
            "extra": "mean: 2.526788274271771 msec\nrounds: 412"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 911.9959383820353,
            "unit": "iter/sec",
            "range": "stddev: 0.00005163362916863777",
            "extra": "mean: 1.0964961113468246 msec\nrounds: 943"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 16.98625316120679,
            "unit": "iter/sec",
            "range": "stddev: 0.0004991283607272307",
            "extra": "mean: 58.87113482352897 msec\nrounds: 17"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.5740826005957,
            "unit": "iter/sec",
            "range": "stddev: 0.0007815261654182986",
            "extra": "mean: 56.90197450000056 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 330.58173737332305,
            "unit": "iter/sec",
            "range": "stddev: 0.00009831212308538962",
            "extra": "mean: 3.0249704897361247 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 662.6360684714683,
            "unit": "iter/sec",
            "range": "stddev: 0.00005241887183426221",
            "extra": "mean: 1.509124008759052 msec\nrounds: 685"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 912.2816012499201,
            "unit": "iter/sec",
            "range": "stddev: 0.00006130985673402143",
            "extra": "mean: 1.0961527653631253 msec\nrounds: 1074"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 820.9913865339954,
            "unit": "iter/sec",
            "range": "stddev: 0.000034058443551167825",
            "extra": "mean: 1.2180395755693987 msec\nrounds: 966"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729085568768,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 226.0701247875023,
            "unit": "iter/sec",
            "range": "stddev: 0.0001180559823684843",
            "extra": "mean: 4.423406237068979 msec\nrounds: 232"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 323.6842304503922,
            "unit": "iter/sec",
            "range": "stddev: 0.00005950224003817508",
            "extra": "mean: 3.089430704141949 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 409.1318964927313,
            "unit": "iter/sec",
            "range": "stddev: 0.00007598967434489082",
            "extra": "mean: 2.4441995566037864 msec\nrounds: 424"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 984.9391773480796,
            "unit": "iter/sec",
            "range": "stddev: 0.000023225981448559286",
            "extra": "mean: 1.0152911194907195 msec\nrounds: 1021"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 209.0982857892894,
            "unit": "iter/sec",
            "range": "stddev: 0.00012674991254834952",
            "extra": "mean: 4.782439971830811 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 296.8368900932598,
            "unit": "iter/sec",
            "range": "stddev: 0.00009776372894704367",
            "extra": "mean: 3.368853513071847 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 396.4020703302494,
            "unit": "iter/sec",
            "range": "stddev: 0.00011400938597913988",
            "extra": "mean: 2.52269116346159 msec\nrounds: 416"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 906.3281513462464,
            "unit": "iter/sec",
            "range": "stddev: 0.000020058172921783317",
            "extra": "mean: 1.1033531271368047 msec\nrounds: 936"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 16.83591068771611,
            "unit": "iter/sec",
            "range": "stddev: 0.0005072237932378424",
            "extra": "mean: 59.39684633333345 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.31614791592064,
            "unit": "iter/sec",
            "range": "stddev: 0.0017402788392121922",
            "extra": "mean: 57.749564444444935 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 322.29162424589026,
            "unit": "iter/sec",
            "range": "stddev: 0.00008885038328578895",
            "extra": "mean: 3.102779981762904 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 637.7337589142608,
            "unit": "iter/sec",
            "range": "stddev: 0.000029035583883292538",
            "extra": "mean: 1.5680524764793637 msec\nrounds: 659"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 907.7509721198937,
            "unit": "iter/sec",
            "range": "stddev: 0.00005404592060746521",
            "extra": "mean: 1.1016237169811833 msec\nrounds: 1060"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 826.9094013893018,
            "unit": "iter/sec",
            "range": "stddev: 0.000029013431144006593",
            "extra": "mean: 1.2093223251784129 msec\nrounds: 981"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729172719988,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 223.13124663261695,
            "unit": "iter/sec",
            "range": "stddev: 0.0001670619440462568",
            "extra": "mean: 4.481667247826068 msec\nrounds: 230"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 324.910626237064,
            "unit": "iter/sec",
            "range": "stddev: 0.00010376276397310127",
            "extra": "mean: 3.0777694518072543 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 410.3417692294342,
            "unit": "iter/sec",
            "range": "stddev: 0.0002385559680699538",
            "extra": "mean: 2.4369929531616132 msec\nrounds: 427"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 982.8945683077087,
            "unit": "iter/sec",
            "range": "stddev: 0.00003990650451763193",
            "extra": "mean: 1.0174031195652475 msec\nrounds: 1012"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 207.66127996978406,
            "unit": "iter/sec",
            "range": "stddev: 0.00013830212851943414",
            "extra": "mean: 4.815534220657341 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 292.1317111943403,
            "unit": "iter/sec",
            "range": "stddev: 0.0000555113687167322",
            "extra": "mean: 3.4231134850497313 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 396.9679016023747,
            "unit": "iter/sec",
            "range": "stddev: 0.00008467670287844571",
            "extra": "mean: 2.5190953625304853 msec\nrounds: 411"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 900.8998036444522,
            "unit": "iter/sec",
            "range": "stddev: 0.0000517054820600644",
            "extra": "mean: 1.1100013519313172 msec\nrounds: 932"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 16.84125048262196,
            "unit": "iter/sec",
            "range": "stddev: 0.0008661573369117538",
            "extra": "mean: 59.37801358823524 msec\nrounds: 17"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.54955018484636,
            "unit": "iter/sec",
            "range": "stddev: 0.00042746025933183585",
            "extra": "mean: 56.98151744444581 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 324.33535798777893,
            "unit": "iter/sec",
            "range": "stddev: 0.0000490992709238817",
            "extra": "mean: 3.083228440476355 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 660.7129932040312,
            "unit": "iter/sec",
            "range": "stddev: 0.000059331741034117876",
            "extra": "mean: 1.513516474302474 msec\nrounds: 681"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 891.2341712776044,
            "unit": "iter/sec",
            "range": "stddev: 0.00004526883893177406",
            "extra": "mean: 1.122039562920346 msec\nrounds: 1041"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 815.3358960330265,
            "unit": "iter/sec",
            "range": "stddev: 0.000049828730067114874",
            "extra": "mean: 1.2264883772018953 msec\nrounds: 965"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729174872012,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 223.10419343408677,
            "unit": "iter/sec",
            "range": "stddev: 0.00023849713614956165",
            "extra": "mean: 4.482210686440714 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 323.30453444308375,
            "unit": "iter/sec",
            "range": "stddev: 0.0001343824576563106",
            "extra": "mean: 3.093059000000031 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 406.22822145217924,
            "unit": "iter/sec",
            "range": "stddev: 0.00013077875909409047",
            "extra": "mean: 2.46167042857144 msec\nrounds: 427"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 977.0840309650607,
            "unit": "iter/sec",
            "range": "stddev: 0.000055629620721082124",
            "extra": "mean: 1.0234534270428157 msec\nrounds: 1028"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 203.6979697397131,
            "unit": "iter/sec",
            "range": "stddev: 0.00047575768905952715",
            "extra": "mean: 4.909229096774053 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 293.04817861078857,
            "unit": "iter/sec",
            "range": "stddev: 0.00014683112746698306",
            "extra": "mean: 3.4124081737704577 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 391.96103257310625,
            "unit": "iter/sec",
            "range": "stddev: 0.00012058751073195911",
            "extra": "mean: 2.5512740218977914 msec\nrounds: 411"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 888.9449674798572,
            "unit": "iter/sec",
            "range": "stddev: 0.00012111650260751218",
            "extra": "mean: 1.1249290300106898 msec\nrounds: 933"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 16.91554101196601,
            "unit": "iter/sec",
            "range": "stddev: 0.00027013811827214464",
            "extra": "mean: 59.117234222222194 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.476783617327943,
            "unit": "iter/sec",
            "range": "stddev: 0.0007112803523923012",
            "extra": "mean: 57.218766444445556 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 319.4194247836375,
            "unit": "iter/sec",
            "range": "stddev: 0.0001339021136797579",
            "extra": "mean: 3.1306799850302207 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 640.0929443999231,
            "unit": "iter/sec",
            "range": "stddev: 0.00010456176452928107",
            "extra": "mean: 1.5622731179102185 msec\nrounds: 670"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 866.734584755596,
            "unit": "iter/sec",
            "range": "stddev: 0.00014163509064631986",
            "extra": "mean: 1.1537557374406406 msec\nrounds: 1055"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 803.9210822307699,
            "unit": "iter/sec",
            "range": "stddev: 0.00007566261998252239",
            "extra": "mean: 1.2439031916231607 msec\nrounds: 955"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729519146064,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 226.78118519489507,
            "unit": "iter/sec",
            "range": "stddev: 0.00016846868793254555",
            "extra": "mean: 4.409536880851041 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 328.46550554672297,
            "unit": "iter/sec",
            "range": "stddev: 0.00008037117460322658",
            "extra": "mean: 3.0444597168141723 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 412.6410093530658,
            "unit": "iter/sec",
            "range": "stddev: 0.00003760598699085228",
            "extra": "mean: 2.4234140023256274 msec\nrounds: 430"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1003.669387293023,
            "unit": "iter/sec",
            "range": "stddev: 0.000030072352147733133",
            "extra": "mean: 996.3440278846008 usec\nrounds: 1040"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 209.30943135264425,
            "unit": "iter/sec",
            "range": "stddev: 0.00005873195404763394",
            "extra": "mean: 4.777615578703672 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 296.6696628741191,
            "unit": "iter/sec",
            "range": "stddev: 0.000057377061954516",
            "extra": "mean: 3.370752473684218 msec\nrounds: 304"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 396.454832539765,
            "unit": "iter/sec",
            "range": "stddev: 0.00016517077812565353",
            "extra": "mean: 2.5223554309927567 msec\nrounds: 413"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 917.9252958749797,
            "unit": "iter/sec",
            "range": "stddev: 0.00004916196141801662",
            "extra": "mean: 1.0894132719665224 msec\nrounds: 956"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 16.900999319564672,
            "unit": "iter/sec",
            "range": "stddev: 0.0035098388736068626",
            "extra": "mean: 59.168098944445 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.606617080029284,
            "unit": "iter/sec",
            "range": "stddev: 0.0010802220572777026",
            "extra": "mean: 56.79682788888919 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 327.3889026777634,
            "unit": "iter/sec",
            "range": "stddev: 0.000042107983416776786",
            "extra": "mean: 3.054471278106401 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 664.4019051819149,
            "unit": "iter/sec",
            "range": "stddev: 0.00004257310191380095",
            "extra": "mean: 1.5051130832115804 msec\nrounds: 685"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 904.4177093843037,
            "unit": "iter/sec",
            "range": "stddev: 0.0000412198196024277",
            "extra": "mean: 1.1056837892756053 msec\nrounds: 1063"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 827.6064189116888,
            "unit": "iter/sec",
            "range": "stddev: 0.000056602869918090306",
            "extra": "mean: 1.208303823108345 msec\nrounds: 978"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729519690806,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 228.7938091440653,
            "unit": "iter/sec",
            "range": "stddev: 0.00007910460370363573",
            "extra": "mean: 4.370747634042523 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 331.45290149067324,
            "unit": "iter/sec",
            "range": "stddev: 0.00003842318211493993",
            "extra": "mean: 3.0170199008746317 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 415.174375878575,
            "unit": "iter/sec",
            "range": "stddev: 0.000057459106892729694",
            "extra": "mean: 2.408626490697652 msec\nrounds: 430"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 988.8953080873897,
            "unit": "iter/sec",
            "range": "stddev: 0.00002694615959695283",
            "extra": "mean: 1.0112293908382353 msec\nrounds: 1026"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 207.62281714520194,
            "unit": "iter/sec",
            "range": "stddev: 0.00012982599345683492",
            "extra": "mean: 4.816426314554077 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 297.2949279243925,
            "unit": "iter/sec",
            "range": "stddev: 0.00004145682321821316",
            "extra": "mean: 3.3636631710525458 msec\nrounds: 304"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 397.11110202363614,
            "unit": "iter/sec",
            "range": "stddev: 0.00007466913814431779",
            "extra": "mean: 2.5181869630541827 msec\nrounds: 406"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 898.244524621533,
            "unit": "iter/sec",
            "range": "stddev: 0.00006304377445768944",
            "extra": "mean: 1.1132826002155047 msec\nrounds: 928"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 16.95482710155981,
            "unit": "iter/sec",
            "range": "stddev: 0.0021522519242795956",
            "extra": "mean: 58.980253470588444 msec\nrounds: 17"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.611926259495295,
            "unit": "iter/sec",
            "range": "stddev: 0.0023316828441932577",
            "extra": "mean: 56.7797062777764 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 322.05102643184443,
            "unit": "iter/sec",
            "range": "stddev: 0.000046341488491884423",
            "extra": "mean: 3.105098005988283 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 643.0304493906416,
            "unit": "iter/sec",
            "range": "stddev: 0.00003114357770201988",
            "extra": "mean: 1.55513630955989 msec\nrounds: 659"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 892.4205308748674,
            "unit": "iter/sec",
            "range": "stddev: 0.000039577311181341434",
            "extra": "mean: 1.1205479540230536 msec\nrounds: 1044"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 817.5824019643909,
            "unit": "iter/sec",
            "range": "stddev: 0.000038230428996836215",
            "extra": "mean: 1.223118302934747 msec\nrounds: 954"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729605964597,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 227.35645180507814,
            "unit": "iter/sec",
            "range": "stddev: 0.000045119406954884335",
            "extra": "mean: 4.3983796899563705 msec\nrounds: 229"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 329.9793749867706,
            "unit": "iter/sec",
            "range": "stddev: 0.000058066942795843886",
            "extra": "mean: 3.0304924362017824 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 410.05393936203814,
            "unit": "iter/sec",
            "range": "stddev: 0.0000389397500472187",
            "extra": "mean: 2.43870355581951 msec\nrounds: 421"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 979.049535273852,
            "unit": "iter/sec",
            "range": "stddev: 0.000056003192857270815",
            "extra": "mean: 1.0213987790927124 msec\nrounds: 1014"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 214.0869015473515,
            "unit": "iter/sec",
            "range": "stddev: 0.00004812274455094367",
            "extra": "mean: 4.671000387096645 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 295.26780715321127,
            "unit": "iter/sec",
            "range": "stddev: 0.00012450913777872053",
            "extra": "mean: 3.38675594078941 msec\nrounds: 304"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 400.43468101281064,
            "unit": "iter/sec",
            "range": "stddev: 0.0001251783416438825",
            "extra": "mean: 2.4972861927711207 msec\nrounds: 415"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 906.905899665232,
            "unit": "iter/sec",
            "range": "stddev: 0.00003020389350367641",
            "extra": "mean: 1.102650231263389 msec\nrounds: 934"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 16.948319083858188,
            "unit": "iter/sec",
            "range": "stddev: 0.0001263792893091726",
            "extra": "mean: 59.00290141176382 msec\nrounds: 17"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.663443017662036,
            "unit": "iter/sec",
            "range": "stddev: 0.00016351926217428208",
            "extra": "mean: 56.61410400000043 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 327.12030195197,
            "unit": "iter/sec",
            "range": "stddev: 0.000043856054905163195",
            "extra": "mean: 3.0569793254434776 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 658.9633317128112,
            "unit": "iter/sec",
            "range": "stddev: 0.00006148839409950905",
            "extra": "mean: 1.5175351220237836 msec\nrounds: 672"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 890.9364878602973,
            "unit": "iter/sec",
            "range": "stddev: 0.0000388270685173245",
            "extra": "mean: 1.1224144634615125 msec\nrounds: 1040"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 803.658358758948,
            "unit": "iter/sec",
            "range": "stddev: 0.00006771353568935169",
            "extra": "mean: 1.2443098352691226 msec\nrounds: 947"
          }
        ]
      }
    ]
  }
}