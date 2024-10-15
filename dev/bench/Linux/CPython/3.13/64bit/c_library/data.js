window.BENCHMARK_DATA = {
  "lastUpdate": 1728998970447,
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
      }
    ]
  }
}