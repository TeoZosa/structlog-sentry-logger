window.BENCHMARK_DATA = {
  "lastUpdate": 1730296701941,
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
        "date": 1728978024491,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 225.758274504579,
            "unit": "iter/sec",
            "range": "stddev: 0.00027461177321047147",
            "extra": "mean: 4.429516491452974 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 338.29757589479595,
            "unit": "iter/sec",
            "range": "stddev: 0.00006146377574494277",
            "extra": "mean: 2.9559774330484143 msec\nrounds: 351"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 425.215544883439,
            "unit": "iter/sec",
            "range": "stddev: 0.00004303597593702786",
            "extra": "mean: 2.3517484533029527 msec\nrounds: 439"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1069.0349966169044,
            "unit": "iter/sec",
            "range": "stddev: 0.0000222952263053915",
            "extra": "mean: 935.4230714285553 usec\nrounds: 1092"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 212.908564625761,
            "unit": "iter/sec",
            "range": "stddev: 0.00012620257839405342",
            "extra": "mean: 4.696851917431059 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 301.70498633950854,
            "unit": "iter/sec",
            "range": "stddev: 0.0002057472317077634",
            "extra": "mean: 3.314496098101277 msec\nrounds: 316"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 414.5479955154873,
            "unit": "iter/sec",
            "range": "stddev: 0.00008169938923490439",
            "extra": "mean: 2.4122659156909143 msec\nrounds: 427"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 957.036993629541,
            "unit": "iter/sec",
            "range": "stddev: 0.00005446701716323761",
            "extra": "mean: 1.044891688259116 msec\nrounds: 988"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.956893888126272,
            "unit": "iter/sec",
            "range": "stddev: 0.0008360937974166573",
            "extra": "mean: 100.43292729999997 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.081544305327453,
            "unit": "iter/sec",
            "range": "stddev: 0.0009536020093459094",
            "extra": "mean: 99.19115263636384 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 325.58850123994984,
            "unit": "iter/sec",
            "range": "stddev: 0.000060517530732221636",
            "extra": "mean: 3.0713615382351214 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 675.7108348149592,
            "unit": "iter/sec",
            "range": "stddev: 0.00003679322214977782",
            "extra": "mean: 1.479922991428495 msec\nrounds: 700"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 851.0296357934209,
            "unit": "iter/sec",
            "range": "stddev: 0.00012269769814167905",
            "extra": "mean: 1.1750472109795482 msec\nrounds: 929"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 792.4725962514511,
            "unit": "iter/sec",
            "range": "stddev: 0.000057385439991694216",
            "extra": "mean: 1.261873287139762 msec\nrounds: 902"
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
        "date": 1728979007850,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 229.49295733233444,
            "unit": "iter/sec",
            "range": "stddev: 0.00012890577065192884",
            "extra": "mean: 4.357432191489324 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 344.42458562120083,
            "unit": "iter/sec",
            "range": "stddev: 0.000049160692874901364",
            "extra": "mean: 2.9033932005649645 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 431.2642496712621,
            "unit": "iter/sec",
            "range": "stddev: 0.00005339629079694237",
            "extra": "mean: 2.318763961451165 msec\nrounds: 441"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1039.8292368710179,
            "unit": "iter/sec",
            "range": "stddev: 0.000025746007041639326",
            "extra": "mean: 961.6963675777483 usec\nrounds: 1061"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 213.88827364123233,
            "unit": "iter/sec",
            "range": "stddev: 0.00004541836737591826",
            "extra": "mean: 4.675338123853205 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 308.8529722154512,
            "unit": "iter/sec",
            "range": "stddev: 0.00006064842590011055",
            "extra": "mean: 3.2377865520504527 msec\nrounds: 317"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 409.3052920400283,
            "unit": "iter/sec",
            "range": "stddev: 0.000045857517951688434",
            "extra": "mean: 2.4431641111109905 msec\nrounds: 423"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 940.5035798060486,
            "unit": "iter/sec",
            "range": "stddev: 0.00004125156746511718",
            "extra": "mean: 1.063260174093352 msec\nrounds: 965"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.961523416573002,
            "unit": "iter/sec",
            "range": "stddev: 0.00026736300843882354",
            "extra": "mean: 100.38625200000016 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.212476923411295,
            "unit": "iter/sec",
            "range": "stddev: 0.000553882737768962",
            "extra": "mean: 97.9194379090913 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 327.8045886212739,
            "unit": "iter/sec",
            "range": "stddev: 0.00009068585965452686",
            "extra": "mean: 3.0505979315479963 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 673.2230129938162,
            "unit": "iter/sec",
            "range": "stddev: 0.000028435339550039556",
            "extra": "mean: 1.4853918845599317 msec\nrounds: 693"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 865.5182963764194,
            "unit": "iter/sec",
            "range": "stddev: 0.00005264215996371547",
            "extra": "mean: 1.155377077742437 msec\nrounds: 939"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 787.9607208020383,
            "unit": "iter/sec",
            "range": "stddev: 0.00004972976226973518",
            "extra": "mean: 1.2690987933791091 msec\nrounds: 876"
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
        "date": 1728998933272,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 234.20303459214023,
            "unit": "iter/sec",
            "range": "stddev: 0.0001124946927349385",
            "extra": "mean: 4.269799499999987 msec\nrounds: 238"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 344.1729768058873,
            "unit": "iter/sec",
            "range": "stddev: 0.00007472972062194594",
            "extra": "mean: 2.905515735955056 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 436.7670222524759,
            "unit": "iter/sec",
            "range": "stddev: 0.00004579813432227218",
            "extra": "mean: 2.289550146993341 msec\nrounds: 449"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1067.640581186704,
            "unit": "iter/sec",
            "range": "stddev: 0.00003858673686331368",
            "extra": "mean: 936.6448012761747 usec\nrounds: 1097"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 215.77757765530257,
            "unit": "iter/sec",
            "range": "stddev: 0.00004583905125903429",
            "extra": "mean: 4.634401826483873 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 306.55572166888817,
            "unit": "iter/sec",
            "range": "stddev: 0.00004586097465982153",
            "extra": "mean: 3.2620497003155053 msec\nrounds: 317"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 411.56686631611257,
            "unit": "iter/sec",
            "range": "stddev: 0.00020952134683823842",
            "extra": "mean: 2.429738839160898 msec\nrounds: 429"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 971.6384962902566,
            "unit": "iter/sec",
            "range": "stddev: 0.000043072257935777565",
            "extra": "mean: 1.02918935778896 msec\nrounds: 995"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.007007226684317,
            "unit": "iter/sec",
            "range": "stddev: 0.00010749921299081815",
            "extra": "mean: 99.92997680000038 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.24495873288708,
            "unit": "iter/sec",
            "range": "stddev: 0.0008250675993386902",
            "extra": "mean: 97.60898272727303 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 336.109783178932,
            "unit": "iter/sec",
            "range": "stddev: 0.000045918147279804864",
            "extra": "mean: 2.9752183662789675 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 674.4547724505521,
            "unit": "iter/sec",
            "range": "stddev: 0.00003458812250302256",
            "extra": "mean: 1.4826791074019947 msec\nrounds: 689"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 861.5244647314531,
            "unit": "iter/sec",
            "range": "stddev: 0.00006547297179816737",
            "extra": "mean: 1.1607331433260126 msec\nrounds: 914"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 792.6846575067185,
            "unit": "iter/sec",
            "range": "stddev: 0.000055883690536764346",
            "extra": "mean: 1.2615357072071556 msec\nrounds: 888"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1728999960533,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 232.49603805748166,
            "unit": "iter/sec",
            "range": "stddev: 0.00017317235977878337",
            "extra": "mean: 4.301148563025245 msec\nrounds: 238"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 337.4019509930437,
            "unit": "iter/sec",
            "range": "stddev: 0.0002700761327090986",
            "extra": "mean: 2.96382399999998 msec\nrounds: 358"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 426.5039401522017,
            "unit": "iter/sec",
            "range": "stddev: 0.00009345017118931094",
            "extra": "mean: 2.344644224489793 msec\nrounds: 441"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1062.8294056583943,
            "unit": "iter/sec",
            "range": "stddev: 0.000022446372186750517",
            "extra": "mean: 940.8847691606037 usec\nrounds: 1096"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 213.2440548469412,
            "unit": "iter/sec",
            "range": "stddev: 0.0001332870325885903",
            "extra": "mean: 4.689462506787181 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 305.2106456713727,
            "unit": "iter/sec",
            "range": "stddev: 0.00005938467725721996",
            "extra": "mean: 3.2764256888887258 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 405.47973559111836,
            "unit": "iter/sec",
            "range": "stddev: 0.00010151471830165643",
            "extra": "mean: 2.466214491686435 msec\nrounds: 421"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 964.5532791308873,
            "unit": "iter/sec",
            "range": "stddev: 0.000019076466914756036",
            "extra": "mean: 1.0367493653653348 msec\nrounds: 999"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.91234655668947,
            "unit": "iter/sec",
            "range": "stddev: 0.0008058464803608575",
            "extra": "mean: 100.88428549999975 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.193020956790003,
            "unit": "iter/sec",
            "range": "stddev: 0.0002711656995554177",
            "extra": "mean: 98.10634199999929 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 329.09825583051713,
            "unit": "iter/sec",
            "range": "stddev: 0.00008566447240329713",
            "extra": "mean: 3.0386061982503847 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 678.335162338243,
            "unit": "iter/sec",
            "range": "stddev: 0.000034451180535664474",
            "extra": "mean: 1.4741974992907165 msec\nrounds: 705"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 862.7587257578472,
            "unit": "iter/sec",
            "range": "stddev: 0.000037934521110545347",
            "extra": "mean: 1.1590726006527492 msec\nrounds: 919"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 788.437266764305,
            "unit": "iter/sec",
            "range": "stddev: 0.00004431909754032954",
            "extra": "mean: 1.268331726763671 msec\nrounds: 893"
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
        "date": 1729003708318,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 231.32472183817114,
            "unit": "iter/sec",
            "range": "stddev: 0.00015271811355322575",
            "extra": "mean: 4.322927493670886 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 341.5855840051999,
            "unit": "iter/sec",
            "range": "stddev: 0.00008792559189644494",
            "extra": "mean: 2.9275240139665177 msec\nrounds: 358"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 428.46979388571106,
            "unit": "iter/sec",
            "range": "stddev: 0.00009659217857769133",
            "extra": "mean: 2.3338868089887743 msec\nrounds: 445"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1045.0553099151293,
            "unit": "iter/sec",
            "range": "stddev: 0.000041119515343237956",
            "extra": "mean: 956.887152777791 usec\nrounds: 1080"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 213.22462712808297,
            "unit": "iter/sec",
            "range": "stddev: 0.0001123687771663177",
            "extra": "mean: 4.689889781818237 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 305.95411353363687,
            "unit": "iter/sec",
            "range": "stddev: 0.00009732888606174522",
            "extra": "mean: 3.2684639812501137 msec\nrounds: 320"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 409.17893226112574,
            "unit": "iter/sec",
            "range": "stddev: 0.00005614747369016799",
            "extra": "mean: 2.443918591981246 msec\nrounds: 424"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 947.094206657959,
            "unit": "iter/sec",
            "range": "stddev: 0.00004468798293148644",
            "extra": "mean: 1.0558611730175513 msec\nrounds: 971"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.914037836600324,
            "unit": "iter/sec",
            "range": "stddev: 0.0005120763155551723",
            "extra": "mean: 100.86707519999898 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.157481604022857,
            "unit": "iter/sec",
            "range": "stddev: 0.0017711676588116202",
            "extra": "mean: 98.44959990909078 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 326.78852143140983,
            "unit": "iter/sec",
            "range": "stddev: 0.00004282302758378855",
            "extra": "mean: 3.0600830029762585 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 674.8638571207573,
            "unit": "iter/sec",
            "range": "stddev: 0.00003176097832790131",
            "extra": "mean: 1.4817803464337316 msec\nrounds: 687"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 851.0693200272368,
            "unit": "iter/sec",
            "range": "stddev: 0.000060672200943995524",
            "extra": "mean: 1.1749924200862945 msec\nrounds: 926"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 783.3397925136628,
            "unit": "iter/sec",
            "range": "stddev: 0.00003912294927821253",
            "extra": "mean: 1.2765852182628117 msec\nrounds: 898"
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
        "date": 1729004061708,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 225.57604193935583,
            "unit": "iter/sec",
            "range": "stddev: 0.00016543891876642105",
            "extra": "mean: 4.433094895196545 msec\nrounds: 229"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 346.9606981594623,
            "unit": "iter/sec",
            "range": "stddev: 0.00004006256883210355",
            "extra": "mean: 2.882170820224723 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 396.2560710367219,
            "unit": "iter/sec",
            "range": "stddev: 0.00008600409518878739",
            "extra": "mean: 2.523620641025656 msec\nrounds: 429"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1054.8648015042627,
            "unit": "iter/sec",
            "range": "stddev: 0.00004133464003307642",
            "extra": "mean: 947.988783561624 usec\nrounds: 1095"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 214.60170631006815,
            "unit": "iter/sec",
            "range": "stddev: 0.00006917186621779365",
            "extra": "mean: 4.659795195454532 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 307.96974795232575,
            "unit": "iter/sec",
            "range": "stddev: 0.00005089526996816761",
            "extra": "mean: 3.2470721772152817 msec\nrounds: 316"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 383.2609100877392,
            "unit": "iter/sec",
            "range": "stddev: 0.000041545669800560586",
            "extra": "mean: 2.6091886067146057 msec\nrounds: 417"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 972.2178302921744,
            "unit": "iter/sec",
            "range": "stddev: 0.00004201948445353626",
            "extra": "mean: 1.028576075075147 msec\nrounds: 999"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.987476383763147,
            "unit": "iter/sec",
            "range": "stddev: 0.00026331162456063705",
            "extra": "mean: 100.12539320000009 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.211843495748727,
            "unit": "iter/sec",
            "range": "stddev: 0.0005504117312784401",
            "extra": "mean: 97.92551172727119 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 305.72404083048355,
            "unit": "iter/sec",
            "range": "stddev: 0.000038512753268620954",
            "extra": "mean: 3.270923664634131 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 673.1270967106736,
            "unit": "iter/sec",
            "range": "stddev: 0.000026128899807970417",
            "extra": "mean: 1.485603543352563 msec\nrounds: 692"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 864.444881018429,
            "unit": "iter/sec",
            "range": "stddev: 0.000051632745121548924",
            "extra": "mean: 1.1568117551021522 msec\nrounds: 931"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 799.775603690735,
            "unit": "iter/sec",
            "range": "stddev: 0.000056571758600295005",
            "extra": "mean: 1.2503507176078976 msec\nrounds: 903"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729004388044,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 237.7663808186717,
            "unit": "iter/sec",
            "range": "stddev: 0.00019711117194188706",
            "extra": "mean: 4.205809065843637 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 347.180651836042,
            "unit": "iter/sec",
            "range": "stddev: 0.00008932526328131452",
            "extra": "mean: 2.8803448426966365 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 426.17904566305,
            "unit": "iter/sec",
            "range": "stddev: 0.000037873430602763625",
            "extra": "mean: 2.3464316469248234 msec\nrounds: 439"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1057.6072075840361,
            "unit": "iter/sec",
            "range": "stddev: 0.000021880979575590284",
            "extra": "mean: 945.5306212259728 usec\nrounds: 1093"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 217.11529356747454,
            "unit": "iter/sec",
            "range": "stddev: 0.00004683993665089926",
            "extra": "mean: 4.605847812785341 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 308.5242877175961,
            "unit": "iter/sec",
            "range": "stddev: 0.00003872920874746595",
            "extra": "mean: 3.2412359085173144 msec\nrounds: 317"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 408.0435643124508,
            "unit": "iter/sec",
            "range": "stddev: 0.000058405912616705345",
            "extra": "mean: 2.4507187159905084 msec\nrounds: 419"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 938.873883240105,
            "unit": "iter/sec",
            "range": "stddev: 0.000023404473253398856",
            "extra": "mean: 1.0651057802874924 msec\nrounds: 974"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.056093161914246,
            "unit": "iter/sec",
            "range": "stddev: 0.0003293712506957363",
            "extra": "mean: 99.44219727272726 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.19752471885555,
            "unit": "iter/sec",
            "range": "stddev: 0.0012123339398737022",
            "extra": "mean: 98.063013090909 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 327.61725636694143,
            "unit": "iter/sec",
            "range": "stddev: 0.00009916490346602808",
            "extra": "mean: 3.052342270029785 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 671.4653995963478,
            "unit": "iter/sec",
            "range": "stddev: 0.00005654924680821624",
            "extra": "mean: 1.4892800144298592 msec\nrounds: 693"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 854.7979012054435,
            "unit": "iter/sec",
            "range": "stddev: 0.000049205599801296325",
            "extra": "mean: 1.1698671681221857 msec\nrounds: 916"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 791.8729278120032,
            "unit": "iter/sec",
            "range": "stddev: 0.00003728117780033125",
            "extra": "mean: 1.262828876803587 msec\nrounds: 901"
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
        "date": 1729040991803,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 229.3867050066714,
            "unit": "iter/sec",
            "range": "stddev: 0.00009125094742315857",
            "extra": "mean: 4.359450561752985 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 337.2101654797842,
            "unit": "iter/sec",
            "range": "stddev: 0.00014682290925355958",
            "extra": "mean: 2.9655096505682 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 421.98162175597963,
            "unit": "iter/sec",
            "range": "stddev: 0.00005339611332021685",
            "extra": "mean: 2.3697714508009367 msec\nrounds: 437"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1047.189567103748,
            "unit": "iter/sec",
            "range": "stddev: 0.00003826880755402531",
            "extra": "mean: 954.9369392265223 usec\nrounds: 1086"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 214.02895240524262,
            "unit": "iter/sec",
            "range": "stddev: 0.000056270017551932545",
            "extra": "mean: 4.672265077981594 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 302.9133359684644,
            "unit": "iter/sec",
            "range": "stddev: 0.00003971574889531897",
            "extra": "mean: 3.3012742631579206 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 405.39470529344476,
            "unit": "iter/sec",
            "range": "stddev: 0.00003486318439802058",
            "extra": "mean: 2.4667317726218214 msec\nrounds: 431"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 943.8971139256852,
            "unit": "iter/sec",
            "range": "stddev: 0.000025207087197439994",
            "extra": "mean: 1.0594375014465103 msec\nrounds: 1037"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.967912502190353,
            "unit": "iter/sec",
            "range": "stddev: 0.000448539136146212",
            "extra": "mean: 100.32190790000008 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.231757169030063,
            "unit": "iter/sec",
            "range": "stddev: 0.0003295418827140084",
            "extra": "mean: 97.73492309090801 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 323.5466553782552,
            "unit": "iter/sec",
            "range": "stddev: 0.00007541922437363006",
            "extra": "mean: 3.0907443590505053 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 675.0161782378661,
            "unit": "iter/sec",
            "range": "stddev: 0.00005524316525352236",
            "extra": "mean: 1.4814459745402044 msec\nrounds: 707"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 861.8143505747059,
            "unit": "iter/sec",
            "range": "stddev: 0.00005378399254829289",
            "extra": "mean: 1.1603427110875377 msec\nrounds: 938"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 798.2488153513998,
            "unit": "iter/sec",
            "range": "stddev: 0.000025963289963376384",
            "extra": "mean: 1.2527422286994396 msec\nrounds: 892"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729085599948,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 234.97794630991467,
            "unit": "iter/sec",
            "range": "stddev: 0.00012652592234069029",
            "extra": "mean: 4.255718528925648 msec\nrounds: 242"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 345.93159985949205,
            "unit": "iter/sec",
            "range": "stddev: 0.00010149901151879485",
            "extra": "mean: 2.8907448767507002 msec\nrounds: 357"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 426.53481891802977,
            "unit": "iter/sec",
            "range": "stddev: 0.00007909059084620626",
            "extra": "mean: 2.344474485193616 msec\nrounds: 439"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1051.8740454345834,
            "unit": "iter/sec",
            "range": "stddev: 0.0000335562690446001",
            "extra": "mean: 950.6841663602873 usec\nrounds: 1088"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 216.66848838133342,
            "unit": "iter/sec",
            "range": "stddev: 0.0001066448933219789",
            "extra": "mean: 4.615345809954674 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 312.33018080222223,
            "unit": "iter/sec",
            "range": "stddev: 0.00010953492013035899",
            "extra": "mean: 3.2017398940809794 msec\nrounds: 321"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 409.37341752798545,
            "unit": "iter/sec",
            "range": "stddev: 0.000050053636493727356",
            "extra": "mean: 2.4427575342789285 msec\nrounds: 423"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 953.1856397448591,
            "unit": "iter/sec",
            "range": "stddev: 0.000029731626047254233",
            "extra": "mean: 1.049113581135855 msec\nrounds: 986"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.992561017965096,
            "unit": "iter/sec",
            "range": "stddev: 0.00022394027199889108",
            "extra": "mean: 100.07444519999957 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.295229848447109,
            "unit": "iter/sec",
            "range": "stddev: 0.0010328625896181313",
            "extra": "mean: 97.13236272727178 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 325.138629522945,
            "unit": "iter/sec",
            "range": "stddev: 0.00004607291710379903",
            "extra": "mean: 3.075611167664807 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 691.3852544491209,
            "unit": "iter/sec",
            "range": "stddev: 0.00003225431873237334",
            "extra": "mean: 1.4463716047817305 msec\nrounds: 711"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 856.5793873437984,
            "unit": "iter/sec",
            "range": "stddev: 0.00005085916536472318",
            "extra": "mean: 1.167434116178 msec\nrounds: 921"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 788.4252825682655,
            "unit": "iter/sec",
            "range": "stddev: 0.000029228510552595252",
            "extra": "mean: 1.2683510056178537 msec\nrounds: 890"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729172818547,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 209.6742067225264,
            "unit": "iter/sec",
            "range": "stddev: 0.0001851278740350688",
            "extra": "mean: 4.769303843478258 msec\nrounds: 230"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 323.64636000374645,
            "unit": "iter/sec",
            "range": "stddev: 0.00008804543133976218",
            "extra": "mean: 3.0897922040230092 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 402.46435191652637,
            "unit": "iter/sec",
            "range": "stddev: 0.00007969280958723729",
            "extra": "mean: 2.484692110588235 msec\nrounds: 425"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1020.3297151336869,
            "unit": "iter/sec",
            "range": "stddev: 0.00002752270853275973",
            "extra": "mean: 980.0753473782509 usec\nrounds: 1068"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 202.13308522993012,
            "unit": "iter/sec",
            "range": "stddev: 0.00008151814797016851",
            "extra": "mean: 4.94723562380934 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 284.23464987087385,
            "unit": "iter/sec",
            "range": "stddev: 0.0001495321775993162",
            "extra": "mean: 3.5182198949153247 msec\nrounds: 295"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 388.1741409747726,
            "unit": "iter/sec",
            "range": "stddev: 0.00006885013436786083",
            "extra": "mean: 2.576163361858228 msec\nrounds: 409"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 918.3897257364438,
            "unit": "iter/sec",
            "range": "stddev: 0.000026620955706421404",
            "extra": "mean: 1.0888623554647392 msec\nrounds: 979"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.09755311665512,
            "unit": "iter/sec",
            "range": "stddev: 0.001557438142556445",
            "extra": "mean: 109.91966600000111 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 9.548879734691917,
            "unit": "iter/sec",
            "range": "stddev: 0.0023973951302621406",
            "extra": "mean: 104.72432660000024 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 300.1165481981858,
            "unit": "iter/sec",
            "range": "stddev: 0.0001942577468942515",
            "extra": "mean: 3.3320388562500636 msec\nrounds: 320"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 629.2716926652212,
            "unit": "iter/sec",
            "range": "stddev: 0.000046494658750647685",
            "extra": "mean: 1.5891387005898738 msec\nrounds: 678"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 816.0309622389839,
            "unit": "iter/sec",
            "range": "stddev: 0.00006274351421392518",
            "extra": "mean: 1.2254436979403962 msec\nrounds: 874"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 740.8658746969388,
            "unit": "iter/sec",
            "range": "stddev: 0.000046295756959565406",
            "extra": "mean: 1.3497719818841212 msec\nrounds: 828"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729174892100,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 237.53139450195673,
            "unit": "iter/sec",
            "range": "stddev: 0.000035405640516003176",
            "extra": "mean: 4.20996981092435 msec\nrounds: 238"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 347.3470012017397,
            "unit": "iter/sec",
            "range": "stddev: 0.00008306630045615648",
            "extra": "mean: 2.8789654050279205 msec\nrounds: 358"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 435.4562282922756,
            "unit": "iter/sec",
            "range": "stddev: 0.00006452781759471345",
            "extra": "mean: 2.2964420647321777 msec\nrounds: 448"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1087.8171339316439,
            "unit": "iter/sec",
            "range": "stddev: 0.000028320243863802094",
            "extra": "mean: 919.2721541218508 usec\nrounds: 1116"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 216.1921329889692,
            "unit": "iter/sec",
            "range": "stddev: 0.00004463858557321262",
            "extra": "mean: 4.6255152126697565 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 309.2655032145237,
            "unit": "iter/sec",
            "range": "stddev: 0.00011409446861658543",
            "extra": "mean: 3.2334676503067485 msec\nrounds: 326"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 414.39056110111017,
            "unit": "iter/sec",
            "range": "stddev: 0.000033725558273209636",
            "extra": "mean: 2.4131823788235436 msec\nrounds: 425"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 974.6583124903617,
            "unit": "iter/sec",
            "range": "stddev: 0.00003079563993135888",
            "extra": "mean: 1.026000586241231 msec\nrounds: 1003"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.023073315233146,
            "unit": "iter/sec",
            "range": "stddev: 0.0004944998262945514",
            "extra": "mean: 99.76979799999987 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.321972848654845,
            "unit": "iter/sec",
            "range": "stddev: 0.0008301110604011173",
            "extra": "mean: 96.88070436363526 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 332.52446477064365,
            "unit": "iter/sec",
            "range": "stddev: 0.00004100702133465737",
            "extra": "mean: 3.0072975252805616 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 679.4913420463258,
            "unit": "iter/sec",
            "range": "stddev: 0.00013634140403035407",
            "extra": "mean: 1.4716890975953345 msec\nrounds: 707"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 874.3387629977741,
            "unit": "iter/sec",
            "range": "stddev: 0.00003646162462378659",
            "extra": "mean: 1.1437214525081576 msec\nrounds: 937"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 803.9077084375498,
            "unit": "iter/sec",
            "range": "stddev: 0.000042742280071923124",
            "extra": "mean: 1.2439238851728007 msec\nrounds: 897"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729519207292,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 228.22370853845746,
            "unit": "iter/sec",
            "range": "stddev: 0.00025752499859135465",
            "extra": "mean: 4.381665719148947 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 336.5918438312133,
            "unit": "iter/sec",
            "range": "stddev: 0.00008626903398912533",
            "extra": "mean: 2.970957313218374 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 424.10467226328603,
            "unit": "iter/sec",
            "range": "stddev: 0.00003857096771467073",
            "extra": "mean: 2.3579084726027153 msec\nrounds: 438"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1050.1917370092988,
            "unit": "iter/sec",
            "range": "stddev: 0.00002823767189073262",
            "extra": "mean: 952.2070730129402 usec\nrounds: 1082"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 215.93164882154477,
            "unit": "iter/sec",
            "range": "stddev: 0.00010541957572498044",
            "extra": "mean: 4.631095096330428 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 305.55395523305117,
            "unit": "iter/sec",
            "range": "stddev: 0.00003776680936367898",
            "extra": "mean: 3.2727444134613903 msec\nrounds: 312"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 414.84495424332925,
            "unit": "iter/sec",
            "range": "stddev: 0.000030770436681717925",
            "extra": "mean: 2.4105391418439317 msec\nrounds: 423"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 953.5624996426468,
            "unit": "iter/sec",
            "range": "stddev: 0.00002677741200031295",
            "extra": "mean: 1.0486989582484167 msec\nrounds: 982"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.937423003914986,
            "unit": "iter/sec",
            "range": "stddev: 0.0007151867971020857",
            "extra": "mean: 100.62971049999945 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.124152724154433,
            "unit": "iter/sec",
            "range": "stddev: 0.0005376569574847285",
            "extra": "mean: 98.77369763636392 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 326.65233617843734,
            "unit": "iter/sec",
            "range": "stddev: 0.00010316640661998701",
            "extra": "mean: 3.0613587880594224 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 670.4896665177179,
            "unit": "iter/sec",
            "range": "stddev: 0.000028005395230965574",
            "extra": "mean: 1.4914472958153706 msec\nrounds: 693"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 856.5285057419825,
            "unit": "iter/sec",
            "range": "stddev: 0.00006602659196341199",
            "extra": "mean: 1.167503466955525 msec\nrounds: 923"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 772.8208191746335,
            "unit": "iter/sec",
            "range": "stddev: 0.00006242900414067728",
            "extra": "mean: 1.293960999999964 msec\nrounds: 885"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729519729046,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 236.40266846742676,
            "unit": "iter/sec",
            "range": "stddev: 0.0001646943871538103",
            "extra": "mean: 4.230070694560655 msec\nrounds: 239"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 345.3556407030869,
            "unit": "iter/sec",
            "range": "stddev: 0.000040891005375850195",
            "extra": "mean: 2.8955658519552934 msec\nrounds: 358"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 415.3382720302532,
            "unit": "iter/sec",
            "range": "stddev: 0.00011749357854014108",
            "extra": "mean: 2.4076760254040837 msec\nrounds: 433"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1053.0851989686264,
            "unit": "iter/sec",
            "range": "stddev: 0.000045862274879033525",
            "extra": "mean: 949.5907842778372 usec\nrounds: 1094"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 217.30227796012215,
            "unit": "iter/sec",
            "range": "stddev: 0.00013729624219312018",
            "extra": "mean: 4.601884570135584 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 309.29547168444446,
            "unit": "iter/sec",
            "range": "stddev: 0.000046739034015095835",
            "extra": "mean: 3.23315435093159 msec\nrounds: 322"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 400.73170828954096,
            "unit": "iter/sec",
            "range": "stddev: 0.00008510219440701845",
            "extra": "mean: 2.495435173493856 msec\nrounds: 415"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 946.9587627780138,
            "unit": "iter/sec",
            "range": "stddev: 0.00002345524442749437",
            "extra": "mean: 1.0560121932515663 msec\nrounds: 978"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.03905101497272,
            "unit": "iter/sec",
            "range": "stddev: 0.0008997524287676403",
            "extra": "mean: 99.61100889999983 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.24056176251211,
            "unit": "iter/sec",
            "range": "stddev: 0.0005868553625971648",
            "extra": "mean: 97.65089290909077 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 328.970417026821,
            "unit": "iter/sec",
            "range": "stddev: 0.00003842083632442361",
            "extra": "mean: 3.0397870089287387 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 678.318676949315,
            "unit": "iter/sec",
            "range": "stddev: 0.00008188939988940844",
            "extra": "mean: 1.4742333271692025 msec\nrounds: 703"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 862.8057252766702,
            "unit": "iter/sec",
            "range": "stddev: 0.000043109822659480356",
            "extra": "mean: 1.1590094626218859 msec\nrounds: 923"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 773.7762113342499,
            "unit": "iter/sec",
            "range": "stddev: 0.00010815459220569107",
            "extra": "mean: 1.2923633285076888 msec\nrounds: 898"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729605996984,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 233.37257225627235,
            "unit": "iter/sec",
            "range": "stddev: 0.00004180252732366263",
            "extra": "mean: 4.284993691983112 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 341.10208147331406,
            "unit": "iter/sec",
            "range": "stddev: 0.0000822144852643239",
            "extra": "mean: 2.931673696275097 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 422.0533635115458,
            "unit": "iter/sec",
            "range": "stddev: 0.000036218778123443525",
            "extra": "mean: 2.369368630733928 msec\nrounds: 436"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1054.2140241210182,
            "unit": "iter/sec",
            "range": "stddev: 0.000038484580163388826",
            "extra": "mean: 948.5739869888179 usec\nrounds: 1076"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 214.08795970812744,
            "unit": "iter/sec",
            "range": "stddev: 0.00008037522022977093",
            "extra": "mean: 4.670977300000103 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 308.6093926156294,
            "unit": "iter/sec",
            "range": "stddev: 0.00003943628077532207",
            "extra": "mean: 3.2403420761904425 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 408.85106086386935,
            "unit": "iter/sec",
            "range": "stddev: 0.00009578772072985004",
            "extra": "mean: 2.4458784523808763 msec\nrounds: 420"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 950.7380518189806,
            "unit": "iter/sec",
            "range": "stddev: 0.000029263744612668552",
            "extra": "mean: 1.0518144278403183 msec\nrounds: 977"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.782296545759221,
            "unit": "iter/sec",
            "range": "stddev: 0.004801875153998006",
            "extra": "mean: 102.22548410000059 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.229290447416286,
            "unit": "iter/sec",
            "range": "stddev: 0.0007198184593571044",
            "extra": "mean: 97.75849118181799 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 322.9321281906934,
            "unit": "iter/sec",
            "range": "stddev: 0.00003886300460304777",
            "extra": "mean: 3.09662592447133 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 667.0654594910865,
            "unit": "iter/sec",
            "range": "stddev: 0.000027909865153531992",
            "extra": "mean: 1.499103252569716 msec\nrounds: 681"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 845.8113084115882,
            "unit": "iter/sec",
            "range": "stddev: 0.000045751246806070355",
            "extra": "mean: 1.1822967960525073 msec\nrounds: 912"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 783.2968929329836,
            "unit": "iter/sec",
            "range": "stddev: 0.00007090112518727299",
            "extra": "mean: 1.27665513424366 msec\nrounds: 879"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729606343501,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 231.85191343930498,
            "unit": "iter/sec",
            "range": "stddev: 0.0001107082896684398",
            "extra": "mean: 4.31309789583334 msec\nrounds: 240"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 343.324609777369,
            "unit": "iter/sec",
            "range": "stddev: 0.000038047565122502766",
            "extra": "mean: 2.9126953661971866 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 431.6151116575157,
            "unit": "iter/sec",
            "range": "stddev: 0.000028233477443428907",
            "extra": "mean: 2.3168790271492967 msec\nrounds: 442"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1028.8682472620167,
            "unit": "iter/sec",
            "range": "stddev: 0.0001352161361434982",
            "extra": "mean: 971.941745370372 usec\nrounds: 1080"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 214.21776990365203,
            "unit": "iter/sec",
            "range": "stddev: 0.00011182399268674406",
            "extra": "mean: 4.668146813636266 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 307.3989887708721,
            "unit": "iter/sec",
            "range": "stddev: 0.00010586041325878916",
            "extra": "mean: 3.2531011373800456 msec\nrounds: 313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 410.03095093371843,
            "unit": "iter/sec",
            "range": "stddev: 0.00007200577987513071",
            "extra": "mean: 2.4388402819904447 msec\nrounds: 422"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 946.9946088167326,
            "unit": "iter/sec",
            "range": "stddev: 0.00007375600125707423",
            "extra": "mean: 1.0559722206333333 msec\nrounds: 979"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.922400901278607,
            "unit": "iter/sec",
            "range": "stddev: 0.0007113858952524888",
            "extra": "mean: 100.78205970000056 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.192494203903724,
            "unit": "iter/sec",
            "range": "stddev: 0.0007412943455819921",
            "extra": "mean: 98.11141218181905 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 330.97712244953374,
            "unit": "iter/sec",
            "range": "stddev: 0.00017335005842897177",
            "extra": "mean: 3.021356861764597 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 674.0621303421716,
            "unit": "iter/sec",
            "range": "stddev: 0.00005725494863410632",
            "extra": "mean: 1.4835427700001094 msec\nrounds: 700"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 851.2439040459382,
            "unit": "iter/sec",
            "range": "stddev: 0.00005424563291206402",
            "extra": "mean: 1.1747514375692187 msec\nrounds: 905"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 786.7502468288443,
            "unit": "iter/sec",
            "range": "stddev: 0.000051251491539264126",
            "extra": "mean: 1.271051396590852 msec\nrounds: 880"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729692746172,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 229.97644300188324,
            "unit": "iter/sec",
            "range": "stddev: 0.00013082446008273193",
            "extra": "mean: 4.348271444444469 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 340.7505369968747,
            "unit": "iter/sec",
            "range": "stddev: 0.000047574619613493335",
            "extra": "mean: 2.9346982364672596 msec\nrounds: 351"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 417.35230847336976,
            "unit": "iter/sec",
            "range": "stddev: 0.00006751642102884567",
            "extra": "mean: 2.3960571912442354 msec\nrounds: 434"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1056.7087972496731,
            "unit": "iter/sec",
            "range": "stddev: 0.00003649474342399855",
            "extra": "mean: 946.3345082417495 usec\nrounds: 1092"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 211.6480210730879,
            "unit": "iter/sec",
            "range": "stddev: 0.0000672899161179705",
            "extra": "mean: 4.724825655963362 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 306.3350583331222,
            "unit": "iter/sec",
            "range": "stddev: 0.00008175096364170686",
            "extra": "mean: 3.2643994632588087 msec\nrounds: 313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 414.11164755883027,
            "unit": "iter/sec",
            "range": "stddev: 0.00003293454781236149",
            "extra": "mean: 2.414807711627904 msec\nrounds: 430"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 953.6468251076847,
            "unit": "iter/sec",
            "range": "stddev: 0.000019720272584799694",
            "extra": "mean: 1.0486062278738058 msec\nrounds: 983"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.94419277250458,
            "unit": "iter/sec",
            "range": "stddev: 0.00019871979989848055",
            "extra": "mean: 100.56120420000028 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.232281458644115,
            "unit": "iter/sec",
            "range": "stddev: 0.00023411970733157946",
            "extra": "mean: 97.72991527272849 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 329.45331070633773,
            "unit": "iter/sec",
            "range": "stddev: 0.00004800958109960838",
            "extra": "mean: 3.035331464285579 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 698.6707990347,
            "unit": "iter/sec",
            "range": "stddev: 0.000030623775171375495",
            "extra": "mean: 1.4312892443503056 msec\nrounds: 708"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 867.2649425987016,
            "unit": "iter/sec",
            "range": "stddev: 0.00005294454767215311",
            "extra": "mean: 1.1530501821087875 msec\nrounds: 939"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 785.662453600595,
            "unit": "iter/sec",
            "range": "stddev: 0.000048030805955656244",
            "extra": "mean: 1.272811237723175 msec\nrounds: 896"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729693635237,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 227.89874859623404,
            "unit": "iter/sec",
            "range": "stddev: 0.00006558433882066868",
            "extra": "mean: 4.387913519313308 msec\nrounds: 233"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 338.90047910341264,
            "unit": "iter/sec",
            "range": "stddev: 0.0001300881310658117",
            "extra": "mean: 2.9507187556818364 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 419.1212365389246,
            "unit": "iter/sec",
            "range": "stddev: 0.00004973653566579582",
            "extra": "mean: 2.3859444781608627 msec\nrounds: 435"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1061.799240702205,
            "unit": "iter/sec",
            "range": "stddev: 0.00003644790099262527",
            "extra": "mean: 941.7976220614596 usec\nrounds: 1106"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 212.3707575183027,
            "unit": "iter/sec",
            "range": "stddev: 0.00006784018812060896",
            "extra": "mean: 4.708746211981738 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 304.7444828559703,
            "unit": "iter/sec",
            "range": "stddev: 0.0001018398442196488",
            "extra": "mean: 3.281437585443095 msec\nrounds: 316"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 402.5326902830828,
            "unit": "iter/sec",
            "range": "stddev: 0.00021161748009884535",
            "extra": "mean: 2.4842702819906277 msec\nrounds: 422"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 969.7195064648027,
            "unit": "iter/sec",
            "range": "stddev: 0.000024692161413892096",
            "extra": "mean: 1.0312260332326277 msec\nrounds: 993"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.887327662383255,
            "unit": "iter/sec",
            "range": "stddev: 0.0005184512333793932",
            "extra": "mean: 101.13956310000134 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.059265295441655,
            "unit": "iter/sec",
            "range": "stddev: 0.0008660027941312508",
            "extra": "mean: 99.41083872727253 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 328.4224412626885,
            "unit": "iter/sec",
            "range": "stddev: 0.00005872192179648645",
            "extra": "mean: 3.044858920588044 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 678.664104892105,
            "unit": "iter/sec",
            "range": "stddev: 0.00005827533094658105",
            "extra": "mean: 1.4734829686608832 msec\nrounds: 702"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 858.7055894221702,
            "unit": "iter/sec",
            "range": "stddev: 0.00003905894773505134",
            "extra": "mean: 1.1645434853555663 msec\nrounds: 956"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 782.2914965727887,
            "unit": "iter/sec",
            "range": "stddev: 0.00006171865432168335",
            "extra": "mean: 1.2782958837990572 msec\nrounds: 895"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729694132195,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 227.348274226084,
            "unit": "iter/sec",
            "range": "stddev: 0.0001432942922860303",
            "extra": "mean: 4.398537896995695 msec\nrounds: 233"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 340.0844680036223,
            "unit": "iter/sec",
            "range": "stddev: 0.000031703657980452375",
            "extra": "mean: 2.9404459599999986 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 420.2058883366756,
            "unit": "iter/sec",
            "range": "stddev: 0.00016182196461569706",
            "extra": "mean: 2.3797857853881004 msec\nrounds: 438"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1057.5208983632745,
            "unit": "iter/sec",
            "range": "stddev: 0.000018166235862051805",
            "extra": "mean: 945.6077903970507 usec\nrounds: 1083"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 213.62185635795217,
            "unit": "iter/sec",
            "range": "stddev: 0.00010099901595276081",
            "extra": "mean: 4.68116894520552 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 305.8859896559743,
            "unit": "iter/sec",
            "range": "stddev: 0.00011062318588109939",
            "extra": "mean: 3.2691919009585435 msec\nrounds: 313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 406.6383612255716,
            "unit": "iter/sec",
            "range": "stddev: 0.00003507542388463791",
            "extra": "mean: 2.459187561611476 msec\nrounds: 422"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 958.0128888213256,
            "unit": "iter/sec",
            "range": "stddev: 0.00004558475134641661",
            "extra": "mean: 1.0438272925851055 msec\nrounds: 998"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.09003563529994,
            "unit": "iter/sec",
            "range": "stddev: 0.0002825538908892102",
            "extra": "mean: 99.10767772727235 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.208581865319129,
            "unit": "iter/sec",
            "range": "stddev: 0.0005519571717196497",
            "extra": "mean: 97.95679881818131 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 325.48326939710614,
            "unit": "iter/sec",
            "range": "stddev: 0.00004192542905824508",
            "extra": "mean: 3.072354538690433 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 682.432048162753,
            "unit": "iter/sec",
            "range": "stddev: 0.00008311876229487127",
            "extra": "mean: 1.4653473597733357 msec\nrounds: 706"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 861.9609482886935,
            "unit": "iter/sec",
            "range": "stddev: 0.00004892973691158767",
            "extra": "mean: 1.1601453661971162 msec\nrounds: 923"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 787.5160249611798,
            "unit": "iter/sec",
            "range": "stddev: 0.00003322229289733589",
            "extra": "mean: 1.269815430167652 msec\nrounds: 895"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729695064233,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 231.6047382096042,
            "unit": "iter/sec",
            "range": "stddev: 0.00006119435171554078",
            "extra": "mean: 4.317700957805931 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 339.341370685412,
            "unit": "iter/sec",
            "range": "stddev: 0.00003737482840578318",
            "extra": "mean: 2.946885014285672 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 420.8114897062477,
            "unit": "iter/sec",
            "range": "stddev: 0.00003491638843754981",
            "extra": "mean: 2.376360970319659 msec\nrounds: 438"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1058.4940807623766,
            "unit": "iter/sec",
            "range": "stddev: 0.000022470708096349713",
            "extra": "mean: 944.7383959669888 usec\nrounds: 1091"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 213.43357043058023,
            "unit": "iter/sec",
            "range": "stddev: 0.000137980664181785",
            "extra": "mean: 4.685298559090789 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 304.8554026855718,
            "unit": "iter/sec",
            "range": "stddev: 0.00008749736032951634",
            "extra": "mean: 3.2802436538459547 msec\nrounds: 312"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 412.30411789564704,
            "unit": "iter/sec",
            "range": "stddev: 0.000029474016303090604",
            "extra": "mean: 2.4253941607565923 msec\nrounds: 423"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 965.1769051434363,
            "unit": "iter/sec",
            "range": "stddev: 0.00004295190835636512",
            "extra": "mean: 1.0360794945164882 msec\nrounds: 1003"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.754349372206434,
            "unit": "iter/sec",
            "range": "stddev: 0.004998971266844187",
            "extra": "mean: 102.51837020000032 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.103752031072277,
            "unit": "iter/sec",
            "range": "stddev: 0.001026248508344222",
            "extra": "mean: 98.97313363636394 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 326.4804842139797,
            "unit": "iter/sec",
            "range": "stddev: 0.00005018417896287509",
            "extra": "mean: 3.062970218289025 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 668.9034657197519,
            "unit": "iter/sec",
            "range": "stddev: 0.00004748298757635565",
            "extra": "mean: 1.4949840317002727 msec\nrounds: 694"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 854.8297286893007,
            "unit": "iter/sec",
            "range": "stddev: 0.00003643421317360933",
            "extra": "mean: 1.1698236109936033 msec\nrounds: 946"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 793.4851929675073,
            "unit": "iter/sec",
            "range": "stddev: 0.0000260691900136885",
            "extra": "mean: 1.260262962513718 msec\nrounds: 907"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1729777207849,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 229.18901023774654,
            "unit": "iter/sec",
            "range": "stddev: 0.0004343065302323705",
            "extra": "mean: 4.363210953974894 msec\nrounds: 239"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 341.3241639701358,
            "unit": "iter/sec",
            "range": "stddev: 0.000041747299906695295",
            "extra": "mean: 2.9297662033898515 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 423.0948777348739,
            "unit": "iter/sec",
            "range": "stddev: 0.00007354478398719707",
            "extra": "mean: 2.3635360592255505 msec\nrounds: 439"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1036.114424105887,
            "unit": "iter/sec",
            "range": "stddev: 0.000038037011232786804",
            "extra": "mean: 965.1443670065186 usec\nrounds: 1079"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 213.65379612129075,
            "unit": "iter/sec",
            "range": "stddev: 0.00005145498140349316",
            "extra": "mean: 4.680469142857178 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 310.1822860961026,
            "unit": "iter/sec",
            "range": "stddev: 0.00008890601171686216",
            "extra": "mean: 3.223910728706712 msec\nrounds: 317"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 408.02444149170634,
            "unit": "iter/sec",
            "range": "stddev: 0.00006987986586270884",
            "extra": "mean: 2.4508335734596587 msec\nrounds: 422"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 951.8972670799039,
            "unit": "iter/sec",
            "range": "stddev: 0.00004212162876527082",
            "extra": "mean: 1.050533534010092 msec\nrounds: 985"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.981313224931773,
            "unit": "iter/sec",
            "range": "stddev: 0.001218542325549957",
            "extra": "mean: 100.18721760000027 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.198410777012908,
            "unit": "iter/sec",
            "range": "stddev: 0.00043856562750080677",
            "extra": "mean: 98.05449318181884 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 327.89413650992185,
            "unit": "iter/sec",
            "range": "stddev: 0.00003752378572123457",
            "extra": "mean: 3.0497648132531965 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 669.733544635154,
            "unit": "iter/sec",
            "range": "stddev: 0.00007424430428696702",
            "extra": "mean: 1.4931311235795468 msec\nrounds: 704"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 853.5977294991815,
            "unit": "iter/sec",
            "range": "stddev: 0.00004081419664912282",
            "extra": "mean: 1.1715120195864566 msec\nrounds: 919"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 786.333171418161,
            "unit": "iter/sec",
            "range": "stddev: 0.00007081348246574805",
            "extra": "mean: 1.271725569196691 msec\nrounds: 896"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1730122967983,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 234.51924330501606,
            "unit": "iter/sec",
            "range": "stddev: 0.00016201743045243794",
            "extra": "mean: 4.264042412500021 msec\nrounds: 240"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 341.9673723561729,
            "unit": "iter/sec",
            "range": "stddev: 0.00022191846507890988",
            "extra": "mean: 2.924255589385467 msec\nrounds: 358"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 427.0309337751566,
            "unit": "iter/sec",
            "range": "stddev: 0.00010835647261439145",
            "extra": "mean: 2.3417507278911254 msec\nrounds: 441"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1057.304440349735,
            "unit": "iter/sec",
            "range": "stddev: 0.000030318395335616335",
            "extra": "mean: 945.8013811700444 usec\nrounds: 1094"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 212.67459976292002,
            "unit": "iter/sec",
            "range": "stddev: 0.00011542966948474402",
            "extra": "mean: 4.7020189581395915 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 303.45380789539735,
            "unit": "iter/sec",
            "range": "stddev: 0.00032835883269572477",
            "extra": "mean: 3.2953944685535372 msec\nrounds: 318"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 407.4415749562974,
            "unit": "iter/sec",
            "range": "stddev: 0.00007876700503976242",
            "extra": "mean: 2.454339619385334 msec\nrounds: 423"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 967.7068269339543,
            "unit": "iter/sec",
            "range": "stddev: 0.00004118573479116489",
            "extra": "mean: 1.0333708228228196 msec\nrounds: 999"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.06727846423949,
            "unit": "iter/sec",
            "range": "stddev: 0.0007314054254317042",
            "extra": "mean: 99.3317115 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.307696143308636,
            "unit": "iter/sec",
            "range": "stddev: 0.0007448814376187062",
            "extra": "mean: 97.01488927272676 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 328.071576555338,
            "unit": "iter/sec",
            "range": "stddev: 0.00009524994789484792",
            "extra": "mean: 3.048115324404897 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 684.9741150181958,
            "unit": "iter/sec",
            "range": "stddev: 0.000034531880009137845",
            "extra": "mean: 1.4599091820768086 msec\nrounds: 703"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 884.6606109869385,
            "unit": "iter/sec",
            "range": "stddev: 0.00004352097270279029",
            "extra": "mean: 1.130376991561077 msec\nrounds: 948"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 797.0895204618826,
            "unit": "iter/sec",
            "range": "stddev: 0.00011260429866742064",
            "extra": "mean: 1.2545642293986483 msec\nrounds: 898"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1730125311107,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 227.95905372044604,
            "unit": "iter/sec",
            "range": "stddev: 0.00014623846763731698",
            "extra": "mean: 4.386752724576292 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 335.84526367418215,
            "unit": "iter/sec",
            "range": "stddev: 0.00009499118665540198",
            "extra": "mean: 2.9775617171428768 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 412.29756310220165,
            "unit": "iter/sec",
            "range": "stddev: 0.00007050451656677506",
            "extra": "mean: 2.425432720183497 msec\nrounds: 436"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1051.456328926986,
            "unit": "iter/sec",
            "range": "stddev: 0.000021714408943515023",
            "extra": "mean: 951.0618486841985 usec\nrounds: 1064"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 212.08899283851713,
            "unit": "iter/sec",
            "range": "stddev: 0.0000385122682665932",
            "extra": "mean: 4.715001880184287 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 301.3500173632628,
            "unit": "iter/sec",
            "range": "stddev: 0.00008359439017166966",
            "extra": "mean: 3.31840033974363 msec\nrounds: 312"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 408.79853903031255,
            "unit": "iter/sec",
            "range": "stddev: 0.000029851332162438203",
            "extra": "mean: 2.446192695238203 msec\nrounds: 420"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 947.7550940574343,
            "unit": "iter/sec",
            "range": "stddev: 0.00003913505618862911",
            "extra": "mean: 1.0551249012220023 msec\nrounds: 982"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.707168563625,
            "unit": "iter/sec",
            "range": "stddev: 0.0002345181462712667",
            "extra": "mean: 103.01665140000047 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.22387312574972,
            "unit": "iter/sec",
            "range": "stddev: 0.00020614271676973724",
            "extra": "mean: 97.8102904545453 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 320.79011856877656,
            "unit": "iter/sec",
            "range": "stddev: 0.00007277771170715164",
            "extra": "mean: 3.117303003164677 msec\nrounds: 316"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 672.196619016057,
            "unit": "iter/sec",
            "range": "stddev: 0.00003632451625444201",
            "extra": "mean: 1.4876599669063684 msec\nrounds: 695"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 837.2638233574099,
            "unit": "iter/sec",
            "range": "stddev: 0.00004494815007431904",
            "extra": "mean: 1.1943666644881674 msec\nrounds: 918"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 739.2201129798622,
            "unit": "iter/sec",
            "range": "stddev: 0.00017072681532766184",
            "extra": "mean: 1.3527770449439083 msec\nrounds: 890"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1730128597774,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 230.42046550007296,
            "unit": "iter/sec",
            "range": "stddev: 0.0001626481486040378",
            "extra": "mean: 4.339892282700397 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 343.1119428393805,
            "unit": "iter/sec",
            "range": "stddev: 0.00015699173529402794",
            "extra": "mean: 2.9145007070422073 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 424.53455034948763,
            "unit": "iter/sec",
            "range": "stddev: 0.00006575227465748706",
            "extra": "mean: 2.3555208855834575 msec\nrounds: 437"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1038.4990421339971,
            "unit": "iter/sec",
            "range": "stddev: 0.0000228149456526384",
            "extra": "mean: 962.9281871508654 usec\nrounds: 1074"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 215.53013527039695,
            "unit": "iter/sec",
            "range": "stddev: 0.00006485797620965785",
            "extra": "mean: 4.639722416289644 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 308.3788015883936,
            "unit": "iter/sec",
            "range": "stddev: 0.0001253003213298585",
            "extra": "mean: 3.2427650501565366 msec\nrounds: 319"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 410.9312859181082,
            "unit": "iter/sec",
            "range": "stddev: 0.00005993441295364199",
            "extra": "mean: 2.433496874704457 msec\nrounds: 423"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 953.8588664343443,
            "unit": "iter/sec",
            "range": "stddev: 0.00005619865581606137",
            "extra": "mean: 1.048373124357629 msec\nrounds: 973"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.9966452167438,
            "unit": "iter/sec",
            "range": "stddev: 0.0002957608000766587",
            "extra": "mean: 100.03355909090962 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.296131965523339,
            "unit": "iter/sec",
            "range": "stddev: 0.0006402775402928377",
            "extra": "mean: 97.12385227272787 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 330.55197439222115,
            "unit": "iter/sec",
            "range": "stddev: 0.00008375203602909444",
            "extra": "mean: 3.0252428588232716 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 676.142504209089,
            "unit": "iter/sec",
            "range": "stddev: 0.00010304834872876628",
            "extra": "mean: 1.4789781647727354 msec\nrounds: 704"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 845.4362455859117,
            "unit": "iter/sec",
            "range": "stddev: 0.00004569992579442908",
            "extra": "mean: 1.1828213010987851 msec\nrounds: 910"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 781.8271153815762,
            "unit": "iter/sec",
            "range": "stddev: 0.000037775504154300125",
            "extra": "mean: 1.2790551521252151 msec\nrounds: 894"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
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
        "date": 1730296663197,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 231.214055994552,
            "unit": "iter/sec",
            "range": "stddev: 0.00012437393028433567",
            "extra": "mean: 4.324996573839622 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 342.6852819270997,
            "unit": "iter/sec",
            "range": "stddev: 0.000036919793641178306",
            "extra": "mean: 2.918129411267603 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 428.92230892371646,
            "unit": "iter/sec",
            "range": "stddev: 0.00003398242986647255",
            "extra": "mean: 2.331424547511352 msec\nrounds: 442"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1026.7908775213782,
            "unit": "iter/sec",
            "range": "stddev: 0.00014976561963267218",
            "extra": "mean: 973.9081461396988 usec\nrounds: 1088"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 217.1305293750446,
            "unit": "iter/sec",
            "range": "stddev: 0.00010478657980556476",
            "extra": "mean: 4.605524625570837 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 305.55926865209204,
            "unit": "iter/sec",
            "range": "stddev: 0.00013248298980043534",
            "extra": "mean: 3.2726875031848373 msec\nrounds: 314"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 413.2678334084898,
            "unit": "iter/sec",
            "range": "stddev: 0.00006957753639273253",
            "extra": "mean: 2.4197382887323857 msec\nrounds: 426"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 961.886148874349,
            "unit": "iter/sec",
            "range": "stddev: 0.000019565132458616785",
            "extra": "mean: 1.0396240773092054 msec\nrounds: 996"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.989850838285884,
            "unit": "iter/sec",
            "range": "stddev: 0.0006553336722843109",
            "extra": "mean: 100.1015947272728 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.087520677457272,
            "unit": "iter/sec",
            "range": "stddev: 0.0010317422736264262",
            "extra": "mean: 99.13238663636292 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 329.9440055327538,
            "unit": "iter/sec",
            "range": "stddev: 0.00008468450766661619",
            "extra": "mean: 3.0308173000001033 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 683.1808108235319,
            "unit": "iter/sec",
            "range": "stddev: 0.0000598513880713501",
            "extra": "mean: 1.4637413465910472 msec\nrounds: 704"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 867.04147637326,
            "unit": "iter/sec",
            "range": "stddev: 0.00003819276507141094",
            "extra": "mean: 1.1533473625539705 msec\nrounds: 924"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 795.9136109748381,
            "unit": "iter/sec",
            "range": "stddev: 0.00004046251806715041",
            "extra": "mean: 1.2564177647058907 msec\nrounds: 901"
          }
        ]
      }
    ]
  }
}