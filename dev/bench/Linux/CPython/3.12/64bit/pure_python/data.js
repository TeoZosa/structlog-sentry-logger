window.BENCHMARK_DATA = {
  "lastUpdate": 1726190601662,
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
      }
    ]
  }
}