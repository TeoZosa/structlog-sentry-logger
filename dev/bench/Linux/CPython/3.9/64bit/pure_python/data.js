window.BENCHMARK_DATA = {
  "lastUpdate": 1645453888610,
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
        "date": 1642085089523,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 127.19518047811815,
            "unit": "iter/sec",
            "range": "stddev: 0.0005740660844477691",
            "extra": "mean: 7.861933103448315 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 169.87582508343172,
            "unit": "iter/sec",
            "range": "stddev: 0.0004990693541582656",
            "extra": "mean: 5.886652791878222 msec\nrounds: 197"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 240.86048276552435,
            "unit": "iter/sec",
            "range": "stddev: 0.0005153432206358978",
            "extra": "mean: 4.151781099656317 msec\nrounds: 291"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 532.026024080713,
            "unit": "iter/sec",
            "range": "stddev: 0.00016100332857511815",
            "extra": "mean: 1.879607302533553 msec\nrounds: 671"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.98206690459442,
            "unit": "iter/sec",
            "range": "stddev: 0.00038540520010063383",
            "extra": "mean: 8.475864393939164 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 154.48818742574423,
            "unit": "iter/sec",
            "range": "stddev: 0.0003807744255332403",
            "extra": "mean: 6.472986813186973 msec\nrounds: 182"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 231.14420019831448,
            "unit": "iter/sec",
            "range": "stddev: 0.0002886851906918006",
            "extra": "mean: 4.326303663003577 msec\nrounds: 273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 470.74168314329063,
            "unit": "iter/sec",
            "range": "stddev: 0.00039298479442810693",
            "extra": "mean: 2.1243073129251795 msec\nrounds: 588"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.001813497757126,
            "unit": "iter/sec",
            "range": "stddev: 0.0018504450111620063",
            "extra": "mean: 49.99546666666667 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.526016765023105,
            "unit": "iter/sec",
            "range": "stddev: 0.0014600459844264515",
            "extra": "mean: 46.455413043478906 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 181.75521972293484,
            "unit": "iter/sec",
            "range": "stddev: 0.00032381624570402927",
            "extra": "mean: 5.5019052631577035 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 326.519814032344,
            "unit": "iter/sec",
            "range": "stddev: 0.0002033975736016392",
            "extra": "mean: 3.062601278772452 msec\nrounds: 391"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 954.4249264992188,
            "unit": "iter/sec",
            "range": "stddev: 0.00017832541368164293",
            "extra": "mean: 1.047751344537855 msec\nrounds: 1190"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 795.157680563103,
            "unit": "iter/sec",
            "range": "stddev: 0.00013364230706386677",
            "extra": "mean: 1.2576122000001746 msec\nrounds: 1000"
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
        "date": 1642431457058,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 136.07311355940715,
            "unit": "iter/sec",
            "range": "stddev: 0.000652014969732321",
            "extra": "mean: 7.34899036144578 msec\nrounds: 166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 178.8550786547621,
            "unit": "iter/sec",
            "range": "stddev: 0.00035834974669178457",
            "extra": "mean: 5.591118840579674 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 243.85431333229323,
            "unit": "iter/sec",
            "range": "stddev: 0.000527852328624489",
            "extra": "mean: 4.100809152542357 msec\nrounds: 295"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 593.5658390493811,
            "unit": "iter/sec",
            "range": "stddev: 0.0002217606819345147",
            "extra": "mean: 1.6847330729166272 msec\nrounds: 768"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 125.16673840248399,
            "unit": "iter/sec",
            "range": "stddev: 0.0005695413397156222",
            "extra": "mean: 7.98934295774663 msec\nrounds: 142"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 167.05753172759293,
            "unit": "iter/sec",
            "range": "stddev: 0.0006240341001603791",
            "extra": "mean: 5.985961780104703 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 258.6228373456159,
            "unit": "iter/sec",
            "range": "stddev: 0.0003163362397243029",
            "extra": "mean: 3.866634556574869 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 546.5571045412687,
            "unit": "iter/sec",
            "range": "stddev: 0.00029373540643444604",
            "extra": "mean: 1.829634985422632 msec\nrounds: 686"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 21.544874273012855,
            "unit": "iter/sec",
            "range": "stddev: 0.0024738006438137622",
            "extra": "mean: 46.41475217391274 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.198854830289036,
            "unit": "iter/sec",
            "range": "stddev: 0.0010851161532609258",
            "extra": "mean: 43.10557600000038 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.18850170797643,
            "unit": "iter/sec",
            "range": "stddev: 0.0005424080881270817",
            "extra": "mean: 5.07128961038984 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 344.10845342117915,
            "unit": "iter/sec",
            "range": "stddev: 0.000307143266855759",
            "extra": "mean: 2.9060605459059383 msec\nrounds: 403"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1104.3992792952188,
            "unit": "iter/sec",
            "range": "stddev: 0.000139695558848123",
            "extra": "mean: 905.4696238466925 usec\nrounds: 1409"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 915.9427572909351,
            "unit": "iter/sec",
            "range": "stddev: 0.00017794492704594059",
            "extra": "mean: 1.0917712837838025 msec\nrounds: 1184"
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
        "date": 1642432646011,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 201.15159785217736,
            "unit": "iter/sec",
            "range": "stddev: 0.00001611839270908109",
            "extra": "mean: 4.971374876847271 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 267.0164416614703,
            "unit": "iter/sec",
            "range": "stddev: 0.000011430991769000072",
            "extra": "mean: 3.745087732342053 msec\nrounds: 269"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 399.13794108447735,
            "unit": "iter/sec",
            "range": "stddev: 0.000013837100836418112",
            "extra": "mean: 2.5053995049504714 msec\nrounds: 404"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 822.5189854203704,
            "unit": "iter/sec",
            "range": "stddev: 0.00000896303192940451",
            "extra": "mean: 1.215777407847824 msec\nrounds: 841"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 185.51387943034442,
            "unit": "iter/sec",
            "range": "stddev: 0.00001948778778391132",
            "extra": "mean: 5.390432258064409 msec\nrounds: 186"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 243.19821069388075,
            "unit": "iter/sec",
            "range": "stddev: 0.000011687679197721045",
            "extra": "mean: 4.111872357723566 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 379.413664962548,
            "unit": "iter/sec",
            "range": "stddev: 0.000012825779239305636",
            "extra": "mean: 2.6356457142857788 msec\nrounds: 385"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 735.9357627110455,
            "unit": "iter/sec",
            "range": "stddev: 0.000010471063866432535",
            "extra": "mean: 1.3588142480210401 msec\nrounds: 758"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.47590158534752,
            "unit": "iter/sec",
            "range": "stddev: 0.0001576801082068844",
            "extra": "mean: 37.77019629629637 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.038115013548776,
            "unit": "iter/sec",
            "range": "stddev: 0.0002168408380524056",
            "extra": "mean: 35.665735714286534 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 293.5653441860847,
            "unit": "iter/sec",
            "range": "stddev: 0.000021731419263886385",
            "extra": "mean: 3.406396632996713 msec\nrounds: 297"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 482.0954128323929,
            "unit": "iter/sec",
            "range": "stddev: 0.000018390316188085427",
            "extra": "mean: 2.07427818930039 msec\nrounds: 486"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1465.4594156455448,
            "unit": "iter/sec",
            "range": "stddev: 0.000007193973566096198",
            "extra": "mean: 682.3798662206509 usec\nrounds: 1495"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1233.4993679790334,
            "unit": "iter/sec",
            "range": "stddev: 0.000006533158238069479",
            "extra": "mean: 810.701671974426 usec\nrounds: 1256"
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
        "date": 1642433722911,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 204.26424415883602,
            "unit": "iter/sec",
            "range": "stddev: 0.000015792097796983918",
            "extra": "mean: 4.895619417475724 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 266.2396876330563,
            "unit": "iter/sec",
            "range": "stddev: 0.0000691646020231974",
            "extra": "mean: 3.756014022140252 msec\nrounds: 271"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 404.4760703078062,
            "unit": "iter/sec",
            "range": "stddev: 0.000022013964336199538",
            "extra": "mean: 2.4723341463414643 msec\nrounds: 410"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 825.3189065502102,
            "unit": "iter/sec",
            "range": "stddev: 0.000010685564323219124",
            "extra": "mean: 1.2116528436019327 msec\nrounds: 844"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 186.63369010650513,
            "unit": "iter/sec",
            "range": "stddev: 0.000014899889124950874",
            "extra": "mean: 5.358089417989517 msec\nrounds: 189"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 243.20784999496186,
            "unit": "iter/sec",
            "range": "stddev: 0.000008469585994685583",
            "extra": "mean: 4.111709387755022 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 381.9989052663498,
            "unit": "iter/sec",
            "range": "stddev: 0.000009896385511961399",
            "extra": "mean: 2.617808549222797 msec\nrounds: 386"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 753.1370372711176,
            "unit": "iter/sec",
            "range": "stddev: 0.000009451783252574366",
            "extra": "mean: 1.3277796078431547 msec\nrounds: 765"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.80103181987285,
            "unit": "iter/sec",
            "range": "stddev: 0.000052562925523272526",
            "extra": "mean: 37.31199629629574 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.504046690020978,
            "unit": "iter/sec",
            "range": "stddev: 0.00006308074991554772",
            "extra": "mean: 35.0827379310353 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 295.3206443896843,
            "unit": "iter/sec",
            "range": "stddev: 0.00002410179066273391",
            "extra": "mean: 3.3861499999995615 msec\nrounds: 298"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 484.9718005195684,
            "unit": "iter/sec",
            "range": "stddev: 0.000010626254233183972",
            "extra": "mean: 2.0619755600813545 msec\nrounds: 491"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1465.283418112396,
            "unit": "iter/sec",
            "range": "stddev: 0.000006583379238547027",
            "extra": "mean: 682.4618279569543 usec\nrounds: 1488"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1239.329461234428,
            "unit": "iter/sec",
            "range": "stddev: 0.0000056806041086652795",
            "extra": "mean: 806.8879432624436 usec\nrounds: 1269"
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
        "date": 1643746382704,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.64924674204589,
            "unit": "iter/sec",
            "range": "stddev: 0.0006993829714767863",
            "extra": "mean: 8.572708593749992 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 154.39843137660506,
            "unit": "iter/sec",
            "range": "stddev: 0.0008978616163374906",
            "extra": "mean: 6.476749738219966 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 226.62295736051433,
            "unit": "iter/sec",
            "range": "stddev: 0.0004477291974318443",
            "extra": "mean: 4.412615613382844 msec\nrounds: 269"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 490.4365921505932,
            "unit": "iter/sec",
            "range": "stddev: 0.00023906149610653134",
            "extra": "mean: 2.038999568965565 msec\nrounds: 696"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 103.43144689729603,
            "unit": "iter/sec",
            "range": "stddev: 0.000981518692433423",
            "extra": "mean: 9.66823949579828 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.53398768892708,
            "unit": "iter/sec",
            "range": "stddev: 0.0011237576978728766",
            "extra": "mean: 7.324183647798781 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 214.51718097233345,
            "unit": "iter/sec",
            "range": "stddev: 0.0005117706306115237",
            "extra": "mean: 4.661631275720388 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 432.39979005734796,
            "unit": "iter/sec",
            "range": "stddev: 0.0005139030058325906",
            "extra": "mean: 2.3126745733788927 msec\nrounds: 586"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.99614617265523,
            "unit": "iter/sec",
            "range": "stddev: 0.0024695276919934742",
            "extra": "mean: 55.567452631579485 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.37368180258154,
            "unit": "iter/sec",
            "range": "stddev: 0.0018654230504443273",
            "extra": "mean: 51.61641500000016 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 167.09087798526616,
            "unit": "iter/sec",
            "range": "stddev: 0.000868551543385099",
            "extra": "mean: 5.984767164178637 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 289.59754973904586,
            "unit": "iter/sec",
            "range": "stddev: 0.0003381546192830469",
            "extra": "mean: 3.4530678899082274 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 863.8144150535729,
            "unit": "iter/sec",
            "range": "stddev: 0.0002894545187980277",
            "extra": "mean: 1.157656068911493 msec\nrounds: 1277"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 743.0955600689847,
            "unit": "iter/sec",
            "range": "stddev: 0.0003301358542163085",
            "extra": "mean: 1.3457219417475268 msec\nrounds: 1030"
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
        "date": 1643755076507,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 126.8222718977767,
            "unit": "iter/sec",
            "range": "stddev: 0.0003892398611624104",
            "extra": "mean: 7.885050354609921 msec\nrounds: 141"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 164.01408060881718,
            "unit": "iter/sec",
            "range": "stddev: 0.000733654662628093",
            "extra": "mean: 6.0970375000001145 msec\nrounds: 184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 243.03224423905058,
            "unit": "iter/sec",
            "range": "stddev: 0.0004328180046808125",
            "extra": "mean: 4.114680350877159 msec\nrounds: 285"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 508.3138995726558,
            "unit": "iter/sec",
            "range": "stddev: 0.00022470180823971076",
            "extra": "mean: 1.9672883248730935 msec\nrounds: 591"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.71533047529125,
            "unit": "iter/sec",
            "range": "stddev: 0.0009478951724831617",
            "extra": "mean: 8.567854761904659 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.1330805918005,
            "unit": "iter/sec",
            "range": "stddev: 0.0009343905981992959",
            "extra": "mean: 6.750686585365945 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 233.69121774869964,
            "unit": "iter/sec",
            "range": "stddev: 0.0005125504931347057",
            "extra": "mean: 4.279150965250873 msec\nrounds: 259"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 471.0135988354738,
            "unit": "iter/sec",
            "range": "stddev: 0.00030538053464366203",
            "extra": "mean: 2.123080952380958 msec\nrounds: 546"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.591251853005783,
            "unit": "iter/sec",
            "range": "stddev: 0.00188615408328838",
            "extra": "mean: 51.04319047619079 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.995010821973594,
            "unit": "iter/sec",
            "range": "stddev: 0.0011357963694701425",
            "extra": "mean: 47.63036363636401 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 177.14321142927415,
            "unit": "iter/sec",
            "range": "stddev: 0.0005482486474828564",
            "extra": "mean: 5.645150000000187 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 306.681397948984,
            "unit": "iter/sec",
            "range": "stddev: 0.00032245910256844217",
            "extra": "mean: 3.2607129310345346 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 892.252114691282,
            "unit": "iter/sec",
            "range": "stddev: 0.00023877128393895417",
            "extra": "mean: 1.1207594619666423 msec\nrounds: 1078"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 784.9820157617144,
            "unit": "iter/sec",
            "range": "stddev: 0.0001699895626113288",
            "extra": "mean: 1.2739145355191877 msec\nrounds: 915"
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
        "date": 1643755269606,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 207.58982158300444,
            "unit": "iter/sec",
            "range": "stddev: 0.000030412647306918187",
            "extra": "mean: 4.81719186602871 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 272.39875532589167,
            "unit": "iter/sec",
            "range": "stddev: 0.000010496334962452561",
            "extra": "mean: 3.6710887272727177 msec\nrounds: 275"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 404.5478716468651,
            "unit": "iter/sec",
            "range": "stddev: 0.000014706337629275137",
            "extra": "mean: 2.47189534313732 msec\nrounds: 408"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 833.7856977895036,
            "unit": "iter/sec",
            "range": "stddev: 0.00000849927406968783",
            "extra": "mean: 1.1993489485981308 msec\nrounds: 856"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 191.19928513261894,
            "unit": "iter/sec",
            "range": "stddev: 0.000027376434306244593",
            "extra": "mean: 5.230145077720263 msec\nrounds: 193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 248.0529333053182,
            "unit": "iter/sec",
            "range": "stddev: 0.000009089253675080505",
            "extra": "mean: 4.03139759999992 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 383.0110512508357,
            "unit": "iter/sec",
            "range": "stddev: 0.000051196268400970166",
            "extra": "mean: 2.610890721649427 msec\nrounds: 388"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 749.019298751509,
            "unit": "iter/sec",
            "range": "stddev: 0.00000974678396143436",
            "extra": "mean: 1.3350790849672822 msec\nrounds: 765"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.86700296193773,
            "unit": "iter/sec",
            "range": "stddev: 0.00006902159268140583",
            "extra": "mean: 37.2203777777779 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.459712284085448,
            "unit": "iter/sec",
            "range": "stddev: 0.000065125841617481",
            "extra": "mean: 35.13738965517216 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 296.2660405841076,
            "unit": "iter/sec",
            "range": "stddev: 0.000014275636034042743",
            "extra": "mean: 3.3753446666666065 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 488.8283948662689,
            "unit": "iter/sec",
            "range": "stddev: 0.000011206043304028451",
            "extra": "mean: 2.045707676767784 msec\nrounds: 495"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1469.3746060867816,
            "unit": "iter/sec",
            "range": "stddev: 0.000006534424275209025",
            "extra": "mean: 680.5616456535793 usec\nrounds: 1507"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1228.8399141149316,
            "unit": "iter/sec",
            "range": "stddev: 0.000006652998991127945",
            "extra": "mean: 813.7756501181418 usec\nrounds: 1269"
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
        "date": 1643757231251,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 204.0681884936247,
            "unit": "iter/sec",
            "range": "stddev: 0.00003121986412423954",
            "extra": "mean: 4.900322815533991 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 267.4165422684523,
            "unit": "iter/sec",
            "range": "stddev: 0.000016897989879202472",
            "extra": "mean: 3.7394844444444533 msec\nrounds: 270"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 396.8772669886128,
            "unit": "iter/sec",
            "range": "stddev: 0.000031249941391707214",
            "extra": "mean: 2.5196706467662002 msec\nrounds: 402"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 817.1942382306082,
            "unit": "iter/sec",
            "range": "stddev: 0.000011095511368314433",
            "extra": "mean: 1.2236992788461205 msec\nrounds: 832"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 189.23931472659473,
            "unit": "iter/sec",
            "range": "stddev: 0.000014879091475413242",
            "extra": "mean: 5.284314210526281 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 245.13610760580488,
            "unit": "iter/sec",
            "range": "stddev: 0.000008308143495641002",
            "extra": "mean: 4.079366396761372 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 382.26148269920077,
            "unit": "iter/sec",
            "range": "stddev: 0.000009297872756186342",
            "extra": "mean: 2.6160103626943076 msec\nrounds: 386"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 737.2879673723871,
            "unit": "iter/sec",
            "range": "stddev: 0.000009018424413992382",
            "extra": "mean: 1.3563221485410775 msec\nrounds: 754"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.94228155023505,
            "unit": "iter/sec",
            "range": "stddev: 0.00016422220180869806",
            "extra": "mean: 37.11638148148132 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.541402453654708,
            "unit": "iter/sec",
            "range": "stddev: 0.00003081247867882328",
            "extra": "mean: 35.03682068965573 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 298.361470174669,
            "unit": "iter/sec",
            "range": "stddev: 0.000009048966314492454",
            "extra": "mean: 3.351639202657677 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 492.28933260516897,
            "unit": "iter/sec",
            "range": "stddev: 0.000009407258516033885",
            "extra": "mean: 2.03132575452743 msec\nrounds: 497"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1406.7533769188153,
            "unit": "iter/sec",
            "range": "stddev: 0.000006015007031155823",
            "extra": "mean: 710.8566550522739 usec\nrounds: 1435"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1201.3400653017954,
            "unit": "iter/sec",
            "range": "stddev: 0.000005768569377412272",
            "extra": "mean: 832.4037704917336 usec\nrounds: 1220"
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
        "date": 1643757689394,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 205.91517067150306,
            "unit": "iter/sec",
            "range": "stddev: 0.000015667972020040145",
            "extra": "mean: 4.85636874999998 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 271.1377715573911,
            "unit": "iter/sec",
            "range": "stddev: 0.00001739174751576421",
            "extra": "mean: 3.6881619047618837 msec\nrounds: 273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 404.95462977220757,
            "unit": "iter/sec",
            "range": "stddev: 0.00001710926532047407",
            "extra": "mean: 2.4694124390243752 msec\nrounds: 410"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 832.8577182759055,
            "unit": "iter/sec",
            "range": "stddev: 0.000009014315525146335",
            "extra": "mean: 1.2006852767962515 msec\nrounds: 849"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 191.37896277163898,
            "unit": "iter/sec",
            "range": "stddev: 0.000015967606761076527",
            "extra": "mean: 5.22523471502581 msec\nrounds: 193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 247.23962911672908,
            "unit": "iter/sec",
            "range": "stddev: 0.000027219364413224407",
            "extra": "mean: 4.044659036144528 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 387.35947225829017,
            "unit": "iter/sec",
            "range": "stddev: 0.000011865531121173638",
            "extra": "mean: 2.5815813775510383 msec\nrounds: 392"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 751.0000196807121,
            "unit": "iter/sec",
            "range": "stddev: 0.000010620667433503271",
            "extra": "mean: 1.3315578878748238 msec\nrounds: 767"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.024016243235387,
            "unit": "iter/sec",
            "range": "stddev: 0.00007538783993576984",
            "extra": "mean: 37.00412222222219 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.60394406962349,
            "unit": "iter/sec",
            "range": "stddev: 0.00006000183761640723",
            "extra": "mean: 34.96021379310307 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 296.3500929847952,
            "unit": "iter/sec",
            "range": "stddev: 0.000011306509781614501",
            "extra": "mean: 3.37438733333317 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 491.72543592010726,
            "unit": "iter/sec",
            "range": "stddev: 0.000011109572378994917",
            "extra": "mean: 2.0336552208832135 msec\nrounds: 498"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1449.1820804564068,
            "unit": "iter/sec",
            "range": "stddev: 0.000005704849029708393",
            "extra": "mean: 690.0444143534118 usec\nrounds: 1477"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1226.2298745019648,
            "unit": "iter/sec",
            "range": "stddev: 0.00000629365855670553",
            "extra": "mean: 815.507777777924 usec\nrounds: 1260"
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
        "date": 1643758471923,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 207.01456471275316,
            "unit": "iter/sec",
            "range": "stddev: 0.00002634215679833958",
            "extra": "mean: 4.8305779904306165 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 270.3971837489513,
            "unit": "iter/sec",
            "range": "stddev: 0.000029819370043260357",
            "extra": "mean: 3.698263369963365 msec\nrounds: 273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 406.33523091556265,
            "unit": "iter/sec",
            "range": "stddev: 0.00003425957542893165",
            "extra": "mean: 2.461022141119243 msec\nrounds: 411"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 831.5032734919657,
            "unit": "iter/sec",
            "range": "stddev: 0.000008635803625353574",
            "extra": "mean: 1.2026410861864905 msec\nrounds: 847"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 190.32511991225707,
            "unit": "iter/sec",
            "range": "stddev: 0.000038408862911710696",
            "extra": "mean: 5.254167187500085 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 246.44897338600353,
            "unit": "iter/sec",
            "range": "stddev: 0.000010414390697377203",
            "extra": "mean: 4.057635080645025 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 385.7131454311969,
            "unit": "iter/sec",
            "range": "stddev: 0.000011367875017130986",
            "extra": "mean: 2.592600257069483 msec\nrounds: 389"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 752.7766214564188,
            "unit": "iter/sec",
            "range": "stddev: 0.00000880022750394031",
            "extra": "mean: 1.3284153246752948 msec\nrounds: 770"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 30.603884738662185,
            "unit": "iter/sec",
            "range": "stddev: 0.00039919874611929284",
            "extra": "mean: 32.67559032258053 msec\nrounds: 31"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 32.647582406950264,
            "unit": "iter/sec",
            "range": "stddev: 0.00006261362141857912",
            "extra": "mean: 30.630139393939086 msec\nrounds: 33"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 335.83269532787995,
            "unit": "iter/sec",
            "range": "stddev: 0.000016629693163426874",
            "extra": "mean: 2.977673150684988 msec\nrounds: 365"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 555.1199201492816,
            "unit": "iter/sec",
            "range": "stddev: 0.000018323018735055662",
            "extra": "mean: 1.8014125663713925 msec\nrounds: 565"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1651.1940304743846,
            "unit": "iter/sec",
            "range": "stddev: 0.000010638335963737411",
            "extra": "mean: 605.6223445240424 usec\nrounds: 1817"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1401.2015690905366,
            "unit": "iter/sec",
            "range": "stddev: 0.000009300853162200612",
            "extra": "mean: 713.6731945347874 usec\nrounds: 1537"
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
        "date": 1643759030032,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 204.26513535242492,
            "unit": "iter/sec",
            "range": "stddev: 0.000013068255938891273",
            "extra": "mean: 4.895598058252424 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 263.81638145347,
            "unit": "iter/sec",
            "range": "stddev: 0.0001366697553821895",
            "extra": "mean: 3.790515185185241 msec\nrounds: 270"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 403.37546168200265,
            "unit": "iter/sec",
            "range": "stddev: 0.00001794443205452118",
            "extra": "mean: 2.479079901960771 msec\nrounds: 408"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 815.3791244390674,
            "unit": "iter/sec",
            "range": "stddev: 0.000027967283357175074",
            "extra": "mean: 1.2264233532934032 msec\nrounds: 835"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 188.10574852153195,
            "unit": "iter/sec",
            "range": "stddev: 0.000020288996660878535",
            "extra": "mean: 5.316158638743211 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 244.49450066272402,
            "unit": "iter/sec",
            "range": "stddev: 0.000009337718292574192",
            "extra": "mean: 4.090071544715367 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 384.3719896639781,
            "unit": "iter/sec",
            "range": "stddev: 0.00001050237637048503",
            "extra": "mean: 2.6016463917524533 msec\nrounds: 388"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 740.6855821348124,
            "unit": "iter/sec",
            "range": "stddev: 0.00000864763883767767",
            "extra": "mean: 1.3501005340454832 msec\nrounds: 749"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.826163776114754,
            "unit": "iter/sec",
            "range": "stddev: 0.0004231005402057541",
            "extra": "mean: 37.277040740740254 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.498707731010953,
            "unit": "iter/sec",
            "range": "stddev: 0.00004229514785414995",
            "extra": "mean: 35.08931034482827 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 297.4873291152623,
            "unit": "iter/sec",
            "range": "stddev: 0.000009723450093750087",
            "extra": "mean: 3.361487707641313 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 488.56049393468646,
            "unit": "iter/sec",
            "range": "stddev: 0.000009894125411213485",
            "extra": "mean: 2.0468294354837577 msec\nrounds: 496"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1464.2399409091763,
            "unit": "iter/sec",
            "range": "stddev: 0.000005486501764147722",
            "extra": "mean: 682.9481781374435 usec\nrounds: 1482"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1206.046824620663,
            "unit": "iter/sec",
            "range": "stddev: 0.000005276169747923008",
            "extra": "mean: 829.1552032521867 usec\nrounds: 1230"
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
        "date": 1643759974410,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 180.5216074643746,
            "unit": "iter/sec",
            "range": "stddev: 0.00009392328077154822",
            "extra": "mean: 5.539503076923061 msec\nrounds: 195"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 239.71525212263037,
            "unit": "iter/sec",
            "range": "stddev: 0.0001158441004393958",
            "extra": "mean: 4.171616078431393 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 353.25230982168245,
            "unit": "iter/sec",
            "range": "stddev: 0.000052316417124064895",
            "extra": "mean: 2.830837823834154 msec\nrounds: 386"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 730.3534239088258,
            "unit": "iter/sec",
            "range": "stddev: 0.000026956404250599545",
            "extra": "mean: 1.3692001259445532 msec\nrounds: 794"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 168.93708002723352,
            "unit": "iter/sec",
            "range": "stddev: 0.00019362907396462028",
            "extra": "mean: 5.919363586956723 msec\nrounds: 184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 217.15019635356225,
            "unit": "iter/sec",
            "range": "stddev: 0.0001314960853382951",
            "extra": "mean: 4.605107509881353 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 349.7605944589528,
            "unit": "iter/sec",
            "range": "stddev: 0.00012054354014929652",
            "extra": "mean: 2.8590985257985024 msec\nrounds: 407"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 666.1198186688391,
            "unit": "iter/sec",
            "range": "stddev: 0.00005349482893527016",
            "extra": "mean: 1.5012314180928898 msec\nrounds: 818"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.60554006983771,
            "unit": "iter/sec",
            "range": "stddev: 0.0008750310916670415",
            "extra": "mean: 40.641253846154484 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.758905044280464,
            "unit": "iter/sec",
            "range": "stddev: 0.0006947262784674598",
            "extra": "mean: 38.821525925926 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 259.18512564137353,
            "unit": "iter/sec",
            "range": "stddev: 0.00007509699447422335",
            "extra": "mean: 3.8582460992907026 msec\nrounds: 282"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 438.60304765054263,
            "unit": "iter/sec",
            "range": "stddev: 0.00008260527491699307",
            "extra": "mean: 2.279965917602905 msec\nrounds: 534"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1324.3967025583286,
            "unit": "iter/sec",
            "range": "stddev: 0.0000389898771849648",
            "extra": "mean: 755.0607745159032 usec\nrounds: 1601"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1070.882290401844,
            "unit": "iter/sec",
            "range": "stddev: 0.000029696438108228862",
            "extra": "mean: 933.8094475581944 usec\nrounds: 1249"
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
        "date": 1643761422710,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 203.4720027956631,
            "unit": "iter/sec",
            "range": "stddev: 0.00001218581665847657",
            "extra": "mean: 4.91468106796123 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 267.02779373625657,
            "unit": "iter/sec",
            "range": "stddev: 0.000009563116570507287",
            "extra": "mean: 3.744928518518564 msec\nrounds: 270"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 404.276477896109,
            "unit": "iter/sec",
            "range": "stddev: 0.000010116762020282413",
            "extra": "mean: 2.4735547445255524 msec\nrounds: 411"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 807.7703587294363,
            "unit": "iter/sec",
            "range": "stddev: 0.000008928247777703796",
            "extra": "mean: 1.237975606796128 msec\nrounds: 824"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 187.90235209241922,
            "unit": "iter/sec",
            "range": "stddev: 0.000017584988954516277",
            "extra": "mean: 5.321913157894654 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 243.41207697464787,
            "unit": "iter/sec",
            "range": "stddev: 0.000026878532932911498",
            "extra": "mean: 4.10825959183674 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 383.63081815827,
            "unit": "iter/sec",
            "range": "stddev: 0.000010194842939872848",
            "extra": "mean: 2.6066727506428897 msec\nrounds: 389"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 740.1688250681436,
            "unit": "iter/sec",
            "range": "stddev: 0.000010901234770181102",
            "extra": "mean: 1.3510431216931287 msec\nrounds: 756"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.066681476485336,
            "unit": "iter/sec",
            "range": "stddev: 0.0001230679234774553",
            "extra": "mean: 36.945792592592774 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.69010384333642,
            "unit": "iter/sec",
            "range": "stddev: 0.00011997655620823624",
            "extra": "mean: 34.85522413793077 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 296.5410268464458,
            "unit": "iter/sec",
            "range": "stddev: 0.000011124003914970697",
            "extra": "mean: 3.3722146666667405 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 488.64097668051664,
            "unit": "iter/sec",
            "range": "stddev: 0.000010244104896400653",
            "extra": "mean: 2.0464923076924437 msec\nrounds: 494"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1399.042200164779,
            "unit": "iter/sec",
            "range": "stddev: 0.000006774469707007828",
            "extra": "mean: 714.7747222222606 usec\nrounds: 1440"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1197.2785741767773,
            "unit": "iter/sec",
            "range": "stddev: 0.000007275534106777189",
            "extra": "mean: 835.2275080906533 usec\nrounds: 1236"
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
        "date": 1643775056415,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 131.96605271566338,
            "unit": "iter/sec",
            "range": "stddev: 0.0005713399113628554",
            "extra": "mean: 7.577706382978807 msec\nrounds: 141"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 169.3237263284121,
            "unit": "iter/sec",
            "range": "stddev: 0.0003743120017443615",
            "extra": "mean: 5.905846874999954 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 252.6335574670159,
            "unit": "iter/sec",
            "range": "stddev: 0.00034638731800514926",
            "extra": "mean: 3.9583023333333736 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 558.8890701138391,
            "unit": "iter/sec",
            "range": "stddev: 0.0001220868267426031",
            "extra": "mean: 1.7892638333333515 msec\nrounds: 600"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.44731410794068,
            "unit": "iter/sec",
            "range": "stddev: 0.0006480577992980747",
            "extra": "mean: 8.5875746268656 msec\nrounds: 134"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 158.3849433934026,
            "unit": "iter/sec",
            "range": "stddev: 0.000502261544646484",
            "extra": "mean: 6.313731460674021 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 243.27899665753654,
            "unit": "iter/sec",
            "range": "stddev: 0.00030387924514120975",
            "extra": "mean: 4.110506923076876 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 502.773373384601,
            "unit": "iter/sec",
            "range": "stddev: 0.00015896438085266187",
            "extra": "mean: 1.9889676998368828 msec\nrounds: 613"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.171067945666064,
            "unit": "iter/sec",
            "range": "stddev: 0.00162557412183169",
            "extra": "mean: 49.575957142857135 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.686883519117377,
            "unit": "iter/sec",
            "range": "stddev: 0.0031954165637841122",
            "extra": "mean: 48.33980909090873 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 184.18830549813327,
            "unit": "iter/sec",
            "range": "stddev: 0.0006727395540162979",
            "extra": "mean: 5.429226341463546 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 315.9417038486511,
            "unit": "iter/sec",
            "range": "stddev: 0.0003203286581839634",
            "extra": "mean: 3.1651408719345278 msec\nrounds: 367"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 929.7868173430201,
            "unit": "iter/sec",
            "range": "stddev: 0.0000920349075538454",
            "extra": "mean: 1.0755153561518789 msec\nrounds: 1081"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 817.2553191689022,
            "unit": "iter/sec",
            "range": "stddev: 0.00009075441724704419",
            "extra": "mean: 1.2236078206464753 msec\nrounds: 959"
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
        "date": 1643775413343,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 206.3891737765086,
            "unit": "iter/sec",
            "range": "stddev: 0.000012173609448353305",
            "extra": "mean: 4.845215384615396 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 269.1304424977693,
            "unit": "iter/sec",
            "range": "stddev: 0.000010108494111369",
            "extra": "mean: 3.7156703296702998 msec\nrounds: 273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 407.5216859754292,
            "unit": "iter/sec",
            "range": "stddev: 0.000010111484318235078",
            "extra": "mean: 2.4538571428571614 msec\nrounds: 413"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 814.8219049652959,
            "unit": "iter/sec",
            "range": "stddev: 0.000008310491176334424",
            "extra": "mean: 1.2272620481927166 msec\nrounds: 830"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 190.73553056053223,
            "unit": "iter/sec",
            "range": "stddev: 0.000015963620143194232",
            "extra": "mean: 5.2428616580309235 msec\nrounds: 193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 246.1614203514014,
            "unit": "iter/sec",
            "range": "stddev: 0.000008232645837651423",
            "extra": "mean: 4.062374999999901 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 385.57655014377417,
            "unit": "iter/sec",
            "range": "stddev: 0.000010949633858885967",
            "extra": "mean: 2.593518717948794 msec\nrounds: 390"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 739.3795714222626,
            "unit": "iter/sec",
            "range": "stddev: 0.000008749887972651105",
            "extra": "mean: 1.3524852980133202 msec\nrounds: 755"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.14948506476652,
            "unit": "iter/sec",
            "range": "stddev: 0.00009305282343237258",
            "extra": "mean: 36.83311111111123 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.815711995503783,
            "unit": "iter/sec",
            "range": "stddev: 0.00004289072780941918",
            "extra": "mean: 34.70328965517262 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 297.3514383807792,
            "unit": "iter/sec",
            "range": "stddev: 0.000024578165633599004",
            "extra": "mean: 3.3630239202657917 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 485.68771109402934,
            "unit": "iter/sec",
            "range": "stddev: 0.000010118726566496993",
            "extra": "mean: 2.0589361788616465 msec\nrounds: 492"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1446.8498009038492,
            "unit": "iter/sec",
            "range": "stddev: 0.000006076510169085008",
            "extra": "mean: 691.1567457626206 usec\nrounds: 1475"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1208.0104602236408,
            "unit": "iter/sec",
            "range": "stddev: 0.000005884423056479228",
            "extra": "mean: 827.8074014482196 usec\nrounds: 1243"
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
        "date": 1643781820458,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 191.9208050500466,
            "unit": "iter/sec",
            "range": "stddev: 0.00029037401395258446",
            "extra": "mean: 5.210482520325158 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 254.0682881904462,
            "unit": "iter/sec",
            "range": "stddev: 0.0002558234021733737",
            "extra": "mean: 3.935949689441027 msec\nrounds: 322"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 372.0862031694548,
            "unit": "iter/sec",
            "range": "stddev: 0.00015155046456486046",
            "extra": "mean: 2.687549260042254 msec\nrounds: 473"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 796.456936781335,
            "unit": "iter/sec",
            "range": "stddev: 0.00011236093178666477",
            "extra": "mean: 1.2555606635070933 msec\nrounds: 1055"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 175.34023840601617,
            "unit": "iter/sec",
            "range": "stddev: 0.00033256467193486336",
            "extra": "mean: 5.703197446808585 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 227.16870131029836,
            "unit": "iter/sec",
            "range": "stddev: 0.00023490111034791137",
            "extra": "mean: 4.402014864864953 msec\nrounds: 296"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 358.0201952736065,
            "unit": "iter/sec",
            "range": "stddev: 0.0001704682707307892",
            "extra": "mean: 2.7931385245901534 msec\nrounds: 488"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 709.4161803851691,
            "unit": "iter/sec",
            "range": "stddev: 0.00011730097651611834",
            "extra": "mean: 1.4096097997892603 msec\nrounds: 949"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.509246555249607,
            "unit": "iter/sec",
            "range": "stddev: 0.0011506149247590362",
            "extra": "mean: 39.20147142857137 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.69696577829737,
            "unit": "iter/sec",
            "range": "stddev: 0.0012863321309093425",
            "extra": "mean: 36.10503793103482 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 272.31582682961914,
            "unit": "iter/sec",
            "range": "stddev: 0.00018627796351870337",
            "extra": "mean: 3.67220668604647 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 463.1810647994457,
            "unit": "iter/sec",
            "range": "stddev: 0.00015472785070807564",
            "extra": "mean: 2.1589829032259624 msec\nrounds: 620"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1369.708452668909,
            "unit": "iter/sec",
            "range": "stddev: 0.00005362864341042033",
            "extra": "mean: 730.0823748670578 usec\nrounds: 1878"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1140.9550068067592,
            "unit": "iter/sec",
            "range": "stddev: 0.00007128547885309557",
            "extra": "mean: 876.4587508132715 usec\nrounds: 1537"
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
        "date": 1643823797196,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 130.18090780837554,
            "unit": "iter/sec",
            "range": "stddev: 0.0005644579587049017",
            "extra": "mean: 7.681617964071858 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 168.91891891891842,
            "unit": "iter/sec",
            "range": "stddev: 0.0005924136375083654",
            "extra": "mean: 5.920000000000018 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 249.70655399732865,
            "unit": "iter/sec",
            "range": "stddev: 0.00036082129630668263",
            "extra": "mean: 4.00470065359477 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 543.1133549394942,
            "unit": "iter/sec",
            "range": "stddev: 0.00040226839705215575",
            "extra": "mean: 1.8412362555721087 msec\nrounds: 673"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.39194699704656,
            "unit": "iter/sec",
            "range": "stddev: 0.0006381220258487787",
            "extra": "mean: 8.44652043795636 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.9875820142193,
            "unit": "iter/sec",
            "range": "stddev: 0.0007325547286937165",
            "extra": "mean: 6.711968786127159 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 239.4251508357991,
            "unit": "iter/sec",
            "range": "stddev: 0.0004583180352815373",
            "extra": "mean: 4.176670648464218 msec\nrounds: 293"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 492.67702433334415,
            "unit": "iter/sec",
            "range": "stddev: 0.0003438159741381106",
            "extra": "mean: 2.0297272870662675 msec\nrounds: 634"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.090416004025226,
            "unit": "iter/sec",
            "range": "stddev: 0.00225814851275221",
            "extra": "mean: 49.77497727272768 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.980468369800636,
            "unit": "iter/sec",
            "range": "stddev: 0.002090053985374897",
            "extra": "mean: 47.66337826086874 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 178.084010322393,
            "unit": "iter/sec",
            "range": "stddev: 0.0005948198690401672",
            "extra": "mean: 5.615327272727393 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 317.64903412003986,
            "unit": "iter/sec",
            "range": "stddev: 0.0003609713451523726",
            "extra": "mean: 3.148128571428613 msec\nrounds: 406"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 941.2655192981548,
            "unit": "iter/sec",
            "range": "stddev: 0.000190245762356928",
            "extra": "mean: 1.0623994818652658 msec\nrounds: 1158"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 798.2403769864231,
            "unit": "iter/sec",
            "range": "stddev: 0.0003836766852306578",
            "extra": "mean: 1.2527554716979803 msec\nrounds: 1060"
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
        "date": 1643830228708,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 206.40828252927776,
            "unit": "iter/sec",
            "range": "stddev: 0.000013900644878853233",
            "extra": "mean: 4.844766826923024 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 267.5653175319051,
            "unit": "iter/sec",
            "range": "stddev: 0.000037262623154144724",
            "extra": "mean: 3.737405166051679 msec\nrounds: 271"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 405.95732521418057,
            "unit": "iter/sec",
            "range": "stddev: 0.000009932429769473065",
            "extra": "mean: 2.4633131067961545 msec\nrounds: 412"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 824.9020932652603,
            "unit": "iter/sec",
            "range": "stddev: 0.000008285884334198605",
            "extra": "mean: 1.2122650774731811 msec\nrounds: 839"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 189.46319393263624,
            "unit": "iter/sec",
            "range": "stddev: 0.000014793978290043194",
            "extra": "mean: 5.278069999999845 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 245.8510172456074,
            "unit": "iter/sec",
            "range": "stddev: 0.000007896925694226398",
            "extra": "mean: 4.0675040160642935 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 386.24280573129266,
            "unit": "iter/sec",
            "range": "stddev: 0.000009493006476889461",
            "extra": "mean: 2.589044987146493 msec\nrounds: 389"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 746.5889111059741,
            "unit": "iter/sec",
            "range": "stddev: 0.000007869905617374366",
            "extra": "mean: 1.3394251978891976 msec\nrounds: 758"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.013339186890512,
            "unit": "iter/sec",
            "range": "stddev: 0.00004370086577541187",
            "extra": "mean: 37.018748148148106 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.700237499413234,
            "unit": "iter/sec",
            "range": "stddev: 0.000030291029659615853",
            "extra": "mean: 34.84291724137979 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 299.11864986953714,
            "unit": "iter/sec",
            "range": "stddev: 0.000016194214498517917",
            "extra": "mean: 3.343154966887412 msec\nrounds: 302"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 495.23320739315255,
            "unit": "iter/sec",
            "range": "stddev: 0.000015088945109106677",
            "extra": "mean: 2.019250698602944 msec\nrounds: 501"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1437.2476874252616,
            "unit": "iter/sec",
            "range": "stddev: 0.000005503023620404645",
            "extra": "mean: 695.7742974639513 usec\nrounds: 1459"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1196.1519262221411,
            "unit": "iter/sec",
            "range": "stddev: 0.000005849226137365272",
            "extra": "mean: 836.0142036123653 usec\nrounds: 1218"
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
        "date": 1643842680798,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 188.53836310197642,
            "unit": "iter/sec",
            "range": "stddev: 0.0002904178388668446",
            "extra": "mean: 5.303960337552741 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 241.10235855971308,
            "unit": "iter/sec",
            "range": "stddev: 0.00021320256030006306",
            "extra": "mean: 4.147615999999988 msec\nrounds: 325"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 371.35633047999346,
            "unit": "iter/sec",
            "range": "stddev: 0.00015456308434244346",
            "extra": "mean: 2.692831434184678 msec\nrounds: 509"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 788.6722444304905,
            "unit": "iter/sec",
            "range": "stddev: 0.00009838133006433083",
            "extra": "mean: 1.2679538389513274 msec\nrounds: 1068"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 173.28624238437465,
            "unit": "iter/sec",
            "range": "stddev: 0.0003139556361671593",
            "extra": "mean: 5.7707985714287195 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 229.73370840383802,
            "unit": "iter/sec",
            "range": "stddev: 0.0002779574992533078",
            "extra": "mean: 4.3528657894737295 msec\nrounds: 266"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 358.5070586182553,
            "unit": "iter/sec",
            "range": "stddev: 0.00021851716278799865",
            "extra": "mean: 2.789345358649738 msec\nrounds: 474"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 702.6734426722187,
            "unit": "iter/sec",
            "range": "stddev: 0.00010983683948625587",
            "extra": "mean: 1.423136181434535 msec\nrounds: 948"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.09895624639883,
            "unit": "iter/sec",
            "range": "stddev: 0.003601317363583788",
            "extra": "mean: 41.49557307692247 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.78087255191324,
            "unit": "iter/sec",
            "range": "stddev: 0.002622129227559498",
            "extra": "mean: 38.788446666666 msec\nrounds: 30"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 255.4200678007176,
            "unit": "iter/sec",
            "range": "stddev: 0.0005331200111593477",
            "extra": "mean: 3.9151191549295743 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 453.41802343150226,
            "unit": "iter/sec",
            "range": "stddev: 0.0003583243620180023",
            "extra": "mean: 2.205470334928293 msec\nrounds: 627"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1475.7477372060966,
            "unit": "iter/sec",
            "range": "stddev: 0.00007612182650015222",
            "extra": "mean: 677.6225873760864 usec\nrounds: 1917"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1162.8627493027902,
            "unit": "iter/sec",
            "range": "stddev: 0.00007841395240929625",
            "extra": "mean: 859.9467139174965 usec\nrounds: 1552"
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
        "date": 1643898544168,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 169.03055903476724,
            "unit": "iter/sec",
            "range": "stddev: 0.00008232027662812965",
            "extra": "mean: 5.916090000000023 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 221.20245276809962,
            "unit": "iter/sec",
            "range": "stddev: 0.00005943115325999396",
            "extra": "mean: 4.520745531914886 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 332.18211966080486,
            "unit": "iter/sec",
            "range": "stddev: 0.00008176430398472074",
            "extra": "mean: 3.0103968299711976 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 696.0587043461304,
            "unit": "iter/sec",
            "range": "stddev: 0.000027829129352482217",
            "extra": "mean: 1.4366604336043587 msec\nrounds: 738"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 152.8240402148813,
            "unit": "iter/sec",
            "range": "stddev: 0.00008522899506745125",
            "extra": "mean: 6.543473125000032 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 200.7231411308417,
            "unit": "iter/sec",
            "range": "stddev: 0.00007199259251714827",
            "extra": "mean: 4.981986602870809 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 314.4004945029306,
            "unit": "iter/sec",
            "range": "stddev: 0.00004947808225678534",
            "extra": "mean: 3.180656574923672 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 610.8664246399122,
            "unit": "iter/sec",
            "range": "stddev: 0.000034332138700724235",
            "extra": "mean: 1.6370190923317984 msec\nrounds: 639"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.30500720257781,
            "unit": "iter/sec",
            "range": "stddev: 0.0002503084926680096",
            "extra": "mean: 44.83298260869555 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.744027511413478,
            "unit": "iter/sec",
            "range": "stddev: 0.00021373636540171633",
            "extra": "mean: 42.11585416666619 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 243.4557735536736,
            "unit": "iter/sec",
            "range": "stddev: 0.00005552612520176349",
            "extra": "mean: 4.107522222222159 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 403.9994053279975,
            "unit": "iter/sec",
            "range": "stddev: 0.00004304037017342597",
            "extra": "mean: 2.4752511682241805 msec\nrounds: 428"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1225.6457331106005,
            "unit": "iter/sec",
            "range": "stddev: 0.00001791144202823751",
            "extra": "mean: 815.8964478765589 usec\nrounds: 1295"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1013.3230793771758,
            "unit": "iter/sec",
            "range": "stddev: 0.000021717875877426328",
            "extra": "mean: 986.8520912546818 usec\nrounds: 1052"
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
        "date": 1643987956592,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 152.00514790767681,
            "unit": "iter/sec",
            "range": "stddev: 0.0005268786137512858",
            "extra": "mean: 6.578724561403465 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 200.81342254006864,
            "unit": "iter/sec",
            "range": "stddev: 0.0004886344378653275",
            "extra": "mean: 4.979746808510613 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 270.0552299439221,
            "unit": "iter/sec",
            "range": "stddev: 0.0004156470479352326",
            "extra": "mean: 3.7029462462461975 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 662.1871853535979,
            "unit": "iter/sec",
            "range": "stddev: 0.00020739082150723502",
            "extra": "mean: 1.510147012986993 msec\nrounds: 770"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 134.90667769249194,
            "unit": "iter/sec",
            "range": "stddev: 0.000601554732907765",
            "extra": "mean: 7.412531515151631 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 188.50696287910446,
            "unit": "iter/sec",
            "range": "stddev: 0.0004926175425287413",
            "extra": "mean: 5.304843835616469 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 284.92225546505017,
            "unit": "iter/sec",
            "range": "stddev: 0.00037607313171485293",
            "extra": "mean: 3.5097293413173354 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 607.9248158149695,
            "unit": "iter/sec",
            "range": "stddev: 0.0002541415474026234",
            "extra": "mean: 1.6449402524544483 msec\nrounds: 713"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.486297875813435,
            "unit": "iter/sec",
            "range": "stddev: 0.0037473947987483503",
            "extra": "mean: 40.83916666666704 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.49033156275664,
            "unit": "iter/sec",
            "range": "stddev: 0.0026728937037149955",
            "extra": "mean: 39.2305607142858 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 219.56785257989654,
            "unit": "iter/sec",
            "range": "stddev: 0.0004362440930713972",
            "extra": "mean: 4.554400784313902 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 382.0761390486273,
            "unit": "iter/sec",
            "range": "stddev: 0.00035468175080182054",
            "extra": "mean: 2.6172793791572753 msec\nrounds: 451"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1125.604400623924,
            "unit": "iter/sec",
            "range": "stddev: 0.00017159762223105862",
            "extra": "mean: 888.4115942028112 usec\nrounds: 1380"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1004.472120997696,
            "unit": "iter/sec",
            "range": "stddev: 0.00017060600294270238",
            "extra": "mean: 995.547789824914 usec\nrounds: 1199"
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
        "date": 1643988300080,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 146.92068670379203,
            "unit": "iter/sec",
            "range": "stddev: 0.0006571307278994544",
            "extra": "mean: 6.80639345238093 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 187.1310088390711,
            "unit": "iter/sec",
            "range": "stddev: 0.0008007296137811758",
            "extra": "mean: 5.343849777777771 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 258.4681721739466,
            "unit": "iter/sec",
            "range": "stddev: 0.0008536849760138296",
            "extra": "mean: 3.8689483180428486 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 577.0162481997426,
            "unit": "iter/sec",
            "range": "stddev: 0.0006798325504799576",
            "extra": "mean: 1.7330534506089599 msec\nrounds: 739"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 122.79238381813607,
            "unit": "iter/sec",
            "range": "stddev: 0.0012483543307258644",
            "extra": "mean: 8.143827564102578 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 170.51143305801605,
            "unit": "iter/sec",
            "range": "stddev: 0.0009888051113788267",
            "extra": "mean: 5.864709374999814 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 272.9574430931055,
            "unit": "iter/sec",
            "range": "stddev: 0.0009843465687766706",
            "extra": "mean: 3.663574763406987 msec\nrounds: 317"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 539.1639103740447,
            "unit": "iter/sec",
            "range": "stddev: 0.0006128241146411063",
            "extra": "mean: 1.8547235465115801 msec\nrounds: 688"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.50450973391023,
            "unit": "iter/sec",
            "range": "stddev: 0.002147531798014901",
            "extra": "mean: 48.76975909090898 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.808734929334715,
            "unit": "iter/sec",
            "range": "stddev: 0.0029553389801425935",
            "extra": "mean: 45.85318695652125 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 186.62595690284957,
            "unit": "iter/sec",
            "range": "stddev: 0.0007914833943742772",
            "extra": "mean: 5.358311440677903 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 353.42247760042846,
            "unit": "iter/sec",
            "range": "stddev: 0.00029106885577217633",
            "extra": "mean: 2.8294748166260595 msec\nrounds: 409"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 995.949558606154,
            "unit": "iter/sec",
            "range": "stddev: 0.00035382231277862033",
            "extra": "mean: 1.004066914191432 msec\nrounds: 1212"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 877.0549148045535,
            "unit": "iter/sec",
            "range": "stddev: 0.0004853500319583065",
            "extra": "mean: 1.140179460966642 msec\nrounds: 1076"
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
        "date": 1644011229500,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 123.15724835193376,
            "unit": "iter/sec",
            "range": "stddev: 0.0007660050529275577",
            "extra": "mean: 8.119700735294144 msec\nrounds: 136"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 163.79038615949617,
            "unit": "iter/sec",
            "range": "stddev: 0.0008233409396251697",
            "extra": "mean: 6.105364444444364 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 235.833529042413,
            "unit": "iter/sec",
            "range": "stddev: 0.0005285707639039368",
            "extra": "mean: 4.240279166666572 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 491.5272981973297,
            "unit": "iter/sec",
            "range": "stddev: 0.000495663034808049",
            "extra": "mean: 2.0344749999999747 msec\nrounds: 620"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.53177222056812,
            "unit": "iter/sec",
            "range": "stddev: 0.0009891157205283198",
            "extra": "mean: 8.88637920000005 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.53516762910806,
            "unit": "iter/sec",
            "range": "stddev: 0.0011882014357777401",
            "extra": "mean: 7.065381818181706 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 222.81854621136458,
            "unit": "iter/sec",
            "range": "stddev: 0.000786210727111577",
            "extra": "mean: 4.487956756756707 msec\nrounds: 259"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 471.61168594487555,
            "unit": "iter/sec",
            "range": "stddev: 0.0003777173866109471",
            "extra": "mean: 2.120388509874383 msec\nrounds: 557"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.913208753770807,
            "unit": "iter/sec",
            "range": "stddev: 0.0016389803210856335",
            "extra": "mean: 50.21792380952356 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.17420392933561,
            "unit": "iter/sec",
            "range": "stddev: 0.0022018137551380137",
            "extra": "mean: 47.227277272727065 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 172.70390162785714,
            "unit": "iter/sec",
            "range": "stddev: 0.0008722514941967266",
            "extra": "mean: 5.790257142857159 msec\nrounds: 196"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 302.839774342126,
            "unit": "iter/sec",
            "range": "stddev: 0.0004513320488534626",
            "extra": "mean: 3.302076162790538 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 874.716711065162,
            "unit": "iter/sec",
            "range": "stddev: 0.0002560892554706939",
            "extra": "mean: 1.1432272727272783 msec\nrounds: 1034"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 776.9282952994239,
            "unit": "iter/sec",
            "range": "stddev: 0.0003486249689022286",
            "extra": "mean: 1.2871200676435726 msec\nrounds: 887"
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
        "date": 1644244339295,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 234.46894126046323,
            "unit": "iter/sec",
            "range": "stddev: 0.000009862375906934915",
            "extra": "mean: 4.264957203389832 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 305.5225667837846,
            "unit": "iter/sec",
            "range": "stddev: 0.00002608564459525933",
            "extra": "mean: 3.2730806451612797 msec\nrounds: 310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 462.1605324956555,
            "unit": "iter/sec",
            "range": "stddev: 0.000010891829492027269",
            "extra": "mean: 2.163750319829399 msec\nrounds: 469"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 936.8082833200401,
            "unit": "iter/sec",
            "range": "stddev: 0.00000955777762330132",
            "extra": "mean: 1.067454267650163 msec\nrounds: 949"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 215.61150502990708,
            "unit": "iter/sec",
            "range": "stddev: 0.000012460096095500715",
            "extra": "mean: 4.637971428571456 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 279.94645603612264,
            "unit": "iter/sec",
            "range": "stddev: 0.000013801545745257605",
            "extra": "mean: 3.572111660777609 msec\nrounds: 283"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 437.57238381372593,
            "unit": "iter/sec",
            "range": "stddev: 0.000011782014800550795",
            "extra": "mean: 2.2853361797752276 msec\nrounds: 445"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 842.0232818456149,
            "unit": "iter/sec",
            "range": "stddev: 0.000008092841581134631",
            "extra": "mean: 1.1876156177156039 msec\nrounds: 858"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 30.8053900290307,
            "unit": "iter/sec",
            "range": "stddev: 0.000042411208196198445",
            "extra": "mean: 32.461851612903125 msec\nrounds: 31"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 32.65218242239956,
            "unit": "iter/sec",
            "range": "stddev: 0.00005685167120628593",
            "extra": "mean: 30.625824242424752 msec\nrounds: 33"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 340.9256718422603,
            "unit": "iter/sec",
            "range": "stddev: 0.000010374537282104526",
            "extra": "mean: 2.9331906705537873 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 555.4116699417104,
            "unit": "iter/sec",
            "range": "stddev: 0.000013042072938711667",
            "extra": "mean: 1.8004663101604408 msec\nrounds: 561"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1625.8645316329532,
            "unit": "iter/sec",
            "range": "stddev: 0.0000052150743007905145",
            "extra": "mean: 615.0573928786306 usec\nrounds: 1657"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1366.21042828413,
            "unit": "iter/sec",
            "range": "stddev: 0.000005898768087582029",
            "extra": "mean: 731.9516666667037 usec\nrounds: 1380"
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
        "date": 1644418248670,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 189.3450546636794,
            "unit": "iter/sec",
            "range": "stddev: 0.00024940619711543403",
            "extra": "mean: 5.281363179916324 msec\nrounds: 239"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 242.13731630122462,
            "unit": "iter/sec",
            "range": "stddev: 0.00016404406588492053",
            "extra": "mean: 4.129888012618327 msec\nrounds: 317"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 363.130090978399,
            "unit": "iter/sec",
            "range": "stddev: 0.00011840032591466531",
            "extra": "mean: 2.7538340248962894 msec\nrounds: 482"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 740.4084589498765,
            "unit": "iter/sec",
            "range": "stddev: 0.0000596168324619562",
            "extra": "mean: 1.3506058553386908 msec\nrounds: 871"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 163.5106528911512,
            "unit": "iter/sec",
            "range": "stddev: 0.000040456562567258105",
            "extra": "mean: 6.115809473684252 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 228.97437478545982,
            "unit": "iter/sec",
            "range": "stddev: 0.0002520229261915552",
            "extra": "mean: 4.367300930232746 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 343.4557208936857,
            "unit": "iter/sec",
            "range": "stddev: 0.00011493892651175655",
            "extra": "mean: 2.9115834710744064 msec\nrounds: 484"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 680.1008586703655,
            "unit": "iter/sec",
            "range": "stddev: 0.00009669422496556124",
            "extra": "mean: 1.470370147679353 msec\nrounds: 948"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.090455739320934,
            "unit": "iter/sec",
            "range": "stddev: 0.0013011906452667949",
            "extra": "mean: 39.85579259259261 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.96870663393886,
            "unit": "iter/sec",
            "range": "stddev: 0.0008593915857505787",
            "extra": "mean: 38.50788620689666 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 257.1041394585275,
            "unit": "iter/sec",
            "range": "stddev: 0.00001792806857264087",
            "extra": "mean: 3.889474522292964 msec\nrounds: 314"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 430.8762606427706,
            "unit": "iter/sec",
            "range": "stddev: 0.00007722436410235693",
            "extra": "mean: 2.3208519274378787 msec\nrounds: 441"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1347.2512932785514,
            "unit": "iter/sec",
            "range": "stddev: 0.00006172860046678997",
            "extra": "mean: 742.2520245398974 usec\nrounds: 1630"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1116.4716591871945,
            "unit": "iter/sec",
            "range": "stddev: 0.00006529752909403045",
            "extra": "mean: 895.6788036411177 usec\nrounds: 1538"
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
        "date": 1644419418272,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 204.7718366906022,
            "unit": "iter/sec",
            "range": "stddev: 0.00002152488257482915",
            "extra": "mean: 4.883484057971015 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 268.51340476384723,
            "unit": "iter/sec",
            "range": "stddev: 0.000019670792292830972",
            "extra": "mean: 3.7242088560885156 msec\nrounds: 271"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 404.187022658828,
            "unit": "iter/sec",
            "range": "stddev: 0.00001470592981413334",
            "extra": "mean: 2.474102195121921 msec\nrounds: 410"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 818.7494803432111,
            "unit": "iter/sec",
            "range": "stddev: 0.000013739702507582724",
            "extra": "mean: 1.2213748210024031 msec\nrounds: 838"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 187.48685125109142,
            "unit": "iter/sec",
            "range": "stddev: 0.000020897620137890373",
            "extra": "mean: 5.333707368421009 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 243.93615377735063,
            "unit": "iter/sec",
            "range": "stddev: 0.000028132812323931192",
            "extra": "mean: 4.099433333333345 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 383.2222153523198,
            "unit": "iter/sec",
            "range": "stddev: 0.000021898650056467957",
            "extra": "mean: 2.609452061855648 msec\nrounds: 388"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 734.2366728701076,
            "unit": "iter/sec",
            "range": "stddev: 0.000010637214484877579",
            "extra": "mean: 1.361958666666747 msec\nrounds: 750"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.713484521762233,
            "unit": "iter/sec",
            "range": "stddev: 0.00007660931020546221",
            "extra": "mean: 37.43427777777723 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.284250081146457,
            "unit": "iter/sec",
            "range": "stddev: 0.00006221314902295157",
            "extra": "mean: 35.35536551724148 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 296.5918042589079,
            "unit": "iter/sec",
            "range": "stddev: 0.00001485257112787222",
            "extra": "mean: 3.3716373333332443 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 483.9428641152057,
            "unit": "iter/sec",
            "range": "stddev: 0.000014996204583021753",
            "extra": "mean: 2.066359634888518 msec\nrounds: 493"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1441.1983230264982,
            "unit": "iter/sec",
            "range": "stddev: 0.0000074204366122022185",
            "extra": "mean: 693.8670299726776 usec\nrounds: 1468"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1230.6310229450921,
            "unit": "iter/sec",
            "range": "stddev: 0.000007444065505878225",
            "extra": "mean: 812.5912490056068 usec\nrounds: 1257"
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
        "date": 1644539163394,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 179.06388921287987,
            "unit": "iter/sec",
            "range": "stddev: 0.000040498154874624245",
            "extra": "mean: 5.584598907103773 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 234.53282763773916,
            "unit": "iter/sec",
            "range": "stddev: 0.00003417437179262853",
            "extra": "mean: 4.26379543568462 msec\nrounds: 241"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 354.5075006768101,
            "unit": "iter/sec",
            "range": "stddev: 0.00003035832747584946",
            "extra": "mean: 2.8208147869673956 msec\nrounds: 399"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 733.1249785448941,
            "unit": "iter/sec",
            "range": "stddev: 0.000019755217149913302",
            "extra": "mean: 1.3640239103362692 msec\nrounds: 803"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 163.16800862756102,
            "unit": "iter/sec",
            "range": "stddev: 0.00004702502318008273",
            "extra": "mean: 6.128652352941004 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 212.53523086857936,
            "unit": "iter/sec",
            "range": "stddev: 0.00003969305099775384",
            "extra": "mean: 4.705102283104996 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 338.45372514561245,
            "unit": "iter/sec",
            "range": "stddev: 0.000028417085912673483",
            "extra": "mean: 2.9546136612021963 msec\nrounds: 366"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 653.8260224182454,
            "unit": "iter/sec",
            "range": "stddev: 0.000025453745799451186",
            "extra": "mean: 1.5294588555857611 msec\nrounds: 734"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.486174178556247,
            "unit": "iter/sec",
            "range": "stddev: 0.000160831475171357",
            "extra": "mean: 42.578241666666905 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.80371087326254,
            "unit": "iter/sec",
            "range": "stddev: 0.0001530665925880352",
            "extra": "mean: 40.31654799999956 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 256.0800829510359,
            "unit": "iter/sec",
            "range": "stddev: 0.0000682126069378257",
            "extra": "mean: 3.905028413284317 msec\nrounds: 271"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 425.6765235220114,
            "unit": "iter/sec",
            "range": "stddev: 0.0000250736713110452",
            "extra": "mean: 2.349201670146347 msec\nrounds: 479"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1306.8250717207884,
            "unit": "iter/sec",
            "range": "stddev: 0.00000988825462870116",
            "extra": "mean: 765.2133568903984 usec\nrounds: 1415"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1066.094489839139,
            "unit": "iter/sec",
            "range": "stddev: 0.000010762953964508751",
            "extra": "mean: 938.0031596926161 usec\nrounds: 1171"
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
        "date": 1644540193056,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 136.37896813935345,
            "unit": "iter/sec",
            "range": "stddev: 0.0005610266224287428",
            "extra": "mean: 7.332508917197479 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 174.31449322826987,
            "unit": "iter/sec",
            "range": "stddev: 0.00047687501660681236",
            "extra": "mean: 5.73675763546793 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 256.4201187225141,
            "unit": "iter/sec",
            "range": "stddev: 0.0004980315542382093",
            "extra": "mean: 3.899850000000014 msec\nrounds: 296"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 543.2577916090812,
            "unit": "iter/sec",
            "range": "stddev: 0.0002245455193979636",
            "extra": "mean: 1.8407467236467774 msec\nrounds: 702"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.05340636598159,
            "unit": "iter/sec",
            "range": "stddev: 0.00094221101095279",
            "extra": "mean: 8.399591666666842 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.78985930759552,
            "unit": "iter/sec",
            "range": "stddev: 0.00034468461059848274",
            "extra": "mean: 6.418903030302982 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 235.613456020929,
            "unit": "iter/sec",
            "range": "stddev: 0.00032152716475564657",
            "extra": "mean: 4.244239768339769 msec\nrounds: 259"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 497.89664831823814,
            "unit": "iter/sec",
            "range": "stddev: 0.00022846118639851024",
            "extra": "mean: 2.0084489489490096 msec\nrounds: 666"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.398679960622644,
            "unit": "iter/sec",
            "range": "stddev: 0.002485041790728067",
            "extra": "mean: 49.022779999999386 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.175796780998247,
            "unit": "iter/sec",
            "range": "stddev: 0.0012198744913752715",
            "extra": "mean: 45.09420833333344 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 183.95257930410963,
            "unit": "iter/sec",
            "range": "stddev: 0.0003996845239792632",
            "extra": "mean: 5.436183628318711 msec\nrounds: 226"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 333.1040559831116,
            "unit": "iter/sec",
            "range": "stddev: 0.0003181216982768616",
            "extra": "mean: 3.002064916467724 msec\nrounds: 419"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 966.5182242555404,
            "unit": "iter/sec",
            "range": "stddev: 0.00022395874071545058",
            "extra": "mean: 1.0346416393444096 msec\nrounds: 1220"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 861.8052562645927,
            "unit": "iter/sec",
            "range": "stddev: 0.00022351227273885148",
            "extra": "mean: 1.160354955752299 msec\nrounds: 1130"
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
        "date": 1644597354229,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 206.58370344591606,
            "unit": "iter/sec",
            "range": "stddev: 0.000026559707439528058",
            "extra": "mean: 4.840652884615372 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 270.19740444216205,
            "unit": "iter/sec",
            "range": "stddev: 0.000010278643386046307",
            "extra": "mean: 3.70099780219783 msec\nrounds: 273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 409.037084422982,
            "unit": "iter/sec",
            "range": "stddev: 0.000015113118221902395",
            "extra": "mean: 2.444766105769295 msec\nrounds: 416"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 838.354023142871,
            "unit": "iter/sec",
            "range": "stddev: 0.000008961808591475773",
            "extra": "mean: 1.192813504074497 msec\nrounds: 859"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 190.11437121314603,
            "unit": "iter/sec",
            "range": "stddev: 0.00011067221128412744",
            "extra": "mean: 5.259991623036502 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 247.15660716114908,
            "unit": "iter/sec",
            "range": "stddev: 0.000010370709810291924",
            "extra": "mean: 4.046017670682734 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 382.19020857860426,
            "unit": "iter/sec",
            "range": "stddev: 0.0001089607056671443",
            "extra": "mean: 2.616498218829518 msec\nrounds: 393"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 748.3182134303166,
            "unit": "iter/sec",
            "range": "stddev: 0.000009976061896831736",
            "extra": "mean: 1.336329895561362 msec\nrounds: 766"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.055542322834324,
            "unit": "iter/sec",
            "range": "stddev: 0.00012244670891557412",
            "extra": "mean: 36.961003703704 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.714400826499425,
            "unit": "iter/sec",
            "range": "stddev: 0.00006144823665671648",
            "extra": "mean: 34.82573103448282 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 298.6666708862301,
            "unit": "iter/sec",
            "range": "stddev: 0.000013191949721624162",
            "extra": "mean: 3.3482142384107063 msec\nrounds: 302"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 487.9962274743671,
            "unit": "iter/sec",
            "range": "stddev: 0.000011568054472663825",
            "extra": "mean: 2.049196169354663 msec\nrounds: 496"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1481.554110964002,
            "unit": "iter/sec",
            "range": "stddev: 0.000006180215387978507",
            "extra": "mean: 674.9669098142698 usec\nrounds: 1508"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1243.3556353336915,
            "unit": "iter/sec",
            "range": "stddev: 0.0000068962688564739014",
            "extra": "mean: 804.2751177394392 usec\nrounds: 1274"
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
        "date": 1644600099051,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 203.14344566136847,
            "unit": "iter/sec",
            "range": "stddev: 0.00001560169051060736",
            "extra": "mean: 4.922629901960793 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 267.30309884482216,
            "unit": "iter/sec",
            "range": "stddev: 0.000024536142100427145",
            "extra": "mean: 3.74107148148152 msec\nrounds: 270"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 405.36721979730714,
            "unit": "iter/sec",
            "range": "stddev: 0.000011349391260248038",
            "extra": "mean: 2.4668990267639868 msec\nrounds: 411"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 840.803656483826,
            "unit": "iter/sec",
            "range": "stddev: 0.000009754206504554428",
            "extra": "mean: 1.1893383101851869 msec\nrounds: 864"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 186.88932799640904,
            "unit": "iter/sec",
            "range": "stddev: 0.000015444935199026377",
            "extra": "mean: 5.350760317460258 msec\nrounds: 189"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 243.34669366034205,
            "unit": "iter/sec",
            "range": "stddev: 0.000015087793516301819",
            "extra": "mean: 4.109363414634175 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 385.8944238255721,
            "unit": "iter/sec",
            "range": "stddev: 0.000011595955112121132",
            "extra": "mean: 2.5913823529412006 msec\nrounds: 391"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 746.1866245020882,
            "unit": "iter/sec",
            "range": "stddev: 0.000008919033732354684",
            "extra": "mean: 1.340147313237188 msec\nrounds: 763"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.975988672482735,
            "unit": "iter/sec",
            "range": "stddev: 0.000048919757542946935",
            "extra": "mean: 37.07000370370355 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.63614343429485,
            "unit": "iter/sec",
            "range": "stddev: 0.00004604554796817733",
            "extra": "mean: 34.92090344827624 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 298.47247322789457,
            "unit": "iter/sec",
            "range": "stddev: 0.000012029253375829794",
            "extra": "mean: 3.3503927152319464 msec\nrounds: 302"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 487.3434163638265,
            "unit": "iter/sec",
            "range": "stddev: 0.000010644742712248922",
            "extra": "mean: 2.0519411290322007 msec\nrounds: 496"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1464.6082168081082,
            "unit": "iter/sec",
            "range": "stddev: 0.000005910375416404192",
            "extra": "mean: 682.7764507421299 usec\nrounds: 1482"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1223.6328207344013,
            "unit": "iter/sec",
            "range": "stddev: 0.00000694999197660505",
            "extra": "mean: 817.2386217949098 usec\nrounds: 1248"
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
        "date": 1644600576469,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 129.94009669386344,
            "unit": "iter/sec",
            "range": "stddev: 0.0005108483730196369",
            "extra": "mean: 7.695853900709204 msec\nrounds: 141"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 172.4565827421735,
            "unit": "iter/sec",
            "range": "stddev: 0.0006579088787204234",
            "extra": "mean: 5.7985609137055825 msec\nrounds: 197"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 248.41823827084605,
            "unit": "iter/sec",
            "range": "stddev: 0.0006900511679875731",
            "extra": "mean: 4.025469333333398 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 522.4372951569927,
            "unit": "iter/sec",
            "range": "stddev: 0.0004805783973121991",
            "extra": "mean: 1.9141053084648167 msec\nrounds: 697"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.00800595713898,
            "unit": "iter/sec",
            "range": "stddev: 0.0007713593703329999",
            "extra": "mean: 8.546423741007162 msec\nrounds: 139"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.87806552167865,
            "unit": "iter/sec",
            "range": "stddev: 0.00044409674944840356",
            "extra": "mean: 6.41527078651695 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 221.88144545014183,
            "unit": "iter/sec",
            "range": "stddev: 0.0007415600542289161",
            "extra": "mean: 4.50691132812503 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 482.18989769922626,
            "unit": "iter/sec",
            "range": "stddev: 0.0005118172278069256",
            "extra": "mean: 2.073871735537201 msec\nrounds: 605"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.76097073392018,
            "unit": "iter/sec",
            "range": "stddev: 0.0018968094119376755",
            "extra": "mean: 48.16730454545444 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.965814054441154,
            "unit": "iter/sec",
            "range": "stddev: 0.001907173214429244",
            "extra": "mean: 45.52528750000118 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 184.6049582584229,
            "unit": "iter/sec",
            "range": "stddev: 0.0005216193307862305",
            "extra": "mean: 5.416972596153839 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 311.63322079561425,
            "unit": "iter/sec",
            "range": "stddev: 0.0006129318722751285",
            "extra": "mean: 3.2089005063290523 msec\nrounds: 395"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 912.9679768991504,
            "unit": "iter/sec",
            "range": "stddev: 0.0004000858061899569",
            "extra": "mean: 1.0953286701209932 msec\nrounds: 1158"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 800.6865813571287,
            "unit": "iter/sec",
            "range": "stddev: 0.0003014910758848394",
            "extra": "mean: 1.2489281365313298 msec\nrounds: 1084"
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
        "date": 1644601024498,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 232.49274950496022,
            "unit": "iter/sec",
            "range": "stddev: 0.00001193736862114368",
            "extra": "mean: 4.301209401709386 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 304.72718365042346,
            "unit": "iter/sec",
            "range": "stddev: 0.00001066156988187976",
            "extra": "mean: 3.2816238709677403 msec\nrounds: 310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 464.2321476811309,
            "unit": "iter/sec",
            "range": "stddev: 0.000015665084605453174",
            "extra": "mean: 2.154094680851086 msec\nrounds: 470"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 963.3197042164569,
            "unit": "iter/sec",
            "range": "stddev: 0.00003566239196475434",
            "extra": "mean: 1.0380769703173238 msec\nrounds: 977"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 213.3788753325474,
            "unit": "iter/sec",
            "range": "stddev: 0.00001385588541117307",
            "extra": "mean: 4.686499534883745 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 277.2277461325299,
            "unit": "iter/sec",
            "range": "stddev: 0.00009282111693267587",
            "extra": "mean: 3.607142553191432 msec\nrounds: 282"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 441.35561486480157,
            "unit": "iter/sec",
            "range": "stddev: 0.00001114650647685821",
            "extra": "mean: 2.265746636771179 msec\nrounds: 446"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 864.1015074491477,
            "unit": "iter/sec",
            "range": "stddev: 0.000008366281254757257",
            "extra": "mean: 1.1572714448236858 msec\nrounds: 879"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 30.379713093989523,
            "unit": "iter/sec",
            "range": "stddev: 0.0000340154914104804",
            "extra": "mean: 32.91670322580647 msec\nrounds: 31"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 32.23949755549054,
            "unit": "iter/sec",
            "range": "stddev: 0.00010353435765861506",
            "extra": "mean: 31.017853124999938 msec\nrounds: 32"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 337.32504592107165,
            "unit": "iter/sec",
            "range": "stddev: 0.000025939022221361107",
            "extra": "mean: 2.9644997076024504 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 556.87255641371,
            "unit": "iter/sec",
            "range": "stddev: 0.000013286996048092507",
            "extra": "mean: 1.7957430088493773 msec\nrounds: 565"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1688.23031652416,
            "unit": "iter/sec",
            "range": "stddev: 0.000006357839616193478",
            "extra": "mean: 592.3362412178843 usec\nrounds: 1708"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1416.6104476931043,
            "unit": "iter/sec",
            "range": "stddev: 0.00000792114073937375",
            "extra": "mean: 705.9103662749782 usec\nrounds: 1447"
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
        "date": 1644602707101,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 207.17191314596283,
            "unit": "iter/sec",
            "range": "stddev: 0.000011973350570546837",
            "extra": "mean: 4.826909134615419 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 269.98467241429495,
            "unit": "iter/sec",
            "range": "stddev: 0.000009328207215707188",
            "extra": "mean: 3.7039139705882533 msec\nrounds: 272"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 410.3765283566199,
            "unit": "iter/sec",
            "range": "stddev: 0.000009995792441928009",
            "extra": "mean: 2.4367865384615603 msec\nrounds: 416"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 824.1815660159824,
            "unit": "iter/sec",
            "range": "stddev: 0.000008771090407234541",
            "extra": "mean: 1.2133248803827386 msec\nrounds: 836"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 189.72921270621725,
            "unit": "iter/sec",
            "range": "stddev: 0.0000150535367193972",
            "extra": "mean: 5.270669633507792 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 246.0165085969401,
            "unit": "iter/sec",
            "range": "stddev: 0.000009288590593321069",
            "extra": "mean: 4.064767871485994 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 391.0370351671047,
            "unit": "iter/sec",
            "range": "stddev: 0.000010295301953168609",
            "extra": "mean: 2.5573025316455325 msec\nrounds: 395"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 753.7242033714584,
            "unit": "iter/sec",
            "range": "stddev: 0.000008865449123471968",
            "extra": "mean: 1.3267452411995442 msec\nrounds: 767"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.055938152129404,
            "unit": "iter/sec",
            "range": "stddev: 0.00015442383023608566",
            "extra": "mean: 36.960462962963135 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.70856784438427,
            "unit": "iter/sec",
            "range": "stddev: 0.00004520598831309471",
            "extra": "mean: 34.83280689655202 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 298.601276227811,
            "unit": "iter/sec",
            "range": "stddev: 0.000009959108164663431",
            "extra": "mean: 3.3489475083056 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 490.7341895889357,
            "unit": "iter/sec",
            "range": "stddev: 0.000009784260361768105",
            "extra": "mean: 2.0377630522088785 msec\nrounds: 498"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1454.8911867525057,
            "unit": "iter/sec",
            "range": "stddev: 0.000005618467595353804",
            "extra": "mean: 687.336626343941 usec\nrounds: 1488"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1243.0928503885193,
            "unit": "iter/sec",
            "range": "stddev: 0.000005350805319203545",
            "extra": "mean: 804.445138339793 usec\nrounds: 1265"
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
        "date": 1644937382970,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 199.83664837930385,
            "unit": "iter/sec",
            "range": "stddev: 0.00001388619819002991",
            "extra": "mean: 5.0040871287129 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 263.33877731805404,
            "unit": "iter/sec",
            "range": "stddev: 0.00001263858461652248",
            "extra": "mean: 3.797389849624102 msec\nrounds: 266"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 401.5764688424069,
            "unit": "iter/sec",
            "range": "stddev: 0.000011493763284921501",
            "extra": "mean: 2.4901857493857196 msec\nrounds: 407"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 843.3683659619843,
            "unit": "iter/sec",
            "range": "stddev: 0.000007642502306417698",
            "extra": "mean: 1.18572149532708 msec\nrounds: 856"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 186.80313364244205,
            "unit": "iter/sec",
            "range": "stddev: 0.00001587769920562369",
            "extra": "mean: 5.353229255319076 msec\nrounds: 188"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 241.50320267748188,
            "unit": "iter/sec",
            "range": "stddev: 0.000013038431791462033",
            "extra": "mean: 4.140731836734525 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 385.43649401447914,
            "unit": "iter/sec",
            "range": "stddev: 0.000011851624264399524",
            "extra": "mean: 2.5944611253194787 msec\nrounds: 391"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 766.1541683617835,
            "unit": "iter/sec",
            "range": "stddev: 0.000008178425754842784",
            "extra": "mean: 1.3052203346204243 msec\nrounds: 777"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 29.023631040393106,
            "unit": "iter/sec",
            "range": "stddev: 0.000034699661062288454",
            "extra": "mean: 34.45468275862066 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 30.319264891231274,
            "unit": "iter/sec",
            "range": "stddev: 0.000034643894321965225",
            "extra": "mean: 32.98232999999986 msec\nrounds: 30"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 296.64670953753546,
            "unit": "iter/sec",
            "range": "stddev: 0.000011884551154939005",
            "extra": "mean: 3.3710132890365583 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 522.2325796169104,
            "unit": "iter/sec",
            "range": "stddev: 0.000011880124176089299",
            "extra": "mean: 1.9148556390977394 msec\nrounds: 532"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1443.8927745605172,
            "unit": "iter/sec",
            "range": "stddev: 0.000005030786007055739",
            "extra": "mean: 692.5722031571032 usec\nrounds: 1457"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1242.854695194356,
            "unit": "iter/sec",
            "range": "stddev: 0.000005436365165097756",
            "extra": "mean: 804.5992857142655 usec\nrounds: 1260"
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
        "date": 1644938546937,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.02194314016666,
            "unit": "iter/sec",
            "range": "stddev: 0.00056724755586482",
            "extra": "mean: 8.262964335664385 msec\nrounds: 143"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 153.4391356514882,
            "unit": "iter/sec",
            "range": "stddev: 0.000919099346892037",
            "extra": "mean: 6.517242134831467 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 240.91131933879166,
            "unit": "iter/sec",
            "range": "stddev: 0.000493243843063865",
            "extra": "mean: 4.150905000000054 msec\nrounds: 280"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 487.9205088237465,
            "unit": "iter/sec",
            "range": "stddev: 0.0003564502724504412",
            "extra": "mean: 2.04951417682923 msec\nrounds: 656"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.90414532635693,
            "unit": "iter/sec",
            "range": "stddev: 0.0010893569881108177",
            "extra": "mean: 9.267484552845419 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.2868727537597,
            "unit": "iter/sec",
            "range": "stddev: 0.0006487722394278922",
            "extra": "mean: 6.9306374233129455 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 236.8073806984873,
            "unit": "iter/sec",
            "range": "stddev: 0.0004940108022846288",
            "extra": "mean: 4.222841353383492 msec\nrounds: 266"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 478.4173286099941,
            "unit": "iter/sec",
            "range": "stddev: 0.00045178906046883206",
            "extra": "mean: 2.0902252911812904 msec\nrounds: 601"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.591975732310267,
            "unit": "iter/sec",
            "range": "stddev: 0.002505659343030045",
            "extra": "mean: 51.04130454545439 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.86160293645038,
            "unit": "iter/sec",
            "range": "stddev: 0.0015715966580046733",
            "extra": "mean: 45.742300000000256 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 185.08930435542212,
            "unit": "iter/sec",
            "range": "stddev: 0.0005825356182335765",
            "extra": "mean: 5.402797333333353 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 319.55421323591884,
            "unit": "iter/sec",
            "range": "stddev: 0.00042391974836873187",
            "extra": "mean: 3.129359459459623 msec\nrounds: 407"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 954.6437206356309,
            "unit": "iter/sec",
            "range": "stddev: 0.00023207333790379404",
            "extra": "mean: 1.0475112111292886 msec\nrounds: 1222"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 837.3846410749896,
            "unit": "iter/sec",
            "range": "stddev: 0.00016596513125426794",
            "extra": "mean: 1.1941943414632652 msec\nrounds: 1025"
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
        "date": 1644939050372,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 229.8237223080517,
            "unit": "iter/sec",
            "range": "stddev: 0.00002793672828600856",
            "extra": "mean: 4.351160924369754 msec\nrounds: 238"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 301.0952582838839,
            "unit": "iter/sec",
            "range": "stddev: 0.00003937349205358569",
            "extra": "mean: 3.321208064516123 msec\nrounds: 310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 456.5547178095429,
            "unit": "iter/sec",
            "range": "stddev: 0.000036419405220936373",
            "extra": "mean: 2.1903179640718586 msec\nrounds: 501"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 936.2246916835534,
            "unit": "iter/sec",
            "range": "stddev: 0.000015243861956748888",
            "extra": "mean: 1.0681196606786385 msec\nrounds: 1002"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 211.16045206059803,
            "unit": "iter/sec",
            "range": "stddev: 0.00006020065667833514",
            "extra": "mean: 4.7357352678569935 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 276.03167072454386,
            "unit": "iter/sec",
            "range": "stddev: 0.000024903508415469754",
            "extra": "mean: 3.6227726962458413 msec\nrounds: 293"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 434.2393227268464,
            "unit": "iter/sec",
            "range": "stddev: 0.000011650019605913117",
            "extra": "mean: 2.302877578475405 msec\nrounds: 446"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 833.8936199431402,
            "unit": "iter/sec",
            "range": "stddev: 0.000010629106320090662",
            "extra": "mean: 1.1991937293730417 msec\nrounds: 909"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 30.66328948449966,
            "unit": "iter/sec",
            "range": "stddev: 0.00009972321943570517",
            "extra": "mean: 32.61228709677419 msec\nrounds: 31"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 32.50253569024619,
            "unit": "iter/sec",
            "range": "stddev: 0.00019884692209934434",
            "extra": "mean: 30.766830303030595 msec\nrounds: 33"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 335.1278561910231,
            "unit": "iter/sec",
            "range": "stddev: 0.000014798964939869794",
            "extra": "mean: 2.9839357771262063 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 549.7484877800756,
            "unit": "iter/sec",
            "range": "stddev: 0.000012345234446123947",
            "extra": "mean: 1.8190136439266487 msec\nrounds: 601"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1655.8027759814102,
            "unit": "iter/sec",
            "range": "stddev: 0.000005995635052105094",
            "extra": "mean: 603.936661120338 usec\nrounds: 1803"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1394.685397144865,
            "unit": "iter/sec",
            "range": "stddev: 0.000007639376212937948",
            "extra": "mean: 717.0075789473049 usec\nrounds: 1425"
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
        "date": 1645453886990,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 154.4760638007441,
            "unit": "iter/sec",
            "range": "stddev: 0.0006058741375494191",
            "extra": "mean: 6.473494827586246 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 204.4178184897317,
            "unit": "iter/sec",
            "range": "stddev: 0.0004383301713203335",
            "extra": "mean: 4.891941452991447 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 299.7235465352222,
            "unit": "iter/sec",
            "range": "stddev: 0.0004410716749272609",
            "extra": "mean: 3.336407871720163 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 643.3734711229031,
            "unit": "iter/sec",
            "range": "stddev: 0.0004253000016904588",
            "extra": "mean: 1.5543071713147631 msec\nrounds: 753"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 136.94366741436195,
            "unit": "iter/sec",
            "range": "stddev: 0.0007525727277137127",
            "extra": "mean: 7.302272670807158 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 184.71712643680328,
            "unit": "iter/sec",
            "range": "stddev: 0.0007798423200422229",
            "extra": "mean: 5.41368317757004 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 279.34684644075867,
            "unit": "iter/sec",
            "range": "stddev: 0.0006022172489822694",
            "extra": "mean: 3.5797790909090175 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 592.4061372563048,
            "unit": "iter/sec",
            "range": "stddev: 0.00022313883761431792",
            "extra": "mean: 1.6880311278195783 msec\nrounds: 665"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.35665284381531,
            "unit": "iter/sec",
            "range": "stddev: 0.0038043744745438215",
            "extra": "mean: 41.056544444444135 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.748131020463028,
            "unit": "iter/sec",
            "range": "stddev: 0.0026658006672266427",
            "extra": "mean: 37.38578965517155 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 217.76209353021179,
            "unit": "iter/sec",
            "range": "stddev: 0.0009669449017398126",
            "extra": "mean: 4.59216746031725 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 375.867852022604,
            "unit": "iter/sec",
            "range": "stddev: 0.0004724983665676375",
            "extra": "mean: 2.660509523809612 msec\nrounds: 441"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1195.5114654863244,
            "unit": "iter/sec",
            "range": "stddev: 0.0002734063305233552",
            "extra": "mean: 836.4620740740518 usec\nrounds: 1350"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 973.2334301626255,
            "unit": "iter/sec",
            "range": "stddev: 0.00035729234987679853",
            "extra": "mean: 1.0275027234040879 msec\nrounds: 1175"
          }
        ]
      }
    ]
  }
}