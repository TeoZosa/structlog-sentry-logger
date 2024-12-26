window.BENCHMARK_DATA = {
  "lastUpdate": 1735225294846,
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
        "date": 1730731551288,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 232.9302607488429,
            "unit": "iter/sec",
            "range": "stddev: 0.0001717962740009545",
            "extra": "mean: 4.293130470833286 msec\nrounds: 240"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 346.2130386339444,
            "unit": "iter/sec",
            "range": "stddev: 0.000044044706887244154",
            "extra": "mean: 2.888394971910094 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 423.4877499403197,
            "unit": "iter/sec",
            "range": "stddev: 0.00003330967187435855",
            "extra": "mean: 2.3613433922018423 msec\nrounds: 436"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1042.2925263007226,
            "unit": "iter/sec",
            "range": "stddev: 0.0000365503447675141",
            "extra": "mean: 959.4235541045027 usec\nrounds: 1072"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 211.88131779003044,
            "unit": "iter/sec",
            "range": "stddev: 0.000057029680445655786",
            "extra": "mean: 4.719623279816379 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 308.58606849151124,
            "unit": "iter/sec",
            "range": "stddev: 0.00003975866573440794",
            "extra": "mean: 3.2405869937304335 msec\nrounds: 319"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 407.007935822141,
            "unit": "iter/sec",
            "range": "stddev: 0.00008709491896838848",
            "extra": "mean: 2.4569545504807833 msec\nrounds: 416"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 942.6592793393893,
            "unit": "iter/sec",
            "range": "stddev: 0.00002280079532072128",
            "extra": "mean: 1.060828681069999 msec\nrounds: 972"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.042733316586556,
            "unit": "iter/sec",
            "range": "stddev: 0.00030966917254363855",
            "extra": "mean: 99.5744852000005 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.323538214182072,
            "unit": "iter/sec",
            "range": "stddev: 0.0004096431982265422",
            "extra": "mean: 96.86601427272669 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 322.906026005322,
            "unit": "iter/sec",
            "range": "stddev: 0.00009254230722664864",
            "extra": "mean: 3.096876240964045 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 667.0782400634962,
            "unit": "iter/sec",
            "range": "stddev: 0.000043837625859083485",
            "extra": "mean: 1.4990745312046374 msec\nrounds: 689"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 861.0024625625732,
            "unit": "iter/sec",
            "range": "stddev: 0.00004491504029246814",
            "extra": "mean: 1.1614368639826336 msec\nrounds: 919"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 780.2245987117997,
            "unit": "iter/sec",
            "range": "stddev: 0.000039077223651084433",
            "extra": "mean: 1.2816822254144042 msec\nrounds: 905"
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
        "date": 1730734590718,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 230.01666213410462,
            "unit": "iter/sec",
            "range": "stddev: 0.00014626182485764786",
            "extra": "mean: 4.347511135593206 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 337.17484823677194,
            "unit": "iter/sec",
            "range": "stddev: 0.0000376617229160064",
            "extra": "mean: 2.9658202716763054 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 416.3566232135221,
            "unit": "iter/sec",
            "range": "stddev: 0.00004588735311097008",
            "extra": "mean: 2.4017871801385167 msec\nrounds: 433"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1030.7505652640573,
            "unit": "iter/sec",
            "range": "stddev: 0.00011366361705065238",
            "extra": "mean: 970.1668218283445 usec\nrounds: 1072"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 209.20208126179708,
            "unit": "iter/sec",
            "range": "stddev: 0.00013659885232469195",
            "extra": "mean: 4.780067167441763 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 302.9902621119165,
            "unit": "iter/sec",
            "range": "stddev: 0.000042031256841364696",
            "extra": "mean: 3.300436103225743 msec\nrounds: 310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 401.88733069313145,
            "unit": "iter/sec",
            "range": "stddev: 0.00009158387919832827",
            "extra": "mean: 2.4882595783134267 msec\nrounds: 415"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 947.8307528171122,
            "unit": "iter/sec",
            "range": "stddev: 0.000042558413258420196",
            "extra": "mean: 1.0550406779141024 msec\nrounds: 978"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.903701026344445,
            "unit": "iter/sec",
            "range": "stddev: 0.00028950452905519283",
            "extra": "mean: 100.97235340000061 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.201519650640995,
            "unit": "iter/sec",
            "range": "stddev: 0.00029145498155585186",
            "extra": "mean: 98.02461145454605 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 316.7153057047509,
            "unit": "iter/sec",
            "range": "stddev: 0.00008739763719072987",
            "extra": "mean: 3.1574097682927342 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 667.338225895348,
            "unit": "iter/sec",
            "range": "stddev: 0.000028321550544417586",
            "extra": "mean: 1.498490512301059 msec\nrounds: 691"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 852.0615665492749,
            "unit": "iter/sec",
            "range": "stddev: 0.000039983595761148266",
            "extra": "mean: 1.1736241126915914 msec\nrounds: 914"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 775.1214570503568,
            "unit": "iter/sec",
            "range": "stddev: 0.00005319891956857188",
            "extra": "mean: 1.2901203945577702 msec\nrounds: 882"
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
        "date": 1730735001769,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 232.990278479659,
            "unit": "iter/sec",
            "range": "stddev: 0.00005104441420356474",
            "extra": "mean: 4.2920245708333455 msec\nrounds: 240"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 348.30950848488476,
            "unit": "iter/sec",
            "range": "stddev: 0.00004612816996777142",
            "extra": "mean: 2.871009764705852 msec\nrounds: 357"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 424.6501634293885,
            "unit": "iter/sec",
            "range": "stddev: 0.00006626798272945658",
            "extra": "mean: 2.3548795835240073 msec\nrounds: 437"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1053.6506457462654,
            "unit": "iter/sec",
            "range": "stddev: 0.0000261547001102372",
            "extra": "mean: 949.0811817343248 usec\nrounds: 1084"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 213.919930512894,
            "unit": "iter/sec",
            "range": "stddev: 0.00009870968650019813",
            "extra": "mean: 4.674646245454558 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 311.59758494485004,
            "unit": "iter/sec",
            "range": "stddev: 0.00008621633045542054",
            "extra": "mean: 3.20926749216298 msec\nrounds: 319"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 409.1758061347404,
            "unit": "iter/sec",
            "range": "stddev: 0.00006994948994345988",
            "extra": "mean: 2.4439372636580154 msec\nrounds: 421"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 952.110235703898,
            "unit": "iter/sec",
            "range": "stddev: 0.000028886656232125146",
            "extra": "mean: 1.0502985500000397 msec\nrounds: 980"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.038846380185795,
            "unit": "iter/sec",
            "range": "stddev: 0.0004432068105532466",
            "extra": "mean: 99.6130394000005 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.28234823483004,
            "unit": "iter/sec",
            "range": "stddev: 0.0007858926797900232",
            "extra": "mean: 97.25404909091071 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 326.7079867502832,
            "unit": "iter/sec",
            "range": "stddev: 0.00008374808901810914",
            "extra": "mean: 3.0608373243239457 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 666.95617655501,
            "unit": "iter/sec",
            "range": "stddev: 0.000027845653775889788",
            "extra": "mean: 1.4993488855073538 msec\nrounds: 690"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 853.0954926565671,
            "unit": "iter/sec",
            "range": "stddev: 0.00012366714330803386",
            "extra": "mean: 1.1722017155265556 msec\nrounds: 921"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 788.2678979807007,
            "unit": "iter/sec",
            "range": "stddev: 0.000026614516291034562",
            "extra": "mean: 1.2686042430012585 msec\nrounds: 893"
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
        "date": 1730735477184,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 230.11721302794294,
            "unit": "iter/sec",
            "range": "stddev: 0.0002942433285676674",
            "extra": "mean: 4.345611468354481 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 346.2868805478677,
            "unit": "iter/sec",
            "range": "stddev: 0.000038143052131949626",
            "extra": "mean: 2.8877790530726406 msec\nrounds: 358"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 427.25681620407534,
            "unit": "iter/sec",
            "range": "stddev: 0.00008652738549059868",
            "extra": "mean: 2.340512689497642 msec\nrounds: 438"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1056.1767523871217,
            "unit": "iter/sec",
            "range": "stddev: 0.00002579587612719276",
            "extra": "mean: 946.8112205081642 usec\nrounds: 1102"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 214.85163116972814,
            "unit": "iter/sec",
            "range": "stddev: 0.00011180617039557702",
            "extra": "mean: 4.654374716894849 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 307.4357480753956,
            "unit": "iter/sec",
            "range": "stddev: 0.000050385369613658784",
            "extra": "mean: 3.2527121724138595 msec\nrounds: 319"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 405.2677296329069,
            "unit": "iter/sec",
            "range": "stddev: 0.000053252268055074324",
            "extra": "mean: 2.467504631828949 msec\nrounds: 421"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 965.3621598697875,
            "unit": "iter/sec",
            "range": "stddev: 0.00002230963274663632",
            "extra": "mean: 1.0358806690070435 msec\nrounds: 997"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.985045696611584,
            "unit": "iter/sec",
            "range": "stddev: 0.0006565912978851049",
            "extra": "mean: 100.14976699999973 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.186265070758656,
            "unit": "iter/sec",
            "range": "stddev: 0.0005305211460708869",
            "extra": "mean: 98.17140954545391 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 326.68560219781904,
            "unit": "iter/sec",
            "range": "stddev: 0.000050254678328321976",
            "extra": "mean: 3.0610470534127385 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 672.5937449483421,
            "unit": "iter/sec",
            "range": "stddev: 0.000034235504147332334",
            "extra": "mean: 1.4867815936599351 msec\nrounds: 694"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 846.2875840660109,
            "unit": "iter/sec",
            "range": "stddev: 0.00004498940020440955",
            "extra": "mean: 1.1816314203683265 msec\nrounds: 923"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 795.138598236959,
            "unit": "iter/sec",
            "range": "stddev: 0.00005322702702473366",
            "extra": "mean: 1.2576423811110102 msec\nrounds: 900"
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
        "date": 1730904522619,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 229.8603843284409,
            "unit": "iter/sec",
            "range": "stddev: 0.00013006622760738414",
            "extra": "mean: 4.350466927659569 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 343.516386235249,
            "unit": "iter/sec",
            "range": "stddev: 0.00008241436123535469",
            "extra": "mean: 2.911069282485913 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 424.31490784315514,
            "unit": "iter/sec",
            "range": "stddev: 0.00006521420870876527",
            "extra": "mean: 2.3567401981776293 msec\nrounds: 439"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1042.0434023427163,
            "unit": "iter/sec",
            "range": "stddev: 0.00004740093147508392",
            "extra": "mean: 959.6529259259312 usec\nrounds: 1080"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 212.17755180991037,
            "unit": "iter/sec",
            "range": "stddev: 0.00009799825642006608",
            "extra": "mean: 4.713033925925863 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 304.47497230657393,
            "unit": "iter/sec",
            "range": "stddev: 0.00009476048154854248",
            "extra": "mean: 3.284342198718082 msec\nrounds: 312"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 402.97078689426866,
            "unit": "iter/sec",
            "range": "stddev: 0.0000699335056790756",
            "extra": "mean: 2.4815694648912094 msec\nrounds: 413"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 958.3965819356024,
            "unit": "iter/sec",
            "range": "stddev: 0.00002060102638849416",
            "extra": "mean: 1.0434093973711533 msec\nrounds: 989"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.039357403260952,
            "unit": "iter/sec",
            "range": "stddev: 0.00041890728948365704",
            "extra": "mean: 99.60796889999983 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.298655359901478,
            "unit": "iter/sec",
            "range": "stddev: 0.0003922561210434552",
            "extra": "mean: 97.10005481818226 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 324.1263949273672,
            "unit": "iter/sec",
            "range": "stddev: 0.00005064874452842093",
            "extra": "mean: 3.0852161861859106 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 676.6849396259818,
            "unit": "iter/sec",
            "range": "stddev: 0.00005616636635255724",
            "extra": "mean: 1.4777926054519865 msec\nrounds: 697"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 863.3126520739099,
            "unit": "iter/sec",
            "range": "stddev: 0.00005070416076937663",
            "extra": "mean: 1.1583289062169193 msec\nrounds: 949"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 795.7637126181087,
            "unit": "iter/sec",
            "range": "stddev: 0.00005293099366913436",
            "extra": "mean: 1.2566544366668118 msec\nrounds: 900"
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
        "date": 1730939040430,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 213.39975861058306,
            "unit": "iter/sec",
            "range": "stddev: 0.000052364285592141504",
            "extra": "mean: 4.686040914529916 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 313.4496449284177,
            "unit": "iter/sec",
            "range": "stddev: 0.00006064609069610642",
            "extra": "mean: 3.190305097421213 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 387.31222152509037,
            "unit": "iter/sec",
            "range": "stddev: 0.000038162793134918505",
            "extra": "mean: 2.581896321428678 msec\nrounds: 420"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 934.559417778035,
            "unit": "iter/sec",
            "range": "stddev: 0.000039882622998501015",
            "extra": "mean: 1.0700229230770082 msec\nrounds: 1079"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 195.77337922743885,
            "unit": "iter/sec",
            "range": "stddev: 0.00013774721364058883",
            "extra": "mean: 5.107946769607805 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 277.2246640684682,
            "unit": "iter/sec",
            "range": "stddev: 0.00012252289620476458",
            "extra": "mean: 3.607182655844152 msec\nrounds: 308"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 368.8516088036595,
            "unit": "iter/sec",
            "range": "stddev: 0.0000399607716648397",
            "extra": "mean: 2.711117360294075 msec\nrounds: 408"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 841.5251764014647,
            "unit": "iter/sec",
            "range": "stddev: 0.000059288459448289024",
            "extra": "mean: 1.188318576844256 msec\nrounds: 976"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 8.959904109242602,
            "unit": "iter/sec",
            "range": "stddev: 0.0003871879616985483",
            "extra": "mean: 111.6083372999995 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 9.05110778245956,
            "unit": "iter/sec",
            "range": "stddev: 0.005576776499466574",
            "extra": "mean: 110.48371360000075 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 297.5358453441465,
            "unit": "iter/sec",
            "range": "stddev: 0.00015719771585116188",
            "extra": "mean: 3.3609395830722333 msec\nrounds: 319"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 596.0360592424516,
            "unit": "iter/sec",
            "range": "stddev: 0.0000636748667215353",
            "extra": "mean: 1.6777508415698499 msec\nrounds: 688"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 790.3525057826236,
            "unit": "iter/sec",
            "range": "stddev: 0.00006430961943306238",
            "extra": "mean: 1.2652582141303887 msec\nrounds: 920"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 717.0197252796149,
            "unit": "iter/sec",
            "range": "stddev: 0.0001269873374259224",
            "extra": "mean: 1.3946617711389067 msec\nrounds: 887"
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
        "date": 1730940335486,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 237.91078252925985,
            "unit": "iter/sec",
            "range": "stddev: 0.00024305324674719708",
            "extra": "mean: 4.203256318897666 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 361.608660382008,
            "unit": "iter/sec",
            "range": "stddev: 0.00008643520844932622",
            "extra": "mean: 2.76542049336868 msec\nrounds: 377"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 438.36787797325314,
            "unit": "iter/sec",
            "range": "stddev: 0.0001096941699039844",
            "extra": "mean: 2.2811890429184563 msec\nrounds: 466"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1101.437730345171,
            "unit": "iter/sec",
            "range": "stddev: 0.000037648170750094046",
            "extra": "mean: 907.9042531860767 usec\nrounds: 1177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 224.1943254811885,
            "unit": "iter/sec",
            "range": "stddev: 0.00011298136234279777",
            "extra": "mean: 4.460416194092777 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 320.1050801760598,
            "unit": "iter/sec",
            "range": "stddev: 0.0001241259734455433",
            "extra": "mean: 3.123974163265368 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 428.0456487447662,
            "unit": "iter/sec",
            "range": "stddev: 0.0001175599486706653",
            "extra": "mean: 2.336199428571407 msec\nrounds: 455"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1021.954664355706,
            "unit": "iter/sec",
            "range": "stddev: 0.00011358931879721129",
            "extra": "mean: 978.5169879629177 usec\nrounds: 1080"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.420097148157229,
            "unit": "iter/sec",
            "range": "stddev: 0.0020029412701944678",
            "extra": "mean: 95.96839509090832 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.561426123733009,
            "unit": "iter/sec",
            "range": "stddev: 0.002097294415796234",
            "extra": "mean: 94.6841826363638 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 336.70140241726426,
            "unit": "iter/sec",
            "range": "stddev: 0.00010245124902559114",
            "extra": "mean: 2.9699905994473084 msec\nrounds: 362"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 708.2242998274359,
            "unit": "iter/sec",
            "range": "stddev: 0.00005804020908174833",
            "extra": "mean: 1.4119820517929949 msec\nrounds: 753"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 892.8871717737105,
            "unit": "iter/sec",
            "range": "stddev: 0.00005528265188212809",
            "extra": "mean: 1.1199623329938888 msec\nrounds: 982"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 832.7068441431918,
            "unit": "iter/sec",
            "range": "stddev: 0.00007364066823230752",
            "extra": "mean: 1.2009028231645476 msec\nrounds: 967"
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
        "date": 1730940750303,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 234.7240482097224,
            "unit": "iter/sec",
            "range": "stddev: 0.00014052231032115218",
            "extra": "mean: 4.2603218870292965 msec\nrounds: 239"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 346.62379435578646,
            "unit": "iter/sec",
            "range": "stddev: 0.00003553273397821565",
            "extra": "mean: 2.8849721694915322 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 422.8702921205969,
            "unit": "iter/sec",
            "range": "stddev: 0.000109839438187805",
            "extra": "mean: 2.3647913287671045 msec\nrounds: 438"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1057.3134586611286,
            "unit": "iter/sec",
            "range": "stddev: 0.00003747169760138504",
            "extra": "mean: 945.7933139963012 usec\nrounds: 1086"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 214.22086712284437,
            "unit": "iter/sec",
            "range": "stddev: 0.00010610034370046062",
            "extra": "mean: 4.668079321266834 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 308.2299749390331,
            "unit": "iter/sec",
            "range": "stddev: 0.000046555815988873425",
            "extra": "mean: 3.2443307961783945 msec\nrounds: 314"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 413.04506620664864,
            "unit": "iter/sec",
            "range": "stddev: 0.00009102646511404945",
            "extra": "mean: 2.4210433238771447 msec\nrounds: 423"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 941.5175057649609,
            "unit": "iter/sec",
            "range": "stddev: 0.00005526648418119005",
            "extra": "mean: 1.0621151427105155 msec\nrounds: 974"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.827043918929302,
            "unit": "iter/sec",
            "range": "stddev: 0.0005762994482625231",
            "extra": "mean: 101.76000110000061 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.168474558891695,
            "unit": "iter/sec",
            "range": "stddev: 0.00026903806649562794",
            "extra": "mean: 98.343167818182 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 321.243740542667,
            "unit": "iter/sec",
            "range": "stddev: 0.00003893812955139481",
            "extra": "mean: 3.1129011208459074 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 654.2514786872739,
            "unit": "iter/sec",
            "range": "stddev: 0.00005598947193688242",
            "extra": "mean: 1.5284642565981736 msec\nrounds: 682"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 866.3120587372973,
            "unit": "iter/sec",
            "range": "stddev: 0.00003971351056722685",
            "extra": "mean: 1.1543184582442048 msec\nrounds: 934"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 793.5961821173023,
            "unit": "iter/sec",
            "range": "stddev: 0.000037066589402928184",
            "extra": "mean: 1.260086707236942 msec\nrounds: 912"
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
        "date": 1730989374757,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 228.69922030149021,
            "unit": "iter/sec",
            "range": "stddev: 0.00010897909011999061",
            "extra": "mean: 4.372555353191486 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 338.6035297508609,
            "unit": "iter/sec",
            "range": "stddev: 0.000050636331797265574",
            "extra": "mean: 2.9533064842406818 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 422.86054162031775,
            "unit": "iter/sec",
            "range": "stddev: 0.00006572706247204768",
            "extra": "mean: 2.3648458571428734 msec\nrounds: 441"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1051.4534053874343,
            "unit": "iter/sec",
            "range": "stddev: 0.00003096371646670294",
            "extra": "mean: 951.0644930875706 usec\nrounds: 1085"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 211.6150665301093,
            "unit": "iter/sec",
            "range": "stddev: 0.00005315440442498846",
            "extra": "mean: 4.725561447004609 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 305.84756733544833,
            "unit": "iter/sec",
            "range": "stddev: 0.00009537817973855918",
            "extra": "mean: 3.269602595541384 msec\nrounds: 314"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 409.21130237758956,
            "unit": "iter/sec",
            "range": "stddev: 0.0000712391651090974",
            "extra": "mean: 2.4437252690476154 msec\nrounds: 420"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 959.523963187843,
            "unit": "iter/sec",
            "range": "stddev: 0.000021846210763018587",
            "extra": "mean: 1.0421834559271272 msec\nrounds: 987"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.964951134360923,
            "unit": "iter/sec",
            "range": "stddev: 0.0008103570083050808",
            "extra": "mean: 100.35172139999986 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.239110303376558,
            "unit": "iter/sec",
            "range": "stddev: 0.00020091605752182052",
            "extra": "mean: 97.66473554545354 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 324.4965236745177,
            "unit": "iter/sec",
            "range": "stddev: 0.00010812050993830648",
            "extra": "mean: 3.0816971124258883 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 669.7276275504134,
            "unit": "iter/sec",
            "range": "stddev: 0.00005910531278555012",
            "extra": "mean: 1.4931443154847683 msec\nrounds: 691"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 860.7182999982616,
            "unit": "iter/sec",
            "range": "stddev: 0.00006422196441653503",
            "extra": "mean: 1.1618203075292108 msec\nrounds: 943"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 789.3211841388098,
            "unit": "iter/sec",
            "range": "stddev: 0.00006734502602577858",
            "extra": "mean: 1.2669113918322763 msec\nrounds: 906"
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
        "date": 1731509172274,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 234.80091027812392,
            "unit": "iter/sec",
            "range": "stddev: 0.0001340445233056082",
            "extra": "mean: 4.2589272708333645 msec\nrounds: 240"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 343.386768719413,
            "unit": "iter/sec",
            "range": "stddev: 0.00007440304157292513",
            "extra": "mean: 2.912168117977535 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 427.5377495863649,
            "unit": "iter/sec",
            "range": "stddev: 0.00015844493893893118",
            "extra": "mean: 2.3389747477678453 msec\nrounds: 448"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1099.435053994378,
            "unit": "iter/sec",
            "range": "stddev: 0.00004016968513377822",
            "extra": "mean: 909.5580465320634 usec\nrounds: 1139"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 217.4572915201791,
            "unit": "iter/sec",
            "range": "stddev: 0.00006520855436006465",
            "extra": "mean: 4.598604135135218 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 309.35806746157033,
            "unit": "iter/sec",
            "range": "stddev: 0.00008685357645009378",
            "extra": "mean: 3.232500151702764 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 421.08520822458405,
            "unit": "iter/sec",
            "range": "stddev: 0.00006941022983052874",
            "extra": "mean: 2.3748162615739616 msec\nrounds: 432"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 974.9224226052111,
            "unit": "iter/sec",
            "range": "stddev: 0.00009215403613177816",
            "extra": "mean: 1.02572263886164 msec\nrounds: 1019"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.089582232513623,
            "unit": "iter/sec",
            "range": "stddev: 0.00023538993775383698",
            "extra": "mean: 99.11213140000044 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.284746136880116,
            "unit": "iter/sec",
            "range": "stddev: 0.0006616710279565533",
            "extra": "mean: 97.23137418181823 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 340.17647085701316,
            "unit": "iter/sec",
            "range": "stddev: 0.00005186747843403419",
            "extra": "mean: 2.939650698005893 msec\nrounds: 351"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 696.3133850078267,
            "unit": "iter/sec",
            "range": "stddev: 0.000029978741044136434",
            "extra": "mean: 1.4361349667129546 msec\nrounds: 721"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 900.0402930334157,
            "unit": "iter/sec",
            "range": "stddev: 0.000041104107107978606",
            "extra": "mean: 1.1110613688523756 msec\nrounds: 976"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 827.0228429836233,
            "unit": "iter/sec",
            "range": "stddev: 0.000026140394067610646",
            "extra": "mean: 1.2091564440860334 msec\nrounds: 930"
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
        "date": 1731595829344,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 229.93709134624635,
            "unit": "iter/sec",
            "range": "stddev: 0.00014371410615104428",
            "extra": "mean: 4.349015611814316 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 340.700407656099,
            "unit": "iter/sec",
            "range": "stddev: 0.000045962473050841694",
            "extra": "mean: 2.935130036619722 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 422.6319810038447,
            "unit": "iter/sec",
            "range": "stddev: 0.00006894709231042169",
            "extra": "mean: 2.3661247727272747 msec\nrounds: 440"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1069.3088617624999,
            "unit": "iter/sec",
            "range": "stddev: 0.00001740718074371877",
            "extra": "mean: 935.1834963302738 usec\nrounds: 1090"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 218.73634027887692,
            "unit": "iter/sec",
            "range": "stddev: 0.00011820529742066297",
            "extra": "mean: 4.571714049549583 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 308.7299690731317,
            "unit": "iter/sec",
            "range": "stddev: 0.00008371991058332747",
            "extra": "mean: 3.2390765399361694 msec\nrounds: 313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 415.77596757658415,
            "unit": "iter/sec",
            "range": "stddev: 0.00003088619675529832",
            "extra": "mean: 2.405141417452908 msec\nrounds: 424"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 963.1785631246919,
            "unit": "iter/sec",
            "range": "stddev: 0.00004135288908140665",
            "extra": "mean: 1.0382290867810158 msec\nrounds: 991"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.968821474082345,
            "unit": "iter/sec",
            "range": "stddev: 0.00045742565067385103",
            "extra": "mean: 100.3127604000003 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.184776322997866,
            "unit": "iter/sec",
            "range": "stddev: 0.0009057874521747694",
            "extra": "mean: 98.18575963636404 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 327.547042787406,
            "unit": "iter/sec",
            "range": "stddev: 0.00003680166583992397",
            "extra": "mean: 3.052996575667602 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 682.7450518055192,
            "unit": "iter/sec",
            "range": "stddev: 0.00004174556199157163",
            "extra": "mean: 1.4646755730495595 msec\nrounds: 705"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 871.5427308890075,
            "unit": "iter/sec",
            "range": "stddev: 0.00003711193754065012",
            "extra": "mean: 1.1473906723769713 msec\nrounds: 934"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 800.7783707808545,
            "unit": "iter/sec",
            "range": "stddev: 0.000027676991106091017",
            "extra": "mean: 1.2487849778271116 msec\nrounds: 902"
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
        "date": 1732286520195,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 229.21300654365103,
            "unit": "iter/sec",
            "range": "stddev: 0.00019228808917500423",
            "extra": "mean: 4.362754169491518 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 345.412386144881,
            "unit": "iter/sec",
            "range": "stddev: 0.0000734152732348007",
            "extra": "mean: 2.895090159217847 msec\nrounds: 358"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 426.8859384658606,
            "unit": "iter/sec",
            "range": "stddev: 0.00004797165082910527",
            "extra": "mean: 2.342546122727285 msec\nrounds: 440"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1053.9044642414935,
            "unit": "iter/sec",
            "range": "stddev: 0.000020545361955996124",
            "extra": "mean: 948.8526084949367 usec\nrounds: 1083"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 212.61149538216893,
            "unit": "iter/sec",
            "range": "stddev: 0.00011144444900944157",
            "extra": "mean: 4.703414545871572 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 306.06311021333664,
            "unit": "iter/sec",
            "range": "stddev: 0.00007067322635006473",
            "extra": "mean: 3.267299999999886 msec\nrounds: 314"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 408.0200756369368,
            "unit": "iter/sec",
            "range": "stddev: 0.000048266779897544604",
            "extra": "mean: 2.4508597976189215 msec\nrounds: 420"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 961.5652194244635,
            "unit": "iter/sec",
            "range": "stddev: 0.000023094594510924522",
            "extra": "mean: 1.039971059475863 msec\nrounds: 992"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.06203063514203,
            "unit": "iter/sec",
            "range": "stddev: 0.0004936147367698897",
            "extra": "mean: 99.38351772727282 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.17415111105409,
            "unit": "iter/sec",
            "range": "stddev: 0.0007676119764448866",
            "extra": "mean: 98.28829836363569 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 327.3317032867831,
            "unit": "iter/sec",
            "range": "stddev: 0.00007025469025778113",
            "extra": "mean: 3.055005029940152 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 686.6374622080886,
            "unit": "iter/sec",
            "range": "stddev: 0.00006756465350102206",
            "extra": "mean: 1.456372620253198 msec\nrounds: 711"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 854.7048942625028,
            "unit": "iter/sec",
            "range": "stddev: 0.0000473268046323111",
            "extra": "mean: 1.1699944702701952 msec\nrounds: 925"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 797.5085280317792,
            "unit": "iter/sec",
            "range": "stddev: 0.00002775949979470851",
            "extra": "mean: 1.2539050867179593 msec\nrounds: 911"
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
        "date": 1732315802892,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 231.41564700278133,
            "unit": "iter/sec",
            "range": "stddev: 0.00022814388768343784",
            "extra": "mean: 4.321228978902974 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 341.37054747860986,
            "unit": "iter/sec",
            "range": "stddev: 0.00005909057072514839",
            "extra": "mean: 2.929368123249296 msec\nrounds: 357"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 426.5531985669196,
            "unit": "iter/sec",
            "range": "stddev: 0.00003671009990157641",
            "extra": "mean: 2.3443734646925067 msec\nrounds: 439"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1054.041654504235,
            "unit": "iter/sec",
            "range": "stddev: 0.000039428314636065",
            "extra": "mean: 948.7291092592984 usec\nrounds: 1080"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 214.1492375800436,
            "unit": "iter/sec",
            "range": "stddev: 0.00014615432600863226",
            "extra": "mean: 4.669640720183396 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 304.7645944427671,
            "unit": "iter/sec",
            "range": "stddev: 0.00009674445590002552",
            "extra": "mean: 3.2812210415333984 msec\nrounds: 313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 409.36615816847166,
            "unit": "iter/sec",
            "range": "stddev: 0.00008978751505224058",
            "extra": "mean: 2.4428008521125903 msec\nrounds: 426"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 954.9052098401692,
            "unit": "iter/sec",
            "range": "stddev: 0.000027470614084618604",
            "extra": "mean: 1.047224362895013 msec\nrounds: 981"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.96989130710837,
            "unit": "iter/sec",
            "range": "stddev: 0.0006980198325523887",
            "extra": "mean: 100.30199620000033 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.132986755217212,
            "unit": "iter/sec",
            "range": "stddev: 0.0007017711877223524",
            "extra": "mean: 98.68758581818197 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 325.52003593400013,
            "unit": "iter/sec",
            "range": "stddev: 0.00005214669581126682",
            "extra": "mean: 3.0720075252226624 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 670.6612340271383,
            "unit": "iter/sec",
            "range": "stddev: 0.00005910427756766232",
            "extra": "mean: 1.4910657560975635 msec\nrounds: 697"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 838.81864777564,
            "unit": "iter/sec",
            "range": "stddev: 0.00007393711514042652",
            "extra": "mean: 1.192152800431627 msec\nrounds: 927"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 780.8817461147787,
            "unit": "iter/sec",
            "range": "stddev: 0.00005856613977042669",
            "extra": "mean: 1.280603631696385 msec\nrounds: 896"
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
        "date": 1732545730489,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 226.3447943267105,
            "unit": "iter/sec",
            "range": "stddev: 0.00005907685579122011",
            "extra": "mean: 4.4180384310344705 msec\nrounds: 232"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 338.1959641863863,
            "unit": "iter/sec",
            "range": "stddev: 0.0000979312354617539",
            "extra": "mean: 2.956865562857163 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 429.65517784351806,
            "unit": "iter/sec",
            "range": "stddev: 0.00007530264051681369",
            "extra": "mean: 2.3274478036529183 msec\nrounds: 438"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1074.4553869261126,
            "unit": "iter/sec",
            "range": "stddev: 0.00004135542301500342",
            "extra": "mean: 930.7040684684727 usec\nrounds: 1110"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 212.79489552656992,
            "unit": "iter/sec",
            "range": "stddev: 0.00008943675965993232",
            "extra": "mean: 4.699360844748921 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 302.5245232220599,
            "unit": "iter/sec",
            "range": "stddev: 0.00010778173444445922",
            "extra": "mean: 3.3055171506409655 msec\nrounds: 312"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 411.5081226794181,
            "unit": "iter/sec",
            "range": "stddev: 0.00003820969859211872",
            "extra": "mean: 2.4300856894118747 msec\nrounds: 425"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 970.4945975061842,
            "unit": "iter/sec",
            "range": "stddev: 0.00004079377044932966",
            "extra": "mean: 1.03040243868398 msec\nrounds: 1003"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.927473502121314,
            "unit": "iter/sec",
            "range": "stddev: 0.0002032758579616928",
            "extra": "mean: 100.73056350000016 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.15768295760912,
            "unit": "iter/sec",
            "range": "stddev: 0.000487472717073527",
            "extra": "mean: 98.44764836363592 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 326.7301290932832,
            "unit": "iter/sec",
            "range": "stddev: 0.00016555648498956869",
            "extra": "mean: 3.0606298928572166 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 673.8764808171418,
            "unit": "iter/sec",
            "range": "stddev: 0.000032982012102761376",
            "extra": "mean: 1.4839514784480998 msec\nrounds: 696"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 876.4837727383714,
            "unit": "iter/sec",
            "range": "stddev: 0.00003855593193600137",
            "extra": "mean: 1.140922434736847 msec\nrounds: 950"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 800.7381320764811,
            "unit": "iter/sec",
            "range": "stddev: 0.00005521898268457611",
            "extra": "mean: 1.248847731788158 msec\nrounds: 906"
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
        "date": 1732631777894,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 227.61823366754723,
            "unit": "iter/sec",
            "range": "stddev: 0.0003490757486269418",
            "extra": "mean: 4.39332114957263 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 335.1217483078491,
            "unit": "iter/sec",
            "range": "stddev: 0.00005623954283327782",
            "extra": "mean: 2.983990161931781 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 421.8394429351694,
            "unit": "iter/sec",
            "range": "stddev: 0.000031717624607603406",
            "extra": "mean: 2.370570170114902 msec\nrounds: 435"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1038.6054642898036,
            "unit": "iter/sec",
            "range": "stddev: 0.000025188621805208136",
            "extra": "mean: 962.8295193726888 usec\nrounds: 1084"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 212.01224749239066,
            "unit": "iter/sec",
            "range": "stddev: 0.00006751454259621681",
            "extra": "mean: 4.7167086422018665 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 298.2404276377263,
            "unit": "iter/sec",
            "range": "stddev: 0.00011725982753931597",
            "extra": "mean: 3.3529994840763284 msec\nrounds: 314"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 410.7730746661551,
            "unit": "iter/sec",
            "range": "stddev: 0.00006993992529774895",
            "extra": "mean: 2.4344341478874276 msec\nrounds: 426"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 958.2386207415386,
            "unit": "iter/sec",
            "range": "stddev: 0.000027666080013934473",
            "extra": "mean: 1.0435813985728775 msec\nrounds: 981"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.001136339111993,
            "unit": "iter/sec",
            "range": "stddev: 0.00036123545099653965",
            "extra": "mean: 99.98863789999994 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.129742982101684,
            "unit": "iter/sec",
            "range": "stddev: 0.00033877702580870973",
            "extra": "mean: 98.71918781818128 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 322.409442301139,
            "unit": "iter/sec",
            "range": "stddev: 0.00010677185162574184",
            "extra": "mean: 3.101646133136428 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 672.5066059920143,
            "unit": "iter/sec",
            "range": "stddev: 0.000032059818618795004",
            "extra": "mean: 1.48697424098147 msec\nrounds: 693"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 832.0682660375182,
            "unit": "iter/sec",
            "range": "stddev: 0.00008323665459018087",
            "extra": "mean: 1.2018244665935978 msec\nrounds: 913"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 757.4352258844649,
            "unit": "iter/sec",
            "range": "stddev: 0.00022409946803216393",
            "extra": "mean: 1.3202449078497631 msec\nrounds: 879"
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
        "date": 1733150301258,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 232.01718784900675,
            "unit": "iter/sec",
            "range": "stddev: 0.000042089729782683926",
            "extra": "mean: 4.3100255169491355 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 344.73893329594097,
            "unit": "iter/sec",
            "range": "stddev: 0.00004073129791153526",
            "extra": "mean: 2.9007457627118387 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 428.28956995395356,
            "unit": "iter/sec",
            "range": "stddev: 0.00006065082635088948",
            "extra": "mean: 2.3348689068181425 msec\nrounds: 440"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1047.6298821940834,
            "unit": "iter/sec",
            "range": "stddev: 0.000023627793773897007",
            "extra": "mean: 954.5355826483961 usec\nrounds: 1095"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 213.56883849994023,
            "unit": "iter/sec",
            "range": "stddev: 0.00004150405802173736",
            "extra": "mean: 4.682331032110191 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 307.3446469330534,
            "unit": "iter/sec",
            "range": "stddev: 0.00003980726884587528",
            "extra": "mean: 3.2536763206349986 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 409.8813347095758,
            "unit": "iter/sec",
            "range": "stddev: 0.00004380256851556306",
            "extra": "mean: 2.4397305154394426 msec\nrounds: 421"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 951.0397564169855,
            "unit": "iter/sec",
            "range": "stddev: 0.000020404985214385182",
            "extra": "mean: 1.0514807538303874 msec\nrounds: 979"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.92979621169596,
            "unit": "iter/sec",
            "range": "stddev: 0.0002471072449607354",
            "extra": "mean: 100.70700129999999 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.245939326764642,
            "unit": "iter/sec",
            "range": "stddev: 0.0007582510204128025",
            "extra": "mean: 97.59964099999894 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 323.0956521640114,
            "unit": "iter/sec",
            "range": "stddev: 0.000049819063345143914",
            "extra": "mean: 3.0950586716418425 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 674.9954275327509,
            "unit": "iter/sec",
            "range": "stddev: 0.000029793917129020224",
            "extra": "mean: 1.481491517142877 msec\nrounds: 700"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 863.2569868698117,
            "unit": "iter/sec",
            "range": "stddev: 0.00004679151784078026",
            "extra": "mean: 1.1584035984765342 msec\nrounds: 919"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 790.5232954572002,
            "unit": "iter/sec",
            "range": "stddev: 0.000051849485049634665",
            "extra": "mean: 1.2649848597082123 msec\nrounds: 891"
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
        "date": 1733158279173,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 230.80842905123131,
            "unit": "iter/sec",
            "range": "stddev: 0.00003708060927257833",
            "extra": "mean: 4.332597401709429 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 339.885943077946,
            "unit": "iter/sec",
            "range": "stddev: 0.000039714025161336894",
            "extra": "mean: 2.9421634532578183 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 432.9933893743205,
            "unit": "iter/sec",
            "range": "stddev: 0.000058916348159358334",
            "extra": "mean: 2.3095040814480083 msec\nrounds: 442"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1030.7570175479702,
            "unit": "iter/sec",
            "range": "stddev: 0.00003611086181041462",
            "extra": "mean: 970.1607488240663 usec\nrounds: 1063"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 209.58984680493342,
            "unit": "iter/sec",
            "range": "stddev: 0.00006151273489208344",
            "extra": "mean: 4.771223488372059 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 297.405137575962,
            "unit": "iter/sec",
            "range": "stddev: 0.00005867553200041901",
            "extra": "mean: 3.362416695792904 msec\nrounds: 309"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 410.1852509784914,
            "unit": "iter/sec",
            "range": "stddev: 0.000053609164449382796",
            "extra": "mean: 2.43792285952387 msec\nrounds: 420"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 934.6453058955767,
            "unit": "iter/sec",
            "range": "stddev: 0.000019475290176682818",
            "extra": "mean: 1.0699245945945244 msec\nrounds: 962"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.99204178381916,
            "unit": "iter/sec",
            "range": "stddev: 0.0007459857717986019",
            "extra": "mean: 100.07964554545526 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.217844301166496,
            "unit": "iter/sec",
            "range": "stddev: 0.0007841924481878985",
            "extra": "mean: 97.86800136363767 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 329.45079881172194,
            "unit": "iter/sec",
            "range": "stddev: 0.00008913594505203216",
            "extra": "mean: 3.035354607142691 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 664.9190509120123,
            "unit": "iter/sec",
            "range": "stddev: 0.000029289854442888706",
            "extra": "mean: 1.5039424703328714 msec\nrounds: 691"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 845.6071110530559,
            "unit": "iter/sec",
            "range": "stddev: 0.00003896658135265674",
            "extra": "mean: 1.182582297297234 msec\nrounds: 925"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 765.845901723224,
            "unit": "iter/sec",
            "range": "stddev: 0.00015883363631901247",
            "extra": "mean: 1.305745709090964 msec\nrounds: 880"
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
        "date": 1733160550915,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 223.03990224534482,
            "unit": "iter/sec",
            "range": "stddev: 0.0004026664840469159",
            "extra": "mean: 4.48350268240342 msec\nrounds: 233"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 340.3925393731844,
            "unit": "iter/sec",
            "range": "stddev: 0.00007231132545932039",
            "extra": "mean: 2.937784717142889 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 415.8971894081818,
            "unit": "iter/sec",
            "range": "stddev: 0.000040488825692417524",
            "extra": "mean: 2.4044403892774358 msec\nrounds: 429"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1031.5294734491288,
            "unit": "iter/sec",
            "range": "stddev: 0.00003235510299513255",
            "extra": "mean: 969.4342485981487 usec\nrounds: 1070"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 209.81344110964875,
            "unit": "iter/sec",
            "range": "stddev: 0.0000980956029722452",
            "extra": "mean: 4.766138883720985 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 288.5215474334965,
            "unit": "iter/sec",
            "range": "stddev: 0.0005005350341053471",
            "extra": "mean: 3.4659456421725228 msec\nrounds: 313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 406.89425386732887,
            "unit": "iter/sec",
            "range": "stddev: 0.00006760600753706558",
            "extra": "mean: 2.457640997619146 msec\nrounds: 420"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 957.7655036787656,
            "unit": "iter/sec",
            "range": "stddev: 0.00002044915205453782",
            "extra": "mean: 1.0440969069767205 msec\nrounds: 989"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.936531488201007,
            "unit": "iter/sec",
            "range": "stddev: 0.000289331560362481",
            "extra": "mean: 100.63873910000041 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.031727565469378,
            "unit": "iter/sec",
            "range": "stddev: 0.0008912889264582269",
            "extra": "mean: 99.68372779999939 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 318.5139173758609,
            "unit": "iter/sec",
            "range": "stddev: 0.00008881746706930542",
            "extra": "mean: 3.1395802363635954 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 668.6663959376832,
            "unit": "iter/sec",
            "range": "stddev: 0.000049652350014769235",
            "extra": "mean: 1.4955140651231345 msec\nrounds: 691"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 847.965624564457,
            "unit": "iter/sec",
            "range": "stddev: 0.00004590608679364091",
            "extra": "mean: 1.1792930881055854 msec\nrounds: 908"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 778.671345915218,
            "unit": "iter/sec",
            "range": "stddev: 0.00005736144580962743",
            "extra": "mean: 1.284238857954432 msec\nrounds: 880"
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
        "date": 1733495425426,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 228.51407404998332,
            "unit": "iter/sec",
            "range": "stddev: 0.00018693432049794064",
            "extra": "mean: 4.376098076923123 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 342.91439511388637,
            "unit": "iter/sec",
            "range": "stddev: 0.00012494788195015154",
            "extra": "mean: 2.916179706214687 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 428.5958731208357,
            "unit": "iter/sec",
            "range": "stddev: 0.00006957851077121195",
            "extra": "mean: 2.3332002539326044 msec\nrounds: 445"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1097.0301094836273,
            "unit": "iter/sec",
            "range": "stddev: 0.000031374757105811124",
            "extra": "mean: 911.5520087873437 usec\nrounds: 1138"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 215.74078141823816,
            "unit": "iter/sec",
            "range": "stddev: 0.00007244733585151852",
            "extra": "mean: 4.635192259090718 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 304.9839898995595,
            "unit": "iter/sec",
            "range": "stddev: 0.00005995540208817549",
            "extra": "mean: 3.2788606389775756 msec\nrounds: 313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 401.16542246701795,
            "unit": "iter/sec",
            "range": "stddev: 0.00029814198039076323",
            "extra": "mean: 2.4927372699530594 msec\nrounds: 426"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 995.2681043295903,
            "unit": "iter/sec",
            "range": "stddev: 0.00004833018993325625",
            "extra": "mean: 1.0047543929618814 msec\nrounds: 1023"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.86967739438521,
            "unit": "iter/sec",
            "range": "stddev: 0.00042946917707345305",
            "extra": "mean: 101.32043429999982 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.069626662412492,
            "unit": "iter/sec",
            "range": "stddev: 0.000677703012159981",
            "extra": "mean: 99.30854772727184 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 320.87612186932665,
            "unit": "iter/sec",
            "range": "stddev: 0.00009460630366239222",
            "extra": "mean: 3.116467483383632 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 663.5827280982365,
            "unit": "iter/sec",
            "range": "stddev: 0.000060975561367563116",
            "extra": "mean: 1.506971109489095 msec\nrounds: 685"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 876.9291674256076,
            "unit": "iter/sec",
            "range": "stddev: 0.00004137340466751835",
            "extra": "mean: 1.1403429571577488 msec\nrounds: 957"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 808.7229811349056,
            "unit": "iter/sec",
            "range": "stddev: 0.000028064203779020562",
            "extra": "mean: 1.2365173530702314 msec\nrounds: 912"
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
        "date": 1733754474244,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 228.03479337336086,
            "unit": "iter/sec",
            "range": "stddev: 0.00033276205846496454",
            "extra": "mean: 4.385295705128218 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 342.3462889594919,
            "unit": "iter/sec",
            "range": "stddev: 0.000047220311384315934",
            "extra": "mean: 2.921018957265008 msec\nrounds: 351"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 428.3991636518926,
            "unit": "iter/sec",
            "range": "stddev: 0.00003797325318418596",
            "extra": "mean: 2.3342715972540447 msec\nrounds: 437"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1058.4496778993948,
            "unit": "iter/sec",
            "range": "stddev: 0.000024051623262237533",
            "extra": "mean: 944.7780285451129 usec\nrounds: 1086"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 212.2659129433468,
            "unit": "iter/sec",
            "range": "stddev: 0.000044110980700934364",
            "extra": "mean: 4.711072004608189 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 305.97953609439577,
            "unit": "iter/sec",
            "range": "stddev: 0.00005640334116280485",
            "extra": "mean: 3.26819241823903 msec\nrounds: 318"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 405.67075010078185,
            "unit": "iter/sec",
            "range": "stddev: 0.00004476206066104957",
            "extra": "mean: 2.4650532476190787 msec\nrounds: 420"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 966.3960533299106,
            "unit": "iter/sec",
            "range": "stddev: 0.000043236091079527706",
            "extra": "mean: 1.034772437816049 msec\nrounds: 989"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.990623729695344,
            "unit": "iter/sec",
            "range": "stddev: 0.0001677363750546967",
            "extra": "mean: 100.09385069999972 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.19781378952773,
            "unit": "iter/sec",
            "range": "stddev: 0.0006620838977478135",
            "extra": "mean: 98.06023336363654 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 328.07929333773103,
            "unit": "iter/sec",
            "range": "stddev: 0.00005188307913472788",
            "extra": "mean: 3.048043629411811 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 662.8806840184925,
            "unit": "iter/sec",
            "range": "stddev: 0.00003391290011190046",
            "extra": "mean: 1.5085671133722502 msec\nrounds: 688"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 871.7674911067214,
            "unit": "iter/sec",
            "range": "stddev: 0.000038129823522646655",
            "extra": "mean: 1.1470948506355583 msec\nrounds: 944"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 797.8349479364564,
            "unit": "iter/sec",
            "range": "stddev: 0.00003462610439494851",
            "extra": "mean: 1.2533920738699518 msec\nrounds: 907"
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
        "date": 1733754969522,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 223.10061936230593,
            "unit": "iter/sec",
            "range": "stddev: 0.00023092793938341352",
            "extra": "mean: 4.482282491453072 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 331.7146306218392,
            "unit": "iter/sec",
            "range": "stddev: 0.00020646314252807966",
            "extra": "mean: 3.014639414985643 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 425.965657887932,
            "unit": "iter/sec",
            "range": "stddev: 0.0000747388851719023",
            "extra": "mean: 2.3476070933941147 msec\nrounds: 439"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1079.9358016721158,
            "unit": "iter/sec",
            "range": "stddev: 0.00003816063832084502",
            "extra": "mean: 925.9809689165343 usec\nrounds: 1126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 211.90737438044064,
            "unit": "iter/sec",
            "range": "stddev: 0.00014151295644570822",
            "extra": "mean: 4.719042944700378 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 306.7389978319895,
            "unit": "iter/sec",
            "range": "stddev: 0.00005368538270140516",
            "extra": "mean: 3.2601006297468937 msec\nrounds: 316"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 415.01318775330964,
            "unit": "iter/sec",
            "range": "stddev: 0.00007361078301929702",
            "extra": "mean: 2.4095619838336697 msec\nrounds: 433"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 978.3480327417315,
            "unit": "iter/sec",
            "range": "stddev: 0.000024758800978210356",
            "extra": "mean: 1.022131150197738 msec\nrounds: 1012"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.972168336336395,
            "unit": "iter/sec",
            "range": "stddev: 0.0003893883151555357",
            "extra": "mean: 100.27909340000001 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.104975770449881,
            "unit": "iter/sec",
            "range": "stddev: 0.0007605003663241923",
            "extra": "mean: 98.9611477272725 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 321.49051855527557,
            "unit": "iter/sec",
            "range": "stddev: 0.000056839092788053326",
            "extra": "mean: 3.1105116396397388 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 665.2105370257543,
            "unit": "iter/sec",
            "range": "stddev: 0.00004916278598897973",
            "extra": "mean: 1.5032834634146572 msec\nrounds: 697"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 874.5576979749687,
            "unit": "iter/sec",
            "range": "stddev: 0.00005678432980253571",
            "extra": "mean: 1.1434351356296923 msec\nrounds: 929"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 794.095419842109,
            "unit": "iter/sec",
            "range": "stddev: 0.000050414334889276",
            "extra": "mean: 1.2592945066964765 msec\nrounds: 896"
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
        "date": 1733841942326,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 229.551825855418,
            "unit": "iter/sec",
            "range": "stddev: 0.0001623228633165391",
            "extra": "mean: 4.3563147288135475 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 340.18534198149524,
            "unit": "iter/sec",
            "range": "stddev: 0.000031455514368426124",
            "extra": "mean: 2.9395740397726953 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 431.09748918653065,
            "unit": "iter/sec",
            "range": "stddev: 0.000056546570471976695",
            "extra": "mean: 2.319660923766856 msec\nrounds: 446"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1087.6079678385158,
            "unit": "iter/sec",
            "range": "stddev: 0.000020247308829872548",
            "extra": "mean: 919.44894628473 usec\nrounds: 1117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 212.01803784887835,
            "unit": "iter/sec",
            "range": "stddev: 0.00007617483675037184",
            "extra": "mean: 4.716579825688121 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 302.46987154079636,
            "unit": "iter/sec",
            "range": "stddev: 0.00008439878175678919",
            "extra": "mean: 3.3061144070513566 msec\nrounds: 312"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 408.88743940768035,
            "unit": "iter/sec",
            "range": "stddev: 0.00004692691738286587",
            "extra": "mean: 2.4456608436018796 msec\nrounds: 422"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 979.9917977609285,
            "unit": "iter/sec",
            "range": "stddev: 0.000019632657010016956",
            "extra": "mean: 1.020416703777303 msec\nrounds: 1006"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.639867180714628,
            "unit": "iter/sec",
            "range": "stddev: 0.006461677877114419",
            "extra": "mean: 103.73586910000014 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 9.670482901787823,
            "unit": "iter/sec",
            "range": "stddev: 0.012831702662876657",
            "extra": "mean: 103.40745236363799 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 317.6089185873953,
            "unit": "iter/sec",
            "range": "stddev: 0.0004577366926567335",
            "extra": "mean: 3.1485261951950942 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 681.3296081404862,
            "unit": "iter/sec",
            "range": "stddev: 0.000034701172373064104",
            "extra": "mean: 1.467718396576427 msec\nrounds: 701"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 870.9101890995322,
            "unit": "iter/sec",
            "range": "stddev: 0.00003703875691114287",
            "extra": "mean: 1.1482240218522863 msec\nrounds: 961"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 788.8460489768194,
            "unit": "iter/sec",
            "range": "stddev: 0.00016267917921175535",
            "extra": "mean: 1.2676744737418155 msec\nrounds: 914"
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
        "date": 1734963999914,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 266.7366075455162,
            "unit": "iter/sec",
            "range": "stddev: 0.00006928926509736995",
            "extra": "mean: 3.7490167142856796 msec\nrounds: 273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 403.57485538331053,
            "unit": "iter/sec",
            "range": "stddev: 0.00019983206780538996",
            "extra": "mean: 2.4778550661938836 msec\nrounds: 423"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 511.87130827487863,
            "unit": "iter/sec",
            "range": "stddev: 0.000027667898731773008",
            "extra": "mean: 1.9536160433961902 msec\nrounds: 530"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1436.6372607075311,
            "unit": "iter/sec",
            "range": "stddev: 0.000019562814416498914",
            "extra": "mean: 696.0699317429014 usec\nrounds: 1509"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 241.60947212527145,
            "unit": "iter/sec",
            "range": "stddev: 0.000059829816912852366",
            "extra": "mean: 4.138910578313389 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 362.78166305437696,
            "unit": "iter/sec",
            "range": "stddev: 0.000052702034136885435",
            "extra": "mean: 2.7564789013333098 msec\nrounds: 375"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 496.50505780887715,
            "unit": "iter/sec",
            "range": "stddev: 0.00005362870519258833",
            "extra": "mean: 2.0140781735700592 msec\nrounds: 507"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1296.809337715879,
            "unit": "iter/sec",
            "range": "stddev: 0.000020176918818771448",
            "extra": "mean: 771.1233802197469 usec\nrounds: 1365"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.672907698632937,
            "unit": "iter/sec",
            "range": "stddev: 0.0013354621953345614",
            "extra": "mean: 85.66845775000124 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.836567960921423,
            "unit": "iter/sec",
            "range": "stddev: 0.0005293838774199699",
            "extra": "mean: 84.48394866666693 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 392.0420163539238,
            "unit": "iter/sec",
            "range": "stddev: 0.00008628392368821066",
            "extra": "mean: 2.5507470074259335 msec\nrounds: 404"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 910.6423901092387,
            "unit": "iter/sec",
            "range": "stddev: 0.000025893656432993697",
            "extra": "mean: 1.098125906350617 msec\nrounds: 929"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1143.9371450697824,
            "unit": "iter/sec",
            "range": "stddev: 0.000055208876534025535",
            "extra": "mean: 874.1739039682972 usec\nrounds: 1260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1059.1451868578088,
            "unit": "iter/sec",
            "range": "stddev: 0.0000274159209163768",
            "extra": "mean: 944.1576210781109 usec\nrounds: 1243"
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
        "date": 1735002640316,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 270.1860562633689,
            "unit": "iter/sec",
            "range": "stddev: 0.00005456821993176357",
            "extra": "mean: 3.7011532490974703 msec\nrounds: 277"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 408.03743142084977,
            "unit": "iter/sec",
            "range": "stddev: 0.00006296877543367624",
            "extra": "mean: 2.450755550827395 msec\nrounds: 423"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 511.28823305615344,
            "unit": "iter/sec",
            "range": "stddev: 0.000039146252586561944",
            "extra": "mean: 1.9558439552239264 msec\nrounds: 536"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1458.4722017846511,
            "unit": "iter/sec",
            "range": "stddev: 0.000018299433894540884",
            "extra": "mean: 685.6489954188745 usec\nrounds: 1528"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 247.00647338749496,
            "unit": "iter/sec",
            "range": "stddev: 0.00010179938440826265",
            "extra": "mean: 4.048476893280589 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 363.5606157864951,
            "unit": "iter/sec",
            "range": "stddev: 0.00004286735087819495",
            "extra": "mean: 2.750572962466487 msec\nrounds: 373"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 493.08815624632444,
            "unit": "iter/sec",
            "range": "stddev: 0.00003383743746675053",
            "extra": "mean: 2.028034921001926 msec\nrounds: 519"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1298.957940557244,
            "unit": "iter/sec",
            "range": "stddev: 0.0000191903353637986",
            "extra": "mean: 769.8478671072344 usec\nrounds: 1362"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.596661289903766,
            "unit": "iter/sec",
            "range": "stddev: 0.0005343358447699647",
            "extra": "mean: 86.23171574999914 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.901580298278635,
            "unit": "iter/sec",
            "range": "stddev: 0.0007203346442558113",
            "extra": "mean: 84.02245541666709 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 395.5183945483084,
            "unit": "iter/sec",
            "range": "stddev: 0.000042732157243289045",
            "extra": "mean: 2.5283274148147377 msec\nrounds: 405"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 906.8787984788585,
            "unit": "iter/sec",
            "range": "stddev: 0.000021570511915188342",
            "extra": "mean: 1.102683182887655 msec\nrounds: 935"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1151.9768677352956,
            "unit": "iter/sec",
            "range": "stddev: 0.00004191807655356592",
            "extra": "mean: 868.0729865400237 usec\nrounds: 1263"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1058.1370878505488,
            "unit": "iter/sec",
            "range": "stddev: 0.000020332666075007342",
            "extra": "mean: 945.0571305759202 usec\nrounds: 1233"
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
        "date": 1735225248029,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 263.1877342659788,
            "unit": "iter/sec",
            "range": "stddev: 0.00021538916284683402",
            "extra": "mean: 3.799569166051618 msec\nrounds: 271"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 405.1614496604118,
            "unit": "iter/sec",
            "range": "stddev: 0.00006380690254408209",
            "extra": "mean: 2.468151895591635 msec\nrounds: 431"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 519.1372804471756,
            "unit": "iter/sec",
            "range": "stddev: 0.00005282143577941358",
            "extra": "mean: 1.9262727560976123 msec\nrounds: 533"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1436.560524813378,
            "unit": "iter/sec",
            "range": "stddev: 0.000025246198261053393",
            "extra": "mean: 696.1071132940319 usec\nrounds: 1527"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 243.87220251688677,
            "unit": "iter/sec",
            "range": "stddev: 0.00010229337543592786",
            "extra": "mean: 4.100508338709721 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 359.5453053209609,
            "unit": "iter/sec",
            "range": "stddev: 0.000042715034332043766",
            "extra": "mean: 2.781290661290416 msec\nrounds: 372"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 491.87696861674544,
            "unit": "iter/sec",
            "range": "stddev: 0.00012722100583351727",
            "extra": "mean: 2.033028712062279 msec\nrounds: 514"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1301.0182701824301,
            "unit": "iter/sec",
            "range": "stddev: 0.00003540131291461449",
            "extra": "mean: 768.6287140762282 usec\nrounds: 1364"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.63765642341286,
            "unit": "iter/sec",
            "range": "stddev: 0.0006435026276907245",
            "extra": "mean: 85.9279535000003 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.961181969474291,
            "unit": "iter/sec",
            "range": "stddev: 0.0005035025751480385",
            "extra": "mean: 83.60377783333324 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 393.7350977676934,
            "unit": "iter/sec",
            "range": "stddev: 0.00006426156248961528",
            "extra": "mean: 2.5397786625311403 msec\nrounds: 403"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 913.4160259935751,
            "unit": "iter/sec",
            "range": "stddev: 0.00002885568349901011",
            "extra": "mean: 1.0947913891835241 msec\nrounds: 943"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1170.2973548718564,
            "unit": "iter/sec",
            "range": "stddev: 0.000043203809782935815",
            "extra": "mean: 854.4836881302673 usec\nrounds: 1289"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1058.1326727149144,
            "unit": "iter/sec",
            "range": "stddev: 0.00005522927975909344",
            "extra": "mean: 945.0610738956203 usec\nrounds: 1245"
          }
        ]
      }
    ]
  }
}