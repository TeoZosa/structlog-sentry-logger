window.BENCHMARK_DATA = {
  "lastUpdate": 1643755239291,
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
      }
    ]
  }
}