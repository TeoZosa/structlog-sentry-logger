window.BENCHMARK_DATA = {
  "lastUpdate": 1648607858304,
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
        "date": 1642085095380,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.44347863726502,
            "unit": "iter/sec",
            "range": "stddev: 0.0012276073398246193",
            "extra": "mean: 8.814962411347551 msec\nrounds: 141"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.34514880323735,
            "unit": "iter/sec",
            "range": "stddev: 0.0010636380611233707",
            "extra": "mean: 6.607413636363676 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 244.18263320600053,
            "unit": "iter/sec",
            "range": "stddev: 0.0003440251775959222",
            "extra": "mean: 4.095295340501824 msec\nrounds: 279"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 510.79241454221676,
            "unit": "iter/sec",
            "range": "stddev: 0.00022134230669464594",
            "extra": "mean: 1.9577424635332956 msec\nrounds: 617"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.03995078657802,
            "unit": "iter/sec",
            "range": "stddev: 0.0004654059487466005",
            "extra": "mean: 8.768856818181787 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.4125100106363,
            "unit": "iter/sec",
            "range": "stddev: 0.0005100088933829869",
            "extra": "mean: 6.692880000000083 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 228.51905972136058,
            "unit": "iter/sec",
            "range": "stddev: 0.0005863086142553199",
            "extra": "mean: 4.376002602230758 msec\nrounds: 269"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 480.9303427454728,
            "unit": "iter/sec",
            "range": "stddev: 0.0002715274020995876",
            "extra": "mean: 2.0793031986531143 msec\nrounds: 594"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.637230507251086,
            "unit": "iter/sec",
            "range": "stddev: 0.00183268138728181",
            "extra": "mean: 48.45611428571486 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.263294196689206,
            "unit": "iter/sec",
            "range": "stddev: 0.002665693836961576",
            "extra": "mean: 49.35031739130495 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 185.2322051701751,
            "unit": "iter/sec",
            "range": "stddev: 0.0005629295911905292",
            "extra": "mean: 5.398629245283171 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 309.3953234053,
            "unit": "iter/sec",
            "range": "stddev: 0.0004624034952644682",
            "extra": "mean: 3.232110909090973 msec\nrounds: 385"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 941.7672581844196,
            "unit": "iter/sec",
            "range": "stddev: 0.00020239045189754073",
            "extra": "mean: 1.0618334745761326 msec\nrounds: 1180"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 863.3169762620114,
            "unit": "iter/sec",
            "range": "stddev: 0.0002154797683401071",
            "extra": "mean: 1.1583231043710023 msec\nrounds: 1121"
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
        "date": 1642431417341,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 208.12650761639017,
            "unit": "iter/sec",
            "range": "stddev: 0.0002076192357203205",
            "extra": "mean: 4.804769999999985 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 284.13669767024163,
            "unit": "iter/sec",
            "range": "stddev: 0.00033957063701814204",
            "extra": "mean: 3.5194327526131897 msec\nrounds: 287"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 407.6438203017383,
            "unit": "iter/sec",
            "range": "stddev: 0.00017843153054750437",
            "extra": "mean: 2.453121941747576 msec\nrounds: 515"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 863.9152320770646,
            "unit": "iter/sec",
            "range": "stddev: 0.00008959942947984688",
            "extra": "mean: 1.157520972972955 msec\nrounds: 925"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 173.68084903412284,
            "unit": "iter/sec",
            "range": "stddev: 0.00045255493385011364",
            "extra": "mean: 5.7576871921182935 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 251.1754775390796,
            "unit": "iter/sec",
            "range": "stddev: 0.0001794648285577809",
            "extra": "mean: 3.9812803773585466 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 398.5822420316433,
            "unit": "iter/sec",
            "range": "stddev: 0.00015915399956503178",
            "extra": "mean: 2.5088925058548153 msec\nrounds: 427"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 798.5015290174251,
            "unit": "iter/sec",
            "range": "stddev: 0.00008846469105815852",
            "extra": "mean: 1.252345754716993 msec\nrounds: 848"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.055597319949754,
            "unit": "iter/sec",
            "range": "stddev: 0.0005821267348693551",
            "extra": "mean: 36.96092857142868 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.770981179538573,
            "unit": "iter/sec",
            "range": "stddev: 0.001968590291732633",
            "extra": "mean: 37.35387931034495 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 298.95980329543727,
            "unit": "iter/sec",
            "range": "stddev: 0.00021635708575517388",
            "extra": "mean: 3.3449312883437465 msec\nrounds: 326"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 504.2241027262925,
            "unit": "iter/sec",
            "range": "stddev: 0.00014378605781541936",
            "extra": "mean: 1.9832451376145919 msec\nrounds: 545"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1542.1901318720918,
            "unit": "iter/sec",
            "range": "stddev: 0.00005582642485435379",
            "extra": "mean: 648.4284780023086 usec\nrounds: 1682"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1379.1778065422297,
            "unit": "iter/sec",
            "range": "stddev: 0.000056990451127951464",
            "extra": "mean: 725.0696721310535 usec\nrounds: 1464"
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
        "date": 1642432638606,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 202.5721925297504,
            "unit": "iter/sec",
            "range": "stddev: 0.000012503958569774992",
            "extra": "mean: 4.936511707317068 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 266.4426567363812,
            "unit": "iter/sec",
            "range": "stddev: 0.000022737377210676312",
            "extra": "mean: 3.7531527881040523 msec\nrounds: 269"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 411.0160603537589,
            "unit": "iter/sec",
            "range": "stddev: 0.00001061050166298904",
            "extra": "mean: 2.432994951923062 msec\nrounds: 416"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 852.4601844328361,
            "unit": "iter/sec",
            "range": "stddev: 0.000010069761225373886",
            "extra": "mean: 1.1730753157290577 msec\nrounds: 871"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 187.08484980947082,
            "unit": "iter/sec",
            "range": "stddev: 0.00001767383411613982",
            "extra": "mean: 5.345168253968242 msec\nrounds: 189"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 246.46535033713414,
            "unit": "iter/sec",
            "range": "stddev: 0.000016435705988397596",
            "extra": "mean: 4.05736546184737 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 395.768589047282,
            "unit": "iter/sec",
            "range": "stddev: 0.000009707423823025614",
            "extra": "mean: 2.5267290726817415 msec\nrounds: 399"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 796.021233669348,
            "unit": "iter/sec",
            "range": "stddev: 0.000010610989862104278",
            "extra": "mean: 1.2562478960396437 msec\nrounds: 808"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.0989594244498,
            "unit": "iter/sec",
            "range": "stddev: 0.00003634473255642396",
            "extra": "mean: 38.31570384615368 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.637119098808846,
            "unit": "iter/sec",
            "range": "stddev: 0.00003966737027508419",
            "extra": "mean: 36.18322142857139 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 302.65672467257787,
            "unit": "iter/sec",
            "range": "stddev: 0.000011395596124882144",
            "extra": "mean: 3.30407328990237 msec\nrounds: 307"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 502.3127646473677,
            "unit": "iter/sec",
            "range": "stddev: 0.000009440559773674256",
            "extra": "mean: 1.9907915354331427 msec\nrounds: 508"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1529.7226184803737,
            "unit": "iter/sec",
            "range": "stddev: 0.000005538415787617619",
            "extra": "mean: 653.7132862645385 usec\nrounds: 1558"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1355.268109486488,
            "unit": "iter/sec",
            "range": "stddev: 0.000005565345530255316",
            "extra": "mean: 737.8613818183184 usec\nrounds: 1375"
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
        "date": 1642433744214,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 132.736832637193,
            "unit": "iter/sec",
            "range": "stddev: 0.0009934769591332159",
            "extra": "mean: 7.533703947368402 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 185.1481323696443,
            "unit": "iter/sec",
            "range": "stddev: 0.0005565629823425459",
            "extra": "mean: 5.401080676328515 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 263.3573767417149,
            "unit": "iter/sec",
            "range": "stddev: 0.0004215998174889655",
            "extra": "mean: 3.7971216617210604 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 596.6629437631351,
            "unit": "iter/sec",
            "range": "stddev: 0.0004026676663057359",
            "extra": "mean: 1.6759881109643417 msec\nrounds: 757"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 123.59356503325832,
            "unit": "iter/sec",
            "range": "stddev: 0.000766747194650383",
            "extra": "mean: 8.09103612903233 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 164.52381123279488,
            "unit": "iter/sec",
            "range": "stddev: 0.0006653779500389018",
            "extra": "mean: 6.078147549019749 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 256.96248675195017,
            "unit": "iter/sec",
            "range": "stddev: 0.000577831720593618",
            "extra": "mean: 3.8916186274509217 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 567.2006854600785,
            "unit": "iter/sec",
            "range": "stddev: 0.00028690043528201663",
            "extra": "mean: 1.7630444137930847 msec\nrounds: 725"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 21.41225467872712,
            "unit": "iter/sec",
            "range": "stddev: 0.002879112413649467",
            "extra": "mean: 46.7022280000009 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.14119878352024,
            "unit": "iter/sec",
            "range": "stddev: 0.004138985270479793",
            "extra": "mean: 43.21297307692372 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 145.22271935936067,
            "unit": "iter/sec",
            "range": "stddev: 0.0013213622204650893",
            "extra": "mean: 6.885974897119586 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 362.7698562119879,
            "unit": "iter/sec",
            "range": "stddev: 0.0004428598620170368",
            "extra": "mean: 2.756568614718751 msec\nrounds: 462"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1050.497810529499,
            "unit": "iter/sec",
            "range": "stddev: 0.0002566159429978448",
            "extra": "mean: 951.929637526759 usec\nrounds: 1407"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1006.0934127391178,
            "unit": "iter/sec",
            "range": "stddev: 0.00018375180837847287",
            "extra": "mean: 993.9434920634972 usec\nrounds: 1260"
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
        "date": 1643746307473,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 205.06626612370812,
            "unit": "iter/sec",
            "range": "stddev: 0.00003259581790464232",
            "extra": "mean: 4.876472463768081 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 267.90886079176767,
            "unit": "iter/sec",
            "range": "stddev: 0.00000870299249999499",
            "extra": "mean: 3.732612639405199 msec\nrounds: 269"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 412.05134574783636,
            "unit": "iter/sec",
            "range": "stddev: 0.000010581460009507437",
            "extra": "mean: 2.4268820143884966 msec\nrounds: 417"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 852.8812207696986,
            "unit": "iter/sec",
            "range": "stddev: 0.000008236255530831025",
            "extra": "mean: 1.1724962112514699 msec\nrounds: 871"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 189.57660199920642,
            "unit": "iter/sec",
            "range": "stddev: 0.000018895353068853692",
            "extra": "mean: 5.274912565445108 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 247.46787688066,
            "unit": "iter/sec",
            "range": "stddev: 0.000008482754695220301",
            "extra": "mean: 4.0409285140561675 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 394.41989292631985,
            "unit": "iter/sec",
            "range": "stddev: 0.000035562446364052026",
            "extra": "mean: 2.5353690773066724 msec\nrounds: 401"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 785.5114855098866,
            "unit": "iter/sec",
            "range": "stddev: 0.000008512411255832155",
            "extra": "mean: 1.2730558603492421 msec\nrounds: 802"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.619359135971223,
            "unit": "iter/sec",
            "range": "stddev: 0.00008369169305930485",
            "extra": "mean: 37.56664444444427 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.071627564895593,
            "unit": "iter/sec",
            "range": "stddev: 0.00003692158285415633",
            "extra": "mean: 35.62315714285586 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 299.8620040995224,
            "unit": "iter/sec",
            "range": "stddev: 0.000010341664355194575",
            "extra": "mean: 3.334867326732419 msec\nrounds: 303"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 503.10410299153654,
            "unit": "iter/sec",
            "range": "stddev: 0.000010898027252562575",
            "extra": "mean: 1.9876601960783902 msec\nrounds: 510"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1545.9692784825074,
            "unit": "iter/sec",
            "range": "stddev: 0.000005749476006198411",
            "extra": "mean: 646.8433842240256 usec\nrounds: 1572"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1229.9206741359596,
            "unit": "iter/sec",
            "range": "stddev: 0.0002311230253363976",
            "extra": "mean: 813.0605664487405 usec\nrounds: 1377"
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
        "date": 1643755016676,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 233.80246378051524,
            "unit": "iter/sec",
            "range": "stddev: 0.000029729794393296688",
            "extra": "mean: 4.277114893617038 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 303.23474923082756,
            "unit": "iter/sec",
            "range": "stddev: 0.000009315502540144408",
            "extra": "mean: 3.297775081967214 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 466.12092582104447,
            "unit": "iter/sec",
            "range": "stddev: 0.00001287198479260513",
            "extra": "mean: 2.145366029724066 msec\nrounds: 471"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 960.9359258612868,
            "unit": "iter/sec",
            "range": "stddev: 0.000007346573868139551",
            "extra": "mean: 1.0406521112255223 msec\nrounds: 971"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 215.9347013463139,
            "unit": "iter/sec",
            "range": "stddev: 0.000013034289370563861",
            "extra": "mean: 4.631029629629608 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 280.3434097802311,
            "unit": "iter/sec",
            "range": "stddev: 0.00000865227875625527",
            "extra": "mean: 3.567053710247469 msec\nrounds: 283"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 445.8411933484426,
            "unit": "iter/sec",
            "range": "stddev: 0.000009351150667474196",
            "extra": "mean: 2.2429511111111267 msec\nrounds: 450"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 885.0258380026658,
            "unit": "iter/sec",
            "range": "stddev: 0.00000685556975678389",
            "extra": "mean: 1.1299105145413708 msec\nrounds: 894"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 30.0415986015838,
            "unit": "iter/sec",
            "range": "stddev: 0.00003089733481794462",
            "extra": "mean: 33.28717666666646 msec\nrounds: 30"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 31.698013029864526,
            "unit": "iter/sec",
            "range": "stddev: 0.0000277054139053466",
            "extra": "mean: 31.54771874999995 msec\nrounds: 32"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 339.3557336315283,
            "unit": "iter/sec",
            "range": "stddev: 0.00015748554608817505",
            "extra": "mean: 2.9467602898550043 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 563.3814490032747,
            "unit": "iter/sec",
            "range": "stddev: 0.000009885081997612142",
            "extra": "mean: 1.774996322241678 msec\nrounds: 571"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1699.279215037138,
            "unit": "iter/sec",
            "range": "stddev: 0.000005252601359943557",
            "extra": "mean: 588.4848064702214 usec\nrounds: 1731"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1504.7762529466672,
            "unit": "iter/sec",
            "range": "stddev: 0.0000050004068942163824",
            "extra": "mean: 664.550625411446 usec\nrounds: 1519"
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
        "date": 1643755237313,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 206.1179779667804,
            "unit": "iter/sec",
            "range": "stddev: 0.000013570079471252504",
            "extra": "mean: 4.851590384615397 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 269.23205219459527,
            "unit": "iter/sec",
            "range": "stddev: 0.000009874539874924934",
            "extra": "mean: 3.714268014705845 msec\nrounds: 272"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 409.216865414582,
            "unit": "iter/sec",
            "range": "stddev: 0.00001135481167661007",
            "extra": "mean: 2.443692048192807 msec\nrounds: 415"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 838.3297722314913,
            "unit": "iter/sec",
            "range": "stddev: 0.000008555274496259422",
            "extra": "mean: 1.1928480093676859 msec\nrounds: 854"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 190.88710877044434,
            "unit": "iter/sec",
            "range": "stddev: 0.000012735716986299686",
            "extra": "mean: 5.238698445595784 msec\nrounds: 193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 248.29323232102706,
            "unit": "iter/sec",
            "range": "stddev: 0.000007423022906825399",
            "extra": "mean: 4.027495999999971 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 395.51644932096735,
            "unit": "iter/sec",
            "range": "stddev: 0.000011054280917917954",
            "extra": "mean: 2.5283398496240177 msec\nrounds: 399"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 786.3633349856364,
            "unit": "iter/sec",
            "range": "stddev: 0.000007944906128277326",
            "extra": "mean: 1.271676787954853 msec\nrounds: 797"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.704398333091483,
            "unit": "iter/sec",
            "range": "stddev: 0.00034326362565130286",
            "extra": "mean: 37.447014814815084 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.283080476091794,
            "unit": "iter/sec",
            "range": "stddev: 0.00010589410781056119",
            "extra": "mean: 35.35682758620718 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 301.6232373706714,
            "unit": "iter/sec",
            "range": "stddev: 0.000010255358118960736",
            "extra": "mean: 3.315394426229429 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 500.5740835848028,
            "unit": "iter/sec",
            "range": "stddev: 0.00001601967354559825",
            "extra": "mean: 1.99770629921273 msec\nrounds: 508"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1510.6403827694205,
            "unit": "iter/sec",
            "range": "stddev: 0.000005856532922243479",
            "extra": "mean: 661.9709173712967 usec\nrounds: 1537"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1343.4367426782803,
            "unit": "iter/sec",
            "range": "stddev: 0.0000062743944298849635",
            "extra": "mean: 744.3595729013608 usec\nrounds: 1358"
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
        "date": 1643757218909,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 130.53669203661843,
            "unit": "iter/sec",
            "range": "stddev: 0.000353309024267809",
            "extra": "mean: 7.6606813333332955 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 171.53904206377356,
            "unit": "iter/sec",
            "range": "stddev: 0.0004082886256035899",
            "extra": "mean: 5.829576683937801 msec\nrounds: 193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 247.13137348334618,
            "unit": "iter/sec",
            "range": "stddev: 0.000829390113603744",
            "extra": "mean: 4.046430794701946 msec\nrounds: 302"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 535.0024123306945,
            "unit": "iter/sec",
            "range": "stddev: 0.0003426350581961687",
            "extra": "mean: 1.8691504504504595 msec\nrounds: 666"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 123.72487693981228,
            "unit": "iter/sec",
            "range": "stddev: 0.00041939530987515785",
            "extra": "mean: 8.082448936170406 msec\nrounds: 141"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 159.2232332476255,
            "unit": "iter/sec",
            "range": "stddev: 0.0004541936185156521",
            "extra": "mean: 6.280490476190685 msec\nrounds: 189"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 246.3038599406788,
            "unit": "iter/sec",
            "range": "stddev: 0.0003025170243134968",
            "extra": "mean: 4.0600256944444375 msec\nrounds: 288"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 529.0019178768678,
            "unit": "iter/sec",
            "range": "stddev: 0.0002630168675914987",
            "extra": "mean: 1.8903523148147894 msec\nrounds: 648"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.68266132076266,
            "unit": "iter/sec",
            "range": "stddev: 0.0020844124230729112",
            "extra": "mean: 48.34967727272757 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.264046362650024,
            "unit": "iter/sec",
            "range": "stddev: 0.0014997848462690066",
            "extra": "mean: 44.91546521739154 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.28793396601907,
            "unit": "iter/sec",
            "range": "stddev: 0.00032907223251964056",
            "extra": "mean: 5.255193953488277 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 331.42363421918975,
            "unit": "iter/sec",
            "range": "stddev: 0.00023305078038341736",
            "extra": "mean: 3.017286327077814 msec\nrounds: 373"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1018.5073615856767,
            "unit": "iter/sec",
            "range": "stddev: 0.00014928013111583792",
            "extra": "mean: 981.8289368504287 usec\nrounds: 1251"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 938.7667392009627,
            "unit": "iter/sec",
            "range": "stddev: 0.0002529588058423592",
            "extra": "mean: 1.0652273437501167 msec\nrounds: 1152"
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
        "date": 1643757652182,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 203.52310347835757,
            "unit": "iter/sec",
            "range": "stddev: 0.00009177348873926723",
            "extra": "mean: 4.9134470873786515 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 268.5381230493184,
            "unit": "iter/sec",
            "range": "stddev: 0.000008719672877632494",
            "extra": "mean: 3.723866051660549 msec\nrounds: 271"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 409.1979414681322,
            "unit": "iter/sec",
            "range": "stddev: 0.000010635870327241681",
            "extra": "mean: 2.4438050602409462 msec\nrounds: 415"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 832.0676931119183,
            "unit": "iter/sec",
            "range": "stddev: 0.000008082816785074685",
            "extra": "mean: 1.201825294117619 msec\nrounds: 850"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 188.63155353174668,
            "unit": "iter/sec",
            "range": "stddev: 0.000014967339398744729",
            "extra": "mean: 5.301340000000054 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 247.40416888941414,
            "unit": "iter/sec",
            "range": "stddev: 0.000024643682685720063",
            "extra": "mean: 4.041969076305196 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 394.5044638328526,
            "unit": "iter/sec",
            "range": "stddev: 0.000009656507588865513",
            "extra": "mean: 2.534825563909689 msec\nrounds: 399"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 771.2433384592049,
            "unit": "iter/sec",
            "range": "stddev: 0.000008500981899010868",
            "extra": "mean: 1.296607633587872 msec\nrounds: 786"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.44767469595199,
            "unit": "iter/sec",
            "range": "stddev: 0.00061061139154274",
            "extra": "mean: 37.81050740740763 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.033182878573527,
            "unit": "iter/sec",
            "range": "stddev: 0.000034017047351890505",
            "extra": "mean: 35.67201071428551 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 301.33790075965373,
            "unit": "iter/sec",
            "range": "stddev: 0.00002093355891136434",
            "extra": "mean: 3.318533770491742 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 497.0196571274936,
            "unit": "iter/sec",
            "range": "stddev: 0.000009795571917710629",
            "extra": "mean: 2.0119928571426375 msec\nrounds: 504"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1529.123732089121,
            "unit": "iter/sec",
            "range": "stddev: 0.0000057862123794257085",
            "extra": "mean: 653.9693152455224 usec\nrounds: 1548"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1336.1594594884127,
            "unit": "iter/sec",
            "range": "stddev: 0.0000057592895423653825",
            "extra": "mean: 748.4136664218797 usec\nrounds: 1361"
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
        "date": 1643758457876,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 129.39399005777403,
            "unit": "iter/sec",
            "range": "stddev: 0.0006872529891820875",
            "extra": "mean: 7.72833421052634 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 174.96180977147642,
            "unit": "iter/sec",
            "range": "stddev: 0.000529076497950605",
            "extra": "mean: 5.715533014354012 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 254.59376077881817,
            "unit": "iter/sec",
            "range": "stddev: 0.00032054971491585655",
            "extra": "mean: 3.9278260273972845 msec\nrounds: 292"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 523.9439363402822,
            "unit": "iter/sec",
            "range": "stddev: 0.0002809114654826426",
            "extra": "mean: 1.9086011510791434 msec\nrounds: 695"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 128.1790939371038,
            "unit": "iter/sec",
            "range": "stddev: 0.0005130667918725799",
            "extra": "mean: 7.801584246575264 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 164.9578494032772,
            "unit": "iter/sec",
            "range": "stddev: 0.000501817524123203",
            "extra": "mean: 6.0621546875000245 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 247.71342130572782,
            "unit": "iter/sec",
            "range": "stddev: 0.00035619744017269527",
            "extra": "mean: 4.036922968197999 msec\nrounds: 283"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 502.0894944059015,
            "unit": "iter/sec",
            "range": "stddev: 0.00019908505773910538",
            "extra": "mean: 1.9916768049155305 msec\nrounds: 651"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.472339772988867,
            "unit": "iter/sec",
            "range": "stddev: 0.0014533565527684842",
            "extra": "mean: 48.84639523809567 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.38545560751989,
            "unit": "iter/sec",
            "range": "stddev: 0.003376771875853119",
            "extra": "mean: 49.05458181818192 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 177.54864678340041,
            "unit": "iter/sec",
            "range": "stddev: 0.0003653992675516637",
            "extra": "mean: 5.632259203979994 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 328.50950813914744,
            "unit": "iter/sec",
            "range": "stddev: 0.00024917007815447215",
            "extra": "mean: 3.0440519230768444 msec\nrounds: 364"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 995.1969877925965,
            "unit": "iter/sec",
            "range": "stddev: 0.00011816418244051411",
            "extra": "mean: 1.004826192468746 msec\nrounds: 1195"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 880.1907784171236,
            "unit": "iter/sec",
            "range": "stddev: 0.00015471616144747467",
            "extra": "mean: 1.1361173333335 msec\nrounds: 975"
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
        "date": 1643759036967,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 206.77268008011612,
            "unit": "iter/sec",
            "range": "stddev: 0.000016660489713810017",
            "extra": "mean: 4.836228846153854 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 268.19162528266037,
            "unit": "iter/sec",
            "range": "stddev: 0.000010770425318271647",
            "extra": "mean: 3.728677205882364 msec\nrounds: 272"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 410.6907136610224,
            "unit": "iter/sec",
            "range": "stddev: 0.000011844913716187709",
            "extra": "mean: 2.4349223557691255 msec\nrounds: 416"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 840.4258637027316,
            "unit": "iter/sec",
            "range": "stddev: 0.000010213093390363138",
            "extra": "mean: 1.1898729479768981 msec\nrounds: 865"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 189.7298257163501,
            "unit": "iter/sec",
            "range": "stddev: 0.000017642633201399074",
            "extra": "mean: 5.270652604166833 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 246.89357806005913,
            "unit": "iter/sec",
            "range": "stddev: 0.000024417412085387894",
            "extra": "mean: 4.050328112449894 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 395.9908696385364,
            "unit": "iter/sec",
            "range": "stddev: 0.000010789989300751033",
            "extra": "mean: 2.5253107499998872 msec\nrounds: 400"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 778.4852908875607,
            "unit": "iter/sec",
            "range": "stddev: 0.000011866688839281481",
            "extra": "mean: 1.2845457861636507 msec\nrounds: 795"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.050172632490664,
            "unit": "iter/sec",
            "range": "stddev: 0.00005544388930791679",
            "extra": "mean: 38.38746153846081 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.427645381703744,
            "unit": "iter/sec",
            "range": "stddev: 0.0000854919282053439",
            "extra": "mean: 36.45956428571421 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 302.8946098563432,
            "unit": "iter/sec",
            "range": "stddev: 0.000012372419611726743",
            "extra": "mean: 3.3014783606558065 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 496.1858921896238,
            "unit": "iter/sec",
            "range": "stddev: 0.000010092829899710128",
            "extra": "mean: 2.0153737051795035 msec\nrounds: 502"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1545.0396791598814,
            "unit": "iter/sec",
            "range": "stddev: 0.000005839856118341062",
            "extra": "mean: 647.2325685148437 usec\nrounds: 1569"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1352.2068690738402,
            "unit": "iter/sec",
            "range": "stddev: 0.000006057544849055345",
            "extra": "mean: 739.5318148952495 usec\nrounds: 1383"
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
        "date": 1643759958073,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 204.70599201268914,
            "unit": "iter/sec",
            "range": "stddev: 0.00001868318536396017",
            "extra": "mean: 4.885054854368956 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 267.22550447721727,
            "unit": "iter/sec",
            "range": "stddev: 0.000011005196249302342",
            "extra": "mean: 3.742157777777744 msec\nrounds: 270"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 410.878647730372,
            "unit": "iter/sec",
            "range": "stddev: 0.00004551466291948533",
            "extra": "mean: 2.4338086330935917 msec\nrounds: 417"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 848.7907616361503,
            "unit": "iter/sec",
            "range": "stddev: 0.000009256572234865559",
            "extra": "mean: 1.1781466589862208 msec\nrounds: 868"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 189.0792572729178,
            "unit": "iter/sec",
            "range": "stddev: 0.000015288642128186357",
            "extra": "mean: 5.288787434555001 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 246.61015035494003,
            "unit": "iter/sec",
            "range": "stddev: 0.000011381710915846006",
            "extra": "mean: 4.0549831325301255 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 394.6642188912707,
            "unit": "iter/sec",
            "range": "stddev: 0.000019828016819707733",
            "extra": "mean: 2.533799498746802 msec\nrounds: 399"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 789.665270541063,
            "unit": "iter/sec",
            "range": "stddev: 0.000008128927927040462",
            "extra": "mean: 1.2663593516209974 msec\nrounds: 802"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.618078486263286,
            "unit": "iter/sec",
            "range": "stddev: 0.00009626633076398238",
            "extra": "mean: 37.56845185185201 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.990729470398666,
            "unit": "iter/sec",
            "range": "stddev: 0.00020030300142773297",
            "extra": "mean: 35.72611428571523 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 302.9824227757799,
            "unit": "iter/sec",
            "range": "stddev: 0.00002201095227310011",
            "extra": "mean: 3.3005214983710234 msec\nrounds: 307"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 505.0932202212772,
            "unit": "iter/sec",
            "range": "stddev: 0.000010319545543479734",
            "extra": "mean: 1.9798325536064576 msec\nrounds: 513"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1534.3898441279523,
            "unit": "iter/sec",
            "range": "stddev: 0.000006593840151358098",
            "extra": "mean: 651.7248558617351 usec\nrounds: 1561"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1362.5761614622047,
            "unit": "iter/sec",
            "range": "stddev: 0.000005421697042289111",
            "extra": "mean: 733.9039301310556 usec\nrounds: 1374"
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
        "date": 1643761415765,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 204.50935178576802,
            "unit": "iter/sec",
            "range": "stddev: 0.000022512424127905262",
            "extra": "mean: 4.889751941747589 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 266.02028023901477,
            "unit": "iter/sec",
            "range": "stddev: 0.000010412514344493813",
            "extra": "mean: 3.759111895910781 msec\nrounds: 269"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 408.84531910131454,
            "unit": "iter/sec",
            "range": "stddev: 0.000011841632772025714",
            "extra": "mean: 2.445912801932296 msec\nrounds: 414"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 835.8790021773269,
            "unit": "iter/sec",
            "range": "stddev: 0.000009399346988289948",
            "extra": "mean: 1.196345400943396 msec\nrounds: 848"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 189.22376626601846,
            "unit": "iter/sec",
            "range": "stddev: 0.000017124627911149647",
            "extra": "mean: 5.284748421052773 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 246.87220843549113,
            "unit": "iter/sec",
            "range": "stddev: 0.000011920255394389943",
            "extra": "mean: 4.050678714859493 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 389.0562113706121,
            "unit": "iter/sec",
            "range": "stddev: 0.000015926944640552646",
            "extra": "mean: 2.5703226700251993 msec\nrounds: 397"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 772.299460880135,
            "unit": "iter/sec",
            "range": "stddev: 0.000009367611692087143",
            "extra": "mean: 1.2948345177664256 msec\nrounds: 788"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.44949605873135,
            "unit": "iter/sec",
            "range": "stddev: 0.00008192957332793395",
            "extra": "mean: 37.807903703703495 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.937074533321255,
            "unit": "iter/sec",
            "range": "stddev: 0.000032036308765785166",
            "extra": "mean: 35.794728571428436 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 301.09370065579236,
            "unit": "iter/sec",
            "range": "stddev: 0.000050990294987259925",
            "extra": "mean: 3.3212252459017435 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 495.9909379188088,
            "unit": "iter/sec",
            "range": "stddev: 0.000011340982880350632",
            "extra": "mean: 2.0161658682636956 msec\nrounds: 501"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1489.3214384113585,
            "unit": "iter/sec",
            "range": "stddev: 0.0000062608195461583",
            "extra": "mean: 671.4467234599726 usec\nrounds: 1526"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1318.790398381692,
            "unit": "iter/sec",
            "range": "stddev: 0.000006555266456736596",
            "extra": "mean: 758.2706101190269 usec\nrounds: 1344"
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
        "date": 1643775004359,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 133.62173960698235,
            "unit": "iter/sec",
            "range": "stddev: 0.0008804906709442332",
            "extra": "mean: 7.483812162162161 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 181.45566054955714,
            "unit": "iter/sec",
            "range": "stddev: 0.00032720119534587907",
            "extra": "mean: 5.510988177339837 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 250.83309976462584,
            "unit": "iter/sec",
            "range": "stddev: 0.0004066550798849277",
            "extra": "mean: 3.9867146757679492 msec\nrounds: 293"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 545.213993520093,
            "unit": "iter/sec",
            "range": "stddev: 0.0003232818939291239",
            "extra": "mean: 1.8341422118380508 msec\nrounds: 642"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.07424434449294,
            "unit": "iter/sec",
            "range": "stddev: 0.0009417289080793249",
            "extra": "mean: 8.398121739130305 msec\nrounds: 138"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 163.3619350622951,
            "unit": "iter/sec",
            "range": "stddev: 0.0005830780314752611",
            "extra": "mean: 6.121377049180204 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 249.17703543619814,
            "unit": "iter/sec",
            "range": "stddev: 0.0005879703427227142",
            "extra": "mean: 4.013210921501835 msec\nrounds: 293"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 515.632415963305,
            "unit": "iter/sec",
            "range": "stddev: 0.00021662378092762429",
            "extra": "mean: 1.9393660465116396 msec\nrounds: 645"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.23002829537307,
            "unit": "iter/sec",
            "range": "stddev: 0.001972262301782607",
            "extra": "mean: 49.43146818181742 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.157229822205636,
            "unit": "iter/sec",
            "range": "stddev: 0.0012913073211704609",
            "extra": "mean: 45.13199565217378 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 189.10396936236046,
            "unit": "iter/sec",
            "range": "stddev: 0.0003560066693722603",
            "extra": "mean: 5.288096296296156 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 338.21303048240816,
            "unit": "iter/sec",
            "range": "stddev: 0.0002441865256485416",
            "extra": "mean: 2.9567163588394445 msec\nrounds: 379"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 992.663184369791,
            "unit": "iter/sec",
            "range": "stddev: 0.00015055551489598826",
            "extra": "mean: 1.007391042345211 msec\nrounds: 1228"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 903.5251310421871,
            "unit": "iter/sec",
            "range": "stddev: 0.0001967799822594627",
            "extra": "mean: 1.1067760769935997 msec\nrounds: 1091"
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
        "date": 1643775407753,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 203.74227077486094,
            "unit": "iter/sec",
            "range": "stddev: 0.000035729508678853884",
            "extra": "mean: 4.908161650485475 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 268.28553313661865,
            "unit": "iter/sec",
            "range": "stddev: 0.000012545796203822855",
            "extra": "mean: 3.7273720588235046 msec\nrounds: 272"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 406.20716091955455,
            "unit": "iter/sec",
            "range": "stddev: 0.00003434174814010661",
            "extra": "mean: 2.4617980582524503 msec\nrounds: 412"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 823.4533263406769,
            "unit": "iter/sec",
            "range": "stddev: 0.000009370318884969705",
            "extra": "mean: 1.2143979118329322 msec\nrounds: 862"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 189.88750606820074,
            "unit": "iter/sec",
            "range": "stddev: 0.00001556581768094533",
            "extra": "mean: 5.266275916230297 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 247.62365483401416,
            "unit": "iter/sec",
            "range": "stddev: 0.000011814638282746148",
            "extra": "mean: 4.038386400000093 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 391.86892603163125,
            "unit": "iter/sec",
            "range": "stddev: 0.000011535770638718486",
            "extra": "mean: 2.5518736842106255 msec\nrounds: 399"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 781.4159099417518,
            "unit": "iter/sec",
            "range": "stddev: 0.000008975166380871225",
            "extra": "mean: 1.2797282308656115 msec\nrounds: 797"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.340432925502178,
            "unit": "iter/sec",
            "range": "stddev: 0.00005766072100159291",
            "extra": "mean: 37.96444814814808 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.803120542812188,
            "unit": "iter/sec",
            "range": "stddev: 0.00003544447628961866",
            "extra": "mean: 35.967185714285776 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 302.02701582306423,
            "unit": "iter/sec",
            "range": "stddev: 0.000011809943055046912",
            "extra": "mean: 3.3109620915031908 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 499.88905021573305,
            "unit": "iter/sec",
            "range": "stddev: 0.000010520744144845098",
            "extra": "mean: 2.000443897637762 msec\nrounds: 508"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1492.2300261271234,
            "unit": "iter/sec",
            "range": "stddev: 0.000005453025167116111",
            "extra": "mean: 670.1379696770756 usec\nrounds: 1517"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1341.5742821789033,
            "unit": "iter/sec",
            "range": "stddev: 0.000005620796834515416",
            "extra": "mean: 745.392941176437 usec\nrounds: 1360"
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
        "date": 1643781788394,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 204.0950785840363,
            "unit": "iter/sec",
            "range": "stddev: 0.000013249081471561253",
            "extra": "mean: 4.89967718446601 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 266.4681264497253,
            "unit": "iter/sec",
            "range": "stddev: 0.00000924658680134752",
            "extra": "mean: 3.75279405204461 msec\nrounds: 269"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 407.29871386533785,
            "unit": "iter/sec",
            "range": "stddev: 0.000010832942898039405",
            "extra": "mean: 2.4552004854368943 msec\nrounds: 412"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 835.3456382128678,
            "unit": "iter/sec",
            "range": "stddev: 0.00000795588311231489",
            "extra": "mean: 1.1971092614302654 msec\nrounds: 853"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 187.97252830965283,
            "unit": "iter/sec",
            "range": "stddev: 0.000021721436078020002",
            "extra": "mean: 5.319926315789453 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 245.43619284897997,
            "unit": "iter/sec",
            "range": "stddev: 0.000023455867722230154",
            "extra": "mean: 4.074378714859356 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 390.57865260400445,
            "unit": "iter/sec",
            "range": "stddev: 0.000040962036634997524",
            "extra": "mean: 2.560303778337494 msec\nrounds: 397"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 774.1960077619748,
            "unit": "iter/sec",
            "range": "stddev: 0.000009322129102695004",
            "extra": "mean: 1.2916625634518233 msec\nrounds: 788"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.67038076413576,
            "unit": "iter/sec",
            "range": "stddev: 0.00005549690451103971",
            "extra": "mean: 37.494777777778175 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.091268531458518,
            "unit": "iter/sec",
            "range": "stddev: 0.00027471508810035446",
            "extra": "mean: 35.59825000000024 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 301.00102083757855,
            "unit": "iter/sec",
            "range": "stddev: 0.000022765158419722053",
            "extra": "mean: 3.32224786885226 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 501.65650746142865,
            "unit": "iter/sec",
            "range": "stddev: 0.000009550536896742209",
            "extra": "mean: 1.9933958498024427 msec\nrounds: 506"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1518.2526023461742,
            "unit": "iter/sec",
            "range": "stddev: 0.000007148380992720956",
            "extra": "mean: 658.651925545649 usec\nrounds: 1558"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1333.038966084397,
            "unit": "iter/sec",
            "range": "stddev: 0.000008551132229819879",
            "extra": "mean: 750.1656181419443 usec\nrounds: 1367"
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
        "date": 1643823761785,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 192.84831407051217,
            "unit": "iter/sec",
            "range": "stddev: 0.00035990054078080086",
            "extra": "mean: 5.185422568093411 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 250.52204039335768,
            "unit": "iter/sec",
            "range": "stddev: 0.00026743741260461045",
            "extra": "mean: 3.991664759036163 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 389.59598895944845,
            "unit": "iter/sec",
            "range": "stddev: 0.00019947251881541036",
            "extra": "mean: 2.566761538461542 msec\nrounds: 520"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 792.1166819557485,
            "unit": "iter/sec",
            "range": "stddev: 0.00009450934635107227",
            "extra": "mean: 1.2624402727272255 msec\nrounds: 1100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 174.73778985205442,
            "unit": "iter/sec",
            "range": "stddev: 0.0003324686975079258",
            "extra": "mean: 5.72286052631587 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 199.78641603665633,
            "unit": "iter/sec",
            "range": "stddev: 0.0010179337371043894",
            "extra": "mean: 5.005345307443337 msec\nrounds: 309"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 372.678588440191,
            "unit": "iter/sec",
            "range": "stddev: 0.00020262594391165975",
            "extra": "mean: 2.683277309236895 msec\nrounds: 498"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 722.1607919224169,
            "unit": "iter/sec",
            "range": "stddev: 0.00010612104787748534",
            "extra": "mean: 1.384733166332619 msec\nrounds: 998"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.30422983559501,
            "unit": "iter/sec",
            "range": "stddev: 0.0012145220942220386",
            "extra": "mean: 39.51908461538386 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.21471059275858,
            "unit": "iter/sec",
            "range": "stddev: 0.0013746878205040225",
            "extra": "mean: 38.14652068965564 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 283.9013835845502,
            "unit": "iter/sec",
            "range": "stddev: 0.00026648344349865504",
            "extra": "mean: 3.522349864498581 msec\nrounds: 369"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 462.288674384701,
            "unit": "iter/sec",
            "range": "stddev: 0.00012800125559702224",
            "extra": "mean: 2.16315054945048 msec\nrounds: 637"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1446.4765644470583,
            "unit": "iter/sec",
            "range": "stddev: 0.00006308086261014283",
            "extra": "mean: 691.3350859453905 usec\nrounds: 1978"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1271.0464723979103,
            "unit": "iter/sec",
            "range": "stddev: 0.00006866437500312379",
            "extra": "mean: 786.7532947976608 usec\nrounds: 1730"
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
        "date": 1643830180138,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 176.65386223896726,
            "unit": "iter/sec",
            "range": "stddev: 0.00001650524874726793",
            "extra": "mean: 5.660787640449417 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 230.88421748504004,
            "unit": "iter/sec",
            "range": "stddev: 0.000021978340512176678",
            "extra": "mean: 4.331175213675201 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 353.5529054888924,
            "unit": "iter/sec",
            "range": "stddev: 0.00001242667973726357",
            "extra": "mean: 2.828431005586566 msec\nrounds: 358"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 738.5290919974831,
            "unit": "iter/sec",
            "range": "stddev: 0.000010161097437887424",
            "extra": "mean: 1.354042800528443 msec\nrounds: 757"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 163.57096228797093,
            "unit": "iter/sec",
            "range": "stddev: 0.000020603925906263664",
            "extra": "mean: 6.113554545454553 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 214.38154794197405,
            "unit": "iter/sec",
            "range": "stddev: 0.000012578623123549821",
            "extra": "mean: 4.664580555555401 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 340.7835823150434,
            "unit": "iter/sec",
            "range": "stddev: 0.000012637099551849816",
            "extra": "mean: 2.934413662790634 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 684.8733935161201,
            "unit": "iter/sec",
            "range": "stddev: 0.000009683104474600046",
            "extra": "mean: 1.4601238848921096 msec\nrounds: 695"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.204456789215353,
            "unit": "iter/sec",
            "range": "stddev: 0.0000627633972278065",
            "extra": "mean: 43.09516956521758 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.54771329213477,
            "unit": "iter/sec",
            "range": "stddev: 0.00006326271229300716",
            "extra": "mean: 40.7369920000005 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 260.7047699196445,
            "unit": "iter/sec",
            "range": "stddev: 0.000012803565486880786",
            "extra": "mean: 3.8357564393939705 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 438.3388104294534,
            "unit": "iter/sec",
            "range": "stddev: 0.000010911657191184887",
            "extra": "mean: 2.281340315315157 msec\nrounds: 444"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1351.665543562611,
            "unit": "iter/sec",
            "range": "stddev: 0.000006481689704070034",
            "extra": "mean: 739.8279883382103 usec\nrounds: 1372"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1186.0693100618169,
            "unit": "iter/sec",
            "range": "stddev: 0.0000063363848595397805",
            "extra": "mean: 843.1210482529734 usec\nrounds: 1202"
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
        "date": 1643842664639,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 203.99708911080407,
            "unit": "iter/sec",
            "range": "stddev: 0.000013632008251577043",
            "extra": "mean: 4.902030731707328 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 266.43138827194815,
            "unit": "iter/sec",
            "range": "stddev: 0.000012551686316398277",
            "extra": "mean: 3.753311524163564 msec\nrounds: 269"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 406.4991317987655,
            "unit": "iter/sec",
            "range": "stddev: 0.000026782315350828677",
            "extra": "mean: 2.4600298543688965 msec\nrounds: 412"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 829.6518352311381,
            "unit": "iter/sec",
            "range": "stddev: 0.000009092299708232958",
            "extra": "mean: 1.2053248815165984 msec\nrounds: 844"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 189.45218007609702,
            "unit": "iter/sec",
            "range": "stddev: 0.000016108155958615385",
            "extra": "mean: 5.278376842105122 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 246.86904353773429,
            "unit": "iter/sec",
            "range": "stddev: 0.000015133734082221634",
            "extra": "mean: 4.0507306451614635 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 389.33337233255753,
            "unit": "iter/sec",
            "range": "stddev: 0.000011765481934263948",
            "extra": "mean: 2.56849289340095 msec\nrounds: 394"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 782.0639582725794,
            "unit": "iter/sec",
            "range": "stddev: 0.000010861947747826655",
            "extra": "mean: 1.2786677987421862 msec\nrounds: 795"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.590260046834143,
            "unit": "iter/sec",
            "range": "stddev: 0.00004721957167034715",
            "extra": "mean: 37.6077555555558 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.061912998649348,
            "unit": "iter/sec",
            "range": "stddev: 0.00015882613214220358",
            "extra": "mean: 35.635489285713746 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 302.3508622154316,
            "unit": "iter/sec",
            "range": "stddev: 0.000011972686082769012",
            "extra": "mean: 3.3074157377050177 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 503.680124011925,
            "unit": "iter/sec",
            "range": "stddev: 0.00001045603336702457",
            "extra": "mean: 1.9853870588237152 msec\nrounds: 510"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1522.3325293536511,
            "unit": "iter/sec",
            "range": "stddev: 0.000005873924023171133",
            "extra": "mean: 656.8867055771173 usec\nrounds: 1542"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1350.9364930575243,
            "unit": "iter/sec",
            "range": "stddev: 0.000006097445402766827",
            "extra": "mean: 740.2272461651675 usec\nrounds: 1369"
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
        "date": 1643898495823,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 128.0359495681028,
            "unit": "iter/sec",
            "range": "stddev: 0.0005243592130847385",
            "extra": "mean: 7.810306428571424 msec\nrounds: 140"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 168.24057533935093,
            "unit": "iter/sec",
            "range": "stddev: 0.000492463685451266",
            "extra": "mean: 5.943869354838704 msec\nrounds: 186"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 245.7777697809809,
            "unit": "iter/sec",
            "range": "stddev: 0.000273993146758433",
            "extra": "mean: 4.068716226415134 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 515.5163549281997,
            "unit": "iter/sec",
            "range": "stddev: 0.0005262757730585711",
            "extra": "mean: 1.9398026666666635 msec\nrounds: 600"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.5156757949533,
            "unit": "iter/sec",
            "range": "stddev: 0.0007289228305306184",
            "extra": "mean: 8.582536153846121 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 157.87724351872043,
            "unit": "iter/sec",
            "range": "stddev: 0.000772756243621356",
            "extra": "mean: 6.334035087719429 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 232.13207330168348,
            "unit": "iter/sec",
            "range": "stddev: 0.0005879635054532961",
            "extra": "mean: 4.307892424242384 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 511.8283716919497,
            "unit": "iter/sec",
            "range": "stddev: 0.00027454252598379354",
            "extra": "mean: 1.9537799295773748 msec\nrounds: 568"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.981523751038353,
            "unit": "iter/sec",
            "range": "stddev: 0.002136933924185251",
            "extra": "mean: 50.04623333333297 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.126278391917786,
            "unit": "iter/sec",
            "range": "stddev: 0.0024352637209866727",
            "extra": "mean: 47.334413636363266 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 180.9720117550576,
            "unit": "iter/sec",
            "range": "stddev: 0.0004037807680599936",
            "extra": "mean: 5.525716326530548 msec\nrounds: 196"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 311.22440626909173,
            "unit": "iter/sec",
            "range": "stddev: 0.0005419174526089293",
            "extra": "mean: 3.213115616438439 msec\nrounds: 365"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 900.028139817825,
            "unit": "iter/sec",
            "range": "stddev: 0.00029737611212580145",
            "extra": "mean: 1.1110763716814567 msec\nrounds: 1130"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 877.0683669835156,
            "unit": "iter/sec",
            "range": "stddev: 0.0001718910676829437",
            "extra": "mean: 1.1401619732784125 msec\nrounds: 973"
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
        "date": 1643987910635,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 154.51997570306588,
            "unit": "iter/sec",
            "range": "stddev: 0.00040826202505288127",
            "extra": "mean: 6.471655172413793 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 203.4960441086196,
            "unit": "iter/sec",
            "range": "stddev: 0.00043392416627729014",
            "extra": "mean: 4.914100440528625 msec\nrounds: 227"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 286.5509857816098,
            "unit": "iter/sec",
            "range": "stddev: 0.00046856925503053923",
            "extra": "mean: 3.4897803519061483 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 626.1670306137153,
            "unit": "iter/sec",
            "range": "stddev: 0.00026000216243447533",
            "extra": "mean: 1.5970179698217035 msec\nrounds: 729"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 132.859933858862,
            "unit": "iter/sec",
            "range": "stddev: 0.000829180651420009",
            "extra": "mean: 7.526723602484302 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 179.52935494597347,
            "unit": "iter/sec",
            "range": "stddev: 0.0005861703839697766",
            "extra": "mean: 5.570119718309767 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 270.35346110717774,
            "unit": "iter/sec",
            "range": "stddev: 0.0003793228189349476",
            "extra": "mean: 3.6988614678898615 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 610.6539760921087,
            "unit": "iter/sec",
            "range": "stddev: 0.00020661280061899477",
            "extra": "mean: 1.6375886167146876 msec\nrounds: 694"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.311488293063537,
            "unit": "iter/sec",
            "range": "stddev: 0.002761718888434086",
            "extra": "mean: 42.89730400000053 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.54118789775719,
            "unit": "iter/sec",
            "range": "stddev: 0.0017880590191137566",
            "extra": "mean: 42.478740000001096 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 219.63507850466777,
            "unit": "iter/sec",
            "range": "stddev: 0.000545252730166575",
            "extra": "mean: 4.553006772908307 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 372.09108173805515,
            "unit": "iter/sec",
            "range": "stddev: 0.00030501581059149205",
            "extra": "mean: 2.687514022988545 msec\nrounds: 435"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1095.6853540702214,
            "unit": "iter/sec",
            "range": "stddev: 0.0002213119146675579",
            "extra": "mean: 912.6707738542163 usec\nrounds: 1331"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1022.2489681407959,
            "unit": "iter/sec",
            "range": "stddev: 0.00023004442510599776",
            "extra": "mean: 978.2352745425012 usec\nrounds: 1202"
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
        "date": 1643988182859,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 205.5815489864558,
            "unit": "iter/sec",
            "range": "stddev: 0.000014998281048402107",
            "extra": "mean: 4.864249758454162 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 268.290322876554,
            "unit": "iter/sec",
            "range": "stddev: 0.000012051473509761606",
            "extra": "mean: 3.727305514705877 msec\nrounds: 272"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 409.1920992436438,
            "unit": "iter/sec",
            "range": "stddev: 0.000012180753440017943",
            "extra": "mean: 2.4438399515738785 msec\nrounds: 413"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 836.2672956296061,
            "unit": "iter/sec",
            "range": "stddev: 0.000008908467261466132",
            "extra": "mean: 1.19578991696324 msec\nrounds: 843"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 190.46889672677236,
            "unit": "iter/sec",
            "range": "stddev: 0.0000166437542005645",
            "extra": "mean: 5.250201041666662 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 248.31010077814605,
            "unit": "iter/sec",
            "range": "stddev: 0.000019988600622755225",
            "extra": "mean: 4.027222399999971 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 394.12047324485474,
            "unit": "iter/sec",
            "range": "stddev: 0.000011956115416836208",
            "extra": "mean: 2.5372952380952087 msec\nrounds: 399"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 770.9137104990021,
            "unit": "iter/sec",
            "range": "stddev: 0.000009311100513838497",
            "extra": "mean: 1.2971620382165903 msec\nrounds: 785"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.589382820048368,
            "unit": "iter/sec",
            "range": "stddev: 0.000031138974854633675",
            "extra": "mean: 37.60899629629617 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.988692568202058,
            "unit": "iter/sec",
            "range": "stddev: 0.00005668962746779542",
            "extra": "mean: 35.72871428571478 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 303.4293465757998,
            "unit": "iter/sec",
            "range": "stddev: 0.000011474109643690436",
            "extra": "mean: 3.2956601307190625 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 502.19924715586916,
            "unit": "iter/sec",
            "range": "stddev: 0.000017917247516874094",
            "extra": "mean: 1.9912415354331006 msec\nrounds: 508"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1517.0237405395942,
            "unit": "iter/sec",
            "range": "stddev: 0.000005901315300702576",
            "extra": "mean: 659.1854651162595 usec\nrounds: 1548"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1319.3269845660736,
            "unit": "iter/sec",
            "range": "stddev: 0.0000056398633317710855",
            "extra": "mean: 757.9622123236568 usec\nrounds: 1347"
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
        "date": 1644011188194,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 193.90561898043526,
            "unit": "iter/sec",
            "range": "stddev: 0.0003737925353711138",
            "extra": "mean: 5.157148128342264 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 248.630564879204,
            "unit": "iter/sec",
            "range": "stddev: 0.0003375173369964346",
            "extra": "mean: 4.022031645569584 msec\nrounds: 316"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 383.4664823377277,
            "unit": "iter/sec",
            "range": "stddev: 0.00023786686507956055",
            "extra": "mean: 2.607789848812072 msec\nrounds: 463"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 779.3607832481572,
            "unit": "iter/sec",
            "range": "stddev: 0.00010261031455275963",
            "extra": "mean: 1.2831027958993273 msec\nrounds: 1073"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 175.22192029692275,
            "unit": "iter/sec",
            "range": "stddev: 0.0003945142334830762",
            "extra": "mean: 5.70704851485161 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 225.51900944833866,
            "unit": "iter/sec",
            "range": "stddev: 0.00024208912551569928",
            "extra": "mean: 4.434216000000113 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 360.17392886872375,
            "unit": "iter/sec",
            "range": "stddev: 0.00021287996081464027",
            "extra": "mean: 2.776436382113821 msec\nrounds: 492"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 759.8986324187503,
            "unit": "iter/sec",
            "range": "stddev: 0.0001368339331796132",
            "extra": "mean: 1.3159649949849355 msec\nrounds: 997"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.244078943196815,
            "unit": "iter/sec",
            "range": "stddev: 0.0010241190777218782",
            "extra": "mean: 41.24718461538471 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.5860907973785,
            "unit": "iter/sec",
            "range": "stddev: 0.0010192983113813284",
            "extra": "mean: 40.67340384615456 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 270.66283227652445,
            "unit": "iter/sec",
            "range": "stddev: 0.0001719285633155668",
            "extra": "mean: 3.694633620689905 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 448.1962331974184,
            "unit": "iter/sec",
            "range": "stddev: 0.00008331503683440033",
            "extra": "mean: 2.231165560821496 msec\nrounds: 633"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1445.1908640105214,
            "unit": "iter/sec",
            "range": "stddev: 0.00007420658216934778",
            "extra": "mean: 691.9501256913009 usec\nrounds: 1989"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1326.20384004121,
            "unit": "iter/sec",
            "range": "stddev: 0.0000888325478279806",
            "extra": "mean: 754.0318990246072 usec\nrounds: 1743"
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
        "date": 1644244411867,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 133.8340931447292,
            "unit": "iter/sec",
            "range": "stddev: 0.0009954977066659173",
            "extra": "mean: 7.471937654320955 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 188.67654739516868,
            "unit": "iter/sec",
            "range": "stddev: 0.000525284408545877",
            "extra": "mean: 5.300075784753344 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 267.0355965733026,
            "unit": "iter/sec",
            "range": "stddev: 0.0006729061073208932",
            "extra": "mean: 3.7448190909090844 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 588.4842699860192,
            "unit": "iter/sec",
            "range": "stddev: 0.00031368081191985556",
            "extra": "mean: 1.6992807641634287 msec\nrounds: 759"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 128.69923854701864,
            "unit": "iter/sec",
            "range": "stddev: 0.0007390186413272563",
            "extra": "mean: 7.7700537414964 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 168.23754024569854,
            "unit": "iter/sec",
            "range": "stddev: 0.0004339516362294165",
            "extra": "mean: 5.943976585365987 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 248.3877284579092,
            "unit": "iter/sec",
            "range": "stddev: 0.0005375549578579596",
            "extra": "mean: 4.025963787375495 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 561.9162804060003,
            "unit": "iter/sec",
            "range": "stddev: 0.00025239000772047483",
            "extra": "mean: 1.7796245363766143 msec\nrounds: 701"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.3004953136311,
            "unit": "iter/sec",
            "range": "stddev: 0.003053043790434634",
            "extra": "mean: 49.259881818180745 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.069585856569365,
            "unit": "iter/sec",
            "range": "stddev: 0.002914415722395708",
            "extra": "mean: 43.347115384615236 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 194.9132398383498,
            "unit": "iter/sec",
            "range": "stddev: 0.000873599344498132",
            "extra": "mean: 5.13048780487844 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 346.90477712767665,
            "unit": "iter/sec",
            "range": "stddev: 0.0006893523457780116",
            "extra": "mean: 2.8826354260090072 msec\nrounds: 446"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1079.012134232233,
            "unit": "iter/sec",
            "range": "stddev: 0.00025108659218858986",
            "extra": "mean: 926.7736369911598 usec\nrounds: 1449"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 904.0569879700618,
            "unit": "iter/sec",
            "range": "stddev: 0.0003463864109816344",
            "extra": "mean: 1.1061249603803909 msec\nrounds: 1262"
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
        "date": 1644418205736,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 202.88228759824847,
            "unit": "iter/sec",
            "range": "stddev: 0.000012575124279753996",
            "extra": "mean: 4.9289665048543805 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 267.8004212401469,
            "unit": "iter/sec",
            "range": "stddev: 0.000008984388260236083",
            "extra": "mean: 3.734124074074035 msec\nrounds: 270"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 407.38397294100463,
            "unit": "iter/sec",
            "range": "stddev: 0.000010550333140982036",
            "extra": "mean: 2.454686650485426 msec\nrounds: 412"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 827.5142797810234,
            "unit": "iter/sec",
            "range": "stddev: 0.000008793538254177996",
            "extra": "mean: 1.2084383610451044 msec\nrounds: 842"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 188.7218240313821,
            "unit": "iter/sec",
            "range": "stddev: 0.000020476080572488404",
            "extra": "mean: 5.298804232804111 msec\nrounds: 189"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 248.33973508977388,
            "unit": "iter/sec",
            "range": "stddev: 0.000009297558982173533",
            "extra": "mean: 4.026741832669282 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 393.7360072471256,
            "unit": "iter/sec",
            "range": "stddev: 0.000013378211046443091",
            "extra": "mean: 2.5397727959697556 msec\nrounds: 397"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 783.2605909951589,
            "unit": "iter/sec",
            "range": "stddev: 0.000008922777086075164",
            "extra": "mean: 1.2767143036386732 msec\nrounds: 797"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.358021395098778,
            "unit": "iter/sec",
            "range": "stddev: 0.0000854577435108115",
            "extra": "mean: 37.93911481481489 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.70466001286472,
            "unit": "iter/sec",
            "range": "stddev: 0.000924987867123982",
            "extra": "mean: 36.09501071428589 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 302.79654950924214,
            "unit": "iter/sec",
            "range": "stddev: 0.000011573768073345196",
            "extra": "mean: 3.30254754098338 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 505.8132464388168,
            "unit": "iter/sec",
            "range": "stddev: 0.000009746913397426973",
            "extra": "mean: 1.977014257812562 msec\nrounds: 512"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1522.7788770738061,
            "unit": "iter/sec",
            "range": "stddev: 0.000005389107118448543",
            "extra": "mean: 656.6941629250955 usec\nrounds: 1559"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1349.0626388377382,
            "unit": "iter/sec",
            "range": "stddev: 0.000005692862134019289",
            "extra": "mean: 741.2554252199386 usec\nrounds: 1364"
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
        "date": 1644419432151,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 178.598752801465,
            "unit": "iter/sec",
            "range": "stddev: 0.00007727836801679095",
            "extra": "mean: 5.599143243243282 msec\nrounds: 185"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 230.95099871453291,
            "unit": "iter/sec",
            "range": "stddev: 0.000044171867200822465",
            "extra": "mean: 4.329922821576756 msec\nrounds: 241"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 362.9617063937822,
            "unit": "iter/sec",
            "range": "stddev: 0.00008455073556181157",
            "extra": "mean: 2.7551115789473566 msec\nrounds: 380"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 749.4800894588666,
            "unit": "iter/sec",
            "range": "stddev: 0.00005850376355977425",
            "extra": "mean: 1.3342582599118968 msec\nrounds: 908"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 165.93214039186358,
            "unit": "iter/sec",
            "range": "stddev: 0.00012849241161854067",
            "extra": "mean: 6.026560000000064 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 218.38792452049518,
            "unit": "iter/sec",
            "range": "stddev: 0.00013150071986438113",
            "extra": "mean: 4.5790077551021025 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 347.0512287151039,
            "unit": "iter/sec",
            "range": "stddev: 0.00005680284827879041",
            "extra": "mean: 2.881418987341794 msec\nrounds: 395"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 693.4985503977081,
            "unit": "iter/sec",
            "range": "stddev: 0.00005886200646486627",
            "extra": "mean: 1.4419640811455472 msec\nrounds: 838"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.875617582641286,
            "unit": "iter/sec",
            "range": "stddev: 0.0005087777935292802",
            "extra": "mean: 41.88373333333365 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.802273414538714,
            "unit": "iter/sec",
            "range": "stddev: 0.00025881382759381075",
            "extra": "mean: 40.318884615384306 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 264.8873051150816,
            "unit": "iter/sec",
            "range": "stddev: 0.000052189913194987644",
            "extra": "mean: 3.775190357142806 msec\nrounds: 280"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 452.58808803548675,
            "unit": "iter/sec",
            "range": "stddev: 0.00007844661564606522",
            "extra": "mean: 2.209514625850231 msec\nrounds: 588"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1373.6528512030916,
            "unit": "iter/sec",
            "range": "stddev: 0.000022611560240539694",
            "extra": "mean: 727.9859675784651 usec\nrounds: 1974"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1193.6446830028044,
            "unit": "iter/sec",
            "range": "stddev: 0.00002584877539461064",
            "extra": "mean: 837.7702462380512 usec\nrounds: 1462"
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
        "date": 1644539144445,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 186.32923132981145,
            "unit": "iter/sec",
            "range": "stddev: 0.00014494545393713726",
            "extra": "mean: 5.366844444444433 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 241.44515117327853,
            "unit": "iter/sec",
            "range": "stddev: 0.00012105612629868416",
            "extra": "mean: 4.141727407407439 msec\nrounds: 270"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 371.6156120826163,
            "unit": "iter/sec",
            "range": "stddev: 0.00009942262358773785",
            "extra": "mean: 2.690952606635061 msec\nrounds: 422"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 767.8430483281709,
            "unit": "iter/sec",
            "range": "stddev: 0.000043622201108273186",
            "extra": "mean: 1.3023494868870737 msec\nrounds: 877"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 171.61823628801537,
            "unit": "iter/sec",
            "range": "stddev: 0.00015744146241983053",
            "extra": "mean: 5.8268865921787425 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 220.56844069046426,
            "unit": "iter/sec",
            "range": "stddev: 0.00010620519135715223",
            "extra": "mean: 4.533740170940205 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 350.4335290338848,
            "unit": "iter/sec",
            "range": "stddev: 0.00007058848801094763",
            "extra": "mean: 2.853608222811654 msec\nrounds: 377"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 699.1922568244153,
            "unit": "iter/sec",
            "range": "stddev: 0.000033625713248993325",
            "extra": "mean: 1.4302217884130901 msec\nrounds: 794"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.697386741055514,
            "unit": "iter/sec",
            "range": "stddev: 0.0005389859028401894",
            "extra": "mean: 42.19874583333313 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.222687225098092,
            "unit": "iter/sec",
            "range": "stddev: 0.0007529276040793887",
            "extra": "mean: 39.64684615384438 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 264.5801425667442,
            "unit": "iter/sec",
            "range": "stddev: 0.0004257037208494542",
            "extra": "mean: 3.7795731391585266 msec\nrounds: 309"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 453.44521194250063,
            "unit": "iter/sec",
            "range": "stddev: 0.00007038191499905622",
            "extra": "mean: 2.205338095237855 msec\nrounds: 546"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1379.0128908364647,
            "unit": "iter/sec",
            "range": "stddev: 0.0000180444356090982",
            "extra": "mean: 725.1563829787206 usec\nrounds: 1692"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1253.3231927330085,
            "unit": "iter/sec",
            "range": "stddev: 0.00004405052121032356",
            "extra": "mean: 797.8787959866845 usec\nrounds: 1495"
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
        "date": 1644540130292,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 205.6988469986261,
            "unit": "iter/sec",
            "range": "stddev: 0.000026098159170981035",
            "extra": "mean: 4.861475961538468 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 269.93753170900726,
            "unit": "iter/sec",
            "range": "stddev: 0.000010125987719187798",
            "extra": "mean: 3.704560805860818 msec\nrounds: 273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 461.4157993439505,
            "unit": "iter/sec",
            "range": "stddev: 0.0000554363824595752",
            "extra": "mean: 2.1672426506023816 msec\nrounds: 415"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 958.593954876012,
            "unit": "iter/sec",
            "range": "stddev: 0.000011219813751993815",
            "extra": "mean: 1.04319456106871 msec\nrounds: 1048"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 214.22861239311754,
            "unit": "iter/sec",
            "range": "stddev: 0.000059038946207561725",
            "extra": "mean: 4.667910550458882 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 283.71072966734727,
            "unit": "iter/sec",
            "range": "stddev: 0.000013240841362178624",
            "extra": "mean: 3.5247168874173584 msec\nrounds: 302"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 447.4321253179926,
            "unit": "iter/sec",
            "range": "stddev: 0.000029904057153609584",
            "extra": "mean: 2.234975862069122 msec\nrounds: 464"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 891.4064773473508,
            "unit": "iter/sec",
            "range": "stddev: 0.000009359247725425906",
            "extra": "mean: 1.1218226762002022 msec\nrounds: 979"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 29.90375476528784,
            "unit": "iter/sec",
            "range": "stddev: 0.0001387045708997832",
            "extra": "mean: 33.440616666666756 msec\nrounds: 30"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 31.640281638056646,
            "unit": "iter/sec",
            "range": "stddev: 0.00008838844413494083",
            "extra": "mean: 31.60528125000028 msec\nrounds: 32"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 340.704517270298,
            "unit": "iter/sec",
            "range": "stddev: 0.00001655750044453849",
            "extra": "mean: 2.935094632768399 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 568.5164905486506,
            "unit": "iter/sec",
            "range": "stddev: 0.000018824154524640467",
            "extra": "mean: 1.758963929146441 msec\nrounds: 621"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1745.5400074254635,
            "unit": "iter/sec",
            "range": "stddev: 0.000010805325967121226",
            "extra": "mean: 572.8886165576478 usec\nrounds: 1836"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1576.4023742006905,
            "unit": "iter/sec",
            "range": "stddev: 0.000009696699991531932",
            "extra": "mean: 634.3558068459816 usec\nrounds: 1636"
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
        "date": 1644597354528,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 203.0111529749727,
            "unit": "iter/sec",
            "range": "stddev: 0.000014898619528521424",
            "extra": "mean: 4.925837745098075 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 262.5857239124525,
            "unit": "iter/sec",
            "range": "stddev: 0.000008787825822363407",
            "extra": "mean: 3.808280149812734 msec\nrounds: 267"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 409.0573377148837,
            "unit": "iter/sec",
            "range": "stddev: 0.000011597449679475703",
            "extra": "mean: 2.444645060240939 msec\nrounds: 415"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 848.4229900805333,
            "unit": "iter/sec",
            "range": "stddev: 0.000010413257366209438",
            "extra": "mean: 1.178657358053297 msec\nrounds: 863"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 186.15993467876498,
            "unit": "iter/sec",
            "range": "stddev: 0.000017882389347455937",
            "extra": "mean: 5.371725133689943 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 244.44117418808216,
            "unit": "iter/sec",
            "range": "stddev: 0.000011008361943817611",
            "extra": "mean: 4.090963821138262 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 390.6342246747104,
            "unit": "iter/sec",
            "range": "stddev: 0.000041522411166755265",
            "extra": "mean: 2.5599395465994346 msec\nrounds: 397"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 778.150171207702,
            "unit": "iter/sec",
            "range": "stddev: 0.000009562278530678062",
            "extra": "mean: 1.285098991172852 msec\nrounds: 793"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.329167051446206,
            "unit": "iter/sec",
            "range": "stddev: 0.000046353382798756894",
            "extra": "mean: 37.980692592592746 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.784459278699423,
            "unit": "iter/sec",
            "range": "stddev: 0.00015347088619608305",
            "extra": "mean: 35.99134285714304 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 298.9855381091222,
            "unit": "iter/sec",
            "range": "stddev: 0.000017601485681495448",
            "extra": "mean: 3.3446433774834454 msec\nrounds: 302"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 495.19297828195124,
            "unit": "iter/sec",
            "range": "stddev: 0.000011053514439719157",
            "extra": "mean: 2.019414741035814 msec\nrounds: 502"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1561.4903997857807,
            "unit": "iter/sec",
            "range": "stddev: 0.000030437640007957343",
            "extra": "mean: 640.4137996219439 usec\nrounds: 1587"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1368.1983390782561,
            "unit": "iter/sec",
            "range": "stddev: 0.00000739577746526611",
            "extra": "mean: 730.8881844380045 usec\nrounds: 1388"
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
        "date": 1644600099892,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 204.10630173252758,
            "unit": "iter/sec",
            "range": "stddev: 0.000014874408792937972",
            "extra": "mean: 4.899407766990245 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 268.33633256119754,
            "unit": "iter/sec",
            "range": "stddev: 0.00000984446910486667",
            "extra": "mean: 3.726666420664213 msec\nrounds: 271"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 407.6072677456215,
            "unit": "iter/sec",
            "range": "stddev: 0.000019039623726253865",
            "extra": "mean: 2.45334192771086 msec\nrounds: 415"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 830.8845563712694,
            "unit": "iter/sec",
            "range": "stddev: 0.00000993493044182394",
            "extra": "mean: 1.2035366313309641 msec\nrounds: 849"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 187.4305890272574,
            "unit": "iter/sec",
            "range": "stddev: 0.00001452339956952332",
            "extra": "mean: 5.335308421052731 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 247.07812749311037,
            "unit": "iter/sec",
            "range": "stddev: 0.000009489061621298643",
            "extra": "mean: 4.0473028112449345 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 391.37558437019277,
            "unit": "iter/sec",
            "range": "stddev: 0.000011972037413686995",
            "extra": "mean: 2.555090404040442 msec\nrounds: 396"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 777.7091409212601,
            "unit": "iter/sec",
            "range": "stddev: 0.00000977109731832824",
            "extra": "mean: 1.28582775665388 msec\nrounds: 789"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.288463307877155,
            "unit": "iter/sec",
            "range": "stddev: 0.00008733915766473626",
            "extra": "mean: 38.03950000000027 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.763714134486616,
            "unit": "iter/sec",
            "range": "stddev: 0.00005218030147873398",
            "extra": "mean: 36.018235714286256 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 302.0158372762391,
            "unit": "iter/sec",
            "range": "stddev: 0.000010918490529570968",
            "extra": "mean: 3.3110846405228376 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 501.2663153781803,
            "unit": "iter/sec",
            "range": "stddev: 0.000010526209000613195",
            "extra": "mean: 1.994947534516757 msec\nrounds: 507"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1527.1208691060042,
            "unit": "iter/sec",
            "range": "stddev: 0.000006068066497444141",
            "extra": "mean: 654.827014829162 usec\nrounds: 1551"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1358.9360452581955,
            "unit": "iter/sec",
            "range": "stddev: 0.000005898916753691147",
            "extra": "mean: 735.8698030634706 usec\nrounds: 1371"
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
        "date": 1644600560439,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 145.2234401763343,
            "unit": "iter/sec",
            "range": "stddev: 0.0005088770219932983",
            "extra": "mean: 6.885940718562875 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 176.64633431826437,
            "unit": "iter/sec",
            "range": "stddev: 0.000577093913506705",
            "extra": "mean: 5.66102887931032 msec\nrounds: 232"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 272.74517298862315,
            "unit": "iter/sec",
            "range": "stddev: 0.00041581982294805947",
            "extra": "mean: 3.666426023391851 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 552.091665168299,
            "unit": "iter/sec",
            "range": "stddev: 0.00027981126787256255",
            "extra": "mean: 1.811293419354848 msec\nrounds: 775"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 129.17071401570655,
            "unit": "iter/sec",
            "range": "stddev: 0.00048750561396813296",
            "extra": "mean: 7.741692903225763 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 166.67732657223812,
            "unit": "iter/sec",
            "range": "stddev: 0.0004252956128291453",
            "extra": "mean: 5.999616267942712 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 247.6356052574427,
            "unit": "iter/sec",
            "range": "stddev: 0.0003271148262196377",
            "extra": "mean: 4.038191515151454 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 490.48211136806935,
            "unit": "iter/sec",
            "range": "stddev: 0.00026584476534106",
            "extra": "mean: 2.0388103395060955 msec\nrounds: 648"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 21.354906534467954,
            "unit": "iter/sec",
            "range": "stddev: 0.0021792269087882103",
            "extra": "mean: 46.827645833333285 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.368140520406975,
            "unit": "iter/sec",
            "range": "stddev: 0.0025208578081236705",
            "extra": "mean: 51.63118260869513 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 210.4374489181725,
            "unit": "iter/sec",
            "range": "stddev: 0.0003338706441727043",
            "extra": "mean: 4.752005905511831 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 381.6407985951424,
            "unit": "iter/sec",
            "range": "stddev: 0.0002459960157496425",
            "extra": "mean: 2.620264928909852 msec\nrounds: 422"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1092.8705807044814,
            "unit": "iter/sec",
            "range": "stddev: 0.00013042864044247366",
            "extra": "mean: 915.0214285715189 usec\nrounds: 1316"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1021.8631016814886,
            "unit": "iter/sec",
            "range": "stddev: 0.00014747043037403014",
            "extra": "mean: 978.604666666687 usec\nrounds: 1200"
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
        "date": 1644601060517,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 133.08337855143503,
            "unit": "iter/sec",
            "range": "stddev: 0.0008694754368600857",
            "extra": "mean: 7.514086363636407 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 168.7621011543071,
            "unit": "iter/sec",
            "range": "stddev: 0.0011230672591095237",
            "extra": "mean: 5.925501005025135 msec\nrounds: 199"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 244.2073370593476,
            "unit": "iter/sec",
            "range": "stddev: 0.000695942016698847",
            "extra": "mean: 4.094881063122926 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 553.2583386456654,
            "unit": "iter/sec",
            "range": "stddev: 0.00032919236516726553",
            "extra": "mean: 1.807473887240316 msec\nrounds: 674"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.27851092817566,
            "unit": "iter/sec",
            "range": "stddev: 0.0005093569642886374",
            "extra": "mean: 8.24548382352935 msec\nrounds: 136"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.41100473277027,
            "unit": "iter/sec",
            "range": "stddev: 0.001190749416374691",
            "extra": "mean: 6.738044808743164 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 242.52175353987386,
            "unit": "iter/sec",
            "range": "stddev: 0.0009251076939624343",
            "extra": "mean: 4.123341454545382 msec\nrounds: 275"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 509.1591142659096,
            "unit": "iter/sec",
            "range": "stddev: 0.0004448335546072337",
            "extra": "mean: 1.9640225854382873 msec\nrounds: 673"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.19797550642022,
            "unit": "iter/sec",
            "range": "stddev: 0.002701699819406431",
            "extra": "mean: 49.50991249999959 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.722443112315798,
            "unit": "iter/sec",
            "range": "stddev: 0.0031809684473943674",
            "extra": "mean: 46.03533749999963 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 188.18672679398207,
            "unit": "iter/sec",
            "range": "stddev: 0.0006476004102877152",
            "extra": "mean: 5.313871052631425 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 338.93493412988124,
            "unit": "iter/sec",
            "range": "stddev: 0.0005161165337957575",
            "extra": "mean: 2.9504187951803043 msec\nrounds: 415"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1023.3147513787039,
            "unit": "iter/sec",
            "range": "stddev: 0.0002461843493624332",
            "extra": "mean: 977.2164416204379 usec\nrounds: 1259"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 917.8511506482005,
            "unit": "iter/sec",
            "range": "stddev: 0.00028481507840201855",
            "extra": "mean: 1.0895012762077867 msec\nrounds: 1097"
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
        "date": 1644602712782,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 205.11009507298954,
            "unit": "iter/sec",
            "range": "stddev: 0.00001962426651414094",
            "extra": "mean: 4.875430434782572 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 267.46825854858344,
            "unit": "iter/sec",
            "range": "stddev: 0.00010903021627744309",
            "extra": "mean: 3.7387613970588522 msec\nrounds: 272"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 412.9628650026355,
            "unit": "iter/sec",
            "range": "stddev: 0.00001549588693421749",
            "extra": "mean: 2.4215252380952412 msec\nrounds: 420"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 833.7473595152718,
            "unit": "iter/sec",
            "range": "stddev: 0.000010628664358430864",
            "extra": "mean: 1.199404098360665 msec\nrounds: 854"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 189.82703973874547,
            "unit": "iter/sec",
            "range": "stddev: 0.000019010029940983858",
            "extra": "mean: 5.267953403141495 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 248.94671241070668,
            "unit": "iter/sec",
            "range": "stddev: 0.000014130440414231533",
            "extra": "mean: 4.0169239043824865 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 394.92074797396987,
            "unit": "iter/sec",
            "range": "stddev: 0.000014420259815405973",
            "extra": "mean: 2.5321536159602136 msec\nrounds: 401"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 776.5991602111803,
            "unit": "iter/sec",
            "range": "stddev: 0.000010303660952170415",
            "extra": "mean: 1.2876655696203307 msec\nrounds: 790"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.23965610889789,
            "unit": "iter/sec",
            "range": "stddev: 0.0002011715022893551",
            "extra": "mean: 38.11025555555582 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.757881875342395,
            "unit": "iter/sec",
            "range": "stddev: 0.00012275380806381342",
            "extra": "mean: 36.02580357142848 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 304.5618636111047,
            "unit": "iter/sec",
            "range": "stddev: 0.000014477583626084547",
            "extra": "mean: 3.2834051779933318 msec\nrounds: 309"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 503.59456699623814,
            "unit": "iter/sec",
            "range": "stddev: 0.000013164891415446017",
            "extra": "mean: 1.985724361493102 msec\nrounds: 509"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1523.5735283980312,
            "unit": "iter/sec",
            "range": "stddev: 0.000007433456885990952",
            "extra": "mean: 656.3516504854578 usec\nrounds: 1545"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1357.5002529305157,
            "unit": "iter/sec",
            "range": "stddev: 0.00000683176187332196",
            "extra": "mean: 736.6481132075232 usec\nrounds: 1378"
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
        "date": 1644937328380,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 205.3350408214984,
            "unit": "iter/sec",
            "range": "stddev: 0.000011944149280367842",
            "extra": "mean: 4.870089371980688 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 268.1927460690695,
            "unit": "iter/sec",
            "range": "stddev: 0.000008659454453262705",
            "extra": "mean: 3.7286616236162597 msec\nrounds: 271"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 413.1513958860988,
            "unit": "iter/sec",
            "range": "stddev: 0.000015462488134939383",
            "extra": "mean: 2.420420238095211 msec\nrounds: 420"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 841.8959614800216,
            "unit": "iter/sec",
            "range": "stddev: 0.000008755087896212705",
            "extra": "mean: 1.1877952214452216 msec\nrounds: 858"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 190.34734722716615,
            "unit": "iter/sec",
            "range": "stddev: 0.00001263184653368448",
            "extra": "mean: 5.253553645833427 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 248.10051762699374,
            "unit": "iter/sec",
            "range": "stddev: 0.000009185684068508974",
            "extra": "mean: 4.030624400000036 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 398.1028624876985,
            "unit": "iter/sec",
            "range": "stddev: 0.000011681241470612406",
            "extra": "mean: 2.5119136138612927 msec\nrounds: 404"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 787.6785027176367,
            "unit": "iter/sec",
            "range": "stddev: 0.000007768257206291072",
            "extra": "mean: 1.2695535000000824 msec\nrounds: 800"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.424244773064164,
            "unit": "iter/sec",
            "range": "stddev: 0.00004707531608575399",
            "extra": "mean: 37.84403333333336 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.90711674334393,
            "unit": "iter/sec",
            "range": "stddev: 0.000048659569362286196",
            "extra": "mean: 35.833153571427545 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 304.1211586996663,
            "unit": "iter/sec",
            "range": "stddev: 0.000013514893028194971",
            "extra": "mean: 3.2881631921820547 msec\nrounds: 307"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 504.75925000844404,
            "unit": "iter/sec",
            "range": "stddev: 0.000010493710319062253",
            "extra": "mean: 1.9811424951266792 msec\nrounds: 513"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1524.6799841032105,
            "unit": "iter/sec",
            "range": "stddev: 0.000005946139560649421",
            "extra": "mean: 655.8753380554032 usec\nrounds: 1553"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1174.696235326479,
            "unit": "iter/sec",
            "range": "stddev: 0.00033434031949952967",
            "extra": "mean: 851.2839063641621 usec\nrounds: 1367"
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
        "date": 1644938540599,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 129.29047585667507,
            "unit": "iter/sec",
            "range": "stddev: 0.0006675190109156567",
            "extra": "mean: 7.734521768707462 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 175.54611622288726,
            "unit": "iter/sec",
            "range": "stddev: 0.0006172328122777469",
            "extra": "mean: 5.69650882352943 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 237.77632209305676,
            "unit": "iter/sec",
            "range": "stddev: 0.0006798800543951484",
            "extra": "mean: 4.205633223684222 msec\nrounds: 304"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 542.8956664906746,
            "unit": "iter/sec",
            "range": "stddev: 0.00024291451760973323",
            "extra": "mean: 1.8419745481928196 msec\nrounds: 664"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.49778469834479,
            "unit": "iter/sec",
            "range": "stddev: 0.0006399899328994024",
            "extra": "mean: 8.368355970149223 msec\nrounds: 134"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 156.9536482741962,
            "unit": "iter/sec",
            "range": "stddev: 0.0008591749100643564",
            "extra": "mean: 6.371307777777879 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 236.62555497695337,
            "unit": "iter/sec",
            "range": "stddev: 0.0003548303830777674",
            "extra": "mean: 4.2260862318839445 msec\nrounds: 276"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 517.3074989264496,
            "unit": "iter/sec",
            "range": "stddev: 0.00019177934571267062",
            "extra": "mean: 1.933086224489816 msec\nrounds: 588"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.092771195002843,
            "unit": "iter/sec",
            "range": "stddev: 0.0011605280946929322",
            "extra": "mean: 49.769142857143784 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.529207510070062,
            "unit": "iter/sec",
            "range": "stddev: 0.003510569578978379",
            "extra": "mean: 48.71108636363466 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 187.52275666786275,
            "unit": "iter/sec",
            "range": "stddev: 0.0006135630745167548",
            "extra": "mean: 5.332686111111217 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 313.72582289622477,
            "unit": "iter/sec",
            "range": "stddev: 0.0004989060205986806",
            "extra": "mean: 3.187496619718113 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1008.0276949624991,
            "unit": "iter/sec",
            "range": "stddev: 0.0002065245018097076",
            "extra": "mean: 992.0362357079904 usec\nrounds: 1137"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 882.189147947515,
            "unit": "iter/sec",
            "range": "stddev: 0.0002244510961474959",
            "extra": "mean: 1.1335437556974959 msec\nrounds: 1097"
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
        "date": 1644939065603,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 183.5448663894267,
            "unit": "iter/sec",
            "range": "stddev: 0.000300254776739865",
            "extra": "mean: 5.448259162303686 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 234.31168739649482,
            "unit": "iter/sec",
            "range": "stddev: 0.00012585867753454023",
            "extra": "mean: 4.267819548872232 msec\nrounds: 266"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 376.0866068461525,
            "unit": "iter/sec",
            "range": "stddev: 0.00015048395296884723",
            "extra": "mean: 2.6589620098039672 msec\nrounds: 408"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 743.4738304500836,
            "unit": "iter/sec",
            "range": "stddev: 0.000036107869330605906",
            "extra": "mean: 1.3450372549019254 msec\nrounds: 1071"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 163.65367237911022,
            "unit": "iter/sec",
            "range": "stddev: 0.00009539557526708995",
            "extra": "mean: 6.110464772727253 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 224.24898232596374,
            "unit": "iter/sec",
            "range": "stddev: 0.00022601726414604812",
            "extra": "mean: 4.459329044117669 msec\nrounds: 272"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 347.21269684771386,
            "unit": "iter/sec",
            "range": "stddev: 0.00008597200989322609",
            "extra": "mean: 2.8800790094337945 msec\nrounds: 424"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 696.1673637594375,
            "unit": "iter/sec",
            "range": "stddev: 0.0000785628972323651",
            "extra": "mean: 1.436436196318954 msec\nrounds: 978"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.68280669678812,
            "unit": "iter/sec",
            "range": "stddev: 0.000509555086624541",
            "extra": "mean: 42.22472499999844 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.394666247058762,
            "unit": "iter/sec",
            "range": "stddev: 0.0017961508542825558",
            "extra": "mean: 37.88644230769286 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 263.0818096437974,
            "unit": "iter/sec",
            "range": "stddev: 0.00008202695567059426",
            "extra": "mean: 3.8010989864862244 msec\nrounds: 296"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 444.8616379823714,
            "unit": "iter/sec",
            "range": "stddev: 0.00007453225695320756",
            "extra": "mean: 2.2478899383983904 msec\nrounds: 487"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1224.0032788299804,
            "unit": "iter/sec",
            "range": "stddev: 0.0003458861597230256",
            "extra": "mean: 816.9912755102224 usec\nrounds: 1960"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1188.2280907770544,
            "unit": "iter/sec",
            "range": "stddev: 0.000027353586268172945",
            "extra": "mean: 841.5892603128407 usec\nrounds: 1406"
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
        "date": 1645453823913,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 202.92080627598372,
            "unit": "iter/sec",
            "range": "stddev: 0.000012961229690110207",
            "extra": "mean: 4.92803088235291 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 266.4800315813524,
            "unit": "iter/sec",
            "range": "stddev: 0.000009925935160703771",
            "extra": "mean: 3.7526263940520237 msec\nrounds: 269"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 407.5819720868679,
            "unit": "iter/sec",
            "range": "stddev: 0.00001220589206488971",
            "extra": "mean: 2.4534941888618915 msec\nrounds: 413"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 837.8377767089606,
            "unit": "iter/sec",
            "range": "stddev: 0.000008272489768836078",
            "extra": "mean: 1.1935484741783966 msec\nrounds: 852"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 189.22174986497782,
            "unit": "iter/sec",
            "range": "stddev: 0.000016733479689615805",
            "extra": "mean: 5.284804736842175 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 247.89873336741968,
            "unit": "iter/sec",
            "range": "stddev: 0.0000089431952701705",
            "extra": "mean: 4.0339052419354795 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 394.4346265238971,
            "unit": "iter/sec",
            "range": "stddev: 0.00000925902087102309",
            "extra": "mean: 2.535274371859475 msec\nrounds: 398"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 777.6123730778579,
            "unit": "iter/sec",
            "range": "stddev: 0.000008688506234890523",
            "extra": "mean: 1.2859877679696794 msec\nrounds: 793"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.510746818538504,
            "unit": "iter/sec",
            "range": "stddev: 0.0000442930222875838",
            "extra": "mean: 37.72055185185192 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.98310939516923,
            "unit": "iter/sec",
            "range": "stddev: 0.00007367072602470905",
            "extra": "mean: 35.73584285714266 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 304.8542528558506,
            "unit": "iter/sec",
            "range": "stddev: 0.000012036727069104668",
            "extra": "mean: 3.280256026058613 msec\nrounds: 307"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 504.0727798232542,
            "unit": "iter/sec",
            "range": "stddev: 0.00001437806550209538",
            "extra": "mean: 1.9838405088063584 msec\nrounds: 511"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1498.0899353322081,
            "unit": "iter/sec",
            "range": "stddev: 0.000032884037030559445",
            "extra": "mean: 667.516666666775 usec\nrounds: 1536"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1331.9718921728222,
            "unit": "iter/sec",
            "range": "stddev: 0.000006857378064067881",
            "extra": "mean: 750.7665934066504 usec\nrounds: 1365"
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
        "date": 1645921228033,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 181.75306652341328,
            "unit": "iter/sec",
            "range": "stddev: 0.00012645263001191207",
            "extra": "mean: 5.501970443349746 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 232.3780229775753,
            "unit": "iter/sec",
            "range": "stddev: 0.000026686496027522454",
            "extra": "mean: 4.303332936507945 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 361.9883023386327,
            "unit": "iter/sec",
            "range": "stddev: 0.00006454252564463494",
            "extra": "mean: 2.7625202072538806 msec\nrounds: 386"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 748.0529046031113,
            "unit": "iter/sec",
            "range": "stddev: 0.00003375109398875334",
            "extra": "mean: 1.3368038461538525 msec\nrounds: 806"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 163.91034900310075,
            "unit": "iter/sec",
            "range": "stddev: 0.0000745172519389023",
            "extra": "mean: 6.100896045197748 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 214.61490500514725,
            "unit": "iter/sec",
            "range": "stddev: 0.00003945594851750679",
            "extra": "mean: 4.659508620689772 msec\nrounds: 232"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 341.8701642417207,
            "unit": "iter/sec",
            "range": "stddev: 0.0000469017162531052",
            "extra": "mean: 2.9250870786517242 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 682.7900594267718,
            "unit": "iter/sec",
            "range": "stddev: 0.00003119986286753901",
            "extra": "mean: 1.4645790257103888 msec\nrounds: 739"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.717674292294326,
            "unit": "iter/sec",
            "range": "stddev: 0.0004699016909210505",
            "extra": "mean: 42.16264999999986 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.979406400915412,
            "unit": "iter/sec",
            "range": "stddev: 0.0005256972659677563",
            "extra": "mean: 40.03297692307665 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 260.60522708040656,
            "unit": "iter/sec",
            "range": "stddev: 0.00002891934001770043",
            "extra": "mean: 3.8372215753426238 msec\nrounds: 292"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 436.6110436582944,
            "unit": "iter/sec",
            "range": "stddev: 0.00005983368672148632",
            "extra": "mean: 2.290368085106504 msec\nrounds: 470"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1369.0946565098097,
            "unit": "iter/sec",
            "range": "stddev: 0.000023104656950055693",
            "extra": "mean: 730.4096873398578 usec\nrounds: 1951"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1173.44222434897,
            "unit": "iter/sec",
            "range": "stddev: 0.00002280397869871569",
            "extra": "mean: 852.1936395759097 usec\nrounds: 1698"
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
        "date": 1646063502923,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 169.13835127545994,
            "unit": "iter/sec",
            "range": "stddev: 0.0006170886235154137",
            "extra": "mean: 5.912319662921349 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 221.72415354909484,
            "unit": "iter/sec",
            "range": "stddev: 0.000295619491122935",
            "extra": "mean: 4.51010854700851 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 341.5112381725816,
            "unit": "iter/sec",
            "range": "stddev: 0.00034546823017021956",
            "extra": "mean: 2.9281613259668284 msec\nrounds: 362"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 743.7447538557692,
            "unit": "iter/sec",
            "range": "stddev: 0.000009719116703817233",
            "extra": "mean: 1.3445472990777225 msec\nrounds: 759"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 162.69784180820108,
            "unit": "iter/sec",
            "range": "stddev: 0.000018322860652054844",
            "extra": "mean: 6.14636303030292 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 212.5840715872968,
            "unit": "iter/sec",
            "range": "stddev: 0.000013582146632601824",
            "extra": "mean: 4.7040212962962 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 342.1594699782165,
            "unit": "iter/sec",
            "range": "stddev: 0.000014152092269807176",
            "extra": "mean: 2.9226138328530396 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 687.2387711716732,
            "unit": "iter/sec",
            "range": "stddev: 0.000011908164571891068",
            "extra": "mean: 1.4550983471073675 msec\nrounds: 726"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.145152509447733,
            "unit": "iter/sec",
            "range": "stddev: 0.00006839198459827755",
            "extra": "mean: 43.20559130434786 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.469434153144018,
            "unit": "iter/sec",
            "range": "stddev: 0.00004627693197810367",
            "extra": "mean: 40.86731200000031 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 262.1244377627936,
            "unit": "iter/sec",
            "range": "stddev: 0.000021161414992246838",
            "extra": "mean: 3.814981954887159 msec\nrounds: 266"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 439.5917901244875,
            "unit": "iter/sec",
            "range": "stddev: 0.000012523813870552893",
            "extra": "mean: 2.27483775280883 msec\nrounds: 445"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1371.4545035857477,
            "unit": "iter/sec",
            "range": "stddev: 0.000007859886335651658",
            "extra": "mean: 729.1528792135952 usec\nrounds: 1424"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1174.6576923214197,
            "unit": "iter/sec",
            "range": "stddev: 0.000006148781601981143",
            "extra": "mean: 851.3118387908803 usec\nrounds: 1191"
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
        "date": 1646086330766,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 178.99204389314522,
            "unit": "iter/sec",
            "range": "stddev: 0.0000944063270266489",
            "extra": "mean: 5.586840499999992 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 234.70413587804597,
            "unit": "iter/sec",
            "range": "stddev: 0.00010178325792400305",
            "extra": "mean: 4.260683333333365 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 360.7890711062023,
            "unit": "iter/sec",
            "range": "stddev: 0.00004509552076770774",
            "extra": "mean: 2.7717025821595325 msec\nrounds: 426"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 743.2906405771625,
            "unit": "iter/sec",
            "range": "stddev: 0.00001783051799302628",
            "extra": "mean: 1.3453687500000047 msec\nrounds: 928"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 166.44568811494898,
            "unit": "iter/sec",
            "range": "stddev: 0.0001656160682149552",
            "extra": "mean: 6.007965789473564 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 222.55310806013574,
            "unit": "iter/sec",
            "range": "stddev: 0.00023482680484865977",
            "extra": "mean: 4.493309523809443 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 356.39802668040403,
            "unit": "iter/sec",
            "range": "stddev: 0.00013093336438234587",
            "extra": "mean: 2.805851674641114 msec\nrounds: 418"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 707.0007603674408,
            "unit": "iter/sec",
            "range": "stddev: 0.0000763812015957432",
            "extra": "mean: 1.4144256358087683 msec\nrounds: 983"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.111472408475773,
            "unit": "iter/sec",
            "range": "stddev: 0.0012281454395943886",
            "extra": "mean: 45.225391666666205 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.580502124413993,
            "unit": "iter/sec",
            "range": "stddev: 0.002005816511202714",
            "extra": "mean: 39.09227407407306 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 278.70396629638236,
            "unit": "iter/sec",
            "range": "stddev: 0.00023300738277295878",
            "extra": "mean: 3.5880364864867738 msec\nrounds: 370"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 462.22242665876627,
            "unit": "iter/sec",
            "range": "stddev: 0.00012734297417409885",
            "extra": "mean: 2.1634605815832595 msec\nrounds: 619"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1426.172846152018,
            "unit": "iter/sec",
            "range": "stddev: 0.00005304648456469874",
            "extra": "mean: 701.1772820511325 usec\nrounds: 1950"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1216.314273192619,
            "unit": "iter/sec",
            "range": "stddev: 0.00004945344058167065",
            "extra": "mean: 822.1559362081391 usec\nrounds: 1693"
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
        "date": 1646432306548,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 167.67078603302497,
            "unit": "iter/sec",
            "range": "stddev: 0.00031950744629659263",
            "extra": "mean: 5.9640681818181305 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 214.74617557425375,
            "unit": "iter/sec",
            "range": "stddev: 0.0004836183701478525",
            "extra": "mean: 4.65666034482754 msec\nrounds: 232"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 288.91878862399733,
            "unit": "iter/sec",
            "range": "stddev: 0.00034767463303146326",
            "extra": "mean: 3.46118023255806 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 719.0605413718503,
            "unit": "iter/sec",
            "range": "stddev: 0.00015841804939104156",
            "extra": "mean: 1.3907034838710006 msec\nrounds: 775"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 151.54404320809255,
            "unit": "iter/sec",
            "range": "stddev: 0.0004739635711395969",
            "extra": "mean: 6.59874171779125 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 199.75146131541214,
            "unit": "iter/sec",
            "range": "stddev: 0.000463250252755593",
            "extra": "mean: 5.006221198156728 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 308.65779606208184,
            "unit": "iter/sec",
            "range": "stddev: 0.0003013256550108963",
            "extra": "mean: 3.239833928571385 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 661.1377173445375,
            "unit": "iter/sec",
            "range": "stddev: 0.0001318153827679096",
            "extra": "mean: 1.5125441700959135 msec\nrounds: 729"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.854075534897895,
            "unit": "iter/sec",
            "range": "stddev: 0.0023589982502553617",
            "extra": "mean: 38.6786214285712 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.828807921345994,
            "unit": "iter/sec",
            "range": "stddev: 0.0008317087632970668",
            "extra": "mean: 35.933986206895824 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 242.92844814069645,
            "unit": "iter/sec",
            "range": "stddev: 0.0002779253637375989",
            "extra": "mean: 4.116438431372318 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 436.95223662936786,
            "unit": "iter/sec",
            "range": "stddev: 0.00018886412547161572",
            "extra": "mean: 2.288579657387636 msec\nrounds: 467"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1262.6977907562457,
            "unit": "iter/sec",
            "range": "stddev: 0.0001512885010204722",
            "extra": "mean: 791.9551355206595 usec\nrounds: 1402"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1180.8832452704758,
            "unit": "iter/sec",
            "range": "stddev: 0.00010953871703694393",
            "extra": "mean: 846.823768569055 usec\nrounds: 1279"
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
        "date": 1646433417508,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 178.11556619328053,
            "unit": "iter/sec",
            "range": "stddev: 0.00003248940173392148",
            "extra": "mean: 5.614332432432429 msec\nrounds: 185"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 231.78636127080787,
            "unit": "iter/sec",
            "range": "stddev: 0.00004288644403854658",
            "extra": "mean: 4.314317695473242 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 357.1309165954906,
            "unit": "iter/sec",
            "range": "stddev: 0.000025984169779825765",
            "extra": "mean: 2.8000936170213016 msec\nrounds: 376"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 740.9897602315689,
            "unit": "iter/sec",
            "range": "stddev: 0.00001848475665822828",
            "extra": "mean: 1.3495463144962856 msec\nrounds: 814"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 162.51918044515025,
            "unit": "iter/sec",
            "range": "stddev: 0.000056309093102683765",
            "extra": "mean: 6.153119879517834 msec\nrounds: 166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 211.9550536985703,
            "unit": "iter/sec",
            "range": "stddev: 0.000013365394285197126",
            "extra": "mean: 4.71798139534875 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 342.2504410678339,
            "unit": "iter/sec",
            "range": "stddev: 0.000019913935581767875",
            "extra": "mean: 2.921836994219681 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 674.0623252442663,
            "unit": "iter/sec",
            "range": "stddev: 0.000011000742601353151",
            "extra": "mean: 1.483542341040379 msec\nrounds: 692"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.08065766628058,
            "unit": "iter/sec",
            "range": "stddev: 0.00013249544402597034",
            "extra": "mean: 43.32632173913044 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.942978439106433,
            "unit": "iter/sec",
            "range": "stddev: 0.0012987487776699217",
            "extra": "mean: 43.586320000000285 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 245.9334225434124,
            "unit": "iter/sec",
            "range": "stddev: 0.00037026827666556284",
            "extra": "mean: 4.066141111110992 msec\nrounds: 270"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 406.3123163183853,
            "unit": "iter/sec",
            "range": "stddev: 0.00042507355148585697",
            "extra": "mean: 2.461160934182469 msec\nrounds: 471"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1279.5868271175084,
            "unit": "iter/sec",
            "range": "stddev: 0.00030227741115930733",
            "extra": "mean: 781.5022621424399 usec\nrounds: 1503"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1115.1964359148124,
            "unit": "iter/sec",
            "range": "stddev: 0.00031099672130531107",
            "extra": "mean: 896.7030092592478 usec\nrounds: 1296"
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
        "date": 1646433619167,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 205.76640566649039,
            "unit": "iter/sec",
            "range": "stddev: 0.000012498114870860555",
            "extra": "mean: 4.859879807692304 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 268.5882653885969,
            "unit": "iter/sec",
            "range": "stddev: 0.00002242383980271232",
            "extra": "mean: 3.7231708487084774 msec\nrounds: 271"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 408.97579974185965,
            "unit": "iter/sec",
            "range": "stddev: 0.000010894266415025052",
            "extra": "mean: 2.4451324519230413 msec\nrounds: 416"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 859.6498889373494,
            "unit": "iter/sec",
            "range": "stddev: 0.000011137636149913458",
            "extra": "mean: 1.1632642694064015 msec\nrounds: 876"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 189.52205019596067,
            "unit": "iter/sec",
            "range": "stddev: 0.000015509356725788797",
            "extra": "mean: 5.27643089005225 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 248.34613888808067,
            "unit": "iter/sec",
            "range": "stddev: 0.00001787487175229865",
            "extra": "mean: 4.026637999999906 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 394.57074589515145,
            "unit": "iter/sec",
            "range": "stddev: 0.000009935679389715542",
            "extra": "mean: 2.5343997506235 msec\nrounds: 401"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 789.7723113862859,
            "unit": "iter/sec",
            "range": "stddev: 0.000009490226970408775",
            "extra": "mean: 1.2661877171215357 msec\nrounds: 806"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.996540478797534,
            "unit": "iter/sec",
            "range": "stddev: 0.000168833887494354",
            "extra": "mean: 40.00553600000032 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.909317047051342,
            "unit": "iter/sec",
            "range": "stddev: 0.000036631173298135006",
            "extra": "mean: 35.83032857142778 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 304.67188029392076,
            "unit": "iter/sec",
            "range": "stddev: 0.000010788408015426367",
            "extra": "mean: 3.282219543973955 msec\nrounds: 307"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 499.7395058638384,
            "unit": "iter/sec",
            "range": "stddev: 0.000010281996442188115",
            "extra": "mean: 2.001042519685176 msec\nrounds: 508"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1540.6999779534044,
            "unit": "iter/sec",
            "range": "stddev: 0.000005908166519403161",
            "extra": "mean: 649.0556333546226 usec\nrounds: 1571"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1360.0041312591331,
            "unit": "iter/sec",
            "range": "stddev: 0.0000054888184249239",
            "extra": "mean: 735.2918840578592 usec\nrounds: 1380"
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
        "date": 1646664097330,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 182.05814995413127,
            "unit": "iter/sec",
            "range": "stddev: 0.00016439152641464392",
            "extra": "mean: 5.492750531914915 msec\nrounds: 188"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 237.6999532437297,
            "unit": "iter/sec",
            "range": "stddev: 0.00012242402323680651",
            "extra": "mean: 4.2069844202898645 msec\nrounds: 276"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 361.2150249522867,
            "unit": "iter/sec",
            "range": "stddev: 0.00009291532302995616",
            "extra": "mean: 2.768434120734848 msec\nrounds: 381"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 763.5230845751014,
            "unit": "iter/sec",
            "range": "stddev: 0.00004798896192573027",
            "extra": "mean: 1.3097180952380731 msec\nrounds: 945"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 169.2924334570446,
            "unit": "iter/sec",
            "range": "stddev: 0.00015779504028046783",
            "extra": "mean: 5.906938541666925 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 221.33767347639886,
            "unit": "iter/sec",
            "range": "stddev: 0.0001226834601970289",
            "extra": "mean: 4.5179836956523785 msec\nrounds: 276"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 349.97358942475364,
            "unit": "iter/sec",
            "range": "stddev: 0.00008793507300868291",
            "extra": "mean: 2.857358469945361 msec\nrounds: 366"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 712.3314456846772,
            "unit": "iter/sec",
            "range": "stddev: 0.00005356955000364655",
            "extra": "mean: 1.4038408750000109 msec\nrounds: 800"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.029438146959176,
            "unit": "iter/sec",
            "range": "stddev: 0.0004960432937505333",
            "extra": "mean: 43.422683333333545 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.556886932640282,
            "unit": "iter/sec",
            "range": "stddev: 0.0005676061015571168",
            "extra": "mean: 39.12839629629688 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 268.7526912834483,
            "unit": "iter/sec",
            "range": "stddev: 0.00012729581393460958",
            "extra": "mean: 3.7208929712458922 msec\nrounds: 313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 462.4429129210667,
            "unit": "iter/sec",
            "range": "stddev: 0.00007150342510996878",
            "extra": "mean: 2.1624290740740313 msec\nrounds: 540"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1435.2445553942887,
            "unit": "iter/sec",
            "range": "stddev: 0.00002876910593499341",
            "extra": "mean: 696.7453708439822 usec\nrounds: 1955"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1241.9269517647272,
            "unit": "iter/sec",
            "range": "stddev: 0.00003350569792655057",
            "extra": "mean: 805.2003369272574 usec\nrounds: 1484"
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
        "date": 1646751954974,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 138.6741877856928,
            "unit": "iter/sec",
            "range": "stddev: 0.0009336625144880379",
            "extra": "mean: 7.211147337278087 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 182.71002722461643,
            "unit": "iter/sec",
            "range": "stddev: 0.0007157486228757728",
            "extra": "mean: 5.473153363228608 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 270.7501127784603,
            "unit": "iter/sec",
            "range": "stddev: 0.0005144643221406314",
            "extra": "mean: 3.693442598187371 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 583.1450374357,
            "unit": "iter/sec",
            "range": "stddev: 0.00034429743473360055",
            "extra": "mean: 1.714839252336541 msec\nrounds: 749"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 130.91860857675658,
            "unit": "iter/sec",
            "range": "stddev: 0.00098220311573288",
            "extra": "mean: 7.638333548387109 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 177.08526799694675,
            "unit": "iter/sec",
            "range": "stddev: 0.0008657763088759761",
            "extra": "mean: 5.6469971291866115 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 265.80552160726967,
            "unit": "iter/sec",
            "range": "stddev: 0.0006506091182180559",
            "extra": "mean: 3.762149085365917 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 531.7899431309795,
            "unit": "iter/sec",
            "range": "stddev: 0.000468142384915784",
            "extra": "mean: 1.8804417287630066 msec\nrounds: 671"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.30505404214357,
            "unit": "iter/sec",
            "range": "stddev: 0.003923043188580199",
            "extra": "mean: 44.832888461538 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.606171133081343,
            "unit": "iter/sec",
            "range": "stddev: 0.0027760748827541544",
            "extra": "mean: 40.64021153846106 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 209.68022019085686,
            "unit": "iter/sec",
            "range": "stddev: 0.0006957826141271497",
            "extra": "mean: 4.769167063492072 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 357.30095019281714,
            "unit": "iter/sec",
            "range": "stddev: 0.0005947958150771247",
            "extra": "mean: 2.7987610989009433 msec\nrounds: 455"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1044.0142955866993,
            "unit": "iter/sec",
            "range": "stddev: 0.0002240727893393089",
            "extra": "mean: 957.8412903225958 usec\nrounds: 1395"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 990.6708533645094,
            "unit": "iter/sec",
            "range": "stddev: 0.00037691272306061813",
            "extra": "mean: 1.0094169992019115 msec\nrounds: 1253"
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
        "date": 1646752741369,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 205.12529836069172,
            "unit": "iter/sec",
            "range": "stddev: 0.000013290025116618613",
            "extra": "mean: 4.875069082125614 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 268.3568992281225,
            "unit": "iter/sec",
            "range": "stddev: 0.000012045432547829764",
            "extra": "mean: 3.726380811808117 msec\nrounds: 271"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 409.25189345565053,
            "unit": "iter/sec",
            "range": "stddev: 0.000011671012495974062",
            "extra": "mean: 2.443482891566309 msec\nrounds: 415"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 829.5598595187836,
            "unit": "iter/sec",
            "range": "stddev: 0.000018640486794128842",
            "extra": "mean: 1.205458519388928 msec\nrounds: 851"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 189.8377374363174,
            "unit": "iter/sec",
            "range": "stddev: 0.000019158753574331403",
            "extra": "mean: 5.267656544502686 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 247.50828459730337,
            "unit": "iter/sec",
            "range": "stddev: 0.000028566866295627956",
            "extra": "mean: 4.0402687999999785 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 393.16023378349655,
            "unit": "iter/sec",
            "range": "stddev: 0.00001153417098408196",
            "extra": "mean: 2.543492230576592 msec\nrounds: 399"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 766.3462440868835,
            "unit": "iter/sec",
            "range": "stddev: 0.000009118737872492446",
            "extra": "mean: 1.3048931964056527 msec\nrounds: 779"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.254442302127053,
            "unit": "iter/sec",
            "range": "stddev: 0.00003371317751933793",
            "extra": "mean: 38.08879230769199 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.71733309364465,
            "unit": "iter/sec",
            "range": "stddev: 0.00004529071467797214",
            "extra": "mean: 36.078507142856814 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 302.37408120521883,
            "unit": "iter/sec",
            "range": "stddev: 0.000013111747035335875",
            "extra": "mean: 3.3071617647059774 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 495.07699781358065,
            "unit": "iter/sec",
            "range": "stddev: 0.000012780492613861886",
            "extra": "mean: 2.0198878243512057 msec\nrounds: 501"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1516.4968137850672,
            "unit": "iter/sec",
            "range": "stddev: 0.000006819457457765891",
            "extra": "mean: 659.4145077720749 usec\nrounds: 1544"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1350.5646069320076,
            "unit": "iter/sec",
            "range": "stddev: 0.000006294106635437727",
            "extra": "mean: 740.4310722103379 usec\nrounds: 1371"
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
          "id": "2858218eba7d2ac146318094e7fd690fd168381c",
          "message": "Merge pull request #461 from TeoZosa/dependabot/pip/emoji-1.7.0",
          "timestamp": "2022-03-09T14:30:33Z",
          "tree_id": "ae06e54c5b988ddb9315ab2c030f6fd225cc35b1"
        },
        "date": 1646837186230,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 181.97206539242046,
            "unit": "iter/sec",
            "range": "stddev: 0.00013271125330140344",
            "extra": "mean: 5.495348958333317 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 238.41838459064877,
            "unit": "iter/sec",
            "range": "stddev: 0.00009961553772611356",
            "extra": "mean: 4.194307421874973 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 368.7659151605471,
            "unit": "iter/sec",
            "range": "stddev: 0.00007779193475160968",
            "extra": "mean: 2.7117473684210673 msec\nrounds: 399"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 773.1384674106208,
            "unit": "iter/sec",
            "range": "stddev: 0.000044740657968153996",
            "extra": "mean: 1.293429368932035 msec\nrounds: 824"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 169.13461462200067,
            "unit": "iter/sec",
            "range": "stddev: 0.00013057513690497161",
            "extra": "mean: 5.912450282485949 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 219.96723428240546,
            "unit": "iter/sec",
            "range": "stddev: 0.00011973520581122257",
            "extra": "mean: 4.546131623931533 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 354.675195078165,
            "unit": "iter/sec",
            "range": "stddev: 0.0000870810821686182",
            "extra": "mean: 2.8194810741687624 msec\nrounds: 391"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 696.9674952284258,
            "unit": "iter/sec",
            "range": "stddev: 0.000045301465252207906",
            "extra": "mean: 1.4347871412170485 msec\nrounds: 871"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.28368669238371,
            "unit": "iter/sec",
            "range": "stddev: 0.0003570266209170696",
            "extra": "mean: 42.948524999999606 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.79033327727413,
            "unit": "iter/sec",
            "range": "stddev: 0.0005356970758418585",
            "extra": "mean: 40.338303999999994 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 268.387733229857,
            "unit": "iter/sec",
            "range": "stddev: 0.00010037149162801548",
            "extra": "mean: 3.7259527027025623 msec\nrounds: 296"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 453.3164688482502,
            "unit": "iter/sec",
            "range": "stddev: 0.00007676125325826095",
            "extra": "mean: 2.2059644171779573 msec\nrounds: 489"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1420.9794306374597,
            "unit": "iter/sec",
            "range": "stddev: 0.000027427805262758198",
            "extra": "mean: 703.739954596946 usec\nrounds: 1762"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1226.0264202066041,
            "unit": "iter/sec",
            "range": "stddev: 0.00003210341123081601",
            "extra": "mean: 815.643108108131 usec\nrounds: 1480"
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
          "id": "41ee0d4379033b9cc717a1a72422f65271db6058",
          "message": "Merge pull request #464 from TeoZosa/dependabot/pip/importlib-metadata-4.11.3",
          "timestamp": "2022-03-14T14:24:15Z",
          "tree_id": "18c97bbfc50c9ec2f911ca5cb6a5ce4ec2706217"
        },
        "date": 1647269921403,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 209.46439953040107,
            "unit": "iter/sec",
            "range": "stddev: 0.000013699796353981321",
            "extra": "mean: 4.774080952380946 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 271.7255754160951,
            "unit": "iter/sec",
            "range": "stddev: 0.00001200937913306971",
            "extra": "mean: 3.68018357664233 msec\nrounds: 274"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 414.12978986895524,
            "unit": "iter/sec",
            "range": "stddev: 0.000010830009451772675",
            "extra": "mean: 2.414701923076903 msec\nrounds: 416"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 839.1277085478091,
            "unit": "iter/sec",
            "range": "stddev: 0.000009862147815252056",
            "extra": "mean: 1.191713716295456 msec\nrounds: 853"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 192.61433249205248,
            "unit": "iter/sec",
            "range": "stddev: 0.000026943522688854315",
            "extra": "mean: 5.191721649484528 msec\nrounds: 194"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 250.7434939467076,
            "unit": "iter/sec",
            "range": "stddev: 0.000022546996706337717",
            "extra": "mean: 3.9881393700788808 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 397.30433947264896,
            "unit": "iter/sec",
            "range": "stddev: 0.000012431233818431801",
            "extra": "mean: 2.516962189054674 msec\nrounds: 402"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 773.6228828063912,
            "unit": "iter/sec",
            "range": "stddev: 0.000011756703456942698",
            "extra": "mean: 1.2926194690265675 msec\nrounds: 791"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.81971702147133,
            "unit": "iter/sec",
            "range": "stddev: 0.00021393360753605974",
            "extra": "mean: 40.29054799999969 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.805633063757803,
            "unit": "iter/sec",
            "range": "stddev: 0.00011628870590770585",
            "extra": "mean: 35.96393571428561 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 304.71825749910903,
            "unit": "iter/sec",
            "range": "stddev: 0.00005994372322999887",
            "extra": "mean: 3.2817200000000786 msec\nrounds: 310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 503.7149968695557,
            "unit": "iter/sec",
            "range": "stddev: 0.000010097634857224842",
            "extra": "mean: 1.9852496078431523 msec\nrounds: 510"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1507.277760322392,
            "unit": "iter/sec",
            "range": "stddev: 0.0000064661662377131215",
            "extra": "mean: 663.4477243173214 usec\nrounds: 1538"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1328.6045000662277,
            "unit": "iter/sec",
            "range": "stddev: 0.000005378097734661215",
            "extra": "mean: 752.6694362017835 usec\nrounds: 1348"
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
          "id": "25ff13935bcb53199910f7601f466aa1c5e403ed",
          "message": "Merge pull request #468 from TeoZosa/dependabot/pip/sentry-sdk-1.5.8",
          "timestamp": "2022-03-18T13:26:32Z",
          "tree_id": "b39d56fd45b1e4e7d18f819f069ccfee424b0891"
        },
        "date": 1647612589078,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 133.39156626080228,
            "unit": "iter/sec",
            "range": "stddev: 0.0007548031137070114",
            "extra": "mean: 7.496725827814607 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 173.07542914331933,
            "unit": "iter/sec",
            "range": "stddev: 0.0006637645358459383",
            "extra": "mean: 5.777827649769545 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 265.8934371152648,
            "unit": "iter/sec",
            "range": "stddev: 0.00048665273329260867",
            "extra": "mean: 3.7609051612902347 msec\nrounds: 310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 582.8338570274841,
            "unit": "iter/sec",
            "range": "stddev: 0.0003270093022364417",
            "extra": "mean: 1.715754820936636 msec\nrounds: 726"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.84023205624835,
            "unit": "iter/sec",
            "range": "stddev: 0.0006586030938216819",
            "extra": "mean: 8.207469594594528 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 158.0664260983482,
            "unit": "iter/sec",
            "range": "stddev: 0.0007633190000215096",
            "extra": "mean: 6.326454166666643 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 245.57638317047116,
            "unit": "iter/sec",
            "range": "stddev: 0.0005054239323981428",
            "extra": "mean: 4.07205280528068 msec\nrounds: 303"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 485.03725136690025,
            "unit": "iter/sec",
            "range": "stddev: 0.0007280313620592742",
            "extra": "mean: 2.0616973174366824 msec\nrounds: 671"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.871144321928465,
            "unit": "iter/sec",
            "range": "stddev: 0.0032671812778865836",
            "extra": "mean: 52.99095714285803 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.88006650472673,
            "unit": "iter/sec",
            "range": "stddev: 0.0021745309094682815",
            "extra": "mean: 43.70616666666649 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 191.99631367077473,
            "unit": "iter/sec",
            "range": "stddev: 0.0006883368226195033",
            "extra": "mean: 5.208433333333409 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 352.5424291194759,
            "unit": "iter/sec",
            "range": "stddev: 0.0004392788904396075",
            "extra": "mean: 2.836538009049407 msec\nrounds: 442"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1033.2942440754557,
            "unit": "iter/sec",
            "range": "stddev: 0.00021541520737296577",
            "extra": "mean: 967.7785449146231 usec\nrounds: 1347"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 933.7267798525603,
            "unit": "iter/sec",
            "range": "stddev: 0.00021199352289593234",
            "extra": "mean: 1.0709771012007439 msec\nrounds: 1166"
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
          "id": "14795ab9dc6329b6256d11010f1cf1acc0a27b12",
          "message": "Merge pull request #466 from TeoZosa/dependabot/pip/mypy-0.941\n\n⬆️ Bump mypy from 0.931 to 0.941",
          "timestamp": "2022-03-22T05:07:51Z",
          "tree_id": "73dc8c75e1fbae17bb0859de30ab3c372594435e"
        },
        "date": 1647926041870,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 205.01831348369868,
            "unit": "iter/sec",
            "range": "stddev: 0.00001268229688514952",
            "extra": "mean: 4.8776130434782425 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 270.7173892252117,
            "unit": "iter/sec",
            "range": "stddev: 0.000010209448893800683",
            "extra": "mean: 3.693889051094878 msec\nrounds: 274"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 410.402129130812,
            "unit": "iter/sec",
            "range": "stddev: 0.000010648000301331663",
            "extra": "mean: 2.436634532374122 msec\nrounds: 417"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 841.7949829019283,
            "unit": "iter/sec",
            "range": "stddev: 0.000007483196173619379",
            "extra": "mean: 1.1879377049179956 msec\nrounds: 854"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 189.1311384813285,
            "unit": "iter/sec",
            "range": "stddev: 0.000015737652378813953",
            "extra": "mean: 5.287336649214548 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 249.17716933545066,
            "unit": "iter/sec",
            "range": "stddev: 0.000043542680703750125",
            "extra": "mean: 4.013208764940124 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 394.34210986668086,
            "unit": "iter/sec",
            "range": "stddev: 0.000010317642453462858",
            "extra": "mean: 2.535869172932305 msec\nrounds: 399"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 780.4874231982518,
            "unit": "iter/sec",
            "range": "stddev: 0.000009226578723486377",
            "extra": "mean: 1.2812506265664574 msec\nrounds: 798"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.407696493801385,
            "unit": "iter/sec",
            "range": "stddev: 0.00003815824712104766",
            "extra": "mean: 37.86774814814793 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.898180012408798,
            "unit": "iter/sec",
            "range": "stddev: 0.00010184633324482559",
            "extra": "mean: 35.84463214285703 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 301.26536391620806,
            "unit": "iter/sec",
            "range": "stddev: 0.000012491108960510842",
            "extra": "mean: 3.3193327868852966 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 493.2029544924098,
            "unit": "iter/sec",
            "range": "stddev: 0.000011989247637973661",
            "extra": "mean: 2.0275628742515766 msec\nrounds: 501"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1546.3532880896857,
            "unit": "iter/sec",
            "range": "stddev: 0.000005761083494491831",
            "extra": "mean: 646.682752060732 usec\nrounds: 1577"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1339.6736044748084,
            "unit": "iter/sec",
            "range": "stddev: 0.000007059497470764969",
            "extra": "mean: 746.450476190452 usec\nrounds: 1365"
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
          "id": "45b5c6c2800bc9b0ba2bf84ed91d944e7b3ddf23",
          "message": "Merge pull request #471 from TeoZosa/dependabot/pip/rich-12.0.1\n\n⬆️ Bump rich from 11.2.0 to 12.0.1",
          "timestamp": "2022-03-22T18:02:47Z",
          "tree_id": "2e563f16bf2d6ef234ad4c6c0c097d1dbd2396ea"
        },
        "date": 1647972916767,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 171.2145702802963,
            "unit": "iter/sec",
            "range": "stddev: 0.000016165000355783588",
            "extra": "mean: 5.840624418604647 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 224.34290506667804,
            "unit": "iter/sec",
            "range": "stddev: 0.000011944927865191662",
            "extra": "mean: 4.457462114537498 msec\nrounds: 227"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 341.54026541935633,
            "unit": "iter/sec",
            "range": "stddev: 0.00001240045202733054",
            "extra": "mean: 2.9279124637681044 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 725.3950150381626,
            "unit": "iter/sec",
            "range": "stddev: 0.000009280594718686675",
            "extra": "mean: 1.3785592391304076 msec\nrounds: 736"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 156.56560852097334,
            "unit": "iter/sec",
            "range": "stddev: 0.00001852228125382653",
            "extra": "mean: 6.387098734177253 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 205.6530869714858,
            "unit": "iter/sec",
            "range": "stddev: 0.000014913377532836669",
            "extra": "mean: 4.86255769230759 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 327.54292686834503,
            "unit": "iter/sec",
            "range": "stddev: 0.000011140125713018317",
            "extra": "mean: 3.0530349397590477 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 657.2599983583141,
            "unit": "iter/sec",
            "range": "stddev: 0.000009214068545701765",
            "extra": "mean: 1.5214679160420117 msec\nrounds: 667"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.22151371019099,
            "unit": "iter/sec",
            "range": "stddev: 0.000034370582145388736",
            "extra": "mean: 45.00143478260848 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.33916360682172,
            "unit": "iter/sec",
            "range": "stddev: 0.000053844604645277153",
            "extra": "mean: 44.764433333333464 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 249.06098080213403,
            "unit": "iter/sec",
            "range": "stddev: 0.000010579516510930324",
            "extra": "mean: 4.015080952381087 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 419.28600932572533,
            "unit": "iter/sec",
            "range": "stddev: 0.000016412758843756178",
            "extra": "mean: 2.3850068396227906 msec\nrounds: 424"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1308.7717874393404,
            "unit": "iter/sec",
            "range": "stddev: 0.000006968644352304521",
            "extra": "mean: 764.0751501501545 usec\nrounds: 1332"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1144.7009043922155,
            "unit": "iter/sec",
            "range": "stddev: 0.000008070400502767712",
            "extra": "mean: 873.5906437769041 usec\nrounds: 1165"
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
          "id": "5493325a08df9080a9004af4aff59d62b4a40108",
          "message": "Merge pull request #472 from TeoZosa/ci/add-py310-support\n\n🚀 Add Python 3.10 support",
          "timestamp": "2022-03-22T20:39:19Z",
          "tree_id": "7cbb986ac7d1edef643a9277cf4ab0163249570c"
        },
        "date": 1647981866097,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 200.96763440997532,
            "unit": "iter/sec",
            "range": "stddev: 0.000012537225125712745",
            "extra": "mean: 4.975925615763548 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 264.13067056765345,
            "unit": "iter/sec",
            "range": "stddev: 0.00001286590647469523",
            "extra": "mean: 3.7860048507462665 msec\nrounds: 268"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 399.14754606436554,
            "unit": "iter/sec",
            "range": "stddev: 0.000010613098919320758",
            "extra": "mean: 2.505339215686278 msec\nrounds: 408"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 858.1243588697664,
            "unit": "iter/sec",
            "range": "stddev: 0.000006900386749414302",
            "extra": "mean: 1.1653322617680935 msec\nrounds: 871"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 188.66761547050197,
            "unit": "iter/sec",
            "range": "stddev: 0.000013566839181434546",
            "extra": "mean: 5.300326701570833 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 246.3696589729384,
            "unit": "iter/sec",
            "range": "stddev: 0.000011634456600354246",
            "extra": "mean: 4.058941365461895 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 384.3397270733373,
            "unit": "iter/sec",
            "range": "stddev: 0.000011101888423262552",
            "extra": "mean: 2.601864781491054 msec\nrounds: 389"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 793.7205283660035,
            "unit": "iter/sec",
            "range": "stddev: 0.000007389952646976253",
            "extra": "mean: 1.2598892988929677 msec\nrounds: 813"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.4113954384233,
            "unit": "iter/sec",
            "range": "stddev: 0.00018687916758125062",
            "extra": "mean: 35.197144827585966 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.650922652702096,
            "unit": "iter/sec",
            "range": "stddev: 0.000027210298295230376",
            "extra": "mean: 33.72576333333323 msec\nrounds: 30"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 297.9255277240767,
            "unit": "iter/sec",
            "range": "stddev: 0.000009807782601548471",
            "extra": "mean: 3.356543521594929 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 531.1800747408347,
            "unit": "iter/sec",
            "range": "stddev: 0.000012541575119078941",
            "extra": "mean: 1.8826007366483102 msec\nrounds: 543"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1519.041583935116,
            "unit": "iter/sec",
            "range": "stddev: 0.000004581245209187913",
            "extra": "mean: 658.3098254686843 usec\nrounds: 1547"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1353.0366273476404,
            "unit": "iter/sec",
            "range": "stddev: 0.000004917238939740466",
            "extra": "mean: 739.0782923299729 usec\nrounds: 1382"
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
          "id": "c66306bfef5e7f33528367159760ead762a87a63",
          "message": ":bookmark: Bump version number to `0.17.4`",
          "timestamp": "2022-03-22T21:18:08Z",
          "tree_id": "4bbf1f0cae4fc4d4ae40425118b939cf456324a9"
        },
        "date": 1647984142160,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 187.66294678015436,
            "unit": "iter/sec",
            "range": "stddev: 0.00010938730984466756",
            "extra": "mean: 5.328702427184478 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 240.73294640042187,
            "unit": "iter/sec",
            "range": "stddev: 0.00011665434360988188",
            "extra": "mean: 4.153980645161278 msec\nrounds: 279"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 379.55973760987484,
            "unit": "iter/sec",
            "range": "stddev: 0.00007808312554103818",
            "extra": "mean: 2.63463139240505 msec\nrounds: 395"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 796.9092153186837,
            "unit": "iter/sec",
            "range": "stddev: 0.000043395312368607516",
            "extra": "mean: 1.2548480815347334 msec\nrounds: 834"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 174.00236857377988,
            "unit": "iter/sec",
            "range": "stddev: 0.00016943840663697816",
            "extra": "mean: 5.747048205128216 msec\nrounds: 195"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 226.0092321183834,
            "unit": "iter/sec",
            "range": "stddev: 0.00013089108682251254",
            "extra": "mean: 4.42459801587309 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 364.2469775189237,
            "unit": "iter/sec",
            "range": "stddev: 0.00008123756171627336",
            "extra": "mean: 2.7453899736149414 msec\nrounds: 379"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 722.0096765894249,
            "unit": "iter/sec",
            "range": "stddev: 0.00004958382262711175",
            "extra": "mean: 1.3850229885058118 msec\nrounds: 870"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.206177765134424,
            "unit": "iter/sec",
            "range": "stddev: 0.0004703081186131245",
            "extra": "mean: 41.31176800000034 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.963661070677684,
            "unit": "iter/sec",
            "range": "stddev: 0.0011244221209340498",
            "extra": "mean: 40.0582269230774 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 276.23778548575234,
            "unit": "iter/sec",
            "range": "stddev: 0.00009521736342823847",
            "extra": "mean: 3.6200695652173103 msec\nrounds: 322"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 460.7635317473994,
            "unit": "iter/sec",
            "range": "stddev: 0.00007107840088664456",
            "extra": "mean: 2.170310649819877 msec\nrounds: 554"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1462.7641096650045,
            "unit": "iter/sec",
            "range": "stddev: 0.000028630825612053294",
            "extra": "mean: 683.637227214315 usec\nrounds: 1558"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1279.4144223741966,
            "unit": "iter/sec",
            "range": "stddev: 0.000029291561797519727",
            "extra": "mean: 781.6075718017231 usec\nrounds: 1532"
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
          "id": "4ce993d3dd1a522b6763a156dc617de38600d7d8",
          "message": "Merge pull request #470 from TeoZosa/dependabot/github_actions/actions/cache-3\n\n⬆️ Bump actions/cache from 2 to 3",
          "timestamp": "2022-03-22T21:44:41Z",
          "tree_id": "92b10ada6622425beb66f34b8a3d0a979d79488f"
        },
        "date": 1647985748969,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 175.58716495099634,
            "unit": "iter/sec",
            "range": "stddev: 0.0001002294080981019",
            "extra": "mean: 5.695177094972086 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 231.38271718708947,
            "unit": "iter/sec",
            "range": "stddev: 0.00001706504636918401",
            "extra": "mean: 4.321843965517219 msec\nrounds: 232"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 358.2613693851778,
            "unit": "iter/sec",
            "range": "stddev: 0.00001331187308169895",
            "extra": "mean: 2.791258241758322 msec\nrounds: 364"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 750.5307253596782,
            "unit": "iter/sec",
            "range": "stddev: 0.000010795012291281271",
            "extra": "mean: 1.3323904887714866 msec\nrounds: 757"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 178.9542039736478,
            "unit": "iter/sec",
            "range": "stddev: 0.0005142648215538668",
            "extra": "mean: 5.588021839080443 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 238.89738000157448,
            "unit": "iter/sec",
            "range": "stddev: 0.00034274124725223765",
            "extra": "mean: 4.185897727272729 msec\nrounds: 308"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 393.197353504904,
            "unit": "iter/sec",
            "range": "stddev: 0.00023709520112333377",
            "extra": "mean: 2.543252112676104 msec\nrounds: 497"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 785.2766511598986,
            "unit": "iter/sec",
            "range": "stddev: 0.00013630142905261594",
            "extra": "mean: 1.27343656343652 msec\nrounds: 1001"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.612944003704463,
            "unit": "iter/sec",
            "range": "stddev: 0.0014079909019594102",
            "extra": "mean: 37.57570000000009 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.10720419908217,
            "unit": "iter/sec",
            "range": "stddev: 0.0013889809017912573",
            "extra": "mean: 38.303603571429385 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 296.2474123511164,
            "unit": "iter/sec",
            "range": "stddev: 0.0002811191399186841",
            "extra": "mean: 3.3755569105690166 msec\nrounds: 369"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 508.34369197196736,
            "unit": "iter/sec",
            "range": "stddev: 0.00020276114013964146",
            "extra": "mean: 1.967173028391085 msec\nrounds: 634"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1536.014245382372,
            "unit": "iter/sec",
            "range": "stddev: 0.00005853326595385926",
            "extra": "mean: 651.035628742533 usec\nrounds: 2004"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1205.6968200164774,
            "unit": "iter/sec",
            "range": "stddev: 0.00004024079731170428",
            "extra": "mean: 829.3959006927909 usec\nrounds: 1732"
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
          "id": "47a9426392fe50bc6f0ac78abba8b563823ebe2d",
          "message": "Merge pull request #475 from TeoZosa/dependabot/pip/python-dotenv-0.20.0",
          "timestamp": "2022-03-25T14:49:47Z",
          "tree_id": "76c9f6e593a60fca0d5cb1e66e65d4a16f66e046"
        },
        "date": 1648220479694,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 176.24022968226737,
            "unit": "iter/sec",
            "range": "stddev: 0.00010922364895976384",
            "extra": "mean: 5.674073404255307 msec\nrounds: 188"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 232.50521199183441,
            "unit": "iter/sec",
            "range": "stddev: 0.00010870558458302379",
            "extra": "mean: 4.300978853046614 msec\nrounds: 279"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 358.29195061303784,
            "unit": "iter/sec",
            "range": "stddev: 0.00009444849953596972",
            "extra": "mean: 2.791019999999998 msec\nrounds: 450"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 750.4660324894692,
            "unit": "iter/sec",
            "range": "stddev: 0.00004239049784081908",
            "extra": "mean: 1.3325053456220652 msec\nrounds: 1085"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 163.79063802158143,
            "unit": "iter/sec",
            "range": "stddev: 0.0001475227264010295",
            "extra": "mean: 6.1053550561799375 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 215.22641118533858,
            "unit": "iter/sec",
            "range": "stddev: 0.00010333831099842903",
            "extra": "mean: 4.64626991869909 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 351.5469734756608,
            "unit": "iter/sec",
            "range": "stddev: 0.0001140541651584117",
            "extra": "mean: 2.8445700729926338 msec\nrounds: 411"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 699.9811710491605,
            "unit": "iter/sec",
            "range": "stddev: 0.00006437657213784236",
            "extra": "mean: 1.4286098560353544 msec\nrounds: 903"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.749995012501362,
            "unit": "iter/sec",
            "range": "stddev: 0.0008983603960922299",
            "extra": "mean: 42.105271999999445 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.8255693434011,
            "unit": "iter/sec",
            "range": "stddev: 0.0005706343230129428",
            "extra": "mean: 40.28104999999972 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 259.7239724822206,
            "unit": "iter/sec",
            "range": "stddev: 0.00007602498682455794",
            "extra": "mean: 3.850241433021571 msec\nrounds: 321"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 449.7110201954992,
            "unit": "iter/sec",
            "range": "stddev: 0.00010074060292706381",
            "extra": "mean: 2.223650200000165 msec\nrounds: 500"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1392.6850919877663,
            "unit": "iter/sec",
            "range": "stddev: 0.00002360314376099922",
            "extra": "mean: 718.0374125874425 usec\nrounds: 1716"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1204.8786766086375,
            "unit": "iter/sec",
            "range": "stddev: 0.000028836952180275544",
            "extra": "mean: 829.9590817016466 usec\nrounds: 1481"
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
          "id": "d1d8ba4fa07067edf22bda4e4b8a86b699d73a5c",
          "message": "Merge pull request #477 from TeoZosa/dependabot/pip/pylint-2.13.2",
          "timestamp": "2022-03-28T14:52:21Z",
          "tree_id": "fc0eb5a24ee1b51ce1ff7abcbd5d00571f2a6694"
        },
        "date": 1648484488726,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 230.24173367420502,
            "unit": "iter/sec",
            "range": "stddev: 0.00003135747524370535",
            "extra": "mean: 4.3432612500000225 msec\nrounds: 240"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 304.65730754403165,
            "unit": "iter/sec",
            "range": "stddev: 0.000024564540738554147",
            "extra": "mean: 3.2823765432098537 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 463.6249268653041,
            "unit": "iter/sec",
            "range": "stddev: 0.00002354629445900715",
            "extra": "mean: 2.156915950920231 msec\nrounds: 489"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 973.3760490243044,
            "unit": "iter/sec",
            "range": "stddev: 0.000012037481671666369",
            "extra": "mean: 1.0273521739130351 msec\nrounds: 1058"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 213.1836378131817,
            "unit": "iter/sec",
            "range": "stddev: 0.00003347427590657472",
            "extra": "mean: 4.690791517857134 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 280.2034717114474,
            "unit": "iter/sec",
            "range": "stddev: 0.000022893699252706904",
            "extra": "mean: 3.5688351535836667 msec\nrounds: 293"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 442.45518098108005,
            "unit": "iter/sec",
            "range": "stddev: 0.000021061502167741845",
            "extra": "mean: 2.260115923566869 msec\nrounds: 471"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 905.2081492022752,
            "unit": "iter/sec",
            "range": "stddev: 0.000015053742995130506",
            "extra": "mean: 1.1047182914573417 msec\nrounds: 995"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.819171755342158,
            "unit": "iter/sec",
            "range": "stddev: 0.00009685394621028599",
            "extra": "mean: 43.82279999999963 msec\nrounds: 30"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 31.25840680198449,
            "unit": "iter/sec",
            "range": "stddev: 0.00006390121376733185",
            "extra": "mean: 31.99139375000115 msec\nrounds: 32"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 341.69634345154583,
            "unit": "iter/sec",
            "range": "stddev: 0.00002356367234762967",
            "extra": "mean: 2.9265750692524013 msec\nrounds: 361"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 572.2361585822913,
            "unit": "iter/sec",
            "range": "stddev: 0.000013289203995737418",
            "extra": "mean: 1.7475302547771339 msec\nrounds: 628"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1793.8155120668018,
            "unit": "iter/sec",
            "range": "stddev: 0.000010072015641683528",
            "extra": "mean: 557.4709290186805 usec\nrounds: 1916"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1557.5232481349299,
            "unit": "iter/sec",
            "range": "stddev: 0.000010491012794311263",
            "extra": "mean: 642.044991108453 usec\nrounds: 1687"
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
          "id": "097533b8084df114473f6349f70824b54d429de4",
          "message": "Merge pull request #478 from TeoZosa/dependabot/pip/sphinx-4.5.0",
          "timestamp": "2022-03-28T15:36:53Z",
          "tree_id": "9f0291af7a09c2fe2b924256eef0466a67f42a33"
        },
        "date": 1648486041938,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 127.24743739365725,
            "unit": "iter/sec",
            "range": "stddev: 0.0013387639140252392",
            "extra": "mean: 7.858704430379717 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 171.54007476742606,
            "unit": "iter/sec",
            "range": "stddev: 0.0009772702165469264",
            "extra": "mean: 5.829541588785008 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 255.63447855089916,
            "unit": "iter/sec",
            "range": "stddev: 0.0004245215848928182",
            "extra": "mean: 3.911835389610368 msec\nrounds: 308"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 570.0270003333598,
            "unit": "iter/sec",
            "range": "stddev: 0.00020969359061020286",
            "extra": "mean: 1.7543028653295123 msec\nrounds: 698"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.93766222238023,
            "unit": "iter/sec",
            "range": "stddev: 0.0006140948979857273",
            "extra": "mean: 8.003991608391637 msec\nrounds: 143"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 170.24922040799166,
            "unit": "iter/sec",
            "range": "stddev: 0.0006365299232543344",
            "extra": "mean: 5.873742021276587 msec\nrounds: 188"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 250.72597706659658,
            "unit": "iter/sec",
            "range": "stddev: 0.00038712277840654825",
            "extra": "mean: 3.9884179999999962 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 512.6610370928461,
            "unit": "iter/sec",
            "range": "stddev: 0.000461782491908836",
            "extra": "mean: 1.9506065950919804 msec\nrounds: 652"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 21.00993165731861,
            "unit": "iter/sec",
            "range": "stddev: 0.0014599145316891615",
            "extra": "mean: 47.59653749999989 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.52118827664463,
            "unit": "iter/sec",
            "range": "stddev: 0.001379227733991696",
            "extra": "mean: 44.40263043478216 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 192.3199764820101,
            "unit": "iter/sec",
            "range": "stddev: 0.0008555451219215445",
            "extra": "mean: 5.199667857142971 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 337.55700860893535,
            "unit": "iter/sec",
            "range": "stddev: 0.0003795599002697146",
            "extra": "mean: 2.9624625603863977 msec\nrounds: 414"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1001.5372659875264,
            "unit": "iter/sec",
            "range": "stddev: 0.00020799842401151853",
            "extra": "mean: 998.4650935719195 usec\nrounds: 1229"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 867.8015053221429,
            "unit": "iter/sec",
            "range": "stddev: 0.000389358370910522",
            "extra": "mean: 1.1523372497824633 msec\nrounds: 1149"
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
          "id": "69ccb94a847cb22d144b8e3b156d890a587e14db",
          "message": "Merge pull request #479 from TeoZosa/dependabot/pip/sphinxcontrib-confluencebuilder-1.8.0",
          "timestamp": "2022-03-28T16:11:43Z",
          "tree_id": "f132adca5011305c7f5c8acb46a5cb14cb10b4a2"
        },
        "date": 1648486634580,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 166.36928971665517,
            "unit": "iter/sec",
            "range": "stddev: 0.00017478235656693503",
            "extra": "mean: 6.010724705882363 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 219.21944723617008,
            "unit": "iter/sec",
            "range": "stddev: 0.000015159032724473567",
            "extra": "mean: 4.561639090909107 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 337.21679845975467,
            "unit": "iter/sec",
            "range": "stddev: 0.000014180530553661407",
            "extra": "mean: 2.965451319648139 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 701.2028780832705,
            "unit": "iter/sec",
            "range": "stddev: 0.000010661690054722532",
            "extra": "mean: 1.4261207865168604 msec\nrounds: 712"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 154.8584301107531,
            "unit": "iter/sec",
            "range": "stddev: 0.00002244553716330774",
            "extra": "mean: 6.457510897435876 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 202.84057947496814,
            "unit": "iter/sec",
            "range": "stddev: 0.0000157408093320026",
            "extra": "mean: 4.929979999999983 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 323.79521363132915,
            "unit": "iter/sec",
            "range": "stddev: 0.000013180671206059462",
            "extra": "mean: 3.0883717791412217 msec\nrounds: 326"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 649.8093006614343,
            "unit": "iter/sec",
            "range": "stddev: 0.000010548354440169814",
            "extra": "mean: 1.5389130303030598 msec\nrounds: 660"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.27300467287663,
            "unit": "iter/sec",
            "range": "stddev: 0.00007204613601178931",
            "extra": "mean: 44.89739999999949 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.514507716432718,
            "unit": "iter/sec",
            "range": "stddev: 0.00005783498123474562",
            "extra": "mean: 42.52693749999992 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 247.43051786320123,
            "unit": "iter/sec",
            "range": "stddev: 0.00003782832246548448",
            "extra": "mean: 4.041538645418337 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 415.69042773560477,
            "unit": "iter/sec",
            "range": "stddev: 0.000012760755870833225",
            "extra": "mean: 2.4056363420425906 msec\nrounds: 421"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1297.1689020301526,
            "unit": "iter/sec",
            "range": "stddev: 0.000008458968858921384",
            "extra": "mean: 770.9096313016261 usec\nrounds: 1329"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1134.6416518494732,
            "unit": "iter/sec",
            "range": "stddev: 0.000007130035131785093",
            "extra": "mean: 881.3355285961815 usec\nrounds: 1154"
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
          "id": "6737c84aa532f5033982cfab767f64fd57b18230",
          "message": ":arrow_up: Auto-update pre-commit hooks",
          "timestamp": "2022-03-30T01:35:57Z",
          "tree_id": "cd230034bed97b16b1125695feeb9eed3de0758b"
        },
        "date": 1648604919783,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 130.89891601734877,
            "unit": "iter/sec",
            "range": "stddev: 0.0004186758121395386",
            "extra": "mean: 7.639482666666731 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 176.77143562156786,
            "unit": "iter/sec",
            "range": "stddev: 0.00043395573269848877",
            "extra": "mean: 5.65702256410249 msec\nrounds: 195"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 252.67159246917566,
            "unit": "iter/sec",
            "range": "stddev: 0.000359911927952427",
            "extra": "mean: 3.957706484641694 msec\nrounds: 293"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 544.0845327115236,
            "unit": "iter/sec",
            "range": "stddev: 0.00023992182479339294",
            "extra": "mean: 1.8379496932514439 msec\nrounds: 652"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 125.24582801295679,
            "unit": "iter/sec",
            "range": "stddev: 0.0004325176919216352",
            "extra": "mean: 7.984297887324032 msec\nrounds: 142"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 162.2066698352775,
            "unit": "iter/sec",
            "range": "stddev: 0.000762529196574183",
            "extra": "mean: 6.164974603174518 msec\nrounds: 189"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 246.07164200091788,
            "unit": "iter/sec",
            "range": "stddev: 0.0003074458766987666",
            "extra": "mean: 4.063857142857079 msec\nrounds: 294"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 536.8390179851851,
            "unit": "iter/sec",
            "range": "stddev: 0.00019535106848576683",
            "extra": "mean: 1.8627558103975157 msec\nrounds: 654"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.71834242210831,
            "unit": "iter/sec",
            "range": "stddev: 0.001239342390505371",
            "extra": "mean: 48.26640952380975 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.556630533692,
            "unit": "iter/sec",
            "range": "stddev: 0.0014142319961197964",
            "extra": "mean: 46.38943913043585 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 183.93566608998174,
            "unit": "iter/sec",
            "range": "stddev: 0.0003858081702275317",
            "extra": "mean: 5.436683495145513 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 312.15381396720505,
            "unit": "iter/sec",
            "range": "stddev: 0.00033836368744952835",
            "extra": "mean: 3.2035488764044393 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 981.0124632364023,
            "unit": "iter/sec",
            "range": "stddev: 0.00019430602812994005",
            "extra": "mean: 1.0193550413222652 msec\nrounds: 1210"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 915.1451465706953,
            "unit": "iter/sec",
            "range": "stddev: 0.0001978078387773237",
            "extra": "mean: 1.09272283609576 msec\nrounds: 1086"
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
          "id": "d3469794755a31c2696d4fd03de4affb5d26a183",
          "message": "Merge pull request #481 from TeoZosa/dependabot/pip/pylint-2.13.3",
          "timestamp": "2022-03-30T02:32:14Z",
          "tree_id": "606f53627726dad80da32e23cc74f61664f6a686"
        },
        "date": 1648607856041,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 187.57401481567757,
            "unit": "iter/sec",
            "range": "stddev: 0.0003533618265654709",
            "extra": "mean: 5.331228853754957 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 260.5130307366256,
            "unit": "iter/sec",
            "range": "stddev: 0.0003629926847197541",
            "extra": "mean: 3.8385795795795863 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 389.0975618693407,
            "unit": "iter/sec",
            "range": "stddev: 0.00023390259124971303",
            "extra": "mean: 2.570049514563139 msec\nrounds: 515"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 784.974007313297,
            "unit": "iter/sec",
            "range": "stddev: 0.00009488172781694726",
            "extra": "mean: 1.2739275322283155 msec\nrounds: 1086"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 169.97105856430517,
            "unit": "iter/sec",
            "range": "stddev: 0.0002973834074388058",
            "extra": "mean: 5.883354545454395 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 225.7155484414025,
            "unit": "iter/sec",
            "range": "stddev: 0.0002765072709965351",
            "extra": "mean: 4.4303549618320055 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 362.47521750361807,
            "unit": "iter/sec",
            "range": "stddev: 0.000201775412795598",
            "extra": "mean: 2.7588092970522 msec\nrounds: 441"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 733.2720704625841,
            "unit": "iter/sec",
            "range": "stddev: 0.00011633668992796825",
            "extra": "mean: 1.3637502917152575 msec\nrounds: 857"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.276823766039506,
            "unit": "iter/sec",
            "range": "stddev: 0.0012312547662440133",
            "extra": "mean: 41.191549999999815 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.105910147678973,
            "unit": "iter/sec",
            "range": "stddev: 0.0010733720509013348",
            "extra": "mean: 39.83125862068973 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 282.4982328209527,
            "unit": "iter/sec",
            "range": "stddev: 0.0002959219649110832",
            "extra": "mean: 3.5398451523546335 msec\nrounds: 361"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 461.30137643717666,
            "unit": "iter/sec",
            "range": "stddev: 0.00013131540901448627",
            "extra": "mean: 2.1677802215189947 msec\nrounds: 632"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1423.9282917800047,
            "unit": "iter/sec",
            "range": "stddev: 0.00005072841196783073",
            "extra": "mean: 702.2825557809051 usec\nrounds: 1972"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1219.519059206921,
            "unit": "iter/sec",
            "range": "stddev: 0.000060284026006894494",
            "extra": "mean: 819.9953846152442 usec\nrounds: 1690"
          }
        ]
      }
    ]
  }
}