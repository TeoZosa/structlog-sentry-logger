window.BENCHMARK_DATA = {
  "lastUpdate": 1643898497999,
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
      }
    ]
  }
}