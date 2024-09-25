window.BENCHMARK_DATA = {
  "lastUpdate": 1727271197673,
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
      }
    ]
  }
}