window.BENCHMARK_DATA = {
  "lastUpdate": 1643759994850,
  "repoUrl": "https://github.com/TeoZosa/structlog-sentry-logger",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "de351d873a6e2fd6ba664f30f32e7c44c395f1af",
          "message": "Merge pull request #413 from TeoZosa/dependabot/github_actions/release-drafter/release-drafter-5.16.1",
          "timestamp": "2022-01-13T14:41:34Z",
          "tree_id": "d94f460d865ed87282fc73b144e9f910eaac6178"
        },
        "date": 1642085041845,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 129.1609905024236,
            "unit": "iter/sec",
            "range": "stddev: 0.0005565715832843526",
            "extra": "mean: 7.742275714285699 msec\nrounds: 140"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 174.18581457377417,
            "unit": "iter/sec",
            "range": "stddev: 0.0002699859969559262",
            "extra": "mean: 5.740995628415326 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 245.10278665344532,
            "unit": "iter/sec",
            "range": "stddev: 0.0002733795963377438",
            "extra": "mean: 4.07992097378279 msec\nrounds: 267"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 524.7545146706825,
            "unit": "iter/sec",
            "range": "stddev: 0.0001424099896372218",
            "extra": "mean: 1.9056529711374945 msec\nrounds: 589"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.38214637462623,
            "unit": "iter/sec",
            "range": "stddev: 0.0011094650985014486",
            "extra": "mean: 8.592383206106785 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.80699302506886,
            "unit": "iter/sec",
            "range": "stddev: 0.0005024240807956355",
            "extra": "mean: 6.418197159090947 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 240.13827496949193,
            "unit": "iter/sec",
            "range": "stddev: 0.0001971733694315101",
            "extra": "mean: 4.164267441860503 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 480.69242205532225,
            "unit": "iter/sec",
            "range": "stddev: 0.0001550186186221073",
            "extra": "mean: 2.080332358318125 msec\nrounds: 547"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 21.75101742748265,
            "unit": "iter/sec",
            "range": "stddev: 0.0019484966896970836",
            "extra": "mean: 45.97486086956507 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.685069046733584,
            "unit": "iter/sec",
            "range": "stddev: 0.0013620688544548646",
            "extra": "mean: 44.08185833333356 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 188.1130564768462,
            "unit": "iter/sec",
            "range": "stddev: 0.0003298132384004014",
            "extra": "mean: 5.315952112675839 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 342.05974092173824,
            "unit": "iter/sec",
            "range": "stddev: 0.00020629934319235646",
            "extra": "mean: 2.9234659340655806 msec\nrounds: 364"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 940.5408243212956,
            "unit": "iter/sec",
            "range": "stddev: 0.00014893565224079484",
            "extra": "mean: 1.0632180700094658 msec\nrounds: 1057"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 804.5786902079187,
            "unit": "iter/sec",
            "range": "stddev: 0.0002524204903630295",
            "extra": "mean: 1.2428865096359694 msec\nrounds: 934"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "47b651f62e195f128f5b4a2eeeb86575d0d1302c",
          "message": "Merge pull request #414 from TeoZosa/dependabot/github_actions/release-drafter/release-drafter-5.17.5",
          "timestamp": "2022-01-17T14:17:07Z",
          "tree_id": "4d41b141b482b6b7cf3f7964d4bcfab727102e36"
        },
        "date": 1642431412506,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 134.19030721183196,
            "unit": "iter/sec",
            "range": "stddev: 0.0013372440628057172",
            "extra": "mean: 7.452103067484646 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 168.6797420215296,
            "unit": "iter/sec",
            "range": "stddev: 0.0005200897670783737",
            "extra": "mean: 5.928394174757298 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 260.55595534799755,
            "unit": "iter/sec",
            "range": "stddev: 0.0003594997938791539",
            "extra": "mean: 3.837947202797203 msec\nrounds: 286"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 583.598779709364,
            "unit": "iter/sec",
            "range": "stddev: 0.0002826361097543554",
            "extra": "mean: 1.7135059817945586 msec\nrounds: 769"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 125.38155013048258,
            "unit": "iter/sec",
            "range": "stddev: 0.0007473539344330801",
            "extra": "mean: 7.975655102041058 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 177.18454756845145,
            "unit": "iter/sec",
            "range": "stddev: 0.0005120271601618842",
            "extra": "mean: 5.64383301886792 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 271.4232599969229,
            "unit": "iter/sec",
            "range": "stddev: 0.00041052522892127025",
            "extra": "mean: 3.68428262195118 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 569.2064697512126,
            "unit": "iter/sec",
            "range": "stddev: 0.00035787068020852643",
            "extra": "mean: 1.7568317528735709 msec\nrounds: 696"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.190751624069822,
            "unit": "iter/sec",
            "range": "stddev: 0.0031781808590387287",
            "extra": "mean: 41.33811200000082 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.184376620120265,
            "unit": "iter/sec",
            "range": "stddev: 0.0020440198606389882",
            "extra": "mean: 39.70715714285663 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.5281101969361,
            "unit": "iter/sec",
            "range": "stddev: 0.0005632790477177739",
            "extra": "mean: 4.986832015810216 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 356.67266279477354,
            "unit": "iter/sec",
            "range": "stddev: 0.00033474867235436934",
            "extra": "mean: 2.8036911832948395 msec\nrounds: 431"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1056.1096757131447,
            "unit": "iter/sec",
            "range": "stddev: 0.0001779426927790768",
            "extra": "mean: 946.8713553114109 usec\nrounds: 1365"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 920.8147343987624,
            "unit": "iter/sec",
            "range": "stddev: 0.00030438875026183573",
            "extra": "mean: 1.0859947855340748 msec\nrounds: 1189"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "03c022db08faa4d02905eab49e8bd3142abfc36c",
          "message": "Merge pull request #415 from TeoZosa/dependabot/pip/emoji-1.6.3",
          "timestamp": "2022-01-17T15:11:48Z",
          "tree_id": "4d20e97e7e3408092678a41a004d1fb0811ff220"
        },
        "date": 1642432605807,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 205.26805516887845,
            "unit": "iter/sec",
            "range": "stddev: 0.000015293477969003102",
            "extra": "mean: 4.871678640776707 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 269.230000219742,
            "unit": "iter/sec",
            "range": "stddev: 0.000008044162313130257",
            "extra": "mean: 3.7142963235293722 msec\nrounds: 272"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 400.69238855199575,
            "unit": "iter/sec",
            "range": "stddev: 0.000017660273364471617",
            "extra": "mean: 2.495680049261119 msec\nrounds: 406"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 816.0570968930668,
            "unit": "iter/sec",
            "range": "stddev: 0.000008643377123768933",
            "extra": "mean: 1.2254044524669288 msec\nrounds: 831"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 187.446202196134,
            "unit": "iter/sec",
            "range": "stddev: 0.000028956360722601016",
            "extra": "mean: 5.334864021164066 msec\nrounds: 189"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 245.0542691033245,
            "unit": "iter/sec",
            "range": "stddev: 0.000008851568670586958",
            "extra": "mean: 4.080728744939191 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 385.12200615779904,
            "unit": "iter/sec",
            "range": "stddev: 0.000010091316990118899",
            "extra": "mean: 2.5965797435897815 msec\nrounds: 390"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 742.9046520338875,
            "unit": "iter/sec",
            "range": "stddev: 0.000009309770138768823",
            "extra": "mean: 1.346067758846643 msec\nrounds: 763"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.740388266475907,
            "unit": "iter/sec",
            "range": "stddev: 0.00003834235159630197",
            "extra": "mean: 37.396614814815074 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.31550107696597,
            "unit": "iter/sec",
            "range": "stddev: 0.00003444652777688229",
            "extra": "mean: 35.316344827585546 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 294.87611195754243,
            "unit": "iter/sec",
            "range": "stddev: 0.000010574210801593713",
            "extra": "mean: 3.3912546979864695 msec\nrounds: 298"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 482.93223839783775,
            "unit": "iter/sec",
            "range": "stddev: 0.000011935815278647578",
            "extra": "mean: 2.0706838775509615 msec\nrounds: 490"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1464.461166570265,
            "unit": "iter/sec",
            "range": "stddev: 0.000005739484809173004",
            "extra": "mean: 682.8450100469221 usec\nrounds: 1493"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1228.04575587269,
            "unit": "iter/sec",
            "range": "stddev: 0.000005942305777474795",
            "extra": "mean: 814.3019062749554 usec\nrounds: 1259"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "72326bb172ec9a61951193ae60d0c19c966fd36a",
          "message": "Merge pull request #417 from TeoZosa/dependabot/pip/importlib-metadata-4.10.1",
          "timestamp": "2022-01-17T15:32:35Z",
          "tree_id": "4b4b5e123579effdb1376478fc68c7dad22f148d"
        },
        "date": 1642433721496,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 204.78313763951903,
            "unit": "iter/sec",
            "range": "stddev: 0.000012765860782425184",
            "extra": "mean: 4.883214563106782 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 267.73481911228487,
            "unit": "iter/sec",
            "range": "stddev: 0.00000987116261144743",
            "extra": "mean: 3.7350390334572494 msec\nrounds: 269"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 405.3019810391691,
            "unit": "iter/sec",
            "range": "stddev: 0.000010597189430760686",
            "extra": "mean: 2.4672961070559345 msec\nrounds: 411"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 817.0916015395974,
            "unit": "iter/sec",
            "range": "stddev: 0.000009774675976647606",
            "extra": "mean: 1.2238529904306434 msec\nrounds: 836"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 186.2625864203575,
            "unit": "iter/sec",
            "range": "stddev: 0.00001707890087682106",
            "extra": "mean: 5.368764705882477 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 242.49938427110942,
            "unit": "iter/sec",
            "range": "stddev: 0.000010388278996479856",
            "extra": "mean: 4.123721810699611 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 385.5777318775498,
            "unit": "iter/sec",
            "range": "stddev: 0.000010466643646700484",
            "extra": "mean: 2.5935107692307704 msec\nrounds: 390"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 742.4356136235594,
            "unit": "iter/sec",
            "range": "stddev: 0.000008282148310886431",
            "extra": "mean: 1.346918145695304 msec\nrounds: 755"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.917878934945065,
            "unit": "iter/sec",
            "range": "stddev: 0.0002011170340773691",
            "extra": "mean: 37.15002962962991 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.52709213021171,
            "unit": "iter/sec",
            "range": "stddev: 0.00014800122461487494",
            "extra": "mean: 35.05439655172378 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 294.69181910787705,
            "unit": "iter/sec",
            "range": "stddev: 0.00001062024481402931",
            "extra": "mean: 3.3933755033557027 msec\nrounds: 298"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 475.2996867637131,
            "unit": "iter/sec",
            "range": "stddev: 0.000010564616480854966",
            "extra": "mean: 2.103935743801852 msec\nrounds: 484"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1438.6614100977486,
            "unit": "iter/sec",
            "range": "stddev: 0.000005650926632303855",
            "extra": "mean: 695.0905841924654 usec\nrounds: 1455"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1223.0454856724173,
            "unit": "iter/sec",
            "range": "stddev: 0.000006104640865176973",
            "extra": "mean: 817.6310789048134 usec\nrounds: 1242"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "7ba9623bc95e5ad9b88a6ab406a22de86ad5df5b",
          "message": "Merge pull request #429 from TeoZosa/ci/fix-go-downloads\n\n👷  Fix `pre-commit` 2.17.0 compatibility with CI Go version",
          "timestamp": "2022-02-01T20:06:42Z",
          "tree_id": "45506e53ff19af72ba3c5f820616517d836a2b67"
        },
        "date": 1643746291510,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 207.1153743625266,
            "unit": "iter/sec",
            "range": "stddev: 0.000014045056266849194",
            "extra": "mean: 4.8282267942583506 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 270.7659910377457,
            "unit": "iter/sec",
            "range": "stddev: 0.00000989147831170229",
            "extra": "mean: 3.693226007325996 msec\nrounds: 273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 406.8152760904916,
            "unit": "iter/sec",
            "range": "stddev: 0.000011543409399209654",
            "extra": "mean: 2.4581181159420398 msec\nrounds: 414"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 824.9217795632596,
            "unit": "iter/sec",
            "range": "stddev: 0.000008930473586193478",
            "extra": "mean: 1.2122361474434975 msec\nrounds: 841"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 189.1226550523566,
            "unit": "iter/sec",
            "range": "stddev: 0.000016089203491707942",
            "extra": "mean: 5.287573821989547 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 244.78766461224157,
            "unit": "iter/sec",
            "range": "stddev: 0.000009501063941984722",
            "extra": "mean: 4.0851731707317045 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 387.05102573446374,
            "unit": "iter/sec",
            "range": "stddev: 0.00003375326636173505",
            "extra": "mean: 2.583638676844768 msec\nrounds: 393"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 743.9393141035983,
            "unit": "iter/sec",
            "range": "stddev: 0.000008524399630900246",
            "extra": "mean: 1.3441956636005172 msec\nrounds: 761"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.19750282602206,
            "unit": "iter/sec",
            "range": "stddev: 0.0000759359803080238",
            "extra": "mean: 36.76808148148141 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.71972989985371,
            "unit": "iter/sec",
            "range": "stddev: 0.00005376460003294419",
            "extra": "mean: 34.819268965516756 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 298.98265969647554,
            "unit": "iter/sec",
            "range": "stddev: 0.000011328227545280999",
            "extra": "mean: 3.344675577557544 msec\nrounds: 303"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 489.9837579826443,
            "unit": "iter/sec",
            "range": "stddev: 0.000009975771809054132",
            "extra": "mean: 2.040883975659089 msec\nrounds: 493"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1434.3071068535685,
            "unit": "iter/sec",
            "range": "stddev: 0.0000056885081851593855",
            "extra": "mean: 697.2007565337206 usec\nrounds: 1454"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1218.5882546793212,
            "unit": "iter/sec",
            "range": "stddev: 0.000006288265592036191",
            "extra": "mean: 820.6217285945827 usec\nrounds: 1238"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "fbc1f51374879029ede846aead7cfe3820b086d5",
          "message": "Merge pull request #422 from TeoZosa/dependabot/pip/docs/orjson-3.6.6",
          "timestamp": "2022-02-01T20:46:04Z",
          "tree_id": "c109a979c4f17a5f3197a1b3af7e228b72defa1e"
        },
        "date": 1643755070760,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 206.73645826975272,
            "unit": "iter/sec",
            "range": "stddev: 0.00010944471547855038",
            "extra": "mean: 4.837076190476213 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 271.3661586321088,
            "unit": "iter/sec",
            "range": "stddev: 0.00001038477490756935",
            "extra": "mean: 3.6850578754578622 msec\nrounds: 273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 405.5266641217929,
            "unit": "iter/sec",
            "range": "stddev: 0.000011754655290307784",
            "extra": "mean: 2.465929095354547 msec\nrounds: 409"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 831.8209983990401,
            "unit": "iter/sec",
            "range": "stddev: 0.000009321639946607031",
            "extra": "mean: 1.2021817216981114 msec\nrounds: 848"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 191.27131367629056,
            "unit": "iter/sec",
            "range": "stddev: 0.000014060425869839979",
            "extra": "mean: 5.228175520833249 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 248.0199738752281,
            "unit": "iter/sec",
            "range": "stddev: 0.000008283989935226359",
            "extra": "mean: 4.031933333333354 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 387.97592167845823,
            "unit": "iter/sec",
            "range": "stddev: 0.000010086146416201621",
            "extra": "mean: 2.577479539642069 msec\nrounds: 391"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 744.2309647548002,
            "unit": "iter/sec",
            "range": "stddev: 0.00000944466649461611",
            "extra": "mean: 1.3436688976378017 msec\nrounds: 762"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.28217062405939,
            "unit": "iter/sec",
            "range": "stddev: 0.0000680094199628448",
            "extra": "mean: 36.65397499999973 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.839906793399418,
            "unit": "iter/sec",
            "range": "stddev: 0.00006669852030435467",
            "extra": "mean: 34.67417586206865 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 298.080097675528,
            "unit": "iter/sec",
            "range": "stddev: 0.000011615828259939473",
            "extra": "mean: 3.3548029801323387 msec\nrounds: 302"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 485.48951445839657,
            "unit": "iter/sec",
            "range": "stddev: 0.000012468836796410682",
            "extra": "mean: 2.059776720647782 msec\nrounds: 494"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1475.0261412855791,
            "unit": "iter/sec",
            "range": "stddev: 0.000006432651157230194",
            "extra": "mean: 677.9540863787245 usec\nrounds: 1505"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1235.9880320905816,
            "unit": "iter/sec",
            "range": "stddev: 0.000006501111972375809",
            "extra": "mean: 809.0693227090351 usec\nrounds: 1255"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "03111c457eb51c4c8cc36cc7509d615c6316806a",
          "message": "Merge pull request #419 from TeoZosa/dependabot/github_actions/release-drafter/release-drafter-5.17.6",
          "timestamp": "2022-02-01T20:53:48Z",
          "tree_id": "651df2fa401b2bf9d3332100b717d5e869152cc9"
        },
        "date": 1643755245915,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 171.75877478261145,
            "unit": "iter/sec",
            "range": "stddev: 0.000518590301795694",
            "extra": "mean: 5.822118848167507 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 244.52821560069012,
            "unit": "iter/sec",
            "range": "stddev: 0.00016776317820588164",
            "extra": "mean: 4.089507615894031 msec\nrounds: 302"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 361.1445700933414,
            "unit": "iter/sec",
            "range": "stddev: 0.00011159251051740931",
            "extra": "mean: 2.7689742081447886 msec\nrounds: 442"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 766.5891783244628,
            "unit": "iter/sec",
            "range": "stddev: 0.0000783674840878531",
            "extra": "mean: 1.3044796721311722 msec\nrounds: 915"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 168.04950512032934,
            "unit": "iter/sec",
            "range": "stddev: 0.0002361106591336223",
            "extra": "mean: 5.950627461139888 msec\nrounds: 193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 223.69048955760098,
            "unit": "iter/sec",
            "range": "stddev: 0.00019564096953600973",
            "extra": "mean: 4.470462745098051 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 343.7362096306429,
            "unit": "iter/sec",
            "range": "stddev: 0.0001033249448959635",
            "extra": "mean: 2.9092076190475726 msec\nrounds: 420"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 682.2905411457197,
            "unit": "iter/sec",
            "range": "stddev: 0.00008804041438178787",
            "extra": "mean: 1.4656512727272673 msec\nrounds: 825"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.611062718242323,
            "unit": "iter/sec",
            "range": "stddev: 0.0011181388888891943",
            "extra": "mean: 39.04562692307637 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.58465679825184,
            "unit": "iter/sec",
            "range": "stddev: 0.0006466668156083206",
            "extra": "mean: 37.615682142857615 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 264.4873119602195,
            "unit": "iter/sec",
            "range": "stddev: 0.0001374290114415296",
            "extra": "mean: 3.780899705882323 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 452.7294112320843,
            "unit": "iter/sec",
            "range": "stddev: 0.0001179298763546105",
            "extra": "mean: 2.208824907749071 msec\nrounds: 542"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1360.848416279754,
            "unit": "iter/sec",
            "range": "stddev: 0.0000500270671883916",
            "extra": "mean: 734.8357010502092 usec\nrounds: 1619"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1130.4522573870977,
            "unit": "iter/sec",
            "range": "stddev: 0.00006216007349302302",
            "extra": "mean: 884.6017100371649 usec\nrounds: 1345"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "e50edc43b9469575157db7fb338cc96c1551312c",
          "message": "Merge pull request #428 from TeoZosa/dependabot/pip/rich-11.1.0",
          "timestamp": "2022-02-01T21:04:22Z",
          "tree_id": "ff71e2f9f681b869ee73b148cbfdf11fb491a23e"
        },
        "date": 1643757203637,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 205.50034071360733,
            "unit": "iter/sec",
            "range": "stddev: 0.000015580314547478206",
            "extra": "mean: 4.866171980676353 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 268.24945768901296,
            "unit": "iter/sec",
            "range": "stddev: 0.00000999376534266979",
            "extra": "mean: 3.7278733333333345 msec\nrounds: 270"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 401.98456536524765,
            "unit": "iter/sec",
            "range": "stddev: 0.000024557183079177055",
            "extra": "mean: 2.4876577017114796 msec\nrounds: 409"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 825.7272776221014,
            "unit": "iter/sec",
            "range": "stddev: 0.000009303616321000863",
            "extra": "mean: 1.2110536094674778 msec\nrounds: 845"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 190.7070254382297,
            "unit": "iter/sec",
            "range": "stddev: 0.000017240907123364628",
            "extra": "mean: 5.243645312500044 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 246.67976987165517,
            "unit": "iter/sec",
            "range": "stddev: 0.000012890266922174624",
            "extra": "mean: 4.053838709677285 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 387.48800248943974,
            "unit": "iter/sec",
            "range": "stddev: 0.000011870242299092463",
            "extra": "mean: 2.5807250639386003 msec\nrounds: 391"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 753.677691651293,
            "unit": "iter/sec",
            "range": "stddev: 0.000008699752099602335",
            "extra": "mean: 1.3268271186440714 msec\nrounds: 767"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.458956949945243,
            "unit": "iter/sec",
            "range": "stddev: 0.00005237774010689815",
            "extra": "mean: 36.41798928571444 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.952841611582674,
            "unit": "iter/sec",
            "range": "stddev: 0.00004330372513841983",
            "extra": "mean: 34.53892413793148 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 298.0978386817262,
            "unit": "iter/sec",
            "range": "stddev: 0.000011575401602307387",
            "extra": "mean: 3.3546033222591802 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 492.6654067333292,
            "unit": "iter/sec",
            "range": "stddev: 0.000012616218912541875",
            "extra": "mean: 2.0297751503004995 msec\nrounds: 499"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1456.1825597440713,
            "unit": "iter/sec",
            "range": "stddev: 0.000005500019507449087",
            "extra": "mean: 686.7270819228554 usec\nrounds: 1477"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1213.067258735128,
            "unit": "iter/sec",
            "range": "stddev: 0.000007709616052189815",
            "extra": "mean: 824.3565991903083 usec\nrounds: 1235"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "7254f43340b5341ea577062ceeaf0414def12934",
          "message": "Merge pull request #416 from TeoZosa/dependabot/pip/sphinx-4.4.0",
          "timestamp": "2022-02-01T21:13:46Z",
          "tree_id": "153b43cd3046e8dd3cf45a6ac4a7fe988cc9f449"
        },
        "date": 1643757653940,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 206.45155142881893,
            "unit": "iter/sec",
            "range": "stddev: 0.000014220679568054391",
            "extra": "mean: 4.84375144230768 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 270.69202565089716,
            "unit": "iter/sec",
            "range": "stddev: 0.000010281569464489241",
            "extra": "mean: 3.69423516483514 msec\nrounds: 273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 409.1678908759257,
            "unit": "iter/sec",
            "range": "stddev: 0.000012161304993128656",
            "extra": "mean: 2.443984541062719 msec\nrounds: 414"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 822.9299246439728,
            "unit": "iter/sec",
            "range": "stddev: 0.000035421501630426615",
            "extra": "mean: 1.2151702958579782 msec\nrounds: 845"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 191.5834401261324,
            "unit": "iter/sec",
            "range": "stddev: 0.000015643978866276785",
            "extra": "mean: 5.219657812500038 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 248.45009377998036,
            "unit": "iter/sec",
            "range": "stddev: 0.000008816738015726283",
            "extra": "mean: 4.024953199999871 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 390.34979811566257,
            "unit": "iter/sec",
            "range": "stddev: 0.000011066528963587754",
            "extra": "mean: 2.561804834605538 msec\nrounds: 393"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 750.0473906896567,
            "unit": "iter/sec",
            "range": "stddev: 0.000009184031785965282",
            "extra": "mean: 1.333249088541613 msec\nrounds: 768"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.233608139892066,
            "unit": "iter/sec",
            "range": "stddev: 0.00005450399383427425",
            "extra": "mean: 36.719335714285684 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.80676422557536,
            "unit": "iter/sec",
            "range": "stddev: 0.0001187597247255339",
            "extra": "mean: 34.71406896551662 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 300.5475321377463,
            "unit": "iter/sec",
            "range": "stddev: 0.000012845622162664029",
            "extra": "mean: 3.3272607260727134 msec\nrounds: 303"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 491.53324160666017,
            "unit": "iter/sec",
            "range": "stddev: 0.00006028818383469436",
            "extra": "mean: 2.0344504000000683 msec\nrounds: 500"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1456.8324414875747,
            "unit": "iter/sec",
            "range": "stddev: 0.000005928041136568785",
            "extra": "mean: 686.4207382551818 usec\nrounds: 1490"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1228.4641255942763,
            "unit": "iter/sec",
            "range": "stddev: 0.000008024724718637647",
            "extra": "mean: 814.0245849802448 usec\nrounds: 1265"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "76caacb1edc12f84e4944d2a5ac977ecb1000b1b",
          "message": "Merge pull request #424 from TeoZosa/dependabot/pip/sentry-sdk-1.5.4",
          "timestamp": "2022-02-01T21:30:40Z",
          "tree_id": "abf17f1b4d54f4575c8b34a627d1eb0d947d9dab"
        },
        "date": 1643758438582,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 205.79619515643216,
            "unit": "iter/sec",
            "range": "stddev: 0.000013535486263771748",
            "extra": "mean: 4.859176328502422 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 267.01247749306975,
            "unit": "iter/sec",
            "range": "stddev: 0.0000228240484110926",
            "extra": "mean: 3.7451433333333823 msec\nrounds: 270"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 401.06275703578507,
            "unit": "iter/sec",
            "range": "stddev: 0.000009520005406994746",
            "extra": "mean: 2.493375369458138 msec\nrounds: 406"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 804.9677451182924,
            "unit": "iter/sec",
            "range": "stddev: 0.00003551625821588153",
            "extra": "mean: 1.2422858009708784 msec\nrounds: 824"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 189.16150153428742,
            "unit": "iter/sec",
            "range": "stddev: 0.000018885475106849075",
            "extra": "mean: 5.286487958115198 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 245.28801231803934,
            "unit": "iter/sec",
            "range": "stddev: 0.000010312545284149631",
            "extra": "mean: 4.076840080971444 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 383.1689997071235,
            "unit": "iter/sec",
            "range": "stddev: 0.000009786347019887051",
            "extra": "mean: 2.6098144702842703 msec\nrounds: 387"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 732.7876938691363,
            "unit": "iter/sec",
            "range": "stddev: 0.000010305911778651477",
            "extra": "mean: 1.3646517379678913 msec\nrounds: 748"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.048362472099956,
            "unit": "iter/sec",
            "range": "stddev: 0.00007416706040433293",
            "extra": "mean: 36.970814814815036 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.63836051113734,
            "unit": "iter/sec",
            "range": "stddev: 0.00004508409602331023",
            "extra": "mean: 34.91820000000014 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 295.0079294555734,
            "unit": "iter/sec",
            "range": "stddev: 0.00001059537588593945",
            "extra": "mean: 3.389739393939222 msec\nrounds: 297"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 486.953250812219,
            "unit": "iter/sec",
            "range": "stddev: 0.000010790804638844581",
            "extra": "mean: 2.0535852226718663 msec\nrounds: 494"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1400.912225077076,
            "unit": "iter/sec",
            "range": "stddev: 0.000005889828108529455",
            "extra": "mean: 713.820596393883 usec\nrounds: 1442"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1197.1618418325304,
            "unit": "iter/sec",
            "range": "stddev: 0.000005770953565763188",
            "extra": "mean: 835.3089490968664 usec\nrounds: 1218"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "1add8bac0a9435b17e6cb4039fc7248aff2854ae",
          "message": "Merge pull request #425 from TeoZosa/dependabot/pip/pytest-mock-3.7.0",
          "timestamp": "2022-02-01T22:00:15Z",
          "tree_id": "dc051959949ebed5266814db49e6ddab59028a90"
        },
        "date": 1643759033587,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 204.8838570821269,
            "unit": "iter/sec",
            "range": "stddev: 0.00007885390477283089",
            "extra": "mean: 4.880814009661844 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 270.3509382114924,
            "unit": "iter/sec",
            "range": "stddev: 0.00003617337198776756",
            "extra": "mean: 3.698895985401433 msec\nrounds: 274"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 406.2039026684068,
            "unit": "iter/sec",
            "range": "stddev: 0.000011547389339081918",
            "extra": "mean: 2.4618178048779655 msec\nrounds: 410"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 822.7352175933514,
            "unit": "iter/sec",
            "range": "stddev: 0.000009906277834012818",
            "extra": "mean: 1.215457875894969 msec\nrounds: 838"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 189.96545102299376,
            "unit": "iter/sec",
            "range": "stddev: 0.00010906979191732314",
            "extra": "mean: 5.2641151041668 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 245.9884784154551,
            "unit": "iter/sec",
            "range": "stddev: 0.000025066933146277056",
            "extra": "mean: 4.0652310483870675 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 386.0247585025157,
            "unit": "iter/sec",
            "range": "stddev: 0.000010234332427295584",
            "extra": "mean: 2.5905074168797992 msec\nrounds: 391"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 735.2636845475196,
            "unit": "iter/sec",
            "range": "stddev: 0.000010221303078743293",
            "extra": "mean: 1.360056291390753 msec\nrounds: 755"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.93669875791861,
            "unit": "iter/sec",
            "range": "stddev: 0.00036085129218446047",
            "extra": "mean: 37.124074074074464 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.541840665273785,
            "unit": "iter/sec",
            "range": "stddev: 0.00007735409338542172",
            "extra": "mean: 35.03628275861961 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 300.05941770646643,
            "unit": "iter/sec",
            "range": "stddev: 0.000012716177508105074",
            "extra": "mean: 3.332673267326845 msec\nrounds: 303"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 488.7922691984061,
            "unit": "iter/sec",
            "range": "stddev: 0.000014488665089937728",
            "extra": "mean: 2.045858870967718 msec\nrounds: 496"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1436.3004677617166,
            "unit": "iter/sec",
            "range": "stddev: 0.000006017641161299275",
            "extra": "mean: 696.2331506849449 usec\nrounds: 1460"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1218.0454017555753,
            "unit": "iter/sec",
            "range": "stddev: 0.000006095857465333653",
            "extra": "mean: 820.9874595468237 usec\nrounds: 1236"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "62797e89c8da551f06c954afc88afbf7f598ffe6",
          "message": "Merge pull request #423 from TeoZosa/dependabot/pip/orjson-3.6.6",
          "timestamp": "2022-02-01T22:20:23Z",
          "tree_id": "b33af58f7c674aeeaa17f06c19ea69024130dab3"
        },
        "date": 1643759993391,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 205.73754536117207,
            "unit": "iter/sec",
            "range": "stddev: 0.00002190024069618664",
            "extra": "mean: 4.860561538461543 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 271.60641415398544,
            "unit": "iter/sec",
            "range": "stddev: 0.000010145889852891268",
            "extra": "mean: 3.6817981751824784 msec\nrounds: 274"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 403.51479098229055,
            "unit": "iter/sec",
            "range": "stddev: 0.000017853648840263978",
            "extra": "mean: 2.4782239024390256 msec\nrounds: 410"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 815.5247133634534,
            "unit": "iter/sec",
            "range": "stddev: 0.000009931400365777774",
            "extra": "mean: 1.2262044100119525 msec\nrounds: 839"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 188.3294985152143,
            "unit": "iter/sec",
            "range": "stddev: 0.000015371822755900087",
            "extra": "mean: 5.309842631579112 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 245.4666127299955,
            "unit": "iter/sec",
            "range": "stddev: 0.000010553837231777347",
            "extra": "mean: 4.073873790322614 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 383.7081476271459,
            "unit": "iter/sec",
            "range": "stddev: 0.000011421081579835733",
            "extra": "mean: 2.606147422680513 msec\nrounds: 388"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 737.6634110338584,
            "unit": "iter/sec",
            "range": "stddev: 0.000012333761311645727",
            "extra": "mean: 1.355631830238765 msec\nrounds: 754"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.090200013719098,
            "unit": "iter/sec",
            "range": "stddev: 0.0000652738507768843",
            "extra": "mean: 36.91371785714307 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.787044956231245,
            "unit": "iter/sec",
            "range": "stddev: 0.00005179925275774058",
            "extra": "mean: 34.73784827586271 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 294.5477239467173,
            "unit": "iter/sec",
            "range": "stddev: 0.000010808168589579753",
            "extra": "mean: 3.3950355704697164 msec\nrounds: 298"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 486.64997936669675,
            "unit": "iter/sec",
            "range": "stddev: 0.000010335851481858155",
            "extra": "mean: 2.0548649797568115 msec\nrounds: 494"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1453.9743253181919,
            "unit": "iter/sec",
            "range": "stddev: 0.000006354904116341663",
            "extra": "mean: 687.7700538358249 usec\nrounds: 1486"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1225.1483812459287,
            "unit": "iter/sec",
            "range": "stddev: 0.000006385439715293216",
            "extra": "mean: 816.2276629570684 usec\nrounds: 1258"
          }
        ]
      }
    ]
  }
}