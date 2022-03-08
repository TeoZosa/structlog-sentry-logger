window.BENCHMARK_DATA = {
  "lastUpdate": 1646752745374,
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
          "id": "7940508d06cb95f1d0485d97377176a2d09c3797",
          "message": "Merge pull request #418 from TeoZosa/dependabot/pip/pre-commit-2.17.0",
          "timestamp": "2022-02-01T23:34:45Z",
          "tree_id": "e604faef0c8a6e5394e2cb6a4ccd21eb59dedd5a"
        },
        "date": 1643761462352,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 207.72211432488513,
            "unit": "iter/sec",
            "range": "stddev: 0.000013300954343793844",
            "extra": "mean: 4.814123923444967 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 269.5280741133078,
            "unit": "iter/sec",
            "range": "stddev: 0.000031878791285375204",
            "extra": "mean: 3.7101886446886665 msec\nrounds: 273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 408.3534683892466,
            "unit": "iter/sec",
            "range": "stddev: 0.00001113595596029101",
            "extra": "mean: 2.4488588377723537 msec\nrounds: 413"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 824.8593629463445,
            "unit": "iter/sec",
            "range": "stddev: 0.000010995643431095434",
            "extra": "mean: 1.2123278766310714 msec\nrounds: 843"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 190.97410619891545,
            "unit": "iter/sec",
            "range": "stddev: 0.000015735224507608624",
            "extra": "mean: 5.236311979166519 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 247.10627634064878,
            "unit": "iter/sec",
            "range": "stddev: 0.00001170072813116844",
            "extra": "mean: 4.046841767068062 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 387.66660988820735,
            "unit": "iter/sec",
            "range": "stddev: 0.000011366248003528068",
            "extra": "mean: 2.5795360613811265 msec\nrounds: 391"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 743.8863444270783,
            "unit": "iter/sec",
            "range": "stddev: 0.000009947682130439983",
            "extra": "mean: 1.3442913793103353 msec\nrounds: 754"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.92996861661241,
            "unit": "iter/sec",
            "range": "stddev: 0.00006606845733120407",
            "extra": "mean: 37.13335185185197 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.4665845978306,
            "unit": "iter/sec",
            "range": "stddev: 0.00006224007626675418",
            "extra": "mean: 35.12890689655156 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 300.923448935127,
            "unit": "iter/sec",
            "range": "stddev: 0.000012478258906791537",
            "extra": "mean: 3.323104276315734 msec\nrounds: 304"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 490.35983217436404,
            "unit": "iter/sec",
            "range": "stddev: 0.000011636476576488295",
            "extra": "mean: 2.0393187499999312 msec\nrounds: 496"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1442.7956600077507,
            "unit": "iter/sec",
            "range": "stddev: 0.000006491766641500037",
            "extra": "mean: 693.0988411724416 usec\nrounds: 1467"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1201.6610237072548,
            "unit": "iter/sec",
            "range": "stddev: 0.000007529857028091217",
            "extra": "mean: 832.1814390841199 usec\nrounds: 1223"
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
          "id": "47770cd905b46cfd1cb60d3dbf04cbb6316bec25",
          "message": "Merge pull request #427 from TeoZosa/dependabot/pip/black-22.1.0\n\n⬆️ Bump black from 21.12b0 to 22.1.0",
          "timestamp": "2022-02-02T04:07:47Z",
          "tree_id": "a70318d0a2394db56a236ba295bc8f0250efa2aa"
        },
        "date": 1643775045468,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 205.91074719466388,
            "unit": "iter/sec",
            "range": "stddev: 0.00003288412015854521",
            "extra": "mean: 4.856473076923081 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 270.89751907306595,
            "unit": "iter/sec",
            "range": "stddev: 0.000012560602453326536",
            "extra": "mean: 3.6914328467153 msec\nrounds: 274"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 406.5125475560552,
            "unit": "iter/sec",
            "range": "stddev: 0.000011245667101707736",
            "extra": "mean: 2.4599486682809144 msec\nrounds: 413"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 829.2143648057054,
            "unit": "iter/sec",
            "range": "stddev: 0.000009355021094469317",
            "extra": "mean: 1.2059607773851235 msec\nrounds: 849"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 190.72493758205187,
            "unit": "iter/sec",
            "range": "stddev: 0.000017444838798071573",
            "extra": "mean: 5.24315284974095 msec\nrounds: 193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 247.11716489721587,
            "unit": "iter/sec",
            "range": "stddev: 0.000010327124757862765",
            "extra": "mean: 4.046663453815249 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 387.9910821437495,
            "unit": "iter/sec",
            "range": "stddev: 0.000011731370306090508",
            "extra": "mean: 2.5773788265306132 msec\nrounds: 392"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 744.1183361319017,
            "unit": "iter/sec",
            "range": "stddev: 0.000008974065335246025",
            "extra": "mean: 1.3438722733244688 msec\nrounds: 761"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.541296945247083,
            "unit": "iter/sec",
            "range": "stddev: 0.00003688695783997361",
            "extra": "mean: 36.309110714285886 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.097613764897595,
            "unit": "iter/sec",
            "range": "stddev: 0.00011191939184556119",
            "extra": "mean: 34.367079310344245 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 299.6573983228703,
            "unit": "iter/sec",
            "range": "stddev: 0.000012402478777935213",
            "extra": "mean: 3.3371443708609365 msec\nrounds: 302"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 489.4459885026186,
            "unit": "iter/sec",
            "range": "stddev: 0.000013379611407677715",
            "extra": "mean: 2.0431263581490153 msec\nrounds: 497"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1451.987673016957,
            "unit": "iter/sec",
            "range": "stddev: 0.0000063220189105140406",
            "extra": "mean: 688.711081081142 usec\nrounds: 1480"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1218.1538041188257,
            "unit": "iter/sec",
            "range": "stddev: 0.000007023368644023004",
            "extra": "mean: 820.9144006436597 usec\nrounds: 1243"
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
          "id": "2b62d0a6b48e4202055ba14a2e276730b25850f5",
          "message": "Merge pull request #426 from TeoZosa/dependabot/pip/dot-github/workflows/pip-22.0.2\n\n⬆️ Bump pip from 21.3.1 to 22.0.2 in /.github/workflows",
          "timestamp": "2022-02-02T04:07:54Z",
          "tree_id": "cf41ec2147c04fd89215114e649693eba83a014f"
        },
        "date": 1643775356161,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 207.0006422991087,
            "unit": "iter/sec",
            "range": "stddev: 0.000013121280843063847",
            "extra": "mean: 4.830902884615377 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 271.9353699611499,
            "unit": "iter/sec",
            "range": "stddev: 0.000009588919008433723",
            "extra": "mean: 3.6773443636363496 msec\nrounds: 275"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 402.96355994601424,
            "unit": "iter/sec",
            "range": "stddev: 0.00003565832295543313",
            "extra": "mean: 2.4816139705882385 msec\nrounds: 408"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 825.4315761669884,
            "unit": "iter/sec",
            "range": "stddev: 0.000009076100525292233",
            "extra": "mean: 1.2114874556212707 msec\nrounds: 845"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 188.79590223930492,
            "unit": "iter/sec",
            "range": "stddev: 0.000017391470893880773",
            "extra": "mean: 5.296725130890117 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 246.25826454651119,
            "unit": "iter/sec",
            "range": "stddev: 0.000012476350672698852",
            "extra": "mean: 4.060777419354908 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 383.69062994762925,
            "unit": "iter/sec",
            "range": "stddev: 0.000011314100435766682",
            "extra": "mean: 2.6062664082687976 msec\nrounds: 387"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 744.3697188063356,
            "unit": "iter/sec",
            "range": "stddev: 0.00000835414200481755",
            "extra": "mean: 1.3434184313725048 msec\nrounds: 765"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 30.870682710127596,
            "unit": "iter/sec",
            "range": "stddev: 0.00006131305970446883",
            "extra": "mean: 32.39319354838676 msec\nrounds: 31"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.924332980777262,
            "unit": "iter/sec",
            "range": "stddev: 0.0002613090228384397",
            "extra": "mean: 34.57296666666737 msec\nrounds: 33"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 295.737768138034,
            "unit": "iter/sec",
            "range": "stddev: 0.000019536804920431686",
            "extra": "mean: 3.381374000000079 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 486.4623772146785,
            "unit": "iter/sec",
            "range": "stddev: 0.000012468175787384028",
            "extra": "mean: 2.055657429718752 msec\nrounds: 498"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1437.5604745336866,
            "unit": "iter/sec",
            "range": "stddev: 0.000006825664750427008",
            "extra": "mean: 695.6229095853364 usec\nrounds: 1471"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1218.0536293305368,
            "unit": "iter/sec",
            "range": "stddev: 0.000006100720276275314",
            "extra": "mean: 820.9819140308438 usec\nrounds: 1233"
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
          "id": "7d2d445cfe47bb00f6f42c0a2ada8bdc5346040c",
          "message": "Merge pull request #430 from TeoZosa/fix/no-git-executable-installed-compatibility\n\n🐛 Fix import errors when no git executable is found",
          "timestamp": "2022-02-02T06:00:23Z",
          "tree_id": "47d2f81f207a4b535eb059b62bdaa83d233cf9e1"
        },
        "date": 1643781852376,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 182.605241638261,
            "unit": "iter/sec",
            "range": "stddev: 0.00018270871351519667",
            "extra": "mean: 5.476294059405968 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 242.8785971332192,
            "unit": "iter/sec",
            "range": "stddev: 0.00016068038654495117",
            "extra": "mean: 4.117283333333398 msec\nrounds: 288"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 365.2542099059691,
            "unit": "iter/sec",
            "range": "stddev: 0.00012728738803648293",
            "extra": "mean: 2.737819230769276 msec\nrounds: 442"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 763.5086884500898,
            "unit": "iter/sec",
            "range": "stddev: 0.00006165570679508037",
            "extra": "mean: 1.3097427902621301 msec\nrounds: 1068"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 169.02884477235904,
            "unit": "iter/sec",
            "range": "stddev: 0.00020329923354675552",
            "extra": "mean: 5.916150000000048 msec\nrounds: 184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 221.26128323107463,
            "unit": "iter/sec",
            "range": "stddev: 0.00015081166373409423",
            "extra": "mean: 4.519543525179903 msec\nrounds: 278"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 350.6621468676585,
            "unit": "iter/sec",
            "range": "stddev: 0.00016654113163417316",
            "extra": "mean: 2.851747783251337 msec\nrounds: 406"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 672.9847112294714,
            "unit": "iter/sec",
            "range": "stddev: 0.00007805636278563998",
            "extra": "mean: 1.4859178571428562 msec\nrounds: 840"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.004428284249368,
            "unit": "iter/sec",
            "range": "stddev: 0.0008763158480641522",
            "extra": "mean: 39.99291599999964 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.509550870455204,
            "unit": "iter/sec",
            "range": "stddev: 0.0008730548875372023",
            "extra": "mean: 37.722253571428716 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 272.5273113117792,
            "unit": "iter/sec",
            "range": "stddev: 0.00019096478149374413",
            "extra": "mean: 3.669357009345646 msec\nrounds: 321"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 454.1231627576884,
            "unit": "iter/sec",
            "range": "stddev: 0.00014131573448730188",
            "extra": "mean: 2.2020457928801602 msec\nrounds: 618"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1324.8112650000367,
            "unit": "iter/sec",
            "range": "stddev: 0.0000316096165776017",
            "extra": "mean: 754.8244994731173 usec\nrounds: 1898"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1110.3353985520466,
            "unit": "iter/sec",
            "range": "stddev: 0.000044268023624696014",
            "extra": "mean: 900.628766140455 usec\nrounds: 1394"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "id": "e5de33e7c7030fc3852537ccfe0aaf997c32a45c",
          "message": ":bookmark: Bump version number to `0.17.2`",
          "timestamp": "2022-02-02T17:39:51Z",
          "tree_id": "c25a330d4bd1dc422503c1c59b6f2e3114bff876"
        },
        "date": 1643823806814,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 230.16180572506303,
            "unit": "iter/sec",
            "range": "stddev: 0.000015324908399338706",
            "extra": "mean: 4.344769527896987 msec\nrounds: 233"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 301.5443321084722,
            "unit": "iter/sec",
            "range": "stddev: 0.000011912346925540317",
            "extra": "mean: 3.316261967213092 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 452.5974796644835,
            "unit": "iter/sec",
            "range": "stddev: 0.000010855615323793122",
            "extra": "mean: 2.2094687772926025 msec\nrounds: 458"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 928.745253406338,
            "unit": "iter/sec",
            "range": "stddev: 0.000008210640391718493",
            "extra": "mean: 1.076721518987389 msec\nrounds: 948"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 212.8916858832951,
            "unit": "iter/sec",
            "range": "stddev: 0.000014824537716885803",
            "extra": "mean: 4.697224299065343 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 276.6018892801251,
            "unit": "iter/sec",
            "range": "stddev: 0.000011262942169956819",
            "extra": "mean: 3.6153043010753363 msec\nrounds: 279"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 433.7500627406068,
            "unit": "iter/sec",
            "range": "stddev: 0.000011243991735316315",
            "extra": "mean: 2.3054751708428562 msec\nrounds: 439"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 838.9701023081691,
            "unit": "iter/sec",
            "range": "stddev: 0.000008193501229910536",
            "extra": "mean: 1.191937587822029 msec\nrounds: 854"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 30.286112908648043,
            "unit": "iter/sec",
            "range": "stddev: 0.00004836229176088896",
            "extra": "mean: 33.018433333333284 msec\nrounds: 30"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 32.080184420960386,
            "unit": "iter/sec",
            "range": "stddev: 0.00011392064685721362",
            "extra": "mean: 31.17189062499981 msec\nrounds: 32"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 334.6493236469933,
            "unit": "iter/sec",
            "range": "stddev: 0.000021700459293117518",
            "extra": "mean: 2.988202662721815 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 557.3398445911023,
            "unit": "iter/sec",
            "range": "stddev: 0.000013084579389415098",
            "extra": "mean: 1.7942374113475765 msec\nrounds: 564"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1636.6118349118306,
            "unit": "iter/sec",
            "range": "stddev: 0.0000054197413313186556",
            "extra": "mean: 611.0184337350055 usec\nrounds: 1660"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1389.4404107693456,
            "unit": "iter/sec",
            "range": "stddev: 0.000006360429593369696",
            "extra": "mean: 719.7142045453328 usec\nrounds: 1408"
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
          "id": "7d2d445cfe47bb00f6f42c0a2ada8bdc5346040c",
          "message": "Merge pull request #430 from TeoZosa/fix/no-git-executable-installed-compatibility\n\n🐛 Fix import errors when no git executable is found",
          "timestamp": "2022-02-02T06:00:23Z",
          "tree_id": "47d2f81f207a4b535eb059b62bdaa83d233cf9e1"
        },
        "date": 1643830245660,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 127.47973582119391,
            "unit": "iter/sec",
            "range": "stddev: 0.0013664706174913218",
            "extra": "mean: 7.844383999999998 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 166.6955178139808,
            "unit": "iter/sec",
            "range": "stddev: 0.000844766088046266",
            "extra": "mean: 5.998961538461532 msec\nrounds: 195"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 241.45846931038187,
            "unit": "iter/sec",
            "range": "stddev: 0.0004806811470949178",
            "extra": "mean: 4.141498961937648 msec\nrounds: 289"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 537.6325568771181,
            "unit": "iter/sec",
            "range": "stddev: 0.0004219382986431717",
            "extra": "mean: 1.8600064062499866 msec\nrounds: 640"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.13868368230334,
            "unit": "iter/sec",
            "range": "stddev: 0.0008566608607740493",
            "extra": "mean: 8.536889510489477 msec\nrounds: 143"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.27920752387078,
            "unit": "iter/sec",
            "range": "stddev: 0.0008534657576298195",
            "extra": "mean: 6.610293750000026 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 238.88078444682452,
            "unit": "iter/sec",
            "range": "stddev: 0.00043023565009928983",
            "extra": "mean: 4.186188530465926 msec\nrounds: 279"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 477.26227874469964,
            "unit": "iter/sec",
            "range": "stddev: 0.0005560063545395104",
            "extra": "mean: 2.0952839655172637 msec\nrounds: 580"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.91378605406026,
            "unit": "iter/sec",
            "range": "stddev: 0.0019352929589354004",
            "extra": "mean: 47.815349999999505 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.11383168573002,
            "unit": "iter/sec",
            "range": "stddev: 0.0023128071769974935",
            "extra": "mean: 45.22056666666666 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 173.93206495595862,
            "unit": "iter/sec",
            "range": "stddev: 0.0010250627008643962",
            "extra": "mean: 5.749371171170826 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 308.29137417049037,
            "unit": "iter/sec",
            "range": "stddev: 0.00044361850880622627",
            "extra": "mean: 3.2436846560844192 msec\nrounds: 378"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 933.8643609250774,
            "unit": "iter/sec",
            "range": "stddev: 0.00026404680950493383",
            "extra": "mean: 1.070819320066363 msec\nrounds: 1206"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 817.6558104392444,
            "unit": "iter/sec",
            "range": "stddev: 0.00042884728035804114",
            "extra": "mean: 1.223008492366489 msec\nrounds: 1048"
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
          "id": "6fb42723fda6021e9cf4eb191f0536f7d1413027",
          "message": "Merge pull request #431 from TeoZosa/ci/fix-release-workflow-windows-runner\n\n💚  Fix Windows package building in CI",
          "timestamp": "2022-02-02T20:46:43Z",
          "tree_id": "8223898c72d6743fd7f73aadb30236d7480040c6"
        },
        "date": 1643842721460,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 166.41882689822822,
            "unit": "iter/sec",
            "range": "stddev: 0.0011201527132423394",
            "extra": "mean: 6.00893551912573 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 231.03756837877256,
            "unit": "iter/sec",
            "range": "stddev: 0.0000385415417878564",
            "extra": "mean: 4.328300401606368 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 347.5053682045397,
            "unit": "iter/sec",
            "range": "stddev: 0.000020995233560154545",
            "extra": "mean: 2.8776533875338743 msec\nrounds: 369"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 710.6127975039966,
            "unit": "iter/sec",
            "range": "stddev: 0.00001707206615786779",
            "extra": "mean: 1.4072361256544579 msec\nrounds: 764"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 162.60703995564808,
            "unit": "iter/sec",
            "range": "stddev: 0.00011557349156798655",
            "extra": "mean: 6.149795238095198 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 210.81598163076995,
            "unit": "iter/sec",
            "range": "stddev: 0.000039955470933898546",
            "extra": "mean: 4.743473394495456 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 332.16432019632003,
            "unit": "iter/sec",
            "range": "stddev: 0.00003040584943608571",
            "extra": "mean: 3.010558146067486 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 638.675773418355,
            "unit": "iter/sec",
            "range": "stddev: 0.000014533487621499493",
            "extra": "mean: 1.5657396782842503 msec\nrounds: 746"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.474736342031655,
            "unit": "iter/sec",
            "range": "stddev: 0.00007145251577732046",
            "extra": "mean: 42.59898749999991 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.973760070294485,
            "unit": "iter/sec",
            "range": "stddev: 0.000146733873389282",
            "extra": "mean: 40.04202799999945 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 254.74882861194098,
            "unit": "iter/sec",
            "range": "stddev: 0.000035701763038687156",
            "extra": "mean: 3.9254351254478212 msec\nrounds: 279"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 426.80816885543356,
            "unit": "iter/sec",
            "range": "stddev: 0.000039990903076576974",
            "extra": "mean: 2.3429729629629352 msec\nrounds: 540"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1275.3350049027094,
            "unit": "iter/sec",
            "range": "stddev: 0.000013967504160696349",
            "extra": "mean: 784.1077020200556 usec\nrounds: 1584"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1064.3923747065912,
            "unit": "iter/sec",
            "range": "stddev: 0.000018287453267742566",
            "extra": "mean: 939.5031604540183 usec\nrounds: 1234"
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
          "id": "475b4b4749ac4fe49e06172d6c1ce02bbd083e1d",
          "message": "Merge pull request #432 from TeoZosa/dependabot/pip/dot-github/workflows/pip-22.0.3",
          "timestamp": "2022-02-03T14:16:12Z",
          "tree_id": "ed7097a387a4590dfa9db87f1af3061cf6c05577"
        },
        "date": 1643898575292,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 141.24393533852643,
            "unit": "iter/sec",
            "range": "stddev: 0.0004587492871676338",
            "extra": "mean: 7.079949999999999 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 182.223852571196,
            "unit": "iter/sec",
            "range": "stddev: 0.00039336559350786076",
            "extra": "mean: 5.487755778894498 msec\nrounds: 199"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 259.8935617731079,
            "unit": "iter/sec",
            "range": "stddev: 0.0006918891848426855",
            "extra": "mean: 3.847729020979055 msec\nrounds: 286"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 555.1030345305408,
            "unit": "iter/sec",
            "range": "stddev: 0.0003375202572735663",
            "extra": "mean: 1.8014673633440241 msec\nrounds: 622"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 127.92619754911532,
            "unit": "iter/sec",
            "range": "stddev: 0.00046835340767532565",
            "extra": "mean: 7.817007142857234 msec\nrounds: 140"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 170.29595575952885,
            "unit": "iter/sec",
            "range": "stddev: 0.000325749951335484",
            "extra": "mean: 5.872130054644855 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 247.72163654822072,
            "unit": "iter/sec",
            "range": "stddev: 0.000417976423422972",
            "extra": "mean: 4.036789090909075 msec\nrounds: 275"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 481.10073183914733,
            "unit": "iter/sec",
            "range": "stddev: 0.0003198406542232962",
            "extra": "mean: 2.078566782006773 msec\nrounds: 578"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 21.739687283105354,
            "unit": "iter/sec",
            "range": "stddev: 0.0015037069123142693",
            "extra": "mean: 45.99882173913025 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.855745391567147,
            "unit": "iter/sec",
            "range": "stddev: 0.0015111978448588135",
            "extra": "mean: 43.75267500000065 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.42214752853062,
            "unit": "iter/sec",
            "range": "stddev: 0.0004127504096028793",
            "extra": "mean: 5.091075586854321 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 334.04635891737854,
            "unit": "iter/sec",
            "range": "stddev: 0.0003629382383611493",
            "extra": "mean: 2.9935964673913276 msec\nrounds: 368"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 925.928668791448,
            "unit": "iter/sec",
            "range": "stddev: 0.0003658290963288426",
            "extra": "mean: 1.0799968007311322 msec\nrounds: 1094"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 865.9774457388239,
            "unit": "iter/sec",
            "range": "stddev: 0.00018397775549542646",
            "extra": "mean: 1.1547644859813089 msec\nrounds: 963"
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
          "id": "ec84dd4269d982da53f359d284adaacdfe297a88",
          "message": "Merge pull request #433 from TeoZosa/dependabot/github_actions/release-drafter/release-drafter-5.18.0",
          "timestamp": "2022-02-04T14:17:32Z",
          "tree_id": "369052a1c1857be1fb0c5ff4c916ebd9d9ac7b6c"
        },
        "date": 1643987980737,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 126.022899158391,
            "unit": "iter/sec",
            "range": "stddev: 0.0005960697903792692",
            "extra": "mean: 7.935065822784771 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 169.28531536905,
            "unit": "iter/sec",
            "range": "stddev: 0.000597624409753454",
            "extra": "mean: 5.907186915887847 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 242.77315229660852,
            "unit": "iter/sec",
            "range": "stddev: 0.0006480192224919345",
            "extra": "mean: 4.11907161290326 msec\nrounds: 310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 527.1424390489618,
            "unit": "iter/sec",
            "range": "stddev: 0.0003218991291651716",
            "extra": "mean: 1.8970204747774417 msec\nrounds: 674"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.54016753083675,
            "unit": "iter/sec",
            "range": "stddev: 0.0010418263069971404",
            "extra": "mean: 8.730561702127577 msec\nrounds: 141"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 156.10329042520706,
            "unit": "iter/sec",
            "range": "stddev: 0.0006038129729676009",
            "extra": "mean: 6.406014871794934 msec\nrounds: 195"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 229.73018108767144,
            "unit": "iter/sec",
            "range": "stddev: 0.000693956153044555",
            "extra": "mean: 4.352932624113382 msec\nrounds: 282"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 491.6393673459419,
            "unit": "iter/sec",
            "range": "stddev: 0.0002997366876786928",
            "extra": "mean: 2.034011241610663 msec\nrounds: 596"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.7655216170566,
            "unit": "iter/sec",
            "range": "stddev: 0.0033493804804198162",
            "extra": "mean: 50.59315000000065 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.098116695793117,
            "unit": "iter/sec",
            "range": "stddev: 0.003307738116177492",
            "extra": "mean: 47.397595454545765 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 185.65576553980392,
            "unit": "iter/sec",
            "range": "stddev: 0.0007207758793335657",
            "extra": "mean: 5.3863126582277 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 312.11948908029916,
            "unit": "iter/sec",
            "range": "stddev: 0.0005765754994880711",
            "extra": "mean: 3.203901182033299 msec\nrounds: 423"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 919.1193089186977,
            "unit": "iter/sec",
            "range": "stddev: 0.0002756011348403936",
            "extra": "mean: 1.087998032786902 msec\nrounds: 1220"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 806.09487522404,
            "unit": "iter/sec",
            "range": "stddev: 0.0003834650329213277",
            "extra": "mean: 1.2405487626032448 msec\nrounds: 1091"
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
          "id": "9a9c2efa9a9118f8bca9aa78db6e33d5b288792d",
          "message": "Merge pull request #434 from TeoZosa/dependabot/github_actions/actions/setup-python-2.3.2",
          "timestamp": "2022-02-04T14:55:14Z",
          "tree_id": "8f8abe92f1f477f88bf71f535e6f932190b300a1"
        },
        "date": 1643988310908,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 204.45665891021542,
            "unit": "iter/sec",
            "range": "stddev: 0.000021204447262509685",
            "extra": "mean: 4.891012135922349 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 265.95410739424534,
            "unit": "iter/sec",
            "range": "stddev: 0.000012906632335400614",
            "extra": "mean: 3.760047211895919 msec\nrounds: 269"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 397.94761725655286,
            "unit": "iter/sec",
            "range": "stddev: 0.00001390974847194039",
            "extra": "mean: 2.512893548387073 msec\nrounds: 403"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 819.6535447169102,
            "unit": "iter/sec",
            "range": "stddev: 0.000010206555643939161",
            "extra": "mean: 1.2200276646706596 msec\nrounds: 835"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 187.31610315904354,
            "unit": "iter/sec",
            "range": "stddev: 0.00002546409466449894",
            "extra": "mean: 5.338569312169254 msec\nrounds: 189"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 244.26568986761592,
            "unit": "iter/sec",
            "range": "stddev: 0.000012521274256518565",
            "extra": "mean: 4.093902834008197 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 381.1724885497979,
            "unit": "iter/sec",
            "range": "stddev: 0.000014736435418227425",
            "extra": "mean: 2.623484196890973 msec\nrounds: 386"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 744.1447314504106,
            "unit": "iter/sec",
            "range": "stddev: 0.000009851216619399189",
            "extra": "mean: 1.3438246052631488 msec\nrounds: 760"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.796206808360335,
            "unit": "iter/sec",
            "range": "stddev: 0.00024893675394408875",
            "extra": "mean: 37.31871481481487 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.463245803289933,
            "unit": "iter/sec",
            "range": "stddev: 0.00011191558967337426",
            "extra": "mean: 35.13302758620785 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 295.3303432864493,
            "unit": "iter/sec",
            "range": "stddev: 0.000015172118764722444",
            "extra": "mean: 3.386038795986742 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 483.3136693901794,
            "unit": "iter/sec",
            "range": "stddev: 0.00001224570624095519",
            "extra": "mean: 2.0690496945011905 msec\nrounds: 491"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1421.3780523434828,
            "unit": "iter/sec",
            "range": "stddev: 0.000006667620413412261",
            "extra": "mean: 703.5425925926322 usec\nrounds: 1458"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1210.9348101950152,
            "unit": "iter/sec",
            "range": "stddev: 0.000006985329311952776",
            "extra": "mean: 825.8082859464209 usec\nrounds: 1231"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "id": "c661549bea9eb68e6cde4b3ec8d6246c19c6fd93",
          "message": ":bookmark: Bump version number to `0.17.2`",
          "timestamp": "2022-02-04T21:43:59Z",
          "tree_id": "1404459e9c8c38056732bc89523a3d3dfc305fe0"
        },
        "date": 1644011250160,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 134.69206674602634,
            "unit": "iter/sec",
            "range": "stddev: 0.001199308284107947",
            "extra": "mean: 7.424342236024838 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 182.8104120797103,
            "unit": "iter/sec",
            "range": "stddev: 0.0005888040964320335",
            "extra": "mean: 5.470147945205511 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 273.7649438888128,
            "unit": "iter/sec",
            "range": "stddev: 0.0004375983476578611",
            "extra": "mean: 3.6527686335403886 msec\nrounds: 322"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 589.8391947721854,
            "unit": "iter/sec",
            "range": "stddev: 0.0003070823661500715",
            "extra": "mean: 1.6953773314203573 msec\nrounds: 697"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 132.8246498781589,
            "unit": "iter/sec",
            "range": "stddev: 0.0009797357068586942",
            "extra": "mean: 7.528723026315582 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 169.58445679538036,
            "unit": "iter/sec",
            "range": "stddev: 0.0006821029352430946",
            "extra": "mean: 5.896766831683132 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 268.252343768333,
            "unit": "iter/sec",
            "range": "stddev: 0.0004001444107756748",
            "extra": "mean: 3.72783322580628 msec\nrounds: 310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 570.1158793065584,
            "unit": "iter/sec",
            "range": "stddev: 0.000217538735627828",
            "extra": "mean: 1.7540293759512837 msec\nrounds: 657"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.69220677079672,
            "unit": "iter/sec",
            "range": "stddev: 0.001984710693761206",
            "extra": "mean: 42.20797200000007 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.171897644368006,
            "unit": "iter/sec",
            "range": "stddev: 0.0026337562654198837",
            "extra": "mean: 41.37035555555554 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 207.30418299579185,
            "unit": "iter/sec",
            "range": "stddev: 0.0006065585674044278",
            "extra": "mean: 4.823829338843102 msec\nrounds: 242"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 369.3112136820785,
            "unit": "iter/sec",
            "range": "stddev: 0.00033735028074428154",
            "extra": "mean: 2.7077433962263866 msec\nrounds: 424"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1060.7479903929973,
            "unit": "iter/sec",
            "range": "stddev: 0.00016454483981657918",
            "extra": "mean: 942.7309870551904 usec\nrounds: 1236"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 906.5027995627468,
            "unit": "iter/sec",
            "range": "stddev: 0.00024212062562068245",
            "extra": "mean: 1.1031405534349719 msec\nrounds: 1048"
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
          "id": "0b53177e092680e558558b432467f921bf6b88a0",
          "message": "Merge pull request #436 from TeoZosa/dependabot/github_actions/release-drafter/release-drafter-5.18.1",
          "timestamp": "2022-02-07T14:22:16Z",
          "tree_id": "e2043a56baab023f0d126ec293042513f2b0b5c5"
        },
        "date": 1644244373953,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 205.07498875571653,
            "unit": "iter/sec",
            "range": "stddev: 0.00001299557304539607",
            "extra": "mean: 4.876265048543735 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 268.80857024970936,
            "unit": "iter/sec",
            "range": "stddev: 0.000010316119069168094",
            "extra": "mean: 3.7201194852941306 msec\nrounds: 272"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 402.49287830488794,
            "unit": "iter/sec",
            "range": "stddev: 0.000010221652874939301",
            "extra": "mean: 2.4845160098522316 msec\nrounds: 406"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 828.0996455733649,
            "unit": "iter/sec",
            "range": "stddev: 0.000009126879959712022",
            "extra": "mean: 1.2075841420118152 msec\nrounds: 845"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 188.96520762652193,
            "unit": "iter/sec",
            "range": "stddev: 0.00001553758882141026",
            "extra": "mean: 5.291979473684057 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 245.36459589544194,
            "unit": "iter/sec",
            "range": "stddev: 0.0000091491038459155",
            "extra": "mean: 4.075567611335963 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 383.5493978423338,
            "unit": "iter/sec",
            "range": "stddev: 0.000010408446949348838",
            "extra": "mean: 2.6072260981910635 msec\nrounds: 387"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 751.0210051924339,
            "unit": "iter/sec",
            "range": "stddev: 0.000009728855706083303",
            "extra": "mean: 1.331520680628327 msec\nrounds: 764"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.33987863046725,
            "unit": "iter/sec",
            "range": "stddev: 0.00004628182531517217",
            "extra": "mean: 36.5766071428573 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.852115596299825,
            "unit": "iter/sec",
            "range": "stddev: 0.0006780570132378321",
            "extra": "mean: 34.6595034482756 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 296.7163587443286,
            "unit": "iter/sec",
            "range": "stddev: 0.00001812697824981099",
            "extra": "mean: 3.3702219999999037 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 489.49145891789556,
            "unit": "iter/sec",
            "range": "stddev: 0.00001136335542346024",
            "extra": "mean: 2.042936565656673 msec\nrounds: 495"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1473.9459446515327,
            "unit": "iter/sec",
            "range": "stddev: 0.000006767685578133626",
            "extra": "mean: 678.4509320906053 usec\nrounds: 1502"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1230.5190009686098,
            "unit": "iter/sec",
            "range": "stddev: 0.00000657887988733144",
            "extra": "mean: 812.6652243588636 usec\nrounds: 1248"
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
          "id": "d36a93fa13c0c4c0c358ff9a84b626bff5df6930",
          "message": "Merge pull request #437 from TeoZosa/dependabot/pip/mutmut-2.4.0",
          "timestamp": "2022-02-09T14:39:07Z",
          "tree_id": "06812fe319ab4ba1cc89bd7d463c68e2316ca007"
        },
        "date": 1644418218350,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 203.01363340530784,
            "unit": "iter/sec",
            "range": "stddev: 0.00001282512408314995",
            "extra": "mean: 4.92577756097564 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 264.996287107577,
            "unit": "iter/sec",
            "range": "stddev: 0.00006192319486235577",
            "extra": "mean: 3.7736377777777816 msec\nrounds: 270"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 402.62685121410163,
            "unit": "iter/sec",
            "range": "stddev: 0.00003743134961359326",
            "extra": "mean: 2.48368929440386 msec\nrounds: 411"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 820.1654480464663,
            "unit": "iter/sec",
            "range": "stddev: 0.000009253342415843697",
            "extra": "mean: 1.219266188769446 msec\nrounds: 837"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 186.30636395924046,
            "unit": "iter/sec",
            "range": "stddev: 0.000015585412931781204",
            "extra": "mean: 5.367503174603187 msec\nrounds: 189"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 243.92033522189814,
            "unit": "iter/sec",
            "range": "stddev: 0.000029885966936651803",
            "extra": "mean: 4.099699186991869 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 385.892900409529,
            "unit": "iter/sec",
            "range": "stddev: 0.000010935912198760131",
            "extra": "mean: 2.591392583120212 msec\nrounds: 391"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 749.4697184995367,
            "unit": "iter/sec",
            "range": "stddev: 0.000009732962768249506",
            "extra": "mean: 1.3342767230169528 msec\nrounds: 769"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.131277398822213,
            "unit": "iter/sec",
            "range": "stddev: 0.00007839678572057573",
            "extra": "mean: 36.85782962962926 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.66279653021947,
            "unit": "iter/sec",
            "range": "stddev: 0.00006237287702315537",
            "extra": "mean: 34.88843103448368 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 298.86012971121784,
            "unit": "iter/sec",
            "range": "stddev: 0.000011700296385508463",
            "extra": "mean: 3.3460468646864294 msec\nrounds: 303"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 488.9062326340509,
            "unit": "iter/sec",
            "range": "stddev: 0.000010051186406900162",
            "extra": "mean: 2.0453819838056875 msec\nrounds: 494"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1438.4994074871884,
            "unit": "iter/sec",
            "range": "stddev: 0.000006511929085328086",
            "extra": "mean: 695.1688647177327 usec\nrounds: 1471"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1234.762888108354,
            "unit": "iter/sec",
            "range": "stddev: 0.00000625101065262478",
            "extra": "mean: 809.8720893142417 usec\nrounds: 1254"
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
          "id": "c2bd9fb37185d8c6778ea5a421803844d2b7c833",
          "message": "Merge pull request #438 from TeoZosa/dependabot/pip/rich-11.2.0",
          "timestamp": "2022-02-09T14:45:16Z",
          "tree_id": "2970d8702df558319ba2462cb4c6b2728a184161"
        },
        "date": 1644419392925,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 169.30778512053425,
            "unit": "iter/sec",
            "range": "stddev: 0.000021161267024172047",
            "extra": "mean: 5.906402941176485 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 223.32665801681054,
            "unit": "iter/sec",
            "range": "stddev: 0.000012423217479342277",
            "extra": "mean: 4.4777457777778 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 339.23794731457093,
            "unit": "iter/sec",
            "range": "stddev: 0.000012494026042210497",
            "extra": "mean: 2.947783430232565 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 702.3836035415484,
            "unit": "iter/sec",
            "range": "stddev: 0.00005438351713452979",
            "extra": "mean: 1.423723439667177 msec\nrounds: 721"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 154.9158397499243,
            "unit": "iter/sec",
            "range": "stddev: 0.00001991095402426503",
            "extra": "mean: 6.455117834394909 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 202.57108383175293,
            "unit": "iter/sec",
            "range": "stddev: 0.000013733523772832003",
            "extra": "mean: 4.9365387254903474 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 320.75294236542356,
            "unit": "iter/sec",
            "range": "stddev: 0.000012403191292081215",
            "extra": "mean: 3.1176643076924044 msec\nrounds: 325"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 627.9830413374581,
            "unit": "iter/sec",
            "range": "stddev: 0.000010724117087566084",
            "extra": "mean: 1.592399689441027 msec\nrounds: 644"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.834509178181786,
            "unit": "iter/sec",
            "range": "stddev: 0.0005002618038302823",
            "extra": "mean: 43.7933652173918 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.990132954276497,
            "unit": "iter/sec",
            "range": "stddev: 0.0007053835442968892",
            "extra": "mean: 41.683803999999895 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 246.00485145374054,
            "unit": "iter/sec",
            "range": "stddev: 0.00001167587442102414",
            "extra": "mean: 4.064960483870957 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 410.084967628991,
            "unit": "iter/sec",
            "range": "stddev: 0.000011943785360159302",
            "extra": "mean: 2.438519036144511 msec\nrounds: 415"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1252.9644626969011,
            "unit": "iter/sec",
            "range": "stddev: 0.0000067214122577388554",
            "extra": "mean: 798.1072327044166 usec\nrounds: 1272"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1038.0603698774394,
            "unit": "iter/sec",
            "range": "stddev: 0.000006883072020567236",
            "extra": "mean: 963.3351094195676 usec\nrounds: 1051"
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
          "id": "e45b29fc8beeefa93cf0668fdc8c73df499a3093",
          "message": "Merge pull request #439 from TeoZosa/feat/support-case-insensitive-log-level-configuration\n\n✨  Support case-insensitive log level config",
          "timestamp": "2022-02-11T00:22:17Z",
          "tree_id": "d4b4ab89bb6083a91fb3d259c4f3dc5906026aa4"
        },
        "date": 1644539095727,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 205.23073953910517,
            "unit": "iter/sec",
            "range": "stddev: 0.000015028008750598124",
            "extra": "mean: 4.872564423076874 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 269.57073635228465,
            "unit": "iter/sec",
            "range": "stddev: 0.000009405478385452588",
            "extra": "mean: 3.709601470588278 msec\nrounds: 272"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 404.50643850924865,
            "unit": "iter/sec",
            "range": "stddev: 0.000013421211191025923",
            "extra": "mean: 2.4721485365853724 msec\nrounds: 410"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 836.7098799822263,
            "unit": "iter/sec",
            "range": "stddev: 0.000008896404917989966",
            "extra": "mean: 1.195157394366184 msec\nrounds: 852"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 188.62990554407065,
            "unit": "iter/sec",
            "range": "stddev: 0.000017174163014290782",
            "extra": "mean: 5.301386315789489 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 245.27783076683727,
            "unit": "iter/sec",
            "range": "stddev: 0.000008953177340312261",
            "extra": "mean: 4.077009311740883 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 385.55123990807846,
            "unit": "iter/sec",
            "range": "stddev: 0.000010782593631595814",
            "extra": "mean: 2.593688974358936 msec\nrounds: 390"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 751.267752023703,
            "unit": "iter/sec",
            "range": "stddev: 0.000009006382878817457",
            "extra": "mean: 1.3310833551770094 msec\nrounds: 763"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.217835222419296,
            "unit": "iter/sec",
            "range": "stddev: 0.00003775919351824774",
            "extra": "mean: 36.74061481481456 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.936039777675656,
            "unit": "iter/sec",
            "range": "stddev: 0.000028805249760884778",
            "extra": "mean: 34.558979310344554 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 297.56594046309834,
            "unit": "iter/sec",
            "range": "stddev: 0.000010046911770664989",
            "extra": "mean: 3.3605996655521526 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 486.8248218645595,
            "unit": "iter/sec",
            "range": "stddev: 0.000011406464006502374",
            "extra": "mean: 2.054126977687699 msec\nrounds: 493"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1468.652185469686,
            "unit": "iter/sec",
            "range": "stddev: 0.0000055260190584981845",
            "extra": "mean: 680.8964095744648 usec\nrounds: 1504"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1243.5832039118745,
            "unit": "iter/sec",
            "range": "stddev: 0.000006539559466197463",
            "extra": "mean: 804.1279400158769 usec\nrounds: 1267"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "id": "1db4e1d4e299da7b5a98c639bcc18633e0e3e78a",
          "message": ":bookmark: Bump version number to `0.17.3`",
          "timestamp": "2022-02-11T00:38:45Z",
          "tree_id": "bef9c677f792047c3b297d645772732327b9ddea"
        },
        "date": 1644540111409,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 131.4752762905351,
            "unit": "iter/sec",
            "range": "stddev: 0.0007543109886268079",
            "extra": "mean: 7.605992763157934 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 175.2621717180402,
            "unit": "iter/sec",
            "range": "stddev: 0.0005338194813447898",
            "extra": "mean: 5.7057378109452435 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 244.27066142537407,
            "unit": "iter/sec",
            "range": "stddev: 0.0006041704606830609",
            "extra": "mean: 4.093819512195102 msec\nrounds: 287"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 557.3538994353797,
            "unit": "iter/sec",
            "range": "stddev: 0.00030573717262241543",
            "extra": "mean: 1.79419216589861 msec\nrounds: 651"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.0983981594601,
            "unit": "iter/sec",
            "range": "stddev: 0.0006124662377394668",
            "extra": "mean: 8.058121739130355 msec\nrounds: 138"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 161.77254885135494,
            "unit": "iter/sec",
            "range": "stddev: 0.0006235148202112633",
            "extra": "mean: 6.18151847826081 msec\nrounds: 184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 244.3779252884928,
            "unit": "iter/sec",
            "range": "stddev: 0.0004312380648439202",
            "extra": "mean: 4.0920226277372675 msec\nrounds: 274"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 526.8899265717062,
            "unit": "iter/sec",
            "range": "stddev: 0.0003082267636963688",
            "extra": "mean: 1.897929623567982 msec\nrounds: 611"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 21.507176317444305,
            "unit": "iter/sec",
            "range": "stddev: 0.0024160125663569235",
            "extra": "mean: 46.49610833333373 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.624268546085062,
            "unit": "iter/sec",
            "range": "stddev: 0.0024709937986023144",
            "extra": "mean: 44.20032400000139 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 188.77340834162945,
            "unit": "iter/sec",
            "range": "stddev: 0.0004159288254008258",
            "extra": "mean: 5.297356279070128 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 328.8580799181766,
            "unit": "iter/sec",
            "range": "stddev: 0.0003109678550692522",
            "extra": "mean: 3.0408253926703295 msec\nrounds: 382"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 983.8590111896123,
            "unit": "iter/sec",
            "range": "stddev: 0.00019001592353444993",
            "extra": "mean: 1.016405794556754 msec\nrounds: 1139"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 881.2663178093853,
            "unit": "iter/sec",
            "range": "stddev: 0.00018043527726177672",
            "extra": "mean: 1.1347307616223865 msec\nrounds: 1011"
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
          "id": "45f0d204159e09f08b9f6a8fc0b574006fd92d13",
          "message": "Merge pull request #440 from TeoZosa/dependabot/pip/dot-github/workflows/poetry-1.1.13",
          "timestamp": "2022-02-11T14:15:34Z",
          "tree_id": "46c7a68ecb2770f9dc0223b3a64ca0da8ce60646"
        },
        "date": 1644597384954,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 205.93896128367308,
            "unit": "iter/sec",
            "range": "stddev: 0.000015151168309103894",
            "extra": "mean: 4.855807729468626 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 268.7035183663305,
            "unit": "iter/sec",
            "range": "stddev: 0.000012035958527406994",
            "extra": "mean: 3.7215738970588172 msec\nrounds: 272"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 407.7329063162126,
            "unit": "iter/sec",
            "range": "stddev: 0.0000297445270542121",
            "extra": "mean: 2.4525859564164327 msec\nrounds: 413"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 824.1936378501028,
            "unit": "iter/sec",
            "range": "stddev: 0.00001987083192178328",
            "extra": "mean: 1.2133071090047305 msec\nrounds: 844"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 188.08402564753774,
            "unit": "iter/sec",
            "range": "stddev: 0.00002015274183885197",
            "extra": "mean: 5.316772631578833 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 246.56726870009476,
            "unit": "iter/sec",
            "range": "stddev: 0.00001018291109301806",
            "extra": "mean: 4.055688353413697 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 388.0363852066661,
            "unit": "iter/sec",
            "range": "stddev: 0.000011815026647994835",
            "extra": "mean: 2.5770779187817796 msec\nrounds: 394"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 745.8882907969494,
            "unit": "iter/sec",
            "range": "stddev: 0.000008946042078656567",
            "extra": "mean: 1.3406833333333914 msec\nrounds: 756"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.19153444950907,
            "unit": "iter/sec",
            "range": "stddev: 0.00011625989245086658",
            "extra": "mean: 36.776151851851616 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.764964352770065,
            "unit": "iter/sec",
            "range": "stddev: 0.00004940272349492139",
            "extra": "mean: 34.76451379310332 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 299.54868986001975,
            "unit": "iter/sec",
            "range": "stddev: 0.000011828382147011085",
            "extra": "mean: 3.3383554455447753 msec\nrounds: 303"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 488.35067043851075,
            "unit": "iter/sec",
            "range": "stddev: 0.000011141102439555743",
            "extra": "mean: 2.0477088709677775 msec\nrounds: 496"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1436.1509120683702,
            "unit": "iter/sec",
            "range": "stddev: 0.000005901101711723857",
            "extra": "mean: 696.3056539509362 usec\nrounds: 1468"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1219.1399095136014,
            "unit": "iter/sec",
            "range": "stddev: 0.000006064781127175356",
            "extra": "mean: 820.2504012841058 usec\nrounds: 1246"
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
          "id": "da36b8c0c7f4ae05ef9336f868d9b4efe977c512",
          "message": "Merge pull request #442 from TeoZosa/dependabot/pip/sentry-sdk-1.5.5",
          "timestamp": "2022-02-11T15:38:09Z",
          "tree_id": "096ba26af60b4b08ed4519909c022a46052f53b8"
        },
        "date": 1644600133215,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 206.1361247284886,
            "unit": "iter/sec",
            "range": "stddev: 0.000013986595692257435",
            "extra": "mean: 4.851163285024137 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 270.3137261105254,
            "unit": "iter/sec",
            "range": "stddev: 0.000011478736239321515",
            "extra": "mean: 3.6994051851851637 msec\nrounds: 270"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 404.1188826627891,
            "unit": "iter/sec",
            "range": "stddev: 0.000011657817555541099",
            "extra": "mean: 2.474519362745133 msec\nrounds: 408"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 826.5688350289594,
            "unit": "iter/sec",
            "range": "stddev: 0.000008949614869958746",
            "extra": "mean: 1.2098205952381018 msec\nrounds: 840"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 188.05941489766712,
            "unit": "iter/sec",
            "range": "stddev: 0.000022736413528578273",
            "extra": "mean: 5.317468421052739 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 247.16416345948576,
            "unit": "iter/sec",
            "range": "stddev: 0.000010264863527593083",
            "extra": "mean: 4.045893975903657 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 384.464160013186,
            "unit": "iter/sec",
            "range": "stddev: 0.00001233644632963333",
            "extra": "mean: 2.601022680412403 msec\nrounds: 388"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 738.6068421316023,
            "unit": "iter/sec",
            "range": "stddev: 0.000010076021287602198",
            "extra": "mean: 1.3539002659574926 msec\nrounds: 752"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.57426981856342,
            "unit": "iter/sec",
            "range": "stddev: 0.00006923979228705261",
            "extra": "mean: 36.26569285714267 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.153059392423106,
            "unit": "iter/sec",
            "range": "stddev: 0.00010815618689444709",
            "extra": "mean: 34.30171724137812 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 296.8129119948518,
            "unit": "iter/sec",
            "range": "stddev: 0.000011535255304572517",
            "extra": "mean: 3.3691256666669034 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 489.0866754092398,
            "unit": "iter/sec",
            "range": "stddev: 0.000015190193929663325",
            "extra": "mean: 2.044627364185003 msec\nrounds: 497"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1416.819696312538,
            "unit": "iter/sec",
            "range": "stddev: 0.000005931675271244181",
            "extra": "mean: 705.8061111111266 usec\nrounds: 1440"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1204.254496896055,
            "unit": "iter/sec",
            "range": "stddev: 0.000006906611701883224",
            "extra": "mean: 830.3892595605686 usec\nrounds: 1229"
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
          "id": "316940211a09cc1a719e13e04294841f7f434b6c",
          "message": "Merge pull request #443 from TeoZosa/dependabot/pip/importlib-metadata-4.11.0",
          "timestamp": "2022-02-11T15:55:30Z",
          "tree_id": "969b54e0b2d458104a140225882681724a9d9e98"
        },
        "date": 1644600575669,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 235.6224222394792,
            "unit": "iter/sec",
            "range": "stddev: 0.00005913259013444623",
            "extra": "mean: 4.244078260869552 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 309.03231213761626,
            "unit": "iter/sec",
            "range": "stddev: 0.00006249076116671931",
            "extra": "mean: 3.235907575757601 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 470.15409948459717,
            "unit": "iter/sec",
            "range": "stddev: 0.00005455035410338008",
            "extra": "mean: 2.1269622047244563 msec\nrounds: 508"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 943.480165014339,
            "unit": "iter/sec",
            "range": "stddev: 0.000024657731566163782",
            "extra": "mean: 1.0599056949806698 msec\nrounds: 1036"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 214.8948857669032,
            "unit": "iter/sec",
            "range": "stddev: 0.00006198166233273499",
            "extra": "mean: 4.653437872340533 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 281.0350655289686,
            "unit": "iter/sec",
            "range": "stddev: 0.00004261471623830776",
            "extra": "mean: 3.5582748299319324 msec\nrounds: 294"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 445.2628449131117,
            "unit": "iter/sec",
            "range": "stddev: 0.000048872712704903316",
            "extra": "mean: 2.245864462809915 msec\nrounds: 484"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 859.2145232119291,
            "unit": "iter/sec",
            "range": "stddev: 0.00003733696461636521",
            "extra": "mean: 1.1638536977491774 msec\nrounds: 933"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 30.98949146344459,
            "unit": "iter/sec",
            "range": "stddev: 0.0002719140458352144",
            "extra": "mean: 32.269003225806614 msec\nrounds: 31"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 32.62345034903625,
            "unit": "iter/sec",
            "range": "stddev: 0.00025413937303754293",
            "extra": "mean: 30.652796969697032 msec\nrounds: 33"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 345.16395985866336,
            "unit": "iter/sec",
            "range": "stddev: 0.00007005554160204563",
            "extra": "mean: 2.897173854447251 msec\nrounds: 371"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 561.0042513922087,
            "unit": "iter/sec",
            "range": "stddev: 0.000048117436375853394",
            "extra": "mean: 1.782517685950442 msec\nrounds: 605"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1627.7594630882475,
            "unit": "iter/sec",
            "range": "stddev: 0.000017350543061041067",
            "extra": "mean: 614.3413831566746 usec\nrounds: 1793"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1395.635091958178,
            "unit": "iter/sec",
            "range": "stddev: 0.0000243260660021812",
            "extra": "mean: 716.5196732026327 usec\nrounds: 1530"
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
          "id": "10d31257f4488c797bfdddfd116cad1d15285a5e",
          "message": "Merge pull request #444 from TeoZosa/dependabot/pip/myst-parser-0.17.0",
          "timestamp": "2022-02-11T16:09:12Z",
          "tree_id": "30be41e6dcbae795029913bef949ddbe09766eea"
        },
        "date": 1644601050291,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 199.64336345233195,
            "unit": "iter/sec",
            "range": "stddev: 0.000012842553527069373",
            "extra": "mean: 5.008931840796031 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 259.4334523713552,
            "unit": "iter/sec",
            "range": "stddev: 0.000046548522358347626",
            "extra": "mean: 3.8545530303030913 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 397.3376210302305,
            "unit": "iter/sec",
            "range": "stddev: 0.000011047823084205923",
            "extra": "mean: 2.5167513647642177 msec\nrounds: 403"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 846.8547813421042,
            "unit": "iter/sec",
            "range": "stddev: 0.000007658938235436563",
            "extra": "mean: 1.180839999999988 msec\nrounds: 855"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 186.46376235471118,
            "unit": "iter/sec",
            "range": "stddev: 0.000013766171078350644",
            "extra": "mean: 5.362972340425555 msec\nrounds: 188"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 238.67813565856108,
            "unit": "iter/sec",
            "range": "stddev: 0.000010391448903638854",
            "extra": "mean: 4.189742798353936 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 385.21524245614296,
            "unit": "iter/sec",
            "range": "stddev: 0.000012796344922777593",
            "extra": "mean: 2.5959512755102123 msec\nrounds: 392"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 770.6662464111455,
            "unit": "iter/sec",
            "range": "stddev: 0.000007227391127297896",
            "extra": "mean: 1.2975785622593705 msec\nrounds: 779"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 29.027898713453645,
            "unit": "iter/sec",
            "range": "stddev: 0.0002632045186175701",
            "extra": "mean: 34.449617241379144 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 30.33523161101068,
            "unit": "iter/sec",
            "range": "stddev: 0.00007132112010016479",
            "extra": "mean: 32.96496999999938 msec\nrounds: 30"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 297.2827468056795,
            "unit": "iter/sec",
            "range": "stddev: 0.000010660492437351629",
            "extra": "mean: 3.3638009966776026 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 522.7572852663725,
            "unit": "iter/sec",
            "range": "stddev: 0.000013684688938844019",
            "extra": "mean: 1.9129336466166074 msec\nrounds: 532"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1449.5400524258112,
            "unit": "iter/sec",
            "range": "stddev: 0.000005160035430752801",
            "extra": "mean: 689.8740040514892 usec\nrounds: 1481"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1247.738291143915,
            "unit": "iter/sec",
            "range": "stddev: 0.000005830286055473063",
            "extra": "mean: 801.4501174627006 usec\nrounds: 1277"
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
          "id": "b4277c8ae1cb98a1e5d4b2d2ebbd8da5e372b326",
          "message": "Merge pull request #441 from TeoZosa/dependabot/pip/docs/poetry-1.1.13",
          "timestamp": "2022-02-11T17:27:49Z",
          "tree_id": "9816391172ddcd0a9a553d1adfef650be0c22e07"
        },
        "date": 1644602758058,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 180.19518635006315,
            "unit": "iter/sec",
            "range": "stddev: 0.00014477337207919962",
            "extra": "mean: 5.549537810945245 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 239.66422357522129,
            "unit": "iter/sec",
            "range": "stddev: 0.00016310511766368997",
            "extra": "mean: 4.172504285714296 msec\nrounds: 280"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 353.30102681757216,
            "unit": "iter/sec",
            "range": "stddev: 0.00006557006969338856",
            "extra": "mean: 2.8304474770642325 msec\nrounds: 436"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 741.4568416894491,
            "unit": "iter/sec",
            "range": "stddev: 0.00005108415503240158",
            "extra": "mean: 1.3486961664841428 msec\nrounds: 913"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 163.80573754082613,
            "unit": "iter/sec",
            "range": "stddev: 0.00011577432842086322",
            "extra": "mean: 6.104792268041069 msec\nrounds: 194"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 219.8565116549786,
            "unit": "iter/sec",
            "range": "stddev: 0.00021258829316846354",
            "extra": "mean: 4.5484211155378595 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 332.69281240138207,
            "unit": "iter/sec",
            "range": "stddev: 0.00003450904967376201",
            "extra": "mean: 3.005775786924833 msec\nrounds: 413"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 658.3963605651967,
            "unit": "iter/sec",
            "range": "stddev: 0.000056131272434318115",
            "extra": "mean: 1.5188419315403803 msec\nrounds: 818"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.896750303788004,
            "unit": "iter/sec",
            "range": "stddev: 0.0014473488808695917",
            "extra": "mean: 40.16588461538498 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.460445334104826,
            "unit": "iter/sec",
            "range": "stddev: 0.0004033166583685806",
            "extra": "mean: 39.276610714286214 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 262.95886813082876,
            "unit": "iter/sec",
            "range": "stddev: 0.00010819863283173532",
            "extra": "mean: 3.802876119403109 msec\nrounds: 268"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 445.6230735131748,
            "unit": "iter/sec",
            "range": "stddev: 0.00011367585509559062",
            "extra": "mean: 2.244048971962479 msec\nrounds: 535"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1298.9185010932747,
            "unit": "iter/sec",
            "range": "stddev: 0.000024174202030844876",
            "extra": "mean: 769.871242235998 usec\nrounds: 1610"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1088.842169509408,
            "unit": "iter/sec",
            "range": "stddev: 0.000030614733484577846",
            "extra": "mean: 918.4067516879539 usec\nrounds: 1333"
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
          "id": "0ae7dba7d77af17af5e1f3dbb92be48a22eaae2a",
          "message": "Merge pull request #447 from TeoZosa/dependabot/pip/docs/orjson-3.6.7",
          "timestamp": "2022-02-15T14:18:27Z",
          "tree_id": "b46a944ccecf07e135f14fc357aba558d4f4b371"
        },
        "date": 1644937341343,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 206.1920258406182,
            "unit": "iter/sec",
            "range": "stddev: 0.000012695051953804424",
            "extra": "mean: 4.849848076923099 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 269.077361528671,
            "unit": "iter/sec",
            "range": "stddev: 0.000016448285626215654",
            "extra": "mean: 3.7164033210331855 msec\nrounds: 271"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 403.6763437846222,
            "unit": "iter/sec",
            "range": "stddev: 0.000010919890265417004",
            "extra": "mean: 2.4772321078431605 msec\nrounds: 408"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 827.3349084289375,
            "unit": "iter/sec",
            "range": "stddev: 0.000009371624594603501",
            "extra": "mean: 1.2087003579952207 msec\nrounds: 838"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 189.51970022372223,
            "unit": "iter/sec",
            "range": "stddev: 0.00001952351010126229",
            "extra": "mean: 5.276496315789496 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 246.37514385487464,
            "unit": "iter/sec",
            "range": "stddev: 0.00002253870526175293",
            "extra": "mean: 4.058851004016226 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 385.10139472863955,
            "unit": "iter/sec",
            "range": "stddev: 0.000011043423680057584",
            "extra": "mean: 2.596718717948676 msec\nrounds: 390"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 749.9989746107799,
            "unit": "iter/sec",
            "range": "stddev: 0.000012208935684009513",
            "extra": "mean: 1.3333351562499947 msec\nrounds: 768"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.368132761247523,
            "unit": "iter/sec",
            "range": "stddev: 0.00004882680261352743",
            "extra": "mean: 36.53884642857224 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.012542121959115,
            "unit": "iter/sec",
            "range": "stddev: 0.00005599528437228608",
            "extra": "mean: 34.46785172413818 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 297.7325877050876,
            "unit": "iter/sec",
            "range": "stddev: 0.000010642681701852364",
            "extra": "mean: 3.3587186666665048 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 487.7713067442918,
            "unit": "iter/sec",
            "range": "stddev: 0.0000106688315743979",
            "extra": "mean: 2.0501410931173076 msec\nrounds: 494"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1440.7778001659099,
            "unit": "iter/sec",
            "range": "stddev: 0.0000052999973570066896",
            "extra": "mean: 694.0695504087078 usec\nrounds: 1468"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1231.723584620148,
            "unit": "iter/sec",
            "range": "stddev: 0.000005692501453332975",
            "extra": "mean: 811.8704654895366 usec\nrounds: 1246"
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
          "id": "7542bc8e10651c93e7480dd6551a0d3538733113",
          "message": "Merge pull request #449 from TeoZosa/dependabot/pip/importlib-metadata-4.11.1",
          "timestamp": "2022-02-15T14:58:31Z",
          "tree_id": "d7c609f609e357ac01dcfecf231e51591c7839d9"
        },
        "date": 1644938507035,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 231.45796154580904,
            "unit": "iter/sec",
            "range": "stddev: 0.00003634488353205488",
            "extra": "mean: 4.320438983050859 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 303.8860556687896,
            "unit": "iter/sec",
            "range": "stddev: 0.000025781432845548113",
            "extra": "mean: 3.290707096774182 msec\nrounds: 310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 458.8020209893935,
            "unit": "iter/sec",
            "range": "stddev: 0.000043727938267667937",
            "extra": "mean: 2.1795893528182995 msec\nrounds: 479"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 931.2221028970266,
            "unit": "iter/sec",
            "range": "stddev: 0.00001269298411370688",
            "extra": "mean: 1.073857672502624 msec\nrounds: 971"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 211.5626082491263,
            "unit": "iter/sec",
            "range": "stddev: 0.00003531958335099782",
            "extra": "mean: 4.7267331797235475 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 277.68575906184867,
            "unit": "iter/sec",
            "range": "stddev: 0.000020293568574617408",
            "extra": "mean: 3.6011929577464254 msec\nrounds: 284"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 436.82428743039145,
            "unit": "iter/sec",
            "range": "stddev: 0.000016884230168379025",
            "extra": "mean: 2.289249999999946 msec\nrounds: 452"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 846.1332439340333,
            "unit": "iter/sec",
            "range": "stddev: 0.000012226871172256573",
            "extra": "mean: 1.181846957520041 msec\nrounds: 871"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 30.725784662203257,
            "unit": "iter/sec",
            "range": "stddev: 0.00018670873723353838",
            "extra": "mean: 32.545954838710145 msec\nrounds: 31"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 32.914488159760744,
            "unit": "iter/sec",
            "range": "stddev: 0.0002807856088621613",
            "extra": "mean: 30.38175757575776 msec\nrounds: 33"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 340.3581785580028,
            "unit": "iter/sec",
            "range": "stddev: 0.00004785199614672182",
            "extra": "mean: 2.938081300812882 msec\nrounds: 369"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 554.946946525146,
            "unit": "iter/sec",
            "range": "stddev: 0.000017507077989758657",
            "extra": "mean: 1.8019740558292943 msec\nrounds: 609"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1653.1198135417474,
            "unit": "iter/sec",
            "range": "stddev: 0.000011033217052682476",
            "extra": "mean: 604.9168316829604 usec\nrounds: 1717"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1373.8881562874042,
            "unit": "iter/sec",
            "range": "stddev: 0.000011066033055003608",
            "extra": "mean: 727.8612858140176 usec\nrounds: 1431"
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
          "id": "18dd14713220d7c78db0299a886987ca4a4905ce",
          "message": "Merge pull request #448 from TeoZosa/dependabot/pip/orjson-3.6.7",
          "timestamp": "2022-02-15T15:16:00Z",
          "tree_id": "4234ad75866b67826906db4f20bfa05a1b90132c"
        },
        "date": 1644939017354,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 201.25383109851046,
            "unit": "iter/sec",
            "range": "stddev: 0.000025490236704433315",
            "extra": "mean: 4.968849509803947 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 262.9751439863333,
            "unit": "iter/sec",
            "range": "stddev: 0.000011675923792080486",
            "extra": "mean: 3.8026407547169914 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 407.7248171119054,
            "unit": "iter/sec",
            "range": "stddev: 0.000012085303385707399",
            "extra": "mean: 2.4526346153845644 msec\nrounds: 416"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 851.0574192789253,
            "unit": "iter/sec",
            "range": "stddev: 0.000007794417010720648",
            "extra": "mean: 1.1750088505746994 msec\nrounds: 870"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 188.3733384150934,
            "unit": "iter/sec",
            "range": "stddev: 0.000014875322463566065",
            "extra": "mean: 5.308606878306909 msec\nrounds: 189"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 241.9400869443791,
            "unit": "iter/sec",
            "range": "stddev: 0.000012419802917803033",
            "extra": "mean: 4.133254693877561 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 390.96609007581463,
            "unit": "iter/sec",
            "range": "stddev: 0.000011201234849216776",
            "extra": "mean: 2.557766582278488 msec\nrounds: 395"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 768.4522376885851,
            "unit": "iter/sec",
            "range": "stddev: 0.000007304714149336457",
            "extra": "mean: 1.3013170512820464 msec\nrounds: 780"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 29.056084053440166,
            "unit": "iter/sec",
            "range": "stddev: 0.00005320970641794784",
            "extra": "mean: 34.41619999999975 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 30.278837817460843,
            "unit": "iter/sec",
            "range": "stddev: 0.00004540447595475573",
            "extra": "mean: 33.02636666666683 msec\nrounds: 30"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 297.9275744949162,
            "unit": "iter/sec",
            "range": "stddev: 0.00001064343735486685",
            "extra": "mean: 3.3565204620462676 msec\nrounds: 303"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 522.8890247657472,
            "unit": "iter/sec",
            "range": "stddev: 0.00001558652711925338",
            "extra": "mean: 1.91245169172942 msec\nrounds: 532"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1470.2786247347062,
            "unit": "iter/sec",
            "range": "stddev: 0.0000050672537793046565",
            "extra": "mean: 680.1431940700612 usec\nrounds: 1484"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1261.4094385009757,
            "unit": "iter/sec",
            "range": "stddev: 0.00000585437104787018",
            "extra": "mean: 792.7640062598331 usec\nrounds: 1278"
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
          "id": "73222b50963d58d273b6f979c4439836d148b879",
          "message": "Merge pull request #450 from TeoZosa/dependabot/pip/gitpython-3.1.27",
          "timestamp": "2022-02-21T14:27:35Z",
          "tree_id": "223e242c51d598441e0d8fc22d94661027c05280"
        },
        "date": 1645453837278,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 202.6609681697719,
            "unit": "iter/sec",
            "range": "stddev: 0.00001859746350909613",
            "extra": "mean: 4.934349268292679 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 266.7489702501794,
            "unit": "iter/sec",
            "range": "stddev: 0.000013623233711709926",
            "extra": "mean: 3.748842962962956 msec\nrounds: 270"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 398.1914439572012,
            "unit": "iter/sec",
            "range": "stddev: 0.00001427588348524419",
            "extra": "mean: 2.511354814814863 msec\nrounds: 405"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 813.4998497704294,
            "unit": "iter/sec",
            "range": "stddev: 0.000012237645457335434",
            "extra": "mean: 1.2292565269461342 msec\nrounds: 835"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 187.5784368165893,
            "unit": "iter/sec",
            "range": "stddev: 0.000022029472291536594",
            "extra": "mean: 5.331103174603068 msec\nrounds: 189"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 244.3043458479127,
            "unit": "iter/sec",
            "range": "stddev: 0.000012640223442357164",
            "extra": "mean: 4.093255060728768 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 380.074187330505,
            "unit": "iter/sec",
            "range": "stddev: 0.00002011334730437148",
            "extra": "mean: 2.631065284974009 msec\nrounds: 386"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 743.0809364340869,
            "unit": "iter/sec",
            "range": "stddev: 0.000011928041096643424",
            "extra": "mean: 1.3457484251968863 msec\nrounds: 762"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.84844856239979,
            "unit": "iter/sec",
            "range": "stddev: 0.00019042411369607975",
            "extra": "mean: 37.24610000000005 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.438663441656786,
            "unit": "iter/sec",
            "range": "stddev: 0.00010663592761979268",
            "extra": "mean: 35.163396551724226 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 292.9531826521892,
            "unit": "iter/sec",
            "range": "stddev: 0.000018828722458976693",
            "extra": "mean: 3.4135147157191232 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 487.7636714207366,
            "unit": "iter/sec",
            "range": "stddev: 0.000014401508995498585",
            "extra": "mean: 2.0501731854839536 msec\nrounds: 496"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1429.3896117404977,
            "unit": "iter/sec",
            "range": "stddev: 0.000008336717415347882",
            "extra": "mean: 699.5993197280544 usec\nrounds: 1470"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1205.2345934880914,
            "unit": "iter/sec",
            "range": "stddev: 0.00000889529134219966",
            "extra": "mean: 829.7139871382897 usec\nrounds: 1244"
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
          "id": "74ca5315d14f3eeb750997d86c03aa5a6494cc2e",
          "message": "Merge pull request #452 from TeoZosa/ci/migrate-flakehell-to-flakeheaven\n\n💚 Migrate `flakehell` to `flakeheaven`",
          "timestamp": "2022-02-27T00:01:45Z",
          "tree_id": "7b5929b5f1eeefb65339b51f8c3a00d76bd2c809"
        },
        "date": 1645921203198,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 181.40457594932462,
            "unit": "iter/sec",
            "range": "stddev: 0.0001320335623125894",
            "extra": "mean: 5.512540104166667 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 236.0991252808477,
            "unit": "iter/sec",
            "range": "stddev: 0.00009674216500612213",
            "extra": "mean: 4.23550912698413 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 365.582413299959,
            "unit": "iter/sec",
            "range": "stddev: 0.00008848539055315449",
            "extra": "mean: 2.73536134020622 msec\nrounds: 388"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 763.3860729743325,
            "unit": "iter/sec",
            "range": "stddev: 0.00005154890364427723",
            "extra": "mean: 1.3099531618434743 msec\nrounds: 933"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 166.48237600636782,
            "unit": "iter/sec",
            "range": "stddev: 0.000145362771716896",
            "extra": "mean: 6.006641807909751 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 216.1053772331932,
            "unit": "iter/sec",
            "range": "stddev: 0.00010942992553618274",
            "extra": "mean: 4.62737213114752 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 348.4030903840181,
            "unit": "iter/sec",
            "range": "stddev: 0.0000847635848269825",
            "extra": "mean: 2.8702386046512283 msec\nrounds: 430"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 675.7198615226945,
            "unit": "iter/sec",
            "range": "stddev: 0.00004868680873153405",
            "extra": "mean: 1.4799032216495154 msec\nrounds: 776"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.252150971774196,
            "unit": "iter/sec",
            "range": "stddev: 0.000486469323356456",
            "extra": "mean: 41.23345599999965 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.49372854277851,
            "unit": "iter/sec",
            "range": "stddev: 0.00047307333306962035",
            "extra": "mean: 39.22533333333328 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 264.6036994610626,
            "unit": "iter/sec",
            "range": "stddev: 0.00010273314134309445",
            "extra": "mean: 3.779236654804041 msec\nrounds: 281"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 433.8223215234949,
            "unit": "iter/sec",
            "range": "stddev: 0.00006284614133844444",
            "extra": "mean: 2.3050911637930604 msec\nrounds: 464"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1352.594830218485,
            "unit": "iter/sec",
            "range": "stddev: 0.000022557067634611163",
            "extra": "mean: 739.3196969697642 usec\nrounds: 1914"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1105.5937075497861,
            "unit": "iter/sec",
            "range": "stddev: 0.00003211038388081291",
            "extra": "mean: 904.4913996627183 usec\nrounds: 1186"
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
          "id": "77a09aa2196c24f3e17a2590d683be1f2bfb68f0",
          "message": "Merge pull request #454 from TeoZosa/dependabot/pip/importlib-metadata-4.11.2",
          "timestamp": "2022-02-28T15:41:44Z",
          "tree_id": "9f05778d1e47acd85447aba52865a5c7ae793057"
        },
        "date": 1646063546954,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 198.4541808491139,
            "unit": "iter/sec",
            "range": "stddev: 0.000012355300685357732",
            "extra": "mean: 5.038946499999952 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 260.7200118904119,
            "unit": "iter/sec",
            "range": "stddev: 0.00001791295560267924",
            "extra": "mean: 3.8355321969697083 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 403.19628965465614,
            "unit": "iter/sec",
            "range": "stddev: 0.000011879821961816005",
            "extra": "mean: 2.4801815533980123 msec\nrounds: 412"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 853.0339001736892,
            "unit": "iter/sec",
            "range": "stddev: 0.00001127179035770578",
            "extra": "mean: 1.1722863532110348 msec\nrounds: 872"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 187.27612160715103,
            "unit": "iter/sec",
            "range": "stddev: 0.000017135108691728674",
            "extra": "mean: 5.339709042553216 msec\nrounds: 188"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 241.01405279848117,
            "unit": "iter/sec",
            "range": "stddev: 0.000018630862906826434",
            "extra": "mean: 4.149135655737588 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 382.80171989869524,
            "unit": "iter/sec",
            "range": "stddev: 0.000012749626445334115",
            "extra": "mean: 2.612318461538366 msec\nrounds: 390"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 767.1565746098623,
            "unit": "iter/sec",
            "range": "stddev: 0.000008283138093013402",
            "extra": "mean: 1.3035148665818974 msec\nrounds: 787"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 29.072276586822667,
            "unit": "iter/sec",
            "range": "stddev: 0.00007000580130794436",
            "extra": "mean: 34.39703103448256 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 30.297524722527335,
            "unit": "iter/sec",
            "range": "stddev: 0.00006301947418477558",
            "extra": "mean: 33.00599666666706 msec\nrounds: 30"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 299.22181589720066,
            "unit": "iter/sec",
            "range": "stddev: 0.000012256606325217777",
            "extra": "mean: 3.3420023102311354 msec\nrounds: 303"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 528.8730333822446,
            "unit": "iter/sec",
            "range": "stddev: 0.000016366990597242054",
            "extra": "mean: 1.8908129870127959 msec\nrounds: 539"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1445.7958010583984,
            "unit": "iter/sec",
            "range": "stddev: 0.000005142984220605894",
            "extra": "mean: 691.6606060606535 usec\nrounds: 1485"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1262.009049819831,
            "unit": "iter/sec",
            "range": "stddev: 0.00000537175291555311",
            "extra": "mean: 792.3873447205182 usec\nrounds: 1288"
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
          "id": "30eb5743cf758c66e3a4488dda16017a313a6909",
          "message": "Merge pull request #453 from TeoZosa/dependabot/github_actions/actions/setup-python-3",
          "timestamp": "2022-02-28T22:09:06Z",
          "tree_id": "6ba38681eabe733854ddd83decdb2aadaf2fd047"
        },
        "date": 1646086291594,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 179.15983128212773,
            "unit": "iter/sec",
            "range": "stddev: 0.00007018579949320696",
            "extra": "mean: 5.581608292682937 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 234.62522309685988,
            "unit": "iter/sec",
            "range": "stddev: 0.00006917534514046855",
            "extra": "mean: 4.26211635220128 msec\nrounds: 318"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 353.2425883553013,
            "unit": "iter/sec",
            "range": "stddev: 0.00005651787825822205",
            "extra": "mean: 2.8309157303370567 msec\nrounds: 445"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 732.5831940239251,
            "unit": "iter/sec",
            "range": "stddev: 0.0000206244938447874",
            "extra": "mean: 1.3650326790971148 msec\nrounds: 1019"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 162.58912190888876,
            "unit": "iter/sec",
            "range": "stddev: 0.00006906040931758825",
            "extra": "mean: 6.150472972972799 msec\nrounds: 185"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 211.0995766476196,
            "unit": "iter/sec",
            "range": "stddev: 0.00003555500421494971",
            "extra": "mean: 4.73710092592588 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 333.70022560804176,
            "unit": "iter/sec",
            "range": "stddev: 0.000020243642894727226",
            "extra": "mean: 2.9967016000000606 msec\nrounds: 375"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 652.7413338216206,
            "unit": "iter/sec",
            "range": "stddev: 0.000014528704937072593",
            "extra": "mean: 1.5320004237287619 msec\nrounds: 708"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.86521641724008,
            "unit": "iter/sec",
            "range": "stddev: 0.0002814204765459688",
            "extra": "mean: 41.90198750000048 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.073080797905856,
            "unit": "iter/sec",
            "range": "stddev: 0.00010302116802669834",
            "extra": "mean: 39.88341153846246 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 254.9801213574352,
            "unit": "iter/sec",
            "range": "stddev: 0.000037411121169822194",
            "extra": "mean: 3.9218743589747698 msec\nrounds: 273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 429.6839497071246,
            "unit": "iter/sec",
            "range": "stddev: 0.00004579652402455724",
            "extra": "mean: 2.327291956522012 msec\nrounds: 460"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1323.0878050709443,
            "unit": "iter/sec",
            "range": "stddev: 0.000021841990009904415",
            "extra": "mean: 755.8077371489187 usec\nrounds: 1887"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1085.3596553799732,
            "unit": "iter/sec",
            "range": "stddev: 0.000022082863803456386",
            "extra": "mean: 921.3535762483361 usec\nrounds: 1482"
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
          "id": "94e51d27eb7919abe7c0fa531705823d65bd07b4",
          "message": "Merge pull request #457 from TeoZosa/dependabot/github_actions/actions/upload-artifact-3\n\n⬆️ Bump actions/upload-artifact from 2.3.1 to 3",
          "timestamp": "2022-03-04T22:10:46Z",
          "tree_id": "6be20fd43b99440cb37226081ece12eb8cf46c52"
        },
        "date": 1646432357930,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 188.55555413856388,
            "unit": "iter/sec",
            "range": "stddev: 0.00023637213641730846",
            "extra": "mean: 5.30347676348547 msec\nrounds: 241"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 248.3525093371465,
            "unit": "iter/sec",
            "range": "stddev: 0.00025129843472629495",
            "extra": "mean: 4.026534713375768 msec\nrounds: 314"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 378.6488899435437,
            "unit": "iter/sec",
            "range": "stddev: 0.00017898134189294875",
            "extra": "mean: 2.6409690522243423 msec\nrounds: 517"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 803.7979604153484,
            "unit": "iter/sec",
            "range": "stddev: 0.0001230969080073915",
            "extra": "mean: 1.2440937265917764 msec\nrounds: 1068"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 172.15714504199636,
            "unit": "iter/sec",
            "range": "stddev: 0.000262631601500649",
            "extra": "mean: 5.808646511627839 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 232.1855436521955,
            "unit": "iter/sec",
            "range": "stddev: 0.00030124615432645187",
            "extra": "mean: 4.30690035335688 msec\nrounds: 283"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 356.4210784807006,
            "unit": "iter/sec",
            "range": "stddev: 0.00016492666676113987",
            "extra": "mean: 2.805670204081793 msec\nrounds: 490"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 719.5928330370019,
            "unit": "iter/sec",
            "range": "stddev: 0.00012658253240398066",
            "extra": "mean: 1.3896747634069049 msec\nrounds: 951"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.430984270055685,
            "unit": "iter/sec",
            "range": "stddev: 0.001006740075818792",
            "extra": "mean: 39.32211153846191 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.217967833661064,
            "unit": "iter/sec",
            "range": "stddev: 0.0007099514187271389",
            "extra": "mean: 38.14178148148107 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 268.1608641837461,
            "unit": "iter/sec",
            "range": "stddev: 0.0001415121880445871",
            "extra": "mean: 3.7291049275362993 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 443.1238626363354,
            "unit": "iter/sec",
            "range": "stddev: 0.0001008360176651377",
            "extra": "mean: 2.256705369127647 msec\nrounds: 596"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1315.6837714839428,
            "unit": "iter/sec",
            "range": "stddev: 0.00003360311082101597",
            "extra": "mean: 760.0610584959279 usec\nrounds: 1795"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1148.8235443810477,
            "unit": "iter/sec",
            "range": "stddev: 0.00008014868339864654",
            "extra": "mean: 870.4556978232636 usec\nrounds: 1562"
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
          "id": "21006934ce6f3b975f1a183c5fe6ba92865b53e6",
          "message": "Merge pull request #456 from TeoZosa/dependabot/github_actions/actions/download-artifact-3\n\n⬆️ Bump actions/download-artifact from 2.1.0 to 3",
          "timestamp": "2022-03-04T22:10:55Z",
          "tree_id": "069042521195e94faa8a114cf3b1790815137406"
        },
        "date": 1646433412194,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 136.5755408301572,
            "unit": "iter/sec",
            "range": "stddev: 0.0007601413112603892",
            "extra": "mean: 7.321955263157855 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 179.58014697696944,
            "unit": "iter/sec",
            "range": "stddev: 0.0007556443559503738",
            "extra": "mean: 5.568544278606959 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 272.8621206285312,
            "unit": "iter/sec",
            "range": "stddev: 0.0002260291015501508",
            "extra": "mean: 3.6648546075084534 msec\nrounds: 293"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 575.8645831345835,
            "unit": "iter/sec",
            "range": "stddev: 0.00037011817189902595",
            "extra": "mean: 1.7365193645991128 msec\nrounds: 661"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 129.2805872179192,
            "unit": "iter/sec",
            "range": "stddev: 0.00048292274233864855",
            "extra": "mean: 7.735113380281683 msec\nrounds: 142"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 171.31804468756974,
            "unit": "iter/sec",
            "range": "stddev: 0.00022717633528105237",
            "extra": "mean: 5.837096739130344 msec\nrounds: 184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 262.4495716961053,
            "unit": "iter/sec",
            "range": "stddev: 0.0003022721190483372",
            "extra": "mean: 3.8102557894737834 msec\nrounds: 285"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 565.0282296796117,
            "unit": "iter/sec",
            "range": "stddev: 0.00012600238252119102",
            "extra": "mean: 1.769823076923131 msec\nrounds: 611"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.157368211417666,
            "unit": "iter/sec",
            "range": "stddev: 0.0012816169620411386",
            "extra": "mean: 43.18279999999971 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.66601270109946,
            "unit": "iter/sec",
            "range": "stddev: 0.000842307090646981",
            "extra": "mean: 40.54161538461488 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.82296376347162,
            "unit": "iter/sec",
            "range": "stddev: 0.0005501853404832416",
            "extra": "mean: 4.930408181818019 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 358.7405838749686,
            "unit": "iter/sec",
            "range": "stddev: 0.0002444434536606911",
            "extra": "mean: 2.787529610389798 msec\nrounds: 385"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1084.2946888006938,
            "unit": "iter/sec",
            "range": "stddev: 0.0001349584219388309",
            "extra": "mean: 922.2585062240507 usec\nrounds: 1205"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 944.3118856076065,
            "unit": "iter/sec",
            "range": "stddev: 0.0001379279243714576",
            "extra": "mean: 1.0589721629486444 msec\nrounds: 1031"
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
          "id": "09d24435df1c81182b4cee0626fa40ae6be1cf95",
          "message": "Merge pull request #455 from TeoZosa/dependabot/github_actions/actions/checkout-3\n\n⬆️ Bump actions/checkout from 2.4.0 to 3",
          "timestamp": "2022-03-04T22:11:00Z",
          "tree_id": "ef1a54d075fd87ecfd00a5c3dae37a3775fad57d"
        },
        "date": 1646433724938,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 168.11580937722013,
            "unit": "iter/sec",
            "range": "stddev: 0.0005870700070649672",
            "extra": "mean: 5.948280555555538 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 217.79687799760265,
            "unit": "iter/sec",
            "range": "stddev: 0.00032819220048641663",
            "extra": "mean: 4.591434042553205 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 314.24719839002984,
            "unit": "iter/sec",
            "range": "stddev: 0.0004218546655906497",
            "extra": "mean: 3.18220816326529 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 714.7432440070338,
            "unit": "iter/sec",
            "range": "stddev: 0.00013165322046848876",
            "extra": "mean: 1.3991038157894906 msec\nrounds: 760"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 154.95407912386838,
            "unit": "iter/sec",
            "range": "stddev: 0.0005036547754705446",
            "extra": "mean: 6.45352484848503 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 206.40425805326012,
            "unit": "iter/sec",
            "range": "stddev: 0.00025955497272258797",
            "extra": "mean: 4.844861290322616 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 305.9810526830329,
            "unit": "iter/sec",
            "range": "stddev: 0.00021652598359881743",
            "extra": "mean: 3.268176219512207 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 653.5942809281269,
            "unit": "iter/sec",
            "range": "stddev: 0.0001542657240587584",
            "extra": "mean: 1.530001147776209 msec\nrounds: 697"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.334188372778527,
            "unit": "iter/sec",
            "range": "stddev: 0.0007269868251688662",
            "extra": "mean: 36.584221428570984 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.219260265954883,
            "unit": "iter/sec",
            "range": "stddev: 0.0010472700354433823",
            "extra": "mean: 35.43679000000045 msec\nrounds: 30"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 235.16470021071643,
            "unit": "iter/sec",
            "range": "stddev: 0.0003167046427709978",
            "extra": "mean: 4.252338888889201 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 418.39867263253245,
            "unit": "iter/sec",
            "range": "stddev: 0.00018302732130705488",
            "extra": "mean: 2.3900649438203914 msec\nrounds: 445"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1255.873247405188,
            "unit": "iter/sec",
            "range": "stddev: 0.000087996286212893",
            "extra": "mean: 796.2587005226376 usec\nrounds: 1339"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1090.972790632476,
            "unit": "iter/sec",
            "range": "stddev: 0.00010703322082511379",
            "extra": "mean: 916.6131443299003 usec\nrounds: 1164"
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
          "id": "04375005c5cbc7da9f0e0fd0c04bade462234f09",
          "message": "Merge pull request #458 from TeoZosa/dependabot/pip/dot-github/workflows/pip-22.0.4",
          "timestamp": "2022-03-07T14:14:16Z",
          "tree_id": "02279053bda48fbc360f379f6b5616c98b39b8e3"
        },
        "date": 1646664636707,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 178.79060757249647,
            "unit": "iter/sec",
            "range": "stddev: 0.000022637222116192853",
            "extra": "mean: 5.593134972677563 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 234.36294489447894,
            "unit": "iter/sec",
            "range": "stddev: 0.00003285355591177772",
            "extra": "mean: 4.266886134453748 msec\nrounds: 238"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 352.3054681942354,
            "unit": "iter/sec",
            "range": "stddev: 0.000013509286872415187",
            "extra": "mean: 2.8384458666666887 msec\nrounds: 375"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 725.0463448693789,
            "unit": "iter/sec",
            "range": "stddev: 0.000011899062340773501",
            "extra": "mean: 1.3792221794872375 msec\nrounds: 780"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 163.21493458197375,
            "unit": "iter/sec",
            "range": "stddev: 0.000024965894356368514",
            "extra": "mean: 6.126890303030178 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 212.1934236816732,
            "unit": "iter/sec",
            "range": "stddev: 0.00006725681168236701",
            "extra": "mean: 4.712681395348862 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 334.33517256555115,
            "unit": "iter/sec",
            "range": "stddev: 0.000022609365066413883",
            "extra": "mean: 2.9910104651162173 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 650.7103068834822,
            "unit": "iter/sec",
            "range": "stddev: 0.00001182022145831673",
            "extra": "mean: 1.5367821739130105 msec\nrounds: 690"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.406598261533503,
            "unit": "iter/sec",
            "range": "stddev: 0.00008419504002298162",
            "extra": "mean: 42.7229958333332 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.69300422497313,
            "unit": "iter/sec",
            "range": "stddev: 0.00005658009072643374",
            "extra": "mean: 40.497299999999825 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 256.69050019930233,
            "unit": "iter/sec",
            "range": "stddev: 0.00001269600427738565",
            "extra": "mean: 3.8957421455938945 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 425.58989242508864,
            "unit": "iter/sec",
            "range": "stddev: 0.00001976008062271522",
            "extra": "mean: 2.3496798627002584 msec\nrounds: 437"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1295.6220547681457,
            "unit": "iter/sec",
            "range": "stddev: 0.000007310085696061656",
            "extra": "mean: 771.8300227445203 usec\nrounds: 1319"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1051.3866834550736,
            "unit": "iter/sec",
            "range": "stddev: 0.000009002852086581609",
            "extra": "mean: 951.1248484846639 usec\nrounds: 1320"
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
          "id": "0a6c7a3d50ca6f621172de96b966f5f4d4d603d0",
          "message": "Merge pull request #459 from TeoZosa/dependabot/github_actions/release-drafter/release-drafter-5.19.0",
          "timestamp": "2022-03-08T14:22:12Z",
          "tree_id": "682ef3a619077c29a124e9a22c201ccd9862215e"
        },
        "date": 1646751910463,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 135.24029917303645,
            "unit": "iter/sec",
            "range": "stddev: 0.0005671893528308769",
            "extra": "mean: 7.3942456953642655 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 177.79162925634444,
            "unit": "iter/sec",
            "range": "stddev: 0.0004965131029368976",
            "extra": "mean: 5.62456176470589 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 256.2565930845018,
            "unit": "iter/sec",
            "range": "stddev: 0.0003850606514371837",
            "extra": "mean: 3.9023386206896356 msec\nrounds: 290"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 563.6485454934685,
            "unit": "iter/sec",
            "range": "stddev: 0.0003234373049151624",
            "extra": "mean: 1.7741552036198553 msec\nrounds: 663"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.01351265508796,
            "unit": "iter/sec",
            "range": "stddev: 0.0004409296536409759",
            "extra": "mean: 8.06363741007196 msec\nrounds: 139"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 168.72185081121506,
            "unit": "iter/sec",
            "range": "stddev: 0.0003888309098703535",
            "extra": "mean: 5.926914594594581 msec\nrounds: 185"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 246.540688123609,
            "unit": "iter/sec",
            "range": "stddev: 0.0004981052206672074",
            "extra": "mean: 4.056125614035061 msec\nrounds: 285"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 521.2788696819308,
            "unit": "iter/sec",
            "range": "stddev: 0.00028675401778145834",
            "extra": "mean: 1.918358978583135 msec\nrounds: 607"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.542111482012107,
            "unit": "iter/sec",
            "range": "stddev: 0.0012330282914576629",
            "extra": "mean: 44.36141666666712 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.36353615530559,
            "unit": "iter/sec",
            "range": "stddev: 0.001662970575254995",
            "extra": "mean: 42.80174000000045 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 184.168830295152,
            "unit": "iter/sec",
            "range": "stddev: 0.00041820199631361846",
            "extra": "mean: 5.42980046296316 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 336.37732041654704,
            "unit": "iter/sec",
            "range": "stddev: 0.00034497627968517084",
            "extra": "mean: 2.97285203045695 msec\nrounds: 394"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1013.8171865276367,
            "unit": "iter/sec",
            "range": "stddev: 0.00017862671048723085",
            "extra": "mean: 986.3711261643125 usec\nrounds: 1181"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 857.91510042002,
            "unit": "iter/sec",
            "range": "stddev: 0.00018498602306742863",
            "extra": "mean: 1.165616503906293 msec\nrounds: 1024"
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
          "id": "0974d8e55bedbdf93d4c510b09da6e8216af3609",
          "message": "Merge pull request #460 from TeoZosa/dependabot/pip/sentry-sdk-1.5.7",
          "timestamp": "2022-03-08T14:55:44Z",
          "tree_id": "0800f64ce0d632acbeee85eedd5c2a7b46ffa7d8"
        },
        "date": 1646752742910,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 206.097023740989,
            "unit": "iter/sec",
            "range": "stddev: 0.00001446999634817928",
            "extra": "mean: 4.852083653846177 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 270.149544100381,
            "unit": "iter/sec",
            "range": "stddev: 0.000009648788249558507",
            "extra": "mean: 3.701653479853456 msec\nrounds: 273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 402.50217287516904,
            "unit": "iter/sec",
            "range": "stddev: 0.00001201220079317348",
            "extra": "mean: 2.48445863746961 msec\nrounds: 411"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 827.9696112775111,
            "unit": "iter/sec",
            "range": "stddev: 0.00000954680147484138",
            "extra": "mean: 1.2077737955346641 msec\nrounds: 851"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 189.02839602379694,
            "unit": "iter/sec",
            "range": "stddev: 0.000016204963348991412",
            "extra": "mean: 5.290210471204068 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 244.81217822128443,
            "unit": "iter/sec",
            "range": "stddev: 0.000027418279800783916",
            "extra": "mean: 4.084764112903343 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 385.0166829103709,
            "unit": "iter/sec",
            "range": "stddev: 0.000012440825788056506",
            "extra": "mean: 2.5972900510204457 msec\nrounds: 392"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 751.2205861543298,
            "unit": "iter/sec",
            "range": "stddev: 0.000010167597728144944",
            "extra": "mean: 1.331166928104605 msec\nrounds: 765"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.86115201909799,
            "unit": "iter/sec",
            "range": "stddev: 0.00009148881690255111",
            "extra": "mean: 37.22848518518531 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.319773207443962,
            "unit": "iter/sec",
            "range": "stddev: 0.0000696881321575022",
            "extra": "mean: 35.31101724137911 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 296.45128118660364,
            "unit": "iter/sec",
            "range": "stddev: 0.000013278811396761895",
            "extra": "mean: 3.3732355481727265 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 488.217584264089,
            "unit": "iter/sec",
            "range": "stddev: 0.000011821204894005041",
            "extra": "mean: 2.048267068273139 msec\nrounds: 498"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1425.06037176243,
            "unit": "iter/sec",
            "range": "stddev: 0.000006838185930770927",
            "extra": "mean: 701.7246565935025 usec\nrounds: 1456"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1208.2592942171507,
            "unit": "iter/sec",
            "range": "stddev: 0.000006581853641101875",
            "extra": "mean: 827.6369193153321 usec\nrounds: 1227"
          }
        ]
      }
    ]
  }
}