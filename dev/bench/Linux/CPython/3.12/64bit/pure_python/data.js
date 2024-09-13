window.BENCHMARK_DATA = {
  "lastUpdate": 1726235683009,
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
      }
    ]
  }
}